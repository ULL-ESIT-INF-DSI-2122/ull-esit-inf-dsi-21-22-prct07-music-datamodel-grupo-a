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
    Quit = "Salir"
}
function promptPlGru():void{
    let playlist: Playlist[] = []
    console.clear()
    var inquirer = require('inquirer')
    inquirer.prompt({type: "input", name: "grupo", message:"Nombre del grupo"})
        .then(answers => {
            playlist = libreria.BuscarPlaylistPorArtista(answers)
            inquirer.prompt({   type: "list",
                            name: "orden", 
                            message: "¿Como quieres ordenar la Playlist?",
                            choices:[
                            {name:"Alfabetico", value:"a"},
                            {name:"Genero", value:"g"},
                            {name:"Reproducciones", value: "r"}
                            ],
                        })
                        .then(answers => {switch(answers){
                                case "a":
                                 inquirer.prompt({type:})   
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
        case Commands.addElemento:
            promptAdd();
            promptUser();
            break;
        case Commands.rmElemento:
            promptRm();
            promptUser();
            break;
        case Commands.modifyElemento:
            promptMd();
            promptUser();
            break;
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
        default:
            break;
    }
}