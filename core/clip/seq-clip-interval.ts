export class Interval {

    constructor(

        public _root = 0,
        public _transpose = 0,
        public _current = 'scale',

        public _tabs = {

            scale : {

                _category : 'all',
                _name : 'chromatic'

            },
            chord : {

                _category : 'major',
                _name : 'major7'

            },

        },
        public _result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    
    ){}

}