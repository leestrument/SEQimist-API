import { LeeRange } from '../../util/lee-range'

const LOOP_MIN_DEF      = 0
const LOOP_MAX_DEF      = 1
const LOOP_ACTIVE_DEF   = false

export class TrackLoop extends LeeRange {

    constructor(){ super(LOOP_MIN_DEF, LOOP_MAX_DEF, LOOP_ACTIVE_DEF) }

}