
function calculaRaizes(delta, valor_a, valor_b){
    let raiz_x1 = document.querySelector('#resultado-x1');
    let raiz_x2 = document.querySelector('#resultado-x2');

    raiz_x1.value = (-valor_b + Math.sqrt(delta))/2*valor_a;
    raiz_x2.value = (-valor_b - Math.sqrt(delta))/2*valor_a;


}



function calculaDiscriminante(){

    let valor_a = document.querySelector('#coeficiente-a').value;
    let valor_b = document.querySelector('#coeficiente-b').value;
    let valor_c = document.querySelector('#coeficiente-c').value;
    let delta = document.querySelector('#resultado-delta');

    delta.value = valor_b*valor_b - 4*valor_a*valor_c;

    calculaRaizes(delta.value, valor_a, valor_b);
}



let botaoResultadoEl =  document.querySelector('#resolver');

botaoResultadoEl.addEventListener('click', calculaDiscriminante);