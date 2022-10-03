// Checkpoint Final - Programação Imperativa - Henrique Rios Ribeiro - Turma 1

// 1.Crie uma função construtora Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 


function Aluno(valorNome, valorFaltas, valorNotas, valorMatricula){
    this.nome = valorNome;    
    this.quantidadeDeFaltas = valorFaltas;
    this.notas = valorNotas;
    this.matricula = valorMatricula;

    
// 2. Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora.     
    this.calcularMedia = ()=>{
        let i = 0;
        let soma = 0;
        let quantidadeDeNotas = this.notas.length
        while (i < quantidadeDeNotas){
            soma = soma + this.notas[i++];
        }
        this.media = soma / quantidadeDeNotas;
        
    };
    
    this.faltas = function(){
        this.quantidadeDeFaltas++
        
    };
    
};

let aluno1 = new Aluno("Pedro Silva", 0, [6,7,9], 1);
let aluno2 = new Aluno("Maria Joana", 2, [4,7,10], 2);


console.log('Teste do método calcularMedia');

console.log(aluno1.calcularMedia());
console.log(aluno2.calcularMedia());
console.log(aluno1, aluno2)

console.log('Teste do método faltas');

console.log(aluno1);

console.log(aluno1.faltas());

console.log(aluno1);


// 3. Crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).


let curso = {
    nomeDoCurso: 'CTD',
    notaDeAprovacao: 7.0,
    faltasMaximas: 10,
    listaDeEstudantes: [aluno1,aluno2],
    
// 4. 	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.    
    adcionarAluno: function (nome, faltas, notas, matricula) {
      let novoAluno = new  Aluno(nome, faltas, notas, matricula)
      this.listaDeEstudantes.push(novoAluno)
        novoAluno.calcularMedia()
    }


    
};

curso.adcionarAluno("Aldous Huxley", 4, [7,1,0], 3);

curso.adcionarAluno("Albert Hofmann", 1, [9,6,9], 4);
curso.adcionarAluno("Thomas Chong", 10, [4,2,0], 5);





