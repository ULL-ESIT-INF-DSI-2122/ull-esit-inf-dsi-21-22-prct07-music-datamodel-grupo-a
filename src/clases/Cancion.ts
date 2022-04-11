import { GeneroMusical } from "./GeneroMusical"

export class Cancion{
    private songName: string
    private autor: string
    private duracion: number[]
    private generos: GeneroMusical[]
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
    constructor(name:string, au:string, du: number[], ge:GeneroMusical[], si:boolean, re:number){
        this.songName = name
        this.autor = au
        if(du.length > 2){
            console.error("la duracion de la cancion tiene que estar en minutos y segundos")
        }
        else{
            this.duracion = du
            while(this.duracion[1] >= 60){
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
        return this.songName
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
    getGeneros():GeneroMusical[]{
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

    /**
     * setter del nombre
     * @param name nuevo nombre del genero musical
     */
    setName(nam:string){
        this.songName = nam
    }

    /**
     * setter para el autor de la cancion
     * @param aut nuevo autor de la cancion
     */
    setAut(aut:string){
        this.autor = aut
    }

    /**
     * setter de la duracion
     * @param dur nueva duracion
     */
    setDur(dur:number[]){
        if(dur.length != 2){
            console.error("la duracion introducida no es correcta")
        }
        else{
            this.duracion = dur
            while(this.duracion[0] >= 60){
                this.duracion[0] -= 60
                this.duracion[1]++
            }
        }
    }

    /**
     * metodo que añade un genero musical al array de generos
     * @param gen genero que se va a añadir
     */
    addGen(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                console.log("La cancion ya pertenece al genero")
                return
            }
        }
        this.generos.push(gen)
    }

    /**
     * metodo que borra un genero musical del array de generos
     * @param gen genero que se va a borrar
     */
    delGen(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                this.generos.splice(i,1)
                return
            }
        }
        console.log("El artista no pertenece al genero")
    }

    /**
     * setter que cambia el flag single de una cancion
     */
    setSing(){
        this.single = !this.single
    }

    /**
     * metodo que añade reproducciones a las reproducciones totales
     * @param rep reproducciones que se van a añadir
     */
    addRep(rep:number = 1){
        this.reproduccionTo += rep
    }

    /**
     * setter para las reproducciones totales
     * @param rep nuevas reproduccion totales
     */
    setRep(rep:number){
        this.reproduccionTo = rep
    }
}