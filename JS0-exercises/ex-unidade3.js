function metodosVetor(vetor) {

    vetor.sort();
    vetor.pop();
    vetor.unshift("abacate");

    return vetor;

}

let vet1 = [4, 0, 9];
let str1 = ["abacaxi", "uva", "melancia"];

escreva(0.6, "Resultado: ", metodosVetor(vet1));
escreva(0.6, "Resultado: ", metodosVetor(str1));



function metodosString(string) {

    string = string.replaceAll('o', 'a');
    string = string.toUpperCase();

    return string;

}

let str2 = "O pato ama a pata";
escreva(0.7, "Resultado: ", metodosString(str2));

// ====================== Exercicio 9 ======================

function escreveDataPorExtenso(data) {

    data = data.split('/');
    let mes = obtemNomeDoMes(data[1]);
    let data_extenso = data[0] + " de " +  mes + " de " + data[2];
    console.log(data_extenso);

    return data_extenso;

}

let aniversario = "14/08/2000";
escreva(9, "Data: ", escreveDataPorExtenso(aniversario));


// =================== Exercicio 10 ==========================


function eliminaCaracteres(texto, caracteresParaEliminar) {
    for (let caractere of caracteresParaEliminar) {
        texto = texto.replaceAll(caractere, '');
    }
    
    
    return texto;
}


function substituiCaracteres(texto, caracteresProcura, caracteresSubstituirPor) {
    for(let i = 0; i < caracteresProcura.length; i++) {
        let caractereProcura = caracteresProcura[i];
        let caractereSubstituirPor = caracteresSubstituirPor[i];
        texto = texto.replaceAll(caractereProcura, caractereSubstituirPor);
        
    }
    
    
    return texto;
}

function inverteTexto(texto) {
    let textoInvertido = '';

    let textoSeparado = texto.split('');
    let arrayInvertido = textoSeparado.reverse(); 

    textoInvertido = arrayInvertido.join('');


    return textoInvertido;
}

let musica = "o sapo nao lava o pe";
escreva(10, "Caracter Eliminado: ", eliminaCaracteres(musica, 'sal'));
escreva(10, "Caracter Substituido: ", substituiCaracteres(musica, 'aoe', 'iiu'));
escreva(10, "Texto invertido: ", inverteTexto(musica));



// ======================== Exercicio 11 ========================


function verificaPalindromo(texto) {
    
    if(texto.length === 1) return true;
    
    else { 
        texto = texto.toLowerCase();
        texto = substituiCaracteres(texto, ',-!?;', '     ');
        texto = substituiCaracteres(texto, 'áéíóúâêîôûãẽĩõũç', 'aeiouaeiouaeiouc');
        texto = eliminaCaracteres(texto, ' ');

        if(texto === inverteTexto(texto)) return true;

        else return false;
        
    }
    
}

let str3 = "Socorram-me, subi no ônibus em Marrócós";
escreva(11, "Palindromo: ", verificaPalindromo(str3));




function dizOiPara(funcaoDeDarOi, nomeDaPessoa) {
    
    // veja que aqui, independente do nome da função
    // externa, invocamos ela como funcaoDeDarOi
    textoDoOi = funcaoDeDarOi(nomeDaPessoa);
    
    escrevaMensagem(12, '=========== Início do chat ===========');
    escrevaMensagem(12, textoDoOi);
    escrevaMensagem(12, '======================================');
    escrevaMensagem(12, '<br>');
}

function oiEmPortuguesFormal(nome) {
    return 'Oi Sr(a). ' + nome + ', como vai?';
}

let oiEmPortugues = function(nome) {
    return 'Oi ' + nome + ', blza?';
};

function oiEmMandarin(nome) {
    return 'Ni hao ' + nome + 'Ni zemeyang?';
}

let oiEmEspanhol = function(nome) {
    return 'Hola' + nome + 'que tal?';
}


// dá oi para 'Daniel' de várias formas diferentes
dizOiPara(oiEmPortuguesFormal, 'Daniel');
dizOiPara(oiEmPortugues, 'Daniel');
dizOiPara(function(nome) {
    return 'Hi ' + nome + ', how are you?';
}, 'Daniel');

dizOiPara(oiEmMandarin, 'Francisco');
dizOiPara(oiEmEspanhol, 'Francisco');
dizOiPara(function(nome) {
    return 'Greetings Mr(s).' + nome + ', how is your day?';
}, 'Francisco');


// =========================== Exercicio 13 ================ 

function aplicaOperacaoEmCadaElemento(operacao, vetor1, vetor2) {

    if(vetor1.length != vetor2.length) return null;

    let vetor3 = [];

    for(let i = 0; i < vetor1.length; i++) {
        vetor3[i] = operacao(vetor1[i], vetor2[i]);
    }

    return vetor3;
}

function soma(a, b) {
    return a + b;
}

let multiplica = function(a, b) {
    return a*b;
}

let array1 = [4, 2, -1, 10];
let array2 = [10, 2, 3, 5 ];

escreva(13, 'Soma: ', aplicaOperacaoEmCadaElemento(soma, array1, array2));
escreva(13, 'Multiplica: ', aplicaOperacaoEmCadaElemento(multiplica, array1, array2));
escreva(13, 'Soma: ', aplicaOperacaoEmCadaElemento(function(a, b) {
    return a - b;
}, array1, array2));