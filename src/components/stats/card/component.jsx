import h, { Fragment } from '@standard/h'
import stack from '@elements/stack'
import style from './style'
import text from '@elements/text'

function component (card) {
  return (
    <stack.Div className={style.card} column xs>
      <stack.Div xs>
        <text.Span master darker xxs bold>{card.situation}</text.Span>
        <text.Span master darker xxs bold>{card.quantity}</text.Span>
      </stack.Div>
      <stack.Div column xs>
        {card.properties}
      </stack.Div>
    </stack.Div>
  )
}

export default component
