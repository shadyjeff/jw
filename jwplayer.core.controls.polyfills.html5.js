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
    [605, 681, 207, 493, 581, 943, 250, 716], {
        8377: (t, e, i) => {
            "use strict";
            i.d(e, {
                M: () => n,
                _: () => s
            });
            const n = function(t, e) {
                    let i;
                    const n = t.kind || "cc";
                    return i = t.default || t.defaulttrack ? "default" : t._id || t.file || n + e, i
                },
                s = function(t, e) {
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
                VS: () => w,
                xl: () => p
            });
            var n = i(7477),
                s = i(2894),
                o = i(6886),
                a = i(7941),
                r = i(7387),
                l = i(2957),
                c = i(4446);
            const d = t => {
                throw new c.rG(null, t)
            };
            const h = function(t) {
                    return t.map((t => new n.Z(t.begin, t.end, t.text)))
                },
                u = function(t, e, n, o) {
                    let u, p, w = t.responseXML ? t.responseXML.firstChild : null;
                    if (w)
                        for ("xml" === (0, a.r1)(w) && (w = w.nextSibling); w && w.nodeType === w.COMMENT_NODE;) w = w.nextSibling;
                    try {
                        if (w && "tt" === (0, a.r1)(w)) {
                            if (!t.responseXML) throw new Error("Empty XML response");
                            u = function(t) {
                                t || d(306007);
                                const e = [];
                                let i = t.getElementsByTagName("p"),
                                    n = 30;
                                const s = t.getElementsByTagName("tt");
                                if (null != s && s[0]) {
                                    const t = parseFloat(s[0].getAttribute("ttp:frameRate") || "");
                                    isNaN(t) || (n = t)
                                }
                                i || d(306005), i.length || (i = t.getElementsByTagName("tt:p"), i.length || (i = t.getElementsByTagName("tts:p")));
                                for (let s = 0; s < i.length; s++) {
                                    const o = i[s],
                                        a = o.getElementsByTagName("br");
                                    for (let e = 0; e < a.length; e++) {
                                        const i = a[e];
                                        null != i && i.parentNode && i.parentNode.replaceChild(t.createTextNode("\r\n"), i)
                                    }
                                    const r = o.innerHTML || o.textContent || o.text || "",
                                        c = (0, l.fy)(r).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                                    if (c) {
                                        const t = o.getAttribute("begin") || "",
                                            i = o.getAttribute("dur") || "",
                                            s = o.getAttribute("end") || "",
                                            a = {
                                                begin: (0, l.m9)(t, n),
                                                text: c
                                            };
                                        s ? a.end = (0, l.m9)(s, n) : i && (a.end = (a.begin || 0) + (0, l.m9)(i, n)), e.push(a)
                                    }
                                }
                                return e.length || d(306005), e
                            }(t.responseXML), p = h(u), delete e.xhr, n(p)
                        } else {
                            const a = t.responseText;
                            a.indexOf("WEBVTT") >= 0 ? i.e(347).then(function(t) {
                                return i(2776).default
                            }.bind(null, i)).catch((0, s.Jt)(301131)).then((t => {
                                const i = new t(window);
                                p = [], i.oncue = function(t) {
                                    p.push(t)
                                }, i.onflush = function() {
                                    delete e.xhr, n(p)
                                }, i.parse(a)
                            })).catch((t => {
                                delete e.xhr, o((0, c.Mm)(null, c.Y7, t))
                            })) : (u = (0, r.Z)(a), p = h(u), delete e.xhr, n(p))
                        }
                    } catch (t) {
                        delete e.xhr, o((0, c.Mm)(null, c.Y7, t))
                    }
                },
                p = function(t, e, i) {
                    t.xhr = (0, o.h)(t.file, (function(n) {
                        u(n, t, e, i)
                    }), ((t, e, n, s) => {
                        i((0, c.l9)(s, c.Y7))
                    }))
                },
                w = function(t) {
                    t && t.forEach((t => {
                        const e = t.xhr;
                        e && (e.onload = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()), delete t.xhr
                    }))
                }
        },
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
        7477: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => o
            });
            let n = window.VTTCue;
            const s = t => {
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
                    const o = this;
                    o.hasBeenReset = !1;
                    let a = "",
                        r = !1,
                        l = e,
                        c = i,
                        d = n,
                        h = null,
                        u = "",
                        p = !0,
                        w = t,
                        g = "start",
                        m = t,
                        j = 100,
                        f = "middle";
                    Object.defineProperty(o, "id", {
                        enumerable: !0,
                        get: () => a,
                        set(t) {
                            a = `${t}`
                        }
                    }), Object.defineProperty(o, "pauseOnExit", {
                        enumerable: !0,
                        get: () => r,
                        set(t) {
                            r = Boolean(t)
                        }
                    }), Object.defineProperty(o, "startTime", {
                        enumerable: !0,
                        get: () => l,
                        set(t) {
                            if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                            l = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "endTime", {
                        enumerable: !0,
                        get: () => c,
                        set(t) {
                            if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                            c = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "text", {
                        enumerable: !0,
                        get: () => d,
                        set(t) {
                            d = `${t}`, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "region", {
                        enumerable: !0,
                        get: () => h,
                        set(t) {
                            h = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "vertical", {
                        enumerable: !0,
                        get: () => u,
                        set(t) {
                            const e = (t => "string" == typeof t && (!!{
                                "": !0,
                                lr: !0,
                                rl: !0
                            } [t.toLowerCase()] && t.toLowerCase()))(t);
                            if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                            u = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "snapToLines", {
                        enumerable: !0,
                        get: () => p,
                        set(t) {
                            p = Boolean(t), this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "line", {
                        enumerable: !0,
                        get: () => w,
                        set(e) {
                            if ("number" != typeof e && e !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
                            w = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "lineAlign", {
                        enumerable: !0,
                        get: () => g,
                        set(t) {
                            const e = s(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            g = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "position", {
                        enumerable: !0,
                        get: () => m,
                        set(t) {
                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                            m = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "size", {
                        enumerable: !0,
                        get: () => j,
                        set(t) {
                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                            j = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "align", {
                        enumerable: !0,
                        get: () => f,
                        set(t) {
                            const e = s(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            f = e, this.hasBeenReset = !0
                        }
                    }), o.displayState = void 0
                }, n.prototype.getCueAsHTML = function() {
                    return window.WebVTT.convertCueToDOMTree(window, this.text)
                }
            }
            const o = n
        },
        4506: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = t => ({
                bitrate: t.bitrate,
                label: t.label,
                width: t.width,
                height: t.height
            })
        },
        3328: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => k
            });
            var n = i(6103),
                s = i(8377);
            const o = {
                    TIT2: "title",
                    TT2: "title",
                    WXXX: "url",
                    TPE1: "artist",
                    TP1: "artist",
                    TALB: "album",
                    TAL: "album"
                },
                a = (t, e) => {
                    const i = t.length;
                    let n, s, o, a = "",
                        r = e || 0;
                    for (; r < i;)
                        if (n = t[r++], 0 !== n && 3 !== n) switch (n >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                a += String.fromCharCode(n);
                                break;
                            case 12:
                            case 13:
                                s = t[r++], a += String.fromCharCode((31 & n) << 6 | 63 & s);
                                break;
                            case 14:
                                s = t[r++], o = t[r++], a += String.fromCharCode((15 & n) << 12 | (63 & s) << 6 | (63 & o) << 0)
                        }
                    return a
                },
                r = t => {
                    const e = (t => {
                        let e = "0x";
                        for (let i = 0; i < t.length; i++) t[i] < 16 && (e += "0"), e += t[i].toString(16);
                        return parseInt(e, 16)
                    })(t);
                    return 127 & e | (32512 & e) >> 1 | (8323072 & e) >> 2 | (2130706432 & e) >> 3
                },
                l = t => {
                    const e = {};
                    if (!("value" in t) && "data" in t && t.data instanceof ArrayBuffer) {
                        const e = new Uint8Array(t.data);
                        let i = e.length;
                        t = {
                            value: {
                                key: "",
                                data: ""
                            }
                        };
                        let n = 10;
                        for (; n < 14 && n < e.length && 0 !== e[n];) t.value.key += String.fromCharCode(e[n]), n++;
                        let s = 19,
                            o = e[s];
                        3 !== o && 0 !== o || (o = e[++s], i--);
                        let l = 0;
                        if (1 !== o && 2 !== o)
                            for (let t = s + 1; t < i; t++)
                                if (0 === e[t]) {
                                    l = t - s;
                                    break
                                } if (l > 0) {
                            const i = a(e.subarray(s, s += l), 0);
                            if ("PRIV" === t.value.key) {
                                if ("com.apple.streaming.transportStreamTimestamp" === i) {
                                    const i = 1 & r(e.subarray(s, s += 4)),
                                        n = r(e.subarray(s, s += 4)) + (i ? 4294967296 : 0);
                                    t.value.data = n
                                } else t.value.data = a(e, s + 1);
                                t.value.info = i
                            } else t.value.info = i, t.value.data = a(e, s + 1)
                        } else {
                            const i = e[s];
                            t.value.data = 1 === i || 2 === i ? ((t, e) => {
                                const i = t.length - 1;
                                let n = "",
                                    s = e || 0;
                                for (; s < i;) 254 === t[s] && 255 === t[s + 1] || (n += String.fromCharCode((t[s] << 8) + t[s + 1])), s += 2;
                                return n
                            })(e, s + 1) : a(e, s + 1)
                        }
                    }
                    if (function(t, e) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        return Object.prototype.hasOwnProperty.call(Object(t), e)
                    }(o, t.value.key) && (e[o[t.value.key]] = t.value.data), t.value.info) {
                        let i = e[t.value.key];
                        i !== Object(i) && (i = {}, e[t.value.key] = i), i[t.value.info] = t.value.data
                    } else e[t.value.key] = t.value.data;
                    return e
                };
            var c = i(8348),
                d = i(1643),
                h = i(6042);
            const u = (t, e, i) => {
                    null != e && e.length && (0, h.S6)(e, (function(e) {
                        const n = e._id || "";
                        if (i && (e._id = void 0), !c.Browser.ie && !c.Browser.safari || !t || !/^(native|subtitle|cc)/.test(n)) {
                            if (c.Browser.ie && "disabled" === e.mode || (e.mode = "disabled", e.mode = "hidden"), e.cues)
                                for (let t = e.cues.length; t--;) e.removeCue(e.cues[t]);
                            e.embedded || (e.mode = "disabled"), e.inuse = !1
                        }
                    }))
                },
                p = t => /^native(?:captions|subtitles)/.test(t),
                w = t => "captions" === t || "subtitles" === t,
                g = function(t) {
                    const e = t.target,
                        {
                            activeCues: i,
                            cues: n
                        } = e,
                        s = e._id,
                        o = this._cues,
                        a = this._activeCues;
                    if (null != n && n.length) {
                        const t = o[s];
                        o[s] = Array.prototype.slice.call(n), this.parseNativeID3Cues(n, t)
                    } else delete o[s];
                    if (null != i && i.length) {
                        const t = a[s],
                            e = a[s] = Array.prototype.slice.call(i);
                        this.triggerActiveCues(e, t)
                    } else delete a[s]
                },
                m = (t, e, i) => {
                    if (c.Browser.ie) {
                        let n = i;
                        (t || "metadata" === e.kind) && (n = new window.TextTrackCue(i.startTime, i.endTime, i.text), i.value && (n.value = i.value)), ((t, e) => {
                            const i = [],
                                n = t.mode;
                            t.mode = "hidden";
                            const s = t.cues;
                            if (s)
                                for (let n = s.length - 1; n >= 0 && s[n].startTime > e.startTime; n--) i.unshift(s[n]), t.removeCue(s[n]);
                            try {
                                t.addCue(e), i.forEach((e => t.addCue(e)))
                            } catch (t) {
                                console.error(t)
                            }
                            t.mode = n
                        })(e, n)
                    } else try {
                        e.addCue(i)
                    } catch (t) {
                        console.error(t)
                    }
                },
                j = function(t) {
                    const e = this._textTracks,
                        i = this._tracksById;
                    if (t.length > e.length) return !0;
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e];
                        if (!n._id || !i[n._id]) return !0
                    }
                    return !1
                },
                f = function() {
                    const t = this.video.textTracks,
                        e = (0, h.hX)(t, (function(t) {
                            return (t.inuse || !t._id) && w(t.kind)
                        }));
                    if (!this._textTracks || j.call(this, e)) return void this.setTextTracks(t);
                    let i = -1;
                    for (let t = 0; t < this._textTracks.length; t++)
                        if ("showing" === this._textTracks[t].mode) {
                            i = t;
                            break
                        } i !== this._currentTextTrackIndex && this.setSubtitlesTrack(i + 1)
                },
                b = function(t) {
                    const e = t.track;
                    null != e && e._id || this.setTextTracks(this.video.textTracks)
                },
                y = (t, e) => t.startTime === e.startTime && t.endTime === e.endTime && t.text === e.text && t.data === e.data && JSON.stringify(t.value) === JSON.stringify(e.value),
                v = t => {
                    const e = l(t);
                    return {
                        metadataType: "id3",
                        metadataTime: t.startTime,
                        metadata: e
                    }
                },
                k = {
                    _itemTracks: null,
                    _textTracks: null,
                    _currentTextTrackIndex: -1,
                    _tracksById: null,
                    _cuesByTrackId: null,
                    _cachedVTTCues: null,
                    _metaCuesByTextTime: null,
                    _unknownCount: 0,
                    _activeCues: null,
                    _cues: null,
                    textTrackChangeHandler: null,
                    addTrackHandler: null,
                    cueChangeHandler: null,
                    renderNatively: !1,
                    _initTextTracks() {
                        this._textTracks = [], this._tracksById = {}, this._metaCuesByTextTime = {}, this._cuesByTrackId = {}, this._cachedVTTCues = {}, this._cues = {}, this._activeCues = {}, this._unknownCount = 0
                    },
                    addTracksListener(t, e, i) {
                        t && (this.removeTracksListener(t, e, i), this.instreamMode || (t.addEventListener ? t.addEventListener(e, i) : t[`on${e}`] = i))
                    },
                    removeTracksListener(t, e, i) {
                        t && (t.removeEventListener && i ? t.removeEventListener(e, i) : t[`on${e}`] = null)
                    },
                    clearTracks() {
                        (0, n.VS)(this._itemTracks);
                        const {
                            _tracksById: t
                        } = this;
                        if (t && Object.keys(t).forEach((e => {
                            if (0 === e.indexOf("nativemetadata")) {
                                const i = t[e];
                                this.cueChangeHandler && i.removeEventListener("cuechange", this.cueChangeHandler), u(this.renderNatively, [i], !0)
                            }
                        })), this._itemTracks = null, this._textTracks = null, this._tracksById = null, this._cuesByTrackId = null, this._metaCuesByTextTime = null, this._unknownCount = 0, this._currentTextTrackIndex = -1, this._activeCues = {}, this._cues = {}, this.renderNatively) {
                            const t = this.video.textTracks;
                            this.textTrackChangeHandler && this.removeTracksListener(t, "change", this.textTrackChangeHandler), u(this.renderNatively, t, !0)
                        }
                    },
                    clearMetaCues() {
                        const {
                            _tracksById: t,
                            _cachedVTTCues: e
                        } = this;
                        t && e && Object.keys(t).forEach((i => {
                            if (0 === i.indexOf("nativemetadata")) {
                                const n = t[i];
                                u(this.renderNatively, [n], !1), n.mode = "hidden", n.inuse = !0, n._id && (e[n._id] = {})
                            }
                        }))
                    },
                    clearCueData(t) {
                        const e = this._cachedVTTCues;
                        null != e && e[t] && (e[t] = {}, this._tracksById && (this._tracksById[t].data = []))
                    },
                    disableTextTrack() {
                        const t = this.getCurrentTextTrack();
                        if (t) {
                            t.mode = "disabled";
                            const e = t._id;
                            (e && p(e) || this.renderNatively && c.OS.iOS) && (t.mode = "hidden")
                        }
                    },
                    enableTextTrack() {
                        const t = this.getCurrentTextTrack();
                        t && (t.mode = "showing")
                    },
                    getCurrentTextTrack() {
                        if (this._textTracks) return this._textTracks[this._currentTextTrackIndex]
                    },
                    getSubtitlesTrack() {
                        return this._currentTextTrackIndex
                    },
                    addTextTracks(t) {
                        var e;
                        const i = [];
                        return t ? (this._textTracks || this._initTextTracks(), t.forEach((t => {
                            if (t.includedInManifest || t.kind && !w(t.kind)) return;
                            const e = this._createTrack(t);
                            this._addTrackToList(e), i.push(e), t.file && (t.data = [], (0, n.xl)(t, (t => {
                                e.sideloaded = !0, this.addVTTCuesToTrack(e, t)
                            }), (t => {
                                this.trigger(d.cM, t)
                            })))
                        })), null != this && null != (e = this._textTracks) && e.length && this.trigger(d.jt, {
                            tracks: this._textTracks
                        }), i) : i
                    },
                    setTextTracks(t) {
                        var e;
                        if (this._currentTextTrackIndex = -1, t) {
                            if (this._textTracks) {
                                const t = this._tracksById;
                                this._activeCues = {}, this._cues = {}, this._unknownCount = 0, this._textTracks = this._textTracks.filter((e => {
                                    const i = e._id;
                                    return this.renderNatively && i && p(i) ? (delete t[i], !1) : (e.name && 0 === e.name.indexOf("Unknown") && this._unknownCount++, 0 === i.indexOf("nativemetadata") && "com.apple.streaming" === e.inBandMetadataTrackDispatchType && delete t[i], !0)
                                }), this)
                            } else this._initTextTracks();
                            if (t.length) {
                                let e = 0;
                                const i = t.length,
                                    n = this._tracksById,
                                    o = this._cuesByTrackId;
                                for (; e < i; e++) {
                                    const i = t[e];
                                    let a = i._id || "";
                                    if (!a) {
                                        if (!1 === i.inuse && w(i.kind) && this.renderNatively) {
                                            i._id = `native${i.kind}${e}`;
                                            continue
                                        }
                                        if (w(i.kind) || "metadata" === i.kind) {
                                            if (a = i._id = `native${i.kind}${e}`, !i.label && "captions" === i.kind) {
                                                const t = (0, s._)(i, this._unknownCount);
                                                i.name = t.label, this._unknownCount = t.unknownCount
                                            }
                                        } else a = i._id = (0, s.M)(i, this._textTracks ? this._textTracks.length : 0);
                                        if (n[a]) continue;
                                        i.inuse = !0
                                    }
                                    if (i.inuse && !n[a])
                                        if ("metadata" === i.kind) {
                                            i.mode = "hidden";
                                            const t = this.cueChangeHandler = this.cueChangeHandler || g.bind(this);
                                            i.removeEventListener("cuechange", t), i.addEventListener("cuechange", t), n[a] = i
                                        } else if (w(i.kind)) {
                                            const t = i.mode;
                                            let e;
                                            if (i.mode = "hidden", (!i.cues || !i.cues.length) && i.embedded) continue;
                                            if (("disabled" !== t || p(a)) && (i.mode = t), o[a] && !o[a].loaded) {
                                                const n = o[a].cues;
                                                for (; e = n.shift();) m(this.renderNatively, i, e);
                                                i.mode = t, o[a].loaded = !0
                                            }
                                            this._addTrackToList(i)
                                        }
                                }
                            }
                            this.renderNatively && this.addTrackListeners(t), null != this && null != (e = this._textTracks) && e.length && this.trigger(d.jt, {
                                tracks: this._textTracks
                            })
                        }
                    },
                    addTrackListeners(t) {
                        let e = this.textTrackChangeHandler = this.textTrackChangeHandler || f.bind(this);
                        this.removeTracksListener(t, "change", e), this.addTracksListener(t, "change", e), (c.Browser.edge && c.Browser.ie || c.Browser.firefox) && (e = this.addTrackHandler = this.addTrackHandler || b.bind(this), this.removeTracksListener(t, "addtrack", e), this.addTracksListener(t, "addtrack", e))
                    },
                    setupSideloadedTracks(t) {
                        if (!this.renderNatively) return;
                        const e = (t = t || null) === this._itemTracks;
                        e || (0, n.VS)(this._itemTracks), this._itemTracks = t, t && (e || (this.disableTextTrack(), this._clearSideloadedTextTracks(), this.addTextTracks(t)))
                    },
                    setSubtitlesTrack(t) {
                        if (!this.renderNatively) return void(this.setCurrentSubtitleTrack && this.setCurrentSubtitleTrack(t - 1));
                        if (!this._textTracks) return;
                        if (0 === t && this._textTracks.forEach((t => {
                            t.mode = t.embedded ? "hidden" : "disabled"
                        })), this._currentTextTrackIndex === t - 1) return;
                        this.disableTextTrack(), this._currentTextTrackIndex = t - 1;
                        const e = this.getCurrentTextTrack();
                        e && (e.mode = "showing"), this.trigger(d.UF, {
                            currentTrack: this._currentTextTrackIndex + 1,
                            tracks: this._textTracks
                        })
                    },
                    createCue: (t, e, i) => new(window.VTTCue || window.TextTrackCue)(t, Math.max(e || 0, t + .25), i),
                    addVTTCue(t, e) {
                        this._tracksById || this._initTextTracks();
                        const i = t.track ? t.track : `native${t.type}`;
                        let n = this._tracksById[i];
                        const s = "captions" === t.type ? "Unknown CC" : "ID3 Metadata",
                            o = t.cue;
                        if (!n) {
                            const e = {
                                kind: t.type,
                                _id: i,
                                label: s,
                                default: !1
                            };
                            this.renderNatively || "metadata" === e.kind ? (n = this._createTrack(e), n.embedded = !0, this.setTextTracks(this.video.textTracks)) : n = this.addTextTracks([e])[0]
                        }
                        if (this._cacheVTTCue(n, o, e)) {
                            const t = this.renderNatively || "metadata" === n.kind;
                            return t ? m(t, n, o) : n.data.push(o), o
                        }
                        return null
                    },
                    addVTTCuesToTrack(t, e) {
                        var i, n;
                        if (!this.renderNatively) return;
                        const s = t._id,
                            o = this._tracksById;
                        let a = this._cuesByTrackId;
                        const r = o[s];
                        if (!r) return a || (a = this._cuesByTrackId = {}), void(a[s] = {
                            cues: e,
                            loaded: !1
                        });
                        if (null != (i = a) && null != (n = i[s]) && n.loaded) return;
                        let l;
                        for (a[s] = {
                            cues: e,
                            loaded: !0
                        }; l = e.shift();) m(this.renderNatively, r, l)
                    },
                    parseNativeID3Cues(t, e) {
                        const i = t[t.length - 1];
                        if (e && e.length === t.length && (i._parsed || y(e[e.length - 1], i))) return;
                        const n = [],
                            s = [];
                        let o = -1,
                            a = -1,
                            r = -1;
                        for (let e = 0; e < t.length; e++) {
                            const i = t[e];
                            if (!i._extended && Boolean(i.data || i.value)) {
                                if (i.startTime !== a || null === i.endTime) {
                                    r = a, a = i.startTime;
                                    const t = n[o];
                                    n[++o] = [], s[o] = [];
                                    const e = a - r;
                                    if (t && e > 0)
                                        for (let e = 0; e < t.length; e++) {
                                            const i = t[e];
                                            i.endTime = a, i._extended = !0
                                        }
                                }
                                n[o].push(i), i._parsed || (s[o].push(i), i.endTime - a < .25 && (i.endTime = a + .25), i._parsed = !0)
                            }
                        }
                        for (let t = 0; t < s.length; t++) s[t].length && s[t].forEach((t => {
                            const e = v(t);
                            this.trigger(d.O1, e)
                        }))
                    },
                    triggerActiveCues(t, e) {
                        const i = t.filter((t => {
                            if (null != e && e.some((e => y(t, e)))) return !1;
                            if (t.data) return !0;
                            const i = t.text ? (t => {
                                let e;
                                try {
                                    e = JSON.parse(t.text)
                                } catch (t) {
                                    return null
                                }
                                const i = {
                                    metadataType: e.metadataType,
                                    metadataTime: t.startTime,
                                    metadata: e
                                };
                                return e.programDateTime && (i.programDateTime = e.programDateTime), i
                            })(t) : null;
                            if (i) "emsg" === i.metadataType && (i.metadata = i.metadata || {}, i.metadata.messageData = t.value), this.trigger(d.rx, i);
                            else if (t.value) return !0;
                            return !1
                        }));
                        i.length && i.forEach((t => {
                            const e = v(t);
                            this.trigger(d.rx, e)
                        }))
                    },
                    ensureMetaTracksActive() {
                        const t = this.video.textTracks,
                            e = t.length;
                        for (let i = 0; i < e; i++) {
                            const e = t[i];
                            "metadata" === e.kind && "disabled" === e.mode && (e.mode = "hidden")
                        }
                    },
                    _cacheVTTCue(t, e, i) {
                        const n = t.kind,
                            s = t._id,
                            o = this._cachedVTTCues;
                        o[s] || (o[s] = {});
                        const a = o[s];
                        let r;
                        switch (n) {
                            case "captions":
                            case "subtitles": {
                                r = i || Math.floor(20 * e.startTime);
                                const t = `_${e.line||"auto"}`,
                                    n = Math.floor(20 * e.endTime),
                                    s = a[r + t] || a[r + 1 + t] || a[r - 1 + t];
                                return !(s && Math.abs(s - n) <= 1) && (a[r + t] = n, !0)
                            }
                            case "metadata": {
                                const t = e.data ? new Uint8Array(e.data).join("") : e.text;
                                return r = i || e.startTime + t, a[r] ? !1 : (a[r] = e.endTime, !0)
                            }
                            default:
                                return !1
                        }
                    },
                    _addTrackToList(t) {
                        this._textTracks.push(t), this._tracksById[t._id] = t
                    },
                    _createTrack(t) {
                        let e;
                        const i = (0, s._)(t, this._unknownCount),
                            n = i.label;
                        if (this._unknownCount = i.unknownCount, this.renderNatively || "metadata" === t.kind) {
                            const i = this.video.textTracks;
                            e = (0, h._e)(i, {
                                label: n
                            }), e || (e = this.video.addTextTrack(t.kind, n, t.language || "")), e.default = t.default, e.mode = "disabled", e.inuse = !0
                        } else e = t, e.data = e.data || [];
                        return e._id || (e._id = (0, s.M)(t, this._textTracks ? this._textTracks.length : 0)), e
                    },
                    _clearSideloadedTextTracks() {
                        if (!this._textTracks) return;
                        const t = this._textTracks.filter((t => t.embedded || "subs" === t.groupid));
                        this._initTextTracks();
                        const e = this._tracksById;
                        t.forEach((t => {
                            e[t._id] = t
                        })), this._textTracks = t
                    }
                }
        },
        9601: (t, e, i) => {
            "use strict";
            i.d(e, {
                E: () => s,
                Z: () => o
            });
            var n = i(4446);
            const s = t => t >= 400 && t < 600 ? t : 6;

            function o(t, e, i) {
                let o = t + 1e3,
                    a = n.ul;
                return e > 0 ? (403 === e && (a = n.H4), o += s(e)) : "http:" === `${i}`.substring(0, 5) && "https:" === document.location.protocol ? o += 12 : 0 === e && (o += 11), {
                    code: o,
                    key: a
                }
            }
        },
        5099: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            const n = (t, e, i) => {
                const n = new Error(i);
                return n.name = t, n.code = e, n
            };

            function s(t) {
                return new Promise((function(e, i) {
                    if (t.paused) return i(n("NotAllowedError", 0, "play() failed."));
                    let s;
                    const o = function(t) {
                            if (s(), "playing" !== t.type) {
                                const e = `The play() request was interrupted by a "${t.type}" event.`;
                                return "error" === t.type ? i(n("NotSupportedError", 9, e)) : i(n("AbortError", 20, e))
                            }
                            e()
                        },
                        a = function() {
                            t.addEventListener("playing", o), t.addEventListener("abort", o), t.addEventListener("error", o), t.addEventListener("pause", o)
                        };
                    s = function() {
                        t.removeEventListener("play", a), t.removeEventListener("playing", o), t.removeEventListener("pause", o), t.removeEventListener("abort", o), t.removeEventListener("error", o)
                    }, t.addEventListener("play", a)
                }))
            }
        },
        686: (t, e, i) => {
            "use strict";
            i.d(e, {
                s: () => s,
                v: () => o
            });
            const n = t => void 0 === t ? 120 : Math.max(t, 0),
                s = (t, e) => t !== 1 / 0 && Math.abs(t) >= Math.max(n(e), 0),
                o = (t, e) => {
                    let i = "VOD";
                    return t === 1 / 0 ? i = "LIVE" : t < 0 && (i = s(t, n(e)) ? "DVR" : "LIVE"), i
                }
        },
        3949: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var n = i(8348),
                s = i(974),
                o = i(9974);
            const a = {
                container: null,
                volume(t) {
                    this.video.volume = Math.min(Math.max(0, t / 100), 1)
                },
                mute(t) {
                    this.video.muted = Boolean(t), this.video.muted || this.video.removeAttribute("muted")
                },
                resize(t, e, i) {
                    const {
                        video: o
                    } = this, {
                        videoWidth: a,
                        videoHeight: r
                    } = o;
                    if (!(t && e && a && r)) return;
                    const l = {
                            objectFit: "",
                            width: "",
                            height: ""
                        },
                        c = t / e,
                        d = a / r;
                    if ("uniform" === i) {
                        let n;
                        n = c > d ? t - t / (c / d) : e - e / (d / c), n < 6 && (l.objectFit = "fill", i = "exactfit")
                    }
                    if (n.Browser.ie || n.OS.iOS && (n.OS.version.major || 0) < 9 || n.Browser.androidNative)
                        if ("uniform" !== i) {
                            l.objectFit = "contain";
                            let n = 1,
                                h = 1;
                            "none" === i ? n = h = c > d ? Math.ceil(100 * r / e) / 100 : Math.ceil(100 * a / t) / 100 : "fill" === i ? n = h = c > d ? c / d : d / c : "exactfit" === i && (c > d ? (n = c / d, h = 1) : (n = 1, h = d / c)), (0, s.vs)(o, `matrix(${n.toFixed(2)}, 0, 0, ${h.toFixed(2)}, 0, 0)`)
                        } else l.top = l.left = l.margin = "", (0, s.vs)(o, "");
                    (0, s.oB)(o, l)
                },
                getContainer() {
                    return this.container
                },
                setContainer(t) {
                    this.container = t, this.video.parentNode !== t && t.appendChild(this.video)
                },
                removeFromContainer() {
                    const {
                        container: t,
                        video: e
                    } = this;
                    this.container = null, t && t === e.parentNode && t.removeChild(e)
                },
                remove() {
                    this.stop(), this.destroy(), this.removeFromContainer()
                },
                atEdgeOfLiveStream() {
                    if (!this.isLive()) return !1;
                    return (0, o.Z)(this.video.buffered) - this.video.currentTime <= 2
                }
            }
        },
        186: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => n
            });
            const n = {
                _eventsOn() {},
                _eventsOff() {},
                attachMedia() {
                    this._eventsOn()
                },
                detachMedia() {
                    return this._eventsOff()
                }
            }
        },
        8702: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => o
            });
            var n = i(1643),
                s = i(1261);
            const o = {
                canplay() {
                    this.renderNatively && this.setTextTracks(this.video.textTracks), this.trigger(n.Jl)
                },
                play() {
                    this.stallTime = -1, this.video.paused || this.state === n._5 || this.state === n.r0 || this.setState(n.ik)
                },
                loadedmetadata() {
                    const t = {
                            metadataType: "media",
                            duration: this.getDuration(),
                            height: this.video.videoHeight,
                            width: this.video.videoWidth,
                            seekRange: this.getSeekRange()
                        },
                        e = this.drmUsed;
                    e && (t.drm = e), this.trigger(n.rx, t)
                },
                timeupdate() {
                    const t = this.video.currentTime,
                        e = this.getCurrentTime(),
                        i = this.getDuration();
                    if (isNaN(i)) return;
                    this.seeking || this.video.paused || this.state !== n.nQ && this.state !== n.ik || this.stallTime === t || (this.stallTime = -1, this.setState(n.r0), this.trigger(n.Gj));
                    const s = {
                            position: e,
                            duration: i,
                            currentTime: t,
                            seekRange: this.getSeekRange(),
                            metadata: {
                                currentTime: t
                            }
                        },
                        o = this.getLiveLatency();
                    if (null !== o && (s.latency = o, this.getTargetLatency)) {
                        const t = this.getTargetLatency();
                        null !== t && (s.targetLatency = t)
                    }(this.state === n.r0 || this.seeking && this.state !== n.bc) && this.trigger(n.R2, s)
                },
                click(t) {
                    this.trigger(n.ot, t)
                },
                volumechange() {
                    const t = this.video;
                    this.trigger(n.yH, {
                        volume: Math.round(100 * t.volume)
                    }), this.trigger(n.gy, {
                        mute: t.muted
                    })
                },
                seeking() {
                    if (this.state === n.ik) {
                        const t = this.video.buffered.length ? this.video.buffered.start(0) : -1;
                        if (this.video.currentTime === t) return
                    } else if (this.state === n.bc) return;
                    this.seeking = !0
                },
                seeked() {
                    this.seeking && (this.seeking = !1, this.trigger(n.aQ))
                },
                playing() {
                    -1 === this.stallTime && this.setState(n.r0), this.trigger(n.Gj)
                },
                pause() {
                    this.state !== n.xQ && (this.video.ended || this.video.error || this.video.currentTime !== this.video.duration && this.setState(n._5))
                },
                progress() {
                    const t = this.getDuration();
                    if (t <= 0 || t === 1 / 0) return;
                    const e = this.video.buffered;
                    if (!e || 0 === e.length) return;
                    const i = (0, s.v)(e.end(e.length - 1) / t, 0, 1);
                    this.trigger(n.uT, {
                        bufferPercent: 100 * i,
                        position: this.getCurrentTime(),
                        duration: t,
                        currentTime: this.video.currentTime,
                        seekRange: this.getSeekRange()
                    })
                },
                ratechange() {
                    this.trigger(n.TJ, {
                        playbackRate: this.video.playbackRate
                    })
                },
                ended() {
                    this.state !== n.bc && this.state !== n.xQ && this.trigger(n.Ms)
                }
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
        9974: (t, e, i) => {
            "use strict";

            function n(t) {
                return t && t.length ? t.end(t.length - 1) : 0
            }
            i.d(e, {
                Z: () => n
            })
        },
        1831: (t, e, i) => {
            "use strict";
            i.d(e, {
                R: () => h,
                Z: () => p
            });
            var n = i(8348),
                s = i(2894),
                o = i(328),
                a = i(1643),
                r = i(974),
                l = i(2799),
                c = i(6042);
            let d;
            const h = {
                    back: !0,
                    backgroundOpacity: 50,
                    edgeStyle: null,
                    fontSize: 14,
                    fontOpacity: 100,
                    fontScale: .05,
                    preprocessor: c.yR,
                    windowOpacity: 0
                },
                u = function(t) {
                    const e = t.player;
                    let o, u, p, w, g, m, j, f;
                    const b = document.createElement("div");
                    b.className = "jw-captions jw-reset";
                    const y = () => {
                            const t = e.get("containerHeight");
                            if (!t) return;
                            let i;
                            if (e.get("fullscreen") && n.OS.iOS) i = null;
                            else {
                                const s = t * j;
                                i = Math.round(10 * (t => {
                                    const i = e.get("mediaElement");
                                    if (null != i && i.videoHeight) {
                                        const {
                                            videoWidth: t,
                                            videoHeight: s
                                        } = i, o = t / s;
                                        let a = e.get("containerHeight"),
                                            r = e.get("containerWidth");
                                        if (e.get("fullscreen") && n.OS.mobile) {
                                            const {
                                                screen: t
                                            } = window;
                                            t.orientation && (a = t.availHeight, r = t.availWidth)
                                        }
                                        if (r && a && t && s) return (r / a > o ? a : s * r / t) * j
                                    }
                                    return t
                                })(s)) / 10
                            }
                            e.get("renderCaptionsNatively") ? ((t, e) => {
                                const i = `#${t} .jw-video::-webkit-media-text-track-display`;
                                e && (e += "px", n.OS.iOS && (0, r.iv)(i, {
                                    fontSize: "inherit"
                                }, t, !0)), f.fontSize = e, (0, r.iv)(i, f, t, !0)
                            })(e.get("id"), i) : (0, r.oB)(b, {
                                fontSize: i
                            })
                        },
                        v = () => {
                            if (!(0, c.xV)(o.fontSize)) return;
                            e.get("containerHeight") ? j = h.fontScale * (o.userFontScale || 1) * o.fontSize / h.fontSize : e.once("change:containerHeight", v, this)
                        },
                        k = (t, e, i) => {
                            const n = (0, r.HY)("#000000", i);
                            "dropShadow" === t ? e.textShadow = `0 2px 1px ${n}` : "raised" === t ? e.textShadow = `0 0 5px ${n}, 0 1px 5px ${n}, 0 2px 5px ${n}` : "depressed" === t ? e.textShadow = `0 -2px 1px ${n}` : "uniform" === t && (e.textShadow = `-2px 0 1px ${n},2px 0 1px ${n},0 -2px 1px ${n},0 2px 1px ${n},-1px 1px 1px ${n},1px 1px 1px ${n},1px -1px 1px ${n},1px 1px 1px ${n}`)
                        },
                        x = (t, e) => {
                            y(), ((t, e) => {
                                n.Browser.safari && (0, r.iv)(`#${t} .jw-video::-webkit-media-text-track-display-backdrop`, {
                                    backgroundColor: e.backgroundColor
                                }, t, !0), (0, r.iv)(`#${t} .jw-video::-webkit-media-text-track-display`, f, t, !0), (0, r.iv)(`#${t} .jw-video::cue`, e, t, !0)
                            })(t, e), ((t, e) => {
                                (0, r.iv)(`#${t} .jw-text-track-display`, f, t), (0, r.iv)(`#${t} .jw-text-track-cue`, e, t)
                            })(t, e)
                        };
                    this.show = function() {
                        (0, l.cn)(b, "jw-captions-enabled")
                    }, this.hide = function() {
                        (0, l.IV)(b, "jw-captions-enabled")
                    }, this.populate = function(t) {
                        e.get("renderCaptionsNatively") || (p = [], u = t, t ? this.selectCues(t, w) : this.renderCues())
                    }, this.resize = function() {
                        y(), this.renderCues(!0)
                    }, this.renderCues = function(t) {
                        t = Boolean(t), d && d.processCues(window, p, b, t)
                    }, this.selectCues = function(t, i) {
                        if (!t || !t.data || !i || e.get("renderCaptionsNatively")) return;
                        const n = this.getAlignmentPosition(t, i);
                        !1 !== n && (p = this.getCurrentCues(t.data, n), this.renderCues(!0))
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
                        (0, l.cS)(b)
                    }, this.setup = function(t, i) {
                        g = document.createElement("div"), m = document.createElement("span"), g.className = "jw-captions-window jw-reset", m.className = "jw-captions-text jw-reset", o = Object.assign({}, h, i), j = h.fontScale;
                        const n = () => {
                            v(o.fontSize);
                            const e = o.windowColor,
                                i = o.windowOpacity,
                                n = o.edgeStyle;
                            f = {};
                            const s = {};
                            ((t, e) => {
                                const i = e.color,
                                    n = e.fontOpacity;
                                if ((i || n !== h.fontOpacity) && (t.color = (0, r.HY)(i || "#ffffff", n)), e.back) {
                                    const i = e.backgroundColor,
                                        n = e.backgroundOpacity;
                                    i === h.backgroundColor && n === h.backgroundOpacity || (t.backgroundColor = (0, r.HY)(i, n))
                                } else t.background = "transparent";
                                e.fontFamily && (t.fontFamily = e.fontFamily), e.fontStyle && (t.fontStyle = e.fontStyle), e.fontWeight && (t.fontWeight = e.fontWeight), e.textDecoration && (t.textDecoration = e.textDecoration)
                            })(s, o), (e || i !== h.windowOpacity) && (f.backgroundColor = (0, r.HY)(e || "#000000", i)), k(n, s, o.fontOpacity), o.back || null !== n || k("uniform", s), (0, r.oB)(g, f), (0, r.oB)(m, s), x(t, s)
                        };
                        n(), g.appendChild(m), b.appendChild(g), e.change("captionsTrack", (function(t, e) {
                            this.populate(e)
                        }), this), e.set("captions", o), e.on("change:captions", ((t, e) => {
                            o = e, n()
                        }))
                    }, this.element = function() {
                        return b
                    }, this.destroy = function() {
                        e.off(null, null, this), this.off()
                    };
                    const T = t => {
                            w = t, this.selectCues(u, w)
                        },
                        C = (t, e) => {
                            1 !== e.length && (t.get("renderCaptionsNatively") || d || (i.e(63).then(function(t) {
                                d = i(8698).default
                            }.bind(null, i)).catch((0, s.Jt)(301121)).catch((t => {
                                this.trigger(a.cM, t)
                            })), t.off("change:captionsList", C, this)))
                        };
                    e.on("change:playlistItem", (function() {
                        w = null, p = []
                    }), this), e.on(a.NZ, (function(t) {
                        p = [], T(t)
                    }), this), e.on(a.R2, T, this), e.on("subtitlesTrackData", (function() {
                        this.selectCues(u, w)
                    }), this), e.on("change:captionsList", C, this)
                };
            Object.assign(u.prototype, o.ZP);
            const p = u
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
                const r = document.createElement("div");
                r.className = `jw-icon jw-icon-inline jw-button-color jw-reset ${t}`, r.setAttribute("role", "button"), r.setAttribute("tabindex", "0"), i && r.setAttribute("aria-label", i), r.style.display = "none";
                const l = (0, o.Z)(r, e || s.Z.noop);
                return a && Array.prototype.forEach.call(a, (t => {
                    "string" == typeof t ? r.appendChild((0, n.Z)(t)) : r.appendChild(t)
                })), {
                    ui: l,
                    element: () => r,
                    toggle(t) {
                        t ? this.show() : this.hide()
                    },
                    show() {
                        r.style.display = ""
                    },
                    hide() {
                        r.style.display = "none"
                    }
                }
            }
        },
        8168: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => l,
                w: () => r
            });
            var n = i(974),
                s = i(4667),
                o = i(5646);
            const a = {},
                r = function(t) {
                    if (!a[t]) {
                        const e = Object.keys(a);
                        e.length > 10 && delete a[e[0]];
                        const i = (0, s.Z)(t);
                        a[t] = i
                    }
                    return a[t].cloneNode(!0)
                };
            const l = class {
                constructor(t, e, i, s, a) {
                    const l = document.createElement("div");
                    let c;
                    l.className = `jw-icon jw-icon-inline jw-button-color jw-reset ${a||""}`, l.setAttribute("button", s), l.setAttribute("role", "button"), l.setAttribute("tabindex", "0"), e && l.setAttribute("aria-label", e), t && "<svg" === t.substring(0, 4) ? c = r(t) : (c = document.createElement("div"), c.className = "jw-icon jw-button-image jw-button-color jw-reset", t && (0, n.oB)(c, {
                        backgroundImage: `url(${t})`
                    })), l.appendChild(c), (0, o.Z)(l, i, this), l.addEventListener("mousedown", (t => {
                        t.preventDefault()
                    })), this.id = s, this.buttonElement = l
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
                k: () => r,
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
            class r extends a {
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
                Z: () => w
            });
            var n = i(5882),
                s = i(328),
                o = i(2799),
                a = i(8165),
                r = i(7191),
                l = i(3477),
                c = i(7509),
                d = i(2810),
                h = i(5349);
            const u = t => {
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
                    }), i, [t.icon && (0, o.az)(t.icon) || (0, r.W)(n)]),
                    l = s.element();
                return l.setAttribute("name", e), l.setAttribute("role", "button"), l.setAttribute("type", "button"), l.setAttribute("aria-expanded", "false"), l.setAttribute("aria-controls", t.el.id), "ontouchstart" in window || (s.tooltip = (0, h.m)(l, e, i)), s.ui.directSelect = !0, s
            };
            var p = i(8518);
            class w extends s.ZP {
                constructor(t, e, i, n, s, a = c.qF) {
                    super(), this.open = this.open.bind(this), this.close = this.close.bind(this), this.toggle = this.toggle.bind(this), this.name = e, this.title = i || e, this.localizedPrevious = s.prev, this.isSubmenu = Boolean(n), this.el = (0, o.az)(a(t, this.isSubmenu, e, this.title)), this.buttonContainer = this.el.querySelector(`.jw-${this.name}-topbar-buttons`), this.children = {}, this.openMenus = [], this.items = [], this.visible = !1, this.parentMenu = n, this.mainMenu = this.parentMenu ? this.parentMenu.mainMenu : this, this.categoryButton = null, this.closeButton = this.mainMenu.closeButton, this.isSubmenu && (this.parentMenu.name === this.mainMenu.name && (this.categoryButton = this.createCategoryButton()), this.parentMenu.parentMenu && !this.mainMenu.backButton && (this.mainMenu.backButton = this.createBackButton(this.localizedPrevious)), this.itemsContainer = this.createItemsContainer(), this.parentMenu.appendMenu(this))
                }
                createItemsContainer() {
                    var t, e, i, s, a;
                    const r = this.el.querySelector(".jw-settings-submenu-items"),
                        l = null == this || null == (t = this.mainMenu) || null == (e = t.closeButton) || null == e.element ? void 0 : e.element(),
                        c = null == this || null == (i = this.mainMenu) || null == (s = i.backButton) || null == s.element ? void 0 : s.element(),
                        h = null == this || null == (a = this.categoryButton) || null == a.element ? void 0 : a.element(),
                        u = () => {
                            var t;
                            return null == this || null == (t = this.topbar) ? void 0 : t.firstChild
                        },
                        p = new n.ZP(r);
                    return p.on("keydown", (t => {
                        if (event.target.parentNode !== r) return;
                        const {
                            sourceEvent: e,
                            target: i
                        } = t, n = u(), s = document.getElementsByClassName("jw-icon-settings")[0], a = h ? (0, o.AH)(h) : l, p = h ? (0, o.i3)(h) : c, w = (0, o.AH)(i) || n || r.firstChild, g = (0, o.i3)(i) || n || r.lastChild, m = e && (0, d.ku)(e.key);
                        let j;
                        switch (m) {
                            case "Tab":
                                j = e.shiftKey ? p : a;
                                break;
                            case "Left":
                                j = p || this.close(t) && s;
                                break;
                            case "Up":
                                j = g;
                                break;
                            case "Right":
                                j = a;
                                break;
                            case "Down":
                                j = w;
                                break;
                            case "Esc":
                                j = s, this.mainMenu.close(event)
                        }
                        j && j.focus(), e.preventDefault(), "Esc" !== m && e.stopPropagation()
                    })), p
                }
                createCategoryButton() {
                    return u(this)
                }
                createBackButton(t) {
                    const e = () => this.mainMenu.backButtonTarget,
                        i = (0, a.Z)("jw-settings-back", (t => {
                            const i = e();
                            i && i.open(t)
                        }), t, [(0, r.W)("arrow-left")]);
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
                            r = () => {
                                s ? ((0, o.AH)(s.element()).focus(), n.preventDefault()) : i.closeButton.element().focus()
                            };
                        switch ((0, d.ku)(n.key)) {
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
                                r();
                                break;
                            case "Tab":
                                n.shiftKey ? a() : r()
                        }
                    })), (0, o.SH)(this.el, t), t
                }
                createItems(t, e, i = {}, n = l.k) {
                    const s = this.name;
                    return t.map(((t, a) => {
                        let r, l, c, d;
                        switch (s) {
                            case "quality":
                                "Auto" === t.label && 0 === a ? (r = `${i.defaultText}`, c = ' <span class="jw-reset jw-auto-label"></span>') : r = t.label;
                                break;
                            case "captions":
                                r = "Off" !== t.label && "off" !== t.id || 0 !== a ? t.label : i.defaultText;
                                break;
                            case "playbackRates":
                                l = t, r = (0, p.t6)(i.tooltipText) ? `x${t}` : `${t}x`;
                                break;
                            case "audioTracks":
                                r = t.name
                        }
                        r || (r = t, "object" == typeof t && (r.options = i));
                        return d = new n(r, (t => {
                            if ((0 !== t.pageX || 0 !== t.pageY) && !d.active) {
                                if (d.deactivate) {
                                    this.items.filter((t => !0 === t.active)).forEach((t => {
                                        t.deactivate()
                                    }));
                                    const e = this.mainMenu.backButtonTarget;
                                    e ? e.open(t) : this.mainMenu.close(t)
                                }
                                d.activate && d.activate(), e(l || a)
                            }
                        }).bind(this)), c && d.el.appendChild((0, o.az)(c)), d
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
                        r = "Up" === (a && (0, d.ku)(n.key)) ? o : s;
                    if (this.visible && !this.openMenus.length) return void(this.items.length && a && (this._openTimeout && clearTimeout(this._openTimeout), this._openTimeout = setTimeout((() => {
                        r.focus(), this._openTimeout = null
                    }))));
                    const {
                        mainMenu: l,
                        parentMenu: c,
                        categoryButton: h
                    } = this;
                    if (c.openMenus.push(this.name), c.openMenus.length > 1 && c.closeChildren(this.name), h && h.element().setAttribute("aria-expanded", "true"), c.isSubmenu) {
                        c.el.classList.remove("jw-settings-submenu-active"), l.topbar.el.classList.add("jw-nested-menu-open");
                        const t = l.topbar.el.querySelector(".jw-settings-topbar-text");
                        t.setAttribute("name", this.title), t.innerText = this.title;
                        const e = c.title;
                        this.setBackButtonAriaLabel(e), l.backButton.show(), this.mainMenu.backButtonTarget = this.parentMenu, this.buttonContainer && this.buttonContainer.el.setAttribute("aria-expanded", !0), i = t
                    } else l.topbar.el.classList.remove("jw-nested-menu-open"), l.backButton && l.backButton.hide(), this.mainMenu.backButtonTarget && (this.mainMenu.backButtonTarget = null);
                    this.el.classList.add("jw-settings-submenu-active"), e && a ? i = r : e || (l.open(t), i = h.element(), null != h && h.tooltip && !a && (h.tooltip.suppress = !0)), this.openMenus.length && this.closeChildren(), this.el.scrollTop = 0, this.visible = !0, this.el.setAttribute("aria-expanded", "true"), i && (this._openTimeout && clearTimeout(this._openTimeout), this._openTimeout = setTimeout((() => {
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
                JU: () => h,
                MR: () => p,
                dt: () => w,
                ku: () => u
            });
            const n = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "ff00ff", "#00ffff"],
                s = ["Arial", "Courier", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"],
                o = ["100%", "75%", "50%", "25%", "0%"],
                a = [100, 75, 50, 25, 0];
            let r, l;
            const c = t => {
                    const {
                        white: e,
                        black: i,
                        red: n,
                        green: s,
                        blue: o,
                        yellow: a,
                        magenta: l,
                        cyan: c
                    } = t;
                    return r = [e, i, n, s, o, a, l, c], r
                },
                d = t => {
                    const {
                        none: e,
                        raised: i,
                        depressed: n,
                        uniform: s,
                        dropShadow: o
                    } = t;
                    return l = [e, i, n, s, o], l
                },
                h = t => [{
                    name: "color",
                    label: t.color,
                    options: r || c(t),
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
                    options: l || d(t),
                    values: ["none", "raised", "depressed", "uniform", "dropShadow"],
                    defaultVal: "none"
                }, {
                    name: "backgroundColor",
                    label: t.backgroundColor,
                    options: r || c(t),
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
                    options: r || c(t),
                    values: n,
                    defaultVal: "#000000"
                }, {
                    name: "windowOpacity",
                    label: t.windowOpacity,
                    options: ["100%", "75%", "50%", "25%", "0%"],
                    values: a,
                    defaultVal: 0
                }],
                u = t => null == t || null == t.replace ? void 0 : t.replace(/(Arrow|ape)/, ""),
                p = function() {
                    this._destroyed || (this._destroyed = !0, Object.keys(this.children).forEach((t => {
                        this.children[t].destroy()
                    })), this.children = {}, this.model && (this.model.off(null, null, this), delete this.model), this.off())
                },
                w = function(t, e) {
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
                const r = document.createElement("div");
                let l;
                r.className = "jw-text", a.appendChild(r), t.appendChild(a);
                const c = t => {
                    t && l.dirty && ((0, n.nh)(r, l.text), l.dirty = !1), l.opened = t, (0, n.og)(a, "jw-open", t)
                };
                return l = {
                    dirty: Boolean(i),
                    opened: !1,
                    text: i,
                    touchEvent: !1,
                    suppress: !1,
                    open() {
                        l.touchEvent || (l.suppress ? l.suppress = !1 : (c(!0), s && s()))
                    },
                    close() {
                        l.touchEvent || (c(!1), o && o())
                    },
                    setText(t) {
                        t !== l.text && (l.text = t, l.dirty = !0), l.opened && c(!0)
                    }
                }, t.addEventListener("mouseover", l.open), t.addEventListener("focus", l.open), t.addEventListener("blur", l.close), t.addEventListener("mouseout", l.close), t.addEventListener("touchstart", (() => {
                    l.touchEvent = !0
                }), {
                    passive: !0
                }), l
            }
        },
        4244: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => d
            });
            var n = i(8348),
                s = i(328),
                o = i(5882),
                a = i(1261),
                r = i(2799);
            const l = function(t) {
                const e = (0, r.A8)(t),
                    i = window.pageXOffset;
                return i && n.OS.android && document.body.parentElement && document.body.parentElement.getBoundingClientRect().left >= 0 && (e.left -= i, e.right -= i), e
            };
            class c extends s.ZP {
                constructor(t, e) {
                    super(), this.className = `${t} jw-background-color jw-reset`, this.orientation = e
                }
                setup() {
                    this.el = (0, r.az)(((t = "", e = "") => `<div class="${t} ${e} jw-reset" aria-hidden="true"><div class="jw-slider-container jw-reset"><div class="jw-rail jw-reset"></div><div class="jw-buffer jw-reset"></div><div class="jw-progress jw-reset"></div><div class="jw-knob jw-reset"></div></div></div>`)(this.className, `jw-slider-${this.orientation}`)), this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0], this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0], this.elementProgress = this.el.getElementsByClassName("jw-progress")[0], this.elementThumb = this.el.getElementsByClassName("jw-knob")[0], this.ui = new o.ZP(this.element(), {
                        preventScrolling: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.dragMove, this).on("dragEnd", this.dragEnd, this).on("click", this.tap, this)
                }
                dragStart() {
                    this.trigger("dragStart"), this.railBounds = l(this.elementRail)
                }
                dragEnd(t) {
                    this.dragMove(t), this.trigger("dragEnd")
                }
                dragMove(t) {
                    const e = this.railBounds = this.railBounds ? this.railBounds : l(this.elementRail);
                    let i, n;
                    return "pointercancel" === t.sourceEvent.type || ("horizontal" === this.orientation ? (i = t.pageX, n = i < e.left ? 0 : i > e.right ? 100 : 100 * (0, a.v)((i - e.left) / e.width, 0, 1)) : (i = t.pageY, n = i >= e.bottom ? 0 : i <= e.top ? 100 : 100 * (0, a.v)((e.height - (i - e.top)) / e.height, 0, 1)), this.render(n), this.update(n)), !1
                }
                tap(t) {
                    this.railBounds = l(this.elementRail), this.dragMove(t)
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
            const d = c
        },
        8993: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => y
            });
            var n = i(6042),
                s = i(1261),
                o = i(974),
                a = i(9888),
                r = i(2799);
            const l = (t, e) => {
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
                d = i(4244),
                h = i(520),
                u = i(3946),
                p = i(6886),
                w = i(7387),
                g = i(8381),
                m = i(1643);
            const j = function(t) {
                this.begin = t.begin, this.end = t.end, this.img = t.text
            };
            class f extends h.Z {
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
                    t ? this.containerWidth = t + 16 : this.tooltip && (this.containerWidth = (0, r.A8)(this.container).width + 16)
                }
                resetWidth() {
                    this.containerWidth = 0
                }
            }
            class b extends d.Z {
                constructor(t, e, i) {
                    super("jw-slider-time", "horizontal"), this._model = t, this._api = e, this.timeUpdateKeeper = i, this.timeTip = new f("jw-tooltip-time", null, !0), this.timeTip.setup(), this.cues = [], this.seekThrottled = (0, n.P2)(this.performSeek, 400), this._updateAriaTextLimitedThrottled = l((0, n.P2)(this.updateAriaText, 1e3), 4), this.sliderOptions = this._model.get("timeSlider")
                }
                _onDvrSeekLimitChange() {
                    this.updateTime(this._model.get("position"), this._model.get("duration"))
                }
                setup() {
                    super.setup(), this._model.on("change:duration", this.onDuration, this).on("change:cues", this.updateCues, this).on("change:chapters", this.onChapters, this).on("seeked", (() => {
                        this._model.get("scrubbing") || (this._updateAriaTextLimitedThrottled.reset(), this._updateAriaTextLimitedThrottled())
                    })), this._model.change("position", this.onPosition, this).change("buffer", this.onBuffer, this).change("streamType", this.onStreamType, this), this._model.player.change("playlistItem", this.onPlaylistItem, this), this._model.change("dvrSeekLimit", this._onDvrSeekLimitChange, this);
                    const t = this.el;
                    (0, r.P$)(t, "tabindex", "0"), (0, r.P$)(t, "role", "slider"), (0, r.P$)(t, "aria-label", this._model.get("localization").slider), t.removeAttribute("aria-hidden"), this.elementRail.appendChild(this.timeTip.element()), this.ui = (this.ui || new c.ZP(t)).on("move drag", this.showTimeTooltip, this).on("dragEnd out", this.hideTimeTooltip, this).on("click", (() => t.focus())).on("focus", (() => this._updateAriaTextLimitedThrottled.reset())).on("blur", (() => this._updateAriaTextLimitedThrottled.shush())), this.sliderOptions && !this.sliderOptions.showKnob && (this.elementThumb.style.opacity = "0")
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
                    this.updateTime(t.get("position"), e), (0, r.P$)(this.el, "aria-valuemin", 0), (0, r.P$)(this.el, "aria-valuemax", Math.abs(e)), this.updateCues(null, t.getCues())
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
                        n = (0, r.A8)(this.elementRail);
                    let l = t.pageX ? t.pageX - n.left : t.x;
                    l = (0, s.v)(l, 0, n.width);
                    const c = l / n.width;
                    let d, h = e * c;
                    if (e < 0) {
                        e += this._model.get("dvrSeekLimit"), h = e * c, h = e - h
                    }
                    const u = (0, a.timeFormat)(h, !0),
                        p = this.timeTip,
                        w = this.getActiveCue(h);
                    if (w) p.update(u, w.text), d = w.text.length + u.length;
                    else {
                        let t = u;
                        e < 0 && h > -1 && (t = "Live"), p.update(t), d = t.length
                    }
                    this.textLength !== d && (this.textLength = d, p.resetWidth()), this.showThumbnail(h), (0, r.cn)(p.el, "jw-open");
                    const g = p.getWidth(),
                        m = i - n.width;
                    let j = 0;
                    g > m && (j = (g - m) / 2);
                    const f = Math.round(4 * Math.min(n.width - j, Math.max(j, l))) / 4;
                    (0, o.vs)(p.el, `translateX(${f}px)`)
                }
                hideTimeTooltip() {
                    (0, r.IV)(this.timeTip.el, "jw-open")
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
                    this.timeUpdateKeeper.textContent = s, (0, r.P$)(e, "aria-valuetext", s), (0, r.P$)(e, "aria-valuenow", i)
                }
                reset() {
                    this.resetThumbnails(), this.timeTip.resetWidth(), this.textLength = 0, this._updateAriaTextLimitedThrottled.reset()
                }
                loadThumbnails(t) {
                    t && (this.vttPath = t.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, (0, p.h)(t, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
                        plainText: !0
                    }))
                }
                thumbnailsLoaded(t) {
                    const e = (0, w.Z)(t.responseText);
                    Array.isArray(e) && (e.forEach((t => {
                        this.thumbnails.push(new j(t))
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
                    (0, p.h)(t, this.chaptersLoaded.bind(this), this.chaptersFailed, {
                        plainText: !0
                    })
                }
                chaptersLoaded(t) {
                    const e = (0, w.Z)(t.responseText);
                    if (Array.isArray(e)) {
                        const t = this._model.get("playlistItem") || {};
                        if (!t.chapters || !t.chapters.timestamps || !t.chapters.timestamps.length) {
                            const i = (0, g._b)(e, t.chapters);
                            t.chapters = i, this._model.set("playlistItem", t), i.timestamps[0] && 0 === i.timestamps[0].time && this._api.trigger(m.t6, i.timestamps[0])
                        }
                    }
                }
                chaptersFailed() {}
                addCue(t) {
                    const e = new u.M(t.begin, t.text, t.cueType);
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
                    const i = (0, g.Mf)(t, e.timestamps);
                    i && i !== this.activeChapter && (this.activeChapter = i, this._api.trigger(m.t6, i))
                }
            }
            const y = b
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
                    var a, r;
                    i || (s += " jw-hidden"), e && (a = this.el, r = e, a && r && (a.setAttribute("aria-label", r), a.setAttribute("role", "button"), a.setAttribute("tabindex", "0"))), this.el.className = s, this.tooltip = document.createElement("div"), this.tooltip.className = "jw-overlay jw-reset", this.openClass = "jw-open", this.componentType = "tooltip", this.el.appendChild(this.tooltip), n && n.length > 0 && Array.prototype.forEach.call(n, (t => {
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
                r = i(8993),
                l = i(2799),
                c = i(3946);
            class d {
                constructor(t, e, i, n, s, o, a) {
                    this.begin = t, this.time = t, this.end = e, this.text = i, this.first = n, this.last = s, this.cueType = "chapter", this.image = a, null != o && o.length && (this.ads = o.map((t => {
                        const e = (t.begin - this.begin) / (this.end - this.begin) * 100;
                        return new c.M(`${e}%`, t.text, t.cueType)
                    })))
                }
                align(t) {}
                makeEl() {
                    var t, e, i, n, s;
                    this.el = (0, l.az)('<div class="jw-timesegment jw-reset" aria-hidden="true">\n            <div class="jw-timesegment-resetter jw-reset">\n                <div class="jw-timesegment-container jw-reset">\n                    <div class="jw-timesegment-bar jw-rail jw-timesegment-background jw-reset"></div>\n                    <div class="jw-timesegment-bar jw-buffer jw-timesegment-buffered jw-reset"></div>\n                    <div class="jw-timesegment-bar jw-progress jw-timesegment-progress jw-reset"></div>\n                </div>\n            </div>\n        </div>'), this.paddingEl = null == (t = this.el) ? void 0 : t.querySelector(".jw-timesegment-resetter"), this.containerEl = null == (e = this.el) ? void 0 : e.querySelector(".jw-timesegment-container"), this.bufferedEl = null == (i = this.el) ? void 0 : i.querySelector(".jw-timesegment-buffered"), this.progressEl = null == (n = this.el) ? void 0 : n.querySelector(".jw-timesegment-progress"), null != this && null != (s = this.ads) && s.length && this.ads.forEach((t => {
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
            class h extends r.Z {
                constructor(t, e, i) {
                    super(t, e, i), this.cues = [], this.className = "jw-slider-time jw-chapter-slider-time jw-background-color jw-reset"
                }
                setup() {
                    super.setup(), this.elementActualRail = this.el.getElementsByClassName("jw-rail")[0], this.elementActualRail.classList.replace("jw-rail", "jw-old-rail"), this.elementBuffer.classList.replace("jw-buffer", "jw-old-buffer"), this.elementProgress.classList.replace("jw-progress", "jw-old-progress")
                }
                sizeSegmentsFromElement(t, e) {
                    const i = (0, l.A8)(t);
                    this.cues.forEach((t => {
                        if ("chapter" === t.cueType) {
                            const n = (0, l.A8)(t.el),
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
                            const r = e + 1 === n.length,
                                l = {
                                    begin: t.begin,
                                    end: t.end,
                                    text: t.text,
                                    first: !1,
                                    last: !1,
                                    ads: i(s, t.begin, t.end),
                                    image: t.image
                                };
                            r && void 0 !== t.end && t.end >= o && (l.last = !0), a || (a = !0, l.first = !0), this.addCue(l)
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
                    const e = new d(t.begin, t.end, t.text, t.first, t.last, t.ads, t.image);
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
            const u = h;
            var p = i(520),
                w = i(4244),
                g = i(5882);
            class m extends w.Z {
                constructor(t, e, i) {
                    let n = "jw-slider-volume";
                    "vertical" === t && (n += " jw-volume-tip"), super(n, t), this.setup(), this.element().classList.remove("jw-background-color"), (0, l.P$)(i, "tabindex", "0"), (0, l.P$)(i, "aria-label", e), (0, l.P$)(i, "aria-orientation", t), (0, l.P$)(i, "aria-valuemin", 0), (0, l.P$)(i, "aria-valuemax", 100), (0, l.P$)(i, "role", "slider"), this.uiOver = new g.ZP(i).on("click", (function() {}))
                }
            }
            class j extends p.Z {
                constructor(t, e, i, n, s) {
                    super(e, i, !0, n), this._model = t, this.horizontalContainer = s;
                    const o = t.get("localization").volumeSlider;
                    this.horizontalSlider = new m("horizontal", o, s), this.verticalSlider = new m("vertical", o, this.tooltip), s.appendChild(this.horizontalSlider.element()), this.addContent(this.verticalSlider.element()), this.verticalSlider.on("update", (function(t) {
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
                    })), this.ui = new g.ZP(this.el, {
                        directSelect: !0
                    }).on("click", this.handleClick, this).on("enter", (() => this.trigger("toggleValue"))), this.addSliderHandlers(this.ui), this.addSliderHandlers(this.horizontalSlider.uiOver), this.addSliderHandlers(this.verticalSlider.uiOver), this._model.change("audioMode", this.updateSlider, this)
                }
                updateSlider(t, e) {
                    const i = t.get("horizontalVolumeSlider") || e;
                    (0, l.og)(this.element(), "jw-flag-horizontal-slider", Boolean(i))
                }
                addSliderHandlers(t) {
                    const {
                        openSlider: e,
                        closeSlider: i
                    } = this;
                    t.on("over", e, this).on("out", i, this).on("focus", e, this).on("blur", i, this)
                }
                openSlider(t) {
                    super.openTooltip(t), (0, l.og)(this.horizontalContainer, this.openClass, !0)
                }
                closeSlider(t) {
                    super.closeTooltip(t), (0, l.og)(this.horizontalContainer, this.openClass, !1), this.horizontalContainer.blur()
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
                y = i(328),
                v = i(2268),
                k = i(9888),
                x = i(6234),
                T = i(5646);
            const C = (t, e) => {
                    const i = document.createElement("span");
                    return i.className = `jw-text jw-reset-text ${t}`, e && (0, l.P$)(i, "role", e), (0, l.P$)(i, "dir", "auto"), i
                },
                _ = (t, e) => {
                    const i = document.createElement("div");
                    return i.className = `jw-icon jw-icon-inline jw-text jw-reset ${t}`, e && (0, l.P$)(i, "role", e), i
                },
                M = t => {
                    const e = document.createElement("div");
                    return e.className = `jw-reset ${t}`, e
                },
                E = (t, e) => {
                    if ("WebKitPlaybackTargetAvailabilityEvent" in window) {
                        const i = (0, f.Z)("jw-icon-airplay jw-off", t, e.airplay, (0, o.o)("airplay-off,airplay-on"));
                        return (0, b.m)(i.element(), "airplay", e.airplay), i
                    }
                    if (n.Browser.chrome && window.chrome) {
                        const t = document.createElement("google-cast-launcher");
                        (0, l.P$)(t, "tabindex", "-1"), t.className += " jw-reset";
                        const i = (0, f.Z)("jw-icon-cast", null, e.cast);
                        i.ui.off();
                        const n = i.element();
                        return n.style.cursor = "pointer", n.appendChild(t), i.button = t, (0, b.m)(n, "chromecast", e.cast), i
                    }
                },
                S = (t, e, i) => {
                    if (!n.OS.mobile && "disabled" !== t && (n.Browser.chrome && !(0, v.yS)() || n.Browser.edge || n.Browser.safari)) {
                        const t = (0, f.Z)("jw-icon-pip jw-off", e, i.pipIcon, (0, o.o)("pip-on,pip-off"));
                        return (0, b.m)(t.element(), "pip", i.pipIcon), t
                    }
                },
                I = (t, e) => t.filter((t => !e.some((e => e.id + e.btnClass === t.id + t.btnClass && t.callback === e.callback)))),
                A = (t, e) => {
                    e.forEach((e => {
                        e.element && (e = e.element()), t.appendChild(e)
                    }))
                };
            class L {
                constructor(t, e, i) {
                    var a;
                    Object.assign(this, y.ZP), this._api = t, this._model = e, this._isMobile = n.OS.mobile, this._volumeAnnouncer = i.querySelector(".jw-volume-update");
                    const c = e.get("localization"),
                        d = e.get("timeSlider"),
                        h = new(!d || d.legacy ? r.Z : u)(e, t, i.querySelector(".jw-time-update"));
                    h.setup();
                    const p = this.menus = [];
                    let w, m, v;
                    this.ui = [];
                    let k = "";
                    const I = c.volume;
                    if (this._isMobile) {
                        if (!(e.get("sdkplatform") || n.OS.iOS && n.OS.version.major < 10)) {
                            const e = (0, o.o)("volume-0,volume-100");
                            v = (0, f.Z)("jw-icon-volume", (() => {
                                t.setMute()
                            }), I, e)
                        }
                    } else {
                        m = document.createElement("div"), m.className = "jw-horizontal-volume-container", w = new j(e, "jw-icon-volume", I, (0, o.o)("volume-0,volume-50,volume-100"), m);
                        const t = w.element();
                        p.push(w), (0, l.P$)(t, "role", "group"), e.change("mute", ((e, i) => {
                            const n = i ? c.unmute : c.mute;
                            (0, l.P$)(t, "aria-label", `${n} button`)
                        }), this)
                    }
                    const L = (0, f.Z)("jw-icon-next", (() => {
                            t.next({
                                feedShownId: k,
                                reason: "interaction"
                            })
                        }), c.next, (0, o.o)("next")),
                        B = (0, f.Z)("jw-icon-settings jw-settings-submenu-button", (t => {
                            this.trigger("settingsInteraction", "quality", !0, t)
                        }), c.settings, (0, o.o)("settings"));
                    (0, l.P$)(B.element(), "aria-controls", `jw-${t.id}-settings-menu`), (0, l.P$)(B.element(), "aria-expanded", !1);
                    const P = (0, f.Z)("jw-icon-cc jw-settings-submenu-button", (t => {
                        this.trigger("settingsInteraction", "captions", !1, t)
                    }), c.cc, (0, o.o)("cc-off,cc-on"));
                    (0, l.P$)(P.element(), "aria-controls", `jw-${t.id}-settings-submenu-captions`);
                    const z = (0, f.Z)("jw-text-live", (() => {
                        this.goToLiveEdge()
                    }), c.liveBroadcast);
                    z.element().textContent = c.liveBroadcast;
                    const R = this.elements = {
                            alt: C("jw-text-alt", "status"),
                            play: (0, f.Z)("jw-icon-playback", (() => {
                                t.playToggle({
                                    reason: "interaction"
                                })
                            }), c.play, (0, o.o)("play,pause,stop")),
                            rewind: (0, f.Z)("jw-icon-rewind", (() => {
                                this.rewind()
                            }), c.rewind, (0, o.o)("rewind")),
                            live: z,
                            next: L,
                            elapsed: _("jw-text-elapsed", "timer"),
                            countdown: _("jw-text-countdown", "timer"),
                            time: h,
                            duration: _("jw-text-duration", "timer"),
                            mute: v,
                            volumetooltip: w,
                            horizontalVolumeContainer: m,
                            cast: E((() => {
                                t.castToggle()
                            }), c),
                            pip: S(e.get("pipIcon"), (() => {
                                t.setPip()
                            }), c),
                            imaFullscreen: (0, f.Z)("jw-icon-fullscreen", (() => {
                                t.setFullscreen()
                            }), c.fullscreen, (0, o.o)("fullscreen-off,fullscreen-on")),
                            fullscreen: (0, f.Z)("jw-icon-fullscreen", (() => {
                                t.setFullscreen()
                            }), c.fullscreen, (0, o.o)("fullscreen-off,fullscreen-on")),
                            spacer: M("jw-spacer"),
                            buttonContainer: M("jw-button-container"),
                            settingsButton: B,
                            captionsButton: P
                        },
                        O = (0, b.m)(P.element(), "captions", c.cc),
                        V = t => {
                            const e = t.get("captionsList")[t.get("captionsIndex")];
                            let i = c.cc;
                            e && "Off" !== e.label && (i = e.label), O.setText(i)
                        },
                        $ = (0, b.m)(R.play.element(), "play", c.play);
                    this.setPlayText = t => {
                        $.setText(t)
                    };
                    const F = R.next.element(),
                        H = (0, b.m)(F, "next", c.nextUp, (() => {
                            const t = e.get("nextUp");
                            t && (k = (0, x.B)(x.F), this.trigger("nextShown", {
                                mode: t.mode,
                                ui: "nextup",
                                itemsShown: [t],
                                feedData: t.feedData,
                                reason: "hover",
                                feedShownId: k
                            }))
                        }), (() => {
                            k = ""
                        }));
                    (0, l.P$)(F, "dir", "auto"), (0, b.m)(R.rewind.element(), "rewind", c.rewind), (0, b.m)(R.settingsButton.element(), "settings", c.settings);
                    const Z = [(0, b.m)(R.fullscreen.element(), "fullscreen", c.fullscreen), (0, b.m)(R.imaFullscreen.element())];
                    (0, l.cn)(R.imaFullscreen.element(), "jw-fullscreen-ima");
                    const N = [R.play, R.rewind, R.next, R.volumetooltip, R.horizontalVolumeContainer, R.imaFullscreen, R.mute, R.alt, R.live, R.elapsed, R.countdown, R.duration, R.spacer, R.cast, R.captionsButton, R.settingsButton, R.pip, R.fullscreen].filter((t => t)),
                        D = [R.time, R.buttonContainer].filter((t => t));
                    this.el = document.createElement("div"), this.el.className = "jw-controlbar jw-reset", A(R.buttonContainer, N), A(this.el, D);
                    const U = e.get("logo");
                    if (U && "control-bar" === U.position && this.addLogo(U), R.play.show(), R.fullscreen.show(), R.imaFullscreen.show(), R.mute && R.mute.show(), R.pip && R.pip.show(), e.change("volume", this.onVolume, this), e.change("mute", ((t, e) => {
                        this.renderVolume(e, t.get("volume"))
                    }), this), e.change("state", this.onState, this), e.change("duration", this.onDuration, this), e.change("position", this.onElapsed, this), e.change("dvrSeekLimit", this.onElapsed, this), e.change("fullscreen", ((t, e) => {
                        const i = [this.elements.fullscreen.element(), this.elements.imaFullscreen.element()];
                        for (let n = 0; n < i.length; n++) {
                            const s = i[n];
                            (0, l.og)(i[n], "jw-off", e);
                            const o = t.get("fullscreen") ? c.exitFullscreen : c.fullscreen;
                            Z[n].setText(o), (0, l.P$)(s, "aria-label", o)
                        }
                    }), this), e.change("allowFullscreen", this.onAllowFullscreenToggle, this), e.change("pip", ((t, e) => {
                        this.elements.pip && (0, l.og)(this.elements.pip.element(), "jw-off", e)
                    }), this), e.change("mediaType", ((t, e) => {
                        this.elements.pip && this.elements.pip.toggle("audio" !== e)
                    }), this), e.change("streamType", this.onStreamTypeChange, this), e.change("dvrLive", ((t, e) => {
                        const {
                            liveBroadcast: i,
                            notLive: n
                        } = c, s = this.elements.live.element(), o = !1 === e;
                        (0, l.og)(s, "jw-dvr-live", o), (0, l.P$)(s, "aria-label", o ? n : i), s.textContent = o ? n : i
                    }), this), e.change("altText", this.setAltText, this), e.change("customButtons", this.updateButtons, this), e.on("change:captionsIndex", V, this), e.on("change:captionsList", V, this), e.change("nextUp", ((t, e) => {
                        k = (0, x.B)(x.F);
                        let i = c.nextUp;
                        null != e && e.title && (i += `: ${e.title}`), H.setText(i), R.next.toggle(Boolean(e))
                    }), this), e.change("audioMode", this.onAudioMode, this), R.cast && (e.change("castAvailable", this.onCastAvailable, this), e.change("castActive", this.onCastActive, this)), R.volumetooltip && (R.volumetooltip.on("update", (function(t) {
                        const e = t.percentage;
                        this._api.setVolume(e)
                    }), this), R.volumetooltip.on("toggleValue", (function() {
                        this._api.setMute()
                    }), this), R.volumetooltip.on("adjustVolume", (function(t) {
                        this.trigger("adjustVolume", t)
                    }), this)), null != R && null != (a = R.cast) && a.button) {
                        const t = R.cast.ui.on("click enter", (function(t) {
                            "keydown" === t.type && R.cast.button.click(), this._model.set("castClicked", !0)
                        }), this);
                        this.ui.push(t)
                    }
                    const q = (0, T.Z)(R.duration, (function() {
                        if ("DVR" === this._model.get("streamType")) {
                            const t = this._model.get("position"),
                                e = this._model.get("dvrSeekLimit");
                            this._api.seek(Math.max(-e, t), {
                                reason: "interaction"
                            })
                        }
                    }), this);
                    this.ui.push(q);
                    const W = new g.ZP(this.el).on("click drag", (function() {
                        this.trigger(s.xf)
                    }), this);
                    this.ui.push(W), p.forEach((t => {
                        t.on("open-tooltip", this.closeMenus, this)
                    }))
                }
                onVolume(t, e) {
                    this.renderVolume(t.get("mute"), e)
                }
                renderVolume(t, e) {
                    const i = this.elements.mute,
                        n = this.elements.volumetooltip;
                    if (i && ((0, l.og)(i.element(), "jw-off", t), (0, l.og)(i.element(), "jw-full", !t)), n) {
                        const i = t ? 0 : e,
                            s = n.element();
                        n.verticalSlider.render(i), n.horizontalSlider.render(i);
                        const {
                            tooltip: o,
                            horizontalContainer: a
                        } = n;
                        (0, l.og)(s, "jw-off", t), (0, l.og)(s, "jw-full", e >= 75 && !t), (0, l.P$)(o, "aria-valuenow", i), (0, l.P$)(a, "aria-valuenow", i);
                        const r = `Volume ${i}%`;
                        (0, l.P$)(o, "aria-valuetext", r), (0, l.P$)(a, "aria-valuetext", r), document.activeElement !== o && document.activeElement !== a && (this._volumeAnnouncer.textContent = r)
                    }
                }
                onCastAvailable(t, e) {
                    this.elements.cast.toggle(e)
                }
                onCastActive(t, e) {
                    this.elements.fullscreen.toggle(!e), this.elements.imaFullscreen.toggle(!e), this.elements.pip && this.elements.pip.toggle(!e), this.elements.cast.button && (0, l.og)(this.elements.cast.button, "jw-off", !e)
                }
                onElapsed(t, e) {
                    let i, n;
                    const s = t.get("duration");
                    if ("DVR" === t.get("streamType")) {
                        const s = Math.ceil(e),
                            o = -this._model.get("dvrSeekLimit") * 1.2;
                        i = n = "", t.set("dvrLive", s >= o)
                    } else i = (0, k.timeFormat)(e), n = (0, k.timeFormat)(s - e);
                    this.elements.elapsed.textContent = i, this.elements.countdown.textContent = n
                }
                onDuration(t, e) {
                    this.elements.duration.textContent = (0, k.timeFormat)(Math.abs(e))
                }
                onAudioMode(t, e) {
                    const i = this.elements.time.element();
                    e ? this.elements.buttonContainer.insertBefore(i, this.elements.elapsed) : (0, l.SH)(this.el, i)
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
                    this.setPlayText(n), e === s.r0 && ("LIVE" !== t.get("streamType") ? (n = i.pause, this.setPlayText(n)) : (n = i.stop, this.setPlayText(n))), (0, l.P$)(this.elements.play.element(), "aria-label", n)
                }
                onAllowFullscreenToggle(t, e) {
                    [this.elements.fullscreen.element(), this.elements.imaFullscreen.element()].forEach((t => {
                        (0, l.og)(t, "jw-fullscreen-disallowed", !e)
                    }))
                }
                onStreamTypeChange(t, e) {
                    const i = "LIVE" === e,
                        n = "DVR" === e;
                    this.elements.rewind && this.elements.rewind.toggle(!i), this.elements.live.toggle(i || n), (0, l.P$)(this.elements.live.element(), "tabindex", i ? "-1" : "0"), this.elements.duration.style.display = n ? "none" : "", this.onDuration(t, t.get("duration")), this.onState(t, t.get("state"))
                }
                addLogo(t) {
                    const e = this.elements.buttonContainer,
                        i = new a.Z(t.file, this._model.get("localization").logo, (() => {
                            t.link && (0, l.nG)(t.link, "_blank", {
                                rel: "noreferrer"
                            })
                        }), "logo", "jw-logo-button");
                    t.link || (0, l.P$)(i.element(), "tabindex", "-1"), e.insertBefore(i.element(), e.querySelector(".jw-spacer").nextSibling)
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
                    e !== i && i ? (s = I(e, i), o = I(i, e), this.removeButtons(n, o)) : s = e;
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
                    e && (0, l.og)(e.element(), "jw-off", !t)
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
                Z: () => u
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
                r = i(2799);
            class l extends a.ZP {
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
                        t || (t = (0, r.az)(`<div class="jw-idle-icon-text">${n.playback}</div>`), (0, r.cn)(this.icon, "jw-idle-label"), this.icon.appendChild(t))
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
            var d = i(7191);
            const h = function(t, e, i, n, s, o, a) {
                const r = n.querySelector(`.jw-display-icon-${t}`),
                    l = n.querySelector(`.jw-icon-${t}`);
                e.forEach((t => {
                    l.appendChild(t)
                })), s[t] = new i(o, a, r)
            };
            class u {
                constructor(t, e) {
                    var i;
                    this.el = (0, r.az)((i = t.get("localization"), '<div class="jw-display jw-reset"><div class="jw-display-container jw-reset"><div class="jw-display-controls jw-reset">' + n("rewind", i.rewind) + n("display", i.playback) + n("next", i.next) + "</div></div></div>"));
                    const s = this.el.querySelector(".jw-display-controls"),
                        a = {};
                    h("rewind", (0, d.o)("rewind"), o, s, a, t, e), h("display", (0, d.o)("play,pause,buffer,replay"), l, s, a, t, e), h("next", (0, d.o)("next"), c, s, a, t, e), this.container = s, this.buttons = a
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
                W: () => dt,
                o: () => ht
            });
            var n = i(147),
                s = i.n(n),
                o = i(4886),
                a = i.n(o),
                r = i(4777),
                l = i.n(r),
                c = i(6084),
                d = i.n(c),
                h = i(2521),
                u = i.n(h),
                p = i(6207),
                w = i.n(p),
                g = i(6641),
                m = i.n(g),
                j = i(3498),
                f = i.n(j),
                b = i(3918),
                y = i.n(b),
                v = i(3356),
                k = i.n(v),
                x = i(8157),
                T = i.n(x),
                C = i(5806),
                _ = i.n(C),
                M = i(7766),
                E = i.n(M),
                S = i(4851),
                I = i.n(S),
                A = i(3207),
                L = i.n(A),
                B = i(7938),
                P = i.n(B),
                z = i(4060),
                R = i.n(z),
                O = i(4119),
                V = i.n(O),
                $ = i(9992),
                F = i.n($),
                H = i(6038),
                Z = i.n(H),
                N = i(5058),
                D = i.n(N),
                U = i(7459),
                q = i.n(U),
                W = i(4606),
                Q = i.n(W),
                X = i(1438),
                Y = i.n(X),
                K = i(5147),
                G = i.n(K),
                J = i(9863),
                tt = i.n(J),
                et = i(2494),
                it = i.n(et),
                nt = i(8675),
                st = i.n(nt),
                ot = i(4667);
            let at = null;
            const rt = function() {
                    return at || (at = (0, ot.Z)(`<xml>${s()}${a()}${l()}${d()}${u()}${w()}${m()}${f()}${y()}${k()}${T()}${_()}${E()}${I()}${L()}${P()}${R()}${V()}${F()}${Z()}${D()}${Y()}${G()}${q()}${Q()}${tt()}${it()}${st()}</xml>`)), at
                },
                lt = function(t) {
                    return `.jw-svg-icon-${t}`
                },
                ct = function(t) {
                    return t.cloneNode(!0)
                },
                dt = function(t) {
                    const e = rt().querySelector(lt(t));
                    return e ? ct(e) : null
                },
                ht = function(t) {
                    const e = rt().querySelectorAll(t.split(",").map(lt).join(","));
                    return Array.prototype.map.call(e, (t => ct(t)))
                }
        },
        3163: (t, e, i) => {
            "use strict";
            i.d(e, {
                Ge: () => o,
                dr: () => r,
                v2: () => a
            });
            var n = i(4060),
                s = i.n(n);
            const o = t => `<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="${t}" dir="auto">${t}</button>`,
                a = ({
                         label: t,
                         currentSelection: e
                     }) => `<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="${t}" aria-expanded="false" dir="auto">${t}<div class='jw-reset jw-settings-value-wrapper'><div class="jw-reset-text jw-settings-content-item-value">${e}</div><div class="jw-reset-text jw-settings-content-item-arrow">${s()}</div></div></button>`,
                r = t => `<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="${t}" role="menuitemradio" aria-checked="false" dir="auto">${t}</button>`
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
        8446: (t, e, i) => {
            "use strict";
            i.d(e, {
                FM: () => o,
                Sf: () => r,
                xq: () => a
            });
            var n = i(2957),
                s = i(974);
            const o = t => t.replace(/^(.*\/)?(.*)-?.*\.(css).*$/, "$2"),
                a = t => {
                    t || (t = {});
                    const e = t.active,
                        i = t.inactive,
                        n = t.background,
                        o = {};
                    return o.controlbar = (t => {
                        if (t || e || i || n) {
                            const s = {};
                            return t = t || {}, s.iconsActive = t.iconsActive || e, s.icons = t.icons || i, s.text = t.text || i, s.background = t.background || n, s
                        }
                    })(t.controlbar), o.timeslider = (t => {
                        if (t || e) {
                            const i = {};
                            return t = t || {}, i.progress = t.progress || e, i.rail = t.rail, i.buffer = t.buffer, !i.buffer && i.progress && (i.buffer = (0, s.HY)(i.progress, 50)), i.knob = t.knob || i.progress, i.ads = t.ads || n, i
                        }
                    })(t.timeslider), o.menus = (t => {
                        if (t || e || i || n) {
                            const s = {};
                            return t = t || {}, s.text = t.text || i, s.textActive = t.textActive || e, s.background = t.background || n, s
                        }
                    })(t.menus), o.tooltips = (t => {
                        if (t || i || n) {
                            const e = {};
                            return t = t || {}, e.text = t.text || i, e.background = t.background || n, e
                        }
                    })(t.tooltips), o
                },
                r = (t, e) => {
                    if (!e) return;
                    const i = (e, i, o, a) => {
                        if (!o) return;
                        e = (0, n.O4)(e, `#${t}${a?"":" "}`);
                        const r = {};
                        r[i] = o, (0, s.iv)(e.join(", "), r, t)
                    };
                    var o;
                    e.controlbar && (o = e.controlbar, i([".jw-controlbar .jw-icon-inline.jw-text", ".jw-title-primary", ".jw-title-secondary"], "color", o.text), o.icons && (i([".jw-button-color:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:not(.jw-icon-cast)"], "color", o.icons), i([".jw-display-icon-container .jw-button-color"], "color", o.icons), (0, s.iv)(`#${t} .jw-icon-cast google-cast-launcher.jw-off`, `{--disconnected-color: ${o.icons}}`, t)), o.iconsActive && (i([".jw-display-icon-container .jw-button-color:hover", ".jw-display-icon-container .jw-button-color:focus"], "color", o.iconsActive), i([".jw-button-color.jw-toggle:not(.jw-icon-cast)", ".jw-button-color:hover:not(.jw-icon-cast)", ".jw-button-color:focus:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:hover:not(.jw-icon-cast)"], "color", o.iconsActive), i([".jw-svg-icon-buffer"], "fill", o.icons), (0, s.iv)(`#${t} .jw-icon-cast:hover google-cast-launcher.jw-off`, `{--disconnected-color: ${o.iconsActive}}`, t), (0, s.iv)(`#${t} .jw-icon-cast:focus google-cast-launcher.jw-off`, `{--disconnected-color: ${o.iconsActive}}`, t), (0, s.iv)(`#${t} .jw-icon-cast google-cast-launcher.jw-off:focus`, `{--disconnected-color: ${o.iconsActive}}`, t), (0, s.iv)(`#${t} .jw-icon-cast google-cast-launcher`, `{--connected-color: ${o.iconsActive}}`, t), (0, s.iv)(`#${t} .jw-icon-cast google-cast-launcher:focus`, `{--connected-color: ${o.iconsActive}}`, t), (0, s.iv)(`#${t} .jw-icon-cast:hover google-cast-launcher`, `{--connected-color: ${o.iconsActive}}`, t), (0, s.iv)(`#${t} .jw-icon-cast:focus google-cast-launcher`, `{--connected-color: ${o.iconsActive}}`, t)), i([" .jw-settings-topbar", ":not(.jw-state-idle) .jw-controlbar", ".jw-flag-audio-player .jw-controlbar"], "background", o.background, !0)), e.timeslider && (t => {
                        const {
                            progress: e,
                            buffer: n,
                            rail: o,
                            knob: a,
                            ads: r
                        } = t;
                        e && "none" !== e && (i([".jw-progress"], "background-color", e), i([".jw-slider-volume .jw-buffer"], "background-color", (0, s.HY)(e, 50))), n && "none" !== n && i([".jw-slider-time .jw-buffer"], "background-color", n), r && "none" !== r && i([".jw-slider-time .jw-cue-type-ads"], "background-color", r), a && "none" !== a && i([".jw-knob"], "background-color", a), o && "none" !== o && i([".jw-rail"], "background-color", o), i([".jw-background-color.jw-slider-time", ".jw-slider-time .jw-cue"], "background-color", t.background)
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
                            (0, s.iv)(`#${t} .jw-color-active`, i, t), (0, s.iv)(`#${t} .jw-color-active-hover:hover`, i, t)
                        }
                        if (e.text) {
                            const i = {
                                color: e.text,
                                borderColor: e.text,
                                stroke: e.text
                            };
                            (0, s.iv)(`#${t} .jw-color-inactive`, i, t), (0, s.iv)(`#${t} .jw-color-inactive-hover:hover`, i, t)
                        }
                    })(e.menus)
                }
        },
        9659: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => ze
            });
            var n = i(1918),
                s = i(1643),
                o = i(6391),
                a = i(623),
                r = i(5191);
            const l = ["notVisible", "always", "never"];
            var c = i(9128),
                d = i(7263),
                h = i(8320),
                u = i(658),
                p = i(2957),
                w = i(328),
                g = i(2303);
            class m {
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

            function j(t) {
                return new m(t)
            }
            var f = i(4446),
                b = i(6042);
            const y = function(t, e) {
                    const i = this.mediaModel,
                        n = Object.assign({}, e, {
                            type: t
                        });
                    switch (t) {
                        case s.oZ:
                            if (i.get(s.oZ) === n.mediaType) return;
                            i.set(s.oZ, n.mediaType);
                            break;
                        case s.ug:
                            return void i.set(s.ug, Object.assign({}, e));
                        case s.gy:
                            if (e[s.gy] === this.model.getMute()) return;
                            break;
                        case s.uc: {
                            const {
                                newstate: t
                            } = e;
                            t === s.bc && (this.thenPlayPromise.cancel(), i.srcReset());
                            const n = i.attributes.mediaState;
                            i.attributes.mediaState = t, i.trigger("change:mediaState", i, t, n);
                            break
                        }
                        case s.Ms:
                            return this.beforeComplete = !0, this.trigger(s.s$, n), void(this.attached && !this.background && this._playbackComplete());
                        case s.Ew:
                            i.get("setup") ? (this.thenPlayPromise.cancel(), i.srcReset()) : (t = s.cM, n.code += 1e5);
                            break;
                        case s.rx: {
                            const {
                                duration: t,
                                metadataType: s,
                                seekRange: o
                            } = e;
                            s || (n.metadataType = "unknown"), (0, b.qh)(t) && (i.set("seekRange", o), i.set("duration", t));
                            break
                        }
                        case s.uT:
                            i.set("buffer", e.bufferPercent);
                        case s.R2: {
                            const n = e;
                            i.set("seekRange", n.seekRange), i.set("position", n.position), i.set("currentTime", n.currentTime);
                            const o = n.duration;
                            (0, b.qh)(o) && i.set("duration", o), t === s.R2 && "starttime" in this.item && delete this.item.starttime;
                            break
                        }
                        case s.aQ: {
                            const t = this.mediaElement;
                            null != t && t.paused && i.set("mediaState", "paused");
                            break
                        }
                        case s.UZ:
                            i.set(s.UZ, e.levels);
                        case s.aM: {
                            const {
                                currentQuality: t,
                                levels: n
                            } = e;
                            t > -1 && n.length > 1 && i.set("currentLevel", parseInt(t, 10));
                            break
                        }
                        case s.j0:
                            i.set(s.j0, e.tracks);
                        case s._B: {
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
                v = function(t, e) {
                    const i = this.model;
                    switch (t) {
                        case s.uc:
                            return;
                        case s.yH:
                            return void i.set(s.yH, e[s.yH]);
                        case s.gy:
                            return void i.set(s.gy, e[s.gy]);
                        case s.TJ:
                            return void i.set("playbackRate", e.playbackRate);
                        case s.rx:
                            Object.assign(i.get("itemMeta"), e.metadata);
                            break;
                        case s.aM:
                            i.persistQualityLevel(e.currentQuality, e.levels);
                            break;
                        case s.UF:
                            i.persistVideoSubtitleTrack(e.currentTrack, e.tracks);
                            break;
                        case s.R2:
                            e.targetLatency && i.set("dvrSeekLimit", e.targetLatency);
                        case s.NZ:
                        case s.aQ:
                        case s.h7:
                        case s.jt:
                        case "subtitlesTracksData":
                            i.trigger(t, e);
                            break;
                        case s.qG:
                            return void i.persistBandwidthEstimate(e.bandwidthEstimate)
                    }
                    this.trigger(t, e)
                };
            var k = i(8348),
                x = i(7753),
                T = i(9918),
                C = i(8381);
            class _ extends x.Z {
                constructor() {
                    super(), this.addAttributes({
                        mediaState: s.bc
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
            class M extends x.Z {
                constructor() {
                    super(), this.providerController = null, this._provider = null, this.addAttributes({
                        mediaModel: new _,
                        minDvrWindow: T.ni,
                        dvrSeekLimit: T.OG
                    })
                }
                setup(t) {
                    return t = t || {}, this._normalizeConfig(t), Object.assign(this.attributes, t, T.bv), this.providerController = new g.Z(this.getConfiguration()), this.setAutoStart(), this
                }
                getConfiguration() {
                    const t = this.clone(),
                        e = t.mediaModel.attributes;
                    return Object.keys(T.L4).forEach((i => {
                        t[i] = e[i]
                    })), t.instreamMode = Boolean(t.instream), delete t.instream, delete t.mediaModel, t
                }
                persistQualityLevel(t, e) {
                    const i = e[t] || {},
                        {
                            label: n
                        } = i,
                        s = (0, b.qh)(i.bitrate) ? i.bitrate : null;
                    this.set("bitrateSelection", s), this.set("qualityLabel", n)
                }
                setActiveItem(t) {
                    const e = this.get("playlist")[t];
                    this.resetItem(e), this.attributes.playlistItem = null, this.set("item", t), this.set("minDvrWindow", e.minDvrWindow), this.set("dvrSeekLimit", e.dvrSeekLimit || T.OG), this.set("playlistItem", e)
                }
                setMediaModel(t) {
                    this.mediaModel && this.mediaModel !== t && this.mediaModel.off(), t = t || new _, this.mediaModel = t,
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
                    if (!(0, b.qh)(t)) return;
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
                    (0, b.hj)(t) && (t = Math.max(Math.min(t, 4), .25), "LIVE" === this.get("streamType") && (t = 1), this.set("defaultPlaybackRate", t), null == this || null == (e = this._provider) || null == e.setPlaybackRate || e.setPlaybackRate(t))
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
                    e.chapters = (0, C._b)(t, e.chapters);
                    const i = t.filter((t => "chapters" !== t.cueType));
                    this.set("cues", i), this.set("playlistItem", e), this.trigger("change:chapters", this)
                }
                getCues() {
                    const t = this.get("playlistItem").chapters,
                        e = (0, C.$W)(t, this.mediaModel.get("duration"));
                    return (this.get("cues") || []).concat(e)
                }
                resetItem(t) {
                    const e = t ? (0, p.m9)(t.starttime) : 0,
                        i = t ? (0, p.m9)(t.duration) : 0,
                        n = this.mediaModel;
                    this.set("playRejected", !1), this.attributes.itemMeta = {}, n.set("position", e), n.set("currentTime", 0), n.set("duration", i)
                }
                persistBandwidthEstimate(t) {
                    (0, b.qh)(t) && this.set("bandwidthEstimate", t)
                }
                _normalizeConfig(t) {
                    const e = t.floating;
                    e && Boolean(e.disabled) && delete t.floating
                }
            }
            const E = M;
            class S extends w.ZP {
                constructor(t, e) {
                    super(), this.attached = !0, this.beforeComplete = !1, this.item = null, this.mediaModel = new _, this.model = e, this.provider = t, this.providerListener = y, this.thenPlayPromise = j((() => {})), t.off(), t.on("all", this.providerListener, this), this.eventQueue = new c.Z(this, ["trigger"], (() => !this.attached || this.background))
                }
                play(t) {
                    const {
                        item: e,
                        model: i,
                        mediaModel: n,
                        provider: s
                    } = this;
                    if (t || (t = i.get("playReason")), i.set("playRejected", !1), n.get("setup")) return s.play() || Promise.resolve();
                    n.set("setup", !0);
                    const o = this._loadAndPlay(e, s);
                    return n.get("started") ? o : this._playAttempt(o, t)
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
                        model: o,
                        provider: a
                    } = this, r = a ? a.video : null;
                    return this.trigger(s.cq, {
                        item: i,
                        playReason: e
                    }), (r ? r.paused : o.get(s.uc) !== s.r0) || o.set(s.uc, s.Kb), t.then((() => {
                        n.get("setup") && (n.set("started", !0), n === o.mediaModel && (t => {
                            const e = t.get("mediaState");
                            t.trigger("change:mediaState", t, e, e)
                        })(n))
                    })).catch((t => {
                        if (this.item && n === o.mediaModel) {
                            o.set("playRejected", !0);
                            if (null == r ? void 0 : r.paused) {
                                if (r.src === location.href) return this._loadAndPlay(i, a);
                                n.set("mediaState", s._5)
                            }
                            const l = Object.assign(new f.rG(null, (0, f.nm)(t), t), {
                                error: t,
                                item: i,
                                playReason: e
                            });
                            throw delete l.key, this.trigger(s.Je, l), t
                        }
                    }))
                }
                _playbackComplete() {
                    const {
                        item: t,
                        provider: e
                    } = this;
                    t && delete t.starttime, this.beforeComplete = !1, e.setState(s.xQ), this.trigger(s.Ms, {})
                }
                _loadAndPlay() {
                    const {
                        item: t,
                        provider: e
                    } = this, i = e.load(t);
                    if (i) {
                        const t = j((() => this.provider.play() || Promise.resolve()));
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
                    const e = this.mediaModel = new _,
                        i = t ? (0, p.m9)(t.starttime) : 0,
                        n = t ? (0, p.m9)(t.duration) : 0,
                        s = e.attributes;
                    e.srcReset(), s.position = i, s.duration = n, this.item = t, this.provider.init(t)
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
            var I = i(393);
            class A extends Error {
                constructor(t) {
                    super(t), this.code = f._M
                }
            }
            class L {
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
                        resolve: s,
                        reject: o,
                        promise: a
                    } = this, r = n.get("playlist"), l = this.getItem(i);
                    if (!l) {
                        const t = -1 === i ? "No recs item" : `No playlist item at index ${i}`;
                        this.rejected = !0, o(new Error(t))
                    }
                    if (e) {
                        this.clear();
                        const a = this.asyncPromise = e.call(t, l, i);
                        null != a && a.then ? a.then((t => {
                            if (t && t !== l && r === n.get("playlist")) {
                                const e = this.replace(t);
                                if (e) return void s(e)
                            }
                            s(l)
                        })).catch((t => {
                            const e = new A("Item skipped by playlist item callback");
                            e.sourceError = t, this.rejected = !0, o(e)
                        })) : this.asyncPromise = null
                    }
                    return this.asyncPromise || s(l), a
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
                    } = this, n = (0, h.YF)(i, new I.Z(t), t.feedData || {});
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
            const B = (t, e) => {
                    t.off().on("all", e.mediaControllerListener, e)
                },
                P = t => {
                    var e;
                    return null == t || null == (e = t.sources) ? void 0 : e[0]
                };
            class z extends w.ZP {
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
                    }(), this.mediaPool = e, this.mediaController = null, this.mediaControllerListener = v, this.model = t, this.providers = new g.Z(t.getConfiguration()), this.loadPromise = null, this.backgroundLoading = t.get("backgroundLoading"), this.asyncItems = [], this.itemSetContext = 0, this.backgroundLoading || t.set("mediaElement", this.mediaPool.getPrimedElement())
                }
                asyncActiveItem(t) {
                    const {
                        model: e
                    } = this, i = setTimeout((() => {
                        e.set(s.uc, s.Kb)
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
                    } = this, s = n.get("playlist")[t];
                    n.attributes.itemReady = !1, i && (i.mediaModel.off(), n.attributes.mediaModel = new _, n.mediaModel.attributes = i.mediaModel.clone()), e.isNext(s) || this._destroyBackgroundMedia();
                    const o = this.itemSetContext = Math.random();
                    return this.loadPromise = this.asyncActiveItem(t).then((s => {
                        if (null === s || o !== this.itemSetContext || null === this.providers) return null;
                        n.setActiveItem(t);
                        const a = P(s);
                        if (!a) return Promise.reject(new f.rG(f.ul, f.o2));
                        if (e.isNext(s)) return this._destroyActiveMedia(), this._activateBackgroundMedia();
                        if (i) {
                            if (n.get("castActive") || this._providerCanPlay(i.provider, a)) return i.activeItem = s, this._setActiveMedia(i), i;
                            this._destroyActiveMedia()
                        }
                        return this._setupMediaController(a).then((t => {
                            if (o === this.itemSetContext) return t.activeItem = s, this._setActiveMedia(t), t
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
                                s = n.get("position");
                            return s && (i.starttime = s), t
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
                        i.set(s.uc, s.Kb);
                        const e = j((e => {
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
                        s = n.starttime = i.mediaModel.get("currentTime");
                    this._destroyActiveMedia();
                    const o = new S(t, i);
                    o.activeItem = n, this._setActiveMedia(o), i.mediaModel.set("currentTime", s)
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
                    n.mediaState === s.bc ? n.mediaState = s._5 : n.mediaState !== s._5 && (n.mediaState = s.Kb), this._setActiveMedia(i), i.background = !1, t.currentMedia = null
                }
                backgroundLoad(t, e) {
                    const {
                        background: i
                    } = this, n = this.getAsyncItem(e).run().then((t => {
                        i.updateNext(t);
                        const e = P(t);
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
                    t && B(t, this)
                }
                routeEvents(t) {
                    const {
                        mediaController: e
                    } = this;
                    e && (e.off(), t && B(e, t))
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
                    })(e, t), this.mediaController = t, e.set("mediaElement", t.mediaElement), e.setMediaModel(i), e.setProvider(n), B(t, this), e.set("itemReady", !0)
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
                    } = this, n = t => new S(new t(e.get("id"), e.getConfiguration(), this.primedElement), e), {
                        provider: s,
                        name: o
                    } = i.choose(t);
                    return s ? Promise.resolve(n(s)) : i.load(o).then((t => n(t)))
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
                    return e || (e = this.asyncItems[t] = new L(t, this.model, this.apiContext), e.callback = this.model.get("playlistItemCallback")), e
                }
                clearItemPromises() {
                    this.asyncItems.forEach((t => {
                        t && t.reject(new Error("Item playback aborted"))
                    })), this.asyncItems.length = 0
                }
            }
            const R = z,
                O = t => t === s.xQ || t === s.Vy ? s.bc : t;

            function V(t, e, i) {
                if ((e = O(e)) !== (i = O(i))) {
                    const n = e.replace(/(?:ing|d)$/, ""),
                        o = ((t, e) => t === s.Kb ? e === s.nQ ? e : s.ik : e)(e, t.mediaModel.get("mediaState")),
                        a = {
                            type: n,
                            newstate: e,
                            oldstate: i,
                            reason: o
                        };
                    "play" === n ? a.playReason = t.get("playReason") : "pause" === n && (a.pauseReason = t.get("pauseReason")), this.trigger(n, a)
                }
            }
            var $ = i(4609);
            class F extends R {
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
                        this.mediaPool = (0, $.Z)(n, e)
                    }
                }
                setup() {
                    const {
                        model: t,
                        playerModel: e,
                        primedElement: i
                    } = this, n = e.attributes, o = e.mediaModel;
                    t.setup({
                        id: n.id,
                        volume: n.volume,
                        instreamMode: !0,
                        edition: n.edition,
                        mediaContext: o,
                        mute: n.mute,
                        streamType: "VOD",
                        autostartMuted: n.autostartMuted,
                        autostart: n.autostart,
                        advertising: n.advertising,
                        sdkplatform: n.sdkplatform,
                        skipButton: !1
                    }), t.on("change:state", V, this), t.on(s.pn, (function(t) {
                        this.trigger(s.pn, t)
                    }), this), i.paused || i.pause()
                }
                setActiveItem(t) {
                    return this.adPlaying = !0, this.stopVideo(), this.provider = null, super.setActiveItem(t).then((t => (this.trigger(s.$_), this._setProvider(t.provider), this.playVideo())))
                }
                usePsuedoProvider(t) {
                    t && (this._setProvider(t), t.off(s.pn), t.on(s.pn, (function(t) {
                        this.trigger(s.pn, t)
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
                        n && t === s.Ms || this.trigger(t, Object.assign({}, e, {
                            type: t
                        }))
                    }), this);
                    const o = e.mediaModel;
                    t.on(s.uc, (t => {
                        t.oldstate = t.oldstate || e.get(s.uc), o.set("mediaState", t.newstate)
                    })), t.on(s.h7, this._nativeFullscreenHandler, this), o.on("change:mediaState", ((t, e) => {
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
                    this.model.trigger(s.h7, t), this.trigger(s.UW, {
                        fullscreen: t.jwstate
                    })
                }
                _stateHandler(t) {
                    const {
                        model: e
                    } = this;
                    switch (t) {
                        case s.r0:
                        case s._5:
                            e.set(s.uc, t)
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
                Z = function(t, e, i, n) {
                    let o, a, r = new F(e, n),
                        l = 0,
                        c = {},
                        d = null,
                        h = {};
                    const w = () => {
                            l++, this.loadItem(o).catch((function() {}))
                        },
                        g = function(t) {
                            c = {}, o && l + 1 < o.length ? w() : (t.type === s.Ms && this.trigger(s.V$, {}), this.destroy())
                        },
                        m = function(t) {
                            const e = {};
                            h.tag && (e.tag = h.tag), this.trigger(s.Ms, e), g.call(this, t)
                        };
                    let j, f, b = g,
                        y = !1,
                        v = !1,
                        k = !1,
                        x = !1;
                    const T = t => {
                            v || ((t = t || {}).hasControls = Boolean(e.get("controls")), this.trigger(s.l5, t), r.model.get("state") === s._5 ? t.hasControls && r.playVideo().catch((function() {})) : r.pause())
                        },
                        C = () => {
                            v || r.model.get("state") === s._5 && e.get("controls") && (t.setFullscreen(), t.play())
                        },
                        _ = function(e) {
                            const {
                                duration: i,
                                position: n
                            } = e, s = r.model.mediaModel || r.model;
                            s.set("duration", i), s.set("position", n), f || (f = ((0, p.U5)(j, i) || i) - u.l_), !y && n >= Math.max(f, u.HB) && (t.preloadNextItem(), y = !0)
                        },
                        M = function(t, e) {
                            "complete" !== t && (e = e || {}, h.tag && !e.tag && (e.tag = h.tag), this.trigger(t, e), "mediaError" !== t && "error" !== t || this.loadNextItemOnError())
                        },
                        E = function() {
                            r.model.set("playRejected", !0)
                        },
                        S = function(n) {
                            n.width && n.height && i && i.resizeMedia(), e.get("pip") && t.requestPip(r.primedElement)
                        },
                        I = function(e) {
                            const {
                                newstate: i
                            } = e;
                            i === s.r0 ? t.trigger(s.WE, e) : i === s._5 && t.trigger(s.Ax, e)
                        },
                        A = function(t) {
                            const {
                                newstate: e
                            } = t, i = t.oldstate || r.model.get("state");
                            i !== e && I(Object.assign({
                                oldstate: i
                            }, c, t))
                        };
                    this.init = function() {
                        if (!k && !v) {
                            k = !0, c = {}, r.setup(), r.on("all", M, this), r.on(s.Je, E, this), r.on(s.R2, _, this), r.on(s.Ms, m, this), r.on(s.rx, S, this), r.on(s.uc, A, this), d = t.detachMedia(); {
                                const t = r.primedElement;
                                e.get("mediaContainer").appendChild(t)
                            }
                            if (e.set("instream", r), r.model.set("state", s.Kb), i) {
                                const t = i.clickHandler();
                                t && t.setAlternateClickHandlers((() => {}), null)
                            }
                            return this.setText(e.get("localization").loadingAd), x = t.isBeforeComplete() || e.get("state") === s.xQ, this
                        }
                    };
                    const L = n => {
                        if (!i) return;
                        const o = i.clickHandler();
                        o && o.setAlternateClickHandlers((i => {
                            v || ((i = i || {}).hasControls = Boolean(e.get("controls")), this.trigger(s.l5, i), n && (e.get("state") === s._5 ? t.playVideo() : (t.pause(), n && (t.trigger(s.Rt, {
                                clickThroughUrl: n
                            }), window.open(n)))))
                        }), null)
                    };
                    this.enableAdsMode = function(i) {
                        if (!k && !v) return t.routeEvents({
                            mediaControllerListener: (t, e) => {
                                this.trigger(t, e)
                            }
                        }), e.set("instream", r), r.model.set("state", s.r0), L(i), this
                    }, this.setEventData = function(t) {
                        c = t
                    }, this.setState = function(t) {
                        const {
                            newstate: e
                        } = t, i = r.model;
                        t.oldstate = i.get("state"), i.set("state", e), I(t)
                    }, this.setTime = function(e) {
                        _(e), t.trigger(s.uL, e)
                    }, this.loadNextItemOnError = function() {
                        o && l + 1 < o.length && w()
                    };
                    const B = function() {
                        !v && i && i.clickHandler() && i.clickHandler().setAlternateClickHandlers(T, C)
                    };
                    this.loadItem = (t, i) => {
                        if (v || !k) return Promise.reject(new Error("Instream not setup"));
                        c = {};
                        let n = t;
                        Array.isArray(t) ? (o = t, a = i || a, t = o[l], a && (i = a[l])) : n = [t];
                        const u = r.model;
                        u.set("playlist", n), e.set("hideAdsControls", !1), t.starttime = 0, this.trigger(s.gO, {
                            index: l,
                            item: t
                        }), h = Object.assign({}, H, i), B(), u.set("skipButton", !1);
                        const p = !e.get("backgroundLoading") && d ? d.then((() => r.setActiveItem(l))) : r.setActiveItem(l);
                        return y = !1, j = t.skipoffset || h.skipoffset, void 0 !== j && this.setupSkipButton(j, h), p
                    }, this.setupSkipButton = function(t, e, i) {
                        const n = r.model;
                        b = i || g, n.set("skipMessage", e.skipMessage), n.set("skipText", e.skipText), n.set("skipOffset", t), n.attributes.skipButton = !1, n.set("skipButton", !0)
                    }, this.applyProviderListeners = function(t) {
                        r.usePsuedoProvider(t), B()
                    }, this.play = function() {
                        c = {}, r.playVideo()
                    }, this.pause = function() {
                        c = {}, r && r.pause()
                    }, this.skipAd = function(t) {
                        const i = e.get("autoPause").pauseAds,
                            n = "autostart" === e.get("playReason"),
                            o = e.get("viewable");
                        !i || n || o || (this.noResume = !0);
                        const a = s.k3;
                        this.trigger(a, t), b.call(this, {
                            type: a
                        })
                    }, this.replacePlaylistItem = function(t) {
                        v || (e.set("playlistItem", t), r.srcReset())
                    }, this.destroy = () => {
                        v || (v = !0, this.trigger("destroyed"), this.off(), null != i && null != i.clickHandler && i.clickHandler() && i.clickHandler().revertAlternateClickHandlers(), e.off(null, null, r), r.off(null, null, this), r.destroy(), k && r.model && (e.attributes.state = s._5), t.forwardEvents(), e.set("instream", null), r = null, c = {}, d = null, k && !e.attributes._destroyed && (t.attachMedia(), e.get("pip") && t.requestPip(), this.noResume || (x ? t.stopVideo() : t.playVideo())))
                    }, this.getState = function() {
                        return !v && r.model.get("state")
                    }, this.setText = function(t) {
                        return v || !i || i.setAltText(t || ""), this
                    }, this.hide = function() {
                        v || e.set("hideAdsControls", !0)
                    }, this.getMediaElement = function() {
                        return v ? null : r.primedElement
                    }, this.setSkipOffset = function(t) {
                        j = t > 0 ? t : null, r && r.model.set("skipOffset", j)
                    }
                };
            Object.assign(Z.prototype, w.ZP);
            const N = Z;
            var D = i(6103),
                U = i(8377);
            class q {
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
                                e.includedInManifest || !this._kindSupported(e.kind) || this._tracksById[e._id] || (e.sideloaded = !0, this._addTrack(e), (0, D.xl)(e, (t => {
                                    this._addVTTCuesToTrack(e, t)
                                }), (t => {
                                    this.trigger(s.cM, t)
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
                        const s = t.indexOf(i);
                        return -1 === s ? -1 : n - s
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
                    const e = (0, U.M)(t, this._tracks.length);
                    if (!t.name) {
                        const e = (0, U._)(t, this._unknownCount);
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
            Object.assign(q.prototype, w.ZP);
            const W = q;
            var Q = i(4225);
            var X = i(4671);
            const Y = t => {
                    try {
                        return t.getBoundingClientRect()
                    } catch (t) {}
                },
                K = (t, e) => {
                    const i = Math.max(t.top, e.top),
                        n = Math.min(t.bottom, e.bottom),
                        s = Math.max(t.left, e.left),
                        o = Math.min(t.right, e.right),
                        a = o - s,
                        r = n - i;
                    return a >= 0 && r >= 0 && {
                        top: i,
                        bottom: n,
                        left: s,
                        right: o,
                        width: a,
                        height: r
                    }
                };

            function G(t, e) {
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
                    const s = Y(t);
                    if (!s) return 0;
                    let o = s,
                        a = t.parentNode,
                        r = !1;
                    for (; !r;) {
                        let t = null;
                        if (a === i || a === e || 1 !== a.nodeType ? (r = !0, t = n) : "visible" !== window.getComputedStyle(a).overflow && (t = Y(a)), t && (o = K(t, o), !o)) return 0;
                        a = a.parentNode
                    }
                    const l = s.width * s.height,
                        c = o.width * o.height;
                    return l ? c / l : 0
                })(e), window.top !== window.self && i) ? 0 : i
            }
            var J = i(6875),
                tt = i(1776),
                et = i(6436),
                it = i(8446),
                nt = i(4601),
                st = i(2799),
                ot = i(2268),
                at = i(974);
            const rt = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
            var lt = i(7010);
            let ct, dt = {};

            function ht(t, e, i) {
                const n = function(t, e, i) {
                        const n = t.requestFullscreen || t.webkitRequestFullscreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullscreen,
                            s = e.exitFullscreen || e.webkitExitFullscreen || e.webkitCancelFullScreen || e.mozCancelFullScreen || e.msExitFullscreen,
                            o = Boolean(n && s);
                        for (let t = rt.length; t--;) e.addEventListener(rt[t], i);
                        return {
                            events: rt,
                            supportsDomFullscreen: () => o,
                            requestFullscreen() {
                                n.call(t, {
                                    navigationUI: "hide"
                                })
                            },
                            exitFullscreen() {
                                null !== this.fullscreenElement() && s.apply(e)
                            },
                            fullscreenElement() {
                                const {
                                    fullscreenElement: t,
                                    webkitCurrentFullScreenElement: i,
                                    mozFullScreenElement: n,
                                    msFullscreenElement: s
                                } = e;
                                return null === t ? t : t || i || n || s
                            },
                            destroy() {
                                for (let t = rt.length; t--;) e.removeEventListener(rt[t], i)
                            }
                        }
                    }(t, e, i),
                    s = dt.requestFullscreen || n.requestFullscreen,
                    o = dt.exitFullscreen || n.exitFullscreen,
                    a = ct || (() => (0, lt.Z)() && !k.OS.iOS && !k.Browser.safari);
                return n.requestFullscreen = function() {
                    if (!a()) return s.call(n)
                }, n.exitFullscreen = function() {
                    if (!a()) return o.call(n)
                }, n
            }
            var ut = i(5882);
            class pt extends w.ZP {
                constructor(t, e) {
                    super(), this.revertAlternateClickHandlers(), this.domElement = e, this.model = t, this.ui = new ut.ZP(e).on("click", this.clickHandler, this).on("doubleClick", (function() {
                        this.alternateDoubleClickHandler ? this.alternateDoubleClickHandler() : this.trigger("doubleClick")
                    }), this)
                }
                destroy() {
                    this.ui && (this.ui.destroy(), this.ui = null, this.domElement = null, this.model = null, this.revertAlternateClickHandlers())
                }
                clickHandler(t) {
                    this.model && (this.alternateClickHandler ? this.alternateClickHandler(t) : this.trigger(s.ot))
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
            var wt = i(1831);
            var gt = i(5646);
            const mt = {
                linktarget: "_blank",
                margin: 8,
                hide: !1,
                position: "top-right"
            };

            function jt(t) {
                let e, i;
                Object.assign(this, w.ZP);
                const n = new Image;
                this.setup = function() {
                    var o, a;
                    (i = Object.assign({}, mt, t.get("logo")), i.position = i.position || mt.position, i.hide = "true" === i.hide.toString(), i.file && "control-bar" !== i.position) && (e || (e = (0, st.az)((o = i.position, a = i.hide, `<div class="jw-logo jw-logo-${o}${a?" jw-hide":""} jw-reset"></div>`))), t.set("logo", i), n.onload = function() {
                        let n = this.height,
                            s = this.width;
                        const o = {
                            backgroundImage: `url("${this.src}")`
                        };
                        if (i.margin !== mt.margin) {
                            const t = /(\w+)-(\w+)/.exec(i.position);
                            3 === t.length && (o[`margin-${t[1]}`] = i.margin, o[`margin-${t[2]}`] = i.margin)
                        }
                        const a = .15 * t.get("containerHeight"),
                            r = .15 * t.get("containerWidth");
                        if (n > a || s > r) {
                            const t = s / n;
                            r / a > t ? (n = a, s = a * t) : (s = r, n = r / t)
                        }
                        o.width = Math.round(s), o.height = Math.round(n), (0, at.oB)(e, o), t.set("logoWidth", o.width)
                    }, n.src = i.file, i.link && (e.setAttribute("tabindex", "0"), e.setAttribute("aria-label", t.get("localization").logo)), this.ui = (0, gt.Z)(e, (function() {
                        this.trigger(s.Ib, {
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
            const ft = class {
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
                    "string" == typeof t && t.length > 0 && (i = `url("${t}")`, e = this.image = new Image, e.src = t), this.hasZoomThumbnail ? (this.imageEl = document.createElement("div"), (0, at.oB)(this.imageEl, {
                        backgroundImage: i
                    }), this.el && this.el.appendChild(this.imageEl), this.enableZoomThumbnail()) : (0, at.oB)(this.el, {
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
                        const s = this.image;
                        let o = null;
                        if (s) {
                            if (0 === s.width) return void(s.onload = () => {
                                this.resize(t, e, i)
                            });
                            const n = s.width / s.height;
                            Math.abs(this.playerAspectRatio - n) < .09 && (o = "cover")
                        }(0, at.oB)(this.el, {
                            backgroundSize: o
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
            var bt = i(3296);
            const yt = function(t) {
                let e = new ft(t),
                    i = !t.get("autostart");
                const n = e.setImage.bind(e);
                return e = Object.assign(e, w.ZP), e.deferSetImage = (n, o, a) => {
                    t.once("change:playRejected change:autostart", (() => {
                        t.get("state") === s.bc && (i = !0, e.setImage(n, o, a))
                    }))
                }, e.setImage = (s, o, a) => {
                    if (t.get("isAudioFile") && (i = !0), !i) return e.deferSetImage(s, o, a);
                    if (n(s), o) {
                        new bt.Z("posterItem", e.el, a, t, (() => {
                            e.trigger("videoThumbnailFirstFrame", {
                                feedData: a.feedData,
                                target: a,
                                ui: "poster",
                                viewable: t.get("viewable")
                            })
                        })).init()
                    }
                }, e
            };
            var vt = i(5187);
            const kt = (t, e, i) => t - e - i,
                xt = (t, e, i, n, s) => Math.max(Math.min(t + e - i, n), s),
                Tt = (t, e) => (0, at.oB)(t, {
                    willChange: e
                });
            class Ct {
                constructor(t) {
                    this.container = t
                }
                disable() {
                    var t, e, i, n;
                    this.container && ((0, st.IV)(this.container, "jw-floating-dragged"), (0, st.IV)(this.container, "jw-floating-dragging"), Tt(this.container, "auto")), this.uiMedia = null == this || null == (t = this.uiMedia) || null == t.destroy ? void 0 : t.destroy(), this.uiBar = null == this || null == (e = this.uiBar) || null == e.destroy ? void 0 : e.destroy(), this.uiTitle = null == this || null == (i = this.uiTitle) || null == i.destroy ? void 0 : i.destroy(), this.uiIcon = null == this || null == (n = this.uiIcon) || null == n.destroy ? void 0 : n.destroy()
                }
                enable() {
                    this.inputMedia = this.container.querySelector(".jw-media"), this.inputBar = this.container.querySelector(".jw-float-bar"), this.inputTitle = this.container.querySelector(".jw-float-bar-title"), this.inputIcon = this.container.querySelector(".jw-float-bar-icon"), this.x = 0, this.y = 0, this.uiMedia = new ut.ZP(this.inputMedia, {
                        preventScrolling: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiBar = new ut.ZP(this.inputBar, {
                        preventScrolling: !0,
                        directSelect: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiTitle = new ut.ZP(this.inputTitle, {
                        preventScrolling: !0,
                        directSelect: !0
                    }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiIcon = new ut.ZP(this.inputIcon, {
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
                        innerHeight: s
                    } = window, o = this.container.querySelector(".jw-float-bar"), a = (null == o ? void 0 : o.offsetHeight) || 0, {
                        offsetLeft: r,
                        offsetTop: l,
                        offsetWidth: c,
                        offsetHeight: d
                    } = this.container;
                    this.startX = e, this.startY = i, this.minDeltaX = -r, this.minDeltaY = -l, this.maxDeltaX = kt(n, r, c), this.maxDeltaY = kt(s, l, d + a), (0, st.cn)(this.container, "jw-floating-dragged"), (0, st.cn)(this.container, "jw-floating-dragging"), Tt(this.container, "transform")
                }
                drag(t) {
                    const {
                        pageX: e,
                        pageY: i
                    } = t;
                    this.deltaX = xt(this.x, e, this.startX, this.maxDeltaX, this.minDeltaX), this.deltaY = xt(this.y, i, this.startY, this.maxDeltaY, this.minDeltaY), (0, at.vs)(this.container, `translate(${this.deltaX}px, ${this.deltaY}px)`)
                }
                dragEnd() {
                    (0, st.IV)(this.container, "jw-floating-dragging"), Tt(this.container, "auto"), this.x = this.deltaX, this.y = this.deltaY
                }
            }
            const _t = function(t, e, i, n) {
                    const s = {
                        width: e
                    };
                    if (n && void 0 !== i && t.set("aspectratio", null), !t.get("aspectratio")) {
                        let t = i;
                        (0, b.hj)(t) && 0 !== t && (t = Math.max(t, 44)), s.height = t
                    }
                    return s
                },
                Mt = [],
                Et = t => {
                    const e = Mt.indexOf(t); - 1 !== e && Mt.splice(e, 1)
                };
            let St = null;
            const It = {
                floatingPlayer: St
            };
            Object.defineProperty(It, "floatingPlayer", {
                get: () => St,
                set: t => {
                    if (t === St) return;
                    St = t;
                    const e = Mt.slice();
                    Mt.length = 0, e.forEach((t => {
                        t.startFloating()
                    }))
                }
            });
            class At {
                constructor(t, e, i, n = k.OS.mobile) {
                    this._playerEl = i.player, this._wrapperEl = i.wrapper, this._preview = i.preview, this._model = t, this._floatingUI = new Ct(this._wrapperEl), this._floatingStoppedForever = !1, this._lastIntRatio = 0, this._playerBounds = e, this._isMobile = n, this._mobileCheckCanFire = !0, this._inTransition = !1, this._boundThrottledMobileFloatScrollHandler = this.throttledMobileFloatScrollHandler.bind(this), this._boundInitFloatingBehavior = this.initFloatingBehavior.bind(this)
                }
                setup() {
                    this._model.change("floating", this._boundInitFloatingBehavior)
                }
                initFloatingBehavior() {
                    if (!this._floatingStoppedForever && (X.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler), Et(this), this.getFloatingConfig())) {
                        const t = this.getFloatMode();
                        "notVisible" === t ? this._isMobile ? (X.Z.addScrollHandler(this._boundThrottledMobileFloatScrollHandler), this._boundThrottledMobileFloatScrollHandler()) : this.checkFloatIntersection() : "always" === t ? this.startFloating() : "never" === t && this.stopFloating()
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
                    return this._isMobile && !(0, st.UM)() && !this._model.get("fullscreen")
                }
                shouldFloatOnViewable() {
                    const t = this._model.get("state");
                    return t !== s.bc && t !== s.Vy && t !== s.xQ
                }
                startFloating(t) {
                    const e = this._playerBounds;
                    if (null !== this.getFloatingPlayer() || !this._wrapperEl.querySelector(".jw-float-bar") && this._model.get("controlsEnabled")) this.getFloatingPlayer() !== this._playerEl && "always" === this.getFloatMode() && (i = this, -1 === Mt.indexOf(i) && Mt.push(i));
                    else {
                        this.setFloatingPlayer(this._playerEl), this.transitionFloating(!0), this._model.set("isFloating", !0), (0, st.cn)(this._playerEl, "jw-flag-floating"), t ? ((0, at.oB)(this._wrapperEl, {
                            transform: `translateY(-${62-e.top}px)`
                        }), window.setTimeout((() => {
                            (0, at.oB)(this._wrapperEl, {
                                transform: "translateY(0)",
                                transition: "transform 150ms cubic-bezier(0, 0.25, 0.25, 1)"
                            })
                        }))) : (0, at.oB)(this._wrapperEl, {
                            transform: "translate(0)"
                        }), window.setTimeout((() => {
                            this.transitionFloating(!1)
                        }), 50);
                        const i = this._preview.el;
                        (0, at.oB)(this._playerEl, {
                            backgroundImage: i.style.backgroundImage
                        }), this.updateFloatingSize(), this._model.get("instreamMode") || this._floatingUI.enable()
                    }
                    var i
                }
                stopFloating(t, e) {
                    if (t && (this._floatingStoppedForever = !0, X.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler)), this.getFloatingPlayer() !== this._playerEl) return;
                    this.transitionFloating(!0), this.setFloatingPlayer(null), this._model.set("isFloating", !1);
                    const i = this._playerBounds,
                        n = () => {
                            (0, st.IV)(this._playerEl, "jw-flag-floating"), this._model.trigger("forceAspectRatioChange", {}), (0, at.oB)(this._playerEl, {
                                backgroundImage: null
                            }), (0, at.oB)(this._wrapperEl, {
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
                    e ? ((0, at.oB)(this._wrapperEl, {
                        transform: `translateY(-${62-i.top}px)`,
                        "transition-timing-function": "ease-out"
                    }), window.setTimeout(n, 150)) : n(), this.disableFloatingUI()
                }
                transitionFloating(t) {
                    this._inTransition = t;
                    const e = this._wrapperEl;
                    (0, at.oB)(e, {
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
                        n = _t(this._model, e);
                    if (n.maxWidth = Math.min(400, t.width), !this._model.get("aspectratio")) {
                        const n = t.width;
                        let s = t.height / n || .5625;
                        (0, b.hj)(e) && (0, b.hj)(i) && (s = i / e), this._model.trigger("forceAspectRatioChange", {
                            ratio: 100 * s + "%"
                        })
                    }(0, at.oB)(this._wrapperEl, n)
                }
                enableFloatingUI() {
                    this._floatingUI.enable()
                }
                disableFloatingUI() {
                    this._floatingUI.disable()
                }
                setFloatingPlayer(t) {
                    It.floatingPlayer = t
                }
                getFloatingPlayer() {
                    return It.floatingPlayer
                }
                destroy() {
                    this.getFloatingPlayer() === this._playerEl && this.setFloatingPlayer(null), this.getFloatingConfig() && this._isMobile && X.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler), this._floatingUI.disable(), Et(this), this._model.off("change:floating", this._boundInitFloatingBehavior)
                }
                updateFloating(t, e) {
                    t < .5 && !(0, ot.cL)() && this.shouldFloatOnViewable() ? this.startFloating(e) : this.stopFloating(!1, e)
                }
                checkFloatOnScroll() {
                    if ("notVisible" !== this.getFloatMode()) return;
                    const t = this._model.get("isFloating"),
                        e = this._playerBounds,
                        i = e.top < 62,
                        n = window.scrollY || window.pageYOffset,
                        s = i ? e.top <= n : e.top <= n + 62;
                    !t && s ? this.updateFloating(0, i) : t && !s && this.updateFloating(1, i)
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
            var Lt = i(9926);
            let Bt;
            i(5430);
            const Pt = k.OS.mobile,
                zt = k.Browser.ie,
                Rt = function(t, e) {
                    const i = Object.assign(this, w.ZP, {
                            isSetup: !1,
                            api: t,
                            model: e
                        }),
                        n = e.get("localization"),
                        o = (0, st.az)((a = e.get("id"), r = n.player, `<div id="${a}" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="${r||""}" role="application"><div class="jw-aspect jw-reset"></div><div class="jw-wrapper jw-reset"><div class="jw-top jw-reset"></div><div class="jw-aspect jw-reset"></div><div class="jw-media jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jw-reset-text" dir="auto"><div class="jw-title-primary jw-reset-text"></div><div class="jw-title-secondary jw-reset-text"></div></div><div class="jw-overlays jw-reset"></div><div class="jw-hidden-accessibility"><span class="jw-time-update" aria-live="assertive"></span><span class="jw-volume-update" aria-live="assertive"></span></div></div></div>`));
                    var a, r;
                    const l = o.querySelector(".jw-wrapper"),
                        c = o.querySelector(".jw-media"),
                        d = new yt(e, t),
                        h = new vt.Z(e),
                        u = new wt.Z(e);
                    let p, g, m, j;
                    u.on("all", i.trigger, i);
                    let f = -1,
                        y = -1,
                        v = -1;
                    const x = e.get("floating");
                    this.dismissible = null == x ? void 0 : x.dismissible;
                    let T = {};
                    const C = new At(e, T, {
                        player: o,
                        wrapper: l,
                        preview: d
                    });
                    let _, M, E, S = null,
                        I = null,
                        A = !1,
                        L = null;
                    const B = () => e.get("isFloating") ? l : o,
                        P = () => {
                            i.isSetup && !C.isInTransition() && (i.updateBounds(), i.updateStyles(), i.checkResized())
                        },
                        z = () => {
                            (0, tt.W)(y), y = (0, tt.U)(P)
                        };
                    this.responsiveListener = z;
                    const R = (t, i) => {
                            if ((0, b.hj)(t) && (0, b.hj)(i)) {
                                const e = (0, et.i)(t);
                                (0, et.d)(o, e);
                                const n = e < 2;
                                (0, st.og)(o, "jw-flag-small-player", n), (0, st.og)(o, "jw-orientation-portrait", i > t)
                            }
                            if (e.get("controls")) {
                                const t = function(t) {
                                    const e = t.get("height");
                                    if (t.get("aspectratio")) return !1;
                                    if ("string" == typeof e && e.indexOf("%") > -1) return !1;
                                    let i = Number(e) || NaN;
                                    return i = isNaN(i) ? t.get("containerHeight") : i, !!i && Boolean(i && i <= 44)
                                }(e);
                                (0, st.og)(o, "jw-flag-audio-player", t), e.set("audioMode", t)
                            }
                        },
                        O = (t, i) => {
                            if ((!t || isNaN(Number(t))) && !(t = e.get("containerWidth"))) return;
                            if ((!i || isNaN(Number(i))) && !(i = e.get("containerHeight"))) return;
                            d && d.resize(t, i, e.get("stretching"));
                            const n = e.getVideo();
                            n && n.resize(t, i, e.get("stretching"))
                        },
                        V = () => {
                            e.get("pip") || e.set("visibility", G(e, o))
                        },
                        $ = i => {
                            i.link ? (t.pause({
                                reason: "interaction"
                            }), t.setFullscreen(!1), (0, st.nG)(i.link, i.linktarget, {
                                rel: "noreferrer"
                            })) : e.get("controls") && t.playToggle({
                                reason: "interaction"
                            })
                        },
                        F = t => {
                            I && I.mouseMove(t)
                        },
                        H = t => {
                            I && !I.showing && "IFRAME" === t.target.nodeName && I.userActive()
                        },
                        Z = t => {
                            var e;
                            null != (e = I) && e.showing && (t.relatedTarget && !o.contains(t.relatedTarget) || !t.relatedTarget && k.Features.iframe) && I.userActive()
                        },
                        N = (t, e, n) => {
                            const a = new pt(e, n),
                                r = e.get("controls");
                            return a.on({
                                click: () => {
                                    if (i.trigger(s.cy), B().focus(), I) {
                                        if (k.OS.mobile) {
                                            const n = e.get("state");
                                            if (r && (n === s.bc || n === s.xQ || e.get("instream") && n === s._5) && t.playToggle({
                                                reason: "interaction"
                                            }), r && n === s._5) {
                                                if (e.get("instream") || e.get("castActive") || "audio" === e.get("mediaType")) return;
                                                (0, st.og)(o, "jw-flag-controls-hidden"), i.dismissible && (0, st.og)(o, "jw-floating-dismissible", (0, st.pv)(o, "jw-flag-controls-hidden")), u.renderCues(!0)
                                            } else I.showing ? I.userInactive() : I.userActive();
                                            return
                                        }(() => {
                                            var t;
                                            const e = null == (t = I) ? void 0 : t.settingsMenu;
                                            return Boolean(null == e ? void 0 : e.visible)
                                        })() ? I.settingsMenu.close(): e.get("displayStats") ? e.set("displayStats", !1) : t.playToggle({
                                            reason: "interaction"
                                        })
                                    }
                                },
                                doubleClick: () => I && t.setFullscreen()
                            }), Pt || (o.addEventListener("mousemove", F), o.addEventListener("mouseover", H), o.addEventListener("mouseout", Z)), a
                        },
                        D = t => {
                            const i = e.get("fullscreen"),
                                n = void 0 !== t.jwstate ? t.jwstate : (() => {
                                    if (M.supportsDomFullscreen()) {
                                        const t = M.fullscreenElement();
                                        return Boolean(t && t === o)
                                    }
                                    return e.getVideo().getFullScreen()
                                })();
                            i !== n && e.set("fullscreen", n), k.OS.android && n && screen.orientation.lock("landscape"), z(), clearTimeout(f), f = setTimeout(O, 200)
                        },
                        U = t => {
                            k.OS.mobile && ((0, st.og)(o, "jw-flag-ios-fullscreen", t.jwstate), D(t))
                        },
                        q = (t, e) => {
                            if (!e) return void h.playlistItem(t, t.get("playlistItem"));
                            const i = (0, Q.Z)(t, e);
                            Q.Z.cloneIcon && i.querySelector(".jw-icon").appendChild(Q.Z.cloneIcon("error")), h.hide(), o.appendChild(i.firstChild), (0, st.og)(o, "jw-flag-audio-player", Boolean(t.get("audioMode")))
                        },
                        W = t => {
                            switch (e.get("controls") && t !== s._5 && (0, st.pv)(o, "jw-flag-controls-hidden") && ((0, st.IV)(o, "jw-flag-controls-hidden"), (0, st.og)(o, "jw-floating-dismissible", i.dismissible)), (0, st.L_)(o, /jw-state-\S+/, `jw-state-${t}`), t) {
                                case s.Vy:
                                    i.stopFloating();
                                case s.bc:
                                case s.xQ:
                                    u && u.hide(), d && d.enableZoomThumbnail();
                                    break;
                                default:
                                    u && (u.show(), t === s._5 && I && !I.showing && u.renderCues(!0)), d && d.removeZoomThumbnail()
                            }
                        },
                        Y = (t, e, n) => {
                            if (i.isSetup) {
                                if (n === s.Vy) {
                                    const t = o.querySelector(".jw-error-msg");
                                    t && t.parentNode.removeChild(t)
                                }(0, tt.W)(v), e === s.r0 ? W(e) : v = (0, tt.U)((() => W(e)))
                            }
                        },
                        K = (t, e) => {
                            (0, st.L_)(o, /jw-stretch-\S+/, `jw-stretch-${e}`)
                        },
                        rt = (t, e) => {
                            (0, st.og)(o, "jw-flag-aspect-mode", Boolean(e));
                            const n = o.querySelectorAll(".jw-aspect");
                            (0, at.oB)(n, {
                                paddingTop: e || null
                            }), i.isSetup && e && !t.get("isFloating") && (0, at.oB)(o, _t(t, t.get("width")))
                        },
                        lt = (t, e) => {
                            (0, st.og)(t, "jw-flag-fullscreen", e), (0, at.oB)(document.body, {
                                overflowY: e ? "hidden" : ""
                            }), e && I && I.userActive(), O(), z()
                        },
                        ct = function(e, i) {
                            if (i && I && e.get("autostartMuted") && I.unmuteAutoplay(t, e), M.supportsDomFullscreen()) i ? M.requestFullscreen() : M.exitFullscreen(), lt(o, i);
                            else if (zt) lt(o, i);
                            else {
                                const t = e.get("instream"),
                                    n = t ? t.provider : null,
                                    s = e.getVideo() || n;
                                null != s && s.setFullscreen && s.setFullscreen(i)
                            }
                        },
                        dt = function(t, e) {
                            e ? i.requestPip() : document.pictureInPictureElement && document.exitPictureInPicture()
                        },
                        gt = () => {
                            if (L) {
                                const {
                                    video: t,
                                    enter: e,
                                    leave: i
                                } = L;
                                t.removeEventListener("loadedmetadata", e), t.removeEventListener("leavepictureinpicture", i)
                            }
                        },
                        mt = () => {
                            const t = new Bt(document, i.element());
                            i.addControls(t)
                        },
                        ft = (t, e) => {
                            const n = {
                                controls: e
                            };
                            e ? (Bt = nt.v.controls, Bt ? mt() : (n.loadPromise = (0, nt.z)().then((function(e) {
                                Bt = e;
                                const i = t.get("controls");
                                return i && mt(), i
                            })), n.loadPromise.catch((function(t) {
                                i.trigger(s.cM, t)
                            })))) : i.removeControls(), g && m && i.trigger(s.Hy, n)
                        },
                        bt = (t, e, n) => {
                            e && !n && (Y(0, t.get("state")), i.updateStyles())
                        },
                        kt = (t, e) => {
                            const i = "LIVE" === e;
                            (0, st.og)(o, "jw-flag-live", i)
                        },
                        xt = (t, e) => {
                            const i = "audio" === e,
                                n = t.get("isAudioFile"),
                                s = t.get("playlistItem");
                            n !== i && (t.set("isAudioFile", i), d.setImage(null == s ? void 0 : s.image)), (0, st.og)(o, "jw-flag-media-audio", i), i && t.get("pip") && t.set("pip", !1);
                            const a = i ? c : c.nextSibling;
                            d.el.parentNode.insertBefore(d.el, a)
                        },
                        Tt = (t, e) => {
                            this.setPosterImage(e, d), Pt && ((t, e) => {
                                const i = t.get("mediaElement");
                                if (!i) return;
                                const n = (0, st.bJ)(e.title || "");
                                i.setAttribute("title", n.textContent)
                            })(t, e)
                        };
                    this.updateBounds = function() {
                        (0, tt.W)(y);
                        const t = B(),
                            i = document.body.contains(t),
                            n = (0, st.A8)(t),
                            s = Math.round(n.width),
                            a = Math.round(n.height);
                        if (T = (0, st.A8)(o), C.updatePlayerBounds(T), s === g && a === m) return g && m || z(), void e.set("inDom", i);
                        s && a || g && m || z(), (s || a || i) && (e.set("containerWidth", s), e.set("containerHeight", a)), e.set("inDom", i), i && X.Z.observe(o)
                    }, this.updateStyles = function() {
                        const t = e.get("containerWidth"),
                            i = e.get("containerHeight");
                        R(t, i), I && I.resize(t, i), O(t, i), u.resize(), C.updateStyles()
                    }, this.checkResized = function() {
                        const t = e.get("containerWidth"),
                            n = e.get("containerHeight"),
                            o = e.get("isFloating");
                        if (t !== g || n !== m) {
                            this.resizeListener || (this.resizeListener = new Lt.Z(l, this, e)), g = t, m = n, i.trigger(s.sF, {
                                width: t,
                                height: n
                            });
                            const o = (0, et.i)(t);
                            S !== o && (S = o, i.trigger(s.Bs, {
                                breakpoint: S
                            }))
                        }
                        o !== j && (j = o, i.trigger(s.RF, {
                            floating: o
                        }), V())
                    }, this.setup = function() {
                        d.setup(o.querySelector(".jw-preview")), h.setup(o.querySelector(".jw-title")), p = new jt(e), p.setup(), p.setContainer(l), p.on(s.Ib, $), u.setup(o.id, e.get("captions")), h.element().parentNode.insertBefore(u.element(), h.element()), _ = N(t, e, c), E = new ut.ZP(o).on("click", (function() {})), M = ht(o, document, D), e.on("change:hideAdsControls", (function(t, e) {
                            (0, st.og)(o, "jw-flag-ads-hide-controls", e)
                        })), e.on("change:scrubbing", (function(t, e) {
                            (0, st.og)(o, "jw-flag-dragging", e)
                        })), e.on("change:playRejected", (function(t, e) {
                            (0, st.og)(o, "jw-flag-play-rejected", e)
                        })), e.on(s.h7, U), e.on(`change:${s.ug}`, (() => {
                            O(), u.resize()
                        }));
                        e.player.on("change:errorEvent", q), e.change("stretching", K);
                        const i = e.get("width"),
                            n = e.get("height"),
                            a = _t(e, i, n);
                        (0, at.oB)(o, a), e.change("aspectratio", rt), R(i, n), e.get("controls") || ((0, st.cn)(o, "jw-flag-controls-hidden"), (0, st.IV)(o, "jw-floating-dismissible")), zt && (0, st.cn)(o, "jw-ie");
                        const r = e.get("skin") || {};
                        r.name && (0, st.L_)(o, /jw-skin-\S+/, `jw-skin-${r.name}`);
                        const w = (0, it.xq)(r);
                        (0, it.Sf)(e.get("id"), w), e.set("mediaContainer", c), e.set("iFrame", k.Features.iframe), e.set("activeTab", (0, J.Z)()), e.set("touchMode", Pt && ("string" == typeof n || n >= 44)), X.Z.add(this), e.get("enableGradient") && !zt && (0, st.cn)(o, "jw-ab-drop-shadow"), this.isSetup = !0, e.trigger("viewSetup", o);
                        const g = document.body.contains(o);
                        g && X.Z.observe(o), e.set("inDom", g), e.on("forceAspectRatioChange", (t => {
                            const i = t.ratio || e.get("aspectratio");
                            rt(e, i)
                        })), e.on("forceResponsiveListener", z), C.setup()
                    }, this.init = function() {
                        this.updateBounds(), e.on("change:fullscreen", ct), e.on("change:pip", dt), e.on("change:activeTab", V), e.on("change:fullscreen", V), e.on("change:intersectionRatio", V), e.on("change:visibility", bt), e.on("instreamMode", (t => {
                            t ? ((0, st.cn)(o, "jw-flag-ads"), I && I.setupInstream(), C.disableFloatingUI()) : function() {
                                if (!_) return;
                                I && I.destroyInstream(e), C.getFloatingPlayer() !== o || (0, ot.cL)() || C.enableFloatingUI(), i.setAltText(""), (0, st.IV)(o, ["jw-flag-ads", "jw-flag-ads-hide-controls"]), e.set("hideAdsControls", !1);
                                const t = e.getVideo();
                                t && t.setContainer(c), _.revertAlternateClickHandlers()
                            }()
                        })), V(), 1 !== X.Z.size() || e.get("visibility") || bt(e, 1, 0);
                        const t = e.player;
                        e.change("state", Y), t.change("controls", ft), e.change("streamType", kt), e.change("mediaType", xt), t.change("playlistItem", ((t, e) => {
                            Tt(t, e)
                        })), g = m = null, this.initFloatingBehavior(), this.checkResized()
                    }, this.initFloatingBehavior = function() {
                        C.initFloatingBehavior()
                    }, this.addControls = function(n) {
                        I = n, (0, st.IV)(o, "jw-flag-controls-hidden"), (0, st.og)(o, "jw-floating-dismissible", this.dismissible), n.enable(t, e), m && (R(g, m), n.resize(g, m), u.renderCues(!0)), n.on("userActive userInactive", (function() {
                            const t = e.get("state");
                            t !== s.r0 && t !== s.Kb || u.renderCues(!0)
                        })), n.on("dismissFloating", (() => {
                            this.stopFloating(!0), e.get("autoPause") && !e.get("autoPause").pauseAds && Boolean(e.get("instream")) || t.pause({
                                reason: "interaction"
                            })
                        })), n.on("all", i.trigger, i), e.get("instream") && I.setupInstream()
                    }, this.removeControls = function() {
                        I && (I.disable(e), I = null), (0, st.cn)(o, "jw-flag-controls-hidden"), (0, st.IV)(o, "jw-floating-dismissible")
                    }, this.resize = function(t, i) {
                        const n = _t(e, t, i, !0);
                        void 0 !== t && void 0 !== i && (e.set("width", t), e.set("height", i)), (0, at.oB)(o, n), C.resize(), P()
                    }, this.resizeMedia = O, this.setPosterImage = function(t, e) {
                        e.setImage(null == t ? void 0 : t.image)
                    }, this.requestPip = function(t) {
                        const n = t || e.get("mediaElement");
                        if (n.requestPictureInPicture) {
                            const t = () => {
                                n.removeEventListener("leavepictureinpicture", t), A && (A = !1, i.trigger("pipLeave", {
                                    video: n
                                }), e.set("pip", !1), document.pictureInPictureElement && document.exitPictureInPicture())
                            };
                            gt();
                            const s = () => {
                                gt(), n.requestPictureInPicture().then((() => {
                                    A || (A = !0, i.trigger("pipEnter", {
                                        video: n
                                    })), n.addEventListener("leavepictureinpicture", t)
                                })), n.removeEventListener("loadedmetadata", s)
                            };
                            n.readyState ? s() : n.addEventListener("loadedmetadata", s), L = {
                                video: n,
                                enter: s,
                                leave: t
                            }
                        }
                    }, this.setAltText = function(t) {
                        e.set("altText", t)
                    }, this.clickHandler = function() {
                        return _
                    }, this.getContainer = this.element = function() {
                        return o
                    }, this.getWrapper = function() {
                        return l
                    }, this.controlsContainer = function() {
                        return I ? I.element() : null
                    }, this.getSafeRegion = function(t = !0) {
                        const e = {
                            x: 0,
                            y: 0,
                            width: g || 0,
                            height: m || 0
                        };
                        return I && t && (e.height -= I.controlbarHeight()), e
                    }, this.setCaptions = function(t) {
                        u.clear(), u.setup(e.get("id"), t), u.resize()
                    }, this.setIntersection = function(t) {
                        const i = Math.round(100 * t.intersectionRatio) / 100;
                        e.set("intersectionRatio", i), this.checkFloatIntersection(i)
                    }, this.checkFloatIntersection = function(t) {
                        C.checkFloatIntersection(t)
                    }, this.stopFloating = function(t, e) {
                        C.stopFloating(t, e)
                    }, this.destroy = function() {
                        e.destroy(), d.destroy(), X.Z.unobserve(o), X.Z.remove(this), this.isSetup = !1, this.off(), (0, tt.W)(y), clearTimeout(f), E && (E.destroy(), E = null), M && (M.destroy(), M = null), I && I.disable(e), _ && (_.destroy(), o.removeEventListener("mousemove", F), o.removeEventListener("mouseout", Z), o.removeEventListener("mouseover", H), _ = null), u.destroy(), p && (p.destroy(), p = null), (0, at.oI)(e.get("id")), this.resizeListener && (this.resizeListener.destroy(), delete this.resizeListener), C.destroy()
                    }
                };
            let Ot = !1;
            const Vt = window.$sf,
                $t = function(t, e) {
                    this.playerElement = t, this.wrapperElement = e
                };
            Object.assign($t.prototype, {
                setup(t) {
                    const e = (0, st.az)((t => `<span class="jw-text jw-reset">${t}</span>`)(t));
                    this.wrapperElement.appendChild(e), (0, st.cn)(this.playerElement, "jw-flag-top")
                }
            });
            const Ft = $t;
            var Ht = i(8675),
                Zt = i.n(Ht),
                Nt = i(8168),
                Dt = i(2977);
            let Ut;
            const qt = function(t, e, n) {
                    const o = "free" === e.get("edition");
                    let a, r;
                    o && !Ut && (i(678), Ut = !0, null != n && n.cssInjected && n.cssInjected()), null != n && n.View ? (a = n.View, r = a(t, e)) : (a = Rt, r = new a(t, e));
                    const l = r.setup;
                    if (r.setPosterImage = (i, n) => {
                        const s = (0, Dt.Cz)(i.images);
                        let o = null == i ? void 0 : i.image;
                        const a = r.model.get("containerWidth");
                        a && (o = (0, Dt.Bf)(i, (0, Dt.IJ)(a))), s ? (k.OS.mobile || s.reverse(), i.videoThumbnail = s[0].src, n.on("videoThumbnailFirstFrame", (e => {
                            t.trigger("videoThumbFirstFrame", e)
                        })), n.setImage(o, !0, i, e)) : n.setImage(o)
                    }, r.setup = function() {
                        if (l.call(this), e.get("displayHeading")) {
                            new Ft(r.getContainer(), r.getContainer().querySelector(".jw-top")).setup(e.get("localization").advertising.displayHeading)
                        }
                        e.change("castAvailable", ((t, e) => {
                            const i = t.get("cast");
                            Object(i) === i && (0, st.og)(this.getContainer(), "jw-flag-cast-available", e)
                        }), this), e.change("castActive", ((t, e) => {
                            const i = t.get("airplayActive"),
                                n = this.getContainer();
                            (0, st.og)(n, "jw-flag-casting", e || !1), (0, st.og)(n, "jw-flag-airplay-casting", i || !1)
                        }), this)
                    }, o) {
                        const t = r.addControls;
                        r.addControls = function(e) {
                            t.call(this, e);
                            const i = document.querySelector(".jw-logo-button");
                            if (i) {
                                const t = (0, Nt.w)(Zt());
                                i.appendChild(t)
                            }
                        }
                    }
                    const c = e.get("advertising");
                    return null != c && c.outstream && function(t, e) {
                        Ot || (Ot = !0, i(8206));
                        const n = e.model,
                            o = e.getSafeRegion;
                        e.getSafeRegion = function(t) {
                            const e = o.call(this, t);
                            return e.height = this.api.getHeight(), e
                        }, n.on("change:mediaState", ((i, a) => {
                            if (a === s.ik || a === s.r0) {
                                var r, l;
                                if (n.off("change:mediaState", null, e), null != Vt && null != (r = Vt.ext) && null != r.supports && null != (l = r.supports()) && l["exp-push"]) {
                                    const {
                                        exp: e,
                                        self: i
                                    } = Vt.ext.geom(), n = Math.min(t.getHeight() - i.h, e.yx ? 1 / 0 : e.b), s = Math.min(t.getWidth() - i.w, e.xs ? 1 / 0 : e.r);
                                    (n > 0 || s > 0) && Vt.ext.expand({
                                        b: Math.max(0, n),
                                        r: Math.max(0, s),
                                        push: !0
                                    })
                                }(0, st.IV)(e.getContainer(), "jw-flag-outstream-pending"), e.getSafeRegion = o, e.responsiveListener()
                            }
                        }), e);
                        const a = e.setup;
                        e.setup = function() {
                            a.call(this), (0, st.cn)(this.getContainer(), "jw-flag-outstream jw-flag-outstream-pending")
                        };
                        const r = n.get("advertising");
                        r.dismissible && (e.dismissible = !0, e.on("dismissFloating", (() => {
                            t.remove()
                        }))), null != Vt && Vt.ext && t.once(s.Rc, (function() {
                            Vt.ext.register(t.getWidth(), t.getHeight())
                        })), t.once(s.V$, (() => {
                            e.stopFloating(!0), "close" === r.endstate && ((0, st.cn)(e.getContainer(), "jw-flag-outstream-close"), null != Vt && Vt.ext && Vt.ext.collapse())
                        }))
                    }(t, r), r
                },
                Wt = /^change:(.+)$/,
                Qt = function(t, e, i) {
                    Object.keys(e).forEach((n => {
                        n in e && e[n] !== i[n] && t.trigger(`change:${n}`, t, e[n], i[n])
                    }))
                },
                Xt = function(t, e) {
                    t && t.off(null, null, e)
                };
            class Yt extends x.Z {
                constructor(t, e) {
                    super(), this._model = t, this._mediaModel = null, Object.assign(t.attributes, {
                        altText: "",
                        fullscreen: !1,
                        logoWidth: 0,
                        scrubbing: !1
                    }), t.on("all", ((i, n, s, o) => {
                        n === t && (n = this), e && !e(i, n, s, o) || this.trigger(i, n, s, o)
                    }), this), t.on("change:mediaModel", ((t, e) => {
                        this.mediaModel = e
                    }), this)
                }
                set mediaModel(t) {
                    const e = this._mediaModel;
                    Xt(e, this), this._mediaModel = t, t.on("all", ((e, i, n, s) => {
                        i === t && (i = this), this.trigger(e, i, n, s)
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
                    Xt(this._model, this), Xt(this._mediaModel, this), this.off()
                }
            }
            class Kt extends Yt {
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
                    })), this._instreamModel = null, this._playerViewModel = new Yt(this._model), t.on("change:instream", ((t, e) => {
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
                        if (Xt(e, this), this._model.off("change:mediaModel", null, this), this._instreamModel = t, this.trigger("instreamMode", Boolean(t)), t) t.on("all", ((e, i, n, s) => {
                            i === t && (i = this), this.trigger(e, i, n, s)
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
                    super.destroy(), Xt(this._instreamModel, this)
                }
            }
            var Gt = i(5099);
            const Jt = null != (te = window) && null != (ee = te.URL) && ee.createObjectURL ? te.URL : te.webkitURL || te.mozURL;
            var te, ee;
            let ie;
            const ne = window.Blob,
                se = (t, {
                    muted: e
                }) => {
                    if (!ie) try {
                        ie = new ne([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], {
                            type: "video/mp4"
                        })
                    } catch (t) {
                        return Promise.resolve()
                    }
                    return k.OS.tizen ? Promise.resolve() : (t.muted = e, t.src = Jt.createObjectURL(ie), t.play() || (0, Gt.Z)(t))
                },
                oe = "autoplayMuted",
                ae = "autoplayDisabled",
                re = {},
                le = (t, {
                    cancelable: e,
                    muted: i = !1,
                    allowMuted: n = !1,
                    timeout: s = 1e4
                }) => {
                    const o = t.getTestElement(),
                        a = i ? "muted" : `${n}`;
                    let r;
                    re[a] || (re[a] = se(o, {
                        muted: i
                    }).catch((t => {
                        if (!e.cancelled() && !1 === i && n) return se(o, {
                            muted: i = !0
                        });
                        throw t
                    })).then((() => i ? (re[a] = null, oe) : "autoplayEnabled")).catch((t => {
                        throw clearTimeout(r), re[a] = null, t.reason = ae, t
                    })));
                    const l = re[a].then((t => {
                            if (clearTimeout(r), e.cancelled()) {
                                const t = new Error("Autoplay test was cancelled");
                                throw t.reason = "cancelled", t
                            }
                            return t
                        })),
                        c = new Promise(((t, e) => {
                            r = setTimeout((() => {
                                re[a] = null;
                                const t = new Error("Autoplay test timed out");
                                t.reason = "timeout", e(t)
                            }), s)
                        }));
                    return Promise.race([l, c])
                };
            var ce = i(686),
                de = i(7543),
                he = i(7411);
            const ue = "tabVisible";
            class pe extends he.Z {
                getFirstFrame() {
                    const t = this.between(s.cq, s.FU),
                        e = this.between(ue, s.FU);
                    return e && t && e > 0 && e < t ? e : t
                }
            }
            const we = function(t, e) {
                    e.off(s.cq, t._onPlayAttempt), e.off(s.Gj, t._triggerFirstFrame), e.off(s.R2, t._onTime), t.off("change:activeTab", t._onTabVisible), t._triggerFirstFrame = t._onTime = null
                },
                ge = function(t, e) {
                    t.change("mediaModel", (function(t, i, n) {
                        t._qoeItem && n && t._qoeItem.end(n.get("mediaState")), t._qoeItem = new pe, t._qoeItem.tick(s.gO), t._qoeItem.start(i.get("mediaState")),
                            function(t, e) {
                                t._onTabVisible && we(t, e);
                                let i = !1;
                                t._triggerFirstFrame = function(n) {
                                    if (i || !e.mediaController) return;
                                    const o = e.mediaController.mediaModel,
                                        a = o.attributes.mediaState;
                                    if (a !== s.r0 && a !== s._5 && n.type !== s.Gj) return;
                                    i = !0;
                                    const r = t._qoeItem;
                                    r.tick(s.FU);
                                    const l = r.getFirstFrame();
                                    e.trigger(s.FU, {
                                        loadTime: l
                                    }), o.off(`change:${s.ug}`, null, o), o.change(s.ug, ((t, i) => {
                                        i && e.trigger(s.ug, i)
                                    }), o), we(t, e)
                                }, t._onTime = function(t) {
                                    let e = 0;
                                    return function(i) {
                                        const n = i.position;
                                        n > e && t(i), e = n
                                    }
                                }(t._triggerFirstFrame), t._onPlayAttempt = function() {
                                    this._qoeItem.tick(s.cq)
                                }, t._onTabVisible = function(t, e) {
                                    e ? t._qoeItem.tick(ue) : t._qoeItem.tick("tabHidden")
                                }, t.on("change:activeTab", t._onTabVisible), e.on(s.cq, t._onPlayAttempt, t), e.once(s.Gj, t._triggerFirstFrame), e.on(s.R2, t._onTime)
                            }(t, e), i.on("change:mediaState", (function(e, i, n) {
                            i !== n && (t._qoeItem.end(n), t._qoeItem.start(i))
                        }))
                    }))
                },
                me = function(t) {
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
            var je = i(2557);
            const fe = function() {},
                be = function() {};
            Object.assign(fe.prototype, {
                destroy() {
                    var t, e;
                    this.off(), this.stop(), (0, a.c2)(this, this.originalContainer), this._view && this._view.destroy(), this._model && (t = this._model, e = this._programController, t._onTabVisible && we(t, e), t._qoeItem = t._triggerFirstFrame = t._onTime = t._onPlayAttempt = t._onTabVisible = null, this._model.destroy()), this._apiQueue && this._apiQueue.destroy(), this._captions && this._captions.destroy(), this._programController && this._programController.destroy(), this.instreamDestroy(!0), this._view = this._model = this._apiQueue = this._captions = this._programController = null, this.clearSetupVars && this.clearSetupVars()
                },
                playerSetup(t, e, i, n, p, g) {
                    let m, y, v = this,
                        x = v._model = new E;
                    x.set("jwStart", me(window.location.search));
                    let T, _, M, S = !1,
                        I = !1,
                        A = null,
                        L = j(Z),
                        B = j(be);
                    v.originalContainer = v.currentContainer = i, v._events = n, v.trigger = function(t, e) {
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
                        }(x, t, e);
                        return w.ZP.trigger.call(this, t, i)
                    };
                    let P = new c.Z(v, ["trigger"], (() => !0));
                    const z = (t, e) => {
                        v.trigger(t, e)
                    };
                    x.setup(t);
                    const O = x.get("backgroundLoading"); {
                        const t = new Kt(x);
                        m = this._view = new qt(e, t), m.on("all", ((t, e) => {
                            null != e && e.doNotForward || z(t, e)
                        }), v), t.on("viewSetup", (t => {
                            (0, a.c2)(this, t)
                        }))
                    }
                    let $ = this._programController = new R(x, g, e._publicApi);
                    gt(), $.on("all", z, v).on("subtitlesTracks", (t => {
                        if (!y) return;
                        y.setSubtitlesTracks(t.tracks);
                        const e = y.getCurrentIndex();
                        e > 0 && ut(e, t.tracks)
                    }), v).on(s.Ms, (() => {
                        Promise.resolve().then(ht)
                    }), v).on(s.Ew, v.triggerError, v), ge(x, $), v.clearSetupVars = function() {
                        P && P.destroy(), v = $ = x = m = L = B = M = P = null
                    }, x.on(s.pn, v.triggerError, v), x.on("change:state", ((t, e, i) => {
                        G() || V.call(this, t, e, i)
                    }), this), x.on("change:castState", (function(t, e) {
                        v.trigger(s.pi, e)
                    })), x.on("change:fullscreen", (function(t, e) {
                        v.trigger(s.UW, {
                            fullscreen: e
                        }), e && t.set("playOnViewable", !1)
                    })), x.on("change:volume", (function(t, e) {
                        v.trigger(s.yH, {
                            volume: e
                        })
                    })), x.on("change:mute", (function(t) {
                        v.trigger(s.gy, {
                            mute: t.getMute()
                        })
                    })), x.on("change:playbackRate", (function(t, e) {
                        v.trigger(s.QF, {
                            playbackRate: e,
                            position: t.get("position")
                        })
                    }));
                    const F = function(t, e) {
                        "clickthrough" === e || "interaction" === e || "external" === e ? (x.set("playOnViewable", !1), x.off("change:playReason change:pauseReason", F)) : !e && x.get("autostart") && "playing" === G() && x.set("playReason", "autostart")
                    };

                    function H(t, e) {
                        (0, b.o8)(e) || x.set("viewable", Math.round(e))
                    }

                    function Z() {
                        M && (x.get("generateSEOMetadata") && x.get("jwStart") >= 0 ? (v._model.setAutoStart("viewable"), v._model.set("playReason", "jwstart"), x.get("viewable") ? X(x, x.get("viewable")) : K(x, x.get("viewable"))) : !0 !== x.get("autostart") || x.get("playOnViewable") || nt("autostart"), M.flush())
                    }

                    function D(t, e) {
                        v.trigger("viewable", {
                            viewable: e
                        }), U()
                    }

                    function U() {
                        if ((o.Z[0] === e || 1 === x.get("viewable")) && "idle" === x.get("state") && !1 === x.get("autostart"))
                            if (!g.primed() && k.OS.android) {
                                const t = g.getTestElement(),
                                    e = v.getMute();
                                Promise.resolve().then((() => se(t, {
                                    muted: e
                                }))).then((() => {
                                    "idle" === x.get("state") && $.preloadVideo()
                                })).catch(be)
                            } else $.preloadVideo()
                    }

                    function q(t) {
                        v._instreamAdapter.noResume = !t, t || ot({
                            reason: "viewable"
                        })
                    }

                    function Q(t) {
                        t || (v.pause({
                            reason: "viewable"
                        }), x.set("playOnViewable", !t))
                    }

                    function X(t, e) {
                        const i = G();
                        if (t.get("playOnViewable")) {
                            if (e) {
                                const e = "viewable",
                                    n = t.get("autoPause").pauseAds,
                                    o = t.get("pauseReason");
                                J() === s.bc ? nt(e) : i && !n || "interaction" === o || tt({
                                    reason: e
                                })
                            } else k.OS.mobile && !i && t.get("autoPause").viewability && (v.pause({
                                reason: "autostart"
                            }), x.set("playOnViewable", !0));
                            k.OS.mobile && i && q(e)
                        }
                    }

                    function Y(t, e) {
                        t.get("floating") && t.get("intersectionRatio") <= .5 && t.get("activeTab") && (e = 1), Q(e)
                    }

                    function K(t, e) {
                        const i = t.get("state"),
                            n = G(),
                            o = t.get("playReason");
                        n ? t.get("autoPause").pauseAds ? Y(t, e) : q(e) : i === s.r0 || i === s.Kb ? Y(t, e) : i === s.bc && "playlist" === o && t.once("change:state", (() => {
                            Q(e)
                        }))
                    }

                    function G() {
                        const t = v._instreamAdapter;
                        return !!t && t.getState()
                    }

                    function J() {
                        const t = G();
                        return t || x.get("state")
                    }

                    function tt(t) {
                        if (L.cancel(), I = !1, x.get("state") === s.Vy) return Promise.resolve();
                        const i = it(t);
                        x.set("playReason", i);
                        const n = G();
                        return n ? (x.get("autostart") && "paused" === n && x.set("playReason", "autostart"), v._instreamAdapter.off("state", lt, v), e.pauseAd(!1, t), Promise.resolve()) : x.get("state") === s.xQ ? (st(!0), v.setItemIndex(0).then((() => et(t, i)))) : et(t, i)
                    }

                    function et(t, e) {
                        if (!S && (S = !0, v.trigger(s.$j, {
                            playReason: e,
                            startTime: null != t && t.startTime ? t.startTime : x.get("playlistItem").starttime
                        }), S = !1, (0, de.C)() && !g.primed() && g.prime(), "playlist" === e && x.get("autoPause").viewability && K(x, x.get("viewable")), _)) {
                            if ((0, de.C)() && !O) {
                                const t = x.get("mediaElement");
                                v._instreamAdapter && (t.preload = "none"), t.load()
                            }
                            return _ = !1, T = null, Promise.resolve()
                        }
                        return $.playVideo(e).then(g.played)
                    }

                    function it(t) {
                        return null != t && t.reason ? t.reason : null != t && t.startTime ? "jwstart" : "unknown"
                    }

                    function nt(t) {
                        if (J() !== s.bc) return;
                        L = j(Z);
                        const e = x.get("advertising");
                        le(g, {
                            cancelable: L,
                            muted: v.getMute(),
                            allowMuted: !e || e.autoplayadsmuted
                        }).then((e => (x.set("canAutoplay", e), e !== oe || v.getMute() || (x.set("autostartMuted", !0), gt(), x.once("change:autostartMuted", (function(t) {
                            x.get("autoPause").viewability || x.get("playOnViewable") || t.off("change:viewable", X), v.trigger(s.gy, {
                                mute: x.getMute()
                            })
                        }))), y && v.getMute() && x.get("enableDefaultCaptions") && y.selectDefaultIndex(1), tt({
                            reason: t
                        }).catch((() => {
                            v._instreamAdapter || x.set("autostartFailed", !0), T = null
                        }))))).catch((t => {
                            if (x.set("canAutoplay", ae), x.set("autostart", !1), !L.cancelled()) {
                                const e = (0, f.nm)(t);
                                v.trigger(s.wh, {
                                    reason: t.reason,
                                    code: e,
                                    error: t
                                })
                            }
                        }))
                    }

                    function st(t) {
                        L.cancel(), M.empty();
                        if (G()) {
                            const t = v._instreamAdapter;
                            return t && (t.noResume = !0), void(T = () => $.stopVideo())
                        }
                        T = null, !t && (I = !0), S && (_ = !0), x.set("errorEvent", void 0), $.stopVideo()
                    }

                    function ot(t) {
                        const e = it(t);
                        x.set("pauseReason", e), x.set("playOnViewable", "viewable" === e)
                    }

                    function at(t) {
                        T = null, L.cancel();
                        const i = G();
                        if (i && i !== s._5) return ot(t), void(i === s.Kb ? m.once("dismissFloating", rt) : e.pauseAd(!0, t));
                        switch (x.get("state")) {
                            case s.Vy:
                                return;
                            case s.r0:
                                ot(t), $.pause();
                                break;
                            case s.Kb:
                                ot(t), $.pause(), 0 === v.get("buffer") && (_ = !0);
                                break;
                            default:
                                S && (_ = !0)
                        }
                    }

                    function rt() {
                        v._instreamAdapter.once("state", lt), v._instreamAdapter.noResume = !0
                    }

                    function lt() {
                        const t = x.get("pauseReason");
                        e.pauseAd(!0, {
                            reason: t
                        })
                    }

                    function ct(t, e) {
                        v.instreamDestroy(), st(!0), v.setItemIndex(t), v.play(e)
                    }

                    function dt(t) {
                        ct(x.get("item") + 1, t)
                    }

                    function ht() {
                        v.completeCancelled() || (T = v.completeHandler, v.shouldAutoAdvance() ? v.nextItem() : x.get("repeat") ? dt({
                            reason: "repeat"
                        }) : (k.OS.iOS && wt(!1), x.set("playOnViewable", !1), x.set("state", s.xQ), v.trigger(s.V$, {})))
                    }

                    function ut(t, e) {
                        t = parseInt(t, 10) || 0, x.persistVideoSubtitleTrack(t, e), $.subtitles = t, v.trigger(s.Z_, {
                            tracks: pt(),
                            track: t
                        })
                    }

                    function pt() {
                        return y ? y.getCaptionsList() : []
                    }

                    function wt(t) {
                        var e, i;
                        x.get("pip") && x.set("pip", !1), (0, b.jn)(t) || (t = !x.get("fullscreen")), !x.get("allowFullscreen") && t || (x.set("fullscreen", t), null != (e = v) && null != (i = e._instreamAdapter) && i._adModel && v._instreamAdapter._adModel.set("fullscreen", t))
                    }

                    function gt() {
                        $.setMute(x.getMute()), $.setVolume(x.get("volume"))
                    }
                    x.on("change:playReason change:pauseReason", F), v.on(s.WE, (t => F(null, t.playReason))), v.on(s.Ax, (t => F(null, t.pauseReason))), x.on("change:scrubbing", (function(t, e) {
                        e ? (A = x.get("state") !== s._5, at({
                            reason: "interaction"
                        })) : A && tt({
                            reason: "interaction"
                        })
                    })), x.on("change:captionsList", (function(t, e) {
                        v.trigger(s.SL, {
                            tracks: e,
                            track: x.get("captionsIndex") || 0
                        })
                    })), x.on("change:mediaModel", (function(t, e) {
                        var i;
                        t.set("errorEvent", void 0), e.change("mediaState", (function(e, i) {
                            var n;
                            t.get("errorEvent") || t.set(s.uc, (n = i) === s.ik || n === s.nQ ? s.Kb : n)
                        }), this), e.change("duration", (function(e, i) {
                            if (0 === i) return;
                            const n = t.get("minDvrWindow"),
                                s = (0, ce.v)(i, n);
                            t.setStreamType(s)
                        }), this);
                        const n = "autoplay" === (null == t || null == t.get || null == (i = t.get("related")) ? void 0 : i.oncomplete);
                        let o = t.get("item") + 1,
                            a = t.get("playlist")[o];
                        if (a || n) {
                            const t = (i, s) => {
                                n && !a && (o = -1, a = x.get("nextUp"));
                                if (!(a && !a.daiSetting)) return;
                                const r = e.get("duration");
                                s && r > 0 && s >= r - u.l_ && (e.off("change:position", t, this), O ? $.backgroundLoad(a, o) : $.getAsyncItem(o).run())
                            };
                            e.on("change:position", t, this)
                        }
                    })), y = this._captions = new W(x), y.on("all", z, v), this.playerReady = function() {
                        m.once(s.sF, (() => {
                            try {
                                ! function() {
                                    x.change("visibility", H), P.off(), v.trigger(s.Rc, {
                                        setupTime: 0
                                    }), x.change("playlist", (function(t, e) {
                                        if (e.length) {
                                            const t = {
                                                    playlist: e
                                                },
                                                i = x.get("feedData");
                                            i && (t.feedData = Object.assign({}, i)), v.trigger(s.Ow, t)
                                        }
                                    })), x.change("playlistItem", (function(t, e) {
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
                                            e.chapters || t.setCues([]), v.trigger(s.gO, {
                                                index: x.get("item"),
                                                item: e
                                            })
                                        }
                                    })), P.flush(), P.destroy(), P = null, x.change("viewable", D), x.change("viewable", X), x.get("autoPause").viewability ? x.change("viewable", K) : x.once("change:autostartFailed change:mute", (function(t) {
                                        t.off("change:viewable", X)
                                    }));
                                    Z(), x.on("change:itemReady", ((t, e) => {
                                        e && (M.flush(), x.get("pip") && !v._instreamAdapter && m.requestPip())
                                    }))
                                }()
                            } catch (t) {
                                v.triggerError((0, f.Mm)(f.ud, f.YQ, t))
                            }
                        })), m.init()
                    }, this.preload = U, this.load = function(t, e) {
                        const i = v._instreamAdapter;
                        let n;
                        switch (i && (i.noResume = !0), v.trigger("destroyPlugin", {}), st(!0), $.clearItemPromises(), L.cancel(), L = j(Z), B.cancel(), (0, de.C)() && g.prime(), typeof t) {
                            case "string":
                                x.attributes.item = 0, x.attributes.itemReady = !1, B = j((t => {
                                    if (t) return v.updatePlaylist((0, h.ZP)(t.playlist), t)
                                })), n = function(t) {
                                    return new Promise(((e, i) => {
                                        const n = new d.Z;
                                        n.on(s.Ow, (function(t) {
                                            e(t)
                                        })), n.on(s.pn, i, this), n.load(t)
                                    }))
                                }(t).then((t => B.async(t)));
                                break;
                            case "object":
                                x.attributes.item = 0, n = v.updatePlaylist((0, h.ZP)(t), e || {});
                                break;
                            case "number":
                                n = v.setItemIndex(t);
                                break;
                            default:
                                return
                        }
                        n.catch((t => {
                            v.triggerError((0, f.l9)(t, f.DD))
                        })), n.then((() => L.async())).catch(be)
                    }, this.play = t => tt(t).catch(be), this.pause = at, this.seek = function(t, e) {
                        const i = x.get("state");
                        if (i === s.Vy) return;
                        e && i === s.r0 && x.get("playReason") !== e.reason && x.set("playReason", e.reason), $.position = t;
                        const n = i === s.bc;
                        x.get("scrubbing") || !n && i !== s.xQ || (n && ((e = e || {}).startTime = t), this.play(e))
                    }, this.stop = st, this.playlistItem = ct, this.playlistNext = dt, this.playlistPrev = function(t) {
                        ct(x.get("item") - 1, t)
                    }, this.setCurrentCaptions = ut, this.setCurrentQuality = function(t) {
                        $.quality = t
                    }, this.setFullscreen = wt, this.setAllowFullscreen = function(t) {
                        x.set("allowFullscreen", t), !t && x.get("fullscreen") && v.setFullscreen(!1)
                    }, this.setPip = function(t) {
                        x.get("fullscreen") && x.set("fullscreen", !1), (0, b.jn)(t) || (t = !x.get("pip")), x.set("pip", t)
                    }, this.getCurrentQuality = function() {
                        return $.quality
                    }, this.getQualityLevels = function() {
                        return $.qualities
                    }, this.setCurrentAudioTrack = function(t) {
                        $.audioTrack = t
                    }, this.getCurrentAudioTrack = function() {
                        return $.audioTrack
                    }, this.getAudioTracks = function() {
                        return $.audioTracks
                    }, this.getCurrentCaptions = function() {
                        return y ? y.getCurrentIndex() : -1
                    }, this.getCaptionsList = pt, this.getVisualQuality = function() {
                        const t = this._model.get("mediaModel");
                        return t ? t.get(s.ug) : null
                    }, this.getConfig = function() {
                        return this._model ? this._model.getConfiguration() : void 0
                    }, this.getState = J, this.next = be, this.completeHandler = ht, this.completeCancelled = function() {
                        return ! function() {
                            const t = x.get("state");
                            return t === s.bc || t === s.xQ || t === s.Vy
                        }() || !!I && (I = !1, !0)
                    }, this.shouldAutoAdvance = function() {
                        return x.get("item") !== x.get("playlist").length - 1
                    }, this.nextItem = () => {
                        dt({
                            reason: "playlist"
                        })
                    }, this.setConfig = t => {
                        ((t, e) => {
                            const i = t._model,
                                n = i.attributes;
                            if (e.height && (e.height = (0, r.a)(e.height), e.width = e.width || n.width), e.width && (e.width = (0, r.a)(e.width), e.aspectratio ? (n.width = e.width, delete e.width) : e.height = n.height), e.width && e.height && !e.aspectratio && t._view.resize(e.width, e.height), e.floating) {
                                const t = i.get("floating") || {},
                                    n = Object.assign({}, t, e.floating); - 1 === l.indexOf(n.mode) ? delete e.floating : e.floating = n
                            }
                            Object.keys(e).forEach((s => {
                                const o = e[s];
                                if (void 0 !== o) switch (s) {
                                    case "aspectratio":
                                        i.set(s, (0, r.R)(o, n.width));
                                        break;
                                    case "autostart":
                                        ! function(t, e, i) {
                                            t.setAutoStart(i), "idle" === t.get("state") && !0 === i && e.play({
                                                reason: "autostart"
                                            })
                                        }(i, t, o);
                                        break;
                                    case "mute":
                                        t.setMute(o);
                                        break;
                                    case "volume":
                                        t.setVolume(o);
                                        break;
                                    case "playbackRateControls":
                                    case "playbackRates":
                                    case "repeat":
                                    case "stretching":
                                    case "floating":
                                        i.set(s, o)
                                }
                            }))
                        })(v, t)
                    }, this.setItemIndex = t => {
                        $.stopVideo();
                        const e = x.get("playlist").length,
                            i = (0, h.bx)(t, e);
                        return $.setActiveItem(i).catch((t => {
                            if (t.code === f._M) {
                                if ($.asyncItems.reduce(((t, e) => t && e.skipped), !0)) throw t;
                                const e = this.shouldAutoAdvance;
                                return this.shouldAutoAdvance = () => !1, ht(), x.attributes.itemReady = !0, void(this.shouldAutoAdvance = e)
                            }
                            t.code >= 151 && t.code <= 162 && (t = (0, f.l9)(t, f.EY)), this.triggerError((0, f.Mm)(f.ul, f.tJ, t))
                        }))
                    }, this.getMediaElement = () => {
                        if ($) return $.mediaElement
                    }, this.detachMedia = function() {
                        if (S && (_ = !0), x.get("autoPause").viewability && K(x, x.get("viewable")), !O) return $.setAttached(!1);
                        $.backgroundActiveMedia()
                    }, this.attachMedia = function() {
                        O ? $.restoreBackgroundMedia() : $.setAttached(!0), "function" == typeof T && T()
                    }, this.routeEvents = t => $.routeEvents(t), this.forwardEvents = () => $.forwardEvents(), this.playVideo = t => $.playVideo(t), this.stopVideo = () => $.stopVideo(), this.castVideo = (t, e) => $.castVideo(t, e), this.stopCast = () => $.stopCast(), this.backgroundActiveMedia = () => $.backgroundActiveMedia(), this.restoreBackgroundMedia = () => $.restoreBackgroundMedia(), this.preloadNextItem = () => {
                        $.background.currentMedia && $.preloadVideo()
                    }, this.isBeforeComplete = () => $.beforeComplete, this.setVolume = t => {
                        x.setVolume(t), gt()
                    }, this.setMute = t => {
                        x.setMute(t), gt()
                    }, this.setPlaybackRate = t => {
                        x.setPlaybackRate(t)
                    }, this.getProvider = () => x.get("provider"), this.getWidth = () => x.get("containerWidth"), this.getHeight = () => x.get("containerHeight"), this.getItemQoe = () => x._qoeItem, this.setItemCallback = function(t) {
                        $.itemCallback = t
                    }, this.getItemPromise = function(t) {
                        const e = x.get("playlist");
                        if (t < -1 || t > e.length - 1 || isNaN(t)) return null;
                        const i = $.getAsyncItem(t);
                        return i ? i.promise : null
                    }, this.addButton = function(t, e, i, n, s) {
                        let o = x.get("customButtons") || [],
                            a = !1;
                        const r = {
                            img: t,
                            tooltip: e,
                            callback: i,
                            id: n,
                            btnClass: s
                        };
                        o = o.reduce(((t, e) => (e.id === n ? (a = !0, t.push(r)) : t.push(e), t)), []), a || o.unshift(r), x.set("customButtons", o)
                    }, this.removeButton = function(t) {
                        let e = x.get("customButtons") || [];
                        e = e.filter((e => e.id !== t)), x.set("customButtons", e)
                    }, this.resize = m.resize, this.getSafeRegion = m.getSafeRegion, this.setCaptions = m.setCaptions, this.checkBeforePlay = function() {
                        return S
                    }, this.setControls = function(t) {
                        (0, b.jn)(t) || (t = !x.get("controls")), x.set("controls", t), $.controls = t
                    }, this.addCues = function(t) {
                        this.setCues(x.getCues().concat(t))
                    }, this.setCues = function(t) {
                        x.setCues(t)
                    }, this.getCues = function() {
                        return x.getCues()
                    }, this.getChapters = function() {
                        return x.get("playlistItem").chapters.timestamps
                    }, this.getCurrentChapter = function() {
                        const t = x.get("state"),
                            e = x.get("playlistItem").chapters.timestamps;
                        if (!e || !e.length || t === s.xQ) return null;
                        if (t === s.bc) return e[0];
                        const i = this.get("currentTime");
                        return (0, C.Mf)(i, e)
                    }, this.setChapter = function(t) {
                        try {
                            const e = x.get("playlistItem"),
                                i = e.chapters.timestamps;
                            if (!i) return;
                            t instanceof je.u || (t = new je.u(t));
                            let n = -1;
                            for (let e = 0; e < i.length; e++)
                                if (i[e].time === t.time) {
                                    n = e;
                                    break
                                } - 1 !== n ? i[n] = t : i.push(t), e.chapters.timestamps = i, x.setCues(x.getCues()), x.set("playlistItem", e), x.trigger("change:chapters", x, t)
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }, this.setPlaylistItem = function(t, e) {
                        const i = x.get("playlist"),
                            n = (0, h.bx)(t, i.length),
                            s = $.getAsyncItem(n);
                        if (!s.replace(e)) return;
                        const o = i[n];
                        e && e !== o && ($.asyncItems[n] = null, s.reject(new Error("Item replaced"))), n === x.get("item") && "idle" === x.get("state") && this.setItemIndex(n)
                    }, this.isBeforePlay = this.checkBeforePlay, this.createInstream = function() {
                        return this.instreamDestroy(), this._instreamAdapter = new N(this, x, m, g), this._instreamAdapter
                    }, this.instreamDestroy = function(t) {
                        this._instreamAdapter && (t && (this._instreamAdapter.noResume = !0), this._instreamAdapter.off("state", lt), this._instreamAdapter.destroy(), this._instreamAdapter = null), m.off("dismissFloating", rt)
                    }, M = this._apiQueue = new c.Z(this, ["play", "pause", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setAllowFullscreen", "setFullscreen"], (() => !this._model.get("itemReady") || P)), M.queue.push(...p), m && m.setup()
                },
                requestPip(t) {
                    this._view && this._view.requestPip(t)
                },
                get(t) {
                    if (t in T.L4) {
                        const e = this._model.get("mediaModel");
                        return e ? e.get(t) : T.L4[t]
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
                    t.message = e.get("localization").errors[t.key], delete t.key, e.set("errorEvent", t), e.set("state", s.Vy), e.once("change:state", (function() {
                        this.set("errorEvent", void 0)
                    }), e), this.trigger(s.pn, t)
                },
                updatePlaylist(t, e) {
                    const i = this._model;
                    try {
                        const n = (0, h.s7)(t, i, e);
                        (0, h._)(n);
                        const s = Object.assign({}, e);
                        delete s.playlist, i.set("feedData", s), i.set("playlist", n)
                    } catch (t) {
                        return Promise.reject(t)
                    }
                    return 1 === t.length && 1 === t[0].sources.length && "mp4" === t[0].sources[0].type && i.get("repeat") && !i.get("advertising") ? (i.set("repeat", !1), i.set("loop", !0)) : i.set("loop", !1), this.setItemIndex(i.get("item"))
                }
            });
            const ye = fe,
                ve = "afs_ads ad-placement",
                ke = (t, e) => {
                    let i, n = !1;
                    t && (i = (() => {
                        const t = document.createElement("div");
                        return t.className = ve, t.innerHTML = "&nbsp;", t.style.width = "1px", t.style.height = "1px", t.style.position = "absolute", t.style.background = "transparent", t
                    })(), t.element().appendChild(i));
                    return {
                        onReady: () => {
                            if (n) return !0;
                            t && document.body.contains(t.element()) && (null !== i.offsetParent && i.className === ve && "" !== i.innerHTML && 0 !== i.clientHeight || (n = !0)), n && e.trigger("adBlock")
                        },
                        getAdBlock: () => n
                    }
                };
            var xe = i(6593),
                Te = i(6245),
                Ce = i(2894),
                _e = i(4101),
                Me = i(7164);
            const Ee = (t, e, n, o) => {
                if (((t, e, i) => {
                    const n = t.get("related"),
                        s = e.getPlaylist(),
                        o = Boolean(null == n ? void 0 : n.file) || Boolean(i.recommendations);
                    return (s.length > 1 || o) && (!1 !== t.get("controls") || !n.disableRelated)
                })(t, e, o)) return ((t, e) => i.e(365).then((n => {
                    if (t.attributes._destroyed || e.getPlugin("related")) return;
                    const s = new _e.Z;
                    return s.name = "related", s.js = i(8222).default, s
                }).bind(null, i)).catch((0, Ce.Ep)(301129)))(t, e).then((i => {
                    let s = e.getPlugin("related");
                    if (s) return;
                    const o = t.get("related");
                    s = (0, Me.MK)(i, o, e), s.on("nextUp", (e => {
                        let i = null;
                        e === Object(e) && (i = (0, I.Z)(e), i.sources = (0, h.T5)(i, t), i.feedType = e.feedType), t.set("nextUp", i)
                    })), s.on("warning", (t => {
                        n.trigger("warning", t)
                    })), s.setup(t), s.addToPlayer.call(e)
                })).catch((e => (e.message = e.message || t.get("localization").errors[e.key], delete e.key, n.trigger(s.cM, e), e)))
            };
            var Se = i(560);
            const Ie = "__jw-ld-json",
                Ae = function({
                                  search: t,
                                  hash: e,
                                  origin: i,
                                  pathname: n
                              }, s = "{seek_to_second_number}") {
                    const o = `jw_start=${s}`;
                    if (t) {
                        const e = t.replace(/^\?/, "").split("&");
                        let i = -1;
                        for (let t = 0; t < e.length; t++)
                            if (/^jw_start=/.test(e[t])) {
                                i = t;
                                break
                            } - 1 !== i ? e[i] = o : e.push(o), t = `?${e.join("&")}`
                    } else t = `?${o}`;
                    return (i || "") + (n || "") + (t || "") + (e || "")
                },
                Le = function(t) {
                    const e = t.getElementById(Ie);
                    if (null != e && e.innerText) try {
                        let t = JSON.parse(e.innerText);
                        return Array.isArray(t) || (t = [t]), t
                    } catch (t) {}
                    return []
                },
                Be = function(t, e) {
                    if (!t.length || !e) return -1;
                    const i = JSON.stringify(e);
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e];
                        if (JSON.stringify(n) === i) return e
                    }
                    return -1
                };
            class Pe {
                constructor(t, e, i) {
                    this.controller_ = e, this.item_ = t, this.metadata_ = null, this.metadataToUpdate_ = {}, this.window_ = (null == i ? void 0 : i.window) || window, this.document_ = (null == i ? void 0 : i.document) || document
                }
                addMetadata() {
                    if (this.metadata_) return;
                    this.metadata_ = ((t, e, i = window) => {
                        var n;
                        const s = {
                            "@context": "https://schema.org",
                            "@type": "VideoObject",
                            name: t.title,
                            description: t.description,
                            thumbnailUrl: t.image,
                            potentialAction: {
                                "@type": "SeekToAction",
                                target: Ae(i.location),
                                "startOffset-input": "required name=seek_to_second_number"
                            }
                        };
                        if (t.pubdate && (s.uploadDate = new Date(1e3 * t.pubdate).toISOString()), null != t && null != (n = t.sources) && n.length) {
                            const e = (0, b.sE)(t.sources, (t => "video/mp4" === t.type)) || t.sources[0];
                            e && (s.contentUrl = e.file)
                        }
                        const o = e.getConfig();
                        (0, Se.Z)() ? t.mediaid && o.pid && (s.embedUrl = `https://cdn.jwplayer.com/players/${t.mediaid}-${o.pid}.html`): s.embedUrl = i.location.href;
                        const a = e.get("duration");
                        return a && (s.duration = `PT${Math.floor(a/60)}M${Math.round(a)%60}S`), s
                    })(this.item_, this.controller_);
                    const t = Le(this.document_).concat([this.metadata_]);
                    let e = this.document_.getElementById(Ie);
                    if (e || (e = this.document_.createElement("script"), e.setAttribute("type", "application/ld+json"), e.setAttribute("id", Ie), this.document_.head.appendChild(e)), e.innerText = JSON.stringify(t.length > 1 ? t : t[0]), (0, Se.Z)()) try {
                        this.window_.parent.postMessage({
                            type: "metadata",
                            generateSEOMetadata: !0,
                            metadata: this.metadata_
                        }, "*")
                    } catch (t) {}
                }
                removeMetadata() {
                    const t = this.document_.getElementById(Ie),
                        e = this.metadata_;
                    if (this.metadata_ = null, !e || !t) return;
                    const i = Le(this.document_),
                        n = Be(i, e);
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
                        url: Ae(window.location, Math.floor(t.begin))
                    }))), this.metadataToUpdate_.hasPart = i)
                }
                updateScriptTag() {
                    if (!Object.keys(this.metadataToUpdate_).length) return;
                    const t = Le(this.document_),
                        e = Be(t, this.metadata_),
                        i = this.document_.getElementById(Ie);
                    if (e >= 0 && t.length) {
                        if (this.metadata_ = Object.assign(this.metadata_, this.metadataToUpdate_), t[e] = this.metadata_, i.innerText = JSON.stringify(t), (0, Se.Z)()) try {
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
            ye.prototype.osPlayerSetup = ye.prototype.playerSetup, ye.prototype.playerSetup = function(t, e, o, a, r, l) {
                var c;
                this.osPlayerSetup(t, e, o, a, r, l);
                const d = this.shouldAutoAdvance,
                    {
                        _model: h,
                        _view: u,
                        modelShim: p
                    } = this,
                    w = ke(u, this),
                    g = h.get("advertising");
                if (null != p && null != (c = p.attributes) && c.ampController) {
                    const t = p.attributes.ampController,
                        e = this.playerReady;
                    this.ampController = t, delete p.attributes.ampController, this.playerReady = function(...i) {
                        e.apply(this, i), t.ready(h)
                    }
                }
                let m;
                t.analytics && (t.sdkplatform = t.sdkplatform || t.analytics.sdkplatform); {
                    h.once("change:visibility", (() => {
                        w.onReady.call(this)
                    }));
                    const t = (t, e, i, n) => {
                        if (!t) return;
                        const s = h.get("nextUp");
                        s && this.trigger(e, {
                            mode: s.mode,
                            ui: "nextup",
                            feedShownId: i,
                            target: s,
                            itemsShown: [s],
                            feedData: s.feedData
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
                    const s = [];
                    return h.get("mobileSdk") || !(t => window.WebGLRenderingContext && t.some((t => t.stereomode && t.stereomode.length > 0)))(t) || e.getPlugin("vr") || console.warn("Playlist contains 360Â° or VR media. JW Player 360Â°/VR support is now deprecated"), (0, n.w0)(t) && s.push((0, n.lD)(h.get("edition"))), (0, Te.g)(t, "images", "image"), s.length ? (h.attributes.itemReady = !1, Promise.all(s).then((() => ye.prototype.updatePlaylist.call(this, t, i)))) : ye.prototype.updatePlaylist.call(this, t, i)
                }, this.shouldAutoAdvance = function() {
                    const t = h.get("related"),
                        e = h.get("nextUp");
                    return e && "playlist" === e.mode ? Boolean(t.shouldAutoAdvance) : d.call(this)
                };
                const j = (t, i) => {
                        w.onReady(), Ee(h, e, this, i)
                    },
                    f = () => (m || (m = i.e(926).then((t => new(0, i(8460).default)(u, h, e)).bind(null, i)).catch((t => {
                        throw t
                    })).catch((t => {
                        console.error("jwplayer.stats:", t)
                    }))), m),
                    y = t => {
                        this.trigger(s.cM, t)
                    },
                    v = () => {
                        if (window.chrome && k.Browser.chrome) return ((t, e, n) => {
                            i.e(977).then((n => {
                                const s = new(0, i(5016).default)(t, e);
                                return t.castToggle = s.castToggle.bind(t._castController), t._castController = s, t.stopCasting = s.stopCasting, s.init()
                            }).bind(null, i)).catch((0, Ce.Jt)(301161)).catch(n)
                        })(this, h, y)
                    },
                    x = () => {
                        const t = h.getVideo();
                        null != t && t.video && (t.video.webkitWirelessVideoPlaybackDisabled = !0)
                    },
                    T = () => {
                        if (window.WebKitPlaybackTargetAvailabilityEvent && !h.get("playlist").some((t => !(0, xe.H)(t.sources[0])))) return ((t, e, n) => i.e(520).then((n => {
                            const s = i(6342).default;
                            t._airplayController = new s(t, e), t.castToggle = t._airplayController.airplayToggle.bind(t._airplayController)
                        }).bind(null, i)).catch((0, Ce.Jt)(301162)).catch(n))(this, h, y);
                        x()
                    };
                e.getAdBlock = w.getAdBlock, this.once(s.gO, (t => {
                    h.on("change:playlistItem", j, this);
                    if (!(null == g ? void 0 : g.outstream) && h.get("cast")) {
                        !(h.get("cast") || {}).customAppId && (0, n.w0)(h.get("playlist")) || v.apply(this), T.apply(this)
                    } else x();
                    Ee(h, e, this, t.item), h.get("generateSEOMetadata") && (this._seoMetadataManager = new Pe(t.item, this), this._seoMetadataManager.addMetadata(), this.updateMetadataAsync = setTimeout((() => {
                        if (!this._seoMetadataManager) return;
                        const t = h.getCues();
                        null != t && t.length && this._seoMetadataManager.updateChapterCuesAsync(t), this._seoMetadataManager.updateDurationAsync(this.get("duration")), this._seoMetadataManager.updateScriptTag()
                    }), 4e3)), this.getContainer().addEventListener("keydown", (t => {
                        "n" === t.key && (h.set("displayStats", !h.get("displayStats")), f())
                    }), this), h.on("change:displayStats", ((t, e) => {
                        e ? f().then((t => t.show())) : !1 === e && f().then((t => t.hide()))
                    }), this)
                }), this), null != g && g.outstream && function(t, e) {
                    const {
                        _model: i,
                        _view: n
                    } = t;
                    let o = !1,
                        a = e.height,
                        r = e.width;
                    const l = t.getHeight;
                    t.getHeight = function() {
                        const t = i.get("aspectratio");
                        return t ? Math.round(i.get("containerWidth") * parseFloat(t) / 100) : a
                    };
                    const c = t.getWidth;
                    let d;
                    t.getWidth = function() {
                        return (0, b.hj)(r) ? r : c.call(this)
                    }, t.getSafeRegion = function(t) {
                        return n.getSafeRegion(t)
                    }, t.resize = function(t, e) {
                        return n.resize(t, e)
                    }, d = n.resize, n.resize = function(t, e) {
                        return a = e, r = t, d.call(n, t, e)
                    }, i.setAutoStart("viewable"), t.setMute(!0), t.setItemIndex = function() {
                        return i.setActiveItem(0), Promise.resolve()
                    }, t.updatePlaylist = function() {
                        return i.set("playlist", [{
                            sources: [{}]
                        }]), i.attributes.itemReady = !0, this.setItemIndex(0)
                    };
                    const h = t.attachMedia;
                    t.attachMedia = t.playerDestroy;
                    const u = () => (o || i.set("repeat", !1), i.get("backgroundLoading") || t._programController.mediaPool.clean(), i.set("state", s.xQ), t._programController.trigger(s.Ms, {}), h.call(t));
                    t._programController.playVideo = function() {
                        return Promise.resolve()
                    };
                    const p = t.createInstream;
                    t.createInstream = function() {
                        const e = p.call(this);
                        return e.noResume = !0, o = !1, e.on("state", (({
                                                                            newstate: e
                                                                        }) => {
                            e !== s.ik && e !== s.r0 || (t.attachMedia = u, t.getHeight = l, t.getWidth = c, n && (n.resize = d), o = !0)
                        })), e
                    }
                }(this, t)
            }, ye.prototype.osDestroy = ye.prototype.destroy, ye.prototype.destroy = function() {
                this._seoMetadataManager && (this._seoMetadataManager.destroy(), this._seoMetadataManager = null, this.updateMetadataAsync && clearTimeout(this.updateMetadataAsync)), this.osDestroy()
            };
            const ze = ye
        },
        3343: (t, e, i) => {
            "use strict";
            i.d(e, {
                q: () => a
            });
            var n = i(6042),
                s = i(1643);
            const o = (t, e) => {
                    const i = t[e];
                    return (0, n.xV)(i) && i >= 0 ? i : null
                },
                a = function(t, e, i) {
                    const a = ((t, e, i) => {
                        let s, a;
                        if (s = (0, n.xV)(i.startPTS) ? o(i, "startPTS") : o(i, "start"), null === s) return null;
                        switch (t) {
                            case "PROGRAM-DATE-TIME":
                                return a = "program-date-time", {
                                    metadataType: a,
                                    programDateTime: e,
                                    start: s,
                                    end: s + o(i, "duration")
                                };
                            case "EXT-X-DATERANGE": {
                                const o = {},
                                    r = e.split(",").map((t => {
                                        const e = t.split("="),
                                            i = e[0],
                                            n = (e[1] || "").replace(/^"|"$/g, "");
                                        return o[i] = n, {
                                            name: i,
                                            value: n
                                        }
                                    })),
                                    l = o["START-DATE"];
                                if (!l) return null;
                                const c = o["END-DATE"];
                                let d = s;
                                if ((0, n.xV)(i.programDateTime) && (d += (new Date(l).getTime() - new Date(i.programDateTime).getTime()) / 1e3), isNaN(d)) return null;
                                let h = parseFloat(o["PLANNED-DURATION"] || o.DURATION) || 0;
                                return !h && c && (h = (new Date(c).getTime() - new Date(l).getTime()) / 1e3), a = "date-range", {
                                    metadataType: "date-range",
                                    tag: t,
                                    content: e,
                                    attributes: r,
                                    start: d,
                                    end: d + h,
                                    startDate: l,
                                    endDate: c,
                                    duration: h
                                }
                            }
                            case "EXT-X-CUE-IN":
                            case "EXT-X-CUE-OUT":
                                return a = "scte-35", {
                                    metadataType: a,
                                    tag: t,
                                    content: e,
                                    start: s,
                                    end: s + (parseFloat(e) || 0)
                                };
                            case "DISCONTINUITY": {
                                const n = s + o(i, "duration");
                                let r;
                                return "cc" in i && (r = i.cc), a = "discontinuity", {
                                    metadataType: a,
                                    tag: t,
                                    discontinuitySequence: r,
                                    PTS: e,
                                    start: s,
                                    end: n
                                }
                            }
                            default:
                                return null
                        }
                    })(t, e, i);
                    if (a) {
                        if (!(0, n.xV)(a.start)) return;
                        const o = this.createCue(a.start, a.end, JSON.stringify(a)),
                            r = `${i.sn}_${t}_${e}`;
                        if (this.addVTTCue({
                            type: "metadata",
                            cue: o
                        }, r)) {
                            const t = a.metadataType;
                            delete a.metadataType, this.trigger(s.O1, {
                                metadataType: t,
                                metadata: a
                            })
                        }
                    }
                }
        },
        9181: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => Q
            });
            var n = i(5140),
                s = i(1643),
                o = i(4506),
                a = i(8348),
                r = i(1628),
                l = i(8702),
                c = i(3949),
                d = i(186),
                h = i(686),
                u = i(974),
                p = i(2799),
                w = i(6528),
                g = i(328),
                m = i(3328),
                j = i(9974),
                f = i(5099),
                b = i(6042),
                y = i(5004),
                v = i(4446),
                k = i(1384);
            const x = 324e3,
                T = window.clearTimeout,
                C = function() {},
                _ = (t, e) => {
                    Object.keys(t).forEach((i => {
                        e.removeEventListener(i, t[i])
                    }))
                },
                M = function(t, e, i) {
                    const n = this;
                    n.state = s.bc, n.seeking = !1, n.currentTime = -1, n.retries = 0, n.maxRetries = 3, n.muteToggle = a.OS.iOS || a.Browser.safari;
                    const w = e.loadAndParseHlsMetadata;
                    n.loadAndParseHlsMetadata = void 0 === w || Boolean(w);
                    let M = e.minDvrWindow;
                    const E = i,
                        S = {
                            level: {}
                        };
                    let I, A = !1,
                        L = 0,
                        B = null,
                        P = null,
                        z = -1,
                        R = C,
                        O = null,
                        V = -1,
                        $ = -1,
                        F = !1,
                        H = null,
                        Z = !1,
                        N = null,
                        D = null,
                        U = 0;
                    this.video = E, this.supportsPlaybackRate = !0, this.startDateTime = 0;
                    const q = () => {
                            if (!(E.readyState < 2 && 0 === E.buffered.length)) return 0 === E.videoHeight
                        },
                        W = function() {
                            if (n.muteToggle && E.muted) {
                                const t = q();
                                if (void 0 === t) return;
                                const i = !E.paused;
                                E.muted = n.muteToggle = !1, t ? E.muted = e.mute : (E.muted = !0, i && E.paused && E.play())
                            }
                        },
                        Q = null !== e.liveTimeout ? 1e3 * e.liveTimeout : 3e4,
                        X = () => {
                            T($), $ = -1
                        },
                        Y = function() {
                            if (0 === Q) return;
                            const t = (0, j.Z)(E.buffered);
                            n.isLive() && t && H === t ? -1 === $ && ($ = window.setTimeout((function() {
                                F = !0, F && n.atEdgeOfLiveStream() && n.trigger(s.Ew, new v.rG(v.Sp, 220001))
                            }), Q)) : (X(), F = !1), H = t
                        },
                        K = t => {
                            P = t
                        },
                        G = function() {
                            const t = q();
                            if (void 0 !== t) {
                                const e = t ? "audio" : "video";
                                n.trigger(s.oZ, {
                                    mediaType: e
                                })
                            }
                        },
                        J = function() {
                            const t = S.level;
                            if (t.width !== E.videoWidth || t.height !== E.videoHeight) {
                                if (!E.videoWidth && !q() || -1 === z) return;
                                n.ensureMetaTracksActive(), t.width = E.videoWidth, t.height = E.videoHeight, G(), S.reason = S.reason || "auto";
                                const e = "hls" === I[z].type ? "auto" : "manual";
                                t.index = z, t.label = I[z].label, n.trigger(s.ug, {
                                    reason: S.reason,
                                    mode: e,
                                    bitrate: 0,
                                    level: {
                                        width: t.width,
                                        height: t.height,
                                        index: t.index,
                                        label: t.label
                                    }
                                }), S.reason = ""
                            }
                        },
                        tt = function(t) {
                            null != E && E.audioTracks && O && t > -1 && t < E.audioTracks.length && t !== V && (E.audioTracks[V].enabled = !1, V = t, E.audioTracks[V].enabled = !0, n.trigger(s._B, {
                                currentTrack: V,
                                tracks: O
                            }))
                        },
                        et = () => {
                            let t = -1;
                            const e = E.audioTracks;
                            for (let i = 0; i < e.length; i++)
                                if (e[i].enabled) {
                                    t = i;
                                    break
                                } tt(t)
                        },
                        it = function(t) {
                            const e = n.getSeekRange();
                            return n.isLive() && (0, h.s)(e.end - e.start, M) ? Math.min(0, t - e.end) : t
                        },
                        nt = function() {
                            E && (n.disableTextTrack(), E.removeAttribute("preload"), E.removeAttribute("src"), (0, p.EU)(E), (0, u.oB)(E, {
                                objectFit: ""
                            }), z = -1, !a.Browser.msie && "load" in E && E.load())
                        },
                        st = {
                            progress() {
                                l.Z.progress.call(n), q() && W(), Y()
                            },
                            timeupdate() {
                                n.currentTime >= 0 && (n.retries = 0), n.currentTime = E.currentTime, (0, k.If)() && P !== E.currentTime && K(E.currentTime), l.Z.timeupdate.call(n), Y(), a.Browser.ie && J()
                            },
                            resize: J,
                            ended() {
                                z = -1, X(), l.Z.ended.call(n)
                            },
                            loadedmetadata() {
                                let t = n.getDuration();
                                Z && t === 1 / 0 && (t = 0);
                                const e = {
                                    metadataType: "media",
                                    duration: t,
                                    height: E.videoHeight,
                                    width: E.videoWidth,
                                    seekRange: n.getSeekRange()
                                };
                                n.fairplay && (e.drm = "fairplay"), n.trigger(s.rx, e), J()
                            },
                            durationchange() {
                                Z || l.Z.progress.call(n)
                            },
                            loadeddata() {
                                var t;
                                ! function() {
                                    const t = E;
                                    if (t.getStartDate) {
                                        const e = t.getStartDate(),
                                            i = e.getTime ? e.getTime() : NaN;
                                        i === n.startDateTime || isNaN(i) || n.setStartDateTime(i)
                                    }
                                }(),
                                    function(t) {
                                        if (O = null, t) {
                                            if (t.length) {
                                                for (let e = 0; e < t.length; e++)
                                                    if (t[e].enabled) {
                                                        V = e;
                                                        break
                                                    } - 1 === V && (V = 0, t[V].enabled = !0), O = (0, b.UI)(t, (function(t) {
                                                    return {
                                                        name: t.label || t.language,
                                                        language: t.language
                                                    }
                                                }))
                                            }
                                            n.addTracksListener(t, "change", et), O && n.trigger(s.j0, {
                                                currentTrack: V,
                                                tracks: O
                                            })
                                        }
                                    }(E.audioTracks), t = n.getDuration(), L && -1 !== L && t && t !== 1 / 0 && n.seek(L)
                            },
                            canplay() {
                                A || (A = !0, Z || G(), J(), l.Z.canplay.call(n))
                            },
                            seeking() {
                                const t = P,
                                    e = null !== B ? it(B) : n.getCurrentTime(),
                                    i = it(t);
                                P = B, B = null, L = 0, n.seeking = !0, n.trigger(s.NZ, {
                                    position: i,
                                    offset: e,
                                    duration: n.getDuration(),
                                    currentTime: t,
                                    seekRange: n.getSeekRange(),
                                    metadata: {
                                        currentTime: t
                                    }
                                })
                            },
                            seeked() {
                                l.Z.seeked.call(n), n.ensureMetaTracksActive()
                            },
                            waiting() {
                                n.seeking || n.video.seeking ? n.setState(s.ik) : n.state === s.r0 && (n.atEdgeOfLiveStream() && n.setPlaybackRate(1), n.stallTime = n.video.currentTime, n.setState(s.nQ))
                            },
                            error() {
                                const {
                                    video: t
                                } = n, e = t.error, i = (null == e ? void 0 : e.code) || -1;
                                if ((3 === i || 4 === i) && n.retries < n.maxRetries) return n.trigger(s.cM, new v.rG(null, x + i - 1, e)), n.retries++, E.load(), void(-1 !== n.currentTime && (A = !1, n.seek(n.currentTime), n.currentTime = -1));
                                let o = 224e3,
                                    a = v.ul;
                                1 === i ? o += i : 2 === i ? (a = v.MD, o = 221e3) : 3 === i || 4 === i ? (o += i - 1, 4 === i && t.src === location.href && (o = 224005)) : a = v.ud, nt(), n.trigger(s.Ew, new v.rG(a, o, e))
                            }
                        };
                    Object.keys(l.Z).forEach((t => {
                        if (!st[t]) {
                            const e = l.Z[t];
                            st[t] = t => {
                                e.call(n, t)
                            }
                        }
                    }));
                    const ot = function() {
                            if (!a.Browser.safari) return !0;
                            const t = n.getCurrentTextTrack();
                            return null == t ? void 0 : t.sideloaded
                        },
                        at = t => {
                            let i = Math.max(0, z);
                            const n = e.qualityLabel;
                            if (t)
                                for (let e = 0; e < t.length; e++)
                                    if (t[e].default && (i = e), n && t[e].label === n) return e;
                            return S.reason = "initial choice", S.level.width && S.level.height || (S.level = {}), i
                        },
                        rt = t => {
                            O = null, V = -1, S.reason || (S.reason = "initial choice", S.level = {}), A = !1;
                            const e = document.createElement("source");
                            e.src = t.file;
                            E.src !== e.src && (E.src = t.file)
                        };
                    var lt;
                    Object.assign(this, g.ZP, c.Z, d.Z, m.Z, {
                        renderNatively: (lt = e.renderCaptionsNatively, !(!a.OS.iOS && !a.Browser.safari) || lt && a.Browser.chrome),
                        _eventsOn() {
                            var t, e;
                            t = st, e = E, Object.keys(t).forEach((i => {
                                e.removeEventListener(i, t[i]), e.addEventListener(i, t[i])
                            })), (0, k.Nm)(n, E)
                        },
                        _eventsOff() {
                            _(st, E), (0, k.IP)(E)
                        },
                        detachMedia() {
                            d.Z.detachMedia.call(n), X(), this.removeTracksListener(E.textTracks, "change", this.textTrackChangeHandler), this.removeTracksListener(E.textTracks, "addtrack", this.addTrackHandler), this.videoLoad && (E.load = this.videoLoad), ot() && this.disableTextTrack()
                        },
                        attachMedia() {
                            if (d.Z.attachMedia.call(n), A = !1, this.seeking = !1, E.loop = Boolean(e.loop), a.OS.iOS && !this.videoLoad) {
                                const t = this.videoLoad = E.load;
                                E.load = function() {
                                    return E.src === location.href ? (-1 === z && (z = at(I)), rt(I[z]), n.state === s.r0 && E.play(), void n.trigger(s.cM, new v.rG(null, 324005, new Error("video.load() was called after setting video.src to empty while playing video")))) : t.call(E)
                                }
                            }
                            ot() && this.enableTextTrack(), this.renderNatively && this.setTextTracks(this.video.textTracks), this.addTracksListener(E.textTracks, "change", this.textTrackChangeHandler)
                        },
                        isLive: () => E.duration === 1 / 0
                    });
                    const ct = function(t) {
                        const e = n.getSeekRange();
                        if (n.isLive()) {
                            if ((!D || Math.abs(N - e.end) > 1) && ((t => {
                                N = t.end, D = Math.min(0, E.currentTime - N), U = (0, y.z)()
                            })(e), n.ensureMetaTracksActive()), (0, h.s)(e.end - e.start, M)) return D
                        }
                        return t
                    };
                    n.setStartDateTime = function(t) {
                        n.startDateTime = t;
                        const e = new Date(t).toISOString();
                        let {
                            start: i,
                            end: s
                        } = n.getSeekRange();
                        i = Math.max(0, i), s = Math.max(i, s + 10);
                        const o = {
                                metadataType: "program-date-time",
                                programDateTime: e,
                                start: i,
                                end: s
                            },
                            a = n.createCue(i, s, JSON.stringify(o));
                        n.addVTTCue({
                            type: "metadata",
                            cue: a
                        })
                    }, n.getCurrentTime = function() {
                        return ct(E.currentTime)
                    };
                    const dt = () => {
                            let t = 0;
                            return ["buffered", "seekable"].forEach((e => {
                                const i = E[e];
                                let n = i ? i.length : 0;
                                for (; n--;) {
                                    const e = Math.max(t, i.end(n));
                                    (0, b.xV)(e) && (t = e)
                                }
                            })), t
                        },
                        ht = () => {
                            let t = 1 / 0;
                            return ["buffered", "seekable"].forEach((e => {
                                const i = E[e];
                                let n = i ? i.length : 0;
                                for (; n--;) {
                                    const e = Math.min(t, i.start(n));
                                    (0, b.xV)(e) && (t = e)
                                }
                            })), t
                        };
                    n.getDuration = function() {
                        let t = E.duration;
                        if (Z && t === 1 / 0 && 0 === E.currentTime || isNaN(t)) return 0;
                        const e = dt();
                        if (n.isLive() && e) {
                            const i = e - ht();
                            (0, h.s)(i, M) && (t = -i)
                        }
                        return t
                    }, n.getSeekRange = function() {
                        const t = {
                            start: 0,
                            end: 0
                        };
                        return E.seekable.length ? (t.end = dt(), t.start = ht()) : (0, b.xV)(E.duration) && (t.end = E.duration), t
                    }, n.getLiveLatency = function() {
                        let t = null;
                        const e = dt();
                        return n.isLive() && e && (t = (e + ((0, y.z)() - U)) / 1e3 - E.currentTime), t
                    };
                    const ut = t => {
                            let e;
                            return Array.isArray(t) && t.length > 0 && (e = t.map((function(t, e) {
                                return {
                                    label: t.label || e
                                }
                            }))), e
                        },
                        pt = function(t) {
                            n.currentTime = -1, M = t.minDvrWindow, I = t.sources, z = at(I)
                        },
                        wt = function() {
                            return E.paused && E.played && E.played.length && n.isLive() && !(0, h.s)(dt() - ht(), M) && (n.attachMedia(), E.load()), E.play() || (0, f.Z)(E)
                        },
                        gt = function(t) {
                            n.currentTime = -1, L = 0, X();
                            const e = E.src,
                                i = document.createElement("source");
                            i.src = I[z].file;
                            i.src !== e ? (rt(I[z]), e && E.load()) : 0 === t && E.currentTime > 0 && (L = -1, n.seek(t)), t > 0 && E.currentTime !== t && n.seek(t);
                            const o = ut(I);
                            o && n.trigger(s.UZ, {
                                levels: o,
                                currentQuality: z
                            }), I.length && "hls" !== I[0].type && G()
                        };
                    this.stop = function() {
                        X(), nt(), this.clearTracks(), a.Browser.ie && E.pause(), this.setState(s.bc)
                    }, this.destroy = function() {
                        const {
                            addTrackHandler: t,
                            cueChangeHandler: e,
                            textTrackChangeHandler: i
                        } = n, s = E.textTracks;
                        if (n.off(), n.videoLoad && (E.load = n.videoLoad), R = C, _(st, E), n.removeTracksListener(E.audioTracks, "change", et), n.removeTracksListener(s, "change", i), n.removeTracksListener(s, "addtrack", t), e)
                            for (let t = 0, i = s.length; t < i; t++) s[t].removeEventListener("cuechange", e)
                    }, this.init = function(t) {
                        n.retries = 0, n.maxRetries = t.adType ? 0 : 3, pt(t);
                        const e = I[z];
                        Z = (0, r.V)(e), Z && (n.supportsPlaybackRate = !1, st.waiting = C), n._eventsOn(), I.length && "hls" !== I[0].type && this.sendMediaType(I), S.reason = ""
                    }, this.preload = function(t) {
                        pt(t);
                        const e = I[z],
                            i = e.preload || "metadata";
                        "none" !== i && (E.setAttribute("preload", i), rt(e))
                    }, this.load = function(t) {
                        pt(t), E.loop = Boolean(e.loop), gt(t.starttime), this.setupSideloadedTracks(t.tracks)
                    }, this.play = function() {
                        return R(), wt()
                    }, this.pause = function() {
                        X(), R = function() {
                            if (E.paused && E.currentTime && n.isLive()) {
                                const t = dt(),
                                    e = t - ht(),
                                    i = !(0, h.s)(e, M),
                                    n = t - E.currentTime;
                                if (i && t && (n > 15 || n < 0)) {
                                    if (B = Math.max(t - 10, t - e), !(0, b.xV)(B)) return;
                                    K(E.currentTime), E.currentTime = B
                                }
                            }
                        }, E.pause()
                    }, this.seek = function(t) {
                        const e = n.getSeekRange();
                        let i = t;
                        if (t < 0 && (i += e.end), A || (A = Boolean(dt())), A) {
                            W(), L = 0;
                            try {
                                if (n.seeking = !0, n.isLive() && (0, h.s)(e.end - e.start, M) && (D = Math.min(0, i - N), t < 0)) {
                                    i += Math.min(12, ((0, y.z)() - U) / 1e3)
                                }
                                B = i, K(E.currentTime), E.currentTime = i
                            } catch (t) {
                                n.seeking = !1, L = i
                            }
                        } else L = i, a.Browser.firefox && E.paused && wt()
                    }, this.setVisibility = function(t) {
                        (t = Boolean(t)) || a.OS.android ? (0, u.oB)(n.container, {
                            visibility: "visible",
                            opacity: 1
                        }) : (0, u.oB)(n.container, {
                            visibility: "",
                            opacity: 0
                        })
                    }, n.getFullscreen = function() {
                        return (0, k.If)() || Boolean(E.webkitDisplayingFullscreen)
                    }, this.setCurrentQuality = function(t) {
                        z !== t && t >= 0 && I && I.length > t && (z = t, S.reason = "api", S.level = {}, this.trigger(s.aM, {
                            currentQuality: t,
                            levels: ut(I)
                        }), e.qualityLabel = I[t].label, gt(E.currentTime || 0), wt())
                    }, this.setPlaybackRate = function(t) {
                        E.playbackRate = E.defaultPlaybackRate = t
                    }, this.getPlaybackRate = function() {
                        return E.playbackRate
                    }, this.getCurrentQuality = function() {
                        return z
                    }, this.getQualityLevels = function() {
                        return Array.isArray(I) ? I.map((t => (0, o.Z)(t))) : []
                    }, this.getName = function() {
                        return {
                            name: "html5"
                        }
                    }, this.setCurrentAudioTrack = tt;
                    this.getAudioTracks = () => O || [];
                    this.getCurrentAudioTrack = () => V
                };
            Object.assign(M.prototype, w.Z), M.getName = function() {
                return {
                    name: "html5"
                }
            };
            const E = M;
            var S = i(6886),
                I = i(9601),
                A = i(2957);
            const L = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
                B = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/;
            class P {
                constructor() {
                    this.relurl = null, this.tagList = [], this.cc = this.sn = this.start = 0, this.title = null, this.programDateTime = this.rawProgramDateTime = null
                }
            }
            class z {
                constructor(t) {
                    this.fragments = [], this.url = t, this.live = !0, this.startSN = this.endSN = this.startCC = this.endCC = this.targetduration = this.totalduration = 0
                }
                get startProgramDateTime() {
                    return this.fragments[0] ? this.fragments[0].programDateTime : null
                }
            }
            const R = (t, e) => {
                    t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime), (0, b.xV)(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
                },
                O = (t, e) => {
                    const i = new z(e);
                    let n, s, o = 0,
                        a = 0,
                        r = 0,
                        l = null,
                        c = new P,
                        d = null;
                    for (L.lastIndex = 0; null !== (n = L.exec(t));) {
                        const t = n[1];
                        if (t) {
                            c.duration = parseFloat(t);
                            const e = ` ${n[2]}`.slice(1);
                            c.title = e || null, c.tagList.push(e ? ["INF", t, e] : ["INF", t])
                        } else if (n[3]) {
                            if ((0, b.xV)(c.duration)) {
                                const t = o++;
                                c.start = a, c.sn = t, c.cc = r, c.relurl = ` ${n[3]}`.slice(1), R(c, l), i.fragments.push(c), l = c, a += c.duration, c = new P
                            }
                        } else if (n[4]) c.rawProgramDateTime = ` ${n[4]}`.slice(1), c.tagList.push(["PROGRAM-DATE-TIME", c.rawProgramDateTime]), null === d && (d = i.fragments.length);
                        else {
                            for (n = n[0].match(B), s = 1; s < n.length && void 0 === n[s]; s++);
                            const t = ` ${n[s+1]}`.slice(1),
                                e = ` ${n[s+2]}`.slice(1);
                            switch (n[s]) {
                                case "#":
                                    c.tagList.push(e ? [t, e] : [t]);
                                    break;
                                case "MEDIA-SEQUENCE":
                                    o = i.startSN = parseInt(t, 10);
                                    break;
                                case "TARGETDURATION":
                                    i.targetduration = parseFloat(t);
                                    break;
                                case "ENDLIST":
                                    i.live = !1;
                                    break;
                                case "DIS":
                                    r++, c.tagList.push(["DIS"]);
                                    break;
                                case "DISCONTINUITY-SEQ":
                                    r = parseInt(t, 10);
                                    break;
                                case "MAP": {
                                    const {
                                        rawProgramDateTime: t
                                    } = c;
                                    c = new P, c.rawProgramDateTime = t;
                                    break
                                }
                            }
                        }
                    }
                    if (!a) throw new Error("Invalid playlist");
                    return l && !l.relurl && (i.fragments.pop(), a -= l.duration), i.totalduration = a, i.endSN = o - 1, i.startCC = i.fragments[0] ? i.fragments[0].cc : 0, i.endCC = r, d && ((t, e) => {
                        let i = t[e];
                        for (let n = e - 1; n >= 0; n--) {
                            const e = t[n];
                            e.programDateTime = i.programDateTime - 1e3 * e.duration, i = e
                        }
                    })(i.fragments, d), i
                },
                V = window.performance,
                $ = window.URL,
                F = (t, e = 0) => {
                    t.errors++, e && t.errors >= e && (t.ignore = !0)
                };
            class H {
                constructor(t, e) {
                    this.video = t, this.endTime = 0, this.fetchTime = 0, this.parsedTime = 0, this.matches = {}, this.parent = {
                        src: "",
                        url: null,
                        topDomain: "",
                        origin: "",
                        pathname: ""
                    }, this.xhr = null, this.onLevelLoaded = e, this.onResourceBufferFull = t => {
                        this.run(this.endTime), V.clearResourceTimings()
                    }, V.addEventListener("resourcetimingbufferfull", this.onResourceBufferFull)
                }
                run(t) {
                    const {
                        fetchTime: e,
                        parent: i,
                        video: n
                    } = this, {
                        src: s
                    } = n;
                    if (!s || !s.startsWith("http") || !document.body.contains(n)) return;
                    if (i.src !== s) {
                        this.matches = {}, i.src = s;
                        const t = i.url = new $(s);
                        i.topDomain = t.hostname.replace(/.*?([^.]+\.[^.]+)$/, "$1"), i.origin = t.origin, i.pathname = t.pathname
                    }
                    const o = V.getEntriesByType("resource");
                    let a = o.length;
                    for (; a--;) {
                        const n = o[a];
                        if (n.responseEnd <= e) break;
                        if ("video" === n.initiatorType) {
                            const e = n.name;
                            if (e === s) {
                                this.fetchTime = Math.max(n.fetchStart, this.fetchTime);
                                break
                            }
                            const o = (0, A.AO)(e);
                            if ("ts" === o || "aac" === o || "vtt" === o || "key" === o || "mp4" === o || "m4s" === o || "m4v" === o || "m4a" === o) continue;
                            let a = this.matches[e];
                            if (!a) {
                                const t = "m3u8" === o,
                                    n = e.includes(i.topDomain),
                                    s = n && e.startsWith(i.origin),
                                    r = s && e.startsWith(i.origin + i.pathname);
                                a = this.matches[e] = {
                                    count: 0,
                                    ignore: !1,
                                    errors: 0,
                                    onlyVideo: !1,
                                    matches: {
                                        m3u8: t,
                                        topLevelDomain: n,
                                        origin: s,
                                        path: r
                                    }
                                }
                            }
                            a.count++, a.onlyVideo = document.body.querySelectorAll("video audio").length < 2, (a.onlyVideo || a.matches.path || a.matches.m3u8 && a.matches.topLevelDomain) && (this.xhr && (0, S.E)(this.xhr), this.xhr = (0, S.h)({
                                url: e,
                                responseType: "text",
                                oncomplete: i => {
                                    var n, s;
                                    const o = i.responseText;
                                    if (!o) return void F(a, 3);
                                    let r;
                                    try {
                                        r = O(o, e)
                                    } catch (t) {
                                        F(a, 1)
                                    }
                                    if (null != (n = r) && null != (s = n.fragments) && s.length) {
                                        (() => {
                                            const e = this.parsedTime;
                                            this.parsedTime = t, this.onLevelLoaded(r, e, t)
                                        })()
                                    }
                                },
                                onerror() {
                                    F(a, 3)
                                }
                            })), this.fetchTime = n.responseEnd
                        }
                    }
                    o.length > 50 && (0 === this.fetchTime || V.now() - this.fetchTime > 5e3) && V.clearResourceTimings(), this.endTime = t
                }
                destroy() {
                    this.video = null, this.matches = null, this.onLevelLoaded = null, V.removeEventListener("resourcetimingbufferfull", this.onResourceBufferFull), this.onResourceBufferFull = null, this.xhr && ((0, S.E)(this.xhr), this.xhr = null)
                }
            }
            var Z = i(3343);
            const N = 225e3,
                D = t => {
                    const e = new Uint16Array(t.buffer);
                    return String.fromCharCode.apply(null, e)
                },
                U = (t, e, i) => {
                    t && t.removeEventListener(e, i, !1)
                },
                q = (t, e, i) => {
                    U(t, e, i), t.addEventListener(e, i, !1)
                },
                W = function(t, e, i) {
                    E.call(this, t, e, i);
                    const o = this,
                        a = o.init,
                        r = o.load,
                        l = o.destroy,
                        c = o.setStartDateTime,
                        d = o.getSeekRange;
                    this.processPlaylistMetadata = Z.q;
                    const h = t => {
                            const e = o.fairplay.session;
                            let i = t;
                            "string" == typeof i && (i = (t => {
                                const e = (0, n.t)(t),
                                    i = e.length,
                                    s = new Uint8Array(new ArrayBuffer(i));
                                for (let t = 0; t < i; t++) s[t] = e.charCodeAt(t);
                                return s
                            })(i)), e.update(i)
                        },
                        u = t => {
                            const e = o.fairplay.extractKey(t);
                            "function" == typeof e.then ? e.then(h) : h(e)
                        },
                        p = t => {
                            const e = o.fairplay,
                                i = t.target,
                                n = {};
                            (i.getAllResponseHeaders() || "").trim().split(/[\r\n]+/).forEach((t => {
                                const e = t.split(": "),
                                    i = e.shift();
                                n[i] = e.join(": ")
                            }));
                            const s = {
                                    data: i.response,
                                    headers: n
                                },
                                a = e.licenseResponseFilter.call(t.target, s, e);
                            a && "function" == typeof a.then ? a.then((() => {
                                u(s.data)
                            })) : u(s.data)
                        },
                        w = t => {
                            o.trigger(s.Ew, new v.rG(v.H4, 226e3 + (0, I.E)(t.currentTarget.status), t))
                        },
                        g = t => {
                            Object.keys(t.headers).forEach((e => {
                                t.setRequestHeader(e, t.headers[e])
                            })), t.send(t.body)
                        },
                        m = t => {
                            const e = o.fairplay,
                                i = t.target,
                                n = t.message,
                                s = new XMLHttpRequest;
                            s.responseType = e.licenseResponseType, s.addEventListener("load", p, !1), s.addEventListener("error", w, !1);
                            let a = "";
                            a = "function" == typeof e.processSpcUrl ? e.processSpcUrl(D(e.initData)) : e.processSpcUrl, s.open("POST", a, !0), s.body = e.licenseRequestMessage(n, i), s.headers = {}, [].concat(e.licenseRequestHeaders || []).forEach((t => {
                                s.setRequestHeader(t.name, t.value)
                            }));
                            const r = e.licenseRequestFilter.call(t.target, s, e);
                            r && "function" == typeof r.then ? r.then((() => {
                                g(s)
                            })) : g(s)
                        },
                        j = t => {
                            o.trigger(s.Ew, new v.rG(v.H4, 225650, t))
                        },
                        f = (t, e, i, n) => {
                            n.code += N, n.key = v.H4, o.trigger(s.Ew, n)
                        },
                        b = t => {
                            const e = t.target,
                                i = t.initData;
                            if (e.webkitKeys || e.webkitSetMediaKeys(new window.WebKitMediaKeys("com.apple.fps.1_0")), !e.webkitKeys) throw new Error("Could not create MediaKeys");
                            const n = o.fairplay;
                            n.initData = i, (0, S.h)(n.certificateUrl, (function(t) {
                                const s = new Uint8Array(t.response);
                                let o = n.extractContentId(D(i));
                                "string" == typeof o && (o = (t => {
                                    const e = new ArrayBuffer(2 * t.length),
                                        i = new Uint16Array(e);
                                    for (let e = 0, n = t.length; e < n; e++) i[e] = t.charCodeAt(e);
                                    return i
                                })(o));
                                const a = ((t, e, i) => {
                                        let n = 0;
                                        const s = new ArrayBuffer(t.byteLength + 4 + e.byteLength + 4 + i.byteLength),
                                            o = new DataView(s);
                                        new Uint8Array(s, n, t.byteLength).set(t), n += t.byteLength, o.setUint32(n, e.byteLength, !0), n += 4;
                                        const a = new Uint16Array(s, n, e.length);
                                        return a.set(e), n += a.byteLength, o.setUint32(n, i.byteLength, !0), n += 4, new Uint8Array(s, n, i.byteLength).set(i), new Uint8Array(s, 0, s.byteLength)
                                    })(i, o, s),
                                    r = e.webkitKeys.createSession("video/mp4", a);
                                if (!r) throw new Error("Could not create key session");
                                q(r, "webkitkeymessage", m), q(r, "webkitkeyerror", j), n.session = r
                            }), f, {
                                responseType: "arraybuffer"
                            })
                        },
                        y = t => {
                            const e = t.sources[0];
                            if (o.fairplay && Object.is(o.fairplay.source, e)) return;
                            const i = e.drm;
                            null != i && i.fairplay ? (o.fairplay = Object.assign({}, {
                                certificateUrl: "",
                                processSpcUrl: "",
                                licenseResponseType: "arraybuffer",
                                licenseRequestHeaders: [],
                                licenseRequestMessage: t => t,
                                licenseRequestFilter() {},
                                licenseResponseFilter() {},
                                extractContentId: t => t.split("skd://")[1],
                                extractKey: t => new Uint8Array(t)
                            }, i.fairplay), o.fairplay.source = e, o.fairplay.destroy = function() {
                                U(o.video, "webkitneedkey", b);
                                const t = this.session;
                                t && (U(t, "webkitkeymessage", m), U(t, "webkitkeyerror", j))
                            }, q(o.video, "webkitneedkey", b)) : o.fairplay && (o.fairplay.destroy(), o.fairplay = null)
                        };
                    this.init = function(t) {
                        y(t), a.call(this, t)
                    }, this.load = function(t) {
                        y(t), r.call(this, t)
                    }, this.destroy = function(t) {
                        this.fairplay && (this.fairplay.destroy(), this.fairplay = null), this.metaLoader && (this.metaLoader.destroy(), this.metaLoader = null), l.call(this, t)
                    }, this.setStartDateTime = function(t) {
                        const {
                            video: e,
                            loadAndParseHlsMetadata: i
                        } = this;
                        if (i && (t => {
                            if (!Boolean($ && t && t.getStartDate && V && V.getEntriesByType && V.clearResourceTimings && V.addEventListener)) return !1;
                            const e = t.getStartDate(),
                                i = e.getTime ? e.getTime() : NaN;
                            return !isNaN(i)
                        })(e)) {
                            this.startDateTime = t;
                            (this.metaLoader = new H(e, ((i, n, s) => {
                                const {
                                    fragments: o,
                                    startProgramDateTime: a
                                } = i, r = (a - t) / 1e3;
                                o.forEach((t => {
                                    const i = t.start = t.startPTS = t.start + r;
                                    if (i >= n && i < s && t.tagList && (t.tagList.forEach((([e, i]) => this.processPlaylistMetadata(e, i, t))), e.duration === 1 / 0 && e.buffered && e.buffered.start(0))) {
                                        const t = e.buffered.start(0),
                                            i = this._tracksById.nativemetadata;
                                        if (null != i && i.cues) {
                                            const e = i.cues;
                                            for (let n = 0; n < e.length && e[n].endTime < t; n++) i.removeCue(e[n])
                                        }
                                    }
                                }))
                            }))).run(0)
                        }
                        c.call(this, t)
                    }, this.getSeekRange = function() {
                        const {
                            metaLoader: t
                        } = this, e = d.call(this);
                        return t && t.endTime !== e.end && t.run(e.end), e
                    }
                };
            Object.assign(W.prototype, E.prototype), W.getName = E.getName;
            const Q = W
        },
        3414: (t, e, i) => {
            "use strict";
            i.d(e, {
                B: () => n,
                K: () => s
            });
            const n = [40, 120, 320, 480, 640, 720, 1280, 1920],
                s = 4500
        },
        2977: (t, e, i) => {
            "use strict";
            i.d(e, {
                Bf: () => a,
                Cz: () => s,
                IJ: () => o
            });
            var n = i(3414);
            const s = t => {
                    if (null != t && t.length) {
                        const e = t.filter((t => {
                            var e;
                            return null == t || null == (e = t.type) || null == e.match ? void 0 : e.match(/video/)
                        }));
                        if (null != e && e.length) return e
                    }
                    return !1
                },
                o = t => {
                    let e = 0,
                        i = n.B[e];
                    for (; i < t && e < n.B.length;) i = n.B[e++];
                    return i
                },
                a = ({
                         mediaid: t,
                         image: e
                     }, i) => t || e ? t && new RegExp(`jwplayer.com/v2/media/${t}`).test(e) ? `https://cdn.jwplayer.com/v2/media/${t}/poster.jpg?width=${i}` : e : ""
        },
        6245: (t, e, i) => {
            "use strict";
            i.d(e, {
                g: () => o
            });
            var n = i(6234);
            let s;
            const o = (t, e, i) => {
                const o = (() => {
                    try {
                        s = window.localStorage.jwplayerLocalId
                    } catch (t) {}
                    return s = s || (0, n.B)(12)
                })();
                t.forEach((t => {
                    const {
                        variations: n
                    } = t;
                    if (null != n && n[e]) {
                        n.selected = n.selected || {};
                        const s = ((t, e) => {
                                const i = (t => {
                                        let e = 1794770992;
                                        for (let i = 0, n = t.length; i < n; i++) e ^= t.charCodeAt(i), e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
                                        return e >>> 0
                                    })(t) % 2520,
                                    n = e.reduce(((t, e) => t + e.weight), 0);
                                let s = 0;
                                for (let t = 0; t < e.length; t++) {
                                    const o = e[t];
                                    if (s += 2520 * o.weight / n, s > i) return o
                                }
                            })(o, n[e]),
                            a = s[i];
                        a && (t[i] = a, n.selected[e] = s)
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
                s = i(8348),
                o = i(1776),
                a = i(7683),
                r = i(5099);
            class l {
                constructor(t, e, i, n, s) {
                    this.hoverElement = e, this.item = i, this.model = n, this.onView = s, this.type = t, this.container = null, this.played = !1, this.seeking = !1, this.completed = !1, this.src = i.videoThumbnail, this.video = (0, a.V)({
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
                    return this.src ? ((0, n.cn)(this.video, "jw-video-thumbnail-visible"), t && !t.src && (t.src = this.src, t.load()), this.completed && (t.currentTime = 0, (0, n.IV)(t, "jw-video-thumbnail-completed"), this.completed = !1), s.OS.iOS ? Promise.resolve(this.seekPlay()) : this.asyncPlay()) : this.destroy()
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
                    return (t.play() || (0, r.Z)(t)).then((() => {
                        this.played || this.onFirstFrame()
                    })).catch((t => {
                        if (20 !== t.code) return 9 !== t.code && "Failed to load because no supported source was found." !== t.message ? this.seekPlay() : void this.destroy()
                    }))
                }
                seekPlay() {
                    const t = this.video,
                        e = t.hasAttribute("loop");
                    let i = 0;
                    const n = this.seek = s => {
                            if (!this.seeking) return;
                            if (!t.duration) return (0, o.U)(n);
                            i || (i = s);
                            let a = (s - i) / 1e3;
                            e ? a %= t.duration : a = Math.min(a, t.duration), t.currentTime = a, t.duration > a || e ? (0, o.U)(n) : this.onEnded()
                        },
                        s = this.handleSeek = () => {
                            this.onFirstFrame(), this.video.removeEventListener("seeked", s)
                        };
                    this.played || this.video.addEventListener("seeked", s), this.seeking = !0, (0, o.U)(n)
                }
                addEventListeners() {
                    "posterItem" === this.type ? (this.model.once("change:state", this.destroy, this), this.model.on("change:viewable", this.onViewPoster, this)) : (s.OS.mobile || (this.hoverElement.addEventListener("mouseenter", this.onPlay), this.hoverElement.addEventListener("mouseleave", this.onPause)), this.video.addEventListener("ended", this.onEnded)), this.video.addEventListener("error", this.onError)
                }
                removeEventListeners() {
                    "posterItem" === this.type ? (this.model.off("change: state", this.destroy, this), this.model.off("change:viewable", this.onViewPoster, this)) : (s.OS.mobile || (this.hoverElement.removeEventListener("mouseenter", this.onPlay), this.hoverElement.removeEventListener("mouseleave", this.onPause)), this.video.removeEventListener("ended", this.onEnded)), this.video.removeEventListener("error", this.onError), this.handleSeek && this.video.removeEventListener("seeked", this.handleSeek)
                }
                init() {
                    this.adapt(this.hoverElement.className), (0, n.cn)(this.container, "jw-video-thumbnail-container"), "widgetItem" === this.type ? (0, n.SH)(this.container, this.video) : this.container.appendChild(this.video), this.container.parentElement && "posterItem" !== this.type ? "shelfItem" === this.type && (0, n.SH)(this.hoverElement, this.container) : this.hoverElement.appendChild(this.container), this.addEventListeners(), "posterItem" === this.type && this.model.get("viewable") && this.onViewPoster(null, !0)
                }
                isDestroyed() {
                    return !this.video
                }
                destroy() {
                    this.isDestroyed() || (this.removeEventListeners(), this.seeking = !1, this.seek && (0, o.W)(this.seek), this.onPause(), this.video.removeAttribute("src"), this.video.load(), this.container.removeChild(this.video), this.video = null, this.container.className.match(/jw-video-thumbnail-generated/) ? this.container.parentNode.removeChild(this.container) : (0, n.IV)(this.container, "jw-video-thumbnail-container"), this.container = null)
                }
            }
        },
        4646: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => Bt
            });
            var n = {};
            i.r(n), i.d(n, {
                email: () => jt,
                embed: () => bt,
                facebook: () => ht,
                link: () => ft,
                linkedin: () => pt,
                pinterest: () => wt,
                reddit: () => gt,
                tumblr: () => mt,
                twitter: () => ut
            });
            var s = i(8348),
                o = i(1643),
                a = i(328),
                r = i(1261),
                l = i(2799),
                c = i(5004),
                d = i(8165),
                h = i(8268),
                u = i(4697);
            var p = i(974),
                w = i(5882),
                g = i(7191),
                m = i(2957),
                j = i(6234),
                f = i(9888),
                b = i(5646);
            class y {
                constructor(t, e, i) {
                    Object.assign(this, a.ZP), this._model = t, this._api = e, this._playerElement = i, this.localization = t.get("localization"), this.state = "tooltip", this.enabled = !1, this.shown = !1, this.feedShownId = "", this.closeUi = null, this.tooltipUi = null, this.reset()
                }
                setup(t) {
                    this.container = t.createElement("div"), this.container.className = "jw-nextup-container jw-reset";
                    const e = (0, l.az)(((t = "", e = "", i = "", n = "") => `<div class="jw-nextup jw-background-color jw-reset${s.Browser.firefox?" jw-nextup-firefox-pip-fix":""}"><div class="jw-nextup-tooltip jw-reset"><div class="jw-nextup-thumbnail jw-reset"></div><div class="jw-nextup-body jw-reset"><div class="jw-nextup-header jw-reset">${t}</div><div class="jw-nextup-title jw-reset-text" dir="auto">${e}</div><div class="jw-nextup-duration jw-reset">${i}</div></div></div><button type="button" class="jw-icon jw-nextup-close jw-reset" aria-label="${n}"></button></div>`)());
                    e.querySelector(".jw-nextup-close").appendChild((0, g.W)("close")), this.addContent(e), this.closeButton = this.content.querySelector(".jw-nextup-close"), this.closeButton.setAttribute("aria-label", this.localization.close), this.tooltip = this.content.querySelector(".jw-nextup-tooltip");
                    const i = this._model,
                        n = i.player;
                    this.enabled = !1, i.on("change:nextUp", this.onNextUp, this), n.change("duration", this.onDuration, this), n.change("position", this.onElapsed, this), n.change("streamType", this.onStreamType, this), n.change("state", (function(t, e) {
                        "complete" === e && this.toggle(!1)
                    }), this), this.closeUi = (0, b.Z)(this.closeButton, (function() {
                        this.nextUpSticky = !1, this.toggle(!1)
                    }), this), this.tooltipUi = new w.ZP(this.tooltip).on("click", this.click, this)
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
                    if (this.enabled && ((0, l.og)(this.container, "jw-nextup-sticky", Boolean(this.nextUpSticky)), this.shown !== t)) {
                        this.shown = t, (0, l.og)(this.container, "jw-nextup-container-visible", t), (0, l.og)(this._playerElement, "jw-flag-nextup", t);
                        const i = this._model.get("nextUp");
                        t && i ? (this.feedShownId = (0, j.B)(j.F), this.trigger("nextShown", {
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
                        if (this.thumbnail = this.content.querySelector(".jw-nextup-thumbnail"), (0, l.og)(this.content, "jw-nextup-thumbnail-visible", Boolean(i)), i || e) {
                            let t;
                            t = e ? `https://cdn.jwplayer.com/v2/media/${e}/poster.jpg?width=120` : i;
                            const n = this.loadThumbnail(t);
                            (0, p.oB)(this.thumbnail, n)
                        }
                        this.header = this.content.querySelector(".jw-nextup-header"), this.header.textContent = (0, l.az)(this.localization.nextUp).textContent, this.title = this.content.querySelector(".jw-nextup-title"), this.title.textContent = n ? (0, l.az)(n).textContent : "", s && (this.duration = this.content.querySelector(".jw-nextup-duration"), this.duration.textContent = "number" == typeof s ? (0, f.timeFormat)(s) : s)
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
                    i && (n = (0, m.U5)(i, e)), n < 0 && (n += e), (0, m.zz)(i) && e - 5 < n && (n = e - 5), this.offset = n
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
            const v = {
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
                k = (t, e) => {
                    const {
                        items: i = []
                    } = t, n = i.map((t => ((t, e) => {
                        const {
                            featured: i,
                            showLogo: n,
                            type: s
                        } = t;
                        return t.logo = n ? '<span class="jw-rightclick-logo jw-reset"></span>' : "", `<li class="jw-reset jw-rightclick-item ${i?"jw-featured":""}">${v[s](t,e)}</li>`
                    })(t, e)));
                    return `<div class="jw-rightclick jw-reset"><ul class="jw-rightclick-list jw-reset">${n.join("")}</ul></div>`
                };
            var x = i(6601),
                T = i(2268),
                C = i(8518);
            const _ = {
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
                M = t => {
                    const e = (0, l.az)(t),
                        i = e.querySelector(".jw-rightclick-logo");
                    return i && i.appendChild((0, g.W)("jwplayer-logo")), e
                };
            class E {
                constructor(t) {
                    this.shortcutsTooltip = t
                }
                buildArray() {
                    const t = x.i.split("+")[0],
                        e = this.model,
                        i = e.get("edition"),
                        n = e.get("localization").poweredBy,
                        o = `<span class="jw-reset">JW Player ${t}</span>`,
                        a = {
                            items: [{
                                title: (0, C.t6)(n) ? `${o} ${n}` : `${n} ${o}`,
                                type: "link",
                                featured: !0,
                                showLogo: !0,
                                link: `https://jwplayer.com/learn-more?e=${_[i]}`
                            }]
                        },
                        r = a.items;
                    return this.shortcutsTooltip && r.splice(r.length - 1, 0, {
                        type: "keyboardShortcuts"
                    }), this.pipMenu = !s.OS.mobile && "disabled" !== e.get("pipIcon") && (s.Browser.chrome && !(0, T.yS)() || s.Browser.edge || s.Browser.safari), this.pipMenu && r.splice(r.length - 1, 0, {
                        type: "pip"
                    }), a
                }
                rightClick(t) {
                    if (this.lazySetup(), this.mouseOverContext) return !1;
                    this.hideMenu(), this.showMenu(t), this.addHideMenuHandlers()
                }
                getOffset(t) {
                    const e = (0, l.A8)(this.wrapperElement),
                        i = t.pageX - e.left;
                    let n = t.pageY - e.top;
                    return this.model.get("touchMode") && (n -= 100), {
                        x: i,
                        y: n
                    }
                }
                showMenu(t) {
                    const e = this.getOffset(t);
                    return this.el.style.left = `${e.x}px`, this.el.style.top = `${e.y}px`, this.outCount = 0, (0, l.cn)(this.playerContainer, "jw-flag-rightclick-open"), (0, l.cn)(this.el, "jw-open"), clearTimeout(this._menuTimeout), this._menuTimeout = setTimeout((() => this.hideMenu()), 3e3), !1
                }
                hideMenu(t) {
                    t && this.el && this.el.contains(t.target) || ((0, l.IV)(this.playerContainer, "jw-flag-rightclick-open"), (0, l.IV)(this.el, "jw-open"))
                }
                lazySetup() {
                    const t = k(this.buildArray(), this.model.get("localization"));
                    if (this.el) {
                        if (this.html !== t) {
                            this.html = t;
                            const e = M(t);
                            (0, l.EU)(this.el);
                            for (let t = e.childNodes.length; t--;) this.el.appendChild(e.firstChild)
                        }
                    } else this.html = t, this.el = M(this.html), this.wrapperElement.appendChild(this.el), this.hideMenuHandler = t => {
                        (0, w.dO)(t) || this.hideMenu(t)
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
                    this.wrapperElement = i, this.model = t, this.mouseOverContext = !1, this.playerContainer = e, this.ui = new w.ZP(i).on("longPress", this.rightClick, this)
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
            class S extends E {
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
            var I = i(7284),
                A = i(3477),
                L = i(3163),
                B = i(1831),
                P = i(2810),
                z = i(6436);
            const R = (t, e, i, n) => {
                    var s;
                    if (!t || "Auto" !== t[0].label || null == i || null == (s = i.items) || !s.length) return;
                    const o = i.items[0].el.querySelector(".jw-auto-label"),
                        a = t[e.index] || {
                            label: ""
                        };
                    o.textContent = n ? "" : a.label
                },
                O = t => {
                    const e = t.closeButton,
                        i = t.el.querySelector(".jw-settings-topbar");
                    return new w.ZP(i).on("keydown", (function(i) {
                        const {
                            sourceEvent: n,
                            target: s
                        } = i, o = (0, l.AH)(s), a = (0, l.i3)(s), r = e => {
                            a ? e || a.focus() : t.close(i)
                        };
                        switch ((0, P.ku)(n.key)) {
                            case "Esc":
                                t.close(i);
                                break;
                            case "Left":
                                r();
                                break;
                            case "Right":
                                o && e.element() && s !== e.element() && o.focus();
                                break;
                            case "Tab":
                                n.shiftKey && r(!0);
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
            class V extends I.Z {
                constructor(t, e, i, n) {
                    super(t.id, "settings", n.settings, null, n), this.api = t, this.model = e, this.localization = n, this.controlbar = i, this.closeButton = ((t, e, i) => {
                        const n = (0, d.Z)("jw-settings-close", e, i.close, [(0, g.W)("close")]);
                        return n.show(), n.ui.on("keydown", (t => {
                            const i = t.sourceEvent,
                                n = (0, P.ku)(i.key);
                            ("Enter" === n || "Right" === n || "Tab" === n && !i.shiftKey) && e(t)
                        }), void 0), t.appendChild(n.element()), n
                    })(this.el.querySelector(`.jw-${this.name}-topbar-buttons`), this.close, n), this.backButtonTarget = null, this.defaultChild = null, this.topbar = O(this), this.onDocumentClick = this.onDocumentClick.bind(this), this.addEventListeners()
                }
                setupMenu(t, e, i, n, s, o) {
                    var a, r;
                    if (!i || i.length <= 1) return void this.removeMenu(t);
                    let l = this.children[t];
                    l || (l = new I.Z(this.api.id, t, e, this, this.localization)), l.setMenuItems(l.createItems(i, n, o), s);
                    const c = null == (a = l) || null == (r = a.categoryButton) || null == r.element ? void 0 : r.element();
                    this.buttonContainer.firstChild === c && (this.defaultChild = l)
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
                    s && n && R(t.get("levels"), s.level, n, e), n.items[e].active || (0, P.dt)(n, e)
                }
                onVisualQuality(t, e) {
                    const i = this.children.quality;
                    e && i && R(t.get("levels"), e.level, i, t.get("currentLevel"))
                }
                onAudioTracks(t, e) {
                    this.setupMenu("audioTracks", this.localization.audioTracks, e, (t => this.api.setCurrentAudioTrack(t)), t.get("currentAudioTrack"))
                }
                onAudioTrackIndex(t, e) {
                    this.children.audioTracks && (0, P.dt)(this.children.audioTracks, e)
                }
                onCaptionsList(t, e) {
                    const i = {
                            defaultText: this.localization.off
                        },
                        n = t.get("captionsIndex");
                    this.setupMenu("captions", this.localization.cc, e, (t => this.api.setCurrentCaptions(t)), n, i);
                    const s = this.children.captions;
                    if (!s || s.children.captionsSettings) return;
                    s.topbar = s.topbar || s.createTopbar(), (0, l.EU)(s.topbar);
                    const o = this.localization.captionsStyles,
                        a = new I.Z(this.api.id, "captionsSettings", o.subtitleSettings, s, this.localization),
                        r = a.open;
                    a.open = t => {
                        const e = a.visible;
                        r.call(a, t), e || this.trigger("captionStylesOpened")
                    };
                    const c = a.destroy;
                    a.destroy = t => {
                        s.topbar.parentNode.removeChild(s.topbar), s.topbar = null, s.topbarUI.destroy(), c.call(a, t)
                    };
                    const d = new A.s(this.localization.settings, a.open);
                    s.topbar.appendChild(d.el);
                    const h = (e, i) => {
                            const n = t.get("captions"),
                                s = e.name,
                                o = e.values[i],
                                a = Object.assign({}, n);
                            a[s] = o, this.model.set("captions", a)
                        },
                        u = t.get("captions"),
                        p = t => {
                            const e = new A.s(this.localization.reset, (() => {
                                this.model.set("captions", Object.assign({}, B.R)), p(!0)
                            }));
                            e.el.classList.add("jw-settings-reset");
                            const i = [];
                            (0, P.JU)(o).forEach((e => {
                                !t && u && u[e.name] ? e.val = u[e.name] : e.val = e.defaultVal;
                                const n = e.values.indexOf(e.val);
                                e.currentSelection = e.options[n];
                                const s = new I.Z(this.api.id, e.name, e.label, a, this.localization),
                                    o = new A.s(e, s.open, L.v2);
                                o.el.setAttribute("aria-controls", `jw-${this.api.id}-settings-submenu-${e.name}`), s.buttonContainer = o;
                                const r = s.createItems(e.options, (t => {
                                    const i = o.el.querySelector(".jw-settings-content-item-value");
                                    h(e, t), i.innerText = e.options[t]
                                }), null);
                                s.setMenuItems(r, e.values.indexOf(e.val) || 0), i.push(o)
                            })), i.push(e), a.setMenuItems(i)
                        };
                    p()
                }
                onPlaylistItem() {
                    this.removeMenu("captions"), this.removeMenu("audioTracks"), this.removeMenu("quality"), this.controlbar.elements.captionsButton.hide(), this.visible && this.close()
                }
                onCaptionsIndex(t, e) {
                    const i = this.children.captions;
                    i && (0, P.dt)(i, e), this.controlbar.toggleCaptionsButtonState(Boolean(e))
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
                    i && (n = i.indexOf(e)), (0, P.dt)(this.children.playbackRates, n)
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
                    const e = (0, z.i)(this.model.get("containerWidth"));
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
                    const i = (0, P.ku)(null == t || null == (e = t.sourceEvent) ? void 0 : e.key),
                        n = this.controlbar.elements.settingsButton.element(),
                        s = (0, z.i)(this.model.get("containerWidth"));
                    let a;
                    switch (n && n.setAttribute("aria-expanded", !1), s < 2 && (this.mediaStateWhenOpened !== o.r0 && this.mediaStateWhenOpened !== o.Kb || this.api.play()), this.el.setAttribute("aria-expanded", "false"), this.el.parentNode.classList.remove("jw-settings-open"), this.trigger("visibility", {
                        visible: !1,
                        evt: t
                    }), document.removeEventListener("click", this.onDocumentClick), this.visible = !1, this.openMenus.length && this.closeChildren(), i) {
                        case "Right":
                            a = (0, l.AH)(n);
                            break;
                        case "Left":
                            a = (0, l.i3)(n);
                            break;
                        case "Tab":
                            if (t.shiftKey) {
                                a = (0, l.i3)(n);
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
                    P.MR.call(this), document.removeEventListener("click", this.onDocumentClick)
                }
            }
            const $ = V;
            var F = i(4225),
                H = i(6391);

            function Z(t, e, i, n) {
                let s = !1;
                const o = i.get("localization").shortcuts,
                    a = (0, l.az)(((t, e, i) => `<div class="jw-shortcuts-tooltip jw-modal jw-reset" title="${i}"><span class="jw-hidden" id="jw-${t}-shortcuts-tooltip-explanation">Press shift question mark to access a list of keyboard shortcuts</span><div class="jw-reset jw-shortcuts-container"><div class="jw-reset jw-shortcuts-header"><span class="jw-reset jw-shortcuts-title">${i}</span><button role="switch" aria-label="${i}" class="jw-reset jw-switch"><span class="jw-reset jw-switch-knob"></span><span class="jw-reset-text jw-switch-enabled">Enabled</span><span class="jw-reset-text jw-switch-disabled">Disabled</span></button></div><div class="jw-reset jw-shortcuts-tooltip-list"><div class="jw-shortcuts-tooltip-descriptions jw-reset">${e.map((t=>`<div class="jw-shortcuts-row jw-reset"><span class="jw-shortcuts-description jw-reset">${t.description}</span><span class="jw-shortcuts-key jw-reset">${t.key}</span></div>`)).join("")}</div></div></div></div>`)(e.id, function(t) {
                        const {
                            playPause: e,
                            volumeToggle: i,
                            fullscreenToggle: n,
                            seekPercent: s,
                            increaseVolume: o,
                            decreaseVolume: a,
                            seekForward: r,
                            seekBackward: l,
                            spacebar: c,
                            captionsToggle: d
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
                            description: r
                        }, {
                            key: "â†",
                            description: l
                        }, {
                            key: "c",
                            description: d
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
                    r = new w.ZP(a.querySelector(".jw-switch"));
                let c;
                const h = () => {
                    (0, l.IV)(a, "jw-open"), document.removeEventListener("click", c), s = !1, n(!1)
                };
                c = t => {
                    const e = t.target;
                    /jw-shortcuts|jw-switch/.test(e.className) || h()
                };
                const u = () => {
                        r.el.setAttribute("aria-checked", i.get("enableShortcuts")), (0, l.cn)(a, "jw-open"), a.querySelector(".jw-shortcuts-close").focus(), document.addEventListener("click", c), s = !0, n(!0)
                    },
                    p = t => {
                        const e = t.currentTarget,
                            n = "true" !== e.getAttribute("aria-checked");
                        e.setAttribute("aria-checked", n.toString()), i.set("enableShortcuts", n)
                    };
                return (() => {
                    const e = (0, d.Z)("jw-shortcuts-close", h, i.get("localization").close, [(0, g.W)("close")]);
                    (0, l.SH)(a, e.element()), e.show(), t.appendChild(a), r.on("click", p)
                })(), {
                    el: a,
                    open: u,
                    close: h,
                    destroy: () => {
                        h(), r.destroy()
                    },
                    toggleVisibility: () => {
                        s ? h() : u()
                    }
                }
            }
            class N extends a.ZP {
                constructor(t, e, i) {
                    super(), this.element = (0, l.az)(((t, e) => `<div class="jw-float-bar jw-reset">\n            <div class="jw-float-bar-title" aria-label="${e}" >${e}</div>\n            <div class="jw-float-bar-icon jw-float-icon jw-icon jw-button-color jw-reset" aria-label="${t}" tabindex="0">\n            </div>\n        </div>`)(e, i));
                    const n = this.element.querySelector(".jw-float-bar-icon");
                    n.appendChild((0, g.W)("floating-close")), this.ui = (0, b.Z)(n, (() => {
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
            const D = s.OS.mobile ? 4e3 : 2e3,
                U = [27];
            F.Z.cloneIcon = g.W, H.Z.forEach((t => {
                if (t.getState() === o.Vy) {
                    const e = t.getContainer().querySelector(".jw-error-msg .jw-icon");
                    e && !e.hasChildNodes() && e.appendChild(F.Z.cloneIcon("error"))
                }
            }));
            class q extends a.ZP {
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
                        const i = new u.Z(e, t);
                        i.buttons.display.on("click enter", (() => {
                            this.trigger(o.cy), this.userActive(1e3), t.playToggle({
                                reason: "interaction"
                            }), this.focusPlayerElement()
                        })), this.div.appendChild(i.element()), this.displayContainer = i
                    }
                    s.OS.mobile || (this.shortcutsTooltip = new Z(this.wrapperElement, t, e, (t => {
                        t || this.focusPlayerElement()
                    }))), this.rightClickMenu = new S(this.shortcutsTooltip), a && (0, l.cn)(this.playerContainer, "jw-flag-touch"), this.rightClickMenu.setup(e, this.playerContainer, this.wrapperElement);
                    e.get("floating") && this.setupFloating(t, e);
                    const c = this.controlbar = new h.Z(t, e, this.playerContainer.querySelector(".jw-hidden-accessibility"));
                    c.on(o.xf, (() => {
                        this.off("userInactive", this.focusPlayerElement, this), this.once("userInactive", this.focusPlayerElement, this), this.userActive()
                    })), c.on("nextShown", (function(t) {
                        this.trigger("nextShown", t)
                    }), this);
                    const p = i => {
                        const n = (0, r.v)(e.get("volume") + i, 0, 100);
                        t.setVolume(n)
                    };
                    if (c.on("adjustVolume", p, this), e.get("nextUpDisplay") && !c.nextUpToolTip) {
                        const i = new y(e, t, this.playerContainer);
                        i.on("all", this.trigger, this), i.setup(this.context), c.nextUpToolTip = i, this.div.appendChild(i.element())
                    }
                    this.div.appendChild(c.element());
                    const w = e.get("localization"),
                        m = this.settingsMenu = new $(t, e.player, this.controlbar, w);
                    let j = null;
                    m.on("menuVisibility", (({
                                                 visible: i,
                                                 evt: n
                                             }) => {
                        var s;
                        const a = e.get("state"),
                            r = {
                                reason: "settingsInteraction"
                            },
                            l = this.controlbar.elements.settingsButton,
                            c = "keydown" === ((null == n || null == (s = n.sourceEvent) ? void 0 : s.type) || (null == n ? void 0 : n.type) || ""),
                            d = i || c ? 0 : D;
                        this.userActive(d), (0, z.i)(e.get("containerWidth")) < 2 && (i && a === o.r0 ? t.pause(r) : i || a !== o._5 || j !== o.r0 || t.play(r)), j = a, !i && c && l ? l.element().focus() : n && this.focusPlayerElement()
                    })), m.on("captionStylesOpened", (() => this.trigger("captionStylesOpened"))), c.on("settingsInteraction", ((t, e, i) => {
                        if (e) return m.defaultChild.toggle(i, !0);
                        m.children[t].toggle(i)
                    })), s.OS.mobile ? this.div.appendChild(m.el) : (this.playerContainer.setAttribute("aria-describedby", `jw-${t.id}-shortcuts-tooltip-explanation`), this.div.insertBefore(m.el, c.element()));
                    const f = e => {
                        if (e.get("autostartMuted")) {
                            const i = () => this.unmuteAutoplay(t, e),
                                n = (t, e) => {
                                    e || i()
                                };
                            s.OS.mobile && (this.mute = (0, d.Z)("jw-autostart-mute jw-off", i, e.get("localization").unmute, [(0, g.W)("volume-0")]), this.mute.show(), this.div.appendChild(this.mute.element())), c.renderVolume(!0, e.get("volume")), (0, l.cn)(this.playerContainer, "jw-flag-autostart"), e.on("change:autostartFailed", i, this), e.on("change:autostartMuted change:mute", n, this), this.muteChangeCallback = n, this.unmuteCallback = i
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
                            const a = (0, r.v)(o + i, n, s);
                            t.seek(a, {
                                reason: "interaction"
                            })
                        },
                        v = i => {
                            if (i.ctrlKey || i.metaKey) return !0;
                            const n = !this.settingsMenu || !this.settingsMenu.visible,
                                s = !0 === e.get("enableShortcuts"),
                                o = this.instreamState;
                            if (s || -1 !== U.indexOf(i.keyCode)) {
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
                                        n && p(10);
                                        break;
                                    case 40:
                                        n && p(-10);
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
                    this.playerContainer.addEventListener("keydown", v), this.keydownCallback = v;
                    const k = t => {
                        switch (t.keyCode) {
                            case 9: {
                                const e = this.playerContainer.contains(t.target) ? 0 : D;
                                this.userActive(e);
                                break
                            }
                            case 32:
                                t.preventDefault()
                        }
                    };
                    this.playerContainer.addEventListener("keyup", k), this.keyupCallback = k;
                    const x = t => {
                        this.off("userInactive", this.focusPlayerElement, this);
                        const e = t.relatedTarget || document.querySelector(":focus");
                        if (!e) return;
                        this.playerContainer.contains(e) || this.userInactive()
                    };
                    this.playerContainer.addEventListener("blur", x, !0), this.blurCallback = x;
                    const T = () => {
                        this.playerContainer.getAttribute("aria-describedby") === `jw-${t.id}-shortcuts-tooltip-explanation` && this.playerContainer.removeAttribute("aria-describedby"), this.playerContainer.removeEventListener("blur", T, !0)
                    };
                    this.shortcutsTooltip && (this.playerContainer.addEventListener("blur", T, !0), this.onRemoveShortcutsDescription = T), this.userActive(), this.addControls(), this.addBackdrop(), e.set("controlsEnabled", !0)
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
                        div: r
                    } = this;
                    clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.off(), t.off(null, null, this), t.set("controlsEnabled", !1), r.parentNode && ((0, l.IV)(a, "jw-flag-touch"), r.parentNode.removeChild(r)), n && n.destroy(), s && s.destroy(), this.keydownCallback && a.removeEventListener("keydown", this.keydownCallback), this.keyupCallback && a.removeEventListener("keyup", this.keyupCallback), this.blurCallback && a.removeEventListener("blur", this.blurCallback), this.onRemoveShortcutsDescription && a.removeEventListener("blur", this.onRemoveShortcutsDescription), this.displayContainer && this.displayContainer.destroy(), e && e.destroy(), i && i.destroy(), t.get("displayStats") && t.set("displayStats", !1), o && o.destroy(), this.removeBackdrop()
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
                    i ? n = !1 : e.set("playOnViewable", !1), this.muteChangeCallback && (e.off("change:autostartMuted change:mute", this.muteChangeCallback), this.muteChangeCallback = null), this.unmuteCallback && (e.off("change:autostartFailed", this.unmuteCallback), this.unmuteCallback = null), e.set("autostartFailed", void 0), e.set("autostartMuted", void 0), t.setMute(n), this.controlbar.renderVolume(n, e.get("volume")), this.mute && this.mute.hide(), (0, l.IV)(this.playerContainer, "jw-flag-autostart"), this.userActive()
                }
                mouseMove(t) {
                    var e, i, n, s;
                    const o = this.controlbar.element().contains(t.target),
                        a = null == this || null == (e = this.controlbar) || null == (i = e.nextUpToolTip) || null == i.element || null == (n = i.element()) ? void 0 : n.contains(t.target),
                        r = null == (s = this.logo) || null == s.contains ? void 0 : s.contains(t.target),
                        l = o || a || r ? 0 : D;
                    this.userActive(l)
                }
                userActive(t = D) {
                    t > 0 ? (this.inactiveTime = (0, c.z)() + t, -1 === this.activeTimeout && (this.activeTimeout = setTimeout(this.userInactiveTimeout, t))) : this.resetActiveTimeout(), this.showing || ((0, l.IV)(this.playerContainer, "jw-flag-user-inactive"), this.showing = !0, this.trigger("userActive"))
                }
                userInactive() {
                    clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.settingsMenu.visible || (this.inactiveTime = 0, this.showing = !1, (0, l.cn)(this.playerContainer, "jw-flag-user-inactive"), this.trigger("userInactive"))
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
                    this.instreamState = !0, this.userActive(), this.addBackdrop(), this.settingsMenu && this.settingsMenu.close(), (0, l.IV)(this.playerContainer, "jw-flag-autostart"), this.controlbar.elements.time.element().setAttribute("tabindex", "-1")
                }
                destroyInstream(t) {
                    this.instreamState = null, this.addBackdrop(), t.get("autostartMuted") && (0, l.cn)(this.playerContainer, "jw-flag-autostart"), this.controlbar.elements.time.element().setAttribute("tabindex", "0")
                }
                setupFloating(t, e) {
                    const i = e.get("localization"),
                        n = e.get("advertising"),
                        s = e.get("floating"),
                        a = () => this.trigger("dismissFloating", {
                            doNotForward: true
                        }),
                        r = () => t.remove(),
                        c = () => {
                            const t = e.get("playlistItem").title;
                            return s.showTitle ? this.instreamState ? null != i && null != (n = i.advertising) && n.displayHeading ? i.advertising.displayHeading : " " : t : " ";
                            var n
                        },
                        d = new N(this.wrapperElement, i.close, c());
                    null != n && n.outstream && null != n && n.dismissible ? d.on(o.xf, r) : d.on(o.xf, a);
                    s && !1 !== s.dismissible && (0, l.cn)(this.playerContainer, "jw-floating-dismissible"), e.on("change:playlistItem", (() => {
                        d.setTitle(c())
                    }), this), e.on("instreamMode", (() => {
                        d.setTitle(c())
                    }), this)
                }
            }
            var W = i(8711),
                Q = i.n(W),
                X = i(1983),
                Y = i.n(X),
                K = i(1277),
                G = i.n(K),
                J = i(7928),
                tt = i.n(J),
                et = i(5484),
                it = i.n(et),
                nt = i(6598),
                st = i.n(nt),
                ot = i(8053),
                at = i.n(ot),
                rt = i(1666),
                lt = i.n(rt),
                ct = i(4375),
                dt = i.n(ct);
            const ht = {
                    label: "facebook",
                    src: "http://www.facebook.com/sharer/sharer.php?u=[URL]",
                    svg: Q(),
                    jwsource: "fb"
                },
                ut = {
                    label: "twitter",
                    src: "http://twitter.com/intent/tweet?url=[URL]",
                    svg: st(),
                    jwsource: "twi"
                },
                pt = {
                    label: "linkedin",
                    src: "https://www.linkedin.com/cws/share?url=[URL]",
                    svg: Y(),
                    jwsource: "lkn"
                },
                wt = {
                    label: "pinterest",
                    src: "http://pinterest.com/pin/create/button/?url=[URL]",
                    svg: G(),
                    jwsource: "pin"
                },
                gt = {
                    label: "reddit",
                    src: "http://www.reddit.com/submit?url=[URL]",
                    svg: tt(),
                    jwsource: "rdt"
                },
                mt = {
                    label: "tumblr",
                    src: "http://tumblr.com/widgets/share/tool?canonicalUrl=[URL]",
                    svg: it(),
                    jwsource: "tbr"
                },
                jt = {
                    label: "email",
                    src: "mailto:?body=[URL]",
                    svg: at(),
                    jwsource: "em"
                },
                ft = {
                    label: "link",
                    svg: lt(),
                    jwsource: "cl"
                },
                bt = {
                    label: "embed",
                    svg: dt(),
                    jwsource: "ceb"
                };
            var yt = i(549),
                vt = i.n(yt),
                kt = i(6042);
            let xt = !1;
            const Tt = function(t, e, s, o, r) {
                    const c = (null == r ? void 0 : r.openLink) || l.nG;
                    Object.assign(this, a.ZP);
                    let d, h, u = [ht, ut, jt];
                    const p = t => {
                        s.trigger("settingsInteraction", "sharing", !1, t)
                    };
                    (() => {
                        if (Array.isArray(e.sites)) {
                            const t = [];
                            (0, kt.S6)(e.sites, (function(e) {
                                (0, kt.HD)(e) && n[e] ? t.push(n[e]) : (0, kt.Kn)(e) && t.push(e)
                            })), u = t
                        }
                        t.addButton(vt(), o, p, "share", "jw-settings-sharing");
                        const i = s.el.querySelector(".jw-settings-sharing");
                        i.setAttribute("aria-controls", `jw-${t.id}-settings-submenu-sharing`), i.setAttribute("role", "button")
                    })();
                    const w = (t, e) => {
                            const i = t.indexOf("MEDIAID");
                            return i > 0 && e ? t.replace("MEDIAID", e) : -1 === i ? t : void 0
                        },
                        g = (t, i) => {
                            if (i) return i;
                            if (e.link) {
                                const i = w(e.link, t);
                                if (i) return i
                            }
                            return window.top === window ? window.location.toString() : document.referrer
                        },
                        m = () => {
                            const i = t.getPlaylistItem(),
                                n = u.filter((t => "link" === t.label))[0],
                                {
                                    mediaid: s,
                                    link: o
                                } = i;
                            d = g(s, o), n ? -1 === n.src.indexOf(d) && (n.src = d) : u.push(Object.assign({
                                src: d
                            }, ft));
                            const a = u.filter((t => "embed" === t.label));
                            h = (t => {
                                let i = null;
                                if (e.code) {
                                    i = w(e.code, t) || i
                                }
                                return i
                            })(i.mediaid) || e.code, a[0] ? a[0].src = decodeURIComponent(h) : e.code && u.push(Object.assign({
                                src: decodeURIComponent(h)
                            }, bt))
                        },
                        j = t => {
                            this.trigger("click", {
                                method: t
                            })
                        };
                    return this.getShareMethods = function() {
                        return m(), u
                    }, this.getLink = (t, e) => g(t, e), this.getHeading = () => o, this.onSubmenuToggle = (t, e = "interaction") => {
                        t && !xt && (xt = !0, i(3484)), this.trigger(t ? "open" : "close", {
                            visible: t,
                            method: e
                        })
                    }, this.action = function(e) {
                        const i = u[e].label;
                        "embed" !== i && "link" !== i ? (e => {
                            const {
                                src: i
                            } = e;
                            if ((0, kt.mf)(i)) i(d);
                            else if (null != i) {
                                const e = encodeURIComponent(d || "share");
                                let n = i.replace(/\[URL\]/gi, e);
                                i === n && (n = i + e), t.pause({
                                    reason: "sharing"
                                }), c(n, "_blank", {
                                    rel: "noreferrer"
                                }), window.focus()
                            }
                            j(e.label)
                        })(u[e]) : j(i)
                    }, this.open = function() {
                        s.trigger("sharingApi", !0)
                    }, this.close = function() {
                        s.trigger("sharingApi", !1)
                    }, this
                },
                Ct = function(t, e) {
                    const i = (0, l.az)('<div class="jw-skip jw-reset" tabindex="0" role="button"><span class="jw-text jw-skiptext jw-reset"></span><span class="jw-icon jw-icon-inline jw-skip-icon jw-reset"></span></div>');
                    i.querySelector(".jw-icon").appendChild((0, g.W)("next")), this.el = i, this.skiptext = this.el.querySelector(".jw-skiptext"), this.skipUI = (0, b.Z)(this.el, this.skipAd, this), this.model = t, this.skipMessage = t.get("skipText") || "", this.skipMessageCountdown = t.get("skipMessage") || "", this.waitTime = (0, m.U5)(t.get("skipOffset")), t.change("duration", ((i, n) => {
                        n && (this.waitTime || (this.waitTime = (0, m.U5)(i.get("skipOffset"), n)), this.el.parentNode !== e && this.waitTime + 2 < n && (t.change("position", ((t, e) => {
                            const i = this.waitTime - (e || 0);
                            i > 0 ? this.updateMessage(this.skipMessageCountdown.replace(/(\b)xx(s?\b)/gi, `$1${Math.ceil(i)}$2`)) : null !== this.waitTime && (this.updateMessage(this.skipMessage), this.skippable = !0, (0, l.cn)(this.el, "jw-skippable"))
                        }), this), e.appendChild(this.el)))
                    }), this)
                };
            Object.assign(Ct.prototype, a.ZP, {
                updateMessage(t) {
                    (0, l.nh)(this.skiptext, t), this.el.setAttribute("aria-label", t)
                },
                skipAd() {
                    this.skippable && (this.skipUI.off(), this.trigger(o.k3))
                },
                destroy() {
                    var t;
                    this.model.off(null, null, this), this.skipUI && this.skipUI.destroy(), null != this && null != (t = this.el) && t.parentNode && this.el.parentNode.removeChild(this.el)
                }
            });
            const _t = Ct,
                Mt = function(t, e, i) {
                    this.api = t, this.playerElement = e, this.wrapperElement = i
                };
            Object.assign(Mt.prototype, {
                setup(t) {
                    this.element = (0, l.az)((t => `<div class="jw-dismiss-icon jw-icon jw-reset" aria-label=${t} tabindex="0"></div>`)(t)), this.element.appendChild((0, g.W)("close")), this.ui = (0, b.Z)(this.element, (() => {
                        this.api.remove()
                    }), this), this.wrapperElement.insertBefore(this.element, this.wrapperElement.firstChild), (0, l.cn)(this.playerElement, "jw-flag-top")
                },
                destroy() {
                    this.element && (this.ui.destroy(), this.wrapperElement.removeChild(this.element), this.element = null)
                }
            });
            const Et = Mt,
                St = t => {
                    const {
                        label: e,
                        src: i,
                        options: n,
                        displayText: s,
                        svg: o = "",
                        icon: a = ""
                    } = t, r = a ? `<img src="${a}" class="jw-svg-icon"/>` : o;
                    return "link" === e || "embed" === e ? `<div class="jw-reset jw-settings-content-item jw-sharing-copy"><button class="jw-reset jw-sharing-link" aria-checked="false" type="button" role="button">${r} ${s||e}</button><textarea readonly="true" class="jw-reset jw-sharing-textarea">${i}</textarea><div class="jw-reset jw-tooltip jw-tooltip-sharing-${s||e}"><div class="jw-text">${n.copyText}</div></div></div>` : `<button class="jw-reset jw-settings-content-item jw-sharing-link" aria-checked="false" type="button" role="menuitem">${r} ${s||e}</button>`
                };
            class It extends A.s {
                constructor(t, e, i = St) {
                    super(t, e, i), this.content = t, this.el && t.label && (this.el.setAttribute("aria-label", t.label), this.el.setAttribute("role", "button"), this.el.setAttribute("tabindex", "0"))
                }
                activate() {
                    if ("embed" !== this.content.label && "link" !== this.content.label) return;
                    const t = this.el.querySelector(".jw-sharing-textarea");
                    if (t.select(), document.execCommand("copy")) {
                        const e = t.nextSibling;
                        (0, l.cn)(e, "jw-open"), setTimeout((function() {
                            (0, l.IV)(e, "jw-open")
                        }), 1e3)
                    } else window.prompt("Copy the text below", this.content.src);
                    t.blur()
                }
                destroy() {
                    this.ui.destroy()
                }
            }
            const At = It;
            class Lt extends I.Z {
                createCategoryButton() {
                    return "sharing" === this.name && (this.icon = vt()), super.createCategoryButton(this.title)
                }
                createItems(t, e, i, n) {
                    return "sharing" === this.name && (n = At), super.createItems.apply(this, [t, e, i, n])
                }
            }
            const Bt = class extends q {
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
                        this._destroySkipButton(), i && (this.skipButton = new _t(e, this.div), this.skipButton.on(o.k3, (function() {
                            e.set("skipButton", !1), t.skipAd()
                        })), this.controlbar.adSkipButton = this.skipButton)
                    }));
                    const i = e.get("localization"),
                        n = e.get("advertising");
                    null != n && n.outstream && null != n && n.dismissible && (this.dismissButton = new Et(t, this.playerContainer, this.playerContainer.querySelector(".jw-top")), this.dismissButton.setup(i.close));
                    const s = e.get("sharing");
                    if (!this.sharing && s) {
                        const {
                            controlbar: n,
                            settingsMenu: o
                        } = this, a = i.sharing;
                        this.sharing = new Tt(t, s, n, a.heading), t.addPlugin("sharing", this.sharing), e.change("playlistItem", (() => {
                            const e = this.sharing.getShareMethods().map((t => {
                                const e = a[t.label];
                                return e && (t.displayText = e), t
                            }));
                            o.removeMenu("sharing");
                            const n = new Lt(t.id, "sharing", i.sharing.heading, o, i),
                                s = n.open,
                                r = n.close,
                                l = i.sharing.copied;
                            n.open = t => {
                                n.visible || this._onSharingActive(!0), s(t)
                            }, n.close = t => {
                                n.visible && this._onSharingActive(!1), r(t)
                            }, n.setMenuItems(n.createItems(e, this.sharing.action, {
                                copyText: l
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
                Z: () => r
            });
            var n = i(8081),
                s = i.n(n),
                o = i(3645),
                a = i.n(o)()(s());
            a.push([t.id, '.jw-controls,.jw-controls-backdrop,.jw-flag-small-player .jw-settings-menu,.jw-overlays,.jw-settings-submenu{height:100%;width:100%}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;right:0}.jw-controls,.jw-controls-backdrop,.jw-overlays,.jw-settings-item-active::before{top:0;position:absolute;left:0}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;bottom:0;left:0}.jw-nextup-close{position:absolute;top:0;right:0}.jw-controls,.jw-flag-small-player .jw-settings-menu,.jw-overlays{position:absolute;bottom:0;right:0}.jw-controlbar .jw-tooltip::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after,.jw-settings-menu .jw-tooltip::after,.jw-text-live::before,.jw-time-tip::after{content:"";display:block}.jw-svg-icon{height:24px;width:24px;fill:currentColor;pointer-events:none}.jw-icon{height:44px;width:44px;background-color:transparent;outline:0}.jw-icon.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-icon-airplay .jw-svg-icon-airplay-off{display:none}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-off{display:block}.jw-icon-airplay .jw-svg-icon-airplay-on{display:block}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-on{display:none}.jw-icon-cc .jw-svg-icon-cc-off{display:none}.jw-off.jw-icon-cc .jw-svg-icon-cc-off{display:block}.jw-icon-cc .jw-svg-icon-cc-on{display:block}.jw-off.jw-icon-cc .jw-svg-icon-cc-on{display:none}.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:none}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:block}.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:block}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:none}.jw-icon-pip .jw-svg-icon-pip-off{display:none}.jw-off.jw-icon-pip .jw-svg-icon-pip-off{display:block}.jw-icon-pip .jw-svg-icon-pip-on{display:block}.jw-off.jw-icon-pip .jw-svg-icon-pip-on{display:none}.jw-icon-volume .jw-svg-icon-volume-0{display:none}.jw-off.jw-icon-volume .jw-svg-icon-volume-0{display:block}.jw-icon-volume .jw-svg-icon-volume-100{display:none}.jw-full.jw-icon-volume .jw-svg-icon-volume-100{display:block}.jw-icon-volume .jw-svg-icon-volume-50{display:block}.jw-full.jw-icon-volume .jw-svg-icon-volume-50,.jw-off.jw-icon-volume .jw-svg-icon-volume-50{display:none}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-icon-volume.jw-open::after,.jw-settings-menu .jw-icon[aria-checked=true]::after,.jw-settings-open .jw-icon-settings::after{opacity:1}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-audio-tracks,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-cc,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-hd,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-settings,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-settings-sharing,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-cast{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-text-live{bottom:6px}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume::after{display:none}.jw-controls,.jw-overlays{pointer-events:none}.jw-controls-backdrop{display:block;background:linear-gradient(to bottom,transparent,rgba(0,0,0,.4) 77%,rgba(0,0,0,.4) 100%) 100% 100%/100% 240px no-repeat transparent;transition:opacity 250ms cubic-bezier(0,.25,.25,1),background-size 250ms cubic-bezier(0,.25,.25,1);pointer-events:none}.jw-overlays{cursor:auto}.jw-controls{overflow:hidden}.jw-flag-small-player .jw-controls{text-align:center}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-autostart-mute,.jw-controlbar,.jw-display-icon-container .jw-icon,.jw-nextup-container,.jw-overlays .jw-plugin,.jw-skip{pointer-events:all}.jw-error .jw-display-icon-container,.jwplayer .jw-display-icon-container{width:auto;height:auto;box-sizing:content-box}.jw-display{display:flex;flex-direction:column;justify-content:center;height:100%;padding:57px 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-display-container{text-align:center}.jw-display-controls{display:inline-block}.jwplayer .jw-display-icon-container{float:left}.jw-display-icon-container{display:inline-block;padding:5.5px;margin:0 22px}.jw-display-icon-container .jw-icon{height:75px;width:75px;cursor:pointer;display:flex;justify-content:center;align-items:center}.jw-display-icon-container .jw-icon .jw-svg-icon{height:33px;width:33px;padding:0;position:relative}.jw-display-icon-container .jw-icon .jw-svg-icon-rewind{padding:.2em .05em}.jw-breakpoint--1 .jw-nextup-container{display:none}.jw-breakpoint--1 .jw-display-icon-next,.jw-breakpoint--1 .jw-display-icon-rewind,.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind{display:none}.jw-breakpoint--1.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint--1.jw-flag-touch .jw-display .jw-svg-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-svg-icon{z-index:100;position:relative}.jw-breakpoint--1 .jw-display .jw-icon,.jw-breakpoint--1 .jw-display .jw-svg-icon,.jw-breakpoint-0 .jw-display .jw-icon,.jw-breakpoint-0 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint--1 .jw-display .jw-icon:before,.jw-breakpoint--1 .jw-display .jw-svg-icon:before,.jw-breakpoint-0 .jw-display .jw-icon:before,.jw-breakpoint-0 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon,.jw-breakpoint-1 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-1 .jw-display .jw-icon:before,.jw-breakpoint-1 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon.jw-icon-rewind:before{width:33px;height:33px}.jw-breakpoint-2 .jw-display .jw-icon,.jw-breakpoint-2 .jw-display .jw-svg-icon,.jw-breakpoint-3 .jw-display .jw-icon,.jw-breakpoint-3 .jw-display .jw-svg-icon{width:77px;height:77px;line-height:77px}.jw-breakpoint-2 .jw-display .jw-icon:before,.jw-breakpoint-2 .jw-display .jw-svg-icon:before,.jw-breakpoint-3 .jw-display .jw-icon:before,.jw-breakpoint-3 .jw-display .jw-svg-icon:before{width:38.5px;height:38.5px}.jw-breakpoint-4 .jw-display .jw-icon,.jw-breakpoint-4 .jw-display .jw-svg-icon,.jw-breakpoint-5 .jw-display .jw-icon,.jw-breakpoint-5 .jw-display .jw-svg-icon,.jw-breakpoint-6 .jw-display .jw-icon,.jw-breakpoint-6 .jw-display .jw-svg-icon,.jw-breakpoint-7 .jw-display .jw-icon,.jw-breakpoint-7 .jw-display .jw-svg-icon{width:88px;height:88px;line-height:88px}.jw-breakpoint-4 .jw-display .jw-icon:before,.jw-breakpoint-4 .jw-display .jw-svg-icon:before,.jw-breakpoint-5 .jw-display .jw-icon:before,.jw-breakpoint-5 .jw-display .jw-svg-icon:before,.jw-breakpoint-6 .jw-display .jw-icon:before,.jw-breakpoint-6 .jw-display .jw-svg-icon:before,.jw-breakpoint-7 .jw-display .jw-icon:before,.jw-breakpoint-7 .jw-display .jw-svg-icon:before{width:44px;height:44px}.jw-controlbar{display:flex;flex-flow:row wrap;align-items:center;justify-content:center;position:absolute;left:0;bottom:0;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;max-height:72px;transition:250ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s}.jw-flag-touch.jw-breakpoint-0 .jw-controlbar .jw-icon-inline{height:40px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar{max-height:140px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container{padding:0 48px 20px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-tooltip{margin-bottom:-7px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume .jw-overlay{padding-bottom:40%}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-text{font-size:1em}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-text.jw-text-elapsed{justify-content:flex-end}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live),.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume{height:60px;width:60px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live) .jw-svg-icon,.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time{padding:0 60px;height:34px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time .jw-slider-container{height:10px}.jw-controlbar .jw-button-image{background:no-repeat 50% 50%;background-size:contain;max-height:24px}.jw-controlbar .jw-spacer{margin:0 auto}.jw-controlbar .jw-icon.jw-button-color:hover{color:#fff}.jw-button-container{display:flex;flex-flow:row nowrap;flex:1 1 auto;align-items:center;justify-content:flex-start;width:100%;padding:0 12px}.jw-slider-horizontal{background-color:transparent}.jw-icon-inline{position:relative}.jw-icon-inline,.jw-icon-tooltip{height:44px;width:44px;align-items:center;display:flex;justify-content:center}.jw-icon-inline:not(.jw-text),.jw-icon-tooltip,.jw-slider-horizontal{cursor:pointer}.jw-text-duration,.jw-text-elapsed{justify-content:flex-start;width:-moz-fit-content;width:fit-content}.jw-icon-tooltip{position:relative}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0}.jw-icon-cast google-cast-launcher{background-color:transparent;border:none;padding:0;width:24px;height:24px;cursor:pointer}.jw-fullscreen-ima{display:none}.jw-icon-inline.jw-icon-volume{display:none}.jwplayer .jw-text-countdown{display:none}.jw-flag-small-player .jw-display{padding-top:0;padding-bottom:0}.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-next,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-playback,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-rewind{display:none}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop{opacity:0}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-countdown{display:flex}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-elapsed,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-elapsed{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-related-btn,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-slider-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-text-countdown{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-button-container{height:30px}.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-volume{display:none}.jwplayer:not(.jw-breakpoint--1) .jw-text-duration:before,.jwplayer:not(.jw-breakpoint-0) .jw-text-duration:before{content:"/";padding-right:1ch;padding-left:1ch}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar{will-change:transform}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar .jw-text{transform-style:preserve-3d}.jwplayer:not(.jw-flag-fullscreen) .jw-fullscreen-disallowed{display:none}.jw-slider-container{display:flex;align-items:center;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#f2f2f2}.jw-rail{background-color:rgba(255,255,255,.3)}.jw-buffer{background-color:rgba(255,255,255,.3)}.jw-knob{height:13px;width:13px;background-color:#fff;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.4);opacity:1;pointer-events:none;position:absolute;transform:translate(-50%,-50%) scale(0);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform}.jw-flag-dragging .jw-slider-time .jw-knob,.jw-icon-volume:active .jw-slider-volume .jw-knob{box-shadow:0 0 26px rgba(0,0,0,.2),0 0 10px rgba(0,0,0,.4),0 0 0 6px rgba(255,255,255,.2)}.jw-slider-horizontal,.jw-slider-vertical{display:flex}.jw-slider-horizontal .jw-slider-container{height:5px;width:100%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-knob,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{top:50%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{transform:translate(0,-50%)}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:5px}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-vertical{align-items:center;flex-direction:column}.jw-slider-vertical .jw-slider-container{height:88px;width:5px}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-knob,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{left:50%}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{height:100%;width:5px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translate(-50%,0);transition:transform 150ms ease-in-out;bottom:0}.jw-slider-vertical .jw-knob{transform:translate(-50%,50%)}.jw-slider-time.jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-horizontal-volume-container .jw-slider-volume,.jw-slider-time:not(.jw-chapter-slider-time){height:17px;width:100%;align-items:center;background:transparent none;padding:0 12px}.jw-slider-time .jw-cue{background-color:rgba(33,33,33,.8);cursor:pointer;position:absolute;width:6px}.jw-horizontal-volume-container,.jw-slider-time:not(.jw-chapter-slider-time){z-index:1;outline:0}.jw-horizontal-volume-container .jw-buffer,.jw-horizontal-volume-container .jw-cue,.jw-horizontal-volume-container .jw-progress,.jw-horizontal-volume-container .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time) .jw-cue,.jw-slider-time:not(.jw-chapter-slider-time) .jw-progress,.jw-slider-time:not(.jw-chapter-slider-time) .jw-rail{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;transform:translate(0,-50%) scale(1,.6);transition:transform 150ms ease-in-out}.jw-flag-dragging .jw-horizontal-volume-container .jw-buffer,.jw-flag-dragging .jw-horizontal-volume-container .jw-cue,.jw-flag-dragging .jw-horizontal-volume-container .jw-progress,.jw-flag-dragging .jw-horizontal-volume-container .jw-rail,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-cue,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-progress,.jw-flag-dragging .jw-slider-time:not(.jw-chapter-slider-time) .jw-rail,.jw-flag-touch .jw-horizontal-volume-container .jw-buffer,.jw-flag-touch .jw-horizontal-volume-container .jw-cue,.jw-flag-touch .jw-horizontal-volume-container .jw-progress,.jw-flag-touch .jw-horizontal-volume-container .jw-rail,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-cue,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-progress,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time) .jw-rail,.jw-horizontal-volume-container:focus .jw-buffer,.jw-horizontal-volume-container:focus .jw-cue,.jw-horizontal-volume-container:focus .jw-progress,.jw-horizontal-volume-container:focus .jw-rail,.jw-horizontal-volume-container:hover .jw-buffer,.jw-horizontal-volume-container:hover .jw-cue,.jw-horizontal-volume-container:hover .jw-progress,.jw-horizontal-volume-container:hover .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-cue,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-progress,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-cue,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-progress,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-rail{transform:translate(0,-50%) scale(1,1)}.jw-horizontal-volume-container:focus .jw-knob,.jw-horizontal-volume-container:hover .jw-knob,.jw-slider-time:not(.jw-chapter-slider-time):focus .jw-knob,.jw-slider-time:not(.jw-chapter-slider-time):hover .jw-knob{transform:translate(-50%,-50%) scale(1)}.jw-horizontal-volume-container .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time) .jw-rail{background-color:rgba(255,255,255,.2)}.jw-horizontal-volume-container .jw-buffer,.jw-slider-time:not(.jw-chapter-slider-time) .jw-buffer{background-color:rgba(255,255,255,.4)}.jw-flag-touch .jw-horizontal-volume-container::before,.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time)::before{height:44px;width:100%;content:"";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jw-breakpoint-0.jw-flag-touch .jw-horizontal-volume-container::before,.jw-breakpoint-0.jw-flag-touch .jw-slider-time:not(.jw-chapter-slider-time)::before{height:34px}.jw-horizontal-volume-container.jw-tab-focus:focus .jw-rail,.jw-slider-time:not(.jw-chapter-slider-time).jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-flag-horizontal-slider .jw-overlay{display:none}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container{display:flex;transition:width .3s cubic-bezier(0,.25,.25,1);width:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open{width:140px}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume{padding-right:12px;opacity:1}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume{transition:opacity .3s;opacity:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob{transform:translate(-50%,-50%)}.jw-flag-audio-player .jw-button-container .jw-icon,.jwplayer:not(.jw-flag-small-player) .jw-button-container .jw-icon{flex:0 0 auto}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time{height:17px;padding:0}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-slider-container{height:10px}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-knob{border-radius:0;border:1px solid rgba(0,0,0,.75);height:12px;width:10px}.jw-breakpoint-0 .jw-slider-time{height:11px}.jw-horizontal-volume-container{display:none}.jw-slider-horizontal.jw-chapter-slider-time{height:16px;width:100%;align-items:center;background:transparent none;padding:0 12px;outline:0}.jw-slider-horizontal.jw-chapter-slider-time .jw-old-buffer,.jw-slider-horizontal.jw-chapter-slider-time .jw-old-progress,.jw-slider-horizontal.jw-chapter-slider-time .jw-old-rail{position:absolute;cursor:pointer}.jw-slider-horizontal.jw-chapter-slider-time .jw-old-rail{width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;display:flex;background-color:rgba(0,0,0,0)}.jw-slider-horizontal.jw-chapter-slider-time .jw-old-buffer,.jw-slider-horizontal.jw-chapter-slider-time .jw-old-progress{opacity:0;pointer-events:none}.jw-slider-horizontal.jw-chapter-slider-time .jw-cue{width:3px;height:100%}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container{z-index:1;height:100%}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container:hover .jw-knob{transform:translate(-50%,-50%) scale(1)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-horizontal-volume-container{display:none}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment{position:relative;flex:0 0 0px;height:100%}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment:hover .jw-timesegment-resetter{transform:translate(0,-50%) scale(1,1)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment:hover .jw-timesegment-background{background-color:rgba(255,255,255,.49)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment:hover .jw-timesegment-buffered{background-color:rgba(0,0,0,0)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-resetter{height:5px;width:100%;top:50%;position:relative;transform:translate(0,-50%) scale(1,.6)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-container{height:100%;position:relative}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-bar{height:100%;position:absolute}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-background{width:100%;background-color:rgba(255,255,255,.3)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-buffered{width:0%;background-color:rgba(255,255,255,.3)}.jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container .jw-timesegment-progress{width:0%;background-color:#f2f2f2}.jw-flag-touch .jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container::before{height:44px;width:100%;content:"";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jw-breakpoint-0.jw-flag-touch .jw-slider-horizontal.jw-chapter-slider-time::before{height:34px}.jw-flag-dragging .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter,.jw-flag-touch .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter{transform:translate(0,-50%) scale(1,1)}.jw-slider-horizontal.jw-chapter-slider-time:focus .jw-knob,.jw-slider-horizontal.jw-chapter-slider-time:hover .jw-knob{transform:translate(-50%,-50%) scale(1)}.jw-slider-horizontal.jw-chapter-slider-time.jw-tab-focus:focus .jw-old-rail{outline:solid 2px #4d90fe}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container{height:100%}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter{height:10px}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-horizontal.jw-chapter-slider-time .jw-knob{border-radius:0;border:1px solid rgba(0,0,0,.75);height:12px;width:10px}.jw-breakpoint-0 .jw-slider-horizontal.jw-chapter-slider-time{height:11px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-horizontal.jw-chapter-slider-time{padding:0 60px;height:34px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-horizontal.jw-chapter-slider-time .jw-slider-container{height:100%}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-horizontal.jw-chapter-slider-time .jw-timesegment-resetter{height:10px}.jw-modal{width:284px}.jw-breakpoint-5 .jw-modal,.jw-breakpoint-6 .jw-modal,.jw-breakpoint-7 .jw-modal{height:232px}.jw-breakpoint-3 .jw-modal,.jw-breakpoint-4 .jw-modal{height:192px}.jw-breakpoint-2 .jw-modal,.jw-flag-small-player .jw-modal{bottom:0;right:0;height:100%;width:100%;max-height:none;max-width:none;z-index:2}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick .jw-rightclick-list{border-radius:1px;list-style:none;margin:0;padding:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item{background-color:rgba(0,0,0,.8);border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo{color:#fff;display:inline-flex;padding:0 10px 0 0;vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo .jw-svg-icon{height:20px;width:20px}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-link{border:none;color:#fff;display:block;font-size:11px;font-weight:400;line-height:1em;padding:15px 23px;text-align:start;text-decoration:none;width:100%}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:last-child{border-bottom:none}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:hover{cursor:pointer}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured{vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link{color:#fff}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link span{color:#fff;font-size:12px}.jwplayer .jw-rightclick .jw-rightclick-link{border:none;background-color:transparent;outline:0;cursor:pointer}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;pointer-events:auto;transition-delay:0s}.jw-icon-tooltip.jw-open .jw-overlay:focus{outline:0}.jw-icon-tooltip.jw-open .jw-overlay:focus.jw-tab-focus{outline:solid 2px #4d90fe}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-slider-time .jw-icon-tooltip.jw-open .jw-overlay{pointer-events:none}.jw-volume-tip{padding:13px 0 26px}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{height:auto;width:100%;box-shadow:0 0 10px rgba(0,0,0,.4);color:#fff;display:block;margin:0 0 14px;pointer-events:none;position:relative;z-index:0;background-color:#fff}.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after,.jw-time-tip::after{top:100%;position:absolute;left:50%;height:14px;width:14px;border-radius:1px;background-color:currentColor;transform-origin:75% 50%;transform:translate(-50%,-50%) rotate(45deg);z-index:-1}.jw-controlbar .jw-tooltip .jw-text,.jw-settings-menu .jw-tooltip .jw-text,.jw-time-tip .jw-text{background-color:#fff;border-radius:1px;color:#000;font-size:10px;height:auto;line-height:1;padding:7px 10px;display:inline-block;min-width:100%;vertical-align:middle;min-height:2.4em}.jw-controlbar .jw-overlay{position:absolute;bottom:100%;left:50%;margin:0;min-height:44px;min-width:44px;opacity:0;pointer-events:none;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s,150ms;transform:translate(-50%,0);width:100%;z-index:1}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 .5em;font-size:.8em;margin:0}.jw-controlbar .jw-option::before{padding-right:.125em}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{position:absolute;bottom:100%;left:50%;opacity:0;transform:translate(-50%,0);transition:.1s 0s cubic-bezier(0,.25,.25,1);transition-property:opacity,transform,visibility;visibility:hidden;white-space:nowrap;width:auto;z-index:1}.jw-controlbar .jw-tooltip.jw-open,.jw-settings-menu .jw-tooltip.jw-open{opacity:1;transform:translate(-50%,-10px);transition-duration:150ms;transition-delay:.5s,0s,.5s;visibility:visible}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen{left:auto;right:0;transform:translate(0,0)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen.jw-open,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen.jw-open{transform:translate(0,-10px)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen::after,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen::after{left:auto;right:9px}.jw-tooltip-time{height:auto;width:0;bottom:100%;line-height:normal;padding:0;pointer-events:none;-webkit-user-select:none;user-select:none}.jw-tooltip-time .jw-overlay{bottom:0;min-height:0;width:auto}.jw-tooltip{bottom:57px;display:none;position:absolute}.jw-tooltip .jw-text{height:100%;white-space:nowrap;text-overflow:ellipsis;direction:unset;max-width:246px;overflow:hidden}.jw-flag-audio-player .jw-tooltip{display:none}.jw-flag-small-player .jw-time-thumb{display:none}.jw-chapter-slider-time .jw-tooltip-time .jw-overlay:before{height:1em;top:auto}.jw-chapter-slider-time .jw-tooltip-time .jw-icon-tooltip.jw-open .jw-overlay{pointer-events:none}.jwplayer .jw-shortcuts-tooltip{top:50%;position:absolute;left:50%;background:rgba(38,38,38,.8);transform:translate(-50%,-50%);display:none;color:#fff;pointer-events:all;-webkit-user-select:text;user-select:text;overflow:hidden;flex-direction:column;z-index:1}.jwplayer .jw-shortcuts-tooltip.jw-open{display:flex}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-close{flex:0 0 auto;margin:5px 5px 5px auto}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container{display:flex;flex:1 1 auto;flex-flow:column;font-size:12px;margin:0 20px 20px;overflow-y:auto;padding:5px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar{background-color:transparent;width:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-title{font-weight:700}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-header{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list{display:flex;max-width:340px;margin:0 10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-tooltip-descriptions{width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row{display:flex;align-items:center;justify-content:space-between;margin:10px 0;width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-description{margin-right:10px;max-width:70%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-key{background:#fefefe;color:#333;overflow:hidden;padding:7px 10px;text-overflow:ellipsis;white-space:nowrap}.jw-skip{color:rgba(255,255,255,.8);cursor:default;position:absolute;display:flex;right:.75em;bottom:56px;padding:.5em;border:1px solid #333;background-color:#000;align-items:center;height:2em}.jw-skip.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-skip.jw-skippable{cursor:pointer;padding:.25em .75em}.jw-skip.jw-skippable:hover{cursor:pointer;color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;height:24px;width:24px;margin:0}.jw-breakpoint-7 .jw-skip{padding:1.35em 1em;bottom:130px}.jw-breakpoint-7 .jw-skip .jw-text{font-size:1em;font-weight:400}.jw-breakpoint-7 .jw-skip .jw-icon-inline{height:30px;width:30px}.jw-breakpoint-7 .jw-skip .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em;padding:0 .5em;pointer-events:none}.jw-skip .jw-skip-icon .jw-svg-icon-next{display:block;padding:0}.jw-skip .jw-skip-icon,.jw-skip .jw-text{vertical-align:middle;font-size:.7em}.jw-skip .jw-text{font-weight:700}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:linear-gradient(180deg,rgba(25,25,25,.75),rgba(25,25,25,.25),rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint--1 .jw-cast-text,.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{position:absolute;bottom:66px;left:0;background-color:transparent;cursor:pointer;margin:0 auto;padding:12px;pointer-events:none;right:0;text-align:right;visibility:hidden;width:100%}.jw-info-open .jw-nextup-container,.jw-settings-open .jw-nextup-container{display:none}.jw-breakpoint-7 .jw-nextup-container{padding:60px}.jw-flag-small-player .jw-nextup-container{padding:0 12px 0 0}.jw-flag-small-player .jw-nextup-container .jw-nextup-close,.jw-flag-small-player .jw-nextup-container .jw-nextup-duration,.jw-flag-small-player .jw-nextup-container .jw-nextup-title{display:none}.jw-flag-small-player .jw-nextup-container .jw-nextup-tooltip{height:30px}.jw-flag-small-player .jw-nextup-container .jw-nextup-header{font-size:12px}.jw-flag-small-player .jw-nextup-container .jw-nextup-body{justify-content:center;align-items:center;padding:.75em .3em}.jw-flag-small-player .jw-nextup-container .jw-nextup-thumbnail{width:50%}.jw-flag-small-player .jw-nextup-container .jw-nextup{max-width:65px}.jw-flag-small-player .jw-nextup-container .jw-nextup.jw-nextup-thumbnail-visible{max-width:120px}.jw-nextup{background:rgba(38,38,38,.8);border-radius:0;box-shadow:0 0 10px rgba(0,0,0,.5);color:rgba(255,255,255,.8);display:inline-block;max-width:280px;overflow:hidden;opacity:0;position:relative;width:64%;pointer-events:all;transform:translate(0,-5px);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform;transition-delay:0s}.jw-nextup:hover .jw-nextup-tooltip{color:#fff}.jw-nextup.jw-nextup-thumbnail-visible{max-width:400px}.jw-nextup.jw-nextup-thumbnail-visible .jw-nextup-thumbnail{display:block}.jw-nextup-container-visible{visibility:visible}.jw-nextup-container-visible .jw-nextup{opacity:1;transform:translate(0,0);transition-delay:0s,0s,150ms}.jw-nextup-tooltip{display:flex;height:80px}.jw-nextup-thumbnail{width:120px;background-position:center;background-size:cover;flex:0 0 auto;display:none}.jw-nextup-body{flex:1 1 auto;overflow:hidden;padding:.75em .875em;display:flex;flex-flow:column wrap;justify-content:space-between}.jw-nextup-header,.jw-nextup-title{font-size:14px;line-height:1.35}.jw-nextup-header{font-weight:700}.jw-nextup-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-duration{align-self:flex-end;text-align:right;font-size:12px}.jw-nextup-close{height:24px;width:24px;border:none;color:rgba(255,255,255,.8);cursor:pointer;margin:6px;visibility:hidden}.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{visibility:visible}.jw-nextup-firefox-pip-fix{background:#262626}.jw-autostart-mute{position:absolute;bottom:0;right:12px;height:44px;width:44px;background-color:rgba(33,33,33,.4);padding:5px 4px 5px 6px;display:none}.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio) .jw-nextup{display:none}.jw-settings-menu{position:absolute;bottom:57px;right:12px;align-items:flex-start;background-color:#262626;display:none;flex-flow:column nowrap;max-width:284px;pointer-events:auto}.jw-settings-open .jw-settings-menu{display:flex}.jw-breakpoint-7 .jw-settings-menu{bottom:130px;right:60px;max-height:none;max-width:none;height:35%;width:25%;min-height:200px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline{height:60px;width:60px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-tooltip .jw-text{font-size:1em}.jw-breakpoint-7 .jw-settings-menu .jw-settings-back{min-width:60px}.jw-breakpoint-5 .jw-settings-menu,.jw-breakpoint-6 .jw-settings-menu{height:232px;width:284px;max-height:232px}.jw-breakpoint-3 .jw-settings-menu,.jw-breakpoint-4 .jw-settings-menu{height:192px;width:284px;max-height:192px}.jw-breakpoint-2 .jw-settings-menu{height:179px;width:284px;max-height:179px}.jw-flag-small-player .jw-settings-menu{max-width:none}.jw-settings-menu .jw-icon.jw-button-color::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-settings-menu .jw-icon.jw-button-color[aria-expanded=true]::after{opacity:1}.jw-settings-menu .jw-settings-reset{text-decoration:underline}.jw-settings-topbar{align-items:center;background-color:rgba(0,0,0,.4);display:flex;flex:0 0 auto;padding:3px 5px 0;width:100%}.jw-settings-topbar.jw-nested-menu-open{padding:0}.jw-settings-topbar.jw-nested-menu-open .jw-icon:not(.jw-settings-close):not(.jw-settings-back){display:none}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-close{width:20px}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-arrow-left{height:12px}.jw-settings-topbar.jw-nested-menu-open .jw-settings-topbar-text{display:block;outline:0}.jw-settings-topbar .jw-settings-back{min-width:44px}.jw-settings-topbar .jw-settings-topbar-buttons{display:inherit;width:100%;height:100%}.jw-settings-topbar .jw-settings-topbar-text{display:none;color:#fff;font-size:13px;width:100%}.jw-settings-topbar .jw-settings-close{margin-left:auto}.jw-settings-submenu{display:none;flex:1 1 auto;overflow-y:auto;padding:8px 20px 0 5px}.jw-settings-submenu::-webkit-scrollbar{background-color:transparent;width:6px}.jw-settings-submenu::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jw-settings-submenu.jw-settings-submenu-active{display:block}.jw-settings-submenu .jw-submenu-topbar{box-shadow:0 2px 9px 0 #1d1d1d;background-color:#2f2d2d;margin:-8px -20px 0 -5px}.jw-settings-submenu .jw-submenu-topbar .jw-settings-content-item{cursor:pointer;text-align:right;padding-right:15px;text-decoration:underline}.jw-settings-submenu .jw-settings-value-wrapper{float:right;display:flex;align-items:center}.jw-settings-submenu .jw-settings-value-wrapper .jw-settings-content-item-arrow{display:flex}.jw-settings-submenu .jw-settings-value-wrapper .jw-svg-icon-arrow-right{width:8px;margin-left:5px;height:12px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item{font-size:1em;padding:11px 15px 11px 30px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-settings-item-active::before{justify-content:flex-end}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-auto-label{font-size:.85em;padding-left:10px}.jw-flag-touch .jw-settings-submenu{overflow-y:scroll;-webkit-overflow-scrolling:touch}.jw-auto-label{font-size:10px;font-weight:initial;opacity:.75;padding-left:5px}.jw-settings-content-item{position:relative;color:rgba(255,255,255,.8);cursor:pointer;font-size:12px;line-height:1;padding:7px 0 7px 15px;width:100%;text-align:left;outline:0}.jw-settings-content-item:hover{color:#fff}.jw-settings-content-item:focus{font-weight:700}.jw-flag-small-player .jw-settings-content-item{line-height:1.75}.jw-settings-content-item.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-settings-item-active{font-weight:700;position:relative}.jw-settings-item-active::before{height:100%;width:1em;align-items:center;content:"\\2022";display:inline-flex;justify-content:center}.jw-breakpoint-2 .jw-settings-open .jw-display-container,.jw-flag-small-player .jw-settings-open .jw-display-container,.jw-flag-touch .jw-settings-open .jw-display-container{display:none}.jw-breakpoint-2 .jw-settings-open.jw-controls,.jw-flag-small-player .jw-settings-open.jw-controls,.jw-flag-touch .jw-settings-open.jw-controls{z-index:1}.jw-flag-small-player .jw-settings-open .jw-controlbar{display:none}.jw-settings-open .jw-icon-settings::after{opacity:1}.jw-settings-open .jw-tooltip-settings{display:none}.jw-sharing-link{cursor:pointer}.jw-shortcuts-container .jw-switch{position:relative;display:flex;align-items:center;transition:ease-out .15s;transition-property:opacity,background;border-radius:18px;width:80px;height:20px;padding:10px;background:rgba(80,80,80,.8);cursor:pointer;font-size:inherit;vertical-align:middle;outline:0}.jw-shortcuts-container .jw-switch.jw-tab-focus{border:solid 2px #4d90fe}.jw-shortcuts-container .jw-switch .jw-switch-knob{position:absolute;left:1px;transition:ease-out .15s;box-shadow:0 0 10px rgba(0,0,0,.4);border-radius:13px;width:15px;height:15px;background:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled,.jw-shortcuts-container .jw-switch .jw-switch-enabled{position:absolute;transition:inherit;color:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled{right:8px}.jw-shortcuts-container .jw-switch .jw-switch-enabled{left:8px;opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true]{background:#475470}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-disabled{opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-enabled{opacity:1}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-knob{left:60px}.jw-idle-icon-text{display:none;line-height:1;position:absolute;text-align:center;text-indent:.35em;top:100%;white-space:nowrap;left:50%;transform:translateX(-50%)}.jw-idle-label{border-radius:50%;color:#fff;filter:drop-shadow(1px 1px 5px rgba(12, 26, 71, .25));font:400 16px/1 Arial,Helvetica,sans-serif;position:relative;transition:background-color 150ms cubic-bezier(0,.25,.25,1);transition-property:background-color,filter;-webkit-font-smoothing:antialiased}.jw-state-idle .jw-icon-display.jw-idle-label .jw-idle-icon-text{display:block}.jw-state-idle .jw-icon-display.jw-idle-label .jw-svg-icon-play{transform:scale(.7,.7)}.jw-breakpoint--1.jw-state-idle .jw-icon-display.jw-idle-label,.jw-breakpoint-0.jw-state-idle .jw-icon-display.jw-idle-label{font-size:12px}@supports (filter:drop-shadow(0 0 3px #000)){.jwplayer.jw-ab-drop-shadow .jw-controls .jw-icon.jw-text,.jwplayer.jw-ab-drop-shadow .jw-controls .jw-svg-icon,.jwplayer.jw-ab-drop-shadow .jw-slider-container .jw-rail,.jwplayer.jw-ab-drop-shadow .jw-title{text-shadow:none;box-shadow:none;filter:drop-shadow(0 2px 3px rgba(0, 0, 0, .3))}.jwplayer.jw-ab-drop-shadow .jw-button-color{opacity:.8;transition-property:color,opacity}.jwplayer.jw-ab-drop-shadow .jw-button-color:not(:hover){color:#fff;opacity:.8}.jwplayer.jw-ab-drop-shadow .jw-button-color:hover{opacity:1}.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.00787) 10.79%, hsla(0, 0%, 0%, 0.02963) 21.99%, hsla(0, 0%, 0%, 0.0625) 33.34%, hsla(0, 0%, 0%, 0.1037) 44.59%, hsla(0, 0%, 0%, 0.15046) 55.48%, hsla(0, 0%, 0%, 0.2) 65.75%, hsla(0, 0%, 0%, 0.24954) 75.14%, hsla(0, 0%, 0%, 0.2963) 83.41%, hsla(0, 0%, 0%, 0.3375) 90.28%, hsla(0, 0%, 0%, 0.37037) 95.51%, hsla(0, 0%, 0%, 0.39213) 98.83%, hsla(0, 0%, 0%, 0.4));mix-blend-mode:multiply;transition-property:opacity}.jw-state-idle.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0.2), hsla(0, 0%, 0%, 0.19606) 1.17%, hsla(0, 0%, 0%, 0.18519) 4.49%, hsla(0, 0%, 0%, 0.16875) 9.72%, hsla(0, 0%, 0%, 0.14815) 16.59%, hsla(0, 0%, 0%, 0.12477) 24.86%, hsla(0, 0%, 0%, 0.1) 34.25%, hsla(0, 0%, 0%, 0.07523) 44.52%, hsla(0, 0%, 0%, 0.05185) 55.41%, hsla(0, 0%, 0%, 0.03125) 66.66%, hsla(0, 0%, 0%, 0.01481) 78.01%, hsla(0, 0%, 0%, 0.00394) 89.21%, hsla(0, 0%, 0%, 0));background-size:100% 7rem;background-position:50% 0}.jwplayer.jw-ab-drop-shadow.jw-state-idle .jw-controls{background-color:transparent}}.jw-video-thumbnail-container{position:relative;overflow:hidden}.jw-video-thumbnail-container:not(.jw-related-shelf-item-image){height:100%;width:100%}.jw-video-thumbnail-container.jw-video-thumbnail-generated{position:absolute;top:0;left:0}.jw-related-item-content:hover .jw-video-thumbnail-container,.jw-related-shelf-item:hover .jw-video-thumbnail-container,.jw-video-thumbnail-container:hover{cursor:pointer}.jw-related-item-content:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-related-shelf-item:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-video-thumbnail-container:hover .jw-video-thumbnail:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail{position:absolute;top:50%;left:50%;bottom:unset;transform:translate(-50%,-50%);width:100%;height:auto;min-width:100%;min-height:100%;opacity:0;transition:opacity .3s ease;object-fit:cover;background:#000}.jw-related-item-next-up .jw-video-thumbnail-container .jw-video-thumbnail{height:100%;width:auto}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-visible:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-completed{opacity:0}.jw-video-thumbnail-container .jw-video-thumbnail~.jw-svg-icon-play{display:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-shelf-item-aspect{pointer-events:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-item-poster-content{pointer-events:none}.jw-preview{overflow:hidden}.jw-preview .jw-ab-zoom-thumbnail{all:inherit;animation:jw-ab-zoom-thumbnail-animation 10s infinite}@keyframes jw-ab-zoom-thumbnail-animation{0%{transform:scale(1,1)}50%{transform:scale(1.25,1.25)}100%{transform:scale(1,1)}}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-state-idle .jw-controls{background:rgba(0,0,0,.4)}.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon:focus{border:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer{animation:jw-spin 2s linear infinite;display:block}@keyframes jw-spin{100%{transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-pause{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:block}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-controls-backdrop{opacity:0}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-logo-bottom-left,.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio):not(.jw-flag-autostart) .jw-logo-bottom-right{bottom:0}.jwplayer .jw-icon-playback .jw-svg-icon-stop{display:none}.jwplayer.jw-state-complete .jw-svg-icon-pause,.jwplayer.jw-state-error .jw-svg-icon-pause,.jwplayer.jw-state-idle .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-svg-icon-pause{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-complete .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-play{display:none}.jwplayer:not(.jw-state-buffering) .jw-svg-icon-buffer{display:none}.jwplayer:not(.jw-state-complete) .jw-svg-icon-replay{display:none}.jwplayer:not(.jw-state-error) .jw-svg-icon-error{display:none}.jwplayer.jw-state-complete .jw-display .jw-icon-display .jw-svg-icon-replay{display:block}.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-controls{background:rgba(0,0,0,.4);height:100%}.jw-state-idle .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-state-idle .jw-display-icon-next,.jw-state-idle .jw-display-icon-rewind,.jwplayer.jw-state-buffering .jw-display-icon-next,.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display-icon-rewind,body .jw-error .jw-display-icon-next,body .jw-error .jw-display-icon-rewind,body .jwplayer.jw-state-error .jw-display-icon-next,body .jwplayer.jw-state-error .jw-display-icon-rewind{display:none}body .jw-error .jw-icon-display,body .jwplayer.jw-state-error .jw-icon-display{cursor:default}body .jw-error .jw-icon-display .jw-svg-icon-error,body .jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-error{display:block}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-preview{display:none}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title{padding-top:4px}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-primary{width:auto;display:inline-block;padding-right:.5ch}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-secondary{width:auto;display:inline-block;padding-left:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-controlbar,body .jwplayer.jw-state-error .jw-controlbar{display:none}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-settings-menu,body .jwplayer.jw-state-error .jw-settings-menu{height:100%;top:50%;left:50%;transform:translate(-50%,-50%)}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-display,body .jwplayer.jw-state-error .jw-display{padding:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-left,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-right,body .jwplayer.jw-state-error .jw-logo-bottom-left,body .jwplayer.jw-state-error .jw-logo-bottom-right{bottom:0}.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting):not(.jw-flag-play-rejected) .jw-display,.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display{display:none}.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-next,.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-rewind{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-flag-casting:not(.jw-flag-audio-player) .jw-cast{display:block}.jwplayer.jw-flag-casting .jw-captions,.jwplayer.jw-flag-casting .jw-icon-audio-tracks,.jwplayer.jw-flag-casting .jw-icon-fullscreen,.jwplayer.jw-flag-casting .jw-icon-hd{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jw-state-paused.jw-flag-casting:not(.jw-flag-audio-player) .jw-display,.jw-state-playing.jw-flag-casting:not(.jw-flag-audio-player) .jw-display{display:flex}.jwplayer.jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-flag-cast-available .jw-icon-cast{display:flex}.jwplayer.jw-flag-cardboard-available .jw-icon-cardboard{display:flex}.jwplayer.jw-flag-live .jw-display-icon-rewind{visibility:hidden}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-live .jw-controlbar .jw-overlay:after{display:none}.jwplayer.jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-live .jw-text-duration,.jwplayer.jw-flag-live .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-text-live{cursor:default}.jwplayer.jw-flag-live .jw-text-live:hover{color:rgba(255,255,255,.8)}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-stop,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-stop{display:block}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-text-live{height:24px;width:auto;align-items:center;border-radius:1px;color:rgba(255,255,255,.8);display:flex;font-size:12px;font-weight:700;margin-right:10px;padding:0 1ch;text-rendering:geometricPrecision;text-transform:uppercase;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:box-shadow,color}.jw-text-live::before{height:8px;width:8px;background-color:currentColor;border-radius:50%;margin-right:6px;opacity:1;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-text-live.jw-dvr-live{box-shadow:inset 0 0 0 2px currentColor}.jw-text-live.jw-dvr-live::before{opacity:.5}.jw-text-live.jw-dvr-live:hover{color:#fff}.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-controls-hidden .jw-plugin{bottom:.5em}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{transform:translateY(66px)}.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{transform:translateY(4.25em)}.jw-flag-controls-hidden .jw-controlbar,.jw-flag-controls-hidden .jw-display{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-controls-hidden .jw-controls-backdrop{opacity:0}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{transform:translateY(66px)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{transform:translateY(4.25em)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-controls-hidden) .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-display{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-ads) .jw-autostart-mute{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-state-idle .jw-nextup-container{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-text-duration,.jwplayer.jw-flag-ads .jw-text-elapsed{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-display,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-rewind{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player.jw-state-buffering .jw-display-icon-display{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time{height:auto;padding:0;pointer-events:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-slider-container{height:5px}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-buffer,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-cue,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-icon-settings,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-knob,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-rail{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-progress{transform:none;top:auto}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline:not(.jw-icon-playback):not(.jw-icon-fullscreen):not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip:not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-tooltip{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-volume-tip{padding:13px 0}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-ads .jw-fullscreen-ima{display:none}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart .jw-controls .jw-controlbar{display:flex;pointer-events:all;visibility:visible;opacity:1}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart.jw-flag-user-inactive .jw-controls-backdrop,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-user-inactive .jw-controls-backdrop{opacity:1;background-size:100% 60px}.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls{background:0 0}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls::after{content:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls,.jwplayer.jw-flag-ads-hide-controls .jw-controls-backdrop{display:none!important}.jw-flag-overlay-open-related .jw-controls,.jw-flag-overlay-open-related .jw-logo,.jw-flag-overlay-open-related .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container{bottom:4.25em}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:flex}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display{display:none}.jw-flag-audio-player{background-color:#000}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-audio-player:not(.jw-flag-live) .jw-spacer{display:none}.jw-flag-audio-player .jw-display,.jw-flag-audio-player .jw-nextup-container,.jw-flag-audio-player .jw-preview,.jw-flag-audio-player .jw-title{display:none}.jw-flag-audio-player .jw-controlbar{position:relative}.jw-flag-audio-player .jw-controlbar .jw-button-container{padding-right:3px;padding-left:0;justify-content:flex-start}.jw-flag-audio-player .jw-controlbar .jw-icon-inline,.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-airplay,.jw-flag-audio-player .jw-controlbar .jw-icon-cast,.jw-flag-audio-player .jw-controlbar .jw-icon-next,.jw-flag-audio-player .jw-controlbar .jw-icon-playback,.jw-flag-audio-player .jw-controlbar .jw-icon-rewind,.jw-flag-audio-player .jw-controlbar .jw-icon-volume,.jw-flag-audio-player .jw-controlbar .jw-logo-button,.jw-flag-audio-player .jw-controlbar .jw-text-duration,.jw-flag-audio-player .jw-controlbar .jw-text-elapsed,.jw-flag-audio-player .jw-controlbar .jw-text-live{display:flex;flex:0 0 auto}.jw-flag-audio-player .jw-controlbar .jw-text-countdown,.jw-flag-audio-player .jw-controlbar .jw-text-duration{padding-right:10px}.jw-flag-audio-player .jw-controlbar .jw-chapter-slider-time,.jw-flag-audio-player .jw-controlbar .jw-slider-time{flex:0 1 auto;align-items:center;display:flex;order:1}.jw-flag-audio-player .jw-controlbar .jw-icon-volume{margin-right:0;transition:margin-right 150ms cubic-bezier(0,.25,.25,1)}.jw-flag-audio-player .jw-controlbar .jw-icon-volume .jw-overlay{display:none}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container~.jw-chapter-slider-time,.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container~.jw-slider-time{transition:opacity .3s,width .3s}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container.jw-open~.jw-chapter-slider-time,.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container.jw-open~.jw-slider-time{flex:1 1 auto;width:auto}.jw-flag-audio-player .jw-controlbar .jw-slider-volume~.jw-icon-volume{margin-right:140px}.jw-flag-audio-player.jw-breakpoint-1 .jw-horizontal-volume-container.jw-open~.jw-chapter-slider-time,.jw-flag-audio-player.jw-breakpoint-1 .jw-horizontal-volume-container.jw-open~.jw-slider-time,.jw-flag-audio-player.jw-breakpoint-2 .jw-horizontal-volume-container.jw-open~.jw-chapter-slider-time,.jw-flag-audio-player.jw-breakpoint-2 .jw-horizontal-volume-container.jw-open~.jw-slider-time{opacity:0}.jw-flag-audio-player.jw-flag-small-player .jw-text-duration,.jw-flag-audio-player.jw-flag-small-player .jw-text-elapsed{display:none}.jw-flag-audio-player.jw-flag-ads .jw-chapter-slider-time,.jw-flag-audio-player.jw-flag-ads .jw-slider-time{display:none}.jw-hidden{display:none}', ""]);
            const r = a
        },
        8901: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => r
            });
            var n = i(8081),
                s = i.n(n),
                o = i(3645),
                a = i.n(o)()(s());
            a.push([t.id, '.jw-reset{text-align:left;direction:ltr}.jw-reset,.jw-reset-text{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-transform:none;vertical-align:baseline;border:0;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}body .jw-error,body .jwplayer.jw-state-error{height:100%;width:100%}.jw-title{position:absolute;top:0}.jw-background-color{background:rgba(0,0,0,.4)}.jw-text{color:rgba(255,255,255,.8)}.jw-knob{color:rgba(255,255,255,.8);background-color:#fff}.jw-button-color{color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):focus,:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):hover{color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:rgba(255,255,255,.8)}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:0}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-rail{background:rgba(255,255,255,.3)}.jw-buffer{background:rgba(255,255,255,.3)}.jw-progress{background:#f2f2f2}.jw-time-tip,.jw-volume-tip{border:0}.jw-slider-volume.jw-volume-tip.jw-background-color.jw-slider-vertical{background:0 0}.jw-skip{padding:.5em;outline:0}.jw-skip .jw-skip-icon,.jw-skip .jw-skiptext{color:rgba(255,255,255,.8)}.jw-skip.jw-skippable:focus .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-skip-icon{color:#fff}.jw-icon-cast google-cast-launcher{--connected-color:#fff;--disconnected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast google-cast-launcher:focus{outline:0}.jw-icon-cast google-cast-launcher.jw-off{--connected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast:focus google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast:hover google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-color-active{color:#fff;stroke:#fff;border-color:#fff}:not(.jw-flag-touch) .jw-color-active-hover:focus,:not(.jw-flag-touch) .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}.jw-option{color:rgba(255,255,255,.8)}.jw-option.jw-active-option{color:#fff;background-color:rgba(255,255,255,.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;outline:0}.jwplayer *{box-sizing:inherit}.jwplayer.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:66px}.jw-breakpoint-7 .jw-plugin{bottom:132px}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-captions,.jw-preview,.jw-title{pointer-events:none}.jw-logo,.jw-media{pointer-events:all}.jw-wrapper{background-color:#000;position:absolute;top:0;left:0;right:0;bottom:0}.jw-hidden-accessibility{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.jw-contract-trigger::before{content:"";overflow:hidden;width:200%;height:200%;display:block;position:absolute;top:0;left:0}.jwplayer .jw-media video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:0 0;-webkit-tap-highlight-color:transparent;-webkit-focus-ring-color:transparent;outline:0}.jwplayer .jw-media video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform .jw-media video{object-fit:contain}.jwplayer.jw-stretch-none .jw-media video{object-fit:none}.jwplayer.jw-stretch-fill .jw-media video{object-fit:cover}.jwplayer.jw-stretch-exactfit .jw-media video{object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jw-preview{background-size:cover}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;padding-top:20px;width:100%;z-index:1}.jw-title-primary,.jw-title-secondary{color:#fff;padding-left:20px;padding-right:20px;padding-bottom:.5em;overflow:hidden;text-overflow:ellipsis;direction:unset;white-space:nowrap;width:100%}.jw-title-primary{font-size:1.625em}.jw-breakpoint-2 .jw-title-primary,.jw-breakpoint-3 .jw-title-primary{font-size:1.5em}.jw-flag-small-player .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-primary{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;padding-bottom:0;margin-bottom:.5em;white-space:pre-wrap;line-height:1.2}.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary{font-size:1em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-secondary,.jw-flag-small-player .jw-title-secondary,.jw-title-secondary:empty{display:none}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5;width:100%}.jw-text-track-cue{background-color:rgba(0,0,0,.5);color:#fff;padding:.1em .3em}.jwplayer video::-webkit-media-controls{display:none;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jwplayer.jw-flag-media-audio.jw-state-playing .jw-captions,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden) .jw-captions,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing) .jw-captions{max-height:calc(100% - 60px)}.jwplayer.jw-flag-media-audio.jw-state-playing:not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container{max-height:calc(100% - 60px)}.jw-logo{position:absolute;margin:20px;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto;outline:0}.jw-logo.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{left:0}.jw-logo-bottom-right{right:0}.jw-logo-bottom-left,.jw-logo-bottom-right{bottom:44px;transition:bottom 150ms cubic-bezier(0,.25,.25,1)}.jw-state-idle .jw-logo{z-index:1}.jw-state-setup .jw-wrapper{background-color:inherit}.jw-state-setup .jw-controls,.jw-state-setup .jw-controls-backdrop,.jw-state-setup .jw-logo{visibility:hidden}span.jw-break{display:block}body .jw-error,body .jwplayer.jw-state-error{background-color:#333;color:#fff;font-size:16px;display:table;opacity:1;position:relative}body .jw-error .jw-display,body .jwplayer.jw-state-error .jw-display{display:none}body .jw-error .jw-media,body .jwplayer.jw-state-error .jw-media{cursor:default}body .jw-error .jw-preview,body .jwplayer.jw-state-error .jw-preview{background-color:#333}body .jw-error .jw-error-msg,body .jwplayer.jw-state-error .jw-error-msg{background-color:#000;border-radius:2px;display:flex;flex-direction:row;align-items:stretch;padding:20px}body .jw-error .jw-error-msg .jw-icon,body .jwplayer.jw-state-error .jw-error-msg .jw-icon{height:30px;width:30px;margin-right:20px;flex:0 0 auto;align-self:center}body .jw-error .jw-error-msg .jw-icon:empty,body .jwplayer.jw-state-error .jw-error-msg .jw-icon:empty{display:none}body .jw-error .jw-error-msg .jw-info-container,body .jwplayer.jw-state-error .jw-error-msg .jw-info-container{margin:0;padding:0}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg{flex-direction:column}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text{text-align:center}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon{flex:.5 0 auto;margin-right:0;margin-bottom:20px}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break{display:inline}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break:before{content:" "}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg{height:100%;width:100%;top:0;position:absolute;left:0;background:#000;transform:none;padding:4px 16px;z-index:1}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg.jw-info-overlay{max-width:none;max-height:none}.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-title,body .jwplayer.jw-state-error .jw-title{display:block}.jw-state-idle .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-preview,body .jwplayer.jw-state-error .jw-preview{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-floating{background-size:cover;background-color:#000}.jw-flag-floating.jw-floating-dismissible .jw-wrapper{bottom:3rem}.jw-flag-floating .jw-wrapper{position:fixed;z-index:2147483647;top:auto;bottom:1rem;left:auto;right:1rem;max-width:400px;max-height:400px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating .jw-wrapper:not(.jw-floating-dragged){animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating .jw-wrapper{width:100%;left:0;right:0}}.jw-flag-floating .jw-wrapper.jw-floating-dragging{transition:none!important}.jw-flag-floating .jw-wrapper .jw-media{touch-action:none}@media screen and (max-device-width:480px) and (orientation:portrait){.jw-flag-touch.jw-flag-floating .jw-wrapper{animation:none;top:0;margin-top:62px;bottom:auto;max-width:none;max-height:none}}.jw-flag-floating .jw-icon{margin:0;padding:0}.jw-flag-floating .jw-float-bar-icon{pointer-events:all;cursor:pointer;display:flex;height:24px;width:24px}.jw-flag-floating .jw-float-bar-icon:hover{background:#1d1d1d;border-radius:100px}.jw-flag-floating .jw-float-bar-icon .jw-svg-icon{display:block;margin:auto;padding:0;height:10px;width:10px}.jw-flag-floating.jw-floating-dismissible .jw-dismiss-icon{display:none}.jw-flag-floating.jw-floating-dismissible .jw-float-bar{display:inline-flex;flex-direction:row;align-items:center;position:fixed;z-index:2147483647;top:100%;height:32px;width:100%;max-height:32px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating.jw-floating-dismissible .jw-float-bar:not(.jw-floating-dragged){animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating.jw-floating-dismissible .jw-float-bar{left:0;right:0;top:auto}}.jw-flag-floating.jw-floating-dismissible.jw-state-paused .jw-logo,.jw-flag-floating.jw-floating-dismissible:not(.jw-flag-user-inactive) .jw-logo{display:none}.jw-float-bar{display:none;position:absolute;padding:4px 8px;background:#2f2d2d;touch-action:none}.jw-float-bar-title{width:100%;max-height:24px;font-family:Arial,sans-serif;font-style:normal;font-weight:700;font-size:13px;line-height:16px;margin-left:0;padding-right:22px;color:rgba(255,255,255,.8)!important;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@keyframes jw-float-to-bottom{from{transform:translateY(100%)}to{transform:translateY(0)}}.jw-flag-top{margin-top:2em;overflow:visible}.jw-top{height:2em;line-height:2;pointer-events:none;text-align:center;opacity:.8;position:absolute;top:-2em;width:100%}.jw-top .jw-icon{cursor:pointer;pointer-events:all;height:auto;width:auto}.jw-top .jw-text{color:#555}', ""]);
            const r = a
        },
        3591: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => r
            });
            var n = i(8081),
                s = i.n(n),
                o = i(3645),
                a = i.n(o)()(s());
            a.push([t.id, ".jw-logo-button{pointer-events:none;width:132px}.jw-svg-icon-watermark{color:#ff0046;width:96px}.jw-controlbar .jw-svg-icon-jwplayer-logo{display:none;color:#ff0046}.jw-flag-small-player .jw-logo-button{width:44px}.jw-flag-small-player .jw-svg-icon-watermark{display:none}.jw-flag-small-player .jw-controlbar .jw-svg-icon-jwplayer-logo{display:block}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-logo-button{bottom:6px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline.jw-logo-button{width:186px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline.jw-logo-button .jw-svg-icon.jw-svg-icon-watermark{width:150px}", ""]);
            const r = a
        },
        2792: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => r
            });
            var n = i(8081),
                s = i.n(n),
                o = i(3645),
                a = i.n(o)()(s());
            a.push([t.id, ".jw-flag-outstream.jw-state-complete .jw-controls,.jw-flag-outstream.jw-state-complete .jw-controls-backdrop{display:none}.jw-flag-outstream.jw-state-complete .jw-media{pointer-events:none}.jw-flag-outstream.jw-state-complete .jw-preview{background-color:#f2f2f2}.jw-flag-outstream .jw-wrapper{transition:transform 250ms cubic-bezier(0,.25,.25,1)}.jw-flag-outstream .jw-dismiss-icon{position:absolute;right:0;bottom:0}.jw-flag-outstream-close{max-height:1px;animation:250ms jw-outstream-collapse 1 step-end}@keyframes jw-outstream-collapse{0%{max-height:initial}100%{max-height:1px}}.jw-flag-outstream-close .jw-wrapper{transform:scaleY(0)}.jw-flag-outstream-pending{max-height:1px;max-width:100%}.jw-flag-outstream-pending.jw-flag-top{margin-top:0;overflow:hidden}.jw-flag-outstream-pending .jw-wrapper{transform:scaleY(0)}", ""]);
            const r = a
        },
        8406: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => r
            });
            var n = i(8081),
                s = i.n(n),
                o = i(3645),
                a = i.n(o)()(s());
            a.push([t.id, '.jw-settings-content-item .jw-svg-icon{margin-right:1em;height:16px;width:16px;padding:0}.jw-settings-content-item .jw-tooltip{bottom:12px;left:50px;width:60px}.jw-settings-content-item .jw-tooltip.jw-open{transition:none}.jw-sharing-link{display:flex;align-items:center;line-height:16px;text-transform:capitalize}.jw-sharing-link:focus,.jw-sharing-link:hover{text-decoration:none}.jw-sharing-copy:after{background-color:#fff;border-radius:50px;bottom:20px;color:#000;content:"Copied";display:block;font-size:13px;font-weight:700;opacity:0;margin-left:-25px;left:50%;position:absolute;text-align:center;transform:translateY(10px);transition:all .2s ease-in-out;visibility:hidden;width:60px}.jw-sharing-copy-textarea-copied:after{opacity:1;transform:translateY(0);visibility:visible}.jw-sharing-copy .jw-sharing-link{padding:0}.jw-sharing-copy .jw-sharing-link:focus,.jw-sharing-copy .jw-sharing-link:hover{color:#fff}.jw-sharing-copy:focus,.jw-sharing-link:focus{outline:0}.jw-sharing-copy:active,.jw-sharing-link:active{color:#fff;font-weight:700}.jw-sharing-textarea{display:flex;opacity:0;height:1px;cursor:pointer}', ""]);
            const r = a
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
                        for (var r = 0; r < this.length; r++) {
                            var l = this[r][0];
                            null != l && (a[l] = !0)
                        }
                    for (var c = 0; c < t.length; c++) {
                        var d = [].concat(t[c]);
                        n && a[d[0]] || (void 0 !== o && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = o), i && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = i) : d[2] = i), s && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = s) : d[4] = "".concat(s)), e.push(d))
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
        6337: () => {
            ! function(t, e) {
                "use strict";
                if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) "isIntersecting" in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                });
                else {
                    var i = [];
                    s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.USE_MUTATION_OBSERVER = !0, s.prototype.observe = function(t) {
                        if (!this._observationTargets.some((function(e) {
                            return e.element == t
                        }))) {
                            if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                            this._registerInstance(), this._observationTargets.push({
                                element: t,
                                entry: null
                            }), this._monitorIntersections(), this._checkForIntersections()
                        }
                    }, s.prototype.unobserve = function(t) {
                        this._observationTargets = this._observationTargets.filter((function(e) {
                            return e.element != t
                        })), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                    }, s.prototype.disconnect = function() {
                        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                    }, s.prototype.takeRecords = function() {
                        var t = this._queuedEntries.slice();
                        return this._queuedEntries = [], t
                    }, s.prototype._initThresholds = function(t) {
                        var e = t || [0];
                        return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, i) {
                            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return t !== i[e - 1]
                        }))
                    }, s.prototype._parseRootMargin = function(t) {
                        var e = (t || "0px").split(/\s+/).map((function(t) {
                            var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                            if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(e[1]),
                                unit: e[2]
                            }
                        }));
                        return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                    }, s.prototype._monitorIntersections = function() {
                        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(t, "resize", this._checkForIntersections, !0), o(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }))))
                    }, s.prototype._unmonitorIntersections = function() {
                        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(t, "resize", this._checkForIntersections, !0), a(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                    }, s.prototype._checkForIntersections = function() {
                        var e = this._rootIsInDom(),
                            i = e ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                        this._observationTargets.forEach((function(s) {
                            var o = s.element,
                                a = r(o),
                                l = this._rootContainsTarget(o),
                                c = s.entry,
                                d = e && l && this._computeTargetAndRootIntersection(o, i),
                                h = s.entry = new n({
                                    time: t.performance && performance.now && performance.now(),
                                    target: o,
                                    boundingClientRect: a,
                                    rootBounds: i,
                                    intersectionRect: d
                                });
                            c ? e && l ? this._hasCrossedThreshold(c, h) && this._queuedEntries.push(h) : c && c.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h)
                        }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }, s.prototype._computeTargetAndRootIntersection = function(i, n) {
                        if ("none" != t.getComputedStyle(i).display) {
                            for (var s, o, a, l, d, h, u, p, w = r(i), g = c(i), m = !1; !m;) {
                                var j = null,
                                    f = 1 == g.nodeType ? t.getComputedStyle(g) : {};
                                if ("none" == f.display) return;
                                if (g == this.root || g == e ? (m = !0, j = n) : g != e.body && g != e.documentElement && "visible" != f.overflow && (j = r(g)), j && (s = j, o = w, a = void 0, l = void 0, d = void 0, h = void 0, u = void 0, p = void 0, a = Math.max(s.top, o.top), l = Math.min(s.bottom, o.bottom), d = Math.max(s.left, o.left), h = Math.min(s.right, o.right), p = l - a, !(w = (u = h - d) >= 0 && p >= 0 && {
                                    top: a,
                                    bottom: l,
                                    left: d,
                                    right: h,
                                    width: u,
                                    height: p
                                }))) break;
                                g = c(g)
                            }
                            return w
                        }
                    }, s.prototype._getRootRect = function() {
                        var t;
                        if (this.root) t = r(this.root);
                        else {
                            var i = e.documentElement,
                                n = e.body;
                            t = {
                                top: 0,
                                left: 0,
                                right: i.clientWidth || n.clientWidth,
                                width: i.clientWidth || n.clientWidth,
                                bottom: i.clientHeight || n.clientHeight,
                                height: i.clientHeight || n.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(t)
                    }, s.prototype._expandRectByRootMargin = function(t) {
                        var e = this._rootMarginValues.map((function(e, i) {
                                return "px" == e.unit ? e.value : e.value * (i % 2 ? t.width : t.height) / 100
                            })),
                            i = {
                                top: t.top - e[0],
                                right: t.right + e[1],
                                bottom: t.bottom + e[2],
                                left: t.left - e[3]
                            };
                        return i.width = i.right - i.left, i.height = i.bottom - i.top, i
                    }, s.prototype._hasCrossedThreshold = function(t, e) {
                        var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                            n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                        if (i !== n)
                            for (var s = 0; s < this.thresholds.length; s++) {
                                var o = this.thresholds[s];
                                if (o == i || o == n || o < i != o < n) return !0
                            }
                    }, s.prototype._rootIsInDom = function() {
                        return !this.root || l(e, this.root)
                    }, s.prototype._rootContainsTarget = function(t) {
                        return l(this.root || e, t)
                    }, s.prototype._registerInstance = function() {
                        i.indexOf(this) < 0 && i.push(this)
                    }, s.prototype._unregisterInstance = function() {
                        var t = i.indexOf(this); - 1 != t && i.splice(t, 1)
                    }, t.IntersectionObserver = s, t.IntersectionObserverEntry = n
                }

                function n(t) {
                    this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }, this.isIntersecting = !!t.intersectionRect;
                    var e = this.boundingClientRect,
                        i = e.width * e.height,
                        n = this.intersectionRect,
                        s = n.width * n.height;
                    this.intersectionRatio = i ? s / i : this.isIntersecting ? 1 : 0
                }

                function s(t, e) {
                    var i, n, s, o = e || {};
                    if ("function" != typeof t) throw new Error("callback must be a function");
                    if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
                    this._checkForIntersections = (i = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, s = null, function() {
                        s || (s = setTimeout((function() {
                            i(), s = null
                        }), n))
                    }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
                        return t.value + t.unit
                    })).join(" ")
                }

                function o(t, e, i, n) {
                    "function" == typeof t.addEventListener ? t.addEventListener(e, i, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, i)
                }

                function a(t, e, i, n) {
                    "function" == typeof t.removeEventListener ? t.removeEventListener(e, i, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, i)
                }

                function r(t) {
                    var e;
                    try {
                        e = t.getBoundingClientRect()
                    } catch (t) {}
                    return e ? (e.width && e.height || (e = {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    }), e) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function l(t, e) {
                    for (var i = e; i;) {
                        if (i == t) return !0;
                        i = c(i)
                    }
                    return !1
                }

                function c(t) {
                    var e = t.parentNode;
                    return e && 11 == e.nodeType && e.host ? e.host : e
                }
            }(window, document)
        },
        9725: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => j
            });
            var n = i(3379),
                s = i.n(n),
                o = i(7795),
                a = i.n(o),
                r = i(569),
                l = i.n(r),
                c = i(3565),
                d = i.n(c),
                h = i(9216),
                u = i.n(h),
                p = i(4589),
                w = i.n(p),
                g = i(4542),
                m = {};
            m.styleTagTransform = w(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = a(), m.insertStyleElement = u();
            s()(g.Z, m);
            const j = g.Z && g.Z.locals ? g.Z.locals : void 0
        },
        5430: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => j
            });
            var n = i(3379),
                s = i.n(n),
                o = i(7795),
                a = i.n(o),
                r = i(569),
                l = i.n(r),
                c = i(3565),
                d = i.n(c),
                h = i(9216),
                u = i.n(h),
                p = i(4589),
                w = i.n(p),
                g = i(8901),
                m = {};
            m.styleTagTransform = w(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = a(), m.insertStyleElement = u();
            s()(g.Z, m);
            const j = g.Z && g.Z.locals ? g.Z.locals : void 0
        },
        678: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => j
            });
            var n = i(3379),
                s = i.n(n),
                o = i(7795),
                a = i.n(o),
                r = i(569),
                l = i.n(r),
                c = i(3565),
                d = i.n(c),
                h = i(9216),
                u = i.n(h),
                p = i(4589),
                w = i.n(p),
                g = i(3591),
                m = {};
            m.styleTagTransform = w(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = a(), m.insertStyleElement = u();
            s()(g.Z, m);
            const j = g.Z && g.Z.locals ? g.Z.locals : void 0
        },
        8206: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => j
            });
            var n = i(3379),
                s = i.n(n),
                o = i(7795),
                a = i.n(o),
                r = i(569),
                l = i.n(r),
                c = i(3565),
                d = i.n(c),
                h = i(9216),
                u = i.n(h),
                p = i(4589),
                w = i.n(p),
                g = i(2792),
                m = {};
            m.styleTagTransform = w(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = a(), m.insertStyleElement = u();
            s()(g.Z, m);
            const j = g.Z && g.Z.locals ? g.Z.locals : void 0
        },
        3484: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => j
            });
            var n = i(3379),
                s = i.n(n),
                o = i(7795),
                a = i.n(o),
                r = i(569),
                l = i.n(r),
                c = i(3565),
                d = i.n(c),
                h = i(9216),
                u = i.n(h),
                p = i(4589),
                w = i.n(p),
                g = i(8406),
                m = {};
            m.styleTagTransform = w(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = a(), m.insertStyleElement = u();
            s()(g.Z, m);
            const j = g.Z && g.Z.locals ? g.Z.locals : void 0
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
                for (var o = {}, a = [], r = 0; r < t.length; r++) {
                    var l = t[r],
                        c = n.base ? l[0] + n.base : l[0],
                        d = o[c] || 0,
                        h = "".concat(c, " ").concat(d);
                    o[c] = d + 1;
                    var u = i(h),
                        p = {
                            css: l[1],
                            media: l[2],
                            sourceMap: l[3],
                            supports: l[4],
                            layer: l[5]
                        };
                    if (-1 !== u) e[u].references++, e[u].updater(p);
                    else {
                        var w = s(p, n);
                        n.byIndex = r, e.splice(r, 0, {
                            identifier: h,
                            updater: w,
                            references: 1
                        })
                    }
                    a.push(h)
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
                        var r = i(o[a]);
                        e[r].references--
                    }
                    for (var l = n(t, s), c = 0; c < o.length; c++) {
                        var d = i(o[c]);
                        0 === e[d].references && (e[d].updater(), e.splice(d, 1))
                    }
                    o = l
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