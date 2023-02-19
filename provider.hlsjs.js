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
    [98], {
        8377: (t, e, r) => {
            "use strict";
            r.d(e, {
                M: () => i,
                _: () => n
            });
            const i = function(t, e) {
                    let r;
                    const i = t.kind || "cc";
                    return r = t.default || t.defaulttrack ? "default" : t._id || t.file || i + e, r
                },
                n = function(t, e) {
                    let r = t.label || t.name || t.language;
                    return r || (r = "Unknown CC", (e += 1) > 1 && (r += ` [${e}]`)), {
                        label: r,
                        unknownCount: e
                    }
                }
        },
        6103: (t, e, r) => {
            "use strict";
            r.d(e, {
                VS: () => g,
                xl: () => f
            });
            var i = r(7477),
                n = r(2894),
                a = r(6886),
                s = r(7941),
                o = r(7387),
                l = r(2957),
                u = r(4446);
            const h = t => {
                throw new u.rG(null, t)
            };
            const d = function(t) {
                    return t.map((t => new i.Z(t.begin, t.end, t.text)))
                },
                c = function(t, e, i, a) {
                    let c, f, g = t.responseXML ? t.responseXML.firstChild : null;
                    if (g)
                        for ("xml" === (0, s.r1)(g) && (g = g.nextSibling); g && g.nodeType === g.COMMENT_NODE;) g = g.nextSibling;
                    try {
                        if (g && "tt" === (0, s.r1)(g)) {
                            if (!t.responseXML) throw new Error("Empty XML response");
                            c = function(t) {
                                t || h(306007);
                                const e = [];
                                let r = t.getElementsByTagName("p"),
                                    i = 30;
                                const n = t.getElementsByTagName("tt");
                                if (null != n && n[0]) {
                                    const t = parseFloat(n[0].getAttribute("ttp:frameRate") || "");
                                    isNaN(t) || (i = t)
                                }
                                r || h(306005), r.length || (r = t.getElementsByTagName("tt:p"), r.length || (r = t.getElementsByTagName("tts:p")));
                                for (let n = 0; n < r.length; n++) {
                                    const a = r[n],
                                        s = a.getElementsByTagName("br");
                                    for (let e = 0; e < s.length; e++) {
                                        const r = s[e];
                                        null != r && r.parentNode && r.parentNode.replaceChild(t.createTextNode("\r\n"), r)
                                    }
                                    const o = a.innerHTML || a.textContent || a.text || "",
                                        u = (0, l.fy)(o).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                                    if (u) {
                                        const t = a.getAttribute("begin") || "",
                                            r = a.getAttribute("dur") || "",
                                            n = a.getAttribute("end") || "",
                                            s = {
                                                begin: (0, l.m9)(t, i),
                                                text: u
                                            };
                                        n ? s.end = (0, l.m9)(n, i) : r && (s.end = (s.begin || 0) + (0, l.m9)(r, i)), e.push(s)
                                    }
                                }
                                return e.length || h(306005), e
                            }(t.responseXML), f = d(c), delete e.xhr, i(f)
                        } else {
                            const s = t.responseText;
                            s.indexOf("WEBVTT") >= 0 ? r.e(347).then(function(t) {
                                return r(2776).default
                            }.bind(null, r)).catch((0, n.Jt)(301131)).then((t => {
                                const r = new t(window);
                                f = [], r.oncue = function(t) {
                                    f.push(t)
                                }, r.onflush = function() {
                                    delete e.xhr, i(f)
                                }, r.parse(s)
                            })).catch((t => {
                                delete e.xhr, a((0, u.Mm)(null, u.Y7, t))
                            })) : (c = (0, o.Z)(s), f = d(c), delete e.xhr, i(f))
                        }
                    } catch (t) {
                        delete e.xhr, a((0, u.Mm)(null, u.Y7, t))
                    }
                },
                f = function(t, e, r) {
                    t.xhr = (0, a.h)(t.file, (function(i) {
                        c(i, t, e, r)
                    }), ((t, e, i, n) => {
                        r((0, u.l9)(n, u.Y7))
                    }))
                },
                g = function(t) {
                    t && t.forEach((t => {
                        const e = t.xhr;
                        e && (e.onload = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()), delete t.xhr
                    }))
                }
        },
        7387: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => a
            });
            var i = r(2957);
            const n = t => {
                const e = {};
                let r = t.split("\r\n");
                1 === r.length && (r = t.split("\n"));
                let n = 1;
                if (r[0].indexOf(" --\x3e ") > 0 && (n = 0), r.length > n + 1 && r[n + 1]) {
                    const t = r[n],
                        a = t.indexOf(" --\x3e ");
                    a > 0 && (e.begin = (0, i.m9)(t.substr(0, a)), e.end = (0, i.m9)(t.substr(a + 5)), e.text = r.slice(n + 1).join("\r\n"))
                }
                return e
            };

            function a(t) {
                const e = [];
                let r = (t = (0, i.fy)(t)).split("\r\n\r\n");
                1 === r.length && (r = t.split("\n\n"));
                for (let t = 0; t < r.length; t++) {
                    if ("WEBVTT" === r[t]) continue;
                    const i = n(r[t]);
                    i.text && e.push(i)
                }
                return e
            }
        },
        7477: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => a
            });
            let i = window.VTTCue;
            const n = t => {
                if ("string" != typeof t) return !1;
                return !!{
                    start: !0,
                    middle: !0,
                    end: !0,
                    left: !0,
                    right: !0
                } [t.toLowerCase()] && t.toLowerCase()
            };
            if (!i) {
                const t = "auto";
                i = function(e, r, i) {
                    const a = this;
                    a.hasBeenReset = !1;
                    let s = "",
                        o = !1,
                        l = e,
                        u = r,
                        h = i,
                        d = null,
                        c = "",
                        f = !0,
                        g = t,
                        v = "start",
                        p = t,
                        m = 100,
                        T = "middle";
                    Object.defineProperty(a, "id", {
                        enumerable: !0,
                        get: () => s,
                        set(t) {
                            s = `${t}`
                        }
                    }), Object.defineProperty(a, "pauseOnExit", {
                        enumerable: !0,
                        get: () => o,
                        set(t) {
                            o = Boolean(t)
                        }
                    }), Object.defineProperty(a, "startTime", {
                        enumerable: !0,
                        get: () => l,
                        set(t) {
                            if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                            l = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "endTime", {
                        enumerable: !0,
                        get: () => u,
                        set(t) {
                            if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                            u = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "text", {
                        enumerable: !0,
                        get: () => h,
                        set(t) {
                            h = `${t}`, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "region", {
                        enumerable: !0,
                        get: () => d,
                        set(t) {
                            d = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "vertical", {
                        enumerable: !0,
                        get: () => c,
                        set(t) {
                            const e = (t => "string" == typeof t && (!!{
                                "": !0,
                                lr: !0,
                                rl: !0
                            } [t.toLowerCase()] && t.toLowerCase()))(t);
                            if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                            c = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "snapToLines", {
                        enumerable: !0,
                        get: () => f,
                        set(t) {
                            f = Boolean(t), this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "line", {
                        enumerable: !0,
                        get: () => g,
                        set(e) {
                            if ("number" != typeof e && e !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
                            g = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "lineAlign", {
                        enumerable: !0,
                        get: () => v,
                        set(t) {
                            const e = n(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            v = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "position", {
                        enumerable: !0,
                        get: () => p,
                        set(t) {
                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                            p = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "size", {
                        enumerable: !0,
                        get: () => m,
                        set(t) {
                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                            m = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "align", {
                        enumerable: !0,
                        get: () => T,
                        set(t) {
                            const e = n(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            T = e, this.hasBeenReset = !0
                        }
                    }), a.displayState = void 0
                }, i.prototype.getCueAsHTML = function() {
                    return window.WebVTT.convertCueToDOMTree(window, this.text)
                }
            }
            const a = i
        },
        2728: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => a
            });
            var i = r(1643),
                n = r(6042);

            function a(t, e) {
                let r, a = e;
                return {
                    start() {
                        this.stop(), r = window.setInterval((() => {
                            const e = t.getBandwidthEstimate();
                            (0, n.qh)(e) && (a = e, t.trigger(i.qG, {
                                bandwidthEstimate: a
                            }))
                        }), 1e3)
                    },
                    stop() {
                        clearInterval(r)
                    },
                    getEstimate: () => a
                }
            }
        },
        548: (t, e, r) => {
            "use strict";
            r.d(e, {
                Zv: () => i,
                i0: () => a,
                pR: () => n
            });
            const i = 1,
                n = i + 1,
                a = 25
        },
        4506: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => i
            });
            const i = t => ({
                bitrate: t.bitrate,
                label: t.label,
                width: t.width,
                height: t.height
            })
        },
        3328: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => b
            });
            var i = r(6103),
                n = r(8377);
            const a = {
                    TIT2: "title",
                    TT2: "title",
                    WXXX: "url",
                    TPE1: "artist",
                    TP1: "artist",
                    TALB: "album",
                    TAL: "album"
                },
                s = (t, e) => {
                    const r = t.length;
                    let i, n, a, s = "",
                        o = e || 0;
                    for (; o < r;)
                        if (i = t[o++], 0 !== i && 3 !== i) switch (i >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                s += String.fromCharCode(i);
                                break;
                            case 12:
                            case 13:
                                n = t[o++], s += String.fromCharCode((31 & i) << 6 | 63 & n);
                                break;
                            case 14:
                                n = t[o++], a = t[o++], s += String.fromCharCode((15 & i) << 12 | (63 & n) << 6 | (63 & a) << 0)
                        }
                    return s
                },
                o = t => {
                    const e = (t => {
                        let e = "0x";
                        for (let r = 0; r < t.length; r++) t[r] < 16 && (e += "0"), e += t[r].toString(16);
                        return parseInt(e, 16)
                    })(t);
                    return 127 & e | (32512 & e) >> 1 | (8323072 & e) >> 2 | (2130706432 & e) >> 3
                },
                l = t => {
                    const e = {};
                    if (!("value" in t) && "data" in t && t.data instanceof ArrayBuffer) {
                        const e = new Uint8Array(t.data);
                        let r = e.length;
                        t = {
                            value: {
                                key: "",
                                data: ""
                            }
                        };
                        let i = 10;
                        for (; i < 14 && i < e.length && 0 !== e[i];) t.value.key += String.fromCharCode(e[i]), i++;
                        let n = 19,
                            a = e[n];
                        3 !== a && 0 !== a || (a = e[++n], r--);
                        let l = 0;
                        if (1 !== a && 2 !== a)
                            for (let t = n + 1; t < r; t++)
                                if (0 === e[t]) {
                                    l = t - n;
                                    break
                                } if (l > 0) {
                            const r = s(e.subarray(n, n += l), 0);
                            if ("PRIV" === t.value.key) {
                                if ("com.apple.streaming.transportStreamTimestamp" === r) {
                                    const r = 1 & o(e.subarray(n, n += 4)),
                                        i = o(e.subarray(n, n += 4)) + (r ? 4294967296 : 0);
                                    t.value.data = i
                                } else t.value.data = s(e, n + 1);
                                t.value.info = r
                            } else t.value.info = r, t.value.data = s(e, n + 1)
                        } else {
                            const r = e[n];
                            t.value.data = 1 === r || 2 === r ? ((t, e) => {
                                const r = t.length - 1;
                                let i = "",
                                    n = e || 0;
                                for (; n < r;) 254 === t[n] && 255 === t[n + 1] || (i += String.fromCharCode((t[n] << 8) + t[n + 1])), n += 2;
                                return i
                            })(e, n + 1) : s(e, n + 1)
                        }
                    }
                    if (function(t, e) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        return Object.prototype.hasOwnProperty.call(Object(t), e)
                    }(a, t.value.key) && (e[a[t.value.key]] = t.value.data), t.value.info) {
                        let r = e[t.value.key];
                        r !== Object(r) && (r = {}, e[t.value.key] = r), r[t.value.info] = t.value.data
                    } else e[t.value.key] = t.value.data;
                    return e
                };
            var u = r(8348),
                h = r(1643),
                d = r(6042);
            const c = (t, e, r) => {
                    null != e && e.length && (0, d.S6)(e, (function(e) {
                        const i = e._id || "";
                        if (r && (e._id = void 0), !u.Browser.ie && !u.Browser.safari || !t || !/^(native|subtitle|cc)/.test(i)) {
                            if (u.Browser.ie && "disabled" === e.mode || (e.mode = "disabled", e.mode = "hidden"), e.cues)
                                for (let t = e.cues.length; t--;) e.removeCue(e.cues[t]);
                            e.embedded || (e.mode = "disabled"), e.inuse = !1
                        }
                    }))
                },
                f = t => /^native(?:captions|subtitles)/.test(t),
                g = t => "captions" === t || "subtitles" === t,
                v = function(t) {
                    const e = t.target,
                        {
                            activeCues: r,
                            cues: i
                        } = e,
                        n = e._id,
                        a = this._cues,
                        s = this._activeCues;
                    if (null != i && i.length) {
                        const t = a[n];
                        a[n] = Array.prototype.slice.call(i), this.parseNativeID3Cues(i, t)
                    } else delete a[n];
                    if (null != r && r.length) {
                        const t = s[n],
                            e = s[n] = Array.prototype.slice.call(r);
                        this.triggerActiveCues(e, t)
                    } else delete s[n]
                },
                p = (t, e, r) => {
                    if (u.Browser.ie) {
                        let i = r;
                        (t || "metadata" === e.kind) && (i = new window.TextTrackCue(r.startTime, r.endTime, r.text), r.value && (i.value = r.value)), ((t, e) => {
                            const r = [],
                                i = t.mode;
                            t.mode = "hidden";
                            const n = t.cues;
                            if (n)
                                for (let i = n.length - 1; i >= 0 && n[i].startTime > e.startTime; i--) r.unshift(n[i]), t.removeCue(n[i]);
                            try {
                                t.addCue(e), r.forEach((e => t.addCue(e)))
                            } catch (t) {
                                console.error(t)
                            }
                            t.mode = i
                        })(e, i)
                    } else try {
                        e.addCue(r)
                    } catch (t) {
                        console.error(t)
                    }
                },
                m = function(t) {
                    const e = this._textTracks,
                        r = this._tracksById;
                    if (t.length > e.length) return !0;
                    for (let e = 0; e < t.length; e++) {
                        const i = t[e];
                        if (!i._id || !r[i._id]) return !0
                    }
                    return !1
                },
                T = function() {
                    const t = this.video.textTracks,
                        e = (0, d.hX)(t, (function(t) {
                            return (t.inuse || !t._id) && g(t.kind)
                        }));
                    if (!this._textTracks || m.call(this, e)) return void this.setTextTracks(t);
                    let r = -1;
                    for (let t = 0; t < this._textTracks.length; t++)
                        if ("showing" === this._textTracks[t].mode) {
                            r = t;
                            break
                        } r !== this._currentTextTrackIndex && this.setSubtitlesTrack(r + 1)
                },
                y = function(t) {
                    const e = t.track;
                    null != e && e._id || this.setTextTracks(this.video.textTracks)
                },
                E = (t, e) => t.startTime === e.startTime && t.endTime === e.endTime && t.text === e.text && t.data === e.data && JSON.stringify(t.value) === JSON.stringify(e.value),
                S = t => {
                    const e = l(t);
                    return {
                        metadataType: "id3",
                        metadataTime: t.startTime,
                        metadata: e
                    }
                },
                b = {
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
                    addTracksListener(t, e, r) {
                        t && (this.removeTracksListener(t, e, r), this.instreamMode || (t.addEventListener ? t.addEventListener(e, r) : t[`on${e}`] = r))
                    },
                    removeTracksListener(t, e, r) {
                        t && (t.removeEventListener && r ? t.removeEventListener(e, r) : t[`on${e}`] = null)
                    },
                    clearTracks() {
                        (0, i.VS)(this._itemTracks);
                        const {
                            _tracksById: t
                        } = this;
                        if (t && Object.keys(t).forEach((e => {
                            if (0 === e.indexOf("nativemetadata")) {
                                const r = t[e];
                                this.cueChangeHandler && r.removeEventListener("cuechange", this.cueChangeHandler), c(this.renderNatively, [r], !0)
                            }
                        })), this._itemTracks = null, this._textTracks = null, this._tracksById = null, this._cuesByTrackId = null, this._metaCuesByTextTime = null, this._unknownCount = 0, this._currentTextTrackIndex = -1, this._activeCues = {}, this._cues = {}, this.renderNatively) {
                            const t = this.video.textTracks;
                            this.textTrackChangeHandler && this.removeTracksListener(t, "change", this.textTrackChangeHandler), c(this.renderNatively, t, !0)
                        }
                    },
                    clearMetaCues() {
                        const {
                            _tracksById: t,
                            _cachedVTTCues: e
                        } = this;
                        t && e && Object.keys(t).forEach((r => {
                            if (0 === r.indexOf("nativemetadata")) {
                                const i = t[r];
                                c(this.renderNatively, [i], !1), i.mode = "hidden", i.inuse = !0, i._id && (e[i._id] = {})
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
                            (e && f(e) || this.renderNatively && u.OS.iOS) && (t.mode = "hidden")
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
                        const r = [];
                        return t ? (this._textTracks || this._initTextTracks(), t.forEach((t => {
                            if (t.includedInManifest || t.kind && !g(t.kind)) return;
                            const e = this._createTrack(t);
                            this._addTrackToList(e), r.push(e), t.file && (t.data = [], (0, i.xl)(t, (t => {
                                e.sideloaded = !0, this.addVTTCuesToTrack(e, t)
                            }), (t => {
                                this.trigger(h.cM, t)
                            })))
                        })), null != this && null != (e = this._textTracks) && e.length && this.trigger(h.jt, {
                            tracks: this._textTracks
                        }), r) : r
                    },
                    setTextTracks(t) {
                        var e;
                        if (this._currentTextTrackIndex = -1, t) {
                            if (this._textTracks) {
                                const t = this._tracksById;
                                this._activeCues = {}, this._cues = {}, this._unknownCount = 0, this._textTracks = this._textTracks.filter((e => {
                                    const r = e._id;
                                    return this.renderNatively && r && f(r) ? (delete t[r], !1) : (e.name && 0 === e.name.indexOf("Unknown") && this._unknownCount++, 0 === r.indexOf("nativemetadata") && "com.apple.streaming" === e.inBandMetadataTrackDispatchType && delete t[r], !0)
                                }), this)
                            } else this._initTextTracks();
                            if (t.length) {
                                let e = 0;
                                const r = t.length,
                                    i = this._tracksById,
                                    a = this._cuesByTrackId;
                                for (; e < r; e++) {
                                    const r = t[e];
                                    let s = r._id || "";
                                    if (!s) {
                                        if (!1 === r.inuse && g(r.kind) && this.renderNatively) {
                                            r._id = `native${r.kind}${e}`;
                                            continue
                                        }
                                        if (g(r.kind) || "metadata" === r.kind) {
                                            if (s = r._id = `native${r.kind}${e}`, !r.label && "captions" === r.kind) {
                                                const t = (0, n._)(r, this._unknownCount);
                                                r.name = t.label, this._unknownCount = t.unknownCount
                                            }
                                        } else s = r._id = (0, n.M)(r, this._textTracks ? this._textTracks.length : 0);
                                        if (i[s]) continue;
                                        r.inuse = !0
                                    }
                                    if (r.inuse && !i[s])
                                        if ("metadata" === r.kind) {
                                            r.mode = "hidden";
                                            const t = this.cueChangeHandler = this.cueChangeHandler || v.bind(this);
                                            r.removeEventListener("cuechange", t), r.addEventListener("cuechange", t), i[s] = r
                                        } else if (g(r.kind)) {
                                            const t = r.mode;
                                            let e;
                                            if (r.mode = "hidden", (!r.cues || !r.cues.length) && r.embedded) continue;
                                            if (("disabled" !== t || f(s)) && (r.mode = t), a[s] && !a[s].loaded) {
                                                const i = a[s].cues;
                                                for (; e = i.shift();) p(this.renderNatively, r, e);
                                                r.mode = t, a[s].loaded = !0
                                            }
                                            this._addTrackToList(r)
                                        }
                                }
                            }
                            this.renderNatively && this.addTrackListeners(t), null != this && null != (e = this._textTracks) && e.length && this.trigger(h.jt, {
                                tracks: this._textTracks
                            })
                        }
                    },
                    addTrackListeners(t) {
                        let e = this.textTrackChangeHandler = this.textTrackChangeHandler || T.bind(this);
                        this.removeTracksListener(t, "change", e), this.addTracksListener(t, "change", e), (u.Browser.edge && u.Browser.ie || u.Browser.firefox) && (e = this.addTrackHandler = this.addTrackHandler || y.bind(this), this.removeTracksListener(t, "addtrack", e), this.addTracksListener(t, "addtrack", e))
                    },
                    setupSideloadedTracks(t) {
                        if (!this.renderNatively) return;
                        const e = (t = t || null) === this._itemTracks;
                        e || (0, i.VS)(this._itemTracks), this._itemTracks = t, t && (e || (this.disableTextTrack(), this._clearSideloadedTextTracks(), this.addTextTracks(t)))
                    },
                    setSubtitlesTrack(t) {
                        if (!this.renderNatively) return void(this.setCurrentSubtitleTrack && this.setCurrentSubtitleTrack(t - 1));
                        if (!this._textTracks) return;
                        if (0 === t && this._textTracks.forEach((t => {
                            t.mode = t.embedded ? "hidden" : "disabled"
                        })), this._currentTextTrackIndex === t - 1) return;
                        this.disableTextTrack(), this._currentTextTrackIndex = t - 1;
                        const e = this.getCurrentTextTrack();
                        e && (e.mode = "showing"), this.trigger(h.UF, {
                            currentTrack: this._currentTextTrackIndex + 1,
                            tracks: this._textTracks
                        })
                    },
                    createCue: (t, e, r) => new(window.VTTCue || window.TextTrackCue)(t, Math.max(e || 0, t + .25), r),
                    addVTTCue(t, e) {
                        this._tracksById || this._initTextTracks();
                        const r = t.track ? t.track : `native${t.type}`;
                        let i = this._tracksById[r];
                        const n = "captions" === t.type ? "Unknown CC" : "ID3 Metadata",
                            a = t.cue;
                        if (!i) {
                            const e = {
                                kind: t.type,
                                _id: r,
                                label: n,
                                default: !1
                            };
                            this.renderNatively || "metadata" === e.kind ? (i = this._createTrack(e), i.embedded = !0, this.setTextTracks(this.video.textTracks)) : i = this.addTextTracks([e])[0]
                        }
                        if (this._cacheVTTCue(i, a, e)) {
                            const t = this.renderNatively || "metadata" === i.kind;
                            return t ? p(t, i, a) : i.data.push(a), a
                        }
                        return null
                    },
                    addVTTCuesToTrack(t, e) {
                        var r, i;
                        if (!this.renderNatively) return;
                        const n = t._id,
                            a = this._tracksById;
                        let s = this._cuesByTrackId;
                        const o = a[n];
                        if (!o) return s || (s = this._cuesByTrackId = {}), void(s[n] = {
                            cues: e,
                            loaded: !1
                        });
                        if (null != (r = s) && null != (i = r[n]) && i.loaded) return;
                        let l;
                        for (s[n] = {
                            cues: e,
                            loaded: !0
                        }; l = e.shift();) p(this.renderNatively, o, l)
                    },
                    parseNativeID3Cues(t, e) {
                        const r = t[t.length - 1];
                        if (e && e.length === t.length && (r._parsed || E(e[e.length - 1], r))) return;
                        const i = [],
                            n = [];
                        let a = -1,
                            s = -1,
                            o = -1;
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e];
                            if (!r._extended && Boolean(r.data || r.value)) {
                                if (r.startTime !== s || null === r.endTime) {
                                    o = s, s = r.startTime;
                                    const t = i[a];
                                    i[++a] = [], n[a] = [];
                                    const e = s - o;
                                    if (t && e > 0)
                                        for (let e = 0; e < t.length; e++) {
                                            const r = t[e];
                                            r.endTime = s, r._extended = !0
                                        }
                                }
                                i[a].push(r), r._parsed || (n[a].push(r), r.endTime - s < .25 && (r.endTime = s + .25), r._parsed = !0)
                            }
                        }
                        for (let t = 0; t < n.length; t++) n[t].length && n[t].forEach((t => {
                            const e = S(t);
                            this.trigger(h.O1, e)
                        }))
                    },
                    triggerActiveCues(t, e) {
                        const r = t.filter((t => {
                            if (null != e && e.some((e => E(t, e)))) return !1;
                            if (t.data) return !0;
                            const r = t.text ? (t => {
                                let e;
                                try {
                                    e = JSON.parse(t.text)
                                } catch (t) {
                                    return null
                                }
                                const r = {
                                    metadataType: e.metadataType,
                                    metadataTime: t.startTime,
                                    metadata: e
                                };
                                return e.programDateTime && (r.programDateTime = e.programDateTime), r
                            })(t) : null;
                            if (r) "emsg" === r.metadataType && (r.metadata = r.metadata || {}, r.metadata.messageData = t.value), this.trigger(h.rx, r);
                            else if (t.value) return !0;
                            return !1
                        }));
                        r.length && r.forEach((t => {
                            const e = S(t);
                            this.trigger(h.rx, e)
                        }))
                    },
                    ensureMetaTracksActive() {
                        const t = this.video.textTracks,
                            e = t.length;
                        for (let r = 0; r < e; r++) {
                            const e = t[r];
                            "metadata" === e.kind && "disabled" === e.mode && (e.mode = "hidden")
                        }
                    },
                    _cacheVTTCue(t, e, r) {
                        const i = t.kind,
                            n = t._id,
                            a = this._cachedVTTCues;
                        a[n] || (a[n] = {});
                        const s = a[n];
                        let o;
                        switch (i) {
                            case "captions":
                            case "subtitles": {
                                o = r || Math.floor(20 * e.startTime);
                                const t = `_${e.line||"auto"}`,
                                    i = Math.floor(20 * e.endTime),
                                    n = s[o + t] || s[o + 1 + t] || s[o - 1 + t];
                                return !(n && Math.abs(n - i) <= 1) && (s[o + t] = i, !0)
                            }
                            case "metadata": {
                                const t = e.data ? new Uint8Array(e.data).join("") : e.text;
                                return o = r || e.startTime + t, s[o] ? !1 : (s[o] = e.endTime, !0)
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
                        const r = (0, n._)(t, this._unknownCount),
                            i = r.label;
                        if (this._unknownCount = r.unknownCount, this.renderNatively || "metadata" === t.kind) {
                            const r = this.video.textTracks;
                            e = (0, d._e)(r, {
                                label: i
                            }), e || (e = this.video.addTextTrack(t.kind, i, t.language || "")), e.default = t.default, e.mode = "disabled", e.inuse = !0
                        } else e = t, e.data = e.data || [];
                        return e._id || (e._id = (0, n.M)(t, this._textTracks ? this._textTracks.length : 0)), e
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
        9601: (t, e, r) => {
            "use strict";
            r.d(e, {
                E: () => n,
                Z: () => a
            });
            var i = r(4446);
            const n = t => t >= 400 && t < 600 ? t : 6;

            function a(t, e, r) {
                let a = t + 1e3,
                    s = i.ul;
                return e > 0 ? (403 === e && (s = i.H4), a += n(e)) : "http:" === `${r}`.substring(0, 5) && "https:" === document.location.protocol ? a += 12 : 0 === e && (a += 11), {
                    code: a,
                    key: s
                }
            }
        },
        5099: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => n
            });
            const i = (t, e, r) => {
                const i = new Error(r);
                return i.name = t, i.code = e, i
            };

            function n(t) {
                return new Promise((function(e, r) {
                    if (t.paused) return r(i("NotAllowedError", 0, "play() failed."));
                    let n;
                    const a = function(t) {
                            if (n(), "playing" !== t.type) {
                                const e = `The play() request was interrupted by a "${t.type}" event.`;
                                return "error" === t.type ? r(i("NotSupportedError", 9, e)) : r(i("AbortError", 20, e))
                            }
                            e()
                        },
                        s = function() {
                            t.addEventListener("playing", a), t.addEventListener("abort", a), t.addEventListener("error", a), t.addEventListener("pause", a)
                        };
                    n = function() {
                        t.removeEventListener("play", s), t.removeEventListener("playing", a), t.removeEventListener("pause", a), t.removeEventListener("abort", a), t.removeEventListener("error", a)
                    }, t.addEventListener("play", s)
                }))
            }
        },
        5256: (t, e, r) => {
            "use strict";
            r.d(e, {
                _T: () => i,
                c3: () => o,
                ji: () => a,
                s_: () => l
            });
            const i = t => Math.floor(t / 1e3),
                n = (t, e) => {
                    let r = null;
                    if (e && t) {
                        const n = Object.keys(t);
                        if (n.length) {
                            const a = ((t, e) => {
                                let r, i = null,
                                    n = 1 / 0;
                                return t.forEach((t => {
                                    r = Math.abs(parseFloat(t) - e), r < n && (i = t, n = r)
                                })), i
                            })(n, i(e));
                            a && (r = t[a])
                        }
                    }
                    return r
                },
                a = (t, e, r) => {
                    if (!t) return "";
                    const a = t.bitrate || t.bandwidth;
                    return n(e, a) || t.label || ((t, e, r) => {
                        if (!t && !e) return "";
                        let n = "",
                            a = "";
                        return e && (a = `${i(e)} kbps`, n = a), t && (n = `${t}p`, e && r && (n += ` (${a})`)), n
                    })(t.height, a, r)
                },
                s = function(t, e) {
                    return t.some((function(t) {
                        let r;
                        for (let i = 0; i < e.length && (r = t[e[i]], !r); i++);
                        if (!r) return !1;
                        const i = this[r] || !1;
                        return this[r] = !0, i
                    }), {})
                },
                o = t => !!Array.isArray(t) && s(t, ["height", "bitrate", "bandwidth"]),
                l = t => !!Array.isArray(t) && s(t, ["label"])
        },
        686: (t, e, r) => {
            "use strict";
            r.d(e, {
                s: () => n,
                v: () => a
            });
            const i = t => void 0 === t ? 120 : Math.max(t, 0),
                n = (t, e) => t !== 1 / 0 && Math.abs(t) >= Math.max(i(e), 0),
                a = (t, e) => {
                    let r = "VOD";
                    return t === 1 / 0 ? r = "LIVE" : t < 0 && (r = n(t, i(e)) ? "DVR" : "LIVE"), r
                }
        },
        3949: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => s
            });
            var i = r(8348),
                n = r(974),
                a = r(9974);
            const s = {
                container: null,
                volume(t) {
                    this.video.volume = Math.min(Math.max(0, t / 100), 1)
                },
                mute(t) {
                    this.video.muted = Boolean(t), this.video.muted || this.video.removeAttribute("muted")
                },
                resize(t, e, r) {
                    const {
                        video: a
                    } = this, {
                        videoWidth: s,
                        videoHeight: o
                    } = a;
                    if (!(t && e && s && o)) return;
                    const l = {
                            objectFit: "",
                            width: "",
                            height: ""
                        },
                        u = t / e,
                        h = s / o;
                    if ("uniform" === r) {
                        let i;
                        i = u > h ? t - t / (u / h) : e - e / (h / u), i < 6 && (l.objectFit = "fill", r = "exactfit")
                    }
                    if (i.Browser.ie || i.OS.iOS && (i.OS.version.major || 0) < 9 || i.Browser.androidNative)
                        if ("uniform" !== r) {
                            l.objectFit = "contain";
                            let i = 1,
                                d = 1;
                            "none" === r ? i = d = u > h ? Math.ceil(100 * o / e) / 100 : Math.ceil(100 * s / t) / 100 : "fill" === r ? i = d = u > h ? u / h : h / u : "exactfit" === r && (u > h ? (i = u / h, d = 1) : (i = 1, d = h / u)), (0, n.vs)(a, `matrix(${i.toFixed(2)}, 0, 0, ${d.toFixed(2)}, 0, 0)`)
                        } else l.top = l.left = l.margin = "", (0, n.vs)(a, "");
                    (0, n.oB)(a, l)
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
                    return (0, a.Z)(this.video.buffered) - this.video.currentTime <= 2
                }
            }
        },
        186: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => i
            });
            const i = {
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
        8702: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => a
            });
            var i = r(1643),
                n = r(1261);
            const a = {
                canplay() {
                    this.renderNatively && this.setTextTracks(this.video.textTracks), this.trigger(i.Jl)
                },
                play() {
                    this.stallTime = -1, this.video.paused || this.state === i._5 || this.state === i.r0 || this.setState(i.ik)
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
                    e && (t.drm = e), this.trigger(i.rx, t)
                },
                timeupdate() {
                    const t = this.video.currentTime,
                        e = this.getCurrentTime(),
                        r = this.getDuration();
                    if (isNaN(r)) return;
                    this.seeking || this.video.paused || this.state !== i.nQ && this.state !== i.ik || this.stallTime === t || (this.stallTime = -1, this.setState(i.r0), this.trigger(i.Gj));
                    const n = {
                            position: e,
                            duration: r,
                            currentTime: t,
                            seekRange: this.getSeekRange(),
                            metadata: {
                                currentTime: t
                            }
                        },
                        a = this.getLiveLatency();
                    if (null !== a && (n.latency = a, this.getTargetLatency)) {
                        const t = this.getTargetLatency();
                        null !== t && (n.targetLatency = t)
                    }(this.state === i.r0 || this.seeking && this.state !== i.bc) && this.trigger(i.R2, n)
                },
                click(t) {
                    this.trigger(i.ot, t)
                },
                volumechange() {
                    const t = this.video;
                    this.trigger(i.yH, {
                        volume: Math.round(100 * t.volume)
                    }), this.trigger(i.gy, {
                        mute: t.muted
                    })
                },
                seeking() {
                    if (this.state === i.ik) {
                        const t = this.video.buffered.length ? this.video.buffered.start(0) : -1;
                        if (this.video.currentTime === t) return
                    } else if (this.state === i.bc) return;
                    this.seeking = !0
                },
                seeked() {
                    this.seeking && (this.seeking = !1, this.trigger(i.aQ))
                },
                playing() {
                    -1 === this.stallTime && this.setState(i.r0), this.trigger(i.Gj)
                },
                pause() {
                    this.state !== i.xQ && (this.video.ended || this.video.error || this.video.currentTime !== this.video.duration && this.setState(i._5))
                },
                progress() {
                    const t = this.getDuration();
                    if (t <= 0 || t === 1 / 0) return;
                    const e = this.video.buffered;
                    if (!e || 0 === e.length) return;
                    const r = (0, n.v)(e.end(e.length - 1) / t, 0, 1);
                    this.trigger(i.uT, {
                        bufferPercent: 100 * r,
                        position: this.getCurrentTime(),
                        duration: t,
                        currentTime: this.video.currentTime,
                        seekRange: this.getSeekRange()
                    })
                },
                ratechange() {
                    this.trigger(i.TJ, {
                        playbackRate: this.video.playbackRate
                    })
                },
                ended() {
                    this.state !== i.bc && this.state !== i.xQ && this.trigger(i.Ms)
                }
            }
        },
        9974: (t, e, r) => {
            "use strict";

            function i(t) {
                return t && t.length ? t.end(t.length - 1) : 0
            }
            r.d(e, {
                Z: () => i
            })
        },
        9054: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                default: () => z
            });
            var i = {};
            r.r(i), r.d(i, {
                debug: () => v,
                error: () => y,
                info: () => m,
                log: () => p,
                warn: () => T
            });
            var n = r(6042);
            class a {
                constructor(t, e, r, i) {
                    this.video = t, this.hlsjs = r, this.videoListeners = e, this.hlsjsListeners = i
                }
                on() {
                    this.off(), (0, n.S6)(this.videoListeners, ((t, e) => {
                        this.video.addEventListener(e, t, !1)
                    })), (0, n.S6)(this.hlsjsListeners, ((t, e) => {
                        this.hlsjs.on(e, t)
                    }))
                }
                off() {
                    (0, n.S6)(this.videoListeners, ((t, e) => {
                        this.video.removeEventListener(e, t)
                    })), (0, n.S6)(this.hlsjsListeners, ((t, e) => {
                        this.hlsjs.off(e, t)
                    }))
                }
            }
            var s = r(5256),
                o = r(8348);
            const l = t => t.audioGroupIds ? t.audioGroupIds[t._urlId || t.urlId] : void 0,
                u = (t, e) => {
                    const r = (0, s.c3)(t),
                        i = (0, n.UI)(t, ((t, i) => ({
                            label: (0, s.ji)(t, e, r),
                            level_id: t.id,
                            hlsjsIndex: i,
                            bitrate: t.bitrate,
                            height: t.height,
                            width: t.width,
                            audioGroupId: l(t)
                        })));
                    return i.sort(((t, e) => t.height && e.height && t.height !== e.height ? e.height - t.height : (e.bitrate || 0) - (t.bitrate || 0))), i.length > 1 && i.unshift({
                        label: "Auto",
                        level_id: "auto",
                        hlsjsIndex: -1
                    }), i
                },
                h = (t, e) => Math.max(0, (0, n.cq)(e, (0, n.sE)(e, (e => e.hlsjsIndex === t)))),
                d = (t, e, r, i = t.length) => {
                    const n = (() => {
                        try {
                            return window.devicePixelRatio
                        } catch (t) {}
                        return 1
                    })();
                    e *= n, r *= n, o.OS.tizen && (e = 1 / 0, r = 1 / 0);
                    for (let n = 0; n < i; n++) {
                        const i = t[n];
                        if ((i.width >= e || i.height >= r) && (a = i, !(s = t[n + 1]) || a.width !== s.width || a.height !== s.height)) return n
                    }
                    var a, s;
                    return i - 1
                };
            var c = r(4742);
            const f = () => {},
                g = t => c.Z.debug ? console[t].bind(console, `[Hls.js ${t}] ->`) : f,
                v = g("debug"),
                p = g("log"),
                m = g("info"),
                T = g("warn"),
                y = g("error");
            var E = r(548),
                S = r(5083);

            function b(t) {
                const {
                    withCredentials: e,
                    aesToken: r,
                    renderTextTracksNatively: a,
                    onXhrOpen: s,
                    liveSyncDuration: o,
                    hlsjsConfig: l
                } = t, u = (0, n.ei)(l || {}, ["liveSyncDuration", "liveSyncDurationCount", "liveMaxLatencyDuration", "liveMaxLatencyDurationCount", "liveBackBufferLength", "backBufferLength", "loader", "pLoader", "fLoader", "fragLoadingMaxRetry", "fragLoadingRetryDelay", "enableWorker", "debug"]), h = {
                    autoStartLoad: !1,
                    capLevelToPlayerSize: !1,
                    captionsTextTrack1Label: "Unknown CC",
                    captionsTextTrack2Label: "Unknown CC",
                    captionsTextTrack1LanguageCode: "",
                    captionsTextTrack2LanguageCode: "",
                    debug: !!c.Z.debug && i,
                    fragLoadingMaxRetry: 2,
                    fragLoadingRetryDelay: 4e3,
                    maxMaxBufferLength: E.i0,
                    renderTextTracksNatively: a,
                    startLevel: -1,
                    testBandwidth: !1
                }, {
                    liveSyncDurationCount: d,
                    liveMaxLatencyDurationCount: f,
                    liveMaxLatencyDuration: g
                } = u;
                return void 0 !== d || void 0 !== f ? (u.liveSyncDuration = u.liveMaxLatencyDuration = void 0, u.liveSyncDurationCount = (0, n.xV)(d) ? d : 1 / 0, u.liveMaxLatencyDurationCount = (0, n.xV)(f) ? f : 1 / 0) : void 0 === o && void 0 === g || (u.liveSyncDurationCount = u.liveMaxLatencyDurationCount = void 0, h.liveSyncDuration = (0, S.G0)(o), u.liveMaxLatencyDuration = (0, n.xV)(g) ? g : 1 / 0), e || r || s ? Object.assign({}, h, ((t, e, r) => ({
                    xhrSetup(i, n) {
                        if (t && (i.withCredentials = !0), e) {
                            const t = n.indexOf("?") > 0 ? "&token=" : "?token=";
                            i.open("GET", n + t + e, !0)
                        }
                        "function" == typeof r && r(i, n)
                    },
                    fetchSetup(r, i) {
                        if (e) {
                            const t = r.url.indexOf("?") > 0 ? "&token=" : "?token=";
                            r.url = r.url + t + e
                        }
                        return t && (i.credentials = "include"), new Request(r.url, i)
                    }
                }))(e, r, s), u) : Object.assign({}, h, u)
            }
            var L = r(9601),
                k = r(4446);
            let D;
            ! function(t) {
                t[t.BASE_ERROR = 23e4] = "BASE_ERROR", t[t.ERROR_LIVE_STREAM_DOWN_OR_ENDED = 230001] = "ERROR_LIVE_STREAM_DOWN_OR_ENDED", t[t.MANIFEST_ERROR_CONNECTION_LOST = 232002] = "MANIFEST_ERROR_CONNECTION_LOST", t[t.ERROR_CONNECTION_LOST = 230002] = "ERROR_CONNECTION_LOST", t[t.MANIFEST_PARSING_ERROR = 232600] = "MANIFEST_PARSING_ERROR", t[t.LEVEL_EMPTY_ERROR = 232631] = "LEVEL_EMPTY_ERROR", t[t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = 232632] = "MANIFEST_INCOMPATIBLE_CODECS_ERROR", t[t.FRAG_PARSING_ERROR = 233600] = "FRAG_PARSING_ERROR", t[t.FRAG_DECRYPT_ERROR = 233650] = "FRAG_DECRYPT_ERROR", t[t.BUFFER_STALLED_ERROR = 234001] = "BUFFER_STALLED_ERROR", t[t.BUFFER_APPEND_ERROR = 234002] = "BUFFER_APPEND_ERROR", t[t.PROTECTED_CONTENT_ACCESS_ERROR = 232403] = "PROTECTED_CONTENT_ACCESS_ERROR"
            }(D || (D = {}));
            const R = t => {
                if (t) {
                    if (/^frag/.test(t)) return 2e3;
                    if (/^(manifest|level|audioTrack)/.test(t)) return 1e3;
                    if (/^key/.test(t)) return 4e3
                }
                return 0
            };
            var A = r(328),
                _ = r(3949),
                I = r(186),
                C = r(3328);
            class w extends A.ZP {}
            Object.assign(w.prototype, _.Z, I.Z, C.Z);
            const O = w;
            var x = r(4506),
                P = r(3343),
                F = r(686),
                M = r(1643),
                N = r(5004),
                U = r(8702),
                B = r(386),
                G = r(5099),
                j = r(2728),
                H = r(7477),
                K = r(1384);
            const V = (W = "warn", c.Z.debug ? console[W].bind(console) : () => {});
            var W;
            const Y = (t, e, r) => {
                const i = t.sources[0];
                return void 0 !== i[r] ? i[r] : void 0 !== t[r] ? t[r] : e[r]
            };
            var q = r(4560);
            const X = function(t) {
                const {
                    MEDIA_ATTACHED: e,
                    MEDIA_DETACHED: r,
                    MANIFEST_PARSED: i,
                    LEVEL_LOADED: s,
                    LEVEL_UPDATED: c,
                    LEVEL_PTS_UPDATED: f,
                    FRAG_CHANGED: g,
                    LEVEL_SWITCHED: v,
                    FRAG_PARSING_METADATA: p,
                    BUFFER_APPENDED: m,
                    BUFFER_CODECS: T,
                    FRAG_BUFFERED: y,
                    INIT_PTS_FOUND: S,
                    NON_NATIVE_TEXT_TRACKS_FOUND: A,
                    CUES_PARSED: _,
                    AUDIO_TRACKS_UPDATED: I,
                    ERROR: C
                } = t.Events, {
                    MEDIA_ERROR: w,
                    NETWORK_ERROR: W
                } = t.ErrorTypes, q = function(t) {
                    const {
                        NETWORK_ERROR: e
                    } = t.ErrorTypes, {
                        MANIFEST_PARSING_ERROR: r,
                        LEVEL_EMPTY_ERROR: i,
                        MANIFEST_INCOMPATIBLE_CODECS_ERROR: n,
                        FRAG_PARSING_ERROR: a,
                        FRAG_DECRYPT_ERROR: s,
                        BUFFER_STALLED_ERROR: o,
                        BUFFER_APPEND_ERROR: l,
                        INTERNAL_EXCEPTION: u,
                        MANIFEST_LOAD_ERROR: h,
                        MANIFEST_LOAD_TIMEOUT: d,
                        LEVEL_LOAD_ERROR: c,
                        LEVEL_LOAD_TIMEOUT: f,
                        FRAG_LOAD_ERROR: g,
                        FRAG_LOAD_TIMEOUT: v,
                        BUFFER_SEEK_OVER_HOLE: p,
                        BUFFER_NUDGE_ON_STALL: m
                    } = t.ErrorDetails, T = [h, d, r, n, c, f, g, v], y = [o, p, m], E = [i, c, f];
                    return function(t) {
                        const {
                            details: h,
                            response: d,
                            type: c
                        } = t;
                        let f = t.fatal,
                            g = T.indexOf(h) < 0;
                        const v = y.indexOf(h) >= 0;
                        let p = E.indexOf(h) >= 0,
                            m = k.ul,
                            S = D.BASE_ERROR;
                        switch (h) {
                            case r:
                                S = D.MANIFEST_PARSING_ERROR;
                                break;
                            case i:
                                S = D.LEVEL_EMPTY_ERROR;
                                break;
                            case n:
                                m = k.zO, S = D.MANIFEST_INCOMPATIBLE_CODECS_ERROR;
                                break;
                            case a:
                                S = D.FRAG_PARSING_ERROR;
                                break;
                            case s:
                                S = D.FRAG_DECRYPT_ERROR;
                                break;
                            case o:
                                S = D.BUFFER_STALLED_ERROR;
                                break;
                            case l:
                                S = D.BUFFER_APPEND_ERROR;
                                break;
                            case u:
                                S = 239e3;
                                break;
                            default:
                                c === e && (!1 === navigator.onLine ? (g = !1, f = "manifestLoadError" === h, p = !1, S = f ? D.MANIFEST_ERROR_CONNECTION_LOST : D.ERROR_CONNECTION_LOST, m = k.MD) : /TimeOut$/.test(h) ? S = D.BASE_ERROR + 1001 + R(h) : d && (({
                                    code: S,
                                    key: m
                                } = (0, L.Z)(D.BASE_ERROR, d.code, t.url)), S += R(h)))
                        }
                        return {
                            key: m,
                            code: S,
                            recoverable: g,
                            stalling: v,
                            suppressLevel: p,
                            fatal: f,
                            error: t
                        }
                    }
                }(t);
                return class L extends O {
                    constructor(t, e, r) {
                        var i;
                        super(), this.bandwidthMonitor = (0, j.Z)(this, e.bandwidthEstimate), this.bitrateSelection = e.bitrateSelection, this.bufferStallTimeout = 1e3, this.connectionTimeoutDuration = 1e4, this.dvrEnd = null, this.dvrPosition = null, this.dvrUpdatedTime = 0, this.eventHandler = null, this.hlsjs = null, this.hlsjsConfig = null, this.hlsjsOptions = null, this.jwConfig = e, this.lastPosition = 0, this.maxRetries = 3, this.playerId = t, this.processPlaylistMetadata = P.q, this.recoveryInterval = 5e3, this.renderNatively = (i = e.renderCaptionsNatively, !(!o.OS.iOS && !o.Browser.safari) || o.Browser.chrome && i), this.savedVideoProperties = !1, this.seeking = !1, this.staleManifestDurationMultiplier = 3e3, this.state = M.bc, this.supports = L.supports, this.supportsPlaybackRate = !0, this.video = r, this.playerWidth = 0, this.playerHeight = 0, this.playerStretching = null, this.capLevels = !1, this.levelDuration = 0, this.live = !1, this.liveEdgePosition = null, this.liveEdgeUpdated = 0, this.staleManifestTimeout = -1, this.connectionTimeout = -1, this.programDateSyncTime = 0, this.retryCount = 0, this.stallTime = -1, this.jwLevels = [], this.audioTracks = null, this.audioTracksArray = null, this.resetLifecycleVariables()
                    }
                    resetLifecycleVariables() {
                        this.resetRecovery(), this.stopStaleTimeout(), this.stopConnectionTimeout(), this.stallTime = -1, this.streamBitrate = -1, this.videoFound = !1, this.videoHeight = 0, this.src = null, this.currentHlsjsLevel = null, this.currentAudioTrackIndex = null, this.currentJwItem = null, this.jwLevels = [], this.audioTracks = null, this.audioTracksArray = null, this.lastRecoveryTime = null, this.lastEndSn = null, this.levelDuration = 0, this.live = !1, this.liveEdgePosition = null, this.liveEdgeUpdated = 0, this.liveEdgeSn = -1, this.livePaused = !1, this.recoveringMediaError = !1, this.recoveringNetworkError = !1, this.streamType = "VOD", this.lastProgramDateTime = 0, this.programDateSyncTime = 0
                    }
                    resetRecovery() {
                        this.retryCount = 0
                    }
                    stopStaleTimeout() {
                        clearTimeout(this.staleManifestTimeout), this.staleManifestTimeout = -1
                    }
                    stopConnectionTimeout() {
                        clearTimeout(this.connectionTimeout), this.connectionTimeout = -1
                    }
                    startConnectionTimeout() {
                        -1 === this.connectionTimeout && (this.connectionTimeout = window.setTimeout((() => {
                            navigator.onLine ? this.hlsjs.startLoad() : this.handleError(D.ERROR_CONNECTION_LOST, null, k.MD)
                        }), this.connectionTimeoutDuration))
                    }
                    initHlsjs(e) {
                        const r = this.jwConfig.hlsjsConfig,
                            i = {
                                withCredentials: Boolean(Y(e, this.jwConfig, "withCredentials")),
                                aesToken: Y(e, this.jwConfig, "aestoken"),
                                renderTextTracksNatively: this.renderNatively,
                                onXhrOpen: e.sources[0].onXhrOpen,
                                liveSyncDuration: Y(e, this.jwConfig, "liveSyncDuration"),
                                hlsjsConfig: r
                            };
                        if (this.setupSideloadedTracks(e.tracks), this.capLevels = !e.stereomode, this.hlsjs && (0, n.wB)(this.hlsjsOptions)(i)) return;
                        this.hlsjsOptions = i, this.restoreVideoProperties(), this.stopStaleTimeout(), this.stopConnectionTimeout(), this.hlsjsConfig = b(i);
                        const s = Object.assign({}, this.hlsjsConfig),
                            o = this.bandwidthMonitor.getEstimate();
                        (0, n.qh)(o) && (s.abrEwmaDefaultEstimate = o), s.appendErrorMaxRetry = 1, this.hlsjs = new t(s), this.eventHandler = new a(this.video, this.createVideoListeners(), this.hlsjs, this.createHlsjsListeners())
                    }
                    init(t) {
                        this.destroy(), this.initHlsjs(t)
                    }
                    preload(t) {
                        "metadata" === t.preload && (this.maxBufferLength = E.Zv), this.load(t)
                    }
                    load(t) {
                        const {
                            hlsjs: e,
                            video: r,
                            src: i
                        } = this;
                        if (!e) return;
                        const n = t.sources[0].file,
                            a = n.url && "string" == typeof n.url ? n.url : n;
                        if (i === a && this.videoSrc === r.src) return void(this.maxBufferLength = E.i0);
                        let s = t.starttime || -1;
                        s < -1 && (s = this.lastPosition), this.initHlsjs(t), this.currentJwItem = t, this.src = a, this.videoHeight = 0, this._eventsOn(), e.config.startPosition = s, e.loadSource(a), e.attachMedia(r), this.videoSrc = r.src
                    }
                    restartStream(t) {
                        const e = Object.assign({}, this.currentJwItem);
                        t ? e.starttime = t : delete e.starttime, this.src = null, this._clearNonNativeCues(), this.clearMetaCues(), this.clearTracks(), this.init(e), this.load(e), delete e.starttime
                    }
                    play() {
                        return this.livePaused && (this.livePaused = !1, this.restartStream()), this.video.play() || (0, G.Z)(this.video)
                    }
                    pause() {
                        this.stopConnectionTimeout(), this.live && "LIVE" === this.streamType && !this.livePaused && this.livePause(), this.video.pause()
                    }
                    livePause() {
                        this.hlsjs && (this.livePaused = !0, this.hlsjs.stopLoad(), this.stopStaleTimeout())
                    }
                    stop() {
                        this.clearTracks(), this.hlsjs && (this._eventsOff(), this.hlsjs.stopLoad()), this.pause(), this.setState(M.bc)
                    }
                    seek(t) {
                        const e = this.getDuration();
                        if (!e || e === 1 / 0 || (0, n.i2)(e)) return;
                        this.stopStaleTimeout(), this.stopConnectionTimeout();
                        let r = t >= 0 ? t : t + this.video.duration;
                        const i = this.getSeekRange();
                        if ("DVR" === this.streamType && null !== this.dvrEnd && (this.dvrPosition = r - this.dvrEnd, t < 0)) {
                            r += Math.min(12, ((0, N.z)() - this.dvrUpdatedTime) / 1e3)
                        }
                        this.seeking = !0;
                        const a = this.video.currentTime;
                        this.trigger(M.NZ, {
                            position: this.getCurrentTime(),
                            offset: r,
                            duration: e,
                            currentTime: a,
                            seekRange: i,
                            metadata: {
                                currentTime: a
                            }
                        }), this.video.currentTime = r;
                        const s = this.video.currentTime,
                            o = {
                                position: this.getCurrentTime(),
                                duration: e,
                                currentTime: s,
                                seekRange: i,
                                metadata: {
                                    currentTime: s
                                }
                            };
                        this.trigger("time", o)
                    }
                    getCurrentQuality() {
                        let t = 0;
                        return this.hlsjs && !this.hlsjs.autoLevelEnabled && (t = h(this.hlsjs.manualLevel, this.jwLevels)), t
                    }
                    getQualityLevels() {
                        return (0, n.UI)(this.jwLevels, (t => (0, x.Z)(t)))
                    }
                    getCurrentAudioTrack() {
                        return (0, n.hj)(this.currentAudioTrackIndex) ? this.currentAudioTrackIndex : -1
                    }
                    getAudioTracks() {
                        return this.audioTracks || []
                    }
                    getCurrentTime() {
                        return this.live && "DVR" === this.streamType ? (this.dvrPosition || this.updateDvrPosition(this.getSeekRange()), this.dvrPosition) : this.video.currentTime
                    }
                    getDuration() {
                        if (this.live && this.currentJwItem) {
                            const t = this.levelDuration,
                                e = this.currentJwItem.minDvrWindow;
                            return (0, F.s)(t, e) ? (this.streamType = "DVR", -t) : (this.streamType = "LIVE", 1 / 0)
                        }
                        return this.streamType = "VOD", this.video.duration
                    }
                    getCurrentHlsjsLevel() {
                        let t = 0;
                        const {
                            hlsjs: e
                        } = this;
                        return e && (t = e.streamController.loadedmetadata && e.currentLevel > 0 ? e.currentLevel : e.firstLevel), t
                    }
                    getName() {
                        return {
                            name: "hlsjs"
                        }
                    }
                    getPlaybackRate() {
                        return this.video.playbackRate
                    }
                    getSeekRange() {
                        const {
                            levelDuration: t,
                            video: e
                        } = this, {
                            seekable: r,
                            duration: i
                        } = e, a = r.length ? Math.max(r.end(0), r.end(r.length - 1)) : i;
                        return (0, n.i2)(i) ? {
                            start: 0,
                            end: 0
                        } : {
                            start: Math.max(0, a - t),
                            end: a
                        }
                    }
                    getBandwidthEstimate() {
                        const {
                            hlsjs: t
                        } = this;
                        return t ? t.bandwidthEstimate : null
                    }
                    getLiveLatency() {
                        let t = null;
                        if (this.live && null !== this.liveEdgePosition) {
                            const e = (0, N.z)();
                            t = this.liveEdgePosition + (e - this.liveEdgeUpdated) / 1e3 - this.video.currentTime;
                            const r = this.lastProgramDateTime;
                            if (r) {
                                const i = e / 1e3 - (r / 1e3 + (this.video.currentTime - this.programDateSyncTime)) - t;
                                i > 0 && i < 10 && (t += i)
                            }
                        }
                        return t
                    }
                    getTargetLatency() {
                        return this.hlsjs && this.hlsjs.targetLatency || null
                    }
                    setCurrentQuality(t) {
                        if (t < 0) return;
                        const e = ((t, e) => {
                            let r = -1;
                            return t > -1 && e[t] && (r = e[t].hlsjsIndex), r
                        })(t, this.jwLevels);
                        this.hlsjs.nextLevel = e, this.trigger(M.aM, {
                            levels: this.jwLevels,
                            currentQuality: t
                        }), this.bitrateSelection = this.jwLevels[t].bitrate
                    }
                    setCurrentAudioTrack(t) {
                        const e = this.getCurrentHlsjsLevel(),
                            r = this.hlsjs.levels[e],
                            i = h(e, this.jwLevels);
                        if (!this.jwLevels || !this.jwLevels[i] || !r) return;
                        if (!this.audioTracksArray || !(0, n.dp)(this.audioTracksArray) || !(0, n.hj)(t)) return;
                        let a = this.audioTracks = this.audioTracksArray;
                        if (!a || !(0, n.dp)(a) || !a[t] || this.currentAudioTrackIndex === t) return;
                        this.trigger(M.j0, {
                            tracks: a,
                            currentTrack: t
                        }), a = this.audioTracks;
                        let s = a[t];
                        null !== this.currentAudioTrackIndex && s.hlsjsIndex !== this.hlsjs.audioTrack && (this.trigger(M._B, {
                            tracks: a,
                            currentTrack: t
                        }), s = this.audioTracks[t]), this.currentAudioTrackIndex = t, s.hlsjsIndex !== this.hlsjs.audioTrack && (this.hlsjs.audioTrack = s.hlsjsIndex)
                    }
                    updateAudioTrack(t) {
                        if (!this.hlsjs || !this.hlsjs.audioTracks.length) return;
                        let e = this.currentAudioTrackIndex;
                        (0, n.hj)(e) ? this.audioTracks && this.audioTracks[e].hlsjsIndex === this.hlsjs.audioTrack || (this.currentAudioTrackIndex = null): e = this.audioTracksArray ? ((t = []) => Math.max((0, n.cq)(t, (0, n.sE)(t, (t => t.defaulttrack))), 0))(this.audioTracksArray) : 0, this.setCurrentAudioTrack(e)
                    }
                    updateDvrPosition(t) {
                        this.dvrPosition = this.video.currentTime - t.end, this.dvrEnd = t.end, this.dvrUpdatedTime = (0, N.z)()
                    }
                    setCurrentSubtitleTrack(t) {
                        this.hlsjs.subtitleTrack = t
                    }
                    setPlaybackRate(t) {
                        this.video.playbackRate = this.video.defaultPlaybackRate = t
                    }
                    get maxBufferLength() {
                        return this.hlsjs ? this.hlsjs.config.maxMaxBufferLength : NaN
                    }
                    set maxBufferLength(t) {
                        this.hlsjs && (this.hlsjs.config.maxMaxBufferLength = t)
                    }
                    isLive() {
                        return this.live
                    }
                    checkAdaptation(t) {
                        const {
                            levels: e,
                            autoLevelEnabled: r
                        } = this.hlsjs, i = e[t];
                        if (!i) return;
                        let {
                            width: n,
                            height: a,
                            bitrate: s
                        } = i;
                        if (n = n || this.video.videoWidth, a = a || this.video.videoHeight, a === this.videoHeight && s === this.streamBitrate) return;
                        const l = h(t, this.jwLevels);
                        let u = "api"; - 1 !== this.streamBitrate && this.streamBitrate || this.videoHeight ? r && (u = "auto") : u = "initial choice", this.videoHeight = a, this.streamBitrate = s;
                        const d = r ? "auto" : "manual",
                            c = r && e.length > 1 ? "auto" : this.jwLevels[l].label,
                            f = () => {
                                this.trigger(M.ug, {
                                    reason: u,
                                    mode: d,
                                    level: {
                                        bitrate: s,
                                        index: l,
                                        label: c,
                                        width: n,
                                        height: a
                                    }
                                })
                            };
                        o.Browser.ie ? this.once("time", f, this) : f()
                    }
                    createVideoListeners() {
                        const t = {
                            waiting: () => {
                                this.startConnectionTimeout(), this.seeking ? this.setState(M.ik) : this.state === M.r0 && (this.atEdgeOfLiveStream() && this.setPlaybackRate(1), this.stallTime = this.video.currentTime, this.setState(M.nQ))
                            }
                        };
                        return Object.keys(U.Z).forEach((e => {
                            const r = U.Z[e];
                            "playing" === e ? t[e] = function() {
                                const t = this.getCurrentHlsjsLevel();
                                this.checkAdaptation(t), r.call(this)
                            }.bind(this) : "ended" === e ? t[e] = function() {
                                this.videoHeight = 0, this.streamBitrate = -1, r.call(this)
                            }.bind(this) : "error" !== e && (t[e] = r.bind(this))
                        })), t
                    }
                    createHlsjsListeners() {
                        const t = {};
                        return t[e] = () => {
                            this.recoveringMediaError && (this.hlsjs.startLoad(), this.recoveringMediaError = !1, this.resetRecovery(), this.stopStaleTimeout(), this.stopConnectionTimeout())
                        }, t[r] = () => {
                            this._clearNonNativeCues()
                        }, t[i] = (t, e) => {
                            const {
                                levels: r
                            } = e, i = this.hlsjs, {
                                bitrateSelection: a,
                                jwConfig: s
                            } = this;
                            let o = -1,
                                l = -1;
                            if (this.currentHlsjsLevel = null, this.jwLevels = u(r, s.qualityLabels), this.capLevels && (this.playerWidth || this.playerHeight) && this.playerStretching) {
                                const t = d(r, this.playerWidth, this.playerHeight, e.firstLevel + 1);
                                i.levelController.firstLevel !== t && (i.firstLevel = t), this.resize(this.playerWidth, this.playerHeight, this.playerStretching)
                            }(0, n.qh)(a) && (o = ((t, e) => {
                                if (!e) return -1;
                                let r = Number.MAX_VALUE,
                                    i = -1;
                                for (let n = 0; n < t.length; n++) {
                                    const a = t[n];
                                    if (!a.bitrate) continue;
                                    const s = Math.abs(e - a.bitrate);
                                    if (s <= r && (r = s, i = n), !s) break
                                }
                                return i
                            })(r, a), l = o), i.startLevel = o, i.nextLevel = l, i.startLoad(i.config.startPosition), this.trigger(M.UZ, {
                                levels: this.jwLevels,
                                currentQuality: h(o, this.jwLevels)
                            })
                        }, t[s] = (t, e) => {
                            const {
                                endSN: r,
                                live: i,
                                targetduration: n
                            } = e.details;
                            this.checkStaleManifest(r, i, n)
                        }, t[c] = (t, e) => {
                            const {
                                live: r,
                                totalduration: i
                            } = e.details;
                            this.live = r, this.levelDuration = i;
                            const n = this.getSeekRange(),
                                a = null !== this.dvrEnd && Math.abs(this.dvrEnd - n.end) > 1;
                            "DVR" === this.streamType && a && this.updateDvrPosition(n), r && this.state === M.bc && this.livePause()
                        }, t[f] = (t, e) => {
                            const {
                                fragments: r,
                                totalduration: i
                            } = e.details;
                            if (this.levelDuration = i, r.length) {
                                const t = r[r.length - 1];
                                t.sn !== this.liveEdgeSn && (this.liveEdgeUpdated = (0, N.z)(), this.liveEdgeSn = t.sn, this.liveEdgePosition = t.start + t.duration)
                            }
                        }, t[v] = (t, e) => {
                            const {
                                level: r
                            } = e;
                            r !== this.currentHlsjsLevel ? this.setCurrentLevel(r) : this.checkAdaptation(r)
                        }, t[g] = (t, e) => {
                            this.lastProgramDateTime = e.frag.programDateTime, this.programDateSyncTime = e.frag.start
                        }, t[p] = (t, e) => {
                            e.samples && ([].some.call(this.video.textTracks, (t => !t.inuse)) && this.setTextTracks(this.video.textTracks), null != e && e.samples && e.samples.forEach((t => {
                                this.trigger(M.rx, {
                                    metadataType: "dai-hls",
                                    metadata: {
                                        messageData: t.data,
                                        start: t.pts,
                                        type: "ID3"
                                    }
                                })
                            })))
                        }, t[m] = () => {
                            -1 !== this.connectionTimeout && this.stopConnectionTimeout(), this.atEdgeOfLiveStream() || this.stopStaleTimeout(), this.recoveringNetworkError && (this.resetRecovery(), this.recoveringNetworkError = !1)
                        }, t[T] = (t, e) => {
                            if (e.audio && this.videoFound) return;
                            const r = e.audiovideo || e.video ? "video" : "audio";
                            this.videoFound = this.videoFound || "video" === r, this.trigger(M.oZ, {
                                mediaType: r
                            })
                        }, t[y] = (t, e) => {
                            const r = e.frag;
                            (r.tagList || []).forEach((([t, e]) => this.processPlaylistMetadata(t, e, r)))
                        }, t[S] = (t, e) => {
                            const {
                                frag: r,
                                initPTS: i
                            } = e;
                            this.processPlaylistMetadata("DISCONTINUITY", i, r)
                        }, this.renderNatively || (t[A] = (t, e) => {
                            this.addTextTracks(e.tracks)
                        }, t[_] = (t, e) => {
                            var r;
                            if (null != e && null != (r = e.cues) && r.length) {
                                let t = e.cues.length - 1;
                                const r = !(e.cues[0] instanceof H.Z);
                                e.cues.forEach((i => {
                                    if (r) {
                                        const t = i;
                                        (i = new H.Z(t.startTime, t.endTime, t.text)).position = t.position
                                    }
                                    i.align = "center", i.line = 15 - t, this.addVTTCue({
                                        type: e.type,
                                        cue: i,
                                        track: e.track
                                    }), t--
                                }))
                            }
                        }), t[I] = (t, e) => {
                            const {
                                audioTracks: r
                            } = e, i = this.hlsjs.levels, a = this.getCurrentHlsjsLevel();
                            null != r && r.length && (this.audioTracksArray = (t => (0, n.u4)(t, ((t, e, r) => (t.push({
                                autoselect: e.autoselect,
                                defaulttrack: e.default,
                                groupid: e.groupId,
                                language: e.lang,
                                name: e.name,
                                hlsjsIndex: r
                            }), t)), []))(r), this.jwLevels.forEach((t => {
                                const e = t.hlsjsIndex > 0 ? i[t.hlsjsIndex] : null;
                                e && (t.audioGroupId = l(e))
                            })), this.updateAudioTrack(i[a]))
                        }, t[C] = (t, e) => {
                            const r = this.hlsjs,
                                i = q(e),
                                {
                                    type: n
                                } = e,
                                {
                                    key: a
                                } = i;
                            let s;
                            if (V(e), "DVR" === this.streamType && n === W) {
                                const t = this.getSeekRange();
                                this.updateDvrPosition(t)
                            }
                            if (232403 === i.code && this.retryCount < this.maxRetries && /jwpsrv.com\/.*\?token=/.test(e.url) && (i.suppressLevel = !1, i.recoverable = !0, i.fatal = !0, s = !0, this.maxRetries = 1), i.suppressLevel) {
                                const t = r.levels,
                                    n = e.context || e,
                                    {
                                        level: s
                                    } = n,
                                    o = t[s];
                                if (o && Array.isArray(o.url) && 1 === o.url.length) {
                                    if (r.removeLevel(s, 0), !r.levels.length) return void this.handleError(i.code, e, a);
                                    i.fatal = !1, this.jwLevels = u(r.levels, this.jwConfig.qualityLabels), this.playerWidth && this.playerHeight && this.playerStretching && this.resize(this.playerWidth, this.playerHeight, this.playerStretching), r.loadLevel = 0, r.currentLevel = -1, this.trigger(M.UZ, {
                                        levels: this.jwLevels,
                                        currentQuality: 0
                                    })
                                }
                            }
                            if (i.fatal) {
                                const t = (0, N.z)(),
                                    o = i.recoverable && (n === W || n === w),
                                    l = this.retryCount;
                                if (!(o && l < this.maxRetries)) return r.stopLoad(), void this.handleError(i.code, e, a);
                                (!this.lastRecoveryTime || t >= this.lastRecoveryTime + this.recoveryInterval) && (V("Attempting to recover, retry count:", l), n === W ? /^manifest/.test(e.details) || s ? (this.recoverManifestError(), this.retryCount = l) : r.startLoad() : n === w && ("bufferAppendError" === e.details ? (V("Encountered a bufferAppendError in hls not attempting to recover media and destroying instance"), r.destroy()) : (this.recoveringMediaError = !0, r.recoverMediaError())), this.recoveringNetworkError = !0, this.retryCount += 1, this.lastRecoveryTime = t)
                            }
                            this.trigger(M.cM, new k.rG(null, i.code + 1e5, e))
                        }, t
                    }
                    resize(t, e, r) {
                        if (this.playerWidth = t, this.playerHeight = e, this.playerStretching = r, this.capLevels) {
                            const t = this.hlsjs;
                            if (null != t && t.levels) {
                                const e = t.autoLevelCapping,
                                    r = d(t.levels, this.playerWidth, this.playerHeight);
                                r !== e && (t.autoLevelCapping = r, r > e && -1 !== e && this.state !== M.bc && this.state !== M.xQ && t.streamController.nextLevelSwitch())
                            }
                        }
                        super.resize(t, e, r)
                    }
                    recoverManifestError() {
                        const {
                            currentTime: t,
                            paused: e
                        } = this.video;
                        t || !e ? (this.restartStream(t), e || this.play().catch((() => {}))) : (this.hlsjs.stopLoad(), this.hlsjs.loadSource(this.src))
                    }
                    _eventsOn() {
                        const {
                            bandwidthMonitor: t,
                            eventHandler: e,
                            video: r
                        } = this;
                        e && e.on(), t.start(), (0, K.Nm)(this, r)
                    }
                    _eventsOff() {
                        const {
                            bandwidthMonitor: t,
                            eventHandler: e,
                            hlsjs: r,
                            video: i
                        } = this;
                        r && e && (this.disableTextTrack(), this.lastPosition = this.video.currentTime, r.detachMedia(), e.off()), this.off(null, null, this), t.stop(), this.resetLifecycleVariables(), (0, K.IP)(i)
                    }
                    handleError(t, e, r) {
                        this.resetLifecycleVariables(), this.trigger(M.Ew, new k.rG(r, t, e))
                    }
                    destroy() {
                        this.hlsjs && (this._eventsOff(), this.hlsjs.destroy(), this.hlsjs = null, this.hlsjsOptions = null)
                    }
                    restoreVideoProperties() {
                        this.savedVideoProperties && (this.volume(this.jwConfig.volume), this.mute(this.jwConfig.mute), this.savedVideoProperties = !1)
                    }
                    checkStaleManifest(t, e, r) {
                        const i = null !== this.jwConfig.liveTimeout ? 1e3 * this.jwConfig.liveTimeout : this.staleManifestDurationMultiplier * r;
                        e && this.lastEndSn === t && 0 !== i ? -1 === this.staleManifestTimeout && (this.staleManifestTimeout = window.setTimeout((() => {
                            this.checkStreamEnded()
                        }), i)) : this.stopStaleTimeout(), this.lastEndSn = t, this.live = e
                    }
                    checkStreamEnded() {
                        this.hlsjs && (this.video.ended || this.atEdgeOfLiveStream()) && (this.hlsjs.stopLoad(), this.handleError(D.ERROR_LIVE_STREAM_DOWN_OR_ENDED, null, k.Sp))
                    }
                    setCurrentLevel(t) {
                        this.currentHlsjsLevel = t, this.checkAdaptation(t), this.updateAudioTrack(this.hlsjs.levels[t])
                    }
                    _clearNonNativeCues() {
                        !this.renderNatively && this._textTracks && this._textTracks.forEach((t => {
                            this.clearCueData(t._id)
                        }))
                    }
                    static setEdition(t) {
                        L.supports = (0, B.Z)(t)
                    }
                }
            }(r.n(q)());
            class z extends X {
                getName() {
                    return {
                        name: "hlsjs"
                    }
                }
                static getName() {
                    return {
                        name: "hlsjs"
                    }
                }
            }
        },
        3343: (t, e, r) => {
            "use strict";
            r.d(e, {
                q: () => s
            });
            var i = r(6042),
                n = r(1643);
            const a = (t, e) => {
                    const r = t[e];
                    return (0, i.xV)(r) && r >= 0 ? r : null
                },
                s = function(t, e, r) {
                    const s = ((t, e, r) => {
                        let n, s;
                        if (n = (0, i.xV)(r.startPTS) ? a(r, "startPTS") : a(r, "start"), null === n) return null;
                        switch (t) {
                            case "PROGRAM-DATE-TIME":
                                return s = "program-date-time", {
                                    metadataType: s,
                                    programDateTime: e,
                                    start: n,
                                    end: n + a(r, "duration")
                                };
                            case "EXT-X-DATERANGE": {
                                const a = {},
                                    o = e.split(",").map((t => {
                                        const e = t.split("="),
                                            r = e[0],
                                            i = (e[1] || "").replace(/^"|"$/g, "");
                                        return a[r] = i, {
                                            name: r,
                                            value: i
                                        }
                                    })),
                                    l = a["START-DATE"];
                                if (!l) return null;
                                const u = a["END-DATE"];
                                let h = n;
                                if ((0, i.xV)(r.programDateTime) && (h += (new Date(l).getTime() - new Date(r.programDateTime).getTime()) / 1e3), isNaN(h)) return null;
                                let d = parseFloat(a["PLANNED-DURATION"] || a.DURATION) || 0;
                                return !d && u && (d = (new Date(u).getTime() - new Date(l).getTime()) / 1e3), s = "date-range", {
                                    metadataType: "date-range",
                                    tag: t,
                                    content: e,
                                    attributes: o,
                                    start: h,
                                    end: h + d,
                                    startDate: l,
                                    endDate: u,
                                    duration: d
                                }
                            }
                            case "EXT-X-CUE-IN":
                            case "EXT-X-CUE-OUT":
                                return s = "scte-35", {
                                    metadataType: s,
                                    tag: t,
                                    content: e,
                                    start: n,
                                    end: n + (parseFloat(e) || 0)
                                };
                            case "DISCONTINUITY": {
                                const i = n + a(r, "duration");
                                let o;
                                return "cc" in r && (o = r.cc), s = "discontinuity", {
                                    metadataType: s,
                                    tag: t,
                                    discontinuitySequence: o,
                                    PTS: e,
                                    start: n,
                                    end: i
                                }
                            }
                            default:
                                return null
                        }
                    })(t, e, r);
                    if (s) {
                        if (!(0, i.xV)(s.start)) return;
                        const a = this.createCue(s.start, s.end, JSON.stringify(s)),
                            o = `${r.sn}_${t}_${e}`;
                        if (this.addVTTCue({
                            type: "metadata",
                            cue: a
                        }, o)) {
                            const t = s.metadataType;
                            delete s.metadataType, this.trigger(n.O1, {
                                metadataType: t,
                                metadata: s
                            })
                        }
                    }
                }
        },
        4560: function(t, e) {
            var r, i;
            "undefined" != typeof window && (r = this, i = () => (() => {
                var t = {
                        21: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                default: () => u
                            });
                            var i = function() {
                                    function t(t, e) {
                                        this.subtle = void 0, this.aesIV = void 0, this.subtle = t, this.aesIV = e
                                    }
                                    return t.prototype.decrypt = function(t, e) {
                                        return this.subtle.decrypt({
                                            name: "AES-CBC",
                                            iv: this.aesIV
                                        }, e, t)
                                    }, t
                                }(),
                                n = function() {
                                    function t(t, e) {
                                        this.subtle = void 0, this.key = void 0, this.subtle = t, this.key = e
                                    }
                                    return t.prototype.expandKey = function() {
                                        return this.subtle.importKey("raw", this.key, {
                                            name: "AES-CBC"
                                        }, !1, ["encrypt", "decrypt"])
                                    }, t
                                }(),
                                a = r(145),
                                s = function() {
                                    function t() {
                                        this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable()
                                    }
                                    var e = t.prototype;
                                    return e.uint8ArrayToUint32Array_ = function(t) {
                                        for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = e.getUint32(4 * i);
                                        return r
                                    }, e.initTable = function() {
                                        var t = this.sBox,
                                            e = this.invSBox,
                                            r = this.subMix,
                                            i = r[0],
                                            n = r[1],
                                            a = r[2],
                                            s = r[3],
                                            o = this.invSubMix,
                                            l = o[0],
                                            u = o[1],
                                            h = o[2],
                                            d = o[3],
                                            c = new Uint32Array(256),
                                            f = 0,
                                            g = 0,
                                            v = 0;
                                        for (v = 0; v < 256; v++) c[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                                        for (v = 0; v < 256; v++) {
                                            var p = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                                            p = p >>> 8 ^ 255 & p ^ 99, t[f] = p, e[p] = f;
                                            var m = c[f],
                                                T = c[m],
                                                y = c[T],
                                                E = 257 * c[p] ^ 16843008 * p;
                                            i[f] = E << 24 | E >>> 8, n[f] = E << 16 | E >>> 16, a[f] = E << 8 | E >>> 24, s[f] = E, E = 16843009 * y ^ 65537 * T ^ 257 * m ^ 16843008 * f, l[p] = E << 24 | E >>> 8, u[p] = E << 16 | E >>> 16, h[p] = E << 8 | E >>> 24, d[p] = E, f ? (f = m ^ c[c[c[y ^ m]]], g ^= c[c[g]]) : f = g = 1
                                        }
                                    }, e.expandKey = function(t) {
                                        for (var e = this.uint8ArrayToUint32Array_(t), r = !0, i = 0; i < e.length && r;) r = e[i] === this.key[i], i++;
                                        if (!r) {
                                            this.key = e;
                                            var n = this.keySize = e.length;
                                            if (4 !== n && 6 !== n && 8 !== n) throw new Error("Invalid aes key size=" + n);
                                            var a, s, o, l, u = this.ksRows = 4 * (n + 6 + 1),
                                                h = this.keySchedule = new Uint32Array(u),
                                                d = this.invKeySchedule = new Uint32Array(u),
                                                c = this.sBox,
                                                f = this.rcon,
                                                g = this.invSubMix,
                                                v = g[0],
                                                p = g[1],
                                                m = g[2],
                                                T = g[3];
                                            for (a = 0; a < u; a++) a < n ? o = h[a] = e[a] : (l = o, a % n == 0 ? (l = c[(l = l << 8 | l >>> 24) >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l], l ^= f[a / n | 0] << 24) : n > 6 && a % n == 4 && (l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l]), h[a] = o = (h[a - n] ^ l) >>> 0);
                                            for (s = 0; s < u; s++) a = u - s, l = 3 & s ? h[a] : h[a - 4], d[s] = s < 4 || a <= 4 ? l : v[c[l >>> 24]] ^ p[c[l >>> 16 & 255]] ^ m[c[l >>> 8 & 255]] ^ T[c[255 & l]], d[s] = d[s] >>> 0
                                        }
                                    }, e.networkToHostOrderSwap = function(t) {
                                        return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
                                    }, e.decrypt = function(t, e, r) {
                                        for (var i, n, a, s, o, l, u, h, d, c, f, g, v, p, m = this.keySize + 6, T = this.invKeySchedule, y = this.invSBox, E = this.invSubMix, S = E[0], b = E[1], L = E[2], k = E[3], D = this.uint8ArrayToUint32Array_(r), R = D[0], A = D[1], _ = D[2], I = D[3], C = new Int32Array(t), w = new Int32Array(C.length), O = this.networkToHostOrderSwap; e < C.length;) {
                                            for (d = O(C[e]), c = O(C[e + 1]), f = O(C[e + 2]), g = O(C[e + 3]), o = d ^ T[0], l = g ^ T[1], u = f ^ T[2], h = c ^ T[3], v = 4, p = 1; p < m; p++) i = S[o >>> 24] ^ b[l >> 16 & 255] ^ L[u >> 8 & 255] ^ k[255 & h] ^ T[v], n = S[l >>> 24] ^ b[u >> 16 & 255] ^ L[h >> 8 & 255] ^ k[255 & o] ^ T[v + 1], a = S[u >>> 24] ^ b[h >> 16 & 255] ^ L[o >> 8 & 255] ^ k[255 & l] ^ T[v + 2], s = S[h >>> 24] ^ b[o >> 16 & 255] ^ L[l >> 8 & 255] ^ k[255 & u] ^ T[v + 3], o = i, l = n, u = a, h = s, v += 4;
                                            i = y[o >>> 24] << 24 ^ y[l >> 16 & 255] << 16 ^ y[u >> 8 & 255] << 8 ^ y[255 & h] ^ T[v], n = y[l >>> 24] << 24 ^ y[u >> 16 & 255] << 16 ^ y[h >> 8 & 255] << 8 ^ y[255 & o] ^ T[v + 1], a = y[u >>> 24] << 24 ^ y[h >> 16 & 255] << 16 ^ y[o >> 8 & 255] << 8 ^ y[255 & l] ^ T[v + 2], s = y[h >>> 24] << 24 ^ y[o >> 16 & 255] << 16 ^ y[l >> 8 & 255] << 8 ^ y[255 & u] ^ T[v + 3], w[e] = O(i ^ R), w[e + 1] = O(s ^ A), w[e + 2] = O(a ^ _), w[e + 3] = O(n ^ I), R = d, A = c, _ = f, I = g, e += 4
                                        }
                                        return w.buffer
                                    }, t
                                }(),
                                o = r(93),
                                l = r(63),
                                u = function() {
                                    function t(t, e, r) {
                                        var i = (void 0 === r ? {} : r).removePKCS7Padding,
                                            n = void 0 === i || i;
                                        if (this.logEnabled = !0, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = t, this.config = e, this.removePKCS7Padding = n, n) try {
                                            var a = self.crypto;
                                            a && (this.subtle = a.subtle || a.webkitSubtle)
                                        } catch (t) {}
                                        null === this.subtle && (this.config.enableSoftwareAES = !0)
                                    }
                                    var e = t.prototype;
                                    return e.destroy = function() {
                                        this.observer = null
                                    }, e.isSync = function() {
                                        return this.config.enableSoftwareAES
                                    }, e.flush = function() {
                                        var t = this.currentResult;
                                        if (t) {
                                            var e, r, i, n = new Uint8Array(t);
                                            return this.reset(), this.removePKCS7Padding ? (i = (r = (e = n).byteLength) && new DataView(e.buffer).getUint8(r - 1)) ? (0, a.sliceUint8)(e, 0, r - i) : e : n
                                        }
                                        this.reset()
                                    }, e.reset = function() {
                                        this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
                                    }, e.decrypt = function(t, e, r, i) {
                                        if (this.config.enableSoftwareAES) {
                                            this.softwareDecrypt(new Uint8Array(t), e, r);
                                            var n = this.flush();
                                            n && i(n.buffer)
                                        } else this.webCryptoDecrypt(new Uint8Array(t), e, r).then(i)
                                    }, e.softwareDecrypt = function(t, e, r) {
                                        var i = this.currentIV,
                                            n = this.currentResult,
                                            o = this.remainderData;
                                        this.logOnce("JS AES decrypt"), o && (t = (0, l.appendUint8Array)(o, t), this.remainderData = null);
                                        var u = this.getValidChunk(t);
                                        if (!u.length) return null;
                                        i && (r = i);
                                        var h = this.softwareDecrypter;
                                        h || (h = this.softwareDecrypter = new s), h.expandKey(e);
                                        var d = n;
                                        return this.currentResult = h.decrypt(u.buffer, 0, r), this.currentIV = (0, a.sliceUint8)(u, -16).buffer, d || null
                                    }, e.webCryptoDecrypt = function(t, e, r) {
                                        var a = this,
                                            s = this.subtle;
                                        return this.key === e && this.fastAesKey || (this.key = e, this.fastAesKey = new n(s, e)), this.fastAesKey.expandKey().then((function(e) {
                                            return s ? new i(s, r).decrypt(t.buffer, e) : Promise.reject(new Error("web crypto not initialized"))
                                        })).catch((function(i) {
                                            return a.onWebCryptoError(i, t, e, r)
                                        }))
                                    }, e.onWebCryptoError = function(t, e, r, i) {
                                        return o.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", t), this.config.enableSoftwareAES = !0, this.logEnabled = !0, this.softwareDecrypt(e, r, i)
                                    }, e.getValidChunk = function(t) {
                                        var e = t,
                                            r = t.length - t.length % 16;
                                        return r !== t.length && (e = (0, a.sliceUint8)(t, 0, r), this.remainderData = (0, a.sliceUint8)(t, r)), e
                                    }, e.logOnce = function(t) {
                                        this.logEnabled && (o.logger.log("[decrypter.ts]: " + t), this.logEnabled = !1)
                                    }, t
                                }()
                        },
                        181: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                canParse: () => l,
                                decodeFrame: () => f,
                                getID3Data: () => s,
                                getID3Frames: () => c,
                                getTimeStamp: () => u,
                                isFooter: () => a,
                                isHeader: () => n,
                                isTimeStampFrame: () => h,
                                testables: () => y,
                                utf8ArrayToStr: () => T
                            });
                            var i, n = function(t, e) {
                                    return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                                },
                                a = function(t, e) {
                                    return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                                },
                                s = function(t, e) {
                                    for (var r = e, i = 0; n(t, e);) i += 10, i += o(t, e + 6), a(t, e + 10) && (i += 10), e += i;
                                    if (i > 0) return t.subarray(r, r + i)
                                },
                                o = function(t, e) {
                                    var r = 0;
                                    return r = (127 & t[e]) << 21, r |= (127 & t[e + 1]) << 14, (r |= (127 & t[e + 2]) << 7) | 127 & t[e + 3]
                                },
                                l = function(t, e) {
                                    return n(t, e) && o(t, e + 6) + 10 <= t.length - e
                                },
                                u = function(t) {
                                    for (var e = c(t), r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        if (h(i)) return m(i)
                                    }
                                },
                                h = function(t) {
                                    return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
                                },
                                d = function(t) {
                                    var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
                                        r = o(t, 4);
                                    return {
                                        type: e,
                                        size: r,
                                        data: t.subarray(10, 10 + r)
                                    }
                                },
                                c = function(t) {
                                    for (var e = 0, r = []; n(t, e);) {
                                        for (var i = o(t, e + 6), s = (e += 10) + i; e + 8 < s;) {
                                            var l = d(t.subarray(e)),
                                                u = f(l);
                                            u && r.push(u), e += l.size + 10
                                        }
                                        a(t, e) && (e += 10)
                                    }
                                    return r
                                },
                                f = function(t) {
                                    return "PRIV" === t.type ? g(t) : "W" === t.type[0] ? p(t) : v(t)
                                },
                                g = function(t) {
                                    if (!(t.size < 2)) {
                                        var e = T(t.data, !0),
                                            r = new Uint8Array(t.data.subarray(e.length + 1));
                                        return {
                                            key: t.type,
                                            info: e,
                                            data: r.buffer
                                        }
                                    }
                                },
                                v = function(t) {
                                    if (!(t.size < 2)) {
                                        if ("TXXX" === t.type) {
                                            var e = 1,
                                                r = T(t.data.subarray(e), !0);
                                            e += r.length + 1;
                                            var i = T(t.data.subarray(e));
                                            return {
                                                key: t.type,
                                                info: r,
                                                data: i
                                            }
                                        }
                                        var n = T(t.data.subarray(1));
                                        return {
                                            key: t.type,
                                            data: n
                                        }
                                    }
                                },
                                p = function(t) {
                                    if ("WXXX" === t.type) {
                                        if (t.size < 2) return;
                                        var e = 1,
                                            r = T(t.data.subarray(e), !0);
                                        e += r.length + 1;
                                        var i = T(t.data.subarray(e));
                                        return {
                                            key: t.type,
                                            info: r,
                                            data: i
                                        }
                                    }
                                    var n = T(t.data);
                                    return {
                                        key: t.type,
                                        data: n
                                    }
                                },
                                m = function(t) {
                                    if (8 === t.data.byteLength) {
                                        var e = new Uint8Array(t.data),
                                            r = 1 & e[3],
                                            i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                                        return i /= 45, r && (i += 47721858.84), Math.round(i)
                                    }
                                },
                                T = function(t, e) {
                                    void 0 === e && (e = !1);
                                    var r = E();
                                    if (r) {
                                        var i = r.decode(t);
                                        if (e) {
                                            var n = i.indexOf("\0");
                                            return -1 !== n ? i.substring(0, n) : i
                                        }
                                        return i.replace(/\0/g, "")
                                    }
                                    for (var a, s, o, l = t.length, u = "", h = 0; h < l;) {
                                        if (0 === (a = t[h++]) && e) return u;
                                        if (0 !== a && 3 !== a) switch (a >> 4) {
                                            case 0:
                                            case 1:
                                            case 2:
                                            case 3:
                                            case 4:
                                            case 5:
                                            case 6:
                                            case 7:
                                                u += String.fromCharCode(a);
                                                break;
                                            case 12:
                                            case 13:
                                                s = t[h++], u += String.fromCharCode((31 & a) << 6 | 63 & s);
                                                break;
                                            case 14:
                                                s = t[h++], o = t[h++], u += String.fromCharCode((15 & a) << 12 | (63 & s) << 6 | (63 & o) << 0)
                                        }
                                    }
                                    return u
                                },
                                y = {
                                    decodeTextFrame: v
                                };

                            function E() {
                                return i || void 0 === self.TextDecoder || (i = new self.TextDecoder("utf-8")), i
                            }
                        },
                        182: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                default: () => o
                            });
                            var i = r(544),
                                n = r(851),
                                a = r(93),
                                s = r(729);

                            function o(t) {
                                var e = new s.EventEmitter,
                                    r = function(e, r) {
                                        t.postMessage({
                                            event: e,
                                            data: r
                                        })
                                    };
                                e.on(n.Events.FRAG_DECRYPTED, r), e.on(n.Events.ERROR, r), t.addEventListener("message", (function(n) {
                                    var s = n.data;
                                    switch (s.cmd) {
                                        case "init":
                                            var o = JSON.parse(s.config);
                                            t.transmuxer = new i.default(e, s.typeSupported, o, s.vendor, s.id), (0, a.enableLogs)(o.debug, s.id),
                                                function() {
                                                    var t = function(t) {
                                                        a.logger[t] = function(e) {
                                                            r("workerLog", {
                                                                logType: t,
                                                                message: e
                                                            })
                                                        }
                                                    };
                                                    for (var e in a.logger) t(e)
                                                }(), r("init", null);
                                            break;
                                        case "configure":
                                            t.transmuxer.configure(s.config);
                                            break;
                                        case "demux":
                                            var u = t.transmuxer.push(s.data, s.decryptdata, s.chunkMeta, s.state);
                                            (0, i.isPromise)(u) ? u.then((function(e) {
                                                l(t, e)
                                            })): l(t, u);
                                            break;
                                        case "flush":
                                            var d = s.chunkMeta,
                                                c = t.transmuxer.flush(d);
                                            (0, i.isPromise)(c) ? c.then((function(e) {
                                                h(t, e, d)
                                            })): h(t, c, d)
                                    }
                                }))
                            }

                            function l(t, e) {
                                if (!((r = e.remuxResult).audio || r.video || r.text || r.id3 || r.initSegment)) return !1;
                                var r, i = [],
                                    n = e.remuxResult,
                                    a = n.audio,
                                    s = n.video;
                                return a && u(i, a), s && u(i, s), t.postMessage({
                                    event: "transmuxComplete",
                                    data: e
                                }, i), !0
                            }

                            function u(t, e) {
                                e.data1 && t.push(e.data1.buffer), e.data2 && t.push(e.data2.buffer)
                            }

                            function h(t, e, r) {
                                e.reduce((function(e, r) {
                                    return l(t, r) || e
                                }), !1) || t.postMessage({
                                    event: "transmuxComplete",
                                    data: e[0]
                                }), t.postMessage({
                                    event: "flush",
                                    data: r
                                })
                            }
                        },
                        544: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                TransmuxConfig: () => at,
                                TransmuxState: () => st,
                                default: () => rt,
                                isPromise: () => nt
                            });
                            var i = r(851),
                                n = r(973),
                                a = r(21),
                                s = r(965),
                                o = r(181),
                                l = r(856);

                            function u(t, e) {
                                return void 0 === t && (t = ""), void 0 === e && (e = 9e4), {
                                    type: t,
                                    id: -1,
                                    pid: -1,
                                    inputTimeScale: e,
                                    sequenceNumber: -1,
                                    samples: [],
                                    dropped: 0
                                }
                            }
                            var h = r(63),
                                d = r(145),
                                c = function() {
                                    function t() {
                                        this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null
                                    }
                                    var e = t.prototype;
                                    return e.resetInitSegment = function(t, e, r, i) {
                                        this._id3Track = {
                                            type: "id3",
                                            id: 3,
                                            pid: -1,
                                            inputTimeScale: 9e4,
                                            sequenceNumber: 0,
                                            samples: [],
                                            dropped: 0
                                        }
                                    }, e.resetTimeStamp = function(t) {
                                        this.initPTS = t, this.resetContiguity()
                                    }, e.resetContiguity = function() {
                                        this.basePTS = null, this.lastPTS = null, this.frameIndex = 0
                                    }, e.canParse = function(t, e) {
                                        return !1
                                    }, e.appendFrame = function(t, e, r) {}, e.demux = function(t, e) {
                                        this.cachedData && (t = (0, h.appendUint8Array)(this.cachedData, t), this.cachedData = null);
                                        var r, i = o.getID3Data(t, 0),
                                            n = i ? i.length : 0,
                                            a = this._audioTrack,
                                            c = this._id3Track,
                                            g = i ? o.getTimeStamp(i) : void 0,
                                            v = t.length;
                                        for ((null === this.basePTS || 0 === this.frameIndex && (0, s.isFiniteNumber)(g)) && (this.basePTS = f(g, e, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), i && i.length > 0 && c.samples.push({
                                            pts: this.lastPTS,
                                            dts: this.lastPTS,
                                            data: i,
                                            type: l.MetadataSchema.audioId3,
                                            duration: Number.POSITIVE_INFINITY
                                        }); n < v;) {
                                            if (this.canParse(t, n)) {
                                                var p = this.appendFrame(a, t, n);
                                                p ? (this.frameIndex++, this.lastPTS = p.sample.pts, r = n += p.length) : n = v
                                            } else o.canParse(t, n) ? (i = o.getID3Data(t, n), c.samples.push({
                                                pts: this.lastPTS,
                                                dts: this.lastPTS,
                                                data: i,
                                                type: l.MetadataSchema.audioId3,
                                                duration: Number.POSITIVE_INFINITY
                                            }), r = n += i.length) : n++;
                                            if (n === v && r !== v) {
                                                var m = (0, d.sliceUint8)(t, r);
                                                this.cachedData ? this.cachedData = (0, h.appendUint8Array)(this.cachedData, m) : this.cachedData = m
                                            }
                                        }
                                        return {
                                            audioTrack: a,
                                            videoTrack: u(),
                                            id3Track: c,
                                            textTrack: u()
                                        }
                                    }, e.demuxSampleAes = function(t, e, r) {
                                        return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
                                    }, e.flush = function(t) {
                                        var e = this.cachedData;
                                        return e && (this.cachedData = null, this.demux(e, 0)), {
                                            audioTrack: this._audioTrack,
                                            videoTrack: u(),
                                            id3Track: this._id3Track,
                                            textTrack: u()
                                        }
                                    }, e.destroy = function() {}, t
                                }(),
                                f = function(t, e, r) {
                                    return (0, s.isFiniteNumber)(t) ? 90 * t : 9e4 * e + (r || 0)
                                };
                            const g = c;
                            var v = r(93);

                            function p(t, e) {
                                return 255 === t[e] && 240 == (246 & t[e + 1])
                            }

                            function m(t, e) {
                                return 1 & t[e + 1] ? 7 : 9
                            }

                            function T(t, e) {
                                return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
                            }

                            function y(t, e) {
                                return e + 1 < t.length && p(t, e)
                            }

                            function E(t, e) {
                                if (y(t, e)) {
                                    var r = m(t, e);
                                    if (e + r >= t.length) return !1;
                                    var i = T(t, e);
                                    if (i <= r) return !1;
                                    var n = e + i;
                                    return n === t.length || y(t, n)
                                }
                                return !1
                            }

                            function S(t, e, r, a, s) {
                                if (!t.samplerate) {
                                    var o = function(t, e, r, a) {
                                        var s, o, l, u, h = navigator.userAgent.toLowerCase(),
                                            d = a,
                                            c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                                        s = 1 + ((192 & e[r + 2]) >>> 6);
                                        var f = (60 & e[r + 2]) >>> 2;
                                        if (!(f > c.length - 1)) return l = (1 & e[r + 2]) << 2, l |= (192 & e[r + 3]) >>> 6, v.logger.log("manifest codec:" + a + ", ADTS type:" + s + ", samplingIndex:" + f), /firefox/i.test(h) ? f >= 6 ? (s = 5, u = new Array(4), o = f - 3) : (s = 2, u = new Array(2), o = f) : -1 !== h.indexOf("android") ? (s = 2, u = new Array(2), o = f) : (s = 5, u = new Array(4), a && (-1 !== a.indexOf("mp4a.40.29") || -1 !== a.indexOf("mp4a.40.5")) || !a && f >= 6 ? o = f - 3 : ((a && -1 !== a.indexOf("mp4a.40.2") && (f >= 6 && 1 === l || /vivaldi/i.test(h)) || !a && 1 === l) && (s = 2, u = new Array(2)), o = f)), u[0] = s << 3, u[0] |= (14 & f) >> 1, u[1] |= (1 & f) << 7, u[1] |= l << 3, 5 === s && (u[1] |= (14 & o) >> 1, u[2] = (1 & o) << 7, u[2] |= 8, u[3] = 0), {
                                            config: u,
                                            samplerate: c[f],
                                            channelCount: l,
                                            codec: "mp4a.40." + s,
                                            manifestCodec: d
                                        };
                                        t.trigger(i.Events.ERROR, {
                                            type: n.ErrorTypes.MEDIA_ERROR,
                                            details: n.ErrorDetails.FRAG_PARSING_ERROR,
                                            fatal: !0,
                                            reason: "invalid ADTS sampling index:" + f
                                        })
                                    }(e, r, a, s);
                                    if (!o) return;
                                    t.config = o.config, t.samplerate = o.samplerate, t.channelCount = o.channelCount, t.codec = o.codec, t.manifestCodec = o.manifestCodec, v.logger.log("parsed codec:" + t.codec + ", rate:" + o.samplerate + ", channels:" + o.channelCount)
                                }
                            }

                            function b(t) {
                                return 9216e4 / t
                            }

                            function L(t, e, r, i, n) {
                                var a, s = i + n * b(t.samplerate),
                                    o = function(t, e) {
                                        var r = m(t, e);
                                        if (e + r <= t.length) {
                                            var i = T(t, e) - r;
                                            if (i > 0) return {
                                                headerLength: r,
                                                frameLength: i
                                            }
                                        }
                                    }(e, r);
                                if (o) {
                                    var l = o.frameLength,
                                        u = o.headerLength,
                                        h = u + l,
                                        d = Math.max(0, r + h - e.length);
                                    d ? (a = new Uint8Array(h - u)).set(e.subarray(r + u, e.length), 0) : a = e.subarray(r + u, r + h);
                                    var c = {
                                        unit: a,
                                        pts: s
                                    };
                                    return d || t.samples.push(c), {
                                        sample: c,
                                        length: h,
                                        missing: d
                                    }
                                }
                                var f = e.length - r;
                                return (a = new Uint8Array(f)).set(e.subarray(r, e.length), 0), {
                                    sample: {
                                        unit: a,
                                        pts: s
                                    },
                                    length: f,
                                    missing: -1
                                }
                            }

                            function k(t, e) {
                                return k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, k(t, e)
                            }
                            const D = function(t) {
                                var e, r;

                                function i(e, r) {
                                    var i;
                                    return (i = t.call(this) || this).observer = void 0, i.config = void 0, i.observer = e, i.config = r, i
                                }
                                r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, k(e, r);
                                var n = i.prototype;
                                return n.resetInitSegment = function(e, r, i, n) {
                                    t.prototype.resetInitSegment.call(this, e, r, i, n), this._audioTrack = {
                                        container: "audio/adts",
                                        type: "audio",
                                        id: 2,
                                        pid: -1,
                                        sequenceNumber: 0,
                                        segmentCodec: "aac",
                                        samples: [],
                                        manifestCodec: r,
                                        duration: n,
                                        inputTimeScale: 9e4,
                                        dropped: 0
                                    }
                                }, i.probe = function(t) {
                                    if (!t) return !1;
                                    for (var e = (o.getID3Data(t, 0) || []).length, r = t.length; e < r; e++)
                                        if (E(t, e)) return v.logger.log("ADTS sync word found !"), !0;
                                    return !1
                                }, n.canParse = function(t, e) {
                                    return function(t, e) {
                                        return function(t, e) {
                                            return e + 5 < t.length
                                        }(t, e) && p(t, e) && T(t, e) <= t.length - e
                                    }(t, e)
                                }, n.appendFrame = function(t, e, r) {
                                    S(t, this.observer, e, r, t.manifestCodec);
                                    var i = L(t, e, r, this.basePTS, this.frameIndex);
                                    if (i && 0 === i.missing) return i
                                }, i
                            }(g);
                            var R = /\/emsg[-/]ID3/i;
                            const A = function() {
                                function t(t, e) {
                                    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = e
                                }
                                var e = t.prototype;
                                return e.resetTimeStamp = function() {}, e.resetInitSegment = function(t, e, r, i) {
                                    var n = (0, h.parseInitSegment)(t),
                                        a = this.videoTrack = u("video", 1),
                                        s = this.audioTrack = u("audio", 1),
                                        o = this.txtTrack = u("text", 1);
                                    if (this.id3Track = u("id3", 1), this.timeOffset = 0, n.video) {
                                        var l = n.video,
                                            d = l.id,
                                            c = l.timescale,
                                            f = l.codec;
                                        a.id = d, a.timescale = o.timescale = c, a.codec = f
                                    }
                                    if (n.audio) {
                                        var g = n.audio,
                                            v = g.id,
                                            p = g.timescale,
                                            m = g.codec;
                                        s.id = v, s.timescale = p, s.codec = m
                                    }
                                    o.id = h.RemuxerTrackIdConfig.text, a.sampleDuration = 0, a.duration = s.duration = i
                                }, e.resetContiguity = function() {}, t.probe = function(t) {
                                    return t = t.length > 16384 ? t.subarray(0, 16384) : t, (0, h.findBox)(t, ["moof"]).length > 0
                                }, e.demux = function(t, e) {
                                    this.timeOffset = e;
                                    var r = t,
                                        i = this.videoTrack,
                                        n = this.txtTrack;
                                    if (this.config.progressive) {
                                        this.remainderData && (r = (0, h.appendUint8Array)(this.remainderData, t));
                                        var a = (0, h.segmentValidRange)(r);
                                        this.remainderData = a.remainder, i.samples = a.valid || new Uint8Array
                                    } else i.samples = r;
                                    var s = this.extractID3Track(i, e);
                                    return n.samples = (0, h.parseSamples)(e, i), {
                                        videoTrack: i,
                                        audioTrack: this.audioTrack,
                                        id3Track: s,
                                        textTrack: this.txtTrack
                                    }
                                }, e.flush = function() {
                                    var t = this.timeOffset,
                                        e = this.videoTrack,
                                        r = this.txtTrack;
                                    e.samples = this.remainderData || new Uint8Array, this.remainderData = null;
                                    var i = this.extractID3Track(e, this.timeOffset);
                                    return r.samples = (0, h.parseSamples)(t, e), {
                                        videoTrack: e,
                                        audioTrack: u(),
                                        id3Track: i,
                                        textTrack: u()
                                    }
                                }, e.extractID3Track = function(t, e) {
                                    var r = this.id3Track;
                                    if (t.samples.length) {
                                        var i = (0, h.findBox)(t.samples, ["emsg"]);
                                        i && i.forEach((function(t) {
                                            var i = (0, h.parseEmsg)(t);
                                            if (R.test(i.schemeIdUri)) {
                                                var n = (0, s.isFiniteNumber)(i.presentationTime) ? i.presentationTime / i.timeScale : e + i.presentationTimeDelta / i.timeScale,
                                                    a = 4294967295 === i.eventDuration ? Number.POSITIVE_INFINITY : i.eventDuration / i.timeScale;
                                                a <= .001 && (a = Number.POSITIVE_INFINITY);
                                                var o = i.payload;
                                                r.samples.push({
                                                    data: o,
                                                    len: o.byteLength,
                                                    dts: n,
                                                    pts: n,
                                                    type: l.MetadataSchema.emsg,
                                                    duration: a
                                                })
                                            }
                                        }))
                                    }
                                    return r
                                }, e.demuxSampleAes = function(t, e, r) {
                                    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
                                }, e.destroy = function() {}, t
                            }();
                            var _ = null,
                                I = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                                C = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                                w = [
                                    [0, 72, 144, 12],
                                    [0, 0, 0, 0],
                                    [0, 72, 144, 12],
                                    [0, 144, 144, 12]
                                ],
                                O = [0, 1, 1, 4];

                            function x(t, e, r, i, n) {
                                if (!(r + 24 > e.length)) {
                                    var a = P(e, r);
                                    if (a && r + a.frameLength <= e.length) {
                                        var s = i + n * (9e4 * a.samplesPerFrame / a.sampleRate),
                                            o = {
                                                unit: e.subarray(r, r + a.frameLength),
                                                pts: s,
                                                dts: s
                                            };
                                        return t.config = [], t.channelCount = a.channelCount, t.samplerate = a.sampleRate, t.samples.push(o), {
                                            sample: o,
                                            length: a.frameLength,
                                            missing: 0
                                        }
                                    }
                                }
                            }

                            function P(t, e) {
                                var r = t[e + 1] >> 3 & 3,
                                    i = t[e + 1] >> 1 & 3,
                                    n = t[e + 2] >> 4 & 15,
                                    a = t[e + 2] >> 2 & 3;
                                if (1 !== r && 0 !== n && 15 !== n && 3 !== a) {
                                    var s = t[e + 2] >> 1 & 1,
                                        o = t[e + 3] >> 6,
                                        l = 1e3 * I[14 * (3 === r ? 3 - i : 3 === i ? 3 : 4) + n - 1],
                                        u = C[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + a],
                                        h = 3 === o ? 1 : 2,
                                        d = w[r][i],
                                        c = O[i],
                                        f = 8 * d * c,
                                        g = Math.floor(d * l / u + s) * c;
                                    if (null === _) {
                                        var v = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                                        _ = v ? parseInt(v[1]) : 0
                                    }
                                    return !!_ && _ <= 87 && 2 === i && l >= 224e3 && 0 === o && (t[e + 3] = 128 | t[e + 3]), {
                                        sampleRate: u,
                                        channelCount: h,
                                        frameLength: g,
                                        samplesPerFrame: f
                                    }
                                }
                            }

                            function F(t, e) {
                                return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
                            }

                            function M(t, e) {
                                return e + 1 < t.length && F(t, e)
                            }

                            function N(t, e) {
                                if (e + 1 < t.length && F(t, e)) {
                                    var r = P(t, e),
                                        i = 4;
                                    null != r && r.frameLength && (i = r.frameLength);
                                    var n = e + i;
                                    return n === t.length || M(t, n)
                                }
                                return !1
                            }
                            const U = function() {
                                    function t(t) {
                                        this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0
                                    }
                                    var e = t.prototype;
                                    return e.loadWord = function() {
                                        var t = this.data,
                                            e = this.bytesAvailable,
                                            r = t.byteLength - e,
                                            i = new Uint8Array(4),
                                            n = Math.min(4, e);
                                        if (0 === n) throw new Error("no bytes available");
                                        i.set(t.subarray(r, r + n)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * n, this.bytesAvailable -= n
                                    }, e.skipBits = function(t) {
                                        var e;
                                        this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, t -= (e = t >> 3) >> 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
                                    }, e.readBits = function(t) {
                                        var e = Math.min(this.bitsAvailable, t),
                                            r = this.word >>> 32 - e;
                                        return t > 32 && v.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), (e = t - e) > 0 && this.bitsAvailable ? r << e | this.readBits(e) : r
                                    }, e.skipLZ = function() {
                                        var t;
                                        for (t = 0; t < this.bitsAvailable; ++t)
                                            if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
                                        return this.loadWord(), t + this.skipLZ()
                                    }, e.skipUEG = function() {
                                        this.skipBits(1 + this.skipLZ())
                                    }, e.skipEG = function() {
                                        this.skipBits(1 + this.skipLZ())
                                    }, e.readUEG = function() {
                                        var t = this.skipLZ();
                                        return this.readBits(t + 1) - 1
                                    }, e.readEG = function() {
                                        var t = this.readUEG();
                                        return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
                                    }, e.readBoolean = function() {
                                        return 1 === this.readBits(1)
                                    }, e.readUByte = function() {
                                        return this.readBits(8)
                                    }, e.readUShort = function() {
                                        return this.readBits(16)
                                    }, e.readUInt = function() {
                                        return this.readBits(32)
                                    }, e.skipScalingList = function(t) {
                                        for (var e = 8, r = 8, i = 0; i < t; i++) 0 !== r && (r = (e + this.readEG() + 256) % 256), e = 0 === r ? e : r
                                    }, e.readSPS = function() {
                                        var t, e, r, i = 0,
                                            n = 0,
                                            a = 0,
                                            s = 0,
                                            o = this.readUByte.bind(this),
                                            l = this.readBits.bind(this),
                                            u = this.readUEG.bind(this),
                                            h = this.readBoolean.bind(this),
                                            d = this.skipBits.bind(this),
                                            c = this.skipEG.bind(this),
                                            f = this.skipUEG.bind(this),
                                            g = this.skipScalingList.bind(this);
                                        o();
                                        var v = o();
                                        if (l(5), d(3), o(), f(), 100 === v || 110 === v || 122 === v || 244 === v || 44 === v || 83 === v || 86 === v || 118 === v || 128 === v) {
                                            var p = u();
                                            if (3 === p && d(1), f(), f(), d(1), h())
                                                for (e = 3 !== p ? 8 : 12, r = 0; r < e; r++) h() && g(r < 6 ? 16 : 64)
                                        }
                                        f();
                                        var m = u();
                                        if (0 === m) u();
                                        else if (1 === m)
                                            for (d(1), c(), c(), t = u(), r = 0; r < t; r++) c();
                                        f(), d(1);
                                        var T = u(),
                                            y = u(),
                                            E = l(1);
                                        0 === E && d(1), d(1), h() && (i = u(), n = u(), a = u(), s = u());
                                        var S = [1, 1];
                                        if (h() && h()) switch (o()) {
                                            case 1:
                                                S = [1, 1];
                                                break;
                                            case 2:
                                                S = [12, 11];
                                                break;
                                            case 3:
                                                S = [10, 11];
                                                break;
                                            case 4:
                                                S = [16, 11];
                                                break;
                                            case 5:
                                                S = [40, 33];
                                                break;
                                            case 6:
                                                S = [24, 11];
                                                break;
                                            case 7:
                                                S = [20, 11];
                                                break;
                                            case 8:
                                                S = [32, 11];
                                                break;
                                            case 9:
                                                S = [80, 33];
                                                break;
                                            case 10:
                                                S = [18, 11];
                                                break;
                                            case 11:
                                                S = [15, 11];
                                                break;
                                            case 12:
                                                S = [64, 33];
                                                break;
                                            case 13:
                                                S = [160, 99];
                                                break;
                                            case 14:
                                                S = [4, 3];
                                                break;
                                            case 15:
                                                S = [3, 2];
                                                break;
                                            case 16:
                                                S = [2, 1];
                                                break;
                                            case 255:
                                                S = [o() << 8 | o(), o() << 8 | o()]
                                        }
                                        return {
                                            width: Math.ceil(16 * (T + 1) - 2 * i - 2 * n),
                                            height: (2 - E) * (y + 1) * 16 - (E ? 2 : 4) * (a + s),
                                            pixelRatio: S
                                        }
                                    }, e.readSliceType = function() {
                                        return this.readUByte(), this.readUEG(), this.readUEG()
                                    }, t
                                }(),
                                B = function() {
                                    function t(t, e, r) {
                                        this.keyData = void 0, this.decrypter = void 0, this.keyData = r, this.decrypter = new a.default(t, e, {
                                            removePKCS7Padding: !1
                                        })
                                    }
                                    var e = t.prototype;
                                    return e.decryptBuffer = function(t, e) {
                                        this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer, e)
                                    }, e.decryptAacSample = function(t, e, r, i) {
                                        var n = t[e].unit;
                                        if (!(n.length <= 16)) {
                                            var a = n.subarray(16, n.length - n.length % 16),
                                                s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
                                                o = this;
                                            this.decryptBuffer(s, (function(a) {
                                                var s = new Uint8Array(a);
                                                n.set(s, 16), i || o.decryptAacSamples(t, e + 1, r)
                                            }))
                                        }
                                    }, e.decryptAacSamples = function(t, e, r) {
                                        for (;; e++) {
                                            if (e >= t.length) return void r();
                                            if (!(t[e].unit.length < 32)) {
                                                var i = this.decrypter.isSync();
                                                if (this.decryptAacSample(t, e, r, i), !i) return
                                            }
                                        }
                                    }, e.getAvcEncryptedData = function(t) {
                                        for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, r = new Int8Array(e), i = 0, n = 32; n < t.length - 16; n += 160, i += 16) r.set(t.subarray(n, n + 16), i);
                                        return r
                                    }, e.getAvcDecryptedUnit = function(t, e) {
                                        for (var r = new Uint8Array(e), i = 0, n = 32; n < t.length - 16; n += 160, i += 16) t.set(r.subarray(i, i + 16), n);
                                        return t
                                    }, e.decryptAvcSample = function(t, e, r, i, n, a) {
                                        var s = (0, h.discardEPB)(n.data),
                                            o = this.getAvcEncryptedData(s),
                                            l = this;
                                        this.decryptBuffer(o.buffer, (function(o) {
                                            n.data = l.getAvcDecryptedUnit(s, o), a || l.decryptAvcSamples(t, e, r + 1, i)
                                        }))
                                    }, e.decryptAvcSamples = function(t, e, r, i) {
                                        if (t instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
                                        for (;; e++, r = 0) {
                                            if (e >= t.length) return void i();
                                            for (var n = t[e].units; !(r >= n.length); r++) {
                                                var a = n[r];
                                                if (!(a.data.length <= 48 || 1 !== a.type && 5 !== a.type)) {
                                                    var s = this.decrypter.isSync();
                                                    if (this.decryptAvcSample(t, e, r, i, a, s), !s) return
                                                }
                                            }
                                        }
                                    }, t
                                }();

                            function G() {
                                return G = Object.assign ? Object.assign.bind() : function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                    }
                                    return t
                                }, G.apply(this, arguments)
                            }
                            var j = 188;

                            function H(t, e, r, i) {
                                return {
                                    key: t,
                                    frame: !1,
                                    pts: e,
                                    dts: r,
                                    units: [],
                                    debug: i,
                                    length: 0
                                }
                            }

                            function K(t, e) {
                                return (31 & t[e + 10]) << 8 | t[e + 11]
                            }

                            function V(t, e, r, i) {
                                var n = {
                                        audio: -1,
                                        avc: -1,
                                        id3: -1,
                                        segmentCodec: "aac"
                                    },
                                    a = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4;
                                for (e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < a;) {
                                    var s = (31 & t[e + 1]) << 8 | t[e + 2];
                                    switch (t[e]) {
                                        case 207:
                                            if (!i) {
                                                v.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                                                break
                                            }
                                        case 15:
                                            -1 === n.audio && (n.audio = s);
                                            break;
                                        case 21:
                                            -1 === n.id3 && (n.id3 = s);
                                            break;
                                        case 219:
                                            if (!i) {
                                                v.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                                                break
                                            }
                                        case 27:
                                            -1 === n.avc && (n.avc = s);
                                            break;
                                        case 3:
                                        case 4:
                                            !0 !== r.mpeg && !0 !== r.mp3 ? v.logger.log("MPEG audio found, not supported in this browser") : -1 === n.audio && (n.audio = s, n.segmentCodec = "mp3");
                                            break;
                                        case 36:
                                            v.logger.warn("Unsupported HEVC stream type found")
                                    }
                                    e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
                                }
                                return n
                            }

                            function W(t) {
                                var e, r, i, n, a, s = 0,
                                    o = t.data;
                                if (!t || 0 === t.size) return null;
                                for (; o[0].length < 19 && o.length > 1;) {
                                    var l = new Uint8Array(o[0].length + o[1].length);
                                    l.set(o[0]), l.set(o[1], o[0].length), o[0] = l, o.splice(1, 1)
                                }
                                if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
                                    if ((r = (e[4] << 8) + e[5]) && r > t.size - 6) return null;
                                    var u = e[7];
                                    192 & u && (n = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, 64 & u ? n - (a = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2) > 54e5 && (v.logger.warn(Math.round((n - a) / 9e4) + "s delta between PTS and DTS, align them"), n = a) : a = n);
                                    var h = (i = e[8]) + 9;
                                    if (t.size <= h) return null;
                                    t.size -= h;
                                    for (var d = new Uint8Array(t.size), c = 0, f = o.length; c < f; c++) {
                                        var g = (e = o[c]).byteLength;
                                        if (h) {
                                            if (h > g) {
                                                h -= g;
                                                continue
                                            }
                                            e = e.subarray(h), g -= h, h = 0
                                        }
                                        d.set(e, s), s += g
                                    }
                                    return r && (r -= i + 3), {
                                        data: d,
                                        pts: n,
                                        dts: a,
                                        len: r
                                    }
                                }
                                return null
                            }

                            function Y(t, e) {
                                if (t.units.length && t.frame) {
                                    if (void 0 === t.pts) {
                                        var r = e.samples,
                                            i = r.length;
                                        if (!i) return void e.dropped++;
                                        var n = r[i - 1];
                                        t.pts = n.pts, t.dts = n.dts
                                    }
                                    e.samples.push(t)
                                }
                                t.debug.length && v.logger.log(t.pts + "/" + t.dts + ":" + t.debug)
                            }
                            const q = function() {
                                function t(t, e, r) {
                                    this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = t, this.config = e, this.typeSupported = r
                                }
                                t.probe = function(e) {
                                    var r = t.syncOffset(e);
                                    return r > 0 && v.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r), -1 !== r
                                }, t.syncOffset = function(t) {
                                    for (var e = Math.min(940, t.length - 376) + 1, r = 0; r < e;) {
                                        if (71 === t[r] && 71 === t[r + j]) return r;
                                        r++
                                    }
                                    return -1
                                }, t.createTrack = function(t, e) {
                                    return {
                                        container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                                        type: t,
                                        id: h.RemuxerTrackIdConfig[t],
                                        pid: -1,
                                        inputTimeScale: 9e4,
                                        sequenceNumber: 0,
                                        samples: [],
                                        dropped: 0,
                                        duration: "audio" === t ? e : void 0
                                    }
                                };
                                var e = t.prototype;
                                return e.resetInitSegment = function(e, r, i, n) {
                                    this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = t.createTrack("video"), this._audioTrack = t.createTrack("audio", n), this._id3Track = t.createTrack("id3"), this._txtTrack = t.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.audioCodec = r, this.videoCodec = i, this._duration = n
                                }, e.resetTimeStamp = function() {}, e.resetContiguity = function() {
                                    var t = this._audioTrack,
                                        e = this._avcTrack,
                                        r = this._id3Track;
                                    t && (t.pesData = null), e && (e.pesData = null), r && (r.pesData = null), this.aacOverFlow = null, this.avcSample = null, this.remainderData = null
                                }, e.demux = function(e, r, a, s) {
                                    var o;
                                    void 0 === a && (a = !1), void 0 === s && (s = !1), a || (this.sampleAes = null);
                                    var l = this._avcTrack,
                                        u = this._audioTrack,
                                        d = this._id3Track,
                                        c = this._txtTrack,
                                        f = l.pid,
                                        g = l.pesData,
                                        p = u.pid,
                                        m = d.pid,
                                        T = u.pesData,
                                        y = d.pesData,
                                        E = null,
                                        S = this.pmtParsed,
                                        b = this._pmtId,
                                        L = e.length;
                                    if (this.remainderData && (L = (e = (0, h.appendUint8Array)(this.remainderData, e)).length, this.remainderData = null), L < j && !s) return this.remainderData = e, {
                                        audioTrack: u,
                                        videoTrack: l,
                                        id3Track: d,
                                        textTrack: c
                                    };
                                    var k = Math.max(0, t.syncOffset(e));
                                    (L -= (L - k) % j) < e.byteLength && !s && (this.remainderData = new Uint8Array(e.buffer, L, e.buffer.byteLength - L));
                                    for (var D = 0, R = k; R < L; R += j)
                                        if (71 === e[R]) {
                                            var A = !!(64 & e[R + 1]),
                                                _ = ((31 & e[R + 1]) << 8) + e[R + 2],
                                                I = void 0;
                                            if ((48 & e[R + 3]) >> 4 > 1) {
                                                if ((I = R + 5 + e[R + 4]) === R + j) continue
                                            } else I = R + 4;
                                            switch (_) {
                                                case f:
                                                    A && (g && (o = W(g)) && this.parseAVCPES(l, c, o, !1), g = {
                                                        data: [],
                                                        size: 0
                                                    }), g && (g.data.push(e.subarray(I, R + j)), g.size += R + j - I);
                                                    break;
                                                case p:
                                                    if (A) {
                                                        if (T && (o = W(T))) switch (u.segmentCodec) {
                                                            case "aac":
                                                                this.parseAACPES(u, o);
                                                                break;
                                                            case "mp3":
                                                                this.parseMPEGPES(u, o)
                                                        }
                                                        T = {
                                                            data: [],
                                                            size: 0
                                                        }
                                                    }
                                                    T && (T.data.push(e.subarray(I, R + j)), T.size += R + j - I);
                                                    break;
                                                case m:
                                                    A && (y && (o = W(y)) && this.parseID3PES(d, o), y = {
                                                        data: [],
                                                        size: 0
                                                    }), y && (y.data.push(e.subarray(I, R + j)), y.size += R + j - I);
                                                    break;
                                                case 0:
                                                    A && (I += e[I] + 1), b = this._pmtId = K(e, I);
                                                    break;
                                                case b:
                                                    A && (I += e[I] + 1);
                                                    var C = V(e, I, this.typeSupported, a);
                                                    (f = C.avc) > 0 && (l.pid = f), (p = C.audio) > 0 && (u.pid = p, u.segmentCodec = C.segmentCodec), (m = C.id3) > 0 && (d.pid = m), null === E || S || (v.logger.log("unknown PID '" + E + "' in TS found"), E = null, R = k - 188), S = this.pmtParsed = !0;
                                                    break;
                                                case 17:
                                                case 8191:
                                                    break;
                                                default:
                                                    E = _
                                            }
                                        } else D++;
                                    D > 0 && this.observer.emit(i.Events.ERROR, i.Events.ERROR, {
                                        type: n.ErrorTypes.MEDIA_ERROR,
                                        details: n.ErrorDetails.FRAG_PARSING_ERROR,
                                        fatal: !1,
                                        reason: "Found " + D + " TS packet/s that do not start with 0x47"
                                    }), l.pesData = g, u.pesData = T, d.pesData = y;
                                    var w = {
                                        audioTrack: u,
                                        videoTrack: l,
                                        id3Track: d,
                                        textTrack: c
                                    };
                                    return s && this.extractRemainingSamples(w), w
                                }, e.flush = function() {
                                    var t, e = this.remainderData;
                                    return this.remainderData = null, t = e ? this.demux(e, -1, !1, !0) : {
                                        videoTrack: this._avcTrack,
                                        audioTrack: this._audioTrack,
                                        id3Track: this._id3Track,
                                        textTrack: this._txtTrack
                                    }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t
                                }, e.extractRemainingSamples = function(t) {
                                    var e, r = t.audioTrack,
                                        i = t.videoTrack,
                                        n = t.id3Track,
                                        a = t.textTrack,
                                        s = i.pesData,
                                        o = r.pesData,
                                        l = n.pesData;
                                    if (s && (e = W(s)) ? (this.parseAVCPES(i, a, e, !0), i.pesData = null) : i.pesData = s, o && (e = W(o))) {
                                        switch (r.segmentCodec) {
                                            case "aac":
                                                this.parseAACPES(r, e);
                                                break;
                                            case "mp3":
                                                this.parseMPEGPES(r, e)
                                        }
                                        r.pesData = null
                                    } else null != o && o.size && v.logger.log("last AAC PES packet truncated,might overlap between fragments"), r.pesData = o;
                                    l && (e = W(l)) ? (this.parseID3PES(n, e), n.pesData = null) : n.pesData = l
                                }, e.demuxSampleAes = function(t, e, r) {
                                    var i = this.demux(t, r, !0, !this.config.progressive),
                                        n = this.sampleAes = new B(this.observer, this.config, e);
                                    return this.decrypt(i, n)
                                }, e.decrypt = function(t, e) {
                                    return new Promise((function(r) {
                                        var i = t.audioTrack,
                                            n = t.videoTrack;
                                        i.samples && "aac" === i.segmentCodec ? e.decryptAacSamples(i.samples, 0, (function() {
                                            n.samples ? e.decryptAvcSamples(n.samples, 0, 0, (function() {
                                                r(t)
                                            })) : r(t)
                                        })) : n.samples && e.decryptAvcSamples(n.samples, 0, 0, (function() {
                                            r(t)
                                        }))
                                    }))
                                }, e.destroy = function() {
                                    this._duration = 0
                                }, e.parseAVCPES = function(t, e, r, i) {
                                    var n, a = this,
                                        s = this.parseAVCNALu(t, r.data),
                                        o = this.avcSample,
                                        l = !1;
                                    r.data = null, o && s.length && !t.audFound && (Y(o, t), o = this.avcSample = H(!1, r.pts, r.dts, "")), s.forEach((function(i) {
                                        switch (i.type) {
                                            case 1:
                                                n = !0, o || (o = a.avcSample = H(!0, r.pts, r.dts, "")), o.frame = !0;
                                                var s = i.data;
                                                if (l && s.length > 4) {
                                                    var u = new U(s).readSliceType();
                                                    2 !== u && 4 !== u && 7 !== u && 9 !== u || (o.key = !0)
                                                }
                                                break;
                                            case 5:
                                                n = !0, o || (o = a.avcSample = H(!0, r.pts, r.dts, "")), o.key = !0, o.frame = !0;
                                                break;
                                            case 6:
                                                n = !0, (0, h.parseSEIMessageFromNALu)(i.data, 1, r.pts, e.samples);
                                                break;
                                            case 7:
                                                if (n = !0, l = !0, !t.sps) {
                                                    var d = new U(i.data).readSPS();
                                                    t.width = d.width, t.height = d.height, t.pixelRatio = d.pixelRatio, t.sps = [i.data], t.duration = a._duration;
                                                    for (var c = i.data.subarray(1, 4), f = "avc1.", g = 0; g < 3; g++) {
                                                        var v = c[g].toString(16);
                                                        v.length < 2 && (v = "0" + v), f += v
                                                    }
                                                    t.codec = f
                                                }
                                                break;
                                            case 8:
                                                n = !0, t.pps || (t.pps = [i.data]);
                                                break;
                                            case 9:
                                                n = !1, t.audFound = !0, o && Y(o, t), o = a.avcSample = H(!1, r.pts, r.dts, "");
                                                break;
                                            case 12:
                                                n = !0;
                                                break;
                                            default:
                                                n = !1, o && (o.debug += "unknown NAL " + i.type + " ")
                                        }
                                        o && n && o.units.push(i)
                                    })), i && o && (Y(o, t), this.avcSample = null)
                                }, e.getLastNalUnit = function(t) {
                                    var e, r, i = this.avcSample;
                                    if (i && 0 !== i.units.length || (i = t[t.length - 1]), null !== (e = i) && void 0 !== e && e.units) {
                                        var n = i.units;
                                        r = n[n.length - 1]
                                    }
                                    return r
                                }, e.parseAVCNALu = function(t, e) {
                                    var r, i, n = e.byteLength,
                                        a = t.naluState || 0,
                                        s = a,
                                        o = [],
                                        l = 0,
                                        u = -1,
                                        h = 0;
                                    for (-1 === a && (u = 0, h = 31 & e[0], a = 0, l = 1); l < n;)
                                        if (r = e[l++], a)
                                            if (1 !== a)
                                                if (r)
                                                    if (1 === r) {
                                                        if (u >= 0) {
                                                            var d = {
                                                                data: e.subarray(u, l - a - 1),
                                                                type: h
                                                            };
                                                            o.push(d)
                                                        } else {
                                                            var c = this.getLastNalUnit(t.samples);
                                                            if (c && (s && l <= 4 - s && c.state && (c.data = c.data.subarray(0, c.data.byteLength - s)), (i = l - a - 1) > 0)) {
                                                                var f = new Uint8Array(c.data.byteLength + i);
                                                                f.set(c.data, 0), f.set(e.subarray(0, i), c.data.byteLength), c.data = f, c.state = 0
                                                            }
                                                        }
                                                        l < n ? (u = l, h = 31 & e[l], a = 0) : a = -1
                                                    } else a = 0;
                                                else a = 3;
                                            else a = r ? 0 : 2;
                                        else a = r ? 0 : 1;
                                    if (u >= 0 && a >= 0) {
                                        var g = {
                                            data: e.subarray(u, n),
                                            type: h,
                                            state: a
                                        };
                                        o.push(g)
                                    }
                                    if (0 === o.length) {
                                        var v = this.getLastNalUnit(t.samples);
                                        if (v) {
                                            var p = new Uint8Array(v.data.byteLength + e.byteLength);
                                            p.set(v.data, 0), p.set(e, v.data.byteLength), v.data = p
                                        }
                                    }
                                    return t.naluState = a, o
                                }, e.parseAACPES = function(t, e) {
                                    var r, a, s, o, l, u = 0,
                                        h = this.aacOverFlow,
                                        d = e.data;
                                    if (h) {
                                        this.aacOverFlow = null;
                                        var c = h.missing,
                                            f = h.sample.unit.byteLength;
                                        if (-1 === c) {
                                            var g = new Uint8Array(f + d.byteLength);
                                            g.set(h.sample.unit, 0), g.set(d, f), d = g
                                        } else {
                                            var p = f - c;
                                            h.sample.unit.set(d.subarray(0, c), p), t.samples.push(h.sample), u = h.missing
                                        }
                                    }
                                    for (r = u, a = d.length; r < a - 1 && !y(d, r); r++);
                                    if (r === u || (r < a - 1 ? (s = "AAC PES did not start with ADTS header,offset:" + r, o = !1) : (s = "no ADTS header found in AAC PES", o = !0), v.logger.warn("parsing error:" + s), this.observer.emit(i.Events.ERROR, i.Events.ERROR, {
                                        type: n.ErrorTypes.MEDIA_ERROR,
                                        details: n.ErrorDetails.FRAG_PARSING_ERROR,
                                        fatal: o,
                                        reason: s
                                    }), !o)) {
                                        if (S(t, this.observer, d, r, this.audioCodec), void 0 !== e.pts) l = e.pts;
                                        else {
                                            if (!h) return void v.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
                                            var m = b(t.samplerate);
                                            l = h.sample.pts + m
                                        }
                                        for (var T, E = 0; r < a;) {
                                            if (r += (T = L(t, d, r, l, E)).length, T.missing) {
                                                this.aacOverFlow = T;
                                                break
                                            }
                                            for (E++; r < a - 1 && !y(d, r); r++);
                                        }
                                    }
                                }, e.parseMPEGPES = function(t, e) {
                                    var r = e.data,
                                        i = r.length,
                                        n = 0,
                                        a = 0,
                                        s = e.pts;
                                    if (void 0 !== s)
                                        for (; a < i;)
                                            if (M(r, a)) {
                                                var o = x(t, r, a, s, n);
                                                if (!o) break;
                                                a += o.length, n++
                                            } else a++;
                                    else v.logger.warn("[tsdemuxer]: MPEG PES unknown PTS")
                                }, e.parseID3PES = function(t, e) {
                                    if (void 0 !== e.pts) {
                                        var r = G({}, e, {
                                            type: this._avcTrack ? l.MetadataSchema.emsg : l.MetadataSchema.audioId3,
                                            duration: Number.POSITIVE_INFINITY
                                        });
                                        t.samples.push(r)
                                    } else v.logger.warn("[tsdemuxer]: ID3 PES unknown PTS")
                                }, t
                            }();

                            function X(t, e) {
                                return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, X(t, e)
                            }
                            const z = function(t) {
                                var e, r;

                                function i() {
                                    return t.apply(this, arguments) || this
                                }
                                r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, X(e, r);
                                var n = i.prototype;
                                return n.resetInitSegment = function(e, r, i, n) {
                                    t.prototype.resetInitSegment.call(this, e, r, i, n), this._audioTrack = {
                                        container: "audio/mpeg",
                                        type: "audio",
                                        id: 2,
                                        pid: -1,
                                        sequenceNumber: 0,
                                        segmentCodec: "mp3",
                                        samples: [],
                                        manifestCodec: r,
                                        duration: n,
                                        inputTimeScale: 9e4,
                                        dropped: 0
                                    }
                                }, i.probe = function(t) {
                                    if (!t) return !1;
                                    for (var e = (o.getID3Data(t, 0) || []).length, r = t.length; e < r; e++)
                                        if (N(t, e)) return v.logger.log("MPEG Audio sync word found !"), !0;
                                    return !1
                                }, n.canParse = function(t, e) {
                                    return function(t, e) {
                                        return F(t, e) && 4 <= t.length - e
                                    }(t, e)
                                }, n.appendFrame = function(t, e, r) {
                                    if (null !== this.basePTS) return x(t, e, r, this.basePTS, this.frameIndex)
                                }, i
                            }(g);
                            var Z = r(524),
                                $ = r(923);

                            function Q(t, e) {
                                var r = null == t ? void 0 : t.codec;
                                return r && r.length > 4 ? r : "hvc1" === r || "hev1" === r ? "hvc1.1.c.L120.90" : "av01" === r ? "av01.0.04M.08" : "avc1" === r || e === $.ElementaryStreamTypes.VIDEO ? "avc1.42e01e" : "mp4a.40.5"
                            }
                            const J = function() {
                                function t() {
                                    this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, this.lastEndTime = null
                                }
                                var e = t.prototype;
                                return e.destroy = function() {}, e.resetTimeStamp = function(t) {
                                    this.initPTS = t, this.lastEndTime = null
                                }, e.resetNextTimestamp = function() {
                                    this.lastEndTime = null
                                }, e.resetInitSegment = function(t, e, r) {
                                    this.audioCodec = e, this.videoCodec = r, this.generateInitSegment(t), this.emitInitSegment = !0
                                }, e.generateInitSegment = function(t) {
                                    var e = this.audioCodec,
                                        r = this.videoCodec;
                                    if (!t || !t.byteLength) return this.initTracks = void 0, void(this.initData = void 0);
                                    var i = this.initData = (0, h.parseInitSegment)(t);
                                    e || (e = Q(i.audio, $.ElementaryStreamTypes.AUDIO)), r || (r = Q(i.video, $.ElementaryStreamTypes.VIDEO));
                                    var n = {};
                                    i.audio && i.video ? n.audiovideo = {
                                        container: "video/mp4",
                                        codec: e + "," + r,
                                        initSegment: t,
                                        id: "main"
                                    } : i.audio ? n.audio = {
                                        container: "audio/mp4",
                                        codec: e,
                                        initSegment: t,
                                        id: "audio"
                                    } : i.video ? n.video = {
                                        container: "video/mp4",
                                        codec: r,
                                        initSegment: t,
                                        id: "main"
                                    } : v.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = n
                                }, e.remux = function(t, e, r, i, n) {
                                    var a, o = this.initPTS,
                                        l = this.lastEndTime,
                                        u = {
                                            audio: void 0,
                                            video: void 0,
                                            text: i,
                                            id3: r,
                                            initSegment: void 0
                                        };
                                    (0, s.isFiniteNumber)(l) || (l = this.lastEndTime = n || 0);
                                    var d = e.samples;
                                    if (!d || !d.length) return u;
                                    var c = {
                                            initPTS: void 0,
                                            timescale: 1
                                        },
                                        f = this.initData;
                                    if (f && f.length || (this.generateInitSegment(d), f = this.initData), !f || !f.length) return v.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), u;
                                    this.emitInitSegment && (c.tracks = this.initTracks, this.emitInitSegment = !1);
                                    var g = (0, h.getStartDTS)(f, d);
                                    (0, s.isFiniteNumber)(o) || (this.initPTS = c.initPTS = o = g - n);
                                    var p = (0, h.getDuration)(d, f),
                                        m = t ? g - o : l,
                                        T = m + p;
                                    (0, h.offsetStartDTS)(f, d, o), p > 0 ? this.lastEndTime = T : (v.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                                    var y = !!f.audio,
                                        E = !!f.video,
                                        S = "";
                                    y && (S += "audio"), E && (S += "video");
                                    var b = {
                                        data1: d,
                                        startPTS: m,
                                        startDTS: m,
                                        endPTS: T,
                                        endDTS: T,
                                        type: S,
                                        hasAudio: y,
                                        hasVideo: E,
                                        nb: 1,
                                        dropped: 0
                                    };
                                    u.audio = "audio" === b.type ? b : void 0, u.video = "audio" !== b.type ? b : void 0, u.initSegment = c;
                                    var L = null != (a = this.initPTS) ? a : 0;
                                    return u.id3 = (0, Z.flushTextTrackMetadataCueSamples)(r, n, L, L), i.samples.length && (u.text = (0, Z.flushTextTrackUserdataCueSamples)(i, n, L)), u
                                }, t
                            }();
                            var tt;
                            try {
                                tt = self.performance.now.bind(self.performance)
                            } catch (t) {
                                v.logger.debug("Unable to use Performance API on this environment"), tt = self.Date.now
                            }
                            var et = [{
                                    demux: q,
                                    remux: Z.default
                                }, {
                                    demux: A,
                                    remux: J
                                }, {
                                    demux: D,
                                    remux: Z.default
                                }, {
                                    demux: z,
                                    remux: Z.default
                                }],
                                rt = function() {
                                    function t(t, e, r, i, n) {
                                        this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = t, this.typeSupported = e, this.config = r, this.vendor = i, this.id = n
                                    }
                                    var e = t.prototype;
                                    return e.configure = function(t) {
                                        this.transmuxConfig = t, this.decrypter && this.decrypter.reset()
                                    }, e.push = function(t, e, r, i) {
                                        var n = this,
                                            a = r.transmuxing;
                                        a.executeStart = tt();
                                        var s = new Uint8Array(t),
                                            o = this.config,
                                            l = this.currentTransmuxState,
                                            u = this.transmuxConfig;
                                        i && (this.currentTransmuxState = i);
                                        var h = i || l,
                                            d = h.contiguous,
                                            c = h.discontinuity,
                                            f = h.trackSwitch,
                                            g = h.accurateTimeOffset,
                                            v = h.timeOffset,
                                            p = h.initSegmentChange,
                                            m = u.audioCodec,
                                            T = u.videoCodec,
                                            y = u.defaultInitPts,
                                            E = u.duration,
                                            S = u.initSegmentData;
                                        (c || f || p) && this.resetInitSegment(S, m, T, E), (c || p) && this.resetInitialTimestamp(y), d || this.resetContiguity();
                                        var b = function(t, e) {
                                            var r = null;
                                            return t.byteLength > 0 && null != e && null != e.key && null !== e.iv && null != e.method && (r = e), r
                                        }(s, e);
                                        if (b && "AES-128" === b.method) {
                                            var L = this.getDecrypter();
                                            if (!o.enableSoftwareAES) return this.decryptionPromise = L.webCryptoDecrypt(s, b.key.buffer, b.iv.buffer).then((function(t) {
                                                var e = n.push(t, null, r);
                                                return n.decryptionPromise = null, e
                                            })), this.decryptionPromise;
                                            var k = L.softwareDecrypt(s, b.key.buffer, b.iv.buffer);
                                            if (!k) return a.executeEnd = tt(), it(r);
                                            s = new Uint8Array(k)
                                        }
                                        this.needsProbing(s, c, f) && this.configureTransmuxer(s, u);
                                        var D = this.transmux(s, b, v, g, r),
                                            R = this.currentTransmuxState;
                                        return R.contiguous = !0, R.discontinuity = !1, R.trackSwitch = !1, a.executeEnd = tt(), D
                                    }, e.flush = function(t) {
                                        var e = this,
                                            r = t.transmuxing;
                                        r.executeStart = tt();
                                        var a = this.decrypter,
                                            s = this.currentTransmuxState,
                                            o = this.decryptionPromise;
                                        if (o) return o.then((function() {
                                            return e.flush(t)
                                        }));
                                        var l = [],
                                            u = s.timeOffset;
                                        if (a) {
                                            var h = a.flush();
                                            h && l.push(this.push(h, null, t))
                                        }
                                        var d = this.demuxer,
                                            c = this.remuxer;
                                        if (!d || !c) return this.observer.emit(i.Events.ERROR, i.Events.ERROR, {
                                            type: n.ErrorTypes.MEDIA_ERROR,
                                            details: n.ErrorDetails.FRAG_PARSING_ERROR,
                                            fatal: !0,
                                            reason: "no demux matching with content found"
                                        }), r.executeEnd = tt(), [it(t)];
                                        var f = d.flush(u);
                                        return nt(f) ? f.then((function(r) {
                                            return e.flushRemux(l, r, t), l
                                        })) : (this.flushRemux(l, f, t), l)
                                    }, e.flushRemux = function(t, e, r) {
                                        var i = e.audioTrack,
                                            n = e.videoTrack,
                                            a = e.id3Track,
                                            s = e.textTrack,
                                            o = this.currentTransmuxState,
                                            l = o.accurateTimeOffset,
                                            u = o.timeOffset;
                                        v.logger.log("[transmuxer.ts]: Flushed fragment " + r.sn + (r.part > -1 ? " p: " + r.part : "") + " of level " + r.level);
                                        var h = this.remuxer.remux(i, n, a, s, u, l, !0, this.id);
                                        t.push({
                                            remuxResult: h,
                                            chunkMeta: r
                                        }), r.transmuxing.executeEnd = tt()
                                    }, e.resetInitialTimestamp = function(t) {
                                        var e = this.demuxer,
                                            r = this.remuxer;
                                        e && r && (e.resetTimeStamp(t), r.resetTimeStamp(t))
                                    }, e.resetContiguity = function() {
                                        var t = this.demuxer,
                                            e = this.remuxer;
                                        t && e && (t.resetContiguity(), e.resetNextTimestamp())
                                    }, e.resetInitSegment = function(t, e, r, i) {
                                        var n = this.demuxer,
                                            a = this.remuxer;
                                        n && a && (n.resetInitSegment(t, e, r, i), a.resetInitSegment(t, e, r))
                                    }, e.destroy = function() {
                                        this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
                                    }, e.transmux = function(t, e, r, i, n) {
                                        return e && "SAMPLE-AES" === e.method ? this.transmuxSampleAes(t, e, r, i, n) : this.transmuxUnencrypted(t, r, i, n)
                                    }, e.transmuxUnencrypted = function(t, e, r, i) {
                                        var n = this.demuxer.demux(t, e, !1, !this.config.progressive),
                                            a = n.audioTrack,
                                            s = n.videoTrack,
                                            o = n.id3Track,
                                            l = n.textTrack;
                                        return {
                                            remuxResult: this.remuxer.remux(a, s, o, l, e, r, !1, this.id),
                                            chunkMeta: i
                                        }
                                    }, e.transmuxSampleAes = function(t, e, r, i, n) {
                                        var a = this;
                                        return this.demuxer.demuxSampleAes(t, e, r).then((function(t) {
                                            return {
                                                remuxResult: a.remuxer.remux(t.audioTrack, t.videoTrack, t.id3Track, t.textTrack, r, i, !1, a.id),
                                                chunkMeta: n
                                            }
                                        }))
                                    }, e.configureTransmuxer = function(t, e) {
                                        for (var r, i = this.config, n = this.observer, a = this.typeSupported, s = this.vendor, o = e.audioCodec, l = e.defaultInitPts, u = e.duration, h = e.initSegmentData, d = e.videoCodec, c = 0, f = et.length; c < f; c++)
                                            if (et[c].demux.probe(t)) {
                                                r = et[c];
                                                break
                                            } r || (v.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), r = {
                                            demux: A,
                                            remux: J
                                        });
                                        var g = this.demuxer,
                                            p = this.remuxer,
                                            m = r.remux,
                                            T = r.demux;
                                        p && p instanceof m || (this.remuxer = new m(n, i, a, s)), g && g instanceof T || (this.demuxer = new T(n, i, a), this.probe = T.probe), this.resetInitSegment(h, o, d, u), this.resetInitialTimestamp(l)
                                    }, e.needsProbing = function(t, e, r) {
                                        return !this.demuxer || !this.remuxer || e || r
                                    }, e.getDecrypter = function() {
                                        var t = this.decrypter;
                                        return t || (t = this.decrypter = new a.default(this.observer, this.config)), t
                                    }, t
                                }(),
                                it = function(t) {
                                    return {
                                        remuxResult: {},
                                        chunkMeta: t
                                    }
                                };

                            function nt(t) {
                                return "then" in t && t.then instanceof Function
                            }
                            var at = function(t, e, r, i, n) {
                                    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t, this.videoCodec = e, this.initSegmentData = r, this.duration = i, this.defaultInitPts = n
                                },
                                st = function(t, e, r, i, n, a) {
                                    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = t, this.contiguous = e, this.accurateTimeOffset = r, this.trackSwitch = i, this.timeOffset = n, this.initSegmentChange = a
                                }
                        },
                        973: (t, e, r) => {
                            "use strict";
                            var i, n;
                            r.r(e), r.d(e, {
                                ErrorDetails: () => n,
                                ErrorTypes: () => i
                            }),
                                function(t) {
                                    t.NETWORK_ERROR = "networkError", t.MEDIA_ERROR = "mediaError", t.KEY_SYSTEM_ERROR = "keySystemError", t.MUX_ERROR = "muxError", t.OTHER_ERROR = "otherError"
                                }(i || (i = {})),
                                function(t) {
                                    t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", t.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", t.MANIFEST_LOAD_ERROR = "manifestLoadError", t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", t.MANIFEST_PARSING_ERROR = "manifestParsingError", t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", t.LEVEL_EMPTY_ERROR = "levelEmptyError", t.LEVEL_LOAD_ERROR = "levelLoadError", t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", t.LEVEL_SWITCH_ERROR = "levelSwitchError", t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", t.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", t.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", t.FRAG_LOAD_ERROR = "fragLoadError", t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", t.FRAG_DECRYPT_ERROR = "fragDecryptError", t.FRAG_PARSING_ERROR = "fragParsingError", t.REMUX_ALLOC_ERROR = "remuxAllocError", t.KEY_LOAD_ERROR = "keyLoadError", t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", t.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", t.BUFFER_APPEND_ERROR = "bufferAppendError", t.BUFFER_APPENDING_ERROR = "bufferAppendingError", t.BUFFER_STALLED_ERROR = "bufferStalledError", t.BUFFER_FULL_ERROR = "bufferFullError", t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", t.INTERNAL_EXCEPTION = "internalException", t.INTERNAL_ABORTED = "aborted", t.UNKNOWN = "unknown"
                                }(n || (n = {}))
                        },
                        851: (t, e, r) => {
                            "use strict";
                            var i;
                            r.r(e), r.d(e, {
                                Events: () => i
                            }),
                                function(t) {
                                    t.MEDIA_ATTACHING = "hlsMediaAttaching", t.MEDIA_ATTACHED = "hlsMediaAttached", t.MEDIA_DETACHING = "hlsMediaDetaching", t.MEDIA_DETACHED = "hlsMediaDetached", t.BUFFER_RESET = "hlsBufferReset", t.BUFFER_CODECS = "hlsBufferCodecs", t.BUFFER_CREATED = "hlsBufferCreated", t.BUFFER_APPENDING = "hlsBufferAppending", t.BUFFER_APPENDED = "hlsBufferAppended", t.BUFFER_EOS = "hlsBufferEos", t.BUFFER_FLUSHING = "hlsBufferFlushing", t.BUFFER_FLUSHED = "hlsBufferFlushed", t.MANIFEST_LOADING = "hlsManifestLoading", t.MANIFEST_LOADED = "hlsManifestLoaded", t.MANIFEST_PARSED = "hlsManifestParsed", t.LEVEL_SWITCHING = "hlsLevelSwitching", t.LEVEL_SWITCHED = "hlsLevelSwitched", t.LEVEL_LOADING = "hlsLevelLoading", t.LEVEL_LOADED = "hlsLevelLoaded", t.LEVEL_UPDATED = "hlsLevelUpdated", t.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", t.LEVELS_UPDATED = "hlsLevelsUpdated", t.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", t.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", t.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", t.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", t.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", t.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", t.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", t.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", t.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", t.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", t.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", t.CUES_PARSED = "hlsCuesParsed", t.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", t.INIT_PTS_FOUND = "hlsInitPtsFound", t.FRAG_LOADING = "hlsFragLoading", t.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", t.FRAG_LOADED = "hlsFragLoaded", t.FRAG_DECRYPTED = "hlsFragDecrypted", t.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", t.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", t.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", t.FRAG_PARSED = "hlsFragParsed", t.FRAG_BUFFERED = "hlsFragBuffered", t.FRAG_CHANGED = "hlsFragChanged", t.FPS_DROP = "hlsFpsDrop", t.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", t.ERROR = "hlsError", t.DESTROYING = "hlsDestroying", t.KEY_LOADING = "hlsKeyLoading", t.KEY_LOADED = "hlsKeyLoaded", t.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", t.BACK_BUFFER_REACHED = "hlsBackBufferReached"
                                }(i || (i = {}))
                        },
                        817: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                default: () => si
                            });
                            var i, n = r(945),
                                a = r(965),
                                s = r(851),
                                o = r(973),
                                l = r(93),
                                u = r(63),
                                h = /^(\d+)x(\d+)$/,
                                d = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
                                c = function() {
                                    function t(e) {
                                        for (var r in "string" == typeof e && (e = t.parseAttrList(e)), e) e.hasOwnProperty(r) && (this[r] = e[r])
                                    }
                                    var e = t.prototype;
                                    return e.decimalInteger = function(t) {
                                        var e = parseInt(this[t], 10);
                                        return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                                    }, e.hexadecimalInteger = function(t) {
                                        if (this[t]) {
                                            var e = (this[t] || "0x").slice(2);
                                            e = (1 & e.length ? "0" : "") + e;
                                            for (var r = new Uint8Array(e.length / 2), i = 0; i < e.length / 2; i++) r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
                                            return r
                                        }
                                        return null
                                    }, e.hexadecimalIntegerAsNumber = function(t) {
                                        var e = parseInt(this[t], 16);
                                        return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                                    }, e.decimalFloatingPoint = function(t) {
                                        return parseFloat(this[t])
                                    }, e.optionalFloat = function(t, e) {
                                        var r = this[t];
                                        return r ? parseFloat(r) : e
                                    }, e.enumeratedString = function(t) {
                                        return this[t]
                                    }, e.bool = function(t) {
                                        return "YES" === this[t]
                                    }, e.decimalResolution = function(t) {
                                        var e = h.exec(this[t]);
                                        if (null !== e) return {
                                            width: parseInt(e[1], 10),
                                            height: parseInt(e[2], 10)
                                        }
                                    }, t.parseAttrList = function(t) {
                                        var e, r = {};
                                        for (d.lastIndex = 0; null !== (e = d.exec(t));) {
                                            var i = e[2];
                                            0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[e[1]] = i
                                        }
                                        return r
                                    }, t
                                }();

                            function f() {
                                return f = Object.assign ? Object.assign.bind() : function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                    }
                                    return t
                                }, f.apply(this, arguments)
                            }! function(t) {
                                t.ID = "ID", t.CLASS = "CLASS", t.START_DATE = "START-DATE", t.DURATION = "DURATION", t.END_DATE = "END-DATE", t.END_ON_NEXT = "END-ON-NEXT", t.PLANNED_DURATION = "PLANNED-DURATION", t.SCTE35_OUT = "SCTE35-OUT", t.SCTE35_IN = "SCTE35-IN"
                            }(i || (i = {}));
                            var g = function() {
                                    function t(t, e) {
                                        if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, e) {
                                            var r = e.attr;
                                            for (var n in r)
                                                if (Object.prototype.hasOwnProperty.call(t, n) && t[n] !== r[n]) {
                                                    l.logger.warn('DATERANGE tag attribute: "' + n + '" does not match for tags with ID: "' + t.ID + '"'), this._badValueForSameId = n;
                                                    break
                                                } t = f(new c({}), r, t)
                                        }
                                        if (this.attr = t, this._startDate = new Date(t[i.START_DATE]), i.END_DATE in this.attr) {
                                            var s = new Date(this.attr[i.END_DATE]);
                                            (0, a.isFiniteNumber)(s.getTime()) && (this._endDate = s)
                                        }
                                    }
                                    var e, r;
                                    return e = t, (r = [{
                                        key: "id",
                                        get: function() {
                                            return this.attr.ID
                                        }
                                    }, {
                                        key: "class",
                                        get: function() {
                                            return this.attr.CLASS
                                        }
                                    }, {
                                        key: "startDate",
                                        get: function() {
                                            return this._startDate
                                        }
                                    }, {
                                        key: "endDate",
                                        get: function() {
                                            if (this._endDate) return this._endDate;
                                            var t = this.duration;
                                            return null !== t ? new Date(this._startDate.getTime() + 1e3 * t) : null
                                        }
                                    }, {
                                        key: "duration",
                                        get: function() {
                                            if (i.DURATION in this.attr) {
                                                var t = this.attr.decimalFloatingPoint(i.DURATION);
                                                if ((0, a.isFiniteNumber)(t)) return t
                                            } else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
                                            return null
                                        }
                                    }, {
                                        key: "plannedDuration",
                                        get: function() {
                                            return i.PLANNED_DURATION in this.attr ? this.attr.decimalFloatingPoint(i.PLANNED_DURATION) : null
                                        }
                                    }, {
                                        key: "endOnNext",
                                        get: function() {
                                            return this.attr.bool(i.END_ON_NEXT)
                                        }
                                    }, {
                                        key: "isValid",
                                        get: function() {
                                            return !!this.id && !this._badValueForSameId && (0, a.isFiniteNumber)(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class)
                                        }
                                    }]) && function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(e.prototype, r), Object.defineProperty(e, "prototype", {
                                        writable: !1
                                    }), t
                                }(),
                                v = r(923),
                                p = function() {
                                    function t(t) {
                                        this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.fragments = [], this.dateRanges = {}, this.url = t
                                    }
                                    var e, r;
                                    return t.prototype.reloaded = function(t) {
                                        if (!t) return this.advanced = !0, void(this.updated = !0);
                                        var e = this.lastPartSn - t.lastPartSn,
                                            r = this.lastPartIndex - t.lastPartIndex;
                                        this.updated = this.endSN !== t.endSN || !!r || !!e, this.advanced = this.endSN > t.endSN || e > 0 || 0 === e && r > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * t.misses) : this.misses = t.misses + 1, this.availabilityDelay = t.availabilityDelay
                                    }, e = t, (r = [{
                                        key: "hasProgramDateTime",
                                        get: function() {
                                            return !!this.fragments.length && (0, a.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime)
                                        }
                                    }, {
                                        key: "levelTargetDuration",
                                        get: function() {
                                            return this.averagetargetduration || this.targetduration || 10
                                        }
                                    }, {
                                        key: "drift",
                                        get: function() {
                                            var t = this.driftEndTime - this.driftStartTime;
                                            return t > 0 ? 1e3 * (this.driftEnd - this.driftStart) / t : 1
                                        }
                                    }, {
                                        key: "edge",
                                        get: function() {
                                            return this.partEnd || this.fragmentEnd
                                        }
                                    }, {
                                        key: "partEnd",
                                        get: function() {
                                            var t;
                                            return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
                                        }
                                    }, {
                                        key: "fragmentEnd",
                                        get: function() {
                                            var t;
                                            return null !== (t = this.fragments) && void 0 !== t && t.length ? this.fragments[this.fragments.length - 1].end : 0
                                        }
                                    }, {
                                        key: "age",
                                        get: function() {
                                            return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
                                        }
                                    }, {
                                        key: "lastPartIndex",
                                        get: function() {
                                            var t;
                                            return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].index : -1
                                        }
                                    }, {
                                        key: "lastPartSn",
                                        get: function() {
                                            var t;
                                            return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
                                        }
                                    }]) && function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(e.prototype, r), Object.defineProperty(e, "prototype", {
                                        writable: !1
                                    }), t
                                }(),
                                m = r(960),
                                T = {
                                    audio: {
                                        a3ds: !0,
                                        "ac-3": !0,
                                        "ac-4": !0,
                                        alac: !0,
                                        alaw: !0,
                                        dra1: !0,
                                        "dts+": !0,
                                        "dts-": !0,
                                        dtsc: !0,
                                        dtse: !0,
                                        dtsh: !0,
                                        "ec-3": !0,
                                        enca: !0,
                                        g719: !0,
                                        g726: !0,
                                        m4ae: !0,
                                        mha1: !0,
                                        mha2: !0,
                                        mhm1: !0,
                                        mhm2: !0,
                                        mlpa: !0,
                                        mp4a: !0,
                                        "raw ": !0,
                                        Opus: !0,
                                        opus: !0,
                                        samr: !0,
                                        sawb: !0,
                                        sawp: !0,
                                        sevc: !0,
                                        sqcp: !0,
                                        ssmv: !0,
                                        twos: !0,
                                        ulaw: !0
                                    },
                                    video: {
                                        avc1: !0,
                                        avc2: !0,
                                        avc3: !0,
                                        avc4: !0,
                                        avcp: !0,
                                        av01: !0,
                                        drac: !0,
                                        dva1: !0,
                                        dvav: !0,
                                        dvh1: !0,
                                        dvhe: !0,
                                        encv: !0,
                                        hev1: !0,
                                        hvc1: !0,
                                        mjp2: !0,
                                        mp4v: !0,
                                        mvc1: !0,
                                        mvc2: !0,
                                        mvc3: !0,
                                        mvc4: !0,
                                        resv: !0,
                                        rv60: !0,
                                        s263: !0,
                                        svc1: !0,
                                        svc2: !0,
                                        "vc-1": !0,
                                        vp08: !0,
                                        vp09: !0
                                    },
                                    text: {
                                        stpp: !0,
                                        wvtt: !0
                                    }
                                };

                            function y(t, e) {
                                return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
                            }
                            var E = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,
                                S = /#EXT-X-MEDIA:(.*)/g,
                                b = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
                                L = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")),
                                k = /\.(mp4|m4s|m4v|m4a)$/i,
                                D = function() {
                                    function t() {}
                                    return t.findGroup = function(t, e) {
                                        for (var r = 0; r < t.length; r++) {
                                            var i = t[r];
                                            if (i.id === e) return i
                                        }
                                    }, t.convertAVC1ToAVCOTI = function(t) {
                                        var e = t.split(".");
                                        if (e.length > 2) {
                                            var r = e.shift() + ".";
                                            return (r += parseInt(e.shift()).toString(16)) + ("000" + parseInt(e.shift()).toString(16)).slice(-4)
                                        }
                                        return t
                                    }, t.resolve = function(t, e) {
                                        return n.buildAbsoluteURL(e, t, {
                                            alwaysNormalize: !0
                                        })
                                    }, t.parseMasterPlaylist = function(e, r) {
                                        var i, n = [],
                                            a = [],
                                            s = {},
                                            o = !1;
                                        for (E.lastIndex = 0; null != (i = E.exec(e));)
                                            if (i[1]) {
                                                var l, u = new c(i[1]),
                                                    h = {
                                                        attrs: u,
                                                        bitrate: u.decimalInteger("AVERAGE-BANDWIDTH") || u.decimalInteger("BANDWIDTH"),
                                                        name: u.NAME,
                                                        url: t.resolve(i[2], r)
                                                    },
                                                    d = u.decimalResolution("RESOLUTION");
                                                d && (h.width = d.width, h.height = d.height), R((u.CODECS || "").split(/[ ,]+/).filter((function(t) {
                                                    return t
                                                })), h), h.videoCodec && -1 !== h.videoCodec.indexOf("avc1") && (h.videoCodec = t.convertAVC1ToAVCOTI(h.videoCodec)), null !== (l = h.unknownCodecs) && void 0 !== l && l.length || a.push(h), n.push(h)
                                            } else if (i[3]) {
                                                var f = new c(i[3]);
                                                f["DATA-ID"] && (o = !0, s[f["DATA-ID"]] = f)
                                            }
                                        return {
                                            levels: a.length > 0 && a.length < n.length ? a : n,
                                            sessionData: o ? s : null
                                        }
                                    }, t.parseMasterPlaylistMedia = function(e, r, i, n) {
                                        var a;
                                        void 0 === n && (n = []);
                                        var s = [],
                                            o = 0;
                                        for (S.lastIndex = 0; null !== (a = S.exec(e));) {
                                            var l = new c(a[1]);
                                            if (l.TYPE === i) {
                                                var u = {
                                                    attrs: l,
                                                    bitrate: 0,
                                                    id: o++,
                                                    groupId: l["GROUP-ID"],
                                                    instreamId: l["INSTREAM-ID"],
                                                    name: l.NAME || l.LANGUAGE || "",
                                                    type: i,
                                                    default: l.bool("DEFAULT"),
                                                    autoselect: l.bool("AUTOSELECT"),
                                                    forced: l.bool("FORCED"),
                                                    lang: l.LANGUAGE,
                                                    url: l.URI ? t.resolve(l.URI, r) : ""
                                                };
                                                if (n.length) {
                                                    var h = t.findGroup(n, u.groupId) || n[0];
                                                    A(u, h, "audioCodec"), A(u, h, "textCodec")
                                                }
                                                s.push(u)
                                            }
                                        }
                                        return s
                                    }, t.parseLevelPlaylist = function(t, e, r, i, s) {
                                        var o, u, h, d = new p(e),
                                            f = d.fragments,
                                            T = null,
                                            y = 0,
                                            E = 0,
                                            S = 0,
                                            D = 0,
                                            R = null,
                                            A = new v.Fragment(i, e),
                                            C = -1,
                                            w = !1;
                                        for (b.lastIndex = 0, d.m3u8 = t; null !== (o = b.exec(t));) {
                                            w && (w = !1, (A = new v.Fragment(i, e)).start = S, A.sn = y, A.cc = D, A.level = r, T && (A.initSegment = T, A.rawProgramDateTime = T.rawProgramDateTime, T.rawProgramDateTime = null));
                                            var O = o[1];
                                            if (O) {
                                                A.duration = parseFloat(O);
                                                var x = (" " + o[2]).slice(1);
                                                A.title = x || null, A.tagList.push(x ? ["INF", O, x] : ["INF", O])
                                            } else if (o[3])(0, a.isFiniteNumber)(A.duration) && (A.start = S, h && (A.levelkey = h), A.sn = y, A.level = r, A.cc = D, A.urlId = s, f.push(A), A.relurl = (" " + o[3]).slice(1), _(A, R), R = A, S += A.duration, y++, E = 0, w = !0);
                                            else if (o[4]) {
                                                var P = (" " + o[4]).slice(1);
                                                R ? A.setByteRange(P, R) : A.setByteRange(P)
                                            } else if (o[5]) A.rawProgramDateTime = (" " + o[5]).slice(1), A.tagList.push(["PROGRAM-DATE-TIME", A.rawProgramDateTime]), -1 === C && (C = f.length);
                                            else {
                                                if (!(o = o[0].match(L))) {
                                                    l.logger.warn("No matches on slow regex match for level playlist!");
                                                    continue
                                                }
                                                for (u = 1; u < o.length && void 0 === o[u]; u++);
                                                var F = (" " + o[u]).slice(1),
                                                    M = (" " + o[u + 1]).slice(1),
                                                    N = o[u + 2] ? (" " + o[u + 2]).slice(1) : "";
                                                switch (F) {
                                                    case "PLAYLIST-TYPE":
                                                        d.type = M.toUpperCase();
                                                        break;
                                                    case "MEDIA-SEQUENCE":
                                                        y = d.startSN = parseInt(M);
                                                        break;
                                                    case "SKIP":
                                                        var U = new c(M),
                                                            B = U.decimalInteger("SKIPPED-SEGMENTS");
                                                        if ((0, a.isFiniteNumber)(B)) {
                                                            d.skippedSegments = B;
                                                            for (var G = B; G--;) f.unshift(null);
                                                            y += B
                                                        }
                                                        var j = U.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                                                        j && (d.recentlyRemovedDateranges = j.split("\t"));
                                                        break;
                                                    case "TARGETDURATION":
                                                        d.targetduration = parseFloat(M);
                                                        break;
                                                    case "VERSION":
                                                        d.version = parseInt(M);
                                                        break;
                                                    case "EXTM3U":
                                                        break;
                                                    case "ENDLIST":
                                                        d.live = !1;
                                                        break;
                                                    case "#":
                                                        (M || N) && A.tagList.push(N ? [M, N] : [M]);
                                                        break;
                                                    case "DISCONTINUITY":
                                                        D++, A.tagList.push(["DIS"]);
                                                        break;
                                                    case "GAP":
                                                        A.tagList.push([F]);
                                                        break;
                                                    case "BITRATE":
                                                        A.tagList.push([F, M]);
                                                        break;
                                                    case "DATERANGE":
                                                        var H = new c(M),
                                                            K = new g(H, d.dateRanges[H.ID]);
                                                        K.isValid || d.skippedSegments ? d.dateRanges[K.id] = K : l.logger.warn('Ignoring invalid DATERANGE tag: "' + M + '"'), A.tagList.push(["EXT-X-DATERANGE", M]);
                                                        break;
                                                    case "DISCONTINUITY-SEQUENCE":
                                                        D = parseInt(M);
                                                        break;
                                                    case "KEY":
                                                        var V, W = new c(M),
                                                            Y = W.enumeratedString("METHOD"),
                                                            q = W.URI,
                                                            X = W.hexadecimalInteger("IV"),
                                                            z = W.enumeratedString("KEYFORMATVERSIONS"),
                                                            Z = W.enumeratedString("KEYID"),
                                                            $ = null != (V = W.enumeratedString("KEYFORMAT")) ? V : "identity";
                                                        if (["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"].indexOf($) > -1) {
                                                            l.logger.warn("Keyformat " + $ + " is not supported from the manifest");
                                                            continue
                                                        }
                                                        if ("identity" !== $) continue;
                                                        Y && (h = m.LevelKey.fromURL(e, q), q && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(Y) >= 0 && (h.method = Y, h.keyFormat = $, Z && (h.keyID = Z), z && (h.keyFormatVersions = z), h.iv = X));
                                                        break;
                                                    case "START":
                                                        var Q = new c(M).decimalFloatingPoint("TIME-OFFSET");
                                                        (0, a.isFiniteNumber)(Q) && (d.startTimeOffset = Q);
                                                        break;
                                                    case "MAP":
                                                        var J = new c(M);
                                                        if (A.duration) {
                                                            var tt = new v.Fragment(i, e);
                                                            I(tt, J, r, h), T = tt, A.initSegment = T, T.rawProgramDateTime && !A.rawProgramDateTime && (A.rawProgramDateTime = T.rawProgramDateTime)
                                                        } else I(A, J, r, h), T = A, w = !0;
                                                        break;
                                                    case "SERVER-CONTROL":
                                                        var et = new c(M);
                                                        d.canBlockReload = et.bool("CAN-BLOCK-RELOAD"), d.canSkipUntil = et.optionalFloat("CAN-SKIP-UNTIL", 0), d.canSkipDateRanges = d.canSkipUntil > 0 && et.bool("CAN-SKIP-DATERANGES"), d.partHoldBack = et.optionalFloat("PART-HOLD-BACK", 0), d.holdBack = et.optionalFloat("HOLD-BACK", 0);
                                                        break;
                                                    case "PART-INF":
                                                        var rt = new c(M);
                                                        d.partTarget = rt.decimalFloatingPoint("PART-TARGET");
                                                        break;
                                                    case "PART":
                                                        var it = d.partList;
                                                        it || (it = d.partList = []);
                                                        var nt = E > 0 ? it[it.length - 1] : void 0,
                                                            at = E++,
                                                            st = new v.Part(new c(M), A, e, at, nt);
                                                        it.push(st), A.duration += st.duration;
                                                        break;
                                                    case "PRELOAD-HINT":
                                                        var ot = new c(M);
                                                        d.preloadHint = ot;
                                                        break;
                                                    case "RENDITION-REPORT":
                                                        var lt = new c(M);
                                                        d.renditionReports = d.renditionReports || [], d.renditionReports.push(lt);
                                                        break;
                                                    default:
                                                        l.logger.warn("line parsed but not handled: " + o)
                                                }
                                            }
                                        }
                                        R && !R.relurl ? (f.pop(), S -= R.duration, d.partList && (d.fragmentHint = R)) : d.partList && (_(A, R), A.cc = D, d.fragmentHint = A);
                                        var ut = f.length,
                                            ht = f[0],
                                            dt = f[ut - 1];
                                        if ((S += d.skippedSegments * d.targetduration) > 0 && ut && dt) {
                                            d.averagetargetduration = S / ut;
                                            var ct = dt.sn;
                                            d.endSN = "initSegment" !== ct ? ct : 0, ht && (d.startCC = ht.cc, ht.initSegment || d.fragments.every((function(t) {
                                                return t.relurl && (e = t.relurl, k.test(null != (r = null === (i = n.parseURL(e)) || void 0 === i ? void 0 : i.path) ? r : ""));
                                                var e, r, i
                                            })) && (l.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (A = new v.Fragment(i, e)).relurl = dt.relurl, A.level = r, A.sn = "initSegment", ht.initSegment = A, d.needSidxRanges = !0))
                                        } else d.endSN = 0, d.startCC = 0;
                                        return d.fragmentHint && (S += d.fragmentHint.duration), d.totalduration = S, d.endCC = D, C > 0 && function(t, e) {
                                            for (var r = t[e], i = e; i--;) {
                                                var n = t[i];
                                                if (!n) return;
                                                n.programDateTime = r.programDateTime - 1e3 * n.duration, r = n
                                            }
                                        }(f, C), d
                                    }, t
                                }();

                            function R(t, e) {
                                ["video", "audio", "text"].forEach((function(r) {
                                    var i = t.filter((function(t) {
                                        return function(t, e) {
                                            var r = T[e];
                                            return !!r && !0 === r[t.slice(0, 4)]
                                        }(t, r)
                                    }));
                                    if (i.length) {
                                        var n = i.filter((function(t) {
                                            return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
                                        }));
                                        e[r + "Codec"] = n.length > 0 ? n[0] : i[0], t = t.filter((function(t) {
                                            return -1 === i.indexOf(t)
                                        }))
                                    }
                                })), e.unknownCodecs = t
                            }

                            function A(t, e, r) {
                                var i = e[r];
                                i && (t[r] = i)
                            }

                            function _(t, e) {
                                t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime), (0, a.isFiniteNumber)(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
                            }

                            function I(t, e, r, i) {
                                t.relurl = e.URI, e.BYTERANGE && t.setByteRange(e.BYTERANGE), t.level = r, t.sn = "initSegment", i && (t.levelkey = i), t.initSegment = null
                            }
                            var C = r(308);

                            function w(t, e) {
                                var r = t.url;
                                return void 0 !== r && 0 !== r.indexOf("data:") || (r = e.url), r
                            }
                            const O = function() {
                                function t(t) {
                                    this.hls = void 0, this.loaders = Object.create(null), this.hls = t, this.registerListeners()
                                }
                                var e = t.prototype;
                                return e.startLoad = function(t) {}, e.stopLoad = function() {
                                    this.destroyInternalLoaders()
                                }, e.registerListeners = function() {
                                    var t = this.hls;
                                    t.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(s.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                                }, e.unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(s.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(s.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                                }, e.createInternalLoader = function(t) {
                                    var e = this.hls.config,
                                        r = e.pLoader,
                                        i = e.loader,
                                        n = new(r || i)(e);
                                    return t.loader = n, this.loaders[t.type] = n, n
                                }, e.getInternalLoader = function(t) {
                                    return this.loaders[t.type]
                                }, e.resetInternalLoader = function(t) {
                                    this.loaders[t] && delete this.loaders[t]
                                }, e.destroyInternalLoaders = function() {
                                    for (var t in this.loaders) {
                                        var e = this.loaders[t];
                                        e && e.destroy(), this.resetInternalLoader(t)
                                    }
                                }, e.destroy = function() {
                                    this.unregisterListeners(), this.destroyInternalLoaders()
                                }, e.onManifestLoading = function(t, e) {
                                    var r = e.url;
                                    this.load({
                                        id: null,
                                        groupId: null,
                                        level: 0,
                                        responseType: "text",
                                        type: C.PlaylistContextType.MANIFEST,
                                        url: r,
                                        deliveryDirectives: null
                                    })
                                }, e.onLevelLoading = function(t, e) {
                                    var r = e.id,
                                        i = e.level,
                                        n = e.url,
                                        a = e.deliveryDirectives;
                                    this.load({
                                        id: r,
                                        groupId: null,
                                        level: i,
                                        responseType: "text",
                                        type: C.PlaylistContextType.LEVEL,
                                        url: n,
                                        deliveryDirectives: a
                                    })
                                }, e.onAudioTrackLoading = function(t, e) {
                                    var r = e.id,
                                        i = e.groupId,
                                        n = e.url,
                                        a = e.deliveryDirectives;
                                    this.load({
                                        id: r,
                                        groupId: i,
                                        level: null,
                                        responseType: "text",
                                        type: C.PlaylistContextType.AUDIO_TRACK,
                                        url: n,
                                        deliveryDirectives: a
                                    })
                                }, e.onSubtitleTrackLoading = function(t, e) {
                                    var r = e.id,
                                        i = e.groupId,
                                        n = e.url,
                                        a = e.deliveryDirectives;
                                    this.load({
                                        id: r,
                                        groupId: i,
                                        level: null,
                                        responseType: "text",
                                        type: C.PlaylistContextType.SUBTITLE_TRACK,
                                        url: n,
                                        deliveryDirectives: a
                                    })
                                }, e.load = function(t) {
                                    var e, r, i, n, a, s, o = this.hls.config,
                                        u = this.getInternalLoader(t);
                                    if (u) {
                                        var h = u.context;
                                        if (h && h.url === t.url) return void l.logger.trace("[playlist-loader]: playlist request ongoing");
                                        l.logger.log("[playlist-loader]: aborting previous loader for type: " + t.type), u.abort()
                                    }
                                    switch (t.type) {
                                        case C.PlaylistContextType.MANIFEST:
                                            r = o.manifestLoadingMaxRetry, i = o.manifestLoadingTimeOut, n = o.manifestLoadingRetryDelay, a = o.manifestLoadingMaxRetryTimeout;
                                            break;
                                        case C.PlaylistContextType.LEVEL:
                                        case C.PlaylistContextType.AUDIO_TRACK:
                                        case C.PlaylistContextType.SUBTITLE_TRACK:
                                            r = 0, i = o.levelLoadingTimeOut;
                                            break;
                                        default:
                                            r = o.levelLoadingMaxRetry, i = o.levelLoadingTimeOut, n = o.levelLoadingRetryDelay, a = o.levelLoadingMaxRetryTimeout
                                    }
                                    if (u = this.createInternalLoader(t), null !== (e = t.deliveryDirectives) && void 0 !== e && e.part && (t.type === C.PlaylistContextType.LEVEL && null !== t.level ? s = this.hls.levels[t.level].details : t.type === C.PlaylistContextType.AUDIO_TRACK && null !== t.id ? s = this.hls.audioTracks[t.id].details : t.type === C.PlaylistContextType.SUBTITLE_TRACK && null !== t.id && (s = this.hls.subtitleTracks[t.id].details), s)) {
                                        var d = s.partTarget,
                                            c = s.targetduration;
                                        d && c && (i = Math.min(1e3 * Math.max(3 * d, .8 * c), i))
                                    }
                                    var f = {
                                            timeout: i,
                                            maxRetry: r,
                                            retryDelay: n,
                                            maxRetryDelay: a,
                                            highWaterMark: 0
                                        },
                                        g = {
                                            onSuccess: this.loadsuccess.bind(this),
                                            onError: this.loaderror.bind(this),
                                            onTimeout: this.loadtimeout.bind(this)
                                        };
                                    u.load(t, f, g)
                                }, e.loadsuccess = function(t, e, r, i) {
                                    if (void 0 === i && (i = null), r.isSidxRequest) return this.handleSidxRequest(t, r), void this.handlePlaylistLoaded(t, e, r, i);
                                    this.resetInternalLoader(r.type);
                                    var n = t.data;
                                    0 === n.indexOf("#EXTM3U") ? (e.parsing.start = performance.now(), n.indexOf("#EXTINF:") > 0 || n.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(t, e, r, i) : this.handleMasterPlaylist(t, e, r, i)) : this.handleManifestParsingError(t, r, "no EXTM3U delimiter", i)
                                }, e.loaderror = function(t, e, r) {
                                    void 0 === r && (r = null), this.handleNetworkError(e, r, !1, t)
                                }, e.loadtimeout = function(t, e, r) {
                                    void 0 === r && (r = null), this.handleNetworkError(e, r, !0)
                                }, e.handleMasterPlaylist = function(t, e, r, i) {
                                    var n = this.hls,
                                        a = t.data,
                                        o = w(t, r),
                                        u = D.parseMasterPlaylist(a, o),
                                        h = u.levels,
                                        d = u.sessionData;
                                    if (h.length) {
                                        var f = h.map((function(t) {
                                                return {
                                                    id: t.attrs.AUDIO,
                                                    audioCodec: t.audioCodec
                                                }
                                            })),
                                            g = h.map((function(t) {
                                                return {
                                                    id: t.attrs.SUBTITLES,
                                                    textCodec: t.textCodec
                                                }
                                            })),
                                            v = D.parseMasterPlaylistMedia(a, o, "AUDIO", f),
                                            p = D.parseMasterPlaylistMedia(a, o, "SUBTITLES", g),
                                            m = D.parseMasterPlaylistMedia(a, o, "CLOSED-CAPTIONS");
                                        v.length && (v.some((function(t) {
                                            return !t.url
                                        })) || !h[0].audioCodec || h[0].attrs.AUDIO || (l.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), v.unshift({
                                            type: "main",
                                            name: "main",
                                            default: !1,
                                            autoselect: !1,
                                            forced: !1,
                                            id: -1,
                                            attrs: new c({}),
                                            bitrate: 0,
                                            url: ""
                                        }))), n.trigger(s.Events.MANIFEST_LOADED, {
                                            levels: h,
                                            audioTracks: v,
                                            subtitles: p,
                                            captions: m,
                                            url: o,
                                            stats: e,
                                            networkDetails: i,
                                            sessionData: d
                                        })
                                    } else this.handleManifestParsingError(t, r, "no level found in manifest", i)
                                }, e.handleTrackOrLevelPlaylist = function(t, e, r, i) {
                                    var n = this.hls,
                                        l = r.id,
                                        u = r.level,
                                        h = r.type,
                                        d = w(t, r),
                                        f = (0, a.isFiniteNumber)(l) ? l : 0,
                                        g = (0, a.isFiniteNumber)(u) ? u : f,
                                        v = function(t) {
                                            switch (t.type) {
                                                case C.PlaylistContextType.AUDIO_TRACK:
                                                    return C.PlaylistLevelType.AUDIO;
                                                case C.PlaylistContextType.SUBTITLE_TRACK:
                                                    return C.PlaylistLevelType.SUBTITLE;
                                                default:
                                                    return C.PlaylistLevelType.MAIN
                                            }
                                        }(r),
                                        p = D.parseLevelPlaylist(t.data, d, g, v, f);
                                    if (p.fragments.length) {
                                        if (h === C.PlaylistContextType.MANIFEST) {
                                            var m = {
                                                attrs: new c({}),
                                                bitrate: 0,
                                                details: p,
                                                name: "",
                                                url: d
                                            };
                                            n.trigger(s.Events.MANIFEST_LOADED, {
                                                levels: [m],
                                                audioTracks: [],
                                                url: d,
                                                stats: e,
                                                networkDetails: i,
                                                sessionData: null
                                            })
                                        }
                                        if (e.parsing.end = performance.now(), p.needSidxRanges) {
                                            var T, y = null === (T = p.fragments[0].initSegment) || void 0 === T ? void 0 : T.url;
                                            this.load({
                                                url: y,
                                                isSidxRequest: !0,
                                                type: h,
                                                level: u,
                                                levelDetails: p,
                                                id: l,
                                                groupId: null,
                                                rangeStart: 0,
                                                rangeEnd: 2048,
                                                responseType: "arraybuffer",
                                                deliveryDirectives: null
                                            })
                                        } else r.levelDetails = p, this.handlePlaylistLoaded(t, e, r, i)
                                    } else n.trigger(s.Events.ERROR, {
                                        type: o.ErrorTypes.NETWORK_ERROR,
                                        details: o.ErrorDetails.LEVEL_EMPTY_ERROR,
                                        fatal: !1,
                                        url: d,
                                        reason: "no fragments found in level",
                                        level: "number" == typeof r.level ? r.level : void 0
                                    })
                                }, e.handleSidxRequest = function(t, e) {
                                    var r = new Uint8Array(t.data),
                                        i = (0, u.findBox)(r, ["sidx"])[0];
                                    if (i) {
                                        var n = (0, u.parseSegmentIndex)(i);
                                        if (n) {
                                            var a = n.references,
                                                s = e.levelDetails;
                                            a.forEach((function(t, e) {
                                                var i = t.info,
                                                    n = s.fragments[e];
                                                if (0 === n.byteRange.length && n.setByteRange(String(1 + i.end - i.start) + "@" + String(i.start)), n.initSegment) {
                                                    var a = (0, u.findBox)(r, ["moov"])[0],
                                                        o = a ? a.length : null;
                                                    n.initSegment.setByteRange(String(o) + "@0")
                                                }
                                            }))
                                        }
                                    }
                                }, e.handleManifestParsingError = function(t, e, r, i) {
                                    this.hls.trigger(s.Events.ERROR, {
                                        type: o.ErrorTypes.NETWORK_ERROR,
                                        details: o.ErrorDetails.MANIFEST_PARSING_ERROR,
                                        fatal: e.type === C.PlaylistContextType.MANIFEST,
                                        url: t.url,
                                        reason: r,
                                        response: t,
                                        context: e,
                                        networkDetails: i
                                    })
                                }, e.handleNetworkError = function(t, e, r, i) {
                                    void 0 === r && (r = !1), l.logger.warn("[playlist-loader]: A network " + (r ? "timeout" : "error") + " occurred while loading " + t.type + " level: " + t.level + " id: " + t.id + ' group-id: "' + t.groupId + '"');
                                    var n = o.ErrorDetails.UNKNOWN,
                                        a = !1,
                                        u = this.getInternalLoader(t);
                                    switch (t.type) {
                                        case C.PlaylistContextType.MANIFEST:
                                            n = r ? o.ErrorDetails.MANIFEST_LOAD_TIMEOUT : o.ErrorDetails.MANIFEST_LOAD_ERROR, a = !0;
                                            break;
                                        case C.PlaylistContextType.LEVEL:
                                            n = r ? o.ErrorDetails.LEVEL_LOAD_TIMEOUT : o.ErrorDetails.LEVEL_LOAD_ERROR, a = !1;
                                            break;
                                        case C.PlaylistContextType.AUDIO_TRACK:
                                            n = r ? o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, a = !1;
                                            break;
                                        case C.PlaylistContextType.SUBTITLE_TRACK:
                                            n = r ? o.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : o.ErrorDetails.SUBTITLE_LOAD_ERROR, a = !1
                                    }
                                    u && this.resetInternalLoader(t.type);
                                    var h = {
                                        type: o.ErrorTypes.NETWORK_ERROR,
                                        details: n,
                                        fatal: a,
                                        url: t.url,
                                        loader: u,
                                        context: t,
                                        networkDetails: e
                                    };
                                    i && (h.response = i), this.hls.trigger(s.Events.ERROR, h)
                                }, e.handlePlaylistLoaded = function(t, e, r, i) {
                                    var n = r.type,
                                        a = r.level,
                                        o = r.id,
                                        l = r.groupId,
                                        u = r.loader,
                                        h = r.levelDetails,
                                        d = r.deliveryDirectives;
                                    if (null != h && h.targetduration) {
                                        if (u) switch (h.live && (u.getCacheAge && (h.ageHeader = u.getCacheAge() || 0), u.getCacheAge && !isNaN(h.ageHeader) || (h.ageHeader = 0)), n) {
                                            case C.PlaylistContextType.MANIFEST:
                                            case C.PlaylistContextType.LEVEL:
                                                this.hls.trigger(s.Events.LEVEL_LOADED, {
                                                    details: h,
                                                    level: a || 0,
                                                    id: o || 0,
                                                    stats: e,
                                                    networkDetails: i,
                                                    deliveryDirectives: d
                                                });
                                                break;
                                            case C.PlaylistContextType.AUDIO_TRACK:
                                                this.hls.trigger(s.Events.AUDIO_TRACK_LOADED, {
                                                    details: h,
                                                    id: o || 0,
                                                    groupId: l || "",
                                                    stats: e,
                                                    networkDetails: i,
                                                    deliveryDirectives: d
                                                });
                                                break;
                                            case C.PlaylistContextType.SUBTITLE_TRACK:
                                                this.hls.trigger(s.Events.SUBTITLE_TRACK_LOADED, {
                                                    details: h,
                                                    id: o || 0,
                                                    groupId: l || "",
                                                    stats: e,
                                                    networkDetails: i,
                                                    deliveryDirectives: d
                                                })
                                        }
                                    } else this.handleManifestParsingError(t, r, "invalid target duration", i)
                                }, t
                            }();
                            var x = function() {
                                function t(t) {
                                    this.hls = void 0, this.loaders = {}, this.decryptkey = null, this.decrypturl = null, this.hls = t, this.registerListeners()
                                }
                                var e = t.prototype;
                                return e.startLoad = function(t) {}, e.stopLoad = function() {
                                    this.destroyInternalLoaders()
                                }, e.registerListeners = function() {
                                    this.hls.on(s.Events.KEY_LOADING, this.onKeyLoading, this)
                                }, e.unregisterListeners = function() {
                                    this.hls.off(s.Events.KEY_LOADING, this.onKeyLoading)
                                }, e.destroyInternalLoaders = function() {
                                    for (var t in this.loaders) {
                                        var e = this.loaders[t];
                                        e && e.destroy()
                                    }
                                    this.loaders = {}
                                }, e.destroy = function() {
                                    this.unregisterListeners(), this.destroyInternalLoaders()
                                }, e.onKeyLoading = function(t, e) {
                                    var r = e.frag,
                                        i = r.type,
                                        n = this.loaders[i];
                                    if (r.decryptdata) {
                                        var a = r.decryptdata.uri;
                                        if (a !== this.decrypturl || null === this.decryptkey) {
                                            var o = this.hls.config;
                                            if (n && (l.logger.warn("abort previous key loader for type:" + i), n.abort()), !a) return void l.logger.warn("key uri is falsy");
                                            var u = o.loader,
                                                h = r.loader = this.loaders[i] = new u(o);
                                            this.decrypturl = a, this.decryptkey = null;
                                            var d = {
                                                    url: a,
                                                    frag: r,
                                                    responseType: "arraybuffer"
                                                },
                                                c = {
                                                    timeout: o.fragLoadingTimeOut,
                                                    maxRetry: 0,
                                                    retryDelay: o.fragLoadingRetryDelay,
                                                    maxRetryDelay: o.fragLoadingMaxRetryTimeout,
                                                    highWaterMark: 0
                                                },
                                                f = {
                                                    onSuccess: this.loadsuccess.bind(this),
                                                    onError: this.loaderror.bind(this),
                                                    onTimeout: this.loadtimeout.bind(this)
                                                };
                                            h.load(d, c, f)
                                        } else this.decryptkey && (r.decryptdata.key = this.decryptkey, this.hls.trigger(s.Events.KEY_LOADED, {
                                            frag: r
                                        }))
                                    } else l.logger.warn("Missing decryption data on fragment in onKeyLoading")
                                }, e.loadsuccess = function(t, e, r) {
                                    var i = r.frag;
                                    i.decryptdata ? (this.decryptkey = i.decryptdata.key = new Uint8Array(t.data), i.loader = null, delete this.loaders[i.type], this.hls.trigger(s.Events.KEY_LOADED, {
                                        frag: i
                                    })) : l.logger.error("after key load, decryptdata unset")
                                }, e.loaderror = function(t, e) {
                                    var r = e.frag,
                                        i = r.loader;
                                    i && i.abort(), delete this.loaders[r.type], this.hls.trigger(s.Events.ERROR, {
                                        type: o.ErrorTypes.NETWORK_ERROR,
                                        details: o.ErrorDetails.KEY_LOAD_ERROR,
                                        fatal: !1,
                                        frag: r,
                                        response: t
                                    })
                                }, e.loadtimeout = function(t, e) {
                                    var r = e.frag,
                                        i = r.loader;
                                    i && i.abort(), delete this.loaders[r.type], this.hls.trigger(s.Events.ERROR, {
                                        type: o.ErrorTypes.NETWORK_ERROR,
                                        details: o.ErrorDetails.KEY_LOAD_TIMEOUT,
                                        fatal: !1,
                                        frag: r
                                    })
                                }, t
                            }();

                            function P(t, e) {
                                var r;
                                try {
                                    r = new Event("addtrack")
                                } catch (t) {
                                    (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
                                }
                                r.track = t, e.dispatchEvent(r)
                            }

                            function F(t, e) {
                                var r = t.mode;
                                if ("disabled" === r && (t.mode = "hidden"), t.cues && !t.cues.getCueById(e.id)) try {
                                    if (t.addCue(e), !t.cues.getCueById(e.id)) throw new Error("addCue is failed for: " + e)
                                } catch (r) {
                                    l.logger.debug("[texttrack-utils]: " + r);
                                    var i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
                                    i.id = e.id, t.addCue(i)
                                }
                                "disabled" === r && (t.mode = r)
                            }

                            function M(t) {
                                var e = t.mode;
                                if ("disabled" === e && (t.mode = "hidden"), t.cues)
                                    for (var r = t.cues.length; r--;) t.removeCue(t.cues[r]);
                                "disabled" === e && (t.mode = e)
                            }

                            function N(t, e, r, i) {
                                var n = t.mode;
                                if ("disabled" === n && (t.mode = "hidden"), t.cues && t.cues.length > 0)
                                    for (var a = function(t, e, r) {
                                        var i = [],
                                            n = function(t, e) {
                                                if (e < t[0].startTime) return 0;
                                                var r = t.length - 1;
                                                if (e > t[r].endTime) return -1;
                                                for (var i = 0, n = r; i <= n;) {
                                                    var a = Math.floor((n + i) / 2);
                                                    if (e < t[a].startTime) n = a - 1;
                                                    else {
                                                        if (!(e > t[a].startTime && i < r)) return a;
                                                        i = a + 1
                                                    }
                                                }
                                                return t[i].startTime - e < e - t[n].startTime ? i : n
                                            }(t, e);
                                        if (n > -1)
                                            for (var a = n, s = t.length; a < s; a++) {
                                                var o = t[a];
                                                if (o.startTime >= e && o.endTime <= r) i.push(o);
                                                else if (o.startTime > r) return i
                                            }
                                        return i
                                    }(t.cues, e, r), s = 0; s < a.length; s++) i && !i(a[s]) || t.removeCue(a[s]);
                                "disabled" === n && (t.mode = n)
                            }
                            var U = r(181),
                                B = r(856);

                            function G() {
                                return self.WebKitDataCue || self.VTTCue || self.TextTrackCue
                            }
                            var j = function() {
                                var t = G();
                                try {
                                    new t(0, Number.POSITIVE_INFINITY, "")
                                } catch (t) {
                                    return Number.MAX_VALUE
                                }
                                return Number.POSITIVE_INFINITY
                            }();

                            function H(t, e) {
                                return t.getTime() / 1e3 - e
                            }
                            const K = function() {
                                function t(t) {
                                    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = t, this._registerListeners()
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null
                                }, e._registerListeners = function() {
                                    var t = this.hls;
                                    t.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.on(s.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(s.Events.LEVEL_UPDATED, this.onLevelUpdated, this)
                                }, e._unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.off(s.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(s.Events.LEVEL_UPDATED, this.onLevelUpdated, this)
                                }, e.onMediaAttached = function(t, e) {
                                    this.media = e.media
                                }, e.onMediaDetaching = function() {
                                    this.id3Track && (M(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {})
                                }, e.onManifestLoading = function() {
                                    this.dateRangeCuesAppended = {}
                                }, e.createTrack = function(t) {
                                    var e = this.getID3Track(t.textTracks);
                                    return e.mode = "hidden", e
                                }, e.getID3Track = function(t) {
                                    if (this.media) {
                                        for (var e = 0; e < t.length; e++) {
                                            var r = t[e];
                                            if ("metadata" === r.kind && "id3" === r.label) return P(r, this.media), r
                                        }
                                        return this.media.addTextTrack("metadata", "id3")
                                    }
                                }, e.onFragParsingMetadata = function(t, e) {
                                    if (this.media) {
                                        var r = this.hls.config,
                                            i = r.enableEmsgMetadataCues,
                                            n = r.enableID3MetadataCues;
                                        if (i || n) {
                                            e.frag;
                                            var a = e.samples;
                                            e.details, this.id3Track || (this.id3Track = this.createTrack(this.media));
                                            for (var s = G(), o = 0; o < a.length; o++) {
                                                var l = a[o].type;
                                                if ((l !== B.MetadataSchema.emsg || i) && n) {
                                                    var u = U.getID3Frames(a[o].data);
                                                    if (u) {
                                                        var h = a[o].pts,
                                                            d = h + a[o].duration;
                                                        d > j && (d = j), d - h <= 0 && (d = h + .25);
                                                        for (var c = 0; c < u.length; c++) {
                                                            var f = u[c];
                                                            if (!U.isTimeStampFrame(f)) {
                                                                this.updateId3CueEnds(h);
                                                                var g = new s(h, d, "");
                                                                g.value = f, l && (g.type = l), this.id3Track.addCue(g)
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }, e.updateId3CueEnds = function(t) {
                                    var e, r = null === (e = this.id3Track) || void 0 === e ? void 0 : e.cues;
                                    if (r)
                                        for (var i = r.length; i--;) {
                                            var n = r[i];
                                            n.startTime < t && n.endTime === j && (n.endTime = t)
                                        }
                                }, e.onBufferFlushing = function(t, e) {
                                    var r = e.startOffset,
                                        i = e.endOffset,
                                        n = e.type,
                                        a = this.id3Track,
                                        s = this.hls;
                                    if (s) {
                                        var o = s.config,
                                            l = o.enableEmsgMetadataCues,
                                            u = o.enableID3MetadataCues;
                                        a && (l || u) && N(a, r, i, "audio" === n ? function(t) {
                                            return t.type === B.MetadataSchema.audioId3 && u
                                        } : "video" === n ? function(t) {
                                            return t.type === B.MetadataSchema.emsg && l
                                        } : function(t) {
                                            return t.type === B.MetadataSchema.audioId3 && u || t.type === B.MetadataSchema.emsg && l
                                        })
                                    }
                                }, e.onLevelUpdated = function(t, e) {
                                    var r = this,
                                        n = e.details;
                                    if (this.media && n.hasProgramDateTime && this.hls.config.enableDateRangeMetadataCues) {
                                        var s = this.dateRangeCuesAppended,
                                            o = this.id3Track,
                                            l = n.dateRanges,
                                            u = Object.keys(l);
                                        if (o)
                                            for (var h = Object.keys(s).filter((function(t) {
                                                return !u.includes(t)
                                            })), d = function(t) {
                                                var e = h[t];
                                                Object.keys(s[e].cues).forEach((function(t) {
                                                    o.removeCue(s[e].cues[t])
                                                })), delete s[e]
                                            }, c = h.length; c--;) d(c);
                                        var f = n.fragments[n.fragments.length - 1];
                                        if (0 !== u.length && (0, a.isFiniteNumber)(null == f ? void 0 : f.programDateTime)) {
                                            this.id3Track || (this.id3Track = this.createTrack(this.media));
                                            for (var g = f.programDateTime / 1e3 - f.start, v = G(), p = function(t) {
                                                var e = u[t],
                                                    n = l[e],
                                                    a = s[e],
                                                    o = (null == a ? void 0 : a.cues) || {},
                                                    h = (null == a ? void 0 : a.durationKnown) || !1,
                                                    d = H(n.startDate, g),
                                                    c = j,
                                                    f = n.endDate;
                                                if (f) c = H(f, g), h = !0;
                                                else if (n.endOnNext && !h) {
                                                    var p = u.reduce((function(t, e) {
                                                        var r = l[e];
                                                        return r.class === n.class && r.id !== e && r.startDate > n.startDate && t.push(r), t
                                                    }), []).sort((function(t, e) {
                                                        return t.startDate.getTime() - e.startDate.getTime()
                                                    }))[0];
                                                    p && (c = H(p.startDate, g), h = !0)
                                                }
                                                for (var m, T = Object.keys(n.attr), y = 0; y < T.length; y++) {
                                                    var E = T[y];
                                                    if (E !== i.ID && E !== i.CLASS && E !== i.START_DATE && E !== i.DURATION && E !== i.END_DATE && E !== i.END_ON_NEXT) {
                                                        var S = o[E];
                                                        if (S) h && !a.durationKnown && (S.endTime = c);
                                                        else {
                                                            var b = n.attr[E];
                                                            S = new v(d, c, ""), E !== i.SCTE35_OUT && E !== i.SCTE35_IN || (m = b, b = Uint8Array.from(m.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer), S.value = {
                                                                key: E,
                                                                data: b
                                                            }, S.type = B.MetadataSchema.dateRange, r.id3Track.addCue(S), o[E] = S
                                                        }
                                                    }
                                                }
                                                s[e] = {
                                                    cues: o,
                                                    dateRange: n,
                                                    durationKnown: h
                                                }
                                            }, m = 0; m < u.length; m++) p(m)
                                        }
                                    }
                                }, t
                            }();
                            var V, W = function() {
                                function t(t) {
                                    var e = this;
                                    this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
                                        return e.timeupdate()
                                    }, this.hls = t, this.config = t.config, this.registerListeners()
                                }
                                var e, r, i = t.prototype;
                                return i.destroy = function() {
                                    this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null
                                }, i.registerListeners = function() {
                                    this.hls.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(s.Events.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(s.Events.ERROR, this.onError, this)
                                }, i.unregisterListeners = function() {
                                    this.hls.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached), this.hls.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching), this.hls.off(s.Events.MANIFEST_LOADING, this.onManifestLoading), this.hls.off(s.Events.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(s.Events.ERROR, this.onError)
                                }, i.onMediaAttached = function(t, e) {
                                    this.media = e.media, this.media.addEventListener("timeupdate", this.timeupdateHandler)
                                }, i.onMediaDetaching = function() {
                                    this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
                                }, i.onManifestLoading = function() {
                                    this.levelDetails = null, this._latency = null, this.stallCount = 0
                                }, i.onLevelUpdated = function(t, e) {
                                    var r = e.details;
                                    this.levelDetails = r, r.advanced && this.timeupdate(), !r.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
                                }, i.onError = function(t, e) {
                                    e.details === o.ErrorDetails.BUFFER_STALLED_ERROR && (this.stallCount++, l.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
                                }, i.timeupdate = function() {
                                    var t = this.media,
                                        e = this.levelDetails;
                                    if (t && e) {
                                        this.currentTime = t.currentTime;
                                        var r = this.computeLatency();
                                        if (null !== r) {
                                            this._latency = r;
                                            var i = this.config,
                                                n = i.lowLatencyMode,
                                                a = i.maxLiveSyncPlaybackRate;
                                            if (n && 1 !== a) {
                                                var s = this.targetLatency;
                                                if (null !== s) {
                                                    var o = r - s,
                                                        l = o < Math.min(this.maxLatency, s + e.targetduration);
                                                    if (e.live && l && o > .05 && this.forwardBufferLength > 1) {
                                                        var u = Math.min(2, Math.max(1, a)),
                                                            h = Math.round(2 / (1 + Math.exp(-.75 * o - this.edgeStalled)) * 20) / 20;
                                                        t.playbackRate = Math.min(u, Math.max(1, h))
                                                    } else 1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1)
                                                }
                                            }
                                        }
                                    }
                                }, i.estimateLiveEdge = function() {
                                    var t = this.levelDetails;
                                    return null === t ? null : t.edge + t.age
                                }, i.computeLatency = function() {
                                    var t = this.estimateLiveEdge();
                                    return null === t ? null : t - this.currentTime
                                }, e = t, (r = [{
                                    key: "latency",
                                    get: function() {
                                        return this._latency || 0
                                    }
                                }, {
                                    key: "maxLatency",
                                    get: function() {
                                        var t = this.config,
                                            e = this.levelDetails;
                                        return void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0
                                    }
                                }, {
                                    key: "targetLatency",
                                    get: function() {
                                        var t = this.levelDetails;
                                        if (null === t) return null;
                                        var e = t.holdBack,
                                            r = t.partHoldBack,
                                            i = t.targetduration,
                                            n = this.config,
                                            a = n.liveSyncDuration,
                                            s = n.liveSyncDurationCount,
                                            o = n.lowLatencyMode,
                                            l = this.hls.userConfig,
                                            u = o && r || e;
                                        (l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) && (u = void 0 !== a ? a : s * i);
                                        var h = i;
                                        return u + Math.min(1 * this.stallCount, h)
                                    }
                                }, {
                                    key: "liveSyncPosition",
                                    get: function() {
                                        var t = this.estimateLiveEdge(),
                                            e = this.targetLatency,
                                            r = this.levelDetails;
                                        if (null === t || null === e || null === r) return null;
                                        var i = r.edge,
                                            n = t - e - this.edgeStalled,
                                            a = i - r.totalduration,
                                            s = i - (this.config.lowLatencyMode && r.partTarget || r.targetduration);
                                        return Math.min(Math.max(a, n), s)
                                    }
                                }, {
                                    key: "drift",
                                    get: function() {
                                        var t = this.levelDetails;
                                        return null === t ? 1 : t.drift
                                    }
                                }, {
                                    key: "edgeStalled",
                                    get: function() {
                                        var t = this.levelDetails;
                                        if (null === t) return 0;
                                        var e = 3 * (this.config.lowLatencyMode && t.partTarget || t.targetduration);
                                        return Math.max(t.age - e, 0)
                                    }
                                }, {
                                    key: "forwardBufferLength",
                                    get: function() {
                                        var t = this.media,
                                            e = this.levelDetails;
                                        if (!t || !e) return 0;
                                        var r = t.buffered.length;
                                        return (r ? t.buffered.end(r - 1) : e.edge) - this.currentTime
                                    }
                                }]) && function(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                    }
                                }(e.prototype, r), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t
                            }();
                            ! function(t) {
                                t.No = "", t.Yes = "YES", t.v2 = "v2"
                            }(V || (V = {}));
                            var Y = function() {
                                    function t(t, e, r) {
                                        this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t, this.part = e, this.skip = r
                                    }
                                    return t.prototype.addDirectives = function(t) {
                                        var e = new self.URL(t);
                                        return void 0 !== this.msn && e.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && e.searchParams.set("_HLS_part", this.part.toString()), this.skip && e.searchParams.set("_HLS_skip", this.skip), e.toString()
                                    }, t
                                }(),
                                q = function() {
                                    function t(t) {
                                        this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [t.url], this.attrs = t.attrs, this.bitrate = t.bitrate, t.details && (this.details = t.details), this.id = t.id || 0, this.name = t.name, this.width = t.width || 0, this.height = t.height || 0, this.audioCodec = t.audioCodec, this.videoCodec = t.videoCodec, this.unknownCodecs = t.unknownCodecs, this.codecSet = [t.videoCodec, t.audioCodec].filter((function(t) {
                                            return t
                                        })).join(",").replace(/\.[^.,]+/g, "")
                                    }
                                    var e, r;
                                    return e = t, (r = [{
                                        key: "maxBitrate",
                                        get: function() {
                                            return Math.max(this.realBitrate, this.bitrate)
                                        }
                                    }, {
                                        key: "uri",
                                        get: function() {
                                            return this.url[this._urlId] || ""
                                        }
                                    }, {
                                        key: "urlId",
                                        get: function() {
                                            return this._urlId
                                        },
                                        set: function(t) {
                                            var e = t % this.url.length;
                                            this._urlId !== e && (this.details = void 0, this._urlId = e)
                                        }
                                    }]) && function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(e.prototype, r), Object.defineProperty(e, "prototype", {
                                        writable: !1
                                    }), t
                                }();

                            function X() {
                                return X = Object.assign ? Object.assign.bind() : function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                    }
                                    return t
                                }, X.apply(this, arguments)
                            }

                            function z(t, e, r) {
                                switch (e) {
                                    case "audio":
                                        t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds.push(r);
                                        break;
                                    case "text":
                                        t.textGroupIds || (t.textGroupIds = []), t.textGroupIds.push(r)
                                }
                            }

                            function Z(t) {
                                var e = {};
                                t.forEach((function(t) {
                                    var r = t.groupId || "";
                                    t.id = e[r] = e[r] || 0, e[r]++
                                }))
                            }

                            function $(t, e) {
                                var r = e.startPTS;
                                if ((0, a.isFiniteNumber)(r)) {
                                    var i, n = 0;
                                    e.sn > t.sn ? (n = r - t.start, i = t) : (n = t.start - r, i = e), i.duration !== n && (i.duration = n)
                                } else e.sn > t.sn ? t.cc === e.cc && t.minEndPTS ? e.start = t.start + (t.minEndPTS - t.start) : e.start = t.start + t.duration : e.start = Math.max(t.start - e.duration, 0)
                            }

                            function Q(t, e, r, i, n, s) {
                                i - r <= 0 && (l.logger.warn("Fragment should have a positive duration", e), i = r + e.duration, s = n + e.duration);
                                var o = r,
                                    u = i,
                                    h = e.startPTS,
                                    d = e.endPTS;
                                if ((0, a.isFiniteNumber)(h)) {
                                    var c = Math.abs(h - r);
                                    (0, a.isFiniteNumber)(e.deltaPTS) ? e.deltaPTS = Math.max(c, e.deltaPTS): e.deltaPTS = c, o = Math.max(r, h), r = Math.min(r, h), n = Math.min(n, e.startDTS), u = Math.min(i, d), i = Math.max(i, d), s = Math.max(s, e.endDTS)
                                }
                                e.duration = i - r;
                                var f = r - e.start;
                                e.appendedPTS = i, e.start = e.startPTS = r, e.maxStartPTS = o, e.startDTS = n, e.endPTS = i, e.minEndPTS = u, e.endDTS = s;
                                var g, v = e.sn;
                                if (!t || v < t.startSN || v > t.endSN) return 0;
                                var p = v - t.startSN,
                                    m = t.fragments;
                                for (m[p] = e, g = p; g > 0; g--) $(m[g], m[g - 1]);
                                for (g = p; g < m.length - 1; g++) $(m[g], m[g + 1]);
                                return t.fragmentHint && $(m[m.length - 1], t.fragmentHint), t.PTSKnown = t.alignedSliding = !0, f
                            }

                            function J(t, e) {
                                var r = e.startSN + e.skippedSegments - t.startSN,
                                    i = t.fragments;
                                r < 0 || r >= i.length || tt(e, i[r].start)
                            }

                            function tt(t, e) {
                                if (e) {
                                    for (var r = t.fragments, i = t.skippedSegments; i < r.length; i++) r[i].start += e;
                                    t.fragmentHint && (t.fragmentHint.start += e)
                                }
                            }
                            var et = function() {
                                function t(t, e) {
                                    this.hls = void 0, this.timer = -1, this.canLoad = !1, this.retryCount = 0, this.log = void 0, this.warn = void 0, this.log = l.logger.log.bind(l.logger, e + ":"), this.warn = l.logger.warn.bind(l.logger, e + ":"), this.hls = t
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    this.clearTimer(), this.hls = this.log = this.warn = null
                                }, e.onError = function(t, e) {
                                    e.fatal && e.type === o.ErrorTypes.NETWORK_ERROR && this.clearTimer()
                                }, e.clearTimer = function() {
                                    clearTimeout(this.timer), this.timer = -1
                                }, e.startLoad = function() {
                                    this.canLoad = !0, this.retryCount = 0, this.loadPlaylist()
                                }, e.stopLoad = function() {
                                    this.canLoad = !1, this.clearTimer()
                                }, e.switchParams = function(t, e) {
                                    var r = null == e ? void 0 : e.renditionReports;
                                    if (r)
                                        for (var i = 0; i < r.length; i++) {
                                            var n = r[i],
                                                s = "" + n.URI;
                                            if (s === t.slice(-s.length)) {
                                                var o = parseInt(n["LAST-MSN"]),
                                                    l = parseInt(n["LAST-PART"]);
                                                if (e && this.hls.config.lowLatencyMode) {
                                                    var u = Math.min(e.age - e.partTarget, e.targetduration);
                                                    void 0 !== l && u > e.partTarget && (l += 1)
                                                }
                                                if ((0, a.isFiniteNumber)(o)) return new Y(o, (0, a.isFiniteNumber)(l) ? l : void 0, V.No)
                                            }
                                        }
                                }, e.loadPlaylist = function(t) {}, e.shouldLoadTrack = function(t) {
                                    return this.canLoad && t && !!t.url && (!t.details || t.details.live)
                                }, e.playlistLoaded = function(t, e, r) {
                                    var i = this,
                                        n = e.details,
                                        s = e.stats,
                                        o = s.loading.end ? Math.max(0, self.performance.now() - s.loading.end) : 0;
                                    if (n.advancedDateTime = Date.now() - o, n.live || null != r && r.live) {
                                        if (n.reloaded(r), r && this.log("live playlist " + t + " " + (n.advanced ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex : "MISSED")), r && n.fragments.length > 0 && function(t, e) {
                                            for (var r = null, i = t.fragments, n = i.length - 1; n >= 0; n--) {
                                                var s = i[n].initSegment;
                                                if (s) {
                                                    r = s;
                                                    break
                                                }
                                            }
                                            t.fragmentHint && delete t.fragmentHint.endPTS;
                                            var o, u, h, d, c, f = 0;
                                            if (function(t, e, r) {
                                                for (var i = e.skippedSegments, n = Math.max(t.startSN, e.startSN) - e.startSN, a = (t.fragmentHint ? 1 : 0) + (i ? e.endSN : Math.min(t.endSN, e.endSN)) - e.startSN, s = e.startSN - t.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, u = n; u <= a; u++) {
                                                    var h = l[s + u],
                                                        d = o[u];
                                                    i && !d && u < i && (d = e.fragments[u] = h), h && d && r(h, d)
                                                }
                                            }(t, e, (function(t, i) {
                                                t.relurl && (f = t.cc - i.cc), (0, a.isFiniteNumber)(t.startPTS) && (0, a.isFiniteNumber)(t.endPTS) && (i.start = i.startPTS = t.startPTS, i.startDTS = t.startDTS, i.appendedPTS = t.appendedPTS, i.maxStartPTS = t.maxStartPTS, i.endPTS = t.endPTS, i.endDTS = t.endDTS, i.minEndPTS = t.minEndPTS, i.duration = t.endPTS - t.startPTS, i.duration && (o = i), e.PTSKnown = e.alignedSliding = !0), i.elementaryStreams = t.elementaryStreams, i.loader = t.loader, i.stats = t.stats, i.urlId = t.urlId, t.initSegment && (i.initSegment = t.initSegment, r = t.initSegment)
                                            })), r && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((function(t) {
                                                var e;
                                                t.initSegment && t.initSegment.relurl !== (null === (e = r) || void 0 === e ? void 0 : e.relurl) || (t.initSegment = r)
                                            })), e.skippedSegments)
                                                if (e.deltaUpdateFailed = e.fragments.some((function(t) {
                                                    return !t
                                                })), e.deltaUpdateFailed) {
                                                    l.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                                                    for (var v = e.skippedSegments; v--;) e.fragments.shift();
                                                    e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc
                                                } else e.canSkipDateRanges && (e.dateRanges = (u = t.dateRanges, h = e.dateRanges, d = e.recentlyRemovedDateranges, c = X({}, u), d && d.forEach((function(t) {
                                                    delete c[t]
                                                })), Object.keys(h).forEach((function(t) {
                                                    var e = new g(h[t].attr, c[t]);
                                                    e.isValid ? c[t] = e : l.logger.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "' + JSON.stringify(h[t].attr) + '"')
                                                })), c));
                                            var p = e.fragments;
                                            if (f) {
                                                l.logger.warn("discontinuity sliding from playlist, take drift into account");
                                                for (var m = 0; m < p.length; m++) p[m].cc += f
                                            }
                                            e.skippedSegments && (e.startCC = e.fragments[0].cc),
                                                function(t, e, r) {
                                                    if (t && e)
                                                        for (var i = 0, n = 0, a = t.length; n <= a; n++) {
                                                            var s = t[n],
                                                                o = e[n + i];
                                                            s && o && s.index === o.index && s.fragment.sn === o.fragment.sn ? (l = s, (u = o).elementaryStreams = l.elementaryStreams, u.stats = l.stats) : i--
                                                        }
                                                    var l, u
                                                }(t.partList, e.partList), o ? Q(e, o, o.startPTS, o.endPTS, o.startDTS, o.endDTS) : J(t, e), p.length && (e.totalduration = e.edge - p[0].start), e.driftStartTime = t.driftStartTime, e.driftStart = t.driftStart;
                                            var T = e.advancedDateTime;
                                            if (e.advanced && T) {
                                                var y = e.edge;
                                                e.driftStart || (e.driftStartTime = T, e.driftStart = y), e.driftEndTime = T, e.driftEnd = y
                                            } else e.driftEndTime = t.driftEndTime, e.driftEnd = t.driftEnd, e.advancedDateTime = t.advancedDateTime
                                        }(r, n), !this.canLoad || !n.live) return;
                                        var u, h = void 0,
                                            d = void 0;
                                        if (n.canBlockReload && n.endSN && n.advanced) {
                                            var c = this.hls.config.lowLatencyMode,
                                                f = n.lastPartSn,
                                                v = n.endSN,
                                                p = n.lastPartIndex,
                                                m = f === v; - 1 !== p ? (h = m ? v + 1 : f, d = m ? c ? 0 : p : p + 1) : h = v + 1;
                                            var T = n.age,
                                                y = T + n.ageHeader,
                                                E = Math.min(y - n.partTarget, 1.5 * n.targetduration);
                                            if (E > 0) {
                                                if (r && E > r.tuneInGoal) this.warn("CDN Tune-in goal increased from: " + r.tuneInGoal + " to: " + E + " with playlist age: " + n.age), E = 0;
                                                else {
                                                    var S = Math.floor(E / n.targetduration);
                                                    h += S, void 0 !== d && (d += Math.round(E % n.targetduration / n.partTarget)), this.log("CDN Tune-in age: " + n.ageHeader + "s last advanced " + T.toFixed(2) + "s goal: " + E + " skip sn " + S + " to part " + d)
                                                }
                                                n.tuneInGoal = E
                                            }
                                            if (u = this.getDeliveryDirectives(n, e.deliveryDirectives, h, d), c || !m) return void this.loadPlaylist(u)
                                        } else u = this.getDeliveryDirectives(n, e.deliveryDirectives, h, d);
                                        var b = function(t, e) {
                                            var r, i = 1e3 * t.levelTargetDuration,
                                                n = i / 2,
                                                a = t.age,
                                                s = a > 0 && a < 3 * i,
                                                o = e.loading.end - e.loading.start,
                                                l = t.availabilityDelay;
                                            if (!1 === t.updated)
                                                if (s) {
                                                    var u = 333 * t.misses;
                                                    r = Math.max(Math.min(n, 2 * o), u), t.availabilityDelay = (t.availabilityDelay || 0) + r
                                                } else r = n;
                                            else s ? (l = Math.min(l || i / 2, a), t.availabilityDelay = l, r = l + i - a) : r = i - o;
                                            return Math.round(r)
                                        }(n, s);
                                        void 0 !== h && n.canBlockReload && (b -= n.partTarget || 1), this.log("reload live playlist " + t + " in " + Math.round(b) + " ms"), this.timer = self.setTimeout((function() {
                                            return i.loadPlaylist(u)
                                        }), b)
                                    } else this.clearTimer()
                                }, e.getDeliveryDirectives = function(t, e, r, i) {
                                    var n = function(t, e) {
                                        var r = t.canSkipUntil,
                                            i = t.canSkipDateRanges,
                                            n = t.endSN;
                                        return r && (void 0 !== e ? e - n : 0) < r ? i ? V.v2 : V.Yes : V.No
                                    }(t, r);
                                    return null != e && e.skip && t.deltaUpdateFailed && (r = e.msn, i = e.part, n = V.No), new Y(r, i, n)
                                }, e.retryLoadingOrFail = function(t) {
                                    var e, r = this,
                                        i = this.hls.config,
                                        n = this.retryCount < i.levelLoadingMaxRetry;
                                    if (n)
                                        if (this.retryCount++, t.details.indexOf("LoadTimeOut") > -1 && null !== (e = t.context) && void 0 !== e && e.deliveryDirectives) this.warn("retry playlist loading #" + this.retryCount + ' after "' + t.details + '"'), this.loadPlaylist();
                                        else {
                                            var a = Math.min(Math.pow(2, this.retryCount) * i.levelLoadingRetryDelay, i.levelLoadingMaxRetryTimeout);
                                            this.timer = self.setTimeout((function() {
                                                return r.loadPlaylist()
                                            }), a), this.warn("retry playlist loading #" + this.retryCount + " in " + a + ' ms after "' + t.details + '"')
                                        }
                                    else this.warn('cannot recover from error "' + t.details + '"'), this.clearTimer(), t.fatal = !0;
                                    return n
                                }, t
                            }();

                            function rt() {
                                return rt = Object.assign ? Object.assign.bind() : function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                    }
                                    return t
                                }, rt.apply(this, arguments)
                            }

                            function it(t, e) {
                                return it = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, it(t, e)
                            }
                            var nt, at = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                                st = function(t) {
                                    var e, r;

                                    function i(e) {
                                        var r;
                                        return (r = t.call(this, e, "[level-controller]") || this)._levels = [], r._firstLevel = -1, r._startLevel = void 0, r.currentLevelIndex = -1, r.manualLevelIndex = -1, r.onParsedComplete = void 0, r._registerListeners(), r
                                    }
                                    r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, it(e, r);
                                    var n, a, l = i.prototype;
                                    return l._registerListeners = function() {
                                        var t = this.hls;
                                        t.on(s.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(s.Events.FRAG_LOADED, this.onFragLoaded, this), t.on(s.Events.ERROR, this.onError, this)
                                    }, l._unregisterListeners = function() {
                                        var t = this.hls;
                                        t.off(s.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(s.Events.FRAG_LOADED, this.onFragLoaded, this), t.off(s.Events.ERROR, this.onError, this)
                                    }, l.destroy = function() {
                                        this._unregisterListeners(), this.manualLevelIndex = -1, this._levels.length = 0, t.prototype.destroy.call(this)
                                    }, l.startLoad = function() {
                                        this._levels.forEach((function(t) {
                                            t.loadError = 0
                                        })), t.prototype.startLoad.call(this)
                                    }, l.onManifestLoaded = function(t, e) {
                                        var r, i, n = [],
                                            a = [],
                                            l = [],
                                            u = {},
                                            h = !1,
                                            d = !1,
                                            c = !1;
                                        if (e.levels.forEach((function(t) {
                                            var e = t.attrs;
                                            h = h || !(!t.width || !t.height), d = d || !!t.videoCodec, c = c || !!t.audioCodec, at && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0);
                                            var r = t.bitrate + "-" + t.attrs.RESOLUTION + "-" + t.attrs.CODECS;
                                            (i = u[r]) ? i.url.push(t.url): (i = new q(t), u[r] = i, n.push(i)), e && (e.AUDIO && z(i, "audio", e.AUDIO), e.SUBTITLES && z(i, "text", e.SUBTITLES))
                                        })), (h || d) && c && (n = n.filter((function(t) {
                                            var e = t.videoCodec,
                                                r = t.width,
                                                i = t.height;
                                            return !!e || !(!r || !i)
                                        }))), n = n.filter((function(t) {
                                            var e = t.audioCodec,
                                                r = t.videoCodec;
                                            return (!e || y(e, "audio")) && (!r || y(r, "video"))
                                        })), e.audioTracks && Z(a = e.audioTracks.filter((function(t) {
                                            return !t.audioCodec || y(t.audioCodec, "audio")
                                        }))), e.subtitles && Z(l = e.subtitles), n.length > 0) {
                                            r = n[0].bitrate, n.sort((function(t, e) {
                                                return t.bitrate - e.bitrate
                                            })), this._levels = n;
                                            for (var f = 0; f < n.length; f++)
                                                if (n[f].bitrate === r) {
                                                    this._firstLevel = f, this.log("manifest loaded, " + n.length + " level(s) found, first bitrate: " + r);
                                                    break
                                                } var g = c && !d,
                                                v = {
                                                    levels: n,
                                                    audioTracks: a,
                                                    subtitleTracks: l,
                                                    firstLevel: this._firstLevel,
                                                    stats: e.stats,
                                                    audio: c,
                                                    video: d,
                                                    altAudio: !g && a.some((function(t) {
                                                        return !!t.url
                                                    }))
                                                };
                                            this.hls.trigger(s.Events.MANIFEST_PARSED, v), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
                                        } else this.hls.trigger(s.Events.ERROR, {
                                            type: o.ErrorTypes.MEDIA_ERROR,
                                            details: o.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                            fatal: !0,
                                            url: e.url,
                                            reason: "no level with compatible codecs found in manifest"
                                        })
                                    }, l.onError = function(e, r) {
                                        var i;
                                        if (t.prototype.onError.call(this, e, r), !r.fatal) {
                                            var n = r.context,
                                                a = this._levels[this.currentLevelIndex];
                                            if (n && (n.type === C.PlaylistContextType.AUDIO_TRACK && a.audioGroupIds && n.groupId === a.audioGroupIds[a.urlId] || n.type === C.PlaylistContextType.SUBTITLE_TRACK && a.textGroupIds && n.groupId === a.textGroupIds[a.urlId])) this.redundantFailover(this.currentLevelIndex);
                                            else {
                                                var s, l = !1,
                                                    u = !0;
                                                switch (r.details) {
                                                    case o.ErrorDetails.FRAG_LOAD_ERROR:
                                                    case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                                    case o.ErrorDetails.KEY_LOAD_ERROR:
                                                    case o.ErrorDetails.KEY_LOAD_TIMEOUT:
                                                        if (r.frag) {
                                                            var h = r.frag.type === C.PlaylistLevelType.MAIN ? r.frag.level : this.currentLevelIndex,
                                                                d = this._levels[h];
                                                            d ? (d.fragmentError++, d.fragmentError > this.hls.config.fragLoadingMaxRetry && (s = h)) : s = h
                                                        }
                                                        break;
                                                    case o.ErrorDetails.LEVEL_LOAD_ERROR:
                                                    case o.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                                        n && (n.deliveryDirectives && (u = !1), s = n.level), l = !0;
                                                        break;
                                                    case o.ErrorDetails.REMUX_ALLOC_ERROR:
                                                        s = null != (i = r.level) ? i : this.currentLevelIndex, l = !0
                                                }
                                                void 0 !== s && this.recoverLevel(r, s, l, u)
                                            }
                                        }
                                    }, l.recoverLevel = function(t, e, r, i) {
                                        var n = t.details,
                                            a = this._levels[e];
                                        if (a.loadError++, r) {
                                            if (!this.retryLoadingOrFail(t)) return void(this.currentLevelIndex = -1);
                                            t.levelRetry = !0
                                        }
                                        if (i) {
                                            var s = a.url.length;
                                            if (s > 1 && a.loadError < s) t.levelRetry = !0, this.redundantFailover(e);
                                            else if (-1 === this.manualLevelIndex) {
                                                for (var o = -1, l = this._levels, u = l.length; u--;) {
                                                    var h = (u + this.currentLevelIndex) % l.length;
                                                    if (h !== this.currentLevelIndex && 0 === l[h].loadError) {
                                                        o = h;
                                                        break
                                                    }
                                                }
                                                o > -1 && this.currentLevelIndex !== o && (this.warn(n + ": switch to " + o), t.levelRetry = !0, this.hls.nextAutoLevel = o)
                                            }
                                        }
                                    }, l.redundantFailover = function(t) {
                                        var e = this._levels[t],
                                            r = e.url.length;
                                        if (r > 1) {
                                            var i = (e.urlId + 1) % r;
                                            this.warn("Switching to redundant URL-id " + i), this._levels.forEach((function(t) {
                                                t.urlId = i
                                            })), this.level = t
                                        }
                                    }, l.onFragLoaded = function(t, e) {
                                        var r = e.frag;
                                        if (void 0 !== r && r.type === C.PlaylistLevelType.MAIN) {
                                            var i = this._levels[r.level];
                                            void 0 !== i && (i.fragmentError = 0, i.loadError = 0)
                                        }
                                    }, l.onLevelLoaded = function(t, e) {
                                        var r, i, n = e.level,
                                            a = e.details,
                                            s = this._levels[n];
                                        if (!s) return this.warn("Invalid level index " + n), void(null !== (i = e.deliveryDirectives) && void 0 !== i && i.skip && (a.deltaUpdateFailed = !0));
                                        n === this.currentLevelIndex ? (0 === s.fragmentError && (s.loadError = 0, this.retryCount = 0), this.playlistLoaded(n, e, s.details)) : null !== (r = e.deliveryDirectives) && void 0 !== r && r.skip && (a.deltaUpdateFailed = !0)
                                    }, l.onAudioTrackSwitched = function(t, e) {
                                        var r = this.hls.levels[this.currentLevelIndex];
                                        if (r && r.audioGroupIds) {
                                            for (var i = -1, n = this.hls.audioTracks[e.id].groupId, a = 0; a < r.audioGroupIds.length; a++)
                                                if (r.audioGroupIds[a] === n) {
                                                    i = a;
                                                    break
                                                } i !== r.urlId && (r.urlId = i, this.startLoad())
                                        }
                                    }, l.loadPlaylist = function(t) {
                                        var e = this.currentLevelIndex,
                                            r = this._levels[e];
                                        if (this.canLoad && r && r.url.length > 0) {
                                            var i = r.urlId,
                                                n = r.url[i];
                                            if (t) try {
                                                n = t.addDirectives(n)
                                            } catch (t) {
                                                this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                                            }
                                            this.log("Attempt loading level index " + e + (t ? " at sn " + t.msn + " part " + t.part : "") + " with URL-id " + i + " " + n), this.clearTimer(), this.hls.trigger(s.Events.LEVEL_LOADING, {
                                                url: n,
                                                level: e,
                                                id: i,
                                                deliveryDirectives: t || null
                                            })
                                        }
                                    }, l.removeLevel = function(t, e) {
                                        var r = function(t, r) {
                                                return r !== e
                                            },
                                            i = this._levels.filter((function(i, n) {
                                                return n !== t || i.url.length > 1 && void 0 !== e && (i.url = i.url.filter(r), i.audioGroupIds && (i.audioGroupIds = i.audioGroupIds.filter(r)), i.textGroupIds && (i.textGroupIds = i.textGroupIds.filter(r)), i.urlId = 0, !0)
                                            })).map((function(t, e) {
                                                var r = t.details;
                                                return null != r && r.fragments && r.fragments.forEach((function(t) {
                                                    t.level = e
                                                })), t
                                            }));
                                        this._levels = i, this.hls.trigger(s.Events.LEVELS_UPDATED, {
                                            levels: i
                                        })
                                    }, n = i, (a = [{
                                        key: "levels",
                                        get: function() {
                                            return 0 === this._levels.length ? null : this._levels
                                        }
                                    }, {
                                        key: "level",
                                        get: function() {
                                            return this.currentLevelIndex
                                        },
                                        set: function(t) {
                                            var e, r = this._levels;
                                            if (0 !== r.length && (this.currentLevelIndex !== t || null === (e = r[t]) || void 0 === e || !e.details)) {
                                                if (t < 0 || t >= r.length) {
                                                    var i = t < 0;
                                                    if (this.hls.trigger(s.Events.ERROR, {
                                                        type: o.ErrorTypes.OTHER_ERROR,
                                                        details: o.ErrorDetails.LEVEL_SWITCH_ERROR,
                                                        level: t,
                                                        fatal: i,
                                                        reason: "invalid level idx"
                                                    }), i) return;
                                                    t = Math.min(t, r.length - 1)
                                                }
                                                this.clearTimer();
                                                var n = this.currentLevelIndex,
                                                    a = r[n],
                                                    l = r[t];
                                                this.log("switching to level " + t + " from " + n), this.currentLevelIndex = t;
                                                var u = rt({}, l, {
                                                    level: t,
                                                    maxBitrate: l.maxBitrate,
                                                    uri: l.uri,
                                                    urlId: l.urlId
                                                });
                                                delete u._urlId, this.hls.trigger(s.Events.LEVEL_SWITCHING, u);
                                                var h = l.details;
                                                if (!h || h.live) {
                                                    var d = this.switchParams(l.uri, null == a ? void 0 : a.details);
                                                    this.loadPlaylist(d)
                                                }
                                            }
                                        }
                                    }, {
                                        key: "manualLevel",
                                        get: function() {
                                            return this.manualLevelIndex
                                        },
                                        set: function(t) {
                                            this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t)
                                        }
                                    }, {
                                        key: "firstLevel",
                                        get: function() {
                                            return this._firstLevel
                                        },
                                        set: function(t) {
                                            this._firstLevel = t
                                        }
                                    }, {
                                        key: "startLevel",
                                        get: function() {
                                            if (void 0 === this._startLevel) {
                                                var t = this.hls.config.startLevel;
                                                return void 0 !== t ? t : this._firstLevel
                                            }
                                            return this._startLevel
                                        },
                                        set: function(t) {
                                            this._startLevel = t
                                        }
                                    }, {
                                        key: "nextLoadLevel",
                                        get: function() {
                                            return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                                        },
                                        set: function(t) {
                                            this.level = t, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
                                        }
                                    }]) && function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(n.prototype, a), Object.defineProperty(n, "prototype", {
                                        writable: !1
                                    }), i
                                }(et);
                            ! function(t) {
                                t.NOT_LOADED = "NOT_LOADED", t.APPENDING = "APPENDING", t.PARTIAL = "PARTIAL", t.OK = "OK"
                            }(nt || (nt = {}));
                            var ot = function() {
                                function t(t) {
                                    this.activeFragment = null, this.activeParts = null, this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hls = t, this._registerListeners()
                                }
                                var e = t.prototype;
                                return e._registerListeners = function() {
                                    var t = this.hls;
                                    t.on(s.Events.BUFFER_APPENDED, this.onBufferAppended, this), t.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this), t.on(s.Events.FRAG_LOADED, this.onFragLoaded, this)
                                }, e._unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(s.Events.BUFFER_APPENDED, this.onBufferAppended, this), t.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this), t.off(s.Events.FRAG_LOADED, this.onFragLoaded, this)
                                }, e.destroy = function() {
                                    this._unregisterListeners(), this.fragments = this.timeRanges = null
                                }, e.getAppendedFrag = function(t, e) {
                                    if (e === C.PlaylistLevelType.MAIN) {
                                        var r = this.activeFragment,
                                            i = this.activeParts;
                                        if (!r) return null;
                                        if (i)
                                            for (var n = i.length; n--;) {
                                                var a = i[n],
                                                    s = a ? a.end : r.appendedPTS;
                                                if (a.start <= t && void 0 !== s && t <= s) return n > 9 && (this.activeParts = i.slice(n - 9)), a
                                            } else if (r.start <= t && void 0 !== r.appendedPTS && t <= r.appendedPTS) return r
                                    }
                                    return this.getBufferedFrag(t, e)
                                }, e.getBufferedFrag = function(t, e) {
                                    for (var r = this.fragments, i = Object.keys(r), n = i.length; n--;) {
                                        var a = r[i[n]];
                                        if ((null == a ? void 0 : a.body.type) === e && a.buffered) {
                                            var s = a.body;
                                            if (s.start <= t && t <= s.end) return s
                                        }
                                    }
                                    return null
                                }, e.detectEvictedFragments = function(t, e, r) {
                                    var i = this;
                                    Object.keys(this.fragments).forEach((function(n) {
                                        var a = i.fragments[n];
                                        if (a)
                                            if (a.buffered) {
                                                var s = a.range[t];
                                                s && s.time.some((function(t) {
                                                    var r = !i.isTimeBuffered(t.startPTS, t.endPTS, e);
                                                    return r && i.removeFragment(a.body), r
                                                }))
                                            } else a.body.type === r && i.removeFragment(a.body)
                                    }))
                                }, e.detectPartialFragments = function(t) {
                                    var e = this,
                                        r = this.timeRanges,
                                        i = t.frag,
                                        n = t.part;
                                    if (r && "initSegment" !== i.sn) {
                                        var a = ut(i),
                                            s = this.fragments[a];
                                        s && (Object.keys(r).forEach((function(t) {
                                            var a = i.elementaryStreams[t];
                                            if (a) {
                                                var o = r[t],
                                                    l = null !== n || !0 === a.partial;
                                                s.range[t] = e.getBufferedTimes(i, n, l, o)
                                            }
                                        })), s.loaded = null, Object.keys(s.range).length ? s.buffered = !0 : this.removeFragment(s.body))
                                    }
                                }, e.fragBuffered = function(t) {
                                    var e = ut(t),
                                        r = this.fragments[e];
                                    r && (r.loaded = null, r.buffered = !0)
                                }, e.getBufferedTimes = function(t, e, r, i) {
                                    for (var n = {
                                        time: [],
                                        partial: r
                                    }, a = e ? e.start : t.start, s = e ? e.end : t.end, o = t.minEndPTS || s, l = t.maxStartPTS || a, u = 0; u < i.length; u++) {
                                        var h = i.start(u) - this.bufferPadding,
                                            d = i.end(u) + this.bufferPadding;
                                        if (l >= h && o <= d) {
                                            n.time.push({
                                                startPTS: Math.max(a, i.start(u)),
                                                endPTS: Math.min(s, i.end(u))
                                            });
                                            break
                                        }
                                        if (a < d && s > h) n.partial = !0, n.time.push({
                                            startPTS: Math.max(a, i.start(u)),
                                            endPTS: Math.min(s, i.end(u))
                                        });
                                        else if (s <= h) break
                                    }
                                    return n
                                }, e.getPartialFragment = function(t) {
                                    var e, r, i, n = null,
                                        a = 0,
                                        s = this.bufferPadding,
                                        o = this.fragments;
                                    return Object.keys(o).forEach((function(l) {
                                        var u = o[l];
                                        u && lt(u) && (r = u.body.start - s, i = u.body.end + s, t >= r && t <= i && (e = Math.min(t - r, i - t), a <= e && (n = u.body, a = e)))
                                    })), n
                                }, e.getState = function(t) {
                                    var e = ut(t),
                                        r = this.fragments[e];
                                    return r ? r.buffered ? lt(r) ? nt.PARTIAL : nt.OK : nt.APPENDING : nt.NOT_LOADED
                                }, e.isTimeBuffered = function(t, e, r) {
                                    for (var i, n, a = 0; a < r.length; a++) {
                                        if (i = r.start(a) - this.bufferPadding, n = r.end(a) + this.bufferPadding, t >= i && e <= n) return !0;
                                        if (e <= i) return !1
                                    }
                                    return !1
                                }, e.onFragLoaded = function(t, e) {
                                    var r = e.frag,
                                        i = e.part;
                                    if ("initSegment" !== r.sn && !r.bitrateTest && !i) {
                                        var n = ut(r);
                                        this.fragments[n] = {
                                            body: r,
                                            loaded: e,
                                            buffered: !1,
                                            range: Object.create(null)
                                        }
                                    }
                                }, e.onBufferAppended = function(t, e) {
                                    var r = this,
                                        i = e.frag,
                                        n = e.part,
                                        a = e.timeRanges;
                                    if (i.type === C.PlaylistLevelType.MAIN)
                                        if (this.activeFragment = i, n) {
                                            var s = this.activeParts;
                                            s || (this.activeParts = s = []), s.push(n)
                                        } else this.activeParts = null;
                                    this.timeRanges = a, Object.keys(a).forEach((function(t) {
                                        var e = a[t];
                                        if (r.detectEvictedFragments(t, e), !n)
                                            for (var s = 0; s < e.length; s++) i.appendedPTS = Math.max(e.end(s), i.appendedPTS || 0)
                                    }))
                                }, e.onFragBuffered = function(t, e) {
                                    this.detectPartialFragments(e)
                                }, e.hasFragment = function(t) {
                                    var e = ut(t);
                                    return !!this.fragments[e]
                                }, e.removeFragmentsInRange = function(t, e, r) {
                                    var i = this;
                                    Object.keys(this.fragments).forEach((function(n) {
                                        var a = i.fragments[n];
                                        if (a && a.buffered) {
                                            var s = a.body;
                                            s.type === r && s.start < e && s.end > t && i.removeFragment(s)
                                        }
                                    }))
                                }, e.removeFragment = function(t) {
                                    var e = ut(t);
                                    t.stats.loaded = 0, t.clearElementaryStreamInfo(), delete this.fragments[e]
                                }, e.removeAllFragments = function() {
                                    this.fragments = Object.create(null), this.activeFragment = null, this.activeParts = null
                                }, t
                            }();

                            function lt(t) {
                                var e, r;
                                return t.buffered && ((null === (e = t.range.video) || void 0 === e ? void 0 : e.partial) || (null === (r = t.range.audio) || void 0 === r ? void 0 : r.partial))
                            }

                            function ut(t) {
                                return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn
                            }
                            var ht = function() {
                                    function t() {
                                        this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
                                    }
                                    var e = t.prototype;
                                    return e.destroy = function() {
                                        this.onHandlerDestroying(), this.onHandlerDestroyed()
                                    }, e.onHandlerDestroying = function() {
                                        this.clearNextTick(), this.clearInterval()
                                    }, e.onHandlerDestroyed = function() {}, e.hasInterval = function() {
                                        return !!this._tickInterval
                                    }, e.hasNextTick = function() {
                                        return !!this._tickTimer
                                    }, e.setInterval = function(t) {
                                        return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, t), !0)
                                    }, e.clearInterval = function() {
                                        return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
                                    }, e.clearNextTick = function() {
                                        return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
                                    }, e.tick = function() {
                                        this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
                                    }, e.tickImmediate = function() {
                                        this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)
                                    }, e.doTick = function() {}, t
                                }(),
                                dt = {
                                    length: 0,
                                    start: function() {
                                        return 0
                                    },
                                    end: function() {
                                        return 0
                                    }
                                },
                                ct = function() {
                                    function t() {}
                                    return t.isBuffered = function(e, r) {
                                        try {
                                            if (e)
                                                for (var i = t.getBuffered(e), n = 0; n < i.length; n++)
                                                    if (r >= i.start(n) && r <= i.end(n)) return !0
                                        } catch (t) {}
                                        return !1
                                    }, t.bufferInfo = function(e, r, i) {
                                        try {
                                            if (e) {
                                                var n, a = t.getBuffered(e),
                                                    s = [];
                                                for (n = 0; n < a.length; n++) s.push({
                                                    start: a.start(n),
                                                    end: a.end(n)
                                                });
                                                return this.bufferedInfo(s, r, i)
                                            }
                                        } catch (t) {}
                                        return {
                                            len: 0,
                                            start: r,
                                            end: r,
                                            nextStart: void 0
                                        }
                                    }, t.bufferedInfo = function(t, e, r) {
                                        e = Math.max(0, e), t.sort((function(t, e) {
                                            return t.start - e.start || e.end - t.end
                                        }));
                                        var i = [];
                                        if (r)
                                            for (var n = 0; n < t.length; n++) {
                                                var a = i.length;
                                                if (a) {
                                                    var s = i[a - 1].end;
                                                    t[n].start - s < r ? t[n].end > s && (i[a - 1].end = t[n].end) : i.push(t[n])
                                                } else i.push(t[n])
                                            } else i = t;
                                        for (var o, l = 0, u = e, h = e, d = 0; d < i.length; d++) {
                                            var c = i[d].start,
                                                f = i[d].end;
                                            if (e + r >= c && e < f) u = c, l = (h = f) - e;
                                            else if (e + r < c) {
                                                o = c;
                                                break
                                            }
                                        }
                                        return {
                                            len: l,
                                            start: u || 0,
                                            end: h || 0,
                                            nextStart: o
                                        }
                                    }, t.getBuffered = function(t) {
                                        try {
                                            return t.buffered
                                        } catch (t) {
                                            return l.logger.log("failed to get media.buffered", t), dt
                                        }
                                    }, t
                                }(),
                                ft = function(t, e, r, i, n, a) {
                                    void 0 === i && (i = 0), void 0 === n && (n = -1), void 0 === a && (a = !1), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = {
                                        start: 0,
                                        executeStart: 0,
                                        executeEnd: 0,
                                        end: 0
                                    }, this.buffering = {
                                        audio: {
                                            start: 0,
                                            executeStart: 0,
                                            executeEnd: 0,
                                            end: 0
                                        },
                                        video: {
                                            start: 0,
                                            executeStart: 0,
                                            executeEnd: 0,
                                            end: 0
                                        },
                                        audiovideo: {
                                            start: 0,
                                            executeStart: 0,
                                            executeEnd: 0,
                                            end: 0
                                        }
                                    }, this.level = t, this.sn = e, this.id = r, this.size = i, this.part = n, this.partial = a
                                };

                            function gt(t, e) {
                                for (var r = null, i = 0, n = t.length; i < n; i++) {
                                    var a = t[i];
                                    if (a && a.cc === e) {
                                        r = a;
                                        break
                                    }
                                }
                                return r
                            }

                            function vt(t, e) {
                                if (t) {
                                    var r = t.start + e;
                                    t.start = t.startPTS = r, t.endPTS = r + t.duration
                                }
                            }

                            function pt(t, e) {
                                for (var r = e.fragments, i = 0, n = r.length; i < n; i++) vt(r[i], t);
                                e.fragmentHint && vt(e.fragmentHint, t), e.alignedSliding = !0
                            }

                            function mt(t, e) {
                                if (t.hasProgramDateTime && e.hasProgramDateTime) {
                                    var r = t.fragments,
                                        i = e.fragments;
                                    if (r.length && i.length) {
                                        var n = i[Math.round(i.length / 2) - 1],
                                            a = gt(r, n.cc) || r[Math.round(r.length / 2) - 1],
                                            s = n.programDateTime,
                                            o = a.programDateTime;
                                        null !== s && null !== o && pt((o - s) / 1e3 - (a.start - n.start), t)
                                    }
                                }
                            }
                            const Tt = function(t, e) {
                                for (var r = 0, i = t.length - 1, n = null, a = null; r <= i;) {
                                    var s = e(a = t[n = (r + i) / 2 | 0]);
                                    if (s > 0) r = n + 1;
                                    else {
                                        if (!(s < 0)) return a;
                                        i = n - 1
                                    }
                                }
                                return null
                            };

                            function yt(t, e, r, i) {
                                void 0 === r && (r = 0), void 0 === i && (i = 0);
                                var n = null;
                                return t ? n = e[t.sn - e[0].sn + 1] || null : 0 === r && 0 === e[0].start && (n = e[0]), n && 0 === Et(r, i, n) ? n : Tt(e, Et.bind(null, r, i)) || n
                            }

                            function Et(t, e, r) {
                                void 0 === t && (t = 0), void 0 === e && (e = 0);
                                var i = Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                                return r.start + r.duration - i <= t ? 1 : r.start - i > t && r.start ? -1 : 0
                            }

                            function St(t, e, r) {
                                var i = 1e3 * Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                                return (r.endProgramDateTime || 0) - i > t
                            }

                            function bt(t) {
                                var e = "function" == typeof Map ? new Map : void 0;
                                return bt = function(t) {
                                    if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                                    var r;
                                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== e) {
                                        if (e.has(t)) return e.get(t);
                                        e.set(t, i)
                                    }

                                    function i() {
                                        return Lt(t, arguments, Rt(this).constructor)
                                    }
                                    return i.prototype = Object.create(t.prototype, {
                                        constructor: {
                                            value: i,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), Dt(i, t)
                                }, bt(t)
                            }

                            function Lt(t, e, r) {
                                return Lt = kt() ? Reflect.construct.bind() : function(t, e, r) {
                                    var i = [null];
                                    i.push.apply(i, e);
                                    var n = new(Function.bind.apply(t, i));
                                    return r && Dt(n, r.prototype), n
                                }, Lt.apply(null, arguments)
                            }

                            function kt() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                                } catch (t) {
                                    return !1
                                }
                            }

                            function Dt(t, e) {
                                return Dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, Dt(t, e)
                            }

                            function Rt(t) {
                                return Rt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                }, Rt(t)
                            }
                            var At = Math.pow(2, 17),
                                _t = function() {
                                    function t(t) {
                                        this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t
                                    }
                                    var e = t.prototype;
                                    return e.destroy = function() {
                                        this.loader && (this.loader.destroy(), this.loader = null)
                                    }, e.abort = function() {
                                        this.loader && this.loader.abort()
                                    }, e.load = function(t, e) {
                                        var r = this,
                                            i = t.url;
                                        if (!i) return Promise.reject(new Ct({
                                            type: o.ErrorTypes.NETWORK_ERROR,
                                            details: o.ErrorDetails.FRAG_LOAD_ERROR,
                                            fatal: !1,
                                            frag: t,
                                            networkDetails: null
                                        }, "Fragment does not have a " + (i ? "part list" : "url")));
                                        this.abort();
                                        var n = this.config,
                                            a = n.fLoader,
                                            s = n.loader;
                                        return new Promise((function(i, l) {
                                            r.loader && r.loader.destroy();
                                            var u = r.loader = t.loader = a ? new a(n) : new s(n),
                                                h = It(t),
                                                d = {
                                                    timeout: n.fragLoadingTimeOut,
                                                    maxRetry: 0,
                                                    retryDelay: 0,
                                                    maxRetryDelay: n.fragLoadingMaxRetryTimeout,
                                                    highWaterMark: "initSegment" === t.sn ? 1 / 0 : At
                                                };
                                            t.stats = u.stats, u.load(h, d, {
                                                onSuccess: function(e, n, a, s) {
                                                    r.resetLoader(t, u), i({
                                                        frag: t,
                                                        part: null,
                                                        payload: e.data,
                                                        networkDetails: s
                                                    })
                                                },
                                                onError: function(e, i, n) {
                                                    r.resetLoader(t, u), l(new Ct({
                                                        type: o.ErrorTypes.NETWORK_ERROR,
                                                        details: o.ErrorDetails.FRAG_LOAD_ERROR,
                                                        fatal: !1,
                                                        frag: t,
                                                        response: e,
                                                        networkDetails: n
                                                    }))
                                                },
                                                onAbort: function(e, i, n) {
                                                    r.resetLoader(t, u), l(new Ct({
                                                        type: o.ErrorTypes.NETWORK_ERROR,
                                                        details: o.ErrorDetails.INTERNAL_ABORTED,
                                                        fatal: !1,
                                                        frag: t,
                                                        networkDetails: n
                                                    }))
                                                },
                                                onTimeout: function(e, i, n) {
                                                    r.resetLoader(t, u), l(new Ct({
                                                        type: o.ErrorTypes.NETWORK_ERROR,
                                                        details: o.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                                        fatal: !1,
                                                        frag: t,
                                                        networkDetails: n
                                                    }))
                                                },
                                                onProgress: function(r, i, n, a) {
                                                    e && e({
                                                        frag: t,
                                                        part: null,
                                                        payload: n,
                                                        networkDetails: a
                                                    })
                                                }
                                            })
                                        }))
                                    }, e.loadPart = function(t, e, r) {
                                        var i = this;
                                        this.abort();
                                        var n = this.config,
                                            a = n.fLoader,
                                            s = n.loader;
                                        return new Promise((function(l, u) {
                                            i.loader && i.loader.destroy();
                                            var h = i.loader = t.loader = a ? new a(n) : new s(n),
                                                d = It(t, e),
                                                c = {
                                                    timeout: n.fragLoadingTimeOut,
                                                    maxRetry: 0,
                                                    retryDelay: 0,
                                                    maxRetryDelay: n.fragLoadingMaxRetryTimeout,
                                                    highWaterMark: At
                                                };
                                            e.stats = h.stats, h.load(d, c, {
                                                onSuccess: function(n, a, s, o) {
                                                    i.resetLoader(t, h), i.updateStatsFromPart(t, e);
                                                    var u = {
                                                        frag: t,
                                                        part: e,
                                                        payload: n.data,
                                                        networkDetails: o
                                                    };
                                                    r(u), l(u)
                                                },
                                                onError: function(r, n, a) {
                                                    i.resetLoader(t, h), u(new Ct({
                                                        type: o.ErrorTypes.NETWORK_ERROR,
                                                        details: o.ErrorDetails.FRAG_LOAD_ERROR,
                                                        fatal: !1,
                                                        frag: t,
                                                        part: e,
                                                        response: r,
                                                        networkDetails: a
                                                    }))
                                                },
                                                onAbort: function(r, n, a) {
                                                    t.stats.aborted = e.stats.aborted, i.resetLoader(t, h), u(new Ct({
                                                        type: o.ErrorTypes.NETWORK_ERROR,
                                                        details: o.ErrorDetails.INTERNAL_ABORTED,
                                                        fatal: !1,
                                                        frag: t,
                                                        part: e,
                                                        networkDetails: a
                                                    }))
                                                },
                                                onTimeout: function(r, n, a) {
                                                    i.resetLoader(t, h), u(new Ct({
                                                        type: o.ErrorTypes.NETWORK_ERROR,
                                                        details: o.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                                        fatal: !1,
                                                        frag: t,
                                                        part: e,
                                                        networkDetails: a
                                                    }))
                                                }
                                            })
                                        }))
                                    }, e.updateStatsFromPart = function(t, e) {
                                        var r = t.stats,
                                            i = e.stats,
                                            n = i.total;
                                        if (r.loaded += i.loaded, n) {
                                            var a = Math.round(t.duration / e.duration),
                                                s = Math.min(Math.round(r.loaded / n), a),
                                                o = (a - s) * Math.round(r.loaded / s);
                                            r.total = r.loaded + o
                                        } else r.total = Math.max(r.loaded, r.total);
                                        var l = r.loading,
                                            u = i.loading;
                                        l.start ? l.first += u.first - u.start : (l.start = u.start, l.first = u.first), l.end = u.end
                                    }, e.resetLoader = function(t, e) {
                                        t.loader = null, this.loader === e && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e.destroy()
                                    }, t
                                }();

                            function It(t, e) {
                                void 0 === e && (e = null);
                                var r = e || t,
                                    i = {
                                        frag: t,
                                        part: e,
                                        responseType: "arraybuffer",
                                        url: r.url,
                                        headers: {},
                                        rangeStart: 0,
                                        rangeEnd: 0
                                    },
                                    n = r.byteRangeStartOffset,
                                    s = r.byteRangeEndOffset;
                                return (0, a.isFiniteNumber)(n) && (0, a.isFiniteNumber)(s) && (i.rangeStart = n, i.rangeEnd = s), i
                            }
                            var Ct = function(t) {
                                    var e, r;

                                    function i(e) {
                                        for (var r, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                                        return (r = t.call.apply(t, [this].concat(n)) || this).data = void 0, r.data = e, r
                                    }
                                    return r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, Dt(e, r), i
                                }(bt(Error)),
                                wt = r(21);

                            function Ot(t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t
                            }

                            function xt(t, e) {
                                return xt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, xt(t, e)
                            }
                            var Pt = "STOPPED",
                                Ft = "IDLE",
                                Mt = "KEY_LOADING",
                                Nt = "FRAG_LOADING",
                                Ut = "FRAG_LOADING_WAITING_RETRY",
                                Bt = "WAITING_TRACK",
                                Gt = "PARSING",
                                jt = "PARSED",
                                Ht = "ENDED",
                                Kt = "ERROR",
                                Vt = "WAITING_INIT_PTS",
                                Wt = "WAITING_LEVEL",
                                Yt = function(t) {
                                    var e, r;

                                    function i(e, r, i) {
                                        var n;
                                        return (n = t.call(this) || this).hls = void 0, n.fragPrevious = null, n.fragCurrent = null, n.fragmentTracker = void 0, n.transmuxer = null, n._state = Pt, n.media = null, n.mediaBuffer = null, n.config = void 0, n.bitrateTest = !1, n.lastCurrentTime = 0, n.nextLoadPosition = 0, n.startPosition = 0, n.loadedmetadata = !1, n.fragLoadError = 0, n.retryDate = 0, n.levels = null, n.fragmentLoader = void 0, n.levelLastLoaded = null, n.startFragRequested = !1, n.decrypter = void 0, n.initPTS = [], n.onvseeking = null, n.onvended = null, n.logPrefix = "", n.log = void 0, n.warn = void 0, n.logPrefix = i, n.log = l.logger.log.bind(l.logger, i + ":"), n.warn = l.logger.warn.bind(l.logger, i + ":"), n.hls = e, n.fragmentLoader = new _t(e.config), n.fragmentTracker = r, n.config = e.config, n.decrypter = new wt.default(e, e.config), e.on(s.Events.KEY_LOADED, n.onKeyLoaded, Ot(n)), e.on(s.Events.LEVEL_SWITCHING, n.onLevelSwitching, Ot(n)), n
                                    }
                                    r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, xt(e, r);
                                    var n, h, d = i.prototype;
                                    return d.doTick = function() {
                                        this.onTickEnd()
                                    }, d.onTickEnd = function() {}, d.startLoad = function(t) {}, d.stopLoad = function() {
                                        this.fragmentLoader.abort();
                                        var t = this.fragCurrent;
                                        t && this.fragmentTracker.removeFragment(t), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = Pt
                                    }, d._streamEnded = function(t, e) {
                                        var r = this.fragCurrent,
                                            i = this.fragmentTracker;
                                        if (!e.live && r && this.media && r.sn >= e.endSN && !t.nextStart) {
                                            var n = e.partList;
                                            if (null != n && n.length) {
                                                var a = n[n.length - 1];
                                                return ct.isBuffered(this.media, a.start + a.duration / 2)
                                            }
                                            var s = i.getState(r);
                                            return s === nt.PARTIAL || s === nt.OK
                                        }
                                        return !1
                                    }, d.onMediaAttached = function(t, e) {
                                        var r = this.media = this.mediaBuffer = e.media;
                                        this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), r.addEventListener("seeking", this.onvseeking), r.addEventListener("ended", this.onvended);
                                        var i = this.config;
                                        this.levels && i.autoStartLoad && this.state === Pt && this.startLoad(i.startPosition)
                                    }, d.onMediaDetaching = function() {
                                        var t = this.media;
                                        null != t && t.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && this.onvseeking && this.onvended && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
                                    }, d.onMediaSeeking = function() {
                                        var t = this.config,
                                            e = this.fragCurrent,
                                            r = this.media,
                                            i = this.mediaBuffer,
                                            n = this.state,
                                            s = r ? r.currentTime : 0,
                                            o = ct.bufferInfo(i || r, s, t.maxBufferHole);
                                        if (this.log("media seeking to " + ((0, a.isFiniteNumber)(s) ? s.toFixed(3) : s) + ", state: " + n), n === Ht) this.resetLoadingState();
                                        else if (e) {
                                            var l = t.maxFragLookUpTolerance,
                                                u = e.start - l,
                                                h = e.start + e.duration + l;
                                            if (!o.len || h < o.start || u > o.end) {
                                                var d = s > h;
                                                (s < u || d) && (d && e.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e.loader.abort()), this.resetLoadingState())
                                            }
                                        }
                                        r && (this.lastCurrentTime = s), this.loadedmetadata || o.len || (this.nextLoadPosition = this.startPosition = s), this.tickImmediate()
                                    }, d.onMediaEnded = function() {
                                        this.startPosition = this.lastCurrentTime = 0
                                    }, d.onKeyLoaded = function(t, e) {
                                        if (this.state === Mt && e.frag === this.fragCurrent && this.levels) {
                                            this.state = Ft;
                                            var r = this.levels[e.frag.level].details;
                                            r && this.loadFragment(e.frag, r, e.frag.start)
                                        }
                                    }, d.onLevelSwitching = function(t, e) {
                                        this.fragLoadError = 0
                                    }, d.onHandlerDestroying = function() {
                                        this.stopLoad(), t.prototype.onHandlerDestroying.call(this)
                                    }, d.onHandlerDestroyed = function() {
                                        this.state = Pt, this.hls.off(s.Events.KEY_LOADED, this.onKeyLoaded, this), this.hls.off(s.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), this.fragmentLoader && this.fragmentLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null, t.prototype.onHandlerDestroyed.call(this)
                                    }, d.loadKey = function(t, e) {
                                        this.log("Loading key for " + t.sn + " of [" + e.startSN + "-" + e.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level), this.state = Mt, this.fragCurrent = t, this.hls.trigger(s.Events.KEY_LOADING, {
                                            frag: t
                                        })
                                    }, d.loadFragment = function(t, e, r) {
                                        this._loadFragForPlayback(t, e, r)
                                    }, d._loadFragForPlayback = function(t, e, r) {
                                        var i = this;
                                        this._doFragLoad(t, e, r, (function(e) {
                                            if (i.fragContextChanged(t)) return i.warn("Fragment " + t.sn + (e.part ? " p: " + e.part.index : "") + " of level " + t.level + " was dropped during download."), void i.fragmentTracker.removeFragment(t);
                                            t.stats.chunkCount++, i._handleFragmentLoadProgress(e)
                                        })).then((function(e) {
                                            if (e) {
                                                i.fragLoadError = 0;
                                                var r = i.state;
                                                i.fragContextChanged(t) ? (r === Nt || !i.fragCurrent && r === Gt) && (i.fragmentTracker.removeFragment(t), i.state = Ft) : ("payload" in e && (i.log("Loaded fragment " + t.sn + " of level " + t.level), i.hls.trigger(s.Events.FRAG_LOADED, e)), i._handleFragmentLoadComplete(e))
                                            }
                                        })).catch((function(e) {
                                            i.state !== Pt && i.state !== Kt && (i.warn(e), i.resetFragmentLoading(t))
                                        }))
                                    }, d.flushMainBuffer = function(t, e, r) {
                                        if (void 0 === r && (r = null), t - e) {
                                            var i = {
                                                startOffset: t,
                                                endOffset: e,
                                                type: r
                                            };
                                            this.fragLoadError = 0, this.hls.trigger(s.Events.BUFFER_FLUSHING, i)
                                        }
                                    }, d._loadInitSegment = function(t) {
                                        var e = this;
                                        this._doFragLoad(t).then((function(r) {
                                            if (!r || e.fragContextChanged(t) || !e.levels) throw new Error("init load aborted");
                                            return r
                                        })).then((function(r) {
                                            var i = e.hls,
                                                n = r.payload,
                                                a = t.decryptdata;
                                            if (n && n.byteLength > 0 && a && a.key && a.iv && "AES-128" === a.method) {
                                                var o = self.performance.now();
                                                return e.decrypter.webCryptoDecrypt(new Uint8Array(n), a.key.buffer, a.iv.buffer).then((function(e) {
                                                    var n = self.performance.now();
                                                    return i.trigger(s.Events.FRAG_DECRYPTED, {
                                                        frag: t,
                                                        payload: e,
                                                        stats: {
                                                            tstart: o,
                                                            tdecrypt: n
                                                        }
                                                    }), r.payload = e, r
                                                }))
                                            }
                                            return r
                                        })).then((function(r) {
                                            var i = e.fragCurrent,
                                                n = e.hls,
                                                a = e.levels;
                                            if (!a) throw new Error("init load aborted, missing levels");
                                            a[t.level].details;
                                            var o = t.stats;
                                            e.state = Ft, e.fragLoadError = 0, t.data = new Uint8Array(r.payload), o.parsing.start = o.buffering.start = self.performance.now(), o.parsing.end = o.buffering.end = self.performance.now(), r.frag === i && n.trigger(s.Events.FRAG_BUFFERED, {
                                                stats: o,
                                                frag: i,
                                                part: null,
                                                id: t.type
                                            }), e.tick()
                                        })).catch((function(r) {
                                            e.state !== Pt && e.state !== Kt && (e.warn(r), e.resetFragmentLoading(t))
                                        }))
                                    }, d.fragContextChanged = function(t) {
                                        var e = this.fragCurrent;
                                        return !t || !e || t.level !== e.level || t.sn !== e.sn || t.urlId !== e.urlId
                                    }, d.fragBufferedComplete = function(t, e) {
                                        var r, i, n = this.mediaBuffer ? this.mediaBuffer : this.media;
                                        this.log("Buffered " + t.type + " sn: " + t.sn + (e ? " part: " + e.index : "") + " of " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level + " " + (n ? function(t) {
                                            for (var e = "", r = t.length, i = 0; i < r; i++) e += "[" + t.start(i).toFixed(3) + "," + t.end(i).toFixed(3) + "]";
                                            return e
                                        }(ct.getBuffered(n)) : "(detached)")), this.state = Ft, n && (!this.loadedmetadata && t.type == C.PlaylistLevelType.MAIN && n.buffered.length && (null === (r = this.fragCurrent) || void 0 === r ? void 0 : r.sn) === (null === (i = this.fragPrevious) || void 0 === i ? void 0 : i.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick())
                                    }, d.seekToStartPos = function() {}, d._handleFragmentLoadComplete = function(t) {
                                        var e = this.transmuxer;
                                        if (e) {
                                            var r = t.frag,
                                                i = t.part,
                                                n = t.partsLoaded,
                                                a = !n || 0 === n.length || n.some((function(t) {
                                                    return !t
                                                })),
                                                s = new ft(r.level, r.sn, r.stats.chunkCount + 1, 0, i ? i.index : -1, !a);
                                            e.flush(s)
                                        }
                                    }, d._handleFragmentLoadProgress = function(t) {}, d._doFragLoad = function(t, e, r, i) {
                                        var n = this;
                                        if (void 0 === r && (r = null), !this.levels) throw new Error("frag load aborted, missing levels");
                                        if (r = Math.max(t.start, r || 0), this.config.lowLatencyMode && e) {
                                            var o = e.partList;
                                            if (o && i) {
                                                r > t.end && e.fragmentHint && (t = e.fragmentHint);
                                                var l = this.getNextPart(o, t, r);
                                                if (l > -1) {
                                                    var u = o[l];
                                                    return this.log("Loading part sn: " + t.sn + " p: " + u.index + " cc: " + t.cc + " of playlist [" + e.startSN + "-" + e.endSN + "] parts [0-" + l + "-" + (o.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))), this.nextLoadPosition = u.start + u.duration, this.state = Nt, this.hls.trigger(s.Events.FRAG_LOADING, {
                                                        frag: t,
                                                        part: o[l],
                                                        targetBufferTime: r
                                                    }), this.doFragPartsLoad(t, o, l, i).catch((function(t) {
                                                        return n.handleFragLoadError(t)
                                                    }))
                                                }
                                                if (!t.url || this.loadedEndOfParts(o, r)) return Promise.resolve(null)
                                            }
                                        }
                                        return this.log("Loading fragment " + t.sn + " cc: " + t.cc + " " + (e ? "of [" + e.startSN + "-" + e.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))), (0, a.isFiniteNumber)(t.sn) && !this.bitrateTest && (this.nextLoadPosition = t.start + t.duration), this.state = Nt, this.hls.trigger(s.Events.FRAG_LOADING, {
                                            frag: t,
                                            targetBufferTime: r
                                        }), this.fragmentLoader.load(t, i).catch((function(t) {
                                            return n.handleFragLoadError(t)
                                        }))
                                    }, d.doFragPartsLoad = function(t, e, r, i) {
                                        var n = this;
                                        return new Promise((function(a, o) {
                                            var l = [];
                                            ! function r(u) {
                                                var h = e[u];
                                                n.fragmentLoader.loadPart(t, h, i).then((function(i) {
                                                    l[h.index] = i;
                                                    var o = i.part;
                                                    n.hls.trigger(s.Events.FRAG_LOADED, i);
                                                    var d = e[u + 1];
                                                    if (!d || d.fragment !== t) return a({
                                                        frag: t,
                                                        part: o,
                                                        partsLoaded: l
                                                    });
                                                    r(u + 1)
                                                })).catch(o)
                                            }(r)
                                        }))
                                    }, d.handleFragLoadError = function(t) {
                                        var e = t.data;
                                        return e && e.details === o.ErrorDetails.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(s.Events.ERROR, e), null
                                    }, d._handleTransmuxerFlush = function(t) {
                                        var e = this.getCurrentContext(t);
                                        if (e && this.state === Gt) {
                                            var r = e.frag,
                                                i = e.part,
                                                n = e.level,
                                                a = self.performance.now();
                                            r.stats.parsing.end = a, i && (i.stats.parsing.end = a), this.updateLevelTiming(r, i, n, t.partial)
                                        } else this.fragCurrent || (this.state = Ft)
                                    }, d.getCurrentContext = function(t) {
                                        var e = this.levels,
                                            r = t.level,
                                            i = t.sn,
                                            n = t.part;
                                        if (!e || !e[r]) return this.warn("Levels object was unset while buffering fragment " + i + " of level " + r + ". The current chunk will not be buffered."), null;
                                        var a = e[r],
                                            s = n > -1 ? function(t, e, r) {
                                                if (!t || !t.details) return null;
                                                var i = t.details.partList;
                                                if (i)
                                                    for (var n = i.length; n--;) {
                                                        var a = i[n];
                                                        if (a.index === r && a.fragment.sn === e) return a
                                                    }
                                                return null
                                            }(a, i, n) : null,
                                            o = s ? s.fragment : function(t, e, r) {
                                                if (!t || !t.details) return null;
                                                var i = t.details,
                                                    n = i.fragments[e - i.startSN];
                                                return n || ((n = i.fragmentHint) && n.sn === e ? n : e < i.startSN && r && r.sn === e ? r : null)
                                            }(a, i, this.fragCurrent);
                                        return o ? {
                                            frag: o,
                                            part: s,
                                            level: a
                                        } : null
                                    }, d.bufferFragmentData = function(t, e, r, i) {
                                        if (t && this.state === Gt) {
                                            var n = t.data1,
                                                a = t.data2,
                                                o = n;
                                            if (n && a && (o = (0, u.appendUint8Array)(n, a)), o && o.length) {
                                                var l = {
                                                    type: t.type,
                                                    frag: e,
                                                    part: r,
                                                    chunkMeta: i,
                                                    parent: e.type,
                                                    data: o
                                                };
                                                this.hls.trigger(s.Events.BUFFER_APPENDING, l), t.dropped && t.independent && !r && this.flushBufferGap(e)
                                            }
                                        }
                                    }, d.flushBufferGap = function(t) {
                                        var e = this.media;
                                        if (e)
                                            if (ct.isBuffered(e, e.currentTime)) {
                                                var r = e.currentTime,
                                                    i = ct.bufferInfo(e, r, 0),
                                                    n = t.duration,
                                                    a = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * n),
                                                    s = Math.max(Math.min(t.start - a, i.end - a), r + a);
                                                t.start - s > a && this.flushMainBuffer(s, t.start)
                                            } else this.flushMainBuffer(0, t.start)
                                    }, d.getFwdBufferInfo = function(t, e) {
                                        var r = this.config,
                                            i = this.getLoadPosition();
                                        if (!(0, a.isFiniteNumber)(i)) return null;
                                        var n = ct.bufferInfo(t, i, r.maxBufferHole);
                                        if (0 === n.len && void 0 !== n.nextStart) {
                                            var s = this.fragmentTracker.getBufferedFrag(i, e);
                                            if (s && n.nextStart < s.end) return ct.bufferInfo(t, i, Math.max(n.nextStart, r.maxBufferHole))
                                        }
                                        return n
                                    }, d.getMaxBufferLength = function(t) {
                                        var e, r = this.config;
                                        return e = t ? Math.max(8 * r.maxBufferSize / t, r.maxBufferLength) : r.maxBufferLength, Math.min(e, r.maxMaxBufferLength)
                                    }, d.reduceMaxBufferLength = function(t) {
                                        var e = this.config,
                                            r = t || e.maxBufferLength;
                                        return e.maxMaxBufferLength >= r && (e.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
                                    }, d.getNextFragment = function(t, e) {
                                        var r = e.fragments,
                                            i = r.length;
                                        if (!i) return null;
                                        var n, a = this.config,
                                            s = r[0].start;
                                        if (e.live) {
                                            var o = a.initialLiveManifestSize;
                                            if (i < o) return this.warn("Not enough fragments to start playback (have: " + i + ", need: " + o + ")"), null;
                                            e.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (n = this.getInitialLiveFragment(e, r), this.startPosition = n ? this.hls.liveSyncPosition || n.start : t)
                                        } else t <= s && (n = r[0]);
                                        if (!n) {
                                            var l = a.lowLatencyMode ? e.partEnd : e.fragmentEnd;
                                            n = this.getFragmentAtPosition(t, l, e)
                                        }
                                        return this.mapToInitFragWhenRequired(n)
                                    }, d.mapToInitFragWhenRequired = function(t) {
                                        return null == t || !t.initSegment || null != t && t.initSegment.data || this.bitrateTest ? t : t.initSegment
                                    }, d.getNextPart = function(t, e, r) {
                                        for (var i = -1, n = !1, a = !0, s = 0, o = t.length; s < o; s++) {
                                            var l = t[s];
                                            if (a = a && !l.independent, i > -1 && r < l.start) break;
                                            var u = l.loaded;
                                            !u && (n || l.independent || a) && l.fragment === e && (i = s), n = u
                                        }
                                        return i
                                    }, d.loadedEndOfParts = function(t, e) {
                                        var r = t[t.length - 1];
                                        return r && e > r.start && r.loaded
                                    }, d.getInitialLiveFragment = function(t, e) {
                                        var r = this.fragPrevious,
                                            i = null;
                                        if (r) {
                                            if (t.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + r.programDateTime), i = function(t, e, r) {
                                                if (null === e || !Array.isArray(t) || !t.length || !(0, a.isFiniteNumber)(e)) return null;
                                                if (e < (t[0].programDateTime || 0)) return null;
                                                if (e >= (t[t.length - 1].endProgramDateTime || 0)) return null;
                                                r = r || 0;
                                                for (var i = 0; i < t.length; ++i) {
                                                    var n = t[i];
                                                    if (St(e, r, n)) return n
                                                }
                                                return null
                                            }(e, r.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
                                                var n = r.sn + 1;
                                                if (n >= t.startSN && n <= t.endSN) {
                                                    var s = e[n - t.startSN];
                                                    r.cc === s.cc && (i = s, this.log("Live playlist, switching playlist, load frag with next SN: " + i.sn))
                                                }
                                                i || (i = function(t, e) {
                                                    return Tt(t, (function(t) {
                                                        return t.cc < e ? 1 : t.cc > e ? -1 : 0
                                                    }))
                                                }(e, r.cc), i && this.log("Live playlist, switching playlist, load frag with same CC: " + i.sn))
                                            }
                                        } else {
                                            var o = this.hls.liveSyncPosition;
                                            null !== o && (i = this.getFragmentAtPosition(o, this.bitrateTest ? t.fragmentEnd : t.edge, t))
                                        }
                                        return i
                                    }, d.getFragmentAtPosition = function(t, e, r) {
                                        var i, n = this.config,
                                            a = this.fragPrevious,
                                            s = r.fragments,
                                            o = r.endSN,
                                            l = r.fragmentHint,
                                            u = n.maxFragLookUpTolerance,
                                            h = !!(n.lowLatencyMode && r.partList && l);
                                        if (h && l && !this.bitrateTest && (s = s.concat(l), o = l.sn), i = t < e ? yt(a, s, t, t > e - u ? 0 : u) : s[s.length - 1]) {
                                            var d = i.sn - r.startSN;
                                            if (this.fragmentTracker.getState(i) === nt.OK && (a = i), a && i.sn === a.sn && !h && a && i.level === a.level) {
                                                var c = s[d + 1];
                                                i.sn < o && this.fragmentTracker.getState(c) !== nt.OK ? (this.log("SN " + i.sn + " just loaded, load next one: " + c.sn), i = c) : i = null
                                            }
                                        }
                                        return i
                                    }, d.synchronizeToLiveEdge = function(t) {
                                        var e = this.config,
                                            r = this.media;
                                        if (r) {
                                            var i = this.hls.liveSyncPosition,
                                                n = r.currentTime,
                                                a = t.fragments[0].start,
                                                s = t.edge,
                                                o = n >= a - e.maxFragLookUpTolerance && n <= s;
                                            if (null !== i && r.duration > i && (n < i || !o)) {
                                                var l = void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : e.liveMaxLatencyDurationCount * t.targetduration;
                                                (!o && r.readyState < 4 || n < s - l) && (this.loadedmetadata || (this.nextLoadPosition = i), r.readyState && (this.warn("Playback: " + n.toFixed(3) + " is located too far from the end of live sliding playlist: " + s + ", reset currentTime to : " + i.toFixed(3)), r.currentTime = i))
                                            }
                                        }
                                    }, d.alignPlaylists = function(t, e) {
                                        var r = this.levels,
                                            i = this.levelLastLoaded,
                                            n = this.fragPrevious,
                                            s = null !== i ? r[i] : null,
                                            o = t.fragments.length;
                                        if (!o) return this.warn("No fragments in live playlist"), 0;
                                        var u = t.fragments[0].start,
                                            h = !e,
                                            d = t.alignedSliding && (0, a.isFiniteNumber)(u);
                                        if (h || !d && !u) {
                                            ! function(t, e, r) {
                                                e && (function(t, e, r) {
                                                    if (function(t, e, r) {
                                                        return !(!e.details || !(r.endCC > r.startCC || t && t.cc < r.startCC))
                                                    }(t, r, e)) {
                                                        var i = function(t, e, r) {
                                                            void 0 === r && (r = 0);
                                                            var i = t.fragments,
                                                                n = e.fragments;
                                                            if (n.length && i.length) {
                                                                var a = gt(i, n[0].cc);
                                                                if (a && (!a || a.startPTS)) return a;
                                                                l.logger.log("No frag in previous level to align on")
                                                            } else l.logger.log("No fragments to align")
                                                        }(r.details, e);
                                                        i && (0, a.isFiniteNumber)(i.start) && (l.logger.log("Adjusting PTS using last level due to CC increase within current level " + e.url), pt(i.start, e))
                                                    }
                                                }(t, r, e), !r.alignedSliding && e.details && function(t, e) {
                                                    if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
                                                        var r = e.fragments[0].programDateTime,
                                                            i = t.fragments[0].programDateTime,
                                                            n = (i - r) / 1e3 + e.fragments[0].start;
                                                        n && (0, a.isFiniteNumber)(n) && (l.logger.log("Adjusting PTS using programDateTime delta " + (i - r) + "ms, sliding:" + n.toFixed(3) + " " + t.url + " "), pt(n, t))
                                                    }
                                                }(r, e.details), r.alignedSliding || !e.details || r.skippedSegments || J(e.details, r))
                                            }(n, s, t);
                                            var c = t.fragments[0].start;
                                            return this.log("Live playlist sliding: " + c.toFixed(2) + " start-sn: " + (e ? e.startSN : "na") + "->" + t.startSN + " prev-sn: " + (n ? n.sn : "na") + " fragments: " + o), c
                                        }
                                        return u
                                    }, d.waitForCdnTuneIn = function(t) {
                                        return t.live && t.canBlockReload && t.partTarget && t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
                                    }, d.setStartPosition = function(t, e) {
                                        var r = this.startPosition;
                                        if (r < e && (r = -1), -1 === r || -1 === this.lastCurrentTime) {
                                            var i = t.startTimeOffset;
                                            (0, a.isFiniteNumber)(i) ? (r = e + i, i < 0 && (r += t.totalduration), r = Math.min(Math.max(e, r), e + t.totalduration), this.log("Start time offset " + i + " found in playlist, adjust startPosition to " + r), this.startPosition = r) : t.live ? r = this.hls.liveSyncPosition || e : this.startPosition = r = 0, this.lastCurrentTime = r
                                        }
                                        this.nextLoadPosition = r
                                    }, d.getLoadPosition = function() {
                                        var t = this.media,
                                            e = 0;
                                        return this.loadedmetadata && t ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition), e
                                    }, d.handleFragLoadAborted = function(t, e) {
                                        this.transmuxer && "initSegment" !== t.sn && t.stats.aborted && (this.warn("Fragment " + t.sn + (e ? " part" + e.index : "") + " of level " + t.level + " was aborted"), this.resetFragmentLoading(t))
                                    }, d.resetFragmentLoading = function(t) {
                                        this.fragCurrent && (this.fragContextChanged(t) || this.state === Ut) || (this.state = Ft)
                                    }, d.onFragmentOrKeyLoadError = function(t, e) {
                                        if (!e.fatal) {
                                            var r = e.frag;
                                            if (r && r.type === t) {
                                                this.fragCurrent;
                                                var i = this.config;
                                                if (this.fragLoadError + 1 <= i.fragLoadingMaxRetry) {
                                                    this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition);
                                                    var n = Math.min(Math.pow(2, this.fragLoadError) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
                                                    this.warn("Fragment " + r.sn + " of " + t + " " + r.level + " failed to load, retrying in " + n + "ms"), this.retryDate = self.performance.now() + n, this.fragLoadError++, this.state = Ut
                                                } else e.levelRetry ? (t === C.PlaylistLevelType.AUDIO && (this.fragCurrent = null), this.fragLoadError = 0, this.state = Ft) : (l.logger.error(e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.hls.stopLoad(), this.state = Kt)
                                            }
                                        }
                                    }, d.afterBufferFlushed = function(t, e, r) {
                                        if (t) {
                                            var i = ct.getBuffered(t);
                                            this.fragmentTracker.detectEvictedFragments(e, i, r), this.state === Ht && this.resetLoadingState()
                                        }
                                    }, d.resetLoadingState = function() {
                                        this.fragCurrent = null, this.fragPrevious = null, this.state = Ft
                                    }, d.resetStartWhenNotLoaded = function(t) {
                                        if (!this.loadedmetadata) {
                                            this.startFragRequested = !1;
                                            var e = this.levels ? this.levels[t].details : null;
                                            null != e && e.live ? (this.startPosition = -1, this.setStartPosition(e, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition
                                        }
                                    }, d.updateLevelTiming = function(t, e, r, i) {
                                        var n = this,
                                            a = r.details;
                                        Object.keys(t.elementaryStreams).reduce((function(e, o) {
                                            var l = t.elementaryStreams[o];
                                            if (l) {
                                                var u = l.endPTS - l.startPTS;
                                                if (u <= 0) return n.warn("Could not parse fragment " + t.sn + " " + o + " duration reliably (" + u + ")"), e || !1;
                                                var h = i ? 0 : Q(a, t, l.startPTS, l.endPTS, l.startDTS, l.endDTS);
                                                return n.hls.trigger(s.Events.LEVEL_PTS_UPDATED, {
                                                    details: a,
                                                    level: r,
                                                    drift: h,
                                                    type: o,
                                                    frag: t,
                                                    start: l.startPTS,
                                                    end: l.endPTS
                                                }), !0
                                            }
                                            return e
                                        }), !1) || (this.warn("Found no media in fragment " + t.sn + " of level " + r.id + " resetting transmuxer to fallback to playlist timing"), this.resetTransmuxer()), this.state = jt, this.hls.trigger(s.Events.FRAG_PARSED, {
                                            frag: t,
                                            part: e
                                        })
                                    }, d.resetTransmuxer = function() {
                                        this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
                                    }, n = i, (h = [{
                                        key: "state",
                                        get: function() {
                                            return this._state
                                        },
                                        set: function(t) {
                                            var e = this._state;
                                            e !== t && (this._state = t, this.log(e + "->" + t))
                                        }
                                    }]) && function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(n.prototype, h), Object.defineProperty(n, "prototype", {
                                        writable: !1
                                    }), i
                                }(ht);

                            function qt() {
                                return self.MediaSource || self.WebKitMediaSource
                            }

                            function Xt() {
                                return self.SourceBuffer || self.WebKitSourceBuffer
                            }
                            var zt = function() {
                                    var t = ENTRY_MODULE,
                                        e = {},
                                        r = function r(i) {
                                            var n = e[i];
                                            if (void 0 !== n) return n.exports;
                                            var a = e[i] = {
                                                exports: {}
                                            };
                                            return t[i].call(a.exports, a, a.exports, r), a.exports
                                        };
                                    r.m = t, r.n = function(t) {
                                        var e = t && t.__esModule ? function() {
                                            return t.default
                                        } : function() {
                                            return t
                                        };
                                        return r.d(e, {
                                            a: e
                                        }), e
                                    }, r.d = function(t, e) {
                                        for (var i in e) r.o(e, i) && !r.o(t, i) && Object.defineProperty(t, i, {
                                            enumerable: !0,
                                            get: e[i]
                                        })
                                    }, r.o = function(t, e) {
                                        return Object.prototype.hasOwnProperty.call(t, e)
                                    }, r.r = function(t) {
                                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                                            value: "Module"
                                        }), Object.defineProperty(t, "__esModule", {
                                            value: !0
                                        })
                                    };
                                    var i = r(ENTRY_MODULE);
                                    return i.default || i
                                }.toString().split("ENTRY_MODULE"),
                                Zt = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)";

                            function $t(t) {
                                return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                            }

                            function Qt(t, e, i) {
                                var n = {};
                                n[i] = [];
                                var a = e.toString().replace(/^"[^"]+"/, "function"),
                                    s = a.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/) || a.match(/^\(\w+,\s*\w+,\s*(\w+)\)\s?\=\s?\>/);
                                if (!s) return n;
                                for (var o, l = s[1], u = new RegExp("(\\\\n|\\W)" + $t(l) + Zt, "g"); o = u.exec(a);) "dll-reference" !== o[3] && n[i].push(o[3]);
                                for (u = new RegExp("\\(" + $t(l) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)' + Zt, "g"); o = u.exec(a);) t[o[2]] || (n[i].push(o[1]), t[o[2]] = r(o[1]).m), n[o[2]] = n[o[2]] || [], n[o[2]].push(o[4]);
                                for (var h, d = Object.keys(n), c = 0; c < d.length; c++)
                                    for (var f = 0; f < n[d[c]].length; f++) h = n[d[c]][f], isNaN(1 * h) || (n[d[c]][f] = 1 * n[d[c]][f]);
                                return n
                            }

                            function Jt(t) {
                                return Object.keys(t).reduce((function(e, r) {
                                    return e || t[r].length > 0
                                }), !1)
                            }

                            function te(t, e, r, i) {
                                var n = t[i].map((function(t) {
                                    return '"' + t + '": ' + e[i][t].toString().replace(/^"[^"]+"/, "function")
                                })).join(",");
                                return zt[0] + "{" + n + "}" + zt[1] + '"' + r + '"' + zt[2]
                            }
                            var ee = r(544),
                                re = r(729),
                                ie = qt() || {
                                    isTypeSupported: function() {
                                        return !1
                                    }
                                },
                                ne = function() {
                                    function t(t, e, i, n) {
                                        var a = this;
                                        this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
                                        var u = t.config;
                                        this.hls = t, this.id = e, this.useWorker = !!u.enableWorker, this.onTransmuxComplete = i, this.onFlush = n;
                                        var h = function(t, e) {
                                            (e = e || {}).frag = a.frag, e.id = a.id, a.hls.trigger(t, e)
                                        };
                                        this.observer = new re.EventEmitter, this.observer.on(s.Events.FRAG_DECRYPTED, h), this.observer.on(s.Events.ERROR, h);
                                        var d = {
                                                mp4: ie.isTypeSupported("video/mp4"),
                                                mpeg: ie.isTypeSupported("audio/mpeg"),
                                                mp3: ie.isTypeSupported('audio/mp4; codecs="mp3"')
                                            },
                                            c = navigator.vendor;
                                        if (this.useWorker && "undefined" != typeof Worker) {
                                            var f;
                                            l.logger.log("demuxing in webworker");
                                            try {
                                                f = this.worker = function(t, e) {
                                                    e = e || {};
                                                    var i = {
                                                            main: r.m
                                                        },
                                                        n = e.all ? {
                                                            main: Object.keys(i.main)
                                                        } : function(t, e) {
                                                            for (var r = {
                                                                main: [182]
                                                            }, i = {
                                                                main: []
                                                            }, n = {
                                                                main: {}
                                                            }; Jt(r);)
                                                                for (var a = Object.keys(r), s = 0; s < a.length; s++) {
                                                                    var o = a[s],
                                                                        l = r[o].pop();
                                                                    if (n[o] = n[o] || {}, !n[o][l] && t[o][l]) {
                                                                        n[o][l] = !0, i[o] = i[o] || [], i[o].push(l);
                                                                        for (var u = Qt(t, t[o][l], o), h = Object.keys(u), d = 0; d < h.length; d++) r[h[d]] = r[h[d]] || [], r[h[d]] = r[h[d]].concat(u[h[d]])
                                                                    }
                                                                }
                                                            return i
                                                        }(i),
                                                        a = "";
                                                    Object.keys(n).filter((function(t) {
                                                        return "main" !== t
                                                    })).forEach((function(t) {
                                                        for (var e = 0; n[t][e];) e++;
                                                        n[t].push(e), i[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", a = a + "var " + t + " = (" + te(n, i, e, modules) + ")();\n"
                                                    })), a = a + "new ((" + te(n, i, 182, "main") + ")())(self);";
                                                    var s = new window.Blob([a], {
                                                            type: "text/javascript"
                                                        }),
                                                        o = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(s),
                                                        l = new window.Worker(o);
                                                    return l.objectURL = o, l
                                                }(), this.onwmsg = this.onWorkerMessage.bind(this), f.addEventListener("message", this.onwmsg), f.onerror = function(t) {
                                                    a.useWorker = !1, l.logger.warn("Exception in webworker, fallback to inline"), a.hls.trigger(s.Events.ERROR, {
                                                        type: o.ErrorTypes.OTHER_ERROR,
                                                        details: o.ErrorDetails.INTERNAL_EXCEPTION,
                                                        fatal: !1,
                                                        event: "demuxerWorker",
                                                        error: new Error(t.message + "  (" + t.filename + ":" + t.lineno + ")")
                                                    })
                                                }, f.postMessage({
                                                    cmd: "init",
                                                    typeSupported: d,
                                                    vendor: c,
                                                    id: e,
                                                    config: JSON.stringify(u)
                                                })
                                            } catch (t) {
                                                l.logger.warn("Error in worker:", t), l.logger.error("Error while initializing DemuxerWorker, fallback to inline"), f && self.URL.revokeObjectURL(f.objectURL), this.transmuxer = new ee.default(this.observer, d, u, c, e), this.worker = null
                                            }
                                        } else this.transmuxer = new ee.default(this.observer, d, u, c, e)
                                    }
                                    var e = t.prototype;
                                    return e.destroy = function() {
                                        var t = this.worker;
                                        if (t) t.removeEventListener("message", this.onwmsg), t.terminate(), this.worker = null, this.onwmsg = void 0;
                                        else {
                                            var e = this.transmuxer;
                                            e && (e.destroy(), this.transmuxer = null)
                                        }
                                        var r = this.observer;
                                        r && r.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null
                                    }, e.push = function(t, e, r, i, n, a, s, o, u, h) {
                                        var d, c, f = this;
                                        u.transmuxing.start = self.performance.now();
                                        var g = this.transmuxer,
                                            v = this.worker,
                                            p = a ? a.start : n.start,
                                            m = n.decryptdata,
                                            T = this.frag,
                                            y = !(T && n.cc === T.cc),
                                            E = !(T && u.level === T.level),
                                            S = T ? u.sn - T.sn : -1,
                                            b = this.part ? u.part - this.part.index : -1,
                                            L = 0 === S && u.id > 1 && u.id === (null == T ? void 0 : T.stats.chunkCount),
                                            k = !E && (1 === S || 0 === S && (1 === b || L && b <= 0)),
                                            D = self.performance.now();
                                        (E || S || 0 === n.stats.parsing.start) && (n.stats.parsing.start = D), !a || !b && k || (a.stats.parsing.start = D);
                                        var R = !(T && (null === (d = n.initSegment) || void 0 === d ? void 0 : d.url) === (null === (c = T.initSegment) || void 0 === c ? void 0 : c.url)),
                                            A = new ee.TransmuxState(y, k, o, E, p, R);
                                        if (!k || y || R) {
                                            l.logger.log("[transmuxer-interface, " + n.type + "]: Starting new transmux session for sn: " + u.sn + " p: " + u.part + " level: " + u.level + " id: " + u.id + "\n        discontinuity: " + y + "\n        trackSwitch: " + E + "\n        contiguous: " + k + "\n        accurateTimeOffset: " + o + "\n        timeOffset: " + p + "\n        initSegmentChange: " + R);
                                            var _ = new ee.TransmuxConfig(r, i, e, s, h);
                                            this.configureTransmuxer(_)
                                        }
                                        if (this.frag = n, this.part = a, v) v.postMessage({
                                            cmd: "demux",
                                            data: t,
                                            decryptdata: m,
                                            chunkMeta: u,
                                            state: A
                                        }, t instanceof ArrayBuffer ? [t] : []);
                                        else if (g) {
                                            var I = g.push(t, m, u, A);
                                            (0, ee.isPromise)(I) ? I.then((function(t) {
                                                f.handleTransmuxComplete(t)
                                            })): this.handleTransmuxComplete(I)
                                        }
                                    }, e.flush = function(t) {
                                        var e = this;
                                        t.transmuxing.start = self.performance.now();
                                        var r = this.transmuxer,
                                            i = this.worker;
                                        if (i) i.postMessage({
                                            cmd: "flush",
                                            chunkMeta: t
                                        });
                                        else if (r) {
                                            var n = r.flush(t);
                                            (0, ee.isPromise)(n) ? n.then((function(r) {
                                                e.handleFlushResult(r, t)
                                            })): this.handleFlushResult(n, t)
                                        }
                                    }, e.handleFlushResult = function(t, e) {
                                        var r = this;
                                        t.forEach((function(t) {
                                            r.handleTransmuxComplete(t)
                                        })), this.onFlush(e)
                                    }, e.onWorkerMessage = function(t) {
                                        var e = t.data,
                                            r = this.hls;
                                        switch (e.event) {
                                            case "init":
                                                self.URL.revokeObjectURL(this.worker.objectURL);
                                                break;
                                            case "transmuxComplete":
                                                this.handleTransmuxComplete(e.data);
                                                break;
                                            case "flush":
                                                this.onFlush(e.data);
                                                break;
                                            case "workerLog":
                                                l.logger[e.data.logType] && l.logger[e.data.logType](e.data.message);
                                                break;
                                            default:
                                                e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, r.trigger(e.event, e.data)
                                        }
                                    }, e.configureTransmuxer = function(t) {
                                        var e = this.worker,
                                            r = this.transmuxer;
                                        e ? e.postMessage({
                                            cmd: "configure",
                                            config: t
                                        }) : r && r.configure(t)
                                    }, e.handleTransmuxComplete = function(t) {
                                        t.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t)
                                    }, t
                                }(),
                                ae = function() {
                                    function t(t, e, r, i) {
                                        this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = t, this.media = e, this.fragmentTracker = r, this.hls = i
                                    }
                                    var e = t.prototype;
                                    return e.destroy = function() {
                                        this.media = null, this.hls = this.fragmentTracker = null
                                    }, e.poll = function(t, e) {
                                        var r = this.config,
                                            i = this.media,
                                            n = this.stalled;
                                        if (null !== i) {
                                            var a = i.currentTime,
                                                s = i.seeking,
                                                o = this.seeking && !s,
                                                u = !this.seeking && s;
                                            if (this.seeking = s, a === t) {
                                                if ((u || o) && (this.stalled = null), !(i.paused && !s || i.ended || 0 === i.playbackRate) && ct.getBuffered(i).length) {
                                                    var h = ct.bufferInfo(i, a, 0),
                                                        d = h.len > 0,
                                                        c = h.nextStart || 0;
                                                    if (d || c) {
                                                        if (s) {
                                                            var f = h.len > 2,
                                                                g = !c || e && e.start <= a || c - a > 2 && !this.fragmentTracker.getPartialFragment(a);
                                                            if (f || g) return;
                                                            this.moved = !1
                                                        }
                                                        if (!this.moved && null !== this.stalled) {
                                                            var v, p = Math.max(c, h.start || 0) - a,
                                                                m = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                                                                T = (null == m || null === (v = m.details) || void 0 === v ? void 0 : v.live) ? 2 * m.details.targetduration : 2;
                                                            if (p > 0 && p <= T) return void this._trySkipBufferHole(null)
                                                        }
                                                        var y = self.performance.now();
                                                        if (null !== n) {
                                                            var E = y - n;
                                                            if (s || !(E >= 250) || (this._reportStall(h), this.media)) {
                                                                var S = ct.bufferInfo(i, a, r.maxBufferHole);
                                                                this._tryFixBufferStall(S, E)
                                                            }
                                                        } else this.stalled = y
                                                    }
                                                }
                                            } else if (this.moved = !0, null !== n) {
                                                if (this.stallReported) {
                                                    var b = self.performance.now() - n;
                                                    l.logger.warn("playback not stuck anymore @" + a + ", after " + Math.round(b) + "ms"), this.stallReported = !1
                                                }
                                                this.stalled = null, this.nudgeRetry = 0
                                            }
                                        }
                                    }, e._tryFixBufferStall = function(t, e) {
                                        var r = this.config,
                                            i = this.fragmentTracker,
                                            n = this.media;
                                        if (null !== n) {
                                            var a = n.currentTime,
                                                s = i.getPartialFragment(a);
                                            if (s && (this._trySkipBufferHole(s) || !this.media)) return;
                                            t.len > r.maxBufferHole && e > 1e3 * r.highBufferWatchdogPeriod && (l.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
                                        }
                                    }, e._reportStall = function(t) {
                                        var e = this.hls,
                                            r = this.media;
                                        !this.stallReported && r && (this.stallReported = !0, l.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer (" + JSON.stringify(t) + ")"), e.trigger(s.Events.ERROR, {
                                            type: o.ErrorTypes.MEDIA_ERROR,
                                            details: o.ErrorDetails.BUFFER_STALLED_ERROR,
                                            fatal: !1,
                                            buffer: t.len
                                        }))
                                    }, e._trySkipBufferHole = function(t) {
                                        var e = this.config,
                                            r = this.hls,
                                            i = this.media;
                                        if (null === i) return 0;
                                        for (var n = i.currentTime, a = 0, u = ct.getBuffered(i), h = 0; h < u.length; h++) {
                                            var d = u.start(h);
                                            if (n + e.maxBufferHole >= a && n < d) {
                                                var c = Math.max(d + .05, i.currentTime + .1);
                                                return l.logger.warn("skipping hole, adjusting currentTime from " + n + " to " + c), this.moved = !0, this.stalled = null, i.currentTime = c, t && r.trigger(s.Events.ERROR, {
                                                    type: o.ErrorTypes.MEDIA_ERROR,
                                                    details: o.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                                    fatal: !1,
                                                    reason: "fragment loaded with buffer holes, seeking from " + n + " to " + c,
                                                    frag: t
                                                }), c
                                            }
                                            a = u.end(h)
                                        }
                                        return 0
                                    }, e._tryNudgeBuffer = function() {
                                        var t = this.config,
                                            e = this.hls,
                                            r = this.media,
                                            i = this.nudgeRetry;
                                        if (null !== r) {
                                            var n = r.currentTime;
                                            if (this.nudgeRetry++, i < t.nudgeMaxRetry) {
                                                var a = n + (i + 1) * t.nudgeOffset;
                                                l.logger.warn("Nudging 'currentTime' from " + n + " to " + a), r.currentTime = a, e.trigger(s.Events.ERROR, {
                                                    type: o.ErrorTypes.MEDIA_ERROR,
                                                    details: o.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                                                    fatal: !1
                                                })
                                            } else l.logger.error("Playhead still not moving while enough data buffered @" + n + " after " + t.nudgeMaxRetry + " nudges"), e.trigger(s.Events.ERROR, {
                                                type: o.ErrorTypes.MEDIA_ERROR,
                                                details: o.ErrorDetails.BUFFER_STALLED_ERROR,
                                                fatal: !0
                                            })
                                        }
                                    }, t
                                }();

                            function se(t, e) {
                                return se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, se(t, e)
                            }
                            var oe = function(t) {
                                var e, r;

                                function i(e, r) {
                                    var i;
                                    return (i = t.call(this, e, r, "[stream-controller]") || this).audioCodecSwap = !1, i.gapController = null, i.level = -1, i._forceStartLoad = !1, i.altAudio = !1, i.audioOnly = !1, i.fragPlaying = null, i.onvplaying = null, i.onvseeked = null, i.fragLastKbps = 0, i.couldBacktrack = !1, i.backtrackFragment = null, i.audioCodecSwitch = !1, i.videoBuffer = null, i._registerListeners(), i
                                }
                                r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, se(e, r);
                                var n, l, u = i.prototype;
                                return u._registerListeners = function() {
                                    var t = this.hls;
                                    t.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.on(s.Events.ERROR, this.onError, this), t.on(s.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(s.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(s.Events.BUFFER_CREATED, this.onBufferCreated, this), t.on(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(s.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                                }, u._unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.off(s.Events.ERROR, this.onError, this), t.off(s.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(s.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(s.Events.BUFFER_CREATED, this.onBufferCreated, this), t.off(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(s.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                                }, u.onHandlerDestroying = function() {
                                    this._unregisterListeners(), this.onMediaDetaching()
                                }, u.startLoad = function(t) {
                                    if (this.levels) {
                                        var e = this.lastCurrentTime,
                                            r = this.hls;
                                        if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                                            var i = r.startLevel; - 1 === i && (r.config.testBandwidth && this.levels.length > 1 ? (i = 0, this.bitrateTest = !0) : i = r.nextAutoLevel), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1
                                        }
                                        e > 0 && -1 === t && (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = Ft, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                                    } else this._forceStartLoad = !0, this.state = Pt
                                }, u.stopLoad = function() {
                                    this._forceStartLoad = !1, t.prototype.stopLoad.call(this)
                                }, u.doTick = function() {
                                    switch (this.state) {
                                        case Ft:
                                            this.doTickIdle();
                                            break;
                                        case Wt:
                                            var t, e = this.levels,
                                                r = this.level,
                                                i = null == e || null === (t = e[r]) || void 0 === t ? void 0 : t.details;
                                            if (i && (!i.live || this.levelLastLoaded === this.level)) {
                                                if (this.waitForCdnTuneIn(i)) break;
                                                this.state = Ft;
                                                break
                                            }
                                            break;
                                        case Ut:
                                            var n, a = self.performance.now(),
                                                s = this.retryDate;
                                            (!s || a >= s || null !== (n = this.media) && void 0 !== n && n.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded(this.level), this.state = Ft)
                                    }
                                    this.onTickEnd()
                                }, u.onTickEnd = function() {
                                    t.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged()
                                }, u.doTickIdle = function() {
                                    var t, e, r = this.hls,
                                        i = this.levelLastLoaded,
                                        n = this.levels,
                                        a = this.media,
                                        o = r.config,
                                        l = r.nextLoadLevel;
                                    if (null !== i && (a || !this.startFragRequested && o.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && n && n[l]) {
                                        var u = n[l];
                                        this.level = r.nextLoadLevel = l;
                                        var h = u.details;
                                        if (!h || this.state === Wt || h.live && this.levelLastLoaded !== l) this.state = Wt;
                                        else {
                                            var d = this.getMainFwdBufferInfo();
                                            if (null !== d && !(d.len >= this.getMaxBufferLength(u.maxBitrate))) {
                                                if (this._streamEnded(d, h)) {
                                                    var c = {};
                                                    return this.altAudio && (c.type = "video"), this.hls.trigger(s.Events.BUFFER_EOS, c), void(this.state = Ht)
                                                }
                                                this.backtrackFragment && this.backtrackFragment.start > d.end && (this.backtrackFragment = null);
                                                var f = this.backtrackFragment ? this.backtrackFragment.start : d.end,
                                                    g = this.getNextFragment(f, h);
                                                if (this.couldBacktrack && !this.fragPrevious && g && "initSegment" !== g.sn && this.fragmentTracker.getState(g) !== nt.OK) {
                                                    var p, m = (null != (p = this.backtrackFragment) ? p : g).sn - h.startSN,
                                                        T = h.fragments[m - 1];
                                                    T && g.cc === T.cc && (g = T, this.fragmentTracker.removeFragment(T))
                                                } else this.backtrackFragment && d.len && (this.backtrackFragment = null);
                                                if (g && this.fragmentTracker.getState(g) === nt.OK && this.nextLoadPosition > f) {
                                                    var y = this.audioOnly && !this.altAudio ? v.ElementaryStreamTypes.AUDIO : v.ElementaryStreamTypes.VIDEO;
                                                    a && this.afterBufferFlushed(a, y, C.PlaylistLevelType.MAIN), g = this.getNextFragment(this.nextLoadPosition, h)
                                                }
                                                g && (!g.initSegment || g.initSegment.data || this.bitrateTest || (g = g.initSegment), "identity" !== (null === (t = g.decryptdata) || void 0 === t ? void 0 : t.keyFormat) || null !== (e = g.decryptdata) && void 0 !== e && e.key ? this.loadFragment(g, h, f) : this.loadKey(g, h))
                                            }
                                        }
                                    }
                                }, u.loadFragment = function(e, r, i) {
                                    var n, a = this.fragmentTracker.getState(e);
                                    this.fragCurrent = e, a === nt.NOT_LOADED ? "initSegment" === e.sn ? this._loadInitSegment(e) : this.bitrateTest ? (this.log("Fragment " + e.sn + " of level " + e.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e)) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i)) : a === nt.APPENDING ? this.reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e) : 0 === (null === (n = this.media) || void 0 === n ? void 0 : n.buffered.length) && this.fragmentTracker.removeAllFragments()
                                }, u.getAppendedFrag = function(t) {
                                    var e = this.fragmentTracker.getAppendedFrag(t, C.PlaylistLevelType.MAIN);
                                    return e && "fragment" in e ? e.fragment : e
                                }, u.getBufferedFrag = function(t) {
                                    return this.fragmentTracker.getBufferedFrag(t, C.PlaylistLevelType.MAIN)
                                }, u.followingBufferedFrag = function(t) {
                                    return t ? this.getBufferedFrag(t.end + .5) : null
                                }, u.immediateLevelSwitch = function() {
                                    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                                }, u.nextLevelSwitch = function() {
                                    var t = this.levels,
                                        e = this.media;
                                    if (null != e && e.readyState) {
                                        var r, i = this.getAppendedFrag(e.currentTime);
                                        if (i && i.start > 1 && this.flushMainBuffer(0, i.start - 1), !e.paused && t) {
                                            var n = t[this.hls.nextLoadLevel],
                                                a = this.fragLastKbps;
                                            r = a && this.fragCurrent ? this.fragCurrent.duration * n.maxBitrate / (1e3 * a) + 1 : 0
                                        } else r = 0;
                                        var s = this.getBufferedFrag(e.currentTime + r);
                                        if (s) {
                                            var o = this.followingBufferedFrag(s);
                                            if (o) {
                                                this.abortCurrentFrag();
                                                var l = o.maxStartPTS ? o.maxStartPTS : o.start,
                                                    u = o.duration,
                                                    h = Math.max(s.end, l + Math.min(Math.max(u - this.config.maxFragLookUpTolerance, .5 * u), .75 * u));
                                                this.flushMainBuffer(h, Number.POSITIVE_INFINITY)
                                            }
                                        }
                                    }
                                }, u.abortCurrentFrag = function() {
                                    var t = this.fragCurrent;
                                    switch (this.fragCurrent = null, this.backtrackFragment = null, null != t && t.loader && t.loader.abort(), this.state) {
                                        case Mt:
                                        case Nt:
                                        case Ut:
                                        case Gt:
                                        case jt:
                                            this.state = Ft
                                    }
                                    this.nextLoadPosition = this.getLoadPosition()
                                }, u.flushMainBuffer = function(e, r) {
                                    t.prototype.flushMainBuffer.call(this, e, r, this.altAudio ? "video" : null)
                                }, u.onMediaAttached = function(e, r) {
                                    t.prototype.onMediaAttached.call(this, e, r);
                                    var i = r.media;
                                    this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i.addEventListener("playing", this.onvplaying), i.addEventListener("seeked", this.onvseeked), this.gapController = new ae(this.config, i, this.fragmentTracker, this.hls)
                                }, u.onMediaDetaching = function() {
                                    var e = this.media;
                                    e && this.onvplaying && this.onvseeked && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), t.prototype.onMediaDetaching.call(this)
                                }, u.onMediaPlaying = function() {
                                    this.tick()
                                }, u.onMediaSeeked = function() {
                                    var t = this.media,
                                        e = t ? t.currentTime : null;
                                    (0, a.isFiniteNumber)(e) && this.log("Media seeked to " + e.toFixed(3)), this.tick()
                                }, u.onManifestLoading = function() {
                                    this.log("Trigger BUFFER_RESET"), this.hls.trigger(s.Events.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null, this.backtrackFragment = null
                                }, u.onManifestParsed = function(t, e) {
                                    var r, i, n, a = !1,
                                        s = !1;
                                    e.levels.forEach((function(t) {
                                        (r = t.audioCodec) && (-1 !== r.indexOf("mp4a.40.2") && (a = !0), -1 !== r.indexOf("mp4a.40.5") && (s = !0))
                                    })), this.audioCodecSwitch = a && s && !("function" == typeof(null == (n = Xt()) || null === (i = n.prototype) || void 0 === i ? void 0 : i.changeType)), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1
                                }, u.onLevelLoading = function(t, e) {
                                    var r = this.levels;
                                    if (r && this.state === Ft) {
                                        var i = r[e.level];
                                        (!i.details || i.details.live && this.levelLastLoaded !== e.level || this.waitForCdnTuneIn(i.details)) && (this.state = Wt)
                                    }
                                }, u.onLevelLoaded = function(t, e) {
                                    var r, i = this.levels,
                                        n = e.level,
                                        a = e.details,
                                        o = a.totalduration;
                                    if (i) {
                                        this.log("Level " + n + " loaded [" + a.startSN + "," + a.endSN + "], cc [" + a.startCC + ", " + a.endCC + "] duration:" + o);
                                        var l = this.fragCurrent;
                                        !l || this.state !== Nt && this.state !== Ut || l.level !== e.level && l.loader && (this.state = Ft, this.backtrackFragment = null, l.loader.abort());
                                        var u = i[n],
                                            h = 0;
                                        if (a.live || null !== (r = u.details) && void 0 !== r && r.live) {
                                            if (a.fragments[0] || (a.deltaUpdateFailed = !0), a.deltaUpdateFailed) return;
                                            h = this.alignPlaylists(a, u.details)
                                        }
                                        if (u.details = a, this.levelLastLoaded = n, this.hls.trigger(s.Events.LEVEL_UPDATED, {
                                            details: a,
                                            level: n
                                        }), this.state === Wt) {
                                            if (this.waitForCdnTuneIn(a)) return;
                                            this.state = Ft
                                        }
                                        this.startFragRequested ? a.live && this.synchronizeToLiveEdge(a) : this.setStartPosition(a, h), this.tick()
                                    } else this.warn("Levels were reset while loading level " + n)
                                }, u._handleFragmentLoadProgress = function(t) {
                                    var e, r = t.frag,
                                        i = t.part,
                                        n = t.payload,
                                        a = this.levels;
                                    if (a) {
                                        var s = a[r.level],
                                            o = s.details;
                                        if (o) {
                                            var l = s.videoCodec,
                                                u = o.PTSKnown || !o.live,
                                                h = null === (e = r.initSegment) || void 0 === e ? void 0 : e.data,
                                                d = this._getAudioCodec(s),
                                                c = this.transmuxer = this.transmuxer || new ne(this.hls, C.PlaylistLevelType.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
                                                f = i ? i.index : -1,
                                                g = -1 !== f,
                                                v = new ft(r.level, r.sn, r.stats.chunkCount, n.byteLength, f, g),
                                                p = this.initPTS[r.cc];
                                            c.push(n, h, d, l, r, i, o.totalduration, u, v, p)
                                        } else this.warn("Dropping fragment " + r.sn + " of level " + r.level + " after level details were reset")
                                    } else this.warn("Levels were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
                                }, u.onAudioTrackSwitching = function(t, e) {
                                    var r = this.altAudio,
                                        i = !!e.url,
                                        n = e.id;
                                    if (!i) {
                                        if (this.mediaBuffer !== this.media) {
                                            this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                                            var a = this.fragCurrent;
                                            null != a && a.loader && (this.log("Switching to main audio track, cancel main fragment load"), a.loader.abort()), this.resetTransmuxer(), this.resetLoadingState()
                                        } else this.audioOnly && this.resetTransmuxer();
                                        var o = this.hls;
                                        r && o.trigger(s.Events.BUFFER_FLUSHING, {
                                            startOffset: 0,
                                            endOffset: Number.POSITIVE_INFINITY,
                                            type: "audio"
                                        }), o.trigger(s.Events.AUDIO_TRACK_SWITCHED, {
                                            id: n
                                        })
                                    }
                                }, u.onAudioTrackSwitched = function(t, e) {
                                    var r = e.id,
                                        i = !!this.hls.audioTracks[r].url;
                                    if (i) {
                                        var n = this.videoBuffer;
                                        n && this.mediaBuffer !== n && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
                                    }
                                    this.altAudio = i, this.tick()
                                }, u.onBufferCreated = function(t, e) {
                                    var r, i, n = e.tracks,
                                        a = !1;
                                    for (var s in n) {
                                        var o = n[s];
                                        if ("main" === o.id) {
                                            if (i = s, r = o, "video" === s) {
                                                var l = n[s];
                                                l && (this.videoBuffer = l.buffer)
                                            }
                                        } else a = !0
                                    }
                                    a && r ? (this.log("Alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
                                }, u.onFragBuffered = function(t, e) {
                                    var r = e.frag,
                                        i = e.part;
                                    if (!r || r.type === C.PlaylistLevelType.MAIN) {
                                        if (this.fragContextChanged(r)) return this.warn("Fragment " + r.sn + (i ? " p: " + i.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state), void(this.state === jt && (this.state = Ft));
                                        var n = i ? i.stats : r.stats;
                                        this.fragLastKbps = Math.round(8 * n.total / (n.buffering.end - n.loading.first)), "initSegment" !== r.sn && (this.fragPrevious = r), this.fragBufferedComplete(r, i)
                                    }
                                }, u.onError = function(t, e) {
                                    switch (e.details) {
                                        case o.ErrorDetails.FRAG_LOAD_ERROR:
                                        case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        case o.ErrorDetails.KEY_LOAD_ERROR:
                                        case o.ErrorDetails.KEY_LOAD_TIMEOUT:
                                            this.onFragmentOrKeyLoadError(C.PlaylistLevelType.MAIN, e);
                                            break;
                                        case o.ErrorDetails.LEVEL_LOAD_ERROR:
                                        case o.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                            this.state !== Kt && (e.fatal ? (this.warn("" + e.details), this.state = Kt) : e.levelRetry || this.state !== Wt || (this.state = Ft));
                                            break;
                                        case o.ErrorDetails.BUFFER_FULL_ERROR:
                                            if ("main" === e.parent && (this.state === Gt || this.state === jt)) {
                                                var r = !0,
                                                    i = this.getFwdBufferInfo(this.media, C.PlaylistLevelType.MAIN);
                                                i && i.len > .5 && (r = !this.reduceMaxBufferLength(i.len)), r && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), this.immediateLevelSwitch()), this.resetLoadingState()
                                            }
                                    }
                                }, u.checkBuffer = function() {
                                    var t = this.media,
                                        e = this.gapController;
                                    if (t && e && t.readyState) {
                                        if (this.loadedmetadata || !ct.getBuffered(t).length) {
                                            var r = this.state !== Ft ? this.fragCurrent : null;
                                            e.poll(this.lastCurrentTime, r)
                                        }
                                        this.lastCurrentTime = t.currentTime
                                    }
                                }, u.onFragLoadEmergencyAborted = function() {
                                    this.state = Ft, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate()
                                }, u.onBufferFlushed = function(t, e) {
                                    var r = e.type;
                                    if (r !== v.ElementaryStreamTypes.AUDIO || this.audioOnly && !this.altAudio) {
                                        var i = (r === v.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                                        this.afterBufferFlushed(i, r, C.PlaylistLevelType.MAIN)
                                    }
                                }, u.onLevelsUpdated = function(t, e) {
                                    this.levels = e.levels
                                }, u.swapAudioCodec = function() {
                                    this.audioCodecSwap = !this.audioCodecSwap
                                }, u.seekToStartPos = function() {
                                    var t = this.media;
                                    if (t) {
                                        var e = t.currentTime,
                                            r = this.startPosition;
                                        if (r >= 0 && e < r) {
                                            if (t.seeking) return void this.log("could not seek to " + r + ", already seeking at " + e);
                                            var i = ct.getBuffered(t),
                                                n = (i.length ? i.start(0) : 0) - r;
                                            n > 0 && (n < this.config.maxBufferHole || n < this.config.maxFragLookUpTolerance) && (this.log("adjusting start position by " + n + " to match buffer start"), r += n, this.startPosition = r), this.log("seek to target start position " + r + " from current time " + e), t.currentTime = r
                                        }
                                    }
                                }, u._getAudioCodec = function(t) {
                                    var e = this.config.defaultAudioCodec || t.audioCodec;
                                    return this.audioCodecSwap && e && (this.log("Swapping audio codec"), e = -1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), e
                                }, u._loadBitrateTestFrag = function(t) {
                                    var e = this;
                                    t.bitrateTest = !0, this._doFragLoad(t).then((function(r) {
                                        var i = e.hls;
                                        if (r && !i.nextLoadLevel && !e.fragContextChanged(t)) {
                                            e.fragLoadError = 0, e.state = Ft, e.startFragRequested = !1, e.bitrateTest = !1;
                                            var n = t.stats;
                                            n.parsing.start = n.parsing.end = n.buffering.start = n.buffering.end = self.performance.now(), i.trigger(s.Events.FRAG_LOADED, r), t.bitrateTest = !1
                                        }
                                    }))
                                }, u._handleTransmuxComplete = function(t) {
                                    var e, r = "main",
                                        i = this.hls,
                                        n = t.remuxResult,
                                        o = t.chunkMeta,
                                        l = this.getCurrentContext(o);
                                    if (!l) return this.warn("The loading context changed while buffering fragment " + o.sn + " of level " + o.level + ". This chunk will not be buffered."), void this.resetStartWhenNotLoaded(o.level);
                                    var u = l.frag,
                                        h = l.part,
                                        d = l.level,
                                        c = n.video,
                                        f = n.text,
                                        g = n.id3,
                                        p = n.initSegment,
                                        m = d.details,
                                        T = this.altAudio ? void 0 : n.audio;
                                    if (!this.fragContextChanged(u)) {
                                        if (this.state = Gt, p) {
                                            p.tracks && (this._bufferInitSegment(d, p.tracks, u, o), i.trigger(s.Events.FRAG_PARSING_INIT_SEGMENT, {
                                                frag: u,
                                                id: r,
                                                tracks: p.tracks
                                            }));
                                            var y = p.initPTS,
                                                E = p.timescale;
                                            (0, a.isFiniteNumber)(y) && (this.initPTS[u.cc] = y, i.trigger(s.Events.INIT_PTS_FOUND, {
                                                frag: u,
                                                id: r,
                                                initPTS: y,
                                                timescale: E
                                            }))
                                        }
                                        if (c && !1 !== n.independent) {
                                            if (m) {
                                                var S = c.startPTS,
                                                    b = c.endPTS,
                                                    L = c.startDTS,
                                                    k = c.endDTS;
                                                if (h) h.elementaryStreams[c.type] = {
                                                    startPTS: S,
                                                    endPTS: b,
                                                    startDTS: L,
                                                    endDTS: k
                                                };
                                                else if (c.firstKeyFrame && c.independent && (this.couldBacktrack = !0), c.dropped && c.independent) {
                                                    var D = this.getMainFwdBufferInfo();
                                                    if ((D ? D.end : this.getLoadPosition()) + this.config.maxBufferHole < (c.firstKeyFramePTS ? c.firstKeyFramePTS : S) - this.config.maxBufferHole) return void this.backtrack(u);
                                                    u.setElementaryStreamInfo(c.type, u.start, b, u.start, k, !0)
                                                }
                                                u.setElementaryStreamInfo(c.type, S, b, L, k), this.backtrackFragment && (this.backtrackFragment = u), this.bufferFragmentData(c, u, h, o)
                                            }
                                        } else if (!1 === n.independent) return void this.backtrack(u);
                                        if (T) {
                                            var R = T.startPTS,
                                                A = T.endPTS,
                                                _ = T.startDTS,
                                                I = T.endDTS;
                                            h && (h.elementaryStreams[v.ElementaryStreamTypes.AUDIO] = {
                                                startPTS: R,
                                                endPTS: A,
                                                startDTS: _,
                                                endDTS: I
                                            }), u.setElementaryStreamInfo(v.ElementaryStreamTypes.AUDIO, R, A, _, I), this.bufferFragmentData(T, u, h, o)
                                        }
                                        if (m && null != g && null !== (e = g.samples) && void 0 !== e && e.length) {
                                            var C = {
                                                id: r,
                                                frag: u,
                                                details: m,
                                                samples: g.samples
                                            };
                                            i.trigger(s.Events.FRAG_PARSING_METADATA, C)
                                        }
                                        if (m && f) {
                                            var w = {
                                                id: r,
                                                frag: u,
                                                details: m,
                                                samples: f.samples
                                            };
                                            i.trigger(s.Events.FRAG_PARSING_USERDATA, w)
                                        }
                                    }
                                }, u._bufferInitSegment = function(t, e, r, i) {
                                    var n = this;
                                    if (this.state === Gt) {
                                        this.audioOnly = !!e.audio && !e.video, this.altAudio && !this.audioOnly && delete e.audio;
                                        var a = e.audio,
                                            o = e.video,
                                            l = e.audiovideo;
                                        if (a) {
                                            var u = t.audioCodec,
                                                h = navigator.userAgent.toLowerCase();
                                            this.audioCodecSwitch && (u && (u = -1 !== u.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== a.metadata.channelCount && -1 === h.indexOf("firefox") && (u = "mp4a.40.5")), -1 !== h.indexOf("android") && "audio/mpeg" !== a.container && (u = "mp4a.40.2", this.log("Android: force audio codec to " + u)), t.audioCodec && t.audioCodec !== u && this.log('Swapping manifest audio codec "' + t.audioCodec + '" for "' + u + '"'), a.levelCodec = u, a.id = "main", this.log("Init audio buffer, container:" + a.container + ", codecs[selected/level/parsed]=[" + (u || "") + "/" + (t.audioCodec || "") + "/" + a.codec + "]")
                                        }
                                        o && (o.levelCodec = t.videoCodec, o.id = "main", this.log("Init video buffer, container:" + o.container + ", codecs[level/parsed]=[" + (t.videoCodec || "") + "/" + o.codec + "]")), l && this.log("Init audiovideo buffer, container:" + l.container + ", codecs[level/parsed]=[" + (t.attrs.CODECS || "") + "/" + l.codec + "]"), this.hls.trigger(s.Events.BUFFER_CODECS, e), Object.keys(e).forEach((function(t) {
                                            var a = e[t].initSegment;
                                            null != a && a.byteLength && n.hls.trigger(s.Events.BUFFER_APPENDING, {
                                                type: t,
                                                data: a,
                                                frag: r,
                                                part: null,
                                                chunkMeta: i,
                                                parent: r.type
                                            })
                                        })), this.tick()
                                    }
                                }, u.getMainFwdBufferInfo = function() {
                                    return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, C.PlaylistLevelType.MAIN)
                                }, u.backtrack = function(t) {
                                    this.couldBacktrack = !0, this.backtrackFragment = t, this.resetTransmuxer(), this.flushBufferGap(t), this.fragmentTracker.removeFragment(t), this.fragPrevious = null, this.nextLoadPosition = t.start, this.state = Ft
                                }, u.checkFragmentChanged = function() {
                                    var t = this.media,
                                        e = null;
                                    if (t && t.readyState > 1 && !1 === t.seeking) {
                                        var r = t.currentTime;
                                        if (ct.isBuffered(t, r) ? e = this.getAppendedFrag(r) : ct.isBuffered(t, r + .1) && (e = this.getAppendedFrag(r + .1)), e) {
                                            this.backtrackFragment = null;
                                            var i = this.fragPlaying,
                                                n = e.level;
                                            i && e.sn === i.sn && i.level === n && e.urlId === i.urlId || (this.hls.trigger(s.Events.FRAG_CHANGED, {
                                                frag: e
                                            }), i && i.level === n || this.hls.trigger(s.Events.LEVEL_SWITCHED, {
                                                level: n
                                            }), this.fragPlaying = e)
                                        }
                                    }
                                }, n = i, (l = [{
                                    key: "nextLevel",
                                    get: function() {
                                        var t = this.nextBufferedFrag;
                                        return t ? t.level : -1
                                    }
                                }, {
                                    key: "currentFrag",
                                    get: function() {
                                        var t = this.media;
                                        return t ? this.fragPlaying || this.getAppendedFrag(t.currentTime) : null
                                    }
                                }, {
                                    key: "currentProgramDateTime",
                                    get: function() {
                                        var t = this.media;
                                        if (t) {
                                            var e = t.currentTime,
                                                r = this.currentFrag;
                                            if (r && (0, a.isFiniteNumber)(e) && (0, a.isFiniteNumber)(r.programDateTime)) {
                                                var i = r.programDateTime + 1e3 * (e - r.start);
                                                return new Date(i)
                                            }
                                        }
                                        return null
                                    }
                                }, {
                                    key: "currentLevel",
                                    get: function() {
                                        var t = this.currentFrag;
                                        return t ? t.level : -1
                                    }
                                }, {
                                    key: "nextBufferedFrag",
                                    get: function() {
                                        var t = this.currentFrag;
                                        return t ? this.followingBufferedFrag(t) : null
                                    }
                                }, {
                                    key: "forceStartLoad",
                                    get: function() {
                                        return this._forceStartLoad
                                    }
                                }]) && function(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                    }
                                }(n.prototype, l), Object.defineProperty(n, "prototype", {
                                    writable: !1
                                }), i
                            }(Yt);
                            const le = function() {
                                    function t(t, e, r) {
                                        void 0 === e && (e = 0), void 0 === r && (r = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t, this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = e, this.totalWeight_ = r
                                    }
                                    var e = t.prototype;
                                    return e.sample = function(t, e) {
                                        var r = Math.pow(this.alpha_, t);
                                        this.estimate_ = e * (1 - r) + r * this.estimate_, this.totalWeight_ += t
                                    }, e.getTotalWeight = function() {
                                        return this.totalWeight_
                                    }, e.getEstimate = function() {
                                        if (this.alpha_) {
                                            var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                                            if (t) return this.estimate_ / t
                                        }
                                        return this.estimate_
                                    }, t
                                }(),
                                ue = function() {
                                    function t(t, e, r) {
                                        this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = r, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new le(t), this.fast_ = new le(e)
                                    }
                                    var e = t.prototype;
                                    return e.update = function(t, e) {
                                        var r = this.slow_,
                                            i = this.fast_;
                                        this.slow_.halfLife !== t && (this.slow_ = new le(t, r.getEstimate(), r.getTotalWeight())), this.fast_.halfLife !== e && (this.fast_ = new le(e, i.getEstimate(), i.getTotalWeight()))
                                    }, e.sample = function(t, e) {
                                        var r = (t = Math.max(t, this.minDelayMs_)) / 1e3,
                                            i = 8 * e / r;
                                        this.fast_.sample(r, i), this.slow_.sample(r, i)
                                    }, e.canEstimate = function() {
                                        var t = this.fast_;
                                        return t && t.getTotalWeight() >= this.minWeight_
                                    }, e.getEstimate = function() {
                                        return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                                    }, e.destroy = function() {}, t
                                }(),
                                he = function() {
                                    function t(t) {
                                        this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = t;
                                        var e = t.config;
                                        this.bwEstimator = new ue(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate), this.registerListeners()
                                    }
                                    var e, r, i = t.prototype;
                                    return i.registerListeners = function() {
                                        var t = this.hls;
                                        t.on(s.Events.FRAG_LOADING, this.onFragLoading, this), t.on(s.Events.FRAG_LOADED, this.onFragLoaded, this), t.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this), t.on(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.Events.ERROR, this.onError, this)
                                    }, i.unregisterListeners = function() {
                                        var t = this.hls;
                                        t.off(s.Events.FRAG_LOADING, this.onFragLoading, this), t.off(s.Events.FRAG_LOADED, this.onFragLoaded, this), t.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this), t.off(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.Events.ERROR, this.onError, this)
                                    }, i.destroy = function() {
                                        this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null
                                    }, i.onFragLoading = function(t, e) {
                                        var r, i = e.frag;
                                        i.type === C.PlaylistLevelType.MAIN && (this.timer || (this.fragCurrent = i, this.partCurrent = null != (r = e.part) ? r : null, this.timer = self.setInterval(this.onCheck, 100)))
                                    }, i.onLevelLoaded = function(t, e) {
                                        var r = this.hls.config;
                                        e.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD)
                                    }, i._abandonRulesCheck = function() {
                                        var t = this.fragCurrent,
                                            e = this.partCurrent,
                                            r = this.hls,
                                            i = r.autoLevelEnabled,
                                            n = (r.config, r.media);
                                        if (t && n) {
                                            var o = e ? e.stats : t.stats,
                                                u = e ? e.duration : t.duration;
                                            if (o.aborted || o.loaded && o.loaded === o.total || 0 === t.level) return this.clearTimer(), void(this._nextAutoLevel = -1);
                                            if (i && !n.paused && n.playbackRate && n.readyState) {
                                                var h = r.mainForwardBufferInfo;
                                                if (null !== h) {
                                                    var d = performance.now() - o.loading.start,
                                                        c = Math.abs(n.playbackRate);
                                                    if (!(d <= 500 * u / c)) {
                                                        var f = o.loaded && o.loading.first,
                                                            g = this.bwEstimator.getEstimate(),
                                                            v = r.levels,
                                                            p = r.minAutoLevel,
                                                            m = v[t.level],
                                                            T = o.total || Math.max(o.loaded, Math.round(u * m.maxBitrate / 8)),
                                                            y = f ? 1e3 * o.loaded / d : 0,
                                                            E = y ? (T - o.loaded) / y : 8 * T / g,
                                                            S = h.len / c;
                                                        if (!(E <= S)) {
                                                            var b, L = Number.POSITIVE_INFINITY;
                                                            for (b = t.level - 1; b > p; b--) {
                                                                var k = v[b].maxBitrate;
                                                                if ((L = y ? u * k / (6.4 * y) : u * k / g) < S) break
                                                            }
                                                            L >= E || (l.logger.warn("Fragment " + t.sn + (e ? " part " + e.index : "") + " of level " + t.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + b + "\n      Current BW estimate: " + ((0, a.isFiniteNumber)(g) ? (g / 1024).toFixed(3) : "Unknown") + " Kb/s\n      Estimated load time for current fragment: " + E.toFixed(3) + " s\n      Estimated load time for the next fragment: " + L.toFixed(3) + " s\n      Time to underbuffer: " + S.toFixed(3) + " s"), r.nextLoadLevel = b, f && this.bwEstimator.sample(d, o.loaded), this.clearTimer(), t.loader && (this.fragCurrent = this.partCurrent = null, t.loader.abort()), r.trigger(s.Events.FRAG_LOAD_EMERGENCY_ABORTED, {
                                                                frag: t,
                                                                part: e,
                                                                stats: o
                                                            }))
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }, i.onFragLoaded = function(t, e) {
                                        var r = e.frag,
                                            i = e.part;
                                        if (r.type === C.PlaylistLevelType.MAIN && (0, a.isFiniteNumber)(r.sn)) {
                                            var n = i ? i.stats : r.stats,
                                                o = i ? i.duration : r.duration;
                                            if (this.clearTimer(), this.lastLoadedFragLevel = r.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                                                var l = this.hls.levels[r.level],
                                                    u = (l.loaded ? l.loaded.bytes : 0) + n.loaded,
                                                    h = (l.loaded ? l.loaded.duration : 0) + o;
                                                l.loaded = {
                                                    bytes: u,
                                                    duration: h
                                                }, l.realBitrate = Math.round(8 * u / h)
                                            }
                                            if (r.bitrateTest) {
                                                var d = {
                                                    stats: n,
                                                    frag: r,
                                                    part: i,
                                                    id: r.type
                                                };
                                                this.onFragBuffered(s.Events.FRAG_BUFFERED, d)
                                            }
                                        }
                                    }, i.onFragBuffered = function(t, e) {
                                        var r = e.frag,
                                            i = e.part,
                                            n = i ? i.stats : r.stats;
                                        if (!n.aborted && r.type === C.PlaylistLevelType.MAIN && "initSegment" !== r.sn) {
                                            var a = n.parsing.end - n.loading.start;
                                            this.bwEstimator.sample(a, n.loaded), n.bwEstimate = this.bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0
                                        }
                                    }, i.onError = function(t, e) {
                                        switch (e.details) {
                                            case o.ErrorDetails.FRAG_LOAD_ERROR:
                                            case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                                this.clearTimer()
                                        }
                                    }, i.clearTimer = function() {
                                        self.clearInterval(this.timer), this.timer = void 0
                                    }, i.getNextABRAutoLevel = function() {
                                        var t = this.fragCurrent,
                                            e = this.partCurrent,
                                            r = this.hls,
                                            i = r.maxAutoLevel,
                                            n = r.config,
                                            a = r.minAutoLevel,
                                            s = r.media,
                                            o = e ? e.duration : t ? t.duration : 0,
                                            u = (s && s.currentTime, s && 0 !== s.playbackRate ? Math.abs(s.playbackRate) : 1),
                                            h = this.bwEstimator ? this.bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
                                            d = r.mainForwardBufferInfo,
                                            c = (d ? d.len : 0) / u,
                                            f = this.findBestLevel(h, a, i, c, n.abrBandWidthFactor, n.abrBandWidthUpFactor);
                                        if (f >= 0) return f;
                                        l.logger.trace((c ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
                                        var g = o ? Math.min(o, n.maxStarvationDelay) : n.maxStarvationDelay,
                                            v = n.abrBandWidthFactor,
                                            p = n.abrBandWidthUpFactor;
                                        if (!c) {
                                            var m = this.bitrateTestDelay;
                                            m && (g = (o ? Math.min(o, n.maxLoadingDelay) : n.maxLoadingDelay) - m, l.logger.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"), v = p = 1)
                                        }
                                        return f = this.findBestLevel(h, a, i, c + g, v, p), Math.max(f, 0)
                                    }, i.findBestLevel = function(t, e, r, i, n, s) {
                                        for (var o, u = this.fragCurrent, h = this.partCurrent, d = this.lastLoadedFragLevel, c = this.hls.levels, f = c[d], g = !(null == f || null === (o = f.details) || void 0 === o || !o.live), v = null == f ? void 0 : f.codecSet, p = h ? h.duration : u ? u.duration : 0, m = r; m >= e; m--) {
                                            var T = c[m];
                                            if (T && (!v || T.codecSet === v)) {
                                                var y, E = T.details,
                                                    S = (h ? null == E ? void 0 : E.partTarget : null == E ? void 0 : E.averagetargetduration) || p;
                                                y = m <= d ? n * t : s * t;
                                                var b = c[m].maxBitrate,
                                                    L = b * S / y;
                                                if (l.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + m + "/" + Math.round(y) + "/" + b + "/" + S + "/" + i + "/" + L), y > b && (0 === L || !(0, a.isFiniteNumber)(L) || g && !this.bitrateTestDelay || L < i)) return m
                                            }
                                        }
                                        return -1
                                    }, e = t, (r = [{
                                        key: "nextAutoLevel",
                                        get: function() {
                                            var t = this._nextAutoLevel,
                                                e = this.bwEstimator;
                                            if (-1 !== t && !e.canEstimate()) return t;
                                            var r = this.getNextABRAutoLevel();
                                            return -1 !== t && this.hls.levels[r].loadError ? t : (-1 !== t && (r = Math.min(t, r)), r)
                                        },
                                        set: function(t) {
                                            this._nextAutoLevel = t
                                        }
                                    }]) && function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(e.prototype, r), Object.defineProperty(e, "prototype", {
                                        writable: !1
                                    }), t
                                }();
                            var de = function() {
                                function t() {
                                    this.chunks = [], this.dataLength = 0
                                }
                                var e = t.prototype;
                                return e.push = function(t) {
                                    this.chunks.push(t), this.dataLength += t.length
                                }, e.flush = function() {
                                    var t, e = this.chunks,
                                        r = this.dataLength;
                                    return e.length ? (t = 1 === e.length ? e[0] : function(t, e) {
                                        for (var r = new Uint8Array(e), i = 0, n = 0; n < t.length; n++) {
                                            var a = t[n];
                                            r.set(a, i), i += a.length
                                        }
                                        return r
                                    }(e, r), this.reset(), t) : new Uint8Array(0)
                                }, e.reset = function() {
                                    this.chunks.length = 0, this.dataLength = 0
                                }, t
                            }();

                            function ce() {
                                return ce = Object.assign ? Object.assign.bind() : function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                    }
                                    return t
                                }, ce.apply(this, arguments)
                            }

                            function fe(t, e) {
                                return fe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, fe(t, e)
                            }
                            var ge = function(t) {
                                var e, r;

                                function i(e, r) {
                                    var i;
                                    return (i = t.call(this, e, r, "[audio-stream-controller]") || this).videoBuffer = null, i.videoTrackCC = -1, i.waitingVideoCC = -1, i.audioSwitch = !1, i.trackId = -1, i.waitingData = null, i.mainDetails = null, i.bufferFlushed = !1, i.cachedTrackLoadedData = null, i._registerListeners(), i
                                }
                                r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, fe(e, r);
                                var n = i.prototype;
                                return n.onHandlerDestroying = function() {
                                    this._unregisterListeners(), this.mainDetails = null
                                }, n._registerListeners = function() {
                                    var t = this.hls;
                                    t.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.on(s.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(s.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(s.Events.ERROR, this.onError, this), t.on(s.Events.BUFFER_RESET, this.onBufferReset, this), t.on(s.Events.BUFFER_CREATED, this.onBufferCreated, this), t.on(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(s.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                                }, n._unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.off(s.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(s.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(s.Events.ERROR, this.onError, this), t.off(s.Events.BUFFER_RESET, this.onBufferReset, this), t.off(s.Events.BUFFER_CREATED, this.onBufferCreated, this), t.off(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(s.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                                }, n.onInitPtsFound = function(t, e) {
                                    var r = e.frag,
                                        i = e.id,
                                        n = e.initPTS;
                                    if ("main" === i) {
                                        var a = r.cc;
                                        this.initPTS[r.cc] = n, this.log("InitPTS for cc: " + a + " found from main: " + n), this.videoTrackCC = a, this.state === Vt && this.tick()
                                    }
                                }, n.startLoad = function(t) {
                                    if (!this.levels) return this.startPosition = t, void(this.state = Pt);
                                    var e = this.lastCurrentTime;
                                    this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, e > 0 && -1 === t ? (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e, this.state = Ft) : (this.loadedmetadata = !1, this.state = Bt), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                                }, n.doTick = function() {
                                    switch (this.state) {
                                        case Ft:
                                            this.doTickIdle();
                                            break;
                                        case Bt:
                                            var e, r = this.levels,
                                                i = this.trackId,
                                                n = null == r || null === (e = r[i]) || void 0 === e ? void 0 : e.details;
                                            if (n) {
                                                if (this.waitForCdnTuneIn(n)) break;
                                                this.state = Vt
                                            }
                                            break;
                                        case Ut:
                                            var a, s = performance.now(),
                                                o = this.retryDate;
                                            (!o || s >= o || null !== (a = this.media) && void 0 !== a && a.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded(this.trackId), this.state = Ft);
                                            break;
                                        case Vt:
                                            var l = this.waitingData;
                                            if (l) {
                                                var u = l.frag,
                                                    h = l.part,
                                                    d = l.cache,
                                                    c = l.complete;
                                                if (void 0 !== this.initPTS[u.cc]) {
                                                    this.waitingData = null, this.waitingVideoCC = -1, this.state = Nt;
                                                    var f = {
                                                        frag: u,
                                                        part: h,
                                                        payload: d.flush(),
                                                        networkDetails: null
                                                    };
                                                    this._handleFragmentLoadProgress(f), c && t.prototype._handleFragmentLoadComplete.call(this, f)
                                                } else if (this.videoTrackCC !== this.waitingVideoCC) this.log("Waiting fragment cc (" + u.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
                                                else {
                                                    var g = this.getLoadPosition(),
                                                        v = ct.bufferInfo(this.mediaBuffer, g, this.config.maxBufferHole);
                                                    Et(v.end, this.config.maxFragLookUpTolerance, u) < 0 && (this.log("Waiting fragment cc (" + u.cc + ") @ " + u.start + " cancelled because another fragment at " + v.end + " is needed"), this.clearWaitingFragment())
                                                }
                                            } else this.state = Ft
                                    }
                                    this.onTickEnd()
                                }, n.clearWaitingFragment = function() {
                                    var t = this.waitingData;
                                    t && (this.fragmentTracker.removeFragment(t.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = Ft)
                                }, n.resetLoadingState = function() {
                                    this.clearWaitingFragment(), t.prototype.resetLoadingState.call(this)
                                }, n.onTickEnd = function() {
                                    var t = this.media;
                                    t && t.readyState && (this.lastCurrentTime = t.currentTime)
                                }, n.doTickIdle = function() {
                                    var t, e, r = this.hls,
                                        i = this.levels,
                                        n = this.media,
                                        a = this.trackId,
                                        o = r.config;
                                    if (i && i[a] && (n || !this.startFragRequested && o.startFragPrefetch)) {
                                        var l = i[a].details;
                                        if (!l || l.live && this.levelLastLoaded !== a || this.waitForCdnTuneIn(l)) this.state = Bt;
                                        else {
                                            var u = this.mediaBuffer ? this.mediaBuffer : this.media;
                                            this.bufferFlushed && u && (this.bufferFlushed = !1, this.afterBufferFlushed(u, v.ElementaryStreamTypes.AUDIO, C.PlaylistLevelType.AUDIO));
                                            var h = this.getFwdBufferInfo(u, C.PlaylistLevelType.AUDIO);
                                            if (null !== h) {
                                                var d = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, C.PlaylistLevelType.MAIN),
                                                    c = h.len,
                                                    f = this.getMaxBufferLength(null == d ? void 0 : d.len),
                                                    g = this.audioSwitch;
                                                if (!(c >= f) || g) {
                                                    if (!g && this._streamEnded(h, l)) return r.trigger(s.Events.BUFFER_EOS, {
                                                        type: "audio"
                                                    }), void(this.state = Ht);
                                                    var p = l.fragments[0].start,
                                                        m = h.end;
                                                    if (g && n) {
                                                        var T = this.getLoadPosition();
                                                        m = T, l.PTSKnown && T < p && (h.end > p || h.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), n.currentTime = p + .05)
                                                    }
                                                    if (!(d && m > d.end + l.targetduration) && (d && d.len || !h.len)) {
                                                        var y = this.getNextFragment(m, l);
                                                        y ? "identity" !== (null === (t = y.decryptdata) || void 0 === t ? void 0 : t.keyFormat) || null !== (e = y.decryptdata) && void 0 !== e && e.key ? this.loadFragment(y, l, m) : this.loadKey(y, l) : this.bufferFlushed = !0
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }, n.getMaxBufferLength = function(e) {
                                    var r = t.prototype.getMaxBufferLength.call(this);
                                    return e ? Math.max(r, e) : r
                                }, n.onMediaDetaching = function() {
                                    this.videoBuffer = null, t.prototype.onMediaDetaching.call(this)
                                }, n.onAudioTracksUpdated = function(t, e) {
                                    var r = e.audioTracks;
                                    this.resetTransmuxer(), this.levels = r.map((function(t) {
                                        return new q(t)
                                    }))
                                }, n.onAudioTrackSwitching = function(t, e) {
                                    var r = !!e.url;
                                    this.trackId = e.id;
                                    var i = this.fragCurrent;
                                    null != i && i.loader && i.loader.abort(), this.fragCurrent = null, this.clearWaitingFragment(), r ? this.setInterval(100) : this.resetTransmuxer(), r ? (this.audioSwitch = !0, this.state = Ft) : this.state = Pt, this.tick()
                                }, n.onManifestLoading = function() {
                                    this.mainDetails = null, this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1
                                }, n.onLevelLoaded = function(t, e) {
                                    this.mainDetails = e.details, null !== this.cachedTrackLoadedData && (this.hls.trigger(s.Events.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null)
                                }, n.onAudioTrackLoaded = function(t, e) {
                                    var r;
                                    if (null != this.mainDetails) {
                                        var i = this.levels,
                                            n = e.details,
                                            a = e.id;
                                        if (i) {
                                            this.log("Track " + a + " loaded [" + n.startSN + "," + n.endSN + "],duration:" + n.totalduration);
                                            var s = i[a],
                                                o = 0;
                                            if (n.live || null !== (r = s.details) && void 0 !== r && r.live) {
                                                var l = this.mainDetails;
                                                if (n.fragments[0] || (n.deltaUpdateFailed = !0), n.deltaUpdateFailed || !l) return;
                                                !s.details && n.hasProgramDateTime && l.hasProgramDateTime ? (mt(n, l), o = n.fragments[0].start) : o = this.alignPlaylists(n, s.details)
                                            }
                                            s.details = n, this.levelLastLoaded = a, this.startFragRequested || !this.mainDetails && n.live || this.setStartPosition(s.details, o), this.state !== Bt || this.waitForCdnTuneIn(n) || (this.state = Ft), this.tick()
                                        } else this.warn("Audio tracks were reset while loading level " + a)
                                    } else this.cachedTrackLoadedData = e
                                }, n._handleFragmentLoadProgress = function(t) {
                                    var e, r = t.frag,
                                        i = t.part,
                                        n = t.payload,
                                        a = this.config,
                                        s = this.trackId,
                                        o = this.levels;
                                    if (o) {
                                        var l = o[s],
                                            u = l.details,
                                            h = a.defaultAudioCodec || l.audioCodec || "mp4a.40.2",
                                            d = this.transmuxer;
                                        d || (d = this.transmuxer = new ne(this.hls, C.PlaylistLevelType.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                                        var c = this.initPTS[r.cc],
                                            f = null === (e = r.initSegment) || void 0 === e ? void 0 : e.data;
                                        if (void 0 !== c) {
                                            var g = i ? i.index : -1,
                                                v = -1 !== g,
                                                p = new ft(r.level, r.sn, r.stats.chunkCount, n.byteLength, g, v);
                                            d.push(n, f, h, "", r, i, u.totalduration, !1, p, c)
                                        } else this.log("Unknown video PTS for cc " + r.cc + ", waiting for video PTS before demuxing audio frag " + r.sn + " of [" + u.startSN + " ," + u.endSN + "],track " + s), (this.waitingData = this.waitingData || {
                                            frag: r,
                                            part: i,
                                            cache: new de,
                                            complete: !1
                                        }).cache.push(new Uint8Array(n)), this.waitingVideoCC = this.videoTrackCC, this.state = Vt
                                    } else this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
                                }, n._handleFragmentLoadComplete = function(e) {
                                    this.waitingData ? this.waitingData.complete = !0 : t.prototype._handleFragmentLoadComplete.call(this, e)
                                }, n.onBufferReset = function() {
                                    this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
                                }, n.onBufferCreated = function(t, e) {
                                    var r = e.tracks.audio;
                                    r && (this.mediaBuffer = r.buffer || null), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer || null)
                                }, n.onFragBuffered = function(t, e) {
                                    var r, i = e.frag,
                                        n = e.part;
                                    i.type === C.PlaylistLevelType.AUDIO ? this.fragContextChanged(i) ? this.warn("Fragment " + i.sn + (n ? " p: " + n.index : "") + " of level " + i.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch) : ("initSegment" !== i.sn && (this.fragPrevious = i, this.audioSwitch && (this.audioSwitch = !1, this.hls.trigger(s.Events.AUDIO_TRACK_SWITCHED, {
                                        id: this.trackId
                                    }))), this.fragBufferedComplete(i, n)) : this.loadedmetadata || i.type !== C.PlaylistLevelType.MAIN || null !== (r = this.videoBuffer || this.media) && void 0 !== r && r.buffered.length && (this.loadedmetadata = !0)
                                }, n.onError = function(e, r) {
                                    switch (r.details) {
                                        case o.ErrorDetails.FRAG_LOAD_ERROR:
                                        case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        case o.ErrorDetails.KEY_LOAD_ERROR:
                                        case o.ErrorDetails.KEY_LOAD_TIMEOUT:
                                            this.onFragmentOrKeyLoadError(C.PlaylistLevelType.AUDIO, r);
                                            break;
                                        case o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                                        case o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                                            this.state !== Kt && this.state !== Pt && (this.state = r.fatal ? Kt : Ft, this.warn(r.details + " while loading frag, switching to " + this.state + " state"));
                                            break;
                                        case o.ErrorDetails.BUFFER_FULL_ERROR:
                                            if ("audio" === r.parent && (this.state === Gt || this.state === jt)) {
                                                var i = !0,
                                                    n = this.getFwdBufferInfo(this.mediaBuffer, C.PlaylistLevelType.AUDIO);
                                                n && n.len > .5 && (i = !this.reduceMaxBufferLength(n.len)), i && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.resetLoadingState()
                                            }
                                    }
                                }, n.onBufferFlushed = function(t, e) {
                                    e.type === v.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = !0)
                                }, n._handleTransmuxComplete = function(t) {
                                    var e, r = "audio",
                                        i = this.hls,
                                        n = t.remuxResult,
                                        a = t.chunkMeta,
                                        o = this.getCurrentContext(a);
                                    if (!o) return this.warn("The loading context changed while buffering fragment " + a.sn + " of level " + a.level + ". This chunk will not be buffered."), void this.resetStartWhenNotLoaded(a.level);
                                    var l = o.frag,
                                        u = o.part,
                                        h = o.level.details,
                                        d = n.audio,
                                        c = n.text,
                                        f = n.id3,
                                        g = n.initSegment;
                                    if (!this.fragContextChanged(l) && h) {
                                        if (this.state = Gt, this.audioSwitch && d && this.completeAudioSwitch(), null != g && g.tracks && (this._bufferInitSegment(g.tracks, l, a), i.trigger(s.Events.FRAG_PARSING_INIT_SEGMENT, {
                                            frag: l,
                                            id: r,
                                            tracks: g.tracks
                                        })), d) {
                                            var p = d.startPTS,
                                                m = d.endPTS,
                                                T = d.startDTS,
                                                y = d.endDTS;
                                            u && (u.elementaryStreams[v.ElementaryStreamTypes.AUDIO] = {
                                                startPTS: p,
                                                endPTS: m,
                                                startDTS: T,
                                                endDTS: y
                                            }), l.setElementaryStreamInfo(v.ElementaryStreamTypes.AUDIO, p, m, T, y), this.bufferFragmentData(d, l, u, a)
                                        }
                                        if (null != f && null !== (e = f.samples) && void 0 !== e && e.length) {
                                            var E = ce({
                                                id: r,
                                                frag: l,
                                                details: h
                                            }, f);
                                            i.trigger(s.Events.FRAG_PARSING_METADATA, E)
                                        }
                                        if (c) {
                                            var S = ce({
                                                id: r,
                                                frag: l,
                                                details: h
                                            }, c);
                                            i.trigger(s.Events.FRAG_PARSING_USERDATA, S)
                                        }
                                    }
                                }, n._bufferInitSegment = function(t, e, r) {
                                    if (this.state === Gt) {
                                        t.video && delete t.video;
                                        var i = t.audio;
                                        if (i) {
                                            i.levelCodec = i.codec, i.id = "audio", this.log("Init audio buffer, container:" + i.container + ", codecs[parsed]=[" + i.codec + "]"), this.hls.trigger(s.Events.BUFFER_CODECS, t);
                                            var n = i.initSegment;
                                            if (null != n && n.byteLength) {
                                                var a = {
                                                    type: "audio",
                                                    frag: e,
                                                    part: null,
                                                    chunkMeta: r,
                                                    parent: e.type,
                                                    data: n
                                                };
                                                this.hls.trigger(s.Events.BUFFER_APPENDING, a)
                                            }
                                            this.tick()
                                        }
                                    }
                                }, n.loadFragment = function(e, r, i) {
                                    var n = this.fragmentTracker.getState(e);
                                    this.fragCurrent = e, (this.audioSwitch || n === nt.NOT_LOADED || n === nt.PARTIAL) && ("initSegment" === e.sn ? this._loadInitSegment(e) : r.live && !(0, a.isFiniteNumber)(this.initPTS[e.cc]) ? (this.log("Waiting for video PTS in continuity counter " + e.cc + " of live stream before loading audio fragment " + e.sn + " of level " + this.trackId), this.state = Vt) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i)))
                                }, n.completeAudioSwitch = function() {
                                    var e = this.hls,
                                        r = this.media,
                                        i = this.trackId;
                                    r && (this.log("Switching audio track : flushing all audio"), t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.audioSwitch = !1, e.trigger(s.Events.AUDIO_TRACK_SWITCHED, {
                                        id: i
                                    })
                                }, i
                            }(Yt);
                            const ve = ge;

                            function pe(t, e) {
                                return pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, pe(t, e)
                            }
                            const me = function(t) {
                                var e, r;

                                function i(e) {
                                    var r;
                                    return (r = t.call(this, e, "[audio-track-controller]") || this).tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.trackName = "", r.selectDefaultTrack = !0, r.registerListeners(), r
                                }
                                r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, pe(e, r);
                                var n, a, l = i.prototype;
                                return l.registerListeners = function() {
                                    var t = this.hls;
                                    t.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(s.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(s.Events.ERROR, this.onError, this)
                                }, l.unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(s.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(s.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(s.Events.ERROR, this.onError, this)
                                }, l.destroy = function() {
                                    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, t.prototype.destroy.call(this)
                                }, l.onManifestLoading = function() {
                                    this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.trackName = "", this.selectDefaultTrack = !0
                                }, l.onManifestParsed = function(t, e) {
                                    this.tracks = e.audioTracks || []
                                }, l.onAudioTrackLoaded = function(t, e) {
                                    var r = e.id,
                                        i = e.details,
                                        n = this.tracksInGroup[r];
                                    if (n) {
                                        var a = n.details;
                                        n.details = e.details, this.log("audioTrack " + r + " loaded [" + i.startSN + "-" + i.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, e, a))
                                    } else this.warn("Invalid audio track id " + r)
                                }, l.onLevelLoading = function(t, e) {
                                    this.switchLevel(e.level)
                                }, l.onLevelSwitching = function(t, e) {
                                    this.switchLevel(e.level)
                                }, l.switchLevel = function(t) {
                                    var e = this.hls.levels[t];
                                    if (null != e && e.audioGroupIds) {
                                        var r = e.audioGroupIds[e.urlId];
                                        if (this.groupId !== r) {
                                            this.groupId = r;
                                            var i = this.tracks.filter((function(t) {
                                                return !r || t.groupId === r
                                            }));
                                            this.selectDefaultTrack && !i.some((function(t) {
                                                return t.default
                                            })) && (this.selectDefaultTrack = !1), this.tracksInGroup = i;
                                            var n = {
                                                audioTracks: i
                                            };
                                            this.log("Updating audio tracks, " + i.length + ' track(s) found in "' + r + '" group-id'), this.hls.trigger(s.Events.AUDIO_TRACKS_UPDATED, n), this.selectInitialTrack()
                                        }
                                    }
                                }, l.onError = function(e, r) {
                                    t.prototype.onError.call(this, e, r), !r.fatal && r.context && r.context.type === C.PlaylistContextType.AUDIO_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r)
                                }, l.setAudioTrack = function(t) {
                                    var e = this.tracksInGroup;
                                    if (t < 0 || t >= e.length) this.warn("Invalid id passed to audio-track controller");
                                    else {
                                        this.clearTimer();
                                        var r = e[this.trackId];
                                        this.log("Now switching to audio-track index " + t);
                                        var i = e[t],
                                            n = i.id,
                                            a = i.groupId,
                                            o = void 0 === a ? "" : a,
                                            l = i.name,
                                            u = i.type,
                                            h = i.url;
                                        if (this.trackId = t, this.trackName = l, this.selectDefaultTrack = !1, this.hls.trigger(s.Events.AUDIO_TRACK_SWITCHING, {
                                            id: n,
                                            groupId: o,
                                            name: l,
                                            type: u,
                                            url: h
                                        }), !i.details || i.details.live) {
                                            var d = this.switchParams(i.url, null == r ? void 0 : r.details);
                                            this.loadPlaylist(d)
                                        }
                                    }
                                }, l.selectInitialTrack = function() {
                                    this.tracksInGroup;
                                    var t = this.trackName,
                                        e = this.findTrackId(t) || this.findTrackId(); - 1 !== e ? this.setAudioTrack(e) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(s.Events.ERROR, {
                                        type: o.ErrorTypes.MEDIA_ERROR,
                                        details: o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                                        fatal: !0
                                    }))
                                }, l.findTrackId = function(t) {
                                    for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id
                                    }
                                    return -1
                                }, l.loadPlaylist = function(t) {
                                    var e = this.tracksInGroup[this.trackId];
                                    if (this.shouldLoadTrack(e)) {
                                        var r = e.id,
                                            i = e.groupId,
                                            n = e.url;
                                        if (t) try {
                                            n = t.addDirectives(n)
                                        } catch (t) {
                                            this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                                        }
                                        this.log("loading audio-track playlist for id: " + r), this.clearTimer(), this.hls.trigger(s.Events.AUDIO_TRACK_LOADING, {
                                            url: n,
                                            id: r,
                                            groupId: i,
                                            deliveryDirectives: t || null
                                        })
                                    }
                                }, n = i, (a = [{
                                    key: "audioTracks",
                                    get: function() {
                                        return this.tracksInGroup
                                    }
                                }, {
                                    key: "audioTrack",
                                    get: function() {
                                        return this.trackId
                                    },
                                    set: function(t) {
                                        this.selectDefaultTrack = !1, this.setAudioTrack(t)
                                    }
                                }]) && function(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                    }
                                }(n.prototype, a), Object.defineProperty(n, "prototype", {
                                    writable: !1
                                }), i
                            }(et);

                            function Te(t, e) {
                                return Te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, Te(t, e)
                            }
                            var ye = function(t) {
                                    var e, r;

                                    function i(e, r) {
                                        var i;
                                        return (i = t.call(this, e, r, "[subtitle-stream-controller]") || this).levels = [], i.currentTrackId = -1, i.tracksBuffered = [], i.mainDetails = null, i._registerListeners(), i
                                    }
                                    r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, Te(e, r);
                                    var n, a, o = i.prototype;
                                    return o.onHandlerDestroying = function() {
                                        this._unregisterListeners(), this.mainDetails = null
                                    }, o._registerListeners = function() {
                                        var t = this.hls;
                                        t.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.Events.ERROR, this.onError, this), t.on(s.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(s.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.on(s.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(s.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.on(s.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                                    }, o._unregisterListeners = function() {
                                        var t = this.hls;
                                        t.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.Events.ERROR, this.onError, this), t.off(s.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(s.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.off(s.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(s.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.off(s.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                                    }, o.startLoad = function(t) {
                                        this.stopLoad(), this.state = Ft, this.setInterval(500), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                                    }, o.onManifestLoading = function() {
                                        this.mainDetails = null, this.fragmentTracker.removeAllFragments()
                                    }, o.onLevelLoaded = function(t, e) {
                                        this.mainDetails = e.details
                                    }, o.onSubtitleFragProcessed = function(t, e) {
                                        var r = e.frag,
                                            i = e.success;
                                        if (this.fragPrevious = r, this.state = Ft, i) {
                                            var n = this.tracksBuffered[this.currentTrackId];
                                            if (n) {
                                                for (var a, s = r.start, o = 0; o < n.length; o++)
                                                    if (s >= n[o].start && s <= n[o].end) {
                                                        a = n[o];
                                                        break
                                                    } var l = r.start + r.duration;
                                                a ? a.end = l : (a = {
                                                    start: s,
                                                    end: l
                                                }, n.push(a)), this.fragmentTracker.fragBuffered(r)
                                            }
                                        }
                                    }, o.onBufferFlushing = function(t, e) {
                                        var r = e.startOffset,
                                            i = e.endOffset;
                                        if (0 === r && i !== Number.POSITIVE_INFINITY) {
                                            var n = this.currentTrackId,
                                                a = this.levels;
                                            if (!a.length || !a[n] || !a[n].details) return;
                                            var s = i - a[n].details.targetduration;
                                            if (s <= 0) return;
                                            e.endOffsetSubtitles = Math.max(0, s), this.tracksBuffered.forEach((function(t) {
                                                for (var e = 0; e < t.length;)
                                                    if (t[e].end <= s) t.shift();
                                                    else {
                                                        if (!(t[e].start < s)) break;
                                                        t[e].start = s, e++
                                                    }
                                            })), this.fragmentTracker.removeFragmentsInRange(r, s, C.PlaylistLevelType.SUBTITLE)
                                        }
                                    }, o.onFragBuffered = function(t, e) {
                                        var r;
                                        this.loadedmetadata || e.frag.type !== C.PlaylistLevelType.MAIN || null !== (r = this.media) && void 0 !== r && r.buffered.length && (this.loadedmetadata = !0)
                                    }, o.onError = function(t, e) {
                                        var r, i = e.frag;
                                        i && i.type === C.PlaylistLevelType.SUBTITLE && (null !== (r = this.fragCurrent) && void 0 !== r && r.loader && this.fragCurrent.loader.abort(), this.state = Ft)
                                    }, o.onSubtitleTracksUpdated = function(t, e) {
                                        var r = this,
                                            i = e.subtitleTracks;
                                        this.tracksBuffered = [], this.levels = i.map((function(t) {
                                            return new q(t)
                                        })), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.levels.forEach((function(t) {
                                            r.tracksBuffered[t.id] = []
                                        })), this.mediaBuffer = null
                                    }, o.onSubtitleTrackSwitch = function(t, e) {
                                        if (this.currentTrackId = e.id, this.levels.length && -1 !== this.currentTrackId) {
                                            var r = this.levels[this.currentTrackId];
                                            null != r && r.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, r && this.setInterval(500)
                                        } else this.clearInterval()
                                    }, o.onSubtitleTrackLoaded = function(t, e) {
                                        var r, i = e.details,
                                            n = e.id,
                                            a = this.currentTrackId,
                                            s = this.levels;
                                        if (s.length) {
                                            var o = s[a];
                                            if (!(n >= s.length || n !== a) && o) {
                                                this.mediaBuffer = this.mediaBufferTimeRanges;
                                                var l = 0;
                                                if (i.live || null !== (r = o.details) && void 0 !== r && r.live) {
                                                    var u = this.mainDetails;
                                                    if (i.deltaUpdateFailed || !u) return;
                                                    var h = u.fragments[0];
                                                    o.details ? 0 === (l = this.alignPlaylists(i, o.details)) && h && tt(i, l = h.start) : i.hasProgramDateTime && u.hasProgramDateTime ? (mt(i, u), l = i.fragments[0].start) : h && tt(i, l = h.start)
                                                }
                                                o.details = i, this.levelLastLoaded = n, this.startFragRequested || !this.mainDetails && i.live || this.setStartPosition(o.details, l), this.tick(), i.live && !this.fragCurrent && this.media && this.state === Ft && (yt(null, i.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o.details = void 0))
                                            }
                                        }
                                    }, o._handleFragmentLoadComplete = function(t) {
                                        var e = t.frag,
                                            r = t.payload,
                                            i = e.decryptdata,
                                            n = this.hls;
                                        if (!this.fragContextChanged(e) && r && r.byteLength > 0 && i && i.key && i.iv && "AES-128" === i.method) {
                                            var a = performance.now();
                                            this.decrypter.webCryptoDecrypt(new Uint8Array(r), i.key.buffer, i.iv.buffer).then((function(t) {
                                                var r = performance.now();
                                                n.trigger(s.Events.FRAG_DECRYPTED, {
                                                    frag: e,
                                                    payload: t,
                                                    stats: {
                                                        tstart: a,
                                                        tdecrypt: r
                                                    }
                                                })
                                            }))
                                        }
                                    }, o.doTick = function() {
                                        if (this.media) {
                                            if (this.state === Ft) {
                                                var t = this.currentTrackId,
                                                    e = this.levels;
                                                if (!e.length || !e[t] || !e[t].details) return;
                                                var r = e[t].details,
                                                    i = r.targetduration,
                                                    n = this.config,
                                                    a = this.getLoadPosition(),
                                                    s = ct.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], a - i, n.maxBufferHole),
                                                    o = s.end,
                                                    l = s.len,
                                                    u = this.getFwdBufferInfo(this.media, C.PlaylistLevelType.MAIN);
                                                if (l > this.getMaxBufferLength(null == u ? void 0 : u.len) + i) return;
                                                var h, d = r.fragments,
                                                    c = d.length,
                                                    f = r.edge,
                                                    g = this.fragPrevious;
                                                if (o < f) {
                                                    var v = n.maxFragLookUpTolerance;
                                                    !(h = yt(g, d, Math.max(d[0].start, o), v)) && g && g.start < d[0].start && (h = d[0])
                                                } else h = d[c - 1];
                                                if (!(h = this.mapToInitFragWhenRequired(h))) return;
                                                if (this.fragmentTracker.getState(h) !== nt.NOT_LOADED) return;
                                                h.encrypted ? this.loadKey(h, r) : this.loadFragment(h, r, o)
                                            }
                                        } else this.state = Ft
                                    }, o.getMaxBufferLength = function(e) {
                                        var r = t.prototype.getMaxBufferLength.call(this);
                                        return e ? Math.max(r, e) : r
                                    }, o.loadFragment = function(e, r, i) {
                                        this.fragCurrent = e, "initSegment" === e.sn ? this._loadInitSegment(e) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i))
                                    }, n = i, (a = [{
                                        key: "mediaBufferTimeRanges",
                                        get: function() {
                                            return new Ee(this.tracksBuffered[this.currentTrackId] || [])
                                        }
                                    }]) && function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(n.prototype, a), Object.defineProperty(n, "prototype", {
                                        writable: !1
                                    }), i
                                }(Yt),
                                Ee = function(t) {
                                    this.buffered = void 0;
                                    var e = function(e, r, i) {
                                        if ((r >>>= 0) > i - 1) throw new DOMException("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + r + ") is greater than the maximum bound (" + i + ")");
                                        return t[r][e]
                                    };
                                    this.buffered = {
                                        get length() {
                                            return t.length
                                        },
                                        end: function(r) {
                                            return e("end", r, t.length)
                                        },
                                        start: function(r) {
                                            return e("start", r, t.length)
                                        }
                                    }
                                };

                            function Se(t, e) {
                                return Se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, Se(t, e)
                            }

                            function be(t) {
                                for (var e = [], r = 0; r < t.length; r++) {
                                    var i = t[r];
                                    "subtitles" === i.kind && i.label && e.push(t[r])
                                }
                                return e
                            }
                            const Le = function(t) {
                                var e, r;

                                function i(e) {
                                    var r;
                                    return (r = t.call(this, e, "[subtitle-track-controller]") || this).media = null, r.tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.selectDefaultTrack = !0, r.queuedDefaultTrack = -1, r.trackChangeListener = function() {
                                        return r.onTextTracksChanged()
                                    }, r.asyncPollTrackChange = function() {
                                        return r.pollTrackChange(0)
                                    }, r.useTextTrackPolling = !1, r.subtitlePollingInterval = -1, r._subtitleDisplay = !0, r.registerListeners(), r
                                }
                                r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, Se(e, r);
                                var n, a, o = i.prototype;
                                return o.destroy = function() {
                                    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, t.prototype.destroy.call(this)
                                }, o.registerListeners = function() {
                                    var t = this.hls;
                                    t.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(s.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(s.Events.ERROR, this.onError, this)
                                }, o.unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(s.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(s.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(s.Events.ERROR, this.onError, this)
                                }, o.onMediaAttached = function(t, e) {
                                    this.media = e.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
                                }, o.pollTrackChange = function(t) {
                                    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t)
                                }, o.onMediaDetaching = function() {
                                    this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), be(this.media.textTracks).forEach((function(t) {
                                        M(t)
                                    })), this.subtitleTrack = -1, this.media = null)
                                }, o.onManifestLoading = function() {
                                    this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0
                                }, o.onManifestParsed = function(t, e) {
                                    this.tracks = e.subtitleTracks
                                }, o.onSubtitleTrackLoaded = function(t, e) {
                                    var r = e.id,
                                        i = e.details,
                                        n = this.trackId,
                                        a = this.tracksInGroup[n];
                                    if (a) {
                                        var s = a.details;
                                        a.details = e.details, this.log("subtitle track " + r + " loaded [" + i.startSN + "-" + i.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, e, s))
                                    } else this.warn("Invalid subtitle track id " + r)
                                }, o.onLevelLoading = function(t, e) {
                                    this.switchLevel(e.level)
                                }, o.onLevelSwitching = function(t, e) {
                                    this.switchLevel(e.level)
                                }, o.switchLevel = function(t) {
                                    var e = this.hls.levels[t];
                                    if (null != e && e.textGroupIds) {
                                        var r = e.textGroupIds[e.urlId];
                                        if (this.groupId !== r) {
                                            var i = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0,
                                                n = this.tracks.filter((function(t) {
                                                    return !r || t.groupId === r
                                                }));
                                            this.tracksInGroup = n;
                                            var a = this.findTrackId(null == i ? void 0 : i.name) || this.findTrackId();
                                            this.groupId = r;
                                            var o = {
                                                subtitleTracks: n
                                            };
                                            this.log("Updating subtitle tracks, " + n.length + ' track(s) found in "' + r + '" group-id'), this.hls.trigger(s.Events.SUBTITLE_TRACKS_UPDATED, o), -1 !== a && this.setSubtitleTrack(a, i)
                                        }
                                    }
                                }, o.findTrackId = function(t) {
                                    for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id
                                    }
                                    return -1
                                }, o.onError = function(e, r) {
                                    t.prototype.onError.call(this, e, r), !r.fatal && r.context && r.context.type === C.PlaylistContextType.SUBTITLE_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r)
                                }, o.loadPlaylist = function(t) {
                                    var e = this.tracksInGroup[this.trackId];
                                    if (this.shouldLoadTrack(e)) {
                                        var r = e.id,
                                            i = e.groupId,
                                            n = e.url;
                                        if (t) try {
                                            n = t.addDirectives(n)
                                        } catch (t) {
                                            this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                                        }
                                        this.log("Loading subtitle playlist for id " + r), this.hls.trigger(s.Events.SUBTITLE_TRACK_LOADING, {
                                            url: n,
                                            id: r,
                                            groupId: i,
                                            deliveryDirectives: t || null
                                        })
                                    }
                                }, o.toggleTrackModes = function(t) {
                                    var e = this,
                                        r = this.media,
                                        i = this.trackId;
                                    if (r) {
                                        var n = be(r.textTracks),
                                            a = n.filter((function(t) {
                                                return t.groupId === e.groupId
                                            }));
                                        if (-1 === t)[].slice.call(n).forEach((function(t) {
                                            t.mode = "disabled"
                                        }));
                                        else {
                                            var s = a[i];
                                            s && (s.mode = "disabled")
                                        }
                                        var o = a[t];
                                        o && (o.mode = this.subtitleDisplay ? "showing" : "hidden")
                                    }
                                }, o.setSubtitleTrack = function(t, e) {
                                    var r, i = this.tracksInGroup;
                                    if (this.media) {
                                        if (this.trackId !== t && this.toggleTrackModes(t), !(this.trackId === t && (-1 === t || null !== (r = i[t]) && void 0 !== r && r.details) || t < -1 || t >= i.length)) {
                                            this.clearTimer();
                                            var n = i[t];
                                            if (this.log("Switching to subtitle track " + t), this.trackId = t, n) {
                                                var a = n.id,
                                                    o = n.groupId,
                                                    l = void 0 === o ? "" : o,
                                                    u = n.name,
                                                    h = n.type,
                                                    d = n.url;
                                                this.hls.trigger(s.Events.SUBTITLE_TRACK_SWITCH, {
                                                    id: a,
                                                    groupId: l,
                                                    name: u,
                                                    type: h,
                                                    url: d
                                                });
                                                var c = this.switchParams(n.url, null == e ? void 0 : e.details);
                                                this.loadPlaylist(c)
                                            } else this.hls.trigger(s.Events.SUBTITLE_TRACK_SWITCH, {
                                                id: t
                                            })
                                        }
                                    } else this.queuedDefaultTrack = t
                                }, o.onTextTracksChanged = function() {
                                    if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), this.media && this.hls.config.renderTextTracksNatively) {
                                        for (var t = -1, e = be(this.media.textTracks), r = 0; r < e.length; r++)
                                            if ("hidden" === e[r].mode) t = r;
                                            else if ("showing" === e[r].mode) {
                                                t = r;
                                                break
                                            }
                                        this.subtitleTrack !== t && (this.subtitleTrack = t)
                                    }
                                }, n = i, (a = [{
                                    key: "subtitleDisplay",
                                    get: function() {
                                        return this._subtitleDisplay
                                    },
                                    set: function(t) {
                                        this._subtitleDisplay = t, this.trackId > -1 && this.toggleTrackModes(this.trackId)
                                    }
                                }, {
                                    key: "subtitleTracks",
                                    get: function() {
                                        return this.tracksInGroup
                                    }
                                }, {
                                    key: "subtitleTrack",
                                    get: function() {
                                        return this.trackId
                                    },
                                    set: function(t) {
                                        this.selectDefaultTrack = !1;
                                        var e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                                        this.setSubtitleTrack(t, e)
                                    }
                                }]) && function(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                    }
                                }(n.prototype, a), Object.defineProperty(n, "prototype", {
                                    writable: !1
                                }), i
                            }(et);
                            var ke, De = function() {
                                    function t(t) {
                                        this.buffers = void 0, this.queues = {
                                            video: [],
                                            audio: [],
                                            audiovideo: []
                                        }, this.buffers = t
                                    }
                                    var e = t.prototype;
                                    return e.append = function(t, e) {
                                        var r = this.queues[e];
                                        r.push(t), 1 === r.length && this.buffers[e] && this.executeNext(e)
                                    }, e.insertAbort = function(t, e) {
                                        this.queues[e].unshift(t), this.executeNext(e)
                                    }, e.appendBlocker = function(t) {
                                        var e, r = new Promise((function(t) {
                                                e = t
                                            })),
                                            i = {
                                                execute: e,
                                                onStart: function() {},
                                                onComplete: function() {},
                                                onError: function() {}
                                            };
                                        return this.append(i, t), r
                                    }, e.executeNext = function(t) {
                                        var e = this.buffers,
                                            r = this.queues,
                                            i = e[t],
                                            n = r[t];
                                        if (n.length) {
                                            var a = n[0];
                                            try {
                                                a.execute()
                                            } catch (e) {
                                                l.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), a.onError(e), i && i.updating || (n.shift(), this.executeNext(t))
                                            }
                                        }
                                    }, e.shiftAndExecuteNext = function(t) {
                                        this.queues[t].shift(), this.executeNext(t)
                                    }, e.current = function(t) {
                                        return this.queues[t][0]
                                    }, t
                                }(),
                                Re = qt(),
                                Ae = /([ha]vc.)(?:\.[^.,]+)+/,
                                _e = function() {
                                    function t(t) {
                                        var e = this;
                                        this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
                                            var t = e.hls,
                                                r = e.media,
                                                i = e.mediaSource;
                                            l.logger.log("[buffer-controller]: Media source opened"), r && (e.updateMediaElementDuration(), t.trigger(s.Events.MEDIA_ATTACHED, {
                                                media: r
                                            })), i && i.removeEventListener("sourceopen", e._onMediaSourceOpen), e.checkPendingTracks()
                                        }, this._onMediaSourceClose = function() {
                                            l.logger.log("[buffer-controller]: Media source closed")
                                        }, this._onMediaSourceEnded = function() {
                                            l.logger.log("[buffer-controller]: Media source ended")
                                        }, this.hls = t, this._initSourceBuffer(), this.registerListeners()
                                    }
                                    var e = t.prototype;
                                    return e.hasSourceTypes = function() {
                                        return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
                                    }, e.destroy = function() {
                                        this.unregisterListeners(), this.details = null
                                    }, e.registerListeners = function() {
                                        var t = this.hls;
                                        t.on(s.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.Events.BUFFER_RESET, this.onBufferReset, this), t.on(s.Events.BUFFER_APPENDING, this.onBufferAppending, this), t.on(s.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.on(s.Events.BUFFER_EOS, this.onBufferEos, this), t.on(s.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(s.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(s.Events.FRAG_PARSED, this.onFragParsed, this), t.on(s.Events.FRAG_CHANGED, this.onFragChanged, this)
                                    }, e.unregisterListeners = function() {
                                        var t = this.hls;
                                        t.off(s.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.Events.BUFFER_RESET, this.onBufferReset, this), t.off(s.Events.BUFFER_APPENDING, this.onBufferAppending, this), t.off(s.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.off(s.Events.BUFFER_EOS, this.onBufferEos, this), t.off(s.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(s.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(s.Events.FRAG_PARSED, this.onFragParsed, this), t.off(s.Events.FRAG_CHANGED, this.onFragChanged, this)
                                    }, e._initSourceBuffer = function() {
                                        this.sourceBuffer = {}, this.operationQueue = new De(this.sourceBuffer), this.listeners = {
                                            audio: [],
                                            video: [],
                                            audiovideo: []
                                        }
                                    }, e.onManifestParsed = function(t, e) {
                                        var r = 2;
                                        (e.audio && !e.video || !e.altAudio) && (r = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r, this.details = null, l.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
                                    }, e.onMediaAttaching = function(t, e) {
                                        var r = this.media = e.media;
                                        if (r && Re) {
                                            var i = this.mediaSource = new Re;
                                            i.addEventListener("sourceopen", this._onMediaSourceOpen), i.addEventListener("sourceended", this._onMediaSourceEnded), i.addEventListener("sourceclose", this._onMediaSourceClose), r.src = self.URL.createObjectURL(i), this._objectUrl = r.src
                                        }
                                    }, e.onMediaDetaching = function() {
                                        var t = this.media,
                                            e = this.mediaSource,
                                            r = this._objectUrl;
                                        if (e) {
                                            if (l.logger.log("[buffer-controller]: media source detaching"), "open" === e.readyState) try {
                                                e.endOfStream()
                                            } catch (t) {
                                                l.logger.warn("[buffer-controller]: onMediaDetaching: " + t.message + " while calling endOfStream")
                                            }
                                            this.onBufferReset(), e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), t && (r && self.URL.revokeObjectURL(r), t.src === r ? (t.removeAttribute("src"), t.load()) : l.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
                                        }
                                        this.hls.trigger(s.Events.MEDIA_DETACHED, void 0)
                                    }, e.onBufferReset = function() {
                                        var t = this;
                                        this.getSourceBufferTypes().forEach((function(e) {
                                            var r = t.sourceBuffer[e];
                                            try {
                                                r && (t.removeBufferListeners(e), t.mediaSource && t.mediaSource.removeSourceBuffer(r), t.sourceBuffer[e] = void 0)
                                            } catch (t) {
                                                l.logger.warn("[buffer-controller]: Failed to reset the " + e + " buffer", t)
                                            }
                                        })), this._initSourceBuffer()
                                    }, e.onBufferCodecs = function(t, e) {
                                        var r = this,
                                            i = this.getSourceBufferTypes().length;
                                        Object.keys(e).forEach((function(t) {
                                            if (i) {
                                                var n = r.tracks[t];
                                                if (n && "function" == typeof n.buffer.changeType) {
                                                    var a = e[t],
                                                        s = a.id,
                                                        o = a.codec,
                                                        u = a.levelCodec,
                                                        h = a.container,
                                                        d = a.metadata,
                                                        c = (n.levelCodec || n.codec).replace(Ae, "$1"),
                                                        f = (u || o).replace(Ae, "$1");
                                                    if (c !== f) {
                                                        var g = h + ";codecs=" + (u || o);
                                                        r.appendChangeType(t, g), l.logger.log("[buffer-controller]: switching codec " + c + " to " + f), r.tracks[t] = {
                                                            buffer: n.buffer,
                                                            codec: o,
                                                            container: h,
                                                            levelCodec: u,
                                                            metadata: d,
                                                            id: s
                                                        }
                                                    }
                                                }
                                            } else r.pendingTracks[t] = e[t]
                                        })), i || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
                                    }, e.appendChangeType = function(t, e) {
                                        var r = this,
                                            i = this.operationQueue,
                                            n = {
                                                execute: function() {
                                                    var n = r.sourceBuffer[t];
                                                    n && (l.logger.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + e), n.changeType(e)), i.shiftAndExecuteNext(t)
                                                },
                                                onStart: function() {},
                                                onComplete: function() {},
                                                onError: function(e) {
                                                    l.logger.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", e)
                                                }
                                            };
                                        i.append(n, t)
                                    }, e.onBufferAppending = function(t, e) {
                                        var r = this,
                                            i = this.hls,
                                            n = this.operationQueue,
                                            a = this.tracks,
                                            u = e.data,
                                            h = e.type,
                                            d = e.frag,
                                            c = e.part,
                                            f = e.chunkMeta,
                                            g = f.buffering[h],
                                            v = self.performance.now();
                                        g.start = v;
                                        var p = d.stats.buffering,
                                            m = c ? c.stats.buffering : null;
                                        0 === p.start && (p.start = v), m && 0 === m.start && (m.start = v);
                                        var T = a.audio,
                                            y = "audio" === h && 1 === f.id && "audio/mpeg" === (null == T ? void 0 : T.container),
                                            E = {
                                                execute: function() {
                                                    if (g.executeStart = self.performance.now(), y) {
                                                        var t = r.sourceBuffer[h];
                                                        if (t) {
                                                            var e = d.start - t.timestampOffset;
                                                            Math.abs(e) >= .1 && (l.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + d.start + " (delta: " + e + ") sn: " + d.sn + ")"), t.timestampOffset = d.start)
                                                        }
                                                    }
                                                    r.appendExecutor(u, h)
                                                },
                                                onStart: function() {},
                                                onComplete: function() {
                                                    var t = self.performance.now();
                                                    g.executeEnd = g.end = t, 0 === p.first && (p.first = t), m && 0 === m.first && (m.first = t);
                                                    var e = r.sourceBuffer,
                                                        i = {};
                                                    for (var n in e) i[n] = ct.getBuffered(e[n]);
                                                    r.appendError = 0, r.hls.trigger(s.Events.BUFFER_APPENDED, {
                                                        type: h,
                                                        frag: d,
                                                        part: c,
                                                        chunkMeta: f,
                                                        parent: d.type,
                                                        timeRanges: i
                                                    })
                                                },
                                                onError: function(t) {
                                                    l.logger.error("[buffer-controller]: Error encountered while trying to append to the " + h + " SourceBuffer", t);
                                                    var e = {
                                                        type: o.ErrorTypes.MEDIA_ERROR,
                                                        parent: d.type,
                                                        details: o.ErrorDetails.BUFFER_APPEND_ERROR,
                                                        err: t,
                                                        fatal: !1
                                                    };
                                                    t.code === DOMException.QUOTA_EXCEEDED_ERR ? e.details = o.ErrorDetails.BUFFER_FULL_ERROR : (r.appendError++, e.details = o.ErrorDetails.BUFFER_APPEND_ERROR, r.appendError > i.config.appendErrorMaxRetry && (l.logger.error("[buffer-controller]: Failed " + i.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), e.fatal = !0, i.stopLoad())), i.trigger(s.Events.ERROR, e)
                                                }
                                            };
                                        n.append(E, h)
                                    }, e.onBufferFlushing = function(t, e) {
                                        var r = this,
                                            i = this.operationQueue,
                                            n = function(t) {
                                                return {
                                                    execute: r.removeExecutor.bind(r, t, e.startOffset, e.endOffset),
                                                    onStart: function() {},
                                                    onComplete: function() {
                                                        r.hls.trigger(s.Events.BUFFER_FLUSHED, {
                                                            type: t
                                                        })
                                                    },
                                                    onError: function(e) {
                                                        l.logger.warn("[buffer-controller]: Failed to remove from " + t + " SourceBuffer", e)
                                                    }
                                                }
                                            };
                                        e.type ? i.append(n(e.type), e.type) : this.getSourceBufferTypes().forEach((function(t) {
                                            i.append(n(t), t)
                                        }))
                                    }, e.onFragParsed = function(t, e) {
                                        var r = this,
                                            i = e.frag,
                                            n = e.part,
                                            a = [],
                                            o = n ? n.elementaryStreams : i.elementaryStreams;
                                        o[v.ElementaryStreamTypes.AUDIOVIDEO] ? a.push("audiovideo") : (o[v.ElementaryStreamTypes.AUDIO] && a.push("audio"), o[v.ElementaryStreamTypes.VIDEO] && a.push("video")), 0 === a.length && l.logger.warn("Fragments must have at least one ElementaryStreamType set. type: " + i.type + " level: " + i.level + " sn: " + i.sn), this.blockBuffers((function() {
                                            var t = self.performance.now();
                                            i.stats.buffering.end = t, n && (n.stats.buffering.end = t);
                                            var e = n ? n.stats : i.stats;
                                            r.hls.trigger(s.Events.FRAG_BUFFERED, {
                                                frag: i,
                                                part: n,
                                                stats: e,
                                                id: i.type
                                            })
                                        }), a)
                                    }, e.onFragChanged = function(t, e) {
                                        this.flushBackBuffer()
                                    }, e.onBufferEos = function(t, e) {
                                        var r = this;
                                        this.getSourceBufferTypes().reduce((function(t, i) {
                                            var n = r.sourceBuffer[i];
                                            return e.type && e.type !== i || n && !n.ended && (n.ended = !0, l.logger.log("[buffer-controller]: " + i + " sourceBuffer now EOS")), t && !(n && !n.ended)
                                        }), !0) && this.blockBuffers((function() {
                                            var t = r.mediaSource;
                                            t && "open" === t.readyState && t.endOfStream()
                                        }))
                                    }, e.onLevelUpdated = function(t, e) {
                                        var r = e.details;
                                        r.fragments.length && (this.details = r, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
                                    }, e.flushBackBuffer = function() {
                                        var t = this.hls,
                                            e = this.details,
                                            r = this.media,
                                            i = this.sourceBuffer;
                                        if (r && null !== e) {
                                            var n = this.getSourceBufferTypes();
                                            if (n.length) {
                                                var o = e.live && null !== t.config.liveBackBufferLength ? t.config.liveBackBufferLength : t.config.backBufferLength;
                                                if ((0, a.isFiniteNumber)(o) && !(o < 0)) {
                                                    var l = r.currentTime,
                                                        u = e.levelTargetDuration,
                                                        h = Math.max(o, u),
                                                        d = Math.floor(l / u) * u - h;
                                                    n.forEach((function(r) {
                                                        var n = i[r];
                                                        if (n) {
                                                            var a = ct.getBuffered(n);
                                                            a.length > 0 && d > a.start(0) && (t.trigger(s.Events.BACK_BUFFER_REACHED, {
                                                                bufferEnd: d
                                                            }), e.live && t.trigger(s.Events.LIVE_BACK_BUFFER_REACHED, {
                                                                bufferEnd: d
                                                            }), t.trigger(s.Events.BUFFER_FLUSHING, {
                                                                startOffset: 0,
                                                                endOffset: d,
                                                                type: r
                                                            }))
                                                        }
                                                    }))
                                                }
                                            }
                                        }
                                    }, e.updateMediaElementDuration = function() {
                                        if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
                                            var t = this.details,
                                                e = this.hls,
                                                r = this.media,
                                                i = this.mediaSource,
                                                n = t.fragments[0].start + t.totalduration,
                                                s = r.duration,
                                                o = (0, a.isFiniteNumber)(i.duration) ? i.duration : 0;
                                            t.live && e.config.liveDurationInfinity ? (l.logger.log("[buffer-controller]: Media Source duration is set to Infinity"), i.duration = 1 / 0, this.updateSeekableRange(t)) : (n > o && n > s || !(0, a.isFiniteNumber)(s)) && (l.logger.log("[buffer-controller]: Updating Media Source duration to " + n.toFixed(3)), i.duration = n)
                                        }
                                    }, e.updateSeekableRange = function(t) {
                                        var e = this.mediaSource,
                                            r = t.fragments;
                                        if (r.length && t.live && null != e && e.setLiveSeekableRange) {
                                            var i = Math.max(0, r[0].start),
                                                n = Math.max(i, i + t.totalduration);
                                            e.setLiveSeekableRange(i, n)
                                        }
                                    }, e.checkPendingTracks = function() {
                                        var t = this.bufferCodecEventsExpected,
                                            e = this.operationQueue,
                                            r = this.pendingTracks,
                                            i = Object.keys(r).length;
                                        if (i && !t || 2 === i) {
                                            this.createSourceBuffers(r), this.pendingTracks = {};
                                            var n = this.getSourceBufferTypes();
                                            if (0 === n.length) return void this.hls.trigger(s.Events.ERROR, {
                                                type: o.ErrorTypes.MEDIA_ERROR,
                                                details: o.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                                                fatal: !0,
                                                reason: "could not create source buffer for media codec(s)"
                                            });
                                            n.forEach((function(t) {
                                                e.executeNext(t)
                                            }))
                                        }
                                    }, e.createSourceBuffers = function(t) {
                                        var e = this.sourceBuffer,
                                            r = this.mediaSource;
                                        if (!r) throw Error("createSourceBuffers called when mediaSource was null");
                                        var i = 0;
                                        for (var n in t)
                                            if (!e[n]) {
                                                var a = t[n];
                                                if (!a) throw Error("source buffer exists for track " + n + ", however track does not");
                                                var u = a.levelCodec || a.codec,
                                                    h = a.container + ";codecs=" + u;
                                                l.logger.log("[buffer-controller]: creating sourceBuffer(" + h + ")");
                                                try {
                                                    var d = e[n] = r.addSourceBuffer(h),
                                                        c = n;
                                                    this.addBufferListener(c, "updatestart", this._onSBUpdateStart), this.addBufferListener(c, "updateend", this._onSBUpdateEnd), this.addBufferListener(c, "error", this._onSBUpdateError), this.tracks[n] = {
                                                        buffer: d,
                                                        codec: u,
                                                        container: a.container,
                                                        levelCodec: a.levelCodec,
                                                        metadata: a.metadata,
                                                        id: a.id
                                                    }, i++
                                                } catch (t) {
                                                    l.logger.error("[buffer-controller]: error while trying to add sourceBuffer: " + t.message), this.hls.trigger(s.Events.ERROR, {
                                                        type: o.ErrorTypes.MEDIA_ERROR,
                                                        details: o.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                                        fatal: !1,
                                                        error: t,
                                                        mimeType: h
                                                    })
                                                }
                                            } i && this.hls.trigger(s.Events.BUFFER_CREATED, {
                                            tracks: this.tracks
                                        })
                                    }, e._onSBUpdateStart = function(t) {
                                        this.operationQueue.current(t).onStart()
                                    }, e._onSBUpdateEnd = function(t) {
                                        var e = this.operationQueue;
                                        e.current(t).onComplete(), e.shiftAndExecuteNext(t)
                                    }, e._onSBUpdateError = function(t, e) {
                                        l.logger.error("[buffer-controller]: " + t + " SourceBuffer error", e), this.hls.trigger(s.Events.ERROR, {
                                            type: o.ErrorTypes.MEDIA_ERROR,
                                            details: o.ErrorDetails.BUFFER_APPENDING_ERROR,
                                            fatal: !1
                                        });
                                        var r = this.operationQueue.current(t);
                                        r && r.onError(e)
                                    }, e.removeExecutor = function(t, e, r) {
                                        var i = this.media,
                                            n = this.mediaSource,
                                            s = this.operationQueue,
                                            o = this.sourceBuffer[t];
                                        if (!i || !n || !o) return l.logger.warn("[buffer-controller]: Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), void s.shiftAndExecuteNext(t);
                                        var u = (0, a.isFiniteNumber)(i.duration) ? i.duration : 1 / 0,
                                            h = (0, a.isFiniteNumber)(n.duration) ? n.duration : 1 / 0,
                                            d = Math.max(0, e),
                                            c = Math.min(r, u, h);
                                        c > d ? (l.logger.log("[buffer-controller]: Removing [" + d + "," + c + "] from the " + t + " SourceBuffer"), o.remove(d, c)) : s.shiftAndExecuteNext(t)
                                    }, e.appendExecutor = function(t, e) {
                                        var r = this.operationQueue,
                                            i = this.sourceBuffer[e];
                                        if (!i) return l.logger.warn("[buffer-controller]: Attempting to append to the " + e + " SourceBuffer, but it does not exist"), void r.shiftAndExecuteNext(e);
                                        i.ended = !1, i.appendBuffer(t)
                                    }, e.blockBuffers = function(t, e) {
                                        var r = this;
                                        if (void 0 === e && (e = this.getSourceBufferTypes()), !e.length) return l.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve().then(t);
                                        var i = this.operationQueue,
                                            n = e.map((function(t) {
                                                return i.appendBlocker(t)
                                            }));
                                        Promise.all(n).then((function() {
                                            t(), e.forEach((function(t) {
                                                var e = r.sourceBuffer[t];
                                                e && e.updating || i.shiftAndExecuteNext(t)
                                            }))
                                        }))
                                    }, e.getSourceBufferTypes = function() {
                                        return Object.keys(this.sourceBuffer)
                                    }, e.addBufferListener = function(t, e, r) {
                                        var i = this.sourceBuffer[t];
                                        if (i) {
                                            var n = r.bind(this, t);
                                            this.listeners[t].push({
                                                event: e,
                                                listener: n
                                            }), i.addEventListener(e, n)
                                        }
                                    }, e.removeBufferListeners = function(t) {
                                        var e = this.sourceBuffer[t];
                                        e && this.listeners[t].forEach((function(t) {
                                            e.removeEventListener(t.event, t.listener)
                                        }))
                                    }, t
                                }(),
                                Ie = {
                                    42: 225,
                                    92: 233,
                                    94: 237,
                                    95: 243,
                                    96: 250,
                                    123: 231,
                                    124: 247,
                                    125: 209,
                                    126: 241,
                                    127: 9608,
                                    128: 174,
                                    129: 176,
                                    130: 189,
                                    131: 191,
                                    132: 8482,
                                    133: 162,
                                    134: 163,
                                    135: 9834,
                                    136: 224,
                                    137: 32,
                                    138: 232,
                                    139: 226,
                                    140: 234,
                                    141: 238,
                                    142: 244,
                                    143: 251,
                                    144: 193,
                                    145: 201,
                                    146: 211,
                                    147: 218,
                                    148: 220,
                                    149: 252,
                                    150: 8216,
                                    151: 161,
                                    152: 42,
                                    153: 8217,
                                    154: 9473,
                                    155: 169,
                                    156: 8480,
                                    157: 8226,
                                    158: 8220,
                                    159: 8221,
                                    160: 192,
                                    161: 194,
                                    162: 199,
                                    163: 200,
                                    164: 202,
                                    165: 203,
                                    166: 235,
                                    167: 206,
                                    168: 207,
                                    169: 239,
                                    170: 212,
                                    171: 217,
                                    172: 249,
                                    173: 219,
                                    174: 171,
                                    175: 187,
                                    176: 195,
                                    177: 227,
                                    178: 205,
                                    179: 204,
                                    180: 236,
                                    181: 210,
                                    182: 242,
                                    183: 213,
                                    184: 245,
                                    185: 123,
                                    186: 125,
                                    187: 92,
                                    188: 94,
                                    189: 95,
                                    190: 124,
                                    191: 8764,
                                    192: 196,
                                    193: 228,
                                    194: 214,
                                    195: 246,
                                    196: 223,
                                    197: 165,
                                    198: 164,
                                    199: 9475,
                                    200: 197,
                                    201: 229,
                                    202: 216,
                                    203: 248,
                                    204: 9487,
                                    205: 9491,
                                    206: 9495,
                                    207: 9499
                                },
                                Ce = function(t) {
                                    var e = t;
                                    return Ie.hasOwnProperty(t) && (e = Ie[t]), String.fromCharCode(e)
                                },
                                we = 15,
                                Oe = 100,
                                xe = {
                                    17: 1,
                                    18: 3,
                                    21: 5,
                                    22: 7,
                                    23: 9,
                                    16: 11,
                                    19: 12,
                                    20: 14
                                },
                                Pe = {
                                    17: 2,
                                    18: 4,
                                    21: 6,
                                    22: 8,
                                    23: 10,
                                    19: 13,
                                    20: 15
                                },
                                Fe = {
                                    25: 1,
                                    26: 3,
                                    29: 5,
                                    30: 7,
                                    31: 9,
                                    24: 11,
                                    27: 12,
                                    28: 14
                                },
                                Me = {
                                    25: 2,
                                    26: 4,
                                    29: 6,
                                    30: 8,
                                    31: 10,
                                    27: 13,
                                    28: 15
                                },
                                Ne = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
                            ! function(t) {
                                t[t.ERROR = 0] = "ERROR", t[t.TEXT = 1] = "TEXT", t[t.WARNING = 2] = "WARNING", t[t.INFO = 2] = "INFO", t[t.DEBUG = 3] = "DEBUG", t[t.DATA = 3] = "DATA"
                            }(ke || (ke = {}));
                            var Ue = function() {
                                    function t() {
                                        this.time = null, this.verboseLevel = ke.ERROR
                                    }
                                    return t.prototype.log = function(t, e) {
                                        this.verboseLevel >= t && l.logger.log(this.time + " [" + t + "] " + e)
                                    }, t
                                }(),
                                Be = function(t) {
                                    for (var e = [], r = 0; r < t.length; r++) e.push(t[r].toString(16));
                                    return e
                                },
                                Ge = function() {
                                    function t(t, e, r, i, n) {
                                        this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = t || "white", this.underline = e || !1, this.italics = r || !1, this.background = i || "black", this.flash = n || !1
                                    }
                                    var e = t.prototype;
                                    return e.reset = function() {
                                        this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                                    }, e.setStyles = function(t) {
                                        for (var e = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            t.hasOwnProperty(i) && (this[i] = t[i])
                                        }
                                    }, e.isDefault = function() {
                                        return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                                    }, e.equals = function(t) {
                                        return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
                                    }, e.copy = function(t) {
                                        this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
                                    }, e.toString = function() {
                                        return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                                    }, t
                                }(),
                                je = function() {
                                    function t(t, e, r, i, n, a) {
                                        this.uchar = void 0, this.penState = void 0, this.uchar = t || " ", this.penState = new Ge(e, r, i, n, a)
                                    }
                                    var e = t.prototype;
                                    return e.reset = function() {
                                        this.uchar = " ", this.penState.reset()
                                    }, e.setChar = function(t, e) {
                                        this.uchar = t, this.penState.copy(e)
                                    }, e.setPenState = function(t) {
                                        this.penState.copy(t)
                                    }, e.equals = function(t) {
                                        return this.uchar === t.uchar && this.penState.equals(t.penState)
                                    }, e.copy = function(t) {
                                        this.uchar = t.uchar, this.penState.copy(t.penState)
                                    }, e.isEmpty = function() {
                                        return " " === this.uchar && this.penState.isDefault()
                                    }, t
                                }(),
                                He = function() {
                                    function t(t) {
                                        this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
                                        for (var e = 0; e < Oe; e++) this.chars.push(new je);
                                        this.logger = t, this.pos = 0, this.currPenState = new Ge
                                    }
                                    var e = t.prototype;
                                    return e.equals = function(t) {
                                        for (var e = !0, r = 0; r < Oe; r++)
                                            if (!this.chars[r].equals(t.chars[r])) {
                                                e = !1;
                                                break
                                            } return e
                                    }, e.copy = function(t) {
                                        for (var e = 0; e < Oe; e++) this.chars[e].copy(t.chars[e])
                                    }, e.isEmpty = function() {
                                        for (var t = !0, e = 0; e < Oe; e++)
                                            if (!this.chars[e].isEmpty()) {
                                                t = !1;
                                                break
                                            } return t
                                    }, e.setCursor = function(t) {
                                        this.pos !== t && (this.pos = t), this.pos < 0 ? (this.logger.log(ke.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > Oe && (this.logger.log(ke.DEBUG, "Too large cursor position " + this.pos), this.pos = Oe)
                                    }, e.moveCursor = function(t) {
                                        var e = this.pos + t;
                                        if (t > 1)
                                            for (var r = this.pos + 1; r < e + 1; r++) this.chars[r].setPenState(this.currPenState);
                                        this.setCursor(e)
                                    }, e.backSpace = function() {
                                        this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                                    }, e.insertChar = function(t) {
                                        t >= 144 && this.backSpace();
                                        var e = Ce(t);
                                        this.pos >= Oe ? this.logger.log(ke.ERROR, "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1))
                                    }, e.clearFromPos = function(t) {
                                        var e;
                                        for (e = t; e < Oe; e++) this.chars[e].reset()
                                    }, e.clear = function() {
                                        this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                                    }, e.clearToEndOfRow = function() {
                                        this.clearFromPos(this.pos)
                                    }, e.getTextString = function() {
                                        for (var t = [], e = !0, r = 0; r < Oe; r++) {
                                            var i = this.chars[r].uchar;
                                            " " !== i && (e = !1), t.push(i)
                                        }
                                        return e ? "" : t.join("")
                                    }, e.setPenStyles = function(t) {
                                        this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
                                    }, t
                                }(),
                                Ke = function() {
                                    function t(t) {
                                        this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
                                        for (var e = 0; e < we; e++) this.rows.push(new He(t));
                                        this.logger = t, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset()
                                    }
                                    var e = t.prototype;
                                    return e.reset = function() {
                                        for (var t = 0; t < we; t++) this.rows[t].clear();
                                        this.currRow = 14
                                    }, e.equals = function(t) {
                                        for (var e = !0, r = 0; r < we; r++)
                                            if (!this.rows[r].equals(t.rows[r])) {
                                                e = !1;
                                                break
                                            } return e
                                    }, e.copy = function(t) {
                                        for (var e = 0; e < we; e++) this.rows[e].copy(t.rows[e])
                                    }, e.isEmpty = function() {
                                        for (var t = !0, e = 0; e < we; e++)
                                            if (!this.rows[e].isEmpty()) {
                                                t = !1;
                                                break
                                            } return t
                                    }, e.backSpace = function() {
                                        this.rows[this.currRow].backSpace()
                                    }, e.clearToEndOfRow = function() {
                                        this.rows[this.currRow].clearToEndOfRow()
                                    }, e.insertChar = function(t) {
                                        this.rows[this.currRow].insertChar(t)
                                    }, e.setPen = function(t) {
                                        this.rows[this.currRow].setPenStyles(t)
                                    }, e.moveCursor = function(t) {
                                        this.rows[this.currRow].moveCursor(t)
                                    }, e.setCursor = function(t) {
                                        this.logger.log(ke.INFO, "setCursor: " + t), this.rows[this.currRow].setCursor(t)
                                    }, e.setPAC = function(t) {
                                        this.logger.log(ke.INFO, "pacData = " + JSON.stringify(t));
                                        var e = t.row - 1;
                                        if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
                                            for (var r = 0; r < we; r++) this.rows[r].clear();
                                            var i = this.currRow + 1 - this.nrRollUpRows,
                                                n = this.lastOutputScreen;
                                            if (n) {
                                                var a = n.rows[i].cueStartTime,
                                                    s = this.logger.time;
                                                if (a && null !== s && a < s)
                                                    for (var o = 0; o < this.nrRollUpRows; o++) this.rows[e - this.nrRollUpRows + o + 1].copy(n.rows[i + o])
                                            }
                                        }
                                        this.currRow = e;
                                        var l = this.rows[this.currRow];
                                        if (null !== t.indent) {
                                            var u = t.indent,
                                                h = Math.max(u - 1, 0);
                                            l.setCursor(t.indent), t.color = l.chars[h].penState.foreground
                                        }
                                        var d = {
                                            foreground: t.color,
                                            underline: t.underline,
                                            italics: t.italics,
                                            background: "black",
                                            flash: !1
                                        };
                                        this.setPen(d)
                                    }, e.setBkgData = function(t) {
                                        this.logger.log(ke.INFO, "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
                                    }, e.setRollUpRows = function(t) {
                                        this.nrRollUpRows = t
                                    }, e.rollUp = function() {
                                        if (null !== this.nrRollUpRows) {
                                            this.logger.log(ke.TEXT, this.getDisplayText());
                                            var t = this.currRow + 1 - this.nrRollUpRows,
                                                e = this.rows.splice(t, 1)[0];
                                            e.clear(), this.rows.splice(this.currRow, 0, e), this.logger.log(ke.INFO, "Rolling up")
                                        } else this.logger.log(ke.DEBUG, "roll_up but nrRollUpRows not set yet")
                                    }, e.getDisplayText = function(t) {
                                        t = t || !1;
                                        for (var e = [], r = "", i = -1, n = 0; n < we; n++) {
                                            var a = this.rows[n].getTextString();
                                            a && (i = n + 1, t ? e.push("Row " + i + ": '" + a + "'") : e.push(a.trim()))
                                        }
                                        return e.length > 0 && (r = t ? "[" + e.join(" | ") + "]" : e.join("\n")), r
                                    }, e.getTextAndFormat = function() {
                                        return this.rows
                                    }, t
                                }(),
                                Ve = function() {
                                    function t(t, e, r) {
                                        this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t, this.outputFilter = e, this.mode = null, this.verbose = 0, this.displayedMemory = new Ke(r), this.nonDisplayedMemory = new Ke(r), this.lastOutputScreen = new Ke(r), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r
                                    }
                                    var e = t.prototype;
                                    return e.reset = function() {
                                        this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                                    }, e.getHandler = function() {
                                        return this.outputFilter
                                    }, e.setHandler = function(t) {
                                        this.outputFilter = t
                                    }, e.setPAC = function(t) {
                                        this.writeScreen.setPAC(t)
                                    }, e.setBkgData = function(t) {
                                        this.writeScreen.setBkgData(t)
                                    }, e.setMode = function(t) {
                                        t !== this.mode && (this.mode = t, this.logger.log(ke.INFO, "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
                                    }, e.insertChars = function(t) {
                                        for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
                                        var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                                        this.logger.log(ke.INFO, r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(ke.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                                    }, e.ccRCL = function() {
                                        this.logger.log(ke.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                                    }, e.ccBS = function() {
                                        this.logger.log(ke.INFO, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                                    }, e.ccAOF = function() {}, e.ccAON = function() {}, e.ccDER = function() {
                                        this.logger.log(ke.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                                    }, e.ccRU = function(t) {
                                        this.logger.log(ke.INFO, "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
                                    }, e.ccFON = function() {
                                        this.logger.log(ke.INFO, "FON - Flash On"), this.writeScreen.setPen({
                                            flash: !0
                                        })
                                    }, e.ccRDC = function() {
                                        this.logger.log(ke.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                                    }, e.ccTR = function() {
                                        this.logger.log(ke.INFO, "TR"), this.setMode("MODE_TEXT")
                                    }, e.ccRTD = function() {
                                        this.logger.log(ke.INFO, "RTD"), this.setMode("MODE_TEXT")
                                    }, e.ccEDM = function() {
                                        this.logger.log(ke.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                                    }, e.ccCR = function() {
                                        this.logger.log(ke.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                                    }, e.ccENM = function() {
                                        this.logger.log(ke.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                                    }, e.ccEOC = function() {
                                        if (this.logger.log(ke.INFO, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                                            var t = this.displayedMemory;
                                            this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, this.logger.log(ke.TEXT, "DISP: " + this.displayedMemory.getDisplayText())
                                        }
                                        this.outputDataUpdate(!0)
                                    }, e.ccTO = function(t) {
                                        this.logger.log(ke.INFO, "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
                                    }, e.ccMIDROW = function(t) {
                                        var e = {
                                            flash: !1
                                        };
                                        if (e.underline = t % 2 == 1, e.italics = t >= 46, e.italics) e.foreground = "white";
                                        else {
                                            var r = Math.floor(t / 2) - 16;
                                            e.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                                        }
                                        this.logger.log(ke.INFO, "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
                                    }, e.outputDataUpdate = function(t) {
                                        void 0 === t && (t = !1);
                                        var e = this.logger.time;
                                        null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                                    }, e.cueSplitAtTime = function(t) {
                                        this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
                                    }, t
                                }(),
                                We = function() {
                                    function t(t, e, r) {
                                        this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
                                        var i = new Ue;
                                        this.channels = [null, new Ve(t, e, i), new Ve(t + 1, r, i)], this.cmdHistory = {
                                            a: null,
                                            b: null
                                        }, this.logger = i
                                    }
                                    var e = t.prototype;
                                    return e.getHandler = function(t) {
                                        return this.channels[t].getHandler()
                                    }, e.setHandler = function(t, e) {
                                        this.channels[t].setHandler(e)
                                    }, e.addData = function(t, e) {
                                        var r, i, n, a = !1;
                                        this.logger.time = t;
                                        for (var s = 0; s < e.length; s += 2)
                                            if (i = 127 & e[s], n = 127 & e[s + 1], 0 !== i || 0 !== n) {
                                                if (this.logger.log(ke.DATA, "[" + Be([e[s], e[s + 1]]) + "] -> (" + Be([i, n]) + ")"), (r = this.parseCmd(i, n)) || (r = this.parseMidrow(i, n)), r || (r = this.parsePAC(i, n)), r || (r = this.parseBackgroundAttributes(i, n)), !r && (a = this.parseChars(i, n))) {
                                                    var o = this.currentChannel;
                                                    o && o > 0 ? this.channels[o].insertChars(a) : this.logger.log(ke.WARNING, "No channel found yet. TEXT-MODE?")
                                                }
                                                r || a || this.logger.log(ke.WARNING, "Couldn't parse cleaned data " + Be([i, n]) + " orig: " + Be([e[s], e[s + 1]]))
                                            }
                                    }, e.parseCmd = function(t, e) {
                                        var r = this.cmdHistory;
                                        if (!((20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 33 && e <= 35)) return !1;
                                        if (qe(t, e, r)) return Ye(null, null, r), this.logger.log(ke.DEBUG, "Repeated command (" + Be([t, e]) + ") is dropped"), !0;
                                        var i = 20 === t || 21 === t || 23 === t ? 1 : 2,
                                            n = this.channels[i];
                                        return 20 === t || 21 === t || 28 === t || 29 === t ? 32 === e ? n.ccRCL() : 33 === e ? n.ccBS() : 34 === e ? n.ccAOF() : 35 === e ? n.ccAON() : 36 === e ? n.ccDER() : 37 === e ? n.ccRU(2) : 38 === e ? n.ccRU(3) : 39 === e ? n.ccRU(4) : 40 === e ? n.ccFON() : 41 === e ? n.ccRDC() : 42 === e ? n.ccTR() : 43 === e ? n.ccRTD() : 44 === e ? n.ccEDM() : 45 === e ? n.ccCR() : 46 === e ? n.ccENM() : 47 === e && n.ccEOC() : n.ccTO(e - 32), Ye(t, e, r), this.currentChannel = i, !0
                                    }, e.parseMidrow = function(t, e) {
                                        var r = 0;
                                        if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                                            if ((r = 17 === t ? 1 : 2) !== this.currentChannel) return this.logger.log(ke.ERROR, "Mismatch channel in midrow parsing"), !1;
                                            var i = this.channels[r];
                                            return !!i && (i.ccMIDROW(e), this.logger.log(ke.DEBUG, "MIDROW (" + Be([t, e]) + ")"), !0)
                                        }
                                        return !1
                                    }, e.parsePAC = function(t, e) {
                                        var r, i = this.cmdHistory;
                                        if (!((t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127 || (16 === t || 24 === t) && e >= 64 && e <= 95)) return !1;
                                        if (qe(t, e, i)) return Ye(null, null, i), !0;
                                        var n = t <= 23 ? 1 : 2;
                                        r = e >= 64 && e <= 95 ? 1 === n ? xe[t] : Fe[t] : 1 === n ? Pe[t] : Me[t];
                                        var a = this.channels[n];
                                        return !!a && (a.setPAC(this.interpretPAC(r, e)), Ye(t, e, i), this.currentChannel = n, !0)
                                    }, e.interpretPAC = function(t, e) {
                                        var r, i = {
                                            color: null,
                                            italics: !1,
                                            indent: null,
                                            underline: !1,
                                            row: t
                                        };
                                        return r = e > 95 ? e - 96 : e - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
                                    }, e.parseChars = function(t, e) {
                                        var r, i, n = null,
                                            a = null;
                                        if (t >= 25 ? (r = 2, a = t - 8) : (r = 1, a = t), a >= 17 && a <= 19 ? (i = 17 === a ? e + 80 : 18 === a ? e + 112 : e + 144, this.logger.log(ke.INFO, "Special char '" + Ce(i) + "' in channel " + r), n = [i]) : t >= 32 && t <= 127 && (n = 0 === e ? [t] : [t, e]), n) {
                                            var s = Be(n);
                                            this.logger.log(ke.DEBUG, "Char codes =  " + s.join(",")), Ye(t, e, this.cmdHistory)
                                        }
                                        return n
                                    }, e.parseBackgroundAttributes = function(t, e) {
                                        var r;
                                        if (!((16 === t || 24 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 45 && e <= 47)) return !1;
                                        var i = {};
                                        16 === t || 24 === t ? (r = Math.floor((e - 32) / 2), i.background = Ne[r], e % 2 == 1 && (i.background = i.background + "_semi")) : 45 === e ? i.background = "transparent" : (i.foreground = "black", 47 === e && (i.underline = !0));
                                        var n = t <= 23 ? 1 : 2;
                                        return this.channels[n].setBkgData(i), Ye(t, e, this.cmdHistory), !0
                                    }, e.reset = function() {
                                        for (var t = 0; t < Object.keys(this.channels).length; t++) {
                                            var e = this.channels[t];
                                            e && e.reset()
                                        }
                                        this.cmdHistory = {
                                            a: null,
                                            b: null
                                        }
                                    }, e.cueSplitAtTime = function(t) {
                                        for (var e = 0; e < this.channels.length; e++) {
                                            var r = this.channels[e];
                                            r && r.cueSplitAtTime(t)
                                        }
                                    }, t
                                }();

                            function Ye(t, e, r) {
                                r.a = t, r.b = e
                            }

                            function qe(t, e, r) {
                                return r.a === t && r.b === e
                            }
                            const Xe = We;
                            var ze = function() {
                                function t(t, e) {
                                    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t, this.trackName = e
                                }
                                var e = t.prototype;
                                return e.dispatchCue = function() {
                                    null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
                                }, e.newCue = function(t, e, r) {
                                    (null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
                                }, e.reset = function() {
                                    this.cueRanges = [], this.startTime = null
                                }, t
                            }();
                            const Ze = function() {
                                if ("undefined" != typeof self && self.VTTCue) return self.VTTCue;
                                var t = ["", "lr", "rl"],
                                    e = ["start", "middle", "end", "left", "right"];

                                function r(t, e) {
                                    if ("string" != typeof e) return !1;
                                    if (!Array.isArray(t)) return !1;
                                    var r = e.toLowerCase();
                                    return !!~t.indexOf(r) && r
                                }

                                function i(t) {
                                    return r(e, t)
                                }

                                function n(t) {
                                    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                                    for (var n = 1; n < arguments.length; n++) {
                                        var a = arguments[n];
                                        for (var s in a) t[s] = a[s]
                                    }
                                    return t
                                }

                                function a(e, a, s) {
                                    var o = this,
                                        l = {
                                            enumerable: !0
                                        };
                                    o.hasBeenReset = !1;
                                    var u = "",
                                        h = !1,
                                        d = e,
                                        c = a,
                                        f = s,
                                        g = null,
                                        v = "",
                                        p = !0,
                                        m = "auto",
                                        T = "start",
                                        y = 50,
                                        E = "middle",
                                        S = 50,
                                        b = "middle";
                                    Object.defineProperty(o, "id", n({}, l, {
                                        get: function() {
                                            return u
                                        },
                                        set: function(t) {
                                            u = "" + t
                                        }
                                    })), Object.defineProperty(o, "pauseOnExit", n({}, l, {
                                        get: function() {
                                            return h
                                        },
                                        set: function(t) {
                                            h = !!t
                                        }
                                    })), Object.defineProperty(o, "startTime", n({}, l, {
                                        get: function() {
                                            return d
                                        },
                                        set: function(t) {
                                            if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                                            d = t, this.hasBeenReset = !0
                                        }
                                    })), Object.defineProperty(o, "endTime", n({}, l, {
                                        get: function() {
                                            return c
                                        },
                                        set: function(t) {
                                            if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                                            c = t, this.hasBeenReset = !0
                                        }
                                    })), Object.defineProperty(o, "text", n({}, l, {
                                        get: function() {
                                            return f
                                        },
                                        set: function(t) {
                                            f = "" + t, this.hasBeenReset = !0
                                        }
                                    })), Object.defineProperty(o, "region", n({}, l, {
                                        get: function() {
                                            return g
                                        },
                                        set: function(t) {
                                            g = t, this.hasBeenReset = !0
                                        }
                                    })), Object.defineProperty(o, "vertical", n({}, l, {
                                        get: function() {
                                            return v
                                        },
                                        set: function(e) {
                                            var i = function(e) {
                                                return r(t, e)
                                            }(e);
                                            if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
                                            v = i, this.hasBeenReset = !0
                                        }
                                    })), Object.defineProperty(o, "snapToLines", n({}, l, {
                                        get: function() {
                                            return p
                                        },
                                        set: function(t) {
                                            p = !!t, this.hasBeenReset = !0
                                        }
                                    })), Object.defineProperty(o, "line", n({}, l, {
                                        get: function() {
                                            return m
                                        },
                                        set: function(t) {
                                            if ("number" != typeof t && "auto" !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
                                            m = t, this.hasBeenReset = !0
                                        }
                                    })), Object.defineProperty(o, "lineAlign", n({}, l, {
                                        get: function() {
                                            return T
                                        },
                                        set: function(t) {
                                            var e = i(t);
                                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                                            T = e, this.hasBeenReset = !0
                                        }
                                    })), Object.defineProperty(o, "position", n({}, l, {
                                        get: function() {
                                            return y
                                        },
                                        set: function(t) {
                                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                                            y = t, this.hasBeenReset = !0
                                        }
                                    })), Object.defineProperty(o, "positionAlign", n({}, l, {
                                        get: function() {
                                            return E
                                        },
                                        set: function(t) {
                                            var e = i(t);
                                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                                            E = e, this.hasBeenReset = !0
                                        }
                                    })), Object.defineProperty(o, "size", n({}, l, {
                                        get: function() {
                                            return S
                                        },
                                        set: function(t) {
                                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                                            S = t, this.hasBeenReset = !0
                                        }
                                    })), Object.defineProperty(o, "align", n({}, l, {
                                        get: function() {
                                            return b
                                        },
                                        set: function(t) {
                                            var e = i(t);
                                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                                            b = e, this.hasBeenReset = !0
                                        }
                                    })), o.displayState = void 0
                                }
                                return a.prototype.getCueAsHTML = function() {
                                    return self.WebVTT.convertCueToDOMTree(self, this.text)
                                }, a
                            }();
                            var $e = function() {
                                function t() {}
                                return t.prototype.decode = function(t, e) {
                                    if (!t) return "";
                                    if ("string" != typeof t) throw new Error("Error - expected string data.");
                                    return decodeURIComponent(encodeURIComponent(t))
                                }, t
                            }();

                            function Qe(t) {
                                function e(t, e, r, i) {
                                    return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + parseFloat(i || 0)
                                }
                                var r = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
                                return r ? parseFloat(r[2]) > 59 ? e(r[2], r[3], 0, r[4]) : e(r[1], r[2], r[3], r[4]) : null
                            }
                            var Je = function() {
                                function t() {
                                    this.values = Object.create(null)
                                }
                                var e = t.prototype;
                                return e.set = function(t, e) {
                                    this.get(t) || "" === e || (this.values[t] = e)
                                }, e.get = function(t, e, r) {
                                    return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
                                }, e.has = function(t) {
                                    return t in this.values
                                }, e.alt = function(t, e, r) {
                                    for (var i = 0; i < r.length; ++i)
                                        if (e === r[i]) {
                                            this.set(t, e);
                                            break
                                        }
                                }, e.integer = function(t, e) {
                                    /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
                                }, e.percent = function(t, e) {
                                    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
                                        var r = parseFloat(e);
                                        if (r >= 0 && r <= 100) return this.set(t, r), !0
                                    }
                                    return !1
                                }, t
                            }();

                            function tr(t, e, r, i) {
                                var n = i ? t.split(i) : [t];
                                for (var a in n)
                                    if ("string" == typeof n[a]) {
                                        var s = n[a].split(r);
                                        2 === s.length && e(s[0], s[1])
                                    }
                            }
                            var er = new Ze(0, 0, ""),
                                rr = "middle" === er.align ? "middle" : "center";

                            function ir(t, e, r) {
                                var i = t;

                                function n() {
                                    var e = Qe(t);
                                    if (null === e) throw new Error("Malformed timestamp: " + i);
                                    return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
                                }

                                function a() {
                                    t = t.replace(/^\s+/, "")
                                }
                                if (a(), e.startTime = n(), a(), "--\x3e" !== t.slice(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
                                t = t.slice(3), a(), e.endTime = n(), a(),
                                    function(t, e) {
                                        var i = new Je;
                                        tr(t, (function(t, e) {
                                            var n;
                                            switch (t) {
                                                case "region":
                                                    for (var a = r.length - 1; a >= 0; a--)
                                                        if (r[a].id === e) {
                                                            i.set(t, r[a].region);
                                                            break
                                                        } break;
                                                case "vertical":
                                                    i.alt(t, e, ["rl", "lr"]);
                                                    break;
                                                case "line":
                                                    n = e.split(","), i.integer(t, n[0]), i.percent(t, n[0]) && i.set("snapToLines", !1), i.alt(t, n[0], ["auto"]), 2 === n.length && i.alt("lineAlign", n[1], ["start", rr, "end"]);
                                                    break;
                                                case "position":
                                                    n = e.split(","), i.percent(t, n[0]), 2 === n.length && i.alt("positionAlign", n[1], ["start", rr, "end", "line-left", "line-right", "auto"]);
                                                    break;
                                                case "size":
                                                    i.percent(t, e);
                                                    break;
                                                case "align":
                                                    i.alt(t, e, ["start", rr, "end", "left", "right"])
                                            }
                                        }), /:/, /\s/), e.region = i.get("region", null), e.vertical = i.get("vertical", "");
                                        var n = i.get("line", "auto");
                                        "auto" === n && -1 === er.line && (n = -1), e.line = n, e.lineAlign = i.get("lineAlign", "start"), e.snapToLines = i.get("snapToLines", !0), e.size = i.get("size", 100), e.align = i.get("align", rr);
                                        var a = i.get("position", "auto");
                                        "auto" === a && 50 === er.position && (a = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = a
                                    }(t, e)
                            }

                            function nr(t) {
                                return t.replace(/<br(?: \/)?>/gi, "\n")
                            }
                            var ar = function() {
                                    function t() {
                                        this.state = "INITIAL", this.buffer = "", this.decoder = new $e, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
                                    }
                                    var e = t.prototype;
                                    return e.parse = function(t) {
                                        var e = this;

                                        function r() {
                                            var t = e.buffer,
                                                r = 0;
                                            for (t = nr(t); r < t.length && "\r" !== t[r] && "\n" !== t[r];) ++r;
                                            var i = t.slice(0, r);
                                            return "\r" === t[r] && ++r, "\n" === t[r] && ++r, e.buffer = t.slice(r), i
                                        }
                                        t && (e.buffer += e.decoder.decode(t, {
                                            stream: !0
                                        }));
                                        try {
                                            var i = "";
                                            if ("INITIAL" === e.state) {
                                                if (!/\r\n|\n/.test(e.buffer)) return this;
                                                var n = (i = r()).match(/^(Ã¯Â»Â¿)?WEBVTT([ \t].*)?$/);
                                                if (!n || !n[0]) throw new Error("Malformed WebVTT signature.");
                                                e.state = "HEADER"
                                            }
                                            for (var a = !1; e.buffer;) {
                                                if (!/\r\n|\n/.test(e.buffer)) return this;
                                                switch (a ? a = !1 : i = r(), e.state) {
                                                    case "HEADER":
                                                        /:/.test(i) ? tr(i, (function(t, e) {}), /:/) : i || (e.state = "ID");
                                                        continue;
                                                    case "NOTE":
                                                        i || (e.state = "ID");
                                                        continue;
                                                    case "ID":
                                                        if (/^NOTE($|[ \t])/.test(i)) {
                                                            e.state = "NOTE";
                                                            break
                                                        }
                                                        if (!i) continue;
                                                        if (e.cue = new Ze(0, 0, ""), e.state = "CUE", -1 === i.indexOf("--\x3e")) {
                                                            e.cue.id = i;
                                                            continue
                                                        }
                                                    case "CUE":
                                                        if (!e.cue) {
                                                            e.state = "BADCUE";
                                                            continue
                                                        }
                                                        try {
                                                            ir(i, e.cue, e.regionList)
                                                        } catch (t) {
                                                            e.cue = null, e.state = "BADCUE";
                                                            continue
                                                        }
                                                        e.state = "CUETEXT";
                                                        continue;
                                                    case "CUETEXT":
                                                        var s = -1 !== i.indexOf("--\x3e");
                                                        if (!i || s && (a = !0)) {
                                                            e.oncue && e.cue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                                                            continue
                                                        }
                                                        if (null === e.cue) continue;
                                                        e.cue.text && (e.cue.text += "\n"), e.cue.text += i;
                                                        continue;
                                                    case "BADCUE":
                                                        i || (e.state = "ID")
                                                }
                                            }
                                        } catch (t) {
                                            "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                                        }
                                        return this
                                    }, e.flush = function() {
                                        var t = this;
                                        try {
                                            if ((t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state || "BADWEBVTT" === t.state) throw new Error("Malformed WebVTT signature.")
                                        } catch (e) {
                                            t.onparsingerror && t.onparsingerror(e)
                                        }
                                        return t.onflush && t.onflush(), this
                                    }, t
                                }(),
                                sr = r(673),
                                or = r(524),
                                lr = /\r\n|\n\r|\n|\r/g,
                                ur = function(t, e, r) {
                                    return void 0 === r && (r = 0), t.slice(r, r + e.length) === e
                                },
                                hr = function(t) {
                                    for (var e = 5381, r = t.length; r;) e = 33 * e ^ t.charCodeAt(--r);
                                    return (e >>> 0).toString()
                                };

                            function dr(t, e, r) {
                                return hr(t.toString()) + hr(e.toString()) + hr(r)
                            }

                            function cr() {
                                return cr = Object.assign ? Object.assign.bind() : function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                    }
                                    return t
                                }, cr.apply(this, arguments)
                            }
                            var fr = "stpp.ttml.im1t",
                                gr = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
                                vr = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
                                pr = {
                                    left: "start",
                                    center: "center",
                                    right: "end",
                                    start: "start",
                                    end: "end"
                                };

                            function mr(t, e, r, i, n) {
                                var a = (0, u.findBox)(new Uint8Array(t), ["mdat"]);
                                if (0 !== a.length) {
                                    var s = a.map((function(t) {
                                            return (0, U.utf8ArrayToStr)(t)
                                        })),
                                        o = (0, sr.toTimescaleFromScale)(e, 1, r);
                                    try {
                                        s.forEach((function(t) {
                                            return i(function(t, e) {
                                                var r = (new DOMParser).parseFromString(t, "text/xml").getElementsByTagName("tt")[0];
                                                if (!r) throw new Error("Invalid ttml");
                                                var i = {
                                                        frameRate: 30,
                                                        subFrameRate: 1,
                                                        frameRateMultiplier: 0,
                                                        tickRate: 0
                                                    },
                                                    n = Object.keys(i).reduce((function(t, e) {
                                                        return t[e] = r.getAttribute("ttp:" + e) || i[e], t
                                                    }), {}),
                                                    a = "preserve" !== r.getAttribute("xml:space"),
                                                    s = yr(Tr(r, "styling", "style")),
                                                    o = yr(Tr(r, "layout", "region")),
                                                    l = Tr(r, "body", "[begin]");
                                                return [].map.call(l, (function(t) {
                                                    var r = Er(t, a);
                                                    if (!r || !t.hasAttribute("begin")) return null;
                                                    var i = Lr(t.getAttribute("begin"), n),
                                                        l = Lr(t.getAttribute("dur"), n),
                                                        u = Lr(t.getAttribute("end"), n);
                                                    if (null === i) throw br(t);
                                                    if (null === u) {
                                                        if (null === l) throw br(t);
                                                        u = i + l
                                                    }
                                                    var h = new Ze(i - e, u - e, r);
                                                    h.id = dr(h.startTime, h.endTime, h.text);
                                                    var d = o[t.getAttribute("region")],
                                                        c = s[t.getAttribute("style")];
                                                    h.position = 10, h.size = 80;
                                                    var f = function(t, e, r) {
                                                            var i = "http://www.w3.org/ns/ttml#styling",
                                                                n = null,
                                                                a = null != t && t.hasAttribute("style") ? t.getAttribute("style") : null;
                                                            return a && r.hasOwnProperty(a) && (n = r[a]), ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce((function(r, a) {
                                                                var s = Sr(e, i, a) || Sr(t, i, a) || Sr(n, i, a);
                                                                return s && (r[a] = s), r
                                                            }), {})
                                                        }(d, c, s),
                                                        g = f.textAlign;
                                                    if (g) {
                                                        var v = pr[g];
                                                        v && (h.lineAlign = v), h.align = g
                                                    }
                                                    return cr(h, f), h
                                                })).filter((function(t) {
                                                    return null !== t
                                                }))
                                            }(t, o))
                                        }))
                                    } catch (t) {
                                        n(t)
                                    }
                                } else n(new Error("Could not parse IMSC1 mdat"))
                            }

                            function Tr(t, e, r) {
                                var i = t.getElementsByTagName(e)[0];
                                return i ? [].slice.call(i.querySelectorAll(r)) : []
                            }

                            function yr(t) {
                                return t.reduce((function(t, e) {
                                    var r = e.getAttribute("xml:id");
                                    return r && (t[r] = e), t
                                }), {})
                            }

                            function Er(t, e) {
                                return [].slice.call(t.childNodes).reduce((function(t, r, i) {
                                    var n;
                                    return "br" === r.nodeName && i ? t + "\n" : null !== (n = r.childNodes) && void 0 !== n && n.length ? Er(r, e) : e ? t + r.textContent.trim().replace(/\s+/g, " ") : t + r.textContent
                                }), "")
                            }

                            function Sr(t, e, r) {
                                return t && t.hasAttributeNS(e, r) ? t.getAttributeNS(e, r) : null
                            }

                            function br(t) {
                                return new Error("Could not parse ttml timestamp " + t)
                            }

                            function Lr(t, e) {
                                if (!t) return null;
                                var r = Qe(t);
                                return null === r && (gr.test(t) ? r = function(t, e) {
                                    var r = gr.exec(t),
                                        i = (0 | r[4]) + (0 | r[5]) / e.subFrameRate;
                                    return 3600 * (0 | r[1]) + 60 * (0 | r[2]) + (0 | r[3]) + i / e.frameRate
                                }(t, e) : vr.test(t) && (r = function(t, e) {
                                    var r = vr.exec(t),
                                        i = Number(r[1]);
                                    switch (r[2]) {
                                        case "h":
                                            return 3600 * i;
                                        case "m":
                                            return 60 * i;
                                        case "ms":
                                            return 1e3 * i;
                                        case "f":
                                            return i / e.frameRate;
                                        case "t":
                                            return i / e.tickRate
                                    }
                                    return i
                                }(t, e))), r
                            }
                            var kr = function() {
                                function t(t) {
                                    if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
                                        ccOffset: 0,
                                        presentationOffset: 0,
                                        0: {
                                            start: 0,
                                            prevCC: -1,
                                            new: !0
                                        }
                                    }, this.captionsProperties = void 0, this.hls = t, this.config = t.config, this.Cues = t.config.cueHandler, this.captionsProperties = {
                                        textTrack1: {
                                            label: this.config.captionsTextTrack1Label,
                                            languageCode: this.config.captionsTextTrack1LanguageCode
                                        },
                                        textTrack2: {
                                            label: this.config.captionsTextTrack2Label,
                                            languageCode: this.config.captionsTextTrack2LanguageCode
                                        },
                                        textTrack3: {
                                            label: this.config.captionsTextTrack3Label,
                                            languageCode: this.config.captionsTextTrack3LanguageCode
                                        },
                                        textTrack4: {
                                            label: this.config.captionsTextTrack4Label,
                                            languageCode: this.config.captionsTextTrack4LanguageCode
                                        }
                                    }, this.config.enableCEA708Captions) {
                                        var e = new ze(this, "textTrack1"),
                                            r = new ze(this, "textTrack2"),
                                            i = new ze(this, "textTrack3"),
                                            n = new ze(this, "textTrack4");
                                        this.cea608Parser1 = new Xe(1, e, r), this.cea608Parser2 = new Xe(3, i, n)
                                    }
                                    t.on(s.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(s.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(s.Events.FRAG_LOADING, this.onFragLoading, this), t.on(s.Events.FRAG_LOADED, this.onFragLoaded, this), t.on(s.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.on(s.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(s.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(s.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.on(s.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    var t = this.hls;
                                    t.off(s.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(s.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(s.Events.FRAG_LOADING, this.onFragLoading, this), t.off(s.Events.FRAG_LOADED, this.onFragLoaded, this), t.off(s.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.off(s.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), t.off(s.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(s.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.off(s.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
                                }, e.addCues = function(t, e, r, i, n) {
                                    for (var a, o, l, u, h = !1, d = n.length; d--;) {
                                        var c = n[d],
                                            f = (a = c[0], o = c[1], l = e, u = r, Math.min(o, u) - Math.max(a, l));
                                        if (f >= 0 && (c[0] = Math.min(c[0], e), c[1] = Math.max(c[1], r), h = !0, f / (r - e) > .5)) return
                                    }
                                    if (h || n.push([e, r]), this.config.renderTextTracksNatively) {
                                        var g = this.captionsTracks[t];
                                        this.Cues.newCue(g, e, r, i)
                                    } else {
                                        var v = this.Cues.newCue(null, e, r, i);
                                        this.hls.trigger(s.Events.CUES_PARSED, {
                                            type: "captions",
                                            cues: v,
                                            track: t
                                        })
                                    }
                                }, e.onInitPtsFound = function(t, e) {
                                    var r = this,
                                        i = e.frag,
                                        n = e.id,
                                        a = e.initPTS,
                                        o = e.timescale,
                                        l = this.unparsedVttFrags;
                                    "main" === n && (this.initPTS[i.cc] = a, this.timescale[i.cc] = o), l.length && (this.unparsedVttFrags = [], l.forEach((function(t) {
                                        r.onFragLoaded(s.Events.FRAG_LOADED, t)
                                    })))
                                }, e.getExistingTrack = function(t) {
                                    var e = this.media;
                                    if (e)
                                        for (var r = 0; r < e.textTracks.length; r++) {
                                            var i = e.textTracks[r];
                                            if (i[t]) return i
                                        }
                                    return null
                                }, e.createCaptionsTrack = function(t) {
                                    this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
                                }, e.createNativeTrack = function(t) {
                                    if (!this.captionsTracks[t]) {
                                        var e = this.captionsProperties,
                                            r = this.captionsTracks,
                                            i = this.media,
                                            n = e[t],
                                            a = n.label,
                                            s = n.languageCode,
                                            o = this.getExistingTrack(t);
                                        if (o) r[t] = o, M(r[t]), P(r[t], i);
                                        else {
                                            var l = this.createTextTrack("captions", a, s);
                                            l && (l[t] = !0, r[t] = l)
                                        }
                                    }
                                }, e.createNonNativeTrack = function(t) {
                                    if (!this.nonNativeCaptionsTracks[t]) {
                                        var e = this.captionsProperties[t];
                                        if (e) {
                                            var r = {
                                                _id: t,
                                                label: e.label,
                                                kind: "captions",
                                                default: !!e.media && !!e.media.default,
                                                closedCaptions: e.media
                                            };
                                            this.nonNativeCaptionsTracks[t] = r, this.hls.trigger(s.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                                tracks: [r]
                                            })
                                        }
                                    }
                                }, e.createTextTrack = function(t, e, r) {
                                    var i = this.media;
                                    if (i) return i.addTextTrack(t, e, r)
                                }, e.onMediaAttaching = function(t, e) {
                                    this.media = e.media, this._cleanTracks()
                                }, e.onMediaDetaching = function() {
                                    var t = this.captionsTracks;
                                    Object.keys(t).forEach((function(e) {
                                        M(t[e]), delete t[e]
                                    })), this.nonNativeCaptionsTracks = {}
                                }, e.onManifestLoading = function() {
                                    this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
                                        ccOffset: 0,
                                        presentationOffset: 0,
                                        0: {
                                            start: 0,
                                            prevCC: -1,
                                            new: !0
                                        }
                                    }, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
                                }, e._cleanTracks = function() {
                                    var t = this.media;
                                    if (t) {
                                        var e = t.textTracks;
                                        if (e)
                                            for (var r = 0; r < e.length; r++) M(e[r])
                                    }
                                }, e.onSubtitleTracksUpdated = function(t, e) {
                                    var r = this;
                                    this.textTracks = [];
                                    var i = e.subtitleTracks || [],
                                        n = i.some((function(t) {
                                            return t.textCodec === fr
                                        }));
                                    if (this.config.enableWebVTT || n && this.config.enableIMSC1) {
                                        var a = this.tracks && i && this.tracks.length === i.length;
                                        if (this.tracks = i || [], this.config.renderTextTracksNatively) {
                                            var o = this.media ? this.media.textTracks : [];
                                            this.tracks.forEach((function(t, e) {
                                                var i;
                                                if (e < o.length) {
                                                    for (var n = null, a = 0; a < o.length; a++)
                                                        if (Dr(o[a], t)) {
                                                            n = o[a];
                                                            break
                                                        } n && (i = n)
                                                }
                                                if (i) M(i);
                                                else {
                                                    var s = r._captionsOrSubtitlesFromCharacteristics(t);
                                                    (i = r.createTextTrack(s, t.name, t.lang)) && (i.mode = "disabled")
                                                }
                                                i && (i.groupId = t.groupId, r.textTracks.push(i))
                                            }))
                                        } else if (!a && this.tracks && this.tracks.length) {
                                            var l = this.tracks.map((function(t) {
                                                return {
                                                    label: t.name,
                                                    kind: t.type.toLowerCase(),
                                                    default: t.default,
                                                    subtitleTrack: t
                                                }
                                            }));
                                            this.hls.trigger(s.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                                tracks: l
                                            })
                                        }
                                    }
                                }, e._captionsOrSubtitlesFromCharacteristics = function(t) {
                                    var e;
                                    if (null !== (e = t.attrs) && void 0 !== e && e.CHARACTERISTICS) {
                                        var r = /transcribes-spoken-dialog/gi.test(t.attrs.CHARACTERISTICS),
                                            i = /describes-music-and-sound/gi.test(t.attrs.CHARACTERISTICS);
                                        if (r && i) return "captions"
                                    }
                                    return "subtitles"
                                }, e.onManifestLoaded = function(t, e) {
                                    var r = this;
                                    this.config.enableCEA708Captions && e.captions && e.captions.forEach((function(t) {
                                        var e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId);
                                        if (e) {
                                            var i = "textTrack" + e[1],
                                                n = r.captionsProperties[i];
                                            n && (n.label = t.name, t.lang && (n.languageCode = t.lang), n.media = t)
                                        }
                                    }))
                                }, e.closedCaptionsForLevel = function(t) {
                                    var e = this.hls.levels[t.level];
                                    return null == e ? void 0 : e.attrs["CLOSED-CAPTIONS"]
                                }, e.onFragLoading = function(t, e) {
                                    var r = this.cea608Parser1,
                                        i = this.cea608Parser2,
                                        n = this.lastSn,
                                        a = this.lastPartIndex;
                                    if (this.enabled && r && i && e.frag.type === C.PlaylistLevelType.MAIN) {
                                        var s, o, l = e.frag.sn,
                                            u = null != (s = null == e || null === (o = e.part) || void 0 === o ? void 0 : o.index) ? s : -1;
                                        l === n + 1 || l === n && u === a + 1 || (r.reset(), i.reset()), this.lastSn = l, this.lastPartIndex = u
                                    }
                                }, e.onFragLoaded = function(t, e) {
                                    var r = e.frag,
                                        i = e.payload,
                                        n = this.initPTS,
                                        o = this.unparsedVttFrags;
                                    if (r.type === C.PlaylistLevelType.SUBTITLE)
                                        if (i.byteLength) {
                                            if (!(0, a.isFiniteNumber)(n[r.cc])) return o.push(e), void(n.length && this.hls.trigger(s.Events.SUBTITLE_FRAG_PROCESSED, {
                                                success: !1,
                                                frag: r,
                                                error: new Error("Missing initial subtitle PTS")
                                            }));
                                            var l = r.decryptdata,
                                                u = "stats" in e;
                                            if (null == l || null == l.key || "AES-128" !== l.method || u) {
                                                var h = this.tracks[r.level],
                                                    d = this.vttCCs;
                                                d[r.cc] || (d[r.cc] = {
                                                    start: r.start,
                                                    prevCC: this.prevCC,
                                                    new: !0
                                                }, this.prevCC = r.cc), h && h.textCodec === fr ? this._parseIMSC1(r, i) : this._parseVTTs(r, i, d)
                                            }
                                        } else this.hls.trigger(s.Events.SUBTITLE_FRAG_PROCESSED, {
                                            success: !1,
                                            frag: r,
                                            error: new Error("Empty subtitle payload")
                                        })
                                }, e._parseIMSC1 = function(t, e) {
                                    var r = this,
                                        i = this.hls;
                                    mr(e, this.initPTS[t.cc], this.timescale[t.cc], (function(e) {
                                        r._appendCues(e, t.level), i.trigger(s.Events.SUBTITLE_FRAG_PROCESSED, {
                                            success: !0,
                                            frag: t
                                        })
                                    }), (function(e) {
                                        l.logger.log("Failed to parse IMSC1: " + e), i.trigger(s.Events.SUBTITLE_FRAG_PROCESSED, {
                                            success: !1,
                                            frag: t,
                                            error: e
                                        })
                                    }))
                                }, e._parseVTTs = function(t, e, r) {
                                    var i, n = this,
                                        o = this.hls;
                                    ! function(t, e, r, i, n, s, o, l) {
                                        var u, h = new ar,
                                            d = (0, U.utf8ArrayToStr)(new Uint8Array(t)).trim().replace(lr, "\n").split("\n"),
                                            c = [],
                                            f = (0, sr.toMpegTsClockFromTimescale)(e, r),
                                            g = "00:00.000",
                                            v = 0,
                                            p = 0,
                                            m = !0;
                                        h.oncue = function(t) {
                                            var e = i[n],
                                                r = i.ccOffset,
                                                a = (v - f) / 9e4;
                                            null != e && e.new && (void 0 !== p ? r = i.ccOffset = e.start : function(t, e, r) {
                                                var i = t[e],
                                                    n = t[i.prevCC];
                                                if (!n || !n.new && i.new) return t.ccOffset = t.presentationOffset = i.start, void(i.new = !1);
                                                for (; null !== (a = n) && void 0 !== a && a.new;) {
                                                    var a;
                                                    t.ccOffset += i.start - n.start, i.new = !1, n = t[(i = n).prevCC]
                                                }
                                                t.presentationOffset = r
                                            }(i, n, a)), a && (r = a - i.presentationOffset);
                                            var o = t.endTime - t.startTime,
                                                l = (0, or.normalizePts)(9e4 * (t.startTime + r - p), 9e4 * s) / 9e4;
                                            t.startTime = Math.max(l, 0), t.endTime = Math.max(l + o, 0);
                                            var u = t.text.trim();
                                            t.text = decodeURIComponent(encodeURIComponent(u)), t.id || (t.id = dr(t.startTime, t.endTime, u)), t.endTime > 0 && c.push(t)
                                        }, h.onparsingerror = function(t) {
                                            u = t
                                        }, h.onflush = function() {
                                            u ? l(u) : o(c)
                                        }, d.forEach((function(t) {
                                            if (m) {
                                                if (ur(t, "X-TIMESTAMP-MAP=")) {
                                                    m = !1, t.slice(16).split(",").forEach((function(t) {
                                                        ur(t, "LOCAL:") ? g = t.slice(6) : ur(t, "MPEGTS:") && (v = parseInt(t.slice(7)))
                                                    }));
                                                    try {
                                                        p = function(t) {
                                                            var e = parseInt(t.slice(-3)),
                                                                r = parseInt(t.slice(-6, -4)),
                                                                i = parseInt(t.slice(-9, -7)),
                                                                n = t.length > 9 ? parseInt(t.substring(0, t.indexOf(":"))) : 0;
                                                            if (!((0, a.isFiniteNumber)(e) && (0, a.isFiniteNumber)(r) && (0, a.isFiniteNumber)(i) && (0, a.isFiniteNumber)(n))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t);
                                                            return e += 1e3 * r, (e += 6e4 * i) + 36e5 * n
                                                        }(g) / 1e3
                                                    } catch (t) {
                                                        u = t
                                                    }
                                                    return
                                                }
                                                "" === t && (m = !1)
                                            }
                                            h.parse(t + "\n")
                                        })), h.flush()
                                    }(null !== (i = t.initSegment) && void 0 !== i && i.data ? (0, u.appendUint8Array)(t.initSegment.data, new Uint8Array(e)) : e, this.initPTS[t.cc], this.timescale[t.cc], r, t.cc, t.start, (function(e) {
                                        n._appendCues(e, t.level), o.trigger(s.Events.SUBTITLE_FRAG_PROCESSED, {
                                            success: !0,
                                            frag: t
                                        })
                                    }), (function(r) {
                                        n._fallbackToIMSC1(t, e), l.logger.log("Failed to parse VTT cue: " + r), o.trigger(s.Events.SUBTITLE_FRAG_PROCESSED, {
                                            success: !1,
                                            frag: t,
                                            error: r
                                        })
                                    }))
                                }, e._fallbackToIMSC1 = function(t, e) {
                                    var r = this,
                                        i = this.tracks[t.level];
                                    i.textCodec || mr(e, this.initPTS[t.cc], this.timescale[t.cc], (function() {
                                        i.textCodec = fr, r._parseIMSC1(t, e)
                                    }), (function() {
                                        i.textCodec = "wvtt"
                                    }))
                                }, e._appendCues = function(t, e) {
                                    var r = this.hls;
                                    if (this.config.renderTextTracksNatively) {
                                        var i = this.textTracks[e];
                                        if (!i || "disabled" === i.mode) return;
                                        t.forEach((function(t) {
                                            return F(i, t)
                                        }))
                                    } else {
                                        var n = this.tracks[e];
                                        if (!n) return;
                                        var a = n.default ? "default" : "subtitles" + e;
                                        r.trigger(s.Events.CUES_PARSED, {
                                            type: "subtitles",
                                            cues: t,
                                            track: a
                                        })
                                    }
                                }, e.onFragDecrypted = function(t, e) {
                                    var r = e.frag;
                                    if (r.type === C.PlaylistLevelType.SUBTITLE) {
                                        if (!(0, a.isFiniteNumber)(this.initPTS[r.cc])) return void this.unparsedVttFrags.push(e);
                                        this.onFragLoaded(s.Events.FRAG_LOADED, e)
                                    }
                                }, e.onSubtitleTracksCleared = function() {
                                    this.tracks = [], this.captionsTracks = {}
                                }, e.onFragParsingUserdata = function(t, e) {
                                    var r = this.cea608Parser1,
                                        i = this.cea608Parser2;
                                    if (this.enabled && r && i) {
                                        var n = e.frag,
                                            a = e.samples;
                                        if (n.type !== C.PlaylistLevelType.MAIN || "NONE" !== this.closedCaptionsForLevel(n))
                                            for (var s = 0; s < a.length; s++) {
                                                var o = a[s].bytes;
                                                if (o) {
                                                    var l = this.extractCea608Data(o);
                                                    r.addData(a[s].pts, l[0]), i.addData(a[s].pts, l[1])
                                                }
                                            }
                                    }
                                }, e.onBufferFlushing = function(t, e) {
                                    var r = e.startOffset,
                                        i = e.endOffset,
                                        n = e.endOffsetSubtitles,
                                        a = e.type,
                                        s = this.media;
                                    if (s && !(s.currentTime < i)) {
                                        if (!a || "video" === a) {
                                            var o = this.captionsTracks;
                                            Object.keys(o).forEach((function(t) {
                                                return N(o[t], r, i)
                                            }))
                                        }
                                        if (this.config.renderTextTracksNatively && 0 === r && void 0 !== n) {
                                            var l = this.textTracks;
                                            Object.keys(l).forEach((function(t) {
                                                return N(l[t], r, n)
                                            }))
                                        }
                                    }
                                }, e.extractCea608Data = function(t) {
                                    for (var e = [
                                        [],
                                        []
                                    ], r = 31 & t[0], i = 2, n = 0; n < r; n++) {
                                        var a = t[i++],
                                            s = 127 & t[i++],
                                            o = 127 & t[i++];
                                        if ((0 !== s || 0 !== o) && 0 != (4 & a)) {
                                            var l = 3 & a;
                                            0 !== l && 1 !== l || (e[l].push(s), e[l].push(o))
                                        }
                                    }
                                    return e
                                }, t
                            }();

                            function Dr(t, e) {
                                return t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
                            }
                            const Rr = function() {
                                    function t(t) {
                                        this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, this.streamController = void 0, this.clientRect = void 0, this.hls = t, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
                                    }
                                    var e, r, i = t.prototype;
                                    return i.setStreamController = function(t) {
                                        this.streamController = t
                                    }, i.destroy = function() {
                                        this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
                                    }, i.registerListeners = function() {
                                        var t = this.hls;
                                        t.on(s.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.on(s.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
                                    }, i.unregisterListener = function() {
                                        var t = this.hls;
                                        t.off(s.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.off(s.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
                                    }, i.onFpsDropLevelCapping = function(e, r) {
                                        t.isLevelAllowed(r.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(r.droppedLevel)
                                    }, i.onMediaAttaching = function(t, e) {
                                        this.media = e.media instanceof HTMLVideoElement ? e.media : null
                                    }, i.onManifestParsed = function(t, e) {
                                        var r = this.hls;
                                        this.restrictedLevels = [], this.firstLevel = e.firstLevel, r.config.capLevelToPlayerSize && e.video && this.startCapping()
                                    }, i.onBufferCodecs = function(t, e) {
                                        this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
                                    }, i.onMediaDetaching = function() {
                                        this.stopCapping()
                                    }, i.detectPlayerSize = function() {
                                        if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                                            var t = this.hls.levels;
                                            if (t.length) {
                                                var e = this.hls;
                                                e.autoLevelCapping = this.getMaxLevel(t.length - 1), e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
                                            }
                                        }
                                    }, i.getMaxLevel = function(e) {
                                        var r = this,
                                            i = this.hls.levels;
                                        if (!i.length) return -1;
                                        var n = i.filter((function(i, n) {
                                            return t.isLevelAllowed(n, r.restrictedLevels) && n <= e
                                        }));
                                        return this.clientRect = null, t.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
                                    }, i.startCapping = function() {
                                        this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                                    }, i.stopCapping = function() {
                                        this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0)
                                    }, i.getDimensions = function() {
                                        if (this.clientRect) return this.clientRect;
                                        var t = this.media,
                                            e = {
                                                width: 0,
                                                height: 0
                                            };
                                        if (t) {
                                            var r = t.getBoundingClientRect();
                                            e.width = r.width, e.height = r.height, e.width || e.height || (e.width = r.right - r.left || t.width || 0, e.height = r.bottom - r.top || t.height || 0)
                                        }
                                        return this.clientRect = e, e
                                    }, t.isLevelAllowed = function(t, e) {
                                        return void 0 === e && (e = []), -1 === e.indexOf(t)
                                    }, t.getMaxLevelByMediaSize = function(t, e, r) {
                                        if (!t || !t.length) return -1;
                                        for (var i, n, a = t.length - 1, s = 0; s < t.length; s += 1) {
                                            var o = t[s];
                                            if ((o.width >= e || o.height >= r) && (i = o, !(n = t[s + 1]) || i.width !== n.width || i.height !== n.height)) {
                                                a = s;
                                                break
                                            }
                                        }
                                        return a
                                    }, e = t, (r = [{
                                        key: "mediaWidth",
                                        get: function() {
                                            return this.getDimensions().width * this.contentScaleFactor
                                        }
                                    }, {
                                        key: "mediaHeight",
                                        get: function() {
                                            return this.getDimensions().height * this.contentScaleFactor
                                        }
                                    }, {
                                        key: "contentScaleFactor",
                                        get: function() {
                                            var t = 1;
                                            if (!this.hls.config.ignoreDevicePixelRatio) try {
                                                t = self.devicePixelRatio
                                            } catch (t) {}
                                            return t
                                        }
                                    }]) && function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(e.prototype, r), Object.defineProperty(e, "prototype", {
                                        writable: !1
                                    }), t
                                }(),
                                Ar = function() {
                                    function t(t) {
                                        this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t, this.registerListeners()
                                    }
                                    var e = t.prototype;
                                    return e.setStreamController = function(t) {
                                        this.streamController = t
                                    }, e.registerListeners = function() {
                                        this.hls.on(s.Events.MEDIA_ATTACHING, this.onMediaAttaching, this)
                                    }, e.unregisterListeners = function() {
                                        this.hls.off(s.Events.MEDIA_ATTACHING, this.onMediaAttaching)
                                    }, e.destroy = function() {
                                        this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null
                                    }, e.onMediaAttaching = function(t, e) {
                                        var r = this.hls.config;
                                        if (r.capLevelOnFPSDrop) {
                                            var i = e.media instanceof self.HTMLVideoElement ? e.media : null;
                                            this.media = i, i && "function" == typeof i.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), r.fpsDroppedMonitoringPeriod)
                                        }
                                    }, e.checkFPS = function(t, e, r) {
                                        var i = performance.now();
                                        if (e) {
                                            if (this.lastTime) {
                                                var n = i - this.lastTime,
                                                    a = r - this.lastDroppedFrames,
                                                    o = e - this.lastDecodedFrames,
                                                    u = 1e3 * a / n,
                                                    h = this.hls;
                                                if (h.trigger(s.Events.FPS_DROP, {
                                                    currentDropped: a,
                                                    currentDecoded: o,
                                                    totalDroppedFrames: r
                                                }), u > 0 && a > h.config.fpsDroppedMonitoringThreshold * o) {
                                                    var d = h.currentLevel;
                                                    l.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (-1 === h.autoLevelCapping || h.autoLevelCapping >= d) && (d -= 1, h.trigger(s.Events.FPS_DROP_LEVEL_CAPPING, {
                                                        level: d,
                                                        droppedLevel: h.currentLevel
                                                    }), h.autoLevelCapping = d, this.streamController.nextLevelSwitch())
                                                }
                                            }
                                            this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = e
                                        }
                                    }, e.checkFPSInterval = function() {
                                        var t = this.media;
                                        if (t)
                                            if (this.isVideoPlaybackQualityAvailable) {
                                                var e = t.getVideoPlaybackQuality();
                                                this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                                            } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
                                    }, t
                                }();
                            var _r;
                            ! function(t) {
                                t.WIDEVINE = "com.widevine.alpha", t.PLAYREADY = "com.microsoft.playready"
                            }(_r || (_r = {}));
                            var Ir = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
                            const Cr = function() {
                                function t(t) {
                                    this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, this._licenseResponseCallback = void 0, this._emeEnabled = void 0, this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, this._config = void 0, this._mediaKeysList = [], this._media = null, this._hasSetMediaKeys = !1, this._requestLicenseFailureCount = 0, this.mediaKeysPromise = null, this._onMediaEncrypted = this.onMediaEncrypted.bind(this), this.hls = t, this._config = t.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, this._licenseXhrSetup = this._config.licenseXhrSetup, this._licenseResponseCallback = this._config.licenseResponseCallback, this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners()
                                }
                                var e, r, i = t.prototype;
                                return i.destroy = function() {
                                    this._unregisterListeners(), this.hls = this._onMediaEncrypted = null, this._requestMediaKeySystemAccess = null
                                }, i._registerListeners = function() {
                                    this.hls.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(s.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(s.Events.MANIFEST_PARSED, this.onManifestParsed, this)
                                }, i._unregisterListeners = function() {
                                    this.hls.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(s.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(s.Events.MANIFEST_PARSED, this.onManifestParsed, this)
                                }, i.getLicenseServerUrl = function(t) {
                                    switch (t) {
                                        case _r.WIDEVINE:
                                            if (!this._widevineLicenseUrl) break;
                                            return this._widevineLicenseUrl
                                    }
                                    throw new Error('no license server URL configured for key-system "' + t + '"')
                                }, i._attemptKeySystemAccess = function(t, e, r) {
                                    var i = this,
                                        n = function(t, e, r, i) {
                                            if (t === _r.WIDEVINE) return function(t, e, r) {
                                                var i = {
                                                    audioCapabilities: [],
                                                    videoCapabilities: []
                                                };
                                                return t.forEach((function(t) {
                                                    i.audioCapabilities.push({
                                                        contentType: 'audio/mp4; codecs="' + t + '"',
                                                        robustness: r.audioRobustness || ""
                                                    })
                                                })), e.forEach((function(t) {
                                                    i.videoCapabilities.push({
                                                        contentType: 'video/mp4; codecs="' + t + '"',
                                                        robustness: r.videoRobustness || ""
                                                    })
                                                })), [i]
                                            }(e, r, i);
                                            throw new Error("Unknown key-system: " + t)
                                        }(t, e, r, this._drmSystemOptions);
                                    l.logger.log("Requesting encrypted media key-system access");
                                    var a = this.requestMediaKeySystemAccess(t, n);
                                    this.mediaKeysPromise = a.then((function(e) {
                                        return i._onMediaKeySystemAccessObtained(t, e)
                                    })), a.catch((function(e) {
                                        l.logger.error('Failed to obtain key-system "' + t + '" access:', e)
                                    }))
                                }, i._onMediaKeySystemAccessObtained = function(t, e) {
                                    var r = this;
                                    l.logger.log('Access for key-system "' + t + '" obtained');
                                    var i = {
                                        mediaKeysSessionInitialized: !1,
                                        mediaKeySystemAccess: e,
                                        mediaKeySystemDomain: t
                                    };
                                    this._mediaKeysList.push(i);
                                    var n = Promise.resolve().then((function() {
                                        return e.createMediaKeys()
                                    })).then((function(e) {
                                        return i.mediaKeys = e, l.logger.log('Media-keys created for key-system "' + t + '"'), r._onMediaKeysCreated(), e
                                    }));
                                    return n.catch((function(t) {
                                        l.logger.error("Failed to create media-keys:", t)
                                    })), n
                                }, i._onMediaKeysCreated = function() {
                                    var t = this;
                                    this._mediaKeysList.forEach((function(e) {
                                        e.mediaKeysSession || (e.mediaKeysSession = e.mediaKeys.createSession(), t._onNewMediaKeySession(e.mediaKeysSession))
                                    }))
                                }, i._onNewMediaKeySession = function(t) {
                                    var e = this;
                                    l.logger.log("New key-system session " + t.sessionId), t.addEventListener("message", (function(r) {
                                        e._onKeySessionMessage(t, r.message)
                                    }), !1)
                                }, i._onKeySessionMessage = function(t, e) {
                                    l.logger.log("Got EME message event, creating license request"), this._requestLicense(e, (function(e) {
                                        l.logger.log("Received license data (length: " + (e ? e.byteLength : e) + "), updating key-session"), t.update(e).catch((function(t) {
                                            l.logger.warn("Updating key-session failed: " + t)
                                        }))
                                    }))
                                }, i.onMediaEncrypted = function(t) {
                                    var e = this;
                                    if (l.logger.log('Media is encrypted using "' + t.initDataType + '" init data type'), !this.mediaKeysPromise) return l.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), void this.hls.trigger(s.Events.ERROR, {
                                        type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                        details: o.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                        fatal: !0
                                    });
                                    var r = function(r) {
                                        e._media && (e._attemptSetMediaKeys(r), e._generateRequestWithPreferredKeySession(t.initDataType, t.initData))
                                    };
                                    this.mediaKeysPromise.then(r).catch(r)
                                }, i._attemptSetMediaKeys = function(t) {
                                    if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
                                    if (!this._hasSetMediaKeys) {
                                        var e = this._mediaKeysList[0];
                                        if (!e || !e.mediaKeys) return l.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(s.Events.ERROR, {
                                            type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                            details: o.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                            fatal: !0
                                        });
                                        l.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = !0
                                    }
                                }, i._generateRequestWithPreferredKeySession = function(t, e) {
                                    var r = this,
                                        i = this._mediaKeysList[0];
                                    if (!i) return l.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(s.Events.ERROR, {
                                        type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                        details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                        fatal: !0
                                    });
                                    if (i.mediaKeysSessionInitialized) l.logger.warn("Key-Session already initialized but requested again");
                                    else {
                                        var n = i.mediaKeysSession;
                                        if (!n) return l.logger.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger(s.Events.ERROR, {
                                            type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                            details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                            fatal: !0
                                        });
                                        if (!e) return l.logger.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(s.Events.ERROR, {
                                            type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                            details: o.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                                            fatal: !0
                                        });
                                        l.logger.log('Generating key-session request for "' + t + '" init data type'), i.mediaKeysSessionInitialized = !0, n.generateRequest(t, e).then((function() {
                                            l.logger.debug("Key-session generation succeeded")
                                        })).catch((function(t) {
                                            l.logger.error("Error generating key-session request:", t), r.hls.trigger(s.Events.ERROR, {
                                                type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                                details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                                fatal: !1
                                            })
                                        }))
                                    }
                                }, i._createLicenseXhr = function(t, e, r) {
                                    var i = new XMLHttpRequest;
                                    i.responseType = "arraybuffer", i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, t, e, r);
                                    var n = this._licenseXhrSetup;
                                    if (n) try {
                                        n.call(this.hls, i, t), n = void 0
                                    } catch (t) {
                                        l.logger.error(t)
                                    }
                                    try {
                                        i.readyState || i.open("POST", t, !0), n && n.call(this.hls, i, t)
                                    } catch (t) {
                                        throw new Error("issue setting up KeySystem license XHR " + t)
                                    }
                                    return i
                                }, i._onLicenseRequestReadyStageChange = function(t, e, r, i) {
                                    if (4 === t.readyState)
                                        if (200 === t.status) {
                                            this._requestLicenseFailureCount = 0, l.logger.log("License request succeeded");
                                            var n = t.response,
                                                a = this._licenseResponseCallback;
                                            if (a) try {
                                                n = a.call(this.hls, t, e)
                                            } catch (t) {
                                                l.logger.error(t)
                                            }
                                            i(n)
                                        } else {
                                            if (l.logger.error("License Request XHR failed (" + e + "). Status: " + t.status + " (" + t.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3) return void this.hls.trigger(s.Events.ERROR, {
                                                type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                                details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                                fatal: !0
                                            });
                                            var u = 3 - this._requestLicenseFailureCount + 1;
                                            l.logger.warn("Retrying license request, " + u + " attempts left"), this._requestLicense(r, i)
                                        }
                                }, i._generateLicenseRequestChallenge = function(t, e) {
                                    if (t.mediaKeySystemDomain === _r.WIDEVINE) return e;
                                    throw new Error("unsupported key-system: " + t.mediaKeySystemDomain)
                                }, i._requestLicense = function(t, e) {
                                    l.logger.log("Requesting content license for key-system");
                                    var r = this._mediaKeysList[0];
                                    if (!r) return l.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(s.Events.ERROR, {
                                        type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                        details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                        fatal: !0
                                    });
                                    try {
                                        var i = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                                            n = this._createLicenseXhr(i, t, e);
                                        l.logger.log("Sending license request to URL: " + i);
                                        var a = this._generateLicenseRequestChallenge(r, t);
                                        n.send(a)
                                    } catch (t) {
                                        l.logger.error("Failure requesting DRM license: " + t), this.hls.trigger(s.Events.ERROR, {
                                            type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                                            details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                            fatal: !0
                                        })
                                    }
                                }, i.onMediaAttached = function(t, e) {
                                    if (this._emeEnabled) {
                                        var r = e.media;
                                        this._media = r, r.addEventListener("encrypted", this._onMediaEncrypted)
                                    }
                                }, i.onMediaDetached = function() {
                                    var t = this._media,
                                        e = this._mediaKeysList;
                                    t && (t.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(e.map((function(t) {
                                        if (t.mediaKeysSession) return t.mediaKeysSession.close().catch((function() {}))
                                    }))).then((function() {
                                        return t.setMediaKeys(null)
                                    })).catch((function() {})))
                                }, i.onManifestParsed = function(t, e) {
                                    if (this._emeEnabled) {
                                        var r = e.levels.map((function(t) {
                                                return t.audioCodec
                                            })).filter((function(t) {
                                                return !!t
                                            })),
                                            i = e.levels.map((function(t) {
                                                return t.videoCodec
                                            })).filter((function(t) {
                                                return !!t
                                            }));
                                        this._attemptKeySystemAccess(_r.WIDEVINE, r, i)
                                    }
                                }, e = t, (r = [{
                                    key: "requestMediaKeySystemAccess",
                                    get: function() {
                                        if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
                                        return this._requestMediaKeySystemAccess
                                    }
                                }]) && function(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                    }
                                }(e.prototype, r), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t
                            }();
                            var wr, Or, xr;

                            function Pr(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                }
                            }

                            function Fr(t, e, r) {
                                return e && Pr(t.prototype, e), r && Pr(t, r), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), t
                            }

                            function Mr(t, e) {
                                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (r) return (r = r.call(t)).next.bind(r);
                                if (Array.isArray(t) || (r = function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return Nr(t, e);
                                        var r = Object.prototype.toString.call(t).slice(8, -1);
                                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Nr(t, e) : void 0
                                    }
                                }(t)) || e && t && "number" == typeof t.length) {
                                    r && (t = r);
                                    var i = 0;
                                    return function() {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }

                            function Nr(t, e) {
                                (null == e || e > t.length) && (e = t.length);
                                for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
                                return i
                            }

                            function Ur() {
                                return Ur = Object.assign ? Object.assign.bind() : function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                    }
                                    return t
                                }, Ur.apply(this, arguments)
                            }! function(t) {
                                t.MANIFEST = "m", t.AUDIO = "a", t.VIDEO = "v", t.MUXED = "av", t.INIT = "i", t.CAPTION = "c", t.TIMED_TEXT = "tt", t.KEY = "k", t.OTHER = "o"
                            }(wr || (wr = {})),
                                function(t) {
                                    t.DASH = "d", t.HLS = "h", t.SMOOTH = "s", t.OTHER = "o"
                                }(Or || (Or = {})),
                                function(t) {
                                    t.VOD = "v", t.LIVE = "l"
                                }(xr || (xr = {}));
                            var Br = function() {
                                    function t(e) {
                                        var r = this;
                                        this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function() {
                                            r.initialized && (r.starved = !0), r.buffering = !0
                                        }, this.onPlaying = function() {
                                            r.initialized || (r.initialized = !0), r.buffering = !1
                                        }, this.applyPlaylistData = function(t) {
                                            try {
                                                r.apply(t, {
                                                    ot: wr.MANIFEST,
                                                    su: !r.initialized
                                                })
                                            } catch (t) {
                                                l.logger.warn("Could not generate manifest CMCD data.", t)
                                            }
                                        }, this.applyFragmentData = function(t) {
                                            try {
                                                var e = t.frag,
                                                    i = r.hls.levels[e.level],
                                                    n = r.getObjectType(e),
                                                    a = {
                                                        d: 1e3 * e.duration,
                                                        ot: n
                                                    };
                                                n !== wr.VIDEO && n !== wr.AUDIO && n != wr.MUXED || (a.br = i.bitrate / 1e3, a.tb = r.getTopBandwidth(n) / 1e3, a.bl = r.getBufferLength(n)), r.apply(t, a)
                                            } catch (t) {
                                                l.logger.warn("Could not generate segment CMCD data.", t)
                                            }
                                        }, this.hls = e;
                                        var i = this.config = e.config,
                                            n = i.cmcd;
                                        null != n && (i.pLoader = this.createPlaylistLoader(), i.fLoader = this.createFragmentLoader(), this.sid = n.sessionId || t.uuid(), this.cid = n.contentId, this.useHeaders = !0 === n.useHeaders, this.registerListeners())
                                    }
                                    var e = t.prototype;
                                    return e.registerListeners = function() {
                                        var t = this.hls;
                                        t.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.Events.MEDIA_DETACHED, this.onMediaDetached, this), t.on(s.Events.BUFFER_CREATED, this.onBufferCreated, this)
                                    }, e.unregisterListeners = function() {
                                        var t = this.hls;
                                        t.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.Events.MEDIA_DETACHED, this.onMediaDetached, this), t.off(s.Events.BUFFER_CREATED, this.onBufferCreated, this), this.onMediaDetached()
                                    }, e.destroy = function() {
                                        this.unregisterListeners(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null
                                    }, e.onMediaAttached = function(t, e) {
                                        this.media = e.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying)
                                    }, e.onMediaDetached = function() {
                                        this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
                                    }, e.onBufferCreated = function(t, e) {
                                        var r, i;
                                        this.audioBuffer = null === (r = e.tracks.audio) || void 0 === r ? void 0 : r.buffer, this.videoBuffer = null === (i = e.tracks.video) || void 0 === i ? void 0 : i.buffer
                                    }, e.createData = function() {
                                        var t;
                                        return {
                                            v: 1,
                                            sf: Or.HLS,
                                            sid: this.sid,
                                            cid: this.cid,
                                            pr: null === (t = this.media) || void 0 === t ? void 0 : t.playbackRate,
                                            mtp: this.hls.bandwidthEstimate / 1e3
                                        }
                                    }, e.apply = function(e, r) {
                                        void 0 === r && (r = {}), Ur(r, this.createData());
                                        var i = r.ot === wr.INIT || r.ot === wr.VIDEO || r.ot === wr.MUXED;
                                        if (this.starved && i && (r.bs = !0, r.su = !0, this.starved = !1), null == r.su && (r.su = this.buffering), this.useHeaders) {
                                            var n = t.toHeaders(r);
                                            if (!Object.keys(n).length) return;
                                            e.headers || (e.headers = {}), Ur(e.headers, n)
                                        } else {
                                            var a = t.toQuery(r);
                                            if (!a) return;
                                            e.url = t.appendQueryToUri(e.url, a)
                                        }
                                    }, e.getObjectType = function(t) {
                                        var e = t.type;
                                        return "subtitle" === e ? wr.TIMED_TEXT : "initSegment" === t.sn ? wr.INIT : "audio" === e ? wr.AUDIO : "main" === e ? this.hls.audioTracks.length ? wr.VIDEO : wr.MUXED : void 0
                                    }, e.getTopBandwidth = function(t) {
                                        var e, r = 0,
                                            i = this.hls;
                                        if (t === wr.AUDIO) e = i.audioTracks;
                                        else {
                                            var n = i.maxAutoLevel,
                                                a = n > -1 ? n + 1 : i.levels.length;
                                            e = i.levels.slice(0, a)
                                        }
                                        for (var s, o = Mr(e); !(s = o()).done;) {
                                            var l = s.value;
                                            l.bitrate > r && (r = l.bitrate)
                                        }
                                        return r > 0 ? r : NaN
                                    }, e.getBufferLength = function(t) {
                                        var e = this.hls.media,
                                            r = t === wr.AUDIO ? this.audioBuffer : this.videoBuffer;
                                        return r && e ? 1e3 * ct.bufferInfo(r, e.currentTime, this.config.maxBufferHole).len : NaN
                                    }, e.createPlaylistLoader = function() {
                                        var t = this.config.pLoader,
                                            e = this.applyPlaylistData,
                                            r = t || this.config.loader;
                                        return function() {
                                            function t(t) {
                                                this.loader = void 0, this.loader = new r(t)
                                            }
                                            var i = t.prototype;
                                            return i.destroy = function() {
                                                this.loader.destroy()
                                            }, i.abort = function() {
                                                this.loader.abort()
                                            }, i.load = function(t, r, i) {
                                                e(t), this.loader.load(t, r, i)
                                            }, Fr(t, [{
                                                key: "stats",
                                                get: function() {
                                                    return this.loader.stats
                                                }
                                            }, {
                                                key: "context",
                                                get: function() {
                                                    return this.loader.context
                                                }
                                            }]), t
                                        }()
                                    }, e.createFragmentLoader = function() {
                                        var t = this.config.fLoader,
                                            e = this.applyFragmentData,
                                            r = t || this.config.loader;
                                        return function() {
                                            function t(t) {
                                                this.loader = void 0, this.loader = new r(t)
                                            }
                                            var i = t.prototype;
                                            return i.destroy = function() {
                                                this.loader.destroy()
                                            }, i.abort = function() {
                                                this.loader.abort()
                                            }, i.load = function(t, r, i) {
                                                e(t), this.loader.load(t, r, i)
                                            }, Fr(t, [{
                                                key: "stats",
                                                get: function() {
                                                    return this.loader.stats
                                                }
                                            }, {
                                                key: "context",
                                                get: function() {
                                                    return this.loader.context
                                                }
                                            }]), t
                                        }()
                                    }, t.uuid = function() {
                                        var t = URL.createObjectURL(new Blob),
                                            e = t.toString();
                                        return URL.revokeObjectURL(t), e.slice(e.lastIndexOf("/") + 1)
                                    }, t.serialize = function(t) {
                                        for (var e, r = [], i = function(t) {
                                            return !Number.isNaN(t) && null != t && "" !== t && !1 !== t
                                        }, n = function(t) {
                                            return Math.round(t)
                                        }, a = function(t) {
                                            return 100 * n(t / 100)
                                        }, s = {
                                            br: n,
                                            d: n,
                                            bl: a,
                                            dl: a,
                                            mtp: a,
                                            nor: function(t) {
                                                return encodeURIComponent(t)
                                            },
                                            rtp: a,
                                            tb: n
                                        }, o = Mr(Object.keys(t || {}).sort()); !(e = o()).done;) {
                                            var l = e.value,
                                                u = t[l];
                                            if (i(u) && !("v" === l && 1 === u || "pr" == l && 1 === u)) {
                                                var h = s[l];
                                                h && (u = h(u));
                                                var d, c = typeof u;
                                                d = "ot" === l || "sf" === l || "st" === l ? l + "=" + u : "boolean" === c ? l : "number" === c ? l + "=" + u : l + "=" + JSON.stringify(u), r.push(d)
                                            }
                                        }
                                        return r.join(",")
                                    }, t.toHeaders = function(e) {
                                        for (var r = {}, i = ["Object", "Request", "Session", "Status"], n = [{}, {}, {}, {}], a = {
                                            br: 0,
                                            d: 0,
                                            ot: 0,
                                            tb: 0,
                                            bl: 1,
                                            dl: 1,
                                            mtp: 1,
                                            nor: 1,
                                            nrr: 1,
                                            su: 1,
                                            cid: 2,
                                            pr: 2,
                                            sf: 2,
                                            sid: 2,
                                            st: 2,
                                            v: 2,
                                            bs: 3,
                                            rtp: 3
                                        }, s = 0, o = Object.keys(e); s < o.length; s++) {
                                            var l = o[s];
                                            n[null != a[l] ? a[l] : 1][l] = e[l]
                                        }
                                        for (var u = 0; u < n.length; u++) {
                                            var h = t.serialize(n[u]);
                                            h && (r["CMCD-" + i[u]] = h)
                                        }
                                        return r
                                    }, t.toQuery = function(e) {
                                        return "CMCD=" + encodeURIComponent(t.serialize(e))
                                    }, t.appendQueryToUri = function(t, e) {
                                        if (!e) return t;
                                        var r = t.includes("?") ? "&" : "?";
                                        return "" + t + r + e
                                    }, t
                                }(),
                                Gr = r(408),
                                jr = /^age:\s*[\d.]+\s*$/m;
                            const Hr = function() {
                                function t(t) {
                                    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = t ? t.xhrSetup : null, this.stats = new Gr.LoadStats, this.retryDelay = 0
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null
                                }, e.abortInternal = function() {
                                    var t = this.loader;
                                    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t && (t.onreadystatechange = null, t.onprogress = null, 4 !== t.readyState && (this.stats.aborted = !0, t.abort()))
                                }, e.abort = function() {
                                    var t;
                                    this.abortInternal(), null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
                                }, e.load = function(t, e, r) {
                                    if (this.stats.loading.start) throw new Error("Loader can only be used once.");
                                    this.stats.loading.start = self.performance.now(), this.context = t, this.config = e, this.callbacks = r, this.retryDelay = e.retryDelay, this.loadInternal()
                                }, e.loadInternal = function() {
                                    var t = this.config,
                                        e = this.context;
                                    if (t) {
                                        var r = this.loader = new self.XMLHttpRequest,
                                            i = this.stats;
                                        i.loading.first = 0, i.loaded = 0;
                                        var n = this.xhrSetup;
                                        try {
                                            if (n) try {
                                                n(r, e.url)
                                            } catch (t) {
                                                r.open("GET", e.url, !0), n(r, e.url)
                                            }
                                            r.readyState || r.open("GET", e.url, !0);
                                            var a = this.context.headers;
                                            if (a)
                                                for (var s in a) r.setRequestHeader(s, a[s])
                                        } catch (t) {
                                            return void this.callbacks.onError({
                                                code: r.status,
                                                text: t.message
                                            }, e, r)
                                        }
                                        e.rangeEnd && r.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), r.onreadystatechange = this.readystatechange.bind(this), r.onprogress = this.loadprogress.bind(this), r.responseType = e.responseType, self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), t.timeout), r.send()
                                    }
                                }, e.readystatechange = function() {
                                    var t = this.context,
                                        e = this.loader,
                                        r = this.stats;
                                    if (t && e) {
                                        var i = e.readyState,
                                            n = this.config;
                                        if (!r.aborted && i >= 2)
                                            if (self.clearTimeout(this.requestTimeout), 0 === r.loading.first && (r.loading.first = Math.max(self.performance.now(), r.loading.start)), 4 === i) {
                                                e.onreadystatechange = null, e.onprogress = null;
                                                var a = e.status,
                                                    s = "arraybuffer" === e.responseType;
                                                if (a >= 200 && a < 300 && (s && e.response || null !== e.responseText)) {
                                                    var o, u;
                                                    if (r.loading.end = Math.max(self.performance.now(), r.loading.first), u = s ? (o = e.response).byteLength : (o = e.responseText).length, r.loaded = r.total = u, !this.callbacks) return;
                                                    var h = this.callbacks.onProgress;
                                                    if (h && h(r, t, o, e), !this.callbacks) return;
                                                    var d = {
                                                        url: e.responseURL,
                                                        data: o
                                                    };
                                                    this.callbacks.onSuccess(d, r, t, e)
                                                } else r.retry >= n.maxRetry || a >= 400 && a < 499 ? (l.logger.error(a + " while loading " + t.url), this.callbacks.onError({
                                                    code: a,
                                                    text: e.statusText
                                                }, t, e)) : (l.logger.warn(a + " while loading " + t.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, n.maxRetryDelay), r.retry++)
                                            } else self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n.timeout)
                                    }
                                }, e.loadtimeout = function() {
                                    l.logger.warn("timeout while loading " + this.context.url);
                                    var t = this.callbacks;
                                    t && (this.abortInternal(), t.onTimeout(this.stats, this.context, this.loader))
                                }, e.loadprogress = function(t) {
                                    var e = this.stats;
                                    e.loaded = t.loaded, t.lengthComputable && (e.total = t.total)
                                }, e.getCacheAge = function() {
                                    var t = null;
                                    if (this.loader && jr.test(this.loader.getAllResponseHeaders())) {
                                        var e = this.loader.getResponseHeader("age");
                                        t = e ? parseFloat(e) : null
                                    }
                                    return t
                                }, t
                            }();

                            function Kr(t) {
                                var e = "function" == typeof Map ? new Map : void 0;
                                return Kr = function(t) {
                                    if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                                    var r;
                                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== e) {
                                        if (e.has(t)) return e.get(t);
                                        e.set(t, i)
                                    }

                                    function i() {
                                        return Vr(t, arguments, qr(this).constructor)
                                    }
                                    return i.prototype = Object.create(t.prototype, {
                                        constructor: {
                                            value: i,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), Yr(i, t)
                                }, Kr(t)
                            }

                            function Vr(t, e, r) {
                                return Vr = Wr() ? Reflect.construct.bind() : function(t, e, r) {
                                    var i = [null];
                                    i.push.apply(i, e);
                                    var n = new(Function.bind.apply(t, i));
                                    return r && Yr(n, r.prototype), n
                                }, Vr.apply(null, arguments)
                            }

                            function Wr() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                                } catch (t) {
                                    return !1
                                }
                            }

                            function Yr(t, e) {
                                return Yr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, Yr(t, e)
                            }

                            function qr(t) {
                                return qr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                }, qr(t)
                            }

                            function Xr() {
                                return Xr = Object.assign ? Object.assign.bind() : function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                    }
                                    return t
                                }, Xr.apply(this, arguments)
                            }
                            var zr = function() {
                                function t(t) {
                                    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t.fetchSetup || Zr, this.controller = new self.AbortController, this.stats = new Gr.LoadStats
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    this.loader = this.callbacks = null, this.abortInternal()
                                }, e.abortInternal = function() {
                                    var t = this.response;
                                    t && t.ok || (this.stats.aborted = !0, this.controller.abort())
                                }, e.abort = function() {
                                    var t;
                                    this.abortInternal(), null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
                                }, e.load = function(t, e, r) {
                                    var i = this,
                                        n = this.stats;
                                    if (n.loading.start) throw new Error("Loader can only be used once.");
                                    n.loading.start = self.performance.now();
                                    var s = function(t, e) {
                                            var r = {
                                                method: "GET",
                                                mode: "cors",
                                                credentials: "same-origin",
                                                signal: e,
                                                headers: new self.Headers(Xr({}, t.headers))
                                            };
                                            return t.rangeEnd && r.headers.set("Range", "bytes=" + t.rangeStart + "-" + String(t.rangeEnd - 1)), r
                                        }(t, this.controller.signal),
                                        o = r.onProgress,
                                        l = "arraybuffer" === t.responseType,
                                        u = l ? "byteLength" : "length";
                                    this.context = t, this.config = e, this.callbacks = r, this.request = this.fetchSetup(t, s), self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout((function() {
                                        i.abortInternal(), r.onTimeout(n, t, i.response)
                                    }), e.timeout), self.fetch(this.request).then((function(r) {
                                        if (i.response = i.loader = r, !r.ok) {
                                            var s = r.status,
                                                u = r.statusText;
                                            throw new $r(u || "fetch, bad network response", s, r)
                                        }
                                        return n.loading.first = Math.max(self.performance.now(), n.loading.start), n.total = parseInt(r.headers.get("Content-Length") || "0"), o && (0, a.isFiniteNumber)(e.highWaterMark) ? i.loadProgressively(r, n, t, e.highWaterMark, o) : l ? r.arrayBuffer() : r.text()
                                    })).then((function(s) {
                                        var l = i.response;
                                        self.clearTimeout(i.requestTimeout), n.loading.end = Math.max(self.performance.now(), n.loading.first);
                                        var h = s[u];
                                        h && (n.loaded = n.total = h);
                                        var d = {
                                            url: l.url,
                                            data: s
                                        };
                                        o && !(0, a.isFiniteNumber)(e.highWaterMark) && o(n, t, s, l), r.onSuccess(d, n, t, l)
                                    })).catch((function(e) {
                                        if (self.clearTimeout(i.requestTimeout), !n.aborted) {
                                            var a = e && e.code || 0,
                                                s = e ? e.message : null;
                                            r.onError({
                                                code: a,
                                                text: s
                                            }, t, e ? e.details : null)
                                        }
                                    }))
                                }, e.getCacheAge = function() {
                                    var t = null;
                                    if (this.response) {
                                        var e = this.response.headers.get("age");
                                        t = e ? parseFloat(e) : null
                                    }
                                    return t
                                }, e.loadProgressively = function(t, e, r, i, n) {
                                    void 0 === i && (i = 0);
                                    var a = new de,
                                        s = t.body.getReader();
                                    return function o() {
                                        return s.read().then((function(s) {
                                            if (s.done) return a.dataLength && n(e, r, a.flush(), t), Promise.resolve(new ArrayBuffer(0));
                                            var l = s.value,
                                                u = l.length;
                                            return e.loaded += u, u < i || a.dataLength ? (a.push(l), a.dataLength >= i && n(e, r, a.flush(), t)) : n(e, r, l, t), o()
                                        })).catch((function() {
                                            return Promise.reject()
                                        }))
                                    }()
                                }, t
                            }();

                            function Zr(t, e) {
                                return new self.Request(t.url, e)
                            }
                            var $r = function(t) {
                                var e, r;

                                function i(e, r, i) {
                                    var n;
                                    return (n = t.call(this, e) || this).code = void 0, n.details = void 0, n.code = r, n.details = i, n
                                }
                                return r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, Yr(e, r), i
                            }(Kr(Error));
                            const Qr = zr;
                            var Jr = /\s/;

                            function ti() {
                                return ti = Object.assign ? Object.assign.bind() : function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                    }
                                    return t
                                }, ti.apply(this, arguments)
                            }

                            function ei(t, e) {
                                var r = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(t);
                                    e && (i = i.filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))), r.push.apply(r, i)
                                }
                                return r
                            }

                            function ri(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? ei(Object(r), !0).forEach((function(e) {
                                        ii(t, e, r[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ei(Object(r)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                    }))
                                }
                                return t
                            }

                            function ii(t, e, r) {
                                return e in t ? Object.defineProperty(t, e, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[e] = r, t
                            }
                            var ni = ri(ri({
                                autoStartLoad: !0,
                                startPosition: -1,
                                defaultAudioCodec: void 0,
                                debug: !1,
                                capLevelOnFPSDrop: !1,
                                capLevelToPlayerSize: !1,
                                ignoreDevicePixelRatio: !1,
                                initialLiveManifestSize: 1,
                                maxBufferLength: 30,
                                backBufferLength: 1 / 0,
                                maxBufferSize: 6e7,
                                maxBufferHole: .1,
                                highBufferWatchdogPeriod: 2,
                                nudgeOffset: .1,
                                nudgeMaxRetry: 3,
                                maxFragLookUpTolerance: .25,
                                liveSyncDurationCount: 3,
                                liveMaxLatencyDurationCount: 1 / 0,
                                liveSyncDuration: void 0,
                                liveMaxLatencyDuration: void 0,
                                maxLiveSyncPlaybackRate: 1,
                                liveDurationInfinity: !1,
                                liveBackBufferLength: null,
                                maxMaxBufferLength: 600,
                                enableWorker: !0,
                                enableSoftwareAES: !0,
                                manifestLoadingTimeOut: 1e4,
                                manifestLoadingMaxRetry: 1,
                                manifestLoadingRetryDelay: 1e3,
                                manifestLoadingMaxRetryTimeout: 64e3,
                                startLevel: void 0,
                                levelLoadingTimeOut: 1e4,
                                levelLoadingMaxRetry: 4,
                                levelLoadingRetryDelay: 1e3,
                                levelLoadingMaxRetryTimeout: 64e3,
                                fragLoadingTimeOut: 2e4,
                                fragLoadingMaxRetry: 6,
                                fragLoadingRetryDelay: 1e3,
                                fragLoadingMaxRetryTimeout: 64e3,
                                startFragPrefetch: !1,
                                fpsDroppedMonitoringPeriod: 5e3,
                                fpsDroppedMonitoringThreshold: .2,
                                appendErrorMaxRetry: 3,
                                loader: Hr,
                                fLoader: void 0,
                                pLoader: void 0,
                                xhrSetup: void 0,
                                licenseXhrSetup: void 0,
                                licenseResponseCallback: void 0,
                                abrController: he,
                                bufferController: _e,
                                capLevelController: Rr,
                                fpsController: Ar,
                                stretchShortVideoTrack: !1,
                                maxAudioFramesDrift: 1,
                                forceKeyFrameOnDiscontinuity: !0,
                                abrEwmaFastLive: 3,
                                abrEwmaSlowLive: 9,
                                abrEwmaFastVoD: 3,
                                abrEwmaSlowVoD: 9,
                                abrEwmaDefaultEstimate: 5e5,
                                abrBandWidthFactor: .95,
                                abrBandWidthUpFactor: .7,
                                abrMaxWithRealBitrate: !1,
                                maxStarvationDelay: 4,
                                maxLoadingDelay: 4,
                                minAutoBitrate: 0,
                                emeEnabled: !1,
                                widevineLicenseUrl: void 0,
                                drmSystemOptions: {},
                                requestMediaKeySystemAccessFunc: Ir,
                                testBandwidth: !0,
                                progressive: !1,
                                lowLatencyMode: !0,
                                cmcd: void 0,
                                enableDateRangeMetadataCues: !0,
                                enableEmsgMetadataCues: !0,
                                enableID3MetadataCues: !0
                            }, {
                                cueHandler: {
                                    newCue: function(t, e, r, i) {
                                        for (var n, a, s, o, l, u = [], h = self.VTTCue || self.TextTrackCue, d = 0; d < i.rows.length; d++)
                                            if (s = !0, o = 0, l = "", !(n = i.rows[d]).isEmpty()) {
                                                for (var c = 0; c < n.chars.length; c++) Jr.test(n.chars[c].uchar) && s ? o++ : (l += n.chars[c].uchar, s = !1);
                                                n.cueStartTime = e, e === r && (r += 1e-4), o >= 16 ? o-- : o++;
                                                var f = nr(l.trim()),
                                                    g = dr(e, r, f);
                                                t && t.cues && t.cues.getCueById(g) || ((a = new h(e, r, f)).id = g, a.line = d + 1, a.align = "left", a.position = 10 + Math.min(80, 10 * Math.floor(8 * o / 32)), u.push(a))
                                            } return t && u.length && (u.sort((function(t, e) {
                                            return "auto" === t.line || "auto" === e.line ? 0 : t.line > 8 && e.line > 8 ? e.line - t.line : t.line - e.line
                                        })), u.forEach((function(e) {
                                            return F(t, e)
                                        }))), u
                                    }
                                },
                                enableWebVTT: !0,
                                enableIMSC1: !0,
                                enableCEA708Captions: !0,
                                captionsTextTrack1Label: "English",
                                captionsTextTrack1LanguageCode: "en",
                                captionsTextTrack2Label: "Spanish",
                                captionsTextTrack2LanguageCode: "es",
                                captionsTextTrack3Label: "Unknown CC",
                                captionsTextTrack3LanguageCode: "",
                                captionsTextTrack4Label: "Unknown CC",
                                captionsTextTrack4LanguageCode: "",
                                renderTextTracksNatively: !0
                            }), {}, {
                                subtitleStreamController: ye,
                                subtitleTrackController: Le,
                                timelineController: kr,
                                audioStreamController: ve,
                                audioTrackController: me,
                                emeController: Cr,
                                cmcdController: Br
                            });

                            function ai(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                }
                            }
                            var si = function() {
                                function t(e) {
                                    void 0 === e && (e = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new re.EventEmitter, this._autoLevelCapping = void 0, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null;
                                    var r = this.config = function(t, e) {
                                        if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                                        if (void 0 !== e.liveMaxLatencyDurationCount && (void 0 === e.liveSyncDurationCount || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
                                        if (void 0 !== e.liveMaxLatencyDuration && (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
                                        return ti({}, t, e)
                                    }(t.DefaultConfig, e);
                                    this.userConfig = e, (0, l.enableLogs)(r.debug, "Hls instance"), this._autoLevelCapping = -1, r.progressive && function(t) {
                                        var e = t.loader;
                                        e !== Qr && e !== Hr ? (l.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"), t.progressive = !1) : function() {
                                            if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
                                                return new self.ReadableStream({}), !0
                                            } catch (t) {}
                                            return !1
                                        }() && (t.loader = Qr, t.progressive = !0, t.enableSoftwareAES = !0, l.logger.log("[config]: Progressive streaming enabled, using FetchLoader"))
                                    }(r);
                                    var i = r.abrController,
                                        n = r.bufferController,
                                        a = r.capLevelController,
                                        s = r.fpsController,
                                        o = this.abrController = new i(this),
                                        u = this.bufferController = new n(this),
                                        h = this.capLevelController = new a(this),
                                        d = new s(this),
                                        c = new O(this),
                                        f = new x(this),
                                        g = new K(this),
                                        v = this.levelController = new st(this),
                                        p = new ot(this),
                                        m = this.streamController = new oe(this, p);
                                    h.setStreamController(m), d.setStreamController(m);
                                    var T = [c, f, v, m];
                                    this.networkControllers = T;
                                    var y = [o, u, h, d, g, p];
                                    this.audioTrackController = this.createController(r.audioTrackController, null, T), this.createController(r.audioStreamController, p, T), this.subtitleTrackController = this.createController(r.subtitleTrackController, null, T), this.createController(r.subtitleStreamController, p, T), this.createController(r.timelineController, null, y), this.emeController = this.createController(r.emeController, null, y), this.cmcdController = this.createController(r.cmcdController, null, y), this.latencyController = this.createController(W, null, y), this.coreComponents = y
                                }
                                t.isSupported = function() {
                                    return function() {
                                        var t = qt();
                                        if (!t) return !1;
                                        var e = Xt(),
                                            r = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                                            i = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
                                        return !!r && !!i
                                    }()
                                };
                                var e, r, i, a = t.prototype;
                                return a.createController = function(t, e, r) {
                                    if (t) {
                                        var i = e ? new t(this, e) : new t(this);
                                        return r && r.push(i), i
                                    }
                                    return null
                                }, a.on = function(t, e, r) {
                                    void 0 === r && (r = this), this._emitter.on(t, e, r)
                                }, a.once = function(t, e, r) {
                                    void 0 === r && (r = this), this._emitter.once(t, e, r)
                                }, a.removeAllListeners = function(t) {
                                    this._emitter.removeAllListeners(t)
                                }, a.off = function(t, e, r, i) {
                                    void 0 === r && (r = this), this._emitter.off(t, e, r, i)
                                }, a.listeners = function(t) {
                                    return this._emitter.listeners(t)
                                }, a.emit = function(t, e, r) {
                                    return this._emitter.emit(t, e, r)
                                }, a.trigger = function(t, e) {
                                    if (this.config.debug) return this.emit(t, t, e);
                                    try {
                                        return this.emit(t, t, e)
                                    } catch (e) {
                                        l.logger.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e), this.trigger(s.Events.ERROR, {
                                            type: o.ErrorTypes.OTHER_ERROR,
                                            details: o.ErrorDetails.INTERNAL_EXCEPTION,
                                            fatal: !1,
                                            event: t,
                                            error: e
                                        })
                                    }
                                    return !1
                                }, a.listenerCount = function(t) {
                                    return this._emitter.listenerCount(t)
                                }, a.destroy = function() {
                                    l.logger.log("destroy"), this.trigger(s.Events.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((function(t) {
                                        return t.destroy()
                                    })), this.networkControllers.length = 0, this.coreComponents.forEach((function(t) {
                                        return t.destroy()
                                    })), this.coreComponents.length = 0
                                }, a.attachMedia = function(t) {
                                    l.logger.log("attachMedia"), this._media = t, this.trigger(s.Events.MEDIA_ATTACHING, {
                                        media: t
                                    })
                                }, a.detachMedia = function() {
                                    l.logger.log("detachMedia"), this.trigger(s.Events.MEDIA_DETACHING, void 0), this._media = null
                                }, a.loadSource = function(t) {
                                    this.stopLoad();
                                    var e = this.media,
                                        r = this.url,
                                        i = this.url = n.buildAbsoluteURL(self.location.href, t, {
                                            alwaysNormalize: !0
                                        });
                                    l.logger.log("loadSource:" + i), e && r && r !== i && this.bufferController.hasSourceTypes() && (this.detachMedia(), this.attachMedia(e)), this.trigger(s.Events.MANIFEST_LOADING, {
                                        url: t
                                    })
                                }, a.startLoad = function(t) {
                                    void 0 === t && (t = -1), l.logger.log("startLoad(" + t + ")"), this.networkControllers.forEach((function(e) {
                                        e.startLoad(t)
                                    }))
                                }, a.stopLoad = function() {
                                    l.logger.log("stopLoad"), this.networkControllers.forEach((function(t) {
                                        t.stopLoad()
                                    }))
                                }, a.swapAudioCodec = function() {
                                    l.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                                }, a.recoverMediaError = function() {
                                    l.logger.log("recoverMediaError");
                                    var t = this._media;
                                    this.detachMedia(), t && this.attachMedia(t)
                                }, a.removeLevel = function(t, e) {
                                    void 0 === e && (e = 0), this.levelController.removeLevel(t, e)
                                }, e = t, i = [{
                                    key: "version",
                                    get: function() {
                                        return "1.2.9"
                                    }
                                }, {
                                    key: "Events",
                                    get: function() {
                                        return s.Events
                                    }
                                }, {
                                    key: "ErrorTypes",
                                    get: function() {
                                        return o.ErrorTypes
                                    }
                                }, {
                                    key: "ErrorDetails",
                                    get: function() {
                                        return o.ErrorDetails
                                    }
                                }, {
                                    key: "DefaultConfig",
                                    get: function() {
                                        return t.defaultConfig ? t.defaultConfig : ni
                                    },
                                    set: function(e) {
                                        t.defaultConfig = e
                                    }
                                }], (r = [{
                                    key: "levels",
                                    get: function() {
                                        return this.levelController.levels || []
                                    }
                                }, {
                                    key: "currentLevel",
                                    get: function() {
                                        return this.streamController.currentLevel
                                    },
                                    set: function(t) {
                                        l.logger.log("set currentLevel:" + t), this.loadLevel = t, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch()
                                    }
                                }, {
                                    key: "nextLevel",
                                    get: function() {
                                        return this.streamController.nextLevel
                                    },
                                    set: function(t) {
                                        l.logger.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
                                    }
                                }, {
                                    key: "loadLevel",
                                    get: function() {
                                        return this.levelController.level
                                    },
                                    set: function(t) {
                                        l.logger.log("set loadLevel:" + t), this.levelController.manualLevel = t
                                    }
                                }, {
                                    key: "nextLoadLevel",
                                    get: function() {
                                        return this.levelController.nextLoadLevel
                                    },
                                    set: function(t) {
                                        this.levelController.nextLoadLevel = t
                                    }
                                }, {
                                    key: "firstLevel",
                                    get: function() {
                                        return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                                    },
                                    set: function(t) {
                                        l.logger.log("set firstLevel:" + t), this.levelController.firstLevel = t
                                    }
                                }, {
                                    key: "startLevel",
                                    get: function() {
                                        return this.levelController.startLevel
                                    },
                                    set: function(t) {
                                        l.logger.log("set startLevel:" + t), -1 !== t && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t
                                    }
                                }, {
                                    key: "capLevelToPlayerSize",
                                    get: function() {
                                        return this.config.capLevelToPlayerSize
                                    },
                                    set: function(t) {
                                        var e = !!t;
                                        e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e)
                                    }
                                }, {
                                    key: "autoLevelCapping",
                                    get: function() {
                                        return this._autoLevelCapping
                                    },
                                    set: function(t) {
                                        this._autoLevelCapping !== t && (l.logger.log("set autoLevelCapping:" + t), this._autoLevelCapping = t)
                                    }
                                }, {
                                    key: "bandwidthEstimate",
                                    get: function() {
                                        var t = this.abrController.bwEstimator;
                                        return t ? t.getEstimate() : NaN
                                    }
                                }, {
                                    key: "autoLevelEnabled",
                                    get: function() {
                                        return -1 === this.levelController.manualLevel
                                    }
                                }, {
                                    key: "manualLevel",
                                    get: function() {
                                        return this.levelController.manualLevel
                                    }
                                }, {
                                    key: "minAutoLevel",
                                    get: function() {
                                        var t = this.levels,
                                            e = this.config.minAutoBitrate;
                                        if (!t) return 0;
                                        for (var r = t.length, i = 0; i < r; i++)
                                            if (t[i].maxBitrate >= e) return i;
                                        return 0
                                    }
                                }, {
                                    key: "maxAutoLevel",
                                    get: function() {
                                        var t = this.levels,
                                            e = this.autoLevelCapping;
                                        return -1 === e && t && t.length ? t.length - 1 : e
                                    }
                                }, {
                                    key: "nextAutoLevel",
                                    get: function() {
                                        return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                                    },
                                    set: function(t) {
                                        this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
                                    }
                                }, {
                                    key: "playingDate",
                                    get: function() {
                                        return this.streamController.currentProgramDateTime
                                    }
                                }, {
                                    key: "mainForwardBufferInfo",
                                    get: function() {
                                        return this.streamController.getMainFwdBufferInfo()
                                    }
                                }, {
                                    key: "audioTracks",
                                    get: function() {
                                        var t = this.audioTrackController;
                                        return t ? t.audioTracks : []
                                    }
                                }, {
                                    key: "audioTrack",
                                    get: function() {
                                        var t = this.audioTrackController;
                                        return t ? t.audioTrack : -1
                                    },
                                    set: function(t) {
                                        var e = this.audioTrackController;
                                        e && (e.audioTrack = t)
                                    }
                                }, {
                                    key: "subtitleTracks",
                                    get: function() {
                                        var t = this.subtitleTrackController;
                                        return t ? t.subtitleTracks : []
                                    }
                                }, {
                                    key: "subtitleTrack",
                                    get: function() {
                                        var t = this.subtitleTrackController;
                                        return t ? t.subtitleTrack : -1
                                    },
                                    set: function(t) {
                                        var e = this.subtitleTrackController;
                                        e && (e.subtitleTrack = t)
                                    }
                                }, {
                                    key: "media",
                                    get: function() {
                                        return this._media
                                    }
                                }, {
                                    key: "subtitleDisplay",
                                    get: function() {
                                        var t = this.subtitleTrackController;
                                        return !!t && t.subtitleDisplay
                                    },
                                    set: function(t) {
                                        var e = this.subtitleTrackController;
                                        e && (e.subtitleDisplay = t)
                                    }
                                }, {
                                    key: "lowLatencyMode",
                                    get: function() {
                                        return this.config.lowLatencyMode
                                    },
                                    set: function(t) {
                                        this.config.lowLatencyMode = t
                                    }
                                }, {
                                    key: "liveSyncPosition",
                                    get: function() {
                                        return this.latencyController.liveSyncPosition
                                    }
                                }, {
                                    key: "latency",
                                    get: function() {
                                        return this.latencyController.latency
                                    }
                                }, {
                                    key: "maxLatency",
                                    get: function() {
                                        return this.latencyController.maxLatency
                                    }
                                }, {
                                    key: "targetLatency",
                                    get: function() {
                                        return this.latencyController.targetLatency
                                    }
                                }, {
                                    key: "drift",
                                    get: function() {
                                        return this.latencyController.drift
                                    }
                                }, {
                                    key: "forceStartLoad",
                                    get: function() {
                                        return this.streamController.forceStartLoad
                                    }
                                }]) && ai(e.prototype, r), i && ai(e, i), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t
                            }();
                            si.defaultConfig = void 0
                        },
                        923: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                BaseSegment: () => f,
                                ElementaryStreamTypes: () => i,
                                Fragment: () => g,
                                Part: () => v
                            });
                            var i, n = r(965),
                                a = r(945),
                                s = r(93),
                                o = r(960),
                                l = r(408);

                            function u(t, e) {
                                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, h(t, e)
                            }

                            function h(t, e) {
                                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                }, h(t, e)
                            }

                            function d(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                }
                            }

                            function c(t, e, r) {
                                return e && d(t.prototype, e), r && d(t, r), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), t
                            }! function(t) {
                                t.AUDIO = "audio", t.VIDEO = "video", t.AUDIOVIDEO = "audiovideo"
                            }(i || (i = {}));
                            var f = function() {
                                    function t(t) {
                                        var e;
                                        this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((e = {})[i.AUDIO] = null, e[i.VIDEO] = null, e[i.AUDIOVIDEO] = null, e), this.baseurl = t
                                    }
                                    return t.prototype.setByteRange = function(t, e) {
                                        var r = t.split("@", 2),
                                            i = [];
                                        1 === r.length ? i[0] = e ? e.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]), i[1] = parseInt(r[0]) + i[0], this._byteRange = i
                                    }, c(t, [{
                                        key: "byteRange",
                                        get: function() {
                                            return this._byteRange ? this._byteRange : []
                                        }
                                    }, {
                                        key: "byteRangeStartOffset",
                                        get: function() {
                                            return this.byteRange[0]
                                        }
                                    }, {
                                        key: "byteRangeEndOffset",
                                        get: function() {
                                            return this.byteRange[1]
                                        }
                                    }, {
                                        key: "url",
                                        get: function() {
                                            return !this._url && this.baseurl && this.relurl && (this._url = (0, a.buildAbsoluteURL)(this.baseurl, this.relurl, {
                                                alwaysNormalize: !0
                                            })), this._url || ""
                                        },
                                        set: function(t) {
                                            this._url = t
                                        }
                                    }]), t
                                }(),
                                g = function(t) {
                                    function e(e, r) {
                                        var i;
                                        return (i = t.call(this, r) || this)._decryptdata = null, i.rawProgramDateTime = null, i.programDateTime = null, i.tagList = [], i.duration = 0, i.sn = 0, i.levelkey = void 0, i.type = void 0, i.loader = null, i.level = -1, i.cc = 0, i.startPTS = void 0, i.endPTS = void 0, i.appendedPTS = void 0, i.startDTS = void 0, i.endDTS = void 0, i.start = 0, i.deltaPTS = void 0, i.maxStartPTS = void 0, i.minEndPTS = void 0, i.stats = new l.LoadStats, i.urlId = 0, i.data = void 0, i.bitrateTest = !1, i.title = null, i.initSegment = null, i.type = e, i
                                    }
                                    u(e, t);
                                    var r = e.prototype;
                                    return r.createInitializationVector = function(t) {
                                        for (var e = new Uint8Array(16), r = 12; r < 16; r++) e[r] = t >> 8 * (15 - r) & 255;
                                        return e
                                    }, r.setDecryptDataFromLevelKey = function(t, e) {
                                        var r = t;
                                        return "AES-128" === (null == t ? void 0 : t.method) && t.uri && !t.iv && ((r = o.LevelKey.fromURI(t.uri)).method = t.method, r.iv = this.createInitializationVector(e), r.keyFormat = "identity"), r
                                    }, r.setElementaryStreamInfo = function(t, e, r, i, n, a) {
                                        void 0 === a && (a = !1);
                                        var s = this.elementaryStreams,
                                            o = s[t];
                                        o ? (o.startPTS = Math.min(o.startPTS, e), o.endPTS = Math.max(o.endPTS, r), o.startDTS = Math.min(o.startDTS, i), o.endDTS = Math.max(o.endDTS, n)) : s[t] = {
                                            startPTS: e,
                                            endPTS: r,
                                            startDTS: i,
                                            endDTS: n,
                                            partial: a
                                        }
                                    }, r.clearElementaryStreamInfo = function() {
                                        var t = this.elementaryStreams;
                                        t[i.AUDIO] = null, t[i.VIDEO] = null, t[i.AUDIOVIDEO] = null
                                    }, c(e, [{
                                        key: "decryptdata",
                                        get: function() {
                                            if (!this.levelkey && !this._decryptdata) return null;
                                            if (!this._decryptdata && this.levelkey) {
                                                var t = this.sn;
                                                "number" != typeof t && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && s.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), t = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t)
                                            }
                                            return this._decryptdata
                                        }
                                    }, {
                                        key: "end",
                                        get: function() {
                                            return this.start + this.duration
                                        }
                                    }, {
                                        key: "endProgramDateTime",
                                        get: function() {
                                            if (null === this.programDateTime) return null;
                                            if (!(0, n.isFiniteNumber)(this.programDateTime)) return null;
                                            var t = (0, n.isFiniteNumber)(this.duration) ? this.duration : 0;
                                            return this.programDateTime + 1e3 * t
                                        }
                                    }, {
                                        key: "encrypted",
                                        get: function() {
                                            var t;
                                            return !(null === (t = this.decryptdata) || void 0 === t || !t.keyFormat || !this.decryptdata.uri)
                                        }
                                    }]), e
                                }(f),
                                v = function(t) {
                                    function e(e, r, i, n, a) {
                                        var s;
                                        (s = t.call(this, i) || this).fragOffset = 0, s.duration = 0, s.gap = !1, s.independent = !1, s.relurl = void 0, s.fragment = void 0, s.index = void 0, s.stats = new l.LoadStats, s.duration = e.decimalFloatingPoint("DURATION"), s.gap = e.bool("GAP"), s.independent = e.bool("INDEPENDENT"), s.relurl = e.enumeratedString("URI"), s.fragment = r, s.index = n;
                                        var o = e.enumeratedString("BYTERANGE");
                                        return o && s.setByteRange(o, a), a && (s.fragOffset = a.fragOffset + a.duration), s
                                    }
                                    return u(e, t), c(e, [{
                                        key: "start",
                                        get: function() {
                                            return this.fragment.start + this.fragOffset
                                        }
                                    }, {
                                        key: "end",
                                        get: function() {
                                            return this.start + this.duration
                                        }
                                    }, {
                                        key: "loaded",
                                        get: function() {
                                            var t = this.elementaryStreams;
                                            return !!(t.audio || t.video || t.audiovideo)
                                        }
                                    }]), e
                                }(f)
                        },
                        960: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                LevelKey: () => n
                            });
                            var i = r(945),
                                n = function() {
                                    function t(t, e) {
                                        this._uri = null, this.method = null, this.keyFormat = null, this.keyFormatVersions = null, this.keyID = null, this.key = null, this.iv = null, this._uri = e ? (0, i.buildAbsoluteURL)(t, e, {
                                            alwaysNormalize: !0
                                        }) : t
                                    }
                                    var e, r;
                                    return t.fromURL = function(e, r) {
                                        return new t(e, r)
                                    }, t.fromURI = function(e) {
                                        return new t(e)
                                    }, e = t, (r = [{
                                        key: "uri",
                                        get: function() {
                                            return this._uri
                                        }
                                    }]) && function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(e.prototype, r), Object.defineProperty(e, "prototype", {
                                        writable: !1
                                    }), t
                                }()
                        },
                        408: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                LoadStats: () => i
                            });
                            var i = function() {
                                this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
                                    start: 0,
                                    first: 0,
                                    end: 0
                                }, this.parsing = {
                                    start: 0,
                                    end: 0
                                }, this.buffering = {
                                    start: 0,
                                    first: 0,
                                    end: 0
                                }
                            }
                        },
                        965: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                MAX_SAFE_INTEGER: () => n,
                                isFiniteNumber: () => i
                            });
                            var i = Number.isFinite || function(t) {
                                    return "number" == typeof t && isFinite(t)
                                },
                                n = Number.MAX_SAFE_INTEGER || 9007199254740991
                        },
                        524: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                default: () => p,
                                flushTextTrackMetadataCueSamples: () => T,
                                flushTextTrackUserdataCueSamples: () => y,
                                normalizePts: () => m
                            });
                            var i = r(965);
                            const n = function() {
                                function t() {}
                                return t.getSilentFrame = function(t, e) {
                                    if ("mp4a.40.2" === t) {
                                        if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                                        if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                                        if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                                        if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                                        if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                                        if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
                                    } else {
                                        if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                        if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                        if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                                    }
                                }, t
                            }();
                            var a = Math.pow(2, 32) - 1,
                                s = function() {
                                    function t() {}
                                    return t.init = function() {
                                        var e;
                                        for (e in t.types = {
                                            avc1: [],
                                            avcC: [],
                                            btrt: [],
                                            dinf: [],
                                            dref: [],
                                            esds: [],
                                            ftyp: [],
                                            hdlr: [],
                                            mdat: [],
                                            mdhd: [],
                                            mdia: [],
                                            mfhd: [],
                                            minf: [],
                                            moof: [],
                                            moov: [],
                                            mp4a: [],
                                            ".mp3": [],
                                            mvex: [],
                                            mvhd: [],
                                            pasp: [],
                                            sdtp: [],
                                            stbl: [],
                                            stco: [],
                                            stsc: [],
                                            stsd: [],
                                            stsz: [],
                                            stts: [],
                                            tfdt: [],
                                            tfhd: [],
                                            traf: [],
                                            trak: [],
                                            trun: [],
                                            trex: [],
                                            tkhd: [],
                                            vmhd: [],
                                            smhd: []
                                        }, t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                                        var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                                            i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                                        t.HDLR_TYPES = {
                                            video: r,
                                            audio: i
                                        };
                                        var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                                            a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                                        t.STTS = t.STSC = t.STCO = a, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                                        var s = new Uint8Array([105, 115, 111, 109]),
                                            o = new Uint8Array([97, 118, 99, 49]),
                                            l = new Uint8Array([0, 0, 0, 1]);
                                        t.FTYP = t.box(t.types.ftyp, s, l, s, o), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n))
                                    }, t.box = function(t) {
                                        for (var e = 8, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
                                        for (var a = i.length, s = a; a--;) e += i[a].byteLength;
                                        var o = new Uint8Array(e);
                                        for (o[0] = e >> 24 & 255, o[1] = e >> 16 & 255, o[2] = e >> 8 & 255, o[3] = 255 & e, o.set(t, 4), a = 0, e = 8; a < s; a++) o.set(i[a], e), e += i[a].byteLength;
                                        return o
                                    }, t.hdlr = function(e) {
                                        return t.box(t.types.hdlr, t.HDLR_TYPES[e])
                                    }, t.mdat = function(e) {
                                        return t.box(t.types.mdat, e)
                                    }, t.mdhd = function(e, r) {
                                        r *= e;
                                        var i = Math.floor(r / (a + 1)),
                                            n = Math.floor(r % (a + 1));
                                        return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
                                    }, t.mdia = function(e) {
                                        return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
                                    }, t.mfhd = function(e) {
                                        return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                                    }, t.minf = function(e) {
                                        return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
                                    }, t.moof = function(e, r, i) {
                                        return t.box(t.types.moof, t.mfhd(e), t.traf(i, r))
                                    }, t.moov = function(e) {
                                        for (var r = e.length, i = []; r--;) i[r] = t.trak(e[r]);
                                        return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(t.mvex(e)))
                                    }, t.mvex = function(e) {
                                        for (var r = e.length, i = []; r--;) i[r] = t.trex(e[r]);
                                        return t.box.apply(null, [t.types.mvex].concat(i))
                                    }, t.mvhd = function(e, r) {
                                        r *= e;
                                        var i = Math.floor(r / (a + 1)),
                                            n = Math.floor(r % (a + 1)),
                                            s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                                        return t.box(t.types.mvhd, s)
                                    }, t.sdtp = function(e) {
                                        var r, i, n = e.samples || [],
                                            a = new Uint8Array(4 + n.length);
                                        for (r = 0; r < n.length; r++) i = n[r].flags, a[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                                        return t.box(t.types.sdtp, a)
                                    }, t.stbl = function(e) {
                                        return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
                                    }, t.avc1 = function(e) {
                                        var r, i, n, a = [],
                                            s = [];
                                        for (r = 0; r < e.sps.length; r++) n = (i = e.sps[r]).byteLength, a.push(n >>> 8 & 255), a.push(255 & n), a = a.concat(Array.prototype.slice.call(i));
                                        for (r = 0; r < e.pps.length; r++) n = (i = e.pps[r]).byteLength, s.push(n >>> 8 & 255), s.push(255 & n), s = s.concat(Array.prototype.slice.call(i));
                                        var o = t.box(t.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | e.sps.length].concat(a).concat([e.pps.length]).concat(s))),
                                            l = e.width,
                                            u = e.height,
                                            h = e.pixelRatio[0],
                                            d = e.pixelRatio[1];
                                        return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
                                    }, t.esds = function(t) {
                                        var e = t.config.length;
                                        return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
                                    }, t.mp4a = function(e) {
                                        var r = e.samplerate;
                                        return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), t.box(t.types.esds, t.esds(e)))
                                    }, t.mp3 = function(e) {
                                        var r = e.samplerate;
                                        return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
                                    }, t.stsd = function(e) {
                                        return "audio" === e.type ? "mp3" === e.segmentCodec && "mp3" === e.codec ? t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
                                    }, t.tkhd = function(e) {
                                        var r = e.id,
                                            i = e.duration * e.timescale,
                                            n = e.width,
                                            s = e.height,
                                            o = Math.floor(i / (a + 1)),
                                            l = Math.floor(i % (a + 1));
                                        return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
                                    }, t.traf = function(e, r) {
                                        var i = t.sdtp(e),
                                            n = e.id,
                                            s = Math.floor(r / (a + 1)),
                                            o = Math.floor(r % (a + 1));
                                        return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), t.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
                                    }, t.trak = function(e) {
                                        return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                                    }, t.trex = function(e) {
                                        var r = e.id;
                                        return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                                    }, t.trun = function(e, r) {
                                        var i, n, a, s, o, l, u = e.samples || [],
                                            h = u.length,
                                            d = 12 + 16 * h,
                                            c = new Uint8Array(d);
                                        for (r += 8 + d, c.set(["video" === e.type ? 1 : 0, 0, 15, 1, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < h; i++) a = (n = u[i]).duration, s = n.size, o = n.flags, l = n.cts, c.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                                        return t.box(t.types.trun, c)
                                    }, t.initSegment = function(e) {
                                        t.types || t.init();
                                        var r = t.moov(e),
                                            i = new Uint8Array(t.FTYP.byteLength + r.byteLength);
                                        return i.set(t.FTYP), i.set(r, t.FTYP.byteLength), i
                                    }, t
                                }();
                            s.types = void 0, s.HDLR_TYPES = void 0, s.STTS = void 0, s.STSC = void 0, s.STCO = void 0, s.STSZ = void 0, s.VMHD = void 0, s.SMHD = void 0, s.STSD = void 0, s.FTYP = void 0, s.DINF = void 0;
                            const o = s;
                            var l = r(851),
                                u = r(973),
                                h = r(93),
                                d = r(308),
                                c = r(673);

                            function f() {
                                return f = Object.assign ? Object.assign.bind() : function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                    }
                                    return t
                                }, f.apply(this, arguments)
                            }
                            var g = null,
                                v = null,
                                p = function() {
                                    function t(t, e, r, i) {
                                        if (void 0 === i && (i = ""), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = t, this.config = e, this.typeSupported = r, this.ISGenerated = !1, null === g) {
                                            var n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                                            g = n ? parseInt(n[1]) : 0
                                        }
                                        if (null === v) {
                                            var a = navigator.userAgent.match(/Safari\/(\d+)/i);
                                            v = a ? parseInt(a[1]) : 0
                                        }
                                    }
                                    var e = t.prototype;
                                    return e.destroy = function() {}, e.resetTimeStamp = function(t) {
                                        h.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t
                                    }, e.resetNextTimestamp = function() {
                                        h.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1
                                    }, e.resetInitSegment = function() {
                                        h.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1
                                    }, e.getVideoStartPts = function(t) {
                                        var e = !1,
                                            r = t.reduce((function(t, r) {
                                                var i = r.pts - t;
                                                return i < -4294967296 ? (e = !0, m(t, r.pts)) : i > 0 ? t : r.pts
                                            }), t[0].pts);
                                        return e && h.logger.debug("PTS rollover detected"), r
                                    }, e.remux = function(t, e, r, i, n, a, s, o) {
                                        var l, u, c, f, g, v, p = n,
                                            E = n,
                                            S = t.pid > -1,
                                            b = e.pid > -1,
                                            L = e.samples.length,
                                            k = t.samples.length > 0,
                                            D = s && L > 0 || L > 1;
                                        if ((!S || k) && (!b || D) || this.ISGenerated || s) {
                                            this.ISGenerated || (c = this.generateIS(t, e, n));
                                            var R, A = this.isVideoContiguous,
                                                _ = -1;
                                            if (D && (_ = function(t) {
                                                for (var e = 0; e < t.length; e++)
                                                    if (t[e].key) return e;
                                                return -1
                                            }(e.samples), !A && this.config.forceKeyFrameOnDiscontinuity))
                                                if (v = !0, _ > 0) {
                                                    h.logger.warn("[mp4-remuxer]: Dropped " + _ + " out of " + L + " video samples due to a missing keyframe");
                                                    var I = this.getVideoStartPts(e.samples);
                                                    e.samples = e.samples.slice(_), e.dropped += _, R = E += (e.samples[0].pts - I) / e.inputTimeScale
                                                } else - 1 === _ && (h.logger.warn("[mp4-remuxer]: No keyframe found out of " + L + " video samples"), v = !1);
                                            if (this.ISGenerated) {
                                                if (k && D) {
                                                    var C = this.getVideoStartPts(e.samples),
                                                        w = (m(t.samples[0].pts, C) - C) / e.inputTimeScale;
                                                    p += Math.max(0, w), E += Math.max(0, -w)
                                                }
                                                if (k) {
                                                    if (t.samplerate || (h.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), c = this.generateIS(t, e, n)), u = this.remuxAudio(t, p, this.isAudioContiguous, a, b || D || o === d.PlaylistLevelType.AUDIO ? E : void 0), D) {
                                                        var O = u ? u.endPTS - u.startPTS : 0;
                                                        e.inputTimeScale || (h.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), c = this.generateIS(t, e, n)), l = this.remuxVideo(e, E, A, O)
                                                    }
                                                } else D && (l = this.remuxVideo(e, E, A, 0));
                                                l && (l.firstKeyFrame = _, l.independent = -1 !== _, l.firstKeyFramePTS = R)
                                            }
                                        }
                                        return this.ISGenerated && (r.samples.length && (g = T(r, n, this._initPTS, this._initDTS)), i.samples.length && (f = y(i, n, this._initPTS))), {
                                            audio: u,
                                            video: l,
                                            initSegment: c,
                                            independent: v,
                                            text: f,
                                            id3: g
                                        }
                                    }, e.generateIS = function(t, e, r) {
                                        var n, a, s, l = t.samples,
                                            u = e.samples,
                                            h = this.typeSupported,
                                            d = {},
                                            c = !(0, i.isFiniteNumber)(this._initPTS),
                                            f = "audio/mp4";
                                        if (c && (n = a = 1 / 0), t.config && l.length && (t.timescale = t.samplerate, "mp3" === t.segmentCodec && (h.mpeg ? (f = "audio/mpeg", t.codec = "") : h.mp3 && (t.codec = "mp3")), d.audio = {
                                            id: "audio",
                                            container: f,
                                            codec: t.codec,
                                            initSegment: "mp3" === t.segmentCodec && h.mpeg ? new Uint8Array(0) : o.initSegment([t]),
                                            metadata: {
                                                channelCount: t.channelCount
                                            }
                                        }, c && (s = t.inputTimeScale, n = a = l[0].pts - Math.round(s * r))), e.sps && e.pps && u.length && (e.timescale = e.inputTimeScale, d.video = {
                                            id: "main",
                                            container: "video/mp4",
                                            codec: e.codec,
                                            initSegment: o.initSegment([e]),
                                            metadata: {
                                                width: e.width,
                                                height: e.height
                                            }
                                        }, c)) {
                                            s = e.inputTimeScale;
                                            var g = this.getVideoStartPts(u),
                                                v = Math.round(s * r);
                                            a = Math.min(a, m(u[0].dts, g) - v), n = Math.min(n, g - v)
                                        }
                                        if (Object.keys(d).length) return this.ISGenerated = !0, c && (this._initPTS = n, this._initDTS = a), {
                                            tracks: d,
                                            initPTS: n,
                                            timescale: s
                                        }
                                    }, e.remuxVideo = function(t, e, r, i) {
                                        var n, a, s = t.inputTimeScale,
                                            d = t.samples,
                                            p = [],
                                            T = d.length,
                                            y = this._initPTS,
                                            S = this.nextAvcDts,
                                            b = 8,
                                            L = this.videoSampleDuration,
                                            k = Number.POSITIVE_INFINITY,
                                            D = Number.NEGATIVE_INFINITY,
                                            R = !1;
                                        r && null !== S || (S = e * s - (d[0].pts - m(d[0].dts, d[0].pts)));
                                        for (var A = 0; A < T; A++) {
                                            var _ = d[A];
                                            _.pts = m(_.pts - y, S), _.dts = m(_.dts - y, S), _.dts < d[A > 0 ? A - 1 : A].dts && (R = !0)
                                        }
                                        R && d.sort((function(t, e) {
                                            var r = t.dts - e.dts,
                                                i = t.pts - e.pts;
                                            return r || i
                                        })), n = d[0].dts;
                                        var I = d[d.length - 1].dts - n,
                                            C = I ? Math.round(I / (T - 1)) : L || t.inputTimeScale / 30;
                                        if (r) {
                                            var w = n - S,
                                                O = w > C,
                                                x = w < -1;
                                            if ((O || x) && (O ? h.logger.warn("AVC: " + (0, c.toMsFromMpegTsClock)(w, !0) + " ms (" + w + "dts) hole between fragments detected, filling it") : h.logger.warn("AVC: " + (0, c.toMsFromMpegTsClock)(-w, !0) + " ms (" + w + "dts) overlapping between fragments detected"), !x || S > d[0].pts)) {
                                                n = S;
                                                var P = d[0].pts - w;
                                                d[0].dts = n, d[0].pts = P, h.logger.log("Video: First PTS/DTS adjusted: " + (0, c.toMsFromMpegTsClock)(P, !0) + "/" + (0, c.toMsFromMpegTsClock)(n, !0) + ", delta: " + (0, c.toMsFromMpegTsClock)(w, !0) + " ms")
                                            }
                                        }
                                        n = Math.max(0, n);
                                        for (var F = 0, M = 0, N = 0; N < T; N++) {
                                            for (var U = d[N], B = U.units, G = B.length, j = 0, H = 0; H < G; H++) j += B[H].data.length;
                                            M += j, F += G, U.length = j, U.dts = Math.max(U.dts, n), k = Math.min(U.pts, k), D = Math.max(U.pts, D)
                                        }
                                        a = d[T - 1].dts;
                                        var K, V = M + 4 * F + 8;
                                        try {
                                            K = new Uint8Array(V)
                                        } catch (t) {
                                            return void this.observer.emit(l.Events.ERROR, l.Events.ERROR, {
                                                type: u.ErrorTypes.MUX_ERROR,
                                                details: u.ErrorDetails.REMUX_ALLOC_ERROR,
                                                fatal: !1,
                                                bytes: V,
                                                reason: "fail allocating video mdat " + V
                                            })
                                        }
                                        var W = new DataView(K.buffer);
                                        W.setUint32(0, V), K.set(o.types.mdat, 4);
                                        for (var Y = !1, q = Number.POSITIVE_INFINITY, X = Number.POSITIVE_INFINITY, z = Number.NEGATIVE_INFINITY, Z = Number.NEGATIVE_INFINITY, $ = 0; $ < T; $++) {
                                            for (var Q = d[$], J = Q.units, tt = 0, et = 0, rt = J.length; et < rt; et++) {
                                                var it = J[et],
                                                    nt = it.data,
                                                    at = it.data.byteLength;
                                                W.setUint32(b, at), b += 4, K.set(nt, b), b += at, tt += 4 + at
                                            }
                                            var st = void 0;
                                            if ($ < T - 1) L = d[$ + 1].dts - Q.dts, st = d[$ + 1].pts - Q.pts;
                                            else {
                                                var ot = this.config,
                                                    lt = $ > 0 ? Q.dts - d[$ - 1].dts : C;
                                                if (st = $ > 0 ? Q.pts - d[$ - 1].pts : C, ot.stretchShortVideoTrack && null !== this.nextAudioPts) {
                                                    var ut = Math.floor(ot.maxBufferHole * s),
                                                        ht = (i ? k + i * s : this.nextAudioPts) - Q.pts;
                                                    ht > ut ? ((L = ht - lt) < 0 ? L = lt : Y = !0, h.logger.log("[mp4-remuxer]: It is approximately " + ht / 90 + " ms to the next segment; using duration " + L / 90 + " ms for the last video frame.")) : L = lt
                                                } else L = lt
                                            }
                                            var dt = Math.round(Q.pts - Q.dts);
                                            q = Math.min(q, L), z = Math.max(z, L), X = Math.min(X, st), Z = Math.max(Z, st), p.push(new E(Q.key, L, tt, dt))
                                        }
                                        if (p.length)
                                            if (g) {
                                                if (g < 70) {
                                                    var ct = p[0].flags;
                                                    ct.dependsOn = 2, ct.isNonSync = 0
                                                }
                                            } else if (v && Z - X < z - q && C / z < .025 && 0 === p[0].cts) {
                                                h.logger.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
                                                for (var ft = n, gt = 0, vt = p.length; gt < vt; gt++) {
                                                    var pt = ft + p[gt].duration,
                                                        mt = ft + p[gt].cts;
                                                    if (gt < vt - 1) {
                                                        var Tt = pt + p[gt + 1].cts;
                                                        p[gt].duration = Tt - mt
                                                    } else p[gt].duration = gt ? p[gt - 1].duration : C;
                                                    p[gt].cts = 0, ft = pt
                                                }
                                            }
                                        L = Y || !L ? C : L, this.nextAvcDts = S = a + L, this.videoSampleDuration = L, this.isVideoContiguous = !0;
                                        var yt = {
                                            data1: o.moof(t.sequenceNumber++, n, f({}, t, {
                                                samples: p
                                            })),
                                            data2: K,
                                            startPTS: k / s,
                                            endPTS: (D + L) / s,
                                            startDTS: n / s,
                                            endDTS: S / s,
                                            type: "video",
                                            hasAudio: !1,
                                            hasVideo: !0,
                                            nb: p.length,
                                            dropped: t.dropped
                                        };
                                        return t.samples = [], t.dropped = 0, yt
                                    }, e.remuxAudio = function(t, e, r, i, a) {
                                        var s = t.inputTimeScale,
                                            d = s / (t.samplerate ? t.samplerate : s),
                                            c = "aac" === t.segmentCodec ? 1024 : 1152,
                                            g = c * d,
                                            v = this._initPTS,
                                            p = "mp3" === t.segmentCodec && this.typeSupported.mpeg,
                                            T = [],
                                            y = void 0 !== a,
                                            S = t.samples,
                                            b = p ? 0 : 8,
                                            L = this.nextAudioPts || -1,
                                            k = e * s;
                                        if (this.isAudioContiguous = r = r || S.length && L > 0 && (i && Math.abs(k - L) < 9e3 || Math.abs(m(S[0].pts - v, k) - L) < 20 * g), S.forEach((function(t) {
                                            t.pts = m(t.pts - v, k)
                                        })), !r || L < 0) {
                                            if (S = S.filter((function(t) {
                                                return t.pts >= 0
                                            })), !S.length) return;
                                            L = 0 === a ? 0 : i && !y ? Math.max(0, k) : S[0].pts
                                        }
                                        if ("aac" === t.segmentCodec)
                                            for (var D = this.config.maxAudioFramesDrift, R = 0, A = L; R < S.length; R++) {
                                                var _ = S[R],
                                                    I = _.pts,
                                                    C = I - A,
                                                    w = Math.abs(1e3 * C / s);
                                                if (C <= -D * g && y) 0 === R && (h.logger.warn("Audio frame @ " + (I / s).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * C / s) + " ms."), this.nextAudioPts = L = A = I);
                                                else if (C >= D * g && w < 1e4 && y) {
                                                    var O = Math.round(C / g);
                                                    (A = I - O * g) < 0 && (O--, A += g), 0 === R && (this.nextAudioPts = L = A), h.logger.warn("[mp4-remuxer]: Injecting " + O + " audio frame @ " + (A / s).toFixed(3) + "s due to " + Math.round(1e3 * C / s) + " ms gap.");
                                                    for (var x = 0; x < O; x++) {
                                                        var P = Math.max(A, 0),
                                                            F = n.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                                                        F || (h.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), F = _.unit.subarray()), S.splice(R, 0, {
                                                            unit: F,
                                                            pts: P
                                                        }), A += g, R++
                                                    }
                                                }
                                                _.pts = A, A += g
                                            }
                                        for (var M, N = null, U = null, B = 0, G = S.length; G--;) B += S[G].unit.byteLength;
                                        for (var j = 0, H = S.length; j < H; j++) {
                                            var K = S[j],
                                                V = K.unit,
                                                W = K.pts;
                                            if (null !== U) T[j - 1].duration = Math.round((W - U) / d);
                                            else {
                                                if (r && "aac" === t.segmentCodec && (W = L), N = W, !(B > 0)) return;
                                                B += b;
                                                try {
                                                    M = new Uint8Array(B)
                                                } catch (t) {
                                                    return void this.observer.emit(l.Events.ERROR, l.Events.ERROR, {
                                                        type: u.ErrorTypes.MUX_ERROR,
                                                        details: u.ErrorDetails.REMUX_ALLOC_ERROR,
                                                        fatal: !1,
                                                        bytes: B,
                                                        reason: "fail allocating audio mdat " + B
                                                    })
                                                }
                                                p || (new DataView(M.buffer).setUint32(0, B), M.set(o.types.mdat, 4))
                                            }
                                            M.set(V, b);
                                            var Y = V.byteLength;
                                            b += Y, T.push(new E(!0, c, Y, 0)), U = W
                                        }
                                        var q = T.length;
                                        if (q) {
                                            var X = T[T.length - 1];
                                            this.nextAudioPts = L = U + d * X.duration;
                                            var z = p ? new Uint8Array(0) : o.moof(t.sequenceNumber++, N / d, f({}, t, {
                                                samples: T
                                            }));
                                            t.samples = [];
                                            var Z = N / s,
                                                $ = L / s,
                                                Q = {
                                                    data1: z,
                                                    data2: M,
                                                    startPTS: Z,
                                                    endPTS: $,
                                                    startDTS: Z,
                                                    endDTS: $,
                                                    type: "audio",
                                                    hasAudio: !0,
                                                    hasVideo: !1,
                                                    nb: q
                                                };
                                            return this.isAudioContiguous = !0, Q
                                        }
                                    }, e.remuxEmptyAudio = function(t, e, r, i) {
                                        var a = t.inputTimeScale,
                                            s = a / (t.samplerate ? t.samplerate : a),
                                            o = this.nextAudioPts,
                                            l = (null !== o ? o : i.startDTS * a) + this._initDTS,
                                            u = i.endDTS * a + this._initDTS,
                                            d = 1024 * s,
                                            c = Math.ceil((u - l) / d),
                                            f = n.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                                        if (h.logger.warn("[mp4-remuxer]: remux empty Audio"), f) {
                                            for (var g = [], v = 0; v < c; v++) {
                                                var p = l + v * d;
                                                g.push({
                                                    unit: f,
                                                    pts: p,
                                                    dts: p
                                                })
                                            }
                                            return t.samples = g, this.remuxAudio(t, e, r, !1)
                                        }
                                        h.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")
                                    }, t
                                }();

                            function m(t, e) {
                                var r;
                                if (null === e) return t;
                                for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += r;
                                return t
                            }

                            function T(t, e, r, i) {
                                var n = t.samples.length;
                                if (n) {
                                    for (var a = t.inputTimeScale, s = 0; s < n; s++) {
                                        var o = t.samples[s];
                                        o.pts = m(o.pts - r, e * a) / a, o.dts = m(o.dts - i, e * a) / a
                                    }
                                    var l = t.samples;
                                    return t.samples = [], {
                                        samples: l
                                    }
                                }
                            }

                            function y(t, e, r) {
                                var i = t.samples.length;
                                if (i) {
                                    for (var n = t.inputTimeScale, a = 0; a < i; a++) {
                                        var s = t.samples[a];
                                        s.pts = m(s.pts - r, e * n) / n
                                    }
                                    t.samples.sort((function(t, e) {
                                        return t.pts - e.pts
                                    }));
                                    var o = t.samples;
                                    return t.samples = [], {
                                        samples: o
                                    }
                                }
                            }
                            var E = function(t, e, r, i) {
                                    this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e, this.size = r, this.cts = i, this.flags = new S(t)
                                },
                                S = function(t) {
                                    this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = t ? 2 : 1, this.isNonSync = t ? 0 : 1
                                }
                        },
                        856: (t, e, r) => {
                            "use strict";
                            var i;
                            r.r(e), r.d(e, {
                                MetadataSchema: () => i
                            }),
                                function(t) {
                                    t.audioId3 = "org.id3", t.dateRange = "com.apple.quicktime.HLS", t.emsg = "https://aomedia.org/emsg/ID3"
                                }(i || (i = {}))
                        },
                        308: (t, e, r) => {
                            "use strict";
                            var i, n;
                            r.r(e), r.d(e, {
                                PlaylistContextType: () => i,
                                PlaylistLevelType: () => n
                            }),
                                function(t) {
                                    t.MANIFEST = "manifest", t.LEVEL = "level", t.AUDIO_TRACK = "audioTrack", t.SUBTITLE_TRACK = "subtitleTrack"
                                }(i || (i = {})),
                                function(t) {
                                    t.MAIN = "main", t.AUDIO = "audio", t.SUBTITLE = "subtitle"
                                }(n || (n = {}))
                        },
                        93: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                enableLogs: () => o,
                                logger: () => l
                            });
                            var i = function() {},
                                n = {
                                    trace: i,
                                    debug: i,
                                    log: i,
                                    warn: i,
                                    info: i,
                                    error: i
                                },
                                a = n;

                            function s(t) {
                                var e = self.console[t];
                                return e ? e.bind(self.console, "[" + t + "] >") : i
                            }

                            function o(t, e) {
                                if (self.console && !0 === t || "object" == typeof t) {
                                    ! function(t) {
                                        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                                        r.forEach((function(e) {
                                            a[e] = t[e] ? t[e].bind(t) : s(e)
                                        }))
                                    }(t, "debug", "log", "info", "warn", "error");
                                    try {
                                        a.log('Debug logs enabled for "' + e + '"')
                                    } catch (t) {
                                        a = n
                                    }
                                } else a = n
                            }
                            var l = n
                        },
                        63: (t, e, r) => {
                            "use strict";
                            r.r(e), r.d(e, {
                                RemuxerTrackIdConfig: () => l,
                                appendUint8Array: () => b,
                                bin2str: () => u,
                                computeRawDurationFromSamples: () => y,
                                discardEPB: () => R,
                                findBox: () => g,
                                getDuration: () => T,
                                getStartDTS: () => m,
                                offsetStartDTS: () => E,
                                parseEmsg: () => A,
                                parseInitSegment: () => p,
                                parseSEIMessageFromNALu: () => D,
                                parseSamples: () => L,
                                parseSegmentIndex: () => v,
                                readSint32: () => c,
                                readUint16: () => h,
                                readUint32: () => d,
                                segmentValidRange: () => S,
                                writeUint32: () => f
                            });
                            var i = r(145),
                                n = r(923),
                                a = r(181),
                                s = Math.pow(2, 32) - 1,
                                o = [].push,
                                l = {
                                    video: 1,
                                    audio: 2,
                                    id3: 3,
                                    text: 4
                                };

                            function u(t) {
                                return String.fromCharCode.apply(null, t)
                            }

                            function h(t, e) {
                                var r = t[e] << 8 | t[e + 1];
                                return r < 0 ? 65536 + r : r
                            }

                            function d(t, e) {
                                var r = c(t, e);
                                return r < 0 ? 4294967296 + r : r
                            }

                            function c(t, e) {
                                return t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
                            }

                            function f(t, e, r) {
                                t[e] = r >> 24, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r
                            }

                            function g(t, e) {
                                var r = [];
                                if (!e.length) return r;
                                for (var i = t.byteLength, n = 0; n < i;) {
                                    var a = d(t, n),
                                        s = a > 1 ? n + a : i;
                                    if (u(t.subarray(n + 4, n + 8)) === e[0])
                                        if (1 === e.length) r.push(t.subarray(n + 8, s));
                                        else {
                                            var l = g(t.subarray(n + 8, s), e.slice(1));
                                            l.length && o.apply(r, l)
                                        } n = s
                                }
                                return r
                            }

                            function v(t) {
                                var e = [],
                                    r = t[0],
                                    i = 8,
                                    n = d(t, i);
                                i += 4, i += 0 === r ? 8 : 16, i += 2;
                                var a = t.length + 0,
                                    s = h(t, i);
                                i += 2;
                                for (var o = 0; o < s; o++) {
                                    var l = i,
                                        u = d(t, l);
                                    l += 4;
                                    var c = 2147483647 & u;
                                    if (1 == (2147483648 & u) >>> 31) return console.warn("SIDX has hierarchical references (not supported)"), null;
                                    var f = d(t, l);
                                    l += 4, e.push({
                                        referenceSize: c,
                                        subsegmentDuration: f,
                                        info: {
                                            duration: f / n,
                                            start: a,
                                            end: a + c - 1
                                        }
                                    }), a += c, i = l += 4
                                }
                                return {
                                    earliestPresentationTime: 0,
                                    timescale: n,
                                    version: r,
                                    referencesCount: s,
                                    references: e
                                }
                            }

                            function p(t) {
                                for (var e = [], r = g(t, ["moov", "trak"]), i = 0; i < r.length; i++) {
                                    var a = r[i],
                                        s = g(a, ["tkhd"])[0];
                                    if (s) {
                                        var o = s[0],
                                            l = 0 === o ? 12 : 20,
                                            h = d(s, l),
                                            c = g(a, ["mdia", "mdhd"])[0];
                                        if (c) {
                                            var f = d(c, l = 0 === (o = c[0]) ? 12 : 20),
                                                v = g(a, ["mdia", "hdlr"])[0];
                                            if (v) {
                                                var p = u(v.subarray(8, 12)),
                                                    m = {
                                                        soun: n.ElementaryStreamTypes.AUDIO,
                                                        vide: n.ElementaryStreamTypes.VIDEO
                                                    } [p];
                                                if (m) {
                                                    var T = g(a, ["mdia", "minf", "stbl", "stsd"])[0],
                                                        y = void 0;
                                                    T && (y = u(T.subarray(12, 16))), e[h] = {
                                                        timescale: f,
                                                        type: m
                                                    }, e[m] = {
                                                        timescale: f,
                                                        id: h,
                                                        codec: y
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                return g(t, ["moov", "mvex", "trex"]).forEach((function(t) {
                                    var r = d(t, 4),
                                        i = e[r];
                                    i && (i.default = {
                                        duration: d(t, 12),
                                        flags: d(t, 20)
                                    })
                                })), e
                            }

                            function m(t, e) {
                                return g(e, ["moof", "traf"]).reduce((function(e, r) {
                                    var i = g(r, ["tfdt"])[0],
                                        n = i[0],
                                        a = g(r, ["tfhd"]).reduce((function(e, r) {
                                            var a = d(r, 4),
                                                s = t[a];
                                            if (s) {
                                                var o = d(i, 4);
                                                1 === n && (o *= Math.pow(2, 32), o += d(i, 8));
                                                var l = o / (s.timescale || 9e4);
                                                if (isFinite(l) && (null === e || l < e)) return l
                                            }
                                            return e
                                        }), null);
                                    return null !== a && isFinite(a) && (null === e || a < e) ? a : e
                                }), null) || 0
                            }

                            function T(t, e) {
                                for (var r = 0, i = 0, a = 0, s = g(t, ["moof", "traf"]), o = 0; o < s.length; o++) {
                                    var l = s[o],
                                        u = g(l, ["tfhd"])[0],
                                        h = e[d(u, 4)];
                                    if (h) {
                                        var c = h.default,
                                            f = d(u, 0) | (null == c ? void 0 : c.flags),
                                            p = null == c ? void 0 : c.duration;
                                        8 & f && (p = d(u, 2 & f ? 12 : 8));
                                        for (var m = h.timescale || 9e4, T = g(l, ["trun"]), E = 0; E < T.length; E++) !(r = y(T[E])) && p && (r = p * d(T[E], 4)), h.type === n.ElementaryStreamTypes.VIDEO ? i += r / m : h.type === n.ElementaryStreamTypes.AUDIO && (a += r / m)
                                    }
                                }
                                if (0 === i && 0 === a) {
                                    for (var S = 0, b = g(t, ["sidx"]), L = 0; L < b.length; L++) {
                                        var k = v(b[L]);
                                        null != k && k.references && (S += k.references.reduce((function(t, e) {
                                            return t + e.info.duration || 0
                                        }), 0))
                                    }
                                    return S
                                }
                                return i || a
                            }

                            function y(t) {
                                var e = d(t, 0),
                                    r = 8;
                                1 & e && (r += 4), 4 & e && (r += 4);
                                for (var i = 0, n = d(t, 4), a = 0; a < n; a++) 256 & e && (i += d(t, r), r += 4), 512 & e && (r += 4), 1024 & e && (r += 4), 2048 & e && (r += 4);
                                return i
                            }

                            function E(t, e, r) {
                                g(e, ["moof", "traf"]).forEach((function(e) {
                                    g(e, ["tfhd"]).forEach((function(i) {
                                        var n = d(i, 4),
                                            a = t[n];
                                        if (a) {
                                            var o = a.timescale || 9e4;
                                            g(e, ["tfdt"]).forEach((function(t) {
                                                var e = t[0],
                                                    i = d(t, 4);
                                                if (0 === e) i -= r * o, f(t, 4, i = Math.max(i, 0));
                                                else {
                                                    i *= Math.pow(2, 32), i += d(t, 8), i -= r * o, i = Math.max(i, 0);
                                                    var n = Math.floor(i / (s + 1)),
                                                        a = Math.floor(i % (s + 1));
                                                    f(t, 4, n), f(t, 8, a)
                                                }
                                            }))
                                        }
                                    }))
                                }))
                            }

                            function S(t) {
                                var e = {
                                        valid: null,
                                        remainder: null
                                    },
                                    r = g(t, ["moof"]);
                                if (!r) return e;
                                if (r.length < 2) return e.remainder = t, e;
                                var n = r[r.length - 1];
                                return e.valid = (0, i.sliceUint8)(t, 0, n.byteOffset - 8), e.remainder = (0, i.sliceUint8)(t, n.byteOffset - 8), e
                            }

                            function b(t, e) {
                                var r = new Uint8Array(t.length + e.length);
                                return r.set(t), r.set(e, t.length), r
                            }

                            function L(t, e) {
                                var r = [],
                                    i = e.samples,
                                    a = e.timescale,
                                    s = e.id,
                                    o = !1;
                                return g(i, ["moof"]).map((function(l) {
                                    var u = l.byteOffset - 8;
                                    g(l, ["traf"]).map((function(l) {
                                        var h = g(l, ["tfdt"]).map((function(t) {
                                            var e = t[0],
                                                r = d(t, 4);
                                            return 1 === e && (r *= Math.pow(2, 32), r += d(t, 8)), r / a
                                        }))[0];
                                        return void 0 !== h && (t = h), g(l, ["tfhd"]).map((function(h) {
                                            var f = d(h, 4),
                                                v = 16777215 & d(h, 0),
                                                p = 0,
                                                m = 0 != (16 & v),
                                                T = 0,
                                                y = 0 != (32 & v),
                                                E = 8;
                                            f === s && (0 != (1 & v) && (E += 8), 0 != (2 & v) && (E += 4), 0 != (8 & v) && (p = d(h, E), E += 4), m && (T = d(h, E), E += 4), y && (E += 4), "video" === e.type && (o = function(t) {
                                                if (!t) return !1;
                                                var e = t.indexOf("."),
                                                    r = e < 0 ? t : t.substring(0, e);
                                                return "hvc1" === r || "hev1" === r || "dvh1" === r || "dvhe" === r
                                            }(e.codec)), g(l, ["trun"]).map((function(s) {
                                                var l = s[0],
                                                    h = 16777215 & d(s, 0),
                                                    f = 0 != (1 & h),
                                                    g = 0,
                                                    v = 0 != (4 & h),
                                                    m = 0 != (256 & h),
                                                    y = 0,
                                                    E = 0 != (512 & h),
                                                    S = 0,
                                                    b = 0 != (1024 & h),
                                                    L = 0 != (2048 & h),
                                                    R = 0,
                                                    A = d(s, 4),
                                                    _ = 8;
                                                f && (g = d(s, _), _ += 4), v && (_ += 4);
                                                for (var I = g + u, C = 0; C < A; C++) {
                                                    if (m ? (y = d(s, _), _ += 4) : y = p, E ? (S = d(s, _), _ += 4) : S = T, b && (_ += 4), L && (R = 0 === l ? d(s, _) : c(s, _), _ += 4), e.type === n.ElementaryStreamTypes.VIDEO)
                                                        for (var w = 0; w < S;) {
                                                            var O = d(i, I);
                                                            k(o, i[I += 4]) && D(i.subarray(I, I + O), o ? 2 : 1, t + R / a, r), I += O, w += O + 4
                                                        }
                                                    t += y / a
                                                }
                                            })))
                                        }))
                                    }))
                                })), r
                            }

                            function k(t, e) {
                                if (t) {
                                    var r = e >> 1 & 63;
                                    return 39 === r || 40 === r
                                }
                                return 6 == (31 & e)
                            }

                            function D(t, e, r, i) {
                                var n = R(t),
                                    s = 0;
                                s += e;
                                for (var o = 0, l = 0, u = !1, c = 0; s < n.length;) {
                                    o = 0;
                                    do {
                                        if (s >= n.length) break;
                                        o += c = n[s++]
                                    } while (255 === c);
                                    l = 0;
                                    do {
                                        if (s >= n.length) break;
                                        l += c = n[s++]
                                    } while (255 === c);
                                    var f = n.length - s;
                                    if (!u && 4 === o && s < n.length) {
                                        if (u = !0, 181 === n[s++]) {
                                            var g = h(n, s);
                                            if (s += 2, 49 === g) {
                                                var v = d(n, s);
                                                if (s += 4, 1195456820 === v) {
                                                    var p = n[s++];
                                                    if (3 === p) {
                                                        var m = n[s++],
                                                            T = 64 & m,
                                                            y = T ? 2 + 3 * (31 & m) : 0,
                                                            E = new Uint8Array(y);
                                                        if (T) {
                                                            E[0] = m;
                                                            for (var S = 1; S < y; S++) E[S] = n[s++]
                                                        }
                                                        i.push({
                                                            type: p,
                                                            payloadType: o,
                                                            pts: r,
                                                            bytes: E
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                    } else if (5 === o && l < f) {
                                        if (u = !0, l > 16) {
                                            for (var b = [], L = 0; L < 16; L++) {
                                                var k = n[s++].toString(16);
                                                b.push(1 == k.length ? "0" + k : k), 3 !== L && 5 !== L && 7 !== L && 9 !== L || b.push("-")
                                            }
                                            for (var D = l - 16, A = new Uint8Array(D), _ = 0; _ < D; _++) A[_] = n[s++];
                                            i.push({
                                                payloadType: o,
                                                pts: r,
                                                uuid: b.join(""),
                                                userData: (0, a.utf8ArrayToStr)(A),
                                                userDataBytes: A
                                            })
                                        }
                                    } else if (l < f) s += l;
                                    else if (l > f) break
                                }
                            }

                            function R(t) {
                                for (var e = t.byteLength, r = [], i = 1; i < e - 2;) 0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2), i += 2) : i++;
                                if (0 === r.length) return t;
                                var n = e - r.length,
                                    a = new Uint8Array(n),
                                    s = 0;
                                for (i = 0; i < n; s++, i++) s === r[0] && (s++, r.shift()), a[i] = t[s];
                                return a
                            }

                            function A(t) {
                                var e = t[0],
                                    r = "",
                                    i = "",
                                    n = 0,
                                    a = 0,
                                    s = 0,
                                    o = 0,
                                    l = 0,
                                    h = 0;
                                if (0 === e) {
                                    for (;
                                        "\0" !== u(t.subarray(h, h + 1));) r += u(t.subarray(h, h + 1)), h += 1;
                                    for (r += u(t.subarray(h, h + 1)), h += 1;
                                         "\0" !== u(t.subarray(h, h + 1));) i += u(t.subarray(h, h + 1)), h += 1;
                                    i += u(t.subarray(h, h + 1)), h += 1, n = d(t, 12), a = d(t, 16), o = d(t, 20), l = d(t, 24), h = 28
                                } else if (1 === e) {
                                    n = d(t, h += 4);
                                    var c = d(t, h += 4),
                                        f = d(t, h += 4);
                                    for (h += 4, s = Math.pow(2, 32) * c + f, Number.isSafeInteger(s) || (s = Number.MAX_SAFE_INTEGER, console.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = d(t, h), l = d(t, h += 4), h += 4;
                                         "\0" !== u(t.subarray(h, h + 1));) r += u(t.subarray(h, h + 1)), h += 1;
                                    for (r += u(t.subarray(h, h + 1)), h += 1;
                                         "\0" !== u(t.subarray(h, h + 1));) i += u(t.subarray(h, h + 1)), h += 1;
                                    i += u(t.subarray(h, h + 1)), h += 1
                                }
                                return {
                                    schemeIdUri: r,
                                    value: i,
                                    timeScale: n,
                                    presentationTime: s,
                                    presentationTimeDelta: a,
                                    eventDuration: o,
                                    id: l,
                                    payload: t.subarray(h, t.byteLength)
                                }
                            }
                        },
                        673: (t, e, r) => {
                            "use strict";

                            function i(t, e, r, i) {
                                void 0 === r && (r = 1), void 0 === i && (i = !1);
                                var n = t * e * r;
                                return i ? Math.round(n) : n
                            }

                            function n(t, e, r, n) {
                                return void 0 === r && (r = 1), void 0 === n && (n = !1), i(t, e, 1 / r, n)
                            }

                            function a(t, e) {
                                return void 0 === e && (e = !1), i(t, 1e3, 1 / 9e4, e)
                            }

                            function s(t, e) {
                                return void 0 === e && (e = 1), i(t, 9e4, 1 / e)
                            }
                            r.r(e), r.d(e, {
                                toMpegTsClockFromTimescale: () => s,
                                toMsFromMpegTsClock: () => a,
                                toTimescaleFromBase: () => i,
                                toTimescaleFromScale: () => n
                            })
                        },
                        145: (t, e, r) => {
                            "use strict";

                            function i(t, e, r) {
                                return Uint8Array.prototype.slice ? t.slice(e, r) : new Uint8Array(Array.prototype.slice.call(t, e, r))
                            }
                            r.r(e), r.d(e, {
                                sliceUint8: () => i
                            })
                        },
                        729: t => {
                            "use strict";
                            var e = Object.prototype.hasOwnProperty,
                                r = "~";

                            function i() {}

                            function n(t, e, r) {
                                this.fn = t, this.context = e, this.once = r || !1
                            }

                            function a(t, e, i, a, s) {
                                if ("function" != typeof i) throw new TypeError("The listener must be a function");
                                var o = new n(i, a || t, s),
                                    l = r ? r + e : e;
                                return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o, t._eventsCount++), t
                            }

                            function s(t, e) {
                                0 == --t._eventsCount ? t._events = new i : delete t._events[e]
                            }

                            function o() {
                                this._events = new i, this._eventsCount = 0
                            }
                            Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (r = !1)), o.prototype.eventNames = function() {
                                var t, i, n = [];
                                if (0 === this._eventsCount) return n;
                                for (i in t = this._events) e.call(t, i) && n.push(r ? i.slice(1) : i);
                                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
                            }, o.prototype.listeners = function(t) {
                                var e = r ? r + t : t,
                                    i = this._events[e];
                                if (!i) return [];
                                if (i.fn) return [i.fn];
                                for (var n = 0, a = i.length, s = new Array(a); n < a; n++) s[n] = i[n].fn;
                                return s
                            }, o.prototype.listenerCount = function(t) {
                                var e = r ? r + t : t,
                                    i = this._events[e];
                                return i ? i.fn ? 1 : i.length : 0
                            }, o.prototype.emit = function(t, e, i, n, a, s) {
                                var o = r ? r + t : t;
                                if (!this._events[o]) return !1;
                                var l, u, h = this._events[o],
                                    d = arguments.length;
                                if (h.fn) {
                                    switch (h.once && this.removeListener(t, h.fn, void 0, !0), d) {
                                        case 1:
                                            return h.fn.call(h.context), !0;
                                        case 2:
                                            return h.fn.call(h.context, e), !0;
                                        case 3:
                                            return h.fn.call(h.context, e, i), !0;
                                        case 4:
                                            return h.fn.call(h.context, e, i, n), !0;
                                        case 5:
                                            return h.fn.call(h.context, e, i, n, a), !0;
                                        case 6:
                                            return h.fn.call(h.context, e, i, n, a, s), !0
                                    }
                                    for (u = 1, l = new Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
                                    h.fn.apply(h.context, l)
                                } else {
                                    var c, f = h.length;
                                    for (u = 0; u < f; u++) switch (h[u].once && this.removeListener(t, h[u].fn, void 0, !0), d) {
                                        case 1:
                                            h[u].fn.call(h[u].context);
                                            break;
                                        case 2:
                                            h[u].fn.call(h[u].context, e);
                                            break;
                                        case 3:
                                            h[u].fn.call(h[u].context, e, i);
                                            break;
                                        case 4:
                                            h[u].fn.call(h[u].context, e, i, n);
                                            break;
                                        default:
                                            if (!l)
                                                for (c = 1, l = new Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
                                            h[u].fn.apply(h[u].context, l)
                                    }
                                }
                                return !0
                            }, o.prototype.on = function(t, e, r) {
                                return a(this, t, e, r, !1)
                            }, o.prototype.once = function(t, e, r) {
                                return a(this, t, e, r, !0)
                            }, o.prototype.removeListener = function(t, e, i, n) {
                                var a = r ? r + t : t;
                                if (!this._events[a]) return this;
                                if (!e) return s(this, a), this;
                                var o = this._events[a];
                                if (o.fn) o.fn !== e || n && !o.once || i && o.context !== i || s(this, a);
                                else {
                                    for (var l = 0, u = [], h = o.length; l < h; l++)(o[l].fn !== e || n && !o[l].once || i && o[l].context !== i) && u.push(o[l]);
                                    u.length ? this._events[a] = 1 === u.length ? u[0] : u : s(this, a)
                                }
                                return this
                            }, o.prototype.removeAllListeners = function(t) {
                                var e;
                                return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new i, this._eventsCount = 0), this
                            }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = r, o.EventEmitter = o, t.exports = o
                        },
                        945: function(t) {
                            var e, r, i, n, a;
                            e = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, r = /^(?=([^\/?#]*))\1([^]*)$/, i = /(?:\/|^)\.(?=\/)/g, n = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, a = {
                                buildAbsoluteURL: function(t, e, i) {
                                    if (i = i || {}, t = t.trim(), !(e = e.trim())) {
                                        if (!i.alwaysNormalize) return t;
                                        var n = a.parseURL(t);
                                        if (!n) throw new Error("Error trying to parse base URL.");
                                        return n.path = a.normalizePath(n.path), a.buildURLFromParts(n)
                                    }
                                    var s = a.parseURL(e);
                                    if (!s) throw new Error("Error trying to parse relative URL.");
                                    if (s.scheme) return i.alwaysNormalize ? (s.path = a.normalizePath(s.path), a.buildURLFromParts(s)) : e;
                                    var o = a.parseURL(t);
                                    if (!o) throw new Error("Error trying to parse base URL.");
                                    if (!o.netLoc && o.path && "/" !== o.path[0]) {
                                        var l = r.exec(o.path);
                                        o.netLoc = l[1], o.path = l[2]
                                    }
                                    o.netLoc && !o.path && (o.path = "/");
                                    var u = {
                                        scheme: o.scheme,
                                        netLoc: s.netLoc,
                                        path: null,
                                        params: s.params,
                                        query: s.query,
                                        fragment: s.fragment
                                    };
                                    if (!s.netLoc && (u.netLoc = o.netLoc, "/" !== s.path[0]))
                                        if (s.path) {
                                            var h = o.path,
                                                d = h.substring(0, h.lastIndexOf("/") + 1) + s.path;
                                            u.path = a.normalizePath(d)
                                        } else u.path = o.path, s.params || (u.params = o.params, s.query || (u.query = o.query));
                                    return null === u.path && (u.path = i.alwaysNormalize ? a.normalizePath(s.path) : s.path), a.buildURLFromParts(u)
                                },
                                parseURL: function(t) {
                                    var r = e.exec(t);
                                    return r ? {
                                        scheme: r[1] || "",
                                        netLoc: r[2] || "",
                                        path: r[3] || "",
                                        params: r[4] || "",
                                        query: r[5] || "",
                                        fragment: r[6] || ""
                                    } : null
                                },
                                normalizePath: function(t) {
                                    for (t = t.split("").reverse().join("").replace(i, ""); t.length !== (t = t.replace(n, "")).length;);
                                    return t.split("").reverse().join("")
                                },
                                buildURLFromParts: function(t) {
                                    return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                                }
                            }, t.exports = a
                        }
                    },
                    e = {};

                function r(i) {
                    var n = e[i];
                    if (void 0 !== n) return n.exports;
                    var a = e[i] = {
                        exports: {}
                    };
                    return t[i].call(a.exports, a, a.exports, r), a.exports
                }
                return r.m = t, r.n = t => {
                    var e = t && t.__esModule ? () => t.default : () => t;
                    return r.d(e, {
                        a: e
                    }), e
                }, r.d = (t, e) => {
                    for (var i in e) r.o(e, i) && !r.o(t, i) && Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.r = t => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, r(817).default
            })(), "object" == typeof e && "object" == typeof t ? t.exports = i() : "function" == typeof define && define.amd ? define([], i) : "object" == typeof e ? e.Hls = i() : r.Hls = i())
        }
    }
]);