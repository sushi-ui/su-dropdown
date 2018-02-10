import './style.css'
import { defaults, Popper, throttle, observer, nextTick, clickOutside, clickInside } from './utils'

export default class SuDropdown {
  constructor(node, options = {}) {
    // Set intal state
    this.name = 'su-Dropdown'
    this.el = node
    this.popper = null
    this.elTrigger = null
    this.elContent = null
    this.clickInsideEvent = null
    this.clickOutsideEvent = null
    this._show = false
    this._toggleEvent = null

    // Bind events to context
    this.toggle = this.toggle.bind(this)
    this._transitionEnd = this._transitionEnd.bind(this)

    /**
     * Define prop to watch for updates
     * @param {String} Prop to watch
     * @param {String} Cb to run on updates
     * @param {Object} Context
     */
    observer('_show', '_render', this)

    /**
     * Set defaults
     * @param  {Object} Default props for options object
     * @param  {Object} Options object
     * @param {Object} Context
     */
    defaults(
      {
        offsetX: 0,
        offsetY: 0,
        padding: 16,
        boundaries: 'viewport',
        placement: 'bottom-start',
        closeOnClickInside: false,
        closeOnClickOutside: true,
        __MOCK_POPPER__: null
      },
      options,
      this
    )

    this._created()
  }

  toggle() {
    this._show = !this._show
  }

  show() {
    this._show = true
  }

  hide() {
    this._show = false
  }

  _created() {
    this.elTrigger = Array.from(this.el.children)[0]
    this.elContent = Array.from(this.el.children)[1]
    this._toggleEvent = throttle(this.toggle, 350)
    this.elTrigger.addEventListener('click', this._toggleEvent)
    this._createPopper()
  }

  _createPopper() {
    if (this.__MOCK_POPPER__) return (this.popper = new this.__MOCK_POPPER__())

    this.popper = new Popper(this.elTrigger, this.elContent, {
      removeOnDestroy: true,
      placement: this.placement,
      modifiers: {
        computeStyle: {
          gpuAcceleration: false
        },
        offset: {
          offset: `${this.offsetX}, ${this.offsetY}`
        },
        preventOverflow: {
          boundariesElement: this.boundaries,
          padding: this.padding
        }
      }
    })
  }

  _render() {
    if (this._show) {
      this._onShow()
      if (this.closeOnClickOutside) {
        this.clickOutsideEvent = clickOutside(this.el, () => (this._show = false))
      }
    } else {
      this._onHide()
      if (this.closeOnClickInside) {
        this.clickInsideEvent = clickInside(this.elContent, () => (this._show = false))
      }
    }
  }

  _transitionEnd() {
    this.elContent.style.display = null
    this.elContent.removeEventListener('transitionend', this._transitionEnd)
    const detail = this

    this.el.dispatchEvent(new CustomEvent('hide', { detail }))
  }

  _onHide() {
    this.elContent.addEventListener('transitionend', this._transitionEnd)
    this.elContent.classList.remove('is-visible')
  }

  _onShow() {
    this.popper.scheduleUpdate()
    this.elContent.style.display = 'block'
    this.elContent.offsetHeight // Force reflow
    nextTick(() => this.elContent.classList.add('is-visible'))
    const detail = this

    this.el.dispatchEvent(new CustomEvent('show', { detail }))
  }

  destroy() {
    window.removeEventListener('click', this.clickInsideEvent, true)
    window.removeEventListener('click', this.clickOutsideEvent, true)
    this.elTrigger.removeEventListener('click', this.toggle)
    this.popper.destroy()
  }
}
