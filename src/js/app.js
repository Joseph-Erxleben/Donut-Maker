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
    donutCounterElement.innerText = "You have " + round(bakery.getDonut()) + " Donuts.";
} 

const updateAutoClickerCounter = function(autoClickerCounterElement, bakery){
    if(bakery.getAutoClicker() > 1){
        autoClickerCounterElement.innerText = "You have hired " + bakery.getAutoClicker() + " bakers, making " + round(bakery.getDonutPerSecond()) + " donuts per second.";
    }
    else if(bakery.getAutoClicker() > 0){
        if(bakery.getMultiplier() > 0){
            autoClickerCounterElement.innerText = "You have hired " + bakery.getAutoClicker() + " baker, making " + round(bakery.getDonutPerSecond()) + " donuts per second.";
        }
        else{
            autoClickerCounterElement.innerText = "You have hired " + bakery.getAutoClicker() + " baker, making " + round(bakery.getDonutPerSecond()) + " donut per second.";
        }
    }

} 

const updateMultiplierCounter = function(multiplierCounterElement, bakery){
    if(bakery.getMultiplier() > 1){
        multiplierCounterElement.innerText = "You have purchased " + bakery.getMultiplier() + " multipliers, increasing the donuts you bake by " + round(bakery.getDonutPerClick()-1)*100 + "%.";
    }
    else if(bakery.getMultiplier() > 0){
        multiplierCounterElement.innerText = "You have purchased " + bakery.getMultiplier() + " multiplier, increasing the donuts you bake by " + round(bakery.getDonutPerClick()-1)*100 + "%.";
    }
}

const updateDonutButton = function(donutButtonElement, bakery){
    donutButtonElement.innerText = "Bake " + round(bakery.getDonutPerClick()) + " Donuts"
}

const updateMultiplierButton = function(multiplierButtonElement, bakery){
    multiplierButtonElement.innerText = "Become a Better Baker | " + round(bakery.getMultiplierCost());
    if(bakery.getDonut() < bakery.getMultiplierCost()){
        multiplierButtonElement.style.background = "#A9A9A9";
    }
    else{
        multiplierButtonElement.style.background = "#F5F5F5";
    }
}

const updateAutoClickerButton = function(autoClickerButtonElement, bakery){
    autoClickerButtonElement.innerText = "Hire a Baker | " + round(bakery.getAutoClickerCost());
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

let interval = setInterval(UpdateInterface, 100);

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

  function round(number){
    return Number.parseFloat(number).toFixed(2);
  }
