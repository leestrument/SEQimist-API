import { NoteRandomizer }   from './seq-note-randomizer'
import { AtomBox }          from '../02-atomBox/seq-atomBox'

const SEQ_NOTE_IS_SELECTED_DEF  = false
const SEQ_NOTE_IS_ACTIVE_DEF    = true

export class Note {

    constructor(

        private _start          : number,
        private _duration       : number,
        private _isSelected     = SEQ_NOTE_IS_SELECTED_DEF, 
        private _isActive       = SEQ_NOTE_IS_ACTIVE_DEF,
        private _randomizer     = new NoteRandomizer,
        private _atomBox        = new AtomBox,

    ){}

    // setter
    public setStart(start: number): void {

        this._start = start

    }
    public setDuration(duration: number): void {

        this._duration = duration

    }
    public select(): void {

        this._isSelected = true

    }
    public deselect(): void {

        this._isSelected = false

    }
    public active(): void {

        this._isActive = true

    }
    public mute(): void {

        this._isActive = false

    }

    // getter
    public getStart(): number {

        return this._start

    }
    public getDuration(): number {

        return this._duration

    }
    public isSelected(): boolean {

        return this._isSelected

    }
    public isActive(): boolean {

        return this._isActive

    }
    public isMuted(): boolean {

        return this._isActive === false

    }

}