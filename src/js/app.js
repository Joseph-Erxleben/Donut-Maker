//index links

const donutCounterElement = document.querySelector('.donut__counter');
const autoClickerCounterElement = document.querySelector('.autoClicker__counter');
const multiplierCounterElement = document.querySelector('.multiplier__counter');

const donutButton = document.querySelector('.donut__button');
const autoClickerButton = document.querySelector('.autoClicker__button');
const multiplierButton = document.querySelector('.multiplier__button');

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

const makeButtonIntoDonut = (donutButton, donutCounter, bakery) =>{
    donutButton.addEventListener('click', ()=>{
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

makeButtonIntoDonut(donutButton, donutCounterElement, appBakery);
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
