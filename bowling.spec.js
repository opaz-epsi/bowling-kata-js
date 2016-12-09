let Bowling = require('./bowling');

describe("bowling", () =>{
    let bowling;

    beforeEach(() =>{
        bowling = new Bowling();
    });

    function repeat(n, f) {
        for (let i = 0; i <n; i++) {
            f();
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

    function rollSpare() {
        roll(5);
        roll(5);

    }

    function rollStrike() {
        roll(10);
    }

    function expectScore(score) {
        expect(bowling.score()).toEqual(score);
    }

    it('returns 0 for a gutter game', () =>{
        repeat(20, rollZero);
        expectScore(0);
    });

    it('returns 0 if only 1 are rolled', () =>{
        repeat(20, rollOne);
        expectScore(20);
    });

    it('handles a spare', function () {
        rollSpare();
        roll(3);
        repeat(17, rollZero);
        expectScore(16);
    });
    it('handles a strike', function () {
        rollStrike();
        roll(3);
        roll(2);
        repeat(16, rollZero);
        expectScore(20);
    });

});