import Sprite from '../Core/Sprite';
import BaseAnimations from '../Animations/BaseAnimations';
var _get = function get(object, property, receiver) {
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
}
class Fade extends Sprite {
    setup() {
        _get(Fade.prototype.__proto__ || Object.getPrototypeOf(Fade.prototype), "setup", this).call(this),
            this.addChild(this.createGraphics()),
            this.draw()
    }
    createGraphics() {
        var g = new PIXI.Graphics;
        return g.name = "graphics",
            g
    }
    draw() {
        var size = Math.max(this.app.origWidth, this.app.origHeight);
        this.graphics.beginFill(this.config.fillColor, this.config.fillAlpha),
            this.graphics.drawRect(0, 0, size, size)
    }
    onTap(e) {
        e.stopPropagation()
    }
    getDefaultConfig(config) {
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
                    creator: BaseAnimations.alphaShow,
                    delay: config.delay
                },
                hide: BaseAnimations.alphaHide
            }
        })
    }
}
var Fade = function (_Sprite) {
    function Fade() {
        return function (instance, Constructor) {
            if (!(instance instanceof Constructor))
                throw new TypeError("Cannot call a class as a function")
        }(this, Fade),
            function (self, call) {
                if (!self)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call
            }(this, (Fade.__proto__ || Object.getPrototypeOf(Fade)).apply(this, arguments))
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
    }(Fade, _Sprite3.default),
        _createClass(Fade, []),
        Fade
}();
export default Fade;