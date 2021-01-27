class Condition {
    static areSatisfied(obj) {
        var conditions = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []
            , _conditions = Array.isArray(conditions) ? conditions : [conditions];
        for (var i in _conditions)
            if (!Condition.isSatisfied(obj, _conditions[i]))
                return !1;
        return !0
    }
    static isSatisfied(obj, condition) {
        return "function" == typeof condition ? condition.call(obj, {}) : condition.c.call(obj, Object.assign({}, condition))
    }
    static areValuesMatch(obj, values) {
        if (!values)
            return !0;
        for (var key in values)
            if (void 0 === obj[key] || obj[key] !== values[key])
                return !1;
        return !0
    }
}
export default Condition;