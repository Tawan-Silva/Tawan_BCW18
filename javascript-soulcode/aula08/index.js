const array = [10, 20, 30]

let marcas = ['Fiat', 'Chevrolet', 'Ford', 'Volkswagen'];
let marcasIniciadasComF = [];
let novoIndice = 0;

function selecionarMarcas(valor, indice) {
    if(marcas[indice].indexOf("F") == 0) {
        console.log(marcas[indice]);
        marcasIniciadasComF[novoIndice] = marcas[indice]
        marcasIniciadasComF[novoIndice]
        novoIndice++
    }  
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);

const numeros = [10, 50, 60, 80]

const nomes = ['Tawan', 'Cátia', 'Samara'];

const nomesUpperCase = nomes.map(nomes => nomes.toUpperCase());
console.log(nomesUpperCase);

const nomesLowerCase = nomes.map(nomes => nomes.toLocaleLowerCase());
console.log(nomesLowerCase);

const nomesExclamacao = nomes.map(nome => nome + "!");
console.log(nomesExclamacao);

const numerosPor100 = numeros.map(numero => numero * 100);
// console.log(numerosPor100);


const temperaturas = [20, 30, 0, -12, -8, 99];
const temPositivas = temperaturas.filter(temp => temp > 0)
console.log(temPositivas);

const novosNomes = nomes.filter(nome => nome.length > 4)
console.log(novosNomes);

let frase = "Procurei remédio na vida noturna";
let palavras = frase.split(" ");
console.log(palavras);
let novaFrase = palavras.join("+");
console.log(novaFrase);


let email = "jose@gmail.com";
let emailSplit = email.split("@");
console.log(emailSplit[0]);