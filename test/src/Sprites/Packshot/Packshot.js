import StagedSprite from '../../Playable/Core/StagedSprite.js';
import Rewards from '../../Playable/Behaviors/UniversalBehavior/Rewards.js';
import Triggers from '../../Playable/Behaviors/UniversalBehavior/Triggers.js';
import Animations from '../../Animations.js';
import Icon from './Icon.js';

class PackShot extends StagedSprite {
    onShowStart() {
        this.setStage("visible"),
            this.confettiLocked || this.confetti.start(4e3)
    }
    lockConfetti() {
        this.confettiLocked = !0
    }
    getDefaultConfig(config) {
        var _this2 = this
            , _config$openedSlots = config.openedSlots
            , openedSlots = void 0 === _config$openedSlots ? 1 : _config$openedSlots
            , apiName = window.playableEnv && window.playableEnv.apiName || null
            , language = utils.getLang()
            , isTanCn = "tan" === apiName && "cn" === language
            , icons = [0, 1, 2, 3, 4, 5].map(function (i) {
                return {
                    class: Icon,
                    adaptivePosition: !0,
                    data: {
                        prefix: "packshot",
                        image: "slot-" + (i + 1),
                        index: i + 1
                    },
                    startStage: i < openedSlots ? "default" : "blocked",
                    parentStages: ["visible"],
                    position_portrait: {
                        x: (i % 2 ? 210 : 0) - 105,
                        y: 210 * Math.floor(i / 2) - 210 + 15
                    },
                    position: {
                        x: 210 * (i - 3 * Math.floor(i / 3)) - 210,
                        y: (i < 3 ? 0 : 210) - 105
                    },
                    animations: {
                        show: {
                            creator: Animations.alphaScaleShow,
                            time: 300,
                            delay: 400
                        }
                    },
                    behaviors: [isTanCn ? function () { }
                        : _Behaviors2.default.clickInstall],
                    scenarios: {
                        setComplete: [Rewards.wait(350 * (i + 1)), Rewards.playSound("packshot/ok"), Rewards.setStage("ready")],
                        setUnlocked: [Rewards.wait(1200), Rewards.setStage("unlocked")]
                    },
                    on: [i < openedSlots && {
                        t: Triggers.onAnimationEnd("show"),
                        r: Rewards.startScenario("setComplete")
                    }, i === openedSlots && {
                        t: Triggers.onAnimationEnd("show"),
                        r: Rewards.startScenario("setUnlocked")
                    }]
                }
            });
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
        }(PackShot.prototype.__proto__ || Object.getPrototypeOf(PackShot.prototype), "getDefaultConfig", this).call(this, config), {
            stages: ["hidden", "visible"],
            startStage: "hidden",
            _spritesFields: ["sprites", "icons"],
            sprites: [{
                name: "confetti",
                class: _Confetti2.default
            }, {
                name: "logo",
                image: "logo",
                parentStages: ["visible"],
                scale: {
                    x: 1.2,
                    y: 1.2
                },
                adaptivePosition: !0,
                position: {
                    centered: !0,
                    y: -256
                },
                position_portrait: {
                    centered: !0,
                    y: -374
                },
                animations: {
                    show: {
                        creator: Animations.alphaScaleShow,
                        time: 300,
                        on: {
                            start: function () {
                                _this2.app.playSound("packshot/whoosh", {
                                    volume: 2
                                })
                            }
                        }
                    }
                }
            }, !isTanCn && {
                name: "title",
                image: "play-next",
                parentStages: ["visible"],
                adaptivePosition: !0,
                position: {
                    centered: !0,
                    y: 256
                },
                position_portrait: {
                    centered: !0,
                    y: 374
                },
                animations: {
                    show: {
                        creator: Animations.alphaScaleShow,
                        time: 300,
                        delay: 400,
                        on: {
                            start: function () {
                                _this2.app.playSound("packshot/whoosh", {
                                    volume: 2
                                }),
                                    setTimeout(function () {
                                        _this2.app.finish()
                                    }, 2500)
                            }
                        }
                    }
                }
            }, isTanCn && {
                name: "btn",
                class: _ButtonPlay2.default,
                image: "btn-green",
                textImage: "download-now",
                noPulse: !0,
                parentStages: ["visible"],
                position: {
                    centered: !0,
                    y: 256
                },
                position_portrait: {
                    centered: !0,
                    y: 374
                },
                adaptivePosition: !0,
                animations: {
                    show: {
                        creator: Animations.alphaScaleShow,
                        time: 300,
                        delay: 400,
                        on: {
                            start: function () {
                                _this2.app.playSound("packshot/whoosh", {
                                    volume: 2
                                }),
                                    setTimeout(function () {
                                        _this2.app.finish()
                                    }, 2500)
                            }
                        }
                    }
                }
            }],
            icons: icons
        })
    }
}
export default PackShot;