const btnCalc = document.querySelector('#calculadora');
const btnVerificaNumero = document.querySelector('#verificaNum');
const btnVerificaDiaSemana = document.querySelector('#diaSemana');
const btnMostraNumero = document.querySelector('#mostraNum');
const btnTaduaba = document.querySelector('#tabuada');

btnCalc.addEventListener('click', () => {
    calculadora();
});

btnVerificaNumero.addEventListener('click', () => {
    verificaNum();
});

btnVerificaDiaSemana.addEventListener('click', () => {
    diaDaSemana();
});

btnMostraNumero.addEventListener('click', () => {
    mostranNum();
});

btnTaduaba.addEventListener('click', () => {
    tabuadaComFor();
});

function calculadora() {
    const op = prompt("Qual a operação deseja fazer ? +, -, *, /");
    const num1 = prompt("Digite o primeiro número:");
    const num2 = prompt("Digite o segundo número:");
    const valor1 = parseInt(num1);
    const valor2 = parseInt(num2);
    let calc;

    switch (op) {
        case "+":
            calc = valor1 + valor2;
            alert(`${valor1} + ${valor2} é igual a: ${calc}`);
            break;

        case "-":
            calc = valor1 - valor2;
            alert(`${valor1} - ${valor2} é igual a: ${calc}`);
            break;

        case "*":
            calc = valor1 * valor2;
            alert(`${valor1} * ${valor2} é igual a: ${calc}`);
            break;

        case "/":
            calc = valor1 / valor2;
            alert(`${valor1} / ${valor2} é igual a: ${calc}`);
            break;

        default:
            alert(`"${op}" não é um operador válido!`)
            break;
    }
}

function verificaNum() {
    let num1 = prompt("Digite o número");
    let num2 = prompt("Digite outro número");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num1 > num2) {
        alert(`O número ${num1} é maior que ${num2}`);
    }
    else if (num1 < num2) {
        alert(`O número ${num1} é menor que ${num2}`);
    }
    else if (num1 === num2) {
        alert(`O número ${num1} é igual ao número ${num2}`);
    }
    else {
        alert("ERROR!! Verifique os números digitados! digite apenas Números!!")
    }
}

function diaDaSemana() {
    let dia = prompt("Digite um número para o dia da samana")
    dia = parseInt(dia);

    switch (dia) {
        case 1:
            alert(`Dia ${1} é domingo!`)
            break;
        case 2:
            alert(`Dia ${2} é segunda!`)
            break;
        case 3:
            alert(`Dia ${3} é terça!`)
            break;
        case 4:
            alert(`Dia ${4} é quarta!`)
            break;
        case 5:
            alert(`Dia ${5} é quinta!`)
            break;
        case 6:
            alert(`Dia ${6} é sexta!`)
            break;
        case 7:
            alert(`Dia ${7} é sábado!`)
            break;
        default:
            alert(`O número "${dia}" digitado não corresponde ao nenhum dia da semana!`)
            break;
    }
}

function mostranNum () {
    let num1 = 333;

    while (num1 <= 999) {

       console.log(`Número: ${num1++}`);
        
    }
}

function mult() {
    let num1 = prompt("Descubra a tabuada completa! Digite um número:");
    let acc = 0;
    num1 = parseInt(num1);
    
    while (acc <= 10) {
        alert(`${num1} x ${acc} = ${num1 * acc}`);
        acc++
    }
}

function tabuadaComFor() {
    let num1 = prompt("Digite um número para saber a tabuada dele:");
    num1 = parseInt(num1);

    for(let i = 0; i <= 10; i++) {
        console.log(num1 * i);
    }

}