import { Album } from './Album';
import { Cancion } from './Cancion';
import { GeneroMusical } from './GeneroMusical';
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
     * @param albumes albumes en los que ha participado
     * @param canciones array que contiene las canciones del artista
     * @param oyentes numero de oyentes del artista
     */
    constructor(private nombre:string, private grupos:Grupo[], private generos:GeneroMusical[], private albumes:string[], private canciones:Cancion[], private oyentes:number){

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
    getGeneros():GeneroMusical[]{
        return this.generos;
    }

     /**
     * Getter del año
     * @return retorna el año en que se lanzó el album
     */
    getAlbumes():string[]{
        return this.albumes;
    }

    /**
     * Getter de las canciones
     * @return retorna las canciones del album
     */
    getCanciones():Cancion[]{
        return this.canciones;
    }

    /**
     * getter de los oyentes
     * @returns los oyentes del artista
     */
    getOyentes():number{
        return this.oyentes
    }

    /**
     * setter del nombre
     * @param nam nuevo nombre del artista
     */
    setNombre(nam:string){
        this.nombre = nam
    }

    /**
     * metodo que añade un grupo al array de grupos
     * @param gru grupo nuevo que se va a añadir
     */
    addGrupo(gru:Grupo){
        for(let i:number = 0; i <= this.grupos.length; i++){
            if(this.grupos[i].getNombre() == gru.getNombre()){
                console.log("El artista ya pertenece al grupo")
                return
            }
        }
        this.grupos.push(gru)
    }

    /**
     * metodo que añade un genero musical al array de generos
     * @param gen genero que se va a añadir
     */
    addGen(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                console.log("El artista ya pertenece al genero")
                return
            }
        }
        this.generos.push(gen)
    }

    /**
     * metodo que añade un album al array de albumes
     * @param alb album que se va a añadir
     */
    addAlbum(alb:string){
        for(let i:number = 0; i <= this.albumes.length; i++){
            if(this.albumes[i] == alb){
                console.log("El album ya esta añadido al artista")
                return
            }
        }
        this.albumes.push(alb)
    }

    /**
     * metodo que añade una cancion al array de canciones
     * @param can cancion que se va a añadir
     */
    addCanc(can:Cancion){
        for(let i:number = 0; i <= this.canciones.length; i++){
            if(this.generos[i].getName() == can.getName()){
                console.log("La cancion ya esta añadida al artista")
                return
            }
        }
        this.canciones.push(can)
    }

    /**
     * metodo que borra un grupo del array de grupos
     * @param gru grupo que se va a borrar
     */
    delGrupo(gru:Grupo){
        for(let i:number = 0; i <= this.grupos.length;i++){
            if(this.grupos[i].getNombre() == gru.getNombre()){
                this.grupos.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar el grupo porque no pertenece al artista")
    }

    /**
     * metodo que borra un genero musical del array de generos
     * @param gen genero musical que se va a borrar
     */
    delGen(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                this.generos.splice(i,1)
                return
            }
        }
        console.log("El genero no pertenece al artista")
    }

    /**
     * metodo que borra una cancion del array de canciones
     * @param can cancion que se va a borrar
     */
    delCanc(can:Cancion){
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getName() == can.getName()){
                this.canciones.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar la cancion porque no pertenece al artista")
    }

    /**
     * metodo que borra un album del array de albumes
     * @param alb album que se va a borrar
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
