import { VelocityCurve }    from './seq-note-velocityCurve'
import { PitchBend }        from './seq-note-pitchBend'
import { NoteRandomizer }   from './seq-note-randomizer'

export class Note {

    constructor(

        private _start          : number,
        private _duration       : number,
        private _subNotes       = Array.from({length : 16}, () => ({ _velocity : 64, _gate : 1 })),
        private _isSelected     = false, 

        private _isMuted        = false,
        private _division       = 1,
        private _gateGlobal     = 1,
        private _velocityCurve  = new VelocityCurve,
        private _pitchBend      = new PitchBend, 
        private _randomizer     = new NoteRandomizer,
         
    ){}

}