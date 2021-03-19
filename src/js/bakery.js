class Bakery {
    constructor () {
        this._donuts = 0;
        this._donutsPerClick = 1;
        this._donutsPerSecond = 0;
        this._autoClicker = 0;
        this._autoClickerCost = 100;
        this._multiplier = 0;
        this._multiplierValue = 1.2;
        this._multiplierCost = 10;
        this.tickInterval = self.setInterval(this.activateAutoClickers, 1000);
    }

    bake () {
        this._donuts += this._donutsPerClick;
    }

    getDonut() {
        return this._donuts;
    }

    getDonutPerClick() {
        return this._donutsPerClick;
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

    addMultiplier(){
        if(this._donuts >= this._multiplierCost){
            this._multiplier += 1;
            this._donutsPerClick = this._multiplierValue ** this._multiplier;
            this._donuts -= this._multiplierCost;
            this._multiplierCost *= 1.1;
        }
        else{

        }
    }

    getAutoClicker(){
        return this._autoClicker;
    }

    getAutoClickerCost(){
        return this._autoClickerCost;
    }

    getMultiplier(){
        return this._multiplier;
    }

    getMultiplierCost(){
        return this._multiplierCost;
    }

    activateAutoClickers = () =>{
        this._donutsPerSecond = this._autoClicker * this._donutsPerClick;
        this._donuts += this._donutsPerSecond;
    }
}