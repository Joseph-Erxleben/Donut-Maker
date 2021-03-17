//index links

const donutCounterElement = document.querySelector('.hud__donutCounter');
const autoClickerCounterElement = document.querySelector('.hud__autoClickerCounter')

const ovenButton = document.querySelector('.input__oven');
const autoClickerButton = document.querySelector('.input__autoClicker');

//updates

const updateDonutCounter = function(donutCounterElement, bakery){
    donutCounterElement.innerText = bakery.getDonut();
} 

const updateAutoClickerCounter = function(autoClickerCounterElement, bakery){
    autoClickerCounterElement.innerText = bakery.getAutoClicker();
} 

//buttons

const makeButtonIntoOven = (oven, donutCounter, bakery) =>{
    oven.addEventListener('click', ()=>{
        bakery.bake();
        updateDonutCounter(donutCounter, bakery);
    })
}

const makeButtonIntoAutoClicker = (autoClicker, donutCounter, autoClickerCounter, bakery) =>{
    autoClicker.addEventListener('click', ()=>{
        bakery.addAutoClicker();
        updateDonutCounter(donutCounter, bakery);
        updateAutoClickerCounter(autoClickerCounter, bakery);
    })
}

//run the constants

const appBakery = new Bakery();

makeButtonIntoOven(ovenButton, donutCounterElement, appBakery);
makeButtonIntoAutoClicker(autoClickerButton, donutCounterElement, autoClickerCounterElement, appBakery);

//functions

function UpdateHud(){
    updateDonutCounter(donutCounterElement, appBakery);
}

let interval = setInterval(UpdateHud, 500);

//run the functions
