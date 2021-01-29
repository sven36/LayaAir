import StagedSprite from '../Playable/Core/StagedSprite.js';
import Rewards from '../Playable/Behaviors/UniversalBehavior/Rewards.js';
import Triggers from '../Playable/Behaviors/UniversalBehavior/Triggers.js';
import Conditions from '../Playable/Behaviors/UniversalBehavior/Conditions.js';
import Animations from '../Animations.js';
import Events from '../Events.js';

export const BulgarEvents = {
    hit: "hit",
    fall: "fall"
}

class Bulgar extends StagedSprite {
    smack() {
        this.app.emit(BulgarEvents.hit)
    }
    fall() {
        this.app.emit(BulgarEvents.fall)
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
        }(Bulgar.prototype.__proto__ || Object.getPrototypeOf(Bulgar.prototype), "getDefaultConfig", this).call(this, config), {
            stages: ["idle", "hit", "sad", "attack"],
            startStage: "idle",
            onDefault: [{
                t: Triggers.onEvent(BulgarEvents.hit),
                r: [Rewards.playSound("damage", {
                    volume: .5
                }), Rewards.resetScenario("hit"), Rewards.startScenario("hit")]
            }, {
                t: Triggers.onEvent(BulgarEvents.fall),
                r: [Rewards.startScenario("fall")]
            }, {
                t: Triggers.onEvent(Events.Events.stageBasementEnd),
                c: Conditions.flags({
                    basementBulgar: !0
                }),
                r: Rewards.startScenario("gotcha")
            }],
            scenarios: {
                hit: [Rewards.setStage("idle"), Rewards.setStage("hit"), Rewards.wait(500), Rewards.setStage("idle")],
                fall: [Rewards.setStage("hit"), Rewards.startAnimation("fall"), Rewards.wait(500), Rewards.setStage("sad")],
                gotcha: [Rewards.wait(400), Rewards.playSound("bandit"), Rewards.setStage("attack")]
            },
            sprites: [{
                name: "idle",
                parentStages: ["idle"],
                pivot: {
                    x: 137,
                    y: 115
                },
                position: {
                    x: 137,
                    y: 115
                },
                scenarios: {
                    idleBody: {
                        rewards: [Rewards.startAnimation("idleBody")],
                        loop: !0
                    },
                    idleFace: {
                        rewards: [Rewards.startAnimation("idleFace"), Rewards.startAnimation("idleFace"), Rewards.wait(1e3), Rewards.startAnimation("idleFace"), Rewards.startAnimation("idleFace"), Rewards.startAnimation("idleFace"), Rewards.wait(2e3)],
                        loop: !0
                    }
                },
                on: [{
                    t: Triggers.onStart(),
                    r: [Rewards.startScenario("idleBody"), Rewards.startScenario("idleFace")]
                }],
                animations: {
                    idleBody: {
                        to: {
                            scale: {
                                x: 1.01,
                                y: .99
                            },
                            pivot: {
                                x: 137,
                                y: 114
                            },
                            hand_r: {
                                rotation: -.2
                            },
                            hand_l: {
                                rotation: .2
                            }
                        },
                        time: 1500,
                        pingPong: !0,
                        easing: "inOutQuad"
                    },
                    idleFace: {
                        to: {
                            head: {
                                brows: {
                                    pivot: {
                                        x: 0,
                                        y: 4
                                    }
                                },
                                mouth: {
                                    scale: {
                                        x: 1,
                                        y: 1.1
                                    }
                                },
                                nose: {
                                    rotation: .1
                                }
                            }
                        },
                        time: 400,
                        pingPong: !0,
                        easing: "inOutQuad"
                    }
                },
                sprites: [{
                    name: "hand_r",
                    image: "bulgar/hand_r_idle",
                    anchor: {
                        x: .45,
                        y: .2
                    }
                }, {
                    name: "body",
                    image: "bulgar/body"
                }, {
                    name: "hand_l",
                    image: "bulgar/hand_l_idle",
                    anchor: {
                        x: .85,
                        y: .1
                    }
                }, {
                    name: "head",
                    pivot: {
                        x: 75,
                        y: 65
                    },
                    position: {
                        x: 141,
                        y: 27
                    },
                    sprites: [{
                        name: "head",
                        image: "bulgar/head"
                    }, {
                        name: "eyes",
                        image: "bulgar/eyes"
                    }, {
                        name: "brows",
                        image: "bulgar/brows"
                    }, {
                        name: "mouth",
                        image: "bulgar/mouth_grin",
                        anchor: {
                            x: .55,
                            y: .5
                        }
                    }, {
                        name: "nose",
                        image: "bulgar/nose",
                        anchor: {
                            x: .4,
                            y: .4
                        }
                    }]
                }]
            }, {
                name: "hit",
                parentStages: ["hit"],
                pivot: {
                    x: 137,
                    y: 115
                },
                position: {
                    x: 137,
                    y: 115
                },
                on: [{
                    t: Triggers.onEvent(BulgarEvents.fall),
                    r: Rewards.startScenario("fall")
                }],
                scenarios: {
                    fall: [Rewards.startAnimation("fall")]
                },
                animations: {
                    show: {
                        from: {
                            scale: {
                                x: 1,
                                y: 1
                            },
                            pivot: {
                                x: 137,
                                y: 115
                            },
                            rotation: 0
                        },
                        to: {
                            scale: {
                                x: 1,
                                y: .97
                            },
                            pivot: {
                                x: 137,
                                y: 110
                            },
                            rotation: .01
                        },
                        time: 300,
                        easing: "outBack",
                        pingPong: !0
                    },
                    fall: {
                        to: {
                            head: {
                                rotation: .5
                            }
                        },
                        time: 400,
                        easing: "inOutQuad"
                    }
                },
                sprites: [{
                    name: "hand_r",
                    image: "bulgar/hand_r_idle",
                    anchor: {
                        x: .45,
                        y: .2
                    }
                }, {
                    name: "body",
                    image: "bulgar/body"
                }, {
                    name: "hand_l",
                    image: "bulgar/hand_l_attack",
                    anchor: {
                        x: .85,
                        y: .1
                    }
                }, {
                    name: "head",
                    pivot: {
                        x: 75,
                        y: 65
                    },
                    position: {
                        x: 141,
                        y: 27
                    },
                    sprites: [{
                        name: "head",
                        image: "bulgar/head",
                        tint: 16755370
                    }, {
                        name: "eyes",
                        image: "bulgar/eyes"
                    }, {
                        name: "brows",
                        image: "bulgar/brows",
                        pivot: {
                            x: 0,
                            y: -3
                        }
                    }, {
                        name: "mouth",
                        image: "bulgar/mouth_evil",
                        anchor: {
                            x: .55,
                            y: .5
                        }
                    }, {
                        name: "nose",
                        image: "bulgar/nose",
                        anchor: {
                            x: .4,
                            y: .4
                        }
                    }]
                }]
            }, {
                name: "sad",
                parentStages: ["sad"],
                pivot: {
                    x: 137,
                    y: 115
                },
                position: {
                    x: 137,
                    y: 115
                },
                on: [{
                    t: Triggers.onEvent(BulgarEvents.fall),
                    r: Rewards.startScenario("fall")
                }, {
                    t: Triggers.onEvent(Events.Events.stageHome),
                    r: Rewards.startScenario("fail")
                }, {
                    t: Triggers.onEvent(Events.Events.stageBasement),
                    r: Rewards.startScenario("gotcha")
                }],
                scenarios: {
                    fall: [Rewards.playSound("man_surprise"), Rewards.startAnimation("fall"), Rewards.startAnimation("idleBody")],
                    fail: [Rewards.startAnimation("fail")],
                    gotcha: [Rewards.startAnimation("fail")]
                },
                animations: {
                    show: {
                        to: {
                            head: {
                                nose: {
                                    rotation: -.1
                                }
                            }
                        },
                        time: 400,
                        easing: "outBack"
                    },
                    fall: {
                        to: {
                            head: {
                                rotation: .5
                            }
                        },
                        time: 400,
                        easing: "inOutQuad"
                    },
                    fail: {
                        to: {
                            head: {
                                rotation: 0
                            }
                        },
                        time: 400,
                        easing: "inOutQuad"
                    },
                    idleBody: {
                        to: {
                            scale: {
                                x: 1.01,
                                y: .99
                            },
                            pivot: {
                                x: 137,
                                y: 114
                            },
                            hand_r: {
                                rotation: -.2
                            },
                            hand_l: {
                                rotation: .2
                            }
                        },
                        time: 1500,
                        pingPong: !0,
                        loop: !0,
                        easing: "inOutQuad"
                    }
                },
                sprites: [{
                    name: "hand_r",
                    image: "bulgar/hand_r_idle",
                    anchor: {
                        x: .45,
                        y: .2
                    }
                }, {
                    name: "body",
                    image: "bulgar/body"
                }, {
                    name: "hand_l",
                    image: "bulgar/hand_l_idle",
                    anchor: {
                        x: .85,
                        y: .1
                    }
                }, {
                    name: "head",
                    pivot: {
                        x: 75,
                        y: 65
                    },
                    position: {
                        x: 141,
                        y: 27
                    },
                    sprites: [{
                        name: "head",
                        image: "bulgar/head"
                    }, {
                        name: "eyes",
                        image: "bulgar/eyes"
                    }, {
                        name: "brows",
                        image: "bulgar/brows",
                        pivot: {
                            x: 0,
                            y: -3
                        }
                    }, {
                        name: "mouth",
                        image: "bulgar/mouth_sad",
                        anchor: {
                            x: .55,
                            y: .5
                        }
                    }, {
                        name: "nose",
                        image: "bulgar/nose",
                        anchor: {
                            x: .4,
                            y: .4
                        }
                    }]
                }]
            }, {
                name: "attack",
                parentStages: ["attack"],
                pivot: {
                    x: 137,
                    y: 115
                },
                position: {
                    x: 137,
                    y: 115
                },
                position_attack: {
                    x: -37,
                    y: 115
                },
                scenarios: {
                    attackHands: {
                        rewards: [Rewards.startAnimation("attack_fist"), Rewards.wait(100), Rewards.startAnimation("attack_no_fist"), Rewards.wait(200), Rewards.startAnimation("attack_fist"), Rewards.wait(100), Rewards.startAnimation("attack_no_fist"), Rewards.wait(800)],
                        loop: !0
                    },
                    idleBody: {
                        rewards: [Rewards.startAnimation("idleBody")],
                        loop: !0
                    },
                    idleFace: {
                        rewards: [Rewards.startAnimation("idleFace"), Rewards.startAnimation("idleFace"), Rewards.wait(1e3), Rewards.startAnimation("idleFace"), Rewards.startAnimation("idleFace"), Rewards.startAnimation("idleFace"), Rewards.wait(2e3)],
                        loop: !0
                    }
                },
                on: [{
                    t: Triggers.onAnimationStart("show"),
                    r: [Rewards.startScenario("idleBody"), Rewards.startScenario("idleFace"), Rewards.startScenario("attackHands")]
                }],
                animations: {
                    show: {
                        to: {
                            head: {
                                rotation: -.2
                            }
                        },
                        time: 200
                    },
                    attack_fist: {
                        to: {
                            hand_r: {
                                alpha: 0
                            },
                            hand_l: {
                                alpha: 0
                            }
                        },
                        time: 50
                    },
                    attack_no_fist: {
                        to: {
                            hand_r: {
                                alpha: 1
                            },
                            hand_l: {
                                alpha: 1
                            }
                        },
                        time: 50
                    },
                    idleBody: {
                        to: {
                            scale: {
                                x: 1.01,
                                y: .99
                            },
                            pivot: {
                                x: 137,
                                y: 114
                            },
                            hand_r: {
                                rotation: .1
                            },
                            hand_l: {
                                rotation: -.1
                            },
                            hand_r_fist: {
                                rotation: .1
                            },
                            hand_l_fist: {
                                rotation: -.1
                            }
                        },
                        time: 1500,
                        pingPong: !0,
                        easing: "inOutQuad"
                    },
                    idleFace: {
                        to: {
                            head: {
                                brows: {
                                    pivot: {
                                        x: 0,
                                        y: 4
                                    }
                                },
                                mouth: {
                                    scale: {
                                        x: 1,
                                        y: 1.1
                                    }
                                },
                                nose: {
                                    rotation: .1
                                }
                            }
                        },
                        time: 400,
                        pingPong: !0,
                        easing: "inOutQuad"
                    }
                },
                sprites: [{
                    name: "hand_r_fist",
                    image: "bulgar/hand_r_attack_fist",
                    anchor: {
                        x: .45,
                        y: .2
                    }
                }, {
                    name: "hand_r",
                    image: "bulgar/hand_r_attack",
                    anchor: {
                        x: .45,
                        y: .2
                    }
                }, {
                    name: "body",
                    image: "bulgar/body"
                }, {
                    name: "hand_l_fist",
                    image: "bulgar/hand_l_attack_fist",
                    anchor: {
                        x: .85,
                        y: .1
                    }
                }, {
                    name: "hand_l",
                    image: "bulgar/hand_l_attack",
                    anchor: {
                        x: .85,
                        y: .1
                    }
                }, {
                    name: "head",
                    pivot: {
                        x: 75,
                        y: 65
                    },
                    position: {
                        x: 141,
                        y: 27
                    },
                    sprites: [{
                        name: "head",
                        image: "bulgar/head"
                    }, {
                        name: "eyes",
                        image: "bulgar/eyes"
                    }, {
                        name: "brows",
                        image: "bulgar/brows"
                    }, {
                        name: "mouth",
                        image: "bulgar/mouth_grin",
                        anchor: {
                            x: .55,
                            y: .5
                        }
                    }, {
                        name: "nose",
                        image: "bulgar/nose",
                        anchor: {
                            x: .4,
                            y: .4
                        }
                    }]
                }]
            }]
        })
    }
}
export default Bulgar;