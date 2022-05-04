// Enums, classes

enum StatusApp {
  ERRO, // 0
  PENDENTE, // 1
  SUCESSO, // 2
  AVISO, // 3
  DESCONHECIDO, // 4
}
/*
let statusApp: StatusApp;

// statusApp = Number(prompt('Digite o status'));

switch (statusApp) {
  case StatusApp.ERRO:
    console.log('Pane no sistema!');
    break;
  case StatusApp.PENDENTE:
    console.log('Carregando...');
    break;
  case StatusApp.SUCESSO:
    console.log('Tudo ok!');
    break;
  case StatusApp.AVISO:
    console.log('Tem avisos!');
    break;
  case StatusApp.DESCONHECIDO:
    console.log('Estado desconhecido!');
    break;
}


if (statusApp === StatusApp.ERRO) {

} else if (statusApp === StatusApp.PENDENTE) {

} else if (statusApp === StatusApp.SUCESSO) {

} else if (statusApp === StatusApp.AVISO) {

} else if (statusApp === StatusApp.DESCONHECIDO) {

}
*/

enum Direcao {
  CIMA,
  BAIXO,
  DIREITA,
  ESQUERDA,
}

const direcao: Direcao = 1;

switch (direcao) {
  case Direcao.CIMA:
    console.log('Move para cima');
    break;
  case Direcao.BAIXO:
    console.log('Move para baixo');
    break;
  case Direcao.DIREITA:
    console.log('Move para direita');
    break;
  case Direcao.ESQUERDA:
    console.log('Move para esquerda');
    break;

  default:
    console.log('Não se move');
    break;
}

export enum FormaPagamento {
  DINHEIRO,
  PIX,
  CARTAO_DEBITO,
  CARTAO_CREDITO,
  BOLETO,
  CHEQUE,
  TRANSFERENCIA,
}

// Classes 1° Forma
class Pessoa {
  nome: string;
  idade: number;
  peso: number;
  altura: number;

  constructor(nome: string, idade: number, peso: number, altura: number) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  estudando(): void {
    console.log(`${this.nome} está estudando!`);
  }

  calculaImc() {
    let imc = this.peso / (this.altura * this.altura);
    imc = Number(imc.toFixed(2));

    console.log(`${this.nome} Seu imc é ${imc}`);
  }
}

const pessoa1 = new Pessoa('Tawan', 20, 64, 1.7);
pessoa1.calculaImc();
console.log(pessoa1);

// Classes 2° Forma
class Pessoa2 {
<<<<<<< HEAD
  constructor(public nome: string, public idade: number, public peso: number, public altura: number) {} // Obrigatório
=======
  constructor(
    public nome: string,
    public idade: number,
    public peso: number,
    public altura: number,
  ) {} // Obrigatório
>>>>>>> 12f69b0e6a6b308a43365853a648a6043e83a0ee

  calculaImc() {
    let imc = this.peso / this.altura ** 2;
    imc = Number(imc.toFixed(2));

    console.log(`${this.nome} Seu imc é ${imc}`);
    return imc;
  }

  crescer() {
    this.altura < 1.75 ? this.altura + 5 : this.altura;
    console.log(`${this.nome} sua altura aumentou para ${this.altura}`);
  }
}

const pessoa2 = new Pessoa2('Tawan', 20, 64, 1.71);
pessoa2.crescer();
