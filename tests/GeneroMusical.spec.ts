import 'mocha';
import {expect} from 'chai';
import {GeneroMusical} from '../src/clases/GeneroMusical'; 
import { Cancion } from '../src/clases/Cancion';
import { Album } from '../src/clases/Album';
//import {} from '../src//';

describe('ej-PE103 class tests', () => {
    let rap:GeneroMusical = new GeneroMusical("Rap",[],[],[],[])
    let pop:GeneroMusical = new GeneroMusical("Pop",[],[],[],[])
    //let artista1:Artista
    //let artista2:Artista
    //let grupo1:Grupo
    //let grupo2:Grupo
    let cancion1:Cancion = new Cancion("cancion1","autor1",[2,30],[rap],false,1400)
    let cancion2:Cancion = new Cancion("cancion2","autor2",[2,30],[pop],false,1400)
    let album1:Album = new Album("album1",artista1,2019,[rap],[])
    let album2:Album = new Album("album2",grupo1,2013,[pop],[])
    
    it('the music genres are created', () => {
        expect(rap).to.not.equal(null);
        expect(pop).to.not.equal(null);
    });

    it('the music genres are created', () => {
        expect(rap.getName()).to.be.equal("Rap");
        expect(pop.getName()).to.be.equal("Pop");
    });
    
    it('the music genres are created', () => {
        expect(rap.getArtistas()).to.be.equal([]);
        expect(pop.getArtistas()).to.be.equal([]);
    });

    it('the music genres are created', () => {
        expect(rap.getGrupos()).to.be.equal([]);
        expect(pop.getGrupos()).to.be.equal([]);
    });

    it('the music genres are created', () => {
        rap.addCancion(cancion1)
        pop.addCancion(cancion2)
        expect(rap.getCanciones()).to.be.equal([cancion1]);
        expect(pop.getCanciones()).to.be.equal([cancion2]);
    });

    it('the music genres are created', () => {
        rap.addAlbum(album1)
        pop.addAlbum(album2)
        expect(rap.getAlbumes()).to.be.equal([album1]);
        expect(pop.getAlbumes()).to.be.equal([album2]);
    });
    
});