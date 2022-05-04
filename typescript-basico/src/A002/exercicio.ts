<<<<<<< HEAD
class Conta {
  historicoValorSQ: number[] = [];
  historicoValorTF: number[] = [];
  historicoValorDP: number[] = [];
  historicoTipoDP: string[] = [];
  historicoTipoSQ: string[] = [];
  historicoTipoTF: string[] = [];

  constructor(public numero: number, public saldo: number, public senha: number) {}

  deposito(valor: number) {
    const op = new Operacao(TipoOperacao[0], valor);
    this.saldo += op.valor;
    this.historicoTipoDP.push(op.tipo);
    this.historicoValorDP.push(op.valor);
=======
// conta = new Conta("23132", 1000, 1234);
/*
export function Conta(numero, saldoInicial, senha) {
  this.numero = numero;
  this.saldo = saldoInicial;
  this.senha = senha;
  this.historico = []; // Array de operações(saque, deposito)
  this.deposito = function (valor) {
    const op = new Operacao('deposito', valor);
    this.saldo += op.valor;
    this.historico.push(op);
  };
  this.saque = function (valor) {
    const op = new Operacao('saque', valor);
    this.saldo -= op.valor;
    this.historico.push(op);
  };
  this.extrato = function () {
    this.historico.forEach((op, index) => {
      console.log(`#${index} - ${op.tipo} - R$ ${op.valor}`);
    });

    console.log(`R$ ${this.saldo}`);
  };
}
// op = new Operacao("saque", 200);
 {
  tipo: "saque",
  valor: 200,
  data: new Date(),
 }
 export function Operacao(tipo, valor) {
    this.tipo = tipo;
    this.valor = valor;
    this.data = new Date();
  }

// Exercício
/* eslint-disable */
// Transforme o exemplo de: https://www.toptal.com/developers/hastebin/ihuqoluzay.js
// em classes:
// - class Conta
// - class Operacao
// - enum TipoOperacao (para representar o tipo: DEPOSITO, SAQUE, TRANSFERENCIA)
class Conta {
  public historicoValor: number[] = [];
  public historicoTipo: string[] = [];

  constructor(
    public numero: number,
    public saldo: number,
    public senha: number,
  ) {}

  deposito(valor: number) {
    const op = new Operacao('deposito', valor);
    this.saldo += op.valor;
    this.historicoTipo.push(op.tipo);
    this.historicoValor.push(op.valor);
    console.log(`Valor deposito ${valor}`);
>>>>>>> 12f69b0e6a6b308a43365853a648a6043e83a0ee
  }

  saque(valor: number): void {
    const op = new Operacao(TipoOperacao[1], valor);
    this.saldo -= op.valor;
<<<<<<< HEAD
    this.historicoTipoSQ.push(op.tipo);
    this.historicoValorSQ.push(op.valor);
=======
    this.historicoTipo.push(op.tipo);
    this.historicoValor.push(op.valor);
    console.log(`Valor sacado ${valor}`);
>>>>>>> 12f69b0e6a6b308a43365853a648a6043e83a0ee
  }

  transferencia(valor: number): void {
    const op = new Operacao(TipoOperacao[2], valor);
    this.saldo += op.valor;
<<<<<<< HEAD
    this.historicoTipoTF.push(op.tipo);
    this.historicoValorTF.push(op.valor);
  }

  extrato(): void {
    this.historicoTipoDP.forEach((el) => {
      console.log(`Tipo ${el}`);
      this.historicoValorDP.forEach((el) => console.log(`Valor ${el}`));
    });

    this.historicoTipoSQ.forEach((el) => {
      console.log(`Tipo ${el}`);
      this.historicoValorSQ.forEach((el) => console.log(`Valor ${el}`));
    });

    this.historicoTipoTF.forEach((el) => {
      console.log(`Tipo ${el}`);
      this.historicoValorTF.forEach((el) => console.log(`Valor ${el}`));
=======
    this.historicoTipo.push(op.tipo);
    this.historicoValor.push(op.valor);
    console.log(`valor transferido ${valor}`);
  }

  extrato(): void {
    this.historicoTipo.forEach((el) => {
      console.log(`Tipo ${el}`);
      this.historicoValor.forEach((el) => console.log(`Valor ${el}`));
>>>>>>> 12f69b0e6a6b308a43365853a648a6043e83a0ee
    });
  }
}

class Operacao {
  constructor(public tipo: string, public valor: number) {}
}

enum TipoOperacao {
  DEPOSITO,
  SAQUE,
  TRANSFERENCIA,
}

const conta1 = new Conta(1, 500, 2332);
conta1.deposito(500);
conta1.saque(100);
conta1.transferencia(1000);
conta1.extrato();
