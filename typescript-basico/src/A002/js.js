/*eslint-disable */
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

export function Operacao(tipo, valor) {
    this.tipo = tipo;
    this.valor = valor;
    this.data = new Date();
  }
