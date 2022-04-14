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
    imprimirCancionArtista = "Imprimir canciones pertenecientes a un artista",
    imprimirCancionGrupo = "Imprimir canciones pertenecientes a un grupo",
    imprimirAlbumArtista = "Imprimir Albumes pertenecientes a un artista",
    imprimirAlbumGrupo = "Imprimir Albumes pertenecientes a un grupo",
    imprimirPlaylistArtista = "Imprimir Playlists pertenecientes a un artista",
    imprimirPlaylistGrupo = "Imprimir Playlists pertenecientes a un grupo",
    imprimirCancionAlfabeticamente = "Imprimir canciones alfabeticametne",
    imprimirAlbumAlfabeticamente = "Imprimir albumes alfabeticametne",
    imprimirPlaylistAlfabeticamente = "Imprimir canciones alfabeticametne",
    imprimirAlbumPorAño = "Imprimir album por año de lanzamiento",
    imprimirCancionesReproducciones = "Imprimir canciones por numerod e reproducciones",
    imprimirSingles = "Imprimir únicamente las canciones que son singles",
    Quit = "Salir"
}

async function promptUser() {
    console.clear();

    const answers = await inquirer.prompt({
        type: 'list',
        name: 'comand',
        message: 'Elige una opción', 
        choises: Object.values(Comands)
    });

    switch (answers["comand"]) {
        case Comands.addElemento:
            
            break;
        case Comands.rmElemento:
            
            break;
        case Comands.modifyElemento:
            
            break;
        case Comands.imprimirCancionArtista:
            
            break;
        case Comands.imprimirCancionGrupo:
            
            break;
        case Comands.imprimirAlbumArtista:
            
            break;
        case Comands.imprimirAlbumGrupo:
            
            break;
        case Comands.imprimirPlaylistArtista:
            
            break;
        case Comands.imprimirPlaylistGrupo:
            
            break;
        case Comands.imprimirCancionAlfabeticamente:
            
            break;
        case Comands.imprimirAlbumAlfabeticamente:
            
            break;
        case Comands.imprimirPlaylistAlfabeticamente:
            
            break;
        case Comands.imprimirAlbumPorAño:
            
            break;
        case Comands.imprimirCancionesReproducciones:
            
            break;  
        case Comands.imprimirSingles:
            
            break;   
        default:
            break;
    }
}