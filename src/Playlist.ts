/**
 * Clase para almacenar la información de una playlist musical
 */
export class Playlist{
    /**
     * En el constructor se inicializan los atributos
     * @param nombre Es el nombre de la playlist
     * @param canciones artistas que forman el grupo
     * @param duracion duracion en horas y minutos de la playlist
     * @param generos array que contiene los generos del grupo
     */
    constructor(private nombre:string, private canciones:string[], private duracion:number, private generos:string[]){

    }

    /**
     * Getter del nombre
     * @return retorna el nombre de la playlist
     */
    getNombre():string{
        return this.nombre;
    }

    /**
     * Getter de las canciones
     * @return retorna las canciones incluidas en la playlist
     */
    getCanciones():string[]{
        return this.canciones;
    }

    /**
     * Getter de la duracion
     * @return retorna la duracion de la playlist
     */
    getDuracion():number{
        return this.duracion;
    }

    /**
     * Getter de los generos
     * @return retorna los generos musicales que contiene la playlist
     */
    getGeneros():string[]{
        return this.generos;
    }

    
}