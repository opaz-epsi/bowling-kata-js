let Bowling = require('./bowling')

describe("bowling", () => {

    it("works", () => {
        let bowling = new Bowling();
        expect(bowling.works()).toBe(true);
    });

});