export namespace LeeRandom {

    export const range = (min: number, max: number, isInteger = true): number => (

        isInteger ? Math.floor(Math.random() * (max - min + 1) + min) : Math.random() * (max - min) + min
    
    )

}