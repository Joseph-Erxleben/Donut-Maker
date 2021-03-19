//application links

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

const updateAutoClickerButton = function(){

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

const makeButtonIntoMultiplier = (multiplier, donutCounter, donutButtonElement, multiplierCounter, multiplierButtonElement, bakery) =>{
    multiplier.addEventListener('click', ()=>{
        bakery.addMultiplier();
        updateDonutCounter(donutCounter, bakery);
        updateDonutButton(donutButtonElement, bakery);
        updateMultiplierCounter(multiplierCounter, bakery);
        updateMultiplierButton(multiplierButtonElement, bakery);
    })
}

//run the constants

const appBakery = new Bakery();

makeButtonIntoDonut(donutButton, donutCounterElement, appBakery);
makeButtonIntoAutoClicker(autoClickerButton, donutCounterElement, autoClickerCounterElement, appBakery);
makeButtonIntoMultiplier(multiplierButton, donutCounterElement, donutButton, multiplierCounterElement, multiplierButton, appBakery);

//update ticker

function UpdateInterface(){
    updateDonutCounter(donutCounterElement, appBakery);
    updateAutoClickerCounter(autoClickerCounterElement, appBakery);
    updateMultiplierCounter(multiplierCounterElement, appBakery);
    updateMultiplierButton(multiplierButton, appBakery);
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
