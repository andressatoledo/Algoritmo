const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    notas: [
        {
            peso: 0.25,
            nota: 8.2
        },
        {
            peso: 0.35,
            nota: 7.5
        },
        {
            peso: 0.4,
            nota: 9
        }
    ]
};


pesop1 = disciplina.notas[0].peso;
pesop2 = disciplina.notas[1].peso;
pesoprojeto = disciplina.notas[2].peso;

p1 = disciplina.notas[0].nota;
p2 = disciplina.notas[1].nota;
projeto = disciplina.notas[2].nota;


console.log('Nota final: ', ((pesop1 * p1) + (pesop2 * p2) + (pesoprojeto * projeto)));
