import Sprite from './Sprite.js';

var _get = function get(object, property, receiver) {
    null === object && (object = Function.prototype);
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (void 0 === desc) {
        var parent = Object.getPrototypeOf(object);
        return null === parent ? void 0 : get(parent, property, receiver)
    }
    if ("value" in desc)
        return desc.value;
    var getter = desc.get;
    return void 0 !== getter ? getter.call(receiver) : void 0
}

class StagedSprite extends Sprite {
    setup() {
        _get(StagedSprite.prototype.__proto__ || Object.getPrototypeOf(StagedSprite.prototype), "setup", this).call(this),
            this.stages = this.config.stages,
            this.setStage(this.config.startStage, !1)
    }
    setFirstStage() {
        var withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        this.setStage(this.stages[0], withAnimation)
    }
    setLastStage() {
        var withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        this.setStage(this.stages[this.stages.length - 1], withAnimation)
    }
    setNextStage() {
        var withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        this.isLastStage() || (this.setStage(this.getNextStage(), withAnimation),
            this.onSetNextStage())
    }
    setStage(stage) {
        var withAnimation = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        this.stage !== stage && (this.stage = stage,
            this.updateChildrenVisibility(withAnimation),
            this.onSetStage(),
            this.isLastStage() && this.onSetLastStage())
    }
    isLastStage() {
        return this.stages.indexOf(this.stage) === this.stages.length - 1
    }
    getNextStage() {
        return this.stages[this.stages.indexOf(this.stage) + 1]
    }
    updateChildrenVisibility() {
        var _this2 = this
            , withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        this.children.forEach(function (child) {
            _this2.updateChildVisibility(child, _this2.stage, withAnimation)
        })
    }
    updateChildVisibility(child, stage) {
        var withAnimation = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
        child.config && child.config.parentStages && (this.isChildVisibleAtStage(child, stage) ? !child.isHiding() && child.visible || child.stopHiding().show(withAnimation) : (child.isShowing() || child.visible) && child.stopShowing().hide(withAnimation))
    }
    isChildVisibleAtStage(child, stage) {
        return -1 !== child.config.parentStages.indexOf(stage)
    }
    onSetStage() { }
    onSetNextStage() { }
    onSetLastStage() { }
    getDefaultConfig(config) {
        return Object.assign(_get(StagedSprite.prototype.__proto__ || Object.getPrototypeOf(StagedSprite.prototype), "getDefaultConfig", this).call(this, config), {
            stages: [],
            startStage: null
        })
    }
}

export default StagedSprite;