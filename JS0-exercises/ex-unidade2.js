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

// =============  Exercício 3 ====================

function calculaVelocidadeAlturaBola(velocidadeInicial, gravidade, tempo) {

    for(let i = 1; i <= tempo; i++){
        
        escreva(3, "h(" + i + ")", calculaAlturaBola(i, velocidadeInicial, gravidade));
        escreva(3, "v(" + i + ")", calculaVelocidadeBola(i, velocidadeInicial, gravidade));
    }


}

calculaVelocidadeAlturaBola(50, 9.81, 20);

// ============= Exercício 4 =====================

function somatorio(number) {

    let result = 0

    for(let i = 2; i <= number; i+=2){
        result+= 1/i;
    }

    return result;
    
}

escreva(4, "Somatorio 1: ", somatorio(1));
escreva(4, "Somatorio 2: ", somatorio(10));
escreva(4, "Somatorio 3: ", somatorio(100));

// ============== Exercicio 5 ======================

function obtemPosicaoDoElemento(vetor, elemento) {

    posicao = 0;

    for(let ocorrencia of vetor){
        if(ocorrencia === elemento){
            return posicao;
        }
        posicao++;
    }

    return null;
}

frutas = ['Pera', 'Uva', 'Abacaxi', 'Cenoura'];

escreva(5, "Consulta 1: ", obtemPosicaoDoElemento(frutas, 'Uva'));
escreva(5, "Consulta 2: ", obtemPosicaoDoElemento(frutas, 'Cenoura'));
escreva(5, "Consulta 3: ", obtemPosicaoDoElemento(frutas, 'Banana'));


// ============== Exercício 6 ====================

function calculaMediaEntreExtremos(vetor) {

    maior = vetor[0];
    menor = vetor[0];

    for(let number of vetor){
        if(number >= maior){
            maior = number;
        }
        else if(number <= menor){
            menor = number;
        }
    }

    vetor.sort();
    return (maior+menor)/2;

}

caixa = [3, 4, 12];

escreva(6, "Resultado 1: ", calculaMediaEntreExtremos(caixa))  

// ================== Exercício 7 ===================

function fibonacci(tamanhoSequencia) {
    let sequencia = [];

    for(let i = 0; i < tamanhoSequencia; i++){

        if(i === 0){
            sequencia.push(0);

        }else if (i === 1){
            sequencia.push(1);
            
        }else{
            sequencia.push(sequencia[i-1] + sequencia[i-2]);
        }
    }

    
    escreva(7, 'Fib(' + tamanhoSequencia + ')', sequencia);
    return sequencia;
}

resultado = fibonacci(7);
