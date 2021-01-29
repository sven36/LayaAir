import StagedSprite from '../Playable/Core/StagedSprite.js';
import Rewards from '../Playable/Behaviors/UniversalBehavior/Rewards.js';
import Triggers from '../Playable/Behaviors/UniversalBehavior/Triggers.js';
import Animations from '../Animations.js';
import Events from '../Events.js';
import Drops from './Drops.js';


export let KatrinEvents = {
    walk: "walk",
    stop: "stop",
    sadSmile: "sadSmile",
    sadSmileEnd: "sadSmileEnd",
    falling: "falling",
    happy: "happy"
}
class Katrin extends StagedSprite {
    exitCar() {
        this.setStage("sad")
    }
    hideDrops() {
        this.app.emit(KatrinEvents.sadSmile)
    }
    showDrops() {
        this.app.emit(KatrinEvents.sadSmileEnd)
    }
    enterHouse() {
        this.setStage("normal")
    }
    setFalling() {
        this.setStage("falling"),
            this.app.emit(KatrinEvents.falling)
    }
    setHappy() {
        this.app.emit(KatrinEvents.happy)
    }
    stop() {
        this.app.emit(KatrinEvents.stop)
    }
    walk() {
        this.app.emit(KatrinEvents.walk)
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
        }(Katrin.prototype.__proto__ || Object.getPrototypeOf(Katrin.prototype), "getDefaultConfig", this).call(this, config), {
            pivot: {
                x: 50,
                y: 100
            },
            stages: ["sad", "normal", "falling"],
            startStage: "sad",
            sprites: [{
                name: "sad",
                parentStages: ["sad"],
                scenarios: {
                    startWalk: [Rewards.stopScenario("idleParts"), Rewards.resetScenario("idleParts"), Rewards.stopScenario("idleEyes"), Rewards.resetScenario("idleEyes"), Rewards.stopScenario("stopWalk"), Rewards.resetScenario("stopWalk"), Rewards.stopScenario("walk"), Rewards.resetScenario("walk"), Rewards.stopAnimation("idleHair"), Rewards.stopAnimation("idleBody"), Rewards.startAnimation("startWalk"), Rewards.startScenario("walk")],
                    walk: {
                        rewards: [Rewards.instant(Rewards.startAnimation("legsWalk")), Rewards.instant(Rewards.startAnimation("handsWalk")), Rewards.instant(Rewards.startAnimation("hairWalk")), Rewards.startAnimation("bodyWalk")],
                        loop: !0
                    },
                    stopWalk: [Rewards.stopScenario("startWalk"), Rewards.resetScenario("startWalk"), Rewards.stopScenario("walk"), Rewards.resetScenario("walk"), Rewards.wait(200), Rewards.startAnimation("stopWalk")],
                    wet: [Rewards.startAnimation("wet")],
                    rain: [Rewards.startAnimation("rain"), Rewards.instant(Rewards.startScenario("idleParts")), Rewards.instant(Rewards.startScenario("idleEyes"))],
                    sadSmile: [Rewards.startAnimation("sadSmile"), Rewards.playSound("female_surprise_3")],
                    idleEyes: {
                        rewards: [Rewards.startAnimation("idleEyesCenter"), Rewards.wait(1e3), Rewards.startAnimation("idleEyesForward"), Rewards.wait(1e3)],
                        loop: !0
                    },
                    idleParts: {
                        rewards: [Rewards.instant(Rewards.startAnimation("idleHair")), Rewards.instant(Rewards.startAnimation("idleBody"))]
                    }
                },
                on: [{
                    t: Triggers.onEvent(KatrinEvents.walk),
                    r: Rewards.startScenario("startWalk")
                }, {
                    t: Triggers.onEvent(KatrinEvents.stop),
                    r: Rewards.startScenario("stopWalk")
                }, {
                    t: Triggers.onEvent(Events.stageCarMove),
                    r: Rewards.startScenario("wet")
                }, {
                    t: Triggers.onEvent(Events.stageRainEnd),
                    r: Rewards.startScenario("rain")
                }, {
                    t: Triggers.onEvent(KatrinEvents.sadSmile),
                    r: Rewards.startScenario("sadSmile")
                }, {
                    t: Triggers.onEvent(KatrinEvents.sadSmileEnd),
                    r: [Rewards.startAnimation("sadSmileEnd"), Rewards.playSound("female_sadness_3")]
                }],
                animations: {
                    idleEyesCenter: {
                        to: {
                            head: {
                                pupil_l: {
                                    pivot: {
                                        x: -5,
                                        y: 0
                                    }
                                },
                                pupil_r: {
                                    pivot: {
                                        x: -5,
                                        y: 0
                                    }
                                }
                            }
                        },
                        time: 500,
                        easing: "inOutQuad"
                    },
                    idleEyesForward: {
                        to: {
                            head: {
                                pupil_l: {
                                    pivot: {
                                        x: -10,
                                        y: 0
                                    }
                                },
                                pupil_r: {
                                    pivot: {
                                        x: -10,
                                        y: 0
                                    }
                                }
                            }
                        },
                        time: 500,
                        easing: "inOutQuad"
                    },
                    idleHair: {
                        to: {
                            head: {
                                hair_l: {
                                    rotation: .03
                                },
                                hair_r: {
                                    rotation: -.05
                                }
                            },
                            tail: {
                                rotation: 0
                            }
                        },
                        pingPong: !0,
                        loop: !0,
                        time: 500,
                        easing: "inOutQuad"
                    },
                    idleBody: {
                        to: {
                            head: {
                                rotation: -.31
                            },
                            body: {
                                rotation: .01,
                                pivot: {
                                    x: 1,
                                    y: 0
                                }
                            },
                            arm_r: {
                                bag: {
                                    rotation: -.1
                                },
                                rotation: -.05
                            },
                            arm_l: {
                                rotation: .05
                            }
                        },
                        pingPong: !0,
                        loop: !0,
                        time: 1500,
                        easing: "inOutQuad"
                    },
                    wet: {
                        to: {
                            head: {
                                brow_l: {
                                    rotation: .25
                                },
                                brow_r: {
                                    rotation: -.25
                                },
                                lips_closed: {
                                    alpha: 0
                                },
                                lips_opened: {
                                    alpha: 1
                                },
                                rotation: .25
                            },
                            tail: {
                                rotation: .1,
                                pivot: {
                                    x: -5,
                                    y: 0
                                }
                            },
                            scale: {
                                x: 1,
                                y: .95
                            },
                            pivot: {
                                x: 0,
                                y: -10
                            }
                        },
                        time: 800,
                        pingPong: !0,
                        easing: "outQuad"
                    },
                    rain: {
                        to: {
                            head: {
                                eyelid_l: {
                                    scale: {
                                        x: 1,
                                        y: .8
                                    }
                                },
                                eyelid_r: {
                                    scale: {
                                        x: 1,
                                        y: .8
                                    }
                                },
                                brow_l: {
                                    rotation: -.35
                                },
                                brow_r: {
                                    rotation: .35
                                },
                                pupil_l: {
                                    pivot: {
                                        x: -10,
                                        y: 0
                                    }
                                },
                                pupil_r: {
                                    pivot: {
                                        x: -10,
                                        y: 0
                                    }
                                },
                                rotation: -.3,
                                pivot: {
                                    x: 0,
                                    y: 4
                                }
                            },
                            tail: {
                                rotation: -.1
                            }
                        },
                        time: 800,
                        easing: "inOutQuad"
                    },
                    sadSmile: {
                        to: {
                            head: {
                                lips_closed: {
                                    alpha: 0
                                },
                                lips_opened: {
                                    alpha: 1
                                }
                            }
                        },
                        time: 300,
                        easing: "inOutQuad"
                    },
                    sadSmileEnd: {
                        to: {
                            head: {
                                lips_closed: {
                                    alpha: 1
                                },
                                lips_opened: {
                                    alpha: 0
                                }
                            }
                        },
                        time: 300,
                        easing: "inOutQuad"
                    },
                    legsWalk: {
                        from: {
                            leg_l: {
                                rotation: -.25,
                                pivot: {
                                    x: -10,
                                    y: 0
                                }
                            },
                            leg_r: {
                                rotation: .25,
                                pivot: {
                                    x: 10,
                                    y: 0
                                }
                            }
                        },
                        to: {
                            leg_l: {
                                rotation: .25,
                                pivot: {
                                    x: 15,
                                    y: 1
                                }
                            },
                            leg_r: {
                                rotation: -.25,
                                pivot: {
                                    x: -15,
                                    y: 1
                                }
                            }
                        },
                        pingPong: !0,
                        time: 400,
                        easing: "inOutQuad"
                    },
                    handsWalk: {
                        from: {
                            arm_r: {
                                bag: {
                                    rotation: .4
                                },
                                rotation: .25
                            },
                            arm_l: {
                                rotation: -.2
                            }
                        },
                        to: {
                            arm_r: {
                                bag: {
                                    rotation: -.4
                                },
                                rotation: -.25
                            },
                            arm_l: {
                                rotation: .2
                            }
                        },
                        pingPong: !0,
                        time: 400,
                        easing: "inOutSine"
                    },
                    hairWalk: {
                        from: {
                            head: {
                                hair_l: {
                                    rotation: .07
                                },
                                hair_r: {
                                    rotation: -.1
                                }
                            },
                            tail: {
                                rotation: 0
                            }
                        },
                        to: {
                            head: {
                                hair_l: {
                                    rotation: -.07
                                },
                                hair_r: {
                                    rotation: .1
                                }
                            },
                            tail: {
                                rotation: .1
                            }
                        },
                        pingPong: !0,
                        time: 400,
                        easing: "inOutSine"
                    },
                    bodyWalk: {
                        from: {
                            pivot: {
                                x: 0,
                                y: 0
                            },
                            rotation: -.01
                        },
                        to: {
                            pivot: {
                                x: 0,
                                y: -2
                            },
                            rotation: .02
                        },
                        pingPong: !0,
                        time: 400,
                        easing: "inOutQuad"
                    },
                    stopWalk: {
                        to: {
                            leg_l: {
                                rotation: 0,
                                pivot: {
                                    x: 0,
                                    y: 0
                                }
                            },
                            leg_r: {
                                rotation: 0,
                                pivot: {
                                    x: 0,
                                    y: 0
                                }
                            },
                            arm_r: {
                                bag: {
                                    rotation: 0
                                },
                                rotation: 0
                            },
                            arm_l: {
                                rotation: 0
                            },
                            head: {
                                hair_l: {
                                    rotation: 0
                                },
                                hair_r: {
                                    rotation: 0
                                }
                            }
                        },
                        time: 200,
                        easing: "outQuad"
                    },
                    startWalk: {
                        to: {
                            leg_l: {
                                rotation: -.15,
                                pivot: {
                                    x: -10,
                                    y: 0
                                }
                            },
                            leg_r: {
                                rotation: .15,
                                pivot: {
                                    x: 10,
                                    y: 0
                                }
                            },
                            arm_r: {
                                bag: {
                                    rotation: .4
                                },
                                rotation: .25
                            },
                            arm_l: {
                                rotation: -.2
                            },
                            head: {
                                hair_l: {
                                    rotation: .07
                                },
                                hair_r: {
                                    rotation: -.1
                                }
                            }
                        },
                        time: 300,
                        easing: "outQuad"
                    }
                },
                sprites: [{
                    name: "tail",
                    image: "kat/hair_tail",
                    anchor: {
                        x: .7,
                        y: .4
                    },
                    position: {
                        x: -5,
                        y: -50
                    }
                }, {
                    name: "leg_l",
                    image: "kat/leg_l",
                    anchor: {
                        x: .5,
                        y: .3
                    },
                    position: {
                        x: 32,
                        y: 105
                    }
                }, {
                    name: "leg_r",
                    image: "kat/leg_r",
                    anchor: {
                        x: .5,
                        y: .3
                    },
                    position: {
                        x: 20,
                        y: 107
                    }
                }, {
                    name: "arm_l",
                    image: "kat/arm_l",
                    anchor: {
                        x: .1,
                        y: .1
                    },
                    position: {
                        x: 50,
                        y: 15
                    }
                }, {
                    name: "body",
                    image: "kat/body"
                }, {
                    name: "head",
                    image: "kat/sad_head",
                    anchor: {
                        x: .4,
                        y: .9
                    },
                    position: {
                        x: 1,
                        y: -90
                    },
                    sprites: [{
                        name: "pupil_l",
                        image: "kat/sad_head_pupil_l",
                        position: {
                            x: 0,
                            y: 0
                        }
                    }, {
                        name: "pupil_r",
                        image: "kat/sad_head_pupil_r",
                        position: {
                            x: 0,
                            y: 0
                        }
                    }, {
                        name: "eyelid_l",
                        image: "kat/sad_head_eyelid_l",
                        anchor: {
                            x: .7,
                            y: .5
                        }
                    }, {
                        name: "brow_l",
                        image: "kat/sad_head_brow_l",
                        anchor: {
                            x: .7,
                            y: .5
                        }
                    }, {
                        name: "hair_l",
                        image: "kat/sad_head_hair_l",
                        anchor: {
                            x: .8,
                            y: .2
                        }
                    }, {
                        name: "nose",
                        image: "kat/sad_head_nose"
                    }, {
                        name: "eyelid_r",
                        image: "kat/sad_head_eyelid_r",
                        anchor: {
                            x: .55,
                            y: .5
                        }
                    }, {
                        name: "brow_r",
                        image: "kat/sad_head_brow_r",
                        anchor: {
                            x: .55,
                            y: .5
                        }
                    }, {
                        name: "hair_r",
                        image: "kat/sad_head_hair_r",
                        anchor: {
                            x: .6,
                            y: .3
                        }
                    }, {
                        name: "lips_closed",
                        image: "kat/sad_head_lips_closed"
                    }, {
                        name: "lips_opened",
                        image: "kat/sad_head_lips_open",
                        alpha: 0
                    }, {
                        name: "drops",
                        class: Drops,
                        position: {
                            x: 10,
                            y: 10
                        },
                        count: 3,
                        dxMin: 10,
                        dxMax: 20,
                        dy: 20,
                        drop: {
                            prefix: "water/drops_",
                            images: 6,
                            time: 400
                        },
                        on: [{
                            t: Triggers.onEvent(KatrinEvents.sadSmile),
                            r: Rewards.hide()
                        }, {
                            t: [Triggers.onEvent(KatrinEvents.sadSmileEnd), Triggers.onStart()],
                            r: Rewards.show()
                        }]
                    }, {
                        name: "flow",
                        image: "water/head_flow_1",
                        position: {
                            x: 38,
                            y: 31
                        },
                        scale: {
                            x: 2,
                            y: 2
                        },
                        visible: !1,
                        animations: {
                            show: {
                                creator: Animations.sequence,
                                images: {
                                    prefix: "water/head_flow_",
                                    count: 7
                                },
                                time: 500,
                                delay: 200
                            }
                        },
                        on: [{
                            t: Triggers.onEvent(Events.stageCarMove),
                            r: Rewards.show()
                        }, {
                            t: Triggers.onAnimationEnd("show"),
                            r: Rewards.hide()
                        }]
                    }, {
                        name: "flow_chin",
                        image: "water/chin_flow_1",
                        position: {
                            x: 61,
                            y: 115
                        },
                        scale: {
                            x: 2,
                            y: 2
                        },
                        visible: !1,
                        animations: {
                            show: {
                                creator: Animations.sequence,
                                images: {
                                    prefix: "water/chin_flow_",
                                    count: 7
                                },
                                time: 600,
                                delay: 400
                            }
                        },
                        on: [{
                            t: Triggers.onEvent(Events.stageCarMove),
                            r: Rewards.show()
                        }, {
                            t: Triggers.onAnimationEnd("show"),
                            r: Rewards.hide()
                        }]
                    }]
                }, {
                    name: "arm_r",
                    pivot: {
                        x: 18,
                        y: 7
                    },
                    position: {
                        x: 28,
                        y: 22
                    },
                    sprites: [{
                        name: "bag",
                        image: "kat/bag",
                        anchor: {
                            x: .7,
                            y: .1
                        },
                        position: {
                            x: -20,
                            y: 75
                        }
                    }, {
                        name: "arm",
                        image: "kat/arm_r"
                    }, {
                        name: "flow",
                        image: "water/chin_flow_1",
                        position: {
                            x: 16,
                            y: 131
                        },
                        scale: {
                            x: 2,
                            y: 2
                        },
                        visible: !1,
                        animations: {
                            show: {
                                creator: Animations.sequence,
                                images: {
                                    prefix: "water/chin_flow_",
                                    count: 7
                                },
                                time: 600,
                                delay: 500
                            }
                        },
                        on: [{
                            t: Triggers.onEvent(Events.stageCarMove),
                            r: Rewards.show()
                        }, {
                            t: Triggers.onAnimationEnd("show"),
                            r: Rewards.hide()
                        }]
                    }]
                }]
            }, {
                name: "normal",
                parentStages: ["normal"],
                scenarios: {
                    startWalk: [Rewards.stopScenario("idleParts"), Rewards.resetScenario("idleParts"), Rewards.stopScenario("idleEyes"), Rewards.resetScenario("idleEyes"), Rewards.stopScenario("stopWalk"), Rewards.resetScenario("stopWalk"), Rewards.stopScenario("walk"), Rewards.resetScenario("walk"), Rewards.stopAnimation("idleBody"), Rewards.stopAnimation("idleBodyScared"), Rewards.stopAnimation("bulgarIdleHead"), Rewards.instant(Rewards.startAnimation("idleEyesForward")), Rewards.startAnimation("startWalk"), Rewards.startScenario("walk")],
                    walk: {
                        rewards: [Rewards.instant(Rewards.startAnimation("legsWalk")), Rewards.instant(Rewards.startAnimation("handsWalk")), Rewards.instant(Rewards.startAnimation("hairWalk")), Rewards.startAnimation("bodyWalk")],
                        loop: !0
                    },
                    stopWalk: [Rewards.stopScenario("startWalk"), Rewards.resetScenario("startWalk"), Rewards.stopScenario("walk"), Rewards.resetScenario("walk"), Rewards.wait(200), Rewards.startAnimation("stopWalk")],
                    idleEyes: {
                        rewards: [Rewards.startAnimation("idleEyesCenter"), Rewards.wait(1e3), Rewards.startAnimation("idleEyesForward"), Rewards.wait(1e3)],
                        loop: !0
                    },
                    idleParts: [Rewards.startAnimation("idleBody")],
                    elevator: [Rewards.playSound("female_fright_1"), Rewards.wait(200), Rewards.instant(Rewards.startAnimation("scareArms")), Rewards.startAnimation("scare"), Rewards.instant(Rewards.startAnimation("idleBodyScared")), Rewards.instant(Rewards.startScenario("idleEyes"))],
                    scare: [Rewards.playSound("female_fright_1"), Rewards.wait(200), Rewards.stopScenario("happyIdle"), Rewards.stopAnimation("idleBody"), Rewards.instant(Rewards.startAnimation("scareArms")), Rewards.startAnimation("scare")],
                    happy: [Rewards.playSound("female_laughter_1"), Rewards.stopScenario("elevator"), Rewards.stopAnimation("scareArms"), Rewards.stopAnimation("scare"), Rewards.stopAnimation("idleBodyScared"), Rewards.stopAnimation("bulgarIdleHead"), Rewards.stopAnimation("bulgarIdleBody"), Rewards.startAnimation("happy"), Rewards.instant(Rewards.startAnimation("idleBody")), Rewards.startScenario("happyIdle")],
                    happyIdle: {
                        rewards: [Rewards.startAnimation("happyIdleHead"), Rewards.startAnimation("happyIdleHead"), Rewards.startAnimation("happyIdleHead"), Rewards.wait(1e3), Rewards.startAnimation("happyIdleHead"), Rewards.startAnimation("happyIdleHead"), Rewards.startAnimation("happyIdleHead"), Rewards.wait(500)],
                        loop: !0
                    },
                    bulgar: [Rewards.playSound("female_fright_2"), Rewards.stopScenario("happyIdle"), Rewards.startAnimation("bulgar"), Rewards.instant(Rewards.startScenario("idleEyes")), Rewards.instant(Rewards.startAnimation("bulgarIdleHead")), Rewards.instant(Rewards.startAnimation("bulgarIdleBody"))]
                },
                on: [{
                    t: Triggers.onAnimationEnd("show"),
                    r: Rewards.playSound("female_seduction_1")
                }, {
                    t: Triggers.onEvent(KatrinEvents.walk),
                    r: Rewards.startScenario("startWalk")
                }, {
                    t: Triggers.onEvent(KatrinEvents.stop),
                    r: Rewards.startScenario("stopWalk")
                }, {
                    t: Triggers.onEvent(Events.stageElevatorEnd),
                    r: Rewards.startScenario("elevator")
                }, {
                    t: Triggers.onEvent(Events.elevatorFall),
                    r: Rewards.startScenario("happy")
                }, {
                    t: Triggers.onEvent(Events.stageBulgarEnd),
                    r: Rewards.startScenario("bulgar")
                }, {
                    t: Triggers.onEvent(Events.stageBasementEnd),
                    r: Rewards.startScenario("scare")
                }, {
                    t: [Triggers.onEvent(Events.stageHome), Triggers.onEvent(KatrinEvents.happy)],
                    r: [Rewards.resetScenario("happy"), Rewards.startScenario("happy")]
                }],
                animations: {
                    show: {
                        time: 200
                    },
                    idleEyesCenter: {
                        to: {
                            head: {
                                pupil_l: {
                                    pivot: {
                                        x: 5,
                                        y: 0
                                    }
                                },
                                pupil_r: {
                                    pivot: {
                                        x: 5,
                                        y: 0
                                    }
                                }
                            }
                        },
                        time: 500,
                        easing: "inOutQuad"
                    },
                    idleEyesForward: {
                        to: {
                            head: {
                                pupil_l: {
                                    pivot: {
                                        x: 0,
                                        y: 0
                                    }
                                },
                                pupil_r: {
                                    pivot: {
                                        x: 0,
                                        y: 0
                                    }
                                }
                            }
                        },
                        time: 500,
                        easing: "inOutQuad"
                    },
                    idleBody: {
                        to: {
                            head: {
                                rotation: -.02
                            },
                            body: {
                                rotation: .01,
                                pivot: {
                                    x: 1,
                                    y: 0
                                }
                            },
                            arm_r: {
                                bag: {
                                    rotation: -.15
                                },
                                rotation: -.1
                            },
                            arm_l: {
                                rotation: .1
                            },
                            arm_l_joy: {
                                rotation: .1
                            }
                        },
                        pingPong: !0,
                        loop: !0,
                        time: 1500,
                        easing: "inOutQuad"
                    },
                    idleBodyScared: {
                        to: {
                            head: {
                                rotation: -.02
                            },
                            body: {
                                rotation: -.21
                            },
                            arm_r: {
                                pivot: {
                                    x: 26,
                                    y: 4
                                },
                                bag: {
                                    rotation: -.21
                                },
                                rotation: .26
                            },
                            arm_l_scared: {
                                rotation: .04
                            },
                            tail: {
                                pivot: {
                                    x: 11,
                                    y: -1
                                },
                                rotation: -.11
                            }
                        },
                        pingPong: !0,
                        loop: !0,
                        time: 300,
                        easing: "inOutQuad"
                    },
                    scare: {
                        to: {
                            head: {
                                eyelid_l: {
                                    alpha: 0
                                },
                                eyelid_r: {
                                    alpha: 0
                                },
                                brow_l: {
                                    pivot: {
                                        x: 0,
                                        y: 5
                                    }
                                },
                                brow_r: {
                                    pivot: {
                                        x: 0,
                                        y: 5
                                    }
                                },
                                lips_closed: {
                                    alpha: 0
                                },
                                lips_joy: {
                                    alpha: 0
                                },
                                lips_opened: {
                                    alpha: 1
                                },
                                pivot: {
                                    x: 10,
                                    y: 0
                                }
                            },
                            tail: {
                                pivot: {
                                    x: 10,
                                    y: 0
                                },
                                rotation: -.1
                            },
                            body: {
                                rotation: -.2
                            },
                            leg_r: {
                                pivot: {
                                    x: 10,
                                    y: 0
                                }
                            }
                        },
                        time: 400,
                        easing: "inOutQuad"
                    },
                    scareArms: {
                        to: {
                            arm_l: {
                                alpha: 0
                            },
                            arm_l_joy: {
                                alpha: 0
                            },
                            arm_l_scared_back: {
                                alpha: 1
                            },
                            arm_l_scared: {
                                alpha: 1
                            },
                            arm_r: {
                                pivot: {
                                    x: 25,
                                    y: 4
                                },
                                bag: {
                                    rotation: -.2
                                },
                                rotation: .25
                            }
                        },
                        time: 300,
                        easing: "inOutQuad"
                    },
                    happy: {
                        to: {
                            head: {
                                eyelid_l: {
                                    alpha: 1
                                },
                                eyelid_r: {
                                    alpha: 1
                                },
                                brow_l: {
                                    pivot: {
                                        x: 0,
                                        y: 0
                                    }
                                },
                                brow_r: {
                                    pivot: {
                                        x: 0,
                                        y: 0
                                    }
                                },
                                lips_closed: {
                                    alpha: 0
                                },
                                lips_opened: {
                                    alpha: 0
                                },
                                lips_joy: {
                                    alpha: 1
                                },
                                pivot: {
                                    x: 0,
                                    y: 0
                                }
                            },
                            arm_l: {
                                alpha: 0
                            },
                            arm_l_scared_back: {
                                alpha: 0
                            },
                            arm_l_scared: {
                                alpha: 0
                            },
                            arm_l_bag: {
                                alpha: 0
                            },
                            arm_l_joy: {
                                alpha: 1
                            },
                            arm_r: {
                                pivot: {
                                    x: 18,
                                    y: 7
                                },
                                bag: {
                                    rotation: 0
                                },
                                rotation: 0
                            },
                            tail: {
                                pivot: {
                                    x: 0,
                                    y: 0
                                },
                                rotation: 0
                            },
                            body: {
                                rotation: 0
                            },
                            leg_r: {
                                pivot: {
                                    x: 0,
                                    y: 0
                                }
                            }
                        },
                        time: 400,
                        easing: "inOutQuad"
                    },
                    happyIdleHead: {
                        to: {
                            head: {
                                eyelid_l: {
                                    scale: {
                                        x: 1,
                                        y: 1.05
                                    }
                                },
                                eyelid_r: {
                                    scale: {
                                        x: 1,
                                        y: 1.05
                                    }
                                },
                                lips_joy: {
                                    scale: {
                                        x: 1.02,
                                        y: 1.05
                                    }
                                }
                            },
                            tail: {
                                pivot: {
                                    x: 0,
                                    y: 0
                                },
                                rotation: .01
                            }
                        },
                        time: 300,
                        easing: "inOutQuad",
                        pingPong: !0
                    },
                    bulgar: {
                        to: {
                            head: {
                                eyelid_l: {
                                    alpha: 0
                                },
                                eyelid_r: {
                                    alpha: 0
                                },
                                brow_l: {
                                    pivot: {
                                        x: 0,
                                        y: 5
                                    }
                                },
                                brow_r: {
                                    pivot: {
                                        x: 0,
                                        y: 5
                                    }
                                },
                                lips_closed: {
                                    alpha: 0
                                },
                                lips_joy: {
                                    alpha: 0
                                },
                                lips_opened: {
                                    alpha: 1
                                },
                                pivot: {
                                    x: 0,
                                    y: -3
                                },
                                rotation: .02
                            },
                            leg_r: {
                                pivot: {
                                    x: 10,
                                    y: 0
                                }
                            },
                            arm_l_joy: {
                                alpha: 0
                            },
                            arm_l: {
                                alpha: 0
                            },
                            arm_l_bag: {
                                alpha: 1,
                                rotation: .2
                            },
                            arm_r: {
                                pivot: {
                                    x: 18,
                                    y: 7
                                },
                                bag: {
                                    rotation: .4
                                },
                                rotation: -.4
                            },
                            tail: {
                                pivot: {
                                    x: 0,
                                    y: -3
                                }
                            }
                        },
                        time: 800,
                        easing: "inOutQuad"
                    },
                    bulgarIdleHead: {
                        to: {
                            head: {
                                lips_opened: {
                                    scale: {
                                        x: 1.02,
                                        y: 1.04
                                    }
                                },
                                rotation: .03
                            },
                            tail: {
                                pivot: {
                                    x: 0,
                                    y: -2
                                }
                            }
                        },
                        time: 1500,
                        easing: "inOutQuad",
                        pingPong: !0,
                        loop: !0
                    },
                    bulgarIdleBody: {
                        to: {
                            body: {
                                rotation: .01,
                                pivot: {
                                    x: 1,
                                    y: 0
                                }
                            },
                            arm_r: {
                                bag: {
                                    rotation: 0
                                },
                                rotation: -.43
                            },
                            arm_l_bag: {
                                rotation: .22
                            }
                        },
                        time: 1500,
                        easing: "inOutQuad",
                        pingPong: !0,
                        loop: !0
                    },
                    legsWalk: {
                        from: {
                            leg_l: {
                                rotation: -.25,
                                pivot: {
                                    x: -10,
                                    y: 0
                                }
                            },
                            leg_r: {
                                rotation: .25,
                                pivot: {
                                    x: 10,
                                    y: 0
                                }
                            }
                        },
                        to: {
                            leg_l: {
                                rotation: .25,
                                pivot: {
                                    x: 15,
                                    y: 1
                                }
                            },
                            leg_r: {
                                rotation: -.25,
                                pivot: {
                                    x: -15,
                                    y: 1
                                }
                            }
                        },
                        pingPong: !0,
                        time: 400,
                        easing: "inOutQuad"
                    },
                    handsWalk: {
                        from: {
                            arm_r: {
                                bag: {
                                    rotation: .4
                                },
                                rotation: .25
                            },
                            arm_l: {
                                rotation: -.2
                            },
                            arm_l_joy: {
                                rotation: -.2
                            }
                        },
                        to: {
                            arm_r: {
                                bag: {
                                    rotation: -.4
                                },
                                rotation: -.25
                            },
                            arm_l: {
                                rotation: .2
                            },
                            arm_l_joy: {
                                rotation: .2
                            }
                        },
                        pingPong: !0,
                        time: 400,
                        easing: "inOutSine"
                    },
                    hairWalk: {
                        from: {
                            head: {
                                hair_l: {
                                    rotation: .07
                                },
                                hair_r: {
                                    rotation: -.1
                                }
                            },
                            tail: {
                                rotation: 0
                            }
                        },
                        to: {
                            head: {
                                hair_l: {
                                    rotation: -.07
                                },
                                hair_r: {
                                    rotation: .1
                                }
                            },
                            tail: {
                                rotation: .1
                            }
                        },
                        pingPong: !0,
                        time: 400,
                        easing: "inOutSine"
                    },
                    bodyWalk: {
                        from: {
                            pivot: {
                                x: 0,
                                y: 0
                            },
                            rotation: -.01
                        },
                        to: {
                            pivot: {
                                x: 0,
                                y: -2
                            },
                            rotation: .02
                        },
                        pingPong: !0,
                        time: 400,
                        easing: "inOutQuad"
                    },
                    stopWalk: {
                        to: {
                            leg_l: {
                                rotation: 0,
                                pivot: {
                                    x: 0,
                                    y: 0
                                }
                            },
                            leg_r: {
                                rotation: 0,
                                pivot: {
                                    x: 0,
                                    y: 0
                                }
                            },
                            arm_r: {
                                bag: {
                                    rotation: 0
                                },
                                rotation: 0
                            },
                            arm_l: {
                                rotation: 0
                            },
                            arm_l_joy: {
                                rotation: 0
                            },
                            head: {
                                hair_l: {
                                    rotation: 0
                                },
                                hair_r: {
                                    rotation: 0
                                }
                            }
                        },
                        time: 200,
                        easing: "outQuad"
                    },
                    startWalk: {
                        to: {
                            leg_l: {
                                rotation: -.15,
                                pivot: {
                                    x: -10,
                                    y: 0
                                }
                            },
                            leg_r: {
                                rotation: .15,
                                pivot: {
                                    x: 10,
                                    y: 0
                                }
                            },
                            arm_r: {
                                bag: {
                                    rotation: .4
                                },
                                rotation: .25
                            },
                            arm_l: {
                                rotation: -.2
                            },
                            arm_l_joy: {
                                rotation: -.2
                            },
                            head: {
                                hair_l: {
                                    rotation: .07
                                },
                                hair_r: {
                                    rotation: -.1
                                }
                            }
                        },
                        time: 200,
                        easing: "outQuad"
                    }
                },
                sprites: [{
                    name: "tail",
                    image: "kat/hair_tail",
                    anchor: {
                        x: .7,
                        y: .4
                    },
                    position: {
                        x: -5,
                        y: -50
                    }
                }, {
                    name: "leg_l",
                    image: "kat/leg_l",
                    anchor: {
                        x: .5,
                        y: .3
                    },
                    position: {
                        x: 32,
                        y: 105
                    }
                }, {
                    name: "leg_r",
                    image: "kat/leg_r",
                    anchor: {
                        x: .5,
                        y: .3
                    },
                    position: {
                        x: 20,
                        y: 107
                    }
                }, {
                    name: "arm_l",
                    image: "kat/arm_l",
                    anchor: {
                        x: .1,
                        y: .1
                    },
                    position: {
                        x: 50,
                        y: 15
                    }
                }, {
                    name: "arm_l_scared_back",
                    image: "kat/arm_l_scared_back",
                    anchor: {
                        x: .1,
                        y: .1
                    },
                    position: {
                        x: 43,
                        y: 9
                    },
                    alpha: 0
                }, {
                    name: "arm_l_joy",
                    image: "kat/arm_l_joy",
                    anchor: {
                        x: .1,
                        y: .1
                    },
                    position: {
                        x: 40,
                        y: 10
                    },
                    alpha: 0
                }, {
                    name: "body",
                    image: "kat/body"
                }, {
                    name: "head",
                    image: "kat/normal_head",
                    anchor: {
                        x: .4,
                        y: .9
                    },
                    position: {
                        x: 1,
                        y: -90
                    },
                    sprites: [{
                        name: "pupil_l",
                        image: "kat/normal_head_pupil_l",
                        position: {
                            x: 0,
                            y: 2
                        }
                    }, {
                        name: "pupil_r",
                        image: "kat/normal_head_pupil_r",
                        position: {
                            x: 0,
                            y: 2
                        }
                    }, {
                        name: "eyelid_l",
                        image: "kat/normal_head_eyelid_l",
                        anchor: {
                            x: .7,
                            y: .7
                        }
                    }, {
                        name: "brow_l",
                        image: "kat/normal_head_brow_l",
                        anchor: {
                            x: .7,
                            y: .5
                        }
                    }, {
                        name: "hair_l",
                        image: "kat/normal_head_hair_l",
                        anchor: {
                            x: .55,
                            y: .1
                        }
                    }, {
                        name: "nose",
                        image: "kat/normal_head_nose"
                    }, {
                        name: "eyelid_r",
                        image: "kat/normal_head_eyelid_r",
                        anchor: {
                            x: .45,
                            y: .7
                        }
                    }, {
                        name: "brow_r",
                        image: "kat/normal_head_brow_r",
                        anchor: {
                            x: .55,
                            y: .5
                        }
                    }, {
                        name: "hair_r",
                        image: "kat/normal_head_hair_r",
                        anchor: {
                            x: .4,
                            y: .3
                        }
                    }, {
                        name: "lips_closed",
                        image: "kat/normal_head_lips_closed"
                    }, {
                        name: "lips_opened",
                        image: "kat/normal_head_lips_open",
                        anchor: {
                            x: .5,
                            y: .8
                        },
                        alpha: 0
                    }, {
                        name: "lips_joy",
                        image: "kat/normal_head_lips_joy",
                        pivot: {
                            x: 2,
                            y: 0
                        },
                        anchor: {
                            x: .5,
                            y: .8
                        },
                        alpha: 0
                    }]
                }, {
                    name: "arm_r",
                    pivot: {
                        x: 18,
                        y: 7
                    },
                    position: {
                        x: 28,
                        y: 22
                    },
                    sprites: [{
                        name: "bag",
                        image: "kat/bag",
                        anchor: {
                            x: .7,
                            y: .1
                        },
                        position: {
                            x: -20,
                            y: 75
                        }
                    }, {
                        name: "arm",
                        image: "kat/arm_r"
                    }]
                }, {
                    name: "arm_l_bag",
                    image: "kat/arm_l",
                    anchor: {
                        x: .1,
                        y: .1
                    },
                    position: {
                        x: 55,
                        y: 14
                    },
                    alpha: 0
                }, {
                    name: "arm_l_scared",
                    image: "kat/arm_l_scared",
                    anchor: {
                        x: .9,
                        y: .9
                    },
                    position: {
                        x: 30,
                        y: 10
                    },
                    alpha: 0
                }]
            }, {
                name: "falling",
                parentStages: ["falling"],
                sprites: [{
                    name: "tail",
                    image: "kat/hair_tail",
                    anchor: {
                        x: .7,
                        y: .4
                    },
                    position: {
                        x: -5,
                        y: -50
                    }
                }, {
                    name: "leg_l",
                    image: "kat/leg_l",
                    anchor: {
                        x: .5,
                        y: .3
                    },
                    position: {
                        x: 32,
                        y: 105
                    },
                    rotation: -.3
                }, {
                    name: "leg_r",
                    image: "kat/leg_r",
                    anchor: {
                        x: .5,
                        y: .3
                    },
                    position: {
                        x: 20,
                        y: 107
                    },
                    rotation: -.3
                }, {
                    name: "arm_l_joy",
                    image: "kat/arm_l_joy",
                    anchor: {
                        x: .1,
                        y: .1
                    },
                    position: {
                        x: 40,
                        y: 10
                    },
                    animations: {
                        dropRotate: {
                            to: {
                                rotation: -1.5
                            },
                            time: 300
                        }
                    },
                    scenarios: {
                        drop: [Rewards.instant(Rewards.startAnimation("dropRotate"))]
                    },
                    on: [{
                        t: Triggers.onEvent(KatrinEvents.falling),
                        r: Rewards.startScenario("drop")
                    }]
                }, {
                    name: "body",
                    image: "kat/body"
                }, {
                    name: "head",
                    image: "kat/normal_head",
                    anchor: {
                        x: .4,
                        y: .9
                    },
                    position: {
                        x: 1,
                        y: -90
                    },
                    sprites: [{
                        name: "pupil_l",
                        image: "kat/normal_head_pupil_l",
                        position: {
                            x: 0,
                            y: 2
                        }
                    }, {
                        name: "pupil_r",
                        image: "kat/normal_head_pupil_r",
                        position: {
                            x: 0,
                            y: 2
                        }
                    }, {
                        name: "eyelid_l",
                        image: "kat/normal_head_eyelid_l",
                        anchor: {
                            x: .7,
                            y: .7
                        }
                    }, {
                        name: "brow_l",
                        image: "kat/normal_head_brow_l",
                        anchor: {
                            x: .7,
                            y: .5
                        }
                    }, {
                        name: "hair_l",
                        image: "kat/normal_head_hair_l",
                        anchor: {
                            x: .55,
                            y: .1
                        }
                    }, {
                        name: "nose",
                        image: "kat/normal_head_nose"
                    }, {
                        name: "eyelid_r",
                        image: "kat/normal_head_eyelid_r",
                        anchor: {
                            x: .45,
                            y: .7
                        }
                    }, {
                        name: "brow_r",
                        image: "kat/normal_head_brow_r",
                        anchor: {
                            x: .55,
                            y: .5
                        }
                    }, {
                        name: "hair_r",
                        image: "kat/normal_head_hair_r",
                        anchor: {
                            x: .4,
                            y: .3
                        }
                    }, {
                        name: "lips_closed",
                        image: "kat/normal_head_lips_fall"
                    }]
                }, {
                    name: "arm_r",
                    pivot: {
                        x: 18,
                        y: 7
                    },
                    position: {
                        x: 28,
                        y: 22
                    },
                    animations: {
                        dropRotate: {
                            to: {
                                rotation: -1.5
                            },
                            time: 300
                        }
                    },
                    scenarios: {
                        drop: [Rewards.instant(Rewards.startAnimation("dropRotate"))]
                    },
                    on: [{
                        t: Triggers.onEvent(KatrinEvents.falling),
                        r: Rewards.startScenario("drop")
                    }],
                    sprites: [{
                        name: "bag",
                        image: "kat/bag",
                        anchor: {
                            x: .7,
                            y: .1
                        },
                        position: {
                            x: -20,
                            y: 75
                        }
                    }, {
                        name: "arm",
                        image: "kat/arm_r"
                    }]
                }]
            }]
        })
    }
}

export default Katrin;