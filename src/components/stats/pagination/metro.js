import echo from '@standard/echo'
import event from '@standard/event'
import middleware from '@standard/middleware'

function metro (pagination) {
  let changePage = (value) => pagination.changePage(value)

  event.didMount(() => {
    echo.on(`end:${pagination.channel}`, changePage)
    echo.on(`middle:${pagination.channel}`, changePage)
    echo.on(`start:${pagination.channel}`, changePage)
  }, pagination)

  event.willUnmount(() => {
    changePage = () => undefined
  }, pagination)
}

export default middleware(metro)
