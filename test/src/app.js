(function r(arrObj, cache, arr) {
    function load(index, f) {
        if (!cache[index]) {
            if (!arrObj[index]) {
                var req = "function" == typeof require && require;
                if (!f && req)
                    return req(index, !0);
                if (u)
                    return u(index, !0);
                var a = new Error("Cannot find module '" + index + "'");
                throw a.code = "MODULE_NOT_FOUND",
                a
            }
            var modu = cache[index] = {
                exports: {}
            };
            arrObj[index][0].call(modu.exports, function(requirePath) {
                return load(arrObj[index][1][requirePath] || requirePath)
            }, modu, modu.exports, r, arrObj, cache, arr)
        }
        return cache[index].exports
    }
    for (var u = "function" == typeof require && require, i = 0; i < arr.length; i++)
        load(arr[i]);
    return load
})({
    1: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _BaseAnimations3 = _interopRequireDefault(require("./Playable/Animations/BaseAnimations"));
        _interopRequireDefault(require("./Playable/Core/Animation"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var Animations = function(_BaseAnimations) {
            function Animations() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Animations),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Animations.__proto__ || Object.getPrototypeOf(Animations)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Animations, _BaseAnimations3.default),
            Animations
        }();
        exports.default = Animations
    }
    , {
        "./Playable/Animations/BaseAnimations": 6,
        "./Playable/Core/Animation": 17
    }],
    2: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _BaseBehaviors2 = require("./Playable/Behaviors/BaseBehaviors"), _BaseBehaviors3 = (obj = _BaseBehaviors2) && obj.__esModule ? obj : {
            default: obj
        };
        var Behaviors = function(_BaseBehaviors) {
            function Behaviors() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Behaviors),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Behaviors.__proto__ || Object.getPrototypeOf(Behaviors)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Behaviors, _BaseBehaviors3.default),
            Behaviors
        }();
        exports.default = Behaviors
    }
    , {
        "./Playable/Behaviors/BaseBehaviors": 7
    }],
    3: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();

        function _possibleConstructorReturn(self, call) {
            if (!self)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call
        }
        var Application = function(_PIXI$Application) {
            function Application() {
                var _ret;
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Application);
                var is_webgl = PIXI.utils.isWebGLSupported();
                window.is_webgl = is_webgl;
                var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this, {
                    width: config.size[0],
                    height: config.size[1],
                    antialias: !1,
                    resolution: 1,
                    transparent: !0
                }));
                return _this.appendRenderView(),
                _this.eventEmitter = new PIXI.utils.EventEmitter,
                _possibleConstructorReturn(_ret = _this, _ret)
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Application, PIXI.Application),
            _createClass(Application, [{
                key: "run",
                value: function() {
                    this.showView()
                }
            }, {
                key: "emit",
                value: function() {
                    this.eventEmitter.emit.apply(this.eventEmitter, arguments)
                }
            }, {
                key: "on",
                value: function(event, callback) {
                    var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    this.eventEmitter.on(event, callback, context)
                }
            }, {
                key: "once",
                value: function(event, callback) {
                    var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    this.eventEmitter.once(event, callback, context)
                }
            }, {
                key: "off",
                value: function(event) {
                    var callback = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
                      , context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    this.eventEmitter.off(event, callback, context)
                }
            }, {
                key: "resizeApp",
                value: function(screenWidth, screenHeight) {
                    this.screenRatio = screenWidth / screenHeight,
                    this.width = this.origWidth,
                    this.height = this.origHeight,
                    config.crop && this.cropView(),
                    this.resizeView(screenWidth, screenHeight),
                    this.eventEmitter.emit("resize")
                }
            }, {
                key: "resizeView",
                value: function(screenWidth, screenHeight) {
                    this.renderer.resize(this.width, this.height);
                    var canvasWidthStyle = void 0
                      , canvasHeightStyle = void 0;
                    this.ratio > this.screenRatio ? (canvasHeightStyle = Math.round(screenWidth / this.ratio),
                    canvasWidthStyle = screenWidth) : (canvasWidthStyle = Math.round(screenHeight * this.ratio),
                    canvasHeightStyle = screenHeight),
                    Math.abs(canvasWidthStyle - screenWidth) < 3 && (canvasWidthStyle = screenWidth),
                    Math.abs(canvasHeightStyle - screenHeight) < 3 && (canvasHeightStyle = screenHeight),
                    this.renderer.view.style.height = canvasHeightStyle + "px",
                    this.renderer.view.style.width = canvasWidthStyle + "px",
                    this.renderer.view.style.left = Math.max((screenWidth - canvasWidthStyle) / 2, 0) + "px",
                    this.renderer.view.style.top = Math.max((screenHeight - canvasHeightStyle) / 2, 0) + "px"
                }
            }, {
                key: "cropView",
                value: function() {
                    var screenRatio = this.screenRatio
                      , origRatio = this.origWidth / this.origHeight
                      , minScreenRatio = config.size_min[0] / config.size_min[1];
                    this.isPortrait ? origRatio < screenRatio && (this.height = Math.floor(this.origWidth / (screenRatio < 1 / minScreenRatio ? screenRatio : 1 / minScreenRatio))) : screenRatio < origRatio && (this.width = Math.floor(this.origHeight * (minScreenRatio < screenRatio ? screenRatio : minScreenRatio)))
                }
            }, {
                key: "showView",
                value: function() {
                    var _this2 = this
                      , delay = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100;
                    setTimeout(function() {
                        _this2.view.className += " visible"
                    }, delay)
                }
            }, {
                key: "appendRenderView",
                value: function() {
                    document.body.appendChild(this.view)
                }
            }, {
                key: "finish",
                value: function() {
                    "undefined" != typeof playableFinished && playableFinished()
                }
            }, {
                key: "skipAd",
                value: function() {
                    this.isSkipLocked || (this.eventEmitter.emit("skipAd"),
                    this.lockSkipAd())
                }
            }, {
                key: "lockSkipAd",
                value: function() {
                    this.isSkipLocked = !0
                }
            }, {
                key: "setClickEvent",
                value: function(obj) {
                    obj.interactive = !0,
                    obj.on("pointertap", function(e) {
                        e.stopPropagation(),
                        "undefined" != typeof clickInstall && clickInstall()
                    })
                }
            }, {
                key: "getLandscapeRatio",
                value: function() {
                    return this.ratio < 1 ? 1 / this.ratio : this.ratio
                }
            }, {
                key: "ratioLess",
                value: function(ratio) {
                    return this.getLandscapeRatio() < RATIO[ratio.toUpperCase()]
                }
            }, {
                key: "origWidth",
                get: function() {
                    return config.adaptive && this.screenRatio < 1 ? config.size[1] : config.size[0]
                }
            }, {
                key: "origHeight",
                get: function() {
                    return config.adaptive && this.screenRatio < 1 ? config.size[0] : config.size[1]
                }
            }, {
                key: "ratio",
                get: function() {
                    return this.width / this.height
                }
            }, {
                key: "isPortrait",
                get: function() {
                    return this.ratio < 1
                }
            }, {
                key: "isLandscape",
                get: function() {
                    return !this.isPortrait
                }
            }]),
            Application
        }();
        exports.default = Application
    }
    , {}],
    4: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();
        require("../const"),
        require("../utils");
        var SuperApp = function() {
            function SuperApp(applicationClass) {
                var props = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, SuperApp),
                this.applicationClass = applicationClass,
                this.props = props
            }
            return _createClass(SuperApp, [{
                key: "init",
                value: function() {
                    var data = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.setIsIOS(),
                    window.is_adwords = "undefined" != typeof is_adwords,
                    this.app = new this.applicationClass(this.props),
                    data.before && data.before(),
                    this.isDapi || (this.resize(this.screenSize()),
                    this.addEventResize()),
                    this.app.run(),
                    this.addEventFirstAction(),
                    this
                }
            }, {
                key: "skipAd",
                value: function() {
                    this.app.skipAd()
                }
            }, {
                key: "setIsIOS",
                value: function() {
                    if (!window.is_ios && "boolean" != typeof window.is_ios) {
                        var nav = navigator.userAgent || navigator.vendor || window.opera;
                        window.is_ios = (/iPad|iPhone|iPod/.test(nav) || /Intel Mac/.test(nav)) && !window.MSStream
                    }
                }
            }, {
                key: "addEventFirstAction",
                value: function() {
                    function firstAction() {
                        window.removeEventListener("touchstart", firstAction),
                        window.removeEventListener("mousedown", firstAction),
                        "undefined" != typeof firstUserAction && firstUserAction()
                    }
                    window.addEventListener("touchstart", firstAction),
                    window.addEventListener("mousedown", firstAction)
                }
            }, {
                key: "addEventResize",
                value: function() {
                    var _this = this;
                    window.addEventListener("orientationchange", function() {
                        _this.resize(_this.screenSize())
                    }),
                    window.addEventListener("resize", function() {
                        _this.resize(_this.screenSize())
                    })
                }
            }, {
                key: "resize",
                value: function(screenSize) {
                    var _this2 = this;
                    this.isNotFirstResize ? (this.resizeTimeout && clearTimeout(this.resizeTimeout),
                    this.resizeTimeout = setTimeout(function() {
                        _this2.app.resizeApp(screenSize.width, screenSize.height)
                    }, 50)) : (this.isNotFirstResize = !0,
                    this.app.resizeApp(screenSize.width, screenSize.height))
                }
            }, {
                key: "screenSize",
                value: function() {
                    return {
                        width: document.body.clientWidth,
                        height: document.body.clientHeight
                    }
                }
            }, {
                key: "isDapi",
                get: function() {
                    return "undefined" != typeof dapi && void 0 !== dapi.getScreenSize
                }
            }]),
            SuperApp
        }();
        exports.default = SuperApp
    }
    , {
        "../const": 50,
        "../utils": 52
    }],
    5: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        exports.Events = {
            gameStart: "gameStart",
            gameWin: "gameWin",
            gameFail: "gameFail",
            tutorialStart: "tutorialStart",
            stageCar: "stageCar",
            stageCarMove: "stageCarMove",
            stageRain: "stageRain",
            stageElevator: "stageElevator",
            stageBulgar: "stageBulgar",
            stageHome: "stageHome",
            stageBasement: "stageBasement",
            stageCarEnd: "stageCarEnd",
            stageCarMoveEnd: "stageCarMoveEnd",
            stageRainEnd: "stageRainEnd",
            stageElevatorEnd: "stageElevatorEnd",
            stageBulgarEnd: "stageBulgarEnd",
            stageHomeEnd: "stageHomeEnd",
            stageBasementEnd: "stageBasementEnd",
            elevatorFall: "elevatorFall",
            elevatorFallEnd: "elevatorFallEnd",
            bulgarFall: "bulgarFall",
            bulgarFallEnd: "bulgarFallEnd",
            katrinFallEnd: "katrinFallEnd",
            katrinHomeEnd: "katrinHomeEnd"
        }
    }
    , {}],
    6: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj
        }
        : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
          , _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _Animation2 = _interopRequireDefault(require("../Core/Animation"))
          , _AnimationTimeline2 = _interopRequireDefault(require("../Core/AnimationTimeline"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value,
            obj
        }
        var BaseAnimations = function() {
            function BaseAnimations() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, BaseAnimations)
            }
            return _createClass(BaseAnimations, null, [{
                key: "alphaScaleShow",
                value: function(config) {
                    var startScale = config.startScale || {
                        x: .2 * this.scale.x,
                        y: .2 * this.scale.y
                    };
                    return _Animation2.default.create(this, Object.assign({
                        from: {
                            alpha: 0,
                            scale: startScale
                        },
                        to: {
                            alpha: this.config.alpha,
                            scale: {
                                x: this.scale.x,
                                y: this.scale.y
                            }
                        },
                        time: 350,
                        easing: "outBack"
                    }, config))
                }
            }, {
                key: "alphaScaleHide",
                value: function(config) {
                    return _Animation2.default.create(this, Object.assign({
                        from: {
                            alpha: this.config.alpha,
                            scale: {
                                x: this.scale.x,
                                y: this.scale.y
                            }
                        },
                        to: {
                            alpha: 0,
                            scale: {
                                x: 0,
                                y: 0
                            }
                        },
                        time: 300,
                        easing: "outQuad"
                    }, config))
                }
            }, {
                key: "alphaShow",
                value: function(config) {
                    return _Animation2.default.create(this, Object.assign({
                        from: {
                            alpha: 0
                        },
                        to: {
                            alpha: this.config.alpha
                        },
                        time: 300,
                        easing: "outQuad"
                    }, config))
                }
            }, {
                key: "alphaHide",
                value: function(config) {
                    return _Animation2.default.create(this, Object.assign({
                        from: {
                            alpha: this.config.alpha
                        },
                        to: {
                            alpha: 0
                        },
                        time: 300,
                        easing: "outQuad"
                    }, config))
                }
            }, {
                key: "pulse",
                value: function(config) {
                    var scale = this.scale.x;
                    return _Animation2.default.create(this, Object.assign({
                        from: {
                            scale: {
                                x: scale,
                                y: scale
                            }
                        },
                        to: {
                            scale: {
                                x: scale - .05,
                                y: scale - .05
                            }
                        },
                        pingPong: !0,
                        time: 1500,
                        loop: !0,
                        easing: "inOutQuad"
                    }, config))
                }
            }, {
                key: "moveFromDxDy",
                value: function(config) {
                    var _this = this
                      , paramName = BaseAnimations._createAnimationParamName("moveFromDxDyParam", this)
                      , startPosition = void 0;
                    return _Animation2.default.create(this, Object.assign({
                        from: _defineProperty({}, paramName, 1),
                        to: _defineProperty({}, paramName, 0),
                        on: {
                            start: function() {
                                startPosition = config.fromCurrentPosition ? (new PIXI.Point).copyFrom(_this.position) : _this.origPosition
                            },
                            update: function() {
                                config.dx && (_this.position.x = startPosition.x + config.dx * _this[paramName]),
                                config.dy && (_this.position.y = startPosition.y + config.dy * _this[paramName])
                            }
                        }
                    }, config))
                }
            }, {
                key: "moveToDxDy",
                value: function(config) {
                    var _this2 = this
                      , paramName = BaseAnimations._createAnimationParamName("moveToDxDyParam", this)
                      , startPosition = void 0;
                    return _Animation2.default.create(this, Object.assign({
                        from: _defineProperty({}, paramName, 0),
                        to: _defineProperty({}, paramName, 1),
                        on: {
                            start: function() {
                                startPosition = config.fromCurrentPosition ? (new PIXI.Point).copyFrom(_this2.position) : _this2.origPosition
                            },
                            update: function() {
                                config.dx && (_this2.position.x = startPosition.x + config.dx * _this2[paramName]),
                                config.dy && (_this2.position.y = startPosition.y + config.dy * _this2[paramName])
                            }
                        }
                    }, config))
                }
            }, {
                key: "moveToPosition",
                value: function(config) {
                    var _this3 = this
                      , paramName = BaseAnimations._createAnimationParamName("moveToPositionParam", this)
                      , position = void 0
                      , startPosition = void 0
                      , animation = _Animation2.default.create(this, Object.assign({
                        from: _defineProperty({}, paramName, 0),
                        to: _defineProperty({}, paramName, 1),
                        on: {
                            start: function() {
                                startPosition = config.fromCurrentPosition ? (new PIXI.Point).copyFrom(_this3.position) : _this3.origPosition,
                                position = _this3.positions[config.position].calculateFor(_this3)
                            },
                            update: function() {
                                _this3.position.x = startPosition.x + (position.x - startPosition.x) * _this3[paramName],
                                _this3.position.y = startPosition.y + (position.y - startPosition.y) * _this3[paramName]
                            }
                        }
                    }, config));
                    return config.noApplyPosition || animation.on("end", function() {
                        return _this3.applyPosition(config.position)
                    }),
                    animation
                }
            }, {
                key: "sequence",
                value: function(config) {
                    var _this4 = this
                      , images = [];
                    if (Array.isArray(config.images) || "object" !== _typeof(config.images))
                        images = config.images;
                    else if (config.images.frames)
                        for (var i = 0; i < config.images.frames.length; i++)
                            images.push(config.images.prefix + config.images.frames[i]);
                    else
                        for (var _i = 0; _i < config.images.count; _i++)
                            images.push(config.images.prefix + (_i + 1));
                    var framesCount = images.length
                      , startFrame = config.startFrame ? config.startFrame : 0
                      , currentFrame = startFrame;
                    images.forEach(function(image) {
                        utils.getTexture(image)
                    });
                    var animation = _Animation2.default.create(this, Object.assign({}, config, {
                        from: {
                            frameValue: 0
                        },
                        to: {
                            frameValue: 100 * framesCount - 1
                        }
                    }));
                    return animation.on("update", function() {
                        var number = (startFrame + Math.floor(_this4.frameValue / 100)) % framesCount;
                        currentFrame !== number && (currentFrame = number,
                        _this4.setTexture(utils.getTexture(images[currentFrame])))
                    }),
                    animation
                }
            }, {
                key: "timeline",
                value: function(config) {
                    var _this5 = this
                      , timeline = new _AnimationTimeline2.default;
                    return config.animations.forEach(function(nameAnimation) {
                        if ("string" == typeof nameAnimation && _this5.animations[nameAnimation])
                            timeline.add(_this5.animations[nameAnimation]);
                        else {
                            var animations = [];
                            nameAnimation.forEach(function(_nameAnimation) {
                                animations.push(_this5.animations[_nameAnimation])
                            }),
                            timeline.add(animations)
                        }
                    }),
                    timeline
                }
            }, {
                key: "_createAnimationParamName",
                value: function(prefix, obj) {
                    return obj.animations && "object" === _typeof(obj.animations) ? prefix + Object.keys(obj.animations).length : prefix
                }
            }]),
            BaseAnimations
        }();
        exports.default = BaseAnimations
    }
    , {
        "../Core/Animation": 17,
        "../Core/AnimationTimeline": 18
    }],
    7: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _Trigger = require("../Core/UniversalBehavior/Trigger"), _Trigger2 = (obj = _Trigger) && obj.__esModule ? obj : {
            default: obj
        };
        var BaseBehaviors = function() {
            function BaseBehaviors() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, BaseBehaviors)
            }
            return _createClass(BaseBehaviors, null, [{
                key: "clickInstall",
                value: function() {
                    this.app.setClickEvent(this)
                }
            }, {
                key: "universalBehavior",
                value: function() {
                    var _this = this;
                    this.config._universalBehaviorFields.map(function(field) {
                        return _this.config[field] || []
                    }).forEach(function(behaviors) {
                        return behaviors.forEach(function(behavior) {
                            return _Trigger2.default.setupForAll(_this, behavior.t, behavior.r, behavior.c)
                        })
                    })
                }
            }]),
            BaseBehaviors
        }();
        exports.default = BaseBehaviors
    }
    , {
        "../Core/UniversalBehavior/Trigger": 29
    }],
    8: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();
        var CircleEditPlot = function(_PIXI$Graphics) {
            function CircleEditPlot(data) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, CircleEditPlot);
                var _this = function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (CircleEditPlot.__proto__ || Object.getPrototypeOf(CircleEditPlot)).call(this));
                return _this.data = Object.assign(_this.getDefaultData(), data),
                _this.setupEvents(),
                _this.interactive = !0,
                _this.activePoint = null,
                _this.createPoints(),
                _this.updatePoints(),
                _this
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(CircleEditPlot, PIXI.Graphics),
            _createClass(CircleEditPlot, [{
                key: "createPoints",
                value: function() {
                    this.points = [{
                        x: this.data.position.x,
                        y: this.data.position.y
                    }, {
                        x: this.data.position.x + Math.cos(1) * this.data.radius,
                        y: this.data.position.y + Math.sin(1) * this.data.radius
                    }]
                }
            }, {
                key: "setupEvents",
                value: function() {
                    var _this2 = this;
                    document.addEventListener("keydown", function(event) {
                        "Enter" === event.key && _this2.dumpData()
                    }),
                    this.on("pointerdown", function(event) {
                        _this2.onPlotDragStart(event)
                    }),
                    this.on("pointerup", function(event) {
                        _this2.onPlotDragEnd(event)
                    }),
                    this.on("pointerupoutside", function(event) {
                        _this2.onPlotDragEnd(event)
                    }),
                    this.on("pointermove", function(event) {
                        _this2.onPlotDragMove(event)
                    })
                }
            }, {
                key: "drawBack",
                value: function() {
                    this.beginFill(38655, .25),
                    this.drawRect(-this.data.width / 2, -this.data.height / 2, this.data.width, this.data.height)
                }
            }, {
                key: "updatePoints",
                value: function() {
                    this.clear(),
                    this.drawBack(),
                    this.drawCircleShape(),
                    this.drawPoints()
                }
            }, {
                key: "drawCircleShape",
                value: function() {
                    this.beginFill(16711680, .25),
                    this.drawShape(new PIXI.Circle(this.points[0].x,this.points[0].y,this.getRadius()))
                }
            }, {
                key: "drawPoints",
                value: function() {
                    for (var i = 0; i < this.points.length; i++)
                        this.drawPoint(this.points[i])
                }
            }, {
                key: "drawPoint",
                value: function(point) {
                    this.activePoint === point ? this.beginFill(16777215, 1) : this.beginFill(65535, .5),
                    this.drawCircle(point.x, point.y, 3)
                }
            }, {
                key: "onPlotDragStart",
                value: function(event) {
                    this.activePoint && (this.dragPoint = !0)
                }
            }, {
                key: "onPlotDragMove",
                value: function(e) {
                    if (this.dragPoint) {
                        var pos = e.data.getLocalPosition(this)
                          , delta_x = this.activePoint.x - pos.x
                          , delta_y = this.activePoint.y - pos.y;
                        this.activePoint.x = pos.x,
                        this.activePoint.y = pos.y,
                        this.activePoint === this.points[0] && (this.points[1].x -= delta_x,
                        this.points[1].y -= delta_y)
                    } else
                        this.activePoint = this.findNearPoint(e.data.getLocalPosition(this), 15);
                    this.updatePoints()
                }
            }, {
                key: "onPlotDragEnd",
                value: function(e) {
                    this.dragPoint = !1
                }
            }, {
                key: "findNearPoint",
                value: function(point, maxDistance) {
                    for (var nearPoint = null, i = 0; i < this.points.length; i++) {
                        var dist = this.getDistanceBetween(point, this.points[i]);
                        maxDistance && maxDistance < dist || (nearPoint ? dist < this.getDistanceBetween(point, nearPoint) && (nearPoint = this.points[i]) : nearPoint = this.points[i])
                    }
                    return nearPoint
                }
            }, {
                key: "getDistanceBetween",
                value: function(p1, p2) {
                    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y))
                }
            }, {
                key: "dumpData",
                value: function() {}
            }, {
                key: "getRadius",
                value: function() {
                    return Math.round(this.getDistanceBetween(this.points[0], this.points[1]))
                }
            }, {
                key: "getDefaultData",
                value: function(data) {
                    return {
                        width: 1e3,
                        height: 1e3
                    }
                }
            }]),
            CircleEditPlot
        }();
        exports.default = CircleEditPlot
    }
    , {}],
    9: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _Behavior2 = require("../Core/Behavior"), _Behavior3 = (obj = _Behavior2) && obj.__esModule ? obj : {
            default: obj
        };
        var DraggingBehavior = function(_Behavior) {
            function DraggingBehavior(target, config) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, DraggingBehavior);
                var _this = function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (DraggingBehavior.__proto__ || Object.getPrototypeOf(DraggingBehavior)).call(this, target, config));
                return _this.target.interactive = !0,
                _this.offsetDependent = config.offsetDependent,
                _this.data = null,
                _this.offset = {
                    x: 0,
                    y: 0
                },
                _this.dragging = !1,
                _this.handlers = {
                    start: [],
                    end: [],
                    move: []
                },
                _this.setupEvents(),
                _this
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(DraggingBehavior, _Behavior3.default),
            _createClass(DraggingBehavior, null, [{
                key: "create",
                value: function(obj, behaviorConfig) {
                    var config = Object.assign(DraggingBehavior.getDefaultConfig(), behaviorConfig);
                    obj.draggingBehavior || (obj.draggingBehavior = function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(DraggingBehavior.__proto__ || Object.getPrototypeOf(DraggingBehavior), "create", this).call(this, obj, config)),
                    Object.keys(config.handlers).forEach(function(type) {
                        obj.draggingBehavior.addHandler(type, config.handlers[type])
                    })
                }
            }]),
            _createClass(DraggingBehavior, [{
                key: "setupEvents",
                value: function() {
                    var _this2 = this;
                    this.target.on("pointerdown", function(event) {
                        return _this2.onDragStart(event)
                    }),
                    this.target.on("pointerup", function(event) {
                        return _this2.onDragEnd(event)
                    }),
                    this.target.on("pointerupoutside", function(event) {
                        return _this2.onDragEnd(event)
                    }),
                    this.target.on("pointermove", function(event) {
                        return _this2.onDragMove(event)
                    })
                }
            }, {
                key: "addHandler",
                value: function(type, handler) {
                    var handlerCallable = "function" == typeof handler ? handler : this.target[handler];
                    handlerCallable && this.handlers[type].push(handlerCallable)
                }
            }, {
                key: "onDragStart",
                value: function(event) {
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
                    this.handlers.start.forEach(function(handler) {
                        return handler.call(_this3.target, event)
                    })
                }
            }, {
                key: "onDragEnd",
                value: function(event) {
                    var _this4 = this;
                    this.dragging && (this.dragging = !1,
                    this.handlers.end.forEach(function(handler) {
                        return handler.call(_this4.target, event)
                    }))
                }
            }, {
                key: "onDragMove",
                value: function(event) {
                    var _this5 = this;
                    if (this.dragging) {
                        var pos = this.data.getLocalPosition(this.target.parent);
                        this.target.position = this.offsetDependent ? {
                            x: pos.x - this.offset.x,
                            y: pos.y - this.offset.y
                        } : pos,
                        this.handlers.move.forEach(function(handler) {
                            return handler.call(_this5.target, event)
                        })
                    }
                }
            }], [{
                key: "getDefaultConfig",
                value: function() {
                    return {
                        offsetDependent: !1,
                        handlers: {
                            start: "onDragStart",
                            end: "onDragEnd",
                            move: "onDragMove"
                        }
                    }
                }
            }]),
            DraggingBehavior
        }();
        exports.default = DraggingBehavior
    }
    , {
        "../Core/Behavior": 20
    }],
    10: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _PolygonEditPlot2 = _interopRequireDefault(require("./PolygonEditPlot"))
          , _CircleEditPlot2 = _interopRequireDefault(require("./CircleEditPlot"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var HitAreaBehavior = function() {
            function HitAreaBehavior() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, HitAreaBehavior)
            }
            return _createClass(HitAreaBehavior, null, [{
                key: "hitAreaBehavior",
                value: function(behavior) {
                    var data = Object.assign(HitAreaBehavior._getDefaultHitAreaData(), this.config.hitAreaData);
                    if (data.visible || data.edit)
                        switch (data.type) {
                        case "circle":
                            this.addChild(new _CircleEditPlot2.default(data));
                            break;
                        case "polygon":
                            this.addChild(new _PolygonEditPlot2.default(data))
                        }
                    else
                        this.hitArea = HitAreaBehavior._createShape(data)
                }
            }, {
                key: "_createShape",
                value: function(data) {
                    switch (data.type) {
                    case "circle":
                        return new PIXI.Circle(data.position.x,data.position.y,data.radius);
                    case "polygon":
                        var _vertexes = data.vertexes.map(function(value, index) {
                            return value + (index % 2 == 0 ? data.position.x : data.position.y)
                        });
                        return new PIXI.Polygon(_vertexes)
                    }
                }
            }, {
                key: "_createGraphics",
                value: function(shape, data) {
                    var g = new PIXI.Graphics;
                    return g.beginFill(data.color, data.alpha),
                    g.drawShape(shape),
                    g
                }
            }, {
                key: "_getDefaultHitAreaData",
                value: function() {
                    return {
                        visible: !1,
                        alpha: .3,
                        color: 16711680,
                        type: "polygon",
                        position: {
                            x: 0,
                            y: 0
                        },
                        radius: 50,
                        vertexes: [0, 0, 0, 100, 100, 100, 100, 0]
                    }
                }
            }]),
            HitAreaBehavior
        }();
        exports.default = HitAreaBehavior
    }
    , {
        "./CircleEditPlot": 8,
        "./PolygonEditPlot": 12
    }],
    11: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _PolygonEditPlot2 = _interopRequireDefault(require("./PolygonEditPlot"))
          , _CircleEditPlot2 = _interopRequireDefault(require("./CircleEditPlot"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var MaskBehavior = function() {
            function MaskBehavior() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, MaskBehavior)
            }
            return _createClass(MaskBehavior, null, [{
                key: "maskBehavior",
                value: function(behavior) {
                    var data = Object.assign(MaskBehavior._getDefaultMaskData(), this.config.maskData);
                    if (data.visible || data.edit)
                        switch (data.type) {
                        case "circle":
                            this.addChild(new _CircleEditPlot2.default(data));
                            break;
                        case "polygon":
                            this.addChild(new _PolygonEditPlot2.default(data))
                        }
                    else {
                        var graphics = MaskBehavior._createGraphics(MaskBehavior._createShape(data), data);
                        this.addChild(graphics),
                        this.mask = graphics
                    }
                }
            }, {
                key: "_createShape",
                value: function(data) {
                    switch (data.type) {
                    case "circle":
                        return new PIXI.Circle(data.position.x,data.position.y,data.radius);
                    case "polygon":
                        var _vertexes = data.vertexes.map(function(value, index) {
                            return value + (index % 2 == 0 ? data.position.x : data.position.y)
                        });
                        return new PIXI.Polygon(_vertexes)
                    }
                }
            }, {
                key: "_createGraphics",
                value: function(shape, data) {
                    var g = new PIXI.Graphics;
                    return g.beginFill(data.color, data.alpha),
                    g.drawShape(shape),
                    g
                }
            }, {
                key: "_getDefaultMaskData",
                value: function() {
                    return {
                        visible: !1,
                        edit: !1,
                        alpha: .3,
                        color: 16711680,
                        type: "polygon",
                        position: {
                            x: 0,
                            y: 0
                        },
                        radius: 50,
                        vertexes: [0, 0, 0, 100, 100, 100, 100, 0]
                    }
                }
            }]),
            MaskBehavior
        }();
        exports.default = MaskBehavior
    }
    , {
        "./CircleEditPlot": 8,
        "./PolygonEditPlot": 12
    }],
    12: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();
        var PolygonEditPlot = function(_PIXI$Graphics) {
            function PolygonEditPlot(data) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, PolygonEditPlot);
                var _this = function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (PolygonEditPlot.__proto__ || Object.getPrototypeOf(PolygonEditPlot)).call(this));
                return _this.data = Object.assign(_this.getDefaultData(), data),
                _this.setupEvents(),
                _this.position = _this.data.position,
                _this.interactive = !0,
                _this.activePoint = null,
                _this.createLabel(),
                _this.createPoints(),
                _this.updatePoints(),
                _this
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(PolygonEditPlot, PIXI.Graphics),
            _createClass(PolygonEditPlot, [{
                key: "createPoints",
                value: function() {
                    this.points = [];
                    for (var i = 0; i < this.data.vertexes.length; i += 2)
                        this.points.push({
                            x: this.data.vertexes[i],
                            y: this.data.vertexes[i + 1]
                        })
                }
            }, {
                key: "createLabel",
                value: function() {
                    this.label = new PIXI.Text("",{
                        fontFamily: "Arial",
                        fontSize: 14,
                        fill: "black",
                        stroke: "white",
                        strokeThickness: 3
                    }),
                    this.addChild(this.label)
                }
            }, {
                key: "setupEvents",
                value: function() {
                    var _this2 = this;
                    document.addEventListener("keydown", function(event) {
                        var keyName = event.key;
                        "Enter" === keyName && _this2.dumpData(),
                        "Delete" === keyName && _this2.activePoint && _this2.deletePoint(_this2.activePoint)
                    }),
                    this.on("pointerdown", function(event) {
                        _this2.onPlotDragStart(event)
                    }),
                    this.on("pointerup", function(event) {
                        _this2.onPlotDragEnd(event)
                    }),
                    this.on("pointerupoutside", function(event) {
                        _this2.onPlotDragEnd(event)
                    }),
                    this.on("pointermove", function(event) {
                        _this2.onPlotDragMove(event)
                    })
                }
            }, {
                key: "drawBack",
                value: function() {
                    var min = {
                        x: 0,
                        y: 0
                    }
                      , max = {
                        x: 0,
                        y: 0
                    };
                    this.points[0] && (min.x = this.points[0].x,
                    min.y = this.points[0].y,
                    max.x = this.points[0].x,
                    max.y = this.points[0].y),
                    this.points.forEach(function(point) {
                        min.x = point.x < min.x ? point.x : min.x,
                        min.y = point.y < min.y ? point.y : min.y,
                        max.x = point.x > max.x ? point.x : max.x,
                        max.y = point.y > max.y ? point.y : max.y
                    }),
                    this.beginFill(38655, .25),
                    this.drawRect(min.x - 250, min.y - 250, max.x - min.x + 500, max.y - min.y + 500)
                }
            }, {
                key: "insertPointNearPoint",
                value: function(point, nearPoint) {
                    var index = this.points.indexOf(nearPoint);
                    if (this.points.length < 2)
                        this.points.push(point);
                    else {
                        var indexPrev = 0 === index ? this.points.length - 1 : index - 1
                          , indexNext = index === this.points.length - 1 ? 0 : index + 1
                          , prev = this.points[indexPrev]
                          , next = this.points[indexNext]
                          , insertIndex = 0;
                        this.getDistanceFromPointToLine(prev, nearPoint, this.cursorPoint) < this.getDistanceFromPointToLine(next, nearPoint, this.cursorPoint) ? (insertIndex = Math.max(index, indexPrev),
                        (0 === index && indexPrev === this.points.length - 1 || 0 === indexPrev && index === this.points.length - 1) && (insertIndex = 0)) : (insertIndex = Math.max(index, indexNext),
                        (0 === index && indexNext === this.points.length - 1 || 0 === indexNext && index === this.points.length - 1) && (insertIndex = 0)),
                        this.points.splice(insertIndex, 0, point)
                    }
                    this.updatePoints()
                }
            }, {
                key: "deletePoint",
                value: function(point) {
                    this.points = this.points.filter(function(_point) {
                        return _point !== point
                    }),
                    this.activePoint = null,
                    this.updatePoints()
                }
            }, {
                key: "updatePoints",
                value: function() {
                    this.clear(),
                    this.drawBack(),
                    this.drawPointsPolygon(),
                    this.drawPoints(),
                    this.drawLines()
                }
            }, {
                key: "drawPointsPolygon",
                value: function() {
                    this.beginFill(16711680, .25);
                    for (var vertexes = [], i = 0; i < this.points.length; i++)
                        vertexes.push(this.points[i].x, this.points[i].y);
                    this.drawShape(new PIXI.Polygon(vertexes))
                }
            }, {
                key: "drawPoints",
                value: function() {
                    for (var i = 0; i < this.points.length; i++)
                        this.drawPoint(this.points[i]);
                    this.endFill(),
                    this.drawLabel()
                }
            }, {
                key: "drawLines",
                value: function() {
                    if (this.cursorPoint) {
                        var point = this.findNearPoint(this.cursorPoint)
                          , index = this.points.indexOf(point)
                          , indexPrev = 0 === index ? this.points.length - 1 : index - 1
                          , indexNext = index === this.points.length - 1 ? 0 : index + 1
                          , prev = this.points[indexPrev]
                          , next = this.points[indexNext]
                          , distPrev = this.getDistanceFromPointToLine(prev, point, this.cursorPoint)
                          , distNext = this.getDistanceFromPointToLine(next, point, this.cursorPoint);
                        this.lineStyle(2, 16480238, 1),
                        this.moveTo(point.x, point.y),
                        distPrev < distNext ? this.lineTo(prev.x, prev.y) : this.lineTo(next.x, next.y),
                        this.endFill()
                    }
                }
            }, {
                key: "getDistanceFromPointToLine",
                value: function(p1, p2, p) {
                    return this.getScalar(p1, p2, p) < 0 ? this.getDistanceBetween(p2, p) : Math.abs((p2.y - p1.y) * p.x - (p2.x - p1.x) * p.y + p2.x * p1.y - p2.y * p1.x) / this.getDistanceBetween(p1, p2)
                }
            }, {
                key: "getScalar",
                value: function(p1, p2, p) {
                    var _p1_x = p1.x - p2.x
                      , _p1_y = p1.y - p2.y;
                    return (p.x - p2.x) * _p1_x + (p.y - p2.y) * _p1_y
                }
            }, {
                key: "drawLabel",
                value: function() {
                    this.label.visible = !1,
                    this.activePoint && (this.label.text = this.points.indexOf(this.activePoint) + ":  " + Math.round(this.activePoint.x) + " " + Math.round(this.activePoint.y),
                    this.label.position = {
                        x: this.activePoint.x + 10,
                        y: this.activePoint.y - 20
                    },
                    this.label.visible = !0)
                }
            }, {
                key: "drawPoint",
                value: function(point) {
                    this.activePoint === point ? this.beginFill(16777215, 1) : this.beginFill(65535, .5),
                    this.drawCircle(point.x, point.y, 3)
                }
            }, {
                key: "onPlotDragStart",
                value: function(event) {
                    var point = null;
                    if (this.activePoint)
                        point = this.activePoint;
                    else {
                        var pos = event.data.getLocalPosition(this);
                        point = {
                            x: pos.x,
                            y: pos.y
                        },
                        this.insertPointNearPoint(point, this.findNearPoint(point)),
                        this.activePoint = point
                    }
                    point && (this.dragPoint = !0)
                }
            }, {
                key: "onPlotDragMove",
                value: function(e) {
                    if (this.cursorPoint = e.data.getLocalPosition(this),
                    this.dragPoint) {
                        var pos = e.data.getLocalPosition(this);
                        this.activePoint.x = pos.x,
                        this.activePoint.y = pos.y
                    } else
                        this.activePoint = this.findNearPoint(e.data.getLocalPosition(this), 15);
                    this.updatePoints()
                }
            }, {
                key: "onPlotDragEnd",
                value: function(e) {
                    this.dragPoint = !1
                }
            }, {
                key: "findNearPoint",
                value: function(point, maxDistance) {
                    for (var nearPoint = null, i = 0; i < this.points.length; i++) {
                        var dist = this.getDistanceBetween(point, this.points[i]);
                        maxDistance && maxDistance < dist || (nearPoint ? dist < this.getDistanceBetween(point, nearPoint) && (nearPoint = this.points[i]) : nearPoint = this.points[i])
                    }
                    return nearPoint
                }
            }, {
                key: "getDistanceBetween",
                value: function(p1, p2) {
                    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y))
                }
            }, {
                key: "dumpData",
                value: function() {
                    for (var out = [], i = 0; i < this.points.length; i++)
                        out.push(Math.round(this.points[i].x), Math.round(this.points[i].y))
                }
            }, {
                key: "getDefaultData",
                value: function(data) {
                    return {}
                }
            }]),
            PolygonEditPlot
        }();
        exports.default = PolygonEditPlot
    }
    , {}],
    13: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _Condition = require("../../Core/UniversalBehavior/Condition"), _Condition2 = (obj = _Condition) && obj.__esModule ? obj : {
            default: obj
        };
        var Conditions = function() {
            function Conditions() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Conditions)
            }
            return _createClass(Conditions, null, [{
                key: "visible",
                value: function() {
                    return Conditions.values({
                        visible: !0
                    })
                }
            }, {
                key: "invisible",
                value: function() {
                    return Conditions.values({
                        visible: !1
                    })
                }
            }, {
                key: "unlocked",
                value: function() {
                    return Conditions.values({
                        locked: !1
                    })
                }
            }, {
                key: "values",
                value: function(_values) {
                    return {
                        c: Conditions._values,
                        values: _values
                    }
                }
            }, {
                key: "flags",
                value: function(_flags) {
                    return {
                        c: Conditions._playableFlagsValues,
                        values: _flags
                    }
                }
            }, {
                key: "not",
                value: function(condition) {
                    return {
                        c: Conditions._not,
                        condition: condition
                    }
                }
            }, {
                key: "_values",
                value: function(config) {
                    return _Condition2.default.areValuesMatch(this, config.values)
                }
            }, {
                key: "_playableFlagsValues",
                value: function(config) {
                    return _Condition2.default.areValuesMatch(this.app.playableFlags, config.values)
                }
            }, {
                key: "_not",
                value: function(config) {
                    return !_Condition2.default.areSatisfied(this, config.condition)
                }
            }]),
            Conditions
        }();
        exports.default = Conditions
    }
    , {
        "../../Core/UniversalBehavior/Condition": 26
    }],
    14: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _Scenario2 = _interopRequireDefault(require("../../Core/UniversalBehavior/Scenario"))
          , _Animation2 = _interopRequireDefault(require("../../Core/Animation"))
          , _Condition2 = _interopRequireDefault(require("../../Core/UniversalBehavior/Condition"))
          , _Reward2 = _interopRequireDefault(require("../../Core/UniversalBehavior/Reward"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var Rewards = function() {
            function Rewards() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Rewards)
            }
            return _createClass(Rewards, null, [{
                key: "emitEvent",
                value: function(event, payload) {
                    return {
                        r: Rewards._emitEvent,
                        event: event,
                        payload: payload
                    }
                }
            }, {
                key: "show",
                value: function() {
                    return {
                        r: Rewards._selfCall,
                        method: "show"
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    return {
                        r: Rewards._selfCall,
                        method: "hide"
                    }
                }
            }, {
                key: "set",
                value: function(values) {
                    return {
                        r: Rewards._selfSet,
                        values: values
                    }
                }
            }, {
                key: "setFlags",
                value: function(flags) {
                    return {
                        r: Rewards._exec,
                        flags: flags,
                        callable: function(config) {
                            Object.assign(this.app.playableFlags, config.flags),
                            this.app.emit("playableFlagsChanged", this.app.playableFlags)
                        }
                    }
                }
            }, {
                key: "incrementFlag",
                value: function(flag) {
                    return {
                        r: Rewards._exec,
                        flag: flag,
                        callable: function(config) {
                            this.app.playableFlags[config.flag]++,
                            this.app.emit("playableFlagsChanged", this.app.playableFlags)
                        }
                    }
                }
            }, {
                key: "lock",
                value: function() {
                    return {
                        r: Rewards._selfCall,
                        method: "lock"
                    }
                }
            }, {
                key: "unlock",
                value: function() {
                    return {
                        r: Rewards._selfCall,
                        method: "unlock"
                    }
                }
            }, {
                key: "applyPosition",
                value: function(position) {
                    return {
                        r: Rewards._selfCall,
                        method: "applyPosition",
                        args: [position]
                    }
                }
            }, {
                key: "setStage",
                value: function() {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
                        args[_key] = arguments[_key];
                    return {
                        r: Rewards._selfCall,
                        method: "setStage",
                        args: args
                    }
                }
            }, {
                key: "call",
                value: function(method) {
                    for (var _len2 = arguments.length, args = Array(1 < _len2 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
                        args[_key2 - 1] = arguments[_key2];
                    return {
                        r: Rewards._selfCall,
                        method: method,
                        args: args
                    }
                }
            }, {
                key: "playSound",
                value: function(sound, config) {
                    return {
                        r: Rewards._appCall,
                        method: "playSound",
                        args: [sound, config]
                    }
                }
            }, {
                key: "stopSound",
                value: function(sound) {
                    return {
                        r: Rewards._appCall,
                        method: "stopSound",
                        args: [sound]
                    }
                }
            }, {
                key: "playableFinish",
                value: function() {
                    return {
                        r: Rewards._appCall,
                        method: "finish"
                    }
                }
            }, {
                key: "playableRestart",
                value: function() {
                    return Rewards.emitEvent("playableRestart")
                }
            }, {
                key: "startAnimation",
                value: function(animation) {
                    return {
                        r: Rewards._exec,
                        animation: animation,
                        nonInstant: !0,
                        callable: function(config) {
                            return config.callback && this.animations[config.animation].once("end", config.callback),
                            this.animations[config.animation].reset().start()
                        }
                    }
                }
            }, {
                key: "stopAnimation",
                value: function(animation) {
                    return {
                        r: Rewards._exec,
                        animation: animation,
                        callable: function(config) {
                            this.animations[config.animation].stop()
                        }
                    }
                }
            }, {
                key: "stopAnimationLooping",
                value: function(animation) {
                    return {
                        r: Rewards._exec,
                        animation: animation,
                        callable: function(config) {
                            this.animations[config.animation].loop = !1
                        }
                    }
                }
            }, {
                key: "stopAnimationLoopingWithDelay",
                value: function(animation) {
                    return {
                        r: Rewards._exec,
                        animation: animation,
                        callable: function(config) {
                            this.animations[config.animation].loopWithDelay = !1,
                            this.animations[config.animation].isStarted || this.animations[config.animation].stop()
                        }
                    }
                }
            }, {
                key: "instant",
                value: function(config) {
                    return Object.assign({}, config, {
                        nonInstant: !1
                    })
                }
            }, {
                key: "startScenario",
                value: function() {
                    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
                        args[_key3] = arguments[_key3];
                    return {
                        r: Rewards._exec,
                        nonInstant: !0,
                        callable: function(config) {
                            var scenarioName = "string" == typeof args[0] ? args[0] : "noname" + Object.keys(this.scenarios).length
                              , scenarioConfig = null;
                            if (Array.isArray(args[0]) ? scenarioConfig = Object.assign({
                                rewards: args[0]
                            }, args[1]) : Array.isArray(args[1]) && (scenarioConfig = Object.assign({
                                rewards: args[1]
                            }, args[2])),
                            scenarioConfig && (this.scenarios[scenarioName] = new _Scenario2.default(this,scenarioConfig)),
                            this.scenarios[scenarioName])
                                return config.callback && this.scenarios[scenarioName].once("end", config.callback),
                                this.scenarios[scenarioName].start()
                        }
                    }
                }
            }, {
                key: "stopScenario",
                value: function(scenarioName) {
                    var interrupt = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                    return {
                        r: Rewards._exec,
                        callable: function() {
                            this.scenarios[scenarioName] && this.scenarios[scenarioName].stop(interrupt)
                        }
                    }
                }
            }, {
                key: "resetScenario",
                value: function(scenarioName) {
                    return {
                        r: Rewards._exec,
                        callable: function() {
                            this.scenarios[scenarioName] && this.scenarios[scenarioName].reset()
                        }
                    }
                }
            }, {
                key: "wait",
                value: function(time) {
                    return {
                        r: Rewards._exec,
                        nonInstant: !0,
                        callable: function(config) {
                            return _Animation2.default.create(this, {
                                time: time,
                                expire: !0,
                                on: config.callback ? {
                                    end: config.callback
                                } : null
                            }).start()
                        }
                    }
                }
            }, {
                key: "if",
                value: function(conditions, rewardsTrue, rewardsFalse) {
                    return {
                        r: Rewards._exec,
                        nonInstant: !0,
                        callable: function(config) {
                            var callback = config.callback
                              , rewards = _Condition2.default.areSatisfied(this, conditions) ? rewardsTrue : rewardsFalse;
                            _Reward2.default.isInstant(rewards) ? (_Reward2.default.applyAll(this, rewards),
                            callback && callback()) : _Reward2.default.applyAll(this, Object.assign({}, rewards, {
                                callback: callback
                            }))
                        }
                    }
                }
            }, {
                key: "analyticsRetry",
                value: function() {
                    return {
                        r: Rewards._exec,
                        callable: function() {
                            this.app.analytics.retry()
                        }
                    }
                }
            }, {
                key: "analyticsFinalWin",
                value: function(config) {
                    return {
                        r: Rewards._exec,
                        callable: function() {
                            this.app.analytics.finalWin()
                        }
                    }
                }
            }, {
                key: "analyticsFinalLose",
                value: function(config) {
                    return {
                        r: Rewards._exec,
                        callable: function() {
                            this.app.analytics.finalLose()
                        }
                    }
                }
            }, {
                key: "log",
                value: function() {
                    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++)
                        args[_key4] = arguments[_key4];
                    return {
                        r: Rewards._exec,
                        callable: function() {
                            var _console;
                            (_console = console).log.apply(_console, args)
                        }
                    }
                }
            }, {
                key: "_selfEmitEvent",
                value: function(config) {
                    this.emit(config.event)
                }
            }, {
                key: "_emitEvent",
                value: function(config) {
                    this.app.emit(config.event, config.payload ? config.payload : this)
                }
            }, {
                key: "_selfSet",
                value: function(config) {
                    Rewards._set(this, config.values)
                }
            }, {
                key: "_set",
                value: function(obj, values) {
                    Object.assign(obj, values)
                }
            }, {
                key: "_selfCall",
                value: function(config) {
                    Rewards._call(this, config.method, config.args)
                }
            }, {
                key: "_appCall",
                value: function(config) {
                    Rewards._call(this.app, config.method, config.args)
                }
            }, {
                key: "_call",
                value: function(obj, method) {
                    var args = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
                    obj[method].apply(obj, function(arr) {
                        if (Array.isArray(arr)) {
                            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
                                arr2[i] = arr[i];
                            return arr2
                        }
                        return Array.from(arr)
                    }(args))
                }
            }, {
                key: "_exec",
                value: function(config) {
                    return config.callable.call(this, config)
                }
            }]),
            Rewards
        }();
        exports.default = Rewards
    }
    , {
        "../../Core/Animation": 17,
        "../../Core/UniversalBehavior/Condition": 26,
        "../../Core/UniversalBehavior/Reward": 27,
        "../../Core/UniversalBehavior/Scenario": 28
    }],
    15: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _Condition = require("../../Core/UniversalBehavior/Condition"), _Condition2 = (obj = _Condition) && obj.__esModule ? obj : {
            default: obj
        };
        var Triggers = function() {
            function Triggers() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Triggers)
            }
            return _createClass(Triggers, null, [{
                key: "onEvent",
                value: function(event, data) {
                    return {
                        t: Triggers._eventHandler,
                        event: event,
                        data: data
                    }
                }
            }, {
                key: "onceEvent",
                value: function(event, data) {
                    return {
                        t: Triggers._eventHandler,
                        event: event,
                        data: data,
                        method: "once"
                    }
                }
            }, {
                key: "onStart",
                value: function() {
                    return Triggers.onEvent("playableStart")
                }
            }, {
                key: "onRestart",
                value: function() {
                    return Triggers.onEvent("playableRestart")
                }
            }, {
                key: "onSkip",
                value: function() {
                    return Triggers.onEvent("skipAd")
                }
            }, {
                key: "onceSkip",
                value: function() {
                    return Triggers.onceEvent("skipAd")
                }
            }, {
                key: "onceSoundReady",
                value: function() {
                    return Triggers.onceEvent("soundReady")
                }
            }, {
                key: "onFlagsChanged",
                value: function(flags) {
                    return {
                        t: Triggers._eventHandler,
                        event: "playableFlagsChanged",
                        data: flags
                    }
                }
            }, {
                key: "onTap",
                value: function() {
                    return {
                        t: Triggers._interactiveSelfEventHandler,
                        event: "pointertap"
                    }
                }
            }, {
                key: "onPointerdown",
                value: function() {
                    return {
                        t: Triggers._interactiveSelfEventHandler,
                        event: "pointerdown"
                    }
                }
            }, {
                key: "onAnimationEvent",
                value: function(animation, event) {
                    return {
                        t: Triggers._animationEventHandler,
                        event: event,
                        animation: animation
                    }
                }
            }, {
                key: "onAnimationStart",
                value: function(animation) {
                    return this.onAnimationEvent(animation, "start")
                }
            }, {
                key: "onAnimationEnd",
                value: function(animation) {
                    return this.onAnimationEvent(animation, "end")
                }
            }, {
                key: "onScenarioStart",
                value: function(scenario) {
                    return {
                        t: Triggers._scenarioEventHandler,
                        event: "start",
                        scenario: scenario
                    }
                }
            }, {
                key: "onScenarioEnd",
                value: function(scenario) {
                    return {
                        t: Triggers._scenarioEventHandler,
                        event: "end",
                        scenario: scenario
                    }
                }
            }, {
                key: "_interactiveSelfEventHandler",
                value: function(config, callback) {
                    this.interactive = !0,
                    Triggers._selfEventHandler.call(this, Object.assign({}, config), callback)
                }
            }, {
                key: "_selfEventHandler",
                value: function(config, callback) {
                    Triggers._eventHandler.call(this, Object.assign({}, config, {
                        target: this
                    }), callback)
                }
            }, {
                key: "_animationEventHandler",
                value: function(config, callback) {
                    Triggers._eventHandler.call(this, Object.assign({}, config, {
                        target: this.animations[config.animation]
                    }), callback)
                }
            }, {
                key: "_scenarioEventHandler",
                value: function(config, callback) {
                    Triggers._eventHandler.call(this, Object.assign({}, config, {
                        target: this.scenarios[config.scenario]
                    }), callback)
                }
            }, {
                key: "_eventHandler",
                value: function(config, callback) {
                    var _this = this;
                    (config.target ? config.target : this.app)[config.method ? config.method : "on"](config.event, function(obj) {
                        ("function" != typeof config.data || config.data.call(_this, obj)) && _Condition2.default.areValuesMatch(obj, config.data) && callback(obj)
                    })
                }
            }]),
            Triggers
        }();
        exports.default = Triggers
    }
    , {
        "../../Core/UniversalBehavior/Condition": 26
    }],
    16: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();
        var Analytics = function() {
            function Analytics() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Analytics),
                this.eventEmitter = new PIXI.utils.EventEmitter
            }
            return _createClass(Analytics, [{
                key: "send",
                value: function(type) {
                    var arg = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                    this.emit("send", type, arg)
                }
            }, {
                key: "startLevel",
                value: function() {
                    this.emit("startLevel")
                }
            }, {
                key: "endLevel",
                value: function() {
                    this.emit("endLevel")
                }
            }, {
                key: "midway",
                value: function() {
                    this.emit("midway")
                }
            }, {
                key: "interaction",
                value: function() {
                    this.emit("interaction")
                }
            }, {
                key: "retry",
                value: function() {
                    this.emit("retry")
                }
            }, {
                key: "finalWin",
                value: function() {
                    this.emit("final", "win")
                }
            }, {
                key: "finalLose",
                value: function() {
                    this.emit("final", "lose")
                }
            }, {
                key: "finalTimer",
                value: function() {
                    this.emit("final", "timer")
                }
            }, {
                key: "finalFake",
                value: function() {
                    this.emit("final", "fake")
                }
            }, {
                key: "emit",
                value: function() {
                    this.eventEmitter.emit.apply(this.eventEmitter, arguments)
                }
            }, {
                key: "on",
                value: function(event, callback) {
                    var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    this.eventEmitter.on(event, callback, context)
                }
            }, {
                key: "once",
                value: function(event, callback) {
                    var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    this.eventEmitter.once(event, callback, context)
                }
            }]),
            Analytics
        }();
        exports.default = Analytics
    }
    , {}],
    17: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();
        var Animation = function() {
            function Animation() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Animation)
            }
            return _createClass(Animation, null, [{
                key: "create",
                value: function(obj, config) {
                    if ("function" == typeof config)
                        return config.call(obj, {});
                    if (config.creator) {
                        var callable = config.creator;
                        return delete config.creator,
                        callable.call(obj, Object.assign({}, config))
                    }
                    var tween = PIXI.tweenManager.createTween(obj, config);
                    return tween.from(config.from),
                    !window.is_webgl && config.to && void 0 !== config.to.alpha && "outBack" === config.easing && tween.on("update", function() {
                        1 < obj.alpha && (obj.alpha = 1)
                    }),
                    config.startTime && 0 < config.startTime && tween.on("start", function() {
                        tween.update(config.startTime)
                    }),
                    config.loopWithDelay && 0 < config.loopWithDelay && (tween.on("start", function() {
                        tween.loopWithDelay = !0
                    }),
                    tween.on("end", function() {
                        tween.loopWithDelay && (tween.delay = config.loopWithDelay,
                        tween.reset().start())
                    })),
                    config.autoStart ? tween.start() : config.startAfter && obj.animations[config.startAfter] ? obj.animations[config.startAfter].on("end", function() {
                        tween.start()
                    }) : config.startWith && obj.animations[config.startWith] && obj.animations[config.startWith].on("start", function() {
                        tween.start()
                    }),
                    tween
                }
            }, {
                key: "removeAll",
                value: function(obj) {
                    for (var tweens = PIXI.tweenManager.getTweensForTarget(obj), i = 0; i < tweens.length; i++) {
                        var tween = tweens[i];
                        tween.stop(),
                        PIXI.tweenManager.removeTween(tween)
                    }
                }
            }]),
            Animation
        }();
        exports.default = Animation
    }
    , {}],
    18: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _Animation = require("./Animation");
        (obj = _Animation) && obj.__esModule;
        var AnimationTimeline = function() {
            function AnimationTimeline(options) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, AnimationTimeline),
                this.animations = [],
                this.options = options,
                this.eventEmitter = new PIXI.utils.EventEmitter
            }
            return _createClass(AnimationTimeline, [{
                key: "add",
                value: function(animations) {
                    var _this = this
                      , animationNumber = this.animations.length;
                    animations = Array.isArray(animations) ? animations : [animations],
                    this.animations.push(animations),
                    animations[0].on("start", function() {
                        _this.emit("start" + animationNumber),
                        0 == animationNumber && _this.emit("start")
                    });
                    var counter = 0;
                    return animations.forEach(function(animation) {
                        animation.on("end", function() {
                            ++counter < animations.length || (_this.emit("end" + animationNumber),
                            _this.animations.length - 1 == animationNumber ? _this.emit("end") : _this.startAnimation(animationNumber + 1))
                        })
                    }),
                    this
                }
            }, {
                key: "startAnimation",
                value: function(number) {
                    var animations = this.animations[number];
                    if (animations)
                        return animations.forEach(function(animation) {
                            animation.start()
                        }),
                        this
                }
            }, {
                key: "start",
                value: function() {
                    return this.startAnimation(0),
                    this
                }
            }, {
                key: "resetAnimation",
                value: function(animations) {
                    return animations.forEach(function(animation) {
                        animation.stop(),
                        animation.reset()
                    }),
                    this
                }
            }, {
                key: "stopAnimation",
                value: function(animations) {
                    return animations.forEach(function(animation) {
                        animation.stop()
                    }),
                    this
                }
            }, {
                key: "reset",
                value: function() {
                    for (var i = this.animations.length - 1; 0 <= i; i--)
                        this.resetAnimation(this.animations[i]);
                    return this
                }
            }, {
                key: "stop",
                value: function() {
                    var _this2 = this;
                    return this.animations.forEach(function(animation) {
                        _this2.stopAnimation(animation)
                    }),
                    this
                }
            }, {
                key: "emit",
                value: function() {
                    return this.eventEmitter.emit.apply(this.eventEmitter, arguments),
                    this
                }
            }, {
                key: "on",
                value: function(event, callback) {
                    var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.eventEmitter.on(event, callback, context),
                    this
                }
            }, {
                key: "once",
                value: function(event, callback) {
                    var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.eventEmitter.once(event, callback, context),
                    this
                }
            }, {
                key: "off",
                value: function(event) {
                    return event ? this.eventEmitter.removeListener(event) : this.eventEmitter.removeAllListeners(),
                    this
                }
            }]),
            AnimationTimeline
        }();
        exports.default = AnimationTimeline
    }
    , {
        "./Animation": 17
    }],
    19: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
                var parent = Object.getPrototypeOf(object);
                return null === parent ? void 0 : get(parent, property, receiver)
            }
            if ("value"in desc)
                return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0
        }
          , _Application2 = _interopRequireDefault(require("../../Core/Application"))
          , _Sprite2 = _interopRequireDefault(require("./Sprite"))
          , _ObjectFactory2 = _interopRequireDefault(require("./ObjectFactory"))
          , _Sound2 = _interopRequireDefault(require("./Sound"))
          , _Analytics2 = _interopRequireDefault(require("./Analytics"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var Application = function(_BaseApplication) {
            function Application(data) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Application);
                var _this = function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this));
                return _this.config = Object.assign(_this.getDefaultConfig(data.config), data.config),
                _this.playableFlags = {},
                _this.spriteFactory = new _ObjectFactory2.default(_Sprite2.default,_this),
                _this.createSprites(data.config.sprites),
                _this.sounds = new _Sound2.default(_this),
                _this.analytics = new _Analytics2.default,
                _this
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Application, _Application2.default),
            _createClass(Application, [{
                key: "playSound",
                value: function(name, config) {
                    this.sounds.play(name, config)
                }
            }, {
                key: "stopSound",
                value: function(name) {
                    this.sounds.stop(name)
                }
            }, {
                key: "createSprites",
                value: function(config) {
                    var _this2 = this;
                    config.forEach(function(config) {
                        _this2.stage.addChild(_this2.spriteFactory.create(config))
                    })
                }
            }, {
                key: "onResize",
                value: function() {
                    this.stage.children.forEach(function(child) {
                        "function" == typeof child.onResize && child.onResize()
                    })
                }
            }, {
                key: "run",
                value: function() {
                    var _this3 = this;
                    _get(Application.prototype.__proto__ || Object.getPrototypeOf(Application.prototype), "run", this).call(this),
                    this.ticker.add(function() {
                        PIXI.tweenManager.update(_this3.ticker.elapsedMS < 200 ? _this3.ticker.elapsedMS : 0)
                    }),
                    this.eventEmitter.on("resize", function() {
                        _this3.onResize()
                    }),
                    this.onResize(),
                    this.eventEmitter.emit("playableStart")
                }
            }, {
                key: "finish",
                value: function() {
                    this.eventEmitter.emit("playableFinish"),
                    _get(Application.prototype.__proto__ || Object.getPrototypeOf(Application.prototype), "finish", this).call(this)
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    return {
                        eventHandlerDefaultMethod: "on",
                        soundVolume: .25,
                        spriteDefaultAnchor: {
                            x: .5,
                            y: .5
                        },
                        sprites: []
                    }
                }
            }]),
            Application
        }();
        exports.default = Application
    }
    , {
        "../../Core/Application": 3,
        "./Analytics": 16,
        "./ObjectFactory": 21,
        "./Sound": 23,
        "./Sprite": 24
    }],
    20: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();
        var Behavior = function() {
            function Behavior(obj, config) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Behavior),
                this.target = obj,
                this.config = config,
                this.setup()
            }
            return _createClass(Behavior, null, [{
                key: "create",
                value: function(obj, config) {
                    return new this(obj,config)
                }
            }, {
                key: "isInstanceOfBehavior",
                value: function(obj) {
                    return obj.prototype instanceof Behavior
                }
            }]),
            _createClass(Behavior, [{
                key: "setup",
                value: function() {}
            }], [{
                key: "applyFor",
                value: function(obj, behavior) {
                    var callable = void 0
                      , config = void 0;
                    "function" == typeof behavior && (callable = behavior,
                    config = {}),
                    behavior.behavior && (callable = behavior.behavior,
                    config = Object.assign({}, behavior)),
                    Behavior.isInstanceOfBehavior(callable) ? callable.create(obj, config) : callable.call(obj, config)
                }
            }]),
            Behavior
        }();
        exports.default = Behavior
    }
    , {}],
    21: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj
        }
        : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
          , _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();
        var ObjectFactory = function() {
            function ObjectFactory(defaultClassConstructor, app) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, ObjectFactory),
                this.defaultClassConstructor = defaultClassConstructor,
                this.app = app
            }
            return _createClass(ObjectFactory, [{
                key: "create",
                value: function(config) {
                    var classConstructor = config.class;
                    classConstructor && this.isClassConstructorValid(classConstructor) || (classConstructor && this.isClassConstructorValid(classConstructor),
                    classConstructor = this.getDefaultClassConstructor());
                    var obj = new classConstructor(config,this.app);
                    return this.setupEvents(obj),
                    this.setupTapEvent(obj),
                    obj
                }
            }, {
                key: "isClassConstructorValid",
                value: function(classConstructor) {
                    return "function" == typeof classConstructor
                }
            }, {
                key: "getDefaultClassConstructor",
                value: function() {
                    return this.defaultClassConstructor
                }
            }, {
                key: "setupEvents",
                value: function(obj) {
                    var _this = this
                      , handlers = {};
                    obj.getDefaultEventHandlers && Object.assign(handlers, obj.getDefaultEventHandlers()),
                    obj.getEventHandlers && Object.assign(handlers, obj.getEventHandlers());
                    var _loop = function(eventName) {
                        _this.createEventHandlers(handlers[eventName]).forEach(function(handler) {
                            _this.setupEventHandler(obj, eventName, handler.handler, handler.method, handler.target)
                        })
                    };
                    for (var eventName in handlers)
                        _loop(eventName)
                }
            }, {
                key: "createEventHandlers",
                value: function(handler) {
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
            }, {
                key: "setupEventHandler",
                value: function(obj, eventName, handler, method, target) {
                    target[method](eventName, function() {
                        handler.apply(obj, arguments)
                    })
                }
            }, {
                key: "createHandlerTarget",
                value: function() {
                    var handler = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return handler.target ? handler.target : this.app.eventEmitter
                }
            }, {
                key: "setupTapEvent",
                value: function(obj) {
                    obj.config && obj.config.interactive && obj.onTap && obj.on("pointertap", obj.onTap)
                }
            }]),
            ObjectFactory
        }();
        exports.default = ObjectFactory
    }
    , {}],
    22: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();
        var Position = function(_PIXI$Point) {
            function Position(data) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Position);
                var _this = function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Position.__proto__ || Object.getPrototypeOf(Position)).call(this));
                return _this.data = Object.assign(Position.getDefaultData(), data),
                _this
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Position, PIXI.Point),
            _createClass(Position, [{
                key: "calculateFor",
                value: function(object) {
                    return object.parent && (this.applyAlign(object),
                    this.applyOffset(),
                    this.data.ignoreAnchor || this.applyObjectSize(object),
                    object.parent.anchor && this.applyObjectParentSize(object.parent),
                    this.data.roundPosition && this.round()),
                    this.clone()
                }
            }, {
                key: "applyAlign",
                value: function(object) {
                    var parentSize = this.getParentSize(object)
                      , align = this.data.centered ? {
                        x: .5,
                        y: .5
                    } : this.data.align
                      , point = new PIXI.Point((parentSize.width - object.origWidth) * align.x,(parentSize.height - object.origHeight) * align.y);
                    this.data.absolute && (point = object.parent.toLocal(point)),
                    this.copyFrom(point)
                }
            }, {
                key: "getParentSize",
                value: function(object) {
                    return this.data.absolute ? {
                        width: object.app.width,
                        height: object.app.height
                    } : {
                        width: object.parent.origWidth,
                        height: object.parent.origHeight
                    }
                }
            }, {
                key: "applyOffset",
                value: function() {
                    this.x += this.data.x,
                    this.y += this.data.y
                }
            }, {
                key: "applyObjectSize",
                value: function(object) {
                    this.x += object.anchor.x * object.origWidth,
                    this.y += object.anchor.y * object.origHeight
                }
            }, {
                key: "applyObjectParentSize",
                value: function(parent) {
                    this.x -= parent.origWidth * parent.anchor.x,
                    this.y -= parent.origHeight * parent.anchor.y
                }
            }, {
                key: "round",
                value: function() {
                    this.x = Math.round(this.x),
                    this.y = Math.round(this.y)
                }
            }], [{
                key: "createPositionsFromConfig",
                value: function(config) {
                    var positions = {};
                    for (var key in config)
                        "position" === key.substr(0, 8) && (positions[Position.getPositionNameFromKey(key)] = "string" == typeof config[key] ? positions[Position.getPositionNameFromKey(config[key])] : new Position(config[key]));
                    return positions[Position.DEFAULT_NAME] || (positions[Position.DEFAULT_NAME] = new Position),
                    positions[Position.PORTRAIT_NAME] || (positions[Position.PORTRAIT_NAME] = positions[Position.DEFAULT_NAME]),
                    positions
                }
            }, {
                key: "getPositionNameFromKey",
                value: function(key) {
                    var name = key.substr(9);
                    return name.length ? name : Position.DEFAULT_NAME
                }
            }, {
                key: "getDefaultData",
                value: function() {
                    return {
                        absolute: !1,
                        align: {
                            x: 0,
                            y: 0
                        },
                        centered: !1,
                        roundPosition: !1,
                        x: 0,
                        y: 0
                    }
                }
            }, {
                key: "DEFAULT_NAME",
                get: function() {
                    return "default"
                }
            }, {
                key: "PORTRAIT_NAME",
                get: function() {
                    return "portrait"
                }
            }]),
            Position
        }();
        exports.default = Position
    }
    , {}],
    23: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();
        var Sound = function() {
            function Sound(app) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Sound),
                this.app = app,
                this.ready = !1,
                void 0 !== window.b64 && 0 !== Object.keys(window.b64).length && this.loadSounds()
            }
            return _createClass(Sound, [{
                key: "loadSounds",
                value: function() {
                    var _this = this;
                    try {
                        PIXI.sound.volumeAll = this.app.config.soundVolume,
                        PIXI.Loader.shared.add(this._getSoundsMap()),
                        PIXI.Loader.shared.onError.add(function(err) {}),
                        PIXI.Loader.shared.load(function(loader, resources) {
                            _this.ready = !0,
                            _this.app.emit("soundReady")
                        })
                    } catch (e) {}
                }
            }, {
                key: "play",
                value: function(name, config) {
                    if (this.ready)
                        try {
                            PIXI.sound.find(name).play(config)
                        } catch (e) {}
                }
            }, {
                key: "stop",
                value: function(name) {
                    if (this.ready)
                        try {
                            PIXI.sound.find(name).stop()
                        } catch (e) {}
                }
            }, {
                key: "mute",
                value: function() {
                    if (this.ready)
                        try {
                            PIXI.sound.muteAll()
                        } catch (e) {}
                }
            }, {
                key: "getSound",
                value: function(name) {
                    if (this.ready)
                        try {
                            return PIXI.sound.find(name)
                        } catch (e) {}
                }
            }, {
                key: "unmute",
                value: function() {
                    if (this.ready)
                        try {
                            PIXI.sound.unmuteAll()
                        } catch (e) {}
                }
            }, {
                key: "toggleMute",
                value: function() {
                    if (this.ready)
                        try {
                            PIXI.sound.toggleMuteAll()
                        } catch (e) {}
                }
            }, {
                key: "_getSoundsMap",
                value: function() {
                    return Object.keys(window.b64).map(function(key) {
                        return {
                            name: key,
                            url: window.b64[key].src
                        }
                    })
                }
            }]),
            Sound
        }();
        exports.default = Sound
    }
    , {}],
    24: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _Animation2 = _interopRequireDefault(require("./Animation"))
          , _Behavior2 = _interopRequireDefault(require("./Behavior"))
          , _Position2 = _interopRequireDefault(require("./Position"))
          , _BaseBehaviors2 = _interopRequireDefault(require("../Behaviors/BaseBehaviors"))
          , _Scenario2 = _interopRequireDefault(require("./UniversalBehavior/Scenario"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var Sprite = function(_PIXI$Sprite) {
            function Sprite(config, app) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Sprite);
                var _this = function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this));
                return _this.app = app,
                _this.config = Object.assign(_this.getDefaultConfig(config), config),
                _this.name = _this.config.name,
                _this.setup(),
                _this
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Sprite, PIXI.Sprite),
            _createClass(Sprite, [{
                key: "setup",
                value: function() {
                    var _this2 = this;
                    this.on("added", function() {
                        _this2.applyPosition()
                    }),
                    this.on("childAdded", this.linkChild),
                    this.setupPIXIAttributes(),
                    this.setupTexture(),
                    this.createSprites(),
                    this.setupPositions(),
                    this.setupAnimationsFromConfig(),
                    this.setupScenarios(),
                    this.locked = this.config.locked,
                    this.origPosition = new PIXI.Point,
                    this.applyBehaviors()
                }
            }, {
                key: "setupPIXIAttributes",
                value: function() {
                    Object.assign(this.anchor, this.config.anchor),
                    Object.assign(this.scale, this.config.scale),
                    Object.assign(this.pivot, this.config.pivot),
                    Object.assign(this.skew, this.config.skew),
                    this.alpha = this.config.alpha,
                    this.rotation = this.config.rotation,
                    this.visible = this.config.visible,
                    this.interactive = this.config.interactive,
                    this.tint = this.config.tint
                }
            }, {
                key: "setupTexture",
                value: function() {
                    this.config.image ? this.setTexture(utils.getTexture(this.config.image)) : this.setOrigSize(this.config.origWidth, this.config.origHeight)
                }
            }, {
                key: "setTexture",
                value: function(texture) {
                    this.texture = texture,
                    this.setOrigSize(this.texture.origWidth, this.texture.origHeight)
                }
            }, {
                key: "setOrigSize",
                value: function(origWidth, origHeight) {
                    this.origWidth = origWidth,
                    this.origHeight = origHeight
                }
            }, {
                key: "setupAnimationsFromConfig",
                value: function() {
                    var _this3 = this;
                    this.animations = {},
                    this.config._animationsFields.forEach(function(field) {
                        if (_this3.config[field])
                            for (var name in _this3.config[field])
                                _this3.animations[name] = _Animation2.default.create(_this3, _this3.config[field][name])
                    })
                }
            }, {
                key: "getEventHandlers",
                value: function() {}
            }, {
                key: "onTap",
                value: function() {}
            }, {
                key: "setupPositions",
                value: function() {
                    this.positions = _Position2.default.createPositionsFromConfig(this.config)
                }
            }, {
                key: "applyBehaviors",
                value: function() {
                    var _this4 = this;
                    [].concat(this.config.behaviors, [_BaseBehaviors2.default.universalBehavior]).forEach(function(behavior) {
                        return _Behavior2.default.applyFor(_this4, behavior)
                    })
                }
            }, {
                key: "createSprites",
                value: function() {
                    var _this5 = this;
                    this.config._spritesFields.map(function(field) {
                        return _this5.config[field] || []
                    }).forEach(function(sprites) {
                        return sprites.forEach(function(config) {
                            return _this5.addChild(_this5.app.spriteFactory.create(config))
                        })
                    })
                }
            }, {
                key: "setupScenarios",
                value: function() {
                    var _this6 = this;
                    this.scenarios = {},
                    this.config._scenariosFields.forEach(function(field) {
                        if (_this6.config[field])
                            for (var name in _this6.config[field])
                                _this6.scenarios[name] = new _Scenario2.default(_this6,Array.isArray(_this6.config[field][name]) ? {
                                    rewards: _this6.config[field][name]
                                } : _this6.config[field][name])
                    })
                }
            }, {
                key: "linkChild",
                value: function(obj) {
                    void 0 === obj.name || obj.config && obj.config.noLink || (this[obj.name] = obj)
                }
            }, {
                key: "onResize",
                value: function() {
                    this.config.keepPosition && !this.config.adaptivePosition || this.applyPosition(),
                    this.children.forEach(function(child) {
                        child.onResize && child.onResize()
                    })
                }
            }, {
                key: "applyPosition",
                value: function(name) {
                    Object.assign(this.origPosition, this.positions[name || this.detectPositionName()].calculateFor(this)),
                    this.position = this.origPosition,
                    this.currentPositionName = name
                }
            }, {
                key: "detectPositionName",
                value: function() {
                    var positionName = this.app.isPortrait ? _Position2.default.PORTRAIT_NAME : _Position2.default.DEFAULT_NAME;
                    if (Object.keys(this.positions).length < 3)
                        return positionName;
                    for (var key in window.RATIO) {
                        if (this.app.getLandscapeRatio() >= window.RATIO[key])
                            break;
                        var name = (this.app.isPortrait ? "portrait_" : "") + key.toLowerCase();
                        this.positions[name] && (positionName = name)
                    }
                    return positionName
                }
            }, {
                key: "getLocalPositionFor",
                value: function(sprite) {
                    return this.toLocal(sprite.parent.toGlobal(sprite.position))
                }
            }, {
                key: "lock",
                value: function() {
                    this.locked = !0
                }
            }, {
                key: "unlock",
                value: function() {
                    this.locked = !1
                }
            }, {
                key: "show",
                value: function() {
                    var _this7 = this
                      , withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    return void 0 !== this.animations.show && withAnimation ? (this.animations.show.once("start", function() {
                        _this7.defaultOnShowStart()
                    }),
                    this.animations.show.once("end", function() {
                        _this7.defaultOnShowEnd()
                    }),
                    this.animations.show.reset().start()) : (this.defaultOnShowStart(),
                    this.defaultOnShowEnd()),
                    this
                }
            }, {
                key: "hide",
                value: function() {
                    var _this8 = this
                      , withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    return void 0 !== this.animations.hide && withAnimation ? (this.animations.hide.once("start", function() {
                        _this8.defaultOnHideStart()
                    }),
                    this.animations.hide.once("end", function() {
                        _this8.defaultOnHideEnd()
                    }),
                    this.animations.hide.reset().start()) : (this.defaultOnHideStart(),
                    this.defaultOnHideEnd()),
                    this
                }
            }, {
                key: "defaultOnShowStart",
                value: function() {
                    this.visible = !0,
                    this.onShowStart()
                }
            }, {
                key: "defaultOnShowEnd",
                value: function() {
                    this.onShowEnd()
                }
            }, {
                key: "onShowStart",
                value: function() {}
            }, {
                key: "onShowEnd",
                value: function() {}
            }, {
                key: "defaultOnHideStart",
                value: function() {
                    this.onHideStart()
                }
            }, {
                key: "defaultOnHideEnd",
                value: function() {
                    this.visible = !1,
                    this.onHideEnd()
                }
            }, {
                key: "onHideStart",
                value: function() {}
            }, {
                key: "onHideEnd",
                value: function() {}
            }, {
                key: "hardHide",
                value: function() {
                    return this.stopShowing(),
                    this.hide(!1),
                    this
                }
            }, {
                key: "isShowing",
                value: function() {
                    return !!this.animations.show && this.animations.show.active
                }
            }, {
                key: "isHiding",
                value: function() {
                    return !!this.animations.hide && this.animations.hide.active
                }
            }, {
                key: "stopShowing",
                value: function() {
                    return this.animations.show && this.animations.show.stop(),
                    this
                }
            }, {
                key: "stopHiding",
                value: function() {
                    return this.animations.hide && this.animations.hide.stop(),
                    this
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    return {
                        alpha: 1,
                        anchor: this.app.config.spriteDefaultAnchor,
                        pivot: {
                            x: 0,
                            y: 0
                        },
                        scale: {
                            x: 1,
                            y: 1
                        },
                        rotation: 0,
                        visible: !0,
                        interactive: !1,
                        tint: 16777215,
                        origWidth: 0,
                        origHeight: 0,
                        keepPosition: !0,
                        adaptivePosition: !1,
                        behaviors: [],
                        locked: !1,
                        noLink: !1,
                        _spritesFields: ["sprites"],
                        _animationsFields: ["animations"],
                        _scenariosFields: ["scenarios"],
                        _universalBehaviorFields: ["onDefault", "on"]
                    }
                }
            }]),
            Sprite
        }();
        exports.default = Sprite
    }
    , {
        "../Behaviors/BaseBehaviors": 7,
        "./Animation": 17,
        "./Behavior": 20,
        "./Position": 22,
        "./UniversalBehavior/Scenario": 28
    }],
    25: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
                var parent = Object.getPrototypeOf(object);
                return null === parent ? void 0 : get(parent, property, receiver)
            }
            if ("value"in desc)
                return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0
        }, _Sprite2 = require("./Sprite"), _Sprite3 = (obj = _Sprite2) && obj.__esModule ? obj : {
            default: obj
        };
        var StagedSprite = function(_Sprite) {
            function StagedSprite() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, StagedSprite),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (StagedSprite.__proto__ || Object.getPrototypeOf(StagedSprite)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(StagedSprite, _Sprite3.default),
            _createClass(StagedSprite, [{
                key: "setup",
                value: function() {
                    _get(StagedSprite.prototype.__proto__ || Object.getPrototypeOf(StagedSprite.prototype), "setup", this).call(this),
                    this.stages = this.config.stages,
                    this.setStage(this.config.startStage, !1)
                }
            }, {
                key: "setFirstStage",
                value: function() {
                    var withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    this.setStage(this.stages[0], withAnimation)
                }
            }, {
                key: "setLastStage",
                value: function() {
                    var withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    this.setStage(this.stages[this.stages.length - 1], withAnimation)
                }
            }, {
                key: "setNextStage",
                value: function() {
                    var withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    this.isLastStage() || (this.setStage(this.getNextStage(), withAnimation),
                    this.onSetNextStage())
                }
            }, {
                key: "setStage",
                value: function(stage) {
                    var withAnimation = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                    this.stage !== stage && (this.stage = stage,
                    this.updateChildrenVisibility(withAnimation),
                    this.onSetStage(),
                    this.isLastStage() && this.onSetLastStage())
                }
            }, {
                key: "isLastStage",
                value: function() {
                    return this.stages.indexOf(this.stage) === this.stages.length - 1
                }
            }, {
                key: "getNextStage",
                value: function() {
                    return this.stages[this.stages.indexOf(this.stage) + 1]
                }
            }, {
                key: "updateChildrenVisibility",
                value: function() {
                    var _this2 = this
                      , withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    this.children.forEach(function(child) {
                        _this2.updateChildVisibility(child, _this2.stage, withAnimation)
                    })
                }
            }, {
                key: "updateChildVisibility",
                value: function(child, stage) {
                    var withAnimation = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                    child.config && child.config.parentStages && (this.isChildVisibleAtStage(child, stage) ? !child.isHiding() && child.visible || child.stopHiding().show(withAnimation) : (child.isShowing() || child.visible) && child.stopShowing().hide(withAnimation))
                }
            }, {
                key: "isChildVisibleAtStage",
                value: function(child, stage) {
                    return -1 !== child.config.parentStages.indexOf(stage)
                }
            }, {
                key: "onSetStage",
                value: function() {}
            }, {
                key: "onSetNextStage",
                value: function() {}
            }, {
                key: "onSetLastStage",
                value: function() {}
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    return Object.assign(_get(StagedSprite.prototype.__proto__ || Object.getPrototypeOf(StagedSprite.prototype), "getDefaultConfig", this).call(this, config), {
                        stages: [],
                        startStage: null
                    })
                }
            }]),
            StagedSprite
        }();
        exports.default = StagedSprite
    }
    , {
        "./Sprite": 24
    }],
    26: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();
        var Condition = function() {
            function Condition() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Condition)
            }
            return _createClass(Condition, null, [{
                key: "areSatisfied",
                value: function(obj) {
                    var conditions = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []
                      , _conditions = Array.isArray(conditions) ? conditions : [conditions];
                    for (var i in _conditions)
                        if (!Condition.isSatisfied(obj, _conditions[i]))
                            return !1;
                    return !0
                }
            }, {
                key: "isSatisfied",
                value: function(obj, condition) {
                    return "function" == typeof condition ? condition.call(obj, {}) : condition.c.call(obj, Object.assign({}, condition))
                }
            }, {
                key: "areValuesMatch",
                value: function(obj, values) {
                    if (!values)
                        return !0;
                    for (var key in values)
                        if (void 0 === obj[key] || obj[key] !== values[key])
                            return !1;
                    return !0
                }
            }]),
            Condition
        }();
        exports.default = Condition
    }
    , {}],
    27: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }();
        var Reward = function() {
            function Reward() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Reward)
            }
            return _createClass(Reward, null, [{
                key: "applyAll",
                value: function(obj) {
                    var rewards = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                    (Array.isArray(rewards) ? rewards : [rewards]).forEach(function(reward) {
                        Reward.apply(obj, reward)
                    })
                }
            }, {
                key: "apply",
                value: function(obj, reward) {
                    return "function" == typeof reward ? reward.call(obj, {}) : reward.r.call(obj, Object.assign({}, reward))
                }
            }, {
                key: "isInstant",
                value: function(reward) {
                    return !reward.nonInstant
                }
            }]),
            Reward
        }();
        exports.default = Reward
    }
    , {}],
    28: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _Reward = require("./Reward"), _Reward2 = (obj = _Reward) && obj.__esModule ? obj : {
            default: obj
        };
        var Scenario = function(_PIXI$utils$EventEmit) {
            function Scenario(obj, config) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Scenario);
                var _this = function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Scenario.__proto__ || Object.getPrototypeOf(Scenario)).call(this));
                return _this.rewards = config.rewards || [],
                _this.loop = config.loop || !1,
                _this.repeat = config.repeat || 0,
                _this.obj = obj,
                _this.currentRunNumber = 0,
                _this.reset(),
                _this
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Scenario, PIXI.utils.EventEmitter),
            _createClass(Scenario, [{
                key: "getNextStepNumber",
                value: function() {
                    return null === this.currentStepNumber ? 0 : this.currentStepNumber !== this.rewards.length - 1 ? this.currentStepNumber + 1 : this.loop || this.repeat > this.repeatNumber ? (this.emit("repeat"),
                    this.repeatNumber++,
                    0) : null
                }
            }, {
                key: "startNextStep",
                value: function() {
                    var _this2 = this;
                    if (this.currentStepNumber = this.getNextStepNumber(),
                    null === this.currentStepNumber)
                        return this.isActive = !1,
                        void this.emit("end");
                    var reward = this.rewards[this.currentStepNumber];
                    if (_Reward2.default.isInstant(reward))
                        _Reward2.default.apply(this.obj, reward),
                        this.currentNonInstant = null,
                        this.startNextStep();
                    else {
                        var runNumber = this.currentRunNumber;
                        this.currentNonInstant = _Reward2.default.apply(this.obj, Object.assign(reward, {
                            callback: function() {
                                _this2.isActive && runNumber === _this2.currentRunNumber && (_this2.currentNonInstant = null,
                                _this2.startNextStep())
                            }
                        }))
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    return this.currentStepNumber = null,
                    this.currentNonInstant = null,
                    this.repeatNumber = 0,
                    this.isActive = !1,
                    this
                }
            }, {
                key: "start",
                value: function() {
                    if (this.rewards.length)
                        return this.currentRunNumber++,
                        this.isActive = !0,
                        this.startNextStep(),
                        this.emit("start"),
                        this
                }
            }, {
                key: "stop",
                value: function() {
                    var interrupt = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    return this.isActive = !1,
                    interrupt && this.currentNonInstant && (this.currentNonInstant.stop(),
                    this.currentNonInstant = null),
                    this
                }
            }]),
            Scenario
        }();
        exports.default = Scenario
    }
    , {
        "./Reward": 27
    }],
    29: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _Condition2 = _interopRequireDefault(require("./Condition"))
          , _Reward2 = _interopRequireDefault(require("./Reward"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var Trigger = function() {
            function Trigger() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Trigger)
            }
            return _createClass(Trigger, null, [{
                key: "setupForAll",
                value: function(obj, triggers, rewards, conditions) {
                    triggers && (Array.isArray(triggers) ? triggers : [triggers]).forEach(function(trigger) {
                        Trigger.setup(obj, trigger, rewards, conditions)
                    })
                }
            }, {
                key: "setup",
                value: function(obj, trigger, rewards, conditions) {
                    if ("function" != typeof trigger) {
                        var callable = trigger.t;
                        return delete trigger.t,
                        callable.call(obj, Object.assign({}, trigger), function() {
                            Trigger.callTrigger(obj, rewards, conditions)
                        })
                    }
                    trigger.call(obj, {}, function() {
                        Trigger.callTrigger(obj, rewards, conditions)
                    })
                }
            }, {
                key: "callTrigger",
                value: function(obj, rewards, conditions) {
                    conditions && !_Condition2.default.areSatisfied(obj, conditions) || _Reward2.default.applyAll(obj, rewards)
                }
            }, {
                key: "hideOnEvent",
                value: function(behavior) {
                    var _this = this;
                    BaseBehaviors._createEventBehavior(this, behavior, function() {
                        _this.hide()
                    })
                }
            }]),
            Trigger
        }();
        exports.default = Trigger
    }
    , {
        "./Condition": 26,
        "./Reward": 27
    }],
    30: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _Sprite2 = require("../Core/Sprite"), _Sprite3 = (obj = _Sprite2) && obj.__esModule ? obj : {
            default: obj
        };
        var Button = function(_Sprite) {
            function Button() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Button),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Button, _Sprite3.default),
            _createClass(Button, [{
                key: "getDefaultConfig",
                value: function(config) {
                    var textImage = config.textImage || "install";
                    return Object.assign(function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), "getDefaultConfig", this).call(this, config), {
                        image: "btn-green",
                        textImage: textImage,
                        sprites: [{
                            image: textImage,
                            position: {
                                centered: !0
                            }
                        }]
                    })
                }
            }]),
            Button
        }();
        exports.default = Button
    }
    , {
        "../Core/Sprite": 24
    }],
    31: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _Sprite2 = require("../Core/Sprite"), _Sprite3 = (obj = _Sprite2) && obj.__esModule ? obj : {
            default: obj
        };
        var ButtonMute = function(_Sprite) {
            function ButtonMute() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, ButtonMute),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (ButtonMute.__proto__ || Object.getPrototypeOf(ButtonMute)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(ButtonMute, _Sprite3.default),
            _createClass(ButtonMute, [{
                key: "getEventHandlers",
                value: function() {
                    return {
                        soundReady: {
                            once: this.onceSoundReady
                        }
                    }
                }
            }, {
                key: "onceSoundReady",
                value: function() {
                    if (window.playableEnv && playableEnv.apiName)
                        switch (playableEnv.apiName) {
                        case "default":
                        case "mraid":
                        case "mraidAmz":
                            this.show(),
                            this.interactive = !0,
                            this.on("pointertap", this.toggle)
                        }
                }
            }, {
                key: "toggle",
                value: function() {
                    this.app.sounds.ready && (this.soundOn.visible = !this.soundOn.visible,
                    this.soundOff.visible = !this.soundOff.visible,
                    this.soundOn.visible ? this.app.sounds.unmute() : this.app.sounds.mute())
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    return Object.assign(function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(ButtonMute.prototype.__proto__ || Object.getPrototypeOf(ButtonMute.prototype), "getDefaultConfig", this).call(this, config), {
                        visible: !1,
                        adaptivePosition: !0,
                        position: {
                            absolute: !0,
                            align: {
                                x: 0,
                                y: 1
                            },
                            x: 40,
                            y: -75
                        },
                        sprites: [{
                            name: "soundOn",
                            image: "soundOn"
                        }, {
                            name: "soundOff",
                            image: "soundOff",
                            visible: !1
                        }]
                    })
                }
            }]),
            ButtonMute
        }();
        exports.default = ButtonMute
    }
    , {
        "../Core/Sprite": 24
    }],
    32: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _BaseAnimations2 = _interopRequireDefault(require("../Animations/BaseAnimations"))
          , _BaseBehaviors2 = _interopRequireDefault(require("../Behaviors/BaseBehaviors"))
          , _Button3 = _interopRequireDefault(require("./Button"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var ButtonPlay = function(_Button) {
            function ButtonPlay() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, ButtonPlay),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (ButtonPlay.__proto__ || Object.getPrototypeOf(ButtonPlay)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(ButtonPlay, _Button3.default),
            _createClass(ButtonPlay, [{
                key: "onShowEnd",
                value: function() {
                    this.config.noPulse || is_adwords || this.animations.pulse.start()
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    return Object.assign(function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(ButtonPlay.prototype.__proto__ || Object.getPrototypeOf(ButtonPlay.prototype), "getDefaultConfig", this).call(this, config), {
                        noPulse: !0,
                        animations: {
                            show: {
                                creator: _BaseAnimations2.default.alphaScaleShow,
                                delay: config.showDelay,
                                time: 300
                            },
                            hide: {
                                creator: _BaseAnimations2.default.alphaHide,
                                delay: config.hideDelay,
                                time: 300
                            },
                            pulse: _BaseAnimations2.default.pulse
                        },
                        behaviors: [_BaseBehaviors2.default.clickInstall]
                    })
                }
            }]),
            ButtonPlay
        }();
        exports.default = ButtonPlay
    }
    , {
        "../Animations/BaseAnimations": 6,
        "../Behaviors/BaseBehaviors": 7,
        "./Button": 30
    }],
    33: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _Animation = require("../Core/Animation"), _Animation2 = (obj = _Animation) && obj.__esModule ? obj : {
            default: obj
        };

        function _possibleConstructorReturn(self, call) {
            if (!self)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call
        }
        var Confetti = function(_PIXI$Graphics) {
            function Confetti(config, app) {
                var _ret;
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Confetti);
                var _this = _possibleConstructorReturn(this, (Confetti.__proto__ || Object.getPrototypeOf(Confetti)).call(this));
                return _this.app = app,
                _this.name = config.name,
                _this.init(),
                _possibleConstructorReturn(_ret = _this, _ret)
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Confetti, PIXI.Graphics),
            _createClass(Confetti, [{
                key: "init",
                value: function() {
                    this.W = this.app.width,
                    this.H = this.app.height,
                    this.mp = 100,
                    this.particles = [],
                    this.angle = 0,
                    this.tiltAngle = 0,
                    this.confettiActive = !0,
                    this.animationComplete = !0,
                    this.reactivationTimerHandler = -1
                }
            }, {
                key: "onResize",
                value: function() {
                    this.W = this.app.width,
                    this.H = this.app.height,
                    this.parent.toLocal(new PIXI.Point, null, this.position)
                }
            }, {
                key: "initializeConfetti",
                value: function() {
                    this.particles = [],
                    this.animationComplete = !1;
                    for (var colors = this.getColors(), i = 0; i < this.mp; i++)
                        this.particles.push(this.createParticle(colors[i % colors.length]))
                }
            }, {
                key: "start",
                value: function(time) {
                    var _this2 = this;
                    this.initializeConfetti(),
                    this.animationComplete || (this.animation = _Animation2.default.create(this, {
                        from: {
                            count: 0
                        },
                        to: {
                            count: 100
                        },
                        time: 1e3,
                        loop: !0,
                        on: {
                            update: function() {
                                _this2.update()
                            }
                        }
                    }).start()),
                    setTimeout(function() {
                        _this2.deactivateConfetti()
                    }, time)
                }
            }, {
                key: "update",
                value: function() {
                    if (!this.animationComplete) {
                        var remainingFlakes = 0;
                        this.angle += .01,
                        this.tiltAngle += .1,
                        this.clear();
                        for (var i = 0; i < this.mp; i++) {
                            var particle = this.particles[i];
                            !this.confettiActive && particle.y < -15 ? particle.y = this.H + 250 : (particle.y <= this.H && remainingFlakes++,
                            this.stepParticle(particle, i),
                            this.drawParticle(particle),
                            this.checkForReposition(particle, i))
                        }
                        0 === remainingFlakes && this.stopConfetti()
                    }
                }
            }, {
                key: "createParticle",
                value: function(colorOptions) {
                    return {
                        x: Math.random() * this.W,
                        y: -Math.random() * this.H,
                        r: 10 + 30 * Math.random(),
                        d: Math.random() * this.mp + 10,
                        colorOptions: colorOptions,
                        tilt: Math.floor(10 * Math.random()) - 10,
                        tiltAngleIncremental: .07 * Math.random() + .05,
                        tiltAngle: 0
                    }
                }
            }, {
                key: "stepParticle",
                value: function(particle, particleIndex) {
                    particle.tiltAngle += particle.tiltAngleIncremental,
                    particle.y += (Math.cos(this.angle + particle.d) + 3 + particle.r / 2) / 2,
                    particle.x += Math.sin(this.angle),
                    particle.tilt = 15 * Math.sin(particle.tiltAngle - particleIndex / 3),
                    particle.color = 0 < particle.tilt ? particle.colorOptions.main : particle.colorOptions.alt
                }
            }, {
                key: "drawParticle",
                value: function(particle) {
                    this.lineStyle(particle.r / 2, particle.color),
                    this.moveTo(particle.x + particle.tilt + particle.r / 4, particle.y),
                    this.lineTo(particle.x + particle.tilt, particle.y + particle.tilt + particle.r / 4)
                }
            }, {
                key: "checkForReposition",
                value: function(particle, index) {
                    (particle.x > this.W + 20 || particle.x < -20 || particle.y > this.H) && this.confettiActive && (0 < index % 5 || index % 2 == 0 ? this.repositionParticle(particle, Math.random() * this.W, -10, Math.floor(10 * Math.random()) - 10) : 0 < Math.sin(this.angle) ? this.repositionParticle(particle, -5, Math.random() * this.H, Math.floor(10 * Math.random()) - 10) : this.repositionParticle(particle, this.W + 5, Math.random() * this.H, Math.floor(10 * Math.random()) - 10))
                }
            }, {
                key: "repositionParticle",
                value: function(particle, xCoordinate, yCoordinate, tilt) {
                    particle.x = xCoordinate,
                    particle.y = yCoordinate,
                    particle.tilt = tilt
                }
            }, {
                key: "clearTimers",
                value: function() {
                    clearTimeout(this.reactivationTimerHandler),
                    this.animation.stop()
                }
            }, {
                key: "deactivateConfetti",
                value: function() {
                    this.confettiActive = !1
                }
            }, {
                key: "stopConfetti",
                value: function() {
                    this.animationComplete = !0,
                    this.clear(),
                    this.clearTimers()
                }
            }, {
                key: "restartConfetti",
                value: function() {
                    var _this3 = this;
                    this.stopConfetti(),
                    this.reactivationTimerHandler = setTimeout(function() {
                        _this3.confettiActive = !0,
                        _this3.animationComplete = !1,
                        _this3.initializeConfetti()
                    }, 100)
                }
            }, {
                key: "getColors",
                value: function() {
                    return [{
                        main: 2003199,
                        alt: 4620980
                    }, {
                        main: 7048739,
                        alt: 5597999
                    }, {
                        main: 16766720,
                        alt: 12433259
                    }, {
                        main: 16761035,
                        alt: 14184595
                    }, {
                        main: 11393254,
                        alt: 11584734
                    }, {
                        main: 15631086,
                        alt: 14315734
                    }, {
                        main: 10025880,
                        alt: 10145074
                    }, {
                        main: 16032864,
                        alt: 13468991
                    }, {
                        main: 13789470,
                        alt: 10506797
                    }, {
                        main: 14423100,
                        alt: 11674146
                    }]
                }
            }]),
            Confetti
        }();
        exports.default = Confetti
    }
    , {
        "../Core/Animation": 17
    }],
    34: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
                var parent = Object.getPrototypeOf(object);
                return null === parent ? void 0 : get(parent, property, receiver)
            }
            if ("value"in desc)
                return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0
        }
          , _Sprite3 = _interopRequireDefault(require("../Core/Sprite"))
          , _BaseAnimations2 = _interopRequireDefault(require("../Animations/BaseAnimations"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var Disclaimer = function(_Sprite) {
            function Disclaimer() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Disclaimer),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Disclaimer.__proto__ || Object.getPrototypeOf(Disclaimer)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Disclaimer, _Sprite3.default),
            _createClass(Disclaimer, [{
                key: "getDefaultConfig",
                value: function(config) {
                    var _this2 = this;
                    if (!this.isThereDisclaimer)
                        return _get(Disclaimer.prototype.__proto__ || Object.getPrototypeOf(Disclaimer.prototype), "getDefaultConfig", this).call(this, config);
                    var showDelay = config.showDelay ? config.showDelay : 8e3
                      , hideDelay = config.hideDelay ? config.hideDelay : 5e3;
                    return Object.assign(_get(Disclaimer.prototype.__proto__ || Object.getPrototypeOf(Disclaimer.prototype), "getDefaultConfig", this).call(this, config), {
                        image: "disclaimer",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        visible: !1,
                        showDelay: 8e3,
                        hideDelay: 5e3,
                        adaptivePosition: !0,
                        animations: {
                            show: {
                                creator: _BaseAnimations2.default.alphaShow,
                                time: 700,
                                delay: showDelay,
                                on: {
                                    end: function() {
                                        _this2.animations.hide.start()
                                    }
                                }
                            },
                            hide: {
                                creator: _BaseAnimations2.default.alphaHide,
                                delay: hideDelay,
                                time: 700
                            }
                        }
                    })
                }
            }, {
                key: "isThereDisclaimer",
                get: function() {
                    return window.playableEnv && playableEnv.isDis
                }
            }]),
            Disclaimer
        }();
        exports.default = Disclaimer
    }
    , {
        "../Animations/BaseAnimations": 6,
        "../Core/Sprite": 24
    }],
    35: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
                var parent = Object.getPrototypeOf(object);
                return null === parent ? void 0 : get(parent, property, receiver)
            }
            if ("value"in desc)
                return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0
        }
          , _Sprite3 = _interopRequireDefault(require("../Core/Sprite"))
          , _BaseAnimations2 = _interopRequireDefault(require("../Animations/BaseAnimations"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var Fade = function(_Sprite) {
            function Fade() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Fade),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Fade.__proto__ || Object.getPrototypeOf(Fade)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Fade, _Sprite3.default),
            _createClass(Fade, [{
                key: "setup",
                value: function() {
                    _get(Fade.prototype.__proto__ || Object.getPrototypeOf(Fade.prototype), "setup", this).call(this),
                    this.addChild(this.createGraphics()),
                    this.draw()
                }
            }, {
                key: "createGraphics",
                value: function() {
                    var g = new PIXI.Graphics;
                    return g.name = "graphics",
                    g
                }
            }, {
                key: "draw",
                value: function() {
                    var size = Math.max(this.app.origWidth, this.app.origHeight);
                    this.graphics.beginFill(this.config.fillColor, this.config.fillAlpha),
                    this.graphics.drawRect(0, 0, size, size)
                }
            }, {
                key: "onTap",
                value: function(e) {
                    e.stopPropagation()
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    var delay = config.delay || 0;
                    return Object.assign(_get(Fade.prototype.__proto__ || Object.getPrototypeOf(Fade.prototype), "getDefaultConfig", this).call(this, config), {
                        fillColor: 0,
                        fillAlpha: .6,
                        interactive: !0,
                        visible: !1,
                        delay: delay,
                        adaptivePosition: !0,
                        position: {
                            absolute: !0
                        },
                        animations: {
                            show: {
                                creator: _BaseAnimations2.default.alphaShow,
                                delay: config.delay
                            },
                            hide: _BaseAnimations2.default.alphaHide
                        }
                    })
                }
            }]),
            Fade
        }();
        exports.default = Fade
    }
    , {
        "../Animations/BaseAnimations": 6,
        "../Core/Sprite": 24
    }],
    36: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.BulgarEvents = void 0;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _StagedSprite3 = _interopRequireDefault(require("../Playable/Core/StagedSprite"))
          , _Triggers2 = _interopRequireDefault(require("../Playable/Behaviors/UniversalBehavior/Triggers"))
          , _Rewards2 = _interopRequireDefault(require("../Playable/Behaviors/UniversalBehavior/Rewards"))
          , _Events = require("../Events")
          , _Conditions2 = (_interopRequireDefault(require("../Animations")),
        _interopRequireDefault(require("../Playable/Behaviors/UniversalBehavior/Conditions")));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var BulgarEvents = exports.BulgarEvents = {
            hit: "hit",
            fall: "fall"
        }
          , Bulgar = function(_StagedSprite) {
            function Bulgar() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Bulgar),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Bulgar.__proto__ || Object.getPrototypeOf(Bulgar)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Bulgar, _StagedSprite3.default),
            _createClass(Bulgar, [{
                key: "smack",
                value: function() {
                    this.app.emit(BulgarEvents.hit)
                }
            }, {
                key: "fall",
                value: function() {
                    this.app.emit(BulgarEvents.fall)
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    return Object.assign(function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(Bulgar.prototype.__proto__ || Object.getPrototypeOf(Bulgar.prototype), "getDefaultConfig", this).call(this, config), {
                        stages: ["idle", "hit", "sad", "attack"],
                        startStage: "idle",
                        onDefault: [{
                            t: _Triggers2.default.onEvent(BulgarEvents.hit),
                            r: [_Rewards2.default.playSound("damage", {
                                volume: .5
                            }), _Rewards2.default.resetScenario("hit"), _Rewards2.default.startScenario("hit")]
                        }, {
                            t: _Triggers2.default.onEvent(BulgarEvents.fall),
                            r: [_Rewards2.default.startScenario("fall")]
                        }, {
                            t: _Triggers2.default.onEvent(_Events.Events.stageBasementEnd),
                            c: _Conditions2.default.flags({
                                basementBulgar: !0
                            }),
                            r: _Rewards2.default.startScenario("gotcha")
                        }],
                        scenarios: {
                            hit: [_Rewards2.default.setStage("idle"), _Rewards2.default.setStage("hit"), _Rewards2.default.wait(500), _Rewards2.default.setStage("idle")],
                            fall: [_Rewards2.default.setStage("hit"), _Rewards2.default.startAnimation("fall"), _Rewards2.default.wait(500), _Rewards2.default.setStage("sad")],
                            gotcha: [_Rewards2.default.wait(400), _Rewards2.default.playSound("bandit"), _Rewards2.default.setStage("attack")]
                        },
                        sprites: [{
                            name: "idle",
                            parentStages: ["idle"],
                            pivot: {
                                x: 137,
                                y: 115
                            },
                            position: {
                                x: 137,
                                y: 115
                            },
                            scenarios: {
                                idleBody: {
                                    rewards: [_Rewards2.default.startAnimation("idleBody")],
                                    loop: !0
                                },
                                idleFace: {
                                    rewards: [_Rewards2.default.startAnimation("idleFace"), _Rewards2.default.startAnimation("idleFace"), _Rewards2.default.wait(1e3), _Rewards2.default.startAnimation("idleFace"), _Rewards2.default.startAnimation("idleFace"), _Rewards2.default.startAnimation("idleFace"), _Rewards2.default.wait(2e3)],
                                    loop: !0
                                }
                            },
                            on: [{
                                t: _Triggers2.default.onStart(),
                                r: [_Rewards2.default.startScenario("idleBody"), _Rewards2.default.startScenario("idleFace")]
                            }],
                            animations: {
                                idleBody: {
                                    to: {
                                        scale: {
                                            x: 1.01,
                                            y: .99
                                        },
                                        pivot: {
                                            x: 137,
                                            y: 114
                                        },
                                        hand_r: {
                                            rotation: -.2
                                        },
                                        hand_l: {
                                            rotation: .2
                                        }
                                    },
                                    time: 1500,
                                    pingPong: !0,
                                    easing: "inOutQuad"
                                },
                                idleFace: {
                                    to: {
                                        head: {
                                            brows: {
                                                pivot: {
                                                    x: 0,
                                                    y: 4
                                                }
                                            },
                                            mouth: {
                                                scale: {
                                                    x: 1,
                                                    y: 1.1
                                                }
                                            },
                                            nose: {
                                                rotation: .1
                                            }
                                        }
                                    },
                                    time: 400,
                                    pingPong: !0,
                                    easing: "inOutQuad"
                                }
                            },
                            sprites: [{
                                name: "hand_r",
                                image: "bulgar/hand_r_idle",
                                anchor: {
                                    x: .45,
                                    y: .2
                                }
                            }, {
                                name: "body",
                                image: "bulgar/body"
                            }, {
                                name: "hand_l",
                                image: "bulgar/hand_l_idle",
                                anchor: {
                                    x: .85,
                                    y: .1
                                }
                            }, {
                                name: "head",
                                pivot: {
                                    x: 75,
                                    y: 65
                                },
                                position: {
                                    x: 141,
                                    y: 27
                                },
                                sprites: [{
                                    name: "head",
                                    image: "bulgar/head"
                                }, {
                                    name: "eyes",
                                    image: "bulgar/eyes"
                                }, {
                                    name: "brows",
                                    image: "bulgar/brows"
                                }, {
                                    name: "mouth",
                                    image: "bulgar/mouth_grin",
                                    anchor: {
                                        x: .55,
                                        y: .5
                                    }
                                }, {
                                    name: "nose",
                                    image: "bulgar/nose",
                                    anchor: {
                                        x: .4,
                                        y: .4
                                    }
                                }]
                            }]
                        }, {
                            name: "hit",
                            parentStages: ["hit"],
                            pivot: {
                                x: 137,
                                y: 115
                            },
                            position: {
                                x: 137,
                                y: 115
                            },
                            on: [{
                                t: _Triggers2.default.onEvent(BulgarEvents.fall),
                                r: _Rewards2.default.startScenario("fall")
                            }],
                            scenarios: {
                                fall: [_Rewards2.default.startAnimation("fall")]
                            },
                            animations: {
                                show: {
                                    from: {
                                        scale: {
                                            x: 1,
                                            y: 1
                                        },
                                        pivot: {
                                            x: 137,
                                            y: 115
                                        },
                                        rotation: 0
                                    },
                                    to: {
                                        scale: {
                                            x: 1,
                                            y: .97
                                        },
                                        pivot: {
                                            x: 137,
                                            y: 110
                                        },
                                        rotation: .01
                                    },
                                    time: 300,
                                    easing: "outBack",
                                    pingPong: !0
                                },
                                fall: {
                                    to: {
                                        head: {
                                            rotation: .5
                                        }
                                    },
                                    time: 400,
                                    easing: "inOutQuad"
                                }
                            },
                            sprites: [{
                                name: "hand_r",
                                image: "bulgar/hand_r_idle",
                                anchor: {
                                    x: .45,
                                    y: .2
                                }
                            }, {
                                name: "body",
                                image: "bulgar/body"
                            }, {
                                name: "hand_l",
                                image: "bulgar/hand_l_attack",
                                anchor: {
                                    x: .85,
                                    y: .1
                                }
                            }, {
                                name: "head",
                                pivot: {
                                    x: 75,
                                    y: 65
                                },
                                position: {
                                    x: 141,
                                    y: 27
                                },
                                sprites: [{
                                    name: "head",
                                    image: "bulgar/head",
                                    tint: 16755370
                                }, {
                                    name: "eyes",
                                    image: "bulgar/eyes"
                                }, {
                                    name: "brows",
                                    image: "bulgar/brows",
                                    pivot: {
                                        x: 0,
                                        y: -3
                                    }
                                }, {
                                    name: "mouth",
                                    image: "bulgar/mouth_evil",
                                    anchor: {
                                        x: .55,
                                        y: .5
                                    }
                                }, {
                                    name: "nose",
                                    image: "bulgar/nose",
                                    anchor: {
                                        x: .4,
                                        y: .4
                                    }
                                }]
                            }]
                        }, {
                            name: "sad",
                            parentStages: ["sad"],
                            pivot: {
                                x: 137,
                                y: 115
                            },
                            position: {
                                x: 137,
                                y: 115
                            },
                            on: [{
                                t: _Triggers2.default.onEvent(BulgarEvents.fall),
                                r: _Rewards2.default.startScenario("fall")
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.stageHome),
                                r: _Rewards2.default.startScenario("fail")
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.stageBasement),
                                r: _Rewards2.default.startScenario("gotcha")
                            }],
                            scenarios: {
                                fall: [_Rewards2.default.playSound("man_surprise"), _Rewards2.default.startAnimation("fall"), _Rewards2.default.startAnimation("idleBody")],
                                fail: [_Rewards2.default.startAnimation("fail")],
                                gotcha: [_Rewards2.default.startAnimation("fail")]
                            },
                            animations: {
                                show: {
                                    to: {
                                        head: {
                                            nose: {
                                                rotation: -.1
                                            }
                                        }
                                    },
                                    time: 400,
                                    easing: "outBack"
                                },
                                fall: {
                                    to: {
                                        head: {
                                            rotation: .5
                                        }
                                    },
                                    time: 400,
                                    easing: "inOutQuad"
                                },
                                fail: {
                                    to: {
                                        head: {
                                            rotation: 0
                                        }
                                    },
                                    time: 400,
                                    easing: "inOutQuad"
                                },
                                idleBody: {
                                    to: {
                                        scale: {
                                            x: 1.01,
                                            y: .99
                                        },
                                        pivot: {
                                            x: 137,
                                            y: 114
                                        },
                                        hand_r: {
                                            rotation: -.2
                                        },
                                        hand_l: {
                                            rotation: .2
                                        }
                                    },
                                    time: 1500,
                                    pingPong: !0,
                                    loop: !0,
                                    easing: "inOutQuad"
                                }
                            },
                            sprites: [{
                                name: "hand_r",
                                image: "bulgar/hand_r_idle",
                                anchor: {
                                    x: .45,
                                    y: .2
                                }
                            }, {
                                name: "body",
                                image: "bulgar/body"
                            }, {
                                name: "hand_l",
                                image: "bulgar/hand_l_idle",
                                anchor: {
                                    x: .85,
                                    y: .1
                                }
                            }, {
                                name: "head",
                                pivot: {
                                    x: 75,
                                    y: 65
                                },
                                position: {
                                    x: 141,
                                    y: 27
                                },
                                sprites: [{
                                    name: "head",
                                    image: "bulgar/head"
                                }, {
                                    name: "eyes",
                                    image: "bulgar/eyes"
                                }, {
                                    name: "brows",
                                    image: "bulgar/brows",
                                    pivot: {
                                        x: 0,
                                        y: -3
                                    }
                                }, {
                                    name: "mouth",
                                    image: "bulgar/mouth_sad",
                                    anchor: {
                                        x: .55,
                                        y: .5
                                    }
                                }, {
                                    name: "nose",
                                    image: "bulgar/nose",
                                    anchor: {
                                        x: .4,
                                        y: .4
                                    }
                                }]
                            }]
                        }, {
                            name: "attack",
                            parentStages: ["attack"],
                            pivot: {
                                x: 137,
                                y: 115
                            },
                            position: {
                                x: 137,
                                y: 115
                            },
                            position_attack: {
                                x: -37,
                                y: 115
                            },
                            scenarios: {
                                attackHands: {
                                    rewards: [_Rewards2.default.startAnimation("attack_fist"), _Rewards2.default.wait(100), _Rewards2.default.startAnimation("attack_no_fist"), _Rewards2.default.wait(200), _Rewards2.default.startAnimation("attack_fist"), _Rewards2.default.wait(100), _Rewards2.default.startAnimation("attack_no_fist"), _Rewards2.default.wait(800)],
                                    loop: !0
                                },
                                idleBody: {
                                    rewards: [_Rewards2.default.startAnimation("idleBody")],
                                    loop: !0
                                },
                                idleFace: {
                                    rewards: [_Rewards2.default.startAnimation("idleFace"), _Rewards2.default.startAnimation("idleFace"), _Rewards2.default.wait(1e3), _Rewards2.default.startAnimation("idleFace"), _Rewards2.default.startAnimation("idleFace"), _Rewards2.default.startAnimation("idleFace"), _Rewards2.default.wait(2e3)],
                                    loop: !0
                                }
                            },
                            on: [{
                                t: _Triggers2.default.onAnimationStart("show"),
                                r: [_Rewards2.default.startScenario("idleBody"), _Rewards2.default.startScenario("idleFace"), _Rewards2.default.startScenario("attackHands")]
                            }],
                            animations: {
                                show: {
                                    to: {
                                        head: {
                                            rotation: -.2
                                        }
                                    },
                                    time: 200
                                },
                                attack_fist: {
                                    to: {
                                        hand_r: {
                                            alpha: 0
                                        },
                                        hand_l: {
                                            alpha: 0
                                        }
                                    },
                                    time: 50
                                },
                                attack_no_fist: {
                                    to: {
                                        hand_r: {
                                            alpha: 1
                                        },
                                        hand_l: {
                                            alpha: 1
                                        }
                                    },
                                    time: 50
                                },
                                idleBody: {
                                    to: {
                                        scale: {
                                            x: 1.01,
                                            y: .99
                                        },
                                        pivot: {
                                            x: 137,
                                            y: 114
                                        },
                                        hand_r: {
                                            rotation: .1
                                        },
                                        hand_l: {
                                            rotation: -.1
                                        },
                                        hand_r_fist: {
                                            rotation: .1
                                        },
                                        hand_l_fist: {
                                            rotation: -.1
                                        }
                                    },
                                    time: 1500,
                                    pingPong: !0,
                                    easing: "inOutQuad"
                                },
                                idleFace: {
                                    to: {
                                        head: {
                                            brows: {
                                                pivot: {
                                                    x: 0,
                                                    y: 4
                                                }
                                            },
                                            mouth: {
                                                scale: {
                                                    x: 1,
                                                    y: 1.1
                                                }
                                            },
                                            nose: {
                                                rotation: .1
                                            }
                                        }
                                    },
                                    time: 400,
                                    pingPong: !0,
                                    easing: "inOutQuad"
                                }
                            },
                            sprites: [{
                                name: "hand_r_fist",
                                image: "bulgar/hand_r_attack_fist",
                                anchor: {
                                    x: .45,
                                    y: .2
                                }
                            }, {
                                name: "hand_r",
                                image: "bulgar/hand_r_attack",
                                anchor: {
                                    x: .45,
                                    y: .2
                                }
                            }, {
                                name: "body",
                                image: "bulgar/body"
                            }, {
                                name: "hand_l_fist",
                                image: "bulgar/hand_l_attack_fist",
                                anchor: {
                                    x: .85,
                                    y: .1
                                }
                            }, {
                                name: "hand_l",
                                image: "bulgar/hand_l_attack",
                                anchor: {
                                    x: .85,
                                    y: .1
                                }
                            }, {
                                name: "head",
                                pivot: {
                                    x: 75,
                                    y: 65
                                },
                                position: {
                                    x: 141,
                                    y: 27
                                },
                                sprites: [{
                                    name: "head",
                                    image: "bulgar/head"
                                }, {
                                    name: "eyes",
                                    image: "bulgar/eyes"
                                }, {
                                    name: "brows",
                                    image: "bulgar/brows"
                                }, {
                                    name: "mouth",
                                    image: "bulgar/mouth_grin",
                                    anchor: {
                                        x: .55,
                                        y: .5
                                    }
                                }, {
                                    name: "nose",
                                    image: "bulgar/nose",
                                    anchor: {
                                        x: .4,
                                        y: .4
                                    }
                                }]
                            }]
                        }]
                    })
                }
            }]),
            Bulgar
        }();
        exports.default = Bulgar
    }
    , {
        "../Animations": 1,
        "../Events": 5,
        "../Playable/Behaviors/UniversalBehavior/Conditions": 13,
        "../Playable/Behaviors/UniversalBehavior/Rewards": 14,
        "../Playable/Behaviors/UniversalBehavior/Triggers": 15,
        "../Playable/Core/StagedSprite": 25
    }],
    37: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
                var parent = Object.getPrototypeOf(object);
                return null === parent ? void 0 : get(parent, property, receiver)
            }
            if ("value"in desc)
                return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0
        }
          , _Sprite3 = _interopRequireDefault(require("../Playable/Core/Sprite"))
          , _Animations2 = _interopRequireDefault(require("../Animations"))
          , _Rewards2 = _interopRequireDefault(require("../Playable/Behaviors/UniversalBehavior/Rewards"));
        _interopRequireDefault(require("../Playable/Behaviors/UniversalBehavior/Triggers"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var Drops = function(_Sprite) {
            function Drops() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Drops),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Drops.__proto__ || Object.getPrototypeOf(Drops)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Drops, _Sprite3.default),
            _createClass(Drops, [{
                key: "show",
                value: function() {
                    var withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    return this.run(),
                    _get(Drops.prototype.__proto__ || Object.getPrototypeOf(Drops.prototype), "show", this).call(this, withAnimation)
                }
            }, {
                key: "hide",
                value: function() {
                    var withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    return this.stop(),
                    _get(Drops.prototype.__proto__ || Object.getPrototypeOf(Drops.prototype), "hide", this).call(this, withAnimation)
                }
            }, {
                key: "stop",
                value: function() {
                    this.children.forEach(function(child) {
                        child.scenarios && child.scenarios.show && child.scenarios.show.stop(!0)
                    })
                }
            }, {
                key: "run",
                value: function() {
                    this.children.forEach(function(child) {
                        child.scenarios && child.scenarios.show && child.scenarios.show.reset().start()
                    })
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    for (var count = config.count, drop = config.drop, _config$dxMin = config.dxMin, dxMin = void 0 === _config$dxMin ? 10 : _config$dxMin, _config$dxMax = config.dxMax, dxMax = void 0 === _config$dxMax ? 50 : _config$dxMax, _config$dy = config.dy, dy = void 0 === _config$dy ? 10 : _config$dy, _config$delayMin = config.delayMin, delayMin = void 0 === _config$delayMin ? 200 : _config$delayMin, _config$delayMax = config.delayMax, delayMax = void 0 === _config$delayMax ? 500 : _config$delayMax, prefix = drop.prefix, images = drop.images, time = drop.time, dropSprites = [], lastDropPositionX = 0, i = 0; i < count; i++) {
                        var dropSprite = {
                            image: prefix + "1",
                            position: {
                                x: lastDropPositionX + (dxMin + Math.random() * dxMax),
                                y: Math.random() * dy
                            },
                            visible: !1,
                            animations: {
                                show: {
                                    creator: _Animations2.default.sequence,
                                    images: {
                                        prefix: prefix,
                                        count: images
                                    },
                                    time: time
                                }
                            },
                            scenarios: {
                                show: {
                                    rewards: [_Rewards2.default.show(), _Rewards2.default.wait(time), _Rewards2.default.hide(), _Rewards2.default.wait(delayMin + Math.random() * delayMax)],
                                    loop: !0
                                }
                            }
                        };
                        lastDropPositionX = dropSprite.position.x,
                        dropSprites.push(dropSprite)
                    }
                    return Object.assign(_get(Drops.prototype.__proto__ || Object.getPrototypeOf(Drops.prototype), "getDefaultConfig", this).call(this, config), {
                        _spritesFields: ["dropSprites", "sprites"],
                        _universalBehaviorFields: ["defaultOn", "on"],
                        dropSprites: dropSprites
                    })
                }
            }]),
            Drops
        }();
        exports.default = Drops
    }
    , {
        "../Animations": 1,
        "../Playable/Behaviors/UniversalBehavior/Rewards": 14,
        "../Playable/Behaviors/UniversalBehavior/Triggers": 15,
        "../Playable/Core/Sprite": 24
    }],
    38: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.KatrinEvents = void 0;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _StagedSprite3 = _interopRequireDefault(require("../Playable/Core/StagedSprite"))
          , _Triggers2 = _interopRequireDefault(require("../Playable/Behaviors/UniversalBehavior/Triggers"))
          , _Rewards2 = _interopRequireDefault(require("../Playable/Behaviors/UniversalBehavior/Rewards"))
          , _Animations2 = _interopRequireDefault(require("../Animations"))
          , _Events = require("../Events")
          , _Drops2 = _interopRequireDefault(require("./Drops"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var KatrinEvents = exports.KatrinEvents = {
            walk: "walk",
            stop: "stop",
            sadSmile: "sadSmile",
            sadSmileEnd: "sadSmileEnd",
            falling: "falling",
            happy: "happy"
        }
          , Katrin = function(_StagedSprite) {
            function Katrin() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Katrin),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Katrin.__proto__ || Object.getPrototypeOf(Katrin)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Katrin, _StagedSprite3.default),
            _createClass(Katrin, [{
                key: "exitCar",
                value: function() {
                    this.setStage("sad")
                }
            }, {
                key: "hideDrops",
                value: function() {
                    this.app.emit(KatrinEvents.sadSmile)
                }
            }, {
                key: "showDrops",
                value: function() {
                    this.app.emit(KatrinEvents.sadSmileEnd)
                }
            }, {
                key: "enterHouse",
                value: function() {
                    this.setStage("normal")
                }
            }, {
                key: "setFalling",
                value: function() {
                    this.setStage("falling"),
                    this.app.emit(KatrinEvents.falling)
                }
            }, {
                key: "setHappy",
                value: function() {
                    this.app.emit(KatrinEvents.happy)
                }
            }, {
                key: "stop",
                value: function() {
                    this.app.emit(KatrinEvents.stop)
                }
            }, {
                key: "walk",
                value: function() {
                    this.app.emit(KatrinEvents.walk)
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    return Object.assign(function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(Katrin.prototype.__proto__ || Object.getPrototypeOf(Katrin.prototype), "getDefaultConfig", this).call(this, config), {
                        pivot: {
                            x: 50,
                            y: 100
                        },
                        stages: ["sad", "normal", "falling"],
                        startStage: "sad",
                        sprites: [{
                            name: "sad",
                            parentStages: ["sad"],
                            scenarios: {
                                startWalk: [_Rewards2.default.stopScenario("idleParts"), _Rewards2.default.resetScenario("idleParts"), _Rewards2.default.stopScenario("idleEyes"), _Rewards2.default.resetScenario("idleEyes"), _Rewards2.default.stopScenario("stopWalk"), _Rewards2.default.resetScenario("stopWalk"), _Rewards2.default.stopScenario("walk"), _Rewards2.default.resetScenario("walk"), _Rewards2.default.stopAnimation("idleHair"), _Rewards2.default.stopAnimation("idleBody"), _Rewards2.default.startAnimation("startWalk"), _Rewards2.default.startScenario("walk")],
                                walk: {
                                    rewards: [_Rewards2.default.instant(_Rewards2.default.startAnimation("legsWalk")), _Rewards2.default.instant(_Rewards2.default.startAnimation("handsWalk")), _Rewards2.default.instant(_Rewards2.default.startAnimation("hairWalk")), _Rewards2.default.startAnimation("bodyWalk")],
                                    loop: !0
                                },
                                stopWalk: [_Rewards2.default.stopScenario("startWalk"), _Rewards2.default.resetScenario("startWalk"), _Rewards2.default.stopScenario("walk"), _Rewards2.default.resetScenario("walk"), _Rewards2.default.wait(200), _Rewards2.default.startAnimation("stopWalk")],
                                wet: [_Rewards2.default.startAnimation("wet")],
                                rain: [_Rewards2.default.startAnimation("rain"), _Rewards2.default.instant(_Rewards2.default.startScenario("idleParts")), _Rewards2.default.instant(_Rewards2.default.startScenario("idleEyes"))],
                                sadSmile: [_Rewards2.default.startAnimation("sadSmile"), _Rewards2.default.playSound("female_surprise_3")],
                                idleEyes: {
                                    rewards: [_Rewards2.default.startAnimation("idleEyesCenter"), _Rewards2.default.wait(1e3), _Rewards2.default.startAnimation("idleEyesForward"), _Rewards2.default.wait(1e3)],
                                    loop: !0
                                },
                                idleParts: {
                                    rewards: [_Rewards2.default.instant(_Rewards2.default.startAnimation("idleHair")), _Rewards2.default.instant(_Rewards2.default.startAnimation("idleBody"))]
                                }
                            },
                            on: [{
                                t: _Triggers2.default.onEvent(KatrinEvents.walk),
                                r: _Rewards2.default.startScenario("startWalk")
                            }, {
                                t: _Triggers2.default.onEvent(KatrinEvents.stop),
                                r: _Rewards2.default.startScenario("stopWalk")
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.stageCarMove),
                                r: _Rewards2.default.startScenario("wet")
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.stageRainEnd),
                                r: _Rewards2.default.startScenario("rain")
                            }, {
                                t: _Triggers2.default.onEvent(KatrinEvents.sadSmile),
                                r: _Rewards2.default.startScenario("sadSmile")
                            }, {
                                t: _Triggers2.default.onEvent(KatrinEvents.sadSmileEnd),
                                r: [_Rewards2.default.startAnimation("sadSmileEnd"), _Rewards2.default.playSound("female_sadness_3")]
                            }],
                            animations: {
                                idleEyesCenter: {
                                    to: {
                                        head: {
                                            pupil_l: {
                                                pivot: {
                                                    x: -5,
                                                    y: 0
                                                }
                                            },
                                            pupil_r: {
                                                pivot: {
                                                    x: -5,
                                                    y: 0
                                                }
                                            }
                                        }
                                    },
                                    time: 500,
                                    easing: "inOutQuad"
                                },
                                idleEyesForward: {
                                    to: {
                                        head: {
                                            pupil_l: {
                                                pivot: {
                                                    x: -10,
                                                    y: 0
                                                }
                                            },
                                            pupil_r: {
                                                pivot: {
                                                    x: -10,
                                                    y: 0
                                                }
                                            }
                                        }
                                    },
                                    time: 500,
                                    easing: "inOutQuad"
                                },
                                idleHair: {
                                    to: {
                                        head: {
                                            hair_l: {
                                                rotation: .03
                                            },
                                            hair_r: {
                                                rotation: -.05
                                            }
                                        },
                                        tail: {
                                            rotation: 0
                                        }
                                    },
                                    pingPong: !0,
                                    loop: !0,
                                    time: 500,
                                    easing: "inOutQuad"
                                },
                                idleBody: {
                                    to: {
                                        head: {
                                            rotation: -.31
                                        },
                                        body: {
                                            rotation: .01,
                                            pivot: {
                                                x: 1,
                                                y: 0
                                            }
                                        },
                                        arm_r: {
                                            bag: {
                                                rotation: -.1
                                            },
                                            rotation: -.05
                                        },
                                        arm_l: {
                                            rotation: .05
                                        }
                                    },
                                    pingPong: !0,
                                    loop: !0,
                                    time: 1500,
                                    easing: "inOutQuad"
                                },
                                wet: {
                                    to: {
                                        head: {
                                            brow_l: {
                                                rotation: .25
                                            },
                                            brow_r: {
                                                rotation: -.25
                                            },
                                            lips_closed: {
                                                alpha: 0
                                            },
                                            lips_opened: {
                                                alpha: 1
                                            },
                                            rotation: .25
                                        },
                                        tail: {
                                            rotation: .1,
                                            pivot: {
                                                x: -5,
                                                y: 0
                                            }
                                        },
                                        scale: {
                                            x: 1,
                                            y: .95
                                        },
                                        pivot: {
                                            x: 0,
                                            y: -10
                                        }
                                    },
                                    time: 800,
                                    pingPong: !0,
                                    easing: "outQuad"
                                },
                                rain: {
                                    to: {
                                        head: {
                                            eyelid_l: {
                                                scale: {
                                                    x: 1,
                                                    y: .8
                                                }
                                            },
                                            eyelid_r: {
                                                scale: {
                                                    x: 1,
                                                    y: .8
                                                }
                                            },
                                            brow_l: {
                                                rotation: -.35
                                            },
                                            brow_r: {
                                                rotation: .35
                                            },
                                            pupil_l: {
                                                pivot: {
                                                    x: -10,
                                                    y: 0
                                                }
                                            },
                                            pupil_r: {
                                                pivot: {
                                                    x: -10,
                                                    y: 0
                                                }
                                            },
                                            rotation: -.3,
                                            pivot: {
                                                x: 0,
                                                y: 4
                                            }
                                        },
                                        tail: {
                                            rotation: -.1
                                        }
                                    },
                                    time: 800,
                                    easing: "inOutQuad"
                                },
                                sadSmile: {
                                    to: {
                                        head: {
                                            lips_closed: {
                                                alpha: 0
                                            },
                                            lips_opened: {
                                                alpha: 1
                                            }
                                        }
                                    },
                                    time: 300,
                                    easing: "inOutQuad"
                                },
                                sadSmileEnd: {
                                    to: {
                                        head: {
                                            lips_closed: {
                                                alpha: 1
                                            },
                                            lips_opened: {
                                                alpha: 0
                                            }
                                        }
                                    },
                                    time: 300,
                                    easing: "inOutQuad"
                                },
                                legsWalk: {
                                    from: {
                                        leg_l: {
                                            rotation: -.25,
                                            pivot: {
                                                x: -10,
                                                y: 0
                                            }
                                        },
                                        leg_r: {
                                            rotation: .25,
                                            pivot: {
                                                x: 10,
                                                y: 0
                                            }
                                        }
                                    },
                                    to: {
                                        leg_l: {
                                            rotation: .25,
                                            pivot: {
                                                x: 15,
                                                y: 1
                                            }
                                        },
                                        leg_r: {
                                            rotation: -.25,
                                            pivot: {
                                                x: -15,
                                                y: 1
                                            }
                                        }
                                    },
                                    pingPong: !0,
                                    time: 400,
                                    easing: "inOutQuad"
                                },
                                handsWalk: {
                                    from: {
                                        arm_r: {
                                            bag: {
                                                rotation: .4
                                            },
                                            rotation: .25
                                        },
                                        arm_l: {
                                            rotation: -.2
                                        }
                                    },
                                    to: {
                                        arm_r: {
                                            bag: {
                                                rotation: -.4
                                            },
                                            rotation: -.25
                                        },
                                        arm_l: {
                                            rotation: .2
                                        }
                                    },
                                    pingPong: !0,
                                    time: 400,
                                    easing: "inOutSine"
                                },
                                hairWalk: {
                                    from: {
                                        head: {
                                            hair_l: {
                                                rotation: .07
                                            },
                                            hair_r: {
                                                rotation: -.1
                                            }
                                        },
                                        tail: {
                                            rotation: 0
                                        }
                                    },
                                    to: {
                                        head: {
                                            hair_l: {
                                                rotation: -.07
                                            },
                                            hair_r: {
                                                rotation: .1
                                            }
                                        },
                                        tail: {
                                            rotation: .1
                                        }
                                    },
                                    pingPong: !0,
                                    time: 400,
                                    easing: "inOutSine"
                                },
                                bodyWalk: {
                                    from: {
                                        pivot: {
                                            x: 0,
                                            y: 0
                                        },
                                        rotation: -.01
                                    },
                                    to: {
                                        pivot: {
                                            x: 0,
                                            y: -2
                                        },
                                        rotation: .02
                                    },
                                    pingPong: !0,
                                    time: 400,
                                    easing: "inOutQuad"
                                },
                                stopWalk: {
                                    to: {
                                        leg_l: {
                                            rotation: 0,
                                            pivot: {
                                                x: 0,
                                                y: 0
                                            }
                                        },
                                        leg_r: {
                                            rotation: 0,
                                            pivot: {
                                                x: 0,
                                                y: 0
                                            }
                                        },
                                        arm_r: {
                                            bag: {
                                                rotation: 0
                                            },
                                            rotation: 0
                                        },
                                        arm_l: {
                                            rotation: 0
                                        },
                                        head: {
                                            hair_l: {
                                                rotation: 0
                                            },
                                            hair_r: {
                                                rotation: 0
                                            }
                                        }
                                    },
                                    time: 200,
                                    easing: "outQuad"
                                },
                                startWalk: {
                                    to: {
                                        leg_l: {
                                            rotation: -.15,
                                            pivot: {
                                                x: -10,
                                                y: 0
                                            }
                                        },
                                        leg_r: {
                                            rotation: .15,
                                            pivot: {
                                                x: 10,
                                                y: 0
                                            }
                                        },
                                        arm_r: {
                                            bag: {
                                                rotation: .4
                                            },
                                            rotation: .25
                                        },
                                        arm_l: {
                                            rotation: -.2
                                        },
                                        head: {
                                            hair_l: {
                                                rotation: .07
                                            },
                                            hair_r: {
                                                rotation: -.1
                                            }
                                        }
                                    },
                                    time: 300,
                                    easing: "outQuad"
                                }
                            },
                            sprites: [{
                                name: "tail",
                                image: "kat/hair_tail",
                                anchor: {
                                    x: .7,
                                    y: .4
                                },
                                position: {
                                    x: -5,
                                    y: -50
                                }
                            }, {
                                name: "leg_l",
                                image: "kat/leg_l",
                                anchor: {
                                    x: .5,
                                    y: .3
                                },
                                position: {
                                    x: 32,
                                    y: 105
                                }
                            }, {
                                name: "leg_r",
                                image: "kat/leg_r",
                                anchor: {
                                    x: .5,
                                    y: .3
                                },
                                position: {
                                    x: 20,
                                    y: 107
                                }
                            }, {
                                name: "arm_l",
                                image: "kat/arm_l",
                                anchor: {
                                    x: .1,
                                    y: .1
                                },
                                position: {
                                    x: 50,
                                    y: 15
                                }
                            }, {
                                name: "body",
                                image: "kat/body"
                            }, {
                                name: "head",
                                image: "kat/sad_head",
                                anchor: {
                                    x: .4,
                                    y: .9
                                },
                                position: {
                                    x: 1,
                                    y: -90
                                },
                                sprites: [{
                                    name: "pupil_l",
                                    image: "kat/sad_head_pupil_l",
                                    position: {
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    name: "pupil_r",
                                    image: "kat/sad_head_pupil_r",
                                    position: {
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    name: "eyelid_l",
                                    image: "kat/sad_head_eyelid_l",
                                    anchor: {
                                        x: .7,
                                        y: .5
                                    }
                                }, {
                                    name: "brow_l",
                                    image: "kat/sad_head_brow_l",
                                    anchor: {
                                        x: .7,
                                        y: .5
                                    }
                                }, {
                                    name: "hair_l",
                                    image: "kat/sad_head_hair_l",
                                    anchor: {
                                        x: .8,
                                        y: .2
                                    }
                                }, {
                                    name: "nose",
                                    image: "kat/sad_head_nose"
                                }, {
                                    name: "eyelid_r",
                                    image: "kat/sad_head_eyelid_r",
                                    anchor: {
                                        x: .55,
                                        y: .5
                                    }
                                }, {
                                    name: "brow_r",
                                    image: "kat/sad_head_brow_r",
                                    anchor: {
                                        x: .55,
                                        y: .5
                                    }
                                }, {
                                    name: "hair_r",
                                    image: "kat/sad_head_hair_r",
                                    anchor: {
                                        x: .6,
                                        y: .3
                                    }
                                }, {
                                    name: "lips_closed",
                                    image: "kat/sad_head_lips_closed"
                                }, {
                                    name: "lips_opened",
                                    image: "kat/sad_head_lips_open",
                                    alpha: 0
                                }, {
                                    name: "drops",
                                    class: _Drops2.default,
                                    position: {
                                        x: 10,
                                        y: 10
                                    },
                                    count: 3,
                                    dxMin: 10,
                                    dxMax: 20,
                                    dy: 20,
                                    drop: {
                                        prefix: "water/drops_",
                                        images: 6,
                                        time: 400
                                    },
                                    on: [{
                                        t: _Triggers2.default.onEvent(KatrinEvents.sadSmile),
                                        r: _Rewards2.default.hide()
                                    }, {
                                        t: [_Triggers2.default.onEvent(KatrinEvents.sadSmileEnd), _Triggers2.default.onStart()],
                                        r: _Rewards2.default.show()
                                    }]
                                }, {
                                    name: "flow",
                                    image: "water/head_flow_1",
                                    position: {
                                        x: 38,
                                        y: 31
                                    },
                                    scale: {
                                        x: 2,
                                        y: 2
                                    },
                                    visible: !1,
                                    animations: {
                                        show: {
                                            creator: _Animations2.default.sequence,
                                            images: {
                                                prefix: "water/head_flow_",
                                                count: 7
                                            },
                                            time: 500,
                                            delay: 200
                                        }
                                    },
                                    on: [{
                                        t: _Triggers2.default.onEvent(_Events.Events.stageCarMove),
                                        r: _Rewards2.default.show()
                                    }, {
                                        t: _Triggers2.default.onAnimationEnd("show"),
                                        r: _Rewards2.default.hide()
                                    }]
                                }, {
                                    name: "flow_chin",
                                    image: "water/chin_flow_1",
                                    position: {
                                        x: 61,
                                        y: 115
                                    },
                                    scale: {
                                        x: 2,
                                        y: 2
                                    },
                                    visible: !1,
                                    animations: {
                                        show: {
                                            creator: _Animations2.default.sequence,
                                            images: {
                                                prefix: "water/chin_flow_",
                                                count: 7
                                            },
                                            time: 600,
                                            delay: 400
                                        }
                                    },
                                    on: [{
                                        t: _Triggers2.default.onEvent(_Events.Events.stageCarMove),
                                        r: _Rewards2.default.show()
                                    }, {
                                        t: _Triggers2.default.onAnimationEnd("show"),
                                        r: _Rewards2.default.hide()
                                    }]
                                }]
                            }, {
                                name: "arm_r",
                                pivot: {
                                    x: 18,
                                    y: 7
                                },
                                position: {
                                    x: 28,
                                    y: 22
                                },
                                sprites: [{
                                    name: "bag",
                                    image: "kat/bag",
                                    anchor: {
                                        x: .7,
                                        y: .1
                                    },
                                    position: {
                                        x: -20,
                                        y: 75
                                    }
                                }, {
                                    name: "arm",
                                    image: "kat/arm_r"
                                }, {
                                    name: "flow",
                                    image: "water/chin_flow_1",
                                    position: {
                                        x: 16,
                                        y: 131
                                    },
                                    scale: {
                                        x: 2,
                                        y: 2
                                    },
                                    visible: !1,
                                    animations: {
                                        show: {
                                            creator: _Animations2.default.sequence,
                                            images: {
                                                prefix: "water/chin_flow_",
                                                count: 7
                                            },
                                            time: 600,
                                            delay: 500
                                        }
                                    },
                                    on: [{
                                        t: _Triggers2.default.onEvent(_Events.Events.stageCarMove),
                                        r: _Rewards2.default.show()
                                    }, {
                                        t: _Triggers2.default.onAnimationEnd("show"),
                                        r: _Rewards2.default.hide()
                                    }]
                                }]
                            }]
                        }, {
                            name: "normal",
                            parentStages: ["normal"],
                            scenarios: {
                                startWalk: [_Rewards2.default.stopScenario("idleParts"), _Rewards2.default.resetScenario("idleParts"), _Rewards2.default.stopScenario("idleEyes"), _Rewards2.default.resetScenario("idleEyes"), _Rewards2.default.stopScenario("stopWalk"), _Rewards2.default.resetScenario("stopWalk"), _Rewards2.default.stopScenario("walk"), _Rewards2.default.resetScenario("walk"), _Rewards2.default.stopAnimation("idleBody"), _Rewards2.default.stopAnimation("idleBodyScared"), _Rewards2.default.stopAnimation("bulgarIdleHead"), _Rewards2.default.instant(_Rewards2.default.startAnimation("idleEyesForward")), _Rewards2.default.startAnimation("startWalk"), _Rewards2.default.startScenario("walk")],
                                walk: {
                                    rewards: [_Rewards2.default.instant(_Rewards2.default.startAnimation("legsWalk")), _Rewards2.default.instant(_Rewards2.default.startAnimation("handsWalk")), _Rewards2.default.instant(_Rewards2.default.startAnimation("hairWalk")), _Rewards2.default.startAnimation("bodyWalk")],
                                    loop: !0
                                },
                                stopWalk: [_Rewards2.default.stopScenario("startWalk"), _Rewards2.default.resetScenario("startWalk"), _Rewards2.default.stopScenario("walk"), _Rewards2.default.resetScenario("walk"), _Rewards2.default.wait(200), _Rewards2.default.startAnimation("stopWalk")],
                                idleEyes: {
                                    rewards: [_Rewards2.default.startAnimation("idleEyesCenter"), _Rewards2.default.wait(1e3), _Rewards2.default.startAnimation("idleEyesForward"), _Rewards2.default.wait(1e3)],
                                    loop: !0
                                },
                                idleParts: [_Rewards2.default.startAnimation("idleBody")],
                                elevator: [_Rewards2.default.playSound("female_fright_1"), _Rewards2.default.wait(200), _Rewards2.default.instant(_Rewards2.default.startAnimation("scareArms")), _Rewards2.default.startAnimation("scare"), _Rewards2.default.instant(_Rewards2.default.startAnimation("idleBodyScared")), _Rewards2.default.instant(_Rewards2.default.startScenario("idleEyes"))],
                                scare: [_Rewards2.default.playSound("female_fright_1"), _Rewards2.default.wait(200), _Rewards2.default.stopScenario("happyIdle"), _Rewards2.default.stopAnimation("idleBody"), _Rewards2.default.instant(_Rewards2.default.startAnimation("scareArms")), _Rewards2.default.startAnimation("scare")],
                                happy: [_Rewards2.default.playSound("female_laughter_1"), _Rewards2.default.stopScenario("elevator"), _Rewards2.default.stopAnimation("scareArms"), _Rewards2.default.stopAnimation("scare"), _Rewards2.default.stopAnimation("idleBodyScared"), _Rewards2.default.stopAnimation("bulgarIdleHead"), _Rewards2.default.stopAnimation("bulgarIdleBody"), _Rewards2.default.startAnimation("happy"), _Rewards2.default.instant(_Rewards2.default.startAnimation("idleBody")), _Rewards2.default.startScenario("happyIdle")],
                                happyIdle: {
                                    rewards: [_Rewards2.default.startAnimation("happyIdleHead"), _Rewards2.default.startAnimation("happyIdleHead"), _Rewards2.default.startAnimation("happyIdleHead"), _Rewards2.default.wait(1e3), _Rewards2.default.startAnimation("happyIdleHead"), _Rewards2.default.startAnimation("happyIdleHead"), _Rewards2.default.startAnimation("happyIdleHead"), _Rewards2.default.wait(500)],
                                    loop: !0
                                },
                                bulgar: [_Rewards2.default.playSound("female_fright_2"), _Rewards2.default.stopScenario("happyIdle"), _Rewards2.default.startAnimation("bulgar"), _Rewards2.default.instant(_Rewards2.default.startScenario("idleEyes")), _Rewards2.default.instant(_Rewards2.default.startAnimation("bulgarIdleHead")), _Rewards2.default.instant(_Rewards2.default.startAnimation("bulgarIdleBody"))]
                            },
                            on: [{
                                t: _Triggers2.default.onAnimationEnd("show"),
                                r: _Rewards2.default.playSound("female_seduction_1")
                            }, {
                                t: _Triggers2.default.onEvent(KatrinEvents.walk),
                                r: _Rewards2.default.startScenario("startWalk")
                            }, {
                                t: _Triggers2.default.onEvent(KatrinEvents.stop),
                                r: _Rewards2.default.startScenario("stopWalk")
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.stageElevatorEnd),
                                r: _Rewards2.default.startScenario("elevator")
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.elevatorFall),
                                r: _Rewards2.default.startScenario("happy")
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.stageBulgarEnd),
                                r: _Rewards2.default.startScenario("bulgar")
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.stageBasementEnd),
                                r: _Rewards2.default.startScenario("scare")
                            }, {
                                t: [_Triggers2.default.onEvent(_Events.Events.stageHome), _Triggers2.default.onEvent(KatrinEvents.happy)],
                                r: [_Rewards2.default.resetScenario("happy"), _Rewards2.default.startScenario("happy")]
                            }],
                            animations: {
                                show: {
                                    time: 200
                                },
                                idleEyesCenter: {
                                    to: {
                                        head: {
                                            pupil_l: {
                                                pivot: {
                                                    x: 5,
                                                    y: 0
                                                }
                                            },
                                            pupil_r: {
                                                pivot: {
                                                    x: 5,
                                                    y: 0
                                                }
                                            }
                                        }
                                    },
                                    time: 500,
                                    easing: "inOutQuad"
                                },
                                idleEyesForward: {
                                    to: {
                                        head: {
                                            pupil_l: {
                                                pivot: {
                                                    x: 0,
                                                    y: 0
                                                }
                                            },
                                            pupil_r: {
                                                pivot: {
                                                    x: 0,
                                                    y: 0
                                                }
                                            }
                                        }
                                    },
                                    time: 500,
                                    easing: "inOutQuad"
                                },
                                idleBody: {
                                    to: {
                                        head: {
                                            rotation: -.02
                                        },
                                        body: {
                                            rotation: .01,
                                            pivot: {
                                                x: 1,
                                                y: 0
                                            }
                                        },
                                        arm_r: {
                                            bag: {
                                                rotation: -.15
                                            },
                                            rotation: -.1
                                        },
                                        arm_l: {
                                            rotation: .1
                                        },
                                        arm_l_joy: {
                                            rotation: .1
                                        }
                                    },
                                    pingPong: !0,
                                    loop: !0,
                                    time: 1500,
                                    easing: "inOutQuad"
                                },
                                idleBodyScared: {
                                    to: {
                                        head: {
                                            rotation: -.02
                                        },
                                        body: {
                                            rotation: -.21
                                        },
                                        arm_r: {
                                            pivot: {
                                                x: 26,
                                                y: 4
                                            },
                                            bag: {
                                                rotation: -.21
                                            },
                                            rotation: .26
                                        },
                                        arm_l_scared: {
                                            rotation: .04
                                        },
                                        tail: {
                                            pivot: {
                                                x: 11,
                                                y: -1
                                            },
                                            rotation: -.11
                                        }
                                    },
                                    pingPong: !0,
                                    loop: !0,
                                    time: 300,
                                    easing: "inOutQuad"
                                },
                                scare: {
                                    to: {
                                        head: {
                                            eyelid_l: {
                                                alpha: 0
                                            },
                                            eyelid_r: {
                                                alpha: 0
                                            },
                                            brow_l: {
                                                pivot: {
                                                    x: 0,
                                                    y: 5
                                                }
                                            },
                                            brow_r: {
                                                pivot: {
                                                    x: 0,
                                                    y: 5
                                                }
                                            },
                                            lips_closed: {
                                                alpha: 0
                                            },
                                            lips_joy: {
                                                alpha: 0
                                            },
                                            lips_opened: {
                                                alpha: 1
                                            },
                                            pivot: {
                                                x: 10,
                                                y: 0
                                            }
                                        },
                                        tail: {
                                            pivot: {
                                                x: 10,
                                                y: 0
                                            },
                                            rotation: -.1
                                        },
                                        body: {
                                            rotation: -.2
                                        },
                                        leg_r: {
                                            pivot: {
                                                x: 10,
                                                y: 0
                                            }
                                        }
                                    },
                                    time: 400,
                                    easing: "inOutQuad"
                                },
                                scareArms: {
                                    to: {
                                        arm_l: {
                                            alpha: 0
                                        },
                                        arm_l_joy: {
                                            alpha: 0
                                        },
                                        arm_l_scared_back: {
                                            alpha: 1
                                        },
                                        arm_l_scared: {
                                            alpha: 1
                                        },
                                        arm_r: {
                                            pivot: {
                                                x: 25,
                                                y: 4
                                            },
                                            bag: {
                                                rotation: -.2
                                            },
                                            rotation: .25
                                        }
                                    },
                                    time: 300,
                                    easing: "inOutQuad"
                                },
                                happy: {
                                    to: {
                                        head: {
                                            eyelid_l: {
                                                alpha: 1
                                            },
                                            eyelid_r: {
                                                alpha: 1
                                            },
                                            brow_l: {
                                                pivot: {
                                                    x: 0,
                                                    y: 0
                                                }
                                            },
                                            brow_r: {
                                                pivot: {
                                                    x: 0,
                                                    y: 0
                                                }
                                            },
                                            lips_closed: {
                                                alpha: 0
                                            },
                                            lips_opened: {
                                                alpha: 0
                                            },
                                            lips_joy: {
                                                alpha: 1
                                            },
                                            pivot: {
                                                x: 0,
                                                y: 0
                                            }
                                        },
                                        arm_l: {
                                            alpha: 0
                                        },
                                        arm_l_scared_back: {
                                            alpha: 0
                                        },
                                        arm_l_scared: {
                                            alpha: 0
                                        },
                                        arm_l_bag: {
                                            alpha: 0
                                        },
                                        arm_l_joy: {
                                            alpha: 1
                                        },
                                        arm_r: {
                                            pivot: {
                                                x: 18,
                                                y: 7
                                            },
                                            bag: {
                                                rotation: 0
                                            },
                                            rotation: 0
                                        },
                                        tail: {
                                            pivot: {
                                                x: 0,
                                                y: 0
                                            },
                                            rotation: 0
                                        },
                                        body: {
                                            rotation: 0
                                        },
                                        leg_r: {
                                            pivot: {
                                                x: 0,
                                                y: 0
                                            }
                                        }
                                    },
                                    time: 400,
                                    easing: "inOutQuad"
                                },
                                happyIdleHead: {
                                    to: {
                                        head: {
                                            eyelid_l: {
                                                scale: {
                                                    x: 1,
                                                    y: 1.05
                                                }
                                            },
                                            eyelid_r: {
                                                scale: {
                                                    x: 1,
                                                    y: 1.05
                                                }
                                            },
                                            lips_joy: {
                                                scale: {
                                                    x: 1.02,
                                                    y: 1.05
                                                }
                                            }
                                        },
                                        tail: {
                                            pivot: {
                                                x: 0,
                                                y: 0
                                            },
                                            rotation: .01
                                        }
                                    },
                                    time: 300,
                                    easing: "inOutQuad",
                                    pingPong: !0
                                },
                                bulgar: {
                                    to: {
                                        head: {
                                            eyelid_l: {
                                                alpha: 0
                                            },
                                            eyelid_r: {
                                                alpha: 0
                                            },
                                            brow_l: {
                                                pivot: {
                                                    x: 0,
                                                    y: 5
                                                }
                                            },
                                            brow_r: {
                                                pivot: {
                                                    x: 0,
                                                    y: 5
                                                }
                                            },
                                            lips_closed: {
                                                alpha: 0
                                            },
                                            lips_joy: {
                                                alpha: 0
                                            },
                                            lips_opened: {
                                                alpha: 1
                                            },
                                            pivot: {
                                                x: 0,
                                                y: -3
                                            },
                                            rotation: .02
                                        },
                                        leg_r: {
                                            pivot: {
                                                x: 10,
                                                y: 0
                                            }
                                        },
                                        arm_l_joy: {
                                            alpha: 0
                                        },
                                        arm_l: {
                                            alpha: 0
                                        },
                                        arm_l_bag: {
                                            alpha: 1,
                                            rotation: .2
                                        },
                                        arm_r: {
                                            pivot: {
                                                x: 18,
                                                y: 7
                                            },
                                            bag: {
                                                rotation: .4
                                            },
                                            rotation: -.4
                                        },
                                        tail: {
                                            pivot: {
                                                x: 0,
                                                y: -3
                                            }
                                        }
                                    },
                                    time: 800,
                                    easing: "inOutQuad"
                                },
                                bulgarIdleHead: {
                                    to: {
                                        head: {
                                            lips_opened: {
                                                scale: {
                                                    x: 1.02,
                                                    y: 1.04
                                                }
                                            },
                                            rotation: .03
                                        },
                                        tail: {
                                            pivot: {
                                                x: 0,
                                                y: -2
                                            }
                                        }
                                    },
                                    time: 1500,
                                    easing: "inOutQuad",
                                    pingPong: !0,
                                    loop: !0
                                },
                                bulgarIdleBody: {
                                    to: {
                                        body: {
                                            rotation: .01,
                                            pivot: {
                                                x: 1,
                                                y: 0
                                            }
                                        },
                                        arm_r: {
                                            bag: {
                                                rotation: 0
                                            },
                                            rotation: -.43
                                        },
                                        arm_l_bag: {
                                            rotation: .22
                                        }
                                    },
                                    time: 1500,
                                    easing: "inOutQuad",
                                    pingPong: !0,
                                    loop: !0
                                },
                                legsWalk: {
                                    from: {
                                        leg_l: {
                                            rotation: -.25,
                                            pivot: {
                                                x: -10,
                                                y: 0
                                            }
                                        },
                                        leg_r: {
                                            rotation: .25,
                                            pivot: {
                                                x: 10,
                                                y: 0
                                            }
                                        }
                                    },
                                    to: {
                                        leg_l: {
                                            rotation: .25,
                                            pivot: {
                                                x: 15,
                                                y: 1
                                            }
                                        },
                                        leg_r: {
                                            rotation: -.25,
                                            pivot: {
                                                x: -15,
                                                y: 1
                                            }
                                        }
                                    },
                                    pingPong: !0,
                                    time: 400,
                                    easing: "inOutQuad"
                                },
                                handsWalk: {
                                    from: {
                                        arm_r: {
                                            bag: {
                                                rotation: .4
                                            },
                                            rotation: .25
                                        },
                                        arm_l: {
                                            rotation: -.2
                                        },
                                        arm_l_joy: {
                                            rotation: -.2
                                        }
                                    },
                                    to: {
                                        arm_r: {
                                            bag: {
                                                rotation: -.4
                                            },
                                            rotation: -.25
                                        },
                                        arm_l: {
                                            rotation: .2
                                        },
                                        arm_l_joy: {
                                            rotation: .2
                                        }
                                    },
                                    pingPong: !0,
                                    time: 400,
                                    easing: "inOutSine"
                                },
                                hairWalk: {
                                    from: {
                                        head: {
                                            hair_l: {
                                                rotation: .07
                                            },
                                            hair_r: {
                                                rotation: -.1
                                            }
                                        },
                                        tail: {
                                            rotation: 0
                                        }
                                    },
                                    to: {
                                        head: {
                                            hair_l: {
                                                rotation: -.07
                                            },
                                            hair_r: {
                                                rotation: .1
                                            }
                                        },
                                        tail: {
                                            rotation: .1
                                        }
                                    },
                                    pingPong: !0,
                                    time: 400,
                                    easing: "inOutSine"
                                },
                                bodyWalk: {
                                    from: {
                                        pivot: {
                                            x: 0,
                                            y: 0
                                        },
                                        rotation: -.01
                                    },
                                    to: {
                                        pivot: {
                                            x: 0,
                                            y: -2
                                        },
                                        rotation: .02
                                    },
                                    pingPong: !0,
                                    time: 400,
                                    easing: "inOutQuad"
                                },
                                stopWalk: {
                                    to: {
                                        leg_l: {
                                            rotation: 0,
                                            pivot: {
                                                x: 0,
                                                y: 0
                                            }
                                        },
                                        leg_r: {
                                            rotation: 0,
                                            pivot: {
                                                x: 0,
                                                y: 0
                                            }
                                        },
                                        arm_r: {
                                            bag: {
                                                rotation: 0
                                            },
                                            rotation: 0
                                        },
                                        arm_l: {
                                            rotation: 0
                                        },
                                        arm_l_joy: {
                                            rotation: 0
                                        },
                                        head: {
                                            hair_l: {
                                                rotation: 0
                                            },
                                            hair_r: {
                                                rotation: 0
                                            }
                                        }
                                    },
                                    time: 200,
                                    easing: "outQuad"
                                },
                                startWalk: {
                                    to: {
                                        leg_l: {
                                            rotation: -.15,
                                            pivot: {
                                                x: -10,
                                                y: 0
                                            }
                                        },
                                        leg_r: {
                                            rotation: .15,
                                            pivot: {
                                                x: 10,
                                                y: 0
                                            }
                                        },
                                        arm_r: {
                                            bag: {
                                                rotation: .4
                                            },
                                            rotation: .25
                                        },
                                        arm_l: {
                                            rotation: -.2
                                        },
                                        arm_l_joy: {
                                            rotation: -.2
                                        },
                                        head: {
                                            hair_l: {
                                                rotation: .07
                                            },
                                            hair_r: {
                                                rotation: -.1
                                            }
                                        }
                                    },
                                    time: 200,
                                    easing: "outQuad"
                                }
                            },
                            sprites: [{
                                name: "tail",
                                image: "kat/hair_tail",
                                anchor: {
                                    x: .7,
                                    y: .4
                                },
                                position: {
                                    x: -5,
                                    y: -50
                                }
                            }, {
                                name: "leg_l",
                                image: "kat/leg_l",
                                anchor: {
                                    x: .5,
                                    y: .3
                                },
                                position: {
                                    x: 32,
                                    y: 105
                                }
                            }, {
                                name: "leg_r",
                                image: "kat/leg_r",
                                anchor: {
                                    x: .5,
                                    y: .3
                                },
                                position: {
                                    x: 20,
                                    y: 107
                                }
                            }, {
                                name: "arm_l",
                                image: "kat/arm_l",
                                anchor: {
                                    x: .1,
                                    y: .1
                                },
                                position: {
                                    x: 50,
                                    y: 15
                                }
                            }, {
                                name: "arm_l_scared_back",
                                image: "kat/arm_l_scared_back",
                                anchor: {
                                    x: .1,
                                    y: .1
                                },
                                position: {
                                    x: 43,
                                    y: 9
                                },
                                alpha: 0
                            }, {
                                name: "arm_l_joy",
                                image: "kat/arm_l_joy",
                                anchor: {
                                    x: .1,
                                    y: .1
                                },
                                position: {
                                    x: 40,
                                    y: 10
                                },
                                alpha: 0
                            }, {
                                name: "body",
                                image: "kat/body"
                            }, {
                                name: "head",
                                image: "kat/normal_head",
                                anchor: {
                                    x: .4,
                                    y: .9
                                },
                                position: {
                                    x: 1,
                                    y: -90
                                },
                                sprites: [{
                                    name: "pupil_l",
                                    image: "kat/normal_head_pupil_l",
                                    position: {
                                        x: 0,
                                        y: 2
                                    }
                                }, {
                                    name: "pupil_r",
                                    image: "kat/normal_head_pupil_r",
                                    position: {
                                        x: 0,
                                        y: 2
                                    }
                                }, {
                                    name: "eyelid_l",
                                    image: "kat/normal_head_eyelid_l",
                                    anchor: {
                                        x: .7,
                                        y: .7
                                    }
                                }, {
                                    name: "brow_l",
                                    image: "kat/normal_head_brow_l",
                                    anchor: {
                                        x: .7,
                                        y: .5
                                    }
                                }, {
                                    name: "hair_l",
                                    image: "kat/normal_head_hair_l",
                                    anchor: {
                                        x: .55,
                                        y: .1
                                    }
                                }, {
                                    name: "nose",
                                    image: "kat/normal_head_nose"
                                }, {
                                    name: "eyelid_r",
                                    image: "kat/normal_head_eyelid_r",
                                    anchor: {
                                        x: .45,
                                        y: .7
                                    }
                                }, {
                                    name: "brow_r",
                                    image: "kat/normal_head_brow_r",
                                    anchor: {
                                        x: .55,
                                        y: .5
                                    }
                                }, {
                                    name: "hair_r",
                                    image: "kat/normal_head_hair_r",
                                    anchor: {
                                        x: .4,
                                        y: .3
                                    }
                                }, {
                                    name: "lips_closed",
                                    image: "kat/normal_head_lips_closed"
                                }, {
                                    name: "lips_opened",
                                    image: "kat/normal_head_lips_open",
                                    anchor: {
                                        x: .5,
                                        y: .8
                                    },
                                    alpha: 0
                                }, {
                                    name: "lips_joy",
                                    image: "kat/normal_head_lips_joy",
                                    pivot: {
                                        x: 2,
                                        y: 0
                                    },
                                    anchor: {
                                        x: .5,
                                        y: .8
                                    },
                                    alpha: 0
                                }]
                            }, {
                                name: "arm_r",
                                pivot: {
                                    x: 18,
                                    y: 7
                                },
                                position: {
                                    x: 28,
                                    y: 22
                                },
                                sprites: [{
                                    name: "bag",
                                    image: "kat/bag",
                                    anchor: {
                                        x: .7,
                                        y: .1
                                    },
                                    position: {
                                        x: -20,
                                        y: 75
                                    }
                                }, {
                                    name: "arm",
                                    image: "kat/arm_r"
                                }]
                            }, {
                                name: "arm_l_bag",
                                image: "kat/arm_l",
                                anchor: {
                                    x: .1,
                                    y: .1
                                },
                                position: {
                                    x: 55,
                                    y: 14
                                },
                                alpha: 0
                            }, {
                                name: "arm_l_scared",
                                image: "kat/arm_l_scared",
                                anchor: {
                                    x: .9,
                                    y: .9
                                },
                                position: {
                                    x: 30,
                                    y: 10
                                },
                                alpha: 0
                            }]
                        }, {
                            name: "falling",
                            parentStages: ["falling"],
                            sprites: [{
                                name: "tail",
                                image: "kat/hair_tail",
                                anchor: {
                                    x: .7,
                                    y: .4
                                },
                                position: {
                                    x: -5,
                                    y: -50
                                }
                            }, {
                                name: "leg_l",
                                image: "kat/leg_l",
                                anchor: {
                                    x: .5,
                                    y: .3
                                },
                                position: {
                                    x: 32,
                                    y: 105
                                },
                                rotation: -.3
                            }, {
                                name: "leg_r",
                                image: "kat/leg_r",
                                anchor: {
                                    x: .5,
                                    y: .3
                                },
                                position: {
                                    x: 20,
                                    y: 107
                                },
                                rotation: -.3
                            }, {
                                name: "arm_l_joy",
                                image: "kat/arm_l_joy",
                                anchor: {
                                    x: .1,
                                    y: .1
                                },
                                position: {
                                    x: 40,
                                    y: 10
                                },
                                animations: {
                                    dropRotate: {
                                        to: {
                                            rotation: -1.5
                                        },
                                        time: 300
                                    }
                                },
                                scenarios: {
                                    drop: [_Rewards2.default.instant(_Rewards2.default.startAnimation("dropRotate"))]
                                },
                                on: [{
                                    t: _Triggers2.default.onEvent(KatrinEvents.falling),
                                    r: _Rewards2.default.startScenario("drop")
                                }]
                            }, {
                                name: "body",
                                image: "kat/body"
                            }, {
                                name: "head",
                                image: "kat/normal_head",
                                anchor: {
                                    x: .4,
                                    y: .9
                                },
                                position: {
                                    x: 1,
                                    y: -90
                                },
                                sprites: [{
                                    name: "pupil_l",
                                    image: "kat/normal_head_pupil_l",
                                    position: {
                                        x: 0,
                                        y: 2
                                    }
                                }, {
                                    name: "pupil_r",
                                    image: "kat/normal_head_pupil_r",
                                    position: {
                                        x: 0,
                                        y: 2
                                    }
                                }, {
                                    name: "eyelid_l",
                                    image: "kat/normal_head_eyelid_l",
                                    anchor: {
                                        x: .7,
                                        y: .7
                                    }
                                }, {
                                    name: "brow_l",
                                    image: "kat/normal_head_brow_l",
                                    anchor: {
                                        x: .7,
                                        y: .5
                                    }
                                }, {
                                    name: "hair_l",
                                    image: "kat/normal_head_hair_l",
                                    anchor: {
                                        x: .55,
                                        y: .1
                                    }
                                }, {
                                    name: "nose",
                                    image: "kat/normal_head_nose"
                                }, {
                                    name: "eyelid_r",
                                    image: "kat/normal_head_eyelid_r",
                                    anchor: {
                                        x: .45,
                                        y: .7
                                    }
                                }, {
                                    name: "brow_r",
                                    image: "kat/normal_head_brow_r",
                                    anchor: {
                                        x: .55,
                                        y: .5
                                    }
                                }, {
                                    name: "hair_r",
                                    image: "kat/normal_head_hair_r",
                                    anchor: {
                                        x: .4,
                                        y: .3
                                    }
                                }, {
                                    name: "lips_closed",
                                    image: "kat/normal_head_lips_fall"
                                }]
                            }, {
                                name: "arm_r",
                                pivot: {
                                    x: 18,
                                    y: 7
                                },
                                position: {
                                    x: 28,
                                    y: 22
                                },
                                animations: {
                                    dropRotate: {
                                        to: {
                                            rotation: -1.5
                                        },
                                        time: 300
                                    }
                                },
                                scenarios: {
                                    drop: [_Rewards2.default.instant(_Rewards2.default.startAnimation("dropRotate"))]
                                },
                                on: [{
                                    t: _Triggers2.default.onEvent(KatrinEvents.falling),
                                    r: _Rewards2.default.startScenario("drop")
                                }],
                                sprites: [{
                                    name: "bag",
                                    image: "kat/bag",
                                    anchor: {
                                        x: .7,
                                        y: .1
                                    },
                                    position: {
                                        x: -20,
                                        y: 75
                                    }
                                }, {
                                    name: "arm",
                                    image: "kat/arm_r"
                                }]
                            }]
                        }]
                    })
                }
            }]),
            Katrin
        }();
        exports.default = Katrin
    }
    , {
        "../Animations": 1,
        "../Events": 5,
        "../Playable/Behaviors/UniversalBehavior/Rewards": 14,
        "../Playable/Behaviors/UniversalBehavior/Triggers": 15,
        "../Playable/Core/StagedSprite": 25,
        "./Drops": 37
    }],
    39: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _StagedSprite3 = _interopRequireDefault(require("../Playable/Core/StagedSprite"))
          , _Behavior2 = _interopRequireDefault(require("../Playable/Core/Behavior"))
          , _DraggingBehavior2 = _interopRequireDefault(require("../Playable/Behaviors/DraggingBehavior"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var MainContainer = function(_StagedSprite) {
            function MainContainer() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, MainContainer),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (MainContainer.__proto__ || Object.getPrototypeOf(MainContainer)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(MainContainer, _StagedSprite3.default),
            _createClass(MainContainer, [{
                key: "getEventHandlers",
                value: function() {
                    return {
                        playableStart: {
                            on: this.onStart
                        },
                        devWheel: {
                            on: this.onDevWheel
                        },
                        devKeyDown: {
                            on: this.onDevKeyDown
                        },
                        devKeyUp: {
                            on: this.onDevKeyUp
                        }
                    }
                }
            }, {
                key: "onStart",
                value: function() {
                    this.app.config.devMode && (_Behavior2.default.applyFor(this, {
                        behavior: _DraggingBehavior2.default,
                        offsetDependent: !0
                    }),
                    this.interactive = !1)
                }
            }, {
                key: "onDevWheel",
                value: function(e) {
                    var modifier = .025 * Math.sign(e.deltaY);
                    this.scale = {
                        x: this.scale.x + modifier,
                        y: this.scale.y + modifier
                    }
                }
            }, {
                key: "onDevKeyDown",
                value: function(e) {
                    this.updateInteractive()
                }
            }, {
                key: "onDevKeyUp",
                value: function(e) {
                    this.updateInteractive()
                }
            }, {
                key: "updateInteractive",
                value: function() {
                    this.interactive = this.app.devKeys[32],
                    this.buttonMode = this.app.devKeys[32]
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    return Object.assign(function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(MainContainer.prototype.__proto__ || Object.getPrototypeOf(MainContainer.prototype), "getDefaultConfig", this).call(this, config), {
                        anchor: {
                            x: 0,
                            y: 0
                        },
                        adaptivePosition: !0,
                        position: {
                            absolute: !0,
                            centered: !0
                        }
                    })
                }
            }]),
            MainContainer
        }();
        exports.default = MainContainer
    }
    , {
        "../Playable/Behaviors/DraggingBehavior": 9,
        "../Playable/Core/Behavior": 20,
        "../Playable/Core/StagedSprite": 25
    }],
    40: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _StagedSprite3 = _interopRequireDefault(require("../../Playable/Core/StagedSprite"))
          , _Triggers2 = _interopRequireDefault(require("../../Playable/Behaviors/UniversalBehavior/Triggers"))
          , _Rewards2 = _interopRequireDefault(require("../../Playable/Behaviors/UniversalBehavior/Rewards"))
          , _Lock2 = _interopRequireDefault(require("./Lock"))
          , _Animations2 = _interopRequireDefault(require("../../Animations"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var Icon = function(_StagedSprite) {
            function Icon() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Icon),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Icon, _StagedSprite3.default),
            _createClass(Icon, [{
                key: "onSetStage",
                value: function() {
                    switch (this.stage) {
                    case "ready":
                        this.animations.move.start();
                        break;
                    case "unlocked":
                        this.lock.scenarios.open.start(),
                        this.animations.move2.start()
                    }
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    var _config$data = config.data
                      , _config$data$prefix = _config$data.prefix
                      , prefix = void 0 === _config$data$prefix ? "packshot" : _config$data$prefix
                      , image = _config$data.image
                      , _config$data$index = _config$data.index
                      , index = void 0 === _config$data$index ? 0 : _config$data$index;
                    return Object.assign(function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(Icon.prototype.__proto__ || Object.getPrototypeOf(Icon.prototype), "getDefaultConfig", this).call(this, config), {
                        stages: ["default", "blocked", "ready", "unlocked"],
                        startStage: "default",
                        _animationsFields: ["defaultAnimations", "animations"],
                        defaultAnimations: {
                            move: {
                                to: {
                                    scale: {
                                        x: 1.2,
                                        y: 1.2
                                    }
                                },
                                time: 200,
                                pingPong: !0
                            },
                            move2: {
                                to: {
                                    scale: {
                                        x: 1.2,
                                        y: 1.2
                                    }
                                },
                                time: 300,
                                delay: 700,
                                pingPong: !0
                            }
                        },
                        sprites: [{
                            name: "pic",
                            image: prefix + "/" + image,
                            position: {
                                centered: !0
                            }
                        }, {
                            image: prefix + "/fade",
                            parentStages: ["blocked"],
                            alpha: .7,
                            tint: 0,
                            position: {
                                centered: !0
                            },
                            animations: {
                                hide: {
                                    to: {
                                        alpha: 0
                                    },
                                    time: 300,
                                    delay: 800
                                },
                                show: {
                                    from: {
                                        alpha: 0
                                    },
                                    to: {
                                        alpha: .4
                                    },
                                    time: 300
                                }
                            }
                        }, {
                            image: prefix + "/fade",
                            parentStages: ["ready"],
                            alpha: .7,
                            position: {
                                centered: !0
                            },
                            animations: {
                                hide: {
                                    to: {
                                        alpha: 0
                                    },
                                    time: 300,
                                    delay: 800
                                },
                                show: {
                                    from: {
                                        alpha: 0
                                    },
                                    to: {
                                        alpha: .4
                                    },
                                    time: 300,
                                    delay: 0
                                }
                            }
                        }, {
                            image: prefix + "/border",
                            position: {
                                centered: !0
                            }
                        }, {
                            parentStages: ["unlocked"],
                            image: prefix + "/border-a",
                            alpha: 0,
                            position: {
                                centered: !0
                            },
                            on: [{
                                t: _Triggers2.default.onAnimationEnd("show"),
                                c: function() {
                                    return !is_adwords
                                },
                                r: _Rewards2.default.startAnimation("idle")
                            }],
                            animations: {
                                show: {
                                    to: {
                                        alpha: 1
                                    },
                                    time: 300
                                },
                                idle: {
                                    to: {
                                        alpha: .2
                                    },
                                    pingPong: !0,
                                    loop: !0,
                                    easing: "inOutSine",
                                    time: 2e3
                                }
                            }
                        }, {
                            image: prefix + "/ok",
                            parentStages: ["ready"],
                            alpha: 0,
                            scale: {
                                x: 2,
                                y: 2
                            },
                            position: {
                                centered: !0
                            },
                            animations: {
                                show: {
                                    to: {
                                        scale: {
                                            x: 1,
                                            y: 1
                                        },
                                        alpha: 1
                                    },
                                    time: 500,
                                    easing: "outBounce"
                                }
                            }
                        }, {
                            name: "counter",
                            image: prefix + "/num/num-" + index,
                            position: {
                                x: 44,
                                y: 44
                            },
                            parentStages: ["default", "ready", "unlocked"],
                            animations: {
                                show: {
                                    creator: _Animations2.default.alphaScaleShow
                                }
                            }
                        }, {
                            name: "lock",
                            class: _Lock2.default,
                            parentStages: ["blocked", "unlocked"],
                            scale: {
                                x: .7,
                                y: .7
                            },
                            position: {
                                x: 70,
                                y: 70
                            },
                            position_center: {
                                x: 0,
                                y: 0
                            },
                            pivot: {
                                x: 41,
                                y: 57
                            }
                        }]
                    })
                }
            }]),
            Icon
        }();
        exports.default = Icon
    }
    , {
        "../../Animations": 1,
        "../../Playable/Behaviors/UniversalBehavior/Rewards": 14,
        "../../Playable/Behaviors/UniversalBehavior/Triggers": 15,
        "../../Playable/Core/StagedSprite": 25,
        "./Lock": 41
    }],
    41: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _Rewards2 = _interopRequireDefault(require("../../Playable/Behaviors/UniversalBehavior/Rewards"))
          , _Sprite3 = _interopRequireDefault(require("../../Playable/Core/Sprite"))
          , _Animations2 = _interopRequireDefault(require("../../Animations"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var Lock = function(_Sprite) {
            function Lock() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Lock),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Lock.__proto__ || Object.getPrototypeOf(Lock)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Lock, _Sprite3.default),
            _createClass(Lock, [{
                key: "getDefaultConfig",
                value: function(config) {
                    var _config$scale = config.scale
                      , scale = void 0 === _config$scale ? {
                        x: 1,
                        y: 1
                    } : _config$scale;
                    return Object.assign(function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(Lock.prototype.__proto__ || Object.getPrototypeOf(Lock.prototype), "getDefaultConfig", this).call(this, config), {
                        scale: scale,
                        animations: {
                            scale: {
                                to: {
                                    scale: {
                                        x: 1,
                                        y: 1
                                    }
                                },
                                time: 150,
                                easing: "outSine"
                            },
                            move: {
                                creator: _Animations2.default.moveToPosition,
                                position: "center",
                                time: 500,
                                easing: "inOutQuad"
                            },
                            open: {
                                to: {
                                    lockPartLight: {
                                        rotation: -.6
                                    },
                                    lockPart: {
                                        rotation: -.6
                                    }
                                },
                                time: 100
                            },
                            hide: {
                                to: {
                                    scale: {
                                        x: 0,
                                        y: 0
                                    },
                                    alpha: 0
                                },
                                time: 200,
                                easing: "inBack"
                            },
                            glow: {
                                to: {
                                    lockLight: {
                                        alpha: 1
                                    },
                                    lockPartLight: {
                                        alpha: 1
                                    }
                                },
                                time: 300
                            }
                        },
                        scenarios: {
                            open: [_Rewards2.default.startAnimation("move"), _Rewards2.default.playSound("packshot/lock"), _Rewards2.default.instant(_Rewards2.default.startAnimation("glow")), _Rewards2.default.startAnimation("scale"), _Rewards2.default.wait(250), _Rewards2.default.startAnimation("open"), _Rewards2.default.hide()]
                        },
                        sprites: [{
                            name: "lockPartLight",
                            image: "packshot/lock/lock-part-light",
                            alpha: 0,
                            anchor: {
                                x: .23,
                                y: .45
                            }
                        }, {
                            name: "lockLight",
                            alpha: 0,
                            image: "packshot/lock/lock-light"
                        }, {
                            name: "lockPart",
                            image: "packshot/lock/lock-part",
                            anchor: {
                                x: .23,
                                y: .45
                            }
                        }, {
                            name: "lock",
                            image: "packshot/lock/lock"
                        }]
                    })
                }
            }]),
            Lock
        }();
        exports.default = Lock
    }
    , {
        "../../Animations": 1,
        "../../Playable/Behaviors/UniversalBehavior/Rewards": 14,
        "../../Playable/Core/Sprite": 24
    }],
    42: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _StagedSprite3 = _interopRequireDefault(require("../../Playable/Core/StagedSprite"))
          , _Animations2 = _interopRequireDefault(require("../../Animations"))
          , _Icon2 = _interopRequireDefault(require("./Icon"))
          , _Behaviors2 = _interopRequireDefault(require("../../Behaviors"))
          , _Triggers2 = _interopRequireDefault(require("../../Playable/Behaviors/UniversalBehavior/Triggers"))
          , _Rewards2 = _interopRequireDefault(require("../../Playable/Behaviors/UniversalBehavior/Rewards"))
          , _Confetti2 = _interopRequireDefault(require("../../Playable/Sprites/Confetti"))
          , _ButtonPlay2 = _interopRequireDefault(require("../../Playable/Sprites/ButtonPlay"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var PackShot = function(_StagedSprite) {
            function PackShot() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, PackShot),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (PackShot.__proto__ || Object.getPrototypeOf(PackShot)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(PackShot, _StagedSprite3.default),
            _createClass(PackShot, [{
                key: "onShowStart",
                value: function() {
                    this.setStage("visible"),
                    this.confettiLocked || this.confetti.start(4e3)
                }
            }, {
                key: "lockConfetti",
                value: function() {
                    this.confettiLocked = !0
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    var _this2 = this
                      , _config$openedSlots = config.openedSlots
                      , openedSlots = void 0 === _config$openedSlots ? 1 : _config$openedSlots
                      , apiName = window.playableEnv && window.playableEnv.apiName || null
                      , language = utils.getLang()
                      , isTanCn = "tan" === apiName && "cn" === language
                      , icons = [0, 1, 2, 3, 4, 5].map(function(i) {
                        return {
                            class: _Icon2.default,
                            adaptivePosition: !0,
                            data: {
                                prefix: "packshot",
                                image: "slot-" + (i + 1),
                                index: i + 1
                            },
                            startStage: i < openedSlots ? "default" : "blocked",
                            parentStages: ["visible"],
                            position_portrait: {
                                x: (i % 2 ? 210 : 0) - 105,
                                y: 210 * Math.floor(i / 2) - 210 + 15
                            },
                            position: {
                                x: 210 * (i - 3 * Math.floor(i / 3)) - 210,
                                y: (i < 3 ? 0 : 210) - 105
                            },
                            animations: {
                                show: {
                                    creator: _Animations2.default.alphaScaleShow,
                                    time: 300,
                                    delay: 400
                                }
                            },
                            behaviors: [isTanCn ? function() {}
                            : _Behaviors2.default.clickInstall],
                            scenarios: {
                                setComplete: [_Rewards2.default.wait(350 * (i + 1)), _Rewards2.default.playSound("packshot/ok"), _Rewards2.default.setStage("ready")],
                                setUnlocked: [_Rewards2.default.wait(1200), _Rewards2.default.setStage("unlocked")]
                            },
                            on: [i < openedSlots && {
                                t: _Triggers2.default.onAnimationEnd("show"),
                                r: _Rewards2.default.startScenario("setComplete")
                            }, i === openedSlots && {
                                t: _Triggers2.default.onAnimationEnd("show"),
                                r: _Rewards2.default.startScenario("setUnlocked")
                            }]
                        }
                    });
                    return Object.assign(function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(PackShot.prototype.__proto__ || Object.getPrototypeOf(PackShot.prototype), "getDefaultConfig", this).call(this, config), {
                        stages: ["hidden", "visible"],
                        startStage: "hidden",
                        _spritesFields: ["sprites", "icons"],
                        sprites: [{
                            name: "confetti",
                            class: _Confetti2.default
                        }, {
                            name: "logo",
                            image: "logo",
                            parentStages: ["visible"],
                            scale: {
                                x: 1.2,
                                y: 1.2
                            },
                            adaptivePosition: !0,
                            position: {
                                centered: !0,
                                y: -256
                            },
                            position_portrait: {
                                centered: !0,
                                y: -374
                            },
                            animations: {
                                show: {
                                    creator: _Animations2.default.alphaScaleShow,
                                    time: 300,
                                    on: {
                                        start: function() {
                                            _this2.app.playSound("packshot/whoosh", {
                                                volume: 2
                                            })
                                        }
                                    }
                                }
                            }
                        }, !isTanCn && {
                            name: "title",
                            image: "play-next",
                            parentStages: ["visible"],
                            adaptivePosition: !0,
                            position: {
                                centered: !0,
                                y: 256
                            },
                            position_portrait: {
                                centered: !0,
                                y: 374
                            },
                            animations: {
                                show: {
                                    creator: _Animations2.default.alphaScaleShow,
                                    time: 300,
                                    delay: 400,
                                    on: {
                                        start: function() {
                                            _this2.app.playSound("packshot/whoosh", {
                                                volume: 2
                                            }),
                                            setTimeout(function() {
                                                _this2.app.finish()
                                            }, 2500)
                                        }
                                    }
                                }
                            }
                        }, isTanCn && {
                            name: "btn",
                            class: _ButtonPlay2.default,
                            image: "btn-green",
                            textImage: "download-now",
                            noPulse: !0,
                            parentStages: ["visible"],
                            position: {
                                centered: !0,
                                y: 256
                            },
                            position_portrait: {
                                centered: !0,
                                y: 374
                            },
                            adaptivePosition: !0,
                            animations: {
                                show: {
                                    creator: _Animations2.default.alphaScaleShow,
                                    time: 300,
                                    delay: 400,
                                    on: {
                                        start: function() {
                                            _this2.app.playSound("packshot/whoosh", {
                                                volume: 2
                                            }),
                                            setTimeout(function() {
                                                _this2.app.finish()
                                            }, 2500)
                                        }
                                    }
                                }
                            }
                        }],
                        icons: icons
                    })
                }
            }]),
            PackShot
        }();
        exports.default = PackShot
    }
    , {
        "../../Animations": 1,
        "../../Behaviors": 2,
        "../../Playable/Behaviors/UniversalBehavior/Rewards": 14,
        "../../Playable/Behaviors/UniversalBehavior/Triggers": 15,
        "../../Playable/Core/StagedSprite": 25,
        "../../Playable/Sprites/ButtonPlay": 32,
        "../../Playable/Sprites/Confetti": 33,
        "./Icon": 40
    }],
    43: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
                var parent = Object.getPrototypeOf(object);
                return null === parent ? void 0 : get(parent, property, receiver)
            }
            if ("value"in desc)
                return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0
        }
          , _Sprite3 = _interopRequireDefault(require("../Playable/Core/Sprite"))
          , _Animation2 = _interopRequireDefault(require("../Playable/Core/Animation"));
        _interopRequireDefault(require("../Animations"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var Rain = function(_Sprite) {
            function Rain() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Rain),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Rain.__proto__ || Object.getPrototypeOf(Rain)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Rain, _Sprite3.default),
            _createClass(Rain, [{
                key: "setup",
                value: function() {
                    _get(Rain.prototype.__proto__ || Object.getPrototypeOf(Rain.prototype), "setup", this).call(this),
                    this.graphics = new PIXI.Graphics,
                    this.addChild(this.graphics),
                    this.run()
                }
            }, {
                key: "hide",
                value: function() {
                    this.stop()
                }
            }, {
                key: "run",
                value: function() {
                    var _this2 = this;
                    this.startAnimation(),
                    this.config.time && (this.timer = setTimeout(function() {
                        _this2.timer = null,
                        _this2.stop()
                    }, this.config.time))
                }
            }, {
                key: "stop",
                value: function() {
                    this.isStop = !0
                }
            }, {
                key: "startAnimation",
                value: function() {
                    var _this3 = this;
                    this.animation = _Animation2.default.create(this, {
                        time: 1e3,
                        loop: !0,
                        autoStart: !0,
                        on: {
                            update: function() {
                                _this3.update()
                            }
                        }
                    })
                }
            }, {
                key: "stopAnimation",
                value: function() {
                    this.animation && this.animation.stop().remove()
                }
            }, {
                key: "update",
                value: function() {
                    var _this4 = this;
                    this.isStop || this.initParticles();
                    var isHaveActive = void 0;
                    this.graphics.clear(),
                    this.particles.forEach(function(particle, i) {
                        if (!particle.isActive) {
                            if (_this4.isStop)
                                return;
                            particle.isActive = !0,
                            particle.x = particle.origPosition.x,
                            particle.y = -Math.random() * (2 * _this4.getHeightStage())
                        }
                        particle.y > _this4.getHeightStage() - particle.heightBottom ? particle.isActive = !1 : (isHaveActive = !0,
                        _this4.displaceParticle(particle),
                        _this4.drawParticle(particle))
                    }),
                    this.isStop && !isHaveActive && this.stopAnimation()
                }
            }, {
                key: "displaceParticle",
                value: function(particle) {
                    particle.x += this.config.dropStep.x,
                    particle.y += this.config.dropStep.y
                }
            }, {
                key: "drawParticle",
                value: function(particle) {
                    this.graphics.lineStyle(particle.dropWidth, this.config.dropColor),
                    this.graphics.moveTo(particle.x, particle.y);
                    var k = Math.hypot(this.config.dropStep.x, this.config.dropStep.y) / particle.dropLength;
                    this.graphics.lineTo(particle.x + this.config.dropStep.x / k, particle.y + this.config.dropStep.y / k)
                }
            }, {
                key: "initParticles",
                value: function() {
                    this.particles = this.particles || [];
                    var quantity = this.getQuantityParticles();
                    if (!(this.particles.length >= quantity))
                        for (var particlesLength = this.particles.length, availableСolumns = particlesLength / this.config.particleDensity, i = 0; i < quantity - particlesLength; i++) {
                            var x = (availableСolumns + Math.floor(i / this.config.particleDensity)) * this.config.columnWidth;
                            this.particles.push(this.getConfigParticle(x))
                        }
                }
            }, {
                key: "getConfigParticle",
                value: function(baseX) {
                    var minDropLength = Math.min(this.config.dropLength.max, this.config.dropLength.min)
                      , minDropWidth = Math.min(this.config.dropWidth.max, this.config.dropWidth.min);
                    return {
                        origPosition: {
                            x: baseX + Math.random() * this.config.columnWidth,
                            y: -Math.random() * (5 * this.getHeightStage())
                        },
                        heightBottom: 100 * Math.random(),
                        dropLength: Math.round((this.config.dropLength.max - minDropLength) * Math.random() + minDropLength),
                        dropWidth: Math.round((this.config.dropWidth.max - minDropWidth) * Math.random() + minDropWidth)
                    }
                }
            }, {
                key: "getQuantityParticles",
                value: function() {
                    var width = this.getWidthStage();
                    return Math.ceil(width / this.config.columnWidth * this.config.particleDensity)
                }
            }, {
                key: "getWidthStage",
                value: function() {
                    return this.config.width || this.app.width
                }
            }, {
                key: "getHeightStage",
                value: function() {
                    return Math.max(this.app.origWidth, this.app.origHeight)
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    var position = Object.assign({}, config.position || {});
                    return Object.assign(_get(Rain.prototype.__proto__ || Object.getPrototypeOf(Rain.prototype), "getDefaultConfig", this).call(this, config), {
                        columnWidth: 10,
                        dropStep: {
                            x: -5,
                            y: 30
                        },
                        dropLength: {
                            max: 20,
                            min: 10
                        },
                        dropWidth: {
                            max: 3,
                            min: 1
                        },
                        dropColor: 16777215,
                        particleDensity: 3,
                        position: position
                    })
                }
            }]),
            Rain
        }();
        exports.default = Rain
    }
    , {
        "../Animations": 1,
        "../Playable/Core/Animation": 17,
        "../Playable/Core/Sprite": 24
    }],
    44: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.RodEvents = void 0;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
                var parent = Object.getPrototypeOf(object);
                return null === parent ? void 0 : get(parent, property, receiver)
            }
            if ("value"in desc)
                return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0
        }
          , _StagedSprite3 = _interopRequireDefault(require("../Playable/Core/StagedSprite"))
          , _Animations2 = _interopRequireDefault(require("../Animations"))
          , _Triggers2 = _interopRequireDefault(require("../Playable/Behaviors/UniversalBehavior/Triggers"))
          , _Rewards2 = _interopRequireDefault(require("../Playable/Behaviors/UniversalBehavior/Rewards"))
          , _Conditions2 = _interopRequireDefault(require("../Playable/Behaviors/UniversalBehavior/Conditions"))
          , _HitAreaBehavior2 = _interopRequireDefault(require("../Playable/Behaviors/HitAreaBehavior"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }

        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value,
            obj
        }
        var RodEvents = exports.RodEvents = {
            rodTouch: "rodTouch",
            rodBlocked: "rodBlocked",
            rodOpened: "rodOpened",
            rodPartStart: "rodPartStart"
        }
          , Rod = function(_StagedSprite) {
            function Rod() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Rod),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Rod.__proto__ || Object.getPrototypeOf(Rod)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Rod, _StagedSprite3.default),
            _createClass(Rod, [{
                key: "unlock",
                value: function() {
                    _get(Rod.prototype.__proto__ || Object.getPrototypeOf(Rod.prototype), "unlock", this).call(this),
                    this.setStage("hint")
                }
            }, {
                key: "lock",
                value: function() {
                    _get(Rod.prototype.__proto__ || Object.getPrototypeOf(Rod.prototype), "lock", this).call(this),
                    this.setStage("normal")
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    var _this2 = this
                      , name = config.name
                      , image = config.image
                      , _config$onOpenHide = config.onOpenHide
                      , onOpenHide = void 0 === _config$onOpenHide || _config$onOpenHide
                      , _config$blockedBy = config.blockedBy
                      , blockedBy = void 0 === _config$blockedBy ? null : _config$blockedBy
                      , _config$hitAreaData = config.hitAreaData
                      , hitAreaData = void 0 === _config$hitAreaData ? {} : _config$hitAreaData
                      , _config$blockRotation = config.blockRotation
                      , blockRotation = void 0 === _config$blockRotation ? -.1 : _config$blockRotation
                      , _config$openRotation = config.openRotation
                      , openRotation = void 0 === _config$openRotation ? -Math.PI / 2 : _config$openRotation;
                    config.image = null;
                    this.swivel = config.swivel || !1,
                    this.onOpenHide = onOpenHide,
                    this.blockedBy = blockedBy;
                    var _config$position_open = config.position_open
                      , position_open = void 0 === _config$position_open ? {
                        x: -150,
                        y: 0
                    } : _config$position_open
                      , _config$position_hint = config.position_hint
                      , position_hint = void 0 === _config$position_hint ? {
                        x: -30,
                        y: 0
                    } : _config$position_hint
                      , _config$position_bloc = config.position_block
                      , position_block = void 0 === _config$position_bloc ? {
                        x: -10,
                        y: 0
                    } : _config$position_bloc;
                    return Object.assign(_get(Rod.prototype.__proto__ || Object.getPrototypeOf(Rod.prototype), "getDefaultConfig", this).call(this, config), {
                        name: name,
                        stages: ["normal", "hint"],
                        anchor: {
                            x: 0,
                            y: 0
                        },
                        pivot: config.pivot || {
                            x: 0,
                            y: 0
                        },
                        blockedBy: blockedBy,
                        hitAreaData: hitAreaData,
                        position_open: position_open,
                        position_hint: position_hint,
                        position_block: position_block,
                        _spritesFields: ["defaultSprites", "sprites", "fingerSprites"],
                        _universalBehaviorFields: ["defaultOn", "on"],
                        _scenariosFields: ["defaultScenarios", "scenarios"],
                        animations: {
                            show: {
                                creator: _Animations2.default.alphaShow,
                                time: 25
                            },
                            hide: {
                                creator: _Animations2.default.alphaHide,
                                time: 350
                            },
                            hint: {
                                creator: _Animations2.default.moveToPosition,
                                position: "hint",
                                time: 750,
                                pingPong: !0,
                                noApplyPosition: !0,
                                repeat: 1,
                                easing: "inOutQuad"
                            },
                            open: {
                                creator: _Animations2.default.moveToPosition,
                                position: "open",
                                time: 250,
                                easing: "inQuad"
                            },
                            turn: {
                                to: {
                                    rotation: openRotation
                                },
                                time: 250,
                                easing: "inQuad"
                            },
                            moveBlock: {
                                creator: _Animations2.default.moveToPosition,
                                position: "block",
                                pingPong: !0,
                                noApplyPosition: !0,
                                time: 150,
                                easing: "inOutQuad"
                            },
                            turnBlock: {
                                to: {
                                    rotation: blockRotation
                                },
                                pingPong: !0,
                                noApplyPosition: !0,
                                time: 150,
                                easing: "inOutQuad"
                            },
                            blink: {
                                from: {
                                    red: {
                                        alpha: 0
                                    }
                                },
                                to: {
                                    red: {
                                        alpha: 1
                                    }
                                },
                                repeat: 1,
                                pingPong: !0,
                                time: 150
                            }
                        },
                        behaviors: [_HitAreaBehavior2.default.hitAreaBehavior],
                        defaultScenarios: {
                            reset: [_Rewards2.default.set({
                                blockedBy: blockedBy,
                                opened: !1
                            }), _Rewards2.default.setFlags(_defineProperty({}, config.name + "Opened", !1)), _Rewards2.default.applyPosition(), _Rewards2.default.unlock(), _Rewards2.default.show()],
                            hide: [_Rewards2.default.wait(150), _Rewards2.default.hide()],
                            open: [_Rewards2.default.stopAnimation("hint"), _Rewards2.default.applyPosition(), _Rewards2.default.playSound("rod-open"), _Rewards2.default.if(_Conditions2.default.values({
                                onOpenHide: !0
                            }), _Rewards2.default.startScenario("hide"), []), _Rewards2.default.emitEvent(RodEvents.rodTouch), _Rewards2.default.setFlags(_defineProperty({}, config.name + "Opened", !0)), _Rewards2.default.if(_Conditions2.default.values({
                                swivel: !0
                            }), _Rewards2.default.startAnimation("turn"), _Rewards2.default.startAnimation("open")), _Rewards2.default.emitEvent(RodEvents.rodOpened)],
                            openBlocked: [_Rewards2.default.emitEvent(RodEvents.rodBlocked), _Rewards2.default.playSound("rod-blocked"), _Rewards2.default.if(_Conditions2.default.values({
                                swivel: !0
                            }), _Rewards2.default.startAnimation("turnBlock"), _Rewards2.default.startAnimation("moveBlock"))],
                            blocked: [_Rewards2.default.stopAnimation("blink"), _Rewards2.default.startAnimation("blink")]
                        },
                        defaultOn: [{
                            t: [_Triggers2.default.onStart(), _Triggers2.default.onRestart()],
                            r: _Rewards2.default.startScenario("reset")
                        }, {
                            t: [_Triggers2.default.onStart(), _Triggers2.default.onRestart(), _Triggers2.default.onSkip()],
                            r: [_Rewards2.default.setStage("normal"), _Rewards2.default.stopAnimation("hint"), _Rewards2.default.applyPosition()]
                        }, {
                            t: _Triggers2.default.onEvent(RodEvents.rodPartStart, function(part) {
                                part.config.partOf === _this2.name && (part.interactive = !1,
                                _this2.animations.moveBlock.on("update", function() {
                                    part.position = _this2.position,
                                    part.rotation = _this2.rotation
                                }),
                                _this2.animations.turnBlock.on("update", function() {
                                    part.pivot = _this2.pivot,
                                    part.position = _this2.position,
                                    part.rotation = _this2.rotation
                                }))
                            })
                        }, {
                            t: _Triggers2.default.onPointerdown(),
                            c: [_Conditions2.default.values({
                                locked: !1,
                                opened: !1
                            }), _Conditions2.default.not(_Conditions2.default.values({
                                blockedBy: null
                            }))],
                            r: _Rewards2.default.startScenario("openBlocked")
                        }, {
                            t: _Triggers2.default.onPointerdown(),
                            c: _Conditions2.default.values({
                                locked: !1,
                                blockedBy: null,
                                opened: !1
                            }),
                            r: [_Rewards2.default.set({
                                opened: !0
                            }), _Rewards2.default.startScenario("open")]
                        }, {
                            t: _Triggers2.default.onEvent(RodEvents.rodTouch),
                            r: [_Rewards2.default.lock(), _Rewards2.default.stopAnimationLoopingWithDelay("hint")]
                        }, {
                            t: _Triggers2.default.onEvent(RodEvents.rodOpened, {
                                name: blockedBy
                            }),
                            r: _Rewards2.default.set({
                                blockedBy: null
                            })
                        }, {
                            t: _Triggers2.default.onEvent(RodEvents.rodBlocked, {
                                blockedBy: name
                            }),
                            r: _Rewards2.default.startScenario("blocked")
                        }],
                        defaultSprites: [{
                            name: "light",
                            image: image + "-light",
                            parentStages: ["hint"],
                            animations: {
                                show: {
                                    creator: _Animations2.default.alphaShow,
                                    time: 1500,
                                    repeat: 1,
                                    loop: !0,
                                    pingPong: !0,
                                    easing: "inOutQuad"
                                },
                                hide: {
                                    to: {
                                        alpha: 0
                                    },
                                    time: 150
                                }
                            }
                        }, {
                            name: "rod",
                            image: image
                        }, {
                            name: "red",
                            image: image + "-red",
                            alpha: 0
                        }]
                    })
                }
            }]),
            Rod
        }();
        exports.default = Rod
    }
    , {
        "../Animations": 1,
        "../Playable/Behaviors/HitAreaBehavior": 10,
        "../Playable/Behaviors/UniversalBehavior/Conditions": 13,
        "../Playable/Behaviors/UniversalBehavior/Rewards": 14,
        "../Playable/Behaviors/UniversalBehavior/Triggers": 15,
        "../Playable/Core/StagedSprite": 25
    }],
    45: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _Sprite3 = _interopRequireDefault(require("../Playable/Core/Sprite"))
          , _Rod2 = _interopRequireDefault(require("./Rod"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var RodContainer = function(_Sprite) {
            function RodContainer() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, RodContainer),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (RodContainer.__proto__ || Object.getPrototypeOf(RodContainer)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(RodContainer, _Sprite3.default),
            _createClass(RodContainer, [{
                key: "getDefaultConfig",
                value: function(config) {
                    var _config$on = config.on
                      , on = void 0 === _config$on ? [] : _config$on
                      , name = config.name;
                    config.on = [];
                    var rodSprite = Object.assign({
                        name: name,
                        class: _Rod2.default,
                        on: on
                    }, config.rodSprite);
                    return Object.assign(function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(RodContainer.prototype.__proto__ || Object.getPrototypeOf(RodContainer.prototype), "getDefaultConfig", this).call(this, config), {
                        _spritesFields: ["backSprites", "rodSprites", "sprites"],
                        _universalBehaviorFields: ["defaultOn", "on"],
                        rodSprites: [rodSprite]
                    })
                }
            }]),
            RodContainer
        }();
        exports.default = RodContainer
    }
    , {
        "../Playable/Core/Sprite": 24,
        "./Rod": 44
    }],
    46: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.SpiderEvents = void 0;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }()
          , _Sprite3 = _interopRequireDefault(require("../Playable/Core/Sprite"))
          , _Rewards2 = _interopRequireDefault(require("../Playable/Behaviors/UniversalBehavior/Rewards"))
          , _Animations2 = _interopRequireDefault(require("../Animations"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var SpiderEvents = exports.SpiderEvents = {
            move: "move"
        }
          , Spider = function(_Sprite) {
            function Spider() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Spider),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (Spider.__proto__ || Object.getPrototypeOf(Spider)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(Spider, _Sprite3.default),
            _createClass(Spider, [{
                key: "move",
                value: function() {
                    this.scenarios.move.reset().start()
                }
            }, {
                key: "fall",
                value: function() {
                    this.scenarios.fall.reset().start()
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    return Object.assign(function get(object, property, receiver) {
                        null === object && (object = Function.prototype);
                        var desc = Object.getOwnPropertyDescriptor(object, property);
                        if (void 0 === desc) {
                            var parent = Object.getPrototypeOf(object);
                            return null === parent ? void 0 : get(parent, property, receiver)
                        }
                        if ("value"in desc)
                            return desc.value;
                        var getter = desc.get;
                        return void 0 !== getter ? getter.call(receiver) : void 0
                    }(Spider.prototype.__proto__ || Object.getPrototypeOf(Spider.prototype), "getDefaultConfig", this).call(this, config), {
                        scenarios: {
                            move: {
                                rewards: [_Rewards2.default.emitEvent(SpiderEvents.move), _Rewards2.default.instant(_Rewards2.default.startAnimation("moveUp")), _Rewards2.default.startAnimation("paws"), _Rewards2.default.startAnimation("paws"), _Rewards2.default.startAnimation("paws"), _Rewards2.default.wait(1e3), _Rewards2.default.emitEvent(SpiderEvents.move), _Rewards2.default.instant(_Rewards2.default.startAnimation("moveDown")), _Rewards2.default.startAnimation("paws"), _Rewards2.default.startAnimation("paws"), _Rewards2.default.startAnimation("paws"), _Rewards2.default.wait(1500)],
                                loop: !0
                            },
                            fall: [_Rewards2.default.stopScenario("move"), _Rewards2.default.stopAnimation("moveUp"), _Rewards2.default.stopAnimation("moveDown"), _Rewards2.default.wait(100), _Rewards2.default.instant(_Rewards2.default.startAnimation("paws")), _Rewards2.default.instant(_Rewards2.default.startAnimation("fallScale")), _Rewards2.default.startAnimation("fall")]
                        },
                        animations: {
                            fallScale: {
                                to: {
                                    scale: {
                                        x: 1,
                                        y: .3
                                    }
                                },
                                time: 200,
                                easing: "outQuad"
                            },
                            fall: {
                                creator: _Animations2.default.moveToPosition,
                                position: "fall",
                                fromCurrentPosition: !0,
                                time: 500,
                                easing: "outQuad"
                            },
                            moveUp: {
                                creator: _Animations2.default.moveToPosition,
                                position: "up",
                                fromCurrentPosition: !0,
                                time: 1200,
                                easing: "inOutQuad"
                            },
                            moveDown: {
                                creator: _Animations2.default.moveToPosition,
                                position: "default",
                                fromCurrentPosition: !0,
                                time: 1200,
                                easing: "inOutQuad"
                            },
                            paws: {
                                to: {
                                    paw_1: {
                                        rotation: -.15
                                    },
                                    paw_2: {
                                        rotation: .1
                                    },
                                    paw_3: {
                                        rotation: .2
                                    },
                                    paw_4: {
                                        rotation: -.2
                                    },
                                    paw_5: {
                                        scale: {
                                            x: .8,
                                            y: .99
                                        }
                                    },
                                    paw_6: {
                                        rotation: .1
                                    }
                                },
                                time: 400,
                                easing: "inOutQuad",
                                pingPong: !0
                            },
                            idle: {
                                to: {
                                    body: {
                                        scale: {
                                            x: 1.03,
                                            y: 1.03
                                        }
                                    },
                                    head: {
                                        scale: {
                                            x: .99,
                                            y: .99
                                        }
                                    },
                                    nose: {
                                        rotation: .02
                                    }
                                },
                                time: 400,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0,
                                autoStart: !0
                            }
                        },
                        sprites: [{
                            name: "nose",
                            image: "spider/nose"
                        }, {
                            name: "paw_1",
                            image: "spider/paw_1",
                            anchor: {
                                x: .4,
                                y: .4
                            }
                        }, {
                            name: "paw_2",
                            image: "spider/paw_2",
                            anchor: {
                                x: .45,
                                y: .4
                            }
                        }, {
                            name: "paw_3",
                            image: "spider/paw_3",
                            anchor: {
                                x: .5,
                                y: .55
                            }
                        }, {
                            name: "paw_6",
                            image: "spider/paw_6",
                            anchor: {
                                x: .3,
                                y: .6
                            }
                        }, {
                            name: "head",
                            image: "spider/head"
                        }, {
                            name: "body",
                            image: "spider/body"
                        }, {
                            name: "paw_4",
                            image: "spider/paw_4",
                            anchor: {
                                x: .35,
                                y: .65
                            }
                        }, {
                            name: "paw_5",
                            image: "spider/paw_5",
                            anchor: {
                                x: .3,
                                y: .7
                            }
                        }]
                    })
                }
            }]),
            Spider
        }();
        exports.default = Spider
    }
    , {
        "../Animations": 1,
        "../Playable/Behaviors/UniversalBehavior/Rewards": 14,
        "../Playable/Core/Sprite": 24
    }],
    47: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
                var parent = Object.getPrototypeOf(object);
                return null === parent ? void 0 : get(parent, property, receiver)
            }
            if ("value"in desc)
                return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0
        }, _Sprite2 = require("../Playable/Core/Sprite"), _Sprite3 = (obj = _Sprite2) && obj.__esModule ? obj : {
            default: obj
        };
        var TilingSprite = function(_Sprite) {
            function TilingSprite() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, TilingSprite),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (TilingSprite.__proto__ || Object.getPrototypeOf(TilingSprite)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(TilingSprite, _Sprite3.default),
            _createClass(TilingSprite, [{
                key: "setup",
                value: function() {
                    _get(TilingSprite.prototype.__proto__ || Object.getPrototypeOf(TilingSprite.prototype), "setup", this).call(this);
                    var _config = this.config
                      , tileImage = _config.tileImage
                      , width = _config.width
                      , height = _config.height
                      , tint = _config.tint
                      , _config$tilePosition = _config.tilePosition
                      , tilePosition = void 0 === _config$tilePosition ? {
                        x: 0,
                        y: 0
                    } : _config$tilePosition
                      , _config$tileScale = _config.tileScale
                      , tileScale = void 0 === _config$tileScale ? {
                        x: 1,
                        y: 1
                    } : _config$tileScale
                      , _config$tileRotation = _config.tileRotation
                      , tileRotation = void 0 === _config$tileRotation ? 0 : _config$tileRotation
                      , _config$tilePivot = _config.tilePivot
                      , tilePivot = void 0 === _config$tilePivot ? {
                        x: 0,
                        y: 0
                    } : _config$tilePivot;
                    this.tilingSprite = this.addChild(new PIXI.TilingSprite(utils.getTexture(tileImage),width,height)),
                    this.tilingSprite.tilePosition = tilePosition,
                    this.tilingSprite.tileScale = tileScale,
                    this.tilingSprite.tint = tint,
                    this.tilingSprite.tileTransform.rotation = tileRotation,
                    this.tilingSprite.tileTransform.pivot = tilePivot
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    var image = config.image;
                    return config.image = null,
                    Object.assign(_get(TilingSprite.prototype.__proto__ || Object.getPrototypeOf(TilingSprite.prototype), "getDefaultConfig", this).call(this, config), {
                        tileImage: image
                    })
                }
            }]),
            TilingSprite
        }();
        exports.default = TilingSprite
    }
    , {
        "../Playable/Core/Sprite": 24
    }],
    48: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1,
                    descriptor.configurable = !0,
                    "value"in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            }
        }(), _get = function get(object, property, receiver) {
            null === object && (object = Function.prototype);
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (void 0 === desc) {
                var parent = Object.getPrototypeOf(object);
                return null === parent ? void 0 : get(parent, property, receiver)
            }
            if ("value"in desc)
                return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0
        }, _StagedSprite2 = require("../Playable/Core/StagedSprite"), _StagedSprite3 = (obj = _StagedSprite2) && obj.__esModule ? obj : {
            default: obj
        };
        var UIContainer = function(_StagedSprite) {
            function UIContainer() {
                return function(instance, Constructor) {
                    if (!(instance instanceof Constructor))
                        throw new TypeError("Cannot call a class as a function")
                }(this, UIContainer),
                function(self, call) {
                    if (!self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call
                }(this, (UIContainer.__proto__ || Object.getPrototypeOf(UIContainer)).apply(this, arguments))
            }
            return function(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
            }(UIContainer, _StagedSprite3.default),
            _createClass(UIContainer, [{
                key: "setStage",
                value: function(stage) {
                    var withAnimation = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                    this.isFinalStage(this.stage) || _get(UIContainer.prototype.__proto__ || Object.getPrototypeOf(UIContainer.prototype), "setStage", this).call(this, stage, withAnimation)
                }
            }, {
                key: "isFinalStage",
                value: function(stage) {
                    return -1 !== this.config.finalStages.indexOf(stage)
                }
            }, {
                key: "onSetStage",
                value: function() {
                    this.isFinalStage(this.stage) && ("final" === this.stage ? this.app.analytics.finalWin() : this.app.analytics.finalLose(),
                    this.app.playSound(this.config.sounds[this.stage]))
                }
            }, {
                key: "getDefaultConfig",
                value: function(config) {
                    return Object.assign(_get(UIContainer.prototype.__proto__ || Object.getPrototypeOf(UIContainer.prototype), "getDefaultConfig", this).call(this, config), {
                        stages: ["start", "game", "final", "finalFail"],
                        startStage: "start",
                        finalStages: ["final", "finalFail"],
                        sounds: {
                            final: "win",
                            finalFail: "lose"
                        },
                        adaptivePosition: !0,
                        position: {
                            absolute: !0,
                            centered: !0
                        }
                    })
                }
            }]),
            UIContainer
        }();
        exports.default = UIContainer
    }
    , {
        "../Playable/Core/StagedSprite": 25
    }],
    49: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _Animations2 = _interopRequireDefault(require("./Animations"))
          , _Events = require("./Events")
          , _Triggers2 = _interopRequireDefault(require("./Playable/Behaviors/UniversalBehavior/Triggers"))
          , _Rewards2 = _interopRequireDefault(require("./Playable/Behaviors/UniversalBehavior/Rewards"))
          , _UIContainer2 = _interopRequireDefault(require("./Sprites/UIContainer"))
          , _MainContainer2 = _interopRequireDefault(require("./Sprites/MainContainer"))
          , _ButtonMute2 = _interopRequireDefault(require("./Playable/Sprites/ButtonMute"))
          , _Disclaimer2 = _interopRequireDefault(require("./Playable/Sprites/Disclaimer"))
          , _Fade2 = _interopRequireDefault(require("./Playable/Sprites/Fade"))
          , _Katrin2 = _interopRequireDefault(require("./Sprites/Katrin"))
          , _TilingSprite2 = _interopRequireDefault(require("./Sprites/TilingSprite"))
          , _RodContainer2 = _interopRequireDefault(require("./Sprites/RodContainer"))
          , _MaskBehavior2 = _interopRequireDefault(require("./Playable/Behaviors/MaskBehavior"))
          , _Rod = require("./Sprites/Rod")
          , _Packshot2 = _interopRequireDefault(require("./Sprites/Packshot/Packshot"))
          , _Conditions2 = _interopRequireDefault(require("./Playable/Behaviors/UniversalBehavior/Conditions"))
          , _Rain2 = _interopRequireDefault(require("./Sprites/Rain"))
          , _Drops2 = _interopRequireDefault(require("./Sprites/Drops"))
          , _Spider = require("./Sprites/Spider")
          , _Spider2 = _interopRequireDefault(_Spider)
          , _Bulgar2 = _interopRequireDefault(require("./Sprites/Bulgar"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var TILES_floor_line_y = 855
          , TILES_earth_w = 5500
          , TILES_earth_h = 526
          , TILES_asphalt_1_w = 1390
          , TILES_asphalt_2_w = 50
          , TILES_asphalt_h = 65
          , TILES_well_water_w = 202
          , TILES_well_water_h = 550
          , TILES_roof_fill_w = 3900
          , TILES_roof_fill_h = 560
          , TILES_roof_floor_w = 3500
          , TILES_roof_floor_h = 68
          , TILES_floor_1_w = 1235
          , TILES_floor_2_w = 600
          , TILES_floor_3_w = 1e3
          , TILES_floor_h = 21
          , RODS_rod1 = "rod1"
          , RODS_rod2 = "rod2"
          , RODS_rod3 = "rod3"
          , RODS_rod4 = "rod4"
          , RODS_rod5 = "rod5"
          , RODS_rod6 = "rod6"
          , RODS_rod7 = "rod7";
        exports.default = {
            devMode: !0,
            sprites: [{
                name: "controller",
                scenarios: {
                    beginning: [_Rewards2.default.wait(1e3), _Rewards2.default.instant(_Rewards2.default.startScenario("rainSound")), _Rewards2.default.startScenario("car")],
                    car: [_Rewards2.default.emitEvent(_Events.Events.stageCar)],
                    carMove: [_Rewards2.default.wait(500), _Rewards2.default.emitEvent(_Events.Events.stageCarMove)],
                    rain: [_Rewards2.default.emitEvent(_Events.Events.stageRain), _Rewards2.default.playSound("thunder")],
                    elevator: [_Rewards2.default.wait(500), _Rewards2.default.startScenario("rainSoundStop"), _Rewards2.default.emitEvent(_Events.Events.stageElevator)],
                    elevatorFall: [_Rewards2.default.emitEvent(_Events.Events.elevatorFall)],
                    bulgar: [_Rewards2.default.wait(500), _Rewards2.default.emitEvent(_Events.Events.stageBulgar)],
                    home: [_Rewards2.default.wait(500), _Rewards2.default.emitEvent(_Events.Events.stageHome)],
                    basement: [_Rewards2.default.emitEvent(_Events.Events.stageBasement)],
                    finalFail: [_Rewards2.default.wait(2e3), _Rewards2.default.emitEvent(_Events.Events.gameFail)],
                    rainSoundStop: [_Rewards2.default.stopScenario("rainSound"), _Rewards2.default.stopSound("rain")],
                    rainSound: {
                        rewards: [_Rewards2.default.stopSound("rain"), _Rewards2.default.playSound("rain", {
                            volume: .5,
                            start: 0,
                            end: 1
                        }), _Rewards2.default.log("rain"), _Rewards2.default.wait(1e3), _Rewards2.default.playSound("rain", {
                            volume: .5,
                            start: 1,
                            end: 2
                        }), _Rewards2.default.wait(1e3)],
                        loop: !0
                    }
                },
                on: [{
                    t: _Triggers2.default.onStart(),
                    r: _Rewards2.default.startScenario("beginning")
                }, {
                    t: _Triggers2.default.onEvent(_Events.Events.stageCarEnd),
                    r: _Rewards2.default.startScenario("carMove")
                }, {
                    t: _Triggers2.default.onEvent(_Events.Events.stageCarMoveEnd),
                    r: _Rewards2.default.startScenario("rain")
                }, {
                    t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch, {
                        name: RODS_rod2
                    }),
                    r: _Rewards2.default.startScenario("elevator")
                }, {
                    t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch, {
                        name: RODS_rod3
                    }),
                    r: _Rewards2.default.startScenario("elevatorFall")
                }, {
                    t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch, {
                        name: RODS_rod4
                    }),
                    r: _Rewards2.default.startScenario("bulgar")
                }, {
                    t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch, {
                        name: RODS_rod7
                    }),
                    c: _Conditions2.default.flags({
                        rod5Opened: !1
                    }),
                    r: _Rewards2.default.startScenario("home")
                }, {
                    t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch, {
                        name: RODS_rod5
                    }),
                    c: _Conditions2.default.flags({
                        rod7Opened: !1
                    }),
                    r: _Rewards2.default.startScenario("basement")
                }, {
                    t: _Triggers2.default.onEvent(_Events.Events.bulgarFallEnd),
                    r: [_Rewards2.default.setFlags({
                        basementBulgar: !0
                    }), _Rewards2.default.if(_Conditions2.default.flags({
                        basementKatrin: !0
                    }), _Rewards2.default.startScenario("finalFail"), [])]
                }, {
                    t: _Triggers2.default.onEvent(_Events.Events.katrinFallEnd),
                    r: [_Rewards2.default.emitEvent(_Events.Events.stageBasementEnd), _Rewards2.default.startScenario("finalFail")]
                }, {
                    t: _Triggers2.default.onEvent(_Events.Events.katrinHomeEnd),
                    r: _Rewards2.default.emitEvent(_Events.Events.gameWin)
                }, {
                    t: _Triggers2.default.onceSkip(),
                    r: _Rewards2.default.startScenario("rainSoundStop")
                }]
            }, {
                name: "mainContainer",
                class: _MainContainer2.default,
                sprites: [{
                    name: "location",
                    pivot: {
                        x: 695,
                        y: 695
                    },
                    position_car: {
                        x: -100,
                        y: 0
                    },
                    position_rain: {
                        x: -800,
                        y: 0
                    },
                    position_elevator: {
                        x: -2250,
                        y: 0
                    },
                    position_bulgar: {
                        x: -3260,
                        y: 0
                    },
                    position_basement: {
                        x: -3260,
                        y: -310
                    },
                    position_home: {
                        x: -3500,
                        y: 0
                    },
                    animations: {
                        moveCar: {
                            creator: _Animations2.default.moveToPosition,
                            position: "car",
                            time: 500,
                            easing: "outQuad"
                        },
                        moveRain: {
                            creator: _Animations2.default.moveToPosition,
                            position: "rain",
                            time: 1e3,
                            easing: "inOutQuad"
                        },
                        moveElevator: {
                            creator: _Animations2.default.moveToPosition,
                            position: "elevator",
                            time: 2500,
                            easing: "inOutQuad"
                        },
                        moveBulgar: {
                            creator: _Animations2.default.moveToPosition,
                            position: "bulgar",
                            time: 2500,
                            easing: "inOutQuad"
                        },
                        moveHome: {
                            creator: _Animations2.default.moveToPosition,
                            position: "home",
                            time: 1e3,
                            easing: "inQuad"
                        },
                        moveBasement: {
                            creator: _Animations2.default.moveToPosition,
                            position: "basement",
                            time: 500,
                            easing: "inQuad"
                        }
                    },
                    scenarios: {
                        car: [_Rewards2.default.startAnimation("moveCar"), _Rewards2.default.emitEvent(_Events.Events.stageCarEnd)],
                        rain: [_Rewards2.default.startAnimation("moveRain"), _Rewards2.default.emitEvent(_Events.Events.stageRainEnd)],
                        elevator: [_Rewards2.default.startAnimation("moveElevator"), _Rewards2.default.emitEvent(_Events.Events.stageElevatorEnd)],
                        bulgar: [_Rewards2.default.startAnimation("moveBulgar"), _Rewards2.default.playSound("bandit"), _Rewards2.default.emitEvent(_Events.Events.stageBulgarEnd)],
                        home: [_Rewards2.default.startAnimation("moveHome"), _Rewards2.default.emitEvent(_Events.Events.stageHomeEnd)],
                        basement: [_Rewards2.default.startAnimation("moveBasement"), _Rewards2.default.emitEvent(_Events.Events.katrinFallEnd)]
                    },
                    on: [{
                        t: _Triggers2.default.onEvent(_Events.Events.stageCar),
                        r: _Rewards2.default.startScenario("car")
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageRain),
                        r: _Rewards2.default.startScenario("rain")
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageElevator),
                        r: _Rewards2.default.startScenario("elevator")
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageBulgar),
                        r: _Rewards2.default.startScenario("bulgar")
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageHome),
                        r: _Rewards2.default.startScenario("home")
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageBasement),
                        r: _Rewards2.default.startScenario("basement")
                    }],
                    sprites: [{
                        name: "town",
                        image: "back_town"
                    }, {
                        name: "rain",
                        class: _Rain2.default,
                        alpha: .8,
                        position: {
                            x: 0,
                            y: 1300
                        },
                        width: 1800,
                        on: [{
                            t: [_Triggers2.default.onEvent(_Events.Events.stageElevatorEnd), _Triggers2.default.onceSkip()],
                            r: _Rewards2.default.hide()
                        }]
                    }, {
                        name: "earth",
                        class: _TilingSprite2.default,
                        image: "back_earth",
                        width: TILES_earth_w,
                        height: TILES_earth_h,
                        position: {
                            x: 0,
                            y: TILES_floor_line_y + 6
                        }
                    }, {
                        name: "well",
                        image: "back_well",
                        anchor: {
                            x: 0,
                            y: 0
                        },
                        scale: {
                            x: 1.26,
                            y: 1
                        },
                        position: {
                            x: 1390,
                            y: TILES_floor_line_y + 6
                        },
                        sprites: [{
                            name: "water",
                            class: _TilingSprite2.default,
                            image: "well_water",
                            width: TILES_well_water_w,
                            height: TILES_well_water_h,
                            position: {
                                x: 0,
                                y: 20
                            }
                        }, {
                            name: "stairs",
                            image: "water/stairs",
                            position: {
                                x: 42,
                                y: 52
                            }
                        }, {
                            name: "waves",
                            position: {
                                x: 0,
                                y: 15
                            },
                            maskData: {
                                vertexes: [0, -10, TILES_well_water_w, -10, TILES_well_water_w, 50, 0, 50],
                                edit: !1
                            },
                            behaviors: [_MaskBehavior2.default.maskBehavior],
                            sprites: [{
                                name: "wave_1",
                                image: "water/well_wave_1",
                                position: {
                                    x: 0,
                                    y: 0
                                },
                                animations: {
                                    idle: {
                                        creator: _Animations2.default.moveToDxDy,
                                        dx: 15,
                                        time: 1e3,
                                        easing: "inOutQuad",
                                        pingPong: !0,
                                        loop: !0
                                    },
                                    idleScale: {
                                        from: {
                                            scale: {
                                                x: 1.3,
                                                y: 1
                                            }
                                        },
                                        to: {
                                            scale: {
                                                x: 1.6,
                                                y: 1
                                            }
                                        },
                                        time: 1500,
                                        easing: "inOutQuad",
                                        pingPong: !0,
                                        loop: !0
                                    }
                                },
                                on: [{
                                    t: _Triggers2.default.onStart(),
                                    r: [_Rewards2.default.startAnimation("idle"), _Rewards2.default.startAnimation("idleScale")]
                                }, {
                                    t: _Triggers2.default.onEvent(_Events.Events.stageElevatorEnd),
                                    r: [_Rewards2.default.stopAnimation("idle"), _Rewards2.default.stopAnimation("idleScale")]
                                }]
                            }, {
                                name: "wave_2",
                                image: "water/well_wave_2",
                                position: {
                                    x: 30,
                                    y: 0
                                },
                                animations: {
                                    idle: {
                                        creator: _Animations2.default.moveToDxDy,
                                        dx: -10,
                                        time: 1200,
                                        easing: "inOutQuad",
                                        pingPong: !0,
                                        loop: !0
                                    },
                                    idleScale: {
                                        from: {
                                            scale: {
                                                x: 1.3,
                                                y: 1
                                            }
                                        },
                                        to: {
                                            scale: {
                                                x: 1.6,
                                                y: 1
                                            }
                                        },
                                        time: 1800,
                                        easing: "inOutQuad",
                                        pingPong: !0,
                                        loop: !0
                                    }
                                },
                                on: [{
                                    t: _Triggers2.default.onStart(),
                                    r: [_Rewards2.default.startAnimation("idle"), _Rewards2.default.startAnimation("idleScale")]
                                }, {
                                    t: _Triggers2.default.onEvent(_Events.Events.stageElevatorEnd),
                                    r: [_Rewards2.default.stopAnimation("idle"), _Rewards2.default.stopAnimation("idleScale")]
                                }]
                            }]
                        }, {
                            name: "shadow",
                            image: "water/well_water_shadow_scale2",
                            anchor: {
                                x: 0,
                                y: 0
                            },
                            scale: {
                                x: 2,
                                y: 2
                            },
                            position: {
                                x: 0,
                                y: 80
                            }
                        }]
                    }, {
                        name: "asphalt_1",
                        class: _TilingSprite2.default,
                        image: "back/asphalt",
                        width: TILES_asphalt_1_w,
                        height: TILES_asphalt_h,
                        position: {
                            x: 0,
                            y: TILES_floor_line_y
                        }
                    }, {
                        name: "asphalt_2",
                        class: _TilingSprite2.default,
                        image: "back/asphalt",
                        width: TILES_asphalt_2_w,
                        height: TILES_asphalt_h,
                        position: {
                            x: 1645,
                            y: TILES_floor_line_y
                        }
                    }, {
                        name: "drops",
                        class: _Drops2.default,
                        position: {
                            x: 0,
                            y: 855
                        },
                        count: 10,
                        dxMin: 30,
                        dxMax: 130,
                        dy: 20,
                        drop: {
                            prefix: "water/drops_",
                            images: 6,
                            time: 400
                        },
                        on: [{
                            t: _Triggers2.default.onEvent(_Events.Events.stageElevatorEnd),
                            r: _Rewards2.default.hide()
                        }, {
                            t: _Triggers2.default.onStart(),
                            r: _Rewards2.default.show()
                        }]
                    }, {
                        name: "wall_3",
                        image: "walls_3",
                        position: {
                            x: 4330,
                            y: 529
                        },
                        scale: {
                            x: 1,
                            y: 1.05
                        }
                    }, {
                        name: "wall_2",
                        image: "walls_2",
                        position: {
                            x: 3090,
                            y: 537
                        }
                    }, {
                        name: "wall_1",
                        image: "walls_1",
                        position: {
                            x: 1700,
                            y: 537
                        },
                        sprites: [{
                            name: "button",
                            image: "back/elevator_button",
                            position: {
                                x: 1135,
                                y: 180
                            }
                        }]
                    }, {
                        name: "roof_rod",
                        image: "back/roof_rod",
                        rotation: Math.PI / 2,
                        position: {
                            x: 1567,
                            y: 682
                        },
                        scale: {
                            x: 1.2,
                            y: 1
                        }
                    }, {
                        name: "roof",
                        position: {
                            x: 1406,
                            y: 0
                        },
                        sprites: [{
                            name: "roof_fill",
                            class: _TilingSprite2.default,
                            image: "back/roof_fill",
                            width: TILES_roof_fill_w,
                            height: TILES_roof_fill_h,
                            position: {
                                x: 0,
                                y: 0
                            },
                            maskData: {
                                vertexes: [385, 0, 300, 190, 65, 310, 25, 415, 25, TILES_roof_fill_h, TILES_roof_fill_w, TILES_roof_fill_h, TILES_roof_fill_w, 0],
                                edit: !1
                            },
                            behaviors: [_MaskBehavior2.default.maskBehavior]
                        }, {
                            name: "roof_rod",
                            image: "back/roof_rod",
                            position: {
                                x: 25,
                                y: TILES_roof_fill_h - 50
                            }
                        }, {
                            name: "roof_floor",
                            class: _TilingSprite2.default,
                            image: "back/roof_floor",
                            width: TILES_roof_floor_w,
                            height: TILES_roof_floor_h,
                            position: {
                                x: 283,
                                y: TILES_roof_fill_h - TILES_roof_floor_h - 4
                            }
                        }, {
                            name: "roof_line",
                            image: "back/roof_line"
                        }]
                    }, {
                        name: "elevator",
                        image: "back_elevator",
                        position: {
                            x: 2867,
                            y: 0
                        },
                        sprites: [{
                            name: "web",
                            image: "back/web",
                            position: {
                                x: 20,
                                y: 576
                            },
                            animations: {
                                move: {
                                    from: {
                                        scale: {
                                            x: 1,
                                            y: 1
                                        }
                                    },
                                    to: {
                                        scale: {
                                            x: .98,
                                            y: .98
                                        }
                                    },
                                    time: 900,
                                    delay: 200,
                                    pingPong: !0,
                                    easing: "inOutBack"
                                }
                            },
                            on: [{
                                t: _Triggers2.default.onEvent(_Spider.SpiderEvents.move),
                                r: _Rewards2.default.startAnimation("move")
                            }]
                        }, {
                            name: "spider",
                            class: _Spider2.default,
                            position: {
                                x: 20,
                                y: 680
                            },
                            position_up: {
                                x: 35,
                                y: 600
                            },
                            position_fall: {
                                x: 35,
                                y: 1820
                            },
                            on: [{
                                t: _Triggers2.default.onEvent(_Events.Events.stageElevatorEnd),
                                r: _Rewards2.default.call("move")
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.elevatorFall),
                                r: _Rewards2.default.call("fall")
                            }]
                        }, {
                            name: "cabin",
                            image: "back/elevator",
                            position: {
                                x: 25,
                                y: 162
                            },
                            position_fall: {
                                x: 25,
                                y: TILES_floor_line_y + 2
                            },
                            animations: {
                                fall: {
                                    creator: _Animations2.default.moveToPosition,
                                    position: "fall",
                                    time: 800,
                                    easing: "outBounce"
                                }
                            },
                            on: [{
                                t: _Triggers2.default.onEvent(_Events.Events.elevatorFall),
                                r: _Rewards2.default.startAnimation("fall")
                            }, {
                                t: _Triggers2.default.onAnimationEnd("fall"),
                                r: _Rewards2.default.emitEvent(_Events.Events.elevatorFallEnd)
                            }]
                        }, {
                            name: "shadow",
                            image: "back/elevator_shadow_scale2",
                            scale: {
                                x: 2,
                                y: 2
                            },
                            anchor: {
                                x: 0,
                                y: 0
                            }
                        }]
                    }, {
                        name: "basement",
                        image: "back/basement",
                        position: {
                            x: 3656,
                            y: TILES_floor_line_y - 7
                        },
                        sprites: [{
                            name: "water",
                            image: "water/mud",
                            position: {
                                x: 28,
                                y: 223
                            },
                            anchor: {
                                x: 0,
                                y: 0
                            },
                            maskData: {
                                vertexes: [0, 110, 0, 0, 530, 0, 530, 110]
                            },
                            behaviors: [_MaskBehavior2.default.maskBehavior]
                        }, {
                            name: "bulgar",
                            class: _Bulgar2.default,
                            position: {
                                x: 294,
                                y: -220
                            },
                            position_fall: {
                                x: 294,
                                y: 90
                            },
                            animations: {
                                fall: {
                                    creator: _Animations2.default.moveToPosition,
                                    position: "fall",
                                    time: 400,
                                    easing: "inQuad"
                                }
                            },
                            on: [{
                                t: _Triggers2.default.onEvent(_Rod.RodEvents.rodBlocked, {
                                    name: RODS_rod7
                                }),
                                r: _Rewards2.default.call("smack")
                            }, {
                                t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch, {
                                    name: RODS_rod6
                                }),
                                r: _Rewards2.default.call("fall")
                            }, {
                                t: _Triggers2.default.onAnimationStart("fall"),
                                r: _Rewards2.default.emitEvent(_Events.Events.bulgarFall)
                            }, {
                                t: _Triggers2.default.onAnimationEnd("fall"),
                                r: _Rewards2.default.emitEvent(_Events.Events.bulgarFallEnd)
                            }]
                        }, {
                            name: "fell",
                            position: {
                                x: 64,
                                y: 132
                            },
                            visible: !1,
                            on: [{
                                t: _Triggers2.default.onEvent(_Events.Events.stageBasementEnd),
                                r: _Rewards2.default.show()
                            }],
                            sprites: [{
                                name: "sitting",
                                image: "kat/sitting",
                                anchor: {
                                    x: .7,
                                    y: .4
                                }
                            }, {
                                name: "bag",
                                image: "kat/bag_sit",
                                position: {
                                    x: 168,
                                    y: 119
                                },
                                animations: {
                                    idle: {
                                        creator: _Animations2.default.moveToDxDy,
                                        dy: -10,
                                        time: 1500,
                                        easing: "inOutQuad",
                                        pingPong: !0,
                                        loop: !0
                                    },
                                    idleRotate: {
                                        from: {
                                            rotation: -.2
                                        },
                                        to: {
                                            rotation: .2
                                        },
                                        time: 1200,
                                        easing: "inOutQuad",
                                        pingPong: !0,
                                        loop: !0
                                    }
                                },
                                on: [{
                                    t: _Triggers2.default.onEvent(_Events.Events.stageBasementEnd),
                                    r: [_Rewards2.default.startAnimation("idle"), _Rewards2.default.startAnimation("idleRotate")]
                                }]
                            }, {
                                name: "flow",
                                image: "water/head_flow_1",
                                position: {
                                    x: 57,
                                    y: 24
                                },
                                scale: {
                                    x: 2,
                                    y: 2
                                },
                                visible: !1,
                                animations: {
                                    show: {
                                        creator: _Animations2.default.sequence,
                                        images: {
                                            prefix: "water/head_flow_",
                                            count: 7
                                        },
                                        time: 500,
                                        delay: 200
                                    }
                                },
                                on: [{
                                    t: _Triggers2.default.onEvent(_Events.Events.stageBasementEnd),
                                    r: _Rewards2.default.show()
                                }, {
                                    t: _Triggers2.default.onAnimationEnd("show"),
                                    r: _Rewards2.default.hide()
                                }]
                            }, {
                                name: "flow_chin",
                                image: "water/chin_flow_1",
                                position: {
                                    x: 89,
                                    y: 103
                                },
                                scale: {
                                    x: 2,
                                    y: 2
                                },
                                visible: !1,
                                animations: {
                                    show: {
                                        creator: _Animations2.default.sequence,
                                        images: {
                                            prefix: "water/chin_flow_",
                                            count: 7
                                        },
                                        time: 600,
                                        delay: 400
                                    }
                                },
                                on: [{
                                    t: _Triggers2.default.onEvent(_Events.Events.stageBasementEnd),
                                    r: _Rewards2.default.show()
                                }, {
                                    t: _Triggers2.default.onAnimationEnd("show"),
                                    r: _Rewards2.default.hide()
                                }]
                            }]
                        }, {
                            name: "water",
                            position: {
                                x: 28,
                                y: 223
                            },
                            maskData: {
                                vertexes: [0, 110, 0, -50, 530, -50, 530, 110],
                                edit: !1
                            },
                            behaviors: [_MaskBehavior2.default.maskBehavior],
                            sprites: [{
                                name: "splash_1",
                                image: "water/basement_splash_1",
                                position: {
                                    x: -6,
                                    y: -44
                                },
                                visible: !1,
                                animations: {
                                    show: {
                                        creator: _Animations2.default.sequence,
                                        images: {
                                            prefix: "water/basement_splash_",
                                            count: 8
                                        },
                                        time: 700,
                                        delay: 500
                                    }
                                },
                                on: [{
                                    t: _Triggers2.default.onEvent(_Events.Events.stageBasement),
                                    r: _Rewards2.default.show()
                                }, {
                                    t: _Triggers2.default.onAnimationEnd("show"),
                                    r: _Rewards2.default.hide()
                                }]
                            }, {
                                name: "splash_2",
                                image: "water/basement_splash_1",
                                position: {
                                    x: 310,
                                    y: -44
                                },
                                visible: !1,
                                animations: {
                                    show: {
                                        creator: _Animations2.default.sequence,
                                        images: {
                                            prefix: "water/basement_splash_",
                                            count: 8
                                        },
                                        time: 700,
                                        delay: 200
                                    }
                                },
                                on: [{
                                    t: _Triggers2.default.onEvent(_Events.Events.bulgarFall),
                                    r: _Rewards2.default.show()
                                }, {
                                    t: _Triggers2.default.onAnimationEnd("show"),
                                    r: _Rewards2.default.hide()
                                }]
                            }, {
                                name: "mud_top",
                                image: "water/mud_top",
                                position: {
                                    x: 0,
                                    y: 0
                                },
                                animations: {
                                    idle: {
                                        from: {
                                            scale: {
                                                x: 1,
                                                y: 1
                                            }
                                        },
                                        to: {
                                            scale: {
                                                x: 1.3,
                                                y: 1
                                            }
                                        },
                                        time: 1500,
                                        easing: "inOutQuad",
                                        pingPong: !0,
                                        loop: !0
                                    }
                                },
                                on: [{
                                    t: _Triggers2.default.onEvent(_Events.Events.stageElevatorEnd),
                                    r: [_Rewards2.default.startAnimation("idle")]
                                }]
                            }, {
                                name: "wave_2",
                                image: "water/mud_wave_2",
                                position: {
                                    x: 0,
                                    y: 36
                                },
                                animations: {
                                    idle: {
                                        creator: _Animations2.default.moveToDxDy,
                                        dx: -20,
                                        time: 1200,
                                        easing: "inOutQuad",
                                        pingPong: !0,
                                        loop: !0
                                    },
                                    idleScale: {
                                        from: {
                                            scale: {
                                                x: 1.1,
                                                y: 1
                                            }
                                        },
                                        to: {
                                            scale: {
                                                x: 1.3,
                                                y: 1
                                            }
                                        },
                                        time: 1800,
                                        easing: "inOutQuad",
                                        pingPong: !0,
                                        loop: !0
                                    }
                                },
                                on: [{
                                    t: _Triggers2.default.onEvent(_Events.Events.stageElevatorEnd),
                                    r: [_Rewards2.default.startAnimation("idle"), _Rewards2.default.startAnimation("idleScale")]
                                }]
                            }, {
                                name: "wave_1",
                                image: "water/mud_wave_1",
                                position: {
                                    x: -20,
                                    y: 37
                                },
                                animations: {
                                    idle: {
                                        creator: _Animations2.default.moveToDxDy,
                                        dx: 15,
                                        time: 1e3,
                                        easing: "inOutQuad",
                                        pingPong: !0,
                                        loop: !0
                                    },
                                    idleScale: {
                                        from: {
                                            scale: {
                                                x: 1,
                                                y: 1
                                            }
                                        },
                                        to: {
                                            scale: {
                                                x: 1.3,
                                                y: 1
                                            }
                                        },
                                        time: 1500,
                                        easing: "inOutQuad",
                                        pingPong: !0,
                                        loop: !0
                                    }
                                },
                                on: [{
                                    t: _Triggers2.default.onEvent(_Events.Events.stageElevatorEnd),
                                    r: [_Rewards2.default.startAnimation("idle"), _Rewards2.default.startAnimation("idleScale")]
                                }]
                            }]
                        }]
                    }, {
                        name: "door",
                        image: "back/door",
                        position: {
                            x: 4362,
                            y: 537
                        },
                        scale: {
                            x: 1.16,
                            y: 1
                        }
                    }, {
                        name: "floor_1",
                        class: _TilingSprite2.default,
                        image: "back/floor",
                        width: TILES_floor_1_w,
                        height: TILES_floor_h,
                        position: {
                            x: 1662,
                            y: TILES_floor_line_y + 2
                        }
                    }, {
                        name: "floor_2",
                        class: _TilingSprite2.default,
                        image: "back/floor",
                        width: TILES_floor_2_w,
                        height: TILES_floor_h,
                        position: {
                            x: 3090,
                            y: TILES_floor_line_y + 2
                        }
                    }, {
                        name: "floor_3",
                        class: _TilingSprite2.default,
                        image: "back/floor",
                        width: TILES_floor_3_w,
                        height: TILES_floor_h,
                        position: {
                            x: 4220,
                            y: TILES_floor_line_y + 2
                        }
                    }, {
                        name: "rods",
                        sprites: [{
                            name: RODS_rod2,
                            class: _RodContainer2.default,
                            position: {
                                x: 1750,
                                y: 480
                            },
                            rotation: Math.PI / 2,
                            rodSprite: {
                                image: "rods/rod-4",
                                hitAreaData: {
                                    vertexes: [3, 4, 7, 100, 81, 100, 109, 77, 331, 77, 377, 106, 445, 110, 441, 0, 382, -1, 333, 29, 110, 28, 76, 4]
                                },
                                blockedBy: RODS_rod1,
                                pivot: {
                                    x: 385,
                                    y: 54
                                },
                                position: {
                                    x: 385,
                                    y: 54
                                },
                                swivel: !0,
                                onOpenHide: !1
                            },
                            backSprites: [{
                                image: "pin_point",
                                position: {
                                    x: 362,
                                    y: 362
                                },
                                rotation: -Math.PI / 2
                            }, {
                                image: "pin_point",
                                position: {
                                    x: 362,
                                    y: 32
                                },
                                rotation: -Math.PI / 2
                            }],
                            on: [{
                                t: _Triggers2.default.onStart(),
                                r: _Rewards2.default.lock()
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.stageRainEnd),
                                r: _Rewards2.default.unlock()
                            }, {
                                t: _Triggers2.default.onEvent(_Rod.RodEvents.rodOpened, {
                                    name: RODS_rod1
                                }),
                                r: _Rewards2.default.unlock()
                            }]
                        }, {
                            name: RODS_rod1,
                            class: _RodContainer2.default,
                            position: {
                                x: 1239,
                                y: 473
                            },
                            rodSprite: {
                                image: "rods/rod-1",
                                hitAreaData: {
                                    vertexes: [3, 4, 7, 100, 81, 100, 109, 71, 370, 73, 370, 29, 110, 28, 76, 4]
                                },
                                fingerSprites: [{
                                    name: "drops_1",
                                    class: _Drops2.default,
                                    position: {
                                        x: 15,
                                        y: 10
                                    },
                                    visible: !1,
                                    count: 4,
                                    dxMin: 4,
                                    dxMax: 10,
                                    dy: 5,
                                    drop: {
                                        prefix: "water/drops_",
                                        images: 6,
                                        time: 400
                                    },
                                    on: [{
                                        t: _Triggers2.default.onStart(),
                                        r: _Rewards2.default.show()
                                    }, {
                                        t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch, {
                                            name: RODS_rod1
                                        }),
                                        r: _Rewards2.default.hide()
                                    }]
                                }, {
                                    name: "drops_2",
                                    class: _Drops2.default,
                                    position: {
                                        x: 75,
                                        y: 30
                                    },
                                    visible: !1,
                                    count: 5,
                                    dxMin: 8,
                                    dxMax: 15,
                                    dy: 10,
                                    drop: {
                                        prefix: "water/drops_",
                                        images: 6,
                                        time: 400
                                    },
                                    on: [{
                                        t: _Triggers2.default.onStart(),
                                        r: _Rewards2.default.show()
                                    }, {
                                        t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch, {
                                            name: RODS_rod1
                                        }),
                                        r: _Rewards2.default.hide()
                                    }]
                                }, {
                                    name: "finger",
                                    image: "finger",
                                    position: {
                                        x: 45,
                                        y: 35
                                    },
                                    anchor: {
                                        x: .1,
                                        y: .1
                                    },
                                    scale: {
                                        x: .6,
                                        y: .6
                                    },
                                    visible: !1,
                                    animations: {
                                        show: {
                                            creator: _Animations2.default.moveFromDxDy,
                                            dx: 50,
                                            dy: 50,
                                            time: 300,
                                            easing: "outQuad"
                                        },
                                        showAlpha: {
                                            from: {
                                                alpha: 0
                                            },
                                            to: {
                                                alpha: 1
                                            },
                                            time: 300,
                                            easing: "inOutQuad"
                                        },
                                        hide: {
                                            creator: _Animations2.default.moveToDxDy,
                                            dx: 50,
                                            dy: 50,
                                            time: 300,
                                            easing: "outQuad"
                                        },
                                        hideAlpha: {
                                            from: {
                                                alpha: 1
                                            },
                                            to: {
                                                alpha: 0
                                            },
                                            time: 300,
                                            easing: "inOutQuad"
                                        },
                                        hint: {
                                            to: {
                                                rotation: -.2
                                            },
                                            time: 750,
                                            pingPong: !0,
                                            repeat: 1,
                                            easing: "inOutQuad"
                                        }
                                    },
                                    scenarios: {
                                        hint: {
                                            rewards: [_Rewards2.default.show(), _Rewards2.default.startAnimation("showAlpha"), _Rewards2.default.emitEvent(_Events.Events.tutorialStart), _Rewards2.default.startAnimation("hint"), _Rewards2.default.hide(), _Rewards2.default.startAnimation("hideAlpha")],
                                            loop: !0
                                        }
                                    },
                                    on: [{
                                        t: _Triggers2.default.onEvent(_Events.Events.stageRainEnd),
                                        r: _Rewards2.default.startScenario("hint")
                                    }, {
                                        t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch),
                                        r: [_Rewards2.default.stopScenario("hint"), _Rewards2.default.stopAnimation("hint"), _Rewards2.default.call("hardHide")]
                                    }]
                                }]
                            },
                            backSprites: [{
                                image: "pin",
                                position: {
                                    x: 180,
                                    y: 23
                                }
                            }, {
                                image: "pin",
                                position: {
                                    x: 520,
                                    y: 23
                                }
                            }],
                            on: [{
                                t: _Triggers2.default.onStart(),
                                r: _Rewards2.default.lock()
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.stageRainEnd),
                                r: _Rewards2.default.unlock()
                            }, {
                                t: _Triggers2.default.onEvent(_Events.Events.tutorialStart),
                                r: [_Rewards2.default.startAnimation("hint"), _Rewards2.default.setStage("hint")]
                            }]
                        }, {
                            class: _RodContainer2.default,
                            position: {
                                x: 1750,
                                y: 480
                            },
                            rotation: Math.PI / 2,
                            rodSprite: {
                                image: "rods/rod-4",
                                partOf: RODS_rod2,
                                maskData: {
                                    vertexes: [0, 0, 0, 54, 100, 54, 100, 0]
                                },
                                behaviors: [_MaskBehavior2.default.maskBehavior]
                            },
                            on: [{
                                t: _Triggers2.default.onStart(),
                                r: [_Rewards2.default.emitEvent(_Rod.RodEvents.rodPartStart), _Rewards2.default.lock()]
                            }, {
                                t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch, {
                                    name: RODS_rod2
                                }),
                                r: _Rewards2.default.call("hardHide")
                            }]
                        }, {
                            name: RODS_rod4,
                            class: _RodContainer2.default,
                            position: {
                                x: 2873,
                                y: 475
                            },
                            rotation: Math.PI / 2,
                            rodSprite: {
                                image: "rods/rod-2",
                                hitAreaData: {
                                    vertexes: [3, 4, 7, 100, 81, 100, 109, 71, 370, 73, 370, 29, 110, 28, 76, 4]
                                },
                                blockedBy: RODS_rod3
                            },
                            backSprites: [{
                                image: "pin_end",
                                position: {
                                    x: 375,
                                    y: 22
                                },
                                rotation: Math.PI
                            }],
                            on: [{
                                t: _Triggers2.default.onStart(),
                                r: _Rewards2.default.lock()
                            }, {
                                t: [_Triggers2.default.onEvent(_Events.Events.stageElevatorEnd), _Triggers2.default.onEvent(_Rod.RodEvents.rodOpened, {
                                    name: RODS_rod3
                                })],
                                r: _Rewards2.default.unlock()
                            }]
                        }, {
                            name: RODS_rod3,
                            class: _RodContainer2.default,
                            position: {
                                x: 3264,
                                y: 579
                            },
                            rotation: Math.PI,
                            rodSprite: {
                                image: "rods/rod-1",
                                hitAreaData: {
                                    vertexes: [3, 4, 7, 100, 81, 100, 109, 71, 370, 73, 370, 29, 110, 28, 76, 4]
                                }
                            },
                            backSprites: [{
                                image: "pin",
                                position: {
                                    x: 100,
                                    y: 23
                                }
                            }],
                            on: [{
                                t: _Triggers2.default.onStart(),
                                r: _Rewards2.default.lock()
                            }, {
                                t: [_Triggers2.default.onEvent(_Events.Events.stageElevatorEnd)],
                                r: _Rewards2.default.unlock()
                            }]
                        }, {
                            class: _RodContainer2.default,
                            position: {
                                x: 2873,
                                y: 475
                            },
                            rotation: Math.PI / 2,
                            rodSprite: {
                                image: "rods/rod-2",
                                partOf: RODS_rod4,
                                maskData: {
                                    vertexes: [0, 0, 0, 54, 100, 54, 100, 0]
                                },
                                behaviors: [_MaskBehavior2.default.maskBehavior]
                            },
                            on: [{
                                t: _Triggers2.default.onStart(),
                                r: [_Rewards2.default.emitEvent(_Rod.RodEvents.rodPartStart), _Rewards2.default.lock()]
                            }, {
                                t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch, {
                                    name: RODS_rod4
                                }),
                                r: _Rewards2.default.call("hardHide")
                            }]
                        }, {
                            image: "pin_point",
                            position: {
                                x: 4260,
                                y: 845
                            }
                        }, {
                            name: RODS_rod5,
                            class: _RodContainer2.default,
                            position: {
                                x: 3632,
                                y: 816
                            },
                            rodSprite: {
                                image: "rods/rod-3",
                                hitAreaData: {
                                    vertexes: [3, 4, 7, 100, 81, 100, 109, 71, 270, 73, 270, 29, 110, 28, 76, 4]
                                }
                            },
                            backSprites: [{
                                image: "pin_end",
                                position: {
                                    x: 250,
                                    y: 23
                                },
                                rotation: Math.PI
                            }],
                            on: [{
                                t: _Triggers2.default.onStart(),
                                r: _Rewards2.default.lock()
                            }, {
                                t: [_Triggers2.default.onEvent(_Events.Events.stageBulgarEnd), _Triggers2.default.onEvent(_Rod.RodEvents.rodOpened, {
                                    name: RODS_rod6
                                })],
                                r: _Rewards2.default.unlock()
                            }]
                        }, {
                            name: RODS_rod6,
                            class: _RodContainer2.default,
                            position: {
                                x: 4272,
                                y: 922
                            },
                            rotation: Math.PI,
                            rodSprite: {
                                image: "rods/rod-3",
                                hitAreaData: {
                                    vertexes: [3, 4, 7, 100, 81, 100, 109, 71, 270, 73, 270, 29, 110, 28, 76, 4]
                                }
                            },
                            backSprites: [{
                                image: "pin_end",
                                position: {
                                    x: 250,
                                    y: 23
                                },
                                rotation: Math.PI
                            }],
                            on: [{
                                t: _Triggers2.default.onStart(),
                                r: _Rewards2.default.lock()
                            }, {
                                t: [_Triggers2.default.onEvent(_Events.Events.stageBulgarEnd)],
                                r: _Rewards2.default.unlock()
                            }]
                        }, {
                            name: RODS_rod7,
                            class: _RodContainer2.default,
                            position: {
                                x: 4006,
                                y: 483
                            },
                            rotation: Math.PI / 2,
                            rodSprite: {
                                image: "rods/rod-4",
                                hitAreaData: {
                                    vertexes: [3, 4, 7, 100, 81, 100, 109, 77, 331, 77, 377, 106, 445, 110, 441, 0, 382, -1, 333, 29, 110, 28, 76, 4]
                                },
                                blockedBy: RODS_rod6,
                                pivot: {
                                    x: 385,
                                    y: 54
                                },
                                position: {
                                    x: 385,
                                    y: 54
                                },
                                swivel: !0,
                                onOpenHide: !1,
                                openRotation: Math.PI / 2,
                                blockRotation: .3
                            },
                            backSprites: [{
                                image: "pin_point",
                                position: {
                                    x: 362,
                                    y: 32
                                },
                                rotation: -Math.PI / 2
                            }],
                            on: [{
                                t: _Triggers2.default.onStart(),
                                r: _Rewards2.default.lock()
                            }, {
                                t: [_Triggers2.default.onEvent(_Events.Events.stageBulgarEnd), _Triggers2.default.onEvent(_Rod.RodEvents.rodOpened, {
                                    name: RODS_rod6
                                })],
                                r: _Rewards2.default.unlock()
                            }]
                        }]
                    }, {
                        name: "car",
                        position: {
                            x: 295,
                            y: 602
                        },
                        animations: {
                            hide: {
                                creator: _Animations2.default.moveToDxDy,
                                dx: -1e3,
                                time: 1e3,
                                easing: "inQuad"
                            },
                            wheels: {
                                to: {
                                    wheel_1: {
                                        rotation: 2 * -Math.PI
                                    },
                                    wheel_2: {
                                        rotation: 2 * -Math.PI
                                    }
                                },
                                loop: !0,
                                time: 500
                            },
                            shake: {
                                to: {
                                    body: {
                                        scale: {
                                            x: .995,
                                            y: .99
                                        }
                                    }
                                },
                                loop: !0,
                                pingPong: !0,
                                time: 150
                            },
                            open: {
                                from: {
                                    body: {
                                        door: {
                                            scale: {
                                                x: 1,
                                                y: 1
                                            }
                                        }
                                    }
                                },
                                to: {
                                    body: {
                                        door: {
                                            scale: {
                                                x: .5,
                                                y: 1
                                            }
                                        }
                                    }
                                },
                                time: 300,
                                easing: "outQuad"
                            },
                            close: {
                                from: {
                                    body: {
                                        door: {
                                            scale: {
                                                x: .5,
                                                y: 1
                                            }
                                        }
                                    }
                                },
                                to: {
                                    body: {
                                        door: {
                                            scale: {
                                                x: 1,
                                                y: 1
                                            }
                                        }
                                    }
                                },
                                time: 300,
                                easing: "inQuad"
                            }
                        },
                        scenarios: {
                            open: [_Rewards2.default.instant(_Rewards2.default.startAnimation("shake")), _Rewards2.default.wait(500), _Rewards2.default.startAnimation("open"), _Rewards2.default.wait(500), _Rewards2.default.startAnimation("close")],
                            carMove: [_Rewards2.default.hide(), _Rewards2.default.instant(_Rewards2.default.startAnimation("wheels")), _Rewards2.default.wait(1e3), _Rewards2.default.emitEvent(_Events.Events.stageCarMoveEnd)]
                        },
                        on: [{
                            t: _Triggers2.default.onStart(),
                            r: _Rewards2.default.startScenario("open")
                        }, {
                            t: _Triggers2.default.onEvent(_Events.Events.stageCarMove),
                            r: _Rewards2.default.startScenario("carMove")
                        }],
                        sprites: [{
                            name: "body",
                            image: "back/car_body",
                            sprites: [{
                                name: "door",
                                image: "back/car_door",
                                position: {
                                    x: 293,
                                    y: 14
                                },
                                anchor: {
                                    x: 0,
                                    y: .5
                                }
                            }]
                        }, {
                            name: "wheel_1",
                            image: "back/car_wheel",
                            position: {
                                x: 45,
                                y: 169
                            }
                        }, {
                            name: "wheel_2",
                            image: "back/car_wheel",
                            position: {
                                x: 345,
                                y: 169
                            }
                        }]
                    }, {
                        name: "puddle",
                        image: "water/puddle",
                        position: {
                            x: 600,
                            y: 852
                        }
                    }]
                }, {
                    name: "kat",
                    class: _Katrin2.default,
                    visible: !1,
                    position: {
                        x: 0,
                        y: 96
                    },
                    position_back: {
                        x: -200,
                        y: 96
                    },
                    position_bulgar: {
                        x: -140,
                        y: 96
                    },
                    position_home: {
                        x: 840,
                        y: 96
                    },
                    animations: {
                        show: {
                            from: {
                                scale: {
                                    x: .7,
                                    y: .8
                                },
                                alpha: 0
                            },
                            to: {
                                scale: {
                                    x: 1,
                                    y: 1
                                },
                                alpha: 1
                            },
                            time: 300,
                            easing: "inOutQuad"
                        },
                        rotate: {
                            to: {
                                rotation: .2
                            },
                            time: 400,
                            pingPong: !0,
                            easing: "inOutQuad"
                        },
                        moveBack: {
                            creator: _Animations2.default.moveToPosition,
                            position: "back",
                            time: 800,
                            easing: "inOutQuad"
                        },
                        moveBulgar: {
                            creator: _Animations2.default.moveToPosition,
                            position: "bulgar",
                            time: 400,
                            easing: "outQuad"
                        },
                        moveHome: {
                            creator: _Animations2.default.moveToPosition,
                            position: "home",
                            time: 2500,
                            easing: "outQuad"
                        },
                        jump: {
                            creator: _Animations2.default.moveToDxDy,
                            dy: -40,
                            pingPong: !0,
                            time: 300,
                            easing: "inOutQuad"
                        }
                    },
                    scenarios: {
                        exitCar: [_Rewards2.default.wait(500), _Rewards2.default.show(), _Rewards2.default.startAnimation("rotate"), _Rewards2.default.call("exitCar")],
                        jumpOnEnter: [_Rewards2.default.wait(200), _Rewards2.default.startAnimation("jump"), _Rewards2.default.wait(260), _Rewards2.default.startAnimation("jump")],
                        jumpOnBasement: [_Rewards2.default.wait(1700), _Rewards2.default.startAnimation("jump")],
                        jumpOnHome: [_Rewards2.default.wait(580), _Rewards2.default.startAnimation("jump")],
                        moveHome: [_Rewards2.default.instant(_Rewards2.default.startAnimation("moveHome")), _Rewards2.default.wait(200), _Rewards2.default.startAnimation("jump"), _Rewards2.default.emitEvent(_Events.Events.katrinHomeEnd)]
                    },
                    on: [{
                        t: _Triggers2.default.onStart(),
                        r: _Rewards2.default.startScenario("exitCar")
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageRain),
                        r: _Rewards2.default.startAnimation("moveBack")
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageElevator),
                        r: [_Rewards2.default.call("enterHouse"), _Rewards2.default.startScenario("jumpOnEnter")]
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageBulgar),
                        r: [_Rewards2.default.startAnimation("moveBulgar"), _Rewards2.default.startScenario("jumpOnBasement")]
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageHome),
                        r: _Rewards2.default.startScenario("jumpOnHome")
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageHomeEnd),
                        r: _Rewards2.default.startScenario("moveHome")
                    }, {
                        t: [_Triggers2.default.onEvent(_Events.Events.stageCar), _Triggers2.default.onEvent(_Events.Events.stageRain), _Triggers2.default.onEvent(_Events.Events.stageElevator), _Triggers2.default.onEvent(_Events.Events.stageBulgar), _Triggers2.default.onEvent(_Events.Events.stageHome)],
                        r: _Rewards2.default.call("walk")
                    }, {
                        t: [_Triggers2.default.onEvent(_Events.Events.stageCarEnd), _Triggers2.default.onEvent(_Events.Events.stageRainEnd), _Triggers2.default.onEvent(_Events.Events.stageElevatorEnd), _Triggers2.default.onEvent(_Events.Events.stageBulgarEnd)],
                        r: _Rewards2.default.call("stop")
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageRainEnd),
                        r: _Rewards2.default.call("hideDrops")
                    }, {
                        t: _Triggers2.default.onEvent(_Rod.RodEvents.rodOpened, {
                            name: RODS_rod1
                        }),
                        r: _Rewards2.default.call("showDrops")
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageBasement),
                        r: _Rewards2.default.call("setFalling")
                    }, {
                        t: _Triggers2.default.onEvent(_Events.Events.stageBasementEnd),
                        r: _Rewards2.default.hide()
                    }, {
                        t: _Triggers2.default.onEvent(_Rod.RodEvents.rodOpened, {
                            name: RODS_rod6
                        }),
                        r: _Rewards2.default.call("setHappy")
                    }]
                }, {
                    name: "splash",
                    image: "water/splash_1",
                    position: {
                        x: -135,
                        y: 22
                    },
                    scale: {
                        x: 1.9,
                        y: 2
                    },
                    visible: !1,
                    animations: {
                        show: {
                            creator: _Animations2.default.sequence,
                            images: {
                                prefix: "water/splash_",
                                count: 6
                            },
                            time: 500
                        }
                    },
                    on: [{
                        t: _Triggers2.default.onEvent(_Events.Events.stageCarMove),
                        r: _Rewards2.default.show()
                    }, {
                        t: _Triggers2.default.onAnimationEnd("show"),
                        r: _Rewards2.default.hide()
                    }]
                }]
            }, {
                name: "ui",
                class: _UIContainer2.default,
                on: [{
                    t: _Triggers2.default.onStart(),
                    r: _Rewards2.default.setStage("game")
                }, {
                    t: _Triggers2.default.onceSkip(),
                    r: _Rewards2.default.setStage("final")
                }, {
                    t: _Triggers2.default.onEvent(_Events.Events.gameWin),
                    r: _Rewards2.default.setStage("final")
                }, {
                    t: _Triggers2.default.onEvent(_Events.Events.gameFail),
                    r: _Rewards2.default.setStage("finalFail")
                }],
                sprites: [{
                    name: "flash",
                    class: _Fade2.default,
                    fillColor: "0xFFFFFF",
                    fillAlpha: 1,
                    animations: {
                        show: {
                            from: {
                                alpha: 0
                            },
                            to: {
                                alpha: .6
                            },
                            time: 100,
                            repeat: 3,
                            easing: "easeOutQuart"
                        },
                        hide: {
                            to: {
                                alpha: 0
                            },
                            startAfter: "show",
                            time: 100
                        }
                    },
                    on: [{
                        t: _Triggers2.default.onEvent(_Events.Events.stageRain),
                        r: _Rewards2.default.show()
                    }, {
                        t: _Triggers2.default.onAnimationEnd("show"),
                        r: _Rewards2.default.hide()
                    }]
                }, {
                    name: "disclaimerContainer",
                    parentStages: ["start", "game"],
                    sprites: [{
                        name: "disclaimer",
                        class: _Disclaimer2.default,
                        showDelay: 8e3,
                        position: {
                            absolute: !0,
                            align: {
                                x: .5,
                                y: 1
                            },
                            x: 0,
                            y: 0
                        },
                        position_portrait: {
                            absolute: !0,
                            align: {
                                x: .5,
                                y: 1
                            },
                            x: 0,
                            y: -50
                        },
                        on: [{
                            t: _Triggers2.default.onStart(),
                            r: _Rewards2.default.show()
                        }]
                    }]
                }, {
                    class: _Fade2.default,
                    parentStages: ["final", "finalFail"]
                }, {
                    class: _Packshot2.default,
                    parentStages: ["final", "finalFail"],
                    on: [{
                        t: _Triggers2.default.onEvent(_Rod.RodEvents.rodTouch, {
                            name: RODS_rod5
                        }),
                        c: _Conditions2.default.flags({
                            rod7Opened: !1
                        }),
                        r: _Rewards2.default.call("lockConfetti")
                    }]
                }, {
                    name: "mute",
                    class: _ButtonMute2.default
                }, {
                    name: "logo",
                    image: "logo",
                    parentStages: ["start", "game"],
                    adaptivePosition: !0,
                    position: {
                        absolute: !0,
                        x: 20,
                        y: 10
                    },
                    position_portrait: {
                        absolute: !0,
                        x: 15,
                        y: 70
                    },
                    position_portrait_lg: {
                        absolute: !0,
                        x: 15,
                        y: 20
                    }
                }]
            }]
        }
    }
    , {
        "./Animations": 1,
        "./Events": 5,
        "./Playable/Behaviors/MaskBehavior": 11,
        "./Playable/Behaviors/UniversalBehavior/Conditions": 13,
        "./Playable/Behaviors/UniversalBehavior/Rewards": 14,
        "./Playable/Behaviors/UniversalBehavior/Triggers": 15,
        "./Playable/Sprites/ButtonMute": 31,
        "./Playable/Sprites/Disclaimer": 34,
        "./Playable/Sprites/Fade": 35,
        "./Sprites/Bulgar": 36,
        "./Sprites/Drops": 37,
        "./Sprites/Katrin": 38,
        "./Sprites/MainContainer": 39,
        "./Sprites/Packshot/Packshot": 42,
        "./Sprites/Rain": 43,
        "./Sprites/Rod": 44,
        "./Sprites/RodContainer": 45,
        "./Sprites/Spider": 46,
        "./Sprites/TilingSprite": 47,
        "./Sprites/UIContainer": 48
    }],
    50: [function(require, module, exports) {
        "use strict";
        window.RATIO = {
            XLG: 2.15,
            LG: 1.99,
            MD: 1.76,
            SM: 1.65,
            XSM: 1.59,
            MN: 1.49,
            EMN: 1.32
        }
    }
    , {}],
    51: [function(require, module, exports) {
        "use strict";
        var _SuperApp2 = _interopRequireDefault(require("./Core/SuperApp"))
          , _Application2 = _interopRequireDefault(require("./Playable/Core/Application"))
          , _config2 = _interopRequireDefault(require("./config.js"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        window.superApp = new _SuperApp2.default(_Application2.default,{
            config: _config2.default
        })
    }
    , {
        "./Core/SuperApp": 4,
        "./Playable/Core/Application": 19,
        "./config.js": 49
    }],
    52: [function(require, module, exports) {
        "use strict";
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj
        }
        : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
        ;
        window.utils = {
            getLang: function() {
                return "string" == typeof lang ? lang : window.playableEnv && playableEnv.lang ? "all" == playableEnv.lang ? "en" : playableEnv.lang : "en"
            },
            getRandomInt: function(min, max) {
                var rand = min - .5 + Math.random() * (max - min + 1);
                return rand = Math.round(rand)
            },
            degreesInRadians: function(val) {
                return this.rad(val)
            },
            radiansInDegrees: function(val) {
                return this.deg(val)
            },
            rad: function(val) {
                return val * (Math.PI / 180)
            },
            deg: function(val) {
                return val * (180 / Math.PI)
            },
            getSprite: function(img, anchorX, anchorY) {
                var texture = this.getTexture(img);
                if (texture) {
                    var sprite = new PIXI.Sprite(texture);
                    return sprite.origWidth = texture.origWidth,
                    sprite.origHeight = texture.origHeight,
                    (anchorX || 0 == anchorX) && ("object" == (void 0 === anchorX ? "undefined" : _typeof(anchorX)) ? sprite.anchor.set(anchorX[0], anchorX[1] || anchorX[0]) : sprite.anchor.set(anchorX, "number" == typeof anchorY ? anchorY : anchorX)),
                    sprite
                }
            },
            getBaseTexture: function(name) {
                if (sprites[name]) {
                    if (!PIXI.utils.BaseTextureCache[name]) {
                        var image = new Image;
                        image.src = sprites[name].src,
                        PIXI.BaseTexture.addToCache(new PIXI.BaseTexture(image), name)
                    }
                    return PIXI.utils.BaseTextureCache[name]
                }
            },
            getTexture: function(name) {
                if (PIXI.utils.TextureCache[name])
                    return PIXI.utils.TextureCache[name];
                var textureSheet = this.getTextureSheet(name);
                if (textureSheet)
                    return textureSheet;
                if (this.getBaseTexture(name)) {
                    var texture = new PIXI.Texture(this.getBaseTexture(name))
                      , pic = sprites[name];
                    return texture.origWidth = pic.w / pic.r,
                    texture.origHeight = pic.h / pic.r,
                    PIXI.Texture.addToCache(texture, name),
                    texture
                }
            },
            getTextureSheet: function(name) {
                if ("undefined" == typeof spritesheets)
                    return !1;
                var data = spritesheets[name];
                if (!data)
                    return !1;
                var srcBaseTexture = "spritesheet_" + name.split("/")[0]
                  , baseTexture = this.getBaseTexture(srcBaseTexture);
                if (baseTexture) {
                    var sourceSize = !1 !== data.trimmed && data.sourceSize ? data.sourceSize : data.frame
                      , rect = data.frame
                      , orig = new PIXI.Rectangle(0,0,sourceSize.w,sourceSize.h)
                      , frame = void 0;
                    frame = data.rotated ? new PIXI.Rectangle(rect.x,rect.y,rect.h,rect.w) : new PIXI.Rectangle(rect.x,rect.y,rect.w,rect.h);
                    var trim = new PIXI.Rectangle(data.spriteSourceSize.x,data.spriteSourceSize.y,rect.w,rect.h)
                      , texture = new PIXI.Texture(baseTexture,frame,orig,trim,data.rotated ? 2 : 0);
                    return texture.origWidth = data.sourceSize.w,
                    texture.origHeight = data.sourceSize.h,
                    texture
                }
            },
            align: function(game, obj) {
                0 < game.origWidth - game.width ? obj.x = (game.width - game.origWidth) / 2 : obj.x = 0,
                0 < game.origHeight - game.height ? obj.y = (game.height - game.origHeight) / 2 : obj.y = 0
            },
            getText: function(key) {
                return l10n[lang][key]
            },
            pulse: function(props) {
                if (!is_adwords) {
                    var obj = props.targets
                      , startScale = props.scale_1
                      , finishScale = props.scale_2;
                    anime.remove(obj),
                    obj.scaleXY = startScale,
                    obj.scale.set(startScale),
                    anime({
                        targets: obj,
                        scaleXY: [{
                            value: finishScale,
                            duration: 800,
                            delay: 100
                        }, {
                            value: startScale,
                            duration: 800
                        }],
                        loop: !0,
                        update: function() {
                            obj.scale.set(obj.scaleXY)
                        },
                        easing: "linear"
                    })
                }
            },
            initFade: function() {
                var color = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                  , fade = new PIXI.Graphics
                  , maxSize = Math.max(config.size[0], config.size[1])
                  , fill = color ? "0x" + color : "0x000000";
                return fade.beginFill(fill),
                fade.drawRect(0, 0, maxSize, maxSize),
                fade.alpha = 0,
                fade
            },
            getOffset: function(target, start) {
                return target.toLocal(start.parent.toGlobal(start.position))
            }
        }
    }
    , {}]
}, {}, [51]);
