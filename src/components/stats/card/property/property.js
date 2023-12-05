import { paint } from '@standard/h'
import component from './component'
import magic from '@standard/magic'

@paint(component)
class Property {
  #data = {}
  #element

  get color () {
    return (this.#data.cor ?? 'var(--color-pure-white)')
  }

  get description () {
    return (this.#data.descricaoPrioridade ?? '')
  }

  get quantity () {
    return (this.#data.quantidadePrioridade ?? 0)
  }

  get situation () {
    return (this.#data.descricaoSituacao)
  }

  constructor (data, element) {
    Object.assign(this.#data, data)
    this.#element = element
  }

  select () {
    const detail = { ...this.#data }
    const event = new CustomEvent('select', { detail })
    this.#element.dispatchEvent(event)
    return this
  }

  [magic.sum] () {
    return this.quantity
  }

  static create (element) {
    return (data) => data.map(data => new Property(data, element))
  }
}

export default Property
