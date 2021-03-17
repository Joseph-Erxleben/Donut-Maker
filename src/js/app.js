//index links

const donutCounterElement = document.querySelector('.hud__donutCounter');
const autoClickerCounterElement = document.querySelector('.hud__autoClickerCounter');
const multiplierCounterElement = document.querySelector('.hud__multiplierCounter');

const ovenButton = document.querySelector('.input__oven');
const autoClickerButton = document.querySelector('.input__autoClicker');
const multiplierButton = document.querySelector('.input__multiplier');

//updates

const updateDonutCounter = function(donutCounterElement, bakery){
    donutCounterElement.innerText = bakery.getDonut();
} 

const updateAutoClickerCounter = function(autoClickerCounterElement, bakery){
    autoClickerCounterElement.innerText = bakery.getAutoClicker();
} 

const updateMultiplierCounter = function(multiplierCounterElement, bakery){
    multiplierCounterElement.innerText = bakery.getMultiplier();
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

const makeButtonIntoMultiplier = (multiplier, donutCounter, multiplierCounter, bakery) =>{
    multiplier.addEventListener('click', ()=>{
        bakery.addMultiplier();
        updateDonutCounter(donutCounter, bakery);
        updateMultiplierCounter(multiplierCounter, bakery);
    })
}

//run the constants

const appBakery = new Bakery();

makeButtonIntoOven(ovenButton, donutCounterElement, appBakery);
makeButtonIntoAutoClicker(autoClickerButton, donutCounterElement, autoClickerCounterElement, appBakery);
makeButtonIntoMultiplier(multiplierButton, donutCounterElement, multiplierCounterElement, appBakery);

//functions

function UpdateHud(){
    updateDonutCounter(donutCounterElement, appBakery);
    updateAutoClickerCounter(autoClickerCounterElement, appBakery);
    updateMultiplierCounter(multiplierCounterElement, appBakery);
}

let interval = setInterval(UpdateHud, 500);

//run the functions
