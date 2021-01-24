export class LeeRange {

    constructor(

        public _min = 0,
        public _max = 0,
        public _isActive = false,

    ){}

    // setter
    public active(): void {

        this._isActive = true

    }
    public deactive(): void {

        this._isActive = false

    }
    public setMin(min: number): void {

        this._min = min

    }
    public setMax(max: number): void {

        this._max = max

    }

    // getter
    public getMin(): number {

        return this._min

    }
    public getMax(): number {

        return this._max

    }
    public isActive(): boolean {

        return this._isActive

    }

}