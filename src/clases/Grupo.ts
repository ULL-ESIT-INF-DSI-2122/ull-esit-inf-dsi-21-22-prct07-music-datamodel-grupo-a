import { Album } from "./Album";
import { Artista } from "./Artista";
import { GeneroMusical } from "./GeneroMusical";

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
     * @param albumes array que contiene los albunes lanzados por el grupo
     * @param oyentes numero de oyentes mensuales que tiene el grupo
     */
    constructor(private nombre:string, private artistas:string[], private año:number, private generos:GeneroMusical[], private albumes:string[], private oyentes:number){

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
    getAño():number{
        return this.año;
    }

    /**
     * Getter de los generos
     * @return retorna los generos del grupo
     */
    getGeneros():GeneroMusical[]{
        return this.generos;
    }

    /**
     * Getter de los albumes
     * @return retorna los albumes lanzados por el grupo
     */
    getAlbumes():string[]{
        return this.albunes;
    }

    /**
     * Getter de los oyentes
     * @return retorna la cantidad de oyentes mensuales
     */
    getOyentes():number{
        return this.oyentes;
    }

    /**
     * setter del nombre
     * @param nam nuevo nombre del grupo
     */
    setNom(nom:string){
        this.nombre = nom
    }

    /**
     * setter del año de creacion del grupo
     * @param nam nuevo año de creacion
     */
    setAño(año:string){
        this.año = año
    }

    /**
     * 
     * @param art 
     */
    addArt(art:Artista){
        for(let i:number = 0; i <= this.artistas.length; i++){
            if(this.artistas[i].getNombre() == art.getNombre()){
                console.log("El artista ya perteneces al grupo")
                return
            }
        }
        this.artistas.push(art)
    }
    
    /**
     * 
     * @param art 
     */
    delArt(art:Artista){
        for(let i:number = 0; i <= this.artistas.length;i++){
            if(this.artistas[i].getNombre() == art.getNombre()){
                this.artistas.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar el artista porque no pertenece al grupo")
    }

    /**
     * 
     * @param gen 
     */
    addGen(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                console.log("El genero ya esta añadido al grupo")
                return
            }
        }
        this.generos.push(gen)
    }

    /**
     * 
     * @param gen 
     */
    delGen(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                this.generos.splice(i,1)
                return
            }
        }
        console.log("El genero no pertenece al grupo")
    }

    /**
     * 
     * @param alb 
     */
    addAlbum(alb:Album){
        for(let i:number = 0; i <= this.albumes.length; i++){
            if(this.albumes[i].getName() == alb.getName()){
                console.log("El album ya esta añadido al grupo")
                return
            }
        }
        this.albumes.push(alb)
    }

    /**
     * 
     * @param alb 
     */
    delAlbum(alb:Album){
        for(let i:number = 0; i <= this.albumes.length;i++){
            if(this.albumes[i].getName() == alb.getName()){
                this.albumes.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar el grupo porque no pertenece al genero")
    }

    /**
     * 
     * @param oye 
     */
    addOye(oye:number){
        this.oyentes += oye
    }

    /**
     * 
     * @param oye 
     */
    setOye(oye:number){
        this.oyentes = oye
    }
}