import arity from './arity'
import curry from './curry'
import magic from '@standard/magic'
import resolveDunders from './internal/resolveDunders'

function sum (...args) {
  return args.reduce((x, y) => x + y)
}

Object.assign(sum, {
  __: magic.sum
})

export default curry(arity(1, resolveDunders(sum)))
