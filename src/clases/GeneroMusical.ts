import { Album } from "./Album"
import { Cancion } from "./Cancion"
import {Grupo} from './Grupo';
import {Artista} from './Artista';

export class GeneroMusical{
    /**
     * constructor de la clase GeneroMusical, crea un nuevo genero comprobando que los elementos que se le pasa pertenecen a ese genero en concreto
     * @param name nombre del genero
     * @param art artistas que pertenecen al genero
     * @param grup grupos que pertenecen al genero
     * @param alb albumes que pertenecen al genero
     * @param can canciones que pertenecen al genero
     */
    constructor(private genreName:string, private artistas: string[], private grupos: string[], private albumes: string[], private canciones: Cancion[]){}

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

    /**
     * setter del nombre
     * @param name nuevo nombre del genero musical
     */
    setGenNam(name:string){
        this.genreName = name
    }

    /**
     * metodo que añade un artista al array de artistas del genero
     * @param art artista que va a ser añadido al genero
     */
    addArtista(art:Artista):void{
        for(let i:number = 0; i <= this.artistas.length;i++){
            if(this.artistas[i] == art.getNombre()){
                console.log("este artista ya esta añadido a la lista del genero")
                return
            }
        }
        for(let i = 0; i <= art.getGeneros().length; i++){
            if(this.getName() == art.getGeneros()[i].getName()){
                this.artistas.push(art.getNombre())
                return
            }
        }
        console.log("el artista no fue añadido porque no pertenecia a este genero")
    }

    /**
     * metodo que añade un grupo al array de grupos del genero
     * @param gru grupo que va a ser añadido
     */
    addGrupo(gru:Grupo):void{
        for(let i:number = 0; i <= this.grupos.length;i++){
            if(this.grupos[i] == gru.getNombre()){
                console.log("este grupo ya esta añadido a la lista del genero")
                return
            }
        }
        for(let i = 0; i <= gru.getGeneros().length; i++){
            if(this.getName() == gru.getGeneros()[i].getName()){
                this.grupos.push(gru.getNombre())
                return
            }
        }
        console.log("el grupo no fue añadido porque no pertenecia a este genero")

    }
    
    /**
     * metodo que añade un album a la lista del genero
     * @param alb el album que se va a añadir
     */
    addAlbum(alb:Album):void{
        for(let i:number = 0; i <= this.albumes.length;i++){
            if(this.albumes[i] == alb.getName()){
                console.log("este album ya esta añadido a la lista del genero")
                return
            }
        }
        for(let i:number = 0; i <= alb.getGenre().length;i++){
            if(this.genreName == alb.getGenre()[i].getName()){
                this.albumes.push(alb.getName())
                return
            }
        }
        console.log("el album no fue añadido porque no pertenecia a este genero")
    }

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

    /**
     * metodo que borra del array de grupos un grupo
     * @param gru grupo que se quiere borrar
     */
    delGrupo(gru:string){
        for(let i:number = 0; i <= this.grupos.length;i++){
            if(this.grupos[i] == gru){
                this.grupos.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar el grupo porque no pertenece al genero")
    }

    /**
     * metodo que borra del array de artistas un artista
     * @param art artista que se quiere borrar
     */
    delArt(art:string){
        for(let i:number = 0; i <= this.artistas.length;i++){
            if(this.artistas[i] == art){
                this.artistas.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar el artista porque no pertenece al genero")
    }

    /**
     * metodo que borra del array de canciones una cancion
     * @param can cancion que se quiere borrar
     */
    delCanc(can:Cancion){
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getName() == can.getName()){
                this.canciones.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar la cancion porque no pertenece al genero")
    }

    /**
     * metodo que borra del array del albumes un album
     * @param alb album que se quiere borrar
     */
    delAlbum(alb:string){
        for(let i:number = 0; i <= this.albumes.length;i++){
            if(this.albumes[i] == alb){
                this.albumes.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar el grupo porque no pertenece al genero")
    }
}
