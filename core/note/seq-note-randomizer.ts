import { LeeRange } from '../../util/lee-range'

export class NoteRandomizer {

    constructor(

        public _probability = 1,
        public _start       = new LeeRange(),
        public _division    = new LeeRange(1, 32),
        public _gate        = new LeeRange(0.1, 1),

    ){}

}