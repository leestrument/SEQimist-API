import { Interval }     from './seq-clip-interval'
import { ClipPreset }   from './seq-clip-preset'
import { Track }        from '../06-track/seq-track'

export class Clip {

    constructor(

        private _isSelected         = false,
        private _color              = 0,
        private _trackCount         = 8,
        private _interval           = new Interval,
        private _preset             = new ClipPreset,
        private _tracks             = Array.from({length : 64}, () => new Track),

    ){}

}