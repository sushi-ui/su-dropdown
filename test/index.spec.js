/* global describe, it, before */
require('mocha-jsdom')()
import chai from 'chai'
import SuDropdown from '../src/index.js'

export default class __MOCK_POPPER__ {
  constructor() {
    return {
      destroy: () => {},
      scheduleUpdate: () => {}
    }
  }
}

chai.expect()

const expect = chai.expect

let lib = null
let el = null
let trigger = null
let content = null

describe('Given an instance of dropdown', () => {
  before(() => {
    el = document.createElement('div')
    trigger = document.createElement('button')
    content = document.createElement('div')
    el.classList.add('.su-Dropdown')
    content.classList.add('su-Dropdown-content')

    el.appendChild(trigger)
    el.appendChild(content)
    lib = new SuDropdown(el, { __MOCK_POPPER__ })
  })

  describe('node element', () => {
    it('is created', () => {
      expect(el.nodeName).eql('DIV')
    })

    it('has class', () => {
      expect(el.className).eql('.su-Dropdown')
    })
  })

  describe('trigger element', () => {
    it('is first child of node', () => {
      expect(trigger.parentNode.children[0]).eql(trigger)
    })
  })

  describe('content element', () => {
    it('is second child of node', () => {
      expect(content.parentNode.children[1]).eql(content)
    })
  })

  describe('when I need the component name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('su-Dropdown')
    })
  })
})
