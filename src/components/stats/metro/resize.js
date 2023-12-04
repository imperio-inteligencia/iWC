import event from '@standard/event'
import middleware from '@standard/middleware'

function resize (metro) {
  const name = 'resize'
  const rewind = () => metro.rewind()
  event.didMount(() => window.addEventListener(name, rewind), metro)
  event.willUnmount(() => window.removeEventListener(name, rewind), metro)
}

export default middleware(resize)
