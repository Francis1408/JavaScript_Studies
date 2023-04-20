// Valores element

let valoresEl = document.querySelectorAll('.valor');

// Quantidade element

let quantidadeEl = document.querySelectorAll('.quantidade');

// Total element

let totalEl = document.querySelectorAll('.total');

// Valor final element

let valorTotalEl = document.querySelector('#valor-total');

// Events Listeners

for (let i = 0; i < valoresEl.length; i++) {

    valoresEl[i].addEventListener('change', (e) => {

        let triggerEl = e.currentTarget;
        totalEl[i].innerHTML =  `${triggerEl.value * quantidadeEl[i].value}`;
        
        let valorTotal = 0;

        for(let k = 0; k < totalEl.length; k++) {

            valorTotal += parseInt(totalEl[k].innerHTML);
            //console.log(totalEl[k].innerHTML); 
        }

        valorTotalEl.innerHTML = `${valorTotal}`;

    });
}

for (let j = 0; j < quantidadeEl.length; j++) {

    quantidadeEl[j].addEventListener('change', (e) =>{

        let triggerEl = e.currentTarget;
        totalEl[j].innerHTML = `${triggerEl.value * valoresEl[j].value}`;

        let valorTotal = 0;

        for(let k = 0; k < totalEl.length; k++) {

            valorTotal += parseInt(totalEl[k].innerHTML);
            //console.log(totalEl[k].innerHTML); 
        }

        valorTotalEl.innerHTML = `${valorTotal}`;
        
    });

}

