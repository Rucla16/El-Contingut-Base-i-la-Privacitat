import Multimedia from models;
import Pelicula from pelicules;
import Serie from serie;
class Usuari {
    constructor(my_list) {
        this.my_list = my_list;

    }
    afegir_a_llista(item) {
        this.my_list = [];
        let item = (Pelicula , Serie);
        this.my_list.append(item);
    }
    temps_total_consumit(temps_total) {
        let temps_total = 0;
        for (item of this.my_list) {
            temps_total += item.durada_minuts;
        }
        return temps_total / 60;
    }
}