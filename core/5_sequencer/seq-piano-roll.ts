import { Note } from '../6_note/seq-note'

export class PianoRoll {

    constructor(

        private _notes : { [id: string] : Note }

    ){}

}