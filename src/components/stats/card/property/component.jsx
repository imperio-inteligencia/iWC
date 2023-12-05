import h from '@standard/h'
import text from '@elements/text'

function component (property) {
  return (
    <text.Span onClick={() => property.select()} master xxxs>
      {property.description} <text.A href='#' complete xxxs>({property.quantity})</text.A>
    </text.Span>
  )
}

export default component
