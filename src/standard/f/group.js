import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function group (items, functionRef) {
  return items?.group(functionRef)
}

Object.assign(group, {
  __: magic.group
})

export default curry(arity(2, resolveDunders(group)))
