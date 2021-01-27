import Condition from './Condition';
import Reward from './Reward';

class Trigger {
    static setupForAll(obj, triggers, rewards, conditions) {
        triggers && (Array.isArray(triggers) ? triggers : [triggers]).forEach(function (trigger) {
            Trigger.setup(obj, trigger, rewards, conditions)
        })
    }
    static setup(obj, trigger, rewards, conditions) {
        if ("function" != typeof trigger) {
            var callable = trigger.t;
            return delete trigger.t,
                callable.call(obj, Object.assign({}, trigger), function () {
                    Trigger.callTrigger(obj, rewards, conditions)
                })
        }
        trigger.call(obj, {}, function () {
            Trigger.callTrigger(obj, rewards, conditions)
        })
    }
    static callTrigger(obj, rewards, conditions) {
        conditions && !Condition.areSatisfied(obj, conditions) || Reward.applyAll(obj, rewards)
    }
    static hideOnEvent(behavior) {
        var _this = this;
        BaseBehaviors._createEventBehavior(this, behavior, function () {
            _this.hide()
        })
    }
}

export default Trigger;