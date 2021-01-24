import { LeeRange } from '../../util/lee-range'

export class VelocityCurve extends LeeRange {

    constructor(

        private _type = 'linear'

    ){ super() }

}