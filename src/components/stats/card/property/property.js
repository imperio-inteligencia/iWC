import { paint } from '@standard/h'
import component from './component'
import magic from '@standard/magic'

@paint(component)
class Property {
  #data = {}

  get color () {
    return (this.#data.cor ?? 'var(--color-pure-white)')
  }

  get description () {
    return (this.#data.descricaoPrioridade ?? '')
  }

  get id () {
    return (this.#data.prioridadeId ?? 0)
  }

  get quantity () {
    return (this.#data.quantidadePrioridade ?? 0)
  }

  get situation () {
    return (this.#data.descricaoSituacao)
  }

  constructor (data) {
    Object.assign(this.#data, data)
  }

  [magic.sum] () {
    return this.quantity
  }

  static create (data) {
    return data.map(data => new Property(data))
  }
}

export default Property
