
function somarArray (){
    let meuArray = [1,2,4,8]
    let soma = 0

    for ( let i = 0; i<meuArray.length; i++){
        soma += meuArray[i];
        console.log(soma);
    }     
}

somarArray()