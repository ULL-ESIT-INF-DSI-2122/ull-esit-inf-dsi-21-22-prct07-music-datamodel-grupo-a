import { Album } from "./Album"
import { Cancion } from "./Cancion"
import {Grupo} from './Grupo';
import {Artista} from './Artista';

export class GeneroMusical{
   /* private genreName:string
    private artistas: string[]
    private grupos: string[]
    private albumes: string[]
    private canciones: Cancion[]
*/
    /**
     * constructor de la clase GeneroMusical, crea un nuevo genero comprobando que los elementos que se le pasa pertenecen a ese genero en concreto
     * @param name nombre del genero
     * @param art artistas que pertenecen al genero
     * @param grup grupos que pertenecen al genero
     * @param alb albumes que pertenecen al genero
     * @param can canciones que pertenecen al genero
     */
    constructor(private genreName:string, private artistas: string[], private grupos: string[], private albumes: string[], private canciones: Cancion[]){
        /*this.genreName = name
        this.artistas = art
        this.grupos = grup
        for(let i = 0; i <= alb.length; i++){
            for(let j = 0; j <= alb[i].getGenre().length; j++){
                if(this.genreName == alb[i].getGenre()[j].getName()){
                    this.albumes.push(alb[i])
                    break
                } 
            }
        }
        //this.albumes = alb
        for(let i = 0; i <= can.length; i++){
            for(let j = 0; j <= can[i].getGeneros().length; j++){
                if(this.genreName == alb[i].getGenre()[j].getName()){
                    this.canciones.push(can[i])
                } 
            }
        }
        //this.canciones = can*/
    }

    /**
     * getter para el nombre del genero
     * @returns el nombre del genero
     */
    getName():string{
        return this.genreName
    }

    /**
     * getter para los artistas de un genero
     * @returns el array con los artistas de un genero
     */
    getArtistas():string[]{
        return this.artistas
    }

    /**
     * getter para los grupos de un genero
     * @returns el array con los grupos de un genero
     */
    getGrupos():string[]{
        return this.grupos 
    }

    /**
     * getter para los albumes de un genero
     * @returns el array con los albumes de un genero
     */
    getAlbumes():string[]{
        return this.albumes
    }

    /**
     * getter para las canciones de un genero
     * @returns el array con las canciones
     */
    getCanciones():Cancion[]{
        return this.canciones
    }

    //addArtista(art:Artista):void{}
    //addGrupo(gru:Grupo):void{}
    
    /**
     * metodo que añade un album a la lista del genero
     * @param alb el album que se va a añadir
     */
    /*addAlbum(alb:Album):void{
        for(let i:number = 0; i <= this.albumes.length;i++){
            if(this.albumes[i].getName() == alb.getName()){
                console.log("este album ya esta añadido a la lista del genero")
                return
            }
        }
        for(let i:number = 0; i <= alb.getGenre().length;i++){
            if(this.genreName == alb.getGenre()[i].getName()){
                this.albumes.push(alb)
                return
            }
        }
        console.log("el album no fue añadido porque no pertenecia a este genero")
    }*/

    /**
     * metodo que añade una cancion a la lista del genero
     * @param can la cancion que se va a añadir
     */
    addCancion(can:Cancion):void{
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getName() == can.getName()){
                console.log("esta cancion ya esta añadida a la lista del genero")
                return
            }
        }
        for(let i:number = 0; i <= can.getGeneros().length;i++){
            if(this.genreName == can.getGeneros()[i]){
                this.canciones.push(can)
                return
            }
        }
        console.log("la cancion no fue añadida porque no pertenecia a este genero")
    }

}