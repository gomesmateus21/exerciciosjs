// Exercício de lógica de programação
// 1
// Escreva um algoritmo que armazene o valor 999 na variável a e o valor 555 na variável b.
// A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor que está em a passe para b e vice-versa.

function trocaVar(){
    var a = 999
    var b = 555
    var c = a
    console.log(a,b,c); 
    a = b
    b = c
    console.log(a,b);
}

// 2
// Exercício de lógica de programação
// Faça uma função para calcular o dobro de um número qualquer.

function dobro(num){
    var n1 = num*2
    return n1   
}

// 3
// Exercício de lógica de programação
// Sabendo que a área quadrada é dada pela multiplicação dos lados, escreva um algoritmo que mostre a área quadrada de um espaço qualquer.
// Exemplo:
// A área de 3x9 é igual a 27
// 3 . 9 = 27

function calArea(num1, num2){
    var area = num1 * num2
    return area
}


// 4
// Exercício de lógica de programação
// Escreva um algoritmo para mostrar o sucessor e o antecessor de um número qualquer.



// 5
// Exercício de lógica de programação
// Considerando que todos os meses tenham 30 dias, calcular o total de dias de n meses.



trocaVar();