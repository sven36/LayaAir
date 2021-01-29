import PIXI from '../pixi5.2.js';
import {
    viewPortConfig
} from '../util.js';

class Application extends PIXI.Application {
    constructor() {
        super({
            width: viewPortConfig.size[0],
            height: viewPortConfig.size[1],
            antialias: !1,
            resolution: 1,
            transparent: !0
        })
        var is_webgl = PIXI.utils.isWebGLSupported();
        window.is_webgl = is_webgl;
        this.appendRenderView();
        this.eventEmitter = new PIXI.utils.EventEmitter();
    }

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
        var callback = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
            context = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        this.eventEmitter.off(event, callback, context)
    }
    resizeApp(screenWidth, screenHeight) {
        this.screenRatio = screenWidth / screenHeight,
            this.width = this.origWidth,
            this.height = this.origHeight,
            viewPortConfig.crop && this.cropView(),
            this.resizeView(screenWidth, screenHeight),
            this.eventEmitter.emit("resize")
    }
    resizeView(screenWidth, screenHeight) {
        this.renderer.resize(this.width, this.height);
        var canvasWidthStyle = void 0,
            canvasHeightStyle = void 0;
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
        var screenRatio = this.screenRatio,
            origRatio = this.origWidth / this.origHeight,
            minScreenRatio = viewPortConfig.size_min[0] / viewPortConfig.size_min[1];
        this.isPortrait ? origRatio < screenRatio && (this.height = Math.floor(this.origWidth / (screenRatio < 1 / minScreenRatio ? screenRatio : 1 / minScreenRatio))) : screenRatio < origRatio && (this.width = Math.floor(this.origHeight * (minScreenRatio < screenRatio ? screenRatio : minScreenRatio)))
    }
    showView() {
        var _this2 = this,
            delay = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100;
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
        return viewPortConfig.adaptive && this.screenRatio < 1 ? viewPortConfig.size[1] : viewPortConfig.size[0]
    }
    get origHeight() {
        return viewPortConfig.adaptive && this.screenRatio < 1 ? viewPortConfig.size[0] : viewPortConfig.size[1]
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

export default Application;