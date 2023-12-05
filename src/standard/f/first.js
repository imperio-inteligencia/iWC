import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function fist (target) {
  return target[0]
}

Object.assign(fist, {
  __: magic.fist
})

export default curry(arity(1, resolveDunders(fist)))
