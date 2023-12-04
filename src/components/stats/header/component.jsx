import h from '@standard/h'
import stack from '@elements/stack'
import style from './style'
import text from '@elements/text'

function component (props) {
  return (
    <stack.Div className={style.header} column middle>
      <text.Span master darker sm bold>Situações</text.Span>
    </stack.Div>
  )
}

export default component
