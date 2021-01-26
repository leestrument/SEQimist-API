import { VelocityCurve, VelocityCurveType } from './seq-atombox-velocityCurve'
import { Atom, SEQ_ATOM_VELOCITY_MIN, SEQ_ATOM_VELOCITY_MAX } from '../01-atom/seq-atom'
import LeeArray from '../../util/lee-array'

export const SEQ_VISIBLE_ATOM_COUNT_MIN = 1
export const SEQ_VISIBLE_ATOM_COUNT_MAX = 32

export class AtomBox {

    constructor(

        private _visibleAtomCount   = SEQ_VISIBLE_ATOM_COUNT_MIN,
        private _curve              = new VelocityCurve,
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
    public activeCurve(): void { 
        
        this._curve.active()
        this.updateAtomsVelocityByCurve()
    
    }
    public deactiveVelocityCurve(): void { 
        
        this._curve.deactive() 
    
    }
    public setCurveType(curveType: VelocityCurveType): void {

        this._curve.setType(curveType)
        this.updateAtomsVelocityByCurve()
        
    }
    public setCurveMin(curveMin: number): void {

        this._curve.setMin(curveMin)
        this.updateAtomsVelocityByCurve()

    }
    public setCurveMax(curveMax: number): void {

        this._curve.setMax(curveMax)
        this.updateAtomsVelocityByCurve()

    }

    // private setter
    private updateAtomsVelocityByCurve(): void {

        const curveType = this._curve.getType()
        const min       = this._curve.getMin()
        const max       = this._curve.getMax()

        switch (curveType) {

            case VelocityCurveType.Up       : this.setAtomsVelocityUp(min, max); break;
            case VelocityCurveType.Down     : this.setAtomsVelocityDown(min, max); break;;
            case VelocityCurveType.Random   : this.setAtomsVelocityRandom(min, max); break;;
            case VelocityCurveType.Fixed    : this.setAtomsVelocityFixed(max); break;

        }

    }

}