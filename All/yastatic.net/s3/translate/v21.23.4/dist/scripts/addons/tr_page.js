! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var u = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(u.exports, u, u.exports, n), u.l = !0, u.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var u in t) n.d(r, u, function(e) {
                return t[e]
            }.bind(null, u));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 101)
}([function(t, e, n) {
    var r = n(41)("wks"),
        u = n(33),
        i = n(1).Symbol,
        o = "function" == typeof i;
    (t.exports = function(t) {
        return r[t] || (r[t] = o && i[t] || (o ? i : u)("Symbol." + t))
    }).store = r
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    var r = n(2);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var r = n(1),
        u = n(24),
        i = n(22),
        o = n(11),
        a = n(23),
        s = function(t, e, n) {
            var c, l, f, h, p = t & s.F,
                v = t & s.G,
                d = t & s.S,
                y = t & s.P,
                g = t & s.B,
                D = v ? r : d ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                E = v ? u : u[e] || (u[e] = {}),
                b = E.prototype || (E.prototype = {});
            for (c in v && (n = e), n) f = ((l = !p && D && void 0 !== D[c]) ? D : n)[c], h = g && l ? a(f, r) : y && "function" == typeof f ? a(Function.call, f) : f, D && o(D, c, f, t & s.U), E[c] != f && i(E, c, h), y && b[c] != f && (b[c] = f)
        };
    r.core = u, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.util = void 0, n(102), n(12), n(9), n(10), n(13), n(30), n(83), n(59), n(47), n(86), n(88), n(89), n(111);
    var r, u = window,
        i = document.createElement("link"),
        o = {
            yandexuid: "yu",
            _ym_uid: "yum",
            spravka: "sprvk"
        };
    try {
        r = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])+/g
    } catch (t) {}
    r && r.unicode || (r = /[^`~!@#$%^&*()_|+\-=?;:'",.<>{}\[\]\\\/\s\n\d]+/gi);
    var a = new Set(".!?。！？…".split("")),
        s = {
            viewportWidth: u.innerWidth,
            viewportHeight: u.innerHeight,
            RTLLangs: {
                ar: !0,
                fa: !0,
                he: !0,
                ur: !0,
                yi: !0
            },
            frameTags: {
                FRAME: !0,
                IFRAME: !0
            },
            truncationRules: [/(\n+)/, /([.!?;](?:\s+|$))/, /([\-\u2012-\u2015](?:\s+|$))/, /([,:](?:\s+|$))/, /([\u3002\uff01\uff1f\uff1b\u2026])/, /([\uff0c\uff1a])/, /(\s+)/],
            buttonInputTypes: {
                reset: !0,
                submit: !0,
                button: !0
            },
            slice: function(t, e, n) {
                return Array.prototype.slice.call(t, e, n)
            },
            toNum: function(t) {
                return Number(t) || 0
            },
            isFunc: function(t) {
                return "function" == typeof t
            },
            isString: function(t) {
                return "string" == typeof t
            },
            hasText: function(t) {
                return Boolean(t) && /[a-zA-Z\u00c0-\uffef]/.test(t)
            },
            isFrame: function(t) {
                return t && this.frameTags[t.nodeName]
            },
            debounce: function(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return function() {
                    var r = this,
                        i = arguments;
                    return u.clearTimeout(e), e = u.setTimeout((function() {
                        t.apply(r, i)
                    }), n), this
                }
            },
            limitedDebounce: function(t) {
                var e, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                return function() {
                    var o = this,
                        a = arguments,
                        s = Date.now();
                    return u.clearTimeout(e), n && s > n + r * i ? (n = null, t.apply(o, a)) : (n || (n = s), e = u.setTimeout((function() {
                        n = null, t.apply(o, a)
                    }), r)), this
                }
            },
            bindFunc: function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            setZeroDelayTimeout: function(t) {
                u.setTimeout(t, 0)
            },
            inherits: function(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t
            },
            getStyle: function(t) {
                return u.getComputedStyle(t, null) || t.style
            },
            isInline: function(t) {
                var e = this.getStyle(t);
                return "inline" === e.display && "static" === e.position
            },
            isInvisible: function(t, e) {
                var n = t.getBoundingClientRect(),
                    r = this.viewportHeight * s.toNum(e);
                return n.right < 0 || n.bottom < -r || n.top > this.viewportHeight + r || n.left > this.viewportWidth
            },
            breakText: function(t, e) {
                for (var n, r = []; t;) n = this.truncateText(t, e), r.push(n), t = t.slice(n.length);
                return r
            },
            escapeHTML: function(t) {
                return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
            },
            getUserIdData: function() {
                var t = {};
                for (var e in o)
                    if (o.hasOwnProperty(e)) {
                        var n = this.getCookie(e);
                        n && (t[o[e]] = n)
                    }
                return t
            },
            normalizeUrl: function(t) {
                return i.href = t || "", i.href
            },
            isSecureUrl: function(t) {
                return "https://" === this.normalizeUrl(t).substr(0, 8)
            },
            isYandexUrl: function(t) {
                var e = this.normalizeUrl(t);
                return /.*(?:(?:\/\/)|(?:\.))yandex\.(?:com\.)?[a-z]{2,3}(?::\d+)?(?:\/.*)?$/.test(e)
            },
            getCookie: function(t) {
                var e, n = encodeURIComponent(t);
                try {
                    e = document.cookie.split("; ")
                } catch (t) {
                    return null
                }
                for (var r = 0; r < e.length; ++r) {
                    var u = e[r],
                        i = u.indexOf("=");
                    if (u.substr(0, i) === n) return decodeURIComponent(u.substr(i + 1))
                }
                return null
            },
            getDirection: function(t) {
                return this.RTLLangs[t] ? "rtl" : "ltr"
            },
            unescapeHTML: function(t) {
                return t.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'")
            },
            truncateText: function(t, e) {
                if (t.length <= e) return t;
                for (var n = t.slice(0, e), r = 0, u = this.truncationRules[r]; u;) {
                    if (u.test(n)) {
                        t = n.split(u).slice(0, -1).join("");
                        break
                    }
                    u = this.truncationRules[++r]
                }
                return t
            },
            isButtonInput: function(t) {
                return t && "INPUT" === t.nodeName && this.buttonInputTypes[t.type]
            },
            toQueryString: function(t) {
                var e = [];
                if (!t) return "";
                for (var n in t) {
                    var r = t[n];
                    Array.isArray(r) || (r = [r]), n = u.encodeURIComponent(n);
                    for (var i = 0, o = r.length; i < o; i++) e.push(null == r[i] ? n : n + "=" + u.encodeURIComponent(r[i]))
                }
                return e.join("&")
            },
            getBrowserLang: function() {
                var t = u.navigator.language || u.navigator.userLanguage || "";
                return this.normalizeLang(t)
            },
            normalizeLang: function(t) {
                return t ? t.trim().split("-")[0].toLowerCase() : t
            },
            createPlainObj: function(t) {
                var e = Object.create(null);
                return t && Object.keys(t).forEach((function(n) {
                    e[n] = t[n]
                })), e
            },
            normalizeValue: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.replace(/[ \t\u00a0\u2000-\u200a\u3000]+/g, " ");
                return e ? n : n.replace(/\n+/g, " ")
            },
            safeStringifyJSON: function(t) {
                try {
                    return JSON.stringify(t) || ""
                } catch (t) {
                    return ""
                }
            },
            isFirefox: function() {
                return u.navigator.userAgent.includes("Firefox")
            },
            clearNonAlpha: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (!this.isString(t)) return "";
                var n = t.match(r);
                return n ? n.join(e) : ""
            },
            truncateWords: function(t, e) {
                if (!this.isString(t) || t.length <= e) return t;
                var n = 0;
                t = t.slice(0, e + 1);
                for (var r = 0; r < " ;:!?.,。、()[]".length; r++) {
                    var u = t.lastIndexOf(" ;:!?.,。、()[]" [r]);
                    u > n && (n = u)
                }
                return t.slice(0, n)
            },
            countRuAlpha: function(t) {
                var e = t.match(/[а-яё]+/gi);
                return e ? e.join("").length : 0
            },
            isCompletedSentence: function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (!e) return a.has(t[t.length - 1]);
                for (var n = /\s/, r = t.length - 1; r >= 0; r--)
                    if (!n.test(t[r])) return a.has(t[r]);
                return !1
            },
            truncateSentences: function(t) {
                for (var e = 0, n = [], r = 0; r < t.length; r++) a.has(t[r]) && (n.push(t.slice(e, r + 1)), e = r + 1);
                return e <= t.length - 1 && n.push(t.slice(e)), n
            },
            hasClass: function(t, e) {
                return Boolean(t.classList && t.classList.contains(e))
            }
        };
    e.util = s, u.addEventListener("resize", s.debounce((function() {
        s.viewportWidth = u.innerWidth, s.viewportHeight = u.innerHeight
    })))
}, function(t, e, n) {
    t.exports = !n(4)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var r = n(3),
        u = n(69),
        i = n(39),
        o = Object.defineProperty;
    e.f = n(7) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = i(e, !0), r(n), u) try {
            return o(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(45),
        u = {};
    u[n(0)("toStringTag")] = "z", u + "" != "[object z]" && n(11)(Object.prototype, "toString", (function() {
        return "[object " + r(this) + "]"
    }), !0)
}, function(t, e, n) {
    "use strict";
    var r = n(82),
        u = n(77),
        i = n(35),
        o = n(27);
    t.exports = n(54)(Array, "Array", (function(t, e) {
        this._t = o(t), this._i = 0, this._k = e
    }), (function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, u(1)) : u(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(t, e, n) {
    var r = n(1),
        u = n(22),
        i = n(14),
        o = n(33)("src"),
        a = n(104),
        s = ("" + a).split("toString");
    n(24).inspectSource = function(t) {
        return a.call(t)
    }, (t.exports = function(t, e, n, a) {
        var c = "function" == typeof n;
        c && (i(n, "name") || u(n, "name", e)), t[e] !== n && (c && (i(n, o) || u(n, o, t[e] ? "" + t[e] : s.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : u(t, e, n) : (delete t[e], u(t, e, n)))
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && this[o] || a.call(this)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(81)(!0);
    n(54)(String, "String", (function(t) {
        this._t = String(t), this._i = 0
    }), (function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    }))
}, function(t, e, n) {
    for (var r = n(10), u = n(26), i = n(11), o = n(1), a = n(22), s = n(35), c = n(0), l = c("iterator"), f = c("toStringTag"), h = s.Array, p = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, v = u(p), d = 0; d < v.length; d++) {
        var y, g = v[d],
            D = p[g],
            E = o[g],
            b = E && E.prototype;
        if (b && (b[l] || a(b, l, h), b[f] || a(b, f, g), s[g] = h, D))
            for (y in r) b[y] || i(b, y, r[y], !0)
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    var r = n(28);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, e, n) {
    var r = n(5);
    r(r.S, "Object", {
        setPrototypeOf: n(80).set
    })
}, function(t, e, n) {
    var r = n(15),
        u = n(76);
    n(87)("getPrototypeOf", (function() {
        return function(t) {
            return u(r(t))
        }
    }))
}, function(t, e, n) {
    var r = n(5),
        u = n(31),
        i = n(25),
        o = n(3),
        a = n(2),
        s = n(4),
        c = n(112),
        l = (n(1).Reflect || {}).construct,
        f = s((function() {
            function t() {}
            return !(l((function() {}), [], t) instanceof t)
        })),
        h = !s((function() {
            l((function() {}))
        }));
    r(r.S + r.F * (f || h), "Reflect", {
        construct: function(t, e) {
            i(t), o(e);
            var n = arguments.length < 3 ? t : i(arguments[2]);
            if (h && !f) return l(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var r = [null];
                return r.push.apply(r, e), new(c.apply(t, r))
            }
            var s = n.prototype,
                p = u(a(s) ? s : Object.prototype),
                v = Function.apply.call(t, p, e);
            return a(v) ? v : p
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        u = n(14),
        i = n(7),
        o = n(5),
        a = n(11),
        s = n(37).KEY,
        c = n(4),
        l = n(41),
        f = n(36),
        h = n(33),
        p = n(0),
        v = n(92),
        d = n(113),
        y = n(114),
        g = n(93),
        D = n(3),
        E = n(2),
        b = n(15),
        m = n(27),
        A = n(39),
        C = n(34),
        T = n(31),
        F = n(115),
        P = n(57),
        O = n(65),
        S = n(8),
        _ = n(26),
        k = P.f,
        N = S.f,
        x = F.f,
        w = r.Symbol,
        R = r.JSON,
        B = R && R.stringify,
        j = p("_hidden"),
        L = p("toPrimitive"),
        M = {}.propertyIsEnumerable,
        I = l("symbol-registry"),
        V = l("symbols"),
        G = l("op-symbols"),
        U = Object.prototype,
        q = "function" == typeof w && !!O.f,
        H = r.QObject,
        z = !H || !H.prototype || !H.prototype.findChild,
        Y = i && c((function() {
            return 7 != T(N({}, "a", {
                get: function() {
                    return N(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(t, e, n) {
            var r = k(U, e);
            r && delete U[e], N(t, e, n), r && t !== U && N(U, e, r)
        } : N,
        W = function(t) {
            var e = V[t] = T(w.prototype);
            return e._k = t, e
        },
        X = q && "symbol" == typeof w.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof w
        },
        $ = function(t, e, n) {
            return t === U && $(G, e, n), D(t), e = A(e, !0), D(n), u(V, e) ? (n.enumerable ? (u(t, j) && t[j][e] && (t[j][e] = !1), n = T(n, {
                enumerable: C(0, !1)
            })) : (u(t, j) || N(t, j, C(1, {})), t[j][e] = !0), Y(t, e, n)) : N(t, e, n)
        },
        K = function(t, e) {
            D(t);
            for (var n, r = y(e = m(e)), u = 0, i = r.length; i > u;) $(t, n = r[u++], e[n]);
            return t
        },
        J = function(t) {
            var e = M.call(this, t = A(t, !0));
            return !(this === U && u(V, t) && !u(G, t)) && (!(e || !u(this, t) || !u(V, t) || u(this, j) && this[j][t]) || e)
        },
        Q = function(t, e) {
            if (t = m(t), e = A(e, !0), t !== U || !u(V, e) || u(G, e)) {
                var n = k(t, e);
                return !n || !u(V, e) || u(t, j) && t[j][e] || (n.enumerable = !0), n
            }
        },
        Z = function(t) {
            for (var e, n = x(m(t)), r = [], i = 0; n.length > i;) u(V, e = n[i++]) || e == j || e == s || r.push(e);
            return r
        },
        tt = function(t) {
            for (var e, n = t === U, r = x(n ? G : m(t)), i = [], o = 0; r.length > o;) !u(V, e = r[o++]) || n && !u(U, e) || i.push(V[e]);
            return i
        };
    q || (a((w = function() {
        if (this instanceof w) throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === U && e.call(G, n), u(this, j) && u(this[j], t) && (this[j][t] = !1), Y(this, t, C(1, n))
            };
        return i && z && Y(U, t, {
            configurable: !0,
            set: e
        }), W(t)
    }).prototype, "toString", (function() {
        return this._k
    })), P.f = Q, S.f = $, n(58).f = F.f = Z, n(46).f = J, O.f = tt, i && !n(32) && a(U, "propertyIsEnumerable", J, !0), v.f = function(t) {
        return W(p(t))
    }), o(o.G + o.W + o.F * !q, {
        Symbol: w
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) p(et[nt++]);
    for (var rt = _(p.store), ut = 0; rt.length > ut;) d(rt[ut++]);
    o(o.S + o.F * !q, "Symbol", {
        for: function(t) {
            return u(I, t += "") ? I[t] : I[t] = w(t)
        },
        keyFor: function(t) {
            if (!X(t)) throw TypeError(t + " is not a symbol!");
            for (var e in I)
                if (I[e] === t) return e
        },
        useSetter: function() {
            z = !0
        },
        useSimple: function() {
            z = !1
        }
    }), o(o.S + o.F * !q, "Object", {
        create: function(t, e) {
            return void 0 === e ? T(t) : K(T(t), e)
        },
        defineProperty: $,
        defineProperties: K,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: tt
    });
    var it = c((function() {
        O.f(1)
    }));
    o(o.S + o.F * it, "Object", {
        getOwnPropertySymbols: function(t) {
            return O.f(b(t))
        }
    }), R && o(o.S + o.F * (!q || c((function() {
        var t = w();
        return "[null]" != B([t]) || "{}" != B({
            a: t
        }) || "{}" != B(Object(t))
    }))), "JSON", {
        stringify: function(t) {
            for (var e, n, r = [t], u = 1; arguments.length > u;) r.push(arguments[u++]);
            if (n = e = r[1], (E(e) || void 0 !== t) && !X(t)) return g(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !X(e)) return e
            }), r[1] = e, B.apply(R, r)
        }
    }), w.prototype[L] || n(22)(w.prototype, L, w.prototype.valueOf), f(w, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    var r = n(40),
        u = Math.min;
    t.exports = function(t) {
        return t > 0 ? u(r(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    var r = n(8),
        u = n(34);
    t.exports = n(7) ? function(t, e, n) {
        return r.f(t, e, u(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var r = n(25);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, u) {
                    return t.call(e, n, r, u)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    var n = t.exports = {
        version: "2.6.12"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var r = n(70),
        u = n(52);
    t.exports = Object.keys || function(t) {
        return r(t, u)
    }
}, function(t, e, n) {
    var r = n(50),
        u = n(28);
    t.exports = function(t) {
        return r(u(t))
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var r = n(2);
    t.exports = function(t, e) {
        if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        u = n(53),
        i = n(20),
        o = n(72),
        a = n(21),
        s = [].slice;
    r(r.P + r.F * n(4)((function() {
        u && s.call(u)
    })), "Array", {
        slice: function(t, e) {
            var n = a(this.length),
                r = i(this);
            if (e = void 0 === e ? n : e, "Array" == r) return s.call(this, t, e);
            for (var u = o(t, n), c = o(e, n), l = a(c - u), f = new Array(l), h = 0; h < l; h++) f[h] = "String" == r ? this.charAt(u + h) : this[u + h];
            return f
        }
    })
}, function(t, e, n) {
    var r = n(3),
        u = n(103),
        i = n(52),
        o = n(51)("IE_PROTO"),
        a = function() {},
        s = function() {
            var t, e = n(49)("iframe"),
                r = i.length;
            for (e.style.display = "none", n(53).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s.prototype[i[r]];
            return s()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (a.prototype = r(t), n = new a, a.prototype = null, n[o] = t) : n = s(), void 0 === e ? n : u(n, e)
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var r = n(8).f,
        u = n(14),
        i = n(0)("toStringTag");
    t.exports = function(t, e, n) {
        t && !u(t = n ? t : t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var r = n(33)("meta"),
        u = n(2),
        i = n(14),
        o = n(8).f,
        a = 0,
        s = Object.isExtensible || function() {
            return !0
        },
        c = !n(4)((function() {
            return s(Object.preventExtensions({}))
        })),
        l = function(t) {
            o(t, r, {
                value: {
                    i: "O" + ++a,
                    w: {}
                }
            })
        },
        f = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, e) {
                if (!u(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!s(t)) return "F";
                    if (!e) return "E";
                    l(t)
                }
                return t[r].i
            },
            getWeak: function(t, e) {
                if (!i(t, r)) {
                    if (!s(t)) return !0;
                    if (!e) return !1;
                    l(t)
                }
                return t[r].w
            },
            onFreeze: function(t) {
                return c && f.NEED && s(t) && !i(t, r) && l(t), t
            }
        }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Emitter = void 0, n(30);
    var r = n(6);

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var i = function() {
        function t() {
            var e, n;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), n = {}, (e = "handlers") in this ? Object.defineProperty(this, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : this[e] = n
        }
        var e, n;
        return e = t, (n = [{
            key: "on",
            value: function(t, e) {
                return t && r.util.isFunc(e) ? (this.handlers[t] || (this.handlers[t] = []), this.handlers[t].push(e), this) : this
            }
        }, {
            key: "off",
            value: function(t, e) {
                var n = arguments.length,
                    u = this.handlers[t];
                if (!u) return n || (this.handlers = r.util.createPlainObj()), this;
                if (1 === n) return delete this.handlers[t], this;
                for (var i = 0, o = u.length; i < o; i++)
                    if (u[i] === e) {
                        u.splice(i, 1);
                        break
                    }
                return this
            }
        }, {
            key: "emit",
            value: function(t) {
                var e = this.handlers[t];
                if (e) {
                    for (var n = e.slice(), r = arguments.length, u = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) u[i - 1] = arguments[i];
                    for (var o = 0, a = n.length; o < a; o++) n[o].apply(this, u)
                }
                return this
            }
        }]) && u(e.prototype, n), t
    }();
    e.Emitter = i
}, function(t, e, n) {
    var r = n(2);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, u;
        if (e && "function" == typeof(n = t.toString) && !r(u = n.call(t))) return u;
        if ("function" == typeof(n = t.valueOf) && !r(u = n.call(t))) return u;
        if (!e && "function" == typeof(n = t.toString) && !r(u = n.call(t))) return u;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function(t, e, n) {
    var r = n(24),
        u = n(1),
        i = u["__core-js_shared__"] || (u["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: r.version,
        mode: n(32) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e, n) {
    var r = n(11);
    t.exports = function(t, e, n) {
        for (var u in e) r(t, u, e[u], n);
        return t
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var r = n(23),
        u = n(73),
        i = n(74),
        o = n(3),
        a = n(21),
        s = n(75),
        c = {},
        l = {};
    (e = t.exports = function(t, e, n, f, h) {
        var p, v, d, y, g = h ? function() {
                return t
            } : s(t),
            D = r(n, f, e ? 2 : 1),
            E = 0;
        if ("function" != typeof g) throw TypeError(t + " is not iterable!");
        if (i(g)) {
            for (p = a(t.length); p > E; E++)
                if ((y = e ? D(o(v = t[E])[0], v[1]) : D(t[E])) === c || y === l) return y
        } else
            for (d = g.call(t); !(v = d.next()).done;)
                if ((y = u(d, D, v.value, e)) === c || y === l) return y
    }).BREAK = c, e.RETURN = l
}, function(t, e, n) {
    var r = n(20),
        u = n(0)("toStringTag"),
        i = "Arguments" == r(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, n, o;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), u)) ? n : i ? r(e) : "Object" == (o = r(e)) && "function" == typeof e.callee ? "Arguments" : o
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    "use strict";
    var r = n(84),
        u = n(3),
        i = n(85),
        o = n(60),
        a = n(21),
        s = n(61),
        c = n(63),
        l = n(4),
        f = Math.min,
        h = [].push,
        p = "length",
        v = !l((function() {
            RegExp(4294967295, "y")
        }));
    n(62)("split", 2, (function(t, e, n, l) {
        var d;
        return d = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function(t, e) {
            var u = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!r(t)) return n.call(u, t, e);
            for (var i, o, a, s = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, v = void 0 === e ? 4294967295 : e >>> 0, d = new RegExp(t.source, l + "g");
                (i = c.call(d, u)) && !((o = d.lastIndex) > f && (s.push(u.slice(f, i.index)), i[p] > 1 && i.index < u[p] && h.apply(s, i.slice(1)), a = i[0][p], f = o, s[p] >= v));) d.lastIndex === i.index && d.lastIndex++;
            return f === u[p] ? !a && d.test("") || s.push("") : s.push(u.slice(f)), s[p] > v ? s.slice(0, v) : s
        } : "0".split(void 0, 0)[p] ? function(t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function(n, r) {
            var u = t(this),
                i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, u, r) : d.call(String(u), n, r)
        }, function(t, e) {
            var r = l(d, t, this, e, d !== n);
            if (r.done) return r.value;
            var c = u(t),
                h = String(this),
                p = i(c, RegExp),
                y = c.unicode,
                g = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (v ? "y" : "g"),
                D = new p(v ? c : "^(?:" + c.source + ")", g),
                E = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === E) return [];
            if (0 === h.length) return null === s(D, h) ? [h] : [];
            for (var b = 0, m = 0, A = []; m < h.length;) {
                D.lastIndex = v ? m : 0;
                var C, T = s(D, v ? h : h.slice(m));
                if (null === T || (C = f(a(D.lastIndex + (v ? 0 : m)), h.length)) === b) m = o(h, m, y);
                else {
                    if (A.push(h.slice(b, m)), A.length === E) return A;
                    for (var F = 1; F <= T.length - 1; F++)
                        if (A.push(T[F]), A.length === E) return A;
                    m = b = C
                }
            }
            return A.push(h.slice(b)), A
        }]
    }))
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function i(t, e) {
        return (i = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function o(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = c(t);
            if (e) {
                var u = c(this).constructor;
                n = Reflect.construct(r, arguments, u)
            } else n = r.apply(this, arguments);
            return a(this, n)
        }
    }

    function a(t, e) {
        if (e && ("object" === r(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return s(t)
    }

    function s(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(16), n(17), n(18), n(19), n(12), n(9), n(10), n(13), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PageSpan = void 0;
    var l = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && i(t, e)
        }(a, t);
        var e, n, r = o(a);

        function a(t, e) {
            var n, u, i, o;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, a), o = void 0, (i = "node") in (u = s(n = r.call(this))) ? Object.defineProperty(u, i, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : u[i] = o, n.node = t, e && n.setParams(e), n
        }
        return e = a, (n = [{
            key: "getNode",
            value: function() {
                return this.node
            }
        }, {
            key: "getValue",
            value: function() {
                return this.node && this.node.parentNode ? this.node.nodeValue : ""
            }
        }, {
            key: "setValue",
            value: function(t) {
                this.node.parentNode && (this.node.nodeValue = t)
            }
        }, {
            key: "setWrapperAttribute",
            value: function(t, e) {
                var n = this.getParam("wrapper");
                n && n.setAttribute && n.setAttribute(t, String(e))
            }
        }]) && u(e.prototype, n), a
    }(n(67).Parameterized);
    e.PageSpan = l
}, function(t, e, n) {
    var r = n(2),
        u = n(1).document,
        i = r(u) && r(u.createElement);
    t.exports = function(t) {
        return i ? u.createElement(t) : {}
    }
}, function(t, e, n) {
    var r = n(20);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function(t, e, n) {
    var r = n(41)("keys"),
        u = n(33);
    t.exports = function(t) {
        return r[t] || (r[t] = u(t))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    var r = n(1).document;
    t.exports = r && r.documentElement
}, function(t, e, n) {
    "use strict";
    var r = n(32),
        u = n(5),
        i = n(11),
        o = n(22),
        a = n(35),
        s = n(105),
        c = n(36),
        l = n(76),
        f = n(0)("iterator"),
        h = !([].keys && "next" in [].keys()),
        p = function() {
            return this
        };
    t.exports = function(t, e, n, v, d, y, g) {
        s(n, e, v);
        var D, E, b, m = function(t) {
                if (!h && t in F) return F[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            A = e + " Iterator",
            C = "values" == d,
            T = !1,
            F = t.prototype,
            P = F[f] || F["@@iterator"] || d && F[d],
            O = P || m(d),
            S = d ? C ? m("entries") : O : void 0,
            _ = "Array" == e && F.entries || P;
        if (_ && (b = l(_.call(new t))) !== Object.prototype && b.next && (c(b, A, !0), r || "function" == typeof b[f] || o(b, f, p)), C && P && "values" !== P.name && (T = !0, O = function() {
                return P.call(this)
            }), r && !g || !h && !T && F[f] || o(F, f, O), a[e] = O, a[A] = p, d)
            if (D = {
                    values: C ? O : m("values"),
                    keys: y ? O : m("keys"),
                    entries: S
                }, g)
                for (E in D) E in F || i(F, E, D[E]);
            else u(u.P + u.F * (h || T), e, D);
        return D
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        u = n(5),
        i = n(11),
        o = n(42),
        a = n(37),
        s = n(44),
        c = n(43),
        l = n(2),
        f = n(4),
        h = n(56),
        p = n(36),
        v = n(79);
    t.exports = function(t, e, n, d, y, g) {
        var D = r[t],
            E = D,
            b = y ? "set" : "add",
            m = E && E.prototype,
            A = {},
            C = function(t) {
                var e = m[t];
                i(m, t, "delete" == t || "has" == t ? function(t) {
                    return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return g && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            };
        if ("function" == typeof E && (g || m.forEach && !f((function() {
                (new E).entries().next()
            })))) {
            var T = new E,
                F = T[b](g ? {} : -0, 1) != T,
                P = f((function() {
                    T.has(1)
                })),
                O = h((function(t) {
                    new E(t)
                })),
                S = !g && f((function() {
                    for (var t = new E, e = 5; e--;) t[b](e, e);
                    return !t.has(-0)
                }));
            O || ((E = e((function(e, n) {
                c(e, E, t);
                var r = v(new D, e, E);
                return null != n && s(n, y, r[b], r), r
            }))).prototype = m, m.constructor = E), (P || S) && (C("delete"), C("has"), y && C("get")), (S || F) && C(b), g && m.clear && delete m.clear
        } else E = d.getConstructor(e, t, y, b), o(E.prototype, n), a.NEED = !0;
        return p(E, t), A[t] = E, u(u.G + u.W + u.F * (E != D), A), g || d.setStrong(E, t, y), E
    }
}, function(t, e, n) {
    var r = n(0)("iterator"),
        u = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            u = !0
        }, Array.from(i, (function() {
            throw 2
        }))
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !u) return !1;
        var n = !1;
        try {
            var i = [7],
                o = i[r]();
            o.next = function() {
                return {
                    done: n = !0
                }
            }, i[r] = function() {
                return o
            }, t(i)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    var r = n(46),
        u = n(34),
        i = n(27),
        o = n(39),
        a = n(14),
        s = n(69),
        c = Object.getOwnPropertyDescriptor;
    e.f = n(7) ? c : function(t, e) {
        if (t = i(t), e = o(e, !0), s) try {
            return c(t, e)
        } catch (t) {}
        if (a(t, e)) return u(!r.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var r = n(70),
        u = n(52).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, u)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        u = n(15),
        i = n(21),
        o = n(40),
        a = n(60),
        s = n(61),
        c = Math.max,
        l = Math.min,
        f = Math.floor,
        h = /\$([$&`']|\d\d?|<[^>]*>)/g,
        p = /\$([$&`']|\d\d?)/g;
    n(62)("replace", 2, (function(t, e, n, v) {
        return [function(r, u) {
            var i = t(this),
                o = null == r ? void 0 : r[e];
            return void 0 !== o ? o.call(r, i, u) : n.call(String(i), r, u)
        }, function(t, e) {
            var u = v(n, t, this, e);
            if (u.done) return u.value;
            var f = r(t),
                h = String(this),
                p = "function" == typeof e;
            p || (e = String(e));
            var y = f.global;
            if (y) {
                var g = f.unicode;
                f.lastIndex = 0
            }
            for (var D = [];;) {
                var E = s(f, h);
                if (null === E) break;
                if (D.push(E), !y) break;
                "" === String(E[0]) && (f.lastIndex = a(h, i(f.lastIndex), g))
            }
            for (var b, m = "", A = 0, C = 0; C < D.length; C++) {
                E = D[C];
                for (var T = String(E[0]), F = c(l(o(E.index), h.length), 0), P = [], O = 1; O < E.length; O++) P.push(void 0 === (b = E[O]) ? b : String(b));
                var S = E.groups;
                if (p) {
                    var _ = [T].concat(P, F, h);
                    void 0 !== S && _.push(S);
                    var k = String(e.apply(void 0, _))
                } else k = d(T, h, F, P, S, e);
                F >= A && (m += h.slice(A, F) + k, A = F + T.length)
            }
            return m + h.slice(A)
        }];

        function d(t, e, r, i, o, a) {
            var s = r + t.length,
                c = i.length,
                l = p;
            return void 0 !== o && (o = u(o), l = h), n.call(a, l, (function(n, u) {
                var a;
                switch (u.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, r);
                    case "'":
                        return e.slice(s);
                    case "<":
                        a = o[u.slice(1, -1)];
                        break;
                    default:
                        var l = +u;
                        if (0 === l) return n;
                        if (l > c) {
                            var h = f(l / 10);
                            return 0 === h ? n : h <= c ? void 0 === i[h - 1] ? u.charAt(1) : i[h - 1] + u.charAt(1) : n
                        }
                        a = i[l - 1]
                }
                return void 0 === a ? "" : a
            }))
        }
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(81)(!0);
    t.exports = function(t, e, n) {
        return e + (n ? r(t, e).length : 1)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(45),
        u = RegExp.prototype.exec;
    t.exports = function(t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var i = n.call(t, e);
            if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return u.call(t, e)
    }
}, function(t, e, n) {
    "use strict";
    n(108);
    var r = n(11),
        u = n(22),
        i = n(4),
        o = n(28),
        a = n(0),
        s = n(63),
        c = a("species"),
        l = !i((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        f = function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 === n.length && "a" === n[0] && "b" === n[1]
        }();
    t.exports = function(t, e, n) {
        var h = a(t),
            p = !i((function() {
                var e = {};
                return e[h] = function() {
                    return 7
                }, 7 != "" [t](e)
            })),
            v = p ? !i((function() {
                var e = !1,
                    n = /a/;
                return n.exec = function() {
                    return e = !0, null
                }, "split" === t && (n.constructor = {}, n.constructor[c] = function() {
                    return n
                }), n[h](""), !e
            })) : void 0;
        if (!p || !v || "replace" === t && !l || "split" === t && !f) {
            var d = /./ [h],
                y = n(o, h, "" [t], (function(t, e, n, r, u) {
                    return e.exec === s ? p && !u ? {
                        done: !0,
                        value: d.call(e, n, r)
                    } : {
                        done: !0,
                        value: t.call(n, e, r)
                    } : {
                        done: !1
                    }
                })),
                g = y[0],
                D = y[1];
            r(String.prototype, t, g), u(RegExp.prototype, h, 2 == e ? function(t, e) {
                return D.call(t, this, e)
            } : function(t) {
                return D.call(t, this)
            })
        }
    }
}, function(t, e, n) {
    "use strict";
    var r, u, i = n(64),
        o = RegExp.prototype.exec,
        a = String.prototype.replace,
        s = o,
        c = (r = /a/, u = /b*/g, o.call(r, "a"), o.call(u, "a"), 0 !== r.lastIndex || 0 !== u.lastIndex),
        l = void 0 !== /()??/.exec("")[1];
    (c || l) && (s = function(t) {
        var e, n, r, u, s = this;
        return l && (n = new RegExp("^" + s.source + "$(?!\\s)", i.call(s))), c && (e = s.lastIndex), r = o.call(s, t), c && r && (s.lastIndex = s.global ? r.index + r[0].length : e), l && r && r.length > 1 && a.call(r[0], n, (function() {
            for (u = 1; u < arguments.length - 2; u++) void 0 === arguments[u] && (r[u] = void 0)
        })), r
    }), t.exports = s
}, function(t, e, n) {
    "use strict";
    var r = n(3);
    t.exports = function() {
        var t = r(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var r = n(23),
        u = n(50),
        i = n(15),
        o = n(21),
        a = n(122);
    t.exports = function(t, e) {
        var n = 1 == t,
            s = 2 == t,
            c = 3 == t,
            l = 4 == t,
            f = 6 == t,
            h = 5 == t || f,
            p = e || a;
        return function(e, a, v) {
            for (var d, y, g = i(e), D = u(g), E = r(a, v, 3), b = o(D.length), m = 0, A = n ? p(e, b) : s ? p(e, 0) : void 0; b > m; m++)
                if ((h || m in D) && (y = E(d = D[m], m, g), t))
                    if (n) A[m] = y;
                    else if (y) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return d;
                case 6:
                    return m;
                case 2:
                    A.push(d)
            } else if (l) return !1;
            return f ? -1 : c || l ? l : A
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Parameterized = void 0;
    var r = n(6);

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var i = function() {
        function t() {
            var e, n;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), n = void 0, (e = "params") in this ? Object.defineProperty(this, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : this[e] = n, this.setParams({})
        }
        var e, n;
        return e = t, (n = [{
            key: "getParam",
            value: function(t) {
                return this.params[t]
            }
        }, {
            key: "setParam",
            value: function(t, e) {
                this.params[t] = e
            }
        }, {
            key: "setParams",
            value: function(t) {
                this.params = r.util.createPlainObj(t)
            }
        }]) && u(e.prototype, n), t
    }();
    e.Parameterized = i
}, function(t, e, n) {
    "use strict";
    var r = n(8).f,
        u = n(31),
        i = n(42),
        o = n(23),
        a = n(43),
        s = n(44),
        c = n(54),
        l = n(77),
        f = n(78),
        h = n(7),
        p = n(37).fastKey,
        v = n(29),
        d = h ? "_s" : "size",
        y = function(t, e) {
            var n, r = p(e);
            if ("F" !== r) return t._i[r];
            for (n = t._f; n; n = n.n)
                if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function(t, e, n, c) {
            var l = t((function(t, r) {
                a(t, l, e, "_i"), t._t = e, t._i = u(null), t._f = void 0, t._l = void 0, t[d] = 0, null != r && s(r, n, t[c], t)
            }));
            return i(l.prototype, {
                clear: function() {
                    for (var t = v(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                    t._f = t._l = void 0, t[d] = 0
                },
                delete: function(t) {
                    var n = v(this, e),
                        r = y(n, t);
                    if (r) {
                        var u = r.n,
                            i = r.p;
                        delete n._i[r.i], r.r = !0, i && (i.n = u), u && (u.p = i), n._f == r && (n._f = u), n._l == r && (n._l = i), n[d]--
                    }
                    return !!r
                },
                forEach: function(t) {
                    v(this, e);
                    for (var n, r = o(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (r(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(t) {
                    return !!y(v(this, e), t)
                }
            }), h && r(l.prototype, "size", {
                get: function() {
                    return v(this, e)[d]
                }
            }), l
        },
        def: function(t, e, n) {
            var r, u, i = y(t, e);
            return i ? i.v = n : (t._l = i = {
                i: u = p(e, !0),
                k: e,
                v: n,
                p: r = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = i), r && (r.n = i), t[d]++, "F" !== u && (t._i[u] = i)), t
        },
        getEntry: y,
        setStrong: function(t, e, n) {
            c(t, e, (function(t, n) {
                this._t = v(t, e), this._k = n, this._l = void 0
            }), (function() {
                for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                return this._t && (this._l = e = e ? e.n : this._t._f) ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, l(1))
            }), n ? "entries" : "values", !n, !0), f(e)
        }
    }
}, function(t, e, n) {
    t.exports = !n(7) && !n(4)((function() {
        return 7 != Object.defineProperty(n(49)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var r = n(14),
        u = n(27),
        i = n(71)(!1),
        o = n(51)("IE_PROTO");
    t.exports = function(t, e) {
        var n, a = u(t),
            s = 0,
            c = [];
        for (n in a) n != o && r(a, n) && c.push(n);
        for (; e.length > s;) r(a, n = e[s++]) && (~i(c, n) || c.push(n));
        return c
    }
}, function(t, e, n) {
    var r = n(27),
        u = n(21),
        i = n(72);
    t.exports = function(t) {
        return function(e, n, o) {
            var a, s = r(e),
                c = u(s.length),
                l = i(o, c);
            if (t && n != n) {
                for (; c > l;)
                    if ((a = s[l++]) != a) return !0
            } else
                for (; c > l; l++)
                    if ((t || l in s) && s[l] === n) return t || l || 0;
            return !t && -1
        }
    }
}, function(t, e, n) {
    var r = n(40),
        u = Math.max,
        i = Math.min;
    t.exports = function(t, e) {
        return (t = r(t)) < 0 ? u(t + e, 0) : i(t, e)
    }
}, function(t, e, n) {
    var r = n(3);
    t.exports = function(t, e, n, u) {
        try {
            return u ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)), e
        }
    }
}, function(t, e, n) {
    var r = n(35),
        u = n(0)("iterator"),
        i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[u] === t)
    }
}, function(t, e, n) {
    var r = n(45),
        u = n(0)("iterator"),
        i = n(35);
    t.exports = n(24).getIteratorMethod = function(t) {
        if (null != t) return t[u] || t["@@iterator"] || i[r(t)]
    }
}, function(t, e, n) {
    var r = n(14),
        u = n(15),
        i = n(51)("IE_PROTO"),
        o = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = u(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        u = n(8),
        i = n(7),
        o = n(0)("species");
    t.exports = function(t) {
        var e = r[t];
        i && e && !e[o] && u.f(e, o, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    var r = n(2),
        u = n(80).set;
    t.exports = function(t, e, n) {
        var i, o = e.constructor;
        return o !== n && "function" == typeof o && (i = o.prototype) !== n.prototype && r(i) && u && u(t, i), t
    }
}, function(t, e, n) {
    var r = n(2),
        u = n(3),
        i = function(t, e) {
            if (u(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
            try {
                (r = n(23)(Function.call, n(57).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return i(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0),
        check: i
    }
}, function(t, e, n) {
    var r = n(40),
        u = n(28);
    t.exports = function(t) {
        return function(e, n) {
            var i, o, a = String(u(e)),
                s = r(n),
                c = a.length;
            return s < 0 || s >= c ? t ? "" : void 0 : (i = a.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === c || (o = a.charCodeAt(s + 1)) < 56320 || o > 57343 ? t ? a.charAt(s) : i : t ? a.slice(s, s + 2) : o - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function(t, e, n) {
    var r = n(0)("unscopables"),
        u = Array.prototype;
    null == u[r] && n(22)(u, r, {}), t.exports = function(t) {
        u[r][t] = !0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        u = n(14),
        i = n(20),
        o = n(79),
        a = n(39),
        s = n(4),
        c = n(58).f,
        l = n(57).f,
        f = n(8).f,
        h = n(106).trim,
        p = r.Number,
        v = p,
        d = p.prototype,
        y = "Number" == i(n(31)(d)),
        g = "trim" in String.prototype,
        D = function(t) {
            var e = a(t, !1);
            if ("string" == typeof e && e.length > 2) {
                var n, r, u, i = (e = g ? e.trim() : h(e, 3)).charCodeAt(0);
                if (43 === i || 45 === i) {
                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === i) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, u = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, u = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var o, s = e.slice(2), c = 0, l = s.length; c < l; c++)
                        if ((o = s.charCodeAt(c)) < 48 || o > u) return NaN;
                    return parseInt(s, r)
                }
            }
            return +e
        };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function(t) {
            var e = arguments.length < 1 ? 0 : t,
                n = this;
            return n instanceof p && (y ? s((function() {
                d.valueOf.call(n)
            })) : "Number" != i(n)) ? o(new v(D(e)), n, p) : D(e)
        };
        for (var E, b = n(7) ? c(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), m = 0; b.length > m; m++) u(v, E = b[m]) && !u(p, E) && f(p, E, l(v, E));
        p.prototype = d, d.constructor = p, n(11)(r, "Number", p)
    }
}, function(t, e, n) {
    var r = n(2),
        u = n(20),
        i = n(0)("match");
    t.exports = function(t) {
        var e;
        return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == u(t))
    }
}, function(t, e, n) {
    var r = n(3),
        u = n(25),
        i = n(0)("species");
    t.exports = function(t, e) {
        var n, o = r(t).constructor;
        return void 0 === o || null == (n = r(o)[i]) ? e : u(n)
    }
}, function(t, e, n) {
    var r = n(15),
        u = n(26);
    n(87)("keys", (function() {
        return function(t) {
            return u(r(t))
        }
    }))
}, function(t, e, n) {
    var r = n(5),
        u = n(24),
        i = n(4);
    t.exports = function(t, e) {
        var n = (u.Object || {})[t] || Object[t],
            o = {};
        o[t] = e(n), r(r.S + r.F * i((function() {
            n(1)
        })), "Object", o)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        u = n(109);
    r(r.P + r.F * n(110)("includes"), "String", {
        includes: function(t) {
            return !!~u(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        u = n(71)(!0);
    r(r.P, "Array", {
        includes: function(t) {
            return u(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(82)("includes")
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    n(16), n(17), n(18), n(19), n(12), n(9), n(10), n(13), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Request = void 0;
    var u = n(6);

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function s(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = f(t);
            if (e) {
                var u = f(this).constructor;
                n = Reflect.construct(r, arguments, u)
            } else n = r.apply(this, arguments);
            return c(this, n)
        }
    }

    function c(t, e) {
        if (e && ("object" === r(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return l(t)
    }

    function l(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function h(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && a(t, e)
        }(f, t);
        var e, n, r, c = s(f);

        function f(t) {
            var e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return i(this, f), h(l(e = c.call(this)), "headers", void 0), h(l(e), "url", void 0), h(l(e), "useSeparateXhrEvents", void 0), h(l(e), "data", void 0), h(l(e), "request", void 0), h(l(e), "method", void 0), h(l(e), "timeout", void 0), h(l(e), "params", void 0), e.url = t, e.data = null, e.headers = u.util.createPlainObj(), e.timeout = f.DEFAULT_TIMEOUT, e.method = f.METHOD_GET, e.useSeparateXhrEvents = n, e
        }
        return e = f, r = [{
            key: "serializeData",
            value: function(t, e) {
                switch (e) {
                    case f.CONTENT_TYPE_JSON:
                        return JSON.stringify(t);
                    default:
                        return t
                }
            }
        }], (n = [{
            key: "send",
            value: function() {
                var t, e = f.serializeData(this.data, this.getType()),
                    n = this,
                    r = this.request = new XMLHttpRequest;
                for (t in this.useSeparateXhrEvents ? (r.addEventListener(f.EVENT_LOAD, this, !1), r.addEventListener(f.EVENT_ERROR, this, !1), r.addEventListener(f.EVENT_TIMEOUT, this, !1)) : r.onreadystatechange = function(t) {
                        var e = t || {
                            target: r,
                            type: "XMLHttpRequest"
                        };
                        4 === r.readyState && n.handleEvent(e)
                    }, r.open(this.method, this.buildUri()), this.headers) r.setRequestHeader(t, this.headers[t]);
                r.timeout = this.timeout, r.responseType = f.RESPONSE_TYPE_JSON, r.send(e)
            }
        }, {
            key: "abort",
            value: function() {
                this.request && this.request.abort(), this.destroy()
            }
        }, {
            key: "destroy",
            value: function() {
                this.off();
                var t = this.request;
                t && (this.useSeparateXhrEvents ? (t.removeEventListener(f.EVENT_LOAD, this, !1), t.removeEventListener(f.EVENT_ERROR, this, !1), t.removeEventListener(f.EVENT_TIMEOUT, this, !1)) : t.onreadystatechange = null, this.request = null)
            }
        }, {
            key: "getType",
            value: function() {
                return this.headers[f.HEADER_CONTENT_TYPE]
            }
        }, {
            key: "setType",
            value: function(t) {
                return this.setHeader(f.HEADER_CONTENT_TYPE, t)
            }
        }, {
            key: "setHeader",
            value: function(t, e) {
                return this.headers[t] = e, this
            }
        }, {
            key: "setData",
            value: function(t) {
                return this.data = t, this
            }
        }, {
            key: "setMethod",
            value: function(t) {
                return this.method = t, this
            }
        }, {
            key: "setParams",
            value: function(t) {
                return this.params = u.util.createPlainObj(t), this
            }
        }, {
            key: "setTimeout",
            value: function(t) {
                return this.timeout = u.util.toNum(t), this
            }
        }, {
            key: "handleEvent",
            value: function(t) {
                var e, n, r = t.target;
                if (r.response ? (e = r.response, n = f.EVENT_RESPONSE) : (e = new Error(t.type), n = f.EVENT_ERROR), n === f.EVENT_RESPONSE && r.responseType === f.RESPONSE_TYPE_TEXT) try {
                    e = JSON.parse(r.response)
                } catch (t) {
                    e = new Error(t.message), n = f.EVENT_ERROR
                }
                this.emit(n, e).destroy()
            }
        }, {
            key: "buildUri",
            value: function() {
                var t = this.url,
                    e = this.params;
                if (e && (t += t.indexOf("?") < 0 ? "?" : "&", t += u.util.toQueryString(e)), u.util.isYandexUrl(t) && u.util.isSecureUrl(t)) {
                    var n = u.util.getUserIdData();
                    t += t.indexOf("?") < 0 ? "?" : "&", t += u.util.toQueryString(n)
                }
                return t
            }
        }]) && o(e.prototype, n), r && o(e, r), f
    }(n(38).Emitter);
    e.Request = p, h(p, "METHOD_GET", "GET"), h(p, "METHOD_POST", "POST"), h(p, "DEFAULT_TIMEOUT", 5e3), h(p, "HEADER_CONTENT_TYPE", "Content-Type"), h(p, "CONTENT_TYPE_JSON", "application/json"), h(p, "RESPONSE_TYPE_JSON", "json"), h(p, "RESPONSE_TYPE_TEXT", "text"), h(p, "EVENT_LOAD", "load"), h(p, "EVENT_ERROR", "error"), h(p, "EVENT_TIMEOUT", "timeout"), h(p, "EVENT_RESPONSE", "response")
}, function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    e.f = n(0)
}, function(t, e, n) {
    var r = n(20);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, e, n) {
    var r = n(8).f,
        u = Function.prototype,
        i = /^\s*function ([^ (]*)/;
    "name" in u || n(7) && r(u, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(i)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(4);
    t.exports = function(t, e) {
        return !!t && r((function() {
            e ? t.call(null, (function() {}), 1) : t.call(null)
        }))
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    n(16), n(17), n(18), n(19), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PageModel = void 0, n(47), n(30), n(121), n(12), n(9), n(10), n(13), n(59), n(94);
    var u = n(6),
        i = n(67),
        o = n(97),
        a = n(48),
        s = n(127),
        c = n(128);

    function l(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function f(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function h(t, e) {
        return (h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function p(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = y(t);
            if (e) {
                var u = y(this).constructor;
                n = Reflect.construct(r, arguments, u)
            } else n = r.apply(this, arguments);
            return v(this, n)
        }
    }

    function v(t, e) {
        if (e && ("object" === r(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return d(t)
    }

    function d(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function y(t) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function g(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var D = window,
        E = document,
        b = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && h(t, e)
            }(v, t);
            var e, n, r, i = p(v);

            function v() {
                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return l(this, v), g(d(t = i.call(this)), "filters", void 0), g(d(t), "element", void 0), g(d(t), "highAccuracy", void 0), g(d(t), "fixlist", void 0), g(d(t), "chunks", void 0), g(d(t), "currentChunk", void 0), g(d(t), "processedElements", void 0), t.filters = e.filters || [], t.element = e.element || E.documentElement, t.highAccuracy = Boolean(e.highAccuracy), t.fixlist = new c.PageModelFixlist, t.reset(), t
            }
            return e = v, r = [{
                key: "isValidNodeName",
                value: function(t) {
                    if (!t) return !1;
                    var e = t.toUpperCase();
                    return !this.SERVICE_TAGS[e] && !this.INVALID_TAGS[e] && !this.NOT_TRANSLATABLE_TAGS[e]
                }
            }, {
                key: "isInlineNodeName",
                value: function(t) {
                    return !!t && t.toUpperCase() in this.INLINE_TAGS
                }
            }, {
                key: "isLinkNodeName",
                value: function(t) {
                    return !!t && t.toUpperCase() in this.LINK_TAGS
                }
            }, {
                key: "isTranslatableElement",
                value: function(t) {
                    for (; t && t.nodeType === v.nodeTypes.ELEMENT_NODE;) {
                        if (!this.isValidNodeName(t.nodeName)) return !1;
                        if (t.hasAttribute(v.nodeAttributes.TRANSLATE)) return "no" !== t.getAttribute(v.nodeAttributes.TRANSLATE);
                        t = t.parentNode
                    }
                    return !0
                }
            }, {
                key: "getInlineElementNodeName",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "i",
                        n = t && t.nodeName;
                    return this.isInlineNodeName(n) ? n.toLowerCase() : e
                }
            }, {
                key: "shouldBrBreakChunk",
                value: function(t) {
                    for (var e = t.nextSibling; e && !e.textContent.trim();) {
                        if ("BR" === e.nodeName) return !0;
                        e = e.nextSibling
                    }
                    for (var n = t.previousSibling; n && !n.textContent.trim();) n = n.previousSibling;
                    return !(!e || !n) && e.nodeName !== n.nodeName
                }
            }, {
                key: "isNodeOfMenuList",
                value: function(t) {
                    for (var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4, r = this.isLinkNodeName(t.nodeName), u = t.parentNode; u && n--;) {
                        if (!this.isValidNodeName(u.nodeName)) return !1;
                        if (!this.isInlineNodeName(u.nodeName)) {
                            e = u;
                            break
                        }
                        this.isLinkNodeName(u.nodeName) && (r = !0), u = u.parentNode
                    }
                    return !(!e || !r) && this.isMenuList(e)
                }
            }, {
                key: "isMenuList",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .2;
                    if (this.menuListCache = this.menuListCache || new WeakMap, this.menuListCache.has(t)) return this.menuListCache.get(t);
                    if (!t || !t.getElementsByTagName) return !1;
                    var n = u.util.slice(t.getElementsByTagName("a"));
                    if (n.length < 2) return this.menuListCache.set(t, !1), !1;
                    var r = t.innerText,
                        i = 0;
                    n.forEach((function(t) {
                        var e = t.innerText;
                        r = r.replace(e, ""), i += e.trim().length
                    }));
                    var o = u.util.clearNonAlpha(r, " "),
                        a = o.length / (i + o.length),
                        s = a <= e;
                    return this.menuListCache.set(t, s), s
                }
            }, {
                key: "changeElementDirAndAlign",
                value: function(t, e, n) {
                    D.setTimeout((function() {
                        var r = u.util.getStyle(t);
                        r.direction !== e && (t.style.direction = e), r.textAlign !== n && "center" !== r.textAlign && (t.style.textAlign = n)
                    }), 0)
                }
            }, {
                key: "getDocumentContextTitle",
                value: function() {
                    return u.util.truncateWords(document.title, 320)
                }
            }], (n = [{
                key: "reset",
                value: function() {
                    this.chunks = [], this.currentChunk = new o.PageChunk, this.processedElements = []
                }
            }, {
                key: "update",
                value: function() {
                    var t, e, n, r = this.filters,
                        u = this.getChunks();
                    for (this.reset(), this.parseNode(this.element), n = this.getChunks(), t = 0, e = r.length; t < e; t++) n = r[t](n, u) || [];
                    this.chunks = n
                }
            }, {
                key: "getDir",
                value: function() {
                    var t = this.element;
                    return t.dir || u.util.getStyle(t).direction
                }
            }, {
                key: "getLang",
                value: function() {
                    return this.element.lang.split("-")[0]
                }
            }, {
                key: "setLang",
                value: function(t, e) {
                    for (var n = u.util.getDirection(t), r = "ltr" === n ? "left" : "right", i = this.processedElements, o = 0, a = i.length; o < a; o++) {
                        var s = i[o];
                        s.lang && s.lang !== t && (s.lang = t), e && !v.SERVICE_TAGS[s.nodeName] && v.changeElementDirAndAlign(s, n, r)
                    }
                    return this
                }
            }, {
                key: "addChunk",
                value: function(t) {
                    this.chunks.push(t)
                }
            }, {
                key: "getChunk",
                value: function(t) {
                    return this.chunks[t]
                }
            }, {
                key: "setChunk",
                value: function(t, e) {
                    this.chunks[t] = e
                }
            }, {
                key: "getValue",
                value: function() {
                    for (var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = [], n = this.getChunks(), r = 0, u = n.length; r < u; r++) e.push(n[r].getValue(t));
                    return t ? e.join("") : e
                }
            }, {
                key: "getChunks",
                value: function() {
                    return this.chunks.slice()
                }
            }, {
                key: "getLength",
                value: function() {
                    return this.chunks.length
                }
            }, {
                key: "getElement",
                value: function() {
                    return this.element
                }
            }, {
                key: "parseNode",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (t) switch (t.nodeType) {
                        case v.nodeTypes.TEXT_NODE:
                            var n = t.nodeValue;
                            if (e || !n.trim()) return;
                            return void this.currentChunk.addSpan(new a.PageSpan(t, {
                                value: n
                            }));
                        case v.nodeTypes.ELEMENT_NODE:
                            var r = t.getAttribute(v.nodeAttributes.TRANSLATE),
                                i = t.getAttribute(v.nodeAttributes.CONTENT_EDITABLE);
                            "" === r && (r = "yes"), (e = v.NOT_TRANSLATABLE_TAGS[t.nodeName] || "true" === i || "no" === r || Boolean(e) && "yes" !== r) || (this.extractAttrs(t), this.processedElements.push(t));
                            var o = this.highAccuracy ? u.util.isInline(t) : v.isInlineNodeName(t.nodeName);
                            if (o && v.isNodeOfMenuList(t) && (o = !1), o && this.fixlist.isSeparateChunk(t) && (o = !1), o && "BR" === t.nodeName && v.shouldBrBreakChunk(t) && (o = !1), o || this.flushChunk(), v.isValidNodeName(t.nodeName)) {
                                var s = t.getAttribute(v.nodeAttributes.SRC_LANG) || t.getAttribute(v.nodeAttributes.LANG);
                                if (!s || o || e || t === this.element || (t.setAttribute(v.nodeAttributes.SRC_LANG, s), this.currentChunk.setParam("lang", s)), u.util.isFrame(t)) return this.parseFrame(t, e);
                                t.shadowRoot && this.parseNode(t.shadowRoot, e);
                                for (var c = t.firstChild; c; c = c.nextSibling) this.parseNode(c, e);
                                o || (v.BREAK_SENSITIVE_TAGS[t.nodeName] && this.currentChunk.setParam("breakSensitive", !0), this.flushChunk())
                            }
                            return;
                        case v.nodeTypes.DOCUMENT_FRAGMENT_NODE:
                            for (var l = t.firstChild; l; l = l.nextSibling) this.parseNode(l, e);
                            return
                    }
                }
            }, {
                key: "parseFrame",
                value: function(t, e) {
                    try {
                        this.parseNode(t.contentDocument.body, e)
                    } catch (t) {}
                }
            }, {
                key: "flushChunk",
                value: function() {
                    var t = this.currentChunk;
                    return t.getLength() > 0 && (u.util.hasText(t.getValue(!0)) && this.addChunk(t), this.currentChunk = new o.PageChunk), this.currentChunk
                }
            }, {
                key: "extractAttrs",
                value: function(t) {
                    var e = t.nodeName;
                    if (v.SERVICE_TAGS[e.toUpperCase()]) return this;
                    for (var n in v.ATTRS) {
                        var r = t.getAttribute(n);
                        if (u.util.hasText(r)) {
                            var i = v.ATTRS[n];
                            u.util.isFunc(i) && !i(t) || this.addChunk(new o.PageChunk(o.PageChunk.TYPE_ATTR, [new s.PageAttr(t, {
                                attr: n,
                                value: r
                            })]))
                        }
                    }
                    return this
                }
            }]) && f(e.prototype, n), r && f(e, r), v
        }(i.Parameterized);
    e.PageModel = b, g(b, "nodeTypes", {
        ELEMENT_NODE: 1,
        TEXT_NODE: 3,
        DOCUMENT_FRAGMENT_NODE: 11
    }), g(b, "nodeAttributes", u.util.createPlainObj({
        TRANSLATE: "translate",
        LANG: "lang",
        SRC_LANG: "data-srclang",
        CONTENT_EDITABLE: "contenteditable"
    })), g(b, "ATTRS", u.util.createPlainObj({
        alt: !0,
        abbr: !0,
        title: !0,
        label: !0,
        value: function(t) {
            return u.util.isButtonInput(t) && !t.name
        },
        content: function(t) {
            var e, n = !1;
            return "META" === t.nodeName && (n = (e = t.getAttribute("property") || t.name).indexOf("title") >= 0 || e.indexOf("description") >= 0), n
        },
        placeholder: !0,
        "aria-label": !0
    })), g(b, "INLINE_TAGS", u.util.createPlainObj({
        A: !0,
        B: !0,
        I: !0,
        Q: !0,
        S: !0,
        U: !0,
        BR: !0,
        EM: !0,
        RP: !0,
        RT: !0,
        TT: !0,
        BDI: !0,
        BDO: !0,
        BIG: !0,
        DEL: !0,
        DFN: !0,
        IMG: !0,
        INS: !0,
        KBD: !0,
        MAP: !0,
        SUB: !0,
        SUP: !0,
        SVG: !0,
        VAR: !0,
        WBR: !0,
        ABBR: !0,
        CITE: !0,
        CODE: !0,
        DATA: !0,
        MARK: !0,
        MATH: !0,
        RUBY: !0,
        SAMP: !0,
        SPAN: !0,
        TIME: !0,
        AUDIO: !0,
        INPUT: !0,
        LABEL: !0,
        METER: !0,
        SMALL: !0,
        BUTTON: !0,
        SELECT: !0,
        STRONG: !0,
        ACRONYM: !0,
        PICTURE: !0,
        PROGRESS: !0,
        TEXTAREA: !0
    })), g(b, "SERVICE_TAGS", u.util.createPlainObj({
        BASE: !0,
        LINK: !0,
        META: !0,
        STYLE: !0,
        SCRIPT: !0,
        NOSCRIPT: !0,
        TEMPLATE: !0
    })), g(b, "INVALID_TAGS", u.util.createPlainObj({
        SVG: !0,
        MATH: !0,
        RUBY: !0,
        AUDIO: !0,
        EMBED: !0,
        VIDEO: !0,
        CANVAS: !0,
        OBJECT: !0,
        PROGRESS: !0,
        TEXTAREA: !0
    })), g(b, "NOT_TRANSLATABLE_TAGS", u.util.createPlainObj({
        KBD: !0,
        VAR: !0,
        CODE: !0,
        SAMP: !0,
        ADDRESS: !0
    })), g(b, "NOT_WRAPABLE_TAGS", u.util.createPlainObj({
        TITLE: !0
    })), g(b, "BREAK_SENSITIVE_TAGS", u.util.createPlainObj({
        PRE: !0
    })), g(b, "LINK_TAGS", u.util.createPlainObj({
        A: !0
    })), g(b, "menuListCache", void 0)
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    n(16), n(17), n(18), n(19), n(12), n(9), n(10), n(13), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PageChunk = void 0, n(30);
    var u = n(6),
        i = n(67),
        o = n(48),
        a = n(98);

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function l(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = p(t);
            if (e) {
                var u = p(this).constructor;
                n = Reflect.construct(r, arguments, u)
            } else n = r.apply(this, arguments);
            return f(this, n)
        }
    }

    function f(t, e) {
        if (e && ("object" === r(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return h(t)
    }

    function h(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function p(t) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function v(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var d = document,
        y = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && c(t, e)
            }(f, t);
            var e, n, r, i = l(f);

            function f(t, e, n) {
                var r;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, f), v(h(r = i.call(this)), "type", void 0), v(h(r), "spans", void 0), r.type = t || f.TYPE_TEXT, r.spans = e || [], n && r.setParams(n), r
            }
            return e = f, r = [{
                key: "splitSpan",
                value: function(t, e, n) {
                    var r = t.getNode(),
                        i = u.util.breakText(t.getParam("value"), e),
                        a = [];
                    if (1 === i.length) return a;
                    for (var s = d.createDocumentFragment(), c = 0; c < i.length; c++) s.appendChild(d.createTextNode(i[c])), i[c].length > e || a.push(new f(f.TYPE_TEXT, [new o.PageSpan(s.lastChild, {
                        value: i[c]
                    })], {
                        breakSensitive: n
                    }));
                    return r.parentNode.replaceChild(s, r), a
                }
            }, {
                key: "breakChunk",
                value: function(t, e) {
                    for (var n = 0, r = t.getSpans(), u = [], i = new f, o = t.getParam("breakSensitive"), a = 0, s = r.length; a < s; a++) {
                        var c = r[a].getParam("value").length;
                        n + c > e && (n && (n = 0, i.setParam("breakSensitive", o), u.push(i), i = new f), c > e) ? (u = u.concat(f.splitSpan(r[a], e, o)))[u.length - 1] && (n = (i = u[u.length - 1]).getValue(!0).length) : (n += c, i.addSpan(r[a]))
                    }
                    return n && -1 === u.indexOf(i) && (i.setParam("breakSensitive", o), u.push(i)), u.length > 1 && this.arrangeChunksSentences(u, e), u
                }
            }, {
                key: "arrangeChunksSentences",
                value: function(t, e) {
                    for (var n = 0; n < t.length - 1; n++) {
                        var r = t[n],
                            i = t[n + 1],
                            o = r.getValue().join(" ");
                        u.util.isCompletedSentence(o) || r.getParam("breakSensitive") || i.getParam("breakSensitive") || f.trySwapChunkSentence(i, r, !1, e) || f.trySwapChunkSentence(r, i, !0, e)
                    }
                }
            }, {
                key: "makeFakeAlign",
                value: function(t, e) {
                    for (var n = "", r = "", u = [], i = 0, o = e.length; i < o; i++) {
                        var a = e[i],
                            s = n.length,
                            c = r.length;
                        n += a.getValue(), r += t[i], u.push([
                            [s, n.length - s].join(":"), [c, r.length - c].join(":")
                        ].join("-"))
                    }
                    return u.join(";")
                }
            }, {
                key: "trySwapChunkSentence",
                value: function(t, e, n, r) {
                    var i = e.getValue().join(" "),
                        a = n ? t.getSpan(t.getLength() - 1) : t.getSpan(0),
                        s = a.getValue(),
                        c = u.util.truncateSentences(s);
                    if (!c.length) return !1;
                    var l = n ? c[c.length - 1] : c[0];
                    if (r - i.length < l.length) return !1;
                    var f = a.getNode(),
                        h = d.createDocumentFragment();
                    if (n) {
                        var p = s.slice(0, -l.length);
                        h.appendChild(d.createTextNode(p)), h.appendChild(d.createTextNode(l));
                        var v = new o.PageSpan(h.firstChild, {
                                value: p
                            }),
                            y = new o.PageSpan(h.lastChild, {
                                value: l
                            });
                        e.unshiftSpan(y), t.setSpan(t.getLength() - 1, v)
                    } else {
                        var g = s.slice(l.length);
                        h.appendChild(d.createTextNode(l)), h.appendChild(d.createTextNode(g));
                        var D = new o.PageSpan(h.firstChild, {
                                value: l
                            }),
                            E = new o.PageSpan(h.lastChild, {
                                value: g
                            });
                        e.addSpan(D), t.setSpan(0, E)
                    }
                    return f.parentNode.replaceChild(h, f), !0
                }
            }], (n = [{
                key: "setTranslation",
                value: function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        u = this.getSpans(),
                        i = this.getParam("requestGraph"),
                        o = i ? a.PageChunkSerializer.parseTranslation$usingGraph(t, i) : a.PageChunkSerializer.parseTranslation$usingWbr(t);
                    e ? this.setParam("align", e) : (this.setParam("isFakeAlign", !0), this.setParam("align", f.makeFakeAlign(o, u)));
                    for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        c.setValue(o[s]), c.setParam("translated", !0), c.setParam("fromCache", r), c.setParam("sourceLang", n), c.setParam("translation", o[s])
                    }
                }
            }, {
                key: "getType",
                value: function() {
                    return this.type
                }
            }, {
                key: "setType",
                value: function(t) {
                    this.type = t
                }
            }, {
                key: "addSpan",
                value: function(t) {
                    this.spans.push(t)
                }
            }, {
                key: "unshiftSpan",
                value: function(t) {
                    this.spans.unshift(t)
                }
            }, {
                key: "getSpan",
                value: function(t) {
                    return this.spans[t]
                }
            }, {
                key: "setSpan",
                value: function(t, e) {
                    this.spans[t] = e
                }
            }, {
                key: "getSpans",
                value: function() {
                    return this.spans.slice()
                }
            }, {
                key: "getValue",
                value: function() {
                    for (var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = [], n = this.getSpans(), r = 0, u = n.length; r < u; r++) e.push(n[r].getValue());
                    return t ? e.join("") : e
                }
            }, {
                key: "setValue",
                value: function(t) {
                    for (var e = this.getSpans(), n = 0, r = e.length; n < r; n++) e[n].setValue(t[n])
                }
            }, {
                key: "getLength",
                value: function() {
                    return this.spans.length
                }
            }, {
                key: "canBeTranslatedFromRu",
                value: function() {
                    var t = this.getValue(!0),
                        e = u.util.clearNonAlpha(t),
                        n = u.util.countRuAlpha(e),
                        r = e.length - n;
                    return r > 2 && r > n
                }
            }]) && s(e.prototype, n), r && s(e, r), f
        }(i.Parameterized);
    e.PageChunk = y, v(y, "TYPE_ATTR", "attr"), v(y, "TYPE_TEXT", "text")
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PageChunkSerializer = void 0, n(47), n(30), n(126);
    var r = n(6),
        u = n(96);

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var o = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }
        var e, n;
        return e = t, n = [{
            key: "inlineChunk$usingWbr",
            value: function(t) {
                for (var e = [], n = t.getSpans(), r = 0; r < n.length; r++) e[r] = n[r].getParam("value");
                var u = t.getParam("breakSensitive");
                return this.inlineChunkValues(e, u)
            }
        }, {
            key: "inlineChunk$usingGraph",
            value: function(t) {
                for (var e = [], n = t.getSpans(), r = 0; r < n.length; r++) {
                    var u = n[r].getParam("value"),
                        i = n[r].getNode().parentNode;
                    if (i)
                        if (e.length) {
                            var o = e[e.length - 1];
                            if (o[0] !== i)
                                if (o[0].contains(i)) o.push([i, u]);
                                else {
                                    for (var a = []; o && i.contains(o[0]);) a.push(o), e.splice(e.length - 1, 1), o = e[e.length - 1];
                                    e.push([i].concat(a, [u]))
                                }
                            else o.push(u)
                        } else e.push([i, u])
                }
                t.setParam("requestGraph", e);
                var s = t.getParam("breakSensitive");
                return this.inlineGraph(e, s)
            }
        }, {
            key: "parseTranslation$usingWbr",
            value: function(t) {
                for (var e = t.split("<wbr>"), n = 0, u = e.length; n < u; n++) e[n] = r.util.unescapeHTML(e[n]);
                return e
            }
        }, {
            key: "parseTranslation$usingGraph",
            value: function(t, e) {
                var n = [],
                    i = e.length > 1;
                return e.forEach((function(e) {
                    return function e(i, o) {
                        var a = u.PageModel.getInlineElementNodeName(i[0]),
                            s = "<".concat(a, ">"),
                            c = "</".concat(a, ">");
                        o && (t = t.slice(t.indexOf(s) + s.length));
                        for (var l = 1; l < i.length; l++)
                            if (Array.isArray(i[l])) e(i[l], !0);
                            else {
                                var f;
                                f = Array.isArray(i[l + 1]) ? "<".concat(u.PageModel.getInlineElementNodeName(i[l + 1][0]), ">") : r.util.isString(i[l + 1]) ? "<wbr>" : c;
                                var h = t.indexOf(f),
                                    p = t.slice(0, -1 === h ? void 0 : h);
                                n.push(r.util.unescapeHTML(p)), t = t.slice(p.length), "<wbr>" === f && -1 !== h && (t = t.slice("<wbr>".length))
                            }
                        o && (t = t.slice(t.indexOf(c) + c.length))
                    }(e, i)
                })), n
            }
        }, {
            key: "inlineChunkValues",
            value: function(t, e) {
                for (var n = 0; n < t.length; n++) t[n] = r.util.escapeHTML(r.util.normalizeValue(t[n], e));
                return t.join("<wbr>")
            }
        }, {
            key: "inlineGraph",
            value: function(t, e) {
                var n = this,
                    r = t.length > 1;
                return t.map((function(t) {
                    return n.graphNodeToHtmlStr(t, r, e)
                })).join("")
            }
        }, {
            key: "graphNodeToHtmlStr",
            value: function(t, e, n) {
                if (t[0]) {
                    for (var i = [], o = u.PageModel.getInlineElementNodeName(t[0]), a = 1; a < t.length; a++) Array.isArray(t[a]) ? i.push(this.graphNodeToHtmlStr(t[a], !0)) : (i.push(r.util.escapeHTML(r.util.normalizeValue(t[a], n))), r.util.isString(t[a]) && r.util.isString(t[a + 1]) && i.push("<wbr>"));
                    var s = i.join("");
                    return e ? "<".concat(o, ">").concat(s, "</").concat(o, ">") : s
                }
            }
        }], null && i(e.prototype, null), n && i(e, n), t
    }();
    e.PageChunkSerializer = o
}, function(t, e, n) {
    var r, u, i, o = n(23),
        a = n(91),
        s = n(53),
        c = n(49),
        l = n(1),
        f = l.process,
        h = l.setImmediate,
        p = l.clearImmediate,
        v = l.MessageChannel,
        d = l.Dispatch,
        y = 0,
        g = {},
        D = function() {
            var t = +this;
            if (g.hasOwnProperty(t)) {
                var e = g[t];
                delete g[t], e()
            }
        },
        E = function(t) {
            D.call(t.data)
        };
    h && p || (h = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return g[++y] = function() {
            a("function" == typeof t ? t : Function(t), e)
        }, r(y), y
    }, p = function(t) {
        delete g[t]
    }, "process" == n(20)(f) ? r = function(t) {
        f.nextTick(o(D, t, 1))
    } : d && d.now ? r = function(t) {
        d.now(o(D, t, 1))
    } : v ? (i = (u = new v).port2, u.port1.onmessage = E, r = o(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
        l.postMessage(t + "", "*")
    }, l.addEventListener("message", E, !1)) : r = "onreadystatechange" in c("script") ? function(t) {
        s.appendChild(c("script")).onreadystatechange = function() {
            s.removeChild(this), D.call(t)
        }
    } : function(t) {
        setTimeout(o(D, t, 1), 0)
    }), t.exports = {
        set: h,
        clear: p
    }
}, function(t, e, n) {
    "use strict";
    var r = n(25);

    function u(t) {
        var e, n;
        this.promise = new t((function(t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = r
        })), this.resolve = r(e), this.reject = r(n)
    }
    t.exports.f = function(t) {
        return new u(t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(6),
        u = n(90),
        i = n(116),
        o = window.yt = window.yt || {};
    o.PageTranslator = i.PageTranslator, o.Request = u.Request, o.trUtil = r.util
}, function(t, e, n) {
    "use strict";
    var r = n(68),
        u = n(29);
    t.exports = n(55)("Set", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        add: function(t) {
            return r.def(u(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    }, r)
}, function(t, e, n) {
    var r = n(8),
        u = n(3),
        i = n(26);
    t.exports = n(7) ? Object.defineProperties : function(t, e) {
        u(t);
        for (var n, o = i(e), a = o.length, s = 0; a > s;) r.f(t, n = o[s++], e[n]);
        return t
    }
}, function(t, e, n) {
    t.exports = n(41)("native-function-to-string", Function.toString)
}, function(t, e, n) {
    "use strict";
    var r = n(31),
        u = n(34),
        i = n(36),
        o = {};
    n(22)(o, n(0)("iterator"), (function() {
        return this
    })), t.exports = function(t, e, n) {
        t.prototype = r(o, {
            next: u(1, n)
        }), i(t, e + " Iterator")
    }
}, function(t, e, n) {
    var r = n(5),
        u = n(28),
        i = n(4),
        o = n(107),
        a = "[" + o + "]",
        s = RegExp("^" + a + a + "*"),
        c = RegExp(a + a + "*$"),
        l = function(t, e, n) {
            var u = {},
                a = i((function() {
                    return !!o[t]() || "​" != "​" [t]()
                })),
                s = u[t] = a ? e(f) : o[t];
            n && (u[n] = s), r(r.P + r.F * a, "String", u)
        },
        f = l.trim = function(t, e) {
            return t = String(u(t)), 1 & e && (t = t.replace(s, "")), 2 & e && (t = t.replace(c, "")), t
        };
    t.exports = l
}, function(t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
    "use strict";
    var r = n(63);
    n(5)({
        target: "RegExp",
        proto: !0,
        forced: r !== /./.exec
    }, {
        exec: r
    })
}, function(t, e, n) {
    var r = n(84),
        u = n(28);
    t.exports = function(t, e, n) {
        if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(u(t))
    }
}, function(t, e, n) {
    var r = n(0)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (n) {
            try {
                return e[r] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        u = n(21),
        i = n(60),
        o = n(61);
    n(62)("match", 1, (function(t, e, n, a) {
        return [function(n) {
            var r = t(this),
                u = null == n ? void 0 : n[e];
            return void 0 !== u ? u.call(n, r) : new RegExp(n)[e](String(r))
        }, function(t) {
            var e = a(n, t, this);
            if (e.done) return e.value;
            var s = r(t),
                c = String(this);
            if (!s.global) return o(s, c);
            var l = s.unicode;
            s.lastIndex = 0;
            for (var f, h = [], p = 0; null !== (f = o(s, c));) {
                var v = String(f[0]);
                h[p] = v, "" === v && (s.lastIndex = i(c, u(s.lastIndex), l)), p++
            }
            return 0 === p ? null : h
        }]
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(25),
        u = n(2),
        i = n(91),
        o = [].slice,
        a = {},
        s = function(t, e, n) {
            if (!(e in a)) {
                for (var r = [], u = 0; u < e; u++) r[u] = "a[" + u + "]";
                a[e] = Function("F,a", "return new F(" + r.join(",") + ")")
            }
            return a[e](t, n)
        };
    t.exports = Function.bind || function(t) {
        var e = r(this),
            n = o.call(arguments, 1),
            a = function() {
                var r = n.concat(o.call(arguments));
                return this instanceof a ? s(e, r.length, r) : i(e, r, t)
            };
        return u(e.prototype) && (a.prototype = e.prototype), a
    }
}, function(t, e, n) {
    var r = n(1),
        u = n(24),
        i = n(32),
        o = n(92),
        a = n(8).f;
    t.exports = function(t) {
        var e = u.Symbol || (u.Symbol = i ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || a(e, t, {
            value: o.f(t)
        })
    }
}, function(t, e, n) {
    var r = n(26),
        u = n(65),
        i = n(46);
    t.exports = function(t) {
        var e = r(t),
            n = u.f;
        if (n)
            for (var o, a = n(t), s = i.f, c = 0; a.length > c;) s.call(t, o = a[c++]) && e.push(o);
        return e
    }
}, function(t, e, n) {
    var r = n(27),
        u = n(58).f,
        i = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return o && "[object Window]" == i.call(t) ? function(t) {
            try {
                return u(t)
            } catch (t) {
                return o.slice()
            }
        }(t) : u(r(t))
    }
}, function(t, e, n) {
    "use strict";
    n(16), n(17), n(18), n(19), n(12), n(9), n(10), n(13), n(94), n(117), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PageTranslator = void 0, n(86), n(30), n(59), n(119), n(47), n(83);
    var r = n(6),
        u = n(120),
        i = n(38),
        o = n(96),
        a = n(129),
        s = n(97),
        c = n(98),
        l = n(132),
        f = n(139),
        h = n(140),
        p = n(141),
        v = n(48);

    function d(t, e) {
        if (t) {
            if ("string" == typeof t) return y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0
        }
    }

    function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function g(t) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function D(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function E(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function b(t, e) {
        return (b = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function m(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = T(t);
            if (e) {
                var u = T(this).constructor;
                n = Reflect.construct(r, arguments, u)
            } else n = r.apply(this, arguments);
            return A(this, n)
        }
    }

    function A(t, e) {
        if (e && ("object" === g(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return C(t)
    }

    function C(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function T(t) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function F(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var P = window,
        O = document,
        S = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && b(t, e)
            }(A, t);
            var e, n, i, y = m(A);

            function A() {
                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                D(this, A), F(C(t = y.call(this)), "maxThreads", void 0), F(C(t), "maxPortionLength", void 0), F(C(t), "maxPortionItems", void 0), F(C(t), "maxPortionErrors", void 0), F(C(t), "pageModel", void 0), F(C(t), "portionCounter", void 0), F(C(t), "scrollObserver", void 0), F(C(t), "disableContainerTags", void 0), F(C(t), "disableCache", void 0), F(C(t), "useLangAttribute", void 0), F(C(t), "modifyObserver", void 0), F(C(t), "alignChunkCounter", void 0), F(C(t), "textTranslator", void 0), F(C(t), "debouncedSync", void 0), F(C(t), "isModifiedObserverData", void 0), F(C(t), "needSyncTranslation", void 0), F(C(t), "sourceLang", void 0), F(C(t), "targetLang", void 0), F(C(t), "chunkCounter", void 0), F(C(t), "chunksLength", void 0), F(C(t), "chunksProgress", void 0), F(C(t), "direction", void 0), F(C(t), "readyThreads", void 0), F(C(t), "errorCounter", void 0), F(C(t), "latestRequestTimestamp", void 0), F(C(t), "latestRequestPortion", void 0), F(C(t), "cachedPortion", []), F(C(t), "flushCachePortion", void 0);
                var n, i = C(t),
                    s = [];
                if ((e = e || {}).format = a.TextTranslator.FORMAT_HTML, "object" === g(e.experiments))
                    for (var c = 0, l = Object.keys(e.experiments); c < l.length; c++) {
                        var v = l[c];
                        u.experiments[v] = e.experiments[v]
                    }
                return s.push(r.util.bindFunc(t.syncChunks, C(t))), s.push(r.util.bindFunc(t.breakChunks, C(t))), s.push(r.util.bindFunc(t.sortChunksByLang, C(t))), u.experiments.enableNonRuLangDetection && s.push(r.util.bindFunc(t.setChunksAutoLang, C(t))), e.checkVisibility && (s.push(A.markInvisibleChunksOnNearbyScreens(e.preTranslateScreens)), t.scrollObserver = new f.ScrollObserver(P), t.scrollObserver.on("scroll", r.util.bindFunc(t.sync, C(t)))), e.filters = s.concat(e.filters || []), t.alignChunkCounter = 0, t.pageModel = new o.PageModel(e), t.textTranslator = new a.TextTranslator(e), t.maxThreads = e.maxThreads || 5, t.portionCounter = 0, t.maxPortionItems = e.maxPortionItems || 20, t.maxPortionErrors = e.maxPortionErrors || 2, t.maxPortionLength = e.maxPortionLength || 1e3, t.disableContainerTags = e.disableContainerTags || !1, t.disableCache = e.disableCache || !1, t.useLangAttribute = void 0 !== e.useLangAttribute && e.useLangAttribute, t.debouncedSync = r.util.debounce(t.sync, 200), t.isModifiedObserverData = !1, t.needSyncTranslation = !1, e.autoSync && (n = t.pageModel.getElement(), h.NativeObserver.canUse() ? t.modifyObserver = new h.NativeObserver(n) : t.modifyObserver = new p.PollingObserver(n, e.autoSyncInterval), t.modifyObserver.on("modify", (function(t) {
                    t ? (i.checkTranslationContextMutation(t), i.isModifiedObserverData || (i.isModifiedObserverData = A.isValidObserverData(t)), i.isModifiedObserverData && i.debouncedSync()) : i.sync()
                }))), t.updateContextTitle(), t
            }
            return e = A, i = [{
                key: "wrapSpan",
                value: function(t) {
                    var e, n = t.getNode(),
                        u = t.getValue(),
                        i = n.parentNode.nodeType === o.PageModel.nodeTypes.ELEMENT_NODE && n.parentNode.getAttribute("data-type") === this.SPAN_TYPE,
                        a = t.getParam("value");
                    return (e = i ? n.parentNode : O.createElement(this.SPAN_TAGNAME)).setAttribute("data-index", t.getParam("index")), e.setAttribute("data-translated", String(t.getParam("translated"))), e.setAttribute("data-source-lang", t.getParam("sourceLang")), e.setAttribute("data-target-lang", t.getParam("targetLang")), e.setAttribute("data-value", r.util.normalizeValue(a)), e.setAttribute("data-translation", r.util.normalizeValue(u)), e.setAttribute("data-ch", t.getParam("fromCache") ? "1" : "0"), !i && n.parentNode.replaceChild && (e.textContent = u, e.setAttribute("data-type", this.SPAN_TYPE), n.parentNode.replaceChild(e, n), n = e.firstChild), i ? t : new v.PageSpan(n, {
                        value: a,
                        translated: !0,
                        translation: u,
                        wrapper: e
                    })
                }
            }, {
                key: "parseAlign",
                value: function(t) {
                    if (!t) return [];
                    t = t.split(";");
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        (n = n.split("-"))[0] = n[0].split(":"), n[1] = n[1].split(":"), n[0][0] = Number(n[0][0]), n[0][1] = Number(n[0][1]) + n[0][0], n[1][0] = Number(n[1][0]), n[1][1] = Number(n[1][1]) + n[1][0], 0 === e ? n[0][0] = n[1][0] = 0 : (t[e - 1][0][1] = n[0][0], t[e - 1][1][1] = n[1][0]), t[e] = n
                    }
                    return t
                }
            }, {
                key: "isChunkInvisible",
                value: function(t) {
                    return this.isChunkIncludeParam(t, "invisible")
                }
            }, {
                key: "isChunkTranslated",
                value: function(t) {
                    return this.isChunkIncludeParam(t, "translated")
                }
            }, {
                key: "isChunkIncludeParam",
                value: function(t, e) {
                    for (var n = 0, r = t.getSpans(), u = r.length; n < u && r[n].getParam(e);) n++;
                    return n === u
                }
            }, {
                key: "isValidObserverData",
                value: function(t) {
                    var e, n = t.length;
                    for (e = 0; e < n; e++)
                        if (r.util.hasText(this.getValidMutationRecordValue(t[e]))) return !0;
                    return !1
                }
            }, {
                key: "getValidMutationRecordValue",
                value: function(t) {
                    var e = "",
                        n = t.target,
                        u = [];
                    switch (t.type) {
                        case h.NativeObserver.TYPE_CHILDLIST:
                            r.util.slice(t.addedNodes).forEach((function(t) {
                                var e, n = t.nodeType;
                                n !== o.PageModel.nodeTypes.TEXT_NODE && n !== o.PageModel.nodeTypes.ELEMENT_NODE || (e = n === o.PageModel.nodeTypes.TEXT_NODE ? t.parentNode : t, o.PageModel.isTranslatableElement(e) && u.push(t.textContent))
                            })), e = u.join("");
                            break;
                        case h.NativeObserver.TYPE_ATTRIBUTES:
                            t.attributeName in o.PageModel.ATTRS && o.PageModel.isTranslatableElement(n) && (e = n.getAttribute(t.attributeName));
                            break;
                        case h.NativeObserver.TYPE_CHARACTERDATA:
                            n.nodeType === o.PageModel.nodeTypes.TEXT_NODE && o.PageModel.isTranslatableElement(n.parentNode) && (e = n.data)
                    }
                    return e
                }
            }, {
                key: "getChunkValueLength",
                value: function(t) {
                    for (var e = 0, n = t.getSpans(), r = 0, u = n.length; r < u; r++) e += n[r].getParam("value").length;
                    return e
                }
            }, {
                key: "getChunkAncestorNode",
                value: function(t) {
                    var e = t.getSpan(0).getNode();
                    for (e.nodeType !== o.PageModel.nodeTypes.ELEMENT_NODE && (e = e.parentNode); e && o.PageModel.isInlineNodeName(e.nodeName);) e = e.parentNode;
                    return e
                }
            }, {
                key: "markInvisibleChunks",
                value: function(t, e, n) {
                    return t.forEach((function(t) {
                        var e, u;
                        A.isChunkTranslated(t) || (e = A.getChunkAncestorNode(t)) && e.nodeType === o.PageModel.nodeTypes.ELEMENT_NODE && (u = r.util.isInvisible(e, n), t.getSpans().forEach((function(t) {
                            t.setParam("invisible", u)
                        })))
                    })), t
                }
            }, {
                key: "markInvisibleChunksOnNearbyScreens",
                value: function(t) {
                    return function(e, n) {
                        return A.markInvisibleChunks(e, n, t)
                    }
                }
            }, {
                key: "isWrappableChunk",
                value: function(t) {
                    var e = this.getChunkAncestorNode(t);
                    return t.getType() === s.PageChunk.TYPE_TEXT && !o.PageModel.NOT_WRAPABLE_TAGS[e && e.nodeName]
                }
            }, {
                key: "patchAlign",
                value: function(t) {
                    var e = t.length - 1;
                    t[e][1][1] = t[e][0][1] = this.MAX_ALIGN_LENGTH
                }
            }], (n = [{
                key: "halt",
                value: function() {
                    return this.abort(), this.modifyObserver && this.modifyObserver.hibernate(), this.scrollObserver && this.scrollObserver.hibernate(), this
                }
            }, {
                key: "sync",
                value: function() {
                    return this.needSyncTranslation = !1, this.halt(), this.translate(this.sourceLang, this.targetLang), this.isModifiedObserverData = !1, this
                }
            }, {
                key: "undo",
                value: function() {
                    var t = this.pageModel;
                    this.halt();
                    for (var e = t.getChunks(), n = 0, u = e.length; n < u; n++)
                        for (var i = e[n].getSpans(), o = 0, a = i.length; o < a; o++) {
                            var s = i[o];
                            s.setParam("translated", !1), s.setWrapperAttribute("data-translated", !1), s.setValue(s.getParam("value"))
                        }
                    var c = this.getSourceLang();
                    return c && t.setLang(c, r.util.getDirection(c) !== r.util.getDirection(this.targetLang)), this
                }
            }, {
                key: "redo",
                value: function() {
                    this.halt();
                    for (var t = this.pageModel.getChunks(), e = 0, n = t.length; e < n; e++)
                        for (var r = t[e].getSpans(), u = 0, i = r.length; u < i; u++) {
                            var o = r[u],
                                a = o.getParam("translation");
                            a && (o.setValue(a), o.setParam("translated", !0), o.setWrapperAttribute("data-translated", !0))
                        }
                    return this.translate(this.sourceLang, this.targetLang)
                }
            }, {
                key: "abort",
                value: function() {
                    return this.textTranslator.abort(), this.emit(A.EVENT_ABORT)
                }
            }, {
                key: "translate",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.util.getBrowserLang(),
                        n = this.pageModel,
                        u = r.util.bindFunc(this.translateNext, this);
                    if ("auto" === t && (t = ""), l.pageChunkCache.flush(), !this.useLangAttribute && t === e) return this.emit(A.EVENT_COMPLETE);
                    this.sourceLang = t, this.targetLang = e, n.update(), this.chunkCounter = 0, this.chunksLength = n.getLength(), this.chunksProgress = 0, this.direction = (t && t + "-") + e, this.readyThreads = 0, this.errorCounter = r.util.createPlainObj(), this.on(A.EVENT_ABORT, this.handleEnd).on(A.EVENT_COMPLETE, this.handleEnd).on(A.EVENT_PORTION_ERROR, this.handleError).on(A.EVENT_PORTION_PROGRESS, this.handleProgress), n.setLang(e, n.getDir() !== r.util.getDirection(e)), this.emit(A.EVENT_PROGRESS, 0);
                    for (var i = 0; i < this.maxThreads; i++) r.util.setZeroDelayTimeout(u);
                    return this
                }
            }, {
                key: "applyAlign",
                value: function() {
                    for (var t = this.pageModel.getChunks(), e = 0, n = t.length; e < n; e++)
                        if (A.isWrappableChunk(t[e])) {
                            var u = A.parseAlign(t[e].getParam("align"));
                            if (u.length) {
                                A.patchAlign(u);
                                for (var i = 0, o = "", a = "", c = t[e].getSpans(), l = [0, 0], f = [], h = 0, p = c.length; h < p; h++) {
                                    var d = c[h].getNode(),
                                        y = O.createDocumentFragment();
                                    for (o += c[h].getValue(), a += r.util.normalizeValue(c[h].getParam("value"), t[e].getParam("breakSensitive")); u[i] && l[1] < o.length;) {
                                        var g = o.slice(l[1], u[i][1][1]),
                                            D = a.slice(l[0], u[i][0][1]);
                                        y.appendChild(O.createTextNode(g)), f.push(new v.PageSpan(y.lastChild, {
                                            index: this.alignChunkCounter + "-" + i,
                                            value: D,
                                            translated: !0,
                                            translation: g,
                                            sourceLang: this.sourceLang,
                                            targetLang: this.targetLang,
                                            fromCache: c[h].getParam("fromCache")
                                        })), l[1] += g.length, l[0] += D.length, l[1] === u[i][1][1] && i++
                                    }
                                    y.hasChildNodes() && d.parentNode.replaceChild(y, d)
                                }
                                for (var E = 0, b = f.length; E < b; E++) f[E] = A.wrapSpan(f[E]);
                                this.pageModel.setChunk(e, new s.PageChunk(s.PageChunk.TYPE_TEXT, f)), this.alignChunkCounter++
                            }
                        }
                    return this
                }
            }, {
                key: "setExtraParam",
                value: function(t, e) {
                    return this.textTranslator.setExtraParam(t, e), this
                }
            }, {
                key: "getExtraParam",
                value: function(t) {
                    return this.textTranslator.getExtraParam(t)
                }
            }, {
                key: "getSessionId",
                value: function() {
                    return this.textTranslator.getSid()
                }
            }, {
                key: "getSourceLang",
                value: function() {
                    if (this.sourceLang) return this.sourceLang;
                    for (var t = r.util.createPlainObj(), e = this.pageModel.getChunks(), n = "", u = 0, i = e.length; u < i; u++)
                        for (var o = e[u].getSpans(), a = 0, s = o.length; a < s; a++) {
                            var c = o[a].getParam("sourceLang");
                            c && (t[c] = r.util.toNum(t[c]) + 1)
                        }
                    for (var l in t) t[l] > r.util.toNum(t[n]) && (n = l);
                    return n
                }
            }, {
                key: "getTargetLang",
                value: function() {
                    return this.targetLang
                }
            }, {
                key: "detectSourceLang",
                value: function() {
                    var t = this;
                    this.pageModel.update();
                    for (var e = [], n = this.pageModel.getChunks(), u = 0, i = n.length; u < i; u++) {
                        var o = n[u];
                        o.getType() === s.PageChunk.TYPE_TEXT && e.push(o.getValue(!0))
                    }
                    var a = e.join(" ").replace(/\s+/g, " ").slice(0, this.maxPortionLength);
                    this.textTranslator.detectLang(a, r.util.slice(arguments), (function(e, n) {
                        t.emit(A.EVENT_DETECT, n ? n.lang : "")
                    }))
                }
            }, {
                key: "syncChunks",
                value: function(t, e) {
                    var n = r.util.createPlainObj(),
                        u = e.length;
                    if (!u) return t;
                    for (var i = 0; i < u; i++)
                        for (var o = e[i].getSpans(), a = 0, s = o.length; a < s; a++) {
                            var c = o[a].getValue();
                            (n[c] = n[c] || []).push(o[a])
                        }
                    for (var l = 0, f = t.length; l < f; l++)
                        for (var h = t[l].getSpans(), p = 0, v = h.length; p < v; p++) {
                            var d = h[p].getNode(),
                                y = h[p].getValue(),
                                g = n[y];
                            if (g)
                                for (var D = 0, E = g.length; D < E; D++)
                                    if (d === g[D].getNode() && y === g[D].getParam("translation")) {
                                        t[l].setSpan(p, g[D]);
                                        break
                                    }
                        }
                    return t
                }
            }, {
                key: "breakChunks",
                value: function(t) {
                    for (var e = [], n = 0, r = t.length; n < r; n++) A.isChunkTranslated(t[n]) || A.getChunkValueLength(t[n]) <= this.maxPortionLength ? e.push(t[n]) : t[n].getType() === s.PageChunk.TYPE_TEXT && (e = e.concat(s.PageChunk.breakChunk(t[n], this.maxPortionLength)));
                    return e
                }
            }, {
                key: "sortChunksByLang",
                value: function(t) {
                    return t.sort((function(t, e) {
                        var n = t.getParam("lang") || "",
                            r = e.getParam("lang") || "";
                        return n.localeCompare(r)
                    })), t
                }
            }, {
                key: "setChunksAutoLang",
                value: function(t) {
                    var e = this.targetLang === this.sourceLang,
                        n = this.sourceLang === A.LANG_RU;
                    return t.forEach((function(t) {
                        t.setParam("langAuto", e && n && t.canBeTranslatedFromRu())
                    })), t
                }
            }, {
                key: "handleEnd",
                value: function() {
                    this.off(A.EVENT_ABORT, this.handleEnd).off(A.EVENT_COMPLETE, this.handleEnd).off(A.EVENT_PORTION_ERROR, this.handleError).off(A.EVENT_PORTION_PROGRESS, this.handleProgress)
                }
            }, {
                key: "handleError",
                value: function(t) {
                    var e = "_" + t.join(";");
                    this.errorCounter[e] = r.util.toNum(this.errorCounter[e]) + 1, this.errorCounter[e] <= this.maxPortionErrors ? this.translatePortion(t) : this.emit(A.EVENT_ERROR, t).emit(A.EVENT_PORTION_PROGRESS, t)
                }
            }, {
                key: "handleProgress",
                value: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.chunksProgress += t.length, this.emit(A.EVENT_PROGRESS, Math.round(100 / this.chunksLength * this.chunksProgress)), e && this.translateNext()
                }
            }, {
                key: "getNextPortion",
                value: function() {
                    var t, e, n, r, u = this.pageModel.getChunks(),
                        i = null,
                        o = [],
                        a = 0,
                        s = 0;
                    for (t = this.chunkCounter; t < u.length && a < this.maxPortionItems; t++) {
                        var c = u[t];
                        if (r = c.getParam("lang"), n = c.getParam("langAuto"), A.isChunkInvisible(c) || A.isChunkTranslated(c)) this.chunksProgress += 1;
                        else {
                            if ((s += A.getChunkValueLength(c)) > this.maxPortionLength && a) break;
                            if (a) {
                                if (i !== n) break
                            } else i = n;
                            if ((this.useLangAttribute || !this.sourceLang) && r)
                                if (a) {
                                    if (!e || e !== r) break
                                } else e = r;
                            a = o.push(t)
                        }
                    }
                    return this.chunkCounter = t, o
                }
            }, {
                key: "translateNext",
                value: function() {
                    var t = this,
                        e = this.getNextPortion();
                    return e.length ? (this.translatePortion(e), this) : (++this.readyThreads === this.maxThreads && (this.emit(A.EVENT_COMPLETE), r.util.setZeroDelayTimeout((function() {
                        t.needSyncTranslation ? t.sync() : t.startObserving()
                    }))), this)
                }
            }, {
                key: "startObserving",
                value: function() {
                    this.modifyObserver && this.modifyObserver.observe(), this.scrollObserver && this.scrollObserver.observe()
                }
            }, {
                key: "translatePortion",
                value: function(t) {
                    for (var e, n = this, u = this, i = this.pageModel.getChunk(t[0]), o = [], s = [], f = !1, h = 0; h < t.length; h++) {
                        var p = t[h],
                            v = this.pageModel.getChunk(p);
                        if (v) {
                            var d = this.disableContainerTags ? c.PageChunkSerializer.inlineChunk$usingWbr(v) : c.PageChunkSerializer.inlineChunk$usingGraph(v);
                            v.setParam("requestValue", d), !this.disableCache && l.pageChunkCache.has(d) ? this.translateChunkFromCache(v, p, d) : (o.push(d), s.push(p), this.disableCache || l.pageChunkCache.setWaiting(d))
                        }
                    }
                    if (!o.length) return setTimeout((function() {
                        return n.emit(A.EVENT_PORTION_PROGRESS, s)
                    }), 50), this;
                    if (this.sourceLang === this.targetLang && (f = i && i.getParam("langAuto")), f || this.sourceLang && !this.useLangAttribute || (e = r.util.normalizeLang(i && i.getParam("lang"))), !f && (e === this.targetLang || !e && this.sourceLang === this.targetLang)) return this.emit(A.EVENT_PORTION_PROGRESS, s), this;
                    if (r.util.safeStringifyJSON(s) === r.util.safeStringifyJSON(this.latestRequestPortion)) {
                        if (Date.now() - this.latestRequestTimestamp < A.PORTION_REPEAT_GAP) {
                            if (this.portionCounter > A.MAX_PORTION_REPEAT_COUNTER) return this.latestRequestTimestamp = Date.now(), this.emit(A.EVENT_PORTION_PROGRESS, s), this;
                            this.portionCounter++
                        } else this.portionCounter = 0;
                        this.latestRequestTimestamp = Date.now()
                    } else this.latestRequestPortion = s, this.portionCounter = 0;
                    var y = a.TextTranslator.isValidLang(e) ? e + "-" + this.targetLang : this.direction;
                    return f && (y = this.targetLang), this.emit(A.EVENT_REQUEST), this.textTranslator.translate(o, y, (function(t, e) {
                        if (t) return u.disableCache || l.pageChunkCache.deleteKeys(o), u.emit(A.EVENT_PORTION_ERROR, s);
                        u.needSyncTranslation = !0, u.setTranslation(s, e), u.emit(A.EVENT_PORTION_PROGRESS, s)
                    })), this
                }
            }, {
                key: "setTranslation",
                value: function(t, e) {
                    for (var n = function(t, e) {
                            return function(t) {
                                if (Array.isArray(t)) return t
                            }(t) || function(t, e) {
                                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (null != n) {
                                    var r, u, i = [],
                                        o = !0,
                                        a = !1;
                                    try {
                                        for (n = n.call(t); !(o = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                                    } catch (t) {
                                        a = !0, u = t
                                    } finally {
                                        try {
                                            o || null == n.return || n.return()
                                        } finally {
                                            if (a) throw u
                                        }
                                    }
                                    return i
                                }
                            }(t, e) || d(t, e) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }(e.lang.split("-"), 1)[0], r = 0; r < t.length; r++) {
                        var u = this.pageModel.getChunk(t[r]);
                        if (u) {
                            var i = e.align && e.align[r],
                                o = e.text[r],
                                a = u.getParam("requestValue");
                            u.setTranslation(o, i, n), this.disableCache || l.pageChunkCache.setResponse(a, {
                                responseText: o,
                                align: i,
                                srcLang: n
                            })
                        }
                    }
                    return this
                }
            }, {
                key: "updateCacheProgress",
                value: function(t) {
                    var e = this;
                    this.flushCachePortion = this.flushCachePortion || r.util.debounce((function() {
                        e.emit(A.EVENT_PORTION_PROGRESS, e.cachedPortion, !1), e.cachedPortion = []
                    }), 0), this.cachedPortion.push(t), this.flushCachePortion()
                }
            }, {
                key: "translateChunkFromCache",
                value: function(t, e, n) {
                    var r = this;
                    l.pageChunkCache.get(n).then((function(n) {
                        var u = n.responseText,
                            i = n.align,
                            o = n.srcLang;
                        t.setTranslation(u, i, o, !0), r.updateCacheProgress(e)
                    }))
                }
            }, {
                key: "checkTranslationContextMutation",
                value: function(t) {
                    var e, n = document.querySelector("title"),
                        r = function(t, e) {
                            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (!n) {
                                if (Array.isArray(t) || (n = d(t))) {
                                    n && (t = n);
                                    var r = 0,
                                        u = function() {};
                                    return {
                                        s: u,
                                        n: function() {
                                            return r >= t.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: t[r++]
                                            }
                                        },
                                        e: function(t) {
                                            throw t
                                        },
                                        f: u
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var i, o = !0,
                                a = !1;
                            return {
                                s: function() {
                                    n = n.call(t)
                                },
                                n: function() {
                                    var t = n.next();
                                    return o = t.done, t
                                },
                                e: function(t) {
                                    a = !0, i = t
                                },
                                f: function() {
                                    try {
                                        o || null == n.return || n.return()
                                    } finally {
                                        if (a) throw i
                                    }
                                }
                            }
                        }(t);
                    try {
                        for (r.s(); !(e = r.n()).done;) e.value.target === n && this.updateContextTitle()
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                }
            }, {
                key: "updateContextTitle",
                value: function() {
                    this.textTranslator.setExtraParam("context_title", o.PageModel.getDocumentContextTitle())
                }
            }]) && E(e.prototype, n), i && E(e, i), A
        }(i.Emitter);
    e.PageTranslator = S, F(S, "DELIMITER", "<wbr>"), F(S, "SPAN_TYPE", "trSpan"), F(S, "SPAN_TAGNAME", "ya-tr-span"), F(S, "EVENT_CLOSE", "close"), F(S, "EVENT_ABORT", "abort"), F(S, "EVENT_ERROR", "error"), F(S, "EVENT_DETECT", "detect"), F(S, "EVENT_COMPLETE", "complete"), F(S, "EVENT_PROGRESS", "progress"), F(S, "EVENT_PORTION_ERROR", "portionError"), F(S, "EVENT_PORTION_PROGRESS", "portionProgress"), F(S, "EVENT_REQUEST", "request"), F(S, "EVENT_LANG_CHANGED", "langChanged"), F(S, "EVENT_IMG_TRANSLATE", "imgTranslate"), F(S, "EVENT_IMG_CANCEL", "imgCancel"), F(S, "MAX_ALIGN_LENGTH", 1e9), F(S, "PORTION_REPEAT_GAP", 3e3), F(S, "MAX_PORTION_REPEAT_COUNTER", 3), F(S, "LANG_RU", "ru")
}, function(t, e, n) {
    "use strict";
    var r = n(23),
        u = n(5),
        i = n(15),
        o = n(73),
        a = n(74),
        s = n(21),
        c = n(118),
        l = n(75);
    u(u.S + u.F * !n(56)((function(t) {
        Array.from(t)
    })), "Array", {
        from: function(t) {
            var e, n, u, f, h = i(t),
                p = "function" == typeof this ? this : Array,
                v = arguments.length,
                d = v > 1 ? arguments[1] : void 0,
                y = void 0 !== d,
                g = 0,
                D = l(h);
            if (y && (d = r(d, v > 2 ? arguments[2] : void 0, 2)), null == D || p == Array && a(D))
                for (n = new p(e = s(h.length)); e > g; g++) c(n, g, y ? d(h[g], g) : h[g]);
            else
                for (f = D.call(h), n = new p; !(u = f.next()).done; g++) c(n, g, y ? o(f, d, [u.value, g], !0) : u.value);
            return n.length = g, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        u = n(34);
    t.exports = function(t, e, n) {
        e in t ? r.f(t, e, u(0, n)) : t[e] = n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        u = n(25),
        i = n(15),
        o = n(4),
        a = [].sort,
        s = [1, 2, 3];
    r(r.P + r.F * (o((function() {
        s.sort(void 0)
    })) || !o((function() {
        s.sort(null)
    })) || !n(95)(a)), "Array", {
        sort: function(t) {
            return void 0 === t ? a.call(i(this)) : a.call(i(this), u(t))
        }
    })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.experiments = void 0, e.experiments = {}
}, function(t, e, n) {
    "use strict";
    var r, u = n(1),
        i = n(66)(0),
        o = n(11),
        a = n(37),
        s = n(124),
        c = n(125),
        l = n(2),
        f = n(29),
        h = n(29),
        p = !u.ActiveXObject && "ActiveXObject" in u,
        v = a.getWeak,
        d = Object.isExtensible,
        y = c.ufstore,
        g = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        },
        D = {
            get: function(t) {
                if (l(t)) {
                    var e = v(t);
                    return !0 === e ? y(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                }
            },
            set: function(t, e) {
                return c.def(f(this, "WeakMap"), t, e)
            }
        },
        E = t.exports = n(55)("WeakMap", g, D, c, !0, !0);
    h && p && (s((r = c.getConstructor(g, "WeakMap")).prototype, D), a.NEED = !0, i(["delete", "has", "get", "set"], (function(t) {
        var e = E.prototype,
            n = e[t];
        o(e, t, (function(e, u) {
            if (l(e) && !d(e)) {
                this._f || (this._f = new r);
                var i = this._f[t](e, u);
                return "set" == t ? this : i
            }
            return n.call(this, e, u)
        }))
    })))
}, function(t, e, n) {
    var r = n(123);
    t.exports = function(t, e) {
        return new(r(t))(e)
    }
}, function(t, e, n) {
    var r = n(2),
        u = n(93),
        i = n(0)("species");
    t.exports = function(t) {
        var e;
        return u(t) && ("function" != typeof(e = t.constructor) || e !== Array && !u(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(7),
        u = n(26),
        i = n(65),
        o = n(46),
        a = n(15),
        s = n(50),
        c = Object.assign;
    t.exports = !c || n(4)((function() {
        var t = {},
            e = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return t[n] = 7, r.split("").forEach((function(t) {
            e[t] = t
        })), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
    })) ? function(t, e) {
        for (var n = a(t), c = arguments.length, l = 1, f = i.f, h = o.f; c > l;)
            for (var p, v = s(arguments[l++]), d = f ? u(v).concat(f(v)) : u(v), y = d.length, g = 0; y > g;) p = d[g++], r && !h.call(v, p) || (n[p] = v[p]);
        return n
    } : c
}, function(t, e, n) {
    "use strict";
    var r = n(42),
        u = n(37).getWeak,
        i = n(3),
        o = n(2),
        a = n(43),
        s = n(44),
        c = n(66),
        l = n(14),
        f = n(29),
        h = c(5),
        p = c(6),
        v = 0,
        d = function(t) {
            return t._l || (t._l = new y)
        },
        y = function() {
            this.a = []
        },
        g = function(t, e) {
            return h(t.a, (function(t) {
                return t[0] === e
            }))
        };
    y.prototype = {
        get: function(t) {
            var e = g(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!g(this, t)
        },
        set: function(t, e) {
            var n = g(this, t);
            n ? n[1] = e : this.a.push([t, e])
        },
        delete: function(t) {
            var e = p(this.a, (function(e) {
                return e[0] === t
            }));
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function(t, e, n, i) {
            var c = t((function(t, r) {
                a(t, c, e, "_i"), t._t = e, t._i = v++, t._l = void 0, null != r && s(r, n, t[i], t)
            }));
            return r(c.prototype, {
                delete: function(t) {
                    if (!o(t)) return !1;
                    var n = u(t);
                    return !0 === n ? d(f(this, e)).delete(t) : n && l(n, this._i) && delete n[this._i]
                },
                has: function(t) {
                    if (!o(t)) return !1;
                    var n = u(t);
                    return !0 === n ? d(f(this, e)).has(t) : n && l(n, this._i)
                }
            }), c
        },
        def: function(t, e, n) {
            var r = u(i(e), !0);
            return !0 === r ? d(t).set(e, n) : r[t._i] = n, t
        },
        ufstore: d
    }
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        u = n(66)(1);
    r(r.P + r.F * !n(95)([].map, !0), "Array", {
        map: function(t) {
            return u(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function o(t, e) {
        return (o = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function a(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = c(t);
            if (e) {
                var u = c(this).constructor;
                n = Reflect.construct(r, arguments, u)
            } else n = r.apply(this, arguments);
            return s(this, n)
        }
    }

    function s(t, e) {
        if (e && ("object" === r(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(16), n(17), n(18), n(19), n(12), n(9), n(10), n(13), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PageAttr = void 0;
    var l, f, h, p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && o(t, e)
        }(s, t);
        var e, n, r = a(s);

        function s() {
            return u(this, s), r.apply(this, arguments)
        }
        return e = s, (n = [{
            key: "getValue",
            value: function() {
                return this.node.getAttribute(this.getParam(s.PARAM_ATTR))
            }
        }, {
            key: "setValue",
            value: function(t) {
                this.node.setAttribute(this.getParam(s.PARAM_ATTR), t)
            }
        }]) && i(e.prototype, n), s
    }(n(48).PageSpan);
    e.PageAttr = p, h = "attr", (f = "PARAM_ATTR") in (l = p) ? Object.defineProperty(l, f, {
        value: h,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : l[f] = h
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PageModelFixlist = void 0, n(88), n(89);
    var r = n(6);

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var i = ("wikipedia.org", location.href.includes("wikipedia.org")),
        o = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, n;
            return e = t, (n = [{
                key: "isSeparateChunk",
                value: function(t) {
                    if (i) {
                        if (r.util.hasClass(t, "mw-headline")) return !0;
                        if (r.util.hasClass(t, "tocnumber")) return !0
                    }
                    return !1
                }
            }]) && u(e.prototype, n), t
        }();
    e.PageModelFixlist = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TextTranslator = void 0, n(9), n(130);
    var r = n(6),
        u = n(90);

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function a(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var s = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, t), a(this, "sid", void 0), a(this, "key", void 0), a(this, "srv", void 0), a(this, "url", void 0), a(this, "format", void 0), a(this, "options", void 0), a(this, "detectUrl", void 0), a(this, "extraParams", void 0), a(this, "requests", void 0), a(this, "timeout", void 0), a(this, "experiments", void 0), a(this, "requestCounter", 0), a(this, "detectRequest", void 0), this.key = e.key, this.srv = e.srv, this.sid = e.sid || t.generateSid(), this.url = e.url || "/", this.format = e.format, this.timeout = r.util.toNum(e.timeout), this.options = r.util.toNum(e.options), this.requests = r.util.createPlainObj(), this.detectUrl = e.detectUrl, this.extraParams = r.util.createPlainObj(e.extraParams), this.experiments = r.util.createPlainObj(e.experiments)
        }
        var e, n, s;
        return e = t, s = [{
            key: "generateSid",
            value: function() {
                var t, e, n = Date.now().toString(16);
                for (t = 0, e = 16 - n.length; t < e; t++) n += Math.floor(16 * Math.random()).toString(16);
                return n
            }
        }, {
            key: "isValidLang",
            value: function(t) {
                return "und" !== t && /^[a-z]{2,6}$/.test(t)
            }
        }], (n = [{
            key: "abort",
            value: function() {
                for (var t in this.requests) this.requests[t].abort();
                return this.requests = r.util.createPlainObj(), this
            }
        }, {
            key: "getSid",
            value: function() {
                return this.sid
            }
        }, {
            key: "setExtraParam",
            value: function(t, e) {
                this.extraParams[t] = e
            }
        }, {
            key: "getExtraParam",
            value: function(t) {
                return this.extraParams[t]
            }
        }, {
            key: "getParams",
            value: function(t, e) {
                var n = r.util.createPlainObj(this.extraParams);
                return n.id = [this.sid, this.requestCounter, 0].join("-"), this.key && (n.key = this.key), this.srv && (n.srv = this.srv), n.text = t, n.lang = e, this.format && (n.format = this.format), this.options && (n.options = this.options), n
            }
        }, {
            key: "translate",
            value: function(e, n, r) {
                var i, o = this.requests;
                return !e || e.join("").length > t.MAX_TEXT_LENGTH ? r(new Error("Invalid text!")) : (i = this.getParams(e, n), o[i.id] = new u.Request(this.url), o[i.id].on(u.Request.EVENT_ERROR, (function(t) {
                    delete o[i.id], r(t)
                })).on(u.Request.EVENT_RESPONSE, (function(e) {
                    delete o[i.id], e.code === t.OK ? r(null, e) : r(new Error(e.message))
                })).setParams(i).setTimeout(this.timeout).send(), this.requestCounter += 1, this)
            }
        }, {
            key: "detectLang",
            value: function(e, n, r) {
                this.detectRequest && this.detectRequest.abort(), this.detectRequest = new u.Request(this.detectUrl), this.detectRequest.on(u.Request.EVENT_ERROR, (function(t) {
                    r(t)
                })).on(u.Request.EVENT_RESPONSE, (function(e) {
                    e.code === t.OK ? r(null, e) : r(new Error(e.message))
                })).setParams({
                    sid: this.sid,
                    srv: this.srv,
                    text: e,
                    hint: n.join(",")
                }).setTimeout(this.timeout).send()
            }
        }]) && o(e.prototype, n), s && o(e, s), t
    }();
    e.TextTranslator = s, a(s, "OK", 200), a(s, "FORMAT_HTML", "html"), a(s, "MAX_TEXT_LENGTH", 1e4)
}, function(t, e, n) {
    "use strict";
    n(131);
    var r = n(3),
        u = n(64),
        i = n(7),
        o = /./.toString,
        a = function(t) {
            n(11)(RegExp.prototype, "toString", t, !0)
        };
    n(4)((function() {
        return "/a/b" != o.call({
            source: "a",
            flags: "b"
        })
    })) ? a((function() {
        var t = r(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? u.call(t) : void 0)
    })) : "toString" != o.name && a((function() {
        return o.call(this)
    }))
}, function(t, e, n) {
    n(7) && "g" != /./g.flags && n(8).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(64)
    })
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function u(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.pageChunkCache = void 0, n(133), n(12), n(9), n(10), n(13), n(134);
    var i = new(function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), u(this, "cache", void 0), u(this, "callbacks", void 0), this.flush()
        }
        var e, n;
        return e = t, (n = [{
            key: "flush",
            value: function() {
                this.cache = new Map, this.callbacks = new Map
            }
        }, {
            key: "has",
            value: function(t) {
                return this.cache.has(t)
            }
        }, {
            key: "get",
            value: function(t) {
                var e = this;
                return new Promise((function(n) {
                    var r = e.cache.get(t);
                    r ? n(r) : e.addCallback(t, n)
                }))
            }
        }, {
            key: "setResponse",
            value: function(t, e) {
                this.cache.set(t, e), this.callCallbacks(t, e)
            }
        }, {
            key: "setWaiting",
            value: function(t) {
                this.cache.set(t, !1)
            }
        }, {
            key: "deleteKeys",
            value: function(t) {
                var e = this;
                t.forEach((function(t) {
                    return e.cache.delete(t)
                }))
            }
        }, {
            key: "addCallback",
            value: function(t, e) {
                var n = this.callbacks.get(t) || [];
                n.push(e), this.callbacks.set(t, n)
            }
        }, {
            key: "callCallbacks",
            value: function(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                var u = this.callbacks.get(t) || [];
                u.forEach((function(t) {
                    return t.apply(void 0, n)
                })), this.callbacks.delete(t)
            }
        }]) && r(e.prototype, n), t
    }());
    e.pageChunkCache = i
}, function(t, e, n) {
    "use strict";
    var r = n(68),
        u = n(29);
    t.exports = n(55)("Map", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        get: function(t) {
            var e = r.getEntry(u(this, "Map"), t);
            return e && e.v
        },
        set: function(t, e) {
            return r.def(u(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, r, !0)
}, function(t, e, n) {
    "use strict";
    var r, u, i, o, a = n(32),
        s = n(1),
        c = n(23),
        l = n(45),
        f = n(5),
        h = n(2),
        p = n(25),
        v = n(43),
        d = n(44),
        y = n(85),
        g = n(99).set,
        D = n(135)(),
        E = n(100),
        b = n(136),
        m = n(137),
        A = n(138),
        C = s.TypeError,
        T = s.process,
        F = T && T.versions,
        P = F && F.v8 || "",
        O = s.Promise,
        S = "process" == l(T),
        _ = function() {},
        k = u = E.f,
        N = !! function() {
            try {
                var t = O.resolve(1),
                    e = (t.constructor = {})[n(0)("species")] = function(t) {
                        t(_, _)
                    };
                return (S || "function" == typeof PromiseRejectionEvent) && t.then(_) instanceof e && 0 !== P.indexOf("6.6") && -1 === m.indexOf("Chrome/66")
            } catch (t) {}
        }(),
        x = function(t) {
            var e;
            return !(!h(t) || "function" != typeof(e = t.then)) && e
        },
        w = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                D((function() {
                    for (var r = t._v, u = 1 == t._s, i = 0, o = function(e) {
                            var n, i, o, a = u ? e.ok : e.fail,
                                s = e.resolve,
                                c = e.reject,
                                l = e.domain;
                            try {
                                a ? (u || (2 == t._h && j(t), t._h = 1), !0 === a ? n = r : (l && l.enter(), n = a(r), l && (l.exit(), o = !0)), n === e.promise ? c(C("Promise-chain cycle")) : (i = x(n)) ? i.call(n, s, c) : s(n)) : c(r)
                            } catch (t) {
                                l && !o && l.exit(), c(t)
                            }
                        }; n.length > i;) o(n[i++]);
                    t._c = [], t._n = !1, e && !t._h && R(t)
                }))
            }
        },
        R = function(t) {
            g.call(s, (function() {
                var e, n, r, u = t._v,
                    i = B(t);
                if (i && (e = b((function() {
                        S ? T.emit("unhandledRejection", u, t) : (n = s.onunhandledrejection) ? n({
                            promise: t,
                            reason: u
                        }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", u)
                    })), t._h = S || B(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
            }))
        },
        B = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        j = function(t) {
            g.call(s, (function() {
                var e;
                S ? T.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            }))
        },
        L = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), w(e, !0))
        },
        M = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw C("Promise can't be resolved itself");
                    (e = x(t)) ? D((function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, c(M, r, 1), c(L, r, 1))
                        } catch (t) {
                            L.call(r, t)
                        }
                    })): (n._v = t, n._s = 1, w(n, !1))
                } catch (t) {
                    L.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
    N || (O = function(t) {
        v(this, O, "Promise", "_h"), p(t), r.call(this);
        try {
            t(c(M, this, 1), c(L, this, 1))
        } catch (t) {
            L.call(this, t)
        }
    }, (r = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(42)(O.prototype, {
        then: function(t, e) {
            var n = k(y(this, O));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = S ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && w(this, !1), n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), i = function() {
        var t = new r;
        this.promise = t, this.resolve = c(M, t, 1), this.reject = c(L, t, 1)
    }, E.f = k = function(t) {
        return t === O || t === o ? new i(t) : u(t)
    }), f(f.G + f.W + f.F * !N, {
        Promise: O
    }), n(36)(O, "Promise"), n(78)("Promise"), o = n(24).Promise, f(f.S + f.F * !N, "Promise", {
        reject: function(t) {
            var e = k(this);
            return (0, e.reject)(t), e.promise
        }
    }), f(f.S + f.F * (a || !N), "Promise", {
        resolve: function(t) {
            return A(a && this === o ? O : this, t)
        }
    }), f(f.S + f.F * !(N && n(56)((function(t) {
        O.all(t).catch(_)
    }))), "Promise", {
        all: function(t) {
            var e = this,
                n = k(e),
                r = n.resolve,
                u = n.reject,
                i = b((function() {
                    var n = [],
                        i = 0,
                        o = 1;
                    d(t, !1, (function(t) {
                        var a = i++,
                            s = !1;
                        n.push(void 0), o++, e.resolve(t).then((function(t) {
                            s || (s = !0, n[a] = t, --o || r(n))
                        }), u)
                    })), --o || r(n)
                }));
            return i.e && u(i.v), n.promise
        },
        race: function(t) {
            var e = this,
                n = k(e),
                r = n.reject,
                u = b((function() {
                    d(t, !1, (function(t) {
                        e.resolve(t).then(n.resolve, r)
                    }))
                }));
            return u.e && r(u.v), n.promise
        }
    })
}, function(t, e, n) {
    var r = n(1),
        u = n(99).set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        o = r.process,
        a = r.Promise,
        s = "process" == n(20)(o);
    t.exports = function() {
        var t, e, n, c = function() {
            var r, u;
            for (s && (r = o.domain) && r.exit(); t;) {
                u = t.fn, t = t.next;
                try {
                    u()
                } catch (r) {
                    throw t ? n() : e = void 0, r
                }
            }
            e = void 0, r && r.enter()
        };
        if (s) n = function() {
            o.nextTick(c)
        };
        else if (!i || r.navigator && r.navigator.standalone)
            if (a && a.resolve) {
                var l = a.resolve(void 0);
                n = function() {
                    l.then(c)
                }
            } else n = function() {
                u.call(r, c)
            };
        else {
            var f = !0,
                h = document.createTextNode("");
            new i(c).observe(h, {
                characterData: !0
            }), n = function() {
                h.data = f = !f
            }
        }
        return function(r) {
            var u = {
                fn: r,
                next: void 0
            };
            e && (e.next = u), t || (t = u, n()), e = u
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function(t, e, n) {
    var r = n(1).navigator;
    t.exports = r && r.userAgent || ""
}, function(t, e, n) {
    var r = n(3),
        u = n(2),
        i = n(100);
    t.exports = function(t, e) {
        if (r(t), u(e) && e.constructor === t) return e;
        var n = i.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    n(16), n(17), n(18), n(19), n(12), n(9), n(10), n(13), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ScrollObserver = void 0;
    var u = n(6);

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function o(t, e) {
        return (o = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function a(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = l(t);
            if (e) {
                var u = l(this).constructor;
                n = Reflect.construct(r, arguments, u)
            } else n = r.apply(this, arguments);
            return s(this, n)
        }
    }

    function s(t, e) {
        if (e && ("object" === r(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return c(t)
    }

    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function f(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && o(t, e)
        }(s, t);
        var e, n, r = a(s);

        function s(t) {
            var e;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, s), f(c(e = r.call(this)), "target", void 0), f(c(e), "skipFirstScrollEvent", void 0), e.target = t, e.handleEvent = u.util.limitedDebounce(e.handleEvent), e
        }
        return e = s, (n = [{
            key: "observe",
            value: function() {
                this.skipFirstScrollEvent = u.util.isFirefox(), this.target.addEventListener("scroll", this, !0)
            }
        }, {
            key: "hibernate",
            value: function() {
                this.target.removeEventListener("scroll", this, !0)
            }
        }, {
            key: "handleEvent",
            value: function(t) {
                this.skipFirstScrollEvent ? this.skipFirstScrollEvent = !1 : this.emit(t.type)
            }
        }]) && i(e.prototype, n), s
    }(n(38).Emitter);
    e.ScrollObserver = h
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    n(16), n(17), n(18), n(19), n(12), n(9), n(10), n(13), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.NativeObserver = void 0;
    var u = n(6);

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function o(t, e) {
        return (o = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function a(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = l(t);
            if (e) {
                var u = l(this).constructor;
                n = Reflect.construct(r, arguments, u)
            } else n = r.apply(this, arguments);
            return s(this, n)
        }
    }

    function s(t, e) {
        if (e && ("object" === r(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return c(t)
    }

    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function f(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && o(t, e)
        }(l, t);
        var e, n, r, s = a(l);

        function l(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, l), f(c(n = s.call(this)), "observer", void 0), f(c(n), "active", void 0), f(c(n), "element", void 0), f(c(n), "options", void 0), n.element = t, n.options = e || l.DEFAULT_OPTIONS, n.observer = new window.MutationObserver(u.util.bindFunc(n.handleData, c(n))), n
        }
        return e = l, r = [{
            key: "canUse",
            value: function() {
                return "MutationObserver" in window
            }
        }], (n = [{
            key: "observe",
            value: function() {
                return this.active = !0, this.observer.observe(this.element, this.options), this
            }
        }, {
            key: "hibernate",
            value: function() {
                return this.active = !1, this.observer.disconnect(), this
            }
        }, {
            key: "handleData",
            value: function(t) {
                this.active && this.emit("modify", t)
            }
        }]) && i(e.prototype, n), r && i(e, r), l
    }(n(38).Emitter);
    e.NativeObserver = h, f(h, "DEFAULT_OPTIONS", {
        subtree: !0,
        childList: !0,
        attributes: !0,
        characterData: !0
    }), f(h, "TYPE_CHILDLIST", "childList"), f(h, "TYPE_ATTRIBUTES", "attributes"), f(h, "TYPE_CHARACTERDATA", "characterData")
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    n(16), n(17), n(18), n(19), n(12), n(9), n(10), n(13), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PollingObserver = void 0;
    var u = n(6);

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function s(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = f(t);
            if (e) {
                var u = f(this).constructor;
                n = Reflect.construct(r, arguments, u)
            } else n = r.apply(this, arguments);
            return c(this, n)
        }
    }

    function c(t, e) {
        if (e && ("object" === r(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return l(t)
    }

    function l(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function h(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && a(t, e)
        }(c, t);
        var e, n, r = s(c);

        function c(t) {
            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3;
            return i(this, c), h(l(e = r.call(this)), "element", void 0), h(l(e), "interval", void 0), h(l(e), "content", void 0), h(l(e), "timeout", void 0), e.element = t, e.timeout = n, e.interval = 0, e.checkContent = u.util.bindFunc(e.checkContent, l(e)), e
        }
        return e = c, (n = [{
            key: "observe",
            value: function() {
                return this.interval || (this.content = this.element.textContent, this.interval = setInterval(this.checkContent, this.timeout)), this
            }
        }, {
            key: "hibernate",
            value: function() {
                return clearInterval(this.interval), this.interval = 0, this
            }
        }, {
            key: "checkContent",
            value: function() {
                var t = this.element.textContent;
                this.content !== t && (this.content = t, this.emit("modify", null))
            }
        }]) && o(e.prototype, n), c
    }(n(38).Emitter);
    e.PollingObserver = p
}]);