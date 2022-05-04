import { Usuario } from "./Usuario";
import { Viagem } from "./Viagem";

export class Cliente extends Usuario {
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
