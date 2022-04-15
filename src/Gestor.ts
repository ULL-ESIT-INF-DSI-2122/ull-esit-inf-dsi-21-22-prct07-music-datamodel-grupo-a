import * as inquirer from 'inquirer'
import { Libreria } from './clases/Libreria';
import { Cancion } from './clases/Cancion';
import { Playlist } from './clases/Playlist';
export class Gestor{
    biblioteca:Libreria

    construct(bib:Libreria){
        this.biblioteca = bib 
    }

    showPlaylists():void{
        this.biblioteca.getPlaylists().forEach(playlist => {
            console.log(`[Playlist: nombre: ${playlist.getNombre()}, Generos musicales: ${playlist.getGeneros()}, Duracion: ${playlist.getDuracion()}]\n`)
        });
    }

    imprimirCancionesAlfabeticamente(play:string,ascendente:boolean = true){
        this.biblioteca.getPlaylist(play).getCanciones().sort(function(a:Cancion,b:Cancion):number {
            if(ascendente){
                if(a.getName() > b.getName()){
                    return 1;
                }
                if(a.getName() < b.getName()){
                    return -1;
                }
                return 0;
            }else{
                if(a.getName() < b.getName()){
                    return 1;
                }
                if(a.getName() > b.getName()){
                    return -1;
                }
                return 0;
            }
        
        });

        console.log("Las Canciones ordenadas alfabeticamente son:");
        console.table(this.biblioteca.getPlaylist(play));
    
    }

    imprimirAutorAlfabeticamente(play:string, ascendente:boolean = true){
        this.biblioteca.getPlaylist(play).getCanciones().sort(function(a:Cancion,b:Cancion):number {
            if(ascendente){
                if(a.getAutor() > b.getAutor()){
                    return 1;
                }
                if(a.getAutor() < b.getAutor()){
                    return -1;
                }
                return 0;
            }else{
                if(a.getAutor() < b.getAutor()){
                    return 1;
                }
                if(a.getAutor() > b.getAutor()){
                    return -1;
                }
                return 0;
            }
        
        });

        console.log("Las Canciones con los autores ordenados alfabeticamente son:");
        console.table(this.biblioteca.getPlaylist(play));
    }

    imprimirDuracion(play:string,ascendente:boolean = true){
        this.biblioteca.getPlaylist(play).getCanciones().sort(function(a:Cancion,b:Cancion):number {
            if(ascendente){
                let dur:number = a.getDuration()[0] - b.getDuration()[0]
                if(dur == 0){
                    dur = a.getDuration()[1] - b.getDuration()[1]
                }
                return dur
            }else{
                let dur:number = b.getDuration()[0] - a.getDuration()[0]
                if(dur == 0){
                    dur = b.getDuration()[1] - a.getDuration()[1]
                }
                return dur
            }
        
        });

        console.log("Las Canciones con las duraciones ordenadas son:");
        console.table(this.biblioteca.getPlaylist(play));
    }

    imprimirGenero(play:string,gen:string,ascendente:boolean = true){
        let sol:Cancion[] = [];
        
        for(let i:number = 0; i <= this.biblioteca.getPlaylist(play).getCanciones().length;i++){
            if(this.biblioteca.getPlaylist(play).getCanciones()[i].getGeneros().find(item => item === gen) != undefined ){
                sol.push(this.biblioteca.getPlaylist(play).getCanciones()[i]);
            }
            
        }

        if(ascendente){
            console.log("Las Canciones del genero " + gen + " son:");
            console.table(sol);
        }
        else{
            console.log("Las Canciones del genero " + gen + " son:");
            console.table(sol.reverse());
        }
    }

    imprimirRepTot(play:string,ascendente:boolean = true){
        this.biblioteca.getPlaylist(play).getCanciones().sort(function(a:Cancion,b:Cancion):number {
            if(ascendente){
                return a.getRepro() - b.getRepro();
                
            }else{
                return b.getRepro() - a.getRepro();
                
            }
        });

        console.log("Las Canciones ordenadas por numero de reproducciones son:");
        console.table(this.biblioteca.getPlaylist(play).getCanciones());
    }

    addPlaylist(play:Playlist = new Playlist("",[],[],[],""),crea?:string,nom?:string){    
        if(this.biblioteca.getPlaylist(play.getNombre()).getNombre() !== undefined){
            this.biblioteca.addPlaylist(new Playlist(nom,this.biblioteca.getPlaylist(play.getNombre()).getCanciones(),this.biblioteca.getPlaylist(play.getNombre()).getDuracion(),this.biblioteca.getPlaylist(play.getNombre()).getGeneros(),crea))
        }
        else{
            this.biblioteca.addPlaylist(play)
        }
    }

    removePlaylist(play:string,creador:string){
        if(this.biblioteca.getPlaylist(play).getCreador() == creador){
            this.biblioteca.rmPlaylist(play)
        }
        else{
            console.log("no puedes borrar esa playlist, no eres su creador")
        }
    }
    prompUser():void{}

} 