import * as f from '@standard/f'
import { paint, repaint } from '@standard/h'
import component from './component'
import magic from '@standard/magic'
import result from '@standard/result'
import storage from './storage'
import Card from './card'

@paint(component)
@storage
class Stats {
  #cards
  #props
  #target

  get cards () {
    return (this.#cards ??= [])
  }

  constructor (props, target) {
    this.#props = props
    this.#target = target
  }

  [result.Error] (_error) {
    this.#target.remove()
    return this
  }

  @repaint
  [result.Ok] (data) {
    this.#cards = f.cond(
      [Card.is, Card.create]
    )(data, this.#target)
    return this
  }

  [magic.post] () {
    return {}
  }

  static create () {
    return new Stats(...arguments)
  }
}

export default Stats
