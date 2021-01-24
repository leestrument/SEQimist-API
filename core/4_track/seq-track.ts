import { Mixer }        from './seq-track-mixer'
import { Sequencerz }   from '../5_sequencerz/seq-sequencerz'
import { PlayBack }     from './seq-track-playback'
import { TrackPreset }  from './seq-track-preset'

export class Track {

    constructor(

        private _isSelected = false, 
        private _mixer      = new Mixer,
        private _sequencerz = new Sequencerz,
        private _playback   = new PlayBack,
        private _preset     = new TrackPreset,
        
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
    
}