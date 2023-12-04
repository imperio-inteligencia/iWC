import * as f from '@standard/f'
import { paint } from '@standard/h'
import component from './component'
import pagination from './pagination'
import position from './position'
import Rect from './rect'
import resize from './resize'
import translateX from './translateX'

@paint(component)
@pagination
@resize
class Metro {
  #channel
  #rect
  #x

  get channel () {
    return this.#channel
  }

  get rect () {
    return (this.#rect ??= new Rect(this))
  }

  get x () {
    return (this.#x ?? 0)
  }

  constructor (props) {
    this.#channel = props.channel
  }

  @translateX
  @position
  moveForward () {
    this.#x = f
      .from(this.x)
      .pipe(f.sub(this.rect.width))
      .pipe(f.sub(f.negate(this.rect.deadZone)))
      .pipe(f.max(this.rect.limit))
      .done()
    return this
  }

  @translateX
  @position
  moveBack () {
    this.#x = f
      .from(this.x)
      .pipe(f.add(this.rect.width))
      .pipe(f.add(this.rect.deadZone))
      .pipe(f.min(0))
      .done()
    return this
  }

  @translateX
  @position
  rewind () {
    this.#x = 0
    return this
  }
}

export default Metro
