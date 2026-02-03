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
    #calcularCostServer(durada_minuts, minut) {
        durada_minuts = [];
        minut = 0.01;
        for minut in durada_minuts;
            minut = minut + minut;
            durada_minuts.append(minut);

    }
   
}
