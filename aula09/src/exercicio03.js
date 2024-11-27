const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    pesos: {
    p1: 0.25,
    p2: 0.35,
    projeto: 0.4
    },
    notas: {
    p1: 8.2,
    p2: 7.5,
    projeto: 9
    }
    };



pesop1 = disciplina.pesos.p1;
pesop2 = disciplina.pesos.p2;
pesoprojeto = disciplina.pesos.projeto;

p1 = disciplina.notas.p1;
p2 =  disciplina.notas.p2;
projeto = disciplina.notas.projeto;


console.log('Nota final: ', ((pesop1 * p1) + (pesop2 * p2) + (pesoprojeto * projeto)));
