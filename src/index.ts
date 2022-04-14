import { Album } from "./clases/Album";
import { Artista } from "./clases/Artista";
import { Cancion } from "./clases/Cancion";
import { GeneroMusical } from "./clases/GeneroMusical";
import { Grupo } from "./clases/Grupo";
import inquirer from "inquirer";

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


//Parte del menú
enum Comands {
    addElemento = "Añadir un género, canción, album, grupo u artista",
    rmElemento = "Eliminar un género, canción, album, grupo u artista",
    modifyElemento = "Modificar un género, canción, album, grupo u artista",
     
    Quit = "Salir"
}