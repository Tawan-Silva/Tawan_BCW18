/*
 Prática de for
 Exercícios IV: Conte de -200 até 200.
 Exercícios V: Some de 0 até 100.
 Desafio: Crie o seguinte padrão:
 *
 **
 ***
 ****
 *****
*/

function count() {
    for (let i = -200; i <= 200; i++) {
        console.log(i)
    }
}

function sum() {
    let acc = 0;
    for (let i = 0; i <= 100; i++) {
        console.log(`${acc} + ${i} é igual a: ${acc += i}`);
    }

}

function geo() {
    let k = "* ";
    let z = "";
    for (let i = 0; i <= 5; i++) {
        z += k
        console.log(z);
    }
}

function geoTwo() {

    for (let i = "="; i <= "======"; i += "=") {
        console.log(i);
    }
}

function geoThree() {
    let tri = "";
    for (let i = 0; i < 5; i++) {
        for (let a = 0; a <= i; a++) {
            tri += "*";
        }
        tri += "\n";
    }
    console.log(tri);
}

function soLog() {
    let frase = "Tawan é muito legal";
    console.log(`Length -> retorna o comprimeto da string, que é: ${frase.length}`);
    console.log("\n");

    console.log(`O método toLowerCase() -> retorna a string toda minúscula: ${frase.toLowerCase()}`);
    console.log("\n");

    console.log(`O método toUpperCase() -> retorna a string toda em maiúscula: ${frase.toUpperCase()}`);
    console.log("\n");

    console.log(`O método startWith() -> verifica se a string começa com os caracteres especificados e retorna (true) para verdadeiro e (false) para falso. na váriavel frase tem "t" ? ${frase.startsWith("t")}`);
    console.log("\n");

    console.log(`O método endWith() -> retorna true se a string conter o caracteres espeficiados no ínicio da frase. ${frase.endsWith("ta")}`);
    console.log("\n");

    console.log(`O método indexOf() -> retorna o primeiro índice do elemento encontrado no array ou string. qual o primeiro índice do caracter "m" ? ${frase.indexOf("m")}`);
    console.log("\n");

    console.log(`O método slice() -> extraí uma parte de uma string e a retorna como uma nova string, sem modificar a string original. ${frase.slice(0, 5)}`);
    console.log("\n");

    console.log(`O método replace -> retorna uma nova string com algumas ou todas as correspondencias de um padrão substituiídas pelo caracter(s) determinado: Ex: Troque("Tawan por "Cátia") ficaria assim: ${frase.replace("Tawan", "Cátia")}`);
}


count();
sum();
geo();
geoTwo();
geoThree()
soLog();