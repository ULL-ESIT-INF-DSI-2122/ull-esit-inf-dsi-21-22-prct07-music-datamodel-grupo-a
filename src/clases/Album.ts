import { Cancion } from "./Cancion"
import { GeneroMusical } from "./GeneroMusical"

export class Album{
    private albumName: string
    private autor: Artista | Grupo
    private año: number
    private generos: GeneroMusical[]
    private canciones:Cancion[]

    /**
     * constructor de la clase album
     * @param name nombre del album
     * @param au autor del album
     * @param ye año de publicacion del album
     * @param gen generos del album
     * @param can canciones del album
     */
    constructor(name:string, au: Artista|Grupo,ye:number,gen:GeneroMusical[],can:Cancion[]){
        this.albumName = name
        this.autor = au
        this.año = ye
        this.generos = gen
        //this.canciones = can
        for(let i:number = 0; i <= can.length; i++){
            if(can[i].getSingle() == false){
                this.canciones.push(can[i])
            }
        }
    }

    /**
     * getter del nombre del album
     * @returns el nombre del album
     */
    getName():string{
        return this.albumName
    }

    /**
     * getter con el autor del album
     * @returns el Artista/Grupo autor del album
     */
    getAutor():Artista|Grupo{
        return this.autor
    }

    /**
     * getter del año en que salio el album
     * @returns el año de salida del album
     */
    getYear():number{
        return this.año
    }

    /**
     * getter de los generos del album
     * @returns un array con todos los generos del album
     */
    getGenre():GeneroMusical[]{
        return this.generos
    }

    /**
     * getter de las canciones del album
     * @returns un array con todas las canciones del album
     */
    getCancion():Cancion[]{
        return this.canciones
    }
}