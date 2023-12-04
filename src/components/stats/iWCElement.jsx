import { Style } from '@standard/css'
import define from '@standard/define'
import h, { Fragment, render } from '@standard/h'

@define('iwc-stats')
class IWCElement extends HTMLElement {
  #props = {}
  #stats

  static get observedAttributes () {
    return []
  }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  attributeChangedCallback (key, _, value) {
    Reflect.set(this.#props, key, value)
    return this
  }

  async connectedCallback () {
    const { default: Stats } = await import('./stats' /* webpackChunkName: "iwc-stats" */)
    this.#stats = Stats.create(this.#props, this)
    render(
      this.shadowRoot,
      <>
        <Style />
        {this.#stats}
      </>
    )
    return this
  }
}

export default IWCElement
