import 'mocha';
import {expect} from 'chai';
import {GeneroMusical} from '../src/clases/GeneroMusical'; 
import { Cancion } from '../src/clases/Cancion';
//import {} from '../src//';

describe('ej-PE103 class tests', () => {
    let genero1:GeneroMusical = new GeneroMusical("genero1",[],[],[],[])
    let genero2:GeneroMusical = new GeneroMusical("genero2",[],[],[],[])
    //let artista1:Artista
    //let artista2:Artista
    //let grupo1:Grupo
    //let grupo2:Grupo
    let cancion1:Cancion = new Cancion("cancion1","autor1",[2,30],[genero1],true,1400)
    let cancion2:Cancion = new Cancion("cancion2","autor2",[3,40],[genero2],true,1400)
    
    it('the music genres are created', () => {
        expect(cancion1).to.not.equal(null);
        expect(cancion2).to.not.equal(null);
    });

    it('the music genres are created', () => {
        expect(cancion1.getName()).to.be.equal("cancion1");
        expect(cancion2.getName()).to.be.equal("cancion2");
    });
    
    it('the music genres are created', () => {
        expect(cancion1.getAutor()).to.be.equal("autor1");
        expect(cancion2.getAutor()).to.be.equal("autor2");
    });

    it('the music genres are created', () => {
        expect(cancion1.getDuration()).to.be.equal([2,30]);
        expect(cancion2.getDuration()).to.be.equal([3,40]);
    });

    it('the music genres are created', () => {
        expect(cancion1.getGeneros()).to.be.equal([genero1]);
        expect(cancion2.getGeneros()).to.be.equal([genero2]);
    });

    it('the music genres are created', () => {
        expect(cancion1.getRepro()).to.be.equal(1400);
        expect(cancion2.getRepro()).to.be.equal(1400);
    });
    
    it('the music genres are created', () => {
        expect(cancion1.getSingle()).to.be.equal(true);
        expect(cancion2.getSingle()).to.be.equal(true);
    });
});