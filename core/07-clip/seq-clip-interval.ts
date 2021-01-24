import { Scale } from './seq-clip-interval-scale'
import { Chord } from './seq-clip-interval-chord'

export class Interval {

    constructor(

        public _root = 0,
        public _transpose = 0,
        public _current = 'scale',
        public _scale = new Scale,
        public _chord = new Chord,
        public _result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    
    ){}

}