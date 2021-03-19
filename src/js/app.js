//application links

const donutCounterElement = document.querySelector('.donut__counter');
const autoClickerCounterElement = document.querySelector('.autoClicker__counter');
const multiplierCounterElement = document.querySelector('.multiplier__counter');

const donutButton = document.querySelector('.donut__button');
const autoClickerButton = document.querySelector('.autoClicker__button');
const multiplierButton = document.querySelector('.multiplier__button');
const resetButton = document.querySelector('.reset__button');

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

const updateDonutButton = function(donutButtonElement, bakery){
    donutButtonElement.innerText = "Bake " + bakery.getDonutPerClick() + " Donuts"
}

const updateMultiplierButton = function(multiplierButtonElement, bakery){
    multiplierButtonElement.innerText = "Become a Better Baker | " + bakery.getMultiplierCost();
    if(bakery.getDonut() < bakery.getMultiplierCost()){
        multiplierButtonElement.style.background = "#A9A9A9";
    }
    else{
        multiplierButtonElement.style.background = "#F5F5F5";
    }
}

const updateAutoClickerButton = function(autoClickerButtonElement, bakery){
    autoClickerButtonElement.innerText = "Hire a Baker | " + bakery.getAutoClickerCost();
    if(bakery.getDonut() < bakery.getAutoClickerCost()){
        autoClickerButtonElement.style.background = "#A9A9A9";
    }
    else{
        autoClickerButtonElement.style.background = "#F5F5F5";
    }
}

//buttons

const makeButtonIntoDonut = (donutButton, donutCounter, bakery) =>{
    donutButton.addEventListener('click', ()=>{
        bakery.bake();
        UpdateInterface();
    })
}

const makeButtonIntoAutoClicker = (autoClicker, donutCounter, autoClickerCounter, bakery) =>{
    autoClicker.addEventListener('click', ()=>{
        bakery.addAutoClicker();
        UpdateInterface();
    })
}

const makeButtonIntoMultiplier = (multiplier, donutCounter, donutButtonElement, multiplierCounter, bakery) =>{
    multiplier.addEventListener('click', ()=>{
        bakery.addMultiplier();
        UpdateInterface();
    })
}

const makeButtonIntoReset = (reset, bakery) =>{
    reset.addEventListener('click', ()=>{
        bakery.reset();
    })
}

//run the constants

const appBakery = new Bakery();

makeButtonIntoDonut(donutButton, donutCounterElement, appBakery);
makeButtonIntoAutoClicker(autoClickerButton, donutCounterElement, autoClickerCounterElement, appBakery);
makeButtonIntoMultiplier(multiplierButton, donutCounterElement, donutButton, multiplierCounterElement, appBakery);
makeButtonIntoReset(resetButton, appBakery);

//update ticker

function UpdateInterface(){
    updateDonutButton(donutButton, appBakery);
    updateDonutCounter(donutCounterElement, appBakery);
    updateAutoClickerButton(autoClickerButton, appBakery);
    updateAutoClickerCounter(autoClickerCounterElement, appBakery);
    updateMultiplierButton(multiplierButton, appBakery);
    updateMultiplierCounter(multiplierCounterElement, appBakery);
}

let interval = setInterval(UpdateInterface, 200);

//dropdown code

function dropdownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
 }

 window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
