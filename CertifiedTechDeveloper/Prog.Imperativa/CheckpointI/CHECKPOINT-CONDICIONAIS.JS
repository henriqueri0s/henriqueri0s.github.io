/*

1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor? */



function maiorMenor(x,y,z){

    if (x>y && x>z){

        console.log('o maior número é ',x,'!')
    }
    else if (y>x && y>z){

        console.log('o maior número é ',y,'!')
    }
    else if(z>x && z>y){
        console.log('o maior número é ',z,'!')
    };
    if (x<y && x<z){

        console.log('o menor número é ',x,'!')
    }
    else if (y<x && y<z){

        console.log('o menor número é ',y,'!')
    }
    else if(z<x && z<y){
        console.log('o menor número é ',z,'!')
    };
    
}

maiorMenor (92,104,15);


/*
2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)
*/

function podeDoar(x){

    if (x>=18 && x<=67){
        console.log('Autorizado a doar sangue')
    }
    else (console.log('Não autorizado a doar sangue'))
}

podeDoar(56);

/*
3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo
*/

function pedirValor(x){
    if (x>0){
        console.log('O valor é positivo')
    }
    else if (x<0){
        console.log('O valor é negativo')
    }
    else (console.log('O valor é nulo'))
}

pedirValor (-2);

/*
4. Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7;

*/

function leituraNota(x,y){

    if ((x+y)/2>=7 && (x+y)/2<10){
        console.log('Aprovado!')
    }
    else if((x+y)/2 == 10 ){
        console.log('Aprovado com Distinção!')
    }
    else (console.log ('Reprovado!'))
}

leituraNota(10,10);