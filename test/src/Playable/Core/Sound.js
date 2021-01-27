class Sound {
    constructor(app) {
        this.app = app,
            this.ready = !1,
            void 0 !== window.b64 && 0 !== Object.keys(window.b64).length && this.loadSounds()
    }
    loadSounds() {
        var _this = this;
        try {
            PIXI.sound.volumeAll = this.app.config.soundVolume,
                PIXI.Loader.shared.add(this._getSoundsMap()),
                PIXI.Loader.shared.onError.add(function (err) { }),
                PIXI.Loader.shared.load(function (loader, resources) {
                    _this.ready = !0,
                        _this.app.emit("soundReady")
                })
        } catch (e) { }
    }
    play(name, config) {
        if (this.ready)
            try {
                PIXI.sound.find(name).play(config)
            } catch (e) { }
    }
    stop(name) {
        if (this.ready)
            try {
                PIXI.sound.find(name).stop()
            } catch (e) { }
    }
    mute() {
        if (this.ready)
            try {
                PIXI.sound.muteAll()
            } catch (e) { }
    }
    getSound(name) {
        if (this.ready)
            try {
                return PIXI.sound.find(name)
            } catch (e) { }
    }
    unmute() {
        if (this.ready)
            try {
                PIXI.sound.unmuteAll()
            } catch (e) { }
    }
    toggleMute() {
        if (this.ready)
            try {
                PIXI.sound.toggleMuteAll()
            } catch (e) { }
    }
    _getSoundsMap() {
        return Object.keys(window.b64).map(function (key) {
            return {
                name: key,
                url: window.b64[key].src
            }
        })
    }
}

export default Sound;