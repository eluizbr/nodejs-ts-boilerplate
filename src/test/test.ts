import { expect } from 'chai';

import calc from './calc';

describe('Main', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('should exsit the calc lib', () => {
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', () => {
      expect(calc.sum).to.exist;
    });
    it('should exist the method `sub`', () => {
      expect(calc.sub).to.exist;
    });
    it('should exist the method `mult`', () => {
      expect(calc.mult).to.exist;
    });
    it('should exist the method `div`', () => {
      expect(calc.div).to.exist;
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(calc.sum(2, 2)).to.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(calc.sub(6, 2)).to.equal(4);
    });
  });

  describe('Mult', () => {
    it('should return 9 when `mult(3,3)`', () => {
      expect(calc.mult(3, 3)).to.equal(9);
    });
  });

  describe('Div', () => {
    it('should return 5 when `div(10,2)`', () => {
      expect(calc.div(10, 2)).to.equal(5);
    });
  });
});
