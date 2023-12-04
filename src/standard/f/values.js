import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function values (target) {
  return Object.values(target)
}

Object.assign(values, {
  __: magic.values
})

export default curry(arity(1, resolveDunders(values)))
