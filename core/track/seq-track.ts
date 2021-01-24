import { Mixer }        from './seq-track-mixer'
import { Sequencer }    from './seq-track-sequencer'
import { PlayBack }     from './seq-track-playback'
import { TrackLoop }    from './seq-track-loop'
import { TrackPreset }  from './seq-track-preset'
import { TrackLayout }  from './seq-track-layout'

export class Track {

    constructor(

        private _isSelected = false, 
        private _mixer      = new Mixer,
        private _sequencer  = new Sequencer,
        private _playback   = new PlayBack,
        private _loop       = new TrackLoop,
        private _preset     = new TrackPreset,
        private _layout     = new TrackLayout,
        
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
    public getLoop(): TrackLoop {

        return this._loop

    }
    
}