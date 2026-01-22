import {f, g, h} from './f-g-h'
import {compose} from './compose'

const composedFGH = compose(f, g, h)
console.log(
    composedFGH('x')
)