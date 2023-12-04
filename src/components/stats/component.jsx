import h from '@standard/h'
import Header from './header'
import Metro from './metro'
import Pagination from './pagination'
import stack from '@elements/stack'
import style from './style'

function component (stats) {
  return (
    <stack.Div className={style.stats} column xs>
      <Header category={stats.category} />
      <Pagination channel={stats.channel} />
      <Metro channel={stats.channel}>
        {stats.cards}
      </Metro>
    </stack.Div>
  )
}

export default component
