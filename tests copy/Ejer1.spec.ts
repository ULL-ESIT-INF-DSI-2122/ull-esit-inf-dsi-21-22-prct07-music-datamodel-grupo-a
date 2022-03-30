import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-01/Pokemon';
import {DC} from '../src/ejercicio-01/DC';
import {StarWars} from '../src/ejercicio-01/StarWars';
import {Combact} from '../src/ejercicio-01/Combact';

let pokemon1 = new Pokemon("Charmander", 50, 25, "fuego", 52, 43, 200, 60);
let batman = new DC("Bathman", 90, 1.80, 100, 30, 200, 70);
let combate = new Combact(pokemon1, batman);

describe('Ejercisio 1', () => {
    describe('Clase Pokemon', () => {
        it('new Pokemon("Charmander", 50, 25, "fuego", 52, 43, 200, 60).gritoDeAtaque() = Pokemon Charmander lanzando ataque!!', () => {
            expect((new Pokemon("Charmander", 50, 25, "fuego", 52, 43, 200, 60)).gritoDeAtaque()).to.be.equal("Pokemon Charmander lanzando ataque!!");
        });
        
    });

    describe('Clase DC', () => {
        it('new DC("Batman", 90, 180, 100, 50, 500, 20).gritoDeAtaque() = Yo Batman te lanzo un SUPER ataque!!', () => {
            expect((new DC("Batman", 90, 180, 100, 50, 500, 20)).gritoDeAtaque()).to.be.equal("Yo Batman te lanzo un SUPER ataque!!");
        });
        
    });

    describe('Clase StarWars', () => {
        it('new StarWars("Oviwan", 75, 1.70, 200, 200, 100, 400).gritoDeAtaque() = Que la fuerza me acompañe para este ataqueee', () => {
            expect((new StarWars("Oviwan", 75, 1.70, 200, 200, 100, 400)).gritoDeAtaque()).to.be.equal("Que la fuerza me acompañe para este ataqueee");
        });
        
    });

    describe('Clase Combact', () => {
        it('Ataque charmander a batman', () => {
            expect(combate.ataque(pokemon1, batman)).to.be.equal(173.333333333333334);
        });
        
    });

    
});
