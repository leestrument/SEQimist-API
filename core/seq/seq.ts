import { SeqLayout }    from './seq-layout'
import { SeqLoop }      from './seq-loop'
import { Browser }      from './seq-browser'
import { Clip }         from '../clip/seq-clip'

export class Seq {

    constructor(

        private _layout     = SeqLayout.PianoRoll,
        private _browser    = new Browser,
        private _loop       = new SeqLoop,
        private _clips      = Array.from({length : 8}, () => new Clip)

    ){}

}

console.log(new Seq)