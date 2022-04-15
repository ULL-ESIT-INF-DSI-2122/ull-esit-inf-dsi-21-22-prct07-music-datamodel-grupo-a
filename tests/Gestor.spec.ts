import 'mocha';
import {expect} from 'chai';
import {Gestor} from '../src/Gestor';
import {GeneroMusical} from '../src/clases/GeneroMusical'; 
import { Cancion } from '../src/clases/Cancion';


describe('ej-PE103 class tests', () => {
    let rap:GeneroMusical = new GeneroMusical("Rap",[],[],[],[])
    let pop:GeneroMusical = new GeneroMusical("Pop",[],[],[],[])
    let cancion1:Cancion = new Cancion("cancion1","autor1",[2,30],[rap],false,1400)
    let cancion2:Cancion = new Cancion("cancion2","autor2",[2,30],[pop],false,1400)
    let gestor1:Gestor
    
    it('the music genres are created', () => {
        expect(gestor1).to.not.equal(null)
    });
});