/* global describe, it, before */

import chai from 'chai';
import SuDropdown from '../lib/su-dropdown.js';
chai.use(require('chai-dom'));

const el = document.createElement('div');

el.classList.add('.su-Dropdown');

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of dropdown', () => {
  before(() => {
    lib = new SuDropdown(el);
  });
  describe('when I need the component name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('su-Dropdown');
    });
  });
});
