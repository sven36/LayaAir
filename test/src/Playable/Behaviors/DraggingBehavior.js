import Behavior from '../Core/Behavior';

class DraggingBehavior extends Behavior {
    constructor(target, config) {
        this.target.interactive = !0;
        this.offsetDependent = config.offsetDependent;
        this.data = null;
        this.offset = {
            x: 0,
            y: 0
        };
        this.dragging = !1;
        this.handlers = {
            start: [],
            end: [],
            move: []
        };
        this.setupEvents();
    }
    static create(obj, behaviorConfig) {
        var config = Object.assign(DraggingBehavior.getDefaultConfig(), behaviorConfig);
        obj.draggingBehavior || (obj.draggingBehavior = function get(object, property, receiver) {
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
        }(DraggingBehavior.__proto__ || Object.getPrototypeOf(DraggingBehavior), "create", this).call(this, obj, config)),
            Object.keys(config.handlers).forEach(function (type) {
                obj.draggingBehavior.addHandler(type, config.handlers[type])
            })
    }
    setupEvents() {
        var _this2 = this;
        this.target.on("pointerdown", function (event) {
            return _this2.onDragStart(event)
        }),
            this.target.on("pointerup", function (event) {
                return _this2.onDragEnd(event)
            }),
            this.target.on("pointerupoutside", function (event) {
                return _this2.onDragEnd(event)
            }),
            this.target.on("pointermove", function (event) {
                return _this2.onDragMove(event)
            })
    }
    addHandler(type, handler) {
        var handlerCallable = "function" == typeof handler ? handler : this.target[handler];
        handlerCallable && this.handlers[type].push(handlerCallable)
    }
    onDragStart(event) {
        var _this3 = this;
        event.stopPropagation(),
            this.data = event.data;
        var _data$getLocalPositio = this.data.getLocalPosition(this.target)
            , x = _data$getLocalPositio.x
            , y = _data$getLocalPositio.y;
        this.offset = {
            x: x - this.target.pivot.x,
            y: y - this.target.pivot.y
        },
            this.dragging = !0,
            this.handlers.start.forEach(function (handler) {
                return handler.call(_this3.target, event)
            })
    }
    onDragEnd(event) {
        var _this4 = this;
        this.dragging && (this.dragging = !1,
            this.handlers.end.forEach(function (handler) {
                return handler.call(_this4.target, event)
            }))
    }
    onDragMove(event) {
        var _this5 = this;
        if (this.dragging) {
            var pos = this.data.getLocalPosition(this.target.parent);
            this.target.position = this.offsetDependent ? {
                x: pos.x - this.offset.x,
                y: pos.y - this.offset.y
            } : pos,
                this.handlers.move.forEach(function (handler) {
                    return handler.call(_this5.target, event)
                })
        }
    }
    getDefaultConfig() {
        return {
            offsetDependent: !1,
            handlers: {
                start: "onDragStart",
                end: "onDragEnd",
                move: "onDragMove"
            }
        }
    }
}

export default DraggingBehavior;