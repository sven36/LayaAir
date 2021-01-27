class Reward {
    static applyAll(obj) {
        var rewards = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
        (Array.isArray(rewards) ? rewards : [rewards]).forEach(function (reward) {
            Reward.apply(obj, reward)
        })
    }
    static apply(obj, reward) {
        return "function" == typeof reward ? reward.call(obj, {}) : reward.r.call(obj, Object.assign({}, reward))
    }
    static isInstant(reward) {
        return !reward.nonInstant
    }
}
export default Reward;