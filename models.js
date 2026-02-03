class Multimedia {
    #views = 0
    constructor(titol, durada_minuts) {
        this.titol = titol;
        this.durada_minuts = durada_minuts;
    
    }
    play() {
        pass
    }
    get_Views() {
        return this.#views;
    }
    #calcularCostServer(cost_server, minut) {
        this.durada_minuts = [];
        minut = 1;
        for minut in this.durada_minuts;
            minut += minut;
            this.durada_minuts.append(minut);
        cost_server = this.durada_minuts * 0.01;
        

    }
   
}

