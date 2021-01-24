import { LeeRange }             from '../../util/lee-range'
import { VelocityCurveType }    from './seq-atombox-velocityCurve-type'

export const SEQ_VELOCITY_CURVE_MIN = 1
export const SEQ_VELOCITY_CURVE_MAX = 127

export class VelocityCurve extends LeeRange {

    constructor(

        private _type = VelocityCurveType.Up

    ){ super(SEQ_VELOCITY_CURVE_MIN, SEQ_VELOCITY_CURVE_MAX) }

    // setter
    public setType(type: VelocityCurveType): void {

        this._type = type

    }

    // getter
    public getType(): VelocityCurveType {

        return this._type

    }

}