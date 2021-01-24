import { Note } from '../note/seq-note'

export class Sequencers {

    constructor(

        public _notes : { [id: string] : Note } = {},
        public _steps : { [id: string] : Note } = {},

    ){}

}