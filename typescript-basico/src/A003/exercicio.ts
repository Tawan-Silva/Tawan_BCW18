/* Alunos
 * Bruna Pereira de Souza
 * Tawan Silva Souza
 * Jaqueline A Santos
 * João Victor Minervino
 */

class Usuario {
  constructor(
    public nome: string,
    public sobrenome: string,
    public email: string,
  ) {}
}

class Motorista extends Usuario {
  constructor(
    public nome: string,
    public sobrenome: string,
    public email: string,
    public nota: number,
    public carro: Carro,
    public emRota: boolean,
    public rotaAtual?: Rota,
  ) {
    super(nome, sobrenome, email);
  }
}

class Cliente extends Usuario {
  HistoricoViagens: any[] = [];

  constructor(
    public nome: string,
    public sobrenome: string,
    public email: string,
  ) {
    super(nome, sobrenome, email);
  }

  viajar(viagem: Viagem): void {
    this.HistoricoViagens.push(viagem);
  }
}

class Viagem {
  constructor(
    public cliente: Cliente,
    public motorista: Motorista,
    public dataFinalizada = Date(),
    public rota: Rota,
  ) {}

  calcularCusto(km: number, kml: number, gasolina: number) {
    const custo = (km / kml) * gasolina;
    return `Distancia percorrida ${km}Km, custo pela viagem ${custo.toFixed(
      2,
    )}`;
  }
}

class Sistema {
  arrayUsuarios: any[] = [];
  arrayMotoristas: any[] = [];

  usuarios(): any {
    const concat = this.arrayUsuarios.concat(this.arrayMotoristas);
    return concat;
  }
  registrarViagem(cliente: Cliente, motorista: Motorista, rota: Rota): void {
    if (motorista.emRota == false) {
      const calcCusto = viagem1.calcularCusto(
        rota.distancia,
        motorista1.carro.kml,
        7.3,
      );
      motorista.emRota = true;
      this.arrayUsuarios.push(cliente, rota, calcCusto);
      this.arrayMotoristas.push(motorista);

      return console.log(this.arrayUsuarios.concat(this.arrayMotoristas));
    } else {
      console.log(
        `${motorista.nome} já está em rota com o cliente ${cliente.nome} para ${rota.enderocoDestino?.estado}`,
      );
    }
  }
}

interface Coordenada {
  longitude: number;
  latitude: number;
}

interface Endereco {
  estado: string;
  cidade: string;
  rua: string;
  cep: string;
  numero: string;
}

interface Rota {
  enderecoOrigem?: Endereco;
  coordenadaOrigem: Coordenada;
  enderocoDestino?: Endereco;
  coordenadaDestino: Coordenada;
  distancia: number;
}

interface Carro {
  marca: string;
  ano: number;
  kml: number;
}

const carro1: Carro = {
  marca: 'Tiggo 8 PRO HYBRID',
  ano: 2022,
  kml: 100,
};

const enderecoOrigem: Endereco = {
  estado: 'Pernambuco',
  cidade: 'Recife',
  rua: 'Rua São Miguel',
  cep: '56750-059',
  numero: '178',
};

const coordenadaOrigem: Coordenada = {
  longitude: -34.9145006,
  latitude: 8.0807226,
};

const enderecoDestino: Endereco = {
  estado: 'São Paulo',
  cidade: 'São Paulo',
  rua: 'Rua Helena',
  cep: '04552-050',
  numero: '235',
};

const coordenadaDestino: Coordenada = {
  longitude: -46.669535,
  latitude: -23.47355,
};

const rota: Rota = {
  coordenadaOrigem: coordenadaOrigem,
  enderecoOrigem: enderecoOrigem,
  coordenadaDestino: coordenadaDestino,
  enderocoDestino: enderecoDestino,
  distancia: 2656,
};

const motorista1 = new Motorista(
  'Marco',
  'Antonio',
  'marcoanto@hotmail.com',
  4.7,
  carro1,
  false,
  rota,
);

const cliente1 = new Cliente('João', 'Victor', 'victorjoao@gmail.com');

const viagem1 = new Viagem(cliente1, motorista1, Date(), rota);

const system = new Sistema();

cliente1.viajar(viagem1);

system.registrarViagem(cliente1, motorista1, rota);
