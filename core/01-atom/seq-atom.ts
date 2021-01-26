export const SEQ_ATOM_VELOCITY_MIN = 1 
export const SEQ_ATOM_VELOCITY_MAX = 127
export const SEQ_ATOM_VELOCITY_DEF = 64
export const SEQ_ATOM_GATE_MIN = 0
export const SEQ_ATOM_GATE_MAX = 1

export class Atom {

    constructor(

        private _velocity   = SEQ_ATOM_VELOCITY_DEF,
        private _gate       = SEQ_ATOM_GATE_MAX,

    ){}

    // setter
    public setVelocity(velocity: number): void {

        this._velocity = velocity

    }
    public setGate(gate: number): void {

        this._gate = gate

    }
    
    // getter
    public getVelocity(): number {

        return this._velocity

    }
    public getGate(): number {

        return this._gate

    }

}