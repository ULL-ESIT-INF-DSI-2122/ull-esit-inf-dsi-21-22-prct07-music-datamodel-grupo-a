import 'mocha';
import {expect} from 'chai';
import {GeneroMusical} from '../src/clases/GeneroMusical'; 
import {Album} from '../src/clases/Album';
//import {} from '../src//';

describe('ej-PE103 class tests', () => {
    //let artista1:Artista
    //let artista2:Artista
    //let grupo1:Grupo
    //let grupo2:Grupo
    //let cancion1:Cancion
    //let cancion2:Cancion
    let album1:Album
    let album2:Album
    let genero1:GeneroMusical = new GeneroMusical("genero1",[],[],[],[])
    let genero2:GeneroMusical = new GeneroMusical("genero2",[],[],[],[])
    
    it('the music genres are created', () => {
        expect(album1).to.not.equal(null);
        expect(album2).to.not.equal(null);
    });

    it('the music genres are created', () => {
        expect(rap.getName).to.be.equal("Rap");
        expect(pop.getName).to.be.equal("Pop");
    });
    
    it('the music genres are created', () => {
        expect(rap.getArtistas).to.be.equal([]);
        expect(pop.getArtistas).to.be.equal([]);
    });

    it('the music genres are created', () => {
        expect(rap.getGrupos).to.be.equal([]);
        expect(pop.getGrupos).to.be.equal([]);
    });

    it('the music genres are created', () => {
        expect(rap.getCanciones).to.be.equal([]);
        expect(pop.getCanciones).to.be.equal([]);
    });

    it('the music genres are created', () => {
        expect(rap.getAlbumes).to.be.equal([]);
        expect(pop.getAlbumes).to.be.equal([]);
    });
    
});