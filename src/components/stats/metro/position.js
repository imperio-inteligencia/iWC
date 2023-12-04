import * as f from '@standard/f'
import echo from '@standard/echo'
import interceptor from '@standard/interceptor'

function position (args, next) {
  setImmediate(() => {
    if (f.equals(this.x, 0)) return echo.emit(`start:${this.channel}`, 'start')
    if (f.equals(this.x, this.rect.limit)) return echo.emit(`end:${this.channel}`, 'end')
    return echo.emit(`middle:${this.channel}`, 'middle')
  })
  return next(...args)
}

export default interceptor(position)
