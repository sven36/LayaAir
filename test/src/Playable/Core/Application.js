import BaseApplication from '../../Core/Application.js';
import Sprite from './Sprite.js';
import Sound from './Sound.js';
import ObjectFactory from './ObjectFactory.js';
import Analytics from './Analytics.js';

class Application extends BaseApplication {
    constructor(data) {
        super();
        this.config = Object.assign(this.getDefaultConfig(data.config), data.config);
        this.playableFlags = {};
        this.spriteFactory = new ObjectFactory(Sprite, this);
        this.createSprites(data.config.sprites);
        this.sounds = new Sound(this);
        this.analytics = new Analytics();
    }
    playSound(name, config) {
        this.sounds.play(name, config)
    }
    stopSound(name) {
        this.sounds.stop(name)
    }
    createSprites(config) {
        var _this2 = this;
        config.forEach(function (config) {
            _this2.stage.addChild(_this2.spriteFactory.create(config))
        })
    }
    onResize() {
        this.stage.children.forEach(function (child) {
            "function" == typeof child.onResize && child.onResize()
        })
    }
    run() {
        var _this3 = this;
        _get(Application.prototype.__proto__ || Object.getPrototypeOf(Application.prototype), "run", this).call(this),
            this.ticker.add(function () {
                PIXI.tweenManager.update(_this3.ticker.elapsedMS < 200 ? _this3.ticker.elapsedMS : 0)
            }),
            this.eventEmitter.on("resize", function () {
                _this3.onResize()
            }),
            this.onResize(),
            this.eventEmitter.emit("playableStart")
    }
    finish() {
        this.eventEmitter.emit("playableFinish"),
            _get(Application.prototype.__proto__ || Object.getPrototypeOf(Application.prototype), "finish", this).call(this)
    }
    getDefaultConfig(config) {
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
}

export default Application;