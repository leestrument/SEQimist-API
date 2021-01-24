import { Mixer }        from './seq-track-mixer'
import { Sequencer }    from './seq-track-sequencer'
import { PlayBack }     from './seq-track-playback'
import { TrackLoop }    from './seq-track-loop'
import { TrackPreset }  from './seq-track-preset'
import { TrackLayout }  from './seq-track-layout'

export class Track {

    constructor(

        private _mixer      = new Mixer,
        private _sequencer  = new Sequencer,
        private _playback   = new PlayBack,
        private _loop       = new TrackLoop,
        private _preset     = new TrackPreset,
        private _layout     = new TrackLayout,
        private _isSelected = false, 
        
    ){}

    public getMixer() {

        return this._mixer

    }

}