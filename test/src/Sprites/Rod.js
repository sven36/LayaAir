import StagedSprite from '../Playable/Core/StagedSprite';
import Rewards from '../Playable/Behaviors/UniversalBehavior/Rewards';
import Triggers from '../Playable/Behaviors/UniversalBehavior/Triggers';
import Conditions from '../Playable/Behaviors/UniversalBehavior/Conditions';
import HitAreaBehavior from '../Playable/Behaviors/HitAreaBehavior';
import Animations from '../Animations';

export const RodEvents = {
    rodTouch: "rodTouch",
    rodBlocked: "rodBlocked",
    rodOpened: "rodOpened",
    rodPartStart: "rodPartStart"
};

class Rod extends StagedSprite {
    unlock() {
        _get(Rod.prototype.__proto__ || Object.getPrototypeOf(Rod.prototype), "unlock", this).call(this),
            this.setStage("hint")
    }
    lock() {
        _get(Rod.prototype.__proto__ || Object.getPrototypeOf(Rod.prototype), "lock", this).call(this),
            this.setStage("normal")
    }
    getDefaultConfig(config) {
        var _this2 = this
            , name = config.name
            , image = config.image
            , _config$onOpenHide = config.onOpenHide
            , onOpenHide = void 0 === _config$onOpenHide || _config$onOpenHide
            , _config$blockedBy = config.blockedBy
            , blockedBy = void 0 === _config$blockedBy ? null : _config$blockedBy
            , _config$hitAreaData = config.hitAreaData
            , hitAreaData = void 0 === _config$hitAreaData ? {} : _config$hitAreaData
            , _config$blockRotation = config.blockRotation
            , blockRotation = void 0 === _config$blockRotation ? -.1 : _config$blockRotation
            , _config$openRotation = config.openRotation
            , openRotation = void 0 === _config$openRotation ? -Math.PI / 2 : _config$openRotation;
        config.image = null;
        this.swivel = config.swivel || !1,
            this.onOpenHide = onOpenHide,
            this.blockedBy = blockedBy;
        var _config$position_open = config.position_open
            , position_open = void 0 === _config$position_open ? {
                x: -150,
                y: 0
            } : _config$position_open
            , _config$position_hint = config.position_hint
            , position_hint = void 0 === _config$position_hint ? {
                x: -30,
                y: 0
            } : _config$position_hint
            , _config$position_bloc = config.position_block
            , position_block = void 0 === _config$position_bloc ? {
                x: -10,
                y: 0
            } : _config$position_bloc;
        return Object.assign(_get(Rod.prototype.__proto__ || Object.getPrototypeOf(Rod.prototype), "getDefaultConfig", this).call(this, config), {
            name: name,
            stages: ["normal", "hint"],
            anchor: {
                x: 0,
                y: 0
            },
            pivot: config.pivot || {
                x: 0,
                y: 0
            },
            blockedBy: blockedBy,
            hitAreaData: hitAreaData,
            position_open: position_open,
            position_hint: position_hint,
            position_block: position_block,
            _spritesFields: ["defaultSprites", "sprites", "fingerSprites"],
            _universalBehaviorFields: ["defaultOn", "on"],
            _scenariosFields: ["defaultScenarios", "scenarios"],
            animations: {
                show: {
                    creator: Animations.alphaShow,
                    time: 25
                },
                hide: {
                    creator: Animations.alphaHide,
                    time: 350
                },
                hint: {
                    creator: Animations.moveToPosition,
                    position: "hint",
                    time: 750,
                    pingPong: !0,
                    noApplyPosition: !0,
                    repeat: 1,
                    easing: "inOutQuad"
                },
                open: {
                    creator: Animations.moveToPosition,
                    position: "open",
                    time: 250,
                    easing: "inQuad"
                },
                turn: {
                    to: {
                        rotation: openRotation
                    },
                    time: 250,
                    easing: "inQuad"
                },
                moveBlock: {
                    creator: Animations.moveToPosition,
                    position: "block",
                    pingPong: !0,
                    noApplyPosition: !0,
                    time: 150,
                    easing: "inOutQuad"
                },
                turnBlock: {
                    to: {
                        rotation: blockRotation
                    },
                    pingPong: !0,
                    noApplyPosition: !0,
                    time: 150,
                    easing: "inOutQuad"
                },
                blink: {
                    from: {
                        red: {
                            alpha: 0
                        }
                    },
                    to: {
                        red: {
                            alpha: 1
                        }
                    },
                    repeat: 1,
                    pingPong: !0,
                    time: 150
                }
            },
            behaviors: [HitAreaBehavior.hitAreaBehavior],
            defaultScenarios: {
                reset: [Rewards.set({
                    blockedBy: blockedBy,
                    opened: !1
                }), Rewards.setFlags(_defineProperty({}, config.name + "Opened", !1)), Rewards.applyPosition(), Rewards.unlock(), Rewards.show()],
                hide: [Rewards.wait(150), Rewards.hide()],
                open: [Rewards.stopAnimation("hint"), Rewards.applyPosition(), Rewards.playSound("rod-open"), Rewards.if(Conditions.values({
                    onOpenHide: !0
                }), Rewards.startScenario("hide"), []), Rewards.emitEvent(RodEvents.rodTouch), Rewards.setFlags(_defineProperty({}, config.name + "Opened", !0)), Rewards.if(Conditions.values({
                    swivel: !0
                }), Rewards.startAnimation("turn"), Rewards.startAnimation("open")), Rewards.emitEvent(RodEvents.rodOpened)],
                openBlocked: [Rewards.emitEvent(RodEvents.rodBlocked), Rewards.playSound("rod-blocked"), Rewards.if(Conditions.values({
                    swivel: !0
                }), Rewards.startAnimation("turnBlock"), Rewards.startAnimation("moveBlock"))],
                blocked: [Rewards.stopAnimation("blink"), Rewards.startAnimation("blink")]
            },
            defaultOn: [{
                t: [Triggers.onStart(), Triggers.onRestart()],
                r: Rewards.startScenario("reset")
            }, {
                t: [Triggers.onStart(), Triggers.onRestart(), Triggers.onSkip()],
                r: [Rewards.setStage("normal"), Rewards.stopAnimation("hint"), Rewards.applyPosition()]
            }, {
                t: Triggers.onEvent(RodEvents.rodPartStart, function (part) {
                    part.config.partOf === _this2.name && (part.interactive = !1,
                        _this2.animations.moveBlock.on("update", function () {
                            part.position = _this2.position,
                                part.rotation = _this2.rotation
                        }),
                        _this2.animations.turnBlock.on("update", function () {
                            part.pivot = _this2.pivot,
                                part.position = _this2.position,
                                part.rotation = _this2.rotation
                        }))
                })
            }, {
                t: Triggers.onPointerdown(),
                c: [Conditions.values({
                    locked: !1,
                    opened: !1
                }), Conditions.not(Conditions.values({
                    blockedBy: null
                }))],
                r: Rewards.startScenario("openBlocked")
            }, {
                t: Triggers.onPointerdown(),
                c: Conditions.values({
                    locked: !1,
                    blockedBy: null,
                    opened: !1
                }),
                r: [Rewards.set({
                    opened: !0
                }), Rewards.startScenario("open")]
            }, {
                t: Triggers.onEvent(RodEvents.rodTouch),
                r: [Rewards.lock(), Rewards.stopAnimationLoopingWithDelay("hint")]
            }, {
                t: Triggers.onEvent(RodEvents.rodOpened, {
                    name: blockedBy
                }),
                r: Rewards.set({
                    blockedBy: null
                })
            }, {
                t: Triggers.onEvent(RodEvents.rodBlocked, {
                    blockedBy: name
                }),
                r: Rewards.startScenario("blocked")
            }],
            defaultSprites: [{
                name: "light",
                image: image + "-light",
                parentStages: ["hint"],
                animations: {
                    show: {
                        creator: Animations.alphaShow,
                        time: 1500,
                        repeat: 1,
                        loop: !0,
                        pingPong: !0,
                        easing: "inOutQuad"
                    },
                    hide: {
                        to: {
                            alpha: 0
                        },
                        time: 150
                    }
                }
            }, {
                name: "rod",
                image: image
            }, {
                name: "red",
                image: image + "-red",
                alpha: 0
            }]
        })
    }
}
export default Rod;
