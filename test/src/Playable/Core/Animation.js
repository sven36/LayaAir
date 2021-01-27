import * as PIXI from 'pixi.js';


class Animation {
    static create(obj, config) {
        if ("function" == typeof config)
            return config.call(obj, {});
        if (config.creator) {
            var callable = config.creator;
            return delete config.creator,
                callable.call(obj, Object.assign({}, config))
        }
        var tween = PIXI.tweenManager.createTween(obj, config);
        return tween.from(config.from),
            !window.is_webgl && config.to && void 0 !== config.to.alpha && "outBack" === config.easing && tween.on("update", function () {
                1 < obj.alpha && (obj.alpha = 1)
            }),
            config.startTime && 0 < config.startTime && tween.on("start", function () {
                tween.update(config.startTime)
            }),
            config.loopWithDelay && 0 < config.loopWithDelay && (tween.on("start", function () {
                tween.loopWithDelay = !0
            }),
                tween.on("end", function () {
                    tween.loopWithDelay && (tween.delay = config.loopWithDelay,
                        tween.reset().start())
                })),
            config.autoStart ? tween.start() : config.startAfter && obj.animations[config.startAfter] ? obj.animations[config.startAfter].on("end", function () {
                tween.start()
            }) : config.startWith && obj.animations[config.startWith] && obj.animations[config.startWith].on("start", function () {
                tween.start()
            }),
            tween
    }
    static removeAll(obj) {
        for (var tweens = PIXI.tweenManager.getTweensForTarget(obj), i = 0; i < tweens.length; i++) {
            var tween = tweens[i];
            tween.stop(),
                PIXI.tweenManager.removeTween(tween)
        }
    }
}

export default Animation;