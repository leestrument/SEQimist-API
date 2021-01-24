import { Particle } from '../01-particle/seq-particle'

export class ParticleSystem {

    constructor(

        private _visibleParticleCount   = 1,
        private _velocityCurve          = 'linear',
        private _particles              = Array.from({length : 16}, () => new Particle),

    ){}

}