import Trigger from '../Core/UniversalBehavior/Trigger';


class BaseBehaviors {
    static clickInstall() {
        this.app.setClickEvent(this)
    }
    static universalBehavior() {
        var _this = this;
        this.config._universalBehaviorFields.map(function (field) {
            return _this.config[field] || []
        }).forEach(function (behaviors) {
            return behaviors.forEach(function (behavior) {
                return Trigger.setupForAll(_this, behavior.t, behavior.r, behavior.c)
            })
        })
    }
}

export default BaseBehaviors;