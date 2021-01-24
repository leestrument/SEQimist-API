import { Particle } from '../9_particle/seq-particle'

export class ParticleSystem {

    constructor(

        private _visibleParticleCount = 1,
        private _curve  = 'linear',
        private _particles = Array.from({length : 16}, () => new Particle),

    ){}

}