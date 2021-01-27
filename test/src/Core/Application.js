import * as PIXI from 'pixi.js'

class Application extends PIXI.Application {

    run() {
        this.showView()
    }
    emit() {
        this.eventEmitter.emit.apply(this.eventEmitter, arguments)
    }
    on(event, callback) {
        var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        this.eventEmitter.on(event, callback, context)
    }
    once(event, callback) {
        var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        this.eventEmitter.once(event, callback, context)
    }
    off(event) {
        var callback = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
            , context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        this.eventEmitter.off(event, callback, context)
    }
    resizeApp(screenWidth, screenHeight) {
        this.screenRatio = screenWidth / screenHeight,
            this.width = this.origWidth,
            this.height = this.origHeight,
            config.crop && this.cropView(),
            this.resizeView(screenWidth, screenHeight),
            this.eventEmitter.emit("resize")
    }
    resizeView(screenWidth, screenHeight) {
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
    cropView() {
        var screenRatio = this.screenRatio
            , origRatio = this.origWidth / this.origHeight
            , minScreenRatio = config.size_min[0] / config.size_min[1];
        this.isPortrait ? origRatio < screenRatio && (this.height = Math.floor(this.origWidth / (screenRatio < 1 / minScreenRatio ? screenRatio : 1 / minScreenRatio))) : screenRatio < origRatio && (this.width = Math.floor(this.origHeight * (minScreenRatio < screenRatio ? screenRatio : minScreenRatio)))
    }
    showView() {
        var _this2 = this
            , delay = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100;
        setTimeout(function () {
            _this2.view.className += " visible"
        }, delay)
    }
    appendRenderView() {
        document.body.appendChild(this.view)
    }
    finish() {
        "undefined" != typeof playableFinished && playableFinished()
    }
    skipAd() {
        this.isSkipLocked || (this.eventEmitter.emit("skipAd"),
            this.lockSkipAd())
    }
    lockSkipAd() {
        this.isSkipLocked = !0
    }
    setClickEvent(obj) {
        obj.interactive = !0,
            obj.on("pointertap", function (e) {
                e.stopPropagation(),
                    "undefined" != typeof clickInstall && clickInstall()
            })
    }
    getLandscapeRatio() {
        return this.ratio < 1 ? 1 / this.ratio : this.ratio
    }
    ratioLess(ratio) {
        return this.getLandscapeRatio() < RATIO[ratio.toUpperCase()]
    }
    get origWidth() {
        return config.adaptive && this.screenRatio < 1 ? config.size[1] : config.size[0]
    }
    get origHeight() {
        return config.adaptive && this.screenRatio < 1 ? config.size[0] : config.size[1]
    }
    get ratio() {
        return this.width / this.height
    }
    get isPortrait() {
        return this.ratio < 1
    }
    get isLandscape() {
        return !this.isPortrait
    }
}



var Application = function (_PIXI$Application) {
    function Application() {
        var _ret;
        !function (instance, Constructor) {
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
    return function (subClass, superClass) {
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
            value: function () {
                this.showView()
            }
        }, {
            key: "emit",
            value: function () {
                this.eventEmitter.emit.apply(this.eventEmitter, arguments)
            }
        }, {
            key: "on",
            value: function (event, callback) {
                var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                this.eventEmitter.on(event, callback, context)
            }
        }, {
            key: "once",
            value: function (event, callback) {
                var context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                this.eventEmitter.once(event, callback, context)
            }
        }, {
            key: "off",
            value: function (event) {
                var callback = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
                    , context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                this.eventEmitter.off(event, callback, context)
            }
        }, {
            key: "resizeApp",
            value: function (screenWidth, screenHeight) {
                this.screenRatio = screenWidth / screenHeight,
                    this.width = this.origWidth,
                    this.height = this.origHeight,
                    config.crop && this.cropView(),
                    this.resizeView(screenWidth, screenHeight),
                    this.eventEmitter.emit("resize")
            }
        }, {
            key: "resizeView",
            value: function (screenWidth, screenHeight) {
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
            value: function () {
                var screenRatio = this.screenRatio
                    , origRatio = this.origWidth / this.origHeight
                    , minScreenRatio = config.size_min[0] / config.size_min[1];
                this.isPortrait ? origRatio < screenRatio && (this.height = Math.floor(this.origWidth / (screenRatio < 1 / minScreenRatio ? screenRatio : 1 / minScreenRatio))) : screenRatio < origRatio && (this.width = Math.floor(this.origHeight * (minScreenRatio < screenRatio ? screenRatio : minScreenRatio)))
            }
        }, {
            key: "showView",
            value: function () {
                var _this2 = this
                    , delay = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100;
                setTimeout(function () {
                    _this2.view.className += " visible"
                }, delay)
            }
        }, {
            key: "appendRenderView",
            value: function () {
                document.body.appendChild(this.view)
            }
        }, {
            key: "finish",
            value: function () {
                "undefined" != typeof playableFinished && playableFinished()
            }
        }, {
            key: "skipAd",
            value: function () {
                this.isSkipLocked || (this.eventEmitter.emit("skipAd"),
                    this.lockSkipAd())
            }
        }, {
            key: "lockSkipAd",
            value: function () {
                this.isSkipLocked = !0
            }
        }, {
            key: "setClickEvent",
            value: function (obj) {
                obj.interactive = !0,
                    obj.on("pointertap", function (e) {
                        e.stopPropagation(),
                            "undefined" != typeof clickInstall && clickInstall()
                    })
            }
        }, {
            key: "getLandscapeRatio",
            value: function () {
                return this.ratio < 1 ? 1 / this.ratio : this.ratio
            }
        }, {
            key: "ratioLess",
            value: function (ratio) {
                return this.getLandscapeRatio() < RATIO[ratio.toUpperCase()]
            }
        }, {
            key: "origWidth",
            get: function () {
                return config.adaptive && this.screenRatio < 1 ? config.size[1] : config.size[0]
            }
        }, {
            key: "origHeight",
            get: function () {
                return config.adaptive && this.screenRatio < 1 ? config.size[0] : config.size[1]
            }
        }, {
            key: "ratio",
            get: function () {
                return this.width / this.height
            }
        }, {
            key: "isPortrait",
            get: function () {
                return this.ratio < 1
            }
        }, {
            key: "isLandscape",
            get: function () {
                return !this.isPortrait
            }
        }]),
        Application
}
export default Application