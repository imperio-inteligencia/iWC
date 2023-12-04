import * as f from '@standard/f'
import { paint } from '@standard/h'
import component from './component'
import Property from './property'

@paint(component)
class Card {
  #data = {}

  get situation () {
    return (this.#data.properties[0]?.situation ?? '')
  }

  get quantity () {
    return String(f.sum(...this.#data.properties))
  }

  get properties () {
    return (this.#data.properties ?? [])
  }

  constructor (properties) {
    Object.assign(this.#data, { properties })
  }

  static create (data, _stats) {
    data = f.from(data)
      .pipe(f.group(f.__, d => d.situacaoId))
      .pipe(f.values(f.__))
      .pipe(f.map(f.__, Property.create))
      .done()

    return data.map((data) => new Card(data))
  }

  static is (_data, _stats) {
    return f.T
  }
}

export default Card
