import { PitchBend }        from './seq-note-pitchBend'
import { NoteRandomizer }   from './seq-note-randomizer'
import { ParticleSystem }   from '../8_particleSystem/seq-particle-system'

export class Note {

    constructor(

        private _start          : number,
        private _duration       : number,
        private _isSelected     = false, 
        private _isMuted        = false,
        private _pitchBend      = new PitchBend, 
        private _randomizer     = new NoteRandomizer,
        private _particleSystem = new ParticleSystem,

    ){}

}