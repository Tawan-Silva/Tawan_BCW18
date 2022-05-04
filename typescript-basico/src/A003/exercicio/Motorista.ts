import { Carro, Rota } from "./interfaces.models";
import { Usuario } from "./Usuario";

export class Motorista extends Usuario {
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
