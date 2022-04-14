import { Cancion } from "./Cancion"
import { GeneroMusical } from "./GeneroMusical"
import {Grupo} from './Grupo';
import {Artista} from './Artista';

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

    /**
     * setter del nombre del album
     * @param nam nuevo nombre del album
     */
    setName(nam:string){
        this.albumName = nam
    }

    /**
     * setter para el autor del album
     * @param aut nuevo autor del album
     */
    setAutor(aut: Artista|Grupo){
        this.autor = aut
    }
    
    /**
     * setter para el año de publicacion
     * @param año nuevo año de publicacion
     */
    setAño(año:number){
        this.año = año
    }

    /**
     * metodo que añade un genero musical al array de generos
     * @param gen nuevo genero a añadir
     */
    addGen(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                console.log("El genero ya esta añadido al album")
                return
            }
        }
        this.generos.push(gen)
    }

    /**
     * metodo que añade una cancion al array de canciones
     * @param can cancion que se va añadir
     */
    addCanc(can:Cancion){
        for(let i:number = 0; i <= this.canciones.length; i++){
            if(this.canciones[i].getName() == can.getName()){
                console.log("La cancion ya esta añadido al album")
                return
            }
        }
        this.canciones.push(can)
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
        console.log("El genero no pertenece al album")
    }

    /**
     * metodo que borra una cancion del array de canciones
     * @param can cancion que se va a borrar
     */
    delCanc(can:Cancion){
        for(let i:number = 0; i <= this.canciones.length; i++){
            if(this.canciones[i].getName() == can.getName()){
                this.canciones.splice(i,1)
                return
            }
        }
        console.log("La cancion no pertenece al album al album")
    }
}