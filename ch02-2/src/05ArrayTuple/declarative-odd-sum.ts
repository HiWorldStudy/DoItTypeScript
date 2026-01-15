import {range} from './range'
import {fold} from './fold'
//import {filter} from './filter'
import {map} from './map'

let numbers: number[] = range(1, 100+1)
const isOdd = (n: number): boolean => n% 2 != 0
let result = fold(
//    filter(numbers, isOdd),               // array
//    (result, value)=> result + value,     //callback
//     0                                    //initvalue
    map(
        numbers,
        value => value * value),
    (result, value) => result + value,
    0       
    )                                 
console.log(result)
