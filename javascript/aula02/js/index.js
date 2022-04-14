/* 
Tabela verdade E "&&" - Tabela verdade OU "||" - Tabela verdade NOT "!"
        hard-coded má prática 
*/

const btnSalario = document.querySelector('#aumentaSalario');
const btnCarro = document.querySelector('#verificaCarro');
const btnEmprestimo = document.querySelector('#consultaEmprestimo');
const btnIdade = document.querySelector('#verificaIdade');
const btnCalculadora = document.querySelector('#calcular');

btnSalario.addEventListener('click', () => {
    aumentaSalario();
});

btnCarro.addEventListener('click', () => {
    verificaCarro();
});

btnEmprestimo.addEventListener('click', () => {
    verificaEmprestimo();
});

btnIdade.addEventListener('click', () => {
    maiorDeIdade();
});

btnCalculadora.addEventListener('click', () => {
    calculadora()
});

const aumentaSalario = () => {
    const qtdDependentes = prompt("Digite a quatidade de dependentes que voce tem!")
    const salario = prompt("Digite seu salário para verificar se voce pode receber um BONUS!!")

    if (salario != "" && salario == Number(salario) && qtdDependentes >= 1) {
        let intSalario = parseInt(salario);
        let bonus = 200;
        if (intSalario < 800) {
            alert(`Seu salário recebeu um BONUS!!! DE R$: 200 REAIS, agora seu salário é de R$: ${intSalario += bonus}`);

            if (intSalario + 200 < 800) {
                alert(`Verificamos que seu salário é baixo demais, então reajustamos para R$: ${intSalario = 800} reais SHOOWW!!`)
            }

        } else {
            alert(`Seu salário é maior ou igual a R$ 800 reais, não pode receber bonus`);
        }
    }

    else {
        console.log("Salario inválido meu filho!");
    }
};

const verificaCarro = () => {
    const ligado = prompt(`O carro está ligado [S/N]?`).toLowerCase();
    const gasolinaTanque = prompt(`Tem mais de 4Litros de gasolina no tanque? Digite apenas NUMEROS!!`).toLowerCase();

    if (ligado === "s" && gasolinaTanque == Number(gasolinaTanque) && gasolinaTanque >= 4) {
        alert(`Seu carro está ligado e tem ${gasolinaTanque} de gasolina no tanque meu parceiro!
        Está pronto para viajar!!!`);
    } else {
        alert('Teu carro tá com B.O, De dez uma, ou voce precisa encher o tanque ou o carro ta desligado ou voce digitou errado!');
    }
};

const verificaEmprestimo = () => {
    const nome = prompt("Digite seu nome, para prosseguirmos a verificação do empréstimo");
    const salario = prompt("Digite seu sálario, para fazermos uma verificação");

    if (nome == "" || nome == Number(nome)) {
        alert("O NOME NÃO PODE SER VÁZIO! E NÃO PODE CONTER NUMEROS!");

    } else {
        return salario >= 1800 ? alert(`EMPRÉSTIMO APROVADO!! Show!!`) : alert(`Olá ${nome}, seu salario de R$: ${salario} é menor que R$: 1800. 
        EMPRÉSTIMO NÃO APROVADO! rsrs...`);
    }

};

const maiorDeIdade = () => {
    const idadeRecebida = prompt("Digite sua idade");
    const permitido = `Sua idade é ${idadeRecebida}, voce pode acessar o site!`;
    const negado = `Sua idade é ${idadeRecebida}, voce não pode acessar o site!`

    idadeRecebida >= 18 ? alert(permitido) : alert(negado)
};

const calculadora = () => {
    const calc = prompt("Escolha uma das opções [+, -, *, /]");

    if (calc === "+") {
        const num1 = prompt("Digite o primeiro número");
        const num2 = prompt("Digite o segundo número");

        const intNum1 = parseInt(num1);
        const intNum2 = parseInt(num2);

        alert(`${intNum1} + ${intNum2} é igual a: ${intNum1 + intNum2}`);

    }
    else if (calc === "-") {
        const num1 = prompt("Digite o primeiro número");
        const num2 = prompt("Digite o segundo número");

        const intNum1 = parseInt(num1);
        const intNum2 = parseInt(num2);

        alert(`${intNum1} - ${intNum2} é igual a: ${intNum1 - intNum2}`);

    }

    else if (calc === "*") {
        const num1 = prompt("Digite o primeiro número");
        const num2 = prompt("Digite o segundo número");

        const intNum1 = parseInt(num1);
        const intNum2 = parseInt(num2);

        alert(`${intNum1} * ${intNum2} é igual a: ${intNum1 * intNum2}`);

    }

    else if (calc === "/") {
        const num1 = prompt("Digite o primeiro número");
        const num2 = prompt("Digite o segundo número");

        const intNum1 = parseInt(num1);
        const intNum2 = parseInt(num2);

        alert(`${intNum1} / ${intNum2} é igual a: ${intNum1 / intNum2}`);

    } 

    else {
        alert("DEU RUIM!! Verifique se o operador é desses +, -, *, /");
    }

}