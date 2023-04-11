
function calculaRaizes(delta, valor_a, valor_b){
    let raiz_x1 = document.querySelector('#resultado-x1');
    let raiz_x2 = document.querySelector('#resultado-x2');

    raiz_x1.value = (-valor_b + Math.sqrt(delta))/2*valor_a;
    raiz_x2.value = (-valor_b - Math.sqrt(delta))/2*valor_a;


}

function calculaVertice(valor_a, valor_b, delta) {

    let vertice_x = document.querySelector('#vertice-x');
    let vertice_y = document.querySelector('#vertice-y');

    vertice_x.value = -(valor_b/(2*valor_a));
    vertice_y.value = -(delta/(4*valor_a));

}

function calculaDiscriminante(valor_a, valor_b, valor_c, delta) {

    delta.value = valor_b*valor_b - 4*valor_a*valor_c;

    calculaRaizes(delta.value, valor_a, valor_b);
    calculaVertice(valor_a, valor_b, delta.value);
    defineQuantidadeRaizes(delta.value);
}

function definePosicaoParabola(valor_a) {

    let pos_parabola = document.querySelector('#parabola-pos');

    if(valor_a < 0) pos_parabola.value = 'Para baixo';
    else pos_parabola.value = 'Para cima'; 
     
}

function defineQuantidadeRaizes(delta) {

    let num_raizes = document.querySelector('#num-raizes');

    if(delta < 0) num_raizes.value = 0;
    else if(delta == 0) num_raizes.value = 1;
    else num_raizes.value = 2;

}


function verificaA() {

    let valor_a = document.querySelector('#coeficiente-a').value;

    if(valor_a != 0) {

        let valor_b = document.querySelector('#coeficiente-b').value;
        let valor_c = document.querySelector('#coeficiente-c').value;
        let delta = document.querySelector('#resultado-delta');
        calculaDiscriminante(valor_a, valor_b, valor_c, delta);
        definePosicaoParabola(valor_a);
    }

    else window.alert("Função inserida não é de segundo grau");
    
}



let botaoResultadoEl =  document.querySelector('#resolver');

botaoResultadoEl.addEventListener('click', verificaA);