const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    pesos: [0.25,0.35,0.4],
    notas: [8.2,7.5,9]
    };



listapesos = disciplina.pesos;
listanotas = disciplina.notas;

pesop1 = listapesos[0];
pesop2 = listapesos[1];
pesoprojeto = listapesos[2];

p1 = listanotas[0];
p2 =  listanotas[1];
projeto = listanotas[2];


console.log('Nota final: ', ((pesop1 * p1) + (pesop2 * p2) + (pesoprojeto * projeto)));
