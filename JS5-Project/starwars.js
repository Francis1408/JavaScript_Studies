// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução
import { play } from "./music.js"
import { romanConversion } from "./roman.js";
import { restartAnimation } from "./restart-animation.js";


const API_ENDPOINT = 'https://swapi.dev/api'
const listaEl = document.getElementById('filmes');
const resposta = await fetch(`${API_ENDPOINT}/films`)
const dados = await resposta.json();
//console.log(dados);
listaEl.innerHTML = '';

play({audioUrl: 'audio/tema-sw.mp3', coverImageUrl: 'imgs/logo.svg', title: 'Intro', artist: 'John Williams'}, document.body);


function modificaIntroducao(event) {
    const containerIntroEl = document.querySelector(".container-introducao")
    let triggeredEl = event.currentTarget;
    
    for(let episode of dados['results']) {
        if(episode.episode_id == triggeredEl.getAttribute('data-episode-id')) {
            containerIntroEl.innerHTML = '';
            const novoElement = document.createElement('pre');
            novoElement.innerHTML = `Episode ${romanConversion(episode.episode_id)}\n ${episode.title.toUpperCase()}\n\n ${episode.opening_crawl}`
            novoElement.classList.add('introducao');
            containerIntroEl.appendChild(novoElement);
            restartAnimation(novoElement);
        }
    }

}



function adicionaElemento(element, containerEl) {

    console.log(element);
    const novoElement = document.createElement('li');
    const conteudo = `Episode ${romanConversion(element.episode_id)}`;
    novoElement.innerHTML = ` ${conteudo.padEnd(12, ' ')}- ${element.title} `
    novoElement.setAttribute('data-episode-id', element.episode_id);
    novoElement.addEventListener('click', (e) => modificaIntroducao(e));
    containerEl.appendChild(novoElement);


}


const orderedResults = dados['results'].sort((a, b) => (a.episode_id > b.episode_id) ? 1 : -1);
console.log(orderedResults);

orderedResults.forEach(film => adicionaElemento(film, listaEl));




