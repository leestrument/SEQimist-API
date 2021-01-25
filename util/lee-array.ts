import { LeeRandom } from './lee-random'

export namespace LeeArray {

    export const fill       = (count: number, valueToFill: number): number[] => (

        Array(count).fill(valueToFill)
     
    )
    export const increase   = (count: number, min: number, max: number): number[] =>  (
    
        Array.from({ length: count}, (v, i) => Math.floor(((max - min) / count) * i + min))
    
    )
    export const decrease   = (count: number, min: number, max: number): number[] => (
    
        increase(count, min, max).reverse()
    
    )
    export const random     = (count: number, min: number, max: number, isInteger = true): number[] => (

        Array.from({ length : count}, () => LeeRandom.range(min, max, isInteger))

    )

}