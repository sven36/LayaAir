

class Behavior {
    constructor(obj, config) {
        this.target = obj,
            this.config = config,
            this.setup()
    }
    static create(obj, config) {
        return new this(obj, config)
    }
    static isInstanceOfBehavior(obj) {
        return obj.prototype instanceof Behavior
    }
    static applyFor(obj, behavior) {
        var callable = void 0
            , config = void 0;
        "function" == typeof behavior && (callable = behavior,
            config = {}),
            behavior.behavior && (callable = behavior.behavior,
                config = Object.assign({}, behavior)),
            Behavior.isInstanceOfBehavior(callable) ? callable.create(obj, config) : callable.call(obj, config)
    }
    setup() { }
}
export default Behavior;