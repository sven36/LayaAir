import Sprite from '../Playable/Core/Sprite.js';
import Rewards from '../Playable/Behaviors/UniversalBehavior/Rewards.js';
import Triggers from '../Playable/Behaviors/UniversalBehavior/Triggers.js';
import Animations from '../Animations.js';
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
class Drops extends Sprite {
    show() {
        var withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        return this.run(),
            _get(Drops.prototype.__proto__ || Object.getPrototypeOf(Drops.prototype), "show", this).call(this, withAnimation)
    }
    hide() {
        var withAnimation = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        return this.stop(),
            _get(Drops.prototype.__proto__ || Object.getPrototypeOf(Drops.prototype), "hide", this).call(this, withAnimation)
    }
    stop() {
        this.children.forEach(function (child) {
            child.scenarios && child.scenarios.show && child.scenarios.show.stop(!0)
        })
    }
    run() {
        this.children.forEach(function (child) {
            child.scenarios && child.scenarios.show && child.scenarios.show.reset().start()
        })
    }
    getDefaultConfig(config) {
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
                        creator: Animations.sequence,
                        images: {
                            prefix: prefix,
                            count: images
                        },
                        time: time
                    }
                },
                scenarios: {
                    show: {
                        rewards: [Rewards.show(), Rewards.wait(time), Rewards.hide(), Rewards.wait(delayMin + Math.random() * delayMax)],
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
}

export default Drops;