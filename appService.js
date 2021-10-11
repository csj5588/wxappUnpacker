! function (e) {
    function t(n) {
        if (o[n]) return o[n].exports;
        var r = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var o = {};
    t.m = e,
        t.c = o,
        t.d = function (e, o, n) {
            t.o(e, o) || Object.defineProperty(e, o, {
                enumerable: !0,
                get: n
            })
        },
        t.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        t.t = function (e, o) {
            if (1 & o && (e = t(e)), 8 & o) return e;
            if (4 & o && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & o && "string" != typeof e)
                for (var r in e) t.d(n, r, function (t) {
                    return e[t]
                }.bind(null, r));
            return n
        },
        t.n = function (e) {
            var o = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(o, "a", o), o
        },
        t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        t.p = "",
        t(t.s = 217)
}({
    18: function (e) {
        const t = window.navigator || window.__global.navigator,
            o = window.WebSocket || window.__global.WebSocket,
            n = window.prompt || window.__global.prompt,
            r = t.userAgent.match(/port\/(\d*)/),
            s = r ? parseInt(r[1]) : 9974,
            i = `ws://127.0.0.1:${s}`;
        let a = 0;
        e.exports = class {
            constructor(e, t = !0) {
                if (this._protocol = e, this._needToken = t, this._ws = null, this._msgQueue = [], this._callback = [], this.tryTime = 0, "complete" === document.readyState || "interactive" === document.readyState) setTimeout(() => {
                    this.connect()
                });
                else {
                    const e = () => {
                        this.connect(), document.removeEventListener("DOMContentLoaded", e)
                    };
                    document.addEventListener("DOMContentLoaded", e)
                }
            }
            connect() {
                if (!s) return;
                if (a++ >= 10) return;
                let e = this._protocol;
                if (this._needToken) {
                    e = `${e}#${n("GET_MESSAGE_TOKEN")}#`
                }
                this._ws = new o(i, e), this._ws.onopen = () => {
                    let e = [].concat(this._msgQueue);
                    this._msgQueue = [], e.forEach(e => {
                        this.send(e)
                    })
                }, this._ws.onclose = () => {
                    this._ws = null, setTimeout(() => {
                        this.tryTime < 100 && (this.tryTime++, this.connect())
                    }, 150)
                }, this._ws.onmessage = e => {
                    try {
                        let t = JSON.parse(e.data);
                        this._callback.forEach(e => {
                            try {
                                e.call(this, t)
                            } catch (e) { }
                        })
                    } catch (e) { }
                }
            }
            send(e) {
                this._ws && this._ws.readyState === o.OPEN ? this._ws.send(JSON.stringify(e)) : this._msgQueue.push(e)
            }
            registerCallback(e) {
                "function" == typeof e && this._callback.push(e)
            }
        }
    },
    217: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const n = o(22),
            r = o(218),
            s = o(220),
            i = o(231),
            a = o(232),
            c = o(233),
            u = o(23),
            l = o(234);
        o(235)(window), -1 !== u.navigator.userAgent.indexOf("game") ? l.init() : c(), window.__global.getNewWeixinJSBridge = () => {
            const {
                invoke: e
            } = s(), {
                publish: t
            } = i(), {
                subscribe: o,
                triggerSubscribeEvent: n
            } = a(), {
                on: c,
                triggerOnEvent: u
            } = r();
            return {
                invoke: e,
                publish: t,
                subscribe: o,
                on: c,
                get __triggerOnEvent() {
                    return u
                },
                get __triggerSubscribeEvent() {
                    return n
                }
            }
        }, window.WeixinJSBridge = window.__global.WeixinJSBridge = window.__global.getNewWeixinJSBridge("global"), window.__global.WeixinJSBridgeMap = {
            __globalBridge: window.WeixinJSBridge
        }, n.DevtoolsConfig.online && n.DevtoolsConfig.autoTest && setInterval(() => {
            console.clear()
        }, 6e5), (() => {
            try {
                const e = new u.XMLHttpRequest;
                e.responseType = "text", e.open("GET", `http://${window.location.host}/calibration/${Date.now()}`, !0), e.send()
            } catch (e) { }
        })()
    },
    218: function (e, t, o) {
        "use strict";

        function n(e, t, o) {
            const n = c[e];
            if ("function" == typeof n) try {
                n(t, o)
            } catch (t) {
                console.error(t)
            }
        }

        function r(e, t) {
            s.debugLog(`${new Date} WeixinJSBridge on ${e}`, arguments), s.debugInfo({
                type: "on",
                eventName: e,
                data: arguments,
                timesmap: new Date
            }), t && (c[e] = t)
        }
        const s = o(27),
            i = o(33),
            a = o(40),
            c = {};
        let u = !1;
        e.exports = function () {
            return u || (u = !0, i.registerCallback(e => {
                const {
                    command: t,
                    data: o,
                    webviewID: r
                } = e;
                "APPSERVICE_ON_EVENT" === t && (s.coverRes(o.data), n(o.eventName, o.data, r))
            })), a.on("triggerOnEvent", (function (e, t, o) {
                n(e, t, o)
            })), window.DeviceOrientation = function (e, t, o) {
                n("onAccelerometerChange", {
                    x: e,
                    y: t,
                    z: o
                })
            }, {
                on: r,
                triggerOnEvent: n
            }
        }
    },
    219: function (e) {
        "use strict";

        function t() {
            t.init.call(this)
        }

        function o(e) {
            return void 0 === e._maxListeners ? t.defaultMaxListeners : e._maxListeners
        }

        function n(e, t, n, r) {
            var s, i, a;
            if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
            if (void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), a = i[t]), void 0 === a) a = i[t] = n, ++e._eventsCount;
            else if ("function" == typeof a ? a = i[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), 0 < (s = o(e)) && a.length > s && !a.warned) {
                a.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = a.length,
                    function (e) {
                        console && console.warn && console.warn(e)
                    }(c)
            }
            return e
        }

        function r() {
            for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
            this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, d(this.listener, this.target, e))
        }

        function s(e, t, o) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: o
            },
                s = r.bind(n);
            return s.listener = o, n.wrapFn = s, s
        }

        function i(e, t, o) {
            var n = e._events;
            if (void 0 === n) return [];
            var r = n[t];
            return void 0 === r ? [] : "function" == typeof r ? o ? [r.listener || r] : [r] : o ? function (e) {
                for (var t = Array(e.length), o = 0; o < t.length; ++o) t[o] = e[o].listener || e[o];
                return t
            }(r) : c(r, r.length)
        }

        function a(e) {
            var t = this._events;
            if (void 0 !== t) {
                var o = t[e];
                if ("function" == typeof o) return 1;
                if (void 0 !== o) return o.length
            }
            return 0
        }

        function c(e, t) {
            for (var o = Array(t), n = 0; n < t; ++n) o[n] = e[n];
            return o
        }
        var u, l = "object" == typeof Reflect ? Reflect : null,
            d = l && "function" == typeof l.apply ? l.apply : function (e, t, o) {
                return Function.prototype.apply.call(e, t, o)
            };
        u = l && "function" == typeof l.ownKeys ? l.ownKeys : Object.getOwnPropertySymbols ? function (e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function (e) {
            return Object.getOwnPropertyNames(e)
        };
        var p = Number.isNaN || function (e) {
            return e != e
        };
        e.exports = t, t.EventEmitter = t, t.prototype._events = void 0, t.prototype._eventsCount = 0, t.prototype._maxListeners = void 0;
        var f = 10;
        Object.defineProperty(t, "defaultMaxListeners", {
            enumerable: !0,
            get: function () {
                return f
            },
            set: function (e) {
                if ("number" != typeof e || 0 > e || p(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                f = e
            }
        }), t.init = function () {
            (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, t.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || 0 > e || p(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this
        }, t.prototype.getMaxListeners = function () {
            return o(this)
        }, t.prototype.emit = function (e) {
            for (var t = [], o = 1; o < arguments.length; o++) t.push(arguments[o]);
            var n = "error" === e,
                r = this._events;
            if (void 0 !== r) n = n && void 0 === r.error;
            else if (!n) return !1;
            if (n) {
                var s;
                if (0 < t.length && (s = t[0]), s instanceof Error) throw s;
                var i = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                throw i.context = s, i
            }
            var a = r[e];
            if (void 0 === a) return !1;
            if ("function" == typeof a) d(a, this, t);
            else {
                var u = a.length,
                    l = c(a, u);
                for (o = 0; o < u; ++o) d(l[o], this, t)
            }
            return !0
        }, t.prototype.addListener = function (e, t) {
            return n(this, e, t, !1)
        }, t.prototype.on = t.prototype.addListener, t.prototype.prependListener = function (e, t) {
            return n(this, e, t, !0)
        }, t.prototype.once = function (e, t) {
            if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
            return this.on(e, s(this, e, t)), this
        }, t.prototype.prependOnceListener = function (e, t) {
            if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
            return this.prependListener(e, s(this, e, t)), this
        }, t.prototype.removeListener = function (e, t) {
            var o, n, r, s, i;
            if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
            if (void 0 === (n = this._events)) return this;
            if (void 0 === (o = n[e])) return this;
            if (o === t || o.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, o.listener || t));
            else if ("function" != typeof o) {
                for (r = -1, s = o.length - 1; 0 <= s; s--)
                    if (o[s] === t || o[s].listener === t) {
                        i = o[s].listener, r = s;
                        break
                    } if (0 > r) return this;
                0 === r ? o.shift() : function (e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop()
                }(o, r), 1 === o.length && (n[e] = o[0]), void 0 !== n.removeListener && this.emit("removeListener", e, i || t)
            }
            return this
        }, t.prototype.off = t.prototype.removeListener, t.prototype.removeAllListeners = function (e) {
            var t, o, n;
            if (void 0 === (o = this._events)) return this;
            if (void 0 === o.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== o[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete o[e]), this;
            if (0 === arguments.length) {
                var r, s = Object.keys(o);
                for (n = 0; n < s.length; ++n) "removeListener" === (r = s[n]) || this.removeAllListeners(r);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if ("function" == typeof (t = o[e])) this.removeListener(e, t);
            else if (void 0 !== t)
                for (n = t.length - 1; 0 <= n; n--) this.removeListener(e, t[n]);
            return this
        }, t.prototype.listeners = function (e) {
            return i(this, e, !0)
        }, t.prototype.rawListeners = function (e) {
            return i(this, e, !1)
        }, t.listenerCount = function (e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : a.call(e, t)
        }, t.prototype.listenerCount = a, t.prototype.eventNames = function () {
            return 0 < this._eventsCount ? u(this._events) : []
        }
    },
    22: function (e) {
        "use strict";
        window.__devtoolsConfig = window.__devtoolsConfig || {
            setting: {}
        }, window.__wxConfig = window.__wxConfig || {};
        const t = {
            getSystemInfo: !0,
            getBatteryInfo: !0,
            getBackgroundAudioState: !0,
            setBackgroundAudioState: !0,
            operateBackgroundAudio: !0,
            createRequestTask: !0,
            createUploadTask: !0,
            createDownloadTask: !0,
            createSocketTask: !0,
            operateSocketTask: !0,
            createAudioInstance: !0,
            unlink: !0,
            createLoadSubPackageTask: !0,
            getMenuButtonBoundingClientRect: !0,
            getPermissionBytes: !0,
            createUDPSocket: !0,
            bindUDPSocket: !0,
            createLockStep: !0,
            loadFont: !0
        },
            o = __devtoolsConfig,
            n = o.network || {},
            r = o.permission,
            s = o.setting && o.setting.MaxDataSize || 1048576,
            i = o.setting && o.setting.MaxRequestConcurrent || 10,
            a = o.setting && o.setting.MaxWebsocketConnect || 10;
        let c = 0;
        e.exports = {
            syncSDKList: t,
            isSyncSDK: function (e) {
                return !!t[e] || /Sync$/.test(e)
            },
            DevtoolsConfig: o,
            NetworkConfig: n,
            Permission: r,
            AppserviceMaxDataSize: s,
            MaxRequestConcurrent: i,
            MaxWebsocketConnect: a,
            urlCheckErrReason: "url not in domain list",
            needTransArgsBase64Api: {
                encodeArrayBufferSync: !0,
                decodeArrayBufferSync: !0
            },
            canNotReadFromCodePackage: {
                js: !0,
                wxss: !0,
                wxml: !0
            },
            genIdForDevTools: function (e, t) {
                if ("operateWXData" === e && t && "qbase_commapi" === t.apiName && t.data && t.data.data) switch (t.data.data.qbase_api_name) {
                    case "tcbapi_db_adddocument":
                    case "tcbapi_db_deletedocument":
                    case "tcbapi_db_querydocument":
                    case "tcbapi_db_updatedocument":
                    case "tcbapi_db_setdocument":
                    case "tcbapi_db_countdocument":
                    case "tcbapi_db_aggregate":
                    case "tcbapi_deletefile":
                    case "tcbapi_gettempfileurl": {
                        const e = `4.${c++}`;
                        return console.debug(`~DP_DEBUG_${JSON.stringify({ type: "NetworkStackTrace", requestId: e, ignoreDepth: 2 })}`), e
                    }
                }
            }
        }
    },
    220: function (e, t, o) {
        "use strict";

        function n(e, t, o) {
            if (m[e])
                for (const e in t) t[e] instanceof ArrayBuffer && (t[e] = g(t[e]));
            if (c[e])
                for (const o in t) c[e].is(t[o]) && (t[o] = c[e].trans(t, t[o]));
            if (p.debugLog(`${new Date} WeixinJSBridge invoke ${e}`, arguments), p.debugInfo({
                type: "invoke",
                eventName: e,
                data: arguments,
                timesmap: new Date
            }), u[e] && u[e](t), !r.check(e, t, o)) {
                const n = y(e),
                    r = _(n, o);
                if (!i[e] || i[e](e, t, o)) {
                    if (l[e]) {
                        const n = l[e](e, t, o);
                        if (!n) return;
                        t = n
                    }
                    const i = w(e, t),
                        c = i ? Object.assign({}, t, {
                            __devtoolsId: i
                        }) : t;
                    if (a[e]) a[e](e, t, r);
                    else {
                        const t = b++;
                        if (n) {
                            const t = d.sync(e, c);
                            h(t), delete t.to, r(t)
                        } else v[t] = r, s.send({
                            command: "APPSERVICE_INVOKE",
                            data: {
                                api: e,
                                args: c,
                                callbackID: t
                            }
                        })
                    }
                }
            }
        }
        const r = o(51),
            s = o(33),
            i = o(221),
            a = o(222),
            c = o(227),
            u = o(228),
            l = o(229),
            d = o(230),
            p = o(27),
            f = o(22),
            {
                arrayBufferToBase64: g,
                coverRes: h
            } = p,
            {
                isSyncSDK: y,
                needTransArgsBase64Api: m,
                genIdForDevTools: w
            } = f,
            v = {};
        let b = 1,
            k = !1;
        const _ = function (e, t) {
            return function (o) {
                "function" == typeof t && (e ? t(o) : setTimeout(() => {
                    t(o)
                }, 0))
            }
        };
        e.exports = function () {
            return k || (k = !0, s.registerCallback(e => {
                const {
                    command: t,
                    data: o
                } = e;
                if ("APPSERVICE_INVOKE_CALLBACK" === t) {
                    const e = o.callbackID,
                        t = v[e];
                    h(o.res), "function" == typeof t && t(o.res), delete v[e]
                }
            })), {
                invoke: n
            }
        }
    },
    221: function (e, t, o) {
        "use strict";
        const n = o(22),
            r = o(27),
            {
                checkUrl: s
            } = r,
            {
                urlCheckErrReason: i
            } = n;
        e.exports = {
            downloadFile: function (e, t, o) {
                return !!s(t.url, "downloadFile") || (o({
                    errMsg: `${e}:fail ${i}`
                }), !1)
            },
            uploadFile: function (e, t, o) {
                return !!s(t.url, "uploadFile") || (o({
                    errMsg: `${e}:fail ${i}`
                }), !1)
            },
            createUploadTask: function (e, t, o) {
                return t.__skipDomainCheck__ || s(t.url, "uploadFile") || (o({
                    errMsg: `${e}:fail ${i}`
                }), !1)
            },
            createDownloadTask: function (e, t, o) {
                return t.__skipDomainCheck__ || s(t.url, "downloadFile") || (o({
                    errMsg: `${e}:fail ${i}`
                }), !1)
            },
            authorize: function (e, t) {
                return "scope.userInfo" === t.scope && (console.group(`${new Date} 接口调整`), console.error('wx.authorize({scope: "scope.userInfo"}) 不会出现授权弹窗，请使用 <button open-type="getUserInfo />\n参考文档: https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1650183953&docid=0000a26e1aca6012e896a517556c01'), console.groupEnd()), !0
            }
        }
    },
    222: function (e, t, o) {
        "use strict";
        const n = o(223),
            r = o(225),
            s = o(226),
            i = Object.assign({}, n, r, s);
        e.exports = i
    },
    223: function (e, t, o) {
        "use strict";

        function n(e, t) {
            const {
                origin: o,
                tls: n
            } = e;
            console.group(`${new Date} wx.request 错误`), console.error(`${o} 对应的服务器 TLS 为 ${n} ，小程序要求的 TLS 版本必须大于等于 1.2 。控制台输入 showRequestInfo() 可以获取更详细信息。`), console.groupEnd(), t({
                errMsg: "request:fail 小程序要求的 TLS 版本必须大于等于 1.2"
            })
        }

        function r(e, t) {
            const {
                origin: o
            } = e;
            console.group(`${new Date} wx.request 错误`), console.error(`${o} 对应的服务器证书无效。控制台输入 showRequestInfo() 可以获取更详细信息。`), console.groupEnd(), t({
                errMsg: "request:fail 对应的服务器证书无效。"
            })
        }
        const s = o(40),
            i = o(22),
            a = o(27),
            c = o(23),
            u = o(224),
            {
                MaxRequestConcurrent: l,
                urlCheckErrReason: d,
                DevtoolsConfig: p
            } = i,
            {
                checkUrl: f
            } = a,
            g = void 0 !== p && p && p.libNumberVersion || 999999999,
            h = {};
        let y = 1,
            m = 0;
        const w = function (e) {
            return function (t) {
                "function" == typeof e && e(t)
            }
        },
            v = (e, t, o, i) => {
                m++;
                const a = e => {
                    setTimeout(() => {
                        m--, "function" == typeof o && o(e)
                    })
                };
                if (m > l) return console.group(`${new Date} request 错误`), console.error(`同时最多发起 ${l} 个 request 请求，更多请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html`), console.groupEnd(), void a({
                    errMsg: `${e}:fail exceed max task count`
                });
                const {
                    url: p,
                    responseType: h,
                    __skipDomainCheck__: y
                } = t;
                if (!y && !f(p)) return void a({
                    errMsg: `${e}:fail ${d}`
                });
                const w = t.method || "POST";
                if (0 > ["OPTIONS", "GET", "HEAD", "POST", "PUT", "DELETE", "TRACE", "CONNECT"].indexOf(w)) return void a({
                    errMsg: `${e}:fail method is invalid`
                });
                const v = u.getSecuryDetailsByURL(p);
                if (v.isReady) {
                    if (!v.isSecuryTLS) return void n(v, a);
                    if (!v.isSecuryCertificate) return void r(v, a)
                }
                const b = t.header || {},
                    S = new c.XMLHttpRequest;
                S.responseType = h || "text", S.timeout = t.timeout || __wxConfig.networkTimeout && __wxConfig.networkTimeout.request || 6e4, S.open(w, t.url, !0), S.onreadystatechange = () => {
                    if (S.readyState === (S.HEADERS_RECEIVED || 2)) try {
                        let e = {};
                        try {
                            e = JSON.parse(S.getResponseHeader("for-weapp-devtools"))
                        } catch (e) { }
                        "function" == typeof i && 1009093 <= g && i({
                            state: "headersReceived",
                            header: _(e || {}),
                            cookies: k(e || {})
                        })
                    } catch (e) {
                        console.error(e)
                    }
                    if (S.readyState, 4 === S.readyState) {
                        S.onreadystatechange = null;
                        const o = S.status;
                        if (0 === o);
                        else {
                            function t(t) {
                                if (!t.isSecuryTLS) return void n(t, a);
                                if (!t.isSecuryCertificate) return void r(t, a);
                                if (S.responseURL && !y && !f(S.responseURL)) return void a({
                                    errMsg: `${e}:fail ${d}`
                                });
                                const s = {
                                    errMsg: `${e}:ok`,
                                    header: _(c || {}),
                                    cookies: k(c || {}),
                                    statusCode: o
                                };
                                s.data = "arraybuffer" === h ? S.response : S.responseText, a(s)
                            }
                            const i = u.getSecuryDetailsByURL(p);
                            let c = {};
                            try {
                                c = JSON.parse(S.getResponseHeader("for-weapp-devtools"))
                            } catch (e) { }
                            i.isReady ? t(i) : s.once(`TLS_CHECK_READY_${i.id}`, t)
                        }
                    }
                }, S.onerror = () => {
                    a({
                        errMsg: `${e}:fail`
                    })
                }, S.ontimeout = () => {
                    a({
                        errMsg: `${e}:fail timeout`
                    })
                }, S.onabort = () => {
                    a({
                        errMsg: `${e}:fail abort`
                    })
                };
                let T = 0;
                for (const e in b) "content-type" === e.toLowerCase() && T++;
                2 <= T && delete b["content-type"];
                let E = !1;
                for (const e in b)
                    if (b.hasOwnProperty(e)) {
                        const t = e.toLowerCase();
                        E = "content-type" === t || E, "cookie" === t ? S.setRequestHeader("_Cookie", b[e]) : S.setRequestHeader(e, b[e])
                    }
                "POST" !== w || E || S.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
                const x = t.data;
                try {
                    S.send(x)
                } catch (t) {
                    a({
                        errMsg: `${e}:fail`
                    })
                }
                return S
            },
            b = (e = "") => e,
            k = e => {
                const t = [];
                for (const o in e)
                    if ("set-cookie" === o.toLowerCase()) {
                        const n = e[o],
                            r = Object.prototype.toString.call(n);
                        if ("[object String]" === r) {
                            t.push(b(n.trim()));
                            continue
                        }
                        if ("[object Array]" === r) {
                            for (const e of n) t.push(b(e.trim()));
                            continue
                        }
                    } return t
            },
            _ = (e, t = ",") => {
                const o = {};
                for (const n in e) {
                    const r = Object.prototype.toString.call(e[n]);
                    o[n] = "[object Array]" === r ? e[n].join(t) : e[n]
                }
                return o
            };
        e.exports = {
            request: v,
            createRequestTask: (e, t, o) => {
                const n = w(o),
                    r = {
                        id: y++,
                        url: t.url,
                        data: t.data,
                        header: t.header,
                        method: t.method,
                        callback: (e, t) => {
                            let o = {};
                            o = 0 === t.errMsg.indexOf("request:ok") ? {
                                requestTaskId: e,
                                state: "success",
                                data: t.data,
                                header: t.header,
                                statusCode: t.statusCode,
                                cookies: t.cookies
                            } : {
                                    requestTaskId: e,
                                    state: "fail",
                                    errMsg: t.errMsg.replace(/^request:fail ?/, "")
                                }, delete h[e], s.emit("triggerOnEvent", "onRequestTaskStateChange", o)
                        }
                    };
                n({
                    errMsg: `${e}:ok`,
                    requestTaskId: r.id
                }), h[r.id] = r, r.xhr = v("request", t, r.callback.bind(void 0, r.id), (function (e) {
                    const t = Object.assign({}, e, {
                        requestTaskId: r.id
                    });
                    s.emit("triggerOnEvent", "onRequestTaskStateChange", t)
                }))
            },
            operateRequestTask: (e, t, o) => {
                const n = w(o),
                    r = t.requestTaskId,
                    s = t.operationType,
                    i = h[r];
                if (!i) return n({
                    errMsg: `${e}:fail task not found`
                });
                if ("abort" !== s) return n({
                    errMsg: `${e}:fail illegal operationType ${s}`
                });
                try {
                    i.xhr.abort(), n({
                        errMsg: `${e}:ok`
                    })
                } catch (o) {
                    n({
                        errMsg: `${e}:fail ${o}`
                    })
                }
            }
        }
    },
    224: function (e, t, o) {
        "use strict";

        function n(e) {
            const t = c.document.createElement("a");
            return t.href = e, {
                protocol: t.protocol,
                origin: t.origin,
                fullPath: `${t.origin}/${t.pathname}`
            }
        }

        function r(e) {
            const {
                protocol: o,
                origin: r,
                fullPath: i
            } = n(e);
            let a = t.securityDetails[r];
            return s.isTourist() || !u.urlCheck || "https:" !== o ? (a = {
                isReady: !0,
                isSecuryTLS: !0,
                isSecuryCertificate: !0
            }, t.securityDetails[r] = a, a) : a || (a = {
                isReady: !1,
                id: l++,
                tls: "",
                isSecuryTLS: !1,
                securityState: "",
                isSecuryCertificate: !1,
                protocol: o,
                origin: r,
                fullPath: i,
                url: e
            }, t.securityDetails[r] = a, a)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const s = o(51),
            i = o(40),
            a = o(22),
            c = o(23),
            {
                DevtoolsConfig: u
            } = a;
        t.securityDetails = window.securityDetails = {
            "https://servicewechat.com": {
                isSecuryTLS: !0,
                securityState: "secure",
                isReady: !0,
                isSecuryCertificate: !0,
                tls: "TLS 1.2"
            }
        };
        let l = 1e4;
        t.parseURL = n, window.setSecurityDetails = function (e, o) {
            const {
                origin: r
            } = n(e);
            o = JSON.parse(o);
            let s = t.securityDetails[r];
            s || (s = t.securityDetails[r] = {});
            const {
                protocol: a,
                securityState: c
            } = o;
            let u = !1;
            a && (u = 1.2 <= parseFloat(a.replace("TLS ", ""))), s.isSecuryTLS = u, s.tls = a, s.securityState = c, s.isSecuryCertificate = "insecure" !== c, s.isReady = !0, s.remoteAddress = o.remoteAddress, s.statusCode = o.statusCode;
            const l = s.id;
            i.emit(`TLS_CHECK_READY_${l}`, t.securityDetails[r])
        }, t.getSecuryDetailsByURL = r, t.default = {
            securityDetails: t.securityDetails,
            getSecuryDetailsByURL: r,
            parseURL: n
        }
    },
    225: function (e) {
        "use strict";
        const t = {
            0: "log",
            1: "info",
            2: "warn",
            3: "error"
        };
        e.exports = {
            reportKeyValue: (e, t, o) => {
                o({
                    errMsg: `${e}:ok`
                })
            },
            reportIDKey: (e, t, o) => {
                o({
                    errMsg: `${e}:ok`
                })
            },
            traceEvent: (e, t, o) => {
                o({
                    errMsg: `${e}:ok`
                })
            },
            log: (e, o) => {
                (o.dataArray || []).forEach(e => {
                    const o = t[e.level];
                    o && e.msg && console[o](e.msg)
                })
            }
        }
    },
    226: function (e, t, o) {
        "use strict";

        function n(e) {
            (window.alert ? window.alert : c.alert)(`SET_SOCKET_HEADER:${JSON.stringify(e)}`)
        }

        function r(e) {
            console.group(`${new Date} 无网络状态模拟`), console.error(`已开启无网络状态模拟，网络请求 ${e} 已被阻止；在模拟器工具栏切换网络状态，可恢复网络请求。`), console.groupEnd()
        }
        const s = o(40),
            i = o(22),
            a = o(27),
            c = o(23),
            {
                MaxWebsocketConnect: u,
                urlCheckErrReason: l,
                DevtoolsConfig: d
            } = i,
            {
                checkUrl: p
            } = a,
            f = "未完成的操作",
            g = {};
        let h = 1;
        const y = window.WebSocket || c.WebSocket,
            m = function (e) {
                return function (t) {
                    "function" == typeof e && e(t)
                }
            },
            w = {
                1e3: "normal closure",
                1001: "going away",
                1002: "protocol error",
                1003: "unsupported data",
                1004: "reserved",
                1005: "no status rcvd",
                1006: "abnormal closure",
                1007: "invalid frame payload data",
                1008: "policy violation",
                1009: "message too big",
                1010: "mandatory ext.",
                1011: "internal server error",
                1015: "tls handshake"
            };
        let v;
        window.addEventListener("networkChange", e => {
            if (d.networkStatus = e.detail.networkStatus, "none" === d.networkStatus)
                for (const e in v && (v.close(), v = void 0), g) {
                    const t = g[e].socket;
                    t && t.close()
                }
        }), e.exports = {
            connectSocket: (e, t, o) => {
                const {
                    url: i,
                    header: a
                } = t, c = m(o);
                if ("none" === d.networkStatus) return r(i), void c({
                    errMsg: `${e}:fail network is down`
                });
                if (p(i, "socket")) {
                    if (a && 0 < Object.keys(a).length && n(a), !v || v.readyState !== y.OPEN && v.readyState !== y.CONNECTING) {
                        try {
                            v = new y(i, t.protocols || [])
                        } catch (e) {
                            s.emit("triggerOnEvent", "onSocketError", {
                                errMsg: f
                            }), v = void 0
                        }
                        return v ? (v.binaryType = "arraybuffer", v.onopen = function () {
                            s.emit("triggerOnEvent", "onSocketOpen", {})
                        }, v.onmessage = function (e) {
                            s.emit("triggerOnEvent", "onSocketMessage", {
                                data: e.data
                            })
                        }, v.onclose = function (e) {
                            s.emit("triggerOnEvent", "onSocketClose", {
                                code: e.code,
                                reason: e.reason || w[e.code] || ""
                            }), v = void 0
                        }, v.onerror = function () {
                            s.emit("triggerOnEvent", "onSocketError", {
                                errMsg: f
                            }), v = void 0
                        }, void c({
                            errMsg: "connectSocket:ok"
                        })) : void c({
                            errMsg: "connectSocket:fail"
                        })
                    }
                    c({
                        errMsg: "connectSocket:fail websocket is connected"
                    })
                } else c({
                    errMsg: `connectSocket:fail ${l}`
                })
            },
            sendSocketMessage: (e, t, o) => {
                const n = m(o),
                    r = t.data;
                let s = "fail";
                if (v) try {
                    v.readyState === y.OPEN ? (v.send(r), s = "ok") : s = "fail webSocket is not connected"
                } catch (t) {
                    s = `fail ${t.message}`
                }
                n({
                    errMsg: `${e}:${s}`
                })
            },
            closeSocket: (e, t, o) => {
                const n = m(o);
                if (v) try {
                    v.close(t.code, t.reason), n({
                        errMsg: "closeSocket:ok"
                    })
                } catch (t) {
                    n({
                        errMsg: `closeSocket:fail ${t}`
                    })
                } else n({
                    errMsg: "closeSocket:fail"
                });
                v = void 0
            },
            createSocketTask: (e, t, o) => {
                const i = m(o),
                    a = Object.keys(g).length,
                    {
                        url: c,
                        header: v,
                        protocols: b,
                        __skipDomainCheck__: k
                    } = t,
                    _ = h++,
                    S = {
                        socketTaskId: _,
                        url: c,
                        protocols: b,
                        header: v
                    };
                if (i({
                    socketTaskId: _,
                    errMsg: `${e}:ok`
                }), a >= u) return void setTimeout(() => {
                    console.group(`${new Date} websocket 错误`), console.error(`同时最多发起 ${u} 个 socket 请求，更多请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html`), console.groupEnd(), s.emit("triggerOnEvent", "onSocketTaskStateChange", {
                        socketTaskId: _,
                        state: "error",
                        errMsg: "exceed max task count"
                    })
                });
                if ("none" === d.networkStatus) return void setTimeout(() => {
                    r(c), s.emit("triggerOnEvent", "onSocketTaskStateChange", {
                        socketTaskId: _,
                        state: "error",
                        errMsg: "network is down"
                    })
                });
                if (!k && !p(c, "socket")) return void setTimeout(() => {
                    s.emit("triggerOnEvent", "onSocketTaskStateChange", {
                        socketTaskId: _,
                        state: "error",
                        errMsg: l
                    })
                });
                g[_] = S, v && 0 < Object.keys(v).length && n(v);
                const T = __wxConfig.networkTimeout && __wxConfig.networkTimeout.connectSocket || 6e4;
                let E, x = !1;
                try {
                    E = new y(c, t.protocols || [])
                } catch (e) {
                    if (x) return;
                    s.emit("triggerOnEvent", "onSocketTaskStateChange", {
                        socketTaskId: _,
                        state: "error",
                        errMsg: f
                    }), delete g[_]
                }
                if (!E) return;
                const C = setTimeout(() => {
                    x = !0, s.emit("triggerOnEvent", "onSocketTaskStateChange", {
                        socketTaskId: _,
                        state: "error",
                        errMsg: "Timed out connecting to server."
                    }), delete g[_], E && E.close()
                }, T);
                E.binaryType = "arraybuffer", E.onopen = function () {
                    clearTimeout(C), s.emit("triggerOnEvent", "onSocketTaskStateChange", {
                        socketTaskId: _,
                        state: "open"
                    })
                }, E.onmessage = function (e) {
                    if (!x) {
                        const t = e.data;
                        s.emit("triggerOnEvent", "onSocketTaskStateChange", {
                            socketTaskId: _,
                            data: t,
                            state: "message"
                        })
                    }
                }, E.onclose = function (e) {
                    x || (s.emit("triggerOnEvent", "onSocketTaskStateChange", {
                        socketTaskId: _,
                        state: "close",
                        code: e.code,
                        reason: e.reason || w[e.code] || ""
                    }), delete g[_])
                }, E.onerror = function () {
                    x || (s.emit("triggerOnEvent", "onSocketTaskStateChange", {
                        socketTaskId: _,
                        state: "error",
                        errMsg: f
                    }), delete g[_])
                }, S.socket = E
            },
            operateSocketTask: (e, t, o) => {
                const {
                    socketTaskId: n,
                    operationType: r,
                    code: s,
                    reason: i,
                    data: a
                } = t, c = m(o), u = g[n];
                if (!u) return c({
                    errMsg: `${e}:fail task not found`
                });
                if ("send" !== r)
                    if ("close" !== r) c({
                        errMsg: `${e}:fail illegal operationType ${r}`
                    });
                    else try {
                        u.socket.close(t.code, t.reason), c({
                            errMsg: `${e}:ok`
                        })
                    } catch (o) {
                        c({
                            errMsg: `${e}:fail ${o.message}`
                        })
                    } else try {
                        u.socket.readyState === y.OPEN ? (u.socket.send(a), c({
                            errMsg: `${e}:ok`
                        })) : c({
                            errMsg: `${e}:fail webSocket is not connected`
                        })
                    } catch (o) {
                        c({
                            errMsg: `${e}:fail ${o.message}`
                        })
                    }
            }
        }
    },
    227: function (e, t, o) {
        "use strict";
        const n = o(27),
            {
                arrayBufferToBase64: r
            } = n;
        e.exports = {
            invokeLockStepMethod: {
                is: e => e instanceof Array ? e.every(e => e instanceof ArrayBuffer) : e instanceof ArrayBuffer,
                trans: (e, t) => (e.__dataisab = !0, t instanceof Array ? t.map(e => r(e)) : r(t))
            },
            writeFile: {
                is: e => e instanceof ArrayBuffer,
                trans: (e, t) => (e.__dataisab = !0, r(t))
            },
            writeFileSync: {
                is: e => e instanceof ArrayBuffer,
                trans: (e, t) => (e.__dataisab = !0, r(t))
            },
            fs_appendFile: {
                is: e => e instanceof ArrayBuffer,
                trans: (e, t) => (e.__dataisab = !0, r(t))
            },
            fs_appendFileSync: {
                is: e => e instanceof ArrayBuffer,
                trans: (e, t) => (e.__dataisab = !0, r(t))
            },
            sendUDPSocketMessage: {
                is: e => e instanceof ArrayBuffer,
                trans: (e, t) => (e.__dataisab = !0, r(t))
            }
        }
    },
    228: function (e, t, o) {
        const {
            canNotReadFromCodePackage: n
        } = o(22);
        e.exports = {
            readFile: e => {
                let {
                    filePath: t
                } = e;
                if (0 !== t.indexOf(__wxConfig.env.LOCAL_PROTOCOL)) {
                    let e = t.split("."),
                        o = 1 < e.length ? e[e.length - 1] : "";
                    o && n[o] && (console.group(`${new Date} 读取文件失败`), console.info(`无法读取 ${t} 文件，该文件经过编译后在移动设备上不存在`), console.groupEnd())
                }
            }
        }
    },
    229: function (e, t, o) {
        "use strict";
        const n = o(23),
            r = n.navigator.userAgent,
            s = (e, t, o) => {
                if (!/gameservice/.test(r)) return t;
                const s = t.canvasId,
                    i = () => {
                        o({
                            errMsg: `${e}:fail canvas not found`
                        })
                    };
                if (!s) return void (/Sync$/.test(e) ? i() : setTimeout(i));
                const {
                    x: a = 0,
                    y: c = 0,
                    width: u = s.width,
                    height: l = s.height,
                    destWidth: d = s.width,
                    destHeight: p = s.height,
                    fileType: f = "png"
                } = t, g = n.document.createElement("canvas");
                Object.setPrototypeOf(g, n.canvasProto), g.width = d, g.height = p;
                const h = g.getContext("2d");
                h && (Object.setPrototypeOf(h, n.canvas2dContextProto), h.drawImage(s, a, c, u, l, 0, 0, d, p));
                const y = "jpg" === f ? "image/jpeg" : "image/png",
                    m = isNaN(t.quality) ? 1 : 0 < t.quality && 1 >= t.quality ? t.quality : 1;
                return {
                    dataURL: g.toDataURL(y, m).replace(/^data:image\/(jpg|png);base64,/, ""),
                    fileType: f
                }
            };
        e.exports = {
            canvasToTempFilePath: s,
            canvasToTempFilePathSync: s
        }
    },
    23: function (e) {
        "use strict";
        e.exports = window.__global
    },
    230: function (e, t, o) {
        "use strict";
        const n = o(23);
        e.exports = {
            sync: (e, t) => {

                const o = new n.XMLHttpRequest;
                return o.open("POST", `/apihelper/assdk?t=${Date.now()}`, !1), o.send(JSON.stringify({
                    api: e,
                    args: t
                })), 200 === o.status ? JSON.parse(o.responseText) : {
                    errMsg: `${e}:fail`
                }
            }
        }
    },
    231: function (e, t, o) {
        "use strict";

        function n(e, t, o, n) {
            if (o = o ? o.filter(e => void 0 !== e) : [], r.debugLog(`${new Date} WeixinJSBridge publish ${e}`, arguments), t && 0 !== e.indexOf("canvas")) {
                const o = JSON.stringify(t).length;
                o > 1048576 && (console.group(`${new Date} 数据传输长度过长`), console.warn(`${"vdSyncBatch" === e ? "setData" : e} 数据传输长度为 ${Math.floor(o / 1024)} KB，存在有性能问题！`), console.groupEnd())
            }
            r.debugInfo({
                type: "publish",
                eventName: e,
                data: arguments,
                timesmap: new Date
            }), "appDataChange" !== e && "pageInitData" !== e && "__updateAppData" !== e || n || s.send({
                command: "SEND_APP_DATA",
                data: __wxAppData
            }), "invokeWebviewMethod" === e && t && t.data && "appDataChange" === t.data.name && (c && s.send({
                command: "SEND_APP_DATA",
                data: __wxAppData
            }), c = !0), ("vdSync" === e || "vdSyncBatch" === e) && (c && s.send({
                command: "SEND_APP_DATA",
                data: __wxAppData
            }), c = !0), s.send({
                command: "APPSERVICE_PUBLISH",
                data: {
                    eventName: e,
                    data: t,
                    webviewIds: o
                }
            })
        }
        const r = o(27),
            s = o(33),
            i = o(22),
            {
                AppserviceMaxDataSize: a
            } = i;
        let c = !0,
            u = !1;
        e.exports = function () {
            return u || (u = !0, s.registerCallback(e => {
                const {
                    command: t,
                    data: o,
                    fromWebviewID: r
                } = e;
                if ("WRITE_APP_DATA" === t) {
                    const e = {},
                        t = getCurrentPages();
                    for (const r in t.forEach(t => {
                        e[t.__route__ || t.route] = t
                    }), o) {
                        const t = o[r],
                            s = t.__webviewId__;
                        for (const o in e[r] && "function" == typeof e[r].setData ? (c = !1, e[r].setData(t)) : wx && wx.invokeWebviewMethod ? (c = !1, wx.invokeWebviewMethod({
                            name: "appDataChange",
                            args: {
                                data: t
                            }
                        })) : n("appDataChange", {
                            data: {
                                data: t
                            }
                        }, [s], !0), Object.assign(__wxAppData[r], t), __wxAppData[r]) void 0 === t[o] && delete __wxAppData[r][o]
                    }
                } else "GET_APP_DATA" === t && s.send({
                    command: "SEND_APP_DATA",
                    data: __wxAppData
                })
            })), {
                publish: n
            }
        }
    },
    232: function (e, t, o) {
        "use strict";

        function n(e, t, o) {
            const n = c[e];
            if ("function" == typeof n) try {
                n(t, o)
            } catch (t) {
                console.error(t)
            }
        }

        function r(e, t) {
            s.debugLog(`${new Date} WeixinJSBridge subscribe ${e}`, arguments), s.debugInfo({
                type: "subscribe",
                eventName: e,
                data: arguments,
                timesmap: new Date
            }), c[e] = t
        }
        const s = o(27),
            i = o(40),
            a = o(33),
            c = {};
        let u = !1;
        e.exports = function () {
            return u || (u = !0, a.registerCallback(e => {
                const {
                    command: t,
                    data: o,
                    fromWebviewID: r
                } = e;
                "WEBVIEW_PUBLISH" === t && n(o.eventName, o.data, r)
            })), i.on("triggerSubscribeEvent", (e, t, o) => {
                n(e, t, o)
            }), {
                subscribe: r,
                triggerSubscribeEvent: n
            }
        }
    },
    233: function (e, t, o) {
        "use strict";
        const n = o(23);
        e.exports = function () {
            if (["Caches", "screen", "performance ", "getComputedStyle", "openDatabase", "btoa", "Image"].forEach(e => {
                delete window[e]
            }), window.chrome = void 0, "complete" === n.document.readyState) n.history.replaceState({}, n.document.title || "", `${location.href}?load`);
            else {
                const e = () => {
                    n.history.replaceState({}, n.document.title || "", `${location.href}?load`), n.removeEventListener("load", e)
                };
                n.addEventListener("load", e)
            }
        }
    },
    234: function (e, t, o) {
        "use strict";
        const n = o(33),
            r = o(23),
            s = (e, t) => {
                const o = r.document.getElementById("myCanvas"),
                    n = new r.Touch({
                        identifier: 1,
                        target: o,
                        clientX: e,
                        clientY: t,
                        pageX: e,
                        pageY: t
                    }),
                    s = new r.TouchEvent("touchstart", {
                        bubbles: !0,
                        touches: [n],
                        targetTouches: [n],
                        changedTouches: [n]
                    });
                r.canvasProto.dispatchEvent.call(o, s)
            },
            i = (e, t) => {
                const o = r.document.getElementById("myCanvas"),
                    n = new r.Touch({
                        identifier: 1,
                        target: o,
                        clientX: e,
                        clientY: t,
                        pageX: e,
                        pageY: t
                    }),
                    s = new r.TouchEvent("touchend", {
                        bubbles: !0,
                        changedTouches: [n]
                    });
                r.canvasProto.dispatchEvent.call(o, s)
            },
            a = (e, t) => {
                const o = r.document.getElementById("myCanvas"),
                    n = new r.Touch({
                        identifier: 1,
                        target: o,
                        clientX: e,
                        clientY: t,
                        pageX: e,
                        pageY: t
                    }),
                    s = new r.TouchEvent("touchmove", {
                        bubbles: !0,
                        touches: [n],
                        targetTouches: [n],
                        changedTouches: [n]
                    });
                r.canvasProto.dispatchEvent.call(o, s)
            };
        let c = !1,
            u = !0;
        const l = e => {
            c && u && (u = !1, setTimeout(() => {
                u = !0
            }, 250), r.WeixinJSBridge.invoke("private_ideplugin_excute_command", {
                pluginId: "inspector_v1_game",
                command: "INSPECT_MOVE",
                data: {
                    x: e.pageX,
                    y: e.pageY
                }
            }))
        },
            d = e => {
                c && r.WeixinJSBridge.invoke("private_ideplugin_excute_command", {
                    pluginId: "inspector_v1_game",
                    command: "INSPECT_RESULT",
                    data: {
                        x: e.pageX,
                        y: e.pageY
                    }
                })
            },
            p = e => ((c = e.inspected) ? (r.document.addEventListener("mousemove", l), r.document.addEventListener("mouseup", d)) : (r.document.removeEventListener("mousemove", l), r.document.removeEventListener("mouseup", d)), {
                status: 0
            });
        e.exports = {
            init: () => {
                n.registerCallback(async e => {
                    const {
                        command: t,
                        data: o
                    } = e;
                    let r;
                    switch (t) {
                        case "Driver.game.dumpUI":
                            r = (() => {
                                let e = {};
                                try {
                                    e = window.__monkeyInject.engine.dumpUI()
                                } catch (e) {
                                    return {
                                        status: 17,
                                        value: {
                                            message: e.toString()
                                        }
                                    }
                                }
                                return {
                                    status: 0,
                                    value: e
                                }
                            })();
                            break;
                        case "Driver.game.tap":
                            r = (e => (s(e.x, e.y), i(e.x, e.y), {
                                status: 0
                            }))(o.data);
                            break;
                        case "Driver.game.swipe":
                            r = await (e => {
                                const {
                                    startX: t = 0,
                                    startY: o = 0,
                                    endX: n = 0,
                                    endY: r = 0,
                                    duration: c = 0
                                } = e;
                                s(t, o);
                                let u = Math.floor(c / 20);
                                0 >= u && (u = 1);
                                const l = (n - t) / u,
                                    d = (r - o) / u;
                                return new Promise(e => {
                                    const s = function (c) {
                                        a(parseInt(t + c * l, 10), parseInt(o + c * d, 10)), c < u ? setTimeout(() => {
                                            s(c + 1)
                                        }, 20) : (i(n, r), e({
                                            status: 0
                                        }))
                                    };
                                    s(0)
                                })
                            })(o.data);
                            break;
                        case "Driver.game.touchstart":
                            r = await (e => (s(e.x, e.y), {
                                status: 0
                            }))(o.data);
                            break;
                        case "Driver.game.touchend":
                            r = await (e => (i(e.x, e.y), {
                                status: 0
                            }))(o.data);
                            break;
                        case "Driver.game.touchmove":
                            r = await (e => (a(e.x, e.y), {
                                status: 0
                            }))(o.data);
                            break;
                        case "Driver.game.setInspectMode":
                            r = p(o.data);
                            break;
                        default:
                            return
                    }
                    n.send({
                        command: `${t}.callback`,
                        data: {
                            callbackID: o.callbackID,
                            res: r
                        }
                    })
                })
            }
        }
    },
    235: function (e, t, o) {
        "use strict";
        const n = o(33),
            r = (e, t) => {
                n.send({
                    command: "SYSTEM",
                    data: {
                        api: e,
                        data: t
                    }
                })
            };
        n.registerCallback(e => {
            const {
                command: t,
                data: o
            } = e;
            "SYSTEM_CALLBACK" === t && function (e, t) {
                switch (e) {
                    case "showSystemInfo": {
                        const e = t.memory,
                            o = t.restartInfo,
                            n = o.restartTimes;
                        console.group(`${new Date} 工具系统信息`), console.info(`${o.beginTime} 启动工具，执行编译 ${n} 次， 当前内存占用 ${e.toFixed(2)}m`), console.table(t.info), console.groupEnd();
                        break
                    }
                    case "checkProxy":
                        console.group(`${new Date} 代理信息`), console.table(t), console.groupEnd();
                        break;
                    case "showDecryptedInfo":
                        console.group(`${new Date} 加解密信息`), console.table(t), console.groupEnd();
                        break;
                    case "getMessageTunnelInfo":
                        console.group(`${new Date} Message Tunnel Info`), console.log(t), console.groupEnd()
                }
            }(o.api, o.data)
        });
        const s = function (e) {
            return "string" == typeof e ? (console.log("checking..."), void r("checkProxy", e)) : console.log("param should be string")
        },
            i = () => {
                r("cleanAppCache"), console.warn("应用缓存已清理完成，建议重新启动")
            },
            a = () => {
                const e = {};
                for (const t in window.securityDetails)
                    if (0 !== t.indexOf(`http://${__wxConfig.apphash}`)) {
                        const o = window.securityDetails[t];
                        delete o.id, delete o.command, delete o.isReady, delete o.url, e[t] = o
                    } console.table(e)
            },
            c = () => {
                console.table([{
                    fun: "build",
                    "arg[0]": "",
                    "arg[1]": "",
                    example: "build()",
                    description: "build / reload"
                }, {
                    fun: "preview",
                    "arg[0]": "",
                    "arg[1]": "",
                    example: "preview()",
                    description: "preview with QR code"
                }, {
                    fun: "upload",
                    "arg[0]": "",
                    "arg[1]": "",
                    example: "upload()",
                    description: "upload the app"
                }, {
                    fun: "showDebugInfo",
                    "arg[0]": "type -- String || Array; publish on subscribe invoke GetMsg",
                    "arg[1]": "eventName -- String || Array;",
                    example: 'showDebugInfo() showDebugInfo("publish") showDebugInfo(["publish", "invoke"], "onAppRoute")',
                    description: "open tools logs"
                }, {
                    fun: "closeDebug"
                }, {
                    fun: "showDebugInfoTable"
                }, {
                    fun: "openToolsLog",
                    "arg[0]": "",
                    "arg[1]": "",
                    example: "openToolsLog()",
                    description: "open log folder"
                }, {
                    fun: "openPlugin",
                    "arg[0]": "",
                    "arg[1]": "",
                    example: "openPlugin()",
                    description: "open plugin folder"
                }, {
                    fun: "openVendor",
                    "arg[0]": "",
                    "arg[1]": "",
                    example: "openVendor()",
                    description: "open vendor folder"
                }, {
                    fun: "showRequestInfo",
                    "arg[0]": "",
                    "arg[1]": "",
                    example: "showRequestInfo()",
                    description: "show request info"
                }, {
                    fun: "showSystemInfo",
                    "arg[0]": "",
                    "arg[1]": "",
                    example: "showSystemInfo()",
                    description: "show tools info"
                }, {
                    fun: "checkProxy",
                    "arg[0]": "type -- String; url",
                    example: 'checkProxy("http://www.qq.com")',
                    description: "checkProxy of the input url"
                }, {
                    fun: "showDecryptedInfo",
                    "arg[0]": "",
                    example: "showDecryptedInfo()",
                    description: "show API decrypted info"
                }, {
                    fun: "cleanAppCache",
                    "arg[0]": "",
                    example: "cleanAppCache()",
                    description: "clean application cache"
                }])
            };
        e.exports = e => {
            e.getMessageTunnelInfo = function () {
                r("getMessageTunnelInfo")
            }, Object.defineProperty(e, "help", {
                get: () => c
            }), Object.defineProperty(e, "showRequestInfo", {
                get: () => a
            }), Object.defineProperty(e, "build", {
                get: () => () => r("build")
            }), Object.defineProperty(e, "preview", {
                get: () => () => r("preview")
            }), Object.defineProperty(e, "upload", {
                get: () => () => r("upload")
            }), Object.defineProperty(e, "openToolsLog", {
                get: () => () => r("openToolsLog")
            }), Object.defineProperty(e, "openPlugin", {
                get: () => () => r("openPlugin")
            }), Object.defineProperty(e, "openVendor", {
                get: () => () => r("openVendor")
            }), Object.defineProperty(e, "showSystemInfo", {
                get: () => () => r("showSystemInfo")
            }), Object.defineProperty(e, "checkProxy", {
                get: () => s
            }), Object.defineProperty(e, "syncMessage", {
                get: () => () => r("syncMessage")
            }), Object.defineProperty(e, "showDecryptedInfo", {
                get: () => () => r("showDecryptedInfo")
            }), Object.defineProperty(e, "cleanAppCache", {
                get: () => i
            })
        }
    },
    27: function (e, t, o) {
        "use strict";

        function n(e) {
            const t = a.atob(e),
                o = t.length,
                n = new Uint8Array(o);
            for (let e = 0; e < o; e++) n[e] = t.charCodeAt(e);
            return n.buffer
        }

        function r(e, t = "`") {
            return e ? "`" === t ? e.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$") : '"' === t ? e.replace(/\\/g, "\\\\").replace(/\r\n/g, "\n").replace(/\n/g, "\\n").replace(/"/g, '\\"') : "'" === t ? e.replace(/\\/g, "\\\\").replace(/\r\n/g, "\n").replace(/\n/g, "\\n").replace(/'/g, "\\'") : e : e
        }
        const s = o(51),
            i = o(22),
            a = o(23),
            {
                NetworkConfig: c,
                DevtoolsConfig: u
            } = i;
        let l = !1,
            d = [];
        window.showDebugInfo = (e, t) => {
            const o = d.filter(o => {
                const n = !e || (Array.isArray(e) ? e.includes(o.type) : o.type === e),
                    r = !t || (Array.isArray(t) ? t.includes(o.eventName) : o.eventName === t);
                if (n && r) return o
            });
            console.group("showDebugInfo"), o.forEach(e => {
                console.group(`${e.timesmap} WeixinJSBridge ${e.type} ${e.eventName}`), console.debug.apply(window, e.data), console.groupEnd()
            }), console.groupEnd(), l = !0
        };
        const p = () => (console.clear(), void (l = !1));
        Object.defineProperty(window, "closeDebug", {
            get: () => p
        });
        const f = () => void console.table(d);
        Object.defineProperty(window, "showDebugInfoTable", {
            get: () => f
        });
        const g = e => {
            const t = /^(?:http|ws)s?:\/\/((?:\d{1,3}\.){3}\d{1,3})(?::\d{1,5})?/i.exec(e);
            if (t) {
                const {
                    localhostIp: e,
                    networkMask: o
                } = u;
                if (!e || !o) return !1;
                const n = t[1];
                return e.split(".").map((e, t) => e & o[t]).join(".") === n.split(".").map((e, t) => e & o[t]).join(".")
            }
            return !1
        },
            h = /^(http|ws|udp)s?:\/\/[\w-.]+(:\d+)?/i;
        let y = !0;
        window.__disPlayURLCheckWarning = !0;
        const m = e => {
            const t = /^(?:http|ws)s?:\/\/((?:\d{1,3}\.){3}\d{1,3})(?::\d{1,5})?/i.exec(e);
            if (t) {
                return t[1] === u.localhostIp
            }
            return !1
        };
        e.exports = {
            debugLog: (e, t) => {
                l && (console.group(e), console.debug.apply(null, t), console.groupEnd())
            },
            debugInfo: e => {
                l || (d.length > 100 && (d = []), d.push(e))
            },
            isDev: () => l,
            base64ToArrayBuffer: n,
            arrayBufferToBase64: function (e) {
                let t = "";
                const o = new Uint8Array(e),
                    n = o.byteLength;
                for (let e = 0; e < n; e++) t += String.fromCharCode(o[e]);
                return a.btoa(t)
            },
            escapeQuot: r,
            checkUrl: (e, t = "request") => {
                if (s.isTourist()) return y && (console.group(`${new Date} 无 AppID 关联`), console.warn("工具未检查合法域名，更多请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"), console.groupEnd(), y = !1), !0;
                if (!u.urlCheck) return window.__disPlayURLCheckWarning && (console.group(`${new Date} 配置中关闭合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书检查`), console.warn("工具未校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书。"), console.groupEnd(), window.__disPlayURLCheckWarning = !1), !0;
                if (!e) return !1;
                if (/(\?|&)skip_domain_check=true(&|$)/.test(e)) return !0;
                if (["request", "downloadFile", "uploadFile", "socket", "udp"].includes(t)) {
                    if (m(e)) return setTimeout(() => {
                        console.error("Cannot send network request to localhost.")
                    }), !1;
                    if (g(e)) return !0
                }
                if (!(e = h.exec(e.toLowerCase()))) return !1;
                if (e = e[0], /^http:\/\/(tmp|usr|store)\/?$/gi.test(e)) return !0;
                try {
                    let o = [];
                    o = "downloadFile" === t ? c.download : "uploadFile" === t ? c.upload : "socket" === t ? c.socket : "udp" === t ? c.udp : c.request;
                    for (const n of o) {
                        const o = h.exec(n.toLowerCase());
                        if (o && o[0] === e) return !0;
                        if ("socket" === t && u.setting.WebsocketSkipPortCheck) {
                            if (new RegExp(`^${n}(:\\d+)?$`).test(e)) return !0
                        }
                    }
                    const n = [];
                    o.forEach(e => {
                        n.push([e])
                    }), console.group(`${new Date} ${t} 合法域名校验出错`), console.info("如若已在管理后台更新域名配置，请刷新项目配置后重新编译项目，操作路径：“详情-域名信息”"), console.error(` ${r(e, "`")} 不在以下 ${t} 合法域名列表中，请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html`), console.table(n), console.groupEnd()
                } catch (t) { return console.error(t), !1 } return !1
            }, isLocalhost: m, isInLAN: g, coverRes: e => { if (e && e.__cover) { for (const t in e.__cover) "base64" == t && (e[e.__cover[t]] = n(e.base64), delete e.base64), "base64Array" == t && (e[e.__cover[t]] = e.base64Array.map(e => n(e)), delete e.base64Array); delete e.__cover } }
        }
    },
    33: function (e, t, o) {
        "use strict";
        const n = o(23), r = n.navigator.userAgent, s = o(18);
        let i;
        const a = () => {
            if (i) return i;
            let e = "APPSERVICE";
            return /widgetservice/.test(r) ? e = "WIDGETSERVICE" : /gameservice/.test(r) && (e = "GAMESERVICE"),
                i = new s(e),
                /gameservice/.test(r) && i.registerCallback(e => {
                    const { command: t, data: o } = e;
                    if ("SET_CANVAS" === t) {
                        const e = n.document.getElementById("myCanvas");
                        e.setAttribute("width", o.width),
                            e.setAttribute("height", o.height),
                            e.setAttribute("style", o.style)
                    }
                }), i
        };
        e.exports = {
            send: function (e) {
                a().send(e)
            },
            registerCallback: function (e) {
                a().registerCallback(e)
            }
        }
    },
    40: function (e, t, o) {
        "use strict";
        const n = o(219).EventEmitter;
        e.exports = new n
    },
    51: function (e, t, o) {
        "use strict";
        const n = o(22), { DevtoolsConfig: r } = n,
            s = () => "touristappid" === r.appid,
            i = s() ? Object.assign({}, r.userInfo) : {};
        delete r.userInfo;
        const a = {
            login: (e, t, o) => {
                o({
                    errMsg: "login:ok",
                    code: "the code is a mock one"
                })
            },
            authorize: (e, t, o) => { o({ errMsg: "authorize:fail" }) },
            operateWXData: (e, t, o) => {
                o({
                    errMsg: "operateWXData:ok",
                    data: { data: JSON.stringify({ nickName: i.nickName, avatarUrl: i.headUrl, gender: "male" === i.sex ? 1 : 2, province: i.province, city: i.city, country: i.country }) }
                })
            },
            openSetting: (e, t, o) => {
                o({
                    errMsg: "openSetting:ok",
                    authSetting: [{ scope: "scope.userInfo", state: 1 }]
                })
            }
        };
        e.exports = {
            isTourist: s,
            fake: a,
            check: function (...e) {
                const t = e[0]; return s() && a.hasOwnProperty(t) && (console.group(`
                                            $ {
                                                new Date
                                            }
                                            无 AppID 关联 `),
                    console.warn(`
                                            请注意无 AppID 关联下， 调用 wx.$ {
                                                t
                                            }
                                            是受限的, API 的返回是工具的模拟返回 `),
                    console.groupEnd(),
                    setTimeout(() => { a[t].apply(null, e) }),
                    !0)
            }
        }
    }
});