class Bakery {
    constructor () {
        this._donuts = 0;
        this._autoClicker = 0;
        this._autoClickerCost = 100;
        this._multiplier = 0;
        this.tickInterval = self.setInterval(this.activateAutoClickers, 1000);
    }

    bake () {
        this._donuts += 1;
    }

    getDonut() {
        return this._donuts;
    }

    addAutoClicker() {
        if (this._donuts >= this._autoClickerCost){
            this._autoClicker += 1;
            this._donuts -= this._autoClickerCost;
            this._autoClickerCost *= 1.1;
        }
        else{

        }

    }

    getAutoClicker() {
        return this._autoClicker;
    }

    activateAutoClickers = () =>{
        this._donuts += this._autoClicker;
    }
}