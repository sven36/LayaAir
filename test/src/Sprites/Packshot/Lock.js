import Sprite from '../../Playable/Core/Sprite.js';
import Rewards from '../../Playable/Behaviors/UniversalBehavior/Rewards.js';
import Animations from '../../Animations.js';

class Lock extends Sprite {
    getDefaultConfig(config) {
        var _config$scale = config.scale
            , scale = void 0 === _config$scale ? {
                x: 1,
                y: 1
            } : _config$scale;
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
        }(Lock.prototype.__proto__ || Object.getPrototypeOf(Lock.prototype), "getDefaultConfig", this).call(this, config), {
            scale: scale,
            animations: {
                scale: {
                    to: {
                        scale: {
                            x: 1,
                            y: 1
                        }
                    },
                    time: 150,
                    easing: "outSine"
                },
                move: {
                    creator: Animations.moveToPosition,
                    position: "center",
                    time: 500,
                    easing: "inOutQuad"
                },
                open: {
                    to: {
                        lockPartLight: {
                            rotation: -.6
                        },
                        lockPart: {
                            rotation: -.6
                        }
                    },
                    time: 100
                },
                hide: {
                    to: {
                        scale: {
                            x: 0,
                            y: 0
                        },
                        alpha: 0
                    },
                    time: 200,
                    easing: "inBack"
                },
                glow: {
                    to: {
                        lockLight: {
                            alpha: 1
                        },
                        lockPartLight: {
                            alpha: 1
                        }
                    },
                    time: 300
                }
            },
            scenarios: {
                open: [Rewards.startAnimation("move"), Rewards.playSound("packshot/lock"), Rewards.instant(Rewards.startAnimation("glow")), Rewards.startAnimation("scale"), Rewards.wait(250), Rewards.startAnimation("open"), Rewards.hide()]
            },
            sprites: [{
                name: "lockPartLight",
                image: "packshot/lock/lock-part-light",
                alpha: 0,
                anchor: {
                    x: .23,
                    y: .45
                }
            }, {
                name: "lockLight",
                alpha: 0,
                image: "packshot/lock/lock-light"
            }, {
                name: "lockPart",
                image: "packshot/lock/lock-part",
                anchor: {
                    x: .23,
                    y: .45
                }
            }, {
                name: "lock",
                image: "packshot/lock/lock"
            }]
        })
    }
}

export default Lock;