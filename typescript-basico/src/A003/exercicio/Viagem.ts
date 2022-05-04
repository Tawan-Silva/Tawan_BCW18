import { Cliente } from "./Cliente";
import { Rota } from "./interfaces.models";
import { Motorista } from "./Motorista";


export class Viagem {
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
