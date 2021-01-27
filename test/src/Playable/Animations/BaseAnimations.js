import Animation from '../Core/Animation';
import AnimationTimeline from '../Core/AnimationTimeline';

class BaseAnimations {
    static alphaScaleShow(config) {
        var startScale = config.startScale || {
            x: .2 * this.scale.x,
            y: .2 * this.scale.y
        };
        return Animation.create(this, Object.assign({
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
    static alphaScaleHide(config) {
        return Animation.create(this, Object.assign({
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
    static alphaShow(config) {
        return Animation.create(this, Object.assign({
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
    static alphaHide(config) {
        return Animation.create(this, Object.assign({
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
    static pulse(config) {
        var scale = this.scale.x;
        return Animation.create(this, Object.assign({
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
    static moveFromDxDy(config) {
        var _this = this
            , paramName = BaseAnimations._createAnimationParamName("moveFromDxDyParam", this)
            , startPosition = void 0;
        return Animation.create(this, Object.assign({
            from: _defineProperty({}, paramName, 1),
            to: _defineProperty({}, paramName, 0),
            on: {
                start: function () {
                    startPosition = config.fromCurrentPosition ? (new PIXI.Point).copyFrom(_this.position) : _this.origPosition
                },
                update: function () {
                    config.dx && (_this.position.x = startPosition.x + config.dx * _this[paramName]),
                        config.dy && (_this.position.y = startPosition.y + config.dy * _this[paramName])
                }
            }
        }, config))
    }
    static moveToDxDy(config) {
        var _this2 = this
            , paramName = BaseAnimations._createAnimationParamName("moveToDxDyParam", this)
            , startPosition = void 0;
        return Animation.create(this, Object.assign({
            from: _defineProperty({}, paramName, 0),
            to: _defineProperty({}, paramName, 1),
            on: {
                start: function () {
                    startPosition = config.fromCurrentPosition ? (new PIXI.Point).copyFrom(_this2.position) : _this2.origPosition
                },
                update: function () {
                    config.dx && (_this2.position.x = startPosition.x + config.dx * _this2[paramName]),
                        config.dy && (_this2.position.y = startPosition.y + config.dy * _this2[paramName])
                }
            }
        }, config))
    }
    static moveToPosition(config) {
        var _this3 = this
            , paramName = BaseAnimations._createAnimationParamName("moveToPositionParam", this)
            , position = void 0
            , startPosition = void 0
            , animation = Animation.create(this, Object.assign({
                from: _defineProperty({}, paramName, 0),
                to: _defineProperty({}, paramName, 1),
                on: {
                    start: function () {
                        startPosition = config.fromCurrentPosition ? (new PIXI.Point).copyFrom(_this3.position) : _this3.origPosition,
                            position = _this3.positions[config.position].calculateFor(_this3)
                    },
                    update: function () {
                        _this3.position.x = startPosition.x + (position.x - startPosition.x) * _this3[paramName],
                            _this3.position.y = startPosition.y + (position.y - startPosition.y) * _this3[paramName]
                    }
                }
            }, config));
        return config.noApplyPosition || animation.on("end", function () {
            return _this3.applyPosition(config.position)
        }),
            animation
    }
    static sequence(config) {
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
        images.forEach(function (image) {
            utils.getTexture(image)
        });
        var animation = Animation.create(this, Object.assign({}, config, {
            from: {
                frameValue: 0
            },
            to: {
                frameValue: 100 * framesCount - 1
            }
        }));
        return animation.on("update", function () {
            var number = (startFrame + Math.floor(_this4.frameValue / 100)) % framesCount;
            currentFrame !== number && (currentFrame = number,
                _this4.setTexture(utils.getTexture(images[currentFrame])))
        }),
            animation
    }
    static timeline(config) {
        var _this5 = this
            , timeline = new AnimationTimeline;
        return config.animations.forEach(function (nameAnimation) {
            if ("string" == typeof nameAnimation && _this5.animations[nameAnimation])
                timeline.add(_this5.animations[nameAnimation]);
            else {
                var animations = [];
                nameAnimation.forEach(function (_nameAnimation) {
                    animations.push(_this5.animations[_nameAnimation])
                }),
                    timeline.add(animations)
            }
        }),
            timeline
    }
    static _createAnimationParamName(prefix, obj) {
        return obj.animations && "object" === _typeof(obj.animations) ? prefix + Object.keys(obj.animations).length : prefix
    }
}

export default BaseAnimations;