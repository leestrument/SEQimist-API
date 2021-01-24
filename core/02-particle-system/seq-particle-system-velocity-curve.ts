import { LeeRange }             from '../../util/lee-range'
import { VelocityCurveType }    from './seq-particle-system-velocity-curve-type'

export class VelocityCurve extends LeeRange {

    constructor(

        private _type = VelocityCurveType.Up

    ){ super() }

}