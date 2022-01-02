! function(n) {
    function o() {}

    function s(n, t) {
        return function() {
            n.apply(t, arguments)
        }
    }

    function t(n) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof n) throw new TypeError("not a function");
        this._state = 0;
        this._handled = !1;
        this._value = void 0;
        this._deferreds = [];
        e(n, this)
    }

    function f(n, u) {
        for (; 3 === n._state;) n = n._value;
        return 0 === n._state ? void n._deferreds.push(u) : (n._handled = !0, void t._immediateFn(function() {
            var t = 1 === n._state ? u.onFulfilled : u.onRejected,
                f;
            if (null === t) return void(1 === n._state ? r : i)(u.promise, n._value);
            try {
                f = t(n._value)
            } catch (e) {
                return void i(u.promise, e)
            }
            r(u.promise, f)
        }))
    }

    function r(n, r) {
        try {
            if (r === n) throw new TypeError("A promise cannot be resolved with itself.");
            if (r && ("object" == typeof r || "function" == typeof r)) {
                var f = r.then;
                if (r instanceof t) return n._state = 3, n._value = r, void u(n);
                if ("function" == typeof f) return void e(s(f, r), n)
            }
            n._state = 1;
            n._value = r;
            u(n)
        } catch (o) {
            i(n, o)
        }
    }

    function i(n, t) {
        n._state = 2;
        n._value = t;
        u(n)
    }

    function u(n) {
        2 === n._state && 0 === n._deferreds.length && t._immediateFn(function() {
            n._handled || t._unhandledRejectionFn(n._value)
        });
        for (var i = 0, r = n._deferreds.length; i < r; i++) f(n, n._deferreds[i]);
        n._deferreds = null
    }

    function h(n, t, i) {
        this.onFulfilled = "function" == typeof n ? n : null;
        this.onRejected = "function" == typeof t ? t : null;
        this.promise = i
    }

    function e(n, t) {
        var u = !1;
        try {
            n(function(n) {
                u || (u = !0, r(t, n))
            }, function(n) {
                u || (u = !0, i(t, n))
            })
        } catch (f) {
            if (u) return;
            u = !0;
            i(t, f)
        }
    }
    var c = setTimeout;
    t.prototype["catch"] = function(n) {
        return this.then(null, n)
    };
    t.prototype.then = function(n, t) {
        var i = new this.constructor(o);
        return f(this, new h(n, t, i)), i
    };
    t.all = function(n) {
        var i = Array.prototype.slice.call(n);
        return new t(function(n, t) {
            function u(r, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var o = e.then;
                        if ("function" == typeof o) return void o.call(e, function(n) {
                            u(r, n)
                        }, t)
                    }
                    i[r] = e;
                    0 == --f && n(i)
                } catch (s) {
                    t(s)
                }
            }
            if (0 === i.length) return n([]);
            for (var f = i.length, r = 0; r < i.length; r++) u(r, i[r])
        })
    };
    t.resolve = function(n) {
        return n && "object" == typeof n && n.constructor === t ? n : new t(function(t) {
            t(n)
        })
    };
    t.reject = function(n) {
        return new t(function(t, i) {
            i(n)
        })
    };
    t.race = function(n) {
        return new t(function(t, i) {
            for (var r = 0, u = n.length; r < u; r++) n[r].then(t, i)
        })
    };
    t._immediateFn = "function" == typeof setImmediate && function(n) {
        setImmediate(n)
    } || function(n) {
        c(n, 0)
    };
    t._unhandledRejectionFn = function(n) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", n)
    };
    t._setImmediateFn = function(n) {
        t._immediateFn = n
    };
    t._setUnhandledRejectionFn = function(n) {
        t._unhandledRejectionFn = n
    };
    "undefined" != typeof module && module.exports ? module.exports = t : n.Promise || (n.Promise = t)
}(this);
! function() {
    "use strict";

    function e(n) {
        return or ? Symbol() : "@@" + n
    }

    function v(n, t) {
        var i, r, u;
        return g || (t = t.replace(ft ? /file:\/\/\//g : /file:\/\//g, "")), r = (n.message || n) + "\n  " + t, i = ri && n.fileName ? new Error(r, n.fileName, n.lineNumber) : new Error(r), u = n.originalErr ? n.originalErr.stack : n.stack, i.stack = ii ? r + "\n  " + u : u, i.originalErr = n.originalErr || n, i
    }

    function b(n, t) {
        throw new RangeError('Unable to resolve "' + n + '" to ' + t);
    }

    function o(n, t) {
        var f, h;
        n = n.trim();
        var u = t && t.substr(0, t.indexOf(":") + 1),
            s = n[0],
            c = n[1];
        if ("/" === s && "/" === c) return u || b(n, t), u + n;
        if ("." === s && ("/" === c || "." === c && ("/" === n[2] || 2 === n.length && (n += "/")) || 1 === n.length && (n += "/")) || "/" === s) {
            if (h = !u || "/" !== t[u.length], h ? (void 0 === t && b(n, t), f = t) : f = "/" === t[u.length + 1] ? "file:" !== u ? (f = t.substr(u.length + 2)).substr(f.indexOf("/") + 1) : t.substr(8) : t.substr(u.length + 1), "/" === s) {
                if (!h) return t.substr(0, t.length - f.length - 1) + n;
                b(n, t)
            }
            for (var r = f.substr(0, f.lastIndexOf("/") + 1) + n, o = [], e = -1, i = 0; i < r.length; i++)
                if (-1 === e)
                    if ("." !== r[i]) e = i;
                    else {
                        if ("." !== r[i + 1] || "/" !== r[i + 2] && i + 2 !== r.length) {
                            if ("/" !== r[i + 1] && i + 1 !== r.length) {
                                e = i;
                                continue
                            }
                            i += 1
                        } else o.pop(), i += 2;
                        h && 0 === o.length && b(n, t)
                    }
            else "/" === r[i] && (o.push(r.substring(e, i + 1)), e = -1);
            return -1 !== e && o.push(r.substr(e)), t.substr(0, t.length - f.length) + o.join("")
        }
        if (-1 !== n.indexOf(":")) return ii && ":" === n[1] && "\\" === n[2] && n[0].match(/[a-z]/i) ? "file:///" + n.replace(/\\/g, "/") : n
    }

    function it(n) {
        if (n.values) return n.values();
        if ("undefined" == typeof Symbol || !Symbol.iterator) throw new Error("Symbol.iterator not supported in this browser");
        var t = {};
        return t[Symbol.iterator] = function() {
            var t = Object.keys(n),
                i = 0;
            return {
                next: function() {
                    return i < t.length ? {
                        value: n[t[i++]],
                        done: !1
                    } : {
                        value: void 0,
                        done: !0
                    }
                }
            }
        }, t
    }

    function u() {
        this.registry = new s
    }

    function si(n) {
        if (!(n instanceof i)) throw new TypeError("Module instantiation did not return a valid namespace object.");
        return n
    }

    function hi(n) {
        if (void 0 === n) throw new RangeError("No resolution found.");
        return n
    }

    function s() {
        this[f] = {}
    }

    function i(n) {
        Object.defineProperty(this, ct, {
            value: n
        });
        Object.keys(n).forEach(ci, this)
    }

    function ci(n) {
        Object.defineProperty(this, n, {
            enumerable: !0,
            get: function() {
                return this[ct][n]
            }
        })
    }

    function t() {
        var t, n;
        u.call(this);
        t = this.registry.delete;
        this.registry.delete = function(i) {
            var r = t.call(this, i);
            return n.hasOwnProperty(i) && !n[i].linkRecord && (delete n[i], r = !0), r
        };
        n = {};
        this[w] = {
            lastRegister: void 0,
            records: n
        };
        this.trace = !1
    }

    function k(n, t, i) {
        return n.records[t] = {
            key: t,
            registration: i,
            module: void 0,
            importerSetters: void 0,
            loadError: void 0,
            evalError: void 0,
            linkRecord: {
                instantiatePromise: void 0,
                dependencies: void 0,
                execute: void 0,
                executingRequire: !1,
                moduleObj: void 0,
                setters: void 0,
                depsInstantiatePromise: void 0,
                dependencyInstantiations: void 0
            }
        }
    }

    function li(n, t, i, r, u) {
        var e = r[t],
            f;
        return e ? Promise.resolve(e) : (f = u.records[t], f && !f.module ? f.loadError ? Promise.reject(f.loadError) : rt(n, f, f.linkRecord, r, u) : n.resolve(t, i).then(function(t) {
            if (e = r[t]) return e;
            if ((f = u.records[t]) && !f.module || (f = k(u, t, f && f.registration)), f.loadError) return Promise.reject(f.loadError);
            var i = f.linkRecord;
            return i ? rt(n, f, i, r, u) : f
        }))
    }

    function ai(n, t, i) {
        return function() {
            var n = i.lastRegister;
            return n ? (i.lastRegister = void 0, t.registration = n, !0) : !!t.registration
        }
    }

    function rt(n, t, r, u, f) {
        return r.instantiatePromise || (r.instantiatePromise = (t.registration ? Promise.resolve() : Promise.resolve().then(function() {
            return f.lastRegister = void 0, n[nt](t.key, n[nt].length > 1 && ai(n, t, f))
        })).then(function(e) {
            if (void 0 !== e) {
                if (!(e instanceof i)) throw new TypeError("Instantiate did not return a valid Module object.");
                return delete f.records[t.key], n.trace && kt(n, t, r), u[t.key] = e
            }
            var o = t.registration;
            if (t.registration = void 0, !o) throw new TypeError("Module instantiation did not call an anonymous or correctly named System.register.");
            return r.dependencies = o[0], t.importerSetters = [], r.moduleObj = {}, o[2] ? (r.moduleObj.default = r.moduleObj.__useDefault = {}, r.executingRequire = o[1], r.execute = o[2]) : yi(n, t, r, o[1]), t
        }).catch(function(n) {
            throw t.linkRecord = void 0, t.loadError = t.loadError || v(n, "Instantiating " + t.key);
        }))
    }

    function vi(n, t, i, r, u, f) {
        return n.resolve(t, i).then(function(i) {
            var e, o, s;
            if (f && (f[t] = i), e = u.records[i], o = r[i], o && (!e || e.module && o !== e.module)) return o;
            if (e && e.loadError) throw e.loadError;
            return e && (o || !e.module) || (e = k(u, i, e && e.registration)), s = e.linkRecord, s ? rt(n, e, s, r, u) : e
        })
    }

    function kt(n, t, i) {
        n.loads = n.loads || {};
        n.loads[t.key] = {
            key: t.key,
            deps: i.dependencies,
            dynamicDeps: [],
            depMap: i.depMap || {}
        }
    }

    function yi(n, t, i, r) {
        var u = i.moduleObj,
            e = t.importerSetters,
            o = !1,
            f = r.call(c, function(n, t) {
                var f, i, r;
                if ("object" == typeof n) {
                    f = !1;
                    for (i in n) t = n[i], "__useDefault" === i || i in u && u[i] === t || (f = !0, u[i] = t);
                    if (!1 === f) return t
                } else {
                    if ((o || n in u) && u[n] === t) return t;
                    u[n] = t
                }
                for (r = 0; r < e.length; r++) e[r](u);
                return t
            }, new dt(n, t.key));
        i.setters = f.setters;
        i.execute = f.execute;
        f.exports && (i.moduleObj = u = f.exports, o = !0)
    }

    function pi(n, t, r, u, f) {
        var s, o, e;
        if (r.depsInstantiatePromise) return r.depsInstantiatePromise;
        for (s = Array(r.dependencies.length), o = 0; o < r.dependencies.length; o++) s[o] = vi(n, r.dependencies[o], t.key, u, f, n.trace && r.depMap || (r.depMap = {}));
        return e = Promise.all(s).then(function(n) {
            var f, e, u;
            if (r.dependencyInstantiations = n, r.setters)
                for (f = 0; f < n.length; f++)
                    if (e = r.setters[f], e)
                        if (u = n[f], u instanceof i) e(u);
                        else {
                            if (u.loadError) throw u.loadError;
                            e(u.module || u.linkRecord.moduleObj);
                            u.importerSetters && u.importerSetters.push(e)
                        }
            return t
        }), n.trace && (e = e.then(function() {
            return kt(n, t, r), t
        })), (e = e.catch(function(n) {
            throw r.depsInstantiatePromise = void 0, v(n, "Loading " + t.key);
        })).catch(function() {}), r.depsInstantiatePromise = e
    }

    function wi(n, t, r, u, f) {
        return new Promise(function(r, e) {
            function s(t) {
                var i = t.linkRecord;
                i && -1 === h.indexOf(t) && (h.push(t), o++, pi(n, t, i, u, f).then(c, e))
            }

            function c(n) {
                var t, u, f;
                if (o--, t = n.linkRecord, t)
                    for (u = 0; u < t.dependencies.length; u++) f = t.dependencyInstantiations[u], f instanceof i || s(f);
                0 === o && r()
            }
            var h = [],
                o = 0;
            s(t)
        })
    }

    function dt(n, t) {
        this.loader = n;
        this.key = this.id = t;
        this.meta = {
            url: t
        }
    }

    function gt(n, t, i, r, u, f) {
        if (t.module) return t.module;
        if (t.evalError) throw t.evalError;
        if (f && -1 !== f.indexOf(t)) return t.linkRecord.moduleObj;
        var e = ni(n, t, i, r, u, i.setters ? [] : f || []);
        if (e) throw e;
        return t.module
    }

    function bi(n, t, r, u, f, e, o) {
        return function(s) {
            for (var l, c, h = 0; h < r.length; h++)
                if (r[h] === s) return c = u[h], l = c instanceof i ? c : gt(n, c, c.linkRecord, f, e, o), "__useDefault" in l ? l.__useDefault : l;
            throw new Error("Module " + s + " not declared as a System.registerDynamic dependency of " + t);
        }
    }

    function ni(n, t, r, u, f, e) {
        var h, c, p, o, a, s, w, l, y;
        if (e.push(t), r.setters)
            for (o = 0; o < r.dependencies.length; o++)
                if (!((c = r.dependencyInstantiations[o]) instanceof i) && ((p = c.linkRecord) && -1 === e.indexOf(c) && (h = c.evalError ? c.evalError : ni(n, c, p, u, f, p.setters ? e : [])), h)) return t.linkRecord = void 0, t.evalError = v(h, "Evaluating " + t.key), t.evalError;
        if (r.execute)
            if (r.setters) h = ki(r.execute);
            else {
                if (a = {
                        id: t.key
                    }, s = r.moduleObj, Object.defineProperty(a, "exports", {
                        configurable: !0,
                        set: function(n) {
                            s.default = s.__useDefault = n
                        },
                        get: function() {
                            return s.__useDefault
                        }
                    }), w = bi(n, t.key, r.dependencies, r.dependencyInstantiations, u, f, e), !r.executingRequire)
                    for (o = 0; o < r.dependencies.length; o++) w(r.dependencies[o]);
                if (h = di(r.execute, w, s.default, a), a.exports !== s.__useDefault && (s.default = s.__useDefault = a.exports), l = s.default, l && l.__esModule)
                    for (y in l) Object.hasOwnProperty.call(l, y) && (s[y] = l[y])
            }
        if (t.linkRecord = void 0, h) return t.evalError = v(h, "Evaluating " + t.key);
        if (u[t.key] = t.module = new i(r.moduleObj), !r.setters) {
            if (t.importerSetters)
                for (o = 0; o < t.importerSetters.length; o++) t.importerSetters[o](t.module);
            t.importerSetters = void 0
        }
    }

    function ki(n) {
        try {
            n.call(lt)
        } catch (n) {
            return n
        }
    }

    function di(n, t, i, r) {
        try {
            var u = n.call(c, t, i, r);
            void 0 !== u && (r.exports = u)
        } catch (n) {
            return n
        }
    }

    function gi(n) {
        return void 0 === at && (at = "undefined" != typeof Symbol && !!Symbol.toStringTag), n instanceof i || at && "[object Module]" == Object.prototype.toString.call(n)
    }

    function nr(n, t, i) {
        var r = new Uint8Array(t);
        return 0 === r[0] && 97 === r[1] && 115 === r[2] ? WebAssembly.compile(t).then(function(t) {
            var r = [],
                u = [],
                f = {};
            return WebAssembly.Module.imports && WebAssembly.Module.imports(t).forEach(function(n) {
                var t = n.module;
                u.push(function(n) {
                    f[t] = n
                }); - 1 === r.indexOf(t) && r.push(t)
            }), n.register(r, function(n) {
                return {
                    setters: u,
                    execute: function() {
                        n(new WebAssembly.Instance(t, f).exports)
                    }
                }
            }), i(), !0
        }) : Promise.resolve(!1)
    }

    function p(n, t) {
        for (var i in t) Object.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        return n
    }

    function tr(n) {
        if (pt || oi) {
            var t = document.createElement("link");
            pt ? (t.rel = "preload", t.as = "script") : t.rel = "prefetch";
            t.href = n;
            document.head.appendChild(t)
        } else(new Image).src = n
    }

    function ir(n, t, i) {
        try {
            importScripts(n)
        } catch (n) {
            i(n)
        }
        t()
    }

    function rr(n, t, i, r, u) {
        function o() {
            r();
            s()
        }

        function e() {
            s();
            u(new Error("Fetching " + n))
        }

        function s() {
            for (var n = 0; n < a.length; n++)
                if (a[n].err === e) {
                    a.splice(n, 1);
                    break
                }
            f.removeEventListener("load", o, !1);
            f.removeEventListener("error", e, !1);
            document.head.removeChild(f)
        }
        if (n = n.replace(/#/g, "%23"), ei) return ir(n, r, u);
        var f = document.createElement("script");
        f.type = "text/javascript";
        f.charset = "utf-8";
        f.async = !0;
        t && (f.crossOrigin = t);
        i && (f.integrity = i);
        f.addEventListener("load", o, !1);
        f.addEventListener("error", e, !1);
        f.src = n;
        document.head.appendChild(f)
    }

    function ut(t, i, r) {
        var u = d(i, r),
            f, e;
        return u ? (f = i[u] + r.substr(u.length), e = o(f, n), void 0 !== e ? e : t + f) : -1 !== r.indexOf(":") ? r : t + r
    }

    function ur(n) {
        var t = this.name,
            i;
        t.substr(0, n.length) === n && (t.length === n.length || "/" === t[n.length] || "/" === n[n.length - 1] || ":" === n[n.length - 1]) && (i = n.split("/").length, i > this.len && (this.match = n, this.len = i))
    }

    function d(n, t) {
        if (Object.hasOwnProperty.call(n, t)) return t;
        var i = {
            name: t,
            match: void 0,
            len: 0
        };
        return Object.keys(n).forEach(ur, i), i.match
    }

    function h() {
        t.call(this);
        this[l] = {
            baseURL: n,
            paths: {},
            map: {},
            submap: {},
            bundles: {},
            depCache: {},
            wasm: !1
        };
        this.registry.set("@empty", hr)
    }

    function fr(n, t) {
        var u = this[l],
            e, f, s, i, r;
        return t && (e = d(u.submap, t), f = u.submap[e], i = f && d(f, n)) ? o(r = f[i] + n.substr(i.length), e) || r : (s = u.map, i = d(s, n), i ? (r = s[i] + n.substr(i.length), o(r, t || u.baseURL) || r) : void 0)
    }

    function ti(n, t) {
        return new Promise(function(i, r) {
            return rr(n, "anonymous", void 0, function() {
                t();
                i()
            }, r)
        })
    }

    function er(n, t) {
        var e = this[l],
            o = e.wasm,
            s = e.bundles[n],
            i, u, h, f, r;
        if (s) return (i = (r = this).resolveSync(s, void 0), r.registry.has(i)) ? void 0 : tt[i] || (tt[i] = ti(i, t).then(function() {
            r.registry.has(i) || r.registry.set(i, r.newModule({}));
            delete tt[i]
        }));
        if (u = e.depCache[n], u)
            for (h = o ? fetch : tr, f = 0; f < u.length; f++) this.resolve(u[f], n).then(h);
        return o ? (r = this, fetch(n).then(function(n) {
            if (n.ok) return n.arrayBuffer();
            throw new Error("Fetch error: " + n.status + " " + n.statusText);
        }).then(function(i) {
            return nr(r, i, t).then(function(r) {
                if (!r) {
                    var u = new TextDecoder("utf-8").decode(new Uint8Array(i));
                    eval(u + "\n//# sourceURL=" + n);
                    t()
                }
            })
        })) : ti(n, t)
    }
    var n, g = "undefined" != typeof window && "undefined" != typeof document,
        ii = "undefined" != typeof process && process.versions && process.versions.node,
        ft = "undefined" != typeof process && "string" == typeof process.platform && process.platform.match(/^win/),
        c = "undefined" != typeof self ? self : global,
        or = "undefined" != typeof Symbol,
        et, ot, ri, st, ui, ht, fi, f, ct, w, nt, lt, a, wt, r, tt, y, bt;
    if ("undefined" != typeof document && document.getElementsByTagName ? (n = document.baseURI) || (et = document.getElementsByTagName("base"), n = et[0] && et[0].href || window.location.href) : "undefined" != typeof location && (n = location.href), n) ot = (n = n.split("#")[0].split("?")[0]).lastIndexOf("/"), -1 !== ot && (n = n.substr(0, ot + 1));
    else {
        if ("undefined" == typeof process || !process.cwd) throw new TypeError("No environment baseURI");
        n = "file://" + (ft ? "/" : "") + process.cwd();
        ft && (n = n.replace(/\\/g, "/"))
    }
    "/" !== n[n.length - 1] && (n += "/");
    ri = "_" == new Error(0, "_").fileName;
    st = Promise.resolve();
    u.prototype.constructor = u;
    u.prototype.import = function(n, t) {
        if ("string" != typeof n) throw new TypeError("Loader import method must be passed a module key string");
        var i = this;
        return st.then(function() {
            return i[ht](n, t)
        }).then(si).catch(function(i) {
            throw v(i, "Loading " + n + (t ? " from " + t : ""));
        })
    };
    ui = u.resolve = e("resolve");
    ht = u.resolveInstantiate = e("resolveInstantiate");
    u.prototype[ht] = function(n, t) {
        var i = this;
        return i.resolve(n, t).then(function(n) {
            return i.registry.get(n)
        })
    };
    u.prototype.resolve = function(n, t) {
        var i = this;
        return st.then(function() {
            return i[ui](n, t)
        }).then(hi).catch(function(i) {
            throw v(i, "Resolving " + n + (t ? " to " + t : ""));
        })
    };
    fi = "undefined" != typeof Symbol && Symbol.iterator;
    f = e("registry");
    fi && (s.prototype[Symbol.iterator] = function() {
        return this.entries()[Symbol.iterator]()
    }, s.prototype.entries = function() {
        var n = this[f];
        return it(Object.keys(n).map(function(t) {
            return [t, n[t]]
        }))
    });
    s.prototype.keys = function() {
        return it(Object.keys(this[f]))
    };
    s.prototype.values = function() {
        var n = this[f];
        return it(Object.keys(n).map(function(t) {
            return n[t]
        }))
    };
    s.prototype.get = function(n) {
        return this[f][n]
    };
    s.prototype.set = function(n, t) {
        if (!(t instanceof i)) throw new Error("Registry must be set with an instance of Module Namespace");
        return this[f][n] = t, this
    };
    s.prototype.has = function(n) {
        return Object.hasOwnProperty.call(this[f], n)
    };
    s.prototype.delete = function(n) {
        return !!Object.hasOwnProperty.call(this[f], n) && (delete this[f][n], !0)
    };
    ct = e("baseObject");
    i.prototype = Object.create(null);
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(i.prototype, Symbol.toStringTag, {
        value: "Module"
    });
    w = e("register-internal");
    t.prototype = Object.create(u.prototype);
    t.prototype.constructor = t;
    nt = t.instantiate = e("instantiate");
    t.prototype[t.resolve = u.resolve] = function(t, i) {
        return o(t, i || n)
    };
    t.prototype[nt] = function() {};
    t.prototype[u.resolveInstantiate] = function(n, t) {
        var r = this,
            u = this[w],
            e = this.registry[f];
        return li(r, n, t, e, u).then(function(n) {
            if (n instanceof i) return n;
            var t = n.linkRecord;
            if (!t) {
                if (n.module) return n.module;
                throw n.evalError;
            }
            return wi(r, n, t, e, u).then(function() {
                return gt(r, n, t, e, u, void 0)
            })
        })
    };
    t.prototype.register = function(n, t, i) {
        var r = this[w];
        void 0 === i ? r.lastRegister = [n, t, void 0] : (r.records[n] || k(r, n, void 0)).registration = [t, i, void 0]
    };
    t.prototype.registerDynamic = function(n, t, i, r) {
        var u = this[w];
        "string" != typeof n ? u.lastRegister = [n, t, i] : (u.records[n] || k(u, n, void 0)).registration = [t, i, r]
    };
    dt.prototype.import = function(n) {
        return this.loader.trace && this.loader.loads[this.key].dynamicDeps.push(n), this.loader.import(n, this.key)
    };
    lt = {};
    Object.freeze && Object.freeze(lt);
    var at, sr = Promise.resolve(),
        hr = new i({}),
        l = e("loader-config"),
        vt = e("plain-resolve"),
        yt = e("plain-resolve-sync"),
        ei = "undefined" == typeof window && "undefined" != typeof self && "undefined" != typeof importScripts,
        pt = !1,
        oi = !1;
    (g && function() {
        var n = document.createElement("link").relList;
        if (n && n.supports) {
            oi = !0;
            try {
                pt = n.supports("preload")
            } catch (n) {}
        }
    }(), g) && (a = [], wt = window.onerror, window.onerror = function(n, t) {
        for (var i = 0; i < a.length; i++)
            if (a[i].src === t) return void a[i].err(n);
        wt && wt.apply(this, arguments)
    });
    h.plainResolve = vt;
    h.plainResolveSync = yt;
    r = h.prototype = Object.create(t.prototype);
    r.constructor = h;
    r[h.resolve = t.resolve] = function(t, i) {
        var u = o(t, i || n),
            r;
        return void 0 !== u ? Promise.resolve(u) : (r = this, sr.then(function() {
            return r[vt](t, i)
        }).then(function(n) {
            if (n = n || t, r.registry.has(n)) return n;
            var i = r[l];
            return ut(i.baseURL, i.paths, n)
        }))
    };
    r.newModule = function(n) {
        return new i(n)
    };
    r.isModule = gi;
    r.resolveSync = function(t, i) {
        var r = o(t, i || n),
            u;
        return void 0 !== r ? r : (r = this[yt](t, i) || t, this.registry.has(r)) ? r : (u = this[l], ut(u.baseURL, u.paths, r))
    };
    r.import = function() {
        return t.prototype.import.apply(this, arguments).then(function(n) {
            return "__useDefault" in n ? n.__useDefault : n
        })
    };
    r[vt] = r[yt] = fr;
    r[h.instantiate = t.instantiate] = er;
    r.config = function(t) {
        var r = this[l],
            u, f, s, i, e;
        if (t.baseURL && (r.baseURL = o(t.baseURL, n) || o("./" + t.baseURL, n), "/" !== r.baseURL[r.baseURL.length - 1] && (r.baseURL += "/")), t.paths && p(r.paths, t.paths), t.map) {
            u = t.map;
            for (i in u) Object.hasOwnProperty.call(u, i) && ("string" == typeof(f = u[i]) ? r.map[i] = f : (e = o(i, n) || ut(r.baseURL, r.paths, i), p(r.submap[e] || (r.submap[e] = {}), f)))
        }
        for (i in t)
            if (Object.hasOwnProperty.call(t, i)) {
                u = t[i];
                switch (i) {
                    case "baseURL":
                    case "paths":
                    case "map":
                        break;
                    case "bundles":
                        for (i in u)
                            if (Object.hasOwnProperty.call(u, i))
                                for (f = u[i], s = 0; s < f.length; s++) r.bundles[this.resolveSync(f[s], void 0)] = i;
                        break;
                    case "depCache":
                        for (i in u) Object.hasOwnProperty.call(u, i) && (e = this.resolveSync(i, void 0), r.depCache[e] = (r.depCache[e] || []).concat(u[i]));
                        break;
                    case "wasm":
                        r.wasm = "undefined" != typeof WebAssembly && !!u;
                        break;
                    default:
                        throw new TypeError('The SystemJS production build does not support the "' + i + '" configuration option.');
                }
            }
    };
    r.getConfig = function() {
        var n = this[l],
            i = {},
            r, u, t;
        p(i, n.map);
        for (t in n.submap) Object.hasOwnProperty.call(n.submap, t) && (i[t] = p({}, n.submap[t]));
        r = {};
        for (t in n.depCache) Object.hasOwnProperty.call(n.depCache, t) && (r[t] = [].concat(n.depCache[t]));
        u = {};
        for (t in n.bundles) Object.hasOwnProperty.call(n.bundles, t) && (u[t] = [].concat(n.bundles[t]));
        return {
            baseURL: n.baseURL,
            paths: p({}, n.paths),
            depCache: r,
            bundles: u,
            map: i,
            wasm: n.wasm
        }
    };
    r.register = function(n, i, r) {
        return "string" == typeof n && (n = this.resolveSync(n, void 0)), t.prototype.register.call(this, n, i, r)
    };
    r.registerDynamic = function(n, i, r, u) {
        return "string" == typeof n && (n = this.resolveSync(n, void 0)), t.prototype.registerDynamic.call(this, n, i, r, u)
    };
    tt = {};
    h.prototype.version = "0.20.19 Production";
    y = new h;
    (g || ei) && ((c.SystemJS = y, c.System) ? (bt = c.System.register, c.System.register = function() {
        bt && bt.apply(this, arguments);
        y.register.apply(y, arguments)
    }) : c.System = y);
    "undefined" != typeof module && module.exports && (module.exports = y)
}();
var __extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, t) {
            n.__proto__ = t
        } || function(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
        }, n(t, i)
    };
    return function(t, i) {
        function r() {
            this.constructor = t
        }
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
    }
}();
System.register("components/generic/custom-base", [], function(n, t) {
    "use strict";
    var i, r = t && t.id;
    return {
        setters: [],
        execute: function() {
            i = function() {
                function n() {
                    this.$ = $
                }
                return n
            }();
            n("CustomBase", i)
        }
    }
});
System.register("components/header", ["components/generic/custom-base"], function(n, t) {
    "use strict";
    var i, r, u = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }],
        execute: function() {
            r = function(n) {
                function t() {
                    var t = n.call(this) || this;
                    return jQuery(document).ready(function() {
                        var n = jQuery(".hamburger"),
                            t = jQuery(".mobile-menu");
                        n.on("click", function() {
                            t.slideToggle(1e3).css("display", "inline-block")
                        });
                        jQuery(".mobile-menu-header-item").click(function(n) {
                            var i = jQuery(this).hasClass("selected"),
                                t;
                            n.stopPropagation();
                            jQuery(".mobile-menu-header-item").removeClass("selected");
                            t = jQuery(".level2 ul", this);
                            jQuery(".level2  ul").not(t).slideUp(600);
                            t.stop(!0, !0).slideToggle(1e3);
                            i || jQuery(this).addClass("selected")
                        });
                        jQuery(".level2 li").click(function(n) {
                            n.stopImmediatePropagation();
                            window.location.href = jQuery(this).find("a").attr("href")
                        })
                    }), t
                }
                return __extends(t, n), t.prototype.init = function() {}, t
            }(i.CustomBase);
            n("Header", r)
        }
    }
});
System.register("components/footer", ["components/generic/custom-base"], function(n, t) {
    "use strict";
    var i, r, u = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }],
        execute: function() {
            r = function(n) {
                function t() {
                    var t = n.call(this) || this;
                    return jQuery(document).ready(function() {
                        var n = jQuery(".footer-content-block-wrapper-mobile-button"),
                            t = jQuery(".footer-content-block-wrapper-mobile"),
                            i = jQuery(".footer-contact-chevron");
                        n.on("click", function() {
                            t.slideToggle(1e3).css("display", "block");
                            i.toggleClass("chevron-up")
                        })
                    }), t
                }
                return __extends(t, n), t.prototype.init = function() {}, t
            }(i.CustomBase);
            n("Footer", r)
        }
    }
});
System.register("components/flexcolumns", ["components/generic/custom-base"], function(n, t) {
    "use strict";
    var i, r, u = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }],
        execute: function() {
            r = function(n) {
                function t() {
                    var t = n.call(this) || this;
                    return jQuery(document).ready(function() {
                        var n = t;
                        jQuery(".flex-container").length > 0 && (t.checkBreakpoint(), jQuery(window).resize(function() {
                            n.checkBreakpoint()
                        }));
                        jQuery.trim(jQuery(".field-moreinfo").html()) == "" && jQuery.trim(jQuery(".moreinfo-links").html()) == "" && jQuery(".field-moreinfo").parent().parent().parent().parent().css("display", "none")
                    }), t
                }
                return __extends(t, n), t.prototype.init = function() {
                    this._breakPointIsHit = !1
                }, t.prototype.checkBreakpoint = function() {
                    var n = jQuery(window).width();
                    n < 960 && !this._breakPointIsHit ? (this.breakupColumns(), this._breakPointIsHit = !0) : n >= 960 && this._breakPointIsHit && (this.restoreColumns(), this._breakPointIsHit = !1)
                }, t.prototype.breakupColumns = function() {
                    var r = jQuery(".flex-container"),
                        i = r.find(".flex-column"),
                        e = r.find(".flex-box"),
                        t;
                    if (e.length > 4 && i.length > 2) {
                        var u = jQuery(i[2]),
                            f = u.find(".flex-box"),
                            n = 0;
                        for (t = 0; t < f.length; t++) n == 2 && (n = 0), jQuery(f[t]).detach().appendTo(i[n]), n++;
                        u.css("display", "none")
                    }
                }, t.prototype.restoreColumns = function() {
                    for (var i, r = jQuery(".flex-container"), n = r.find(".flex-column"), t = 0; t < n.length; t++) i = jQuery(n[t]).find(".flex-box"), i.length > 2 && jQuery(i.last()).detach().appendTo(n.last());
                    n.last().css("display", "block")
                }, t
            }(i.CustomBase);
            n("FlexColumns", r)
        }
    }
});
System.register("components/contentpagecolumns", ["components/generic/custom-base"], function(n, t) {
    "use strict";
    var i, r, u = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }],
        execute: function() {
            r = function(n) {
                function t() {
                    var t = n.call(this) || this;
                    return jQuery(document).ready(function() {
                        var n = t;
                        jQuery(".content-page-column").length > 2 && (t.checkBreakpoint(), jQuery(window).resize(function() {
                            n.checkBreakpoint()
                        }))
                    }), t
                }
                return __extends(t, n), t.prototype.init = function() {
                    this._breakPointIsHit = !1;
                    this._rowAdded = !1
                }, t.prototype.checkBreakpoint = function() {
                    var n = jQuery(window).width(),
                        t = jQuery(".content-page-column");
                    n < 1200 && !this._breakPointIsHit ? (this._breakPointIsHit = !0, this.breakupColumns(t)) : n >= 1200 && this._breakPointIsHit && (this._breakPointIsHit = !1, this.restoreColumns(t));
                    n < 960 && !this._rowAdded ? (this._rowAdded = !0, this.toggleRow(t)) : n >= 960 && this._rowAdded && (this._rowAdded = !1, this.toggleRow(t))
                }, t.prototype.toggleRow = function(n) {
                    n.toggleClass("row")
                }, t.prototype.breakupColumns = function(n) {
                    var t = n.first(),
                        i = n.last();
                    jQuery(t.children().first()).detach().appendTo(i);
                    t.css("display", "none")
                }, t.prototype.restoreColumns = function(n) {
                    var t = n.first(),
                        i = n.last();
                    jQuery(i.children().last()).detach().appendTo(t);
                    t.css("display", "block")
                }, t
            }(i.CustomBase);
            n("ContentPageColumns", r)
        }
    }
});
System.register("components/hero-ie", ["components/generic/custom-base"], function(n, t) {
    "use strict";
    var i, r, u = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }],
        execute: function() {
            r = function(n) {
                function t() {
                    var t = n.call(this) || this;
                    return jQuery(document).ready(function() {
                        var t = window.navigator.userAgent,
                            n, i;
                        (t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0) && (n = jQuery(".hero-image img"), n.length > 0 && (i = n.attr("src"), jQuery(".hero-image").append('<div class="hero-image-ie" style="background-image: url(' + i + ')"><\/div>')))
                    }), t
                }
                return __extends(t, n), t.prototype.init = function() {}, t
            }(i.CustomBase);
            n("HeroIE", r)
        }
    }
});
System.register("components/project-list", ["components/generic/custom-base"], function(n, t) {
    "use strict";
    var i, r, u = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }],
        execute: function() {
            r = function(n) {
                function t() {
                    var t = n.call(this) || this;
                    return jQuery(document).ready(function() {
                        function t() {
                            jQuery.getJSON("/api/projectmap", function(n) {
                                jQuery.each(n.Projecten, function(t, i) {
                                    jQuery(".content-project-list").append('<div class="project-list-item-container project-list-item"><img src="' + i.POIimage + '"><h3 data-type="' + i.Type + '">' + i.Type + "<\/h3><h2>" + i.Title + "<\/h2><p>" + i.Description + '<\/p><button class="button button-blue-gray" type="button"><div class="button-wrapper"> <a class="button-link" href="' + i.POIpage + '">' + n.ButtonText + '<\/a><div class="button-icon"><\/div><\/div><\/button>')
                                })
                            })
                        }

                        function i() {
                            r.css("display", "none");
                            jQuery(".toggle-map").removeClass("active");
                            jQuery(".toggle-list").addClass("active");
                            u.css("display", "block")
                        }
                        var n = !0,
                            f = jQuery(".toggle-list"),
                            e = jQuery(".toggle-map"),
                            r = jQuery(".projectmap-container"),
                            u = jQuery(".content-project-list");
                        if (jQuery("div").hasClass("projectmap-container")) {
                            jQuery(window).width() < 700 ? (t(), n = !1, i()) : jQuery(".toggle-map").addClass("active");
                            f.on("click", function() {
                                n && (t(), n = !1);
                                i()
                            });
                            e.on("click", function() {
                                u.css("display", "none");
                                r.css("display", "block");
                                jQuery(".toggle-list").removeClass("active");
                                jQuery(".toggle-map").addClass("active")
                            });
                            jQuery(window).resize(function() {
                                jQuery(this).width() < 700 && (n && t(), i())
                            })
                        }
                    }), t
                }
                return __extends(t, n), t.prototype.init = function() {}, t
            }(i.CustomBase);
            n("ProjectList", r)
        }
    }
});
System.register("components/Table-of-content", ["components/generic/custom-base"], function(n, t) {
    "use strict";
    var i, r, u = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }],
        execute: function() {
            r = function(n) {
                function t() {
                    var t = n.call(this) || this;
                    return jQuery(document).ready(function() {
                        var n = jQuery(".table-container");
                        n.length != 0 && (window.location.search.indexOf("sc_mode=edit") == -1 && jQuery(".content-main").find("h2").each(function(n, t) {
                            jQuery(t).attr("id", "Cha" + n)
                        }), jQuery(".content-toggle").click(function(t) {
                            var i = jQuery(n).hasClass("table-container-close");
                            t.stopPropagation();
                            jQuery(n).removeClass("table-container-close");
                            i || jQuery(n).addClass("table-container-close");
                            jQuery(".table-container ul").fadeToggle(500)
                        }))
                    }), t
                }
                return __extends(t, n), t.prototype.init = function() {}, t
            }(i.CustomBase);
            n("TableOfContent", r)
        }
    }
});
System.register("components/access-acknowledgement-model", ["components/generic/custom-base"], function(n, t) {
    "use strict";
    var i, r, u = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }],
        execute: function() {
            r = function(n) {
                function t() {
                    var t = n.call(this) || this;
                    return jQuery(document).ready(function() {
                        var n = jQuery(".access-checkbox");
                        jQuery(n).click(function() {
                            jQuery(n).is(":checked") ? (jQuery(".pdf-toggle").removeClass("pdf-disabled"), jQuery(".pdf-toggle-format").removeClass("button-disabled"), jQuery(".pdf-toggle-format").addClass("button-blue-gray")) : (jQuery(".pdf-toggle").addClass("pdf-disabled"), jQuery(".pdf-toggle-format").removeClass("button-blue-gray"), jQuery(".pdf-toggle-format").addClass("button-disabled"))
                        })
                    }), t
                }
                return __extends(t, n), t.prototype.init = function() {}, t
            }(i.CustomBase);
            n("AccessAcknowledgementModel", r)
        }
    }
});
System.register("components/responsive-tables", ["components/generic/custom-base"], function(n, t) {
    "use strict";
    var i, r, u = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }],
        execute: function() {
            r = function(n) {
                function t() {
                    var t = n.call(this) || this;
                    return jQuery(document).ready(function() {
                        var t = [],
                            n = 0;
                        jQuery(".content-main").find("table").each(function(i, r) {
                            jQuery(r).find("th").each(function() {
                                t.push(jQuery(this).text())
                            });
                            jQuery(r).find("td").each(function(i, r) {
                                jQuery(this).prop("colspan") == 1 && (jQuery(r).attr("data-label", t[n]), n++);
                                n == t.length && (n = 0)
                            })
                        })
                    }), t
                }
                return __extends(t, n), t.prototype.init = function() {}, t
            }(i.CustomBase);
            n("ResponsiveTables", r)
        }
    }
});
System.register("components/Button-ie", ["components/generic/custom-base"], function(n, t) {
    "use strict";
    var i, r, u = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }],
        execute: function() {
            r = function(n) {
                function t() {
                    var t = n.call(this) || this;
                    return jQuery(document).ready(function() {
                        var n = window.navigator.userAgent;
                        n.indexOf("Trident/7.0") > 0 && jQuery("main").find("button").wrap(function() {
                            return jQuery(this).attr("type", "submit"), "<form action=" + jQuery(this).find("a").attr("href") + "><\/form>"
                        })
                    }), t
                }
                return __extends(t, n), t.prototype.init = function() {}, t
            }(i.CustomBase);
            n("ButtonIE", r)
        }
    }
});
System.register("components/image-popup", ["components/generic/custom-base"], function(n, t) {
    "use strict";
    var i, r, u = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }],
        execute: function() {
            r = function(n) {
                function t() {
                    var i = n.call(this) || this,
                        t;
                    jQuery(document).ready(function() {
                        window.location.search.indexOf("sc_mode=edit") == -1 && jQuery(".image-popup").click(function() {
                            var n = jQuery(this).find("img").attr("src");
                            n.indexOf("?") > -1 && (n = n.split("?")[0]);
                            jQuery('<div class="bng-modal-popup"><span class="bng-modal-close">&times;<\/span><img src="' + n + '" class="bng-modal-content"><\/div>').insertAfter(this);
                            t = document.getElementsByClassName("bng-modal-popup")
                        })
                    });
                    jQuery(document).on("click", ".bng-modal-close", function() {
                        jQuery(t).remove()
                    });
                    return i
                }
                return __extends(t, n), t.prototype.init = function() {}, t
            }(i.CustomBase);
            n("ImagePopup", r)
        }
    }
});
System.register("corporate-bngbank", ["components/header", "components/generic/custom-base", "components/footer", "components/flexcolumns", "components/contentpagecolumns", "components/hero-ie", "components/project-list", "components/Table-of-content", "components/access-acknowledgement-model", "components/responsive-tables", "components/Button-ie", "components/image-popup"], function(n, t) {
    "use strict";
    var i, r, u, f, e, o, s, h, c, l, a, v, y, p = t && t.id;
    return {
        setters: [function(n) {
            i = n
        }, function(n) {
            r = n
        }, function(n) {
            u = n
        }, function(n) {
            f = n
        }, function(n) {
            e = n
        }, function(n) {
            o = n
        }, function(n) {
            s = n
        }, function(n) {
            h = n
        }, function(n) {
            c = n
        }, function(n) {
            l = n
        }, function(n) {
            a = n
        }, function(n) {
            v = n
        }],
        execute: function() {
            y = function(n) {
                function t() {
                    var t = n !== null && n.apply(this, arguments) || this;
                    return t.allModules = [new i.Header, new u.Footer, new f.FlexColumns, new e.ContentPageColumns, new o.HeroIE, new s.ProjectList, new c.AccessAcknowledgementModel, new h.TableOfContent, new l.ResponsiveTables, new a.ButtonIE, new v.ImagePopup, ], t
                }
                return __extends(t, n), t.prototype.init = function() {
                    this.initModules(this.allModules)
                }, t.prototype.initModules = function(n) {
                    n.forEach(function(n) {
                        n.init()
                    })
                }, t
            }(r.CustomBase);
            n("MainModule", y)
        }
    }
});
jQuery(function() {
    System.import("corporate-bngbank").then(function(n) {
        (new n.MainModule).init()
    })
})