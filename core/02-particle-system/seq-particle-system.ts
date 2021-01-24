import { VelocityCurve }    from './seq-particle-system-velocity-curve'
import { Particle }         from '../01-particle/seq-particle'

export const SEQ_VISIBLE_PARTICLE_COUNT_MIN = 1
export const SEQ_VISIBLE_PARTICLE_COUNT_MAX = 32

export class ParticleSystem {

    constructor(

        private _visibleParticleCount   = SEQ_VISIBLE_PARTICLE_COUNT_MIN,
        private _velocityCurve          = new VelocityCurve,
        private _particles              = Array.from({length : SEQ_VISIBLE_PARTICLE_COUNT_MAX}, () => new Particle),

    ){}

    // setter
    public setVisibleParticleCount(visibleParticleCount: number): void {

        this._visibleParticleCount = visibleParticleCount

    }
    public increaseVisibleParticleCount(): void {

        if (this._visibleParticleCount < SEQ_VISIBLE_PARTICLE_COUNT_MAX) this._visibleParticleCount

    }
    public decreaseParticleCount(): void {

        if (this._visibleParticleCount > SEQ_VISIBLE_PARTICLE_COUNT_MIN) this._visibleParticleCount--

    }

}