import Condition from '../../Core/UniversalBehavior/Condition.js';

class Triggers {
    static onEvent(event, data) {
        return {
            t: Triggers._eventHandler,
            event: event,
            data: data
        }
    }
    static onceEvent(event, data) {
        return {
            t: Triggers._eventHandler,
            event: event,
            data: data,
            method: "once"
        }
    }
    static onStart() {
        return Triggers.onEvent("playableStart")
    }
    static onRestart() {
        return Triggers.onEvent("playableRestart")
    }
    static onSkip() {
        return Triggers.onEvent("skipAd")
    }
    static onceSkip() {
        return Triggers.onceEvent("skipAd")
    }
    static onceSoundReady() {
        return Triggers.onceEvent("soundReady")
    }
    static onFlagsChanged(flags) {
        return {
            t: Triggers._eventHandler,
            event: "playableFlagsChanged",
            data: flags
        }
    }
    static onTap() {
        return {
            t: Triggers._interactiveSelfEventHandler,
            event: "pointertap"
        }
    }
    static onPointerdown() {
        return {
            t: Triggers._interactiveSelfEventHandler,
            event: "pointerdown"
        }
    }
    static onAnimationEvent(animation, event) {
        return {
            t: Triggers._animationEventHandler,
            event: event,
            animation: animation
        }
    }
    static onAnimationStart(animation) {
        return this.onAnimationEvent(animation, "start")
    }
    static onAnimationEnd(animation) {
        return this.onAnimationEvent(animation, "end")
    }
    static onScenarioStart(scenario) {
        return {
            t: Triggers._scenarioEventHandler,
            event: "start",
            scenario: scenario
        }
    }
    static onScenarioEnd(scenario) {
        return {
            t: Triggers._scenarioEventHandler,
            event: "end",
            scenario: scenario
        }
    }
    static _interactiveSelfEventHandler(config, callback) {
        this.interactive = !0,
            Triggers._selfEventHandler.call(this, Object.assign({}, config), callback)
    }
    static _selfEventHandler(config, callback) {
        Triggers._eventHandler.call(this, Object.assign({}, config, {
            target: this
        }), callback)
    }
    static _animationEventHandler(config, callback) {
        Triggers._eventHandler.call(this, Object.assign({}, config, {
            target: this.animations[config.animation]
        }), callback)
    }
    static _scenarioEventHandler(config, callback) {
        Triggers._eventHandler.call(this, Object.assign({}, config, {
            target: this.scenarios[config.scenario]
        }), callback)
    }
    static _eventHandler(config, callback) {
        var _this = this;
        (config.target ? config.target : this.app)[config.method ? config.method : "on"](config.event, function (obj) {
            ("function" != typeof config.data || config.data.call(_this, obj)) && _Condition2.default.areValuesMatch(obj, config.data) && callback(obj)
        })
    }
}

export default Triggers;