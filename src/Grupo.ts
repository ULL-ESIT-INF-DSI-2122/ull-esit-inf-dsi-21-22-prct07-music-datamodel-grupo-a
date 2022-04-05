/**
 * Clase para almacenar la información de un grupo musical
 */
export class Grupo{
    /**
     * En el constructor se inicializan los atributos
     * @param nombre Es el nombre del grupo
     * @param artistas artistas que forman el grupo
     * @param año año de creacion del grupo
     * @param generos array que contiene los generos del grupo
     * @param albunes array que contiene los albunes lanzados por el grupo
     * @param oyentes numero de oyentes mensuales que tiene el grupo
     */
    constructor(private nombre:string, private artistas:string[], private año:string, private generos:string[], private albunes:string[], private oyentes:number){

    }

    /**
     * Getter del nombre
     * @return retorna el nombre del grupo
     */
    getNombre():string{
        return this.nombre;
    }

    /**
     * Getter del grupo
     * @return retorna los artistas que componen el grupo
     */
    getArtistas():string[]{
        return this.artistas;
    }

    /**
     * Getter del año
     * @return retorna el año en que se lanzó el grupo
     */
    getAño():string{
        return this.año;
    }

    /**
     * Getter de los generos
     * @return retorna los generos del grupo
     */
    getGeneros():string[]{
        return this.generos;
    }

    /**
     * Getter de los albunes
     * @return retorna los albunes lanzados por el grupo
     */
    getCanciones():string[]{
        return this.albunes;
    }

    /**
     * Getter de los oyentes
     * @return retorna la cantidad de oyentes mensuales
     */
    getOyentes():number{
        return this.oyentes;
    }
}