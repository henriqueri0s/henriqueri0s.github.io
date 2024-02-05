// 1. Crie uma função que converta polegadas em centímetros. //
function conversorPolCm(x){
    return x * 2.54
}

console.log(conversorPolCm(2))

// 2. Crie uma função que receba uma string e a converta em um URL. //

function conversorURL(y){
    return 'https://www.' + y + '.com.br'
}

console.log(conversorURL('funcaojs'))

// 3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ). //

function pontuarExclamacao(z){
    return z + '!'
}

console.log(pontuarExclamacao('O Darkpsy judia das pessoas'))

// 4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles. // 

function idadeCachorro(a){
    return a * 7
}

console.log(idadeCachorro(3))

// 5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal. Considerando que trabalhe 160h/mês. //

function valorHora(b){
    return 'R$ '+ b / 160 + ' por hora'
}

console.log(valorHora(3000))

// 6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. //

function calcularIMC(peso,altura){
    return peso / ((altura/100)**2)
}

console.log(calcularIMC(80,180))

console.log(calcularIMC(65,150))

// 7. Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. //

function maiúsculas(text){
    
    return text.toUpperCase()
}

console.log(maiúsculas('a galinha pintadinha e o galo carijó'))

// 8. Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro. //

function tipoDado(x){

    return typeof x
}

console.log(tipoDado(true))

// 9. Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência. //

function circunferência(x){

    return 2 * Math.PI * x
}

console.log(circunferência(2))