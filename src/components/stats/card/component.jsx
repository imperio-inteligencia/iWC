import h, { Fragment } from '@standard/h'
import stack from '@elements/stack'
import style from './style'
import text from '@elements/text'

function component (card) {
  return (
    <stack.Div className={style.card} style={`border-left: var(--border-width-thick) solid ${card.color};`} column xs>
      <stack.Div xs>
        <text.Span master darker xxs bold>{card.situation}</text.Span>
        <text.Span master darker xxs bold>{card.quantity}</text.Span>
      </stack.Div>
      <div className={style.card__properties}>
        {card.properties}
      </div>
    </stack.Div>
  )
}

export default component
