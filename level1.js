// 1
// Escreva uma função para cada uma das quatro operações matemáticas simples:
// adição, subtração, multiplicação e dividisão

function adicao(n1,n2){
    var soma = n1+n2
    return soma
}
function subtracao(n1,n2){
    var subtrair = n1-n2
    return subtrair
}
function multiplicacao(n1,n2){
    var multiplicar = n1*n2
    return multiplicar
}
function dividisao(n1,n2){
    var dividir = n1/n2
    return dividir
}
// --->CHAMANDO PELA VARIAVEL<---
// var soma = adição(2,4);
// console.log(soma);

// --->CHAMANDO PELA FUNÇÃO<---
// adição(2,4)
// subtracao(4,2);
// multiplicacao(2,4);
// dividisao(4,2);
// console.log(adicao(2,4),subtracao(4,2),multiplicacao(2,4),dividisao(4,2));


// 2 
// Faça um algoritmo que calcule o reajuste de um salário, utilize os seguintes dados:
// salário  = 1.000,00
// reajuste = 15%,

function reajuste(sal, reaju){
    var salarioFinal = sal*reaju/100+sal
    return salarioFinal
}
reajuste(1000, 15);
console.log(reajuste(1000,15));


// 3
// O custo de um carro novo ao consumidor é obtido com a seguinte fórmula:
// custo final = custo de fábrica +
//               (custo de fábrica * percentual do distribuidor) +
//               (custo de fábrica * percentual de impostos)
// Considerando os valores abaixo, faça um programa para calcular o custo de fabricação.

// Custo de fábrica = 10.000,00
// Percentual do distribuidor = 28%
// Percentual dos Impostos  = 45%

function custoCarro(custFab, percentDist, percentImpost){
    var custoFinal = custFab + custFab*percentDist/100 + custFab*percentImpost/100
    return custoFinal
}
custoCarro(10000, 28, 45);
console.log(custoCarro(10000,28,45));


// 4
// Faça um programa para calcular o juros simples segundo a fórmula abaixo.
// J = C.i.n
// Onde:
// J = juros,
// C = capital,
// i = taxa de empréstimo
// n = períodos
// Vamos imaginar o seguinte cenário: um empréstimo de R$ 16.000,00 sobre a taxa de 4% durante 4 meses.

function jurosSimples(capital, taxa, periodo){
    var juros = capital*taxa/100*periodo
    return juros
}
custoCarro(16000, 4, 4);
console.log(custoCarro(16000,4,4));
