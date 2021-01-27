class ObjectFactory {
    constructor(defaultClassConstructor, app) {
        this.defaultClassConstructor = defaultClassConstructor,
            this.app = app
    }
    create(config) {
        var classConstructor = config.class;
        classConstructor && this.isClassConstructorValid(classConstructor) || (classConstructor && this.isClassConstructorValid(classConstructor),
            classConstructor = this.getDefaultClassConstructor());
        var obj = new classConstructor(config, this.app);
        return this.setupEvents(obj),
            this.setupTapEvent(obj),
            obj
    }
    isClassConstructorValid(classConstructor) {
        return "function" == typeof classConstructor
    }
    getDefaultClassConstructor() {
        return this.defaultClassConstructor
    }
    setupEvents(obj) {
        var _this = this
            , handlers = {};
        obj.getDefaultEventHandlers && Object.assign(handlers, obj.getDefaultEventHandlers()),
            obj.getEventHandlers && Object.assign(handlers, obj.getEventHandlers());
        var _loop = function (eventName) {
            _this.createEventHandlers(handlers[eventName]).forEach(function (handler) {
                _this.setupEventHandler(obj, eventName, handler.handler, handler.method, handler.target)
            })
        };
        for (var eventName in handlers)
            _loop(eventName)
    }
    createEventHandlers(handler) {
        if ("object" !== (void 0 === handler ? "undefined" : _typeof(handler)))
            return [{
                handler: handler,
                method: this.app.config.eventHandlerDefaultMethod,
                target: this.createHandlerTarget()
            }];
        if (handler.handler)
            return [handler];
        var handlers = [];
        return handler.on && handlers.push({
            handler: handler.on,
            method: "on",
            target: this.createHandlerTarget(handler)
        }),
            handler.once && handlers.push({
                handler: handler.once,
                method: "once",
                target: this.createHandlerTarget(handler)
            }),
            handlers
    }
    setupEventHandler(obj, eventName, handler, method, target) {
        target[method](eventName, function () {
            handler.apply(obj, arguments)
        })
    }
    createHandlerTarget() {
        var handler = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return handler.target ? handler.target : this.app.eventEmitter
    }
    setupTapEvent(obj) {
        obj.config && obj.config.interactive && obj.onTap && obj.on("pointertap", obj.onTap)
    }
}

export default ObjectFactory;