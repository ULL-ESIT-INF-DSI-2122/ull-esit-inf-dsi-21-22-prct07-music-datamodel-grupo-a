import * as inquirer from 'inquirer';
import { Album } from "./clases/Album";
import { Artista } from "./clases/Artista";
import { Cancion } from "./clases/Cancion";
import { GeneroMusical } from "./clases/GeneroMusical";
import { Grupo } from "./clases/Grupo";
import { Libreria } from './clases/Libreria';
import { Playlist } from './clases/Playlist';

//Canciones
let PullingTeeth: Cancion = new Cancion("Pulling Teeth", "Cliff Burton", [4,39], ["Rock"], false, 3221852);

//Generos
let Rock:GeneroMusical = new GeneroMusical("Rock", ["JamesHetfield"], ["Metallica"], ["Kill Em All"], [PullingTeeth]);

//Grupos
let metallica:Grupo = new Grupo("Metallica", ["JamesHetfield"],1981,[Rock], ["KillEmAll"], 2500);

//Artistas
let JamesHetfield:Artista = new Artista("James Hetfield", [metallica], [Rock], ["KillEmAll"], [PullingTeeth], 1299);

//Albumes
let KillEmAll:Album = new Album("Kill Em All", metallica, 1983,[Rock], [PullingTeeth]);

//Playlist


//funciones
let libreria:Libreria = new Libreria([],[],[],[],[],[])

//Parte del menú
enum Commands {
    addElemento = "Añadir un género, canción, album, grupo u artista",
    rmElemento = "Eliminar un género, canción, album, grupo u artista",
    modifyElemento = "Modificar un género, canción, album, grupo u artista",
    imprimirCancionArtista = "Imprimir canciones pertenecientes a un artista",
    imprimirCancionGrupo = "Imprimir canciones pertenecientes a un grupo",
    imprimirAlbumArtista = "Imprimir Albumes pertenecientes a un artista",
    imprimirAlbumGrupo = "Imprimir Albumes pertenecientes a un grupo",
    imprimirPlaylistArtista = "Imprimir Playlist pertenecientes a un artista",
    imprimirPlaylistGrupo = "Imprimir Playlist pertenecientes a un grupo",
    Quit = "Salir"
}

enum Playlists {
    a = "Alfabetico",
    g = "Genero", 
    r = "Reproducciones" 
}

enum Albumes {
    a = "Alfabetico",
    g = "Genero",
    y = "Año de Lanzamiento"
}

enum Canciones {
    a = "Alfabetico",
    g = "Genero",
    r = "Reproducciones",
    s = "Single"
} 

function promptCaArt():void{
    let cancion: Cancion[] = []
    console.clear()
    var inquirer = require('inquirer')
    inquirer.prompt({type: "input", name: "artista", message:"Nombre del artista"})
        .then(answers => {
            cancion = libreria.BuscarCancionesdeAutor(answers["artista"])
            inquirer.prompt({type: "list",name: "orden", message: "¿Como quieres ordenar las canciones?",choices: Object.values(Canciones)})
                .then(answers => {switch(answers["orden"]){
                        case Canciones.a:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                                .then(answers =>{libreria.imprimirCancionesAlfabeticamente(cancion,answers["ascendente"])})
                            promptUser()
                        break
                        case Canciones.g:
                            inquirer.prompt({type:"input", name: "genero", message:"¿Genero para filtrar?"})
                                .then(answers => {libreria.imprimirCancionesPorGenero(cancion,answers["genero"])})
                            promptUser()
                        break
                        case Canciones.r:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                            .then(answers =>{libreria.imprimirCancionesPorReproducciones(cancion,answers["ascendente"])})
                        promptUser()
                        break
                        case Canciones.s:
                            libreria.imprimirSingles(cancion)
                        promptUser()
                        break
                    }
                })
        })
    promptUser()
}

function promptCaGru():void{
    let cancion: Cancion[] = []
    console.clear()
    var inquirer = require('inquirer')
    inquirer.prompt({type: "input", name: "grupo", message:"Nombre del grupo"})
        .then(answers => {
            cancion = libreria.BuscarCancionesdeAutor(answers["grupo"])
            inquirer.prompt({type: "list",name: "orden", message: "¿Como quieres ordenar las canciones?",choices: Object.values(Canciones)})
                .then(answers => {switch(answers["orden"]){
                        case Canciones.a:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                                .then(answers =>{libreria.imprimirCancionesAlfabeticamente(cancion,answers["ascendente"])})
                            promptUser()
                        break
                        case Canciones.g:
                            inquirer.prompt({type:"input", name: "genero", message:"¿Genero para filtrar?"})
                                .then(answers => {libreria.imprimirCancionesPorGenero(cancion,answers["genero"])})
                            promptUser()
                        break
                        case Canciones.r:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                            .then(answers =>{libreria.imprimirCancionesPorReproducciones(cancion,answers["ascendente"])})
                        promptUser()
                        break
                        case Canciones.s:
                            libreria.imprimirSingles(cancion)
                        promptUser()
                        break
                    }
                })
        })
    promptUser()
}

function promptAlArt():void{
    let album: Album[] = []
    console.clear()
    var inquirer = require('inquirer')
    inquirer.prompt({type: "input", name: "artista", message:"Nombre del artista"})
        .then(answers => {
            album = libreria.BuscarAlbumesPorArtista(answers["artista"])
            inquirer.prompt({type: "list",name: "orden", message: "¿Como quieres ordenar el album?",choices: Object.values(Albumes)})
                .then(answers => {switch(answers["orden"]){
                        case Albumes.a:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                                .then(answers =>{libreria.imprimirAlbumesAlfabeticamente(album,answers["ascendente"])})
                            promptUser()
                        break
                        case Albumes.g:
                            inquirer.prompt({type:"input", name: "genero", message:"¿Genero para filtrar?"})
                                .then(answers => {libreria.imprimirAlbumesPorGenero(album,answers["genero"])})
                            promptUser()
                        break
                        case Albumes.y:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                            .then(answers =>{libreria.imprimirAlbumesPorAño(album,answers["ascendente"])})
                        promptUser()
                    break
                    }
                })
        })
    promptUser()
}

function promptAlGru():void{
    let album: Album[] = []
    console.clear()
    var inquirer = require('inquirer')
    inquirer.prompt({type: "input", name: "grupo", message:"Nombre del grupo"})
        .then(answers => {
            album = libreria.BuscarAlbumesPorArtista(answers["grupo"])
            inquirer.prompt({type: "list",name: "orden", message: "¿Como quieres ordenar el album?",choices: Object.values(Albumes)})
                .then(answers => {switch(answers["orden"]){
                        case Albumes.a:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                                .then(answers =>{libreria.imprimirAlbumesAlfabeticamente(album,answers["ascendente"])})
                            promptUser()
                        break
                        case Albumes.g:
                            inquirer.prompt({type:"input", name: "genero", message:"¿Genero para filtrar?"})
                                .then(answers => {libreria.imprimirAlbumesPorGenero(album,answers["genero"])})
                            promptUser()
                        break
                        case Albumes.y:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                            .then(answers =>{libreria.imprimirAlbumesPorAño(album,answers["ascendente"])})
                        promptUser()
                    break
                    }
                })
        })
    promptUser()
}

function promptPlArt():void{
    let playlist: Playlist[] = []
    console.clear()
    var inquirer = require('inquirer')
    inquirer.prompt({type: "input", name: "artista", message:"Nombre del artista"})
        .then(answers => {
            playlist = libreria.BuscarPlaylistPorArtista(answers["artista"])
            inquirer.prompt({type: "list",name: "orden", message: "¿Como quieres ordenar la Playlist?",choices: Object.values(Playlists)})
                .then(answers => {switch(answers["orden"]){
                        case Playlists.a:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                                .then(answers =>{libreria.imprimirPlaylistAlfabeticamente(playlist,answers["ascendente"])})
                            promptUser()
                        break
                        case Playlists.g:
                            inquirer.prompt({type:"input", name: "genero", message:"¿Genero para filtrar?"})
                                .then(answers => {libreria.imprimirPlaylistPorGenero(playlist,answers["genero"])})
                            promptUser()
                        break
                        case Playlists.r:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                                .then(answers =>{libreria.imprimirPlaylistPorReproducciones(playlist,answers["ascendente"])})
                        promptUser()
                    break
                    }
                })
        })
    promptUser()
}

function promptPlGru():void{
    let playlist: Playlist[] = []
    console.clear()
    var inquirer = require('inquirer')
    inquirer.prompt({type: "input", name: "grupo", message:"Nombre del grupo"})
        .then(answers => {
            playlist = libreria.BuscarPlaylistPorArtista(answers["grupo"])
            inquirer.prompt({type: "list",name: "orden", message: "¿Como quieres ordenar la Playlist?",choices: Object.values(Playlists)})
                .then(answers => {switch(answers["orden"]){
                        case Playlists.a:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                                .then(answers =>{libreria.imprimirPlaylistAlfabeticamente(playlist,answers["ascendente"])})
                            promptUser()
                        break
                        case Playlists.g:
                            inquirer.prompt({type:"input", name: "genero", message:"¿Genero para filtrar?"})
                                .then(answers => {libreria.imprimirPlaylistPorGenero(playlist,answers["genero"])})
                            promptUser()
                        break
                        case Playlists.r:
                            inquirer.prompt({type:"confirm", name:"ascendente", message:"¿En orden ascendente o descendente?", default:"true"})
                            .then(answers =>{libreria.imprimirPlaylistPorReproducciones(playlist,answers["ascendente"])})
                        promptUser()
                    break
                    }
                })
        })
    promptUser()
}


async function promptUser() {
    console.clear();

    const answers = await inquirer.prompt({
        type: "list",
        name: "comand",
        message: "Elige una opción", 
        choises: Object.values(Commands)
    });

    switch (answers["comand"]) {
        // case Commands.addElemento:
        //     promptAdd();
        //     promptUser();
        //     break;
        // case Commands.rmElemento:
        //     promptRm();
        //     promptUser();
        //     break;
        // case Commands.modifyElemento:
        //     promptMd();
        //     promptUser();
        //     break;
        case Commands.imprimirCancionArtista:
            promptCaArt();
            promptUser();
            break;
        case Commands.imprimirCancionGrupo:
            promptCaGru();
            promptUser();
            break;
        case Commands.imprimirAlbumArtista:
            promptAlArt();
            promptUser();
            break;
        case Commands.imprimirAlbumGrupo:
            promptAlGru();
            promptUser();
            break; 
        case Commands.imprimirAlbumGrupo:
            promptPlArt();
            promptUser();
        break;
        case Commands.imprimirAlbumGrupo:
            promptPlGru();
            promptUser();
        break;
        default:
            break;
    }
}