import { paint, repaint } from '@standard/h'
import component from './component'
import echo from '@standard/echo'
import metro from './metro'

@paint(component)
@metro
class Pagination {
  #channel
  #page

  get channel () {
    return this.#channel
  }

  get page () {
    return (this.#page ?? 'start')
  }

  constructor (props) {
    this.#channel = props.channel
  }

  @repaint
  changePage (page) {
    this.#page = page
    return this
  }

  next () {
    echo.emit(`next:${this.#channel}`)
    return this
  }

  prev () {
    echo.emit(`prev:${this.#channel}`)
    return this
  }
}

export default Pagination
