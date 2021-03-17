class Bakery {
    constructor () {
        this._donuts = 0;
        this._autoclicker = 0;
        this._multiplier = 0;
    }

    bake () {
        this._donuts += 1;
    }

    getDonut() {
        return this._donuts;
    }
}