import PIXI from '../../pixi5.2.js';

class Analytics {
    constructor() {
        this.eventEmitter = new PIXI.utils.EventEmitter();

    }
    send(type) {
        var arg = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        this.emit("send", type, arg)
    }
    startLevel() {
        this.emit("startLevel")
    }
    endLevel() {
        this.emit("endLevel")
    }
    midway() {
        this.emit("midway")
    }
    interaction() {
        this.emit("interaction")
    }
    retry() {
        this.emit("retry")
    }
    finalWin() {
        this.emit("final", "win")
    }
    finalLose() {
        this.emit("final", "lose")
    }
    finalTimer() {
        this.emit("final", "timer")
    }
    finalFake() {
        this.emit("final", "fake")
    }
    emit() {
        this.eventEmitter.emit.apply(this.eventEmitter, arguments)
    }
    on(event, callback) {
        var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        this.eventEmitter.on(event, callback, context)
    }
    once(event, callback) {
        var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        this.eventEmitter.once(event, callback, context)
    }
}

export default Analytics;