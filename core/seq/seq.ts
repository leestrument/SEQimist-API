import { SeqLayout }    from './seq-layout'
import { Browser }      from './seq-browser'
import { Timeline }     from '../timeline/seq-timline'

export class Seq {

    constructor(

        private _layout     = SeqLayout.PianoRoll,
        private _browser    = new Browser,
        private _timeline   = new Timeline,

    ){}

}