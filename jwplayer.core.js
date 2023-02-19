/*!
   JW Player version 8.26.7
   Copyright (c) 2023, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.26.7/notice.txt
*/
(self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).push([
    [681], {
        8377: (t, e, i) => {
            "use strict";
            i.d(e, {
                M: () => n,
                _: () => o
            });
            const n = function(t, e) {
                    let i;
                    const n = t.kind || "cc";
                    return i = t.default || t.defaulttrack ? "default" : t._id || t.file || n + e, i
                },
                o = function(t, e) {
                    let i = t.label || t.name || t.language;
                    return i || (i = "Unknown CC", (e += 1) > 1 && (i += ` [${e}]`)), {
                        label: i,
                        unknownCount: e
                    }
                }
        },
        6103: (t, e, i) => {
            "use strict";
            i.d(e, {
                VS: () => p,
                xl: () => g
            });
            var n = i(7477),
                o = i(2894),
                s = i(6886),
                r = i(7941),
                a = i(7387),
                l = i(2957),
                c = i(4446);
            const d = t => {
                throw new c.rG(null, t)
            };
            const u = function(t) {
                    return t.map((t => new n.Z(t.begin, t.end, t.text)))
                },
                h = function(t, e, n, s) {
                    let h, g, p = t.responseXML ? t.responseXML.firstChild : null;
                    if (p)
                        for ("xml" === (0, r.r1)(p) && (p = p.nextSibling); p && p.nodeType === p.COMMENT_NODE;) p = p.nextSibling;
                    try {
                        if (p && "tt" === (0, r.r1)(p)) {
                            if (!t.responseXML) throw new Error("Empty XML response");
                            h = function(t) {
                                t || d(306007);
                                const e = [];
                                let i = t.getElementsByTagName("p"),
                                    n = 30;
                                const o = t.getElementsByTagName("tt");
                                if (null != o && o[0]) {
                                    const t = parseFloat(o[0].getAttribute("ttp:frameRate") || "");
                                    isNaN(t) || (n = t)
                                }
                                i || d(306005), i.length || (i = t.getElementsByTagName("tt:p"), i.length || (i = t.getElementsByTagName("tts:p")));
                                for (let o = 0; o < i.length; o++) {
                                    const s = i[o],
                                        r = s.getElementsByTagName("br");
                                    for (let e = 0; e < r.length; e++) {
                                        const i = r[e];
                                        null != i && i.parentNode && i.parentNode.replaceChild(t.createTextNode("\r\n"), i)
                                    }
                                    const a = s.innerHTML || s.textContent || s.text || "",
                                        c = (0, l.fy)(a).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                                    if (c) {
                                        const t = s.getAttribute("begin") || "",
                                            i = s.getAttribute("dur") || "",
                                            o = s.getAttribute("end") || "",
                                            r = {
                                                begin: (0, l.m9)(t, n),
                                                text: c
                                            };
                                        o ? r.end = (0, l.m9)(o, n) : i && (r.end = (r.begin || 0) + (0, l.m9)(i, n)), e.push(r)
                                    }
                                }
                                return e.length || d(306005), e
                            }(t.responseXML), g = u(h), delete e.xhr, n(g)
                        } else {
                            const r = t.responseText;
                            r.indexOf("WEBVTT") >= 0 ? i.e(347).then(function(t) {
                                return i(2776).default
                            }.bind(null, i)).catch((0, o.Jt)(301131)).then((t => {
                                const i = new t(window);
                                g = [], i.oncue = function(t) {
                                    g.push(t)
                                }, i.onflush = function() {
                                    delete e.xhr, n(g)
                                }, i.parse(r)
                            })).catch((t => {
                                delete e.xhr, s((0, c.Mm)(null, c.Y7, t))
                            })) : (h = (0, a.Z)(r), g = u(h), delete e.xhr, n(g))
                        }
                    } catch (t) {
                        delete e.xhr, s((0, c.Mm)(null, c.Y7, t))
                    }
                },
                g = function(t, e, i) {
                    t.xhr = (0, s.h)(t.file, (function(n) {
                        h(n, t, e, i)
                    }), ((t, e, n, o) => {
                        i((0, c.l9)(o, c.Y7))
                    }))
                },
                p = function(t) {
                    t && t.forEach((t => {
                        const e = t.xhr;
                        e && (e.onload = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()), delete t.xhr
                    }))
                }
        },
        7387: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            var n = i(2957);
            const o = t => {
                const e = {};
                let i = t.split("\r\n");
                1 === i.length && (i = t.split("\n"));
                let o = 1;
                if (i[0].indexOf(" --\x3e ") > 0 && (o = 0), i.length > o + 1 && i[o + 1]) {
                    const t = i[o],
                        s = t.indexOf(" --\x3e ");
                    s > 0 && (e.begin = (0, n.m9)(t.substr(0, s)), e.end = (0, n.m9)(t.substr(s + 5)), e.text = i.slice(o + 1).join("\r\n"))
                }
                return e
            };

            function s(t) {
                const e = [];
                let i = (t = (0, n.fy)(t)).split("\r\n\r\n");
                1 === i.length && (i = t.split("\n\n"));
                for (let t = 0; t < i.length; t++) {
                    if ("WEBVTT" === i[t]) continue;
                    const n = o(i[t]);
                    n.text && e.push(n)
                }
                return e
            }
        },
        7477: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            let n = window.VTTCue;
            const o = t => {
                if ("string" != typeof t) return !1;
                return !!{
                    start: !0,
                    middle: !0,
                    end: !0,
                    left: !0,
                    right: !0
                } [t.toLowerCase()] && t.toLowerCase()
            };
            if (!n) {
                const t = "auto";
                n = function(e, i, n) {
                    const s = this;
                    s.hasBeenReset = !1;
                    let r = "",
                        a = !1,
                        l = e,
                        c = i,
                        d = n,
                        u = null,
                        h = "",
                        g = !0,
                        p = t,
                        m = "start",
                        f = t,
                        w = 100,
                        b = "middle";
                    Object.defineProperty(s, "id", {
                        enumerable: !0,
                        get: () => r,
                        set(t) {
                            r = `${t}`
                        }
                    }), Object.defineProperty(s, "pauseOnExit", {
                        enumerable: !0,
                        get: () => a,
                        set(t) {
                            a = Boolean(t)
                        }
                    }), Object.defineProperty(s, "startTime", {
                        enumerable: !0,
                        get: () => l,
                        set(t) {
                            if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                            l = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(s, "endTime", {
                        enumerable: !0,
                        get: () => c,
                        set(t) {
                            if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                            c = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(s, "text", {
                        enumerable: !0,
                        get: () => d,
                        set(t) {
                            d = `${t}`, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(s, "region", {
                        enumerable: !0,
                        get: () => u,
                        set(t) {
                            u = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(s, "vertical", {
                        enumerable: !0,
                        get: () => h,
                        set(t) {
                            const e = (t => "string" == typeof t && (!!{
                                "": !0,
                                lr: !0,
                                rl: !0
                            } [t.toLowerCase()] && t.toLowerCase()))(t);
                            if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                            h = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(s, "snapToLines", {
                        enumerable: !0,
                        get: () => g,
                        set(t) {
                            g = Boolean(t), this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(s, "line", {
                        enumerable: !0,
                        get: () => p,
                        set(e) {
                            if ("number" != typeof e && e !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
                            p = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(s, "lineAlign", {
                        enumerable: !0,
                        get: () => m,
                        set(t) {
                            const e = o(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            m = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(s, "position", {
                        enumerable: !0,
                        get: () => f,
                        set(t) {
                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                            f = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(s, "size", {
                        enumerable: !0,
                        get: () => w,
                        set(t) {
                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                            w = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(s, "align", {
                        enumerable: !0,
                        get: () => b,
                        set(t) {
                            const e = o(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            b = e, this.hasBeenReset = !0
                        }
                    }), s.displayState = void 0
                }, n.prototype.getCueAsHTML = function() {
                    return window.WebVTT.convertCueToDOMTree(window, this.text)
                }
            }
            const s = n
        },
        5099: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => o
            });
            const n = (t, e, i) => {
                const n = new Error(i);
                return n.name = t, n.code = e, n
            };

            function o(t) {
                return new Promise((function(e, i) {
                    if (t.paused) return i(n("NotAllowedError", 0, "play() failed."));
                    let o;
                    const s = function(t) {
                            if (o(), "playing" !== t.type) {
                                const e = `The play() request was interrupted by a "${t.type}" event.`;
                                return "error" === t.type ? i(n("NotSupportedError", 9, e)) : i(n("AbortError", 20, e))
                            }
                            e()
                        },
                        r = function() {
                            t.addEventListener("playing", s), t.addEventListener("abort", s), t.addEventListener("error", s), t.addEventListener("pause", s)
                        };
                    o = function() {
                        t.removeEventListener("play", r), t.removeEventListener("playing", s), t.removeEventListener("pause", s), t.removeEventListener("abort", s), t.removeEventListener("error", s)
                    }, t.addEventListener("play", r)
                }))
            }
        },
        686: (t, e, i) => {
            "use strict";
            i.d(e, {
                s: () => o,
                v: () => s
            });
            const n = t => void 0 === t ? 120 : Math.max(t, 0),
                o = (t, e) => t !== 1 / 0 && Math.abs(t) >= Math.max(n(e), 0),
                s = (t, e) => {
                    let i = "VOD";
                    return t === 1 / 0 ? i = "LIVE" : t < 0 && (i = o(t, n(e)) ? "DVR" : "LIVE"), i
                }
        },
        4667: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            var n = i(2799);
            let o;

            function s(t) {
                return o || (o = new DOMParser), (0, n.gB)((0, n.oH)(o.parseFromString(t, "image/svg+xml").documentElement))
            }
        },
        1831: (t, e, i) => {
            "use strict";
            i.d(e, {
                R: () => u,
                Z: () => g
            });
            var n = i(8348),
                o = i(2894),
                s = i(328),
                r = i(1643),
                a = i(974),
                l = i(2799),
                c = i(6042);
            let d;
            const u = {
                    back: !0,
                    backgroundOpacity: 50,
                    edgeStyle: null,
                    fontSize: 14,
                    fontOpacity: 100,
                    fontScale: .05,
                    preprocessor: c.yR,
                    windowOpacity: 0
                },
                h = function(t) {
                    const e = t.player;
                    let s, h, g, p, m, f, w, b;
                    const y = document.createElement("div");
                    y.className = "jw-captions jw-reset";
                    const v = () => {
                            const t = e.get("containerHeight");
                            if (!t) return;
                            let i;
                            if (e.get("fullscreen") && n.OS.iOS) i = null;
                            else {
                                const o = t * w;
                                i = Math.round(10 * (t => {
                                    const i = e.get("mediaElement");
                                    if (null != i && i.videoHeight) {
                                        const {
                                            videoWidth: t,
                                            videoHeight: o
                                        } = i, s = t / o;
                                        let r = e.get("containerHeight"),
                                            a = e.get("containerWidth");
                                        if (e.get("fullscreen") && n.OS.mobile) {
                                            const {
                                                screen: t
                                            } = window;
                                            t.orientation && (r = t.availHeight, a = t.availWidth)
                                        }
                                        if (a && r && t && o) return (a / r > s ? r : o * a / t) * w
                                    }
                                    return t
                                })(o)) / 10
                            }
                            e.get("renderCaptionsNatively") ? ((t, e) => {
                                const i = `#${t} .jw-video::-webkit-media-text-track-display`;
                                e && (e += "px", n.OS.iOS && (0, a.iv)(i, {
                                    fontSize: "inherit"
                                }, t, !0)), b.fontSize = e, (0, a.iv)(i, b, t, !0)
                            })(e.get("id"), i) : (0, a.oB)(y, {
                                fontSize: i
                            })
                        },
                        j = () => {
                            if (!(0, c.xV)(s.fontSize)) return;
                            e.get("containerHeight") ? w = u.fontScale * (s.userFontScale || 1) * s.fontSize / u.fontSize : e.once("change:containerHeight", j, this)
                        },
                        k = (t, e, i) => {
                            const n = (0, a.HY)("#000000", i);
                            "dropShadow" === t ? e.textShadow = `0 2px 1px ${n}` : "raised" === t ? e.textShadow = `0 0 5px ${n}, 0 1px 5px ${n}, 0 2px 5px ${n}` : "depressed" === t ? e.textShadow = `0 -2px 1px ${n}` : "uniform" === t && (e.textShadow = `-2px 0 1px ${n},2px 0 1px ${n},0 -2px 1px ${n},0 2px 1px ${n},-1px 1px 1px ${n},1px 1px 1px ${n},1px -1px 1px ${n},1px 1px 1px ${n}`)
                        },
                        _ = (t, e) => {
                            v(), ((t, e) => {
                                n.Browser.safari && (0, a.iv)(`#${t} .jw-video::-webkit-media-text-track-display-backdrop`, {
                                    backgroundColor: e.backgroundColor
                                }, t, !0), (0, a.iv)(`#${t} .jw-video::-webkit-media-text-track-display`, b, t, !0), (0, a.iv)(`#${t} .jw-video::cue`, e, t, !0)
                            })(t, e), ((t, e) => {
                                (0, a.iv)(`#${t} .jw-text-track-display`, b, t), (0, a.iv)(`#${t} .jw-text-track-cue`, e, t)
                            })(t, e)
                        };
                    this.show = function() {
                        (0, l.cn)(y, "jw-captions-enabled")
                    }, this.hide = function() {
                        (0, l.IV)(y, "jw-captions-enabled")
                    }, this.populate = function(t) {
                        e.get("renderCaptionsNatively") || (g = [], h = t, t ? this.selectCues(t, p) : this.renderCues())
                    }, this.resize = function() {
                        v(), this.renderCues(!0)
                    }, this.renderCues = function(t) {
                        t = Boolean(t), d && d.processCues(window, g, y, t)
                    }, this.selectCues = function(t, i) {
                        if (!t || !t.data || !i || e.get("renderCaptionsNatively")) return;
                        const n = this.getAlignmentPosition(t, i);
                        !1 !== n && (g = this.getCurrentCues(t.data, n), this.renderCues(!0))
                    }, this.getCurrentCues = function(t, e) {
                        return (0, c.hX)(t, (function(t) {
                            return e >= t.startTime && (!t.endTime || e <= t.endTime)
                        }))
                    }, this.getAlignmentPosition = function(t, e) {
                        const i = t.source,
                            n = e.metadata;
                        let o = e.currentTime;
                        return i && n && (0, c.hj)(n[i]) && (o = n[i]), o
                    }, this.clear = function() {
                        (0, l.cS)(y)
                    }, this.setup = function(t, i) {
                        m = document.createElement("div"), f = document.createElement("span"), m.className = "jw-captions-window jw-reset", f.className = "jw-captions-text jw-reset", s = Object.assign({}, u, i), w = u.fontScale;
                        const n = () => {
                            j(s.fontSize);
                            const e = s.windowColor,
                                i = s.windowOpacity,
                                n = s.edgeStyle;
                            b = {};
                            const o = {};
                            ((t, e) => {
                                const i = e.color,
                                    n = e.fontOpacity;
                                if ((i || n !== u.fontOpacity) && (t.color = (0, a.HY)(i || "#ffffff", n)), e.back) {
                                    const i = e.backgroundColor,
                                        n = e.backgroundOpacity;
                                    i === u.backgroundColor && n === u.backgroundOpacity || (t.backgroundColor = (0, a.HY)(i, n))
                                } else t.background = "transparent";
                                e.fontFamily && (t.fontFamily = e.fontFamily), e.fontStyle && (t.fontStyle = e.fontStyle), e.fontWeight && (t.fontWeight = e.fontWeight), e.textDecoration && (t.textDecoration = e.textDecoration)
                            })(o, s), (e || i !== u.windowOpacity) && (b.backgroundColor = (0, a.HY)(e || "#000000", i)), k(n, o, s.fontOpacity), s.back || null !== n || k("uniform", o), (0, a.oB)(m, b), (0, a.oB)(f, o), _(t, o)
                        };
                        n(), m.appendChild(f), y.appendChild(m), e.change("captionsTrack", (function(t, e) {
                            this.populate(e)
                        }), this), e.set("captions", s), e.on("change:captions", ((t, e) => {
                            s = e, n()
                        }))
                    }, this.element = function() {
                        return y
                    }, this.destroy = function() {
                        e.off(null, null, this), this.off()
                    };
                    const x = t => {
                            p = t, this.selectCues(h, p)
                        },
                        M = (t, e) => {
                            1 !== e.length && (t.get("renderCaptionsNatively") || d || (i.e(63).then(function(t) {
                                d = i(8698).default
                            }.bind(null, i)).catch((0, o.Jt)(301121)).catch((t => {
                                this.trigger(r.cM, t)
                            })), t.off("change:captionsList", M, this)))
                        };
                    e.on("change:playlistItem", (function() {
                        p = null, g = []
                    }), this), e.on(r.NZ, (function(t) {
                        g = [], x(t)
                    }), this), e.on(r.R2, x, this), e.on("subtitlesTrackData", (function() {
                        this.selectCues(h, p)
                    }), this), e.on("change:captionsList", M, this)
                };
            Object.assign(h.prototype, s.ZP);
            const g = h
        },
        8168: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => l,
                w: () => a
            });
            var n = i(974),
                o = i(4667),
                s = i(5646);
            const r = {},
                a = function(t) {
                    if (!r[t]) {
                        const e = Object.keys(r);
                        e.length > 10 && delete r[e[0]];
                        const i = (0, o.Z)(t);
                        r[t] = i
                    }
                    return r[t].cloneNode(!0)
                };
            const l = class {
                constructor(t, e, i, o, r) {
                    const l = document.createElement("div");
                    let c;
                    l.className = `jw-icon jw-icon-inline jw-button-color jw-reset ${r||""}`, l.setAttribute("button", o), l.setAttribute("role", "button"), l.setAttribute("tabindex", "0"), e && l.setAttribute("aria-label", e), t && "<svg" === t.substring(0, 4) ? c = a(t) : (c = document.createElement("div"), c.className = "jw-icon jw-button-image jw-button-color jw-reset", t && (0, n.oB)(c, {
                        backgroundImage: `url(${t})`
                    })), l.appendChild(c), (0, s.Z)(l, i, this), l.addEventListener("mousedown", (t => {
                        t.preventDefault()
                    })), this.id = o, this.buttonElement = l
                }
                element() {
                    return this.buttonElement
                }
                toggle(t) {
                    t ? this.show() : this.hide()
                }
                show() {
                    this.buttonElement.style.display = ""
                }
                hide() {
                    this.buttonElement.style.display = "none"
                }
            }
        },
        5187: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => r
            });
            var n = i(974),
                o = i(2799),
                s = i(8348);
            const r = class {
                constructor(t) {
                    this.model = t.player, this.truncated = t.get("__ab_truncated") && !s.Browser.ie
                }
                hide() {
                    (0, n.oB)(this.el, {
                        display: "none"
                    })
                }
                show() {
                    (0, n.oB)(this.el, {
                        display: ""
                    })
                }
                setup(t) {
                    if (this.el = t, !this.el) return;
                    const e = this.el.getElementsByTagName("div");
                    this.title = e[0], this.description = e[1], this.truncated && this.el.classList.add("jw-ab-truncated"), this.model.on("change:logoWidth", this.update, this), this.model.change("playlistItem", this.playlistItem, this)
                }
                update(t) {
                    const e = {},
                        i = t.get("logo");
                    if (i) {
                        const n = 1 * parseInt(`${i.margin}`.replace("px", ""), 10),
                            o = t.get("logoWidth") + (isNaN(n) ? 0 : n + 10);
                        "top-left" === i.position ? e.paddingLeft = o : "top-right" === i.position && (e.paddingRight = o)
                    }(0, n.oB)(this.el, e)
                }
                playlistItem(t, e) {
                    if (e)
                        if (t.get("displaytitle") || t.get("displaydescription")) {
                            let i = "",
                                n = "";
                            "string" == typeof e.title && t.get("displaytitle") && (i = e.title), "string" == typeof e.description && t.get("displaydescription") && (n = e.description), this.updateText(i, n)
                        } else this.hide()
                }
                updateText(t, e) {
                    this.title && this.description && ((0, o.nh)(this.title, (0, o.Ww)(t)), (0, o.nh)(this.description, (0, o.Ww)(e)), this.title.firstChild || this.description.firstChild ? this.show() : this.hide())
                }
                element() {
                    return this.el
                }
            }
        },
        5646: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => o
            });
            var n = i(5882);
            const o = function(t, e, i) {
                return new n.ZP(t).on("click enter", e, i)
            }
        },
        6436: (t, e, i) => {
            "use strict";
            i.d(e, {
                d: () => s,
                i: () => o
            });
            var n = i(2799);
            const o = function(t) {
                    let e = -1;
                    return t >= 1280 ? e = 7 : t >= 960 ? e = 6 : t >= 800 ? e = 5 : t >= 640 ? e = 4 : t >= 540 ? e = 3 : t >= 420 ? e = 2 : t >= 320 ? e = 1 : t >= 250 && (e = 0), e
                },
                s = function(t, e) {
                    const i = `jw-breakpoint-${e}`;
                    (0, n.L_)(t, /jw-breakpoint--?\d+/, i)
                }
        },
        8446: (t, e, i) => {
            "use strict";
            i.d(e, {
                FM: () => s,
                Sf: () => a,
                xq: () => r
            });
            var n = i(2957),
                o = i(974);
            const s = t => t.replace(/^(.*\/)?(.*)-?.*\.(css).*$/, "$2"),
                r = t => {
                    t || (t = {});
                    const e = t.active,
                        i = t.inactive,
                        n = t.background,
                        s = {};
                    return s.controlbar = (t => {
                        if (t || e || i || n) {
                            const o = {};
                            return t = t || {}, o.iconsActive = t.iconsActive || e, o.icons = t.icons || i, o.text = t.text || i, o.background = t.background || n, o
                        }
                    })(t.controlbar), s.timeslider = (t => {
                        if (t || e) {
                            const i = {};
                            return t = t || {}, i.progress = t.progress || e, i.rail = t.rail, i.buffer = t.buffer, !i.buffer && i.progress && (i.buffer = (0, o.HY)(i.progress, 50)), i.knob = t.knob || i.progress, i.ads = t.ads || n, i
                        }
                    })(t.timeslider), s.menus = (t => {
                        if (t || e || i || n) {
                            const o = {};
                            return t = t || {}, o.text = t.text || i, o.textActive = t.textActive || e, o.background = t.background || n, o
                        }
                    })(t.menus), s.tooltips = (t => {
                        if (t || i || n) {
                            const e = {};
                            return t = t || {}, e.text = t.text || i, e.background = t.background || n, e
                        }
                    })(t.tooltips), s
                },
                a = (t, e) => {
                    if (!e) return;
                    const i = (e, i, s, r) => {
                        if (!s) return;
                        e = (0, n.O4)(e, `#${t}${r?"":" "}`);
                        const a = {};
                        a[i] = s, (0, o.iv)(e.join(", "), a, t)
                    };
                    var s;
                    e.controlbar && (s = e.controlbar, i([".jw-controlbar .jw-icon-inline.jw-text", ".jw-title-primary", ".jw-title-secondary"], "color", s.text), s.icons && (i([".jw-button-color:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:not(.jw-icon-cast)"], "color", s.icons), i([".jw-display-icon-container .jw-button-color"], "color", s.icons), (0, o.iv)(`#${t} .jw-icon-cast google-cast-launcher.jw-off`, `{--disconnected-color: ${s.icons}}`, t)), s.iconsActive && (i([".jw-display-icon-container .jw-button-color:hover", ".jw-display-icon-container .jw-button-color:focus"], "color", s.iconsActive), i([".jw-button-color.jw-toggle:not(.jw-icon-cast)", ".jw-button-color:hover:not(.jw-icon-cast)", ".jw-button-color:focus:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:hover:not(.jw-icon-cast)"], "color", s.iconsActive), i([".jw-svg-icon-buffer"], "fill", s.icons), (0, o.iv)(`#${t} .jw-icon-cast:hover google-cast-launcher.jw-off`, `{--disconnected-color: ${s.iconsActive}}`, t), (0, o.iv)(`#${t} .jw-icon-cast:focus google-cast-launcher.jw-off`, `{--disconnected-color: ${s.iconsActive}}`, t), (0, o.iv)(`#${t} .jw-icon-cast google-cast-launcher.jw-off:focus`, `{--disconnected-color: ${s.iconsActive}}`, t), (0, o.iv)(`#${t} .jw-icon-cast google-cast-launcher`, `{--connected-color: ${s.iconsActive}}`, t), (0, o.iv)(`#${t} .jw-icon-cast google-cast-launcher:focus`, `{--connected-color: ${s.iconsActive}}`, t), (0, o.iv)(`#${t} .jw-icon-cast:hover google-cast-launcher`, `{--connected-color: ${s.iconsActive}}`, t), (0, o.iv)(`#${t} .jw-icon-cast:focus google-cast-launcher`, `{--connected-color: ${s.iconsActive}}`, t)), i([" .jw-settings-topbar", ":not(.jw-state-idle) .jw-controlbar", ".jw-flag-audio-player .jw-controlbar"], "background", s.background, !0)), e.timeslider && (t => {
                        const {
                            progress: e,
                            buffer: n,
                            rail: s,
                            knob: r,
                            ads: a
                        } = t;
                        e && "none" !== e && (i([".jw-progress"], "background-color", e), i([".jw-slider-volume .jw-buffer"], "background-color", (0, o.HY)(e, 50))), n && "none" !== n && i([".jw-slider-time .jw-buffer"], "background-color", n), a && "none" !== a && i([".jw-slider-time .jw-cue-type-ads"], "background-color", a), r && "none" !== r && i([".jw-knob"], "background-color", r), s && "none" !== s && i([".jw-rail"], "background-color", s), i([".jw-background-color.jw-slider-time", ".jw-slider-time .jw-cue"], "background-color", t.background)
                    })(e.timeslider), e.menus && (t => {
                        i([".jw-option", ".jw-toggle.jw-off", ".jw-skip .jw-skip-icon", ".jw-nextup-tooltip", ".jw-nextup-close", ".jw-settings-content-item", ".jw-related-title"], "color", t.text), i([".jw-option.jw-active-option", ".jw-option:not(.jw-active-option):hover", ".jw-option:not(.jw-active-option):focus", ".jw-settings-content-item:hover", ".jw-nextup-tooltip:hover", ".jw-nextup-tooltip:focus", ".jw-nextup-close:hover"], "color", t.textActive), i([".jw-nextup", ".jw-settings-menu"], "background", t.background)
                    })(e.menus), e.tooltips && (t => {
                        i([".jw-skip", ".jw-tooltip .jw-text", ".jw-time-tip .jw-text"], "background-color", t.background), i([".jw-time-tip", ".jw-tooltip"], "color", t.background), i([".jw-skip"], "border", "none"), i([".jw-skip .jw-text", ".jw-skip .jw-icon", ".jw-time-tip .jw-text", ".jw-tooltip .jw-text"], "color", t.text)
                    })(e.tooltips), e.menus && (e => {
                        if (e.textActive) {
                            const i = {
                                color: e.textActive,
                                borderColor: e.textActive,
                                stroke: e.textActive
                            };
                            (0, o.iv)(`#${t} .jw-color-active`, i, t), (0, o.iv)(`#${t} .jw-color-active-hover:hover`, i, t)
                        }
                        if (e.text) {
                            const i = {
                                color: e.text,
                                borderColor: e.text,
                                stroke: e.text
                            };
                            (0, o.iv)(`#${t} .jw-color-inactive`, i, t), (0, o.iv)(`#${t} .jw-color-inactive-hover:hover`, i, t)
                        }
                    })(e.menus)
                }
        },
        9659: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => Be
            });
            var n = i(1918),
                o = i(1643),
                s = i(6391),
                r = i(623),
                a = i(5191);
            const l = ["notVisible", "always", "never"];
            var c = i(9128),
                d = i(7263),
                u = i(8320),
                h = i(658),
                g = i(2957),
                p = i(328),
                m = i(2303);
            class f {
                constructor(t) {
                    this.callback = t
                }
                async (...t) {
                    return Promise.resolve().then((() => {
                        if (null !== this.callback) return this.callback(...t)
                    }))
                }
                cancel() {
                    this.callback = null
                }
                cancelled() {
                    return null === this.callback
                }
            }

            function w(t) {
                return new f(t)
            }
            var b = i(4446),
                y = i(6042);
            const v = function(t, e) {
                    const i = this.mediaModel,
                        n = Object.assign({}, e, {
                            type: t
                        });
                    switch (t) {
                        case o.oZ:
                            if (i.get(o.oZ) === n.mediaType) return;
                            i.set(o.oZ, n.mediaType);
                            break;
                        case o.ug:
                            return void i.set(o.ug, Object.assign({}, e));
                        case o.gy:
                            if (e[o.gy] === this.model.getMute()) return;
                            break;
                        case o.uc: {
                            const {
                                newstate: t
                            } = e;
                            t === o.bc && (this.thenPlayPromise.cancel(), i.srcReset());
                            const n = i.attributes.mediaState;
                            i.attributes.mediaState = t, i.trigger("change:mediaState", i, t, n);
                            break
                        }
                        case o.Ms:
                            return this.beforeComplete = !0, this.trigger(o.s$, n), void(this.attached && !this.background && this._playbackComplete());
                        case o.Ew:
                            i.get("setup") ? (this.thenPlayPromise.cancel(), i.srcReset()) : (t = o.cM, n.code += 1e5);
                            break;
                        case o.rx: {
                            const {
                                duration: t,
                                metadataType: o,
                                seekRange: s
                            } = e;
                            o || (n.metadataType = "unknown"), (0, y.qh)(t) && (i.set("seekRange", s), i.set("duration", t));
                            break
                        }
                        case o.uT:
                            i.set("buffer", e.bufferPercent);
                        case o.R2: {
                            const n = e;
                            i.set("seekRange", n.seekRange), i.set("position", n.position), i.set("currentTime", n.currentTime);
                            const s = n.duration;
                            (0, y.qh)(s) && i.set("duration", s), t === o.R2 && "starttime" in this.item && delete this.item.starttime;
                            break
                        }
                        case o.aQ: {
                            const t = this.mediaElement;
                            null != t && t.paused && i.set("mediaState", "paused");
                            break
                        }
                        case o.UZ:
                            i.set(o.UZ, e.levels);
                        case o.aM: {
                            const {
                                currentQuality: t,
                                levels: n
                            } = e;
                            t > -1 && n.length > 1 && i.set("currentLevel", parseInt(t, 10));
                            break
                        }
                        case o.j0:
                            i.set(o.j0, e.tracks);
                        case o._B: {
                            const {
                                currentTrack: t,
                                tracks: n
                            } = e;
                            t > -1 && n.length > 0 && t < n.length && i.set("currentAudioTrack", parseInt(t, 10));
                            break
                        }
                    }
                    this.trigger(t, n)
                },
                j = function(t, e) {
                    const i = this.model;
                    switch (t) {
                        case o.uc:
                            return;
                        case o.yH:
                            return void i.set(o.yH, e[o.yH]);
                        case o.gy:
                            return void i.set(o.gy, e[o.gy]);
                        case o.TJ:
                            return void i.set("playbackRate", e.playbackRate);
                        case o.rx:
                            Object.assign(i.get("itemMeta"), e.metadata);
                            break;
                        case o.aM:
                            i.persistQualityLevel(e.currentQuality, e.levels);
                            break;
                        case o.UF:
                            i.persistVideoSubtitleTrack(e.currentTrack, e.tracks);
                            break;
                        case o.R2:
                            e.targetLatency && i.set("dvrSeekLimit", e.targetLatency);
                        case o.NZ:
                        case o.aQ:
                        case o.h7:
                        case o.jt:
                        case "subtitlesTracksData":
                            i.trigger(t, e);
                            break;
                        case o.qG:
                            return void i.persistBandwidthEstimate(e.bandwidthEstimate)
                    }
                    this.trigger(t, e)
                };
            var k = i(8348),
                _ = i(7753),
                x = i(9918),
                M = i(8381);
            class C extends _.Z {
                constructor() {
                    super(), this.addAttributes({
                        mediaState: o.bc
                    })
                }
                srcReset() {
                    Object.assign(this.attributes, {
                        setup: !1,
                        started: !1,
                        preloaded: !1,
                        visualQuality: null,
                        buffer: 0,
                        currentTime: 0
                    })
                }
            }
            class S extends _.Z {
                constructor() {
                    super(), this.providerController = null, this._provider = null, this.addAttributes({
                        mediaModel: new C,
                        minDvrWindow: x.ni,
                        dvrSeekLimit: x.OG
                    })
                }
                setup(t) {
                    return t = t || {}, this._normalizeConfig(t), Object.assign(this.attributes, t, x.bv), this.providerController = new m.Z(this.getConfiguration()), this.setAutoStart(), this
                }
                getConfiguration() {
                    const t = this.clone(),
                        e = t.mediaModel.attributes;
                    return Object.keys(x.L4).forEach((i => {
                        t[i] = e[i]
                    })), t.instreamMode = Boolean(t.instream), delete t.instream, delete t.mediaModel, t
                }
                persistQualityLevel(t, e) {
                    const i = e[t] || {},
                        {
                            label: n
                        } = i,
                        o = (0, y.qh)(i.bitrate) ? i.bitrate : null;
                    this.set("bitrateSelection", o), this.set("qualityLabel", n)
                }
                setActiveItem(t) {
                    const e = this.get("playlist")[t];
                    this.resetItem(e), this.attributes.playlistItem = null, this.set("item", t), this.set("minDvrWindow", e.minDvrWindow), this.set("dvrSeekLimit", e.dvrSeekLimit || x.OG), this.set("playlistItem", e)
                }
                setMediaModel(t) {
                    this.mediaModel && this.mediaModel !== t && this.mediaModel.off(), t = t || new C, this.mediaModel = t,
                        function(t) {
                            const e = t.get("mediaState");
                            t.trigger("change:mediaState", t, e, e)
                        }(t)
                }
                destroy() {
                    this.attributes._destroyed = !0, this.off(), this._provider && (this._provider.off(null, null, this), this._provider.destroy(), this._provider = null), this.mediaModel && this.mediaModel.off(), this.providerController = null
                }
                getVideo() {
                    return this._provider
                }
                setFullscreen(t) {
                    (t = Boolean(t)) !== this.get("fullscreen") && this.set("fullscreen", t)
                }
                getProviders() {
                    return this.providerController
                }
                setVolume(t) {
                    if (!(0, y.qh)(t)) return;
                    const e = Math.min(Math.max(0, t), 100);
                    this.set("volume", e);
                    const i = 0 === e;
                    i !== this.getMute() && this.setMute(i)
                }
                getMute() {
                    return this.get("autostartMuted") || this.get("mute")
                }
                setMute(t) {
                    if (void 0 === t && (t = !this.getMute()), this.set("mute", Boolean(t)), !t) {
                        const t = Math.max(10, this.get("volume"));
                        this.set("autostartMuted", !1), this.setVolume(t)
                    }
                }
                setStreamType(t) {
                    this.set("streamType", t), "LIVE" === t && this.setPlaybackRate(1)
                }
                setProvider(t) {
                    this._provider = t, ((t, e) => {
                        t.set("provider", e.getName()), !0 === t.get("instreamMode") && (e.instreamMode = !0), t.setPlaybackRate(t.get("defaultPlaybackRate")), t.set("supportsPlaybackRate", e.supportsPlaybackRate), t.set("playbackRate", e.getPlaybackRate()), t.set("renderCaptionsNatively", e.renderNatively)
                    })(this, t)
                }
                resetProvider() {
                    this._provider = null, this.set("provider", void 0)
                }
                setPlaybackRate(t) {
                    var e;
                    (0, y.hj)(t) && (t = Math.max(Math.min(t, 4), .25), "LIVE" === this.get("streamType") && (t = 1), this.set("defaultPlaybackRate", t), null == this || null == (e = this._provider) || null == e.setPlaybackRate || e.setPlaybackRate(t))
                }
                persistCaptionsTrack() {
                    const t = this.get("captionsTrack");
                    t ? this.set("captionLabel", t.name) : this.set("captionLabel", "Off")
                }
                setVideoSubtitleTrack(t, e) {
                    this.set("captionsIndex", t), t && e && t <= e.length && e[t - 1].data && this.set("captionsTrack", e[t - 1])
                }
                persistVideoSubtitleTrack(t, e) {
                    this.setVideoSubtitleTrack(t, e), this.persistCaptionsTrack()
                }
                setAutoStart(t) {
                    void 0 !== t && this.set("autostart", t);
                    const e = Boolean(k.OS.mobile && this.get("autostart"));
                    this.set("playOnViewable", e || "viewable" === this.get("autostart"))
                }
                setCues(t) {
                    const e = this.get("playlistItem");
                    e.chapters = (0, M._b)(t, e.chapters);
                    const i = t.filter((t => "chapters" !== t.cueType));
                    this.set("cues", i), this.set("playlistItem", e), this.trigger("change:chapters", this)
                }
                getCues() {
                    const t = this.get("playlistItem").chapters,
                        e = (0, M.$W)(t, this.mediaModel.get("duration"));
                    return (this.get("cues") || []).concat(e)
                }
                resetItem(t) {
                    const e = t ? (0, g.m9)(t.starttime) : 0,
                        i = t ? (0, g.m9)(t.duration) : 0,
                        n = this.mediaModel;
                    this.set("playRejected", !1), this.attributes.itemMeta = {}, n.set("position", e), n.set("currentTime", 0), n.set("duration", i)
                }
                persistBandwidthEstimate(t) {
                    (0, y.qh)(t) && this.set("bandwidthEstimate", t)
                }
                _normalizeConfig(t) {
                    const e = t.floating;
                    e && Boolean(e.disabled) && delete t.floating
                }
            }
            const E = S;
            class I extends p.ZP {
                constructor(t, e) {
                    super(), this.attached = !0, this.beforeComplete = !1, this.item = null, this.mediaModel = new C, this.model = e, this.provider = t, this.providerListener = v, this.thenPlayPromise = w((() => {})), t.off(), t.on("all", this.providerListener, this), this.eventQueue = new c.Z(this, ["trigger"], (() => !this.attached || this.background))
                }
                play(t) {
                    const {
                        item: e,
                        model: i,
                        mediaModel: n,
                        provider: o
                    } = this;
                    if (t || (t = i.get("playReason")), i.set("playRejected", !1), n.get("setup")) return o.play() || Promise.resolve();
                    n.set("setup", !0);
                    const s = this._loadAndPlay(e, o);
                    return n.get("started") ? s : this._playAttempt(s, t)
                }
                stop() {
                    const {
                        provider: t
                    } = this;
                    this.beforeComplete = !1, t.stop()
                }
                pause() {
                    const {
                        provider: t
                    } = this;
                    t.pause()
                }
                preload() {
                    const {
                        item: t,
                        mediaModel: e,
                        provider: i
                    } = this;
                    !t || t && "none" === t.preload || !this.attached || this.setup || this.preloaded || (e.set("preloaded", !0), i.preload(t))
                }
                destroy() {
                    const {
                        provider: t,
                        mediaModel: e
                    } = this;
                    this.off(), e.off(), t.off(), this.eventQueue.destroy(), this.detach(), t.getContainer() && t.remove(), this.eventQueue && this.eventQueue.destroy(), delete t.instreamMode, this.thenPlayPromise && this.thenPlayPromise.cancel(), this.provider = this.mediaModel = this.model = this.eventQueue = this.item = this.providerListener = this.thenPlayPromise = null
                }
                attach() {
                    const {
                        model: t,
                        provider: e
                    } = this;
                    t.setPlaybackRate(t.get("defaultPlaybackRate")), e.attachMedia(), this.attached = !0, this.eventQueue.flush(), this.beforeComplete && this._playbackComplete()
                }
                detach() {
                    const {
                        provider: t
                    } = this;
                    this.thenPlayPromise.cancel();
                    const e = t.detachMedia();
                    return this.attached = !1, e
                }
                _playAttempt(t, e) {
                    const {
                        item: i,
                        mediaModel: n,
                        model: s,
                        provider: r
                    } = this, a = r ? r.video : null;
                    return this.trigger(o.cq, {
                        item: i,
                        playReason: e
                    }), (a ? a.paused : s.get(o.uc) !== o.r0) || s.set(o.uc, o.Kb), t.then((() => {
                        n.get("setup") && (n.set("started", !0), n === s.mediaModel && (t => {
                            const e = t.get("mediaState");
                            t.trigger("change:mediaState", t, e, e)
                        })(n))
                    })).catch((t => {
                        if (this.item && n === s.mediaModel) {
                            s.set("playRejected", !0);
                            if (null == a ? void 0 : a.paused) {
                                if (a.src === location.href) return this._loadAndPlay(i, r);
                                n.set("mediaState", o._5)
                            }
                            const l = Object.assign(new b.rG(null, (0, b.nm)(t), t), {
                                error: t,
                                item: i,
                                playReason: e
                            });
                            throw delete l.key, this.trigger(o.Je, l), t
                        }
                    }))
                }
                _playbackComplete() {
                    const {
                        item: t,
                        provider: e
                    } = this;
                    t && delete t.starttime, this.beforeComplete = !1, e.setState(o.xQ), this.trigger(o.Ms, {})
                }
                _loadAndPlay() {
                    const {
                        item: t,
                        provider: e
                    } = this, i = e.load(t);
                    if (i) {
                        const t = w((() => this.provider.play() || Promise.resolve()));
                        return this.thenPlayPromise = t, i.then((() => t.async()))
                    }
                    return e.play() || Promise.resolve()
                }
                get audioTracks() {
                    return this.provider.getAudioTracks()
                }
                get mediaElement() {
                    return this.provider.video
                }
                get preloaded() {
                    return this.mediaModel.get("preloaded")
                }
                get qualities() {
                    return this.provider.getQualityLevels()
                }
                get setup() {
                    return this.mediaModel.get("setup")
                }
                get started() {
                    return this.mediaModel.get("started")
                }
                get activeItem() {
                    return this.provider.activeItem
                }
                set activeItem(t) {
                    const e = this.mediaModel = new C,
                        i = t ? (0, g.m9)(t.starttime) : 0,
                        n = t ? (0, g.m9)(t.duration) : 0,
                        o = e.attributes;
                    e.srcReset(), o.position = i, o.duration = n, this.item = t, this.provider.init(t)
                }
                get audioTrack() {
                    return this.provider.getCurrentAudioTrack()
                }
                set audioTrack(t) {
                    this.provider.setCurrentAudioTrack(t)
                }
                get background() {
                    if (!this.attached) return !1;
                    const t = this.provider;
                    if (!t.video) return !1;
                    const e = t.getContainer();
                    return !e || e && !e.contains(t.video)
                }
                set background(t) {
                    const e = this.provider;
                    if (!e.video) return void(t ? this.detach() : this.attach());
                    const i = e.getContainer();
                    i && (t ? this.background || (this.thenPlayPromise.cancel(), this.pause(), e.removeFromContainer ? e.removeFromContainer() : i.removeChild(e.video), this.container = null) : (this.eventQueue.flush(), this.beforeComplete && this._playbackComplete()))
                }
                get container() {
                    return this.provider.getContainer()
                }
                set container(t) {
                    const {
                        provider: e
                    } = this;
                    e.setContainer(t)
                }
                get controls() {
                    return this.provider.controls
                }
                set controls(t) {
                    this.provider.setControls(t)
                }
                get mute() {
                    return this.provider.getMute()
                }
                set mute(t) {
                    this.provider.mute(t)
                }
                get position() {
                    return this.provider.position
                }
                set position(t) {
                    const {
                        provider: e
                    } = this;
                    this.model.get("scrubbing") && e.fastSeek ? e.fastSeek(t) : e.seek(t)
                }
                get quality() {
                    return this.provider.getCurrentQuality()
                }
                set quality(t) {
                    this.provider.setCurrentQuality(t)
                }
                get subtitles() {
                    return this.provider.subtitles
                }
                set subtitles(t) {
                    this.provider.setSubtitlesTrack && this.provider.setSubtitlesTrack(t)
                }
                get volume() {
                    return this.provider.volume
                }
                set volume(t) {
                    this.provider.volume(t)
                }
            }
            var T = i(393);
            class P extends Error {
                constructor(t) {
                    super(t), this.code = b._M
                }
            }
            class A {
                constructor(t, e, i) {
                    this.index = t, this.model = e, this.api = i, this.promise = new Promise(((t, e) => {
                        this.resolve = t, this.reject = e
                    })), this.async = null, this.asyncPromise = null, this.rejected = !1
                }
                set callback(t) {
                    this.async = t
                }
                get skipped() {
                    return this.rejected
                }
                run() {
                    const {
                        api: t,
                        async: e,
                        index: i,
                        model: n,
                        resolve: o,
                        reject: s,
                        promise: r
                    } = this, a = n.get("playlist"), l = this.getItem(i);
                    if (!l) {
                        const t = -1 === i ? "No recs item" : `No playlist item at index ${i}`;
                        this.rejected = !0, s(new Error(t))
                    }
                    if (e) {
                        this.clear();
                        const r = this.asyncPromise = e.call(t, l, i);
                        null != r && r.then ? r.then((t => {
                            if (t && t !== l && a === n.get("playlist")) {
                                const e = this.replace(t);
                                if (e) return void o(e)
                            }
                            o(l)
                        })).catch((t => {
                            const e = new P("Item skipped by playlist item callback");
                            e.sourceError = t, this.rejected = !0, s(e)
                        })) : this.asyncPromise = null
                    }
                    return this.asyncPromise || o(l), r
                }
                getItem(t) {
                    const {
                        model: e
                    } = this;
                    if (-1 === t) return e.get("nextUp");
                    return e.get("playlist")[t]
                }
                replace(t) {
                    const {
                        index: e,
                        model: i
                    } = this, n = (0, u.YF)(i, new T.Z(t), t.feedData || {});
                    if (n) {
                        if (-1 === e) i.set("nextUp", n);
                        else {
                            i.get("playlist")[e] = n
                        }
                        return n
                    }
                }
                clear() {
                    this.async = null
                }
                destroy() {
                    this.model = this.api = this.promise = this.resolve = this.reject = this.async = this.asyncPromise = null
                }
            }
            const F = (t, e) => {
                    t.off().on("all", e.mediaControllerListener, e)
                },
                R = t => {
                    var e;
                    return null == t || null == (e = t.sources) ? void 0 : e[0]
                };
            class B extends p.ZP {
                constructor(t, e, i) {
                    super(), this.adPlaying = !1, this.apiContext = i, this.background = function() {
                        let t = null,
                            e = null;
                        return {
                            setNext(t, i) {
                                e = {
                                    item: t,
                                    loadPromise: i
                                }
                            },
                            isNext: t => Boolean(e && JSON.stringify(e.item.sources[0]) === JSON.stringify(t.sources[0])),
                            updateNext(t) {
                                e && (e.item = t)
                            },
                            clearNext() {
                                e = null
                            },
                            get nextLoadPromise() {
                                return e ? e.loadPromise : null
                            },
                            get currentMedia() {
                                return t
                            },
                            set currentMedia(e) {
                                t = e
                            }
                        }
                    }(), this.mediaPool = e, this.mediaController = null, this.mediaControllerListener = j, this.model = t, this.providers = new m.Z(t.getConfiguration()), this.loadPromise = null, this.backgroundLoading = t.get("backgroundLoading"), this.asyncItems = [], this.itemSetContext = 0, this.backgroundLoading || t.set("mediaElement", this.mediaPool.getPrimedElement())
                }
                asyncActiveItem(t) {
                    const {
                        model: e
                    } = this, i = setTimeout((() => {
                        e.set(o.uc, o.Kb)
                    }), 50);
                    return this.getAsyncItem(t).run().then((t => (clearTimeout(i), t))).catch((n => {
                        if (clearTimeout(i), t < e.get("playlist").length - 1) return this.setActiveItem(t + 1).then((() => null));
                        throw n
                    }))
                }
                setActiveItem(t) {
                    const {
                        background: e,
                        mediaController: i,
                        model: n
                    } = this, o = n.get("playlist")[t];
                    n.attributes.itemReady = !1, i && (i.mediaModel.off(), n.attributes.mediaModel = new C, n.mediaModel.attributes = i.mediaModel.clone()), e.isNext(o) || this._destroyBackgroundMedia();
                    const s = this.itemSetContext = Math.random();
                    return this.loadPromise = this.asyncActiveItem(t).then((o => {
                        if (null === o || s !== this.itemSetContext || null === this.providers) return null;
                        n.setActiveItem(t);
                        const r = R(o);
                        if (!r) return Promise.reject(new b.rG(b.ul, b.o2));
                        if (e.isNext(o)) return this._destroyActiveMedia(), this._activateBackgroundMedia();
                        if (i) {
                            if (n.get("castActive") || this._providerCanPlay(i.provider, r)) return i.activeItem = o, this._setActiveMedia(i), i;
                            this._destroyActiveMedia()
                        }
                        return this._setupMediaController(r).then((t => {
                            if (s === this.itemSetContext) return t.activeItem = o, this._setActiveMedia(t), t
                        })).catch((t => {
                            throw this._destroyActiveMedia(), t
                        }))
                    }))
                }
                setAttached(t) {
                    const {
                        mediaController: e
                    } = this;
                    if (this.attached = t, e) {
                        if (!t) {
                            const t = e.detach(),
                                {
                                    item: i,
                                    mediaModel: n
                                } = e,
                                o = n.get("position");
                            return o && (i.starttime = o), t
                        }
                        e.attach()
                    }
                }
                playVideo(t) {
                    const {
                        mediaController: e,
                        model: i
                    } = this;
                    let n;
                    if (!i.get("playlistItem")) return Promise.reject(new Error("No media"));
                    if (t || (t = i.get("playReason")), e) n = e.play(t);
                    else {
                        i.set(o.uc, o.Kb);
                        const e = w((e => {
                            if (this.mediaController && this.mediaController.mediaModel === e.mediaModel) return e.play(t);
                            throw new Error("Playback cancelled.")
                        }));
                        n = (this.loadPromise || Promise.resolve()).catch((t => {
                            throw e.cancel(), t
                        })).then((() => e.async()))
                    }
                    return n
                }
                stopVideo() {
                    const {
                        mediaController: t,
                        model: e
                    } = this, i = e.get("playlist")[e.get("item")];
                    e.attributes.playlistItem = i, e.resetItem(i), t && t.stop()
                }
                preloadVideo() {
                    const {
                        background: t,
                        mediaController: e
                    } = this, i = e || t.currentMedia;
                    i && i.preload()
                }
                pause() {
                    const {
                        mediaController: t
                    } = this;
                    t && t.pause()
                }
                castVideo(t, e) {
                    const {
                        model: i
                    } = this;
                    i.attributes.itemReady = !1;
                    const n = Object.assign({}, e),
                        o = n.starttime = i.mediaModel.get("currentTime");
                    this._destroyActiveMedia();
                    const s = new I(t, i);
                    s.activeItem = n, this._setActiveMedia(s), i.mediaModel.set("currentTime", o)
                }
                stopCast() {
                    const {
                        model: t
                    } = this, e = t.get("item");
                    t.get("playlist")[e].starttime = t.mediaModel.get("currentTime"), this.stopVideo(), this.setActiveItem(e).catch((() => {}))
                }
                backgroundActiveMedia() {
                    this.adPlaying = !0;
                    const {
                        background: t,
                        mediaController: e
                    } = this;
                    e && (t.currentMedia && this._destroyMediaController(t.currentMedia), e.background = !0, t.currentMedia = e, this.mediaController = null)
                }
                restoreBackgroundMedia() {
                    this.adPlaying = !1;
                    const {
                        background: t,
                        mediaController: e
                    } = this, i = t.currentMedia;
                    if (!i) return;
                    if (e && e !== i) return this._destroyMediaController(i), void(t.currentMedia = null);
                    const n = i.mediaModel.attributes;
                    n.mediaState === o.bc ? n.mediaState = o._5 : n.mediaState !== o._5 && (n.mediaState = o.Kb), this._setActiveMedia(i), i.background = !1, t.currentMedia = null
                }
                backgroundLoad(t, e) {
                    const {
                        background: i
                    } = this, n = this.getAsyncItem(e).run().then((t => {
                        i.updateNext(t);
                        const e = R(t);
                        return this._setupMediaController(e).then((e => (e.activeItem = t, e.preload(), e)))
                    })).catch((() => {
                        i.clearNext()
                    }));
                    i.setNext(t, n)
                }
                forwardEvents() {
                    const {
                        mediaController: t
                    } = this;
                    t && F(t, this)
                }
                routeEvents(t) {
                    const {
                        mediaController: e
                    } = this;
                    e && (e.off(), t && F(e, t))
                }
                destroy() {
                    this.off(), this._destroyBackgroundMedia(), this._destroyActiveMedia(), this.asyncItems && this.asyncItems.forEach((t => {
                        t && t.destroy()
                    })), this.asyncItems = this.loadPromise = this.mediaControllerListener = this.model = this.providers = this.apiContext = null
                }
                _setActiveMedia(t) {
                    const {
                        model: e
                    } = this, {
                        mediaModel: i,
                        provider: n
                    } = t;
                    ((t, e) => {
                        const i = t.get("mediaContainer");
                        i ? e.container = i : t.once("change:mediaContainer", ((t, i) => {
                            e.container = i
                        }))
                    })(e, t), this.mediaController = t, e.set("mediaElement", t.mediaElement), e.setMediaModel(i), e.setProvider(n), F(t, this), e.set("itemReady", !0)
                }
                _destroyActiveMedia() {
                    const {
                        mediaController: t,
                        model: e
                    } = this;
                    t && t.provider && (t.detach(), this._destroyMediaController(t), e.resetProvider(), this.mediaController = null)
                }
                _destroyBackgroundMedia() {
                    const {
                        background: t
                    } = this;
                    this._destroyMediaController(t.currentMedia), t.currentMedia = null, this._destroyBackgroundLoadingMedia()
                }
                _destroyMediaController(t) {
                    const {
                        mediaPool: e
                    } = this;
                    t && t.provider && (e.recycle(t.mediaElement), t.destroy())
                }
                _setupMediaController(t) {
                    const {
                        model: e,
                        providers: i
                    } = this, n = t => new I(new t(e.get("id"), e.getConfiguration(), this.primedElement), e), {
                        provider: o,
                        name: s
                    } = i.choose(t);
                    return o ? Promise.resolve(n(o)) : i.load(s).then((t => n(t)))
                }
                _activateBackgroundMedia() {
                    const {
                        background: t,
                        background: {
                            nextLoadPromise: e
                        },
                        model: i
                    } = this;
                    return this._destroyMediaController(t.currentMedia), t.currentMedia = null, e.then((e => {
                        if (e) return t.clearNext(), this.adPlaying ? (i.attributes.itemReady = !0, t.currentMedia = e) : (this._setActiveMedia(e), e.background = !1), e
                    }))
                }
                _destroyBackgroundLoadingMedia() {
                    const {
                        background: t,
                        background: {
                            nextLoadPromise: e
                        }
                    } = this;
                    e && e.then((e => {
                        this._destroyMediaController(e), t.clearNext()
                    }))
                }
                _providerCanPlay(t, e) {
                    const {
                        provider: i
                    } = this.providers.choose(e);
                    return i && t && t instanceof i
                }
                get audioTracks() {
                    const {
                        mediaController: t
                    } = this;
                    if (t) return t.audioTracks
                }
                get mediaElement() {
                    if (this.mediaController) return this.mediaController.mediaElement
                }
                get beforeComplete() {
                    const {
                        mediaController: t,
                        background: {
                            currentMedia: e
                        }
                    } = this;
                    return !(!t && !e) && (t ? t.beforeComplete : e.beforeComplete)
                }
                get primedElement() {
                    if (!this.backgroundLoading) {
                        const {
                            model: t
                        } = this;
                        return t.get("mediaElement")
                    }
                    return this.mediaPool.getPrimedElement()
                }
                get qualities() {
                    const {
                        mediaController: t
                    } = this;
                    return t ? t.qualities : null
                }
                get audioTrack() {
                    const {
                        mediaController: t
                    } = this;
                    return t ? t.audioTrack : -1
                }
                set audioTrack(t) {
                    const {
                        mediaController: e
                    } = this;
                    e && (e.audioTrack = parseInt(t, 10) || 0)
                }
                get position() {
                    return this.mediaController.position
                }
                set position(t) {
                    const {
                        mediaController: e
                    } = this;
                    e && (e.item.starttime = t, e.attached && (e.position = t))
                }
                get quality() {
                    return this.mediaController ? this.mediaController.quality : -1
                }
                set quality(t) {
                    const {
                        mediaController: e
                    } = this;
                    e && (e.quality = parseInt(t, 10) || 0)
                }
                set subtitles(t) {
                    const {
                        mediaController: e
                    } = this;
                    e && (e.subtitles = t)
                }
                get subtitles() {
                    return this.mediaController.subtitles
                }
                setMute(t) {
                    const {
                        background: e,
                        mediaController: i,
                        mediaPool: n
                    } = this;
                    i && (i.mute = t), e.currentMedia && (e.currentMedia.mute = t), n.syncMute(t)
                }
                setVolume(t) {
                    const {
                        background: e,
                        mediaController: i,
                        mediaPool: n
                    } = this;
                    i && (i.volume = t), e.currentMedia && (e.currentMedia.volume = t), n.syncVolume(t)
                }
                set itemCallback(t) {
                    this.model.set("playlistItemCallback", t), this.asyncItems.forEach((e => {
                        e && (e.callback = t)
                    }))
                }
                get itemCallback() {
                    return this.model.get("playlistItemCallback")
                }
                getAsyncItem(t) {
                    let e = this.asyncItems[t];
                    return e || (e = this.asyncItems[t] = new A(t, this.model, this.apiContext), e.callback = this.model.get("playlistItemCallback")), e
                }
                clearItemPromises() {
                    this.asyncItems.forEach((t => {
                        t && t.reject(new Error("Item playback aborted"))
                    })), this.asyncItems.length = 0
                }
            }
            const O = B,
                L = t => t === o.xQ || t === o.Vy ? o.bc : t;

            function V(t, e, i) {
                if ((e = L(e)) !== (i = L(i))) {
                    const n = e.replace(/(?:ing|d)$/, ""),
                        s = ((t, e) => t === o.Kb ? e === o.nQ ? e : o.ik : e)(e, t.mediaModel.get("mediaState")),
                        r = {
                            type: n,
                            newstate: e,
                            oldstate: i,
                            reason: s
                        };
                    "play" === n ? r.playReason = t.get("playReason") : "pause" === n && (r.pauseReason = t.get("pauseReason")), this.trigger(n, r)
                }
            }
            var Z = i(4609);
            class z extends O {
                constructor(t, e) {
                    super(t, e);
                    const i = this.model = new E;
                    this.playerModel = t, this.provider = null, this.backgroundLoading = t.get("backgroundLoading"), i.mediaModel.attributes.mediaType = "video"; {
                        let n;
                        if (this.backgroundLoading) n = e.getAdElement();
                        else {
                            n = t.get("mediaElement"), i.attributes.mediaElement = n, i.attributes.mediaSrc = n.src;
                            const e = this.srcResetListener = () => {
                                this.srcReset()
                            };
                            n.addEventListener("emptied", e), n.playbackRate = n.defaultPlaybackRate = 1
                        }
                        this.mediaPool = (0, Z.Z)(n, e)
                    }
                }
                setup() {
                    const {
                        model: t,
                        playerModel: e,
                        primedElement: i
                    } = this, n = e.attributes, s = e.mediaModel;
                    t.setup({
                        id: n.id,
                        volume: n.volume,
                        instreamMode: !0,
                        edition: n.edition,
                        mediaContext: s,
                        mute: n.mute,
                        streamType: "VOD",
                        autostartMuted: n.autostartMuted,
                        autostart: n.autostart,
                        advertising: n.advertising,
                        sdkplatform: n.sdkplatform,
                        skipButton: !1
                    }), t.on("change:state", V, this), t.on(o.pn, (function(t) {
                        this.trigger(o.pn, t)
                    }), this), i.paused || i.pause()
                }
                setActiveItem(t) {
                    return this.adPlaying = !0, this.stopVideo(), this.provider = null, super.setActiveItem(t).then((t => (this.trigger(o.$_), this._setProvider(t.provider), this.playVideo())))
                }
                usePsuedoProvider(t) {
                    t && (this._setProvider(t), t.off(o.pn), t.on(o.pn, (function(t) {
                        this.trigger(o.pn, t)
                    }), this))
                }
                _setProvider(t) {
                    if (!t || !this.mediaPool) return;
                    this.provider = t;
                    const {
                        model: e,
                        playerModel: i
                    } = this, n = "vpaid" === t.type;
                    t.off(), t.on("all", (function(t, e) {
                        n && t === o.Ms || this.trigger(t, Object.assign({}, e, {
                            type: t
                        }))
                    }), this);
                    const s = e.mediaModel;
                    t.on(o.uc, (t => {
                        t.oldstate = t.oldstate || e.get(o.uc), s.set("mediaState", t.newstate)
                    })), t.on(o.h7, this._nativeFullscreenHandler, this), s.on("change:mediaState", ((t, e) => {
                        this._stateHandler(e)
                    })), t.attachMedia(), t.volume(i.get("volume")), t.mute(i.getMute()), t.setPlaybackRate && t.setPlaybackRate(1), i.on("change:volume", (function(t, e) {
                        this.volume = e
                    }), this), i.on("change:mute", (function(t, e) {
                        this.mute = e, e || (this.volume = i.get("volume"))
                    }), this), i.on("change:autostartMuted", (function(t, n) {
                        n || (e.set("autostartMuted", n), this.mute = i.get("mute"))
                    }), this)
                }
                destroy() {
                    this.adPlaying = !1;
                    const {
                        model: t,
                        mediaPool: e,
                        playerModel: i
                    } = this;
                    t.off(), this.provider = null;
                    const n = e.getPrimedElement();
                    if (this.backgroundLoading) {
                        e.clean();
                        const t = i.get("mediaContainer");
                        n.parentNode === t && t.removeChild(n)
                    } else n && (n.removeEventListener("emptied", this.srcResetListener), n.src !== t.get("mediaSrc") && this.srcReset())
                }
                srcReset() {
                    const {
                        playerModel: t
                    } = this, e = t.get("mediaModel"), i = t.getVideo();
                    e.srcReset(), i && (i.src = null)
                }
                _nativeFullscreenHandler(t) {
                    this.model.trigger(o.h7, t), this.trigger(o.UW, {
                        fullscreen: t.jwstate
                    })
                }
                _stateHandler(t) {
                    const {
                        model: e
                    } = this;
                    switch (t) {
                        case o.r0:
                        case o._5:
                            e.set(o.uc, t)
                    }
                }
                get mute() {
                    return this.provider.getMute()
                }
                set mute(t) {
                    const {
                        mediaController: e,
                        model: i,
                        provider: n
                    } = this;
                    i.set("mute", t), super.setMute(t), e || n.mute(t)
                }
                get volume() {
                    return this.provider.volume
                }
                set volume(t) {
                    const {
                        mediaController: e,
                        model: i,
                        provider: n
                    } = this;
                    i.set("volume", t), super.setVolume(t), e || n.volume(t)
                }
            }
            const H = {
                    skipoffset: null,
                    tag: null
                },
                $ = function(t, e, i, n) {
                    let s, r, a = new z(e, n),
                        l = 0,
                        c = {},
                        d = null,
                        u = {};
                    const p = () => {
                            l++, this.loadItem(s).catch((function() {}))
                        },
                        m = function(t) {
                            c = {}, s && l + 1 < s.length ? p() : (t.type === o.Ms && this.trigger(o.V$, {}), this.destroy())
                        },
                        f = function(t) {
                            const e = {};
                            u.tag && (e.tag = u.tag), this.trigger(o.Ms, e), m.call(this, t)
                        };
                    let w, b, y = m,
                        v = !1,
                        j = !1,
                        k = !1,
                        _ = !1;
                    const x = t => {
                            j || ((t = t || {}).hasControls = Boolean(e.get("controls")), this.trigger(o.l5, t), a.model.get("state") === o._5 ? t.hasControls && a.playVideo().catch((function() {})) : a.pause())
                        },
                        M = () => {
                            j || a.model.get("state") === o._5 && e.get("controls") && (t.setFullscreen(), t.play())
                        },
                        C = function(e) {
                            const {
                                duration: i,
                                position: n
                            } = e, o = a.model.mediaModel || a.model;
                            o.set("duration", i), o.set("position", n), b || (b = ((0, g.U5)(w, i) || i) - h.l_), !v && n >= Math.max(b, h.HB) && (t.preloadNextItem(), v = !0)
                        },
                        S = function(t, e) {
                            "complete" !== t && (e = e || {}, u.tag && !e.tag && (e.tag = u.tag), this.trigger(t, e), "mediaError" !== t && "error" !== t || this.loadNextItemOnError())
                        },
                        E = function() {
                            a.model.set("playRejected", !0)
                        },
                        I = function(n) {
                            n.width && n.height && i && i.resizeMedia(), e.get("pip") && t.requestPip(a.primedElement)
                        },
                        T = function(e) {
                            const {
                                newstate: i
                            } = e;
                            i === o.r0 ? t.trigger(o.WE, e) : i === o._5 && t.trigger(o.Ax, e)
                        },
                        P = function(t) {
                            const {
                                newstate: e
                            } = t, i = t.oldstate || a.model.get("state");
                            i !== e && T(Object.assign({
                                oldstate: i
                            }, c, t))
                        };
                    this.init = function() {
                        if (!k && !j) {
                            k = !0, c = {}, a.setup(), a.on("all", S, this), a.on(o.Je, E, this), a.on(o.R2, C, this), a.on(o.Ms, f, this), a.on(o.rx, I, this), a.on(o.uc, P, this), d = t.detachMedia(); {
                                const t = a.primedElement;
                                e.get("mediaContainer").appendChild(t)
                            }
                            if (e.set("instream", a), a.model.set("state", o.Kb), i) {
                                const t = i.clickHandler();
                                t && t.setAlternateClickHandlers((() => {}), null)
                            }
                            return this.setText(e.get("localization").loadingAd), _ = t.isBeforeComplete() || e.get("state") === o.xQ, this
                        }
                    };
                    const A = n => {
                        if (!i) return;
                        const s = i.clickHandler();
                        s && s.setAlternateClickHandlers((i => {
                            j || ((i = i || {}).hasControls = Boolean(e.get("controls")), this.trigger(o.l5, i), n && (e.get("state") === o._5 ? t.playVideo() : (t.pause(), n && (t.trigger(o.Rt, {
                                clickThroughUrl: n
                            }), window.open(n)))))
                        }), null)
                    };
                    this.enableAdsMode = function(i) {
                        if (!k && !j) return t.routeEvents({
                            mediaControllerListener: (t, e) => {
                                this.trigger(t, e)
                            }
                        }), e.set("instream", a), a.model.set("state", o.r0), A(i), this
                    }, this.setEventData = function(t) {
                        c = t
                    }, this.setState = function(t) {
                        const {
                            newstate: e
                        } = t, i = a.model;
                        t.oldstate = i.get("state"), i.set("state", e), T(t)
                    }, this.setTime = function(e) {
                        C(e), t.trigger(o.uL, e)
                    }, this.loadNextItemOnError = function() {
                        s && l + 1 < s.length && p()
                    };
                    const F = function() {
                        !j && i && i.clickHandler() && i.clickHandler().setAlternateClickHandlers(x, M)
                    };
                    this.loadItem = (t, i) => {
                        if (j || !k) return Promise.reject(new Error("Instream not setup"));
                        c = {};
                        let n = t;
                        Array.isArray(t) ? (s = t, r = i || r, t = s[l], r && (i = r[l])) : n = [t];
                        const h = a.model;
                        h.set("playlist", n), e.set("hideAdsControls", !1), t.starttime = 0, this.trigger(o.gO, {
                            index: l,
                            item: t
                        }), u = Object.assign({}, H, i), F(), h.set("skipButton", !1);
                        const g = !e.get("backgroundLoading") && d ? d.then((() => a.setActiveItem(l))) : a.setActiveItem(l);
                        return v = !1, w = t.skipoffset || u.skipoffset, void 0 !== w && this.setupSkipButton(w, u), g
                    }, this.setupSkipButton = function(t, e, i) {
                        const n = a.model;
                        y = i || m, n.set("skipMessage", e.skipMessage), n.set("skipText", e.skipText), n.set("skipOffset", t), n.attributes.skipButton = !1, n.set("skipButton", !0)
                    }, this.applyProviderListeners = function(t) {
                        a.usePsuedoProvider(t), F()
                    }, this.play = function() {
                        c = {}, a.playVideo()
                    }, this.pause = function() {
                        c = {}, a && a.pause()
                    }, this.skipAd = function(t) {
                        const i = e.get("autoPause").pauseAds,
                            n = "autostart" === e.get("playReason"),
                            s = e.get("viewable");
                        !i || n || s || (this.noResume = !0);
                        const r = o.k3;
                        this.trigger(r, t), y.call(this, {
                            type: r
                        })
                    }, this.replacePlaylistItem = function(t) {
                        j || (e.set("playlistItem", t), a.srcReset())
                    }, this.destroy = () => {
                        j || (j = !0, this.trigger("destroyed"), this.off(), null != i && null != i.clickHandler && i.clickHandler() && i.clickHandler().revertAlternateClickHandlers(), e.off(null, null, a), a.off(null, null, this), a.destroy(), k && a.model && (e.attributes.state = o._5), t.forwardEvents(), e.set("instream", null), a = null, c = {}, d = null, k && !e.attributes._destroyed && (t.attachMedia(), e.get("pip") && t.requestPip(), this.noResume || (_ ? t.stopVideo() : t.playVideo())))
                    }, this.getState = function() {
                        return !j && a.model.get("state")
                    }, this.setText = function(t) {
                        return j || !i || i.setAltText(t || ""), this
                    }, this.hide = function() {
                        j || e.set("hideAdsControls", !0)
                    }, this.getMediaElement = function() {
                        return j ? null : a.primedElement
                    }, this.setSkipOffset = function(t) {
                        w = t > 0 ? t : null, a && a.model.set("skipOffset", w)
                    }
                };
            Object.assign($.prototype, p.ZP);
            const N = $;
            var q = i(6103),
                D = i(8377);
            class U {
                constructor(t) {
                    this._model = t, this._tracks = [], this._tracksById = {}, this._unknownCount = 0, this._defaultIndex = 0, this._model.on("change:playlistItem", (t => {
                        this._tracks = [], this._tracksById = {}, this._unknownCount = 0;
                        const e = t.attributes;
                        e.captionsIndex = 0, e.captionsList = this._captionsMenu(), t.set("captionsTrack", null)
                    }), this), this._model.on("change:itemReady", (() => {
                        this._model.get("castActive") && (this._tracks = [], this._tracksById = {}, this._unknownCount = 0);
                        const t = this._model.get("playlistItem").tracks,
                            e = null == t ? void 0 : t.length;
                        if (e && !this._model.get("renderCaptionsNatively"))
                            for (let i = 0; i < e; i++) {
                                const e = t[i];
                                e.includedInManifest || !this._kindSupported(e.kind) || this._tracksById[e._id] || (e.sideloaded = !0, this._addTrack(e), (0, q.xl)(e, (t => {
                                    this._addVTTCuesToTrack(e, t)
                                }), (t => {
                                    this.trigger(o.cM, t)
                                })))
                            }
                        this._setCaptionsList()
                    }), this), this._model.on("change:captionsIndex", ((t, e) => {
                        let i = null;
                        0 !== e && (i = this._tracks[e - 1]), t.set("captionsTrack", i)
                    }), this)
                }
                setSubtitlesTracks(t) {
                    Array.isArray(t) && (t.length ? (t.forEach((t => this._addTrack(t))), this._tracks.sort(((e, i) => {
                        const n = t.indexOf(e);
                        if (-1 === n) return 1;
                        const o = t.indexOf(i);
                        return -1 === o ? -1 : n - o
                    }))) : (this._tracks = [], this._tracksById = {}, this._unknownCount = 0), this._setCaptionsList())
                }
                _kindSupported(t) {
                    return "subtitles" === t || "captions" === t
                }
                _addVTTCuesToTrack(t, e) {
                    t.data = e
                }
                _addTrack(t) {
                    t.data = t.data || [], t.name = t.label || t.name || t.language;
                    const e = (0, D.M)(t, this._tracks.length);
                    if (!t.name) {
                        const e = (0, D._)(t, this._unknownCount);
                        t.name = e.label, this._unknownCount = e.unknownCount
                    }
                    t._id = e, this._tracksById[e] = t, this._tracks = this._tracks.filter((t => t._id !== e)), this._tracks.push(t)
                }
                _captionsMenu() {
                    const t = [{
                        id: "off",
                        label: "Off"
                    }];
                    this._model.get("castActive") && (this._tracks = this._tracks.filter((t => -1 !== t._id.indexOf("nativesubtitles"))));
                    for (let e = 0; e < this._tracks.length; e++) t.push({
                        id: this._tracks[e]._id,
                        label: this._tracks[e].name || "Unknown CC",
                        language: this._tracks[e].subtitleTrack ? this._tracks[e].subtitleTrack.lang : this._tracks[e].language
                    });
                    return t
                }
                selectDefaultIndex(t) {
                    let e = this._defaultIndex = t;
                    const i = this._model.get("captionLabel");
                    if ("Off" !== i) {
                        for (let t = 0; t < this._tracks.length; t++) {
                            const n = this._tracks[t];
                            if (i && i === n.name) {
                                e = t + 1;
                                break
                            }
                            n.default || n.defaulttrack || "default" === n._id ? e = t + 1 : n.autoselect
                        }
                        this._setCurrentIndex(e)
                    } else this._model.set("captionsIndex", 0)
                }
                _setCurrentIndex(t) {
                    this._tracks.length ? this._model.setVideoSubtitleTrack(t, this._tracks) : this._model.set("captionsIndex", t)
                }
                _setCaptionsList() {
                    const t = this._captionsMenu();
                    this.listIdentity(t) !== this.listIdentity(this._model.get("captionsList")) && (this._model.set("captionsList", t), this.selectDefaultIndex(this._defaultIndex))
                }
                listIdentity(t) {
                    return t.map((t => `${t.id}-${t.label}`)).join(",")
                }
                getCurrentIndex() {
                    return this._model.get("captionsIndex")
                }
                getCaptionsList() {
                    return this._model.get("captionsList")
                }
                destroy() {
                    this.off(null, null, this)
                }
            }
            Object.assign(U.prototype, p.ZP);
            const W = U;
            var Q = i(4225);
            var Y = i(4671);
            const J = t => {
                    try {
                        return t.getBoundingClientRect()
                    } catch (t) {}
                },
                X = (t, e) => {
                    const i = Math.max(t.top, e.top),
                        n = Math.min(t.bottom, e.bottom),
                        o = Math.max(t.left, e.left),
                        s = Math.min(t.right, e.right),
                        r = s - o,
                        a = n - i;
                    return r >= 0 && a >= 0 && {
                        top: i,
                        bottom: n,
                        left: o,
                        right: s,
                        width: r,
                        height: a
                    }
                };

            function K(t, e) {
                if (t.get("fullscreen")) return 1;
                if (!t.get("activeTab")) return 0;
                if (t.get("isFloating")) return 1;
                let i = t.get("intersectionRatio");
                return void 0 === i && (i = (t => {
                    const e = document.documentElement,
                        i = document.body,
                        n = {
                            top: 0,
                            left: 0,
                            right: e.clientWidth || i.clientWidth,
                            width: e.clientWidth || i.clientWidth,
                            bottom: e.clientHeight || i.clientHeight,
                            height: e.clientHeight || i.clientHeight
                        };
                    if (!i.contains(t)) return 0;
                    if ("none" === window.getComputedStyle(t).display) return 0;
                    const o = J(t);
                    if (!o) return 0;
                    let s = o,
                        r = t.parentNode,
                        a = !1;
                    for (; !a;) {
                        let t = null;
                        if (r === i || r === e || 1 !== r.nodeType ? (a = !0, t = n) : "visible" !== window.getComputedStyle(r).overflow && (t = J(r)), t && (s = X(t, s), !s)) return 0;
                        r = r.parentNode
                    }
                    const l = o.width * o.height,
                        c = s.width * s.height;
                    return l ? c / l : 0
                })(e), window.top !== window.self && i) ? 0 : i
            }
            var G = i(6875),
                tt = i(1776),
                et = i(6436),
                it = i(8446),
                nt = i(4601),
                ot = i(2799),
                st = i(2268),
                rt = i(974);
            const at = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
            var lt = i(7010);
            let ct, dt = {};

            function ut(t, e, i) {
                const n = function(t, e, i) {
                        const n = t.requestFullscreen || t.webkitRequestFullscreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullscreen,
                            o = e.exitFullscreen || e.webkitExitFullscreen || e.webkitCancelFullScreen || e.mozCancelFullScreen || e.msExitFullscreen,
                            s = Boolean(n && o);
                        for (let t = at.length; t--;) e.addEventListener(at[t], i);
                        return {
                            events: at,
                            supportsDomFullscreen: () => s,
                            requestFullscreen() {
                                n.call(t, {
                                    navigationUI: "hide"
                                })
                            },
                            exitFullscreen() {
                                null !== this.fullscreenElement() && o.apply(e)
                            },
                            fullscreenElement() {
                                const {
                                    fullscreenElement: t,
                                    webkitCurrentFullScreenElement: i,
                                    mozFullScreenElement: n,
                                    msFullscreenElement: o
                                } = e;
                                return null === t ? t : t || i || n || o
                            },
                            destroy() {
                                for (let t = at.length; t--;) e.removeEventListener(at[t], i)
                            }
                        }
                    }(t, e, i),
                    o = dt.requestFullscreen || n.requestFullscreen,
                    s = dt.exitFullscreen || n.exitFullscreen,
                    r = ct || (() => (0, lt.Z)() && !k.OS.iOS && !k.Browser.safari);
                return n.requestFullscreen = function() {
                    if (!r()) return o.call(n)
                }, n.exitFullscreen = function() {
                    if (!r()) return s.call(n)
                }, n
            }
            var ht = i(5882);
            class gt extends p.ZP {
                constructor(t, e) {
                    super(), this.revertAlternateClickHandlers(), this.domElement = e, this.model = t, this.ui = new ht.ZP(e).on("click", this.clickHandler, this).on("doubleClick", (function() {
                        this.alternateDoubleClickHandler ? this.alternateDoubleClickHandler() : this.trigger("doubleClick")
                    }), this)
                }
                destroy() {
                    this.ui && (this.ui.destroy(), this.ui = null, this.domElement = null, this.model = null, this.revertAlternateClickHandlers())
                }
                clickHandler(t) {
                    this.model && (this.alternateClickHandler ? this.alternateClickHandler(t) : this.trigger(o.ot))
                }
                element() {
                    return this.domElement
                }
                setAlternateClickHandlers(t, e) {
                    this.alternateClickHandler = t, this.alternateDoubleClickHandler = e || null
                }
                revertAlternateClickHandlers() {
                    this.alternateClickHandler = null, this.alternateDoubleClickHandler = null
                }
            }
            var pt = i(1831);
            var mt = i(5646);
            const ft = {
                linktarget: "_blank",
                margin: 8,
                hide: !1,
                position: "top-right"
            };

            function wt(t) {
                let e, i;
                Object.assign(this, p.ZP);
                const n = new Image;
                this.setup = function() {
                    var s, r;
                    (i = Object.assign({}, ft, t.get("logo")), i.position = i.position || ft.position, i.hide = "true" === i.hide.toString(), i.file && "control-bar" !== i.position) && (e || (e = (0, ot.az)((s = i.position, r = i.hide, `<div class="jw-logo jw-logo-${s}${r?" jw-hide":""} jw-reset"></div>`))), t.set("logo", i), n.onload = function() {
                        let n = this.height,
                            o = this.width;
                        const s = {
                            backgroundImage: `url("${this.src}")`
                        };
                        if (i.margin !== ft.margin) {
                            const t = /(\w+)-(\w+)/.exec(i.position);
                            3 === t.length && (s[`margin-${t[1]}`] = i.margin, s[`margin-${t[2]}`] = i.margin)
                        }
                        const r = .15 * t.get("containerHeight"),
                            a = .15 * t.get("containerWidth");
                        if (n > r || o > a) {
                            const t = o / n;
                            a / r > t ? (n = r, o = r * t) : (o = a, n = a / t)
                        }
                        s.width = Math.round(o), s.height = Math.round(n), (0, rt.oB)(e, s), t.set("logoWidth", s.width)
                    }, n.src = i.file, i.link && (e.setAttribute("tabindex", "0"), e.setAttribute("aria-label", t.get("localization").logo)), this.ui = (0, mt.Z)(e, (function() {
                        this.trigger(o.Ib, {
                            link: i.link,
                            linktarget: i.linktarget
                        })
                    }), this))
                }, this.setContainer = function(t) {
                    e && t.appendChild(e)
                }, this.element = function() {
                    return e
                }, this.position = function() {
                    return i.position
                }, this.destroy = function() {
                    n.onload = null, this.ui && this.ui.destroy()
                }
            }
            const bt = class {
                constructor(t) {
                    this.model = t, this.image = null
                }
                setup(t) {
                    this.el = t, this.hasZoomThumbnail = this.model.get("_abZoomThumbnail"), this.hasZoomThumbnail && (this.zoomOriginX = `${Math.ceil(100*Math.random())}%`, this.zoomOriginY = `${Math.ceil(100*Math.random())}%`, this.model.on("change:viewable", this.pauseZoomThumbnail, this), this.model.on("change:isFloating", this.enableZoomThumbnail, this))
                }
                setImage(t) {
                    let e = this.image;
                    e && (e.onload = null), this.image = null;
                    let i = "";
                    "string" == typeof t && t.length > 0 && (i = `url("${t}")`, e = this.image = new Image, e.src = t), this.hasZoomThumbnail ? (this.imageEl = document.createElement("div"), (0, rt.oB)(this.imageEl, {
                        backgroundImage: i
                    }), this.el && this.el.appendChild(this.imageEl), this.enableZoomThumbnail()) : (0, rt.oB)(this.el, {
                        backgroundImage: i
                    })
                }
                enableZoomThumbnail() {
                    this.hasZoomThumbnail && !this.model.get("isFloating") && (clearTimeout(this.zoomThumbnailTimeout), this.zoomThumbnailTimeout = window.setTimeout((() => {
                        this.imageEl && (this.imageEl.classList.add("jw-ab-zoom-thumbnail"), this.imageEl.style.transformOrigin = `${this.zoomOriginX} ${this.zoomOriginY}`)
                    }), 2e3))
                }
                pauseZoomThumbnail() {
                    clearTimeout(this.zoomThumbnailTimeout), this.imageEl && (this.imageEl.style.animationPlayState = this.model.get("viewable") ? "running" : "paused")
                }
                removeZoomThumbnail() {
                    clearTimeout(this.zoomThumbnailTimeout), this.imageEl && this.imageEl.classList.remove("jw-ab-zoom-thumbnail")
                }
                resize(t, e, i) {
                    if ("uniform" === i) {
                        if (t && (this.playerAspectRatio = t / e), !this.playerAspectRatio || !this.image || "complete" !== (n = this.model.get("state")) && "idle" !== n && "error" !== n && "buffering" !== n) return;
                        const o = this.image;
                        let s = null;
                        if (o) {
                            if (0 === o.width) return void(o.onload = () => {
                                this.resize(t, e, i)
                            });
                            const n = o.width / o.height;
                            Math.abs(this.playerAspectRatio - n) < .09 && (s = "cover")
                        }(0, rt.oB)(this.el, {
                            backgroundSize: s
                        })
                    }
                    var n
                }
                element() {
                    return this.el
                }
                destroy() {
                    this.hasZoomThumbnail && (this.removeZoomThumbnail(), this.model.off(null, null, this))
                }
            };
            var yt = i(3296);
            const vt = function(t) {
                let e = new bt(t),
                    i = !t.get("autostart");
                const n = e.setImage.bind(e);
                return e = Object.assign(e, p.ZP), e.deferSetImage = (n, s, r) => {
                    t.once("change:playRejected change:autostart", (() => {
                        t.get("state") === o.bc && (i = !0, e.setImage(n, s, r))
                    }))
                }, e.setImage = (o, s, r) => {
                    if (t.get("isAudioFile") && (i = !0), !i) return e.deferSetImage(o, s, r);
                    if (n(o), s) {
                        new yt.Z("posterItem", e.el, r, t, (() => {
                            e.trigger("videoThumbnailFirstFrame", {
                                feedData: r.feedData,
                                target: r,
                                ui: "poster",
                                viewable: t.get("viewable")
                            })
                        })).init()
                    }
                }, e
            };
            var jt = i(5187);
            const kt = (t, e, i) => t - e - i,
                _t = (t, e, i, n, o) => Math.max(Math.min(t + e - i, n), o),
                xt = (t, e) => (0, rt.oB)(t, {
                    willChange: e
                });
            class Mt {
                constructor(t) {
                    this.container = t
                }
                disable() {
                    var t, e, i, n;
                    this.container && ((0, ot.IV)(this.container, "jw-floating-dragged"), (0, ot.IV)(this.container, "jw-floating-dragging"), xt(this.container, "auto")), this.uiMedia = null == this || null == (t = this.uiMedia) || null == t.destroy ? void 0 : t.destroy(), this.uiBar = null == this || null == (e = this.uiBar) || null == e.destroy ? void 0 : e.destroy(), this.uiTitle = null == this || null == (i = this.uiTitle) || null == i.destroy ? void 0 : i.destroy(), this.uiIcon = null == this || null == (n = this.uiIcon) || null == n.destroy ? void 0 : n.destroy()
                }
                enable() {
                    this.inputMedia = this.container.querySelector(".jw-media"), this.inputBar = this.container.querySelector(".jw-float-bar"), this.inputTitle = this.container.querySelector(".jw-float-bar-title"), this.inputIcon = this.container.querySelector(".jw-float-bar-icon"), this.x = 0, this.y = 0, this.uiMedia = new ht.ZP(this.inputMedia, {
                        preventScrolling: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiBar = new ht.ZP(this.inputBar, {
                        preventScrolling: !0,
                        directSelect: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiTitle = new ht.ZP(this.inputTitle, {
                        preventScrolling: !0,
                        directSelect: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiIcon = new ht.ZP(this.inputIcon, {
                        preventScrolling: !0,
                        directSelect: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this)
                }
                dragStart(t) {
                    const {
                        pageX: e,
                        pageY: i
                    } = t, {
                        innerWidth: n,
                        innerHeight: o
                    } = window, s = this.container.querySelector(".jw-float-bar"), r = (null == s ? void 0 : s.offsetHeight) || 0, {
                        offsetLeft: a,
                        offsetTop: l,
                        offsetWidth: c,
                        offsetHeight: d
                    } = this.container;
                    this.startX = e, this.startY = i, this.minDeltaX = -a, this.minDeltaY = -l, this.maxDeltaX = kt(n, a, c), this.maxDeltaY = kt(o, l, d + r), (0, ot.cn)(this.container, "jw-floating-dragged"), (0, ot.cn)(this.container, "jw-floating-dragging"), xt(this.container, "transform")
                }
                drag(t) {
                    const {
                        pageX: e,
                        pageY: i
                    } = t;
                    this.deltaX = _t(this.x, e, this.startX, this.maxDeltaX, this.minDeltaX), this.deltaY = _t(this.y, i, this.startY, this.maxDeltaY, this.minDeltaY), (0, rt.vs)(this.container, `translate(${this.deltaX}px, ${this.deltaY}px)`)
                }
                dragEnd() {
                    (0, ot.IV)(this.container, "jw-floating-dragging"), xt(this.container, "auto"), this.x = this.deltaX, this.y = this.deltaY
                }
            }
            const Ct = function(t, e, i, n) {
                    const o = {
                        width: e
                    };
                    if (n && void 0 !== i && t.set("aspectratio", null), !t.get("aspectratio")) {
                        let t = i;
                        (0, y.hj)(t) && 0 !== t && (t = Math.max(t, 44)), o.height = t
                    }
                    return o
                },
                St = [],
                Et = t => {
                    const e = St.indexOf(t); - 1 !== e && St.splice(e, 1)
                };
            let It = null;
            const Tt = {
                floatingPlayer: It
            };
            Object.defineProperty(Tt, "floatingPlayer", {
                get: () => It,
                set: t => {
                    if (t === It) return;
                    It = t;
                    const e = St.slice();
                    St.length = 0, e.forEach((t => {
                        t.startFloating()
                    }))
                }
            });
            class Pt {
                constructor(t, e, i, n = k.OS.mobile) {
                    this._playerEl = i.player, this._wrapperEl = i.wrapper, this._preview = i.preview, this._model = t, this._floatingUI = new Mt(this._wrapperEl), this._floatingStoppedForever = !1, this._lastIntRatio = 0, this._playerBounds = e, this._isMobile = n, this._mobileCheckCanFire = !0, this._inTransition = !1, this._boundThrottledMobileFloatScrollHandler = this.throttledMobileFloatScrollHandler.bind(this), this._boundInitFloatingBehavior = this.initFloatingBehavior.bind(this)
                }
                setup() {
                    this._model.change("floating", this._boundInitFloatingBehavior)
                }
                initFloatingBehavior() {
                    if (!this._floatingStoppedForever && (Y.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler), Et(this), this.getFloatingConfig())) {
                        const t = this.getFloatMode();
                        "notVisible" === t ? this._isMobile ? (Y.Z.addScrollHandler(this._boundThrottledMobileFloatScrollHandler), this._boundThrottledMobileFloatScrollHandler()) : this.checkFloatIntersection() : "always" === t ? this.startFloating() : "never" === t && this.stopFloating()
                    }
                }
                updatePlayerBounds(t) {
                    this._playerBounds = t
                }
                getFloatingConfig() {
                    return this._model.get("floating")
                }
                getFloatMode() {
                    const t = this.getFloatingConfig();
                    return (null == t ? void 0 : t.mode) || "notVisible"
                }
                resize() {
                    this._model.get("isFloating") && this.updateFloatingSize()
                }
                fosMobileBehavior() {
                    return this._isMobile && !(0, ot.UM)() && !this._model.get("fullscreen")
                }
                shouldFloatOnViewable() {
                    const t = this._model.get("state");
                    return t !== o.bc && t !== o.Vy && t !== o.xQ
                }
                startFloating(t) {
                    const e = this._playerBounds;
                    if (null !== this.getFloatingPlayer() || !this._wrapperEl.querySelector(".jw-float-bar") && this._model.get("controlsEnabled")) this.getFloatingPlayer() !== this._playerEl && "always" === this.getFloatMode() && (i = this, -1 === St.indexOf(i) && St.push(i));
                    else {
                        this.setFloatingPlayer(this._playerEl), this.transitionFloating(!0), this._model.set("isFloating", !0), (0, ot.cn)(this._playerEl, "jw-flag-floating"), t ? ((0, rt.oB)(this._wrapperEl, {
                            transform: `translateY(-${62-e.top}px)`
                        }), window.setTimeout((() => {
                            (0, rt.oB)(this._wrapperEl, {
                                transform: "translateY(0)",
                                transition: "transform 150ms cubic-bezier(0, 0.25, 0.25, 1)"
                            })
                        }))) : (0, rt.oB)(this._wrapperEl, {
                            transform: "translate(0)"
                        }), window.setTimeout((() => {
                            this.transitionFloating(!1)
                        }), 50);
                        const i = this._preview.el;
                        (0, rt.oB)(this._playerEl, {
                            backgroundImage: i.style.backgroundImage
                        }), this.updateFloatingSize(), this._model.get("instreamMode") || this._floatingUI.enable()
                    }
                    var i
                }
                stopFloating(t, e) {
                    if (t && (this._floatingStoppedForever = !0, Y.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler)), this.getFloatingPlayer() !== this._playerEl) return;
                    this.transitionFloating(!0), this.setFloatingPlayer(null), this._model.set("isFloating", !1);
                    const i = this._playerBounds,
                        n = () => {
                            (0, ot.IV)(this._playerEl, "jw-flag-floating"), this._model.trigger("forceAspectRatioChange", {}), (0, rt.oB)(this._playerEl, {
                                backgroundImage: null
                            }), (0, rt.oB)(this._wrapperEl, {
                                maxWidth: null,
                                width: null,
                                height: null,
                                transform: null,
                                transition: null,
                                "transition-timing-function": null
                            }), window.setTimeout((() => {
                                this.transitionFloating(!1)
                            }), 50)
                        };
                    e ? ((0, rt.oB)(this._wrapperEl, {
                        transform: `translateY(-${62-i.top}px)`,
                        "transition-timing-function": "ease-out"
                    }), window.setTimeout(n, 150)) : n(), this.disableFloatingUI()
                }
                transitionFloating(t) {
                    this._inTransition = t;
                    const e = this._wrapperEl;
                    (0, rt.oB)(e, {
                        display: t ? "none" : null
                    }), t || this._model.trigger("forceResponsiveListener", {})
                }
                isInTransition() {
                    return this._inTransition
                }
                updateFloatingSize() {
                    const t = this._playerBounds,
                        e = this._model.get("width"),
                        i = this._model.get("height"),
                        n = Ct(this._model, e);
                    if (n.maxWidth = Math.min(400, t.width), !this._model.get("aspectratio")) {
                        const n = t.width;
                        let o = t.height / n || .5625;
                        (0, y.hj)(e) && (0, y.hj)(i) && (o = i / e), this._model.trigger("forceAspectRatioChange", {
                            ratio: 100 * o + "%"
                        })
                    }(0, rt.oB)(this._wrapperEl, n)
                }
                enableFloatingUI() {
                    this._floatingUI.enable()
                }
                disableFloatingUI() {
                    this._floatingUI.disable()
                }
                setFloatingPlayer(t) {
                    Tt.floatingPlayer = t
                }
                getFloatingPlayer() {
                    return Tt.floatingPlayer
                }
                destroy() {
                    this.getFloatingPlayer() === this._playerEl && this.setFloatingPlayer(null), this.getFloatingConfig() && this._isMobile && Y.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler), this._floatingUI.disable(), Et(this), this._model.off("change:floating", this._boundInitFloatingBehavior)
                }
                updateFloating(t, e) {
                    t < .5 && !(0, st.cL)() && this.shouldFloatOnViewable() ? this.startFloating(e) : this.stopFloating(!1, e)
                }
                checkFloatOnScroll() {
                    if ("notVisible" !== this.getFloatMode()) return;
                    const t = this._model.get("isFloating"),
                        e = this._playerBounds,
                        i = e.top < 62,
                        n = window.scrollY || window.pageYOffset,
                        o = i ? e.top <= n : e.top <= n + 62;
                    !t && o ? this.updateFloating(0, i) : t && !o && this.updateFloating(1, i)
                }
                throttledMobileFloatScrollHandler() {
                    this.fosMobileBehavior() && this._model.get("inDom") && (clearTimeout(this._mobileDebounceTimeout), this._mobileDebounceTimeout = window.setTimeout(this.checkFloatOnScroll.bind(this), 150), this._mobileCheckCanFire && (this._mobileCheckCanFire = !1, this.checkFloatOnScroll(), window.setTimeout((() => {
                        this._mobileCheckCanFire = !0
                    }), 50)))
                }
                checkFloatIntersection(t) {
                    const e = "number" == typeof t,
                        i = e ? t : this._lastIntRatio;
                    this._canFloat = this._canFloat || i >= .5, !this.getFloatingConfig() || "notVisible" !== this.getFloatMode() || this.fosMobileBehavior() || this._floatingStoppedForever || this._canFloat && this.updateFloating(i), e && (this._lastIntRatio = t)
                }
                updateStyles() {
                    !this._floatingStoppedForever && this.getFloatingConfig() && "notVisible" === this.getFloatMode() && this._boundThrottledMobileFloatScrollHandler()
                }
            }
            var At = i(9926);
            let Ft;
            i(5430);
            const Rt = k.OS.mobile,
                Bt = k.Browser.ie,
                Ot = function(t, e) {
                    const i = Object.assign(this, p.ZP, {
                            isSetup: !1,
                            api: t,
                            model: e
                        }),
                        n = e.get("localization"),
                        s = (0, ot.az)((r = e.get("id"), a = n.player, `<div id="${r}" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="${a||""}" role="application"><div class="jw-aspect jw-reset"></div><div class="jw-wrapper jw-reset"><div class="jw-top jw-reset"></div><div class="jw-aspect jw-reset"></div><div class="jw-media jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jw-reset-text" dir="auto"><div class="jw-title-primary jw-reset-text"></div><div class="jw-title-secondary jw-reset-text"></div></div><div class="jw-overlays jw-reset"></div><div class="jw-hidden-accessibility"><span class="jw-time-update" aria-live="assertive"></span><span class="jw-volume-update" aria-live="assertive"></span></div></div></div>`));
                    var r, a;
                    const l = s.querySelector(".jw-wrapper"),
                        c = s.querySelector(".jw-media"),
                        d = new vt(e, t),
                        u = new jt.Z(e),
                        h = new pt.Z(e);
                    let g, m, f, w;
                    h.on("all", i.trigger, i);
                    let b = -1,
                        v = -1,
                        j = -1;
                    const _ = e.get("floating");
                    this.dismissible = null == _ ? void 0 : _.dismissible;
                    let x = {};
                    const M = new Pt(e, x, {
                        player: s,
                        wrapper: l,
                        preview: d
                    });
                    let C, S, E, I = null,
                        T = null,
                        P = !1,
                        A = null;
                    const F = () => e.get("isFloating") ? l : s,
                        R = () => {
                            i.isSetup && !M.isInTransition() && (i.updateBounds(), i.updateStyles(), i.checkResized())
                        },
                        B = () => {
                            (0, tt.W)(v), v = (0, tt.U)(R)
                        };
                    this.responsiveListener = B;
                    const O = (t, i) => {
                            if ((0, y.hj)(t) && (0, y.hj)(i)) {
                                const e = (0, et.i)(t);
                                (0, et.d)(s, e);
                                const n = e < 2;
                                (0, ot.og)(s, "jw-flag-small-player", n), (0, ot.og)(s, "jw-orientation-portrait", i > t)
                            }
                            if (e.get("controls")) {
                                const t = function(t) {
                                    const e = t.get("height");
                                    if (t.get("aspectratio")) return !1;
                                    if ("string" == typeof e && e.indexOf("%") > -1) return !1;
                                    let i = Number(e) || NaN;
                                    return i = isNaN(i) ? t.get("containerHeight") : i, !!i && Boolean(i && i <= 44)
                                }(e);
                                (0, ot.og)(s, "jw-flag-audio-player", t), e.set("audioMode", t)
                            }
                        },
                        L = (t, i) => {
                            if ((!t || isNaN(Number(t))) && !(t = e.get("containerWidth"))) return;
                            if ((!i || isNaN(Number(i))) && !(i = e.get("containerHeight"))) return;
                            d && d.resize(t, i, e.get("stretching"));
                            const n = e.getVideo();
                            n && n.resize(t, i, e.get("stretching"))
                        },
                        V = () => {
                            e.get("pip") || e.set("visibility", K(e, s))
                        },
                        Z = i => {
                            i.link ? (t.pause({
                                reason: "interaction"
                            }), t.setFullscreen(!1), (0, ot.nG)(i.link, i.linktarget, {
                                rel: "noreferrer"
                            })) : e.get("controls") && t.playToggle({
                                reason: "interaction"
                            })
                        },
                        z = t => {
                            T && T.mouseMove(t)
                        },
                        H = t => {
                            T && !T.showing && "IFRAME" === t.target.nodeName && T.userActive()
                        },
                        $ = t => {
                            var e;
                            null != (e = T) && e.showing && (t.relatedTarget && !s.contains(t.relatedTarget) || !t.relatedTarget && k.Features.iframe) && T.userActive()
                        },
                        N = (t, e, n) => {
                            const r = new gt(e, n),
                                a = e.get("controls");
                            return r.on({
                                click: () => {
                                    if (i.trigger(o.cy), F().focus(), T) {
                                        if (k.OS.mobile) {
                                            const n = e.get("state");
                                            if (a && (n === o.bc || n === o.xQ || e.get("instream") && n === o._5) && t.playToggle({
                                                reason: "interaction"
                                            }), a && n === o._5) {
                                                if (e.get("instream") || e.get("castActive") || "audio" === e.get("mediaType")) return;
                                                (0, ot.og)(s, "jw-flag-controls-hidden"), i.dismissible && (0, ot.og)(s, "jw-floating-dismissible", (0, ot.pv)(s, "jw-flag-controls-hidden")), h.renderCues(!0)
                                            } else T.showing ? T.userInactive() : T.userActive();
                                            return
                                        }(() => {
                                            var t;
                                            const e = null == (t = T) ? void 0 : t.settingsMenu;
                                            return Boolean(null == e ? void 0 : e.visible)
                                        })() ? T.settingsMenu.close(): e.get("displayStats") ? e.set("displayStats", !1) : t.playToggle({
                                            reason: "interaction"
                                        })
                                    }
                                },
                                doubleClick: () => T && t.setFullscreen()
                            }), Rt || (s.addEventListener("mousemove", z), s.addEventListener("mouseover", H), s.addEventListener("mouseout", $)), r
                        },
                        q = t => {
                            const i = e.get("fullscreen"),
                                n = void 0 !== t.jwstate ? t.jwstate : (() => {
                                    if (S.supportsDomFullscreen()) {
                                        const t = S.fullscreenElement();
                                        return Boolean(t && t === s)
                                    }
                                    return e.getVideo().getFullScreen()
                                })();
                            i !== n && e.set("fullscreen", n), k.OS.android && n && screen.orientation.lock("landscape"), B(), clearTimeout(b), b = setTimeout(L, 200)
                        },
                        D = t => {
                            k.OS.mobile && ((0, ot.og)(s, "jw-flag-ios-fullscreen", t.jwstate), q(t))
                        },
                        U = (t, e) => {
                            if (!e) return void u.playlistItem(t, t.get("playlistItem"));
                            const i = (0, Q.Z)(t, e);
                            Q.Z.cloneIcon && i.querySelector(".jw-icon").appendChild(Q.Z.cloneIcon("error")), u.hide(), s.appendChild(i.firstChild), (0, ot.og)(s, "jw-flag-audio-player", Boolean(t.get("audioMode")))
                        },
                        W = t => {
                            switch (e.get("controls") && t !== o._5 && (0, ot.pv)(s, "jw-flag-controls-hidden") && ((0, ot.IV)(s, "jw-flag-controls-hidden"), (0, ot.og)(s, "jw-floating-dismissible", i.dismissible)), (0, ot.L_)(s, /jw-state-\S+/, `jw-state-${t}`), t) {
                                case o.Vy:
                                    i.stopFloating();
                                case o.bc:
                                case o.xQ:
                                    h && h.hide(), d && d.enableZoomThumbnail();
                                    break;
                                default:
                                    h && (h.show(), t === o._5 && T && !T.showing && h.renderCues(!0)), d && d.removeZoomThumbnail()
                            }
                        },
                        J = (t, e, n) => {
                            if (i.isSetup) {
                                if (n === o.Vy) {
                                    const t = s.querySelector(".jw-error-msg");
                                    t && t.parentNode.removeChild(t)
                                }(0, tt.W)(j), e === o.r0 ? W(e) : j = (0, tt.U)((() => W(e)))
                            }
                        },
                        X = (t, e) => {
                            (0, ot.L_)(s, /jw-stretch-\S+/, `jw-stretch-${e}`)
                        },
                        at = (t, e) => {
                            (0, ot.og)(s, "jw-flag-aspect-mode", Boolean(e));
                            const n = s.querySelectorAll(".jw-aspect");
                            (0, rt.oB)(n, {
                                paddingTop: e || null
                            }), i.isSetup && e && !t.get("isFloating") && (0, rt.oB)(s, Ct(t, t.get("width")))
                        },
                        lt = (t, e) => {
                            (0, ot.og)(t, "jw-flag-fullscreen", e), (0, rt.oB)(document.body, {
                                overflowY: e ? "hidden" : ""
                            }), e && T && T.userActive(), L(), B()
                        },
                        ct = function(e, i) {
                            if (i && T && e.get("autostartMuted") && T.unmuteAutoplay(t, e), S.supportsDomFullscreen()) i ? S.requestFullscreen() : S.exitFullscreen(), lt(s, i);
                            else if (Bt) lt(s, i);
                            else {
                                const t = e.get("instream"),
                                    n = t ? t.provider : null,
                                    o = e.getVideo() || n;
                                null != o && o.setFullscreen && o.setFullscreen(i)
                            }
                        },
                        dt = function(t, e) {
                            e ? i.requestPip() : document.pictureInPictureElement && document.exitPictureInPicture()
                        },
                        mt = () => {
                            if (A) {
                                const {
                                    video: t,
                                    enter: e,
                                    leave: i
                                } = A;
                                t.removeEventListener("loadedmetadata", e), t.removeEventListener("leavepictureinpicture", i)
                            }
                        },
                        ft = () => {
                            const t = new Ft(document, i.element());
                            i.addControls(t)
                        },
                        bt = (t, e) => {
                            const n = {
                                controls: e
                            };
                            e ? (Ft = nt.v.controls, Ft ? ft() : (n.loadPromise = (0, nt.z)().then((function(e) {
                                Ft = e;
                                const i = t.get("controls");
                                return i && ft(), i
                            })), n.loadPromise.catch((function(t) {
                                i.trigger(o.cM, t)
                            })))) : i.removeControls(), m && f && i.trigger(o.Hy, n)
                        },
                        yt = (t, e, n) => {
                            e && !n && (J(0, t.get("state")), i.updateStyles())
                        },
                        kt = (t, e) => {
                            const i = "LIVE" === e;
                            (0, ot.og)(s, "jw-flag-live", i)
                        },
                        _t = (t, e) => {
                            const i = "audio" === e,
                                n = t.get("isAudioFile"),
                                o = t.get("playlistItem");
                            n !== i && (t.set("isAudioFile", i), d.setImage(null == o ? void 0 : o.image)), (0, ot.og)(s, "jw-flag-media-audio", i), i && t.get("pip") && t.set("pip", !1);
                            const r = i ? c : c.nextSibling;
                            d.el.parentNode.insertBefore(d.el, r)
                        },
                        xt = (t, e) => {
                            this.setPosterImage(e, d), Rt && ((t, e) => {
                                const i = t.get("mediaElement");
                                if (!i) return;
                                const n = (0, ot.bJ)(e.title || "");
                                i.setAttribute("title", n.textContent)
                            })(t, e)
                        };
                    this.updateBounds = function() {
                        (0, tt.W)(v);
                        const t = F(),
                            i = document.body.contains(t),
                            n = (0, ot.A8)(t),
                            o = Math.round(n.width),
                            r = Math.round(n.height);
                        if (x = (0, ot.A8)(s), M.updatePlayerBounds(x), o === m && r === f) return m && f || B(), void e.set("inDom", i);
                        o && r || m && f || B(), (o || r || i) && (e.set("containerWidth", o), e.set("containerHeight", r)), e.set("inDom", i), i && Y.Z.observe(s)
                    }, this.updateStyles = function() {
                        const t = e.get("containerWidth"),
                            i = e.get("containerHeight");
                        O(t, i), T && T.resize(t, i), L(t, i), h.resize(), M.updateStyles()
                    }, this.checkResized = function() {
                        const t = e.get("containerWidth"),
                            n = e.get("containerHeight"),
                            s = e.get("isFloating");
                        if (t !== m || n !== f) {
                            this.resizeListener || (this.resizeListener = new At.Z(l, this, e)), m = t, f = n, i.trigger(o.sF, {
                                width: t,
                                height: n
                            });
                            const s = (0, et.i)(t);
                            I !== s && (I = s, i.trigger(o.Bs, {
                                breakpoint: I
                            }))
                        }
                        s !== w && (w = s, i.trigger(o.RF, {
                            floating: s
                        }), V())
                    }, this.setup = function() {
                        d.setup(s.querySelector(".jw-preview")), u.setup(s.querySelector(".jw-title")), g = new wt(e), g.setup(), g.setContainer(l), g.on(o.Ib, Z), h.setup(s.id, e.get("captions")), u.element().parentNode.insertBefore(h.element(), u.element()), C = N(t, e, c), E = new ht.ZP(s).on("click", (function() {})), S = ut(s, document, q), e.on("change:hideAdsControls", (function(t, e) {
                            (0, ot.og)(s, "jw-flag-ads-hide-controls", e)
                        })), e.on("change:scrubbing", (function(t, e) {
                            (0, ot.og)(s, "jw-flag-dragging", e)
                        })), e.on("change:playRejected", (function(t, e) {
                            (0, ot.og)(s, "jw-flag-play-rejected", e)
                        })), e.on(o.h7, D), e.on(`change:${o.ug}`, (() => {
                            L(), h.resize()
                        }));
                        e.player.on("change:errorEvent", U), e.change("stretching", X);
                        const i = e.get("width"),
                            n = e.get("height"),
                            r = Ct(e, i, n);
                        (0, rt.oB)(s, r), e.change("aspectratio", at), O(i, n), e.get("controls") || ((0, ot.cn)(s, "jw-flag-controls-hidden"), (0, ot.IV)(s, "jw-floating-dismissible")), Bt && (0, ot.cn)(s, "jw-ie");
                        const a = e.get("skin") || {};
                        a.name && (0, ot.L_)(s, /jw-skin-\S+/, `jw-skin-${a.name}`);
                        const p = (0, it.xq)(a);
                        (0, it.Sf)(e.get("id"), p), e.set("mediaContainer", c), e.set("iFrame", k.Features.iframe), e.set("activeTab", (0, G.Z)()), e.set("touchMode", Rt && ("string" == typeof n || n >= 44)), Y.Z.add(this), e.get("enableGradient") && !Bt && (0, ot.cn)(s, "jw-ab-drop-shadow"), this.isSetup = !0, e.trigger("viewSetup", s);
                        const m = document.body.contains(s);
                        m && Y.Z.observe(s), e.set("inDom", m), e.on("forceAspectRatioChange", (t => {
                            const i = t.ratio || e.get("aspectratio");
                            at(e, i)
                        })), e.on("forceResponsiveListener", B), M.setup()
                    }, this.init = function() {
                        this.updateBounds(), e.on("change:fullscreen", ct), e.on("change:pip", dt), e.on("change:activeTab", V), e.on("change:fullscreen", V), e.on("change:intersectionRatio", V), e.on("change:visibility", yt), e.on("instreamMode", (t => {
                            t ? ((0, ot.cn)(s, "jw-flag-ads"), T && T.setupInstream(), M.disableFloatingUI()) : function() {
                                if (!C) return;
                                T && T.destroyInstream(e), M.getFloatingPlayer() !== s || (0, st.cL)() || M.enableFloatingUI(), i.setAltText(""), (0, ot.IV)(s, ["jw-flag-ads", "jw-flag-ads-hide-controls"]), e.set("hideAdsControls", !1);
                                const t = e.getVideo();
                                t && t.setContainer(c), C.revertAlternateClickHandlers()
                            }()
                        })), V(), 1 !== Y.Z.size() || e.get("visibility") || yt(e, 1, 0);
                        const t = e.player;
                        e.change("state", J), t.change("controls", bt), e.change("streamType", kt), e.change("mediaType", _t), t.change("playlistItem", ((t, e) => {
                            xt(t, e)
                        })), m = f = null, this.initFloatingBehavior(), this.checkResized()
                    }, this.initFloatingBehavior = function() {
                        M.initFloatingBehavior()
                    }, this.addControls = function(n) {
                        T = n, (0, ot.IV)(s, "jw-flag-controls-hidden"), (0, ot.og)(s, "jw-floating-dismissible", this.dismissible), n.enable(t, e), f && (O(m, f), n.resize(m, f), h.renderCues(!0)), n.on("userActive userInactive", (function() {
                            const t = e.get("state");
                            t !== o.r0 && t !== o.Kb || h.renderCues(!0)
                        })), n.on("dismissFloating", (() => {
                            this.stopFloating(!0), e.get("autoPause") && !e.get("autoPause").pauseAds && Boolean(e.get("instream")) || t.pause({
                                reason: "interaction"
                            })
                        })), n.on("all", i.trigger, i), e.get("instream") && T.setupInstream()
                    }, this.removeControls = function() {
                        T && (T.disable(e), T = null), (0, ot.cn)(s, "jw-flag-controls-hidden"), (0, ot.IV)(s, "jw-floating-dismissible")
                    }, this.resize = function(t, i) {
                        const n = Ct(e, t, i, !0);
                        void 0 !== t && void 0 !== i && (e.set("width", t), e.set("height", i)), (0, rt.oB)(s, n), M.resize(), R()
                    }, this.resizeMedia = L, this.setPosterImage = function(t, e) {
                        e.setImage(null == t ? void 0 : t.image)
                    }, this.requestPip = function(t) {
                        const n = t || e.get("mediaElement");
                        if (n.requestPictureInPicture) {
                            const t = () => {
                                n.removeEventListener("leavepictureinpicture", t), P && (P = !1, i.trigger("pipLeave", {
                                    video: n
                                }), e.set("pip", !1), document.pictureInPictureElement && document.exitPictureInPicture())
                            };
                            mt();
                            const o = () => {
                                mt(), n.requestPictureInPicture().then((() => {
                                    P || (P = !0, i.trigger("pipEnter", {
                                        video: n
                                    })), n.addEventListener("leavepictureinpicture", t)
                                })), n.removeEventListener("loadedmetadata", o)
                            };
                            n.readyState ? o() : n.addEventListener("loadedmetadata", o), A = {
                                video: n,
                                enter: o,
                                leave: t
                            }
                        }
                    }, this.setAltText = function(t) {
                        e.set("altText", t)
                    }, this.clickHandler = function() {
                        return C
                    }, this.getContainer = this.element = function() {
                        return s
                    }, this.getWrapper = function() {
                        return l
                    }, this.controlsContainer = function() {
                        return T ? T.element() : null
                    }, this.getSafeRegion = function(t = !0) {
                        const e = {
                            x: 0,
                            y: 0,
                            width: m || 0,
                            height: f || 0
                        };
                        return T && t && (e.height -= T.controlbarHeight()), e
                    }, this.setCaptions = function(t) {
                        h.clear(), h.setup(e.get("id"), t), h.resize()
                    }, this.setIntersection = function(t) {
                        const i = Math.round(100 * t.intersectionRatio) / 100;
                        e.set("intersectionRatio", i), this.checkFloatIntersection(i)
                    }, this.checkFloatIntersection = function(t) {
                        M.checkFloatIntersection(t)
                    }, this.stopFloating = function(t, e) {
                        M.stopFloating(t, e)
                    }, this.destroy = function() {
                        e.destroy(), d.destroy(), Y.Z.unobserve(s), Y.Z.remove(this), this.isSetup = !1, this.off(), (0, tt.W)(v), clearTimeout(b), E && (E.destroy(), E = null), S && (S.destroy(), S = null), T && T.disable(e), C && (C.destroy(), s.removeEventListener("mousemove", z), s.removeEventListener("mouseout", $), s.removeEventListener("mouseover", H), C = null), h.destroy(), g && (g.destroy(), g = null), (0, rt.oI)(e.get("id")), this.resizeListener && (this.resizeListener.destroy(), delete this.resizeListener), M.destroy()
                    }
                };
            let Lt = !1;
            const Vt = window.$sf,
                Zt = function(t, e) {
                    this.playerElement = t, this.wrapperElement = e
                };
            Object.assign(Zt.prototype, {
                setup(t) {
                    const e = (0, ot.az)((t => `<span class="jw-text jw-reset">${t}</span>`)(t));
                    this.wrapperElement.appendChild(e), (0, ot.cn)(this.playerElement, "jw-flag-top")
                }
            });
            const zt = Zt;
            var Ht = i(8675),
                $t = i.n(Ht),
                Nt = i(8168),
                qt = i(2977);
            let Dt;
            const Ut = function(t, e, n) {
                    const s = "free" === e.get("edition");
                    let r, a;
                    s && !Dt && (i(678), Dt = !0, null != n && n.cssInjected && n.cssInjected()), null != n && n.View ? (r = n.View, a = r(t, e)) : (r = Ot, a = new r(t, e));
                    const l = a.setup;
                    if (a.setPosterImage = (i, n) => {
                        const o = (0, qt.Cz)(i.images);
                        let s = null == i ? void 0 : i.image;
                        const r = a.model.get("containerWidth");
                        r && (s = (0, qt.Bf)(i, (0, qt.IJ)(r))), o ? (k.OS.mobile || o.reverse(), i.videoThumbnail = o[0].src, n.on("videoThumbnailFirstFrame", (e => {
                            t.trigger("videoThumbFirstFrame", e)
                        })), n.setImage(s, !0, i, e)) : n.setImage(s)
                    }, a.setup = function() {
                        if (l.call(this), e.get("displayHeading")) {
                            new zt(a.getContainer(), a.getContainer().querySelector(".jw-top")).setup(e.get("localization").advertising.displayHeading)
                        }
                        e.change("castAvailable", ((t, e) => {
                            const i = t.get("cast");
                            Object(i) === i && (0, ot.og)(this.getContainer(), "jw-flag-cast-available", e)
                        }), this), e.change("castActive", ((t, e) => {
                            const i = t.get("airplayActive"),
                                n = this.getContainer();
                            (0, ot.og)(n, "jw-flag-casting", e || !1), (0, ot.og)(n, "jw-flag-airplay-casting", i || !1)
                        }), this)
                    }, s) {
                        const t = a.addControls;
                        a.addControls = function(e) {
                            t.call(this, e);
                            const i = document.querySelector(".jw-logo-button");
                            if (i) {
                                const t = (0, Nt.w)($t());
                                i.appendChild(t)
                            }
                        }
                    }
                    const c = e.get("advertising");
                    return null != c && c.outstream && function(t, e) {
                        Lt || (Lt = !0, i(8206));
                        const n = e.model,
                            s = e.getSafeRegion;
                        e.getSafeRegion = function(t) {
                            const e = s.call(this, t);
                            return e.height = this.api.getHeight(), e
                        }, n.on("change:mediaState", ((i, r) => {
                            if (r === o.ik || r === o.r0) {
                                var a, l;
                                if (n.off("change:mediaState", null, e), null != Vt && null != (a = Vt.ext) && null != a.supports && null != (l = a.supports()) && l["exp-push"]) {
                                    const {
                                        exp: e,
                                        self: i
                                    } = Vt.ext.geom(), n = Math.min(t.getHeight() - i.h, e.yx ? 1 / 0 : e.b), o = Math.min(t.getWidth() - i.w, e.xs ? 1 / 0 : e.r);
                                    (n > 0 || o > 0) && Vt.ext.expand({
                                        b: Math.max(0, n),
                                        r: Math.max(0, o),
                                        push: !0
                                    })
                                }(0, ot.IV)(e.getContainer(), "jw-flag-outstream-pending"), e.getSafeRegion = s, e.responsiveListener()
                            }
                        }), e);
                        const r = e.setup;
                        e.setup = function() {
                            r.call(this), (0, ot.cn)(this.getContainer(), "jw-flag-outstream jw-flag-outstream-pending")
                        };
                        const a = n.get("advertising");
                        a.dismissible && (e.dismissible = !0, e.on("dismissFloating", (() => {
                            t.remove()
                        }))), null != Vt && Vt.ext && t.once(o.Rc, (function() {
                            Vt.ext.register(t.getWidth(), t.getHeight())
                        })), t.once(o.V$, (() => {
                            e.stopFloating(!0), "close" === a.endstate && ((0, ot.cn)(e.getContainer(), "jw-flag-outstream-close"), null != Vt && Vt.ext && Vt.ext.collapse())
                        }))
                    }(t, a), a
                },
                Wt = /^change:(.+)$/,
                Qt = function(t, e, i) {
                    Object.keys(e).forEach((n => {
                        n in e && e[n] !== i[n] && t.trigger(`change:${n}`, t, e[n], i[n])
                    }))
                },
                Yt = function(t, e) {
                    t && t.off(null, null, e)
                };
            class Jt extends _.Z {
                constructor(t, e) {
                    super(), this._model = t, this._mediaModel = null, Object.assign(t.attributes, {
                        altText: "",
                        fullscreen: !1,
                        logoWidth: 0,
                        scrubbing: !1
                    }), t.on("all", ((i, n, o, s) => {
                        n === t && (n = this), e && !e(i, n, o, s) || this.trigger(i, n, o, s)
                    }), this), t.on("change:mediaModel", ((t, e) => {
                        this.mediaModel = e
                    }), this)
                }
                set mediaModel(t) {
                    const e = this._mediaModel;
                    Yt(e, this), this._mediaModel = t, t.on("all", ((e, i, n, o) => {
                        i === t && (i = this), this.trigger(e, i, n, o)
                    }), this), e && Qt(this, t.attributes, e.attributes)
                }
                get(t) {
                    const e = this._mediaModel;
                    return e && t in e.attributes ? e.get(t) : this._model.get(t)
                }
                set(t, e) {
                    return this._model.set(t, e)
                }
                getCues() {
                    return this._model.getCues()
                }
                getVideo() {
                    return this._model.getVideo()
                }
                destroy() {
                    Yt(this._model, this), Yt(this._mediaModel, this), this.off()
                }
            }
            class Xt extends Jt {
                constructor(t) {
                    super(t, (t => {
                        const e = this._instreamModel;
                        if (e) {
                            const i = Wt.exec(t);
                            if (i) {
                                if (i[1] in e.attributes) return !1
                            }
                        }
                        return !0
                    })), this._instreamModel = null, this._playerViewModel = new Jt(this._model), t.on("change:instream", ((t, e) => {
                        const i = e ? e.model : null;
                        this._model.set("instreamMode", Boolean(i)), this.instreamModel = i
                    }), this)
                }
                get player() {
                    return this._playerViewModel
                }
                set instreamModel(t) {
                    const e = this._instreamModel;
                    if (e || t)
                        if (Yt(e, this), this._model.off("change:mediaModel", null, this), this._instreamModel = t, this.trigger("instreamMode", Boolean(t)), t) t.on("all", ((e, i, n, o) => {
                            i === t && (i = this), this.trigger(e, i, n, o)
                        }), this), t.change("mediaModel", ((t, e) => {
                            this.mediaModel = e
                        }), this), Qt(this, t.attributes, this._model.attributes);
                        else if (e) {
                            this._model.change("mediaModel", ((t, e) => {
                                this.mediaModel = e
                            }), this);
                            const t = Object.assign({}, this._model.attributes, e.attributes);
                            Qt(this, this._model.attributes, t)
                        }
                }
                get(t) {
                    const e = this._mediaModel;
                    if (e && t in e.attributes) return e.get(t);
                    const i = this._instreamModel;
                    return i && t in i.attributes ? i.get(t) : this._model.get(t)
                }
                getVideo() {
                    const t = this._instreamModel;
                    return null != t && t.getVideo() ? t.getVideo() : super.getVideo()
                }
                destroy() {
                    super.destroy(), Yt(this._instreamModel, this)
                }
            }
            var Kt = i(5099);
            const Gt = null != (te = window) && null != (ee = te.URL) && ee.createObjectURL ? te.URL : te.webkitURL || te.mozURL;
            var te, ee;
            let ie;
            const ne = window.Blob,
                oe = (t, {
                    muted: e
                }) => {
                    if (!ie) try {
                        ie = new ne([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], {
                            type: "video/mp4"
                        })
                    } catch (t) {
                        return Promise.resolve()
                    }
                    return k.OS.tizen ? Promise.resolve() : (t.muted = e, t.src = Gt.createObjectURL(ie), t.play() || (0, Kt.Z)(t))
                },
                se = "autoplayMuted",
                re = "autoplayDisabled",
                ae = {},
                le = (t, {
                    cancelable: e,
                    muted: i = !1,
                    allowMuted: n = !1,
                    timeout: o = 1e4
                }) => {
                    const s = t.getTestElement(),
                        r = i ? "muted" : `${n}`;
                    let a;
                    ae[r] || (ae[r] = oe(s, {
                        muted: i
                    }).catch((t => {
                        if (!e.cancelled() && !1 === i && n) return oe(s, {
                            muted: i = !0
                        });
                        throw t
                    })).then((() => i ? (ae[r] = null, se) : "autoplayEnabled")).catch((t => {
                        throw clearTimeout(a), ae[r] = null, t.reason = re, t
                    })));
                    const l = ae[r].then((t => {
                            if (clearTimeout(a), e.cancelled()) {
                                const t = new Error("Autoplay test was cancelled");
                                throw t.reason = "cancelled", t
                            }
                            return t
                        })),
                        c = new Promise(((t, e) => {
                            a = setTimeout((() => {
                                ae[r] = null;
                                const t = new Error("Autoplay test timed out");
                                t.reason = "timeout", e(t)
                            }), o)
                        }));
                    return Promise.race([l, c])
                };
            var ce = i(686),
                de = i(7543),
                ue = i(7411);
            const he = "tabVisible";
            class ge extends ue.Z {
                getFirstFrame() {
                    const t = this.between(o.cq, o.FU),
                        e = this.between(he, o.FU);
                    return e && t && e > 0 && e < t ? e : t
                }
            }
            const pe = function(t, e) {
                    e.off(o.cq, t._onPlayAttempt), e.off(o.Gj, t._triggerFirstFrame), e.off(o.R2, t._onTime), t.off("change:activeTab", t._onTabVisible), t._triggerFirstFrame = t._onTime = null
                },
                me = function(t, e) {
                    t.change("mediaModel", (function(t, i, n) {
                        t._qoeItem && n && t._qoeItem.end(n.get("mediaState")), t._qoeItem = new ge, t._qoeItem.tick(o.gO), t._qoeItem.start(i.get("mediaState")),
                            function(t, e) {
                                t._onTabVisible && pe(t, e);
                                let i = !1;
                                t._triggerFirstFrame = function(n) {
                                    if (i || !e.mediaController) return;
                                    const s = e.mediaController.mediaModel,
                                        r = s.attributes.mediaState;
                                    if (r !== o.r0 && r !== o._5 && n.type !== o.Gj) return;
                                    i = !0;
                                    const a = t._qoeItem;
                                    a.tick(o.FU);
                                    const l = a.getFirstFrame();
                                    e.trigger(o.FU, {
                                        loadTime: l
                                    }), s.off(`change:${o.ug}`, null, s), s.change(o.ug, ((t, i) => {
                                        i && e.trigger(o.ug, i)
                                    }), s), pe(t, e)
                                }, t._onTime = function(t) {
                                    let e = 0;
                                    return function(i) {
                                        const n = i.position;
                                        n > e && t(i), e = n
                                    }
                                }(t._triggerFirstFrame), t._onPlayAttempt = function() {
                                    this._qoeItem.tick(o.cq)
                                }, t._onTabVisible = function(t, e) {
                                    e ? t._qoeItem.tick(he) : t._qoeItem.tick("tabHidden")
                                }, t.on("change:activeTab", t._onTabVisible), e.on(o.cq, t._onPlayAttempt, t), e.once(o.Gj, t._triggerFirstFrame), e.on(o.R2, t._onTime)
                            }(t, e), i.on("change:mediaState", (function(e, i, n) {
                            i !== n && (t._qoeItem.end(n), t._qoeItem.start(i))
                        }))
                    }))
                },
                fe = function(t) {
                    const e = (t || "").replace(/^\?/, "").split("&");
                    let i = -1;
                    for (let t = 0; t < e.length; t++)
                        if (/^jw_start=/.test(e[t])) {
                            i = t;
                            break
                        } if (-1 === i) return -1;
                    const n = parseFloat(e[i].replace("jw_start=", ""));
                    return "number" != typeof n || isNaN(n) || n < 0 ? -1 : n
                };
            var we = i(2557);
            const be = function() {},
                ye = function() {};
            Object.assign(be.prototype, {
                destroy() {
                    var t, e;
                    this.off(), this.stop(), (0, r.c2)(this, this.originalContainer), this._view && this._view.destroy(), this._model && (t = this._model, e = this._programController, t._onTabVisible && pe(t, e), t._qoeItem = t._triggerFirstFrame = t._onTime = t._onPlayAttempt = t._onTabVisible = null, this._model.destroy()), this._apiQueue && this._apiQueue.destroy(), this._captions && this._captions.destroy(), this._programController && this._programController.destroy(), this.instreamDestroy(!0), this._view = this._model = this._apiQueue = this._captions = this._programController = null, this.clearSetupVars && this.clearSetupVars()
                },
                playerSetup(t, e, i, n, g, m) {
                    let f, v, j = this,
                        _ = j._model = new E;
                    _.set("jwStart", fe(window.location.search));
                    let x, C, S, I = !1,
                        T = !1,
                        P = null,
                        A = w($),
                        F = w(ye);
                    j.originalContainer = j.currentContainer = i, j._events = n, j.trigger = function(t, e) {
                        const i = function(t, e, i) {
                            let n = i;
                            switch (e) {
                                case "time":
                                case "beforePlay":
                                case "pause":
                                case "play":
                                case "ready": {
                                    const e = t.get("viewable");
                                    void 0 !== e && (n = Object.assign({}, i, {
                                        viewable: e
                                    }));
                                    break
                                }
                            }
                            return n
                        }(_, t, e);
                        return p.ZP.trigger.call(this, t, i)
                    };
                    let R = new c.Z(j, ["trigger"], (() => !0));
                    const B = (t, e) => {
                        j.trigger(t, e)
                    };
                    _.setup(t);
                    const L = _.get("backgroundLoading"); {
                        const t = new Xt(_);
                        f = this._view = new Ut(e, t), f.on("all", ((t, e) => {
                            null != e && e.doNotForward || B(t, e)
                        }), j), t.on("viewSetup", (t => {
                            (0, r.c2)(this, t)
                        }))
                    }
                    let Z = this._programController = new O(_, m, e._publicApi);
                    mt(), Z.on("all", B, j).on("subtitlesTracks", (t => {
                        if (!v) return;
                        v.setSubtitlesTracks(t.tracks);
                        const e = v.getCurrentIndex();
                        e > 0 && ht(e, t.tracks)
                    }), j).on(o.Ms, (() => {
                        Promise.resolve().then(ut)
                    }), j).on(o.Ew, j.triggerError, j), me(_, Z), j.clearSetupVars = function() {
                        R && R.destroy(), j = Z = _ = f = A = F = S = R = null
                    }, _.on(o.pn, j.triggerError, j), _.on("change:state", ((t, e, i) => {
                        K() || V.call(this, t, e, i)
                    }), this), _.on("change:castState", (function(t, e) {
                        j.trigger(o.pi, e)
                    })), _.on("change:fullscreen", (function(t, e) {
                        j.trigger(o.UW, {
                            fullscreen: e
                        }), e && t.set("playOnViewable", !1)
                    })), _.on("change:volume", (function(t, e) {
                        j.trigger(o.yH, {
                            volume: e
                        })
                    })), _.on("change:mute", (function(t) {
                        j.trigger(o.gy, {
                            mute: t.getMute()
                        })
                    })), _.on("change:playbackRate", (function(t, e) {
                        j.trigger(o.QF, {
                            playbackRate: e,
                            position: t.get("position")
                        })
                    }));
                    const z = function(t, e) {
                        "clickthrough" === e || "interaction" === e || "external" === e ? (_.set("playOnViewable", !1), _.off("change:playReason change:pauseReason", z)) : !e && _.get("autostart") && "playing" === K() && _.set("playReason", "autostart")
                    };

                    function H(t, e) {
                        (0, y.o8)(e) || _.set("viewable", Math.round(e))
                    }

                    function $() {
                        S && (_.get("generateSEOMetadata") && _.get("jwStart") >= 0 ? (j._model.setAutoStart("viewable"), j._model.set("playReason", "jwstart"), _.get("viewable") ? Y(_, _.get("viewable")) : X(_, _.get("viewable"))) : !0 !== _.get("autostart") || _.get("playOnViewable") || nt("autostart"), S.flush())
                    }

                    function q(t, e) {
                        j.trigger("viewable", {
                            viewable: e
                        }), D()
                    }

                    function D() {
                        if ((s.Z[0] === e || 1 === _.get("viewable")) && "idle" === _.get("state") && !1 === _.get("autostart"))
                            if (!m.primed() && k.OS.android) {
                                const t = m.getTestElement(),
                                    e = j.getMute();
                                Promise.resolve().then((() => oe(t, {
                                    muted: e
                                }))).then((() => {
                                    "idle" === _.get("state") && Z.preloadVideo()
                                })).catch(ye)
                            } else Z.preloadVideo()
                    }

                    function U(t) {
                        j._instreamAdapter.noResume = !t, t || st({
                            reason: "viewable"
                        })
                    }

                    function Q(t) {
                        t || (j.pause({
                            reason: "viewable"
                        }), _.set("playOnViewable", !t))
                    }

                    function Y(t, e) {
                        const i = K();
                        if (t.get("playOnViewable")) {
                            if (e) {
                                const e = "viewable",
                                    n = t.get("autoPause").pauseAds,
                                    s = t.get("pauseReason");
                                G() === o.bc ? nt(e) : i && !n || "interaction" === s || tt({
                                    reason: e
                                })
                            } else k.OS.mobile && !i && t.get("autoPause").viewability && (j.pause({
                                reason: "autostart"
                            }), _.set("playOnViewable", !0));
                            k.OS.mobile && i && U(e)
                        }
                    }

                    function J(t, e) {
                        t.get("floating") && t.get("intersectionRatio") <= .5 && t.get("activeTab") && (e = 1), Q(e)
                    }

                    function X(t, e) {
                        const i = t.get("state"),
                            n = K(),
                            s = t.get("playReason");
                        n ? t.get("autoPause").pauseAds ? J(t, e) : U(e) : i === o.r0 || i === o.Kb ? J(t, e) : i === o.bc && "playlist" === s && t.once("change:state", (() => {
                            Q(e)
                        }))
                    }

                    function K() {
                        const t = j._instreamAdapter;
                        return !!t && t.getState()
                    }

                    function G() {
                        const t = K();
                        return t || _.get("state")
                    }

                    function tt(t) {
                        if (A.cancel(), T = !1, _.get("state") === o.Vy) return Promise.resolve();
                        const i = it(t);
                        _.set("playReason", i);
                        const n = K();
                        return n ? (_.get("autostart") && "paused" === n && _.set("playReason", "autostart"), j._instreamAdapter.off("state", lt, j), e.pauseAd(!1, t), Promise.resolve()) : _.get("state") === o.xQ ? (ot(!0), j.setItemIndex(0).then((() => et(t, i)))) : et(t, i)
                    }

                    function et(t, e) {
                        if (!I && (I = !0, j.trigger(o.$j, {
                            playReason: e,
                            startTime: null != t && t.startTime ? t.startTime : _.get("playlistItem").starttime
                        }), I = !1, (0, de.C)() && !m.primed() && m.prime(), "playlist" === e && _.get("autoPause").viewability && X(_, _.get("viewable")), C)) {
                            if ((0, de.C)() && !L) {
                                const t = _.get("mediaElement");
                                j._instreamAdapter && (t.preload = "none"), t.load()
                            }
                            return C = !1, x = null, Promise.resolve()
                        }
                        return Z.playVideo(e).then(m.played)
                    }

                    function it(t) {
                        return null != t && t.reason ? t.reason : null != t && t.startTime ? "jwstart" : "unknown"
                    }

                    function nt(t) {
                        if (G() !== o.bc) return;
                        A = w($);
                        const e = _.get("advertising");
                        le(m, {
                            cancelable: A,
                            muted: j.getMute(),
                            allowMuted: !e || e.autoplayadsmuted
                        }).then((e => (_.set("canAutoplay", e), e !== se || j.getMute() || (_.set("autostartMuted", !0), mt(), _.once("change:autostartMuted", (function(t) {
                            _.get("autoPause").viewability || _.get("playOnViewable") || t.off("change:viewable", Y), j.trigger(o.gy, {
                                mute: _.getMute()
                            })
                        }))), v && j.getMute() && _.get("enableDefaultCaptions") && v.selectDefaultIndex(1), tt({
                            reason: t
                        }).catch((() => {
                            j._instreamAdapter || _.set("autostartFailed", !0), x = null
                        }))))).catch((t => {
                            if (_.set("canAutoplay", re), _.set("autostart", !1), !A.cancelled()) {
                                const e = (0, b.nm)(t);
                                j.trigger(o.wh, {
                                    reason: t.reason,
                                    code: e,
                                    error: t
                                })
                            }
                        }))
                    }

                    function ot(t) {
                        A.cancel(), S.empty();
                        if (K()) {
                            const t = j._instreamAdapter;
                            return t && (t.noResume = !0), void(x = () => Z.stopVideo())
                        }
                        x = null, !t && (T = !0), I && (C = !0), _.set("errorEvent", void 0), Z.stopVideo()
                    }

                    function st(t) {
                        const e = it(t);
                        _.set("pauseReason", e), _.set("playOnViewable", "viewable" === e)
                    }

                    function rt(t) {
                        x = null, A.cancel();
                        const i = K();
                        if (i && i !== o._5) return st(t), void(i === o.Kb ? f.once("dismissFloating", at) : e.pauseAd(!0, t));
                        switch (_.get("state")) {
                            case o.Vy:
                                return;
                            case o.r0:
                                st(t), Z.pause();
                                break;
                            case o.Kb:
                                st(t), Z.pause(), 0 === j.get("buffer") && (C = !0);
                                break;
                            default:
                                I && (C = !0)
                        }
                    }

                    function at() {
                        j._instreamAdapter.once("state", lt), j._instreamAdapter.noResume = !0
                    }

                    function lt() {
                        const t = _.get("pauseReason");
                        e.pauseAd(!0, {
                            reason: t
                        })
                    }

                    function ct(t, e) {
                        j.instreamDestroy(), ot(!0), j.setItemIndex(t), j.play(e)
                    }

                    function dt(t) {
                        ct(_.get("item") + 1, t)
                    }

                    function ut() {
                        j.completeCancelled() || (x = j.completeHandler, j.shouldAutoAdvance() ? j.nextItem() : _.get("repeat") ? dt({
                            reason: "repeat"
                        }) : (k.OS.iOS && pt(!1), _.set("playOnViewable", !1), _.set("state", o.xQ), j.trigger(o.V$, {})))
                    }

                    function ht(t, e) {
                        t = parseInt(t, 10) || 0, _.persistVideoSubtitleTrack(t, e), Z.subtitles = t, j.trigger(o.Z_, {
                            tracks: gt(),
                            track: t
                        })
                    }

                    function gt() {
                        return v ? v.getCaptionsList() : []
                    }

                    function pt(t) {
                        var e, i;
                        _.get("pip") && _.set("pip", !1), (0, y.jn)(t) || (t = !_.get("fullscreen")), !_.get("allowFullscreen") && t || (_.set("fullscreen", t), null != (e = j) && null != (i = e._instreamAdapter) && i._adModel && j._instreamAdapter._adModel.set("fullscreen", t))
                    }

                    function mt() {
                        Z.setMute(_.getMute()), Z.setVolume(_.get("volume"))
                    }
                    _.on("change:playReason change:pauseReason", z), j.on(o.WE, (t => z(null, t.playReason))), j.on(o.Ax, (t => z(null, t.pauseReason))), _.on("change:scrubbing", (function(t, e) {
                        e ? (P = _.get("state") !== o._5, rt({
                            reason: "interaction"
                        })) : P && tt({
                            reason: "interaction"
                        })
                    })), _.on("change:captionsList", (function(t, e) {
                        j.trigger(o.SL, {
                            tracks: e,
                            track: _.get("captionsIndex") || 0
                        })
                    })), _.on("change:mediaModel", (function(t, e) {
                        var i;
                        t.set("errorEvent", void 0), e.change("mediaState", (function(e, i) {
                            var n;
                            t.get("errorEvent") || t.set(o.uc, (n = i) === o.ik || n === o.nQ ? o.Kb : n)
                        }), this), e.change("duration", (function(e, i) {
                            if (0 === i) return;
                            const n = t.get("minDvrWindow"),
                                o = (0, ce.v)(i, n);
                            t.setStreamType(o)
                        }), this);
                        const n = "autoplay" === (null == t || null == t.get || null == (i = t.get("related")) ? void 0 : i.oncomplete);
                        let s = t.get("item") + 1,
                            r = t.get("playlist")[s];
                        if (r || n) {
                            const t = (i, o) => {
                                n && !r && (s = -1, r = _.get("nextUp"));
                                if (!(r && !r.daiSetting)) return;
                                const a = e.get("duration");
                                o && a > 0 && o >= a - h.l_ && (e.off("change:position", t, this), L ? Z.backgroundLoad(r, s) : Z.getAsyncItem(s).run())
                            };
                            e.on("change:position", t, this)
                        }
                    })), v = this._captions = new W(_), v.on("all", B, j), this.playerReady = function() {
                        f.once(o.sF, (() => {
                            try {
                                ! function() {
                                    _.change("visibility", H), R.off(), j.trigger(o.Rc, {
                                        setupTime: 0
                                    }), _.change("playlist", (function(t, e) {
                                        if (e.length) {
                                            const t = {
                                                    playlist: e
                                                },
                                                i = _.get("feedData");
                                            i && (t.feedData = Object.assign({}, i)), j.trigger(o.Ow, t)
                                        }
                                    })), _.change("playlistItem", (function(t, e) {
                                        if (e) {
                                            const {
                                                title: i,
                                                image: n
                                            } = e;
                                            if ("mediaSession" in navigator && window.MediaMetadata && (i || n)) try {
                                                navigator.mediaSession.metadata = new window.MediaMetadata({
                                                    title: i,
                                                    artist: window.location.hostname,
                                                    artwork: [{
                                                        src: n || ""
                                                    }]
                                                })
                                            } catch (t) {}
                                            e.chapters || t.setCues([]), j.trigger(o.gO, {
                                                index: _.get("item"),
                                                item: e
                                            })
                                        }
                                    })), R.flush(), R.destroy(), R = null, _.change("viewable", q), _.change("viewable", Y), _.get("autoPause").viewability ? _.change("viewable", X) : _.once("change:autostartFailed change:mute", (function(t) {
                                        t.off("change:viewable", Y)
                                    }));
                                    $(), _.on("change:itemReady", ((t, e) => {
                                        e && (S.flush(), _.get("pip") && !j._instreamAdapter && f.requestPip())
                                    }))
                                }()
                            } catch (t) {
                                j.triggerError((0, b.Mm)(b.ud, b.YQ, t))
                            }
                        })), f.init()
                    }, this.preload = D, this.load = function(t, e) {
                        const i = j._instreamAdapter;
                        let n;
                        switch (i && (i.noResume = !0), j.trigger("destroyPlugin", {}), ot(!0), Z.clearItemPromises(), A.cancel(), A = w($), F.cancel(), (0, de.C)() && m.prime(), typeof t) {
                            case "string":
                                _.attributes.item = 0, _.attributes.itemReady = !1, F = w((t => {
                                    if (t) return j.updatePlaylist((0, u.ZP)(t.playlist), t)
                                })), n = function(t) {
                                    return new Promise(((e, i) => {
                                        const n = new d.Z;
                                        n.on(o.Ow, (function(t) {
                                            e(t)
                                        })), n.on(o.pn, i, this), n.load(t)
                                    }))
                                }(t).then((t => F.async(t)));
                                break;
                            case "object":
                                _.attributes.item = 0, n = j.updatePlaylist((0, u.ZP)(t), e || {});
                                break;
                            case "number":
                                n = j.setItemIndex(t);
                                break;
                            default:
                                return
                        }
                        n.catch((t => {
                            j.triggerError((0, b.l9)(t, b.DD))
                        })), n.then((() => A.async())).catch(ye)
                    }, this.play = t => tt(t).catch(ye), this.pause = rt, this.seek = function(t, e) {
                        const i = _.get("state");
                        if (i === o.Vy) return;
                        e && i === o.r0 && _.get("playReason") !== e.reason && _.set("playReason", e.reason), Z.position = t;
                        const n = i === o.bc;
                        _.get("scrubbing") || !n && i !== o.xQ || (n && ((e = e || {}).startTime = t), this.play(e))
                    }, this.stop = ot, this.playlistItem = ct, this.playlistNext = dt, this.playlistPrev = function(t) {
                        ct(_.get("item") - 1, t)
                    }, this.setCurrentCaptions = ht, this.setCurrentQuality = function(t) {
                        Z.quality = t
                    }, this.setFullscreen = pt, this.setAllowFullscreen = function(t) {
                        _.set("allowFullscreen", t), !t && _.get("fullscreen") && j.setFullscreen(!1)
                    }, this.setPip = function(t) {
                        _.get("fullscreen") && _.set("fullscreen", !1), (0, y.jn)(t) || (t = !_.get("pip")), _.set("pip", t)
                    }, this.getCurrentQuality = function() {
                        return Z.quality
                    }, this.getQualityLevels = function() {
                        return Z.qualities
                    }, this.setCurrentAudioTrack = function(t) {
                        Z.audioTrack = t
                    }, this.getCurrentAudioTrack = function() {
                        return Z.audioTrack
                    }, this.getAudioTracks = function() {
                        return Z.audioTracks
                    }, this.getCurrentCaptions = function() {
                        return v ? v.getCurrentIndex() : -1
                    }, this.getCaptionsList = gt, this.getVisualQuality = function() {
                        const t = this._model.get("mediaModel");
                        return t ? t.get(o.ug) : null
                    }, this.getConfig = function() {
                        return this._model ? this._model.getConfiguration() : void 0
                    }, this.getState = G, this.next = ye, this.completeHandler = ut, this.completeCancelled = function() {
                        return ! function() {
                            const t = _.get("state");
                            return t === o.bc || t === o.xQ || t === o.Vy
                        }() || !!T && (T = !1, !0)
                    }, this.shouldAutoAdvance = function() {
                        return _.get("item") !== _.get("playlist").length - 1
                    }, this.nextItem = () => {
                        dt({
                            reason: "playlist"
                        })
                    }, this.setConfig = t => {
                        ((t, e) => {
                            const i = t._model,
                                n = i.attributes;
                            if (e.height && (e.height = (0, a.a)(e.height), e.width = e.width || n.width), e.width && (e.width = (0, a.a)(e.width), e.aspectratio ? (n.width = e.width, delete e.width) : e.height = n.height), e.width && e.height && !e.aspectratio && t._view.resize(e.width, e.height), e.floating) {
                                const t = i.get("floating") || {},
                                    n = Object.assign({}, t, e.floating); - 1 === l.indexOf(n.mode) ? delete e.floating : e.floating = n
                            }
                            Object.keys(e).forEach((o => {
                                const s = e[o];
                                if (void 0 !== s) switch (o) {
                                    case "aspectratio":
                                        i.set(o, (0, a.R)(s, n.width));
                                        break;
                                    case "autostart":
                                        ! function(t, e, i) {
                                            t.setAutoStart(i), "idle" === t.get("state") && !0 === i && e.play({
                                                reason: "autostart"
                                            })
                                        }(i, t, s);
                                        break;
                                    case "mute":
                                        t.setMute(s);
                                        break;
                                    case "volume":
                                        t.setVolume(s);
                                        break;
                                    case "playbackRateControls":
                                    case "playbackRates":
                                    case "repeat":
                                    case "stretching":
                                    case "floating":
                                        i.set(o, s)
                                }
                            }))
                        })(j, t)
                    }, this.setItemIndex = t => {
                        Z.stopVideo();
                        const e = _.get("playlist").length,
                            i = (0, u.bx)(t, e);
                        return Z.setActiveItem(i).catch((t => {
                            if (t.code === b._M) {
                                if (Z.asyncItems.reduce(((t, e) => t && e.skipped), !0)) throw t;
                                const e = this.shouldAutoAdvance;
                                return this.shouldAutoAdvance = () => !1, ut(), _.attributes.itemReady = !0, void(this.shouldAutoAdvance = e)
                            }
                            t.code >= 151 && t.code <= 162 && (t = (0, b.l9)(t, b.EY)), this.triggerError((0, b.Mm)(b.ul, b.tJ, t))
                        }))
                    }, this.getMediaElement = () => {
                        if (Z) return Z.mediaElement
                    }, this.detachMedia = function() {
                        if (I && (C = !0), _.get("autoPause").viewability && X(_, _.get("viewable")), !L) return Z.setAttached(!1);
                        Z.backgroundActiveMedia()
                    }, this.attachMedia = function() {
                        L ? Z.restoreBackgroundMedia() : Z.setAttached(!0), "function" == typeof x && x()
                    }, this.routeEvents = t => Z.routeEvents(t), this.forwardEvents = () => Z.forwardEvents(), this.playVideo = t => Z.playVideo(t), this.stopVideo = () => Z.stopVideo(), this.castVideo = (t, e) => Z.castVideo(t, e), this.stopCast = () => Z.stopCast(), this.backgroundActiveMedia = () => Z.backgroundActiveMedia(), this.restoreBackgroundMedia = () => Z.restoreBackgroundMedia(), this.preloadNextItem = () => {
                        Z.background.currentMedia && Z.preloadVideo()
                    }, this.isBeforeComplete = () => Z.beforeComplete, this.setVolume = t => {
                        _.setVolume(t), mt()
                    }, this.setMute = t => {
                        _.setMute(t), mt()
                    }, this.setPlaybackRate = t => {
                        _.setPlaybackRate(t)
                    }, this.getProvider = () => _.get("provider"), this.getWidth = () => _.get("containerWidth"), this.getHeight = () => _.get("containerHeight"), this.getItemQoe = () => _._qoeItem, this.setItemCallback = function(t) {
                        Z.itemCallback = t
                    }, this.getItemPromise = function(t) {
                        const e = _.get("playlist");
                        if (t < -1 || t > e.length - 1 || isNaN(t)) return null;
                        const i = Z.getAsyncItem(t);
                        return i ? i.promise : null
                    }, this.addButton = function(t, e, i, n, o) {
                        let s = _.get("customButtons") || [],
                            r = !1;
                        const a = {
                            img: t,
                            tooltip: e,
                            callback: i,
                            id: n,
                            btnClass: o
                        };
                        s = s.reduce(((t, e) => (e.id === n ? (r = !0, t.push(a)) : t.push(e), t)), []), r || s.unshift(a), _.set("customButtons", s)
                    }, this.removeButton = function(t) {
                        let e = _.get("customButtons") || [];
                        e = e.filter((e => e.id !== t)), _.set("customButtons", e)
                    }, this.resize = f.resize, this.getSafeRegion = f.getSafeRegion, this.setCaptions = f.setCaptions, this.checkBeforePlay = function() {
                        return I
                    }, this.setControls = function(t) {
                        (0, y.jn)(t) || (t = !_.get("controls")), _.set("controls", t), Z.controls = t
                    }, this.addCues = function(t) {
                        this.setCues(_.getCues().concat(t))
                    }, this.setCues = function(t) {
                        _.setCues(t)
                    }, this.getCues = function() {
                        return _.getCues()
                    }, this.getChapters = function() {
                        return _.get("playlistItem").chapters.timestamps
                    }, this.getCurrentChapter = function() {
                        const t = _.get("state"),
                            e = _.get("playlistItem").chapters.timestamps;
                        if (!e || !e.length || t === o.xQ) return null;
                        if (t === o.bc) return e[0];
                        const i = this.get("currentTime");
                        return (0, M.Mf)(i, e)
                    }, this.setChapter = function(t) {
                        try {
                            const e = _.get("playlistItem"),
                                i = e.chapters.timestamps;
                            if (!i) return;
                            t instanceof we.u || (t = new we.u(t));
                            let n = -1;
                            for (let e = 0; e < i.length; e++)
                                if (i[e].time === t.time) {
                                    n = e;
                                    break
                                } - 1 !== n ? i[n] = t : i.push(t), e.chapters.timestamps = i, _.setCues(_.getCues()), _.set("playlistItem", e), _.trigger("change:chapters", _, t)
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }, this.setPlaylistItem = function(t, e) {
                        const i = _.get("playlist"),
                            n = (0, u.bx)(t, i.length),
                            o = Z.getAsyncItem(n);
                        if (!o.replace(e)) return;
                        const s = i[n];
                        e && e !== s && (Z.asyncItems[n] = null, o.reject(new Error("Item replaced"))), n === _.get("item") && "idle" === _.get("state") && this.setItemIndex(n)
                    }, this.isBeforePlay = this.checkBeforePlay, this.createInstream = function() {
                        return this.instreamDestroy(), this._instreamAdapter = new N(this, _, f, m), this._instreamAdapter
                    }, this.instreamDestroy = function(t) {
                        this._instreamAdapter && (t && (this._instreamAdapter.noResume = !0), this._instreamAdapter.off("state", lt), this._instreamAdapter.destroy(), this._instreamAdapter = null), f.off("dismissFloating", at)
                    }, S = this._apiQueue = new c.Z(this, ["play", "pause", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setAllowFullscreen", "setFullscreen"], (() => !this._model.get("itemReady") || R)), S.queue.push(...g), f && f.setup()
                },
                requestPip(t) {
                    this._view && this._view.requestPip(t)
                },
                get(t) {
                    if (t in x.L4) {
                        const e = this._model.get("mediaModel");
                        return e ? e.get(t) : x.L4[t]
                    }
                    return this._model.get(t)
                },
                getContainer() {
                    return this.currentContainer || this.originalContainer
                },
                getMute() {
                    return this._model.getMute()
                },
                triggerError(t) {
                    const e = this._model;
                    t.message = e.get("localization").errors[t.key], delete t.key, e.set("errorEvent", t), e.set("state", o.Vy), e.once("change:state", (function() {
                        this.set("errorEvent", void 0)
                    }), e), this.trigger(o.pn, t)
                },
                updatePlaylist(t, e) {
                    const i = this._model;
                    try {
                        const n = (0, u.s7)(t, i, e);
                        (0, u._)(n);
                        const o = Object.assign({}, e);
                        delete o.playlist, i.set("feedData", o), i.set("playlist", n)
                    } catch (t) {
                        return Promise.reject(t)
                    }
                    return 1 === t.length && 1 === t[0].sources.length && "mp4" === t[0].sources[0].type && i.get("repeat") && !i.get("advertising") ? (i.set("repeat", !1), i.set("loop", !0)) : i.set("loop", !1), this.setItemIndex(i.get("item"))
                }
            });
            const ve = be,
                je = "afs_ads ad-placement",
                ke = (t, e) => {
                    let i, n = !1;
                    t && (i = (() => {
                        const t = document.createElement("div");
                        return t.className = je, t.innerHTML = "&nbsp;", t.style.width = "1px", t.style.height = "1px", t.style.position = "absolute", t.style.background = "transparent", t
                    })(), t.element().appendChild(i));
                    return {
                        onReady: () => {
                            if (n) return !0;
                            t && document.body.contains(t.element()) && (null !== i.offsetParent && i.className === je && "" !== i.innerHTML && 0 !== i.clientHeight || (n = !0)), n && e.trigger("adBlock")
                        },
                        getAdBlock: () => n
                    }
                };
            var _e = i(6593),
                xe = i(6245),
                Me = i(2894),
                Ce = i(4101),
                Se = i(7164);
            const Ee = (t, e, n, s) => {
                if (((t, e, i) => {
                    const n = t.get("related"),
                        o = e.getPlaylist(),
                        s = Boolean(null == n ? void 0 : n.file) || Boolean(i.recommendations);
                    return (o.length > 1 || s) && (!1 !== t.get("controls") || !n.disableRelated)
                })(t, e, s)) return ((t, e) => i.e(365).then((n => {
                    if (t.attributes._destroyed || e.getPlugin("related")) return;
                    const o = new Ce.Z;
                    return o.name = "related", o.js = i(8222).default, o
                }).bind(null, i)).catch((0, Me.Ep)(301129)))(t, e).then((i => {
                    let o = e.getPlugin("related");
                    if (o) return;
                    const s = t.get("related");
                    o = (0, Se.MK)(i, s, e), o.on("nextUp", (e => {
                        let i = null;
                        e === Object(e) && (i = (0, T.Z)(e), i.sources = (0, u.T5)(i, t), i.feedType = e.feedType), t.set("nextUp", i)
                    })), o.on("warning", (t => {
                        n.trigger("warning", t)
                    })), o.setup(t), o.addToPlayer.call(e)
                })).catch((e => (e.message = e.message || t.get("localization").errors[e.key], delete e.key, n.trigger(o.cM, e), e)))
            };
            var Ie = i(560);
            const Te = "__jw-ld-json",
                Pe = function({
                                  search: t,
                                  hash: e,
                                  origin: i,
                                  pathname: n
                              }, o = "{seek_to_second_number}") {
                    const s = `jw_start=${o}`;
                    if (t) {
                        const e = t.replace(/^\?/, "").split("&");
                        let i = -1;
                        for (let t = 0; t < e.length; t++)
                            if (/^jw_start=/.test(e[t])) {
                                i = t;
                                break
                            } - 1 !== i ? e[i] = s : e.push(s), t = `?${e.join("&")}`
                    } else t = `?${s}`;
                    return (i || "") + (n || "") + (t || "") + (e || "")
                },
                Ae = function(t) {
                    const e = t.getElementById(Te);
                    if (null != e && e.innerText) try {
                        let t = JSON.parse(e.innerText);
                        return Array.isArray(t) || (t = [t]), t
                    } catch (t) {}
                    return []
                },
                Fe = function(t, e) {
                    if (!t.length || !e) return -1;
                    const i = JSON.stringify(e);
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e];
                        if (JSON.stringify(n) === i) return e
                    }
                    return -1
                };
            class Re {
                constructor(t, e, i) {
                    this.controller_ = e, this.item_ = t, this.metadata_ = null, this.metadataToUpdate_ = {}, this.window_ = (null == i ? void 0 : i.window) || window, this.document_ = (null == i ? void 0 : i.document) || document
                }
                addMetadata() {
                    if (this.metadata_) return;
                    this.metadata_ = ((t, e, i = window) => {
                        var n;
                        const o = {
                            "@context": "https://schema.org",
                            "@type": "VideoObject",
                            name: t.title,
                            description: t.description,
                            thumbnailUrl: t.image,
                            potentialAction: {
                                "@type": "SeekToAction",
                                target: Pe(i.location),
                                "startOffset-input": "required name=seek_to_second_number"
                            }
                        };
                        if (t.pubdate && (o.uploadDate = new Date(1e3 * t.pubdate).toISOString()), null != t && null != (n = t.sources) && n.length) {
                            const e = (0, y.sE)(t.sources, (t => "video/mp4" === t.type)) || t.sources[0];
                            e && (o.contentUrl = e.file)
                        }
                        const s = e.getConfig();
                        (0, Ie.Z)() ? t.mediaid && s.pid && (o.embedUrl = `https://cdn.jwplayer.com/players/${t.mediaid}-${s.pid}.html`): o.embedUrl = i.location.href;
                        const r = e.get("duration");
                        return r && (o.duration = `PT${Math.floor(r/60)}M${Math.round(r)%60}S`), o
                    })(this.item_, this.controller_);
                    const t = Ae(this.document_).concat([this.metadata_]);
                    let e = this.document_.getElementById(Te);
                    if (e || (e = this.document_.createElement("script"), e.setAttribute("type", "application/ld+json"), e.setAttribute("id", Te), this.document_.head.appendChild(e)), e.innerText = JSON.stringify(t.length > 1 ? t : t[0]), (0, Ie.Z)()) try {
                        this.window_.parent.postMessage({
                            type: "metadata",
                            generateSEOMetadata: !0,
                            metadata: this.metadata_
                        }, "*")
                    } catch (t) {}
                }
                removeMetadata() {
                    const t = this.document_.getElementById(Te),
                        e = this.metadata_;
                    if (this.metadata_ = null, !e || !t) return;
                    const i = Ae(this.document_),
                        n = Fe(i, e);
                    n >= 0 && (i.splice(n, 1), i.length ? t.innerText = JSON.stringify(i.length > 1 ? i : i[0]) : t.parentElement && t.parentElement.removeChild(t))
                }
                updateDurationAsync(t) {
                    !this.metadata_.duration && t && (this.metadataToUpdate_.duration = `PT${Math.floor(t/60)}M${Math.round(t)%60}S`)
                }
                updateChapterCuesAsync(t) {
                    var e;
                    if (this.metadata_.hasPart) return;
                    let i;
                    null != (e = t = t.filter((t => "ads" !== t.cueType))) && e.length && (i = t.map((t => ({
                        "@type": "Clip",
                        name: t.text || "",
                        startOffset: t.begin,
                        endOffset: t.end,
                        url: Pe(window.location, Math.floor(t.begin))
                    }))), this.metadataToUpdate_.hasPart = i)
                }
                updateScriptTag() {
                    if (!Object.keys(this.metadataToUpdate_).length) return;
                    const t = Ae(this.document_),
                        e = Fe(t, this.metadata_),
                        i = this.document_.getElementById(Te);
                    if (e >= 0 && t.length) {
                        if (this.metadata_ = Object.assign(this.metadata_, this.metadataToUpdate_), t[e] = this.metadata_, i.innerText = JSON.stringify(t), (0, Ie.Z)()) try {
                            this.window_.parent.postMessage({
                                type: "metadata",
                                generateSEOMetadata: !0,
                                metadata: this.metadata_
                            }, "*")
                        } catch (t) {}
                        this.metadataToUpdate_ = {}
                    }
                }
                destroy() {
                    this.destroyed_ || (this.destroyed_ = !0, this.removeMetadata(), this.window_ = null, this.document_ = null, this.item_ = null, this.controller_ = null)
                }
            }
            ve.prototype.osPlayerSetup = ve.prototype.playerSetup, ve.prototype.playerSetup = function(t, e, s, r, a, l) {
                var c;
                this.osPlayerSetup(t, e, s, r, a, l);
                const d = this.shouldAutoAdvance,
                    {
                        _model: u,
                        _view: h,
                        modelShim: g
                    } = this,
                    p = ke(h, this),
                    m = u.get("advertising");
                if (null != g && null != (c = g.attributes) && c.ampController) {
                    const t = g.attributes.ampController,
                        e = this.playerReady;
                    this.ampController = t, delete g.attributes.ampController, this.playerReady = function(...i) {
                        e.apply(this, i), t.ready(u)
                    }
                }
                let f;
                t.analytics && (t.sdkplatform = t.sdkplatform || t.analytics.sdkplatform); {
                    u.once("change:visibility", (() => {
                        p.onReady.call(this)
                    }));
                    const t = (t, e, i, n) => {
                        if (!t) return;
                        const o = u.get("nextUp");
                        o && this.trigger(e, {
                            mode: o.mode,
                            ui: "nextup",
                            feedShownId: i,
                            target: o,
                            itemsShown: [o],
                            feedData: o.feedData
                        }), "function" == typeof n && n()
                    };
                    this.next = function(i) {
                        i = i || {};
                        const n = e.getPlugin("related");
                        t.call(this, n, "nextClick", i.feedShownId, (() => n.next(i)))
                    };
                    const i = this.nextItem;
                    this.nextItem = function() {
                        const n = e.getPlugin("related");
                        t.call(this, n, "nextAutoAdvance"), i.call(this)
                    }
                }
                this.updatePlaylist = function(t, i) {
                    const o = [];
                    return u.get("mobileSdk") || !(t => window.WebGLRenderingContext && t.some((t => t.stereomode && t.stereomode.length > 0)))(t) || e.getPlugin("vr") || console.warn("Playlist contains 360Â° or VR media. JW Player 360Â°/VR support is now deprecated"), (0, n.w0)(t) && o.push((0, n.lD)(u.get("edition"))), (0, xe.g)(t, "images", "image"), o.length ? (u.attributes.itemReady = !1, Promise.all(o).then((() => ve.prototype.updatePlaylist.call(this, t, i)))) : ve.prototype.updatePlaylist.call(this, t, i)
                }, this.shouldAutoAdvance = function() {
                    const t = u.get("related"),
                        e = u.get("nextUp");
                    return e && "playlist" === e.mode ? Boolean(t.shouldAutoAdvance) : d.call(this)
                };
                const w = (t, i) => {
                        p.onReady(), Ee(u, e, this, i)
                    },
                    b = () => (f || (f = i.e(926).then((t => new(0, i(8460).default)(h, u, e)).bind(null, i)).catch((t => {
                        throw t
                    })).catch((t => {
                        console.error("jwplayer.stats:", t)
                    }))), f),
                    v = t => {
                        this.trigger(o.cM, t)
                    },
                    j = () => {
                        if (window.chrome && k.Browser.chrome) return ((t, e, n) => {
                            i.e(977).then((n => {
                                const o = new(0, i(5016).default)(t, e);
                                return t.castToggle = o.castToggle.bind(t._castController), t._castController = o, t.stopCasting = o.stopCasting, o.init()
                            }).bind(null, i)).catch((0, Me.Jt)(301161)).catch(n)
                        })(this, u, v)
                    },
                    _ = () => {
                        const t = u.getVideo();
                        null != t && t.video && (t.video.webkitWirelessVideoPlaybackDisabled = !0)
                    },
                    x = () => {
                        if (window.WebKitPlaybackTargetAvailabilityEvent && !u.get("playlist").some((t => !(0, _e.H)(t.sources[0])))) return ((t, e, n) => i.e(520).then((n => {
                            const o = i(6342).default;
                            t._airplayController = new o(t, e), t.castToggle = t._airplayController.airplayToggle.bind(t._airplayController)
                        }).bind(null, i)).catch((0, Me.Jt)(301162)).catch(n))(this, u, v);
                        _()
                    };
                e.getAdBlock = p.getAdBlock, this.once(o.gO, (t => {
                    u.on("change:playlistItem", w, this);
                    if (!(null == m ? void 0 : m.outstream) && u.get("cast")) {
                        !(u.get("cast") || {}).customAppId && (0, n.w0)(u.get("playlist")) || j.apply(this), x.apply(this)
                    } else _();
                    Ee(u, e, this, t.item), u.get("generateSEOMetadata") && (this._seoMetadataManager = new Re(t.item, this), this._seoMetadataManager.addMetadata(), this.updateMetadataAsync = setTimeout((() => {
                        if (!this._seoMetadataManager) return;
                        const t = u.getCues();
                        null != t && t.length && this._seoMetadataManager.updateChapterCuesAsync(t), this._seoMetadataManager.updateDurationAsync(this.get("duration")), this._seoMetadataManager.updateScriptTag()
                    }), 4e3)), this.getContainer().addEventListener("keydown", (t => {
                        "n" === t.key && (u.set("displayStats", !u.get("displayStats")), b())
                    }), this), u.on("change:displayStats", ((t, e) => {
                        e ? b().then((t => t.show())) : !1 === e && b().then((t => t.hide()))
                    }), this)
                }), this), null != m && m.outstream && function(t, e) {
                    const {
                        _model: i,
                        _view: n
                    } = t;
                    let s = !1,
                        r = e.height,
                        a = e.width;
                    const l = t.getHeight;
                    t.getHeight = function() {
                        const t = i.get("aspectratio");
                        return t ? Math.round(i.get("containerWidth") * parseFloat(t) / 100) : r
                    };
                    const c = t.getWidth;
                    let d;
                    t.getWidth = function() {
                        return (0, y.hj)(a) ? a : c.call(this)
                    }, t.getSafeRegion = function(t) {
                        return n.getSafeRegion(t)
                    }, t.resize = function(t, e) {
                        return n.resize(t, e)
                    }, d = n.resize, n.resize = function(t, e) {
                        return r = e, a = t, d.call(n, t, e)
                    }, i.setAutoStart("viewable"), t.setMute(!0), t.setItemIndex = function() {
                        return i.setActiveItem(0), Promise.resolve()
                    }, t.updatePlaylist = function() {
                        return i.set("playlist", [{
                            sources: [{}]
                        }]), i.attributes.itemReady = !0, this.setItemIndex(0)
                    };
                    const u = t.attachMedia;
                    t.attachMedia = t.playerDestroy;
                    const h = () => (s || i.set("repeat", !1), i.get("backgroundLoading") || t._programController.mediaPool.clean(), i.set("state", o.xQ), t._programController.trigger(o.Ms, {}), u.call(t));
                    t._programController.playVideo = function() {
                        return Promise.resolve()
                    };
                    const g = t.createInstream;
                    t.createInstream = function() {
                        const e = g.call(this);
                        return e.noResume = !0, s = !1, e.on("state", (({
                                                                            newstate: e
                                                                        }) => {
                            e !== o.ik && e !== o.r0 || (t.attachMedia = h, t.getHeight = l, t.getWidth = c, n && (n.resize = d), s = !0)
                        })), e
                    }
                }(this, t)
            }, ve.prototype.osDestroy = ve.prototype.destroy, ve.prototype.destroy = function() {
                this._seoMetadataManager && (this._seoMetadataManager.destroy(), this._seoMetadataManager = null, this.updateMetadataAsync && clearTimeout(this.updateMetadataAsync)), this.osDestroy()
            };
            const Be = ve
        },
        3414: (t, e, i) => {
            "use strict";
            i.d(e, {
                B: () => n,
                K: () => o
            });
            const n = [40, 120, 320, 480, 640, 720, 1280, 1920],
                o = 4500
        },
        2977: (t, e, i) => {
            "use strict";
            i.d(e, {
                Bf: () => r,
                Cz: () => o,
                IJ: () => s
            });
            var n = i(3414);
            const o = t => {
                    if (null != t && t.length) {
                        const e = t.filter((t => {
                            var e;
                            return null == t || null == (e = t.type) || null == e.match ? void 0 : e.match(/video/)
                        }));
                        if (null != e && e.length) return e
                    }
                    return !1
                },
                s = t => {
                    let e = 0,
                        i = n.B[e];
                    for (; i < t && e < n.B.length;) i = n.B[e++];
                    return i
                },
                r = ({
                         mediaid: t,
                         image: e
                     }, i) => t || e ? t && new RegExp(`jwplayer.com/v2/media/${t}`).test(e) ? `https://cdn.jwplayer.com/v2/media/${t}/poster.jpg?width=${i}` : e : ""
        },
        6245: (t, e, i) => {
            "use strict";
            i.d(e, {
                g: () => s
            });
            var n = i(6234);
            let o;
            const s = (t, e, i) => {
                const s = (() => {
                    try {
                        o = window.localStorage.jwplayerLocalId
                    } catch (t) {}
                    return o = o || (0, n.B)(12)
                })();
                t.forEach((t => {
                    const {
                        variations: n
                    } = t;
                    if (null != n && n[e]) {
                        n.selected = n.selected || {};
                        const o = ((t, e) => {
                                const i = (t => {
                                        let e = 1794770992;
                                        for (let i = 0, n = t.length; i < n; i++) e ^= t.charCodeAt(i), e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
                                        return e >>> 0
                                    })(t) % 2520,
                                    n = e.reduce(((t, e) => t + e.weight), 0);
                                let o = 0;
                                for (let t = 0; t < e.length; t++) {
                                    const s = e[t];
                                    if (o += 2520 * s.weight / n, o > i) return s
                                }
                            })(s, n[e]),
                            r = o[i];
                        r && (t[i] = r, n.selected[e] = o)
                    }
                }))
            }
        },
        3296: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => l
            });
            var n = i(2799),
                o = i(8348),
                s = i(1776),
                r = i(7683),
                a = i(5099);
            class l {
                constructor(t, e, i, n, o) {
                    this.hoverElement = e, this.item = i, this.model = n, this.onView = o, this.type = t, this.container = null, this.played = !1, this.seeking = !1, this.completed = !1, this.src = i.videoThumbnail, this.video = (0, r.V)({
                        class: "jw-reset jw-video-thumbnail"
                    }), this.video.muted = !0, this.onPlay = this.onPlay.bind(this), this.onPause = this.onPause.bind(this), this.onEnded = this.onEnded.bind(this), this.onError = this.onError.bind(this)
                }
                adapt() {
                    var t;
                    const {
                        video: e
                    } = this;
                    switch (this.type) {
                        case "overlayItem":
                            this.container = this.hoverElement.querySelector(".jw-related-item-poster"), null != this && null != (t = this.container) && t.parentElement && !this.hoverElement.className.match(/jw-related-item-next-up/) && (this.hoverElement = this.container.parentElement);
                            break;
                        case "widgetItem":
                            this.container = this.hoverElement.querySelector(".jw-related-shelf-item-image");
                            break;
                        case "shelfItem":
                        default:
                            break;
                        case "posterItem":
                            e.setAttribute("loop", "")
                    }
                    this.container || (this.container = (0, n.az)('<div class="jw-video-thumbnail-generated"></div>'))
                }
                onPlay() {
                    const {
                        video: t
                    } = this;
                    return this.src ? ((0, n.cn)(this.video, "jw-video-thumbnail-visible"), t && !t.src && (t.src = this.src, t.load()), this.completed && (t.currentTime = 0, (0, n.IV)(t, "jw-video-thumbnail-completed"), this.completed = !1), o.OS.iOS ? Promise.resolve(this.seekPlay()) : this.asyncPlay()) : this.destroy()
                }
                onPause() {
                    (0, n.IV)(this.video, "jw-video-thumbnail-visible"), this.seeking = !1, this.video.pause()
                }
                onEnded() {
                    "posterItem" !== this.type && (0, n.cn)(this.video, "jw-video-thumbnail-completed"), this.completed = !0, this.seeking = !1
                }
                onFirstFrame() {
                    this.played = !0, "function" == typeof this.onView && this.onView(this.item)
                }
                onError() {
                    this.destroy()
                }
                onViewPoster(t, e) {
                    if (e) return this.onPlay();
                    this.onPause()
                }
                asyncPlay() {
                    const t = this.video;
                    return (t.play() || (0, a.Z)(t)).then((() => {
                        this.played || this.onFirstFrame()
                    })).catch((t => {
                        if (20 !== t.code) return 9 !== t.code && "Failed to load because no supported source was found." !== t.message ? this.seekPlay() : void this.destroy()
                    }))
                }
                seekPlay() {
                    const t = this.video,
                        e = t.hasAttribute("loop");
                    let i = 0;
                    const n = this.seek = o => {
                            if (!this.seeking) return;
                            if (!t.duration) return (0, s.U)(n);
                            i || (i = o);
                            let r = (o - i) / 1e3;
                            e ? r %= t.duration : r = Math.min(r, t.duration), t.currentTime = r, t.duration > r || e ? (0, s.U)(n) : this.onEnded()
                        },
                        o = this.handleSeek = () => {
                            this.onFirstFrame(), this.video.removeEventListener("seeked", o)
                        };
                    this.played || this.video.addEventListener("seeked", o), this.seeking = !0, (0, s.U)(n)
                }
                addEventListeners() {
                    "posterItem" === this.type ? (this.model.once("change:state", this.destroy, this), this.model.on("change:viewable", this.onViewPoster, this)) : (o.OS.mobile || (this.hoverElement.addEventListener("mouseenter", this.onPlay), this.hoverElement.addEventListener("mouseleave", this.onPause)), this.video.addEventListener("ended", this.onEnded)), this.video.addEventListener("error", this.onError)
                }
                removeEventListeners() {
                    "posterItem" === this.type ? (this.model.off("change: state", this.destroy, this), this.model.off("change:viewable", this.onViewPoster, this)) : (o.OS.mobile || (this.hoverElement.removeEventListener("mouseenter", this.onPlay), this.hoverElement.removeEventListener("mouseleave", this.onPause)), this.video.removeEventListener("ended", this.onEnded)), this.video.removeEventListener("error", this.onError), this.handleSeek && this.video.removeEventListener("seeked", this.handleSeek)
                }
                init() {
                    this.adapt(this.hoverElement.className), (0, n.cn)(this.container, "jw-video-thumbnail-container"), "widgetItem" === this.type ? (0, n.SH)(this.container, this.video) : this.container.appendChild(this.video), this.container.parentElement && "posterItem" !== this.type ? "shelfItem" === this.type && (0, n.SH)(this.hoverElement, this.container) : this.hoverElement.appendChild(this.container), this.addEventListeners(), "posterItem" === this.type && this.model.get("viewable") && this.onViewPoster(null, !0)
                }
                isDestroyed() {
                    return !this.video
                }
                destroy() {
                    this.isDestroyed() || (this.removeEventListeners(), this.seeking = !1, this.seek && (0, s.W)(this.seek), this.onPause(), this.video.removeAttribute("src"), this.video.load(), this.container.removeChild(this.video), this.video = null, this.container.className.match(/jw-video-thumbnail-generated/) ? this.container.parentNode.removeChild(this.container) : (0, n.IV)(this.container, "jw-video-thumbnail-container"), this.container = null)
                }
            }
        },
        8901: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(8081),
                o = i.n(n),
                s = i(3645),
                r = i.n(s)()(o());
            r.push([t.id, '.jw-reset{text-align:left;direction:ltr}.jw-reset,.jw-reset-text{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-transform:none;vertical-align:baseline;border:0;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}body .jw-error,body .jwplayer.jw-state-error{height:100%;width:100%}.jw-title{position:absolute;top:0}.jw-background-color{background:rgba(0,0,0,.4)}.jw-text{color:rgba(255,255,255,.8)}.jw-knob{color:rgba(255,255,255,.8);background-color:#fff}.jw-button-color{color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):focus,:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):hover{color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:rgba(255,255,255,.8)}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:0}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-rail{background:rgba(255,255,255,.3)}.jw-buffer{background:rgba(255,255,255,.3)}.jw-progress{background:#f2f2f2}.jw-time-tip,.jw-volume-tip{border:0}.jw-slider-volume.jw-volume-tip.jw-background-color.jw-slider-vertical{background:0 0}.jw-skip{padding:.5em;outline:0}.jw-skip .jw-skip-icon,.jw-skip .jw-skiptext{color:rgba(255,255,255,.8)}.jw-skip.jw-skippable:focus .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-skip-icon{color:#fff}.jw-icon-cast google-cast-launcher{--connected-color:#fff;--disconnected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast google-cast-launcher:focus{outline:0}.jw-icon-cast google-cast-launcher.jw-off{--connected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast:focus google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast:hover google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-color-active{color:#fff;stroke:#fff;border-color:#fff}:not(.jw-flag-touch) .jw-color-active-hover:focus,:not(.jw-flag-touch) .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}.jw-option{color:rgba(255,255,255,.8)}.jw-option.jw-active-option{color:#fff;background-color:rgba(255,255,255,.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;outline:0}.jwplayer *{box-sizing:inherit}.jwplayer.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:66px}.jw-breakpoint-7 .jw-plugin{bottom:132px}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-captions,.jw-preview,.jw-title{pointer-events:none}.jw-logo,.jw-media{pointer-events:all}.jw-wrapper{background-color:#000;position:absolute;top:0;left:0;right:0;bottom:0}.jw-hidden-accessibility{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.jw-contract-trigger::before{content:"";overflow:hidden;width:200%;height:200%;display:block;position:absolute;top:0;left:0}.jwplayer .jw-media video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:0 0;-webkit-tap-highlight-color:transparent;-webkit-focus-ring-color:transparent;outline:0}.jwplayer .jw-media video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform .jw-media video{object-fit:contain}.jwplayer.jw-stretch-none .jw-media video{object-fit:none}.jwplayer.jw-stretch-fill .jw-media video{object-fit:cover}.jwplayer.jw-stretch-exactfit .jw-media video{object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jw-preview{background-size:cover}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;padding-top:20px;width:100%;z-index:1}.jw-title-primary,.jw-title-secondary{color:#fff;padding-left:20px;padding-right:20px;padding-bottom:.5em;overflow:hidden;text-overflow:ellipsis;direction:unset;white-space:nowrap;width:100%}.jw-title-primary{font-size:1.625em}.jw-breakpoint-2 .jw-title-primary,.jw-breakpoint-3 .jw-title-primary{font-size:1.5em}.jw-flag-small-player .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-primary{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;padding-bottom:0;margin-bottom:.5em;white-space:pre-wrap;line-height:1.2}.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary{font-size:1em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-secondary,.jw-flag-small-player .jw-title-secondary,.jw-title-secondary:empty{display:none}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5;width:100%}.jw-text-track-cue{background-color:rgba(0,0,0,.5);color:#fff;padding:.1em .3em}.jwplayer video::-webkit-media-controls{display:none;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jwplayer.jw-flag-media-audio.jw-state-playing .jw-captions,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden) .jw-captions,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing) .jw-captions{max-height:calc(100% - 60px)}.jwplayer.jw-flag-media-audio.jw-state-playing:not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container{max-height:calc(100% - 60px)}.jw-logo{position:absolute;margin:20px;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto;outline:0}.jw-logo.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{left:0}.jw-logo-bottom-right{right:0}.jw-logo-bottom-left,.jw-logo-bottom-right{bottom:44px;transition:bottom 150ms cubic-bezier(0,.25,.25,1)}.jw-state-idle .jw-logo{z-index:1}.jw-state-setup .jw-wrapper{background-color:inherit}.jw-state-setup .jw-controls,.jw-state-setup .jw-controls-backdrop,.jw-state-setup .jw-logo{visibility:hidden}span.jw-break{display:block}body .jw-error,body .jwplayer.jw-state-error{background-color:#333;color:#fff;font-size:16px;display:table;opacity:1;position:relative}body .jw-error .jw-display,body .jwplayer.jw-state-error .jw-display{display:none}body .jw-error .jw-media,body .jwplayer.jw-state-error .jw-media{cursor:default}body .jw-error .jw-preview,body .jwplayer.jw-state-error .jw-preview{background-color:#333}body .jw-error .jw-error-msg,body .jwplayer.jw-state-error .jw-error-msg{background-color:#000;border-radius:2px;display:flex;flex-direction:row;align-items:stretch;padding:20px}body .jw-error .jw-error-msg .jw-icon,body .jwplayer.jw-state-error .jw-error-msg .jw-icon{height:30px;width:30px;margin-right:20px;flex:0 0 auto;align-self:center}body .jw-error .jw-error-msg .jw-icon:empty,body .jwplayer.jw-state-error .jw-error-msg .jw-icon:empty{display:none}body .jw-error .jw-error-msg .jw-info-container,body .jwplayer.jw-state-error .jw-error-msg .jw-info-container{margin:0;padding:0}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg{flex-direction:column}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text{text-align:center}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon{flex:.5 0 auto;margin-right:0;margin-bottom:20px}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break{display:inline}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break:before{content:" "}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg{height:100%;width:100%;top:0;position:absolute;left:0;background:#000;transform:none;padding:4px 16px;z-index:1}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg.jw-info-overlay{max-width:none;max-height:none}.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-title,body .jwplayer.jw-state-error .jw-title{display:block}.jw-state-idle .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-preview,body .jwplayer.jw-state-error .jw-preview{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-floating{background-size:cover;background-color:#000}.jw-flag-floating.jw-floating-dismissible .jw-wrapper{bottom:3rem}.jw-flag-floating .jw-wrapper{position:fixed;z-index:2147483647;top:auto;bottom:1rem;left:auto;right:1rem;max-width:400px;max-height:400px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating .jw-wrapper:not(.jw-floating-dragged){animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating .jw-wrapper{width:100%;left:0;right:0}}.jw-flag-floating .jw-wrapper.jw-floating-dragging{transition:none!important}.jw-flag-floating .jw-wrapper .jw-media{touch-action:none}@media screen and (max-device-width:480px) and (orientation:portrait){.jw-flag-touch.jw-flag-floating .jw-wrapper{animation:none;top:0;margin-top:62px;bottom:auto;max-width:none;max-height:none}}.jw-flag-floating .jw-icon{margin:0;padding:0}.jw-flag-floating .jw-float-bar-icon{pointer-events:all;cursor:pointer;display:flex;height:24px;width:24px}.jw-flag-floating .jw-float-bar-icon:hover{background:#1d1d1d;border-radius:100px}.jw-flag-floating .jw-float-bar-icon .jw-svg-icon{display:block;margin:auto;padding:0;height:10px;width:10px}.jw-flag-floating.jw-floating-dismissible .jw-dismiss-icon{display:none}.jw-flag-floating.jw-floating-dismissible .jw-float-bar{display:inline-flex;flex-direction:row;align-items:center;position:fixed;z-index:2147483647;top:100%;height:32px;width:100%;max-height:32px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating.jw-floating-dismissible .jw-float-bar:not(.jw-floating-dragged){animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating.jw-floating-dismissible .jw-float-bar{left:0;right:0;top:auto}}.jw-flag-floating.jw-floating-dismissible.jw-state-paused .jw-logo,.jw-flag-floating.jw-floating-dismissible:not(.jw-flag-user-inactive) .jw-logo{display:none}.jw-float-bar{display:none;position:absolute;padding:4px 8px;background:#2f2d2d;touch-action:none}.jw-float-bar-title{width:100%;max-height:24px;font-family:Arial,sans-serif;font-style:normal;font-weight:700;font-size:13px;line-height:16px;margin-left:0;padding-right:22px;color:rgba(255,255,255,.8)!important;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@keyframes jw-float-to-bottom{from{transform:translateY(100%)}to{transform:translateY(0)}}.jw-flag-top{margin-top:2em;overflow:visible}.jw-top{height:2em;line-height:2;pointer-events:none;text-align:center;opacity:.8;position:absolute;top:-2em;width:100%}.jw-top .jw-icon{cursor:pointer;pointer-events:all;height:auto;width:auto}.jw-top .jw-text{color:#555}', ""]);
            const a = r
        },
        3591: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(8081),
                o = i.n(n),
                s = i(3645),
                r = i.n(s)()(o());
            r.push([t.id, ".jw-logo-button{pointer-events:none;width:132px}.jw-svg-icon-watermark{color:#ff0046;width:96px}.jw-controlbar .jw-svg-icon-jwplayer-logo{display:none;color:#ff0046}.jw-flag-small-player .jw-logo-button{width:44px}.jw-flag-small-player .jw-svg-icon-watermark{display:none}.jw-flag-small-player .jw-controlbar .jw-svg-icon-jwplayer-logo{display:block}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-logo-button{bottom:6px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline.jw-logo-button{width:186px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline.jw-logo-button .jw-svg-icon.jw-svg-icon-watermark{width:150px}", ""]);
            const a = r
        },
        2792: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(8081),
                o = i.n(n),
                s = i(3645),
                r = i.n(s)()(o());
            r.push([t.id, ".jw-flag-outstream.jw-state-complete .jw-controls,.jw-flag-outstream.jw-state-complete .jw-controls-backdrop{display:none}.jw-flag-outstream.jw-state-complete .jw-media{pointer-events:none}.jw-flag-outstream.jw-state-complete .jw-preview{background-color:#f2f2f2}.jw-flag-outstream .jw-wrapper{transition:transform 250ms cubic-bezier(0,.25,.25,1)}.jw-flag-outstream .jw-dismiss-icon{position:absolute;right:0;bottom:0}.jw-flag-outstream-close{max-height:1px;animation:250ms jw-outstream-collapse 1 step-end}@keyframes jw-outstream-collapse{0%{max-height:initial}100%{max-height:1px}}.jw-flag-outstream-close .jw-wrapper{transform:scaleY(0)}.jw-flag-outstream-pending{max-height:1px;max-width:100%}.jw-flag-outstream-pending.jw-flag-top{margin-top:0;overflow:hidden}.jw-flag-outstream-pending .jw-wrapper{transform:scaleY(0)}", ""]);
            const a = r
        },
        3645: t => {
            "use strict";
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var i = "",
                            n = void 0 !== e[5];
                        return e[4] && (i += "@supports (".concat(e[4], ") {")), e[2] && (i += "@media ".concat(e[2], " {")), n && (i += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), i += t(e), n && (i += "}"), e[2] && (i += "}"), e[4] && (i += "}"), i
                    })).join("")
                }, e.i = function(t, i, n, o, s) {
                    "string" == typeof t && (t = [
                        [null, t, void 0]
                    ]);
                    var r = {};
                    if (n)
                        for (var a = 0; a < this.length; a++) {
                            var l = this[a][0];
                            null != l && (r[l] = !0)
                        }
                    for (var c = 0; c < t.length; c++) {
                        var d = [].concat(t[c]);
                        n && r[d[0]] || (void 0 !== s && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = s), i && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = i) : d[2] = i), o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = o) : d[4] = "".concat(o)), e.push(d))
                    }
                }, e
            }
        },
        8081: t => {
            "use strict";
            t.exports = function(t) {
                return t[1]
            }
        },
        5430: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => w
            });
            var n = i(3379),
                o = i.n(n),
                s = i(7795),
                r = i.n(s),
                a = i(569),
                l = i.n(a),
                c = i(3565),
                d = i.n(c),
                u = i(9216),
                h = i.n(u),
                g = i(4589),
                p = i.n(g),
                m = i(8901),
                f = {};
            f.styleTagTransform = p(), f.setAttributes = d(), f.insert = l().bind(null, "head"), f.domAPI = r(), f.insertStyleElement = h();
            o()(m.Z, f);
            const w = m.Z && m.Z.locals ? m.Z.locals : void 0
        },
        678: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => w
            });
            var n = i(3379),
                o = i.n(n),
                s = i(7795),
                r = i.n(s),
                a = i(569),
                l = i.n(a),
                c = i(3565),
                d = i.n(c),
                u = i(9216),
                h = i.n(u),
                g = i(4589),
                p = i.n(g),
                m = i(3591),
                f = {};
            f.styleTagTransform = p(), f.setAttributes = d(), f.insert = l().bind(null, "head"), f.domAPI = r(), f.insertStyleElement = h();
            o()(m.Z, f);
            const w = m.Z && m.Z.locals ? m.Z.locals : void 0
        },
        8206: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => w
            });
            var n = i(3379),
                o = i.n(n),
                s = i(7795),
                r = i.n(s),
                a = i(569),
                l = i.n(a),
                c = i(3565),
                d = i.n(c),
                u = i(9216),
                h = i.n(u),
                g = i(4589),
                p = i.n(g),
                m = i(2792),
                f = {};
            f.styleTagTransform = p(), f.setAttributes = d(), f.insert = l().bind(null, "head"), f.domAPI = r(), f.insertStyleElement = h();
            o()(m.Z, f);
            const w = m.Z && m.Z.locals ? m.Z.locals : void 0
        },
        3379: t => {
            "use strict";
            var e = [];

            function i(t) {
                for (var i = -1, n = 0; n < e.length; n++)
                    if (e[n].identifier === t) {
                        i = n;
                        break
                    } return i
            }

            function n(t, n) {
                for (var s = {}, r = [], a = 0; a < t.length; a++) {
                    var l = t[a],
                        c = n.base ? l[0] + n.base : l[0],
                        d = s[c] || 0,
                        u = "".concat(c, " ").concat(d);
                    s[c] = d + 1;
                    var h = i(u),
                        g = {
                            css: l[1],
                            media: l[2],
                            sourceMap: l[3],
                            supports: l[4],
                            layer: l[5]
                        };
                    if (-1 !== h) e[h].references++, e[h].updater(g);
                    else {
                        var p = o(g, n);
                        n.byIndex = a, e.splice(a, 0, {
                            identifier: u,
                            updater: p,
                            references: 1
                        })
                    }
                    r.push(u)
                }
                return r
            }

            function o(t, e) {
                var i = e.domAPI(e);
                i.update(t);
                return function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
                        i.update(t = e)
                    } else i.remove()
                }
            }
            t.exports = function(t, o) {
                var s = n(t = t || [], o = o || {});
                return function(t) {
                    t = t || [];
                    for (var r = 0; r < s.length; r++) {
                        var a = i(s[r]);
                        e[a].references--
                    }
                    for (var l = n(t, o), c = 0; c < s.length; c++) {
                        var d = i(s[c]);
                        0 === e[d].references && (e[d].updater(), e.splice(d, 1))
                    }
                    s = l
                }
            }
        },
        569: t => {
            "use strict";
            var e = {};
            t.exports = function(t, i) {
                var n = function(t) {
                    if (void 0 === e[t]) {
                        var i = document.querySelector(t);
                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                            i = i.contentDocument.head
                        } catch (t) {
                            i = null
                        }
                        e[t] = i
                    }
                    return e[t]
                }(t);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                n.appendChild(i)
            }
        },
        9216: t => {
            "use strict";
            t.exports = function(t) {
                var e = document.createElement("style");
                return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
            }
        },
        3565: (t, e, i) => {
            "use strict";
            t.exports = function(t) {
                var e = i.nc;
                e && t.setAttribute("nonce", e)
            }
        },
        7795: t => {
            "use strict";
            t.exports = function(t) {
                var e = t.insertStyleElement(t);
                return {
                    update: function(i) {
                        ! function(t, e, i) {
                            var n = "";
                            i.supports && (n += "@supports (".concat(i.supports, ") {")), i.media && (n += "@media ".concat(i.media, " {"));
                            var o = void 0 !== i.layer;
                            o && (n += "@layer".concat(i.layer.length > 0 ? " ".concat(i.layer) : "", " {")), n += i.css, o && (n += "}"), i.media && (n += "}"), i.supports && (n += "}");
                            var s = i.sourceMap;
                            s && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), e.styleTagTransform(n, t, e.options)
                        }(e, t, i)
                    },
                    remove: function() {
                        ! function(t) {
                            if (null === t.parentNode) return !1;
                            t.parentNode.removeChild(t)
                        }(e)
                    }
                }
            }
        },
        4589: t => {
            "use strict";
            t.exports = function(t, e) {
                if (e.styleSheet) e.styleSheet.cssText = t;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(t))
                }
            }
        },
        8675: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-jwplayer-logo" viewBox="0 0 992 1024" focusable="false"><path d="M144 518.4c0 6.4-6.4 6.4-6.4 0l-3.2-12.8c0 0-6.4-19.2-12.8-38.4 0-6.4-6.4-12.8-9.6-22.4-6.4-6.4-16-9.6-28.8-6.4-9.6 3.2-16 12.8-16 22.4s0 16 0 25.6c3.2 25.6 22.4 121.6 32 140.8 9.6 22.4 35.2 32 54.4 22.4 22.4-9.6 28.8-35.2 38.4-54.4 9.6-25.6 60.8-166.4 60.8-166.4 6.4-12.8 9.6-12.8 9.6 0 0 0 0 140.8-3.2 204.8 0 25.6 0 67.2 9.6 89.6 6.4 16 12.8 28.8 25.6 38.4s28.8 12.8 44.8 12.8c6.4 0 16-3.2 22.4-6.4 9.6-6.4 16-12.8 25.6-22.4 16-19.2 28.8-44.8 38.4-64 25.6-51.2 89.6-201.6 89.6-201.6 6.4-12.8 9.6-12.8 9.6 0 0 0-9.6 256-9.6 355.2 0 25.6 6.4 48 12.8 70.4 9.6 22.4 22.4 38.4 44.8 48s48 9.6 70.4-3.2c16-9.6 28.8-25.6 38.4-38.4 12.8-22.4 25.6-48 32-70.4 19.2-51.2 35.2-102.4 51.2-153.6s153.6-540.8 163.2-582.4c0-6.4 0-9.6 0-12.8 0-9.6-6.4-19.2-16-22.4-16-6.4-32 0-38.4 12.8-6.4 16-195.2 470.4-195.2 470.4-6.4 12.8-9.6 12.8-9.6 0 0 0 0-156.8 0-288 0-70.4-35.2-108.8-83.2-118.4-22.4-3.2-44.8 0-67.2 12.8s-35.2 32-48 54.4c-16 28.8-105.6 297.6-105.6 297.6-6.4 12.8-9.6 12.8-9.6 0 0 0-3.2-115.2-6.4-144-3.2-41.6-12.8-108.8-67.2-115.2-51.2-3.2-73.6 57.6-86.4 99.2-9.6 25.6-51.2 163.2-51.2 163.2v3.2z"></path></svg>'
        }
    }
]);