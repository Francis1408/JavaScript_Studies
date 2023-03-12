function contandoElementosDoVetor(elementos, elementoSendoProcurado) {
    let quantidade = 0;
    for (let elemento of elementos) {
        if(elementoSendoProcurado === elemento) {
            quantidade++;
        }
        
    }
    return quantidade;
}

escreva(0.4, "Exemplo1: ", contandoElementosDoVetor(['daniel', 'flávio'], 'joão'));
escreva(0.4, "Exemplo2: ", contandoElementosDoVetor([1, 5, 5], 5));

function obtemNomeDoMes(numero) {
    if (numero < 1 || numero > 12) {
        escrevaMensagem(0.5, 'Mês inválido: ' + numero);
        return null;
    }
    
    let meses = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ];

    return meses[numero-1];
}

escreva(0.5, "Teste1: ", obtemNomeDoMes(-1));
escreva(0.5, "Teste2: ", obtemNomeDoMes(0));
escreva(0.5, "Teste3: ", obtemNomeDoMes(13));

// =============  Exercício3 ====================

function calculaVelocidadeAlturaBola(velocidadeInicial, gravidade, tempo) {

    for(let i = 1; i <= tempo; i++){
        
        escreva(3, "h(" + i + ")", calculaAlturaBola(i, velocidadeInicial, gravidade));
        escreva(3, "v(" + i + ")", calculaVelocidadeBola(i, velocidadeInicial, gravidade));
    }


}

calculaVelocidadeAlturaBola(50, 9.81, 20);

// ============= Exercício4 =====================



function fibonacci(tamanhoSequencia) {
    let sequencia = [];
    
    
    escreva(7, 'Fib(' + tamanhoSequencia + ')', sequencia);
    return sequencia;
}

