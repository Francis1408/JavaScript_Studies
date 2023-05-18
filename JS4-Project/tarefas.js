
let listaEl = document.getElementById('lista-tarefas');
let buttonCriarEl = document.querySelector('#incluir-nova-tarefa');
let filtrosEl = document.querySelector('#filtro-de-categoria'); 
let listaTarefasEl = document.querySelectorAll('.item-tarefa');

class Tarefa {

    constructor(nome, categoria, realizada) {
        this.nome = nome;
        this.categoria = categoria;
        this.realizada = realizada;
    }
    
    adicionaNaPagina(containerEl) {
        
        const novaTarefaEl = document.createElement('li');
        novaTarefaEl.innerHTML = this.nome;
        novaTarefaEl.classList.add('item-tarefa');
        if(this.realizada) novaTarefaEl.classList.add('marcado');
        novaTarefaEl.classList.add(`categoria-${this.categoria}`);

        containerEl.appendChild(novaTarefaEl);
    }

}

const tarefas = [];

tarefas[0] = new Tarefa('Comprar leite', 'compras', false);
tarefas[1] = new Tarefa('Escutar chimbinha', 'lazer', true);
limparLista();


function limparLista() {
    const listaTarefas = document.getElementById('lista-tarefas');
    listaTarefas.innerHTML = "";
}


tarefas.forEach(item => item.adicionaNaPagina(listaEl));


buttonCriarEl.addEventListener('click', (e) =>{

    e.preventDefault()

    let conteudoEl = document.getElementById('nova-tarefa-nome');
    let categoriaEl = document.getElementById('nova-tarefa-categoria');

    const tarefa = new Tarefa(conteudoEl.value, categoriaEl.value, false);
    tarefas.push(tarefa);
    tarefa.adicionaNaPagina(listaEl);

    conteudoEl.value = "";
    conteudoEl.focus();
  
})

filtrosEl.addEventListener('change', (e) =>{
    console.log(e.target.value);
        limparLista();

        tarefas.forEach(tarefa =>{
            if(e.target.value === '' || tarefa.categoria === e.target.value) {
                tarefa.adicionaNaPagina(listaEl);
            }
        })  
})

addEventListener("keyup", (e) =>{
    let conteudoEl = document.getElementById('nova-tarefa-nome');

    if(conteudoEl === document.activeElement && e.key === 'Enter') {

        let categoriaEl = document.getElementById('nova-tarefa-categoria');
        const tarefa = new Tarefa(conteudoEl.value, categoriaEl.value, false);
        tarefas.push(tarefa);
        tarefa.adicionaNaPagina(listaEl);

        conteudoEl.value = "";
        conteudoEl.focus();

    } 

})


console.log(listaTarefasEl);

for(let tarefaEl of listaTarefasEl) {
    console.log(tarefaEl);

    tarefaEl.addEventListener('click', (e) =>{


        let triggeredEl = e.currentTarget;
        triggeredEl.classList.toggle('marcado');
    })
}

