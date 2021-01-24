const PLAY_BACK_LENGTH_DEF  = 1
const PLAY_BACK_SPEED_DEF   = 1
const PLAY_BACK_SWING_DEF   = 0

export class PlayBack {

    constructor(

        public _length = PLAY_BACK_LENGTH_DEF, 
        public _speed  = PLAY_BACK_SPEED_DEF, 
        public _swing  = PLAY_BACK_SWING_DEF,

    ){}

    public setLength(length: number): void {

        this._length = length

    }
    public setSpeed(speed: number): void {

        this._speed = speed

    }
    public setSwing(swing: number): void {

        this._swing = swing

    }

}