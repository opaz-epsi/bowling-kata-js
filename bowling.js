class Bowling {

    constructor() {
        this.frames = [];
        this.currentFrame = [];
    }

    roll(pins) {
        this.currentFrame.push(pins);
        if(this.frameIsFinished()) {
            this.createNewFrame();
        }
    }

    createNewFrame() {
        this.frames.push(this.currentFrame);
        this.currentFrame = [];
    }

    score() {
        return this.frames
            .map((frame) =>
                this.framePoints(frame))
            .reduce((sum, points) =>
                sum + points, 0);
    }

    framePoints(frame) {
        return this.framePins(frame) + this.frameBonus(frame);
    }

    frameBonus(frame) {
        if (this.isStrike(frame)) {
            return this.strikeBonus(frame);
        } else if (this.isSpare(frame)) {
            return this.spareBonus(frame);
        } else {
            return 0;
        }
    }

    spareBonus(frame) {
        let frameIndex = this.frames.indexOf(frame);
        return this.frames[frameIndex + 1][0];
    }

    strikeBonus(frame) {
        let frameIndex = this.frames.indexOf(frame);
        return this.frames[frameIndex + 1][0] + this.frames[frameIndex + 1][1];
    }

    isSpare(frame) {
        return this.framePins(frame) == 10;
    }

    isStrike(frame) {
        return frame[0] == 10;
    }

    framePins(frame) {
        return frame.reduce((sum, pins) =>
            sum + pins, 0);
    }

    frameIsFinished() {
        return (this.currentFrame.length == 2)
            || this.isStrike(this.currentFrame);
    }
}

module.exports = Bowling;