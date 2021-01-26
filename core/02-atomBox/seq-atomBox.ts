import { VelocityCurve } from './seq-atombox-velocityCurve'
import { Atom, SEQ_ATOM_VELOCITY_MIN, SEQ_ATOM_VELOCITY_MAX } from '../01-atom/seq-atom'
import LeeArray from '../../util/lee-array'

export const SEQ_VISIBLE_ATOM_COUNT_MIN = 1
export const SEQ_VISIBLE_ATOM_COUNT_MAX = 32

export class AtomBox {

    constructor(

        private _visibleAtomCount   = SEQ_VISIBLE_ATOM_COUNT_MIN,
        private _velocityCurve      = new VelocityCurve,
        private _atoms              = Array.from({length : SEQ_VISIBLE_ATOM_COUNT_MAX}, () => new Atom),

    ){}

    // setter
    public setVisibleAtomCount(visibleAtomCount: number): void {

        this._visibleAtomCount = visibleAtomCount

    }
    public increaseVisibleAtomCount(): void {

        if (this._visibleAtomCount < SEQ_VISIBLE_ATOM_COUNT_MAX) this._visibleAtomCount++

    }
    public decreaseVisibleAtomCount(): void {

        if (this._visibleAtomCount > SEQ_VISIBLE_ATOM_COUNT_MIN) this._visibleAtomCount--

    }




    public setAtomsVelocityUp(velocityMin = SEQ_ATOM_VELOCITY_MIN, velocityMax = SEQ_ATOM_VELOCITY_MAX): void {

        LeeArray.up(this._visibleAtomCount, velocityMin, velocityMax).forEach((velocity, index) => this._atoms[index].setVelocity(velocity))

    }
    public setAtomsVelocityDown(velocityMin = SEQ_ATOM_VELOCITY_MIN, velocityMax = SEQ_ATOM_VELOCITY_MAX): void {

        LeeArray.down(this._visibleAtomCount, velocityMin, velocityMax).forEach((velocity, index) => this._atoms[index].setVelocity(velocity))

    }
    public setAtomsVelocityRandom(velocityMin = SEQ_ATOM_VELOCITY_MIN, velocityMax = SEQ_ATOM_VELOCITY_MAX): void {

        LeeArray.random(this._visibleAtomCount, velocityMin, velocityMax).forEach((velocity, index) => this._atoms[index].setVelocity(velocity))

    }
    public setAtomsVelocityFixed(velocityToFix: number): void {

        LeeArray.fill(this._visibleAtomCount, velocityToFix).forEach((velocity, index) => this._atoms[index].setVelocity(velocity))

    }

}