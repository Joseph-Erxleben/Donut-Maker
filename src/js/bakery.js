class Bakery {
    constructor () {
        this._donuts = 0;
        this._autoClicker = 0;
        this._multiplier = 0;
    }

    bake () {
        this._donuts += 1;
    }

    getDonut() {
        return this._donuts;
    }

    addAutoClicker() {
        this._autoClicker += 1;
        this._donuts -= 100;
    }

    getAutoClicker() {
        return this._autoClicker;
    }
}