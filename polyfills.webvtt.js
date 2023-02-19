/*!
   JW Player version 8.26.7
   Copyright (c) 2023, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.26.7/notice.txt
*/
"use strict";
(self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).push([
    [63], {
        8698: (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => S
            });
            var o = function(t, e) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(t), e)
            };
            const n = function(t, e) {
                this.name = "ParsingError", this.code = t.code, this.message = e || t.message
            };
            (n.prototype = Object.create(Error.prototype)).constructor = n, n.Errors = {
                BadSignature: {
                    code: 0,
                    message: "Malformed WebVTT signature."
                },
                BadTimeStamp: {
                    code: 1,
                    message: "Malformed time stamp."
                }
            };
            const r = t => {
                    const e = (t, e, i, o) => 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | o) / 1e3,
                        i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                    return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
                },
                s = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&lrm;": "â€Ž",
                    "&rlm;": "â€",
                    "&nbsp;": "Â "
                },
                l = {
                    c: "span",
                    i: "i",
                    b: "b",
                    u: "u",
                    ruby: "ruby",
                    rt: "rt",
                    v: "span",
                    lang: "span"
                },
                a = {
                    v: "title",
                    lang: "lang"
                },
                h = {
                    rt: "ruby"
                },
                c = (t, e) => {
                    const i = () => {
                            if (!e) return null;
                            const t = e.match(/^([^<]*)(<[^>]+>?)?/);
                            return i = t[1] ? t[1] : t[2], e = e.substr(i.length), i;
                            var i
                        },
                        o = t => s[t],
                        n = t => {
                            let e;
                            for (; e = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(e[0], o);
                            return t
                        },
                        c = (t, e) => !h[e.localName] || h[e.localName] === t.localName,
                        p = (e, i) => {
                            const o = l[e];
                            if (!o) return null;
                            const n = t.document.createElement(o),
                                r = a[e];
                            return r && i && (n[r] = i.trim()), n
                        },
                        d = t.document.createElement("div");
                    let u, f = d;
                    const g = [];
                    for (; null !== (u = i());)
                        if ("<" !== u[0]) f.appendChild(t.document.createTextNode(n(u)));
                        else {
                            if ("/" === u[1]) {
                                g.length && g[g.length - 1] === u.substr(2).replace(">", "") && (g.pop(), f = f.parentNode);
                                continue
                            }
                            const e = r(u.substr(1, u.length - 2));
                            let i;
                            if (e) {
                                i = t.document.createProcessingInstruction("timestamp", e), f.appendChild(i);
                                continue
                            }
                            const o = u.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                            if (!o) continue;
                            if (i = p(o[1], o[3]), !i) continue;
                            if (!c(f, i)) continue;
                            o[2] && (i.className = o[2].substr(1).replace(".", " ")), g.push(o[1]), f.appendChild(i), f = i
                        } return d
                },
                p = [
                    [1470, 1470],
                    [1472, 1472],
                    [1475, 1475],
                    [1478, 1478],
                    [1488, 1514],
                    [1520, 1524],
                    [1544, 1544],
                    [1547, 1547],
                    [1549, 1549],
                    [1563, 1563],
                    [1566, 1610],
                    [1645, 1647],
                    [1649, 1749],
                    [1765, 1766],
                    [1774, 1775],
                    [1786, 1805],
                    [1807, 1808],
                    [1810, 1839],
                    [1869, 1957],
                    [1969, 1969],
                    [1984, 2026],
                    [2036, 2037],
                    [2042, 2042],
                    [2048, 2069],
                    [2074, 2074],
                    [2084, 2084],
                    [2088, 2088],
                    [2096, 2110],
                    [2112, 2136],
                    [2142, 2142],
                    [2208, 2208],
                    [2210, 2220],
                    [8207, 8207],
                    [64285, 64285],
                    [64287, 64296],
                    [64298, 64310],
                    [64312, 64316],
                    [64318, 64318],
                    [64320, 64321],
                    [64323, 64324],
                    [64326, 64449],
                    [64467, 64829],
                    [64848, 64911],
                    [64914, 64967],
                    [65008, 65020],
                    [65136, 65140],
                    [65142, 65276],
                    [67584, 67589],
                    [67592, 67592],
                    [67594, 67637],
                    [67639, 67640],
                    [67644, 67644],
                    [67647, 67669],
                    [67671, 67679],
                    [67840, 67867],
                    [67872, 67897],
                    [67903, 67903],
                    [67968, 68023],
                    [68030, 68031],
                    [68096, 68096],
                    [68112, 68115],
                    [68117, 68119],
                    [68121, 68147],
                    [68160, 68167],
                    [68176, 68184],
                    [68192, 68223],
                    [68352, 68405],
                    [68416, 68437],
                    [68440, 68466],
                    [68472, 68479],
                    [68608, 68680],
                    [126464, 126467],
                    [126469, 126495],
                    [126497, 126498],
                    [126500, 126500],
                    [126503, 126503],
                    [126505, 126514],
                    [126516, 126519],
                    [126521, 126521],
                    [126523, 126523],
                    [126530, 126530],
                    [126535, 126535],
                    [126537, 126537],
                    [126539, 126539],
                    [126541, 126543],
                    [126545, 126546],
                    [126548, 126548],
                    [126551, 126551],
                    [126553, 126553],
                    [126555, 126555],
                    [126557, 126557],
                    [126559, 126559],
                    [126561, 126562],
                    [126564, 126564],
                    [126567, 126570],
                    [126572, 126578],
                    [126580, 126583],
                    [126585, 126588],
                    [126590, 126590],
                    [126592, 126601],
                    [126603, 126619],
                    [126625, 126627],
                    [126629, 126633],
                    [126635, 126651],
                    [1114109, 1114109]
                ],
                d = t => {
                    for (let e = 0; e < p.length; e++) {
                        const i = p[e];
                        if (t >= i[0] && t <= i[1]) return !0
                    }
                    return !1
                },
                u = (t, e) => {
                    for (let i = e.childNodes.length - 1; i >= 0; i--) t.push(e.childNodes[i])
                },
                f = t => {
                    if (!t || !t.length) return null;
                    const e = t.pop(),
                        i = e.textContent || e.innerText;
                    if (i) {
                        const e = i.match(/^.*(\n|\r)/);
                        return e ? (t.length = 0, e[0]) : i
                    }
                    return "ruby" === e.tagName ? f(t) : e.childNodes ? (u(t, e), f(t)) : void 0
                },
                g = t => {
                    if (!t || !t.childNodes) return "ltr";
                    const e = [];
                    let i, o;
                    for (u(e, t); i = f(e);)
                        for (let t = 0; t < i.length; t++)
                            if (o = i.charCodeAt(t), d(o)) return "rtl";
                    return "ltr"
                },
                m = function() {};
            m.prototype.applyStyles = function(t, e) {
                e = e || this.div;
                for (const i in t) o(t, i) && (e.style[i] = t[i])
            }, m.prototype.formatStyle = function(t, e) {
                return 0 === t ? 0 : t + e
            };
            const y = function(t, e) {
                m.call(this), this.cue = e, this.cueDiv = c(t, e.text), this.cueDiv.className = "jw-text-track-cue jw-reset";
                let i = "horizontal-tb";
                /^(lr|rl)$/.test(e.vertical) && (i = `vertical-${e.vertical}`);
                let o = {
                    textShadow: "",
                    position: "relative",
                    paddingLeft: 0,
                    paddingRight: 0,
                    left: 0,
                    top: 0,
                    bottom: 0,
                    display: "inline",
                    whiteSpace: "pre",
                    writingMode: i,
                    unicodeBidi: "plaintext"
                };
                this.applyStyles(o, this.cueDiv), this.div = t.document.createElement("div"), o = {
                    textAlign: "middle" === e.align ? "center" : e.align,
                    whiteSpace: "pre-line",
                    position: "absolute",
                    direction: g(this.cueDiv),
                    writingMode: i,
                    unicodeBidi: "plaintext"
                }, this.applyStyles(o), this.div.appendChild(this.cueDiv);
                let n = 0,
                    r = "";
                switch (e.align) {
                    case "start":
                    case "left":
                        n = e.position;
                        break;
                    case "middle":
                    case "center":
                        n = "auto" === e.position ? 50 : e.position, r = e.vertical ? "translateY(-50%)" : "translateX(-50%)";
                        break;
                    case "end":
                    case "right":
                        n = "auto" === e.position ? 100 : e.position, r = e.vertical ? "translateY(-100%)" : "translateX(-100%)"
                }
                n = Math.max(Math.min(100, n), 0), e.vertical ? this.applyStyles({
                    top: this.formatStyle(n, "%"),
                    height: this.formatStyle(e.size, "%"),
                    transform: r
                }) : this.applyStyles({
                    left: this.formatStyle(n, "%"),
                    transform: r
                }), this.move = function(t) {
                    this.applyStyles({
                        top: this.formatStyle(t.top, "px"),
                        bottom: this.formatStyle(t.bottom, "px"),
                        left: this.formatStyle(t.left, "px"),
                        paddingRight: this.formatStyle(t.right, "px"),
                        height: this.formatStyle(t.height, "px"),
                        transform: ""
                    })
                }
            };
            (y.prototype = Object.create(m.prototype)).constructor = y;
            const v = function(t) {
                let e, i, o, n;
                const {
                    div: r
                } = t;
                if (r) {
                    var s;
                    i = r.offsetHeight, o = r.offsetWidth, n = r.offsetTop;
                    const {
                        firstChild: l
                    } = r, a = null == l || null == l.getClientRects ? void 0 : l.getClientRects();
                    t = r.getBoundingClientRect(), e = a ? Math.max((null == a || null == (s = a[0]) ? void 0 : s.height) || 0, t.height / a.length) : 0
                }
                this.left = t.left, this.right = t.right, this.top = t.top || n, this.height = t.height || i, this.bottom = t.bottom || n + (t.height || i), this.width = t.width || o, this.lineHeight = void 0 !== e ? e : t.lineHeight, this.width = Math.ceil(this.width + 1)
            };
            v.prototype.move = function(t, e) {
                switch (e = void 0 !== e ? e : this.lineHeight, t) {
                    case "+x":
                        this.left += e, this.right += e;
                        break;
                    case "-x":
                        this.left -= e, this.right -= e;
                        break;
                    case "+y":
                        this.top += e, this.bottom += e;
                        break;
                    case "-y":
                        this.top -= e, this.bottom -= e
                }
            }, v.prototype.overlaps = function(t) {
                return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
            }, v.prototype.overlapsAny = function(t) {
                for (let e = 0; e < t.length; e++)
                    if (this.overlaps(t[e])) return !0;
                return !1
            }, v.prototype.within = function(t) {
                return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
            }, v.prototype.overlapsOppositeAxis = function(t, e) {
                switch (e) {
                    case "+x":
                        return this.left < t.left;
                    case "-x":
                        return this.right > t.right;
                    case "+y":
                        return this.top < t.top;
                    case "-y":
                        return this.bottom > t.bottom
                }
            }, v.prototype.intersectPercentage = function(t) {
                return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
            }, v.prototype.toCSSCompatValues = function(t) {
                return {
                    top: this.top - t.top,
                    bottom: t.bottom - this.bottom,
                    left: this.left - t.left,
                    paddingRight: t.right - this.right,
                    height: this.height,
                    width: this.width
                }
            }, v.getSimpleBoxPosition = function(t) {
                const e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
                    i = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
                    o = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0,
                    n = (t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t).height || e;
                return {
                    left: t.left,
                    right: t.right,
                    top: t.top || o,
                    height: n,
                    bottom: t.bottom || o + n,
                    width: t.width || i
                }
            };
            const b = (t, e, i, o, n) => {
                    const r = (t, e, n = 0) => {
                        let s;
                        const l = new v(t);
                        let a, h = 0;
                        if (!t.height || !t.width) return l;
                        for (let n = 0; n < e.length; n++) {
                            for (; t.overlapsOppositeAxis(i, e[n]) || t.within(i) && t.overlapsAny(o);) t.move(e[n]);
                            if (t.within(i)) return t;
                            const r = t.intersectPercentage(i);
                            h <= r && (s = new v(t), h = r, a = e[n]), t = new v(l)
                        }
                        const c = s || l;
                        if (a && 0 === n) {
                            const t = -1 === a.indexOf("y") ? ["-y", "+y"] : ["-x", "+x"];
                            return r(c, t, n + 1)
                        }
                        return c
                    };
                    let s = new v(e);
                    const l = e.cue;
                    let a = (t => {
                            if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
                            if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
                            const e = t.track,
                                i = e.textTrackList;
                            let o = 0;
                            for (let t = 0; t < i.length && i[t] !== e; t++) "showing" === i[t].mode && o++;
                            return -1 * ++o
                        })(l),
                        h = [];
                    if (l.snapToLines) {
                        let t;
                        switch (l.vertical) {
                            case "":
                                h = ["+y", "-y"], t = "height";
                                break;
                            case "rl":
                                h = ["+x", "-x"], t = "width";
                                break;
                            case "lr":
                                h = ["-x", "+x"], t = "width"
                        }
                        const e = s.lineHeight,
                            o = Math.floor(i[t] / e);
                        a = Math.min(a, o - n);
                        let r = e * Math.round(a);
                        const c = i[t] + e,
                            p = h[0];
                        if (Math.abs(r) > c && (r = r < 0 ? -1 : 1, r *= Math.ceil(c / e) * e), a < 0) {
                            r += l.vertical ? i.width : i.height;
                            r -= n * e, h = h.slice().reverse()
                        }
                        r -= n, s.move(p, r)
                    } else {
                        const t = s.lineHeight / i.height * 100;
                        switch (l.lineAlign) {
                            case "middle":
                                a -= t / 2;
                                break;
                            case "end":
                                a -= t
                        }
                        switch (l.vertical) {
                            case "":
                                e.applyStyles({
                                    top: e.formatStyle(a, "%")
                                });
                                break;
                            case "rl":
                                e.applyStyles({
                                    left: e.formatStyle(a, "%")
                                });
                                break;
                            case "lr":
                                e.applyStyles({
                                    paddingRight: e.formatStyle(a, "%")
                                })
                        }
                        h = ["+y", "-x", "+x", "-y"], s = new v(e)
                    }
                    const c = r(s, h);
                    e.move(c.toCSSCompatValues(i))
                },
                w = () => {};
            w.StringDecoder = function() {
                return {
                    decode(t) {
                        if (!t) return "";
                        if ("string" != typeof t) throw new Error("Error - expected string data.");
                        return decodeURIComponent(encodeURIComponent(t))
                    }
                }
            }, w.convertCueToDOMTree = function(t, e) {
                return t && e ? c(t, e) : null
            };
            w.processCues = function(t, e, i, o) {
                if (!t || !e || !i) return null;
                for (; i.firstChild;) i.removeChild(i.firstChild);
                if (!e.length) return null;
                const n = t.document.createElement("div");
                if (n.className = "jw-text-track-container jw-reset", n.style.position = "absolute", n.style.left = "0", n.style.right = "0", n.style.top = "0", n.style.bottom = "0", n.style.margin = "1.5%", i.appendChild(n), !(t => {
                    for (let e = 0; e < t.length; e++)
                        if (t[e].hasBeenReset || !t[e].displayState) return !0;
                    return !1
                })(e) && !o) {
                    for (let t = 0; t < e.length; t++) n.appendChild(e[t].displayState);
                    return
                }
                const r = [],
                    s = v.getSimpleBoxPosition(n);
                let l = e.reduce((function(t, e) {
                    return t + e.text.split("\n").length
                }), 0);
                ! function() {
                    for (let i = 0; i < e.length; i++) {
                        const o = e[i],
                            a = new y(t, o);
                        a.div.className = "jw-text-track-display jw-reset", n.appendChild(a.div), a.div.offsetWidth > s.width && (a.cueDiv.style.whiteSpace = "pre-wrap", a.div.style.left = "0px"), b(0, a, s, r, l), l -= o.text.split("\n").length, o.displayState = a.div, r.push(v.getSimpleBoxPosition(a))
                    }
                }()
            };
            const x = w;
            window.WebVTT || (window.WebVTT = x);
            const S = x
        }
    }
]);