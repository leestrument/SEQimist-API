import { LeeRange } from '../../util/lee-range'

const TRACK_LOOP_MIN_DEF      = 0
const TRACK_LOOP_MAX_DEF      = 1
const TRACK_LOOP_ACTIVE_DEF   = false

export class TrackLoop extends LeeRange {

    constructor(){ super(TRACK_LOOP_MIN_DEF, TRACK_LOOP_MAX_DEF, TRACK_LOOP_ACTIVE_DEF) }

}