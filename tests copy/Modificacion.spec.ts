import 'mocha';
import {expect} from 'chai';
import {Complex} from '../src/modificacion/Complex';

let a:Complex = new Complex(2,3);

describe('Modificacion', () => {
    describe('Se debe poder acceder a sus valores', () => {
        it('a.getA = 2', () => {
            expect(a.getA()).to.be.equal(2);
        });
        it('a.getB = 3', () => {
            expect(a.getB()).to.be.equal(3);
        });
    });
});