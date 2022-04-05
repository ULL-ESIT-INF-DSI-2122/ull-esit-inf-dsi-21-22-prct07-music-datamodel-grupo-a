import 'mocha';
import {expect} from 'chai';
import {Artista} from '../src/Artista';
import {Grupo} from '../src/Grupo';
import {Playlist} from '../src/Playlist';



//let album1 = new Artista("Nevermind", "Nirvana", "24/08/1991", ["Rock"], ["Lithium", "Breed"]);
let nirvana = new Grupo("Nirvana", ["Kurt Cobain"], "1986", ["Rock"], ["a", "b"], 1000);
let playlist1 = new Playlist("Pop", ["a", "b"], 6, ["Pop"]);

describe('Desarrollo 2', () => {
   /* describe('Clase Album', () => {
        it('getter del nombre', () => {
            expect(album1.getNombre()).to.be.equal("Nevermind");
        });
        it('getter del grupo', () => {
            expect(album1.getGrupo()).to.be.equal("Nirvana");
        });
        it('getter de la fecha', () => {
            expect(album1.getAño()).to.be.equal("24/08/1991");
        });
       
    });
*/
    describe('Clase Grupos', () => {
        it('getter del nombre', () => {
            expect(nirvana.getNombre()).to.be.equal("Nirvana");
        });
        it('getter de la fecha', () => {
            expect(nirvana.getAño()).to.be.equal("1986");
        });
        it('getter de los oyentes', () => {
            expect(nirvana.getOyentes()).to.be.equal(1000);
        });
       
    });

    describe('Clase Playlist', () => {
        it('getter del nombre', () => {
            expect(playlist1.getNombre()).to.be.equal("Pop");
        });
        it('getter de la duracion', () => {
            expect(playlist1.getDuracion()).to.be.equal(6);
        });
    });

    
});