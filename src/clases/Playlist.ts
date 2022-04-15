import { Cancion } from "./Cancion";
import { GeneroMusical } from "./GeneroMusical";

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
    constructor(private nombre:string, private canciones:Cancion[], private duracion:number[], private generos:GeneroMusical[]){
        this.duracion.push(0)
        this.duracion.push(0)
        let seg:number 
        for(let i:number = 0; i <= this.canciones.length; i++){
            seg += this.canciones[i].getDuration()[1]
            this.duracion[1] += this.canciones[i].getDuration()[0]
            if(seg >= 60){
                seg -= 60
                this.duracion[1]++
            }
            if(this.duracion[1] >= 60){
                this.duracion[1] -= 60
                this.duracion[0]++
            }

        }
        while(this.duracion[1] >= 60){
            this.duracion[1] -= 60
            this.duracion[0]++
        }
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
    getCanciones():Cancion[]{
        return this.canciones;
    }

    /**
     * Getter de la duracion
     * @return retorna la duracion de la playlist
     */
    getDuracion():number[]{
        return this.duracion;
    }

    /**
     * Getter de los generos
     * @return retorna los generos musicales que contiene la playlist
     */
    getGeneros():GeneroMusical[]{
        return this.generos;
    }

    /**
     * setter del nombre
     * @param name nombre nuevo de la playlist
     */
    setName(name:string){
        this.nombre = name
    }

    /**
     * 
     * @param can 
     */
    addCancion(can:Cancion){
        for(let i:number = 0; i <= this.canciones.length; i++){
            if(this.generos[i].getName() == can.getName()){
                console.log("La cancion ya esta añadida al artista")
                return
            }
        }
        this.canciones.push(can)
    }

    /**
     * 
     * @param gen 
     */
    addGenero(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                console.log("El artista ya pertenece al genero")
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
        console.log("El genero no pertenece al artista")
    }

    /**
     * 
     * @param can 
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
}