import Sprite from '../Playable/Core/Sprite.js';
import Animation from '../Playable/Core/Animation.js';
import Animations from '../Animations.js';

class Rain extends Sprite {
    setup() {
        _get(Rain.prototype.__proto__ || Object.getPrototypeOf(Rain.prototype), "setup", this).call(this),
            this.graphics = new PIXI.Graphics,
            this.addChild(this.graphics),
            this.run()
    }
    hide() {
        this.stop()
    }
    run() {
        var _this2 = this;
        this.startAnimation(),
            this.config.time && (this.timer = setTimeout(function () {
                _this2.timer = null,
                    _this2.stop()
            }, this.config.time))
    }
    stop() {
        this.isStop = !0
    }
    startAnimation() {
        var _this3 = this;
        this.animation = Animation.create(this, {
            time: 1e3,
            loop: !0,
            autoStart: !0,
            on: {
                update: function () {
                    _this3.update()
                }
            }
        })
    }
    stopAnimation() {
        this.animation && this.animation.stop().remove()
    }
    update() {
        var _this4 = this;
        this.isStop || this.initParticles();
        var isHaveActive = void 0;
        this.graphics.clear(),
            this.particles.forEach(function (particle, i) {
                if (!particle.isActive) {
                    if (_this4.isStop)
                        return;
                    particle.isActive = !0,
                        particle.x = particle.origPosition.x,
                        particle.y = -Math.random() * (2 * _this4.getHeightStage())
                }
                particle.y > _this4.getHeightStage() - particle.heightBottom ? particle.isActive = !1 : (isHaveActive = !0,
                    _this4.displaceParticle(particle),
                    _this4.drawParticle(particle))
            }),
            this.isStop && !isHaveActive && this.stopAnimation()
    }
    displaceParticle(particle) {
        particle.x += this.config.dropStep.x,
            particle.y += this.config.dropStep.y
    }
    drawParticle(particle) {
        this.graphics.lineStyle(particle.dropWidth, this.config.dropColor),
            this.graphics.moveTo(particle.x, particle.y);
        var k = Math.hypot(this.config.dropStep.x, this.config.dropStep.y) / particle.dropLength;
        this.graphics.lineTo(particle.x + this.config.dropStep.x / k, particle.y + this.config.dropStep.y / k)
    }
    initParticles() {
        this.particles = this.particles || [];
        var quantity = this.getQuantityParticles();
        if (!(this.particles.length >= quantity))
            for (var particlesLength = this.particles.length, availableСolumns = particlesLength / this.config.particleDensity, i = 0; i < quantity - particlesLength; i++) {
                var x = (availableСolumns + Math.floor(i / this.config.particleDensity)) * this.config.columnWidth;
                this.particles.push(this.getConfigParticle(x))
            }
    }
    getConfigParticle(baseX) {
        var minDropLength = Math.min(this.config.dropLength.max, this.config.dropLength.min)
            , minDropWidth = Math.min(this.config.dropWidth.max, this.config.dropWidth.min);
        return {
            origPosition: {
                x: baseX + Math.random() * this.config.columnWidth,
                y: -Math.random() * (5 * this.getHeightStage())
            },
            heightBottom: 100 * Math.random(),
            dropLength: Math.round((this.config.dropLength.max - minDropLength) * Math.random() + minDropLength),
            dropWidth: Math.round((this.config.dropWidth.max - minDropWidth) * Math.random() + minDropWidth)
        }
    }
    getQuantityParticles() {
        var width = this.getWidthStage();
        return Math.ceil(width / this.config.columnWidth * this.config.particleDensity)
    }
    getWidthStage() {
        return this.config.width || this.app.width
    }
    getHeightStage() {
        return Math.max(this.app.origWidth, this.app.origHeight)
    }
    getDefaultConfig(config) {
        var position = Object.assign({}, config.position || {});
        return Object.assign(_get(Rain.prototype.__proto__ || Object.getPrototypeOf(Rain.prototype), "getDefaultConfig", this).call(this, config), {
            columnWidth: 10,
            dropStep: {
                x: -5,
                y: 30
            },
            dropLength: {
                max: 20,
                min: 10
            },
            dropWidth: {
                max: 3,
                min: 1
            },
            dropColor: 16777215,
            particleDensity: 3,
            position: position
        })
    }
}

export default Rain;