import {Grupo} from './Grupo';
/**
 * Clase para almacenar la información de un album musical
 */
export class Artista{
    /**
     * En el constructor se inicializan los atributos
     * @param nombre Es el nombre del artista
     * @param grupos nombre de los grupos a los que pertenece
     * @param generos array que contiene los generos del artista
     * @param albunes albunes en los que ha participado
     * @param canciones array que contiene las canciones del artista
     * @param oyentes numero de oyentes del artista
     */
    constructor(private nombre:string, private grupos:Grupo[], private generos:string[], private albunes:string[], private canciones:string[], private oyentes:number){

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
    getGrupo():Grupo[]{
        return this.grupos;
    }

    /**
     * Getter de los generos
     * @return retorna los generos del album
     */
    getGeneros():string[]{
        return this.generos;
    }

     /**
     * Getter del año
     * @return retorna el año en que se lanzó el album
     */
    getAlbunes():string[]{
        return this.albunes;
    }

    /**
     * Getter de las canciones
     * @return retorna las canciones del album
     */
    getCanciones():string[]{
        return this.canciones;
    }
}