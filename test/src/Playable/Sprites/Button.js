import Sprite from '../Core/Sprite.js';

class Button extends Sprite {
    getDefaultConfig(config) {
        var textImage = config.textImage || "install";
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
}

export default Button;