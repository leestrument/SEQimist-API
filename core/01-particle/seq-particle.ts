const PARTICLE_VELOCITY_MIN = 1 
const PARTICLE_VELOCITY_MAX = 127
const PARTICLE_VELOCITY_DEF = 64
const PARTICLE_GATE_MIN = 0
const PARTICLE_GATE_MAX = 1

export class Particle {

    constructor(

        private _velocity   = PARTICLE_VELOCITY_DEF,
        private _gate       = PARTICLE_GATE_MAX,

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