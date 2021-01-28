import * as PIXI from 'pixi.js';
import Animations from './Animations';
import Events from './Events';
import MaskBehavior from './Playable/Behaviors/MaskBehavior';
import Conditions from './Playable/Behaviors/UniversalBehavior/Conditions';
import Rewards from './Playable/Behaviors/UniversalBehavior/Rewards';
import Triggers from './Playable/Behaviors/UniversalBehavior/Triggers';
import ButtonMute from './Playable/Sprites/ButtonMute';
import Disclaimer from './Playable/Sprites/Disclaimer';
import Fade from './Playable/Sprites/Fade';
import Bulgar from './Sprites/Bulgar';
import Drops from './Sprites/Drops';
import Katrin from './Sprites/Katrin';
import MainContainer from './Sprites/MainContainer';
import Packshot from './Sprites/Packshot/Packshot';
import Rain from './Sprites/Rain';
import Rod from './Sprites/Rod';
import RodContainer from './Sprites/RodContainer';
import Spider from './Sprites/Spider';
import TilingSprite from './Sprites/TilingSprite';
import UIContainer from './Sprites/UIContainer';

var TILES_floor_line_y = 855
    , TILES_earth_w = 5500
    , TILES_earth_h = 526
    , TILES_asphalt_1_w = 1390
    , TILES_asphalt_2_w = 50
    , TILES_asphalt_h = 65
    , TILES_well_water_w = 202
    , TILES_well_water_h = 550
    , TILES_roof_fill_w = 3900
    , TILES_roof_fill_h = 560
    , TILES_roof_floor_w = 3500
    , TILES_roof_floor_h = 68
    , TILES_floor_1_w = 1235
    , TILES_floor_2_w = 600
    , TILES_floor_3_w = 1e3
    , TILES_floor_h = 21
    , RODS_rod1 = "rod1"
    , RODS_rod2 = "rod2"
    , RODS_rod3 = "rod3"
    , RODS_rod4 = "rod4"
    , RODS_rod5 = "rod5"
    , RODS_rod6 = "rod6"
    , RODS_rod7 = "rod7";
const config = {
    devMode: !0,
    sprites: [{
        name: "controller",
        scenarios: {
            beginning: [Rewards.wait(1e3), Rewards.instant(Rewards.startScenario("rainSound")), Rewards.startScenario("car")],
            car: [Rewards.emitEvent(_Events.Events.stageCar)],
            carMove: [Rewards.wait(500), Rewards.emitEvent(_Events.Events.stageCarMove)],
            rain: [Rewards.emitEvent(_Events.Events.stageRain), Rewards.playSound("thunder")],
            elevator: [Rewards.wait(500), Rewards.startScenario("rainSoundStop"), Rewards.emitEvent(_Events.Events.stageElevator)],
            elevatorFall: [Rewards.emitEvent(_Events.Events.elevatorFall)],
            bulgar: [Rewards.wait(500), Rewards.emitEvent(_Events.Events.stageBulgar)],
            home: [Rewards.wait(500), Rewards.emitEvent(_Events.Events.stageHome)],
            basement: [Rewards.emitEvent(_Events.Events.stageBasement)],
            finalFail: [Rewards.wait(2e3), Rewards.emitEvent(_Events.Events.gameFail)],
            rainSoundStop: [Rewards.stopScenario("rainSound"), Rewards.stopSound("rain")],
            rainSound: {
                rewards: [Rewards.stopSound("rain"), Rewards.playSound("rain", {
                    volume: .5,
                    start: 0,
                    end: 1
                }), Rewards.log("rain"), Rewards.wait(1e3), Rewards.playSound("rain", {
                    volume: .5,
                    start: 1,
                    end: 2
                }), Rewards.wait(1e3)],
                loop: !0
            }
        },
        on: [{
            t: Triggers.onStart(),
            r: Rewards.startScenario("beginning")
        }, {
            t: Triggers.onEvent(_Events.Events.stageCarEnd),
            r: Rewards.startScenario("carMove")
        }, {
            t: Triggers.onEvent(_Events.Events.stageCarMoveEnd),
            r: Rewards.startScenario("rain")
        }, {
            t: Triggers.onEvent(_Rod.RodEvents.rodTouch, {
                name: RODS_rod2
            }),
            r: Rewards.startScenario("elevator")
        }, {
            t: Triggers.onEvent(_Rod.RodEvents.rodTouch, {
                name: RODS_rod3
            }),
            r: Rewards.startScenario("elevatorFall")
        }, {
            t: Triggers.onEvent(_Rod.RodEvents.rodTouch, {
                name: RODS_rod4
            }),
            r: Rewards.startScenario("bulgar")
        }, {
            t: Triggers.onEvent(_Rod.RodEvents.rodTouch, {
                name: RODS_rod7
            }),
            c: Conditions.flags({
                rod5Opened: !1
            }),
            r: Rewards.startScenario("home")
        }, {
            t: Triggers.onEvent(_Rod.RodEvents.rodTouch, {
                name: RODS_rod5
            }),
            c: Conditions.flags({
                rod7Opened: !1
            }),
            r: Rewards.startScenario("basement")
        }, {
            t: Triggers.onEvent(_Events.Events.bulgarFallEnd),
            r: [Rewards.setFlags({
                basementBulgar: !0
            }), Rewards.if(Conditions.flags({
                basementKatrin: !0
            }), Rewards.startScenario("finalFail"), [])]
        }, {
            t: Triggers.onEvent(_Events.Events.katrinFallEnd),
            r: [Rewards.emitEvent(_Events.Events.stageBasementEnd), Rewards.startScenario("finalFail")]
        }, {
            t: Triggers.onEvent(_Events.Events.katrinHomeEnd),
            r: Rewards.emitEvent(_Events.Events.gameWin)
        }, {
            t: Triggers.onceSkip(),
            r: Rewards.startScenario("rainSoundStop")
        }]
    }, {
        name: "mainContainer",
        class: MainContainer,
        sprites: [{
            name: "location",
            pivot: {
                x: 695,
                y: 695
            },
            position_car: {
                x: -100,
                y: 0
            },
            position_rain: {
                x: -800,
                y: 0
            },
            position_elevator: {
                x: -2250,
                y: 0
            },
            position_bulgar: {
                x: -3260,
                y: 0
            },
            position_basement: {
                x: -3260,
                y: -310
            },
            position_home: {
                x: -3500,
                y: 0
            },
            animations: {
                moveCar: {
                    creator: Animations.moveToPosition,
                    position: "car",
                    time: 500,
                    easing: "outQuad"
                },
                moveRain: {
                    creator: Animations.moveToPosition,
                    position: "rain",
                    time: 1e3,
                    easing: "inOutQuad"
                },
                moveElevator: {
                    creator: Animations.moveToPosition,
                    position: "elevator",
                    time: 2500,
                    easing: "inOutQuad"
                },
                moveBulgar: {
                    creator: Animations.moveToPosition,
                    position: "bulgar",
                    time: 2500,
                    easing: "inOutQuad"
                },
                moveHome: {
                    creator: Animations.moveToPosition,
                    position: "home",
                    time: 1e3,
                    easing: "inQuad"
                },
                moveBasement: {
                    creator: Animations.moveToPosition,
                    position: "basement",
                    time: 500,
                    easing: "inQuad"
                }
            },
            scenarios: {
                car: [Rewards.startAnimation("moveCar"), Rewards.emitEvent(_Events.Events.stageCarEnd)],
                rain: [Rewards.startAnimation("moveRain"), Rewards.emitEvent(_Events.Events.stageRainEnd)],
                elevator: [Rewards.startAnimation("moveElevator"), Rewards.emitEvent(_Events.Events.stageElevatorEnd)],
                bulgar: [Rewards.startAnimation("moveBulgar"), Rewards.playSound("bandit"), Rewards.emitEvent(_Events.Events.stageBulgarEnd)],
                home: [Rewards.startAnimation("moveHome"), Rewards.emitEvent(_Events.Events.stageHomeEnd)],
                basement: [Rewards.startAnimation("moveBasement"), Rewards.emitEvent(_Events.Events.katrinFallEnd)]
            },
            on: [{
                t: Triggers.onEvent(_Events.Events.stageCar),
                r: Rewards.startScenario("car")
            }, {
                t: Triggers.onEvent(_Events.Events.stageRain),
                r: Rewards.startScenario("rain")
            }, {
                t: Triggers.onEvent(_Events.Events.stageElevator),
                r: Rewards.startScenario("elevator")
            }, {
                t: Triggers.onEvent(_Events.Events.stageBulgar),
                r: Rewards.startScenario("bulgar")
            }, {
                t: Triggers.onEvent(_Events.Events.stageHome),
                r: Rewards.startScenario("home")
            }, {
                t: Triggers.onEvent(_Events.Events.stageBasement),
                r: Rewards.startScenario("basement")
            }],
            sprites: [{
                name: "town",
                image: "back_town"
            }, {
                name: "rain",
                class: Rain,
                alpha: .8,
                position: {
                    x: 0,
                    y: 1300
                },
                width: 1800,
                on: [{
                    t: [Triggers.onEvent(_Events.Events.stageElevatorEnd), Triggers.onceSkip()],
                    r: Rewards.hide()
                }]
            }, {
                name: "earth",
                class: TilingSprite,
                image: "back_earth",
                width: TILES_earth_w,
                height: TILES_earth_h,
                position: {
                    x: 0,
                    y: TILES_floor_line_y + 6
                }
            }, {
                name: "well",
                image: "back_well",
                anchor: {
                    x: 0,
                    y: 0
                },
                scale: {
                    x: 1.26,
                    y: 1
                },
                position: {
                    x: 1390,
                    y: TILES_floor_line_y + 6
                },
                sprites: [{
                    name: "water",
                    class: TilingSprite,
                    image: "well_water",
                    width: TILES_well_water_w,
                    height: TILES_well_water_h,
                    position: {
                        x: 0,
                        y: 20
                    }
                }, {
                    name: "stairs",
                    image: "water/stairs",
                    position: {
                        x: 42,
                        y: 52
                    }
                }, {
                    name: "waves",
                    position: {
                        x: 0,
                        y: 15
                    },
                    maskData: {
                        vertexes: [0, -10, TILES_well_water_w, -10, TILES_well_water_w, 50, 0, 50],
                        edit: !1
                    },
                    behaviors: [MaskBehavior.maskBehavior],
                    sprites: [{
                        name: "wave_1",
                        image: "water/well_wave_1",
                        position: {
                            x: 0,
                            y: 0
                        },
                        animations: {
                            idle: {
                                creator: Animations.moveToDxDy,
                                dx: 15,
                                time: 1e3,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0
                            },
                            idleScale: {
                                from: {
                                    scale: {
                                        x: 1.3,
                                        y: 1
                                    }
                                },
                                to: {
                                    scale: {
                                        x: 1.6,
                                        y: 1
                                    }
                                },
                                time: 1500,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0
                            }
                        },
                        on: [{
                            t: Triggers.onStart(),
                            r: [Rewards.startAnimation("idle"), Rewards.startAnimation("idleScale")]
                        }, {
                            t: Triggers.onEvent(_Events.Events.stageElevatorEnd),
                            r: [Rewards.stopAnimation("idle"), Rewards.stopAnimation("idleScale")]
                        }]
                    }, {
                        name: "wave_2",
                        image: "water/well_wave_2",
                        position: {
                            x: 30,
                            y: 0
                        },
                        animations: {
                            idle: {
                                creator: Animations.moveToDxDy,
                                dx: -10,
                                time: 1200,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0
                            },
                            idleScale: {
                                from: {
                                    scale: {
                                        x: 1.3,
                                        y: 1
                                    }
                                },
                                to: {
                                    scale: {
                                        x: 1.6,
                                        y: 1
                                    }
                                },
                                time: 1800,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0
                            }
                        },
                        on: [{
                            t: Triggers.onStart(),
                            r: [Rewards.startAnimation("idle"), Rewards.startAnimation("idleScale")]
                        }, {
                            t: Triggers.onEvent(_Events.Events.stageElevatorEnd),
                            r: [Rewards.stopAnimation("idle"), Rewards.stopAnimation("idleScale")]
                        }]
                    }]
                }, {
                    name: "shadow",
                    image: "water/well_water_shadow_scale2",
                    anchor: {
                        x: 0,
                        y: 0
                    },
                    scale: {
                        x: 2,
                        y: 2
                    },
                    position: {
                        x: 0,
                        y: 80
                    }
                }]
            }, {
                name: "asphalt_1",
                class: TilingSprite,
                image: "back/asphalt",
                width: TILES_asphalt_1_w,
                height: TILES_asphalt_h,
                position: {
                    x: 0,
                    y: TILES_floor_line_y
                }
            }, {
                name: "asphalt_2",
                class: TilingSprite,
                image: "back/asphalt",
                width: TILES_asphalt_2_w,
                height: TILES_asphalt_h,
                position: {
                    x: 1645,
                    y: TILES_floor_line_y
                }
            }, {
                name: "drops",
                class: Drops,
                position: {
                    x: 0,
                    y: 855
                },
                count: 10,
                dxMin: 30,
                dxMax: 130,
                dy: 20,
                drop: {
                    prefix: "water/drops_",
                    images: 6,
                    time: 400
                },
                on: [{
                    t: Triggers.onEvent(_Events.Events.stageElevatorEnd),
                    r: Rewards.hide()
                }, {
                    t: Triggers.onStart(),
                    r: Rewards.show()
                }]
            }, {
                name: "wall_3",
                image: "walls_3",
                position: {
                    x: 4330,
                    y: 529
                },
                scale: {
                    x: 1,
                    y: 1.05
                }
            }, {
                name: "wall_2",
                image: "walls_2",
                position: {
                    x: 3090,
                    y: 537
                }
            }, {
                name: "wall_1",
                image: "walls_1",
                position: {
                    x: 1700,
                    y: 537
                },
                sprites: [{
                    name: "button",
                    image: "back/elevator_button",
                    position: {
                        x: 1135,
                        y: 180
                    }
                }]
            }, {
                name: "roof_rod",
                image: "back/roof_rod",
                rotation: Math.PI / 2,
                position: {
                    x: 1567,
                    y: 682
                },
                scale: {
                    x: 1.2,
                    y: 1
                }
            }, {
                name: "roof",
                position: {
                    x: 1406,
                    y: 0
                },
                sprites: [{
                    name: "roof_fill",
                    class: TilingSprite,
                    image: "back/roof_fill",
                    width: TILES_roof_fill_w,
                    height: TILES_roof_fill_h,
                    position: {
                        x: 0,
                        y: 0
                    },
                    maskData: {
                        vertexes: [385, 0, 300, 190, 65, 310, 25, 415, 25, TILES_roof_fill_h, TILES_roof_fill_w, TILES_roof_fill_h, TILES_roof_fill_w, 0],
                        edit: !1
                    },
                    behaviors: [MaskBehavior.maskBehavior]
                }, {
                    name: "roof_rod",
                    image: "back/roof_rod",
                    position: {
                        x: 25,
                        y: TILES_roof_fill_h - 50
                    }
                }, {
                    name: "roof_floor",
                    class: TilingSprite,
                    image: "back/roof_floor",
                    width: TILES_roof_floor_w,
                    height: TILES_roof_floor_h,
                    position: {
                        x: 283,
                        y: TILES_roof_fill_h - TILES_roof_floor_h - 4
                    }
                }, {
                    name: "roof_line",
                    image: "back/roof_line"
                }]
            }, {
                name: "elevator",
                image: "back_elevator",
                position: {
                    x: 2867,
                    y: 0
                },
                sprites: [{
                    name: "web",
                    image: "back/web",
                    position: {
                        x: 20,
                        y: 576
                    },
                    animations: {
                        move: {
                            from: {
                                scale: {
                                    x: 1,
                                    y: 1
                                }
                            },
                            to: {
                                scale: {
                                    x: .98,
                                    y: .98
                                }
                            },
                            time: 900,
                            delay: 200,
                            pingPong: !0,
                            easing: "inOutBack"
                        }
                    },
                    on: [{
                        t: Triggers.onEvent(_Spider.SpiderEvents.move),
                        r: Rewards.startAnimation("move")
                    }]
                }, {
                    name: "spider",
                    class: Spider,
                    position: {
                        x: 20,
                        y: 680
                    },
                    position_up: {
                        x: 35,
                        y: 600
                    },
                    position_fall: {
                        x: 35,
                        y: 1820
                    },
                    on: [{
                        t: Triggers.onEvent(_Events.Events.stageElevatorEnd),
                        r: Rewards.call("move")
                    }, {
                        t: Triggers.onEvent(_Events.Events.elevatorFall),
                        r: Rewards.call("fall")
                    }]
                }, {
                    name: "cabin",
                    image: "back/elevator",
                    position: {
                        x: 25,
                        y: 162
                    },
                    position_fall: {
                        x: 25,
                        y: TILES_floor_line_y + 2
                    },
                    animations: {
                        fall: {
                            creator: Animations.moveToPosition,
                            position: "fall",
                            time: 800,
                            easing: "outBounce"
                        }
                    },
                    on: [{
                        t: Triggers.onEvent(_Events.Events.elevatorFall),
                        r: Rewards.startAnimation("fall")
                    }, {
                        t: Triggers.onAnimationEnd("fall"),
                        r: Rewards.emitEvent(_Events.Events.elevatorFallEnd)
                    }]
                }, {
                    name: "shadow",
                    image: "back/elevator_shadow_scale2",
                    scale: {
                        x: 2,
                        y: 2
                    },
                    anchor: {
                        x: 0,
                        y: 0
                    }
                }]
            }, {
                name: "basement",
                image: "back/basement",
                position: {
                    x: 3656,
                    y: TILES_floor_line_y - 7
                },
                sprites: [{
                    name: "water",
                    image: "water/mud",
                    position: {
                        x: 28,
                        y: 223
                    },
                    anchor: {
                        x: 0,
                        y: 0
                    },
                    maskData: {
                        vertexes: [0, 110, 0, 0, 530, 0, 530, 110]
                    },
                    behaviors: [MaskBehavior.maskBehavior]
                }, {
                    name: "bulgar",
                    class: Bulgar,
                    position: {
                        x: 294,
                        y: -220
                    },
                    position_fall: {
                        x: 294,
                        y: 90
                    },
                    animations: {
                        fall: {
                            creator: Animations.moveToPosition,
                            position: "fall",
                            time: 400,
                            easing: "inQuad"
                        }
                    },
                    on: [{
                        t: Triggers.onEvent(_Rod.RodEvents.rodBlocked, {
                            name: RODS_rod7
                        }),
                        r: Rewards.call("smack")
                    }, {
                        t: Triggers.onEvent(_Rod.RodEvents.rodTouch, {
                            name: RODS_rod6
                        }),
                        r: Rewards.call("fall")
                    }, {
                        t: Triggers.onAnimationStart("fall"),
                        r: Rewards.emitEvent(_Events.Events.bulgarFall)
                    }, {
                        t: Triggers.onAnimationEnd("fall"),
                        r: Rewards.emitEvent(_Events.Events.bulgarFallEnd)
                    }]
                }, {
                    name: "fell",
                    position: {
                        x: 64,
                        y: 132
                    },
                    visible: !1,
                    on: [{
                        t: Triggers.onEvent(_Events.Events.stageBasementEnd),
                        r: Rewards.show()
                    }],
                    sprites: [{
                        name: "sitting",
                        image: "kat/sitting",
                        anchor: {
                            x: .7,
                            y: .4
                        }
                    }, {
                        name: "bag",
                        image: "kat/bag_sit",
                        position: {
                            x: 168,
                            y: 119
                        },
                        animations: {
                            idle: {
                                creator: Animations.moveToDxDy,
                                dy: -10,
                                time: 1500,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0
                            },
                            idleRotate: {
                                from: {
                                    rotation: -.2
                                },
                                to: {
                                    rotation: .2
                                },
                                time: 1200,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0
                            }
                        },
                        on: [{
                            t: Triggers.onEvent(_Events.Events.stageBasementEnd),
                            r: [Rewards.startAnimation("idle"), Rewards.startAnimation("idleRotate")]
                        }]
                    }, {
                        name: "flow",
                        image: "water/head_flow_1",
                        position: {
                            x: 57,
                            y: 24
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
                            t: Triggers.onEvent(_Events.Events.stageBasementEnd),
                            r: Rewards.show()
                        }, {
                            t: Triggers.onAnimationEnd("show"),
                            r: Rewards.hide()
                        }]
                    }, {
                        name: "flow_chin",
                        image: "water/chin_flow_1",
                        position: {
                            x: 89,
                            y: 103
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
                            t: Triggers.onEvent(_Events.Events.stageBasementEnd),
                            r: Rewards.show()
                        }, {
                            t: Triggers.onAnimationEnd("show"),
                            r: Rewards.hide()
                        }]
                    }]
                }, {
                    name: "water",
                    position: {
                        x: 28,
                        y: 223
                    },
                    maskData: {
                        vertexes: [0, 110, 0, -50, 530, -50, 530, 110],
                        edit: !1
                    },
                    behaviors: [MaskBehavior.maskBehavior],
                    sprites: [{
                        name: "splash_1",
                        image: "water/basement_splash_1",
                        position: {
                            x: -6,
                            y: -44
                        },
                        visible: !1,
                        animations: {
                            show: {
                                creator: Animations.sequence,
                                images: {
                                    prefix: "water/basement_splash_",
                                    count: 8
                                },
                                time: 700,
                                delay: 500
                            }
                        },
                        on: [{
                            t: Triggers.onEvent(_Events.Events.stageBasement),
                            r: Rewards.show()
                        }, {
                            t: Triggers.onAnimationEnd("show"),
                            r: Rewards.hide()
                        }]
                    }, {
                        name: "splash_2",
                        image: "water/basement_splash_1",
                        position: {
                            x: 310,
                            y: -44
                        },
                        visible: !1,
                        animations: {
                            show: {
                                creator: Animations.sequence,
                                images: {
                                    prefix: "water/basement_splash_",
                                    count: 8
                                },
                                time: 700,
                                delay: 200
                            }
                        },
                        on: [{
                            t: Triggers.onEvent(_Events.Events.bulgarFall),
                            r: Rewards.show()
                        }, {
                            t: Triggers.onAnimationEnd("show"),
                            r: Rewards.hide()
                        }]
                    }, {
                        name: "mud_top",
                        image: "water/mud_top",
                        position: {
                            x: 0,
                            y: 0
                        },
                        animations: {
                            idle: {
                                from: {
                                    scale: {
                                        x: 1,
                                        y: 1
                                    }
                                },
                                to: {
                                    scale: {
                                        x: 1.3,
                                        y: 1
                                    }
                                },
                                time: 1500,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0
                            }
                        },
                        on: [{
                            t: Triggers.onEvent(_Events.Events.stageElevatorEnd),
                            r: [Rewards.startAnimation("idle")]
                        }]
                    }, {
                        name: "wave_2",
                        image: "water/mud_wave_2",
                        position: {
                            x: 0,
                            y: 36
                        },
                        animations: {
                            idle: {
                                creator: Animations.moveToDxDy,
                                dx: -20,
                                time: 1200,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0
                            },
                            idleScale: {
                                from: {
                                    scale: {
                                        x: 1.1,
                                        y: 1
                                    }
                                },
                                to: {
                                    scale: {
                                        x: 1.3,
                                        y: 1
                                    }
                                },
                                time: 1800,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0
                            }
                        },
                        on: [{
                            t: Triggers.onEvent(_Events.Events.stageElevatorEnd),
                            r: [Rewards.startAnimation("idle"), Rewards.startAnimation("idleScale")]
                        }]
                    }, {
                        name: "wave_1",
                        image: "water/mud_wave_1",
                        position: {
                            x: -20,
                            y: 37
                        },
                        animations: {
                            idle: {
                                creator: Animations.moveToDxDy,
                                dx: 15,
                                time: 1e3,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0
                            },
                            idleScale: {
                                from: {
                                    scale: {
                                        x: 1,
                                        y: 1
                                    }
                                },
                                to: {
                                    scale: {
                                        x: 1.3,
                                        y: 1
                                    }
                                },
                                time: 1500,
                                easing: "inOutQuad",
                                pingPong: !0,
                                loop: !0
                            }
                        },
                        on: [{
                            t: Triggers.onEvent(_Events.Events.stageElevatorEnd),
                            r: [Rewards.startAnimation("idle"), Rewards.startAnimation("idleScale")]
                        }]
                    }]
                }]
            }, {
                name: "door",
                image: "back/door",
                position: {
                    x: 4362,
                    y: 537
                },
                scale: {
                    x: 1.16,
                    y: 1
                }
            }, {
                name: "floor_1",
                class: TilingSprite,
                image: "back/floor",
                width: TILES_floor_1_w,
                height: TILES_floor_h,
                position: {
                    x: 1662,
                    y: TILES_floor_line_y + 2
                }
            }, {
                name: "floor_2",
                class: TilingSprite,
                image: "back/floor",
                width: TILES_floor_2_w,
                height: TILES_floor_h,
                position: {
                    x: 3090,
                    y: TILES_floor_line_y + 2
                }
            }, {
                name: "floor_3",
                class: TilingSprite,
                image: "back/floor",
                width: TILES_floor_3_w,
                height: TILES_floor_h,
                position: {
                    x: 4220,
                    y: TILES_floor_line_y + 2
                }
            }, {
                name: "rods",
                sprites: [{
                    name: RODS_rod2,
                    class: RodContainer,
                    position: {
                        x: 1750,
                        y: 480
                    },
                    rotation: Math.PI / 2,
                    rodSprite: {
                        image: "rods/rod-4",
                        hitAreaData: {
                            vertexes: [3, 4, 7, 100, 81, 100, 109, 77, 331, 77, 377, 106, 445, 110, 441, 0, 382, -1, 333, 29, 110, 28, 76, 4]
                        },
                        blockedBy: RODS_rod1,
                        pivot: {
                            x: 385,
                            y: 54
                        },
                        position: {
                            x: 385,
                            y: 54
                        },
                        swivel: !0,
                        onOpenHide: !1
                    },
                    backSprites: [{
                        image: "pin_point",
                        position: {
                            x: 362,
                            y: 362
                        },
                        rotation: -Math.PI / 2
                    }, {
                        image: "pin_point",
                        position: {
                            x: 362,
                            y: 32
                        },
                        rotation: -Math.PI / 2
                    }],
                    on: [{
                        t: Triggers.onStart(),
                        r: Rewards.lock()
                    }, {
                        t: Triggers.onEvent(_Events.Events.stageRainEnd),
                        r: Rewards.unlock()
                    }, {
                        t: Triggers.onEvent(_Rod.RodEvents.rodOpened, {
                            name: RODS_rod1
                        }),
                        r: Rewards.unlock()
                    }]
                }, {
                    name: RODS_rod1,
                    class: RodContainer,
                    position: {
                        x: 1239,
                        y: 473
                    },
                    rodSprite: {
                        image: "rods/rod-1",
                        hitAreaData: {
                            vertexes: [3, 4, 7, 100, 81, 100, 109, 71, 370, 73, 370, 29, 110, 28, 76, 4]
                        },
                        fingerSprites: [{
                            name: "drops_1",
                            class: Drops,
                            position: {
                                x: 15,
                                y: 10
                            },
                            visible: !1,
                            count: 4,
                            dxMin: 4,
                            dxMax: 10,
                            dy: 5,
                            drop: {
                                prefix: "water/drops_",
                                images: 6,
                                time: 400
                            },
                            on: [{
                                t: Triggers.onStart(),
                                r: Rewards.show()
                            }, {
                                t: Triggers.onEvent(_Rod.RodEvents.rodTouch, {
                                    name: RODS_rod1
                                }),
                                r: Rewards.hide()
                            }]
                        }, {
                            name: "drops_2",
                            class: Drops,
                            position: {
                                x: 75,
                                y: 30
                            },
                            visible: !1,
                            count: 5,
                            dxMin: 8,
                            dxMax: 15,
                            dy: 10,
                            drop: {
                                prefix: "water/drops_",
                                images: 6,
                                time: 400
                            },
                            on: [{
                                t: Triggers.onStart(),
                                r: Rewards.show()
                            }, {
                                t: Triggers.onEvent(_Rod.RodEvents.rodTouch, {
                                    name: RODS_rod1
                                }),
                                r: Rewards.hide()
                            }]
                        }, {
                            name: "finger",
                            image: "finger",
                            position: {
                                x: 45,
                                y: 35
                            },
                            anchor: {
                                x: .1,
                                y: .1
                            },
                            scale: {
                                x: .6,
                                y: .6
                            },
                            visible: !1,
                            animations: {
                                show: {
                                    creator: Animations.moveFromDxDy,
                                    dx: 50,
                                    dy: 50,
                                    time: 300,
                                    easing: "outQuad"
                                },
                                showAlpha: {
                                    from: {
                                        alpha: 0
                                    },
                                    to: {
                                        alpha: 1
                                    },
                                    time: 300,
                                    easing: "inOutQuad"
                                },
                                hide: {
                                    creator: Animations.moveToDxDy,
                                    dx: 50,
                                    dy: 50,
                                    time: 300,
                                    easing: "outQuad"
                                },
                                hideAlpha: {
                                    from: {
                                        alpha: 1
                                    },
                                    to: {
                                        alpha: 0
                                    },
                                    time: 300,
                                    easing: "inOutQuad"
                                },
                                hint: {
                                    to: {
                                        rotation: -.2
                                    },
                                    time: 750,
                                    pingPong: !0,
                                    repeat: 1,
                                    easing: "inOutQuad"
                                }
                            },
                            scenarios: {
                                hint: {
                                    rewards: [Rewards.show(), Rewards.startAnimation("showAlpha"), Rewards.emitEvent(_Events.Events.tutorialStart), Rewards.startAnimation("hint"), Rewards.hide(), Rewards.startAnimation("hideAlpha")],
                                    loop: !0
                                }
                            },
                            on: [{
                                t: Triggers.onEvent(_Events.Events.stageRainEnd),
                                r: Rewards.startScenario("hint")
                            }, {
                                t: Triggers.onEvent(_Rod.RodEvents.rodTouch),
                                r: [Rewards.stopScenario("hint"), Rewards.stopAnimation("hint"), Rewards.call("hardHide")]
                            }]
                        }]
                    },
                    backSprites: [{
                        image: "pin",
                        position: {
                            x: 180,
                            y: 23
                        }
                    }, {
                        image: "pin",
                        position: {
                            x: 520,
                            y: 23
                        }
                    }],
                    on: [{
                        t: Triggers.onStart(),
                        r: Rewards.lock()
                    }, {
                        t: Triggers.onEvent(_Events.Events.stageRainEnd),
                        r: Rewards.unlock()
                    }, {
                        t: Triggers.onEvent(_Events.Events.tutorialStart),
                        r: [Rewards.startAnimation("hint"), Rewards.setStage("hint")]
                    }]
                }, {
                    class: RodContainer,
                    position: {
                        x: 1750,
                        y: 480
                    },
                    rotation: Math.PI / 2,
                    rodSprite: {
                        image: "rods/rod-4",
                        partOf: RODS_rod2,
                        maskData: {
                            vertexes: [0, 0, 0, 54, 100, 54, 100, 0]
                        },
                        behaviors: [MaskBehavior.maskBehavior]
                    },
                    on: [{
                        t: Triggers.onStart(),
                        r: [Rewards.emitEvent(_Rod.RodEvents.rodPartStart), Rewards.lock()]
                    }, {
                        t: Triggers.onEvent(_Rod.RodEvents.rodTouch, {
                            name: RODS_rod2
                        }),
                        r: Rewards.call("hardHide")
                    }]
                }, {
                    name: RODS_rod4,
                    class: RodContainer,
                    position: {
                        x: 2873,
                        y: 475
                    },
                    rotation: Math.PI / 2,
                    rodSprite: {
                        image: "rods/rod-2",
                        hitAreaData: {
                            vertexes: [3, 4, 7, 100, 81, 100, 109, 71, 370, 73, 370, 29, 110, 28, 76, 4]
                        },
                        blockedBy: RODS_rod3
                    },
                    backSprites: [{
                        image: "pin_end",
                        position: {
                            x: 375,
                            y: 22
                        },
                        rotation: Math.PI
                    }],
                    on: [{
                        t: Triggers.onStart(),
                        r: Rewards.lock()
                    }, {
                        t: [Triggers.onEvent(_Events.Events.stageElevatorEnd), Triggers.onEvent(_Rod.RodEvents.rodOpened, {
                            name: RODS_rod3
                        })],
                        r: Rewards.unlock()
                    }]
                }, {
                    name: RODS_rod3,
                    class: RodContainer,
                    position: {
                        x: 3264,
                        y: 579
                    },
                    rotation: Math.PI,
                    rodSprite: {
                        image: "rods/rod-1",
                        hitAreaData: {
                            vertexes: [3, 4, 7, 100, 81, 100, 109, 71, 370, 73, 370, 29, 110, 28, 76, 4]
                        }
                    },
                    backSprites: [{
                        image: "pin",
                        position: {
                            x: 100,
                            y: 23
                        }
                    }],
                    on: [{
                        t: Triggers.onStart(),
                        r: Rewards.lock()
                    }, {
                        t: [Triggers.onEvent(_Events.Events.stageElevatorEnd)],
                        r: Rewards.unlock()
                    }]
                }, {
                    class: RodContainer,
                    position: {
                        x: 2873,
                        y: 475
                    },
                    rotation: Math.PI / 2,
                    rodSprite: {
                        image: "rods/rod-2",
                        partOf: RODS_rod4,
                        maskData: {
                            vertexes: [0, 0, 0, 54, 100, 54, 100, 0]
                        },
                        behaviors: [MaskBehavior.maskBehavior]
                    },
                    on: [{
                        t: Triggers.onStart(),
                        r: [Rewards.emitEvent(_Rod.RodEvents.rodPartStart), Rewards.lock()]
                    }, {
                        t: Triggers.onEvent(_Rod.RodEvents.rodTouch, {
                            name: RODS_rod4
                        }),
                        r: Rewards.call("hardHide")
                    }]
                }, {
                    image: "pin_point",
                    position: {
                        x: 4260,
                        y: 845
                    }
                }, {
                    name: RODS_rod5,
                    class: RodContainer,
                    position: {
                        x: 3632,
                        y: 816
                    },
                    rodSprite: {
                        image: "rods/rod-3",
                        hitAreaData: {
                            vertexes: [3, 4, 7, 100, 81, 100, 109, 71, 270, 73, 270, 29, 110, 28, 76, 4]
                        }
                    },
                    backSprites: [{
                        image: "pin_end",
                        position: {
                            x: 250,
                            y: 23
                        },
                        rotation: Math.PI
                    }],
                    on: [{
                        t: Triggers.onStart(),
                        r: Rewards.lock()
                    }, {
                        t: [Triggers.onEvent(_Events.Events.stageBulgarEnd), Triggers.onEvent(_Rod.RodEvents.rodOpened, {
                            name: RODS_rod6
                        })],
                        r: Rewards.unlock()
                    }]
                }, {
                    name: RODS_rod6,
                    class: RodContainer,
                    position: {
                        x: 4272,
                        y: 922
                    },
                    rotation: Math.PI,
                    rodSprite: {
                        image: "rods/rod-3",
                        hitAreaData: {
                            vertexes: [3, 4, 7, 100, 81, 100, 109, 71, 270, 73, 270, 29, 110, 28, 76, 4]
                        }
                    },
                    backSprites: [{
                        image: "pin_end",
                        position: {
                            x: 250,
                            y: 23
                        },
                        rotation: Math.PI
                    }],
                    on: [{
                        t: Triggers.onStart(),
                        r: Rewards.lock()
                    }, {
                        t: [Triggers.onEvent(_Events.Events.stageBulgarEnd)],
                        r: Rewards.unlock()
                    }]
                }, {
                    name: RODS_rod7,
                    class: RodContainer,
                    position: {
                        x: 4006,
                        y: 483
                    },
                    rotation: Math.PI / 2,
                    rodSprite: {
                        image: "rods/rod-4",
                        hitAreaData: {
                            vertexes: [3, 4, 7, 100, 81, 100, 109, 77, 331, 77, 377, 106, 445, 110, 441, 0, 382, -1, 333, 29, 110, 28, 76, 4]
                        },
                        blockedBy: RODS_rod6,
                        pivot: {
                            x: 385,
                            y: 54
                        },
                        position: {
                            x: 385,
                            y: 54
                        },
                        swivel: !0,
                        onOpenHide: !1,
                        openRotation: Math.PI / 2,
                        blockRotation: .3
                    },
                    backSprites: [{
                        image: "pin_point",
                        position: {
                            x: 362,
                            y: 32
                        },
                        rotation: -Math.PI / 2
                    }],
                    on: [{
                        t: Triggers.onStart(),
                        r: Rewards.lock()
                    }, {
                        t: [Triggers.onEvent(_Events.Events.stageBulgarEnd), Triggers.onEvent(_Rod.RodEvents.rodOpened, {
                            name: RODS_rod6
                        })],
                        r: Rewards.unlock()
                    }]
                }]
            }, {
                name: "car",
                position: {
                    x: 295,
                    y: 602
                },
                animations: {
                    hide: {
                        creator: Animations.moveToDxDy,
                        dx: -1e3,
                        time: 1e3,
                        easing: "inQuad"
                    },
                    wheels: {
                        to: {
                            wheel_1: {
                                rotation: 2 * -Math.PI
                            },
                            wheel_2: {
                                rotation: 2 * -Math.PI
                            }
                        },
                        loop: !0,
                        time: 500
                    },
                    shake: {
                        to: {
                            body: {
                                scale: {
                                    x: .995,
                                    y: .99
                                }
                            }
                        },
                        loop: !0,
                        pingPong: !0,
                        time: 150
                    },
                    open: {
                        from: {
                            body: {
                                door: {
                                    scale: {
                                        x: 1,
                                        y: 1
                                    }
                                }
                            }
                        },
                        to: {
                            body: {
                                door: {
                                    scale: {
                                        x: .5,
                                        y: 1
                                    }
                                }
                            }
                        },
                        time: 300,
                        easing: "outQuad"
                    },
                    close: {
                        from: {
                            body: {
                                door: {
                                    scale: {
                                        x: .5,
                                        y: 1
                                    }
                                }
                            }
                        },
                        to: {
                            body: {
                                door: {
                                    scale: {
                                        x: 1,
                                        y: 1
                                    }
                                }
                            }
                        },
                        time: 300,
                        easing: "inQuad"
                    }
                },
                scenarios: {
                    open: [Rewards.instant(Rewards.startAnimation("shake")), Rewards.wait(500), Rewards.startAnimation("open"), Rewards.wait(500), Rewards.startAnimation("close")],
                    carMove: [Rewards.hide(), Rewards.instant(Rewards.startAnimation("wheels")), Rewards.wait(1e3), Rewards.emitEvent(_Events.Events.stageCarMoveEnd)]
                },
                on: [{
                    t: Triggers.onStart(),
                    r: Rewards.startScenario("open")
                }, {
                    t: Triggers.onEvent(_Events.Events.stageCarMove),
                    r: Rewards.startScenario("carMove")
                }],
                sprites: [{
                    name: "body",
                    image: "back/car_body",
                    sprites: [{
                        name: "door",
                        image: "back/car_door",
                        position: {
                            x: 293,
                            y: 14
                        },
                        anchor: {
                            x: 0,
                            y: .5
                        }
                    }]
                }, {
                    name: "wheel_1",
                    image: "back/car_wheel",
                    position: {
                        x: 45,
                        y: 169
                    }
                }, {
                    name: "wheel_2",
                    image: "back/car_wheel",
                    position: {
                        x: 345,
                        y: 169
                    }
                }]
            }, {
                name: "puddle",
                image: "water/puddle",
                position: {
                    x: 600,
                    y: 852
                }
            }]
        }, {
            name: "kat",
            class: Katrin,
            visible: !1,
            position: {
                x: 0,
                y: 96
            },
            position_back: {
                x: -200,
                y: 96
            },
            position_bulgar: {
                x: -140,
                y: 96
            },
            position_home: {
                x: 840,
                y: 96
            },
            animations: {
                show: {
                    from: {
                        scale: {
                            x: .7,
                            y: .8
                        },
                        alpha: 0
                    },
                    to: {
                        scale: {
                            x: 1,
                            y: 1
                        },
                        alpha: 1
                    },
                    time: 300,
                    easing: "inOutQuad"
                },
                rotate: {
                    to: {
                        rotation: .2
                    },
                    time: 400,
                    pingPong: !0,
                    easing: "inOutQuad"
                },
                moveBack: {
                    creator: Animations.moveToPosition,
                    position: "back",
                    time: 800,
                    easing: "inOutQuad"
                },
                moveBulgar: {
                    creator: Animations.moveToPosition,
                    position: "bulgar",
                    time: 400,
                    easing: "outQuad"
                },
                moveHome: {
                    creator: Animations.moveToPosition,
                    position: "home",
                    time: 2500,
                    easing: "outQuad"
                },
                jump: {
                    creator: Animations.moveToDxDy,
                    dy: -40,
                    pingPong: !0,
                    time: 300,
                    easing: "inOutQuad"
                }
            },
            scenarios: {
                exitCar: [Rewards.wait(500), Rewards.show(), Rewards.startAnimation("rotate"), Rewards.call("exitCar")],
                jumpOnEnter: [Rewards.wait(200), Rewards.startAnimation("jump"), Rewards.wait(260), Rewards.startAnimation("jump")],
                jumpOnBasement: [Rewards.wait(1700), Rewards.startAnimation("jump")],
                jumpOnHome: [Rewards.wait(580), Rewards.startAnimation("jump")],
                moveHome: [Rewards.instant(Rewards.startAnimation("moveHome")), Rewards.wait(200), Rewards.startAnimation("jump"), Rewards.emitEvent(_Events.Events.katrinHomeEnd)]
            },
            on: [{
                t: Triggers.onStart(),
                r: Rewards.startScenario("exitCar")
            }, {
                t: Triggers.onEvent(_Events.Events.stageRain),
                r: Rewards.startAnimation("moveBack")
            }, {
                t: Triggers.onEvent(_Events.Events.stageElevator),
                r: [Rewards.call("enterHouse"), Rewards.startScenario("jumpOnEnter")]
            }, {
                t: Triggers.onEvent(_Events.Events.stageBulgar),
                r: [Rewards.startAnimation("moveBulgar"), Rewards.startScenario("jumpOnBasement")]
            }, {
                t: Triggers.onEvent(_Events.Events.stageHome),
                r: Rewards.startScenario("jumpOnHome")
            }, {
                t: Triggers.onEvent(_Events.Events.stageHomeEnd),
                r: Rewards.startScenario("moveHome")
            }, {
                t: [Triggers.onEvent(_Events.Events.stageCar), Triggers.onEvent(_Events.Events.stageRain), Triggers.onEvent(_Events.Events.stageElevator), Triggers.onEvent(_Events.Events.stageBulgar), Triggers.onEvent(_Events.Events.stageHome)],
                r: Rewards.call("walk")
            }, {
                t: [Triggers.onEvent(_Events.Events.stageCarEnd), Triggers.onEvent(_Events.Events.stageRainEnd), Triggers.onEvent(_Events.Events.stageElevatorEnd), Triggers.onEvent(_Events.Events.stageBulgarEnd)],
                r: Rewards.call("stop")
            }, {
                t: Triggers.onEvent(_Events.Events.stageRainEnd),
                r: Rewards.call("hideDrops")
            }, {
                t: Triggers.onEvent(_Rod.RodEvents.rodOpened, {
                    name: RODS_rod1
                }),
                r: Rewards.call("showDrops")
            }, {
                t: Triggers.onEvent(_Events.Events.stageBasement),
                r: Rewards.call("setFalling")
            }, {
                t: Triggers.onEvent(_Events.Events.stageBasementEnd),
                r: Rewards.hide()
            }, {
                t: Triggers.onEvent(_Rod.RodEvents.rodOpened, {
                    name: RODS_rod6
                }),
                r: Rewards.call("setHappy")
            }]
        }, {
            name: "splash",
            image: "water/splash_1",
            position: {
                x: -135,
                y: 22
            },
            scale: {
                x: 1.9,
                y: 2
            },
            visible: !1,
            animations: {
                show: {
                    creator: Animations.sequence,
                    images: {
                        prefix: "water/splash_",
                        count: 6
                    },
                    time: 500
                }
            },
            on: [{
                t: Triggers.onEvent(_Events.Events.stageCarMove),
                r: Rewards.show()
            }, {
                t: Triggers.onAnimationEnd("show"),
                r: Rewards.hide()
            }]
        }]
    }, {
        name: "ui",
        class: UIContainer,
        on: [{
            t: Triggers.onStart(),
            r: Rewards.setStage("game")
        }, {
            t: Triggers.onceSkip(),
            r: Rewards.setStage("final")
        }, {
            t: Triggers.onEvent(_Events.Events.gameWin),
            r: Rewards.setStage("final")
        }, {
            t: Triggers.onEvent(_Events.Events.gameFail),
            r: Rewards.setStage("finalFail")
        }],
        sprites: [{
            name: "flash",
            class: Fade,
            fillColor: "0xFFFFFF",
            fillAlpha: 1,
            animations: {
                show: {
                    from: {
                        alpha: 0
                    },
                    to: {
                        alpha: .6
                    },
                    time: 100,
                    repeat: 3,
                    easing: "easeOutQuart"
                },
                hide: {
                    to: {
                        alpha: 0
                    },
                    startAfter: "show",
                    time: 100
                }
            },
            on: [{
                t: Triggers.onEvent(_Events.Events.stageRain),
                r: Rewards.show()
            }, {
                t: Triggers.onAnimationEnd("show"),
                r: Rewards.hide()
            }]
        }, {
            name: "disclaimerContainer",
            parentStages: ["start", "game"],
            sprites: [{
                name: "disclaimer",
                class: Disclaimer,
                showDelay: 8e3,
                position: {
                    absolute: !0,
                    align: {
                        x: .5,
                        y: 1
                    },
                    x: 0,
                    y: 0
                },
                position_portrait: {
                    absolute: !0,
                    align: {
                        x: .5,
                        y: 1
                    },
                    x: 0,
                    y: -50
                },
                on: [{
                    t: Triggers.onStart(),
                    r: Rewards.show()
                }]
            }]
        }, {
            class: Fade,
            parentStages: ["final", "finalFail"]
        }, {
            class: Packshot,
            parentStages: ["final", "finalFail"],
            on: [{
                t: Triggers.onEvent(_Rod.RodEvents.rodTouch, {
                    name: RODS_rod5
                }),
                c: Conditions.flags({
                    rod7Opened: !1
                }),
                r: Rewards.call("lockConfetti")
            }]
        }, {
            name: "mute",
            class: ButtonMute
        }, {
            name: "logo",
            image: "logo",
            parentStages: ["start", "game"],
            adaptivePosition: !0,
            position: {
                absolute: !0,
                x: 20,
                y: 10
            },
            position_portrait: {
                absolute: !0,
                x: 15,
                y: 70
            },
            position_portrait_lg: {
                absolute: !0,
                x: 15,
                y: 20
            }
        }]
    }]
}

export default config;