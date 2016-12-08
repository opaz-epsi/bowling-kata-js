let Bowling = require('./bowling')

describe("bowling", () => {

    it("tests works", () => {
        let bowling = new Bowling();
        expect(bowling.works()).toBe(true);
    });

});