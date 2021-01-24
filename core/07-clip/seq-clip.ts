import { Interval }     from './seq-clip-interval'
import { ClipPreset }   from './seq-clip-preset'
import { Track }        from '../06-track/seq-track'

export const SEQ_VISIBLE_TRACK_COUNT_MIN   = 1
export const SEQ_VISIBLE_TRACK_COUNT_MAX   = 64
export const SEQ_VISIBLE_TRACK_COUNT_DEF   = 8

export class Clip {

    constructor(

        private _isSelected         = false,
        private _color              = 0,
        private _interval           = new Interval,
        private _preset             = new ClipPreset,
        private _visibleTrackCount  = SEQ_VISIBLE_TRACK_COUNT_DEF,
        private _tracks             = Array.from({length : SEQ_VISIBLE_TRACK_COUNT_MAX}, () => new Track),

    ){}

}