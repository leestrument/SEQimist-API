import { Particle } from '../01-particle/seq-particle'

export const SEQ_PARTICLE_COUNT_MIN = 1
export const SEQ_PARTICLE_COUNT_MAX = 32

export class ParticleSystem {

    constructor(

        private _particleCount  = SEQ_PARTICLE_COUNT_MIN,
        private _particles      = Array.from({length : SEQ_PARTICLE_COUNT_MAX}, () => new Particle),

    ){}

    // setter
    public setParticleCount(particleCount: number): void {

        this._particleCount = particleCount

    }
    public increaseParticleCount(): void {

        if (this._particleCount < SEQ_PARTICLE_COUNT_MAX) this._particleCount++

    }
    public decreaseParticleCount(): void {

        if (this._particleCount > SEQ_PARTICLE_COUNT_MIN) this._particleCount--

    }

}