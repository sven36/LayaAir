export const viewPortConfig = {
    "size": [1390, 640],
    "size_min": [853, 640],
    "crop": true,
    "adaptive": true
}

export let Ease = {
    linear: function () {
        return function (t) {
            return t
        }
    },
    inQuad: function () {
        return function (t) {
            return t * t
        }
    },
    outQuad: function () {
        return function (t) {
            return t * (2 - t)
        }
    },
    inOutQuad: function () {
        return function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }
    },
    inCubic: function () {
        return function (t) {
            return t * t * t
        }
    },
    outCubic: function () {
        return function (t) {
            return --t * t * t + 1
        }
    },
    inOutCubic: function () {
        return function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }
    },
    inQuart: function () {
        return function (t) {
            return t * t * t * t
        }
    },
    outQuart: function () {
        return function (t) {
            return 1 - --t * t * t * t
        }
    },
    inOutQuart: function () {
        return function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }
    },
    inQuint: function () {
        return function (t) {
            return t * t * t * t * t
        }
    },
    outQuint: function () {
        return function (t) {
            return --t * t * t * t * t + 1
        }
    },
    inOutQuint: function () {
        return function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }
    },
    inSine: function () {
        return function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }
    },
    outSine: function () {
        return function (t) {
            return Math.sin(t * Math.PI / 2)
        }
    },
    inOutSine: function () {
        return function (t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }
    },
    inExpo: function () {
        return function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        }
    },
    outExpo: function () {
        return function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }
    },
    inOutExpo: function () {
        return function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2,
                -10 * (t - 1)))
        }
    },
    inCirc: function () {
        return function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }
    },
    outCirc: function () {
        return function (t) {
            return Math.sqrt(1 - --t * t)
        }
    },
    inOutCirc: function () {
        return function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t - 2) * (t - 2)) + 1)
        }
    },
    inElastic: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : .1,
            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .4;
        return function (i) {
            var n = void 0;
            return 0 === i ? 0 : 1 === i ? 1 : (n = !t || t < 1 ? (t = 1, e / 4) : e * Math.asin(1 / t) / (2 *
                Math.PI), -t * Math.pow(2, 10 * (i - 1)) * Math.sin((i - 1 - n) * (2 * Math.PI) / e))
        }
    },
    outElastic: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : .1,
            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .4;
        return function (i) {
            var n = void 0;
            return 0 === i ? 0 : 1 === i ? 1 : (n = !t || t < 1 ? (t = 1, e / 4) : e * Math.asin(1 / t) / (2 *
                Math.PI), t * Math.pow(2, -10 * i) * Math.sin((i - n) * (2 * Math.PI) / e) + 1)
        }
    },
    inOutElastic: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : .1,
            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .4;
        return function (i) {
            var n = void 0;
            return 0 === i ? 0 : 1 === i ? 1 : (n = !t || t < 1 ? (t = 1, e / 4) : e * Math.asin(1 / t) / (2 *
                    Math.PI), (i *= 2) < 1 ? t * Math.pow(2, 10 * (i - 1)) * Math.sin((i - 1 - n) * (2 * Math
                    .PI) / e) * -.5 : t * Math.pow(2, -10 * (i - 1)) * Math.sin((i - 1 - n) * (2 * Math.PI) / e) *
                .5 + 1)
        }
    },
    inBack: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1.70158;
        return function (e) {
            return e * e * ((t + 1) * e - t)
        }
    },
    outBack: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1.70158;
        return function (e) {
            return --e * e * ((t + 1) * e + t) + 1
        }
    },
    inOutBack: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1.70158;
        return function (e) {
            var i = 1.525 * t;
            return (e *= 2) < 1 ? e * e * ((i + 1) * e - i) * .5 : .5 * ((e - 2) * (e - 2) * ((i + 1) * (e -
                2) + i) + 2)
        }
    },
    inBounce: function () {
        return function (t) {
            return 1 - Ease.outBounce()(1 - t)
        }
    },
    outBounce: function () {
        return function (t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t <
                2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }
    },
    inOutBounce: function () {
        return function (t) {
            return t < .5 ? .5 * Ease.inBounce()(2 * t) : .5 * Ease.outBounce()(2 * t - 1) + .5
        }
    }
};
let util = {
    getLang: function () {
        return "string" == typeof lang ? lang : window.playableEnv && playableEnv.lang ? "all" ==
            playableEnv.lang ? "en" : playableEnv.lang : "en"
    },
    getRandomInt: function (min, max) {
        var rand = min - .5 + Math.random() * (max - min + 1);
        return rand = Math.round(rand)
    },
    degreesInRadians: function (val) {
        return this.rad(val)
    },
    radiansInDegrees: function (val) {
        return this.deg(val)
    },
    rad: function (val) {
        return val * (Math.PI / 180)
    },
    deg: function (val) {
        return val * (180 / Math.PI)
    },
    getSprite: function (img, anchorX, anchorY) {
        var texture = this.getTexture(img);
        if (texture) {
            var sprite = new PIXI.Sprite(texture);
            return sprite.origWidth = texture.origWidth, sprite.origHeight = texture.origHeight, (anchorX ||
                0 == anchorX) && ("object" == (void 0 === anchorX ? "undefined" : _typeof(anchorX)) ? sprite
                .anchor.set(anchorX[0], anchorX[1] || anchorX[0]) : sprite.anchor.set(anchorX, "number" ==
                    typeof anchorY ? anchorY : anchorX)), sprite
        }
    },
    getBaseTexture: function (name) {
        if (sprites[name]) {
            if (!PIXI.utils.BaseTextureCache[name]) {
                var image = new Image;
                image.src = sprites[name].src, PIXI.BaseTexture.addToCache(new PIXI.BaseTexture(image), name)
            }
            return PIXI.utils.BaseTextureCache[name]
        }
    },
    getTexture: function (name) {
        if (PIXI.utils.TextureCache[name]) return PIXI.utils.TextureCache[name];
        var textureSheet = this.getTextureSheet(name);
        if (textureSheet) return textureSheet;
        if (this.getBaseTexture(name)) {
            var texture = new PIXI.Texture(this.getBaseTexture(name)),
                pic = sprites[name];
            return texture.origWidth = pic.w / pic.r, texture.origHeight = pic.h / pic.r, PIXI.Texture
                .addToCache(texture, name), texture
        }
    },
    getTextureSheet: function (name) {
        if ("undefined" == typeof spritesheets) return !1;
        var data = spritesheets[name];
        if (!data) return !1;
        var srcBaseTexture = "spritesheet_" + name.split("/")[0],
            baseTexture = this.getBaseTexture(srcBaseTexture);
        if (baseTexture) {
            var sourceSize = !1 !== data.trimmed && data.sourceSize ? data.sourceSize : data.frame,
                rect = data.frame,
                orig = new PIXI.Rectangle(0, 0, sourceSize.w, sourceSize.h),
                frame = void 0;
            frame = data.rotated ? new PIXI.Rectangle(rect.x, rect.y, rect.h, rect.w) : new PIXI.Rectangle(
                rect.x, rect.y, rect.w, rect.h);
            var trim = new PIXI.Rectangle(data.spriteSourceSize.x, data.spriteSourceSize.y, rect.w, rect.h),
                texture = new PIXI.Texture(baseTexture, frame, orig, trim, data.rotated ? 2 : 0);
            return texture.origWidth = data.sourceSize.w, texture.origHeight = data.sourceSize.h, texture
        }
    },
    align: function (game, obj) {
        0 < game.origWidth - game.width ? obj.x = (game.width - game.origWidth) / 2 : obj.x = 0, 0 < game
            .origHeight - game.height ? obj.y = (game.height - game.origHeight) / 2 : obj.y = 0
    },
    getText: function (key) {
        return l10n[lang][key]
    },
    pulse: function (props) {
        if (!is_adwords) {
            var obj = props.targets,
                startScale = props.scale_1,
                finishScale = props.scale_2;
            anime.remove(obj), obj.scaleXY = startScale, obj.scale.set(startScale), anime({
                targets: obj,
                scaleXY: [{
                    value: finishScale,
                    duration: 800,
                    delay: 100
                }, {
                    value: startScale,
                    duration: 800
                }],
                loop: !0,
                update: function () {
                    obj.scale.set(obj.scaleXY)
                },
                easing: "linear"
            })
        }
    },
    initFade: function () {
        var color = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            fade = new PIXI.Graphics,
            maxSize = Math.max(viewPortConfig.size[0], viewPortConfig.size[1]),
            fill = color ? "0x" + color : "0x000000";
        return fade.beginFill(fill), fade.drawRect(0, 0, maxSize, maxSize), fade.alpha = 0, fade
    },
    getOffset: function (target, start) {
        return target.toLocal(start.parent.toGlobal(start.position))
    }
}
export default util;