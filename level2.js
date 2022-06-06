// 1
// Crie uma função que descubra se um valor é par ou ímpar.
// Neste exercício nós utilizarmos o operador módulo %.
// A operação módulo encontra o resto da divisão de um número por outro.
// Dados dois números a (o dividendo) e b o divisor, a modulo b (a mod b) é o resto da divisão de a por b.
// Por exemplo, 7 mod 3 seria 1, enquanto 9 mod 3 seria 0.
// Portanto sua função deve…
// retornar 1 ou mais caso negativo (é ímpar) e
// retornar 0 caso positivo (é par)

function parimp(num1){
 var resposta = num1%2
 if(resposta = 1){
    console.log(num1 + " é numero impar");
 }
 else{   
    console.log(num1 + " é numero e par");
 } 
}

parimp(3)

// 2
// Crie uma função que descubra se um valor é maior ou menor que 10.
 
function maiormenor10(num2){
   var resposta = num2 
   if(resposta > 10){
    console.log(num2 + " é numero e maior que 10");
 }
   else{
    console.log(num2 + " é um numero menor que 10");
 }
}
maiormenor10(9)


// 3
// Exercício de lógica de programação
// Crie uma função que descubra se um valor é positivo ou negativo (considere o valor zero como positivo)

function verificar(num3){
   var resposta = num3 
   if(resposta > 0){
      console.log(num3 + " é um numero positivo");
 }
   else{
      console.log(num3 + " é um numero negativo");
 }
}

verificar(-38)

// 4
// Crie duas funções para conversão de temperaturas.
// Uma converterá celsius em fahrenheit e a outra fará o inverso.
// Saiba que 100c é igual a 212f, veja fórmula:
//    C          F - 32
// -------  =  ---------
//    5            9

function verificarTempcel(fahren){
    var celcius = (fahren-32)/9*5
    return celcius    
}
verificarTempcel(68);
console.log("A transformacao em celcius é:" + verificarTempcel(68));

function verificarTempfahren(celcius){
    var fahren = celcius*9/5+32
    return fahren
}
verificarTempfahren(20);
console.log("A transformacao em fahrenheit é:" + verificarTempfahren(20))
 

// 5
// Utilizando funções, faça um programa que calcule as raízes da equação do 2 grau conforme a fórmula de Bhaskara.
// Lembrando:
// ax(2) + bx + c = 0
// delta = (Δ = b2 - 4.a.c)
// x1 = ((-b + √Δ)/2a)
// x2 = ((-b - √Δ)/2a)

function equaçãoSeggrau(a, b, c){
   var delta = b**2-4*a*c;
   var raizdelta = Math.sqrt(delta);
   var raiz1 = (-b+raizdelta)/(a*2)
   var raiz2 = (-b-raizdelta)/(2*a)
   return [raiz1, raiz2]
}
equaçãoSeggrau(2, 8, -24)
console.log("A resposta para equacao e:" + equaçãoSeggrau(2, 8, -24));

