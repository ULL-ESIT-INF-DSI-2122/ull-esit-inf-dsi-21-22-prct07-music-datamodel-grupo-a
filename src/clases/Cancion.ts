import { GeneroMusical } from "./GeneroMusical"

export class Cancion{
    private singName: string
    private autor: string
    private duracion: number[]
    private generos: string[]
    private single: boolean
    private reproduccionTo:number

    /**
     * constructor de la clase cancion
     * @param name nombre de la cancion
     * @param au autor de la cancion
     * @param du duracion de la cancion
     * @param ge generos de la cancion
     * @param si flag que permite saber si la cancion es un single
     * @param re reproducciones totales de la cancion
     */
    constructor(name:string, au:string, du: number[], ge:string[], si:boolean, re:number){
        this.singName = name
        this.autor = au
        if(du.length > 2){
            console.error("la duracion de la cancion tiene que estar en minutos y segundos")
        }
        else{
            this.duracion = du
            if(this.duracion[1] >= 60){
                this.duracion[1] = this.duracion[1] - 60
                this.duracion[0]++
            }
        }
        this.generos = ge
        this.single = si
        this.reproduccionTo = re
    }

    /**
     * getter del nombre
     * @returns el nombre de la cancion
     */
    getName():string{
        return this.singName
    }

    /**
     * getter del autor
     * @returns devuelve el autor de la cancion
     */
    getAutor():string{
        return this.autor
    }

    /**
     * getter de la duracion 
     * @returns la duracion de la cancion en minutos y segundos
     */
    getDuration():number[]{
        return this.duracion
    }

    /**
     * getter de los generos de la cancion
     * @returns un array con los generos que tiene una cancion
     */
    getGeneros():string[]{
        return this.generos
    }

    /**
     * getter del flag Single
     * @returns devuelve true si la cancion es un single o false en caso contrario
     */
    getSingle():boolean{
        return this.single
    }

    /**
     * getter de las reproducciones
     * @returns devuelve el numero de reproducciones totales
     */
    getRepro():number{
        return this.reproduccionTo
    }
}