// Exercício: Crie um objeto nomeado partida ele possui:
// uma propriedade:
// time1 é um objeto com nome, cidade, estado e um array com o nome de jogadores
// time2 é um objeto com nome, cidade, estado e um array com o nome de jogadores
// placar é uma string representando o placar "1x0"
// data é um objeto do tipo date, pode ser new Date(2022, 7, 2);
// Exercício: Crie uma função que determina qual time ganhou.
// Ela recebe como parametro a partida. E mostra mensagem.


const partida = {
    time1: {
        nome: 'Sport',
        cidade: 'Recife',
        estado: 'Pernambuco',
        jogadores: [],
        gols: '0'
    },

    time2: {
        nome: 'Santa Cruz',
        cidade: 'Recife',
        estado: 'Pernambuco',
        jogadores: [],
        gols: '1'
    },

    data: new Date(2023, 7, 2),

    timeVencedor() {
        if(this.time1.gols > this.time2.gols) console.log(`${this.time1.nome} GANHOU! no dia ${this.data}`); 
        else if(this.time1.gols < this.time2.gols) console.log(`${this.time2.nome} Ganhou no dia ${this.data}`);
        else if(this.time1.gols === this.time2.gols) console.log(`${this.time1.nome} e ${this.time2.nome} Empataram no dia ${this.data}`);
    }
};

partida.timeVencedor()