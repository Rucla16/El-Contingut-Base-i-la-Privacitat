import Multimedia from models
class Pelicula {
    constructor(any, cost_fix) {
        this.any = any;
        this.cost_fix = cost_fix;
    }
    play() {
        console.log("Reproduint...");
        this.#views + 1;
    }

    calcularRoyalties() {
        if (this.cost_fix > 0);
            this.#views * this.cost_fix;
        
    }

}