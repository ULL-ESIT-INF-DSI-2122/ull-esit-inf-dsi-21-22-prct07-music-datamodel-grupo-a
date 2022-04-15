import { Album } from "./Album";
import { Artista } from "./Artista";
import { Cancion } from "./Cancion";
import { GeneroMusical } from "./GeneroMusical";
import { Grupo } from "./Grupo";
import { Playlist } from "./Playlist";

export class Libreria{
    constructor(private canciones:Cancion[], private artistas:Artista[], private albumes:Album[], private grupos:Grupo[], private generosMusicales:GeneroMusical[], private playlists:Playlist[]){}
    // Si asscendente es true es en orden ascendente, si no descendiente
    imprimirCancionesAlfabeticamente(ascendente:boolean){
        this.canciones.sort(function(a:Cancion,b:Cancion):number {
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
        console.table(this.canciones);
    }

    imprimirCancionesPorReproducciones(ascendente:boolean){
        this.canciones.sort(function(a:Cancion,b:Cancion):number {
            if(ascendente){
                return a.getRepro() - b.getRepro();
                
            }else{
                return b.getRepro() - a.getRepro();
                
            }
        });

        console.log("Las Canciones ordenadas por numero de reproducciones son:");
        console.table(this.canciones);
    }

    imprimirSingles(){
        let sol:Cancion[] = [];
        
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getSingle()){
                sol.push(this.canciones[i]);
            }
            
        }
        console.log("Las Canciones que son Singles son:");
        console.table(sol);
    }

    imprimirCancionesdeArtista(artista:string){
        let sol:Cancion[] = [];
        
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getAutor() == artista){
                sol.push(this.canciones[i]);
            }
            
        }
        console.log("Las Canciones del Artista " + artista + " son:");
        console.table(sol);
    }

    imprimirCancionesPorGenero(genero:string){
        let sol:Cancion[] = [];
        
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getGeneros().find(item => item === genero) != undefined ){
                sol.push(this.canciones[i]);
            }
            
        }
        console.log("Las Canciones del genero " + genero + " son:");
        console.table(sol);
    }
    
    imprimirAlbumesAlfabeticamente(ascendente:boolean){
        this.albumes.sort(function(a:Album,b:Album):number {
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

        console.log("Los Albumes ordenadas alfabeticamente son:");
        console.table(this.albumes);
    }

    imprimirAlbumesPorAño(ascendente:boolean){
        this.albumes.sort(function(a:Album,b:Album):number {
            if(ascendente){
                return a.getYear() - b.getYear();
            }else{
                return b.getYear() - a.getYear();
            }
        });

        console.log("Los Albumes ordenadas por año de lanzamiento son:");
        console.table(this.albumes);
    }

    iprimirAlbumesPorArtista(artista:string){
        let sol:Album[] = [];
        
        for(let i:number = 0; i <= this.albumes.length;i++){
            if(this.albumes[i].getAutor().getNombre() == artista){
                sol.push(this.albumes[i]);
            }
            
        }
        console.log("Las Canciones del Artista " + artista + " son:");
        console.table(sol);
    }

    imprimirAlbumesPorGenero(genero:GeneroMusical){
        let sol:Album[] = [];
        
        for(let i:number = 0; i <= this.albumes.length;i++){
            if(this.albumes[i].getGenre().find(item => item === genero) != undefined ){
                sol.push(this.albumes[i]);
            }
            
        }
        console.log("Los Albumes del genero " + genero + " son:");
        console.table(sol);
    }

    imprimirPlaylistAlfabeticamente(ascendente:boolean){
        this.playlists.sort(function(a:Playlist,b:Playlist):number {
            if(ascendente){
                if(a.getNombre() > b.getNombre()){
                    return 1;
                }
                if(a.getNombre() < b.getNombre()){
                    return -1;
                }
                return 0;
            }else{
                if(a.getNombre() < b.getNombre()){
                    return 1;
                }
                if(a.getNombre() > b.getNombre()){
                    return -1;
                }
                return 0;
            }
        });

        console.log("Las Playlist ordenadas alfabeticamente son:");
        console.table(this.playlists);
    }

    iprimirPlaylistPorArtista(artista:string){
        let sol:Playlist[] = [];
        
        for(let i:number = 0; i <= this.playlists.length;i++){
            if(this.playlists[i].getCanciones().find(item => item.getAutor() === artista) != undefined){
                sol.push(this.playlists[i]);
            }
            
        }
        console.log("Las Playlist del Artista " + artista + " son:");
        console.table(sol);
    }

    imprimirPlaylistPorGenero(genero:GeneroMusical){
        let sol:Playlist[] = [];
        
        for(let i:number = 0; i <= this.playlists.length;i++){
            if(this.playlists[i].getGeneros().find(item => item === genero) != undefined ){
                sol.push(this.playlists[i]);
            }
            
        }
        console.log("Las Playlist del genero " + genero + " son:");
        console.table(sol);
    }

    

    addCancion(cancion:Cancion){
        //Comprobar que la cancion no existe
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getName() == cancion.getName()){
                console.log("esta cancion ya esta añadida a la lista de canciones")
                return
            }
        }

        this.canciones.push(cancion);
    }

    addGenero(genero:GeneroMusical){
        //Comprobar que el genero no existe
        for(let i:number = 0; i <= this.generosMusicales.length;i++){
            if(this.generosMusicales[i].getName() == genero.getName()){
                console.log("este genero ya esta añadida a la lista del genero")
                return
            }
            
        }

        this.generosMusicales.push(genero);
    }

    addArtista(artista:Artista){
        //Comprobar que el genero no existe
        for(let i:number = 0; i <= this.artistas.length;i++){
            if(this.artistas[i].getNombre() == artista.getNombre()){
                console.log("este artista ya esta añadida a la lista de artista")
                return
            }
            
        }
        this.artistas.push(artista);
    }

    addAlbum(album:Album){
        //Comprobar que el Album no existe
        for(let i:number = 0; i <= this.albumes.length;i++){
            if(this.albumes[i].getName() == album.getName()){
                console.log("esta cancion ya esta añadida a la lista de canciones")
                return
            }
            
        }
        this.albumes.push(album);
    }

    addGrupo(grupo:Grupo){
        //Comprobar que el Grupo no existe
        for(let i:number = 0; i <= this.grupos.length;i++){
            if(this.grupos[i].getNombre() == grupo.getNombre()){
                console.log("esta cancion ya esta añadida a la lista de canciones")
                return
            }
            
        }
        this.grupos.push(grupo);
    }

    rmCancion(cancion:string){
        let sol:Cancion[] = [];
        
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getName() == cancion){
                
            }else{
                sol.push(this.canciones[i]);
            }
            
        }
        this.canciones = sol;
    }

    rmGenero(genero:string){
        let sol:GeneroMusical[] = [];
        
        for(let i:number = 0; i <= this.generosMusicales.length;i++){
            if(this.generosMusicales[i].getName() == genero){
                
            }else{
                sol.push(this.generosMusicales[i]);
            }
            
        }
        this.generosMusicales = sol;
    }

    rmArtista(artista:string){
        let sol:Artista[] = [];
        
        for(let i:number = 0; i <= this.artistas.length;i++){
            if(this.artistas[i].getNombre() == artista){
                
            }else{
                sol.push(this.artistas[i]);
            }
            
        }
        this.artistas = sol;
    }

    rmAlbum(album:string){
        let sol:Album[] = [];
        
        for(let i:number = 0; i <= this.albumes.length;i++){
            if(this.albumes[i].getName() == album){
                
            }else{
                sol.push(this.albumes[i]);
            }
            
        }
        this.albumes = sol;
    }

    rmGrupo(grupo:string){
        let sol:Grupo[] = [];
        
        for(let i:number = 0; i <= this.grupos.length;i++){
            if(this.grupos[i].getNombre() == grupo){
                
            }else{
                sol.push(this.grupos[i]);
            }
            
        }
        this.grupos = sol;
    }

    getCancion(cancion:string):Cancion|undefined{
        
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getName() == cancion){
                return this.canciones[i];
            }
        }
        return undefined;
    }

    getGenero(genero:string):GeneroMusical|undefined{
        
        for(let i:number = 0; i <= this.generosMusicales.length;i++){
            if(this.generosMusicales[i].getName() == genero){
                return this.generosMusicales[i];
            }
            
        }
        return undefined;
    }

    getArtista(artista:string):Artista|undefined{
        
        for(let i:number = 0; i <= this.artistas.length;i++){
            if(this.artistas[i].getNombre() == artista){
                return this.artistas[i];
            }
            
        }
        return undefined;
    }

    getAlbum(album:string):Album|undefined{
        
        for(let i:number = 0; i <= this.albumes.length;i++){
            if(this.albumes[i].getName() == album){
                return this.albumes[i]; 
            }
            
        }
        return undefined;
    }

    getGrupo(grupo:string):Grupo|undefined{

        for(let i:number = 0; i <= this.grupos.length;i++){
            if(this.grupos[i].getNombre() == grupo){
               return this.grupos[i]; 
            }
            
        }
        return undefined;
    }

    getPlaylists():Playlist[]{
        return this.playlists
    }

    getPlaylist(playlist:string):Playlist|undefined{
        for(let i:number = 0; i <= this.playlists.length; i++){
            if(this.playlists[i].getNombre() == playlist){
                return this.playlists[i]
            }
        }
        return undefined
    }
}