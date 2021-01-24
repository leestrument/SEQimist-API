import { Note } from '../7_note/seq-note'

export class StepSequencer {

    constructor(

        private _steps  : { [id: string] : Note } = {},
        private _grid   = 16,

    ){}

}