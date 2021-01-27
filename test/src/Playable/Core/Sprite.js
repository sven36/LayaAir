import * as PIXI from 'pixi.js';
import Animation from './Animation';
import Behavior from './Behavior';
import Position from './Position';
import Scenario from './UniversalBehavior/Scenario';
import BaseBehaviors from '../Behaviors/BaseBehaviors';

class Sprite extends PIXI.Sprite {
    constructor(config, app) {
        this.app = app;
        this.config = Object.assign(this.getDefaultConfig(config), config);
        this.name = _this.config.name;
        this.setup();
    }
    setup() {
        var _this2 = this;
        this.on("added", function () {
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
    setupPIXIAttributes() {
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
    setupTexture() {
        this.config.image ? this.setTexture(utils.getTexture(this.config.image)) : this.setOrigSize(this.config.origWidth, this.config.origHeight)
    }
    setTexture(texture) {
        this.texture = texture,
            this.setOrigSize(this.texture.origWidth, this.texture.origHeight)
    }
    setOrigSize(origWidth, origHeight) {
        this.origWidth = origWidth,
            this.origHeight = origHeight
    }
    setupAnimationsFromConfig() {
        var _this3 = this;
        this.animations = {},
            this.config._animationsFields.forEach(function (field) {
                if (_this3.config[field])
                    for (var name in _this3.config[field])
                        _this3.animations[name] = Animation.create(_this3, _this3.config[field][name])
            })
    }
    getEventHandlers() { }
    onTap() { }
    setupPositions() {
        this.positions = Position.createPositionsFromConfig(this.config)
    }
    applyBehaviors() {
        var _this4 = this;
        [].concat(this.config.behaviors, [BaseBehaviors.universalBehavior]).forEach(function (behavior) {
            return Behavior.applyFor(_this4, behavior)
        })
    }
    createSprites() {
        var _this5 = this;
        this.config._spritesFields.map(function (field) {
            return _this5.config[field] || []
        }).forEach(function (sprites) {
            return sprites.forEach(function (config) {
                return _this5.addChild(_this5.app.spriteFactory.create(config))
            })
        })
    }
    setupScenarios() {
        var _this6 = this;
        this.scenarios = {},
            this.config._scenariosFields.forEach(function (field) {
                if (_this6.config[field])
                    for (var name in _this6.config[field])
                        _this6.scenarios[name] = new Scenario(_this6, Array.isArray(_this6.config[field][name]) ? {
                            rewards: _this6.config[field][name]
                        } : _this6.config[field][name])
            })
    }
    linkChild(obj) {
        void 0 === obj.name || obj.config && obj.config.noLink || (this[obj.name] = obj)
    }
    onResize() {
        this.config.keepPosition && !this.config.adaptivePosition || this.applyPosition(),
            this.children.forEach(function (child) {
                child.onResize && child.onResize()
            })
    }
    applyPosition(name) {
        Object.assign(this.origPosition, this.positions[name || this.detectPositionName()].calculateFor(this)),
            this.position = this.origPosition,
            this.currentPositionName = name
    }
    detectPositionName() {
        var positionName = this.app.isPortrait ? Position.PORTRAIT_NAME : Position.DEFAULT_NAME;
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
    getLocalPositionFor(sprite) {
        return this.toLocal(sprite.parent.toGlobal(sprite.position))
    }
    lock() {
        this.locked = !0
    }
    unlock() {
        this.locked = !1
    }
    show() {
        var _this7 = this
            , withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        return void 0 !== this.animations.show && withAnimation ? (this.animations.show.once("start", function () {
            _this7.defaultOnShowStart()
        }),
            this.animations.show.once("end", function () {
                _this7.defaultOnShowEnd()
            }),
            this.animations.show.reset().start()) : (this.defaultOnShowStart(),
                this.defaultOnShowEnd()),
            this
    }
    hide() {
        var _this8 = this
            , withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        return void 0 !== this.animations.hide && withAnimation ? (this.animations.hide.once("start", function () {
            _this8.defaultOnHideStart()
        }),
            this.animations.hide.once("end", function () {
                _this8.defaultOnHideEnd()
            }),
            this.animations.hide.reset().start()) : (this.defaultOnHideStart(),
                this.defaultOnHideEnd()),
            this
    }
    defaultOnShowStart() {
        this.visible = !0,
            this.onShowStart()
    }
    defaultOnShowEnd() {
        this.onShowEnd()
    }
    onShowStart() { }
    onShowEnd() { }
    defaultOnHideStart() {
        this.onHideStart()
    }
    defaultOnHideEnd() {
        this.visible = !1,
            this.onHideEnd()
    }
    onHideStart() { }
    onHideEnd() { }
    hardHide() {
        return this.stopShowing(),
            this.hide(!1),
            this
    }
    isShowing() {
        return !!this.animations.show && this.animations.show.active
    }
    isHiding() {
        return !!this.animations.hide && this.animations.hide.active
    }
    stopShowing() {
        return this.animations.show && this.animations.show.stop(),
            this
    }
    stopHiding() {
        return this.animations.hide && this.animations.hide.stop(),
            this
    }
    getDefaultConfig(config) {
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
}

export default Sprite;