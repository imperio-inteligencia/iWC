import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function map (items, functionRef) {
  return items?.map(functionRef)
}

Object.assign(map, {
  __: magic.map
})

export default curry(arity(2, resolveDunders(map)))
