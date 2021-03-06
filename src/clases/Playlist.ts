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
    constructor(private nombre:string, private canciones:Cancion[], private duracion:number[], private generos:GeneroMusical[], private creador:string){
        this.duracion.push(0)
        this.duracion.push(0)
        let seg:number = 0
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
     * 
     * @returns 
     */
    getCreador():string{
        return this.creador
    }

    getReproducciones():number{
        let result = 0
        this.canciones.forEach(cancion => {
            result += cancion.getRepro()
        });
        return result
    }
    /**
     * setter del nombre
     * @param name nombre nuevo de la playlist
     */
    setName(name:string){
        this.nombre = name
    }

    /**
     * metodo que añade una cancion al array de canciones(tambien modifica la duracion de la playlist)
     * @param can cancion que va a ser añadida
     */
    addCancion(can:Cancion){
        for(let i:number = 0; i <= this.canciones.length; i++){
            if(this.generos[i].getName() == can.getName()){
                console.log("La cancion ya esta añadida a la playlist")
                return
            }
        }
        this.canciones.push(can)
        let seg:number = 0
        seg += can.getDuration()[1]
        this.duracion[1] += can.getDuration()[0]
            if(seg >= 60){
                seg -= 60
                this.duracion[1]++
            }
            if(this.duracion[1] >= 60){
                this.duracion[1] -= 60
                this.duracion[0]++
            }
    }

    /**
     * metodo que añade un genero musical al array de generos
     * @param gen genero que va a ser añadido
     */
    addGenero(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                console.log("La playlist ya pertenece al genero")
                return
            }
        }
        this.generos.push(gen)
    }

    /**
     * metodo que borra un genero musical del array de generos
     * @param gen genero que va a ser borrado
     */
    delGen(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                this.generos.splice(i,1)
                return
            }
        }
        console.log("El genero no pertenece a la playlist")
    }

    /**
     * metodo que borra la cancion indicada del array de canciones(tambien modifica la duracion total de la playlist)
     * @param can cancion que se va a borrar
     */
    delCanc(can:Cancion){
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getName() == can.getName()){
                this.canciones.splice(i,1)
                this.duracion[1] -= can.getDuration()[0]
                if(this.duracion[1] < 0){
                    this.duracion[1] += 60
                    this.duracion[0] --
                }
                return
            }
        }
        console.log("No se puede borrar la cancion porque no pertenece a la playlist")
    }
}