const MIXER_ACTIVE_DEF  = true
const MIXER_SOLO_DEF    = false

export class Mixer {

    constructor(

        private _isActive   = MIXER_ACTIVE_DEF,
        private _isSolo     = MIXER_SOLO_DEF,

    ){}

    // setter
    public active(): void { 
        
        this._isActive = true 
    
    }
    public mute(): void   { 
        
        this._isActive = false 
    
    }
    public solo(): void {

        this._isSolo = true

    }
    public unsolo(): void {

        this._isSolo = false

    }

    // getter
    public isActive(): boolean {

        return this._isActive === true

    }
    public isMuted(): boolean {

        return this._isActive === false

    }
    public isSolo(): boolean {

        return this._isSolo

    }
    public isOn(): boolean {

        // isOn dedicates active + solo state.

        return  this.isActive() || this.isSolo()

    }

}