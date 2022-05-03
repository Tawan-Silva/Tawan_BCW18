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
  }

  saque(valor: number): void {
    const op = new Operacao(TipoOperacao[1], valor);
    this.saldo -= op.valor;
    this.historicoTipoSQ.push(op.tipo);
    this.historicoValorSQ.push(op.valor);
  }

  transferencia(valor: number): void {
    const op = new Operacao(TipoOperacao[2], valor);
    this.saldo += op.valor;
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
