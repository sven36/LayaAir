import Sprite from '../Playable/Core/Sprite';
import Rewards from '../Playable/Behaviors/UniversalBehavior/Rewards';
import Animations from '../Animations';

export const SpiderEvents = {
    move: "move"
}

class Spider extends Sprite {
    move() {
        this.scenarios.move.reset().start()
    }
    fall() {
        this.scenarios.fall.reset().start()
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
        }(Spider.prototype.__proto__ || Object.getPrototypeOf(Spider.prototype), "getDefaultConfig", this).call(this, config), {
            scenarios: {
                move: {
                    rewards: [Rewards.emitEvent(SpiderEvents.move), Rewards.instant(Rewards.startAnimation("moveUp")), Rewards.startAnimation("paws"), Rewards.startAnimation("paws"), Rewards.startAnimation("paws"), Rewards.wait(1e3), Rewards.emitEvent(SpiderEvents.move), Rewards.instant(Rewards.startAnimation("moveDown")), Rewards.startAnimation("paws"), Rewards.startAnimation("paws"), Rewards.startAnimation("paws"), Rewards.wait(1500)],
                    loop: !0
                },
                fall: [Rewards.stopScenario("move"), Rewards.stopAnimation("moveUp"), Rewards.stopAnimation("moveDown"), Rewards.wait(100), Rewards.instant(Rewards.startAnimation("paws")), Rewards.instant(Rewards.startAnimation("fallScale")), Rewards.startAnimation("fall")]
            },
            animations: {
                fallScale: {
                    to: {
                        scale: {
                            x: 1,
                            y: .3
                        }
                    },
                    time: 200,
                    easing: "outQuad"
                },
                fall: {
                    creator: Animations.moveToPosition,
                    position: "fall",
                    fromCurrentPosition: !0,
                    time: 500,
                    easing: "outQuad"
                },
                moveUp: {
                    creator: Animations.moveToPosition,
                    position: "up",
                    fromCurrentPosition: !0,
                    time: 1200,
                    easing: "inOutQuad"
                },
                moveDown: {
                    creator: Animations.moveToPosition,
                    position: "default",
                    fromCurrentPosition: !0,
                    time: 1200,
                    easing: "inOutQuad"
                },
                paws: {
                    to: {
                        paw_1: {
                            rotation: -.15
                        },
                        paw_2: {
                            rotation: .1
                        },
                        paw_3: {
                            rotation: .2
                        },
                        paw_4: {
                            rotation: -.2
                        },
                        paw_5: {
                            scale: {
                                x: .8,
                                y: .99
                            }
                        },
                        paw_6: {
                            rotation: .1
                        }
                    },
                    time: 400,
                    easing: "inOutQuad",
                    pingPong: !0
                },
                idle: {
                    to: {
                        body: {
                            scale: {
                                x: 1.03,
                                y: 1.03
                            }
                        },
                        head: {
                            scale: {
                                x: .99,
                                y: .99
                            }
                        },
                        nose: {
                            rotation: .02
                        }
                    },
                    time: 400,
                    easing: "inOutQuad",
                    pingPong: !0,
                    loop: !0,
                    autoStart: !0
                }
            },
            sprites: [{
                name: "nose",
                image: "spider/nose"
            }, {
                name: "paw_1",
                image: "spider/paw_1",
                anchor: {
                    x: .4,
                    y: .4
                }
            }, {
                name: "paw_2",
                image: "spider/paw_2",
                anchor: {
                    x: .45,
                    y: .4
                }
            }, {
                name: "paw_3",
                image: "spider/paw_3",
                anchor: {
                    x: .5,
                    y: .55
                }
            }, {
                name: "paw_6",
                image: "spider/paw_6",
                anchor: {
                    x: .3,
                    y: .6
                }
            }, {
                name: "head",
                image: "spider/head"
            }, {
                name: "body",
                image: "spider/body"
            }, {
                name: "paw_4",
                image: "spider/paw_4",
                anchor: {
                    x: .35,
                    y: .65
                }
            }, {
                name: "paw_5",
                image: "spider/paw_5",
                anchor: {
                    x: .3,
                    y: .7
                }
            }]
        })
    }
}
export default Spider;