/**
 * Clase para almacenar la información de un album musical
 */
export class Album{
    /**
     * En el constructor se inicializan los atributos
     * @param nombre Es el nombre del album
     * @param grupo nombre del grupo que hace el album
     * @param año año de lanzamiento del album
     * @param generos array que contiene los generos del album
     * @param canciones array que contiene las canciones del album
     */
    constructor(private nombre:string, private grupo:string, private año:string, private generos:string[], private canciones:string[]){

    }

    /**
     * Getter del nombre
     * @return retorna el nombre del album
     */
    getNombre():string{
        return this.nombre;
    }

    /**
     * Getter del grupo
     * @return retorna el nombre del grupo que hizo el album
     */
    getGrupo():string{
        return this.grupo;
    }

    /**
     * Getter del año
     * @return retorna el año en que se lanzó el album
     */
    getAño():string{
        return this.año;
    }

    /**
     * Getter de los generos
     * @return retorna los generos del album
     */
    getGeneros():string[]{
        return this.generos;
    }

    /**
     * Getter de las canciones
     * @return retorna las canciones del album
     */
    getCanciones():string[]{
        return this.canciones;
    }
}