import StagedSprite from '../Playable/Core/StagedSprite';

class UIContainer extends StagedSprite {
    setStage(stage) {
        var withAnimation = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        this.isFinalStage(this.stage) || _get(UIContainer.prototype.__proto__ || Object.getPrototypeOf(UIContainer.prototype), "setStage", this).call(this, stage, withAnimation)
    }
    isFinalStage(stage) {
        return -1 !== this.config.finalStages.indexOf(stage)
    }
    onSetStage() {
        this.isFinalStage(this.stage) && ("final" === this.stage ? this.app.analytics.finalWin() : this.app.analytics.finalLose(),
            this.app.playSound(this.config.sounds[this.stage]))
    }
    getDefaultConfig(config) {
        return Object.assign(_get(UIContainer.prototype.__proto__ || Object.getPrototypeOf(UIContainer.prototype), "getDefaultConfig", this).call(this, config), {
            stages: ["start", "game", "final", "finalFail"],
            startStage: "start",
            finalStages: ["final", "finalFail"],
            sounds: {
                final: "win",
                finalFail: "lose"
            },
            adaptivePosition: !0,
            position: {
                absolute: !0,
                centered: !0
            }
        })
    }
}

export default UIContainer;