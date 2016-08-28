!function (t, e, i) {
    function n(t, e) {
        return typeof t === e
    }

    function s() {
        var t, e, i, s, o, a, r;
        for (var l in b) {
            if (t = [], e = b[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))for (i = 0; i < e.options.aliases.length; i++)t.push(e.options.aliases[i].toLowerCase());
            for (s = n(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++)a = t[o], r = a.split("."), 1 === r.length ? E[r[0]] = s : 2 === r.length && (!E[r[0]] || E[r[0]] instanceof Boolean || (E[r[0]] = new Boolean(E[r[0]])), E[r[0]][r[1]] = s), v.push((s ? "" : "no-") + r.join("-"))
        }
    }

    function o(t) {
        var e = T.className, i = E._config.classPrefix || "", n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
        e = e.replace(n, "$1" + i + "js$2"), E._config.enableClasses && (e += " " + i + t.join(" " + i), T.className = e)
    }

    function a() {
        var t = e.body;
        return t || (t = w("body"), t.fake = !0), t
    }

    function r(t, e, i, n) {
        var s, o, r, l, c = "modernizr", d = w("div"), h = a();
        if (parseInt(i, 10))for (; i--;)r = w("div"), r.id = n ? n[i] : c + (i + 1), d.appendChild(r);
        return s = ["\xad", '<style id="s', c, '">', t, "</style>"].join(""), d.id = c, (h.fake ? h : d).innerHTML += s, h.appendChild(d), h.fake && (h.style.background = "", h.style.overflow = "hidden", l = T.style.overflow, T.style.overflow = "hidden", T.appendChild(h)), o = e(d, t), h.fake ? (h.parentNode.removeChild(h), T.style.overflow = l, T.offsetHeight) : d.parentNode.removeChild(d), !!o
    }

    function l(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function c(t) {
        return t.replace(/([a-z])-([a-z])/g, function (t, e, i) {
            return e + i.toUpperCase()
        }).replace(/^-/, "")
    }

    function d(t) {
        return t.replace(/([A-Z])/g, function (t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function h(e, n) {
        var s = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; s--;)if (t.CSS.supports(d(e[s]), n))return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var o = []; s--;)o.push("(" + d(e[s]) + ":" + n + ")");
            return o = o.join(" or "), r("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
            })
        }
        return i
    }

    function u(t, e, s, o) {
        function a() {
            c && (delete x.style, delete x.modElem)
        }

        if (o = n(o, "undefined") ? !1 : o, !n(s, "undefined")) {
            var r = h(t, s);
            if (!n(r, "undefined"))return r
        }
        var c, d, u, p;
        x.style || (c = !0, x.modElem = w("modernizr"), x.style = x.modElem.style);
        for (d in t)if (u = t[d], p = x.style[u], !l(u, "-") && x.style[u] !== i) {
            if (o || n(s, "undefined"))return a(), "pfx" == e ? u : !0;
            try {
                x.style[u] = s
            } catch (f) {
            }
            if (x.style[u] != p)return a(), "pfx" == e ? u : !0
        }
        return a(), !1
    }

    function p(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function f(t, e, i) {
        var s;
        for (var o in t)if (t[o] in e)return i === !1 ? t[o] : (s = e[t[o]], n(s, "function") ? p(s, i || e) : s);
        return !1
    }

    function m(t, e, i, s, o) {
        var a = t.charAt(0).toUpperCase() + t.slice(1), r = (t + " " + k.join(a + " ") + a).split(" ");
        return n(e, "string") || n(e, "undefined") ? u(r, e, s, o) : (r = (t + " " + _.join(a + " ") + a).split(" "), f(r, e, i))
    }

    function g(t, e, n) {
        return m(t, i, i, e, n)
    }

    var v = [], b = [], S = {
        _version: "v3.0.0pre",
        _config: {classPrefix: "mz-", enableClasses: !0, usePrefixes: !0},
        _q: [],
        on: function (t, e) {
            setTimeout(function () {
                e(this[t])
            }, 0)
        },
        addTest: function (t, e, i) {
            b.push({name: t, fn: e, options: i})
        },
        addAsyncTest: function (t) {
            b.push({name: null, fn: t})
        }
    }, E = function () {
    };
    E.prototype = S, E = new E, E.addTest("applicationcache", "applicationCache" in t), E.addTest("history", function () {
        var e = navigator.userAgent;
        return -1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") ? t.history && "pushState" in t.history : !1
    }), E.addTest("localstorage", function () {
        var t = "modernizr";
        try {
            return localStorage.setItem(t, t), localStorage.removeItem(t), !0
        } catch (e) {
            return !1
        }
    }), E.addTest("svg", !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var y = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    S._prefixes = y;
    var T = e.documentElement, L = "Webkit Moz O ms", _ = S._config.usePrefixes ? L.toLowerCase().split(" ") : [];
    S._domPrefixes = _;
    var w = function () {
        return e.createElement.apply(e, arguments)
    };
    E.addTest("opacity", function () {
        var t = w("div"), e = t.style;
        return e.cssText = y.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    }), E.addTest("rgba", function () {
        var t = w("div"), e = t.style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    });
    var C = S.testStyles = r, k = S._config.usePrefixes ? L.split(" ") : [];
    S._cssomPrefixes = k;
    var A = {elem: w("modernizr")};
    E._q.push(function () {
        delete A.elem
    });
    var x = {style: A.elem.style};
    E._q.unshift(function () {
        delete x.style
    });
    S.testProp = function (t, e, n) {
        return u([t], i, e, n)
    };
    S.testAllProps = m, S.testAllProps = g, E.addTest("backgroundsize", g("backgroundSize", "100%", !0)), E.addTest("cssanimations", g("animationName", "a", !0)), E.addTest("csstransforms", g("transform", "scale(1)", !0)), E.addTest("csstransforms3d", function () {
        var t = !!g("perspective", "1px", !0), e = E._config.usePrefixes;
        if (t && (!e || "webkitPerspective" in T.style)) {
            var i = "@media (transform-3d)";
            e && (i += ",(-webkit-transform-3d)"), i += "{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}", C(i, function (e) {
                t = 9 === e.offsetLeft && 5 === e.offsetHeight
            })
        }
        return t
    }), E.addTest("csstransitions", g("transition", "all", !0)), E.addTest("flexbox", g("flexBasis", "1px", !0)), E.addTest("flexboxlegacy", g("boxDirection", "reverse", !0));
    var D = S.prefixed = function (t, e, i) {
        return -1 != t.indexOf("-") && (t = c(t)), e ? m(t, e, i) : m(t, "pfx")
    };
    E.addTest("fullscreen", !(!D("exitFullscreen", e, !1) && !D("cancelFullScreen", e, !1))), s(), o(v), delete S.addTest, delete S.addAsyncTest;
    for (var I = 0; I < E._q.length; I++)E._q[I]();
    t.Modernizr = E
}(this, document), function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = t.length, i = se.type(t);
        return "function" === i || se.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (se.isFunction(e))return se.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType)return se.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (ue.test(e))return se.filter(e, t, i);
            e = se.filter(e, t)
        }
        return se.grep(t, function (t) {
            return se.inArray(t, e) >= 0 !== i
        })
    }

    function s(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = Ee[t] = {};
        return se.each(t.match(Se) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function a() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1)) : (fe.detachEvent("onreadystatechange", r), t.detachEvent("onload", r))
    }

    function r() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (a(), se.ready())
    }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(we, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : _e.test(i) ? se.parseJSON(i) : i
                } catch (s) {
                }
                se.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function c(t) {
        var e;
        for (e in t)if (("data" !== e || !se.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
        return !0
    }

    function d(t, e, i, n) {
        if (se.acceptData(t)) {
            var s, o, a = se.expando, r = t.nodeType, l = r ? se.cache : t, c = r ? t[a] : t[a] && a;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e)return c || (c = r ? t[a] = G.pop() || se.guid++ : a), l[c] || (l[c] = r ? {} : {toJSON: se.noop}), ("object" == typeof e || "function" == typeof e) && (n ? l[c] = se.extend(l[c], e) : l[c].data = se.extend(l[c].data, e)), o = l[c], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[se.camelCase(e)] = i), "string" == typeof e ? (s = o[e], null == s && (s = o[se.camelCase(e)])) : s = o, s
        }
    }

    function h(t, e, i) {
        if (se.acceptData(t)) {
            var n, s, o = t.nodeType, a = o ? se.cache : t, r = o ? t[se.expando] : se.expando;
            if (a[r]) {
                if (e && (n = i ? a[r] : a[r].data)) {
                    se.isArray(e) ? e = e.concat(se.map(e, se.camelCase)) : e in n ? e = [e] : (e = se.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                    for (; s--;)delete n[e[s]];
                    if (i ? !c(n) : !se.isEmptyObject(n))return
                }
                (i || (delete a[r].data, c(a[r]))) && (o ? se.cleanData([t], !0) : ie.deleteExpando || a != a.window ? delete a[r] : a[r] = null)
            }
        }
    }

    function u() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (t) {
        }
    }

    function m(t) {
        var e = Pe.split("|"), i = t.createDocumentFragment();
        if (i.createElement)for (; e.length;)i.createElement(e.pop());
        return i
    }

    function g(t, e) {
        var i, n, s = 0, o = typeof t.getElementsByTagName !== Le ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Le ? t.querySelectorAll(e || "*") : void 0;
        if (!o)for (o = [], i = t.childNodes || t; null != (n = i[s]); s++)!e || se.nodeName(n, e) ? o.push(n) : se.merge(o, g(n, e));
        return void 0 === e || e && se.nodeName(t, e) ? se.merge([t], o) : o
    }

    function v(t) {
        De.test(t.type) && (t.defaultChecked = t.checked)
    }

    function b(t, e) {
        return se.nodeName(t, "table") && se.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function S(t) {
        return t.type = (null !== se.find.attr(t, "type")) + "/" + t.type, t
    }

    function E(t) {
        var e = Ye.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function y(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++)se._data(i, "globalEval", !e || se._data(e[n], "globalEval"))
    }

    function T(t, e) {
        if (1 === e.nodeType && se.hasData(t)) {
            var i, n, s, o = se._data(t), a = se._data(e, o), r = o.events;
            if (r) {
                delete a.handle, a.events = {};
                for (i in r)for (n = 0, s = r[i].length; s > n; n++)se.event.add(e, i, r[i][n])
            }
            a.data && (a.data = se.extend({}, a.data))
        }
    }

    function L(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[se.expando]) {
                s = se._data(e);
                for (n in s.events)se.removeEvent(e, n, s.handle);
                e.removeAttribute(se.expando)
            }
            "script" === i && e.text !== t.text ? (S(e).text = t.text, E(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !se.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && De.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function _(e, i) {
        var n, s = se(i.createElement(e)).appendTo(i.body), o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : se.css(s[0], "display");
        return s.detach(), o
    }

    function w(t) {
        var e = fe, i = Ze[t];
        return i || (i = _(t, e), "none" !== i && i || (Qe = (Qe || se("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Qe[0].contentWindow || Qe[0].contentDocument).document, e.write(), e.close(), i = _(t, e), Qe.detach()), Ze[t] = i), i
    }

    function C(t, e) {
        return {
            get: function () {
                var i = t();
                if (null != i)return i ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function k(t, e) {
        if (e in t)return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = ui.length; s--;)if (e = ui[s] + i, e in t)return e;
        return n
    }

    function A(t, e) {
        for (var i, n, s, o = [], a = 0, r = t.length; r > a; a++)n = t[a], n.style && (o[a] = se._data(n, "olddisplay"), i = n.style.display, e ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ae(n) && (o[a] = se._data(n, "olddisplay", w(n.nodeName)))) : (s = Ae(n), (i && "none" !== i || !s) && se._data(n, "olddisplay", s ? i : se.css(n, "display"))));
        for (a = 0; r > a; a++)n = t[a], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function x(t, e, i) {
        var n = li.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function D(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === i && (a += se.css(t, i + ke[o], !0, s)), n ? ("content" === i && (a -= se.css(t, "padding" + ke[o], !0, s)), "margin" !== i && (a -= se.css(t, "border" + ke[o] + "Width", !0, s))) : (a += se.css(t, "padding" + ke[o], !0, s), "padding" !== i && (a += se.css(t, "border" + ke[o] + "Width", !0, s)));
        return a
    }

    function I(t, e, i) {
        var n = !0, s = "width" === e ? t.offsetWidth : t.offsetHeight, o = ti(t), a = ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, o);
        if (0 >= s || null == s) {
            if (s = ei(t, e, o), (0 > s || null == s) && (s = t.style[e]), ni.test(s))return s;
            n = a && (ie.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + D(t, e, i || (a ? "border" : "content"), n, o) + "px"
    }

    function M(t, e, i, n, s) {
        return new M.prototype.init(t, e, i, n, s)
    }

    function R() {
        return setTimeout(function () {
            pi = void 0
        }), pi = se.now()
    }

    function O(t, e) {
        var i, n = {height: t}, s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e)i = ke[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function N(t, e, i) {
        for (var n, s = (Si[e] || []).concat(Si["*"]), o = 0, a = s.length; a > o; o++)if (n = s[o].call(i, e, t))return n
    }

    function P(t, e, i) {
        var n, s, o, a, r, l, c, d, h = this, u = {}, p = t.style, f = t.nodeType && Ae(t), m = se._data(t, "fxshow");
        i.queue || (r = se._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function () {
            r.unqueued || l()
        }), r.unqueued++, h.always(function () {
            h.always(function () {
                r.unqueued--, se.queue(t, "fx").length || r.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = se.css(t, "display"), d = "none" === c ? se._data(t, "olddisplay") || w(t.nodeName) : c, "inline" === d && "none" === se.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== w(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || h.always(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)if (s = e[n], mi.exec(s)) {
            if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                if ("show" !== s || !m || void 0 === m[n])continue;
                f = !0
            }
            u[n] = m && m[n] || se.style(t, n)
        } else c = void 0;
        if (se.isEmptyObject(u))"inline" === ("none" === c ? w(t.nodeName) : c) && (p.display = c); else {
            m ? "hidden" in m && (f = m.hidden) : m = se._data(t, "fxshow", {}), o && (m.hidden = !f), f ? se(t).show() : h.done(function () {
                se(t).hide()
            }), h.done(function () {
                var e;
                se._removeData(t, "fxshow");
                for (e in u)se.style(t, e, u[e])
            });
            for (n in u)a = N(f ? m[n] : 0, n, h), n in m || (m[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function $(t, e) {
        var i, n, s, o, a;
        for (i in t)if (n = se.camelCase(i), s = e[n], o = t[i], se.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), a = se.cssHooks[n], a && "expand" in a) {
            o = a.expand(o), delete t[n];
            for (i in o)i in t || (t[i] = o[i], e[i] = s)
        } else e[n] = s
    }

    function U(t, e, i) {
        var n, s, o = 0, a = bi.length, r = se.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s)return !1;
            for (var e = pi || R(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, a = 0, l = c.tweens.length; l > a; a++)c.tweens[a].run(o);
            return r.notifyWith(t, [c, o, i]), 1 > o && l ? i : (r.resolveWith(t, [c]), !1)
        }, c = r.promise({
            elem: t,
            props: se.extend({}, e),
            opts: se.extend(!0, {specialEasing: {}}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: pi || R(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var n = se.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n), n
            },
            stop: function (e) {
                var i = 0, n = e ? c.tweens.length : 0;
                if (s)return this;
                for (s = !0; n > i; i++)c.tweens[i].run(1);
                return e ? r.resolveWith(t, [c, e]) : r.rejectWith(t, [c, e]), this
            }
        }), d = c.props;
        for ($(d, c.opts.specialEasing); a > o; o++)if (n = bi[o].call(c, t, d, c.opts))return n;
        return se.map(d, N, c), se.isFunction(c.opts.start) && c.opts.start.call(t, c), se.fx.timer(se.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function B(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0, o = e.toLowerCase().match(Se) || [];
            if (se.isFunction(i))for (; n = o[s++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function F(t, e, i, n) {
        function s(r) {
            var l;
            return o[r] = !0, se.each(t[r] || [], function (t, r) {
                var c = r(e, i, n);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
            }), l
        }

        var o = {}, a = t === zi;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function j(t, e) {
        var i, n, s = se.ajaxSettings.flatOptions || {};
        for (n in e)void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && se.extend(!0, t, i), t
    }

    function H(t, e, i) {
        for (var n, s, o, a, r = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)for (a in r)if (r[a] && r[a].test(s)) {
            l.unshift(a);
            break
        }
        if (l[0] in i)o = l[0]; else {
            for (a in i) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                n || (n = a)
            }
            o = o || n
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }

    function z(t, e, i, n) {
        var s, o, a, r, l, c = {}, d = t.dataTypes.slice();
        if (d[1])for (a in t.converters)c[a.toLowerCase()] = t.converters[a];
        for (o = d.shift(); o;)if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = d.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a)for (s in c)if (r = s.split(" "), r[1] === o && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
                a === !0 ? a = c[s] : c[s] !== !0 && (o = r[0], d.unshift(r[1]));
                break
            }
            if (a !== !0)if (a && t["throws"])e = a(e); else try {
                e = a(e)
            } catch (h) {
                return {state: "parsererror", error: a ? h : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: e}
    }

    function V(t, e, i, n) {
        var s;
        if (se.isArray(e))se.each(e, function (e, s) {
            i || Yi.test(t) ? n(t, s) : V(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        }); else if (i || "object" !== se.type(e))n(t, e); else for (s in e)V(t + "[" + s + "]", e[s], i, n)
    }

    function X() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    }

    function W() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function Y(t) {
        return se.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }

    var G = [], J = G.slice, K = G.concat, q = G.push, Q = G.indexOf, Z = {}, te = Z.toString, ee = Z.hasOwnProperty, ie = {}, ne = "1.11.1", se = function (t, e) {
        return new se.fn.init(t, e)
    }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, re = /-([\da-z])/gi, le = function (t, e) {
        return e.toUpperCase()
    };
    se.fn = se.prototype = {
        jquery: ne, constructor: se, selector: "", length: 0, toArray: function () {
            return J.call(this)
        }, get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : J.call(this)
        }, pushStack: function (t) {
            var e = se.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t, e) {
            return se.each(this, t, e)
        }, map: function (t) {
            return this.pushStack(se.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(J.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: q, sort: G.sort, splice: G.splice
    }, se.extend = se.fn.extend = function () {
        var t, e, i, n, s, o, a = arguments[0] || {}, r = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[r] || {}, r++), "object" == typeof a || se.isFunction(a) || (a = {}), r === l && (a = this, r--); l > r; r++)if (null != (s = arguments[r]))for (n in s)t = a[n], i = s[n], a !== i && (c && i && (se.isPlainObject(i) || (e = se.isArray(i))) ? (e ? (e = !1, o = t && se.isArray(t) ? t : []) : o = t && se.isPlainObject(t) ? t : {}, a[n] = se.extend(c, o, i)) : void 0 !== i && (a[n] = i));
        return a
    }, se.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === se.type(t)
        }, isArray: Array.isArray || function (t) {
            return "array" === se.type(t)
        }, isWindow: function (t) {
            return null != t && t == t.window
        }, isNumeric: function (t) {
            return !se.isArray(t) && t - parseFloat(t) >= 0
        }, isEmptyObject: function (t) {
            var e;
            for (e in t)return !1;
            return !0
        }, isPlainObject: function (t) {
            var e;
            if (!t || "object" !== se.type(t) || t.nodeType || se.isWindow(t))return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)for (e in t)return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        }, globalEval: function (e) {
            e && se.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        }, camelCase: function (t) {
            return t.replace(ae, "ms-").replace(re, le)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e, n) {
            var s, o = 0, a = t.length, r = i(t);
            if (n) {
                if (r)for (; a > o && (s = e.apply(t[o], n), s !== !1); o++); else for (o in t)if (s = e.apply(t[o], n), s === !1)break
            } else if (r)for (; a > o && (s = e.call(t[o], o, t[o]), s !== !1); o++); else for (o in t)if (s = e.call(t[o], o, t[o]), s === !1)break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(oe, "")
        }, makeArray: function (t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? se.merge(n, "string" == typeof t ? [t] : t) : q.call(n, t)), n
        }, inArray: function (t, e, i) {
            var n;
            if (e) {
                if (Q)return Q.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)if (i in e && e[i] === t)return i
            }
            return -1
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, s = t.length; i > n;)t[s++] = e[n++];
            if (i !== i)for (; void 0 !== e[n];)t[s++] = e[n++];
            return t.length = s, t
        }, grep: function (t, e, i) {
            for (var n, s = [], o = 0, a = t.length, r = !i; a > o; o++)n = !e(t[o], o), n !== r && s.push(t[o]);
            return s
        }, map: function (t, e, n) {
            var s, o = 0, a = t.length, r = i(t), l = [];
            if (r)for (; a > o; o++)s = e(t[o], o, n), null != s && l.push(s); else for (o in t)s = e(t[o], o, n), null != s && l.push(s);
            return K.apply([], l)
        }, guid: 1, proxy: function (t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), se.isFunction(t) ? (i = J.call(arguments, 2), n = function () {
                return t.apply(e || this, i.concat(J.call(arguments)))
            }, n.guid = t.guid = t.guid || se.guid++, n) : void 0
        }, now: function () {
            return +new Date
        }, support: ie
    }), se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ce = function (t) {
        function e(t, e, i, n) {
            var s, o, a, r, l, c, h, p, f, m;
            if ((e ? e.ownerDocument || e : F) !== M && I(e), e = e || M, i = i || [], !t || "string" != typeof t)return i;
            if (1 !== (r = e.nodeType) && 9 !== r)return [];
            if (O && !n) {
                if (s = be.exec(t))if (a = s[1]) {
                    if (9 === r) {
                        if (o = e.getElementById(a), !o || !o.parentNode)return i;
                        if (o.id === a)return i.push(o), i
                    } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && U(e, o) && o.id === a)return i.push(o), i
                } else {
                    if (s[2])return Z.apply(i, e.getElementsByTagName(t)), i;
                    if ((a = s[3]) && y.getElementsByClassName && e.getElementsByClassName)return Z.apply(i, e.getElementsByClassName(a)), i
                }
                if (y.qsa && (!N || !N.test(t))) {
                    if (p = h = B, f = e, m = 9 === r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                        for (c = w(t), (h = e.getAttribute("id")) ? p = h.replace(Ee, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;)c[l] = p + u(c[l]);
                        f = Se.test(t) && d(e.parentNode) || e, m = c.join(",")
                    }
                    if (m)try {
                        return Z.apply(i, f.querySelectorAll(m)), i
                    } catch (g) {
                    } finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return k(t.replace(le, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > T.cacheLength && delete t[e.shift()], t[i + " "] = n
            }

            var e = [];
            return t
        }

        function n(t) {
            return t[B] = !0, t
        }

        function s(t) {
            var e = M.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var i = t.split("|"), n = t.length; n--;)T.attrHandle[i[n]] = e
        }

        function a(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (n)return n;
            if (i)for (; i = i.nextSibling;)if (i === e)return -1;
            return t ? 1 : -1
        }

        function r(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function c(t) {
            return n(function (e) {
                return e = +e, n(function (i, n) {
                    for (var s, o = t([], i.length, e), a = o.length; a--;)i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function d(t) {
            return t && typeof t.getElementsByTagName !== Y && t
        }

        function h() {
        }

        function u(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++)n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir, s = i && "parentNode" === n, o = H++;
            return e.first ? function (e, i, o) {
                for (; e = e[n];)if (1 === e.nodeType || s)return t(e, i, o)
            } : function (e, i, a) {
                var r, l, c = [j, o];
                if (a) {
                    for (; e = e[n];)if ((1 === e.nodeType || s) && t(e, i, a))return !0
                } else for (; e = e[n];)if (1 === e.nodeType || s) {
                    if (l = e[B] || (e[B] = {}), (r = l[n]) && r[0] === j && r[1] === o)return c[2] = r[2];
                    if (l[n] = c, c[2] = t(e, i, a))return !0
                }
            }
        }

        function f(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var s = t.length; s--;)if (!t[s](e, i, n))return !1;
                return !0
            } : t[0]
        }

        function m(t, i, n) {
            for (var s = 0, o = i.length; o > s; s++)e(t, i[s], n);
            return n
        }

        function g(t, e, i, n, s) {
            for (var o, a = [], r = 0, l = t.length, c = null != e; l > r; r++)(o = t[r]) && (!i || i(o, n, s)) && (a.push(o), c && e.push(r));
            return a
        }

        function v(t, e, i, s, o, a) {
            return s && !s[B] && (s = v(s)), o && !o[B] && (o = v(o, a)), n(function (n, a, r, l) {
                var c, d, h, u = [], p = [], f = a.length, v = n || m(e || "*", r.nodeType ? [r] : r, []), b = !t || !n && e ? v : g(v, u, t, r, l), S = i ? o || (n ? t : f || s) ? [] : a : b;
                if (i && i(b, S, r, l), s)for (c = g(S, p), s(c, [], r, l), d = c.length; d--;)(h = c[d]) && (S[p[d]] = !(b[p[d]] = h));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (c = [], d = S.length; d--;)(h = S[d]) && c.push(b[d] = h);
                            o(null, S = [], c, l)
                        }
                        for (d = S.length; d--;)(h = S[d]) && (c = o ? ee.call(n, h) : u[d]) > -1 && (n[c] = !(a[c] = h))
                    }
                } else S = g(S === a ? S.splice(f, S.length) : S), o ? o(null, a, S, l) : Z.apply(a, S)
            })
        }

        function b(t) {
            for (var e, i, n, s = t.length, o = T.relative[t[0].type], a = o || T.relative[" "], r = o ? 1 : 0, l = p(function (t) {
                return t === e
            }, a, !0), c = p(function (t) {
                return ee.call(e, t) > -1
            }, a, !0), d = [function (t, i, n) {
                return !o && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n))
            }]; s > r; r++)if (i = T.relative[t[r].type])d = [p(f(d), i)]; else {
                if (i = T.filter[t[r].type].apply(null, t[r].matches), i[B]) {
                    for (n = ++r; s > n && !T.relative[t[n].type]; n++);
                    return v(r > 1 && f(d), r > 1 && u(t.slice(0, r - 1).concat({value: " " === t[r - 2].type ? "*" : ""})).replace(le, "$1"), i, n > r && b(t.slice(r, n)), s > n && b(t = t.slice(n)), s > n && u(t))
                }
                d.push(i)
            }
            return f(d)
        }

        function S(t, i) {
            var s = i.length > 0, o = t.length > 0, a = function (n, a, r, l, c) {
                var d, h, u, p = 0, f = "0", m = n && [], v = [], b = A, S = n || o && T.find.TAG("*", c), E = j += null == b ? 1 : Math.random() || .1, y = S.length;
                for (c && (A = a !== M && a); f !== y && null != (d = S[f]); f++) {
                    if (o && d) {
                        for (h = 0; u = t[h++];)if (u(d, a, r)) {
                            l.push(d);
                            break
                        }
                        c && (j = E)
                    }
                    s && ((d = !u && d) && p--, n && m.push(d))
                }
                if (p += f, s && f !== p) {
                    for (h = 0; u = i[h++];)u(m, v, a, r);
                    if (n) {
                        if (p > 0)for (; f--;)m[f] || v[f] || (v[f] = q.call(l));
                        v = g(v)
                    }
                    Z.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                }
                return c && (j = E, A = b), m
            };
            return s ? n(a) : a
        }

        var E, y, T, L, _, w, C, k, A, x, D, I, M, R, O, N, P, $, U, B = "sizzle" + -new Date, F = t.document, j = 0, H = 0, z = i(), V = i(), X = i(), W = function (t, e) {
            return t === e && (D = !0), 0
        }, Y = "undefined", G = 1 << 31, J = {}.hasOwnProperty, K = [], q = K.pop, Q = K.push, Z = K.push, te = K.slice, ee = K.indexOf || function (t) {
                for (var e = 0, i = this.length; i > e; e++)if (this[e] === t)return e;
                return -1
            }, ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = se.replace("w", "w#"), ae = "\\[" + ne + "*(" + se + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", re = ":(" + se + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ce = new RegExp("^" + ne + "*," + ne + "*"), de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), he = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), ue = new RegExp(re), pe = new RegExp("^" + oe + "$"), fe = {
            ID: new RegExp("^#(" + se + ")"),
            CLASS: new RegExp("^\\.(" + se + ")"),
            TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ie + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Se = /[+~]/, Ee = /'|\\/g, ye = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Te = function (t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            Z.apply(K = te.call(F.childNodes), F.childNodes), K[F.childNodes.length].nodeType
        } catch (Le) {
            Z = {
                apply: K.length ? function (t, e) {
                    Q.apply(t, te.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        y = e.support = {}, _ = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, I = e.setDocument = function (t) {
            var e, i = t ? t.ownerDocument || t : F, n = i.defaultView;
            return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, R = i.documentElement, O = !_(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function () {
                I()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                I()
            })), y.attributes = s(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), y.getElementsByTagName = s(function (t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), y.getElementsByClassName = ve.test(i.getElementsByClassName) && s(function (t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), y.getById = s(function (t) {
                return R.appendChild(t).id = B, !i.getElementsByName || !i.getElementsByName(B).length
            }), y.getById ? (T.find.ID = function (t, e) {
                if (typeof e.getElementById !== Y && O) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, T.filter.ID = function (t) {
                var e = t.replace(ye, Te);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete T.find.ID, T.filter.ID = function (t) {
                var e = t.replace(ye, Te);
                return function (t) {
                    var i = typeof t.getAttributeNode !== Y && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), T.find.TAG = y.getElementsByTagName ? function (t, e) {
                return typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var i, n = [], s = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[s++];)1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, T.find.CLASS = y.getElementsByClassName && function (t, e) {
                    return typeof e.getElementsByClassName !== Y && O ? e.getElementsByClassName(t) : void 0
                }, P = [], N = [], (y.qsa = ve.test(i.querySelectorAll)) && (s(function (t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && N.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + ne + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || N.push(":checked")
            }), s(function (t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
            })), (y.matchesSelector = ve.test($ = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && s(function (t) {
                y.disconnectedMatch = $.call(t, "div"), $.call(t, "[s!='']:x"), P.push("!=", re)
            }), N = N.length && new RegExp(N.join("|")), P = P.length && new RegExp(P.join("|")), e = ve.test(R.compareDocumentPosition), U = e || ve.test(R.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e)for (; e = e.parentNode;)if (e === t)return !0;
                return !1
            }, W = e ? function (t, e) {
                if (t === e)return D = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !y.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === F && U(F, t) ? -1 : e === i || e.ownerDocument === F && U(F, e) ? 1 : x ? ee.call(x, t) - ee.call(x, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e)return D = !0, 0;
                var n, s = 0, o = t.parentNode, r = e.parentNode, l = [t], c = [e];
                if (!o || !r)return t === i ? -1 : e === i ? 1 : o ? -1 : r ? 1 : x ? ee.call(x, t) - ee.call(x, e) : 0;
                if (o === r)return a(t, e);
                for (n = t; n = n.parentNode;)l.unshift(n);
                for (n = e; n = n.parentNode;)c.unshift(n);
                for (; l[s] === c[s];)s++;
                return s ? a(l[s], c[s]) : l[s] === F ? -1 : c[s] === F ? 1 : 0
            }, i) : M
        }, e.matches = function (t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function (t, i) {
            if ((t.ownerDocument || t) !== M && I(t), i = i.replace(he, "='$1']"), !(!y.matchesSelector || !O || P && P.test(i) || N && N.test(i)))try {
                var n = $.call(t, i);
                if (n || y.disconnectedMatch || t.document && 11 !== t.document.nodeType)return n
            } catch (s) {
            }
            return e(i, M, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== M && I(t), U(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== M && I(t);
            var i = T.attrHandle[e.toLowerCase()], n = i && J.call(T.attrHandle, e.toLowerCase()) ? i(t, e, !O) : void 0;
            return void 0 !== n ? n : y.attributes || !O ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, i = [], n = 0, s = 0;
            if (D = !y.detectDuplicates, x = !y.sortStable && t.slice(0), t.sort(W), D) {
                for (; e = t[s++];)e === t[s] && (n = i.push(s));
                for (; n--;)t.splice(i[n], 1)
            }
            return x = null, t
        }, L = e.getText = function (t) {
            var e, i = "", n = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent)return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)i += L(t)
                } else if (3 === s || 4 === s)return t.nodeValue
            } else for (; e = t[n++];)i += L(e);
            return i
        }, T = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(ye, Te), t[3] = (t[3] || t[4] || t[5] || "").replace(ye, Te), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ue.test(i) && (e = w(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(ye, Te).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && z(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Y && t.getAttribute("class") || "")
                        })
                }, ATTR: function (t, i, n) {
                    return function (s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), r = "of-type" === e;
                    return 1 === n && 0 === s ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var c, d, h, u, p, f, m = o !== a ? "nextSibling" : "previousSibling", g = e.parentNode, v = r && e.nodeName.toLowerCase(), b = !l && !r;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (h = e; h = h[m];)if (r ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? g.firstChild : g.lastChild], a && b) {
                                for (d = g[B] || (g[B] = {}), c = d[t] || [], p = c[0] === j && c[1], u = c[0] === j && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (u = p = 0) || f.pop();)if (1 === h.nodeType && ++u && h === e) {
                                    d[t] = [j, p, u];
                                    break
                                }
                            } else if (b && (c = (e[B] || (e[B] = {}))[t]) && c[0] === j)u = c[1]; else for (; (h = ++p && h && h[m] || (u = p = 0) || f.pop()) && ((r ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++u || (b && ((h[B] || (h[B] = {}))[t] = [j, u]), h !== e)););
                            return u -= s, u === n || u % n === 0 && u / n >= 0
                        }
                    }
                }, PSEUDO: function (t, i) {
                    var s, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[B] ? o(i) : o.length > 1 ? (s = [t, t, "", i], T.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                        for (var n, s = o(t, i), a = s.length; a--;)n = ee.call(t, s[a]), t[n] = !(e[n] = s[a])
                    }) : function (t) {
                        return o(t, 0, s)
                    }) : o
                }
            },
            pseudos: {
                not: n(function (t) {
                    var e = [], i = [], s = C(t.replace(le, "$1"));
                    return s[B] ? n(function (t, e, i, n) {
                        for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                    }) : function (t, n, o) {
                        return e[0] = t, s(e, null, o, i), !i.pop()
                    }
                }), has: n(function (t) {
                    return function (i) {
                        return e(t, i).length > 0
                    }
                }), contains: n(function (t) {
                    return function (e) {
                        return (e.textContent || e.innerText || L(e)).indexOf(t) > -1
                    }
                }), lang: n(function (t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(ye, Te).toLowerCase(), function (e) {
                        var i;
                        do if (i = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                }, root: function (t) {
                    return t === R
                }, focus: function (t) {
                    return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: function (t) {
                    return t.disabled === !1
                }, disabled: function (t) {
                    return t.disabled === !0
                }, checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                    return !0
                }, parent: function (t) {
                    return !T.pseudos.empty(t)
                }, header: function (t) {
                    return ge.test(t.nodeName)
                }, input: function (t) {
                    return me.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: c(function () {
                    return [0]
                }), last: c(function (t, e) {
                    return [e - 1]
                }), eq: c(function (t, e, i) {
                    return [0 > i ? i + e : i]
                }), even: c(function (t, e) {
                    for (var i = 0; e > i; i += 2)t.push(i);
                    return t
                }), odd: c(function (t, e) {
                    for (var i = 1; e > i; i += 2)t.push(i);
                    return t
                }), lt: c(function (t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;)t.push(n);
                    return t
                }), gt: c(function (t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;)t.push(n);
                    return t
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (E in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[E] = r(E);
        for (E in{submit: !0, reset: !0})T.pseudos[E] = l(E);
        return h.prototype = T.filters = T.pseudos, T.setFilters = new h, w = e.tokenize = function (t, i) {
            var n, s, o, a, r, l, c, d = V[t + " "];
            if (d)return i ? 0 : d.slice(0);
            for (r = t, l = [], c = T.preFilter; r;) {
                (!n || (s = ce.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])), n = !1, (s = de.exec(r)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(le, " ")
                }), r = r.slice(n.length));
                for (a in T.filter)!(s = fe[a].exec(r)) || c[a] && !(s = c[a](s)) || (n = s.shift(), o.push({
                    value: n,
                    type: a,
                    matches: s
                }), r = r.slice(n.length));
                if (!n)break
            }
            return i ? r.length : r ? e.error(t) : V(t, l).slice(0)
        }, C = e.compile = function (t, e) {
            var i, n = [], s = [], o = X[t + " "];
            if (!o) {
                for (e || (e = w(t)), i = e.length; i--;)o = b(e[i]), o[B] ? n.push(o) : s.push(o);
                o = X(t, S(s, n)), o.selector = t
            }
            return o
        }, k = e.select = function (t, e, i, n) {
            var s, o, a, r, l, c = "function" == typeof t && t, h = !n && w(t = c.selector || t);
            if (i = i || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && y.getById && 9 === e.nodeType && O && T.relative[o[1].type]) {
                    if (e = (T.find.ID(a.matches[0].replace(ye, Te), e) || [])[0], !e)return i;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (s = fe.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !T.relative[r = a.type]);)if ((l = T.find[r]) && (n = l(a.matches[0].replace(ye, Te), Se.test(o[0].type) && d(e.parentNode) || e))) {
                    if (o.splice(s, 1), t = n.length && u(o), !t)return Z.apply(i, n), i;
                    break
                }
            }
            return (c || C(t, h))(n, e, !O, i, Se.test(t) && d(e.parentNode) || e), i
        }, y.sortStable = B.split("").sort(W).join("") === B, y.detectDuplicates = !!D, I(), y.sortDetached = s(function (t) {
            return 1 & t.compareDocumentPosition(M.createElement("div"))
        }), s(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), y.attributes && s(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), s(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(ie, function (t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    se.find = ce, se.expr = ce.selectors, se.expr[":"] = se.expr.pseudos, se.unique = ce.uniqueSort, se.text = ce.getText, se.isXMLDoc = ce.isXML, se.contains = ce.contains;
    var de = se.expr.match.needsContext, he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ue = /^.[^:#\[\.,]*$/;
    se.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? se.find.matchesSelector(n, t) ? [n] : [] : se.find.matches(t, se.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, se.fn.extend({
        find: function (t) {
            var e, i = [], n = this, s = n.length;
            if ("string" != typeof t)return this.pushStack(se(t).filter(function () {
                for (e = 0; s > e; e++)if (se.contains(n[e], this))return !0
            }));
            for (e = 0; s > e; e++)se.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? se.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        }, filter: function (t) {
            return this.pushStack(n(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(n(this, t || [], !0))
        }, is: function (t) {
            return !!n(this, "string" == typeof t && de.test(t) ? se(t) : t || [], !1).length
        }
    });
    var pe, fe = t.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = se.fn.init = function (t, e) {
        var i, n;
        if (!t)return this;
        if ("string" == typeof t) {
            if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !i || !i[1] && e)return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof se ? e[0] : e, se.merge(this, se.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), he.test(i[1]) && se.isPlainObject(e))for (i in e)se.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if (n = fe.getElementById(i[2]), n && n.parentNode) {
                if (n.id !== i[2])return pe.find(t);
                this.length = 1, this[0] = n
            }
            return this.context = fe, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : se.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(se) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), se.makeArray(t, this))
    };
    ge.prototype = se.fn, pe = se(fe);
    var ve = /^(?:parents|prev(?:Until|All))/, be = {children: !0, contents: !0, next: !0, prev: !0};
    se.extend({
        dir: function (t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !se(s).is(i));)1 === s.nodeType && n.push(s), s = s[e];
            return n
        }, sibling: function (t, e) {
            for (var i = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), se.fn.extend({
        has: function (t) {
            var e, i = se(t, this), n = i.length;
            return this.filter(function () {
                for (e = 0; n > e; e++)if (se.contains(this, i[e]))return !0
            })
        }, closest: function (t, e) {
            for (var i, n = 0, s = this.length, o = [], a = de.test(t) || "string" != typeof t ? se(t, e || this.context) : 0; s > n; n++)for (i = this[n]; i && i !== e; i = i.parentNode)if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && se.find.matchesSelector(i, t))) {
                o.push(i);
                break
            }
            return this.pushStack(o.length > 1 ? se.unique(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? se.inArray(this[0], se(t)) : se.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(se.unique(se.merge(this.get(), se(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), se.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return se.dir(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return se.dir(t, "parentNode", i)
        }, next: function (t) {
            return s(t, "nextSibling")
        }, prev: function (t) {
            return s(t, "previousSibling")
        }, nextAll: function (t) {
            return se.dir(t, "nextSibling")
        }, prevAll: function (t) {
            return se.dir(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return se.dir(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return se.dir(t, "previousSibling", i)
        }, siblings: function (t) {
            return se.sibling((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return se.sibling(t.firstChild)
        }, contents: function (t) {
            return se.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : se.merge([], t.childNodes)
        }
    }, function (t, e) {
        se.fn[t] = function (i, n) {
            var s = se.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = se.filter(n, s)), this.length > 1 && (be[t] || (s = se.unique(s)), ve.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var Se = /\S+/g, Ee = {};
    se.Callbacks = function (t) {
        t = "string" == typeof t ? Ee[t] || o(t) : se.extend({}, t);
        var e, i, n, s, a, r, l = [], c = !t.once && [], d = function (o) {
            for (i = t.memory && o, n = !0, a = r || 0, r = 0, s = l.length, e = !0; l && s > a; a++)if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                i = !1;
                break
            }
            e = !1, l && (c ? c.length && d(c.shift()) : i ? l = [] : h.disable())
        }, h = {
            add: function () {
                if (l) {
                    var n = l.length;
                    !function o(e) {
                        se.each(e, function (e, i) {
                            var n = se.type(i);
                            "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                        })
                    }(arguments), e ? s = l.length : i && (r = n, d(i))
                }
                return this
            }, remove: function () {
                return l && se.each(arguments, function (t, i) {
                    for (var n; (n = se.inArray(i, l, n)) > -1;)l.splice(n, 1), e && (s >= n && s--, a >= n && a--)
                }), this
            }, has: function (t) {
                return t ? se.inArray(t, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], s = 0, this
            }, disable: function () {
                return l = c = i = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return c = void 0, i || h.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (t, i) {
                return !l || n && !c || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? c.push(i) : d(i)), this
            }, fire: function () {
                return h.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return h
    }, se.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", se.Callbacks("once memory"), "resolved"], ["reject", "fail", se.Callbacks("once memory"), "rejected"], ["notify", "progress", se.Callbacks("memory")]], i = "pending", n = {
                state: function () {
                    return i
                }, always: function () {
                    return s.done(arguments).fail(arguments), this
                }, then: function () {
                    var t = arguments;
                    return se.Deferred(function (i) {
                        se.each(e, function (e, o) {
                            var a = se.isFunction(t[e]) && t[e];
                            s[o[1]](function () {
                                var t = a && a.apply(this, arguments);
                                t && se.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, promise: function (t) {
                    return null != t ? se.extend(t, n) : n
                }
            }, s = {};
            return n.pipe = n.then, se.each(e, function (t, o) {
                var a = o[2], r = o[3];
                n[o[1]] = a.add, r && a.add(function () {
                    i = r
                }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function () {
                    return s[o[0] + "With"](this === s ? n : this, arguments), this
                }, s[o[0] + "With"] = a.fireWith
            }), n.promise(s), t && t.call(s, s), s
        }, when: function (t) {
            var e, i, n, s = 0, o = J.call(arguments), a = o.length, r = 1 !== a || t && se.isFunction(t.promise) ? a : 0, l = 1 === r ? t : se.Deferred(), c = function (t, i, n) {
                return function (s) {
                    i[t] = this, n[t] = arguments.length > 1 ? J.call(arguments) : s, n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
                }
            };
            if (a > 1)for (e = new Array(a), i = new Array(a), n = new Array(a); a > s; s++)o[s] && se.isFunction(o[s].promise) ? o[s].promise().done(c(s, n, o)).fail(l.reject).progress(c(s, i, e)) : --r;
            return r || l.resolveWith(n, o), l.promise()
        }
    });
    var ye;
    se.fn.ready = function (t) {
        return se.ready.promise().done(t), this
    }, se.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? se.readyWait++ : se.ready(!0)
        }, ready: function (t) {
            if (t === !0 ? !--se.readyWait : !se.isReady) {
                if (!fe.body)return setTimeout(se.ready);
                se.isReady = !0, t !== !0 && --se.readyWait > 0 || (ye.resolveWith(fe, [se]), se.fn.triggerHandler && (se(fe).triggerHandler("ready"), se(fe).off("ready")))
            }
        }
    }), se.ready.promise = function (e) {
        if (!ye)if (ye = se.Deferred(), "complete" === fe.readyState)setTimeout(se.ready); else if (fe.addEventListener)fe.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1); else {
            fe.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
            var i = !1;
            try {
                i = null == t.frameElement && fe.documentElement
            } catch (n) {
            }
            i && i.doScroll && !function s() {
                if (!se.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(s, 50)
                    }
                    a(), se.ready()
                }
            }()
        }
        return ye.promise(e)
    };
    var Te, Le = "undefined";
    for (Te in se(ie))break;
    ie.ownLast = "0" !== Te, ie.inlineBlockNeedsLayout = !1, se(function () {
        var t, e, i, n;
        i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Le && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
    }), function () {
        var t = fe.createElement("div");
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ie.deleteExpando = !1
            }
        }
        t = null
    }(), se.acceptData = function (t) {
        var e = se.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
        return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, we = /([A-Z])/g;
    se.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (t) {
            return t = t.nodeType ? se.cache[t[se.expando]] : t[se.expando], !!t && !c(t)
        },
        data: function (t, e, i) {
            return d(t, e, i)
        },
        removeData: function (t, e) {
            return h(t, e)
        },
        _data: function (t, e, i) {
            return d(t, e, i, !0)
        },
        _removeData: function (t, e) {
            return h(t, e, !0)
        }
    }), se.fn.extend({
        data: function (t, e) {
            var i, n, s, o = this[0], a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = se.data(o), 1 === o.nodeType && !se._data(o, "parsedAttrs"))) {
                    for (i = a.length; i--;)a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = se.camelCase(n.slice(5)), l(o, n, s[n])));
                    se._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function () {
                se.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                se.data(this, t, e)
            }) : o ? l(o, t, se.data(o, t)) : void 0
        }, removeData: function (t) {
            return this.each(function () {
                se.removeData(this, t)
            })
        }
    }), se.extend({
        queue: function (t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = se._data(t, e), i && (!n || se.isArray(i) ? n = se._data(t, e, se.makeArray(i)) : n.push(i)), n || []) : void 0
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = se.queue(t, e), n = i.length, s = i.shift(), o = se._queueHooks(t, e), a = function () {
                se.dequeue(t, e)
            };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return se._data(t, i) || se._data(t, i, {
                    empty: se.Callbacks("once memory").add(function () {
                        se._removeData(t, e + "queue"), se._removeData(t, i)
                    })
                })
        }
    }), se.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? se.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = se.queue(this, t, e);
                se._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && se.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                se.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, s = se.Deferred(), o = this, a = this.length, r = function () {
                --n || s.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)i = se._data(o[a], t + "queueHooks"), i && i.empty && (n++, i.empty.add(r));
            return r(), s.promise(e)
        }
    });
    var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ke = ["Top", "Right", "Bottom", "Left"], Ae = function (t, e) {
        return t = e || t, "none" === se.css(t, "display") || !se.contains(t.ownerDocument, t)
    }, xe = se.access = function (t, e, i, n, s, o, a) {
        var r = 0, l = t.length, c = null == i;
        if ("object" === se.type(i)) {
            s = !0;
            for (r in i)se.access(t, e, r, i[r], !0, o, a)
        } else if (void 0 !== n && (s = !0, se.isFunction(n) || (a = !0), c && (a ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
                return c.call(se(t), i)
            })), e))for (; l > r; r++)e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
        return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
    }, De = /^(?:checkbox|radio)$/i;
    !function () {
        var t = fe.createElement("input"), e = fe.createElement("div"), i = fe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                ie.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }(), function () {
        var e, i, n = fe.createElement("div");
        for (e in{
            submit: !0,
            change: !0,
            focusin: !0
        })i = "on" + e, (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Ie = /^(?:input|select|textarea)$/i, Me = /^key/, Re = /^(?:mouse|pointer|contextmenu)|click/, Oe = /^(?:focusinfocus|focusoutblur)$/, Ne = /^([^.]*)(?:\.(.+)|)$/;
    se.event = {
        global: {},
        add: function (t, e, i, n, s) {
            var o, a, r, l, c, d, h, u, p, f, m, g = se._data(t);
            if (g) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = se.guid++), (a = g.events) || (a = g.events = {}), (d = g.handle) || (d = g.handle = function (t) {
                    return typeof se === Le || t && se.event.triggered === t.type ? void 0 : se.event.dispatch.apply(d.elem, arguments)
                }, d.elem = t), e = (e || "").match(Se) || [""], r = e.length; r--;)o = Ne.exec(e[r]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (c = se.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = se.event.special[p] || {}, h = se.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && se.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, l), (u = a[p]) || (u = a[p] = [], u.delegateCount = 0, c.setup && c.setup.call(t, n, f, d) !== !1 || (t.addEventListener ? t.addEventListener(p, d, !1) : t.attachEvent && t.attachEvent("on" + p, d))), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? u.splice(u.delegateCount++, 0, h) : u.push(h), se.event.global[p] = !0);
                t = null
            }
        },
        remove: function (t, e, i, n, s) {
            var o, a, r, l, c, d, h, u, p, f, m, g = se.hasData(t) && se._data(t);
            if (g && (d = g.events)) {
                for (e = (e || "").match(Se) || [""], c = e.length; c--;)if (r = Ne.exec(e[c]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
                    for (h = se.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, u = d[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = u.length; o--;)a = u[o], !s && m !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (u.splice(o, 1), a.selector && u.delegateCount--, h.remove && h.remove.call(t, a));
                    l && !u.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || se.removeEvent(t, p, g.handle), delete d[p])
                } else for (p in d)se.event.remove(t, p + e[c], i, n, !0);
                se.isEmptyObject(d) && (delete g.handle, se._removeData(t, "events"))
            }
        },
        trigger: function (e, i, n, s) {
            var o, a, r, l, c, d, h, u = [n || fe], p = ee.call(e, "type") ? e.type : e, f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = d = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !Oe.test(p + se.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[se.expando] ? e : new se.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : se.makeArray(i, [e]), c = se.event.special[p] || {}, s || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                if (!s && !c.noBubble && !se.isWindow(n)) {
                    for (l = c.delegateType || p, Oe.test(l + p) || (r = r.parentNode); r; r = r.parentNode)u.push(r), d = r;
                    d === (n.ownerDocument || fe) && u.push(d.defaultView || d.parentWindow || t)
                }
                for (h = 0; (r = u[h++]) && !e.isPropagationStopped();)e.type = h > 1 ? l : c.bindType || p, o = (se._data(r, "events") || {})[e.type] && se._data(r, "handle"), o && o.apply(r, i), o = a && r[a], o && o.apply && se.acceptData(r) && (e.result = o.apply(r, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !s && !e.isDefaultPrevented() && (!c._default || c._default.apply(u.pop(), i) === !1) && se.acceptData(n) && a && n[p] && !se.isWindow(n)) {
                    d = n[a], d && (n[a] = null), se.event.triggered = p;
                    try {
                        n[p]()
                    } catch (m) {
                    }
                    se.event.triggered = void 0, d && (n[a] = d)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = se.event.fix(t);
            var e, i, n, s, o, a = [], r = J.call(arguments), l = (se._data(this, "events") || {})[t.type] || [], c = se.event.special[t.type] || {};
            if (r[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (a = se.event.handlers.call(this, t, l), e = 0; (s = a[e++]) && !t.isPropagationStopped();)for (t.currentTarget = s.elem, o = 0; (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((se.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, r), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var i, n, s, o, a = [], r = e.delegateCount, l = t.target;
            if (r && l.nodeType && (!t.button || "click" !== t.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                for (s = [], o = 0; r > o; o++)n = e[o], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? se(i, this).index(l) >= 0 : se.find(i, this, null, [l]).length), s[i] && s.push(n);
                s.length && a.push({elem: l, handlers: s})
            }
            return r < e.length && a.push({elem: this, handlers: e.slice(r)}), a
        },
        fix: function (t) {
            if (t[se.expando])return t;
            var e, i, n, s = t.type, o = t, a = this.fixHooks[s];
            for (a || (this.fixHooks[s] = a = Re.test(s) ? this.mouseHooks : Me.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new se.Event(o), e = n.length; e--;)i = n[e], t[i] = o[i];
            return t.target || (t.target = o.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var i, n, s, o = e.button, a = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || fe, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== f() && this.focus)try {
                        return this.focus(), !1
                    } catch (t) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return se.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (t) {
                    return se.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, i, n) {
            var s = se.extend(new se.Event, i, {type: t, isSimulated: !0, originalEvent: {}});
            n ? se.event.trigger(s, null, e) : se.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, se.removeEvent = fe.removeEventListener ? function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function (t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === Le && (t[n] = null), t.detachEvent(n, i))
    }, se.Event = function (t, e) {
        return this instanceof se.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : p) : this.type = t, e && se.extend(this, e), this.timeStamp = t && t.timeStamp || se.now(), void(this[se.expando] = !0)) : new se.Event(t, e)
    }, se.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = u, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = u, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, se.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        se.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = this, s = t.relatedTarget, o = t.handleObj;
                return (!s || s !== n && !se.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ie.submitBubbles || (se.event.special.submit = {
        setup: function () {
            return se.nodeName(this, "form") ? !1 : void se.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target, i = se.nodeName(e, "input") || se.nodeName(e, "button") ? e.form : void 0;
                i && !se._data(i, "submitBubbles") && (se.event.add(i, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), se._data(i, "submitBubbles", !0))
            })
        }, postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && se.event.simulate("submit", this.parentNode, t, !0))
        }, teardown: function () {
            return se.nodeName(this, "form") ? !1 : void se.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (se.event.special.change = {
        setup: function () {
            return Ie.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (se.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), se.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), se.event.simulate("change", this, t, !0)
            })), !1) : void se.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Ie.test(e.nodeName) && !se._data(e, "changeBubbles") && (se.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || se.event.simulate("change", this.parentNode, t, !0)
                }), se._data(e, "changeBubbles", !0))
            })
        }, handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return se.event.remove(this, "._change"), !Ie.test(this.nodeName)
        }
    }), ie.focusinBubbles || se.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            se.event.simulate(e, t.target, se.event.fix(t), !0)
        };
        se.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this, s = se._data(n, e);
                s || n.addEventListener(t, i, !0), se._data(n, e, (s || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, s = se._data(n, e) - 1;
                s ? se._data(n, e, s) : (n.removeEventListener(t, i, !0), se._removeData(n, e))
            }
        }
    }), se.fn.extend({
        on: function (t, e, i, n, s) {
            var o, a;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (o in t)this.on(o, e, i, t[o], s);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1)n = p; else if (!n)return this;
            return 1 === s && (a = n, n = function (t) {
                return se().off(t), a.apply(this, arguments)
            }, n.guid = a.guid || (a.guid = se.guid++)), this.each(function () {
                se.event.add(this, t, n, i, e)
            })
        }, one: function (t, e, i, n) {
            return this.on(t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj)return n = t.handleObj, se(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t)this.off(s, e, t[s]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function () {
                se.event.remove(this, t, i, e)
            })
        }, trigger: function (t, e) {
            return this.each(function () {
                se.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            return i ? se.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", $e = / jQuery\d+="(?:null|\d+)"/g, Ue = new RegExp("<(?:" + Pe + ")[\\s/>]", "i"), Be = /^\s+/, Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, je = /<([\w:]+)/, He = /<tbody/i, ze = /<|&#?\w+;/, Ve = /<(?:script|style|link)/i, Xe = /checked\s*(?:[^=]|=\s*.checked.)/i, We = /^$|\/(?:java|ecma)script/i, Ye = /^true\/(.*)/, Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Je = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, Ke = m(fe), qe = Ke.appendChild(fe.createElement("div"));
    Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td, se.extend({
        clone: function (t, e, i) {
            var n, s, o, a, r, l = se.contains(t.ownerDocument, t);
            if (ie.html5Clone || se.isXMLDoc(t) || !Ue.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (qe.innerHTML = t.outerHTML, qe.removeChild(o = qe.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || se.isXMLDoc(t)))for (n = g(o), r = g(t), a = 0; null != (s = r[a]); ++a)n[a] && L(s, n[a]);
            if (e)if (i)for (r = r || g(t), n = n || g(o), a = 0; null != (s = r[a]); a++)T(s, n[a]); else T(t, o);
            return n = g(o, "script"), n.length > 0 && y(n, !l && g(t, "script")), n = r = s = null, o
        }, buildFragment: function (t, e, i, n) {
            for (var s, o, a, r, l, c, d, h = t.length, u = m(e), p = [], f = 0; h > f; f++)if (o = t[f], o || 0 === o)if ("object" === se.type(o))se.merge(p, o.nodeType ? [o] : o); else if (ze.test(o)) {
                for (r = r || u.appendChild(e.createElement("div")), l = (je.exec(o) || ["", ""])[1].toLowerCase(), d = Je[l] || Je._default, r.innerHTML = d[1] + o.replace(Fe, "<$1></$2>") + d[2], s = d[0]; s--;)r = r.lastChild;
                if (!ie.leadingWhitespace && Be.test(o) && p.push(e.createTextNode(Be.exec(o)[0])), !ie.tbody)for (o = "table" !== l || He.test(o) ? "<table>" !== d[1] || He.test(o) ? 0 : r : r.firstChild, s = o && o.childNodes.length; s--;)se.nodeName(c = o.childNodes[s], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (se.merge(p, r.childNodes), r.textContent = ""; r.firstChild;)r.removeChild(r.firstChild);
                r = u.lastChild
            } else p.push(e.createTextNode(o));
            for (r && u.removeChild(r), ie.appendChecked || se.grep(g(p, "input"), v), f = 0; o = p[f++];)if ((!n || -1 === se.inArray(o, n)) && (a = se.contains(o.ownerDocument, o), r = g(u.appendChild(o), "script"), a && y(r), i))for (s = 0; o = r[s++];)We.test(o.type || "") && i.push(o);
            return r = null, u
        }, cleanData: function (t, e) {
            for (var i, n, s, o, a = 0, r = se.expando, l = se.cache, c = ie.deleteExpando, d = se.event.special; null != (i = t[a]); a++)if ((e || se.acceptData(i)) && (s = i[r], o = s && l[s])) {
                if (o.events)for (n in o.events)d[n] ? se.event.remove(i, n) : se.removeEvent(i, n, o.handle);
                l[s] && (delete l[s], c ? delete i[r] : typeof i.removeAttribute !== Le ? i.removeAttribute(r) : i[r] = null, G.push(s))
            }
        }
    }), se.fn.extend({
        text: function (t) {
            return xe(this, function (t) {
                return void 0 === t ? se.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
            }, null, t, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = b(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = b(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, remove: function (t, e) {
            for (var i, n = t ? se.filter(t, this) : this, s = 0; null != (i = n[s]); s++)e || 1 !== i.nodeType || se.cleanData(g(i)), i.parentNode && (e && se.contains(i.ownerDocument, i) && y(g(i, "script")), i.parentNode.removeChild(i));
            return this
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && se.cleanData(g(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                t.options && se.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        }, clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return se.clone(this, t, e)
            })
        }, html: function (t) {
            return xe(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace($e, "") : void 0;
                if (!("string" != typeof t || Ve.test(t) || !ie.htmlSerialize && Ue.test(t) || !ie.leadingWhitespace && Be.test(t) || Je[(je.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Fe, "<$1></$2>");
                    try {
                        for (; n > i; i++)e = this[i] || {}, 1 === e.nodeType && (se.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (s) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, se.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        }, detach: function (t) {
            return this.remove(t, !0)
        }, domManip: function (t, e) {
            t = K.apply([], t);
            var i, n, s, o, a, r, l = 0, c = this.length, d = this, h = c - 1, u = t[0], p = se.isFunction(u);
            if (p || c > 1 && "string" == typeof u && !ie.checkClone && Xe.test(u))return this.each(function (i) {
                var n = d.eq(i);
                p && (t[0] = u.call(this, i, n.html())), n.domManip(t, e)
            });
            if (c && (r = se.buildFragment(t, this[0].ownerDocument, !1, this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                for (o = se.map(g(r, "script"), S), s = o.length; c > l; l++)n = r, l !== h && (n = se.clone(n, !0, !0), s && se.merge(o, g(n, "script"))), e.call(this[l], n, l);
                if (s)for (a = o[o.length - 1].ownerDocument, se.map(o, E), l = 0; s > l; l++)n = o[l], We.test(n.type || "") && !se._data(n, "globalEval") && se.contains(a, n) && (n.src ? se._evalUrl && se._evalUrl(n.src) : se.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ge, "")));
                r = i = null
            }
            return this
        }
    }), se.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        se.fn[t] = function (t) {
            for (var i, n = 0, s = [], o = se(t), a = o.length - 1; a >= n; n++)i = n === a ? this : this.clone(!0), se(o[n])[e](i), q.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var Qe, Ze = {};
    !function () {
        var t;
        ie.shrinkWrapBlocks = function () {
            if (null != t)return t;
            t = !1;
            var e, i, n;
            return i = fe.getElementsByTagName("body")[0], i && i.style ? (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Le && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    }();
    var ti, ei, ii = /^margin/, ni = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"), si = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ti = function (t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }, ei = function (t, e, i) {
        var n, s, o, a, r = t.style;
        return i = i || ti(t), a = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== a || se.contains(t.ownerDocument, t) || (a = se.style(t, e)), ni.test(a) && ii.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 === a ? a : a + ""
    }) : fe.documentElement.currentStyle && (ti = function (t) {
        return t.currentStyle
    }, ei = function (t, e, i) {
        var n, s, o, a, r = t.style;
        return i = i || ti(t), a = i ? i[e] : void 0, null == a && r && r[e] && (a = r[e]), ni.test(a) && !si.test(e) && (n = r.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : a, a = r.pixelLeft + "px", r.left = n, o && (s.left = o)), void 0 === a ? a : a + "" || "auto"
    }), function () {
        function e() {
            var e, i, n, s;
            i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, s = e.appendChild(fe.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === s[0].offsetHeight, r && (s[0].style.display = "", s[1].style.display = "none", r = 0 === s[0].offsetHeight), i.removeChild(n))
        }

        var i, n, s, o, a, r, l;
        i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = i.getElementsByTagName("a")[0], n = s && s.style, n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, se.extend(ie, {
            reliableHiddenOffsets: function () {
                return null == r && e(), r
            }, boxSizingReliable: function () {
                return null == a && e(), a
            }, pixelPosition: function () {
                return null == o && e(), o
            }, reliableMarginRight: function () {
                return null == l && e(), l
            }
        }))
    }(), se.swap = function (t, e, i, n) {
        var s, o, a = {};
        for (o in e)a[o] = t.style[o], t.style[o] = e[o];
        s = i.apply(t, n || []);
        for (o in e)t.style[o] = a[o];
        return s
    };
    var oi = /alpha\([^)]*\)/i, ai = /opacity\s*=\s*([^)]*)/, ri = /^(none|table(?!-c[ea]).+)/, li = new RegExp("^(" + Ce + ")(.*)$", "i"), ci = new RegExp("^([+-])=(" + Ce + ")", "i"), di = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, hi = {letterSpacing: "0", fontWeight: "400"}, ui = ["Webkit", "O", "Moz", "ms"];
    se.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = ei(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": ie.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, a, r = se.camelCase(e), l = t.style;
                if (e = se.cssProps[r] || (se.cssProps[r] = k(l, r)), a = se.cssHooks[e] || se.cssHooks[r], void 0 === i)return a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e];
                if (o = typeof i, "string" === o && (s = ci.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(se.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || se.cssNumber[r] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (i = a.set(t, i, n)))))try {
                    l[e] = i
                } catch (c) {
                }
            }
        },
        css: function (t, e, i, n) {
            var s, o, a, r = se.camelCase(e);
            return e = se.cssProps[r] || (se.cssProps[r] = k(t.style, r)), a = se.cssHooks[e] || se.cssHooks[r], a && "get" in a && (o = a.get(t, !0, i)), void 0 === o && (o = ei(t, e, n)), "normal" === o && e in hi && (o = hi[e]), "" === i || i ? (s = parseFloat(o), i === !0 || se.isNumeric(s) ? s || 0 : o) : o
        }
    }), se.each(["height", "width"], function (t, e) {
        se.cssHooks[e] = {
            get: function (t, i, n) {
                return i ? ri.test(se.css(t, "display")) && 0 === t.offsetWidth ? se.swap(t, di, function () {
                    return I(t, e, n)
                }) : I(t, e, n) : void 0
            }, set: function (t, i, n) {
                var s = n && ti(t);
                return x(t, i, n ? D(t, e, n, ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), ie.opacity || (se.cssHooks.opacity = {
        get: function (t, e) {
            return ai.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        }, set: function (t, e) {
            var i = t.style, n = t.currentStyle, s = se.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === se.trim(o.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oi.test(o) ? o.replace(oi, s) : o + " " + s)
        }
    }), se.cssHooks.marginRight = C(ie.reliableMarginRight, function (t, e) {
        return e ? se.swap(t, {display: "inline-block"}, ei, [t, "marginRight"]) : void 0
    }), se.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        se.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)s[t + ke[n] + e] = o[n] || o[n - 2] || o[0];
                return s
            }
        }, ii.test(t) || (se.cssHooks[t + e].set = x)
    }), se.fn.extend({
        css: function (t, e) {
            return xe(this, function (t, e, i) {
                var n, s, o = {}, a = 0;
                if (se.isArray(e)) {
                    for (n = ti(t), s = e.length; s > a; a++)o[e[a]] = se.css(t, e[a], !1, n);
                    return o
                }
                return void 0 !== i ? se.style(t, e, i) : se.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function () {
            return A(this, !0)
        }, hide: function () {
            return A(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ae(this) ? se(this).show() : se(this).hide()
            })
        }
    }), se.Tween = M, M.prototype = {
        constructor: M, init: function (t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (se.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = M.propHooks[this.prop];
            return t && t.get ? t.get(this) : M.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = M.propHooks[this.prop];
            return this.pos = e = this.options.duration ? se.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = se.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            }, set: function (t) {
                se.fx.step[t.prop] ? se.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[se.cssProps[t.prop]] || se.cssHooks[t.prop]) ? se.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, se.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, se.fx = M.prototype.init, se.fx.step = {};
    var pi, fi, mi = /^(?:toggle|show|hide)$/, gi = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"), vi = /queueHooks$/, bi = [P], Si = {
        "*": [function (t, e) {
            var i = this.createTween(t, e), n = i.cur(), s = gi.exec(e), o = s && s[3] || (se.cssNumber[t] ? "" : "px"), a = (se.cssNumber[t] || "px" !== o && +n) && gi.exec(se.css(i.elem, t)), r = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], s = s || [], a = +n || 1;
                do r = r || ".5", a /= r, se.style(i.elem, t, a + o); while (r !== (r = i.cur() / n) && 1 !== r && --l)
            }
            return s && (a = i.start = +a || +n || 0, i.unit = o, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), i
        }]
    };
    se.Animation = se.extend(U, {
        tweener: function (t, e) {
            se.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, s = t.length; s > n; n++)i = t[n], Si[i] = Si[i] || [], Si[i].unshift(e)
        }, prefilter: function (t, e) {
            e ? bi.unshift(t) : bi.push(t)
        }
    }), se.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? se.extend({}, t) : {
            complete: i || !i && e || se.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !se.isFunction(e) && e
        };
        return n.duration = se.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in se.fx.speeds ? se.fx.speeds[n.duration] : se.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            se.isFunction(n.old) && n.old.call(this), n.queue && se.dequeue(this, n.queue)
        }, n
    }, se.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(Ae).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var s = se.isEmptyObject(t), o = se.speed(e, i, n), a = function () {
                var e = U(this, se.extend({}, t), o);
                (s || se._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, s = null != t && t + "queueHooks", o = se.timers, a = se._data(this);
                if (s)a[s] && a[s].stop && n(a[s]); else for (s in a)a[s] && a[s].stop && vi.test(s) && n(a[s]);
                for (s = o.length; s--;)o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                (e || !i) && se.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, i = se._data(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = se.timers, a = n ? n.length : 0;
                for (i.finish = !0, se.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; a > e; e++)n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), se.each(["toggle", "show", "hide"], function (t, e) {
        var i = se.fn[e];
        se.fn[e] = function (t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(O(e, !0), t, n, s)
        }
    }), se.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        se.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), se.timers = [], se.fx.tick = function () {
        var t, e = se.timers, i = 0;
        for (pi = se.now(); i < e.length; i++)t = e[i], t() || e[i] !== t || e.splice(i--, 1);
        e.length || se.fx.stop(), pi = void 0
    }, se.fx.timer = function (t) {
        se.timers.push(t), t() ? se.fx.start() : se.timers.pop()
    }, se.fx.interval = 13, se.fx.start = function () {
        fi || (fi = setInterval(se.fx.tick, se.fx.interval))
    }, se.fx.stop = function () {
        clearInterval(fi), fi = null
    }, se.fx.speeds = {slow: 600, fast: 200, _default: 400}, se.fn.delay = function (t, e) {
        return t = se.fx ? se.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
            var n = setTimeout(e, t);
            i.stop = function () {
                clearTimeout(n)
            }
        })
    }, function () {
        var t, e, i, n, s;
        e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = fe.createElement("select"), s = i.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== e.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = s.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !s.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value
    }();
    var Ei = /\r/g;
    se.fn.extend({
        val: function (t) {
            var e, i, n, s = this[0];
            {
                if (arguments.length)return n = se.isFunction(t), this.each(function (i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, se(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : se.isArray(s) && (s = se.map(s, function (t) {
                        return null == t ? "" : t + ""
                    })), e = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                });
                if (s)return e = se.valHooks[s.type] || se.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(Ei, "") : null == i ? "" : i)
            }
        }
    }), se.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = se.find.attr(t, "value");
                    return null != e ? e : se.trim(se.text(t))
                }
            }, select: {
                get: function (t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, a = o ? null : [], r = o ? s + 1 : n.length, l = 0 > s ? r : o ? s : 0; r > l; l++)if (i = n[l], !(!i.selected && l !== s || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && se.nodeName(i.parentNode, "optgroup"))) {
                        if (e = se(i).val(), o)return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var i, n, s = t.options, o = se.makeArray(e), a = s.length; a--;)if (n = s[a], se.inArray(se.valHooks.option.get(n), o) >= 0)try {
                        n.selected = i = !0
                    } catch (r) {
                        n.scrollHeight
                    } else n.selected = !1;
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), se.each(["radio", "checkbox"], function () {
        se.valHooks[this] = {
            set: function (t, e) {
                return se.isArray(e) ? t.checked = se.inArray(se(t).val(), e) >= 0 : void 0
            }
        }, ie.checkOn || (se.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var yi, Ti, Li = se.expr.attrHandle, _i = /^(?:checked|selected)$/i, wi = ie.getSetAttribute, Ci = ie.input;
    se.fn.extend({
        attr: function (t, e) {
            return xe(this, se.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                se.removeAttr(this, t)
            })
        }
    }), se.extend({
        attr: function (t, e, i) {
            var n, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o)return typeof t.getAttribute === Le ? se.prop(t, e, i) : (1 === o && se.isXMLDoc(t) || (e = e.toLowerCase(), n = se.attrHooks[e] || (se.expr.match.bool.test(e) ? Ti : yi)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = se.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void se.removeAttr(t, e))
        }, removeAttr: function (t, e) {
            var i, n, s = 0, o = e && e.match(Se);
            if (o && 1 === t.nodeType)for (; i = o[s++];)n = se.propFix[i] || i, se.expr.match.bool.test(i) ? Ci && wi || !_i.test(i) ? t[n] = !1 : t[se.camelCase("default-" + i)] = t[n] = !1 : se.attr(t, i, ""), t.removeAttribute(wi ? i : n)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ie.radioValue && "radio" === e && se.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), Ti = {
        set: function (t, e, i) {
            return e === !1 ? se.removeAttr(t, i) : Ci && wi || !_i.test(i) ? t.setAttribute(!wi && se.propFix[i] || i, i) : t[se.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, se.each(se.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = Li[e] || se.find.attr;
        Li[e] = Ci && wi || !_i.test(e) ? function (t, e, n) {
            var s, o;
            return n || (o = Li[e], Li[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Li[e] = o), s
        } : function (t, e, i) {
            return i ? void 0 : t[se.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ci && wi || (se.attrHooks.value = {
        set: function (t, e, i) {
            return se.nodeName(t, "input") ? void(t.defaultValue = e) : yi && yi.set(t, e, i)
        }
    }), wi || (yi = {
        set: function (t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    }, Li.id = Li.name = Li.coords = function (t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, se.valHooks.button = {
        get: function (t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        }, set: yi.set
    }, se.attrHooks.contenteditable = {
        set: function (t, e, i) {
            yi.set(t, "" === e ? !1 : e, i)
        }
    }, se.each(["width", "height"], function (t, e) {
        se.attrHooks[e] = {
            set: function (t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })), ie.style || (se.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || void 0
        }, set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var ki = /^(?:input|select|textarea|button|object)$/i, Ai = /^(?:a|area)$/i;
    se.fn.extend({
        prop: function (t, e) {
            return xe(this, se.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return t = se.propFix[t] || t, this.each(function () {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {
                }
            })
        }
    }), se.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, i) {
            var n, s, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a || !se.isXMLDoc(t), o && (e = se.propFix[e] || e, s = se.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = se.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ki.test(t.nodeName) || Ai.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || se.each(["href", "src"], function (t, e) {
        se.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ie.optSelected || (se.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        se.propFix[this.toLowerCase()] = this
    }), ie.enctype || (se.propFix.enctype = "encoding");
    var xi = /[\t\r\n\f]/g;
    se.fn.extend({
        addClass: function (t) {
            var e, i, n, s, o, a, r = 0, l = this.length, c = "string" == typeof t && t;
            if (se.isFunction(t))return this.each(function (e) {
                se(this).addClass(t.call(this, e, this.className))
            });
            if (c)for (e = (t || "").match(Se) || []; l > r; r++)if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(xi, " ") : " ")) {
                for (o = 0; s = e[o++];)n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                a = se.trim(n), i.className !== a && (i.className = a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, s, o, a, r = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
            if (se.isFunction(t))return this.each(function (e) {
                se(this).removeClass(t.call(this, e, this.className))
            });
            if (c)for (e = (t || "").match(Se) || []; l > r; r++)if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(xi, " ") : "")) {
                for (o = 0; s = e[o++];)for (; n.indexOf(" " + s + " ") >= 0;)n = n.replace(" " + s + " ", " ");
                a = t ? se.trim(n) : "", i.className !== a && (i.className = a)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(se.isFunction(t) ? function (i) {
                se(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function () {
                if ("string" === i)for (var e, n = 0, s = se(this), o = t.match(Se) || []; e = o[n++];)s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else(i === Le || "boolean" === i) && (this.className && se._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : se._data(this, "__className__") || "")
            })
        }, hasClass: function (t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(xi, " ").indexOf(e) >= 0)return !0;
            return !1
        }
    }), se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        se.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), se.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }, bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Di = se.now(), Ii = /\?/, Mi = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    se.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
        var i, n = null, s = se.trim(e + "");
        return s && !se.trim(s.replace(Mi, function (t, e, s, o) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "")
        })) ? Function("return " + s)() : se.error("Invalid JSON: " + e)
    }, se.parseXML = function (e) {
        var i, n;
        if (!e || "string" != typeof e)return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (s) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + e), i
    };
    var Ri, Oi, Ni = /#.*$/, Pi = /([?&])_=[^&]*/, $i = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ui = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bi = /^(?:GET|HEAD)$/, Fi = /^\/\//, ji = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hi = {}, zi = {}, Vi = "*/".concat("*");
    try {
        Oi = location.href
    } catch (Xi) {
        Oi = fe.createElement("a"), Oi.href = "", Oi = Oi.href
    }
    Ri = ji.exec(Oi.toLowerCase()) || [], se.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Oi,
            type: "GET",
            isLocal: Ui.test(Ri[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": se.parseJSON, "text xml": se.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? j(j(t, se.ajaxSettings), e) : j(se.ajaxSettings, t)
        },
        ajaxPrefilter: B(Hi),
        ajaxTransport: B(zi),
        ajax: function (t, e) {
            function i(t, e, i, n) {
                var s, d, v, b, E, T = e;
                2 !== S && (S = 2, r && clearTimeout(r), c = void 0, a = n || "", y.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (b = H(h, y, i)), b = z(h, b, y, s), s ? (h.ifModified && (E = y.getResponseHeader("Last-Modified"), E && (se.lastModified[o] = E), E = y.getResponseHeader("etag"), E && (se.etag[o] = E)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, v = b.error, s = !v)) : (v = T, (t || !T) && (T = "error", 0 > t && (t = 0))), y.status = t, y.statusText = (e || T) + "", s ? f.resolveWith(u, [d, T, y]) : f.rejectWith(u, [y, T, v]), y.statusCode(g), g = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [y, h, s ? d : v]), m.fireWith(u, [y, T]), l && (p.trigger("ajaxComplete", [y, h]), --se.active || se.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, s, o, a, r, l, c, d, h = se.ajaxSetup({}, e), u = h.context || h, p = h.context && (u.nodeType || u.jquery) ? se(u) : se.event, f = se.Deferred(), m = se.Callbacks("once memory"), g = h.statusCode || {}, v = {}, b = {}, S = 0, E = "canceled", y = {
                readyState: 0,
                getResponseHeader: function (t) {
                    var e;
                    if (2 === S) {
                        if (!d)for (d = {}; e = $i.exec(a);)d[e[1].toLowerCase()] = e[2];
                        e = d[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function () {
                    return 2 === S ? a : null
                },
                setRequestHeader: function (t, e) {
                    var i = t.toLowerCase();
                    return S || (t = b[i] = b[i] || t, v[t] = e), this
                },
                overrideMimeType: function (t) {
                    return S || (h.mimeType = t), this
                },
                statusCode: function (t) {
                    var e;
                    if (t)if (2 > S)for (e in t)g[e] = [g[e], t[e]]; else y.always(t[y.status]);
                    return this
                },
                abort: function (t) {
                    var e = t || E;
                    return c && c.abort(e), i(0, e), this
                }
            };
            if (f.promise(y).complete = m.add, y.success = y.done, y.error = y.fail, h.url = ((t || h.url || Oi) + "").replace(Ni, "").replace(Fi, Ri[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = se.trim(h.dataType || "*").toLowerCase().match(Se) || [""], null == h.crossDomain && (n = ji.exec(h.url.toLowerCase()), h.crossDomain = !(!n || n[1] === Ri[1] && n[2] === Ri[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ri[3] || ("http:" === Ri[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = se.param(h.data, h.traditional)), F(Hi, h, e, y), 2 === S)return y;
            l = h.global, l && 0 === se.active++ && se.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Bi.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (Ii.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Pi.test(o) ? o.replace(Pi, "$1_=" + Di++) : o + (Ii.test(o) ? "&" : "?") + "_=" + Di++)), h.ifModified && (se.lastModified[o] && y.setRequestHeader("If-Modified-Since", se.lastModified[o]), se.etag[o] && y.setRequestHeader("If-None-Match", se.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && y.setRequestHeader("Content-Type", h.contentType), y.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Vi + "; q=0.01" : "") : h.accepts["*"]);
            for (s in h.headers)y.setRequestHeader(s, h.headers[s]);
            if (h.beforeSend && (h.beforeSend.call(u, y, h) === !1 || 2 === S))return y.abort();
            E = "abort";
            for (s in{success: 1, error: 1, complete: 1})y[s](h[s]);
            if (c = F(zi, h, e, y)) {
                y.readyState = 1, l && p.trigger("ajaxSend", [y, h]), h.async && h.timeout > 0 && (r = setTimeout(function () {
                    y.abort("timeout")
                }, h.timeout));
                try {
                    S = 1, c.send(v, i)
                } catch (T) {
                    if (!(2 > S))throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return y
        },
        getJSON: function (t, e, i) {
            return se.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return se.get(t, void 0, e, "script")
        }
    }), se.each(["get", "post"], function (t, e) {
        se[e] = function (t, i, n, s) {
            return se.isFunction(i) && (s = s || n, n = i, i = void 0), se.ajax({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            })
        }
    }), se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        se.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), se._evalUrl = function (t) {
        return se.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, se.fn.extend({
        wrapAll: function (t) {
            if (se.isFunction(t))return this.each(function (e) {
                se(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = se(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        }, wrapInner: function (t) {
            return this.each(se.isFunction(t) ? function (e) {
                se(this).wrapInner(t.call(this, e))
            } : function () {
                var e = se(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = se.isFunction(t);
            return this.each(function (i) {
                se(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                se.nodeName(this, "body") || se(this).replaceWith(this.childNodes)
            }).end()
        }
    }), se.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || se.css(t, "display"))
    }, se.expr.filters.visible = function (t) {
        return !se.expr.filters.hidden(t)
    };
    var Wi = /%20/g, Yi = /\[\]$/, Gi = /\r?\n/g, Ji = /^(?:submit|button|image|reset|file)$/i, Ki = /^(?:input|select|textarea|keygen)/i;
    se.param = function (t, e) {
        var i, n = [], s = function (t, e) {
            e = se.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = se.ajaxSettings && se.ajaxSettings.traditional), se.isArray(t) || t.jquery && !se.isPlainObject(t))se.each(t, function () {
            s(this.name, this.value)
        }); else for (i in t)V(i, t[i], e, s);
        return n.join("&").replace(Wi, "+")
    }, se.fn.extend({
        serialize: function () {
            return se.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = se.prop(this, "elements");
                return t ? se.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !se(this).is(":disabled") && Ki.test(this.nodeName) && !Ji.test(t) && (this.checked || !De.test(t))
            }).map(function (t, e) {
                var i = se(this).val();
                return null == i ? null : se.isArray(i) ? se.map(i, function (t) {
                    return {name: e.name, value: t.replace(Gi, "\r\n")}
                }) : {name: e.name, value: i.replace(Gi, "\r\n")}
            }).get()
        }
    }), se.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || W()
    } : X;
    var qi = 0, Qi = {}, Zi = se.ajaxSettings.xhr();
    t.ActiveXObject && se(t).on("unload", function () {
        for (var t in Qi)Qi[t](void 0, !0)
    }), ie.cors = !!Zi && "withCredentials" in Zi, Zi = ie.ajax = !!Zi, Zi && se.ajaxTransport(function (t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function (i, n) {
                    var s, o = t.xhr(), a = ++qi;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (s in t.xhrFields)o[s] = t.xhrFields[s];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i)void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                    o.send(t.hasContent && t.data || null), e = function (i, s) {
                        var r, l, c;
                        if (e && (s || 4 === o.readyState))if (delete Qi[a], e = void 0, o.onreadystatechange = se.noop, s)4 !== o.readyState && o.abort(); else {
                            c = {}, r = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                            try {
                                l = o.statusText
                            } catch (d) {
                                l = ""
                            }
                            r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404
                        }
                        c && n(r, l, c, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Qi[a] = e : e()
                }, abort: function () {
                    e && e(void 0, !0)
                }
            }
        }
    }), se.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (t) {
                return se.globalEval(t), t
            }
        }
    }), se.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), se.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i = fe.head || se("head")[0] || fe.documentElement;
            return {
                send: function (n, s) {
                    e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                }, abort: function () {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [], en = /(=)\?(?=&|$)|\?\?/;
    se.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = tn.pop() || se.expando + "_" + Di++;
            return this[t] = !0, t
        }
    }), se.ajaxPrefilter("json jsonp", function (e, i, n) {
        var s, o, a, r = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = se.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(en, "$1" + s) : e.jsonp !== !1 && (e.url += (Ii.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
            return a || se.error(s + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
            a = arguments
        }, n.always(function () {
            t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, tn.push(s)), a && se.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), se.parseHTML = function (t, e, i) {
        if (!t || "string" != typeof t)return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || fe;
        var n = he.exec(t), s = !i && [];
        return n ? [e.createElement(n[1])] : (n = se.buildFragment([t], e, s), s && s.length && se(s).remove(), se.merge([], n.childNodes))
    };
    var nn = se.fn.load;
    se.fn.load = function (t, e, i) {
        if ("string" != typeof t && nn)return nn.apply(this, arguments);
        var n, s, o, a = this, r = t.indexOf(" ");
        return r >= 0 && (n = se.trim(t.slice(r, t.length)), t = t.slice(0, r)), se.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && se.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, a.html(n ? se("<div>").append(se.parseHTML(t)).find(n) : t)
        }).complete(i && function (t, e) {
                a.each(i, s || [t.responseText, e, t])
            }), this
    }, se.expr.filters.animated = function (t) {
        return se.grep(se.timers, function (e) {
            return t === e.elem
        }).length
    };
    var sn = t.document.documentElement;
    se.offset = {
        setOffset: function (t, e, i) {
            var n, s, o, a, r, l, c, d = se.css(t, "position"), h = se(t), u = {};
            "static" === d && (t.style.position = "relative"), r = h.offset(), o = se.css(t, "top"), l = se.css(t, "left"), c = ("absolute" === d || "fixed" === d) && se.inArray("auto", [o, l]) > -1, c ? (n = h.position(), a = n.top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), se.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (u.top = e.top - r.top + a), null != e.left && (u.left = e.left - r.left + s), "using" in e ? e.using.call(t, u) : h.css(u)
        }
    }, se.fn.extend({
        offset: function (t) {
            if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                se.offset.setOffset(this, t, e)
            });
            var e, i, n = {top: 0, left: 0}, s = this[0], o = s && s.ownerDocument;
            if (o)return e = o.documentElement, se.contains(e, s) ? (typeof s.getBoundingClientRect !== Le && (n = s.getBoundingClientRect()), i = Y(o), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        }, position: function () {
            if (this[0]) {
                var t, e, i = {top: 0, left: 0}, n = this[0];
                return "fixed" === se.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), se.nodeName(t[0], "html") || (i = t.offset()), i.top += se.css(t[0], "borderTopWidth", !0), i.left += se.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - se.css(n, "marginTop", !0),
                    left: e.left - i.left - se.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || sn; t && !se.nodeName(t, "html") && "static" === se.css(t, "position");)t = t.offsetParent;
                return t || sn
            })
        }
    }), se.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = /Y/.test(e);
        se.fn[t] = function (n) {
            return xe(this, function (t, n, s) {
                var o = Y(t);
                return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? se(o).scrollLeft() : s, i ? s : se(o).scrollTop()) : t[n] = s)
            }, t, n, arguments.length, null)
        }
    }), se.each(["top", "left"], function (t, e) {
        se.cssHooks[e] = C(ie.pixelPosition, function (t, i) {
            return i ? (i = ei(t, e), ni.test(i) ? se(t).position()[e] + "px" : i) : void 0
        })
    }), se.each({Height: "height", Width: "width"}, function (t, e) {
        se.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            se.fn[n] = function (n, s) {
                var o = arguments.length && (i || "boolean" != typeof n), a = i || (n === !0 || s === !0 ? "margin" : "border");
                return xe(this, function (e, i, n) {
                    var s;
                    return se.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? se.css(e, i, a) : se.style(e, i, n, a)
                }, e, o ? n : void 0, o, null)
            }
        })
    }), se.fn.size = function () {
        return this.length
    }, se.fn.andSelf = se.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return se
    });
    var on = t.jQuery, an = t.$;
    return se.noConflict = function (e) {
        return t.$ === se && (t.$ = an), e && t.jQuery === se && (t.jQuery = on), se
    }, typeof e === Le && (t.jQuery = t.$ = se), se
}), function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i, n = t(document);
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function (e) {
            var i = t('meta[name="csrf-token"]').attr("content");
            i && e.setRequestHeader("X-CSRF-Token", i)
        },
        refreshCSRFTokens: function () {
            var e = t("meta[name=csrf-token]").attr("content"), i = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + i + '"]').val(e)
        },
        fire: function (e, i, n) {
            var s = t.Event(i);
            return e.trigger(s, n), s.result !== !1
        },
        confirm: function (t) {
            return confirm(t)
        },
        ajax: function (e) {
            return t.ajax(e)
        },
        href: function (t) {
            return t.attr("href")
        },
        handleRemote: function (n) {
            var s, o, a, r, l, c, d, h;
            if (i.fire(n, "ajax:before")) {
                if (r = n.data("cross-domain"), l = r === e ? null : r, c = n.data("with-credentials") || null, d = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    s = n.attr("method"), o = n.attr("action"), a = n.serializeArray();
                    var u = n.data("ujs:submit-button");
                    u && (a.push(u), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (s = n.data("method"), o = n.data("url"), a = n.serialize(), n.data("params") && (a = a + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", o = n.data("url"), a = n.serialize(), n.data("params") && (a = a + "&" + n.data("params"))) : (s = n.data("method"), o = i.href(n), a = n.data("params") || null);
                return h = {
                    type: s || "GET", data: a, dataType: d, beforeSend: function (t, s) {
                        return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [t, s]) ? void n.trigger("ajax:send", t) : !1
                    }, success: function (t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    }, complete: function (t, e) {
                        n.trigger("ajax:complete", [t, e])
                    }, error: function (t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    }, crossDomain: l
                }, c && (h.xhrFields = {withCredentials: c}), o && (h.url = o), i.ajax(h)
            }
            return !1
        },
        handleMethod: function (n) {
            var s = i.href(n), o = n.data("method"), a = n.attr("target"), r = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), c = t('<form method="post" action="' + s + '"></form>'), d = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== e && r !== e && (d += '<input name="' + l + '" value="' + r + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(d).appendTo("body"), c.submit()
        },
        formElements: function (e, i) {
            return e.is("form") ? t(e[0].elements).filter(i) : e.find(i)
        },
        disableFormElements: function (e) {
            i.formElements(e, i.disableSelector).each(function () {
                i.disableFormElement(t(this))
            })
        },
        disableFormElement: function (t) {
            var i, n;
            i = t.is("button") ? "html" : "val", n = t.data("disable-with"), t.data("ujs:enable-with", t[i]()), n !== e && t[i](n), t.prop("disabled", !0)
        },
        enableFormElements: function (e) {
            i.formElements(e, i.enableSelector).each(function () {
                i.enableFormElement(t(this))
            })
        },
        enableFormElement: function (t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        },
        allowAction: function (t) {
            var e, n = t.data("confirm"), s = !1;
            return n ? (i.fire(t, "confirm") && (s = i.confirm(n), e = i.fire(t, "confirm:complete", [s])), s && e) : !0
        },
        blankInputs: function (e, i, n) {
            var s, o, a = t(), r = i || "input,textarea", l = e.find(r);
            return l.each(function () {
                if (s = t(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !o == !n) {
                    if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length)return !0;
                    a = a.add(s)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function (t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function (t) {
            var n = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), n !== e && t.html(n), t.bind("click.railsDisable", function (t) {
                return i.stopEverything(t)
            })
        },
        enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), n.delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(t(this))
    }), n.delegate(i.buttonDisableSelector, "ajax:complete", function () {
        i.enableFormElement(t(this))
    }), n.delegate(i.linkClickSelector, "click.rails", function (n) {
        var s = t(this), o = s.data("method"), a = s.data("params"), r = n.metaKey || n.ctrlKey;
        if (!i.allowAction(s))return i.stopEverything(n);
        if (!r && s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== e) {
            if (r && (!o || "GET" === o) && !a)return !0;
            var l = i.handleRemote(s);
            return l === !1 ? i.enableElement(s) : l.error(function () {
                i.enableElement(s)
            }), !1
        }
        return s.data("method") ? (i.handleMethod(s), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!i.allowAction(n))return i.stopEverything(e);
        n.is(i.buttonDisableSelector) && i.disableFormElement(n);
        var s = i.handleRemote(n);
        return s === !1 ? i.enableFormElement(n) : s.error(function () {
            i.enableFormElement(n)
        }), !1
    }), n.delegate(i.inputChangeSelector, "change.rails", function (e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var s, o, a = t(this), r = a.data("remote") !== e;
        if (!i.allowAction(a))return i.stopEverything(n);
        if (a.attr("novalidate") == e && (s = i.blankInputs(a, i.requiredInputSelector), s && i.fire(a, "ajax:aborted:required", [s])))return i.stopEverything(n);
        if (r) {
            if (o = i.nonBlankInputs(a, i.fileInputSelector)) {
                setTimeout(function () {
                    i.disableFormElements(a)
                }, 13);
                var l = i.fire(a, "ajax:aborted:file", [o]);
                return l || setTimeout(function () {
                    i.enableFormElements(a)
                }, 13), l
            }
            return i.handleRemote(a), !1
        }
        setTimeout(function () {
            i.disableFormElements(a)
        }, 13)
    }), n.delegate(i.formInputClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!i.allowAction(n))return i.stopEverything(e);
        var s = n.attr("name"), o = s ? {name: s, value: n.val()} : null;
        n.closest("form").data("ujs:submit-button", o)
    }), n.delegate(i.formSubmitSelector, "ajax:send.rails", function (e) {
        this == e.target && i.disableFormElements(t(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function () {
        i.refreshCSRFTokens()
    }))
}(jQuery), function (t) {
    t.extend({
        debounce: function (t, e, i, n) {
            3 == arguments.length && "boolean" != typeof i && (n = i, i = !1);
            var s;
            return function () {
                var o = arguments;
                n = n || this, i && !s && t.apply(n, o), clearTimeout(s), s = setTimeout(function () {
                    i || t.apply(n, o), s = null
                }, e)
            }
        }, throttle: function (t, e, i) {
            var n, s, o;
            return function () {
                s = arguments, o = !0, i = i || this, n || function () {
                    o ? (t.apply(i, s), o = !1, n = setTimeout(arguments.callee, e)) : n = null
                }()
            }
        }
    })
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, i, n, s) {
        return jQuery.easing[jQuery.easing.def](t, e, i, n, s)
    },
    easeInQuad: function (t, e, i, n, s) {
        return n * (e /= s) * e + i
    },
    easeOutQuad: function (t, e, i, n, s) {
        return -n * (e /= s) * (e - 2) + i
    },
    easeInOutQuad: function (t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
    },
    easeInCubic: function (t, e, i, n, s) {
        return n * (e /= s) * e * e + i
    },
    easeOutCubic: function (t, e, i, n, s) {
        return n * ((e = e / s - 1) * e * e + 1) + i
    },
    easeInOutCubic: function (t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
    },
    easeInQuart: function (t, e, i, n, s) {
        return n * (e /= s) * e * e * e + i
    },
    easeOutQuart: function (t, e, i, n, s) {
        return -n * ((e = e / s - 1) * e * e * e - 1) + i
    },
    easeInOutQuart: function (t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
    },
    easeInQuint: function (t, e, i, n, s) {
        return n * (e /= s) * e * e * e * e + i
    },
    easeOutQuint: function (t, e, i, n, s) {
        return n * ((e = e / s - 1) * e * e * e * e + 1) + i
    },
    easeInOutQuint: function (t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
    },
    easeInSine: function (t, e, i, n, s) {
        return -n * Math.cos(e / s * (Math.PI / 2)) + n + i
    },
    easeOutSine: function (t, e, i, n, s) {
        return n * Math.sin(e / s * (Math.PI / 2)) + i
    },
    easeInOutSine: function (t, e, i, n, s) {
        return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
    },
    easeInExpo: function (t, e, i, n, s) {
        return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i
    },
    easeOutExpo: function (t, e, i, n, s) {
        return e == s ? i + n : n * (-Math.pow(2, -10 * e / s) + 1) + i
    },
    easeInOutExpo: function (t, e, i, n, s) {
        return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
    },
    easeInCirc: function (t, e, i, n, s) {
        return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i
    },
    easeOutCirc: function (t, e, i, n, s) {
        return n * Math.sqrt(1 - (e = e / s - 1) * e) + i
    },
    easeInOutCirc: function (t, e, i, n, s) {
        return (e /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
    },
    easeInElastic: function (t, e, i, n, s) {
        var o = 1.70158, a = 0, r = n;
        if (0 == e)return i;
        if (1 == (e /= s))return i + n;
        if (a || (a = .3 * s), r < Math.abs(n)) {
            r = n;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(n / r);
        return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * s - o) * Math.PI / a)) + i
    },
    easeOutElastic: function (t, e, i, n, s) {
        var o = 1.70158, a = 0, r = n;
        if (0 == e)return i;
        if (1 == (e /= s))return i + n;
        if (a || (a = .3 * s), r < Math.abs(n)) {
            r = n;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(n / r);
        return r * Math.pow(2, -10 * e) * Math.sin(2 * (e * s - o) * Math.PI / a) + n + i
    },
    easeInOutElastic: function (t, e, i, n, s) {
        var o = 1.70158, a = 0, r = n;
        if (0 == e)return i;
        if (2 == (e /= s / 2))return i + n;
        if (a || (a = .3 * s * 1.5), r < Math.abs(n)) {
            r = n;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(n / r);
        return 1 > e ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * s - o) * Math.PI / a) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * s - o) * Math.PI / a) * .5 + n + i
    },
    easeInBack: function (t, e, i, n, s, o) {
        return void 0 == o && (o = 1.70158), n * (e /= s) * e * ((o + 1) * e - o) + i
    },
    easeOutBack: function (t, e, i, n, s, o) {
        return void 0 == o && (o = 1.70158), n * ((e = e / s - 1) * e * ((o + 1) * e + o) + 1) + i
    },
    easeInOutBack: function (t, e, i, n, s, o) {
        return void 0 == o && (o = 1.70158), (e /= s / 2) < 1 ? n / 2 * e * e * (((o *= 1.525) + 1) * e - o) + i : n / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
    },
    easeInBounce: function (t, e, i, n, s) {
        return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i
    },
    easeOutBounce: function (t, e, i, n, s) {
        return (e /= s) < 1 / 2.75 ? 7.5625 * n * e * e + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
    },
    easeInOutBounce: function (t, e, i, n, s) {
        return s / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) + .5 * n + i
    }
}), function () {
    var t, e, i, n, s, o, a, r, l, c, d, h, u, p, f, m, g, v, b, S = [].slice, E = [].indexOf || function (t) {
            for (var e = 0, i = this.length; i > e; e++)if (e in this && this[e] === t)return e;
            return -1
        };
    t = jQuery, t.payment = {}, t.payment.fn = {}, t.fn.payment = function () {
        var e, i;
        return i = arguments[0], e = 2 <= arguments.length ? S.call(arguments, 1) : [], t.payment.fn[i].apply(this, e)
    }, s = /(\d{1,4})/g, n = [{
        type: "maestro",
        pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
        format: s,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "dinersclub",
        pattern: /^(36|38|30[0-5])/,
        format: s,
        length: [14],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "laser",
        pattern: /^(6706|6771|6709)/,
        format: s,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: !0
    }, {type: "jcb", pattern: /^35/, format: s, length: [16], cvcLength: [3], luhn: !0}, {
        type: "unionpay",
        pattern: /^62/,
        format: s,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: !1
    }, {
        type: "discover",
        pattern: /^(6011|65|64[4-9]|622)/,
        format: s,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {type: "mastercard", pattern: /^5[1-5]/, format: s, length: [16], cvcLength: [3], luhn: !0}, {
        type: "amex",
        pattern: /^3[47]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15],
        cvcLength: [3, 4],
        luhn: !0
    }, {type: "visa", pattern: /^4/, format: s, length: [13, 14, 15, 16], cvcLength: [3], luhn: !0}], e = function (t) {
        var e, i, s;
        for (t = (t + "").replace(/\D/g, ""), i = 0, s = n.length; s > i; i++)if (e = n[i], e.pattern.test(t))return e
    }, i = function (t) {
        var e, i, s;
        for (i = 0, s = n.length; s > i; i++)if (e = n[i], e.type === t)return e
    }, u = function (t) {
        var e, i, n, s, o, a;
        for (n = !0, s = 0, i = (t + "").split("").reverse(), o = 0, a = i.length; a > o; o++)e = i[o], e = parseInt(e, 10), (n = !n) && (e *= 2), e > 9 && (e -= 9), s += e;
        return s % 10 === 0
    }, h = function (t) {
        var e;
        return null != t.prop("selectionStart") && t.prop("selectionStart") !== t.prop("selectionEnd") ? !0 : ("undefined" != typeof document && null !== document && null != (e = document.selection) && "function" == typeof e.createRange ? e.createRange().text : void 0) ? !0 : !1
    }, p = function (e) {
        return setTimeout(function () {
            var i, n;
            return i = t(e.currentTarget), n = i.val(), n = t.payment.formatCardNumber(n), i.val(n)
        })
    }, r = function (i) {
        var n, s, o, a, r, l, c;
        return o = String.fromCharCode(i.which), !/^\d+$/.test(o) || (n = t(i.currentTarget), c = n.val(), s = e(c + o), a = (c.replace(/\D/g, "") + o).length, l = 16, s && (l = s.length[s.length.length - 1]), a >= l || null != n.prop("selectionStart") && n.prop("selectionStart") !== c.length) ? void 0 : (r = s && "amex" === s.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, r.test(c) ? (i.preventDefault(), n.val(c + " " + o)) : r.test(c + o) ? (i.preventDefault(), n.val(c + o + " ")) : void 0)
    }, o = function (e) {
        var i, n;
        return i = t(e.currentTarget), n = i.val(), e.meta || null != i.prop("selectionStart") && i.prop("selectionStart") !== n.length ? void 0 : 8 === e.which && /\s\d?$/.test(n) ? (e.preventDefault(), i.val(n.replace(/\s\d?$/, ""))) : void 0
    }, l = function (e) {
        var i, n, s;
        return n = String.fromCharCode(e.which), /^\d+$/.test(n) ? (i = t(e.currentTarget), s = i.val() + n, /^\d$/.test(s) && "0" !== s && "1" !== s ? (e.preventDefault(), i.val("0" + s + " / ")) : /^\d\d$/.test(s) ? (e.preventDefault(), i.val("" + s + " / ")) : void 0) : void 0
    }, c = function (e) {
        var i, n, s;
        return n = String.fromCharCode(e.which), /^\d+$/.test(n) ? (i = t(e.currentTarget), s = i.val(), /^\d\d$/.test(s) ? i.val("" + s + " / ") : void 0) : void 0
    }, d = function (e) {
        var i, n, s;
        return n = String.fromCharCode(e.which), "/" === n ? (i = t(e.currentTarget), s = i.val(), /^\d$/.test(s) && "0" !== s ? i.val("0" + s + " / ") : void 0) : void 0
    }, a = function (e) {
        var i, n;
        if (!e.meta && (i = t(e.currentTarget), n = i.val(), 8 === e.which && (null == i.prop("selectionStart") || i.prop("selectionStart") === n.length)))return /\s\/\s?\d?$/.test(n) ? (e.preventDefault(), i.val(n.replace(/\s\/\s?\d?$/, ""))) : void 0
    }, v = function (t) {
        var e;
        return t.metaKey || t.ctrlKey ? !0 : 32 === t.which ? !1 : 0 === t.which ? !0 : t.which < 33 ? !0 : (e = String.fromCharCode(t.which), !!/[\d\s]/.test(e))
    }, m = function (i) {
        var n, s, o, a;
        return n = t(i.currentTarget), o = String.fromCharCode(i.which), /^\d+$/.test(o) && !h(n) ? (a = (n.val() + o).replace(/\D/g, ""), s = e(a), s ? a.length <= s.length[s.length.length - 1] : a.length <= 16) : void 0
    }, g = function (e) {
        var i, n, s;
        return i = t(e.currentTarget), n = String.fromCharCode(e.which), /^\d+$/.test(n) && !h(i) ? (s = i.val() + n, s = s.replace(/\D/g, ""), s.length > 6 ? !1 : void 0) : void 0
    }, f = function (e) {
        var i, n, s;
        return i = t(e.currentTarget), n = String.fromCharCode(e.which), /^\d+$/.test(n) ? (s = i.val() + n, s.length <= 4) : void 0
    }, b = function (e) {
        var i, s, o, a, r;
        return i = t(e.currentTarget), r = i.val(), a = t.payment.cardType(r) || "unknown", i.hasClass(a) ? void 0 : (s = function () {
            var t, e, i;
            for (i = [], t = 0, e = n.length; e > t; t++)o = n[t], i.push(o.type);
            return i
        }(), i.removeClass("unknown"), i.removeClass(s.join(" ")), i.addClass(a), i.toggleClass("identified", "unknown" !== a), i.trigger("payment.cardType", a))
    }, t.payment.fn.formatCardCVC = function () {
        return this.payment("restrictNumeric"), this.on("keypress", f), this
    }, t.payment.fn.formatCardExpiry = function () {
        return this.payment("restrictNumeric"), this.on("keypress", g), this.on("keypress", l), this.on("keypress", d), this.on("keypress", c), this.on("keydown", a), this
    }, t.payment.fn.formatCardNumber = function () {
        return this.payment("restrictNumeric"), this.on("keypress", m), this.on("keypress", r), this.on("keydown", o), this.on("keyup", b), this.on("paste", p), this
    }, t.payment.fn.restrictNumeric = function () {
        return this.on("keypress", v), this
    }, t.payment.fn.cardExpiryVal = function () {
        return t.payment.cardExpiryVal(t(this).val())
    }, t.payment.cardExpiryVal = function (t) {
        var e, i, n, s;
        return t = t.replace(/\s/g, ""), s = t.split("/", 2), e = s[0], n = s[1], 2 === (null != n ? n.length : void 0) && /^\d+$/.test(n) && (i = (new Date).getFullYear(), i = i.toString().slice(0, 2), n = i + n), e = parseInt(e, 10), n = parseInt(n, 10), {
            month: e,
            year: n
        }
    }, t.payment.validateCardNumber = function (t) {
        var i, n;
        return t = (t + "").replace(/\s+|-/g, ""), /^\d+$/.test(t) ? (i = e(t), i ? (n = t.length, E.call(i.length, n) >= 0 && (i.luhn === !1 || u(t))) : !1) : !1
    }, t.payment.validateCardExpiry = function (e, i) {
        var n, s, o, a;
        return "object" == typeof e && "month" in e && (a = e, e = a.month, i = a.year), e && i ? (e = t.trim(e), i = t.trim(i), /^\d+$/.test(e) && /^\d+$/.test(i) && parseInt(e, 10) <= 12 ? (2 === i.length && (o = (new Date).getFullYear(), o = o.toString().slice(0, 2), i = o + i), s = new Date(i, e), n = new Date, s.setMonth(s.getMonth() - 1), s.setMonth(s.getMonth() + 1, 1), s > n) : !1) : !1
    }, t.payment.validateCardCVC = function (e, n) {
        var s, o;
        return e = t.trim(e), /^\d+$/.test(e) ? n ? (s = e.length, E.call(null != (o = i(n)) ? o.cvcLength : void 0, s) >= 0) : e.length >= 3 && e.length <= 4 : !1
    }, t.payment.cardType = function (t) {
        var i;
        return t ? (null != (i = e(t)) ? i.type : void 0) || null : null
    }, t.payment.formatCardNumber = function (t) {
        var i, n, s, o;
        return (i = e(t)) ? (s = i.length[i.length.length - 1], t = t.replace(/\D/g, ""), t = t.slice(0, +s + 1 || 9e9), i.format.global ? null != (o = t.match(i.format)) ? o.join(" ") : void 0 : (n = i.format.exec(t), null != n && n.shift(), null != n ? n.join(" ") : void 0)) : t
    }
}.call(this), function (t) {
    t.fn.changeElementType = function (e) {
        this.each(function (i, n) {
            var s = {};
            t.each(n.attributes, function (t, e) {
                s[e.nodeName] = e.nodeValue
            });
            var o = t("<" + e + "/>", s).append(t(n).contents());
            return t(n).replaceWith(o), o
        })
    }
}(jQuery), function (t, e, i) {
    "function" == typeof define && define.amd ? define(["jquery"], function (n) {
        return i(n, t, e), n.mobile
    }) : i(t.jQuery, t, e)
}(this, document, function (t, e, i) {
    !function (t, e, i, n) {
        function s(t) {
            for (; t && "undefined" != typeof t.originalEvent;)t = t.originalEvent;
            return t
        }

        function o(e, i) {
            var o, a, r, l, c, d, h, u, p, f = e.type;
            if (e = t.Event(e), e.type = i, o = e.originalEvent, a = t.event.props, f.search(/^(mouse|click)/) > -1 && (a = D), o)for (h = a.length, l; h;)l = a[--h], e[l] = o[l];
            if (f.search(/mouse(down|up)|click/) > -1 && !e.which && (e.which = 1), -1 !== f.search(/^touch/) && (r = s(o), f = r.touches, c = r.changedTouches, d = f && f.length ? f[0] : c && c.length ? c[0] : n))for (u = 0, p = A.length; p > u; u++)l = A[u], e[l] = d[l];
            return e
        }

        function a(e) {
            for (var i, n, s = {}; e;) {
                i = t.data(e, w);
                for (n in i)i[n] && (s[n] = s.hasVirtualBinding = !0);
                e = e.parentNode
            }
            return s
        }

        function r(e, i) {
            for (var n; e;) {
                if (n = t.data(e, w), n && (!i || n[i]))return e;
                e = e.parentNode
            }
            return null
        }

        function l() {
            U = !1
        }

        function c() {
            U = !0
        }

        function d() {
            H = 0, P.length = 0, $ = !1, c()
        }

        function h() {
            l()
        }

        function u() {
            p(), M = setTimeout(function () {
                M = 0, d()
            }, t.vmouse.resetTimerDuration)
        }

        function p() {
            M && (clearTimeout(M), M = 0)
        }

        function f(e, i, n) {
            var s;
            return (n && n[e] || !n && r(i.target, e)) && (s = o(i, e), t(i.target).trigger(s)), s
        }

        function m(e) {
            var i, n = t.data(e.target, C);
            $ || H && H === n || (i = f("v" + e.type, e), i && (i.isDefaultPrevented() && e.preventDefault(), i.isPropagationStopped() && e.stopPropagation(), i.isImmediatePropagationStopped() && e.stopImmediatePropagation()))
        }

        function g(e) {
            var i, n, o, r = s(e).touches;
            r && 1 === r.length && (i = e.target, n = a(i), n.hasVirtualBinding && (H = j++, t.data(i, C, H), p(), h(), N = !1, o = s(e).touches[0], R = o.pageX, O = o.pageY, f("vmouseover", e, n), f("vmousedown", e, n)))
        }

        function v(t) {
            U || (N || f("vmousecancel", t, a(t.target)), N = !0, u())
        }

        function b(e) {
            if (!U) {
                var i = s(e).touches[0], n = N, o = t.vmouse.moveDistanceThreshold, r = a(e.target);
                N = N || Math.abs(i.pageX - R) > o || Math.abs(i.pageY - O) > o, N && !n && f("vmousecancel", e, r), f("vmousemove", e, r), u()
            }
        }

        function S(t) {
            if (!U) {
                c();
                var e, i, n = a(t.target);
                f("vmouseup", t, n), N || (e = f("vclick", t, n), e && e.isDefaultPrevented() && (i = s(t).changedTouches[0], P.push({
                    touchID: H,
                    x: i.clientX,
                    y: i.clientY
                }), $ = !0)), f("vmouseout", t, n), N = !1, u()
            }
        }

        function E(e) {
            var i, n = t.data(e, w);
            if (n)for (i in n)if (n[i])return !0;
            return !1
        }

        function y() {
        }

        function T(e) {
            var i = e.substr(1);
            return {
                setup: function () {
                    E(this) || t.data(this, w, {});
                    var n = t.data(this, w);
                    n[e] = !0, I[e] = (I[e] || 0) + 1, 1 === I[e] && F.bind(i, m), t(this).bind(i, y), B && (I.touchstart = (I.touchstart || 0) + 1, 1 === I.touchstart && F.bind("touchstart", g).bind("touchend", S).bind("touchmove", b).bind("scroll", v))
                }, teardown: function () {
                    --I[e], I[e] || F.unbind(i, m), B && (--I.touchstart, I.touchstart || F.unbind("touchstart", g).unbind("touchmove", b).unbind("touchend", S).unbind("scroll", v));
                    var n = t(this), s = t.data(this, w);
                    s && (s[e] = !1), n.unbind(i, y), E(this) || n.removeData(w)
                }
            }
        }

        var L, _, w = "virtualMouseBindings", C = "virtualTouchID", k = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), A = "clientX clientY pageX pageY screenX screenY".split(" "), x = t.event.mouseHooks ? t.event.mouseHooks.props : [], D = t.event.props.concat(x), I = {}, M = 0, R = 0, O = 0, N = !1, P = [], $ = !1, U = !1, B = "addEventListener" in i, F = t(i), j = 1, H = 0;
        for (t.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        }, _ = 0; _ < k.length; _++)t.event.special[k[_]] = T(k[_]);
        B && i.addEventListener("click", function (e) {
            var i, n, s, o, a, r, l = P.length, c = e.target;
            if (l)for (i = e.clientX, n = e.clientY, L = t.vmouse.clickDistanceThreshold, s = c; s;) {
                for (o = 0; l > o; o++)if (a = P[o], r = 0, s === c && Math.abs(a.x - i) < L && Math.abs(a.y - n) < L || t.data(s, C) === a.touchID)return e.preventDefault(), void e.stopPropagation();
                s = s.parentNode
            }
        }, !0)
    }(t, e, i)
}), jQuery.extend({
    highlight: function (t, e, i, n) {
        if (3 === t.nodeType) {
            var s = t.data.match(e);
            if (s) {
                var o = document.createElement(i || "span");
                o.className = n || "highlight";
                var a = t.splitText(s.index);
                a.splitText(s[0].length);
                var r = a.cloneNode(!0);
                return o.appendChild(r), a.parentNode.replaceChild(o, a), 1
            }
        } else if (1 === t.nodeType && t.childNodes && !/(script|style)/i.test(t.tagName) && (t.tagName !== i.toUpperCase() || t.className !== n))for (var l = 0; l < t.childNodes.length; l++)l += jQuery.highlight(t.childNodes[l], e, i, n);
        return 0
    }
}), jQuery.fn.unhighlight = function (t) {
    var e = {className: "highlight", element: "span"};
    return jQuery.extend(e, t), this.find(e.element + "." + e.className).each(function () {
        var t = this.parentNode;
        t.replaceChild(this.firstChild, this), t.normalize()
    }).end()
}, jQuery.fn.highlight = function (t, e) {
    var i = {className: "highlight", element: "span", caseSensitive: !1, wordsOnly: !1};
    if (jQuery.extend(i, e), t.constructor === String && (t = [t]), t = jQuery.grep(t, function (t) {
            return "" != t
        }), t = jQuery.map(t, function (t) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }), 0 == t.length)return this;
    var n = i.caseSensitive ? "" : "i", s = "(" + t.join("|") + ")";
    i.wordsOnly && (s = "\\b" + s + "\\b");
    var o = new RegExp(s, n);
    return this.each(function () {
        jQuery.highlight(this, o, i.element, i.className)
    })
}, function () {
    var t = !1, e = /xyz/.test(function () {
    }) ? /\b_super\b/ : /.*/;
    this.Class = function () {
    }, Class.extend = function (i) {
        function n() {
            !t && this.init && this.init.apply(this, arguments)
        }

        var s = this.prototype;
        t = !0;
        var o = new this;
        t = !1;
        for (var a in i)o[a] = "function" == typeof i[a] && "function" == typeof s[a] && e.test(i[a]) ? function (t, e) {
            return function () {
                var i = this._super;
                this._super = s[t];
                var n = e.apply(this, arguments);
                return this._super = i, n
            }
        }(a, i[a]) : i[a];
        return n.prototype = o, n.constructor = n, n.extend = arguments.callee, n
    }
}(), function (t) {
    "function" == typeof define ? define(function () {
        t()
    }) : t()
}(function (t) {
    if (!Function.prototype.bind) {
        var e = Array.prototype.slice;
        Function.prototype.bind = function () {
            function t() {
                if (this instanceof t) {
                    var s = Object.create(i.prototype);
                    return i.apply(s, n.concat(e.call(arguments))), s
                }
                return i.call.apply(i, n.concat(e.call(arguments)))
            }

            var i = this;
            if ("function" != typeof i.apply || "function" != typeof i.call)return new TypeError;
            var n = e.call(arguments);
            return t.length = "function" == typeof i ? Math.max(i.length - n.length, 0) : 0, t
        }
    }
    var i, n, s, o, a, r = Function.prototype.call, l = Object.prototype, c = r.bind(l.hasOwnProperty);
    (a = c(l, "__defineGetter__")) && (i = r.bind(l.__defineGetter__), n = r.bind(l.__defineSetter__), s = r.bind(l.__lookupGetter__), o = r.bind(l.__lookupSetter__)), Array.isArray || (Array.isArray = function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }), Array.prototype.forEach || (Array.prototype.forEach = function (t, e) {
        for (var i = +this.length, n = 0; i > n; n++)n in this && t.call(e, this[n], n, this)
    }), Array.prototype.map || (Array.prototype.map = function (t, e) {
        var i = +this.length;
        if ("function" != typeof t)throw new TypeError;
        for (var n = Array(i), s = 0; i > s; s++)s in this && (n[s] = t.call(e, this[s], s, this));
        return n
    }), Array.prototype.filter || (Array.prototype.filter = function (t, e) {
        for (var i = [], n = 0; n < this.length; n++)t.call(e, this[n]) && i.push(this[n]);
        return i
    }), Array.prototype.every || (Array.prototype.every = function (t, e) {
        for (var i = 0; i < this.length; i++)if (!t.call(e, this[i]))return !1;
        return !0
    }), Array.prototype.some || (Array.prototype.some = function (t, e) {
        for (var i = 0; i < this.length; i++)if (t.call(e, this[i]))return !0;
        return !1
    }), Array.prototype.reduce || (Array.prototype.reduce = function (t) {
        var e = +this.length;
        if ("function" != typeof t)throw new TypeError;
        if (0 === e && 1 === arguments.length)throw new TypeError;
        var i = 0;
        if (arguments.length >= 2)var n = arguments[1]; else for (; ;) {
            if (i in this) {
                n = this[i++];
                break
            }
            if (++i >= e)throw new TypeError
        }
        for (; e > i; i++)i in this && (n = t.call(null, n, this[i], i, this));
        return n
    }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (t) {
        var e = +this.length;
        if ("function" != typeof t)throw new TypeError;
        if (0 === e && 1 === arguments.length)throw new TypeError;
        var i;
        if (e -= 1, arguments.length >= 2)i = arguments[1]; else for (; ;) {
            if (e in this) {
                i = this[e--];
                break
            }
            if (--e < 0)throw new TypeError
        }
        for (; e >= 0; e--)e in this && (i = t.call(null, i, this[e], e, this));
        return i
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
        var i = this.length;
        if (!i)return -1;
        var n = e || 0;
        if (n >= i)return -1;
        for (0 > n && (n += i); i > n; n++)if (n in this && t === this[n])return n;
        return -1
    }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (t, e) {
        var i = this.length;
        if (!i)return -1;
        var n = e || i;
        for (0 > n && (n += i), n = Math.min(n, i - 1); n >= 0; n--)if (n in this && t === this[n])return n;
        return -1
    }), Object.getPrototypeOf || (Object.getPrototypeOf = function (t) {
        return t.__proto__ || t.constructor.prototype
    }), Object.getOwnPropertyDescriptor || (Object.getOwnPropertyDescriptor = function (e, i) {
        if ("object" != typeof e && "function" != typeof e || null === e)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + e);
        if (!c(e, i))return t;
        var n, r, d;
        if (n = {enumerable: !0, configurable: !0}, a) {
            var h = e.__proto__;
            if (e.__proto__ = l, r = s(e, i), d = o(e, i), e.__proto__ = h, r || d)return r && (n.get = r), d && (n.set = d), n
        }
        return n.value = e[i], n
    }), Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (t) {
        return Object.keys(t)
    }), Object.create || (Object.create = function (t, e) {
        var i;
        if (null === t)i = {__proto__: null}; else {
            if ("object" != typeof t)throw new TypeError("typeof prototype[" + typeof t + "] != 'object'");
            i = function () {
            }, i.prototype = t, i = new i, i.__proto__ = t
        }
        return "undefined" != typeof e && Object.defineProperties(i, e), i
    }), Object.defineProperty || (Object.defineProperty = function (t, e, r) {
        if ("object" != typeof t && "function" != typeof t)throw new TypeError("Object.defineProperty called on non-object: " + t);
        if ("object" != typeof r || null === r)throw new TypeError("Property description must be an object: " + r);
        if (c(r, "value"))a && (s(t, e) || o(t, e)) && (t.__proto__ = l, delete t[e]), t[e] = r.value; else {
            if (!a)throw new TypeError("getters & setters can not be defined on this javascript engine");
            c(r, "get") && i(t, e, r.get), c(r, "set") && n(t, e, r.set)
        }
        return t
    }), Object.defineProperties || (Object.defineProperties = function (t, e) {
        for (var i in e)c(e, i) && Object.defineProperty(t, i, e[i]);
        return t
    }), Object.seal || (Object.seal = function (t) {
        return t
    }), Object.freeze || (Object.freeze = function (t) {
        return t
    });
    try {
        Object.freeze(function () {
        })
    } catch (d) {
        Object.freeze = function (t) {
            return function (e) {
                return "function" == typeof e ? e : t(e)
            }
        }(Object.freeze)
    }
    if (Object.preventExtensions || (Object.preventExtensions = function (t) {
            return t
        }), Object.isSealed || (Object.isSealed = function () {
            return !1
        }), Object.isFrozen || (Object.isFrozen = function () {
            return !1
        }), Object.isExtensible || (Object.isExtensible = function () {
            return !0
        }), !Object.keys) {
        var h, u = !0, p = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], f = p.length;
        for (h in{toString: null})u = !1;
        Object.keys = function v(t) {
            if ("object" != typeof t && "function" != typeof t || null === t)throw new TypeError("Object.keys called on a non-object");
            var e, v = [];
            for (e in t)c(t, e) && v.push(e);
            if (u)for (e = 0; f > e; e++) {
                var i = p[e];
                c(t, i) && v.push(i)
            }
            return v
        }
    }
    if (Date.prototype.toISOString || (Date.prototype.toISOString = function () {
            return this.getUTCFullYear() + "-" + (this.getUTCMonth() + 1) + "-" + this.getUTCDate() + "T" + this.getUTCHours() + ":" + this.getUTCMinutes() + ":" + this.getUTCSeconds() + "Z"
        }), Date.now || (Date.now = function () {
            return (new Date).getTime()
        }), Date.prototype.toJSON || (Date.prototype.toJSON = function () {
            if ("function" != typeof this.toISOString)throw new TypeError;
            return this.toISOString()
        }), isNaN(Date.parse("T00:00")) && (Date = function (e) {
            var i, n = function (t, i, s, o, a, r, l) {
                var c = arguments.length;
                return this instanceof e ? (c = 1 === c && String(t) === t ? new e(n.parse(t)) : c >= 7 ? new e(t, i, s, o, a, r, l) : c >= 6 ? new e(t, i, s, o, a, r) : c >= 5 ? new e(t, i, s, o, a) : c >= 4 ? new e(t, i, s, o) : c >= 3 ? new e(t, i, s) : c >= 2 ? new e(t, i) : c >= 1 ? new e(t) : new e, c.constructor = n, c) : e.apply(this, arguments)
            }, s = RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");
            for (i in e)n[i] = e[i];
            return n.now = e.now, n.UTC = e.UTC, n.prototype = e.prototype, n.prototype.constructor = n, n.parse = function (i) {
                var n = s.exec(i);
                if (n) {
                    n.shift();
                    for (var o = n[0] === t, a = 0; 10 > a; a++)7 !== a && (n[a] = +(n[a] || (3 > a ? 1 : 0)), 1 === a && n[a]--);
                    return o ? 1e3 * (60 * (60 * n[3] + n[4]) + n[5]) + n[6] : (o = 6e4 * (60 * n[8] + n[9]), "-" === n[6] && (o = -o), e.UTC.apply(this, n.slice(0, 7)) + o)
                }
                return e.parse.apply(this, arguments)
            }, n
        }(Date)), !String.prototype.trim) {
        var m = /^\s\s*/, g = /\s\s*$/;
        String.prototype.trim = function () {
            return String(this).replace(m, "").replace(g, "")
        }
    }
}), "undefined" == typeof document || "classList" in document.createElement("a") || !function (t) {
    var e = "classList", i = "prototype", n = (t.HTMLElement || t.Element)[i], s = Object, o = String[i].trim || function () {
            return this.replace(/^\s+|\s+$/g, "")
        }, a = Array[i].indexOf || function (t) {
            for (var e = 0, i = this.length; i > e; e++)if (e in this && this[e] === t)return e;
            return -1
        }, r = function (t, e) {
        this.name = t, this.code = DOMException[t], this.message = e
    }, l = function (t, e) {
        if ("" === e)throw new r("SYNTAX_ERR", "An invalid or illegal string was specified");
        if (/\s/.test(e))throw new r("INVALID_CHARACTER_ERR", "String contains an invalid character");
        return a.call(t, e)
    }, c = function (t) {
        for (var e = o.call(t.className), i = e ? e.split(/\s+/) : [], n = 0, s = i.length; s > n; n++)this.push(i[n]);
        this._updateClassName = function () {
            t.className = this.toString()
        }
    }, d = c[i] = [], h = function () {
        return new c(this)
    };
    if (r[i] = Error[i], d.item = function (t) {
            return this[t] || null
        }, d.contains = function (t) {
            return t += "", -1 !== l(this, t)
        }, d.add = function (t) {
            t += "", -1 === l(this, t) && (this.push(t), this._updateClassName())
        }, d.remove = function (t) {
            t += "";
            var e = l(this, t);
            -1 !== e && (this.splice(e, 1), this._updateClassName())
        }, d.toggle = function (t) {
            t += "", -1 === l(this, t) ? this.add(t) : this.remove(t)
        }, d.toString = function () {
            return this.join(" ")
        }, s.defineProperty) {
        var u = {get: h, enumerable: !0, configurable: !0};
        try {
            s.defineProperty(n, e, u)
        } catch (p) {
            -2146823252 === p.number && (u.enumerable = !1, s.defineProperty(n, e, u))
        }
    } else s[i].__defineGetter__ && n.__defineGetter__(e, h)
}(self), function (t) {
    function e() {
        p || (p = !0, l(m, function (t) {
            h(t)
        }))
    }

    function i(e, i) {
        var n = t.createElement("script");
        n.type = "text/" + (e.type || "javascript"), n.src = e.src || e, n.async = !1, n.onreadystatechange = n.onload = function () {
            var t = n.readyState;
            !i.done && (!t || /loaded|complete/.test(t)) && (i.done = !0, i())
        }, (t.body || f).appendChild(n)
    }

    function n(t, e) {
        return t.state == w ? e && e() : t.state == _ ? y.ready(t.name, e) : t.state == L ? t.onpreload.push(function () {
            n(t, e)
        }) : (t.state = _, void i(t.url, function () {
            t.state = w, e && e(), l(v[t.name], function (t) {
                h(t)
            }), a() && p && l(v.ALL, function (t) {
                h(t)
            })
        }))
    }

    function s(t) {
        void 0 === t.state && (t.state = L, t.onpreload = [], i({src: t.url, type: "cache"}, function () {
            o(t)
        }))
    }

    function o(t) {
        t.state = T, l(t.onpreload, function (t) {
            t.call()
        })
    }

    function a(t) {
        t = t || b;
        var e;
        for (var i in t) {
            if (t.hasOwnProperty(i) && t[i].state != w)return !1;
            e = !0
        }
        return e
    }

    function r(t) {
        return "[object Function]" == Object.prototype.toString.call(t)
    }

    function l(t, e) {
        if (t) {
            "object" == typeof t && (t = [].slice.call(t));
            for (var i = 0; i < t.length; i++)e.call(t, t[i], i)
        }
    }

    function c(t) {
        var e;
        if ("object" == typeof t)for (var i in t)t[i] && (e = {name: i, url: t[i]}); else e = {name: d(t), url: t};
        var n = b[e.name];
        return n && n.url === e.url ? n : (b[e.name] = e, e)
    }

    function d(t) {
        var e = t.split("/"), i = e[e.length - 1], n = i.indexOf("?");
        return -1 != n ? i.substring(0, n) : i
    }

    function h(t) {
        t._done || (t(), t._done = 1)
    }

    var u, p, f = t.documentElement, m = [], g = [], v = {}, b = {}, S = t.createElement("script").async === !0 || "MozAppearance" in t.documentElement.style || window.opera, E = window.head_conf && head_conf.head || "head", y = window[E] = window[E] || function () {
            y.ready.apply(null, arguments)
        }, T = 1, L = 2, _ = 3, w = 4;
    if (y.js = S ? function () {
            var t = arguments, e = t[t.length - 1], i = {};
            return r(e) || (e = null), l(t, function (s, o) {
                s != e && (s = c(s), i[s.name] = s, n(s, e && o == t.length - 2 ? function () {
                    a(i) && h(e)
                } : null))
            }), y
        } : function () {
            var t = arguments, e = [].slice.call(t, 1), i = e[0];
            return u ? (i ? (l(e, function (t) {
                r(t) || s(c(t))
            }), n(c(t[0]), r(i) ? i : function () {
                y.js.apply(null, e)
            })) : n(c(t[0])), y) : (g.push(function () {
                y.js.apply(null, t)
            }), y)
        }, y.ready = function (e, i) {
            if (e == t)return p ? h(i) : m.push(i), y;
            if (r(e) && (i = e, e = "ALL"), "string" != typeof e || !r(i))return y;
            var n = b[e];
            if (n && n.state == w || "ALL" == e && a() && p)return h(i), y;
            var s = v[e];
            return s ? s.push(i) : s = v[e] = [i], y
        }, y.ready(t, function () {
            a() && l(v.ALL, function (t) {
                h(t)
            }), y.feature && y.feature("domloaded", !0)
        }), window.addEventListener)t.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1); else if (window.attachEvent) {
        t.attachEvent("onreadystatechange", function () {
            "complete" === t.readyState && e()
        });
        var C = 1;
        try {
            C = window.frameElement
        } catch (k) {
        }
        !C && f.doScroll && function () {
            try {
                f.doScroll("left"), e()
            } catch (t) {
                return void setTimeout(arguments.callee, 1)
            }
        }(), window.attachEvent("onload", e)
    }
    !t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", handler = function () {
        t.removeEventListener("DOMContentLoaded", handler, !1), t.readyState = "complete"
    }, !1)), setTimeout(function () {
        u = !0, l(g, function (t) {
            t()
        })
    }, 300)
}(document), function (t) {
    function e(t, e, i, n, s) {
        this._listener = e, this._isOnce = i, this.context = n, this._signal = t, this._priority = s || 0
    }

    var i = {VERSION: "0.6.1"};
    e.prototype = {
        active: !0, execute: function (t) {
            var e;
            return this.active && (e = this._listener.apply(this.context, t), this._isOnce && this.detach()), e
        }, detach: function () {
            return this._signal.remove(this._listener)
        }, getListener: function () {
            return this._listener
        }, dispose: function () {
            this.detach(), this._destroy()
        }, _destroy: function () {
            delete this._signal, delete this._isOnce, delete this._listener, delete this.context
        }, isOnce: function () {
            return this._isOnce
        }, toString: function () {
            return "[SignalBinding isOnce: " + this._isOnce + ", active: " + this.active + "]"
        }
    }, i.Signal = function () {
        this._bindings = []
    }, i.Signal.prototype = {
        _shouldPropagate: !0, active: !0, _registerListener: function (t, i, n, s) {
            if ("function" != typeof t)throw new Error("listener is a required param of add() and addOnce() and should be a Function.");
            var o, a = this._indexOfListener(t);
            if (-1 !== a) {
                if (o = this._bindings[a], o.isOnce() !== i)throw new Error("You cannot add" + (i ? "" : "Once") + "() then add" + (i ? "Once" : "") + "() the same listener without removing the relationship first.")
            } else o = new e(this, t, i, n, s), this._addBinding(o);
            return o
        }, _addBinding: function (t) {
            var e = this._bindings.length;
            do--e; while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
            this._bindings.splice(e + 1, 0, t)
        }, _indexOfListener: function (t) {
            for (var e = this._bindings.length; e--;)if (this._bindings[e]._listener === t)return e;
            return -1
        }, add: function (t, e, i) {
            return this._registerListener(t, !1, e, i)
        }, addOnce: function (t, e, i) {
            return this._registerListener(t, !0, e, i)
        }, remove: function (t) {
            if ("function" != typeof t)throw new Error("listener is a required param of remove() and should be a Function.");
            var e = this._indexOfListener(t);
            return -1 !== e && (this._bindings[e]._destroy(), this._bindings.splice(e, 1)), t
        }, removeAll: function () {
            for (var t = this._bindings.length; t--;)this._bindings[t]._destroy();
            this._bindings.length = 0
        }, getNumListeners: function () {
            return this._bindings.length
        }, halt: function () {
            this._shouldPropagate = !1
        }, dispatch: function () {
            if (this.active) {
                var t = Array.prototype.slice.call(arguments), e = this._bindings.slice(), i = this._bindings.length;
                this._shouldPropagate = !0;
                do i--; while (e[i] && this._shouldPropagate && e[i].execute(t) !== !1)
            }
        }, dispose: function () {
            this.removeAll(), delete this._bindings
        }, toString: function () {
            return "[Signal active: " + this.active + " numListeners: " + this.getNumListeners() + "]"
        }
    }, t.signals = i
}(window || global || this);
var JSON;
JSON || (JSON = {}), function () {
    "use strict";
    function f(t) {
        return 10 > t ? "0" + t : t
    }

    function quote(t) {
        return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + t + '"'
    }

    function str(t, e) {
        var i, n, s, o, a, r = gap, l = e[t];
        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
            case"string":
                return quote(l);
            case"number":
                return isFinite(l) ? String(l) : "null";
            case"boolean":
            case"null":
                return String(l);
            case"object":
                if (!l)return "null";
                if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                    for (o = l.length, i = 0; o > i; i += 1)a[i] = str(i, l) || "null";
                    return s = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + r + "]" : "[" + a.join(",") + "]", gap = r, s
                }
                if (rep && "object" == typeof rep)for (o = rep.length, i = 0; o > i; i += 1)"string" == typeof rep[i] && (n = rep[i], s = str(n, l), s && a.push(quote(n) + (gap ? ": " : ":") + s)); else for (n in l)Object.prototype.hasOwnProperty.call(l, n) && (s = str(n, l), s && a.push(quote(n) + (gap ? ": " : ":") + s));
                return s = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + r + "}" : "{" + a.join(",") + "}", gap = r, s
        }
    }

    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function (t, e, i) {
        var n;
        if (gap = "", indent = "", "number" == typeof i)for (n = 0; i > n; n += 1)indent += " "; else"string" == typeof i && (indent = i);
        if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))throw new Error("JSON.stringify");
        return str("", {"": t})
    }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
        function walk(t, e) {
            var i, n, s = t[e];
            if (s && "object" == typeof s)for (i in s)Object.prototype.hasOwnProperty.call(s, i) && (n = walk(s, i), void 0 !== n ? s[i] = n : delete s[i]);
            return reviver.call(t, e, s)
        }

        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), function (t) {
    function e(t, e) {
        return function (i) {
            return l(t.call(this, i), e)
        }
    }

    function i(t, e) {
        return function (i) {
            return this.lang().ordinal(t.call(this, i), e)
        }
    }

    function n() {
    }

    function s(t) {
        a(this, t)
    }

    function o(t) {
        var e = t.years || t.year || t.y || 0, i = t.months || t.month || t.M || 0, n = t.weeks || t.week || t.w || 0, s = t.days || t.day || t.d || 0, o = t.hours || t.hour || t.h || 0, a = t.minutes || t.minute || t.m || 0, r = t.seconds || t.second || t.s || 0, l = t.milliseconds || t.millisecond || t.ms || 0;
        this._input = t, this._milliseconds = +l + 1e3 * r + 6e4 * a + 36e5 * o, this._days = +s + 7 * n, this._months = +i + 12 * e, this._data = {}, this._bubble()
    }

    function a(t, e) {
        for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function r(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }

    function l(t, e) {
        for (var i = t + ""; i.length < e;)i = "0" + i;
        return i
    }

    function c(t, e, i, n) {
        var s, o, a = e._milliseconds, r = e._days, l = e._months;
        a && t._d.setTime(+t._d + a * i), (r || l) && (s = t.minute(), o = t.hour()), r && t.date(t.date() + r * i), l && t.month(t.month() + l * i), a && !n && $.updateOffset(t), (r || l) && (t.minute(s), t.hour(o))
    }

    function d(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function h(t, e) {
        var i, n = Math.min(t.length, e.length), s = Math.abs(t.length - e.length), o = 0;
        for (i = 0; n > i; i++)~~t[i] !== ~~e[i] && o++;
        return o + s
    }

    function u(t) {
        return t ? le[t] || t.toLowerCase().replace(/(.)s$/, "$1") : t
    }

    function p(t, e) {
        return e.abbr = t, j[t] || (j[t] = new n), j[t].set(e), j[t]
    }

    function f(t) {
        delete j[t]
    }

    function m(t) {
        if (!t)return $.fn._lang;
        if (!j[t] && H)try {
            require("./lang/" + t)
        } catch (e) {
            return $.fn._lang
        }
        return j[t] || $.fn._lang
    }

    function g(t) {
        return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function v(t) {
        var e, i, n = t.match(X);
        for (e = 0, i = n.length; i > e; e++)n[e] = ue[n[e]] ? ue[n[e]] : g(n[e]);
        return function (s) {
            var o = "";
            for (e = 0; i > e; e++)o += n[e] instanceof Function ? n[e].call(s, t) : n[e];
            return o
        }
    }

    function b(t, e) {
        return e = S(e, t.lang()), ce[e] || (ce[e] = v(e)), ce[e](t)
    }

    function S(t, e) {
        function i(t) {
            return e.longDateFormat(t) || t
        }

        for (var n = 5; n-- && (W.lastIndex = 0, W.test(t));)t = t.replace(W, i);
        return t
    }

    function E(t, e) {
        switch (t) {
            case"DDDD":
                return J;
            case"YYYY":
                return K;
            case"YYYYY":
                return q;
            case"S":
            case"SS":
            case"SSS":
            case"DDD":
                return G;
            case"MMM":
            case"MMMM":
            case"dd":
            case"ddd":
            case"dddd":
                return Q;
            case"a":
            case"A":
                return m(e._l)._meridiemParse;
            case"X":
                return ee;
            case"Z":
            case"ZZ":
                return Z;
            case"T":
                return te;
            case"MM":
            case"DD":
            case"YY":
            case"HH":
            case"hh":
            case"mm":
            case"ss":
            case"M":
            case"D":
            case"d":
            case"H":
            case"h":
            case"m":
            case"s":
                return Y;
            default:
                return new RegExp(t.replace("\\", ""))
        }
    }

    function y(t) {
        var e = (Z.exec(t) || [])[0], i = (e + "").match(oe) || ["-", 0, 0], n = +(60 * i[1]) + ~~i[2];
        return "+" === i[0] ? -n : n
    }

    function T(t, e, i) {
        var n, s = i._a;
        switch (t) {
            case"M":
            case"MM":
                null != e && (s[1] = ~~e - 1);
                break;
            case"MMM":
            case"MMMM":
                n = m(i._l).monthsParse(e), null != n ? s[1] = n : i._isValid = !1;
                break;
            case"D":
            case"DD":
                null != e && (s[2] = ~~e);
                break;
            case"DDD":
            case"DDDD":
                null != e && (s[1] = 0, s[2] = ~~e);
                break;
            case"YY":
                s[0] = ~~e + (~~e > 68 ? 1900 : 2e3);
                break;
            case"YYYY":
            case"YYYYY":
                s[0] = ~~e;
                break;
            case"a":
            case"A":
                i._isPm = m(i._l).isPM(e);
                break;
            case"H":
            case"HH":
            case"h":
            case"hh":
                s[3] = ~~e;
                break;
            case"m":
            case"mm":
                s[4] = ~~e;
                break;
            case"s":
            case"ss":
                s[5] = ~~e;
                break;
            case"S":
            case"SS":
            case"SSS":
                s[6] = ~~(1e3 * ("0." + e));
                break;
            case"X":
                i._d = new Date(1e3 * parseFloat(e));
                break;
            case"Z":
            case"ZZ":
                i._useUTC = !0, i._tzm = y(e)
        }
        null == e && (i._isValid = !1)
    }

    function L(t) {
        var e, i, n, s = [];
        if (!t._d) {
            for (n = w(t), e = 0; 3 > e && null == t._a[e]; ++e)t._a[e] = s[e] = n[e];
            for (; 7 > e; e++)t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            s[3] += ~~((t._tzm || 0) / 60), s[4] += ~~((t._tzm || 0) % 60), i = new Date(0), t._useUTC ? (i.setUTCFullYear(s[0], s[1], s[2]), i.setUTCHours(s[3], s[4], s[5], s[6])) : (i.setFullYear(s[0], s[1], s[2]), i.setHours(s[3], s[4], s[5], s[6])), t._d = i
        }
    }

    function _(t) {
        var e = t._i;
        t._d || (t._a = [e.years || e.year || e.y, e.months || e.month || e.M, e.days || e.day || e.d, e.hours || e.hour || e.h, e.minutes || e.minute || e.m, e.seconds || e.second || e.s, e.milliseconds || e.millisecond || e.ms], L(t))
    }

    function w(t) {
        var e = new Date;
        return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
    }

    function C(t) {
        var e, i, n, s = m(t._l), o = "" + t._i;
        for (n = S(t._f, s).match(X), t._a = [], e = 0; e < n.length; e++)i = (E(n[e], t).exec(o) || [])[0], i && (o = o.slice(o.indexOf(i) + i.length)), ue[n[e]] && T(n[e], i, t);
        o && (t._il = o), t._isPm && t._a[3] < 12 && (t._a[3] += 12), t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0), L(t)
    }

    function k(t) {
        var e, i, n, o, r, l = 99;
        for (o = 0; o < t._f.length; o++)e = a({}, t), e._f = t._f[o], C(e), i = new s(e), r = h(e._a, i.toArray()), i._il && (r += i._il.length), l > r && (l = r, n = i);
        a(t, n)
    }

    function A(t) {
        var e, i = t._i, n = ie.exec(i);
        if (n) {
            for (t._f = "YYYY-MM-DD" + (n[2] || " "), e = 0; 4 > e; e++)if (se[e][1].exec(i)) {
                t._f += se[e][0];
                break
            }
            Z.exec(i) && (t._f += " Z"), C(t)
        } else t._d = new Date(i)
    }

    function x(e) {
        var i = e._i, n = z.exec(i);
        i === t ? e._d = new Date : n ? e._d = new Date(+n[1]) : "string" == typeof i ? A(e) : d(i) ? (e._a = i.slice(0), L(e)) : i instanceof Date ? e._d = new Date(+i) : "object" == typeof i ? _(e) : e._d = new Date(i)
    }

    function D(t, e, i, n, s) {
        return s.relativeTime(e || 1, !!i, t, n)
    }

    function I(t, e, i) {
        var n = F(Math.abs(t) / 1e3), s = F(n / 60), o = F(s / 60), a = F(o / 24), r = F(a / 365), l = 45 > n && ["s", n] || 1 === s && ["m"] || 45 > s && ["mm", s] || 1 === o && ["h"] || 22 > o && ["hh", o] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", F(a / 30)] || 1 === r && ["y"] || ["yy", r];
        return l[2] = e, l[3] = t > 0, l[4] = i, D.apply({}, l)
    }

    function M(t, e, i) {
        var n, s = i - e, o = i - t.day();
        return o > s && (o -= 7), s - 7 > o && (o += 7), n = $(t).add("d", o), {
            week: Math.ceil(n.dayOfYear() / 7),
            year: n.year()
        }
    }

    function R(t) {
        var e = t._i, i = t._f;
        return null === e || "" === e ? null : ("string" == typeof e && (t._i = e = m().preparse(e)), $.isMoment(e) ? (t = a({}, e), t._d = new Date(+e._d)) : i ? d(i) ? k(t) : C(t) : x(t), new s(t))
    }

    function O(t, e) {
        $.fn[t] = $.fn[t + "s"] = function (t) {
            var i = this._isUTC ? "UTC" : "";
            return null != t ? (this._d["set" + i + e](t), $.updateOffset(this), this) : this._d["get" + i + e]()
        }
    }

    function N(t) {
        $.duration.fn[t] = function () {
            return this._data[t]
        }
    }

    function P(t, e) {
        $.duration.fn["as" + t] = function () {
            return +this / e
        }
    }

    for (var $, U, B = "2.2.1", F = Math.round, j = {}, H = "undefined" != typeof module && module.exports, z = /^\/?Date\((\-?\d+)/i, V = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, X = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, W = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Y = /\d\d?/, G = /\d{1,3}/, J = /\d{3}/, K = /\d{1,4}/, q = /[+\-]?\d{1,6}/, Q = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Z = /Z|[\+\-]\d\d:?\d\d/i, te = /T/i, ee = /[\+\-]?\d+(\.\d{1,3})?/, ie = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, ne = "YYYY-MM-DDTHH:mm:ssZ", se = [["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], oe = /([\+\-]|\d\d)/gi, ae = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), re = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, le = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        w: "week",
        W: "isoweek",
        M: "month",
        y: "year"
    }, ce = {}, de = "DDD w W M D d".split(" "), he = "M D H h m s w W".split(" "), ue = {
        M: function () {
            return this.month() + 1
        }, MMM: function (t) {
            return this.lang().monthsShort(this, t)
        }, MMMM: function (t) {
            return this.lang().months(this, t)
        }, D: function () {
            return this.date()
        }, DDD: function () {
            return this.dayOfYear()
        }, d: function () {
            return this.day()
        }, dd: function (t) {
            return this.lang().weekdaysMin(this, t)
        }, ddd: function (t) {
            return this.lang().weekdaysShort(this, t)
        }, dddd: function (t) {
            return this.lang().weekdays(this, t)
        }, w: function () {
            return this.week()
        }, W: function () {
            return this.isoWeek()
        }, YY: function () {
            return l(this.year() % 100, 2)
        }, YYYY: function () {
            return l(this.year(), 4)
        }, YYYYY: function () {
            return l(this.year(), 5)
        }, gg: function () {
            return l(this.weekYear() % 100, 2)
        }, gggg: function () {
            return this.weekYear()
        }, ggggg: function () {
            return l(this.weekYear(), 5)
        }, GG: function () {
            return l(this.isoWeekYear() % 100, 2)
        }, GGGG: function () {
            return this.isoWeekYear()
        }, GGGGG: function () {
            return l(this.isoWeekYear(), 5)
        }, e: function () {
            return this.weekday()
        }, E: function () {
            return this.isoWeekday()
        }, a: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        }, A: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        }, H: function () {
            return this.hours()
        }, h: function () {
            return this.hours() % 12 || 12
        }, m: function () {
            return this.minutes()
        }, s: function () {
            return this.seconds()
        }, S: function () {
            return ~~(this.milliseconds() / 100)
        }, SS: function () {
            return l(~~(this.milliseconds() / 10), 2)
        }, SSS: function () {
            return l(this.milliseconds(), 3)
        }, Z: function () {
            var t = -this.zone(), e = "+";
            return 0 > t && (t = -t, e = "-"), e + l(~~(t / 60), 2) + ":" + l(~~t % 60, 2)
        }, ZZ: function () {
            var t = -this.zone(), e = "+";
            return 0 > t && (t = -t, e = "-"), e + l(~~(10 * t / 6), 4)
        }, z: function () {
            return this.zoneAbbr()
        }, zz: function () {
            return this.zoneName()
        }, X: function () {
            return this.unix()
        }
    }; de.length;)U = de.pop(), ue[U + "o"] = i(ue[U], U);
    for (; he.length;)U = he.pop(), ue[U + U] = e(ue[U], 2);
    for (ue.DDDD = e(ue.DDD, 3), a(n.prototype, {
        set: function (t) {
            var e, i;
            for (i in t)e = t[i], "function" == typeof e ? this[i] = e : this["_" + i] = e
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function (t) {
            return this._months[t.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function (t) {
            return this._monthsShort[t.month()]
        },
        monthsParse: function (t) {
            var e, i, n;
            for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)if (this._monthsParse[e] || (i = $.utc([2e3, e]), n = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[e] = new RegExp(n.replace(".", ""), "i")), this._monthsParse[e].test(t))return e
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function (t) {
            return this._weekdays[t.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function (t) {
            return this._weekdaysShort[t.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function (t) {
            return this._weekdaysMin[t.day()]
        },
        weekdaysParse: function (t) {
            var e, i, n;
            for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)if (this._weekdaysParse[e] || (i = $([2e3, 1]).day(e), n = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[e] = new RegExp(n.replace(".", ""), "i")), this._weekdaysParse[e].test(t))return e
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function (t) {
            var e = this._longDateFormat[t];
            return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (t) {
                return t.slice(1)
            }), this._longDateFormat[t] = e), e
        },
        isPM: function (t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function (t, e, i) {
            return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function (t, e) {
            var i = this._calendar[t];
            return "function" == typeof i ? i.apply(e) : i
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function (t, e, i, n) {
            var s = this._relativeTime[i];
            return "function" == typeof s ? s(t, e, i, n) : s.replace(/%d/i, t)
        },
        pastFuture: function (t, e) {
            var i = this._relativeTime[t > 0 ? "future" : "past"];
            return "function" == typeof i ? i(e) : i.replace(/%s/i, e)
        },
        ordinal: function (t) {
            return this._ordinal.replace("%d", t)
        },
        _ordinal: "%d",
        preparse: function (t) {
            return t
        },
        postformat: function (t) {
            return t
        },
        week: function (t) {
            return M(t, this._week.dow, this._week.doy).week
        },
        _week: {dow: 0, doy: 6}
    }), $ = function (t, e, i) {
        return R({_i: t, _f: e, _l: i, _isUTC: !1})
    }, $.utc = function (t, e, i) {
        return R({_useUTC: !0, _isUTC: !0, _l: i, _i: t, _f: e}).utc()
    }, $.unix = function (t) {
        return $(1e3 * t)
    }, $.duration = function (t, e) {
        var i, n, s = $.isDuration(t), a = "number" == typeof t, r = s ? t._input : a ? {} : t, l = V.exec(t);
        return a ? e ? r[e] = t : r.milliseconds = t : l && (i = "-" === l[1] ? -1 : 1, r = {
            y: 0,
            d: ~~l[2] * i,
            h: ~~l[3] * i,
            m: ~~l[4] * i,
            s: ~~l[5] * i,
            ms: ~~l[6] * i
        }), n = new o(r), s && t.hasOwnProperty("_lang") && (n._lang = t._lang), n
    }, $.version = B, $.defaultFormat = ne, $.updateOffset = function () {
    }, $.lang = function (t, e) {
        return t ? (t = t.toLowerCase(), t = t.replace("_", "-"), e ? p(t, e) : null === e ? (f(t), t = "en") : j[t] || m(t), void($.duration.fn._lang = $.fn._lang = m(t))) : $.fn._lang._abbr
    }, $.langData = function (t) {
        return t && t._lang && t._lang._abbr && (t = t._lang._abbr), m(t)
    }, $.isMoment = function (t) {
        return t instanceof s
    }, $.isDuration = function (t) {
        return t instanceof o
    }, a($.fn = s.prototype, {
        clone: function () {
            return $(this)
        }, valueOf: function () {
            return +this._d + 6e4 * (this._offset || 0)
        }, unix: function () {
            return Math.floor(+this / 1e3)
        }, toString: function () {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, toDate: function () {
            return this._offset ? new Date(+this) : this._d
        }, toISOString: function () {
            return b($(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }, toArray: function () {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
        }, isValid: function () {
            return null == this._isValid && (this._isValid = this._a ? !h(this._a, (this._isUTC ? $.utc(this._a) : $(this._a)).toArray()) : !isNaN(this._d.getTime())), !!this._isValid
        }, invalidAt: function () {
            var t, e = this._a, i = (this._isUTC ? $.utc(this._a) : $(this._a)).toArray();
            for (t = 6; t >= 0 && e[t] === i[t]; --t);
            return t
        }, utc: function () {
            return this.zone(0)
        }, local: function () {
            return this.zone(0), this._isUTC = !1, this
        }, format: function (t) {
            var e = b(this, t || $.defaultFormat);
            return this.lang().postformat(e)
        }, add: function (t, e) {
            var i;
            return i = "string" == typeof t ? $.duration(+e, t) : $.duration(t, e), c(this, i, 1), this
        }, subtract: function (t, e) {
            var i;
            return i = "string" == typeof t ? $.duration(+e, t) : $.duration(t, e), c(this, i, -1), this
        }, diff: function (t, e, i) {
            var n, s, o = this._isUTC ? $(t).zone(this._offset || 0) : $(t).local(), a = 6e4 * (this.zone() - o.zone());
            return e = u(e), "year" === e || "month" === e ? (n = 432e5 * (this.daysInMonth() + o.daysInMonth()), s = 12 * (this.year() - o.year()) + (this.month() - o.month()), s += (this - $(this).startOf("month") - (o - $(o).startOf("month"))) / n, s -= 6e4 * (this.zone() - $(this).startOf("month").zone() - (o.zone() - $(o).startOf("month").zone())) / n, "year" === e && (s /= 12)) : (n = this - o, s = "second" === e ? n / 1e3 : "minute" === e ? n / 6e4 : "hour" === e ? n / 36e5 : "day" === e ? (n - a) / 864e5 : "week" === e ? (n - a) / 6048e5 : n), i ? s : r(s)
        }, from: function (t, e) {
            return $.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
        }, fromNow: function (t) {
            return this.from($(), t)
        }, calendar: function () {
            var t = this.diff($().zone(this.zone()).startOf("day"), "days", !0), e = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(e, this))
        }, isLeapYear: function () {
            var t = this.year();
            return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400
        }, isDST: function () {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        }, day: function (t) {
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? "string" == typeof t && (t = this.lang().weekdaysParse(t), "number" != typeof t) ? this : this.add({d: t - e}) : e
        }, month: function (t) {
            var e, i = this._isUTC ? "UTC" : "";
            return null != t ? "string" == typeof t && (t = this.lang().monthsParse(t), "number" != typeof t) ? this : (e = this.date(), this.date(1), this._d["set" + i + "Month"](t), this.date(Math.min(e, this.daysInMonth())), $.updateOffset(this), this) : this._d["get" + i + "Month"]()
        }, startOf: function (t) {
            switch (t = u(t)) {
                case"year":
                    this.month(0);
                case"month":
                    this.date(1);
                case"week":
                case"isoweek":
                case"day":
                    this.hours(0);
                case"hour":
                    this.minutes(0);
                case"minute":
                    this.seconds(0);
                case"second":
                    this.milliseconds(0)
            }
            return "week" === t ? this.weekday(0) : "isoweek" === t && this.isoWeekday(1), this
        }, endOf: function (t) {
            return t = u(t), this.startOf(t).add("isoweek" === t ? "week" : t, 1).subtract("ms", 1)
        }, isAfter: function (t, e) {
            return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) > +$(t).startOf(e)
        }, isBefore: function (t, e) {
            return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) < +$(t).startOf(e)
        }, isSame: function (t, e) {
            return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) === +$(t).startOf(e)
        }, min: function (t) {
            return t = $.apply(null, arguments), this > t ? this : t
        }, max: function (t) {
            return t = $.apply(null, arguments), t > this ? this : t
        }, zone: function (t) {
            var e = this._offset || 0;
            return null == t ? this._isUTC ? e : this._d.getTimezoneOffset() : ("string" == typeof t && (t = y(t)), Math.abs(t) < 16 && (t = 60 * t), this._offset = t, this._isUTC = !0, e !== t && c(this, $.duration(e - t, "m"), 1, !0), this)
        }, zoneAbbr: function () {
            return this._isUTC ? "UTC" : ""
        }, zoneName: function () {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }, hasAlignedHourOffset: function (t) {
            return t = t ? $(t).zone() : 0, 0 === (this.zone() - t) % 60
        }, daysInMonth: function () {
            return $.utc([this.year(), this.month() + 1, 0]).date()
        }, dayOfYear: function (t) {
            var e = F(($(this).startOf("day") - $(this).startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add("d", t - e)
        }, weekYear: function (t) {
            var e = M(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == t ? e : this.add("y", t - e)
        }, isoWeekYear: function (t) {
            var e = M(this, 1, 4).year;
            return null == t ? e : this.add("y", t - e)
        }, week: function (t) {
            var e = this.lang().week(this);
            return null == t ? e : this.add("d", 7 * (t - e))
        }, isoWeek: function (t) {
            var e = M(this, 1, 4).week;
            return null == t ? e : this.add("d", 7 * (t - e))
        }, weekday: function (t) {
            var e = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
            return null == t ? e : this.add("d", t - e)
        }, isoWeekday: function (t) {
            return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
        }, get: function (t) {
            return t = u(t), this[t.toLowerCase()]()
        }, set: function (t, e) {
            t = u(t), this[t.toLowerCase()](e)
        }, lang: function (e) {
            return e === t ? this._lang : (this._lang = m(e), this)
        }
    }), U = 0; U < ae.length; U++)O(ae[U].toLowerCase().replace(/s$/, ""), ae[U]);
    O("year", "FullYear"), $.fn.days = $.fn.day, $.fn.months = $.fn.month, $.fn.weeks = $.fn.week, $.fn.isoWeeks = $.fn.isoWeek, $.fn.toJSON = $.fn.toISOString, a($.duration.fn = o.prototype, {
        _bubble: function () {
            var t, e, i, n, s = this._milliseconds, o = this._days, a = this._months, l = this._data;
            l.milliseconds = s % 1e3, t = r(s / 1e3), l.seconds = t % 60, e = r(t / 60), l.minutes = e % 60, i = r(e / 60), l.hours = i % 24, o += r(i / 24), l.days = o % 30, a += r(o / 30), l.months = a % 12, n = r(a / 12), l.years = n
        }, weeks: function () {
            return r(this.days() / 7)
        }, valueOf: function () {
            return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * ~~(this._months / 12)
        }, humanize: function (t) {
            var e = +this, i = I(e, !t, this.lang());
            return t && (i = this.lang().pastFuture(e, i)), this.lang().postformat(i)
        }, add: function (t, e) {
            var i = $.duration(t, e);
            return this._milliseconds += i._milliseconds, this._days += i._days, this._months += i._months, this._bubble(), this
        }, subtract: function (t, e) {
            var i = $.duration(t, e);
            return this._milliseconds -= i._milliseconds, this._days -= i._days, this._months -= i._months, this._bubble(), this
        }, get: function (t) {
            return t = u(t), this[t.toLowerCase() + "s"]()
        }, as: function (t) {
            return t = u(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
        }, lang: $.fn.lang
    });
    for (U in re)re.hasOwnProperty(U) && (P(U, re[U]), N(U.toLowerCase()));
    P("Weeks", 6048e5), $.duration.fn.asMonths = function () {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, $.lang("en", {
        ordinal: function (t) {
            var e = t % 10, i = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + i
        }
    }), H && (module.exports = $), "undefined" == typeof ender && (this.moment = $), "function" == typeof define && define.amd && define("moment", [], function () {
        return $
    })
}.call(this), function (t, e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Spinner = e()
}(this, function () {
    "use strict";
    function t(t, e) {
        var i, n = document.createElement(t || "div");
        for (i in e)n[i] = e[i];
        return n
    }

    function e(t) {
        for (var e = 1, i = arguments.length; i > e; e++)t.appendChild(arguments[e]);
        return t
    }

    function i(t, e, i, n) {
        var s = ["opacity", e, ~~(100 * t), i, n].join("-"), o = .01 + i / n * 100, a = Math.max(1 - (1 - t) / e * (100 - o), t), r = c.substring(0, c.indexOf("Animation")).toLowerCase(), l = r && "-" + r + "-" || "";
        return h[s] || (u.insertRule("@" + l + "keyframes " + s + "{0%{opacity:" + a + "}" + o + "%{opacity:" + t + "}" + (o + .01) + "%{opacity:1}" + (o + e) % 100 + "%{opacity:" + t + "}100%{opacity:" + a + "}}", u.cssRules.length), h[s] = 1), s
    }

    function n(t, e) {
        var i, n, s = t.style;
        if (void 0 !== s[e])return e;
        for (e = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < d.length; n++)if (i = d[n] + e, void 0 !== s[i])return i
    }

    function s(t, e) {
        for (var i in e)t.style[n(t, i) || i] = e[i];
        return t
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i)void 0 === t[n] && (t[n] = i[n])
        }
        return t
    }

    function a(t) {
        for (var e = {x: t.offsetLeft, y: t.offsetTop}; t = t.offsetParent;)e.x += t.offsetLeft, e.y += t.offsetTop;
        return e
    }

    function r(t) {
        return "undefined" == typeof this ? new r(t) : void(this.opts = o(t || {}, r.defaults, p))
    }

    function l() {
        function i(e, i) {
            return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i)
        }

        u.addRule(".spin-vml", "behavior:url(#default#VML)"), r.prototype.lines = function (t, n) {
            function o() {
                return s(i("group", {coordsize: c + " " + c, coordorigin: -l + " " + -l}), {width: c, height: c})
            }

            function a(t, a, r) {
                e(h, e(s(o(), {
                    rotation: 360 / n.lines * t + "deg",
                    left: ~~a
                }), e(s(i("roundrect", {arcsize: n.corners}), {
                    width: l,
                    height: n.width,
                    left: n.radius,
                    top: -n.width >> 1,
                    filter: r
                }), i("fill", {color: n.color, opacity: n.opacity}), i("stroke", {opacity: 0}))))
            }

            var r, l = n.length + n.width, c = 2 * l, d = 2 * -(n.width + n.length) + "px", h = s(o(), {
                position: "absolute",
                top: d,
                left: d
            });
            if (n.shadow)for (r = 1; r <= n.lines; r++)a(r, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (r = 1; r <= n.lines; r++)a(r);
            return e(t, h)
        }, r.prototype.opacity = function (t, e, i, n) {
            var s = t.firstChild;
            n = n.shadow && n.lines || 0, s && e + n < s.childNodes.length && (s = s.childNodes[e + n], s = s && s.firstChild, s = s && s.firstChild, s && (s.opacity = i))
        }
    }

    var c, d = ["webkit", "Moz", "ms", "O"], h = {}, u = function () {
        var i = t("style", {type: "text/css"});
        return e(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet
    }(), p = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: .25,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "auto",
        left: "auto",
        position: "relative"
    };
    r.defaults = {}, o(r.prototype, {
        spin: function (e) {
            this.stop();
            var i, n, o = this, r = o.opts, l = o.el = s(t(0, {className: r.className}), {
                position: r.position,
                width: 0,
                zIndex: r.zIndex
            }), d = r.radius + r.length + r.width;
            if (e && (e.insertBefore(l, e.firstChild || null), n = a(e), i = a(l), s(l, {
                    left: ("auto" == r.left ? n.x - i.x + (e.offsetWidth >> 1) : parseInt(r.left, 10) + d) + "px",
                    top: ("auto" == r.top ? n.y - i.y + (e.offsetHeight >> 1) : parseInt(r.top, 10) + d) + "px"
                })), l.setAttribute("role", "progressbar"), o.lines(l, o.opts), !c) {
                var h, u = 0, p = (r.lines - 1) * (1 - r.direction) / 2, f = r.fps, m = f / r.speed, g = (1 - r.opacity) / (m * r.trail / 100), v = m / r.lines;
                !function b() {
                    u++;
                    for (var t = 0; t < r.lines; t++)h = Math.max(1 - (u + (r.lines - t) * v) % m * g, r.opacity), o.opacity(l, t * r.direction + p, h, r);
                    o.timeout = o.el && setTimeout(b, ~~(1e3 / f))
                }()
            }
            return o
        }, stop: function () {
            var t = this.el;
            return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this
        }, lines: function (n, o) {
            function a(e, i) {
                return s(t(), {
                    position: "absolute",
                    width: o.length + o.width + "px",
                    height: o.width + "px",
                    background: e,
                    boxShadow: i,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / o.lines * l + o.rotate) + "deg) translate(" + o.radius + "px,0)",
                    borderRadius: (o.corners * o.width >> 1) + "px"
                })
            }

            for (var r, l = 0, d = (o.lines - 1) * (1 - o.direction) / 2; l < o.lines; l++)r = s(t(), {
                position: "absolute",
                top: 1 + ~(o.width / 2) + "px",
                transform: o.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: o.opacity,
                animation: c && i(o.opacity, o.trail, d + l * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite"
            }), o.shadow && e(r, s(a("#000", "0 0 4px #000"), {top: "2px"})), e(n, e(r, a(o.color, "0 0 1px rgba(0,0,0,.1)")));
            return n
        }, opacity: function (t, e, i) {
            e < t.childNodes.length && (t.childNodes[e].style.opacity = i)
        }
    });
    var f = s(t("group"), {behavior: "url(#default#VML)"});
    return !n(f, "transform") && f.adj ? l() : c = n(f, "animation"), r
}), function (t, e) {
    "object" == typeof exports ? module.exports = e(require("spin.js")) : "function" == typeof define && define.amd ? define(["spin"], e) : t.Ladda = e(t.Spinner)
}(this, function (t) {
    "use strict";
    function e(t) {
        if ("undefined" == typeof t)return void console.warn("Ladda button target must be defined.");
        t.querySelector(".ladda-label") || (t.innerHTML = '<span class="ladda-label">' + t.innerHTML + "</span>");
        var e, i = t.querySelector(".ladda-spinner");
        i || (i = document.createElement("span"), i.className = "ladda-spinner"), t.appendChild(i);
        var n, s = {
            start: function () {
                return e || (e = a(t)), t.setAttribute("disabled", ""), t.setAttribute("data-loading", ""), clearTimeout(n), e.spin(i), this.setProgress(0), this
            }, startAfter: function (t) {
                return clearTimeout(n), n = setTimeout(function () {
                    s.start()
                }, t), this
            }, stop: function () {
                return t.removeAttribute("disabled"), t.removeAttribute("data-loading"), clearTimeout(n), e && (n = setTimeout(function () {
                    e.stop()
                }, 1e3)), this
            }, toggle: function () {
                return this.isLoading() ? this.stop() : this.start(), this
            }, setProgress: function (e) {
                e = Math.max(Math.min(e, 1), 0);
                var i = t.querySelector(".ladda-progress");
                0 === e && i && i.parentNode ? i.parentNode.removeChild(i) : (i || (i = document.createElement("div"), i.className = "ladda-progress", t.appendChild(i)), i.style.width = (e || 0) * t.offsetWidth + "px")
            }, enable: function () {
                return this.stop(), this
            }, disable: function () {
                return this.stop(), t.setAttribute("disabled", ""), this
            }, isLoading: function () {
                return t.hasAttribute("data-loading")
            }, remove: function () {
                clearTimeout(n), t.removeAttribute("disabled", ""), t.removeAttribute("data-loading", ""), e && (e.stop(), e = null);
                for (var i = 0, o = l.length; o > i; i++)if (s === l[i]) {
                    l.splice(i, 1);
                    break
                }
            }
        };
        return l.push(s), s
    }

    function i(t, e) {
        for (; t.parentNode && t.tagName !== e;)t = t.parentNode;
        return e === t.tagName ? t : void 0
    }

    function n(t) {
        for (var e = ["input", "textarea", "select"], i = [], n = 0; n < e.length; n++)for (var s = t.getElementsByTagName(e[n]), o = 0; o < s.length; o++)s[o].hasAttribute("required") && i.push(s[o]);
        return i
    }

    function s(t, s) {
        s = s || {};
        var o = [];
        "string" == typeof t ? o = r(document.querySelectorAll(t)) : "object" == typeof t && "string" == typeof t.nodeName && (o = [t]);
        for (var a = 0, l = o.length; l > a; a++)!function () {
            var t = o[a];
            if ("function" == typeof t.addEventListener) {
                var r = e(t), l = -1;
                t.addEventListener("click", function () {
                    var e = !0, o = i(t, "FORM");
                    if ("undefined" != typeof o)for (var a = n(o), c = 0; c < a.length; c++)"" === a[c].value.replace(/^\s+|\s+$/g, "") && (e = !1), "checkbox" !== a[c].type && "radio" !== a[c].type || a[c].checked || (e = !1);
                    e && (r.startAfter(1), "number" == typeof s.timeout && (clearTimeout(l), l = setTimeout(r.stop, s.timeout)), "function" == typeof s.callback && s.callback.apply(null, [r]))
                }, !1)
            }
        }()
    }

    function o() {
        for (var t = 0, e = l.length; e > t; t++)l[t].stop()
    }

    function a(e) {
        var i, n = e.offsetHeight;
        0 === n && (n = parseFloat(window.getComputedStyle(e).height)), n > 32 && (n *= .8), e.hasAttribute("data-spinner-size") && (n = parseInt(e.getAttribute("data-spinner-size"), 10)), e.hasAttribute("data-spinner-color") && (i = e.getAttribute("data-spinner-color"));
        var s = 12, o = .2 * n, a = .6 * o, r = 7 > o ? 2 : 3;
        return new t({
            color: i || "#fff",
            lines: s,
            radius: o,
            length: a,
            width: r,
            zIndex: "auto",
            top: "auto",
            left: "auto",
            className: ""
        })
    }

    function r(t) {
        for (var e = [], i = 0; i < t.length; i++)e.push(t[i]);
        return e
    }

    var l = [];
    return {bind: s, create: e, stopAll: o}
}), function (t, e) {
    function i(t, e, i) {
        return t.addEventListener ? void t.addEventListener(e, i, !1) : void t.attachEvent("on" + e, i)
    }

    function n(t) {
        if ("keypress" == t.type) {
            var e = String.fromCharCode(t.which);
            return t.shiftKey || (e = e.toLowerCase()), e
        }
        return _[t.which] ? _[t.which] : w[t.which] ? w[t.which] : String.fromCharCode(t.which).toLowerCase()
    }

    function s(t, e) {
        return t.sort().join(",") === e.sort().join(",")
    }

    function o(t) {
        t = t || {};
        var e, i = !1;
        for (e in D)t[e] ? i = !0 : D[e] = 0;
        i || (R = !1)
    }

    function a(t, e, i, n, o, a) {
        var r, l, c = [], d = i.type;
        if (!A[t])return [];
        for ("keyup" == d && p(t) && (e = [t]), r = 0; r < A[t].length; ++r)if (l = A[t][r], (n || !l.seq || D[l.seq] == l.level) && d == l.action && ("keypress" == d && !i.metaKey && !i.ctrlKey || s(e, l.modifiers))) {
            var h = !n && l.combo == o, u = n && l.seq == n && l.level == a;
            (h || u) && A[t].splice(r, 1), c.push(l)
        }
        return c
    }

    function r(t) {
        var e = [];
        return t.shiftKey && e.push("shift"), t.altKey && e.push("alt"), t.ctrlKey && e.push("ctrl"), t.metaKey && e.push("meta"), e
    }

    function l(t) {
        return t.preventDefault ? void t.preventDefault() : void(t.returnValue = !1)
    }

    function c(t) {
        return t.stopPropagation ? void t.stopPropagation() : void(t.cancelBubble = !0)
    }

    function d(t, e, i, n) {
        N.stopCallback(e, e.target || e.srcElement, i, n) || t(e, i) === !1 && (l(e), c(e))
    }

    function h(t, e, i) {
        var n, s = a(t, e, i), r = {}, l = 0, c = !1;
        for (n = 0; n < s.length; ++n)s[n].seq && (l = Math.max(l, s[n].level));
        for (n = 0; n < s.length; ++n)if (s[n].seq) {
            if (s[n].level != l)continue;
            c = !0, r[s[n].seq] = 1, d(s[n].callback, i, s[n].combo, s[n].seq)
        } else c || d(s[n].callback, i, s[n].combo);
        var h = "keypress" == i.type && M;
        i.type != R || p(t) || h || o(r), M = c && "keydown" == i.type
    }

    function u(t) {
        "number" != typeof t.which && (t.which = t.keyCode);
        var e = n(t);
        if (e)return "keyup" == t.type && I === e ? void(I = !1) : void N.handleKey(e, r(t), t)
    }

    function p(t) {
        return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t
    }

    function f() {
        clearTimeout(L), L = setTimeout(o, 1e3)
    }

    function m() {
        if (!T) {
            T = {};
            for (var t in _)t > 95 && 112 > t || _.hasOwnProperty(t) && (T[_[t]] = t)
        }
        return T
    }

    function g(t, e, i) {
        return i || (i = m()[t] ? "keydown" : "keypress"), "keypress" == i && e.length && (i = "keydown"), i
    }

    function v(t, e, i, s) {
        function a(e) {
            return function () {
                R = e, ++D[t], f()
            }
        }

        function r(e) {
            d(i, e, t), "keyup" !== s && (I = n(e)), setTimeout(o, 10)
        }

        D[t] = 0;
        for (var l = 0; l < e.length; ++l) {
            var c = l + 1 === e.length, h = c ? r : a(s || S(e[l + 1]).action);
            E(e[l], h, s, t, l)
        }
    }

    function b(t) {
        return "+" === t ? ["+"] : t.split("+")
    }

    function S(t, e) {
        var i, n, s, o = [];
        for (i = b(t), s = 0; s < i.length; ++s)n = i[s], k[n] && (n = k[n]), e && "keypress" != e && C[n] && (n = C[n], o.push("shift")), p(n) && o.push(n);
        return e = g(n, o, e), {key: n, modifiers: o, action: e}
    }

    function E(t, e, i, n, s) {
        x[t + ":" + i] = e, t = t.replace(/\s+/g, " ");
        var o, r = t.split(" ");
        return r.length > 1 ? void v(t, r, e, i) : (o = S(t, i), A[o.key] = A[o.key] || [], a(o.key, o.modifiers, {type: o.action}, n, t, s), void A[o.key][n ? "unshift" : "push"]({
            callback: e,
            modifiers: o.modifiers,
            action: o.action,
            seq: n,
            level: s,
            combo: t
        }))
    }

    function y(t, e, i) {
        for (var n = 0; n < t.length; ++n)E(t[n], e, i)
    }

    for (var T, L, _ = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "ins",
        46: "del",
        91: "meta",
        93: "meta",
        224: "meta"
    }, w = {
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    }, C = {
        "~": "`",
        "!": "1",
        "@": "2",
        "#": "3",
        $: "4",
        "%": "5",
        "^": "6",
        "&": "7",
        "*": "8",
        "(": "9",
        ")": "0",
        _: "-",
        "+": "=",
        ":": ";",
        '"': "'",
        "<": ",",
        ">": ".",
        "?": "/",
        "|": "\\"
    }, k = {
        option: "alt",
        command: "meta",
        "return": "enter",
        escape: "esc",
        mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    }, A = {}, x = {}, D = {}, I = !1, M = !1, R = !1, O = 1; 20 > O; ++O)_[111 + O] = "f" + O;
    for (O = 0; 9 >= O; ++O)_[O + 96] = O;
    i(e, "keypress", u), i(e, "keydown", u), i(e, "keyup", u);
    var N = {
        bind: function (t, e, i) {
            return t = t instanceof Array ? t : [t], y(t, e, i), this
        }, unbind: function (t, e) {
            return N.bind(t, function () {
            }, e)
        }, trigger: function (t, e) {
            return x[t + ":" + e] && x[t + ":" + e]({}, t), this
        }, reset: function () {
            return A = {}, x = {}, this
        }, stopCallback: function (t, e) {
            return (" " + e.className + " ").indexOf(" mousetrap ") > -1 ? !1 : "INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable
        }, handleKey: h
    };
    t.Mousetrap = N, "function" == typeof define && define.amd && define(N)
}(window, document), function (t, e, i, n) {
    "use strict";
    function s(t, e, i) {
        return setTimeout(d(t, i), e)
    }

    function o(t, e, i) {
        return Array.isArray(t) ? (a(t, i[e], i), !0) : !1
    }

    function a(t, e, i) {
        var s;
        if (t)if (t.forEach)t.forEach(e, i); else if (t.length !== n)for (s = 0; s < t.length;)e.call(i, t[s], s, t), s++; else for (s in t)t.hasOwnProperty(s) && e.call(i, t[s], s, t)
    }

    function r(t, e, i) {
        for (var s = Object.keys(e), o = 0; o < s.length;)(!i || i && t[s[o]] === n) && (t[s[o]] = e[s[o]]), o++;
        return t
    }

    function l(t, e) {
        return r(t, e, !0)
    }

    function c(t, e, i) {
        var n, s = e.prototype;
        n = t.prototype = Object.create(s), n.constructor = t, n._super = s, i && r(n, i)
    }

    function d(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function h(t, e) {
        return typeof t == de ? t.apply(e ? e[0] || n : n, e) : t
    }

    function u(t, e) {
        return t === n ? e : t
    }

    function p(t, e, i) {
        a(v(e), function (e) {
            t.addEventListener(e, i, !1)
        })
    }

    function f(t, e, i) {
        a(v(e), function (e) {
            t.removeEventListener(e, i, !1)
        })
    }

    function m(t, e) {
        for (; t;) {
            if (t == e)return !0;
            t = t.parentNode
        }
        return !1
    }

    function g(t, e) {
        return t.indexOf(e) > -1
    }

    function v(t) {
        return t.trim().split(/\s+/g)
    }

    function b(t, e, i) {
        if (t.indexOf && !i)return t.indexOf(e);
        for (var n = 0; n < t.length;) {
            if (i && t[n][i] == e || !i && t[n] === e)return n;
            n++
        }
        return -1
    }

    function S(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function E(t, e, i) {
        for (var n = [], s = [], o = 0; o < t.length;) {
            var a = e ? t[o][e] : t[o];
            b(s, a) < 0 && n.push(t[o]), s[o] = a, o++
        }
        return i && (n = e ? n.sort(function (t, i) {
            return t[e] > i[e]
        }) : n.sort()), n
    }

    function y(t, e) {
        for (var i, s, o = e[0].toUpperCase() + e.slice(1), a = 0; a < le.length;) {
            if (i = le[a], s = i ? i + o : e, s in t)return s;
            a++
        }
        return n
    }

    function T() {
        return fe++
    }

    function L(t) {
        var e = t.ownerDocument;
        return e.defaultView || e.parentWindow
    }

    function _(t, e) {
        var i = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
            h(t.options.enable, [t]) && i.handler(e)
        }, this.init()
    }

    function w(t) {
        var e, i = t.options.inputClass;
        return new (e = i ? i : ve ? B : be ? H : ge ? V : U)(t, C)
    }

    function C(t, e, i) {
        var n = i.pointers.length, s = i.changedPointers.length, o = e & _e && n - s === 0, a = e & (Ce | ke) && n - s === 0;
        i.isFirst = !!o, i.isFinal = !!a, o && (t.session = {}), i.eventType = e, k(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
    }

    function k(t, e) {
        var i = t.session, n = e.pointers, s = n.length;
        i.firstInput || (i.firstInput = D(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = D(e) : 1 === s && (i.firstMultiple = !1);
        var o = i.firstInput, a = i.firstMultiple, r = a ? a.center : o.center, l = e.center = I(n);
        e.timeStamp = pe(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = N(r, l), e.distance = O(r, l), A(i, e), e.offsetDirection = R(e.deltaX, e.deltaY), e.scale = a ? $(a.pointers, n) : 1, e.rotation = a ? P(a.pointers, n) : 0, x(i, e);
        var c = t.element;
        m(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
    }

    function A(t, e) {
        var i = e.center, n = t.offsetDelta || {}, s = t.prevDelta || {}, o = t.prevInput || {};
        (e.eventType === _e || o.eventType === Ce) && (s = t.prevDelta = {
            x: o.deltaX || 0,
            y: o.deltaY || 0
        }, n = t.offsetDelta = {x: i.x, y: i.y}), e.deltaX = s.x + (i.x - n.x), e.deltaY = s.y + (i.y - n.y)
    }

    function x(t, e) {
        var i, s, o, a, r = t.lastInterval || e, l = e.timeStamp - r.timeStamp;
        if (e.eventType != ke && (l > Le || r.velocity === n)) {
            var c = r.deltaX - e.deltaX, d = r.deltaY - e.deltaY, h = M(l, c, d);
            s = h.x, o = h.y, i = ue(h.x) > ue(h.y) ? h.x : h.y, a = R(c, d), t.lastInterval = e
        } else i = r.velocity, s = r.velocityX, o = r.velocityY, a = r.direction;
        e.velocity = i, e.velocityX = s, e.velocityY = o, e.direction = a
    }

    function D(t) {
        for (var e = [], i = 0; i < t.pointers.length;)e[i] = {
            clientX: he(t.pointers[i].clientX),
            clientY: he(t.pointers[i].clientY)
        }, i++;
        return {timeStamp: pe(), pointers: e, center: I(e), deltaX: t.deltaX, deltaY: t.deltaY}
    }

    function I(t) {
        var e = t.length;
        if (1 === e)return {x: he(t[0].clientX), y: he(t[0].clientY)};
        for (var i = 0, n = 0, s = 0; e > s;)i += t[s].clientX, n += t[s].clientY, s++;
        return {x: he(i / e), y: he(n / e)}
    }

    function M(t, e, i) {
        return {x: e / t || 0, y: i / t || 0}
    }

    function R(t, e) {
        return t === e ? Ae : ue(t) >= ue(e) ? t > 0 ? xe : De : e > 0 ? Ie : Me
    }

    function O(t, e, i) {
        i || (i = Pe);
        var n = e[i[0]] - t[i[0]], s = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + s * s)
    }

    function N(t, e, i) {
        i || (i = Pe);
        var n = e[i[0]] - t[i[0]], s = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(s, n) / Math.PI
    }

    function P(t, e) {
        return N(e[1], e[0], $e) - N(t[1], t[0], $e)
    }

    function $(t, e) {
        return O(e[0], e[1], $e) / O(t[0], t[1], $e)
    }

    function U() {
        this.evEl = Be, this.evWin = Fe, this.allow = !0, this.pressed = !1, _.apply(this, arguments)
    }

    function B() {
        this.evEl = ze, this.evWin = Ve, _.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function F() {
        this.evTarget = We, this.evWin = Ye, this.started = !1, _.apply(this, arguments)
    }

    function j(t, e) {
        var i = S(t.touches), n = S(t.changedTouches);
        return e & (Ce | ke) && (i = E(i.concat(n), "identifier", !0)), [i, n]
    }

    function H() {
        this.evTarget = Je, this.targetIds = {}, _.apply(this, arguments)
    }

    function z(t, e) {
        var i = S(t.touches), n = this.targetIds;
        if (e & (_e | we) && 1 === i.length)return n[i[0].identifier] = !0, [i, i];
        var s, o, a = S(t.changedTouches), r = [], l = this.target;
        if (o = i.filter(function (t) {
                return m(t.target, l)
            }), e === _e)for (s = 0; s < o.length;)n[o[s].identifier] = !0, s++;
        for (s = 0; s < a.length;)n[a[s].identifier] && r.push(a[s]), e & (Ce | ke) && delete n[a[s].identifier], s++;
        return r.length ? [E(o.concat(r), "identifier", !0), r] : void 0
    }

    function V() {
        _.apply(this, arguments);
        var t = d(this.handler, this);
        this.touch = new H(this.manager, t), this.mouse = new U(this.manager, t)
    }

    function X(t, e) {
        this.manager = t, this.set(e)
    }

    function W(t) {
        if (g(t, ei))return ei;
        var e = g(t, ii), i = g(t, ni);
        return e && i ? ii + " " + ni : e || i ? e ? ii : ni : g(t, ti) ? ti : Ze
    }

    function Y(t) {
        this.id = T(), this.manager = null, this.options = l(t || {}, this.defaults), this.options.enable = u(this.options.enable, !0), this.state = si, this.simultaneous = {}, this.requireFail = []
    }

    function G(t) {
        return t & ci ? "cancel" : t & ri ? "end" : t & ai ? "move" : t & oi ? "start" : ""
    }

    function J(t) {
        return t == Me ? "down" : t == Ie ? "up" : t == xe ? "left" : t == De ? "right" : ""
    }

    function K(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }

    function q() {
        Y.apply(this, arguments)
    }

    function Q() {
        q.apply(this, arguments), this.pX = null, this.pY = null
    }

    function Z() {
        q.apply(this, arguments)
    }

    function te() {
        Y.apply(this, arguments), this._timer = null, this._input = null
    }

    function ee() {
        q.apply(this, arguments)
    }

    function ie() {
        q.apply(this, arguments)
    }

    function ne() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function se(t, e) {
        return e = e || {}, e.recognizers = u(e.recognizers, se.defaults.preset), new oe(t, e)
    }

    function oe(t, e) {
        e = e || {}, this.options = l(e, se.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = w(this), this.touchAction = new X(this, this.options.touchAction), ae(this, !0), a(e.recognizers, function (t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }

    function ae(t, e) {
        var i = t.element;
        a(t.options.cssProps, function (t, n) {
            i.style[y(i.style, n)] = e ? t : ""
        })
    }

    function re(t, i) {
        var n = e.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
    }

    var le = ["", "webkit", "moz", "MS", "ms", "o"], ce = e.createElement("div"), de = "function", he = Math.round, ue = Math.abs, pe = Date.now, fe = 1, me = /mobile|tablet|ip(ad|hone|od)|android/i, ge = "ontouchstart" in t, ve = y(t, "PointerEvent") !== n, be = ge && me.test(navigator.userAgent), Se = "touch", Ee = "pen", ye = "mouse", Te = "kinect", Le = 25, _e = 1, we = 2, Ce = 4, ke = 8, Ae = 1, xe = 2, De = 4, Ie = 8, Me = 16, Re = xe | De, Oe = Ie | Me, Ne = Re | Oe, Pe = ["x", "y"], $e = ["clientX", "clientY"];
    _.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(L(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(L(this.element), this.evWin, this.domHandler)
        }
    };
    var Ue = {mousedown: _e, mousemove: we, mouseup: Ce}, Be = "mousedown", Fe = "mousemove mouseup";
    c(U, _, {
        handler: function (t) {
            var e = Ue[t.type];
            e & _e && 0 === t.button && (this.pressed = !0), e & we && 1 !== t.which && (e = Ce), this.pressed && this.allow && (e & Ce && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: ye,
                srcEvent: t
            }))
        }
    });
    var je = {pointerdown: _e, pointermove: we, pointerup: Ce, pointercancel: ke, pointerout: ke}, He = {
        2: Se,
        3: Ee,
        4: ye,
        5: Te
    }, ze = "pointerdown", Ve = "pointermove pointerup pointercancel";
    t.MSPointerEvent && (ze = "MSPointerDown", Ve = "MSPointerMove MSPointerUp MSPointerCancel"), c(B, _, {
        handler: function (t) {
            var e = this.store, i = !1, n = t.type.toLowerCase().replace("ms", ""), s = je[n], o = He[t.pointerType] || t.pointerType, a = o == Se, r = b(e, t.pointerId, "pointerId");
            s & _e && (0 === t.button || a) ? 0 > r && (e.push(t), r = e.length - 1) : s & (Ce | ke) && (i = !0), 0 > r || (e[r] = t, this.callback(this.manager, s, {
                pointers: e,
                changedPointers: [t],
                pointerType: o,
                srcEvent: t
            }), i && e.splice(r, 1))
        }
    });
    var Xe = {
        touchstart: _e,
        touchmove: we,
        touchend: Ce,
        touchcancel: ke
    }, We = "touchstart", Ye = "touchstart touchmove touchend touchcancel";
    c(F, _, {
        handler: function (t) {
            var e = Xe[t.type];
            if (e === _e && (this.started = !0), this.started) {
                var i = j.call(this, t, e);
                e & (Ce | ke) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: Se,
                    srcEvent: t
                })
            }
        }
    });
    var Ge = {
        touchstart: _e,
        touchmove: we,
        touchend: Ce,
        touchcancel: ke
    }, Je = "touchstart touchmove touchend touchcancel";
    c(H, _, {
        handler: function (t) {
            var e = Ge[t.type], i = z.call(this, t, e);
            i && this.callback(this.manager, e, {pointers: i[0], changedPointers: i[1], pointerType: Se, srcEvent: t})
        }
    }), c(V, _, {
        handler: function (t, e, i) {
            var n = i.pointerType == Se, s = i.pointerType == ye;
            if (n)this.mouse.allow = !1; else if (s && !this.mouse.allow)return;
            e & (Ce | ke) && (this.mouse.allow = !0), this.callback(t, e, i)
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Ke = y(ce.style, "touchAction"), qe = Ke !== n, Qe = "compute", Ze = "auto", ti = "manipulation", ei = "none", ii = "pan-x", ni = "pan-y";
    X.prototype = {
        set: function (t) {
            t == Qe && (t = this.compute()), qe && (this.manager.element.style[Ke] = t), this.actions = t.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var t = [];
            return a(this.manager.recognizers, function (e) {
                h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), W(t.join(" "))
        }, preventDefaults: function (t) {
            if (!qe) {
                var e = t.srcEvent, i = t.offsetDirection;
                if (this.manager.session.prevented)return void e.preventDefault();
                var n = this.actions, s = g(n, ei), o = g(n, ni), a = g(n, ii);
                return s || o && i & Re || a && i & Oe ? this.preventSrc(e) : void 0
            }
        }, preventSrc: function (t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var si = 1, oi = 2, ai = 4, ri = 8, li = ri, ci = 16, di = 32;
    Y.prototype = {
        defaults: {}, set: function (t) {
            return r(this.options, t), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (t) {
            if (o(t, "recognizeWith", this))return this;
            var e = this.simultaneous;
            return t = K(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        }, dropRecognizeWith: function (t) {
            return o(t, "dropRecognizeWith", this) ? this : (t = K(t, this), delete this.simultaneous[t.id], this)
        }, requireFailure: function (t) {
            if (o(t, "requireFailure", this))return this;
            var e = this.requireFail;
            return t = K(t, this), -1 === b(e, t) && (e.push(t), t.requireFailure(this)), this
        }, dropRequireFailure: function (t) {
            if (o(t, "dropRequireFailure", this))return this;
            t = K(t, this);
            var e = b(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (t) {
            return !!this.simultaneous[t.id]
        }, emit: function (t) {
            function e(e) {
                i.manager.emit(i.options.event + (e ? G(n) : ""), t)
            }

            var i = this, n = this.state;
            ri > n && e(!0), e(), n >= ri && e(!0)
        }, tryEmit: function (t) {
            return this.canEmit() ? this.emit(t) : void(this.state = di)
        }, canEmit: function () {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (di | si)))return !1;
                t++
            }
            return !0
        }, recognize: function (t) {
            var e = r({}, t);
            return h(this.options.enable, [this, e]) ? (this.state & (li | ci | di) && (this.state = si), this.state = this.process(e), void(this.state & (oi | ai | ri | ci) && this.tryEmit(e))) : (this.reset(), void(this.state = di))
        }, process: function () {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, c(q, Y, {
        defaults: {pointers: 1}, attrTest: function (t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        }, process: function (t) {
            var e = this.state, i = t.eventType, n = e & (oi | ai), s = this.attrTest(t);
            return n && (i & ke || !s) ? e | ci : n || s ? i & Ce ? e | ri : e & oi ? e | ai : oi : di
        }
    }), c(Q, q, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: Ne}, getTouchAction: function () {
            var t = this.options.direction, e = [];
            return t & Re && e.push(ni), t & Oe && e.push(ii), e
        }, directionTest: function (t) {
            var e = this.options, i = !0, n = t.distance, s = t.direction, o = t.deltaX, a = t.deltaY;
            return s & e.direction || (e.direction & Re ? (s = 0 === o ? Ae : 0 > o ? xe : De, i = o != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === a ? Ae : 0 > a ? Ie : Me, i = a != this.pY, n = Math.abs(t.deltaY))), t.direction = s, i && n > e.threshold && s & e.direction
        }, attrTest: function (t) {
            return q.prototype.attrTest.call(this, t) && (this.state & oi || !(this.state & oi) && this.directionTest(t))
        }, emit: function (t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = J(t.direction);
            e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
        }
    }), c(Z, q, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ei]
        }, attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & oi)
        }, emit: function (t) {
            if (this._super.emit.call(this, t), 1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + e, t)
            }
        }
    }), c(te, Y, {
        defaults: {event: "press", pointers: 1, time: 500, threshold: 5}, getTouchAction: function () {
            return [Ze]
        }, process: function (t) {
            var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold, o = t.deltaTime > e.time;
            if (this._input = t, !n || !i || t.eventType & (Ce | ke) && !o)this.reset(); else if (t.eventType & _e)this.reset(), this._timer = s(function () {
                this.state = li, this.tryEmit()
            }, e.time, this); else if (t.eventType & Ce)return li;
            return di
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (t) {
            this.state === li && (t && t.eventType & Ce ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = pe(), this.manager.emit(this.options.event, this._input)))
        }
    }), c(ee, q, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ei]
        }, attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & oi)
        }
    }), c(ie, q, {
        defaults: {event: "swipe", threshold: 10, velocity: .65, direction: Re | Oe, pointers: 1},
        getTouchAction: function () {
            return Q.prototype.getTouchAction.call(this)
        },
        attrTest: function (t) {
            var e, i = this.options.direction;
            return i & (Re | Oe) ? e = t.velocity : i & Re ? e = t.velocityX : i & Oe && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && ue(e) > this.options.velocity && t.eventType & Ce
        },
        emit: function (t) {
            var e = J(t.direction);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), c(ne, Y, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        }, getTouchAction: function () {
            return [ti]
        }, process: function (t) {
            var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold, o = t.deltaTime < e.time;
            if (this.reset(), t.eventType & _e && 0 === this.count)return this.failTimeout();
            if (n && o && i) {
                if (t.eventType != Ce)return this.failTimeout();
                var a = this.pTime ? t.timeStamp - this.pTime < e.interval : !0, r = !this.pCenter || O(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, r && a ? this.count += 1 : this.count = 1, this._input = t;
                var l = this.count % e.taps;
                if (0 === l)return this.hasRequireFailures() ? (this._timer = s(function () {
                    this.state = li, this.tryEmit()
                }, e.interval, this), oi) : li
            }
            return di
        }, failTimeout: function () {
            return this._timer = s(function () {
                this.state = di
            }, this.options.interval, this), di
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == li && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), se.VERSION = "2.0.4", se.defaults = {
        domEvents: !1,
        touchAction: Qe,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[ee, {enable: !1}], [Z, {enable: !1}, ["rotate"]], [ie, {direction: Re}], [Q, {direction: Re}, ["swipe"]], [ne], [ne, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [te]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var hi = 1, ui = 2;
    oe.prototype = {
        set: function (t) {
            return r(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        }, stop: function (t) {
            this.session.stopped = t ? ui : hi
        }, recognize: function (t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, n = this.recognizers, s = e.curRecognizer;
                (!s || s && s.state & li) && (s = e.curRecognizer = null);
                for (var o = 0; o < n.length;)i = n[o], e.stopped === ui || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && i.state & (oi | ai | ri) && (s = e.curRecognizer = i), o++
            }
        }, get: function (t) {
            if (t instanceof Y)return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)if (e[i].options.event == t)return e[i];
            return null
        }, add: function (t) {
            if (o(t, "add", this))return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        }, remove: function (t) {
            if (o(t, "remove", this))return this;
            var e = this.recognizers;
            return t = this.get(t), e.splice(b(e, t), 1), this.touchAction.update(), this
        }, on: function (t, e) {
            var i = this.handlers;
            return a(v(t), function (t) {
                i[t] = i[t] || [], i[t].push(e)
            }), this
        }, off: function (t, e) {
            var i = this.handlers;
            return a(v(t), function (t) {
                e ? i[t].splice(b(i[t], e), 1) : delete i[t]
            }), this
        }, emit: function (t, e) {
            this.options.domEvents && re(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t, e.preventDefault = function () {
                    e.srcEvent.preventDefault()
                };
                for (var n = 0; n < i.length;)i[n](e), n++
            }
        }, destroy: function () {
            this.element && ae(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, r(se, {
        INPUT_START: _e,
        INPUT_MOVE: we,
        INPUT_END: Ce,
        INPUT_CANCEL: ke,
        STATE_POSSIBLE: si,
        STATE_BEGAN: oi,
        STATE_CHANGED: ai,
        STATE_ENDED: ri,
        STATE_RECOGNIZED: li,
        STATE_CANCELLED: ci,
        STATE_FAILED: di,
        DIRECTION_NONE: Ae,
        DIRECTION_LEFT: xe,
        DIRECTION_RIGHT: De,
        DIRECTION_UP: Ie,
        DIRECTION_DOWN: Me,
        DIRECTION_HORIZONTAL: Re,
        DIRECTION_VERTICAL: Oe,
        DIRECTION_ALL: Ne,
        Manager: oe,
        Input: _,
        TouchAction: X,
        TouchInput: H,
        MouseInput: U,
        PointerEventInput: B,
        TouchMouseInput: V,
        SingleTouchInput: F,
        Recognizer: Y,
        AttrRecognizer: q,
        Tap: ne,
        Pan: Q,
        Swipe: ie,
        Pinch: Z,
        Rotate: ee,
        Press: te,
        on: p,
        off: f,
        each: a,
        merge: l,
        extend: r,
        inherit: c,
        bindFn: d,
        prefixed: y
    }), typeof define == de && define.amd ? define(function () {
        return se
    }) : "undefined" != typeof module && module.exports ? module.exports = se : t[i] = se
}(window, document, "Hammer");
var CryptoJS = CryptoJS || function (t, e) {
        var i = {}, n = i.lib = {}, s = function () {
        }, o = n.Base = {
            extend: function (t) {
                s.prototype = this;
                var e = new s;
                return t && e.mixIn(t), e.hasOwnProperty("init") || (e.init = function () {
                    e.$super.init.apply(this, arguments)
                }), e.init.prototype = e, e.$super = this, e
            }, create: function () {
                var t = this.extend();
                return t.init.apply(t, arguments), t
            }, init: function () {
            }, mixIn: function (t) {
                for (var e in t)t.hasOwnProperty(e) && (this[e] = t[e]);
                t.hasOwnProperty("toString") && (this.toString = t.toString)
            }, clone: function () {
                return this.init.prototype.extend(this)
            }
        }, a = n.WordArray = o.extend({
            init: function (t, i) {
                t = this.words = t || [], this.sigBytes = i != e ? i : 4 * t.length
            }, toString: function (t) {
                return (t || l).stringify(this)
            }, concat: function (t) {
                var e = this.words, i = t.words, n = this.sigBytes;
                if (t = t.sigBytes, this.clamp(), n % 4)for (var s = 0; t > s; s++)e[n + s >>> 2] |= (i[s >>> 2] >>> 24 - 8 * (s % 4) & 255) << 24 - 8 * ((n + s) % 4); else if (65535 < i.length)for (s = 0; t > s; s += 4)e[n + s >>> 2] = i[s >>> 2]; else e.push.apply(e, i);
                return this.sigBytes += t, this
            }, clamp: function () {
                var e = this.words, i = this.sigBytes;
                e[i >>> 2] &= 4294967295 << 32 - 8 * (i % 4), e.length = t.ceil(i / 4)
            }, clone: function () {
                var t = o.clone.call(this);
                return t.words = this.words.slice(0), t
            }, random: function (e) {
                for (var i = [], n = 0; e > n; n += 4)i.push(4294967296 * t.random() | 0);
                return new a.init(i, e)
            }
        }), r = i.enc = {}, l = r.Hex = {
            stringify: function (t) {
                var e = t.words;
                t = t.sigBytes;
                for (var i = [], n = 0; t > n; n++) {
                    var s = e[n >>> 2] >>> 24 - 8 * (n % 4) & 255;
                    i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16))
                }
                return i.join("")
            }, parse: function (t) {
                for (var e = t.length, i = [], n = 0; e > n; n += 2)i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - 4 * (n % 8);
                return new a.init(i, e / 2)
            }
        }, c = r.Latin1 = {
            stringify: function (t) {
                var e = t.words;
                t = t.sigBytes;
                for (var i = [], n = 0; t > n; n++)i.push(String.fromCharCode(e[n >>> 2] >>> 24 - 8 * (n % 4) & 255));
                return i.join("")
            }, parse: function (t) {
                for (var e = t.length, i = [], n = 0; e > n; n++)i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - 8 * (n % 4);
                return new a.init(i, e)
            }
        }, d = r.Utf8 = {
            stringify: function (t) {
                try {
                    return decodeURIComponent(escape(c.stringify(t)))
                } catch (e) {
                    throw Error("Malformed UTF-8 data")
                }
            }, parse: function (t) {
                return c.parse(unescape(encodeURIComponent(t)))
            }
        }, h = n.BufferedBlockAlgorithm = o.extend({
            reset: function () {
                this._data = new a.init, this._nDataBytes = 0
            }, _append: function (t) {
                "string" == typeof t && (t = d.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
            }, _process: function (e) {
                var i = this._data, n = i.words, s = i.sigBytes, o = this.blockSize, r = s / (4 * o), r = e ? t.ceil(r) : t.max((0 | r) - this._minBufferSize, 0);
                if (e = r * o, s = t.min(4 * e, s), e) {
                    for (var l = 0; e > l; l += o)this._doProcessBlock(n, l);
                    l = n.splice(0, e), i.sigBytes -= s
                }
                return new a.init(l, s)
            }, clone: function () {
                var t = o.clone.call(this);
                return t._data = this._data.clone(), t
            }, _minBufferSize: 0
        });
        n.Hasher = h.extend({
            cfg: o.extend(), init: function (t) {
                this.cfg = this.cfg.extend(t), this.reset()
            }, reset: function () {
                h.reset.call(this), this._doReset()
            }, update: function (t) {
                return this._append(t), this._process(), this
            }, finalize: function (t) {
                return t && this._append(t), this._doFinalize()
            }, blockSize: 16, _createHelper: function (t) {
                return function (e, i) {
                    return new t.init(i).finalize(e)
                }
            }, _createHmacHelper: function (t) {
                return function (e, i) {
                    return new u.HMAC.init(t, i).finalize(e)
                }
            }
        });
        var u = i.algo = {};
        return i
    }(Math);
!function (t) {
    function e(t, e, i, n, s, o, a) {
        return t = t + (e & i | ~e & n) + s + a, (t << o | t >>> 32 - o) + e
    }

    function i(t, e, i, n, s, o, a) {
        return t = t + (e & n | i & ~n) + s + a, (t << o | t >>> 32 - o) + e
    }

    function n(t, e, i, n, s, o, a) {
        return t = t + (e ^ i ^ n) + s + a, (t << o | t >>> 32 - o) + e
    }

    function s(t, e, i, n, s, o, a) {
        return t = t + (i ^ (e | ~n)) + s + a, (t << o | t >>> 32 - o) + e
    }

    for (var o = CryptoJS, a = o.lib, r = a.WordArray, l = a.Hasher, a = o.algo, c = [], d = 0; 64 > d; d++)c[d] = 4294967296 * t.abs(t.sin(d + 1)) | 0;
    a = a.MD5 = l.extend({
        _doReset: function () {
            this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878])
        }, _doProcessBlock: function (t, o) {
            for (var a = 0; 16 > a; a++) {
                var r = o + a, l = t[r];
                t[r] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
            }
            var a = this._hash.words, r = t[o + 0], l = t[o + 1], d = t[o + 2], h = t[o + 3], u = t[o + 4], p = t[o + 5], f = t[o + 6], m = t[o + 7], g = t[o + 8], v = t[o + 9], b = t[o + 10], S = t[o + 11], E = t[o + 12], y = t[o + 13], T = t[o + 14], L = t[o + 15], _ = a[0], w = a[1], C = a[2], k = a[3], _ = e(_, w, C, k, r, 7, c[0]), k = e(k, _, w, C, l, 12, c[1]), C = e(C, k, _, w, d, 17, c[2]), w = e(w, C, k, _, h, 22, c[3]), _ = e(_, w, C, k, u, 7, c[4]), k = e(k, _, w, C, p, 12, c[5]), C = e(C, k, _, w, f, 17, c[6]), w = e(w, C, k, _, m, 22, c[7]), _ = e(_, w, C, k, g, 7, c[8]), k = e(k, _, w, C, v, 12, c[9]), C = e(C, k, _, w, b, 17, c[10]), w = e(w, C, k, _, S, 22, c[11]), _ = e(_, w, C, k, E, 7, c[12]), k = e(k, _, w, C, y, 12, c[13]), C = e(C, k, _, w, T, 17, c[14]), w = e(w, C, k, _, L, 22, c[15]), _ = i(_, w, C, k, l, 5, c[16]), k = i(k, _, w, C, f, 9, c[17]), C = i(C, k, _, w, S, 14, c[18]), w = i(w, C, k, _, r, 20, c[19]), _ = i(_, w, C, k, p, 5, c[20]), k = i(k, _, w, C, b, 9, c[21]), C = i(C, k, _, w, L, 14, c[22]), w = i(w, C, k, _, u, 20, c[23]), _ = i(_, w, C, k, v, 5, c[24]), k = i(k, _, w, C, T, 9, c[25]), C = i(C, k, _, w, h, 14, c[26]), w = i(w, C, k, _, g, 20, c[27]), _ = i(_, w, C, k, y, 5, c[28]), k = i(k, _, w, C, d, 9, c[29]), C = i(C, k, _, w, m, 14, c[30]), w = i(w, C, k, _, E, 20, c[31]), _ = n(_, w, C, k, p, 4, c[32]), k = n(k, _, w, C, g, 11, c[33]), C = n(C, k, _, w, S, 16, c[34]), w = n(w, C, k, _, T, 23, c[35]), _ = n(_, w, C, k, l, 4, c[36]), k = n(k, _, w, C, u, 11, c[37]), C = n(C, k, _, w, m, 16, c[38]), w = n(w, C, k, _, b, 23, c[39]), _ = n(_, w, C, k, y, 4, c[40]), k = n(k, _, w, C, r, 11, c[41]), C = n(C, k, _, w, h, 16, c[42]), w = n(w, C, k, _, f, 23, c[43]), _ = n(_, w, C, k, v, 4, c[44]), k = n(k, _, w, C, E, 11, c[45]), C = n(C, k, _, w, L, 16, c[46]), w = n(w, C, k, _, d, 23, c[47]), _ = s(_, w, C, k, r, 6, c[48]), k = s(k, _, w, C, m, 10, c[49]), C = s(C, k, _, w, T, 15, c[50]), w = s(w, C, k, _, p, 21, c[51]), _ = s(_, w, C, k, E, 6, c[52]), k = s(k, _, w, C, h, 10, c[53]), C = s(C, k, _, w, b, 15, c[54]), w = s(w, C, k, _, l, 21, c[55]), _ = s(_, w, C, k, g, 6, c[56]), k = s(k, _, w, C, L, 10, c[57]), C = s(C, k, _, w, f, 15, c[58]), w = s(w, C, k, _, y, 21, c[59]), _ = s(_, w, C, k, u, 6, c[60]), k = s(k, _, w, C, S, 10, c[61]), C = s(C, k, _, w, d, 15, c[62]), w = s(w, C, k, _, v, 21, c[63]);
            a[0] = a[0] + _ | 0, a[1] = a[1] + w | 0, a[2] = a[2] + C | 0, a[3] = a[3] + k | 0
        }, _doFinalize: function () {
            var e = this._data, i = e.words, n = 8 * this._nDataBytes, s = 8 * e.sigBytes;
            i[s >>> 5] |= 128 << 24 - s % 32;
            var o = t.floor(n / 4294967296);
            for (i[(s + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), i[(s + 64 >>> 9 << 4) + 14] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e.sigBytes = 4 * (i.length + 1), this._process(), e = this._hash, i = e.words, n = 0; 4 > n; n++)s = i[n], i[n] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
            return e
        }, clone: function () {
            var t = l.clone.call(this);
            return t._hash = this._hash.clone(), t
        }
    }), o.MD5 = l._createHelper(a), o.HmacMD5 = l._createHmacHelper(a)
}(Math), function () {
    function t(t) {
        var i = {r: 0, g: 0, b: 0}, s = 1, a = !1, r = !1;
        return "string" == typeof t && (t = M(t)), "object" == typeof t && (t.hasOwnProperty("r") && t.hasOwnProperty("g") && t.hasOwnProperty("b") ? (i = e(t.r, t.g, t.b), a = !0, r = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("v") ? (t.s = x(t.s), t.v = x(t.v), i = o(t.h, t.s, t.v), a = !0, r = "hsv") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("l") && (t.s = x(t.s), t.l = x(t.l), i = n(t.h, t.s, t.l), a = !0, r = "hsl"), t.hasOwnProperty("a") && (s = t.a)), s = T(s), {
            ok: a,
            format: t.format || r,
            r: U(255, B(i.r, 0)),
            g: U(255, B(i.g, 0)),
            b: U(255, B(i.b, 0)),
            a: s
        }
    }

    function e(t, e, i) {
        return {r: 255 * L(t, 255), g: 255 * L(e, 255), b: 255 * L(i, 255)}
    }

    function i(t, e, i) {
        t = L(t, 255), e = L(e, 255), i = L(i, 255);
        var n, s, o = B(t, e, i), a = U(t, e, i), r = (o + a) / 2;
        if (o == a)n = s = 0; else {
            var l = o - a;
            switch (s = r > .5 ? l / (2 - o - a) : l / (o + a), o) {
                case t:
                    n = (e - i) / l + (i > e ? 6 : 0);
                    break;
                case e:
                    n = (i - t) / l + 2;
                    break;
                case i:
                    n = (t - e) / l + 4
            }
            n /= 6
        }
        return {h: n, s: s, l: r}
    }

    function n(t, e, i) {
        function n(t, e, i) {
            return 0 > i && (i += 1), i > 1 && (i -= 1), 1 / 6 > i ? t + 6 * (e - t) * i : .5 > i ? e : 2 / 3 > i ? t + (e - t) * (2 / 3 - i) * 6 : t
        }

        var s, o, a;
        if (t = L(t, 360), e = L(e, 100), i = L(i, 100), 0 === e)s = o = a = i; else {
            var r = .5 > i ? i * (1 + e) : i + e - i * e, l = 2 * i - r;
            s = n(l, r, t + 1 / 3), o = n(l, r, t), a = n(l, r, t - 1 / 3)
        }
        return {r: 255 * s, g: 255 * o, b: 255 * a}
    }

    function s(t, e, i) {
        t = L(t, 255), e = L(e, 255), i = L(i, 255);
        var n, s, o = B(t, e, i), a = U(t, e, i), r = o, l = o - a;
        if (s = 0 === o ? 0 : l / o, o == a)n = 0; else {
            switch (o) {
                case t:
                    n = (e - i) / l + (i > e ? 6 : 0);
                    break;
                case e:
                    n = (i - t) / l + 2;
                    break;
                case i:
                    n = (t - e) / l + 4
            }
            n /= 6
        }
        return {h: n, s: s, v: r}
    }

    function o(t, e, i) {
        t = 6 * L(t, 360), e = L(e, 100), i = L(i, 100);
        var n = P.floor(t), s = t - n, o = i * (1 - e), a = i * (1 - s * e), r = i * (1 - (1 - s) * e), l = n % 6, c = [i, a, o, o, r, i][l], d = [r, i, i, a, o, o][l], h = [o, o, r, i, i, a][l];
        return {r: 255 * c, g: 255 * d, b: 255 * h}
    }

    function a(t, e, i, n) {
        var s = [A($(t).toString(16)), A($(e).toString(16)), A($(i).toString(16))];
        return n && s[0].charAt(0) == s[0].charAt(1) && s[1].charAt(0) == s[1].charAt(1) && s[2].charAt(0) == s[2].charAt(1) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("")
    }

    function r(t, e, i, n) {
        var s = [A(D(n)), A($(t).toString(16)), A($(e).toString(16)), A($(i).toString(16))];
        return s.join("")
    }

    function l(t, e) {
        e = 0 === e ? 0 : e || 10;
        var i = j(t).toHsl();
        return i.s -= e / 100, i.s = _(i.s), j(i)
    }

    function c(t, e) {
        e = 0 === e ? 0 : e || 10;
        var i = j(t).toHsl();
        return i.s += e / 100, i.s = _(i.s), j(i)
    }

    function d(t) {
        return j(t).desaturate(100)
    }

    function h(t, e) {
        e = 0 === e ? 0 : e || 10;
        var i = j(t).toHsl();
        return i.l += e / 100, i.l = _(i.l), j(i)
    }

    function u(t, e) {
        e = 0 === e ? 0 : e || 10;
        var i = j(t).toRgb();
        return i.r = B(0, U(255, i.r - $(255 * -(e / 100)))), i.g = B(0, U(255, i.g - $(255 * -(e / 100)))), i.b = B(0, U(255, i.b - $(255 * -(e / 100)))), j(i)
    }

    function p(t, e) {
        e = 0 === e ? 0 : e || 10;
        var i = j(t).toHsl();
        return i.l -= e / 100, i.l = _(i.l), j(i)
    }

    function f(t, e) {
        var i = j(t).toHsl(), n = ($(i.h) + e) % 360;
        return i.h = 0 > n ? 360 + n : n, j(i)
    }

    function m(t) {
        var e = j(t).toHsl();
        return e.h = (e.h + 180) % 360, j(e)
    }

    function g(t) {
        var e = j(t).toHsl(), i = e.h;
        return [j(t), j({h: (i + 120) % 360, s: e.s, l: e.l}), j({h: (i + 240) % 360, s: e.s, l: e.l})]
    }

    function v(t) {
        var e = j(t).toHsl(), i = e.h;
        return [j(t), j({h: (i + 90) % 360, s: e.s, l: e.l}), j({
            h: (i + 180) % 360,
            s: e.s,
            l: e.l
        }), j({h: (i + 270) % 360, s: e.s, l: e.l})]
    }

    function b(t) {
        var e = j(t).toHsl(), i = e.h;
        return [j(t), j({h: (i + 72) % 360, s: e.s, l: e.l}), j({h: (i + 216) % 360, s: e.s, l: e.l})]
    }

    function S(t, e, i) {
        e = e || 6, i = i || 30;
        var n = j(t).toHsl(), s = 360 / i, o = [j(t)];
        for (n.h = (n.h - (s * e >> 1) + 720) % 360; --e;)n.h = (n.h + s) % 360, o.push(j(n));
        return o
    }

    function E(t, e) {
        e = e || 6;
        for (var i = j(t).toHsv(), n = i.h, s = i.s, o = i.v, a = [], r = 1 / e; e--;)a.push(j({
            h: n,
            s: s,
            v: o
        })), o = (o + r) % 1;
        return a
    }

    function y(t) {
        var e = {};
        for (var i in t)t.hasOwnProperty(i) && (e[t[i]] = i);
        return e
    }

    function T(t) {
        return t = parseFloat(t), (isNaN(t) || 0 > t || t > 1) && (t = 1), t
    }

    function L(t, e) {
        C(t) && (t = "100%");
        var i = k(t);
        return t = U(e, B(0, parseFloat(t))), i && (t = parseInt(t * e, 10) / 100), P.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
    }

    function _(t) {
        return U(1, B(0, t))
    }

    function w(t) {
        return parseInt(t, 16)
    }

    function C(t) {
        return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
    }

    function k(t) {
        return "string" == typeof t && -1 != t.indexOf("%")
    }

    function A(t) {
        return 1 == t.length ? "0" + t : "" + t
    }

    function x(t) {
        return 1 >= t && (t = 100 * t + "%"), t
    }

    function D(t) {
        return Math.round(255 * parseFloat(t)).toString(16)
    }

    function I(t) {
        return w(t) / 255
    }

    function M(t) {
        t = t.replace(R, "").replace(O, "").toLowerCase();
        var e = !1;
        if (H[t])t = H[t], e = !0; else if ("transparent" == t)return {r: 0, g: 0, b: 0, a: 0, format: "name"};
        var i;
        return (i = V.rgb.exec(t)) ? {r: i[1], g: i[2], b: i[3]} : (i = V.rgba.exec(t)) ? {
            r: i[1],
            g: i[2],
            b: i[3],
            a: i[4]
        } : (i = V.hsl.exec(t)) ? {h: i[1], s: i[2], l: i[3]} : (i = V.hsla.exec(t)) ? {
            h: i[1],
            s: i[2],
            l: i[3],
            a: i[4]
        } : (i = V.hsv.exec(t)) ? {h: i[1], s: i[2], v: i[3]} : (i = V.hex8.exec(t)) ? {
            a: I(i[1]),
            r: w(i[2]),
            g: w(i[3]),
            b: w(i[4]),
            format: e ? "name" : "hex8"
        } : (i = V.hex6.exec(t)) ? {
            r: w(i[1]),
            g: w(i[2]),
            b: w(i[3]),
            format: e ? "name" : "hex"
        } : (i = V.hex3.exec(t)) ? {
            r: w(i[1] + "" + i[1]),
            g: w(i[2] + "" + i[2]),
            b: w(i[3] + "" + i[3]),
            format: e ? "name" : "hex"
        } : !1
    }

    var R = /^[\s,#]+/, O = /\s+$/, N = 0, P = Math, $ = P.round, U = P.min, B = P.max, F = P.random, j = function X(e, i) {
        if (e = e ? e : "", i = i || {}, e instanceof X)return e;
        if (!(this instanceof X))return new X(e, i);
        var n = t(e);
        this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = $(100 * this._a) / 100, this._format = i.format || n.format, this._gradientType = i.gradientType, this._r < 1 && (this._r = $(this._r)), this._g < 1 && (this._g = $(this._g)), this._b < 1 && (this._b = $(this._b)), this._ok = n.ok, this._tc_id = N++
    };
    j.prototype = {
        isDark: function () {
            return this.getBrightness() < 128
        }, isLight: function () {
            return !this.isDark()
        }, isValid: function () {
            return this._ok
        }, getFormat: function () {
            return this._format
        }, getAlpha: function () {
            return this._a
        }, getBrightness: function () {
            var t = this.toRgb();
            return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
        }, setAlpha: function (t) {
            return this._a = T(t), this._roundA = $(100 * this._a) / 100, this
        }, toHsv: function () {
            var t = s(this._r, this._g, this._b);
            return {h: 360 * t.h, s: t.s, v: t.v, a: this._a}
        }, toHsvString: function () {
            var t = s(this._r, this._g, this._b), e = $(360 * t.h), i = $(100 * t.s), n = $(100 * t.v);
            return 1 == this._a ? "hsv(" + e + ", " + i + "%, " + n + "%)" : "hsva(" + e + ", " + i + "%, " + n + "%, " + this._roundA + ")"
        }, toHsl: function () {
            var t = i(this._r, this._g, this._b);
            return {h: 360 * t.h, s: t.s, l: t.l, a: this._a}
        }, toHslString: function () {
            var t = i(this._r, this._g, this._b), e = $(360 * t.h), n = $(100 * t.s), s = $(100 * t.l);
            return 1 == this._a ? "hsl(" + e + ", " + n + "%, " + s + "%)" : "hsla(" + e + ", " + n + "%, " + s + "%, " + this._roundA + ")"
        }, toHex: function (t) {
            return a(this._r, this._g, this._b, t)
        }, toHexString: function (t) {
            return "#" + this.toHex(t)
        }, toHex8: function () {
            return r(this._r, this._g, this._b, this._a)
        }, toHex8String: function () {
            return "#" + this.toHex8()
        }, toRgb: function () {
            return {r: $(this._r), g: $(this._g), b: $(this._b), a: this._a}
        }, toRgbString: function () {
            return 1 == this._a ? "rgb(" + $(this._r) + ", " + $(this._g) + ", " + $(this._b) + ")" : "rgba(" + $(this._r) + ", " + $(this._g) + ", " + $(this._b) + ", " + this._roundA + ")"
        }, toPercentageRgb: function () {
            return {
                r: $(100 * L(this._r, 255)) + "%",
                g: $(100 * L(this._g, 255)) + "%",
                b: $(100 * L(this._b, 255)) + "%",
                a: this._a
            }
        }, toPercentageRgbString: function () {
            return 1 == this._a ? "rgb(" + $(100 * L(this._r, 255)) + "%, " + $(100 * L(this._g, 255)) + "%, " + $(100 * L(this._b, 255)) + "%)" : "rgba(" + $(100 * L(this._r, 255)) + "%, " + $(100 * L(this._g, 255)) + "%, " + $(100 * L(this._b, 255)) + "%, " + this._roundA + ")"
        }, toName: function () {
            return 0 === this._a ? "transparent" : this._a < 1 ? !1 : z[a(this._r, this._g, this._b, !0)] || !1
        }, toFilter: function (t) {
            var e = "#" + r(this._r, this._g, this._b, this._a), i = e, n = this._gradientType ? "GradientType = 1, " : "";
            if (t) {
                var s = j(t);
                i = s.toHex8String()
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + e + ",endColorstr=" + i + ")"
        }, toString: function (t) {
            var e = !!t;
            t = t || this._format;
            var i = !1, n = this._a < 1 && this._a >= 0, s = !e && n && ("hex" === t || "hex6" === t || "hex3" === t || "name" === t);
            return s ? "name" === t && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === t && (i = this.toRgbString()), "prgb" === t && (i = this.toPercentageRgbString()), ("hex" === t || "hex6" === t) && (i = this.toHexString()), "hex3" === t && (i = this.toHexString(!0)), "hex8" === t && (i = this.toHex8String()), "name" === t && (i = this.toName()), "hsl" === t && (i = this.toHslString()), "hsv" === t && (i = this.toHsvString()), i || this.toHexString())
        }, _applyModification: function (t, e) {
            var i = t.apply(null, [this].concat([].slice.call(e)));
            return this._r = i._r, this._g = i._g, this._b = i._b, this.setAlpha(i._a), this
        }, lighten: function () {
            return this._applyModification(h, arguments)
        }, brighten: function () {
            return this._applyModification(u, arguments)
        }, darken: function () {
            return this._applyModification(p, arguments)
        }, desaturate: function () {
            return this._applyModification(l, arguments)
        }, saturate: function () {
            return this._applyModification(c, arguments)
        }, greyscale: function () {
            return this._applyModification(d, arguments)
        }, spin: function () {
            return this._applyModification(f, arguments)
        }, _applyCombination: function (t, e) {
            return t.apply(null, [this].concat([].slice.call(e)))
        }, analogous: function () {
            return this._applyCombination(S, arguments)
        }, complement: function () {
            return this._applyCombination(m, arguments)
        }, monochromatic: function () {
            return this._applyCombination(E, arguments)
        }, splitcomplement: function () {
            return this._applyCombination(b, arguments)
        }, triad: function () {
            return this._applyCombination(g, arguments)
        }, tetrad: function () {
            return this._applyCombination(v, arguments)
        }
    }, j.fromRatio = function (t, e) {
        if ("object" == typeof t) {
            var i = {};
            for (var n in t)t.hasOwnProperty(n) && (i[n] = "a" === n ? t[n] : x(t[n]));
            t = i
        }
        return j(t, e)
    }, j.equals = function (t, e) {
        return t && e ? j(t).toRgbString() == j(e).toRgbString() : !1
    }, j.random = function () {
        return j.fromRatio({r: F(), g: F(), b: F()})
    }, j.mix = function (t, e, i) {
        i = 0 === i ? 0 : i || 50;
        var n, s = j(t).toRgb(), o = j(e).toRgb(), a = i / 100, r = 2 * a - 1, l = o.a - s.a;
        n = r * l == -1 ? r : (r + l) / (1 + r * l), n = (n + 1) / 2;
        var c = 1 - n, d = {
            r: o.r * n + s.r * c,
            g: o.g * n + s.g * c,
            b: o.b * n + s.b * c,
            a: o.a * a + s.a * (1 - a)
        };
        return j(d)
    }, j.readability = function (t, e) {
        var i = j(t), n = j(e), s = i.toRgb(), o = n.toRgb(), a = i.getBrightness(), r = n.getBrightness(), l = Math.max(s.r, o.r) - Math.min(s.r, o.r) + Math.max(s.g, o.g) - Math.min(s.g, o.g) + Math.max(s.b, o.b) - Math.min(s.b, o.b);
        return {brightness: Math.abs(a - r), color: l}
    }, j.isReadable = function (t, e) {
        var i = j.readability(t, e);
        return i.brightness > 125 && i.color > 500
    }, j.mostReadable = function (t, e) {
        for (var i = null, n = 0, s = !1, o = 0; o < e.length; o++) {
            var a = j.readability(t, e[o]), r = a.brightness > 125 && a.color > 500, l = 3 * (a.brightness / 125) + a.color / 500;
            (r && !s || r && s && l > n || !r && !s && l > n) && (s = r, n = l, i = j(e[o]))
        }
        return i
    };
    var H = j.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    }, z = j.hexNames = y(H), V = function () {
        var t = "[-\\+]?\\d+%?", e = "[-\\+]?\\d*\\.\\d+%?", i = "(?:" + e + ")|(?:" + t + ")", n = "[\\s|\\(]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")\\s*\\)?", s = "[\\s|\\(]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")\\s*\\)?";
        return {
            rgb: new RegExp("rgb" + n),
            rgba: new RegExp("rgba" + s),
            hsl: new RegExp("hsl" + n),
            hsla: new RegExp("hsla" + s),
            hsv: new RegExp("hsv" + n),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        }
    }();
    "undefined" != typeof module && module.exports ? module.exports = j : "function" == typeof define && define.amd ? define(function () {
        return j
    }) : window.tinycolor = j
}(), function () {
    function t(t) {
        var e = "    ";
        if (isNaN(parseInt(t)))e = t; else switch (t) {
            case 1:
                e = " ";
                break;
            case 2:
                e = "  ";
                break;
            case 3:
                e = "   ";
                break;
            case 4:
                e = "    ";
                break;
            case 5:
                e = "     ";
                break;
            case 6:
                e = "      ";
                break;
            case 7:
                e = "       ";
                break;
            case 8:
                e = "        ";
                break;
            case 9:
                e = "         ";
                break;
            case 10:
                e = "          ";
                break;
            case 11:
                e = "           ";
                break;
            case 12:
                e = "            "
        }
        var i = ["\n"];
        for (ix = 0; 100 > ix; ix++)i.push(i[ix] + e);
        return i
    }

    function e() {
        this.step = "    ", this.shift = t(this.step)
    }

    function i(t, e) {
        return e - (t.replace(/\(/g, "").length - t.replace(/\)/g, "").length)
    }

    function n(t, e) {
        return t.replace(/\s{1,}/g, " ").replace(/ AND /gi, "~::~" + e + e + "AND ").replace(/ BETWEEN /gi, "~::~" + e + "BETWEEN ").replace(/ CASE /gi, "~::~" + e + "CASE ").replace(/ ELSE /gi, "~::~" + e + "ELSE ").replace(/ END /gi, "~::~" + e + "END ").replace(/ FROM /gi, "~::~FROM ").replace(/ GROUP\s{1,}BY/gi, "~::~GROUP BY ").replace(/ HAVING /gi, "~::~HAVING ").replace(/ IN /gi, " IN ").replace(/ JOIN /gi, "~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi, "~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi, "~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi, "~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi, "~::~RIGHT JOIN ").replace(/ ON /gi, "~::~" + e + "ON ").replace(/ OR /gi, "~::~" + e + e + "OR ").replace(/ ORDER\s{1,}BY/gi, "~::~ORDER BY ").replace(/ OVER /gi, "~::~" + e + "OVER ").replace(/\(\s{0,}SELECT /gi, "~::~(SELECT ").replace(/\)\s{0,}SELECT /gi, ")~::~SELECT ").replace(/ THEN /gi, " THEN~::~" + e).replace(/ UNION /gi, "~::~UNION~::~").replace(/ USING /gi, "~::~USING ").replace(/ WHEN /gi, "~::~" + e + "WHEN ").replace(/ WHERE /gi, "~::~WHERE ").replace(/ WITH /gi, "~::~WITH ").replace(/ ALL /gi, " ALL ").replace(/ AS /gi, " AS ").replace(/ ASC /gi, " ASC ").replace(/ DESC /gi, " DESC ").replace(/ DISTINCT /gi, " DISTINCT ").replace(/ EXISTS /gi, " EXISTS ").replace(/ NOT /gi, " NOT ").replace(/ NULL /gi, " NULL ").replace(/ LIKE /gi, " LIKE ").replace(/\s{0,}SELECT /gi, "SELECT ").replace(/\s{0,}UPDATE /gi, "UPDATE ").replace(/ SET /gi, " SET ").replace(/~::~{1,}/g, "~::~").split("~::~")
    }

    e.prototype.xml = function (e, i) {
        var n = e.replace(/>\s{0,}</g, "><").replace(/</g, "~::~<").replace(/\s*xmlns\:/g, "~::~xmlns:").replace(/\s*xmlns\=/g, "~::~xmlns=").split("~::~"), s = n.length, o = !1, a = 0, r = "", l = 0, c = i ? t(i) : this.shift;
        for (l = 0; s > l; l++)n[l].search(/<!/) > -1 ? (r += c[a] + n[l], o = !0, (n[l].search(/-->/) > -1 || n[l].search(/\]>/) > -1 || n[l].search(/!DOCTYPE/) > -1) && (o = !1)) : n[l].search(/-->/) > -1 || n[l].search(/\]>/) > -1 ? (r += n[l], o = !1) : /^<\w/.exec(n[l - 1]) && /^<\/\w/.exec(n[l]) && /^<[\w:\-\.\,]+/.exec(n[l - 1]) == /^<\/[\w:\-\.\,]+/.exec(n[l])[0].replace("/", "") ? (r += n[l], o || a--) : n[l].search(/<\w/) > -1 && -1 == n[l].search(/<\//) && -1 == n[l].search(/\/>/) ? r = r += o ? n[l] : c[a++] + n[l] : n[l].search(/<\w/) > -1 && n[l].search(/<\//) > -1 ? r = r += o ? n[l] : c[a] + n[l] : n[l].search(/<\//) > -1 ? r = r += o ? n[l] : c[--a] + n[l] : n[l].search(/\/>/) > -1 ? r = r += o ? n[l] : c[a] + n[l] : r += n[l].search(/<\?/) > -1 ? c[a] + n[l] : n[l].search(/xmlns\:/) > -1 || n[l].search(/xmlns\=/) > -1 ? c[a] + n[l] : n[l];
        return "\n" == r[0] ? r.slice(1) : r
    }, e.prototype.json = function (t, e) {
        var e = e ? e : this.step;
        return "undefined" == typeof JSON ? t : "string" == typeof t ? JSON.stringify(JSON.parse(t), null, e) : "object" == typeof t ? JSON.stringify(t, null, e) : t
    }, e.prototype.css = function (e, i) {
        var n = e.replace(/\s{1,}/g, " ").replace(/\{/g, "{~::~").replace(/\}/g, "~::~}~::~").replace(/\;/g, ";~::~").replace(/\/\*/g, "~::~/*").replace(/\*\//g, "*/~::~").replace(/~::~\s{0,}~::~/g, "~::~").split("~::~"), s = n.length, o = 0, a = "", r = 0, l = i ? t(i) : this.shift;
        for (r = 0; s > r; r++)a += /\{/.exec(n[r]) ? l[o++] + n[r] : /\}/.exec(n[r]) ? l[--o] + n[r] : /\*\\/.exec(n[r]) ? l[o] + n[r] : l[o] + n[r];
        return a.replace(/^\n{1,}/, "")
    }, e.prototype.sql = function (e, s) {
        var o = e.replace(/\s{1,}/g, " ").replace(/\'/gi, "~::~'").split("~::~"), a = o.length, r = [], l = 0, c = this.step, d = 0, h = "", u = 0, p = s ? t(s) : this.shift;
        for (u = 0; a > u; u++)r = r.concat(u % 2 ? o[u] : n(o[u], c));
        for (a = r.length, u = 0; a > u; u++) {
            d = i(r[u], d), /\s{0,}\s{0,}SELECT\s{0,}/.exec(r[u]) && (r[u] = r[u].replace(/\,/g, ",\n" + c + c)), /\s{0,}\s{0,}SET\s{0,}/.exec(r[u]) && (r[u] = r[u].replace(/\,/g, ",\n" + c + c)), /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(r[u]) ? (l++, h += p[l] + r[u]) : /\'/.exec(r[u]) ? (1 > d && l && l--, h += r[u]) : (h += p[l] + r[u], 1 > d && l && l--)
        }
        return h = h.replace(/^\n{1,}/, "").replace(/\n{1,}/g, "\n")
    }, e.prototype.xmlmin = function (t, e) {
        var i = e ? t : t.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g, "").replace(/[ \r\n\t]{1,}xmlns/g, " xmlns");
        return i.replace(/>\s{0,}</g, "><")
    }, e.prototype.jsonmin = function (t) {
        return "undefined" == typeof JSON ? t : JSON.stringify(JSON.parse(t), null, 0)
    }, e.prototype.cssmin = function (t, e) {
        var i = e ? t : t.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g, "");
        return i.replace(/\s{1,}/g, " ").replace(/\{\s{1,}/g, "{").replace(/\}\s{1,}/g, "}").replace(/\;\s{1,}/g, ";").replace(/\/\*\s{1,}/g, "/*").replace(/\*\/\s{1,}/g, "*/")
    }, e.prototype.sqlmin = function (t) {
        return t.replace(/\s{1,}/g, " ").replace(/\s{1,}\(/, "(").replace(/\s{1,}\)/, ")")
    }, window.vkbeautify = new e
}(), function (t, e) {
    function i(t) {
        return t.call.apply(t.bind, arguments)
    }

    function n(t, e) {
        if (!t)throw Error();
        if (2 < arguments.length) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function () {
                var n = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(n, i), t.apply(e, n)
            }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }

    function s() {
        return s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? i : n, s.apply(null, arguments)
    }

    function o(t, e) {
        this.J = t, this.t = e || t, this.C = this.t.document
    }

    function a(t, i, n) {
        t = t.C.getElementsByTagName(i)[0], t || (t = e.documentElement), t && t.lastChild && t.insertBefore(n, t.lastChild)
    }

    function r(t, e) {
        function i() {
            t.C.body ? e() : setTimeout(i, 0)
        }

        i()
    }

    function l(t, e, i) {
        e = e || [], i = i || [];
        for (var n = t.className.split(/\s+/), s = 0; s < e.length; s += 1) {
            for (var o = !1, a = 0; a < n.length; a += 1)if (e[s] === n[a]) {
                o = !0;
                break
            }
            o || n.push(e[s])
        }
        for (e = [], s = 0; s < n.length; s += 1) {
            for (o = !1, a = 0; a < i.length; a += 1)if (n[s] === i[a]) {
                o = !0;
                break
            }
            o || e.push(n[s])
        }
        t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function c(t, e) {
        for (var i = t.className.split(/\s+/), n = 0, s = i.length; s > n; n++)if (i[n] == e)return !0;
        return !1
    }

    function d(t) {
        if ("string" == typeof t.ma)return t.ma;
        var e = t.t.location.protocol;
        return "about:" == e && (e = t.J.location.protocol), "https:" == e ? "https:" : "http:"
    }

    function h(t, e) {
        var i = t.createElement("link", {rel: "stylesheet", href: e}), n = !1;
        i.onload = function () {
            n || (n = !0)
        }, i.onerror = function () {
            n || (n = !0)
        }, a(t, "head", i)
    }

    function u(e, i, n, s) {
        var o = e.C.getElementsByTagName("head")[0];
        if (o) {
            var a = e.createElement("script", {src: i}), r = !1;
            return a.onload = a.onreadystatechange = function () {
                r || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (r = !0, n && n(null), a.onload = a.onreadystatechange = null, "HEAD" == a.parentNode.tagName && o.removeChild(a))
            }, o.appendChild(a), t.setTimeout(function () {
                r || (r = !0, n && n(Error("Script load timeout")))
            }, s || 5e3), a
        }
        return null
    }

    function p(t, e) {
        this.X = t, this.fa = e
    }

    function f(t, e, i, n) {
        this.c = null != t ? t : null, this.g = null != e ? e : null, this.A = null != i ? i : null, this.e = null != n ? n : null
    }

    function m(t) {
        t = q.exec(t);
        var e = null, i = null, n = null, s = null;
        return t && (null !== t[1] && t[1] && (e = parseInt(t[1], 10)), null !== t[2] && t[2] && (i = parseInt(t[2], 10)), null !== t[3] && t[3] && (n = parseInt(t[3], 10)), null !== t[4] && t[4] && (s = /^[0-9]+$/.test(t[4]) ? parseInt(t[4], 10) : t[4])), new f(e, i, n, s)
    }

    function g(t, e, i, n, s, o, a, r) {
        this.M = t, this.k = r
    }

    function v(t) {
        this.a = t
    }

    function b(t) {
        var e = y(t.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        return "" != e ? (/BB\d{2}/.test(e) && (e = "BlackBerry"), e) : (t = y(t.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1), "" != t ? ("Mac_PowerPC" == t ? t = "Macintosh" : "PlayStation" == t && (t = "Linux"), t) : "Unknown")
    }

    function S(t) {
        var e = y(t.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (e || (e = y(t.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (e = y(t.a, /(iPhone )?OS ([\d_]+)/, 2)))return e;
        if (e = y(t.a, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))for (var e = e.split(/\s/), i = 0; i < e.length; i += 1)if (/^[\d\._]+$/.test(e[i]))return e[i];
        return (t = y(t.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? t : "Unknown"
    }

    function E(t) {
        var e = b(t), i = m(S(t)), n = m(y(t.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)), s = "Unknown", o = new f, o = "Unknown", a = !1;
        return /OPR\/[\d.]+/.test(t.a) ? s = "Opera" : -1 != t.a.indexOf("Chrome") || -1 != t.a.indexOf("CrMo") || -1 != t.a.indexOf("CriOS") ? s = "Chrome" : /Silk\/\d/.test(t.a) ? s = "Silk" : "BlackBerry" == e || "Android" == e ? s = "BuiltinBrowser" : -1 != t.a.indexOf("PhantomJS") ? s = "PhantomJS" : -1 != t.a.indexOf("Safari") ? s = "Safari" : -1 != t.a.indexOf("AdobeAIR") ? s = "AdobeAIR" : -1 != t.a.indexOf("PlayStation") && (s = "BuiltinBrowser"), "BuiltinBrowser" == s ? o = "Unknown" : "Silk" == s ? o = y(t.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == s ? o = y(t.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != t.a.indexOf("Version/") ? o = y(t.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == s ? o = y(t.a, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == s ? o = y(t.a, /OPR\/([\d.]+)/, 1) : "PhantomJS" == s && (o = y(t.a, /PhantomJS\/([\d.]+)/, 1)), o = m(o), a = "AdobeAIR" == s ? 2 < o.c || 2 == o.c && 5 <= o.g : "BlackBerry" == e ? 10 <= i.c : "Android" == e ? 2 < i.c || 2 == i.c && 1 < i.g : 526 <= n.c || 525 <= n.c && 13 <= n.g, new g(s, 0, 0, 0, 0, 0, 0, new p(a, 536 > n.c || 536 == n.c && 11 > n.g))
    }

    function y(t, e, i) {
        return (t = t.match(e)) && t[i] ? t[i] : ""
    }

    function T(t) {
        this.la = t || "-"
    }

    function L(t, e) {
        this.M = t, this.Y = 4, this.N = "n";
        var i = (e || "n4").match(/^([nio])([1-9])$/i);
        i && (this.N = i[1], this.Y = parseInt(i[2], 10))
    }

    function _(t) {
        return t.N + t.Y
    }

    function w(t) {
        var e = 4, i = "n", n = null;
        return t && ((n = t.match(/(normal|oblique|italic)/i)) && n[1] && (i = n[1].substr(0, 1).toLowerCase()), (n = t.match(/([1-9]00|normal|bold)/i)) && n[1] && (/bold/i.test(n[1]) ? e = 7 : /[1-9]00/.test(n[1]) && (e = parseInt(n[1].substr(0, 1), 10)))), i + e
    }

    function C(t, e) {
        this.d = t, this.p = t.t.document.documentElement, this.P = e, this.j = "wf", this.h = new T("-"), this.ga = !1 !== e.events, this.B = !1 !== e.classes
    }

    function k(t) {
        if (t.B) {
            var e = c(t.p, t.h.e(t.j, "active")), i = [], n = [t.h.e(t.j, "loading")];
            e || i.push(t.h.e(t.j, "inactive")), l(t.p, i, n)
        }
        A(t, "inactive")
    }

    function A(t, e, i) {
        t.ga && t.P[e] && (i ? t.P[e](i.getName(), _(i)) : t.P[e]())
    }

    function x() {
        this.w = {}
    }

    function D(t, e) {
        this.d = t, this.G = e, this.m = this.d.createElement("span", {"aria-hidden": "true"}, this.G)
    }

    function I(t) {
        a(t.d, "body", t.m)
    }

    function M(t) {
        var e;
        e = [];
        for (var i = t.M.split(/,\s*/), n = 0; n < i.length; n++) {
            var s = i[n].replace(/['"]/g, "");
            e.push(-1 == s.indexOf(" ") ? s : "'" + s + "'")
        }
        return e = e.join(","), i = "normal", "o" === t.N ? i = "oblique" : "i" === t.N && (i = "italic"), "display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + e + ";" + ("font-style:" + i + ";font-weight:" + (t.Y + "00") + ";")
    }

    function R(t, e, i, n, s, o, a, r) {
        this.Z = t, this.ja = e, this.d = i, this.s = n, this.G = r || "BESbswy", this.k = s, this.I = {}, this.W = o || 3e3, this.ba = a || null, this.F = this.D = null, t = new D(this.d, this.G), I(t);
        for (var l in Z)Z.hasOwnProperty(l) && (e = new L(Z[l], _(this.s)), e = M(e), t.m.style.cssText = e, this.I[Z[l]] = t.m.offsetWidth);
        t.remove()
    }

    function O(t, e, i) {
        for (var n in Z)if (Z.hasOwnProperty(n) && e === t.I[Z[n]] && i === t.I[Z[n]])return !0;
        return !1
    }

    function N(t) {
        var e = t.D.m.offsetWidth, i = t.F.m.offsetWidth;
        e === t.I.serif && i === t.I["sans-serif"] || t.k.fa && O(t, e, i) ? K() - t.na >= t.W ? t.k.fa && O(t, e, i) && (null === t.ba || t.ba.hasOwnProperty(t.s.getName())) ? $(t, t.Z) : $(t, t.ja) : P(t) : $(t, t.Z)
    }

    function P(t) {
        setTimeout(s(function () {
            N(this)
        }, t), 25)
    }

    function $(t, e) {
        t.D.remove(), t.F.remove(), e(t.s)
    }

    function U(t, e, i, n) {
        this.d = e, this.u = i, this.R = 0, this.da = this.aa = !1, this.W = n, this.k = t.k
    }

    function B(t, e, i, n, o) {
        if (i = i || {}, 0 === e.length && o)k(t.u); else for (t.R += e.length, o && (t.aa = o), o = 0; o < e.length; o++) {
            var a = e[o], r = i[a.getName()], c = t.u, d = a;
            c.B && l(c.p, [c.h.e(c.j, d.getName(), _(d).toString(), "loading")]), A(c, "fontloading", d), c = null, c = new R(s(t.ha, t), s(t.ia, t), t.d, a, t.k, t.W, n, r), c.start()
        }
    }

    function F(t) {
        0 == --t.R && t.aa && (t.da ? (t = t.u, t.B && l(t.p, [t.h.e(t.j, "active")], [t.h.e(t.j, "loading"), t.h.e(t.j, "inactive")]), A(t, "active")) : k(t.u))
    }

    function j(t) {
        this.J = t, this.v = new x, this.oa = new v(t.navigator.userAgent), this.a = this.oa.parse(), this.T = this.U = 0, this.Q = this.S = !0
    }

    function H(t, e, i, n, s) {
        var o = 0 == --t.U;
        (t.Q || t.S) && setTimeout(function () {
            B(e, i, n || null, s || null, o)
        }, 0)
    }

    function z(t, e, i) {
        this.O = t ? t : e + te, this.q = [], this.V = [], this.ea = i || ""
    }

    function V(t) {
        this.q = t, this.ca = [], this.L = {}
    }

    function X(t, e) {
        this.a = new v(navigator.userAgent).parse(), this.d = t, this.f = e
    }

    function W(t, e) {
        this.d = t, this.f = e, this.o = []
    }

    function Y(t, e) {
        this.d = t, this.f = e, this.o = []
    }

    function G(t, e) {
        this.d = t, this.f = e, this.o = []
    }

    function J(t, e) {
        this.d = t, this.f = e
    }

    var K = Date.now || function () {
            return +new Date
        };
    o.prototype.createElement = function (t, e, i) {
        if (t = this.C.createElement(t), e)for (var n in e)e.hasOwnProperty(n) && ("style" == n ? t.style.cssText = e[n] : t.setAttribute(n, e[n]));
        return i && t.appendChild(this.C.createTextNode(i)), t
    };
    var q = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    f.prototype.compare = function (t) {
        return this.c > t.c || this.c === t.c && this.g > t.g || this.c === t.c && this.g === t.g && this.A > t.A ? 1 : this.c < t.c || this.c === t.c && this.g < t.g || this.c === t.c && this.g === t.g && this.A < t.A ? -1 : 0
    }, f.prototype.toString = function () {
        return [this.c, this.g || "", this.A || "", this.e || ""].join("")
    }, g.prototype.getName = function () {
        return this.M
    };
    var Q = new g("Unknown", 0, 0, 0, 0, 0, 0, new p(!1, !1));
    v.prototype.parse = function () {
        var t;
        if (-1 != this.a.indexOf("MSIE") || -1 != this.a.indexOf("Trident/")) {
            t = b(this);
            var e = m(S(this)), i = null, n = y(this.a, /Trident\/([\d\w\.]+)/, 1), i = m(-1 != this.a.indexOf("MSIE") ? y(this.a, /MSIE ([\d\w\.]+)/, 1) : y(this.a, /rv:([\d\w\.]+)/, 1));
            "" != n && m(n), t = new g("MSIE", 0, 0, 0, 0, 0, 0, new p("Windows" == t && 6 <= i.c || "Windows Phone" == t && 8 <= e.c, !1))
        } else if (-1 != this.a.indexOf("Opera"))t:if (t = m(y(this.a, /Presto\/([\d\w\.]+)/, 1)), m(S(this)), null !== t.c || m(y(this.a, /rv:([^\)]+)/, 1)), -1 != this.a.indexOf("Opera Mini/"))t = m(y(this.a, /Opera Mini\/([\d\.]+)/, 1)), t = new g("OperaMini", 0, 0, 0, b(this), 0, 0, new p(!1, !1)); else {
            if (-1 != this.a.indexOf("Version/") && (t = m(y(this.a, /Version\/([\d\.]+)/, 1)), null !== t.c)) {
                t = new g("Opera", 0, 0, 0, b(this), 0, 0, new p(10 <= t.c, !1));
                break t
            }
            t = m(y(this.a, /Opera[\/ ]([\d\.]+)/, 1)), t = null !== t.c ? new g("Opera", 0, 0, 0, b(this), 0, 0, new p(10 <= t.c, !1)) : new g("Opera", 0, 0, 0, b(this), 0, 0, new p(!1, !1))
        } else/OPR\/[\d.]+/.test(this.a) ? t = E(this) : /AppleWeb(K|k)it/.test(this.a) ? t = E(this) : -1 != this.a.indexOf("Gecko") ? (t = "Unknown", e = new f, m(S(this)), e = !1, -1 != this.a.indexOf("Firefox") ? (t = "Firefox", e = m(y(this.a, /Firefox\/([\d\w\.]+)/, 1)), e = 3 <= e.c && 5 <= e.g) : -1 != this.a.indexOf("Mozilla") && (t = "Mozilla"), i = m(y(this.a, /rv:([^\)]+)/, 1)), e || (e = 1 < i.c || 1 == i.c && 9 < i.g || 1 == i.c && 9 == i.g && 2 <= i.A), t = new g(t, 0, 0, 0, b(this), 0, 0, new p(e, !1))) : t = Q;
        return t
    }, T.prototype.e = function () {
        for (var t = [], e = 0; e < arguments.length; e++)t.push(arguments[e].replace(/[\W_]+/g, "").toLowerCase());
        return t.join(this.la)
    }, L.prototype.getName = function () {
        return this.M
    }, D.prototype.remove = function () {
        var t = this.m;
        t.parentNode && t.parentNode.removeChild(t)
    };
    var Z = {ra: "serif", qa: "sans-serif", pa: "monospace"};
    R.prototype.start = function () {
        this.D = new D(this.d, this.G), I(this.D), this.F = new D(this.d, this.G), I(this.F), this.na = K();
        var t = new L(this.s.getName() + ",serif", _(this.s)), t = M(t);
        this.D.m.style.cssText = t, t = new L(this.s.getName() + ",sans-serif", _(this.s)), t = M(t), this.F.m.style.cssText = t, N(this)
    }, U.prototype.ha = function (t) {
        var e = this.u;
        e.B && l(e.p, [e.h.e(e.j, t.getName(), _(t).toString(), "active")], [e.h.e(e.j, t.getName(), _(t).toString(), "loading"), e.h.e(e.j, t.getName(), _(t).toString(), "inactive")]), A(e, "fontactive", t), this.da = !0, F(this)
    }, U.prototype.ia = function (t) {
        var e = this.u;
        if (e.B) {
            var i = c(e.p, e.h.e(e.j, t.getName(), _(t).toString(), "active")), n = [], s = [e.h.e(e.j, t.getName(), _(t).toString(), "loading")];
            i || n.push(e.h.e(e.j, t.getName(), _(t).toString(), "inactive")), l(e.p, n, s)
        }
        A(e, "fontinactive", t), F(this)
    }, j.prototype.load = function (t) {
        this.d = new o(this.J, t.context || this.J), this.S = !1 !== t.events, this.Q = !1 !== t.classes;
        var e = new C(this.d, t), i = [], n = t.timeout;
        e.B && l(e.p, [e.h.e(e.j, "loading")]), A(e, "loading");
        var a, i = this.v, r = this.d, c = [];
        for (a in t)if (t.hasOwnProperty(a)) {
            var d = i.w[a];
            d && c.push(d(t[a], r))
        }
        for (i = c, this.T = this.U = i.length, t = new U(this.a, this.d, e, n), n = 0, a = i.length; a > n; n++)r = i[n], r.K(this.a, s(this.ka, this, r, e, t))
    }, j.prototype.ka = function (t, e, i, n) {
        var s = this;
        n ? t.load(function (t, e, n) {
            H(s, i, t, e, n)
        }) : (t = 0 == --this.U, this.T--, t && 0 == this.T ? k(e) : (this.Q || this.S) && B(i, [], {}, null, t))
    };
    var te = "//fonts.googleapis.com/css";
    z.prototype.e = function () {
        if (0 == this.q.length)throw Error("No fonts to load!");
        if (-1 != this.O.indexOf("kit="))return this.O;
        for (var t = this.q.length, e = [], i = 0; t > i; i++)e.push(this.q[i].replace(/ /g, "+"));
        return t = this.O + "?family=" + e.join("%7C"), 0 < this.V.length && (t += "&subset=" + this.V.join(",")), 0 < this.ea.length && (t += "&text=" + encodeURIComponent(this.ea)), t
    };
    var ee = {
        latin: "BESbswy",
        cyrillic: "&#1081;&#1103;&#1046;",
        greek: "&#945;&#946;&#931;",
        khmer: "&#x1780;&#x1781;&#x1782;",
        Hanuman: "&#x1780;&#x1781;&#x1782;"
    }, ie = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
    }, ne = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
    }, se = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    V.prototype.parse = function () {
        for (var t = this.q.length, e = 0; t > e; e++) {
            var i = this.q[e].split(":"), n = i[0].replace(/\+/g, " "), s = ["n4"];
            if (2 <= i.length) {
                var o, a = i[1];
                if (o = [], a)for (var a = a.split(","), r = a.length, l = 0; r > l; l++) {
                    var c;
                    if (c = a[l], c.match(/^[\w-]+$/)) {
                        c = se.exec(c.toLowerCase());
                        var d = void 0;
                        if (null == c)d = ""; else {
                            if (d = void 0, d = c[1], null == d || "" == d)d = "4"; else var h = ie[d], d = h ? h : isNaN(d) ? "4" : d.substr(0, 1);
                            c = c[2], d = [null == c || "" == c ? "n" : ne[c], d].join("")
                        }
                        c = d
                    } else c = "";
                    c && o.push(c)
                }
                0 < o.length && (s = o), 3 == i.length && (i = i[2], o = [], i = i ? i.split(",") : o, 0 < i.length && (i = ee[i[0]]) && (this.L[n] = i))
            }
            for (this.L[n] || (i = ee[n]) && (this.L[n] = i), i = 0; i < s.length; i += 1)this.ca.push(new L(n, s[i]))
        }
    };
    var oe = {Arimo: !0, Cousine: !0, Tinos: !0};
    X.prototype.K = function (t, e) {
        e(t.k.X)
    }, X.prototype.load = function (t) {
        var e = this.d;
        "MSIE" == this.a.getName() && 1 != this.f.blocking ? r(e, s(this.$, this, t)) : this.$(t)
    }, X.prototype.$ = function (t) {
        for (var e = this.d, i = new z(this.f.api, d(e), this.f.text), n = this.f.families, s = n.length, o = 0; s > o; o++) {
            var a = n[o].split(":");
            3 == a.length && i.V.push(a.pop());
            var r = "";
            2 == a.length && "" != a[1] && (r = ":"), i.q.push(a.join(r))
        }
        n = new V(n), n.parse(), h(e, i.e()), t(n.ca, n.L, oe)
    }, W.prototype.H = function (t) {
        var e = this.d;
        return d(this.d) + (this.f.api || "//f.fontdeck.com/s/css/js/") + (e.t.location.hostname || e.J.location.hostname) + "/" + t + ".js"
    }, W.prototype.K = function (t, e) {
        var i = this.f.id, n = this.d.t, s = this;
        i ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[i] = function (t, i) {
            for (var n = 0, o = i.fonts.length; o > n; ++n) {
                var a = i.fonts[n];
                s.o.push(new L(a.name, w("font-weight:" + a.weight + ";font-style:" + a.style)))
            }
            e(t)
        }, u(this.d, this.H(i), function (t) {
            t && e(!1)
        })) : e(!1)
    }, W.prototype.load = function (t) {
        t(this.o)
    }, Y.prototype.H = function (t) {
        var e = d(this.d);
        return (this.f.api || e + "//use.typekit.net") + "/" + t + ".js"
    }, Y.prototype.K = function (t, e) {
        var i = this.f.id, n = this.d.t, s = this;
        i ? u(this.d, this.H(i), function (t) {
            if (t)e(!1); else {
                if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                    t = n.Typekit.config.fn;
                    for (var i = 0; i < t.length; i += 2)for (var o = t[i], a = t[i + 1], r = 0; r < a.length; r++)s.o.push(new L(o, a[r]));
                    try {
                        n.Typekit.load({events: !1, classes: !1})
                    } catch (l) {
                    }
                }
                e(!0)
            }
        }, 2e3) : e(!1)
    }, Y.prototype.load = function (t) {
        t(this.o)
    }, G.prototype.K = function (t, e) {
        var i = this, n = i.f.projectId, s = i.f.version;
        if (n) {
            var o = i.d.t;
            u(this.d, i.H(n, s), function (s) {
                if (s)e(!1); else {
                    if (o["__mti_fntLst" + n] && (s = o["__mti_fntLst" + n]()))for (var a = 0; a < s.length; a++)i.o.push(new L(s[a].fontfamily));
                    e(t.k.X)
                }
            }).id = "__MonotypeAPIScript__" + n
        } else e(!1)
    }, G.prototype.H = function (t, e) {
        var i = d(this.d), n = (this.f.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return i + "//" + n + "/" + t + ".js" + (e ? "?v=" + e : "")
    }, G.prototype.load = function (t) {
        t(this.o)
    }, J.prototype.load = function (t) {
        var e, i, n = this.f.urls || [], s = this.f.families || [], o = this.f.testStrings || {};
        for (e = 0, i = n.length; i > e; e++)h(this.d, n[e]);
        for (n = [], e = 0, i = s.length; i > e; e++) {
            var a = s[e].split(":");
            if (a[1])for (var r = a[1].split(","), l = 0; l < r.length; l += 1)n.push(new L(a[0], r[l]));
            else n.push(new L(a[0]))
        }
        t(n, o)
    }, J.prototype.K = function (t, e) {
        return e(t.k.X)
    };
    var ae = new j(this);
    ae.v.w.custom = function (t, e) {
        return new J(e, t)
    }, ae.v.w.fontdeck = function (t, e) {
        return new W(e, t)
    }, ae.v.w.monotype = function (t, e) {
        return new G(e, t)
    }, ae.v.w.typekit = function (t, e) {
        return new Y(e, t)
    }, ae.v.w.google = function (t, e) {
        return new X(e, t)
    }, this.WebFont || (this.WebFont = {}, this.WebFont.load = s(ae.load, ae), this.WebFontConfig && ae.load(this.WebFontConfig))
}(this, document), function (t, e, i) {
    e[t] = e[t] || i(), "undefined" != typeof module && module.exports ? module.exports = e[t] : "function" == typeof define && define.amd && define(function () {
        return e[t]
    })
}("Promise", "undefined" != typeof global ? global : this, function () {
    "use strict";
    function t(t, e) {
        u.add(t, e), h || (h = f(u.drain))
    }

    function e(t) {
        var e, i = typeof t;
        return null == t || "object" != i && "function" != i || (e = t.then), "function" == typeof e ? e : !1
    }

    function i() {
        for (var t = 0; t < this.chain.length; t++)n(this, 1 === this.state ? this.chain[t].success : this.chain[t].failure, this.chain[t]);
        this.chain.length = 0
    }

    function n(t, i, n) {
        var s, o;
        try {
            i === !1 ? n.reject(t.msg) : (s = i === !0 ? t.msg : i.call(void 0, t.msg), s === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = e(s)) ? o.call(s, n.resolve, n.reject) : n.resolve(s))
        } catch (a) {
            n.reject(a)
        }
    }

    function s(n) {
        var a, l = this;
        if (!l.triggered) {
            l.triggered = !0, l.def && (l = l.def);
            try {
                (a = e(n)) ? t(function () {
                    var t = new r(l);
                    try {
                        a.call(n, function () {
                            s.apply(t, arguments)
                        }, function () {
                            o.apply(t, arguments)
                        })
                    } catch (e) {
                        o.call(t, e)
                    }
                }) : (l.msg = n, l.state = 1, l.chain.length > 0 && t(i, l))
            } catch (c) {
                o.call(new r(l), c)
            }
        }
    }

    function o(e) {
        var n = this;
        n.triggered || (n.triggered = !0, n.def && (n = n.def), n.msg = e, n.state = 2, n.chain.length > 0 && t(i, n))
    }

    function a(t, e, i, n) {
        for (var s = 0; s < e.length; s++)!function (s) {
            t.resolve(e[s]).then(function (t) {
                i(s, t)
            }, n)
        }(s)
    }

    function r(t) {
        this.def = t, this.triggered = !1
    }

    function l(t) {
        this.promise = t, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
    }

    function c(e) {
        if ("function" != typeof e)throw TypeError("Not a function");
        if (0 !== this.__NPO__)throw TypeError("Not a promise");
        this.__NPO__ = 1;
        var n = new l(this);
        this.then = function (e, s) {
            var o = {success: "function" == typeof e ? e : !0, failure: "function" == typeof s ? s : !1};
            return o.promise = new this.constructor(function (t, e) {
                if ("function" != typeof t || "function" != typeof e)throw TypeError("Not a function");
                o.resolve = t, o.reject = e
            }), n.chain.push(o), 0 !== n.state && t(i, n), o.promise
        }, this["catch"] = function (t) {
            return this.then(void 0, t)
        };
        try {
            e.call(void 0, function (t) {
                s.call(n, t)
            }, function (t) {
                o.call(n, t)
            })
        } catch (a) {
            o.call(n, a)
        }
    }

    var d, h, u, p = Object.prototype.toString, f = "undefined" != typeof setImmediate ? function (t) {
        return setImmediate(t)
    } : setTimeout;
    try {
        Object.defineProperty({}, "x", {}), d = function (t, e, i, n) {
            return Object.defineProperty(t, e, {value: i, writable: !0, configurable: n !== !1})
        }
    } catch (m) {
        d = function (t, e, i) {
            return t[e] = i, t
        }
    }
    u = function () {
        function t(t, e) {
            this.fn = t, this.self = e, this.next = void 0
        }

        var e, i, n;
        return {
            add: function (s, o) {
                n = new t(s, o), i ? i.next = n : e = n, i = n, n = void 0
            }, drain: function () {
                var t = e;
                for (e = i = h = void 0; t;)t.fn.call(t.self), t = t.next
            }
        }
    }();
    var g = d({}, "constructor", c, !1);
    return c.prototype = g, d(g, "__NPO__", 0, !1), d(c, "resolve", function (t) {
        var e = this;
        return t && "object" == typeof t && 1 === t.__NPO__ ? t : new e(function (e, i) {
            if ("function" != typeof e || "function" != typeof i)throw TypeError("Not a function");
            e(t)
        })
    }), d(c, "reject", function (t) {
        return new this(function (e, i) {
            if ("function" != typeof e || "function" != typeof i)throw TypeError("Not a function");
            i(t)
        })
    }), d(c, "all", function (t) {
        var e = this;
        return "[object Array]" != p.call(t) ? e.reject(TypeError("Not an array")) : 0 === t.length ? e.resolve([]) : new e(function (i, n) {
            if ("function" != typeof i || "function" != typeof n)throw TypeError("Not a function");
            var s = t.length, o = Array(s), r = 0;
            a(e, t, function (t, e) {
                o[t] = e, ++r === s && i(o)
            }, n)
        })
    }), d(c, "race", function (t) {
        var e = this;
        return "[object Array]" != p.call(t) ? e.reject(TypeError("Not an array")) : new e(function (i, n) {
            if ("function" != typeof i || "function" != typeof n)throw TypeError("Not a function");
            a(e, t, function (t, e) {
                i(e)
            }, n)
        })
    }), c
}), window.SL = function (t) {
    t = t.split(".");
    for (var e = SL; t.length;) {
        var i = t.shift();
        e[i] || (e[i] = {}), e = e[i]
    }
    return e
}, $(function () {
    function t() {
        e(), SL.helpers.PageLoader.hide(), SL.settings.init(), SL.keyboard.init(), SL.pointer.init(), SL.warnings.init(), SL.draganddrop.init(), SL.fonts.init(), SL.visibility.init(), "undefined" == typeof SLConfig && (window.SLConfig = {}), i(), n()
    }

    function e() {
        var t = $("html");
        t.addClass("loaded"), SL.util.device.HAS_TOUCH && t.addClass("touch"), SL.util.device.isMac() ? t.addClass("ua-mac") : SL.util.device.isWindows() ? t.addClass("ua-windows") : SL.util.device.isLinux() && t.addClass("ua-linux"), SL.util.device.isChrome() ? t.addClass("ua-chrome") : SL.util.device.isSafari() ? t.addClass("ua-safari") : SL.util.device.isFirefox() ? t.addClass("ua-firefox") : SL.util.device.isIE() && t.addClass("ua-ie"), SL.util.device.getScrollBarWidth() > 0 && t.addClass("has-visible-scrollbars")
    }

    function i() {
        "object" == typeof window.SLConfig && (SLConfig.deck && !SLConfig.deck.notes && (SLConfig.deck.notes = {}), SL.current_user = new SL.models.User(SLConfig.current_user), "object" == typeof SLConfig.deck && (SL.current_deck = new SL.models.Deck(SLConfig.deck)), "object" == typeof SLConfig.team && (SL.current_team = new SL.models.Team(SLConfig.team)))
    }

    function n() {
        var t = $("html");
        SL.util.hideAddressBar(), t.hasClass("home index") && (SL.view = new SL.views.home.Index), SL.view = t.hasClass("home explore") ? new SL.views.home.Explore : t.hasClass("users show") ? new SL.views.users.Show : t.hasClass("decks show") ? new SL.views.decks.Show : t.hasClass("decks edit") ? new SL.editor.Editor : t.hasClass("decks edit-requires-upgrade") ? new SL.views.decks.EditRequiresUpgrade : t.hasClass("decks embed") ? new SL.views.decks.Embed : t.is(".decks.live-client") ? new SL.views.decks.LiveClient : t.is(".decks.live-server") ? new SL.views.decks.LiveServer : t.hasClass("decks speaker") ? new SL.views.decks.Speaker : t.hasClass("decks export") ? new SL.views.decks.Export : t.hasClass("decks fullscreen") ? new SL.views.decks.Fullscreen : t.hasClass("decks review") ? new SL.views.decks.Review : t.hasClass("decks password") ? new SL.views.decks.Password : t.hasClass("teams-subscriptions-show") ? new SL.views.teams.subscriptions.Show : t.hasClass("registrations") && (t.hasClass("edit") || t.hasClass("update")) ? new SL.views.devise.Edit : t.hasClass("registrations") || t.hasClass("team_registrations") || t.hasClass("sessions") || t.hasClass("passwords") || t.hasClass("invitations show") ? new SL.views.devise.All : t.hasClass("subscriptions new") || t.hasClass("subscriptions edit") ? new SL.views.subscriptions.New : t.hasClass("subscriptions show") ? new SL.views.subscriptions.Show : t.hasClass("subscriptions edit_period") ? new SL.views.subscriptions.EditPeriod : t.hasClass("teams-reactivate") ? new SL.views.teams.subscriptions.Reactivate : t.hasClass("teams-signup") ? new SL.views.teams.New : t.hasClass("teams edit") ? new SL.views.teams.teams.Edit : t.hasClass("teams edit_members") ? new SL.views.teams.teams.EditMembers : t.hasClass("teams show") ? new SL.views.teams.teams.Show : t.hasClass("themes edit") ? new SL.views.themes.Edit : t.hasClass("themes preview") ? new SL.views.themes.Preview : t.hasClass("pricing") ? new SL.views.statik.Pricing : t.hasClass("static") ? new SL.views.statik.All : new SL.views.Base, Placement.sync()
    }

    setTimeout(t, 1)
}), SL("collections").Collection = Class.extend({
    init: function (t, e, i) {
        this.factory = e, this.crud = i || {}, this.changed = new signals.Signal, this.replaced = new signals.Signal, this.setData(t)
    }, setData: function (t) {
        var e = !!this.data && "undefined" != typeof this.data;
        if (this.data = t || [], "function" == typeof this.factory) {
            var i = this.data;
            this.data = [];
            for (var n = 0, s = i.length; s > n; n++) {
                var o = i[n];
                this.data.push(o instanceof this.factory ? i[n] : this.createModelInstance(i[n]))
            }
        }
        e && this.replaced.dispatch()
    }, appendData: function (t) {
        var e = this.size();
        return this.setData(this.data.concat(t)), this.data.slice(e)
    }, prependData: function (t) {
        var e = this.size();
        return this.setData(t.concat(this.data)), this.data.slice(0, e)
    }, find: function (t) {
        for (var e = 0, i = this.data.length; i > e; e++) {
            var n = this.data[e];
            if (n === t)return e
        }
        return -1
    }, contains: function (t) {
        return -1 !== this.find(t)
    }, findByProperties: function (t) {
        for (var e = 0, i = this.data.length; i > e; e++) {
            var n = this.data[e], s = !0;
            for (var o in t)t.hasOwnProperty(o) && ("function" == typeof n.get ? n.get(o) != t[o] && (s = !1) : n[o] != t[o] && (s = !1));
            if (s)return e
        }
        return -1
    }, getByProperties: function (t) {
        return this.data[this.findByProperties(t)]
    }, getByID: function (t) {
        return this.getByProperties({id: t})
    }, remove: function (t) {
        for (var e, i = 0; i < this.data.length; i++)this.data[i] === t && (e = this.data.splice(i, 1)[0], i--);
        "undefined" != typeof e && this.changed.dispatch(null, [e])
    }, removeByProperties: function (t) {
        for (var e, i = this.findByProperties(t), n = 0; -1 !== i && n++ < 1e3;)e = this.data.splice(i, 1)[0], i = this.findByProperties(t);
        "undefined" != typeof e && this.changed.dispatch(null, [e])
    }, removeByIndex: function (t) {
        var e = this.data.splice(t, 1);
        return "undefined" != typeof e && this.changed.dispatch(null, [e]), e
    }, create: function (t, e) {
        return new Promise(function (i, n) {
            "function" == typeof this.factory ? this.crud.create ? $.ajax({
                type: "POST",
                context: this,
                url: e && e.url ? e.url : this.crud.create,
                data: t
            }).done(function (t) {
                e && e.model ? (e.model.setData(t), i(e.model)) : e && e.createModel === !1 ? i() : i(this.createModel(t, e))
            }).fail(function () {
                n()
            }) : i(this.createModel(t, e)) : n()
        }.bind(this))
    }, createModel: function (t, e) {
        if (e = $.extend({prepend: !1}, e), "function" == typeof this.factory) {
            var i = this.createModelInstance(t);
            return e.prepend ? this.unshift(i) : this.push(i), i
        }
    }, createModelInstance: function (t, e) {
        return new this.factory(t, e)
    }, clear: function () {
        this.data.length = 0, this.changed.dispatch()
    }, swap: function (t, e) {
        var i = "number" == typeof t && t >= 0 && t < this.size(), n = "number" == typeof e && e >= 0 && e < this.size();
        if (i && n) {
            var s = this.data[t], o = this.data[e];
            this.data[t] = o, this.data[e] = s
        }
        this.changed.dispatch()
    }, shiftLeft: function (t) {
        "number" == typeof t && t > 0 && this.swap(t, t - 1)
    }, shiftRight: function (t) {
        "number" == typeof t && t < this.size() - 1 && this.swap(t, t + 1)
    }, at: function (t) {
        return this.data[t]
    }, first: function () {
        return this.at(0)
    }, last: function () {
        return this.at(this.size() - 1)
    }, size: function () {
        return this.data.length
    }, isEmpty: function () {
        return 0 === this.size()
    }, getUniqueName: function (t, e, i) {
        for (var n = -1, s = 0, o = this.data.length; o > s; s++) {
            var a = this.data[s], r = "function" == typeof a.get ? a.get(e) : a[e];
            if (r) {
                var l = r.match(new RegExp("^" + t + "\\s?(\\d+)?$"));
                l && 2 === l.length && (n = Math.max(l[1] ? parseInt(l[1], 10) : 0, n))
            }
        }
        return -1 === n ? t + (i ? " 1" : "") : t + " " + (n + 1)
    }, toJSON: function () {
        return this.map(function (t) {
            return "function" == typeof t.toJSON ? t.toJSON() : t
        })
    }, destroy: function () {
        this.changed.dispose(), this.data = null
    }, unshift: function (t) {
        var e = this.data.unshift(t);
        return this.changed.dispatch(t), e
    }, push: function (t) {
        var e = this.data.push(t);
        return this.changed.dispatch([t]), e
    }, pop: function () {
        var t = this.data.pop();
        return "undefined" != typeof t && this.changed.dispatch(null, [t]), t
    }, map: function (t, e) {
        return this.data.map(t, e)
    }, some: function (t, e) {
        return this.data.some(t, e)
    }, filter: function (t, e) {
        return this.data.filter(t, e)
    }, forEach: function (t, e) {
        return this.data.forEach(t, e)
    }
}), SL("collections").Loadable = SL.collections.Collection.extend({
    init: function () {
        this._super.apply(this, arguments), this.loadStatus = "", this.loadStarted = new signals.Signal, this.loadCompleted = new signals.Signal, this.loadFailed = new signals.Signal
    }, load: function () {
    }, unload: function () {
        this.loadXHR && (this.loadXHR.abort(), this.loadXHR = null), this.loadStatus = "", this.clear()
    }, onLoadStarted: function () {
        this.loadStatus = "loading", this.loadStarted.dispatch()
    }, onLoadCompleted: function () {
        this.loadStatus = "loaded", this.loadCompleted.dispatch()
    }, onLoadFailed: function () {
        this.loadStatus = "failed", this.loadFailed.dispatch()
    }, isLoading: function () {
        return "loading" === this.loadStatus
    }, isLoaded: function () {
        return "loaded" === this.loadStatus
    }, destroy: function () {
        this.loadStarted.dispose(), this.loadCompleted.dispose(), this.loadFailed.dispose(), this._super()
    }
}), SL("collections").Paginatable = SL.collections.Loadable.extend({
    init: function () {
        this._super.apply(this, arguments)
    }, load: function (t) {
        return this.isLoading() ? void 0 : (this.listURL = t || this.crud.list, this.onLoadStarted(), new Promise(function (t, e) {
            this.loadXHR = $.ajax({type: "GET", url: this.listURL, context: this}).done(function (e) {
                this.totalResults = e.total, this.pagesLoaded = 1, this.pagesTotal = 1, e.total > e.results.length && (this.pagesTotal = Math.ceil(e.total / e.results.length)), this.setData(e.results), this.loadXHR = null, this.onLoadCompleted(), t()
            }).fail(function () {
                this.loadXHR = null, this.onLoadFailed(), e()
            })
        }.bind(this)))
    }, hasNextPage: function () {
        return this.pagesLoaded < this.pagesTotal
    }, loadNextPage: function () {
        return this.hasNextPage() ? new Promise(function (t, e) {
            $.ajax({
                type: "GET",
                url: this.listURL + "?page=" + (this.pagesLoaded + 1),
                context: this
            }).done(function (e) {
                this.pagesLoaded += 1, t(this.appendData(e.results))
            }).fail(function () {
                e()
            })
        }.bind(this)) : Promise.resolve([])
    }, getTotalResults: function () {
        return this.totalResults
    }, getLoadedResults: function () {
        return this.size()
    }
}), SL("collections.collab").Comments = SL.collections.Loadable.extend({
    init: function (t, e) {
        this._super(t, e || SL.models.collab.Comment, {
            list: SL.config.AJAX_COMMENTS_LIST(SL.current_deck.get("id")),
            create: SL.config.AJAX_COMMENTS_CREATE(SL.current_deck.get("id")),
            "delete": SL.config.AJAX_COMMENTS_DELETE(SL.current_deck.get("id"))
        })
    }, load: function (t) {
        return this.isLoading() ? void 0 : (this.url = t || this.crud.list, this.onLoadStarted(), new Promise(function (t, e) {
            this.loadXHR = $.ajax({type: "GET", url: this.url, context: this}).done(function (e) {
                this.pagesLoaded = 1, this.pagesTotal = 1, e.total > e.results.length && (this.pagesTotal = Math.ceil(e.total / e.results.length)), this.setData(e.results.reverse()), this.pageOffsetID = this.isEmpty() ? null : this.first().get("id"), this.loadXHR = null, this.onLoadCompleted(), t()
            }).fail(function () {
                this.loadXHR = null, this.onLoadFailed(), e()
            })
        }.bind(this)))
    }, hasNextPage: function () {
        return this.pagesLoaded < this.pagesTotal
    }, loadNextPage: function () {
        return this.hasNextPage() ? new Promise(function (t, e) {
            $.ajax({
                type: "GET",
                url: this.url + "?page=" + this.pagesLoaded + "&offset_id=" + this.pageOffsetID,
                context: this
            }).done(function (e) {
                this.pagesLoaded += 1, t(this.prependData(e.results.reverse()))
            }).fail(function () {
                e()
            })
        }.bind(this)) : Promise.resolve([])
    }, create: function (t, e) {
        e = $.extend({url: this.crud.create}, e), e.model ? e.model.setState(SL.models.collab.Comment.STATE_SAVING) : e.model = this.createModel(t.comment);
        var i = JSON.parse(JSON.stringify(t));
        return delete i.comment.user_id, delete i.comment.created_at, this._super(i, e).then(function () {
            e.model.setState(SL.models.collab.Comment.STATE_SAVED)
        }.bind(this), function () {
            e.model.setState(SL.models.collab.Comment.STATE_FAILED)
        }.bind(this)), Promise.resolve(e.model)
    }, retryCreate: function (t) {
        return this.create({comment: t.toJSON()}, {model: t})
    }
}), SL("collections.collab").DeckUsers = SL.collections.Loadable.extend({
    init: function (t, e, i) {
        this._super(t, e || SL.models.collab.DeckUser, i || {
                list: SL.config.AJAX_DECKUSER_LIST(SLConfig.deck.id),
                create: SL.config.AJAX_DECKUSER_CREATE(SLConfig.deck.id)
            })
    }, load: function () {
        return this.isLoading() ? void 0 : (this.onLoadStarted(), new Promise(function (t, e) {
            $.ajax({type: "GET", url: this.crud.list, context: this}).done(function (e) {
                this.setData(e.results), this.onLoadCompleted(), t()
            }).fail(function () {
                this.onLoadFailed(), e()
            })
        }.bind(this)))
    }, hasMoreThanOneEditor: function () {
        return this.getEditors().length > 1
    }, hasMoreThanOnePresentEditor: function () {
        return this.getPresentEditors().length > 1
    }, setEditing: function (t) {
        this.forEach(function (e) {
            e.set("editing", e.get("user_id") === t)
        })
    }, getByUserID: function (t) {
        return this.getByProperties({user_id: t})
    }, getEditors: function () {
        return this.filter(function (t) {
            return t.canEdit()
        })
    }, getPresentEditors: function () {
        return this.filter(function (t) {
            return t.canEdit() && t.isOnline()
        })
    }
}), SL("collections").MediaTags = SL.collections.Loadable.extend({
    init: function (t, e, i) {
        this._super(t, e || SL.models.MediaTag, i || {
                list: SL.config.AJAX_MEDIA_TAG_LIST,
                create: SL.config.AJAX_MEDIA_TAG_CREATE,
                update: SL.config.AJAX_MEDIA_TAG_UPDATE,
                "delete": SL.config.AJAX_MEDIA_TAG_DELETE,
                add_media: SL.config.AJAX_MEDIA_TAG_ADD_MEDIA,
                remove_media: SL.config.AJAX_MEDIA_TAG_REMOVE_MEDIA
            }), this.associationChanged = new signals.Signal
    }, load: function () {
        this.isLoading() || (this.onLoadStarted(), $.ajax({
            type: "GET",
            url: this.crud.list,
            context: this
        }).done(function (t) {
            this.setData(t.results), this.onLoadCompleted()
        }).fail(function () {
            this.onLoadFailed()
        }))
    }, create: function (t, e) {
        return this._super($.extend({tag: {name: this.getUniqueName("Tag", "name", !0)}}, t), e)
    }, addTagTo: function (t, e) {
        e.forEach(function (e) {
            t.addMedia(e)
        }), this.associationChanged.dispatch(t), $.ajax({
            type: "POST",
            url: this.crud.add_media(t.get("id")),
            context: this,
            data: {
                media_ids: e.map(function (t) {
                    return t.get("id")
                })
            }
        }).fail(function () {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        })
    }, removeTagFrom: function (t, e) {
        e.forEach(function (e) {
            t.removeMedia(e)
        }), this.associationChanged.dispatch(t), $.ajax({
            type: "DELETE",
            url: this.crud.remove_media(t.get("id")),
            context: this,
            data: {
                media_ids: e.map(function (t) {
                    return t.get("id")
                })
            }
        }).fail(function () {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        })
    }
}), SL("collections").Media = SL.collections.Loadable.extend({
    init: function (t, e, i) {
        this._super(t, e || SL.models.Media, i || {
                list: SL.config.AJAX_MEDIA_LIST,
                update: SL.config.AJAX_MEDIA_UPDATE,
                create: SL.config.AJAX_MEDIA_CREATE,
                "delete": SL.config.AJAX_MEDIA_DELETE
            })
    }, load: function () {
        this.isLoading() || (this.page = 1, this.pagedResults = [], this.onLoadStarted(), this.loadNextPage())
    }, loadNextPage: function () {
        1 === this.page || this.page <= this.totalPages ? $.ajax({
            type: "GET",
            url: this.crud.list + "?page=" + this.page,
            context: this
        }).done(function (t) {
            this.totalPages || (this.totalPages = Math.ceil(t.total / t.results.length)), this.pagedResults = this.pagedResults.concat(t.results), this.page += 1, this.loadNextPage()
        }).fail(function () {
            this.onLoadFailed()
        }) : (this.setData(this.pagedResults), this.onLoadCompleted())
    }, createSearchFilter: function (t) {
        if (!t || "" === t)return function () {
            return !1
        };
        var e = new RegExp(t, "i");
        return function (t) {
            return e.test(t.get("label"))
        }
    }, getImages: function () {
        return this.filter(SL.models.Media.IMAGE.filter)
    }, getVideos: function () {
        return this.filter(SL.models.Media.VIDEO.filter)
    }
}), SL("collections").TeamInvites = SL.collections.Paginatable.extend({
    init: function (t, e) {
        this._super(t, e || SL.models.Model, {list: SL.config.AJAX_TEAM_INVITATIONS_LIST})
    }
}), SL("collections").TeamMediaTags = SL.collections.MediaTags.extend({
    init: function (t) {
        this._super(t, SL.models.MediaTag, {
            list: SL.config.AJAX_TEAM_MEDIA_TAG_LIST,
            create: SL.config.AJAX_TEAM_MEDIA_TAG_CREATE,
            update: SL.config.AJAX_TEAM_MEDIA_TAG_UPDATE,
            "delete": SL.config.AJAX_TEAM_MEDIA_TAG_DELETE,
            add_media: SL.config.AJAX_TEAM_MEDIA_TAG_ADD_MEDIA,
            remove_media: SL.config.AJAX_TEAM_MEDIA_TAG_REMOVE_MEDIA
        })
    }, createModelInstance: function (t) {
        return this._super(t, this.crud)
    }
}), SL("collections").TeamMedia = SL.collections.Media.extend({
    init: function (t) {
        this._super(t, SL.models.Media, {
            list: SL.config.AJAX_TEAM_MEDIA_LIST,
            create: SL.config.AJAX_TEAM_MEDIA_CREATE,
            update: SL.config.AJAX_TEAM_MEDIA_UPDATE,
            "delete": SL.config.AJAX_TEAM_MEDIA_DELETE
        })
    }, createModelInstance: function (t) {
        return this._super(t, this.crud)
    }
}), SL("collections").TeamMembers = SL.collections.Paginatable.extend({
    init: function (t, e) {
        this._super(t, e || SL.models.User, {list: SL.config.AJAX_TEAM_MEMBERS_LIST})
    }
}), SL("models").Model = Class.extend({
    init: function (t) {
        this.setData(t)
    }, setData: function (t) {
        this.data = t || {}
    }, getData: function () {
        return this.data
    }, setAll: function (t) {
        for (var e in t)this.set(e, t[e])
    }, set: function (t, e) {
        this.data[t] = e
    }, get: function (t) {
        if ("string" == typeof t && /\./.test(t)) {
            for (var e = t.split("."), i = this.data; e.length && i;)t = e.shift(), i = i[t];
            return i
        }
        return this.data[t]
    }, has: function (t) {
        var e = this.get(t);
        return !!e || e === !1 || 0 === e
    }, toJSON: function () {
        return JSON.parse(JSON.stringify(this.data))
    }
}), SL("models").AccessToken = SL.models.Model.extend({
    init: function (t) {
        this._super(t)
    }, save: function (t) {
        var e = {access_token: {}};
        return t ? t.forEach(function (t) {
            e.access_token[t] = this.get(t)
        }.bind(this)) : e.access_token = this.toJSON(), $.ajax({
            url: SL.config.AJAX_ACCESS_TOKENS_UPDATE(this.get("deck_id"), this.get("id")),
            type: "PUT",
            data: e
        })
    }, destroy: function () {
        return $.ajax({url: SL.config.AJAX_ACCESS_TOKENS_DELETE(this.get("deck_id"), this.get("id")), type: "DELETE"})
    }, clone: function () {
        return new SL.models.AccessToken(JSON.parse(JSON.stringify(this.data)))
    }
}), SL("models.collab").Comment = SL.models.Model.extend({
    init: function (t) {
        this._super(t), this.state = this.has("id") ? SL.models.collab.Comment.STATE_SAVED : SL.models.collab.Comment.STATE_SAVING, this.stateChanged = new signals.Signal
    }, setState: function (t) {
        this.state = t, this.stateChanged.dispatch(this)
    }, getState: function () {
        return this.state
    }, getDisplayName: function () {
        return this.get("name") || this.get("username")
    }, clone: function () {
        return new SL.models.collab.Comment(JSON.parse(JSON.stringify(this.data)))
    }, save: function (t) {
        var e = {comment: {}};
        return t ? t.forEach(function (t) {
            e.comment[t] = this.get(t)
        }.bind(this)) : e.comment = this.toJSON(), $.ajax({
            url: SL.config.AJAX_COMMENTS_UPDATE(SL.current_deck.get("id"), this.get("id")),
            type: "PUT",
            data: e
        })
    }, destroy: function () {
        return $.ajax({url: SL.config.AJAX_COMMENTS_DELETE(SL.current_deck.get("id"), this.get("id")), type: "DELETE"})
    }
}), SL.models.collab.Comment.STATE_SAVED = "saved", SL.models.collab.Comment.STATE_SAVING = "saving", SL.models.collab.Comment.STATE_FAILED = "failed", SL("models.collab").DeckUser = SL.models.Model.extend({
    init: function (t) {
        this._super(t), this.has("status") || this.set("status", SL.models.collab.DeckUser.STATUS_DISCONNECTED)
    }, getDisplayName: function () {
        return this.get("name") || this.get("username")
    }, canComment: function () {
        return !0
    }, canEdit: function () {
        return -1 !== [SL.models.collab.DeckUser.ROLE_OWNER, SL.models.collab.DeckUser.ROLE_ADMIN, SL.models.collab.DeckUser.ROLE_EDITOR].indexOf(this.get("role"))
    }, isAdmin: function () {
        return -1 !== [SL.models.collab.DeckUser.ROLE_OWNER, SL.models.collab.DeckUser.ROLE_ADMIN].indexOf(this.get("role"))
    }, isOnline: function () {
        return this.get("status") !== SL.models.collab.DeckUser.STATUS_DISCONNECTED
    }, isIdle: function () {
        return this.get("status") === SL.models.collab.DeckUser.STATUS_IDLE
    }, isEditing: function () {
        return this.get("editing") === !0
    }, isCurrentUser: function () {
        return this.get("user_id") === SL.current_user.get("id")
    }, clone: function () {
        return new SL.models.collab.DeckUser(JSON.parse(JSON.stringify(this.data)))
    }, save: function (t) {
        var e = {user: {}};
        return t ? t.forEach(function (t) {
            e.user[t] = this.get(t)
        }.bind(this)) : e.user = this.toJSON(), $.ajax({
            url: SL.config.AJAX_DECKUSER_UPDATE(SL.current_deck.get("id"), this.get("user_id")),
            type: "PUT",
            data: e
        })
    }, destroy: function () {
        return $.ajax({
            url: SL.config.AJAX_DECKUSER_DELETE(SL.current_deck.get("id"), this.get("user_id")),
            type: "DELETE"
        })
    }
}), SL.models.collab.DeckUser.ROLE_OWNER = "owner", SL.models.collab.DeckUser.ROLE_ADMIN = "admin", SL.models.collab.DeckUser.ROLE_EDITOR = "editor", SL.models.collab.DeckUser.ROLE_VIEWER = "viewer", SL.models.collab.DeckUser.STATUS_DISCONNECTED = "disconnected", SL.models.collab.DeckUser.STATUS_VIEWING = "viewing", SL.models.collab.DeckUser.STATUS_IDLE = "idle", SL("models").Customer = SL.models.Model.extend({
    init: function (t) {
        this._super(t)
    }, isTrial: function () {
        return "trialing" === this.get("subscription.status")
    }, hasActiveSubscription: function () {
        return this.has("subscription") && !this.get("subscription.cancel_at_period_end")
    }, hasCoupon: function () {
        return this.has("subscription") && this.has("subscription.coupon_code")
    }, getNextInvoiceDate: function () {
        return this.get("next_charge")
    }, getNextInvoiceSum: function () {
        return (parseFloat(this.get("next_charge_amount")) / 100).toFixed(2)
    }, clone: function () {
        return new SL.models.Customer(JSON.parse(JSON.stringify(this.data)))
    }
}), SL("models").Deck = SL.models.Model.extend({
    init: function (t) {
        this.data = t || {}, $.extend(this, this.data), this.user = new SL.models.User(this.data.user), this.user_settings = new SL.models.UserSettings(this.data.user.settings)
    }, isPro: function () {
        return this.data.user ? !!this.data.user.pro : !1
    }, isVisibilityAll: function () {
        return this.get("visibility") === SL.models.Deck.VISIBILITY_ALL
    }, isVisibilitySelf: function () {
        return this.get("visibility") === SL.models.Deck.VISIBILITY_SELF
    }, isVisibilityTeam: function () {
        return this.get("visibility") === SL.models.Deck.VISIBILITY_TEAM
    }, belongsTo: function (t) {
        return this.get("user.id") === t.get("id")
    }, getURL: function (t) {
        t = $.extend({protocol: document.location.protocol, token: null, view: null}, t);
        var e = this.get("user.username"), i = this.get("slug") || this.get("id"), n = t.protocol + "//" + document.location.host + SL.routes.DECK(e, i);
        return t.view && (n += "/" + t.view), t.token && (n += "?token=" + t.token.get("token")), n
    }, clone: function () {
        return new SL.models.Deck(JSON.parse(JSON.stringify(this.data)))
    }
}), SL("models").Deck.VISIBILITY_SELF = "self", SL("models").Deck.VISIBILITY_TEAM = "team", SL("models").Deck.VISIBILITY_ALL = "all", SL("models").MediaTag = SL.models.Model.extend({
    init: function (t, e) {
        this._super(t), this.crud = $.extend({
            update: SL.config.AJAX_MEDIA_TAG_UPDATE,
            "delete": SL.config.AJAX_MEDIA_TAG_DELETE
        }, e)
    }, createFilter: function () {
        var t = this;
        return function (e) {
            return t.hasMedia(e)
        }
    }, hasMedia: function (t) {
        return -1 !== this.data.medias.indexOf(t.get("id"))
    }, addMedia: function (t) {
        this.hasMedia(t) || this.data.medias.push(t.get("id"))
    }, removeMedia: function (t) {
        for (var e = t.get("id"), i = 0; i < this.data.medias.length; i++)this.data.medias[i] === e && (this.data.medias.splice(i, 1), i--)
    }, clone: function () {
        return new SL.models.MediaTag(JSON.parse(JSON.stringify(this.data)))
    }, save: function (t) {
        var e = {tag: {}};
        return t ? t.forEach(function (t) {
            e.tag[t] = this.get(t)
        }.bind(this)) : e.tag = this.toJSON(), $.ajax({url: this.crud.update(this.get("id")), type: "PUT", data: e})
    }, destroy: function () {
        return $.ajax({url: this.crud["delete"](this.get("id")), type: "DELETE"})
    }
}), SL("models").Media = SL.models.Model.extend({
    uploadStatus: "", uploadFile: null, init: function (t, e, i, n) {
        this._super(t), this.crud = $.extend({
            create: SL.config.AJAX_MEDIA_CREATE,
            update: SL.config.AJAX_MEDIA_UPDATE,
            "delete": SL.config.AJAX_MEDIA_DELETE
        }, e), i ? (this.uploadStatus = SL.models.Media.STATUS_UPLOAD_WAITING, this.uploadFile = i, this.uploadFilename = n) : this.uploadStatus = SL.models.Media.STATUS_UPLOADED, this.uploadStarted = new signals.Signal, this.uploadProgressed = new signals.Signal, this.uploadCompleted = new signals.Signal, this.uploadFailed = new signals.Signal
    }, upload: function () {
        /\.svg$/i.test(this.uploadFile.name) && window.FileReader ? (SL.analytics.trackEditor("Media: SVG upload started"), this.reader = new window.FileReader, this.reader.addEventListener("abort", this.uploadValidated.bind(this)), this.reader.addEventListener("error", this.uploadValidated.bind(this)), this.reader.addEventListener("load", function (t) {
            var e = t.target.result;
            e && e.length && (e = e.replace(/\<(\?xml|(\!DOCTYPE[^\>\[]+(\[[^\]]+)?))+[^>]+\>/g, ""));
            var i = $("<div>" + e + "</div>").find("svg").get(0);
            if (i) {
                $(i).parent().find("*").contents().each(function () {
                    8 === this.nodeType && $(this).remove()
                }), $(i).find("style, script").remove(), $(i).removeAttr("content"), $(i).find("[unicode]").each(function () {
                    this.setAttribute("unicode", SL.util.escapeHTMLEntities(this.getAttribute("unicode")))
                });
                var n = i.getAttribute("width"), s = i.getAttribute("height"), o = i.hasAttribute("xmlns"), a = i.hasAttribute("viewBox");
                if (hasWidthAndHeight = n && s, o || i.setAttribute("xmlns", "http://www.w3.org/2000/svg"), hasWidthAndHeight && (/[^\d]/g.test(n) || /[^\d]/g.test(s)) && (i.setAttribute("width", parseFloat(n)), i.setAttribute("height", parseFloat(s))), !a && hasWidthAndHeight && (i.setAttribute("viewBox", [0, 0, i.getAttribute("width"), i.getAttribute("height")].join(" ")), a = !0), !hasWidthAndHeight && a) {
                    var r = i.getAttribute("viewBox").split(" ");
                    4 === r.length && (i.setAttribute("width", r[2]), i.setAttribute("height", r[3]), hasWidthAndHeight = !0)
                }
                if (a && hasWidthAndHeight) {
                    var l = '<?xml version="1.0"?>\n' + i.parentNode.innerHTML;
                    this.uploadFilename = this.uploadFile.name || "image.svg", this.uploadFile = new Blob([l], {type: "image/svg+xml"}), this.uploadValidated()
                } else this.uploadStatus = SL.models.Media.STATUS_UPLOAD_FAILED, this.uploadFailed.dispatch("SVG error: missing viewBox or width/height"), SL.analytics.trackEditor("Media: SVG upload error", "missing viewBox or w/h")
            } else this.uploadStatus = SL.models.Media.STATUS_UPLOAD_FAILED, this.uploadFailed.dispatch("Invalid SVG: missing &lt;svg&gt; element"), SL.analytics.trackEditor("Media: SVG upload error", "missing svg element");
            this.reader = null
        }.bind(this)), this.reader.readAsText(this.uploadFile, "UTF-8")) : this.uploadValidated()
    }, uploadValidated: function () {
        return this.uploader ? !1 : (this.uploader = new SL.helpers.FileUploader({
            file: this.uploadFile,
            filename: this.uploadFilename,
            service: this.crud.create,
            timeout: 6e4
        }), this.uploader.progressed.add(this.onUploadProgress.bind(this)), this.uploader.succeeded.add(this.onUploadSuccess.bind(this)), this.uploader.failed.add(this.onUploadError.bind(this)), this.uploader.upload(), this.uploadStatus = SL.models.Media.STATUS_UPLOADING, void this.uploadStarted.dispatch())
    }, onUploadProgress: function (t) {
        this.uploadProgressed.dispatch(t)
    }, onUploadSuccess: function (t) {
        this.uploader.destroy(), this.uploader = null;
        for (var e in t)this.set(e, t[e]);
        this.uploadStatus = SL.models.Media.STATUS_UPLOADED, this.uploadCompleted.dispatch()
    }, onUploadError: function () {
        this.uploader.destroy(), this.uploader = null, this.uploadStatus = SL.models.Media.STATUS_UPLOAD_FAILED, this.uploadFailed.dispatch()
    }, isWaitingToUpload: function () {
        return this.uploadStatus === SL.models.Media.STATUS_UPLOAD_WAITING
    }, isUploading: function () {
        return this.uploadStatus === SL.models.Media.STATUS_UPLOADING
    }, isUploaded: function () {
        return this.uploadStatus === SL.models.Media.STATUS_UPLOADED
    }, isUploadFailed: function () {
        return this.uploadStatus === SL.models.Media.STATUS_UPLOAD_FAILED
    }, isImage: function () {
        return /^image\//.test(this.get("content_type"))
    }, isSVG: function () {
        return /^image\/svg/.test(this.get("content_type"))
    }, isVideo: function () {
        return /^video\//.test(this.get("content_type"))
    }, clone: function () {
        return new SL.models.Media(JSON.parse(JSON.stringify(this.data)))
    }, save: function (t) {
        var e = {media: {}};
        return t ? t.forEach(function (t) {
            e.media[t] = this.get(t)
        }.bind(this)) : e.media = this.toJSON(), $.ajax({url: this.crud.update(this.get("id")), type: "PUT", data: e})
    }, destroy: function () {
        return this.uploadFile = null, this.uploadStarted && this.uploadStarted.dispose(), this.uploadProgressed && this.uploadProgressed.dispose(), this.uploadCompleted && this.uploadCompleted.dispose(), this.uploadFailed && this.uploadFailed.dispose(), this.uploader && (this.uploader.destroy(), this.uploader = null), $.ajax({
            url: this.crud["delete"](this.get("id")),
            type: "DELETE"
        })
    }
}), SL.models.Media.STATUS_UPLOAD_WAITING = "waiting", SL.models.Media.STATUS_UPLOADING = "uploading", SL.models.Media.STATUS_UPLOADED = "uploaded", SL.models.Media.STATUS_UPLOAD_FAILED = "upload-failed", SL.models.Media.IMAGE = {
    id: "image",
    filter: function (t) {
        return t.isImage()
    }
}, SL.models.Media.SVG = {
    id: "svg", filter: function (t) {
        return t.isSVG()
    }
}, SL.models.Media.VIDEO = {
    id: "video", filter: function (t) {
        return t.isVideo()
    }
}, SL("models").Plan = SL.models.Model.extend({
    init: function (t) {
        this._super(t)
    }, isMonthly: function () {
        return this.get("account_type") === SL.models.Plan.ACCOUNT_TYPE_PRO_7 || this.get("account_type") === SL.models.Plan.ACCOUNT_TYPE_TEAM_14
    }, isYearly: function () {
        return this.get("account_type") === SL.models.Plan.ACCOUNT_TYPE_PRO_7_YEARLY || this.get("account_type") === SL.models.Plan.ACCOUNT_TYPE_TEAM_14_YEARLY
    }, getDollarCost: function () {
        switch (this.get("account_type")) {
            case SL.models.Plan.ACCOUNT_TYPE_PRO_7:
                return 7;
            case SL.models.Plan.ACCOUNT_TYPE_PRO_7_YEARLY:
                return 70;
            case SL.models.Plan.ACCOUNT_TYPE_TEAM_14:
                return 14;
            case SL.models.Plan.ACCOUNT_TYPE_TEAM_14_YEARLY:
                return 140
        }
        return 0
    }, getDollarCostPerCycle: function () {
        switch (this.get("account_type")) {
            case SL.models.Plan.ACCOUNT_TYPE_PRO_7:
                return "$7/month";
            case SL.models.Plan.ACCOUNT_TYPE_PRO_7_YEARLY:
                return "$70/year";
            case SL.models.Plan.ACCOUNT_TYPE_TEAM_14:
                return "$14/month";
            case SL.models.Plan.ACCOUNT_TYPE_TEAM_14_YEARLY:
                return "$140/year"
        }
        return null
    }, clone: function () {
        return new SL.models.Plan(JSON.parse(JSON.stringify(this.data)))
    }
}), SL.models.Plan.ACCOUNT_TYPE_PRO_7 = "pro7", SL.models.Plan.ACCOUNT_TYPE_PRO_7_YEARLY = "pro7yearly", SL.models.Plan.ACCOUNT_TYPE_TEAM_14 = "team14", SL.models.Plan.ACCOUNT_TYPE_TEAM_14_YEARLY = "team14yearly", SL.models.Plan.ACCOUNT_COST_PER_CYCLE_PRO_7 = 7, SL.models.Plan.ACCOUNT_COST_PER_CYCLE_PRO_7_YEARLY = 70, SL.models.Plan.ACCOUNT_COST_PER_CYCLE_TEAM_14 = 14, SL.models.Plan.ACCOUNT_COST_PER_CYCLE_TEAM_14_YEARLY = 140, SL("models").Team = SL.models.Model.extend({
    init: function (t) {
        if (this._super(t), "object" == typeof this.data.themes)for (var e = 0, i = this.data.themes.length; i > e; e++)this.data.themes[e] = new SL.models.Theme(this.data.themes[e]);
        this.set("themes", new SL.collections.Collection(this.data.themes))
    }, hasThemes: function () {
        var t = this.get("themes");
        return t && t.size() > 0
    }, getDefaultTheme: function () {
        return this.get("themes").getByProperties({id: this.get("default_theme_id")})
    }, getPlan: function () {
        var t = this.get("account_type");
        return t ? new SL.models.Plan({account_type: t}) : null
    }, isManuallyUpgraded: function () {
        return !!this.get("manually_upgraded")
    }, save: function (t) {
        var e = {team: {}};
        return t ? t.forEach(function (t) {
            e.team[t] = this.get(t)
        }.bind(this)) : e.team = this.toJSON(), $.ajax({url: SL.config.AJAX_UPDATE_TEAM, type: "PUT", data: e})
    }, clone: function () {
        return new SL.models.Team(JSON.parse(JSON.stringify(this.data)))
    }
}), SL("models").Template = SL.models.Model.extend({
    init: function (t) {
        this._super(t)
    }, isAvailableForTheme: function (t) {
        return t.hasSlideTemplate(this.get("id")) || this.isAvailableForAllThemes()
    }, isAvailableForAllThemes: function () {
        var t = this.get("id");
        return !SL.current_user.getThemes().some(function (e) {
            return e.hasSlideTemplate(t)
        })
    }
}), SL("models").ThemeSnippet = SL.models.Model.extend({
    init: function (t) {
        this._super(t), this.has("title") || this.set("title", ""), this.has("template") || this.set("template", "")
    }, templatize: function (t) {
        var e = this.get("template");
        return e && (e = e.split(SL.models.ThemeSnippet.TEMPLATE_SELECTION_TAG).join(""), t.forEach(function (t) {
            e = e.replace(t.string, t.value || t.defaultValue)
        })), e
    }, getTemplateVariables: function () {
        var t = this.get("template");
        if (t) {
            t = t.split(SL.models.ThemeSnippet.TEMPLATE_SELECTION_TAG).join("");
            var e = t.match(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_REGEX);
            if (e)return e = e.map(function (t) {
                var e = t.split(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_DIVIDER), i = {
                    string: t,
                    label: e[0] || "",
                    defaultValue: e[1] || ""
                };
                return i.label = i.label.trim(), i.defaultValue = i.defaultValue.trim(), i.label = i.label.replace(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_OPENER, ""), i.label = i.label.replace(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_CLOSER, ""), i.defaultValue = i.defaultValue.replace(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_OPENER, ""), i.defaultValue = i.defaultValue.replace(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_CLOSER, ""), i
            })
        }
        return []
    }, templateHasVariables: function () {
        return this.getTemplateVariables().length > 0
    }, templateHasSelection: function () {
        var t = this.get("template");
        return t ? t.indexOf(SL.models.ThemeSnippet.TEMPLATE_SELECTION_TAG) > -1 : !1
    }, isEmpty: function () {
        return !this.get("title") && !this.get("template")
    }
}), SL.models.ThemeSnippet.TEMPLATE_VARIABLE_OPENER = "{{", SL.models.ThemeSnippet.TEMPLATE_VARIABLE_CLOSER = "}}", SL.models.ThemeSnippet.TEMPLATE_VARIABLE_DIVIDER = "::", SL.models.ThemeSnippet.TEMPLATE_VARIABLE_REGEX = /\{\{.*?\}\}/gi, SL.models.ThemeSnippet.TEMPLATE_SELECTION_TAG = "{{selection}}", SL("models").Theme = SL.models.Model.extend({
    init: function (t) {
        this._super(t), this.formatData(), this.loading = !1
    }, load: function (t) {
        return this.loading = !0, t = "string" == typeof t ? t : SL.config.AJAX_THEMES_READ(this.get("id")), $.ajax({
            type: "GET",
            url: t,
            context: this
        }).done(function (t) {
            $.extend(this.data, t), this.formatData()
        }).always(function () {
            this.loading = !1
        })
    }, formatData: function () {
        this.has("name") || this.set("name", "Untitled"), this.has("font") || this.set("font", SL.config.DEFAULT_THEME_FONT), this.has("color") || this.set("color", SL.config.DEFAULT_THEME_COLOR), this.has("transition") || this.set("transition", SL.config.DEFAULT_THEME_TRANSITION), this.has("background_transition") || this.set("background_transition", SL.config.DEFAULT_THEME_BACKGROUND_TRANSITION), this.data.slide_template_ids instanceof SL.collections.Collection || this.set("slide_template_ids", new SL.collections.Collection(this.data.slide_template_ids)), this.data.snippets instanceof SL.collections.Collection || ("string" == typeof this.data.snippets && this.data.snippets.length > 0 && (this.data.snippets = JSON.parse(this.data.snippets)), this.set("snippets", new SL.collections.Collection(this.data.snippets, SL.models.ThemeSnippet))), this.data.palette instanceof Array || ("string" == typeof this.data.palette && this.data.palette.length > 0 ? (this.data.palette = this.data.palette.split(","), this.data.palette = this.data.palette.map(function (t) {
            return t.trim()
        })) : this.data.palette = [])
    }, hasSlideTemplate: function (t) {
        return this.get("slide_template_ids").contains(t)
    }, addSlideTemplate: function (t) {
        var e = this.get("slide_template_ids");
        return t.forEach(function (t) {
            e.contains(t) || e.push(t)
        }), $.ajax({
            type: "POST",
            url: SL.config.AJAX_THEME_ADD_SLIDE_TEMPLATE(this.get("id")),
            context: this,
            data: {slide_template_ids: t}
        })
    }, removeSlideTemplate: function (t) {
        var e = this.get("slide_template_ids");
        return t.forEach(function (t) {
            e.remove(t)
        }), $.ajax({
            type: "DELETE",
            url: SL.config.AJAX_THEME_REMOVE_SLIDE_TEMPLATE(this.get("id")),
            context: this,
            data: {slide_template_ids: t}
        })
    }, hasThumbnail: function () {
        return !!this.get("thumbnail_url")
    }, hasJavaScript: function () {
        return !!this.get("js")
    }, hasPalette: function () {
        return this.get("palette").length > 0
    }, isFontDeprecated: function () {
        var t = this.get("font");
        return SL.config.THEME_FONTS.some(function (e) {
            return e.id === t && e.deprecated === !0
        })
    }, isTransitionDeprecated: function () {
        var t = this.get("transition");
        return SL.config.THEME_TRANSITIONS.some(function (e) {
            return e.id === t && e.deprecated === !0
        })
    }, isBackgroundTransitionDeprecated: function () {
        var t = this.get("background_transition");
        return SL.config.THEME_BACKGROUND_TRANSITIONS.some(function (e) {
            return e.id === t && e.deprecated === !0
        })
    }, isLoading: function () {
        return this.loading
    }, clone: function () {
        return new SL.models.Theme(JSON.parse(JSON.stringify(this.toJSON())))
    }, toJSON: function () {
        return {
            id: this.get("id"),
            name: this.get("name"),
            center: this.get("center"),
            rolling_links: this.get("rolling_links"),
            font: this.get("font"),
            color: this.get("color"),
            transition: this.get("transition"),
            background_transition: this.get("background_transition"),
            html: this.get("html"),
            less: this.get("less"),
            css: this.get("css"),
            js: this.get("js"),
            snippets: this.has("snippets") ? JSON.stringify(this.get("snippets").toJSON()) : null,
            palette: this.has("palette") ? this.get("palette").join(",") : null
        }
    }
}), SL("models").Theme.fromDeck = function (t) {
    return new SL.models.Theme({
        id: t.theme_id,
        name: "",
        center: t.center,
        rolling_links: t.rolling_links,
        font: t.theme_font,
        color: t.theme_color,
        transition: t.transition,
        background_transition: t.background_transition,
        snippets: "",
        palette: []
    })
}, SL("models").UserMembership = SL.models.Model.extend({
    init: function (t) {
        this._super(t)
    }, isAdmin: function () {
        return this.get("role") === SL.models.UserMembership.ROLE_ADMIN
    }, isOwner: function () {
        return this.get("role") === SL.models.UserMembership.ROLE_OWNER
    }, clone: function () {
        return new SL.models.UserMembership(JSON.parse(JSON.stringify(this.data)))
    }
}), SL.models.UserMembership.ROLE_OWNER = "owner", SL.models.UserMembership.ROLE_ADMIN = "admin", SL.models.UserMembership.ROLE_MEMBER = "member", SL("models").UserSettings = SL.models.Model.extend({
    init: function (t) {
        this._super(t), this.has("present_controls") || this.set("present_controls", SL.config.PRESENT_CONTROLS_DEFAULT), this.has("present_upsizing") || this.set("present_upsizing", SL.config.PRESENT_UPSIZING_DEFAULT)
    }, save: function (t) {
        var e = {user_settings: {}};
        return t ? t.forEach(function (t) {
            e.user_settings[t] = this.get(t)
        }.bind(this)) : e.user_settings = this.toJSON(), $.ajax({
            url: SL.config.AJAX_UPDATE_USER_SETTINGS,
            type: "PUT",
            data: e
        })
    }, clone: function () {
        return new SL.models.UserSettings(JSON.parse(JSON.stringify(this.data)))
    }
}), SL("models").User = Class.extend({
    init: function (t) {
        this.data = t || {}, $.extend(this, this.data), this.settings = new SL.models.UserSettings(this.data.settings), this.data.membership && (this.membership = new SL.models.UserMembership(this.data.membership))
    }, isPro: function () {
        return !!this.pro
    }, isEnterprise: function () {
        return !!this.enterprise
    }, isEnterpriseManager: function () {
        return this.hasMembership() && (this.membership.isAdmin() || this.membership.isOwner())
    }, hasMembership: function () {
        return !!this.membership
    }, isMemberOfCurrentTeam: function () {
        return SL.current_team && SL.current_team.get("id") === this.get("team_id") ? !0 : !1
    }, isManuallyUpgraded: function () {
        return !!this.manually_upgraded
    }, get: function (t) {
        return this[t]
    }, set: function (t, e) {
        this[t] = e
    }, has: function (t) {
        var e = this.get(t);
        return !!e || e === !1 || 0 === e
    }, hasThemes: function () {
        return SL.current_team ? SL.current_team.hasThemes() : void 0
    }, getThemes: function () {
        return SL.current_team ? SL.current_team.get("themes") : new SL.collections.Collection
    }, hasDefaultTheme: function () {
        return !!this.getDefaultTheme()
    }, getDefaultTheme: function () {
        var t = this.getThemes();
        return t.getByProperties(SL.current_team ? {id: SL.current_team.get("default_theme_id")} : {id: this.default_theme_id})
    }, getProfileURL: function () {
        return "/" + this.username
    }, getProfilePictureURL: function () {
        return this.thumbnail_url
    }, getNameOrSlug: function () {
        return this.name || this.username
    }
}), SL("data").templates = {
    NEW_DECK_TEMPLATE: {html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 250px;">', '<div class="sl-block-content" data-placeholder-tag="h1" data-placeholder-text="Title Text">', "<h1>Title Text</h1>", "</div>", "</div>", "</section>"].join("")},
    DEFAULT_TEMPLATES: [{html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 270px;">', '<div class="sl-block-content" data-placeholder-tag="h1" data-placeholder-text="Title Text">', "<h1>Title Text</h1>", "</div>", "</div>", "</section>"].join("")}, {html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 190px;">', '<div class="sl-block-content" data-placeholder-tag="h1" data-placeholder-text="Title Text">', "<h1>Title Text</h1>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 255px;" data-layout-method="belowPreviousBlock">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Subtitle">', "<h2>Subtitle</h2>", "</div>", "</div>", "</section>"].join("")}, {html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 190px;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text">', "<h2>Title Text</h2>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 264px;" data-layout-method="belowPreviousBlock">', '<div class="sl-block-content">', "<ul>", "<li>Bullet One</li>", "<li>Bullet Two</li>", "<li>Bullet Three</li>", "</ul>", "</div>", "</div>", "</section>"].join("")}, {html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 410px; left: 49px; top: 106px; height: auto;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text" style="text-align: left;">', "<h2>Title Text</h2>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 410px; left: 49px; top: 200px; height: auto;">', '<div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis." style="text-align: left;">', "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis.</p>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 410px; left: 499px; top: 106px; height: auto;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text" style="text-align: left;">', "<h2>Title Text</h2>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 410px; left: 499px; top: 200px; height: auto;">', '<div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis." style="text-align: left;">', "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis.</p>", "</div>", "</div>", "</section>"].join("")}, {html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 900px; left: 30px; top: 58px; height: auto;">', '<div class="sl-block-content" data-placeholder-tag="h1" style="font-size: 200%; text-align: left;">', "<h1>One<br>Two<br>Three</h1>", "</div>", "</div>", "</section>"].join("")}, {html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 79px; top: 50px;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text">', "<h2>Title Text</h2>", "</div>", "</div>", '<div class="sl-block" data-block-type="image" style="width: 700px; height: 475px; left: 129px; top: 144px;">', '<div class="sl-block-content">', '<div class="editing-ui sl-block-overlay sl-block-placeholder"></div>', "</div>", "</div>", "</section>"].join("")}, {html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 430px; left: 23px; top: 87px;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text" style="text-align: left;">', "<h2>Title Text</h2>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 430px; left: 23px; top: 161px;" data-layout-method="belowPreviousBlock">', '<div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec metus justo. Aliquam erat volutpat." style="z-index: 13; text-align: left;">', "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec metus justo. Aliquam erat volutpat.</p>", "</div>", "</div>", '<div class="sl-block" data-block-type="image" style="width: 454px; height: 641px; left: 479px; top: 29px;">', '<div class="sl-block-content">', '<div class="editing-ui sl-block-overlay sl-block-placeholder"></div>', "</div>", "</div>", "</section>"].join("")}, {html: ["<section>", '<div class="sl-block" data-block-type="image" style="width: 700px; height: 475px; left: 130px; top: 65px;">', '<div class="sl-block-content">', '<div class="editing-ui sl-block-overlay sl-block-placeholder"></div>', "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 575px;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text">', "<h2>Title Text</h2>", "</div>", "</div>", "</section>"].join("")}],
    LAYOUT_METHODS: {
        belowPreviousBlock: function (t, e) {
            var i = e.prev().get(0);
            i && e.css("top", i.offsetTop + i.offsetHeight)
        }
    },
    getNewDeckTemplate: function () {
        return new SL.models.Template(SL.data.templates.NEW_DECK_TEMPLATE)
    },
    getDefaultTemplates: function () {
        return new SL.collections.Collection(SL.data.templates.DEFAULT_TEMPLATES, SL.models.Template)
    },
    userTemplatesLoaded: !1,
    userTemplatesLoading: !1,
    userTemplatesCallbacks: [],
    getUserTemplates: function (t) {
        t = t || function () {
            }, SL.data.templates.userTemplatesLoading === !1 && SL.data.templates.userTemplatesLoaded === !1 ? (SL.data.templates.userTemplatesLoading = !0, SL.data.templates.userTemplatesCallbacks.push(t), $.ajax({
            type: "GET",
            url: SL.config.AJAX_SLIDE_TEMPLATES_LIST,
            context: this
        }).done(function (t) {
            SL.data.templates.userTemplates = new SL.collections.Collection(t.results, SL.models.Template), SL.data.templates.userTemplatesLoaded = !0, SL.data.templates.userTemplatesLoading = !1, SL.data.templates.userTemplatesCallbacks.forEach(function (t) {
                t.call(null, SL.data.templates.userTemplates)
            }), SL.data.templates.userTemplatesCallbacks.length = 0
        }).fail(function () {
            SL.data.templates.userTemplatesLoading = !1, SL.notify(SL.locale.get("TEMPLATE_LOAD_ERROR"), "negative")
        })) : SL.data.templates.userTemplatesLoading ? SL.data.templates.userTemplatesCallbacks.push(t) : t.call(null, SL.data.templates.userTemplates)
    },
    teamTemplatesLoaded: !1,
    teamTemplatesLoading: !1,
    teamTemplatesCallbacks: [],
    getTeamTemplates: function (t) {
        SL.current_user.isEnterprise() && (t = t || function () {
            }, SL.data.templates.teamTemplatesLoading === !1 && SL.data.templates.teamTemplatesLoaded === !1 ? (SL.data.templates.teamTemplatesLoading = !0, SL.data.templates.teamTemplatesCallbacks.push(t), $.ajax({
            type: "GET",
            url: SL.config.AJAX_TEAM_SLIDE_TEMPLATES_LIST,
            context: this
        }).done(function (t) {
            SL.data.templates.teamTemplates = new SL.collections.Collection(t.results, SL.models.Template), SL.data.templates.teamTemplatesLoaded = !0, SL.data.templates.teamTemplatesLoading = !1, SL.data.templates.teamTemplatesCallbacks.forEach(function (t) {
                t.call(null, SL.data.templates.teamTemplates)
            }), SL.data.templates.teamTemplatesCallbacks.length = 0
        }).fail(function () {
            SL.data.templates.teamTemplatesLoading = !1, SL.notify(SL.locale.get("TEMPLATE_LOAD_ERROR"), "negative")
        })) : SL.data.templates.teamTemplatesLoading ? SL.data.templates.teamTemplatesCallbacks.push(t) : t.call(null, SL.data.templates.teamTemplates))
    },
    layoutTemplate: function (t, e) {
        t.find(".sl-block").each(function (i, n) {
            n = $(n);
            var s = n.attr("data-layout-method");
            s && "function" == typeof SL.data.templates.LAYOUT_METHODS[s] && (e || n.removeAttr("data-layout-method"), SL.data.templates.LAYOUT_METHODS[s](t, n))
        })
    },
    templatize: function (t, e) {
        t = $(t), e = $.extend({placeholderText: !1, zIndex: !0}, e);
        var i = SL.editor.controllers.Serialize.getSlideAsString(t, {
            templatize: !0,
            inner: !0
        }), n = $("<section>" + i + "</section>");
        return n.children().each(function (t, i) {
            i = $(i), i.css({"min-width": "", "min-height": ""});
            var n = i.find(".sl-block-content");
            if (e.placeholderText && "text" === i.attr("data-block-type") && 1 === n.children().length) {
                var s = $(n.children()[0]);
                s.is("h1, h2") ? (s.html("Title Text"), n.attr("data-placeholder-text", "Title Text")) : s.is("p") && n.attr("data-placeholder-text", s.text().trim())
            }
            e.zIndex === !1 && n.css("z-index", "")
        }), ["class", "data-autoslide", "data-transition", "data-transition-speed", "data-background", "data-background-color", "data-background-image", "data-background-size"].forEach(function (e) {
            t.attr(e) && n.attr(e, t.attr(e))
        }), n.removeClass("past present future"), n.prop("outerHTML").trim()
    },
    generateFullSizeImageBlock: function (t, e, i, n, s) {
        var o = Math.min(n / e, s / i), a = e * o, r = i * o, l = Math.round((SL.config.SLIDE_WIDTH - a) / 2), c = Math.round((SL.config.SLIDE_HEIGHT - r) / 2);
        return ['<div class="sl-block" data-block-type="image" style="width: ' + a + "px; height: " + r + "px; left: " + l + "px; top: " + c + 'px;">', '<div class="sl-block-content">', '<img src="' + t + '" style="" data-natural-width="' + e + '" data-natural-height="' + i + '"/>', "</div>", "</div>"].join("")
    }
}, SL("data").tokens = {
    get: function (t, e) {
        e = e || {}, this._addCallbacks(t, e.success, e.error), "object" == typeof this.cache[t] ? this._triggerSuccessCallback(t, this.cache[t]) : "loading" !== this.cache[t] && (this.cache[t] = "loading", $.ajax({
            type: "GET",
            context: this,
            url: SL.config.AJAX_ACCESS_TOKENS_LIST(t)
        }).done(function (e) {
            var i = new SL.collections.Collection(e.results, SL.models.AccessToken);
            this.cache[t] = i, this._triggerSuccessCallback(t, i)
        }).fail(function (e) {
            delete this.cache[t], this._triggerErrorCallback(t, e.status)
        }))
    }, create: function (t) {
        return new Promise(function (e, i) {
            SL.data.tokens.get(t, {
                success: function (n) {
                    $.ajax({
                        type: "POST",
                        context: this,
                        url: SL.config.AJAX_ACCESS_TOKENS_CREATE(t),
                        data: {access_token: {name: n.getUniqueName("Link", "name", !0)}}
                    }).done(function (t) {
                        n.create(t).then(e, i)
                    }).fail(i)
                }.bind(this), error: function () {
                    console.warn("Failed to load token collection for deck " + t), i()
                }.bind(this)
            })
        }.bind(this))
    }, cache: {}, callbacks: {}, _addCallbacks: function (t, e, i) {
        this.callbacks[t] || (this.callbacks[t] = {
            success: [],
            error: []
        }), e && this.callbacks[t].success.push(e), i && this.callbacks[t].error.push(i)
    }, _triggerSuccessCallback: function (t, e) {
        var i = this.callbacks[t];
        if (i) {
            for (; i.success.length;)i.success.pop().call(null, e);
            i.success = [], i.error = []
        }
    }, _triggerErrorCallback: function (t, e) {
        var i = this.callbacks[t];
        if (i) {
            for (; i.error.length;)i.error.pop().call(null, e);
            i.success = [], i.error = []
        }
    }
}, SL.util = {
    noop: function () {
    }, getQuery: function () {
        var t = {};
        return location.search.replace(/[A-Z0-9\-]+?=([\w%\-]*)/gi, function (e) {
            t[e.split("=").shift()] = unescape(e.split("=").pop())
        }), t
    }, getMetaKeyName: function () {
        return SL.util.device.isMac() ? "&#8984" : "CTRL"
    }, escapeHTMLEntities: function (t) {
        return t = t || "", t = t.split("<").join("&lt;"), t = t.split(">").join("&gt;")
    }, unescapeHTMLEntities: function (t) {
        return (t || "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&cent;/g, "\xa2").replace(/&pound;/g, "\xa3").replace(/&yen;/g, "\xa5").replace(/&euro;/g, "\u20ac").replace(/&copy;/g, "\xa9").replace(/&reg;/g, "\xae").replace(/&nbsp;/g, " ")
    }, toArray: function (t) {
        for (var e = [], i = 0, n = t.length; n > i; i++)e.push(t[i]);
        return e
    }, skipCSSTransitions: function (t, e) {
        t = $(t ? t : "html");
        var i = typeof t.get(0);
        ("undefined" === i || "number" === i) && console.warn("Bad target for skipCSSTransitions."), t.addClass("no-transition"), setTimeout(function () {
            t.removeClass("no-transition")
        }, e || 1)
    }, setupReveal: function (t) {
        if ("undefined" != typeof Reveal) {
            var e = {
                controls: !0,
                progress: !0,
                history: !1,
                mouseWheel: !1,
                margin: .05,
                autoSlideStoppable: !0,
                dependencies: [{
                    src: SL.config.ASSET_URLS["reveal-plugins/markdown/marked.js"], condition: function () {
                        return !!document.querySelector(".reveal [data-markdown]")
                    }
                }, {
                    src: SL.config.ASSET_URLS["reveal-plugins/markdown/markdown.js"], condition: function () {
                        return !!document.querySelector(".reveal [data-markdown]")
                    }
                }, {
                    src: SL.config.ASSET_URLS["reveal-plugins/highlight/highlight.js"],
                    async: !0,
                    condition: function () {
                        return !!document.querySelector(".reveal pre code")
                    },
                    callback: function () {
                        hljs.initHighlighting(), hljs.initHighlightingOnLoad()
                    }
                }]
            };
            if (SLConfig && SLConfig.deck && (e.autoSlide = SLConfig.deck.auto_slide_interval || 0, e.rollingLinks = SLConfig.deck.rolling_links, e.center = SLConfig.deck.center, e.loop = SLConfig.deck.should_loop, e.rtl = SLConfig.deck.rtl, e.showNotes = SLConfig.deck.share_notes, e.slideNumber = SLConfig.deck.slide_number, e.transition = SLConfig.deck.transition || "default", e.backgroundTransition = SLConfig.deck.background_transition), $.extend(e, t), SL.util.deck.injectNotes(), Reveal.initialize(e), Reveal.addEventListener("ready", function () {
                    window.STATUS = window.STATUS || {}, window.STATUS.REVEAL_IS_READY = !0, $("html").addClass("reveal-is-ready")
                }), t && t.openLinksInTabs && this.openLinksInTabs($(".reveal .slides")), t && t.trackEvents) {
                var i = [];
                Reveal.addEventListener("slidechanged", function () {
                    var t = Reveal.getProgress();
                    t >= .5 && !i[0] && (i[0] = !0, SL.analytics.trackPresenting("Presentation progress: 50%")), t >= 1 && !i[1] && (i[1] = !0, SL.analytics.trackPresenting("Presentation progress: 100%")), SL.analytics.trackCurrentSlide()
                })
            }
        }
    }, openLinksInTabs: function (t) {
        t && t.find("a").each(function () {
            var t = $(this), e = t.attr("href");
            /^#/gi.test(e) === !0 || this.hasAttribute("download") ? t.removeAttr("target") : /http|www/gi.test(e) ? t.attr("target", "_blank") : t.attr("target", "_top")
        })
    }, openPopupWindow: function (t, e, i, n) {
        var s = window.innerWidth / 2 - i / 2, o = window.innerHeight / 2 - n / 2;
        "number" == typeof window.screenX && (s += window.screenX, o += window.screenY);
        var a = window.open(t, e, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + i + ", height=" + n + ", top=" + o + ", left=" + s);
        return a.moveTo(s, o), a
    }, prefixSelectorsInStyle: function (t, e) {
        var i = [];
        SL.util.toArray(t.sheet.cssRules).forEach(function (t) {
            if (1 === t.type && t.selectorText && t.cssText) {
                var n = t.cssText;
                n = n.replace(t.selectorText, ""), n = n.trim(), n = n.slice(1, n.length - 1), n = n.trim(), n = n.split(";").map(function (t) {
                    return t = t.trim(), "" === t ? "" : "\n	" + t
                }).join(";");
                var s = t.selectorText.split(",").map(function (t) {
                    return t = t.trim(), 0 === t.indexOf(e) ? t : e + t
                }).join(", ");
                i.push(s + " {" + n + "\n}")
            } else 7 === t.type && t.cssText && i.push(t.cssText)
        }), t.innerHTML = "\n" + i.join("\n\n") + "\n"
    }, layoutReveal: function (t, e) {
        if (clearInterval(this.revealLayoutInterval), clearTimeout(this.revealLayoutTimeout), 1 === arguments.length)this.revealLayoutTimeout = setTimeout(Reveal.layout, t); else {
            if (2 !== arguments.length)throw"Illegal arguments, expected (duration[, fps])";
            this.revealLayoutInterval = setInterval(Reveal.layout, e), this.revealLayoutTimeout = setTimeout(function () {
                clearInterval(this.revealLayoutInterval)
            }.bind(this), t)
        }
    }, getRevealSlideBounds: function (t, e) {
        t = t || SL.editor.controllers.Markup.getCurrentSlide();
        var i = t.offset(), n = Reveal.getScale(), s = i.left * n, o = i.top * n;
        if (e) {
            var a = $(".projector").offset();
            a && (s -= a.left, o -= a.top)
        }
        return {x: s, y: o, width: t.outerWidth() * n, height: t.outerHeight() * n}
    }, getRevealSlidesBounds: function (t) {
        var e = $(".reveal .slides"), i = e.offset(), n = Reveal.getScale(), s = i.left * n, o = i.top * n;
        if (t) {
            var a = $(".projector").offset();
            a && (s -= a.left, o -= a.top)
        }
        return {x: s, y: o, width: e.outerWidth() * n, height: e.outerHeight() * n}
    }, getRevealElementOffset: function (t, e) {
        t = $(t);
        var i = {x: 0, y: 0};
        if (t.parents("section").length)for (; t.length && !t.is("section");)i.x += t.get(0).offsetLeft, i.y += t.get(0).offsetTop, e && (i.x -= parseInt(t.css("margin-left"), 10), i.y -= parseInt(t.css("margin-top"), 10)), t = $(t.get(0).offsetParent);
        return i
    }, getRevealElementGlobalOffset: function (t) {
        var e = $(t), i = e.closest(".reveal"), n = {x: 0, y: 0};
        if (e.length && i.length) {
            var s = Reveal.getConfig(), o = Reveal.getScale(), a = i.get(0).getBoundingClientRect(), r = {
                x: a.left + a.width / 2,
                y: a.top + a.height / 2
            }, l = s.width * o, c = s.height * o;
            n.x = r.x - l / 2, n.y = r.y - c / 2;
            var d = e.closest(".slides section");
            d.length && (n.y -= d.scrollTop() * o);
            var h = SL.util.getRevealElementOffset(e);
            n.x += h.x * o, n.y += h.y * o
        }
        return n
    }, getRevealCounterScale: function () {
        return window.Reveal ? 2 - Reveal.getScale() : 1
    }, globalToRevealCoordinate: function (t, e) {
        var i = SL.util.getRevealSlideBounds(), n = SL.util.getRevealCounterScale();
        return {x: (t - i.x) * n, y: (e - i.y) * n}
    }, globalToProjectorCoordinate: function (t, e) {
        var i = {x: t, y: e}, n = $(".projector").offset();
        return n && (i.x -= n.left, i.y -= n.top), i
    }, hideAddressBar: function () {
        if (SL.util.device.IS_PHONE && !/crios/gi.test(navigator.userAgent)) {
            var t = function () {
                setTimeout(function () {
                    window.scrollTo(0, 1)
                }, 10)
            };
            $(window).on("orientationchange", function () {
                t()
            }), t()
        }
    }, callback: function () {
        "function" == typeof arguments[0] && arguments[0].apply(null, [].slice.call(arguments, 1))
    }, getPlaceholderImage: function (t) {
        var e = "";
        return t && "function" == typeof window.btoa && (e = window.btoa(Math.random().toString()).replace(/=/g, "")), "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" + e
    }, isTypingEvent: function (t) {
        return $(t.target).is('input:not([type="file"]), textarea, [contenteditable]')
    }, isTyping: function () {
        var t = document.activeElement && "inherit" !== document.activeElement.contentEditable, e = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName);
        return t || e
    }
}, SL.util.user = {
    isLoggedIn: function () {
        return "object" == typeof SLConfig && "object" == typeof SLConfig.current_user
    }, isPro: function () {
        return SL.util.user.isLoggedIn() ? SLConfig.current_user.pro : null
    }, isEnterprise: function () {
        return SL.util.user.isLoggedIn() ? SLConfig.current_user.enterprise : null
    }, canUseCustomCSS: function () {
        return this.isLoggedIn() && this.isPro()
    }
}, SL.util.device = {
    HAS_TOUCH: !!("ontouchstart" in window),
    IS_PHONE: /iphone|ipod|android|windows\sphone/gi.test(navigator.userAgent),
    IS_TABLET: /ipad/gi.test(navigator.userAgent),
    isMac: function () {
        return /Mac/.test(navigator.platform)
    },
    isWindows: function () {
        return /Win/g.test(navigator.platform)
    },
    isLinux: function () {
        return /Linux/g.test(navigator.platform)
    },
    isIE: function () {
        return /MSIE\s[0-9]/gi.test(navigator.userAgent) || /Trident\/7.0;(.*)rv:\d\d/.test(navigator.userAgent)
    },
    isChrome: function () {
        return /chrome/gi.test(navigator.userAgent)
    },
    isSafari: function () {
        return /safari/gi.test(navigator.userAgent) && !SL.util.device.isChrome()
    },
    isSafariDesktop: function () {
        return SL.util.device.isSafari() && !SL.util.device.isChrome() && !SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET
    },
    isOpera: function () {
        return !!window.opera
    },
    isFirefox: function () {
        return /firefox\/\d+\.?\d+/gi.test(navigator.userAgent)
    },
    isPhantomJS: function () {
        return /PhantomJS/gi.test(navigator.userAgent)
    },
    supportedByEditor: function () {
        return Modernizr.history && Modernizr.csstransforms && !SL.util.device.isOpera()
    },
    getScrollBarWidth: function () {
        var t = $("<div>").css({
            width: "100px",
            height: "100px",
            overflow: "scroll",
            position: "absolute",
            top: "-9999px"
        });
        t.appendTo(document.body);
        var e = t.prop("offsetWidth") - t.prop("clientWidth");
        return t.remove(), e
    }
}, SL.util.trig = {
    distanceBetween: function (t, e) {
        var i = t.x - e.x, n = t.y - e.y;
        return Math.sqrt(i * i + n * n)
    }, intersection: function (t, e) {
        return {
            width: Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)),
            height: Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y))
        }
    }, intersects: function (t, e, i) {
        "undefined" == typeof i && (i = 0);
        var n = SL.util.trig.intersection(t, e);
        return n.width > t.width * i && n.height > t.height * i
    }, isPointWithinRect: function (t, e, i) {
        return t > i.x && t < i.x + i.width && e > i.y && e < i.y + i.height
    }, findLineIntersection: function (t, e, i, n) {
        var s = {x: e.x - t.x, y: e.y - t.y}, o = {
            x: n.x - i.x,
            y: n.y - i.y
        }, a = (-s.y * (t.x - i.x) + s.x * (t.y - i.y)) / (-o.x * s.y + s.x * o.y), r = (o.x * (t.y - i.y) - o.y * (t.x - i.x)) / (-o.x * s.y + s.x * o.y);
        return a >= 0 && 1 >= a && r >= 0 && 1 >= r ? {x: t.x + r * s.x, y: t.y + r * s.y} : null
    }
}, SL.util.string = {
    URL_REGEX: /((https?\:\/\/)|(www\.)|(\/\/))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i,
    SCRIPT_TAG_REGEX: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    uniqueIDCount: 0,
    uniqueID: function (t) {
        return SL.util.string.uniqueIDCount += 1, (t || "") + SL.util.string.uniqueIDCount + "-" + Date.now()
    },
    slug: function (t) {
        return "string" == typeof t ? (t = SL.util.string.trim(t), t = t.toLowerCase(), t = t.replace(/-/g, " "), t = t.replace(/[^\w\s]/g, ""), t = t.replace(/\s{2,}/g, " "), t = t.replace(/\s/g, "-")) : ""
    },
    trim: function (t) {
        return SL.util.string.trimRight(SL.util.string.trimLeft(t))
    },
    trimLeft: function (t) {
        return "string" == typeof t ? t.replace(/^\s+/, "") : ""
    },
    trimRight: function (t) {
        return "string" == typeof t ? t.replace(/\s+$/, "") : ""
    },
    linkify: function (t) {
        return t && (t = t.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi, function (t) {
            var e = t;
            return e.match("^https?://") || (e = "http://" + e), '<a href="' + e + '">' + t + "</a>"
        })), t
    },
    pluralize: function (t, e, i) {
        return i ? t + e : t
    },
    getCustomClassesFromLESS: function (t) {
        var e = (t || "").match(/\/\/=[a-z0-9-_ \t]{2,}(?=\n)?/gi);
        return e ? e.map(function (t) {
            return t = t.replace("//=", ""), t = t.trim(), t = t.toLowerCase(), t = t.replace(/\s/g, "-")
        }) : []
    }
}, SL.util.math = {
    limitDecimals: function (t, e) {
        var i = Math.pow(10, e);
        return Math.round(t * i) / i
    }
}, SL.util.validate = {
    name: function () {
        return []
    }, slug: function (t) {
        t = t || "";
        var e = [];
        return t.length < 2 && e.push("At least 2 characters"), /\s/gi.test(t) && e.push("No spaces please"), /^[\w-_]+$/gi.test(t) || e.push("Can only contain: A-Z, 0-9, - and _"), e
    }, username: function (t) {
        return SL.util.validate.slug(t)
    }, team_slug: function (t) {
        return SL.util.validate.slug(t)
    }, password: function (t) {
        t = t || "";
        var e = [];
        return t.length < 6 && e.push("At least 6 characters"), e
    }, email: function (t) {
        t = t || "";
        var e = [];
        return /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$/gi.test(t) || e.push("Please enter a valid email"), e
    }, twitterhandle: function (t) {
        t = t || "";
        var e = [];
        return t.length > 15 && e.push("15 characters max"), /\s/gi.test(t) && e.push("No spaces please"), /^[\w-_]+$/gi.test(t) || e.push("Can only contain: A-Z, 0-9 and _"), e
    }, url: function (t) {
        t = t || "";
        var e = [];
        return t.length < 4 && e.push("Please enter a valid URL"), /\s/gi.test(t) && e.push("No spaces please"), e
    }, decktitle: function (t) {
        t = t || "";
        var e = [];
        return 0 === t.length && e.push("Can not be empty"), e
    }, deckslug: function (t) {
        t = t || "";
        var e = [];
        return 0 === t.length && e.push("Can not be empty"), e
    }, google_analytics_id: function (t) {
        t = t || "";
        var e = [];
        return /\bUA-\d{4,20}-\d{1,10}\b/gi.test(t) || e.push("Please enter a valid ID"), e
    }, none: function () {
        return []
    }
}, SL.util.dom = {
    scrollIntoViewIfNeeded: function (t) {
        t && ("function" == typeof t.scrollIntoViewIfNeeded ? t.scrollIntoViewIfNeeded.apply(t, [].slice.call(arguments, 1)) : "function" == typeof t.scrollIntoView && t.scrollIntoView())
    }, preventTouchOverflowScrolling: function (t) {
        t = $(t);
        var e, i, n;
        t.get(0).addEventListener("touchstart", function (t) {
            e = this.scrollTop > 0, i = this.scrollTop < this.scrollHeight - this.clientHeight, n = t.pageY
        }), t.get(0).addEventListener("touchmove", function (t) {
            var s = t.pageY > n, o = !s;
            n = t.pageY, s && e || o && i ? t.stopPropagation() : t.preventDefault()
        })
    }, insertCSRF: function (t, e) {
        "undefined" == typeof e && (e = $('meta[name="csrf-token"]').attr("content")), e && (t.find('input[name="authenticity_token"]').remove(), t.append('<input name="authenticity_token" type="hidden" value="' + e + '" />'))
    }, calculateStyle: function (t) {
        window.getComputedStyle($(t).get(0)).opacity
    }
}, SL.util.html = {
    indent: function (t) {
        t = t.replace(/<br>/gi, "<br/>"), t = t.replace(/(<img("[^"]*"|[^>])+)/gi, "$1/");
        var e = vkbeautify.xml(t);
        return e = e.replace(/<pre>[\n\r\t\s]+<code/gi, "<pre><code"), e = e.replace(/<\/code>[\n\r\t\s]+<\/pre>/gi, "</code></pre>")
    },
    ATTR_SRC_NORMAL: "src",
    ATTR_SRC_SILENCED: "data-silenced-src",
    ATTR_SRC_NORMAL_REGEX: " src=",
    ATTR_SRC_SILENCED_REGEX: " data-silenced-src=",
    muteSources: function (t) {
        return (t || "").replace(new RegExp(SL.util.html.ATTR_SRC_NORMAL_REGEX, "gi"), SL.util.html.ATTR_SRC_SILENCED_REGEX)
    },
    unmuteSources: function (t) {
        return (t || "").replace(new RegExp(SL.util.html.ATTR_SRC_SILENCED_REGEX, "gi"), SL.util.html.ATTR_SRC_NORMAL_REGEX)
    },
    trimCode: function (t) {
        $(t).find("pre code").each(function () {
            var t = $(this).parent("pre"), e = t.html(), i = $.trim(e);
            e !== i && t.html(i)
        })
    },
    removeAttributes: function (t, e) {
        t = $(t);
        var i = $.map(t.get(0).attributes, function (t) {
            return t.name
        });
        "function" == typeof e && (i = i.filter(e)), $.each(i, function (e, i) {
            t.removeAttr(i)
        })
    },
    removeClasses: function (t, e) {
        if (t = $(t), "function" == typeof e) {
            var i = (t.attr("class") || "").split(" ").filter(e);
            t.removeClass(i.join(" "))
        } else t.attr("class", "")
    },
    findScriptTags: function (t) {
        var e = document.createElement("div");
        e.innerHTML = t;
        var i = SL.util.toArray(e.getElementsByTagName("script"));
        return i.map(function (t) {
            return t.outerHTML
        })
    },
    removeScriptTags: function (t) {
        var e = document.createElement("div");
        e.innerHTML = t;
        var i = SL.util.toArray(e.getElementsByTagName("script"));
        return i.forEach(function (t) {
            t.parentNode.removeChild(t)
        }), e.innerHTML
    },
    createSpinner: function (t) {
        return t = $.extend({
            lines: 12,
            radius: 8,
            length: 6,
            width: 3,
            color: "#fff",
            zIndex: "auto",
            left: "0",
            top: "0",
            className: ""
        }, t), new Spinner(t)
    },
    generateSpinners: function () {
        $(".spinner").each(function (t, e) {
            if (e.hasAttribute("data-spinner-state") === !1) {
                e.setAttribute("data-spinner-state", "spinning");
                var i = {};
                e.hasAttribute("data-spinner-color") && (i.color = e.getAttribute("data-spinner-color")), e.hasAttribute("data-spinner-lines") && (i.lines = parseInt(e.getAttribute("data-spinner-lines"), 10)), e.hasAttribute("data-spinner-width") && (i.width = parseInt(e.getAttribute("data-spinner-width"), 10)), e.hasAttribute("data-spinner-radius") && (i.radius = parseInt(e.getAttribute("data-spinner-radius"), 10)), e.hasAttribute("data-spinner-length") && (i.length = parseInt(e.getAttribute("data-spinner-length"), 10));
                var n = SL.util.html.createSpinner(i);
                n.spin(e)
            }
        })
    },
    createDeckThumbnail: function (t) {
        var t = {
            DECK_URL: t.user.username + "/" + t.slug,
            DECK_VIEWS: "number" == typeof t.view_count ? t.view_count : "N/A",
            DECK_THUMB_URL: t.thumbnail_url || SL.config.DEFAULT_DECK_THUMBNAIL,
            USER_URL: "/" + t.user.username,
            USER_NAME: t.user.name || t.user.username,
            USER_THUMB_URL: t.user.thumbnail_url || SL.config.DEFAULT_USER_THUMBNAIL
        }, e = SL.config.DECK_THUMBNAIL_TEMPLATE;
        for (var i in t)e = e.replace("{{" + i + "}}", t[i]);
        return $(e)
    }
}, SL.util.deck = {
    idCounter: 1, sortInjectedStyles: function () {
        var t = $("head");
        $("#theme-css-output").appendTo(t), $("#user-css-output").appendTo(t)
    }, afterSlidesChanged: function () {
        this.generateIdentifiers(), this.generateSlideNumbers()
    }, generateIdentifiers: function (t) {
        $(t || ".reveal .slides section").each(function () {
            (this.hasAttribute("data-id") === !1 || 0 === this.getAttribute("data-id").length) && this.setAttribute("data-id", CryptoJS.MD5(["slide", SL.current_user.get("id"), SL.current_deck.get("id"), Date.now(), SL.util.deck.idCounter++].join("-")).toString())
        }), this.generateSlideNumbers()
    }, generateSlideNumbers: function () {
        this.slideNumberMap = {}, $(".reveal .slides>section[data-id]").each(function (t, e) {
            t += 1, e = $(e), e.hasClass("stack") ? e.find(">section[data-id]").each(function (e, i) {
                e += 1, i = $(i), this.slideNumberMap[i.attr("data-id")] = t + (e > 1 ? "." + e : "")
            }.bind(this)) : this.slideNumberMap[e.attr("data-id")] = t
        }.bind(this))
    }, getSlideNumber: function (t) {
        return this.slideNumberMap || this.generateSlideNumbers(), this.slideNumberMap[this.getSlideID(t)]
    }, getSlideID: function (t) {
        return "string" == typeof t ? t : t && "function" == typeof t.getAttribute ? t.getAttribute("data-id") : t && "function" == typeof t.attr ? t.attr("data-id") : void 0
    }, getSlideIndicesFromIdentifier: function (t) {
        var e = $('.reveal .slides section[data-id="' + t + '"]');
        return e.length ? Reveal.getIndices(e.get(0)) : null
    }, injectNotes: function () {
        SLConfig.deck && SLConfig.deck.notes && [].forEach.call(document.querySelectorAll(".reveal .slides section"), function (t) {
            var e = SLConfig.deck.notes[t.getAttribute("data-id")];
            e && "string" == typeof e && t.setAttribute("data-notes", e)
        })
    }, getBackgroundColor: function () {
        var t = $(".reveal-viewport");
        if (t.length) {
            var e = t.css("background-color");
            if (window.Reveal && window.Reveal.isReady()) {
                var i = window.Reveal.getIndices(), n = window.Reveal.getSlideBackground(i.h, i.v);
                if (n) {
                    var s = n.style.backgroundColor;
                    s && window.tinycolor(s).getAlpha() > 0 && (e = s)
                }
            }
            if (e)return e
        }
        return "#ffffff"
    }, getBackgroundContrast: function () {
        return SL.util.color.getContrast(SL.util.deck.getBackgroundColor())
    }, getBackgroundBrightness: function () {
        return SL.util.color.getBrightness(SL.util.deck.getBackgroundColor())
    }, navigateToSlide: function (t) {
        if (t) {
            var e = Reveal.getIndices(t);
            Reveal.slide(e.h, e.v)
        }
    }, replaceHTML: function (t) {
        SL.util.skipCSSTransitions($(".reveal"), 1);
        var e = Reveal.getState();
        $(".reveal .slides").get(0).innerHTML = t, Reveal.setState(e), Reveal.sync(), this.afterSlidesChanged()
    }
}, SL.util.color = {
    getContrast: function (t) {
        var e = window.tinycolor(t).toRgb(), i = (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
        return i / 255
    }, getBrightness: function (t) {
        var e = window.tinycolor(t).toRgb(), i = e.r / 255 * .3 + e.g / 255 * .59 + (e.b / 255 + .11);
        return i / 2
    }, getImageColor: function (t, e) {
        return new Promise(function (i, n) {
            var s = document.createElement("img");
            s.addEventListener("load", function () {
                var t, o = document.createElement("canvas"), a = o.getContext && o.getContext("2d"), r = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0
                };
                a || n();
                var l = o.height = s.naturalHeight || s.offsetHeight || s.height, c = o.width = s.naturalWidth || s.offsetWidth || s.width;
                a.drawImage(s, 0, 0);
                try {
                    t = a.getImageData(0, 0, c, l)
                } catch (d) {
                    n()
                }
                var h = 4, u = t.data.length, p = 0;
                if ("number" != typeof e && (e = 8, "number" == typeof u))for (; u / e > 5e4;)e += 8;
                for (; (h += 4 * e) < u;)++p, r.r += t.data[h], r.g += t.data[h + 1], r.b += t.data[h + 2], r.a += t.data[h + 3];
                r.r = ~~(r.r / p), r.g = ~~(r.g / p), r.b = ~~(r.b / p), r.a = ~~(r.a / p), r.a = r.a / 255, i(r)
            }), s.addEventListener("error", function () {
                n()
            }), s.setAttribute("crossorigin", "anonymous"), s.setAttribute("src", t)
        })
    }
}, SL.util.anim = {
    collapseListItem: function (t, e, i) {
        t = $(t), t.addClass("no-transition"), t.css({overflow: "hidden"}), t.animate({
            opacity: 0,
            height: 0,
            minHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0
        }, {duration: i || 500, complete: e})
    }
}, SL.util.social = {
    getFacebookShareLink: function (t, e, i, n) {
        return "http://www.facebook.com/sharer.php?s=100&p[title]=" + encodeURIComponent(e) + "&p[summary]=" + encodeURIComponent(i) + "&p[url]=" + t + "&p[images][0]=" + n
    }, getTwitterShareLink: function (t, e) {
        return "http://twitter.com/share?text=" + encodeURIComponent(e) + "&url=" + encodeURIComponent(t) + "&via=slides"
    }, getGoogleShareLink: function (t) {
        return "https://plus.google.com/share?url=" + encodeURIComponent(t)
    }
}, SL.util.selection = {
    clear: function () {
        window.getSelection && (window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges())
    }, moveCursorToEnd: function (t) {
        if (t) {
            t.focus();
            var e = document.createRange();
            e.selectNodeContents(t), e.collapse(!1), selection = window.getSelection(), selection.removeAllRanges(), selection.addRange(e)
        }
    }, selectText: function (t) {
        var e, i;
        document.body.createTextRange ? (e = document.body.createTextRange(), e.moveToElementText(t), e.select()) : window.getSelection && (i = window.getSelection(), e = document.createRange(), e.selectNodeContents(t), i.removeAllRanges(), i.addRange(e))
    }, getSelectedElement: function () {
        var t = window.getSelection();
        return t && t.anchorNode ? t.anchorNode.parentNode : null
    }, getSelectedTags: function () {
        var t = SL.util.selection.getSelectedElement(), e = [];
        if (t)for (; t;)e.push(t.nodeName.toLowerCase()), t = t.parentNode;
        return e
    }, getSelectedHTML: function () {
        var t;
        if (document.selection && document.selection.createRange)return t = document.selection.createRange(), t.htmlText;
        if (window.getSelection) {
            var e = window.getSelection();
            if (e.rangeCount > 0) {
                t = e.getRangeAt(0);
                var i = t.cloneContents(), n = document.createElement("div");
                return n.appendChild(i), n.innerHTML
            }
        }
        return ""
    }
}, "undefined" != typeof window.Spinner && "undefined" != typeof SL.util && SL.util.html.generateSpinners(), SL.activity = {
    init: function () {
        this.initialized || (this.initialized = !0, this.history = [Date.now()], this.listeners = [], this.bind(), setInterval(this.checkListeners.bind(this), 500))
    }, bind: function () {
        this.onUserInput = $.throttle(this.onUserInput.bind(this), 100), document.addEventListener("mousedown", this.onUserInput), document.addEventListener("mousemove", this.onUserInput), document.addEventListener("touchstart", this.onUserInput), document.addEventListener("touchmove", this.onUserInput), document.addEventListener("keydown", this.onUserInput), window.addEventListener("scroll", this.onUserInput), window.addEventListener("mousewheel", this.onUserInput)
    }, checkListeners: function () {
        this.listeners.forEach(function (t) {
            this.hasBeenInactiveFor(t.duration) ? t.active === !0 && (t.active = !1, "function" == typeof t.inactiveCallback && t.inactiveCallback()) : t.active === !1 && (t.active = !0, "function" == typeof t.activeCallback && t.activeCallback())
        }, this)
    }, hasBeenInactiveFor: function (t) {
        return Date.now() - this.history[0] > t
    }, register: function (t, e, i) {
        this.initialized || this.init(), this.listeners.push({
            active: !this.hasBeenInactiveFor(t),
            duration: t,
            activeCallback: e,
            inactiveCallback: i
        })
    }, onUserInput: function () {
        this.history.unshift(Date.now()), this.history.splice(1e3)
    }
}, SL.analytics = {
    CATEGORY_OTHER: "other",
    CATEGORY_EDITOR: "editor",
    CATEGORY_THEMING: "theming",
    CATEGORY_PRESENTING: "presenting",
    CATEGORY_COLLABORATION: "collaboration",
    _track: function (t, e, i) {
        "undefined" != typeof window.ga && ga("send", "event", t, e, i)
    },
    _trackPageView: function (t, e) {
        e = e || document.title, "undefined" != typeof window.ga && ga(function () {
            for (var i = ga.getAll(), n = 0; n < i.length; ++n)i[n].send("pageview", {page: t, title: e})
        })
    },
    track: function (t, e) {
        this._track(SL.analytics.CATEGORY_OTHER, t, e)
    },
    trackEditor: function (t, e) {
        this._track(SL.analytics.CATEGORY_EDITOR, t, e)
    },
    trackTheming: function (t, e) {
        this._track(SL.analytics.CATEGORY_THEMING, t, e)
    },
    trackPresenting: function (t, e) {
        this._track(SL.analytics.CATEGORY_PRESENTING, t, e)
    },
    trackCollaboration: function (t, e) {
        this._track(SL.analytics.CATEGORY_COLLABORATION, t, e)
    },
    trackCurrentSlide: function (t) {
        if (window.Reveal) {
            var e = window.Reveal.getIndices(), t = window.location.pathname + "/" + e.h;
            "number" == typeof e.v && e.v > 0 && (t += "/" + e.v);
            var i = $(Reveal.getCurrentSlide()).find("h1, h2, h3").first().text().trim();
            (!i || i.length < 2) && (i = "Untitled"), this._trackPageView(t, i)
        }
    }
}, SL.config = {
    SLIDE_WIDTH: 960,
    SLIDE_HEIGHT: 700,
    LOGIN_STATUS_INTERVAL: 6e4,
    UNSAVED_CHANGES_INTERVAL: 1500,
    AUTOSAVE_INTERVAL: 4e3,
    DECK_SAVE_TIMEOUT: 25e3,
    DECK_TITLE_MAXLENGTH: 200,
    MEDIA_LABEL_MAXLENGTH: 200,
    SPEAKER_NOTES_MAXLENGTH: 1e4,
    COLLABORATION_IDLE_TIMEOUT: 24e4,
    COLLABORATION_RESET_WRITING_TIMEOUT: 15e3,
    COLLABORATION_SEND_WRITING_INTERVAL: 5e3,
    COLLABORATION_COMMENT_MAXLENGTH: 1e3,
    MAX_IMAGE_UPLOAD_SIZE: 1e4,
    MAX_IMPORT_UPLOAD_SIZE: 1e5,
    IMPORT_SOCKET_TIMEOUT: 24e4,
    PRESENT_CONTROLS_DEFAULT: !0,
    PRESENT_UPSIZING_DEFAULT: !0,
    PRESENT_UPSIZING_MAX_SCALE: 10,
    DEFAULT_SLIDE_TRANSITION_DURATION: 800,
    DEFAULT_THEME_COLOR: "white-blue",
    DEFAULT_THEME_FONT: "montserrat",
    DEFAULT_THEME_TRANSITION: "slide",
    DEFAULT_THEME_BACKGROUND_TRANSITION: "slide",
    AUTO_SLIDE_OPTIONS: [2, 4, 6, 8, 10, 15, 20, 30, 40],
    RESERVED_SLIDE_CLASSES: ["past", "present", "future", "disabled", "overflowing"],
    FRAGMENT_STYLES: [{id: "", title: "Fade in"}, {id: "fade-down", title: "Fade in from above"}, {
        id: "fade-up",
        title: "Fade in from below"
    }, {id: "fade-right", title: "Fade in from left"}, {id: "fade-left", title: "Fade in from right"}, {
        id: "fade-out",
        title: "Fade out"
    }, {id: "current-visible", title: "Fade in then out"}],
    THEME_COLORS: [{id: "white-blue"}, {id: "sand-blue"}, {id: "beige-brown"}, {id: "silver-green"}, {id: "silver-blue"}, {id: "sky-blue"}, {id: "blue-yellow"}, {id: "cobalt-orange"}, {id: "asphalt-orange"}, {id: "forest-yellow"}, {id: "mint-beige"}, {id: "sea-yellow"}, {id: "yellow-black"}, {id: "coral-blue"}, {id: "grey-blue"}, {id: "black-blue"}, {id: "black-mint"}, {id: "black-orange"}],
    THEME_FONTS: [{id: "montserrat", title: "Montserrat"}, {id: "league", title: "League"}, {
        id: "opensans",
        title: "Open Sans"
    }, {id: "josefine", title: "Josefine"}, {id: "palatino", title: "Palatino"}, {
        id: "news",
        title: "News"
    }, {id: "helvetica", title: "Helvetica"}, {id: "merriweather", title: "Merriweather"}, {
        id: "asul",
        title: "Asul"
    }, {id: "sketch", title: "Sketch"}, {id: "quicksand", title: "Quicksand"}, {
        id: "overpass",
        title: "Overpass v1",
        deprecated: !0
    }, {id: "overpass2", title: "Overpass"}],
    THEME_TRANSITIONS: [{id: "slide", title: "Slide"}, {id: "linear", title: "Linear", deprecated: !0}, {
        id: "fade",
        title: "Fade"
    }, {id: "none", title: "None"}, {id: "default", title: "Convex"}, {id: "concave", title: "Concave"}, {
        id: "zoom",
        title: "Zoom"
    }, {id: "cube", title: "Cube", deprecated: !0}, {id: "page", title: "Page", deprecated: !0}],
    THEME_BACKGROUND_TRANSITIONS: [{id: "slide", title: "Slide"}, {id: "fade", title: "Fade"}, {
        id: "none",
        title: "None"
    }, {id: "convex", title: "Convex"}, {id: "concave", title: "Concave"}, {id: "zoom", title: "Zoom"}],
    BLOCKS: new SL.collections.Collection([{type: "text", factory: "Text", label: "Text", icon: "type"}, {
        type: "image",
        factory: "Image",
        label: "Image",
        icon: "picture"
    }, {type: "shape", factory: "Shape", label: "Shape", icon: "shapes"}, {
        type: "line",
        factory: "Line",
        label: "Line",
        icon: ""
    }, {type: "iframe", factory: "Iframe", label: "Iframe", icon: "browser"}, {
        type: "table",
        factory: "Table",
        label: "Table",
        icon: "table"
    }, {type: "code", factory: "Code", label: "Code", icon: "file-css"}, {
        type: "math",
        factory: "Math",
        label: "Math",
        icon: "divide"
    }, {type: "snippet", factory: "Snippet", label: "snippet", icon: "file-xml", hidden: !0}]),
    DEFAULT_DECK_THUMBNAIL: "https://s3.amazonaws.com/static.slid.es/images/default-deck-thumbnail.png",
    DEFAULT_USER_THUMBNAIL: "https://s3.amazonaws.com/static.slid.es/images/default-profile-picture.png",
    DECK_THUMBNAIL_TEMPLATE: ['<li class="deck-thumbnail">', '<div class="deck-image" style="background-image: url({{DECK_THUMB_URL}})">', '<a class="deck-link" href="{{DECK_URL}}"></a>', "</div>", '<footer class="deck-details">', '<a class="author" href="{{USER_URL}}">', '<span class="picture" style="background-image: url({{USER_THUMB_URL}})"></span>', '<span class="name">{{USER_NAME}}</span>', "</a>", '<div class="stats">', '<div>{{DECK_VIEWS}}<span class="icon i-eye"></span></div>', "</div>", "</footer>", "</li>"].join(""),
    AJAX_SEARCH: "/api/v1/search.json",
    AJAX_SEARCH_ORGANIZATION: "/api/v1/team/search.json",
    AJAX_GET_DECK: function (t) {
        return "/api/v1/decks/" + t + ".json"
    },
    AJAX_CREATE_DECK: function () {
        return "/api/v1/decks.json"
    },
    AJAX_UPDATE_DECK: function (t) {
        return "/api/v1/decks/" + t + ".json"
    },
    AJAX_PUBLISH_DECK: function (t) {
        return "/api/v1/decks/" + t + "/publish.json"
    },
    AJAX_GET_DECK_DATA: function (t) {
        return "/api/v1/decks/" + t + "/data.json"
    },
    AJAX_MAKE_DECK_COLLABORATIVE: function (t) {
        return "/api/v1/decks/" + t + "/make_collaborative.json"
    },
    AJAX_GET_DECK_VERSIONS: function (t) {
        return "/api/v1/decks/" + t + "/revisions.json"
    },
    AJAX_PREVIEW_DECK_VERSION: function (t, e, i) {
        return "/" + t + "/" + e + "/preview?revision=" + i
    },
    AJAX_RESTORE_DECK_VERSION: function (t, e) {
        return "/api/v1/decks/" + t + "/revisions/" + e + "/restore.json"
    },
    AJAX_EXPORT_DECK: function (t, e) {
        return "/" + t + "/" + e + "/export"
    },
    AJAX_THUMBNAIL_DECK: function (t) {
        return "/api/v1/decks/" + t + "/thumbnails.json"
    },
    AJAX_FORK_DECK: function (t) {
        return "/api/v1/decks/" + t + "/fork.json"
    },
    AJAX_SHARE_DECK_VIA_EMAIL: function (t) {
        return "/api/v1/decks/" + t + "/deck_shares.json"
    },
    AJAX_KUDO_DECK: function (t) {
        return "/api/v1/decks/" + t + "/kudos/kudo.json"
    },
    AJAX_UNKUDO_DECK: function (t) {
        return "/api/v1/decks/" + t + "/kudos/unkudo.json"
    },
    AJAX_EXPORT_START: function (t) {
        return "/api/v1/decks/" + t + "/exports.json"
    },
    AJAX_EXPORT_LIST: function (t) {
        return "/api/v1/decks/" + t + "/exports.json"
    },
    AJAX_EXPORT_STATUS: function (t, e) {
        return "/api/v1/decks/" + t + "/exports/" + e + ".json"
    },
    AJAX_PDF_IMPORT_NEW: "/api/v1/imports.json",
    AJAX_PDF_IMPORT_UPLOADED: function (t) {
        return "/api/v1/imports/" + t + ".json"
    },
    AJAX_DROPBOX_CONNECT: "/settings/dropbox/authorize",
    AJAX_DROPBOX_DISCONNECT: "https://www.dropbox.com/account/security#apps",
    AJAX_DROPBOX_SYNC_DECK: function (t) {
        return "/api/v1/decks/" + t + "/export.json"
    },
    AJAX_UPDATE_TEAM: "/api/v1/team.json",
    AJAX_LOOKUP_TEAM: "/api/v1/team/lookup.json",
    AJAX_TEAM_MEMBER_SEARCH: "/api/v1/team/users/search.json",
    AJAX_TEAM_MEMBERS_LIST: "/api/v1/team/users.json",
    AJAX_TEAM_MEMBER_CREATE: "/api/v1/team/users.json",
    AJAX_TEAM_MEMBER_UPDATE: function (t) {
        return "/api/v1/team/users/" + t + ".json"
    },
    AJAX_TEAM_MEMBER_DELETE: function (t) {
        return "/api/v1/team/users/" + t + ".json"
    },
    AJAX_TEAM_MEMBER_REACTIVATE: function (t) {
        return "/api/v1/team/users/" + t + "/reactivate.json"
    },
    AJAX_TEAM_MEMBER_DEACTIVATE: function (t) {
        return "/api/v1/team/users/" + t + "/deactivate.json"
    },
    AJAX_TEAM_INVITATIONS_LIST: "/api/v1/team/invitations.json",
    AJAX_TEAM_INVITATIONS_CREATE: "/api/v1/team/invitations.json",
    AJAX_TEAM_INVITATIONS_DELETE: function (t) {
        return "/api/v1/team/invitations/" + t + ".json"
    },
    AJAX_TEAM_INVITATIONS_RESEND: function (t) {
        return "/api/v1/team/invitations/" + t + "/resend.json"
    },
    AJAX_THEMES_LIST: "/api/v1/themes.json",
    AJAX_THEMES_CREATE: "/api/v1/themes.json",
    AJAX_THEMES_READ: function (t) {
        return "/api/v1/themes/" + t + ".json"
    },
    AJAX_THEMES_UPDATE: function (t) {
        return "/api/v1/themes/" + t + ".json"
    },
    AJAX_THEMES_DELETE: function (t) {
        return "/api/v1/themes/" + t + ".json"
    },
    AJAX_DECK_THEME: function (t) {
        return "/api/v1/decks/" + t + "/theme.json"
    },
    AJAX_THEME_ADD_SLIDE_TEMPLATE: function (t) {
        return "/api/v1/themes/" + t + "/add_slide_template.json"
    },
    AJAX_THEME_REMOVE_SLIDE_TEMPLATE: function (t) {
        return "/api/v1/themes/" + t + "/remove_slide_template.json"
    },
    AJAX_ACCESS_TOKENS_LIST: function (t) {
        return "/api/v1/decks/" + t + "/access_tokens.json"
    },
    AJAX_ACCESS_TOKENS_CREATE: function (t) {
        return "/api/v1/decks/" + t + "/access_tokens.json"
    },
    AJAX_ACCESS_TOKENS_UPDATE: function (t, e) {
        return "/api/v1/decks/" + t + "/access_tokens/" + e + ".json"
    },
    AJAX_ACCESS_TOKENS_DELETE: function (t, e) {
        return "/api/v1/decks/" + t + "/access_tokens/" + e + ".json"
    },
    AJAX_ACCESS_TOKENS_PASSWORD_AUTH: function (t) {
        return "/access_tokens/" + t + ".json"
    },
    AJAX_SLIDE_TEMPLATES_LIST: "/api/v1/slide_templates.json",
    AJAX_SLIDE_TEMPLATES_CREATE: "/api/v1/slide_templates.json",
    AJAX_SLIDE_TEMPLATES_UPDATE: function (t) {
        return "/api/v1/slide_templates/" + t + ".json"
    },
    AJAX_SLIDE_TEMPLATES_DELETE: function (t) {
        return "/api/v1/slide_templates/" + t + ".json"
    },
    AJAX_TEAM_SLIDE_TEMPLATES_LIST: "/api/v1/team/slide_templates.json",
    AJAX_TEAM_SLIDE_TEMPLATES_CREATE: "/api/v1/team/slide_templates.json",
    AJAX_TEAM_SLIDE_TEMPLATES_UPDATE: function (t) {
        return "/api/v1/team/slide_templates/" + t + ".json"
    },
    AJAX_TEAM_SLIDE_TEMPLATES_DELETE: function (t) {
        return "/api/v1/team/slide_templates/" + t + ".json"
    },
    AJAX_GET_USER: function (t) {
        return "/api/v1/users/" + t + ".json"
    },
    AJAX_LOOKUP_USER: "/api/v1/users/lookup.json",
    AJAX_SERVICES_USER: "/api/v1/users/services.json",
    AJAX_UPDATE_USER: "/users.json",
    AJAX_GET_USER_SETTINGS: "/api/v1/user_settings.json",
    AJAX_UPDATE_USER_SETTINGS: "/api/v1/user_settings.json",
    AJAX_SUBSCRIPTIONS: "/subscriptions",
    AJAX_SUBSCRIPTIONS_STATUS: "/account/details.json",
    AJAX_SUBSCRIPTIONS_PRINT_RECEIPT: function (t) {
        return "/account/receipts/" + t
    },
    AJAX_TEAMS_CREATE: "/teams.json",
    AJAX_TEAMS_REACTIVATE: "/subscriptions/reactivate.json",
    AJAX_CHECK_STATUS: "/api/v1/status.json",
    AJAX_MEDIA_LIST: "/api/v1/media.json",
    AJAX_MEDIA_CREATE: "/api/v1/media.json",
    AJAX_MEDIA_UPDATE: function (t) {
        return "/api/v1/media/" + t + ".json"
    },
    AJAX_MEDIA_DELETE: function (t) {
        return "/api/v1/media/" + t + ".json"
    },
    AJAX_MEDIA_TAG_LIST: "/api/v1/tags.json",
    AJAX_MEDIA_TAG_CREATE: "/api/v1/tags.json",
    AJAX_MEDIA_TAG_UPDATE: function (t) {
        return "/api/v1/tags/" + t + ".json"
    },
    AJAX_MEDIA_TAG_DELETE: function (t) {
        return "/api/v1/tags/" + t + ".json"
    },
    AJAX_MEDIA_TAG_ADD_MEDIA: function (t) {
        return "/api/v1/tags/" + t + "/add_media.json"
    },
    AJAX_MEDIA_TAG_REMOVE_MEDIA: function (t) {
        return "/api/v1/tags/" + t + "/remove_media.json"
    },
    AJAX_TEAM_MEDIA_LIST: "/api/v1/team/media.json",
    AJAX_TEAM_MEDIA_CREATE: "/api/v1/team/media.json",
    AJAX_TEAM_MEDIA_UPDATE: function (t) {
        return "/api/v1/team/media/" + t + ".json"
    },
    AJAX_TEAM_MEDIA_DELETE: function (t) {
        return "/api/v1/team/media/" + t + ".json"
    },
    AJAX_TEAM_MEDIA_TAG_LIST: "/api/v1/team/tags.json",
    AJAX_TEAM_MEDIA_TAG_CREATE: "/api/v1/team/tags.json",
    AJAX_TEAM_MEDIA_TAG_UPDATE: function (t) {
        return "/api/v1/team/tags/" + t + ".json"
    },
    AJAX_TEAM_MEDIA_TAG_DELETE: function (t) {
        return "/api/v1/team/tags/" + t + ".json"
    },
    AJAX_TEAM_MEDIA_TAG_ADD_MEDIA: function (t) {
        return "/api/v1/team/tags/" + t + "/add_media.json"
    },
    AJAX_TEAM_MEDIA_TAG_REMOVE_MEDIA: function (t) {
        return "/api/v1/team/tags/" + t + "/remove_media.json"
    },
    AJAX_DECKUSER_LIST: function (t) {
        return "/api/v1/decks/" + t + "/users.json"
    },
    AJAX_DECKUSER_READ: function (t, e) {
        return "/api/v1/decks/" + t + "/users/" + e + ".json"
    },
    AJAX_DECKUSER_CREATE: function (t) {
        return "/api/v1/decks/" + t + "/users/invite.json"
    },
    AJAX_DECKUSER_UPDATE: function (t, e) {
        return "/api/v1/decks/" + t + "/users/" + e + ".json"
    },
    AJAX_DECKUSER_DELETE: function (t, e) {
        return "/api/v1/decks/" + t + "/users/" + e + ".json"
    },
    AJAX_DECKUSER_BECOME_EDITOR: function (t, e) {
        return "/api/v1/decks/" + t + "/users/" + e + "/become_editor.json"
    },
    AJAX_DECKUSER_UPDATE_LAST_SEEN_AT: function (t) {
        return "/api/v1/decks/" + t + "/users/update_last_seen_at.json"
    },
    AJAX_COMMENTS_LIST: function (t, e) {
        return "/api/v1/decks/" + t + "/comments.json" + (e ? "?slide_hash=" + e : "")
    },
    AJAX_COMMENTS_CREATE: function (t) {
        return "/api/v1/decks/" + t + "/comments.json"
    },
    AJAX_COMMENTS_UPDATE: function (t, e) {
        return "/api/v1/decks/" + t + "/comments/" + e + ".json"
    },
    AJAX_COMMENTS_DELETE: function (t, e) {
        return "/api/v1/decks/" + t + "/comments/" + e + ".json"
    },
    STREAM_ENGINE_HOST: window.location.protocol + "//stream2.slides.com",
    STREAM_ENGINE_LIVE_NAMESPACE: "live",
    STREAM_ENGINE_EDITOR_NAMESPACE: "editor",
    APP_HOST: "slides.com",
    S3_HOST: "https://s3.amazonaws.com/media-p.slid.es",
    ASSET_URLS: {
        "offline-v2.css": "//assets.slid.es/assets/offline-v2-ca492d04b9e3443dd0405b145c3e57fe.css",
        "homepage-background.jpg": "//assets.slid.es/assets/homepage-background-b002e480a9b1026f07a1a3d066404640.jpg",
        "reveal-plugins/markdown/marked.js": "//assets.slid.es/assets/reveal-plugins/markdown/marked-285d0e546e608bca75e0c8af0d6b44cd.js",
        "reveal-plugins/markdown/markdown.js": "//assets.slid.es/assets/reveal-plugins/markdown/markdown-769f9bfbb5d81257779bf0353cc6ecd4.js",
        "reveal-plugins/highlight/highlight.js": "//assets.slid.es/assets/reveal-plugins/highlight/highlight-9efb98b823ef2e51598faabaa51da5be.js"
    }
}, SL.config.V1 = {
    DEFAULT_THEME_COLOR: "grey-blue",
    DEFAULT_THEME_FONT: "league",
    DEFAULT_THEME_TRANSITION: "linear",
    DEFAULT_THEME_BACKGROUND_TRANSITION: "fade",
    THEME_COLORS: [{id: "grey-blue"}, {id: "black-mint"}, {id: "black-orange"}, {id: "forest-yellow"}, {id: "lila-yellow"}, {id: "asphalt-orange"}, {id: "sky-blue"}, {id: "beige-brown"}, {id: "sand-grey"}, {id: "silver-green"}, {id: "silver-blue"}, {id: "cobalt-orange"}, {id: "white-blue"}, {id: "mint-beige"}, {id: "sea-yellow"}, {id: "coral-blue"}],
    THEME_FONTS: [{id: "league", title: "League"}, {id: "opensans", title: "Open Sans"}, {
        id: "josefine",
        title: "Josefine"
    }, {id: "palatino", title: "Palatino"}, {id: "news", title: "News"}, {
        id: "montserrat",
        title: "Montserrat"
    }, {id: "helvetica", title: "Helvetica"}, {id: "asul", title: "Asul"}, {
        id: "merriweather",
        title: "Merriweather"
    }, {id: "sketch", title: "Sketch"}, {id: "quicksand", title: "Quicksand"}, {
        id: "overpass",
        title: "Overpass v1",
        deprecated: !0
    }, {id: "overpass2", title: "Overpass"}]
}, SL.draganddrop = {
    init: function () {
        this.listeners = new SL.collections.Collection, this.onDragStart = this.onDragStart.bind(this), this.onDragOver = this.onDragOver.bind(this), this.onDragOut = this.onDragOut.bind(this), this.onDrop = this.onDrop.bind(this), this.isListening = !1, this.isInternalDrag = !1
    }, subscribe: function (t) {
        this.listeners.push(t), this.bind()
    }, unsubscribe: function (t) {
        this.listeners.remove(t), this.listeners.isEmpty() && this.unbind()
    }, dispatch: function (t, e) {
        var i = this.listeners.last();
        i && i[t](e)
    }, bind: function () {
        this.isListening === !1 && (this.isListening = !0, $(document.documentElement).on("dragstart", this.onDragStart).on("dragover dragenter", this.onDragOver).on("dragleave", this.onDragOut).on("drop", this.onDrop))
    }, unbind: function () {
        this.isListening === !0 && (this.isListening = !1, $(document.documentElement).off("dragstart", this.onDragStart).off("dragover dragenter", this.onDragOver).off("dragleave", this.onDragOut).off("drop", this.onDrop))
    }, onDragStart: function (t) {
        t.preventDefault(), this.isInternalDrag = !0
    }, onDragOver: function (t) {
        this.isInternalDrag || (t.preventDefault(), this.dispatch("onDragOver", t))
    }, onDragOut: function (t) {
        this.isInternalDrag || (t.preventDefault(), this.dispatch("onDragOut", t))
    }, onDrop: function (t) {
        return this.isInternalDrag ? void 0 : (t.stopPropagation(), t.preventDefault(), this.isInternalDrag = !1, this.dispatch("onDrop", t), !1)
    }
}, SL.fonts = {
    INIT_TIMEOUT: 5e3,
    FONTS_URL: "https://s3.amazonaws.com/static.slid.es/fonts/",
    FAMILIES: {
        montserrat: {id: "montserrat", name: "Montserrat", path: "montserrat/montserrat.css"},
        opensans: {id: "opensans", name: "Open Sans", path: "opensans/opensans.css"},
        lato: {id: "lato", name: "Lato", path: "lato/lato.css"},
        asul: {id: "asul", name: "Asul", path: "asul/asul.css"},
        josefinsans: {id: "josefinsans", name: "Josefin Sans", path: "josefinsans/josefinsans.css"},
        league: {id: "league", name: "League Gothic", path: "league/league_gothic.css"},
        merriweathersans: {
            id: "merriweathersans",
            name: "Merriweather Sans",
            path: "merriweathersans/merriweathersans.css"
        },
        overpass: {id: "overpass", name: "Overpass", path: "overpass/overpass.css"},
        overpass2: {id: "overpass2", name: "Overpass 2", path: "overpass2/overpass2.css"},
        quicksand: {id: "quicksand", name: "Quicksand", path: "quicksand/quicksand.css"},
        cabinsketch: {id: "cabinsketch", name: "Cabin Sketch", path: "cabinsketch/cabinsketch.css"},
        newscycle: {id: "newscycle", name: "News Cycle", path: "newscycle/newscycle.css"},
        oxygen: {id: "oxygen", name: "Oxygen", path: "oxygen/oxygen.css"}
    },
    PACKAGES: {
        asul: ["asul"],
        helvetica: [],
        josefine: ["josefinsans", "lato"],
        league: ["league", "lato"],
        merriweather: ["merriweathersans", "oxygen"],
        news: ["newscycle", "lato"],
        montserrat: ["montserrat", "opensans"],
        opensans: ["opensans"],
        overpass: ["overpass"],
        overpass2: ["overpass2"],
        palatino: [],
        quicksand: ["quicksand", "opensans"],
        sketch: ["cabinsketch", "oxygen"]
    },
    init: function () {
        if (this._isReady = !1, this.ready = new signals.Signal, this.loaded = new signals.Signal, this.debugMode = !!SL.util.getQuery().debug, $("link[data-application-font]").each(function () {
                var t = $(this).attr("data-application-font");
                SL.fonts.FAMILIES[t] && (SL.fonts.FAMILIES[t].loaded = !0)
            }), SLConfig && SLConfig.deck) {
            var t = (SLConfig.deck.theme_font, this.loadDeckFont([SLConfig.deck.theme_font || SL.config.DEFAULT_THEME_FONT], {
                active: this.onWebFontsActive.bind(this),
                inactive: this.onWebFontsInactive.bind(this)
            }));
            t ? this.initTimeout = setTimeout(function () {
                this.debugMode && console.log("SL.fonts", "timed out"), this.finishLoading()
            }.bind(this), SL.fonts.INIT_TIMEOUT) : this.finishLoading()
        } else this.finishLoading()
    },
    load: function (t, e) {
        var i = $.extend({custom: {families: [], urls: []}}, e);
        return t.forEach(function (t) {
            var e = SL.fonts.FAMILIES[t];
            e ? e.loaded || (e.loaded = !0, i.custom.families.push(e.name), i.custom.urls.push(SL.fonts.FONTS_URL + e.path)) : console.warn('Could not find font family with id "' + t + '"')
        }), this.debugMode && console.log("SL.fonts.load", i.custom.families), i.custom.families.length ? (WebFont.load(i), !0) : !1
    },
    loadAll: function () {
        var t = [];
        for (var e in SL.fonts.FAMILIES)t.push(e);
        this.load(t)
    },
    loadDeckFont: function (t, e) {
        var i = SL.fonts.PACKAGES[t];
        return i ? SL.fonts.load(i, e) : !1
    },
    unload: function (t) {
        t.forEach(function (t) {
            var e = SL.fonts.FAMILIES[t];
            e && (e.loaded = !1, $('link[href="' + SL.fonts.FONTS_URL + e.path + '"]').remove())
        })
    },
    finishLoading: function () {
        clearTimeout(this.initTimeout), $("html").addClass("fonts-are-ready"), this._isReady === !1 && (this._isReady = !0, this.ready.dispatch()), this.loaded.dispatch()
    },
    isReady: function () {
        return this._isReady
    },
    onWebFontsActive: function () {
        this.finishLoading()
    },
    onWebFontsInactive: function () {
        this.finishLoading()
    }
}, SL.keyboard = {
    init: function () {
        this.keyupConsumers = new SL.collections.Collection, this.keydownConsumers = new SL.collections.Collection, $(document).on("keydown", this.onDocumentKeyDown.bind(this)), $(document).on("keyup", this.onDocumentKeyUp.bind(this))
    }, keydown: function (t) {
        this.keydownConsumers.push(t)
    }, keyup: function (t) {
        this.keyupConsumers.push(t)
    }, release: function (t) {
        this.keydownConsumers.remove(t), this.keyupConsumers.remove(t)
    }, onDocumentKeyDown: function (t) {
        for (var e, i = this.keydownConsumers.size(), n = !1; e = this.keydownConsumers.at(--i);)if (!e(t)) {
            n = !0;
            break
        }
        return n ? (t.preventDefault(), t.stopImmediatePropagation(), !1) : void 0
    }, onDocumentKeyUp: function (t) {
        for (var e, i = this.keyupConsumers.size(), n = !1; e = this.keyupConsumers.at(--i);)if (!e(t)) {
            n = !0;
            break
        }
        return n ? (t.preventDefault(), t.stopImmediatePropagation(), !1) : void 0
    }
}, SL.locale = {
    GENERIC_ERROR: ["Oops, something went wrong", "We ran into an unexpected error", "Something's wong, can you try that again?"],
    WARN_UNSAVED_CHANGES: "You have unsaved changes, save first?",
    CLOSE: "Close",
    PREVIOUS: "Previous",
    NEXT: "Next",
    DECK_SAVE_SUCCESS: "Saved successfully",
    DECK_SAVE_ERROR: "Failed to save",
    NEW_SLIDE_TITLE: "Title",
    LEAVE_UNSAVED_DECK: "You will lose your unsaved changes.",
    LEAVE_UNSAVED_THEME: "You will lose your unsaved changes.",
    REMOVE_PRO_CONFIRM: "Your account will be downgraded from Pro to the Free plan at the end of the current billing period.",
    REMOVE_PRO_SUCCESS: "Subscription canceled",
    DECK_RESTORE_CONFIRM: "Are you sure you want to revert to this version from {#time}?",
    DECK_DELETE_CONFIRM: 'Are you sure you want to delete "{#title}"?',
    DECK_DELETE_SUCCESS: "Deck deleted",
    DECK_DELETE_ERROR: "Failed to delete",
    DECK_VISIBILITY_CHANGE_SELF: '<div><span class="icon i-lock-stroke"></span></div><h3>Private</h3><p>Only visible to you</p>',
    DECK_VISIBILITY_CHANGE_TEAM: '<div><span class="icon i-users"></span></div><h3>Internal</h3><p>Visible to your team</p>',
    DECK_VISIBILITY_CHANGE_ALL: '<div><span class="icon i-globe"></span></div><h3>Public</h3><p>Visible to the world</p>',
    DECK_VISIBILITY_CHANGED_SELF: "Your deck is now private",
    DECK_VISIBILITY_CHANGED_TEAM: "Your deck is now internal",
    DECK_VISIBILITY_CHANGED_ALL: "Your deck is now public",
    DECK_VISIBILITY_CHANGED_ERROR: "Failed to change visibility",
    DECK_EDIT_INVALID_TITLE: "Please enter a valid title",
    DECK_EDIT_INVALID_SLUG: "Please enter a valid URL",
    DECK_DELETE_SLIDE_CONFIRM: "Are you sure you want to remove this slide?",
    DECK_IMPORT_HTML_CONFIRM: "All existing content will be replaced, continue?",
    EXPORT_PDF_BUTTON: "Download PDF",
    EXPORT_PDF_BUTTON_WORKING: "Creating PDF...",
    EXPORT_PDF_ERROR: "An error occured while exporting your PDF.",
    EXPORT_ZIP_BUTTON: "Download ZIP",
    EXPORT_ZIP_BUTTON_WORKING: "Creating ZIP...",
    EXPORT_ZIP_ERROR: "An error occured while exporting your ZIP.",
    FORM_ERROR_REQUIRED: "Required",
    FORM_ERROR_USERNAME_TAKEN: ["That one's already taken :(", "Sorry, that's taken too"],
    FORM_ERROR_ORGANIZATION_SLUG_TAKEN: ["That one's already taken :(", "Sorry, that's taken too"],
    BILLING_DETAILS_ERROR: "An error occured while fetching your billing details, please try again.",
    BILLING_DETAILS_NOHISTORY: "You haven't made any payments yet.",
    THEME_CREATE: "New theme",
    THEME_CREATE_ERROR: "Failed to create theme",
    THEME_SAVE_SUCCESS: "Theme saved",
    THEME_SAVE_ERROR: "Failed to save theme",
    THEME_REMOVE_CONFIRM: "Are you sure you want to delete this theme?",
    THEME_REMOVE_SUCCESS: "Theme removed successfully",
    THEME_REMOVE_ERROR: "Failed to remove theme",
    THEME_LIST_LOAD_ERROR: "Failed to load themes",
    THEME_LIST_EMPTY: "Once you have created one or more themes they'll be listed here. Click the New Theme button to get started with your first theme.",
    THEME_DEFAULT_SAVE_SUCCESS: "Default theme was changed",
    THEME_DEFAULT_SAVE_ERROR: "Failed to change default theme",
    THEME_DELETE_TOOLTIP: "Delete",
    THEME_EDIT_TOOLTIP: "Edit",
    THEME_MAKE_DEFAULT_TOOLTIP: "Make this the default theme",
    THEME_IS_DEFAULT_TOOLTIP: "This is the default theme",
    THEME_SNIPPET_DELETE_CONFIRM: "Are you sure you want to delete this snippet?",
    TEMPLATE_LOAD_ERROR: "Failed to load slide templates",
    TEMPLATE_CREATE_SUCCESS: "Template saved!",
    TEMPLATE_CREATE_ERROR: "Failed to save template",
    TEMPLATE_DELETE_CONFIRM: "Are you sure you want to delete this template?",
    SEARCH_PAGINATION_PAGE: "Page",
    SEARCH_NO_RESULTS_FOR: 'No results for "{#term}"',
    SEARCH_SERVER_ERROR: "Failed to fetch search results",
    SEARCH_NO_TERM_ERROR: "Please enter a search term",
    MEDIA_TAG_DELETE_CONFIRM: "Are you sure you want to permanently delete this tag?",
    MEDIA_TAG_DELETE_SUCCESS: "Tag deleted",
    MEDIA_TAG_DELETE_ERROR: "Failed to delete",
    COLLABORATOR_REMOVE_CONFIRM: "Are you sure you want to remove this user?",
    counter: {},
    get: function (t, e) {
        var i = SL.locale[t];
        if ("object" == typeof i && i.length && (this.counter[t] = "number" == typeof this.counter[t] ? (this.counter[t] + 1) % i.length : 0, i = i[this.counter[t]]), "object" == typeof e)for (var n in e)i = i.replace("{#" + n + "}", e[n]);
        return "string" == typeof i ? i : ""
    }
}, function (t) {
    var e = {};
    e.sync = function () {
        $("[data-placement]").each(function () {
            var t = $(this), i = t.attr("data-placement");
            "function" == typeof e[i] ? e[i](t) : console.log('No matching layout found for "' + i + '"')
        })
    }, e.hcenter = function (t) {
        var e = t.parent();
        e && t.css("left", (e.width() - t.outerWidth()) / 2)
    }, e.vcenter = function (t) {
        var e = t.parent();
        e && t.css("top", (e.height() - t.outerHeight()) / 2)
    }, e.center = function (t) {
        var e = t.parent();
        if (e) {
            var i = e.width(), n = e.height(), s = t.outerWidth(), o = t.outerHeight();
            t.css({left: (i - s) / 2, top: (n - o) / 2})
        }
    }, e.sync(), $(t).on("resize", e.sync), t.Placement = e
}(window), SL.pointer = {
    down: !1, downTimeout: -1, init: function () {
        $(document).on("mousedown", this.onMouseDown.bind(this)), $(document).on("mouseleave", this.onMouseLeave.bind(this)), $(document).on("mouseup", this.onMouseUp.bind(this))
    }, isDown: function () {
        return this.down
    }, onMouseDown: function () {
        clearTimeout(this.downTimeout), this.down = !0, this.downTimeout = setTimeout(function () {
            this.down = !1
        }.bind(this), 3e4)
    }, onMouseLeave: function () {
        clearTimeout(this.downTimeout), this.down = !1
    }, onMouseUp: function () {
        clearTimeout(this.downTimeout), this.down = !1
    }
}, SL.routes = {
    PRICING: "/pricing",
    CHANGELOG: "/changelog",
    SIGN_IN: "/users/sign_in",
    SIGN_OUT: "/users/sign_out",
    BRAND_KIT: "/about#logo",
    SUBSCRIPTIONS_NEW: "/account/upgrade",
    SUBSCRIPTIONS_EDIT_CARD: "/account/update_billing",
    SUBSCRIPTIONS_EDIT_PERIOD: "/account/update_billing_period",
    USER: function (t) {
        return "/" + t
    },
    USER_EDIT: "/users/edit",
    DECK: function (t, e) {
        return "/" + t + "/" + e
    },
    DECK_NEW: function (t) {
        return "/" + t + "/new"
    },
    DECK_EDIT: function (t, e) {
        return "/" + t + "/" + e + "/edit"
    },
    DECK_REVIEW: function (t, e) {
        return "/" + t + "/" + e + "/review"
    },
    DECK_EMBED: function (t, e) {
        return "/" + t + "/" + e + "/embed"
    },
    DECK_LIVE: function (t, e) {
        return "/" + t + "/" + e + "/live"
    },
    THEME_EDITOR: "/themes",
    BILLING_DETAILS: "/account/billing",
    TEAM: function (t) {
        return window.location.protocol + "//" + t.get("slug") + "." + SL.config.APP_HOST
    },
    TEAM_EDIT: function (t) {
        return SL.routes.TEAM(t) + "/edit"
    },
    TEAM_EDIT_MEMBERS: function (t) {
        return SL.routes.TEAM(t) + "/edit_members"
    }
}, SL.session = {
    enforce: function () {
        this.enforced || (this.enforced = !0, this.hasLoggedOut = !1, this.loginInterval = setInterval(this.check.bind(this), SL.config.LOGIN_STATUS_INTERVAL))
    }, check: function () {
        $.get(SL.config.AJAX_CHECK_STATUS).done(function (t) {
            t && t.user_signed_in ? this.onLoggedIn() : this.onLoggedOut()
        }.bind(this))
    }, onLoggedIn: function () {
        this.hasLoggedOut && (this.hasLoggedOut = !1, SL.popup.close(SL.components.popup.SessionExpired))
    }, onLoggedOut: function () {
        this.hasLoggedOut || (this.hasLoggedOut = !0, SL.popup.open(SL.components.popup.SessionExpired))
    }
}, SL.settings = {
    STORAGE_KEY: "slides-settings",
    STORAGE_VERSION: 1,
    EDITOR_AUTO_HIDE: "editorAutoHide",
    EDITOR_AUTO_SAVE: "editorAutoSave",
    init: function () {
        this.settings = {version: this.STORAGE_VERSION}, this.changed = new signals.Signal, this.restore()
    },
    setDefaults: function () {
        "undefined" == typeof this.settings[this.EDITOR_AUTO_HIDE] && (this.settings[this.EDITOR_AUTO_HIDE] = !1), "undefined" == typeof this.settings[this.EDITOR_AUTO_SAVE] && (this.settings[this.EDITOR_AUTO_SAVE] = !0)
    },
    setValue: function (t, e) {
        "object" == typeof t ? $.extend(this.settings, t) : this.settings[t] = e, this.save(), this.changed.dispatch([t])
    },
    getValue: function (t) {
        return this.settings[t]
    },
    removeValue: function (t) {
        "object" == typeof t && t.length ? t.forEach(function (t) {
            delete this.settings[t]
        }.bind(this)) : delete this.settings[t], this.save(), this.changed.dispatch([t])
    },
    restore: function () {
        if (Modernizr.localstorage) {
            var t = localStorage.getItem(this.STORAGE_KEY);
            if (t) {
                var e = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
                e && e.version === this.STORAGE_VERSION ? (this.settings = e, this.setDefaults(), this.changed.dispatch()) : (this.setDefaults(), this.save())
            }
        }
        this.setDefaults()
    },
    save: function () {
        Modernizr.localstorage && localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.settings))
    }
},SL.util.svg = {
    NAMESPACE: "http://www.w3.org/2000/svg",
    SYMBOLS: {
        happy: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16 18.711c3.623 0 7.070-0.963 10-2.654-0.455 5.576-4.785 9.942-10 9.942-5.215 0-9.544-4.371-10-9.947 2.93 1.691 6.377 2.658 10 2.658zM8 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3-1.105 0-2-1.343-2-3zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3-1.105 0-2-1.343-2-3z"></path>',
        smiley: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM22.003 19.602l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855s-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398s4.779-1.362 6.003-3.398z"></path>',
        wondering: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM23.304 18.801l0.703 2.399-13.656 4-0.703-2.399zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2z"></path>',
        sad: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM9.997 24.398l-2.573-1.544c1.749-2.908 4.935-4.855 8.576-4.855 3.641 0 6.827 1.946 8.576 4.855l-2.573 1.544c-1.224-2.036-3.454-3.398-6.003-3.398-2.549 0-4.779 1.362-6.003 3.398z"></path>',
        "checkmark-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM13.52 23.383l-7.362-7.363 2.828-2.828 4.533 4.535 9.617-9.617 2.828 2.828-12.444 12.445z"></path>',
        "plus-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"></path>',
        "minus-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-16v-4h16v4z"></path>',
        "x-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM23.914 21.086l-2.828 2.828-5.086-5.086-5.086 5.086-2.828-2.828 5.086-5.086-5.086-5.086 2.828-2.828 5.086 5.086 5.086-5.086 2.828 2.828-5.086 5.086 5.086 5.086z"></path>',
        denied: '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM16 4c2.59 0 4.973 0.844 6.934 2.242l-16.696 16.688c-1.398-1.961-2.238-4.344-2.238-6.93 0-6.617 5.383-12 12-12zM16 28c-2.59 0-4.973-0.844-6.934-2.242l16.696-16.688c1.398 1.961 2.238 4.344 2.238 6.93 0 6.617-5.383 12-12 12z"></path>',
        clock: '<path d="M16 4c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12 5.383-12 12-12zM16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16v0zM21.422 18.578l-3.422-3.426v-7.152h-4.023v7.992c0 0.602 0.277 1.121 0.695 1.492l3.922 3.922 2.828-2.828z"></path>',
        "heart-stroke": '<path d="M23.113 6c2.457 0 4.492 1.82 4.836 4.188l-11.945 13.718-11.953-13.718c0.344-2.368 2.379-4.188 4.836-4.188 2.016 0 3.855 2.164 3.855 2.164l3.258 3.461 3.258-3.461c0 0 1.84-2.164 3.855-2.164zM23.113 2c-2.984 0-5.5 1.578-7.113 3.844-1.613-2.266-4.129-3.844-7.113-3.844-4.903 0-8.887 3.992-8.887 8.891v0.734l16.008 18.375 15.992-18.375v-0.734c0-4.899-3.984-8.891-8.887-8.891v0z"></path>',
        "heart-fill": '<path d="M16 5.844c-1.613-2.266-4.129-3.844-7.113-3.844-4.903 0-8.887 3.992-8.887 8.891v0.734l16.008 18.375 15.992-18.375v-0.734c0-4.899-3.984-8.891-8.887-8.891-2.984 0-5.5 1.578-7.113 3.844z"></path>',
        home: '<path d="M16 0l-16 16h4v16h24v-16h4l-16-16zM24 28h-6v-6h-4v6h-6v-14.344l8-5.656 8 5.656v14.344z"></path>',
        pin: '<path d="M17.070 2.93c-3.906-3.906-10.234-3.906-14.141 0-3.906 3.904-3.906 10.238 0 14.14 0.001 0 7.071 6.93 7.071 14.93 0-8 7.070-14.93 7.070-14.93 3.907-3.902 3.907-10.236 0-14.14zM10 14c-2.211 0-4-1.789-4-4s1.789-4 4-4 4 1.789 4 4-1.789 4-4 4z"></path>',
        user: '<path d="M12 16c-6.625 0-12 5.375-12 12 0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4 0-6.625-5.375-12-12-12zM6 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6z"></path>',
        mail: '<path d="M15.996 15.457l16.004-7.539v-3.918h-32v3.906zM16.004 19.879l-16.004-7.559v15.68h32v-15.656z"></path>',
        star: '<path d="M22.137 19.625l9.863-7.625h-12l-4-12-4 12h-12l9.875 7.594-3.875 12.406 10.016-7.68 9.992 7.68z"></path>',
        bolt: '<path d="M32 0l-24 16 6 4-14 12 24-12-6-4z"></path>',
        sun: '<path d="M16.001 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 7.999-3.582 7.999-8s-3.581-8-7.999-8v0zM14 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM4 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM2 14c1.105 0 2 0.895 2 2 0 1.107-0.895 2-2 2s-2-0.893-2-2c0-1.105 0.895-2 2-2zM4 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM14 30c0-1.109 0.895-2 2-2 1.108 0 2 0.891 2 2 0 1.102-0.892 2-2 2-1.105 0-2-0.898-2-2zM24 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM30 18c-1.104 0-2-0.896-2-2 0-1.107 0.896-2 2-2s2 0.893 2 2c0 1.104-0.896 2-2 2zM24 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2z"></path>',
        moon: '<path d="M24.633 22.184c-8.188 0-14.82-6.637-14.82-14.82 0-2.695 0.773-5.188 2.031-7.363-6.824 1.968-11.844 8.187-11.844 15.644 0 9.031 7.32 16.355 16.352 16.355 7.457 0 13.68-5.023 15.648-11.844-2.18 1.254-4.672 2.028-7.367 2.028z"></path>',
        cloud: '<path d="M24 10c-0.379 0-0.738 0.061-1.102 0.111-1.394-2.465-3.972-4.111-6.898-4.111-2.988 0-5.566 1.666-6.941 4.1-0.352-0.047-0.704-0.1-1.059-0.1-4.41 0-8 3.588-8 8 0 4.414 3.59 8 8 8h16c4.41 0 8-3.586 8-8 0-4.412-3.59-8-8-8zM24 22h-16c-2.207 0-4-1.797-4-4 0-2.193 1.941-3.885 4.004-3.945 0.008 0.943 0.172 1.869 0.5 2.744l3.746-1.402c-0.168-0.444-0.25-0.915-0.25-1.397 0-2.205 1.793-4 4-4 1.293 0 2.465 0.641 3.199 1.639-1.929 1.461-3.199 3.756-3.199 6.361h4c0-2.205 1.793-4 4-4s4 1.795 4 4c0 2.203-1.793 4-4 4z"></path>',
        rain: '<path d="M23.998 6c-0.375 0-0.733 0.061-1.103 0.111-1.389-2.465-3.969-4.111-6.895-4.111-2.987 0-5.565 1.666-6.94 4.1-0.353-0.047-0.705-0.1-1.060-0.1-4.41 0-8 3.588-8 8s3.59 8 8 8h15.998c4.414 0 8-3.588 8-8s-3.586-8-8-8zM23.998 18h-15.998c-2.207 0-4-1.795-4-4 0-2.193 1.941-3.885 4.004-3.945 0.009 0.943 0.172 1.869 0.5 2.744l3.746-1.402c-0.168-0.444-0.25-0.915-0.25-1.397 0-2.205 1.793-4 4-4 1.293 0 2.465 0.641 3.199 1.639-1.928 1.461-3.199 3.756-3.199 6.361h4c0-2.205 1.795-4 3.998-4 2.211 0 4 1.795 4 4s-1.789 4-4 4zM3.281 29.438c-0.75 0.75-1.969 0.75-2.719 0s-0.75-1.969 0-2.719 5.438-2.719 5.438-2.719-1.969 4.688-2.719 5.438zM11.285 29.438c-0.75 0.75-1.965 0.75-2.719 0-0.75-0.75-0.75-1.969 0-2.719 0.754-0.75 5.438-2.719 5.438-2.719s-1.965 4.688-2.719 5.438zM19.28 29.438c-0.75 0.75-1.969 0.75-2.719 0s-0.75-1.969 0-2.719 5.437-2.719 5.437-2.719-1.968 4.688-2.718 5.438z"></path>',
        umbrella: '<path d="M16 0c-8.82 0-16 7.178-16 16h4c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5h4c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5v10c0 1.102-0.895 2-2 2-1.102 0-2-0.898-2-2h-4c0 3.309 2.695 6 6 6 3.312 0 6-2.691 6-6v-10c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.498 0.674 1.498 1.5h4c0-0.826 0.68-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5h4c0-8.822-7.172-16-15.998-16z"></path>',
        eye: '<path d="M16 4c-8.836 0-16 11.844-16 11.844s7.164 12.156 16 12.156 16-12.156 16-12.156-7.164-11.844-16-11.844zM16 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM12 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4-2.209 0-4-1.791-4-4z"></path>',
        ribbon: '<path d="M8 20c-1.41 0-2.742-0.289-4-0.736v12.736l4-4 4 4v-12.736c-1.258 0.447-2.59 0.736-4 0.736zM0 8c0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8-4.418 0-8-3.582-8-8z"></path>',
        iphone: '<path d="M16 0h-8c-4.418 0-8 3.582-8 8v16c0 4.418 3.582 8 8 8h8c4.418 0 8-3.582 8-8v-16c0-4.418-3.582-8-8-8zM12 30.062c-1.139 0-2.062-0.922-2.062-2.062s0.924-2.062 2.062-2.062 2.062 0.922 2.062 2.062-0.923 2.062-2.062 2.062zM20 24h-16v-16c0-2.203 1.795-4 4-4h8c2.203 0 4 1.797 4 4v16z"></path>',
        camera: '<path d="M16 20c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4-2.209 0-4-1.791-4-4zM28 8l-3.289-6.643c-0.27-0.789-1.016-1.357-1.899-1.357h-5.492c-0.893 0-1.646 0.582-1.904 1.385l-3.412 6.615h-8.004c-2.209 0-4 1.791-4 4v20h32v-20c0-2.209-1.789-4-4-4zM6 16c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM20 28c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>',
        cog: '<path d="M32 17.969v-4l-4.781-1.992c-0.133-0.375-0.273-0.738-0.445-1.094l1.93-4.805-2.829-2.828-4.762 1.961c-0.363-0.176-0.734-0.324-1.117-0.461l-2.027-4.75h-4l-1.977 4.734c-0.398 0.141-0.781 0.289-1.16 0.469l-4.754-1.91-2.828 2.828 1.938 4.711c-0.188 0.387-0.34 0.781-0.485 1.188l-4.703 2.011v4l4.707 1.961c0.145 0.406 0.301 0.801 0.488 1.188l-1.902 4.742 2.828 2.828 4.723-1.945c0.379 0.18 0.766 0.324 1.164 0.461l2.023 4.734h4l1.98-4.758c0.379-0.141 0.754-0.289 1.113-0.461l4.797 1.922 2.828-2.828-1.969-4.773c0.168-0.359 0.305-0.723 0.438-1.094l4.782-2.039zM15.969 22c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6z"></path>',
        lock: '<path d="M14 0c-5.508 0-9.996 4.484-9.996 10v2h-4.004v14c0 3.309 2.691 6 6 6h12c3.309 0 6-2.691 6-6v-16c0-5.516-4.488-10-10-10zM11.996 24c-1.101 0-1.996-0.895-1.996-2s0.895-2 1.996-2c1.105 0 2 0.895 2 2s-0.894 2-2 2zM20 12h-11.996v-2c0-3.309 2.691-6 5.996-6 3.309 0 6 2.691 6 6v2z"></path>',
        unlock: '<path d="M14.004 0c-5.516 0-9.996 4.484-9.996 10h3.996c0-3.309 2.688-6 6-6 3.305 0 5.996 2.691 5.996 6v2h-20v14c0 3.309 2.695 6 6 6h12c3.305 0 6-2.691 6-6v-16c0-5.516-4.488-10-9.996-10zM12 24c-1.102 0-2-0.895-2-2s0.898-2 2-2c1.109 0 2 0.895 2 2s-0.891 2-2 2z"></path>',
        fork: '<path d="M20 0v3.875c0 1.602-0.625 3.109-1.754 4.238l-11.316 11.254c-1.789 1.785-2.774 4.129-2.883 6.633h-4.047l6 6 6-6h-3.957c0.105-1.438 0.684-2.773 1.711-3.805l11.316-11.25c1.891-1.89 2.93-4.398 2.93-7.070v-3.875h-4zM23.953 26c-0.109-2.504-1.098-4.848-2.887-6.641l-2.23-2.215-2.836 2.821 2.242 2.23c1.031 1.027 1.609 2.367 1.715 3.805h-3.957l6 6 6-6h-4.047z"></path>',
        paperclip: '<path d="M17.293 15.292l-2.829-2.829-4 4c-1.953 1.953-1.953 5.119 0 7.071 1.953 1.953 5.118 1.953 7.071 0l10.122-9.879c3.123-3.124 3.123-8.188 0-11.313-3.125-3.124-8.19-3.124-11.313 0l-11.121 10.88c-4.296 4.295-4.296 11.26 0 15.557 4.296 4.296 11.261 4.296 15.556 0l6-6-2.829-2.829-5.999 6c-2.733 2.732-7.166 2.732-9.9 0-2.733-2.732-2.733-7.166 0-9.899l11.121-10.881c1.562-1.562 4.095-1.562 5.656 0 1.563 1.563 1.563 4.097 0 5.657l-10.121 9.879c-0.391 0.391-1.023 0.391-1.414 0s-0.391-1.023 0-1.414l4-4z"></path>',
        facebook: '<path d="M17.996 32h-5.996v-16h-4v-5.514l4-0.002-0.007-3.248c0-4.498 1.22-7.236 6.519-7.236h4.412v5.515h-2.757c-2.064 0-2.163 0.771-2.163 2.209l-0.008 2.76h4.959l-0.584 5.514-4.37 0.002-0.004 16z"></path>',
        twitter: '<path d="M32 6.076c-1.177 0.522-2.443 0.875-3.771 1.034 1.355-0.813 2.396-2.099 2.887-3.632-1.269 0.752-2.674 1.299-4.169 1.593-1.198-1.276-2.904-2.073-4.792-2.073-3.626 0-6.565 2.939-6.565 6.565 0 0.515 0.058 1.016 0.17 1.496-5.456-0.274-10.294-2.888-13.532-6.86-0.565 0.97-0.889 2.097-0.889 3.301 0 2.278 1.159 4.287 2.921 5.465-1.076-0.034-2.088-0.329-2.974-0.821-0.001 0.027-0.001 0.055-0.001 0.083 0 3.181 2.263 5.834 5.266 6.437-0.551 0.15-1.131 0.23-1.73 0.23-0.423 0-0.834-0.041-1.235-0.118 0.835 2.608 3.26 4.506 6.133 4.559-2.247 1.761-5.078 2.81-8.154 2.81-0.53 0-1.052-0.031-1.566-0.092 2.905 1.863 6.356 2.95 10.064 2.95 12.076 0 18.679-10.004 18.679-18.68 0-0.285-0.006-0.568-0.019-0.849 1.283-0.926 2.396-2.082 3.276-3.398z"></path>',
        earth: '<path d="M27.314 4.686c3.022 3.022 4.686 7.040 4.686 11.314s-1.664 8.292-4.686 11.314c-3.022 3.022-7.040 4.686-11.314 4.686s-8.292-1.664-11.314-4.686c-3.022-3.022-4.686-7.040-4.686-11.314s1.664-8.292 4.686-11.314c3.022-3.022 7.040-4.686 11.314-4.686s8.292 1.664 11.314 4.686zM25.899 25.9c1.971-1.971 3.281-4.425 3.821-7.096-0.421 0.62-0.824 0.85-1.073-0.538-0.257-2.262-2.335-0.817-3.641-1.621-1.375 0.927-4.466-1.802-3.941 1.276 0.81 1.388 4.375-1.858 2.598 1.079-1.134 2.050-4.145 6.592-3.753 8.946 0.049 3.43-3.504 0.715-4.729-0.422-0.824-2.279-0.281-6.262-2.434-7.378-2.338-0.102-4.344-0.314-5.25-2.927-0.545-1.87 0.58-4.653 2.584-5.083 2.933-1.843 3.98 2.158 6.731 2.232 0.854-0.894 3.182-1.178 3.375-2.18-1.805-0.318 2.29-1.517-0.173-2.199-1.358 0.16-2.234 1.409-1.512 2.467-2.632 0.614-2.717-3.809-5.247-2.414-0.064 2.206-4.132 0.715-1.407 0.268 0.936-0.409-1.527-1.594-0.196-1.379 0.654-0.036 2.854-0.807 2.259-1.325 1.225-0.761 2.255 1.822 3.454-0.059 0.866-1.446-0.363-1.713-1.448-0.98-0.612-0.685 1.080-2.165 2.573-2.804 0.497-0.213 0.973-0.329 1.336-0.296 0.752 0.868 2.142 1.019 2.215-0.104-1.862-0.892-3.915-1.363-6.040-1.363-3.051 0-5.952 0.969-8.353 2.762 0.645 0.296 1.012 0.664 0.39 1.134-0.483 1.439-2.443 3.371-4.163 3.098-0.893 1.54-1.482 3.238-1.733 5.017 1.441 0.477 1.773 1.42 1.464 1.736-0.734 0.64-1.185 1.548-1.418 2.541 0.469 2.87 1.818 5.515 3.915 7.612 2.644 2.644 6.16 4.1 9.899 4.1s7.255-1.456 9.899-4.1z"></path>',
        globe: '<path d="M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM23.487 22c0.268-1.264 0.437-2.606 0.492-4h3.983c-0.104 1.381-0.426 2.722-0.959 4h-3.516zM6.513 12c-0.268 1.264-0.437 2.606-0.492 4h-3.983c0.104-1.381 0.426-2.722 0.959-4h3.516zM21.439 12c0.3 1.28 0.481 2.62 0.54 4h-5.979v-4h5.439zM16 10v-5.854c0.456 0.133 0.908 0.355 1.351 0.668 0.831 0.586 1.625 1.488 2.298 2.609 0.465 0.775 0.867 1.638 1.203 2.578h-4.852zM10.351 7.422c0.673-1.121 1.467-2.023 2.298-2.609 0.443-0.313 0.895-0.535 1.351-0.668v5.854h-4.852c0.336-0.94 0.738-1.803 1.203-2.578zM14 12v4h-5.979c0.059-1.38 0.24-2.72 0.54-4h5.439zM2.997 22c-0.533-1.278-0.854-2.619-0.959-4h3.983c0.055 1.394 0.224 2.736 0.492 4h-3.516zM8.021 18h5.979v4h-5.439c-0.3-1.28-0.481-2.62-0.54-4zM14 24v5.854c-0.456-0.133-0.908-0.355-1.351-0.668-0.831-0.586-1.625-1.488-2.298-2.609-0.465-0.775-0.867-1.638-1.203-2.578h4.852zM19.649 26.578c-0.673 1.121-1.467 2.023-2.298 2.609-0.443 0.312-0.895 0.535-1.351 0.668v-5.854h4.852c-0.336 0.94-0.738 1.802-1.203 2.578zM16 22v-4h5.979c-0.059 1.38-0.24 2.72-0.54 4h-5.439zM23.98 16c-0.055-1.394-0.224-2.736-0.492-4h3.516c0.533 1.278 0.855 2.619 0.959 4h-3.983zM25.958 10h-2.997c-0.582-1.836-1.387-3.447-2.354-4.732 1.329 0.636 2.533 1.488 3.585 2.54 0.671 0.671 1.261 1.404 1.766 2.192zM5.808 7.808c1.052-1.052 2.256-1.904 3.585-2.54-0.967 1.285-1.771 2.896-2.354 4.732h-2.997c0.504-0.788 1.094-1.521 1.766-2.192zM4.042 24h2.997c0.583 1.836 1.387 3.447 2.354 4.732-1.329-0.636-2.533-1.488-3.585-2.54-0.671-0.671-1.261-1.404-1.766-2.192zM24.192 26.192c-1.052 1.052-2.256 1.904-3.585 2.54 0.967-1.285 1.771-2.896 2.354-4.732h2.997c-0.504 0.788-1.094 1.521-1.766 2.192z"></path>',
        "thin-arrow-up": '<path d="M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z"></path>',
        "thin-arrow-down": '<path d="M4.586 19.414l10 10c0.781 0.781 2.047 0.781 2.828 0l10-10c0.781-0.781 0.781-2.047 0-2.828s-2.047-0.781-2.828 0l-6.586 6.586v-19.172c0-1.105-0.895-2-2-2s-2 0.895-2 2v19.172l-6.586-6.586c-0.391-0.39-0.902-0.586-1.414-0.586s-1.024 0.195-1.414 0.586c-0.781 0.781-0.781 2.047 0 2.828z"></path>',
        "thin-arrow-up-left": '<path d="M4 18c0 1.105 0.895 2 2 2s2-0.895 2-2v-7.172l16.586 16.586c0.781 0.781 2.047 0.781 2.828 0 0.391-0.391 0.586-0.902 0.586-1.414s-0.195-1.024-0.586-1.414l-16.586-16.586h7.172c1.105 0 2-0.895 2-2s-0.895-2-2-2h-14v14z"></path>',
        "thin-arrow-up-right": '<path d="M26.001 4c-0 0-0.001 0-0.001 0h-11.999c-1.105 0-2 0.895-2 2s0.895 2 2 2h7.172l-16.586 16.586c-0.781 0.781-0.781 2.047 0 2.828 0.391 0.391 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586l16.586-16.586v7.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-14h-1.999z"></path>',
        "thin-arrow-left": '<path d="M12.586 4.586l-10 10c-0.781 0.781-0.781 2.047 0 2.828l10 10c0.781 0.781 2.047 0.781 2.828 0s0.781-2.047 0-2.828l-6.586-6.586h19.172c1.105 0 2-0.895 2-2s-0.895-2-2-2h-19.172l6.586-6.586c0.39-0.391 0.586-0.902 0.586-1.414s-0.195-1.024-0.586-1.414c-0.781-0.781-2.047-0.781-2.828 0z"></path>',
        "thin-arrow-right": '<path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>',
        "thin-arrow-down-left": '<path d="M18 28c1.105 0 2-0.895 2-2s-0.895-2-2-2h-7.172l16.586-16.586c0.781-0.781 0.781-2.047 0-2.828-0.391-0.391-0.902-0.586-1.414-0.586s-1.024 0.195-1.414 0.586l-16.586 16.586v-7.172c0-1.105-0.895-2-2-2s-2 0.895-2 2v14h14z"></path>',
        "thin-arrow-down-right": '<path d="M28 14c0-1.105-0.895-2-2-2s-2 0.895-2 2v7.172l-16.586-16.586c-0.781-0.781-2.047-0.781-2.828 0-0.391 0.391-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414l16.586 16.586h-7.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h14v-14z"></path>'
    },
    boundingBox: function (t) {
        var e;
        if ($(t).parents("body").length)e = t.getBBox(); else {
            var i = t.parentNode, n = document.createElementNS(SL.util.svg.NAMESPACE, "svg");
            n.setAttribute("width", "0"), n.setAttribute("height", "0"), n.setAttribute("style", "visibility: hidden; position: absolute; left: 0; top: 0;"), n.appendChild(t), document.body.appendChild(n), e = t.getBBox(), i ? i.appendChild(t) : n.removeChild(t), document.body.removeChild(n)
        }
        return e
    },
    pointsToPolygon: function (t) {
        for (var e = []; t.length >= 2;)e.push(t.shift() + "," + t.shift());
        return e.join(" ")
    },
    rect: function (t, e) {
        var i = document.createElementNS(SL.util.svg.NAMESPACE, "rect");
        return i.setAttribute("width", t), i.setAttribute("height", e), i
    },
    ellipse: function (t, e) {
        var i = document.createElementNS(SL.util.svg.NAMESPACE, "ellipse");
        return i.setAttribute("rx", t / 2), i.setAttribute("ry", e / 2), i.setAttribute("cx", t / 2), i.setAttribute("cy", e / 2), i
    },
    triangleUp: function (t, e) {
        var i = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return i.setAttribute("points", SL.util.svg.pointsToPolygon([t / 2, 0, t, e, 0, e])), i
    },
    triangleDown: function (t, e) {
        var i = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return i.setAttribute("points", SL.util.svg.pointsToPolygon([0, 0, t, 0, t / 2, e])), i
    },
    triangleLeft: function (t, e) {
        var i = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return i.setAttribute("points", SL.util.svg.pointsToPolygon([0, e / 2, t, 0, t, e])), i
    },
    triangleRight: function (t, e) {
        var i = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return i.setAttribute("points", SL.util.svg.pointsToPolygon([t, e / 2, 0, e, 0, 0])), i
    },
    arrowUp: function (t, e) {
        var i = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return i.setAttribute("points", SL.util.svg.pointsToPolygon([.5 * t, 0, t, .5 * e, .7 * t, .5 * e, .7 * t, e, .3 * t, e, .3 * t, .5 * e, 0, .5 * e, .5 * t, 0])), i
    },
    arrowDown: function (t, e) {
        var i = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return i.setAttribute("points", SL.util.svg.pointsToPolygon([.5 * t, e, t, .5 * e, .7 * t, .5 * e, .7 * t, 0, .3 * t, 0, .3 * t, .5 * e, 0, .5 * e, .5 * t, e])), i
    },
    arrowLeft: function (t, e) {
        var i = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return i.setAttribute("points", SL.util.svg.pointsToPolygon([t, .3 * e, .5 * t, .3 * e, .5 * t, 0, 0, .5 * e, .5 * t, e, .5 * t, .7 * e, t, .7 * e, t, .3 * e])), i
    },
    arrowRight: function (t, e) {
        var i = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return i.setAttribute("points", SL.util.svg.pointsToPolygon([0, .3 * e, .5 * t, .3 * e, .5 * t, 0, t, .5 * e, .5 * t, e, .5 * t, .7 * e, 0, .7 * e])), i
    },
    polygon: function (t, e, i) {
        var n = document.createElementNS(SL.util.svg.NAMESPACE, "polygon"), s = [];
        if (3 === i)s = [t / 2, 0, t, e, 0, e]; else if (i > 3)for (var o = t / 2, a = e / 2, r = 0; i > r; r++) {
            var l = o + o * Math.cos(2 * Math.PI * r / i), c = a + a * Math.sin(2 * Math.PI * r / i);
            l = Math.round(10 * l) / 10, c = Math.round(10 * c) / 10, s.push(l), s.push(c)
        }
        return n.setAttribute("points", SL.util.svg.pointsToPolygon(s)), n
    },
    symbol: function (t) {
        var e = document.createElementNS(SL.util.svg.NAMESPACE, "g"), i = SL.util.svg.SYMBOLS[t];
        return i && (e.innerSVG = SL.util.svg.SYMBOLS[t]), e
    }
},SL.visibility = {
    init: function () {
        this.changed = new signals.Signal, "undefined" != typeof document.hidden ? (this.hiddenProperty = "hidden", this.visibilityChangeEvent = "visibilitychange") : "undefined" != typeof document.msHidden ? (this.hiddenProperty = "msHidden", this.visibilityChangeEvent = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (this.hiddenProperty = "webkitHidden", this.visibilityChangeEvent = "webkitvisibilitychange"), this.supported = "boolean" == typeof document[this.hiddenProperty], this.supported && this.bind()
    }, isVisible: function () {
        return this.supported ? !document[this.hiddenProperty] : !0
    }, isHidden: function () {
        return this.supported ? document[this.hiddenProperty] : !1
    }, bind: function () {
        document.addEventListener(this.visibilityChangeEvent, this.onVisibilityChange.bind(this))
    }, onVisibilityChange: function () {
        this.changed.dispatch()
    }
},SL.warnings = {
    STORAGE_KEY: "slides-last-warning-id", MESSAGE_ID: 23, init: function () {
        this.showMessage()
    }, showMessage: function () {
        if (this.hasMessage() && !this.hasExpired() && SL.util.user.isLoggedIn() && Modernizr.localstorage) {
            var t = parseInt(localStorage.getItem(this.STORAGE_KEY), 10) || 0;
            if (t < this.MESSAGE_ID) {
                var e = SL.notify(this.MESSAGE_TEXT, {optional: !1});
                e.destroyed.add(this.hideMessage.bind(this))
            }
        }
    }, hideMessage: function () {
        Modernizr.localstorage && localStorage.setItem(this.STORAGE_KEY, this.MESSAGE_ID)
    }, hasMessage: function () {
        return !!this.MESSAGE_TEXT
    }, hasExpired: function () {
        return this.MESSAGE_EXPIRY ? moment().diff(moment(this.MESSAGE_EXPIRY)) > 0 : !1
    }
},SL("helpers").FileUploader = Class.extend({
    init: function (t) {
        if (this.options = $.extend({
                formdata: !0,
                contentType: !1,
                external: !1,
                method: "POST"
            }, t), "undefined" == typeof this.options.file || "undefined" == typeof this.options.service)throw"File and service must be defined for FileUploader task.";
        this.timeout = -1, this.uploading = !1, this.onUploadSuccess = this.onUploadSuccess.bind(this), this.onUploadProgress = this.onUploadProgress.bind(this), this.onUploadError = this.onUploadError.bind(this), this.failed = new signals.Signal, this.succeeded = new signals.Signal, this.progressed = new signals.Signal
    }, upload: function () {
        if (this.uploading = !0, clearTimeout(this.timeout), "number" == typeof this.options.timeout && (this.timeout = setTimeout(this.onUploadError, this.options.timeout)), this.xhr = new XMLHttpRequest, this.xhr.onload = function () {
                if (this.options.external === !0)this.onUploadSuccess(); else if (422 === this.xhr.status || 500 === this.xhr.status)this.onUploadError(); else {
                    try {
                        var t = JSON.parse(this.xhr.responseText)
                    } catch (e) {
                        return this.onUploadError()
                    }
                    this.onUploadSuccess(t)
                }
            }.bind(this), this.xhr.onerror = this.onUploadError, this.xhr.upload.onprogress = this.onUploadProgress, this.xhr.open(this.options.method, this.options.service, !0), this.options.contentType) {
            var t = "string" == typeof this.options.contentType ? this.options.contentType : this.options.file.type;
            t && this.xhr.setRequestHeader("Content-Type", t)
        }
        if (this.options.formdata) {
            var e = new FormData;
            this.options.filename ? e.append("file", this.options.file, this.options.filename) : e.append("file", this.options.file);
            var i = this.options.csrf || document.querySelector('meta[name="csrf-token"]');
            i && !this.options.external && e.append("authenticity_token", i.getAttribute("content")), this.xhr.send(e)
        } else this.xhr.send(this.options.file)
    }, isUploading: function () {
        return this.uploading
    }, onUploadSuccess: function (t) {
        clearTimeout(this.timeout), this.uploading = !1, this.succeeded.dispatch(t)
    }, onUploadProgress: function (t) {
        t.lengthComputable && this.progressed.dispatch(t.loaded / t.total)
    }, onUploadError: function () {
        clearTimeout(this.timeout), this.uploading = !1, this.failed.dispatch()
    }, destroy: function () {
        if (clearTimeout(this.timeout), this.xhr) {
            var t = function () {
            };
            this.xhr.onload = t, this.xhr.onerror = t, this.xhr.upload.onprogress = t, this.xhr.abort()
        }
        this.succeeded.dispose(), this.progressed.dispose(), this.failed.dispose()
    }
}),SL.helpers.Fullscreen = {
    enter: function (t) {
        t = t || document.body;
        var e = t.requestFullScreen || t.webkitRequestFullscreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullscreen;
        e && e.apply(t)
    }, exit: function () {
        var t = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
        t && t.apply(document)
    }, toggle: function () {
        SL.helpers.Fullscreen.isActive() ? SL.helpers.Fullscreen.exit() : SL.helpers.Fullscreen.enter()
    }, isEnabled: function () {
        return !!(document.fullscreenEnabled || document.mozFullscreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled)
    }, isActive: function () {
        return !!(document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
    }
},SL("helpers").ImageUploader = Class.extend({
    init: function (t) {
        this.options = $.extend({
            service: SL.config.AJAX_MEDIA_CREATE,
            timeout: 9e4
        }, t), this.onUploadSuccess = this.onUploadSuccess.bind(this), this.onUploadProgress = this.onUploadProgress.bind(this), this.onUploadError = this.onUploadError.bind(this), this.progressed = new signals.Signal, this.succeeded = new signals.Signal, this.failed = new signals.Signal
    }, upload: function (t, e) {
        return t && t.type.match(/image.*/) ? "number" == typeof t.size && t.size / 1024 > SL.config.MAX_IMAGE_UPLOAD_SIZE.maxsize ? void SL.notify("No more than " + Math.round(MAX_IMAGE_UPLOAD_SIZE / 1e3) + "mb please", "negative") : (this.fileUploader && this.fileUploader.destroy(), this.fileUploader = new SL.helpers.FileUploader({
            file: t,
            filename: e || this.options.filename,
            service: this.options.service,
            timeout: this.options.timeout
        }), this.fileUploader.succeeded.add(this.onUploadSuccess), this.fileUploader.progressed.add(this.onUploadProgress), this.fileUploader.failed.add(this.onUploadError), void this.fileUploader.upload()) : void SL.notify("Only image files, please")
    }, isUploading: function () {
        return !(!this.fileUploader || !this.fileUploader.isUploading())
    }, onUploadSuccess: function (t) {
        t && "string" == typeof t.url ? this.succeeded.dispatch(t.url) : this.failed.dispatch(), this.fileUploader.destroy(), this.fileUploader = null
    }, onUploadProgress: function (t) {
        this.progressed.dispatch(t)
    }, onUploadError: function () {
        this.failed.dispatch(), this.fileUploader.destroy(), this.fileUploader = null
    }, destroy: function () {
        this.succeeded.dispose(), this.progressed.dispose(), this.failed.dispose(), this.fileUploader && this.fileUploader.destroy()
    }
}),SL.helpers.PageLoader = {
    show: function (t) {
        t = $.extend({style: null, message: null}, t);
        var e = $(".page-loader");
        0 === e.length && (e = $(['<div class="page-loader">', '<div class="page-loader-inner hidden">', '<p class="page-loader-message"></p>', '<div class="page-loader-spinner spinner"></div>', "</div>", "</div>"].join("")).appendTo(document.body), setTimeout(function () {
            e.find(".page-loader-inner").removeClass("hidden")
        }, 1)), t.container && e.appendTo(t.container), t.message && e.find(".page-loader-message").html(t.message), t.style && e.attr("data-style", t.style), clearTimeout(this.hideTimeout), e.removeClass("frozen"), e.addClass("visible")
    }, hide: function () {
        $(".page-loader").removeClass("visible"), clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(function () {
            $(".page-loader").addClass("frozen")
        }.bind(this), 1e3)
    }, waitForFonts: function (t) {
        SL.fonts.isReady() === !1 && (this.show(t), SL.fonts.ready.add(this.hide))
    }
},SL("helpers").PollJob = Class.extend({
    init: function (t) {
        this.options = $.extend({
            interval: 1e3,
            timeout: Number.MAX_VALUE,
            retries: Number.MAX_VALUE
        }, t), this.interval = -1, this.running = !1, this.poll = this.poll.bind(this), this.ended = new signals.Signal, this.polled = new signals.Signal
    }, start: function () {
        this.running = !0, this.pollStart = Date.now(), this.pollTimes = 0, clearInterval(this.interval), this.interval = setInterval(this.poll, this.options.interval)
    }, stop: function () {
        this.running = !1, clearInterval(this.interval)
    }, poll: function () {
        this.pollTimes++, Date.now() - this.pollStart > this.options.timeout || this.pollTimes > this.options.retries ? (this.stop(), this.ended.dispatch()) : this.polled.dispatch()
    }
}),SL("helpers").StreamEditor = Class.extend({
    init: function (t) {
        this.options = $.extend({}, t), this.statusChanged = new signals.Signal, this.reconnecting = new signals.Signal, this.messageReceived = new signals.Signal, this.debugMode = !!SL.util.getQuery().debug
    }, connect: function () {
        if (this.socket)this.isConnected() || (this.log("manual reconnect", t), this.socket.io.close(), this.socket.io.open()); else {
            var t = SL.config.STREAM_ENGINE_HOST + "/" + SL.config.STREAM_ENGINE_EDITOR_NAMESPACE;
            this.log("connecting to", t), this.socket = io.connect(t, {reconnectionDelayMax: 1e4}), this.socket.on("connect", this.onSocketConnect.bind(this)), this.socket.on("reconnect_attempt", this.onSocketReconnectAttempt.bind(this)), this.socket.on("reconnect_failed", this.onSocketReconnectFailed.bind(this)), this.socket.on("reconnect", this.onSocketReconnect.bind(this)), this.socket.on("disconnect", this.onSocketDisconnect.bind(this)), this.socket.on("message", this.onSocketMessage.bind(this))
        }
        return this.isConnected() ? Promise.resolve() : new Promise(function (t, e) {
            var i = function () {
                t(), this.socket.removeEventListener("connect", i), this.socket.removeEventListener("connect_error", n)
            }.bind(this), n = function () {
                e(), this.socket.removeEventListener("connect", i), this.socket.removeEventListener("connect_error", n)
            }.bind(this);
            this.socket.on("connect", i), this.socket.on("connect_error", n)
        }.bind(this))
    }, broadcast: function (t) {
        this.emit("broadcast", JSON.stringify(t))
    }, emit: function () {
        this.log("emit", arguments), this.socket.emit.apply(this.socket, arguments)
    }, log: function () {
        if (this.debugMode && "function" == typeof console.log.apply) {
            var t = ["Stream:"].concat(Array.prototype.slice.call(arguments));
            console.log.apply(console, t)
        }
    }, setStatus: function (t) {
        this.status !== t && (this.status = t, this.statusChanged.dispatch(this.status))
    }, isConnected: function () {
        return this.socket.connected === !0
    }, onSocketMessage: function (t) {
        try {
            var e = JSON.parse(t.data)
        } catch (i) {
            this.log("unable to parse streamed socket message as JSON.")
        }
        this.log("message", e), this.messageReceived.dispatch(e)
    }, onSocketConnect: function () {
        this.log("connected"), this.emit("subscribe", {
            deck_id: this.options.deckID,
            user_id: SL.current_user.get("id"),
            slide_id: this.options.slideID
        }), this.setStatus(SL.helpers.StreamEditor.STATUS_CONNECTED)
    }, onSocketDisconnect: function () {
        this.log("disconnected"), this.setStatus(SL.helpers.StreamEditor.STATUS_DISCONNECTED)
    }, onSocketReconnectAttempt: function () {
        this.setStatus(SL.helpers.StreamEditor.STATUS_RECONNECTING), this.reconnecting.dispatch(this.socket.io.backoff.duration())
    }, onSocketReconnectFailed: function () {
        this.log("reconnect failed"), this.setStatus(SL.helpers.StreamEditor.STATUS_RECONNECT_FAILED)
    }, onSocketReconnect: function () {
        this.log("reconnected"), this.setStatus(SL.helpers.StreamEditor.STATUS_RECONNECTED)
    }
}),SL.helpers.StreamEditor.STATUS_CONNECTED = "connected",SL.helpers.StreamEditor.STATUS_RECONNECTED = "reconnected",SL.helpers.StreamEditor.STATUS_RECONNECT_FAILED = "reconnect_failed",SL.helpers.StreamEditor.STATUS_DISCONNECTED = "disconnected",SL.helpers.StreamEditor.singleton = function () {
    return this._instance || (this._instance = new SL.helpers.StreamEditor({
        deckID: SLConfig.deck.id,
        slideID: SL.util.deck.getSlideID(Reveal.getCurrentSlide())
    })), this._instance
},SL("helpers").StreamLive = Class.extend({
    init: function (t) {
        this.options = $.extend({
            reveal: window.Reveal,
            showErrors: !0,
            subscriber: !0,
            publisher: !1,
            publisherID: Date.now() + "-" + Math.round(1e6 * Math.random()),
            deckID: SL.current_deck.get("id")
        }, t), this.ready = new signals.Signal, this.stateChanged = new signals.Signal, this.statusChanged = new signals.Signal, this.subscribersChanged = new signals.Signal, this.socketIsDisconnected = !1, this.debugMode = !!SL.util.getQuery().debug
    }, connect: function () {
        this.options.publisher ? this.setupPublisher() : this.setupSubscriber()
    }, setupPublisher: function () {
        this.publish = this.publish.bind(this), this.publishable = !0, this.options.reveal.addEventListener("slidechanged", this.publish), this.options.reveal.addEventListener("fragmentshown", this.publish), this.options.reveal.addEventListener("fragmenthidden", this.publish), this.options.reveal.addEventListener("overviewshown", this.publish), this.options.reveal.addEventListener("overviewhidden", this.publish), this.options.reveal.addEventListener("paused", this.publish), this.options.reveal.addEventListener("resumed", this.publish), $.ajax({
            url: "/api/v1/decks/" + this.options.deckID + "/stream.json",
            type: "GET",
            context: this
        }).done(function (t) {
            this.log("found existing stream"), this.setState(JSON.parse(t.state), !0), this.setupSocket(), this.ready.dispatch()
        }).error(function () {
            this.log("no existing stream, publishing state"), this.publish(function () {
                this.setupSocket(), this.ready.dispatch()
            }.bind(this))
        })
    }, setupSubscriber: function () {
        $.ajax({
            url: "/api/v1/decks/" + this.options.deckID + "/stream.json",
            type: "GET",
            context: this
        }).done(function (t) {
            this.log("found existing stream"), this.setStatus(SL.helpers.StreamLive.STATUS_NONE), this.setState(JSON.parse(t.state), !0), this.setupSocket(), this.ready.dispatch()
        }).error(function () {
            this.retryStartTime = Date.now(), this.setStatus(SL.helpers.StreamLive.STATUS_WAITING_FOR_PUBLISHER), this.log("no existing stream, retrying in " + SL.helpers.StreamLive.CONNECTION_RETRY_INTERVAL / 1e3 + "s"), setTimeout(this.setupSubscriber.bind(this), SL.helpers.StreamLive.CONNECTION_RETRY_INTERVAL)
        })
    }, setupSocket: function () {
        if (this.options.subscriber) {
            var t = SL.config.STREAM_ENGINE_HOST + "/" + SL.config.STREAM_ENGINE_LIVE_NAMESPACE;
            this.log("socket attempting to connect to", t), this.socket = io.connect(t, {reconnectionDelayMax: 1e4}), this.socket.on("connect", this.onSocketConnected.bind(this)), this.socket.on("connect_error", this.onSocketDisconnected.bind(this)), this.socket.on("disconnect", this.onSocketDisconnected.bind(this)), this.socket.on("reconnect_attempt", this.onSocketReconnectAttempt.bind(this)), this.socket.on("reconnect_failed", this.onSocketReconnectFailed.bind(this)), this.socket.on("message", this.onSocketStateMessage.bind(this)), this.socket.on("subscribers", this.onSocketSubscribersMessage.bind(this))
        }
    }, publish: function (t, e) {
        if (this.publishable) {
            var i = this.options.reveal.getState();
            if (i.publisher_id = this.options.publisherID, i = $.extend(i, e), this.socketIsDisconnected === !0)return this.publishAfterReconnect = !0, void this.log("publish stalled while disconnected");
            this.log("publish", i.publisher_id), $.ajax({
                url: "/api/v1/decks/" + this.options.deckID + "/stream.json",
                type: "PUT",
                data: {state: JSON.stringify(i)},
                success: t
            })
        }
    }, log: function () {
        if (this.debugMode && "function" == typeof console.log.apply) {
            var t = "Stream (" + (this.options.publisher ? "publisher" : "subscriber") + "):", e = [t].concat(Array.prototype.slice.call(arguments));
            console.log.apply(console, e)
        }
    }, setState: function (t, e) {
        this.publishable = !1, e && $(".reveal").addClass("no-transition"), this.options.reveal.setState(t), this.stateChanged.dispatch(t), setTimeout(function () {
            this.publishable = !0, e && $(".reveal").removeClass("no-transition")
        }.bind(this), 1)
    }, setStatus: function (t) {
        this.status !== t && (this.status = t, this.statusChanged.dispatch(this.status))
    }, getRetryStartTime: function () {
        return this.retryStartTime
    }, isPublisher: function () {
        return this.options.publisher
    }, showConnectionError: function () {
        this.disconnectTimeout = setTimeout(function () {
            this.connectionError || (this.connectionError = new SL.components.RetryNotification("Lost connection to server"), this.connectionError.startCountdown(0), this.connectionError.destroyed.add(function () {
                this.connectionError = null
            }.bind(this)), this.connectionError.retryClicked.add(function () {
                this.connectionError.startCountdown(0), this.socket.io.close(), this.socket.io.open()
            }.bind(this)))
        }.bind(this), 1e4)
    }, hideConnectionError: function () {
        clearTimeout(this.disconnectTimeout), this.connectionError && this.connectionError.hide()
    }, onSocketStateMessage: function (t) {
        try {
            var e = JSON.parse(t.data);
            e.publisher_id != this.options.publisherID && (this.log("sync", "from: " + e.publisher_id, "to: " + this.options.publisherID), this.setState(e))
        } catch (i) {
            this.log("unable to parse streamed deck state as JSON.")
        }
        this.setStatus(SL.helpers.StreamLive.STATUS_NONE)
    }, onSocketSubscribersMessage: function (t) {
        this.subscribersChanged.dispatch(t.subscribers)
    }, onSocketConnected: function () {
        this.log("socket connected"), this.socket.emit("subscribe", {
            deck_id: this.options.deckID,
            publisher: this.options.publisher
        }), this.socketIsDisconnected === !0 && (this.socketIsDisconnected = !1, this.log("socket connection regained"), this.setStatus(SL.helpers.StreamLive.STATUS_NONE), this.publishAfterReconnect === !0 && (this.publishAfterReconnect = !1, this.log("publishing stalled state"), this.publish())), this.hideConnectionError()
    }, onSocketReconnectAttempt: function () {
        this.connectionError && this.connectionError.startCountdown(this.socket.io.backoff.duration())
    }, onSocketReconnectFailed: function () {
        this.connectionError && this.connectionError.disableCountdown()
    }, onSocketDisconnected: function () {
        this.socketIsDisconnected === !1 && (this.socketIsDisconnected = !0, this.log("socket connection lost"), this.setStatus(SL.helpers.StreamLive.STATUS_CONNECTION_LOST), this.options.showErrors && this.showConnectionError())
    }
}),SL.helpers.StreamLive.CONNECTION_RETRY_INTERVAL = 2e4,SL.helpers.StreamLive.STATUS_NONE = "",SL.helpers.StreamLive.STATUS_CONNECTION_LOST = "connection_lost",SL.helpers.StreamLive.STATUS_WAITING_FOR_PUBLISHER = "waiting_for_publisher",SL.helpers.ThemeController = {
    paint: function (t, e) {
        e = e || {};
        var i = $(".reveal-viewport");
        if (0 === i.length || "undefined" == typeof window.Reveal)return !1;
        if (this.cleanup(), i.addClass("theme-font-" + t.get("font")), i.addClass("theme-color-" + t.get("color")), Reveal.configure($.extend({
                center: t.get("center"),
                rolling_links: t.get("rolling_links"),
                transition: t.get("transition"),
                backgroundTransition: t.get("background_transition")
            }, e)), t.get("html")) {
            var n = $("#theme-html-output");
            n.length ? n.html(t.get("html")) : $(".reveal").append('<div id="theme-html-output">' + t.get("html") + "</div>")
        } else $("#theme-html-output").remove();
        if ("string" == typeof e.globalCSS)if (e.globalCSS.length) {
            var s = $("#global-css-output");
            s.length ? s.html(e.globalCSS) : $("head").append('<style id="global-css-output">' + e.globalCSS + "</style>")
        } else $("#global-css-output").remove();
        if (t.get("css")) {
            var o = $("#theme-css-output");
            o.length ? o.html(t.get("css")) : $("head").append('<style id="theme-css-output">' + t.get("css") + "</style>")
        } else $("#theme-css-output").remove();
        if (e.js !== !1)if (t.get("js")) {
            var a = $("#theme-js-output");
            a.text() !== t.get("js") && (a.remove(), $("body").append('<script id="theme-js-output">' + t.get("js") + "</script>"))
        } else $("#theme-js-output").remove();
        SL.util.deck.sortInjectedStyles(), SL.fonts.loadDeckFont(t.get("font"))
    }, cleanup: function () {
        var t = $(".reveal-viewport"), e = $(".reveal");
        t.attr("class", t.attr("class").replace(/theme\-(font|color)\-([a-z0-9-])*/gi, "")), SL.config.THEME_TRANSITIONS.forEach(function (t) {
            e.removeClass(t.id)
        })
    }
},SL.popup = {
    items: [], singletons: [], open: function (t, e) {
        for (var i, n = 0; n < SL.popup.singletons.length; n++)if (SL.popup.singletons[n].factory === t) {
            i = SL.popup.singletons[n].instance;
            break
        }
        return i || (i = new t(e), i.isSingleton() && SL.popup.singletons.push({
            factory: t,
            instance: i
        })), i.open(e), SL.popup.items.push({instance: i, factory: t}), $("html").addClass("popup-open"), i
    }, openOne: function (t, e) {
        for (var i = 0; i < SL.popup.items.length; i++)if (t === SL.popup.items[i].factory)return SL.popup.items[i].instance;
        return this.open(t, e)
    }, close: function (t) {
        SL.popup.items.concat().forEach(function (e) {
            t && t !== e.factory || e.instance.close(!0)
        })
    }, isOpen: function (t) {
        for (var e = 0; e < SL.popup.items.length; e++)if (!t || t === SL.popup.items[e].factory)return !0;
        return !1
    }, unregister: function (t) {
        for (var e = 0; e < SL.popup.items.length; e++)SL.popup.items[e].instance === t && (removedValue = SL.popup.items.splice(e, 1), e--);
        0 === SL.popup.items.length && $("html").removeClass("popup-open")
    }
},SL("components.popup").Popup = Class.extend({
    WINDOW_PADDING: .01,
    USE_ABSOLUTE_POSITIONING: SL.util.device.IS_PHONE || SL.util.device.IS_TABLET,
    init: function (t) {
        this.options = $.extend({
            title: "",
            titleItem: "",
            header: !0,
            headerActions: [{label: "Close", className: "grey", callback: this.close.bind(this)}],
            width: "auto",
            height: "auto",
            singleton: !1,
            closeOnEscape: !0,
            closeOnClickOutside: !0
        }, t), this.options.additionalHeaderActions && (this.options.headerActions = this.options.additionalHeaderActions.concat(this.options.headerActions)), this.render(), this.bind(), this.layout()
    },
    render: function () {
        this.domElement = $('<div class="sl-popup" data-id="' + this.TYPE + '">'), this.domElement.appendTo(document.body), this.innerElement = $('<div class="sl-popup-inner">'), this.innerElement.appendTo(this.domElement), this.options.header && this.renderHeader(), this.bodyElement = $('<div class="sl-popup-body">'), this.bodyElement.appendTo(this.innerElement)
    },
    renderHeader: function () {
        this.headerElement = $(['<header class="sl-popup-header">', '<h3 class="sl-popup-header-title">' + this.options.title + "</h3>", "</header>"].join("")), this.headerElement.appendTo(this.innerElement), this.headerTitleElement = this.headerElement.find(".sl-popup-header-title"), this.options.titleItem && (this.headerTitleElement.append('<span class="sl-popup-header-title-item"></span>'), this.headerTitleElement.find(".sl-popup-header-title-item").text(this.options.titleItem)), this.options.headerActions && this.options.headerActions.length && (this.headerActionsElement = $('<div class="sl-popup-header-actions">').appendTo(this.headerElement), this.options.headerActions.forEach(function (t) {
            "divider" === t.type ? $('<div class="divider"></div>').appendTo(this.headerActionsElement) : $('<button class="button l ' + t.className + '">' + t.label + "</button>").appendTo(this.headerActionsElement).on("vclick", function (e) {
                t.callback(e), e.preventDefault()
            })
        }.bind(this)))
    },
    bind: function () {
        this.onKeyDown = this.onKeyDown.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.onBackgroundClicked = this.onBackgroundClicked.bind(this), this.domElement.on("vclick", this.onBackgroundClicked)
    },
    layout: function () {
        if (this.innerElement.css({width: this.options.width, height: this.options.height}), this.options.height) {
            var t = this.headerElement ? this.headerElement.outerHeight() : 0;
            this.headerElement && "number" == typeof this.options.height ? this.bodyElement.css("height", this.options.height - t) : this.bodyElement.css("height", "auto");
            var e = window.innerHeight;
            this.bodyElement.css("max-height", e - t - e * this.WINDOW_PADDING * 2)
        }
        if (this.headerElement) {
            var i = this.headerElement.width(), n = this.headerActionsElement.outerWidth();
            this.headerTitleElement.css("max-width", i - n - 30)
        }
        if (this.USE_ABSOLUTE_POSITIONING) {
            var s = $(window);
            this.domElement.css({
                position: "absolute",
                height: Math.max($(window).height(), $(document).height())
            }), this.innerElement.css({
                position: "absolute",
                transform: "none",
                top: s.scrollTop() + (s.height() - this.innerElement.outerHeight()) / 2,
                left: s.scrollLeft() + (s.width() - this.innerElement.outerWidth()) / 2,
                maxWidth: s.width() - window.innerWidth * this.WINDOW_PADDING * 2
            })
        }
    },
    open: function (t) {
        this.domElement.appendTo(document.body), clearTimeout(this.closeTimeout), this.closeTimeout = null, this.options = $.extend(this.options, t), SL.keyboard.keydown(this.onKeyDown), $(window).on("resize", this.onWindowResize), setTimeout(function () {
            this.domElement.addClass("visible")
        }.bind(this), 1)
    },
    close: function (t) {
        this.closeTimeout || (t ? this.closeConfirmed() : this.checkUnsavedChanges(this.closeConfirmed.bind(this)))
    },
    closeConfirmed: function () {
        SL.keyboard.release(this.onKeyDown), $(window).off("resize", this.onWindowResize), this.domElement.removeClass("visible"), SL.popup.unregister(this), this.closeTimeout = setTimeout(function () {
            this.domElement.detach(), this.isSingleton() || this.destroy()
        }.bind(this), 500)
    },
    checkUnsavedChanges: function (t) {
        t()
    },
    isSingleton: function () {
        return this.options.singleton
    },
    onBackgroundClicked: function (t) {
        $(t.target).is(this.domElement) && (this.options.closeOnClickOutside && this.close(), t.preventDefault())
    },
    onWindowResize: function () {
        this.layout()
    },
    onKeyDown: function (t) {
        return 27 === t.keyCode ? (this.options.closeOnEscape && this.close(), !1) : !0
    },
    destroy: function () {
        SL.popup.unregister(this), this.options = null, this.domElement.remove()
    }
}),SL("components.popup").DeckOutdated = SL.components.popup.Popup.extend({
    TYPE: "deck-outdated", init: function (t) {
        this._super($.extend({
            title: "Newer version available",
            width: 500,
            closeOnClickOutside: !1,
            headerActions: [{label: "Ignore", className: "outline", callback: this.close.bind(this)}, {
                label: "Reload",
                className: "positive",
                callback: this.onReloadClicked.bind(this)
            }]
        }, t))
    }, render: function () {
        this._super(), this.bodyElement.html(["<p>A more recent version of this presentation is available on the server. This can happen when the presentation is saved from another browser or device.</p>", "<p>We recommend reloading the page to get the latest version. If you're sure your local changes are the latest, please ignore this message.</p>"].join(""))
    }, onReloadClicked: function () {
        window.location.reload()
    }, destroy: function () {
        this._super()
    }
}),SL("components.popup").EditHTML = SL.components.popup.Popup.extend({
    TYPE: "edit-html", init: function (t) {
        this._super($.extend({
            title: "Edit HTML",
            width: 1200,
            height: 750,
            headerActions: [{label: "Cancel", className: "outline", callback: this.close.bind(this)}, {
                label: "Save",
                className: "positive",
                callback: this.saveAndClose.bind(this)
            }]
        }, t)), this.saved = new signals.Signal
    }, render: function () {
        this._super(), this.bodyElement.html('<div id="ace-html" class="editor"></div>'), this.editor && "function" == typeof this.editor.destroy && (this.editor.destroy(), this.editor = null);
        try {
            this.editor = ace.edit("ace-html"), this.editor.setTheme("ace/theme/monokai"), this.editor.setDisplayIndentGuides(!0), this.editor.setShowPrintMargin(!1), this.editor.getSession().setUseWrapMode(!0), this.editor.getSession().setMode("ace/mode/html")
        } catch (t) {
            console.log("An error occurred while initializing the Ace editor.")
        }
        this.editor.env.document.setValue(this.options.html), this.editor.focus()
    }, saveAndClose: function () {
        this.saved.dispatch(this.getHTML()), this.close(!0)
    }, checkUnsavedChanges: function (t) {
        this.getHTML() === this.options.html || this.cancelPrompt ? t() : (this.cancelPrompt = SL.prompt({
            title: "Discard unsaved changes?",
            type: "select",
            data: [{html: "<h3>Cancel</h3>"}, {
                html: "<h3>Discard</h3>",
                selected: !0,
                className: "negative",
                callback: t
            }]
        }), this.cancelPrompt.destroyed.add(function () {
            this.cancelPrompt = null
        }.bind(this)))
    }, getHTML: function () {
        return this.editor.env.document.getValue()
    }, destroy: function () {
        this.editor && "function" == typeof this.editor.destroy && (this.editor.destroy(), this.editor = null), this.saved && (this.saved.dispose(), this.saved = null), this._super()
    }
}),SL("components.popup").EditSlideHTML = SL.components.popup.EditHTML.extend({
    TYPE: "edit-slide-html",
    init: function (t) {
        SL.util.user.canUseCustomCSS() && (t.additionalHeaderActions = [{
            label: "Slide classes",
            className: "outline",
            callback: this.onSlideClassesClicked.bind(this)
        }, {type: "divider"}]), t.html = SL.util.html.indent(SL.editor.controllers.Serialize.getSlideAsString(t.slide, {
            inner: !0,
            lazy: !1,
            exclude: ".math-output"
        })), this._super(t)
    },
    readSlideClasses: function () {
        return this.options.slide.className.split(" ").filter(function (t) {
            return -1 === SL.config.RESERVED_SLIDE_CLASSES.indexOf(t)
        }).join(" ")
    },
    writeSlideClasses: function (t) {
        t = t || "", t = t.trim().replace(/\s{2,}/g, " ");
        var e = this.options.slide.className.split(" ").filter(function (t) {
            return -1 !== SL.config.RESERVED_SLIDE_CLASSES.indexOf(t)
        });
        e = e.concat(t.split(" ")), this.options.slide.className = e.join(" ")
    },
    onSlideClassesClicked: function (t) {
        var e = SL.prompt({
            anchor: t.currentTarget,
            title: "Slide classes",
            subtitle: "Specify class names which will be added to the slide wrapper. Useful for targeting from the CSS editor.",
            type: "input",
            confirmLabel: "Save",
            data: {value: this.readSlideClasses(), placeholder: "Classes...", width: 400, confirmBeforeDiscard: !0}
        });
        e.confirmed.add(function (t) {
            this.writeSlideClasses(t)
        }.bind(this))
    }
}),SL("components.popup").InsertSnippet = SL.components.popup.Popup.extend({
    TYPE: "insert-snippet", init: function (t) {
        this._super($.extend({
            title: "Insert",
            titleItem: '"' + t.snippet.get("title") + '"',
            width: 500,
            headerActions: [{label: "Cancel", className: "outline", callback: this.close.bind(this)}, {
                label: "Insert",
                className: "positive",
                callback: this.insertAndClose.bind(this)
            }]
        }, t)), this.snippetInserted = new signals.Signal
    }, render: function () {
        this._super(), this.variablesElement = $('<div class="variables sl-form"></div>'), this.variablesElement.appendTo(this.bodyElement), this.variables = this.options.snippet.getTemplateVariables(), this.variables.forEach(function (t) {
            var e = $(['<div class="unit">', "<label>" + t.label + "</label>", '<input type="text" value="' + t.defaultValue + '">', "</div>"].join("")).appendTo(this.variablesElement);
            e.find("input").data("variable", t)
        }.bind(this)), this.variablesElement.find("input").first().focus().select()
    }, insertAndClose: function () {
        this.variablesElement.find("input").each(function (t, e) {
            e = $(e), e.data("variable").value = e.val()
        }), this.snippetInserted.dispatch(this.options.snippet.templatize(this.variables)), this.close()
    }, onKeyDown: function (t) {
        return 13 === t.keyCode ? (this.insertAndClose(), !1) : this._super(t)
    }, destroy: function () {
        this.snippetInserted.dispose(), this._super()
    }
}),SL("components.popup").Revision = SL.components.popup.Popup.extend({
    TYPE: "revision", init: function (t) {
        this._super($.extend({
            revisionURL: null,
            revisionTimeAgo: null,
            title: "Revision",
            titleItem: "from " + t.revisionTimeAgo,
            width: 900,
            height: 700,
            headerActions: [{
                label: "Open in new tab",
                className: "outline",
                callback: this.onOpenExternalClicked.bind(this)
            }, {label: "Restore", className: "grey", callback: this.onRestoreClicked.bind(this)}, {
                label: "Close",
                className: "grey",
                callback: this.close.bind(this)
            }]
        }, t)), this.restoreRequested = new signals.Signal, this.externalRequested = new signals.Signal
    }, render: function () {
        this._super(), this.bodyElement.html(['<div class="spinner centered"></div>', '<div class="deck"></div>'].join("")), this.bodyElement.addClass("loading"), SL.util.html.generateSpinners();
        var t = $("<iframe>", {
            src: this.options.revisionURL, load: function () {
                this.bodyElement.removeClass("loading")
            }.bind(this)
        });
        t.appendTo(this.bodyElement.find(".deck"))
    }, onRestoreClicked: function (t) {
        this.restoreRequested.dispatch(t)
    }, onOpenExternalClicked: function (t) {
        this.externalRequested.dispatch(t)
    }, destroy: function () {
        this.bodyElement.find(".deck iframe").attr("src", ""), this.bodyElement.find(".deck").empty(), this.restoreRequested.dispose(), this.externalRequested.dispose(), this._super()
    }
}),SL("components.popup").SessionExpired = SL.components.popup.Popup.extend({
    TYPE: "session-expired",
    init: function (t) {
        this._super($.extend({
            title: "Session expired",
            width: 500,
            closeOnEscape: !1,
            closeOnClickOutside: !1,
            headerActions: [{
                label: "Ignore",
                className: "outline negative",
                callback: this.close.bind(this)
            }, {label: "Retry", className: "positive", callback: this.onRetryClicked.bind(this)}]
        }, t))
    },
    render: function () {
        this._super(), this.bodyElement.html(["<p>You are no longer signed in to Slides. This can happen when you leave the page idle for too long, log out in a different tab or go offline. To continue please:</p>", "<ol>", '<li><a href="' + SL.routes.SIGN_IN + '" target="_blank" style="text-decoration: underline;">Sign in</a> to Slides from another browser tab.</li>', "<li>Come back to this tab and press the 'Retry' button.</li>", "</ol>"].join(""))
    },
    onRetryClicked: function () {
        SL.editor && 1 === SL.editor.Editor.VERSION ? SL.view.checkLogin(!0) : SL.session.check()
    },
    destroy: function () {
        this._super()
    }
}),SL("components.collab").Collaboration = Class.extend({
    init: function (t) {
        this.options = $.extend({
            container: document.body,
            editor: !1,
            fixed: !1,
            coverPage: !1
        }, t), this.loaded = new signals.Signal, this.enabled = new signals.Signal, this.expanded = new signals.Signal, this.collapsed = new signals.Signal, this.flags = {
            expanded: !1,
            enabled: !1,
            connected: !1
        }, this.commentsWhileHidden = [], this.commentsWhileCollapsed = [], this.bind(), this.render(), this.setEnabled(!!SLConfig.deck.collaborative), this.options.fixed && (SL.util.skipCSSTransitions($(this.domElement), 1), this.domElement.addClass("fixed"), this.expand())
    }, bind: function () {
        this.onKeyDown = this.onKeyDown.bind(this), this.onSlideChanged = this.onSlideChanged.bind(this), this.onStreamMessage = this.onStreamMessage.bind(this), this.onStreamStatusChanged = this.onStreamStatusChanged.bind(this), this.onSocketReconnecting = this.onSocketReconnecting.bind(this);
        var t = $(".reveal .slides section:not(.stack)").length, e = 1e3 * Math.ceil(t / 4);
        this.onStreamDeckContentChanged = $.throttle(this.onStreamDeckContentChanged, e)
    }, render: function () {
        this.domElement = $('<div class="sl-collab loading">'), this.domElement.appendTo(this.options.container), this.options.coverPage && !this.options.fixed && (this.coverElement = $('<div class="sl-collab-cover">'), this.coverElement.on("vclick", this.collapse.bind(this)), this.coverElement.appendTo(this.domElement)), this.innerElement = $('<div class="sl-collab-inner">'), this.innerElement.appendTo(this.domElement), this.bodyElement = $('<div class="sl-collab-body">'), this.bodyElement.appendTo(this.innerElement), this.overlayElement = $('<div class="sl-collab-overlay">'), this.overlayElement.appendTo(this.innerElement), this.overlayContent = $('<div class="sl-collab-overlay-inner">'), this.overlayContent.appendTo(this.overlayElement), this.menu = new SL.components.collab.Menu(this), this.menu.appendTo(this.domElement)
    }, load: function () {
        this.usersCollection || (this.showLoadingOverlay(), this.usersCollection = new SL.collections.collab.DeckUsers, this.usersCollection.load().then(this.afterLoad.bind(this), function () {
            this.usersCollection = null, this.showErrorOverlay("Failed to load collaborators", this.load.bind(this))
        }.bind(this)))
    }, afterLoad: function () {
        return this.usersCollection.isEmpty() ? void this.showErrorOverlay("No collaborators found for this deck.") : (this.usersCollection.replaced.add(function () {
            this.cachedCurrentDeckUser = null
        }.bind(this)), void this.connect())
    }, connect: function () {
        return this.hasBoundStreamEvents || (this.hasBoundStreamEvents = !0, SL.helpers.StreamEditor.singleton().statusChanged.add(this.onStreamStatusChanged), SL.helpers.StreamEditor.singleton().messageReceived.add(this.onStreamMessage), SL.helpers.StreamEditor.singleton().reconnecting.add(this.onSocketReconnecting)), this.isConnected() ? void 0 : (this.showLoadingOverlay(), SL.helpers.StreamEditor.singleton().connect().then(function () {
        }, function () {
            this.onSocketConnectionFailed()
        }.bind(this)))
    }, afterConnect: function () {
        this.isConnected() || (this.flags.connected = !0, this.renderContent(), SL.activity.register(SL.config.COLLABORATION_IDLE_TIMEOUT, this.onUserActive.bind(this), this.onUserInactive.bind(this)), SL.visibility.changed.add(this.onVisibilityChanged.bind(this)), this.hideOverlay(), this.isEnabled() ? this.comments.focus() : (this.setEnabled(!0), this.users.showInvitePrompt(this.menu.getPrimaryButton()), this.users.inviteSent.addOnce(this.expand.bind(this))), this.handover && this.handover.refresh(), this.isInEditor() && this.currentUserIsEditing() ? this.reloadCurrentUser().then(function () {
            this.currentUserIsEditing() ? this.finishLoading() : this.redirectToReview()
        }.bind(this), function () {
            this.finishLoading()
        }.bind(this)) : this.isInEditor() && !this.currentUserIsEditing() ? this.redirectToReview() : this.finishLoading())
    }, finishLoading: function () {
        this.domElement.removeClass("loading"), this.loaded.dispatch()
    }, reload: function () {
        this.isConnected() && (this.showLoadingOverlay("Reloading..."), this.usersCollection.load().then(function () {
            this.redirectToReviewUnlessEditor() === !1 && (this.users.renderUsers(), SL.helpers.StreamEditor.singleton().emit("broadcast-all-user-states"), this.comments && this.comments.reload(), this.handover && this.handover.refresh(), this.hideOverlay())
        }.bind(this), function () {
            this.showErrorOverlay("Failed to load collaborators", this.reload.bind(this))
        }.bind(this)))
    }, reloadCurrentUser: function () {
        return new Promise(function (t, e) {
            $.ajax({
                type: "GET",
                url: SL.config.AJAX_DECKUSER_READ(SL.current_deck.get("id"), SL.current_user.get("id")),
                context: this
            }).done(function (e) {
                var i = this.usersCollection.getByProperties({user_id: e.user_id});
                i && i.setAll(e), t()
            }).fail(e)
        }.bind(this))
    }, renderContent: function () {
        this.users = new SL.components.collab.Users(this, {users: this.usersCollection}), this.users.appendTo(this.menu.innerElement), this.comments = new SL.components.collab.Comments(this, {users: this.usersCollection}), this.comments.appendTo(this.bodyElement), this.notifications = new SL.components.collab.Notifications(this, {users: this.usersCollection}), this.notifications.appendTo(this.domElement), this.isInEditor() || (this.handover = new SL.components.collab.Handover(this, {users: this.usersCollection}), this.handover.appendTo(this.options.container))
    }, expand: function () {
        this.flags.expanded = !0, this.domElement.addClass("expanded"), SL.keyboard.keydown(this.onKeyDown), this.expanded.dispatch()
    }, collapse: function () {
        this.options.fixed || (this.commentsWhileCollapsed.length = 0, this.flags.expanded = !1, this.domElement.removeClass("expanded"), SL.keyboard.release(this.onKeyDown), this.collapsed.dispatch())
    }, toggle: function () {
        this.isExpanded() ? this.collapse() : this.expand()
    }, isExpanded: function () {
        return this.flags.expanded
    }, setEnabled: function (t) {
        this.flags.enabled = t, this.domElement.toggleClass("enabled", t), t ? (Reveal.addEventListener("slidechanged", this.onSlideChanged), this.enabled.dispatch()) : Reveal.removeEventListener("slidechanged", this.onSlideChanged)
    }, isEnabled: function () {
        return this.flags.enabled
    }, isConnected: function () {
        return this.flags.connected
    }, makeDeckCollaborative: function () {
        this.isEnabled() || $.ajax({
            type: "POST",
            url: SL.config.AJAX_MAKE_DECK_COLLABORATIVE(SL.current_deck.get("id")),
            context: this
        }).done(function () {
            SLConfig.deck.collaborative = !0, this.load()
        }).fail(function () {
            this.showErrorOverlay("Failed to enable collaboration", this.makeDeckCollaborative.bind(this))
        })
    }, showHandoverRequestReceived: function (t) {
        var e = "handover-" + t.get("user_id"), i = $(["<div>", "<p><strong>" + t.get("username") + "</strong> would like to edit but only on person can edit at a time.</p>", '<button class="button half-width approve-button grey">Let them edit</button>', '<button class="button half-width deny-button outline">Dismiss</button>', "</div>"].join(""));
        i.find(".approve-button").on("vclick", function () {
            this.becomeEditor(t), this.notifications.hide(e)
        }.bind(this)), i.find(".deny-button").on("vclick", function () {
            SL.helpers.StreamEditor.singleton().broadcast({
                type: "collaboration:handover-denied",
                user_id: t.get("user_id"),
                denied_by_user_id: SL.current_user.get("id")
            }), this.notifications.hide(e)
        }.bind(this)), this.notifications.show(i, {id: e, optional: !1, sender: t})
    }, showHandoverRequestPending: function (t) {
        var e = "handover-pending", i = $(["<div>", "<p>You have asked to edit this deck. Waiting to hear back from <strong>" + t.getDisplayName() + "</strong>...</p>", '<button class="button outline cancel-button">Cancel</button>', "</div>"].join(""));
        i.find(".cancel-button").on("vclick", function (t) {
            t.preventDefault(), SL.helpers.StreamEditor.singleton().broadcast({
                type: "collaboration:handover-request-canceled",
                user_id: SL.current_user.get("id")
            }), this.notifications.hide(e)
        }.bind(this)), this.notifications.show(i, {id: e, optional: !1, icon: "i-question-mark"})
    }, showLoadingOverlay: function (t) {
        t = t || "Loading...", this.overlayElement.addClass("visible"), this.overlayContent.empty().html('<p class="message">' + t + "</p>"), this.flashOverlay()
    }, showErrorOverlay: function (t, e) {
        this.overlayElement.addClass("visible"), this.overlayContent.empty().html(['<div class="exclamation">!</div>', '<p class="message">' + t + "</p>", '<button class="button outline">Try again</button>'].join("")), this.overlayContent.find("button").on("vclick", e), this.flashOverlay()
    }, flashOverlay: function () {
        clearTimeout(this.flashOverlayTimeout), this.overlayContent.addClass("flash"), this.flashOverlayTimeout = setTimeout(function () {
            this.overlayContent.removeClass("flash")
        }.bind(this), 1e3)
    }, hideOverlay: function () {
        this.overlayElement.removeClass("visible")
    }, updatePageTitle: function () {
        var t = "";
        this.commentsWhileHidden.length && (t += "(" + this.commentsWhileHidden.length + ") "), t += this.isInEditor() ? "Edit: " : "Review: ", t += SL.current_deck.get("title"), document.title = t
    }, currentUserIsEditing: function () {
        var t = this.getCurrentDeckUser();
        return !(!t || !t.isEditing())
    }, getCurrentDeckUser: function () {
        return !this.cachedCurrentDeckUser && this.usersCollection && (this.cachedCurrentDeckUser = this.usersCollection.getByUserID(SL.current_user.get("id"))), this.cachedCurrentDeckUser
    }, getCollapsedWidth: function () {
        return 60
    }, becomeEditor: function (t) {
        return t = t || this.getCurrentDeckUser(), new Promise(function (e, i) {
            $.ajax({
                type: "POST",
                url: SL.config.AJAX_DECKUSER_BECOME_EDITOR(SL.current_deck.get("id"), t.get("user_id")),
                context: this
            }).done(function () {
                this.usersCollection.setEditing(t.get("user_id")), e(), this.currentUserIsEditing() ? this.redirectToEdit() : this.redirectToReview()
            }).fail(function () {
                SL.notify("Failed to change editors"), i()
            })
        }.bind(this))
    }, isInEditor: function () {
        return this.options.editor
    }, redirectToEdit: function () {
        this.isInEditor() || (SL.helpers.PageLoader.show({message: "Loading"}), window.location = SL.routes.DECK_EDIT(SL.current_deck.get("user").username, SL.current_deck.get("slug")))
    }, redirectToReview: function (t) {
        this.isInEditor() && (SL.helpers.PageLoader.show({message: t || "Loading"}), SL.view.redirect(SL.routes.DECK_REVIEW(SL.current_deck.get("user").username, SL.current_deck.get("slug")), !0))
    }, redirectToReviewUnlessEditor: function () {
        if (this.isInEditor() && !this.currentUserIsEditing()) {
            var t = 5, e = "Someone else started editing.<br>Redirecting in " + t + " seconds...";
            return SL.helpers.PageLoader.show({message: e}), setTimeout(function () {
                this.redirectToReview(e)
            }.bind(this), 1e3 * t), !0
        }
        return !1
    }, onKeyDown: function (t) {
        return 27 === t.keyCode ? (this.collapse(), !1) : !0
    }, onSlideChanged: function (t) {
        var e = Reveal.getCurrentSlide().getAttribute("data-id");
        e && SL.helpers.StreamEditor.singleton().emit("slide-change", e), this.comments && this.isExpanded() && this.comments.onSlideChanged(t), this.users && this.users.layout()
    }, onStreamStatusChanged: function (t) {
        t === SL.helpers.StreamEditor.STATUS_CONNECTED ? this.onSocketConnected() : t === SL.helpers.StreamEditor.STATUS_DISCONNECTED ? this.onSocketDisconnected() : t === SL.helpers.StreamEditor.STATUS_RECONNECT_FAILED ? this.onSocketReconnectFailed() : t === SL.helpers.StreamEditor.STATUS_RECONNECTED && this.onSocketReconnected()
    }, onStreamMessage: function (t) {
        if (t) {
            var e = t.type.split(":")[0], i = t.type.split(":")[1];
            "collaboration" === e && ("comment-added" === i ? this.onStreamCommentAdded(t) : "comment-updated" === i ? this.onStreamCommentUpdated(t) : "comment-removed" === i ? this.onStreamCommentRemoved(t) : "user-typing" === i ? this.onStreamUserTyping(t) : "user-typing-stopped" === i ? this.onStreamUserTypingStopped(t) : "user-added" === i ? this.onStreamUserAdded(t) : "user-updated" === i ? this.onStreamUserUpdated(t) : "user-removed" === i ? this.onStreamUserRemoved(t) : "presence-changed" === i ? this.onStreamPresenceChanged(t) : "editor-changed" === i ? this.onStreamEditorChanged(t) : "handover-requested" === i ? this.onStreamHandoverRequested(t) : "handover-request-canceled" === i ? this.onStreamHandoverRequestCanceled(t) : "handover-denied" === i ? this.onStreamHandoverDenied(t) : "deck-content-changed" === i ? this.onStreamDeckContentChanged(t) : "deck-settings-changed" === i && this.onStreamDeckSettingsChanged(t)), this.redirectToReviewUnlessEditor()
        }
    }, onStreamCommentAdded: function (t) {
        this.comments.addCommentFromStream(t.comment) && (this.isExpanded() || (this.commentsWhileCollapsed.push(t.comment.id), this.menu.setUnreadComments(this.commentsWhileCollapsed.length)), SL.visibility.isHidden() && (this.commentsWhileHidden.push(t.comment.id), this.updatePageTitle()))
    }, onStreamCommentUpdated: function (t) {
        this.comments.updateCommentFromStream(t.comment)
    }, onStreamCommentRemoved: function (t) {
        this.comments.removeCommentFromStream(t.comment.id);
        var e = this.commentsWhileCollapsed.indexOf(t.comment.id);
        -1 !== e && (this.commentsWhileCollapsed.splice(e, 1), this.menu.setUnreadComments(this.commentsWhileCollapsed.length))
    }, onStreamUserTyping: function (t) {
        var e = this.usersCollection.getByProperties({user_id: t.user_id});
        e && (e.set("typing", !0), this.comments.refreshTypingIndicators(), clearTimeout(e.typingTimeout), e.typingTimeout = setTimeout(function () {
            e.set("typing", !1), this.comments.refreshTypingIndicators()
        }.bind(this), SL.config.COLLABORATION_RESET_WRITING_TIMEOUT))
    }, onStreamUserTypingStopped: function (t) {
        var e = this.usersCollection.getByProperties({user_id: t.user_id});
        e && (e.set("typing", !1), this.comments.refreshTypingIndicators(), clearTimeout(e.typingTimeout))
    }, onStreamUserAdded: function (t) {
        this.users.addUserFromStream(t.user)
    }, onStreamUserUpdated: function (t) {
        var e = this.usersCollection.getByProperties({user_id: t.user.user_id});
        if (e) {
            var i = e.toJSON();
            e.setAll(t.user), i.active || e.get("active") !== !0 || this.users.renderUser(e), e.get("user_id") === SL.current_user.get("id") && (i.role !== e.get("role") && this.reload(), this.handover && this.handover.refresh())
        }
    }, onStreamUserRemoved: function (t) {
        if (t.user.user_id)if (t.user.user_id === SL.current_user.get("id")) {
            var e = 5, i = "You were removed from this deck.<br>Redirecting in " + e + " seconds...";
            SL.helpers.PageLoader.show({message: i}), setTimeout(function () {
                window.location = SL.routes.USER(SL.current_user.get("username"))
            }.bind(this), 1e3 * e)
        } else this.users.removeUserFromStream(t.user.user_id)
    }, onStreamPresenceChanged: function (t) {
        var e = this.usersCollection.getByProperties({user_id: t.user_id});
        e && (t.status && e.set("status", t.status), t.slide_id && e.set("slide_id", t.slide_id), this.users.refreshPresence(e), e.isOnline() === !1 && (e.get("typing") && (e.set("typing", !1), this.comments.refreshTypingIndicators()), this.notifications.hide("handover-" + t.user_id), e.isEditing() && this.notifications.hide("handover-pending") && this.becomeEditor()), this.handover && this.handover.refresh())
    }, onStreamEditorChanged: function (t) {
        t.user.user_id && (this.usersCollection.setEditing(t.user.user_id), this.currentUserIsEditing() ? this.redirectToEdit() : this.redirectToReview())
    }, onStreamHandoverRequested: function (t) {
        if (this.currentUserIsEditing()) {
            var e = this.usersCollection.getByProperties({user_id: t.user_id});
            e && this.showHandoverRequestReceived(e)
        }
    }, onStreamHandoverRequestCanceled: function (t) {
        this.notifications.hide("handover-" + t.user_id)
    }, onStreamHandoverDenied: function (t) {
        if (SL.current_user.get("id") === t.user_id) {
            var e = this.usersCollection.getByProperties({user_id: t.denied_by_user_id});
            e && (this.notifications.hide("handover-pending"), this.notifications.show("<strong>" + e.getDisplayName() + "</strong> turned down your request to edit. Try again later.", {sender: e}))
        }
    }, onStreamDeckContentChanged: function () {
        this.isInEditor() || (this.reloadDeckContentXHR && this.reloadDeckContentXHR.abort(), this.reloadDeckContentXHR = $.ajax({
            url: SL.config.AJAX_GET_DECK_DATA(SL.current_deck.get("id")),
            type: "GET",
            context: this
        }).done(function (t) {
            var e = t.deck.data;
            this.isInEditor() ? SL.editor.controllers.Markup.replaceHTML(e) : SL.util.deck.replaceHTML(e), this.handover.refreshSlideNumbers(), this.comments.refreshSlideNumbers()
        }.bind(this)).always(function () {
            this.reloadDeckContentXHR = null
        }.bind(this)))
    }, onStreamDeckSettingsChanged: function () {
        this.isInEditor() || (this.reloadDeckSettingsXHR && this.reloadDeckSettingsXHR.abort(), this.reloadDeckSettingsXHR = $.ajax({
            url: SL.config.AJAX_GET_DECK(SL.current_deck.get("id")),
            type: "GET",
            context: this
        }).done(function (t) {
            var e = JSON.parse(JSON.stringify(SLConfig.deck));
            for (var i in t)"object" == typeof t[i] && delete t[i];
            $.extend(SLConfig.deck, t);
            var n = SL.models.Theme.fromDeck(SLConfig.deck);
            SL.helpers.ThemeController.paint(n, {center: !1}), Reveal.configure({
                rtl: SLConfig.deck.rtl,
                loop: SLConfig.deck.should_loop,
                slideNumber: SLConfig.deck.slide_number
            }), SLConfig.deck.theme_id !== e.theme_id && console.warn("Theme changed!"), SLConfig.deck.slug !== e.slug && window.history && "function" == typeof window.history.replaceState && window.history.replaceState(null, SLConfig.deck.title, SL.routes.DECK_REVIEW(SLConfig.deck.user.username, SLConfig.deck.slug) + window.location.hash), SLConfig.deck.title !== e.title && this.updatePageTitle()
        }.bind(this)).always(function () {
            this.reloadDeckSettingsXHR = null
        }.bind(this)))
    }, onUserActive: function () {
        SL.helpers.StreamEditor.singleton().emit("active"), this.notifications.hide("editor-is-idle"), this.notifications.release(), $.post(SL.config.AJAX_DECKUSER_UPDATE_LAST_SEEN_AT(SL.current_deck.get("id")))
    }, onUserInactive: function () {
        SL.helpers.StreamEditor.singleton().emit("idle"), this.currentUserIsEditing() && this.usersCollection.hasMoreThanOnePresentEditor() && (this.notifications.show("You're idle. While away, collaborators are allowed to take over editing.", {
            id: "editor-is-idle",
            optional: !1,
            icon: "i-clock"
        }), this.notifications.hold())
    }, onVisibilityChanged: function () {
        SL.visibility.isVisible() && (this.commentsWhileHidden.length = 0, this.updatePageTitle())
    }, onSocketConnectionFailed: function () {
        this.connectionError || (this.connectionError = new SL.components.RetryNotification('<strong>Sorry, we\u2019re having trouble connecting.</strong><br>If the problem persists, contact us <a href="http://help.slides.com" target="_blank">here</a>.', {type: "negative"}), this.connectionError.startCountdown(0), this.connectionError.destroyed.add(function () {
            this.connectionError = null
        }.bind(this)), this.connectionError.retryClicked.add(function () {
            this.connectionError.startCountdown(0), SL.helpers.StreamEditor.singleton().connect().then(SL.util.noop, SL.util.noop)
        }.bind(this)))
    }, onSocketConnected: function () {
        clearTimeout(this.disconnectTimeout), this.connectionError && this.connectionError.destroy(), this.connectionError && this.connectionError.hide(), this.domElement.removeClass("disconnected"), this.isConnected() ? this.reload() : this.afterConnect()
    }, onSocketDisconnected: function () {
        clearTimeout(this.disconnectTimeout), this.disconnectTimeout = setTimeout(function () {
            this.domElement.addClass("disconnected"), this.comments.blur(), this.users.dismissPrompts(), this.connectionError || (this.connectionError = new SL.components.RetryNotification("Lost connection to server", {type: "negative"}), this.connectionError.startCountdown(0), this.connectionError.destroyed.add(function () {
                this.connectionError = null
            }.bind(this)), this.connectionError.retryClicked.add(function () {
                this.connectionError.startCountdown(0), SL.helpers.StreamEditor.singleton().connect().then(SL.util.noop, SL.util.noop)
            }.bind(this)))
        }.bind(this), 6e3)
    }, onSocketReconnecting: function (t) {
        this.connectionError && this.connectionError.startCountdown(t)
    }, onSocketReconnectFailed: function () {
        this.connectionError && this.connectionError.disableCountdown()
    }, onSocketReconnected: function () {
        clearTimeout(this.disconnectTimeout)
    }, destroy: function () {
        this.menu && this.menu.destroy(), this.users && this.users.destroy(), this.comments && this.comments.destroy(), this.handover && this.handover.destroy(), this.options = null, this.domElement.remove()
    }
}),SL("components.collab").CommentThread = Class.extend({
    init: function (t, e) {
        this.id = t, this.options = e, this.comments = new SL.collections.collab.Comments, this.strings = {
            loadMoreComments: "Load older comments",
            loadingMoreComments: "Loading..."
        }, this.render(), this.bind()
    }, render: function () {
        this.domElement = $('<div class="sl-collab-comment-thread empty"></div>'), this.domElement.attr("data-thread-id", this.id), this.domElement.data("thread", this), this.loadMoreButton = $('<button class="load-more-button">' + this.strings.loadMoreComments + "</button>"), this.loadMoreButton.on("vclick", this.onLoadMoreClicked.bind(this)), this.loadMoreButton.appendTo(this.domElement)
    }, renderComment: function (t, e) {
        if (e = e || {}, !t.rendered) {
            t.rendered = !0;
            var i = this.options.users.getByUserID(t.get("user_id"));
            "undefined" == typeof i && (i = new SL.models.collab.DeckUser({username: "unknown"}));
            var n = moment(t.get("created_at")), s = n.format("h:mm A"), o = n.format("MMM Do") + " at " + n.format("h:mm:ss A"), a = $(['<div class="sl-collab-comment">', '<div class="comment-sidebar">', '<div class="avatar" style="background-image: url(\'' + i.get("thumbnail_url") + "')\" />", "</div>", '<div class="comment-body">', '<span class="author">' + (i ? i.get("username") : "N/A") + "</span>", '<div class="meta">', '<span class="meta-time" data-tooltip="' + o + '">' + s + "</span>", "</div>", '<p class="message"></p>', "</div>", "</div>"].join(""));
            a.data("model", t), this.refreshComment(a), this.refreshSlideNumber(a), SL.util.device.IS_PHONE || SL.util.device.IS_TABLET || this.renderCommentOptions(a, t), t.stateChanged.add(this.onCommentStateChanged.bind(this, a)), e.prepend ? this.domElement.prepend(a) : this.domElement.append(a), this.checkOverflow()
        }
    }, renderCommentOptions: function (t, e) {
        var i = this.getCommentPrivileges(e);
        if (i.canDelete || i.canEdit) {
            var n = $('<button class="button options-button icon disable-when-disconnected"></button>').appendTo(t.find(".comment-sidebar"));
            i.canDelete && i.canEdit ? (n.addClass("i-cog"), n.on("click", this.onCommentOptionsClicked.bind(this, t))) : i.canDelete ? (n.addClass("i-trash-stroke"), n.on("click", this.onDeleteComment.bind(this, t))) : i.canEdit && (n.addClass("i-i-pen-alt2"), n.on("click", this.onEditComment.bind(this, t)))
        }
    }, refreshComment: function (t) {
        if (t) {
            var e = t.data("model");
            e && (t.find(".message").text(e.get("message")), t.attr("data-id", e.get("id")), t.attr("data-state", e.getState()))
        }
    }, refreshCommentByID: function (t) {
        this.refreshComment(this.getCommentByID(t))
    }, refreshSlideNumbers: function () {
        this.options.slideNumbers && this.domElement.find(".sl-collab-comment").each(function (t, e) {
            this.refreshSlideNumber($(e))
        }.bind(this))
    }, refreshSlideNumber: function (t) {
        if (this.options.slideNumbers) {
            var e = SL.util.deck.getSlideNumber(t.data("model").get("slide_hash"));
            if (e) {
                var i = "slide " + e, n = t.find(".meta-slide-number");
                n.length ? n.text(i) : t.find(".meta").prepend('<button class="meta-slide-number" data-tooltip="Click to view slide">' + i + "</button>")
            } else t.find(".meta-slide-number").remove()
        }
    }, appendTo: function (t) {
        this.domElement.appendTo(t)
    }, bind: function () {
        this.comments.loadStarted.add(this.onLoadStarted.bind(this)), this.comments.loadCompleted.add(this.onLoadCompleted.bind(this)), this.comments.loadFailed.add(this.onLoadFailed.bind(this)), this.comments.changed.add(this.onCommentsChanged.bind(this)), this.viewSlideCommentsClicked = new signals.Signal, this.layout = this.layout.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.domElement.delegate(".meta-slide-number", "vclick", this.onSlideNumberClicked.bind(this)), SL.util.dom.preventTouchOverflowScrolling(this.domElement)
    }, show: function (t) {
        t = t || {}, this.getID() === SL.components.collab.Comments.DECK_THREAD ? this.comments.isLoaded() || this.comments.isLoading() ? (this.refresh(), this.scrollToLatestComment()) : this.load() : this.load(t.slide_hash || Reveal.getCurrentSlide().getAttribute("data-id")), $(window).on("resize", this.onWindowResize)
    }, hide: function () {
        $(window).off("resize", this.onWindowResize)
    }, load: function (t) {
        var e = SL.config.AJAX_COMMENTS_LIST(SL.current_deck.get("id"), t);
        this.slideHash = t, this.domElement.find(".sl-collab-comment").remove(), this.comments.unload(), this.domElement.addClass("empty"), this.comments.load(e).then(SL.util.noop, SL.util.noop)
    }, reload: function () {
        this.getID() === SL.components.collab.Comments.DECK_THREAD ? this.load() : this.load(this.slideHash || Reveal.getCurrentSlide().getAttribute("data-id"))
    }, refresh: function () {
        this.checkIfEmpty(), this.checkOverflow(), this.checkPagination()
    }, layout: function () {
        this.checkOverflow()
    }, checkIfEmpty: function () {
        if (this.comments.isLoaded())if (this.comments.isEmpty()) {
            var t = this.getID() === SL.components.collab.Comments.SLIDE_THREAD ? "No comments on this slide" : "Nothing here yet.<br>Be the first to comment.";
            this.getPlaceholder().html('<div class="icon i-comment-stroke"></div><p>' + t + "</p>")
        } else this.hidePlaceholder(), this.domElement.removeClass("empty")
    }, checkPagination: function () {
        this.loadMoreButton.toggleClass("visible", !this.comments.isLoading() && this.comments.isLoaded() && this.comments.hasNextPage())
    }, checkOverflow: function () {
        this.domElement.toggleClass("overflowing", this.domElement.prop("scrollHeight") > this.domElement.prop("offsetHeight"))
    }, hidePlaceholder: function () {
        this.placeholder && (this.placeholder.remove(), this.placeholder = null)
    }, getCommentPrivileges: function (t) {
        var e = {
            canEdit: !1,
            canDelete: !1
        }, i = this.options.users.getByUserID(SL.current_user.get("id")), n = this.options.users.getByUserID(t.get("user_id"));
        if (n && i) {
            var s = i.get("user_id") === n.get("user_id"), o = i.get("role") === SL.models.collab.DeckUser.ROLE_ADMIN || i.get("role") === SL.models.collab.DeckUser.ROLE_OWNER;
            s ? (e.canEdit = !0, e.canDelete = !0) : o && (e.canDelete = !0)
        }
        return e
    }, scrollToLatestComment: function () {
        this.domElement.scrollTop(this.domElement.prop("scrollHeight"))
    }, scrollToLatestCommentUnlessScrolled: function () {
        return this.getScrollOffset() < 600 ? (this.scrollToLatestComment(), !0) : !1
    }, commentExists: function (t) {
        return this.getComments().getByID(t.id) ? !0 : SL.current_user.get("id") === t.user_id ? this.getTemporaryComments().some(function (e) {
            return e.get("user_id") === t.user_id && e.get("message") === t.message
        }) : !1
    }, getScrollOffset: function () {
        var t = this.domElement.get(0);
        return t.scrollHeight - t.offsetHeight - t.scrollTop
    }, getPlaceholder: function () {
        return this.placeholder || (this.placeholder = $('<div class="placeholder">'), this.placeholder.appendTo(this.domElement)), this.placeholder
    }, getComments: function () {
        return this.comments
    }, getTemporaryComments: function () {
        return this.comments.filter(function (t) {
            return !t.has("id")
        })
    }, getCommentByID: function (t) {
        return this.domElement.find('.sl-collab-comment[data-id="' + t + '"]')
    }, getSlideHash: function () {
        return this.slideHash
    }, getID: function () {
        return this.id
    }, onLoadStarted: function () {
        this.getPlaceholder().html('<div class="spinner centered" data-spinner-color="#999"></div>'), SL.util.html.generateSpinners()
    }, onLoadCompleted: function () {
        this.comments.forEach(this.renderComment.bind(this)), this.refresh(), this.scrollToLatestComment()
    }, onLoadFailed: function () {
        this.getPlaceholder().html('<p class="error">Failed to load comments.</p>')
    }, onWindowResize: function () {
        this.scrollToLatestComment(), this.layout()
    }, onCommentsChanged: function (t, e) {
        t && t.length && t.forEach(this.renderComment.bind(this)), e && e.length && e.forEach(function (t) {
            this.getCommentByID(t.get("id")).remove()
        }.bind(this)), this.refresh()
    }, onCommentStateChanged: function (t, e) {
        var i = e.getState();
        t.attr("data-id", e.get("id")), t.attr("data-state", i), i === SL.models.collab.Comment.STATE_FAILED ? 0 === t.find(".retry").length && (t.append(['<div class="retry">', '<span class="retry-info">Failed to send</span>', '<button class="button outline retry-button">Retry</button>', "</div>"].join("")), t.find(".retry-button").on("click", function () {
            this.comments.retryCreate(e)
        }.bind(this)), this.scrollToLatestCommentUnlessScrolled()) : t.find(".retry").remove()
    }, onCommentOptionsClicked: function (t) {
        var e = new SL.components.Menu({
            anchor: t.find(".options-button"),
            anchorSpacing: 15,
            alignment: "l",
            destroyOnHide: !0,
            options: [{label: "Edit", icon: "pen-alt2", callback: this.onEditComment.bind(this, t)}, {
                label: "Delete",
                icon: "trash-fill",
                callback: this.onDeleteComment.bind(this, t)
            }]
        });
        e.show()
    }, onEditComment: function (t) {
        var e = t.data("model"), i = SL.prompt({
            anchor: t.find(".options-button"),
            alignment: "l",
            title: "Edit comment",
            type: "input",
            confirmLabel: "Save",
            data: {value: e.get("message"), placeholder: "Comment...", multiline: !0}
        });
        i.confirmed.add(function (i) {
            "string" == typeof i && i.trim().length > 0 && (e.set("message", i), e.save(["message"]).done(this.refreshComment.bind(this, t)))
        }.bind(this)), SL.analytics.trackCollaboration("Edit comment")
    }, onDeleteComment: function (t) {
        var e = t.data("model");
        SL.prompt({
            anchor: t.find(".options-button"),
            alignment: "l",
            title: "Are you sure you want to delete this comment?",
            type: "select",
            data: [{html: "<h3>Cancel</h3>"}, {
                html: "<h3>Delete</h3>",
                selected: !0,
                className: "negative",
                callback: function () {
                    this.comments.remove(e), e.destroy()
                }.bind(this)
            }]
        }), SL.analytics.trackCollaboration("Delete comment")
    }, onLoadMoreClicked: function () {
        this.loadMoreButton.prop("disabled", !0).text(this.strings.loadingMoreComments), this.comments.loadNextPage().then(function (t) {
            var e = this.domElement.scrollTop(), i = this.domElement.prop("scrollHeight");
            t.reverse().forEach(function (t) {
                this.renderComment(t, {prepend: !0})
            }.bind(this));
            var n = this.domElement.prop("scrollHeight");
            this.domElement.scrollTop(n - i + e), this.checkPagination()
        }.bind(this)).catch(function () {
            SL.notify("Failed to load comments", "negative")
        }.bind(this)).then(function () {
            this.loadMoreButton.prop("disabled", !1).text(this.strings.loadMoreComments), this.loadMoreButton.prependTo(this.domElement)
        }.bind(this))
    }, onSlideNumberClicked: function (t) {
        var e = $(t.target).closest(".sl-collab-comment");
        e.length && e.data("model") && this.viewSlideCommentsClicked.dispatch(e.data("model").get("slide_hash"))
    }, destroy: function () {
        this.viewSlideCommentsClicked.dispose(), this.domElement.remove()
    }
}),SL("components.collab").Comments = Class.extend({
    init: function (t, e) {
        this.controller = t, this.options = e, this.render(), this.bind(), this.getCurrentThread() || this.showThread(SL.components.collab.Comments.DECK_THREAD), this.refreshCommentInput(), this.refreshCurrentSlide(), this.getCurrentThread().scrollToLatestComment(), this.layout()
    }, render: function () {
        this.domElement = $('<div class="sl-collab-page sl-collab-comments"></div>'), this.renderHeader(), this.bodyElement = $('<div class="sl-collab-page-body sl-collab-comments-body">'), this.bodyElement.appendTo(this.domElement), this.footerElement = $('<footer class="sl-collab-page-footer">'), this.footerElement.appendTo(this.domElement), this.renderThreads(), this.renderCommentForm()
    }, renderHeader: function () {
        this.headerElement = $('<header class="sl-collab-page-header sl-collab-comments-header"></header>'), this.headerElement.appendTo(this.domElement), this.headerElement.html(['<div class="header-tab selected" data-thread-id="deck">All comments</div>', '<div class="header-tab header-tab-slide" data-thread-id="slide">Current slide</div>'].join("")), this.headerElement.find(".header-tab").on("vclick", function (t) {
            this.showThread($(t.currentTarget).attr("data-thread-id")), SL.util.device.IS_PHONE || SL.util.device.IS_TABLET || this.commentInput.focus()
        }.bind(this))
    }, renderThreads: function () {
        this.threads = {}, this.threads.deck = new SL.components.collab.CommentThread(SL.components.collab.Comments.DECK_THREAD, {
            users: this.options.users,
            slideNumbers: !0
        }), this.threads.deck.viewSlideCommentsClicked.add(this.onViewSlideCommentsClicked.bind(this)), this.threads.deck.appendTo(this.bodyElement), this.threads.slide = new SL.components.collab.CommentThread(SL.components.collab.Comments.SLIDE_THREAD, {users: this.options.users}), this.threads.slide.appendTo(this.bodyElement)
    }, renderCommentForm: function () {
        this.commentForm = $('<form action="#" class="sl-collab-comment-form sl-form disable-when-disconnected" novalidate>'), this.commentForm.on("submit", this.onCommentSubmit.bind(this)), this.commentInput = $(SL.util.device.IS_PHONE || SL.util.device.IS_TABLET ? '<input type="text" autocapitalize="sentences" class="comment-input" placeholder="Add a comment..." required maxlength="' + SL.config.COLLABORATION_COMMENT_MAXLENGTH + '" />' : '<textarea class="comment-input" placeholder="Add a comment..." required maxlength="' + SL.config.COLLABORATION_COMMENT_MAXLENGTH + '"></textarea>'), this.commentInput.on("keydown", this.onCommentKeyDown.bind(this)), this.commentInput.on("input", this.onCommentChanged.bind(this)), this.commentInput.on("focus", this.onCommentInputFocus.bind(this)), this.commentInput.appendTo(this.commentForm), this.commentInputFooter = $('<div class="comment-footer"></div>'), this.commentInputFooter.appendTo(this.commentForm), this.commentTyping = $('<div class="comment-typing"></div>'), this.commentTyping.appendTo(this.commentInputFooter), this.commentSubmitButton = $('<input class="comment-submit" type="submit" value="Send" />'), this.commentSubmitButton.on("vclick", this.submitComment.bind(this)), this.commentSubmitButton.appendTo(this.commentInputFooter), this.commentInputFooter.append('<div class="clear"></div>'), this.commentForm.appendTo(this.footerElement)
    }, bind: function () {
        this.layout = this.layout.bind(this), this.startTyping = this.startTyping.bind(this), this.stopTyping = this.stopTyping.bind(this), $(window).on("resize", this.layout), this.controller.expanded.add(this.onCollaborationExpanded.bind(this)), this.controller.isInEditor() && SL.editor.controllers.Markup.slidesChanged.add(this.refreshSlideNumbers.bind(this))
    }, appendTo: function (t) {
        this.domElement.appendTo(t)
    }, layout: function () {
        this.checkOverflow()
    }, reload: function () {
        this.threads.deck.reload();
        var t = this.getCurrentThread();
        t && t.getID() === SL.components.collab.Comments.SLIDE_THREAD && t.reload()
    }, focus: function () {
        this.commentInput.focus()
    }, blur: function () {
        this.commentInput.blur()
    }, checkOverflow: function () {
        this.domElement.toggleClass("overflowing", this.bodyElement.prop("scrollHeight") > this.bodyElement.prop("offsetHeight"))
    }, showCommentNotification: function (t) {
        var e = this.options.users.getByUserID(t.get("user_id"));
        if (e && e.get("user_id") !== SL.current_user.get("id")) {
            var i = "<strong>" + e.getDisplayName() + "</strong>", n = SL.util.deck.getSlideNumber(t.get("slide_hash"));
            n && (i += '<span class="slide-number">slide ' + n + "</span>"), i += "<br>" + t.get("message"), this.controller.notifications.show(i, {
                sender: e,
                callback: function () {
                    this.showSlideComments(t.get("slide_hash")), this.commentInput.focus()
                }.bind(this)
            })
        }
    }, showSlideComments: function (t) {
        this.controller.isExpanded() === !1 && this.controller.expand();
        var e = $('.reveal .slides section[data-id="' + t + '"]').get(0);
        SL.util.deck.navigateToSlide(e);
        var i = this.getCurrentThread();
        i && i.getID() !== SL.components.collab.Comments.SLIDE_THREAD && (this.showThread(SL.components.collab.Comments.SLIDE_THREAD, {slide_hash: t}), SL.util.device.IS_PHONE || SL.util.device.IS_TABLET || this.commentInput.focus())
    }, showThread: function (t, e) {
        var i = this.getCurrentThread(), n = this.bodyElement.find('[data-thread-id="' + t + '"]'), s = n.data("thread");
        s && (i && i !== s && i.hide(), this.bodyElement.find(".sl-collab-comment-thread").removeClass("visible"), n.addClass("visible"), this.headerElement.find(".header-tab").removeClass("selected"), this.headerElement.find('.header-tab[data-thread-id="' + t + '"]').addClass("selected"), s.show(e))
    }, getCurrentThread: function () {
        return this.domElement.find(".sl-collab-comment-thread.visible").data("thread")
    }, addCommentFromStream: function (t) {
        if (t.id || console.warn("Can not insert comment without ID"), !this.threads.deck.commentExists(t)) {
            var e = this.controller.isExpanded(), i = this.threads.deck.getComments().createModel(t), n = !1;
            return this.getCurrentThread().getID() === SL.components.collab.Comments.DECK_THREAD ? n = this.threads.deck.scrollToLatestCommentUnlessScrolled() : this.getCurrentThread().getID() === SL.components.collab.Comments.SLIDE_THREAD && t.slide_hash && t.slide_hash === this.getCurrentThread().getSlideHash() && !this.getCurrentThread().commentExists(t) && (this.threads.slide.getComments().createModel(t), n = this.threads.slide.scrollToLatestCommentUnlessScrolled()), e && n || this.showCommentNotification(i), !0
        }
        return !1
    }, updateCommentFromStream: function (t) {
        t.id || console.warn("Can not update comment without ID");
        var e = this.threads.deck.getComments().getByID(t.id);
        if (e) {
            for (var i in t)e.set(i, t[i]);
            this.threads.deck.refreshCommentByID(e.get("id")), this.getCurrentThread().getID() === SL.components.collab.Comments.SLIDE_THREAD && this.threads.slide.refreshCommentByID(e.get("id"))
        }
    }, removeCommentFromStream: function (t) {
        return this.threads.deck.getComments().removeByProperties({id: t})
    }, refreshCommentInput: function () {
        this.commentInput.attr("rows", 2);
        var t = Math.ceil(parseFloat(this.commentInput.css("line-height"))), e = this.commentInput.prop("scrollHeight"), i = this.commentInput.prop("clientHeight"), n = 10;
        e > i && this.commentInput.attr("rows", Math.min(Math.floor(e / t), n)), this.getCurrentThread().scrollToLatestCommentUnlessScrolled(t * n)
    }, refreshTyping: function () {
        var t = this.commentInput.val();
        t ? this.startTyping() : this.stopTyping()
    }, startTyping: function () {
        var t = Date.now();
        this.typing = !0, (!this.lastTypingEvent || t - this.lastTypingEvent > SL.config.COLLABORATION_SEND_WRITING_INTERVAL) && (this.lastTypingEvent = t, SL.helpers.StreamEditor.singleton().broadcast({
            type: "collaboration:user-typing",
            user_id: SL.current_user.get("id")
        }))
    }, stopTyping: function () {
        this.typing && (this.typing = !1, this.lastTypingEvent = null, SL.helpers.StreamEditor.singleton().broadcast({
            type: "collaboration:user-typing-stopped",
            user_id: SL.current_user.get("id")
        }))
    }, refreshTypingIndicators: function () {
        var t = this.options.users.filter(function (t) {
            return t.get("typing") === !0
        });
        0 === t.length ? this.commentTyping.empty().removeAttr("data-tooltip") : 1 === t.length ? this.commentTyping.html("<strong>" + t[0].getDisplayName() + "</strong> is typing").removeAttr("data-tooltip") : t.length > 1 && (this.commentTyping.html("<strong>" + t.length + " people</strong> are typing"), this.commentTyping.attr("data-tooltip", t.map(function (t) {
            return t.getDisplayName()
        }).join("<br>")))
    }, refreshCurrentSlide: function () {
        var t = this.getCurrentThread();
        t && t.getID() === SL.components.collab.Comments.SLIDE_THREAD && this.showThread(SL.components.collab.Comments.SLIDE_THREAD, {slide_hash: Reveal.getCurrentSlide().getAttribute("data-id")});
        var e = SL.util.deck.getSlideNumber(Reveal.getCurrentSlide());
        e && this.headerElement.find(".header-tab-slide").text("Slide " + e)
    }, refreshSlideNumbers: function () {
        this.threads.deck.refreshSlideNumbers()
    }, submitComment: function () {
        var t = this.commentInput.val();
        t = t.trim(), t = t.replace(/(\n|\r){3,}/gim, "\n\n"), t.length && (this.getCurrentThread().getComments().create({
            comment: {
                slide_hash: Reveal.getCurrentSlide().getAttribute("data-id"),
                message: t,
                user_id: SL.current_user.get("id"),
                created_at: Date.now()
            }
        }), this.commentInput.val(""), this.stopTyping(), this.refreshCommentInput(), this.getCurrentThread().scrollToLatestComment())
    }, onCommentSubmit: function (t) {
        this.submitComment(), t.preventDefault()
    }, onCommentKeyDown: function (t) {
        13 !== t.keyCode || t.shiftKey || (this.submitComment(), t.preventDefault(), t.stopPropagation())
    }, onCommentChanged: function () {
        this.refreshCommentInput(), this.refreshTyping()
    }, onCommentInputFocus: function () {
        this.refreshTyping()
    }, onViewSlideCommentsClicked: function (t) {
        this.showSlideComments(t)
    }, onSlideChanged: function () {
        this.refreshCurrentSlide()
    }, onCollaborationExpanded: function () {
        this.refreshCurrentSlide(), setTimeout(this.focus.bind(this), 100)
    }, destroy: function () {
        this.threads.deck.destroy(), this.threads.slide.destroy(), this.options = null, this.domElement.remove()
    }
}),SL.components.collab.Comments.DECK_THREAD = "deck",SL.components.collab.Comments.SLIDE_THREAD = "slide",SL("components.collab").Handover = Class.extend({
    init: function (t, e) {
        this.controller = t, this.options = e, this.render(), this.bind()
    }, render: function () {
        this.domElement = $('<div class="sl-collab-handover">'), this.editButtonWrapper = $('<div class="edit-button-wrapper">').appendTo(this.domElement), this.editButton = $('<div class="edit-button">'), this.editButton.append('<span class="label">Edit </span><span class="icon i-pen-alt2"></span>'), this.editButton.appendTo(this.editButtonWrapper), this.user = $('<div class="user"></div>'), this.userAvatar = $('<div class="user-avatar"></div>').appendTo(this.user), this.userDescription = $('<div class="user-description"></div>').appendTo(this.user), this.userStatus = $('<div class="user-status"></div>').appendTo(this.userDescription), this.userSlide = $('<div class="user-slide"></div>').appendTo(this.userDescription)
    }, appendTo: function (t) {
        this.domElement.appendTo(t)
    }, bind: function () {
        this.editButtonWrapper.on("vclick", this.onEditClicked.bind(this))
    }, refresh: function () {
        this.controller.getCurrentDeckUser().isEditing() || !this.controller.getCurrentDeckUser().canEdit() ? (this.editButtonWrapper.removeClass("visible"), this.editButtonWrapper.removeAttr("data-tooltip"), this.user.remove()) : (this.editButtonWrapper.addClass("visible"), this.currentEditor = this.options.users.getByProperties({editing: !0}), this.currentEditor && this.currentEditor.isOnline() ? (this.currentAvatarURL !== this.currentEditor.get("thumbnail_url") && (this.currentAvatarURL = this.currentEditor.get("thumbnail_url"), this.userAvatar.css("background-image", 'url("' + this.currentAvatarURL + '")')), 0 === this.user.parent().length && this.user.appendTo(this.editButtonWrapper), this.refreshSlideNumbers(), this.currentEditor.isIdle() ? (this.editButtonWrapper.attr("data-tooltip", "<strong>" + this.currentEditor.get("username") + "</strong> is editing but has been idle for a while.<br>Click to start editing."), this.userStatus.html('<span class="username">' + this.currentEditor.get("username") + "</span> is idle"), this.user.addClass("idle")) : (this.editButtonWrapper.attr("data-tooltip", "Ask <strong>" + this.currentEditor.get("username") + "</strong> to make you the active editor"), this.userStatus.html('<span class="username">' + this.currentEditor.get("username") + "</span> is editing"), this.user.removeClass("idle"))) : (this.user.remove(), this.editButtonWrapper.removeAttr("data-tooltip")))
    }, refreshSlideNumbers: function () {
        if (this.currentEditor) {
            var t = SL.util.deck.getSlideNumber(this.currentEditor.get("slide_id"));
            t ? this.userSlide.addClass("visible").html("slide " + t).data("data-slide-id", this.currentEditor.get("slide_id")).attr("data-tooltip", "Click to view slide") : this.userSlide.removeClass("visible")
        }
    }, onEditClicked: function (t) {
        if ($(t.target).closest(".user-slide").length) {
            var e = this.userSlide.data("data-slide-id"), i = $('.reveal .slides section[data-id="' + e + '"]').get(0);
            i && SL.util.deck.navigateToSlide(i)
        } else if (!this.controller.getCurrentDeckUser().isEditing()) {
            var n = this.options.users.getByProperties({editing: !0});
            n && n.isOnline() && !n.isIdle() ? (SL.helpers.StreamEditor.singleton().broadcast({
                type: "collaboration:handover-requested",
                user_id: SL.current_user.get("id")
            }), this.controller.showHandoverRequestPending(n)) : this.controller.becomeEditor()
        }
    }, destroy: function () {
        this.domElement.remove()
    }
}),SL("components.collab").Menu = Class.extend({
    init: function (t, e) {
        this.controller = t, this.options = e, this.render(), this.bind()
    }, render: function () {
        this.domElement = $('<div class="sl-collab-menu">'), this.innerElement = $('<div class="sl-collab-menu-inner">'), this.innerElement.appendTo(this.domElement), this.renderProfile()
    }, renderProfile: function () {
        this.enableButton = $('<div class="sl-collab-menu-item sl-collab-menu-enable ladda-button" data-style="zoom-in" data-spinner-color="#444" data-tooltip="Add a collaborator" data-tooltip-alignment="l">'), this.enableButton.append('<span class="users-icon icon i-users"></span>'), this.enableButton.appendTo(this.innerElement), this.toggleButton = $('<div class="sl-collab-menu-item sl-collab-menu-toggle">'), this.toggleButton.append('<div class="users-icon icon i-users"></div>'), this.toggleButton.append('<div class="close-icon icon i-x"></div>'), this.toggleButton.appendTo(this.innerElement), this.unreadComments = $('<div class="unread-comments" data-tooltip="Unread comments" data-tooltip-alignment="l">'), this.unreadComments.appendTo(this.toggleButton)
    }, appendTo: function (t) {
        this.domElement.appendTo(t)
    }, bind: function () {
        this.onEnableClicked = this.onEnableClicked.bind(this), this.onToggleClicked = this.onToggleClicked.bind(this), this.enableButton.on("vclick", this.onEnableClicked), this.toggleButton.on("vclick", this.onToggleClicked), this.controller.enabled.add(this.onCollaborationEnabled.bind(this)), this.controller.expanded.add(this.onCollaborationExpanded.bind(this))
    }, setUnreadComments: function (t) {
        0 === t ? this.clearUnreadComments() : this.unreadComments.text(t).addClass("visible")
    }, clearUnreadComments: function () {
        this.unreadComments.removeClass("visible")
    }, destroy: function () {
        this.domElement.remove()
    }, getPrimaryButton: function () {
        return this.toggleButton
    }, onEnableClicked: function (t) {
        this.enableButton.off("vclick", this.onEnableClicked), this.enableLoader = Ladda.create(this.enableButton.get(0)), this.enableLoader.start(), SL.view.isNewDeck() ? SL.view.save(function () {
            this.controller.makeDeckCollaborative()
        }.bind(this)) : this.controller.makeDeckCollaborative(), t.preventDefault()
    }, onToggleClicked: function (t) {
        this.controller.toggle(), t.preventDefault()
    }, onCollaborationEnabled: function () {
        this.enableLoader && (this.enableLoader.stop(), this.enableLoader = null)
    }, onCollaborationExpanded: function () {
        this.clearUnreadComments()
    }
}),SL("components.collab").Notifications = Class.extend({
    init: function (t, e) {
        this.controller = t, this.options = e, this.render(), this.bind()
    }, render: function () {
        this.domElement = $('<div class="sl-collab-notifications">')
    }, bind: function () {
        this.domElement.delegate(".sl-collab-notification.optional", "mouseenter", this.onNotificationMouseEnter.bind(this)), this.domElement.delegate(".sl-collab-notification.optional", "vclick", this.onNotificationClick.bind(this))
    }, appendTo: function (t) {
        this.domElement.appendTo(t)
    }, show: function (t, e) {
        e = $.extend({optional: !0, duration: 5e3}, e);
        var i;
        e.id && (i = this.getNotificationByID(e.id)), i && 0 !== i.length || (i = this.addNotification(t, e), e.optional && (this.holding ? i.addClass("on-hold") : this.hideAfter(i, e.duration)))
    }, hide: function (t) {
        var e = this.getNotificationByID(t);
        return e.length ? (this.removeNotification(e), !0) : !1
    }, hideAfter: function (t, e) {
        setTimeout(function () {
            t.addClass("hide"), setTimeout(this.removeNotification.bind(this, t), 500)
        }.bind(this), e)
    }, hold: function () {
        this.holding = !0
    }, release: function () {
        this.holding = !1;
        var t = this.domElement.find(".sl-collab-notification.on-hold").get().reverse();
        t.forEach(function (t, e) {
            this.hideAfter($(t), 5e3 + 1e3 * e)
        }, this)
    }, addNotification: function (t, e) {
        var i = $('<div class="sl-collab-notification" />').data("options", e).toggleClass("optional", e.optional).prependTo(this.domElement), t = $('<div class="message" />').append(t).appendTo(i);
        return i.toggleClass("multiline", t.height() > 24), e.sender ? $('<div class="status-picture" />').css("background-image", 'url("' + e.sender.get("thumbnail_url") + '")').prependTo(i) : $('<div class="status-icon icon" />').addClass(e.icon || "i-info").prependTo(i), e.id && i.attr("data-id", e.id), this.layout(), setTimeout(function () {
            i.addClass("show")
        }, 1), i
    }, removeNotification: function (t) {
        t.removeData(), t.remove(), this.layout()
    }, getNotificationByID: function (t) {
        return this.domElement.find(".sl-collab-notification[data-id=" + t + "]")
    }, layout: function () {
        var t = 0;
        this.domElement.find(".sl-collab-notification").each(function (e, i) {
            i.style.top = t + "px", t += i.offsetHeight + 10
        })
    }, destroy: function () {
        this.domElement.remove()
    }, onNotificationMouseEnter: function (t) {
        var e = $(t.currentTarget);
        0 === e.find(".dismiss").length && $('<div class="dismiss"><span class="icon i-x"></span></div>').appendTo(e)
    }, onNotificationClick: function (t) {
        var e = $(t.currentTarget);
        if (0 === $(t.target).closest(e.find(".dismiss")).length) {
            var i = e.data("options").callback;
            "function" == typeof i && i.call()
        }
        this.removeNotification(e)
    }
}),SL("components.collab").Users = Class.extend({
    init: function (t, e) {
        this.controller = t, this.options = e, this.inviteSent = new signals.Signal, this.render(), this.bind()
    }, render: function () {
        this.domElement = $('<div class="sl-collab-users disable-when-disconnected">'), this.userList = $('<div class="sl-collab-users-list">').appendTo(this.domElement), this.slideGroup = $('<div class="sl-collab-users-group">').appendTo(this.userList), this.slideGroup.append('<div class="icon i-eye"></div>'), this.slideGroup.find(".icon").attr({
            "data-tooltip": "People who are viewing the current slide",
            "data-tooltip-alignment": "l"
        }), this.inviteButton = $('<div class="sl-collab-users-invite" data-tooltip="Add a collaborator" data-tooltip-alignment="l"></div>'), this.inviteButton.html('<span class="icon i-plus"></span>'), this.inviteButton.on("vclick", this.onInviteClicked.bind(this)), this.inviteButton.appendTo(this.domElement), this.renderUsers()
    }, renderUsers: function () {
        this.domElement.toggleClass("admin", this.controller.getCurrentDeckUser().isAdmin()), this.layoutPrevented = !0, this.userList.find(".sl-collab-user").remove(), this.options.users.forEach(this.renderUser.bind(this)), this.layoutPrevented = !1, this.layout()
    }, renderUser: function (t) {
        if (t.get("user_id") !== SL.current_user.get("id") && t.get("active") !== !1) {
            var e = this.getUserByID(t.get("user_id"));
            return 0 === e.length && (e = $("<div/>", {
                "class": "sl-collab-user",
                "data-user-id": t.get("user_id")
            }), e.html('<div class="picture" style="background-image: url(\'' + t.get("thumbnail_url") + "')\" />"), e.data("model", t), e.on("mouseenter", this.onUserMouseEnter.bind(this)), e.appendTo(this.userList)), this.refreshPresence(t), e
        }
    }, renderRoleSelector: function () {
        var t = $(['<select class="sl-select role-selector">', '<option value="' + SL.models.collab.DeckUser.ROLE_EDITOR + '">Editor \u2013 Can comment and edit</option>', '<option value="' + SL.models.collab.DeckUser.ROLE_VIEWER + '">Viewer \u2013 Can comment</option>', "</select>"].join(""));
        return SL.current_deck.get("user.enterprise") && t.prepend('<option value="' + SL.models.collab.DeckUser.ROLE_ADMIN + '">Admin \u2013 Can comment, edit and manage users</option>'), t
    }, renderInviteForm: function () {
        this.inviteForm || (this.inviteForm = $('<div class="sl-collab-invite-form sl-form">'), this.inviteEmail = $('<input class="invite-email" type="text" placeholder="Email address..." />'), this.inviteEmail.on("input", this.onEmailInput.bind(this)), this.inviteEmail.appendTo(this.inviteForm), this.inviteRole = this.renderRoleSelector(), this.inviteRole.appendTo(this.inviteForm), this.inviteOptions = $('<div class="invite-options">'), this.inviteOptions.appendTo(this.inviteForm), this.inviteFooter = $(['<footer class="footer">', '<button class="button l outline cancel-button">Cancel</button>', '<button class="button l confirm-button">Send</button>', "</footer>"].join("")), this.inviteFooter.find(".cancel-button").on("vclick", this.onInviteCancelClicked.bind(this)), this.inviteFooter.find(".confirm-button").on("vclick", this.onInviteConfirmClicked.bind(this)), this.inviteFooter.appendTo(this.inviteForm), SL.current_user.isEnterprise() && (this.inviteEmailAutocomplete = new SL.components.form.Autocomplete(this.inviteEmail, this.searchTeamMembers.bind(this), {
            className: "light-grey",
            offsetY: 1
        }), this.inviteEmailAutocomplete.confirmed.add(this.onEmailInput.bind(this)))), this.inviteEmail.val(""), this.inviteOptions.empty(), this.inviteRole.find("[hidden]").prop("hidden", !1), this.inviteRole.find('[value="' + SL.models.collab.DeckUser.ROLE_EDITOR + '"]').prop("selected", !0), this.inviteRole.prop("disabled", !1);
        var t = SL.current_deck.user;
        if (SL.current_deck.isVisibilityAll() || !t.isPro() || t.isEnterprise()) {
            if (t.isEnterprise() && SL.current_user.isEnterpriseManager()) {
                this.inviteOptions.append("<p>Want this person to be able to access internal presentations and create decks of their own?</p>");
                var e = $(['<div class="unit sl-checkbox outline">', '<input id="team-invite-checkbox" class="team-invite-checkbox" type="checkbox" />', '<label for="team-invite-checkbox">Add to team</label>', "</div>"].join("")).appendTo(this.inviteOptions);
                if (this.inviteToTeamLabel = e.find("label"), this.inviteToTeamInput = e.find("input"), !SL.current_team.isManuallyUpgraded()) {
                    var i = SL.current_team.getPlan();
                    if (i) {
                        var n = i.getDollarCostPerCycle();
                        n && this.inviteToTeamLabel.html("Add to team for " + n)
                    }
                }
            }
        } else {
            var s = this.options.users.getEditors().length - 1, o = SL.current_deck.get("deck_user_editor_limit") || 50;
            s >= o ? (this.inviteRole.find('[value="' + SL.models.collab.DeckUser.ROLE_EDITOR + '"]').prop("hidden", !0), this.inviteRole.find('[value="' + SL.models.collab.DeckUser.ROLE_VIEWER + '"]').prop("selected", !0), this.inviteRole.prop("disabled", !0), this.inviteOptions.html("You can't invite any more editors to this deck on your current plan, but you can invite any number of viewers. To invite additional editors please <a href=\"" + SL.routes.PRICING + '" target="_blank">upgrade to the Team plan</a>.')) : this.inviteOptions.html('You have invited <span class="semibold">' + s + "/" + o + "</span> " + SL.util.string.pluralize("editor", "s", o > 1) + ".")
        }
        return this.inviteForm
    }, renderEditForm: function (t) {
        this.editForm || (this.editForm = $('<div class="sl-collab-edit-form sl-form">'), this.editRole = this.renderRoleSelector(), this.editRole.appendTo(this.editForm), this.editFooter = $(['<footer class="footer">', '<button class="button l negative delete-button" style="float: left;">Remove</button>', '<button class="button l outline cancel-button">Cancel</button>', '<button class="button l confirm-button">Save</button>', "</footer>"].join("")), this.editFooter.find(".delete-button").on("vclick", this.onEditDeleteClicked.bind(this)), this.editFooter.find(".cancel-button").on("vclick", this.onEditCancelClicked.bind(this)), this.editFooter.find(".confirm-button").on("vclick", this.onEditConfirmClicked.bind(this)), this.editFooter.appendTo(this.editForm)), this.editRole.find('[value="' + t.get("role") + '"]').prop("selected", !0), this.editRole.prop("disabled", !1);
        var e = SL.current_deck.user;
        if (!SL.current_deck.isVisibilityAll() && e.isPro() && !e.isEnterprise()) {
            var i = this.options.users.getEditors().length - 1, n = SL.current_deck.get("deck_user_editor_limit") || 50;
            i >= n && t.get("role") === SL.models.collab.DeckUser.ROLE_VIEWER && this.editRole.prop("disabled", !0)
        }
        return this.editForm
    }, bind: function () {
        this.options.users.changed.add(this.onUsersChanged.bind(this)), this.domElement.delegate(".sl-collab-user", "vclick", this.onUserClicked.bind(this)), this.layout = this.layout.bind(this), this.controller.expanded.add(this.layout), this.controller.collapsed.add(this.layout), $(window).on("resize", $.throttle(this.layout, 300))
    }, appendTo: function (t) {
        this.domElement.appendTo(t)
    }, refreshPresence: function (t) {
        var e = this.getUserByID(t.get("user_id"));
        e && e.length && (e.removeClass("intro-animation"), e.toggleClass("online", t.isOnline()), e.toggleClass("idle", t.isIdle()), this.layout())
    }, layout: function () {
        if (this.layoutPrevented)return !1;
        var t = 62;
        this.domElement.css("max-height", window.innerHeight - t);
        var e = this.userList.find(".sl-collab-user.online").get(), i = this.userList.find(".sl-collab-user:not(.online)").get(), n = 30, s = 26, o = 16, a = 10;
        if (this.slideGroup.removeClass("visible"), e.length) {
            var r = SL.util.deck.getSlideID(Reveal.getCurrentSlide()), l = 0, c = 4;
            e = e.filter(function (t) {
                return $(t).data("model").get("slide_id") === r ? (t.style.transform = "translateY(" + a + "px)", a += s, l += 1, !1) : !0
            }), l > 0 && (this.slideGroup.css({
                top: c,
                height: a + 2 * c
            }).addClass("visible"), a += o + 6), e.length && (e.forEach(function (t) {
                t.style.transform = "translateY(" + a + "px)", a += s
            }), a += o)
        }
        i.length && (this.controller.isExpanded() ? (i.forEach(function (t) {
            t.style.transform = "translateY(" + a + "px)", a += s
        }), a += o) : i.forEach(function (t) {
            t.style.transform = "translateY(" + a + "px)"
        })), this.inviteButton && (this.inviteButton.get(0).style.transform = "translateY(" + a + "px)", a += n + o), this.userList.css("height", a)
    }, addUserFromStream: function (t) {
        t.user_id || console.warn("Can not insert collaborator without ID"), this.options.users.getByProperties({user_id: t.user_id}) || this.options.users.createModel(t)
    }, removeUserFromStream: function (t) {
        return this.options.users.removeByProperties({user_id: t})
    }, getUserByID: function (t) {
        return this.domElement.find('.sl-collab-user[data-user-id="' + t + '"]')
    }, showInvitePrompt: function (t) {
        this.invitePrompt || (this.invitePrompt = SL.prompt({
            anchor: t || this.inviteButton,
            alignment: "l",
            type: "custom",
            title: "Add a collaborator",
            html: this.renderInviteForm(),
            destroyAfterConfirm: !1,
            confirmOnEnter: !0
        }), this.invitePrompt.confirmed.add(function () {
            this.inviteEmail.blur(), this.confirmInvitePrompt().then(function () {
                this.inviteSent.dispatch(), this.invitePrompt && this.invitePrompt.destroy()
            }.bind(this), function () {
            })
        }.bind(this)), this.invitePrompt.destroyed.add(function () {
            this.inviteForm.detach(), this.invitePrompt = null
        }.bind(this)), this.inviteEmail.focus())
    }, confirmInvitePrompt: function () {
        var t = this.inviteEmail.val().trim(), e = this.inviteRole.val(), i = !(!this.inviteToTeamInput || !this.inviteToTeamInput.val());
        return new Promise(function (n, s) {
            if (/^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$/gi.test(t)) {
                this.invitePrompt.showOverlay("neutral", "Inviting " + t, '<div class="spinner" data-spinner-color="#333"></div>'), SL.util.html.generateSpinners();
                var o = {user: {email: t, role: e}};
                i && (o.user.add_to_team = !0), this.options.users.create(o, {
                    url: SL.config.AJAX_DECKUSER_CREATE(SLConfig.deck.id),
                    createModel: !1
                }).then(function () {
                    this.invitePrompt.showOverlay("positive", "Invite sent!", '<span class="icon i-checkmark"></span>', 2e3).then(n)
                }.bind(this), function () {
                    this.invitePrompt.showOverlay("negative", "Failed to send invite. Please try again.", '<span class="icon i-x"></span>', 2e3).then(s), this.inviteEmail.focus().select()
                }.bind(this))
            } else SL.notify("Please enter a valid email", "negative"), this.inviteEmail.focus().select(), s()
        }.bind(this))
    }, showEditPrompt: function (t) {
        if (!this.editPrompt) {
            var e = t.data("model");
            if (e.get("role") === SL.models.collab.DeckUser.ROLE_OWNER)return;
            this.editUserElement = t, this.editUserModel = e, this.editPrompt = SL.prompt({
                anchor: t,
                alignment: "l",
                type: "custom",
                title: e.get("email"),
                html: this.renderEditForm(e),
                destroyAfterConfirm: !1,
                confirmOnEnter: !0
            }), this.editPrompt.confirmed.add(function () {
                this.confirmEditPrompt().then(function () {
                    this.editPrompt && this.editPrompt.destroy()
                }.bind(this))
            }.bind(this)), this.editPrompt.destroyed.add(function () {
                this.editForm.detach(), this.editPrompt = null
            }.bind(this))
        }
    }, confirmEditPrompt: function () {
        var t = this.editUserModel;
        return new Promise(function (e, i) {
            var n = this.editRole.val();
            n && n !== t.get("role") ? (this.editPrompt.showOverlay("neutral", "Saving", '<div class="spinner" data-spinner-color="#333"></div>'), SL.util.html.generateSpinners(), t.set("role", n), t.save(["role"]).then(function () {
                e()
            }.bind(this), function () {
                this.editPrompt.showOverlay("negative", "Failed to save changes. Please try again.", '<span class="icon i-x"></span>', 2e3).then(i)
            }.bind(this))) : e()
        }.bind(this))
    }, searchTeamMembers: function (t) {
        return this.searchTeamMembersXHR && this.searchTeamMembersXHR.abort(), this.searchTeamMemberEmailCache || (this.searchTeamMemberEmailCache = {}), new Promise(function (e, i) {
            this.searchTeamMembersXHR = $.ajax({
                type: "POST",
                url: SL.config.AJAX_TEAM_MEMBER_SEARCH,
                context: this,
                data: {q: t}
            }).done(function (t) {
                var i = t.results;
                i = i.filter(function (t) {
                    return t.id !== SL.current_user.get("id")
                }), i.forEach(function (t) {
                    this.searchTeamMemberEmailCache[t.email] = !0
                }.bind(this)), i = i.slice(0, 5).map(function (t) {
                    return {
                        value: t.email,
                        label: '<div class="label">' + t.name + '</div><div class="value">' + t.email + "</div>"
                    }
                }), e(i)
            }).fail(i)
        }.bind(this))
    }, dismissPrompts: function () {
        this.editPrompt && this.editPrompt.destroy(), this.invitePrompt && this.invitePrompt.destroy()
    }, onUsersChanged: function (t, e) {
        t && t.forEach(function (t) {
            var e = this.renderUser(t);
            e && (setTimeout(function () {
                e.addClass("intro-animation")
            }, 1), this.layout())
        }.bind(this)), e && e.forEach(function (t) {
            var e = $('.sl-collab-user[data-user-id="' + t.get("user_id") + '"]');
            SL.util.anim.collapseListItem(e, function () {
                e.remove(), this.layout()
            }.bind(this), 300)
        }, this)
    }, onInviteClicked: function (t) {
        t.preventDefault(), this.showInvitePrompt()
    }, onInviteCancelClicked: function () {
        this.invitePrompt && this.invitePrompt.cancel()
    }, onInviteConfirmClicked: function () {
        this.invitePrompt && this.invitePrompt.confirm()
    }, onEditCancelClicked: function () {
        this.editPrompt && this.editPrompt.cancel()
    }, onEditConfirmClicked: function () {
        this.editPrompt && this.editPrompt.confirm()
    }, onEditDeleteClicked: function () {
        this.editPrompt && this.editPrompt.destroy();
        var t = this.editUserModel;
        SL.prompt({
            anchor: this.editUserElement,
            title: SL.locale.get("COLLABORATOR_REMOVE_CONFIRM"),
            alignment: "l",
            type: "select",
            data: [{html: "<h3>Cancel</h3>"}, {
                html: "<h3>Remove</h3>",
                selected: !0,
                className: "negative",
                callback: function () {
                    this.options.users.remove(t), t.destroy()
                }.bind(this)
            }]
        })
    }, onEmailInput: function () {
        this.inviteOptions && this.searchTeamMemberEmailCache && (this.searchTeamMemberEmailCache[this.inviteEmail.val().trim()] ? this.inviteOptions.addClass("disabled") : this.inviteOptions.removeClass("disabled"))
    }, onUserClicked: function (t) {
        this.controller.getCurrentDeckUser().isAdmin() && this.showEditPrompt($(t.currentTarget)), t.preventDefault()
    }, onUserMouseEnter: function (t) {
        var e = $(t.currentTarget), i = e.data("model");
        if (i) {
            var n = [i.getDisplayName() + '<span class="sl-collab-tooltip-status" data-status="' + i.get("status") + '"></span>', '<span style="opacity: 0.70;">' + i.get("email") + "</span>"].join("<br>");
            SL.tooltip.show(n, {alignment: "l", anchor: e}), e.one("mouseleave", SL.tooltip.hide.bind(SL.tooltip))
        }
    }, destroy: function () {
        this.inviteEmailAutocomplete && this.inviteEmailAutocomplete.destroy(), this.options = null, this.domElement.remove()
    }
}),SL("components").ContextMenu = Class.extend({
    init: function (t) {
        this.config = $.extend({
            anchorSpacing: 5,
            minWidth: 0,
            options: []
        }, t), this.config.anchor = $(this.config.anchor), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.layout = this.layout.bind(this), this.onContextMenu = this.onContextMenu.bind(this), this.onDocumentKeydown = this.onDocumentKeydown.bind(this), this.onDocumentMouseDown = this.onDocumentMouseDown.bind(this), this.shown = new signals.Signal, this.hidden = new signals.Signal, this.destroyed = new signals.Signal, this.domElement = $('<div class="sl-context-menu">'), this.config.anchor.on("contextmenu", this.onContextMenu)
    }, render: function () {
        this.listElement = $('<div class="sl-context-menu-list">').appendTo(this.domElement), this.listElement.css("minWidth", this.config.minWidth + "px"), this.arrowElement = $('<div class="sl-context-menu-arrow">').appendTo(this.domElement)
    }, renderList: function () {
        this.config.options.forEach(function (t) {
            if ("divider" === t.type)$('<div class="sl-context-menu-divider">').appendTo(this.listElement); else {
                var e;
                e = $("string" == typeof t.url ? '<a class="sl-context-menu-item" href="' + t.url + '">' : '<div class="sl-context-menu-item">'), e.data("item-data", t), e.html('<span class="label">' + t.label + "</span>"), e.appendTo(this.listElement), e.on("click", function (t) {
                    var e = $(t.currentTarget).data("item-data").callback;
                    "function" == typeof e && e.apply(null, [this.contextMenuEvent]), this.hide()
                }.bind(this)), t.icon && e.append('<span class="icon i-' + t.icon + '"></span>'), t.attributes && e.attr(t.attributes)
            }
        }.bind(this))
    }, bind: function () {
        SL.keyboard.keydown(this.onDocumentKeydown), $(document).on("mousedown touchstart pointerdown", this.onDocumentMouseDown)
    }, unbind: function () {
        SL.keyboard.release(this.onDocumentKeydown), $(document).off("mousedown touchstart pointerdown", this.onDocumentMouseDown)
    }, layout: function (t, e) {
        var i = this.config.anchorSpacing, n = $(window).scrollLeft(), s = $(window).scrollTop(), o = this.domElement.outerWidth(), a = this.domElement.outerHeight(), r = o / 2, l = a / 2, c = 8, d = t, h = e - a / 2;
        t + i + c + o < window.innerWidth ? (this.domElement.attr("data-alignment", "r"), d += c + i, r = -c) : (this.domElement.attr("data-alignment", "l"), d -= o + c + i, r = o), d = Math.min(Math.max(d, n + i), window.innerWidth + n - o - i), h = Math.min(Math.max(h, s + i), window.innerHeight + s - a - i), this.domElement.css({
            left: d,
            top: h
        }), this.arrowElement.css({left: r, top: l})
    }, focus: function (t) {
        var e = this.listElement.find(".focus");
        if (e.length) {
            var i = t > 0 ? e.nextAll(".sl-context-menu-item").first() : e.prevAll(".sl-context-menu-item").first();
            i.length && (e.removeClass("focus"), i.addClass("focus"))
        } else this.listElement.find(".sl-context-menu-item").first().addClass("focus")
    }, show: function () {
        this.rendered || (this.rendered = !0, this.render(), this.renderList()), this.listElement.find(".sl-context-menu-item").each(function (t, e) {
            var i = $(e), n = i.data("item-data");
            i.toggleClass("hidden", "function" == typeof n.filter && !n.filter())
        }.bind(this)), this.listElement.find(".sl-context-menu-item:not(.hidden)").length && (this.domElement.removeClass("visible").appendTo(document.body), setTimeout(function () {
            this.domElement.addClass("visible")
        }.bind(this), 1), this.bind(), this.layout(this.contextMenuEvent.clientX, this.contextMenuEvent.clientY), this.shown.dispatch(this.contextMenuEvent))
    }, hide: function () {
        this.listElement.find(".focus").removeClass("focus"), this.domElement.detach(), this.unbind(), this.hidden.dispatch()
    }, isVisible: function () {
        return this.domElement.parent().length > 0
    }, destroy: function () {
        this.shown.dispose(), this.hidden.dispose(), this.destroyed.dispatch(), this.destroyed.dispose(), this.domElement.remove(), this.unbind(), this.config = null
    }, onDocumentKeydown: function (t) {
        if (27 === t.keyCode && (this.hide(), t.preventDefault()), 13 === t.keyCode) {
            var e = this.listElement.find(".focus");
            e.length && (e.trigger("click"), t.preventDefault())
        } else 38 === t.keyCode ? (this.focus(-1), t.preventDefault()) : 40 === t.keyCode ? (this.focus(1), t.preventDefault()) : 9 === t.keyCode && t.shiftKey ? (this.focus(-1), t.preventDefault()) : 9 === t.keyCode && (this.focus(1), t.preventDefault())
    }, onContextMenu: function (t) {
        t.preventDefault(), this.contextMenuEvent = t, this.show()
    }, onDocumentMouseDown: function (t) {
        var e = $(t.target);
        this.isVisible() && 0 === e.closest(this.domElement).length && this.hide()
    }
}),SL("components.decksharer").DeckSharer = SL.components.popup.Popup.extend({
    TYPE: "decksharer",
    MODE_PUBLIC: {id: "public", width: 560, height: 380, heightEmail: "auto"},
    MODE_PRIVATE: {id: "private", width: 800, height: 560, heightEmail: 730},
    MODE_INTERNAL: {id: "internal", width: 560, height: "auto", heightEmail: "auto"},
    init: function (t) {
        var e = t.deck, i = e.belongsTo(SL.current_user);
        this.mode = i && (e.isVisibilitySelf() || e.isVisibilityTeam()) ? this.MODE_PRIVATE : !i && e.isVisibilityTeam() ? this.MODE_INTERNAL : this.MODE_PUBLIC, this._super($.extend({
            title: "Share",
            titleItem: '"' + e.get("title") + '"',
            width: this.mode.width,
            height: this.mode.height
        }, t))
    },
    render: function () {
        this._super(), this.mode.id === this.MODE_PRIVATE.id ? this.renderPrivate() : this.mode.id === this.MODE_INTERNAL.id ? this.renderInternal() : this.renderPublic()
    },
    renderPublic: function () {
        this.domElement.addClass("is-public"), this.shareOptions = new SL.components.decksharer.ShareOptions(this.options.deck, this.options), this.shareOptions.pageChanged.add(this.layout.bind(this)), this.shareOptions.appendTo(this.bodyElement)
    },
    renderInternal: function () {
        this.domElement.addClass("is-internal"), this.bodyElement.append('<p class="decksharer-share-warning">This deck is internal and can only be shared with and viewed by other team members.</p>'), this.shareOptions = new SL.components.decksharer.ShareOptions(this.options.deck, $.extend(this.options, {embedEnabled: !1})), this.shareOptions.pageChanged.add(this.layout.bind(this)), this.shareOptions.appendTo(this.bodyElement)
    },
    renderPrivate: function () {
        this.domElement.addClass("is-private"), this.placeholderElement = $(['<div class="decksharer-token-placeholder">', '<div class="decksharer-token-placeholder-inner">', '<div class="spinner" data-spinner-color="#999"></div>', "</div>", "</div>"].join("")), this.placeholderElement.appendTo(this.bodyElement), SL.util.html.generateSpinners(), SL.data.tokens.get(this.options.deck.get("id"), {
            success: function (t) {
                this.tokens = t, this.tokenList = new SL.components.decksharer.TokenList(this.options.deck, this.tokens), this.tokenList.appendTo(this.bodyElement), this.tokenList.tokenSelected.add(this.onTokenSelected.bind(this)), this.tokenList.tokensEmptied.add(this.onTokensEmptied.bind(this)), 0 === this.tokens.size() ? this.renderTokenPlaceholder() : this.tokenList.selectDefault()
            }.bind(this), error: function (t) {
                this.destroy(), 401 === t ? SL.notify("It looks like you're no longer signed in to Slides. Please open a new tab and sign in.", "negative") : SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
            }.bind(this)
        })
    },
    layout: function () {
        var t = this.tokenOptions ? this.tokenOptions.shareOptions : this.shareOptions;
        this.options.height = t && t.getPageID() === SL.components.decksharer.ShareOptions.EMAIL_PAGE_ID ? this.mode.heightEmail : this.mode.height, this._super()
    },
    resetContentArea: function () {
        this.tokenOptions && (this.tokenOptions.destroy(), this.tokenOptions = null), this.placeholderElement && (this.placeholderElement.addClass("hidden"), setTimeout(this.placeholderElement.remove.bind(this.placeholderElement), 300), this.placeholderElement = null)
    },
    renderTokenPlaceholder: function () {
        this.domElement.addClass("is-empty"), this.resetContentArea();
        var t = this.options.deck.isVisibilityTeam() ? "This deck is internal" : "This deck is private";
        this.placeholderElement = $(['<div class="decksharer-token-placeholder">', '<div class="decksharer-token-placeholder-inner">', '<div class="lock-icon icon i-lock-stroke"></div>', "<h2>" + t + "</h2>", "<p>To share it you'll need to create a secret link.</p>", '<button class="button create-button xl ladda-button" data-style="zoom-out">Create link</button>', "</div>", "</div>"].join("")), this.placeholderElement.appendTo(this.bodyElement), this.placeholderElement.find(".create-button").on("vclick", function () {
            this.tokenList.create()
        }.bind(this)), Ladda.bind(this.placeholderElement.find(".create-button").get(0)), this.layout()
    },
    renderTokenOptions: function (t) {
        this.domElement.removeClass("is-empty");
        var e = !this.tokenOptions;
        this.resetContentArea(), this.tokenOptions = new SL.components.decksharer.TokenOptions(this.options.deck, t, this.options), this.tokenOptions.appendTo(this.bodyElement, e), this.tokenOptions.tokenRenamed.add(this.tokenList.setTokenLabel.bind(this.tokenList)), this.tokenOptions.shareOptions.pageChanged.add(this.layout.bind(this)), this.layout()
    },
    onTokenSelected: function (t) {
        this.renderTokenOptions(t)
    },
    onTokensEmptied: function () {
        this.renderTokenPlaceholder()
    },
    destroy: function () {
        this.shareOptions && (this.shareOptions.destroy(), this.shareOptions = null), this.tokenList && (this.tokenList.destroy(), this.tokenList = null), this.options.deck = null, this.tokens = null, this._super()
    }
}),SL("components.decksharer").ShareOptions = Class.extend({
    USE_READONLY: !SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET, init: function (t, e) {
        this.deck = t, this.options = $.extend({
            token: null,
            linkEnabled: !0,
            embedEnabled: !0,
            emailEnabled: !0
        }, e), this.onLinkInputMouseDown = this.onLinkInputMouseDown.bind(this), this.onEmbedOutputMouseDown = this.onEmbedOutputMouseDown.bind(this), this.onEmbedStyleChanged = this.onEmbedStyleChanged.bind(this), this.onEmbedSizeChanged = this.onEmbedSizeChanged.bind(this), this.width = SL.components.decksharer.ShareOptions.DEFAULT_WIDTH, this.height = SL.components.decksharer.ShareOptions.DEFAULT_HEIGHT, this.style = "", this.pageChanged = new signals.Signal, this.render(), this.generate()
    }, render: function () {
        this.domElement = $('<div class="decksharer-share-options">'), this.tabsElement = $('<div class="decksharer-share-options-tabs">').appendTo(this.domElement), this.pagesElement = $('<div class="decksharer-share-options-pages">').appendTo(this.domElement), this.options.deckView ? (this.tabsElement.hide(), this.renderDeckViewLink(), this.showPage(SL.components.decksharer.ShareOptions.LINK_PAGE_ID)) : (this.options.linkEnabled && this.renderLink(), this.options.embedEnabled && this.renderEmbed(), this.options.emailEnabled && SL.util.user.isLoggedIn() && this.renderEmail(), this.tabsElement.find(".decksharer-share-options-tab").on("vclick", function (t) {
            var e = $(t.currentTarget).attr("data-id");
            this.showPage(e), SL.analytics.track("Decksharer: Tab clicked", e)
        }.bind(this)), this.showPage(this.tabsElement.find(".decksharer-share-options-tab").first().attr("data-id")))
    }, renderLink: function () {
        this.tabsElement.append('<div class="decksharer-share-options-tab" data-id="' + SL.components.decksharer.ShareOptions.LINK_PAGE_ID + '">Link</div>'), this.pagesElement.append(['<div class="decksharer-share-options-page sl-form" data-id="link">', '<div class="unit link-unit">', "<label>Presentation link</label>", "</div>", '<div class="unit sl-checkbox outline">', '<input id="fullscreen-checkbox" type="checkbox" class="fullscreen-input" />', '<label for="fullscreen-checkbox">Fullscreen</label>', "</div>", "</div>"].join("")), this.renderLinkInput(), this.fullscreenInput = this.pagesElement.find('[data-id="link"] .fullscreen-input'), this.fullscreenInput.on("change", this.onLinkFullscreenToggled.bind(this))
    }, renderLinkInput: function () {
        this.USE_READONLY ? (this.linkInput = $('<input type="text" class="link-input" readonly="readonly" />'), this.linkInput.on("mousedown", this.onLinkInputMouseDown), this.linkInput.appendTo(this.pagesElement.find('[data-id="link"] .link-unit'))) : (this.linkAnchor = $('<a href="#" class="input-field">'), this.linkAnchor.appendTo(this.pagesElement.find('[data-id="link"] .link-unit')))
    }, renderDeckViewLink: function () {
        this.pagesElement.append(['<div class="decksharer-share-options-page sl-form" data-id="link">', '<div class="unit link-unit">', "<label>Presentation link</label>", "</div>", "</div>"].join("")), "live" === this.options.deckView && (this.pagesElement.find('[data-id="link"] .link-unit label').text("Live presentation link"), this.pagesElement.find('[data-id="link"] .link-unit').append('<p class="unit-description">This links lets viewers follow the presentation in real-time.</p>')), this.renderLinkInput()
    }, renderEmbed: function () {
        this.tabsElement.append('<div class="decksharer-share-options-tab" data-id="' + SL.components.decksharer.ShareOptions.EMBED_PAGE_ID + '">Embed</div>');
        var t = '<option value="dark" selected>Dark</option><option value="light">Light</option>';
        SL.current_user.isPro() && (t += '<option value="hidden">Hidden</option>'), this.pagesElement.append(['<div class="decksharer-share-options-page sl-form" data-id="embed">', '<div class="embed-options">', '<div class="unit">', "<label>Width:</label>", '<input type="text" name="width" maxlength="4" />', "</div>", '<div class="unit">', "<label>Height:</label>", '<input type="text" name="height" maxlength="4" />', "</div>", '<div class="unit">', "<label>Footer style:</label>", '<select class="sl-select" name="style">', t, "</select>", "</div>", "</div>", '<textarea name="output"></textarea>', "</div>"].join("")), this.embedElement = this.pagesElement.find('[data-id="embed"]'), this.embedStyleElement = this.embedElement.find("select[name=style]"), this.embedWidthElement = this.embedElement.find("input[name=width]"), this.embedHeightElement = this.embedElement.find("input[name=height]"), this.embedOutputElement = this.embedElement.find("textarea"), this.embedStyleElement.on("change", this.onEmbedStyleChanged), this.embedWidthElement.on("input", this.onEmbedSizeChanged), this.embedHeightElement.on("input", this.onEmbedSizeChanged), this.USE_READONLY ? (this.embedOutputElement.attr("readonly", "readonly"), this.embedOutputElement.on("mousedown", this.onEmbedOutputMouseDown)) : this.embedOutputElement.on("input", this.generate.bind(this)), this.embedWidthElement.val(this.width), this.embedHeightElement.val(this.height)
    }, renderEmail: function () {
        this.tabsElement.append('<div class="decksharer-share-options-tab" data-id="' + SL.components.decksharer.ShareOptions.EMAIL_PAGE_ID + '">Email</div>'), this.pagesElement.append(['<div class="decksharer-share-options-page" data-id="email">', '<div class="sl-form">', '<div class="unit" data-validate="none" data-required>', "<label>From</label>", '<input type="text" class="email-from" placeholder="Your Name" maxlength="255" />', "</div>", '<div class="unit" data-validate="none" data-required>', "<label>To</label>", '<input type="text" class="email-to" placeholder="john@example.com, jane@example.com" maxlength="2500" />', "</div>", '<div class="unit text" data-validate="none" data-required>', "<label>Message</label>", '<p class="unit-description">A link to the deck is automatically included after the message.</p>', '<textarea class="email-body" rows="3" maxlength="2500"></textarea>', "</div>", '<div class="submit-wrapper">', '<button type="submit" class="button positive l ladda-button email-submit" data-style="zoom-out">Send</button>', "</div>", "</div>", '<div class="email-success">', '<div class="email-success-icon icon i-checkmark"></div>', '<p class="email-success-description">Email sent!</p>', "</div>", "</div>"].join("")), this.emailElement = this.pagesElement.find('[data-id="email"]'), this.emailSuccess = this.emailElement.find(".email-success"), this.emailForm = this.emailElement.find(".sl-form"), this.emailFromElement = this.emailForm.find(".email-from"), this.emailToElement = this.emailForm.find(".email-to"), this.emailBodyElement = this.emailForm.find(".email-body"), this.emailSubmitButton = this.emailForm.find(".email-submit"), this.emailFormUnits = [], this.emailForm.find(".unit[data-validate]").each(function (t, e) {
            this.emailFormUnits.push(new SL.components.FormUnit(e))
        }.bind(this)), this.emailSubmitButton.on("vclick", this.onEmailSubmitClicked.bind(this)), this.emailSubmitLoader = Ladda.create(this.emailSubmitButton.get(0))
    }, appendTo: function (t) {
        this.domElement.appendTo(t)
    }, showPage: function (t) {
        this.tabsElement.find(".decksharer-share-options-tab").removeClass("is-selected"), this.pagesElement.find(".decksharer-share-options-page").removeClass("is-selected"), this.tabsElement.find('[data-id="' + t + '"]').addClass("is-selected"), this.pagesElement.find('[data-id="' + t + '"]').addClass("is-selected"), this.pageChanged.dispatch(t)
    }, getPageID: function () {
        return this.tabsElement.find(".is-selected").attr("data-id")
    }, generate: function () {
        var t = this.getShareURLs();
        if (this.embedOutputElement) {
            var e = '<iframe src="' + t.embed + '" width="' + this.width + '" height="' + this.height + '" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            this.embedOutputElement.text(e)
        }
        var i = this.fullscreenInput && this.fullscreenInput.is(":checked") ? t.fullscreen : t.show;
        this.linkInput && this.linkInput.val(i), this.linkAnchor && this.linkAnchor.attr("href", i).text(i), this.emailElement && (SL.current_user && this.emailFromElement.val(SL.current_user.getNameOrSlug()), this.emailBodyElement.val(this.deck.has("title") && "deck" !== this.deck.get("title") ? 'Check out this deck "' + this.deck.get("title") + '"' : "Check out this deck"))
    }, getShareURLs: function () {
        var t = {
            show: this.deck.getURL({protocol: "http:", view: this.options.deckView}),
            fullscreen: this.deck.getURL({protocol: "http:", view: "fullscreen"}),
            embed: this.deck.getURL({protocol: "", view: "embed"})
        }, e = [];
        return this.options.token && this.options.token.has("token") && e.push("token=" + this.options.token.get("token")), t.show += e.length ? "?" + e.join("&") : "", t.fullscreen += e.length ? "?" + e.join("&") : "", "string" == typeof this.style && this.style.length > 0 && e.push("style=" + this.style), t.embed += e.length ? "?" + e.join("&") : "", t
    }, onEmbedOutputMouseDown: function (t) {
        t.preventDefault(), this.embedOutputElement.focus().select(), SL.analytics.track("Decksharer: Embed code selected")
    }, onLinkInputMouseDown: function (t) {
        t.preventDefault(), $(t.target).focus().select(), SL.analytics.track("Decksharer: URL selected")
    }, onLinkFullscreenToggled: function () {
        this.generate(), SL.analytics.track("Decksharer: URL fullscreen toggled")
    }, onEmbedSizeChanged: function () {
        this.width = parseInt(this.embedWidthElement.val(), 10) || 1, this.height = parseInt(this.embedHeightElement.val(), 10) || 1, this.generate()
    }, onEmbedStyleChanged: function () {
        this.style = this.embedStyleElement.val(), this.generate()
    }, onEmailSubmitClicked: function (t) {
        var e = this.emailFormUnits.every(function (t) {
            return t.beforeSubmit()
        });
        if (e && !this.emailXHR) {
            SL.analytics.track("Decksharer: Submit email");
            var i = this.emailFromElement.val(), n = this.emailToElement.val(), s = this.emailBodyElement.val();
            this.emailSubmitLoader.start(), n = n.split(","), n = n.map(function (t) {
                return t.trim()
            }), n = n.join(",");
            var o = {deck_share: {emails: n, from: i, body: s}};
            this.options.token && (o.deck_share.access_token_id = this.options.token.get("id")), this.emailXHR = $.ajax({
                url: SL.config.AJAX_SHARE_DECK_VIA_EMAIL(this.deck.get("id")),
                type: "POST",
                context: this,
                data: o
            }).done(function () {
                this.emailSuccess.addClass("visible"), setTimeout(function () {
                    this.emailSuccess.removeClass("visible"), this.emailToElement.val(""), this.emailBodyElement.val(""), this.generate()
                }.bind(this), 3e3), SL.analytics.track("Decksharer: Submit email success")
            }).fail(function () {
                SL.notify("Failed to send email", "negative"), SL.analytics.track("Decksharer: Submit email error")
            }).always(function () {
                this.emailXHR = null, this.emailSubmitLoader.stop()
            })
        }
        t.preventDefault()
    }, destroy: function () {
        this.pageChanged.dispose(), this.deck = null, this.domElement.remove()
    }
}),SL.components.decksharer.ShareOptions.DEFAULT_WIDTH = 576,SL.components.decksharer.ShareOptions.DEFAULT_HEIGHT = 420,SL.components.decksharer.ShareOptions.LINK_PAGE_ID = "link",SL.components.decksharer.ShareOptions.EMBED_PAGE_ID = "embed",SL.components.decksharer.ShareOptions.EMAIL_PAGE_ID = "email",SL("components.decksharer").TokenList = Class.extend({
    init: function (t, e) {
        this.deck = t, this.tokens = e, this.tokenSelected = new signals.Signal, this.tokensEmptied = new signals.Signal, this.render()
    }, render: function () {
        this.domElement = $('<div class="decksharer-token-list">'), this.listItems = $('<div class="decksharer-token-list-items">').appendTo(this.domElement), this.createButton = $(['<div class="decksharer-token-list-create ladda-button" data-style="zoom-out" data-spinner-color="#222">', '<span class="icon i-plus"></span>', "</div>"].join("")), this.createButton.on("vclick", this.create.bind(this)), this.createButton.appendTo(this.domElement), this.createButtonLoader = Ladda.create(this.createButton.get(0)), this.tokens.forEach(this.renderToken.bind(this)), this.scrollShadow = new SL.components.ScrollShadow({
            parentElement: this.domElement,
            contentElement: this.listItems,
            footerElement: this.createButton,
            resizeContent: !1
        })
    }, renderToken: function (t) {
        var e = t.get("deck_view_count") || 0, i = e + " " + SL.util.string.pluralize("view", "s", 1 !== e), n = $(['<div class="decksharer-token-list-item" data-id="' + t.get("id") + '">', '<span class="label"></span>', '<div class="meta">', '<span class="views">' + i + "</span>", '<span class="icon i-x delete" data-tooltip="Delete link"></span>', "</div>", "</div>"].join(""));
        n.appendTo(this.listItems), n.on("vclick", function (e) {
            if ($(e.target).closest(".delete").length > 0) {
                SL.prompt({
                    anchor: n,
                    alignment: "r",
                    title: "Are you sure you want to delete this link? It will stop working for anyone you have already shared it with.",
                    type: "select",
                    data: [{html: "<h3>Cancel</h3>"}, {
                        html: "<h3>Delete</h3>",
                        selected: !0,
                        className: "negative",
                        callback: function () {
                            this.remove(t, n)
                        }.bind(this)
                    }]
                })
            } else this.select(t)
        }.bind(this)), this.setTokenLabel(t)
    }, setTokenLabel: function (t, e) {
        var i = this.listItems.find(".decksharer-token-list-item[data-id=" + t.get("id") + "]");
        i.length && (e || (e = t.get("name") || t.get("token")), i.find(".label").html(e))
    }, appendTo: function (t) {
        this.domElement.appendTo(t), this.scrollShadow.sync()
    }, selectDefault: function () {
        this.select(this.tokens.first()), this.scrollShadow.sync()
    }, select: function (t) {
        if (t && t !== this.selectedToken) {
            var e = this.listItems.find(".decksharer-token-list-item[data-id=" + t.get("id") + "]");
            e.length && (this.listItems.find(".decksharer-token-list-item").removeClass("is-selected"), e.addClass("is-selected"), this.tokenSelected.dispatch(t), this.selectedToken = t)
        }
    }, create: function (t) {
        var e = 0 === this.tokens.size();
        t && this.createButtonLoader.start(), SL.data.tokens.create(this.deck.get("id")).then(function (t) {
            SL.analytics.track(e ? "Decksharer: Created first token" : "Decksharer: Created additional token"), this.renderToken(t), this.select(t), this.createButtonLoader.stop(), this.scrollShadow.sync()
        }.bind(this), function () {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), this.createButtonLoader.stop()
        }.bind(this))
    }, remove: function (t, e) {
        t.destroy().fail(function () {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }.bind(this)).done(function () {
            SL.util.anim.collapseListItem(e, function () {
                e.remove(), this.scrollShadow.sync()
            }.bind(this), 300), this.tokens.remove(t), this.selectedToken === t && (this.selectedToken = null, this.selectDefault()), 0 === this.tokens.size() && this.tokensEmptied.dispatch(), SL.analytics.track("Decksharer: Deleted token")
        }.bind(this))
    }, destroy: function () {
        this.createButtonLoader && this.createButtonLoader.stop(), this.scrollShadow && this.scrollShadow.destroy(), this.tokens = null, this.domElement.remove()
    }
}),SL("components.decksharer").TokenOptions = Class.extend({
    init: function (t, e, i) {
        this.deck = t, this.token = e, this.options = i, this.tokenRenamed = new signals.Signal, this.render(), this.bind()
    }, render: function () {
        this.domElement = $('<div class="decksharer-token-options">'), this.innerElement = $('<div class="sl-form decksharer-token-options-inner">'), this.innerElement.appendTo(this.domElement), this.namePasswordElement = $('<div class="split-units">'), this.namePasswordElement.appendTo(this.innerElement), this.nameUnit = $(['<div class="unit">', '<label class="form-label" for="token-name">Name</label>', '<p class="unit-description">So you can tell your links apart.</p>', '<input class="input-field" type="text" id="token-name" maxlength="255" />', "</div>"].join("")), this.nameUnit.appendTo(this.namePasswordElement), this.nameInput = this.nameUnit.find("input"), this.nameInput.val(this.token.get("name")), this.passwordUnit = $(['<div class="unit">', '<label class="form-label" for="token-password">Password<span class="optional-label">(optional)</span></label>', '<p class="unit-description">Viewers need to enter this.</p>', '<input class="input-field" type="password" id="token-password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;" maxlength="255" />', "</div>"].join("")), this.passwordUnit.appendTo(this.namePasswordElement), this.passwordInput = this.passwordUnit.find("input"), this.passwordInput.val(this.token.get("password")), this.saveWrapper = $(['<div class="save-wrapper">', '<button class="button l save-button ladda-button" data-style="expand-left" data-spinner-size="26">Save changes</button>', "</div>"].join("")), this.saveWrapper.appendTo(this.innerElement), this.saveButton = this.saveWrapper.find(".button"), this.saveButtonLoader = Ladda.create(this.saveButton.get(0)), this.shareOptions = new SL.components.decksharer.ShareOptions(this.deck, $.extend(this.options, {token: this.token})), this.shareOptions.appendTo(this.domElement)
    }, bind: function () {
        this.saveChanges = this.saveChanges.bind(this), this.nameInput.on("input", this.onNameInput.bind(this)), this.passwordInput.on("input", this.onPasswordInput.bind(this)), this.saveButton.on("click", this.saveChanges)
    }, appendTo: function (t, e) {
        this.domElement.appendTo(t), e || SL.util.dom.calculateStyle(this.domElement), this.domElement.addClass("visible")
    }, checkUnsavedChanges: function () {
        var t = this.token.get("name") || "", e = this.token.get("password") || "", i = this.nameInput.val(), n = this.passwordInput.val(), s = n !== e || i !== t;
        this.domElement.toggleClass("is-unsaved", s)
    }, saveChanges: function () {
        this.nameInput.val() ? (this.token.set("name", this.nameInput.val()), this.token.set("password", this.passwordInput.val()), this.saveButtonLoader.start(), this.token.save(["name", "password"]).fail(function () {
            this.saveButtonLoader.stop(), SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }.bind(this)).done(function () {
            this.saveButtonLoader.stop(), this.domElement.removeClass("is-unsaved")
        }.bind(this))) : SL.notify("Please give the link a name", "negative")
    }, onNameInput: function () {
        this.tokenRenamed.dispatch(this.token, this.nameInput.val()), this.checkUnsavedChanges()
    }, onPasswordInput: function () {
        this.checkUnsavedChanges()
    }, destroy: function () {
        this.tokenRenamed.dispatch(this.token), this.tokenRenamed.dispose(), this.shareOptions && (this.shareOptions.destroy(), this.shareOptions = null), this.saveButtonLoader && this.saveButtonLoader.stop(), this.deck = null, this.token = null, this.domElement.addClass("hidden"), setTimeout(this.domElement.remove.bind(this.domElement), 500)
    }
}),SL("components.form").Autocomplete = Class.extend({
    init: function (t, e, i) {
        this.inputElement = t, this.searchMethod = e, this.confirmed = new signals.Signal, this.config = $.extend({
            offsetY: 0,
            offsetX: 0,
            className: null
        }, i), this.render(), this.bind()
    }, render: function () {
        this.domElement = $('<div class="sl-autocomplete">'), this.config.className && this.domElement.addClass(this.config.className)
    }, bind: function () {
        this.onDocumentKeydown = this.onDocumentKeydown.bind(this), this.showSuggestions = this.showSuggestions.bind(this), this.hideSuggestions = this.hideSuggestions.bind(this), this.layout = $.throttle(this.layout, 500, this), this.onInput = $.throttle(this.onInput, 500, this), this.inputElement.on("input", this.onInput), this.inputElement.on("focus", this.onInput), this.inputElement.on("blur", this.hideSuggestions), this.domElement.on("mousedown", this.onClick.bind(this))
    }, layout: function () {
        var t = this.inputElement.get(0).getBoundingClientRect();
        this.domElement.css({top: t.bottom + this.config.offsetY, left: t.left + this.config.offsetX, width: t.width})
    }, showSuggestions: function (t) {
        var e = t.map(function (t, e) {
            var i = "sl-autocomplete-item" + (0 === e ? " focus" : "");
            return "string" == typeof t && (t = {
                value: t,
                label: t
            }), '<div class="' + i + '" data-value="' + t.value + '">' + t.label + "</div>"
        });
        this.domElement.html(e.join("")), this.domElement.appendTo(document.body), this.layout(), $(window).on("resize", this.layout), SL.keyboard.keydown(this.onDocumentKeydown)
    }, hideSuggestions: function () {
        this.domElement.detach(), $(window).off("resize", this.layout), SL.keyboard.release(this.onDocumentKeydown)
    }, focus: function (t) {
        var e = this.domElement.find(".focus");
        e.length || (e = this.domElement.find(".sl-autocomplete-item").first(), e.addClass("focus"));
        var i = t > 0 ? e.next(".sl-autocomplete-item") : e.prev(".sl-autocomplete-item");
        i.length && (e.removeClass("focus"), i.addClass("focus"))
    }, setValue: function (t) {
        this.inputElement.val(t), this.confirmed.dispatch(t)
    }, getFocusedValue: function () {
        return this.domElement.find(".focus").attr("data-value")
    }, destroy: function () {
        this.confirmed.dispose(), this.inputElement.off("input", this.onInput), this.hideSuggestions()
    }, onInput: function () {
        this.searchMethod(this.inputElement.val()).then(function (t) {
            t.length > 0 ? this.inputElement.is(":focus") && this.showSuggestions(t) : this.hideSuggestions()
        }.bind(this), function () {
            this.hideSuggestions()
        }.bind(this))
    }, onClick: function (t) {
        var e = $(t.target).closest(".sl-autocomplete-item");
        e.length && (this.setValue(e.attr("data-value")), this.hideSuggestions())
    }, onDocumentKeydown: function (t) {
        return 27 === t.keyCode ? (this.hideSuggestions(), !1) : 13 === t.keyCode || 9 === t.keyCode ? (this.setValue(this.getFocusedValue()), this.hideSuggestions(), !1) : 38 === t.keyCode ? (this.focus(-1), !1) : 40 === t.keyCode ? (this.focus(1), !1) : !0
    }
}),SL("components.form").Scripts = Class.extend({
    init: function (t) {
        this.domElement = $(t), this.render(), this.readValues(), this.renderList()
    }, render: function () {
        this.valueElement = this.domElement.find(".value-holder"), this.listElement = $('<ul class="list">'), this.listElement.delegate("li .remove", "click", this.onListItemRemove.bind(this)), this.listElement.appendTo(this.domElement), this.inputWrapper = $('<div class="input-wrapper"></div>').appendTo(this.domElement), this.inputElement = $('<input type="text" placeholder="https://...">'), this.inputElement.on("keyup", this.onInputKeyUp.bind(this)), this.inputElement.appendTo(this.inputWrapper), this.submitElement = $('<div class="button outline">Add</div>'), this.submitElement.on("click", this.submitInput.bind(this)), this.submitElement.appendTo(this.inputWrapper), this.domElement.parents("form").first().on("submit", this.onFormSubmit.bind(this))
    }, renderList: function () {
        this.listElement.empty(), this.values.forEach(function (t) {
            this.listElement.append(['<li class="list-item" data-value="' + t + '">', t, '<span class="icon i-x remove"></span>', "</li>"].join(""))
        }.bind(this))
    }, formatValues: function () {
        for (var t = 0; t < this.values.length; t++)this.values[t] = SL.util.string.trim(this.values[t]), "" === this.values[t] && this.values.splice(t, 1)
    }, readValues: function () {
        this.values = (this.valueElement.val() || "").split(","), this.formatValues()
    }, writeValues: function () {
        this.formatValues(), this.valueElement.val(this.values.join(","))
    }, addValue: function (t) {
        return t = t || "", 0 === t.search(/https\:\/\//gi) ? (this.values.push(t), this.renderList(), this.writeValues(), !0) : 0 === t.search(/http\:\/\//gi) ? (SL.notify("Script must be loaded via HTTPS", "negative"), !1) : (SL.notify("Please enter a valid script URL", "negative"), !1)
    }, removeValue: function (t) {
        if ("string" == typeof t)for (var e = 0; e < this.values.length; e++)this.values[e] === t && this.values.splice(e, 1); else"number" == typeof t && this.values.splice(t, 1);
        this.renderList(), this.writeValues()
    }, submitInput: function () {
        this.addValue(this.inputElement.val()) && this.inputElement.val("")
    }, onListItemRemove: function (t) {
        var e = $(t.target).parent().index();
        "number" == typeof e && this.removeValue(e)
    }, onInputKeyUp: function (t) {
        13 === t.keyCode && this.submitInput()
    }, onFormSubmit: function (t) {
        return this.inputElement.is(":focus") ? (t.preventDefault(), !1) : void 0
    }
}),SL("components").FormUnit = Class.extend({
    init: function (t) {
        this.domElement = $(t), this.inputElement = this.domElement.find("input, textarea").first(), this.errorElement = $('<div class="error">'), this.errorIcon = $('<span class="icon">!</span>').appendTo(this.errorElement), this.errorMessage = $('<p class="message">!</p>').appendTo(this.errorElement), this.validateType = this.domElement.attr("data-validate"), this.validateTimeout = -1, this.originalValue = this.inputElement.val(), this.originalError = this.domElement.attr("data-error-message"), this.asyncValidatedValue = null, this.clientErrors = [], this.serverErrors = [], this.inputElement.on("input", this.onInput.bind(this)), this.inputElement.on("change", this.onInputChange.bind(this)), this.inputElement.on("focus", this.onInputFocus.bind(this)), this.inputElement.on("blur", this.onInputBlur.bind(this)), this.inputElement.on("invalid", this.onInputInvalid.bind(this)), this.domElement.parents("form").first().on("submit", this.onFormSubmit.bind(this)), this.originalError && (this.domElement.removeClass("hidden"), this.validate(), this.inputElement.focus()), this.domElement.data("controller", this)
    }, validate: function (t) {
        clearTimeout(this.validateTimeout);
        var e = this.inputElement.val();
        if ("string" != typeof e)return this.serverErrors = [], this.clientErrors = [], void this.render();
        if (e === this.originalValue && (this.originalValue || "password" === this.validateType) && this.originalError)this.clientErrors = [this.originalError]; else if (e.length) {
            var i = SL.util.validate[this.validateType];
            "function" == typeof i ? this.clientErrors = i(e) : console.log('Could not find validation method of type "' + this.validateType + '"')
        } else this.clientErrors = [], t && this.isRequired() && this.clientErrors.push(SL.locale.FORM_ERROR_REQUIRED);
        return this.validateAsync(), this.render(), 0 === this.clientErrors.length && 0 === this.serverErrors.length
    }, validateAsync: function () {
        if ("username" === this.validateType) {
            var t = SLConfig && SLConfig.current_user ? SLConfig.current_user.username : "", e = this.inputElement.val();
            0 === SL.util.validate.username(e).length && (t && e === t ? (this.asyncValidatedValue = t, this.serverErrors = []) : e !== this.asyncValidatedValue && $.ajax({
                url: SL.config.AJAX_LOOKUP_USER,
                type: "GET",
                data: {id: e},
                context: this,
                statusCode: {
                    204: function () {
                        this.serverErrors = [SL.locale.get("FORM_ERROR_USERNAME_TAKEN")]
                    }, 404: function () {
                        this.serverErrors = []
                    }
                }
            }).complete(function () {
                this.render(), this.asyncValidatedValue = e
            }))
        } else if ("team_slug" === this.validateType) {
            var i = SL.current_team ? SL.current_team.get("slug") : "", n = this.inputElement.val();
            0 === SL.util.validate.team_slug(n).length && (i && n === i ? (this.asyncValidatedValue = i, this.serverErrors = []) : n !== this.asyncValidatedValue && $.ajax({
                url: SL.config.AJAX_LOOKUP_TEAM,
                type: "GET",
                data: {id: n},
                context: this,
                statusCode: {
                    204: function () {
                        this.serverErrors = [SL.locale.get("FORM_ERROR_ORGANIZATION_SLUG_TAKEN")]
                    }, 404: function () {
                        this.serverErrors = []
                    }
                }
            }).complete(function () {
                this.render(), this.asyncValidatedValue = n
            }))
        }
    }, render: function () {
        var t = this.serverErrors.concat(this.clientErrors);
        t.length ? (this.domElement.addClass("has-error"), this.errorElement.appendTo(this.domElement), this.errorMessage.text(t[0]), setTimeout(function () {
            this.errorElement.addClass("visible")
        }.bind(this), 1)) : (this.domElement.removeClass("has-error"), this.errorElement.removeClass("visible").remove())
    }, format: function () {
        if ("username" === this.validateType || "team_slug" === this.validateType) {
            var t = this.inputElement.val();
            t && this.inputElement.val(this.inputElement.val().toLowerCase())
        }
        if ("url" === this.validateType) {
            var t = this.inputElement.val();
            t && t.length > 2 && /^http(s?):\/\//gi.test(t) === !1 && this.inputElement.val("http://" + t)
        }
    }, focus: function () {
        this.inputElement.focus()
    }, beforeSubmit: function () {
        return this.validate(!0), this.clientErrors.length > 0 || this.serverErrors.length > 0 ? (this.focus(), !1) : !0
    }, renderImage: function () {
        var t = this.inputElement.get(0);
        if (t.files && t.files[0]) {
            var e = new FileReader;
            e.onload = function (t) {
                var e = this.domElement.find("img"), i = t.target.result;
                e.length ? e.attr("src", i) : $('<img src="' + i + '">').appendTo(this.domElement.find(".image-uploader"))
            }.bind(this), e.readAsDataURL(t.files[0])
        }
    }, isRequired: function () {
        return !this.domElement.hasClass("hidden") && this.domElement.is("[data-required]")
    }, isUnchanged: function () {
        return this.inputElement.val() === this.originalValue
    }, onInput: function () {
        if (clearTimeout(this.validateTimeout), !SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET) {
            var t = 600;
            (this.clientErrors.length || this.serverErrors.length) && (t = 300), this.validateTimeout = setTimeout(this.validate.bind(this), t)
        }
    }, onInputChange: function (t) {
        this.domElement.hasClass("image") && this.renderImage(t.target), this.validate()
    }, onInputFocus: function () {
        this.domElement.addClass("focused")
    }, onInputBlur: function () {
        this.format(), this.domElement.removeClass("focused")
    }, onInputInvalid: function () {
        return this.beforeSubmit()
    }, onFormSubmit: function (t) {
        return this.beforeSubmit() === !1 ? (t.preventDefault(), !1) : void 0
    }
}),SL("components").Header = Class.extend({
    init: function () {
        this.domElement = $(".global-header"), this.renderLogo(), this.renderDropdown(), this.bind()
    }, renderLogo: function () {
        if ("/" === window.location.pathname) {
            var t = this.domElement.find(".logo-animation");
            t.length && new SL.components.Menu({
                anchor: t,
                anchorSpacing: 10,
                alignment: "b",
                showOnHover: !0,
                options: [{label: "Download logo", url: SL.routes.BRAND_KIT}]
            })
        }
    }, renderDropdown: function () {
        this.dropdown = SL.components.Header.createMainMenu(this.domElement.find(".profile-button .nav-item-anchor"))
    }, bind: function () {
        this.domElement.hasClass("show-on-scroll") && ($(document).on("mousemove", this.onDocumentMouseMove.bind(this)), $(window).on("scroll", this.onWindowScroll.bind(this)))
    }, onWindowScroll: function () {
        this.isScrolledDown = $(window).scrollTop() > 30, this.domElement.toggleClass("show", this.isScrolledDown)
    }, onDocumentMouseMove: function (t) {
        if (!this.isScrolledDown) {
            var e = t.clientY;
            e > 0 && (20 > e && !this.isMouseOver ? (this.domElement.addClass("show"), this.isMouseOver = !0) : e > 80 && this.isMouseOver && 0 === $(t.target).parents(".global-header").length && (this.domElement.removeClass("show"), this.isMouseOver = !1))
        }
    }
}),SL.components.Header.createMainMenu = function (t) {
    var e = [{label: "Profile", icon: "home", url: SL.routes.USER(SL.current_user.get("username"))}, {
        label: "New deck",
        icon: "plus",
        url: SL.routes.DECK_NEW(SL.current_user.get("username"))
    }];
    if (SL.current_user.isEnterpriseManager()) {
        e.push({label: "Themes", icon: "brush", url: SL.routes.THEME_EDITOR});
        var i = {label: "Settings", icon: "cog", url: SL.routes.USER_EDIT};
        SL.current_team && (i.submenu = [{label: "Account settings", url: SL.routes.USER_EDIT}, {
            label: "Team settings",
            url: SL.routes.TEAM_EDIT(SL.current_team)
        }, {
            label: "Team members",
            url: SL.routes.TEAM_EDIT_MEMBERS(SL.current_team)
        }], SL.current_team.isManuallyUpgraded() || i.submenu.push({
            label: "Billing details",
            url: SL.routes.BILLING_DETAILS
        })), e.push(i)
    } else e.push({label: "Settings", icon: "cog", url: SL.routes.USER_EDIT});
    SL.current_user.isManuallyUpgraded() || SL.current_user.isEnterprise() || e.push(SL.current_user.isPro() ? {
        label: "Billing",
        icon: "credit",
        url: SL.routes.BILLING_DETAILS
    } : {label: "Upgrade", icon: "star", url: SL.routes.PRICING});
    var n = $(".global-header .nav-item-changelog");
    return n.length && (e.push({
        label: "What's new",
        url: SL.routes.CHANGELOG,
        iconHTML: '<span class="counter"><span class="counter-inner">' + n.attr("data-unread-count") + "</span></span>"
    }), t.find(".nav-item-burger").append('<span class="changelog-indicator"></span>'), t.one("mouseover", function () {
        $(this).find(".changelog-indicator").remove()
    })), e.push({
        label: "Log out",
        icon: "exit",
        url: SL.routes.SIGN_OUT,
        attributes: {rel: "nofollow", "data-method": "delete"}
    }), new SL.components.Menu({
        anchor: t,
        anchorSpacing: 10,
        alignment: "auto",
        minWidth: 160,
        showOnHover: !0,
        options: e
    })
},SL("components").Kudos = function () {
    function t() {
        $("[data-kudos-value][data-kudos-id]").each(function (t, e) {
            var i = e.getAttribute("data-kudos-id");
            i && !a[i] && (a[i] = e.getAttribute("data-kudos-value"))
        }.bind(this)), $(".kudos-trigger[data-kudos-id]").on("click", function (t) {
            var n = t.currentTarget;
            "true" === n.getAttribute("data-kudoed-by-user") ? i(n.getAttribute("data-kudos-id")) : e(n.getAttribute("data-kudos-id"))
        }.bind(this))
    }

    function e(t) {
        n(t), $.ajax({type: "POST", url: SL.config.AJAX_KUDO_DECK(t), context: this}).fail(function () {
            s(t), SL.notify(SL.locale.get("GENERIC_ERROR"))
        })
    }

    function i(t) {
        s(t), $.ajax({type: "DELETE", url: SL.config.AJAX_UNKUDO_DECK(t), context: this}).fail(function () {
            n(t), SL.notify(SL.locale.get("GENERIC_ERROR"))
        })
    }

    function n(t) {
        var e = $('.kudos-trigger[data-kudos-id="' + t + '"]');
        e.attr("data-kudoed-by-user", "true"), a[t]++, o(t, a[t]);
        var i = e.find(".kudos-icon");
        i.length && (i.removeClass("bounce"), setTimeout(function () {
            i.addClass("bounce")
        }, 1))
    }

    function s(t) {
        var e = $('.kudos-trigger[data-kudos-id="' + t + '"]');
        e.attr("data-kudoed-by-user", "false"), a[t]--, o(t, a[t]), e.find(".kudos-icon").removeClass("bounce")
    }

    function o(t, e) {
        "number" == typeof a[t] && ("number" == typeof e && (a[t] = e), e = Math.max(a[t], 0), $("[data-kudos-id][data-kudos-value]").each(function (t, i) {
            i.setAttribute("data-kudos-value", e)
        }))
    }

    var a = {};
    t()
}(),SL("components").Menu = Class.extend({
    init: function (t) {
        if (this.config = $.extend({
                alignment: "auto",
                anchorSpacing: 10,
                minWidth: 0,
                offsetX: 0,
                offsetY: 0,
                options: [],
                showOnHover: !1,
                destroyOnHide: !1,
                touch: /(iphone|ipod|ipad|android|windows\sphone)/gi.test(navigator.userAgent)
            }, t), this.config.anchor = $(this.config.anchor), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.layout = this.layout.bind(this), this.toggle = this.toggle.bind(this), this.onMouseOver = this.onMouseOver.bind(this), this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this), this.onDocumentMouseDown = this.onDocumentMouseDown.bind(this), this.onDocumentKeydown = this.onDocumentKeydown.bind(this), this.onAnchorFocus = this.onAnchorFocus.bind(this), this.onAnchorBlur = this.onAnchorBlur.bind(this), this.onAnchorFocusKeyDown = this.onAnchorFocusKeyDown.bind(this), this.submenus = [], this.destroyed = new signals.Signal, this.render(), this.renderList(), this.config.anchor.length)if (this.config.touch)this.config.anchor.addClass("menu-show-on-touch"), this.config.anchor.on("touchstart pointerdown", function (t) {
            t.preventDefault(), this.toggle()
        }.bind(this)), this.config.anchor.on("click", function (t) {
            t.preventDefault()
        }.bind(this)); else {
            if (this.config.showOnHover) {
                this.config.anchor.on("focus", this.onAnchorFocus), this.config.anchor.on("blur", this.onAnchorBlur), this.config.anchor.on("mouseover", this.onMouseOver);
                try {
                    this.config.anchor.is(":hover") && this.onMouseOver()
                } catch (e) {
                }
            }
            this.config.anchor.on("click", this.toggle)
        }
    }, render: function () {
        this.domElement = $('<div class="sl-menu">'), this.listElement = $('<div class="sl-menu-list">').appendTo(this.domElement), this.arrowElement = $('<div class="sl-menu-arrow">').appendTo(this.domElement), this.hitareaElement = $('<div class="sl-menu-hitarea">').appendTo(this.domElement), this.listElement.css("minWidth", this.config.minWidth + "px")
    }, renderList: function () {
        this.config.options.forEach(function (t) {
            var e;
            "string" == typeof t.url ? (e = $('<a class="sl-menu-item" href="' + t.url + '">'), "string" == typeof t.urlTarget && e.attr("target", t.urlTarget)) : e = $('<div class="sl-menu-item">'), e.html('<span class="label">' + t.label + "</span>"), e.data("callback", t.callback), e.appendTo(this.listElement), e.on("click", function (t) {
                var e = $(t.currentTarget), i = e.data("callback");
                "function" == typeof i && i.apply(null), this.hide()
            }.bind(this)), t.icon && e.append('<span class="icon i-' + t.icon + '"></span>'), t.attributes && e.attr(t.attributes), t.iconHTML && e.append(t.iconHTML), t.submenu && !this.config.touch && this.submenus.push(new SL.components.Menu({
                anchor: e,
                anchorSpacing: 10,
                alignment: t.submenuAlignment || "rl",
                minWidth: t.submenuWidth || 160,
                showOnHover: !0,
                options: t.submenu
            }))
        }.bind(this)), this.listElement.find(".sl-menu-item:not(:last-child)").after('<div class="sl-menu-divider">')
    }, bind: function () {
        SL.keyboard.keydown(this.onDocumentKeydown), $(window).on("resize scroll", this.layout), $(document).on("mousedown touchstart pointerdown", this.onDocumentMouseDown)
    }, unbind: function () {
        SL.keyboard.release(this.onDocumentKeydown), SL.keyboard.release(this.onAnchorFocusKeyDown), $(window).off("resize scroll", this.layout), $(document).off("mousedown touchstart pointerdown", this.onDocumentMouseDown)
    }, layout: function () {
        if (this.config.anchor.length) {
            var t = this.config.anchor.offset(), e = this.config.anchorSpacing, i = this.config.alignment, n = $(window).scrollLeft(), s = $(window).scrollTop(), o = t.left + this.config.offsetX, a = t.top + this.config.offsetY, r = this.config.anchor.outerWidth(), l = this.config.anchor.outerHeight(), c = this.domElement.outerWidth(), d = this.domElement.outerHeight(), h = c / 2, u = c / 2, p = 8;
            switch ("auto" === i && (i = t.top - (d + e + p) < s ? "b" : "t"), "rl" === i && (i = t.left + r + e + p + c < window.innerWidth ? "r" : "l"), this.domElement.attr("data-alignment", i), i) {
                case"t":
                    o += (r - c) / 2, a -= d + e;
                    break;
                case"b":
                    o += (r - c) / 2, a += l + e;
                    break;
                case"l":
                    o -= c + e, a += (l - d) / 2;
                    break;
                case"r":
                    o += r + e, a += (l - d) / 2
            }
            switch (o = Math.min(Math.max(o, n + e), $(window).width() + n - c - e), a = Math.min(Math.max(a, s + e), window.innerHeight + s - d - e), i) {
                case"t":
                    h = t.left - o + r / 2, u = d;
                    break;
                case"b":
                    h = t.left - o + r / 2, u = -p;
                    break;
                case"l":
                    h = c, u = t.top - a + l / 2;
                    break;
                case"r":
                    h = -p, u = t.top - a + l / 2
            }
            this.domElement.css({left: o, top: a}), this.arrowElement.css({
                left: h,
                top: u
            }), this.hitareaElement.css({top: -e, right: -e, bottom: -e, left: -e})
        }
    }, focus: function (t) {
        var e = this.listElement.find(".focus");
        if (e.length) {
            var i = t > 0 ? e.nextAll(".sl-menu-item").first() : e.prevAll(".sl-menu-item").first();
            i.length && (e.removeClass("focus"), i.addClass("focus"))
        } else this.listElement.find(".sl-menu-item").first().addClass("focus")
    }, show: function () {
        this.domElement.removeClass("visible").appendTo(document.body), setTimeout(function () {
            this.domElement.addClass("visible")
        }.bind(this), 1), this.config.anchor.addClass("menu-is-open"), this.layout(), this.bind()
    }, hide: function () {
        this.listElement.find(".focus").removeClass("focus"), this.config.anchor.removeClass("menu-is-open"), this.domElement.detach(), this.unbind(), $(document).off("mousemove", this.onDocumentMouseMove), this.isMouseOver = !1, clearTimeout(this.hideTimeout), this.config.destroyOnHide === !0 && this.destroy()
    }, toggle: function () {
        this.isVisible() ? this.hide() : this.show()
    }, isVisible: function () {
        return this.domElement.parent().length > 0
    }, hasSubMenu: function () {
        return this.submenus.length > 0
    }, destroy: function () {
        this.destroyed.dispatch(), this.destroyed.dispose(), this.domElement.remove(), this.unbind(), this.config.anchor.off("click", this.toggle), this.config.anchor.off("hover", this.toggle), this.submenus.forEach(function (t) {
            t.destroy()
        })
    }, onDocumentKeydown: function (t) {
        if (27 === t.keyCode && (this.hide(), t.preventDefault()), 13 === t.keyCode) {
            var e = this.listElement.find(".focus");
            e.length && (e.trigger("vclick"), t.preventDefault())
        } else 38 === t.keyCode ? (this.focus(-1), t.preventDefault()) : 40 === t.keyCode ? (this.focus(1), t.preventDefault()) : 9 === t.keyCode && t.shiftKey ? (this.focus(-1), t.preventDefault()) : 9 === t.keyCode && (this.focus(1), t.preventDefault())
    }, onMouseOver: function () {
        this.isMouseOver || ($(document).on("mousemove", this.onDocumentMouseMove), this.hideTimeout = -1, this.isMouseOver = !0, this.show())
    }, onDocumentMouseMove: function (t) {
        var e = $(t.target), i = 0 === e.closest(this.domElement).length && 0 === e.closest(this.config.anchor).length;
        this.hasSubMenu() && (i = 0 === e.closest(".sl-menu").length && 0 === e.closest(this.config.anchor).length), i ? -1 === this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(this.hide, 150)) : this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = -1)
    }, onDocumentMouseDown: function (t) {
        var e = $(t.target);
        this.isVisible() && 0 === e.closest(this.domElement).length && 0 === e.closest(this.config.anchor).length && this.hide()
    }, onAnchorFocus: function () {
        this.isMouseOver || SL.keyboard.keydown(this.onAnchorFocusKeyDown)
    }, onAnchorBlur: function () {
        SL.keyboard.release(this.onAnchorFocusKeyDown)
    }, onAnchorFocusKeyDown: function (t) {
        return this.isMouseOver || 13 !== t.keyCode && 32 !== t.keyCode && 40 !== t.keyCode ? !0 : (this.show(), this.focus(), SL.keyboard.release(this.onAnchorFocusKeyDown), !1)
    }
}),SL("components").Meter = Class.extend({
    init: function (t) {
        this.domElement = $(t), this.labelElement = $('<div class="label">').appendTo(this.domElement), this.progressElement = $('<div class="progress">').appendTo(this.domElement), this.read(), this.paint(), window.m = this
    }, read: function () {
        switch (this.unit = "", this.type = this.domElement.attr("data-type"), this.value = parseInt(this.domElement.attr("data-value"), 10) || 0, this.total = parseInt(this.domElement.attr("data-total"), 10) || 0, this.type) {
            case"storage":
                var t = 1024, e = 1024 * t, i = 1024 * e;
                this.value < e && this.total < e && (this.value = Math.round(this.value / t), this.total = Math.round(this.total / t), this.unit = "KB"), this.value < i && this.total < i ? (this.value = Math.round(this.value / e), this.total = Math.round(this.total / e), this.unit = "MB") : (this.value = (this.value / i).toFixed(2), this.total = (this.total / i).toFixed(2), this.unit = "GB")
        }
    }, paint: function () {
        var t = Math.min(Math.max(this.value / this.total, 0), 1) || 0;
        this.labelElement.text(this.value + " / " + this.total + " " + this.unit), this.progressElement.width(100 * t + "%"), 0 === this.total ? this.domElement.attr("data-state", "invalid") : t > .9 ? this.domElement.attr("data-state", "negative") : t > .7 ? this.domElement.attr("data-state", "warning") : this.domElement.attr("data-state", "positive")
    }
}),SL("components").Notification = Class.extend({
    init: function (t, e) {
        this.html = t, this.options = $.extend({
            type: "",
            duration: 2500 + 15 * this.html.length,
            optional: !0
        }, e), "negative" === this.options.type && (this.options.duration = 1.5 * this.options.duration), this.destroyed = new signals.Signal, this.hideTimeout = -1, this.render(), this.bind(), this.show(), this.layout()
    }, render: function () {
        0 === $(".sl-notifications").length && $(document.body).append('<div class="sl-notifications"></div>'), this.domElement = $('<p class="sl-notification">').html(this.html).addClass(this.options.type).appendTo($(".sl-notifications"))
    }, bind: function () {
        this.hide = this.hide.bind(this), this.destroy = this.destroy.bind(this), this.options.optional && (this.domElement.on("mouseenter", this.stopTimeout.bind(this)), this.domElement.on("mouseleave", this.startTimeout.bind(this)), this.domElement.on("click", this.destroy.bind(this)))
    }, startTimeout: function () {
        this.stopTimeout(), this.hideTimeout = setTimeout(this.hide, this.options.duration)
    }, stopTimeout: function () {
        clearTimeout(this.hideTimeout)
    }, show: function () {
        this.isDestroyed !== !0 && setTimeout(function () {
            this.domElement.addClass("show"), this.options.optional && this.startTimeout()
        }.bind(this), 1)
    }, hide: function () {
        this.domElement.addClass("hide"), this.hideTimeout = setTimeout(this.destroy.bind(this), 400), this.layout()
    }, layout: function () {
        var t = 0;
        $(".sl-notification:not(.hide)").get().reverse().forEach(function (e) {
            t -= $(e).outerHeight() + 10, e.style.top = t + "px"
        })
    }, destroy: function () {
        clearTimeout(this.hideTimeout), this.isDestroyed = !0, this.options = null, this.domElement.remove(), this.layout(), this.destroyed.dispatch(), this.destroyed.dispose(), this.destroy = function () {
        }
    }
}),SL.components.RetryNotification = SL.components.Notification.extend({
    init: function (t, e) {
        e = $.extend({optional: !1}, e), this._super(t, e), this.retryClicked = new signals.Signal
    }, render: function () {
        this._super(), this.retryOptions = $('<div class="retry-options"></div>'), this.retryOptions.appendTo(this.domElement), this.retryMessage = $('<div class="retry-countdown"></div>'), this.retryButton = $('<button class="button white retry-button">Retry</button>'), this.retryButton.on("vclick", this.onRetryClicked.bind(this)), this.retryButton.appendTo(this.retryOptions)
    }, bind: function () {
        this._super(), this.updateCountdown = this.updateCountdown.bind(this)
    }, startCountdown: function (t) {
        clearInterval(this.updateInterval), this.retryStart = Date.now(), this.retryDuration = t, this.updateInterval = setInterval(this.updateCountdown, 250), this.updateCountdown(), this.retryMessage.prependTo(this.retryOptions), this.layout()
    }, updateCountdown: function () {
        var t = this.retryDuration - (Date.now() - this.retryStart);
        t /= 1e3, this.retryMessage.text(this.retryDuration < 2e3 || 0 >= t ? "Retrying..." : "Retrying in " + Math.ceil(t) + "s")
    }, disableCountdown: function () {
        clearInterval(this.updateInterval), this.retryMessage.remove(), this.layout()
    }, onRetryClicked: function () {
        this.retryClicked.dispatch()
    }, destroy: function () {
        clearInterval(this.updateInterval), this.retryClicked && (this.retryClicked.dispose(), this.retryClicked = null), this._super()
    }
}),SL.notify = function (t, e) {
    return $(".sl-notifications .sl-notification").last().html() === t && $(".sl-notifications .sl-notification").last().remove(), "string" == typeof e && (e = {type: e}), new SL.components.Notification(t, e)
},SL("components").Prompt = Class.extend({
    init: function (t) {
        this.config = $.extend({
            type: "custom",
            data: null,
            anchor: null,
            title: null,
            subtitle: null,
            optional: !0,
            alignment: "auto",
            offsetX: 0,
            offsetY: 0,
            className: null,
            confirmOnEnter: !0,
            destroyAfterConfirm: !0,
            confirmLabel: "OK",
            cancelLabel: "Cancel",
            confirmButton: null,
            cancelButton: null,
            hoverTarget: null,
            hoverClass: "hover"
        }, t), this.onBackgroundClicked = this.onBackgroundClicked.bind(this), this.onDocumentKeydown = this.onDocumentKeydown.bind(this), this.onPromptCancelClicked = this.onPromptCancelClicked.bind(this), this.onPromptConfirmClicked = this.onPromptConfirmClicked.bind(this), this.checkInputStatus = this.checkInputStatus.bind(this), this.layout = this.layout.bind(this), this.confirmed = new signals.Signal, this.canceled = new signals.Signal, this.destroyed = new signals.Signal, this.render()
    }, render: function () {
        this.domElement = $('<div class="sl-prompt" data-type="' + this.config.type + '">'), this.innerElement = $('<div class="sl-prompt-inner">').appendTo(this.domElement), this.arrowElement = $('<div class="sl-prompt-arrow">').appendTo(this.innerElement), this.config.title && (this.titleElement = $('<h3 class="title">').html(this.config.title).appendTo(this.innerElement)), this.config.subtitle && (this.subtitleElement = $('<h4 class="subtitle">').html(this.config.subtitle).appendTo(this.innerElement), this.titleElement && this.titleElement.addClass("has-subtitle")), this.config.className && this.domElement.addClass(this.config.className), this.config.html && this.innerElement.append(this.config.html), "select" === this.config.type ? this.renderSelect() : "list" === this.config.type ? (this.renderList(), this.renderButtons(this.config.multiselect, !this.config.multiselect)) : "input" === this.config.type ? (this.renderInput(), this.renderButtons(!0, !0)) : this.renderButtons(this.config.confirmButton, this.config.cancelButton)
    }, renderSelect: function () {
        this.config.data.forEach(function (t) {
            var e = $('<a class="item button outline l">').html(t.html);
            e.data("callback", t.callback), e.appendTo(this.innerElement), e.on("vclick", function (t) {
                var e = $(t.currentTarget).data("callback");
                "function" == typeof e && e.apply(null), this.destroy(), t.preventDefault()
            }.bind(this)), t.focused === !0 && e.addClass("focus"), t.selected === !0 && e.addClass("selected"), "string" == typeof t.className && (e.addClass(t.className), /(negative|positive)/g.test(t.className) && e.removeClass("outline"))
        }.bind(this)), this.domElement.attr("data-length", this.config.data.length)
    }, renderList: function () {
        this.listElement = $('<div class="list">').appendTo(this.innerElement), this.config.data.forEach(function (t) {
            var e = $('<div class="item">');
            e.html('<span class="title">' + (t.title ? t.title : t.value) + '</span><span class="checkmark icon i-checkmark"></span>'), e.data({
                callback: t.callback,
                value: t.value
            }), e.appendTo(this.listElement), e.on("click", function (e) {
                var i = $(e.currentTarget), n = i.data("callback"), s = i.data("value");
                this.config.multiselect && (i.toggleClass("selected"), t.exclusive ? (i.addClass("selected"), i.siblings().removeClass("selected")) : i.siblings().filter(".exclusive").removeClass("selected")), "function" == typeof n && n.apply(null, [s, i.hasClass("selected")]), this.config.multiselect || (this.confirmed.dispatch(s), this.destroy())
            }.bind(this)), t.focused === !0 && e.addClass("focus"), t.selected === !0 && e.addClass("selected"), t.exclusive === !0 && e.addClass("exclusive"), "string" == typeof t.className && e.addClass(t.className)
        }.bind(this))
    }, renderInput: function () {
        this.config.data.multiline === !0 ? this.inputElement = $('<textarea cols="40" rows="8">') : (this.inputElement = $('<input type="text">'), "number" == typeof this.config.data.width && (this.inputElement.css("width", this.config.data.width), this.titleElement && this.titleElement.css("max-width", this.config.data.width), this.subtitleElement && this.subtitleElement.css("max-width", this.config.data.width))), this.config.data.value && this.inputElement.val(this.config.data.value), this.config.data.placeholder && this.inputElement.attr("placeholder", this.config.data.placeholder), this.config.data.maxlength && this.inputElement.attr("maxlength", this.config.data.maxlength), this.inputWrapperElement = $('<div class="input-wrapper">').append(this.inputElement), this.inputWrapperElement.appendTo(this.innerElement)
    }, renderButtons: function (t, e) {
        var i = [];
        e && this.config.optional && this.config.cancelLabel && i.push('<button class="button l outline prompt-cancel">' + this.config.cancelLabel + "</button>"), t && this.config.confirmLabel && i.push('<button class="button l prompt-confirm">' + this.config.confirmLabel + "</button>"), i.length && (this.footerElement = $('<div class="footer">' + i.join("") + "</div>").appendTo(this.innerElement))
    }, bind: function () {
        $(window).on("resize", this.layout), this.domElement.on("vclick", this.onBackgroundClicked), SL.keyboard.keydown(this.onDocumentKeydown), "hidden" !== $("html").css("overflow") && $(window).on("scroll", this.layout), this.domElement.find(".prompt-cancel").on("vclick", this.onPromptCancelClicked), this.domElement.find(".prompt-confirm").on("vclick", this.onPromptConfirmClicked), this.inputElement && this.inputElement.on("input", this.checkInputStatus)
    }, unbind: function () {
        $(window).off("resize scroll", this.layout), this.domElement.off("vclick", this.onBackgroundClicked), SL.keyboard.release(this.onDocumentKeydown), this.domElement.find(".prompt-cancel").off("vclick", this.onPromptCancelClicked), this.domElement.find(".prompt-confirm").off("vclick", this.onPromptConfirmClicked), this.inputElement && this.inputElement.off("input", this.checkInputStatus)
    }, layout: function () {
        var t = 10, e = $(window).width(), i = window.innerHeight;
        this.innerElement.css({"max-width": e - 2 * t, "max-height": i - 2 * t});
        var n = this.innerElement.outerWidth(), s = this.innerElement.outerHeight(), o = $(this.config.anchor);
        if (o.length) {
            var a = o.offset(), r = 15, l = this.config.alignment, c = $(window).scrollLeft(), d = $(window).scrollTop(), h = a.left - c, u = a.top - d;
            h += this.config.offsetX, u += this.config.offsetY;
            var p = o.outerWidth(), f = o.outerHeight(), m = n / 2, g = n / 2, v = 10, b = !0;
            switch ("auto" === l && (l = a.top - (s + r + v) < d ? "b" : "t"), this.domElement.attr("data-alignment", l), l) {
                case"t":
                    h += (p - n) / 2, u -= s + r;
                    break;
                case"b":
                    h += (p - n) / 2, u += f + r;
                    break;
                case"l":
                    h -= n + r, u += (f - s) / 2;
                    break;
                case"r":
                    h += p + r, u += (f - s) / 2
            }
            var S = u;
            switch (h = Math.max(Math.min(h, e - n - t), t), u = Math.max(Math.min(u, i - s - t), t), h = Math.round(h), u = Math.round(u), "b" === l && -f - v > u - S ? b = !1 : "t" === l && u - S > f + v && (b = !1), l) {
                case"t":
                    m = a.left - h - c + p / 2, m = Math.max(Math.min(m, n - v), v), g = s;
                    break;
                case"b":
                    m = a.left - h - c + p / 2, m = Math.max(Math.min(m, n - v), v), g = -v;
                    break;
                case"l":
                    m = n, g = a.top - u - d + f / 2, g = Math.max(Math.min(g, s - v), v);
                    break;
                case"r":
                    m = -v, g = a.top - u - d + f / 2, g = Math.max(Math.min(g, s - v), v)
            }
            this.innerElement.css({left: h, top: u}), this.arrowElement.css({left: m, top: g}).toggle(b)
        } else this.innerElement.css({
            left: Math.round((e - n) / 2),
            top: Math.round(.4 * (i - s))
        }), this.arrowElement.hide()
    }, focus: function (t) {
        var e = this.innerElement.find(".focus");
        if (e.length || (e = this.innerElement.find(".selected")), e.length) {
            var i = t > 0 ? e.next(".item") : e.prev(".item");
            i.length && (e.removeClass("focus"), i.addClass("focus"))
        } else this.innerElement.find(".item").first().addClass("focus")
    }, show: function () {
        var t = $(this.config.anchor);
        t.length && t.addClass("focus"), $(this.config.hoverTarget).addClass(this.config.hoverClass), this.domElement.removeClass("visible").appendTo(document.body), setTimeout(function () {
            this.domElement.addClass("visible")
        }.bind(this), 1), this.layout(), this.bind(), this.inputElement && (this.checkInputStatus(), this.inputElement.focus())
    }, hide: function () {
        var t = $(this.config.anchor);
        t.length && t.removeClass("focus"), $(this.config.hoverTarget).removeClass(this.config.hoverClass), this.domElement.detach(), this.unbind()
    }, showOverlay: function (t, e, i, n) {
        return clearTimeout(this.overlayTimeout), this.overlay || (this.overlay = $('<div class="sl-prompt-overlay">')), this.overlay.appendTo(this.innerElement), this.overlay.html(i + "<h3>" + e + "</h3>"), this.overlay.attr("data-status", t || "neutral"), this.overlay.addClass("visible"), new Promise(function (t) {
            n ? this.overlayTimeout = setTimeout(function () {
                this.overlay.removeClass("visible"), t()
            }.bind(this), n) : t()
        }.bind(this))
    }, getValue: function () {
        var t = void 0;
        return "input" === this.config.type && (t = this.inputElement.val()), t
    }, getDOMElement: function () {
        return this.domElement
    }, cancel: function () {
        if ("input" === this.config.type && this.config.data.confirmBeforeDiscard) {
            var t = this.config.data.value || "", e = this.getValue() || "";
            e !== t ? SL.prompt({
                title: "Discard unsaved changes?",
                type: "select",
                data: [{html: "<h3>Cancel</h3>"}, {
                    html: "<h3>Discard</h3>",
                    selected: !0,
                    className: "negative",
                    callback: function () {
                        this.canceled.dispatch(this.getValue()), this.destroy()
                    }.bind(this)
                }]
            }) : (this.canceled.dispatch(this.getValue()), this.destroy())
        } else this.canceled.dispatch(this.getValue()), this.destroy()
    }, confirm: function () {
        this.confirmed.dispatch(this.getValue()), this.config.destroyAfterConfirm && this.destroy()
    }, checkInputStatus: function () {
        if (this.config.data.maxlength && !this.config.data.maxlengthHidden) {
            var t = this.inputWrapperElement.find(".input-status");
            0 === t.length && (t = $('<div class="input-status">').appendTo(this.inputWrapperElement));
            var e = this.inputElement.val().length, i = this.config.data.maxlength;
            t.text(e + "/" + i), t.toggleClass("negative", e > .95 * i), this.config.data.multiline || this.inputElement.css("padding-right", t.outerWidth() + 5)
        }
    }, destroy: function () {
        this.destroyed.dispatch(), this.destroyed.dispose();
        var t = $(this.config.anchor);
        t.length && t.removeClass("focus"), $(this.config.hoverTarget).removeClass(this.config.hoverClass), this.domElement.remove(), this.unbind(), this.confirmed.dispose(), this.canceled.dispose()
    }, onBackgroundClicked: function (t) {
        this.config.optional && $(t.target).is(this.domElement) && (this.cancel(), t.preventDefault())
    }, onPromptCancelClicked: function (t) {
        this.cancel(), t.preventDefault()
    }, onPromptConfirmClicked: function (t) {
        this.confirm(), t.preventDefault()
    }, onDocumentKeydown: function (t) {
        if (27 === t.keyCode)return this.config.optional && this.cancel(), t.preventDefault(), !1;
        if ("select" === this.config.type || "list" === this.config.type)if (13 === t.keyCode) {
            var e = this.innerElement.find(".focus");
            0 === e.length && (e = this.innerElement.find(".selected")), e.length && (e.trigger("click"), t.preventDefault())
        } else 37 === t.keyCode || 38 === t.keyCode ? (this.focus(-1), t.preventDefault()) : 39 === t.keyCode || 40 === t.keyCode ? (this.focus(1), t.preventDefault()) : 9 === t.keyCode && t.shiftKey ? (this.focus(-1), t.preventDefault()) : 9 === t.keyCode && (this.focus(1), t.preventDefault());
        return "input" === this.config.type && (13 !== t.keyCode || this.config.data.multiline || this.onPromptConfirmClicked(t)), "custom" === this.config.type && this.config.confirmOnEnter && 13 === t.keyCode && this.onPromptConfirmClicked(t), !0
    }
}),SL.prompt = function (t) {
    var e = new SL.components.Prompt(t);
    return e.show(), e
},SL("components").Resizer = Class.extend({
    init: function (t, e) {
        this.domElement = $(t), this.revealElement = this.domElement.closest(".reveal"), this.options = $.extend({
            padding: 10,
            preserveAspectRatio: !1,
            useOverlay: !1
        }, e), this.mouse = {x: 0, y: 0}, this.mouseStart = {x: 0, y: 0}, this.origin = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, this.resizing = !1, this.domElement.length ? (this.onAnchorMouseDown = this.onAnchorMouseDown.bind(this), this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this), this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this), this.onElementDrop = this.onElementDrop.bind(this), this.layout = this.layout.bind(this), this.build(), this.bind(), this.layout()) : console.warn("Resizer: invalid resize target.")
    }, build: function () {
        this.options.useOverlay && (this.overlay = $('<div class="editing-ui resizer-overlay"></div>').appendTo(document.body).hide()), this.anchorN = $('<div class="editing-ui resizer-anchor" data-direction="n"></div>').appendTo(document.body), this.anchorE = $('<div class="editing-ui resizer-anchor" data-direction="e"></div>').appendTo(document.body), this.anchorS = $('<div class="editing-ui resizer-anchor" data-direction="s"></div>').appendTo(document.body), this.anchorW = $('<div class="editing-ui resizer-anchor" data-direction="w"></div>').appendTo(document.body)
    }, bind: function () {
        this.resizeStarted = new signals.Signal, this.resizeUpdated = new signals.Signal, this.resizeEnded = new signals.Signal, this.getAnchors().on("mousedown", this.onAnchorMouseDown), this.revealElement.on("drop", this.onElementDrop), $(document).on("keyup", this.layout), $(document).on("mouseup", this.layout), $(document).on("mousewheel", this.layout), $(document).on("DOMMouseScroll", this.layout), $(window).on("resize", this.layout)
    }, layout: function () {
        if (!this.destroyIfDetached()) {
            var t = SL.util.getRevealElementGlobalOffset(this.domElement), e = Reveal.getScale(), i = parseInt(this.domElement.css("margin-right"), 10);
            marginBottom = parseInt(this.domElement.css("margin-bottom"), 10);
            var n = t.x - this.options.padding, s = t.y - this.options.padding, o = (this.domElement.width() + i) * e + 2 * this.options.padding;
            height = (this.domElement.height() + marginBottom) * e + 2 * this.options.padding;
            var a = -this.anchorN.outerWidth() / 2;
            this.anchorN.css({left: n + o / 2 + a, top: s + a}), this.anchorE.css({
                left: n + o + a,
                top: s + height / 2 + a
            }), this.anchorS.css({left: n + o / 2 + a, top: s + height + a}), this.anchorW.css({
                left: n + a,
                top: s + height / 2 + a
            }), this.overlay && this.overlay.css({left: n, top: s, width: o, height: height})
        }
    }, show: function () {
        this.getAnchors().addClass("visible"), this.layout()
    }, hide: function () {
        this.getAnchors().removeClass("visible")
    }, destroyIfDetached: function () {
        return 0 === this.domElement.closest("body").length ? (this.destroy(), !0) : !1
    }, getOptions: function () {
        return this.options
    }, getAnchors: function () {
        return this.anchorN.add(this.anchorE).add(this.anchorS).add(this.anchorW)
    }, isResizing: function () {
        return !!this.resizing
    }, isDestroyed: function () {
        return !!this.destroyed
    }, onAnchorMouseDown: function (t) {
        var e = $(t.target).attr("data-direction");
        if (e) {
            t.preventDefault(), this.resizeDirection = e, this.mouseStart.x = t.clientX, this.mouseStart.y = t.clientY;
            var i = SL.util.getRevealElementOffset(this.domElement);
            this.origin.x = i.x, this.origin.y = i.y, this.origin.width = this.domElement.width(), this.origin.height = this.domElement.height(), this.overlay && this.overlay.show(), this.resizing = !0, $(document).on("mousemove", this.onDocumentMouseMove), $(document).on("mouseup", this.onDocumentMouseUp), this.resizeStarted.dispatch()
        }
    }, onDocumentMouseMove: function (t) {
        if (!this.destroyIfDetached() && (this.mouse.x = t.clientX, this.mouse.y = t.clientY, this.resizing)) {
            var e = Reveal.getScale(), i = (this.mouse.x - this.mouseStart.x) / e, n = (this.mouse.y - this.mouseStart.y) / e, s = "", o = "";
            switch (this.resizeDirection) {
                case"e":
                    s = Math.max(this.origin.width + i, 1);
                    break;
                case"w":
                    s = Math.max(this.origin.width - i, 1);
                    break;
                case"s":
                    o = Math.max(this.origin.height + n, 1);
                    break;
                case"n":
                    o = Math.max(this.origin.height - n, 1)
            }
            if (this.options.preserveAspectRatio ? ("" === s && (s = this.origin.width * (o / this.origin.height)), "" === o && (o = this.origin.height * (s / this.origin.width))) : ("" === s && (s = this.domElement.css("width")), "" === o && (o = this.domElement.css("height"))), "absolute" === this.domElement.css("position") && ("n" === this.resizeDirection || "w" === this.resizeDirection))switch (this.resizeDirection) {
                case"w":
                    this.domElement.css("left", Math.round(this.origin.x + i));
                    break;
                case"n":
                    this.domElement.css("top", Math.round(this.origin.y + n))
            }
            this.domElement.css({
                width: s ? s : "",
                height: o ? o : "",
                maxHeight: "none",
                maxWidth: "none"
            }), this.layout(), this.resizeUpdated.dispatch()
        }
    }, onDocumentMouseUp: function () {
        this.resizing = !1, $(document).off("mousemove", this.onDocumentMouseMove), $(document).off("mouseup", this.onDocumentMouseUp), this.overlay && this.overlay.hide(), this.resizeEnded.dispatch()
    }, onElementDrop: function () {
        setTimeout(this.layout, 1)
    }, destroy: function () {
        this.destroyed || (this.destroyed = !0, this.resizeStarted.dispose(), this.resizeUpdated.dispose(), this.resizeEnded.dispose(), $(document).off("mousemove", this.onDocumentMouseMove), $(document).off("mouseup", this.onDocumentMouseUp), $(document).off("keyup", this.layout), $(document).off("mouseup", this.layout), $(document).off("mousewheel", this.layout), $(document).off("DOMMouseScroll", this.layout), $(window).off("resize", this.layout), this.revealElement.off("drop", this.onElementDrop), this.getAnchors().off("mousedown", this.onAnchorMouseDown), this.anchorN.remove(), this.anchorE.remove(), this.anchorS.remove(), this.anchorW.remove(), this.overlay && this.overlay.remove())
    }
}),SL.components.Resizer.delegateOnHover = function (t, e, i) {
    function n() {
        c && (c.destroy(), c = null, $(document).off("mousemove", a), $(document).off("mouseup", r))
    }

    function s(t, e) {
        if (c && c.isResizing())return !1;
        if (c && d && !d.is(t) && n(), !c) {
            var s = {};
            $.extend(s, i), $.extend(s, e), d = $(t), c = new SL.components.Resizer(d, s), c.resizeUpdated.add(l), c.show(), $(document).on("mousemove", a), $(document).on("mouseup", r)
        }
    }

    function o(t) {
        var e = $(t.currentTarget), i = null;
        e.data("resizer-options") && (i = e.data("resizer-options")), e.data("target-element") && (e = e.data("target-element")), s(e, i)
    }

    function a(t) {
        if (c)if (c.isDestroyed())n(); else if (!c.isResizing()) {
            var e = Reveal.getScale(), i = SL.util.getRevealElementGlobalOffset(d), s = 3 * c.getOptions().padding, o = {
                top: i.y - s,
                right: i.x + d.outerWidth(!0) * e + s,
                bottom: i.y + d.outerHeight(!0) * e + s,
                left: i.x - s
            };
            (t.clientX < o.left || t.clientX > o.right || t.clientY < o.top || t.clientY > o.bottom) && n()
        }
    }

    function r(t) {
        setTimeout(function () {
            a(t)
        }, 1)
    }

    function l() {
        h.dispatch(d)
    }

    t.delegate(e, "mouseover", o);
    var c = null, d = null, h = new signals.Signal;
    return {
        show: s, updated: h, layout: function () {
            c && c.layout()
        }, destroy: function () {
            n(), h.dispose(), t.undelegate(e, "mouseover", o)
        }
    }
},SL("components").ScrollShadow = Class.extend({
    init: function (t) {
        this.options = $.extend({
            threshold: 20,
            shadowSize: 10,
            resizeContent: !0
        }, t), this.bind(), this.render(), this.layout()
    }, bind: function () {
        this.layout = this.layout.bind(this), this.sync = this.sync.bind(this), this.onScroll = $.throttle(this.onScroll.bind(this), 100), $(window).on("resize", this.layout), this.options.contentElement.on("scroll", this.onScroll)
    }, render: function () {
        this.shadowTop = $('<div class="sl-scroll-shadow-top">').appendTo(this.options.parentElement), this.shadowBottom = $('<div class="sl-scroll-shadow-bottom">').appendTo(this.options.parentElement), this.shadowTop.height(this.options.shadowSize), this.shadowBottom.height(this.options.shadowSize)
    }, layout: function () {
        var t = this.options.parentElement.height(), e = this.options.footerElement ? this.options.footerElement.outerHeight() : 0, i = this.options.headerElement ? this.options.headerElement.outerHeight() : 0;
        (this.options.resizeContent && this.options.footerElement || this.options.headerElement) && this.options.contentElement.css("height", t - e - i), this.sync()
    }, sync: function () {
        var t = this.options.footerElement ? this.options.footerElement.outerHeight() : 0, e = this.options.headerElement ? this.options.headerElement.outerHeight() : 0, i = this.options.contentElement.scrollTop(), n = this.options.contentElement.prop("scrollHeight"), s = this.options.contentElement.outerHeight(), o = n > s + this.options.threshold, a = i / (n - s);
        this.shadowTop.css({opacity: o ? a : 0, top: e}), this.shadowBottom.css({opacity: o ? 1 - a : 0, bottom: t})
    }, onScroll: function () {
        this.sync()
    }, destroy: function () {
        $(window).off("resize", this.layout), this.options.contentElement.off("scroll", this.onScroll), this.options = null
    }
}),SL("components").Search = Class.extend({
    init: function (t) {
        this.config = t, this.searchForm = $(".search .search-form"), this.searchFormInput = this.searchForm.find(".search-term"), this.searchFormSubmit = this.searchForm.find(".search-submit"), this.searchResults = $(".search .search-results"), this.searchResultsHeader = this.searchResults.find("header"), this.searchResultsTitle = this.searchResults.find(".search-results-title"), this.searchResultsSorting = this.searchResults.find(".search-results-sorting"), this.searchResultsList = this.searchResults.find("ul"), this.searchFormLoader = Ladda.create(this.searchFormSubmit.get(0)), this.bind(), this.checkQuery()
    }, bind: function () {
        this.searchForm.on("submit", this.onSearchFormSubmit.bind(this)), this.searchResultsSorting.find("input[type=radio]").on("click", this.onSearchSortingChange.bind(this))
    }, checkQuery: function () {
        var t = SL.util.getQuery();
        t.search && !this.searchFormInput.val() && (this.searchFormInput.val(t.search), t.page ? this.search(t.search, parseInt(t.page, 10)) : this.search(t.search))
    }, renderSearchResults: function (t) {
        if ($(".search").removeClass("empty"), this.searchResults.show(), this.searchResultsList.empty(), this.renderSearchPagination(t), t.results && t.results.length) {
            this.searchResultsTitle.text(t.total + " " + SL.util.string.pluralize("result", "s", t.total > 1) + ' for "' + this.searchTerm + '"');
            for (var e = 0, i = t.results.length; i > e; e++) {
                var n = t.results[e];
                n.user && this.searchResultsList.append(SL.util.html.createDeckThumbnail(n))
            }
        } else this.searchResultsTitle.text(t.error || SL.locale.get("SEARCH_NO_RESULTS_FOR", {term: this.searchTerm}))
    }, renderSearchPagination: function (t) {
        "undefined" == typeof t.decks_per_page && (t.decks_per_page = 8);
        var e = Math.ceil(t.total / t.decks_per_page);
        this.searchPagination && this.searchPagination.remove(), e > 1 && (this.searchPagination = $('<div class="search-results-pagination"></div>').appendTo(this.searchResultsHeader), this.searchPagination.append('<span class="page">' + SL.locale.get("SEARCH_PAGINATION_PAGE") + " " + this.searchPage + "/" + e + "</span>"), this.searchPage > 1 && this.searchPagination.append('<button class="button outline previous">' + SL.locale.get("PREVIOUS") + "</button>"), this.searchPagination.append('<button class="button outline next">' + SL.locale.get("NEXT") + "</button>"), this.searchPagination.find("button.previous").on("click", function () {
            this.search(this.searchTerm, Math.max(this.searchPage - 1, 1))
        }.bind(this)), this.searchPagination.find("button.next").on("click", function () {
            this.search(this.searchTerm, Math.min(this.searchPage + 1, e))
        }.bind(this)))
    }, search: function (t, e, i) {
        if (this.searchTerm = t || this.searchFormInput.val(), this.searchPage = e || 1, this.searchSort = i || this.searchSort, window.history && "function" == typeof window.history.replaceState) {
            var n = "?search=" + escape(this.searchTerm);
            e > 1 && (n += "&page=" + e), window.history.replaceState(null, null, "/explore" + n)
        }
        this.searchSort || (this.searchSort = this.searchResultsSorting.find("input[type=radio]:checked").val()), this.searchResultsSorting.find("input[type=radio]").prop("checked", !1), this.searchResultsSorting.find("input[type=radio][value=" + this.searchSort + "]").prop("checked", !0), this.searchTerm ? (this.searchFormLoader.start(), $.ajax({
            type: "GET",
            url: this.config.url,
            context: this,
            data: {q: this.searchTerm, page: this.searchPage, sort: this.searchSort}
        }).done(function (t) {
            this.renderSearchResults(t)
        }).fail(function () {
            this.renderSearchResults({error: SL.locale.get("SEARCH_SERVER_ERROR")})
        }).always(function () {
            this.searchFormLoader.stop()
        })) : SL.notify(SL.locale.get("SEARCH_NO_TERM_ERROR"))
    }, sort: function (t) {
        this.search(this.searchTerm, this.searchPage, t)
    }, onSearchFormSubmit: function (t) {
        return this.search(), t.preventDefault(), !1
    }, onSearchSortingChange: function () {
        this.sort(this.searchResultsSorting.find("input[type=radio]:checked").val())
    }
}),SL("components").TemplatesPage = Class.extend({
    init: function (t) {
        this.options = t || {}, this.templateSelected = new signals.Signal, this.render()
    }, render: function () {
        this.domElement = $('<div class="page" data-page-id="' + this.options.id + '">'), this.actionList = $('<div class="action-list">').appendTo(this.domElement), this.templateList = $("<div>").appendTo(this.domElement), this.options.templates.forEach(this.renderTemplate.bind(this)), (this.isDefaultTemplates() || this.isTeamTemplates() && this.getNumberOfVisibleTemplates() > 0) && (this.blankTemplate = this.renderBlankTemplate(), this.duplicateTemplate = this.renderDuplicateTemplate())
    }, renderBlankTemplate: function (t) {
        return t = $.extend({
            container: this.actionList,
            editable: !1
        }, t), this.renderTemplate(new SL.models.Template({label: "Blank", html: ""}), t)
    }, renderDuplicateTemplate: function (t, e) {
        return t = $.extend({
            container: this.actionList,
            editable: !1
        }, t), this.renderTemplate(new SL.models.Template({label: "Duplicate", html: e || ""}), t)
    }, renderTemplate: function (t, e) {
        e = $.extend({prepend: !1, editable: !0, container: this.templateList}, e);
        var i = $('<div class="template-item">');
        i.html(['<div class="template-item-thumb themed">', '<div class="template-item-thumb-content reveal reveal-thumbnail">', '<div class="slides">', t.get("html"), "</div>", '<div class="backgrounds"></div>', "</div>", "</div>"].join("")), i.data("template-model", t), i.on("vclick", this.onTemplateSelected.bind(this, i)), i.find('.sl-block[data-block-type="code"] pre').addClass("hljs"), t.get("label") && i.append('<span class="template-item-label">' + t.get("label") + "</span>"), e.replaceTemplate ? e.replaceTemplate.replaceWith(i) : e.replaceTemplateAt ? e.container.find(".template-item").eq(e.replaceTemplateAt).replaceWith(i) : e.prepend ? e.container.prepend(i) : e.container.append(i);
        var n = i.find("section").attr("data-background-color"), s = i.find("section").attr("data-background-image"), o = i.find("section").attr("data-background-size"), a = $('<div class="slide-background present template-item-thumb-background">');
        if (a.addClass(i.find(".template-item-thumb .reveal section").attr("class")), a.appendTo(i.find(".template-item-thumb .reveal>.backgrounds")), (n || s) && (n && a.css("background-color", n), s && a.css("background-image", 'url("' + s + '")'), o && a.css("background-size", o)), this.isEditable() && e.editable) {
            var r = $('<div class="template-item-options"></div>').appendTo(i), l = $('<div class="option"><span class="icon i-trash-stroke"></span></div>');
            if (l.attr("data-tooltip", "Delete this template"), l.on("vclick", this.onTemplateDeleteClicked.bind(this, i)), l.appendTo(r), this.isTeamTemplates() && SL.current_user.getThemes().size() > 1) {
                var c = $('<div class="option"><span class="icon i-ellipsis-v"></span></div>');
                c.attr("data-tooltip", "Theme availability"), c.on("vclick", this.onTemplateThemeClicked.bind(this, i)), c.appendTo(r)
            }
        }
        return i
    }, refresh: function () {
        this.duplicateTemplate && this.duplicateTemplate.length && (this.duplicateTemplate = this.renderDuplicateTemplate({replaceTemplate: this.duplicateTemplate}, SL.data.templates.templatize(Reveal.getCurrentSlide()))), this.templateList.find(".placeholder").remove();
        var t = SL.view.getCurrentTheme(), e = this.domElement.find(".template-item");
        if (this.isTeamTemplates() && e.each(function (e, i) {
                var n = $(i), s = n.data("template-model").isAvailableForTheme(t);
                n.toggleClass(SL.current_user.isEnterpriseManager() ? "semi-hidden" : "hidden", !s)
            }.bind(this)), e = this.domElement.find(".template-item:not(.hidden)"), e.length)e.each(function (e, i) {
            var n = $(i), s = (n.data("template-model"), n.find(".template-item-thumb"));
            s.attr("class", s.attr("class").replace(/theme\-(font|color)\-([a-z0-9-])*/gi, "")), s.addClass("theme-font-" + t.get("font")), s.addClass("theme-color-" + t.get("color")), s.find(".template-item-thumb-content img[data-src]").each(function () {
                this.setAttribute("src", this.getAttribute("data-src")), this.removeAttribute("data-src")
            }), SL.data.templates.layoutTemplate(s.find("section"), !0)
        }.bind(this)), this.templateList.find(".placeholder").remove(); else {
            var i = "You haven't saved any custom templates yet.<br>Click the button below to save one now.";
            this.isTeamTemplates() && (i = SL.current_user.isEnterpriseManager() ? "Templates saved here are made available to the everyone in your team." : "No templates are available for the current theme."), this.templateList.append('<p class="placeholder">' + i + "</p>")
        }
    }, appendTo: function (t) {
        this.domElement.appendTo(t)
    }, saveCurrentSlide: function () {
        var t = SL.config.AJAX_SLIDE_TEMPLATES_CREATE;
        return this.isTeamTemplates() && (t = SL.config.AJAX_TEAM_SLIDE_TEMPLATES_CREATE), $.ajax({
            type: "POST",
            url: t,
            context: this,
            data: {slide_template: {html: SL.data.templates.templatize(Reveal.getCurrentSlide())}}
        }).done(function (t) {
            this.options.templates.create(t, {prepend: !0}).then(function (t) {
                this.renderTemplate(t, {prepend: !0}), this.refresh()
            }.bind(this)), SL.notify(SL.locale.get("TEMPLATE_CREATE_SUCCESS"))
        }).fail(function () {
            SL.notify(SL.locale.get("TEMPLATE_CREATE_ERROR"), "negative")
        })
    }, isEditable: function () {
        return this.isUserTemplates() || this.isTeamTemplates() && SL.current_user.isEnterpriseManager()
    }, isDefaultTemplates: function () {
        return "default" === this.options.id
    }, isUserTemplates: function () {
        return "user" === this.options.id
    }, isTeamTemplates: function () {
        return "team" === this.options.id
    }, getNumberOfVisibleTemplates: function () {
        return this.domElement.find(".template-item:not(.hidden)").length
    }, onTemplateSelected: function (t, e) {
        e.preventDefault(), this.templateSelected.dispatch(t.data("template-model"))
    }, onTemplateDeleteClicked: function (t, e) {
        return e.preventDefault(), SL.prompt({
            anchor: $(e.currentTarget),
            title: SL.locale.get("TEMPLATE_DELETE_CONFIRM"),
            type: "select",
            hoverTarget: t,
            data: [{html: "<h3>Cancel</h3>"}, {
                html: "<h3>Delete</h3>",
                selected: !0,
                className: "negative",
                callback: function () {
                    var e = t.data("template-model"), i = SL.config.AJAX_SLIDE_TEMPLATES_DELETE(e.get("id"));
                    this.isTeamTemplates() && (i = SL.config.AJAX_TEAM_SLIDE_TEMPLATES_DELETE(e.get("id"))), $.ajax({
                        type: "DELETE",
                        url: i,
                        context: this
                    }).done(function () {
                        t.remove(), this.refresh()
                    })
                }.bind(this)
            }]
        }), !1
    }, onTemplateThemeClicked: function (t, e) {
        e.preventDefault();
        var i = SL.current_user.getThemes();
        if (i.size() > 0) {
            var n = t.data("template-model"), s = n.get("id"), o = n.isAvailableForAllThemes(), a = ($(Reveal.getCurrentSlide()), [{
                value: "All themes",
                selected: o,
                exclusive: !0,
                className: "header-item",
                callback: function () {
                    i.forEach(function (t) {
                        t.hasSlideTemplate(s) && t.removeSlideTemplate([s]).fail(this.onGenericError)
                    }.bind(this)), this.refresh()
                }.bind(this)
            }]);
            i.forEach(function (t) {
                a.push({
                    value: t.get("name"), selected: o ? !1 : n.isAvailableForTheme(t), callback: function (e, i) {
                        i ? t.addSlideTemplate([s]).fail(this.onGenericError) : t.removeSlideTemplate([s]).fail(this.onGenericError), this.refresh()
                    }.bind(this)
                })
            }.bind(this)), SL.prompt({
                anchor: $(e.currentTarget),
                title: "Available for...",
                type: "list",
                alignment: "l",
                data: a,
                multiselect: !0,
                optional: !0,
                hoverTarget: t
            })
        }
        return !1
    }, onGenericError: function () {
        SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
    }
}),SL("components").Templates = Class.extend({
    init: function (t) {
        this.options = $.extend({
            alignment: "",
            width: 450,
            height: 800,
            arrowSize: 8
        }, t), this.pages = [], this.pagesHash = {}, SL.data.templates.getUserTemplates(), SL.data.templates.getTeamTemplates(), this.render(), this.bind()
    }, render: function () {
        this.domElement = $('<div class="sl-templates">'), this.innerElement = $('<div class="sl-templates-inner">').appendTo(this.domElement), this.domElement.data("instance", this), this.headerElement = $('<div class="sl-templates-header">').appendTo(this.innerElement), this.bodyElement = $('<div class="sl-templates-body">').appendTo(this.innerElement), this.footerElement = $('<div class="sl-templates-footer">').appendTo(this.innerElement), this.addTemplateButton = $(['<div class="add-new-template ladda-button" data-style="zoom-out" data-spinner-color="#222" data-spinner-size="32">', '<span class="icon i-plus"></span>', "<span>Save current slide</span>", "</div>"].join("")), this.addTemplateButton.on("click", this.onTemplateCreateClicked.bind(this)), this.addTemplateButton.appendTo(this.footerElement), this.addTemplateButtonLoader = Ladda.create(this.addTemplateButton.get(0))
    }, renderTemplates: function () {
        this.pages = [], this.headerElement.empty(), this.bodyElement.empty(), this.renderPage("default", "Default", SL.data.templates.getDefaultTemplates()), SL.data.templates.getUserTemplates(function (t) {
            this.renderPage("user", "Yours", t)
        }.bind(this)), SL.data.templates.getTeamTemplates(function (t) {
            (SL.current_user.isEnterpriseManager() || !t.isEmpty()) && this.renderPage("team", "Team", t)
        }.bind(this))
    }, renderPage: function (t, e, i) {
        var n = $('<div class="page-tab" data-page-id="' + t + '">' + e + "</div>");
        n.on("vclick", function () {
            this.showPage(t), SL.analytics.trackEditor("Slide templates tab clicked", t)
        }.bind(this)), n.appendTo(this.headerElement);
        var s = new SL.components.TemplatesPage({id: t, templates: i});
        s.templateSelected.add(this.onTemplateSelected.bind(this)), s.appendTo(this.bodyElement), this.pages.push(s), this.pagesHash[t] = s, this.domElement.attr("data-pages-total", this.pages.length)
    }, selectDefaultPage: function () {
        var t = this.pages.some(function (t) {
            return t.isTeamTemplates() && t.getNumberOfVisibleTemplates() > 0
        });
        this.showPage(t ? "team" : "default")
    }, showPage: function (t) {
        this.currentPage = this.pagesHash[t], this.currentPage ? (this.bodyElement.find(".page").removeClass("past present future"), this.bodyElement.find('.page[data-page-id="' + t + '"]').addClass("present"), this.bodyElement.find('.page[data-page-id="' + t + '"]').prevAll().addClass("past"), this.bodyElement.find('.page[data-page-id="' + t + '"]').nextAll().addClass("future"), this.headerElement.find(".page-tab").removeClass("selected"), this.headerElement.find('.page-tab[data-page-id="' + t + '"]').addClass("selected")) : console.warn('Template page "' + t + '" not found.')
    }, refreshPages: function () {
        this.pages.forEach(function (t) {
            t.refresh()
        })
    }, bind: function () {
        this.layout = this.layout.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onClicked = this.onClicked.bind(this), this.domElement.on("vclick", this.onClicked)
    }, layout: function () {
        var t = 10, e = this.domElement.outerWidth(), i = this.domElement.outerHeight(), n = this.options.width, s = this.options.height, o = {};
        n = Math.min(n, i - 2 * t), s = Math.min(s, i - 2 * t), this.options.anchor && (o.left = this.options.anchor.offset().left, o.top = this.options.anchor.offset().top, o.width = this.options.anchor.outerWidth(), o.height = this.options.anchor.outerHeight(), o.right = o.left + o.width, o.bottom = o.top + o.height);
        var a, r;
        this.options.anchor && "r" === this.options.alignment ? (n = Math.min(n, o.left - 2 * t), a = o.left - n - this.options.arrowSize - t, r = o.top + o.height / 2 - s / 2) : this.options.anchor && "b" === this.options.alignment ? (s = Math.min(s, o.top - 2 * t), a = o.left + o.width / 2 - n / 2, r = o.top - s - this.options.arrowSize - t) : this.options.anchor && "l" === this.options.alignment ? (n = Math.min(n, e - o.right - 2 * t), a = o.right + this.options.arrowSize + t, r = o.top + o.height / 2 - s / 2) : (a = (e - n) / 2, r = (i - s) / 2), this.innerElement.css({
            width: n,
            height: s,
            left: a,
            top: r
        })
    }, show: function (t) {
        this.options = $.extend(this.options, t), 0 === this.pages.length && this.renderTemplates(), this.domElement.attr("data-alignment", this.options.alignment), this.domElement.appendTo(document.body), SL.util.skipCSSTransitions(this.domElement), $(window).on("resize", this.layout), SL.keyboard.keydown(this.onKeyDown), this.refreshPages(), this.hasSelectedDefaultPage || (this.hasSelectedDefaultPage = !0, this.selectDefaultPage()), this.layout()
    }, hide: function () {
        this.domElement.detach(), $(window).off("resize", this.layout), SL.keyboard.release(this.onKeyDown)
    }, onTemplateSelected: function (t) {
        this.options.callback && (this.hide(), this.options.callback(t.get("html")))
    }, onTemplateCreateClicked: function () {
        return this.currentPage.isEditable() || this.showPage("user"), this.addTemplateButtonLoader.start(), this.currentPage.saveCurrentSlide().then(function () {
            this.addTemplateButtonLoader.stop()
        }.bind(this), function () {
            this.addTemplateButtonLoader.stop()
        }.bind(this)), SL.analytics.trackEditor(this.currentPage.isTeamTemplates() ? "Saved team template" : "Saved user template"), !1
    }, onKeyDown: function (t) {
        return 27 === t.keyCode ? (this.hide(), !1) : !0
    }, onClicked: function (t) {
        $(t.target).is(this.domElement) && (t.preventDefault(), this.hide())
    }, destroy: function () {
        $(window).off("resize", this.layout), SL.keyboard.release(this.onKeyDown), this.domElement.remove()
    }
}),SL("components").TextEditor = Class.extend({
    init: function (t) {
        this.options = $.extend({
            type: "",
            value: ""
        }, t), this.saved = new signals.Signal, this.canceled = new signals.Signal, this.render(), this.bind(), this.originalValue = this.options.value || "", "string" == typeof this.options.value && this.setValue(this.options.value), SL.editor.controllers.Capabilities.isTouchEditor() || this.focusInput()
    }, render: function () {
        this.domElement = $('<div class="sl-text-editor">').appendTo(document.body), this.innerElement = $('<div class="sl-text-editor-inner">').appendTo(this.domElement), this.domElement.attr("data-type", this.options.type), "html" === this.options.type ? this.renderHTMLInput() : this.renderTextInput(), this.footerElement = $(['<div class="sl-text-editor-footer">', '<button class="button l outline white cancel-button">Cancel</button>', '<button class="button l positive save-button">Save</button>', "</div>"].join("")).appendTo(this.innerElement), setTimeout(function () {
            this.domElement.addClass("visible")
        }.bind(this), 1)
    }, renderTextInput: function () {
        this.inputElement = $('<textarea class="sl-text-editor-input">').appendTo(this.innerElement), "code" === this.options.type && this.inputElement.tabby({tabString: "    "})
    }, renderHTMLInput: function () {
        this.inputElement = $('<div class="editor sl-text-editor-input">').appendTo(this.innerElement), this.codeEditor && "function" == typeof this.codeEditor.destroy && (this.codeEditor.destroy(), this.codeEditor = null);
        try {
            this.codeEditor = ace.edit(this.inputElement.get(0)), this.codeEditor.setTheme("ace/theme/monokai"), this.codeEditor.setDisplayIndentGuides(!0), this.codeEditor.setShowPrintMargin(!1), this.codeEditor.getSession().setMode("ace/mode/html")
        } catch (t) {
            console.log("An error occurred while initializing the Ace editor.")
        }
    }, bind: function () {
        this.footerElement.find(".save-button").on("click", this.save.bind(this)), this.footerElement.find(".cancel-button").on("click", this.cancel.bind(this)), this.onKeyDown = this.onKeyDown.bind(this), SL.keyboard.keydown(this.onKeyDown), this.onBackgroundClicked = this.onBackgroundClicked.bind(this), this.domElement.on("vclick", this.onBackgroundClicked)
    }, save: function () {
        this.saved.dispatch(this.getValue()), this.destroy()
    }, cancel: function () {
        var t = this.originalValue || "", e = this.getValue() || "";
        e !== t ? this.cancelPrompt || (this.cancelPrompt = SL.prompt({
            title: "Discard unsaved changes?",
            type: "select",
            data: [{html: "<h3>Cancel</h3>"}, {
                html: "<h3>Discard</h3>",
                selected: !0,
                className: "negative",
                callback: function () {
                    this.canceled.dispatch(), this.destroy()
                }.bind(this)
            }]
        }), this.cancelPrompt.destroyed.add(function () {
            this.cancelPrompt = null
        }.bind(this))) : (this.canceled.dispatch(), this.destroy())
    }, focusInput: function () {
        this.codeEditor ? this.codeEditor.focus() : this.inputElement.focus()
    }, setValue: function (t) {
        this.originalValue = t || "", this.codeEditor ? this.codeEditor.env.document.setValue(t) : this.inputElement.val(t)
    }, getValue: function () {
        return this.codeEditor ? this.codeEditor.env.document.getValue() : this.inputElement.val()
    }, onBackgroundClicked: function (t) {
        $(t.target).is(this.domElement) && (this.cancel(), t.preventDefault())
    }, onKeyDown: function (t) {
        return 27 === t.keyCode ? (this.cancel(), !1) : (t.metaKey || t.ctrlKey) && 83 === t.keyCode ? (this.save(), !1) : !0
    }, destroy: function () {
        this.saved.dispose(), this.canceled.dispose(), SL.keyboard.release(this.onKeyDown), this.domElement.remove()
    }
}),SL("components").ThemeOptions = Class.extend({
    init: function (t) {
        if (!t.container)throw"Cannot build theme options without container";
        if (!t.model)throw"Cannot build theme options without model";
        this.config = $.extend({
            center: !0,
            rollingLinks: !0,
            colors: SL.config.THEME_COLORS,
            fonts: SL.config.THEME_FONTS,
            transitions: SL.config.THEME_TRANSITIONS,
            backgroundTransitions: SL.config.THEME_BACKGROUND_TRANSITIONS
        }, t), this.theme = t.model, this.changed = new signals.Signal, this.render(), this.updateSelection(), this.toggleDeprecatedOptions(), this.scrollToTop()
    }, render: function () {
        this.domElement = $('<div class="sl-themeoptions">').appendTo(this.config.container), "string" == typeof this.config.className && this.domElement.addClass(this.config.className), this.config.themes && this.renderThemes(), (this.config.center || this.config.rollingLinks) && this.renderOptions(), this.config.colors && this.renderColors(), this.config.fonts && this.renderFonts(), this.config.transitions && this.renderTransitions(), this.config.backgroundTransitions && this.renderBackgroundTransitions()
    }, renderThemes: function () {
        if (this.config.themes && !this.config.themes.isEmpty()) {
            var t = $('<div class="section selector theme"><h3>Theme</h3><ul></ul></div>').appendTo(this.domElement), e = t.find("ul");
            e.append(['<li data-theme="" class="custom">', '<span class="thumb-icon icon i-equalizer"></span>', '<span class="thumb-label">Custom</span>', "</li>"].join("")), this.config.themes.forEach(function (t) {
                var i = $('<li data-theme="' + t.get("id") + '"><span class="thumb-label" title="' + t.get("name") + '">' + t.get("name") + "</span></li>").appendTo(e);
                t.hasThumbnail() && i.css("background-image", 'url("' + t.get("thumbnail_url") + '")')
            }), this.domElement.find(".theme li").on("vclick", this.onThemeClicked.bind(this))
        }
    }, renderOptions: function () {
        var t = $('<div class="section options"><h3>Options</h3></div>').appendTo(this.domElement), e = $('<div class="options"></div>').appendTo(t);
        this.config.center && (e.append('<div class="unit sl-checkbox outline"><input id="theme-center" value="center" type="checkbox"><label for="theme-center" data-tooltip="Center slide contents vertically (not visible while editing)" data-tooltip-maxwidth="220" data-tooltip-delay="500">Vertical centering</label></div>'), t.find("#theme-center").on("change", this.onOptionChanged.bind(this))), this.config.rollingLinks && (e.append('<div class="unit sl-checkbox outline"><input id="theme-rolling_links" value="rolling_links" type="checkbox"><label for="theme-rolling_links" data-tooltip="Use a 3D hover effect on links" data-tooltip-maxwidth="220" data-tooltip-delay="500">Rolling links</label></div>'), t.find("#theme-rolling_links").on("change", this.onOptionChanged.bind(this)))
    }, renderColors: function () {
        var t = $('<div class="section selector color"><h3>Color</h3><ul></ul></div>').appendTo(this.domElement), e = t.find("ul");
        this.config.colors.forEach(function (t) {
            var i = $('<li data-color="' + t.id + '"><div class="theme-body-color-block"></div><div class="theme-link-color-block"></div></li>');
            i.addClass("theme-color-" + t.id), i.addClass("themed"), i.appendTo(e), t.tooltip && i.attr({
                "data-tooltip": t.tooltip,
                "data-tooltip-delay": 250,
                "data-tooltip-maxwidth": 300
            }), !SL.current_user.isPro() && t.pro && i.attr("data-pro", "true")
        }.bind(this)), this.domElement.find(".color li").on("vclick", this.onColorClicked.bind(this))
    }, renderFonts: function () {
        var t = $('<div class="section selector font"><h3>Typography</h3><ul></ul></div>').appendTo(this.domElement), e = t.find("ul");
        this.config.fonts.forEach(function (t) {
            var i = $('<li data-font="' + t.id + '" data-name="' + t.title + '"><div class="themed"><h1>' + t.title + "</h1><a>Type</a></div></li>");
            i.addClass("theme-font-" + t.id), i.appendTo(e), t.deprecated === !0 && i.addClass("deprecated"), t.tooltip && i.attr({
                "data-tooltip": t.tooltip,
                "data-tooltip-delay": 250,
                "data-tooltip-maxwidth": 300
            })
        }.bind(this)), this.domElement.find(".font li").on("vclick", this.onFontClicked.bind(this))
    }, renderTransitions: function () {
        var t = $('<div class="section selector transition"><h3>Transition</h3><ul></ul></div>').appendTo(this.domElement), e = t.find("ul");
        this.config.transitions.forEach(function (t) {
            var i = $('<li data-transition="' + t.id + '"></li>').appendTo(e);
            t.deprecated === !0 && i.addClass("deprecated"), t.title && i.attr({
                "data-tooltip": t.title,
                "data-tooltip-oy": -5
            })
        }.bind(this)), this.domElement.find(".transition li").on("vclick", this.onTransitionClicked.bind(this))
    }, renderBackgroundTransitions: function () {
        var t = $('<div class="section selector background-transition"></div>').appendTo(this.domElement);
        t.append('<h3>Background Transition <span class="icon i-info info-icon" data-tooltip="Background transitions apply when navigating to or from a slide that has a background image or color." data-tooltip-maxwidth="250"></span></h3>'), t.append("<ul>");
        var e = t.find("ul");
        this.config.backgroundTransitions.forEach(function (t) {
            var i = $('<li data-background-transition="' + t.id + '"></li>').appendTo(e);
            t.deprecated === !0 && i.addClass("deprecated"), t.title && i.attr({
                "data-tooltip": t.title,
                "data-tooltip-oy": -5
            })
        }.bind(this)), this.domElement.find(".background-transition li").on("vclick", this.onBackgroundTransitionClicked.bind(this))
    }, populate: function (t) {
        t && (this.theme = t, this.updateSelection(), this.toggleDeprecatedOptions(), this.scrollToTop())
    }, scrollToTop: function () {
        this.domElement.scrollTop(0)
    }, updateSelection: function () {
        this.config.themes && !this.config.themes.isEmpty() && this.domElement.toggleClass("using-theme", this.theme.has("id")), this.config.center && this.domElement.find("#theme-center").prop("checked", 1 == this.theme.get("center")), this.config.rollingLinks && this.domElement.find("#theme-rolling_links").prop("checked", 1 == this.theme.get("rolling_links")), this.domElement.find(".theme li").removeClass("selected"), this.domElement.find(".theme li[data-theme=" + this.theme.get("id") + "]").addClass("selected"), 0 !== this.domElement.find(".theme li.selected").length || this.theme.has("id") || this.domElement.find('.theme li[data-theme=""]').addClass("selected"), this.domElement.find(".color li").removeClass("selected"), this.domElement.find(".color li[data-color=" + this.theme.get("color") + "]").addClass("selected"), this.domElement.find(".font li").removeClass("selected"), this.domElement.find(".font li[data-font=" + this.theme.get("font") + "]").addClass("selected"), this.domElement.find(".font li").each(function (t, e) {
            SL.util.html.removeClasses(e, function (t) {
                return t.match(/^theme\-color\-/gi)
            }), $(e).addClass("theme-color-" + this.theme.get("color"))
        }.bind(this)), this.domElement.find(".transition li").removeClass("selected"), this.domElement.find(".transition li[data-transition=" + this.theme.get("transition") + "]").addClass("selected"), this.domElement.find(".background-transition li").removeClass("selected"), this.domElement.find(".background-transition li[data-background-transition=" + this.theme.get("background_transition") + "]").addClass("selected")
    }, applySelection: function () {
        SL.helpers.ThemeController.paint(this.theme, {center: !1, js: !1})
    }, toggleDeprecatedOptions: function () {
        this.domElement.find(".font .deprecated").toggle(this.theme.isFontDeprecated()), this.domElement.find(".transition .deprecated").toggle(this.theme.isTransitionDeprecated()), this.domElement.find(".background-transition .deprecated").toggle(this.theme.isBackgroundTransitionDeprecated())
    }, getTheme: function () {
        return this.theme
    }, onThemeClicked: function (t) {
        var e = $(t.currentTarget), i = e.data("theme");
        if (i) {
            var n = this.config.themes.getByProperties({id: i});
            if (n) {
                if (!n.isLoading()) {
                    var s = $('<div class="thumb-preloader hidden"><div class="spinner centered"></div></div>').appendTo(e), o = setTimeout(function () {
                        s.removeClass("hidden")
                    }, 1);
                    SL.util.html.generateSpinners(), e.addClass("selected"), n.load().done(function () {
                        this.theme = n.clone(), this.updateSelection(), this.applySelection(), this.changed.dispatch()
                    }.bind(this)).fail(function () {
                        SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), e.removeClass("selected")
                    }.bind(this)).always(function () {
                        clearTimeout(o), s.remove()
                    }.bind(this))
                }
            } else SL.notify("Could not find theme data", "negative")
        } else this.theme.set("id", null), this.theme.set("js", null), this.theme.set("css", null), this.theme.set("less", null), this.theme.set("html", null), this.updateSelection(), this.applySelection(), this.changed.dispatch();
        SL.analytics.trackTheming("Theme option selected")
    }, onOptionChanged: function () {
        this.theme.set("center", this.domElement.find("#theme-center").is(":checked")), this.theme.set("rolling_links", this.domElement.find("#theme-rolling_links").is(":checked")), this.updateSelection(), this.applySelection(), this.changed.dispatch()
    }, onColorClicked: function (t) {
        return t.preventDefault(), $(t.currentTarget).is("[data-pro]") ? void window.open("/pricing") : (this.theme.set("color", $(t.currentTarget).data("color")), this.updateSelection(), this.applySelection(), SL.analytics.trackTheming("Color option selected", this.theme.get("color")), void this.changed.dispatch())
    }, onFontClicked: function (t) {
        t.preventDefault(), this.theme.set("font", $(t.currentTarget).data("font")), this.updateSelection(), this.applySelection(), SL.analytics.trackTheming("Font option selected", this.theme.get("font")), this.changed.dispatch()
    }, onTransitionClicked: function (t) {
        t.preventDefault(), this.theme.set("transition", $(t.currentTarget).data("transition")), this.updateSelection(), this.applySelection(), SL.analytics.trackTheming("Transition option selected", this.theme.get("transition")), this.changed.dispatch()
    }, onBackgroundTransitionClicked: function (t) {
        t.preventDefault(), this.theme.set("background_transition", $(t.currentTarget).data("background-transition")), this.updateSelection(), this.applySelection(), SL.analytics.trackTheming("Background transition option selected", this.theme.get("background_transition")), this.changed.dispatch()
    }, destroy: function () {
        this.changed.dispose(), this.domElement.remove(), this.theme = null, this.config = null
    }
}),SL.tooltip = function () {
    function t() {
        a = $("<div>").addClass("sl-tooltip"), r = $('<p class="sl-tooltip-inner">').appendTo(a), l = $('<div class="sl-tooltip-arrow">').appendTo(a), c = $('<div class="sl-tooltip-arrow-fill">').appendTo(l), e()
    }

    function e() {
        n = n.bind(this), $(document).on("keydown, mousedown", function () {
            SL.tooltip.hide()
        }), SL.util.device.IS_PHONE || SL.util.device.IS_TABLET || ($(document.body).delegate("[data-tooltip]", "mouseenter", function (t) {
            var e = $(t.currentTarget);
            if (!e.is("[no-tooltip]")) {
                var n = e.attr("data-tooltip"), s = e.attr("data-tooltip-delay"), o = e.attr("data-tooltip-align"), a = e.attr("data-tooltip-alignment"), r = e.attr("data-tooltip-maxwidth"), l = e.attr("data-tooltip-maxheight"), c = e.attr("data-tooltip-ox"), d = e.attr("data-tooltip-oy"), h = e.attr("data-tooltip-x"), u = e.attr("data-tooltip-y");
                if (n) {
                    var p = {
                        anchor: e,
                        align: o,
                        alignment: a,
                        delay: parseInt(s, 10),
                        maxwidth: parseInt(r, 10),
                        maxheight: parseInt(l, 10)
                    };
                    c && (p.ox = parseFloat(c)), d && (p.oy = parseFloat(d)), h && u && (p.x = parseFloat(h), p.y = parseFloat(u), p.anchor = null), i(n, p)
                }
            }
        }), $(document.body).delegate("[data-tooltip]", "mouseleave", s))
    }

    function i(t, e) {
        if (!SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET) {
            d = e || {}, clearTimeout(p);
            var s = Date.now() - f;
            if ("number" == typeof d.delay && s > 500)return p = setTimeout(i.bind(this, t, d), d.delay), void delete d.delay;
            a.css("opacity", 0), a.appendTo(document.body), r.html(t), a.css({
                left: 0,
                top: 0,
                "max-width": d.maxwidth ? d.maxwidth : null,
                "max-height": d.maxheight ? d.maxheight : null
            }), d.align && a.css("text-align", d.align), n(), a.stop(!0, !0).animate({opacity: 1}, {duration: 150}), $(window).on("resize scroll", n)
        }
    }

    function n() {
        var t = $(d.anchor);
        if (t.length) {
            var e = d.alignment || "auto", i = 10, n = $(window).scrollLeft(), s = $(window).scrollTop(), o = t.offset();
            o.x = o.left, o.y = o.top, d.anchor.parents(".reveal .slides").length && "undefined" != typeof window.Reveal && (o = SL.util.getRevealElementGlobalOffset(d.anchor));
            var c = t.outerWidth(), p = t.outerHeight(), f = r.outerWidth(), m = r.outerHeight(), g = o.x - $(window).scrollLeft(), v = o.y - $(window).scrollTop(), b = f / 2, S = m / 2;
            switch ("number" == typeof d.ox && (g += d.ox), "number" == typeof d.oy && (v += d.oy), "auto" === e && (e = o.y - (m + i + h) < s ? "b" : "t"), e) {
                case"t":
                    g += (c - f) / 2, v -= m + h + u;
                    break;
                case"b":
                    g += (c - f) / 2, v += p + h + u;
                    break;
                case"l":
                    g -= f + h + u, v += (p - m) / 2;
                    break;
                case"r":
                    g += c + h + u, v += (p - m) / 2
            }
            g = Math.min(Math.max(g, i), window.innerWidth - f - i), v = Math.min(Math.max(v, i), window.innerHeight - m - i);
            var E = h + 3;
            switch (e) {
                case"t":
                    b = o.x - g - n + c / 2, S = m, b = Math.min(Math.max(b, E), f - E);
                    break;
                case"b":
                    b = o.x - g - n + c / 2, S = -h, b = Math.min(Math.max(b, E), f - E);
                    break;
                case"l":
                    b = f, S = o.y - v - s + p / 2, S = Math.min(Math.max(S, E), m - E);
                    break;
                case"r":
                    b = -h, S = o.y - v - s + p / 2, S = Math.min(Math.max(S, E), m - E)
            }
            l.css({left: Math.round(b), top: Math.round(S)}), a.css({
                left: Math.round(g),
                top: Math.round(v)
            }).attr("data-alignment", e)
        }
    }

    function s() {
        o() && (f = Date.now()), clearTimeout(p), a.remove().stop(!0, !0), $(window).off("resize scroll", n)
    }

    function o() {
        return a.parent().length > 0
    }

    var a, r, l, c, d, h = 6, u = 4, p = -1, f = -1;
    return t(), {
        show: function (t, e) {
            i(t, e)
        }, hide: function () {
            s()
        }, anchorTo: function (t, e, i) {
            var n = {};
            "undefined" != typeof e && (n["data-tooltip"] = e), "number" == typeof i.delay && (n["data-tooltip-delay"] = i.delay), "string" == typeof i.alignment && (n["data-tooltip-alignment"] = i.alignment), $(t).attr(n)
        }
    }
}(),SL("components").Tutorial = Class.extend({
    init: function (t) {
        this.options = $.extend({steps: []}, t), this.options.steps.forEach(function (t) {
            "undefined" == typeof t.backwards && (t.backwards = function () {
            }), "undefined" == typeof t.forwards && (t.forwards = function () {
            })
        }), this.skipped = new signals.Signal, this.finished = new signals.Signal, this.index = -1, this.render(), this.bind(), this.layout(), this.paint(), this.controlsButtons.css("width", this.controlsButtons.outerWidth() + 10)
    }, render: function () {
        this.domElement = $('<div class="sl-tutorial">'), this.domElement.appendTo(document.body), this.canvas = $('<canvas class="sl-tutorial-canvas">'), this.canvas.appendTo(this.domElement), this.canvas = this.canvas.get(0), this.context = this.canvas.getContext("2d"), this.controls = $('<div class="sl-tutorial-controls">'), this.controls.appendTo(this.domElement), this.controlsInner = $('<div class="sl-tutorial-controls-inner">'), this.controlsInner.appendTo(this.controls), this.renderPagination(), this.controlsButtons = $('<div class="sl-tutorial-buttons">'), this.controlsButtons.appendTo(this.controlsInner), this.nextButton = $('<button class="button no-transition white l sl-tutorial-next">Next</button>'), this.nextButton.appendTo(this.controlsButtons), this.skipButton = $('<button class="button no-transition outline white l sl-tutorial-skip">Skip tutorial</button>'), this.skipButton.appendTo(this.controlsButtons), this.messageElement = $('<div class="sl-tutorial-message no-transition">').hide(), this.messageElement.appendTo(this.domElement)
    }, renderPagination: function () {
        this.pagination = $('<div class="sl-tutorial-pagination">'), this.pagination.appendTo(this.controlsInner), this.options.steps.forEach(function (t, e) {
            $('<li class="sl-tutorial-pagination-number">').appendTo(this.pagination).on("click", this.step.bind(this, e))
        }.bind(this))
    }, updatePagination: function () {
        this.pagination.find(".sl-tutorial-pagination-number").each(function (t, e) {
            e = $(e), e.toggleClass("past", t < this.index), e.toggleClass("present", t === this.index), e.toggleClass("future", t > this.index)
        }.bind(this))
    }, bind: function () {
        this.onKeyDown = this.onKeyDown.bind(this), this.onSkipClicked = this.onSkipClicked.bind(this), this.onNextClicked = this.onNextClicked.bind(this), this.onWindowResize = this.onWindowResize.bind(this), SL.keyboard.keydown(this.onKeyDown), this.skipButton.on("click", this.onSkipClicked), this.nextButton.on("click", this.onNextClicked), $(window).on("resize", this.onWindowResize)
    }, unbind: function () {
        SL.keyboard.release(this.onKeyDown), this.skipButton.off("click", this.onSkipClicked), this.nextButton.off("click", this.onNextClicked), $(window).off("resize", this.onWindowResize)
    }, prev: function () {
        this.step(Math.max(this.index - 1, 0))
    }, next: function () {
        this.index + 1 >= this.options.steps.length ? (this.finished.dispatch(), this.destroy()) : this.step(Math.min(this.index + 1, this.options.steps.length - 1))
    }, step: function (t) {
        if (this.index < t) {
            for (; this.index < t;)this.index += 1, this.options.steps[this.index].forwards.call(this.options.context);
            this.index + 1 === this.options.steps.length && (this.skipButton.hide(), this.nextButton.text("Get started"), this.domElement.addClass("last-step"))
        } else if (this.index > t) {
            for (this.index + 1 === this.options.steps.length && (this.skipButton.show(), this.nextButton.text("Next"), this.domElement.removeClass("last-step")); this.index > t;)this.options.steps[this.index].backwards.call(this.options.context), this.index -= 1;
            this.options.steps[this.index].forwards.call(this.options.context)
        }
        this.updatePagination()
    }, layout: function () {
        this.width = window.innerWidth, this.height = window.innerHeight;
        if (this.cutoutElement) {
            var t = this.cutoutElement.offset();
            this.cutoutRect = {
                x: t.left - this.cutoutPadding,
                y: t.top - this.cutoutPadding,
                width: this.cutoutElement.outerWidth() + 2 * this.cutoutPadding,
                height: this.cutoutElement.outerHeight() + 2 * this.cutoutPadding
            }
        }
        if (this.messageElement.is(":visible")) {
            var e = 20, i = this.messageElement.outerWidth(), n = this.messageElement.outerHeight(), s = {
                left: (window.innerWidth - i) / 2,
                top: (window.innerHeight - n) / 2
            };
            if (this.messageOptions.anchor && this.messageOptions.alignment) {
                var o = this.messageOptions.anchor.offset(), a = this.messageOptions.anchor.outerWidth(), r = this.messageOptions.anchor.outerHeight();
                switch (this.messageOptions.alignment) {
                    case"t":
                        s.left = o.left + (a - i) / 2, s.top = o.top - n - e;
                        break;
                    case"r":
                        s.left = o.left + a + e, s.top = o.top + (r - n) / 2;
                        break;
                    case"b":
                        s.left = o.left + (a - i) / 2, s.top = o.top + r + e;
                        break;
                    case"l":
                        s.left = o.left - i - e, s.top = o.top + (r - n) / 2;
                        break;
                    case"tl":
                        s.left = o.left - i - e, s.top = o.top - 20
                }
            }
            s.left = Math.max(s.left, 10), s.top = Math.max(s.top, 10);
            var l = "translate(" + Math.round(s.left) + "px," + Math.round(s.top) + "px)";
            this.messageElement.css({
                "-webkit-transform": l,
                "-moz-transform": l,
                "-ms-transform": l,
                transform: l
            }), setTimeout(function () {
                this.messageElement.removeClass("no-transition")
            }.bind(this), 1)
        }
    }, paint: function () {
        this.canvas.width = this.width, this.canvas.height = this.height, this.context.clearRect(0, 0, this.width, this.height), this.context.fillStyle = "rgba( 0, 0, 0, 0.7 )", this.context.fillRect(0, 0, this.width, this.height), this.cutoutElement && (this.context.clearRect(this.cutoutRect.x, this.cutoutRect.y, this.cutoutRect.width, this.cutoutRect.height), this.context.strokeStyle = "#ddd", this.context.lineWidth = 1, this.context.strokeRect(this.cutoutRect.x + .5, this.cutoutRect.y + .5, this.cutoutRect.width - 1, this.cutoutRect.height - 1))
    }, cutout: function (t, e) {
        e = e || {}, this.cutoutElement = t, this.cutoutPadding = e.padding || 0, this.layout(), this.paint()
    }, clearCutout: function () {
        this.cutoutElement = null, this.cutoutPadding = 0, this.paint()
    }, message: function (t, e) {
        this.messageOptions = $.extend({
            maxWidth: 320,
            alignment: ""
        }, e), this.messageElement.html(t).show(), this.messageElement.css("max-width", this.messageOptions.maxWidth), this.messageElement.attr("data-alignment", this.messageOptions.alignment), this.layout(), this.paint()
    }, clearMessage: function () {
        this.messageElement.hide(), this.messageOptions = {}
    }, hasNextStep: function () {
        return this.index + 1 < this.options.steps.length
    }, destroy: function () {
        this.destroyed || (this.destroyed = !0, $(window).off("resize", this.onWindowResize), this.skipped.dispose(), this.finished.dispose(), this.unbind(), this.domElement.fadeOut(400, this.domElement.remove))
    }, onKeyDown: function (t) {
        return 27 === t.keyCode ? (this.skipped.dispatch(), this.destroy(), !1) : 37 === t.keyCode || 8 === t.keyCode ? (this.prev(), !1) : 39 === t.keyCode || 32 === t.keyCode ? (this.next(), !1) : !0
    }, onSkipClicked: function () {
        this.skipped.dispatch(), this.destroy()
    }, onNextClicked: function () {
        this.next()
    }, onWindowResize: function () {
        this.layout(), this.paint()
    }
}),SL("views").Base = Class.extend({
    init: function () {
        this.header = new SL.components.Header, this.setupAce(), this.setupSocial(), this.setupScrollAnchors(), this.handleLogos(), this.handleOutlines(), this.handleFeedback(), this.handleWindowClose(), this.handleAutoRefresh(), this.parseTimes(), this.parseLinks(), this.parseMeters(), this.parseSpinners(), this.parseNotifications(), this.parseScrollLinks(), setInterval(this.parseTimes.bind(this), 12e4)
    }, setupAce: function () {
        "object" == typeof window.ace && "object" == typeof window.ace.config && "function" == typeof window.ace.config.set && ace.config.set("workerPath", "/assets")
    }, setupSocial: function () {
        $(window).on("load", function () {
            var t = $(".facebook-share-button"), e = $(".twitter-share-button"), i = $(".google-share-button"), n = {
                url: window.location.protocol + "//" + window.location.hostname + window.location.pathname,
                title: $('meta[property="og:title"]').attr("content"),
                description: $('meta[property="og:description"]').attr("content"),
                thumbnail: $('meta[property="og:image"]').attr("content")
            };
            t.length && (t.attr("href", SL.util.social.getFacebookShareLink(n.url, n.title, n.description, n.thumbnail)), t.on("vclick", function (t) {
                SL.util.openPopupWindow($(this).attr("href"), "Share on Facebook", 600, 400), t.preventDefault()
            })), e.length && (e.attr("href", SL.util.social.getTwitterShareLink(n.url, n.title)), e.on("vclick", function (t) {
                SL.util.openPopupWindow($(this).attr("href"), "Share on Twitter", 600, 400), t.preventDefault()
            })), i.length && (i.attr("href", SL.util.social.getGoogleShareLink(n.url)), i.on("vclick", function (t) {
                SL.util.openPopupWindow($(this).attr("href"), "Share on Google+", 600, 400), t.preventDefault()
            }))
        })
    }, setupScrollAnchors: function () {
        var t = $('.sl-scroll-anchor[href^="#"]');
        if (t.length) {
            var e = t.map(function (t, e) {
                var i = e.getAttribute("href").slice(1);
                return {id: i, link: $(e), target: $(document.getElementById(i))}
            }).toArray(), i = function () {
                var t = window.innerHeight, i = $(window).scrollTop(), n = null, s = Number.MAX_VALUE;
                e.forEach(function (e) {
                    e.link.removeClass("sl-scroll-anchor-selected");
                    var o = e.target.offset().top - i, a = Math.abs(o);
                    s > a && .4 * t > o && (s = a, n = e)
                }), n && n.link.addClass("sl-scroll-anchor-selected")
            };
            $(window).on("scroll", $.throttle(i.bind(this), 300)), i()
        }
    }, handleLogos: function () {
        setTimeout(function () {
            $(".logo-animation").addClass("open")
        }, 600)
    }, handleOutlines: function () {
        var t = $("<style>").appendTo("head").get(0), e = function (e) {
            t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e
        };
        $(document).on("mousedown", function () {
            e("a, button, .sl-select, .sl-checkbox label, .radio label { outline: none !important; }")
        }), $(document).on("keydown", function () {
            e("")
        })
    }, handleFeedback: function () {
        $("html").on("click", "[data-feedback-mode]", function (t) {
            if (UserVoice && "function" == typeof UserVoice.show) {
                var e = $(this), i = {
                    target: this,
                    mode: e.attr("data-feedback-mode") || "contact",
                    position: e.attr("data-feedback-position") || "top",
                    screenshot_enabled: e.attr("data-feedback-screenshot_enabled") || "true",
                    smartvote_enabled: e.attr("data-feedback-smartvote-enabled") || "true",
                    ticket_custom_fields: {}
                };
                SL.current_deck && (i.ticket_custom_fields["Deck ID"] = SL.current_deck.get("id"), i.ticket_custom_fields["Deck Slug"] = SL.current_deck.get("slug"), i.ticket_custom_fields["Deck Version"] = SL.current_deck.get("version"), i.ticket_custom_fields["Deck Font"] = SL.current_deck.get("theme_font"), i.ticket_custom_fields["Deck Color"] = SL.current_deck.get("theme_color"), i.ticket_custom_fields["Deck Transition"] = SL.current_deck.get("transition"), i.ticket_custom_fields["Deck Background Transition"] = SL.current_deck.get("backgroundTransition"));
                var n = e.attr("data-feedback-type");
                n && n.length && (i.ticket_custom_fields.Type = n);
                var s = e.attr("data-feedback-contact-title");
                s && s.length && (i.contact_title = s), UserVoice.show(i), t.preventDefault()
            }
        })
    }, handleWindowClose: function () {
        var t = SL.util.getQuery();
        if (t && t.autoclose && window.opener) {
            var e = parseInt(t.autoclose, 10) || 0;
            setTimeout(function () {
                try {
                    window.close()
                } catch (t) {
                }
            }, e)
        }
    }, handleAutoRefresh: function () {
        var t = SL.util.getQuery();
        if (t && t.autoRefresh) {
            var e = parseInt(t.autoRefresh, 10);
            !isNaN(e) && e > 0 && setTimeout(function () {
                window.location.reload()
            }, e)
        }
    }, parseTimes: function () {
        $("time.ago").each(function () {
            var t = $(this).attr("datetime");
            t && $(this).text(moment.utc(t).fromNow())
        }), $("time.date").each(function () {
            var t = $(this).attr("datetime");
            t && $(this).text(moment.utc(t).format("MMM Do, YYYY"))
        })
    }, parseLinks: function () {
        $(".linkify").each(function () {
            $(this).html(SL.util.string.linkify($(this).text()))
        })
    }, parseMeters: function () {
        $(".sl-meter").each(function () {
            new SL.components.Meter($(this))
        })
    }, parseSpinners: function () {
        SL.util.html.generateSpinners()
    }, parseNotifications: function () {
        var t = $(".flash-notification");
        t.length && SL.notify(t.remove().text(), t.attr("data-notification-type"))
    }, parseScrollLinks: function () {
        $(document).delegate("a[data-scroll-to]", "click", function (t) {
            var e = t.currentTarget, i = $(e.getAttribute("href")), n = parseInt(e.getAttribute("data-scroll-to-offset"), 10), s = parseInt(e.getAttribute("data-scroll-to-duration"), 10);
            isNaN(n) && (n = -20), isNaN(s) && (s = 1e3), i.length && $("html, body").animate({scrollTop: i.offset().top + n}, s), t.preventDefault()
        })
    }
}),SL("views.decks").EditRequiresUpgrade = SL.views.Base.extend({
    init: function () {
        this._super(), this.makePublicButton = $(".make-deck-public").first(), this.makePublicButton.on("click", this.onMakePublicClicked.bind(this)), this.makePublicLoader = Ladda.create(this.makePublicButton.get(0))
    }, makeDeckPublic: function () {
        var t = {
            type: "POST",
            url: SL.config.AJAX_PUBLISH_DECK(SL.current_deck.get("id")),
            context: this,
            data: {visibility: SL.models.Deck.VISIBILITY_ALL}
        };
        this.makePublicLoader.start(), $.ajax(t).done(function () {
            window.location = SL.routes.DECK_EDIT(SL.current_user.get("username"), SL.current_deck.get("slug"))
        }).fail(function () {
            SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_ERROR"), "negative"), this.makePublicLoader.stop()
        })
    }, onMakePublicClicked: function (t) {
        t.preventDefault(), this.makeDeckPublic()
    }
}),SL("views.decks").Embed = SL.views.Base.extend({
    init: function () {
        this._super(), this.footerElement = $(".embed-footer"), this.shareButton = this.footerElement.find(".embed-footer-share"), this.fullscreenButton = this.footerElement.find(".embed-footer-fullscreen"), this.revealElement = $(".reveal"), SL.util.setupReveal({
            embedded: !0,
            openLinksInTabs: !0,
            trackEvents: !0,
            maxScale: SL.config.PRESENT_UPSIZING_MAX_SCALE
        }), $(window).on("resize", this.layout.bind(this)), $(document).on("webkitfullscreenchange mozfullscreenchange MSFullscreenChange fullscreenchange", this.layout.bind(this)), this.shareButton.on("click", this.onShareClicked.bind(this)), this.fullscreenButton.on("click", this.onFullscreenClicked.bind(this));
        var t = SL.util.getQuery().style;
        "hidden" !== t || SL.current_deck.isPro() || (t = null), t && $("html").attr("data-embed-style", t), Modernizr.fullscreen === !1 && this.fullscreenButton.hide(), this.layout()
    }, layout: function () {
        this.revealElement.height(this.footerElement.is(":visible") ? window.innerHeight - this.footerElement.height() : "100%"), Reveal.layout()
    }, onFullscreenClicked: function () {
        var t = $("html").get(0);
        return t ? (SL.helpers.Fullscreen.enter(t), !1) : void 0
    }, onShareClicked: function () {
        SL.popup.open(SL.components.decksharer.DeckSharer, {deck: SL.current_deck}), SL.analytics.trackPresenting("Share clicked (embed footer)")
    }
}),SL("views.decks").Export = SL.views.Base.extend({
    init: function () {
        this._super(), SL.util.setupReveal({
            history: !navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi),
            openLinksInTabs: !0,
            trackEvents: !0
        })
    }
}),SL("views.decks").Fullscreen = SL.views.Base.extend({
    init: function () {
        this._super(), /no-autoplay=1/.test(window.location.search) && $(".reveal [data-autoplay]").removeAttr("data-autoplay"), SL.util.setupReveal({
            history: !navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi),
            openLinksInTabs: !0,
            trackEvents: !0,
            maxScale: SL.config.PRESENT_UPSIZING_MAX_SCALE
        })
    }
}),SL("views.decks").LiveClient = SL.views.Base.extend({
    init: function () {
        this._super(), SL.util.setupReveal({
            touch: !1,
            history: !1,
            keyboard: !1,
            controls: !1,
            progress: !1,
            showNotes: !1,
            slideNumber: !1,
            autoSlide: 0,
            openLinksInTabs: !0,
            trackEvents: !0
        }), Reveal.addEventListener("ready", this.onRevealReady.bind(this)), this.stream = new SL.helpers.StreamLive({showErrors: !0}), this.stream.ready.add(this.onStreamReady.bind(this)), this.stream.stateChanged.add(this.onStreamStateChanged.bind(this)), this.stream.statusChanged.add(this.onStreamStatusChanged.bind(this)), this.render(), this.bind(), this.stream.connect()
    }, render: function () {
        var t = SL.current_deck.get("user"), e = SL.routes.DECK(t.username, SL.current_deck.get("slug")), i = t.thumbnail_url;
        this.summaryBubble = $(['<a class="summary-bubble hidden" href="' + e + '" target="_blank">', '<div class="summary-bubble-picture" style="background-image: url(' + i + ')"></div>', '<div class="summary-bubble-content"></div>', "</a>"].join("")).appendTo(document.body), this.summaryBubbleContent = this.summaryBubble.find(".summary-bubble-content"), this.renderUserSummary()
    }, renderUserSummary: function () {
        var t = SL.current_deck.get("user");
        this.summaryBubbleContent.html(["<h4>" + SL.current_deck.get("title") + "</h4>", "<p>By " + (t.name || t.username) + "</p>"].join(""))
    }, renderWaitingSummary: function () {
        this.summaryBubbleContent.html(["<h4>Waiting for presenter</h4>", '<p class="retry-status"></p>'].join("")), this.summaryBubbleRetryStatus = this.summaryBubbleContent.find(".retry-status")
    }, renderConnectionLostSummary: function () {
        this.summaryBubbleContent.html(["<h4>Connection lost</h4>", "<p>Attempting to reconnect</p>"].join(""))
    }, startUpdatingTimer: function () {
        var t = function () {
            if (this.summaryBubbleRetryStatus && this.summaryBubbleRetryStatus.length) {
                var t = Date.now() - this.stream.getRetryStartTime(), e = Math.ceil((SL.helpers.StreamLive.CONNECTION_RETRY_INTERVAL - t) / 1e3);
                this.summaryBubbleRetryStatus.text(isNaN(e) ? "Retrying" : e > 0 ? "Retrying in " + e + "s" : "Retrying now")
            }
        }.bind(this);
        clearInterval(this.updateTimerInterval), this.updateTimerInterval = setInterval(t, 100), t()
    }, stopUpdatingTimer: function () {
        clearInterval(this.updateTimerInterval)
    }, bind: function () {
        this.summaryBubble.on("mouseover", this.expandSummary.bind(this)), this.summaryBubble.on("mouseout", this.collapseSummary.bind(this))
    }, expandSummary: function (t) {
        clearTimeout(this.collapseSummaryTimeout);
        var e = window.innerWidth - (this.summaryBubbleContent.find("h4, p").offset().left + 40);
        e = Math.min(e, 400), this.summaryBubbleContent.find("h4, p").css("max-width", e), this.summaryBubble.width(this.summaryBubble.height() + this.summaryBubbleContent.outerWidth()), "number" == typeof t && (this.collapseSummaryTimeout = setTimeout(this.collapseSummary.bind(this), t))
    }, expandSummaryError: function () {
        this.summaryBubbleError = !0, this.expandSummary()
    }, collapseSummary: function () {
        this.summaryBubbleError || (clearTimeout(this.collapseSummaryTimeout), this.summaryBubble.width(this.summaryBubble.height()))
    }, setPresentControls: function (t) {
        this.summaryBubble.toggleClass("hidden", !t), Reveal.configure({slideNumber: SLConfig.deck.slide_number && t})
    }, setPresentNotes: function (t) {
        Reveal.configure({showNotes: t})
    }, setPresentUpsizing: function (t) {
        Reveal.configure({maxScale: t ? SL.config.PRESENT_UPSIZING_MAX_SCALE : 1})
    }, onRevealReady: function () {
        this.setPresentControls(SL.current_deck.user_settings.get("present_controls")), this.setPresentNotes(SL.current_deck.user_settings.get("present_notes")), this.setPresentUpsizing(SL.current_deck.user_settings.get("present_upsizing"))
    }, onStreamReady: function () {
        this.expandSummary(5e3)
    }, onStreamStateChanged: function (t) {
        t && "boolean" == typeof t.present_controls && this.setPresentControls(t.present_controls), t && "boolean" == typeof t.present_notes && this.setPresentNotes(t.present_notes), t && "boolean" == typeof t.present_upsizing && this.setPresentUpsizing(t.present_upsizing)
    }, onStreamStatusChanged: function (t) {
        t === SL.helpers.StreamLive.STATUS_WAITING_FOR_PUBLISHER ? (this.renderWaitingSummary(), this.expandSummaryError(), this.startUpdatingTimer()) : (this.summaryBubbleError = !1, this.renderUserSummary(), this.stopUpdatingTimer())
    }
}),SL("views.decks").LiveServer = SL.views.Base.extend({
    init: function () {
        this._super(), this.strings = {
            speakerViewURL: SL.current_deck.getURL({view: "speaker"}),
            liveViewHelpURL: "http://help.slides.com/knowledgebase/articles/333924",
            speakerViewHelpURL: "http://help.slides.com/knowledgebase/articles/333923"
        }, SL.util.setupReveal({
            history: !0,
            openLinksInTabs: !0,
            trackEvents: !0,
            showNotes: SL.current_deck.get("share_notes") && SL.current_user.settings.get("present_notes"),
            controls: SL.current_user.settings.get("present_controls"),
            progress: SL.current_user.settings.get("present_controls"),
            maxScale: SL.current_user.settings.get("present_upsizing") ? SL.config.PRESENT_UPSIZING_MAX_SCALE : 1
        }), this.stream = new SL.helpers.StreamLive({
            publisher: !0,
            showErrors: !1
        }), this.stream.connect(), this.render(), this.bind(), SL.helpers.PageLoader.waitForFonts()
    }, render: function () {
        this.presentationControls = $(['<div class="presentation-controls">', '<div class="presentation-controls-content">', "<h2>Presentation Controls</h2>", '<div class="presentation-controls-section">', "<h2>Speaker View</h2>", '<p>The control panel for your presentation. Includes speaker notes, an upcoming slide preview and more. It can be used as a remote control when opened from a mobile device. <a href="' + this.strings.speakerViewHelpURL + '" target="_blank">Learn more.</a></p>', '<a class="button l outline" href="' + this.strings.speakerViewURL + '" target="_blank">Open speaker view</a>', "</div>", '<div class="presentation-controls-section">', "<h2>Present Live</h2>", '<p class="live-description">Share this link with your audience to have them follow along with the presentation in real-time. <a href="' + this.strings.liveViewHelpURL + '" target="_blank">Learn more.</a></p>', '<div class="live-share"></div>', "</div>", '<div class="presentation-controls-section sl-form">', "<h2>Options</h2>", '<div class="sl-checkbox outline fullscreen-toggle">', '<input id="fullscreen-checkbox" type="checkbox">', '<label for="fullscreen-checkbox">Fullscreen</label>', "</div>", '<div class="sl-checkbox outline controls-toggle" data-tooltip="Hide the presentation control arrows and progress bar." data-tooltip-alignment="r" data-tooltip-delay="500" data-tooltip-maxwidth="250">', '<input id="controls-checkbox" type="checkbox">', '<label for="controls-checkbox">Hide controls</label>', "</div>", '<div class="sl-checkbox outline notes-toggle" data-tooltip="Hide your speaker notes from the audience." data-tooltip-alignment="r" data-tooltip-delay="500" data-tooltip-maxwidth="250">', '<input id="controls-checkbox" type="checkbox">', '<label for="controls-checkbox">Hide notes</label>', "</div>", '<div class="sl-checkbox outline upsizing-toggle" data-tooltip="Your content is automatically scaled up to fill as much of the browser window as possible. This option disables that scaling and favors the original authored at size." data-tooltip-alignment="r" data-tooltip-delay="500" data-tooltip-maxwidth="300">', '<input id="upsizing-checkbox" type="checkbox">', '<label for="upsizing-checkbox">Disable upsizing</label>', "</div>", "</div>", "</div>", '<footer class="presentation-controls-footer">', '<button class="button xl positive start-presentation">Start presentation</button>', "</footer>", "</div>"].join("")).appendTo(document.body), this.presentationControlsExpander = $(['<div class="presentation-controls-expander" data-tooltip="Show menu" data-tooltip-alignment="r">', '<span class="icon i-chevron-right"></span>', "</div>"].join("")).appendTo(document.body), $(".global-header").prependTo(this.presentationControls), this.presentationControlsScrollShadow = new SL.components.ScrollShadow({
            parentElement: this.presentationControls,
            headerElement: this.presentationControls.find(".global-header"),
            contentElement: this.presentationControls.find(".presentation-controls-content"),
            footerElement: this.presentationControls.find(".presentation-controls-footer")
        }), SL.helpers.Fullscreen.isEnabled() === !1 && this.presentationControls.find(".fullscreen-toggle").hide(), SL.current_deck.get("share_notes") || this.presentationControls.find(".notes-toggle").hide(), this.syncPresentationControls(), this.renderLiveShare()
    }, bind: function () {
        this.presentationControls.find(".live-view-url").on("mousedown", this.onLiveURLMouseDown.bind(this)), this.presentationControls.find(".fullscreen-toggle").on("vclick", this.onFullscreenToggled.bind(this)), this.presentationControls.find(".controls-toggle").on("vclick", this.onControlsToggled.bind(this)), this.presentationControls.find(".notes-toggle").on("vclick", this.onNotesToggled.bind(this)), this.presentationControls.find(".upsizing-toggle").on("vclick", this.onUpsizingToggled.bind(this)), this.presentationControls.find(".button.start-presentation").on("vclick", this.onStartPresentationClicked.bind(this)), this.presentationControlsExpander.on("vclick", this.onStopPresentationClicked.bind(this)), $(document).on("webkitfullscreenchange mozfullscreenchange MSFullscreenChange fullscreenchange", this.onFullscreenChange.bind(this)), $(document).on("mousemove", this.onMouseMove.bind(this)), $(document).on("mouseleave", this.onMouseLeave.bind(this))
    }, syncPresentationControls: function () {
        this.presentationControls.find(".fullscreen-toggle input").prop("checked", SL.helpers.Fullscreen.isActive()), this.presentationControls.find(".controls-toggle input").prop("checked", !SL.current_user.settings.get("present_controls")), this.presentationControls.find(".upsizing-toggle input").prop("checked", !SL.current_user.settings.get("present_upsizing")), this.presentationControls.find(".notes-toggle input").prop("checked", !SL.current_user.settings.get("present_notes"))
    }, renderLiveShare: function () {
        this.liveShareElement = this.presentationControls.find(".live-share"), SL.current_deck.isVisibilityAll() ? this.showLiveShareLink(SL.current_deck.getURL({view: "live"})) : this.showLiveShareLinkGenerator()
    }, showLiveShareLinkGenerator: function () {
        this.presentationControls.find(".live-description").html('Share a link with your audience to have them follow along with the presentation in real-time. Note that all private links you share point to the same live presentation session. <a href="' + this.strings.liveViewHelpURL + '" target="_blank">Learn more.</a>'), this.liveShareButton = $('<button class="button l outline ladda-button" data-style="zoom-out" data-spinner-color="#222">Share link</button>'), this.liveShareButton.appendTo(this.liveShareElement), this.liveShareButton.on("vclick", function () {
            "undefined" != typeof SLConfig && "string" == typeof SLConfig.deck.user.username && "string" == typeof SLConfig.deck.slug ? SL.popup.open(SL.components.decksharer.DeckSharer, {
                deck: SL.current_deck,
                deckView: "live"
            }) : SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }.bind(this))
    }, showLiveShareLink: function (t) {
        this.liveShareElement.html('<input class="live-view-url input-field" type="text" value="' + t + '" readonly />'), this.liveShareElement.find(".live-view-url").on("mousedown", this.onLiveURLMouseDown.bind(this))
    }, showStatus: function (t) {
        this.statusElement ? this.statusElement.find(".stream-status-message").html(t) : this.statusElement = $(['<div class="stream-status">', '<p class="stream-status-message">' + t + "</p>", "</div>"].join("")).appendTo(document.body)
    }, clearStatus: function () {
        this.statusElement && (this.statusElement.remove(), this.statusElement = null)
    }, savePresentOption: function (t) {
        this.xhrRequests = this.xhrRequests || {}, this.xhrRequests[t] && this.xhrRequests[t].abort();
        var e = {url: SL.config.AJAX_UPDATE_USER_SETTINGS, type: "PUT", context: this, data: {user_settings: {}}};
        e.data.user_settings[t] = SL.current_user.settings.get(t), this.xhrRequests[t] = $.ajax(e).always(function () {
            this.xhrRequests[t] = null
        })
    }, startPresentation: function () {
        $("html").addClass("presentation-started"), this.presentationStarted = !0
    }, stopPresentation: function () {
        $("html").removeClass("presentation-started"), this.presentationStarted = !1, this.presentationControlsExpander.removeClass("visible")
    }, hasStartedPresentation: function () {
        return !!this.presentationStarted
    }, onLiveURLMouseDown: function (t) {
        $(t.target).focus().select(), t.preventDefault()
    }, onControlsToggled: function (t) {
        t.preventDefault();
        var e = !Reveal.getConfig().controls;
        SL.current_user.settings.set("present_controls", e), Reveal.configure({
            controls: e,
            progress: e,
            slideNumber: SLConfig.deck.slide_number && e
        }), this.syncPresentationControls(), this.savePresentOption("present_controls"), this.stream.publish(null, {present_controls: e})
    }, onNotesToggled: function (t) {
        t.preventDefault();
        var e = !Reveal.getConfig().showNotes;
        SL.current_user.settings.set("present_notes", e), Reveal.configure({showNotes: e}), this.syncPresentationControls(), this.savePresentOption("present_notes"), this.stream.publish(null, {present_notes: e})
    }, onUpsizingToggled: function (t) {
        t.preventDefault();
        var e = Reveal.getConfig().maxScale <= 1;
        SL.current_user.settings.set("present_upsizing", e), Reveal.configure({maxScale: e ? SL.config.PRESENT_UPSIZING_MAX_SCALE : 1}), this.syncPresentationControls(), this.savePresentOption("present_upsizing"), this.stream.publish(null, {present_upsizing: e})
    }, onFullscreenToggled: function (t) {
        t.preventDefault(), SL.helpers.Fullscreen.toggle()
    }, onFullscreenChange: function () {
        this.syncPresentationControls(), Reveal.layout()
    }, onStartPresentationClicked: function () {
        this.startPresentation()
    }, onStopPresentationClicked: function () {
        this.stopPresentation()
    }, onMouseMove: function (t) {
        this.presentationControlsExpander.toggleClass("visible", this.hasStartedPresentation() && t.clientX < 50)
    }, onMouseLeave: function () {
        this.presentationControlsExpander.removeClass("visible")
    }
}),SL("views.decks").Password = SL.views.Base.extend({
    OUTRO_DURATION: 600, init: function () {
        this._super(), this.domElement = $(".password-content"), this.formElement = this.domElement.find(".sl-form"), this.inputElement = this.formElement.find(".password-input"), this.submitButton = this.formElement.find(".password-submit"), this.submitLoader = Ladda.create(this.submitButton.get(0)), this.iconElement = $(".password-icon"), this.titleElement = $(".password-title"), this.incorrectPasswordCounter = 0, this.incorrectPasswordMessages = ["Wrong password, please try again", "Still wrong, give it another try", "That one was wrong too", "Nope"], this.submitButton.on("vclick", this.onSubmitClicked.bind(this)), $(document).on("keydown", this.onKeyDown.bind(this))
    }, submit: function () {
        this.request || (this.submitLoader.start(), this.iconElement.removeClass("wobble"), this.request = $.ajax({
            url: SL.config.AJAX_ACCESS_TOKENS_PASSWORD_AUTH(SLConfig.access_token_id),
            type: "PUT",
            context: this,
            data: {access_token: {password: this.inputElement.val()}}
        }).done(function () {
            this.domElement.addClass("outro"), this.titleElement.text("All set! Loading deck..."), setTimeout(function () {
                window.location.reload()
            }, this.OUTRO_DURATION)
        }).fail(function () {
            this.submitLoader.stop(), this.titleElement.text(this.getIncorrectPasswordMessage()), this.iconElement.addClass("wobble"), this.request = null
        }))
    }, getIncorrectPasswordMessage: function () {
        return this.incorrectPasswordMessages[this.incorrectPasswordCounter++ % this.incorrectPasswordMessages.length]
    }, onSubmitClicked: function (t) {
        t.preventDefault(), this.submit()
    }, onKeyDown: function (t) {
        13 === t.keyCode && (t.preventDefault(), this.submit())
    }
}),SL("views.decks").Review = SL.views.Base.extend({
    init: function () {
        this._super(), $("html").toggleClass("small-mode", window.innerWidth < 850), SL.util.setupReveal({
            help: !1,
            history: !0,
            openLinksInTabs: !0,
            margin: .15
        }), SL.helpers.PageLoader.show(), this.setupCollaboration().then(function () {
            SL.fonts.isReady() ? SL.helpers.PageLoader.hide() : SL.fonts.ready.add(SL.helpers.PageLoader.hide)
        }), SL.session.enforce()
    }, setupCollaboration: function () {
        this.collaboration = new SL.components.collab.Collaboration({
            container: document.body,
            fixed: !$("html").hasClass("small-mode")
        });
        var t = new Promise(function (t) {
            this.collaboration.loaded.add(function () {
                t()
            }.bind(this))
        }.bind(this));
        return this.collaboration.load(), t
    }
}),SL("views.decks").Show = SL.views.Base.extend({
    init: function () {
        this._super(), SL.util.setupReveal({
            history: !0,
            embedded: !0,
            pause: !1,
            margin: .1,
            openLinksInTabs: !0,
            trackEvents: !0
        }), this.setupDisqus(), this.setupPills(), $("header .deck-promotion").length && $("header").addClass("extra-wide"), Modernizr.fullscreen === !1 && $(".deck-options .fullscreen-button").hide(), this.bind(), this.layout()
    }, bind: function () {
        this.editButton = $(".deck-options .edit-button"), this.editButtonOriginalLink = this.editButton.attr("href"), $(".deck-options .fork-button").on("click", this.onForkClicked.bind(this)), $(".deck-options .share-button").on("click", this.onShareClicked.bind(this)), $(".deck-options .comment-button").on("click", this.onCommentsClicked.bind(this)), $(".deck-options .fullscreen-button").on("click", this.onFullScreenClicked.bind(this)), this.visibilityButton = $(".deck-options .visibility-button"), this.visibilityButton.on("click", this.onVisibilityClicked.bind(this)), $(document).on("webkitfullscreenchange mozfullscreenchange MSFullscreenChange fullscreenchange", Reveal.layout), this.onWindowScroll = $.debounce(this.onWindowScroll, 200), $(window).on("resize", this.layout.bind(this)), $(window).on("scroll", this.onWindowScroll.bind(this)), Reveal.addEventListener("slidechanged", this.onSlideChanged.bind(this)), Reveal.addEventListener("fragmentshown", this.hideSummary), Reveal.addEventListener("fragmenthidden", this.hideSummary)
    }, setupPills: function () {
        this.hideSummary = this.hideSummary.bind(this), this.hideInstructions = this.hideInstructions.bind(this), this.summaryPill = $(".summary-pill"), this.instructionsPill = $(".instructions-pill"), this.summaryPill.on("click", this.hideSummary), this.instructionsPill.on("click", this.hideInstructions), this.showSummaryTimeout = setTimeout(this.showSummary.bind(this), 1e3), this.hideSummaryTimeout = setTimeout(this.hideSummary.bind(this), 6e3), this.showNavigationInstructions()
    }, setupDisqus: function () {
        $("#disqus_thread").length ? $(window).on("load", function () {
            {
                var t = window.disqus_shortname = "slidesapp";
                window.disqus_identifier = SLConfig.deck.id
            }
            !function () {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = "//" + t + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e)
            }()
        }) : $(".options .comment-button").hide()
    }, showSummary: function () {
        this.summaryPill && this.summaryPill.addClass("visible")
    }, hideSummary: function () {
        clearTimeout(this.showSummaryTimeout), this.summaryPill && (this.summaryPill.removeClass("visible"), this.summaryPill.on("transitionend", this.summaryPill.remove), this.summaryPill = null)
    }, canShowInstructions: function () {
        return !SL.util.user.isLoggedIn() && !SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET && Reveal.getTotalSlides() > 1 && Modernizr.localstorage
    }, showNavigationInstructions: function () {
        this.showInstructions("slides-has-seen-deck-navigation-instructions", 6e3, {
            title: "Navigation instructions",
            description: "Press the space key or click the arrows to the right"
        })
    }, showVerticalInstructions: function () {
        this.showInstructions("slides-has-seen-deck-vertical-instructions", 1e3, {
            title: "There's a vertical slide below",
            description: "Use the controls to the right or the keyboard arrows",
            icon: "down-arrow"
        })
    }, showInstructions: function (t, e, i) {
        clearTimeout(this.showInstructionsTimeout), this.instructionsPill && this.canShowInstructions() && !localStorage.getItem(t) && (localStorage.setItem(t, "yes"), this.showInstructionsTimeout = setTimeout(function () {
            this.instructionsPill.attr("data-icon", i.icon), this.instructionsPill.find(".pill-title").text(i.title), this.instructionsPill.find(".pill-description").text(i.description), this.instructionsPill.addClass("visible"), this.layout()
        }.bind(this), e))
    }, hideInstructions: function () {
        clearTimeout(this.showInstructionsTimeout), this.instructionsPill && this.instructionsPill.removeClass("visible")
    }, layout: function () {
        this.summaryPill && this.summaryPill.css("left", (window.innerWidth - this.summaryPill.width()) / 2), this.instructionsPill && this.instructionsPill.css("left", (window.innerWidth - this.instructionsPill.width()) / 2);
        var t = $(".reveal .playback"), e = $(".deck-kudos"), i = {opacity: 1};
        e.length && t.length && (i.marginLeft = t.offset().left + t.outerWidth() - 10), e.css(i)
    }, saveVisibility: function (t) {
        var e = {
            type: "POST",
            url: SL.config.AJAX_PUBLISH_DECK(SL.current_deck.get("id")),
            context: this,
            data: {visibility: t}
        };
        $.ajax(e).done(function (t) {
            t.deck.visibility === SL.models.Deck.VISIBILITY_SELF ? SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_SELF")) : t.deck.visibility === SL.models.Deck.VISIBILITY_TEAM ? SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_TEAM")) : t.deck.visibility === SL.models.Deck.VISIBILITY_ALL && SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_ALL")), "string" == typeof t.deck.slug && SL.current_deck.set("slug", t.deck.slug), "string" == typeof t.deck.visibility && SL.current_deck.set("visibility", t.deck.visibility)
        }).fail(function () {
            SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_ERROR"), "negative")
        })
    }, onShareClicked: function () {
        return "undefined" != typeof SLConfig && "string" == typeof SLConfig.deck.user.username && "string" == typeof SLConfig.deck.slug ? SL.popup.open(SL.components.decksharer.DeckSharer, {deck: SL.current_deck}) : SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), SL.analytics.trackPresenting("Share clicked"), !1
    }, onCommentsClicked: function () {
        SL.analytics.trackPresenting("Comments clicked")
    }, onFullScreenClicked: function () {
        var t = $(".reveal-viewport").get(0);
        return t ? (SL.helpers.Fullscreen.enter(t), !1) : void SL.analytics.trackPresenting("Fullscreen clicked")
    }, onForkClicked: function () {
        return SL.analytics.trackPresenting("Fork clicked"), $.ajax({
            type: "POST",
            url: SL.config.AJAX_FORK_DECK(SLConfig.deck.id),
            context: this
        }).done(function () {
            window.location = SL.current_user.getProfileURL()
        }).fail(function () {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }), !1
    }, onVisibilityClicked: function (t) {
        t.preventDefault();
        var e = SL.current_deck.get("visibility"), i = [];
        i.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_SELF"),
            selected: e === SL.models.Deck.VISIBILITY_SELF,
            callback: function () {
                this.saveVisibility(SL.models.Deck.VISIBILITY_SELF), SL.analytics.trackPresenting("Visibility changed", "self")
            }.bind(this)
        }), SL.current_user.isEnterprise() && i.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_TEAM"),
            selected: e === SL.models.Deck.VISIBILITY_TEAM,
            className: "divider",
            callback: function () {
                this.saveVisibility(SL.models.Deck.VISIBILITY_TEAM), SL.analytics.trackPresenting("Visibility changed", "team")
            }.bind(this)
        }), i.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_ALL"),
            selected: e === SL.models.Deck.VISIBILITY_ALL,
            callback: function () {
                this.saveVisibility(SL.models.Deck.VISIBILITY_ALL), SL.analytics.trackPresenting("Visibility changed", "all")
            }.bind(this)
        }), SL.prompt({
            anchor: $(t.currentTarget),
            type: "select",
            className: "sl-visibility-prompt",
            data: i
        }), SL.analytics.trackPresenting("Visibility menu opened")
    }, onSlideChanged: function (t) {
        this.hideSummary(), this.hideInstructions();
        var e = "#";
        t.indexh && (e += "/" + t.indexh, t.indexv && (e += "/" + t.indexv)), this.editButton.attr("href", this.editButtonOriginalLink + e), t.indexh > 0 && 0 === t.indexv && Reveal.availableRoutes().down && this.showVerticalInstructions()
    }, onWindowScroll: function () {
        $(window).scrollTop() > 10 && (this.hideSummary(), this.hideInstructions())
    }
}),SL("views.decks").Speaker = SL.views.Base.extend({
    init: function () {
        this._super(), this.notesElement = $(".speaker-controls .notes"), this.notesValue = $(".speaker-controls .notes .value"), this.timeElement = $(".speaker-controls .time"), this.timeTimerValue = $(".speaker-controls .time .timer-value"), this.timeClockValue = $(".speaker-controls .time .clock-value"), this.subscribersElement = $(".speaker-controls .subscribers"), this.subscribersValue = $(".speaker-controls .subscribers .subscribers-value"), this.currentElement = $(".current-slide"), this.upcomingElement = $(".upcoming-slide"), this.upcomingFrame = $(".upcoming-slide iframe"), this.upcomingJumpTo = $(".upcoming-slide-jump-to"), $(".reveal [data-autoplay]").removeAttr("data-autoplay"), this.upcomingFrame.length ? (this.upcomingFrame.on("load", this.onUpcomingFrameLoaded.bind(this)), this.upcomingFrame.attr("src", this.upcomingFrame.attr("data-src"))) : this.setup(), SL.helpers.PageLoader.show()
    }, setup: function () {
        Reveal.addEventListener("ready", function () {
            this.currentReveal = window.Reveal, this.currentReveal.addEventListener("slidechanged", this.onCurrentSlideChanged.bind(this)), this.currentReveal.addEventListener("fragmentshown", this.onCurrentFragmentChanged.bind(this)), this.currentReveal.addEventListener("fragmenthidden", this.onCurrentFragmentChanged.bind(this)), this.currentReveal.addEventListener("paused", this.onCurrentPaused.bind(this)), this.currentReveal.addEventListener("resumed", this.onCurrentResumed.bind(this)), this.upcomingFrame.length && (this.upcomingReveal = this.upcomingFrame.get(0).contentWindow.Reveal, this.upcomingReveal.isReady() ? this.setupUpcomingReveal() : this.upcomingReveal.addEventListener("ready", this.setupUpcomingReveal.bind(this))), this.setupTimer(), this.setupTouch(), this.stream = new SL.helpers.StreamLive({
                reveal: this.currentReveal,
                publisher: !0,
                showErrors: !0
            }), this.stream.ready.add(this.onStreamReady.bind(this)), this.stream.subscribersChanged.add(this.onStreamSubscribersChanged.bind(this)), this.stream.connect(), this.layout(), window.addEventListener("resize", this.layout.bind(this))
        }.bind(this)), SL.util.setupReveal({
            touch: !0,
            history: !1,
            autoSlide: 0,
            openLinksInTabs: !0,
            trackEvents: !0,
            showNotes: !1
        })
    }, setupUpcomingReveal: function () {
        this.upcomingReveal.configure({
            history: !1,
            controls: !1,
            progress: !1,
            overview: !1,
            autoSlide: 0,
            transition: "none",
            backgroundTransition: "none"
        }), this.upcomingReveal.addEventListener("slidechanged", this.onUpcomingSlideChanged.bind(this)), this.upcomingReveal.addEventListener("fragmentshown", this.onUpcomingFragmentChanged.bind(this)), this.upcomingReveal.addEventListener("fragmenthidden", this.onUpcomingFragmentChanged.bind(this)), this.upcomingFrame.get(0).contentWindow.document.body.className += " no-transition", this.upcomingJumpTo.on("vclick", this.onJumpToUpcomingSlide.bind(this)), this.syncJumpButton()
    }, setupTouch: function () {
        if (this.isMobileSpeakerView() && (SL.util.device.HAS_TOUCH || window.navigator.pointerEnabled)) {
            this.touchControls = $(['<div class="touch-controls">', '<div class="touch-controls-content">', '<span class="status">', "Tap or Swipe to change slide", "</span>", '<span class="slide-number"></span>', "</div>", '<div class="touch-controls-progress"></div>', "</div>"].join("")).appendTo(document.body), this.touchControlsProgress = this.touchControls.find(".touch-controls-progress"), this.touchControlsSlideNumber = this.touchControls.find(".slide-number"), this.touchControlsStatus = this.touchControls.find(".status"), setTimeout(function () {
                this.touchControls.addClass("visible")
            }.bind(this), 1e3);
            var t = document.body, e = new Hammer(t);
            e.get("swipe").set({direction: Hammer.DIRECTION_ALL}), e.get("press").set({threshold: 1e3}), $(t).on("touchstart", function (i) {
                1 === $(i.target).closest(".notes-overflowing").length && (e.stop(), $(t).one("touchend", function (t) {
                    var e = {x: i.originalEvent.pageX, y: i.originalEvent.pageY}, n = {
                        x: t.originalEvent.pageX,
                        y: t.originalEvent.pageY
                    };
                    SL.util.trig.distanceBetween({x: e.x, y: e.y}, {
                        x: n.x,
                        y: n.y
                    }) < 10 && (this.currentReveal.next(), this.showTouchStatus("Next slide"))
                }.bind(this)))
            }.bind(this)), e.on("swipe", function (t) {
                switch (t.direction) {
                    case Hammer.DIRECTION_LEFT:
                        this.currentReveal.right(), this.showTouchStatus("Next slide");
                        break;
                    case Hammer.DIRECTION_RIGHT:
                        this.currentReveal.left(), this.showTouchStatus("Previous slide");
                        break;
                    case Hammer.DIRECTION_UP:
                        this.currentReveal.down(), this.showTouchStatus("Next vertical slide");
                        break;
                    case Hammer.DIRECTION_DOWN:
                        this.currentReveal.up(), this.showTouchStatus("Previous vertical slide")
                }
            }.bind(this)), e.on("tap", function () {
                this.currentReveal.next(), this.showTouchStatus("Next slide")
            }.bind(this)), e.on("press", function () {
                this.currentReveal.isPaused() && (this.currentReveal.togglePause(!1), this.showTouchStatus("Resumed"))
            }.bind(this))
        }
    }, setupTimer: function () {
        this.timeTimerValue.on("click", this.restartTimer.bind(this)), this.restartTimer(), setInterval(this.syncTimer.bind(this), 1e3)
    }, restartTimer: function () {
        this.startTime = Date.now(), this.syncTimer()
    }, layout: function () {
        var t = window.innerHeight - this.notesValue.offset().top - 10;
        this.isMobileSpeakerView() ? this.touchControls && (t -= this.touchControls.outerHeight()) : this.subscribersElement.hasClass("visible") && (t -= this.subscribersElement.outerHeight()), this.notesValue.height(t), this.syncNotesOverflow()
    }, sync: function () {
        setTimeout(function () {
            this.syncUpcomingSlide(), this.syncTouchControls(), this.syncNotes(), this.syncNotesOverflow(), this.syncTimer()
        }.bind(this), 1)
    }, syncTimer: function () {
        var t = moment();
        this.timeClockValue.html(t.format("hh:mm") + ' <span class="dim">' + t.format("A") + "<span>"), t.hour(0).minute(0).second((Date.now() - this.startTime) / 1e3);
        var e = t.format("HH") + ":", i = t.format("mm") + ":", n = t.format("ss");
        "00:" === e && (e = '<span class="dim">' + e + "</span>", "00:" === i && (i = '<span class="dim">' + i + "</span>")), this.timeTimerValue.html(e + i + n)
    }, syncUpcomingSlide: function () {
        if (this.upcomingReveal) {
            var t = this.currentReveal.getIndices();
            this.upcomingReveal.slide(t.h, t.v, t.f), this.upcomingReveal.next();
            var e = this.upcomingReveal.getIndices();
            this.upcomingElement.toggleClass("is-last-slide", t.h === e.h && t.v === e.v && t.f === e.f)
        }
    }, syncJumpButton: function () {
        if (this.upcomingReveal) {
            var t = this.currentReveal.getIndices(), e = this.upcomingReveal.getIndices();
            this.upcomingJumpTo.toggleClass("hidden", t.h === e.h && t.v === e.v && t.f === e.f)
        }
    }, syncNotes: function () {
        var t = $(this.currentReveal.getCurrentSlide()).attr("data-notes") || "";
        t ? (this.notesElement.show(), this.notesValue.text(t), this.notesElement.removeAttr("data-note-length"), t.length < 120 ? this.notesElement.attr("data-note-length", "short") : t.length > 210 && this.notesElement.attr("data-note-length", "long")) : this.notesElement.hide()
    }, syncNotesOverflow: function () {
        this.notesValue.toggleClass("notes-overflowing", this.notesValue.prop("scrollHeight") > this.notesValue.height())
    }, syncTouchControls: function () {
        if (this.touchControls) {
            var t = this.currentReveal.getProgress();
            this.touchControlsProgress.css({
                "-webkit-transform": "scale(" + t + ", 1)",
                "-moz-transform": "scale(" + t + ", 1)",
                "-ms-transform": "scale(" + t + ", 1)",
                transform: "scale(" + t + ", 1)"
            });
            var e = $(".reveal .slides section:not(.stack)").length, i = this.currentReveal.getIndices().h + this.currentReveal.getIndices().v;
            i += $(".reveal .slides>section.present").prevAll("section").find(">section:gt(0)").length, i += 1, this.touchControlsSlideNumber.html(i + "/" + e)
        }
    }, showTouchStatus: function (t) {
        clearTimeout(this.touchControlsStatusTimeout);
        var e = this.currentReveal && this.currentReveal.isPaused();
        e && (t = "Paused (tap+hold to resume)"), this.touchControlsStatus && (this.touchControlsStatus.text(t).removeClass("hidden"), e || (this.touchControlsStatusTimeout = setTimeout(function () {
            this.touchControlsStatus.addClass("hidden")
        }.bind(this), 1e3)))
    }, isMobileSpeakerView: function () {
        return $("html").hasClass("speaker-mobile")
    }, onUpcomingFrameLoaded: function () {
        this.setup()
    }, onStreamReady: function () {
        SL.helpers.PageLoader.hide(), this.sync()
    }, onStreamSubscribersChanged: function (t) {
        "number" == typeof this.subscriberCount && (this.subscribersValue.removeClass("flash green flash-red"), t > this.subscriberCount ? setTimeout(function () {
            this.subscribersValue.addClass("flash-green")
        }.bind(this), 1) : t < this.subscriberCount && setTimeout(function () {
            this.subscribersValue.addClass("flash-red")
        }.bind(this), 1)), this.subscriberCount = t, this.subscriberCount > 0 ? (this.subscribersValue.html('<span class="icon i-eye"></span>' + t), this.subscribersElement.addClass("visible")) : this.subscribersElement.removeClass("visible")
    }, onCurrentSlideChanged: function () {
        this.sync()
    }, onCurrentFragmentChanged: function () {
        this.sync()
    }, onCurrentPaused: function () {
        this.pausedInstructions || (this.pausedInstructions = $('<h3 class="message-overlay">Paused. Press the "B" key to resume.</h3>'), this.pausedInstructions.appendTo(this.currentElement), this.pausedInstructions.addClass("visible"))
    }, onCurrentResumed: function () {
        this.pausedInstructions && (this.pausedInstructions.remove(), this.pausedInstructions = null)
    }, onUpcomingSlideChanged: function () {
        this.syncJumpButton()
    }, onUpcomingFragmentChanged: function () {
        this.syncJumpButton()
    }, onJumpToUpcomingSlide: function () {
        var t = this.upcomingReveal.getIndices();
        this.currentReveal.slide(t.h, t.v, t.f), this.syncUpcomingSlide()
    }
}),SL("views.devise").All = SL.views.Base.extend({
    init: function () {
        this._super(), this.setupForm(), $(".auth-button.email.toggle").on("vclick", function (t) {
            t.preventDefault();
            var e = $(".auth-option.email-auth");
            e.toggleClass("hidden"), e.hasClass("hidden") === !1 && e.find('input[type="text"], input[type="email"]').first().focus()
        })
    }, setupForm: function () {
        if (this.formElement = $("form"), this.formElement.length) {
            this.formElement.find(".unit[data-validate]").each(function (t, e) {
                new SL.components.FormUnit(e)
            });
            var t = this.formElement.find("button[type=submit]");
            t.length && this.formElement.on("submit", function (e) {
                if (!e.isDefaultPrevented()) {
                    if ($(".g-recaptcha").length && "undefined" != typeof window.grecaptcha && "function" == typeof window.grecaptcha.getResponse && !grecaptcha.getResponse())return SL.notify("Please answer the reCAPTCHA to prove you're not a robot"), e.preventDefault(), !1;
                    Ladda.create(t.get(0)).start()
                }
            }.bind(this))
        }
    }
}),SL("views.devise").Edit = SL.views.devise.All.extend({
    init: function () {
        this._super(), $(".delete-account-toggle").on("click", this.onDeleteAccountToggleClicked.bind(this)), $(".delete-profile-photo").on("click", this.onDeleteProfilePhotoClicked.bind(this)), $("#user_email").on("change keyup", this.onEmailChanged.bind(this)), $("#user_password").on("change keyup", this.onNewPasswordChanged.bind(this)), this.undoAutoFill()
    }, undoAutoFill: function () {
        if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0)var t = window.setInterval(function () {
            var e = $("input:-webkit-autofill");
            e.length > 0 && (window.clearInterval(t), e.each(function () {
                var t = $(this).clone(!0, !0);
                t.is("[type=password]") && t.val(""), $(this).after(t).remove();
                var e = t.parent(".unit");
                e.length && new SL.components.FormUnit(e)
            }))
        }, 20)
    }, updatePasswordVerification: function () {
        var t = $("#user_email").parents(".unit"), e = $("#user_password").parents(".unit"), i = $("#user_current_password").parents(".unit"), n = t.data("controller"), s = e.data("controller");
        n && s && n.isUnchanged() && s.isUnchanged() ? (i.removeAttr("data-required"), i.addClass("hidden")) : (i.attr("data-required", "true"), i.removeClass("hidden"))
    }, onDeleteAccountToggleClicked: function (t) {
        t.preventDefault(), $(".delete-account").toggleClass("visible")
    }, onDeleteProfilePhotoClicked: function (t) {
        t.preventDefault(), $.ajax({
            url: SL.config.AJAX_UPDATE_USER,
            type: "PUT",
            context: this,
            data: {user: {profile_photo: ""}}
        }).done(function () {
            $(".photo-editor").attr("data-photo-type", "gravatar")
        }).fail(function () {
            SL.notify("An error occured while saving", "negative")
        })
    }, onEmailChanged: function () {
        this.updatePasswordVerification()
    }, onNewPasswordChanged: function () {
        this.updatePasswordVerification()
    }
}),SL("views.home").Explore = SL.views.Base.extend({
    init: function () {
        this._super(), new SL.components.Search({url: SL.config.AJAX_SEARCH})
    }
}),SL("views.home").Index = SL.views.Base.extend({
    MARQUEE_MIN_HEIGHT: 600, init: function () {
        this._super(), this.learnMoreButton = $(".marquee .description-cta-secondary"), this.scrollPromotion = $(".marquee .scroll-promotion"), this.scrollPromotionArrow = $(".marquee .scroll-promotion-arrow"), this.setupVideo(), this.bind(), this.startScrollPromotion()
    }, setupVideo: function () {
        (SL.util.device.IS_PHONE || SL.util.device.IS_TABLET) && ($(".media-item video").each(function () {
            $(this).prop("controls", !0)
        }), $(".features .media-item").each(function () {
            var t = $(this), e = t.find(".image-wrapper"), i = t.find(".video-wrapper");
            i.length && (i.appendTo(t), e.appendTo(t), t.addClass("manually-triggered"), t.find(".browser-frame").remove(), t.find(".browser-content").remove())
        })), $(".media-item video").each(function (t, e) {
            var i = "";
            e = $(e), SL.util.device.IS_PHONE || SL.util.device.IS_TABLET ? e.parents(".media-item").addClass("loaded") : e.on("loadeddata", function () {
                e.parents(".media-item").addClass("loaded")
            }), e.find("span[data-src]").each(function (t, e) {
                e = $(e), i += '<source src="' + e.attr("data-src") + '" type="' + e.attr("data-type") + '">'
            }), i && e.html(i)
        })
    }, bind: function () {
        this.learnMoreButton.on("click", this.onLearnMoreClicked.bind(this)), this.scrollPromotion.on("click", this.onLearnMoreClicked.bind(this)), this.scrollPromotionArrow.on("mouseover", this.onScrollPromotionOver.bind(this)), this.syncScrolling = $.debounce(this.syncScrolling, 300), this.trackScrolling = $.throttle(this.trackScrolling, 500), $(window).on("resize", this.onWindowResize.bind(this)), $(window).on("scroll", this.onWindowScroll.bind(this))
    }, trackScrolling: function () {
        this.scrollTracking = this.scrollTracking || {};
        var t = $(window).scrollTop(), e = window.innerHeight, i = $(document).height(), n = Math.max(Math.min(t / (i - e), 1), 0);
        n > .1 && !this.scrollTracking[.1] && (this.scrollTracking[.1] = !0, SL.analytics.track("Home: Scrolled", "10%")), n > .5 && !this.scrollTracking[.5] && (this.scrollTracking[.5] = !0, SL.analytics.track("Home: Scrolled", "50%")), n > .95 && !this.scrollTracking[.95] && (this.scrollTracking[.95] = !0, SL.analytics.track("Home: Scrolled", "100%"))
    }, syncScrolling: function () {
        var t = $(window).scrollTop();
        if (!SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET) {
            var e, i = Number.MAX_VALUE;
            $(".media-item .video-wrapper, .media-item .animation-wrapper").each(function (n, s) {
                s = $(s);
                var o = s.offset().top, a = o - t;
                a > -100 && 500 > a && i > a && (i = a, e = s)
            }), this.activeFeature && !this.activeFeature.is(e) && this.stopFeatureAnimation(), e && !e.hasClass("playing") && (this.activeFeature = e, this.startFeatureAnimation())
        }
        t > 20 && this.scrollPromotion.addClass("hidden")
    }, startFeatureAnimation: function () {
        if (this.activeFeature.addClass("playing"), this.activeFeature.is(".video-wrapper"))this.activeFeature.find("video").get(0).play(); else if (this.activeFeature.is(".animation-wrapper")) {
            var t = parseInt(this.activeFeature.attr("data-animation-steps"), 10), e = parseInt(this.activeFeature.attr("data-animation-duration"), 10), i = 1;
            this.activeFeature.attr("data-animation-step", i), this.activeFeatureInterval = setInterval(function () {
                i += 1, i = i > t ? 1 : i, this.activeFeature.attr("data-animation-step", i)
            }.bind(this), e / t)
        }
        SL.analytics.track("Home: Start feature animation")
    }, stopFeatureAnimation: function () {
        this.activeFeature.removeClass("playing"), this.activeFeature.removeAttr("data-animation-step"), clearInterval(this.activeFeatureInterval), this.activeFeature.is(".video-wrapper") && this.activeFeature.find("video").get(0).pause()
    }, startScrollPromotion: function () {
        clearInterval(this.scrollPromotionInterval), this.scrollPromotionInterval = setInterval(this.promoteScrolling.bind(this), 2500)
    }, stopScrollPromotion: function () {
        clearInterval(this.scrollPromotionInterval), this.scrollPromotionInterval = null
    }, promoteScrolling: function () {
        this.scrollPromotionArrow.removeClass("bounce"), setTimeout(function () {
            this.scrollPromotionArrow.addClass("bounce")
        }.bind(this), 1)
    }, onScrollPromotionOver: function () {
        this.stopScrollPromotion()
    }, onLearnMoreClicked: function () {
        SL.analytics.track("Home: Learn more clicked"), this.stopScrollPromotion()
    }, onWindowResize: function () {
        this.syncScrolling()
    }, onWindowScroll: function () {
        this.scrollPromotionInterval && this.stopScrollPromotion(), this.syncScrolling(), this.trackScrolling()
    }
}),SL("views.statik").All = SL.views.Base.extend({
    init: function () {
        this._super(), $("img.click-to-expand").on("click", function () {
            $(this).toggleClass("expanded")
        }), this.setupToC(), this.setupHighlight()
    }, setupToC: function () {
        var t = $(".sl-scroll-toc");
        if (t.length) {
            var e = t.position().top, i = function () {
                t.toggleClass("fixed", $(window).scrollTop() > e)
            };
            $(window).on("scroll", $.throttle(i, 100)), i()
        }
    }, setupHighlight: function () {
        $("code").length > 0 && "undefined" != typeof window.hljs && window.hljs.initHighlightingOnLoad()
    }
}),SL("views.statik").Pricing = SL.views.statik.All.extend({
    init: function () {
        this._super(), $(".tier").each(this.setupTier.bind(this))
    }, setupTier: function (t, e) {
        var e = $(e), i = e.find(".cta a");
        i.length && !i.hasClass("disabled") && (e.on("click", function (t) {
            t.preventDefault(), window.location = i.attr("href")
        }), e.on("mouseenter", function () {
            e.addClass("hover")
        }), e.on("mouseleave", function () {
            e.removeClass("hover")
        }))
    }
}),SL("views.subscriptions").EditPeriod = SL.views.Base.extend({
    init: function () {
        this._super(), Ladda.bind($("#payment-form button[type=submit]").get(0))
    }
}),SL("views.subscriptions").New = SL.views.Base.extend({
    init: function () {
        this._super(), this.onFormSubmit = this.onFormSubmit.bind(this), this.onStripeResponse = this.onStripeResponse.bind(this), this.formElement = $("#payment-form"), this.formElement.on("submit", this.onFormSubmit), this.formSubmitButton = this.formElement.find("button[type=submit]"), this.formSubmitLoader = Ladda.create(this.formSubmitButton.get(0)), $("#stripe-card-number").payment("formatCardNumber"), $("#stripe-card-cvc").payment("formatCardCVC"), SL.util.device.supportedByEditor() || $(".column").prepend("<section class=\"critical-error\"><h2>Not supported</h2><p>It looks like you're using a browser which isn't suported by the Slides editor. Please make sure to try the editor before upgrading.</p></section>"), $("html").hasClass("subscriptions new") && ($('input[name="subscription[billing_period]"]').on("change", this.syncSubmitButton.bind(this)), this.syncSubmitButton())
    }, syncSubmitButton: function () {
        var t = this.formElement.find('input[name="subscription[billing_period]"]:checked'), e = t.attr("data-period-value"), i = t.attr("data-usd-value"), n = this.formElement.find(".devise-note");
        0 === n.length && (n = $('<div class="devise-note">').insertAfter(this.formElement.find(".actions"))), e && i ? n.html("You are starting a <strong>" + e + "</strong> subscription and will be charged <strong>$" + i + "</strong> today.") : n.remove()
    }, onFormSubmit: function (t) {
        return this.formSubmitLoader.start(), Stripe.createToken(this.formElement, this.onStripeResponse), t.preventDefault(), !1
    }, onStripeResponse: function (t, e) {
        if (e.error)SL.notify(e.error.message, "negative"), this.formSubmitLoader.stop(); else {
            var i = e.id;
            this.formElement.find('input[name="subscription[token]"]').remove(), this.formElement.append($('<input type="hidden" name="subscription[token]" />').val(i)), this.formElement.get(0).submit()
        }
    }
}),SL("views.subscriptions").Show = SL.views.Base.extend({
    DOTTED_CARD_PREFIX: "&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; ",
    init: function () {
        this._super(), this.strings = {
            CONFIRM_UNSUBSCRIBE_ACTION: "Cancel subscription",
            CONFIRM_UNSUBSCRIBE_DESCRIPTION: SL.locale.get("REMOVE_PRO_CONFIRM")
        }, this.load()
    },
    bindLadda: function () {
        $(".column section .ladda-button").each(function (t, e) {
            e = $(e), e.data("ladda") || e.data("ladda", Ladda.create(e.get(0)))
        })
    },
    load: function () {
        $.ajax({
            url: SL.config.AJAX_SUBSCRIPTIONS_STATUS,
            type: "GET",
            context: this
        }).done(this.onDataLoaded).fail(this.onDataFailed)
    },
    onDataLoaded: function (t) {
        this.data = new SL.models.Customer(t.customer), this.render()
    },
    onDataFailed: function () {
        $(".billing-loader").text(SL.locale.get("BILLING_DETAILS_ERROR"))
    },
    render: function () {
        $(".billing-loader").remove(), this.renderDetails(), this.renderHistory(), (!SL.current_user.isEnterprise() || SL.current_user.billing_address) && this.renderAddress(), this.bindLadda()
    },
    renderDetails: function () {
        var t = $('<section class="billing-details"><h2>Billing details</h2></section>').appendTo(".billing-wrapper"), e = this.data.hasActiveSubscription();
        if (e) {
            if (t.append('<div class="field status"><span class="label">Status</span><span class="value">Active</span></div>'), this.data.has("active_card") && t.append('<div class="field card"><span class="label">Card</span><span class="value">' + this.DOTTED_CARD_PREFIX + this.data.get("active_card.last4") + "</span></div>"), this.data.hasActiveSubscription() && this.data.hasCoupon()) {
                var i = this.data.get("subscription.coupon_code").toUpperCase(), n = this.data.get("subscription.percent_off");
                n > 0 && (i += " / " + n + "% off"), t.append('<div class="field"><span class="label">Coupon</span><span class="value">' + i + "</span></div>")
            }
            if (this.data.has("subscription")) {
                var s = moment.unix(this.data.getNextInvoiceDate()).format("MMMM Do, YYYY"), o = "$" + this.data.getNextInvoiceSum();
                t.append('<div class="field payment-cycle"><span class="label">Next invoice</span><span class="value">' + o + " on " + s + "</span></div>")
            }
            t.append('<footer class="actions"><a class="button outline" href="' + SL.routes.SUBSCRIPTIONS_EDIT_CARD + '">Change credit card</a><button class="button negative outline cancel-subscription ladda-button" data-style="expand-right" data-spinner-color="#222">' + this.strings.CONFIRM_UNSUBSCRIBE_ACTION + "</button></footer>"), this.data.get("can_change_period") && t.find(".actions").prepend('<a class="button outline" href="' + SL.routes.SUBSCRIPTIONS_EDIT_PERIOD + '">Change billing period</a>'), t.find(".actions").prepend('<p class="title">Options</p>')
        } else {
            var a = "No active subscription";
            this.data.get("subscription") && (a = "Pro until " + moment.unix(this.data.get("subscription.current_period_end")).format("MMM Do, YYYY")), t.append('<div class="field status"><span class="label">Status</span><span class="value">' + a + "</span></div>"), t.append('<footer class="actions"><a class="button outline positive" href="' + SL.routes.SUBSCRIPTIONS_NEW + '">Return to Pro</a></footer>')
        }
        this.cancelButton = $(".billing-details .cancel-subscription"), this.cancelButton.length && (this.cancelButton.on("click", this.onCancelSubscriptionClicked.bind(this)), this.cancelLoader = Ladda.create(this.cancelButton.get(0)))
    },
    renderHistory: function () {
        var t = $(['<section class="billing-history">', "<h2>Receipts</h2>", '<table class="sl-table"></table>', "</section>"].join("")).appendTo(".billing-wrapper"), e = t.find("table");
        if (this.data.get("can_toggle_notifications") === !0) {
            t.append(['<div class="sl-checkbox outline">', '<input type="checkbox" id="receipt-notifications">', '<label for="receipt-notifications">Send receipts via email when I\'m charged</label>', "</div>"].join(""));
            var i = t.find("#receipt-notifications");
            i.on("change", this.onEmailNotificationChanged.bind(this)), SL.current_user.notify_on_receipt && i.prop("checked", !0)
        }
        e.html(["<tr>", '<th class="amount">Amount</th>', '<th class="date">Date</th>', '<th class="card">Card</th>', '<th class="download">PDF</th>', "</tr>"].join(""));
        var n = this.data.get("charges");
        n && n.length ? n.forEach(function (t) {
            if (t.paid) {
                var i = $(['<tr data-charge-id="' + t.id + '">', '<td class="amount">$' + (t.amount / 100).toFixed(2) + "</td>", '<td class="date">' + moment.unix(t.created).format("DD-MM-YYYY") + "</td>", '<td class="card">' + this.DOTTED_CARD_PREFIX + t.card.last4 + "</td>", '<td class="download">', '<form action="' + SL.config.AJAX_SUBSCRIPTIONS_PRINT_RECEIPT(t.id) + '" method="post">', '<button type="submit" class="button outline ladda-button download-button" data-style="slide-right" data-spinner-color="#222">', '<span class="icon i-download"></span>', "</button>", "</form>", "</td>", "</tr>"].join(""));
                i.appendTo(e), SL.util.dom.insertCSRF(i.find(".download form"))
            }
        }.bind(this)) : e.replaceWith("<p>" + SL.locale.get("BILLING_DETAILS_NOHISTORY") + "</p>")
    },
    renderAddress: function () {
        var t = $(['<section class="billing-address">', "<h2>Billing address</h2>", '<div class="sl-form">', '<div class="unit">', '<p class="unit-description">If you wish to include a billing address on your receipts please enter it below.</p>', '<textarea class="billing-address-input" rows="4" maxlength="100">', SL.current_user.billing_address || "", "</textarea>", "</div>", '<div class="footer">', '<button class="button l positive billing-address-save">Save</button>', "</div>", "</div>", "</section>"].join("")).appendTo(".billing-wrapper");
        this.addressInputField = t.find(".billing-address-input"), this.addressSaveButton = t.find(".billing-address-save"), this.addressInputField.on("change keyup mouseup", this.checkAddress.bind(this)), this.addressSaveButton.on("click", this.saveAddress.bind(this)), this.checkAddress()
    },
    checkAddress: function () {
        this.addressInputField.val() === (SL.current_user.billing_address || "") ? this.addressSaveButton.hide() : this.addressSaveButton.show()
    },
    saveAddress: function () {
        this.billingAddressXHR && this.billingAddressXHR.abort();
        var t = this.addressInputField.val() || "";
        this.billingAddressXHR = $.ajax({
            url: SL.config.AJAX_UPDATE_USER,
            type: "PUT",
            context: this,
            data: {user: {billing_address: t}}
        }).done(function () {
            SL.current_user.billing_address = t, SL.notify("Billing address saved")
        }).fail(function () {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }).always(function () {
            this.billingAddressXHR = null, this.checkAddress()
        })
    },
    onCancelSubscriptionClicked: function (t) {
        SL.prompt({
            anchor: $(t.currentTarget),
            title: this.strings.CONFIRM_UNSUBSCRIBE_DESCRIPTION,
            type: "select",
            data: [{html: "<h3>Cancel</h3>"}, {
                html: "<h3>Confirm</h3>",
                selected: !0,
                className: "negative",
                callback: function () {
                    this.cancelLoader.start(), $.ajax({
                        url: SL.config.AJAX_SUBSCRIPTIONS,
                        type: "DELETE",
                        context: this
                    }).done(this.onCancelSubscriptionSuccess).fail(this.onCancelSubscriptionError)
                }.bind(this)
            }]
        })
    },
    onCancelSubscriptionSuccess: function () {
        SL.notify(SL.locale.get("REMOVE_PRO_SUCCESS")), window.location.reload()
    },
    onCancelSubscriptionError: function () {
        SL.notify(SL.locale.get("GENERIC_ERROR")), this.cancelLoader.stop()
    },
    onEmailNotificationChanged: function (t) {
        this.emailNotificationXHR && this.emailNotificationXHR.abort();
        var e = $(t.currentTarget).is(":checked");
        this.emailNotificationXHR = $.ajax({
            url: SL.config.AJAX_UPDATE_USER,
            type: "PUT",
            context: this,
            data: {user: {notify_on_receipt: e}}
        }).done(function () {
            SL.notify(e === !0 ? "Got it. We'll email receipts to you" : "Receipts will no longer be emailed")
        }).fail(function () {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }).always(function () {
            this.emailNotificationXHR = null
        })
    }
}),SL("views.teams").New = SL.views.Base.extend({
    init: function () {
        this._super(), this.formElement = $("#payment-form"), this.formSubmitButton = this.formElement.find("button[type=submit]"), this.formSubmitLoader = Ladda.create(this.formSubmitButton.get(0)), this.bind(), this.summarize()
    }, bind: function () {
        this.summarize = this.summarize.bind(this), this.formElement.on("keydown", this.onFormKeyDown.bind(this)), this.formSubmitButton.on("click", this.onFormSubmitClicked.bind(this)), this.formElement.find("#team-name").on("input", this.onTeamNameChange.bind(this)), this.formElement.find('input[name="billing-period"]').on("change", this.summarize), $("#stripe-card-number").payment("formatCardNumber"), $("#stripe-card-cvc").payment("formatCardCVC"), $("#stripe-month").payment("restrictNumeric"), $("#stripe-year").payment("restrictNumeric"), this.formElement.find(".unit[data-validate], .unit[data-required]").each(function (t, e) {
            $(e).data("unit", new SL.components.FormUnit(e))
        })
    }, summarize: function () {
        var t = this.formElement.find(".purchase-summary"), e = t.find(".message"), i = "monthly" === this.formElement.find('input[name="billing-period"]:checked').val(), n = parseFloat($("#billing-period-monthly").attr("data-usd-value")), s = parseFloat($("#billing-period-yearly").attr("data-usd-value"));
        isNaN(n) && (n = SL.models.Plan.ACCOUNT_COST_PER_CYCLE_TEAM_14), isNaN(s) && (s = SL.models.Plan.ACCOUNT_COST_PER_CYCLE_TEAM_14_YEARLY), n % 1 != 0 && (n = n.toFixed(2)), s % 1 != 0 && (s = s.toFixed(2));
        var o = {period: i ? "month" : "year", cost: "$" + (i ? n : s)};
        e.html(SL.current_user && SL.current_user.isPro() ? ["Your account will be upgraded to the Team plan. The upgraded subscription will renew at the same interval as your current Pro subscription.", "<br><br>Unused time on your existing plan will be applied towards the upgrade."].join("") : ["You are starting a <strong>30 day free trial</strong>. If you cancel anytime in that period you will not be charged at all.", "<br><br>After the trial you will begin paying <strong>" + o.cost + " per " + o.period + "</strong> for each team member."].join(""))
    }, validate: function () {
        var t = !0;
        return this.formElement.find(".unit[data-validate], .unit[data-required]").each(function (e, i) {
            var n = $(i).data("unit");
            n.validate(!0) === !1 && (t && n.focus(), t = !1)
        }), t
    }, captureData: function () {
        this.formData = {
            team: {
                name: this.formElement.find("#team-name").val(),
                slug: this.formElement.find("#team-slug").val()
            },
            user: {
                username: this.formElement.find("#user-name").val(),
                email: this.formElement.find("#user-email").val(),
                password: this.formElement.find("#user-password").val()
            },
            subscription: {
                billing_period: this.formElement.find('input[name="billing-period"]:checked').val(),
                coupon: this.formElement.find('input[name="coupon"]').val()
            }
        }
    }, submitToStripe: function () {
        this.validate() && (this.captureData(), this.formSubmitLoader.start(), SL.current_user && SL.current_user.isPro() && 0 === $("#stripe-card-number").length ? this.submitToApp() : Stripe.createToken(this.formElement, this.onStripeResponse.bind(this)))
    }, submitToApp: function (t) {
        t && (this.formData.subscription.token = t), $.ajax({
            type: "POST",
            url: SL.config.AJAX_TEAMS_CREATE,
            data: JSON.stringify(this.formData),
            dataType: "json",
            context: this,
            contentType: "application/json"
        }).done(function (t) {
            window.location = t.team && "string" == typeof t.team.root_url ? window.location.protocol + "//" + t.team.root_url : window.location.protocol + "//" + this.formData.team.slug + "." + window.location.host
        }).fail(function (t) {
            var e = JSON.parse(t.responseText);
            e && e.user && e.user.email && e.user.email.length ? SL.notify("Email error: " + e.user.email[0], "negative") : SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), this.formSubmitLoader.stop()
        })
    }, onStripeResponse: function (t, e) {
        e.error ? (SL.notify(e.error.message, "negative"), this.formSubmitLoader.stop()) : this.submitToApp(e.id)
    }, onFormKeyDown: function (t) {
        return 13 === t.keyCode ? (this.submitToStripe(), t.preventDefault(), !1) : void 0
    }, onFormSubmitClicked: function (t) {
        return this.submitToStripe(), t.preventDefault(), !1
    }, onTeamNameChange: function () {
        var t = this.formElement.find("#team-name"), e = this.formElement.find("#team-slug");
        e.val(SL.util.string.slug(t.val()));
        var i = e.data("unit");
        i && i.validate()
    }
}),SL("views.teams.subscriptions").Reactivate = SL.views.Base.extend({
    init: function () {
        this._super(), this.formElement = $("#payment-form"), this.formSubmitButton = this.formElement.find("button[type=submit]"), this.formSubmitLoader = Ladda.create(this.formSubmitButton.get(0)), this.bind(), this.summarize()
    }, bind: function () {
        this.summarize = this.summarize.bind(this), this.formElement.on("keydown", this.onFormKeyDown.bind(this)), this.formSubmitButton.on("click", this.onFormSubmitClicked.bind(this)), this.formElement.find('input[name="billing-period"]').on("change", this.summarize), $("#stripe-card-number").payment("formatCardNumber"), $("#stripe-card-cvc").payment("formatCardCVC"), $("#stripe-month").payment("restrictNumeric"), $("#stripe-year").payment("restrictNumeric")
    }, summarize: function () {
        var t = this.formElement.find(".purchase-summary"), e = t.find(".message"), i = "monthly" === this.formElement.find('input[name="billing-period"]:checked').val(), n = parseFloat($("#billing-period-monthly").attr("data-usd-value")), s = parseFloat($("#billing-period-yearly").attr("data-usd-value"));
        isNaN(n) && (n = SL.models.Plan.ACCOUNT_COST_PER_CYCLE_TEAM_14), isNaN(s) && (s = SL.models.Plan.ACCOUNT_COST_PER_CYCLE_TEAM_14_YEARLY), n % 1 != 0 && (n = n.toFixed(2)), s % 1 != 0 && (s = s.toFixed(2));
        var o = {period: i ? "month" : "year", cost: "$" + (i ? n : s)};
        e.html(["You are starting a <strong>" + o.period + "ly subscription</strong> and will be charged <strong>" + o.cost + "</strong> per team member."].join(""))
    }, submitToStripe: function () {
        this.formSubmitLoader.start(), Stripe.createToken(this.formElement, this.onStripeResponse.bind(this))
    }, submitToApp: function (t) {
        var e = {
            subscription: {
                token: t,
                billing_period: this.formElement.find('input[name="billing-period"]:checked').val()
            }
        };
        $.ajax({
            type: "POST",
            url: SL.config.AJAX_TEAMS_REACTIVATE,
            data: JSON.stringify(e),
            dataType: "json",
            context: this,
            contentType: "application/json"
        }).done(function (t) {
            window.location = t.team && "string" == typeof t.team.root_url ? window.location.protocol + "//" + t.team.root_url : "/"
        }).fail(function () {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), this.formSubmitLoader.stop()
        })
    }, onStripeResponse: function (t, e) {
        e.error ? (SL.notify(e.error.message, "negative"), this.formSubmitLoader.stop()) : this.submitToApp(e.id)
    }, onFormKeyDown: function (t) {
        return 13 === t.keyCode ? (this.submitToStripe(), t.preventDefault(), !1) : void 0
    }, onFormSubmitClicked: function (t) {
        return this.submitToStripe(), t.preventDefault(), !1
    }
}),SL("views.teams.subscriptions").Show = SL.views.subscriptions.Show.extend({
    init: function () {
        this._super()
    }, render: function () {
        this.data.isTrial() ? (this.strings.CONFIRM_UNSUBSCRIBE_ACTION = "Cancel subscription and deactivate my team", this.strings.CONFIRM_UNSUBSCRIBE_DESCRIPTION = "Your trial will be canceled immediately and this team will no longer be accessible.") : (this.strings.CONFIRM_UNSUBSCRIBE_ACTION = "Cancel subscription and deactivate my team", this.strings.CONFIRM_UNSUBSCRIBE_DESCRIPTION = "Your subscription will be terminated and this team will be inaccessible after the end of the current billing cycle."), this._super()
    }, renderDetails: function () {
        var t = $('<section class="billing-details"><h2>Billing details</h2></section>').appendTo(".billing-wrapper"), e = this.data.hasActiveSubscription(), i = this.data.isTrial();
        if (e) {
            if (t.append(i ? '<div class="field status"><span class="label">Status</span><span class="value">Trial</span></div>' : '<div class="field status"><span class="label">Status</span><span class="value">Active</span></div>'), SL.current_team.has("user_count") && t.append('<div class="field active-users"><span class="label" data-tooltip="The current number of users that you have invited to the team." data-tooltip-maxwidth="260">Team members</span><span class="value">' + SL.current_team.get("user_count") + "</span></div>"), this.data.has("subscription.period") && t.append('<div class="field period"><span class="label">Billing period</span><span class="value">' + ("year" === this.data.get("subscription.period") ? "Yearly" : "Monthly") + "</span></div>"), this.data.has("active_card") && t.append('<div class="field card"><span class="label">Card</span><span class="value">' + this.DOTTED_CARD_PREFIX + this.data.get("active_card.last4") + "</span></div>"), this.data.hasActiveSubscription() && this.data.hasCoupon()) {
                var n = this.data.get("subscription.coupon_code").toUpperCase(), s = this.data.get("subscription.percent_off");
                s > 0 && (n += " / " + s + "% off"), t.append('<div class="field"><span class="label">Coupon</span><span class="value">' + n + "</span></div>")
            }
            if (this.data.has("subscription")) {
                var o = moment.unix(this.data.getNextInvoiceDate()).format("MMMM Do, YYYY"), a = i ? "First invoice" : "Next invoice", r = "$" + this.data.getNextInvoiceSum();
                t.append('<div class="field payment-cycle"><span class="label">' + a + '</span><span class="value">' + r + " on " + o + "</span></div>")
            }
            t.append('<footer class="actions"><a class="button outline" href="' + SL.routes.SUBSCRIPTIONS_EDIT_CARD + '">Change credit card</a><button class="button negative outline cancel-subscription ladda-button" data-style="expand-right" data-spinner-color="#222">' + this.strings.CONFIRM_UNSUBSCRIBE_ACTION + "</button></footer>"), this.data.get("can_change_period") && t.find(".actions").prepend('<a class="button outline" href="' + SL.routes.SUBSCRIPTIONS_EDIT_PERIOD + '">Change billing period</a>'), t.find(".actions").prepend('<p class="title">Options</p>')
        } else {
            var l = moment.unix(this.data.get("subscription.current_period_end")).format("MMM Do, YYYY");
            t.append('<div class="field status"><span class="label">Status</span><span class="value">Canceled, available until ' + l + "</span></div>")
        }
        this.cancelButton = $(".billing-details .cancel-subscription"), this.cancelButton.length && (this.cancelButton.on("click", this.onCancelSubscriptionClicked.bind(this)), this.cancelLoader = Ladda.create(this.cancelButton.get(0)))
    }, onCancelSubscriptionSuccess: function () {
        SL.notify("Subscription canceled"), window.location = "http://slides.com"
    }
}),SL("views.teams.teams").Edit = SL.views.Base.extend({
    init: function () {
        this._super(), this.render()
    }, render: function () {
        if (this.formElement = $("form"), this.formElement.length) {
            this.formElement.find(".unit[data-factory]").each(function (t, e) {
                var i = null;
                $(e).attr("data-factory").split(".").forEach(function (t) {
                    i = i ? i[t] : window[t]
                }), "function" == typeof i && new i(e)
            }), this.formElement.find(".unit[data-validate]:not([data-factory])").each(function (t, e) {
                new SL.components.FormUnit(e)
            });
            var t = this.formElement.find("button[type=submit]");
            if (t.length) {
                var e = Ladda.create(t.get(0));
                this.formElement.on("submit", function (t) {
                    t.isDefaultPrevented() || e.start()
                }.bind(this))
            }
        }
    }
}),SL("views.teams.teams").EditMembers = SL.views.Base.extend({
    init: function () {
        this._super(), this.strings = {
            loadMoreMembers: "Load more",
            loadingMoreMembers: "Loading..."
        }, this.render(), this.bind(), this.load().then(this.afterLoad.bind(this), function () {
            this.preloaderElement.remove(), this.contentElement.html("<strong>Sorry but we ran into an issue. Try reloading the page.</strong>").show()
        }.bind(this))
    }, render: function () {
        this.preloaderElement = $(".users-preloader"), this.contentElement = $(".users-content"), this.activeMembersTable = this.contentElement.find(".users-group-active-members tbody"), this.inactiveMembersTable = this.contentElement.find(".users-group-inactive-members tbody"), this.invitesTable = this.contentElement.find(".users-group-invites tbody"), this.inviteForm = this.contentElement.find(".invite-form"), this.bindLadda(this.inviteForm), this.submitButton = this.inviteForm.find("[type=submit]"), this.emailInput = this.inviteForm.find("[name=email]"), this.roleInput = this.inviteForm.find("[name=role]"), this.loadMoreMembers = $('<div class="load-more">'), this.loadMoreMembers.appendTo(this.contentElement.find(".users-group-active-members")), this.loadMoreMembersLabel = $('<span class="load-more-label"></span>'), this.loadMoreMembersLabel.appendTo(this.loadMoreMembers), this.loadMoreMembersButton = $('<button class="load-more-button">' + this.strings.loadMoreMembers + "</button>"), this.loadMoreMembersButton.on("vclick", this.onLoadMoreMembersClicked.bind(this)), this.loadMoreMembersButton.appendTo(this.loadMoreMembers)
    }, bind: function () {
        this.inviteForm.on("submit", this.onInviteSubmit.bind(this)), this.emailInput.on("input", this.onEmailInput.bind(this))
    }, bindLadda: function (t) {
        t.find(".ladda-button").each(function (t, e) {
            e = $(e), e.data("ladda") || e.data("ladda", Ladda.create(e.get(0)))
        })
    }, load: function () {
        return this.membersCollection = new SL.collections.TeamMembers, this.invitesCollection = new SL.collections.TeamInvites, Promise.all([this.membersCollection.load(), this.invitesCollection.load()])
    }, afterLoad: function () {
        this.preloaderElement.remove(), this.contentElement.show(), this.membersCollection.forEach(this.renderMember.bind(this)), this.invitesCollection.forEach(this.renderInvitee.bind(this)), this.refreshLoadMore(), this.refreshTableVisibility()
    }, refreshLoadMore: function () {
        this.loadMoreMembers.toggleClass("visible", !this.membersCollection.isLoading() && this.membersCollection.isLoaded() && this.membersCollection.hasNextPage()), this.loadMoreMembersLabel.text("Showing " + this.membersCollection.getLoadedResults() + "/" + this.membersCollection.getTotalResults() + " members")
    }, refreshTableVisibility: function () {
        this.activeMembersTable.parents(".users-group").toggleClass("visible", this.activeMembersTable.find("tr").length > 1), this.inactiveMembersTable.parents(".users-group").toggleClass("visible", this.inactiveMembersTable.find("tr").length > 1), this.invitesTable.parents(".users-group").toggleClass("visible", this.invitesTable.find("tr").length > 1)
    }, renderMember: function (t) {
        t.hasMembership() && t.membership.get("activated") ? this.renderActiveMember(t) : this.renderInactiveMember(t)
    }, renderActiveMember: function (t) {
        var e = $("<tr>").attr("data-id", t.get("id")), i = '<div class="avatar" style="background-image: url(' + t.get("thumbnail_url") + ')" data-tooltip="View profile"></div>';
        e.append('<td><a href="/' + t.get("username") + '" target="_blank">' + i + "</a>" + t.get("email") + "</td>"), e.append('<td class="role"></td>'), e.append('<td class="actions"></td>');
        var n = this.renderRoleSelector(t, !0);
        n.appendTo(e.find(".role")), n.on("change", this.onRoleChanged.bind(this, t, e));
        var s = SL.current_user.get("id") === t.get("id"), o = t.hasMembership() && t.membership.isOwner();
        s || o || (e.find(".actions").append('<button class="button outline ladda-button deactivate" data-style="zoom-out" data-spinner-color="#222" data-tooltip="Deactivate"><span class="i-x"></span></button>'), e.find(".deactivate").on("click", this.onDeactivateUserClicked.bind(this, t, e))), e.appendTo(this.activeMembersTable)
    }, renderInactiveMember: function (t) {
        var e = $("<tr>").attr("data-id", t.get("id"));
        e.append("<td>" + t.get("email") + "</td>"), e.append('<td class="role"></td>'), e.append('<td class="actions"></td>'), e.find(".role").append(this.renderRoleSelector(t, !1)), e.find(".actions").html(['<button class="button outline ladda-button delete" data-style="zoom-out" data-spinner-color="#222" data-tooltip="Delete permanently"><span class="i-trash-stroke"></span></button>', '<button class="button outline ladda-button reactivate" data-style="zoom-out" data-spinner-color="#222" data-tooltip="Reactivate account"><span class="i-plus"></span></button>'].join("")), e.find(".reactivate").on("click", this.onReactivateUserClicked.bind(this, t, e)), e.find(".delete").on("click", this.onDeleteUserClicked.bind(this, t, e)), e.appendTo(this.inactiveMembersTable)
    }, renderInvitee: function (t) {
        var e = $("<tr>").attr("data-id", t.get("id"));
        e.append("<td>" + t.get("email") + "</td>"), e.append('<td class="role"></td>'), e.append('<td class="actions"></td>'), e.find(".role").append(this.renderRoleSelector(t, !1)), e.find(".actions").html(['<button class="button outline ladda-button resend-invite" data-style="zoom-out" data-spinner-color="#222" data-tooltip="Resend invite"><span class="i-mail"></span></button>', '<button class="button outline ladda-button delete-invite" data-style="zoom-out" data-spinner-color="#222" data-tooltip="Cancel invite"><span class="i-x"></span></button>'].join("")), e.find(".resend-invite").on("click", this.resendInvite.bind(this, t, e)), e.find(".delete-invite").on("click", this.deleteInvite.bind(this, t, e)), e.appendTo(this.invitesTable)
    }, renderRoleSelector: function (t, e) {
        var i = $('<select class="sl-select s role-selector"></select>'), n = SL.models.UserMembership.ROLE_MEMBER;
        return n = t.hasMembership && t.hasMembership() ? t.membership.get("role") : t.get("team_role"), n === SL.models.UserMembership.ROLE_OWNER ? i.append(['<option value="' + SL.models.UserMembership.ROLE_OWNER + '" selected>Owner</option>'].join("")) : (i.append(['<option value="' + SL.models.UserMembership.ROLE_MEMBER + '">Member</option>', '<option value="' + SL.models.UserMembership.ROLE_ADMIN + '">Admin</option>'].join("")), i.find('[value="' + n + '"]').prop("selected", !0)), e && SL.current_user.get("id") !== t.get("id") && n !== SL.models.UserMembership.ROLE_OWNER || i.attr("disabled", !0), i
    }, onRoleChanged: function (t, e, i) {
        $.ajax({
            type: "PUT",
            url: SL.config.AJAX_TEAM_MEMBER_UPDATE(t.get("id")),
            data: {user: {role: i.target.value}},
            context: this
        }).done(function () {
            SL.notify("Role saved")
        }).fail(function () {
            SL.notify("Failed to change role", "negative")
        })
    }, deactivateUser: function (t, e) {
        this.bindLadda(e);
        var i = e.find("button.deactivate").data("ladda");
        i && i.start(), $.ajax({
            type: "DELETE",
            url: SL.config.AJAX_TEAM_MEMBER_DEACTIVATE(t.get("id")),
            context: this
        }).done(function () {
            SL.notify("User deactivated"), e.remove(), t.membership.set("activated", !1), this.renderInactiveMember(t), this.refreshTableVisibility()
        }).fail(function () {
            SL.notify("Failed to deactivate member", "negative")
        }).always(function () {
            i && i.stop()
        })
    }, onDeactivateUserClicked: function (t, e, i) {
        SL.prompt({
            type: "select",
            anchor: i.currentTarget,
            title: "Are you sure you want to deactivate this account?",
            subtitle: "This person will no longer be able to sign in to Slides. You are not charged for deactivated accounts and can reactivate any time.",
            data: [{html: "<h3>Cancel</h3>"}, {
                html: "<h3>Deactivate</h3>",
                selected: !0,
                className: "negative",
                callback: this.deactivateUser.bind(this, t, e)
            }]
        })
    }, reactivateUser: function (t, e) {
        this.bindLadda(e);
        var i = e.find("button.reactivate").data("ladda");
        i && i.start(), $.ajax({
            type: "POST",
            url: SL.config.AJAX_TEAM_MEMBER_REACTIVATE(t.get("id")),
            context: this
        }).done(function () {
            SL.notify("User activated"), e.remove(), t.membership.set("activated", !0), this.renderActiveMember(t), this.refreshTableVisibility()
        }).fail(function () {
            SL.notify("Failed to activate member", "negative")
        }).always(function () {
            i && i.stop()
        })
    }, onReactivateUserClicked: function (t, e) {
        this.reactivateUser(t, e)
    }, deleteUser: function (t, e, i) {
        this.bindLadda(e);
        var n = e.find("button.delete").data("ladda");
        n && n.start(), $.ajax({
            type: "DELETE",
            url: SL.config.AJAX_TEAM_MEMBER_DELETE(t.get("id")),
            data: {absorb_decks: i},
            context: this
        }).done(function () {
            SL.notify("User deleted"), e.remove(), this.refreshTableVisibility()
        }).fail(function () {
            SL.notify("Failed to delete member", "negative")
        }).always(function () {
            n && n.stop()
        })
    }, onDeleteUserClicked: function (t, e, i) {
        SL.prompt({
            type: "select",
            anchor: i.currentTarget,
            title: "Do you want to permanently delete this account?",
            subtitle: "All settings and slide decks associated with the account will be removed. This can not be undone.",
            data: [{html: "<h3>Cancel</h3>"}, {
                html: "<h3>Delete</h3>",
                selected: !0,
                className: "negative",
                callback: this.deleteUser.bind(this, t, e)
            }, {
                html: "<h3>Delete but keep decks</h3>",
                selected: !0,
                className: "negative",
                callback: this.deleteUser.bind(this, t, e, !0)
            }]
        })
    }, sendInvite: function () {
        var t = this.emailInput.val().trim(), e = this.roleInput.val();
        if (t && t.length > 1) {
            var i = this.inviteForm.find(".ladda-button").data("ladda");
            i && i.start(), $.ajax({
                type: "POST",
                url: SL.config.AJAX_TEAM_INVITATIONS_CREATE,
                data: {invitation: {email: t, team_role: e}},
                context: this
            }).done(function (t) {
                this.renderInvitee(this.invitesCollection.createModel(t)), this.refreshTableVisibility(), this.emailInput.val(""), SL.notify("Invite sent!")
            }).fail(function () {
                SL.notify("Failed to send invite", "negative")
            }).always(function () {
                i && i.stop()
            })
        }
    }, resendInvite: function (t, e) {
        this.bindLadda(e);
        var i = e.find("button.resend-invite").data("ladda");
        i && i.start(), $.ajax({
            type: "POST",
            url: SL.config.AJAX_TEAM_INVITATIONS_RESEND(t.get("id")),
            context: this
        }).done(function () {
            SL.notify("Invite sent!")
        }).fail(function () {
            SL.notify("Failed to send invite", "negative")
        }).always(function () {
            i && i.stop()
        })
    }, deleteInvite: function (t, e) {
        this.bindLadda(e);
        var i = e.find("button.delete-invite").data("ladda");
        i && i.start(), $.ajax({
            type: "DELETE",
            url: SL.config.AJAX_TEAM_INVITATIONS_DELETE(t.get("id")),
            context: this
        }).done(function () {
            SL.notify("Invite deleted"), e.remove(), this.refreshTableVisibility()
        }).fail(function () {
            SL.notify("Failed to delete invite", "negative")
        }).always(function () {
            i && i.stop()
        })
    }, onInviteSubmit: function (t) {
        t.preventDefault(), this.sendInvite()
    }, onEmailInput: function () {
        this.submitButton.prop("disabled", 0 == this.emailInput.val().trim().length)
    }, onLoadMoreMembersClicked: function () {
        this.loadMoreMembersButton.prop("disabled", !0).text(this.strings.loadingMoreMembers), this.membersCollection.loadNextPage().then(function (t) {
            t.forEach(this.renderMember.bind(this))
        }.bind(this)).catch(function () {
            SL.notify("Failed to load members", "negative")
        }.bind(this)).then(function () {
            this.loadMoreMembersButton.prop("disabled", !1).text(this.strings.loadMoreMembers), this.refreshLoadMore()
        }.bind(this))
    }
}),SL("views.teams.teams").Show = SL.views.Base.extend({
    init: function () {
        this._super(), new SL.components.Search({url: SL.config.AJAX_SEARCH_ORGANIZATION})
    }
}),SL("views.themes").Edit = SL.views.Base.extend({
    init: function () {
        this._super(), this.themeData = new SL.collections.Collection, this.listElement = $(".theme-list"), this.editorElement = $(".theme-editor"), this.editorInnerElement = $(".theme-editor-inner"), this.VERSION = parseInt($(".theme-editor").attr("data-editor-version"), 10), this.load(), this.bindLadda(), this.setupPreview(), $("body").on("click", ".global-css-button", this.onGlobalCSSClicked.bind(this)), $("body").on("click", ".create-theme-button", this.onCreateThemeClicked.bind(this)), $(window).on("beforeunload", this.onWindowBeforeUnload.bind(this)), hljs.initHighlightingOnLoad()
    }, bindLadda: function () {
        $(".page-wrapper .ladda-button").each(function (t, e) {
            e = $(e), e.data("ladda") || e.data("ladda", Ladda.create(e.get(0)))
        })
    }, setupPreview: function () {
        this.previewFrame = $(".preview .preview-frame"), this.previewReloader = $(".preview .preview-reloader"), this.previewReloader.on("click", this.reloadPreview.bind(this)), window.addEventListener("message", function (t) {
            t.data && "theme-preview-ready" === t.data.type && this.refreshPreview()
        }.bind(this))
    }, load: function () {
        SL.helpers.PageLoader.show({message: "Loading themes"}), $.ajax({
            type: "GET",
            url: SL.config.AJAX_THEMES_LIST,
            context: this
        }).done(function (t) {
            this.themeData.clear(), t.results.forEach(function (t) {
                this.themeData.push(new SL.models.Theme(t))
            }.bind(this))
        }).fail(function () {
            SL.notify(SL.locale.get("THEME_LIST_LOAD_ERROR"), "negative")
        }).always(function () {
            this.renderList(), SL.helpers.PageLoader.hide()
        })
    }, renderList: function () {
        this.listElement.empty(), this.themeData.isEmpty() ? this.listElement.html('<p class="theme-list-empty">' + SL.locale.get("THEME_LIST_EMPTY") + "</p>") : (this.themeData.forEach(this.renderListItem.bind(this)), SL.view.parseTimes()), this.updateListDefault()
    }, renderListItem: function (t, e) {
        e = $.extend({prepend: !1, showDelay: 0}, e);
        var i = this.listElement.find('[data-theme-id="' + t.get("id") + '"]');
        if (i.length ? i.find(".theme-list-item-title").text(t.get("name")).attr("title", t.get("name")) : (i = $(['<div class="theme-list-item" data-theme-id="' + t.get("id") + '">', '<div class="theme-list-item-thumbnail"></div>', '<h2 class="theme-list-item-title" title="' + t.get("name") + '">' + t.get("name") + "</h2>", '<div class="theme-list-item-metadata">', '<div class="theme-list-item-metadata-field">Created <time class="date" datetime="' + t.get("created_at") + '"></time></div>', '<div class="theme-list-item-metadata-field">Updated <time class="ago" datetime="' + t.get("updated_at") + '"></time></div>', "</div>", '<div class="theme-list-item-controls">', '<button class="button outline l delete" data-tooltip="' + SL.locale.get("THEME_DELETE_TOOLTIP") + '">', '<span class="icon i-trash-stroke"></span>', "</button>", '<button class="button outline l edit" data-tooltip="' + SL.locale.get("THEME_EDIT_TOOLTIP") + '">', '<span class="icon i-pen-alt2"></span>', "</button>", '<button class="button outline l default" data-tooltip="' + SL.locale.get("THEME_MAKE_DEFAULT_TOOLTIP") + '">', '<span class="icon i-checkmark"></span>', "</button>", "</div>", "</div>"].join("")), e.prepend === !0 ? i.prependTo(this.listElement) : i.appendTo(this.listElement), e.showDelay > 0 && (i.hide(), setTimeout(function () {
                i.show()
            }, e.showDelay))), t.hasThumbnail()) {
            var n = t.get("thumbnail_url");
            i.find(".theme-list-item-thumbnail").css("background-image", 'url("' + n + '")').attr("data-thumb-url", n)
        }
        return i.off("click").on("click", function (e) {
            $(e.target).closest(".theme-list-item-controls .delete").length ? this.removeTheme(t, null, $(e.target).closest(".theme-list-item-controls .delete")) : $(e.target).closest(".theme-list-item-controls .default").length ? i.hasClass("default") ? this.unmakeDefaultTheme() : this.makeDefaultTheme(t) : this.editTheme(t)
        }.bind(this)), i
    }, refreshListItemThumb: function (t) {
        if (t && t.length) {
            var e = t.find(".theme-list-item-thumbnail"), i = e.attr("data-thumb-url");
            i && (i = i + "?" + Math.round(1e4 * Math.random()), e.css("background-image", 'url("' + i + '")'))
        }
    }, updateListDefault: function () {
        this.listElement.find(".theme-list-item").each(function (t, e) {
            e = $(e), e.toggleClass("default", e.attr("data-theme-id") == SL.current_team.get("default_theme_id")), e.find(".theme-list-item-controls .default").attr("data-tooltip", SL.locale.get(e.hasClass("default") ? "THEME_IS_DEFAULT_TOOLTIP" : "THEME_MAKE_DEFAULT_TOOLTIP"))
        })
    }, editTheme: function (t) {
        if (SL.fonts.loadAll(), this.panel)return this.panel.close(this.editTheme.bind(this, t)), !1;
        $("html").addClass("is-editing-theme");
        var e = {};
        e = 1 === this.VERSION ? {
            colors: SL.config.V1.THEME_COLORS,
            fonts: SL.config.V1.THEME_FONTS,
            center: !0,
            rollingLinks: !0
        } : {
            colors: SL.config.THEME_COLORS,
            fonts: SL.config.THEME_FONTS,
            center: !1,
            rollingLinks: !1
        }, this.panel = new SL.views.themes.edit.Panel(this, t, e), this.panel.destroyed.add(function () {
            $("html").removeClass("is-editing-theme"), this.panel = null
        }.bind(this)), this.bindLadda()
    }, createTheme: function () {
        $.ajax({
            type: "POST",
            url: SL.config.AJAX_THEMES_CREATE,
            data: {
                theme: {
                    font: SL.config.DEFAULT_THEME_FONT,
                    color: SL.config.DEFAULT_THEME_COLOR,
                    transition: SL.config.DEFAULT_THEME_TRANSITION,
                    background_transition: SL.config.DEFAULT_THEME_BACKGROUND_TRANSITION
                }
            },
            context: this
        }).done(function (t) {
            var e = new SL.models.Theme(t);
            this.themeData.isEmpty() ? (this.themeData.push(e), this.renderList(), this.makeDefaultTheme(e, null, !0)) : (this.themeData.push(e), this.renderListItem(e, {
                prepend: !0,
                showDelay: 3e3
            }), SL.view.parseTimes()), this.editTheme(e)
        }).fail(function () {
            SL.notify(SL.locale.get("THEME_CREATE_ERROR"), "negative")
        })
    }, saveTheme: function (t, e, i) {
        $.ajax({
            type: "PUT",
            url: SL.config.AJAX_THEMES_UPDATE(t.get("id")),
            data: {theme: t.toJSON()},
            context: this
        }).done(function (t) {
            var i = this.renderListItem(new SL.models.Theme(t));
            SL.view.parseTimes(), t && t.sanitize_messages && t.sanitize_messages.length ? SL.notify(t.sanitize_messages[0], "negative") : SL.notify(SL.locale.get("THEME_SAVE_SUCCESS")), SL.util.callback(e), setTimeout(function () {
                this.refreshListItemThumb(i)
            }.bind(this), 2500), setTimeout(function () {
                this.refreshListItemThumb(i)
            }.bind(this), 5e3)
        }).fail(function () {
            SL.notify(SL.locale.get("THEME_SAVE_ERROR"), "negative"), SL.util.callback(i)
        })
    }, removeTheme: function (t, e, i) {
        var n = this.getListItem(t);
        SL.prompt({
            anchor: i,
            title: SL.locale.get("THEME_REMOVE_CONFIRM"),
            type: "select",
            offsetX: 15,
            data: [{html: "<h3>Cancel</h3>"}, {
                html: "<h3>Delete</h3>",
                selected: !0,
                className: "negative",
                callback: function () {
                    var i = t.get("id");
                    $.ajax({type: "DELETE", url: SL.config.AJAX_THEMES_DELETE(i), context: this}).done(function () {
                        SL.util.anim.collapseListItem(n, function () {
                            n.remove()
                        }), SL.util.callback(e), this.themeData.removeByProperties({id: i}), this.panel && this.panel.getTheme().get("id") === i && this.panel.destroy(), SL.notify(SL.locale.get("THEME_REMOVE_SUCCESS"))
                    }).fail(function () {
                        SL.notify(SL.locale.get("THEME_REMOVE_ERROR"), "negative")
                    })
                }.bind(this)
            }]
        })
    }, makeDefaultTheme: function (t, e, i) {
        $.ajax({
            type: "PUT",
            url: SL.config.AJAX_UPDATE_TEAM,
            data: {team: {default_theme_id: t.get("id")}},
            context: this
        }).done(function () {
            SL.current_team.set("default_theme_id", t.get("id")), this.updateListDefault(), i || SL.notify(SL.locale.get("THEME_DEFAULT_SAVE_SUCCESS")), SL.util.callback(e)
        }).fail(function () {
            i || SL.notify(SL.locale.get("THEME_DEFAULT_SAVE_ERROR"), "negative")
        })
    }, unmakeDefaultTheme: function (t, e) {
        $.ajax({
            type: "PUT",
            url: SL.config.AJAX_UPDATE_TEAM,
            data: {team: {default_theme_id: null}},
            context: this
        }).done(function () {
            SL.current_team.set("default_theme_id", null), this.updateListDefault(), e || SL.notify(SL.locale.get("THEME_DEFAULT_SAVE_SUCCESS")), SL.util.callback(t)
        }).fail(function () {
            e || SL.notify(SL.locale.get("THEME_DEFAULT_SAVE_ERROR"), "negative")
        })
    }, getListItem: function (t) {
        return this.listElement.find('[data-theme-id="' + (t ? t.get("id") : null) + '"]')
    }, refreshPreview: function (t, e) {
        t = t || this.previewTheme, t || (t = new SL.models.Theme), "undefined" == typeof e && (e = SL.current_team.get("global_css_output"));
        var i = this.getPreviewWindow();
        i && t && (i.SL && i.SL.helpers && i.SL.helpers.ThemeController.paint(t, {
            center: 1 === this.VERSION,
            globalCSS: e
        }), this.previewTheme = t)
    }, reloadPreview: function () {
        var t = this.getPreviewWindow();
        t && t.location.reload()
    }, getPreviewWindow: function () {
        return this.previewFrame.length ? this.previewFrame.get(0).contentWindow : null
    }, onWindowBeforeUnload: function () {
        return this.panel && this.panel.hasUnsavedChanges() ? SL.locale.get("LEAVE_UNSAVED_THEME") : void 0
    }, onCreateThemeClicked: function (t) {
        t.preventDefault(), this.createTheme()
    }, onGlobalCSSClicked: function () {
        return this.panel ? (this.panel.close(this.editTheme.bind(this, theme)), !1) : ($("html").addClass("is-editing-theme"), this.panel = new SL.views.themes.edit.GlobalCSSPanel(this, SL.current_team), this.panel.destroyed.add(function () {
            $("html").removeClass("is-editing-theme"), this.panel = null
        }.bind(this)), void this.bindLadda())
    }
}),SL("views.themes.edit").Panel = Class.extend({
    DEFAULT_PAGE: "settings",
    PAGES: [{name: "Settings", id: "settings", factory: "renderSettings"}, {
        name: "CSS",
        id: "css",
        factory: "renderCSS"
    }, {name: "HTML", id: "html", factory: "renderHTML"}, {
        name: "JS",
        id: "js",
        factory: "renderJS",
        condition: function () {
            return SL.current_team.get("allow_scripts")
        }
    }, {
        name: "Palette", id: "palette", factory: "renderPalette", condition: function () {
            return this.editor.VERSION > 1
        }
    }, {name: "Snippets", id: "snippets", factory: "renderSnippets"}],
    init: function (t, e, i) {
        this.editor = t, this.theme = e, this.themeOptionsConfig = i, this.previewTimeout = -1, this.destroyed = new signals.Signal, this.updatePreview = this.updatePreview.bind(this), this.paintPreview = this.paintPreview.bind(this), this.render(), this.load()
    },
    load: function () {
        this.theme.load().done(function () {
            this.theme = this.theme.clone(), this.afterLoad(), this.savedJSON = JSON.stringify(this.theme.toJSON()), this.checkUnsavedChanges()
        }.bind(this)).fail(function () {
            this.close(), SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }.bind(this))
    },
    afterLoad: function () {
        this.preloaderElement.addClass("hidden"), setTimeout(function () {
            this.preloaderElement.remove(), this.preloaderElement = null
        }.bind(this), 500), this.renderHeader(), this.renderPages(), this.bind(), this.showPage(this.DEFAULT_PAGE), this.paintPreview()
    },
    render: function () {
        this.domElement = $('<div class="panel">'), this.domElement.appendTo(this.editor.editorInnerElement), this.pagesElement = $('<div class="pages">'), this.pagesElement.appendTo(this.domElement), this.preloaderElement = $('<div class="preloader"><div class="preloader-inner"><div class="preloader-spinner"></div></div></div>'), this.preloaderElement.appendTo(this.editor.editorInnerElement), SL.util.html.generateSpinners()
    },
    renderHeader: function () {
        this.headerElement = $('<header class="panel-header">').appendTo(this.domElement), this.tabsElement = $('<div class="page-tabs">').appendTo(this.headerElement), this.cancelButton = $('<button class="button l grey cancel-button">Close</button>').appendTo(this.headerElement), this.saveButton = $('<button class="button l positive save-button ladda-button" data-style="zoom-out">Save</button>').appendTo(this.headerElement), this.saveButton.data("ladda", Ladda.create(this.saveButton.get(0))), this.onSaveClicked = this.onSaveClicked.bind(this), this.onCancelClicked = this.onCancelClicked.bind(this), this.saveButton.on("click", this.onSaveClicked), this.cancelButton.on("click", this.onCancelClicked)
    },
    renderPages: function () {
        this.PAGES.forEach(function (t) {
            ("function" != typeof t.condition || t.condition.call(this)) && ($('<button class="page-tab" data-page-id="' + t.id + '">' + t.name + "</button>").on("click", this.showPage.bind(this, t.id)).appendTo(this.tabsElement), this[t.factory]())
        }.bind(this))
    },
    renderSettings: function () {
        this.settingsElement = $('<div class="page sl-form" data-page-id="settings">').appendTo(this.pagesElement), this.settingsElement.append('<div class="unit name" data-required><label for="">Name</label><input id="theme-name" placeholder="Theme name" type="text" value="' + (this.theme.get("name") || "Untitled") + '"></div>'), this.settingsElement.find("#theme-name").on("change", this.paintPreview), this.settingsElement.find("#theme-name").on("input", this.onNameInputChanged.bind(this)), this.renderThemeOptions()
    },
    renderThemeOptions: function () {
        var t = $.extend(this.themeOptionsConfig, {model: this.theme, container: this.settingsElement});
        "no-color" !== t.colors[t.colors.length - 1].id && t.colors.push({
            id: "no-color",
            tooltip: "Specifies as few color styles as possible, useful if you want to write custom CSS from the ground up."
        }), "no-font" !== t.fonts[t.fonts.length - 1].id && t.fonts.push({
            id: "no-font",
            title: "None",
            tooltip: "Specifies as few typographic styles as possible, useful if you want to write custom CSS from the ground up."
        }), this.themeOptions = new SL.components.ThemeOptions(t), this.themeOptions.changed.add(this.paintPreview)
    },
    renderCSS: function (t, e) {
        t = t || "CSS", e = e || "Specify custom styles using LESS or standard CSS. All selectors are automatically prefixed with .reveal when saved.", this.cssElement = $('<div class="page" data-page-id="css">').appendTo(this.pagesElement), this.cssElement.html(['<div class="page-header page-header-absolute">', "<h4>" + t + "</h4>", "<p>" + e + ' <a class="documentation-link" href="#">More info</a></p>', '<div class="documentation">', $("#css-panel-documentation").html(), "</div>", "</div>", '<div class="editor-wrapper">', '<div id="ace-less" class="editor"></div>', '<div class="error"></div>', '<div class="info positive" data-tooltip="" data-tooltip-maxwidth="300" data-tooltip-align="left"><span class="icon i-info"></span></div>', "</div>"].join("")), this.cssErrorElement = this.cssElement.find(".error"), this.cssElement.find(".info").hide();
        try {
            this.cssEditor = ace.edit("ace-less"), this.cssEditor.setTheme("ace/theme/monokai"), this.cssEditor.setDisplayIndentGuides(!0), this.cssEditor.setShowPrintMargin(!1), this.cssEditor.getSession().setMode("ace/mode/less"), this.cssEditor.env.document.setValue(this.getCSSInput() || ""), this.cssEditor.env.editor.on("change", this.onCSSInputChanged.bind(this)), this.syncCSS()
        } catch (i) {
            console.log("An error occurred while initializing the Ace CSS editor.")
        }
    },
    syncCSS: function () {
        var t = SL.util.string.getCustomClassesFromLESS(this.cssEditor.env.document.getValue());
        if (t.length) {
            var e = "Found custom slide classes:<br>- " + t.join("<br>- ");
            this.cssElement.find(".info").attr("data-tooltip", e).show()
        } else this.cssElement.find(".info").attr("data-tooltip", "").hide()
    },
    setCSSInput: function (t) {
        this.theme.set("less", t)
    },
    getCSSInput: function () {
        return this.theme.get("less")
    },
    setCSSOutput: function (t) {
        this.theme.set("css", t)
    },
    getCSSOutput: function () {
        return this.theme.get("css")
    },
    renderHTML: function () {
        this.htmlElement = $('<div class="page" data-page-id="html">').appendTo(this.pagesElement), this.htmlElement.html(['<div class="page-header page-header-absolute">', "<h4>HTML</h4>", '<p>Markup is inserted outside of individual slides. This is great for things like a company logo which is fixed on top of the presentation. <a class="documentation-link" href="#">More info</a></p>', '<div class="documentation">', $("#html-panel-documentation").html(), "</div>", "</div>", '<div class="editor-wrapper">', '<div id="ace-html" class="editor"></div>', "</div>"].join(""));
        try {
            this.htmlEditor = ace.edit("ace-html"), this.htmlEditor.setTheme("ace/theme/monokai"), this.htmlEditor.setDisplayIndentGuides(!0), this.htmlEditor.setShowPrintMargin(!1), this.htmlEditor.getSession().setMode("ace/mode/html"), this.htmlEditor.env.document.setValue(this.theme.get("html") || ""), this.htmlEditor.env.editor.on("change", this.onHTMLInputChanged.bind(this))
        } catch (t) {
            console.log("An error occurred while initializing the Ace HTML editor.")
        }
    },
    renderJS: function () {
        this.jsElement = $('<div class="page" data-page-id="js">').appendTo(this.pagesElement), this.jsElement.html(['<div class="page-header page-header-absolute">', "<h4>JavaScript</h4>", "<p>Scripts will be executed when a deck that uses this theme is loaded. They are injected at the end of the document, after all other scripts.</p>", "</div>", '<div class="editor-wrapper">', '<div id="ace-js" class="editor"></div>', "</div>"].join(""));
        try {
            this.jsEditor = ace.edit("ace-js"), this.jsEditor.setTheme("ace/theme/monokai"), this.jsEditor.setDisplayIndentGuides(!0), this.jsEditor.setShowPrintMargin(!1), this.jsEditor.getSession().setMode("ace/mode/javascript"), this.jsEditor.env.document.setValue(this.theme.get("js") || ""), this.jsEditor.env.editor.on("change", this.onJSInputChanged.bind(this))
        } catch (t) {
            console.log("An error occurred while initializing the Ace JS editor.")
        }
    },
    renderPalette: function () {
        this.palette = new SL.views.themes.edit.pages.Palette(this.editor, this.theme), this.palette.appendTo(this.pagesElement), this.palette.changed.add(this.checkUnsavedChanges.bind(this))
    },
    renderSnippets: function () {
        this.snippets = new SL.views.themes.edit.pages.Snippets(this.editor, this.theme), this.snippets.appendTo(this.pagesElement), this.snippets.changed.add(this.checkUnsavedChanges.bind(this))
    },
    bind: function () {
        this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), $(document).on("keydown", this.onDocumentKeyDown), this.domElement.on("click", ".page-header .documentation-link", function (t) {
            t.preventDefault();
            var e = $(t.currentTarget), i = e.closest(".page-header");
            i.toggleClass("expanded"), e.text(i.hasClass("expanded") ? "Less info" : "More info")
        }.bind(this))
    },
    showPage: function (t) {
        this.domElement.find(".page").removeClass("past present future"), this.domElement.find('.page[data-page-id="' + t + '"]').addClass("present"), this.domElement.find('.page[data-page-id="' + t + '"]').prevAll().addClass("past"), this.domElement.find('.page[data-page-id="' + t + '"]').nextAll().addClass("future"), this.domElement.find(".panel-header .page-tab").removeClass("selected"), this.domElement.find('.panel-header .page-tab[data-page-id="' + t + '"]').addClass("selected"), "css" === t && this.cssEditor ? this.cssEditor.focus() : "html" === t && this.htmlEditor ? this.htmlEditor.focus() : "js" === t && this.jsEditor ? this.jsEditor.focus() : "palette" === t && this.palette && this.palette.refresh(), setTimeout(function () {
            this.domElement.find(".page").addClass("transition")
        }.bind(this), 1), this.resetScrollPosition()
    },
    resetScrollPosition: function () {
        this.domElement.scrollLeft(0).scrollTop(0), this.settingsElement && this.settingsElement.scrollLeft(0).scrollTop(0)
    },
    updatePreview: function (t) {
        "number" != typeof t && (t = 250), clearTimeout(this.previewTimeout), this.previewTimeout = setTimeout(function () {
            this.paintPreview()
        }.bind(this), t)
    },
    paintPreview: function () {
        this.preprocess(function () {
            this.editor.refreshPreview(this.theme)
        }.bind(this), function () {
            this.editor.refreshPreview(this.theme)
        }.bind(this))
    },
    preprocess: function (t, e) {
        this.theme.set("name", this.domElement.find("#theme-name").val()), this.cssEditor && this.setCSSOutput(this.cssEditor.env.document.getValue()), this.htmlEditor && this.theme.set("html", this.htmlEditor.env.document.getValue()), this.jsEditor && this.theme.set("js", this.jsEditor.env.document.getValue()), this.preprocessCSS(t, e), this.checkUnsavedChanges()
    },
    preprocessCSS: function (t, e) {
        this.cssParser || (this.cssParser = new less.Parser);
        var i = this.cssEditor.env.document.getValue();
        i ? this.cssParser.parse(".reveal { " + i + " }", function (n, s) {
            if (n)this.cssErrorElement.addClass("visible"), this.cssErrorElement.html(n.message), SL.util.callback(e, n); else {
                this.cssErrorElement.removeClass("visible");
                try {
                    var o = s.toCSS()
                } catch (a) {
                    console.log(a)
                }
                if (o) {
                    var r = "";
                    o = o.replace(/@import url\(["'\s]*(http:|https:)?\/\/(.*)\);?/gi, function (t) {
                        return r += t + "\n", ""
                    }), o = r + o, this.setCSSInput(i), this.setCSSOutput(o), SL.util.callback(t)
                } else SL.util.callback(e)
            }
            this.checkUnsavedChanges()
        }.bind(this)) : (this.setCSSInput(""), this.setCSSOutput(""), SL.util.callback(t))
    },
    hasUnsavedChanges: function () {
        return this.theme && this.savedJSON !== JSON.stringify(this.theme.toJSON())
    },
    checkUnsavedChanges: function () {
        this.domElement.toggleClass("has-unsaved-changes", this.hasUnsavedChanges())
    },
    save: function (t) {
        var e = this.saveButton.data("ladda");
        e && e.start(), this.preprocess(function () {
            this.editor.saveTheme(this.theme, function () {
                e && e.stop(), this.savedJSON = JSON.stringify(this.theme.toJSON()), this.checkUnsavedChanges(), SL.util.callback(t)
            }.bind(this), function () {
                e && e.stop()
            }.bind(this))
        }.bind(this), function () {
            SL.notify("Please fix all CSS errors before saving", "negative"), e && e.stop()
        }.bind(this))
    },
    close: function (t) {
        this.hasUnsavedChanges() ? SL.prompt({
            anchor: this.cancelButton,
            title: SL.locale.get("WARN_UNSAVED_CHANGES"),
            alignment: "b",
            type: "select",
            data: [{html: "<h3>Cancel</h3>"}, {
                html: "<h3>Discard</h3>", className: "divider", callback: function () {
                    this.destroy(), SL.util.callback(t)
                }.bind(this)
            }, {
                html: "<h3>Save</h3>", className: "positive", selected: !0, callback: function () {
                    SL.util.callback(t), this.save(this.destroy.bind(this))
                }.bind(this)
            }]
        }) : (this.destroy(), SL.util.callback(t))
    },
    getTheme: function () {
        return this.theme
    },
    onCSSInputChanged: function () {
        this.syncCSS(), this.updatePreview()
    },
    onHTMLInputChanged: function () {
        this.updatePreview()
    },
    onJSInputChanged: function () {
        this.updatePreview(1e3)
    },
    onNameInputChanged: function () {
        this.theme.set("name", this.domElement.find("#theme-name").val()), this.checkUnsavedChanges()
    },
    onSaveClicked: function () {
        this.save()
    },
    onCancelClicked: function () {
        this.close()
    },
    onDocumentKeyDown: function (t) {
        (t.metaKey || t.ctrlKey) && 83 === t.keyCode ? (this.hasUnsavedChanges() && this.save(), t.preventDefault()) : 27 === t.keyCode && this.close()
    },
    destroy: function () {
        this.isDestroyed || (this.isDestroyed = !0, clearTimeout(this.previewTimeout), this.destroyed.dispatch(), this.destroyed.dispose(), $(document).off("keydown", this.onDocumentKeyDown), setTimeout(function () {
            this.cssEditor && (this.cssEditor.destroy(), this.cssEditor = null), this.htmlEditor && (this.htmlEditor.destroy(), this.htmlEditor = null), this.jsEditor && (this.jsEditor.destroy(), this.jsEditor = null), this.palette && (this.palette.destroy(), this.palette = null), this.snippets && (this.snippets.destroy(), this.snippets = null), this.themeOptions && this.themeOptions.destroy(), this.preloaderElement && this.preloaderElement.remove(), this.domElement && this.domElement.remove()
        }.bind(this), 500))
    }
}),SL("views.themes.edit").GlobalCSSPanel = SL.views.themes.edit.Panel.extend({
    PAGES: [{
        name: "Global CSS",
        id: "css",
        factory: "renderCSS"
    }], init: function (t, e) {
        this.team = e, this.team.get("global_css_input") || this.team.set("global_css_input", ""), this.team.get("global_css_output") || this.team.set("global_css_output", ""), this.data = {
            global_css_input: this.team.get("global_css_input"),
            global_css_output: this.team.get("global_css_output")
        }, this._super(t), this.tabsElement.hide()
    }, load: function () {
        this.afterLoad()
    }, renderCSS: function () {
        this._super("Global CSS", "Add custom CSS or LESS styles to all decks created by your team. These styles are injected before any theme-specific CSS. ")
    }, syncCSS: function () {
    }, setCSSInput: function (t) {
        this.data.global_css_input = t
    }, getCSSInput: function () {
        return this.data.global_css_input
    }, setCSSOutput: function (t) {
        this.data.global_css_output = t
    }, getCSSOutput: function () {
        return this.data.global_css_output
    }, paintPreview: function () {
        this.preprocess(function () {
            this.editor.refreshPreview(this.theme, this.getCSSOutput())
        }.bind(this), function () {
            this.editor.refreshPreview(this.theme, this.getCSSOutput())
        }.bind(this))
    }, preprocess: function (t, e) {
        this.setCSSOutput(this.cssEditor.env.document.getValue()), this.preprocessCSS(t, e), this.checkUnsavedChanges()
    }, hasUnsavedChanges: function () {
        return this.team.get("global_css_input") !== this.data.global_css_input
    }, save: function (t) {
        var e = this.data.global_css_input, i = this.data.global_css_output, n = this.saveButton.data("ladda");
        n && n.start(), this.preprocess(function () {
            $.ajax({
                url: SL.config.AJAX_UPDATE_TEAM,
                type: "PUT",
                data: {team: {global_css_input: e, global_css_output: i}},
                context: this
            }).done(function () {
                this.team.set("global_css_input", e), this.team.set("global_css_output", i), this.checkUnsavedChanges(), SL.util.callback(t)
            }).fail(function () {
                SL.notify("Failed to save, please try again", "negative")
            }).always(function () {
                n && n.stop()
            })
        }.bind(this), function () {
            SL.notify("Please fix all CSS errors before saving", "negative"), n && n.stop()
        }.bind(this))
    }
}),SL("views.themes.edit.pages").Palette = Class.extend({
    init: function (t, e) {
        this.editor = t, this.theme = e, this.changed = new signals.Signal, this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this), this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this), this.onSaveButtonClicked = this.onSaveButtonClicked.bind(this), this.onListItemDelete = this.onListItemDelete.bind(this), this.onListItemMouseDown = this.onListItemMouseDown.bind(this), this.render(), this.bind()
    }, render: function () {
        this.domElement = $('<div class="page" data-page-id="palette">'), this.domElement.html(['<div class="page-header">', "<h4>Color Palette</h4>", '<p>Replace the default color options that we offer throughout the deck editor with your own custom color palette. <a class="documentation-link" href="#">More info</a></p>', '<div class="documentation">', $("#palette-panel-documentation").html(), "</div>", "</div>", '<div class="page-body">', '<div class="palette-picker">', '<div class="palette-picker-api"></div>', "</div>", '<ul class="palette-list"></ul>', "</div>"].join("")), this.innerElement = this.domElement.find(".page-body"), this.pickerElement = this.domElement.find(".palette-picker"), this.pickerAPIElement = this.domElement.find(".palette-picker-api"), this.listElement = this.domElement.find(".palette-list"), this.renderPicker(), this.renderList(), this.checkIfEmpty()
    }, renderPicker: function () {
        this.pickerAPIElement.spectrum({
            flat: !0,
            showInput: !0,
            showButtons: !1,
            showInitial: !1,
            showPalette: !1,
            showSelectionPalette: !1,
            preferredFormat: "hex",
            className: "palette-picker-spectrum",
            move: function (t) {
                this.setPreviewColor(t.toHexString())
            }.bind(this),
            change: function (t) {
                this.setPreviewColor(t.toHexString())
            }.bind(this)
        }), this.domElement.find(".palette-picker-spectrum .sp-input-container").append('<div class="palette-picker-save-button"><span class="icon i-plus"></span>Save color</div>'), this.pickerSaveButton = this.domElement.find(".palette-picker-save-button")
    }, renderList: function () {
        this.listElement.empty(), this.theme.get("palette").forEach(this.renderListItem.bind(this))
    }, renderListItem: function (t) {
        var e = $('<li class="palette-list-item sl-form">');
        return e.data("color", t), e.html(['<div class="palette-list-item-color"></div>', '<div class="palette-list-item-label">' + t + "</div>", '<div class="palette-list-item-delete"><span class="icon i-trash-stroke"></span></div>'].join("")), e.appendTo(this.listElement), e.toggleClass("is-light", tinycolor(t).isLight()), e.find(".palette-list-item-color").css("background-color", t), e.find(".palette-list-item-delete").on("click", this.onListItemDelete), e.on("mousedown", this.onListItemMouseDown), e
    }, bind: function () {
        this.pickerSaveButton.on("click", this.onSaveButtonClicked.bind(this))
    }, appendTo: function (t) {
        this.domElement.appendTo(t)
    }, setPreviewColor: function (t) {
        this.pickerSaveButton.css({color: tinycolor(t).isLight() ? "#222222" : "#ffffff", backgroundColor: t})
    }, checkIfEmpty: function () {
        0 === this.listElement.find(".palette-list-item").length ? this.listElement.append('<span class="palette-list-empty">No custom colors have been added to the palette. Click "Save color" to add one now.</span>') : this.listElement.find(".palette-list-empty").remove()
    }, refresh: function () {
        this.pickerAPIElement.spectrum("set", "#000000"), this.pickerAPIElement.spectrum("reflow"), this.setPreviewColor("#000000")
    }, persist: function () {
        var t = this.listElement.find(".palette-list-item:not(.element)").map(function () {
            return $(this).data("color")
        }).toArray();
        this.theme.set("palette", t), this.checkIfEmpty(), this.changed.dispatch()
    }, destroy: function () {
        this.changed.dispose(), this.listElement.find(".palette-list-item").off(), this.editor = null, this.theme = null
    }, onSaveButtonClicked: function () {
        var t = this.renderListItem(this.pickerAPIElement.spectrum("get"));
        this.listElement.prepend(t), this.persist()
    }, onListItemDelete: function (t) {
        var e = $(t.target).closest(".palette-list-item");
        e.length ? (e.remove(), this.persist()) : SL.notify("An error occured while deleting this color")
    }, onListItemMouseDown: function (t) {
        var e = $(t.currentTarget);
        e.length && e.is(".palette-list-item") && 0 === $(t.target).closest(".palette-list-item-delete").length && (this.dragTarget = e, this.dragGhost = e.clone().appendTo(this.listElement), this.dragGhost.addClass("drag-ghost"), this.dragTarget.addClass("drag-target"), this.dragOffsetX = t.clientX - this.dragTarget.offset().left, this.dragOffsetY = t.clientY - this.dragTarget.offset().top, this.listOffsetX = this.listElement.offset().left, this.listOffsetY = this.listElement.offset().top, this.listWidth = this.listElement.width(), this.listHeight = this.listElement.height(), this.listItemSize = this.dragTarget.outerHeight(), this.listItemCols = Math.floor(this.listWidth / this.listItemSize), $(document).on("mousemove", this.onDocumentMouseMove), $(document).on("mouseup", this.onDocumentMouseUp), this.onDocumentMouseMove(t))
    }, onDocumentMouseMove: function (t) {
        t.preventDefault();
        var e = this.listElement.find(".palette-list-item"), i = t.clientX - this.listOffsetX - this.dragOffsetX, n = t.clientY - this.listOffsetY - this.dragOffsetY;
        i = Math.max(Math.min(i, this.listWidth - this.listItemSize), 0), n = Math.max(Math.min(n, this.listHeight - this.listItemSize), 0), this.dragGhost.css({
            left: i,
            top: n
        });
        var s = Math.round(i / this.listItemSize), o = Math.round(n / this.listItemSize);
        s = Math.max(Math.min(s, this.listItemCols), 0), o = Math.max(Math.min(o, e.length), 0);
        var a = o * this.listItemCols + s, r = $(e[a]);
        r.is(this.dragTarget) || (this.dragTarget.index() > a ? r.before(this.dragTarget) : r.after(this.dragTarget))
    }, onDocumentMouseUp: function () {
        this.dragTarget.removeClass("drag-target"), this.dragGhost.remove(), $(document).off("mousemove", this.onDocumentMouseMove), $(document).off("mouseup", this.onDocumentMouseUp), this.persist()
    }
}),SL("views.themes.edit.pages").Snippets = Class.extend({
    init: function (t, e) {
        this.editor = t, this.theme = e, this.changed = new signals.Signal, this.render(), this.bind(), this.syncMoveButtons()
    }, render: function () {
        this.domElement = $('<div class="page" data-page-id="snippets">'), this.domElement.html(['<div class="page-header">', "<h4>Snippets</h4>", '<p>Snippets are small HTML templates that your team members can use as building blocks when creating decks. These templates can contain placeholder variables that are filled out at the time of insertion. <a class="documentation-link" href="#">More info</a></p>', '<div class="documentation">', $("#snippet-panel-documentation").html(), "</div>", "</div>", '<div class="page-body">', '<ul class="snippet-list"></ul>', '<ul class="snippet-controls snippet-list-item sl-form">', '<div class="add-button-wrapper">', '<button class="button l add-button">Add Snippet <span class="icon i-plus"></span></button>', "</div>", '<div class="unit text">', "<label>Title</label>", '<input class="title-value" maxlength="200" type="text" readonly>', "</div>", '<div class="unit text">', "<label>Template</label>", '<textarea class="template-value" rows="4" readonly></textarea>', "</div>", "</ul>", "</div>"].join("")), this.innerElement = this.domElement.find(".page-body"), this.listElement = this.domElement.find(".snippet-list"), this.controlsElement = this.domElement.find(".snippet-controls"), this.addButton = this.domElement.find(".snippet-controls .add-button-wrapper"), this.renderList()
    }, renderList: function () {
        this.listElement.empty(), this.theme.get("snippets").forEach(this.renderListItem.bind(this))
    }, renderListItem: function (t) {
        var e = $('<li class="snippet-list-item sl-form">');
        return e.html(['<div class="unit text">', "<label>Title</label>", '<input class="title-value" maxlength="200" value="' + t.get("title") + '" type="text" spellcheck="false">', "</div>", '<div class="unit text">', "<label>Template</label>", '<textarea class="template-value" rows="4" spellcheck="false">' + t.get("template") + "</textarea>", '<div class="status" data-tooltip="" data-tooltip-maxwidth="400" data-tooltip-align="left"><span class="icon i-info"></span></div>', "</div>", '<div class="snippet-list-item-footer">', '<button class="button outline delete-button" data-tooltip="Delete" data-tooltip-delay="1000"><snap class="icon i-trash-stroke"></snap></button>', '<button class="button outline preview-button" data-tooltip="Preview" data-tooltip-delay="1000"><snap class="icon i-eye"></snap></button>', '<button class="button outline move-up-button" data-tooltip="Move Up" data-tooltip-delay="1000"><snap class="icon i-arrow-up"></snap></button>', '<button class="button outline move-down-button" data-tooltip="Move Down" data-tooltip-delay="1000"><snap class="icon i-arrow-down"></snap></button>', "</div>"].join("")), e.appendTo(this.listElement), e.data("model", t), e.find("input, textarea").on("input", this.onSnippetChange.bind(this)), e.find("input, textarea").on("focus", this.onSnippetFocused.bind(this)), e.find(".delete-button").on("click", this.onSnippetDelete.bind(this)), e.find(".preview-button").on("click", this.onSnippetFocused.bind(this)), e.find(".move-up-button").on("click", this.onSnippetMoveUp.bind(this)), e.find(".move-down-button").on("click", this.onSnippetMoveDown.bind(this)), this.validateSnippet(e), e
    }, bind: function () {
        this.addButton.on("click", this.addSnippet.bind(this))
    }, appendTo: function (t) {
        this.domElement.appendTo(t), this.listElement.find(".snippet-list-item").each(function (t, e) {
            this.layoutSnippet($(e))
        }.bind(this))
    }, addSnippet: function () {
        this.theme.get("snippets").create().then(function (t) {
            var e = this.renderListItem(t);
            e.data("model", t), e.find("input").first().focus(), setTimeout(function () {
                var t = this.domElement.prop("scrollHeight");
                t -= this.domElement.outerHeight(!0), t -= this.controlsElement.outerHeight(!0), this.domElement.scrollTop(t)
            }.bind(this), 1), this.changed.dispatch(), this.syncMoveButtons()
        }.bind(this))
    }, layoutSnippet: function (t) {
        var e = t.find(".template-value");
        e.attr("rows", 4);
        var i = parseFloat(e.css("line-height")), n = e.prop("scrollHeight"), s = e.prop("clientHeight");
        n > s && e.attr("rows", Math.min(Math.ceil(n / i), 10))
    }, validateSnippet: function (t) {
        var e = t.data("model"), i = [], n = [], s = e.templateHasVariables(), o = e.templateHasSelection();
        if (s && o)n.push("Templates can not mix variables and selection tags."); else if (s) {
            var a = e.getTemplateVariables();
            i.push("Found " + a.length + " variables:"), a.forEach(function (t) {
                i.push(t.defaultValue ? "- " + t.label + " (default: " + t.defaultValue + ")" : "- " + t.label)
            })
        }
        n.length ? t.find(".status").addClass("negative").show().attr("data-tooltip", n.join("<br>")) : i.length ? t.find(".status").removeClass("negative").show().attr("data-tooltip", i.join("<br>")) : t.find(".status").removeClass("negative").hide()
    }, previewSnippet: function (t) {
        var e = this.editor.getPreviewWindow(), i = e.$("#snippet-slide");
        0 === i.length && (i = $('<section id="snippet-slide">').appendTo(e.$(".reveal .slides"))), i.html(['<div class="sl-block" data-block-type="html" style="width: 100%; left: 0; top: 0; height: auto;">', '<div class="sl-block-content">', t.templatize(t.getTemplateVariables()), "</div>", "</div>"].join("")), e.SL.util.skipCSSTransitions(), e.Reveal.sync(), e.Reveal.slide(i.index())
    }, syncSnippetOrder: function () {
        var t = this.listElement.find(".snippet-list-item"), e = this.theme.get("snippets");
        t.sort(function (t, i) {
            var n = e.find($(t).data("model")), s = e.find($(i).data("model"));
            return n - s
        }.bind(this)), t.each(function (t, e) {
            this.listElement.append(e)
        }.bind(this)), this.syncMoveButtons()
    }, syncMoveButtons: function () {
        this.listElement.find(".snippet-list-item").each(function (t, e) {
            e = $(e), e.find(".move-up-button").toggleClass("disabled", e.is(":first-child")), e.find(".move-down-button").toggleClass("disabled", e.is(":last-child"))
        })
    }, destroy: function () {
        this.changed.dispose(), this.listElement.find(".snippet-list-item").off().removeData("model");
        var t = this.editor.getPreviewWindow();
        t.$("#snippet-slide").remove(), t.Reveal.sync(), t.Reveal.slide(0), this.editor = null, this.theme = null
    }, onSnippetFocused: function (t) {
        var e = $(t.target).closest(".snippet-list-item");
        e.length && this.previewSnippet(e.data("model"))
    }, onSnippetChange: function (t) {
        var e = $(t.target).closest(".snippet-list-item");
        if (e.length) {
            var i = e.find(".title-value").val(), n = e.find(".template-value").val(), s = SL.util.html.findScriptTags(n);
            if (s.length > 0)return SL.notify("Scripts are not allowed. Please remove all script tags for this snippet to save.", "negative"), !1;
            var o = e.data("model");
            o.set("title", i), o.set("template", n), this.layoutSnippet(e), this.validateSnippet(e), this.previewSnippet(o), this.changed.dispatch()
        }
    }, onSnippetDelete: function (t) {
        var e = $(t.target).closest(".snippet-list-item");
        if (e.length) {
            var i = e.data("model");
            i ? SL.prompt({
                anchor: $(t.currentTarget),
                title: SL.locale.get("THEME_SNIPPET_DELETE_CONFIRM"),
                type: "select",
                data: [{html: "<h3>Cancel</h3>"}, {
                    html: "<h3>Remove</h3>",
                    selected: !0,
                    className: "negative",
                    callback: function () {
                        SL.util.anim.collapseListItem(e, function () {
                            e.remove(), this.syncMoveButtons()
                        }.bind(this));
                        var t = this.theme.get("snippets");
                        t.remove(e.data("model")), this.changed.dispatch()
                    }.bind(this)
                }]
            }) : SL.notify("An error occured while deleting this snippet")
        } else SL.notify("An error occured while deleting this snippet")
    }, onSnippetMoveUp: function (t) {
        var e = $(t.target).closest(".snippet-list-item");
        if (e.length) {
            var i = e.data("model");
            if (i) {
                var n = this.theme.get("snippets");
                n.shiftLeft(n.find(i)), this.changed.dispatch(), this.syncSnippetOrder()
            }
        }
    }, onSnippetMoveDown: function (t) {
        var e = $(t.target).closest(".snippet-list-item");
        if (e.length) {
            var i = e.data("model");
            if (i) {
                var n = this.theme.get("snippets");
                n.shiftRight(n.find(i)), this.changed.dispatch(), this.syncSnippetOrder()
            }
        }
    }
}),SL("views.themes").Preview = SL.views.Base.extend({
    init: function () {
        this._super(), SL.util.setupReveal({openLinksInTabs: !0}), window.parent !== window.self && window.parent.postMessage({type: "theme-preview-ready"}, window.location.origin)
    }
}),SL("views.users").Show = SL.views.Base.extend({
    init: function () {
        this._super(), SL.util.device.IS_PHONE && $("html").addClass("is-mobile-phone"), this.setupAnnouncement(), this.setupTabs(), this.setupFilters(), this.setupDecks(), this.restoreFilters(), $(".decks .deck .ladda-button").each(function (t, e) {
            $(e).data("ladda", Ladda.create(e))
        }), $(window).on("scroll", this.onWindowScroll.bind(this))
    }, setupAnnouncement: function () {
        if (Modernizr.localstorage && SL.current_user.isEnterpriseManager() && SL.current_team && SL.current_team.get("beta_new_editor") === !1) {
            var t = "slides-team-has-seen-new-editor-announcement";
            if (!localStorage.getItem(t)) {
                var e = $(['<section class="announcement">', "<h3>New Editor</h3>", '<p>We have released a new and greatly improved presentation editor. Have a look at the <a href="http://slides.com/news/new-editor/" target="_blank">demo presentation</a> for a quick overview.</p>', "<p>To enable the new editor, please visit the team settings page.</p>", '<a class="button positive" href="/edit#beta-features">Team settings</a>', '<a class="button grey dismiss-button">Dismiss</a>', "</section>"].join(""));
                e.find(".dismiss-button").on("click", function () {
                    e.remove(), localStorage.setItem(t, "completed")
                }), $(".main section").first().before(e)
            }
        }
    }, setupTabs: function () {
        $(".deck-filters-tab").on("vclick", function (t) {
            this.selectTab($(t.currentTarget).attr("data-tab-id"))
        }.bind(this)), this.tabValueDefault = $(".deck-filters-tab").first().attr("data-tab-id")
    }, setupFilters: function () {
        this.onSortOptionSelected = this.onSortOptionSelected.bind(this), this.sortDecks = this.sortDecks.bind(this), this.searchDecks = $.throttle(this.searchDecks.bind(this), 300), this.saveFilters = $.throttle(this.saveFilters.bind(this), 1e3), this.setupSortOptions(), $(".deck-filters-sort").on("vclick", function (t) {
            return this.sortOptions.forEach(function (t) {
                t.selected = t.value === this.sortValue
            }.bind(this)), SL.prompt({
                anchor: $(t.currentTarget),
                title: "Sort decks",
                type: "list",
                alignment: "b",
                data: this.sortOptions,
                multiselect: !1,
                optional: !0
            }), !1
        }.bind(this)), $(".deck-filters-search").on("vclick", function (t) {
            $(this).focus(), t.preventDefault(), SL.analytics.track("User.show: Search")
        }), $(".deck-filters-search").on("input", function (t) {
            this.searchDecks($(t.currentTarget).val())
        }.bind(this)), $(".deck-filters-search-clear").on("vclick", function (t) {
            this.searchDecks(""), $(".deck-filters-search").val(""), t.preventDefault()
        }.bind(this))
    }, setupSortOptions: function () {
        this.sortOptions = [], this.sortOptions.push({
            value: "created",
            title: "Newest first",
            callback: this.onSortOptionSelected,
            method: function (t, e) {
                return moment(this.getDeckData(e).created_at).unix() - moment(this.getDeckData(t).created_at).unix()
            }.bind(this)
        }), this.sortOptions.push({
            value: "created-reverse",
            title: "Oldest first",
            callback: this.onSortOptionSelected,
            method: function (t, e) {
                return moment(this.getDeckData(t).created_at).unix() - moment(this.getDeckData(e).created_at).unix()
            }.bind(this)
        }), $('.deck[data-visibility="all"]').length && this.sortOptions.push({
            value: "views",
            title: "Most views",
            callback: this.onSortOptionSelected,
            method: function (t, e) {
                var i = this.getDeckData(t), n = this.getDeckData(e), s = i.visibility === SL.models.Deck.VISIBILITY_ALL ? i.view_count : -1, o = n.visibility === SL.models.Deck.VISIBILITY_ALL ? n.view_count : -1;
                return o - s
            }.bind(this)
        }), this.sortOptions.push({
            value: "az",
            title: "Alphabetically",
            callback: this.onSortOptionSelected,
            method: function (t, e) {
                return t = this.getDeckData(t).title.trim().toLowerCase(), e = this.getDeckData(e).title.trim().toLowerCase(), e > t ? -1 : t > e ? 1 : 0
            }.bind(this)
        }), this.sortValueDefault = this.sortOptions[0].value, this.sortValue = this.sortValueDefault
    }, setupDecks: function () {
        $(".decks .deck").each(function (t, e) {
            e = $(e), e.find(".edit").on("vclick", this.onEditClicked.bind(this, e)), e.find(".share").on("vclick", this.onShareClicked.bind(this, e)), e.find(".fork").on("vclick", this.onForkClicked.bind(this, e)), e.find(".clone").on("vclick", this.onCloneClicked.bind(this, e)), e.find(".delete").on("vclick", this.onDeleteClicked.bind(this, e)), e.find(".deck-lock-icon").on("vclick", this.onVisibilityClicked.bind(this, e)), e.find(".visibility").on("vclick", this.onVisibilityClicked.bind(this, e)), e.hasClass("is-owner") && (e.find(".deck-title-value").attr({
                "data-tooltip": "Click to edit",
                "data-tooltip-alignment": "l",
                "data-tooltip-delay": 200
            }), e.find(".deck-title-value").on("click", this.onDeckTitleClicked.bind(this, e)), e.find(".deck-description-value").attr({
                "data-tooltip": "Click to edit",
                "data-tooltip-alignment": "l",
                "data-tooltip-delay": 200
            }), e.find(".deck-description-value").on("click", this.onDeckDescriptionClicked.bind(this, e)))
        }.bind(this)), this.loadImagesInView(), this.loadImagesInView = $.throttle(this.loadImagesInView, 200)
    }, loadImagesInView: function () {
        var t = 300, e = -t, i = window.innerHeight + t;
        $(".decks .deck [data-image-url]").each(function (t, n) {
            var s = n.getBoundingClientRect();
            s.bottom > e && s.top < i && (n.style.backgroundImage = 'url("' + n.getAttribute("data-image-url") + '")', n.removeAttribute("data-image-url"))
        }.bind(this))
    }, flashDecks: function () {
        clearTimeout(this.flashDecksTimeout), $(".decks").addClass("flash"), this.flashDecksTimeout = setTimeout(function () {
            $(".decks").removeClass("flash")
        }, 1e3)
    }, selectTab: function (t) {
        $(".deck-filters-tab").removeClass("selected"), $(".deck-filters-tab[data-tab-id=" + t + "]").addClass("selected"), $(".decks").removeClass("visible"), $(".decks[data-tab-id=" + t + "]").addClass("visible"), this.tabValue = t, this.saveFilters()
    }, sortDecks: function (t) {
        var e = this.getSortOptionByValue(t);
        e && (this.sortValue = t, $(".deck-filters-sort").text(e.title), $(".decks").each(function () {
            var t = $(this).find(".deck");
            t.sort(e.method), t.detach().appendTo(this)
        }), this.saveFilters(), this.loadImagesInView(), this.flashDecks())
    }, searchDecks: function (t) {
        if ($(".deck-placeholder").remove(), $(".decks").unhighlight(), t = (t || "").trim(), "" === t)$(".decks .deck").removeClass("hidden"); else {
            var e = new RegExp(t, "i");
            $(".decks .deck").each(function (i, n) {
                n = $(n);
                var s = n.find(".deck-title-value").text(), o = n.find(".deck-description-value").text();
                n.toggleClass("hidden", !e.test(s) && !e.test(o)), t.length > 1 && n.find(".deck-title-value, .deck-description-value").highlight(t)
            }.bind(this)), $(".decks").each(function () {
                if (0 === $(this).find(".deck:not(.hidden)").length) {
                    var e = $('<div class="deck-placeholder"><p></p></div>');
                    e.find("p").text('No results matching "' + t + '"'), e.appendTo(this)
                }
            })
        }
        this.searchValue = t, this.saveFilters(), this.loadImagesInView()
    }, saveFilters: function () {
        if (Modernizr.history) {
            var t = [];
            this.sortValue !== this.sortValueDefault && t.push("sort=" + escape(this.sortValue)), this.searchValue && "" !== this.searchValue && t.push("search=" + escape(this.searchValue)), this.tabValue && "" !== this.tabValue && this.tabValue !== this.tabValueDefault && t.push("tab=" + escape(this.tabValue)), t.length ? window.history.replaceState(null, null, window.location.pathname + "?" + t.join("&")) : window.history.replaceState(null, null, window.location.pathname)
        }
    }, restoreFilters: function () {
        var t = SL.util.getQuery();
        t.search && ($(".deck-filters-search").val(t.search), this.searchDecks(t.search)), t.sort && this.sortDecks(t.sort), t.tab && this.selectTab(t.tab)
    }, getSortOptionByValue: function (t) {
        return this.sortOptions.filter(function (e) {
            return e.value === t
        }).shift()
    }, getDeckData: function (t) {
        return t = $(t), {
            user: {id: parseInt(t.attr("data-user-id"), 10), username: t.attr("data-username")},
            id: t.attr("data-id"),
            slug: t.attr("data-slug"),
            title: t.find(".deck-title-value").text(),
            view_count: t.attr("data-view-count") || 0,
            created_at: t.attr("data-created-at"),
            updated_at: t.attr("data-updated-at"),
            visibility: t.attr("data-visibility")
        }
    }, saveVisibility: function (t, e) {
        var i = this.getDeckData(t), n = {
            type: "POST",
            url: SL.config.AJAX_PUBLISH_DECK(i.id),
            context: this,
            data: {visibility: e}
        }, s = t.find(".visibility").data("ladda");
        s && s.start(), $.ajax(n).done(function (e) {
            e.deck.visibility === SL.models.Deck.VISIBILITY_SELF ? SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_SELF")) : e.deck.visibility === SL.models.Deck.VISIBILITY_TEAM ? SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_TEAM")) : e.deck.visibility === SL.models.Deck.VISIBILITY_ALL && SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_ALL")), "string" == typeof e.deck.slug && t.attr("data-slug", e.deck.slug), "string" == typeof e.deck.visibility && t.attr("data-visibility", e.deck.visibility)
        }).fail(function () {
            SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_ERROR"), "negative")
        }).always(function () {
            s && s.stop(), t.removeClass("hover")
        })
    }, cloneDeck: function (t, e) {
        var i = this.getDeckData(t);
        t.addClass("hover");
        var n = t.find(".clone.ladda-button").data("ladda");
        n && n.start(), $.ajax({type: "POST", url: SL.config.AJAX_FORK_DECK(i.id), context: this}).done(function () {
            SL.util.callback(e)
        }).fail(function () {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), n && n.stop(), t.removeClass("hover")
        })
    }, onEditClicked: function (t, e) {
        e.preventDefault(), window.location = t.attr("data-url") + "/edit"
    }, onDeleteClicked: function (t, e) {
        e.preventDefault(), t.addClass("hover");
        var i = this.getDeckData(t), n = SL.prompt({
            anchor: $(e.currentTarget),
            title: SL.locale.get("DECK_DELETE_CONFIRM", {title: SL.util.escapeHTMLEntities(i.title)}),
            type: "select",
            data: [{
                html: "<h3>Cancel</h3>", callback: function () {
                    t.removeClass("hover")
                }.bind(this)
            }, {
                html: "<h3>Delete</h3>", selected: !0, className: "negative", callback: function () {
                    t.find(".deck-metadata .status").text("Deleting...");
                    var e = t.find(".delete.ladda-button").data("ladda");
                    e && e.start(), $.ajax({
                        type: "DELETE",
                        url: SL.config.AJAX_UPDATE_DECK(i.id),
                        data: {},
                        context: this
                    }).done(function () {
                        SL.util.anim.collapseListItem(t, function () {
                            e && e.stop(), t.remove()
                        }.bind(this)), SL.notify(SL.locale.get("DECK_DELETE_SUCCESS"))
                    }).fail(function () {
                        SL.notify(SL.locale.get("DECK_DELETE_ERROR"), "negative"), e && e.stop()
                    }).always(function () {
                        t.removeClass("hover")
                    })
                }.bind(this)
            }]
        });
        n.canceled.add(function () {
            t.removeClass("hover")
        }), SL.analytics.track("User.show: Delete deck")
    }, onVisibilityClicked: function (t, e) {
        e.preventDefault(), t.addClass("hover");
        var i = this.getDeckData(t), n = [];
        n.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_SELF"),
            selected: i.visibility === SL.models.Deck.VISIBILITY_SELF,
            callback: function () {
                this.saveVisibility(t, SL.models.Deck.VISIBILITY_SELF), SL.analytics.track("User.show: Visibility changed", "self")
            }.bind(this)
        }), SL.current_user.isEnterprise() && n.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_TEAM"),
            selected: i.visibility === SL.models.Deck.VISIBILITY_TEAM,
            className: "divider",
            callback: function () {
                this.saveVisibility(t, SL.models.Deck.VISIBILITY_TEAM), SL.analytics.track("User.show: Visibility changed", "team")
            }.bind(this)
        }), n.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_ALL"),
            selected: i.visibility === SL.models.Deck.VISIBILITY_ALL,
            callback: function () {
                this.saveVisibility(t, SL.models.Deck.VISIBILITY_ALL), SL.analytics.track("User.show: Visibility changed", "all")
            }.bind(this)
        });
        var s = SL.prompt({anchor: $(e.currentTarget), type: "select", className: "sl-visibility-prompt", data: n});
        s.canceled.add(function () {
            t.removeClass("hover")
        }), SL.analytics.track("User.show: Visibility menu opened")
    }, onShareClicked: function (t, e) {
        e.preventDefault();
        var i = this.getDeckData(t);
        return "string" != typeof i.user.username || "string" != typeof i.slug && "string" != typeof i.id ? SL.notify(SL.locale.get("GENERIC_ERROR"), "negative") : SL.popup.open(SL.components.decksharer.DeckSharer, {deck: new SL.models.Deck(i)}), !1
    }, onCloneClicked: function (t, e) {
        return e.preventDefault(), this.cloneDeck(t, function () {
            window.location.reload()
        }), !1
    }, onForkClicked: function (t, e) {
        return e.preventDefault(), this.cloneDeck(t, function () {
            window.location = SL.current_user.getProfileURL()
        }), !1
    }, onDeckTitleClicked: function (t) {
        var e = t.find(".deck-title-value"), i = SL.prompt({
            anchor: e,
            title: "Edit deck title",
            type: "input",
            confirmLabel: "Save",
            data: {
                value: e.text(),
                placeholder: "Deck title...",
                maxlength: SL.config.DECK_TITLE_MAXLENGTH,
                width: 400,
                confirmBeforeDiscard: !0
            }
        });
        return i.confirmed.add(function (i) {
            i && "" !== i.trim() ? (e.text(i), $.ajax({
                url: SL.config.AJAX_UPDATE_DECK(this.getDeckData(t).id),
                type: "PUT",
                context: this,
                data: {deck: {title: i}}
            }).fail(function () {
                SL.notify("An error occured while saving your deck title", "negative")
            })) : SL.notify("Title can't be empty", "negative")
        }.bind(this)), !1
    }, onDeckDescriptionClicked: function (t) {
        var e = t.find(".deck-description-value"), i = SL.prompt({
            anchor: e,
            title: "Edit deck description",
            type: "input",
            confirmLabel: "Save",
            data: {
                value: e.text(),
                placeholder: "A short description of this deck...",
                multiline: !0,
                confirmBeforeDiscard: !0
            }
        });
        return i.confirmed.add(function (i) {
            e.text(i), $.ajax({
                url: SL.config.AJAX_UPDATE_DECK(this.getDeckData(t).id),
                type: "PUT",
                context: this,
                data: {deck: {description: i}}
            }).fail(function () {
                SL.notify("An error occured while saving your deck description", "negative")
            })
        }.bind(this)), !1
    }, onWindowScroll: function () {
        this.loadImagesInView()
    }, onSortOptionSelected: function (t) {
        SL.analytics.track("User.show: Sort", t), this.sortDecks(t)
    }
});