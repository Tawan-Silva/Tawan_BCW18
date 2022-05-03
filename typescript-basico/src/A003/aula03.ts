export class Pessoa {
  constructor(public nome: string, public peso: number) {}
  bucho: string[] = [];

  comer(comida: string) {
    this.bucho.push(comida);
    this.peso += 0.5;
    console.log(`Estou comendo ${comida}, é muito bom.`);
  }

  dormir() {
    console.log('Estou dormundo. zzzZZZZ');
  }
}

class PessoaFit extends Pessoa {
  constructor(nome: string, peso: number, public esportePraticado: string) {
    super(nome, peso);
  }

  /* Reutilizando e sobrescrevendo
  métodos da class Pessoa*/

  comer(comida: string): void {
    if (comida !== 'pizza' && comida !== 'hamburger') {
      super.comer(comida.toLowerCase());
    } else {
      console.log('Não como pizza');
    }
  }

  treinar(): void {
    console.log('Vou treinar');
    this.peso -= 0.3;
  }

  dormir(): void {
    this.treinar();
    super.dormir();
  }
}

// Estender da classe Pessoa
class PessoaSed extends Pessoa {
  // Definir o construtor e chamada p/ comer
  constructor(public nome: string, public peso: number) {
    super(nome, peso);
  }

  treinar() {
    console.log('Vou terinar');
    this.peso -= 0.3;
  }
  // Antes de dormir comer pizza
  dormir() {
    this.comer('Pizza');
    super.dormir();
  }

  comer(comida: string) {
    super.comer(comida);
  }
}

const pSed = new PessoaSed('Tawan', 64);
const fit = new PessoaFit('Tawan', 64, 'Futebol');

pSed.dormir();
fit.treinar();

fit.comer('Hambuguer');
fit.comer('pizza');
