import { PianoRoll }        from '../04-sequencer/seq-piano-roll'
import { StepSequencer }    from '../04-sequencer/seq-step-sequencer'

export class MultiSequencer {

    constructor(

        private _pianoRoll      = new PianoRoll,
        private _stepSequencer  = new StepSequencer,

    ) 
    {}

}