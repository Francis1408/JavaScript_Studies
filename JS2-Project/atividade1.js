// Faça o exercício da GALERIA de IMAGENS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

// caminho para onde as imagens estão hospedadas
const servidorDasImagens = 'https://fegemo.github.io/cefet-front-end/images/',
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    '01-philae-parts.jpg',
    '02-philae-rosetta.jpg',
    '03-philae-separation.jpg',
    '04-philae-67-picture.jpg',
    '05-philae-collecting.jpg'
  ];

// o índice da imagem sendo mostrada
// (inicialmente, é a imagem 0: '01-philae-parts.jpg')


function mudarImagem(direcao) {

  let imgEl = document.querySelector('#slide');
  
  indiceDaFotoAtual += direcao;

  if((indiceDaFotoAtual%nomesDasImagens.length) < 0) indiceDaFotoAtual = 4;
  
  imgEl.src = `${servidorDasImagens}${nomesDasImagens[indiceDaFotoAtual%nomesDasImagens.length]}`;
  
}


let indiceDaFotoAtual = 0;
let botaoProximoEl  = document.querySelector('#proximo');
let botaoAnteriorEl = document.querySelector('#anterior');

botaoProximoEl.addEventListener('click', () => { mudarImagem(1) });
botaoAnteriorEl.addEventListener('click', () => { mudarImagem(-1) });



