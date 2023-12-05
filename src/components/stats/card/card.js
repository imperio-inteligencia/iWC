import * as f from '@standard/f'
import { paint } from '@standard/h'
import component from './component'
import Property from './property'

@paint(component)
class Card {
  #data = {}

  get color () {
    return f.first(this.#data.properties).color
  }

  get quantity () {
    return String(f.sum(...this.#data.properties))
  }

  get properties () {
    return (this.#data.properties ?? [])
  }

  get situation () {
    return f.first(this.#data.properties).situation
  }

  constructor (properties) {
    Object.assign(this.#data, { properties })
  }

  static create (data, element) {
    data = f.from(data)
      .pipe(f.group(f.__, d => d.situacaoId))
      .pipe(f.values(f.__))
      .pipe(f.map(f.__, Property.create(element)))
      .done()

    return data.map((data) => new Card(data))
  }

  static is (_data, _element) {
    return f.T
  }
}

export default Card
