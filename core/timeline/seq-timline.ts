import { TimelineLoop } from './seq-timeline-loop'
import { Clip }         from '../clip/seq-clip'

const SEQ_CLIP_COUNT_DEF = 8

export class Timeline {

    constructor(

        private _loop = new TimelineLoop,
        private _clips = Array.from({length : SEQ_CLIP_COUNT_DEF }, () => new Clip)

    ){}

}