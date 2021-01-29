import Condition from '../../Core/UniversalBehavior/Condition.js';

class Conditions {
    static visible() {
        return Conditions.values({
            visible: !0
        })
    }
    static invisible() {
        return Conditions.values({
            visible: !1
        })
    }
    static unlocked() {
        return Conditions.values({
            locked: !1
        })
    }
    static values(_values) {
        return {
            c: Conditions._values,
            values: _values
        }
    }
    static flags(_flags) {
        return {
            c: Conditions._playableFlagsValues,
            values: _flags
        }
    }
    static not(condition) {
        return {
            c: Conditions._not,
            condition: condition
        }
    }
    static _values(config) {
        return Condition.areValuesMatch(this, config.values)
    }
    static _playableFlagsValues(config) {
        return Condition.areValuesMatch(this.app.playableFlags, config.values)
    }

    static _not(config) {
        return !Condition.areSatisfied(this, config.condition)
    }

}

export default Conditions;