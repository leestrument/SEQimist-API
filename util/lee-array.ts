import LeeRandom from './lee-random'

const fill      = (count: number, valueToFill: number): number[] => (

    Array(count).fill(valueToFill)
 
)
const up        = (count: number, min: number, max: number): number[] =>  (

    Array.from({ length: count}, (v, i) => Math.floor(((max - min) / count) * i + min))

)
const down      = (count: number, min: number, max: number): number[] => (

    up(count, min, max).reverse()

)
const random    = (count: number, min: number, max: number, isInteger = true): number[] => (

    Array.from({ length : count}, () => LeeRandom.range(min, max, isInteger))

)

export default {

    fill, up, down, random

}