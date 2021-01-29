import PIXI from '../../pixi5.2.js';
import BaseAnimations from '../Animations/BaseAnimations.js';
import BaseBehaviors from '../Behaviors/BaseBehaviors.js';
import Button from './Button.js';

class ButtonPlay extends Button {
    onShowEnd() {
        this.config.noPulse || is_adwords || this.animations.pulse.start()
    }
    getDefaultConfig(config) {
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
        }(ButtonPlay.prototype.__proto__ || Object.getPrototypeOf(ButtonPlay.prototype), "getDefaultConfig", this).call(this, config), {
            noPulse: !0,
            animations: {
                show: {
                    creator: BaseAnimations.alphaScaleShow,
                    delay: config.showDelay,
                    time: 300
                },
                hide: {
                    creator: BaseAnimations.alphaHide,
                    delay: config.hideDelay,
                    time: 300
                },
                pulse: BaseAnimations.pulse
            },
            behaviors: [BaseBehaviors.clickInstall]
        })
    }
}
export default ButtonPlay;