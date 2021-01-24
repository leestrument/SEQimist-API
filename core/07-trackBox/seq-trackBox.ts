import { Interval }     from './seq-trackBox-interval'
import { ClipPreset }   from './seq-trackBox-preset'
import { Track }        from '../06-track/seq-track'

export const SEQ_VISIBLE_TRACK_COUNT_MIN   = 1
export const SEQ_VISIBLE_TRACK_COUNT_MAX   = 64
export const SEQ_VISIBLE_TRACK_COUNT_DEF   = 8

export class TrackBox {

    constructor(

        private _interval           = new Interval,
        private _preset             = new ClipPreset,
        private _visibleTrackCount  = SEQ_VISIBLE_TRACK_COUNT_DEF,
        private _tracks             = Array.from({length : SEQ_VISIBLE_TRACK_COUNT_MAX}, () => new Track),

    ){}


}