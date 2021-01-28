import StagedSprite from '../../Playable/Core/StagedSprite';
import Rewards from '../../Playable/Behaviors/UniversalBehavior/Rewards';
import Triggers from '../../Playable/Behaviors/UniversalBehavior/Triggers';
import Animations from '../../Animations';
import Lock from './Lock';

class Icon extends StagedSprite {
    onSetStage() {
        switch (this.stage) {
            case "ready":
                this.animations.move.start();
                break;
            case "unlocked":
                this.lock.scenarios.open.start(),
                    this.animations.move2.start()
        }
    }
    getDefaultConfig(config) {
        var _config$data = config.data
            , _config$data$prefix = _config$data.prefix
            , prefix = void 0 === _config$data$prefix ? "packshot" : _config$data$prefix
            , image = _config$data.image
            , _config$data$index = _config$data.index
            , index = void 0 === _config$data$index ? 0 : _config$data$index;
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
        }(Icon.prototype.__proto__ || Object.getPrototypeOf(Icon.prototype), "getDefaultConfig", this).call(this, config), {
            stages: ["default", "blocked", "ready", "unlocked"],
            startStage: "default",
            _animationsFields: ["defaultAnimations", "animations"],
            defaultAnimations: {
                move: {
                    to: {
                        scale: {
                            x: 1.2,
                            y: 1.2
                        }
                    },
                    time: 200,
                    pingPong: !0
                },
                move2: {
                    to: {
                        scale: {
                            x: 1.2,
                            y: 1.2
                        }
                    },
                    time: 300,
                    delay: 700,
                    pingPong: !0
                }
            },
            sprites: [{
                name: "pic",
                image: prefix + "/" + image,
                position: {
                    centered: !0
                }
            }, {
                image: prefix + "/fade",
                parentStages: ["blocked"],
                alpha: .7,
                tint: 0,
                position: {
                    centered: !0
                },
                animations: {
                    hide: {
                        to: {
                            alpha: 0
                        },
                        time: 300,
                        delay: 800
                    },
                    show: {
                        from: {
                            alpha: 0
                        },
                        to: {
                            alpha: .4
                        },
                        time: 300
                    }
                }
            }, {
                image: prefix + "/fade",
                parentStages: ["ready"],
                alpha: .7,
                position: {
                    centered: !0
                },
                animations: {
                    hide: {
                        to: {
                            alpha: 0
                        },
                        time: 300,
                        delay: 800
                    },
                    show: {
                        from: {
                            alpha: 0
                        },
                        to: {
                            alpha: .4
                        },
                        time: 300,
                        delay: 0
                    }
                }
            }, {
                image: prefix + "/border",
                position: {
                    centered: !0
                }
            }, {
                parentStages: ["unlocked"],
                image: prefix + "/border-a",
                alpha: 0,
                position: {
                    centered: !0
                },
                on: [{
                    t: Triggers.onAnimationEnd("show"),
                    c: function () {
                        return !is_adwords
                    },
                    r: Rewards.startAnimation("idle")
                }],
                animations: {
                    show: {
                        to: {
                            alpha: 1
                        },
                        time: 300
                    },
                    idle: {
                        to: {
                            alpha: .2
                        },
                        pingPong: !0,
                        loop: !0,
                        easing: "inOutSine",
                        time: 2e3
                    }
                }
            }, {
                image: prefix + "/ok",
                parentStages: ["ready"],
                alpha: 0,
                scale: {
                    x: 2,
                    y: 2
                },
                position: {
                    centered: !0
                },
                animations: {
                    show: {
                        to: {
                            scale: {
                                x: 1,
                                y: 1
                            },
                            alpha: 1
                        },
                        time: 500,
                        easing: "outBounce"
                    }
                }
            }, {
                name: "counter",
                image: prefix + "/num/num-" + index,
                position: {
                    x: 44,
                    y: 44
                },
                parentStages: ["default", "ready", "unlocked"],
                animations: {
                    show: {
                        creator: Animations.alphaScaleShow
                    }
                }
            }, {
                name: "lock",
                class: Lock,
                parentStages: ["blocked", "unlocked"],
                scale: {
                    x: .7,
                    y: .7
                },
                position: {
                    x: 70,
                    y: 70
                },
                position_center: {
                    x: 0,
                    y: 0
                },
                pivot: {
                    x: 41,
                    y: 57
                }
            }]
        })
    }
}
export default Icon;