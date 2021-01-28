import * as PIXI from 'pixi.js';
import Animation from '../Core/Animation';


class Confetti extends PIXI.Graphics {
    constructor(config, app) {
        this.app = app;
        this.name = config.name;
        this.init();
    }
    init() {
        this.W = this.app.width,
            this.H = this.app.height,
            this.mp = 100,
            this.particles = [],
            this.angle = 0,
            this.tiltAngle = 0,
            this.confettiActive = !0,
            this.animationComplete = !0,
            this.reactivationTimerHandler = -1
    }
    onResize() {
        this.W = this.app.width,
            this.H = this.app.height,
            this.parent.toLocal(new PIXI.Point, null, this.position)
    }
    initializeConfetti() {
        this.particles = [],
            this.animationComplete = !1;
        for (var colors = this.getColors(), i = 0; i < this.mp; i++)
            this.particles.push(this.createParticle(colors[i % colors.length]))
    }
    start(time) {
        var _this2 = this;
        this.initializeConfetti(),
            this.animationComplete || (this.animation = Animation.create(this, {
                from: {
                    count: 0
                },
                to: {
                    count: 100
                },
                time: 1e3,
                loop: !0,
                on: {
                    update: function () {
                        _this2.update()
                    }
                }
            }).start()),
            setTimeout(function () {
                _this2.deactivateConfetti()
            }, time)
    }
    update() {
        if (!this.animationComplete) {
            var remainingFlakes = 0;
            this.angle += .01,
                this.tiltAngle += .1,
                this.clear();
            for (var i = 0; i < this.mp; i++) {
                var particle = this.particles[i];
                !this.confettiActive && particle.y < -15 ? particle.y = this.H + 250 : (particle.y <= this.H && remainingFlakes++ ,
                    this.stepParticle(particle, i),
                    this.drawParticle(particle),
                    this.checkForReposition(particle, i))
            }
            0 === remainingFlakes && this.stopConfetti()
        }
    }
    createParticle(colorOptions) {
        return {
            x: Math.random() * this.W,
            y: -Math.random() * this.H,
            r: 10 + 30 * Math.random(),
            d: Math.random() * this.mp + 10,
            colorOptions: colorOptions,
            tilt: Math.floor(10 * Math.random()) - 10,
            tiltAngleIncremental: .07 * Math.random() + .05,
            tiltAngle: 0
        }
    }
    stepParticle(particle, particleIndex) {
        particle.tiltAngle += particle.tiltAngleIncremental,
            particle.y += (Math.cos(this.angle + particle.d) + 3 + particle.r / 2) / 2,
            particle.x += Math.sin(this.angle),
            particle.tilt = 15 * Math.sin(particle.tiltAngle - particleIndex / 3),
            particle.color = 0 < particle.tilt ? particle.colorOptions.main : particle.colorOptions.alt
    }
    drawParticle(particle) {
        this.lineStyle(particle.r / 2, particle.color),
            this.moveTo(particle.x + particle.tilt + particle.r / 4, particle.y),
            this.lineTo(particle.x + particle.tilt, particle.y + particle.tilt + particle.r / 4)
    }
    checkForReposition(particle, index) {
        (particle.x > this.W + 20 || particle.x < -20 || particle.y > this.H) && this.confettiActive && (0 < index % 5 || index % 2 == 0 ? this.repositionParticle(particle, Math.random() * this.W, -10, Math.floor(10 * Math.random()) - 10) : 0 < Math.sin(this.angle) ? this.repositionParticle(particle, -5, Math.random() * this.H, Math.floor(10 * Math.random()) - 10) : this.repositionParticle(particle, this.W + 5, Math.random() * this.H, Math.floor(10 * Math.random()) - 10))
    }
    repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
        particle.x = xCoordinate,
            particle.y = yCoordinate,
            particle.tilt = tilt
    }
    clearTimers() {
        clearTimeout(this.reactivationTimerHandler),
            this.animation.stop()
    }
    deactivateConfetti() {
        this.confettiActive = !1
    }
    stopConfetti() {
        this.animationComplete = !0,
            this.clear(),
            this.clearTimers()
    }
    restartConfetti() {
        var _this3 = this;
        this.stopConfetti(),
            this.reactivationTimerHandler = setTimeout(function () {
                _this3.confettiActive = !0,
                    _this3.animationComplete = !1,
                    _this3.initializeConfetti()
            }, 100)
    }
    getColors() {
        return [{
            main: 2003199,
            alt: 4620980
        }, {
            main: 7048739,
            alt: 5597999
        }, {
            main: 16766720,
            alt: 12433259
        }, {
            main: 16761035,
            alt: 14184595
        }, {
            main: 11393254,
            alt: 11584734
        }, {
            main: 15631086,
            alt: 14315734
        }, {
            main: 10025880,
            alt: 10145074
        }, {
            main: 16032864,
            alt: 13468991
        }, {
            main: 13789470,
            alt: 10506797
        }, {
            main: 14423100,
            alt: 11674146
        }]
    }
}
}
var Confetti = function (_PIXI$Graphics) {
    function Confetti(config, app) {
        var _ret;
        !function (instance, Constructor) {
            if (!(instance instanceof Constructor))
                throw new TypeError("Cannot call a class as a function")
        }(this, Confetti);
        var _this = _possibleConstructorReturn(this, (Confetti.__proto__ || Object.getPrototypeOf(Confetti)).call(this));
        return _this.app = app,
            _this.name = config.name,
            _this.init(),
            _possibleConstructorReturn(_ret = _this, _ret)
    }
    return function (subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass)
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
            superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
    }(Confetti, PIXI.Graphics),
        _createClass(Confetti, []),
        Confetti
}();
export default Confetti;