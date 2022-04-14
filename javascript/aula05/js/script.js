/*
let nomes = ["Tawan", "Cátia", "Roseli", "Samara", "André"];

for(let nome of nomes) {
    console.log(`O dado é ${nome} tem ${nome.length} letras`);
}

for(let i = 0; i < nomes.length; i++) {
    console.log(`O dado é ${nomes[i]} tem ${nomes[i].length} letras`);
}
*/

// Exercício I: Dado o array: [10, 20, -3, 14]. Some todos
// os valores.

// Exercício II: Dado o array [1000, 0, -12, 20, 1].
// Indique qual o maior número no array.

// Exercício III: Dado o array

// ["batata", "feijão", "arroz", "alface", "macarrão"]
// Indique a soma de todos os caracteres das palavras.

// Exercício IV: Dado o array [true, false, true, true].
// Mostre o resultado do OU de todos os valores.

// Exercício: Receba N notas e calcule a média:
// Exercício I: Receba N números via prompt. E adicione no array.
// Em seguida, ache o menor valor.

// Exercício II: Receba N palavras e verifique qual é a mais frequente.

// Exercício IV: Dado o array [100, 2, -2, 3, -1, 0, 3].
// Filtre do array os valores igual a zero ou negativo.

// Exercício V: Dados os arrays:
// ["batata", "feijão", "arroz", "alface", "macarrão"]
// ["batata", "carne", "frango", "brocolis", "macarrão"]
// Indique quais palavras estão presentes nos dois arrays ao mesmo tempo.

function sum() {
    let numbers = [10, 20, -3, 14];
    let acc = 0;
    for (let number of numbers) {
        console.log(`${acc} + ${number}  é igual a: ${acc += number}`);
    }
}

function maiorNumber() {
    let numbers = [1000, 0, -12, 20, 1];

    for (let number of numbers) {
        let num = numbers[0];

        if (num > number) console.log(`${num} é maior que ${number}`);

        else if (num > number) console.log(`${num} é menor que ${number}`);

        else if (num === number) console.log(`${num} é igual a ${number}`);
    }
}

function sumItensArray() {
    let lista = ["batata", "feijão", "arroz", "alface", "macarrão"];
    let sum = 0;

    for (let item of lista) {
        console.log(`O item ${item} tem ${lista.length} letras`);
        sum += item.length;
    }
    console.log(`Na lista de compras contém ${sum} caracters.`);
}

function boolean() {
    let booleans = [true, false, true, true];
    let result = booleans[0];

    for (let bool of booleans) {
        result = result || bool;
        // result  ||= bool
    }
    console.log(result);
}

function recebeNotas() {
    let qtdNotas = prompt("Digite a qtd de notas:");
    let notas = [];

    for(let i = 0; i < qtdNotas; i++) {
        let notaDigitada = prompt(`Digite a nota ${i + 1}`);
        notas.push(notaDigitada);
    }
    
    let number = notas[0];

    for (let nota of notas) {

        if (number < nota) console.log(`Nota ${number} é menor que nota: ${nota}`);

        else if (number > nota) console.log(`Nota ${number} é maior que a nota ${nota}`);

        else if (number === nota) console.log(`Nota ${number} é igual a nota ${nota}`);
    }
}

function recebePalavras() {
    let digitado = prompt("Digite a primeira palavra:");
    let palavras = [];
    
    for(let i; i < digitado; i++) {
        let palavraDigitadas = prompt(`Digite a palavra ${i + 1}`);
        palavras.push(palavraDigitadas);
    }
    
    let palavra = palavras[0];
    let palavrasFreq = [];

    for(let p of palavras) {
        palavra === p ? palavrasFreq.push(palavra) : console.log(`A palavra ${palavra} é diferente de ${p}`);
    }

    console.log(`${palavrasFreq}`)
}


// sum();
// maiorNumber()
// sumItensArray();
// boolean();
// recebeNotas();
recebePalavras();

// let listaCompras = ["batata", "feijão", "arroz", "alface", "macarrão"];
// console.log(listaCompras.includes("arroz"));
// console.log(listaCompras.includes("queijo"));

// retorna a posição do array para true, e retorna -1 para false
// console.log(listaCompras.indexOf("feijão"));
// console.log(listaCompras.indexOf("cenoura"));

// splice
// let myarray = [10, 20, 30, 40];
// myarray.splice(0, 3)
// console.log(myarray);

// listaCompras.splice(2, 1, "banana", "cebola");
// console.log(listaCompras);