! function (e) {
    function t(t) {
        for (var n, o, i = t[0], a = t[1], c = 0, s = []; c < i.length; c++) o = i[c], Object.prototype.hasOwnProperty.call(r, o) && r[o] && s.push(r[o][0]), r[o] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (u && u(t); s.length;) s.shift()()
    }
    var n = {},
        r = {
            0: 0
        };

    function o(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.e = function (e) {
        var t = [],
            n = r[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var i = new Promise((function (t, o) {
                    n = r[e] = [t, o]
                }));
                t.push(n[2] = i);
                var a, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, o.nc && c.setAttribute("nonce", o.nc), c.src = function (e) {
                    return o.p + "" + e + ".playable-sdk.js"
                }(e);
                var u = new Error;
                a = function (t) {
                    c.onerror = c.onload = null, clearTimeout(s);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var o = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")", u.name = "ChunkLoadError", u.type = o, u.request = i, n[1](u)
                        }
                        r[e] = void 0
                    }
                };
                var s = setTimeout((function () {
                    a({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = a, document.head.appendChild(c)
            } return Promise.all(t)
    }, o.m = e, o.c = n, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o.oe = function (e) {
        throw console.error(e), e
    };
    var i = window.webpackJsonp = window.webpackJsonp || [],
        a = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var c = 0; c < i.length; c++) t(i[c]);
    var u = a;
    o(o.s = 184)
}([function (e, t, n) {
    "use strict";
    var r = n(49),
        o = n(26),
        i = (n(52), n(17)),
        a = (n(54), n(13), n(173), n(2), n(147), n(35), n(140), n(18));

    function c(e) {
        return function (t) {
            var n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === t) return t;
            if ("number" == typeof t) n = e(t);
            else if (t.endsWith("px")) n = e(Number(t.slice(0, -2)));
            else try {
                var o = parseInt(t);
                o.toString() === t && (n = e(o))
            } catch (e) {}
            return void 0 === n ? t : r ? "".concat(n, "px") : n
        }
    }
    var u = c((function (e) {
        return e / 375 * Object(a.a)().shortLength
    }));

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return u(e, t)
    }
    c((function (e) {
        return e / 375 * Object(a.a)().longLength
    }));
    c((function (e) {
        return e / 375 * Object(a.a)().width
    }));
    c((function (e) {
        return e / 375 * Object(a.a)().height
    }));
    var f = n(59);

    function l(e) {
        var t = document.createElement("div");
        t.innerHTML = e;
        var n = t.children.length;
        if (0 === n || n > 1) throw new Error("MUST HAVE ROOT ELEMENT");
        return t.children[0]
    }
    var d = n(76),
        p = (n(32), function (e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "好的",
                r = "alert-btn-".concat(Math.floor(1e6 * Math.random())),
                o = '<div style="width:100%;height:100%;position:fixed;top:0;left:0;z-index:999999;transition:transform .4s ease-in-out;">\n        <div style="width:50%;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:12px;background-color:white;box-shadow:2px 2px 12px 1px #999;border-radius:4px;">\n            <div style="word-break:break-all;">'.concat(e, '</div>\n            <div style="text-align:right;padding-top:12px;"><span class="').concat(r, '" style="color:#0088ff">').concat(n, "</span></div>\n        </div>\n    </div>"),
                i = l(o);
            document.body.appendChild(i);
            var a = function e() {
                var t;
                null === (t = document.querySelector(".".concat(r))) || void 0 === t || t.removeEventListener("touchend", e), i.style.transform = "scale(0)", setTimeout((function () {
                    i.remove()
                }), 500)
            };
            null === (t = document.querySelector(".".concat(r))) || void 0 === t || t.addEventListener("touchend", a)
        });
    n.d(t, "b", (function () {
        return r.b
    })), n.d(t, "u", (function () {
        return r.j
    })), n.d(t, "w", (function () {
        return r.k
    })), n.d(t, "c", (function () {
        return r.c
    })), n.d(t, "f", (function () {
        return r.f
    })), n.d(t, "s", (function () {
        return r.i
    })), n.d(t, "j", (function () {
        return r.g
    })), n.d(t, "n", (function () {
        return r.h
    })), n.d(t, "h", (function () {
        return o.b
    })), n.d(t, "q", (function () {
        return i.f
    })), n.d(t, "o", (function () {
        return i.c
    })), n.d(t, "l", (function () {
        return i.a
    })), n.d(t, "r", (function () {
        return i.g
    })), n.d(t, "m", (function () {
        return i.b
    })), n.d(t, "p", (function () {
        return i.e
    })), n.d(t, "x", (function () {
        return s
    })), n.d(t, "k", (function () {
        return a.b
    })), n.d(t, "t", (function () {
        return a.c
    })), n.d(t, "i", (function () {
        return a.a
    })), n.d(t, "g", (function () {
        return f.b
    })), n.d(t, "d", (function () {
        return l
    })), n.d(t, "v", (function () {
        return d.c
    })), n.d(t, "e", (function () {
        return d.b
    })), n.d(t, "a", (function () {
        return p
    }))
}, function (e, t, n) {
    "use strict";
    n(30), n(48), n(87);
    var r = location.search.indexOf("no_playable_click=1") > -1;

    function o(e) {
        r = e
    }
    n.d(t, "g", (function () {
        return i
    })), n.d(t, "e", (function () {
        return a
    })), n.d(t, "c", (function () {
        return c
    })), n.d(t, "h", (function () {
        return u
    })), n.d(t, "d", (function () {
        return s
    })), n.d(t, "f", (function () {
        return f
    })), n.d(t, "b", (function () {
        return l
    })), n.d(t, "a", (function () {
        return d
    })), n.d(t, "i", (function () {
        return r
    })), n.d(t, "j", (function () {
        return o
    }));
    var i = /[\?&]is_test_tool=1/.test(location.search),
        a = /[\?&]is_playable_test_page=1/.test(location.search),
        c = /[\?&]is_audit_test_page=1/.test(location.search),
        u = !1,
        s = location.search.indexOf("is_dynamic_iframe=1") > -1,
        f = location.search.indexOf("snapshot_detect=1") > -1,
        l = [/^(.+\.)?snssdk\.com/, /^(.+\.)?pstatp\.com\/obj\/union-fe-nc\//, /^https?:\/\/s3.pstatp.com\//],
        d = "/playable/"
}, function (e, t, n) {
    var r = n(29),
        o = n(158),
        i = Object.prototype;
    o !== i.toString && r(i, "toString", o, {
        unsafe: !0
    })
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return s
    })), n.d(t, "a", (function () {
        return f
    }));
    n(30), n(50);
    var r = n(19),
        o = n(59),
        i = n(77),
        a = n(53),
        c = n(60),
        u = n(31),
        s = {
            sdk_playable_show: 0,
            custom_start_play_playable: 0,
            custom_load_main_scene: 0,
            sdk_start_play_playable: 0,
            sdk_playable_load_main_scene: 0
        };

    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        u.b.emit();
        var f, l = r.a[e] || r.b[e] || r.c[e];
        f = l.name, s.hasOwnProperty(f) && (s[f] = 1),
            function (e) {
                return "clickArea" === e
            }(e) ? Object(i.a)(t, !0) : l ? ("Object" !== Object(o.b)(t) && console.error("eventParams 必须是 Object"), function (e, t) {
                "enterSection" === e && Object(a.b)(t.section || "undefined");
                t.hasOwnProperty("current_section") || (t.current_section = a.a);
                (function (e) {
                    return ["clickDownloadBar", "clickResurrection", "clickContent", "clickFinishDownloadBar", "clickFinishContent"].indexOf(e) > -1
                })(e) && !0 !== t.no_click_area && Object(i.a)(t, !1)
            }(e, t), Object(c.a)(e, t, n)) : console.error('internalSendEvent 事件名称 "'.concat(e, '" 不存在'))
    }
}, function (e, t, n) {
    "use strict";
    n(21), n(2), n(5), n(24), n(25), n(9);
    var r = function (e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    };

    function o(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    /*!
     * @bridge/base v1.0.0-alpha.13
     * (c) 2020 
     */
    var i;
    ! function (e) {
        e[e.Failure = 0] = "Failure", e[e.Success = 1] = "Success", e[e.Unauthorized = -1] = "Unauthorized", e[e.NotExist = -2] = "NotExist"
    }(i || (i = {}));
    var a = "__JSBridgeIframe__",
        c = "__JSBridgeIframe_SetResult__",
        u = 1023,
        s = "1.0.0-alpha.13",
        f = "nativeapp://",
        l = "dispatch_message/",
        d = "private/setresult/SCENE_FETCHQUEUE",
        p = function () {
            function e(e) {
                this.version = e.version || s, this.nativeMethodInvoker = e.nativeMethodInvoker, this.nativeEventListener = e.nativeEventListener, this.scheme = e.scheme || f, this.dispatchMessagePath = e.dispatchMessagePath || l, this.setResultPath = e.setResultPath || d, this.dispatchMessageIFrameId = e.dispatchMessageIFrameId || a, this.setResultIFrameId = e.setResultIFrameId || c, this.listenNativeEvent = !0 === e.listenNativeEvent, this.callbackId = u, this.callbackMap = {}, this.eventMap = {}, this.javascriptMessageQueue = [], "undefined" != typeof window && this.tryCreateIFrames()
            }
            return e.prototype.call = function (e, t, n, r) {
                void 0 === r && (r = this.version);
                var o, i = this.version;
                if (e && "string" == typeof e) {
                    "object" != typeof t && (t = {}), "string" == typeof r ? i = r || this.version : "object" == typeof r && (o = r.namespace, i = r.sdkVersion || this.version);
                    var a = {
                        func: e,
                        params: t,
                        JSSDK: i,
                        __msg_type: "call",
                        namespace: o
                    };
                    if ("function" == typeof n) {
                        var c = this.registerCallback(n);
                        a.__callback_id = c
                    }
                    window.parent !== window && (a.__iframe_url = window.location.href), this.sendMessageToNative(a)
                }
            }, e.prototype.on = function (e, t, n) {
                if (void 0 === n && (n = !1), e && "string" == typeof e && "function" == typeof t) {
                    var r = this.registerCallback(t);
                    return this.eventMap[e] = this.eventMap[e] || {}, this.eventMap[e][r] = {
                        once: n
                    }, this.listenNativeEvent && (this.nativeEventListener ? this.nativeEventListener(e) : this.call("addEventListener", {
                        name: e
                    }, null, {
                        sdkVersion: 1
                    })), r
                }
            }, e.prototype.once = function (e, t) {
                return this.on(e, t, !0)
            }, e.prototype.off = function (e, t) {
                if (!e || "string" != typeof e) return !0;
                var n = this.eventMap[e];
                return !n || "object" != typeof n || !n.hasOwnProperty(t) || (this.deregisterCallback(t), delete n[t], !0)
            }, e.prototype.trigger = function (e, t) {
                return this.handleMessageFromNative({
                    __msg_type: "event",
                    __params: t,
                    __event_id: e
                })
            }, e.prototype.handleMessageFromNative = function (e) {
                var t = this,
                    n = e.__params,
                    r = String(e.__callback_id),
                    o = String(e.__event_id || ""),
                    i = e.__msg_type;
                this.callbackMap[r] ? i = "callback" : this.eventMap[r] && (i = "event", o = o || r);
                var a = {
                    __err_code: "cb404"
                };
                switch (i) {
                    case "callback":
                        var c = this.callbackMap[r];
                        "function" == typeof c && (a = c(n)), this.deregisterCallback(r);
                        break;
                    case "event":
                        var u = this.eventMap[o];
                        u && "object" == typeof u && Object.keys(u).forEach((function (e) {
                            var r = t.callbackMap[e],
                                o = u[e];
                            "function" == typeof r && (a = r(n)), o && o.once && (t.deregisterCallback(e), delete u[e])
                        }))
                }
                return a
            }, e.prototype.fetchJavaScriptMessageQueue = function () {
                var e = JSON.stringify(this.javascriptMessageQueue),
                    t = btoa(unescape(encodeURIComponent(e)));
                return this.setResultIFrame && this.javascriptMessageQueue.length > 0 && (this.setResultIFrame.src = "" + this.scheme + this.setResultPath + "&" + t), this.javascriptMessageQueue.splice(0, this.javascriptMessageQueue.length), e
            }, e.prototype.sendMessageToNative = function (e) {
                if (e.JSSDK && this.nativeMethodInvoker) {
                    var t = this.nativeMethodInvoker(e);
                    if (t) {
                        var n = JSON.parse(t);
                        this.handleMessageFromNative(n)
                    }
                } else {
                    if (this.javascriptMessageQueue.push(e), !this.dispatchMessageIFrame) return void this.tryCreateIFrames();
                    this.dispatchMessageIFrame.src = "" + this.scheme + this.dispatchMessagePath
                }
            }, e.prototype.registerCallback = function (e) {
                var t = String(this.callbackId++);
                return this.callbackMap[t] = e, t
            }, e.prototype.deregisterCallback = function (e) {
                delete this.callbackMap[e]
            }, e.prototype.tryCreateIFrames = function () {
                this.dispatchMessageIFrame = this.createIFrame(this.dispatchMessageIFrameId), this.setResultIFrame = this.createIFrame(this.setResultIFrameId)
            }, e.prototype.createIFrame = function (e) {
                var t = document.getElementById(e);
                return t && "IFRAME" === t.tagName || ((t = document.createElement("iframe")).style.display = "none", t.id = e, document.documentElement.appendChild(t)), t
            }, e
        }(),
        v = "1.0.0-alpha.26",
        g = "undefined" != typeof window ? window.navigator.userAgent : "",
        h = (!!g.match(/(newsarticle|videoarticle|lv|faceu|ulike|beauty_me_|faceu-os|ulike-os|beauty_me_oversea_|retouch)\/([\d.]+)/i) || /super|automobile/gi.test(g)) && !/webcast/gi.test(g),
        y = !!g.match(/(faceu)\/([\d.]+)/i) || /gsdk/gi.test(g),
        b = !!g.match(/ttad\/0/i),
        m = /super/gi.test(g),
        w = "undefined" != typeof window ? window : {},
        O = "undefined" != typeof window ? window : {};

    function j() {
        var e;
        if (h) return O.JSBridge && O.JSBridge.on ? e = O.JSBridge.on : O.JS2NativeBridge && O.JS2NativeBridge.on ? e = function (e) {
            var t = {
                JSSDK: v,
                __msg_type: "event",
                __callback_id: e,
                func: e
            };
            O.JS2NativeBridge.on(e, JSON.stringify(t))
        } : O.webkit && O.webkit.messageHandlers && O.webkit.messageHandlers.onMethodParams ? e = function (e) {
            var t = {
                JSSDK: v,
                __msg_type: "event",
                __callback_id: e,
                func: e
            };
            O.webkit.messageHandlers.onMethodParams.postMessage(t)
        } : O.onMethodParams && (e = function (e) {
            var t = {
                JSSDK: v,
                __msg_type: "event",
                __callback_id: e,
                func: e
            };
            return O.onMethodParams(e, t)
        }), e
    }
    var _ = function (e) {
            function t() {
                var t = e.call(this, {
                    version: v,
                    scheme: "bytedance://",
                    listenNativeEvent: !0,
                    dispatchMessageIFrameId: "__JSBridgeIframe_1.0__",
                    setResultIFrameId: "__JSBridgeIframe_SetResult_1.0__",
                    nativeEventListener: j()
                }) || this;
                return t.publicApi = {
                    call: t.call.bind(t),
                    on: t.on.bind(t),
                    once: t.once.bind(t),
                    off: t.off.bind(t),
                    trigger: t.trigger.bind(t),
                    _fetchQueue: t.fetchJavaScriptMessageQueue.bind(t),
                    _handleMessageFromToutiao: t.handleMessageFromNative.bind(t)
                }, t
            }
            return o(t, e), t.prototype.exposePublicApiToGlobal = function () {
                w.ToutiaoJSBridge = Object.assign(w.ToutiaoJSBridge || {}, this.publicApi)
            }, t
        }(p),
        x = new(function (e) {
            function t(t) {
                var n, r = e.call(this, {
                    version: v,
                    nativeMethodInvoker: (O.JS2NativeBridge && O.JS2NativeBridge._invokeMethod ? n = function (e) {
                        return O.JS2NativeBridge._invokeMethod(JSON.stringify(e))
                    } : O.ToutiaoJSBridge && O.ToutiaoJSBridge.invokeMethod ? n = function (e) {
                        return O.ToutiaoJSBridge.invokeMethod(JSON.stringify(e))
                    } : O.JS2NativeBridge && O.JS2NativeBridge.call ? n = function (e) {
                        return O.JS2NativeBridge.call(e.func, JSON.stringify(e))
                    } : O.webkit && O.webkit.messageHandlers && O.webkit.messageHandlers.callMethodParams ? n = function (e) {
                        O.webkit.messageHandlers.callMethodParams.postMessage(e)
                    } : O.callMethodParams && (n = function (e) {
                        return O.callMethodParams(e.func, e)
                    }), n),
                    nativeEventListener: j(),
                    scheme: m ? "bytedance://" : h ? "nativeapp://" : O.JSBridge && O.JSBridge._invokeMethod ? "nativeapp://" : "bytedance://",
                    listenNativeEvent: h
                }) || this;
                return r.toutiaoLegacyJSB = t, r.publicApi = {
                    call: r.call.bind(r),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    trigger: r.trigger.bind(r),
                    _fetchQueue: r.fetchJavaScriptMessageQueue.bind(r),
                    _handleMessageFromApp: r.handleMessageFromNative.bind(r),
                    _handleMessageFromToutiao: r.handleMessageFromNative.bind(r)
                }, r
            }
            return o(t, e), t.prototype.call = function (t, n, r, o) {
                void 0 === o && (o = v), this.isLegacyCall(t) ? this.toutiaoLegacyJSB.call(t, n, r, o) : e.prototype.call.call(this, t, n, r, o)
            }, t.prototype.on = function (t, n, r) {
                return void 0 === r && (r = !1), this.isLegacyCall(t) ? this.toutiaoLegacyJSB.on(t, n, r) : e.prototype.on.call(this, t, n, r)
            }, t.prototype.once = function (t, n) {
                return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.once(t, n) : e.prototype.once.call(this, t, n)
            }, t.prototype.off = function (t, n) {
                return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.off(t, n) : e.prototype.off.call(this, t, n)
            }, t.prototype.trigger = function (t, n) {
                return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.trigger(t, n) : e.prototype.trigger.call(this, t, n)
            }, t.prototype.exposePublicApiToGlobal = function () {
                w.JSBridge = Object.assign(w.JSBridge || {}, this.publicApi), w.Native2JSBridge = Object.assign(w.Native2JSBridge || {}, this.publicApi), m ? w.ToutiaoJSBridge = Object.assign(w.ToutiaoJSBridge || {}, this.publicApi) : (h || b) && this.toutiaoLegacyJSB ? this.toutiaoLegacyJSB.exposePublicApiToGlobal() : w.ToutiaoJSBridge = Object.assign(w.ToutiaoJSBridge || {}, this.publicApi), Object.defineProperties(w, {
                    JSBridge: {
                        writable: !1
                    },
                    Native2JSBridge: {
                        writable: !1
                    },
                    ToutiaoJSBridge: {
                        writable: !1
                    }
                }), Object.freeze(w.JSBridge), Object.freeze(w.Native2JSBridge), Object.freeze(w.ToutiaoJSBridge)
            }, t.prototype.isLegacyCall = function (e) {
                return !(!e || "string" != typeof e || !this.toutiaoLegacyJSB) && (!!b || !y && !m && (h && e.indexOf(".") < 0))
            }, t
        }(p))(new _);
    try {
        x.exposePublicApiToGlobal()
    } catch (e) {
        console.warn(e.message)
    }
    var E, M, S = x.publicApi,
        k = (n(11), n(50), n(22), n(12), n(13), n(35), 0);

    function N() {
        return (k += 1).toString()
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }! function (e) {
        e[e.jsbridge = 0] = "jsbridge"
    }(E || (E = {})),
    function (e) {
        e[e.ready = 0] = "ready", e[e.call = 1] = "call", e[e.on = 2] = "on"
    }(M || (M = {}));
    var D, T = function () {
            function e() {
                var t = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), A(this, "isReady", !1), A(this, "beforeReadyQueue", []), A(this, "callRecords", {}), A(this, "onRecords", {}), A(this, "askIsReady", (function () {
                    t.isReady || (t.send({
                        type: M.ready,
                        id: N()
                    }), setTimeout((function () {
                        t.askIsReady()
                    }), 300))
                })), A(this, "call", (function (e, n, r, o) {
                    t.send({
                        type: M.call,
                        id: N(),
                        name: e,
                        params: n
                    }, r, o)
                })), A(this, "on", (function (e, n, r) {
                    var o = N();
                    return t.send({
                        type: M.on,
                        id: o,
                        name: e
                    }, n, r), o
                })), A(this, "off", (function (e, n) {
                    var r = t.onRecords[n];
                    return !(!r || r.name !== e) && (t.onRecords[n] = void 0, !0)
                })), window.addEventListener("message", (function (e) {
                    var n = e.data;
                    t.receive(n.messageData)
                })), this.askIsReady()
            }
            var t, n, r;
            return t = e, (n = [{
                key: "receive",
                value: function (e) {
                    if (e.type === M.ready) this.isReady = !0, this.clearBeforeReadyQueue();
                    else if (e.type === M.call) {
                        var t = e.id,
                            n = e.data,
                            r = this.callRecords[t];
                        if (!r) return void console.error("No call record for ".concat(t));
                        r.callback.call(window, n), this.callRecords[t] = void 0
                    } else if (e.type === M.on) {
                        var o = e.id,
                            i = e.data,
                            a = this.onRecords[o];
                        if (!a) return void console.error("No on record for ".concat(o));
                        a.callback.call(window, i), a.once && (this.onRecords[o] = void 0)
                    }
                }
            }, {
                key: "send",
                value: function (e, t, n) {
                    var r = {
                        messageType: E.jsbridge,
                        messageData: e
                    };
                    e.type !== M.ready ? t && (this.isReady ? (e.type === M.call ? this.callRecords[e.id] = {
                        name: e.name,
                        callback: t
                    } : e.type === M.on && (this.onRecords[e.id] = {
                        name: e.name,
                        callback: t,
                        once: n.once
                    }), window.parent.postMessage(r, "*")) : this.beforeReadyQueue.push({
                        message: e,
                        callback: t,
                        options: n
                    })) : window.parent.postMessage(r, "*")
                }
            }, {
                key: "clearBeforeReadyQueue",
                value: function () {
                    var e = this;
                    this.beforeReadyQueue.forEach((function (t) {
                        var n = t.message,
                            r = t.callback,
                            o = t.options;
                        e.send(n, r, o)
                    })), this.beforeReadyQueue = []
                }
            }]) && I(t.prototype, n), r && I(t, r), e
        }(),
        L = n(1);
    D = L.d ? new T : S, n.d(t, "a", (function () {
        return R
    })), n.d(t, "b", (function () {
        return C
    }));
    var P = {},
        R = function (e, t, n) {
            var r, o, i, a = arguments;
            return regeneratorRuntime.async((function (c) {
                for (;;) switch (c.prev = c.next) {
                    case 0:
                        if (r = a.length > 3 && void 0 !== a[3] ? a[3] : 3e3, !n) {
                            c.next = 4;
                            break
                        }
                        if (!P.hasOwnProperty(e)) {
                            c.next = 4;
                            break
                        }
                        return c.abrupt("return", P[e]);
                    case 4:
                        return i = new Promise((function (n) {
                            D.call(e, t, (function (e) {
                                "string" == typeof e && (e = JSON.parse(e)), n(e)
                            }))
                        })), c.next = 7, regeneratorRuntime.awrap(Promise.race([i, new Promise((function (e) {
                            setTimeout((function () {
                                return e(void 0)
                            }), r)
                        }))]));
                    case 7:
                        return (o = c.sent) && (P[e] = o), c.abrupt("return", o);
                    case 10:
                    case "end":
                        return c.stop()
                }
            }))
        },
        C = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = D.on(e, t, n);
            return function () {
                D.off(e, r)
            }
        }
}, function (e, t, n) {
    "use strict";
    var r, o, i, a, c = n(6),
        u = n(61),
        s = n(7),
        f = n(57),
        l = n(159),
        d = n(29),
        p = n(125),
        v = n(55),
        g = n(68),
        h = n(97),
        y = n(15),
        b = n(81),
        m = n(98),
        w = n(45),
        O = n(99),
        j = n(100),
        _ = n(129),
        x = n(130).set,
        E = n(160),
        M = n(161),
        S = n(162),
        k = n(134),
        N = n(163),
        I = n(56),
        A = n(67),
        D = n(8),
        T = n(101),
        L = D("species"),
        P = "Promise",
        R = I.get,
        C = I.set,
        z = I.getterFor(P),
        B = l,
        F = s.TypeError,
        J = s.document,
        U = s.process,
        Q = v("inspectSource"),
        V = f("fetch"),
        Y = k.f,
        W = Y,
        G = "process" == w(U),
        H = !!(J && J.createEvent && s.dispatchEvent),
        q = A(P, (function () {
            var e = Q(B) !== String(B);
            if (66 === T) return !0;
            if (!e && !G && "function" != typeof PromiseRejectionEvent) return !0;
            if (u && !B.prototype.finally) return !0;
            if (T >= 51 && /native code/.test(B)) return !1;
            var t = B.resolve(1),
                n = function (e) {
                    e((function () {}), (function () {}))
                };
            return (t.constructor = {})[L] = n, !(t.then((function () {})) instanceof n)
        })),
        Z = q || !j((function (e) {
            B.all(e).catch((function () {}))
        })),
        X = function (e) {
            var t;
            return !(!y(e) || "function" != typeof (t = e.then)) && t
        },
        K = function (e, t, n) {
            if (!t.notified) {
                t.notified = !0;
                var r = t.reactions;
                E((function () {
                    for (var o = t.value, i = 1 == t.state, a = 0; r.length > a;) {
                        var c, u, s, f = r[a++],
                            l = i ? f.ok : f.fail,
                            d = f.resolve,
                            p = f.reject,
                            v = f.domain;
                        try {
                            l ? (i || (2 === t.rejection && ne(e, t), t.rejection = 1), !0 === l ? c = o : (v && v.enter(), c = l(o), v && (v.exit(), s = !0)), c === f.promise ? p(F("Promise-chain cycle")) : (u = X(c)) ? u.call(c, d, p) : d(c)) : p(o)
                        } catch (e) {
                            v && !s && v.exit(), p(e)
                        }
                    }
                    t.reactions = [], t.notified = !1, n && !t.rejection && ee(e, t)
                }))
            }
        },
        $ = function (e, t, n) {
            var r, o;
            H ? ((r = J.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), s.dispatchEvent(r)) : r = {
                promise: t,
                reason: n
            }, (o = s["on" + e]) ? o(r) : "unhandledrejection" === e && S("Unhandled promise rejection", n)
        },
        ee = function (e, t) {
            x.call(s, (function () {
                var n, r = t.value;
                if (te(t) && (n = N((function () {
                        G ? U.emit("unhandledRejection", r, e) : $("unhandledrejection", e, r)
                    })), t.rejection = G || te(t) ? 2 : 1, n.error)) throw n.value
            }))
        },
        te = function (e) {
            return 1 !== e.rejection && !e.parent
        },
        ne = function (e, t) {
            x.call(s, (function () {
                G ? U.emit("rejectionHandled", e) : $("rejectionhandled", e, t.value)
            }))
        },
        re = function (e, t, n, r) {
            return function (o) {
                e(t, n, o, r)
            }
        },
        oe = function (e, t, n, r) {
            t.done || (t.done = !0, r && (t = r), t.value = n, t.state = 2, K(e, t, !0))
        },
        ie = function (e, t, n, r) {
            if (!t.done) {
                t.done = !0, r && (t = r);
                try {
                    if (e === n) throw F("Promise can't be resolved itself");
                    var o = X(n);
                    o ? E((function () {
                        var r = {
                            done: !1
                        };
                        try {
                            o.call(n, re(ie, e, r, t), re(oe, e, r, t))
                        } catch (n) {
                            oe(e, r, n, t)
                        }
                    })) : (t.value = n, t.state = 1, K(e, t, !1))
                } catch (n) {
                    oe(e, {
                        done: !1
                    }, n, t)
                }
            }
        };
    q && (B = function (e) {
        m(this, B, P), b(e), r.call(this);
        var t = R(this);
        try {
            e(re(ie, this, t), re(oe, this, t))
        } catch (e) {
            oe(this, t, e)
        }
    }, (r = function (e) {
        C(this, {
            type: P,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = p(B.prototype, {
        then: function (e, t) {
            var n = z(this),
                r = Y(_(this, B));
            return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = G ? U.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && K(this, n, !1), r.promise
        },
        catch: function (e) {
            return this.then(void 0, e)
        }
    }), o = function () {
        var e = new r,
            t = R(e);
        this.promise = e, this.resolve = re(ie, e, t), this.reject = re(oe, e, t)
    }, k.f = Y = function (e) {
        return e === B || e === i ? new o(e) : W(e)
    }, u || "function" != typeof l || (a = l.prototype.then, d(l.prototype, "then", (function (e, t) {
        var n = this;
        return new B((function (e, t) {
            a.call(n, e, t)
        })).then(e, t)
    }), {
        unsafe: !0
    }), "function" == typeof V && c({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function (e) {
            return M(B, V.apply(s, arguments))
        }
    }))), c({
        global: !0,
        wrap: !0,
        forced: q
    }, {
        Promise: B
    }), g(B, P, !1, !0), h(P), i = f(P), c({
        target: P,
        stat: !0,
        forced: q
    }, {
        reject: function (e) {
            var t = Y(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), c({
        target: P,
        stat: !0,
        forced: u || q
    }, {
        resolve: function (e) {
            return M(u && this === i ? B : this, e)
        }
    }), c({
        target: P,
        stat: !0,
        forced: Z
    }, {
        all: function (e) {
            var t = this,
                n = Y(t),
                r = n.resolve,
                o = n.reject,
                i = N((function () {
                    var n = b(t.resolve),
                        i = [],
                        a = 0,
                        c = 1;
                    O(e, (function (e) {
                        var u = a++,
                            s = !1;
                        i.push(void 0), c++, n.call(t, e).then((function (e) {
                            s || (s = !0, i[u] = e, --c || r(i))
                        }), o)
                    })), --c || r(i)
                }));
            return i.error && o(i.value), n.promise
        },
        race: function (e) {
            var t = this,
                n = Y(t),
                r = n.reject,
                o = N((function () {
                    var o = b(t.resolve);
                    O(e, (function (e) {
                        o.call(t, e).then(n.resolve, r)
                    }))
                }));
            return o.error && r(o.value), n.promise
        }
    })
}, function (e, t, n) {
    var r = n(7),
        o = n(51).f,
        i = n(33),
        a = n(29),
        c = n(92),
        u = n(119),
        s = n(67);
    e.exports = function (e, t) {
        var n, f, l, d, p, v = e.target,
            g = e.global,
            h = e.stat;
        if (n = g ? r : h ? r[v] || c(v, {}) : (r[v] || {}).prototype)
            for (f in t) {
                if (d = t[f], l = e.noTargetGet ? (p = o(n, f)) && p.value : n[f], !s(g ? f : v + (h ? "." : "#") + f, e.forced) && void 0 !== l) {
                    if (typeof d == typeof l) continue;
                    u(d, l)
                }(e.sham || l && l.sham) && i(d, "sham", !0), a(n, f, d, e)
            }
    }
}, function (e, t, n) {
    (function (t) {
        var n = function (e) {
            return e && e.Math == Math && e
        };
        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
    }).call(this, n(155))
}, function (e, t, n) {
    var r = n(7),
        o = n(55),
        i = n(80),
        a = n(117),
        c = r.Symbol,
        u = o("wks");
    e.exports = function (e) {
        return u[e] || (u[e] = a && c[e] || (a ? c : i)("Symbol." + e))
    }
}, function (e, t, n) {
    var r = function (e) {
        "use strict";
        var t, n = Object.prototype,
            r = n.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";

        function u(e, t, n, r) {
            var o = t && t.prototype instanceof g ? t : g,
                i = Object.create(o.prototype),
                a = new S(r || []);
            return i._invoke = function (e, t, n) {
                var r = f;
                return function (o, i) {
                    if (r === d) throw new Error("Generator is already running");
                    if (r === p) {
                        if ("throw" === o) throw i;
                        return N()
                    }
                    for (n.method = o, n.arg = i;;) {
                        var a = n.delegate;
                        if (a) {
                            var c = x(a, n);
                            if (c) {
                                if (c === v) continue;
                                return c
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === f) throw r = p, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = d;
                        var u = s(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? p : l, u.arg === v) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            }
                        }
                        "throw" === u.type && (r = p, n.method = "throw", n.arg = u.arg)
                    }
                }
            }(e, n, a), i
        }

        function s(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        e.wrap = u;
        var f = "suspendedStart",
            l = "suspendedYield",
            d = "executing",
            p = "completed",
            v = {};

        function g() {}

        function h() {}

        function y() {}
        var b = {};
        b[i] = function () {
            return this
        };
        var m = Object.getPrototypeOf,
            w = m && m(m(k([])));
        w && w !== n && r.call(w, i) && (b = w);
        var O = y.prototype = g.prototype = Object.create(b);

        function j(e) {
            ["next", "throw", "return"].forEach((function (t) {
                e[t] = function (e) {
                    return this._invoke(t, e)
                }
            }))
        }

        function _(e) {
            var t;
            this._invoke = function (n, o) {
                function i() {
                    return new Promise((function (t, i) {
                        ! function t(n, o, i, a) {
                            var c = s(e[n], e, o);
                            if ("throw" !== c.type) {
                                var u = c.arg,
                                    f = u.value;
                                return f && "object" == typeof f && r.call(f, "__await") ? Promise.resolve(f.__await).then((function (e) {
                                    t("next", e, i, a)
                                }), (function (e) {
                                    t("throw", e, i, a)
                                })) : Promise.resolve(f).then((function (e) {
                                    u.value = e, i(u)
                                }), (function (e) {
                                    return t("throw", e, i, a)
                                }))
                            }
                            a(c.arg)
                        }(n, o, t, i)
                    }))
                }
                return t = t ? t.then(i, i) : i()
            }
        }

        function x(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
                if (n.delegate = null, "throw" === n.method) {
                    if (e.iterator.return && (n.method = "return", n.arg = t, x(e, n), "throw" === n.method)) return v;
                    n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return v
            }
            var o = s(r, e.iterator, n.arg);
            if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, v;
            var i = o.arg;
            return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, v) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
        }

        function E(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function M(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function S(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(E, this), this.reset(!0)
        }

        function k(e) {
            if (e) {
                var n = e[i];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        a = function n() {
                            for (; ++o < e.length;)
                                if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
                            return n.value = t, n.done = !0, n
                        };
                    return a.next = a
                }
            }
            return {
                next: N
            }
        }

        function N() {
            return {
                value: t,
                done: !0
            }
        }
        return h.prototype = O.constructor = y, y.constructor = h, y[c] = h.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, c in e || (e[c] = "GeneratorFunction")), e.prototype = Object.create(O), e
        }, e.awrap = function (e) {
            return {
                __await: e
            }
        }, j(_.prototype), _.prototype[a] = function () {
            return this
        }, e.AsyncIterator = _, e.async = function (t, n, r, o) {
            var i = new _(u(t, n, r, o));
            return e.isGeneratorFunction(n) ? i : i.next().then((function (e) {
                return e.done ? e.value : i.next()
            }))
        }, j(O), O[c] = "Generator", O[i] = function () {
            return this
        }, O.toString = function () {
            return "[object Generator]"
        }, e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, e.values = k, S.prototype = {
            constructor: S,
            reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(M), !e)
                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
            },
            stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;

                function o(r, o) {
                    return c.type = "throw", c.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                        c = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                        var u = r.call(a, "catchLoc"),
                            s = r.call(a, "finallyLoc");
                        if (u && s) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        } else if (u) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
            },
            complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v
            },
            finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), M(n), v
                }
            },
            catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            M(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function (e, n, r) {
                return this.delegate = {
                    iterator: k(e),
                    resultName: n,
                    nextLoc: r
                }, "next" === this.method && (this.arg = t), v
            }
        }, e
    }(e.exports);
    try {
        regeneratorRuntime = r
    } catch (e) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(143);
    r({
        target: "Array",
        proto: !0,
        forced: [].forEach != o
    }, {
        forEach: o
    })
}, function (e, t, n) {
    var r = n(7),
        o = n(142),
        i = n(143),
        a = n(33);
    for (var c in o) {
        var u = r[c],
            s = u && u.prototype;
        if (s && s.forEach !== i) try {
            a(s, "forEach", i)
        } catch (e) {
            s.forEach = i
        }
    }
}, function (e, t, n) {
    var r = n(29),
        o = Date.prototype,
        i = o.toString,
        a = o.getTime;
    new Date(NaN) + "" != "Invalid Date" && r(o, "toString", (function () {
        var e = a.call(this);
        return e == e ? i.call(this) : "Invalid Date"
    }))
}, function (e, t, n) {
    var r = n(10);
    e.exports = !r((function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    var r = n(15);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(String(e) + " is not an object");
        return e
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "d", (function () {
        return c
    })), n.d(t, "f", (function () {
        return u
    })), n.d(t, "c", (function () {
        return s
    })), n.d(t, "a", (function () {
        return f
    })), n.d(t, "g", (function () {
        return l
    })), n.d(t, "b", (function () {
        return d
    })), n.d(t, "e", (function () {
        return p
    }));
    n(30), n(2), n(5), n(9);
    var r, o = n(89),
        i = n(26),
        a = n(1);

    function c() {
        var e = location.hostname;
        return /^[\d\.:]+$/.test(e) || "localhost" === e
    }

    function u() {
        var e;
        return regeneratorRuntime.async((function (t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    if (void 0 === r) {
                        t.next = 2;
                        break
                    }
                    return t.abrupt("return", r);
                case 2:
                    if (!("1" === Object(i.a)("is_landing_page"))) {
                        t.next = 6;
                        break
                    }
                    return r = !1, t.abrupt("return", r);
                case 6:
                    if (!a.d) {
                        t.next = 9;
                        break
                    }
                    return r = !1, t.abrupt("return", r);
                case 9:
                    if (!/open_news(\s|\/|_)(\S)/i.test(navigator.userAgent)) {
                        t.next = 12;
                        break
                    }
                    return r = !0, t.abrupt("return", r);
                case 12:
                    return t.next = 14, regeneratorRuntime.awrap(Object(o.a)(1e3));
                case 14:
                    return e = t.sent, r = !(!e || "open_news" !== e.appName), t.abrupt("return", r);
                case 17:
                case "end":
                    return t.stop()
            }
        }))
    }

    function s() {
        return "http://nativeapp.toutiao.com" == document.referrer || /(NewsSocial|Explore|NewsArticle|NewsInHouse|joke_essay|Joke|VideoInHouse|VideoArticle|live_stream|aweme|TTAD|douyin_lite|aweme_lite|trill)(\s|\/|_)(\S)/i.test(navigator.userAgent)
    }

    function f() {
        return /(aweme|douyin_lite|aweme_lite)(\s|\/|_)(\S)/i.test(navigator.userAgent)
    }

    function l() {
        return /trill(\s|\/|_)(\S)/i.test(navigator.userAgent) || navigator.userAgent.indexOf("musical_ly") > -1
    }

    function d() {
        return f() || l()
    }

    function p() {
        return location.hostname.indexOf("ibytedtos.com") > -1
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return r
    })), n.d(t, "c", (function () {
        return o
    })), n.d(t, "a", (function () {
        return i
    }));
    n(48), n(144);
    var r = function () {
            return !!navigator.userAgent.match(/(Android)\s+([\d.]+)/)
        },
        o = function () {
            return /iPhone|iPad|iPod|iOS/i.test(navigator.userAgent)
        };

    function i() {
        var e = window.innerWidth || screen.availWidth || screen.width,
            t = window.innerHeight || screen.availHeight || screen.height;
        return {
            width: e,
            height: t,
            shortLength: Math.min(e, t),
            longLength: Math.max(e, t)
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "c", (function () {
        return c
    })), n.d(t, "a", (function () {
        return u
    })), n.d(t, "b", (function () {
        return s
    }));
    n(32), n(11), n(75), n(13), n(2), n(147), n(175), n(48), n(35), n(144), n(12);
    var r = function (e, t, n) {
        if ("string" != typeof e) return "数据类型不合法";
        var r = new RegExp("^".concat(t, "(\\d+)$")),
            o = e.match(r);
        if (!o) return "格式不合法";
        var i = parseInt(o[1]);
        return !n || i >= n[0] && i <= n[1] ? void 0 : "数字范围不合法"
    };

    function o(e) {
        return function (t) {
            if (!t) return "事件参数不能为空";
            if ("[object Object]" !== Object.prototype.toString.call(t)) return "事件参数数据类型不合法";
            var n = [];
            return e.forEach((function (e) {
                var o = r(t[e], e);
                o && n.push("".concat(e).concat(o))
            })), n.join("; ")
        }
    }
    var i = o(["area"]),
        a = o(["section"]),
        c = {
            pageview: {
                name: "sdk_pageview"
            },
            ensurePageview: {
                name: "sdk_ensure_pageview"
            },
            webviewShow: {
                name: "sdk_webview_show"
            },
            loadingPlayableStart: {
                name: "sdk_loading_playable_start"
            },
            loadedPlayable: {
                name: "sdk_loaded_playable"
            },
            firstscreenLoadingFinish: {
                name: "sdk_firstscreen_loading_finish"
            },
            firstTouchPlayable: {
                name: "sdk_start_play_playable"
            },
            hideRewardGuide: {
                name: "sdk_start_playable_interaction_notification"
            },
            clickDownloadButton: {
                name: "sdk_click_playable_download_button"
            },
            monitorAutoClick: {
                name: "sdk_monitor_auto_click"
            },
            playableShow: {
                name: "sdk_playable_show"
            },
            playableRenderLag: {
                name: "sdk_playable_render_lag"
            },
            playableRenderFreeze: {
                name: "sdk_playable_render_freeze"
            },
            sdkLoadMainScene: {
                name: "sdk_playable_load_main_scene"
            },
            sdkInitDownloadButton: {
                name: "sdk_init_download_button"
            },
            sdkViewableChange: {
                name: "sdk_viewable_change"
            },
            sdkBackgroundDuration: {
                name: "sdk_background_duration"
            },
            sdkResourceError: {
                name: "sdk_resource_error"
            },
            sdkDelayResourceError: {
                name: "sdk_delay_resource_error"
            },
            sdkLeavePlayable: {
                name: "sdk_leave_playable"
            },
            sdkOpenAppStore: {
                name: "sdk_open_app_store"
            }
        },
        u = {
            startPlayPlayable: {
                name: "custom_start_play_playable"
            },
            finishPlayPlayable: {
                name: "custom_finish_play_playable"
            },
            clickDownloadBar: {
                name: "custom_click_download_bar",
                validator: i
            },
            clickResurrection: {
                name: "custom_click_resurrection",
                validator: i
            },
            clickContent: {
                name: "custom_click_content",
                validator: i
            },
            clickFinishDownloadBar: {
                name: "custom_click_finish_download_bar",
                validator: i
            },
            clickFinishContent: {
                name: "custom_click_finish_content",
                validator: i
            },
            clickArea: {
                name: "custom_click_area",
                validator: i
            },
            enterSection: {
                name: "custom_enter_section",
                validator: a
            },
            loadMainScene: {
                name: "custom_load_main_scene"
            }
        },
        s = {
            videoCanNotPlay: {
                name: "private_video_can_not_play"
            },
            videoBufferedAll: {
                name: "private_video_buffered_all"
            },
            videoCanPlayThrough: {
                name: "private_video_can_play_through"
            },
            closeMisoperation: {
                name: "private_close_misoperation"
            },
            clickLoadingDownloadBar: {
                name: "private_click_loading_download_bar"
            },
            autoPlayVideo: {
                name: "private_auto_play_video"
            }
        }
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(7),
        i = n(57),
        a = n(61),
        c = n(14),
        u = n(117),
        s = n(10),
        f = n(28),
        l = n(82),
        d = n(15),
        p = n(16),
        v = n(47),
        g = n(38),
        h = n(62),
        y = n(63),
        b = n(71),
        m = n(102),
        w = n(65),
        O = n(164),
        j = n(124),
        _ = n(51),
        x = n(23),
        E = n(118),
        M = n(33),
        S = n(29),
        k = n(55),
        N = n(79),
        I = n(64),
        A = n(80),
        D = n(8),
        T = n(136),
        L = n(137),
        P = n(68),
        R = n(56),
        C = n(72).forEach,
        z = N("hidden"),
        B = D("toPrimitive"),
        F = R.set,
        J = R.getterFor("Symbol"),
        U = Object.prototype,
        Q = o.Symbol,
        V = i("JSON", "stringify"),
        Y = _.f,
        W = x.f,
        G = O.f,
        H = E.f,
        q = k("symbols"),
        Z = k("op-symbols"),
        X = k("string-to-symbol-registry"),
        K = k("symbol-to-string-registry"),
        $ = k("wks"),
        ee = o.QObject,
        te = !ee || !ee.prototype || !ee.prototype.findChild,
        ne = c && s((function () {
            return 7 != b(W({}, "a", {
                get: function () {
                    return W(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function (e, t, n) {
            var r = Y(U, t);
            r && delete U[t], W(e, t, n), r && e !== U && W(U, t, r)
        } : W,
        re = function (e, t) {
            var n = q[e] = b(Q.prototype);
            return F(n, {
                type: "Symbol",
                tag: e,
                description: t
            }), c || (n.description = t), n
        },
        oe = u && "symbol" == typeof Q.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return Object(e) instanceof Q
        },
        ie = function (e, t, n) {
            e === U && ie(Z, t, n), p(e);
            var r = h(t, !0);
            return p(n), f(q, r) ? (n.enumerable ? (f(e, z) && e[z][r] && (e[z][r] = !1), n = b(n, {
                enumerable: y(0, !1)
            })) : (f(e, z) || W(e, z, y(1, {})), e[z][r] = !0), ne(e, r, n)) : W(e, r, n)
        },
        ae = function (e, t) {
            p(e);
            var n = g(t),
                r = m(n).concat(fe(n));
            return C(r, (function (t) {
                c && !ce.call(n, t) || ie(e, t, n[t])
            })), e
        },
        ce = function (e) {
            var t = h(e, !0),
                n = H.call(this, t);
            return !(this === U && f(q, t) && !f(Z, t)) && (!(n || !f(this, t) || !f(q, t) || f(this, z) && this[z][t]) || n)
        },
        ue = function (e, t) {
            var n = g(e),
                r = h(t, !0);
            if (n !== U || !f(q, r) || f(Z, r)) {
                var o = Y(n, r);
                return !o || !f(q, r) || f(n, z) && n[z][r] || (o.enumerable = !0), o
            }
        },
        se = function (e) {
            var t = G(g(e)),
                n = [];
            return C(t, (function (e) {
                f(q, e) || f(I, e) || n.push(e)
            })), n
        },
        fe = function (e) {
            var t = e === U,
                n = G(t ? Z : g(e)),
                r = [];
            return C(n, (function (e) {
                !f(q, e) || t && !f(U, e) || r.push(q[e])
            })), r
        };
    (u || (S((Q = function () {
        if (this instanceof Q) throw TypeError("Symbol is not a constructor");
        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            t = A(e),
            n = function (e) {
                this === U && n.call(Z, e), f(this, z) && f(this[z], t) && (this[z][t] = !1), ne(this, t, y(1, e))
            };
        return c && te && ne(U, t, {
            configurable: !0,
            set: n
        }), re(t, e)
    }).prototype, "toString", (function () {
        return J(this).tag
    })), E.f = ce, x.f = ie, _.f = ue, w.f = O.f = se, j.f = fe, c && (W(Q.prototype, "description", {
        configurable: !0,
        get: function () {
            return J(this).description
        }
    }), a || S(U, "propertyIsEnumerable", ce, {
        unsafe: !0
    })), T.f = function (e) {
        return re(D(e), e)
    }), r({
        global: !0,
        wrap: !0,
        forced: !u,
        sham: !u
    }, {
        Symbol: Q
    }), C(m($), (function (e) {
        L(e)
    })), r({
        target: "Symbol",
        stat: !0,
        forced: !u
    }, {
        for: function (e) {
            var t = String(e);
            if (f(X, t)) return X[t];
            var n = Q(t);
            return X[t] = n, K[n] = t, n
        },
        keyFor: function (e) {
            if (!oe(e)) throw TypeError(e + " is not a symbol");
            if (f(K, e)) return K[e]
        },
        useSetter: function () {
            te = !0
        },
        useSimple: function () {
            te = !1
        }
    }), r({
        target: "Object",
        stat: !0,
        forced: !u,
        sham: !c
    }, {
        create: function (e, t) {
            return void 0 === t ? b(e) : ae(b(e), t)
        },
        defineProperty: ie,
        defineProperties: ae,
        getOwnPropertyDescriptor: ue
    }), r({
        target: "Object",
        stat: !0,
        forced: !u
    }, {
        getOwnPropertyNames: se,
        getOwnPropertySymbols: fe
    }), r({
        target: "Object",
        stat: !0,
        forced: s((function () {
            j.f(1)
        }))
    }, {
        getOwnPropertySymbols: function (e) {
            return j.f(v(e))
        }
    }), V) && r({
        target: "JSON",
        stat: !0,
        forced: !u || s((function () {
            var e = Q();
            return "[null]" != V([e]) || "{}" != V({
                a: e
            }) || "{}" != V(Object(e))
        }))
    }, {
        stringify: function (e, t, n) {
            for (var r, o = [e], i = 1; arguments.length > i;) o.push(arguments[i++]);
            if (r = t, (d(t) || void 0 !== e) && !oe(e)) return l(t) || (t = function (e, t) {
                if ("function" == typeof r && (t = r.call(this, e, t)), !oe(t)) return t
            }), o[1] = t, V.apply(null, o)
        }
    });
    Q.prototype[B] || M(Q.prototype, B, Q.prototype.valueOf), P(Q, "Symbol"), I[z] = !0
}, function (e, t, n) {
    "use strict";
    var r = n(38),
        o = n(166),
        i = n(69),
        a = n(56),
        c = n(104),
        u = a.set,
        s = a.getterFor("Array Iterator");
    e.exports = c(Array, "Array", (function (e, t) {
        u(this, {
            type: "Array Iterator",
            target: r(e),
            index: 0,
            kind: t
        })
    }), (function () {
        var e = s(this),
            t = e.target,
            n = e.kind,
            r = e.index++;
        return !t || r >= t.length ? (e.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {
            value: t[r],
            done: !1
        } : {
            value: [r, t[r]],
            done: !1
        }
    }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
}, function (e, t, n) {
    var r = n(6),
        o = n(14);
    r({
        target: "Object",
        stat: !0,
        forced: !o,
        sham: !o
    }, {
        defineProperty: n(23).f
    })
}, function (e, t, n) {
    var r = n(14),
        o = n(114),
        i = n(16),
        a = n(62),
        c = Object.defineProperty;
    t.f = r ? c : function (e, t, n) {
        if (i(e), t = a(t, !0), i(n), o) try {
            return c(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(141).charAt,
        o = n(56),
        i = n(104),
        a = o.set,
        c = o.getterFor("String Iterator");
    i(String, "String", (function (e) {
        a(this, {
            type: "String Iterator",
            string: String(e),
            index: 0
        })
    }), (function () {
        var e, t = c(this),
            n = t.string,
            o = t.index;
        return o >= n.length ? {
            value: void 0,
            done: !0
        } : (e = r(n, o), t.index += e.length, {
            value: e,
            done: !1
        })
    }))
}, function (e, t, n) {
    var r = n(7),
        o = n(142),
        i = n(21),
        a = n(33),
        c = n(8),
        u = c("iterator"),
        s = c("toStringTag"),
        f = i.values;
    for (var l in o) {
        var d = r[l],
            p = d && d.prototype;
        if (p) {
            if (p[u] !== f) try {
                a(p, u, f)
            } catch (e) {
                p[u] = f
            }
            if (p[s] || a(p, s, l), o[l])
                for (var v in i)
                    if (p[v] !== i[v]) try {
                        a(p, v, i[v])
                    } catch (e) {
                        p[v] = i[v]
                    }
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return i
    })), n.d(t, "b", (function () {
        return a
    }));
    n(48), n(87), n(109);
    var r, o, i = function (e) {
            if (!r) {
                var t = window.location.search.substring(1).split("&");
                r = {};
                for (var n = 0; n < t.length; n++) {
                    var o = t[n].split("=");
                    r[o[0]] = o[1]
                }
            }
            return r[e]
        },
        a = function () {
            if (!o) {
                var e = i("toutiao_card_params");
                o = e ? JSON.parse(window.decodeURIComponent(e)) : void 0
            }
            return o
        }
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(72).filter;
    r({
        target: "Array",
        proto: !0,
        forced: !n(73)("filter")
    }, {
        filter: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    var r = n(7),
        o = n(55),
        i = n(33),
        a = n(28),
        c = n(92),
        u = n(115),
        s = n(56),
        f = s.get,
        l = s.enforce,
        d = String(u).split("toString");
    o("inspectSource", (function (e) {
        return u.call(e)
    })), (e.exports = function (e, t, n, o) {
        var u = !!o && !!o.unsafe,
            s = !!o && !!o.enumerable,
            f = !!o && !!o.noTargetGet;
        "function" == typeof n && ("string" != typeof t || a(n, "name") || i(n, "name", t), l(n).source = d.join("string" == typeof t ? t : "")), e !== r ? (u ? !f && e[t] && (s = !0) : delete e[t], s ? e[t] = n : i(e, t, n)) : s ? e[t] = n : c(t, n)
    })(Function.prototype, "toString", (function () {
        return "function" == typeof this && f(this).source || u.call(this)
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(123).indexOf,
        i = n(83),
        a = [].indexOf,
        c = !!a && 1 / [1].indexOf(1, -0) < 0,
        u = i("indexOf");
    r({
        target: "Array",
        proto: !0,
        forced: c || u
    }, {
        indexOf: function (e) {
            return c ? a.apply(this, arguments) || 0 : o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    "use strict";
    n(20), n(36), n(37), n(27), n(21), n(22), n(2), n(5), n(24), n(25);

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var i = function () {
        function e() {
            var t = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), o(this, "listeners", []), o(this, "emit", (function (e) {
                var n = t.listeners.length > 0,
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, c = t.listeners[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                        a.value.callback(e)
                    }
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return t.listeners = t.listeners.filter((function (e) {
                    return !e.once
                })), n
            }))
        }
        var t, n, i;
        return t = e, (n = [{
            key: "on",
            value: function (e) {
                this.listeners.push({
                    once: !1,
                    callback: e
                })
            }
        }, {
            key: "once",
            value: function (e) {
                var t = this;
                if (!e) {
                    var n = new Promise((function (e) {
                        t.once(e)
                    }));
                    return this.listeners[this.listeners.length - 1].promise = n, n
                }
                this.listeners.push({
                    once: !0,
                    callback: e
                })
            }
        }, {
            key: "off",
            value: function (e) {
                var t = this.listeners.length;
                return this.listeners = this.listeners.filter((function (t) {
                    return e !== t.callback && (!t.promise || e !== t.promise)
                })), this.listeners.length !== t
            }
        }, {
            key: "offAll",
            value: function () {
                var e = this.listeners.length;
                return this.listeners.length = 0, e
            }
        }]) && r(t.prototype, n), i && r(t, i), e
    }();
    n.d(t, "b", (function () {
        return a
    })), n.d(t, "a", (function () {
        return c
    }));
    var a = new i,
        c = new i
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(10),
        i = n(82),
        a = n(15),
        c = n(47),
        u = n(34),
        s = n(74),
        f = n(103),
        l = n(73),
        d = n(8),
        p = n(101),
        v = d("isConcatSpreadable"),
        g = p >= 51 || !o((function () {
            var e = [];
            return e[v] = !1, e.concat()[0] !== e
        })),
        h = l("concat"),
        y = function (e) {
            if (!a(e)) return !1;
            var t = e[v];
            return void 0 !== t ? !!t : i(e)
        };
    r({
        target: "Array",
        proto: !0,
        forced: !g || !h
    }, {
        concat: function (e) {
            var t, n, r, o, i, a = c(this),
                l = f(a, 0),
                d = 0;
            for (t = -1, r = arguments.length; t < r; t++)
                if (i = -1 === t ? a : arguments[t], y(i)) {
                    if (d + (o = u(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (n = 0; n < o; n++, d++) n in i && s(l, d, i[n])
                } else {
                    if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    s(l, d++, i)
                } return l.length = d, l
        }
    })
}, function (e, t, n) {
    var r = n(14),
        o = n(23),
        i = n(63);
    e.exports = r ? function (e, t, n) {
        return o.f(e, t, i(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var r = n(66),
        o = Math.min;
    e.exports = function (e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    "use strict";
    var r = n(29),
        o = n(16),
        i = n(10),
        a = n(107),
        c = RegExp.prototype,
        u = c.toString,
        s = i((function () {
            return "/a/b" != u.call({
                source: "a",
                flags: "b"
            })
        })),
        f = "toString" != u.name;
    (s || f) && r(RegExp.prototype, "toString", (function () {
        var e = o(this),
            t = String(e.source),
            n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in c) ? a.call(e) : n)
    }), {
        unsafe: !0
    })
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(14),
        i = n(7),
        a = n(28),
        c = n(15),
        u = n(23).f,
        s = n(119),
        f = i.Symbol;
    if (o && "function" == typeof f && (!("description" in f.prototype) || void 0 !== f().description)) {
        var l = {},
            d = function () {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof d ? new f(e) : void 0 === e ? f() : f(e);
                return "" === e && (l[t] = !0), t
            };
        s(d, f);
        var p = d.prototype = f.prototype;
        p.constructor = d;
        var v = p.toString,
            g = "Symbol(test)" == String(f("test")),
            h = /^Symbol\((.*)\)[^)]+$/;
        u(p, "description", {
            configurable: !0,
            get: function () {
                var e = c(this) ? this.valueOf() : this,
                    t = v.call(e);
                if (a(l, e)) return "";
                var n = g ? t.slice(7, -1) : t.replace(h, "$1");
                return "" === n ? void 0 : n
            }
        }), r({
            global: !0,
            forced: !0
        }, {
            Symbol: d
        })
    }
}, function (e, t, n) {
    n(137)("iterator")
}, function (e, t, n) {
    var r = n(94),
        o = n(46);
    e.exports = function (e) {
        return r(o(e))
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var r = function (e) {
        parent && parent !== window ? (parent.postMessage && parent.postMessage(e, "*"), console.debug("msg: ", e)) : console.debug("you are not in iframe")
    }
}, function (e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", (function () {
            return r
        })),
        function (e) {
            e.ACTIVE_TOUCH_ERROR = "activeTouchError", e.OPEN_APP_STORE = "openAppStore", e.CUSTOM_EVENT = "customEvent", e.IS_VIEWABLE = "isViewable", e.VISIBILITY_CHANGE = "visibilityChangeEventListener"
        }(r || (r = {}))
}, function (e, t, n) {
    var r = n(6),
        o = n(14);
    r({
        target: "Object",
        stat: !0,
        forced: !o,
        sham: !o
    }, {
        defineProperties: n(135)
    })
}, function (e, t, n) {
    var r = n(6),
        o = n(10),
        i = n(38),
        a = n(51).f,
        c = n(14),
        u = o((function () {
            a(1)
        }));
    r({
        target: "Object",
        stat: !0,
        forced: !c || u,
        sham: !c
    }, {
        getOwnPropertyDescriptor: function (e, t) {
            return a(i(e), t)
        }
    })
}, function (e, t, n) {
    var r = n(6),
        o = n(14),
        i = n(120),
        a = n(38),
        c = n(51),
        u = n(74);
    r({
        target: "Object",
        stat: !0,
        sham: !o
    }, {
        getOwnPropertyDescriptors: function (e) {
            for (var t, n, r = a(e), o = c.f, s = i(r), f = {}, l = 0; s.length > l;) void 0 !== (n = o(r, t = s[l++])) && u(f, t, n);
            return f
        }
    })
}, function (e, t, n) {
    var r = n(6),
        o = n(47),
        i = n(102);
    r({
        target: "Object",
        stat: !0,
        forced: n(10)((function () {
            i(1)
        }))
    }, {
        keys: function (e) {
            return i(o(e))
        }
    })
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t) {
    e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e
    }
}, function (e, t, n) {
    var r = n(46);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(84);
    r({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== o
    }, {
        exec: o
    })
}, function (e, t, n) {
    "use strict";
    n(2), n(5), n(9);
    var r, o, i = n(4),
        a = n(18),
        c = (n(50), n(17)),
        u = function () {
            var e, t, n, r, o, a, u, s;
            return regeneratorRuntime.async((function (f) {
                for (;;) switch (f.prev = f.next) {
                    case 0:
                        return f.next = 2, regeneratorRuntime.awrap(Object(i.a)("adInfo", {}, !0));
                    case 2:
                        if (e = f.sent) {
                            f.next = 5;
                            break
                        }
                        return f.abrupt("return", e);
                    case 5:
                        return t = e.cid, n = e.req_id, r = e.convert_id, o = e.ad_id, a = e.log_extra, void 0 === t && e.data && (t = e.data.cid, n = e.data.req_id, r = e.data.convert_id, o = e.data.ad_id, a = e.data.log_extra), u = void 0, Object(c.g)() && ((null == e ? void 0 : e.land_page_data) ? u = e.land_page_data : (null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : s.land_page_data) && (u = e.data.land_page_data)), f.abrupt("return", {
                            category: "app_union",
                            is_ad_event: "1",
                            cid: t,
                            req_id: n,
                            convert_id: r,
                            ad_id: o,
                            log_extra: a,
                            land_page_data: u
                        });
                    case 10:
                    case "end":
                        return f.stop()
                }
            }))
        },
        s = n(26),
        f = n(1);
    ! function (e) {
        e[e.feed = 0] = "feed", e[e.landingPage = 1] = "landingPage"
    }(r || (r = {}));
    var l = function e() {
            var t, n, i, l;
            return regeneratorRuntime.async((function (d) {
                for (;;) switch (d.prev = d.next) {
                    case 0:
                        if (o) {
                            d.next = 10;
                            break
                        }
                        return d.next = 3, regeneratorRuntime.awrap(u());
                    case 3:
                        if (t = d.sent) {
                            d.next = 6;
                            break
                        }
                        return d.abrupt("return", new Promise((function (t) {
                            setTimeout((function () {
                                t(e())
                            }), 1e3)
                        })));
                    case 6:
                        n = Object(s.b)(), i = Object(s.a)("event_tag"), l = "1" === Object(s.a)("no_compliance_dialog"), t && n && (o = {
                            id: n.id || t.cid,
                            pkg_name: n.pkg_name,
                            download_url: n.download_url,
                            name: n.name,
                            source: "recommend",
                            from_page: "endcard",
                            card_type: "3",
                            extra: {
                                page: "endcard",
                                position: -1,
                                app_type: -1,
                                content_type: "card",
                                os_type: Object(a.b)() ? "android" : "ios"
                            },
                            is_ad: 1,
                            log_extra: t.log_extra,
                            web_url: location.href
                        }, i && (o.event_tag = i), l && (o.disable_show_compliance_dialog = !0));
                    case 10:
                        return Object(c.b)() && (o.download_scene = f.i ? r.landingPage : r.feed), d.abrupt("return", o);
                    case 12:
                    case "end":
                        return d.stop()
                }
            }))
        },
        d = n(89),
        p = (n(20), n(36), n(37), n(32), n(27), n(11), n(21), n(75), n(172), n(41), n(22), n(42), n(43), n(44), n(24), n(12), n(25), n(59));

    function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? v(n, !0).forEach((function (t) {
                h(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var b = Object(c.c)() ? "umeng" : "app_union",
        m = function (e, t, n) {
            var r = "";
            n && Object.keys(n).forEach((function (e) {
                var t = n[e];
                r = "extra" === e && "object" === y(t) ? "&extra=".concat(encodeURIComponent(JSON.stringify(t))) : "&".concat(e, "=").concat(encodeURIComponent(t))
            }));
            var o = "bytedance://".concat("log_event", "?category=").concat(b, "&tag=").concat(e, "&label=").concat(t).concat(r);
            f.d ? Object(i.a)("dynamicTrack", {
                trackData: o
            }, !1) : console.log(o)
        },
        w = function (e, t) {
            var n, r, o = arguments;
            return regeneratorRuntime.async((function (i) {
                for (;;) switch (i.prev = i.next) {
                    case 0:
                        n = o.length > 2 && void 0 !== o[2] ? o[2] : "embeded_ad", r = o.length > 3 && void 0 !== o[3] ? o[3] : "playable", Object(a.c)() && Object(c.b)() ? j(n, e, t, r) : O(n, e, t, r);
                    case 3:
                    case "end":
                        return i.stop()
                }
            }))
        };

    function O(e, t, n, r) {
        var o, i, a;
        return regeneratorRuntime.async((function (c) {
            for (;;) switch (c.prev = c.next) {
                case 0:
                    return c.next = 2, regeneratorRuntime.awrap(u());
                case 2:
                    o = c.sent, i = {
                        tag: e,
                        is_ad_event: "1",
                        refer: r
                    }, o && (i = g({}, Object(p.a)(o), {}, i), a = o.cid || o.ad_id, i.value = a ? +a : 0), n && (i.ad_extra_data = JSON.stringify(n)), m(e, t, {
                        extra: i
                    });
                case 7:
                case "end":
                    return c.stop()
            }
        }))
    }

    function j(e, t, n, r) {
        var o, i, a, c;
        return regeneratorRuntime.async((function (s) {
            for (;;) switch (s.prev = s.next) {
                case 0:
                    return o = {
                        category: b,
                        tag: e,
                        nt: 4,
                        is_ad_event: 1,
                        ad_extra_data: JSON.stringify(n),
                        refer: r
                    }, s.next = 3, regeneratorRuntime.awrap(u());
                case 3:
                    (i = s.sent) && (o.value = i.cid, o.log_extra = i.log_extra), a = {
                        event: t,
                        params: JSON.stringify(o)
                    }, c = Object.keys(a).map((function (e) {
                        return "".concat(e, "=").concat(encodeURIComponent(a[e]))
                    })).join("&"), console.log("bytedance://log_event_v3?" + c);
                case 8:
                case "end":
                    return s.stop()
            }
        }))
    }
    var _ = function () {
            return regeneratorRuntime.async((function (e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", Object(i.a)("sendReward", {}, !1));
                    case 1:
                    case "end":
                        return e.stop()
                }
            }))
        },
        x = function () {
            var e;
            return regeneratorRuntime.async((function (t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (!Object(c.g)()) {
                            t.next = 3;
                            break
                        }
                        return E(), t.abrupt("return");
                    case 3:
                        if (e = Object(s.b)()) {
                            t.next = 6;
                            break
                        }
                        return t.abrupt("return");
                    case 6:
                        if (!f.d) {
                            t.next = 10;
                            break
                        }
                        k(), t.next = 12;
                        break;
                    case 10:
                        return t.next = 12, regeneratorRuntime.awrap(N(e.download_url));
                    case 12:
                    case "end":
                        return t.stop()
                }
            }))
        };

    function E() {
        var e, t, n, r;
        return regeneratorRuntime.async((function (o) {
            for (;;) switch (o.prev = o.next) {
                case 0:
                    return o.next = 2, regeneratorRuntime.awrap(u());
                case 2:
                    if (e = o.sent, t = null == e ? void 0 : e.land_page_data, n = Object(a.b)(), t) {
                        o.next = 7;
                        break
                    }
                    return o.abrupt("return");
                case 7:
                    if (!(r = JSON.parse(t)).open_url) {
                        o.next = 14;
                        break
                    }
                    return o.next = 11, regeneratorRuntime.awrap(M(r.open_url, n));
                case 11:
                    if (!o.sent) {
                        o.next = 14;
                        break
                    }
                    return o.abrupt("return");
                case 14:
                    S(n ? null == r ? void 0 : r.package_name : null == r ? void 0 : r.apple_id);
                case 15:
                case "end":
                    return o.stop()
            }
        }))
    }

    function M(e, t) {
        var n, r;
        return regeneratorRuntime.async((function (o) {
            for (;;) switch (o.prev = o.next) {
                case 0:
                    if (e) {
                        o.next = 2;
                        break
                    }
                    throw new Error("no deeplink!");
                case 2:
                    return o.next = 4, regeneratorRuntime.awrap(Object(i.a)("openAdLandPageLinks", {
                        url: e
                    }, !1));
                case 4:
                    if (r = o.sent, t || 1 !== (null == r ? void 0 : null === (n = r.data) || void 0 === n ? void 0 : n.code)) {
                        o.next = 7;
                        break
                    }
                    return o.abrupt("return", !0);
                case 7:
                    if (!t || 1 !== (null == r ? void 0 : r.code)) {
                        o.next = 9;
                        break
                    }
                    return o.abrupt("return", !0);
                case 9:
                    return o.abrupt("return", !1);
                case 10:
                case "end":
                    return o.stop()
            }
        }))
    }

    function S(e) {
        if (!e) throw new Error("Empty appId!");
        Object(i.a)("download_click", {
            appStoreEnabled: !0,
            appStoreReuseDisabled: !1,
            app_id: e,
            direct_download: 1
        }, !1)
    }

    function k() {
        Object(i.a)("clickEvent", {
            areaType: 2,
            clickInfo: {}
        }, !1)
    }

    function N(e) {
        return regeneratorRuntime.async((function (t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    if (e) {
                        t.next = 2;
                        break
                    }
                    throw new Error("Empty downloadUrl!");
                case 2:
                    if (!Object(a.b)()) {
                        t.next = 11;
                        break
                    }
                    return t.t0 = i.a, t.next = 6, regeneratorRuntime.awrap(l());
                case 6:
                    t.t1 = t.sent, t.t2 = {
                        data: t.t1
                    }, (0, t.t0)("download_app_ad", t.t2, !1), t.next = 12;
                    break;
                case 11:
                    f.d ? k() : Object(i.a)("open_app_store", {
                        download_url: e
                    }, !1);
                case 12:
                case "end":
                    return t.stop()
            }
        }))
    }
    var I = function (e) {
            var t;
            t = void 0 === e ? {} : JSON.parse(e);
            var n = "1" === Object(s.a)("display_download_button");
            return {
                displayDownloadButton: 1 === t.display_playable_download_button || n,
                displayPlayableGuide: 1 === t.playable_interaction_notification
            }
        },
        A = function () {
            return regeneratorRuntime.async((function (e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", Promise.race([new Promise((function (e) {
                            var t;
                            return regeneratorRuntime.async((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, regeneratorRuntime.awrap(Object(i.a)("playable_style", {}, !0));
                                    case 2:
                                        if (t = n.sent) {
                                            n.next = 5;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 5:
                                        if (t.playable_style) {
                                            n.next = 7;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 7:
                                        e(I(t.playable_style));
                                    case 8:
                                    case "end":
                                        return n.stop()
                                }
                            }))
                        })), new Promise((function (e) {
                            var t, n;
                            return regeneratorRuntime.async((function (r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.next = 2, regeneratorRuntime.awrap(u());
                                    case 2:
                                        if (t = r.sent) {
                                            r.next = 5;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 5:
                                        if ((n = JSON.parse(t.log_extra || "{}")).playable_style) {
                                            r.next = 8;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 8:
                                        e(I(n.playable_style));
                                    case 9:
                                    case "end":
                                        return r.stop()
                                }
                            }))
                        })), new Promise((function (e) {
                            setTimeout((function () {
                                return e(I(void 0))
                            }), 1e3)
                        }))]));
                    case 1:
                    case "end":
                        return e.stop()
                }
            }))
        };

    function D() {
        var e, t, n, r, o;
        return regeneratorRuntime.async((function (a) {
            for (;;) switch (a.prev = a.next) {
                case 0:
                    return a.next = 2, regeneratorRuntime.awrap(Object(i.a)("isViewable", {}, !1, 500));
                case 2:
                    if (r = a.sent, void 0 !== (o = null !== (e = null == r ? void 0 : r.viewStatus) && void 0 !== e ? e : null === (t = r) || void 0 === t ? void 0 : null === (n = t.data) || void 0 === n ? void 0 : n.viewStatus)) {
                        a.next = 6;
                        break
                    }
                    return a.abrupt("return", void 0);
                case 6:
                    return a.abrupt("return", !0 === o || 1 === o);
                case 7:
                case "end":
                    return a.stop()
            }
        }))
    }

    function T() {
        var e, t, n, r, o;
        return regeneratorRuntime.async((function (a) {
            for (;;) switch (a.prev = a.next) {
                case 0:
                    return a.next = 2, regeneratorRuntime.awrap(Object(i.a)("getVolume", {}, !1, 500));
                case 2:
                    if (void 0 !== (r = a.sent)) {
                        a.next = 5;
                        break
                    }
                    return a.abrupt("return", void 0);
                case 5:
                    if (void 0 !== (o = null !== (e = null == r ? void 0 : r.endcard_mute) && void 0 !== e ? e : null === (t = r) || void 0 === t ? void 0 : null === (n = t.data) || void 0 === n ? void 0 : n.endcard_mute)) {
                        a.next = 8;
                        break
                    }
                    return a.abrupt("return", void 0);
                case 8:
                    return a.abrupt("return", !0 === o || 1 === o);
                case 9:
                case "end":
                    return a.stop()
            }
        }))
    }

    function L() {
        var e, t, n, r;
        return regeneratorRuntime.async((function (o) {
            for (;;) switch (o.prev = o.next) {
                case 0:
                    return o.next = 2, regeneratorRuntime.awrap(Object(i.a)("getWebViewInfo", {}, !1, 500));
                case 2:
                    if (n = o.sent, void 0 !== (r = null !== (e = null == n ? void 0 : n.appearanceState) && void 0 !== e ? e : null == n ? void 0 : null === (t = n.data) || void 0 === t ? void 0 : t.appearanceState)) {
                        o.next = 6;
                        break
                    }
                    return o.abrupt("return", void 0);
                case 6:
                    return o.abrupt("return", 2 === r);
                case 7:
                case "end":
                    return o.stop()
            }
        }))
    }

    function P() {
        return regeneratorRuntime.async((function (e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    if (!Object(a.b)()) {
                        e.next = 7;
                        break
                    }
                    return e.t0 = i.a, e.next = 4, regeneratorRuntime.awrap(l());
                case 4:
                    e.t1 = e.sent, e.t2 = {
                        data: e.t1
                    }, (0, e.t0)("subscribe_app_ad", e.t2, !1);
                case 7:
                case "end":
                    return e.stop()
            }
        }))
    }
    n.d(t, "b", (function () {
        return i.a
    })), n.d(t, "j", (function () {
        return i.b
    })), n.d(t, "d", (function () {
        return u
    })), n.d(t, "e", (function () {
        return d.a
    })), n.d(t, "k", (function () {
        return w
    })), n.d(t, "a", (function () {
        return _
    })), n.d(t, "c", (function () {
        return x
    })), n.d(t, "f", (function () {
        return A
    })), n.d(t, "i", (function () {
        return D
    })), n.d(t, "g", (function () {
        return T
    })), n.d(t, "h", (function () {
        return L
    })), "loading" !== document.readyState ? P() : document.addEventListener("DOMContentLoaded", P)
}, function (e, t, n) {
    var r = n(14),
        o = n(23).f,
        i = Function.prototype,
        a = i.toString,
        c = /^\s*function ([^ (]*)/;
    !r || "name" in i || o(i, "name", {
        configurable: !0,
        get: function () {
            try {
                return a.call(this).match(c)[1]
            } catch (e) {
                return ""
            }
        }
    })
}, function (e, t, n) {
    var r = n(14),
        o = n(118),
        i = n(63),
        a = n(38),
        c = n(62),
        u = n(28),
        s = n(114),
        f = Object.getOwnPropertyDescriptor;
    t.f = r ? f : function (e, t) {
        if (e = a(e), t = c(t, !0), s) try {
            return f(e, t)
        } catch (e) {}
        if (u(e, t)) return i(!o.f.call(e, t), e[t])
    }
}, function (e, t, n) {
    "use strict";
    n(20), n(36), n(37), n(27), n(11), n(21), n(13), n(41), n(22), n(42), n(43), n(44), n(2), n(5), n(35), n(24), n(12), n(25), n(9);
    var r = n(90),
        o = n(49);

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(n, !0).forEach((function (t) {
                c(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var s = function () {
            return {
                path: window.location.origin + window.location.pathname,
                request_url: window.location.href
            }
        },
        f = function () {
            var e, t, n, r, i, c, f, l, d, p, v;
            return regeneratorRuntime.async((function (g) {
                for (;;) switch (g.prev = g.next) {
                    case 0:
                        return e = Object(o.d)(), t = Object(o.e)(), g.next = 4, regeneratorRuntime.awrap(Promise.all([e, t]));
                    case 4:
                        if (n = g.sent, r = u(n, 2), i = r[0], c = r[1], i && c) {
                            g.next = 10;
                            break
                        }
                        return g.abrupt("return", void 0);
                    case 10:
                        return f = i.cid, l = i.req_id, d = i.convert_id, p = i.ad_id, v = c.netType, g.abrupt("return", a({
                            cid: f,
                            request_id: l,
                            convert_id: d,
                            ad_id: p,
                            net_type: v
                        }, s()));
                    case 13:
                    case "end":
                        return g.stop()
                }
            }))
        };
    var l, d, p, v, g = n(17);
    Object(g.d)() ? l = function (e, t) {
        console.debug("sendToTea >", e, t)
    } : (regeneratorRuntime.async((function (e) {
        for (;;) switch (e.prev = e.next) {
            case 0:
                return r.a.init({
                    app_id: 1834,
                    channel: "cn",
                    log: !0
                }), d = !1, p = setTimeout((function () {
                    r.a.config({
                        evtParams: a({}, s(), {
                            onlyBaseParams: !0
                        })
                    }), r.a.start(), d = !0
                }), 3e3), e.next = 5, regeneratorRuntime.awrap(f());
            case 5:
                if (v = e.sent, !d) {
                    e.next = 8;
                    break
                }
                return e.abrupt("return");
            case 8:
                r.a.config({
                    evtParams: v
                }), r.a.start(), d = !0, clearTimeout(p);
            case 12:
            case "end":
                return e.stop()
        }
    })), l = r.a);
    t.a = l
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return i
    })), n.d(t, "b", (function () {
        return a
    }));
    var r = void 0,
        o = void 0,
        i = "start";

    function a(e) {
        o ? (i = o, o = e, r && clearTimeout(r)) : o = e, r = setTimeout((function () {
            i = e, o = void 0
        }), 200)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(15),
        i = n(82),
        a = n(95),
        c = n(34),
        u = n(38),
        s = n(74),
        f = n(73),
        l = n(8)("species"),
        d = [].slice,
        p = Math.max;
    r({
        target: "Array",
        proto: !0,
        forced: !f("slice")
    }, {
        slice: function (e, t) {
            var n, r, f, v = u(this),
                g = c(v.length),
                h = a(e, g),
                y = a(void 0 === t ? g : t, g);
            if (i(v) && ("function" != typeof (n = v.constructor) || n !== Array && !i(n.prototype) ? o(n) && null === (n = n[l]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return d.call(v, h, y);
            for (r = new(void 0 === n ? Array : n)(p(y - h, 0)), f = 0; h < y; h++, f++) h in v && s(r, f, v[h]);
            return r.length = f, r
        }
    })
}, function (e, t, n) {
    var r = n(61),
        o = n(156);
    (e.exports = function (e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.4.1",
        mode: r ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t, n) {
    var r, o, i, a = n(157),
        c = n(7),
        u = n(15),
        s = n(33),
        f = n(28),
        l = n(79),
        d = n(64),
        p = c.WeakMap;
    if (a) {
        var v = new p,
            g = v.get,
            h = v.has,
            y = v.set;
        r = function (e, t) {
            return y.call(v, e, t), t
        }, o = function (e) {
            return g.call(v, e) || {}
        }, i = function (e) {
            return h.call(v, e)
        }
    } else {
        var b = l("state");
        d[b] = !0, r = function (e, t) {
            return s(e, b, t), t
        }, o = function (e) {
            return f(e, b) ? e[b] : {}
        }, i = function (e) {
            return f(e, b)
        }
    }
    e.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function (e) {
            return i(e) ? o(e) : r(e, {})
        },
        getterFor: function (e) {
            return function (t) {
                var n;
                if (!u(t) || (n = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }
}, function (e, t, n) {
    var r = n(121),
        o = n(7),
        i = function (e) {
            return "function" == typeof e ? e : void 0
        };
    e.exports = function (e, t) {
        return arguments.length < 2 ? i(r[e]) || i(o[e]) : r[e] && r[e][t] || o[e] && o[e][t]
    }
}, function (e, t, n) {
    var r = n(6),
        o = n(165);
    r({
        target: "Array",
        stat: !0,
        forced: !n(100)((function (e) {
            Array.from(e)
        }))
    }, {
        from: o
    })
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    })), n.d(t, "b", (function () {
        return o
    }));
    n(54), n(13), n(2), n(48), n(35), n(109);
    var r = function (e) {
        return JSON.parse(JSON.stringify(e))
    };

    function o(e) {
        return Object.prototype.toString.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    "use strict";
    n(50);
    var r = n(52),
        o = (n(11), n(12), []),
        i = function e(t) {
            document.body || (0 === o.length && document.addEventListener("load", (function () {
                o.forEach((function (t) {
                    e(t)
                })), o = []
            })), o.push(t));
            var n = function () {
                    var e = window.innerWidth < window.innerHeight,
                        t = e ? "test_tool_container_landscape" : "test_tool_container_portrait",
                        n = e ? "test_tool_container_portrait" : "test_tool_container_landscape",
                        r = document.querySelector("#".concat(t));
                    r && r.remove();
                    var o = document.querySelector("#".concat(n));
                    if (!o) {
                        var i = document.createElement("div");
                        i.id = n, i.style.pointerEvents = "none", i.style.position = "fixed", i.style.top = e ? "200px" : "0px", i.style.left = "0px", i.style.zIndex = "999999", i.style.backgroundColor = "rgba(0,0,0,0.4)", i.style.wordBreak = "break-all", document.body.appendChild(i), o = i
                    }
                    return o
                }(),
                r = document.createElement("p");
            r.innerText = t, r.style.margin = "0px", r.style.color = "white", r.style.fontSize = "12px", r.style.textAlign = "left", n.appendChild(r), setTimeout((function () {
                r.remove()
            }), 4e3)
        },
        a = n(1),
        c = n(19),
        u = n(39),
        s = n(40);

    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = c.a[e] || c.b[e] || c.c[e];
        if (Object(r.a)(o.name, t), n) {
            if (a.g) {
                var f = "上报 ".concat(e, " 事件");
                t && (f += "，参数为 ".concat(JSON.stringify(t))), i(f)
            }
            if (a.e) {
                var l = {
                    type: s.a.CUSTOM_EVENT,
                    eventName: e,
                    eventParams: t
                };
                Object(u.a)(l)
            }
        }
        if (o.validator) {
            var d = o.validator(t);
            d && (console.group("playable sdk error"), console.error("sendEvent 事件参数参数不合法：".concat(d)), console.groupEnd())
        }
    }
    n.d(t, "a", (function () {
        return f
    }))
}, function (e, t) {
    e.exports = !1
}, function (e, t, n) {
    var r = n(15);
    e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var r = n(122),
        o = n(96).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return r(e, o)
    }
}, function (e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function (e, t, n) {
    var r = n(10),
        o = /#|\.prototype\./,
        i = function (e, t) {
            var n = c[a(e)];
            return n == s || n != u && ("function" == typeof t ? r(t) : !!t)
        },
        a = i.normalize = function (e) {
            return String(e).replace(o, ".").toLowerCase()
        },
        c = i.data = {},
        u = i.NATIVE = "N",
        s = i.POLYFILL = "P";
    e.exports = i
}, function (e, t, n) {
    var r = n(23).f,
        o = n(28),
        i = n(8)("toStringTag");
    e.exports = function (e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var r = n(81);
    e.exports = function (e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 0:
                return function () {
                    return e.call(t)
                };
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t, n) {
    var r = n(16),
        o = n(135),
        i = n(96),
        a = n(64),
        c = n(131),
        u = n(93),
        s = n(79)("IE_PROTO"),
        f = function () {},
        l = function () {
            var e, t = u("iframe"),
                n = i.length;
            for (t.style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; n--;) delete l.prototype[i[n]];
            return l()
        };
    e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (f.prototype = r(e), n = new f, f.prototype = null, n[s] = e) : n = l(), void 0 === t ? n : o(n, t)
    }, a[s] = !0
}, function (e, t, n) {
    var r = n(70),
        o = n(94),
        i = n(47),
        a = n(34),
        c = n(103),
        u = [].push,
        s = function (e) {
            var t = 1 == e,
                n = 2 == e,
                s = 3 == e,
                f = 4 == e,
                l = 6 == e,
                d = 5 == e || l;
            return function (p, v, g, h) {
                for (var y, b, m = i(p), w = o(m), O = r(v, g, 3), j = a(w.length), _ = 0, x = h || c, E = t ? x(p, j) : n ? x(p, 0) : void 0; j > _; _++)
                    if ((d || _ in w) && (b = O(y = w[_], _, m), e))
                        if (t) E[_] = b;
                        else if (b) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return y;
                    case 6:
                        return _;
                    case 2:
                        u.call(E, y)
                } else if (f) return !1;
                return l ? -1 : s || f ? f : E
            }
        };
    e.exports = {
        forEach: s(0),
        map: s(1),
        filter: s(2),
        some: s(3),
        every: s(4),
        find: s(5),
        findIndex: s(6)
    }
}, function (e, t, n) {
    var r = n(10),
        o = n(8),
        i = n(101),
        a = o("species");
    e.exports = function (e) {
        return i >= 51 || !r((function () {
            var t = [];
            return (t.constructor = {})[a] = function () {
                return {
                    foo: 1
                }
            }, 1 !== t[e](Boolean).foo
        }))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(62),
        o = n(23),
        i = n(63);
    e.exports = function (e, t, n) {
        var a = r(t);
        a in e ? o.f(e, a, i(0, n)) : e[a] = n
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(94),
        i = n(38),
        a = n(83),
        c = [].join,
        u = o != Object,
        s = a("join", ",");
    r({
        target: "Array",
        proto: !0,
        forced: u || s
    }, {
        join: function (e) {
            return c.call(i(this), void 0 === e ? "," : e)
        }
    })
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    })), n.d(t, "c", (function () {
        return o
    })), n.d(t, "b", (function () {
        return i
    }));
    n(2), n(5);
    var r = function (e) {
        var t = !1;
        return function () {
            t || (t = !0, e())
        }
    };

    function o(e) {
        try {
            var t = e();
            return t instanceof Promise ? t.catch((function (e) {
                console.error(e)
            })) : t
        } catch (e) {
            return void console.error(e)
        }
    }

    function i() {
        return function () {}
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return d
    })), n.d(t, "b", (function () {
        return p
    }));
    n(20), n(27), n(11), n(88), n(41), n(22), n(42), n(43), n(44), n(12);
    var r, o = n(60),
        i = n(53);

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(n, !0).forEach((function (t) {
                u(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }! function (e) {
        e[e.no = 0] = "no", e[e.yes = 1] = "yes"
    }(r || (r = {}));
    var s = 200,
        f = !1,
        l = [];

    function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (e.hasOwnProperty("current_section") || (e.current_section = i.a), f) f = !1, Object(o.a)("clickArea", c({}, e, {
            convert_area: r.yes
        }), t);
        else {
            var n = setTimeout((function () {
                Object(o.a)("clickArea", c({}, e, {
                    convert_area: r.no
                }), t), l.splice(0, 1)
            }), s);
            l.push({
                timerId: n,
                eventParams: e,
                displayMessage: t
            })
        }
    }

    function p() {
        if (0 === l.length) f = !0, setTimeout((function () {
            f = !1
        }), s);
        else {
            var e = l.splice(0, 1)[0];
            e && (clearTimeout(e.timerId), Object(o.a)("clickArea", c({}, e.eventParams, {
                convert_area: r.yes
            }), e.displayMessage))
        }
    }
}, function (e, t, n) {
    var r = n(181);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    n(154)(r, o);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    var r = n(55),
        o = n(80),
        i = r("keys");
    e.exports = function (e) {
        return i[e] || (i[e] = o(e))
    }
}, function (e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function (e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e
    }
}, function (e, t, n) {
    var r = n(45);
    e.exports = Array.isArray || function (e) {
        return "Array" == r(e)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(10);
    e.exports = function (e, t) {
        var n = [][e];
        return !n || !r((function () {
            n.call(null, t || function () {
                throw 1
            }, 1)
        }))
    }
}, function (e, t, n) {
    "use strict";
    var r, o, i = n(107),
        a = RegExp.prototype.exec,
        c = String.prototype.replace,
        u = a,
        s = (r = /a/, o = /b*/g, a.call(r, "a"), a.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
        f = void 0 !== /()??/.exec("")[1];
    (s || f) && (u = function (e) {
        var t, n, r, o, u = this;
        return f && (n = new RegExp("^" + u.source + "$(?!\\s)", i.call(u))), s && (t = u.lastIndex), r = a.call(u, e), s && r && (u.lastIndex = u.global ? r.index + r[0].length : t), f && r && r.length > 1 && c.call(r[0], n, (function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
        })), r
    }), e.exports = u
}, function (e, t, n) {
    "use strict";
    var r = n(33),
        o = n(29),
        i = n(10),
        a = n(8),
        c = n(84),
        u = a("species"),
        s = !i((function () {
            var e = /./;
            return e.exec = function () {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })),
        f = !i((function () {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function () {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }));
    e.exports = function (e, t, n, l) {
        var d = a(e),
            p = !i((function () {
                var t = {};
                return t[d] = function () {
                    return 7
                }, 7 != "" [e](t)
            })),
            v = p && !i((function () {
                var t = !1,
                    n = /a/;
                return "split" === e && ((n = {}).constructor = {}, n.constructor[u] = function () {
                    return n
                }, n.flags = "", n[d] = /./ [d]), n.exec = function () {
                    return t = !0, null
                }, n[d](""), !t
            }));
        if (!p || !v || "replace" === e && !s || "split" === e && !f) {
            var g = /./ [d],
                h = n(d, "" [e], (function (e, t, n, r, o) {
                    return t.exec === c ? p && !o ? {
                        done: !0,
                        value: g.call(t, n, r)
                    } : {
                        done: !0,
                        value: e.call(n, t, r)
                    } : {
                        done: !1
                    }
                })),
                y = h[0],
                b = h[1];
            o(String.prototype, e, y), o(RegExp.prototype, d, 2 == t ? function (e, t) {
                return b.call(e, this, t)
            } : function (e) {
                return b.call(e, this)
            }), l && r(RegExp.prototype[d], "sham", !0)
        }
    }
}, function (e, t, n) {
    var r = n(45),
        o = n(84);
    e.exports = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var i = n.call(e, t);
            if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
        return o.call(e, t)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(85),
        o = n(16),
        i = n(46),
        a = n(171),
        c = n(86);
    r("search", 1, (function (e, t, n) {
        return [function (t) {
            var n = i(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var i = o(e),
                u = String(this),
                s = i.lastIndex;
            a(s, 0) || (i.lastIndex = 0);
            var f = c(i, u);
            return a(i.lastIndex, s) || (i.lastIndex = s), null === f ? -1 : f.index
        }]
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(95),
        i = n(66),
        a = n(34),
        c = n(47),
        u = n(103),
        s = n(74),
        f = n(73),
        l = Math.max,
        d = Math.min;
    r({
        target: "Array",
        proto: !0,
        forced: !f("splice")
    }, {
        splice: function (e, t) {
            var n, r, f, p, v, g, h = c(this),
                y = a(h.length),
                b = o(e, y),
                m = arguments.length;
            if (0 === m ? n = r = 0 : 1 === m ? (n = 0, r = y - b) : (n = m - 2, r = d(l(i(t), 0), y - b)), y + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (f = u(h, r), p = 0; p < r; p++)(v = b + p) in h && s(f, p, h[v]);
            if (f.length = r, n < r) {
                for (p = b; p < y - r; p++) g = p + n, (v = p + r) in h ? h[g] = h[v] : delete h[g];
                for (p = y; p > y - r + n; p--) delete h[p - 1]
            } else if (n > r)
                for (p = y - r; p > b; p--) g = p + n - 1, (v = p + r - 1) in h ? h[g] = h[v] : delete h[g];
            for (p = 0; p < n; p++) h[p + b] = arguments[p + 2];
            return h.length = y - r + n, f
        }
    })
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return o
    }));
    n(2), n(5), n(9);
    var r = n(4),
        o = function () {
            var e, t, n = arguments;
            return regeneratorRuntime.async((function (o) {
                for (;;) switch (o.prev = o.next) {
                    case 0:
                        return e = n.length > 0 && void 0 !== n[0] ? n[0] : 3e3, o.next = 3, regeneratorRuntime.awrap(Object(r.a)("appInfo", {}, !0, e));
                    case 3:
                        if (void 0 !== (t = o.sent)) {
                            o.next = 6;
                            break
                        }
                        return o.abrupt("return", void 0);
                    case 6:
                        if (!t.hasOwnProperty("data")) {
                            o.next = 10;
                            break
                        }
                        return o.abrupt("return", t.data);
                    case 10:
                        return o.abrupt("return", t);
                    case 11:
                    case "end":
                        return o.stop()
                }
            }))
        }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return d
    }));
    n(20), n(36), n(37), n(32), n(27), n(11), n(58), n(21), n(13), n(41), n(22), n(42), n(43), n(44), n(2), n(35), n(24), n(12), n(25);
    var r = n(49),
        o = n(53);

    function i(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(n, !0).forEach((function (t) {
                u(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = [],
        f = function () {
            var e;
            (e = console).debug.apply(e, arguments)
        },
        l = !1,
        d = {};

    function p(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = Date.now();
        if (t.current_section || (t.current_section = o.a), !l) return s.push([e, t, n]), void f("fakeTea is not ready, cached ".concat(e, ":"), t);
        v(e, t, n)
    }

    function v(e, t, n) {
        var o, i = {},
            a = null === (o = performance) || void 0 === o ? void 0 : o.memory;
        a && (i.used_memory = a.usedJSHeapSize, i.memory_limit = a.jsHeapSizeLimit), Object(r.k)("playable_track", {
            event: e,
            timestamp: n,
            params: c({}, d, {}, i, {}, t)
        }), f("fakeTea send track event ".concat(e, "(").concat(n, "):"), t)
    }
    p.init = function (e) {
        var t = e.app_id,
            n = e.channel,
            r = e.log;
        d.app_id = t, d.channel = n, r || (f = function () {})
    }, p.config = function (e) {
        d = c({}, d, {}, e.evtParams), f("fakeTea updated config:", e.evtParams)
    }, p.start = function () {
        l = !0, f("fakeTea is started"), s.forEach((function (e) {
            v.apply(void 0, i(e))
        })), s = [], f("fakeTea cleared cache queue")
    }, p("predefine_pageview"), t.a = p
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        o = n(0),
        i = n(39),
        a = n(40),
        c = n(77),
        u = n(3),
        s = !1;
    n(30);

    function f(e, t) {
        var n, r = (n = e, (n = decodeURIComponent(n)).indexOf("?") > -1 ? n += "&" : n += "?", n += "show_more_button=false");
        t ? function (e) {
            Object(o.b)("openSchema", {
                schema: "aweme://webview?url=".concat(encodeURIComponent(e))
            }, !1)
        }(r) : function (e) {
            var t = Object(o.k)() ? {
                lightWebUrl: e
            } : {
                url: e
            };
            Object(o.b)("openLightLandingPage", t, !1)
        }(r), Object(o.w)("otherclick", void 0, "landing_ad", "playable")
    }
    var l = n(17);
    n.d(t, "a", (function () {
        return j
    })), n.d(t, "b", (function () {
        return _
    })), n.d(t, "c", (function () {
        return x
    }));
    var d, p, v, g, h, y, b = !1,
        m = !0,
        w = !1,
        O = function () {
            b = !0, clearTimeout(d), d = setTimeout((function () {
                b = !1
            }), 500)
        };
    p = document, v = O, g = !0, h = function () {
            p.removeEventListener("mousedown", y, g)
        }, y = function () {
            s ? h() : v()
        }, p.addEventListener("touchstart", (function () {
            s || (s = !0, h()), v()
        }), g), p.addEventListener("mousedown", y, g),
        function (e, t, n) {
            var r = function () {
                    e.removeEventListener("mouseup", o, n)
                },
                o = function () {
                    s ? r() : t()
                };
            e.addEventListener("touchend", (function () {
                s || (s = !0, r()), t()
            }), n), e.addEventListener("mouseup", o, n)
        }(document, O, !0);
    var j = function (e) {
        if (b) {
            if (Object(c.b)(), r.e || r.c) {
                var t = {
                    type: a.a.OPEN_APP_STORE
                };
                Object(i.a)(t)
            }
            var n = Object(o.h)();
            if (n || Object(l.g)()) {
                if (Object(o.w)("click_start_endcard"), r.i || (Object(o.o)() && (w || Object(o.m)() && Object(o.k)()) || Object(o.w)("click"), w = !0), m && (m = !1, Object(o.b)("opportunityToSendClick", {}, !1)), b = !1, clearTimeout(d), Object(l.g)()) return Object(o.c)(), void Object(u.a)("sdkOpenAppStore", {
                    trigger: e
                });
                if (n)
                    if (Object(u.a)("sdkOpenAppStore", {
                            trigger: e
                        }), n.light_web_url) f(n.light_web_url, !1);
                    else if (n.web_url) f(n.web_url, !0);
                else if (n.download_url || n.app_id) Object(o.c)();
                else if (n.external_url) try {
                    Object(o.b)("landscape_click", {}, !1), window.location.href = n.external_url
                } catch (e) {
                    window.location.href = n.external_url
                }
            }
        } else if (Object(u.a)("monitorAutoClick"), r.g && Object(o.a)("用户未发生点击行为时，禁止调用openAppStore方法，请依据素材规范检查修改后重新测试"), r.e) {
            var s = {
                type: a.a.ACTIVE_TOUCH_ERROR
            };
            Object(i.a)(s)
        }
    };

    function _() {
        j("custom")
    }

    function x(e) {
        m = e
    }
}, function (e, t, n) {
    var r = n(7),
        o = n(33);
    e.exports = function (e, t) {
        try {
            o(r, e, t)
        } catch (n) {
            r[e] = t
        }
        return t
    }
}, function (e, t, n) {
    var r = n(7),
        o = n(15),
        i = r.document,
        a = o(i) && o(i.createElement);
    e.exports = function (e) {
        return a ? i.createElement(e) : {}
    }
}, function (e, t, n) {
    var r = n(10),
        o = n(45),
        i = "".split;
    e.exports = r((function () {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function (e) {
        return "String" == o(e) ? i.call(e, "") : Object(e)
    } : Object
}, function (e, t, n) {
    var r = n(66),
        o = Math.max,
        i = Math.min;
    e.exports = function (e, t) {
        var n = r(e);
        return n < 0 ? o(n + t, 0) : i(n, t)
    }
}, function (e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (e, t, n) {
    "use strict";
    var r = n(57),
        o = n(23),
        i = n(8),
        a = n(14),
        c = i("species");
    e.exports = function (e) {
        var t = r(e),
            n = o.f;
        a && t && !t[c] && n(t, c, {
            configurable: !0,
            get: function () {
                return this
            }
        })
    }
}, function (e, t) {
    e.exports = function (e, t, n) {
        if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e
    }
}, function (e, t, n) {
    var r = n(16),
        o = n(126),
        i = n(34),
        a = n(70),
        c = n(127),
        u = n(128),
        s = function (e, t) {
            this.stopped = e, this.result = t
        };
    (e.exports = function (e, t, n, f, l) {
        var d, p, v, g, h, y, b, m = a(t, n, f ? 2 : 1);
        if (l) d = e;
        else {
            if ("function" != typeof (p = c(e))) throw TypeError("Target is not iterable");
            if (o(p)) {
                for (v = 0, g = i(e.length); g > v; v++)
                    if ((h = f ? m(r(b = e[v])[0], b[1]) : m(e[v])) && h instanceof s) return h;
                return new s(!1)
            }
            d = p.call(e)
        }
        for (y = d.next; !(b = y.call(d)).done;)
            if ("object" == typeof (h = u(d, m, b.value, f)) && h && h instanceof s) return h;
        return new s(!1)
    }).stop = function (e) {
        return new s(!0, e)
    }
}, function (e, t, n) {
    var r = n(8)("iterator"),
        o = !1;
    try {
        var i = 0,
            a = {
                next: function () {
                    return {
                        done: !!i++
                    }
                },
                return: function () {
                    o = !0
                }
            };
        a[r] = function () {
            return this
        }, Array.from(a, (function () {
            throw 2
        }))
    } catch (e) {}
    e.exports = function (e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var i = {};
            i[r] = function () {
                return {
                    next: function () {
                        return {
                            done: n = !0
                        }
                    }
                }
            }, e(i)
        } catch (e) {}
        return n
    }
}, function (e, t, n) {
    var r, o, i = n(7),
        a = n(133),
        c = i.process,
        u = c && c.versions,
        s = u && u.v8;
    s ? o = (r = s.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), e.exports = o && +o
}, function (e, t, n) {
    var r = n(122),
        o = n(96);
    e.exports = Object.keys || function (e) {
        return r(e, o)
    }
}, function (e, t, n) {
    var r = n(15),
        o = n(82),
        i = n(8)("species");
    e.exports = function (e, t) {
        var n;
        return o(e) && ("function" != typeof (n = e.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(167),
        i = n(105),
        a = n(106),
        c = n(68),
        u = n(33),
        s = n(29),
        f = n(8),
        l = n(61),
        d = n(69),
        p = n(138),
        v = p.IteratorPrototype,
        g = p.BUGGY_SAFARI_ITERATORS,
        h = f("iterator"),
        y = function () {
            return this
        };
    e.exports = function (e, t, n, f, p, b, m) {
        o(n, t, f);
        var w, O, j, _ = function (e) {
                if (e === p && k) return k;
                if (!g && e in M) return M[e];
                switch (e) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this)
                }
            },
            x = t + " Iterator",
            E = !1,
            M = e.prototype,
            S = M[h] || M["@@iterator"] || p && M[p],
            k = !g && S || _(p),
            N = "Array" == t && M.entries || S;
        if (N && (w = i(N.call(new e)), v !== Object.prototype && w.next && (l || i(w) === v || (a ? a(w, v) : "function" != typeof w[h] && u(w, h, y)), c(w, x, !0, !0), l && (d[x] = y))), "values" == p && S && "values" !== S.name && (E = !0, k = function () {
                return S.call(this)
            }), l && !m || M[h] === k || u(M, h, k), d[t] = k, p)
            if (O = {
                    values: _("values"),
                    keys: b ? k : _("keys"),
                    entries: _("entries")
                }, m)
                for (j in O) !g && !E && j in M || s(M, j, O[j]);
            else r({
                target: t,
                proto: !0,
                forced: g || E
            }, O);
        return O
    }
}, function (e, t, n) {
    var r = n(28),
        o = n(47),
        i = n(79),
        a = n(139),
        c = i("IE_PROTO"),
        u = Object.prototype;
    e.exports = a ? Object.getPrototypeOf : function (e) {
        return e = o(e), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null
    }
}, function (e, t, n) {
    var r = n(16),
        o = n(168);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var e, t = !1,
            n = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
        } catch (e) {}
        return function (n, i) {
            return r(n), o(i), t ? e.call(n, i) : n.__proto__ = i, n
        }
    }() : void 0)
}, function (e, t, n) {
    "use strict";
    var r = n(16);
    e.exports = function () {
        var e = r(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function (e, t, n) {
    var r = n(15),
        o = n(45),
        i = n(8)("match");
    e.exports = function (e) {
        var t;
        return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(85),
        o = n(108),
        i = n(16),
        a = n(46),
        c = n(129),
        u = n(110),
        s = n(34),
        f = n(86),
        l = n(84),
        d = n(10),
        p = [].push,
        v = Math.min,
        g = !d((function () {
            return !RegExp(4294967295, "y")
        }));
    r("split", 2, (function (e, t, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
            var r = String(a(this)),
                i = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === i) return [];
            if (void 0 === e) return [r];
            if (!o(e)) return t.call(r, e, i);
            for (var c, u, s, f = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), v = 0, g = new RegExp(e.source, d + "g");
                (c = l.call(g, r)) && !((u = g.lastIndex) > v && (f.push(r.slice(v, c.index)), c.length > 1 && c.index < r.length && p.apply(f, c.slice(1)), s = c[0].length, v = u, f.length >= i));) g.lastIndex === c.index && g.lastIndex++;
            return v === r.length ? !s && g.test("") || f.push("") : f.push(r.slice(v)), f.length > i ? f.slice(0, i) : f
        } : "0".split(void 0, 0).length ? function (e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t, [function (t, n) {
            var o = a(this),
                i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, o, n) : r.call(String(o), t, n)
        }, function (e, o) {
            var a = n(r, e, this, o, r !== t);
            if (a.done) return a.value;
            var l = i(e),
                d = String(this),
                p = c(l, RegExp),
                h = l.unicode,
                y = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (g ? "y" : "g"),
                b = new p(g ? l : "^(?:" + l.source + ")", y),
                m = void 0 === o ? 4294967295 : o >>> 0;
            if (0 === m) return [];
            if (0 === d.length) return null === f(b, d) ? [d] : [];
            for (var w = 0, O = 0, j = []; O < d.length;) {
                b.lastIndex = g ? O : 0;
                var _, x = f(b, g ? d : d.slice(O));
                if (null === x || (_ = v(s(b.lastIndex + (g ? 0 : O)), d.length)) === w) O = u(d, O, h);
                else {
                    if (j.push(d.slice(w, O)), j.length === m) return j;
                    for (var E = 1; E <= x.length - 1; E++)
                        if (j.push(x[E]), j.length === m) return j;
                    O = w = _
                }
            }
            return j.push(d.slice(w)), j
        }]
    }), !g)
}, function (e, t, n) {
    "use strict";
    var r = n(141).charAt;
    e.exports = function (e, t, n) {
        return t + (n ? r(e, t).length : 1)
    }
}, function (e, t, n) {
    var r = n(15),
        o = n(106);
    e.exports = function (e, t, n) {
        var i, a;
        return o && "function" == typeof (i = t.constructor) && i !== n && r(a = i.prototype) && a !== n.prototype && o(e, a), e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(72).some;
    r({
        target: "Array",
        proto: !0,
        forced: n(83)("some")
    }, {
        some: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return a
    }));
    n(22);
    var r = n(0);

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = function () {
        function e() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), i(this, "_html", void 0), i(this, "_dom", void 0)
        }
        var t, n, a;
        return t = e, (n = [{
            key: "html",
            get: function () {
                return this._html
            },
            set: function (e) {
                this._html = e, this._dom = Object(r.d)(this.html)
            }
        }, {
            key: "dom",
            get: function () {
                return this._dom
            }
        }]) && o(t.prototype, n), a && o(t, a), e
    }()
}, function (e, t, n) {
    var r = n(14),
        o = n(10),
        i = n(93);
    e.exports = !r && !o((function () {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (e, t, n) {
    var r = n(55);
    e.exports = r("native-function-to-string", Function.toString)
}, function (e, t, n) {
    var r = n(45),
        o = n(8)("toStringTag"),
        i = "Arguments" == r(function () {
            return arguments
        }());
    e.exports = function (e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}, function (e, t, n) {
    var r = n(10);
    e.exports = !!Object.getOwnPropertySymbols && !r((function () {
        return !String(Symbol())
    }))
}, function (e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !r.call({
            1: 2
        }, 1);
    t.f = i ? function (e) {
        var t = o(this, e);
        return !!t && t.enumerable
    } : r
}, function (e, t, n) {
    var r = n(28),
        o = n(120),
        i = n(51),
        a = n(23);
    e.exports = function (e, t) {
        for (var n = o(t), c = a.f, u = i.f, s = 0; s < n.length; s++) {
            var f = n[s];
            r(e, f) || c(e, f, u(t, f))
        }
    }
}, function (e, t, n) {
    var r = n(57),
        o = n(65),
        i = n(124),
        a = n(16);
    e.exports = r("Reflect", "ownKeys") || function (e) {
        var t = o.f(a(e)),
            n = i.f;
        return n ? t.concat(n(e)) : t
    }
}, function (e, t, n) {
    e.exports = n(7)
}, function (e, t, n) {
    var r = n(28),
        o = n(38),
        i = n(123).indexOf,
        a = n(64);
    e.exports = function (e, t) {
        var n, c = o(e),
            u = 0,
            s = [];
        for (n in c) !r(a, n) && r(c, n) && s.push(n);
        for (; t.length > u;) r(c, n = t[u++]) && (~i(s, n) || s.push(n));
        return s
    }
}, function (e, t, n) {
    var r = n(38),
        o = n(34),
        i = n(95),
        a = function (e) {
            return function (t, n, a) {
                var c, u = r(t),
                    s = o(u.length),
                    f = i(a, s);
                if (e && n != n) {
                    for (; s > f;)
                        if ((c = u[f++]) != c) return !0
                } else
                    for (; s > f; f++)
                        if ((e || f in u) && u[f] === n) return e || f || 0;
                return !e && -1
            }
        };
    e.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    var r = n(29);
    e.exports = function (e, t, n) {
        for (var o in t) r(e, o, t[o], n);
        return e
    }
}, function (e, t, n) {
    var r = n(8),
        o = n(69),
        i = r("iterator"),
        a = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (o.Array === e || a[i] === e)
    }
}, function (e, t, n) {
    var r = n(116),
        o = n(69),
        i = n(8)("iterator");
    e.exports = function (e) {
        if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
    }
}, function (e, t, n) {
    var r = n(16);
    e.exports = function (e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)), t
        }
    }
}, function (e, t, n) {
    var r = n(16),
        o = n(81),
        i = n(8)("species");
    e.exports = function (e, t) {
        var n, a = r(e).constructor;
        return void 0 === a || null == (n = r(a)[i]) ? t : o(n)
    }
}, function (e, t, n) {
    var r, o, i, a = n(7),
        c = n(10),
        u = n(45),
        s = n(70),
        f = n(131),
        l = n(93),
        d = n(132),
        p = a.location,
        v = a.setImmediate,
        g = a.clearImmediate,
        h = a.process,
        y = a.MessageChannel,
        b = a.Dispatch,
        m = 0,
        w = {},
        O = function (e) {
            if (w.hasOwnProperty(e)) {
                var t = w[e];
                delete w[e], t()
            }
        },
        j = function (e) {
            return function () {
                O(e)
            }
        },
        _ = function (e) {
            O(e.data)
        },
        x = function (e) {
            a.postMessage(e + "", p.protocol + "//" + p.host)
        };
    v && g || (v = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return w[++m] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, r(m), m
    }, g = function (e) {
        delete w[e]
    }, "process" == u(h) ? r = function (e) {
        h.nextTick(j(e))
    } : b && b.now ? r = function (e) {
        b.now(j(e))
    } : y && !d ? (i = (o = new y).port2, o.port1.onmessage = _, r = s(i.postMessage, i, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || c(x) ? r = "onreadystatechange" in l("script") ? function (e) {
        f.appendChild(l("script")).onreadystatechange = function () {
            f.removeChild(this), O(e)
        }
    } : function (e) {
        setTimeout(j(e), 0)
    } : (r = x, a.addEventListener("message", _, !1))), e.exports = {
        set: v,
        clear: g
    }
}, function (e, t, n) {
    var r = n(57);
    e.exports = r("document", "documentElement")
}, function (e, t, n) {
    var r = n(133);
    e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
}, function (e, t, n) {
    var r = n(57);
    e.exports = r("navigator", "userAgent") || ""
}, function (e, t, n) {
    "use strict";
    var r = n(81),
        o = function (e) {
            var t, n;
            this.promise = new e((function (e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
            })), this.resolve = r(t), this.reject = r(n)
        };
    e.exports.f = function (e) {
        return new o(e)
    }
}, function (e, t, n) {
    var r = n(14),
        o = n(23),
        i = n(16),
        a = n(102);
    e.exports = r ? Object.defineProperties : function (e, t) {
        i(e);
        for (var n, r = a(t), c = r.length, u = 0; c > u;) o.f(e, n = r[u++], t[n]);
        return e
    }
}, function (e, t, n) {
    t.f = n(8)
}, function (e, t, n) {
    var r = n(121),
        o = n(28),
        i = n(136),
        a = n(23).f;
    e.exports = function (e) {
        var t = r.Symbol || (r.Symbol = {});
        o(t, e) || a(t, e, {
            value: i.f(e)
        })
    }
}, function (e, t, n) {
    "use strict";
    var r, o, i, a = n(105),
        c = n(33),
        u = n(28),
        s = n(8),
        f = n(61),
        l = s("iterator"),
        d = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : d = !0), null == r && (r = {}), f || u(r, l) || c(r, l, (function () {
        return this
    })), e.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: d
    }
}, function (e, t, n) {
    var r = n(10);
    e.exports = !r((function () {
        function e() {}
        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(34),
        i = n(169),
        a = n(46),
        c = n(170),
        u = "".endsWith,
        s = Math.min;
    r({
        target: "String",
        proto: !0,
        forced: !c("endsWith")
    }, {
        endsWith: function (e) {
            var t = String(a(this));
            i(e);
            var n = arguments.length > 1 ? arguments[1] : void 0,
                r = o(t.length),
                c = void 0 === n ? r : s(o(n), r),
                f = String(e);
            return u ? u.call(t, f, c) : t.slice(c - f.length, c) === f
        }
    })
}, function (e, t, n) {
    var r = n(66),
        o = n(46),
        i = function (e) {
            return function (t, n) {
                var i, a, c = String(o(t)),
                    u = r(n),
                    s = c.length;
                return u < 0 || u >= s ? e ? "" : void 0 : (i = c.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === s || (a = c.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? c.charAt(u) : i : e ? c.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536
            }
        };
    e.exports = {
        codeAt: i(!1),
        charAt: i(!0)
    }
}, function (e, t) {
    e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function (e, t, n) {
    "use strict";
    var r = n(72).forEach,
        o = n(83);
    e.exports = o("forEach") ? function (e) {
        return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
    } : [].forEach
}, function (e, t, n) {
    "use strict";
    var r = n(85),
        o = n(16),
        i = n(34),
        a = n(46),
        c = n(110),
        u = n(86);
    r("match", 1, (function (e, t, n) {
        return [function (t) {
            var n = a(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var a = o(e),
                s = String(this);
            if (!a.global) return u(a, s);
            var f = a.unicode;
            a.lastIndex = 0;
            for (var l, d = [], p = 0; null !== (l = u(a, s));) {
                var v = String(l[0]);
                d[p] = v, "" === v && (a.lastIndex = c(s, i(a.lastIndex), f)), p++
            }
            return 0 === p ? null : d
        }]
    }))
}, function (e, t, n) {
    var r = n(46),
        o = "[" + n(146) + "]",
        i = RegExp("^" + o + o + "*"),
        a = RegExp(o + o + "*$"),
        c = function (e) {
            return function (t) {
                var n = String(r(t));
                return 1 & e && (n = n.replace(i, "")), 2 & e && (n = n.replace(a, "")), n
            }
        };
    e.exports = {
        start: c(1),
        end: c(2),
        trim: c(3)
    }
}, function (e, t) {
    e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
}, function (e, t, n) {
    var r = n(6),
        o = n(174);
    r({
        global: !0,
        forced: parseInt != o
    }, {
        parseInt: o
    })
}, function (e, t, n) {
    var r = n(64),
        o = n(15),
        i = n(28),
        a = n(23).f,
        c = n(80),
        u = n(178),
        s = c("meta"),
        f = 0,
        l = Object.isExtensible || function () {
            return !0
        },
        d = function (e) {
            a(e, s, {
                value: {
                    objectID: "O" + ++f,
                    weakData: {}
                }
            })
        },
        p = e.exports = {
            REQUIRED: !1,
            fastKey: function (e, t) {
                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, s)) {
                    if (!l(e)) return "F";
                    if (!t) return "E";
                    d(e)
                }
                return e[s].objectID
            },
            getWeakData: function (e, t) {
                if (!i(e, s)) {
                    if (!l(e)) return !0;
                    if (!t) return !1;
                    d(e)
                }
                return e[s].weakData
            },
            onFreeze: function (e) {
                return u && p.REQUIRED && l(e) && !i(e, s) && d(e), e
            }
        };
    r[s] = !0
}, function (e) {
    e.exports = JSON.parse('{"a":"6.4.47"}')
}, function (e, t, n) {
    var r = n(6),
        o = n(10),
        i = n(47),
        a = n(105),
        c = n(139);
    r({
        target: "Object",
        stat: !0,
        forced: o((function () {
            a(1)
        })),
        sham: !c
    }, {
        getPrototypeOf: function (e) {
            return a(i(e))
        }
    })
}, function (e, t, n) {
    n(6)({
        target: "Object",
        stat: !0
    }, {
        setPrototypeOf: n(106)
    })
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map((function (t) {
                var n = function (e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var o = (a = r, c = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c), "/*# ".concat(u, " */")),
                            i = r.sources.map((function (e) {
                                return "/*# sourceURL=".concat(r.sourceRoot).concat(e, " */")
                            }));
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    var a, c, u;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n
            })).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                null != i && (r[i] = !0)
            }
            for (var a = 0; a < e.length; a++) {
                var c = e[a];
                null != c[0] && r[c[0]] || (n && !c[2] ? c[2] = n : n && (c[2] = "(".concat(c[2], ") and (").concat(n, ")")), t.push(c))
            }
        }, t
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return "string" != typeof (e = e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) || t ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
    }
}, function (e, t, n) {
    "use strict";
    var r, o = {},
        i = function () {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
        },
        a = function () {
            var e = {};
            return function (t) {
                if (void 0 === e[t]) {
                    var n = document.querySelector(t);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                    e[t] = n
                }
                return e[t]
            }
        }();

    function c(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
                a = t.base ? i[0] + t.base : i[0],
                c = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            r[a] ? r[a].parts.push(c) : n.push(r[a] = {
                id: a,
                parts: [c]
            })
        }
        return n
    }

    function u(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = o[r.id],
                a = 0;
            if (i) {
                for (i.refs++; a < i.parts.length; a++) i.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) i.parts.push(h(r.parts[a], t))
            } else {
                for (var c = []; a < r.parts.length; a++) c.push(h(r.parts[a], t));
                o[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: c
                }
            }
        }
    }

    function s(e) {
        var t = document.createElement("style");
        if (void 0 === e.attributes.nonce) {
            var r = n.nc;
            r && (e.attributes.nonce = r)
        }
        if (Object.keys(e.attributes).forEach((function (n) {
                t.setAttribute(n, e.attributes[n])
            })), "function" == typeof e.insert) e.insert(t);
        else {
            var o = a(e.insert || "head");
            if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            o.appendChild(t)
        }
        return t
    }
    var f, l = (f = [], function (e, t) {
        return f[e] = t, f.filter(Boolean).join("\n")
    });

    function d(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = l(t, o);
        else {
            var i = document.createTextNode(o),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }

    function p(e, t, n) {
        var r = n.css,
            o = n.media,
            i = n.sourceMap;
        if (o && e.setAttribute("media", o), i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r))
        }
    }
    var v = null,
        g = 0;

    function h(e, t) {
        var n, r, o;
        if (t.singleton) {
            var i = g++;
            n = v || (v = s(t)), r = d.bind(null, n, i, !1), o = d.bind(null, n, i, !0)
        } else n = s(t), r = p.bind(null, n, t), o = function () {
            ! function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
            }(n)
        };
        return r(e),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else o()
            }
    }
    e.exports = function (e, t) {
        (t = t || {}).attributes = "object" == typeof t.attributes ? t.attributes : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i());
        var n = c(e, t);
        return u(n, t),
            function (e) {
                for (var r = [], i = 0; i < n.length; i++) {
                    var a = n[i],
                        s = o[a.id];
                    s && (s.refs--, r.push(s))
                }
                e && u(c(e, t), t);
                for (var f = 0; f < r.length; f++) {
                    var l = r[f];
                    if (0 === l.refs) {
                        for (var d = 0; d < l.parts.length; d++) l.parts[d]();
                        delete o[l.id]
                    }
                }
            }
    }
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    var r = n(7),
        o = n(92),
        i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    e.exports = i
}, function (e, t, n) {
    var r = n(7),
        o = n(115),
        i = r.WeakMap;
    e.exports = "function" == typeof i && /native code/.test(o.call(i))
}, function (e, t, n) {
    "use strict";
    var r = n(116),
        o = {};
    o[n(8)("toStringTag")] = "z", e.exports = "[object z]" !== String(o) ? function () {
        return "[object " + r(this) + "]"
    } : o.toString
}, function (e, t, n) {
    var r = n(7);
    e.exports = r.Promise
}, function (e, t, n) {
    var r, o, i, a, c, u, s, f, l = n(7),
        d = n(51).f,
        p = n(45),
        v = n(130).set,
        g = n(132),
        h = l.MutationObserver || l.WebKitMutationObserver,
        y = l.process,
        b = l.Promise,
        m = "process" == p(y),
        w = d(l, "queueMicrotask"),
        O = w && w.value;
    O || (r = function () {
        var e, t;
        for (m && (e = y.domain) && e.exit(); o;) {
            t = o.fn, o = o.next;
            try {
                t()
            } catch (e) {
                throw o ? a() : i = void 0, e
            }
        }
        i = void 0, e && e.enter()
    }, m ? a = function () {
        y.nextTick(r)
    } : h && !g ? (c = !0, u = document.createTextNode(""), new h(r).observe(u, {
        characterData: !0
    }), a = function () {
        u.data = c = !c
    }) : b && b.resolve ? (s = b.resolve(void 0), f = s.then, a = function () {
        f.call(s, r)
    }) : a = function () {
        v.call(l, r)
    }), e.exports = O || function (e) {
        var t = {
            fn: e,
            next: void 0
        };
        i && (i.next = t), o || (o = t, a()), i = t
    }
}, function (e, t, n) {
    var r = n(16),
        o = n(15),
        i = n(134);
    e.exports = function (e, t) {
        if (r(e), o(t) && t.constructor === e) return t;
        var n = i.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function (e, t, n) {
    var r = n(7);
    e.exports = function (e, t) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return {
                error: !1,
                value: e()
            }
        } catch (e) {
            return {
                error: !0,
                value: e
            }
        }
    }
}, function (e, t, n) {
    var r = n(38),
        o = n(65).f,
        i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function (e) {
        return a && "[object Window]" == i.call(e) ? function (e) {
            try {
                return o(e)
            } catch (e) {
                return a.slice()
            }
        }(e) : o(r(e))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(70),
        o = n(47),
        i = n(128),
        a = n(126),
        c = n(34),
        u = n(74),
        s = n(127);
    e.exports = function (e) {
        var t, n, f, l, d, p = o(e),
            v = "function" == typeof this ? this : Array,
            g = arguments.length,
            h = g > 1 ? arguments[1] : void 0,
            y = void 0 !== h,
            b = 0,
            m = s(p);
        if (y && (h = r(h, g > 2 ? arguments[2] : void 0, 2)), null == m || v == Array && a(m))
            for (n = new v(t = c(p.length)); t > b; b++) u(n, b, y ? h(p[b], b) : p[b]);
        else
            for (d = (l = m.call(p)).next, n = new v; !(f = d.call(l)).done; b++) u(n, b, y ? i(l, h, [f.value, b], !0) : f.value);
        return n.length = b, n
    }
}, function (e, t, n) {
    var r = n(8),
        o = n(71),
        i = n(33),
        a = r("unscopables"),
        c = Array.prototype;
    null == c[a] && i(c, a, o(null)), e.exports = function (e) {
        c[a][e] = !0
    }
}, function (e, t, n) {
    "use strict";
    var r = n(138).IteratorPrototype,
        o = n(71),
        i = n(63),
        a = n(68),
        c = n(69),
        u = function () {
            return this
        };
    e.exports = function (e, t, n) {
        var s = t + " Iterator";
        return e.prototype = o(r, {
            next: i(1, n)
        }), a(e, s, !1, !0), c[s] = u, e
    }
}, function (e, t, n) {
    var r = n(15);
    e.exports = function (e) {
        if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
        return e
    }
}, function (e, t, n) {
    var r = n(108);
    e.exports = function (e) {
        if (r(e)) throw TypeError("The method doesn't accept regular expressions");
        return e
    }
}, function (e, t, n) {
    var r = n(8)("match");
    e.exports = function (e) {
        var t = /./;
        try {
            "/./" [e](t)
        } catch (n) {
            try {
                return t[r] = !1, "/./" [e](t)
            } catch (e) {}
        }
        return !1
    }
}, function (e, t) {
    e.exports = Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(72).map;
    r({
        target: "Array",
        proto: !0,
        forced: !n(73)("map")
    }, {
        map: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(14),
        o = n(7),
        i = n(67),
        a = n(29),
        c = n(28),
        u = n(45),
        s = n(111),
        f = n(62),
        l = n(10),
        d = n(71),
        p = n(65).f,
        v = n(51).f,
        g = n(23).f,
        h = n(145).trim,
        y = o.Number,
        b = y.prototype,
        m = "Number" == u(d(b)),
        w = function (e) {
            var t, n, r, o, i, a, c, u, s = f(e, !1);
            if ("string" == typeof s && s.length > 2)
                if (43 === (t = (s = h(s)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = s.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === t) {
                switch (s.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2, o = 49;
                        break;
                    case 79:
                    case 111:
                        r = 8, o = 55;
                        break;
                    default:
                        return +s
                }
                for (a = (i = s.slice(2)).length, c = 0; c < a; c++)
                    if ((u = i.charCodeAt(c)) < 48 || u > o) return NaN;
                return parseInt(i, r)
            }
            return +s
        };
    if (i("Number", !y(" 0o1") || !y("0b1") || y("+0x1"))) {
        for (var O, j = function (e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof j && (m ? l((function () {
                    b.valueOf.call(n)
                })) : "Number" != u(n)) ? s(new y(w(t)), n, j) : w(t)
            }, _ = r ? p(y) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; _.length > x; x++) c(y, O = _[x]) && !c(j, O) && g(j, O, v(y, O));
        j.prototype = b, b.constructor = j, a(o, "Number", j)
    }
}, function (e, t, n) {
    var r = n(7),
        o = n(145).trim,
        i = n(146),
        a = r.parseInt,
        c = /^[+-]?0[Xx]/,
        u = 8 !== a(i + "08") || 22 !== a(i + "0x16");
    e.exports = u ? function (e, t) {
        var n = o(String(e));
        return a(n, t >>> 0 || (c.test(n) ? 16 : 10))
    } : a
}, function (e, t, n) {
    var r = n(14),
        o = n(7),
        i = n(67),
        a = n(111),
        c = n(23).f,
        u = n(65).f,
        s = n(108),
        f = n(107),
        l = n(29),
        d = n(10),
        p = n(97),
        v = n(8)("match"),
        g = o.RegExp,
        h = g.prototype,
        y = /a/g,
        b = /a/g,
        m = new g(y) !== y;
    if (r && i("RegExp", !m || d((function () {
            return b[v] = !1, g(y) != y || g(b) == b || "/a/i" != g(y, "i")
        })))) {
        for (var w = function (e, t) {
                var n = this instanceof w,
                    r = s(e),
                    o = void 0 === t;
                return !n && r && e.constructor === w && o ? e : a(m ? new g(r && !o ? e.source : e, t) : g((r = e instanceof w) ? e.source : e, r && o ? f.call(e) : t), n ? this : h, w)
            }, O = function (e) {
                e in w || c(w, e, {
                    configurable: !0,
                    get: function () {
                        return g[e]
                    },
                    set: function (t) {
                        g[e] = t
                    }
                })
            }, j = u(g), _ = 0; j.length > _;) O(j[_++]);
        h.constructor = w, w.prototype = h, l(o, "RegExp", w)
    }
    p("RegExp")
}, function (e, t, n) {
    "use strict";
    var r = n(177),
        o = n(179);
    e.exports = r("Map", (function (e) {
        return function () {
            return e(this, arguments.length ? arguments[0] : void 0)
        }
    }), o, !0)
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        o = n(7),
        i = n(67),
        a = n(29),
        c = n(148),
        u = n(99),
        s = n(98),
        f = n(15),
        l = n(10),
        d = n(100),
        p = n(68),
        v = n(111);
    e.exports = function (e, t, n, g, h) {
        var y = o[e],
            b = y && y.prototype,
            m = y,
            w = g ? "set" : "add",
            O = {},
            j = function (e) {
                var t = b[e];
                a(b, e, "add" == e ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this
                } : "delete" == e ? function (e) {
                    return !(h && !f(e)) && t.call(this, 0 === e ? 0 : e)
                } : "get" == e ? function (e) {
                    return h && !f(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                } : "has" == e ? function (e) {
                    return !(h && !f(e)) && t.call(this, 0 === e ? 0 : e)
                } : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this
                })
            };
        if (i(e, "function" != typeof y || !(h || b.forEach && !l((function () {
                (new y).entries().next()
            }))))) m = n.getConstructor(t, e, g, w), c.REQUIRED = !0;
        else if (i(e, !0)) {
            var _ = new m,
                x = _[w](h ? {} : -0, 1) != _,
                E = l((function () {
                    _.has(1)
                })),
                M = d((function (e) {
                    new y(e)
                })),
                S = !h && l((function () {
                    for (var e = new y, t = 5; t--;) e[w](t, t);
                    return !e.has(-0)
                }));
            M || ((m = t((function (t, n) {
                s(t, m, e);
                var r = v(new y, t, m);
                return null != n && u(n, r[w], r, g), r
            }))).prototype = b, b.constructor = m), (E || S) && (j("delete"), j("has"), g && j("get")), (S || x) && j(w), h && b.clear && delete b.clear
        }
        return O[e] = m, r({
            global: !0,
            forced: m != y
        }, O), p(m, e), h || n.setStrong(m, e, g), m
    }
}, function (e, t, n) {
    var r = n(10);
    e.exports = !r((function () {
        return Object.isExtensible(Object.preventExtensions({}))
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(23).f,
        o = n(71),
        i = n(125),
        a = n(70),
        c = n(98),
        u = n(99),
        s = n(104),
        f = n(97),
        l = n(14),
        d = n(148).fastKey,
        p = n(56),
        v = p.set,
        g = p.getterFor;
    e.exports = {
        getConstructor: function (e, t, n, s) {
            var f = e((function (e, r) {
                    c(e, f, t), v(e, {
                        type: t,
                        index: o(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), l || (e.size = 0), null != r && u(r, e[s], e, n)
                })),
                p = g(t),
                h = function (e, t, n) {
                    var r, o, i = p(e),
                        a = y(e, t);
                    return a ? a.value = n : (i.last = a = {
                        index: o = d(t, !0),
                        key: t,
                        value: n,
                        previous: r = i.last,
                        next: void 0,
                        removed: !1
                    }, i.first || (i.first = a), r && (r.next = a), l ? i.size++ : e.size++, "F" !== o && (i.index[o] = a)), e
                },
                y = function (e, t) {
                    var n, r = p(e),
                        o = d(t);
                    if ("F" !== o) return r.index[o];
                    for (n = r.first; n; n = n.next)
                        if (n.key == t) return n
                };
            return i(f.prototype, {
                clear: function () {
                    for (var e = p(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                    e.first = e.last = void 0, l ? e.size = 0 : this.size = 0
                },
                delete: function (e) {
                    var t = p(this),
                        n = y(this, e);
                    if (n) {
                        var r = n.next,
                            o = n.previous;
                        delete t.index[n.index], n.removed = !0, o && (o.next = r), r && (r.previous = o), t.first == n && (t.first = r), t.last == n && (t.last = o), l ? t.size-- : this.size--
                    }
                    return !!n
                },
                forEach: function (e) {
                    for (var t, n = p(this), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;)
                        for (r(t.value, t.key, this); t && t.removed;) t = t.previous
                },
                has: function (e) {
                    return !!y(this, e)
                }
            }), i(f.prototype, n ? {
                get: function (e) {
                    var t = y(this, e);
                    return t && t.value
                },
                set: function (e, t) {
                    return h(this, 0 === e ? 0 : e, t)
                }
            } : {
                add: function (e) {
                    return h(this, e = 0 === e ? 0 : e, e)
                }
            }), l && r(f.prototype, "size", {
                get: function () {
                    return p(this).size
                }
            }), f
        },
        setStrong: function (e, t, n) {
            var r = t + " Iterator",
                o = g(t),
                i = g(r);
            s(e, t, (function (e, t) {
                v(this, {
                    type: r,
                    target: e,
                    state: o(e),
                    kind: t,
                    last: void 0
                })
            }), (function () {
                for (var e = i(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                    value: n.key,
                    done: !1
                } : "values" == t ? {
                    value: n.value,
                    done: !1
                } : {
                    value: [n.key, n.value],
                    done: !1
                } : (e.target = void 0, {
                    value: void 0,
                    done: !0
                })
            }), n ? "entries" : "values", !n, !0), f(t)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(85),
        o = n(16),
        i = n(47),
        a = n(34),
        c = n(66),
        u = n(46),
        s = n(110),
        f = n(86),
        l = Math.max,
        d = Math.min,
        p = Math.floor,
        v = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        g = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, (function (e, t, n) {
        return [function (n, r) {
            var o = u(this),
                i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r)
        }, function (e, i) {
            var u = n(t, e, this, i);
            if (u.done) return u.value;
            var p = o(e),
                v = String(this),
                g = "function" == typeof i;
            g || (i = String(i));
            var h = p.global;
            if (h) {
                var y = p.unicode;
                p.lastIndex = 0
            }
            for (var b = [];;) {
                var m = f(p, v);
                if (null === m) break;
                if (b.push(m), !h) break;
                "" === String(m[0]) && (p.lastIndex = s(v, a(p.lastIndex), y))
            }
            for (var w, O = "", j = 0, _ = 0; _ < b.length; _++) {
                m = b[_];
                for (var x = String(m[0]), E = l(d(c(m.index), v.length), 0), M = [], S = 1; S < m.length; S++) M.push(void 0 === (w = m[S]) ? w : String(w));
                var k = m.groups;
                if (g) {
                    var N = [x].concat(M, E, v);
                    void 0 !== k && N.push(k);
                    var I = String(i.apply(void 0, N))
                } else I = r(x, v, E, M, k, i);
                E >= j && (O += v.slice(j, E) + I, j = E + x.length)
            }
            return O + v.slice(j)
        }];

        function r(e, n, r, o, a, c) {
            var u = r + e.length,
                s = o.length,
                f = g;
            return void 0 !== a && (a = i(a), f = v), t.call(c, f, (function (t, i) {
                var c;
                switch (i.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, r);
                    case "'":
                        return n.slice(u);
                    case "<":
                        c = a[i.slice(1, -1)];
                        break;
                    default:
                        var f = +i;
                        if (0 === f) return t;
                        if (f > s) {
                            var l = p(f / 10);
                            return 0 === l ? t : l <= s ? void 0 === o[l - 1] ? i.charAt(1) : o[l - 1] + i.charAt(1) : t
                        }
                        c = o[f - 1]
                }
                return void 0 === c ? "" : c
            }))
        }
    }))
}, function (e, t, n) {
    t = e.exports = n(152)(!0);
    var r = n(153),
        o = r(n(182)),
        i = r(n(183));
    t.push([e.i, ".ad-logo__MZL8C {\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  z-index: 10000;\n  pointer-events: none;\n}\n.ad-logo-pangle__Io-u7 {\n  width: 36px;\n  height: 14px;\n  background: no-repeat center / contain url(" + o + ");\n}\n.ad-logo-bd__2QOWy {\n  width: 20px;\n  height: 14px;\n  background: no-repeat center / contain url(" + i + ");\n}\n", "", {
        version: 3,
        sources: ["/Users/liupy525/repos/team/union_playable_sdk/src/components/adLogo/style.less", "style.less"],
        names: [],
        mappings: "AAEA;EACE,eAAA;EACA,YAAA;EACA,UAAA;EACA,cAAA;EACA,oBAAA;ACDF;ADIA;EACE,WAAA;EACA,YAAA;EACA,oEAAA;ACFF;ADKA;EACE,WAAA;EACA,YAAA;EACA,oEAAA;ACHF",
        file: "style.less",
        sourcesContent: ["@import '../../styles/constants.less';\n\n.ad-logo {\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  z-index: @componentBaseZIndex;\n  pointer-events: none;\n}\n\n.ad-logo-pangle {\n  width: 36px;\n  height: 14px;\n  background: no-repeat center / contain url(./pangle.svg);\n}\n\n.ad-logo-bd {\n  width: 20px;\n  height: 14px;\n  background: no-repeat center / contain url(./bd.svg);\n}\n", ".ad-logo {\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  z-index: 10000;\n  pointer-events: none;\n}\n.ad-logo-pangle {\n  width: 36px;\n  height: 14px;\n  background: no-repeat center / contain url(./pangle.svg);\n}\n.ad-logo-bd {\n  width: 20px;\n  height: 14px;\n  background: no-repeat center / contain url(./bd.svg);\n}\n"]
    }]), t.locals = {
        adLogo: "ad-logo__MZL8C",
        adLogoPangle: "ad-logo-pangle__Io-u7",
        adLogoBd: "ad-logo-bd__2QOWy"
    }
}, function (e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAzNiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMkMwIDAuODk1NDMgMC44OTU0MzEgMCAyIDBIMzRDMzUuMTA0NiAwIDM2IDAuODk1NDMxIDM2IDJWMTJDMzYgMTMuMTA0NiAzNS4xMDQ2IDE0IDM0IDE0SDJDMC44OTU0MzEgMTQgMCAxMy4xMDQ2IDAgMTJWMloiIGZpbGw9IiMxNjE4MjMiIGZpbGwtb3BhY2l0eT0iMC4xMiIvPgo8cGF0aCBkPSJNMjIuMjA4IDMuMzQ0TDIxLjU3NiAzLjQ1NkMyMS43MzYgMy43MTIgMjEuODg4IDQgMjIuMDE2IDQuMzEySDE5LjA0VjYuNjU2QzE5LjAyNCA4LjI3MiAxOC43ODQgOS41MjggMTguMzM2IDEwLjQ0TDE4LjgwOCAxMC44NjRDMTkuMzI4IDkuODA4IDE5LjYgOC40MDggMTkuNjMyIDYuNjU2VjQuODY0SDI1LjU2VjQuMzEySDIyLjY0OEMyMi41MDQgMy45NTIgMjIuMzYgMy42MzIgMjIuMjA4IDMuMzQ0Wk0zMi42MzIgNy44NDhIMjcuNDE2VjEwLjc5MkgyOFYxMC4zNjhIMzIuMDQ4VjEwLjc5MkgzMi42MzJWNy44NDhaTTI4IDkuODI0VjguNEgzMi4wNDhWOS44MjRIMjhaTTI3Ljg5NiA1LjE0NEgyOS44MDhWNi40NEgyNi4zODRWNy4wMDhIMzMuNjE2VjYuNDRIMzAuMzkyVjUuMTQ0SDMzLjAwOFY0LjU5MkgzMC4zOTJWMy40NTZIMjkuODA4VjQuNTkySDI4LjI0QzI4LjQgNC4yOTYgMjguNTI4IDMuOTg0IDI4LjYzMiAzLjY0OEwyOC4wNTYgMy41ODRDMjcuOCA0LjQyNCAyNy4zMDQgNS4xMzYgMjYuNTg0IDUuNzEyTDI2LjkyOCA2LjE2OEMyNy4zMDQgNS44NTYgMjcuNjI0IDUuNTEyIDI3Ljg5NiA1LjE0NFoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNzUiLz4KPHBhdGggZD0iTTEzLjk0NDggNy4wMDAyM0wxMi4yMTc4IDUuOTYxNTlDMTIuMTc3MyA1LjkzNzQgMTIuMTI3NSA1Ljk2NzkzIDEyLjEyNzUgNi4wMTY2OVY4LjU5ODY0QzEyLjEyNzUgOC42NDQyMyAxMi4xNTA1IDguNjg1ODUgMTIuMTg4MyA4LjcwODQ1TDEzLjkxNTMgOS43NDcwOUMxMy45NTU3IDkuNzcxMjggMTQuMDA1NiA5Ljc0MDc1IDE0LjAwNTYgOS42OTE5OVY3LjExMDA0QzE0LjAwNTIgNy4wNjQ4NSAxMy45ODIyIDcuMDIyODMgMTMuOTQ0OCA3LjAwMDIzWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGQ9Ik0xMS41ODE3IDUuNTc5MzNMOS44NTQ2MiA0LjU0MDY5QzkuODE0NTggNC41MTY1MSA5Ljc2NDM0IDQuNTQ3MDMgOS43NjQzNCA0LjU5NTc5VjguNjA4ODNDOS43NjQzNCA4LjY0MzcyIDkuNzkxNTQgOC42NzIyNiA5LjgyNDc4IDguNjcyMjZIMTEuNTgyQzExLjYxNTMgOC42NzIyNiAxMS42NDI1IDguNjQzNzIgMTEuNjQyNSA4LjYwODgzVjUuNjg5MTRDMTEuNjQyMSA1LjY0Mzk1IDExLjYxOTEgNS42MDE5MyAxMS41ODE3IDUuNTc5MzNaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHBhdGggZD0iTTcuNDkxNjggOS43NDcxNUw5LjIxODcyIDguNzA4NTFDOS4yNTYxMSA4LjY4NTkyIDkuMjc5NTMgOC42NDM4OSA5LjI3OTUzIDguNTk4N1Y0LjMwMzhDOS4yNzk1MyA0LjI1NTA0IDkuMjI5MjkgNC4yMjQ1MSA5LjE4OTI1IDQuMjQ4N0w3LjQ2MjIxIDUuMjg3MzRDNy40MjQ4MiA1LjMwOTkzIDcuNDAxNCA1LjM1MTk2IDcuNDAxNCA1LjM5NzE1VjkuNjkyMDVDNy40MDE0IDkuNzQwODEgNy40NTEyNiA5Ljc3MTM0IDcuNDkxNjggOS43NDcxNVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBkPSJNMTQuNDkwMiA3LjQzODM5VjguNjA5NDNDMTQuNDkwMiA4LjY0NDMyIDE0LjUxNzQgOC42NzI4NiAxNC41NTA2IDguNjcyODZIMTYuNDk3OEMxNi41NTk4IDguNjcyODYgMTYuNTgxMyA4LjU4Njg0IDE2LjUyNzcgOC41NTQ3M0wxNC41ODA1IDcuMzgzNjlDMTQuNTQwNCA3LjM1OTExIDE0LjQ5MDIgNy4zODk2MyAxNC40OTAyIDcuNDM4MzlaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHBhdGggZD0iTTYuODI1NTEgNS42Njk1OUwyLjAzMDQ0IDguNTUzNjFDMS45NzY4MSA4LjU4NTcyIDEuOTk4NzEgOC42NzE3NCAyLjA2MDI5IDguNjcxNzRINi44NTU3M0M2Ljg4ODk3IDguNjcxNzQgNi45MTYxNyA4LjY0MzIgNi45MTYxNyA4LjYwODMyVjUuNzI0N0M2LjkxNjE3IDUuNjc1OTQgNi44NjU5MyA1LjY0NTQxIDYuODI1NTEgNS42Njk1OVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4K"
}, function (e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMkMwIDAuODk1NDMgMC44OTU0MzEgMCAyIDBIMThDMTkuMTA0NiAwIDIwIDAuODk1NDMxIDIwIDJWMTJDMjAgMTMuMTA0NiAxOS4xMDQ2IDE0IDE4IDE0SDJDMC44OTU0MzEgMTQgMCAxMy4xMDQ2IDAgMTJWMloiIGZpbGw9IiMxNjE4MjMiIGZpbGwtb3BhY2l0eT0iMC4xMiIvPgo8cGF0aCBkPSJNNi4yMDggMy4zNDRMNS41NzYgMy40NTZDNS43MzYgMy43MTIgNS44ODggNCA2LjAxNiA0LjMxMkgzLjA0VjYuNjU2QzMuMDI0IDguMjcyIDIuNzg0IDkuNTI4IDIuMzM2IDEwLjQ0TDIuODA4IDEwLjg2NEMzLjMyOCA5LjgwOCAzLjYgOC40MDggMy42MzIgNi42NTZWNC44NjRIOS41NlY0LjMxMkg2LjY0OEM2LjUwNCAzLjk1MiA2LjM2IDMuNjMyIDYuMjA4IDMuMzQ0Wk0xNi42MzIgNy44NDhIMTEuNDE2VjEwLjc5MkgxMlYxMC4zNjhIMTYuMDQ4VjEwLjc5MkgxNi42MzJWNy44NDhaTTEyIDkuODI0VjguNEgxNi4wNDhWOS44MjRIMTJaTTExLjg5NiA1LjE0NEgxMy44MDhWNi40NEgxMC4zODRWNy4wMDhIMTcuNjE2VjYuNDRIMTQuMzkyVjUuMTQ0SDE3LjAwOFY0LjU5MkgxNC4zOTJWMy40NTZIMTMuODA4VjQuNTkySDEyLjI0QzEyLjQgNC4yOTYgMTIuNTI4IDMuOTg0IDEyLjYzMiAzLjY0OEwxMi4wNTYgMy41ODRDMTEuOCA0LjQyNCAxMS4zMDQgNS4xMzYgMTAuNTg0IDUuNzEyTDEwLjkyOCA2LjE2OEMxMS4zMDQgNS44NTYgMTEuNjI0IDUuNTEyIDExLjg5NiA1LjE0NFoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNzUiLz4KPC9zdmc+Cg=="
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(2), n(5), n(9), n(20), n(36), n(37), n(27), n(58), n(30), n(21), n(75), n(54), n(13), n(48), n(35), n(140), n(24), n(109), n(25);
    var r = n(0);

    function o(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var i = "playable-sdk",
        a = Object(r.p)() ? "https://sf16-muse-va.ibytedtos.com/obj/union-fe-nc-i18n/playable/sdk/playable-sdk.js" : "https://sf3-ttcdn-tos.pstatp.com/obj/union-fe-nc/playable/sdk/playable-sdk.js";
    var c = function () {
        var e = void 0;
        if (document.currentScript) e = document.currentScript;
        else {
            var t = o(document.scripts).filter((function (e) {
                return e.src.indexOf(i) > -1
            }));
            t.length > 0 && (e = t[0])
        }
        return e ? e.src : a
    }().split("/").slice(0, -1).join("/");
    c.endsWith("/") || (c += "/"), n.p = c;
    n(11), n(41), n(22), n(42), n(43), n(44), n(12), n(32), n(88);
    var u = n(1),
        s = n(26);

    function f() {}
    window.PLAYABLE_LOGS || (window.PLAYABLE_LOGS = []);
    var l = function () {
            if (window.PLAYABLE_LOGS) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                window.PLAYABLE_LOGS.push("".concat(Date.now(), "> ").concat(t.join(" "))), window.PLAYABLE_LOGS.length > 300 && window.PLAYABLE_LOGS.splice(0, window.PLAYABLE_LOGS.length - 200)
            }
        },
        d = u.h || "1" === Object(s.a)("show_playable_log") ? {
            group: function (e) {
                return console.group(e)
            },
            groupEnd: function () {
                return console.groupEnd()
            },
            debug: function () {
                var e;
                (e = console).debug.apply(e, arguments), l.apply(void 0, arguments)
            }
        } : {
            group: f,
            groupEnd: f,
            debug: l
        },
        p = n(39),
        v = n(40),
        g = [],
        h = {},
        y = function (e, t) {
            if (g.indexOf(e) > -1) throw new Error("Has Registered ".concat(e, " Event"));
            g.push(e), t((function (t) {
                h.hasOwnProperty(e) && h[e].forEach((function (e) {
                    e.callback(t)
                }))
            }))
        },
        b = n(3);

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function w(e, t, n) {
        return t && m(e.prototype, t), n && m(e, n), e
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var j = !1;

    function _() {
        j || (j = !0, Object(b.a)("playableShow"))
    }
    var x, E = new(function () {
            function e() {
                var t = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), O(this, "_muted", !0), O(this, "_viewable", !1), O(this, "_events", {
                    viewableChange: [],
                    mutedChange: []
                }), y("visibilityChange", (function (e) {
                    t.addEventListener("viewableChange", e)
                })), y("muteChange", (function (e) {
                    t.addEventListener("mutedChange", e)
                })), this.initStates().catch((function (e) {
                    return console.error(e)
                }))
            }
            return w(e, [{
                key: "muted",
                get: function () {
                    return this._muted
                }
            }, {
                key: "viewable",
                get: function () {
                    return this._viewable
                }
            }]), w(e, [{
                key: "initStates",
                value: function () {
                    return regeneratorRuntime.async((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Promise.all([this.initViewable(), this.initMuted()]));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), null, this)
                }
            }, {
                key: "initViewable",
                value: function () {
                    var e, t;
                    return regeneratorRuntime.async((function (n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return (e = []).push(Object(r.s)()), Object(r.m)() && e.push(Object(r.n)()), n.next = 5, regeneratorRuntime.awrap(Promise.all(e));
                            case 5:
                                n.sent.forEach((function (e) {
                                    void 0 === t && (t = e)
                                })), void 0 === t && (t = !document.hidden), this.setViewable(t, !0);
                            case 9:
                            case "end":
                                return n.stop()
                        }
                    }), null, this)
                }
            }, {
                key: "initMuted",
                value: function () {
                    var e, t;
                    return regeneratorRuntime.async((function (n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return (e = []).push(Object(r.j)()), Object(r.m)() && e.push(Object(r.n)().then((function (e) {
                                    return void 0 === e ? void 0 : !e
                                }))), n.next = 5, regeneratorRuntime.awrap(Promise.all(e));
                            case 5:
                                n.sent.forEach((function (e) {
                                    void 0 === t && (t = e)
                                })), void 0 === t && (t = document.hidden), this.setMuted(t);
                            case 9:
                            case "end":
                                return n.stop()
                        }
                    }), null, this)
                }
            }, {
                key: "setMuted",
                value: function (e) {
                    this._muted !== e && (this._muted = e, this._events.mutedChange.forEach((function (t) {
                        t({
                            muted: e
                        })
                    })))
                }
            }, {
                key: "setViewable",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e && _(), this._viewable !== e && (this._viewable = e, this._events.viewableChange.forEach((function (n) {
                        n({
                            viewable: e,
                            isInit: t
                        })
                    })))
                }
            }, {
                key: "addEventListener",
                value: function (e, t) {
                    this._events[e].push(t)
                }
            }, {
                key: "removeEventListener",
                value: function (e, t) {
                    var n = this._events[e].indexOf(t);
                    n > -1 && this._events[e].splice(n, 1)
                }
            }]), e
        }()),
        M = (n(87), n(31)),
        S = location.search.indexOf("is_muted=1") > -1;

    function k(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    u.d && E.addEventListener("mutedChange", (function (e) {
            var t = e.muted;
            S = t, M.a.emit({
                muted: t
            })
        })),
        function (e) {
            e.muted = "muted", e.voiced = "voiced"
        }(x || (x = {}));
    var N = [];

    function I(e) {
        if (d.group("handleAudioState"), d.debug("viewable:", E.viewable), d.debug("audio:", e.audio), d.debug("audio.muted:", e.audio.muted), d.debug("prevState:", e.prevState), S) return D(e), void d.groupEnd();
        if (E.viewable) e.prevState === x.voiced && ((t = e).audio.muted = !1, setTimeout((function () {
            if (!t.paused && t.audio.paused) {
                var e = t.audio.play();
                e && e.catch && e.catch((function (e) {
                    console.error("Error in resume audio", e)
                }))
            }
        }), 400)), e.prevState = void 0;
        else {
            if (void 0 !== e.prevState) return D(e), void d.groupEnd();
            e.audio.muted ? e.prevState = x.muted : (e.prevState = x.voiced, D(e))
        }
        var t;
        d.groupEnd()
    }

    function A(e, t) {
        if (d.group("addAudioToList"), d.debug("audio:", e), d.debug("prevState:", t), T(e)) d.groupEnd();
        else {
            var n;
            if (!(e instanceof HTMLAudioElement)) throw d.groupEnd(), new Error("Wrong type of audio: ".concat(Object(r.g)(e)));
            n = {
                audio: e,
                prevState: t,
                paused: e.paused
            }, e.addEventListener("play", (function () {
                d.group("audio play event"), n.paused = !1, d.groupEnd()
            })), e.addEventListener("volumechange", (function () {
                d.group("volumechange"), I(n), d.groupEnd()
            })), e.addEventListener("durationchange", (function () {
                d.group("durationchange"), I(n), d.groupEnd()
            })), d.debug("before handle, viewable: ".concat(E.viewable, ", muted: ").concat(e.muted, ", prevState: ").concat(n.prevState)), I(n), d.debug("after handle, viewable: ".concat(E.viewable, ", muted: ").concat(e.muted, ", prevState: ").concat(n.prevState)), N.push(n), d.groupEnd()
        }
    }

    function D(e) {
        (e.audio.src || e.audio.currentSrc) && (e.audio.muted = !0, setTimeout((function () {
            e.audio.muted || e.audio.paused || e.audio.pause()
        }), 400))
    }

    function T(e) {
        for (var t = 0; t < N.length; t++)
            if (N[t].audio === e) return N[t]
    }

    function L(e) {
        return function () {
            d.group(e), N.forEach((function (e) {
                I(e)
            })), d.groupEnd()
        }
    }
    window._allAudios = N;
    var P, R = L("handleVisibilitychange"),
        C = L("handleForceMutedchange");

    function z(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    Object(r.v)((function () {
            ! function () {
                var e = window.Audio;
                window._Audio = e, window.Audio = function (t) {
                    var n = new e(t);
                    return A(n), n
                }, window.Audio.prototype = e.prototype;
                var t = HTMLAudioElement.prototype.pause;
                HTMLAudioElement.prototype.pause = function () {
                    d.debug("audio pause()");
                    var e = T(this);
                    return e && (e.paused = !0), t.call(this)
                };
                var n = HTMLAudioElement.prototype.play;
                HTMLAudioElement.prototype.play = function () {
                    d.debug("audio play()");
                    var e = T(this);
                    return e && (e.paused = !1), n.call(this)
                }
            }()
        })), Object(r.v)((function () {
            window.addEventListener("load", (function () {
                d.group("loaded"), d.debug("viewable:", E.viewable), k(document.getElementsByTagName("audio")).forEach((function (e) {
                    d.debug("audio:", e), d.debug("muted:", e.muted), A(e, e.muted ? void 0 : x.voiced)
                })), d.groupEnd()
            }))
        })), Object(r.v)((function () {
            E.addEventListener("viewableChange", R)
        })), Object(r.v)((function () {
            M.a.on(C)
        })),
        function (e) {
            e.muted = "muted", e.voiced = "voiced"
        }(P || (P = {}));
    var B = [];

    function F(e) {
        if (d.group("handleVideoState"), d.debug("viewable:", E.viewable), d.debug("video:", e.video), d.debug("video.muted:", e.video.muted), d.debug("prevState:", e.prevState), S) return U(e), void d.groupEnd();
        if (E.viewable) e.prevState === P.voiced && ((t = e).video.muted = !1, setTimeout((function () {
            if (!t.paused && t.video.paused) {
                var e = t.video.play();
                e && e.catch && e.catch((function (e) {
                    console.error("Error in resume video", e)
                }))
            }
        }), 400)), e.prevState = void 0;
        else {
            if (void 0 !== e.prevState) return U(e), void d.groupEnd();
            e.video.muted ? e.prevState = P.muted : (e.prevState = P.voiced, U(e))
        }
        var t;
        d.groupEnd()
    }

    function J(e, t) {
        if (d.group("addVideoToList"), d.debug("video:", e), d.debug("prevState:", t), Q(e)) d.groupEnd();
        else {
            var n;
            if (!(e instanceof HTMLVideoElement)) throw d.groupEnd(), new Error("Wrong type of video: ".concat(Object(r.g)(e)));
            n = {
                video: e,
                prevState: t,
                paused: e.paused
            }, e.addEventListener("play", (function () {
                d.group("video play event"), n.paused = !1, d.groupEnd()
            })), e.addEventListener("volumechange", (function () {
                d.group("volumechange"), F(n), d.groupEnd()
            })), d.debug("before handle, viewable: ".concat(E.viewable, ", muted: ").concat(e.muted, ", prevState: ").concat(n.prevState)), F(n), d.debug("after handle, viewable: ".concat(E.viewable, ", muted: ").concat(e.muted, ", prevState: ").concat(n.prevState)), B.push(n), d.groupEnd()
        }
    }

    function U(e) {
        e.video.muted = !0, setTimeout((function () {
            e.video.muted || e.video.paused || e.video.pause()
        }), 400)
    }

    function Q(e) {
        for (var t = 0; t < B.length; t++)
            if (B[t].video === e) return B[t]
    }

    function V(e) {
        return function () {
            d.group(e), B.forEach((function (e) {
                F(e)
            })), d.groupEnd()
        }
    }
    window._allVideos = B;
    var Y = V("handleVisibilitychange"),
        W = V("handleForceMutedchange");
    Object(r.v)((function () {
        ! function () {
            var e = HTMLVideoElement.prototype.pause;
            HTMLVideoElement.prototype.pause = function () {
                d.debug("video pause()");
                var t = Q(this);
                return t && (t.paused = !0), e.call(this)
            };
            var t = HTMLVideoElement.prototype.play;
            HTMLVideoElement.prototype.play = function () {
                d.debug("video play()");
                var e = Q(this);
                return e && (e.paused = !1), t.call(this)
            }
        }()
    })), Object(r.v)((function () {
        window.addEventListener("load", (function () {
            d.group("loaded"), d.debug("viewable:", E.viewable), z(document.getElementsByTagName("video")).forEach((function (e) {
                d.debug("video:", e), d.debug("muted:", e.muted), J(e, e.muted ? void 0 : P.voiced)
            })), d.groupEnd()
        }))
    })), Object(r.v)((function () {
        E.addEventListener("viewableChange", Y)
    })), Object(r.v)((function () {
        M.a.on(W)
    })), Object(r.v)((function () {
        var e = document.createElement;
        document._createElement = e, document.createElement = function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            var o = e.apply(document, n);
            return o instanceof HTMLAudioElement ? A(o) : o instanceof HTMLVideoElement && J(o), o
        }
    }));
    n(112);
    var G = [];

    function H() {
        var e = window.AudioNode || window.webkitAudioNode,
            t = e.prototype.connect;
        e.prototype.connect = function (e, n, r) {
            if (!(e instanceof AudioDestinationNode)) return t.call(this, e, n, r);
            var o = e.context.createGain();
            return function (e) {
                var t;
                if (d.group("addWebAudioToList"), d.debug("webAudio:", e), G.some((function (t) {
                        return t.audio === e
                    }))) return;
                t = {
                    audio: e
                }, d.debug("before handle, viewable: ".concat(E.viewable, ", gain: ").concat(e.gain.value)), q(t), d.debug("after handle, viewable: ".concat(E.viewable, ", gain: ").concat(e.gain.value)), G.push(t), d.groupEnd()
            }(o), t.call(this, o), t.call(o, e, n, r)
        }
    }

    function q(e) {
        if (d.group("handleWebAudioState"), d.debug("viewable:", E.viewable), d.debug("webAudio:", e.audio), d.debug("webAudio.gain:", e.audio.gain.value), S) return Z(e.audio), void d.groupEnd();
        E.viewable ? function (e) {
            e.gain.value = 1;
            var t = e.context;
            "interrupted" === e.context.state && t.resume && t.resume()
        }(e.audio) : Z(e.audio), d.groupEnd()
    }

    function Z(e) {
        e.gain.value = 1e-4
    }

    function X(e) {
        return function () {
            d.group(e), G.forEach((function (e) {
                q(e)
            })), d.groupEnd()
        }
    }
    window._allWebAudios = G;
    var K = X("handleVisibilitychange"),
        $ = X("handleForceMutedchange");
    Object(r.v)((function () {
        H()
    })), Object(r.v)((function () {
        E.addEventListener("viewableChange", K)
    })), Object(r.v)((function () {
        M.a.on($)
    }));
    var ee = Object(r.e)();
    Object(r.v)((function () {
        window.Element ? (window.Element.prototype.requestFullScreen = ee, window.Element.prototype.webkitRequestFullScreen = ee, window.Element.prototype.requestFullscreen = ee, window.Element.prototype.webkitRequestFullscreen = ee) : (document.documentElement.requestFullScreen = ee, document.documentElement.webkitRequestFullScreen = ee, document.documentElement.requestFullscreen = ee, document.documentElement.webkitRequestFullscreen = ee)
    })), Object(r.v)((function () {
        window.alert = function (e) {
            console.group("Not allow using alert!"), console.warn(e), console.groupEnd()
        }, window.prompt = function (e, t) {
            return console.group("Not allow using prompt!"), console.warn(e), console.groupEnd(), t || ""
        }, window.confirm = function (e) {
            return console.group("Not allow using confirm!"), console.warn(e), console.groupEnd(), !1
        }
    })), Object(r.v)((function () {
        if (u.f && HTMLCanvasElement) {
            var e = HTMLCanvasElement.prototype.getContext;
            HTMLCanvasElement.prototype.getContext = function (t, n) {
                return t.indexOf("webgl") > -1 && ((n = n || {}).preserveDrawingBuffer = !0), e.call(this, t, n)
            }
        }
    }));
    n(176);
    var te = new Map,
        ne = {};

    function re(e) {
        return function (t) {
            var n = te.get(t);
            if (n) {
                var r = n.url;
                ne[r] || (ne[r] = !0, Object(b.a)("sdkResourceError", {
                    type: "xhr",
                    resource: r,
                    status: e
                }), setTimeout((function () {
                    Object(b.a)("sdkDelayResourceError", {
                        type: "xhr",
                        resource: r,
                        status: e
                    })
                }), 1e3))
            }
        }
    }
    var oe = re("error"),
        ie = re("timeout");
    Object(r.v)((function () {
        ! function () {
            var e = window.XMLHttpRequest;
            window._XMLHttpRequest = e, window.XMLHttpRequest = function () {
                var t = new e;
                return t.addEventListener("error", (function () {
                    oe(t)
                })), t.addEventListener("timeout", (function () {
                    ie(t)
                })), t
            }, window.XMLHttpRequest.DONE = e.DONE, window.XMLHttpRequest.HEADERS_RECEIVED = e.HEADERS_RECEIVED, window.XMLHttpRequest.LOADING = e.LOADING, window.XMLHttpRequest.OPENED = e.OPENED, window.XMLHttpRequest.UNSENT = e.UNSENT;
            var t = e.prototype.open;
            e.prototype.open = function (e, n, r, o, i) {
                "data:" !== n.slice(0, 5) && te.set(this, {
                    url: n
                }), void 0 === r ? t.apply(this, [e, n]) : t.apply(this, [e, n, r, o, i])
            }, window.XMLHttpRequest.prototype = e.prototype
        }()
    }));
    n(50);
    var ae, ce, ue = n(90),
        se = n(19);
    if (window.addEventListener("beforeunload", (function () {
            Object(r.w)("playable_track", {
                event: se.c.sdkLeavePlayable.name,
                timestamp: Date.now(),
                params: ue.b
            })
        })), window.addEventListener("error", (function (e) {
            var t, n = e.target;
            if (n) {
                var r = n,
                    o = null === (t = r.tagName) || void 0 === t ? void 0 : t.toUpperCase(),
                    i = "";
                "SCRIPT" === o ? i = r.src : "LINK" === o && (i = r.href), i && (Object(b.a)("sdkResourceError", {
                    type: "tag",
                    resource: i
                }), setTimeout((function () {
                    Object(b.a)("sdkDelayResourceError", {
                        type: "tag",
                        resource: i
                    })
                }), 1e3))
            }
        }), !0), Object(r.k)()) {
        var fe = {};
        setInterval((function () {
            window.performance.getEntries().filter((function (e) {
                return e.name.indexOf(u.a) > -1
            })).filter((function (e) {
                var t;
                return 0 === (null === (t = e) || void 0 === t ? void 0 : t.decodedBodySize)
            })).forEach((function (e) {
                var t = e.name;
                fe[t] || (Object(b.a)("sdkResourceError", {
                    type: "performance",
                    resource: t
                }), setTimeout((function () {
                    Object(b.a)("sdkDelayResourceError", {
                        type: "performance",
                        resource: t
                    })
                }), 1e3), fe[t] = !0)
            }))
        }), 1e3)
    }

    function le(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function de() {
        var e = document.querySelectorAll("video"),
            t = [];
        e.forEach((function (e) {
            e.paused || t.push(e)
        }));
        var n = [];
        return 0 === t.length ? n : (t.forEach((function (e) {
            var t = e.videoWidth,
                r = e.videoHeight,
                o = function (e, t) {
                    var n;
                    if (!ce || !ce.context) {
                        var r = document.createElement("canvas"),
                            o = r.getContext("2d");
                        o || console.error("No canvas context for capture videos"), ce = {
                            canvas: r,
                            context: o
                        }
                    }
                    return ce.canvas.width = e, ce.canvas.height = t, null === (n = ce.context) || void 0 === n || n.clearRect(0, 0, e, t), ce
                }(t, r),
                i = o.canvas,
                a = o.context;
            if (a) {
                a.drawImage(e, 0, 0, t, r);
                var c = i.toDataURL(),
                    u = ve(c);
                u ? n.push({
                    type: ae.video,
                    image: u,
                    width: t,
                    height: r
                }) : console.error("Wrong DataURL of canvas:", c)
            }
        })), n)
    }

    function pe() {
        var e = document.querySelectorAll("canvas"),
            t = [];
        return e.forEach((function (e) {
            var n = e.toDataURL(),
                r = ve(n);
            r ? t.push({
                type: ae.canvas,
                image: r,
                width: e.width,
                height: e.height
            }) : console.error("Wrong DataURL of canvas:", n)
        })), t
    }

    function ve(e) {
        if ("data:image/png;base64," === e.slice(0, 22)) return e.slice(22)
    }
    if (function (e) {
            e.canvas = "canvas", e.video = "video"
        }(ae || (ae = {})), u.f) {
        var ge = !1;
        E.addEventListener("viewableChange", (function () {
            ge || setTimeout((function () {
                var e, t, n, o;
                regeneratorRuntime.async((function (i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, regeneratorRuntime.awrap(Object(r.q)());
                        case 2:
                            if (i.sent) {
                                i.next = 4;
                                break
                            }
                            return i.abrupt("return");
                        case 4:
                            (e = []).push.apply(e, le(de())), e.push.apply(e, le(pe())), t = 0, n = e;
                        case 8:
                            if (!(t < n.length)) {
                                i.next = 15;
                                break
                            }
                            return o = n[t], i.next = 12, regeneratorRuntime.awrap(Object(r.b)("reportPlayableScreenshot", o, !1));
                        case 12:
                            t++, i.next = 8;
                            break;
                        case 15:
                            window.t = e;
                        case 16:
                        case "end":
                            return i.stop()
                    }
                })).catch((function (e) {
                    return console.error(e)
                }))
            }), 1e3), ge = !0
        }))
    }
    Object(r.r)() && Object(r.t)() && Object(r.b)("popGesture", {
        enable: 0
    }, !1);
    var he = n(149),
        ye = n(52),
        be = !1,
        me = 5;

    function we() {
        return regeneratorRuntime.async((function (e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    be || (Object(ye.a)(se.c.pageview.name), be = !0), me > 0 && (Object(ye.a)(se.c.ensurePageview.name), me--);
                case 2:
                case "end":
                    return e.stop()
            }
        }))
    }
    "loading" !== document.readyState ? we() : document.addEventListener("DOMContentLoaded", we), M.b.on(we);
    var Oe, je = n(76),
        _e = n(49),
        xe = 100,
        Ee = 1500,
        Me = 3e3,
        Se = function (e) {
            var t, n = [],
                r = performance.now(),
                o = performance.now();

            function i(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xe, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Me, r = 0, o = 0; o < e.length; o++) {
                    var i = e[o];
                    if (i && i > t ? r += i : r = 0, r >= n) return !0
                }
                return !1
            }

            function a() {
                window.cancelAnimationFrame(t), E.viewable && setTimeout((function () {
                    r = performance.now(), o = performance.now(), c()
                }), Ee)
            }
            E.addEventListener("viewableChange", a);
            var c = function c() {
                if (E.viewable) {
                    var u = performance.now(),
                        s = u - o;
                    if (o = u, n.push(s), s >= Ee) return e.freeze(), void E.removeEventListener("viewableChange", a);
                    var f = !1;
                    if (n.length >= 60 ? (f = i(n), n = n.slice(-3), r = u) : u - r > Me && (f = i(n), r = u), f) return e.lag(), void E.removeEventListener("viewableChange", a);
                    t = window.requestAnimationFrame(c)
                }
            };
            c()
        };
    n(180);

    function ke(e) {
        return regeneratorRuntime.async((function (t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return t.abrupt("return", new Promise((function (t, n) {
                        var r = new XMLHttpRequest;
                        r || (alert("Giving up :( Cannot create an XMLHTTP instance"), t(void 0)), r.onreadystatechange = function () {
                            if (r.readyState === XMLHttpRequest.DONE)
                                if (200 === r.status) try {
                                    var e = JSON.parse(r.responseText);
                                    t(e)
                                } catch (e) {
                                    n(e)
                                } else n(r.statusText)
                        }, r.open("GET", e), r.send()
                    })));
                case 1:
                case "end":
                    return t.stop()
            }
        }))
    }

    function Ne(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ne(n, !0).forEach((function (t) {
                Ae(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Ae(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function De(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }! function (e) {
        e.success = "success", e.notMatch = "not_match", e.timeout = "timeout", e.runtimeError = "runtime_error"
    }(Oe || (Oe = {}));
    var Te, Le, Pe, Re = n(4);

    function Ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ze(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ce(n, !0).forEach((function (t) {
                Be(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Be(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }! function (e) {
        e.h5_start = "h5_start", e.h5_loaded = "h5_loaded", e.h5_load_main_scene_success = "h5_load_main_scene_success", e.h5_load_main_scene_fail = "h5_load_main_scene_fail", e.h5_first_touch = "h5_first_touch"
    }(Le || (Le = {})),
    function (e) {
        e[e.load_main_scene_timeout = 101] = "load_main_scene_timeout", e[e.load_main_scene_not_match = 102] = "load_main_scene_not_match", e[e.load_main_scene_runtime_error = 103] = "load_main_scene_runtime_error"
    }(Pe || (Pe = {}));
    var Fe, Je, Ue, Qe, Ve, Ye, We, Ge = (Be(Te = {}, Pe.load_main_scene_timeout, "资源加载超时"), Be(Te, Pe.load_main_scene_not_match, "资源加载未匹配"), Be(Te, Pe.load_main_scene_runtime_error, "资源加载运行时出错"), Te);

    function He(e, t) {
        return regeneratorRuntime.async((function (n) {
            for (;;) switch (n.prev = n.next) {
                case 0:
                    return n.prev = 0, t && t.code && (t.msg = t.msg || Ge[t.code]), n.next = 4, regeneratorRuntime.awrap(Object(Re.a)("webview_time_track", Be({}, e, ze({
                        ts: Date.now()
                    }, t)), !1));
                case 4:
                    n.next = 9;
                    break;
                case 6:
                    n.prev = 6, n.t0 = n.catch(0), console.error(n.t0);
                case 9:
                case "end":
                    return n.stop()
            }
        }), null, null, [
            [0, 6]
        ])
    }(Fe = function (e) {
        var t, n = {
                status: e.status
            },
            r = {};
        switch (e.status) {
            case Oe.notMatch:
                n.not_matched_resources = e.notMatchedResources, n.missed_resources = e.missedResources, t = Le.h5_load_main_scene_fail, r.code = Pe.load_main_scene_not_match;
                break;
            case Oe.timeout:
                n.not_matched_resources = e.notMatchedResources, n.missed_resources = e.missedResources, t = Le.h5_load_main_scene_fail, r.code = Pe.load_main_scene_timeout;
                break;
            case Oe.runtimeError:
                n.error_message = e.errorMessage, t = Le.h5_load_main_scene_fail, r.code = Pe.load_main_scene_runtime_error;
                break;
            case Oe.success:
                t = Le.h5_load_main_scene_success;
                break;
            default:
                throw t = Le.h5_load_main_scene_fail, r.code = Pe.load_main_scene_runtime_error, e
        }
        Object(b.a)("sdkLoadMainScene", n), He(t, r)
    }, regeneratorRuntime.async((function (e) {
        for (;;) switch (e.prev = e.next) {
            case 0:
                return Je = location.origin + location.pathname, Ue = Je.replace("index.html", ""), Qe = "".concat(Ue, "__playable_ready_resources__.json"), e.prev = 3, e.next = 6, regeneratorRuntime.awrap(ke(Qe));
            case 6:
                Ve = e.sent, Ye = De(Ve).filter((function (e) {
                        return !([".mp3", ".wav", ".ogg"].some((function (t) {
                            return e.indexOf(t) > -1
                        })) || !(0 !== e.indexOf("http") || e.indexOf("pstatp.com") > -1) || e.indexOf("index.html") > -1 || 0 === e.indexOf("http") && e.indexOf("slardar") > -1)
                    })), We = 0,
                    function e() {
                        setTimeout((function () {
                            var t = De(Ye),
                                n = [],
                                r = [];
                            if (window.performance && window.performance.getEntriesByType) {
                                window.performance.getEntriesByType("resource").forEach((function (e) {
                                    if (0 === e.name.indexOf("http")) {
                                        var o = e.name.replace(Ue, "").replace(/\?.*$/, ""),
                                            i = t.indexOf(o);
                                        if (i > -1) n.push(e.name), t.splice(i, 1);
                                        else {
                                            if (u.b.some((function (t) {
                                                    return t.test(e.name)
                                                }))) return;
                                            r.push(e.name)
                                        }
                                    }
                                }));
                                var o = De(t),
                                    i = {
                                        matchedResources: n,
                                        notMatchedResources: r,
                                        missedResources: o
                                    };
                                d.debug("missedResources:", o), 0 === o.length ? (d.debug("monitorReadyResources(success)", n, r, o), Fe({
                                    status: Oe.success
                                })) : We >= 100 ? (d.debug("monitorReadyResources(timeout)", n, r, o), Fe(Ie({}, i, {
                                    status: Oe.timeout
                                }))) : (We++, e())
                            }
                        }), 300)
                    }(), e.next = 16;
                break;
            case 13:
                e.prev = 13, e.t0 = e.catch(3), Fe({
                    status: Oe.runtimeError,
                    errorMessage: e.t0.stack || e.t0.message
                });
            case 16:
            case "end":
                return e.stop()
        }
    }), null, null, [
        [3, 13]
    ])).catch((function (e) {
        console.error(e), Object(b.a)("sdkLoadMainScene", {
            status: Oe.runtimeError,
            error_message: e.stack || e.message
        })
    }));
    var qe = Object(je.a)((function () {
        return regeneratorRuntime.async((function (e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    document.hidden || (document.removeEventListener("visibilitychange", qe), Object(b.a)("webviewShow", {
                        timestamp: Date.now()
                    }));
                case 1:
                case "end":
                    return e.stop()
            }
        }))
    }));
    document.addEventListener("visibilitychange", qe);
    window.addEventListener("load", (function () {
        var e, t, n, r;
        return regeneratorRuntime.async((function (o) {
            for (;;) switch (o.prev = o.next) {
                case 0:
                    return e = window.performance.timing, t = e.requestStart, n = e.domContentLoadedEventStart, r = e.loadEventStart, Object(b.a)("loadingPlayableStart", {
                        timestamp: window.performance.timing.requestStart
                    }), Object(b.a)("loadedPlayable", {
                        requestStart: t,
                        domContentLoadedEventStart: n,
                        loadEventStart: r
                    }), Object(b.a)("firstscreenLoadingFinish", {
                        timestamp: Date.now()
                    }), Se({
                        lag: function () {
                            Object(b.a)("playableRenderLag")
                        },
                        freeze: function () {
                            Object(b.a)("playableRenderFreeze")
                        }
                    }), o.next = 7, regeneratorRuntime.awrap(He(Le.h5_loaded));
                case 7:
                case "end":
                    return o.stop()
            }
        }))
    }));
    var Ze = Object(je.a)((function () {
        return regeneratorRuntime.async((function (e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    document.removeEventListener("touchstart", Ze), Object(b.a)("firstTouchPlayable"), E.setViewable(!0), He(Le.h5_first_touch), Object(_e.a)();
                case 5:
                case "end":
                    return e.stop()
            }
        }))
    }));

    function Xe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ke(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    document.addEventListener("touchstart", Ze, !0), He(Le.h5_start);
    var $e = Object.keys(function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Xe(n, !0).forEach((function (t) {
                Ke(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xe(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }({}, se.a, {}, se.b));
    var et, tt, nt, rt, ot = n(91),
        it = {
            width: 0,
            height: 0
        };

    function at(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? at(n, !0).forEach((function (t) {
                ut(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(n).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function ut(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function st() {
        Object(r.u)("enterPlayablePage", (function () {
            Object(ot.c)(!0)
        })), Object(r.u)("change_playable_click", (function (e) {
            Object(u.j)(!e.send_click)
        }));
        var e = Date.now();
        E.addEventListener("viewableChange", (function (t) {
            if (!t.isInit)
                if (Object(b.a)("sdkViewableChange", ct({
                        viewable: t.viewable ? 1 : 0
                    }, b.b)), t.viewable) {
                    if (t.viewable) {
                        var n = Date.now() - e;
                        Object(b.a)("sdkBackgroundDuration", ct({
                            duration: n
                        }, b.b))
                    }
                } else e = Date.now()
        }))
    }

    function ft(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object(r.u)("resize", (function (e) {
            d.debug("jsb resize: ".concat(e.width, ", ").concat(e.height, ". (").concat(window.innerWidth, ", ").concat(window.innerHeight, ")")), it.width = e.width, it.height = e.height, clearTimeout(void 0),
                function e() {
                    clearTimeout(et), d.debug("waitToTriggerResize: jsb(".concat(it.width, ", ").concat(it.height, ") window(").concat(window.innerWidth, ", ").concat(window.innerHeight, ")")),
                        function () {
                            return Math.abs(window.innerWidth - it.width) < 10 && Math.abs(window.innerHeight - it.height) < 10
                        }() ? function () {
                            d.debug("triggerWindowResize: window(".concat(window.innerWidth, ", ").concat(window.innerHeight, ")"));
                            var e = new Event("resize");
                            window.dispatchEvent(e)
                        }() : et = setTimeout((function () {
                            e()
                        }), 200)
                }()
        })), "loading" !== document.readyState ? st() : document.addEventListener("DOMContentLoaded", st),
        function (e) {
            e[e.BROWSER = 0] = "BROWSER", e[e.ENDCARD_CONTROL_EVENT = 1] = "ENDCARD_CONTROL_EVENT", e[e.VIEWABLE_MUTE = 2] = "VIEWABLE_MUTE"
        }(nt || (nt = {})),
        function (e) {
            e[e.VIEWABLE = 0] = "VIEWABLE", e[e.MUTED = 1] = "MUTED"
        }(rt || (rt = {}));
    var lt = (ft(tt = {}, rt.VIEWABLE, nt.BROWSER), ft(tt, rt.MUTED, nt.BROWSER), tt);

    function dt(e, t) {
        return lt[e] <= t && (lt[e] = t, !0)
    }
    Object(r.u)("endcard_control_event", (function (e) {
        if (dt(rt.VIEWABLE, nt.ENDCARD_CONTROL_EVENT)) {
            var t = e.endcard_show,
                n = !0 === t || 1 === t;
            E.setViewable(n)
        }
        if (dt(rt.MUTED, nt.ENDCARD_CONTROL_EVENT)) {
            var r = e.endcard_mute,
                o = !0 === r || 1 === r;
            E.setMuted(o)
        }
    }));
    Object(r.v)((function () {
        var e, t;
        return regeneratorRuntime.async((function (n) {
            for (;;) switch (n.prev = n.next) {
                case 0:
                    if (n.t0 = Object(r.t)(), !n.t0) {
                        n.next = 5;
                        break
                    }
                    return n.next = 4, regeneratorRuntime.awrap(Object(r.q)());
                case 4:
                    n.t0 = n.sent;
                case 5:
                    e = n.t0, t = Object(r.l)(), e || Object(r.u)("volumeChange", (function (e) {
                        if (dt(rt.MUTED, nt.VIEWABLE_MUTE)) {
                            var n = e.endcard_mute,
                                r = !0 === n || 1 === n;
                            E.setMuted(r), t && r && E.setViewable(!1)
                        }
                    })), document.addEventListener("visibilitychange", (function () {
                        if (dt(rt.MUTED, nt.BROWSER)) {
                            var e = document.hidden;
                            E.setMuted(e)
                        }
                    }));
                case 9:
                case "end":
                    return n.stop()
            }
        }))
    }));
    Object(r.v)((function () {
        return regeneratorRuntime.async((function (e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    Object(r.u)("viewableChange", (function (e) {
                        if (dt(rt.VIEWABLE, nt.VIEWABLE_MUTE)) {
                            var t = e.viewStatus,
                                n = !0 === t || 1 === t;
                            E.setViewable(n)
                        }
                    })), document.addEventListener("visibilitychange", (function () {
                        if (dt(rt.VIEWABLE, nt.BROWSER)) {
                            var e = !document.hidden;
                            E.setViewable(e)
                        }
                    }));
                case 2:
                case "end":
                    return e.stop()
            }
        }))
    }));
    var pt = {
        addEventListener: function (e, t) {
            if (-1 !== g.indexOf(e)) {
                if (h.hasOwnProperty(e) || (h[e] = []), !(h[e].filter((function (e) {
                        return e.callback === t
                    })).length > 0)) {
                    if (u.e && "visibilityChange" === e) {
                        var n = {
                            type: v.a.VISIBILITY_CHANGE
                        };
                        Object(p.a)(n)
                    }
                    h[e].push({
                        callback: t
                    })
                }
            } else console.error("Wrong name of Events: ".concat(e, ", available events: ").concat(g.join(",")))
        },
        removeEventListener: function (e, t) {
            -1 !== g.indexOf(e) ? h.hasOwnProperty(e) && (h[e] = h[e].filter((function (e) {
                return e.callback !== t
            }))) : console.error("Wrong name of Events: ".concat(e, ", available events: ").concat(g.join(",")))
        },
        isReady: function () {
            return !0
        },
        isViewable: function () {
            var e, t, n;
            return regeneratorRuntime.async((function (o) {
                for (;;) switch (o.prev = o.next) {
                    case 0:
                        if (u.e && (e = {
                                type: v.a.IS_VIEWABLE
                            }, Object(p.a)(e)), o.t0 = Object(r.o)(), o.t0) {
                            o.next = 6;
                            break
                        }
                        return o.next = 5, regeneratorRuntime.awrap(Object(r.q)());
                    case 5:
                        o.t0 = o.sent;
                    case 6:
                        if (!o.t0) {
                            o.next = 15;
                            break
                        }
                        return o.next = 9, regeneratorRuntime.awrap(Object(r.s)());
                    case 9:
                        if (void 0 !== (n = o.sent)) {
                            o.next = 12;
                            break
                        }
                        return o.abrupt("return", E.viewable);
                    case 12:
                        t = n, o.next = 16;
                        break;
                    case 15:
                        t = E.viewable;
                    case 16:
                        return E.setViewable(t), o.abrupt("return", t);
                    case 18:
                    case "end":
                        return o.stop()
                }
            }))
        },
        _isViewableSync: function () {
            if (u.e) {
                var e = {
                    type: v.a.IS_VIEWABLE
                };
                Object(p.a)(e)
            }
            return E.viewable
        },
        isMuted: function () {
            var e, t;
            return regeneratorRuntime.async((function (n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        if (n.t0 = Object(r.o)(), n.t0) {
                            n.next = 5;
                            break
                        }
                        return n.next = 4, regeneratorRuntime.awrap(Object(r.q)());
                    case 4:
                        n.t0 = n.sent;
                    case 5:
                        if (!n.t0) {
                            n.next = 14;
                            break
                        }
                        return n.next = 8, regeneratorRuntime.awrap(Object(r.j)());
                    case 8:
                        if (void 0 !== (t = n.sent)) {
                            n.next = 11;
                            break
                        }
                        return n.abrupt("return", E.muted);
                    case 11:
                        e = t, n.next = 15;
                        break;
                    case 14:
                        e = E.muted;
                    case 15:
                        return E.setMuted(e), n.abrupt("return", e);
                    case 17:
                    case "end":
                        return n.stop()
                }
            }))
        }
    };

    function vt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function gt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var ht = function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? vt(n, !0).forEach((function (t) {
                    gt(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vt(n).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }({
            version: he.a,
            sendEvent: function (e, t) {
                $e.some((function (t) {
                    return t === e
                })) ? Object(b.a)(e, t, !0) : (console.group("playable sdk error"), console.error('sendEvent 事件名称 "'.concat(e, '" 不存在，合法事件名称如下:')), console.error($e), console.groupEnd())
            },
            openAppStore: ot.b,
            isPangle: r.q
        }, pt),
        yt = (n(150), n(151), n(78)),
        bt = n.n(yt),
        mt = n(113);

    function wt(e) {
        return (wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ot(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function jt(e) {
        return (jt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _t(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function xt(e, t) {
        return (xt = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Et(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Mt = function (e) {
            function t(e) {
                var n;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n = function (e, t) {
                    return !t || "object" !== wt(t) && "function" != typeof t ? _t(e) : t
                }(this, jt(t).call(this)), Et(_t(n), "parent", void 0), Et(_t(n), "mounted", !1);
                var o = e.parent;
                n.parent = o;
                var i = Object(r.o)() ? bt.a.adLogoBd : "";
                return n.html = n.getHtml(i), Object(r.q)().then((function (e) {
                    n.updateDomOnce(e)
                })), n
            }
            var n, o, i;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && xt(e, t)
            }(t, e), n = t, (o = [{
                key: "getHtml",
                value: function (e) {
                    return '<div id="'.concat("playable-ad-logo", '" class="').concat(bt.a.adLogo, " ").concat(e, '"></div>')
                }
            }, {
                key: "updateDomOnce",
                value: function (e) {
                    var t = e ? bt.a.adLogoPangle : bt.a.adLogoBd;
                    this.mounted ? this.dom.className += " ".concat(t) : this.html = this.getHtml(t)
                }
            }, {
                key: "mount",
                value: function () {
                    this.mounted = !0, this.parent.appendChild(this.dom)
                }
            }, {
                key: "unmount",
                value: function () {
                    this.mounted = !1, this.dom.remove()
                }
            }]) && Ot(n.prototype, o), i && Ot(n, i), t
        }(mt.a),
        St = function () {
            var e, t;
            return regeneratorRuntime.async((function (r) {
                for (;;) switch (r.prev = r.next) {
                    case 0:
                        return r.next = 2, regeneratorRuntime.awrap(n.e(1).then(n.bind(null, 191)));
                    case 2:
                        e = r.sent, t = e.FixedDownloadButton, new t({
                            parent: document.body
                        }).mount();
                    case 6:
                    case "end":
                        return r.stop()
                }
            }))
        },
        kt = function () {
            var e, t;
            return regeneratorRuntime.async((function (r) {
                for (;;) switch (r.prev = r.next) {
                    case 0:
                        return r.next = 2, regeneratorRuntime.awrap(n.e(2).then(n.bind(null, 192)));
                    case 2:
                        e = r.sent, t = e.PlayableGuide, new t({
                            parent: document.body
                        }).mount();
                    case 6:
                    case "end":
                        return r.stop()
                }
            }))
        },
        Nt = function () {
            try {
                return new Mt({
                    parent: document.body
                }).mount(), !0
            } catch (e) {
                return console.error("Error in mound ADLogo", e), !1
            }
        };
    window._tt_config = !0, window.playableSDK = ht, window.openAppStore = ht.openAppStore,
        function () {
            var e = !1,
                t = !1,
                n = function () {
                    return regeneratorRuntime.async((function (n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (e || i(), t) {
                                    n.next = 4;
                                    break
                                }
                                return n.next = 4, regeneratorRuntime.awrap(o(5));
                            case 4:
                            case "end":
                                return n.stop()
                        }
                    }))
                };

            function o(e) {
                var n;
                return regeneratorRuntime.async((function (i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, regeneratorRuntime.awrap(Object(r.f)());
                        case 2:
                            if (n = i.sent) {
                                i.next = 6;
                                break
                            }
                            return e > 0 ? setTimeout((function () {
                                o(e - 1)
                            }), 1e3) : Object(b.a)("sdkInitDownloadButton", {
                                success: !1
                            }), i.abrupt("return");
                        case 6:
                            n.displayDownloadButton && !window.HIDE_PLAYABLE_DOWNLOAD_BUTTON && (St(), Object(b.a)("sdkInitDownloadButton", {
                                success: !0
                            })), n.displayPlayableGuide && !window.HIDE_PLAYABLE_REWARD_GUIDE && kt(), t = !0;
                        case 9:
                        case "end":
                            return i.stop()
                    }
                }))
            }

            function i() {
                Object(r.p)() ? e = !0 : Nt() && (e = !0)
            }
            "loading" !== document.readyState ? n() : document.addEventListener("DOMContentLoaded", n)
        }()
}]);