import h, { Fragment } from '@standard/h'
import text from '@elements/text'

function component (property) {
  return (
    <text.Span master darker xxxs>{property.description} ({property.quantity})</text.Span>
  )
}

export default component
