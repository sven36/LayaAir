import Sprite from '../Core/Sprite.js';
import BaseAnimations from '../Animations/BaseAnimations.js';
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

export default Fade;