class SuperApp {
    constructor(applicationClass, props) {
        this.applicationClass = applicationClass;
        this.props = props;
    }
    init(data = {}) {
        this.setIsIOS();
        window.is_adwords = "undefined" != typeof is_adwords;
        this.app = new this.applicationClass(this.props);
        data.before && data.before();
        this.isDapi || (this.resize(this.screenSize()), this.addEventResize());
        this.app.run();
        this.addEventFirstAction();
    }
    skipAd() {
        this.app.skipAd()
    }
    setIsIOS() {
        if (!window.is_ios && "boolean" != typeof window.is_ios) {
            var nav = navigator.userAgent || navigator.vendor || window.opera;
            window.is_ios = (/iPad|iPhone|iPod/.test(nav) || /Intel Mac/.test(nav)) && !window.MSStream
        }
    }
    addEventFirstAction() {
        function firstAction() {
            window.removeEventListener("touchstart", firstAction),
                window.removeEventListener("mousedown", firstAction),
                "undefined" != typeof firstUserAction && firstUserAction()
        }
        window.addEventListener("touchstart", firstAction),
            window.addEventListener("mousedown", firstAction)
    }
    addEventResize() {
        var _this = this;
        window.addEventListener("orientationchange", function () {
                _this.resize(_this.screenSize())
            }),
            window.addEventListener("resize", function () {
                _this.resize(_this.screenSize())
            })
    }
    resize(screenSize) {
        var _this2 = this;
        this.isNotFirstResize ? (this.resizeTimeout && clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function () {
                _this2.app.resizeApp(screenSize.width, screenSize.height)
            }, 50)) : (this.isNotFirstResize = !0,
            this.app.resizeApp(screenSize.width, screenSize.height))
    }
    screenSize() {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }

    isDapi() {
        return "undefined" != typeof dapi && void 0 !== dapi.getScreenSize
    }
}

export default SuperApp