export interface Coordenada {
    longitude: number;
    latitude: number;
}

export interface Endereco {
    estado: string;
    cidade: string;
    rua: string;
    cep: string;
    numero: string;
}

export interface Rota {
    enderecoOrigem?: Endereco;
    coordenadaOrigem: Coordenada;
    enderocoDestino?: Endereco;
    coordenadaDestino: Coordenada;
    distancia: number;
}

export interface Carro {
    marca: string;
    ano: number;
    kml: number;
}
