class Multimedia {
    #views = 0
    constructor(titol, durada_minuts) {
        this.titol = titol;
        this.durada_minuts = durada_minuts;
    
    }
    play() {
        console.log("Reproduint...");
        this.#views + 1;
    }
    get_Views() {
        return this.#views;
    }
    #calcularCostServer(cost_server, minut) {
        let cost_server = this.durada_minuts * 0.01;
        return cost_server;

    }
   
}

