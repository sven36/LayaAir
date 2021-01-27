import Sprite from '../Core/Sprite';
import BaseAnimations from '../Animations/BaseAnimations';


class Disclaimer extends Sprite {
    getDefaultConfig(config) {
        var _this2 = this;
        if (!this.isThereDisclaimer)
            return _get(Disclaimer.prototype.__proto__ || Object.getPrototypeOf(Disclaimer.prototype), "getDefaultConfig", this).call(this, config);
        var showDelay = config.showDelay ? config.showDelay : 8e3
            , hideDelay = config.hideDelay ? config.hideDelay : 5e3;
        return Object.assign(_get(Disclaimer.prototype.__proto__ || Object.getPrototypeOf(Disclaimer.prototype), "getDefaultConfig", this).call(this, config), {
            image: "disclaimer",
            scale: {
                x: .5,
                y: .5
            },
            visible: !1,
            showDelay: 8e3,
            hideDelay: 5e3,
            adaptivePosition: !0,
            animations: {
                show: {
                    creator: BaseAnimations.alphaShow,
                    time: 700,
                    delay: showDelay,
                    on: {
                        end: function () {
                            _this2.animations.hide.start()
                        }
                    }
                },
                hide: {
                    creator: BaseAnimations.alphaHide,
                    delay: hideDelay,
                    time: 700
                }
            }
        })
    }
    get isThereDisclaimer() {
        return window.playableEnv && playableEnv.isDis
    }
}
export default Disclaimer;