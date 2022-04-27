// Exercícios
// Exercício I: Crie uma função que recebe como parâmetros:
// um array de números e um index(number)
// Deve retornar o valor do array naquela posição
// ["a", "b", "c"] ===> funcao(array, 2) -> "c"

let array = [10, 15, 20, 30];

function arrayNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`O ${array[i]} está na index ${i}`);
    }
}

// arrayNumbers([10, 20, 30, 50]);

function arrayNumbersTwo(array, index) {
    let result = array[index]
    console.log(result);
}

// Exercício II: Crie uma função que recebe um número(PARÂMETRO)
// de 0 a 1. E retorna em porcentagem:
// percent(0.456) -> 45.6%

function percentage(n1) {
    let result = n1 * 100 + "%";
    return console.log(result);
}

// Exercício III: Crie uma função que recebe um número(PARÂMETRO).
// E retorna se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

function positiveOrNegative(n) {
    n < 0 ? console.log(`${n} é um valor negativo - TRUE`) : console.log(`${n} é valor positivo - FALSE`);
    return n
}

// Exercício Iv: Crie uma função que recebe um ARRAY de nomes.
// E retorna uma nova lista em lowercase.
// ["A", "B", "C"] ===> arrayLowercase(array) -> ["a", "b", "c"]

let nomes = ["CHORANDO", "DEVELOPER", "ERROR"];

function arrayLowerCase(array) {
    for (let a of array) {
        console.log(a.toLowerCase());
    }
}

// Outros exercícios
// 1) Crie uma função que recebe a, b, c e retorna a soma dos três

function sum(a, b, c) {
    return console.log(`${a} + ${b} + ${c} = ${a + b + c}`);
}

// 2) Crie uma função que recebe a, b e retorna o maior valor

function maxValue(a, b) {
    if (a > b) console.log(`${a} é o maior que ${b}`);

    else if (b > a) console.log(`${b} é o maior que ${a}`);

    else console.log(`${a} ${b} ${c} tem alguma coisa errada, ou um deles são iguais`);
}

// 3) Crie uma função que recebe a, b e retorna a multiplicação dos dois

function mult(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
    return a * b;
}

// 4) Crie uma função que recebe a, b e um operador(+, -, *, /)
// Com base no operador escolhido,

function calc() {
    const operador = prompt("Escolha um operador [+, -, *, /]?");
    let n1 = prompt("Digite o primeiro número:");
    let n2 = prompt("Digite o segundo número:");

    let num1 = parseInt(n1);
    let num2 = parseInt(n2);

    if (operador == "+") {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        return num1 + num2;
    }
    else if (operador == "-") {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        return num1 - num2;
    }
    else if (operador == "*") {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        return num1 * num2;
    }
    else if (operador == "/") {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        return num1 / num2;
    }
}

// 5) Crie uma função que recebe a, b:
// - Chama a função (1)
// - Verifica se o resultado dela é maior que 300
// OBS: Essa função não tem retorno, apenas mostra no console

function checkValue() {
    let result = mult(80, 70);

    return result > 300 ? console.log(`${result} é maior que 300`) : console.log(`${result} é menor que 300`);
}

// 6) Crie uma função que recebe a, b, c que:
// - Chama a função (1)
// - Chama a função (2) passando o resultado da (1) e o valor de b
// - Com o resultado de (2) e o parâmetro c chamar a função(3)
// OBS: Mostrar no console os resultados

function doideira(a, b, c) {
    const fuctionOne = mult(a, b, c);
    const functionTwo = maxValue(fuctionOne, b);
    const functionThree = multiplicacao(functionTwo, c);
    console.log(`O resultado é ${functionThree}`);
  }

// arrayNumbers(array)

// arrayNumbersTwo([10, 20, 50, 70, 80], 4);

// percentage(0.57);

// positiveOrNegative(1);

// arrayLowerCase(nomes);

// sum(55,78,90);

// maxValue(80, 44, 6);

// mult(10, 90);

// op();

// checkValue()
