import { Note } from '../6_note/seq-note'

export class StepSequencer {

    constructor(

        private _steps : { [id: string] : Note }

    ){}

}