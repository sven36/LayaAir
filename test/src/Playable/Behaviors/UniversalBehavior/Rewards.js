import Condition from '../../Core/UniversalBehavior/Condition';
import Scenario from '../../Core/UniversalBehavior/Scenario';
import Reward from '../../Core/UniversalBehavior/Reward';
import Animation from '../../Core/Animation';

class Rewards {
    static emitEvent(event, payload) {
        return {
            r: Rewards._emitEvent,
            event: event,
            payload: payload
        }
    }
    static show() {
        return {
            r: Rewards._selfCall,
            method: "show"
        }
    }
    static hide() {
        return {
            r: Rewards._selfCall,
            method: "hide"
        }
    }
    static set(values) {
        return {
            r: Rewards._selfSet,
            values: values
        }
    }
    static setFlags(flags) {
        return {
            r: Rewards._exec,
            flags: flags,
            callable: function (config) {
                Object.assign(this.app.playableFlags, config.flags),
                    this.app.emit("playableFlagsChanged", this.app.playableFlags)
            }
        }
    }
    static incrementFlag(flag) {
        return {
            r: Rewards._exec,
            flag: flag,
            callable: function (config) {
                this.app.playableFlags[config.flag]++ ,
                    this.app.emit("playableFlagsChanged", this.app.playableFlags)
            }
        }
    }
    static lock() {
        return {
            r: Rewards._selfCall,
            method: "lock"
        }
    }
    static unlock() {
        return {
            r: Rewards._selfCall,
            method: "unlock"
        }
    }
    static applyPosition(position) {
        return {
            r: Rewards._selfCall,
            method: "applyPosition",
            args: [position]
        }
    }
    static setStage() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
            args[_key] = arguments[_key];
        return {
            r: Rewards._selfCall,
            method: "setStage",
            args: args
        }
    }
    static call(method) {
        for (var _len2 = arguments.length, args = Array(1 < _len2 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
            args[_key2 - 1] = arguments[_key2];
        return {
            r: Rewards._selfCall,
            method: method,
            args: args
        }
    }
    static playSound(sound, config) {
        return {
            r: Rewards._appCall,
            method: "playSound",
            args: [sound, config]
        }
    }
    static stopSound(sound) {
        return {
            r: Rewards._appCall,
            method: "stopSound",
            args: [sound]
        }
    }
    static playableFinish() {
        return {
            r: Rewards._appCall,
            method: "finish"
        }
    }
    static playableRestart() {
        return Rewards.emitEvent("playableRestart")
    }
    static startAnimation(animation) {
        return {
            r: Rewards._exec,
            animation: animation,
            nonInstant: !0,
            callable: function (config) {
                return config.callback && this.animations[config.animation].once("end", config.callback),
                    this.animations[config.animation].reset().start()
            }
        }
    }
    static stopAnimation(animation) {
        return {
            r: Rewards._exec,
            animation: animation,
            callable: function (config) {
                this.animations[config.animation].stop()
            }
        }
    }
    static stopAnimationLooping(animation) {
        return {
            r: Rewards._exec,
            animation: animation,
            callable: function (config) {
                this.animations[config.animation].loop = !1
            }
        }
    }
    static stopAnimationLoopingWithDelay(animation) {
        return {
            r: Rewards._exec,
            animation: animation,
            callable: function (config) {
                this.animations[config.animation].loopWithDelay = !1,
                    this.animations[config.animation].isStarted || this.animations[config.animation].stop()
            }
        }
    }
    static instant(config) {
        return Object.assign({}, config, {
            nonInstant: !1
        })
    }
    static startScenario() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
            args[_key3] = arguments[_key3];
        return {
            r: Rewards._exec,
            nonInstant: !0,
            callable: function (config) {
                var scenarioName = "string" == typeof args[0] ? args[0] : "noname" + Object.keys(this.scenarios).length
                    , scenarioConfig = null;
                if (Array.isArray(args[0]) ? scenarioConfig = Object.assign({
                    rewards: args[0]
                }, args[1]) : Array.isArray(args[1]) && (scenarioConfig = Object.assign({
                    rewards: args[1]
                }, args[2])),
                    scenarioConfig && (this.scenarios[scenarioName] = new Scenario(this, scenarioConfig)),
                    this.scenarios[scenarioName])
                    return config.callback && this.scenarios[scenarioName].once("end", config.callback),
                        this.scenarios[scenarioName].start()
            }
        }
    }
    static stopScenario(scenarioName) {
        var interrupt = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        return {
            r: Rewards._exec,
            callable: function () {
                this.scenarios[scenarioName] && this.scenarios[scenarioName].stop(interrupt)
            }
        }
    }
    static resetScenario(scenarioName) {
        return {
            r: Rewards._exec,
            callable: function () {
                this.scenarios[scenarioName] && this.scenarios[scenarioName].reset()
            }
        }
    }
    static wait(time) {
        return {
            r: Rewards._exec,
            nonInstant: !0,
            callable: function (config) {
                return Animation.create(this, {
                    time: time,
                    expire: !0,
                    on: config.callback ? {
                        end: config.callback
                    } : null
                }).start()
            }
        }
    }
    static if(conditions, rewardsTrue, rewardsFalse) {
        return {
            r: Rewards._exec,
            nonInstant: !0,
            callable: function (config) {
                var callback = config.callback
                    , rewards = Condition.areSatisfied(this, conditions) ? rewardsTrue : rewardsFalse;
                Reward.isInstant(rewards) ? (Reward.applyAll(this, rewards),
                    callback && callback()) : Reward.applyAll(this, Object.assign({}, rewards, {
                        callback: callback
                    }))
            }
        }
    }
    static analyticsRetry() {
        return {
            r: Rewards._exec,
            callable: function () {
                this.app.analytics.retry()
            }
        }
    }
    static analyticsFinalWin(config) {
        return {
            r: Rewards._exec,
            callable: function () {
                this.app.analytics.finalWin()
            }
        }
    }
    static analyticsFinalLose(config) {
        return {
            r: Rewards._exec,
            callable: function () {
                this.app.analytics.finalLose()
            }
        }
    }
    static log() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++)
            args[_key4] = arguments[_key4];
        return {
            r: Rewards._exec,
            callable: function () {
                var _console;
                (_console = console).log.apply(_console, args)
            }
        }
    }
    static _selfEmitEvent(config) {
        this.emit(config.event)
    }
    static _emitEvent(config) {
        this.app.emit(config.event, config.payload ? config.payload : this)
    }
    static _selfSet(config) {
        Rewards._set(this, config.values)
    }
    static _set(obj, values) {
        Object.assign(obj, values)
    }
    static _selfCall(config) {
        Rewards._call(this, config.method, config.args)
    }
    static _appCall(config) {
        Rewards._call(this.app, config.method, config.args)
    }
    static _call(obj, method) {
        var args = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
        obj[method].apply(obj, function (arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
                    arr2[i] = arr[i];
                return arr2
            }
            return Array.from(arr)
        }(args))
    }
    static _exec(config) {
        return config.callable.call(this, config)
    }
}

export default Rewards;