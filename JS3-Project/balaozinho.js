
let marcacoesEl = document.querySelectorAll('.marcacao');
let balaozinhoEl = document.querySelector('#balaozinho');
let botaoDefinirEl = document.querySelector('#definir-marcacao');

// Evento de marcação 

for (let marcacaoEl of marcacoesEl) {

    marcacaoEl.addEventListener('mouseover', (e) => {

        let triggeredEl = e.currentTarget;

        console.log(triggeredEl);
        let title = triggeredEl.dataset.titulo;
        let body = triggeredEl.dataset.conteudo;

        balaozinhoEl.style.display = 'block';

        balaozinhoEl.innerHTML = `<h2>${title}</h2><p>${body}</p>`;
    });

    marcacaoEl.addEventListener('mouseout', () => {

        balaozinhoEl.style.display = 'none';
        balaozinhoEl.innerHTML = '';

    });

    marcacaoEl.addEventListener('mousemove', (e) => {

        balaozinhoEl.style.left = `${e.pageX}px`;
        balaozinhoEl.style.top = `${e.pageY}px`;
    });
}

// Evento de definir marcação

botaoDefinirEl.addEventListener('click', () => {

    let marcacao_xEl = document.querySelector('#marcacao-x').value;
    let marcacao_yEl = document.querySelector('#marcacao-y').value;
    let marcacao_larguraEl = document.querySelector('#marcacao-largura').value;
    let marcacao_alturaEl = document.querySelector('#marcacao-altura').value;

    marcacoesEl[0].style = `width: ${marcacao_larguraEl}px; height: ${marcacao_alturaEl}px; top: ${marcacao_yEl}px; left: ${marcacao_xEl}px`;


});