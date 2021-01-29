import Sprite from '../Playable/Core/Sprite.js';

class RodContainer extends Sprite {

    getDefaultConfig(config) {
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
            if ("value" in desc)
                return desc.value;
            var getter = desc.get;
            return void 0 !== getter ? getter.call(receiver) : void 0
        }(RodContainer.prototype.__proto__ || Object.getPrototypeOf(RodContainer.prototype), "getDefaultConfig", this).call(this, config), {
            _spritesFields: ["backSprites", "rodSprites", "sprites"],
            _universalBehaviorFields: ["defaultOn", "on"],
            rodSprites: [rodSprite]
        })
    }
}

export default RodContainer;