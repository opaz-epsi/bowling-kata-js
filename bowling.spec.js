let Bowling = require('./bowling')

describe("bowling", () => {
    let bowling;

    function repeat(n, f) {
        for (let i = 0; i < n; i++) {
            f()
        }
    }

    function roll(pins) {
        bowling.roll(pins);
    }

    function rollZero() {
        roll(0);
    }

    function rollOne() {
        roll(1);
    }

    function expectScore(score) {
        expect(bowling.score()).toEqual(score);
    }

    beforeEach(() =>{
        bowling = new Bowling()
    });

    it('returns 0 for a gutter game', () =>{
        repeat(20, rollZero);
        expectScore(0);
    });

    it('returns 20 if only 1 are rolled', () =>{
        repeat(20, rollOne);
        expectScore(20);
    });
    it('handles a spare', () =>{
        roll(5);
        roll(5);
        roll(2);
        repeat(17, rollZero);
        expectScore(14);
    });

});
