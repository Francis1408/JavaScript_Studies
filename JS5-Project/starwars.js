// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução
import { play } from "./music.js"
import { romanConversion } from "./roman.js";
import { restartAnimation } from "./restart-animation.js";

function modificaIntroducao(containerEl) {
    containerEl.innerHTML = '';
    
}



function adicionaElemento(element, containerEl) {

    const novoElement = document.createElement('li');
    const conteudo = `Episode ${romanConversion(element.episode_id)}`;
    novoElement.innerHTML = ` ${conteudo.padEnd(12, ' ')}- ${element.title} `
    containerEl.appendChild(novoElement);


}


const API_ENDPOINT = 'https://swapi.dev/api'
const listaEl = document.getElementById('filmes');
const introducaoEL = document.querySelector('.container-introducao');


play({audioUrl: 'audio/tema-sw.mp3', coverImageUrl: 'imgs/logo.svg', title: 'Intro', artist: 'John Williams'}, document.body);

const resposta = await fetch(`${API_ENDPOINT}/films`)
const dados = await resposta.json();
console.log(dados);
listaEl.innerHTML = '';

dados['results'].forEach(film => adicionaElemento(film, listaEl));

let titulosEl = document.querySelectorAll('li');

for(let tituloEl of titulosEl ) {

    tituloEl.addEventListener('click', (e) => {

       let elementTrigged = e.currentTarget;
    })
}
