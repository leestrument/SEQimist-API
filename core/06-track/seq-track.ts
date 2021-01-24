import { Mixer }            from './seq-track-mixer'
import { PlayBack }         from './seq-track-playback'
import { MultiSequencer }   from '../05-multi-sequencer/seq-multi-sequencer'

export class Track {

    constructor(

        private _mixer          = new Mixer,
        private _playback       = new PlayBack,
        private _multiSequencer = new MultiSequencer,
        private _isSelected     = false,
        private _color          = 0, 
        
    ){}

    // setter
    public select(): void {

        this._isSelected = true

    }
    public deselect(): void {

        this._isSelected = false

    }

    // getter
    public isSelected(): boolean {

        return this._isSelected

    }
    public getMixer(): Mixer {

        return this._mixer

    }
    public getPlayBack(): PlayBack {

        return this._playback

    }
    public getMultiSequencer(): MultiSequencer {

        return this._multiSequencer

    }
    
}