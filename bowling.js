class Bowling {

    constructor() {
        this.rolls = []
    }

    roll(pins) {
        this.rolls.push(pins);
    }

    score() {
        let sum = 0;
        for(let i = 0; i < this.rolls.length; i++) {
            if(this.isSpare(i)) {
                sum += this.spareBonus(i);
            }
            sum += this.rolls[i];
        }
        return sum;
    }

    spareBonus(i) {
        return this.rolls[i + 1];
    }

    isSpare(rollIndex) {
        return this.frameFinished(rollIndex)
        && this.pinsCount(rollIndex) == 10;

    }

    frameFinished(rollIndex) {
        return rollIndex % 2 != 0;
    }

    pinsCount(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex - 1];
    }
}


module.exports = Bowling;