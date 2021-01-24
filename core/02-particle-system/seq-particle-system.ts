import { Particle } from '../01-particle/seq-particle'

export const SEQ_PARTICLE_COUNT_MIN = 1
export const SEQ_PARTICLE_COUNT_MAX = 16

export class ParticleSystem {

    constructor(

        private _particleCount  = SEQ_PARTICLE_COUNT_MIN,
        private _particles      = Array.from({length : SEQ_PARTICLE_COUNT_MAX}, () => new Particle),

    ){}

}