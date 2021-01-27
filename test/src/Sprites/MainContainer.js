import StagedSprite from '../Playable/Core/StagedSprite';
import Behavior from '../Playable/Core/Behavior';
import DraggingBehavior from '../Playable/Behaviors/DraggingBehavior';

class MainContainer extends StagedSprite {
    getEventHandlers() {
        return {
            playableStart: {
                on: this.onStart
            },
            devWheel: {
                on: this.onDevWheel
            },
            devKeyDown: {
                on: this.onDevKeyDown
            },
            devKeyUp: {
                on: this.onDevKeyUp
            }
        }
    }
    onStart() {
        this.app.config.devMode && (Behavior.applyFor(this, {
            behavior: DraggingBehavior,
            offsetDependent: !0
        }),
            this.interactive = !1)
    }
    onDevWheel(e) {
        var modifier = .025 * Math.sign(e.deltaY);
        this.scale = {
            x: this.scale.x + modifier,
            y: this.scale.y + modifier
        }
    }
    onDevKeyDown(e) {
        this.updateInteractive()
    }
    onDevKeyUp(e) {
        this.updateInteractive()
    }
    updateInteractive() {
        this.interactive = this.app.devKeys[32],
            this.buttonMode = this.app.devKeys[32]
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
        }(MainContainer.prototype.__proto__ || Object.getPrototypeOf(MainContainer.prototype), "getDefaultConfig", this).call(this, config), {
            anchor: {
                x: 0,
                y: 0
            },
            adaptivePosition: !0,
            position: {
                absolute: !0,
                centered: !0
            }
        })
    }
}

export default MainContainer;
