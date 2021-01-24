import { Note } from '../7_note/seq-note'

export class PianoRoll {

    constructor(

        private _notes  : { [id: string] : Note } = {},
        private _grid   = 16,

    ){}

}