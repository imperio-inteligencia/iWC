import h from '@standard/h'
import icon from '@elements/icon'
import style from './style'

function component (pagination) {
  return (
    <div className={style.pagination} page={pagination.page}>
      <button className={style.pagination__prev} onClick={() => pagination.prev()}><icon.CaretLeft /></button>
      <button className={style.pagination__next} onClick={() => pagination.next()}><icon.CaretRight /></button>
    </div>
  )
}

export default component
