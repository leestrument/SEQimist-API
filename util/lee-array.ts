import LeeRandom from './lee-random'

const fill       = (count: number, valueToFill: number): number[] => (

    Array(count).fill(valueToFill)
 
)
const increase   = (count: number, min: number, max: number): number[] =>  (

    Array.from({ length: count}, (v, i) => Math.floor(((max - min) / count) * i + min))

)
const decrease   = (count: number, min: number, max: number): number[] => (

    increase(count, min, max).reverse()

)
const random     = (count: number, min: number, max: number, isInteger = true): number[] => (

    Array.from({ length : count}, () => LeeRandom.range(min, max, isInteger))

)

export default {

    fill, increase, decrease, random

}