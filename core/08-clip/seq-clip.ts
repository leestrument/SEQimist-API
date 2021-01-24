import { TrackBox } from '../07-trackBox/seq-trackBox'

export class Clip {

    constructor(

        private _isSelected         = false,
        private _color              = 0,
        private _trackBox           = new TrackBox
        
    ){}

}