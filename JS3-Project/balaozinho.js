
let marcacao_selecionada = 0;

let marcacoesEl = document.querySelectorAll('.marcacao');
let balaozinhoEl = document.querySelector('#balaozinho');
let botaoDefinirEl = document.querySelector('#definir-marcacao');

let marcacao_xEl = document.querySelector('#marcacao-x');
let marcacao_yEl = document.querySelector('#marcacao-y');
let marcacao_larguraEl = document.querySelector('#marcacao-largura');
let marcacao_alturaEl = document.querySelector('#marcacao-altura');

let seletorArquivoEl = document.querySelector('#seletor-arquivo');
let fotoEl = document.querySelector('.foto-anotada');

// Evento de marcação 

for (let marcacaoEl of marcacoesEl) {

    marcacaoEl.addEventListener('mouseover', (e) => {

        let triggeredEl = e.currentTarget;

        //console.log(triggeredEl);
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

    marcacaoEl.addEventListener('click', (e) => {

        let marcacoesArray = Array.from(marcacoesEl);
        marcacao_selecionada = marcacoesArray.indexOf(e.currentTarget);

        for(let i = 0; i < marcacoesEl.length; i++) {

            marcacoesEl[i].classList.remove('selecionada');
        }
        e.currentTarget.classList.add('selecionada');
       //console.log(marcacao_selecionada);
    })
}

// Evento de definir marcação

/*

botaoDefinirEl.addEventListener('click', () => {

    marcacoesEl[0].style = `width: ${marcacao_larguraEl.value}px; height: ${marcacao_alturaEl.value}px; top: ${marcacao_yEl.value}px; left: ${marcacao_xEl.value}px`;

});
*/ 

marcacao_xEl.addEventListener('change', (e) => {

    marcacoesEl[marcacao_selecionada].style.top = `${e.currentTarget.value}px`

});

marcacao_yEl.addEventListener('change', (e) => {

    marcacoesEl[marcacao_selecionada].style.left = `${e.currentTarget.value}px`

});

marcacao_alturaEl.addEventListener('change', (e) => {

    marcacoesEl[marcacao_selecionada].style.height = `${e.currentTarget.value}px`

});

marcacao_larguraEl.addEventListener('change', (e) => {

    marcacoesEl[marcacao_selecionada].style.width = `${e.currentTarget.value}px`

});

// Selecionar imagem

seletorArquivoEl.addEventListener('change', (e) => {

    const listaArquivo = e.target;
    const arquivo = listaArquivo.files[0];

    if(arquivo) {
        const reader = new FileReader();
        reader.addEventListener('load', (e) =>{

           img = fotoEl.childNodes[1]; //Posição da imagem
           img.src = e.target.result;
        })

        reader.readAsDataURL(arquivo);
    }

});

