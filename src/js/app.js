
const ovenButton = document.querySelector('.input__oven');
const donutCounterElement = document.querySelector('.hud__donutCounter');

const updateDonutCounter = function(donutCounterElement, bakery){
    donutCounterElement.innerText = bakery.getDonut();
} 

const makeButtonIntoOven = (oven, donutCounter, bakery) =>{
    oven.addEventListener('click', ()=>{
        bakery.bake();
        updateDonutCounter(donutCounter, bakery);
    })
}

const appBakery = new Bakery();

makeButtonIntoOven(ovenButton, donutCounterElement, appBakery);