export const SEQ_PARTICLE_VELOCITY_MIN = 1 
export const SEQ_PARTICLE_VELOCITY_MAX = 127
export const SEQ_PARTICLE_VELOCITY_DEF = 64
export const SEQ_PARTICLE_GATE_MIN = 0
export const SEQ_PARTICLE_GATE_MAX = 1

export class Particle {

    constructor(

        private _velocity   = SEQ_PARTICLE_VELOCITY_DEF,
        private _gate       = SEQ_PARTICLE_GATE_MAX,

    ){}

    // setter
    public setVelocity(velocity: number): void {

        this._velocity = velocity

    }
    public setGate(gate: number): void {

        this._gate = gate

    }
    public randomizeVelocity(): void {

        this._velocity = Math.floor(Math.random() * SEQ_PARTICLE_VELOCITY_MAX) + SEQ_PARTICLE_VELOCITY_MIN

    }
    public randomizeGate(): void {

        this._gate = Math.random()

    }
    
    // getter
    public getVelocity(): number {

        return this._velocity

    }
    public getGate(): number {

        return this._gate

    }

}