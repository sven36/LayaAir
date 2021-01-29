import PIXI from '../../pixi5.2.js';
import Animation from './Animation.js';

class AnimationTimeline {
    constructor(options) {
        this.animations = [];
        this.options = options;
        this.eventEmitter = new PIXI.utils.EventEmitter;
    }
    add(animations) {
        var _this = this
            , animationNumber = this.animations.length;
        animations = Array.isArray(animations) ? animations : [animations],
            this.animations.push(animations),
            animations[0].on("start", function () {
                _this.emit("start" + animationNumber),
                    0 == animationNumber && _this.emit("start")
            });
        var counter = 0;
        return animations.forEach(function (animation) {
            animation.on("end", function () {
                ++counter < animations.length || (_this.emit("end" + animationNumber),
                    _this.animations.length - 1 == animationNumber ? _this.emit("end") : _this.startAnimation(animationNumber + 1))
            })
        }),
            this
    }
    startAnimation(number) {
        var animations = this.animations[number];
        if (animations)
            return animations.forEach(function (animation) {
                animation.start()
            }),
                this
    }
    start() {
        return this.startAnimation(0),
            this
    }
    resetAnimation(animations) {
        return animations.forEach(function (animation) {
            animation.stop(),
                animation.reset()
        }),
            this
    }
    stopAnimation(animations) {
        return animations.forEach(function (animation) {
            animation.stop()
        }),
            this
    }
    reset() {
        for (var i = this.animations.length - 1; 0 <= i; i--)
            this.resetAnimation(this.animations[i]);
        return this
    }
    stop() {
        var _this2 = this;
        return this.animations.forEach(function (animation) {
            _this2.stopAnimation(animation)
        }),
            this
    }
    emit() {
        return this.eventEmitter.emit.apply(this.eventEmitter, arguments),
            this
    }
    on(event, callback) {
        var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return this.eventEmitter.on(event, callback, context),
            this
    }
    once(event, callback) {
        var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return this.eventEmitter.once(event, callback, context),
            this
    }
    off(event) {
        return event ? this.eventEmitter.removeListener(event) : this.eventEmitter.removeAllListeners(),
            this
    }
}

export default AnimationTimeline;