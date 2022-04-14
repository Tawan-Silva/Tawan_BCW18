/* import "./styles.css";

let a = 10;
let b = 20;

 //  Operadores Aritméticos

let soma = a + b;
console.log("A + B é: " + soma);

let subtracao = b - a;
console.log("B - A é: " + subtracao);

let multiplicacao = a * b;
console.log("A * B é: " + multiplicacao);

let divisao = b / a;
console.log("B / A é: " + divisao);

let expressao = a * (b + a);
console.log("A * (B + A) é: " + expressao);

let potenciacao = a ** 2;
console.log(`A ** 2 é igual a: ${potenciacao}`);

  // Usando Template Strings " `` " e Interpolação " ${} "

let concat = `
 ${a} + ${b} é igual a: ${soma}` + `
 ${b} - ${a} é igual a: ${subtracao}` + `
 ${a} * ${b} é igual a: ${multiplicacao}` + `
 ${b} / ${a} é igual a: ${divisao}`;
console.log(concat);

let c = 1;

c += 2;
console.log(`C antigo + C novo é igual a: ` + c);
c -= 5;
console.log(`C antigo - C novo é igual a: ` + c);
c *= 6;
console.log(`C antigo * C novo é igual a: ` + c);
c /= 3;
console.log(`C antigo / C novo é igual a: ` + c);
c **= 2;
console.log(`C antigo ** C novo é igual a: ` + c);

 // Incremento e Decremento

let d = 1;
console.log(`D tem o valor de ${d}`);

Incremento
d++;
console.log(`D++ é o valor de D+1: ${d}`);

Decremento
d--;
console.log(`D-- é o valor de D-1: ${d}`);

 // Operadores de comparação

let t = 1;
let s = 1;
let verifica = t == s;
console.log("T é igual a S ? " + verifica);
verifica = t != s;
console.log("T é diferente de S? " + verifica);

console.log("1" == 1); // Compara valor 

console.log("1" === 1); // Compara tipo e o valor 

 // Operadores de comparação

let v = 10;
let u = 5;
verifica = v < u;
console.log(`V é menor que U ? R: ${verifica}`);

verifica = v > u;
console.log(`V é maior que U ? R: ${verifica}`);

verifica = u < v;
console.log(`U é menor que V ? R: ${verifica}`);

verifica = u >= v;
console.log(`U é maior ou igual a V ? ${verifica}`);
*/

// Atividade 

const body = document.querySelector('body');
const h2 = document.createElement('h2');

const pessoa = {
    nome: "Tawan",
    idade: "20",
    cidade: "Paulista"
}

const imc = (peso, altura) => {
    const resultado = peso / altura ** 2;
    return `Meu nome é ${pessoa.nome}` +
        `, tenho ${pessoa.idade} anos` +
        `, moro em ${pessoa.cidade}` +
        ` e meu imc é ` + resultado.toFixed(1);
}

h2.innerText = imc(60, 1.75);
body.appendChild(h2);