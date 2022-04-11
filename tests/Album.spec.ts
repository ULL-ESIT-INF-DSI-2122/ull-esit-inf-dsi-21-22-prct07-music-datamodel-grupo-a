import 'mocha';
import {expect} from 'chai';
import {GeneroMusical} from '../src/clases/GeneroMusical'; 
import {Album} from '../src/clases/Album';
import { Cancion } from '../src/clases/Cancion';
import { Artista } from '../src/clases/Artista';
import { Grupo } from '../src/clases/Grupo';
//import {} from '../src//';

describe('ej-PE103 class tests', () => {
    let genero1:GeneroMusical = new GeneroMusical("genero1",[],[],[],[])
    let genero2:GeneroMusical = new GeneroMusical("genero2",[],[],[],[])
    let artista1:Artista
    let artista2:Artista
    let grupo1:Grupo
    let cancion1:Cancion = new Cancion("cancion1","autor1",[2,30],[genero1],false,1400)
    let cancion2:Cancion = new Cancion("cancion2","autor2",[2,30],[genero2],false,1400)
    let album1:Album = new Album("album1",artista1,2019,[genero1],[cancion1])
    let album2:Album = new Album("album2",grupo1,2013,[genero2],[cancion2])
    
    it('the music genres are created', () => {
        expect(album1).to.not.equal(null);
        expect(album2).to.not.equal(null);
    });

    it('the music genres are created', () => {
        expect(album1.getName()).to.be.equal("album1");
        expect(album2.getName()).to.be.equal("album2");
    });
    
    it('the music genres are created', () => {
        expect(album1.getYear()).to.be.equal(2019);
        expect(album2.getYear()).to.be.equal(2013);
    });

    it('the music genres are created', () => {
        expect(album1.getAutor()).to.be.equal(artista1);
        expect(album2.getAutor()).to.be.equal(grupo1);
    });

    it('the music genres are created', () => {
        expect(album1.getCancion()).to.be.equal([]);
        expect(album2.getCancion()).to.be.equal([]);
    });

    it('the music genres are created', () => {
        expect(album1.getGenre()).to.be.equal([]);
        expect(album2.getGenre()).to.be.equal([]);
    });
    
});