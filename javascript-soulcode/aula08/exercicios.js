// Exercícios I (MAP): Usando o array nomes, dê um sobrenome 'Silva'
// para cada nome dentro do array sem modificar o original.
// "João" => "João Silva"

const nomes = ['Tawan', 'Carlos', 'Roberto'];
const novosNomes = nomes.map(nome => nome = nome.concat(" Silva"))
console.log(novosNomes);
console.log(nomes);

// Exercício II(SPLIT): Crie uma função que recebe um email como parâmetro
// e retorna sua versão censurada:
// email("joao.carlos@gmail.com") -> "j***@gmail.com"

const email = 'tawan.tls@gmail.com';

const censuraEmail = (email => {
    const emailSplit = email.split("@");
    const nomeUsuario = emailSplit[0]
    const dominio = emailSplit[1]

    return `${nomeUsuario}[0]***@gmail${dominio}`;
})  

console.log(censuraEmail(email));
    
// Exercício III(FILTER): Crie um arrays com nomes de pessoas. Cada nome tem
// o formato "Nome Sobrenome", filtre desse array apenas pessoas da família
// "Souza".

const pessoas = ['Carlos Silva', 'Rogerio Souza', 'Paulo Araujo', 'Roberta Souza'];
const filterP = pessoas.filter(sobrenome => {
    let nomeSplit = sobrenome.split(" ")
    return nomeSplit[1] == "Souza";
});
console.log(filterP);

const familiaSouza2 = pessoas.filter((nome) => nome.endsWith("Souza"))
console.log(familiaSouza2);



// Exercício IV(SPLIT): Receba o nome de um usuário e indique qual o primeiro
// nome dele. Exemplo -> "João Carlos" ==> "O primeiro nome é João"
let nome = "Francisco José";
const returnNome = nome.split(' ');
console.log(`O primeiro nome é ${returnNome[0]}`);