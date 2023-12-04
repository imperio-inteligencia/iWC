import echo from '@standard/echo'
import event from '@standard/event'
import middleware from '@standard/middleware'

function pagination (metro) {
  let moveForward = () => metro.moveForward()
  let moveBack = () => metro.moveBack()

  event.didMount(() => {
    echo.on(`next:${metro.channel}`, moveForward)
    echo.on(`prev:${metro.channel}`, moveBack)
  }, metro)

  event.willUnmount(() => {
    moveForward = moveBack = () => undefined
  }, metro)
}

export default middleware(pagination)
