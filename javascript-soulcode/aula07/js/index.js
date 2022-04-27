// // Simples

// /*
// Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.
// Área = altura * base
// Perímetro = soma dos lados
// Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma. PI = 3,14 ou Math.PI
// Área = PI * RAIO * RAIO
// Perímetro = 2 * PI * RAIO
// Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 * (F – 32), leu um valor de temperatura em Fahrenheit e exibi-lo em Celsius
// c = (5/9) * (F - 32) 
//   */


function simples1() {
    let base = prompt("Digite o valor da base:");
    let altura = prompt("Digite o valor da altura:");
    let area = base * altura;
    let perimetro = 2 * base + 2 * altura;
    console.log(`A área é ${area}`);
    console.log(`O perímetro é ${perimetro}`);
}

// simples1();

function simples2() {
    let raio = prompt("Digite o valor da base:");
    let area = Math.PI * raio * 2;
    let perimetro = 2 * Math.PI * raio
    console.log(`A área é ${area}`);
    console.log(`O perímetro é ${perimetro}`);
}

// simples2()

function simples3() {
    let fahrenheit = prompt("Digite o valor de Fahrenheit:")
    let celsius = (5 / 9) * (fahrenheit - 32);

    console.log(`${fahrenheit}°F é igual a ${celsius.toFixed(0)}°C`);
}

// simples3();

function condicionais1() {
    const promptSigla = prompt("Escolha em qual linguagem deseja traduzir: [es, en, de]")
    const sigla = promptSigla.toLowerCase();

    if (sigla == "es") console.log("Hola mundo!")

    else if (sigla == "en") console.log("Hello World!")

    else if (sigla == "es") console.log("Hallo Welt!")

    else console.log(`Sigla: ${sigla} INCORRETA!`);
}

// condicionais1();

function condicionais2() {
    const promptNum1 = prompt("Digite o primeiro número:");
    const promptNum2 = prompt("Digite o segundo número:");

    const num1 = parseInt(promptNum1);
    const num2 = parseInt(promptNum2);

    if (num1 !== num2) {
        if (num1 > num2) {
            console.log(`${num1} é maior e diferente de ${num2} `);
        }
        else if (num2 !== num1) {
            if (num2 > num1) {
                console.log(`${num2} é maior e diferente de ${num1} `);
            }
        }
        else if (num1 === num2) {
            console.log(`${num1} é igual a ${num2}`);
        }
        else console.log(`${num1} ou ${num2} tem erros!`);
    }
}

// condicionais2();

function condicionais4() {
    const promptDia = prompt("Digite um número para saber o dia da semana:");
    const diaSemana = parseInt(promptDia);

    if (diaSemana === 1) console.log(`${1} é Domingo`);
    else if (diaSemana === 2) console.log(`Dia ${2} é Domingo`);
    else if (diaSemana === 3) console.log(`Dia ${3} é Sgunda-Feira`);
    else if (diaSemana === 4) console.log(`Dia ${4} é Terça-Feira`);
    else if (diaSemana === 5) console.log(`Dia ${5} é Quarta-Feira`);
    else if (diaSemana === 6) console.log(`Dia ${6} é Quinta-Feira`);
    else if (diaSemana === 7) console.log(`Dia ${7} é Sexta-Feira`);
    else console.log(`${diaSemana} não corresponde a nenhum dia da semana!`);
}

// condicionais4()

// function condicionais5() {
//     let notas = [];

//     for (let i = 0; i < 5; i++) {
//         let promptNotas = prompt(`Digite a nota ${i + 1}`);
//         notas.push(promptNotas);
//     }

//     for (let prop in notas) {
//         if (notas[prop] >= 70) {
//             console.log(`Você passou em todos os exames!`);

//             if (notas[prop[1]] <=) {

//             }
//         }
//     }

// }

// condicionais5();


function arrays1() {
    let arrayNumeros = [];

    for (let i = 0; i < 1000; i++)
        arrayNumeros.push(i)
    console.log(arrayNumeros.length);
}

// arrays1();

function arrays2() {
    const digitado = prompt("Digite quantos quantidade de números");
    const nPrompts = parseInt(digitado);
    let arrayNumeros = [];

    for (let i = 0; i < nPrompts; i++) {
        let lerPrompts = prompt(`Digite o número ${i + 1}`);
        arrayNumeros.push(lerPrompts);
    }
    const lerArray = prompt("Digite um número como index para encontra seu valor no Array:");

    console.log(`"${lerArray}" existe dentro do Array de Números? ${arrayNumeros.includes(lerArray)}`);

    // for (let numero of arrayNumeros) {

    //     if (lerArray === numero) {
    //         console.log(`${lerArray} existe no Array de Números`);
    //         break;
    //     }

    //     else console.log(`${lerArray} não existe no Array de Números`);
    // }
}

arrays2();