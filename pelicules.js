import Multimedia from models;
class Pelicula {
    constructor(any, cost_fix) {
        this.any = any;
        this.cost_fix = cost_fix;
    }

    calcularRoyalties(royalties) {
        let royalties = 0;
        if (this.cost_fix > 0) {
             royalties = this.#views * this.cost_fix;
        }   
         return royalties; 
    }

}
