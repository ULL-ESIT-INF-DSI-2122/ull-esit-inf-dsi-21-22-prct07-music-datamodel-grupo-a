import 'mocha';
import {expect} from 'chai';
import {GeneroMusical} from '../src/GeneroMusical'; 
//import {} from '../src//';

describe('ej-PE103 class tests', () => {
    let rap:GeneroMusical = new GeneroMusical("Rap",[],[],[])
    it('A music genre is created', () => {
        expect().to.not.equal(null);
    });
    
});