import { VelocityCurve }                                        from './seq-atombox-velocityCurve'
import { Atom, SEQ_ATOM_VELOCITY_MIN, SEQ_ATOM_VELOCITY_MAX }   from '../01-atom/seq-atom'
import { LeeArray }                                             from '../../util/lee-array'

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
    public setAtomsVelocityUp(): void {

        LeeArray.increase(this._visibleAtomCount, SEQ_ATOM_VELOCITY_MIN, SEQ_ATOM_VELOCITY_MAX).forEach((velocity, index) => {

            this._atoms[index].setVelocity(velocity)

        })

    }

}