import { SeqLayout }    from './seq-layout'
import { SeqLoop }      from './seq-loop'
import { Browser }      from './seq-browser'
import { Clip }         from '../clip/seq-clip'

const SEQ_CLIP_COUNT_DEF = 8

export class Seq {

    constructor(

        private _layout     = SeqLayout.PianoRoll,
        private _browser    = new Browser,
        private _loop       = new SeqLoop,
        private _clips      = Array.from({length : SEQ_CLIP_COUNT_DEF }, () => new Clip)

    ){}

}