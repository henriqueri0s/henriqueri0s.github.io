// Mesa de trabalho aula 6 - Calculadora //
function adicionar(x,y){
    return x + y
}

function subtrair(x,y){
    return x - y
}

function multiplicar(x,y){
    return x * y
}

function dividir(x,y){
    return x / y
}

console.log('------> Teste da Calculadora <------')

console.log(
    ' Adição: ', adicionar(3,3),'Subtração: ',
    subtrair(3,2)
)

console.log('Mutiplicação: ',multiplicar(3,4))

console.log('Divisão: ', dividir(12,3))

console.log('Divisão por 0: ', dividir(12,0))

function quadradoDoNumero(x){
    return multiplicar(x,x)
} 

console.log('Potenciação: ', quadradoDoNumero(9))

function mediaDeTresNumeros(x,y,z){
    return dividir((x+y+z),3)
}

console.log('Média de Tres Numeros: ',mediaDeTresNumeros(7,5,6))

function calculaPorcentagem(x,y){

    return multiplicar(x,y)/100
}

console.log('Porcentagem: ', calculaPorcentagem(300,15))

function geradorDePorcentagem(x,y){

    return multiplicar(100,x)/y
}

console.log('Gerador de porcentagem: ', geradorDePorcentagem(20,200))

console.log(multiplicar(2,3)
)