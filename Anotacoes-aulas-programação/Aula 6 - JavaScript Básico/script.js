var a;
// Chamar uma variável e dar nome a ela

a = "hd";
// Dar conteúdo para a variável

a = "placa de captura";
// Substituir o conteúdo por outro
 
/* 
Tipos de dados
    String: é uma cadeia de caractéres, um texto
    Number: é um número, a diferença do número number pra um em uma string
    é que o number pode efetuar operações
    Undefined: apontar que algo é indefinido
    Null: apontar que algo está vazio ou não possui nada
    Boolean: usado para apontar se é verdadeiro ou falso, true or false
*/

/*
Operações Aritmeticas
    +: Adição
    -: Subtração
    *: Multiplicação
    /: Divisão
    %: Módulo(uma divisão em que apontará apenas o que sobrou)
    ++: Incremento(somará 1)
    --: Decremento(subtrairá 1)

    Sendo possível fazer todas essas operações da seguinte forma

     número += 2 (fará com que seja somado 2 ao número)
     número -= 2 (subtraído 2 ao número)
     número *= 2 (número multiplicado por 2)
     E assim sucessivamente, é só uma forma mais fácil de construir operações
*/ 

/*  
Operadores Comparativos
    ==: pergunta se é igual a
    ===: mesma coisa, porém perguntando se o tipo também é igual
    !=:pergunta se não é igual
    !==: mesma coisa, porém pergunta se o tipo não é igual também
    >: pergunta se é maior que 
    <: pergunta se é menor que
    >=: pergunta se é maior que ou igual
    <=: pergunta se é menor que ou igual
*/
/*
Operadores Lógicos
    &&(e): irá comparar booleans e indicará true se as duas forem true, caso contrário 
    irá indicar false
    ||(ou): irá  comparar booleans e indicar true se ao menos uma boolean for true
    !(negativo) : irá tornar qualquer coisa no oposto, exemplo: !false, se tornará true
*/

var a = "3";

var b = "6";

var c = parseInt(a) + parseInt(b)
/* Para transformar uma string em um número basta usar o parseInt ou parseFloat */
console.log(c)

/* var nome = prompt("Qual seu nome?")

alert("Bom dia, " + nome)

var numero = parseInt(prompt("Digite um número"))

var dobro = numero + numero

alert("O dobro de " + numero + " é " + dobro)

var idade = parseInt(prompt("Digite a sua idade"))

if(idade >= 35 && idade <= 75) {
    alert("Pode tomar bebida alcólica")
    alert("Qual é o seu pedido?")
}
else if (idade >=18 && idade <= 34){
    alert("Pode tomar bebida alcólica")
    alert("Mostre a identidade")
}
else{
    alert("Não pode tomar bebida alcólica")
    alert("Volte futuramente")
} 

var pode = idade >= 18 ? "Pode" : "Não pode";
/* Servindo para substituir os if's, a interrogação pode ser usada em algumas situações*/

/*var nota1 = 5.0;
var nota2 = 8.0;
var notaFinal = (nota1 + nota2) / 2;

conceito = ""

if(notaFinal >=8.5){
    console.log(notaFinal)
    console.log("Parabéns, você está ótimo");
    conceito = "Ótimo";
}
else if(notaFinal >=5){
    console.log(notaFinal)
    console.log("Você está indo bem");
    conceito = "Bom";
}
else{
    console.log(notaFinal)
    console.log("Você precisa estudar mais");
    conceito= "Regular";
}*/

var numero = 5

for(var vez = 0; vez < numero; vez++) {

    console.log("Executanto o for")

}

console.log("Acabou")
// O for similar ao if, irá checar uma afirmação e funcionar enquanto aquela afirmação for verdadeira

var numero = Math.random() * 100;

while(numero < 90){
    console.log("Número " + numero);
    numero = Math.random() * 100;
}
/* Já o while funcionará da mesma forma que o if, mas quando não sabemos quantas vezes será 
preciso para a condição ser feita*/

Array
// Semelhante a var, ele consegue guardar informações, mas o array guarda diversas de uma vez

function exemplo()
// Quando entregue uma série de ações, o function pode coloca-lás todas em ação de forma rápida

// Objetos - Propriedades:

aluno = {
    nome: "Igor", notas: [5, 8]
};
// Objeto pode possuir diversas propriedades, também podendo ter arrays e var

aluno.idade = 15;
// É possível adicionar uma propriedade dessa forma

console.log(aluno["nome"])
//Quando for trazer uma propriedade, é necessário seguir esse formato

function calcMedia(){
    return (this.notas[0] + this.notas[1]) / 2
}
aluno.media = calcMedia
// Objetos podem ter funções, mas são chamadas de métodos
/* O "this" é usado para indicar que os dados que serão usados são daquele objeto, 
então ele só faria sentido caso existisse mais de um objeto */ 
