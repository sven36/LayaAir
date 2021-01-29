import Sprite from '../Core/Sprite.js';
class ButtonMute extends Sprite {
    getEventHandlers() {
        return {
            soundReady: {
                once: this.onceSoundReady
            }
        }
    }
    onceSoundReady() {
        if (window.playableEnv && playableEnv.apiName)
            switch (playableEnv.apiName) {
                case "default":
                case "mraid":
                case "mraidAmz":
                    this.show(),
                        this.interactive = !0,
                        this.on("pointertap", this.toggle)
            }
    }
    toggle() {
        this.app.sounds.ready && (this.soundOn.visible = !this.soundOn.visible,
            this.soundOff.visible = !this.soundOff.visible,
            this.soundOn.visible ? this.app.sounds.unmute() : this.app.sounds.mute())
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
        }(ButtonMute.prototype.__proto__ || Object.getPrototypeOf(ButtonMute.prototype), "getDefaultConfig", this).call(this, config), {
            visible: !1,
            adaptivePosition: !0,
            position: {
                absolute: !0,
                align: {
                    x: 0,
                    y: 1
                },
                x: 40,
                y: -75
            },
            sprites: [{
                name: "soundOn",
                image: "soundOn"
            }, {
                name: "soundOff",
                image: "soundOff",
                visible: !1
            }]
        })
    }
}

export default ButtonMute;