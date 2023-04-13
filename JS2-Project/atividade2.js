// Faça o exercício DOS PARÁGRAFOS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

function expandir(e) {

    let el  = e.currentTarget;
    console.log(el.parentNode);
    el.parentNode.classList.toggle('expandido');

}


let botoesExpandirEl = document.querySelectorAll(".botao-expandir-retrair");

for(let botaoEl of botoesExpandirEl) {

    botaoEl.addEventListener('click', expandir);
}




