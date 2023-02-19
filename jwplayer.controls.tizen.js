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
    [74, 716], {
        7387: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => o
            });
            var n = i(2957);
            const s = t => {
                const e = {};
                let i = t.split("\r\n");
                1 === i.length && (i = t.split("\n"));
                let s = 1;
                if (i[0].indexOf(" --\x3e ") > 0 && (s = 0), i.length > s + 1 && i[s + 1]) {
                    const t = i[s],
                        o = t.indexOf(" --\x3e ");
                    o > 0 && (e.begin = (0, n.m9)(t.substr(0, o)), e.end = (0, n.m9)(t.substr(o + 5)), e.text = i.slice(s + 1).join("\r\n"))
                }
                return e
            };

            function o(t) {
                const e = [];
                let i = (t = (0, n.fy)(t)).split("\r\n\r\n");
                1 === i.length && (i = t.split("\n\n"));
                for (let t = 0; t < i.length; t++) {
                    if ("WEBVTT" === i[t]) continue;
                    const n = s(i[t]);
                    n.text && e.push(n)
                }
                return e
            }
        },
        4667: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => o
            });
            var n = i(2799);
            let s;

            function o(t) {
                return s || (s = new DOMParser), (0, n.gB)((0, n.oH)(s.parseFromString(t, "image/svg+xml").documentElement))
            }
        },
        1831: (t, e, i) => {
            "use strict";
            i.d(e, {
                R: () => w,
                Z: () => d
            });
            var n = i(8348),
                s = i(2894),
                o = i(328),
                a = i(1643),
                l = i(974),
                r = i(2799),
                c = i(6042);
            let p;
            const w = {
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
                    let o, h, d, u, j, g, m, f;
                    const b = document.createElement("div");
                    b.className = "jw-captions jw-reset";
                    const v = () => {
                            const t = e.get("containerHeight");
                            if (!t) return;
                            let i;
                            if (e.get("fullscreen") && n.OS.iOS) i = null;
                            else {
                                const s = t * m;
                                i = Math.round(10 * (t => {
                                    const i = e.get("mediaElement");
                                    if (null != i && i.videoHeight) {
                                        const {
                                            videoWidth: t,
                                            videoHeight: s
                                        } = i, o = t / s;
                                        let a = e.get("containerHeight"),
                                            l = e.get("containerWidth");
                                        if (e.get("fullscreen") && n.OS.mobile) {
                                            const {
                                                screen: t
                                            } = window;
                                            t.orientation && (a = t.availHeight, l = t.availWidth)
                                        }
                                        if (l && a && t && s) return (l / a > o ? a : s * l / t) * m
                                    }
                                    return t
                                })(s)) / 10
                            }
                            e.get("renderCaptionsNatively") ? ((t, e) => {
                                const i = `#${t} .jw-video::-webkit-media-text-track-display`;
                                e && (e += "px", n.OS.iOS && (0, l.iv)(i, {
                                    fontSize: "inherit"
                                }, t, !0)), f.fontSize = e, (0, l.iv)(i, f, t, !0)
                            })(e.get("id"), i) : (0, l.oB)(b, {
                                fontSize: i
                            })
                        },
                        y = () => {
                            if (!(0, c.xV)(o.fontSize)) return;
                            e.get("containerHeight") ? m = w.fontScale * (o.userFontScale || 1) * o.fontSize / w.fontSize : e.once("change:containerHeight", y, this)
                        },
                        x = (t, e, i) => {
                            const n = (0, l.HY)("#000000", i);
                            "dropShadow" === t ? e.textShadow = `0 2px 1px ${n}` : "raised" === t ? e.textShadow = `0 0 5px ${n}, 0 1px 5px ${n}, 0 2px 5px ${n}` : "depressed" === t ? e.textShadow = `0 -2px 1px ${n}` : "uniform" === t && (e.textShadow = `-2px 0 1px ${n},2px 0 1px ${n},0 -2px 1px ${n},0 2px 1px ${n},-1px 1px 1px ${n},1px 1px 1px ${n},1px -1px 1px ${n},1px 1px 1px ${n}`)
                        },
                        k = (t, e) => {
                            v(), ((t, e) => {
                                n.Browser.safari && (0, l.iv)(`#${t} .jw-video::-webkit-media-text-track-display-backdrop`, {
                                    backgroundColor: e.backgroundColor
                                }, t, !0), (0, l.iv)(`#${t} .jw-video::-webkit-media-text-track-display`, f, t, !0), (0, l.iv)(`#${t} .jw-video::cue`, e, t, !0)
                            })(t, e), ((t, e) => {
                                (0, l.iv)(`#${t} .jw-text-track-display`, f, t), (0, l.iv)(`#${t} .jw-text-track-cue`, e, t)
                            })(t, e)
                        };
                    this.show = function() {
                        (0, r.cn)(b, "jw-captions-enabled")
                    }, this.hide = function() {
                        (0, r.IV)(b, "jw-captions-enabled")
                    }, this.populate = function(t) {
                        e.get("renderCaptionsNatively") || (d = [], h = t, t ? this.selectCues(t, u) : this.renderCues())
                    }, this.resize = function() {
                        v(), this.renderCues(!0)
                    }, this.renderCues = function(t) {
                        t = Boolean(t), p && p.processCues(window, d, b, t)
                    }, this.selectCues = function(t, i) {
                        if (!t || !t.data || !i || e.get("renderCaptionsNatively")) return;
                        const n = this.getAlignmentPosition(t, i);
                        !1 !== n && (d = this.getCurrentCues(t.data, n), this.renderCues(!0))
                    }, this.getCurrentCues = function(t, e) {
                        return (0, c.hX)(t, (function(t) {
                            return e >= t.startTime && (!t.endTime || e <= t.endTime)
                        }))
                    }, this.getAlignmentPosition = function(t, e) {
                        const i = t.source,
                            n = e.metadata;
                        let s = e.currentTime;
                        return i && n && (0, c.hj)(n[i]) && (s = n[i]), s
                    }, this.clear = function() {
                        (0, r.cS)(b)
                    }, this.setup = function(t, i) {
                        j = document.createElement("div"), g = document.createElement("span"), j.className = "jw-captions-window jw-reset", g.className = "jw-captions-text jw-reset", o = Object.assign({}, w, i), m = w.fontScale;
                        const n = () => {
                            y(o.fontSize);
                            const e = o.windowColor,
                                i = o.windowOpacity,
                                n = o.edgeStyle;
                            f = {};
                            const s = {};
                            ((t, e) => {
                                const i = e.color,
                                    n = e.fontOpacity;
                                if ((i || n !== w.fontOpacity) && (t.color = (0, l.HY)(i || "#ffffff", n)), e.back) {
                                    const i = e.backgroundColor,
                                        n = e.backgroundOpacity;
                                    i === w.backgroundColor && n === w.backgroundOpacity || (t.backgroundColor = (0, l.HY)(i, n))
                                } else t.background = "transparent";
                                e.fontFamily && (t.fontFamily = e.fontFamily), e.fontStyle && (t.fontStyle = e.fontStyle), e.fontWeight && (t.fontWeight = e.fontWeight), e.textDecoration && (t.textDecoration = e.textDecoration)
                            })(s, o), (e || i !== w.windowOpacity) && (f.backgroundColor = (0, l.HY)(e || "#000000", i)), x(n, s, o.fontOpacity), o.back || null !== n || x("uniform", s), (0, l.oB)(j, f), (0, l.oB)(g, s), k(t, s)
                        };
                        n(), j.appendChild(g), b.appendChild(j), e.change("captionsTrack", (function(t, e) {
                            this.populate(e)
                        }), this), e.set("captions", o), e.on("change:captions", ((t, e) => {
                            o = e, n()
                        }))
                    }, this.element = function() {
                        return b
                    }, this.destroy = function() {
                        e.off(null, null, this), this.off()
                    };
                    const C = t => {
                            u = t, this.selectCues(h, u)
                        },
                        z = (t, e) => {
                            1 !== e.length && (t.get("renderCaptionsNatively") || p || (i.e(63).then(function(t) {
                                p = i(8698).default
                            }.bind(null, i)).catch((0, s.Jt)(301121)).catch((t => {
                                this.trigger(a.cM, t)
                            })), t.off("change:captionsList", z, this)))
                        };
                    e.on("change:playlistItem", (function() {
                        u = null, d = []
                    }), this), e.on(a.NZ, (function(t) {
                        d = [], C(t)
                    }), this), e.on(a.R2, C, this), e.on("subtitlesTrackData", (function() {
                        this.selectCues(h, u)
                    }), this), e.on("change:captionsList", z, this)
                };
            Object.assign(h.prototype, o.ZP);
            const d = h
        },
        8165: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(4667),
                s = i(4429),
                o = i(5646);

            function a(t, e, i, a) {
                const l = document.createElement("div");
                l.className = `jw-icon jw-icon-inline jw-button-color jw-reset ${t}`, l.setAttribute("role", "button"), l.setAttribute("tabindex", "0"), i && l.setAttribute("aria-label", i), l.style.display = "none";
                const r = (0, o.Z)(l, e || s.Z.noop);
                return a && Array.prototype.forEach.call(a, (t => {
                    "string" == typeof t ? l.appendChild((0, n.Z)(t)) : l.appendChild(t)
                })), {
                    ui: r,
                    element: () => l,
                    toggle(t) {
                        t ? this.show() : this.hide()
                    },
                    show() {
                        l.style.display = ""
                    },
                    hide() {
                        l.style.display = "none"
                    }
                }
            }
        },
        8168: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => r,
                w: () => l
            });
            var n = i(974),
                s = i(4667),
                o = i(5646);
            const a = {},
                l = function(t) {
                    if (!a[t]) {
                        const e = Object.keys(a);
                        e.length > 10 && delete a[e[0]];
                        const i = (0, s.Z)(t);
                        a[t] = i
                    }
                    return a[t].cloneNode(!0)
                };
            const r = class {
                constructor(t, e, i, s, a) {
                    const r = document.createElement("div");
                    let c;
                    r.className = `jw-icon jw-icon-inline jw-button-color jw-reset ${a||""}`, r.setAttribute("button", s), r.setAttribute("role", "button"), r.setAttribute("tabindex", "0"), e && r.setAttribute("aria-label", e), t && "<svg" === t.substring(0, 4) ? c = l(t) : (c = document.createElement("div"), c.className = "jw-icon jw-button-image jw-button-color jw-reset", t && (0, n.oB)(c, {
                        backgroundImage: `url(${t})`
                    })), r.appendChild(c), (0, o.Z)(r, i, this), r.addEventListener("mousedown", (t => {
                        t.preventDefault()
                    })), this.id = s, this.buttonElement = r
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
        3946: (t, e, i) => {
            "use strict";
            i.d(e, {
                M: () => n
            });
            class n {
                constructor(t, e, i) {
                    this.begin = "number" == typeof t ? t : parseFloat(t), this.time = t, this.text = e, this.cueType = i
                }
                makeEl() {
                    this.el = document.createElement("div");
                    let t = "jw-cue jw-reset";
                    this.cueType && "string" == typeof this.cueType && (t += ` jw-cue-type-${this.cueType}`), this.el.className = t
                }
                align(t) {
                    let e;
                    if ("%" === this.time.toString().slice(-1)) e = this.time;
                    else {
                        e = `${this.time/t*100}%`
                    }
                    this.el && (this.el.style.left = e)
                }
            }
        },
        3477: (t, e, i) => {
            "use strict";
            i.d(e, {
                k: () => l,
                s: () => a
            });
            var n = i(2799),
                s = i(3163),
                o = i(5646);
            class a {
                constructor(t, e, i = s.Ge) {
                    this.el = (0, n.az)(i(t)), this.ui = (0, o.Z)(this.el, e, this)
                }
                destroy() {
                    this.el.parentNode && this.el.parentNode.removeChild(this.el), this.ui.destroy()
                }
            }
            class l extends a {
                constructor(t, e, i = s.dr) {
                    super(t, e, i)
                }
                activate() {
                    this.active || ((0, n.og)(this.el, "jw-settings-item-active", !0), this.el.setAttribute("aria-checked", "true"), this.active = !0)
                }
                deactivate() {
                    this.active && ((0, n.og)(this.el, "jw-settings-item-active", !1), this.el.setAttribute("aria-checked", "false"), this.active = !1)
                }
            }
        },
        7284: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => u
            });
            var n = i(5882),
                s = i(328),
                o = i(2799),
                a = i(8165),
                l = i(7191),
                r = i(3477),
                c = i(7509),
                p = i(2810),
                w = i(5349);
            const h = t => {
                const {
                    name: e,
                    title: i
                } = t, n = {
                    captions: "cc-off",
                    audioTracks: "audio-tracks",
                    quality: "quality-100",
                    playbackRates: "playback-rate"
                } [e];
                if (!n && !t.icon) return;
                const s = (0, a.Z)(`jw-settings-${e} jw-submenu-${e}`, (e => {
                        t.open(e)
                    }), i, [t.icon && (0, o.az)(t.icon) || (0, l.W)(n)]),
                    r = s.element();
                return r.setAttribute("name", e), r.setAttribute("role", "button"), r.setAttribute("type", "button"), r.setAttribute("aria-expanded", "false"), r.setAttribute("aria-controls", t.el.id), "ontouchstart" in window || (s.tooltip = (0, w.m)(r, e, i)), s.ui.directSelect = !0, s
            };
            var d = i(8518);
            class u extends s.ZP {
                constructor(t, e, i, n, s, a = c.qF) {
                    super(), this.open = this.open.bind(this), this.close = this.close.bind(this), this.toggle = this.toggle.bind(this), this.name = e, this.title = i || e, this.localizedPrevious = s.prev, this.isSubmenu = Boolean(n), this.el = (0, o.az)(a(t, this.isSubmenu, e, this.title)), this.buttonContainer = this.el.querySelector(`.jw-${this.name}-topbar-buttons`), this.children = {}, this.openMenus = [], this.items = [], this.visible = !1, this.parentMenu = n, this.mainMenu = this.parentMenu ? this.parentMenu.mainMenu : this, this.categoryButton = null, this.closeButton = this.mainMenu.closeButton, this.isSubmenu && (this.parentMenu.name === this.mainMenu.name && (this.categoryButton = this.createCategoryButton()), this.parentMenu.parentMenu && !this.mainMenu.backButton && (this.mainMenu.backButton = this.createBackButton(this.localizedPrevious)), this.itemsContainer = this.createItemsContainer(), this.parentMenu.appendMenu(this))
                }
                createItemsContainer() {
                    var t, e, i, s, a;
                    const l = this.el.querySelector(".jw-settings-submenu-items"),
                        r = null == this || null == (t = this.mainMenu) || null == (e = t.closeButton) || null == e.element ? void 0 : e.element(),
                        c = null == this || null == (i = this.mainMenu) || null == (s = i.backButton) || null == s.element ? void 0 : s.element(),
                        w = null == this || null == (a = this.categoryButton) || null == a.element ? void 0 : a.element(),
                        h = () => {
                            var t;
                            return null == this || null == (t = this.topbar) ? void 0 : t.firstChild
                        },
                        d = new n.ZP(l);
                    return d.on("keydown", (t => {
                        if (event.target.parentNode !== l) return;
                        const {
                            sourceEvent: e,
                            target: i
                        } = t, n = h(), s = document.getElementsByClassName("jw-icon-settings")[0], a = w ? (0, o.AH)(w) : r, d = w ? (0, o.i3)(w) : c, u = (0, o.AH)(i) || n || l.firstChild, j = (0, o.i3)(i) || n || l.lastChild, g = e && (0, p.ku)(e.key);
                        let m;
                        switch (g) {
                            case "Tab":
                                m = e.shiftKey ? d : a;
                                break;
                            case "Left":
                                m = d || this.close(t) && s;
                                break;
                            case "Up":
                                m = j;
                                break;
                            case "Right":
                                m = a;
                                break;
                            case "Down":
                                m = u;
                                break;
                            case "Esc":
                                m = s, this.mainMenu.close(event)
                        }
                        m && m.focus(), e.preventDefault(), "Esc" !== g && e.stopPropagation()
                    })), d
                }
                createCategoryButton() {
                    return h(this)
                }
                createBackButton(t) {
                    const e = () => this.mainMenu.backButtonTarget,
                        i = (0, a.Z)("jw-settings-back", (t => {
                            const i = e();
                            i && i.open(t)
                        }), t, [(0, l.W)("arrow-left")]);
                    return (0, o.SH)(this.mainMenu.topbar.el, i.element()), i
                }
                setBackButtonAriaLabel(t) {
                    const e = this.mainMenu.backButton.element(),
                        i = t ? `${this.localizedPrevious} - ${t}` : this.localizedPrevious;
                    e.setAttribute("aria-label", i)
                }
                createTopbar() {
                    const t = (0, o.az)('<div class="jw-reset jw-submenu-topbar"></div>'),
                        e = this.itemsContainer.el,
                        i = this.mainMenu,
                        s = this.categoryButton;
                    return this.topbarUI = new n.ZP(t).on("keydown", (t => {
                        const n = t.sourceEvent,
                            a = () => {
                                s ? ((0, o.i3)(s.element()).focus(), n.preventDefault()) : i.backButton.element().focus()
                            },
                            l = () => {
                                s ? ((0, o.AH)(s.element()).focus(), n.preventDefault()) : i.closeButton.element().focus()
                            };
                        switch ((0, p.ku)(n.key)) {
                            case "Up":
                                e.lastChild.focus();
                                break;
                            case "Down":
                                e.firstChild.focus();
                                break;
                            case "Left":
                                a();
                                break;
                            case "Right":
                                l();
                                break;
                            case "Tab":
                                n.shiftKey ? a() : l()
                        }
                    })), (0, o.SH)(this.el, t), t
                }
                createItems(t, e, i = {}, n = r.k) {
                    const s = this.name;
                    return t.map(((t, a) => {
                        let l, r, c, p;
                        switch (s) {
                            case "quality":
                                "Auto" === t.label && 0 === a ? (l = `${i.defaultText}`, c = ' <span class="jw-reset jw-auto-label"></span>') : l = t.label;
                                break;
                            case "captions":
                                l = "Off" !== t.label && "off" !== t.id || 0 !== a ? t.label : i.defaultText;
                                break;
                            case "playbackRates":
                                r = t, l = (0, d.t6)(i.tooltipText) ? `x${t}` : `${t}x`;
                                break;
                            case "audioTracks":
                                l = t.name
                        }
                        l || (l = t, "object" == typeof t && (l.options = i));
                        return p = new n(l, (t => {
                            if ((0 !== t.pageX || 0 !== t.pageY) && !p.active) {
                                if (p.deactivate) {
                                    this.items.filter((t => !0 === t.active)).forEach((t => {
                                        t.deactivate()
                                    }));
                                    const e = this.mainMenu.backButtonTarget;
                                    e ? e.open(t) : this.mainMenu.close(t)
                                }
                                p.activate && p.activate(), e(r || a)
                            }
                        }).bind(this)), c && p.el.appendChild((0, o.az)(c)), p
                    }))
                }
                setMenuItems(t, e) {
                    t ? (this.destroyItems(), t.forEach((t => {
                        this.items.push(t), this.itemsContainer.el.appendChild(t.el)
                    })), e > -1 && this.items[e].activate(), this.categoryButton && this.categoryButton.show()) : this.removeMenu()
                }
                appendMenu(t) {
                    if (!t) return;
                    const {
                        el: e,
                        name: i,
                        categoryButton: n
                    } = t;
                    if (this.children[i] = t, n) {
                        const t = this.mainMenu.buttonContainer,
                            e = t.querySelector(".jw-settings-sharing"),
                            s = "quality" === i ? t.firstChild : e || this.closeButton.element();
                        t.insertBefore(n.element(), s)
                    }
                    this.mainMenu.el.appendChild(e), this.mainMenu.trigger("menuAppended", i)
                }
                removeMenu(t) {
                    if (!t) return this.parentMenu.removeMenu(this.name);
                    const e = this.children[t];
                    e && (delete this.children[t], e.destroy(), this.mainMenu.trigger("menuRemoved", t))
                }
                open(t) {
                    const e = this.mainMenu.visible;
                    let i;
                    if (!this.items.length) return;
                    const n = null == t ? void 0 : t.sourceEvent,
                        s = this.itemsContainer ? this.itemsContainer.el.firstChild : this.items[0].el,
                        o = this.itemsContainer ? this.itemsContainer.el.lastChild : this.items[this.items.length - 1].el,
                        a = n && "keydown" === n.type,
                        l = "Up" === (a && (0, p.ku)(n.key)) ? o : s;
                    if (this.visible && !this.openMenus.length) return void(this.items.length && a && (this._openTimeout && clearTimeout(this._openTimeout), this._openTimeout = setTimeout((() => {
                        l.focus(), this._openTimeout = null
                    }))));
                    const {
                        mainMenu: r,
                        parentMenu: c,
                        categoryButton: w
                    } = this;
                    if (c.openMenus.push(this.name), c.openMenus.length > 1 && c.closeChildren(this.name), w && w.element().setAttribute("aria-expanded", "true"), c.isSubmenu) {
                        c.el.classList.remove("jw-settings-submenu-active"), r.topbar.el.classList.add("jw-nested-menu-open");
                        const t = r.topbar.el.querySelector(".jw-settings-topbar-text");
                        t.setAttribute("name", this.title), t.innerText = this.title;
                        const e = c.title;
                        this.setBackButtonAriaLabel(e), r.backButton.show(), this.mainMenu.backButtonTarget = this.parentMenu, this.buttonContainer && this.buttonContainer.el.setAttribute("aria-expanded", !0), i = t
                    } else r.topbar.el.classList.remove("jw-nested-menu-open"), r.backButton && r.backButton.hide(), this.mainMenu.backButtonTarget && (this.mainMenu.backButtonTarget = null);
                    this.el.classList.add("jw-settings-submenu-active"), e && a ? i = l : e || (r.open(t), i = w.element(), null != w && w.tooltip && !a && (w.tooltip.suppress = !0)), this.openMenus.length && this.closeChildren(), this.el.scrollTop = 0, this.visible = !0, this.el.setAttribute("aria-expanded", "true"), i && (this._openTimeout && clearTimeout(this._openTimeout), this._openTimeout = setTimeout((() => {
                        i.focus(), this._openTimeout = null
                    })))
                }
                close(t) {
                    this._openTimeout && (clearTimeout(this._openTimeout), this._openTimeout = null), this.visible && (this.visible = !1, this.el.setAttribute("aria-expanded", "false"), this.el.classList.remove("jw-settings-submenu-active"), this.buttonContainer && this.buttonContainer.el.setAttribute("aria-expanded", !1), this.categoryButton && this.categoryButton.element().setAttribute("aria-expanded", "false"), this.parentMenu.openMenus = this.parentMenu.openMenus.filter((t => t !== this.name)), !this.mainMenu.openMenus.length && this.mainMenu.visible && this.mainMenu.close(t), this.openMenus.length && this.closeChildren())
                }
                closeChildren(t) {
                    this.openMenus.forEach((e => {
                        if (e === t) return;
                        const i = this.children[e];
                        i && i.close()
                    }))
                }
                toggle(t, e) {
                    if (e && this.mainMenu.visible) return this.mainMenu.close(t);
                    this.visible ? this.close(t) : this.open(t)
                }
                destroyItems() {
                    this.items.forEach((t => {
                        t.destroy()
                    })), this.items = []
                }
                destroy() {
                    this._openTimeout && (clearTimeout(this._openTimeout), this._openTimeout = null), Object.keys(this.children).forEach((t => {
                        this.children[t].destroy()
                    })), this.categoryButton && (this.parentMenu.buttonContainer.removeChild(this.categoryButton.element()), this.categoryButton.ui.destroy()), this.topbarUI && this.topbarUI.destroy(), this.destroyItems(), this.itemsContainer.destroy();
                    const t = this.parentMenu.openMenus,
                        e = t.indexOf(this.name);
                    t.length && e > -1 && this.openMenus.splice(e, 1), delete this.parentMenu, this.visible = !1, this.el.parentNode && this.el.parentNode.removeChild(this.el), this.off()
                }
            }
        },
        2810: (t, e, i) => {
            "use strict";
            i.d(e, {
                JU: () => w,
                MR: () => d,
                dt: () => u,
                ku: () => h
            });
            const n = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "ff00ff", "#00ffff"],
                s = ["Arial", "Courier", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"],
                o = ["100%", "75%", "50%", "25%", "0%"],
                a = [100, 75, 50, 25, 0];
            let l, r;
            const c = t => {
                    const {
                        white: e,
                        black: i,
                        red: n,
                        green: s,
                        blue: o,
                        yellow: a,
                        magenta: r,
                        cyan: c
                    } = t;
                    return l = [e, i, n, s, o, a, r, c], l
                },
                p = t => {
                    const {
                        none: e,
                        raised: i,
                        depressed: n,
                        uniform: s,
                        dropShadow: o
                    } = t;
                    return r = [e, i, n, s, o], r
                },
                w = t => [{
                    name: "color",
                    label: t.color,
                    options: l || c(t),
                    values: n,
                    defaultVal: "#ffffff"
                }, {
                    name: "fontOpacity",
                    label: t.fontOpacity,
                    options: ["100%", "75%", "50%", "25%"],
                    values: [100, 75, 50, 25],
                    defaultVal: 100
                }, {
                    name: "userFontScale",
                    label: t.userFontScale,
                    options: ["200%", "175%", "150%", "125%", "100%", "75%", "50%"],
                    values: [2, 1.75, 1.5, 1.25, 1, .75, .5],
                    defaultVal: 1
                }, {
                    name: "fontFamily",
                    label: t.fontFamily,
                    options: s,
                    values: s,
                    defaultVal: "Arial"
                }, {
                    name: "edgeStyle",
                    label: t.edgeStyle,
                    options: r || p(t),
                    values: ["none", "raised", "depressed", "uniform", "dropShadow"],
                    defaultVal: "none"
                }, {
                    name: "backgroundColor",
                    label: t.backgroundColor,
                    options: l || c(t),
                    values: n,
                    defaultVal: "#000000"
                }, {
                    name: "backgroundOpacity",
                    label: t.backgroundOpacity,
                    options: o,
                    values: a,
                    defaultVal: 50
                }, {
                    name: "windowColor",
                    label: t.windowColor,
                    options: l || c(t),
                    values: n,
                    defaultVal: "#000000"
                }, {
                    name: "windowOpacity",
                    label: t.windowOpacity,
                    options: ["100%", "75%", "50%", "25%", "0%"],
                    values: a,
                    defaultVal: 0
                }],
                h = t => null == t || null == t.replace ? void 0 : t.replace(/(Arrow|ape)/, ""),
                d = function() {
                    this._destroyed || (this._destroyed = !0, Object.keys(this.children).forEach((t => {
                        this.children[t].destroy()
                    })), this.children = {}, this.model && (this.model.off(null, null, this), delete this.model), this.off())
                },
                u = function(t, e) {
                    t && e > -1 && (t.items.forEach((t => {
                        t.deactivate()
                    })), t.items[e].activate())
                }
        },
        5349: (t, e, i) => {
            "use strict";
            i.d(e, {
                m: () => s
            });
            var n = i(2799);
            const s = function(t, e, i, s, o) {
                const a = document.createElement("div");
                a.className = `jw-reset-text jw-tooltip jw-tooltip-${e}`, a.setAttribute("dir", "auto");
                const l = document.createElement("div");
                let r;
                l.className = "jw-text", a.appendChild(l), t.appendChild(a);
                const c = t => {
                    t && r.dirty && ((0, n.nh)(l, r.text), r.dirty = !1), r.opened = t, (0, n.og)(a, "jw-open", t)
                };
                return r = {
                    dirty: Boolean(i),
                    opened: !1,
                    text: i,
                    touchEvent: !1,
                    suppress: !1,
                    open() {
                        r.touchEvent || (r.suppress ? r.suppress = !1 : (c(!0), s && s()))
                    },
                    close() {
                        r.touchEvent || (c(!1), o && o())
                    },
                    setText(t) {
                        t !== r.text && (r.text = t, r.dirty = !0), r.opened && c(!0)
                    }
                }, t.addEventListener("mouseover", r.open), t.addEventListener("focus", r.open), t.addEventListener("blur", r.close), t.addEventListener("mouseout", r.close), t.addEventListener("touchstart", (() => {
                    r.touchEvent = !0
                }), {
                    passive: !0
                }), r
            }
        },
        4244: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => p
            });
            var n = i(8348),
                s = i(328),
                o = i(5882),
                a = i(1261),
                l = i(2799);
            const r = function(t) {
                const e = (0, l.A8)(t),
                    i = window.pageXOffset;
                return i && n.OS.android && document.body.parentElement && document.body.parentElement.getBoundingClientRect().left >= 0 && (e.left -= i, e.right -= i), e
            };
            class c extends s.ZP {
                constructor(t, e) {
                    super(), this.className = `${t} jw-background-color jw-reset`, this.orientation = e
                }
                setup() {
                    this.el = (0, l.az)(((t = "", e = "") => `<div class="${t} ${e} jw-reset" aria-hidden="true"><div class="jw-slider-container jw-reset"><div class="jw-rail jw-reset"></div><div class="jw-buffer jw-reset"></div><div class="jw-progress jw-reset"></div><div class="jw-knob jw-reset"></div></div></div>`)(this.className, `jw-slider-${this.orientation}`)), this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0], this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0], this.elementProgress = this.el.getElementsByClassName("jw-progress")[0], this.elementThumb = this.el.getElementsByClassName("jw-knob")[0], this.ui = new o.ZP(this.element(), {
                        preventScrolling: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.dragMove, this).on("dragEnd", this.dragEnd, this).on("click", this.tap, this)
                }
                dragStart() {
                    this.trigger("dragStart"), this.railBounds = r(this.elementRail)
                }
                dragEnd(t) {
                    this.dragMove(t), this.trigger("dragEnd")
                }
                dragMove(t) {
                    const e = this.railBounds = this.railBounds ? this.railBounds : r(this.elementRail);
                    let i, n;
                    return "pointercancel" === t.sourceEvent.type || ("horizontal" === this.orientation ? (i = t.pageX, n = i < e.left ? 0 : i > e.right ? 100 : 100 * (0, a.v)((i - e.left) / e.width, 0, 1)) : (i = t.pageY, n = i >= e.bottom ? 0 : i <= e.top ? 100 : 100 * (0, a.v)((e.height - (i - e.top)) / e.height, 0, 1)), this.render(n), this.update(n)), !1
                }
                tap(t) {
                    this.railBounds = r(this.elementRail), this.dragMove(t)
                }
                limit(t) {
                    return t
                }
                update(t) {
                    this.trigger("update", {
                        percentage: t
                    })
                }
                render(t) {
                    t = Math.max(0, Math.min(t, 100));
                    const e = this.elementThumb,
                        i = this.elementProgress;
                    "horizontal" === this.orientation ? (e.style.left = `${t}%`, i.style.width = `${t}%`) : (e.style.bottom = `${t}%`, i.style.height = `${t}%`)
                }
                updateBuffer(t) {
                    this.elementBuffer.style.width = `${t}%`
                }
                element() {
                    return this.el
                }
            }
            const p = c
        },
        8993: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => v
            });
            var n = i(6042),
                s = i(1261),
                o = i(974),
                a = i(9888),
                l = i(2799);
            const r = (t, e) => {
                let i = 0;
                return Object.assign((function(...n) {
                    if (i++, i < e) return t.apply(this, n)
                }), {
                    reset: () => {
                        i = 0
                    },
                    shush: () => {
                        i = 1 / 0
                    }
                })
            };
            var c = i(5882),
                p = i(4244),
                w = i(520),
                h = i(3946),
                d = i(6886),
                u = i(7387),
                j = i(8381),
                g = i(1643);
            const m = function(t) {
                this.begin = t.begin, this.end = t.end, this.img = t.text
            };
            class f extends w.Z {
                setup() {
                    this.textChapter = document.createElement("span"), this.textChapter.className = "jw-time-chapter jw-text jw-reset", this.textChapter.style.display = "none", this.textTime = document.createElement("span"), this.textTime.className = "jw-time-time jw-text jw-reset", this.img = document.createElement("div"), this.img.className = "jw-time-thumb jw-reset", this.containerWidth = 0, this.textLength = 0, this.dragJustReleased = !1;
                    const t = document.createElement("div");
                    t.className = "jw-time-tip jw-reset", t.appendChild(this.img), t.appendChild(this.textChapter), t.appendChild(this.textTime), this.addContent(t)
                }
                image(t) {
                    (0, o.oB)(this.img, t)
                }
                update(t, e) {
                    this.textTime && (this.textTime.textContent = t, e ? this.textChapter && (this.textChapter.textContent = e, this.textChapter.style.removeProperty("display")) : this.textChapter && (this.textChapter.style.display = "none", this.textChapter.textContent = ""))
                }
                getWidth() {
                    return this.containerWidth || this.setWidth(), this.containerWidth
                }
                setWidth(t) {
                    t ? this.containerWidth = t + 16 : this.tooltip && (this.containerWidth = (0, l.A8)(this.container).width + 16)
                }
                resetWidth() {
                    this.containerWidth = 0
                }
            }
            class b extends p.Z {
                constructor(t, e, i) {
                    super("jw-slider-time", "horizontal"), this._model = t, this._api = e, this.timeUpdateKeeper = i, this.timeTip = new f("jw-tooltip-time", null, !0), this.timeTip.setup(), this.cues = [], this.seekThrottled = (0, n.P2)(this.performSeek, 400), this._updateAriaTextLimitedThrottled = r((0, n.P2)(this.updateAriaText, 1e3), 4), this.sliderOptions = this._model.get("timeSlider")
                }
                _onDvrSeekLimitChange() {
                    this.updateTime(this._model.get("position"), this._model.get("duration"))
                }
                setup() {
                    super.setup(), this._model.on("change:duration", this.onDuration, this).on("change:cues", this.updateCues, this).on("change:chapters", this.onChapters, this).on("seeked", (() => {
                        this._model.get("scrubbing") || (this._updateAriaTextLimitedThrottled.reset(), this._updateAriaTextLimitedThrottled())
                    })), this._model.change("position", this.onPosition, this).change("buffer", this.onBuffer, this).change("streamType", this.onStreamType, this), this._model.player.change("playlistItem", this.onPlaylistItem, this), this._model.change("dvrSeekLimit", this._onDvrSeekLimitChange, this);
                    const t = this.el;
                    (0, l.P$)(t, "tabindex", "0"), (0, l.P$)(t, "role", "slider"), (0, l.P$)(t, "aria-label", this._model.get("localization").slider), t.removeAttribute("aria-hidden"), this.elementRail.appendChild(this.timeTip.element()), this.ui = (this.ui || new c.ZP(t)).on("move drag", this.showTimeTooltip, this).on("dragEnd out", this.hideTimeTooltip, this).on("click", (() => t.focus())).on("focus", (() => this._updateAriaTextLimitedThrottled.reset())).on("blur", (() => this._updateAriaTextLimitedThrottled.shush())), this.sliderOptions && !this.sliderOptions.showKnob && (this.elementThumb.style.opacity = "0")
                }
                update(t) {
                    this.seekTo = t, this.seekThrottled(), super.update.apply(this, [t])
                }
                dragStart() {
                    this._model.set("scrubbing", !0), super.dragStart.call(this)
                }
                dragEnd(t) {
                    super.dragEnd.apply(this, [t]), this._model.set("scrubbing", !1)
                }
                onBuffer(t, e) {
                    this.updateBuffer(e)
                }
                onPosition(t, e) {
                    this.updateChapter(e), this.updateTime(e, t.get("duration"))
                }
                onDuration(t, e) {
                    this.updateTime(t.get("position"), e), (0, l.P$)(this.el, "aria-valuemin", 0), (0, l.P$)(this.el, "aria-valuemax", Math.abs(e)), this.updateCues(null, t.getCues())
                }
                onStreamType(t, e) {
                    this.streamType = e
                }
                onChapters() {
                    this.updateCues(null, this._model.getCues())
                }
                updateTime(t, e) {
                    let i = 0;
                    const n = Boolean(this._model.get("instreamMode"));
                    if (e)
                        if ("DVR" !== this.streamType || n) "VOD" !== this.streamType && this.streamType && !n || (i = t / e * 100);
                        else {
                            const n = this._model.get("dvrSeekLimit"),
                                s = e + n;
                            i = (s - (t + n)) / s * 100
                        } this._updateAriaTextLimitedThrottled(), this.render(i)
                }
                onPlaylistItem(t, e) {
                    this.reset();
                    const i = t.getCues();
                    !this.cues.length && i.length && this.updateCues(null, i);
                    const s = e.tracks;
                    (0, n.S6)(s, (t => {
                        var e, i;
                        "thumbnails" === (null == t || null == (e = t.kind) || null == e.toLowerCase ? void 0 : e.toLowerCase()) ? this.loadThumbnails(t.file): "chapters" === (null == t || null == (i = t.kind) || null == i.toLowerCase ? void 0 : i.toLowerCase()) && this.loadChapters(t.file)
                    }))
                }
                performSeek() {
                    const t = this.seekTo,
                        e = this._model.get("duration");
                    let i;
                    if (0 === e) this._api.play({
                        reason: "interaction"
                    });
                    else if ("DVR" === this.streamType) {
                        i = e * ((100 - t) / 100), i -= this._model.get("dvrSeekLimit"), this._api.seek(i, {
                            reason: "interaction"
                        })
                    } else i = t / 100 * e, this._api.seek(Math.min(i, e - .25), {
                        reason: "interaction"
                    })
                }
                showTimeTooltip(t) {
                    let e = this._model.get("duration");
                    if (0 === e) return;
                    const i = this._model.get("containerWidth"),
                        n = (0, l.A8)(this.elementRail);
                    let r = t.pageX ? t.pageX - n.left : t.x;
                    r = (0, s.v)(r, 0, n.width);
                    const c = r / n.width;
                    let p, w = e * c;
                    if (e < 0) {
                        e += this._model.get("dvrSeekLimit"), w = e * c, w = e - w
                    }
                    const h = (0, a.timeFormat)(w, !0),
                        d = this.timeTip,
                        u = this.getActiveCue(w);
                    if (u) d.update(h, u.text), p = u.text.length + h.length;
                    else {
                        let t = h;
                        e < 0 && w > -1 && (t = "Live"), d.update(t), p = t.length
                    }
                    this.textLength !== p && (this.textLength = p, d.resetWidth()), this.showThumbnail(w), (0, l.cn)(d.el, "jw-open");
                    const j = d.getWidth(),
                        g = i - n.width;
                    let m = 0;
                    j > g && (m = (j - g) / 2);
                    const f = Math.round(4 * Math.min(n.width - m, Math.max(m, r))) / 4;
                    (0, o.vs)(d.el, `translateX(${f}px)`)
                }
                hideTimeTooltip() {
                    (0, l.IV)(this.timeTip.el, "jw-open")
                }
                updateCues(t, e) {
                    this.resetCues(), null != e && e.length && (e.forEach((t => {
                        this.addCue(t)
                    })), this.drawCues())
                }
                updateAriaText() {
                    const t = this._model,
                        e = this.el;
                    let i = t.get("position"),
                        n = t.get("duration");
                    "DVR" === this.streamType && (n = Math.abs(n), i = n + i);
                    const s = `${(0,a.timeFormatAria)(i)} of ${(0,a.timeFormatAria)(n)}`;
                    this.timeUpdateKeeper.textContent = s, (0, l.P$)(e, "aria-valuetext", s), (0, l.P$)(e, "aria-valuenow", i)
                }
                reset() {
                    this.resetThumbnails(), this.timeTip.resetWidth(), this.textLength = 0, this._updateAriaTextLimitedThrottled.reset()
                }
                loadThumbnails(t) {
                    t && (this.vttPath = t.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, (0, d.h)(t, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
                        plainText: !0
                    }))
                }
                thumbnailsLoaded(t) {
                    const e = (0, u.Z)(t.responseText);
                    Array.isArray(e) && (e.forEach((t => {
                        this.thumbnails.push(new m(t))
                    })), this.drawCues(), this.showThumbnail(0))
                }
                thumbnailsFailed() {}
                chooseThumbnail(t) {
                    const e = this.thumbnails;
                    if (!e || !e.length) return "";
                    let i = (0, n.e1)(e, {
                        end: t
                    }, (0, n.Cb)("end"));
                    i >= e.length && (i = e.length - 1);
                    let s = e[i].img;
                    return s.indexOf("://") < 0 && (s = this.vttPath ? `${this.vttPath}/${s}` : s), s
                }
                loadThumbnail(t) {
                    let e = this.chooseThumbnail(t);
                    const i = {
                        width: "0px",
                        height: "0px",
                        margin: "0 auto",
                        backgroundImage: "",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: ""
                    };
                    if (!e || !e.length) return i;
                    if (e.indexOf("#xywh") > 0) try {
                        const t = /(.+)#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(e);
                        if (!t) throw new Error("No match for expected thumbnail pattern");
                        e = t[1];
                        const n = parseFloat(t[2]),
                            s = parseFloat(t[3]);
                        i.backgroundPosition = `${-1*n}px ${-1*s}px`, i.width = t[4], this.timeTip.setWidth(Number(i.width)), i.height = t[5]
                    } catch (t) {
                        return
                    } else if (this.individualImage) i.backgroundSize = "contain", i.width = "160px", i.height = "68px", this.timeTip.setWidth(160);
                    else {
                        const t = this.individualImage = new Image;
                        t.onload = () => {
                            t.onload = null, this.timeTip.image({
                                width: t.width,
                                height: t.height
                            }), this.timeTip.setWidth(t.width)
                        }, t.src = e
                    } return i.backgroundImage = `url("${e}")`, i
                }
                showThumbnail(t) {
                    this._model.get("containerWidth") <= 420 || this.timeTip.image(this.loadThumbnail(t))
                }
                resetThumbnails() {
                    this.timeTip.image({
                        backgroundImage: "",
                        width: 0,
                        height: 0
                    }), this.thumbnails = []
                }
                loadChapters(t) {
                    (0, d.h)(t, this.chaptersLoaded.bind(this), this.chaptersFailed, {
                        plainText: !0
                    })
                }
                chaptersLoaded(t) {
                    const e = (0, u.Z)(t.responseText);
                    if (Array.isArray(e)) {
                        const t = this._model.get("playlistItem") || {};
                        if (!t.chapters || !t.chapters.timestamps || !t.chapters.timestamps.length) {
                            const i = (0, j._b)(e, t.chapters);
                            t.chapters = i, this._model.set("playlistItem", t), i.timestamps[0] && 0 === i.timestamps[0].time && this._api.trigger(g.t6, i.timestamps[0])
                        }
                    }
                }
                chaptersFailed() {}
                addCue(t) {
                    const e = new h.M(t.begin, t.text, t.cueType);
                    e.makeEl(), this.cues.push(e)
                }
                drawCues() {
                    const t = this._model.get("duration");
                    !t || t <= 0 || this.cues.forEach((e => {
                        e.align(t), e.el && this.elementRail.appendChild(e.el)
                    }))
                }
                getActiveCue(t) {
                    return this.cues.reduce(((e, i) => t < i.time ? e : e ? i.time > e.time ? i : e : i), null)
                }
                resetCues() {
                    this.cues.forEach((t => {
                        var e;
                        null != t && null != (e = t.el) && e.parentNode && t.el.parentNode.removeChild(t.el)
                    })), this.cues.length = 0
                }
                updateChapter(t) {
                    const e = (this._model.get("playlistItem") || {}).chapters;
                    if (!e || !e.timestamps) return;
                    const i = (0, j.Mf)(t, e.timestamps);
                    i && i !== this.activeChapter && (this.activeChapter = i, this._api.trigger(g.t6, i))
                }
            }
            const v = b
        },
        520: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(328);
            var s = i(2799),
                o = i(4667);
            class a extends n.ZP {
                constructor(t, e, i, n) {
                    super(), this.el = document.createElement("div");
                    let s = `jw-icon jw-icon-tooltip ${t} jw-button-color jw-reset`;
                    var a, l;
                    i || (s += " jw-hidden"), e && (a = this.el, l = e, a && l && (a.setAttribute("aria-label", l), a.setAttribute("role", "button"), a.setAttribute("tabindex", "0"))), this.el.className = s, this.tooltip = document.createElement("div"), this.tooltip.className = "jw-overlay jw-reset", this.openClass = "jw-open", this.componentType = "tooltip", this.el.appendChild(this.tooltip), n && n.length > 0 && Array.prototype.forEach.call(n, (t => {
                        "string" == typeof t ? this.el.appendChild((0, o.Z)(t)) : this.el.appendChild(t)
                    }))
                }
                addContent(t) {
                    this.content && this.removeContent(), this.content = t, this.tooltip.appendChild(t)
                }
                removeContent() {
                    this.content && (this.tooltip.removeChild(this.content), this.content = null)
                }
                hasContent() {
                    return Boolean(this.content)
                }
                element() {
                    return this.el
                }
                openTooltip(t) {
                    this.isOpen || (this.trigger(`open-${this.componentType}`, t, {
                        isOpen: !0
                    }), this.isOpen = !0, (0, s.og)(this.el, this.openClass, this.isOpen))
                }
                closeTooltip(t) {
                    this.isOpen && (this.trigger(`close-${this.componentType}`, t, {
                        isOpen: !1
                    }), this.isOpen = !1, (0, s.og)(this.el, this.openClass, this.isOpen))
                }
                toggleOpenState(t) {
                    this.isOpen ? this.closeTooltip(t) : this.openTooltip(t)
                }
            }
        },
        8268: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => L
            });
            var n = i(8348),
                s = i(1643),
                o = i(7191),
                a = i(8168),
                l = i(8993),
                r = i(2799),
                c = i(3946);
            class p {
                constructor(t, e, i, n, s, o, a) {
                    this.begin = t, this.time = t, this.end = e, this.text = i, this.first = n, this.last = s, this.cueType = "chapter", this.image = a, null != o && o.length && (this.ads = o.map((t => {
                        const e = (t.begin - this.begin) / (this.end - this.begin) * 100;
                        return new c.M(`${e}%`, t.text, t.cueType)
                    })))
                }
                align(t) {}
                makeEl() {
                    var t, e, i, n, s;
                    this.el = (0, r.az)('<div class="jw-timesegment jw-reset" aria-hidden="true">\n            <div class="jw-timesegment-resetter jw-reset">\n                <div class="jw-timesegment-container jw-reset">\n                    <div class="jw-timesegment-bar jw-rail jw-timesegment-background jw-reset"></div>\n                    <div class="jw-timesegment-bar jw-buffer jw-timesegment-buffered jw-reset"></div>\n                    <div class="jw-timesegment-bar jw-progress jw-timesegment-progress jw-reset"></div>\n                </div>\n            </div>\n        </div>'), this.paddingEl = null == (t = this.el) ? void 0 : t.querySelector(".jw-timesegment-resetter"), this.containerEl = null == (e = this.el) ? void 0 : e.querySelector(".jw-timesegment-container"), this.bufferedEl = null == (i = this.el) ? void 0 : i.querySelector(".jw-timesegment-buffered"), this.progressEl = null == (n = this.el) ? void 0 : n.querySelector(".jw-timesegment-progress"), null != this && null != (s = this.ads) && s.length && this.ads.forEach((t => {
                        t.makeEl(), t.align(0), this.containerEl && this.progressEl && t.el && this.containerEl.insertBefore(t.el, this.progressEl)
                    })), this.paddingEl && (this.first || (this.paddingEl.style.paddingLeft = "1px"), this.last || (this.paddingEl.style.paddingRight = "2px")), this.el && (this.el.style.flexGrow = String(Math.abs(Math.round(this.end - this.begin))))
                }
                setProgress(t) {
                    this.progressEl && (this.progressEl.style.width = `${t}%`)
                }
                setBuffered(t) {
                    this.bufferedEl && (this.bufferedEl.style.width = `${t}%`)
                }
            }
            class w extends l.Z {
                constructor(t, e, i) {
                    super(t, e, i), this.cues = [], this.className = "jw-slider-time jw-chapter-slider-time jw-background-color jw-reset"
                }
                setup() {
                    super.setup(), this.elementActualRail = this.el.getElementsByClassName("jw-rail")[0], this.elementActualRail.classList.replace("jw-rail", "jw-old-rail"), this.elementBuffer.classList.replace("jw-buffer", "jw-old-buffer"), this.elementProgress.classList.replace("jw-progress", "jw-old-progress")
                }
                sizeSegmentsFromElement(t, e) {
                    const i = (0, r.A8)(t);
                    this.cues.forEach((t => {
                        if ("chapter" === t.cueType) {
                            const n = (0, r.A8)(t.el),
                                s = (i.right - n.left) / n.width,
                                o = 100 * Math.max(0, Math.min(s, 1));
                            t[e](o)
                        }
                    }))
                }
                onBuffer(t, e) {
                    super.onBuffer(t, e), this.sizeSegmentsFromElement(this.elementBuffer, "setBuffered")
                }
                updateTime(t, e) {
                    super.updateTime(t, e), this.sizeSegmentsFromElement(this.elementProgress, "setProgress")
                }
                updateCues(t, e) {
                    this.resetCues();
                    const i = (t, e, i) => t.filter((t => t.begin >= e && t.begin < i));
                    let n = [],
                        s = [];
                    e && (n = e.filter((t => "chapters" === t.cueType)).sort(((t, e) => t.begin - e.begin)), s = e.filter((t => "ads" === t.cueType)).sort(((t, e) => t.begin - e.begin)));
                    const o = this._model.get("duration");
                    let a = !1;
                    if (n.length) {
                        if (0 !== n[0].begin) {
                            const t = {
                                begin: 0,
                                end: n[0].begin,
                                text: "",
                                first: !0,
                                last: !1,
                                ads: i(s, 0, n[0].begin),
                                image: void 0
                            };
                            this.addCue(t), a = !0
                        }
                        n.forEach(((t, e) => {
                            const l = e + 1 === n.length,
                                r = {
                                    begin: t.begin,
                                    end: t.end,
                                    text: t.text,
                                    first: !1,
                                    last: !1,
                                    ads: i(s, t.begin, t.end),
                                    image: t.image
                                };
                            l && void 0 !== t.end && t.end >= o && (r.last = !0), a || (a = !0, r.first = !0), this.addCue(r)
                        }));
                        const t = n[n.length - 1];
                        if (void 0 !== t.end && t.end < o) {
                            const e = {
                                begin: t.end,
                                end: o,
                                text: "",
                                first: !1,
                                last: !0,
                                ads: i(s, t.end, o),
                                image: void 0
                            };
                            this.addCue(e)
                        }
                    } else {
                        const t = {
                            begin: 0,
                            end: o,
                            text: "",
                            first: !0,
                            last: !0,
                            ads: s,
                            image: void 0
                        };
                        this.addCue(t)
                    }
                    this.drawCues()
                }
                addCue(t) {
                    const e = new p(t.begin, t.end, t.text, t.first, t.last, t.ads, t.image);
                    e.makeEl(), this.cues.push(e)
                }
                getActiveCue(t) {
                    const e = this.cues.find((e => t < e.end && t >= e.begin));
                    return e || null
                }
                drawCues() {
                    this._model.get("duration") && (this.cues.forEach((t => {
                        "chapter" === t.cueType && this.elementActualRail && t.el && this.elementActualRail.appendChild(t.el)
                    })), this.sizeSegmentsFromElement(this.elementBuffer, "setBuffered"), this.sizeSegmentsFromElement(this.elementProgress, "setProgress"))
                }
                chooseThumbnail(t) {
                    var e;
                    const i = super.chooseThumbnail(t),
                        n = this.getActiveCue(t);
                    let s = !i;
                    return null != this && null != (e = this.sliderOptions) && e.preferChapterImages && (s = !0), s && n && n.image ? n.image : i
                }
            }
            const h = w;
            var d = i(520),
                u = i(4244),
                j = i(5882);
            class g extends u.Z {
                constructor(t, e, i) {
                    let n = "jw-slider-volume";
                    "vertical" === t && (n += " jw-volume-tip"), super(n, t), this.setup(), this.element().classList.remove("jw-background-color"), (0, r.P$)(i, "tabindex", "0"), (0, r.P$)(i, "aria-label", e), (0, r.P$)(i, "aria-orientation", t), (0, r.P$)(i, "aria-valuemin", 0), (0, r.P$)(i, "aria-valuemax", 100), (0, r.P$)(i, "role", "slider"), this.uiOver = new j.ZP(i).on("click", (function() {}))
                }
            }
            class m extends d.Z {
                constructor(t, e, i, n, s) {
                    super(e, i, !0, n), this._model = t, this.horizontalContainer = s;
                    const o = t.get("localization").volumeSlider;
                    this.horizontalSlider = new g("horizontal", o, s), this.verticalSlider = new g("vertical", o, this.tooltip), s.appendChild(this.horizontalSlider.element()), this.addContent(this.verticalSlider.element()), this.verticalSlider.on("update", (function(t) {
                        this.trigger("update", t)
                    }), this), this.horizontalSlider.on("update", (function(t) {
                        this.trigger("update", t)
                    }), this), this.horizontalSlider.uiOver.on("keydown", (t => {
                        const e = t.sourceEvent;
                        switch (e.keyCode) {
                            case 37:
                                e.stopPropagation(), this.trigger("adjustVolume", -10);
                                break;
                            case 39:
                                e.stopPropagation(), this.trigger("adjustVolume", 10)
                        }
                    })), this.ui = new j.ZP(this.el, {
                        directSelect: !0
                    }).on("click", this.handleClick, this).on("enter", (() => this.trigger("toggleValue"))), this.addSliderHandlers(this.ui), this.addSliderHandlers(this.horizontalSlider.uiOver), this.addSliderHandlers(this.verticalSlider.uiOver), this._model.change("audioMode", this.updateSlider, this)
                }
                updateSlider(t, e) {
                    const i = t.get("horizontalVolumeSlider") || e;
                    (0, r.og)(this.element(), "jw-flag-horizontal-slider", Boolean(i))
                }
                addSliderHandlers(t) {
                    const {
                        openSlider: e,
                        closeSlider: i
                    } = this;
                    t.on("over", e, this).on("out", i, this).on("focus", e, this).on("blur", i, this)
                }
                openSlider(t) {
                    super.openTooltip(t), (0, r.og)(this.horizontalContainer, this.openClass, !0)
                }
                closeSlider(t) {
                    super.closeTooltip(t), (0, r.og)(this.horizontalContainer, this.openClass, !1), this.horizontalContainer.blur()
                }
                handleClick(t) {
                    n.OS.mobile ? this.toggleOpenState(t) : this.trigger("toggleValue")
                }
                destroy() {
                    this.horizontalSlider.uiOver.destroy(), this.verticalSlider.uiOver.destroy(), this.ui.destroy()
                }
            }
            var f = i(8165),
                b = i(5349),
                v = i(328),
                y = i(2268),
                x = i(9888),
                k = i(6234),
                C = i(5646);
            const z = (t, e) => {
                    const i = document.createElement("span");
                    return i.className = `jw-text jw-reset-text ${t}`, e && (0, r.P$)(i, "role", e), (0, r.P$)(i, "dir", "auto"), i
                },
                T = (t, e) => {
                    const i = document.createElement("div");
                    return i.className = `jw-icon jw-icon-inline jw-text jw-reset ${t}`, e && (0, r.P$)(i, "role", e), i
                },
                S = t => {
                    const e = document.createElement("div");
                    return e.className = `jw-reset ${t}`, e
                },
                M = (t, e) => {
                    if ("WebKitPlaybackTargetAvailabilityEvent" in window) {
                        const i = (0, f.Z)("jw-icon-airplay jw-off", t, e.airplay, (0, o.o)("airplay-off,airplay-on"));
                        return (0, b.m)(i.element(), "airplay", e.airplay), i
                    }
                    if (n.Browser.chrome && window.chrome) {
                        const t = document.createElement("google-cast-launcher");
                        (0, r.P$)(t, "tabindex", "-1"), t.className += " jw-reset";
                        const i = (0, f.Z)("jw-icon-cast", null, e.cast);
                        i.ui.off();
                        const n = i.element();
                        return n.style.cursor = "pointer", n.appendChild(t), i.button = t, (0, b.m)(n, "chromecast", e.cast), i
                    }
                },
                B = (t, e, i) => {
                    if (!n.OS.mobile && "disabled" !== t && (n.Browser.chrome && !(0, y.yS)() || n.Browser.edge || n.Browser.safari)) {
                        const t = (0, f.Z)("jw-icon-pip jw-off", e, i.pipIcon, (0, o.o)("pip-on,pip-off"));
                        return (0, b.m)(t.element(), "pip", i.pipIcon), t
                    }
                },
                E = (t, e) => t.filter((t => !e.some((e => e.id + e.btnClass === t.id + t.btnClass && t.callback === e.callback)))),
                A = (t, e) => {
                    e.forEach((e => {
                        e.element && (e = e.element()), t.appendChild(e)
                    }))
                };
            class L {
                constructor(t, e, i) {
                    var a;
                    Object.assign(this, v.ZP), this._api = t, this._model = e, this._isMobile = n.OS.mobile, this._volumeAnnouncer = i.querySelector(".jw-volume-update");
                    const c = e.get("localization"),
                        p = e.get("timeSlider"),
                        w = new(!p || p.legacy ? l.Z : h)(e, t, i.querySelector(".jw-time-update"));
                    w.setup();
                    const d = this.menus = [];
                    let u, g, y;
                    this.ui = [];
                    let x = "";
                    const E = c.volume;
                    if (this._isMobile) {
                        if (!(e.get("sdkplatform") || n.OS.iOS && n.OS.version.major < 10)) {
                            const e = (0, o.o)("volume-0,volume-100");
                            y = (0, f.Z)("jw-icon-volume", (() => {
                                t.setMute()
                            }), E, e)
                        }
                    } else {
                        g = document.createElement("div"), g.className = "jw-horizontal-volume-container", u = new m(e, "jw-icon-volume", E, (0, o.o)("volume-0,volume-50,volume-100"), g);
                        const t = u.element();
                        d.push(u), (0, r.P$)(t, "role", "group"), e.change("mute", ((e, i) => {
                            const n = i ? c.unmute : c.mute;
                            (0, r.P$)(t, "aria-label", `${n} button`)
                        }), this)
                    }
                    const L = (0, f.Z)("jw-icon-next", (() => {
                            t.next({
                                feedShownId: x,
                                reason: "interaction"
                            })
                        }), c.next, (0, o.o)("next")),
                        $ = (0, f.Z)("jw-icon-settings jw-settings-submenu-button", (t => {
                            this.trigger("settingsInteraction", "quality", !0, t)
                        }), c.settings, (0, o.o)("settings"));
                    (0, r.P$)($.element(), "aria-controls", `jw-${t.id}-settings-menu`), (0, r.P$)($.element(), "aria-expanded", !1);
                    const I = (0, f.Z)("jw-icon-cc jw-settings-submenu-button", (t => {
                        this.trigger("settingsInteraction", "captions", !1, t)
                    }), c.cc, (0, o.o)("cc-off,cc-on"));
                    (0, r.P$)(I.element(), "aria-controls", `jw-${t.id}-settings-submenu-captions`);
                    const H = (0, f.Z)("jw-text-live", (() => {
                        this.goToLiveEdge()
                    }), c.liveBroadcast);
                    H.element().textContent = c.liveBroadcast;
                    const Z = this.elements = {
                            alt: z("jw-text-alt", "status"),
                            play: (0, f.Z)("jw-icon-playback", (() => {
                                t.playToggle({
                                    reason: "interaction"
                                })
                            }), c.play, (0, o.o)("play,pause,stop")),
                            rewind: (0, f.Z)("jw-icon-rewind", (() => {
                                this.rewind()
                            }), c.rewind, (0, o.o)("rewind")),
                            live: H,
                            next: L,
                            elapsed: T("jw-text-elapsed", "timer"),
                            countdown: T("jw-text-countdown", "timer"),
                            time: w,
                            duration: T("jw-text-duration", "timer"),
                            mute: y,
                            volumetooltip: u,
                            horizontalVolumeContainer: g,
                            cast: M((() => {
                                t.castToggle()
                            }), c),
                            pip: B(e.get("pipIcon"), (() => {
                                t.setPip()
                            }), c),
                            imaFullscreen: (0, f.Z)("jw-icon-fullscreen", (() => {
                                t.setFullscreen()
                            }), c.fullscreen, (0, o.o)("fullscreen-off,fullscreen-on")),
                            fullscreen: (0, f.Z)("jw-icon-fullscreen", (() => {
                                t.setFullscreen()
                            }), c.fullscreen, (0, o.o)("fullscreen-off,fullscreen-on")),
                            spacer: S("jw-spacer"),
                            buttonContainer: S("jw-button-container"),
                            settingsButton: $,
                            captionsButton: I
                        },
                        V = (0, b.m)(I.element(), "captions", c.cc),
                        P = t => {
                            const e = t.get("captionsList")[t.get("captionsIndex")];
                            let i = c.cc;
                            e && "Off" !== e.label && (i = e.label), V.setText(i)
                        },
                        _ = (0, b.m)(Z.play.element(), "play", c.play);
                    this.setPlayText = t => {
                        _.setText(t)
                    };
                    const O = Z.next.element(),
                        N = (0, b.m)(O, "next", c.nextUp, (() => {
                            const t = e.get("nextUp");
                            t && (x = (0, k.B)(k.F), this.trigger("nextShown", {
                                mode: t.mode,
                                ui: "nextup",
                                itemsShown: [t],
                                feedData: t.feedData,
                                reason: "hover",
                                feedShownId: x
                            }))
                        }), (() => {
                            x = ""
                        }));
                    (0, r.P$)(O, "dir", "auto"), (0, b.m)(Z.rewind.element(), "rewind", c.rewind), (0, b.m)(Z.settingsButton.element(), "settings", c.settings);
                    const R = [(0, b.m)(Z.fullscreen.element(), "fullscreen", c.fullscreen), (0, b.m)(Z.imaFullscreen.element())];
                    (0, r.cn)(Z.imaFullscreen.element(), "jw-fullscreen-ima");
                    const q = [Z.play, Z.rewind, Z.next, Z.volumetooltip, Z.horizontalVolumeContainer, Z.imaFullscreen, Z.mute, Z.alt, Z.live, Z.elapsed, Z.countdown, Z.duration, Z.spacer, Z.cast, Z.captionsButton, Z.settingsButton, Z.pip, Z.fullscreen].filter((t => t)),
                        U = [Z.time, Z.buttonContainer].filter((t => t));
                    this.el = document.createElement("div"), this.el.className = "jw-controlbar jw-reset", A(Z.buttonContainer, q), A(this.el, U);
                    const F = e.get("logo");
                    if (F && "control-bar" === F.position && this.addLogo(F), Z.play.show(), Z.fullscreen.show(), Z.imaFullscreen.show(), Z.mute && Z.mute.show(), Z.pip && Z.pip.show(), e.change("volume", this.onVolume, this), e.change("mute", ((t, e) => {
                        this.renderVolume(e, t.get("volume"))
                    }), this), e.change("state", this.onState, this), e.change("duration", this.onDuration, this), e.change("position", this.onElapsed, this), e.change("dvrSeekLimit", this.onElapsed, this), e.change("fullscreen", ((t, e) => {
                        const i = [this.elements.fullscreen.element(), this.elements.imaFullscreen.element()];
                        for (let n = 0; n < i.length; n++) {
                            const s = i[n];
                            (0, r.og)(i[n], "jw-off", e);
                            const o = t.get("fullscreen") ? c.exitFullscreen : c.fullscreen;
                            R[n].setText(o), (0, r.P$)(s, "aria-label", o)
                        }
                    }), this), e.change("allowFullscreen", this.onAllowFullscreenToggle, this), e.change("pip", ((t, e) => {
                        this.elements.pip && (0, r.og)(this.elements.pip.element(), "jw-off", e)
                    }), this), e.change("mediaType", ((t, e) => {
                        this.elements.pip && this.elements.pip.toggle("audio" !== e)
                    }), this), e.change("streamType", this.onStreamTypeChange, this), e.change("dvrLive", ((t, e) => {
                        const {
                            liveBroadcast: i,
                            notLive: n
                        } = c, s = this.elements.live.element(), o = !1 === e;
                        (0, r.og)(s, "jw-dvr-live", o), (0, r.P$)(s, "aria-label", o ? n : i), s.textContent = o ? n : i
                    }), this), e.change("altText", this.setAltText, this), e.change("customButtons", this.updateButtons, this), e.on("change:captionsIndex", P, this), e.on("change:captionsList", P, this), e.change("nextUp", ((t, e) => {
                        x = (0, k.B)(k.F);
                        let i = c.nextUp;
                        null != e && e.title && (i += `: ${e.title}`), N.setText(i), Z.next.toggle(Boolean(e))
                    }), this), e.change("audioMode", this.onAudioMode, this), Z.cast && (e.change("castAvailable", this.onCastAvailable, this), e.change("castActive", this.onCastActive, this)), Z.volumetooltip && (Z.volumetooltip.on("update", (function(t) {
                        const e = t.percentage;
                        this._api.setVolume(e)
                    }), this), Z.volumetooltip.on("toggleValue", (function() {
                        this._api.setMute()
                    }), this), Z.volumetooltip.on("adjustVolume", (function(t) {
                        this.trigger("adjustVolume", t)
                    }), this)), null != Z && null != (a = Z.cast) && a.button) {
                        const t = Z.cast.ui.on("click enter", (function(t) {
                            "keydown" === t.type && Z.cast.button.click(), this._model.set("castClicked", !0)
                        }), this);
                        this.ui.push(t)
                    }
                    const D = (0, C.Z)(Z.duration, (function() {
                        if ("DVR" === this._model.get("streamType")) {
                            const t = this._model.get("position"),
                                e = this._model.get("dvrSeekLimit");
                            this._api.seek(Math.max(-e, t), {
                                reason: "interaction"
                            })
                        }
                    }), this);
                    this.ui.push(D);
                    const W = new j.ZP(this.el).on("click drag", (function() {
                        this.trigger(s.xf)
                    }), this);
                    this.ui.push(W), d.forEach((t => {
                        t.on("open-tooltip", this.closeMenus, this)
                    }))
                }
                onVolume(t, e) {
                    this.renderVolume(t.get("mute"), e)
                }
                renderVolume(t, e) {
                    const i = this.elements.mute,
                        n = this.elements.volumetooltip;
                    if (i && ((0, r.og)(i.element(), "jw-off", t), (0, r.og)(i.element(), "jw-full", !t)), n) {
                        const i = t ? 0 : e,
                            s = n.element();
                        n.verticalSlider.render(i), n.horizontalSlider.render(i);
                        const {
                            tooltip: o,
                            horizontalContainer: a
                        } = n;
                        (0, r.og)(s, "jw-off", t), (0, r.og)(s, "jw-full", e >= 75 && !t), (0, r.P$)(o, "aria-valuenow", i), (0, r.P$)(a, "aria-valuenow", i);
                        const l = `Volume ${i}%`;
                        (0, r.P$)(o, "aria-valuetext", l), (0, r.P$)(a, "aria-valuetext", l), document.activeElement !== o && document.activeElement !== a && (this._volumeAnnouncer.textContent = l)
                    }
                }
                onCastAvailable(t, e) {
                    this.elements.cast.toggle(e)
                }
                onCastActive(t, e) {
                    this.elements.fullscreen.toggle(!e), this.elements.imaFullscreen.toggle(!e), this.elements.pip && this.elements.pip.toggle(!e), this.elements.cast.button && (0, r.og)(this.elements.cast.button, "jw-off", !e)
                }
                onElapsed(t, e) {
                    let i, n;
                    const s = t.get("duration");
                    if ("DVR" === t.get("streamType")) {
                        const s = Math.ceil(e),
                            o = -this._model.get("dvrSeekLimit") * 1.2;
                        i = n = "", t.set("dvrLive", s >= o)
                    } else i = (0, x.timeFormat)(e), n = (0, x.timeFormat)(s - e);
                    this.elements.elapsed.textContent = i, this.elements.countdown.textContent = n
                }
                onDuration(t, e) {
                    this.elements.duration.textContent = (0, x.timeFormat)(Math.abs(e))
                }
                onAudioMode(t, e) {
                    const i = this.elements.time.element();
                    e ? this.elements.buttonContainer.insertBefore(i, this.elements.elapsed) : (0, r.SH)(this.el, i)
                }
                element() {
                    return this.el
                }
                setAltText(t, e) {
                    this.elements.alt.textContent = e
                }
                closeMenus(t) {
                    this.menus.forEach((e => {
                        t && t.target === e.el || e.closeTooltip(t)
                    }))
                }
                rewind() {
                    let t, e = 0;
                    const i = this._model.get("currentTime");
                    i ? t = i - 10 : (t = this._model.get("position") - 10, "DVR" === this._model.get("streamType") && (e = this._model.get("duration"))), this._api.seek(Math.max(t, e), {
                        reason: "interaction"
                    })
                }
                onState(t, e) {
                    const i = t.get("localization");
                    let n = i.play;
                    this.setPlayText(n), e === s.r0 && ("LIVE" !== t.get("streamType") ? (n = i.pause, this.setPlayText(n)) : (n = i.stop, this.setPlayText(n))), (0, r.P$)(this.elements.play.element(), "aria-label", n)
                }
                onAllowFullscreenToggle(t, e) {
                    [this.elements.fullscreen.element(), this.elements.imaFullscreen.element()].forEach((t => {
                        (0, r.og)(t, "jw-fullscreen-disallowed", !e)
                    }))
                }
                onStreamTypeChange(t, e) {
                    const i = "LIVE" === e,
                        n = "DVR" === e;
                    this.elements.rewind && this.elements.rewind.toggle(!i), this.elements.live.toggle(i || n), (0, r.P$)(this.elements.live.element(), "tabindex", i ? "-1" : "0"), this.elements.duration.style.display = n ? "none" : "", this.onDuration(t, t.get("duration")), this.onState(t, t.get("state"))
                }
                addLogo(t) {
                    const e = this.elements.buttonContainer,
                        i = new a.Z(t.file, this._model.get("localization").logo, (() => {
                            t.link && (0, r.nG)(t.link, "_blank", {
                                rel: "noreferrer"
                            })
                        }), "logo", "jw-logo-button");
                    t.link || (0, r.P$)(i.element(), "tabindex", "-1"), e.insertBefore(i.element(), e.querySelector(".jw-spacer").nextSibling)
                }
                goToLiveEdge() {
                    if ("DVR" === this._model.get("streamType")) {
                        const t = Math.min(this._model.get("position"), -1),
                            e = this._model.get("dvrSeekLimit");
                        this._api.seek(Math.max(-e, t), {
                            reason: "interaction"
                        }), this._api.play({
                            reason: "interaction"
                        })
                    }
                }
                updateButtons(t, e, i) {
                    if (!e) return;
                    const n = this.elements.buttonContainer;
                    let s, o;
                    e !== i && i ? (s = E(e, i), o = E(i, e), this.removeButtons(n, o)) : s = e;
                    for (let t = s.length - 1; t >= 0; t--) {
                        const e = s[t],
                            i = new a.Z(e.img, e.tooltip, e.callback, e.id, e.btnClass);
                        let o;
                        e.tooltip && (0, b.m)(i.element(), e.id, e.tooltip), "related" === i.id ? o = this.elements.settingsButton.element() : "share" === i.id ? o = n.querySelector('[button="related"]') || this.elements.settingsButton.element() : (o = this.elements.spacer.nextSibling, o && "logo" === o.getAttribute("button") && (o = o.nextSibling)), n.insertBefore(i.element(), o)
                    }
                }
                removeButtons(t, e) {
                    for (let i = e.length; i--;) {
                        const n = t.querySelector(`[button="${e[i].id}"]`);
                        n && t.removeChild(n)
                    }
                }
                toggleCaptionsButtonState(t) {
                    const e = this.elements.captionsButton;
                    e && (0, r.og)(e.element(), "jw-off", !t)
                }
                destroy() {
                    this._model.off(null, null, this), Object.keys(this.elements).forEach((t => {
                        const e = this.elements[t];
                        e && "function" == typeof e.destroy && this.elements[t].destroy()
                    })), this.ui.forEach((t => {
                        t.destroy()
                    })), this.ui = []
                }
            }
        },
        4697: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => h
            });
            const n = (t = "", e = "") => `<div class="jw-display-icon-container jw-display-icon-${t} jw-reset"><div class="jw-icon jw-icon-${t} jw-button-color jw-reset" role="button" tabindex="0" aria-label="${e}"></div></div>`;
            var s = i(5646);
            class o {
                constructor(t, e, i) {
                    const n = i.querySelector(".jw-icon");
                    this.el = i, this.ui = (0, s.Z)(n, (function() {
                        const i = t.get("position"),
                            n = t.get("duration"),
                            s = i - 10;
                        let o = 0;
                        "DVR" === t.get("streamType") && (o = n), e.seek(Math.max(s, o))
                    }))
                }
                element() {
                    return this.el
                }
            }
            var a = i(328),
                l = i(2799);
            class r extends a.ZP {
                constructor(t, e, i) {
                    super();
                    const n = t.get("localization"),
                        o = i.querySelector(".jw-icon");
                    if (this.icon = o, this.el = i, this.ui = (0, s.Z)(o, (t => {
                        this.trigger(t.type)
                    })), t.on("change:state", ((t, e) => {
                        let i;
                        switch (e) {
                            case "buffering":
                                i = n.buffer;
                                break;
                            case "playing":
                                i = n.pause;
                                break;
                            case "idle":
                            case "paused":
                                i = n.playback;
                                break;
                            case "complete":
                                i = n.replay;
                                break;
                            default:
                                i = ""
                        }
                        "" !== i ? o.setAttribute("aria-label", i) : o.removeAttribute("aria-label")
                    })), t.get("displayPlaybackLabel")) {
                        let t = this.icon.getElementsByClassName("jw-idle-icon-text")[0];
                        t || (t = (0, l.az)(`<div class="jw-idle-icon-text">${n.playback}</div>`), (0, l.cn)(this.icon, "jw-idle-label"), this.icon.appendChild(t))
                    }
                }
                element() {
                    return this.el
                }
            }
            class c {
                constructor(t, e, i) {
                    const n = i.querySelector(".jw-icon");
                    this.ui = (0, s.Z)(n, (function() {
                        e.next({
                            reason: "interaction"
                        })
                    })), t.change("nextUp", (function(t, e) {
                        i.style.visibility = e ? "" : "hidden"
                    })), this.el = i
                }
                element() {
                    return this.el
                }
            }
            var p = i(7191);
            const w = function(t, e, i, n, s, o, a) {
                const l = n.querySelector(`.jw-display-icon-${t}`),
                    r = n.querySelector(`.jw-icon-${t}`);
                e.forEach((t => {
                    r.appendChild(t)
                })), s[t] = new i(o, a, l)
            };
            class h {
                constructor(t, e) {
                    var i;
                    this.el = (0, l.az)((i = t.get("localization"), '<div class="jw-display jw-reset"><div class="jw-display-container jw-reset"><div class="jw-display-controls jw-reset">' + n("rewind", i.rewind) + n("display", i.playback) + n("next", i.next) + "</div></div></div>"));
                    const s = this.el.querySelector(".jw-display-controls"),
                        a = {};
                    w("rewind", (0, p.o)("rewind"), o, s, a, t, e), w("display", (0, p.o)("play,pause,buffer,replay"), r, s, a, t, e), w("next", (0, p.o)("next"), c, s, a, t, e), this.container = s, this.buttons = a
                }
                element() {
                    return this.el
                }
                destroy() {
                    const t = this.buttons;
                    Object.keys(t).forEach((e => {
                        t[e].ui && t[e].ui.destroy()
                    }))
                }
            }
        },
        7191: (t, e, i) => {
            "use strict";
            i.d(e, {
                W: () => pt,
                o: () => wt
            });
            var n = i(147),
                s = i.n(n),
                o = i(4886),
                a = i.n(o),
                l = i(4777),
                r = i.n(l),
                c = i(6084),
                p = i.n(c),
                w = i(2521),
                h = i.n(w),
                d = i(6207),
                u = i.n(d),
                j = i(6641),
                g = i.n(j),
                m = i(3498),
                f = i.n(m),
                b = i(3918),
                v = i.n(b),
                y = i(3356),
                x = i.n(y),
                k = i(8157),
                C = i.n(k),
                z = i(5806),
                T = i.n(z),
                S = i(7766),
                M = i.n(S),
                B = i(4851),
                E = i.n(B),
                A = i(3207),
                L = i.n(A),
                $ = i(7938),
                I = i.n($),
                H = i(4060),
                Z = i.n(H),
                V = i(4119),
                P = i.n(V),
                _ = i(9992),
                O = i.n(_),
                N = i(6038),
                R = i.n(N),
                q = i(5058),
                U = i.n(q),
                F = i(7459),
                D = i.n(F),
                W = i(4606),
                K = i.n(W),
                Y = i(1438),
                X = i.n(Y),
                G = i(5147),
                J = i.n(G),
                Q = i(9863),
                tt = i.n(Q),
                et = i(2494),
                it = i.n(et),
                nt = i(8675),
                st = i.n(nt),
                ot = i(4667);
            let at = null;
            const lt = function() {
                    return at || (at = (0, ot.Z)(`<xml>${s()}${a()}${r()}${p()}${h()}${u()}${g()}${f()}${v()}${x()}${C()}${T()}${M()}${E()}${L()}${I()}${Z()}${P()}${O()}${R()}${U()}${X()}${J()}${D()}${K()}${tt()}${it()}${st()}</xml>`)), at
                },
                rt = function(t) {
                    return `.jw-svg-icon-${t}`
                },
                ct = function(t) {
                    return t.cloneNode(!0)
                },
                pt = function(t) {
                    const e = lt().querySelector(rt(t));
                    return e ? ct(e) : null
                },
                wt = function(t) {
                    const e = lt().querySelectorAll(t.split(",").map(rt).join(","));
                    return Array.prototype.map.call(e, (t => ct(t)))
                }
        },
        3163: (t, e, i) => {
            "use strict";
            i.d(e, {
                Ge: () => o,
                dr: () => l,
                v2: () => a
            });
            var n = i(4060),
                s = i.n(n);
            const o = t => `<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="${t}" dir="auto">${t}</button>`,
                a = ({
                         label: t,
                         currentSelection: e
                     }) => `<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="${t}" aria-expanded="false" dir="auto">${t}<div class='jw-reset jw-settings-value-wrapper'><div class="jw-reset-text jw-settings-content-item-value">${e}</div><div class="jw-reset-text jw-settings-content-item-arrow">${s()}</div></div></button>`,
                l = t => `<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="${t}" role="menuitemradio" aria-checked="false" dir="auto">${t}</button>`
        },
        7509: (t, e, i) => {
            "use strict";
            i.d(e, {
                E6: () => s,
                Z2: () => o,
                qF: () => n
            });
            const n = (t, e, i) => e ? `<div id="jw-${t}-settings-submenu-${i}" class="jw-reset jw-settings-submenu jw-settings-submenu-${i}" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>` : `<div id="jw-${t}-settings-menu" class="jw-reset jw-settings-menu" aria-expanded="false"><div class="jw-reset jw-settings-topbar"><div class="jw-reset jw-settings-topbar-text" tabindex="0"></div><div class="jw-reset jw-settings-topbar-buttons"></div></div></div>`,
                s = (t, e, i) => e ? `<div id="jw-${t}-settings-submenu-${i}" class="jw-reset jw-settings-submenu jw-settings-submenu-${i}" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>` : `<div id="jw-${t}-settings-menu-tizen" class="jw-reset jw-settings-menu-tizen" aria-expanded="false"></div>`,
                o = (t, e, i, n) => `<div id="jw-${t}-settings-submenu-${i}" class="jw-reset jw-settings-submenu-tizen jw-settings-submenu-${i}"><div class="jw-reset jw-reset-text jw-settings-topbar-text">${n}</div><div class="jw-reset jw-settings-submenu-items"></div></div>`
        },
        3112: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => $
            });
            var n = i(5187),
                s = i(8268),
                o = i(7191),
                a = i(8993),
                l = i(8168),
                r = i(8165),
                c = i(5349),
                p = i(2799);
            const w = function(t) {
                    const e = document.createElement("div");
                    return e.className = `jw-reset ${t}`, e
                },
                h = (t, e) => {
                    e.forEach((e => {
                        t.appendChild(e)
                    }))
                },
                d = function(t) {
                    return t.map((t => "element" in t ? t.element() : t))
                },
                u = function(t) {
                    t.open(), t.close()
                },
                j = function(t) {
                    return "element" in t && "none" !== t.element().style.display && t.element().classList.contains("jw-button-color")
                },
                g = function(t) {
                    if (t && "object" == typeof t) return "element" in t ? t.element() : "el" in t ? t.el : void 0
                },
                m = function(t, e, i) {
                    if (!t) return;
                    const n = i ? 1 : -1;
                    for (let i = e.indexOf(t) + n; i >= 0 && i < e.length; i += n) {
                        const t = e[i];
                        if (j(t)) return t
                    }
                };
            class f extends s.Z {
                constructor(t, e, i) {
                    super(t, e, i), this._api = t, this._model = e, this.activeButton = null;
                    const n = e.get("localization"),
                        s = new a.Z(e, t, i.querySelector(".jw-time-update"));
                    s.setup();
                    const l = this.elements,
                        p = this.elements = {
                            alt: l.alt,
                            play: l.play,
                            live: l.live,
                            elapsed: l.elapsed,
                            countdown: l.countdown,
                            time: s,
                            duration: l.duration,
                            settingsButton: l.settingsButton,
                            back: (0, r.Z)("jw-icon-back", (() => {
                                this.trigger("backClick")
                            }), "Back", (0, o.o)("arrow-left")),
                            topContainer: w("jw-top-container"),
                            bottomContainer: w("jw-bottom-container"),
                            buttonContainer: w("jw-button-container")
                        };
                    p.play.element().removeChild(p.play.element().querySelector(".jw-tooltip-play")), u((0, c.m)(p.settingsButton.element(), "settings", n.settings)), u((0, c.m)(p.back.element(), "back", "Back")), this.topLayout = [p.back, p.settingsButton], this.bottomLayout = [p.play, p.alt, p.live, p.elapsed, p.time, p.countdown];
                    const j = [p.topContainer, p.buttonContainer, p.bottomContainer];
                    this.el = document.createElement("div"), this.el.className = "jw-tizen-controlbar jw-controlbar jw-reset", h(p.topContainer, d(this.topLayout)), h(p.bottomContainer, d(this.bottomLayout)), h(this.el, j), p.play.show(), p.back.show(), this.setActiveButton(this.elements.play)
                }
                handleKeydown(t, e, i) {
                    const n = this.activeButton;
                    let s, o, a = !1,
                        l = !1;
                    if (!i && n) {
                        a = this.elements.topContainer.contains(n.element()), l = this.elements.bottomContainer.contains(n.element());
                        const t = a ? this.topLayout : this.bottomLayout;
                        s = m(n, t, !0), o = m(n, t, !1)
                    }
                    switch (t.keyCode) {
                        case 415:
                        case 19:
                        case 10252:
                            this.setActiveButton(this.elements.play);
                            break;
                        case 37:
                            if (i && n === this.adSkipButton) return void this.setActiveButton(this.elements.play);
                            o && this.setActiveButton(o);
                            break;
                        case 39:
                            if (i && this.adSkipButton && n === this.elements.play) return void this.setActiveButton(this.adSkipButton);
                            s && this.setActiveButton(s);
                            break;
                        case 38:
                            if (!e) return void this.setActiveButton(this.elements.play);
                            if (i) return;
                            l && (j(this.elements.settingsButton) ? this.setActiveButton(this.elements.settingsButton) : this.setActiveButton(this.elements.back));
                            break;
                        case 40:
                            if (!e) return void this.setActiveButton(this.elements.play);
                            if (i) return;
                            a && this.setActiveButton(this.elements.play);
                            break;
                        case 13:
                            if (i && n === this.adSkipButton) {
                                if (!this.adSkipButton.skippable) return;
                                return this.adSkipButton.skipUI.trigger("click"), void this.setActiveButton(this.elements.play)
                            }
                            e && n && n.ui.trigger("click")
                    }
                }
                setActiveButton(t) {
                    const e = this.activeButton;
                    if (e === t) return;
                    const i = g(e),
                        n = g(t);
                    i && (0, p.og)(i, "jw-active", !1), n && (0, p.og)(n, "jw-active", !0), this.activeButton = t
                }
                onAudioMode() {}
                updateButtons(t, e, i) {
                    if (!e) return;
                    const n = this.elements.buttonContainer;
                    for (let t = e.length - 1; t >= 0; t--) {
                        const i = e[t],
                            s = new l.Z(i.img, i.tooltip, i.callback, i.id, i.btnClass);
                        i.tooltip && (0, c.m)(s.element(), i.id, i.tooltip), n.appendChild(s.element())
                    }
                }
                toggleVisibility(t) {
                    (0, p.og)(this.el.querySelector(".jw-bottom-container"), "jw-hidden", !t)
                }
                destroy() {
                    this.activeButton = null, super.destroy.apply(this)
                }
            }
            var b = i(974),
                v = i(9888);
            const y = function(t, e, i) {
                return e === t ? 0 : parseInt(i, 10) / (t - e) * 100
            };
            class x {
                constructor(t, e, i) {
                    this._model = t, this._api = e, this._slider = i, this.currentTime = 0;
                    const n = document.createElement("div");
                    n.className = "jw-tizen-seekbar", this.el = n;
                    const s = this.thumbnailContainer = (0, p.az)('<div class="jw-seekbar-thumbnails"><div class="jw-seekbar-thumb jw-reset"></div><div class="jw-seekbar-thumb jw-reset"></div><div class="jw-seekbar-thumb jw-active jw-reset"></div><div class="jw-seekbar-thumb jw-reset"></div><div class="jw-seekbar-thumb jw-reset"></div></div>');
                    this.el.appendChild(s), e.on("firstFrame", (() => {
                        this._slider.thumbnails && 0 !== this._slider.thumbnails.length && this.setImageDimensions()
                    }), this)
                }
                setImageDimensions() {
                    const t = new Image;
                    t.onload = () => {
                        t.onload = null, this.imageWidth = t.width, this.imageHeight = t.height
                    }, t.src = this._slider.chooseThumbnail(0)
                }
                show() {
                    this._slider.thumbnails && 0 !== this._slider.thumbnails.length ? ((0, p.cn)(this.thumbnailContainer, "jw-open"), this.updateThumbnails(this._model.get("position"), 10)) : ((0, p.cn)(this._slider.timeTip.el, "jw-open"), this.updateTimeTip(this._model.get("position")))
                }
                update(t) {
                    const e = this.currentTime,
                        i = this._model.get("duration");
                    let n = e + t;
                    n = n < 0 ? 0 : n, n = n > i ? i : n, n !== e && (this._slider.thumbnails && 0 !== this._slider.thumbnails.length ? this.updateThumbnails(n, Math.abs(t)) : this.updateTimeTip(n))
                }
                updateTimeTip(t) {
                    const e = this._slider.timeTip,
                        i = this.getProgressPercent(t);
                    (0, b.oB)(e.el, {
                        left: `${i}%`
                    }), e.update((0, v.timeFormat)(Math.round(t))), this.updateProgressBar(t), this.currentTime = Math.round(t)
                }
                updateThumbnails(t, e) {
                    const i = this.thumbnailContainer.children,
                        n = this._model.get("duration"),
                        s = [t - 2 * e, t - e, t, t + e, t + 2 * e];
                    for (let t = 0; t < s.length; t++) {
                        const e = s[t],
                            o = i[t];
                        let a;
                        e >= 0 && e <= n && (a = this._slider.loadThumbnail(e));
                        const l = this.getThumbnailStyles(a);
                        (0, b.oB)(o, l)
                    }
                    document.getElementsByClassName("jw-text-elapsed")[0].textContent = (0, v.timeFormat)(Math.round(t)), this.updateProgressBar(t), this.currentTime = Math.round(t)
                }
                hide() {
                    const t = this._model.get("position");
                    document.getElementsByClassName("jw-text-elapsed")[0].textContent = (0, v.timeFormat)(Math.round(t)), this.updateProgressBar(t), (0, p.IV)(this._slider.timeTip.el, "jw-open"), (0, p.IV)(this.thumbnailContainer, "jw-open"), this.resetThumbnails()
                }
                seek() {
                    this._api.seek(this.currentTime, {
                        reason: "interaction"
                    })
                }
                element() {
                    return this.el
                }
                destroy() {
                    this._api.off(null, null, this)
                }
                resetThumbnails() {
                    for (let t = 0; t < this.thumbnailContainer.children.length; t++)(0, b.oB)(this.thumbnailContainer.children[t], {
                        backgroundImage: ""
                    })
                }
                getProgressPercent(t) {
                    const e = this._model.get("duration");
                    return 100 * parseFloat((t / e).toFixed(3))
                }
                updateProgressBar(t) {
                    const e = this.getProgressPercent(t),
                        i = this._slider.el.querySelector(".jw-progress");
                    (0, b.oB)(i, {
                        width: `${e}%`
                    })
                }
                getThumbnailStyles(t) {
                    const e = {
                        margin: "5px",
                        height: "215px",
                        width: "375px",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: ""
                    };
                    if (t && (e.backgroundImage = t.backgroundImage, t.width && t.height && this.imageWidth && this.imageHeight)) {
                        const i = this.imageWidth / t.width * 100,
                            n = this.imageHeight / t.height * 100;
                        e.backgroundSize = `${i}% ${n}%`;
                        const s = t.backgroundPosition.match(/\d+/g),
                            o = y(this.imageWidth, t.width, s[0]),
                            a = y(this.imageHeight, t.height, s[1]);
                        e.backgroundPosition = `${o}% ${a}%`
                    }
                    return e
                }
            }
            var k = i(4697);
            var C = i(7284),
                z = i(2810),
                T = i(1643),
                S = i(5882),
                M = i(7509);
            class B extends C.Z {
                constructor(t, e, i, n) {
                    super(t.id, "settings", n.settings, null, n, M.E6), this.onInteraction = this.onInteraction.bind(this), this.onTransition = this.onTransition.bind(this), this.ui = new S.ZP(this.el), this.api = t, this.model = e, this.controlbar = i, this.localization = n, this.visible = !1, this.activeMenu = null, this.addEventListeners()
                }
                addEventListeners() {
                    const {
                        model: t
                    } = this;
                    this.on("visibility", this.onVisibility, this), this.on("menuAppended", this.updateControlbarButtons), t.on("change:playlistItem", this.onPlaylistItem, this), t.change("audioTracks", this.onAudioTracks, this), t.on("change:currentAudioTrack", this.onAudioTrackIndex, this), t.change("captionsList", this.onCaptionsList, this), t.change("captionsIndex", this.onCaptionsIndex, this), this.el.addEventListener("animationend", this.onTransition)
                }
                setupMenu(t, e, i, n, s, o) {
                    if (!i || i.length <= 1) return void this.removeMenu(t);
                    let a = this.children[t];
                    if (!a) {
                        a = new C.Z(this.api.id, t, e, null, this.localization, M.Z2), a.parentMenu = this, a.itemsContainer = new S.ZP(a.el.querySelector(".jw-settings-submenu-items"));
                        const i = () => {};
                        a.open = a.close = a.toggle = i, a.el.classList.add("jw-settings-submenu-active"), this.appendMenu(a)
                    }
                    a.setMenuItems(a.createItems(i, n, o), s), this.activeMenu || (this.activeMenu = a)
                }
                onInteraction(t) {
                    const e = function(e) {
                        const i = t.target,
                            n = e ? (0, p.i3)(i) : (0, p.AH)(i);
                        if (n) n.focus({
                            preventScroll: !0
                        });
                        else {
                            const t = this.activeMenu.el,
                                n = e ? (0, p.i3)(t) : (0, p.AH)(t);
                            if (n && !n.contains(i)) {
                                const t = n.id.substring(`jw-${this.api.id}-settings-submenu-`.length),
                                    i = this.children[t],
                                    s = i.items;
                                (e ? s[s.length - 1] : s[0]).el.focus({
                                    preventScroll: !0
                                }), this.activeMenu = i
                            }
                        }
                        this.trigger(T.xf)
                    };
                    switch (t.keyCode) {
                        case 38:
                            e.call(this, !0);
                            break;
                        case 40:
                            e.call(this, !1);
                            break;
                        case 37:
                        case 10009:
                            this.close(t), this.controlbar && this.controlbar.setActiveButton(this.controlbar.elements.settingsButton);
                            break;
                        case 415:
                        case 10252:
                            this.close(t, !0), this.api.play({
                                reason: "settingsInteraction"
                            })
                    }
                }
                onVisibility(t) {
                    const {
                        api: e,
                        children: i,
                        controlbar: n,
                        el: s
                    } = this, o = s.classList;
                    if (t.visible) {
                        e.pause({
                            reason: "settingsInteraction"
                        }), document.addEventListener("keydown", this.onInteraction), o.remove("jw-settings-transition-close"), o.add("jw-settings-open"), o.add("jw-settings-transition-open"), s.setAttribute("aria-expanded", "true"), this.visible = !0;
                        const t = Object.keys(this.children);
                        i && t.length && i[t[0]].items[0].el.focus({
                            preventScroll: !0
                        })
                    } else document.removeEventListener("keydown", this.onInteraction), o.remove("jw-settings-transition-open"), o.add("jw-settings-transition-close"), s.setAttribute("aria-expanded", "false"), this.visible = !1;
                    n && n.toggleVisibility(!t.visible)
                }
                open(t) {
                    this.toggle(t, !0)
                }
                close(t) {
                    this.toggle(t, !1)
                }
                toggle(t, e = !this.visible) {
                    e !== this.visible && (this.children.captions || this.children.audioTracks) && (this.trigger("visibility", {
                        visible: e,
                        evt: t
                    }), e && this.controlbar && this.controlbar.setActiveButton(null))
                }
                onTransition() {
                    this.visible || this.el.classList.remove("jw-settings-transition-open", "jw-settings-open")
                }
                onAudioTracks(t, e) {
                    this.setupMenu("audioTracks", this.localization.audioTracks, e, (t => this.api.setCurrentAudioTrack(t)), t.get("currentAudioTrackIndex"))
                }
                onAudioTrackIndex(t, e) {
                    const i = this.children.audioTracks;
                    (0, z.dt)(i, e), this.close()
                }
                onCaptionsList(t, e) {
                    const i = {
                            defaultText: this.localization.off
                        },
                        n = t.get("captionsIndex");
                    this.setupMenu("captions", this.localization.cc, e, (t => this.api.setCurrentCaptions(t)), n, i)
                }
                onCaptionsIndex(t, e) {
                    const i = this.children.captions;
                    (0, z.dt)(i, e), this.close()
                }
                onPlaylistItem() {
                    const {
                        children: t
                    } = this;
                    this.close(), null != t && t.length && t.forEach((t => {
                        this.removeChild(t)
                    }))
                }
                updateControlbarButtons() {
                    const t = this.controlbar.elements.settingsButton;
                    Object.keys(this.children).length ? t.show() : t.hide()
                }
                destroy() {
                    z.MR.call(this), this.el.removeEventListener("animationend", this.onTransition), document.removeEventListener("keydown", this.onInteraction), this.activeMenu = null, this.controlbar && this.controlbar.toggleVisibility(!0)
                }
            }
            var E = i(4646);
            i(4779);
            const A = function(t, e, i) {
                const n = t.createElementNS("http://www.w3.org/2000/svg", "circle");
                n.setAttribute("class", i), n.setAttribute("cx", "50%"), n.setAttribute("cy", "50%"), n.setAttribute("r", "75");
                const s = e.element().querySelector(".jw-svg-icon-buffer");
                s && s.appendChild(n)
            };
            class L extends E.default {
                constructor(t, e) {
                    super(t, e), this.context = t, this.playerContainer = e, this.api = null, this.model = null, this.div = null, this.backdrop = null, this.pauseDisplay = null, this.displayContainer = null, this.controlbar = null, this.seekbar = null, this.seekState = !1, this.settingsMenu = null, this.showing = !1, this.instreamState = !1, this.keydownCallback = null
                }
                get apiEnabled() {
                    return Boolean(this.api)
                }
                enable(t, e) {
                    super.enable.call(this, t, e), this.api = t, this.model = e, (0, p.cn)(this.playerContainer, "jw-tizen-app");
                    const i = this.context.createElement("div");
                    i.className = "jw-tizen-controls jw-tizen-reset";
                    const s = e.get("setupConfig");
                    if (s.height || s.width || t.resize(innerWidth, innerHeight), !this.pauseDisplay) {
                        const t = (0, p.az)('<div class="jw-pause-display jw-reset"><div class="jw-pause-display-container jw-reset"><div class="jw-pause-title jw-reset-text"></div><div class="jw-pause-description jw-reset-text"></div></div></div>');
                        new n.Z(e).setup(t.querySelector(".jw-pause-display-container")), i.appendChild(t), this.pauseDisplay = t
                    }
                    const o = new k.Z(e, t);
                    A(this.context, o, "jw-tizen-buffer-draw"), A(this.context, o, "jw-tizen-buffer-erase"), i.appendChild(o.element()), this.displayContainer && this.displayContainer.destroy(), this.displayContainer = o;
                    const a = new f(t, e, this.playerContainer.querySelector(".jw-hidden-accessibility"));
                    a.on("backClick", this.onBackClick, this), i.appendChild(a.element());
                    const l = this.controlbar;
                    if (l) {
                        const t = l.nextUpToolTip;
                        t && (t.off("all"), e.get("nextUp") && t.onNextUp(e, e.get("nextUp")), l.nextUpToolTip = null, a.nextUpToolTip = t, i.appendChild(t.element())), l.destroy()
                    }
                    this.controlbar = a;
                    const r = this.seekbar = new x(e, t, a.elements.time);
                    i.appendChild(r.element());
                    const c = e.get("localization"),
                        w = new B(t, e.player, this.controlbar, c);
                    w.on(T.xf, (() => this.userActive())), a.on("settingsInteraction", (() => {
                        var t;
                        w.toggle();
                        const e = null == this || null == (t = this.div) ? void 0 : t.querySelector(".jw-active");
                        w.visible && e && (0, p.IV)(e, "jw-active")
                    })), i.insertBefore(w.el, a.element()), this.settingsMenu && this.settingsMenu.destroy(), this.settingsMenu = w, this.div = i, t.on("playlistComplete", this.onBackClick, this), this.keydownCallback && (this.playerContainer.removeEventListener("keydown", this.keydownCallback), this.keydownCallback = null), this.keydownCallback = t => this.handleKeydown(t), document.addEventListener("keydown", this.keydownCallback), this.addBackdrop(), this.addControls(), this.playerContainer.focus({
                        preventScroll: !0
                    }), this.userInactive(), e.set("controlsEnabled", !0)
                }
                addControls() {
                    const t = this.wrapperElement.querySelector(".jw-controls");
                    t && this.wrapperElement.removeChild(t), super.addControls.call(this)
                }
                disable(t) {
                    this.model = null, this.apiEnabled && (this.api.off(null, null, this), this.api = null), this.keydownCallback && document.removeEventListener("keydown", this.keydownCallback), this.seekbar && this.seekbar.destroy(), super.disable.call(this, t)
                }
                userActive(t = 5e3) {
                    super.userActive.call(this, t)
                }
                onBackClick() {
                    this.api.trigger("backClick"), this.api.remove()
                }
                handleKeydown(t) {
                    if (!this.apiEnabled || !this.model) return;
                    let e = !1;
                    const i = this.settingsMenu;
                    if (null == i || !i.visible || 10253 === t.keyCode) switch (this.controlbar && (this.controlbar.handleKeydown(t, this.showing, this.instreamState), e = this.controlbar.activeButton === this.controlbar.elements.play), t.keyCode) {
                        case 37:
                            if (this.instreamState) return void this.userActive();
                            if (this.seekState) return void this.updateSeek(-10);
                            if (!this.showing || e) return void this.enterSeekMode();
                            this.userActive();
                            break;
                        case 39:
                            if (this.instreamState) return void this.userActive();
                            if (this.seekState) return void this.updateSeek(10);
                            if (!this.showing || e) return void this.enterSeekMode();
                            this.userActive();
                            break;
                        case 38:
                            if (this.seekState) return this.exitSeekMode(), this.userInactive(), void this.api.play();
                            this.userActive();
                            break;
                        case 40:
                            this.seekState && this.exitSeekMode(), this.userActive();
                            break;
                        case 13:
                            if (t.preventDefault(), this.seekState) return void this.seek();
                            this.showing || (this.userActive(), this.api.playToggle({
                                reason: "interaction"
                            }));
                            break;
                        case 415:
                            if (this.seekState) return void this.seek();
                            this.model.get("state") !== T.r0 && this.api.play();
                            break;
                        case 19:
                            if (this.seekState) return void this.exitSeekMode();
                            this.model.get("state") !== T._5 && (this.userActive(), this.api.pause());
                            break;
                        case 10252:
                            if (this.seekState) return void this.seek();
                            this.model.get("state") !== T._5 && this.userActive(), this.api.playToggle({
                                reason: "interaction"
                            });
                            break;
                        case 412:
                        case 417:
                        default:
                            break;
                        case 10009:
                            if (this.seekState) return this.exitSeekMode(), void this.userActive();
                            this.onBackClick();
                            break;
                        case 10253:
                            this.userActive(), i && i.toggle(t);
                            break;
                        case 10182:
                            this.api.remove()
                    }
                }
                seek() {
                    this.apiEnabled && this.seekbar && (this.seekbar.seek(), this.exitSeekMode(), this.api.play(), this.userInactive())
                }
                enterSeekMode() {
                    this.apiEnabled && this.seekbar && ((0, p.cn)(this.playerContainer, "jw-flag-seek"), this.seekState = !0, this.seekbar.show(), this.api.pause(), this.userActive())
                }
                exitSeekMode() {
                    this.seekbar && ((0, p.IV)(this.playerContainer, "jw-flag-seek"), this.seekState = !1, this.seekbar.hide())
                }
                updateSeek(t) {
                    this.seekbar && (this.seekbar.update(t), this.userActive())
                }
            }
            const $ = L
        },
        5187: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(974),
                s = i(2799),
                o = i(8348);
            const a = class {
                constructor(t) {
                    this.model = t.player, this.truncated = t.get("__ab_truncated") && !o.Browser.ie
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
                            s = t.get("logoWidth") + (isNaN(n) ? 0 : n + 10);
                        "top-left" === i.position ? e.paddingLeft = s : "top-right" === i.position && (e.paddingRight = s)
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
                    this.title && this.description && ((0, s.nh)(this.title, (0, s.Ww)(t)), (0, s.nh)(this.description, (0, s.Ww)(e)), this.title.firstChild || this.description.firstChild ? this.show() : this.hide())
                }
                element() {
                    return this.el
                }
            }
        },
        5646: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            var n = i(5882);
            const s = function(t, e, i) {
                return new n.ZP(t).on("click enter", e, i)
            }
        },
        6436: (t, e, i) => {
            "use strict";
            i.d(e, {
                d: () => o,
                i: () => s
            });
            var n = i(2799);
            const s = function(t) {
                    let e = -1;
                    return t >= 1280 ? e = 7 : t >= 960 ? e = 6 : t >= 800 ? e = 5 : t >= 640 ? e = 4 : t >= 540 ? e = 3 : t >= 420 ? e = 2 : t >= 320 ? e = 1 : t >= 250 && (e = 0), e
                },
                o = function(t, e) {
                    const i = `jw-breakpoint-${e}`;
                    (0, n.L_)(t, /jw-breakpoint--?\d+/, i)
                }
        },
        4646: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => $t
            });
            var n = {};
            i.r(n), i.d(n, {
                email: () => mt,
                embed: () => bt,
                facebook: () => wt,
                link: () => ft,
                linkedin: () => dt,
                pinterest: () => ut,
                reddit: () => jt,
                tumblr: () => gt,
                twitter: () => ht
            });
            var s = i(8348),
                o = i(1643),
                a = i(328),
                l = i(1261),
                r = i(2799),
                c = i(5004),
                p = i(8165),
                w = i(8268),
                h = i(4697);
            var d = i(974),
                u = i(5882),
                j = i(7191),
                g = i(2957),
                m = i(6234),
                f = i(9888),
                b = i(5646);
            class v {
                constructor(t, e, i) {
                    Object.assign(this, a.ZP), this._model = t, this._api = e, this._playerElement = i, this.localization = t.get("localization"), this.state = "tooltip", this.enabled = !1, this.shown = !1, this.feedShownId = "", this.closeUi = null, this.tooltipUi = null, this.reset()
                }
                setup(t) {
                    this.container = t.createElement("div"), this.container.className = "jw-nextup-container jw-reset";
                    const e = (0, r.az)(((t = "", e = "", i = "", n = "") => `<div class="jw-nextup jw-background-color jw-reset${s.Browser.firefox?" jw-nextup-firefox-pip-fix":""}"><div class="jw-nextup-tooltip jw-reset"><div class="jw-nextup-thumbnail jw-reset"></div><div class="jw-nextup-body jw-reset"><div class="jw-nextup-header jw-reset">${t}</div><div class="jw-nextup-title jw-reset-text" dir="auto">${e}</div><div class="jw-nextup-duration jw-reset">${i}</div></div></div><button type="button" class="jw-icon jw-nextup-close jw-reset" aria-label="${n}"></button></div>`)());
                    e.querySelector(".jw-nextup-close").appendChild((0, j.W)("close")), this.addContent(e), this.closeButton = this.content.querySelector(".jw-nextup-close"), this.closeButton.setAttribute("aria-label", this.localization.close), this.tooltip = this.content.querySelector(".jw-nextup-tooltip");
                    const i = this._model,
                        n = i.player;
                    this.enabled = !1, i.on("change:nextUp", this.onNextUp, this), n.change("duration", this.onDuration, this), n.change("position", this.onElapsed, this), n.change("streamType", this.onStreamType, this), n.change("state", (function(t, e) {
                        "complete" === e && this.toggle(!1)
                    }), this), this.closeUi = (0, b.Z)(this.closeButton, (function() {
                        this.nextUpSticky = !1, this.toggle(!1)
                    }), this), this.tooltipUi = new u.ZP(this.tooltip).on("click", this.click, this)
                }
                loadThumbnail(t) {
                    return this.nextUpImage = new Image, this.nextUpImage.onload = function() {
                        this.nextUpImage.onload = null
                    }.bind(this), this.nextUpImage.src = t, {
                        backgroundImage: `url("${t}")`
                    }
                }
                click() {
                    const {
                        feedShownId: t
                    } = this;
                    this.reset(), this._api.next({
                        feedShownId: t,
                        reason: "interaction"
                    })
                }
                toggle(t, e) {
                    if (this.enabled && ((0, r.og)(this.container, "jw-nextup-sticky", Boolean(this.nextUpSticky)), this.shown !== t)) {
                        this.shown = t, (0, r.og)(this.container, "jw-nextup-container-visible", t), (0, r.og)(this._playerElement, "jw-flag-nextup", t);
                        const i = this._model.get("nextUp");
                        t && i ? (this.feedShownId = (0, m.B)(m.F), this.trigger("nextShown", {
                            mode: i.mode,
                            ui: "nextup",
                            itemsShown: [i],
                            feedData: i.feedData,
                            reason: e,
                            feedShownId: this.feedShownId
                        })) : this.feedShownId = ""
                    }
                }
                setNextUpItem(t) {
                    setTimeout((() => {
                        const {
                            mediaid: e,
                            image: i,
                            title: n,
                            duration: s
                        } = t;
                        if (this.thumbnail = this.content.querySelector(".jw-nextup-thumbnail"), (0, r.og)(this.content, "jw-nextup-thumbnail-visible", Boolean(i)), i || e) {
                            let t;
                            t = e ? `https://cdn.jwplayer.com/v2/media/${e}/poster.jpg?width=120` : i;
                            const n = this.loadThumbnail(t);
                            (0, d.oB)(this.thumbnail, n)
                        }
                        this.header = this.content.querySelector(".jw-nextup-header"), this.header.textContent = (0, r.az)(this.localization.nextUp).textContent, this.title = this.content.querySelector(".jw-nextup-title"), this.title.textContent = n ? (0, r.az)(n).textContent : "", s && (this.duration = this.content.querySelector(".jw-nextup-duration"), this.duration.textContent = "number" == typeof s ? (0, f.timeFormat)(s) : s)
                    }), 500)
                }
                onNextUp(t, e) {
                    this.reset(), e || (e = {
                        showNextUp: !1
                    }), this.enabled = Boolean(e.title || e.image), this.enabled && (e.showNextUp || (this.nextUpSticky = !1, this.toggle(!1)), this.setNextUpItem(e))
                }
                onDuration(t, e) {
                    if (!e) return;
                    const i = t.get("nextupoffset");
                    let n = -10;
                    i && (n = (0, g.U5)(i, e)), n < 0 && (n += e), (0, g.zz)(i) && e - 5 < n && (n = e - 5), this.offset = n
                }
                onElapsed(t, e) {
                    const i = this.nextUpSticky;
                    if (!this.enabled || !1 === i) return;
                    const n = e >= this.offset;
                    n && void 0 === i ? (this.nextUpSticky = n, this.toggle(n, "time")) : !n && i && this.reset()
                }
                onStreamType(t, e) {
                    "VOD" !== e && (this.nextUpSticky = !1, this.toggle(!1))
                }
                element() {
                    return this.container
                }
                addContent(t) {
                    this.content && this.removeContent(), this.content = t, this.container.appendChild(t)
                }
                removeContent() {
                    this.content && (this.container.removeChild(this.content), this.content = null)
                }
                reset() {
                    this.nextUpSticky = void 0, this.toggle(!1)
                }
                destroy() {
                    this.off(), this._model.off(null, null, this), this.closeUi && this.closeUi.destroy(), this.tooltipUi && this.tooltipUi.destroy()
                }
            }
            const y = {
                    link: ({
                               link: t,
                               title: e,
                               logo: i
                           }) => `<a href="${t||""}" class="jw-rightclick-link jw-reset-text" target="_blank" rel="noreferrer" dir="auto">${i}${e||""}</a>`,
                    share: (t, e) => `<button type="button" class="jw-reset-text jw-rightclick-link jw-share-item" dir="auto">${e.sharing.heading}</button>`,
                    pip: (t, e) => `<button type="button" class="jw-reset-text jw-rightclick-link jw-pip-item" dir="auto">${e.pipIcon}</button>`,
                    keyboardShortcuts: (t, e) => `<button type="button" class="jw-reset-text jw-rightclick-link jw-shortcuts-item" dir="auto">${e.shortcuts.keyboardShortcuts}</button>`,
                    button: ({
                                 title: t,
                                 button: e
                             }) => `<button type="button" class="jw-reset-text jw-rightclick-link jw-${e.name}-item" dir="auto">${t}</button>`
                },
                x = (t, e) => {
                    const {
                        items: i = []
                    } = t, n = i.map((t => ((t, e) => {
                        const {
                            featured: i,
                            showLogo: n,
                            type: s
                        } = t;
                        return t.logo = n ? '<span class="jw-rightclick-logo jw-reset"></span>' : "", `<li class="jw-reset jw-rightclick-item ${i?"jw-featured":""}">${y[s](t,e)}</li>`
                    })(t, e)));
                    return `<div class="jw-rightclick jw-reset"><ul class="jw-rightclick-list jw-reset">${n.join("")}</ul></div>`
                };
            var k = i(6601),
                C = i(2268),
                z = i(8518);
            const T = {
                    free: 0,
                    pro: 1,
                    premium: 2,
                    ads: 3,
                    invalid: 4,
                    enterprise: 6,
                    trial: 7,
                    platinum: 8,
                    starter: 9,
                    business: 10,
                    developer: 11
                },
                S = t => {
                    const e = (0, r.az)(t),
                        i = e.querySelector(".jw-rightclick-logo");
                    return i && i.appendChild((0, j.W)("jwplayer-logo")), e
                };
            class M {
                constructor(t) {
                    this.shortcutsTooltip = t
                }
                buildArray() {
                    const t = k.i.split("+")[0],
                        e = this.model,
                        i = e.get("edition"),
                        n = e.get("localization").poweredBy,
                        o = `<span class="jw-reset">JW Player ${t}</span>`,
                        a = {
                            items: [{
                                title: (0, z.t6)(n) ? `${o} ${n}` : `${n} ${o}`,
                                type: "link",
                                featured: !0,
                                showLogo: !0,
                                link: `https://jwplayer.com/learn-more?e=${T[i]}`
                            }]
                        },
                        l = a.items;
                    return this.shortcutsTooltip && l.splice(l.length - 1, 0, {
                        type: "keyboardShortcuts"
                    }), this.pipMenu = !s.OS.mobile && "disabled" !== e.get("pipIcon") && (s.Browser.chrome && !(0, C.yS)() || s.Browser.edge || s.Browser.safari), this.pipMenu && l.splice(l.length - 1, 0, {
                        type: "pip"
                    }), a
                }
                rightClick(t) {
                    if (this.lazySetup(), this.mouseOverContext) return !1;
                    this.hideMenu(), this.showMenu(t), this.addHideMenuHandlers()
                }
                getOffset(t) {
                    const e = (0, r.A8)(this.wrapperElement),
                        i = t.pageX - e.left;
                    let n = t.pageY - e.top;
                    return this.model.get("touchMode") && (n -= 100), {
                        x: i,
                        y: n
                    }
                }
                showMenu(t) {
                    const e = this.getOffset(t);
                    return this.el.style.left = `${e.x}px`, this.el.style.top = `${e.y}px`, this.outCount = 0, (0, r.cn)(this.playerContainer, "jw-flag-rightclick-open"), (0, r.cn)(this.el, "jw-open"), clearTimeout(this._menuTimeout), this._menuTimeout = setTimeout((() => this.hideMenu()), 3e3), !1
                }
                hideMenu(t) {
                    t && this.el && this.el.contains(t.target) || ((0, r.IV)(this.playerContainer, "jw-flag-rightclick-open"), (0, r.IV)(this.el, "jw-open"))
                }
                lazySetup() {
                    const t = x(this.buildArray(), this.model.get("localization"));
                    if (this.el) {
                        if (this.html !== t) {
                            this.html = t;
                            const e = S(t);
                            (0, r.EU)(this.el);
                            for (let t = e.childNodes.length; t--;) this.el.appendChild(e.firstChild)
                        }
                    } else this.html = t, this.el = S(this.html), this.wrapperElement.appendChild(this.el), this.hideMenuHandler = t => {
                        (0, u.dO)(t) || this.hideMenu(t)
                    }, this.overHandler = () => {
                        this.mouseOverContext = !0
                    }, this.outHandler = t => {
                        this.mouseOverContext = !1, t.relatedTarget && !this.el.contains(t.relatedTarget) && ++this.outCount > 1 && this.hideMenu()
                    }, this.pipHandler = () => {
                        this.model.set("pip", !this.model.get("pip"))
                    }, this.shortcutsTooltipHandler = () => {
                        this.mouseOverContext = !1, this.hideMenu(), this.shortcutsTooltip.open()
                    }
                }
                setup(t, e, i) {
                    this.wrapperElement = i, this.model = t, this.mouseOverContext = !1, this.playerContainer = e, this.ui = new u.ZP(i).on("longPress", this.rightClick, this)
                }
                addHideMenuHandlers() {
                    this.removeHideMenuHandlers(), this.wrapperElement.addEventListener("touchstart", this.hideMenuHandler), document.addEventListener("touchstart", this.hideMenuHandler), s.OS.mobile || (this.wrapperElement.addEventListener("click", this.hideMenuHandler), document.addEventListener("click", this.hideMenuHandler), this.el.addEventListener("mouseover", this.overHandler), this.el.addEventListener("mouseout", this.outHandler)), this.pipMenu && this.el.querySelector(".jw-pip-item").addEventListener("click", this.pipHandler), this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").addEventListener("click", this.shortcutsTooltipHandler)
                }
                removeHideMenuHandlers() {
                    this.wrapperElement && (this.wrapperElement.removeEventListener("click", this.hideMenuHandler), this.wrapperElement.removeEventListener("touchstart", this.hideMenuHandler)), this.el && (this.el.removeEventListener("mouseover", this.overHandler), this.el.removeEventListener("mouseout", this.outHandler), this.pipMenu && this.el.querySelector(".jw-pip-item").removeEventListener("click", this.pipHandler), this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").removeEventListener("click", this.shortcutsTooltipHandler)), document.removeEventListener("click", this.hideMenuHandler), document.removeEventListener("touchstart", this.hideMenuHandler)
                }
                destroy() {
                    clearTimeout(this._menuTimeout), this.removeHideMenuHandlers(), this.el && (this.hideMenu(), this.hideMenuHandler = null, this.el = null), this.wrapperElement && (this.wrapperElement.oncontextmenu = null, this.wrapperElement = null), this.model && (this.model = null), this.ui && (this.ui.destroy(), this.ui = null)
                }
            }
            class B extends M {
                buildArray() {
                    const {
                        model: t
                    } = this, e = super.buildArray(), {
                        abouttext: i,
                        videoInfo: n
                    } = t.get("localization"), {
                        items: s
                    } = e;
                    if (i) {
                        let e, n;
                        for (let t = 0; t < s.length; t++)
                            if (s[t].featured) {
                                n = s[t], e = t;
                                break
                            } if (n) {
                            n.showLogo = !1;
                            const o = {
                                title: i,
                                type: "link",
                                link: t.get("aboutlink") || n.link
                            };
                            s[e] = o
                        }
                    }
                    return this.shareHandler && s.unshift({
                        type: "share"
                    }), e.items.splice(0, 0, {
                        type: "button",
                        title: n,
                        button: {
                            name: "stats"
                        }
                    }), e
                }
                enableSharing(t) {
                    this.shareHandler = () => {
                        this.mouseOverContext = !1, this.hideMenu(), t()
                    }
                }
                addHideMenuHandlers() {
                    super.addHideMenuHandlers();
                    const t = this.el.querySelector(".jw-share-item");
                    t && t.addEventListener("click", this.shareHandler);
                    const e = this.el.querySelector(".jw-stats-item");
                    e && (this.statsHandler = () => {
                        const {
                            model: t
                        } = this;
                        this.mouseOverContext = !1, this.hideMenu(), t.set("displayStats", !t.get("displayStats"))
                    }, e.addEventListener("click", this.statsHandler))
                }
                removeHideMenuHandlers() {
                    if (super.removeHideMenuHandlers(), !this.el) return;
                    const t = this.el.querySelector(".jw-share-item");
                    t && t.removeEventListener("click", this.shareHandler);
                    const e = this.el.querySelector(".jw-stats-item");
                    e && e.removeEventListener("click", this.statsHandler)
                }
            }
            var E = i(7284),
                A = i(3477),
                L = i(3163),
                $ = i(1831),
                I = i(2810),
                H = i(6436);
            const Z = (t, e, i, n) => {
                    var s;
                    if (!t || "Auto" !== t[0].label || null == i || null == (s = i.items) || !s.length) return;
                    const o = i.items[0].el.querySelector(".jw-auto-label"),
                        a = t[e.index] || {
                            label: ""
                        };
                    o.textContent = n ? "" : a.label
                },
                V = t => {
                    const e = t.closeButton,
                        i = t.el.querySelector(".jw-settings-topbar");
                    return new u.ZP(i).on("keydown", (function(i) {
                        const {
                            sourceEvent: n,
                            target: s
                        } = i, o = (0, r.AH)(s), a = (0, r.i3)(s), l = e => {
                            a ? e || a.focus() : t.close(i)
                        };
                        switch ((0, I.ku)(n.key)) {
                            case "Esc":
                                t.close(i);
                                break;
                            case "Left":
                                l();
                                break;
                            case "Right":
                                o && e.element() && s !== e.element() && o.focus();
                                break;
                            case "Tab":
                                n.shiftKey && l(!0);
                                break;
                            case "Up":
                            case "Down":
                            case "Enter":
                                (() => {
                                    var e;
                                    const n = s.getAttribute("name");
                                    let o = t.children[n];
                                    !o && n && t.backButtonTarget && (o = t.backButtonTarget.children[n]), null != (e = o) && e.open && o.open(i)
                                })()
                        }
                        if (n.stopPropagation(), /13|32|37|38|39|40/.test(n.keyCode)) return n.preventDefault(), !1
                    }))
                };
            class P extends E.Z {
                constructor(t, e, i, n) {
                    super(t.id, "settings", n.settings, null, n), this.api = t, this.model = e, this.localization = n, this.controlbar = i, this.closeButton = ((t, e, i) => {
                        const n = (0, p.Z)("jw-settings-close", e, i.close, [(0, j.W)("close")]);
                        return n.show(), n.ui.on("keydown", (t => {
                            const i = t.sourceEvent,
                                n = (0, I.ku)(i.key);
                            ("Enter" === n || "Right" === n || "Tab" === n && !i.shiftKey) && e(t)
                        }), void 0), t.appendChild(n.element()), n
                    })(this.el.querySelector(`.jw-${this.name}-topbar-buttons`), this.close, n), this.backButtonTarget = null, this.defaultChild = null, this.topbar = V(this), this.onDocumentClick = this.onDocumentClick.bind(this), this.addEventListeners()
                }
                setupMenu(t, e, i, n, s, o) {
                    var a, l;
                    if (!i || i.length <= 1) return void this.removeMenu(t);
                    let r = this.children[t];
                    r || (r = new E.Z(this.api.id, t, e, this, this.localization)), r.setMenuItems(r.createItems(i, n, o), s);
                    const c = null == (a = r) || null == (l = a.categoryButton) || null == l.element ? void 0 : l.element();
                    this.buttonContainer.firstChild === c && (this.defaultChild = r)
                }
                onLevels(t, e) {
                    const i = {
                        defaultText: this.localization.auto
                    };
                    this.setupMenu("quality", this.localization.hd, e, (t => this.api.setCurrentQuality(t)), t.get("currentLevel") || 0, i)
                }
                onCurrentLevel(t, e) {
                    const {
                        children: i
                    } = this, n = i.quality, s = t.get("visualQuality");
                    s && n && Z(t.get("levels"), s.level, n, e), n.items[e].active || (0, I.dt)(n, e)
                }
                onVisualQuality(t, e) {
                    const i = this.children.quality;
                    e && i && Z(t.get("levels"), e.level, i, t.get("currentLevel"))
                }
                onAudioTracks(t, e) {
                    this.setupMenu("audioTracks", this.localization.audioTracks, e, (t => this.api.setCurrentAudioTrack(t)), t.get("currentAudioTrack"))
                }
                onAudioTrackIndex(t, e) {
                    this.children.audioTracks && (0, I.dt)(this.children.audioTracks, e)
                }
                onCaptionsList(t, e) {
                    const i = {
                            defaultText: this.localization.off
                        },
                        n = t.get("captionsIndex");
                    this.setupMenu("captions", this.localization.cc, e, (t => this.api.setCurrentCaptions(t)), n, i);
                    const s = this.children.captions;
                    if (!s || s.children.captionsSettings) return;
                    s.topbar = s.topbar || s.createTopbar(), (0, r.EU)(s.topbar);
                    const o = this.localization.captionsStyles,
                        a = new E.Z(this.api.id, "captionsSettings", o.subtitleSettings, s, this.localization),
                        l = a.open;
                    a.open = t => {
                        const e = a.visible;
                        l.call(a, t), e || this.trigger("captionStylesOpened")
                    };
                    const c = a.destroy;
                    a.destroy = t => {
                        s.topbar.parentNode.removeChild(s.topbar), s.topbar = null, s.topbarUI.destroy(), c.call(a, t)
                    };
                    const p = new A.s(this.localization.settings, a.open);
                    s.topbar.appendChild(p.el);
                    const w = (e, i) => {
                            const n = t.get("captions"),
                                s = e.name,
                                o = e.values[i],
                                a = Object.assign({}, n);
                            a[s] = o, this.model.set("captions", a)
                        },
                        h = t.get("captions"),
                        d = t => {
                            const e = new A.s(this.localization.reset, (() => {
                                this.model.set("captions", Object.assign({}, $.R)), d(!0)
                            }));
                            e.el.classList.add("jw-settings-reset");
                            const i = [];
                            (0, I.JU)(o).forEach((e => {
                                !t && h && h[e.name] ? e.val = h[e.name] : e.val = e.defaultVal;
                                const n = e.values.indexOf(e.val);
                                e.currentSelection = e.options[n];
                                const s = new E.Z(this.api.id, e.name, e.label, a, this.localization),
                                    o = new A.s(e, s.open, L.v2);
                                o.el.setAttribute("aria-controls", `jw-${this.api.id}-settings-submenu-${e.name}`), s.buttonContainer = o;
                                const l = s.createItems(e.options, (t => {
                                    const i = o.el.querySelector(".jw-settings-content-item-value");
                                    w(e, t), i.innerText = e.options[t]
                                }), null);
                                s.setMenuItems(l, e.values.indexOf(e.val) || 0), i.push(o)
                            })), i.push(e), a.setMenuItems(i)
                        };
                    d()
                }
                onPlaylistItem() {
                    this.removeMenu("captions"), this.removeMenu("audioTracks"), this.removeMenu("quality"), this.controlbar.elements.captionsButton.hide(), this.visible && this.close()
                }
                onCaptionsIndex(t, e) {
                    const i = this.children.captions;
                    i && (0, I.dt)(i, e), this.controlbar.toggleCaptionsButtonState(Boolean(e))
                }
                onPlaybackRates(t, e) {
                    !e && t && (e = t.get("playbackRates"));
                    const {
                        localization: i,
                        children: n
                    } = this;
                    if (!(t.get("supportsPlaybackRate") && "LIVE" !== t.get("streamType") && t.get("playbackRateControls"))) return void(n.playbackRates && this.removeMenu("playbackRates"));
                    const s = e.indexOf(t.get("playbackRate")),
                        o = {
                            tooltipText: i.playbackRates
                        };
                    this.setupMenu("playbackRates", this.localization.playbackRates, e, (t => this.api.setPlaybackRate(t)), s, o)
                }
                onPlaybackRate(t, e) {
                    const i = t.get("playbackRates");
                    let n = -1;
                    i && (n = i.indexOf(e)), (0, I.dt)(this.children.playbackRates, n)
                }
                onPlaybackRateControls(t) {
                    this.onPlaybackRates(t)
                }
                onCastActive(t, e, i) {
                    e !== i && (e ? (this.removeMenu("audioTracks"), this.removeMenu("quality"), this.removeMenu("playbackRates"), this.children.captions && this.children.captions.removeMenu("captionsSettings")) : (this.onAudioTracks(t, t.get("audioTracks")), this.onLevels(t, t.get("levels")), this.onPlaybackRates(t, t.get("playbackRates")), this.onCaptionsList(t, t.get("captionsList"))))
                }
                onChangeStreamType() {
                    this.onPlaybackRates(this.model)
                }
                onDocumentClick(t) {
                    /jw-(settings|video|nextup-close|sharing-link|share-item)/.test(t.target.className) || this.close()
                }
                addEventListeners() {
                    const {
                        updateControlbarButtons: t,
                        model: e
                    } = this;
                    this.on("menuAppended menuRemoved", t, this), e.change("levels", this.onLevels, this), e.on("change:currentLevel", this.onCurrentLevel, this), e.on("change:visualQuality", this.onVisualQuality, this), e.change("audioTracks", this.onAudioTracks, this), e.on("change:currentAudioTrack", this.onAudioTrackIndex, this), e.change("captionsList", this.onCaptionsList, this), e.on("change:playlistItem", this.onPlaylistItem, this), e.change("captionsIndex", this.onCaptionsIndex, this), e.change("playbackRates", this.onPlaybackRates, this), e.change("playbackRate", this.onPlaybackRate, this), e.on("change:playbackRateControls", this.onPlaybackRateControls, this), e.on("change:castActive", this.onCastActive, this), e.on("change:streamType", this.onChangeStreamType, this)
                }
                open(t) {
                    const e = (0, H.i)(this.model.get("containerWidth"));
                    if (this.visible) return;
                    e < 2 && "LIVE" !== this.model.get("streamType") && (this.mediaStateWhenOpened = this.model.get("state"), this.api.pause());
                    const i = this.controlbar.elements.settingsButton.element();
                    i && i.setAttribute("aria-expanded", !0), this.el.parentNode.classList.add("jw-settings-open"), this.trigger("visibility", {
                        visible: !0,
                        evt: t
                    }), document.addEventListener("click", this.onDocumentClick), this.el.setAttribute("aria-expanded", "true"), this.visible = !0
                }
                close(t) {
                    var e;
                    const i = (0, I.ku)(null == t || null == (e = t.sourceEvent) ? void 0 : e.key),
                        n = this.controlbar.elements.settingsButton.element(),
                        s = (0, H.i)(this.model.get("containerWidth"));
                    let a;
                    switch (n && n.setAttribute("aria-expanded", !1), s < 2 && (this.mediaStateWhenOpened !== o.r0 && this.mediaStateWhenOpened !== o.Kb || this.api.play()), this.el.setAttribute("aria-expanded", "false"), this.el.parentNode.classList.remove("jw-settings-open"), this.trigger("visibility", {
                        visible: !1,
                        evt: t
                    }), document.removeEventListener("click", this.onDocumentClick), this.visible = !1, this.openMenus.length && this.closeChildren(), i) {
                        case "Right":
                            a = (0, r.AH)(n);
                            break;
                        case "Left":
                            a = (0, r.i3)(n);
                            break;
                        case "Tab":
                            if (t.shiftKey) {
                                a = (0, r.i3)(n);
                                break
                            }
                        case "Enter":
                        case "Esc":
                            a = n
                    }
                    a && a.focus({
                        preventScroll: !event
                    })
                }
                updateControlbarButtons(t) {
                    const {
                        children: e,
                        controlbar: i,
                        model: n
                    } = this, s = Boolean(e.quality) || Boolean(e.playbackRates) || Boolean(e.audioTracks) || Object.keys(e).length > 1;
                    i.elements.settingsButton.toggle(s), e.captions && i.toggleCaptionsButtonState(Boolean(n.get("captionsIndex")));
                    const o = i.elements[`${t}Button`];
                    if (o) {
                        const i = Boolean(e[t]);
                        o.toggle(i)
                    } else if (s) {
                        const t = Object.keys(this.children);
                        for (let e = 0; e < t.length; e++) {
                            var a;
                            const i = this.children[t[e]],
                                n = null == i || null == (a = i.categoryButton) || null == a.element ? void 0 : a.element();
                            this.buttonContainer.firstChild === n && (this.defaultChild = i)
                        }
                    }
                }
                destroy() {
                    I.MR.call(this), document.removeEventListener("click", this.onDocumentClick)
                }
            }
            const _ = P;
            var O = i(4225),
                N = i(6391);

            function R(t, e, i, n) {
                let s = !1;
                const o = i.get("localization").shortcuts,
                    a = (0, r.az)(((t, e, i) => `<div class="jw-shortcuts-tooltip jw-modal jw-reset" title="${i}"><span class="jw-hidden" id="jw-${t}-shortcuts-tooltip-explanation">Press shift question mark to access a list of keyboard shortcuts</span><div class="jw-reset jw-shortcuts-container"><div class="jw-reset jw-shortcuts-header"><span class="jw-reset jw-shortcuts-title">${i}</span><button role="switch" aria-label="${i}" class="jw-reset jw-switch"><span class="jw-reset jw-switch-knob"></span><span class="jw-reset-text jw-switch-enabled">Enabled</span><span class="jw-reset-text jw-switch-disabled">Disabled</span></button></div><div class="jw-reset jw-shortcuts-tooltip-list"><div class="jw-shortcuts-tooltip-descriptions jw-reset">${e.map((t=>`<div class="jw-shortcuts-row jw-reset"><span class="jw-shortcuts-description jw-reset">${t.description}</span><span class="jw-shortcuts-key jw-reset">${t.key}</span></div>`)).join("")}</div></div></div></div>`)(e.id, function(t) {
                        const {
                            playPause: e,
                            volumeToggle: i,
                            fullscreenToggle: n,
                            seekPercent: s,
                            increaseVolume: o,
                            decreaseVolume: a,
                            seekForward: l,
                            seekBackward: r,
                            spacebar: c,
                            captionsToggle: p
                        } = t;
                        return [{
                            key: c,
                            description: e
                        }, {
                            key: "â†‘",
                            description: o
                        }, {
                            key: "â†“",
                            description: a
                        }, {
                            key: "â†’",
                            description: l
                        }, {
                            key: "â†",
                            description: r
                        }, {
                            key: "c",
                            description: p
                        }, {
                            key: "f",
                            description: n
                        }, {
                            key: "m",
                            description: i
                        }, {
                            key: "0-9",
                            description: s
                        }]
                    }(o), o.keyboardShortcuts)),
                    l = new u.ZP(a.querySelector(".jw-switch"));
                let c;
                const w = () => {
                    (0, r.IV)(a, "jw-open"), document.removeEventListener("click", c), s = !1, n(!1)
                };
                c = t => {
                    const e = t.target;
                    /jw-shortcuts|jw-switch/.test(e.className) || w()
                };
                const h = () => {
                        l.el.setAttribute("aria-checked", i.get("enableShortcuts")), (0, r.cn)(a, "jw-open"), a.querySelector(".jw-shortcuts-close").focus(), document.addEventListener("click", c), s = !0, n(!0)
                    },
                    d = t => {
                        const e = t.currentTarget,
                            n = "true" !== e.getAttribute("aria-checked");
                        e.setAttribute("aria-checked", n.toString()), i.set("enableShortcuts", n)
                    };
                return (() => {
                    const e = (0, p.Z)("jw-shortcuts-close", w, i.get("localization").close, [(0, j.W)("close")]);
                    (0, r.SH)(a, e.element()), e.show(), t.appendChild(a), l.on("click", d)
                })(), {
                    el: a,
                    open: h,
                    close: w,
                    destroy: () => {
                        w(), l.destroy()
                    },
                    toggleVisibility: () => {
                        s ? w() : h()
                    }
                }
            }
            class q extends a.ZP {
                constructor(t, e, i) {
                    super(), this.element = (0, r.az)(((t, e) => `<div class="jw-float-bar jw-reset">\n            <div class="jw-float-bar-title" aria-label="${e}" >${e}</div>\n            <div class="jw-float-bar-icon jw-float-icon jw-icon jw-button-color jw-reset" aria-label="${t}" tabindex="0">\n            </div>\n        </div>`)(e, i));
                    const n = this.element.querySelector(".jw-float-bar-icon");
                    n.appendChild((0, j.W)("floating-close")), this.ui = (0, b.Z)(n, (() => {
                        this.trigger(o.xf)
                    })), this.title = this.element.querySelector(".jw-float-bar-title"), t.appendChild(this.element)
                }
                destroy() {
                    this.element && (this.ui.destroy(), this.element.parentNode.removeChild(this.element), this.element = null), this.off()
                }
                setTitle(t) {
                    t ? (this.title.innerText = t, this.title.setAttribute("aria-label", t)) : (this.title.innerHTML = "&nbsp;", this.title.setAttribute("aria-label", ""))
                }
            }
            i(9725), i(1334);
            const U = s.OS.mobile ? 4e3 : 2e3,
                F = [27];
            O.Z.cloneIcon = j.W, N.Z.forEach((t => {
                if (t.getState() === o.Vy) {
                    const e = t.getContainer().querySelector(".jw-error-msg .jw-icon");
                    e && !e.hasChildNodes() && e.appendChild(O.Z.cloneIcon("error"))
                }
            }));
            class D extends a.ZP {
                constructor(t, e) {
                    super(), this.activeTimeout = -1, this.inactiveTime = 0, this.context = t, this.controlbar = null, this.displayContainer = null, this.backdrop = null, this.enabled = !0, this.instreamState = null, this.keydownCallback = null, this.keyupCallback = null, this.blurCallback = null, this.mute = null, this.nextUpToolTip = null, this.playerContainer = e, this.wrapperElement = e.querySelector(".jw-wrapper"), this.rightClickMenu = null, this.settingsMenu = null, this.shortcutsTooltip = null, this.showing = !1, this.muteChangeCallback = null, this.unmuteCallback = null, this.logo = null, this.div = null, this.dimensions = {}, this.userInactiveTimeout = () => {
                        const t = this.inactiveTime - (0, c.z)();
                        this.inactiveTime && t > 16 ? this.activeTimeout = setTimeout(this.userInactiveTimeout, t) : this.playerContainer.querySelector(".jw-tab-focus") ? this.resetActiveTimeout() : this.userInactive()
                    }
                }
                resetActiveTimeout() {
                    clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.inactiveTime = 0
                }
                enable(t, e) {
                    const i = this.context.createElement("div");
                    i.className = "jw-controls jw-reset", this.div = i;
                    const n = this.context.createElement("div");
                    n.className = "jw-controls-backdrop jw-reset", this.backdrop = n, this.logo = this.playerContainer.querySelector(".jw-logo");
                    const a = e.get("touchMode");
                    if (this.focusPlayerElement = () => {
                        e.get("isFloating") ? this.wrapperElement.querySelector("video").focus({
                            preventScroll: !0
                        }) : this.playerContainer.focus({
                            preventScroll: !0
                        })
                    }, !this.displayContainer) {
                        const i = new h.Z(e, t);
                        i.buttons.display.on("click enter", (() => {
                            this.trigger(o.cy), this.userActive(1e3), t.playToggle({
                                reason: "interaction"
                            }), this.focusPlayerElement()
                        })), this.div.appendChild(i.element()), this.displayContainer = i
                    }
                    s.OS.mobile || (this.shortcutsTooltip = new R(this.wrapperElement, t, e, (t => {
                        t || this.focusPlayerElement()
                    }))), this.rightClickMenu = new B(this.shortcutsTooltip), a && (0, r.cn)(this.playerContainer, "jw-flag-touch"), this.rightClickMenu.setup(e, this.playerContainer, this.wrapperElement);
                    e.get("floating") && this.setupFloating(t, e);
                    const c = this.controlbar = new w.Z(t, e, this.playerContainer.querySelector(".jw-hidden-accessibility"));
                    c.on(o.xf, (() => {
                        this.off("userInactive", this.focusPlayerElement, this), this.once("userInactive", this.focusPlayerElement, this), this.userActive()
                    })), c.on("nextShown", (function(t) {
                        this.trigger("nextShown", t)
                    }), this);
                    const d = i => {
                        const n = (0, l.v)(e.get("volume") + i, 0, 100);
                        t.setVolume(n)
                    };
                    if (c.on("adjustVolume", d, this), e.get("nextUpDisplay") && !c.nextUpToolTip) {
                        const i = new v(e, t, this.playerContainer);
                        i.on("all", this.trigger, this), i.setup(this.context), c.nextUpToolTip = i, this.div.appendChild(i.element())
                    }
                    this.div.appendChild(c.element());
                    const u = e.get("localization"),
                        g = this.settingsMenu = new _(t, e.player, this.controlbar, u);
                    let m = null;
                    g.on("menuVisibility", (({
                                                 visible: i,
                                                 evt: n
                                             }) => {
                        var s;
                        const a = e.get("state"),
                            l = {
                                reason: "settingsInteraction"
                            },
                            r = this.controlbar.elements.settingsButton,
                            c = "keydown" === ((null == n || null == (s = n.sourceEvent) ? void 0 : s.type) || (null == n ? void 0 : n.type) || ""),
                            p = i || c ? 0 : U;
                        this.userActive(p), (0, H.i)(e.get("containerWidth")) < 2 && (i && a === o.r0 ? t.pause(l) : i || a !== o._5 || m !== o.r0 || t.play(l)), m = a, !i && c && r ? r.element().focus() : n && this.focusPlayerElement()
                    })), g.on("captionStylesOpened", (() => this.trigger("captionStylesOpened"))), c.on("settingsInteraction", ((t, e, i) => {
                        if (e) return g.defaultChild.toggle(i, !0);
                        g.children[t].toggle(i)
                    })), s.OS.mobile ? this.div.appendChild(g.el) : (this.playerContainer.setAttribute("aria-describedby", `jw-${t.id}-shortcuts-tooltip-explanation`), this.div.insertBefore(g.el, c.element()));
                    const f = e => {
                        if (e.get("autostartMuted")) {
                            const i = () => this.unmuteAutoplay(t, e),
                                n = (t, e) => {
                                    e || i()
                                };
                            s.OS.mobile && (this.mute = (0, p.Z)("jw-autostart-mute jw-off", i, e.get("localization").unmute, [(0, j.W)("volume-0")]), this.mute.show(), this.div.appendChild(this.mute.element())), c.renderVolume(!0, e.get("volume")), (0, r.cn)(this.playerContainer, "jw-flag-autostart"), e.on("change:autostartFailed", i, this), e.on("change:autostartMuted change:mute", n, this), this.muteChangeCallback = n, this.unmuteCallback = i
                        }
                    };
                    e.once("change:autostartMuted", f), f(e);
                    const b = i => {
                            let n = 0,
                                s = e.get("duration");
                            const o = e.get("position");
                            if ("DVR" === e.get("streamType")) {
                                const t = e.get("dvrSeekLimit");
                                n = s, s = Math.max(o, -t)
                            }
                            const a = (0, l.v)(o + i, n, s);
                            t.seek(a, {
                                reason: "interaction"
                            })
                        },
                        y = i => {
                            if (i.ctrlKey || i.metaKey) return !0;
                            const n = !this.settingsMenu || !this.settingsMenu.visible,
                                s = !0 === e.get("enableShortcuts"),
                                o = this.instreamState;
                            if (s || -1 !== F.indexOf(i.keyCode)) {
                                switch (i.keyCode) {
                                    case 27:
                                        if (e.get("fullscreen")) t.setFullscreen(!1), this.playerContainer.blur(), this.userInactive();
                                        else {
                                            const e = t.getPlugin("related");
                                            e && e.close({
                                                type: "escape"
                                            })
                                        }
                                        this.rightClickMenu.el && this.rightClickMenu.hideMenuHandler(), e.get("displayStats") && e.set("displayStats", !1), this.shortcutsTooltip && this.shortcutsTooltip.close();
                                        break;
                                    case 13:
                                    case 32:
                                        if (document.activeElement.classList.contains("jw-switch") && 13 === i.keyCode) return !0;
                                        t.playToggle({
                                            reason: "interaction"
                                        });
                                        break;
                                    case 37:
                                        !o && n && b(-5);
                                        break;
                                    case 39:
                                        !o && n && b(5);
                                        break;
                                    case 38:
                                        n && d(10);
                                        break;
                                    case 40:
                                        n && d(-10);
                                        break;
                                    case 67: {
                                        const e = t.getCaptionsList().length;
                                        if (e) {
                                            const i = (t.getCurrentCaptions() + 1) % e;
                                            t.setCurrentCaptions(i)
                                        }
                                        break
                                    }
                                    case 77:
                                        t.setMute();
                                        break;
                                    case 70:
                                        t.setFullscreen();
                                        break;
                                    case 191:
                                        this.shortcutsTooltip && this.shortcutsTooltip.toggleVisibility();
                                        break;
                                    default:
                                        if (i.keyCode >= 48 && i.keyCode <= 59) {
                                            const n = (i.keyCode - 48) / 10 * e.get("duration");
                                            t.seek(n, {
                                                reason: "interaction"
                                            })
                                        }
                                }
                                return /13|32|37|38|39|40/.test(i.keyCode) ? (i.preventDefault(), !1) : void 0
                            }
                        };
                    this.playerContainer.addEventListener("keydown", y), this.keydownCallback = y;
                    const x = t => {
                        switch (t.keyCode) {
                            case 9: {
                                const e = this.playerContainer.contains(t.target) ? 0 : U;
                                this.userActive(e);
                                break
                            }
                            case 32:
                                t.preventDefault()
                        }
                    };
                    this.playerContainer.addEventListener("keyup", x), this.keyupCallback = x;
                    const k = t => {
                        this.off("userInactive", this.focusPlayerElement, this);
                        const e = t.relatedTarget || document.querySelector(":focus");
                        if (!e) return;
                        this.playerContainer.contains(e) || this.userInactive()
                    };
                    this.playerContainer.addEventListener("blur", k, !0), this.blurCallback = k;
                    const C = () => {
                        this.playerContainer.getAttribute("aria-describedby") === `jw-${t.id}-shortcuts-tooltip-explanation` && this.playerContainer.removeAttribute("aria-describedby"), this.playerContainer.removeEventListener("blur", C, !0)
                    };
                    this.shortcutsTooltip && (this.playerContainer.addEventListener("blur", C, !0), this.onRemoveShortcutsDescription = C), this.userActive(), this.addControls(), this.addBackdrop(), e.set("controlsEnabled", !0)
                }
                addControls() {
                    this.wrapperElement.appendChild(this.div)
                }
                disable(t) {
                    const {
                        nextUpToolTip: e,
                        settingsMenu: i,
                        controlbar: n,
                        rightClickMenu: s,
                        shortcutsTooltip: o,
                        playerContainer: a,
                        div: l
                    } = this;
                    clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.off(), t.off(null, null, this), t.set("controlsEnabled", !1), l.parentNode && ((0, r.IV)(a, "jw-flag-touch"), l.parentNode.removeChild(l)), n && n.destroy(), s && s.destroy(), this.keydownCallback && a.removeEventListener("keydown", this.keydownCallback), this.keyupCallback && a.removeEventListener("keyup", this.keyupCallback), this.blurCallback && a.removeEventListener("blur", this.blurCallback), this.onRemoveShortcutsDescription && a.removeEventListener("blur", this.onRemoveShortcutsDescription), this.displayContainer && this.displayContainer.destroy(), e && e.destroy(), i && i.destroy(), t.get("displayStats") && t.set("displayStats", !1), o && o.destroy(), this.removeBackdrop()
                }
                controlbarHeight() {
                    return this.dimensions.cbHeight || (this.dimensions.cbHeight = this.controlbar.element().clientHeight), this.dimensions.cbHeight
                }
                element() {
                    return this.div
                }
                resize() {
                    this.dimensions = {}
                }
                unmuteAutoplay(t, e) {
                    const i = !e.get("autostartFailed");
                    let n = e.get("mute");
                    i ? n = !1 : e.set("playOnViewable", !1), this.muteChangeCallback && (e.off("change:autostartMuted change:mute", this.muteChangeCallback), this.muteChangeCallback = null), this.unmuteCallback && (e.off("change:autostartFailed", this.unmuteCallback), this.unmuteCallback = null), e.set("autostartFailed", void 0), e.set("autostartMuted", void 0), t.setMute(n), this.controlbar.renderVolume(n, e.get("volume")), this.mute && this.mute.hide(), (0, r.IV)(this.playerContainer, "jw-flag-autostart"), this.userActive()
                }
                mouseMove(t) {
                    var e, i, n, s;
                    const o = this.controlbar.element().contains(t.target),
                        a = null == this || null == (e = this.controlbar) || null == (i = e.nextUpToolTip) || null == i.element || null == (n = i.element()) ? void 0 : n.contains(t.target),
                        l = null == (s = this.logo) || null == s.contains ? void 0 : s.contains(t.target),
                        r = o || a || l ? 0 : U;
                    this.userActive(r)
                }
                userActive(t = U) {
                    t > 0 ? (this.inactiveTime = (0, c.z)() + t, -1 === this.activeTimeout && (this.activeTimeout = setTimeout(this.userInactiveTimeout, t))) : this.resetActiveTimeout(), this.showing || ((0, r.IV)(this.playerContainer, "jw-flag-user-inactive"), this.showing = !0, this.trigger("userActive"))
                }
                userInactive() {
                    clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.settingsMenu.visible || (this.inactiveTime = 0, this.showing = !1, (0, r.cn)(this.playerContainer, "jw-flag-user-inactive"), this.trigger("userInactive"))
                }
                addBackdrop() {
                    const t = this.instreamState ? this.div : this.wrapperElement.querySelector(".jw-captions");
                    this.wrapperElement.insertBefore(this.backdrop, t)
                }
                removeBackdrop() {
                    const t = this.backdrop.parentNode;
                    t && t.removeChild(this.backdrop)
                }
                setupInstream() {
                    this.instreamState = !0, this.userActive(), this.addBackdrop(), this.settingsMenu && this.settingsMenu.close(), (0, r.IV)(this.playerContainer, "jw-flag-autostart"), this.controlbar.elements.time.element().setAttribute("tabindex", "-1")
                }
                destroyInstream(t) {
                    this.instreamState = null, this.addBackdrop(), t.get("autostartMuted") && (0, r.cn)(this.playerContainer, "jw-flag-autostart"), this.controlbar.elements.time.element().setAttribute("tabindex", "0")
                }
                setupFloating(t, e) {
                    const i = e.get("localization"),
                        n = e.get("advertising"),
                        s = e.get("floating"),
                        a = () => this.trigger("dismissFloating", {
                            doNotForward: true
                        }),
                        l = () => t.remove(),
                        c = () => {
                            const t = e.get("playlistItem").title;
                            return s.showTitle ? this.instreamState ? null != i && null != (n = i.advertising) && n.displayHeading ? i.advertising.displayHeading : " " : t : " ";
                            var n
                        },
                        p = new q(this.wrapperElement, i.close, c());
                    null != n && n.outstream && null != n && n.dismissible ? p.on(o.xf, l) : p.on(o.xf, a);
                    s && !1 !== s.dismissible && (0, r.cn)(this.playerContainer, "jw-floating-dismissible"), e.on("change:playlistItem", (() => {
                        p.setTitle(c())
                    }), this), e.on("instreamMode", (() => {
                        p.setTitle(c())
                    }), this)
                }
            }
            var W = i(8711),
                K = i.n(W),
                Y = i(1983),
                X = i.n(Y),
                G = i(1277),
                J = i.n(G),
                Q = i(7928),
                tt = i.n(Q),
                et = i(5484),
                it = i.n(et),
                nt = i(6598),
                st = i.n(nt),
                ot = i(8053),
                at = i.n(ot),
                lt = i(1666),
                rt = i.n(lt),
                ct = i(4375),
                pt = i.n(ct);
            const wt = {
                    label: "facebook",
                    src: "http://www.facebook.com/sharer/sharer.php?u=[URL]",
                    svg: K(),
                    jwsource: "fb"
                },
                ht = {
                    label: "twitter",
                    src: "http://twitter.com/intent/tweet?url=[URL]",
                    svg: st(),
                    jwsource: "twi"
                },
                dt = {
                    label: "linkedin",
                    src: "https://www.linkedin.com/cws/share?url=[URL]",
                    svg: X(),
                    jwsource: "lkn"
                },
                ut = {
                    label: "pinterest",
                    src: "http://pinterest.com/pin/create/button/?url=[URL]",
                    svg: J(),
                    jwsource: "pin"
                },
                jt = {
                    label: "reddit",
                    src: "http://www.reddit.com/submit?url=[URL]",
                    svg: tt(),
                    jwsource: "rdt"
                },
                gt = {
                    label: "tumblr",
                    src: "http://tumblr.com/widgets/share/tool?canonicalUrl=[URL]",
                    svg: it(),
                    jwsource: "tbr"
                },
                mt = {
                    label: "email",
                    src: "mailto:?body=[URL]",
                    svg: at(),
                    jwsource: "em"
                },
                ft = {
                    label: "link",
                    svg: rt(),
                    jwsource: "cl"
                },
                bt = {
                    label: "embed",
                    svg: pt(),
                    jwsource: "ceb"
                };
            var vt = i(549),
                yt = i.n(vt),
                xt = i(6042);
            let kt = !1;
            const Ct = function(t, e, s, o, l) {
                    const c = (null == l ? void 0 : l.openLink) || r.nG;
                    Object.assign(this, a.ZP);
                    let p, w, h = [wt, ht, mt];
                    const d = t => {
                        s.trigger("settingsInteraction", "sharing", !1, t)
                    };
                    (() => {
                        if (Array.isArray(e.sites)) {
                            const t = [];
                            (0, xt.S6)(e.sites, (function(e) {
                                (0, xt.HD)(e) && n[e] ? t.push(n[e]) : (0, xt.Kn)(e) && t.push(e)
                            })), h = t
                        }
                        t.addButton(yt(), o, d, "share", "jw-settings-sharing");
                        const i = s.el.querySelector(".jw-settings-sharing");
                        i.setAttribute("aria-controls", `jw-${t.id}-settings-submenu-sharing`), i.setAttribute("role", "button")
                    })();
                    const u = (t, e) => {
                            const i = t.indexOf("MEDIAID");
                            return i > 0 && e ? t.replace("MEDIAID", e) : -1 === i ? t : void 0
                        },
                        j = (t, i) => {
                            if (i) return i;
                            if (e.link) {
                                const i = u(e.link, t);
                                if (i) return i
                            }
                            return window.top === window ? window.location.toString() : document.referrer
                        },
                        g = () => {
                            const i = t.getPlaylistItem(),
                                n = h.filter((t => "link" === t.label))[0],
                                {
                                    mediaid: s,
                                    link: o
                                } = i;
                            p = j(s, o), n ? -1 === n.src.indexOf(p) && (n.src = p) : h.push(Object.assign({
                                src: p
                            }, ft));
                            const a = h.filter((t => "embed" === t.label));
                            w = (t => {
                                let i = null;
                                if (e.code) {
                                    i = u(e.code, t) || i
                                }
                                return i
                            })(i.mediaid) || e.code, a[0] ? a[0].src = decodeURIComponent(w) : e.code && h.push(Object.assign({
                                src: decodeURIComponent(w)
                            }, bt))
                        },
                        m = t => {
                            this.trigger("click", {
                                method: t
                            })
                        };
                    return this.getShareMethods = function() {
                        return g(), h
                    }, this.getLink = (t, e) => j(t, e), this.getHeading = () => o, this.onSubmenuToggle = (t, e = "interaction") => {
                        t && !kt && (kt = !0, i(3484)), this.trigger(t ? "open" : "close", {
                            visible: t,
                            method: e
                        })
                    }, this.action = function(e) {
                        const i = h[e].label;
                        "embed" !== i && "link" !== i ? (e => {
                            const {
                                src: i
                            } = e;
                            if ((0, xt.mf)(i)) i(p);
                            else if (null != i) {
                                const e = encodeURIComponent(p || "share");
                                let n = i.replace(/\[URL\]/gi, e);
                                i === n && (n = i + e), t.pause({
                                    reason: "sharing"
                                }), c(n, "_blank", {
                                    rel: "noreferrer"
                                }), window.focus()
                            }
                            m(e.label)
                        })(h[e]) : m(i)
                    }, this.open = function() {
                        s.trigger("sharingApi", !0)
                    }, this.close = function() {
                        s.trigger("sharingApi", !1)
                    }, this
                },
                zt = function(t, e) {
                    const i = (0, r.az)('<div class="jw-skip jw-reset" tabindex="0" role="button"><span class="jw-text jw-skiptext jw-reset"></span><span class="jw-icon jw-icon-inline jw-skip-icon jw-reset"></span></div>');
                    i.querySelector(".jw-icon").appendChild((0, j.W)("next")), this.el = i, this.skiptext = this.el.querySelector(".jw-skiptext"), this.skipUI = (0, b.Z)(this.el, this.skipAd, this), this.model = t, this.skipMessage = t.get("skipText") || "", this.skipMessageCountdown = t.get("skipMessage") || "", this.waitTime = (0, g.U5)(t.get("skipOffset")), t.change("duration", ((i, n) => {
                        n && (this.waitTime || (this.waitTime = (0, g.U5)(i.get("skipOffset"), n)), this.el.parentNode !== e && this.waitTime + 2 < n && (t.change("position", ((t, e) => {
                            const i = this.waitTime - (e || 0);
                            i > 0 ? this.updateMessage(this.skipMessageCountdown.replace(/(\b)xx(s?\b)/gi, `$1${Math.ceil(i)}$2`)) : null !== this.waitTime && (this.updateMessage(this.skipMessage), this.skippable = !0, (0, r.cn)(this.el, "jw-skippable"))
                        }), this), e.appendChild(this.el)))
                    }), this)
                };
            Object.assign(zt.prototype, a.ZP, {
                updateMessage(t) {
                    (0, r.nh)(this.skiptext, t), this.el.setAttribute("aria-label", t)
                },
                skipAd() {
                    this.skippable && (this.skipUI.off(), this.trigger(o.k3))
                },
                destroy() {
                    var t;
                    this.model.off(null, null, this), this.skipUI && this.skipUI.destroy(), null != this && null != (t = this.el) && t.parentNode && this.el.parentNode.removeChild(this.el)
                }
            });
            const Tt = zt,
                St = function(t, e, i) {
                    this.api = t, this.playerElement = e, this.wrapperElement = i
                };
            Object.assign(St.prototype, {
                setup(t) {
                    this.element = (0, r.az)((t => `<div class="jw-dismiss-icon jw-icon jw-reset" aria-label=${t} tabindex="0"></div>`)(t)), this.element.appendChild((0, j.W)("close")), this.ui = (0, b.Z)(this.element, (() => {
                        this.api.remove()
                    }), this), this.wrapperElement.insertBefore(this.element, this.wrapperElement.firstChild), (0, r.cn)(this.playerElement, "jw-flag-top")
                },
                destroy() {
                    this.element && (this.ui.destroy(), this.wrapperElement.removeChild(this.element), this.element = null)
                }
            });
            const Mt = St,
                Bt = t => {
                    const {
                        label: e,
                        src: i,
                        options: n,
                        displayText: s,
                        svg: o = "",
                        icon: a = ""
                    } = t, l = a ? `<img src="${a}" class="jw-svg-icon"/>` : o;
                    return "link" === e || "embed" === e ? `<div class="jw-reset jw-settings-content-item jw-sharing-copy"><button class="jw-reset jw-sharing-link" aria-checked="false" type="button" role="button">${l} ${s||e}</button><textarea readonly="true" class="jw-reset jw-sharing-textarea">${i}</textarea><div class="jw-reset jw-tooltip jw-tooltip-sharing-${s||e}"><div class="jw-text">${n.copyText}</div></div></div>` : `<button class="jw-reset jw-settings-content-item jw-sharing-link" aria-checked="false" type="button" role="menuitem">${l} ${s||e}</button>`
                };
            class Et extends A.s {
                constructor(t, e, i = Bt) {
                    super(t, e, i), this.content = t, this.el && t.label && (this.el.setAttribute("aria-label", t.label), this.el.setAttribute("role", "button"), this.el.setAttribute("tabindex", "0"))
                }
                activate() {
                    if ("embed" !== this.content.label && "link" !== this.content.label) return;
                    const t = this.el.querySelector(".jw-sharing-textarea");
                    if (t.select(), document.execCommand("copy")) {
                        const e = t.nextSibling;
                        (0, r.cn)(e, "jw-open"), setTimeout((function() {
                            (0, r.IV)(e, "jw-open")
                        }), 1e3)
                    } else window.prompt("Copy the text below", this.content.src);
                    t.blur()
                }
                destroy() {
                    this.ui.destroy()
                }
            }
            const At = Et;
            class Lt extends E.Z {
                createCategoryButton() {
                    return "sharing" === this.name && (this.icon = yt()), super.createCategoryButton(this.title)
                }
                createItems(t, e, i, n) {
                    return "sharing" === this.name && (n = At), super.createItems.apply(this, [t, e, i, n])
                }
            }
            const $t = class extends D {
                constructor(t, e) {
                    super(t, e), this.playerContainer = e, this.sharing = null, this.sharingApi = !1, this.dismissButton = null, this.skipButton = null
                }
                disable(t) {
                    super.disable.call(this, t), this.dismissButton && (this.dismissButton.destroy(), this.dismissButton = null)
                }
                enable(t, e) {
                    super.enable.call(this, t, e), e.change("instream", (() => {
                        this._destroySkipButton()
                    })), e.change("skipButton", ((e, i) => {
                        this._destroySkipButton(), i && (this.skipButton = new Tt(e, this.div), this.skipButton.on(o.k3, (function() {
                            e.set("skipButton", !1), t.skipAd()
                        })), this.controlbar.adSkipButton = this.skipButton)
                    }));
                    const i = e.get("localization"),
                        n = e.get("advertising");
                    null != n && n.outstream && null != n && n.dismissible && (this.dismissButton = new Mt(t, this.playerContainer, this.playerContainer.querySelector(".jw-top")), this.dismissButton.setup(i.close));
                    const s = e.get("sharing");
                    if (!this.sharing && s) {
                        const {
                            controlbar: n,
                            settingsMenu: o
                        } = this, a = i.sharing;
                        this.sharing = new Ct(t, s, n, a.heading), t.addPlugin("sharing", this.sharing), e.change("playlistItem", (() => {
                            const e = this.sharing.getShareMethods().map((t => {
                                const e = a[t.label];
                                return e && (t.displayText = e), t
                            }));
                            o.removeMenu("sharing");
                            const n = new Lt(t.id, "sharing", i.sharing.heading, o, i),
                                s = n.open,
                                l = n.close,
                                r = i.sharing.copied;
                            n.open = t => {
                                n.visible || this._onSharingActive(!0), s(t)
                            }, n.close = t => {
                                n.visible && this._onSharingActive(!1), l(t)
                            }, n.setMenuItems(n.createItems(e, this.sharing.action, {
                                copyText: r
                            })), n.el.classList.add("jw-sharing-menu")
                        })), this._addSharingApiEvent(n, o), this.rightClickMenu.enableSharing(this.sharing.open)
                    }
                }
                _destroySkipButton() {
                    this.skipButton && (this.skipButton.destroy(), this.skipButton = null, this.controlbar.adSkipButton = null)
                }
                _addSharingApiEvent(t, e) {
                    t.on("sharingApi", (t => {
                        const i = e.children.sharing;
                        i && (this.sharingApi = !0, t && !i.visible ? (e.children.sharing.open(), this.sharing.onSubmenuToggle(!0, "api")) : !t && i.visible && (e.close(), this.sharing.onSubmenuToggle(!1, "api")))
                    }))
                }
                _onSharingActive(t) {
                    this.sharingApi ? this.sharingApi = !1 : this.sharing.onSubmenuToggle(t)
                }
            }
        },
        4542: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => l
            });
            var n = i(8081),
                s = i.n(n),
                o = i(3645),
                a = i.n(o)()(s());
            a.push([t.id, '.jw-controls,.jw-controls-backdrop,.jw-flag-small-player .jw-settings-menu,.jw-overlays,.jw-settings-submenu{height:100%;width:100%}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;right:0}.jw-controls,.jw-controls-backdrop,.jw-overlays,.jw-settings-item-active::before{top:0;position:absolute;left:0}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;bottom:0;left:0}.jw-nextup-close{position:absolute;top:0;right:0}.jw-controls,.jw-flag-small-player .jw-settings-menu,.jw-overlays{position:absolute;bottom:0;right:0}.jw-controlbar .jw-tooltip::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after,.jw-settings-menu .jw-tooltip::after,.jw-text-live::before,.jw-time-tip::after{content:"";display:block}.jw-svg-icon{height:24px;width:24px;fill:currentColor;pointer-events:none}.jw-icon{height:44px;width:44px;background-color:transparent;outline:0}.jw-icon.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-icon-airplay .jw-svg-icon-airplay-off{display:none}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-off{display:block}.jw-icon-airplay .jw-svg-icon-airplay-on{display:block}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-on{display:none}.jw-icon-cc .jw-svg-icon-cc-off{display:none}.jw-off.jw-icon-cc .jw-svg-icon-cc-off{display:block}.jw-icon-cc .jw-svg-icon-cc-on{display:block}.jw-off.jw-icon-cc .jw-svg-icon-cc-on{display:none}.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:none}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:block}.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:block}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:none}.jw-icon-pip .jw-svg-icon-pip-off{display:none}.jw-off.jw-icon-pip .jw-svg-icon-pip-off{display:block}.jw-icon-pip .jw-svg-icon-pip-on{display:block}.jw-off.jw-icon-pip .jw-svg-icon-pip-on{display:none}.jw-icon-volume .jw-svg-icon-volume-0{display:none}.jw-off.jw-icon-volume .jw-svg-icon-volume-0{display:block}.jw-icon-volume .jw-svg-icon-volume-100{display:none}.jw-full.jw-icon-volume .jw-svg-icon-volume-100{display:block}.jw-icon-volume .jw-svg-icon-volume-50{display:block}.jw-full.jw-icon-volume .jw-svg-icon-volume-50,.jw-off.jw-icon-volume .jw-svg-icon-volume-50{display:none}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-icon-volume.jw-open::after,.jw-settings-menu .jw-icon[aria-checked=true]::after,.jw-settings-open .jw-icon-settings::after{opacity:1}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-audio-tracks,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-cc,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-hd,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-settings,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-settings-sharing,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-cast{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-text-live{bottom:6px}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume::after{display:none}.jw-controls,.jw-overlays{pointer-events:none}.jw-controls-backdrop{display:block;background:linear-gradient(to bottom,transparent,rgba(0,0,0,.4) 77%,rgba(0,0,0,.4) 100%) 100% 100%/100% 240px no-repeat transparent;transition:opacity 250ms cubic-bezier(0,.25,.25,1),background-size 250ms cubic-bezier(0,.25,.25,1);pointer-events:none}.jw-overlays{cursor:auto}.jw-controls{overflow:hidden}.jw-flag-small-player .jw-controls{text-align:center}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-autostart-mute,.jw-controlbar,.jw-display-icon-container .jw-icon,.jw-nextup-container,.jw-overlays .jw-plugin,.jw-skip{pointer-events:all}.jw-error .jw-display-icon-container,.jwplayer .jw-display-icon-container{width:auto;height:auto;box-sizing:content-box}.jw-display{display:flex;flex-direction:column;justify-content:center;height:100%;padding:57px 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-display-container{text-align:center}.jw-display-controls{display:inline-block}.jwplayer .jw-display-icon-container{float:left}.jw-display-icon-container{display:inline-block;padding:5.5px;margin:0 22px}.jw-display-icon-container .jw-icon{height:75px;width:75px;cursor:pointer;display:flex;justify-content:center;align-items:center}.jw-display-icon-container .jw-icon .jw-svg-icon{height:33px;width:33px;padding:0;position:relative}.jw-display-icon-container .jw-icon .jw-svg-icon-rewind{padding:.2em .05em}.jw-breakpoint--1 .jw-nextup-container{display:none}.jw-breakpoint--1 .jw-display-icon-next,.jw-breakpoint--1 .jw-display-icon-rewind,.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind{display:none}.jw-breakpoint--1.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint--1.jw-flag-touch .jw-display .jw-svg-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-svg-icon{z-index:100;position:relative}.jw-breakpoint--1 .jw-display .jw-icon,.jw-breakpoint--1 .jw-display .jw-svg-icon,.jw-breakpoint-0 .jw-display .jw-icon,.jw-breakpoint-0 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint--1 .jw-display .jw-icon:before,.jw-breakpoint--1 .jw-display .jw-svg-icon:before,.jw-breakpoint-0 .jw-display .jw-icon:before,.jw-breakpoint-0 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon,.jw-breakpoint-1 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-1 .jw-display .jw-icon:before,.jw-breakpoint-1 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon.jw-icon-rewind:before{width:33px;height:33px}.jw-breakpoint-2 .jw-display .jw-icon,.jw-breakpoint-2 .jw-display .jw-svg-icon,.jw-breakpoint-3 .jw-display .jw-icon,.jw-breakpoint-3 .jw-display .jw-svg-icon{width:77px;height:77px;line-height:77px}.jw-breakpoint-2 .jw-display .jw-icon:before,.jw-breakpoint-2 .jw-display .jw-svg-icon:before,.jw-breakpoint-3 .jw-display .jw-icon:before,.jw-breakpoint-3 .jw-display .jw-svg-icon:before{width:38.5px;height:38.5px}.jw-breakpoint-4 .jw-display .jw-icon,.jw-breakpoint-4 .jw-display .jw-svg-icon,.jw-breakpoint-5 .jw-display .jw-icon,.jw-breakpoint-5 .jw-display .jw-svg-icon,.jw-breakpoint-6 .jw-display .jw-icon,.jw-breakpoint-6 .jw-display .jw-svg-icon,.jw-breakpoint-7 .jw-display .jw-icon,.jw-breakpoint-7 .jw-display .jw-svg-icon{width:88px;height:88px;line-height:88px}.jw-breakpoint-4 .jw-display .jw-icon:before,.jw-breakpoint-4 .jw-display .jw-svg-icon:before,.jw-breakpoint-5 .jw-display .jw-icon:before,.jw-breakpoint-5 .jw-display .jw-svg-icon:before,.jw-breakpoint-6 .jw-display .jw-icon:before,.jw-breakpoint-6 .jw-display .jw-svg-icon:before,.jw-breakpoint-7 .jw-display .jw-icon:before,.jw-breakpoint-7 .jw-display .jw-svg-icon:before{width:44px;height:44px}.jw-controlbar{display:flex;flex-flow:row wrap;align-items:center;justify-content:center;position:absolute;left:0;bottom:0;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;max-height:72px;transition:250ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s}.jw-flag-touch.jw-breakpoint-0 .jw-controlbar .jw-icon-inline{height:40px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar{max-height:140px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container{padding:0 48px 20px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-tooltip{margin-bottom:-7px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume .jw-overlay{padding-bottom:40%}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-text{font-size:1em}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-text.jw-text-elapsed{justify-content:flex-end}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live),.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume{height:60px;width:60px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live) .jw-svg-icon,.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time{padding:0 60px;height:34px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time .jw-slider-container{height:10px}.jw-controlbar .jw-button-image{background:no-repeat 50% 50%;background-size:contain;max-height:24px}.jw-controlbar .jw-spacer{margin:0 auto}.jw-controlbar .jw-icon.jw-button-color:hover{color:#fff}.jw-button-container{display:flex;flex-flow:row nowrap;flex:1 1 auto;align-items:center;justify-content:flex-start;width:100%;padding:0 12px}.jw-slider-horizontal{background-color:transparent}.jw-icon-inline{position:relative}.jw-icon-inline,.jw-icon-tooltip{height:44px;width:44px;align-items:center;display:flex;justify-content:center}.jw-icon-inline:not(.jw-text),.jw-icon-tooltip,.jw-slider-horizontal{cursor:pointer}.jw-text-duration,.jw-text-elapsed{justify-content:flex-start;width:-moz-fit-content;width:fit-content}.jw-icon-tooltip{position:relative}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0}.jw-icon-cast google-cast-launcher{background-color:transparent;border:none;padding:0;width:24px;height:24px;cursor:pointer}.jw-fullscreen-ima{display:none}.jw-icon-inline.jw-icon-volume{display:none}.jwplayer .jw-text-countdown{display:none}.jw-flag-small-player .jw-display{padding-top:0;padding-bottom:0}.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-next,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-playback,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-rewind{display:none}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop{opacity:0}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-countdown{display:flex}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-elapsed,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-elapsed{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-related-btn,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-slider-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-text-countdown{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-button-container{height:30px}.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-volume{display:none}.jwplayer:not(.jw-breakpoint--1) .jw-text-duration:before,.jwplayer:not(.jw-breakpoint-0) .jw-text-duration:before{content:"/";padding-right:1ch;padding-left:1ch}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar{will-change:transform}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar .jw-text{transform-style:preserve-3d}.jwplayer:not(.jw-flag-fullscreen) .jw-fullscreen-disallowed{display:none}.jw-slider-container{display:flex;align-items:center;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#f2f2f2}.jw-rail{background-color:rgba(255,255,255,.3)}.jw-buffer{background-color:rgba(255,255,255,.3)}.jw-knob{height:13px;width:13px;background-color:#fff;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.4);opacity:1;pointer-events:none;position:absolute;transform:translate(-50%,-50%) scale(0);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform}.jw-flag-dragging .jw-slider-time .jw-knob,.jw-icon-volume:active .jw-slider-volume .jw-knob{box-shadow:0 0 26px rgba(0,0,0,.2),0 0 10px rgba(0,0,0,.4),0 0 0 6px rgba(255,255,255,.2)}.jw-slider-horizontal,.jw-slider-vertical{display:flex}.jw-slider-horizontal .jw-slider-container{height:5px;width:100%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-knob,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{top:50%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{transform:translate(0,-50%)}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:5px}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-vertical{align-items:center;flex-direction:column}.jw-slider-vertical .jw-slider-container{height:88px;width:5px}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-knob,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{left:50%}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{height:100%;width:5px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translate(-50%,0);transition:transform 150ms ease-in-out;bottom:0}.jw-slider-vertical .jw-knob{transform:translate(-50%,50%)}.jw-slider-time.jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-horizontal-volume-container .jw-slider-volume,.jw-slider-time:not(.jw-chapter-slider-time){height:17px;width:100%;align-items:center;background:transparent none;padding:0 12px}.jw-slider-time .jw-cue{background-color:rgba(33,33,33,.8);cursor:pointer;position:absolute;width:6px}.jw-horizontal-volume-container,.jw-slider-time:not(.jw-chapter-slider-time){z-index:1;outline:0}.jw-horizontal-volume-container .jw-buffer,.jw-horizontal-volume-container .jw-cue,.jw-horizontal-volume-container .jw-progress,.jw-horizontal-volume-container .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time) .jw-cue,.jw-slider-time:not(.jw-chapter-slider-time) .jw-progress,.jw-slider-time:not(.jw-chapter-slider-time) .jw-rail{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;transform:translate(0,-50%) scale(1,.6);transition:transform 150ms ease-in-out}.jw-flag-dragging .jw-horizontal-volume-container .jw-buffer,.jw-flag-dragging .jw-horizontal-volume-container .jw-cue,.jw-flag-dragging .jw-horizontal-volume-container .jw-progress,.jw-flag-dragging .jw-horizontal-volume-container .jw-rail,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-cue,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-progress,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-rail,.jw-flag-touch .jw-horizontal-volume-container .jw-buffer,.jw-flag-touch .jw-horizontal-volume-container .jw-cue,.jw-flag-touch .jw-horizontal-volume-container .jw-progress,.jw-flag-touch .jw-horizontal-volume-container .jw-rail,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-cue,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-progress,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-rail,.jw-horizontal-volume-container:focus .jw-buffer,.jw-horizontal-volume-container:focus .jw-cue,.jw-horizontal-volume-container:focus .jw-progress,.jw-horizontal-volume-container:focus .jw-rail,.jw-horizontal-volume-container:hover .jw-buffer,.jw-horizontal-volume-container:hover .jw-cue,.jw-horizontal-volume-container:hover .jw-progress,.jw-horizontal-volume-container:hover .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-cue,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-progress,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-cue,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-progress,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-rail{transform:translate(0,-50%) scale(1,1)}.jw-horizontal-volume-container:focus .jw-knob,.jw-horizontal-volume-container:hover .jw-knob,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-knob,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-knob{transform:translate(-50%,-50%) scale(1)}.jw-horizontal-volume-container .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time) .jw-rail{background-color:rgba(255,255,255,.2)}.jw-horizontal-volume-container .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer{background-color:rgba(255,255,255,.4)}.jw-flag-touch .jw-horizontal-volume-container::before,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time)::before{height:44px;width:100%;content:"";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jw-breakpoint-0.jw-flag-touch .jw-horizontal-volume-container::before,.jw-breakpoint-0.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time)::before{height:34px}.jw-horizontal-volume-container.jw-tab-focus:focus .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time).jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-flag-horizontal-slider .jw-overlay{display:none}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container{display:flex;transition:width .3s cubic-bezier(0,.25,.25,1);width:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open{width:140px}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume{padding-right:12px;opacity:1}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume{transition:opacity .3s;opacity:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob{transform:translate(-50%,-50%)}.jw-flag-audio-player .jw-button-container .jw-icon,.jwplayer:not(.jw-flag-small-player) .jw-button-container .jw-icon{flex:0 0 auto}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time{height:17px;padding:0}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-slider-container{height:10px}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-knob{border-radius:0;border:1px solid rgba(0,0,0,.75);height:12px;width:10px}.jw-breakpoint-0 .jw-slider-time{height:11px}.jw-horizontal-volume-container{display:none}.jw-slider-horizontal.jw-chapter-slider-time{height:16px;width:100%;align-items:center;background:transparent none;padding:0 12px;outline:0}.jw-slider-horizontal.jw-chapter-slider-time .jw-old-buffer,.jw-slider-horizontal.jw-chapter-slider-time .jw-old-progress,.jw-slider-horizontal.jw-chapter-slider-time .jw-old-rail{position:absolute;cursor:pointer}.jw-slider-horizontal.jw-chapter-slider-time .jw-old-rail{width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;display:flex;background-color:rgba(0,0,0,0)}.jw-slider-horizontal.jw-chapter-slider-time .jw-old-buffer,.jw-slider-horizontal.jw-chapter-slider-time .jw-old-progress{opacity:0;pointer-events:none}.jw-slider-horizontal.jw-chapter-slider-time .jw-cue{width:3px;height:100%}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container{z-index:1;height:100%}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container:hover .jw-knob{transform:translate(-50%,-50%) scale(1)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-horizontal-volume-container{display:none}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment{position:relative;flex:0 0 0px;height:100%}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment:hover .jw-timesegment-resetter{transform:translate(0,-50%) scale(1,1)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment:hover .jw-timesegment-background{background-color:rgba(255,255,255,.49)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment:hover .jw-timesegment-buffered{background-color:rgba(0,0,0,0)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-resetter{height:5px;width:100%;top:50%;position:relative;transform:translate(0,-50%) scale(1,.6)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-container{height:100%;position:relative}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-bar{height:100%;position:absolute}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-background{width:100%;background-color:rgba(255,255,255,.3)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-buffered{width:0%;background-color:rgba(255,255,255,.3)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-progress{width:0%;background-color:#f2f2f2}.jw-flag-touch .jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container::before{height:44px;width:100%;content:"";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jw-breakpoint-0.jw-flag-touch .jw-slider-horizontal.jw-chapter-slider-time::before{height:34px}.jw-flag-dragging .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter,.jw-flag-touch .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter{transform:translate(0,-50%) scale(1,1)}.jw-slider-horizontal.jw-chapter-slider-time:focus .jw-knob,.jw-slider-horizontal.jw-chapter-slider-time:hover .jw-knob{transform:translate(-50%,-50%) scale(1)}.jw-slider-horizontal.jw-chapter-slider-time.jw-tab-focus:focus .jw-old-rail{outline:solid 2px #4d90fe}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container{height:100%}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter{height:10px}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-horizontal.jw-chapter-slider-time .jw-knob{border-radius:0;border:1px solid rgba(0,0,0,.75);height:12px;width:10px}.jw-breakpoint-0 .jw-slider-horizontal.jw-chapter-slider-time{height:11px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-horizontal.jw-chapter-slider-time{padding:0 60px;height:34px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container{height:100%}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter{height:10px}.jw-modal{width:284px}.jw-breakpoint-5 .jw-modal,.jw-breakpoint-6 .jw-modal,.jw-breakpoint-7 .jw-modal{height:232px}.jw-breakpoint-3 .jw-modal,.jw-breakpoint-4 .jw-modal{height:192px}.jw-breakpoint-2 .jw-modal,.jw-flag-small-player .jw-modal{bottom:0;right:0;height:100%;width:100%;max-height:none;max-width:none;z-index:2}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick .jw-rightclick-list{border-radius:1px;list-style:none;margin:0;padding:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item{background-color:rgba(0,0,0,.8);border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo{color:#fff;display:inline-flex;padding:0 10px 0 0;vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo .jw-svg-icon{height:20px;width:20px}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-link{border:none;color:#fff;display:block;font-size:11px;font-weight:400;line-height:1em;padding:15px 23px;text-align:start;text-decoration:none;width:100%}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:last-child{border-bottom:none}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:hover{cursor:pointer}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured{vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link{color:#fff}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link span{color:#fff;font-size:12px}.jwplayer .jw-rightclick .jw-rightclick-link{border:none;background-color:transparent;outline:0;cursor:pointer}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;pointer-events:auto;transition-delay:0s}.jw-icon-tooltip.jw-open .jw-overlay:focus{outline:0}.jw-icon-tooltip.jw-open .jw-overlay:focus.jw-tab-focus{outline:solid 2px #4d90fe}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-slider-time .jw-icon-tooltip.jw-open .jw-overlay{pointer-events:none}.jw-volume-tip{padding:13px 0 26px}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{height:auto;width:100%;box-shadow:0 0 10px rgba(0,0,0,.4);color:#fff;display:block;margin:0 0 14px;pointer-events:none;position:relative;z-index:0;background-color:#fff}.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after,.jw-time-tip::after{top:100%;position:absolute;left:50%;height:14px;width:14px;border-radius:1px;background-color:currentColor;transform-origin:75% 50%;transform:translate(-50%,-50%) rotate(45deg);z-index:-1}.jw-controlbar .jw-tooltip .jw-text,.jw-settings-menu .jw-tooltip .jw-text,.jw-time-tip .jw-text{background-color:#fff;border-radius:1px;color:#000;font-size:10px;height:auto;line-height:1;padding:7px 10px;display:inline-block;min-width:100%;vertical-align:middle;min-height:2.4em}.jw-controlbar .jw-overlay{position:absolute;bottom:100%;left:50%;margin:0;min-height:44px;min-width:44px;opacity:0;pointer-events:none;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s,150ms;transform:translate(-50%,0);width:100%;z-index:1}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 .5em;font-size:.8em;margin:0}.jw-controlbar .jw-option::before{padding-right:.125em}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{position:absolute;bottom:100%;left:50%;opacity:0;transform:translate(-50%,0);transition:.1s 0s cubic-bezier(0,.25,.25,1);transition-property:opacity,transform,visibility;visibility:hidden;white-space:nowrap;width:auto;z-index:1}.jw-controlbar .jw-tooltip.jw-open,.jw-settings-menu .jw-tooltip.jw-open{opacity:1;transform:translate(-50%,-10px);transition-duration:150ms;transition-delay:.5s,0s,.5s;visibility:visible}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen{left:auto;right:0;transform:translate(0,0)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen.jw-open,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen.jw-open{transform:translate(0,-10px)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen::after,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen::after{left:auto;right:9px}.jw-tooltip-time{height:auto;width:0;bottom:100%;line-height:normal;padding:0;pointer-events:none;-webkit-user-select:none;user-select:none}.jw-tooltip-time .jw-overlay{bottom:0;min-height:0;width:auto}.jw-tooltip{bottom:57px;display:none;position:absolute}.jw-tooltip .jw-text{height:100%;white-space:nowrap;text-overflow:ellipsis;direction:unset;max-width:246px;overflow:hidden}.jw-flag-audio-player .jw-tooltip{display:none}.jw-flag-small-player .jw-time-thumb{display:none}.jw-chapter-slider-time .jw-tooltip-time .jw-overlay:before{height:1em;top:auto}.jw-chapter-slider-time .jw-tooltip-time .jw-icon-tooltip.jw-open .jw-overlay{pointer-events:none}.jwplayer .jw-shortcuts-tooltip{top:50%;position:absolute;left:50%;background:rgba(38,38,38,.8);transform:translate(-50%,-50%);display:none;color:#fff;pointer-events:all;-webkit-user-select:text;user-select:text;overflow:hidden;flex-direction:column;z-index:1}.jwplayer .jw-shortcuts-tooltip.jw-open{display:flex}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-close{flex:0 0 auto;margin:5px 5px 5px auto}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container{display:flex;flex:1 1 auto;flex-flow:column;font-size:12px;margin:0 20px 20px;overflow-y:auto;padding:5px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar{background-color:transparent;width:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-title{font-weight:700}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-header{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list{display:flex;max-width:340px;margin:0 10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-tooltip-descriptions{width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row{display:flex;align-items:center;justify-content:space-between;margin:10px 0;width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-description{margin-right:10px;max-width:70%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-key{background:#fefefe;color:#333;overflow:hidden;padding:7px 10px;text-overflow:ellipsis;white-space:nowrap}.jw-skip{color:rgba(255,255,255,.8);cursor:default;position:absolute;display:flex;right:.75em;bottom:56px;padding:.5em;border:1px solid #333;background-color:#000;align-items:center;height:2em}.jw-skip.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-skip.jw-skippable{cursor:pointer;padding:.25em .75em}.jw-skip.jw-skippable:hover{cursor:pointer;color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;height:24px;width:24px;margin:0}.jw-breakpoint-7 .jw-skip{padding:1.35em 1em;bottom:130px}.jw-breakpoint-7 .jw-skip .jw-text{font-size:1em;font-weight:400}.jw-breakpoint-7 .jw-skip .jw-icon-inline{height:30px;width:30px}.jw-breakpoint-7 .jw-skip .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em;padding:0 .5em;pointer-events:none}.jw-skip .jw-skip-icon .jw-svg-icon-next{display:block;padding:0}.jw-skip .jw-skip-icon,.jw-skip .jw-text{vertical-align:middle;font-size:.7em}.jw-skip .jw-text{font-weight:700}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:linear-gradient(180deg,rgba(25,25,25,.75),rgba(25,25,25,.25),rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint--1 .jw-cast-text,.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{position:absolute;bottom:66px;left:0;background-color:transparent;cursor:pointer;margin:0 auto;padding:12px;pointer-events:none;right:0;text-align:right;visibility:hidden;width:100%}.jw-info-open .jw-nextup-container,.jw-settings-open .jw-nextup-container{display:none}.jw-breakpoint-7 .jw-nextup-container{padding:60px}.jw-flag-small-player .jw-nextup-container{padding:0 12px 0 0}.jw-flag-small-player .jw-nextup-container .jw-nextup-close,.jw-flag-small-player .jw-nextup-container .jw-nextup-duration,.jw-flag-small-player .jw-nextup-container .jw-nextup-title{display:none}.jw-flag-small-player .jw-nextup-container .jw-nextup-tooltip{height:30px}.jw-flag-small-player .jw-nextup-container .jw-nextup-header{font-size:12px}.jw-flag-small-player .jw-nextup-container .jw-nextup-body{justify-content:center;align-items:center;padding:.75em .3em}.jw-flag-small-player .jw-nextup-container .jw-nextup-thumbnail{width:50%}.jw-flag-small-player .jw-nextup-container .jw-nextup{max-width:65px}.jw-flag-small-player .jw-nextup-container .jw-nextup.jw-nextup-thumbnail-visible{max-width:120px}.jw-nextup{background:rgba(38,38,38,.8);border-radius:0;box-shadow:0 0 10px rgba(0,0,0,.5);color:rgba(255,255,255,.8);display:inline-block;max-width:280px;overflow:hidden;opacity:0;position:relative;width:64%;pointer-events:all;transform:translate(0,-5px);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform;transition-delay:0s}.jw-nextup:hover .jw-nextup-tooltip{color:#fff}.jw-nextup.jw-nextup-thumbnail-visible{max-width:400px}.jw-nextup.jw-nextup-thumbnail-visible .jw-nextup-thumbnail{display:block}.jw-nextup-container-visible{visibility:visible}.jw-nextup-container-visible .jw-nextup{opacity:1;transform:translate(0,0);transition-delay:0s,0s,150ms}.jw-nextup-tooltip{display:flex;height:80px}.jw-nextup-thumbnail{width:120px;background-position:center;background-size:cover;flex:0 0 auto;display:none}.jw-nextup-body{flex:1 1 auto;overflow:hidden;padding:.75em .875em;display:flex;flex-flow:column wrap;justify-content:space-between}.jw-nextup-header,.jw-nextup-title{font-size:14px;line-height:1.35}.jw-nextup-header{font-weight:700}.jw-nextup-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-duration{align-self:flex-end;text-align:right;font-size:12px}.jw-nextup-close{height:24px;width:24px;border:none;color:rgba(255,255,255,.8);cursor:pointer;margin:6px;visibility:hidden}.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{visibility:visible}.jw-nextup-firefox-pip-fix{background:#262626}.jw-autostart-mute{position:absolute;bottom:0;right:12px;height:44px;width:44px;background-color:rgba(33,33,33,.4);padding:5px 4px 5px 6px;display:none}.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio) .jw-nextup{display:none}.jw-settings-menu{position:absolute;bottom:57px;right:12px;align-items:flex-start;background-color:#262626;display:none;flex-flow:column nowrap;max-width:284px;pointer-events:auto}.jw-settings-open .jw-settings-menu{display:flex}.jw-breakpoint-7 .jw-settings-menu{bottom:130px;right:60px;max-height:none;max-width:none;height:35%;width:25%;min-height:200px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline{height:60px;width:60px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-tooltip .jw-text{font-size:1em}.jw-breakpoint-7 .jw-settings-menu .jw-settings-back{min-width:60px}.jw-breakpoint-5 .jw-settings-menu,.jw-breakpoint-6 .jw-settings-menu{height:232px;width:284px;max-height:232px}.jw-breakpoint-3 .jw-settings-menu,.jw-breakpoint-4 .jw-settings-menu{height:192px;width:284px;max-height:192px}.jw-breakpoint-2 .jw-settings-menu{height:179px;width:284px;max-height:179px}.jw-flag-small-player .jw-settings-menu{max-width:none}.jw-settings-menu .jw-icon.jw-button-color::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-settings-menu .jw-icon.jw-button-color[aria-expanded=true]::after{opacity:1}.jw-settings-menu .jw-settings-reset{text-decoration:underline}.jw-settings-topbar{align-items:center;background-color:rgba(0,0,0,.4);display:flex;flex:0 0 auto;padding:3px 5px 0;width:100%}.jw-settings-topbar.jw-nested-menu-open{padding:0}.jw-settings-topbar.jw-nested-menu-open .jw-icon:not(.jw-settings-close):not(.jw-settings-back){display:none}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-close{width:20px}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-arrow-left{height:12px}.jw-settings-topbar.jw-nested-menu-open .jw-settings-topbar-text{display:block;outline:0}.jw-settings-topbar .jw-settings-back{min-width:44px}.jw-settings-topbar .jw-settings-topbar-buttons{display:inherit;width:100%;height:100%}.jw-settings-topbar .jw-settings-topbar-text{display:none;color:#fff;font-size:13px;width:100%}.jw-settings-topbar .jw-settings-close{margin-left:auto}.jw-settings-submenu{display:none;flex:1 1 auto;overflow-y:auto;padding:8px 20px 0 5px}.jw-settings-submenu::-webkit-scrollbar{background-color:transparent;width:6px}.jw-settings-submenu::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jw-settings-submenu.jw-settings-submenu-active{display:block}.jw-settings-submenu .jw-submenu-topbar{box-shadow:0 2px 9px 0 #1d1d1d;background-color:#2f2d2d;margin:-8px -20px 0 -5px}.jw-settings-submenu .jw-submenu-topbar .jw-settings-content-item{cursor:pointer;text-align:right;padding-right:15px;text-decoration:underline}.jw-settings-submenu .jw-settings-value-wrapper{float:right;display:flex;align-items:center}.jw-settings-submenu .jw-settings-value-wrapper .jw-settings-content-item-arrow{display:flex}.jw-settings-submenu .jw-settings-value-wrapper .jw-svg-icon-arrow-right{width:8px;margin-left:5px;height:12px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item{font-size:1em;padding:11px 15px 11px 30px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-settings-item-active::before{justify-content:flex-end}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-auto-label{font-size:.85em;padding-left:10px}.jw-flag-touch .jw-settings-submenu{overflow-y:scroll;-webkit-overflow-scrolling:touch}.jw-auto-label{font-size:10px;font-weight:initial;opacity:.75;padding-left:5px}.jw-settings-content-item{position:relative;color:rgba(255,255,255,.8);cursor:pointer;font-size:12px;line-height:1;padding:7px 0 7px 15px;width:100%;text-align:left;outline:0}.jw-settings-content-item:hover{color:#fff}.jw-settings-content-item:focus{font-weight:700}.jw-flag-small-player .jw-settings-content-item{line-height:1.75}.jw-settings-content-item.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-settings-item-active{font-weight:700;position:relative}.jw-settings-item-active::before{height:100%;width:1em;align-items:center;content:"\\2022";display:inline-flex;justify-content:center}.jw-breakpoint-2 .jw-settings-open .jw-display-container,.jw-flag-small-player .jw-settings-open .jw-display-container,.jw-flag-touch .jw-settings-open .jw-display-container{display:none}.jw-breakpoint-2 .jw-settings-open.jw-controls,.jw-flag-small-player .jw-settings-open.jw-controls,.jw-flag-touch .jw-settings-open.jw-controls{z-index:1}.jw-flag-small-player .jw-settings-open .jw-controlbar{display:none}.jw-settings-open .jw-icon-settings::after{opacity:1}.jw-settings-open .jw-tooltip-settings{display:none}.jw-sharing-link{cursor:pointer}.jw-shortcuts-container .jw-switch{position:relative;display:flex;align-items:center;transition:ease-out .15s;transition-property:opacity,background;border-radius:18px;width:80px;height:20px;padding:10px;background:rgba(80,80,80,.8);cursor:pointer;font-size:inherit;vertical-align:middle;outline:0}.jw-shortcuts-container .jw-switch.jw-tab-focus{border:solid 2px #4d90fe}.jw-shortcuts-container .jw-switch .jw-switch-knob{position:absolute;left:1px;transition:ease-out .15s;box-shadow:0 0 10px rgba(0,0,0,.4);border-radius:13px;width:15px;height:15px;background:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled,.jw-shortcuts-container .jw-switch .jw-switch-enabled{position:absolute;transition:inherit;color:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled{right:8px}.jw-shortcuts-container .jw-switch .jw-switch-enabled{left:8px;opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true]{background:#475470}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-disabled{opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-enabled{opacity:1}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-knob{left:60px}.jw-idle-icon-text{display:none;line-height:1;position:absolute;text-align:center;text-indent:.35em;top:100%;white-space:nowrap;left:50%;transform:translateX(-50%)}.jw-idle-label{border-radius:50%;color:#fff;filter:drop-shadow(1px 1px 5px rgba(12, 26, 71, .25));font:400 16px/1 Arial,Helvetica,sans-serif;position:relative;transition:background-color 150ms cubic-bezier(0,.25,.25,1);transition-property:background-color,filter;-webkit-font-smoothing:antialiased}.jw-state-idle .jw-icon-display.jw-idle-label .jw-idle-icon-text{display:block}.jw-state-idle .jw-icon-display.jw-idle-label .jw-svg-icon-play{transform:scale(.7,.7)}.jw-breakpoint--1.jw-state-idle .jw-icon-display.jw-idle-label,.jw-breakpoint-0.jw-state-idle .jw-icon-display.jw-idle-label{font-size:12px}@supports (filter:drop-shadow(0 0 3px #000)){.jwplayer.jw-ab-drop-shadow .jw-controls .jw-icon.jw-text,.jwplayer.jw-ab-drop-shadow .jw-controls .jw-svg-icon,.jwplayer.jw-ab-drop-shadow .jw-slider-container .jw-rail,.jwplayer.jw-ab-drop-shadow .jw-title{text-shadow:none;box-shadow:none;filter:drop-shadow(0 2px 3px rgba(0, 0, 0, .3))}.jwplayer.jw-ab-drop-shadow .jw-button-color{opacity:.8;transition-property:color,opacity}.jwplayer.jw-ab-drop-shadow .jw-button-color:not(:hover){color:#fff;opacity:.8}.jwplayer.jw-ab-drop-shadow .jw-button-color:hover{opacity:1}.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.00787) 10.79%, hsla(0, 0%, 0%, 0.02963) 21.99%, hsla(0, 0%, 0%, 0.0625) 33.34%, hsla(0, 0%, 0%, 0.1037) 44.59%, hsla(0, 0%, 0%, 0.15046) 55.48%, hsla(0, 0%, 0%, 0.2) 65.75%, hsla(0, 0%, 0%, 0.24954) 75.14%, hsla(0, 0%, 0%, 0.2963) 83.41%, hsla(0, 0%, 0%, 0.3375) 90.28%, hsla(0, 0%, 0%, 0.37037) 95.51%, hsla(0, 0%, 0%, 0.39213) 98.83%, hsla(0, 0%, 0%, 0.4));mix-blend-mode:multiply;transition-property:opacity}.jw-state-idle.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0.2), hsla(0, 0%, 0%, 0.19606) 1.17%, hsla(0, 0%, 0%, 0.18519) 4.49%, hsla(0, 0%, 0%, 0.16875) 9.72%, hsla(0, 0%, 0%, 0.14815) 16.59%, hsla(0, 0%, 0%, 0.12477) 24.86%, hsla(0, 0%, 0%, 0.1) 34.25%, hsla(0, 0%, 0%, 0.07523) 44.52%, hsla(0, 0%, 0%, 0.05185) 55.41%, hsla(0, 0%, 0%, 0.03125) 66.66%, hsla(0, 0%, 0%, 0.01481) 78.01%, hsla(0, 0%, 0%, 0.00394) 89.21%, hsla(0, 0%, 0%, 0));background-size:100% 7rem;background-position:50% 0}.jwplayer.jw-ab-drop-shadow.jw-state-idle .jw-controls{background-color:transparent}}.jw-video-thumbnail-container{position:relative;overflow:hidden}.jw-video-thumbnail-container:not(.jw-related-shelf-item-image){height:100%;width:100%}.jw-video-thumbnail-container.jw-video-thumbnail-generated{position:absolute;top:0;left:0}.jw-related-item-content:hover .jw-video-thumbnail-container,.jw-related-shelf-item:hover .jw-video-thumbnail-container,.jw-video-thumbnail-container:hover{cursor:pointer}.jw-related-item-content:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-related-shelf-item:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-video-thumbnail-container:hover .jw-video-thumbnail:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail{position:absolute;top:50%;left:50%;bottom:unset;transform:translate(-50%,-50%);width:100%;height:auto;min-width:100%;min-height:100%;opacity:0;transition:opacity .3s ease;object-fit:cover;background:#000}.jw-related-item-next-up .jw-video-thumbnail-container .jw-video-thumbnail{height:100%;width:auto}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-visible:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-completed{opacity:0}.jw-video-thumbnail-container .jw-video-thumbnail~.jw-svg-icon-play{display:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-shelf-item-aspect{pointer-events:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-item-poster-content{pointer-events:none}.jw-preview{overflow:hidden}.jw-preview .jw-ab-zoom-thumbnail{all:inherit;animation:jw-ab-zoom-thumbnail-animation 10s infinite}@keyframes jw-ab-zoom-thumbnail-animation{0%{transform:scale(1,1)}50%{transform:scale(1.25,1.25)}100%{transform:scale(1,1)}}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-state-idle .jw-controls{background:rgba(0,0,0,.4)}.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon:focus{border:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer{animation:jw-spin 2s linear infinite;display:block}@keyframes jw-spin{100%{transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-pause{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:block}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-controls-backdrop{opacity:0}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-logo-bottom-left,.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio):not(.jw-flag-autostart) .jw-logo-bottom-right{bottom:0}.jwplayer .jw-icon-playback .jw-svg-icon-stop{display:none}.jwplayer.jw-state-complete .jw-svg-icon-pause,.jwplayer.jw-state-error .jw-svg-icon-pause,.jwplayer.jw-state-idle .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-svg-icon-pause{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-complete .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-play{display:none}.jwplayer:not(.jw-state-buffering) .jw-svg-icon-buffer{display:none}.jwplayer:not(.jw-state-complete) .jw-svg-icon-replay{display:none}.jwplayer:not(.jw-state-error) .jw-svg-icon-error{display:none}.jwplayer.jw-state-complete .jw-display .jw-icon-display .jw-svg-icon-replay{display:block}.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-controls{background:rgba(0,0,0,.4);height:100%}.jw-state-idle .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-state-idle .jw-display-icon-next,.jw-state-idle .jw-display-icon-rewind,.jwplayer.jw-state-buffering .jw-display-icon-next,.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display-icon-rewind,body .jw-error .jw-display-icon-next,body .jw-error .jw-display-icon-rewind,body .jwplayer.jw-state-error .jw-display-icon-next,body .jwplayer.jw-state-error .jw-display-icon-rewind{display:none}body .jw-error .jw-icon-display,body .jwplayer.jw-state-error .jw-icon-display{cursor:default}body .jw-error .jw-icon-display .jw-svg-icon-error,body .jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-error{display:block}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-preview{display:none}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title{padding-top:4px}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-primary{width:auto;display:inline-block;padding-right:.5ch}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-secondary{width:auto;display:inline-block;padding-left:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-controlbar,body .jwplayer.jw-state-error .jw-controlbar{display:none}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-settings-menu,body .jwplayer.jw-state-error .jw-settings-menu{height:100%;top:50%;left:50%;transform:translate(-50%,-50%)}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-display,body .jwplayer.jw-state-error .jw-display{padding:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-left,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-right,body .jwplayer.jw-state-error .jw-logo-bottom-left,body .jwplayer.jw-state-error .jw-logo-bottom-right{bottom:0}.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting):not(.jw-flag-play-rejected) .jw-display,.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display{display:none}.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-next,.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-rewind{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-flag-casting:not(.jw-flag-audio-player) .jw-cast{display:block}.jwplayer.jw-flag-casting .jw-captions,.jwplayer.jw-flag-casting .jw-icon-audio-tracks,.jwplayer.jw-flag-casting .jw-icon-fullscreen,.jwplayer.jw-flag-casting .jw-icon-hd{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jw-state-paused.jw-flag-casting:not(.jw-flag-audio-player) .jw-display,.jw-state-playing.jw-flag-casting:not(.jw-flag-audio-player) .jw-display{display:flex}.jwplayer.jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-flag-cast-available .jw-icon-cast{display:flex}.jwplayer.jw-flag-cardboard-available .jw-icon-cardboard{display:flex}.jwplayer.jw-flag-live .jw-display-icon-rewind{visibility:hidden}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-live .jw-controlbar .jw-overlay:after{display:none}.jwplayer.jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-live .jw-text-duration,.jwplayer.jw-flag-live .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-text-live{cursor:default}.jwplayer.jw-flag-live .jw-text-live:hover{color:rgba(255,255,255,.8)}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-stop,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-stop{display:block}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-text-live{height:24px;width:auto;align-items:center;border-radius:1px;color:rgba(255,255,255,.8);display:flex;font-size:12px;font-weight:700;margin-right:10px;padding:0 1ch;text-rendering:geometricPrecision;text-transform:uppercase;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:box-shadow,color}.jw-text-live::before{height:8px;width:8px;background-color:currentColor;border-radius:50%;margin-right:6px;opacity:1;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-text-live.jw-dvr-live{box-shadow:inset 0 0 0 2px currentColor}.jw-text-live.jw-dvr-live::before{opacity:.5}.jw-text-live.jw-dvr-live:hover{color:#fff}.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-controls-hidden .jw-plugin{bottom:.5em}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{transform:translateY(66px)}.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{transform:translateY(4.25em)}.jw-flag-controls-hidden .jw-controlbar,.jw-flag-controls-hidden .jw-display{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-controls-hidden .jw-controls-backdrop{opacity:0}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{transform:translateY(66px)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{transform:translateY(4.25em)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-controls-hidden) .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-display{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-ads) .jw-autostart-mute{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-state-idle .jw-nextup-container{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-text-duration,.jwplayer.jw-flag-ads .jw-text-elapsed{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-display,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-rewind{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player.jw-state-buffering .jw-display-icon-display{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time{height:auto;padding:0;pointer-events:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-slider-container{height:5px}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-buffer,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-cue,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-icon-settings,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-knob,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-rail{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-progress{transform:none;top:auto}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline:not(.jw-icon-playback):not(.jw-icon-fullscreen):not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip:not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-tooltip{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-volume-tip{padding:13px 0}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-ads .jw-fullscreen-ima{display:none}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart .jw-controls .jw-controlbar{display:flex;pointer-events:all;visibility:visible;opacity:1}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart.jw-flag-user-inactive .jw-controls-backdrop,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-user-inactive .jw-controls-backdrop{opacity:1;background-size:100% 60px}.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls{background:0 0}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls::after{content:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls,.jwplayer.jw-flag-ads-hide-controls .jw-controls-backdrop{display:none!important}.jw-flag-overlay-open-related .jw-controls,.jw-flag-overlay-open-related .jw-logo,.jw-flag-overlay-open-related .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container{bottom:4.25em}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:flex}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display{display:none}.jw-flag-audio-player{background-color:#000}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-audio-player:not(.jw-flag-live) .jw-spacer{display:none}.jw-flag-audio-player .jw-display,.jw-flag-audio-player .jw-nextup-container,.jw-flag-audio-player .jw-preview,.jw-flag-audio-player .jw-title{display:none}.jw-flag-audio-player .jw-controlbar{position:relative}.jw-flag-audio-player .jw-controlbar .jw-button-container{padding-right:3px;padding-left:0;justify-content:flex-start}.jw-flag-audio-player .jw-controlbar .jw-icon-inline,.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-airplay,.jw-flag-audio-player .jw-controlbar .jw-icon-cast,.jw-flag-audio-player .jw-controlbar .jw-icon-next,.jw-flag-audio-player .jw-controlbar .jw-icon-playback,.jw-flag-audio-player .jw-controlbar .jw-icon-rewind,.jw-flag-audio-player .jw-controlbar .jw-icon-volume,.jw-flag-audio-player .jw-controlbar .jw-logo-button,.jw-flag-audio-player .jw-controlbar .jw-text-duration,.jw-flag-audio-player .jw-controlbar .jw-text-elapsed,.jw-flag-audio-player .jw-controlbar .jw-text-live{display:flex;flex:0 0 auto}.jw-flag-audio-player .jw-controlbar .jw-text-countdown,.jw-flag-audio-player .jw-controlbar .jw-text-duration{padding-right:10px}.jw-flag-audio-player .jw-controlbar .jw-chapter-slider-time,.jw-flag-audio-player .jw-controlbar .jw-slider-time{flex:0 1 auto;align-items:center;display:flex;order:1}.jw-flag-audio-player .jw-controlbar .jw-icon-volume{margin-right:0;transition:margin-right 150ms cubic-bezier(0,.25,.25,1)}.jw-flag-audio-player .jw-controlbar .jw-icon-volume .jw-overlay{display:none}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container~.jw-chapter-slider-time,.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container~.jw-slider-time{transition:opacity .3s,width .3s}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container.jw-open~.jw-chapter-slider-time,.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container.jw-open~.jw-slider-time{flex:1 1 auto;width:auto}.jw-flag-audio-player .jw-controlbar .jw-slider-volume~.jw-icon-volume{margin-right:140px}.jw-flag-audio-player.jw-breakpoint-1 .jw-horizontal-volume-container.jw-open~.jw-chapter-slider-time,.jw-flag-audio-player.jw-breakpoint-1 .jw-horizontal-volume-container.jw-open~.jw-slider-time,.jw-flag-audio-player.jw-breakpoint-2 .jw-horizontal-volume-container.jw-open~.jw-chapter-slider-time,.jw-flag-audio-player.jw-breakpoint-2 .jw-horizontal-volume-container.jw-open~.jw-slider-time{opacity:0}.jw-flag-audio-player.jw-flag-small-player .jw-text-duration,.jw-flag-audio-player.jw-flag-small-player .jw-text-elapsed{display:none}.jw-flag-audio-player.jw-flag-ads .jw-chapter-slider-time,.jw-flag-audio-player.jw-flag-ads .jw-slider-time{display:none}.jw-hidden{display:none}', ""]);
            const l = a
        },
        5670: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => l
            });
            var n = i(8081),
                s = i.n(n),
                o = i(3645),
                a = i.n(o)()(s());
            a.push([t.id, "._stretch{height:100%;width:100%}.jw-tizen-app:not(.jw-state-buffering) .jw-display{display:none}.jw-tizen-app.jw-state-buffering .jw-tizen-controlbar{display:none}.jw-tizen-app.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer{animation:none}.jw-tizen-app.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer path{display:none}.jw-tizen-app.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer circle{fill:transparent;stroke:#fff;stroke-width:13;stroke-dasharray:471}.jw-tizen-app.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer .jw-tizen-buffer-draw{animation:jw-draw 1.5s ease-in-out infinite}.jw-tizen-app.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer .jw-tizen-buffer-erase{animation:jw-erase 1.5s ease-in-out infinite}@keyframes jw-draw{0%{stroke-dashoffset:0}100%,50%{stroke-dashoffset:471}}@keyframes jw-erase{0%,50%{stroke-dashoffset:-471}100%{stroke-dashoffset:0}}.jw-tizen-app.jw-state-paused.jw-flag-user-inactive:not(.jw-flag-seek) .jw-pause-display{display:initial}.jw-tizen-app.jw-breakpoint-7 .jw-skip{font-size:40px}.jw-tizen-app .jw-skip{font-size:20px}.jw-tizen-app.jw-flag-ads .jw-skip{justify-content:center;right:10%;height:2.5em;bottom:11.5%;background-color:transparent;border-color:#fff;border-width:medium;will-change:opacity}.jw-tizen-app.jw-flag-ads .jw-skip.jw-active,.jw-tizen-app.jw-flag-ads .jw-skip:focus{box-shadow:0 0 .25em .38em rgba(255,255,255,.3)}.jw-tizen-app.jw-flag-ads .jw-skip .jw-skip-icon{display:flex;justify-content:center;height:3.6em;width:3.6em}.jw-tizen-app.jw-flag-ads .jw-skip .jw-svg-icon{height:2em;width:2em}.jw-tizen-app.jw-flag-ads .jw-tizen-controlbar .jw-top-container{display:none}.jw-tizen-app.jw-flag-ads .jw-tizen-controlbar .jw-bottom-container .jw-slider-time{display:none}.jw-tizen-app.jw-flag-ads .jw-tizen-controlbar .jw-bottom-container .jw-text-alt{font-weight:400}.jw-tizen-app .jw-svg-icon{filter:drop-shadow(0 0 15px #fff)}.jw-tizen-app .jw-icon-back .jw-svg-icon{height:20px;width:20px}.jw-tizen-app.jw-breakpoint-7 .jw-svg-icon{height:75px;width:75px}.jw-tizen-app.jw-breakpoint-7 .jw-icon-back .jw-svg-icon{height:60px;width:60px}.jw-tizen-app.jw-breakpoint-7 .jw-icon{height:130px;width:130px;justify-content:center}.jw-tizen-app.jw-breakpoint-7 .jw-nextup-container{font-size:50px}.jw-tizen-app .jw-nextup-container{padding:8% 6.25%;font-size:20px}.jw-tizen-app .jw-nextup-container .jw-nextup{max-width:40.18%;background:rgba(0,0,0,.3);box-shadow:none}.jw-tizen-app .jw-nextup-container .jw-nextup-tooltip{height:4em}.jw-tizen-app .jw-nextup-container .jw-nextup-thumbnail{width:44.44%}.jw-tizen-app .jw-nextup-container .jw-nextup-body{padding-left:5.93%}.jw-tizen-app .jw-nextup-container .jw-nextup-header{font-size:1em}.jw-tizen-app .jw-nextup-container .jw-nextup-title{font-size:.8em;font-weight:400}.jw-tizen-app .jw-nextup-container .jw-nextup-close{display:none}.jw-tizen-app .jw-nextup-container .jw-nextup-duration{display:none}.jw-tizen-app.jw-breakpoint-7 .jw-pause-display-container{font-size:80px}.jw-tizen-app .jw-pause-display-container{font-size:26px}.jw-tizen-app .jw-tizen-controls{height:100%}.jw-tizen-app .jw-tizen-controls .jw-pause-display{height:100%;width:100%;position:absolute;background:rgba(0,0,0,.4);z-index:2;display:none}.jw-tizen-app .jw-tizen-controls .jw-pause-display .jw-pause-display-container{position:absolute;bottom:0;left:0;padding:0 6.25% 15%;width:100%}.jw-tizen-app .jw-tizen-controls .jw-pause-display .jw-pause-display-container .jw-pause-title{font-size:1em;font-weight:700;width:90%;color:rgba(255,255,255,.9);padding-bottom:1.85%}.jw-tizen-app .jw-tizen-controls .jw-pause-display .jw-pause-display-container .jw-pause-description{font-size:.5em;width:60%;color:rgba(255,255,255,.8);font-weight:400}.jw-tizen-controlbar{font-size:20px}.jw-tizen-app:not(.jw-flag-audio-player) .jw-tizen-controlbar{max-height:initial}.jw-breakpoint-7 .jw-tizen-controlbar{font-size:40px}.jw-tizen-app .jw-tizen-controls{will-change:opacity}.jw-tizen-app .jw-tizen-controlbar{align-items:center;justify-content:center;padding:6% 6.25%;height:100%}.jw-tizen-app .jw-tizen-controlbar .jw-button-container{display:none}.jw-tizen-app .jw-tizen-controlbar .jw-top-container{display:flex;flex-flow:row wrap;position:absolute;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;left:0;top:0;padding:inherit}.jw-tizen-app .jw-tizen-controlbar .jw-bottom-container{display:flex;flex-flow:row wrap;position:absolute;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;left:0;bottom:0;padding:inherit;align-items:center}.jw-tizen-app .jw-tizen-controlbar .jw-bottom-container.jw-hidden{display:none}.jw-tizen-app .jw-tizen-controlbar .jw-text{font-size:1em;font-weight:700}.jw-tizen-app .jw-tizen-controlbar .jw-text-countdown{display:flex}.jw-tizen-app .jw-tizen-controlbar .jw-slider-time{height:initial;width:initial;flex-grow:1;padding:0}.jw-tizen-app .jw-tizen-controlbar .jw-slider-time .jw-slider-container{height:.38em}.jw-tizen-app .jw-tizen-controlbar .jw-active .jw-tooltip.jw-open{margin-top:15px}.jw-tizen-app .jw-tizen-controlbar .jw-tooltip{box-shadow:none;top:100%;visibility:hidden;background-color:initial}.jw-tizen-app .jw-tizen-controlbar .jw-tooltip .jw-text{font-size:.75em;background-color:inherit;color:rgba(255,255,255,.9);padding-top:.25em}.jw-tizen-app .jw-tizen-controlbar .jw-tooltip::after{content:initial}.jw-tizen-app .jw-tizen-controlbar .jw-tooltip.jw-open{transition-delay:0s;visibility:visible}.jw-tizen-app .jw-tizen-controlbar .jw-text-live{font-size:1em;width:auto}.jw-tizen-app .jw-tizen-controlbar .jw-text-live:before{height:.5em;width:.5em;margin-right:.38em}.jw-tizen-app .jw-controls-backdrop{background:linear-gradient(to bottom,rgba(0,0,0,.4) 0,transparent 35%,transparent 65%,rgba(0,0,0,.4) 100%)}.jw-tizen-app .jw-icon.jw-button-color.jw-active,.jw-tizen-app .jw-icon.jw-button-color:focus{border-radius:50%;background-color:rgba(255,255,255,.2);color:#fff;border:none}.jw-tizen-app .jw-icon.jw-button-color.jw-active .jw-tooltip,.jw-tizen-app .jw-icon.jw-button-color:focus .jw-tooltip{visibility:visible;opacity:1}.jw-tizen-app video::-webkit-media-text-track-container{max-height:90%}.jw-tizen-app.jwplayer.jw-flag-media-audio.jw-state-playing video::-webkit-media-text-track-container,.jw-tizen-app.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden) video::-webkit-media-text-track-container,.jw-tizen-app.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing) video::-webkit-media-text-track-container{max-height:75%}.jw-flag-seek .jw-icon-back,.jw-flag-seek .jw-icon-playback,.jw-flag-seek .jw-icon-settings{visibility:hidden}.jw-flag-seek .jw-seekbar-thumbnails.jw-open{display:flex}.jw-seekbar-thumbnails{position:absolute;display:none;justify-content:center;width:100%;left:0;bottom:0;padding-bottom:12%}.jw-seekbar-thumbnails .jw-seekbar-thumb.jw-active{border:#fff;border-style:solid;border-width:thick}.jw-tooltip-time .jw-overlay{top:0;left:0}.jw-tooltip-time .jw-overlay .jw-time-tip .jw-text{min-height:initial}.jw-tizen-app.jw-breakpoint-7 .jw-settings-content-item,.jw-tizen-app.jw-breakpoint-7 .jw-settings-submenu-items,.jw-tizen-app.jw-breakpoint-7 .jw-settings-topbar-text{font-size:36px}.jw-tizen-app .jw-settings-content-item,.jw-tizen-app .jw-settings-submenu-items,.jw-tizen-app .jw-settings-topbar-text{font-size:20px}.jw-settings-menu-tizen{display:none;flex-direction:column;height:100%;position:absolute;margin-left:auto;width:38%;bottom:0;padding-top:0;background:rgba(0,0,0,.8);z-index:1;color:#fff}.jw-settings-menu-tizen.jw-settings-open{display:flex}.jw-settings-menu-tizen.jw-settings-transition-close{animation:jw-transition-out .3s ease forwards}.jw-settings-menu-tizen.jw-settings-transition-open{animation:jw-transition-in .3s ease forwards}.jw-settings-menu-tizen .jw-settings-submenu-tizen{display:flex;flex-direction:column;padding-left:10%;padding-top:10%;padding-right:15%}.jw-settings-menu-tizen .jw-settings-item-active::before{font-size:1.333em}.jw-settings-menu-tizen .jw-settings-topbar-text{font-weight:700}.jw-settings-menu-tizen .jw-settings-content-item{font-weight:400;padding:.29em 1.555em;margin-top:.417em}.jw-settings-menu-tizen .jw-settings-content-item:focus{border:solid .138em #fff;color:#fff;margin:-.138em;background:#fff36;border-radius:.083em;margin-top:.279em}.jw-settings-menu-tizen .jw-settings-submenu-items{padding-top:.5em}@keyframes jw-transition-in{from{right:-100%}to{right:0}}@keyframes jw-transition-out{from{right:0}to{right:-100%}}", ""]);
            const l = a
        },
        8406: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => l
            });
            var n = i(8081),
                s = i.n(n),
                o = i(3645),
                a = i.n(o)()(s());
            a.push([t.id, '.jw-settings-content-item .jw-svg-icon{margin-right:1em;height:16px;width:16px;padding:0}.jw-settings-content-item .jw-tooltip{bottom:12px;left:50px;width:60px}.jw-settings-content-item .jw-tooltip.jw-open{transition:none}.jw-sharing-link{display:flex;align-items:center;line-height:16px;text-transform:capitalize}.jw-sharing-link:focus,.jw-sharing-link:hover{text-decoration:none}.jw-sharing-copy:after{background-color:#fff;border-radius:50px;bottom:20px;color:#000;content:"Copied";display:block;font-size:13px;font-weight:700;opacity:0;margin-left:-25px;left:50%;position:absolute;text-align:center;transform:translateY(10px);transition:all .2s ease-in-out;visibility:hidden;width:60px}.jw-sharing-copy-textarea-copied:after{opacity:1;transform:translateY(0);visibility:visible}.jw-sharing-copy .jw-sharing-link{padding:0}.jw-sharing-copy .jw-sharing-link:focus,.jw-sharing-copy .jw-sharing-link:hover{color:#fff}.jw-sharing-copy:focus,.jw-sharing-link:focus{outline:0}.jw-sharing-copy:active,.jw-sharing-link:active{color:#fff;font-weight:700}.jw-sharing-textarea{display:flex;opacity:0;height:1px;cursor:pointer}', ""]);
            const l = a
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
                }, e.i = function(t, i, n, s, o) {
                    "string" == typeof t && (t = [
                        [null, t, void 0]
                    ]);
                    var a = {};
                    if (n)
                        for (var l = 0; l < this.length; l++) {
                            var r = this[l][0];
                            null != r && (a[r] = !0)
                        }
                    for (var c = 0; c < t.length; c++) {
                        var p = [].concat(t[c]);
                        n && a[p[0]] || (void 0 !== o && (void 0 === p[5] || (p[1] = "@layer".concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {").concat(p[1], "}")), p[5] = o), i && (p[2] ? (p[1] = "@media ".concat(p[2], " {").concat(p[1], "}"), p[2] = i) : p[2] = i), s && (p[4] ? (p[1] = "@supports (".concat(p[4], ") {").concat(p[1], "}"), p[4] = s) : p[4] = "".concat(s)), e.push(p))
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
        1334: () => {
            ! function() {
                if ("undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof HTMLElement) {
                    var t = !1;
                    try {
                        var e = document.createElement("div");
                        e.addEventListener("focus", (function(t) {
                            t.preventDefault(), t.stopPropagation()
                        }), !0), e.focus(Object.defineProperty({}, "preventScroll", {
                            get: function() {
                                t = !0
                            }
                        }))
                    } catch (t) {}
                    if (void 0 === HTMLElement.prototype.nativeFocus && !t) {
                        HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
                        var i = function(t) {
                            for (var e = 0; e < t.length; e++) t[e][0].scrollTop = t[e][1], t[e][0].scrollLeft = t[e][2];
                            t = []
                        };
                        HTMLElement.prototype.focus = function(t) {
                            if (t && t.preventScroll) {
                                var e = function(t) {
                                    for (var e = t.parentNode, i = [], n = document.scrollingElement || document.documentElement; e && e !== n;)(e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && i.push([e, e.scrollTop, e.scrollLeft]), e = e.parentNode;
                                    return e = n, i.push([e, e.scrollTop, e.scrollLeft]), i
                                }(this);
                                this.nativeFocus(), "function" == typeof setTimeout ? setTimeout((function() {
                                    i(e)
                                }), 0) : i(e)
                            } else this.nativeFocus()
                        }
                    }
                }
            }()
        },
        9725: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => m
            });
            var n = i(3379),
                s = i.n(n),
                o = i(7795),
                a = i.n(o),
                l = i(569),
                r = i.n(l),
                c = i(3565),
                p = i.n(c),
                w = i(9216),
                h = i.n(w),
                d = i(4589),
                u = i.n(d),
                j = i(4542),
                g = {};
            g.styleTagTransform = u(), g.setAttributes = p(), g.insert = r().bind(null, "head"), g.domAPI = a(), g.insertStyleElement = h();
            s()(j.Z, g);
            const m = j.Z && j.Z.locals ? j.Z.locals : void 0
        },
        4779: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => m
            });
            var n = i(3379),
                s = i.n(n),
                o = i(7795),
                a = i.n(o),
                l = i(569),
                r = i.n(l),
                c = i(3565),
                p = i.n(c),
                w = i(9216),
                h = i.n(w),
                d = i(4589),
                u = i.n(d),
                j = i(5670),
                g = {};
            g.styleTagTransform = u(), g.setAttributes = p(), g.insert = r().bind(null, "head"), g.domAPI = a(), g.insertStyleElement = h();
            s()(j.Z, g);
            const m = j.Z && j.Z.locals ? j.Z.locals : void 0
        },
        3484: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => m
            });
            var n = i(3379),
                s = i.n(n),
                o = i(7795),
                a = i.n(o),
                l = i(569),
                r = i.n(l),
                c = i(3565),
                p = i.n(c),
                w = i(9216),
                h = i.n(w),
                d = i(4589),
                u = i.n(d),
                j = i(8406),
                g = {};
            g.styleTagTransform = u(), g.setAttributes = p(), g.insert = r().bind(null, "head"), g.domAPI = a(), g.insertStyleElement = h();
            s()(j.Z, g);
            const m = j.Z && j.Z.locals ? j.Z.locals : void 0
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
                for (var o = {}, a = [], l = 0; l < t.length; l++) {
                    var r = t[l],
                        c = n.base ? r[0] + n.base : r[0],
                        p = o[c] || 0,
                        w = "".concat(c, " ").concat(p);
                    o[c] = p + 1;
                    var h = i(w),
                        d = {
                            css: r[1],
                            media: r[2],
                            sourceMap: r[3],
                            supports: r[4],
                            layer: r[5]
                        };
                    if (-1 !== h) e[h].references++, e[h].updater(d);
                    else {
                        var u = s(d, n);
                        n.byIndex = l, e.splice(l, 0, {
                            identifier: w,
                            updater: u,
                            references: 1
                        })
                    }
                    a.push(w)
                }
                return a
            }

            function s(t, e) {
                var i = e.domAPI(e);
                i.update(t);
                return function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
                        i.update(t = e)
                    } else i.remove()
                }
            }
            t.exports = function(t, s) {
                var o = n(t = t || [], s = s || {});
                return function(t) {
                    t = t || [];
                    for (var a = 0; a < o.length; a++) {
                        var l = i(o[a]);
                        e[l].references--
                    }
                    for (var r = n(t, s), c = 0; c < o.length; c++) {
                        var p = i(o[c]);
                        0 === e[p].references && (e[p].updater(), e.splice(p, 1))
                    }
                    o = r
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
                            var s = void 0 !== i.layer;
                            s && (n += "@layer".concat(i.layer.length > 0 ? " ".concat(i.layer) : "", " {")), n += i.css, s && (n += "}"), i.media && (n += "}"), i.supports && (n += "}");
                            var o = i.sourceMap;
                            o && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleTagTransform(n, t, e.options)
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
        3207: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-off" viewBox="0 0 240 240" focusable="false"><path d="M210,55v100h-50l20,20h45c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V40c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0H15c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v130c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h45l20-20H30V55H210 M60,205l60-70l60,70H60L60,205z"></path></svg>'
        },
        4851: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-on" viewBox="0 0 240 240" focusable="false"><path d="M229.9,40v130c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0h-44l-17-20h46V55H30v100h47l-17,20h-45c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V40c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h209.8c2.6-0.2,4.8,1.8,5,4.4C229.9,39.7,229.9,39.9,229.9,40z M104.9,122l15-18l15,18l11,13h44V75H50v60h44L104.9,122z M179.9,205l-60-70l-60,70H179.9z"></path></svg>'
        },
        7938: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-left" viewBox="0 0 240 240" focusable="false"><path d="M55.4,104.4c-1.1,1.1-2.2,2.3-3.1,3.6c-6.9,9.9-4.4,23.5,5.5,30.4L159.7,240l33.9-33.9l-84.9-84.9l84.9-84.9L157.3,0L55.4,104.4L55.4,104.4z"></path></svg>'
        },
        4060: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-right" viewBox="0 0 240 240" focusable="false"><path d="M183.6,104.4L81.8,0L45.4,36.3l84.9,84.9l-84.9,84.9L79.3,240l101.9-101.7c9.9-6.9,12.4-20.4,5.5-30.4C185.8,106.7,184.8,105.4,183.6,104.4L183.6,104.4z"></path></svg>'
        },
        6038: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-audio-tracks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M35,34h160v20H35V34z M35,94h160V74H35V94z M35,134h60v-20H35V134z M160,114c-23.4-1.3-43.6,16.5-45,40v50h20c5.2,0.3,9.7-3.6,10-8.9c0-0.4,0-0.7,0-1.1v-20c0.3-5.2-3.6-9.7-8.9-10c-0.4,0-0.7,0-1.1,0h-10v-10c1.5-17.9,17.1-31.3,35-30c17.9-1.3,33.6,12.1,35,30v10H185c-5.2-0.3-9.7,3.6-10,8.9c0,0.4,0,0.7,0,1.1v20c-0.3,5.2,3.6,9.7,8.9,10c0.4,0,0.7,0,1.1,0h20v-50C203.5,130.6,183.4,112.7,160,114z"></path></svg>'
        },
        147: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-buffer" viewBox="0 0 240 240" focusable="false"><path d="M120,186.667a66.667,66.667,0,0,1,0-133.333V40a80,80,0,1,0,80,80H186.667A66.846,66.846,0,0,1,120,186.667Z"></path></svg>'
        },
        7766: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-off" viewBox="0 0 240 240" focusable="false"><path d="M99.4,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C107.9,100,103.8,97.8,99.4,97.8z M144.1,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C152.6,100,148.5,97.8,144.1,97.8L144.1,97.8z M200,60v120H40V60H200 M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z"></path></svg>'
        },
        5806: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-on" viewBox="0 0 240 240" focusable="false"><path d="M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z M108.1,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C90.4,141.7,102,143.5,108.1,137.7z M152.9,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C135.2,141.7,146.8,143.5,152.9,137.7z"></path></svg>'
        },
        9863: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-close" viewBox="0 0 240 240" focusable="false"><path d="M134.8,120l48.6-48.6c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2l-7.4-7.4c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L120,105.2L71.4,56.6c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L56.6,64c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l48.6,48.7l-48.6,48.6c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l7.4,7.4c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l48.7-48.6l48.6,48.6c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l7.4-7.4c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2L134.8,120z"></path></svg>'
        },
        2494: t => {
            t.exports = '<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-floating-close" focusable="false"><path d="M7.41499 5.00001L10.705 1.70501C10.8688 1.51371 10.9544 1.26763 10.9447 1.01595C10.935 0.764278 10.8307 0.525539 10.6526 0.347444C10.4745 0.16935 10.2357 0.0650171 9.98405 0.055296C9.73237 0.0455748 9.48629 0.131181 9.29499 0.295007L5.99999 3.58501L2.70499 0.295007C2.51369 0.131181 2.26762 0.0455748 2.01594 0.055296C1.76426 0.0650171 1.52552 0.16935 1.34743 0.347444C1.16934 0.525539 1.065 0.764278 1.05528 1.01595C1.04556 1.26763 1.13117 1.51371 1.29499 1.70501L4.58499 5.00001L1.29499 8.29501C1.19031 8.38466 1.10529 8.49497 1.04527 8.61904C0.985244 8.7431 0.951515 8.87824 0.946195 9.01596C0.940876 9.15367 0.964081 9.29101 1.01436 9.41933C1.06463 9.54766 1.14089 9.6642 1.23834 9.76166C1.3358 9.85911 1.45235 9.93537 1.58067 9.98565C1.709 10.0359 1.84633 10.0591 1.98405 10.0538C2.12177 10.0485 2.2569 10.0148 2.38096 9.95473C2.50503 9.89471 2.61535 9.80969 2.70499 9.70501L5.99999 6.41501L9.29499 9.70501C9.48629 9.86884 9.73237 9.95444 9.98405 9.94472C10.2357 9.935 10.4745 9.83067 10.6526 9.65257C10.8307 9.47448 10.935 9.23574 10.9447 8.98406C10.9544 8.73239 10.8688 8.48631 10.705 8.29501L7.41499 5.00001Z" fill="white" fill-opacity="0.8"></path></svg>'
        },
        7459: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-off" viewBox="0 0 240 240" focusable="false"><path d="M109.2,134.9l-8.4,50.1c-0.4,2.7-2.4,3.3-4.4,1.4L82,172l-27.9,27.9l-14.2-14.2l27.9-27.9l-14.4-14.4c-1.9-1.9-1.3-3.9,1.4-4.4l50.1-8.4c1.8-0.5,3.6,0.6,4.1,2.4C109.4,133.7,109.4,134.3,109.2,134.9L109.2,134.9z M172.1,82.1L200,54.2L185.8,40l-27.9,27.9l-14.4-14.4c-1.9-1.9-3.9-1.3-4.4,1.4l-8.4,50.1c-0.5,1.8,0.6,3.6,2.4,4.1c0.5,0.2,1.2,0.2,1.7,0l50.1-8.4c2.7-0.4,3.3-2.4,1.4-4.4L172.1,82.1z"></path></svg>'
        },
        4606: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-on" viewBox="0 0 240 240" focusable="false"><path d="M96.3,186.1c1.9,1.9,1.3,4-1.4,4.4l-50.6,8.4c-1.8,0.5-3.7-0.6-4.2-2.4c-0.2-0.6-0.2-1.2,0-1.7l8.4-50.6c0.4-2.7,2.4-3.4,4.4-1.4l14.5,14.5l28.2-28.2l14.3,14.3l-28.2,28.2L96.3,186.1z M195.8,39.1l-50.6,8.4c-2.7,0.4-3.4,2.4-1.4,4.4l14.5,14.5l-28.2,28.2l14.3,14.3l28.2-28.2l14.5,14.5c1.9,1.9,4,1.3,4.4-1.4l8.4-50.6c0.5-1.8-0.6-3.6-2.4-4.2C197,39,196.4,39,195.8,39.1L195.8,39.1z"></path></svg>'
        },
        8675: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-jwplayer-logo" viewBox="0 0 992 1024" focusable="false"><path d="M144 518.4c0 6.4-6.4 6.4-6.4 0l-3.2-12.8c0 0-6.4-19.2-12.8-38.4 0-6.4-6.4-12.8-9.6-22.4-6.4-6.4-16-9.6-28.8-6.4-9.6 3.2-16 12.8-16 22.4s0 16 0 25.6c3.2 25.6 22.4 121.6 32 140.8 9.6 22.4 35.2 32 54.4 22.4 22.4-9.6 28.8-35.2 38.4-54.4 9.6-25.6 60.8-166.4 60.8-166.4 6.4-12.8 9.6-12.8 9.6 0 0 0 0 140.8-3.2 204.8 0 25.6 0 67.2 9.6 89.6 6.4 16 12.8 28.8 25.6 38.4s28.8 12.8 44.8 12.8c6.4 0 16-3.2 22.4-6.4 9.6-6.4 16-12.8 25.6-22.4 16-19.2 28.8-44.8 38.4-64 25.6-51.2 89.6-201.6 89.6-201.6 6.4-12.8 9.6-12.8 9.6 0 0 0-9.6 256-9.6 355.2 0 25.6 6.4 48 12.8 70.4 9.6 22.4 22.4 38.4 44.8 48s48 9.6 70.4-3.2c16-9.6 28.8-25.6 38.4-38.4 12.8-22.4 25.6-48 32-70.4 19.2-51.2 35.2-102.4 51.2-153.6s153.6-540.8 163.2-582.4c0-6.4 0-9.6 0-12.8 0-9.6-6.4-19.2-16-22.4-16-6.4-32 0-38.4 12.8-6.4 16-195.2 470.4-195.2 470.4-6.4 12.8-9.6 12.8-9.6 0 0 0 0-156.8 0-288 0-70.4-35.2-108.8-83.2-118.4-22.4-3.2-44.8 0-67.2 12.8s-35.2 32-48 54.4c-16 28.8-105.6 297.6-105.6 297.6-6.4 12.8-9.6 12.8-9.6 0 0 0-3.2-115.2-6.4-144-3.2-41.6-12.8-108.8-67.2-115.2-51.2-3.2-73.6 57.6-86.4 99.2-9.6 25.6-51.2 163.2-51.2 163.2v3.2z"></path></svg>'
        },
        6641: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-next" viewBox="0 0 240 240" focusable="false"><path d="M165,60v53.3L59.2,42.8C56.9,41.3,55,42.3,55,45v150c0,2.7,1.9,3.8,4.2,2.2L165,126.6v53.3h20v-120L165,60L165,60z"></path></svg>'
        },
        2521: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-pause" viewBox="0 0 240 240" focusable="false"><path d="M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z"></path></svg>'
        },
        5147: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-off" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.75V9.75H22V4.78C22 4.21116 21.5389 3.75 20.97 3.75H2.03C1.46116 3.75 1 4.21113 1 4.78V17.72C1 18.2889 1.46119 18.75 2.03 18.75H12V16.75H3V5.75H20ZM14 13.25C14 12.6977 14.4477 12.25 15 12.25H22C22.5523 12.25 23 12.6977 23 13.25V19.25C23 19.8023 22.5523 20.25 22 20.25H15C14.4477 20.25 14 19.8023 14 19.25V13.25ZM10 9.25L8.20711 11.0429L10.7071 13.5429L9.29289 14.9571L6.79289 12.4571L5 14.25V9.25H10Z"></path></svg>'
        },
        1438: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-on" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.125V9.125H22V4.155C22 3.58616 21.5389 3.125 20.97 3.125H2.03C1.46116 3.125 1 3.58613 1 4.155V17.095C1 17.6639 1.46119 18.125 2.03 18.125H12V16.125H3V5.125H20ZM14 11.875C14 11.3227 14.4477 10.875 15 10.875H22C22.5523 10.875 23 11.3227 23 11.875V17.875C23 18.4273 22.5523 18.875 22 18.875H15C14.4477 18.875 14 18.4273 14 17.875V11.875ZM6 12.375L7.79289 10.5821L5.29288 8.0821L6.7071 6.66788L9.20711 9.16789L11 7.375V12.375H6Z"></path></svg>'
        },
        6084: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-play" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg>'
        },
        4777: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-error" viewBox="0 0 36 36" style="width:100%;height:100%;" focusable="false"><path d="M34.6 20.2L10 33.2 27.6 16l7 3.7a.4.4 0 0 1 .2.5.4.4 0 0 1-.2.2zM33.3 0L21 12.2 9 6c-.2-.3-.6 0-.6.5V25L0 33.6 2.5 36 36 2.7z"></path></svg>'
        },
        4119: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-playback-rate" viewBox="0 0 240 240" focusable="false"><path d="M158.83,48.83A71.17,71.17,0,1,0,230,120,71.163,71.163,0,0,0,158.83,48.83Zm45.293,77.632H152.34V74.708h12.952v38.83h38.83ZM35.878,74.708h38.83V87.66H35.878ZM10,113.538H61.755V126.49H10Zm25.878,38.83h38.83V165.32H35.878Z"></path></svg>'
        },
        5058: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-quality-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M55,200H35c-3,0-5-2-5-4c0,0,0,0,0-1v-30c0-3,2-5,4-5c0,0,0,0,1,0h20c3,0,5,2,5,4c0,0,0,0,0,1v30C60,198,58,200,55,200L55,200z M110,195v-70c0-3-2-5-4-5c0,0,0,0-1,0H85c-3,0-5,2-5,4c0,0,0,0,0,1v70c0,3,2,5,4,5c0,0,0,0,1,0h20C108,200,110,198,110,195L110,195z M160,195V85c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v110c0,3,2,5,4,5c0,0,0,0,1,0h20C158,200,160,198,160,195L160,195z M210,195V45c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v150c0,3,2,5,4,5c0,0,0,0,1,0h20C208,200,210,198,210,195L210,195z"></path></svg>'
        },
        4886: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-replay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M120,41.9v-20c0-5-4-8-8-4l-44,28a5.865,5.865,0,0,0-3.3,7.6A5.943,5.943,0,0,0,68,56.8l43,29c5,4,9,1,9-4v-20a60,60,0,1,1-60,60H40a80,80,0,1,0,80-79.9Z"></path></svg>'
        },
        6207: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-rewind" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z"></path></svg>'
        },
        9992: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M204,145l-25-14c0.8-3.6,1.2-7.3,1-11c0.2-3.7-0.2-7.4-1-11l25-14c2.2-1.6,3.1-4.5,2-7l-16-26c-1.2-2.1-3.8-2.9-6-2l-25,14c-6-4.2-12.3-7.9-19-11V35c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v28c-6.7,3.1-13,6.7-19,11L56,60c-2.2-0.9-4.8-0.1-6,2L35,88c-1.6,2.2-1.3,5.3,0.9,6.9c0,0,0.1,0,0.1,0.1l25,14c-0.8,3.6-1.2,7.3-1,11c-0.2,3.7,0.2,7.4,1,11l-25,14c-2.2,1.6-3.1,4.5-2,7l16,26c1.2,2.1,3.8,2.9,6,2l25-14c5.7,4.6,12.2,8.3,19,11v28c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6v-28c7-2.3,13.5-6,19-11l25,14c2.5,1.3,5.6,0.4,7-2l15-26C206.7,149.4,206,146.7,204,145z M120,149.9c-16.5,0-30-13.4-30-30s13.4-30,30-30s30,13.4,30,30c0.3,16.3-12.6,29.7-28.9,30C120.7,149.9,120.4,149.9,120,149.9z"></path></svg>'
        },
        3498: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M190,185c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H55c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V55c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h130c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V185z"></path></svg>'
        },
        3918: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z"></path></svg>'
        },
        8157: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z"></path><path d="M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z"></path><path d="M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z"></path></svg>'
        },
        3356: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.7,39.1,116.4,39.9,116.4,42.8z M178.2,120c0-22.7-18.5-41.2-41.2-41.2v20.6c11.4,0,20.6,9.2,20.6,20.6c0,11.4-9.2,20.6-20.6,20.6v20.6C159.8,161.2,178.2,142.7,178.2,120z"></path></svg>'
        },
        8053: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-email" viewBox="0 0 160 160" focusable="false"><path d="M147.3,27.9H11.9L10,29.8v97a3.02,3.02,0,0,0,2.8,3.2H146.6a3.02,3.02,0,0,0,3.2-2.8V31C150.5,29.2,149.2,27.9,147.3,27.9ZM125.6,40.7,80.3,77.1,35,40.7Zm12.1,76.6H22.8V47.7l57.5,46,57.5-46-.1,69.6Z"></path></svg>'
        },
        8711: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M137.8,15H22.1A7.127,7.127,0,0,0,15,22.1V137.8a7.28,7.28,0,0,0,7.1,7.2H84.5V95H67.6V75.5H84.5v-15a23.637,23.637,0,0,1,21.3-25.9,28.08,28.08,0,0,1,4.1-.1c7.2,0,13.7.6,14.9.6V52.7H114.4c-8.5,0-9.7,3.9-9.7,9.7V74.7h19.5l-2.6,19.5H104.7v50.7h33.1a7.3,7.3,0,0,0,7.2-7.2V22A7.13,7.13,0,0,0,137.8,15Z"></path></svg>'
        },
        1983: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M135.237,15.006H24.739A9.427,9.427,0,0,0,15,24.107V135.256a9.553,9.553,0,0,0,9.365,9.737h110.9a9.427,9.427,0,0,0,9.737-9.1V24.081A9.461,9.461,0,0,0,135.237,15.006Zm-81.9,110.512H34.476V63.774h19.5v61.744ZM43.576,55.31A10.994,10.994,0,0,1,32.513,44.45v-.2a11.05,11.05,0,0,1,22.1,0A10.537,10.537,0,0,1,44.6,55.283l-.051,0A4.07,4.07,0,0,1,43.576,55.31Zm81.9,70.208h-19.5v-29.9c0-7.164,0-16.265-9.737-16.265s-11.7,7.8-11.7,16.265v29.9h-19.5V63.774h18.2v8.464h0a19.766,19.766,0,0,1,18.2-9.738c19.5,0,23.4,13,23.4,29.266v33.8h.637Z"></path></svg>'
        },
        1277: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-pinterest" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M80,15A65.127,65.127,0,0,0,15,80a66.121,66.121,0,0,0,39,59.8,62.151,62.151,0,0,1,1.3-14.9c1.3-5.2,8.5-35.1,8.5-35.1a26.386,26.386,0,0,1-2-10.4c0-9.7,5.9-16.9,12.4-16.9,5.9,0,8.5,4.5,8.5,9.7a128.456,128.456,0,0,1-5.9,22.7,9.646,9.646,0,0,0,6.6,12,8.105,8.105,0,0,0,3.8.3c12.4,0,20.8-15.6,20.8-34.4,0-14.3-9.7-24.7-27.3-24.7a30.869,30.869,0,0,0-31.8,30v1.2a19.8,19.8,0,0,0,4.5,13,2.586,2.586,0,0,1,.6,3.3c0,1.3-1.3,3.9-1.3,5.2-.6,2-2,2-3.3,2-9.1-3.9-13-13.6-13-24.7,0-18.2,15.6-40.3,46.1-40.3a38.763,38.763,0,0,1,40.9,36.7v.4c0,25.4-14.3,44.9-35.1,44.9A18.163,18.163,0,0,1,72.7,112s-3.9,14.9-4.5,17.6a46.615,46.615,0,0,1-6.5,13.7,79.828,79.828,0,0,0,18.2,1.9A65.1,65.1,0,0,0,80,15Z"></path></svg>'
        },
        7928: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M136.7,60.7a18.265,18.265,0,0,0-11.6,4.1,83.108,83.108,0,0,0-40-11.5l8.1-25.1,21.1,4.7a14.927,14.927,0,1,0,14.9-16.2,15.418,15.418,0,0,0-13.6,8.1L90.5,18.7a3.75,3.75,0,0,0-4.7,2.7h0L77,52.6A93.15,93.15,0,0,0,34.2,64.1,19.471,19.471,0,0,0,23.3,60,19.137,19.137,0,0,0,5,78.3a19.777,19.777,0,0,0,7.5,14.9v4.1a38.88,38.88,0,0,0,20.4,31.9,85.678,85.678,0,0,0,46.8,12.2,93.7,93.7,0,0,0,46.8-12.2,38.741,38.741,0,0,0,20.4-31.9V93.2A18.324,18.324,0,0,0,155,78.3,18.952,18.952,0,0,0,136.7,60.7Zm-7.5-35.3a6.459,6.459,0,0,1,6.8,6v.8a6.744,6.744,0,0,1-6.8,6.8,6.459,6.459,0,0,1-6.8-6v-.8A7.312,7.312,0,0,1,129.2,25.4ZM47.1,89.2A10.2,10.2,0,1,1,57.3,99.4,10.514,10.514,0,0,1,47.1,89.2Zm57,29.8a31.975,31.975,0,0,1-24.4,7.5h0A34.711,34.711,0,0,1,55.3,119a3.821,3.821,0,1,1,5.2-5.6l.2.2a26.476,26.476,0,0,0,19,5.4h0a28.644,28.644,0,0,0,19-5.4,4,4,0,0,1,5.4,0c2,1.3,2,3.4,0,5.4Zm-2-19.7a10.2,10.2,0,1,1,10.2-10.2,10.514,10.514,0,0,1-10.2,10.2Z"></path></svg>'
        },
        5484: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-tumblr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M115.3,131.6a30.935,30.935,0,0,1-22,7.3h-.7c-28,0-34.6-20.6-34.6-32.7v-34H46.7A2.9,2.9,0,0,1,44,69.5h0V54.2a6.2,6.2,0,0,1,2.7-4,30.359,30.359,0,0,0,20-27.3,3.574,3.574,0,0,1,3-4,1.7,1.7,0,0,1,1,0H87.4a2.9,2.9,0,0,1,2.7,2.7V48.3h19.3a3.18,3.18,0,0,1,2.7,2V69.6a2.9,2.9,0,0,1-2.7,2.7H90v31.3a8.709,8.709,0,0,0,7.4,9.9,5.7,5.7,0,0,0,1.3.1,58.63,58.63,0,0,0,7.3-1.3,4.953,4.953,0,0,1,2.7-.7c.7,0,1.3.7,2,2l5.3,15.3C115.3,129.6,116,130.3,115.3,131.6Z"></path></svg>'
        },
        6598: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M56.8,132.5a75.177,75.177,0,0,0,75.3-75.1V54A53.405,53.405,0,0,0,145,40.5a58.075,58.075,0,0,1-15.4,3.9,27.138,27.138,0,0,0,11.6-14.8A53.038,53.038,0,0,1,124.5,36a25.736,25.736,0,0,0-19.3-8.4A26.12,26.12,0,0,0,78.8,53.4V54a16.5,16.5,0,0,0,.7,5.8,71.966,71.966,0,0,1-54.1-27,23.9,23.9,0,0,0-3.9,13.5A26.043,26.043,0,0,0,33.1,68.2,27.018,27.018,0,0,1,20.9,65v.7A26.15,26.15,0,0,0,42.1,91.4a24.149,24.149,0,0,1-7.1.7,12.625,12.625,0,0,1-5.1-.7,25.657,25.657,0,0,0,24.5,18A53.519,53.519,0,0,1,21.6,121a19.683,19.683,0,0,1-6.4-.7,80.388,80.388,0,0,0,41.6,12.2"></path></svg>'
        },
        4375: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-embed" viewBox="0 0 160 160" focusable="false"><path d="M153.224,81.594,126.971,54.685,117.6,64.061l21.846,21.846L117.6,107.752l8.719,8.719L152.567,90.22a5.583,5.583,0,0,0,1.406-7.782,6.067,6.067,0,0,0-.75-.844ZM33.12,54.685,6.868,80.938A5.973,5.973,0,0,0,6.68,89.47l.188.188L33.12,117.128l9.376-9.376-22.5-21.846L42.5,64.061ZM53.747,134.1,94.437,21.5,106.345,25.9,65.654,138.5Z"></path></svg>'
        },
        1666: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-link" viewBox="0 0 160 160" focusable="false"><path d="M79.4,99.6H92.5v2a33.6,33.6,0,0,1-9.8,24.2l-9.8,9.8a34.716,34.716,0,0,1-48.4,0,34.716,34.716,0,0,1,0-48.4l9.2-10.5a33.6,33.6,0,0,1,24.2-9.8h1.9V80H58.5a19.359,19.359,0,0,0-15.1,6.5l-9.8,9.8a20.976,20.976,0,0,0-.5,29.6l.5.5a20.976,20.976,0,0,0,29.6.5l.5-.5,9.8-9.8a20.905,20.905,0,0,0,6.5-15h0v-2ZM135,24.4h0a34.716,34.716,0,0,0-48.4,0L76.1,34.2a33.6,33.6,0,0,0-9.8,24.2v2H79.4v-2a19.359,19.359,0,0,1,6.5-15.1l9.8-9.8a20.976,20.976,0,0,1,29.6-.5l.5.5a20.976,20.976,0,0,1,.5,29.6l-.5.5-10.5,9.8a20.905,20.905,0,0,1-15,6.5H99V93h1.3a33.6,33.6,0,0,0,24.2-9.8l9.8-9.8A34.89,34.89,0,0,0,135,24.4ZM63,106.2l42.5-42.5-9.8-9.8L53.2,96.4Z"></path></svg>'
        },
        549: t => {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-sharing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M175,160c-6.9,0.2-13.6,2.6-19,7l-62-39c0.8-2.6,1.2-5.3,1-8c0.2-2.7-0.2-5.4-1-8l62-39c5.4,4.4,12.1,6.8,19,7c16.3,0.3,29.7-12.6,30-28.9c0-0.4,0-0.7,0-1.1c0-16.5-13.5-30-30-30s-30,13.5-30,30c-0.2,2.7,0.2,5.4,1,8L84,97c-5.4-4.4-12.1-6.8-19-7c-16.5,0-30,13.5-30,30s13.5,30,30,30c6.9-0.2,13.6-2.6,19-7l62,39c-0.8,2.6-1.2,5.3-1,8c0,16.5,13.5,30,30,30s30-13.5,30-30S191.6,160,175,160z"></path></svg>'
        }
    }
]);