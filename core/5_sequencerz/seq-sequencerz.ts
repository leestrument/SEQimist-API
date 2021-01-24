import { PianoRoll }        from '../6_sequencer/seq-piano-roll'
import { StepSequencer }    from '../6_sequencer/seq-step-sequencer'

export class Sequencerz {

    constructor(

        private _pianoRoll      = new PianoRoll,
        private _stepSequencer  = new StepSequencer,

    ) 
    {}

}