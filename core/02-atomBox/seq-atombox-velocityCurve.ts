import { LeeRange } from '../../util/lee-range'
import { SEQ_ATOM_VELOCITY_MIN, SEQ_ATOM_VELOCITY_MAX } from '../01-atom/seq-atom'

export enum     VelocityCurveType       { Up, Down, Random, Fixed }

export class VelocityCurve extends LeeRange {

    constructor(

        private _type = VelocityCurveType.Up

    ){ super(SEQ_ATOM_VELOCITY_MIN, SEQ_ATOM_VELOCITY_MAX) }

    // setter
    public setType(type: VelocityCurveType): void {

        this._type = type

    }

    // getter
    public getType(): VelocityCurveType {

        return this._type

    }

}