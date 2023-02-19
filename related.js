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
    [365], {
        7191: (e, t, i) => {
            "use strict";
            i.d(t, {
                W: () => he,
                o: () => we
            });
            var l = i(147),
                a = i.n(l),
                s = i(4886),
                n = i.n(s),
                r = i(4777),
                o = i.n(r),
                d = i(6084),
                h = i.n(d),
                w = i(2521),
                c = i.n(w),
                p = i(6207),
                m = i.n(p),
                j = i(6641),
                u = i.n(j),
                g = i(3498),
                f = i.n(g),
                v = i(3918),
                y = i.n(v),
                x = i(3356),
                b = i.n(x),
                k = i(8157),
                C = i.n(k),
                z = i(5806),
                I = i.n(z),
                S = i(7766),
                M = i.n(S),
                P = i(4851),
                L = i.n(P),
                E = i(3207),
                T = i.n(E),
                V = i(7938),
                B = i.n(V),
                A = i(4060),
                U = i.n(A),
                $ = i(4119),
                D = i.n($),
                R = i(9992),
                O = i.n(R),
                H = i(6038),
                q = i.n(H),
                F = i(5058),
                N = i.n(F),
                Z = i(7459),
                W = i.n(Z),
                _ = i(4606),
                X = i.n(_),
                Y = i(1438),
                J = i.n(Y),
                G = i(5147),
                K = i.n(G),
                Q = i(9863),
                ee = i.n(Q),
                te = i(2494),
                ie = i.n(te),
                le = i(8675),
                ae = i.n(le),
                se = i(4667);
            let ne = null;
            const re = function() {
                    return ne || (ne = (0, se.Z)(`<xml>${a()}${n()}${o()}${h()}${c()}${m()}${u()}${f()}${y()}${b()}${C()}${I()}${M()}${L()}${T()}${B()}${U()}${D()}${O()}${q()}${N()}${J()}${K()}${W()}${X()}${ee()}${ie()}${ae()}</xml>`)), ne
                },
                oe = function(e) {
                    return `.jw-svg-icon-${e}`
                },
                de = function(e) {
                    return e.cloneNode(!0)
                },
                he = function(e) {
                    const t = re().querySelector(oe(e));
                    return t ? de(t) : null
                },
                we = function(e) {
                    const t = re().querySelectorAll(e.split(",").map(oe).join(","));
                    return Array.prototype.map.call(t, (e => de(e)))
                }
        },
        8222: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                default: () => Ae
            });
            var l = i(6886),
                a = i(6769),
                s = i(4446);
            const n = 302e3,
                r = 302621,
                o = e => {
                    let t;
                    try {
                        var i;
                        if (null != e && null != (i = e.responseXML) && i.firstChild) {
                            const i = (0, a.Z)(e.responseXML.firstChild);
                            t = Object.assign({
                                playlist: i
                            }, i.feedData)
                        } else t = JSON.parse(e.responseText), Array.isArray(t) && (t = {
                            playlist: t
                        })
                    } catch (e) {
                        t = null
                    }
                    return t
                },
                d = function(e) {
                    this.items = this.currentRequest = this.lastResponseText = null, this.requestOptions = e
                };
            d.prototype.load = function(e, t, i, a) {
                this.currentRequest && this.abort();
                const d = this.requestOptions;
                if (null != d && d.queryParams) {
                    const t = Object.keys(d.queryParams).map((function(e) {
                            return `${e}=${encodeURIComponent(d.queryParams[e])}`
                        })),
                        i = e.indexOf("?") > 0 ? "&" : "?";
                    e = e + i + t.join("&")
                }
                this.currentRequest = (0, l.h)(e, (l => {
                    this.currentRequest = null;
                    const n = this.lastResponseText === l.responseText,
                        d = o(l);
                    if (a && n) {
                        const t = Object.assign({}, d);
                        a(this.items, t, e)
                    } else if (d) {
                        this.lastResponseText = l.responseText, this.items = d.playlist;
                        const i = Object.assign({}, d);
                        delete i.playlist, t(this.items, i, e)
                    } else this.lastResponseText = null, i(new s.rG(null, r))
                }), ((e, t, l, a) => {
                    i((0, s.l9)(a, n))
                }))
            }, d.prototype.loadRecommendation = function(e, t, i, a, d) {
                this.currentRequest && this.abort();
                this.currentRequest = (0, l.h)(e, (e => {
                    this.currentRequest = null;
                    const l = o(e);
                    if (!l) return void a(new s.rG(null, r));
                    const n = l.file || t;
                    n ? this.load(n, i, a, d) : a(new s.rG(null, 302650, l))
                }), ((e, t, i, l) => {
                    a((0, s.l9)(l, n))
                }))
            }, d.prototype.clearCache = function() {
                this.lastResponseText = null
            }, d.prototype.abort = function() {
                this.currentRequest.onload = null, this.currentRequest.onreadystatechange = null, this.currentRequest.onerror = null, this.currentRequest.abort && this.currentRequest.abort(), this.currentRequest = null, this.lastResponseText = null
            };
            const h = d;
            var w = i(8348),
                c = i(3296),
                p = i(2977);
            const m = class {
                    constructor(e) {
                        this.videoThumbnails = [], this.activeThumbnailMobile = null, this.model = e, this.onMobileFeedShown = this.onMobileFeedShown.bind(this), this.init()
                    }
                    getVideosForThumb(e) {
                        const {
                            images: t
                        } = e;
                        return (0, p.Cz)(t)
                    }
                    create(e, t, i, l, a) {
                        const s = this.getVideosForThumb(i);
                        if (!s) return !1;
                        i.videoThumbnail = s[0].src;
                        const n = new c.Z(e, t, i, l, a);
                        return this.push(n), n.init(), n
                    }
                    push(e) {
                        this.videoThumbnails.push(e)
                    }
                    flush() {
                        this.videoThumbnails.forEach((e => {
                            e.isDestroyed() || e.destroy()
                        })), this.videoThumbnails = []
                    }
                    onMobileFeedShown(e) {
                        if (1 !== e.itemsShown.length) return this.model.off("mobileFeedShown", this.onMobileFeedShown);
                        const t = e.itemsShown[0];
                        if (!t) return;
                        const i = this.videoThumbnails.filter((e => e.item.videoThumbnail === t.videoThumbnail && "overlayItem" === e.type))[0];
                        this.activeThumbnailMobile && !this.activeThumbnailMobile.isDestroyed() && (this.activeThumbnailMobile.onPause(), this.activeThumbnailMobile = null), i && !i.isDestroyed() && (i.onPlay(), this.activeThumbnailMobile = i)
                    }
                    init() {
                        w.OS.mobile && this.model && this.model.on("feedShown", this.onMobileFeedShown)
                    }
                },
                j = function(e) {
                    this.handlers = [], this.el = e
                };
            j.prototype.add = function(e) {
                this.handlers.push(e)
            }, j.prototype.del = function(e) {
                e || (this.handlers = []);
                for (let t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1)
            }, j.prototype.dispatch = function(...e) {
                for (let t = 0, i = this.handlers.length; t < i; t++) {
                    const i = this.handlers[t];
                    "function" == typeof i && i.apply(this.el, e)
                }
            };
            const u = (e, t) => {
                    const i = new j(e);
                    return i.add(t), i
                },
                g = function(e, t) {
                    this.element = "string" == typeof e ? document.querySelector(e) : e, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this);
                    const {
                        passiveEvents: i
                    } = w.Features, l = !!i && {
                        passive: !1
                    }, a = !!i && {
                        passive: !0
                    };
                    this.element.addEventListener("touchstart", this.start, l), this.element.addEventListener("touchmove", this.move, l), this.element.addEventListener("touchend", this.end, a), this.element.addEventListener("touchcancel", this.cancel, a), this.preV = {
                        x: null,
                        y: null
                    };
                    const s = function() {};
                    this.touchStart = u(this.element, t.touchStart || s), this.swipe = u(this.element, t.swipe || s), this.touchMove = u(this.element, t.touchMove || s), this.touchEnd = u(this.element, t.touchEnd || s), this.touchCancel = u(this.element, t.touchCancel || s), this._cancelAllHandler = this.cancelAll.bind(this), window.removeEventListener("scroll", this._cancelAllHandler), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.swipeTimeout = null, this.x1 = null, this.x2 = null, this.y1 = null, this.y2 = null
                };
            g.prototype = {
                start(e) {
                    if (!e.touches) return;
                    this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e), this.last = this.now;
                    const t = this.preV;
                    if (e.touches.length > 1) {
                        const i = {
                            x: e.touches[1].pageX - this.x1,
                            y: e.touches[1].pageY - this.y1
                        };
                        t.x = i.x, t.y = i.y
                    }
                },
                move(e) {
                    if (!e.touches) return;
                    const t = this.preV,
                        i = e.touches.length,
                        l = e.touches[0].pageX,
                        a = e.touches[0].pageY;
                    if (i > 1) {
                        const i = e.touches[1].pageX,
                            s = e.touches[1].pageY,
                            n = {
                                x: e.touches[1].pageX - l,
                                y: e.touches[1].pageY - a
                            };
                        t.x = n.x, t.y = n.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (l - this.x2 + i - this.sx2) / 2, e.deltaY = (a - this.y2 + s - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.sx2 = i, this.sy2 = s
                    } else null !== this.x2 ? (e.deltaX = l - this.x2, e.deltaY = a - this.y2) : (e.deltaX = 0, e.deltaY = 0);
                    this.touchMove.dispatch(e), this.x2 = l, this.y2 = a, e.preventDefault()
                },
                end(e) {
                    if (!e.changedTouches) return;
                    const t = this;
                    (this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30) && (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout((function() {
                        t.swipe.dispatch(e)
                    }), 0)), this.touchEnd.dispatch(e), this.preV.x = 0, this.preV.y = 0, this.x1 = this.x2 = this.y1 = this.y2 = null
                },
                cancelAll() {
                    clearTimeout(this.swipeTimeout)
                },
                cancel(e) {
                    this.cancelAll(), this.touchCancel.dispatch(e)
                },
                _swipeDirection: (e, t, i, l) => Math.abs(e - t) >= Math.abs(i - l) ? e - t > 0 ? "Left" : "Right" : i - l > 0 ? "Up" : "Down",
                on(e, t) {
                    this[e] && this[e].add(t)
                },
                off(e, t) {
                    this[e] && this[e].del(t)
                },
                destroy() {
                    return this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.swipe.del(), this.delta = null, this.last = null, this.now = null, this.preV = null, this.swipe = null, this.swipeTimeout = null, this.touchStart = null, this.touchMove = null, this.touchEnd = null, this.touchCancel = null, this.x1 = null, this.x2 = null, this.y1 = null, this.y2 = null, null
                }
            };
            const f = g;
            var v = i(2995),
                y = i.n(v),
                x = i(5947),
                b = i.n(x),
                k = i(1212),
                C = i.n(k),
                z = i(7191),
                I = i(5646),
                S = i(4667),
                M = i(2799),
                P = i(9888),
                L = i(2957);

            function E(e, t, i) {
                this.element = e, this.item = t, this.ui = (0, I.Z)(e, (() => i(t)))
            }
            let T = !0;
            const V = () => {
                T && (T = !1, i(4516))
            };
            let B;
            const A = e => (B || (B = (0, S.Z)(`<xml>${y()}${b()}${C()}</xml>`)), B.querySelector(`.jw-svg-icon-${e}`).cloneNode(!0)),
                U = (e, t, i, l) => {
                    const a = document.createElement("div");
                    return a.className = `jw-reset jw-icon jw-icon-inline ${e}${l?"":" jw-button-color"}`, a.appendChild(t), a.setAttribute("role", "button"), a.setAttribute("tabindex", "0"), (0, I.Z)(a, i), a
                },
                $ = (e, t, i) => {
                    const l = A(`arrow-${e}`),
                        a = U(`jw-related-page jw-related-page-${e}`, l);
                    return a.setAttribute("aria-label", i), (0, I.Z)(a, (() => t(e))), a
                },
                D = (e, t, i) => {
                    const l = i ? A("arrow-down") : (0, z.W)("close"),
                        a = U("jw-related-close", l, t, i);
                    return a.setAttribute("aria-label", e), a
                },
                R = (e, t, i) => {
                    const l = (0, M.az)((({
                                              index: e,
                                              duration: t = "",
                                              title: i = ""
                                          }, l) => {
                        const a = "playlist" === l ? `${e+1}. ` : "";
                        return `<div class="jw-reset jw-related-item" aria-label="Video - ${a} ${i||"Untitled Video"}" role="button" tabindex="0"><div class="jw-reset jw-related-item-container"><div class="jw-reset jw-related-item-content jw-color-active-hover"><div class="jw-reset jw-related-item-content-container jw-color-inactive jw-color-active-hover"><div class="jw-reset jw-related-item-poster"><div class="jw-reset jw-related-item-poster-content"><div class="jw-reset jw-related-item-duration">${t?(0,P.timeFormat)((0,L.m9)(t)):""}</div><div class="jw-reset jw-related-item-play jw-icon jw-icon-inline"></div></div></div><div class="jw-reset jw-related-item-title"><div class="jw-reset jw-related-item-title-content"><span class="jw-reset-text jw-item-index-text jw-related-item-title-text" dir="auto">${a}<em>${i?(0,M.az)(i).textContent:""}</em></span></div></div></div></div></div></div>`
                    })(e, i));
                    return l.querySelector(".jw-related-item-play").appendChild((0, z.W)("play")), (0, I.Z)(l, (() => t(e))), l
                },
                O = (e, t, i, l) => {
                    const a = "shelfWidget" === i;
                    let s;
                    if (l) {
                        l.ui.destroy(), s = l.element;
                        const t = e.title;
                        if (s.setAttribute("aria-label", `Video - ${t||"Untitled Video"}`), s.setAttribute("data-jw-index", e.index), (0, M.nh)(s.querySelector(".jw-related-shelf-item-title"), t ? (0, M.az)(t).textContent : ""), a)(0, M.L_)(s, /jw-related-(load(ed|ing)|displayed)/, "jw-related-loading"), s.querySelector(".jw-related-shelf-item-image").removeAttribute("style");
                        else {
                            const t = e.duration;
                            (0, M.nh)(s.querySelector(".jw-related-shelf-item-duration"), t ? `${(0,P.timeFormat)((0,L.m9)(t))}` : ""), s.removeAttribute("style")
                        }
                    } else a ? (s = (0, M.az)((({
                                                    title: e = "",
                                                    index: t
                                                }) => `<div class="jw-related-shelf-item" role="button" tabindex="0" aria-label="Video - ${e||"Untitled Video"}" data-jw-index="${t}"><div class="jw-related-shelf-item-image"></div><div class="jw-related-shelf-item-container"><div class="jw-related-shelf-item-contents"><div class="jw-related-shelf-item-title" dir="auto">${e?(0,M.az)(e).textContent:""}</div></div></div></div>`)(e)), s.querySelector(".jw-related-shelf-item-image").appendChild((0, z.W)("play"))) : s = (0, M.az)((({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      duration: e = "",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      title: t = "",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      index: i
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }) => `<div class="jw-reset jw-related-shelf-item" role="button" tabindex="0" aria-label="Video - ${t||"Untitled Video"}" data-jw-index="${i}"><div class="jw-reset jw-related-shelf-item-aspect"><div class="jw-reset jw-related-shelf-item-container"><div class="jw-reset jw-related-shelf-item-contents"><div class="jw-reset jw-related-shelf-item-duration jw-text">${e?(0,P.timeFormat)((0,L.m9)(e)):""}</div><div class="jw-reset-text jw-related-shelf-item-title jw-text" dir="auto">${t?(0,M.az)(t).textContent:""}</div></div></div></div></div>`)(e));
                    return new E(s, e, t)
                },
                H = (e, t, i, l) => {
                    if (!t) return;
                    const a = (0, M.az)(((e, {
                        duration: t = "",
                        title: i = "",
                        description: l = ""
                    }, a = "") => `<div class="jw-related-item jw-related-item-next-up jw-reset" aria-label="Next-up: Video - ${i||"Untitled Video"}" role="button" aria-describedby="jw-${e}-nextup-description" tabindex="0"><div class="jw-related-item-container jw-reset"><div class="jw-related-item-content jw-color-active-hover jw-reset"><div class="jw-related-item-content-container jw-color-inactive jw-color-active-hover jw-reset"><div class="jw-related-item-poster jw-reset"><div class="jw-related-item-poster-content jw-reset"><div class="jw-related-item-duration jw-reset">${t?(0,P.timeFormat)((0,L.m9)(t)):""}</div><div class="jw-related-item-play jw-icon jw-icon-inline jw-reset"></div></div></div><div class="jw-related-item-title jw-reset"><div class="jw-related-item-title-content jw-reset"><strong class="jw-related-next-up-text jw-reset-text" dir="auto">${a}</strong><span class="jw-item-index-text jw-related-item-title-text jw-reset-text" dir="auto">${i?(0,M.az)(i).textContent:""}</span></div></div><div class="jw-related-item-description jw-reset"><div class="jw-related-item-description-content jw-reset-text" id="jw-${e}-nextup-description" dir="auto">${l}</div></div></div><div class="jw-related-item-countdown jw-reset"></div></div></div></div>`)(e, t, i));
                    return a.querySelector(".jw-related-item-play").appendChild((0, z.W)("play")), (0, I.Z)(a, (() => l(t))), a
                },
                q = function() {
                    this.timer = null, this.interval = null, this.countdownActive = !1
                };
            q.prototype.start = function(e, t, i, l) {
                this.timer = window.setTimeout((() => {
                    this.clear(), i(e)
                }), 1e3 * t), this.secondsRemaining = t, this.currentTimeout = t;
                let a = this.secondsRemaining;
                this.interval = window.setInterval((function() {
                    l(Math.max(0, a -= 1))
                }), 1e3), this.countdownActive = !0, l(Math.max(0, t))
            }, q.prototype.clear = function() {
                window.clearTimeout(this.timer), window.clearInterval(this.interval), this.secondsRemaining = null, this.currentTimeout = null, this.countdownActive = !1
            };
            const F = q;
            var N = i(974);
            class Z {
                constructor(e, t, i, l) {
                    this.player = e, this.model = t, this.parentElement = l, this.container = null, this.isOpen = !1, this.feedType = i, V()
                }
                setupInterface() {
                    if (this.container) return;
                    const {
                        localization: e
                    } = this.model, t = document.createElement("div");
                    t.className = "jw-reset jw-related jw-overlay";
                    const i = D(e.close, (e => this.model.trigger("close", "interaction", e)));
                    t.appendChild(i), this.pageLeft = $("left", (() => this.paginate("left")), e.prev), t.appendChild(this.pageLeft);
                    const l = document.createElement("div");
                    l.className = "jw-reset jw-related-container";
                    const a = e.related.heading,
                        s = document.createElement("div");
                    s.className = "jw-related-title jw-reset-text", (0, M.nh)(s, a), s.setAttribute("aria-label", a), s.setAttribute("dir", "auto"), t.appendChild(s);
                    const n = document.createElement("div");
                    n.className = "jw-reset jw-related-item-group", l.appendChild(n), t.appendChild(l), this.pageRight = $("right", (() => this.paginate("right")), e.next), t.appendChild(this.pageRight), this.container = t, this.attachInterface()
                }
                destroyInterface() {
                    this.container && ((0, M.EU)(this.container), this.player.getControls() && this.detachInterface(), this.container = null)
                }
                toggle(e = !this.isOpen) {
                    const t = this.player.getContainer();
                    (0, M.og)(this.parentElement, "jw-plugin-related-open", e), (0, M.og)(t, "jw-flag-overlay-open-related", e), this.isOpen = e
                }
                visibility(e) {
                    this.container && (0, N.oB)(this.container, e ? {
                        display: ""
                    } : {
                        display: "none"
                    })
                }
                attachInterface() {
                    const {
                        container: e,
                        parentElement: t
                    } = this;
                    t && (t.appendChild(e), (0, M.og)(this.parentElement, "jw-plugin-related", !0))
                }
                detachInterface() {
                    const {
                        container: e,
                        parentElement: t
                    } = this;
                    null != e && e.parentNode && e.parentNode.removeChild(e), t && (0, M.og)(t, "jw-plugin-related", !1)
                }
                paginate(e) {
                    this.model.trigger("overlayPaged", e)
                }
                getButtons() {
                    return {
                        left: this.pageLeft,
                        right: this.pageRight
                    }
                }
            }
            const W = (e, t, i) => {
                    const l = e.onItemSelect;
                    return i && (t.relatedFile = i), t.onclick = "play" === l ? "play" : "link", t
                },
                _ = (e, t, {
                    feedItems: i,
                    feedData: l,
                    feedUri: a
                }, s) => {
                    const n = W(e, {
                        visible: s,
                        method: t
                    }, a);
                    s && (n.feed = a, n.items = i, n.autoplay = "autoplay" === e.onComplete, n.feedData = l), e.trigger("analytics", s ? "open" : "close", n)
                },
                X = (e, t, i, l, a, s, n, {
                    feedData: r,
                    feedUri: o,
                    feedShownId: d
                }) => {
                    const {
                        nextUp: h,
                        onComplete: w,
                        autoplayTimer: c
                    } = e, p = h && "autoplay" === w && "complete" === t, m = "recs" === i ? "discovery" : "playlist";
                    e.trigger("analytics", "feedShown", W(e, {
                        mode: m,
                        feedData: r,
                        feedShownId: d,
                        itemsShown: s,
                        page: a,
                        reason: t,
                        autoTimer: p && c >= 0 ? c : -1,
                        ui: l,
                        viewable: n
                    }, o))
                },
                Y = (e, t, i, l, a, s, {
                    feedData: n,
                    feedUri: r,
                    feedShownId: o
                }, d, h) => {
                    d.off("change:viewable", null, h), d.change("viewable", ((w, c) => {
                        X(e, t, i, l, a, s, c, {
                            feedData: n,
                            feedUri: r,
                            feedShownId: o
                        }), c ? d.off("change:viewable", null, h) : t = "inView"
                    }), h)
                },
                J = (e, t, i, l, a, s, n, r, {
                    feedData: o,
                    feedUri: d,
                    feedShownId: h
                }) => {
                    const w = "recs" === i ? "discovery" : "playlist";
                    e.trigger("analytics", "feedClick", W(e, {
                        mode: w,
                        feedData: o,
                        feedShownId: h,
                        itemsShown: s,
                        reason: t,
                        target: n,
                        index: s.indexOf(n) + 1,
                        page: a,
                        ui: l,
                        viewable: r
                    }, d))
                },
                G = (e, t, i, l, a, s, n, {
                    feedData: r,
                    feedUri: o,
                    feedShownId: d
                } = {}) => {
                    a || (a = [s]);
                    const h = {
                        mode: "recs" === t ? "discovery" : "playlist",
                        itemsShown: a,
                        index: a.indexOf(s) + 1,
                        page: l,
                        feedData: r || s.feedData,
                        feedShownId: d || s.feedShownId,
                        target: s,
                        ui: i,
                        viewable: n
                    };
                    e.trigger("analytics", "videoThumbFirstFrame", W(e, h, o))
                };
            var K = i(6234);
            class Q {
                constructor(e, t, i) {
                    this.element = e, this.item = t, i && (this.width = i)
                }
                setSrc() {
                    if (this.styled) return;
                    const {
                        element: e,
                        item: t
                    } = this;
                    if (t.image) {
                        const t = this.thumbnailUrl();
                        t && (e.style.backgroundImage = `url(${t})`), this.styled = !0
                    }
                }
                thumbnailUrl() {
                    const {
                        item: e,
                        element: t
                    } = this, i = this.width ? (0, p.IJ)(this.width) : (0, p.IJ)(t.clientWidth);
                    return (0, p.Bf)(e, i)
                }
                setWidth(e) {
                    this.width = e
                }
            }
            const ee = class {
                    constructor(e, t, i, l) {
                        this.player = e, this.model = t, this.playerModel = i, this.feedItems = [], this.feedData = {}, this.feedShownId = "", this.feedUri = "", this.feedType = l, this.currentPageNumber = 0, this.lastResizeBreakpoint = this.model.breakpoint, this.videoThumbnails = new m(this.player.getPlugin("related")), this.container = this.model.pluginContainer, this.view = new Z(e, t, l, this.container), this.open = this.open.bind(this), this.newPages = !1, w.OS.mobile && this.enableSwipe(), this.onNextUp = (e, t) => this.setNextUp(t), this.onPaged = e => this.paginate(e, "paged"), "autoplay" !== this.model.onComplete && "none" !== this.model.onComplete || (this.autoplay = new F), this.keyEventHandler = e => {
                            this.keyDownHandler(e)
                        }, this.container.removeEventListener("keydown", this.keyEventHandler), this.container.addEventListener("keydown", this.keyEventHandler), this.model.on("overlayPaged", this.onPaged, this), this.model.change("nextUp", this.onNextUp, this)
                    }
                    getCurrentItem() {
                        const e = this.player.getPlaylistIndex();
                        return this.player.getPlaylistItem(e)
                    }
                    loadItems(e, t, i) {
                        this.playerModel.off("change:viewable", null, this), this.feedItems = e, this.feedData = t, this.feedUri = i, this.nextItem = e[0], this.newPages = !0, this.generatePages()
                    }
                    setNextUp(e) {
                        this.nextItem = e, this.newPages = !0, this.generatePages()
                    }
                    onBeforePlay() {
                        this.isOpen && this.close("play")
                    }
                    open(e, t) {
                        const {
                            container: i,
                            view: l,
                            nextItem: a,
                            nextUpPage: s,
                            autoplay: n
                        } = this;
                        l.container || l.setupInterface(), this.generatePages(), this.goToPage(s, e), t && "enter" === t.type && a && i.addEventListener("animationend", (function() {
                            const e = i.querySelector(".jw-related-item");
                            e && e.focus()
                        }), {
                            once: !0
                        }), "playing" === this.player.getState() && (this.unpausePlayer = !0), this.player.pause({
                            reason: "recs" === this.feedType ? "related-interaction" : "interaction"
                        }), this.view.toggle(!0), n && "complete" === e && this.playerModel.get("nextUp") && this.autoAdvance(), this.player.on("beforePlay", this.onBeforePlay, this), _(this.model, e, this, !0)
                    }
                    close(e) {
                        this.player.off("beforePlay", this.onBeforePlay, this), this.playerModel.off("change:viewable", null, this), this.autoplay && (this.autoplay.clear(), this.resetAutoplay()), this.unpausePlayer && (this.player.play({
                            reason: "recs" === this.feedType ? "related-interaction" : "interaction"
                        }), this.unpausePlayer = !1), this.feedShownId = "", this.view.toggle(!1), _(this.model, e, this, !1)
                    }
                    enableSwipe() {
                        return new f(this.container, {
                            swipe: e => {
                                const t = this.pages[this.currentPageNumber + 1],
                                    i = this.pages[this.currentPageNumber - 1];
                                "Left" === e.direction && t ? this.paginate("right", "paged_swiped") : "Right" === e.direction && i && this.paginate("left", "paged_swiped")
                            }
                        })
                    }
                    goToPage(e, t) {
                        const {
                            container: i,
                            pages: l,
                            nextUpPage: a,
                            smallPlayer: s,
                            model: n
                        } = this;
                        if (!i || !l.length) return;
                        const r = i.querySelector(".jw-related-item-next-up");
                        r && r.parentElement.removeChild(r);
                        const o = i.querySelector(".jw-related-item-group");
                        (0, M.EU)(o), l[e].forEach(((t, i) => {
                            const n = t.element;
                            if (e === a && 0 === i ? o.parentElement.insertBefore(n, o) : o.appendChild(n), s) {
                                if (l[e - 1]) {
                                    const t = l[e - 1][0].element;
                                    o.appendChild(t), (0, M.og)(t, "jw-related-active-item", !1), t.setAttribute("tabindex", "-1")
                                }
                                if (o.appendChild(n), l[e + 1]) {
                                    const t = l[e + 1][0].element;
                                    o.appendChild(t), (0, M.og)(t, "jw-related-active-item", !1), t.setAttribute("tabindex", "-1")
                                }
                                if (0 !== e && (o.style.transitionDuration = "0s", e < this.currentPageNumber ? o.style.transform = "translateX(-200%)" : o.style.transform = "translateX(0)"), n.setAttribute("tabindex", "0"), !w.OS.iOS || !w.Features.iframe) {
                                    const e = () => {
                                        n && n.focus(), o.removeEventListener("transitionend", e), o.removeEventListener("animationend", e)
                                    };
                                    o.addEventListener("transitionend", e), o.addEventListener("animationend", e)
                                }
                                setTimeout((() => {
                                    0 !== e ? (o.style.transitionDuration = "150ms", o.style.transform = "translateX(-100%)") : o.style.transform = "", (0, M.og)(n, "jw-related-active-item", !0)
                                }), 0)
                            } else e === a && 0 === i ? o.parentElement.insertBefore(n, o) : o.appendChild(n), o.style.transform = ""
                        })), this.currentPageNumber = e, this.refreshButtons(), this.lastShownReason = t, this.visibleItems = l[e].map((e => e.source)), this.feedShownId = (0, K.B)(K.F), Y(n, t, this.feedType, "overlay", e - a, this.visibleItems, this, this.playerModel, this)
                    }
                    generatePages() {
                        const e = this.model.localization.nextUp,
                            t = this.videoThumbnails,
                            i = [];
                        let l = [],
                            a = !1;
                        this.newPages && (this.newPages = !1, t.flush(), this.feedItems.forEach(((s, n) => {
                            const r = Object.assign({}, s, {
                                index: n
                            });
                            let o;
                            if (s === this.nextItem || !this.nextItem && 0 === n) l.length > 0 && (i.push(l), l = []), o = H(this.player.id, r, e, (() => this.itemSelected(r))), this.nextUpPage = i.length, a = !0;
                            else {
                                o = R(r, (() => this.itemSelected(r)), this.feedType, this.playerModel);
                                let e = this.numItemsPerPage;
                                a && (e -= this.nextUpDisplacement), l.length >= e && (i.push(l), l = [], a = !1)
                            }
                            t.create("overlayItem", o, s, null, (() => this.itemViewed(r)));
                            const d = new Q(o.querySelector(".jw-related-item-poster"), s),
                                h = this.view.player.getSafeRegion().width / this.rowSize;
                            d.setWidth(h), d.setSrc(), l.push({
                                source: r,
                                element: o
                            })
                        })), l.length > 0 && i.push(l), this.pages = i, this.currentPageNumber = this.nextUpPage)
                    }
                    itemSelected(e, t) {
                        const {
                            lastShownReason: i,
                            feedData: l,
                            feedUri: a,
                            feedType: s,
                            visibleItems: n,
                            nextUpPage: r,
                            currentPageNumber: o,
                            model: d
                        } = this;
                        if (t)((e, t, i, l, a, {
                            feedData: s,
                            feedUri: n,
                            feedShownId: r
                        }) => {
                            const o = "recs" === t ? "discovery" : "playlist";
                            e.trigger("analytics", "feedAutoAdvance", W(e, {
                                mode: o,
                                feedData: s,
                                feedShownId: r,
                                itemsShown: l,
                                target: a,
                                ui: i
                            }, n))
                        })(d, s, "overlay", n, e, this);
                        else {
                            J(d, i, s, "overlay", o - r, n, e, this.playerModel.get("viewable"), this)
                        }
                        this.countdownEl = null;
                        const h = "playlist" === s ? "playlistItemSelected" : "recsItemSelected";
                        d.trigger(h, {
                            item: e,
                            feedData: l,
                            feedUri: a
                        }, t ? "related-auto" : "related-interaction")
                    }
                    itemViewed(e) {
                        const {
                            feedType: t,
                            visibleItems: i,
                            nextUpPage: l,
                            currentPageNumber: a,
                            model: s
                        } = this;
                        G(s, t, "overlay", a - l, i, e, this.playerModel.get("viewable"), this)
                    }
                    paginate(e, t) {
                        switch (this.autoplay && (this.autoplay.clear(), this.resetAutoplay()), e) {
                            case "left":
                                return void this.goToPage(this.currentPageNumber - 1, t);
                            case "right":
                                this.goToPage(this.currentPageNumber + 1, t)
                        }
                    }
                    autoAdvance() {
                        const {
                            model: e,
                            autoplay: t,
                            container: i,
                            nextItem: l
                        } = this, a = e.autoplayTimer, s = e.autoplayMessage.replace(/__title__/i, l.title);
                        this.countdownEl = i.querySelector(".jw-related-next-up-text");
                        t.start(l, a, (() => this.itemSelected(l, !0)), (e => {
                            this.countdownEl && (0, M.nh)(this.countdownEl, s.replace(/xx/i, e))
                        })), setTimeout((() => {
                            this.renderAutoplayAnimation(Math.max(0, a - .25))
                        }), 250)
                    }
                    refreshButtons() {
                        const e = this.view.getButtons();
                        (0, M.og)(e.left, "jw-hidden", 0 === this.currentPageNumber), (0, M.og)(e.right, "jw-hidden", this.currentPageNumber === this.pages.length - 1)
                    }
                    keyDownHandler(e) {
                        if (!e) return;
                        const t = this.pages[this.currentPageNumber + 1],
                            i = this.pages[this.currentPageNumber - 1];
                        switch (e.keyCode) {
                            case 39:
                                t && this.paginate("right", "paged"), e.stopPropagation();
                                break;
                            case 37:
                                i && this.paginate("left", "paged"), e.stopPropagation()
                        }
                    }
                    renderAutoplayAnimation(e) {
                        const t = this.container.querySelector(".jw-related-item-content");
                        if (!t) return;
                        const i = (0, M.az)('<svg xmlns="http://www.w3.org/2000/svg" class="jw-related-autoplay-svg" focusable="false"><rect class="jw-related-autoplay-frame" width="100%" height="100%"/><rect class="jw-related-autoplay-frame-progress jw-color-active jw-color-inactive-hover" width="100%" height="100%"/></svg>'),
                            l = i.querySelector(".jw-related-autoplay-frame-progress");
                        t.appendChild(i), this.resizeAutoplay(l), l.style.animation = `${e}s linear forwards jw-dash`
                    }
                    resetAutoplay() {
                        const e = this.container.querySelector(".jw-related-next-up-text");
                        e && (0, M.nh)(e, this.model.localization.nextUp);
                        const t = this.container.querySelector(".jw-related-autoplay-frame-progress");
                        t && t.parentNode.removeChild(t)
                    }
                    resizeAutoplay(e) {
                        if (!e) return;
                        const t = e.getBoundingClientRect(),
                            i = 2 * t.height + 2 * t.width;
                        e.style.strokeDasharray = i;
                        const l = this.autoplay.secondsRemaining ? 1 - this.autoplay.secondsRemaining / this.autoplay.currentTimeout : 0;
                        e.style.strokeDashoffset = i - l * i
                    }
                    resize() {
                        var e;
                        (this.view.container || this.view.setupInterface(), this.newPages = !0, this.generatePages(), !this.isOpen || this.model.breakpoint === this.lastResizeBreakpoint && this.currentPageNumber === this.nextUpPage) || (this.goToPage(this.nextUpPage, "resized"), this.lastResizeBreakpoint = this.model.breakpoint, null != (e = this.autoplay) && e.countdownActive && setTimeout((() => {
                            this.countdownEl = this.container.querySelector(".jw-related-next-up-text"), this.renderAutoplayAnimation(Math.max(0, this.autoplay.secondsRemaining))
                        }), 250))
                    }
                    destroy() {
                        this.container.removeEventListener("keydown", this.keyEventHandler), this.model.off(null, null, this), this.playerModel.off(null, null, this), this.player.off(null, null, this), (0, M.EU)(this.container)
                    }
                    get isOpen() {
                        return this.view.isOpen
                    }
                    get smallPlayer() {
                        return this.model.breakpoint < 2
                    }
                    get numItemsPerPage() {
                        switch (this.model.breakpoint) {
                            case 7:
                            case 6:
                            case 5:
                            case 4:
                                return 9;
                            case 3:
                                return 6;
                            case 2:
                                return 4;
                            default:
                                return 1
                        }
                    }
                    get rowSize() {
                        switch (this.model.breakpoint) {
                            case 7:
                            case 6:
                            case 5:
                            case 4:
                            case 3:
                                return 3;
                            case 2:
                                return 2;
                            default:
                                return 1
                        }
                    }
                    get nextUpDisplacement() {
                        switch (this.numItemsPerPage) {
                            case 9:
                                return 2;
                            case 6:
                            case 4:
                                return 1;
                            default:
                                return 0
                        }
                    }
                },
                te = (e = "", t = "", i = "jw-reset ") => `<div class="${i}jw-related-shelf"><div class="${i}jw-icon jw-related-control jw-related-control-left jw-off" role="button" aria-label="${e}" tabindex="-1">${y()}</div><div class="${i}jw-related-shelf-list"><div class="${i}jw-related-shelf-items jw-related-shelf-start"></div></div><div class="${i}jw-icon jw-related-control jw-related-control-right jw-off" aria-label="${t}" role="button" tabindex="-1">${b()}</div></div>`;
            class ie {
                constructor(e, t, i) {
                    this.player = e, this.model = t, this.container = null, this.isOpen = !1, this.title = i, this.toggleEnded = this.onToggleAnimationEnd.bind(this), V(), this.setup()
                }
                setup() {
                    const {
                        localization: e
                    } = this.model, t = (0, M.az)('<div class="jw-related-shelf-contents jw-reset">');
                    this.container = (0, M.az)('<div class="jw-related-shelf-container jw-reset">'), this.container.appendChild(t);
                    const i = D(e.close, (e => this.model.trigger("close", "interaction", e)), !0);
                    (0, M.cn)(i, "jw-related-more"), i.insertBefore(window.document.createTextNode(e.close), i.firstChild), this.shelfElement = (0, M.az)(te(e.prev, e.next)), this.shelfList = this.shelfElement.querySelector(".jw-related-shelf-items"), t.appendChild(this.shelfElement), t.appendChild(i)
                }
                destroy() {
                    const {
                        container: e
                    } = this;
                    e && ((0, M.EU)(e), null != e && e.parentNode && e.parentNode.removeChild(e), this.container = null)
                }
                toggle(e = !this.isOpen, t = {}) {
                    this.isOpen = e, this.shelfElement.removeEventListener("transitionend", this.toggleEnded), !t || "enter" !== t.type && "escape" !== t.type || this.shelfElement.addEventListener("transitionend", this.toggleEnded), (0, M.og)(this.player.getContainer(), "jw-flag-overlay-open-related-shelf", e)
                }
                onToggleAnimationEnd(e) {
                    if (e.stopImmediatePropagation(), this.shelfElement.removeEventListener("transitionend", this.toggleEnded), this.isOpen) {
                        const e = this.shelfList.querySelector(".jw-related-item-visible");
                        e && e.focus()
                    }
                }
                attachInterface() {
                    this.player.getContainer().querySelector(".jw-button-container").appendChild(this.container)
                }
            }
            var le = i(3414);
            const ae = e => {
                    const {
                        currentTarget: t
                    } = e;
                    t.removeEventListener("animationend", ae), (0, M.L_)(t, /jw-related-(loaded|displayed)/, "jw-related-displayed")
                },
                se = (e, t, i) => {
                    e.img && (0, N.oB)(t.querySelector(".jw-related-shelf-item-image"), {
                        backgroundImage: i.image
                    }), (0, M.IV)(t.parentElement, "jw-related-loading"), t.clientWidth, t.addEventListener("animationend", ae), (0, M.cn)(t, "jw-related-loaded");
                    const l = t.querySelector(".jw-related-shelf-item-title");
                    l && (0, M.nh)(l, i.title || "")
                };
            class ne extends Q {
                setSrc() {
                    this.preloadImage(), super.setSrc()
                }
                preloadImage() {
                    if (this.img) return;
                    const {
                        element: e,
                        item: t
                    } = this;
                    if (!this.item.image) return se(this, e, t);
                    let i;
                    const l = () => {
                        clearTimeout(i), se(this, e, t)
                    };
                    this.img = new Image, (0, M.cn)(e.parentElement, "jw-related-loading"), i = setTimeout(l, le.K), this.img.onload = this.img.onerror = l, this.img.src = this.thumbnailUrl()
                }
            }
            class re {
                constructor(e) {
                    this.thumbnails = e || []
                }
                setWidths(e) {
                    this.thumbnailWidth && this.thumbnailWidth > e || (this.thumbnailWidth = e, this.thumbnails.forEach((t => {
                        t.setWidth(e)
                    })))
                }
                add(e) {
                    this.thumbnails.push(e)
                }
                flush() {
                    this.thumbnails = []
                }
            }

            function oe(e, t) {
                this.container = e, this.displayMode = t, this.videoThumbnails = new m, this.thumbnails = new re, this.items = null
            }
            oe.prototype.setItems = function(e, t, i) {
                const {
                    displayMode: l,
                    items: a
                } = this;
                this.videoThumbnails.flush(), this.thumbnails.flush(), this.items = e.map(((e, s) => {
                    const n = a ? a[s] : null,
                        r = Object.assign({}, e, {
                            index: s
                        }),
                        o = O(r, t, l, n);
                    let d = o.element;
                    return "shelfWidget" === this.displayMode ? (d = d.querySelector(".jw-related-shelf-item-image"), this.thumbnails.add(new ne(d, o.item))) : this.thumbnails.add(new Q(d, o.item)), this.videoThumbnails.create("shelfWidget" === this.displayMode ? "widgetItem" : "shelfItem", o.element, o.item, null, i), o
                }))
            }, oe.prototype.setThumbnailSrcs = function(e, t) {
                this.thumbnails.thumbnails.forEach(((i, l) => {
                    const a = l >= e * t && l < (e + 1) * t;
                    "shelfWidget" === this.displayMode && a && i.setSrc()
                }))
            };
            oe.prototype.update = function(e, t) {
                const {
                    container: i,
                    items: l
                } = this, a = Math.max(0, (e - 1) * t), s = Math.min(l.length, (e + 2) * t);
                ((e, t, i) => {
                    const l = Array.prototype.slice.call(e.childNodes);
                    for (let a = 0; a < l.length; a++) {
                        const s = parseInt(l[a].getAttribute("data-jw-index"), 10);
                        (s < t || s >= i || void 0 === t) && e.removeChild(l[a])
                    }
                })(i, a, s);
                if (i.childNodes.length)((e, t, i) => {
                    const l = e.firstChild;
                    if (!l) return;
                    const a = parseInt(l.getAttribute("data-jw-index"), 10);
                    for (let s = t; s < a; s++) {
                        const t = i[s];
                        e.insertBefore(t.element, l)
                    }
                })(i, a, l), ((e, t, i) => {
                    const l = e.lastChild;
                    if (!l) return;
                    for (let a = parseInt(l.getAttribute("data-jw-index"), 10) + 1; a < t; a++) {
                        const t = i[a];
                        e.appendChild(t.element)
                    }
                })(i, s, l);
                else
                    for (let e = a; e < s; e++) {
                        const t = l[e];
                        i.appendChild(t.element)
                    }
                return l.reduce(((i, l, a) => {
                    const s = a >= e * t && a < (e + 1) * t;
                    return s && i.push(l.item), (0, M.og)(l.element, "jw-related-item-visible", s), l.element.setAttribute("tabindex", s ? "0" : "-1"), i
                }), [])
            };
            var de = i(328);

            function he(e, t, i) {
                Object.assign(this, de.ZP);
                const l = e.querySelector(".jw-related-control-left"),
                    a = e.querySelector(".jw-related-control-right"),
                    s = e.querySelector(".jw-related-shelf-items"),
                    n = new oe(s, t);
                let r, o, d, h, c, p = !1,
                    m = [],
                    j = "",
                    u = !1,
                    g = !1,
                    v = [];
                this.items = n;
                const y = e => {
                        e && (d = e, j = (0, K.B)(K.F), this.trigger("feedShown", {
                            reason: e,
                            page: o,
                            visibleItems: v,
                            feedShownId: j
                        }))
                    },
                    x = (e, t) => {
                        v = n.update(o, r), !1 !== t && y(e)
                    },
                    b = () => {
                        g = 0 !== o, (0, M.og)(l, "jw-off", !g), l.setAttribute("tabindex", g ? "0" : "-1"), u = o !== h - 1, (0, M.og)(a, "jw-off", !u), a.setAttribute("tabindex", u ? "0" : "-1")
                    };
                this.load = (e, l) => {
                    o = 0, m = e, r = l, h = Math.ceil(m.length / r), this.items.setItems(m, (e => {
                        this.trigger("feedClick", {
                            lastShownReason: d,
                            page: o,
                            visibleItems: v,
                            item: e,
                            feedShownId: j
                        })
                    }), (e => {
                        this.trigger("videoThumbnailFirstFrame", {
                            page: o,
                            visibleItems: v,
                            item: e,
                            feedShownId: j
                        })
                    })), x("shelfWidget" === t ? "feed_loaded" : null), (0, M.cn)(s, "jw-related-shelf-start"), b(), "shelfWidget" === t && (n.thumbnails.setWidths(i.width / r), n.setThumbnailSrcs(o, r)), "shelf" === t && (n.thumbnails.setWidths(i.player.getWidth() / r), n.thumbnails.thumbnails.forEach((e => {
                        e.setSrc()
                    })))
                }, this.resize = function(e, t) {
                    if (e === r || !m || m.length < 1) return;
                    const i = h > 1 && o === h - 1;
                    r = e, h = Math.ceil(m.length / r), o = i ? h - 1 : Math.min(o, h), x("resized", t), b(), 0 === o && (0, M.cn)(s, "jw-related-shelf-start")
                };
                const k = (e, t) => {
                        s.addEventListener("transitionend", (i => ((e, t, i) => {
                            if (i.target === s) {
                                if (i.stopImmediatePropagation(), s.removeEventListener("transitionend", void 0), p) {
                                    x(e), (0, M.IV)(s, ["jw-related-shelf-animating", "jw-related-shelf-slide-next", "jw-related-shelf-slide-prev"]), p = !1;
                                    const i = s.querySelector(".jw-related-item-visible");
                                    t && ("enter" === t.type || "keydown" === t.type) && i && i.focus()
                                }
                                b()
                            }
                        })(e, t, i))), (0, M.cn)(s, "jw-related-shelf-animating"), p = !0, n.setThumbnailSrcs(o, r)
                    },
                    C = (e, t) => {
                        !p && g && (1 === o ? (0, M.cn)(s, "jw-related-shelf-start") : (0, M.cn)(s, "jw-related-shelf-slide-prev"), o--, k(e, t))
                    },
                    z = (e, t) => {
                        !p && u && (0 === o ? (0, M.IV)(s, "jw-related-shelf-start") : (0, M.cn)(s, "jw-related-shelf-slide-next"), o++, k(e, t))
                    },
                    S = e => {
                        if (e) switch (e.keyCode) {
                            case 39:
                                z("paged", e), e.stopPropagation();
                                break;
                            case 37:
                                C("paged", e), e.stopPropagation()
                        }
                    };
                this.onShelfToggled = (t, i) => {
                    e.removeEventListener("keydown", S), t ? (this.items.thumbnails.setWidths(), e.addEventListener("keydown", S), y(i)) : j = ""
                }, this.destroy = function() {
                    c && (c.destroy(), c = null), this.off()
                }, (0, I.Z)(l, C.bind(this, "paged")), (0, I.Z)(a, z.bind(this, "paged")), w.OS.mobile && (c = new f(s, {
                    swipe(e) {
                        "Left" === e.direction ? z("paged_swipe") : C("paged_swipe")
                    }
                }))
            }
            class we {
                constructor(e, t, i, l) {
                    this.player = e, this.model = t, this.playerModel = i, this.view = new ie(e, t, t.localization.related.heading), this.scroller = new he(this.view.container, "shelf", this.view), this.scroller.on("feedShown", this.feedShown, this), this.scroller.on("feedClick", this.feedClick, this), this.scroller.on("videoThumbnailFirstFrame", this.videoThumbFirstFrame, this), this.feed = null, this.feedType = l
                }
                loadItems(e, t, i) {
                    this.playerModel.off("change:viewable", null, this), this.feed = {
                        feedItems: e,
                        feedData: t,
                        feedUri: i
                    }, this.scroller.load(e, this.numItemsPerPage)
                }
                open(e, t) {
                    this.view.toggle(!0, t), this.scroller.onShelfToggled(!0, e), _(this.model, e, this.feed, !0)
                }
                close(e, t) {
                    this.playerModel.off("change:viewable", null, this), this.view.toggle(!1, t), this.scroller.onShelfToggled(!1, e), _(this.model, e, this.feed, !1)
                }
                resize(e) {
                    this.scroller.resize(this.numItemsPerPage, e)
                }
                feedShown({
                              reason: e,
                              page: t,
                              visibleItems: i,
                              feedShownId: l
                          }) {
                    const {
                        feed: a
                    } = this;
                    a.feedShownId = l, Y(this.model, e, this.feedType, "shelf", t, i, a, this.playerModel, this)
                }
                feedClick({
                              lastShownReason: e,
                              page: t,
                              visibleItems: i,
                              item: l,
                              feedShownId: a
                          }) {
                    const {
                        model: s,
                        feed: n,
                        feedType: r
                    } = this, {
                        feedData: o,
                        feedUri: d
                    } = n;
                    n.feedShownId = a, J(s, e, this.feedType, "shelf", t, i, l, this.playerModel.get("viewable"), n);
                    const h = "playlist" === r ? "playlistItemSelected" : "recsItemSelected";
                    s.trigger(h, {
                        item: l,
                        feedData: o,
                        feedUri: d
                    }, "related-interaction")
                }
                videoThumbFirstFrame({
                                         page: e,
                                         visibleItems: t,
                                         item: i,
                                         feedShownId: l
                                     }) {
                    const {
                        model: a,
                        feedData: s,
                        feedUri: n
                    } = this;
                    G(a, this.feedType, "shelfWidget", e, t, i, this.view.viewable, {
                        feedData: s,
                        feedUri: n,
                        feedShownId: l
                    })
                }
                destroy() {
                    this.view.destroy(), this.playerModel.off(null, null, this), this.scroller.destroy()
                }
                get isOpen() {
                    return this.view.isOpen
                }
                get numItemsPerPage() {
                    switch (this.model.breakpoint) {
                        case 7:
                        case 6:
                        case 5:
                            return 5;
                        case 4:
                            return 4;
                        case 3:
                        case 2:
                            return 3;
                        default:
                            return 0
                    }
                }
            }
            var ce = i(6517),
                pe = i.n(ce);
            let me;
            class je {
                constructor(e, t, i, l = "recs") {
                    this.player = t, this.playerModel = i, this.model = e, this.feedItems = [], this.feedData = {}, this.feedUri = "", this.overlay = new ee(t, e, i, l), this.openedOnPause = !1, this.feedType = l, "shelf" === this.displayMode && (this.shelf = new we(t, e, i, l), t.on("pause", this.onPause, this), t.on("play", this.onPlay, this)), this.shouldControlAutoadvance = "recs" === l || !1 === e.get("shouldAutoAdvance"), (this.shelf || this.shouldControlAutoadvance) && t.on("complete", this.onComplete, this), e.change("breakpoint", this.onResize, this), e.on("close", this.close, this)
                }
                updateFeed(e, t, i) {
                    this.feedItems = e, this.feedData = t, this.feedUri = i, this.overlay.loadItems(e, t, i), this.shelf && this.shelf.loadItems(e, t, i), this.playerModel.off("change:controlsEnabled", this.controlsEnabled), this.playerModel.change("controlsEnabled", this.controlsEnabled, this)
                }
                controlsEnabled(e, t) {
                    t && (e.off("change:controlsEnabled", this.controlsEnabled), this.model.showButton && (this.shelf && this.shelf.view.attachInterface(), this.createButtons()))
                }
                onPause() {
                    const {
                        shelf: e
                    } = this;
                    this.currentView !== e || e.isOpen || (this.open("on_pause"), this.openedOnPause = !0)
                }
                onPlay() {
                    this.currentView === this.shelf && this.openedOnPause && this.close("play")
                }
                onComplete() {
                    var e;
                    const t = this.model.onComplete;
                    null != (e = this.shelf) && e.isOpen && this.shelf.close("complete"), this.shouldControlAutoadvance && (!0 === this.model.get("shouldAutoAdvance") ? this.overlay.autoAdvance() : "hide" !== t && this.overlay.open("complete"))
                }
                toggleShelf(e, t) {
                    const i = this.shelf;
                    i.isOpen ? this.close(e, t) : this.open(e, t), this.moreButton.setAttribute("aria-expanded", i.isOpen)
                }
                open(e, t) {
                    const {
                        currentView: i
                    } = this;
                    i && (i !== this.shelf || this.playerModel.get("controls")) && i.open(e, t)
                }
                close(e, t) {
                    const {
                        currentView: i,
                        shelf: l,
                        player: a
                    } = this;
                    i && (i !== l || this.playerModel.get("controls")) && i.isOpen && (i !== l || "interaction" !== e && "interaction_more" !== e || !this.openedOnPause || (a.off("pause", this.onPause, this), a.off("play", this.onPlay, this)), this.openedOnPause = !1, i.close(e, t), !t || "enter" !== t.type && "escape" !== t.type || this.currentButton.focus())
                }
                onResize() {
                    const {
                        shelf: e,
                        overlay: t,
                        currentView: i
                    } = this, {
                        breakpoint: l
                    } = this.model;
                    i && (i.resize(i.isOpen), e && (l < 2 && e.isOpen ? (e.close(), t.open("resized")) : l >= 2 && t.isOpen && i !== t && (t.close(), e.open("resized"))))
                }
                showButton() {
                    const {
                        controlbarButton: e,
                        moreButton: t,
                        player: i
                    } = this;
                    t ? ((0, M.og)(t, "jw-hidden", this.smallPlayer), (0, M.og)(e, "jw-hidden", !this.smallPlayer)) : e && (0, M.og)(e, "jw-hidden", !1);
                    const l = i.getContainer().querySelector(".jw-logo");
                    l && (0, M.og)(l, "jw-logo-bump", this.currentButton === t && this.model.bumpLogo)
                }
                get smallPlayer() {
                    return this.model.breakpoint < 2
                }
                createButtons() {
                    const {
                        player: e,
                        model: t,
                        shelf: i
                    } = this, l = e.getContainer(), a = t.localization.related.heading, s = "jw-related-btn";
                    if (this.controlbarButton || "shelfWidget" === this.displayMode || (e.addButton(pe(), a, (e => this.open("interaction", e)), "related", s), this.controlbarButton = l.querySelector(".jw-related-btn"), (0, M.og)(this.controlbarButton, "jw-hidden", !0)), i && !this.moreButton) {
                        me || (me = (0, S.Z)(pe())), this.moreButton = U("jw-related-more", me.cloneNode(!0), (e => this.toggleShelf("interaction_more", e)), !0), this.moreButton.appendChild(document.createTextNode(a));
                        const e = i.view.container;
                        e.insertBefore(this.moreButton, e.firstChild)
                    }
                    t.change("breakpoint", this.showButton, this)
                }
                destroy() {
                    this.player.off(null, null, this), this.playerModel.off(null, null, this), this.model.off(null, null, this), this.shelf && this.shelf.destroy(), this.overlay.destroy(), this.player.removeButton("related");
                    const {
                        moreButton: e
                    } = this;
                    null != e && e.parentNode && e.parentNode.removeChild(e)
                }
                get displayMode() {
                    return this.model.displayMode
                }
                get currentView() {
                    return this.model.breakpoint < 2 || "overlay" === this.displayMode || "complete" === this.player.getState() ? this.overlay : this.shelf
                }
                get currentButton() {
                    const {
                        model: e
                    } = this;
                    return e.breakpoint >= 2 && "shelf" === this.displayMode ? this.moreButton : this.controlbarButton
                }
                get items() {
                    return this.feedItems
                }
                set items(e) {
                    this.feedItems = e
                }
            }
            class ue extends je {
                constructor(e, t, i) {
                    super(e, t, i, "playlist")
                }
                updateFeed(e, t) {
                    this.feedItems !== e && super.updateFeed(e, t, "")
                }
                get displayMode() {
                    return this.model.configDisplayMode ? this.model.displayMode : "overlay"
                }
            }
            const ge = function(e) {
                    this.storage = e
                },
                fe = e => e.mediaid || e.file || (Array.isArray(e.sources) && e.sources[0] || {}).file;
            ge.prototype.filterAvailableItems = function(e, t, i) {
                let l = ((e, t) => e.filter((e => {
                    const i = Array.isArray(e.sources) && e.sources[0] || {};
                    return e.image && e.title && ("play" === t && (i.file || e.file) || "play" !== t && e.link)
                })))(e, i);
                if (l = ((e, t) => e.filter((e => -1 === t.indexOf(fe(e)))))(l, (t || []).map((e => fe(e)))), !l) return null;
                const a = this.getUnstoredRecommendations(l);
                return a.length ? a : (this.restoreRecommendations(e), l)
            }, ge.prototype.saveRecommendations = function(e) {
                e.forEach((e => this.storage.addItem(fe(e))))
            }, ge.prototype.itemSelected = function(e, t, i) {
                return this.storage.addItem(fe(e), i), t.splice(e.index, 1), t
            }, ge.prototype.restoreRecommendations = function(e) {
                e.forEach((e => this.storage.removeItem(fe(e))))
            }, ge.prototype.getUnstoredRecommendations = function(e) {
                return e.filter((e => !this.storage.containsItem(fe(e))))
            };
            const ve = ge;
            var ye = i(7753),
                xe = i(67);
            const be = "shelf";
            class ke extends ye.Z {
                constructor(e, t, i) {
                    super();
                    const {
                        id: l,
                        localization: a,
                        logo: s,
                        __abSendDomainToFeeds: n
                    } = e, {
                        autoplaytimer: r,
                        disableRelated: o = !1,
                        displayMode: d,
                        displayMode: h = be,
                        file: w,
                        oncomplete: c,
                        recommendations: p,
                        showButton: m = !0,
                        shouldAutoAdvance: j
                    } = t, u = t.requestOptions || {};
                    n && (u.queryParams = Object.assign({}, u.queryParams, {
                        page_domain: (0, xe.X)()
                    }));
                    const g = a.related.autoplaymessage,
                        f = r >= 0 ? r : 10,
                        v = Boolean(s && "bottom-left" === s.position),
                        y = "autoplay" === c ? "play" : t.onclick,
                        x = t.selector || `#${l}-shelf-widget`;
                    var b, k, C;
                    b = this, k = this.attributes, C = {
                        autoplayMessage: g,
                        autoplayTimer: f,
                        bumpLogo: v,
                        disableRelated: Boolean(o),
                        configDisplayMode: d,
                        displayMode: /shelf(?:Widget)?|overlay|none/.test(h) ? h : be,
                        file: w,
                        onComplete: c,
                        onItemSelect: y,
                        pluginContainer: i,
                        recommendations: p,
                        requestOptions: u,
                        selector: x,
                        showButton: Boolean(m),
                        localization: a,
                        shouldAutoAdvance: j
                    }, Object.keys(C).forEach((e => {
                        const t = C[e];
                        Object.defineProperty(k, e, ((e, t) => ({
                            enumerable: !0,
                            configurable: !1,
                            writable: !1,
                            value: e
                        }))(t)), Object.defineProperty(b, e, {
                            get: () => k[e],
                            enumerable: !1
                        })
                    })), this.addAttributes({
                        nextUp: null,
                        breakpoint: 0
                    })
                }
            }
            const Ce = (e => {
                let t;
                const i = "jwplayer.mediaIds";
                let l, a = {};
                const s = () => {
                        try {
                            Object.keys(l).length ? a[i] = JSON.stringify(l) : delete a[i]
                        } catch (e) {}
                    },
                    n = e => {
                        delete l[e], s()
                    },
                    r = e => {
                        const t = Object.keys(l).filter((e => !(Date.now() >= l[e] && (n(e), 1)))).sort(((e, t) => l[e] - l[t]));
                        for (; e-- > 0;) delete l[t.shift()];
                        s()
                    },
                    o = function() {
                        try {
                            a = e.localStorage
                        } catch (e) {}
                        this.addItem = (e, t) => {
                            const n = "auto" === t ? 36e5 : 6e5;
                            ((e, t) => {
                                (a[i] || "").length >= 1e3 && r(1), l[e] = t, s()
                            })(e, Date.now() + n)
                        }, this.removeItem = e => {
                            l[e] && n(e)
                        }, this.containsItem = e => {
                            const t = l[e];
                            return !!t && (!(Date.now() >= t) || (n(e), !1))
                        }
                    };
                return function() {
                    if (!t) {
                        t = new o;
                        const e = a[i];
                        if (e) try {
                            l = JSON.parse(e)
                        } catch (e) {}
                        l = l || {}
                    }
                    return t
                }
            })(window);
            var ze = i(6436),
                Ie = i(9926);
            class Se {
                constructor(e, t, i) {
                    Object.assign(this, de.ZP), this.player = e, this.playerModel = i, this.model = t, this.container = null, this.createContainer = null, this.visible = !0, this.scroller = null, this.width = 0, this.viewable = null, this.intersectionEntry = null, this.resizeListener = null, V(), e.on("fullscreen", (e => {
                        e.fullscreen ? this.updateViewable(0) : this.setIntersection(this.intersectionEntry)
                    }), this)
                }
                resize(e, t) {
                    this.width = t;
                    const {
                        itemsPerPage: i
                    } = this;
                    this.scroller || this.setup(this.model.selector), (0, M.L_)(this.container, /jw-shelf-items-\d+/, `jw-shelf-items-${i}`), this.scroller.resize(i)
                }
                get itemsPerPage() {
                    const e = Math.max(0, this.width - 60);
                    return Math.ceil(Math.min(Math.max(2, e / 200), 5))
                }
                setup(e) {
                    const {
                        player: t,
                        playerModel: i,
                        model: l
                    } = this, {
                        localization: a
                    } = l, s = t.getContainer(), n = s.ownerDocument || document;
                    let r = n.querySelector(e);
                    (this.createContainer = !r) ? (r = n.createElement("div"), r.id = e.replace(/^#/, ""), s.nextSibling ? s.parentNode.insertBefore(r, s.nextSibling) : s.parentElement.appendChild(r), i.change("width", ((e, t) => {
                        (0, N.oB)(r, {
                            width: t
                        })
                    }), this), this.width = i.get("isFloating") ? i.attributes.width : i.get("containerWidth")) : (this.width = r.clientWidth || 320, (0, M.EU)(r), "static" === window.getComputedStyle(r).position && (0, N.oB)(r, {
                        position: "relative"
                    })), this.resizeListener = new Ie.Z(r, this, this.model);
                    const {
                        itemsPerPage: o
                    } = this;
                    this.container = r, this.toggle(this.visible);
                    const d = ["jw-related-shelf-container", "jw-shelf-widget", `jw-shelf-items-${o}`];
                    i.get("touchMode") && d.push("jw-flag-touch"), (0, M.cn)(r, d), l.change("breakpoint", ((e, t) => {
                        (0, ze.d)(r, Math.max(2, t))
                    }), this);
                    const h = (0, M.az)('<div class="jw-related-shelf-contents">'),
                        w = (0, M.az)(`<div class="jw-related-more">${a.related.heading}</div>`),
                        c = (0, M.az)(te(a.prev, a.next, ""));
                    h.appendChild(w), h.appendChild(c), r.appendChild(h);
                    const p = new he(r, "shelfWidget", this),
                        m = [];
                    for (let e = 0; e < o; e++) m.push({});
                    this.scroller = p, p.onShelfToggled(!0), p.items.setItems(m), p.items.update(0, m.length)
                }
                toggle(e) {
                    this.visible = e, this.container && (0, N.oB)(this.container, {
                        display: e ? "" : "none"
                    })
                }
                updateBounds() {
                    this.model.set("containerWidth", this.container.offsetWidth)
                }
                checkResized() {
                    this.resize(null, this.model.get("containerWidth"))
                }
                getContainer() {
                    return this.container
                }
                setIntersection(e) {
                    const {
                        playerModel: t
                    } = this;
                    !t.get("fullscreen") && t.get("activeTab") ? (this.intersectionEntry = e, this.updateViewable(Math.round(e.intersectionRatio))) : this.updateViewable(0)
                }
                updateViewable(e) {
                    this.viewable !== e && (this.viewable = e, this.trigger("viewable", e))
                }
                destroy() {
                    const {
                        container: e,
                        scroller: t
                    } = this;
                    this.player.off(null, null, this), this.playerModel.off(null, null, this), this.model.off(null, null, this), this.resizeListener && (this.resizeListener.destroy(), this.resizeListener = null), this.off(), t && t.destroy(), e && ((0, M.EU)(e), e.parentNode && this.createContainer ? e.parentNode.removeChild(e) : (0, M.L_)(e, /jw-.+/, ""), this.container = null, this.createContainer = null)
                }
            }
            var Me = i(4671);
            class Pe {
                constructor(e, t, i) {
                    this.player = e, this.model = i, this.feedItems = [], this.feedData = {}, this.feedUri = "", this.view = new Se(e, i, t), i.once("change:breakpoint", this.setup, this)
                }
                setup() {
                    const {
                        view: e
                    } = this;
                    e.scroller || (e.setup(this.model.selector), Me.Z.addWidget(e), Me.Z.observe(e.container), e.scroller.on("feedShown", this.feedShown, this), e.scroller.on("feedClick", this.feedClick, this), e.scroller.on("videoThumbnailFirstFrame", this.videoThumbFirstFrame, this))
                }
                loadItems(e) {
                    const {
                        view: t
                    } = this;
                    t.off("viewable", null, this), this.setup(), t.scroller.load(e, t.itemsPerPage)
                }
                toggle(e) {
                    const {
                        view: t
                    } = this;
                    t.off("viewable", null, this), t.toggle(e)
                }
                feedClick({
                              lastShownReason: e,
                              page: t,
                              visibleItems: i,
                              item: l,
                              feedShownId: a
                          }) {
                    const {
                        model: s,
                        feedData: n,
                        feedUri: r
                    } = this;
                    J(s, e, this.feedType, "shelfWidget", t, i, l, this.view.viewable, {
                        feedData: n,
                        feedUri: r,
                        feedShownId: a
                    });
                    const o = "playlist" === this.feedType ? "playlistItemSelected" : "recsItemSelected";
                    s.trigger(o, {
                        item: l,
                        feedData: n,
                        feedUri: r
                    }, "related-interaction");
                    this.player.getContainer().focus({
                        preventScroll: !0
                    })
                }
                feedShown({
                              reason: e,
                              page: t,
                              visibleItems: i,
                              feedShownId: l
                          }) {
                    const {
                        view: a,
                        feedData: s,
                        feedUri: n
                    } = this;
                    a.off("viewable", null, this);
                    const r = a.viewable;
                    null !== r ? (X(this.model, e, this.feedType, "shelfWidget", t, i, r, {
                        feedData: s,
                        feedUri: n,
                        feedShownId: l
                    }), r || a.once("viewable", (e => {
                        X(this.model, "inView", this.feedType, "shelfWidget", t, i, e, {
                            feedData: s,
                            feedUri: n,
                            feedShownId: l
                        })
                    }), this)) : a.once("viewable", (() => this.feedShown({
                        reason: e,
                        page: t,
                        visibleItems: i,
                        feedShownId: l
                    })), this)
                }
                videoThumbFirstFrame({
                                         page: e,
                                         visibleItems: t,
                                         item: i,
                                         feedShownId: l
                                     }) {
                    const {
                        model: a,
                        feedData: s,
                        feedUri: n
                    } = this;
                    G(a, this.feedType, "shelfWidget", e, t, i, this.view.viewable, {
                        feedData: s,
                        feedUri: n,
                        feedShownId: l
                    })
                }
                destroy() {
                    const {
                        view: e
                    } = this;
                    this.model.off(null, null, this), Me.Z.unobserve(e.container), Me.Z.remove(e), e.destroy()
                }
                updateFeed(e, t, i) {
                    this.feedItems = e, this.feedData = t, this.feedUri = i, this.loadItems(e)
                }
                get items() {
                    return this.feedItems
                }
                set items(e) {
                    this.feedItems = e
                }
                get feedType() {
                    return this.feedItems.length && !this.feedUri ? "playlist" : "recs"
                }
            }
            var Le = i(6245);
            const Ee = (e, t) => {
                    let i = null;
                    return e && (e.indexOf("MEDIAID") >= 0 ? t && (i = e.replace("MEDIAID", t)) : i = e), i
                },
                Te = (e, t) => {
                    const {
                        mediaid: i
                    } = e, l = Ee(e.recommendations, i), a = Ee(t.recommendations, i), s = Ee(t.file, i);
                    return {
                        feed: l,
                        recommendation: a,
                        file: s,
                        isValid: Boolean(l || a || s)
                    }
                };
            class Ve extends de.ZP {
                constructor(e) {
                    super(), this.player = e, this.playerModel = null, this.relatedFilter = new ve(Ce(window)), this.loader = null, this.playlistController = null, this.recsController = null, this.widgetController = null
                }
                setup(e, t, i) {
                    if (this.playerModel) return;
                    this.playerModel = e;
                    const {
                        player: l
                    } = this, a = new ke(l.getConfig(), t, i);
                    this.model = a, a.on("playlistItemSelected", this.playlistItemSelected, this), a.on("recsItemSelected", this.recsItemSelected, this), a.on("error", this.onError, this), a.on("analytics", this.onAnalytics, this), l.on("breakpoint", (({
                                                                                                                                                                                                                                                                 breakpoint: e
                                                                                                                                                                                                                                                             }) => {
                        a.breakpoint = e
                    })), a.breakpoint = (0, ze.i)(e.get("containerWidth")), l.on("remove", this.destroy, this), "shelfWidget" === a.displayMode && (this.widgetController = new Pe(l, e, a)), l.trigger("relatedReady", {}), e.change("playlistItem", ((t, i) => {
                        i && this.onPlaylistItem({
                            item: i,
                            index: e.get("item")
                        })
                    }), this)
                }
                playlistItemSelected({
                                         item: e
                                     }, t) {
                    const {
                        player: i
                    } = this;
                    this.close(null, "play");
                    const l = t || "related-interaction";
                    "related-auto" === l ? i.next({
                        reason: l
                    }) : i.playlistItem(e.index, {
                        reason: l
                    })
                }
                recsItemSelected({
                                     item: e,
                                     feedData: t,
                                     feedUri: i
                                 }, l) {
                    const {
                        model: a,
                        player: s,
                        relatedFilter: n,
                        widgetController: r,
                        recsController: o
                    } = this;
                    this.close(null, "play");
                    const d = l && l.indexOf("auto") >= 0 ? "auto" : "";
                    ((e, t, i, l, {
                        feedData: a,
                        feedUri: s
                    }) => {
                        const n = e.autoplayTimer,
                            r = t && t.indexOf("auto") > -1;
                        let o = t;
                        r || (o = "play" === e.onItemSelect ? "manual" : "link");
                        const d = {
                            item: l,
                            feedData: a,
                            auto: r,
                            autoplaytimer: n >= 0 ? n : -1,
                            position: l.index,
                            method: o
                        };
                        l.pin_set_id && (d.pin_set_id = l.pin_set_id), e.trigger("analytics", "play", W(e, d, s))
                    })(a, d || l, 0, e, {
                        feedData: t,
                        feedUri: i
                    }), "link" === a.onItemSelect ? window.top.location = e.link : (s.load(e, t), s.getPlaylistItemPromise(0).then((() => {
                        s.play({
                            reason: l
                        })
                    })).catch((() => {})));
                    const h = r || o,
                        w = n.itemSelected(e, h.items, d);
                    r && (r.items = w), o && (o.items = w);
                    const c = Te(e, a);
                    this.loadRecs(c)
                }
                open(e) {
                    const {
                        playlistController: t,
                        recsController: i
                    } = this;
                    t ? t.open("api", e) : i && i.open("api", e)
                }
                close(e, t = "api") {
                    const {
                        playlistController: i,
                        recsController: l
                    } = this;
                    i ? i.close(t, e) : l && l.close(t, e)
                }
                next(e) {
                    const {
                        player: t,
                        playlistController: i
                    } = this;
                    if (i) return this.close(null, "play"), void t.playlistNext(e);
                    const l = this.widgetController || this.recsController;
                    if (l) {
                        const t = l.items,
                            i = t[0],
                            a = l.feedData,
                            s = l.feedUri;
                        e = e || {}, i && this.recsItemSelected({
                            item: i,
                            items: t,
                            feedData: a,
                            feedUri: s
                        }, e.reason || "external")
                    }
                }
                onAnalytics(e, t) {
                    this.trigger(e, t)
                }
                onPlaylistItem({
                                   index: e,
                                   item: t
                               }) {
                    const {
                        player: i,
                        playerModel: l,
                        model: a
                    } = this, {
                        playlist: s,
                        feedData: n
                    } = l.attributes, r = e === s.length - 1, o = s[e + 1], d = "shelfWidget" === a.displayMode, h = Te(t, a), w = !a.disableRelated && h.isValid;
                    let c = !1;
                    if (d) {
                        const e = r && w,
                            t = s.length > 1 && !e;
                        this.widgetController.toggle(w || t), t ? this.widgetController.feedItems !== s && ((0, Le.g)(s, "images", "image"), this.widgetController.updateFeed(s, n, "")) : w && (c = !0, this.loadRecs(h))
                    }
                    r ? w ? (this.removePlaylist(), this.recsController || (this.recsController = new je(a, i, l)), c || this.loadRecs(h)) : (this.trigger("nextUp", null), this.removeRecs(), 1 === s.length && this.removePlaylist()) : (this.removeRecs(), this.playlistController || (this.playlistController = new ue(a, i, l)), this.playlistController.updateFeed(s, n), this.trigger("nextUp", Object.assign({}, o, {
                        mode: "playlist",
                        feedData: o.feedData || {},
                        showNextUp: !0
                    }))), a.nextUp = o
                }
                loadRecs(e) {
                    this.loader || (this.loader = new h(this.model.requestOptions));
                    const {
                        feed: t,
                        recommendation: i,
                        file: l
                    } = e, a = (e, t, i) => this.updateFeed(e, t, i), s = e => {
                        this.trigger("warning", e), this.onError()
                    };
                    t ? this.loader.load(t, a, s, a) : i ? this.loader.loadRecommendation(i, l, a, s, a) : l ? this.loader.load(l, a, s, a) : this.onError("No Valid Feeds")
                }
                updateFeed(e, t, i) {
                    const {
                        model: l,
                        player: a,
                        relatedFilter: s,
                        widgetController: n,
                        recsController: r
                    } = this, o = this.playlistController ? this.playlistController.items : a.getPlaylist(), d = s.filterAvailableItems(e, o, l.onItemSelect);
                    if (d.length) {
                        if ((0, Le.g)(d, "images", "image"), n && n.updateFeed(d, t, i), r && r.updateFeed(d, t, i), !this.playlistController) {
                            const e = d ? d[0] : null;
                            this.playerModel.set("recItems", d), l.nextUp = e, e && this.trigger("nextUp", Object.assign({}, e, {
                                mode: "discovery",
                                feedData: t,
                                showNextUp: !0
                            }))
                        }((e, t, i) => {
                            e.trigger("analytics", "playlist", W(e, {
                                playlist: t,
                                feedData: i
                            }))
                        })(l, d, t)
                    } else this.onError("Empty Feed")
                }
                onError() {
                    this.playlistController || this.playerModel.set("nextUp", null), this.removeRecs(), this.widgetController && this.widgetController.toggle(!1)
                }
                removeRecs() {
                    this.recsController && (this.recsController.destroy(), this.recsController = null)
                }
                removePlaylist() {
                    this.playlistController && (this.playlistController.destroy(), this.playlistController = null)
                }
                destroy() {
                    this.removeRecs(), this.removePlaylist(), this.widgetController && (this.widgetController.destroy(), this.widgetController = null)
                }
            }
            const Be = Ve,
                Ae = function(e, t, i) {
                    const l = new Be(e);
                    this.setup = e => l.setup(e, t, i), this.destroy = () => l.destroy(), this.open = e => l.open(e), this.close = e => l.close(e), this.next = e => l.next(e), this.on = (e, t, i) => l.on(e, t, i), this.once = (e, t, i) => l.once(e, t, i), this.off = (e, t, i) => l.off(e, t, i), this.trigger = (e, t) => l.trigger(e, t)
                }
        },
        2475: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => r
            });
            var l = i(8081),
                a = i.n(l),
                s = i(3645),
                n = i.n(s)()(a());
            n.push([e.id, '.jw-related,.jw-related-autoplay-svg,.jw-related-container,.jw-related-item-container,.jw-related-item-content,.jw-related-item-content-container,.jw-related-item-group,.jw-related-item-play .jw-svg-icon,.jw-related-item-poster,.jw-related-shelf-item-contents,.jw-related-shelf-items,.jw-related-shelf-list,.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::before,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-poster::after{height:100%;width:100%}.jw-flag-small-player .jw-related-container,.jw-related-autoplay-svg,.jw-related-title,.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::after,.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::before,.jw-shelf-widget .jw-svg-icon-play,.jwplayer .jw-overlays .jw-plugin-related.jw-plugin-related-open,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-poster::after{top:0;position:absolute;left:0}.jw-related-item-title,.jwplayer:not(.jw-flag-small-player) .jw-related-item-content .jw-related-item-title-text::after,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content-container::after{position:absolute;bottom:0;left:0}.jw-related .jw-icon-inline.jw-related-close{position:absolute;top:0;right:0}.jw-flag-small-player .jw-related-container,.jw-related-autoplay-svg,.jw-shelf-widget .jw-svg-icon-play,.jwplayer .jw-overlays .jw-plugin-related.jw-plugin-related-open{position:absolute;bottom:0;right:0}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::after,.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::before,.jwplayer:not(.jw-flag-small-player) .jw-related-item-content .jw-related-item-title-text::after,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content-container::after{content:"";display:block}.jw-plugin-related{overflow:hidden;width:100%}.jw-plugin-related:not(.jw-plugin-related-open){pointer-events:none;display:none}.jw-flag-small-player .jw-plugin-related:not(.jw-plugin-related-open){top:0;bottom:auto}.jw-flag-touch:not(.jw-flag-small-player) .jw-plugin-related:not(.jw-plugin-related-open){bottom:88px}.jw-plugin-related.jw-plugin-related-open{opacity:1;visibility:visible}.jwplayer .jw-overlays .jw-plugin-related.jw-plugin-related-open{background-color:#000;display:block}.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-title{display:none}.jw-related{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:normal;pointer-events:all;position:relative}.jw-related-container{overflow:hidden}.jw-flag-small-player .jw-related-container{display:inline-block;margin:44px auto auto;overflow:visible;padding:0;height:calc(100% - (44px * 1.5));width:calc(100% - (44px * 3))}.jw-breakpoint-2 .jw-related-container,.jw-breakpoint-3 .jw-related-container,.jw-breakpoint-4 .jw-related-container{padding:44px 44px 11px}.jw-breakpoint-5 .jw-related-container{padding:44px 50px 6px}.jw-breakpoint-6 .jw-related-container{padding:66px 66px 33px}.jw-breakpoint-7 .jw-related-container{padding:77px 77px 37px}.jw-orientation-portrait .jw-related-container{align-items:center;display:flex}.jw-related-title{color:#aaa;background-color:transparent;font-size:16px;line-height:2.75;overflow:hidden;padding:0 1em;text-overflow:ellipsis;width:100%;padding-right:44px;white-space:nowrap}.jw-breakpoint-5 .jw-related-title{font-size:20px;line-height:3}.jw-breakpoint-6 .jw-related-title{font-size:24px}.jw-breakpoint-7 .jw-related-title{font-size:28px}.jw-related-item-group{overflow:hidden;position:relative}.jw-related-item-next-up+.jw-related-item-group{display:none}.jw-breakpoint-2 .jw-related-item-next-up+.jw-related-item-group{width:50%}.jwplayer:not(.jw-flag-small-player):not(.jw-breakpoint-2) .jw-related-item-next-up+.jw-related-item-group{width:66.66666667%}.jwplayer:not(.jw-flag-small-player) .jw-related-item-group{display:block}.jw-flag-small-player .jw-related-item-group{display:flex;flex-flow:row nowrap;overflow:visible;transition:transform 150ms cubic-bezier(0,.25,.25,1)}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child){animation:none;flex:0 0 auto;opacity:.5;transform:scale(.75,.75);transform-origin:50% 50%;transition:all 150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform,transform-origin;pointer-events:none}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content .jw-related-item-title .jw-related-item-title-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content:hover .jw-related-item-title .jw-related-item-title-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus .jw-related-item-title .jw-related-item-title-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus:hover .jw-related-item-title .jw-related-item-title-text{background:0 0;white-space:nowrap}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content .jw-related-item-title .jw-related-item-title-text::after,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content:hover .jw-related-item-title .jw-related-item-title-text::after,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus .jw-related-item-title .jw-related-item-title-text::after,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus:hover .jw-related-item-title .jw-related-item-title-text::after{content:none}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content .jw-related-item-title .jw-related-next-up-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-content:hover .jw-related-item-title .jw-related-next-up-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus .jw-related-item-title .jw-related-next-up-text,.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child):focus:hover .jw-related-item-title .jw-related-next-up-text{font-weight:400;padding:0 10px 5px}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-poster-content{background:rgba(0,0,0,.4)}.jw-flag-small-player .jw-related-item-group .jw-related-item:not(:only-child) .jw-related-item-duration{display:none}.jw-flag-small-player .jw-related-item-group .jw-related-item:first-child{transform-origin:80% 50%}.jw-flag-small-player .jw-related-item-group .jw-related-item.jw-related-active-item{pointer-events:auto;opacity:1;transform:scale(1,1)}.jw-flag-small-player .jw-related-item-group .jw-related-item.jw-related-active-item .jw-related-item-poster-content{background:rgba(0,0,0,.4)}.jw-flag-small-player .jw-related-item-group .jw-related-item.jw-related-active-item~.jw-related-item{transform-origin:20% 50%}@media (orientation:landscape){.jw-flag-fullscreen .jw-orientation-portrait .jw-related-item-group{display:block}}@media (orientation:portrait){.jw-orientation-portrait .jw-related-item.jw-related-item-next-up{width:100%}}.jw-related-item{float:left;height:100%;overflow:hidden;width:100%;outline:0}.jw-related-item:focus .jw-related-item-content{outline:solid 2px #4d90fe}.jw-breakpoint-2 .jw-related-item,.jw-breakpoint-3 .jw-related-item,.jw-breakpoint-4 .jw-related-item{padding:6px}.jw-breakpoint-5 .jw-related-item,.jw-breakpoint-6 .jw-related-item{padding:10px}.jw-breakpoint-7 .jw-related-item{padding:15px}.jw-breakpoint-2 .jw-related-item-group .jw-related-item{height:50%;width:50%;display:none}.jw-breakpoint-2 .jw-related-item-group .jw-related-item:nth-child(-n+4){display:block}.jw-breakpoint-2 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n+2){display:block;width:100%}.jw-breakpoint-3 .jw-related-item-group .jw-related-item:nth-child(-n+6),.jw-breakpoint-4 .jw-related-item-group .jw-related-item:nth-child(-n+9){display:block}.jw-breakpoint-3 .jw-related-item-group .jw-related-item{height:50%;width:33.33333333%;display:none}.jw-breakpoint-4 .jw-related-item-group .jw-related-item{height:33.33333333%;width:33.33333333%;display:none}.jw-breakpoint-3 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n+4),.jw-breakpoint-4 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n+6),.jw-breakpoint-5 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n+6),.jw-breakpoint-6 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n+6),.jw-breakpoint-7 .jw-related-item-next-up+.jw-related-item-group .jw-related-item:nth-child(-n+6){display:block;width:50%}.jw-breakpoint-4 .jw-related-item-group .jw-related-item,.jw-breakpoint-5 .jw-related-item-group .jw-related-item,.jw-breakpoint-6 .jw-related-item-group .jw-related-item,.jw-breakpoint-7 .jw-related-item-group .jw-related-item{height:33.33333333%;width:33.33333333%;display:block}.jw-plugin-related-open .jw-related-item{animation:jw-related-item 250ms both cubic-bezier(0,.25,.25,1)}.jw-plugin-related-open .jw-related-item:nth-child(1){animation-delay:50ms}.jw-plugin-related-open .jw-related-item:nth-child(2){animation-delay:.1s}.jw-plugin-related-open .jw-related-item:nth-child(3){animation-delay:150ms}.jw-plugin-related-open .jw-related-item:nth-child(4){animation-delay:.2s}.jw-plugin-related-open .jw-related-item:nth-child(5){animation-delay:250ms}.jw-plugin-related-open .jw-related-item:nth-child(6){animation-delay:.3s}.jw-plugin-related-open .jw-related-item.jw-related-item-next-up{animation-delay:0s}.jw-flag-small-player .jw-plugin-related-open .jw-related-item{animation-delay:0s}.jw-related-item-content{background-color:#000;border:solid 1px rgba(255,255,255,.2);box-sizing:border-box;cursor:pointer;display:block;overflow:hidden;position:relative;text-decoration:none;transition:border-color 150ms cubic-bezier(0,.25,.25,1)}.jwplayer:not(.jw-flag-small-player) .jw-related-item-content .jw-related-item-title-text::after{height:30px;width:100%;background-image:linear-gradient(transparent,#000);opacity:0}.jw-related-item-content:hover,.jw-related-item:focus .jw-related-item-content{background-color:#000;border-color:#fff}.jw-related-item-content:hover .jw-related-item-title-text,.jw-related-item:focus .jw-related-item-content .jw-related-item-title-text{background-image:linear-gradient(transparent,#000);visibility:visible;white-space:normal}.jw-related-item-content:hover .jw-related-item-title-text::after,.jw-related-item:focus .jw-related-item-content .jw-related-item-title-text::after{opacity:1}.jw-related-item-content-container{overflow:hidden;position:relative}.jw-related-item-poster{background-position:center center;background-repeat:no-repeat;background-size:cover;overflow:hidden;display:block}.jw-related-item-poster-content{height:100%;overflow:hidden;position:relative}.jw-related-item-duration{position:absolute;top:15px;right:15px;color:#fff;font-size:12px;font-weight:700;letter-spacing:.3px;text-align:right;text-shadow:-1px -1px 20px rgba(0,0,0,.5),1px 1px 20px rgba(0,0,0,.5)}.jw-breakpoint-2 .jw-related-item-duration,.jw-breakpoint-3 .jw-related-item-duration{position:absolute;top:10px;right:10px}.jw-breakpoint-6 .jw-related-item-duration,.jw-breakpoint-7 .jw-related-item-duration{position:absolute;top:20px;right:20px}.jw-breakpoint-6 .jw-related-item-duration{font-size:14px}.jw-breakpoint-7 .jw-related-item-duration{font-size:15px}.jw-related-item-play{top:50%;position:absolute;left:50%;transform:translate(-50%,-50%);transition:opacity 150ms cubic-bezier(0,.25,.25,1);opacity:0}.jw-breakpoint-0 .jw-related-item-play{height:32px;width:32px}.jw-flag-small-player .jw-related-item-next-up .jw-related-item-play{transform:translate(-50%,-75%)}.jw-flag-small-player .jw-related-active-item .jw-related-item-play,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up:hover .jw-related-item-play{opacity:1}.jw-related-item-title{overflow:hidden;text-decoration:none;text-shadow:0 0 2px rgba(0,0,0,.5);width:100%}.jw-related-item-title .jw-related-next-up-text{color:currentColor;display:none;font-size:13px;padding:0 15px;text-align:start}.jw-flag-small-player .jw-related-item-title .jw-related-next-up-text{padding:0 10px}.jw-related-item-title .jw-related-item-title-text{background-image:linear-gradient(transparent,#000);box-sizing:border-box;color:currentColor;display:block;font-size:13px;font-weight:700;line-height:1.4;max-height:104.6px;padding:50px 15px 12px;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start}.jw-flag-small-player .jw-related-item:not(.jw-related-active-item) .jw-related-item-title .jw-related-item-title-text{opacity:0}.jw-flag-small-player .jw-related-item-title .jw-related-item-title-text{font-size:15px;line-height:1.2;padding:0 10px 10px}.jw-breakpoint-2 .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-3 .jw-related-item-title .jw-related-item-title-text{line-height:1.3}.jw-breakpoint-5 .jw-related-item-title .jw-related-item-title-text{max-height:122.8px}.jw-breakpoint-6 .jw-related-item-title .jw-related-item-title-text{font-size:15px;max-height:141px}.jw-breakpoint-7 .jw-related-item-title .jw-related-item-title-text{font-size:16px;line-height:1.5;max-height:159.2px}.jw-related-item-title .jw-item-index-text em{font-style:normal;font-weight:700}.jw-breakpoint-2 .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-2 .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-3 .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-3 .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-4 .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-4 .jw-related-item-title .jw-related-next-up-text{padding:50px 10px 7px}.jw-breakpoint-6 .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-6 .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-7 .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-7 .jw-related-item-title .jw-related-next-up-text{padding:50px 20px 17px}.jw-flag-small-player .jw-related-item-title{text-shadow:none}.jw-related-item-description{opacity:.8;display:none;font-size:13px;line-height:1.2;overflow:hidden}.jw-related-item-description .jw-related-item-title-text{display:block}.jw-related-item-content:hover .jw-related-item-description .jw-related-item-title-text,.jw-related-item:focus .jw-related-item-description .jw-related-item-title-text{opacity:1}.jw-related-item-description-content{box-sizing:border-box;padding:0 15px;text-align:start}.jw-breakpoint-4 .jw-related-item-description-content{padding:0 10px}.jw-breakpoint-6 .jw-related-item-description-content,.jw-breakpoint-7 .jw-related-item-description-content{padding:0 20px}.jw-related-item-next-up{display:block;width:100%}.jw-related-item.jw-related-item-next-up{height:100%}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content-container::after{height:50px;width:100%;background-image:linear-gradient(to bottom,transparent,#000)}.jw-breakpoint-2 .jw-related-item-next-up .jw-related-item-content::after{height:75px}.jw-breakpoint-3 .jw-related-item-next-up .jw-related-item-content::after{height:100px}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-content::after{height:125px}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-content::after{height:150px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-content::after{height:175px}.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-content::after{height:200px}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content:focus .jw-related-item-content-container::after,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content:hover .jw-related-item-content-container::after{background-image:linear-gradient(transparent,#000)}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content:focus .jw-related-item-poster-content::after,.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-content:hover .jw-related-item-poster-content::after{background-image:linear-gradient(transparent,#000)}.jw-breakpoint-2 .jw-related-item-next-up{width:50%}.jw-breakpoint-3 .jw-related-item-next-up,.jw-breakpoint-4 .jw-related-item-next-up,.jw-breakpoint-5 .jw-related-item-next-up,.jw-breakpoint-6 .jw-related-item-next-up,.jw-breakpoint-7 .jw-related-item-next-up{width:33.33333333%}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-poster{height:42.85714286%;position:relative}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-poster::after{background-image:linear-gradient(transparent,#000);content:""}.jw-related-item-next-up .jw-related-item-title{text-shadow:none}.jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{display:block}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-title{bottom:auto;height:auto;left:auto;position:relative;text-shadow:none}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{position:static}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{background:0 0;margin-bottom:5px;max-height:none;font-weight:400;position:static;overflow:visible;white-space:normal}.jwplayer:not(.jw-flag-small-player) .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text::after{display:none}.jw-breakpoint-2 .jw-related-item-next-up .jw-related-item-title,.jw-breakpoint-3 .jw-related-item-next-up .jw-related-item-title{margin-top:-10px}.jw-breakpoint-2 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-2 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text,.jw-breakpoint-3 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-3 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{padding:0 10px}.jw-breakpoint-2 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-3 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{font-size:15px}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-title{margin:-15px 0 5px}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{padding:0 10px}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{font-size:15px;margin-bottom:5px}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{font-size:16px}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-title{margin:-20px 0 10px}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{padding:0 15px}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{font-size:15px;margin-bottom:10px}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{font-size:18px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-title{margin:-25px 0 10px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{padding:0 20px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{font-size:16px;margin-bottom:10px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{font-size:20px}.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-title{margin:-30px 0 15px}.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text,.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{padding:0 20px}.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-title .jw-related-next-up-text{font-size:18px;margin-bottom:10px}.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-title .jw-related-item-title-text{font-size:24px;line-height:1.3}.jw-breakpoint-4 .jw-related-item-next-up .jw-related-item-description,.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-description,.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-description,.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-description{display:block}.jw-breakpoint-5 .jw-related-item-next-up .jw-related-item-description{font-size:14px}.jw-breakpoint-6 .jw-related-item-next-up .jw-related-item-description,.jw-breakpoint-7 .jw-related-item-next-up .jw-related-item-description{font-size:16px}@media (orientation:landscape){.jw-flag-fullscreen .jw-orientation-portrait .jw-related-item-next-up{display:block;height:100%;vertical-align:inherit}}.jw-orientation-portrait .jw-related-item-group,.jw-orientation-portrait:not(.jw-flag-small-player) .jw-related-item-next-up{height:40%}.jw-related-autoplay-frame{fill:none;stroke:transparent;stroke-width:2px}.jw-breakpoint-2 .jw-related-autoplay-frame,.jw-breakpoint-3 .jw-related-autoplay-frame,.jw-breakpoint-4 .jw-related-autoplay-frame{stroke-width:4px}.jw-breakpoint-5 .jw-related-autoplay-frame,.jw-breakpoint-6 .jw-related-autoplay-frame,.jw-breakpoint-7 .jw-related-autoplay-frame{stroke-width:8px}.jw-related-autoplay-frame-progress{fill:none;stroke:#fff;stroke-width:4px;transition:stroke 150ms cubic-bezier(0,.25,.25,1)}.jw-related-item-content:focus .jw-related-autoplay-frame-progress,.jw-related-item-content:hover .jw-related-autoplay-frame-progress{stroke:rgba(255,255,255,.6)}.jw-breakpoint-5 .jw-related-autoplay-frame-progress,.jw-breakpoint-6 .jw-related-autoplay-frame-progress,.jw-breakpoint-7 .jw-related-autoplay-frame-progress{stroke-width:8px}.jw-related .jw-icon-inline{transition:opacity 150ms cubic-bezier(0,.25,.25,1);z-index:1}.jw-breakpoint-5 .jw-related .jw-icon-inline .jw-svg-icon-close{height:30px;width:30px}.jw-breakpoint-6 .jw-related .jw-icon-inline .jw-svg-icon-close{height:36px;width:36px}.jw-breakpoint-7 .jw-related .jw-icon-inline .jw-svg-icon-close{height:42px;width:42px}.jw-related .jw-icon-inline.jw-related-page{position:absolute;top:50%;transform:translate(0,-50%)}.jw-related .jw-icon-inline.jw-related-page-left{left:0}.jw-related .jw-icon-inline.jw-related-page-right{right:0}.jw-breakpoint-5 .jw-related .jw-icon-inline{height:55px;width:55px}.jw-breakpoint-6 .jw-related .jw-icon-inline{height:66px;width:66px}.jw-breakpoint-7 .jw-related .jw-icon-inline{height:77px;width:77px}.jw-related-shelf-container{display:flex;flex-wrap:wrap;transform:translate(0,100%) translate(0,-43px);transition:150ms 150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform;margin:0 12px}.jw-related-shelf-container .jw-related-shelf-contents{display:flex;flex-wrap:wrap;justify-content:space-between;width:100%}.jw-related-shelf-container .jw-related-more{color:rgba(255,255,255,.8);cursor:pointer;display:none;text-shadow:0 0 4px rgba(0,0,0,.65);font-size:12px;justify-content:flex-start;margin:0;padding:0;pointer-events:auto;white-space:nowrap;width:auto;outline:0}.jw-related-shelf-container .jw-related-more:focus,.jw-related-shelf-container .jw-related-more:hover{color:#fff}.jw-related-shelf-container .jw-related-more .jw-svg-icon{filter:drop-shadow(0 0 2px rgba(0, 0, 0, .5));margin:0 10px 0 0;flex:0 0 auto;width:16px}.jw-related-shelf-container .jw-related-close{cursor:pointer;margin-left:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1),visibility 0s 150ms linear;visibility:hidden;position:absolute;top:0;right:0}.jw-related-shelf-container .jw-related-close .jw-svg-icon{margin:0 6px;width:12px}.jw-flag-small-player .jw-related-shelf-container .jw-related-close{display:none}.jw-flag-overlay-open-related-shelf:not(.jw-state-complete) .jw-controls:not(.jw-settings-open) .jw-related-shelf-container{transform:translate(0,0);transition-delay:0s}.jw-flag-overlay-open-related-shelf:not(.jw-state-complete) .jw-controls:not(.jw-settings-open) .jw-related-shelf-container .jw-related-close{opacity:1;visibility:visible;transition-delay:0s}.jw-flag-ads .jw-related-shelf-container,.jw-flag-small-player .jw-related-shelf-container{padding:0;display:none}.jw-button-container .jw-related-shelf-container{position:absolute;bottom:100%;left:0;pointer-events:none;margin-bottom:10px;right:0}.jwplayer.jw-flag-overlay-open-related-shelf:not(.jw-flag-small-player) .jw-settings-open .jw-related-shelf-container *{pointer-events:none}.jwplayer.jw-flag-overlay-open-related-shelf:not(.jw-flag-small-player) .jw-settings-open .jw-related-shelf{opacity:0;transition-delay:0s}.jw-related-control{align-items:center;border-radius:0;color:rgba(255,255,255,.8);cursor:pointer;display:flex;flex:0 0 auto;height:auto;justify-content:center;transition:opacity 150ms cubic-bezier(0,.25,.25,1);outline:0}.jwplayer:not(.jw-flag-touch) .jw-related-control{width:28px}.jw-related-control .jw-svg-icon{width:16px}.jw-related-control.jw-off{opacity:.25}.jw-breakpoint-4:not(.jw-flag-touch) .jw-related-control{width:22px}.jw-breakpoint-4:not(.jw-flag-touch) .jw-related-control .jw-svg-icon{width:12px}.jw-related-control:focus,.jw-related-control:hover{color:#fff}.jw-related-control:focus{border:solid 1px rgba(255,255,255,.6)}.jw-state-buffering:not(.jw-flag-user-inactive):not(.jw-flag-ads) .jw-related-more,.jw-state-complete:not(.jw-flag-ads) .jw-related-more,.jw-state-paused:not(.jw-flag-ads) .jw-related-more,.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-ads) .jw-related-more{display:flex}.jw-state-buffering:not(.jw-flag-user-inactive).jw-flag-touch .jw-related-more,.jw-state-complete.jw-flag-touch .jw-related-more,.jw-state-paused.jw-flag-touch .jw-related-more,.jw-state-playing:not(.jw-flag-user-inactive).jw-flag-touch .jw-related-more{bottom:6px}.jw-state-buffering:not(.jw-flag-user-inactive) .jw-logo-bump,.jw-state-complete .jw-logo-bump,.jw-state-paused .jw-logo-bump,.jw-state-playing:not(.jw-flag-user-inactive) .jw-logo-bump{bottom:88px}.jw-related-shelf{background-color:rgba(0,0,0,.5);display:flex;opacity:0;order:1;pointer-events:none;transition:opacity 150ms 0s cubic-bezier(0,.25,.25,1),visibility 0s 150ms linear;width:100%;visibility:hidden;-webkit-user-select:none;user-select:none}.jw-flag-overlay-open-related-shelf.jw-state-buffering:not(.jw-flag-user-inactive) .jw-related-shelf,.jw-flag-overlay-open-related-shelf.jw-state-paused .jw-controls:not(.jw-settings-open) .jw-related-shelf,.jw-flag-overlay-open-related-shelf.jw-state-playing:not(.jw-flag-user-inactive) .jw-related-shelf{opacity:1;pointer-events:auto;visibility:visible;transition-delay:150ms}.jw-flag-small-player .jw-related-shelf{display:none}.jw-related-shelf-list{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}.jw-related-shelf-items{display:flex;overflow:visible;transition:transform 0s cubic-bezier(0,.25,.25,1);transform:translate(-100%,0)}.jw-related-shelf-items.jw-related-shelf-start{transform:translate(0,0)}.jw-related-shelf-items.jw-related-shelf-animating{transition-duration:450ms;pointer-events:none}.jw-related-shelf-items.jw-related-shelf-slide-next{transform:translate(-200%,0)}.jw-related-shelf-items.jw-related-shelf-slide-prev{transform:translate(0,0)}.jw-related-shelf-item{height:100%;width:20%;background:50% 50%/cover no-repeat rgba(0,0,0,.25);display:inline-block;flex:0 0 auto;padding:0;position:relative;transition:background-size 150ms cubic-bezier(0,.25,.25,1);outline:0}.jw-related-shelf-item:focus .jw-related-shelf-item-contents,.jw-related-shelf-item:hover .jw-related-shelf-item-contents{opacity:1}.jw-related-shelf-item .jw-text{font-weight:700;flex:0 0 100%;line-height:1.25;overflow:hidden}.jw-related-shelf-item .jw-related-shelf-item-duration{flex:0 0 100%;font-size:11px;margin:0 0 auto;text-align:right}.jw-related-shelf-item .jw-related-shelf-item-title{height:auto;margin:auto 0 0}.jw-breakpoint-2 .jw-related-shelf-item,.jw-breakpoint-3 .jw-related-shelf-item{width:calc(100% / 3)}.jw-breakpoint-2 .jw-related-shelf-item .jw-text,.jw-breakpoint-3 .jw-related-shelf-item .jw-text{font-size:11px}.jw-breakpoint-4 .jw-related-shelf-item{width:25%}.jw-related-shelf-item-aspect{height:0;padding:0 0 56.25%;position:relative}.jw-related-shelf-item-contents{background-color:rgba(0,0,0,.5);align-items:flex-end;cursor:pointer;display:flex;flex-wrap:wrap;opacity:0;padding:8px;position:absolute;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-flag-touch .jw-related-shelf-item-contents{opacity:1}.jw-flag-overlay-open-related-shelf:not(.jw-state-complete).jw-breakpoint-2 .jw-display,.jw-flag-overlay-open-related-shelf:not(.jw-state-complete).jw-breakpoint-3 .jw-display{padding-top:0}.jw-flag-overlay-open-related-shelf:not(.jw-state-complete).jw-breakpoint-2 .jw-display-container,.jw-flag-overlay-open-related-shelf:not(.jw-state-complete).jw-breakpoint-3 .jw-display-container{transform:translateY(-10%)}.jw-flag-overlay-open-related-shelf .jw-nextup-container.jw-nextup-container-visible,.jw-flag-overlay-open-related-shelf .jw-nextup-sticky .jw-nextup-close{opacity:0;transition:opacity 150ms 0s cubic-bezier(0,.25,.25,1),visibility 0s 150ms linear;visibility:hidden}.jw-shelf-widget{box-sizing:border-box;display:block;min-width:270px;transform:none;width:100%}.jw-shelf-widget,.jw-shelf-widget *{-webkit-tap-highlight-color:rgba(255,255,255,0);background-color:transparent;border:0;color:inherit;direction:ltr;float:none;font-size:100%;font-stretch:inherit;font-variant:inherit;line-height:normal;list-style:none;margin:0;padding:0;text-align:left;text-transform:none;vertical-align:baseline}.jw-shelf-widget *{box-sizing:inherit}.jw-shelf-widget .jw-related-more{color:inherit;cursor:default;display:flex;height:auto;font-size:106.25%;line-height:1.2;margin:0 0 5px 38px;text-shadow:none}.jw-shelf-widget .jw-related-more:hover{color:inherit}.jw-shelf-widget .jw-related-shelf-contents{padding:20px 8px;position:relative}.jw-shelf-widget .jw-related-shelf{background-color:transparent;display:flex;font-size:100%;height:auto;opacity:1;order:1;pointer-events:auto;position:relative;transition:opacity 150ms 0s cubic-bezier(0,.25,.25,1),visibility 0s 150ms linear;visibility:visible;width:100%}.jw-shelf-widget:not(.jw-flag-touch) .jw-related-control:hover{opacity:1}.jw-shelf-widget:not(.jw-flag-touch) .jw-related-shelf-item:hover .jw-related-shelf-item-image::before,.jw-shelf-widget:not(.jw-flag-touch) .jw-related-shelf-item:hover .jw-svg-icon{opacity:1}.jw-shelf-widget .jw-related-control{height:auto;width:28px;align-items:center;border-radius:0;color:currentColor;cursor:pointer;display:flex;flex:0 0 auto;justify-content:center;opacity:.7;outline:0;margin:0 0 4.25em;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-shelf-widget .jw-related-control:focus{opacity:1}.jw-shelf-widget .jw-related-control.jw-off{opacity:.3;pointer-events:none}.jw-breakpoint-4.jw-shelf-widget .jw-related-control{width:28px}.jw-breakpoint-4.jw-shelf-widget .jw-related-control .jw-svg-icon{width:24px}.jw-shelf-widget .jw-related-control .jw-svg-icon{width:24px}.jw-shelf-widget .jw-related-shelf-item-title{color:inherit}.jw-shelf-widget .jw-svg-icon-play{height:50%;width:50%;color:#fff;filter:drop-shadow(0 2px 3px rgba(0, 0, 0, .3));margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1);z-index:1}.jw-shelf-widget .jw-related-shelf-item{height:100%;width:25%;background:0 0;cursor:pointer;display:inline-block;flex:0 0 auto;outline:0;padding:0 10px;position:relative;transition:background-size 150ms cubic-bezier(0,.25,.25,1)}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image{background-color:transparent;background-size:cover;overflow:hidden;padding:0 0 56.25%;position:relative}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::before{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.00787) 10.79%, hsla(0, 0%, 0%, 0.02963) 21.99%, hsla(0, 0%, 0%, 0.0625) 33.34%, hsla(0, 0%, 0%, 0.1037) 44.59%, hsla(0, 0%, 0%, 0.15046) 55.48%, hsla(0, 0%, 0%, 0.2) 65.75%, hsla(0, 0%, 0%, 0.24954) 75.14%, hsla(0, 0%, 0%, 0.2963) 83.41%, hsla(0, 0%, 0%, 0.3375) 90.28%, hsla(0, 0%, 0%, 0.37037) 95.51%, hsla(0, 0%, 0%, 0.39213) 98.83%, hsla(0, 0%, 0%, 0.4));pointer-events:none;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-image::after{height:150%;width:100%;pointer-events:none;transform-origin:0 0}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading{pointer-events:none}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading .jw-related-shelf-item-image .jw-svg-icon{display:none}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading .jw-related-shelf-item-image::after,.jw-shelf-widget .jw-related-shelf-item.jw-related-loading .jw-related-shelf-item-image::before{background:currentColor;opacity:.15}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading .jw-related-shelf-item-image::after{animation:jw-shimmer 1.5s cubic-bezier(.46,.03,.52,.96) both infinite}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading:nth-child(5n+2) .jw-related-shelf-item-image::after{animation-delay:.2s}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading:nth-child(5n+3) .jw-related-shelf-item-image::after{animation-delay:.4s}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading:nth-child(5n+4) .jw-related-shelf-item-image::after{animation-delay:.6s}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading:nth-child(5n+5) .jw-related-shelf-item-image::after{animation-delay:.8s}.jw-shelf-widget .jw-related-shelf-item.jw-related-loading .jw-related-shelf-item-title{background:linear-gradient(currentColor,currentColor),linear-gradient(currentColor,currentColor);background-position:0 0,0 50%;background-repeat:no-repeat;background-size:100% 1em,65% 1em;opacity:.15;height:3.75em;overflow:hidden;text-indent:100%;white-space:nowrap}.jw-shelf-widget .jw-related-shelf-item.jw-related-loaded .jw-related-shelf-item-image::after{animation:jw-shimmer 1.5s -.5s cubic-bezier(.46,.03,.52,.96) forwards 1;background:currentColor}.jw-shelf-widget .jw-related-shelf-item.jw-related-displayed .jw-related-shelf-item-image::after{display:none}.jw-shelf-widget .jw-related-shelf-item:focus .jw-related-shelf-item-image::before,.jw-shelf-widget .jw-related-shelf-item:focus .jw-svg-icon{opacity:1}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-contents{align-items:flex-start;background:0 0;height:3.75em;margin:.5em 0 0;opacity:1;padding:0;position:static;transition:none}.jw-shelf-widget .jw-related-shelf-item .jw-related-shelf-item-title{font-size:100%;font-weight:400;height:3.75em;line-height:1.25;margin:0;overflow:hidden;text-overflow:ellipsis}.jw-shelf-items-5.jw-shelf-widget .jw-related-shelf-item{width:20%}.jw-shelf-items-4.jw-shelf-widget .jw-related-shelf-item{width:25%}.jw-shelf-items-3.jw-shelf-widget .jw-related-shelf-item{width:calc(100% / 3)}.jw-shelf-items-2.jw-shelf-widget .jw-related-shelf-item{width:50%}@keyframes jw-shimmer{0%{transform:translate(0,-100%) skewY(-15deg)}100%,66.6%{transform:translate(0,100%) skewY(-15deg)}}@keyframes jw-related-item{0%{opacity:0;transform:scale(.85,.85);visibility:hidden}to{opacity:1;transform:scale(1,1);visibility:visible}}@keyframes jw-dash{to{stroke-dashoffset:0}}', ""]);
            const r = n
        },
        4516: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                default: () => g
            });
            var l = i(3379),
                a = i.n(l),
                s = i(7795),
                n = i.n(s),
                r = i(569),
                o = i.n(r),
                d = i(3565),
                h = i.n(d),
                w = i(9216),
                c = i.n(w),
                p = i(4589),
                m = i.n(p),
                j = i(2475),
                u = {};
            u.styleTagTransform = m(), u.setAttributes = h(), u.insert = o().bind(null, "head"), u.domAPI = n(), u.insertStyleElement = c();
            a()(j.Z, u);
            const g = j.Z && j.Z.locals ? j.Z.locals : void 0
        },
        3207: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-off" viewBox="0 0 240 240" focusable="false"><path d="M210,55v100h-50l20,20h45c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V40c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0H15c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v130c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h45l20-20H30V55H210 M60,205l60-70l60,70H60L60,205z"></path></svg>'
        },
        4851: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-on" viewBox="0 0 240 240" focusable="false"><path d="M229.9,40v130c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0h-44l-17-20h46V55H30v100h47l-17,20h-45c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V40c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h209.8c2.6-0.2,4.8,1.8,5,4.4C229.9,39.7,229.9,39.9,229.9,40z M104.9,122l15-18l15,18l11,13h44V75H50v60h44L104.9,122z M179.9,205l-60-70l-60,70H179.9z"></path></svg>'
        },
        7938: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-left" viewBox="0 0 240 240" focusable="false"><path d="M55.4,104.4c-1.1,1.1-2.2,2.3-3.1,3.6c-6.9,9.9-4.4,23.5,5.5,30.4L159.7,240l33.9-33.9l-84.9-84.9l84.9-84.9L157.3,0L55.4,104.4L55.4,104.4z"></path></svg>'
        },
        4060: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-right" viewBox="0 0 240 240" focusable="false"><path d="M183.6,104.4L81.8,0L45.4,36.3l84.9,84.9l-84.9,84.9L79.3,240l101.9-101.7c9.9-6.9,12.4-20.4,5.5-30.4C185.8,106.7,184.8,105.4,183.6,104.4L183.6,104.4z"></path></svg>'
        },
        6038: e => {
            e.exports = '<svg class="jw-svg-icon jw-svg-icon-audio-tracks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M35,34h160v20H35V34z M35,94h160V74H35V94z M35,134h60v-20H35V134z M160,114c-23.4-1.3-43.6,16.5-45,40v50h20c5.2,0.3,9.7-3.6,10-8.9c0-0.4,0-0.7,0-1.1v-20c0.3-5.2-3.6-9.7-8.9-10c-0.4,0-0.7,0-1.1,0h-10v-10c1.5-17.9,17.1-31.3,35-30c17.9-1.3,33.6,12.1,35,30v10H185c-5.2-0.3-9.7,3.6-10,8.9c0,0.4,0,0.7,0,1.1v20c-0.3,5.2,3.6,9.7,8.9,10c0.4,0,0.7,0,1.1,0h20v-50C203.5,130.6,183.4,112.7,160,114z"></path></svg>'
        },
        147: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-buffer" viewBox="0 0 240 240" focusable="false"><path d="M120,186.667a66.667,66.667,0,0,1,0-133.333V40a80,80,0,1,0,80,80H186.667A66.846,66.846,0,0,1,120,186.667Z"></path></svg>'
        },
        7766: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-off" viewBox="0 0 240 240" focusable="false"><path d="M99.4,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C107.9,100,103.8,97.8,99.4,97.8z M144.1,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C152.6,100,148.5,97.8,144.1,97.8L144.1,97.8z M200,60v120H40V60H200 M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z"></path></svg>'
        },
        5806: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-on" viewBox="0 0 240 240" focusable="false"><path d="M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z M108.1,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C90.4,141.7,102,143.5,108.1,137.7z M152.9,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C135.2,141.7,146.8,143.5,152.9,137.7z"></path></svg>'
        },
        9863: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-close" viewBox="0 0 240 240" focusable="false"><path d="M134.8,120l48.6-48.6c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2l-7.4-7.4c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L120,105.2L71.4,56.6c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L56.6,64c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l48.6,48.7l-48.6,48.6c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l7.4,7.4c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l48.7-48.6l48.6,48.6c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l7.4-7.4c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2L134.8,120z"></path></svg>'
        },
        2494: e => {
            e.exports = '<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-floating-close" focusable="false"><path d="M7.41499 5.00001L10.705 1.70501C10.8688 1.51371 10.9544 1.26763 10.9447 1.01595C10.935 0.764278 10.8307 0.525539 10.6526 0.347444C10.4745 0.16935 10.2357 0.0650171 9.98405 0.055296C9.73237 0.0455748 9.48629 0.131181 9.29499 0.295007L5.99999 3.58501L2.70499 0.295007C2.51369 0.131181 2.26762 0.0455748 2.01594 0.055296C1.76426 0.0650171 1.52552 0.16935 1.34743 0.347444C1.16934 0.525539 1.065 0.764278 1.05528 1.01595C1.04556 1.26763 1.13117 1.51371 1.29499 1.70501L4.58499 5.00001L1.29499 8.29501C1.19031 8.38466 1.10529 8.49497 1.04527 8.61904C0.985244 8.7431 0.951515 8.87824 0.946195 9.01596C0.940876 9.15367 0.964081 9.29101 1.01436 9.41933C1.06463 9.54766 1.14089 9.6642 1.23834 9.76166C1.3358 9.85911 1.45235 9.93537 1.58067 9.98565C1.709 10.0359 1.84633 10.0591 1.98405 10.0538C2.12177 10.0485 2.2569 10.0148 2.38096 9.95473C2.50503 9.89471 2.61535 9.80969 2.70499 9.70501L5.99999 6.41501L9.29499 9.70501C9.48629 9.86884 9.73237 9.95444 9.98405 9.94472C10.2357 9.935 10.4745 9.83067 10.6526 9.65257C10.8307 9.47448 10.935 9.23574 10.9447 8.98406C10.9544 8.73239 10.8688 8.48631 10.705 8.29501L7.41499 5.00001Z" fill="white" fill-opacity="0.8"></path></svg>'
        },
        7459: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-off" viewBox="0 0 240 240" focusable="false"><path d="M109.2,134.9l-8.4,50.1c-0.4,2.7-2.4,3.3-4.4,1.4L82,172l-27.9,27.9l-14.2-14.2l27.9-27.9l-14.4-14.4c-1.9-1.9-1.3-3.9,1.4-4.4l50.1-8.4c1.8-0.5,3.6,0.6,4.1,2.4C109.4,133.7,109.4,134.3,109.2,134.9L109.2,134.9z M172.1,82.1L200,54.2L185.8,40l-27.9,27.9l-14.4-14.4c-1.9-1.9-3.9-1.3-4.4,1.4l-8.4,50.1c-0.5,1.8,0.6,3.6,2.4,4.1c0.5,0.2,1.2,0.2,1.7,0l50.1-8.4c2.7-0.4,3.3-2.4,1.4-4.4L172.1,82.1z"></path></svg>'
        },
        4606: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-on" viewBox="0 0 240 240" focusable="false"><path d="M96.3,186.1c1.9,1.9,1.3,4-1.4,4.4l-50.6,8.4c-1.8,0.5-3.7-0.6-4.2-2.4c-0.2-0.6-0.2-1.2,0-1.7l8.4-50.6c0.4-2.7,2.4-3.4,4.4-1.4l14.5,14.5l28.2-28.2l14.3,14.3l-28.2,28.2L96.3,186.1z M195.8,39.1l-50.6,8.4c-2.7,0.4-3.4,2.4-1.4,4.4l14.5,14.5l-28.2,28.2l14.3,14.3l28.2-28.2l14.5,14.5c1.9,1.9,4,1.3,4.4-1.4l8.4-50.6c0.5-1.8-0.6-3.6-2.4-4.2C197,39,196.4,39,195.8,39.1L195.8,39.1z"></path></svg>'
        },
        6641: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-next" viewBox="0 0 240 240" focusable="false"><path d="M165,60v53.3L59.2,42.8C56.9,41.3,55,42.3,55,45v150c0,2.7,1.9,3.8,4.2,2.2L165,126.6v53.3h20v-120L165,60L165,60z"></path></svg>'
        },
        2521: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-pause" viewBox="0 0 240 240" focusable="false"><path d="M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z"></path></svg>'
        },
        5147: e => {
            e.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-off" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.75V9.75H22V4.78C22 4.21116 21.5389 3.75 20.97 3.75H2.03C1.46116 3.75 1 4.21113 1 4.78V17.72C1 18.2889 1.46119 18.75 2.03 18.75H12V16.75H3V5.75H20ZM14 13.25C14 12.6977 14.4477 12.25 15 12.25H22C22.5523 12.25 23 12.6977 23 13.25V19.25C23 19.8023 22.5523 20.25 22 20.25H15C14.4477 20.25 14 19.8023 14 19.25V13.25ZM10 9.25L8.20711 11.0429L10.7071 13.5429L9.29289 14.9571L6.79289 12.4571L5 14.25V9.25H10Z"></path></svg>'
        },
        1438: e => {
            e.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-on" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.125V9.125H22V4.155C22 3.58616 21.5389 3.125 20.97 3.125H2.03C1.46116 3.125 1 3.58613 1 4.155V17.095C1 17.6639 1.46119 18.125 2.03 18.125H12V16.125H3V5.125H20ZM14 11.875C14 11.3227 14.4477 10.875 15 10.875H22C22.5523 10.875 23 11.3227 23 11.875V17.875C23 18.4273 22.5523 18.875 22 18.875H15C14.4477 18.875 14 18.4273 14 17.875V11.875ZM6 12.375L7.79289 10.5821L5.29288 8.0821L6.7071 6.66788L9.20711 9.16789L11 7.375V12.375H6Z"></path></svg>'
        },
        6084: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-play" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg>'
        },
        4777: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-error" viewBox="0 0 36 36" style="width:100%;height:100%;" focusable="false"><path d="M34.6 20.2L10 33.2 27.6 16l7 3.7a.4.4 0 0 1 .2.5.4.4 0 0 1-.2.2zM33.3 0L21 12.2 9 6c-.2-.3-.6 0-.6.5V25L0 33.6 2.5 36 36 2.7z"></path></svg>'
        },
        4119: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-playback-rate" viewBox="0 0 240 240" focusable="false"><path d="M158.83,48.83A71.17,71.17,0,1,0,230,120,71.163,71.163,0,0,0,158.83,48.83Zm45.293,77.632H152.34V74.708h12.952v38.83h38.83ZM35.878,74.708h38.83V87.66H35.878ZM10,113.538H61.755V126.49H10Zm25.878,38.83h38.83V165.32H35.878Z"></path></svg>'
        },
        5058: e => {
            e.exports = '<svg class="jw-svg-icon jw-svg-icon-quality-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M55,200H35c-3,0-5-2-5-4c0,0,0,0,0-1v-30c0-3,2-5,4-5c0,0,0,0,1,0h20c3,0,5,2,5,4c0,0,0,0,0,1v30C60,198,58,200,55,200L55,200z M110,195v-70c0-3-2-5-4-5c0,0,0,0-1,0H85c-3,0-5,2-5,4c0,0,0,0,0,1v70c0,3,2,5,4,5c0,0,0,0,1,0h20C108,200,110,198,110,195L110,195z M160,195V85c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v110c0,3,2,5,4,5c0,0,0,0,1,0h20C158,200,160,198,160,195L160,195z M210,195V45c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v150c0,3,2,5,4,5c0,0,0,0,1,0h20C208,200,210,198,210,195L210,195z"></path></svg>'
        },
        4886: e => {
            e.exports = '<svg class="jw-svg-icon jw-svg-icon-replay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M120,41.9v-20c0-5-4-8-8-4l-44,28a5.865,5.865,0,0,0-3.3,7.6A5.943,5.943,0,0,0,68,56.8l43,29c5,4,9,1,9-4v-20a60,60,0,1,1-60,60H40a80,80,0,1,0,80-79.9Z"></path></svg>'
        },
        6207: e => {
            e.exports = '<svg class="jw-svg-icon jw-svg-icon-rewind" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z"></path></svg>'
        },
        9992: e => {
            e.exports = '<svg class="jw-svg-icon jw-svg-icon-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M204,145l-25-14c0.8-3.6,1.2-7.3,1-11c0.2-3.7-0.2-7.4-1-11l25-14c2.2-1.6,3.1-4.5,2-7l-16-26c-1.2-2.1-3.8-2.9-6-2l-25,14c-6-4.2-12.3-7.9-19-11V35c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v28c-6.7,3.1-13,6.7-19,11L56,60c-2.2-0.9-4.8-0.1-6,2L35,88c-1.6,2.2-1.3,5.3,0.9,6.9c0,0,0.1,0,0.1,0.1l25,14c-0.8,3.6-1.2,7.3-1,11c-0.2,3.7,0.2,7.4,1,11l-25,14c-2.2,1.6-3.1,4.5-2,7l16,26c1.2,2.1,3.8,2.9,6,2l25-14c5.7,4.6,12.2,8.3,19,11v28c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6v-28c7-2.3,13.5-6,19-11l25,14c2.5,1.3,5.6,0.4,7-2l15-26C206.7,149.4,206,146.7,204,145z M120,149.9c-16.5,0-30-13.4-30-30s13.4-30,30-30s30,13.4,30,30c0.3,16.3-12.6,29.7-28.9,30C120.7,149.9,120.4,149.9,120,149.9z"></path></svg>'
        },
        3498: e => {
            e.exports = '<svg class="jw-svg-icon jw-svg-icon-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M190,185c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H55c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V55c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h130c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V185z"></path></svg>'
        },
        3918: e => {
            e.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z"></path></svg>'
        },
        8157: e => {
            e.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z"></path><path d="M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z"></path><path d="M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z"></path></svg>'
        },
        3356: e => {
            e.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.7,39.1,116.4,39.9,116.4,42.8z M178.2,120c0-22.7-18.5-41.2-41.2-41.2v20.6c11.4,0,20.6,9.2,20.6,20.6c0,11.4-9.2,20.6-20.6,20.6v20.6C159.8,161.2,178.2,142.7,178.2,120z"></path></svg>'
        },
        1212: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-down" viewBox="0 0 240 240" focusable="false"><path d="M105.398,185.598c1.1,1.1,2.3,2.2,3.6,3.1c9.9,6.9,23.5,4.4,30.4-5.5l101.6-101.9l-33.9-33.9l-84.9,84.9l-84.9-84.9l-36.3,36.3L105.398,185.598L105.398,185.598z"></path></svg>'
        },
        2995: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-left" viewBox="0 0 240 240" focusable="false"><path d="M55.4,104.4c-1.1,1.1-2.2,2.3-3.1,3.6c-6.9,9.9-4.4,23.5,5.5,30.4L159.7,240l33.9-33.9l-84.9-84.9l84.9-84.9L157.3,0L55.4,104.4L55.4,104.4z"></path></svg>'
        },
        5947: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-right" viewBox="0 0 240 240" focusable="false"><path d="M183.6,104.4L81.8,0L45.4,36.3l84.9,84.9l-84.9,84.9L79.3,240l101.9-101.7c9.9-6.9,12.4-20.4,5.5-30.4C185.8,106.7,184.8,105.4,183.6,104.4L183.6,104.4z"></path></svg>'
        },
        6517: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-more-videos" viewBox="0 0 240 240" focusable="false"><path d="M0,30h60v75H0V30z M0,135h60v75H0V135z M90,135h60v75H90V135z M180,135h60v75h-60V135z M90,30h60v75H90V30z M180,30h60v75h-60V30z"></path></svg>'
        }
    }
]);