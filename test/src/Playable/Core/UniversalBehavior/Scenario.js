import PIXI from '../../../pixi5.2.js'
import Reward from './Reward.js';

class Scenario extends PIXI.utils.EventEmitter {
    constructor(obj, config) {
        super();
        this.rewards = config.rewards || [];
        this.loop = config.loop || !1;
        this.repeat = config.repeat || 0;
        this.obj = obj;
        this.currentRunNumber = 0;
        this.reset();
    }

    getNextStepNumber() {
        return null === this.currentStepNumber ? 0 : this.currentStepNumber !== this.rewards.length - 1 ? this.currentStepNumber + 1 : this.loop || this.repeat > this.repeatNumber ? (this.emit("repeat"),
            this.repeatNumber++ ,
            0) : null
    }
    startNextStep() {
        var _this2 = this;
        if (this.currentStepNumber = this.getNextStepNumber(),
            null === this.currentStepNumber)
            return this.isActive = !1,
                void this.emit("end");
        var reward = this.rewards[this.currentStepNumber];
        if (Reward.isInstant(reward))
            Reward.apply(this.obj, reward),
                this.currentNonInstant = null,
                this.startNextStep();
        else {
            var runNumber = this.currentRunNumber;
            this.currentNonInstant = Reward.apply(this.obj, Object.assign(reward, {
                callback: function () {
                    _this2.isActive && runNumber === _this2.currentRunNumber && (_this2.currentNonInstant = null,
                        _this2.startNextStep())
                }
            }))
        }
    }
    reset() {
        return this.currentStepNumber = null,
            this.currentNonInstant = null,
            this.repeatNumber = 0,
            this.isActive = !1,
            this
    }
    start() {
        if (this.rewards.length)
            return this.currentRunNumber++ ,
                this.isActive = !0,
                this.startNextStep(),
                this.emit("start"),
                this
    }
    stop() {
        var interrupt = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        return this.isActive = !1,
            interrupt && this.currentNonInstant && (this.currentNonInstant.stop(),
                this.currentNonInstant = null),
            this
    }

}

export default Scenario;