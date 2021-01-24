import { Note } from '../03-note/seq-note'

export class StepSequencer {

    constructor(

        private _steps  : { [id: string] : Note } = {},
        private _grid   = 16,

    ){}

}