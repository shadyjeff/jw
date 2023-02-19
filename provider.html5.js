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
    [250], {
        8377: (e, t, r) => {
            r.d(t, {
                M: () => n,
                _: () => i
            });
            const n = function(e, t) {
                    let r;
                    const n = e.kind || "cc";
                    return r = e.default || e.defaulttrack ? "default" : e._id || e.file || n + t, r
                },
                i = function(e, t) {
                    let r = e.label || e.name || e.language;
                    return r || (r = "Unknown CC", (t += 1) > 1 && (r += ` [${t}]`)), {
                        label: r,
                        unknownCount: t
                    }
                }
        },
        6103: (e, t, r) => {
            r.d(t, {
                VS: () => m,
                xl: () => f
            });
            var n = r(7477),
                i = r(2894),
                a = r(6886),
                s = r(7941),
                o = r(7387),
                c = r(2957),
                l = r(4446);
            const d = e => {
                throw new l.rG(null, e)
            };
            const u = function(e) {
                    return e.map((e => new n.Z(e.begin, e.end, e.text)))
                },
                h = function(e, t, n, a) {
                    let h, f, m = e.responseXML ? e.responseXML.firstChild : null;
                    if (m)
                        for ("xml" === (0, s.r1)(m) && (m = m.nextSibling); m && m.nodeType === m.COMMENT_NODE;) m = m.nextSibling;
                    try {
                        if (m && "tt" === (0, s.r1)(m)) {
                            if (!e.responseXML) throw new Error("Empty XML response");
                            h = function(e) {
                                e || d(306007);
                                const t = [];
                                let r = e.getElementsByTagName("p"),
                                    n = 30;
                                const i = e.getElementsByTagName("tt");
                                if (null != i && i[0]) {
                                    const e = parseFloat(i[0].getAttribute("ttp:frameRate") || "");
                                    isNaN(e) || (n = e)
                                }
                                r || d(306005), r.length || (r = e.getElementsByTagName("tt:p"), r.length || (r = e.getElementsByTagName("tts:p")));
                                for (let i = 0; i < r.length; i++) {
                                    const a = r[i],
                                        s = a.getElementsByTagName("br");
                                    for (let t = 0; t < s.length; t++) {
                                        const r = s[t];
                                        null != r && r.parentNode && r.parentNode.replaceChild(e.createTextNode("\r\n"), r)
                                    }
                                    const o = a.innerHTML || a.textContent || a.text || "",
                                        l = (0, c.fy)(o).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                                    if (l) {
                                        const e = a.getAttribute("begin") || "",
                                            r = a.getAttribute("dur") || "",
                                            i = a.getAttribute("end") || "",
                                            s = {
                                                begin: (0, c.m9)(e, n),
                                                text: l
                                            };
                                        i ? s.end = (0, c.m9)(i, n) : r && (s.end = (s.begin || 0) + (0, c.m9)(r, n)), t.push(s)
                                    }
                                }
                                return t.length || d(306005), t
                            }(e.responseXML), f = u(h), delete t.xhr, n(f)
                        } else {
                            const s = e.responseText;
                            s.indexOf("WEBVTT") >= 0 ? r.e(347).then(function(e) {
                                return r(2776).default
                            }.bind(null, r)).catch((0, i.Jt)(301131)).then((e => {
                                const r = new e(window);
                                f = [], r.oncue = function(e) {
                                    f.push(e)
                                }, r.onflush = function() {
                                    delete t.xhr, n(f)
                                }, r.parse(s)
                            })).catch((e => {
                                delete t.xhr, a((0, l.Mm)(null, l.Y7, e))
                            })) : (h = (0, o.Z)(s), f = u(h), delete t.xhr, n(f))
                        }
                    } catch (e) {
                        delete t.xhr, a((0, l.Mm)(null, l.Y7, e))
                    }
                },
                f = function(e, t, r) {
                    e.xhr = (0, a.h)(e.file, (function(n) {
                        h(n, e, t, r)
                    }), ((e, t, n, i) => {
                        r((0, l.l9)(i, l.Y7))
                    }))
                },
                m = function(e) {
                    e && e.forEach((e => {
                        const t = e.xhr;
                        t && (t.onload = null, t.onreadystatechange = null, t.onerror = null, "abort" in t && t.abort()), delete e.xhr
                    }))
                }
        },
        7387: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(2957);
            const i = e => {
                const t = {};
                let r = e.split("\r\n");
                1 === r.length && (r = e.split("\n"));
                let i = 1;
                if (r[0].indexOf(" --\x3e ") > 0 && (i = 0), r.length > i + 1 && r[i + 1]) {
                    const e = r[i],
                        a = e.indexOf(" --\x3e ");
                    a > 0 && (t.begin = (0, n.m9)(e.substr(0, a)), t.end = (0, n.m9)(e.substr(a + 5)), t.text = r.slice(i + 1).join("\r\n"))
                }
                return t
            };

            function a(e) {
                const t = [];
                let r = (e = (0, n.fy)(e)).split("\r\n\r\n");
                1 === r.length && (r = e.split("\n\n"));
                for (let e = 0; e < r.length; e++) {
                    if ("WEBVTT" === r[e]) continue;
                    const n = i(r[e]);
                    n.text && t.push(n)
                }
                return t
            }
        },
        7477: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            let n = window.VTTCue;
            const i = e => {
                if ("string" != typeof e) return !1;
                return !!{
                    start: !0,
                    middle: !0,
                    end: !0,
                    left: !0,
                    right: !0
                } [e.toLowerCase()] && e.toLowerCase()
            };
            if (!n) {
                const e = "auto";
                n = function(t, r, n) {
                    const a = this;
                    a.hasBeenReset = !1;
                    let s = "",
                        o = !1,
                        c = t,
                        l = r,
                        d = n,
                        u = null,
                        h = "",
                        f = !0,
                        m = e,
                        g = "start",
                        T = e,
                        p = 100,
                        k = "middle";
                    Object.defineProperty(a, "id", {
                        enumerable: !0,
                        get: () => s,
                        set(e) {
                            s = `${e}`
                        }
                    }), Object.defineProperty(a, "pauseOnExit", {
                        enumerable: !0,
                        get: () => o,
                        set(e) {
                            o = Boolean(e)
                        }
                    }), Object.defineProperty(a, "startTime", {
                        enumerable: !0,
                        get: () => c,
                        set(e) {
                            if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                            c = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "endTime", {
                        enumerable: !0,
                        get: () => l,
                        set(e) {
                            if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                            l = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "text", {
                        enumerable: !0,
                        get: () => d,
                        set(e) {
                            d = `${e}`, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "region", {
                        enumerable: !0,
                        get: () => u,
                        set(e) {
                            u = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "vertical", {
                        enumerable: !0,
                        get: () => h,
                        set(e) {
                            const t = (e => "string" == typeof e && (!!{
                                "": !0,
                                lr: !0,
                                rl: !0
                            } [e.toLowerCase()] && e.toLowerCase()))(e);
                            if (!1 === t) throw new SyntaxError("An invalid or illegal string was specified.");
                            h = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "snapToLines", {
                        enumerable: !0,
                        get: () => f,
                        set(e) {
                            f = Boolean(e), this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "line", {
                        enumerable: !0,
                        get: () => m,
                        set(t) {
                            if ("number" != typeof t && t !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
                            m = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "lineAlign", {
                        enumerable: !0,
                        get: () => g,
                        set(e) {
                            const t = i(e);
                            if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                            g = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "position", {
                        enumerable: !0,
                        get: () => T,
                        set(e) {
                            if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                            T = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "size", {
                        enumerable: !0,
                        get: () => p,
                        set(e) {
                            if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                            p = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(a, "align", {
                        enumerable: !0,
                        get: () => k,
                        set(e) {
                            const t = i(e);
                            if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                            k = t, this.hasBeenReset = !0
                        }
                    }), a.displayState = void 0
                }, n.prototype.getCueAsHTML = function() {
                    return window.WebVTT.convertCueToDOMTree(window, this.text)
                }
            }
            const a = n
        },
        4506: (e, t, r) => {
            r.d(t, {
                Z: () => n
            });
            const n = e => ({
                bitrate: e.bitrate,
                label: e.label,
                width: e.width,
                height: e.height
            })
        },
        3328: (e, t, r) => {
            r.d(t, {
                Z: () => x
            });
            var n = r(6103),
                i = r(8377);
            const a = {
                    TIT2: "title",
                    TT2: "title",
                    WXXX: "url",
                    TPE1: "artist",
                    TP1: "artist",
                    TALB: "album",
                    TAL: "album"
                },
                s = (e, t) => {
                    const r = e.length;
                    let n, i, a, s = "",
                        o = t || 0;
                    for (; o < r;)
                        if (n = e[o++], 0 !== n && 3 !== n) switch (n >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                s += String.fromCharCode(n);
                                break;
                            case 12:
                            case 13:
                                i = e[o++], s += String.fromCharCode((31 & n) << 6 | 63 & i);
                                break;
                            case 14:
                                i = e[o++], a = e[o++], s += String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | (63 & a) << 0)
                        }
                    return s
                },
                o = e => {
                    const t = (e => {
                        let t = "0x";
                        for (let r = 0; r < e.length; r++) e[r] < 16 && (t += "0"), t += e[r].toString(16);
                        return parseInt(t, 16)
                    })(e);
                    return 127 & t | (32512 & t) >> 1 | (8323072 & t) >> 2 | (2130706432 & t) >> 3
                },
                c = e => {
                    const t = {};
                    if (!("value" in e) && "data" in e && e.data instanceof ArrayBuffer) {
                        const t = new Uint8Array(e.data);
                        let r = t.length;
                        e = {
                            value: {
                                key: "",
                                data: ""
                            }
                        };
                        let n = 10;
                        for (; n < 14 && n < t.length && 0 !== t[n];) e.value.key += String.fromCharCode(t[n]), n++;
                        let i = 19,
                            a = t[i];
                        3 !== a && 0 !== a || (a = t[++i], r--);
                        let c = 0;
                        if (1 !== a && 2 !== a)
                            for (let e = i + 1; e < r; e++)
                                if (0 === t[e]) {
                                    c = e - i;
                                    break
                                } if (c > 0) {
                            const r = s(t.subarray(i, i += c), 0);
                            if ("PRIV" === e.value.key) {
                                if ("com.apple.streaming.transportStreamTimestamp" === r) {
                                    const r = 1 & o(t.subarray(i, i += 4)),
                                        n = o(t.subarray(i, i += 4)) + (r ? 4294967296 : 0);
                                    e.value.data = n
                                } else e.value.data = s(t, i + 1);
                                e.value.info = r
                            } else e.value.info = r, e.value.data = s(t, i + 1)
                        } else {
                            const r = t[i];
                            e.value.data = 1 === r || 2 === r ? ((e, t) => {
                                const r = e.length - 1;
                                let n = "",
                                    i = t || 0;
                                for (; i < r;) 254 === e[i] && 255 === e[i + 1] || (n += String.fromCharCode((e[i] << 8) + e[i + 1])), i += 2;
                                return n
                            })(t, i + 1) : s(t, i + 1)
                        }
                    }
                    if (function(e, t) {
                        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                        return Object.prototype.hasOwnProperty.call(Object(e), t)
                    }(a, e.value.key) && (t[a[e.value.key]] = e.value.data), e.value.info) {
                        let r = t[e.value.key];
                        r !== Object(r) && (r = {}, t[e.value.key] = r), r[e.value.info] = e.value.data
                    } else t[e.value.key] = e.value.data;
                    return t
                };
            var l = r(8348),
                d = r(1643),
                u = r(6042);
            const h = (e, t, r) => {
                    null != t && t.length && (0, u.S6)(t, (function(t) {
                        const n = t._id || "";
                        if (r && (t._id = void 0), !l.Browser.ie && !l.Browser.safari || !e || !/^(native|subtitle|cc)/.test(n)) {
                            if (l.Browser.ie && "disabled" === t.mode || (t.mode = "disabled", t.mode = "hidden"), t.cues)
                                for (let e = t.cues.length; e--;) t.removeCue(t.cues[e]);
                            t.embedded || (t.mode = "disabled"), t.inuse = !1
                        }
                    }))
                },
                f = e => /^native(?:captions|subtitles)/.test(e),
                m = e => "captions" === e || "subtitles" === e,
                g = function(e) {
                    const t = e.target,
                        {
                            activeCues: r,
                            cues: n
                        } = t,
                        i = t._id,
                        a = this._cues,
                        s = this._activeCues;
                    if (null != n && n.length) {
                        const e = a[i];
                        a[i] = Array.prototype.slice.call(n), this.parseNativeID3Cues(n, e)
                    } else delete a[i];
                    if (null != r && r.length) {
                        const e = s[i],
                            t = s[i] = Array.prototype.slice.call(r);
                        this.triggerActiveCues(t, e)
                    } else delete s[i]
                },
                T = (e, t, r) => {
                    if (l.Browser.ie) {
                        let n = r;
                        (e || "metadata" === t.kind) && (n = new window.TextTrackCue(r.startTime, r.endTime, r.text), r.value && (n.value = r.value)), ((e, t) => {
                            const r = [],
                                n = e.mode;
                            e.mode = "hidden";
                            const i = e.cues;
                            if (i)
                                for (let n = i.length - 1; n >= 0 && i[n].startTime > t.startTime; n--) r.unshift(i[n]), e.removeCue(i[n]);
                            try {
                                e.addCue(t), r.forEach((t => e.addCue(t)))
                            } catch (e) {
                                console.error(e)
                            }
                            e.mode = n
                        })(t, n)
                    } else try {
                        t.addCue(r)
                    } catch (e) {
                        console.error(e)
                    }
                },
                p = function(e) {
                    const t = this._textTracks,
                        r = this._tracksById;
                    if (e.length > t.length) return !0;
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        if (!n._id || !r[n._id]) return !0
                    }
                    return !1
                },
                k = function() {
                    const e = this.video.textTracks,
                        t = (0, u.hX)(e, (function(e) {
                            return (e.inuse || !e._id) && m(e.kind)
                        }));
                    if (!this._textTracks || p.call(this, t)) return void this.setTextTracks(e);
                    let r = -1;
                    for (let e = 0; e < this._textTracks.length; e++)
                        if ("showing" === this._textTracks[e].mode) {
                            r = e;
                            break
                        } r !== this._currentTextTrackIndex && this.setSubtitlesTrack(r + 1)
                },
                y = function(e) {
                    const t = e.track;
                    null != t && t._id || this.setTextTracks(this.video.textTracks)
                },
                v = (e, t) => e.startTime === t.startTime && e.endTime === t.endTime && e.text === t.text && e.data === t.data && JSON.stringify(e.value) === JSON.stringify(t.value),
                b = e => {
                    const t = c(e);
                    return {
                        metadataType: "id3",
                        metadataTime: e.startTime,
                        metadata: t
                    }
                },
                x = {
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
                    addTracksListener(e, t, r) {
                        e && (this.removeTracksListener(e, t, r), this.instreamMode || (e.addEventListener ? e.addEventListener(t, r) : e[`on${t}`] = r))
                    },
                    removeTracksListener(e, t, r) {
                        e && (e.removeEventListener && r ? e.removeEventListener(t, r) : e[`on${t}`] = null)
                    },
                    clearTracks() {
                        (0, n.VS)(this._itemTracks);
                        const {
                            _tracksById: e
                        } = this;
                        if (e && Object.keys(e).forEach((t => {
                            if (0 === t.indexOf("nativemetadata")) {
                                const r = e[t];
                                this.cueChangeHandler && r.removeEventListener("cuechange", this.cueChangeHandler), h(this.renderNatively, [r], !0)
                            }
                        })), this._itemTracks = null, this._textTracks = null, this._tracksById = null, this._cuesByTrackId = null, this._metaCuesByTextTime = null, this._unknownCount = 0, this._currentTextTrackIndex = -1, this._activeCues = {}, this._cues = {}, this.renderNatively) {
                            const e = this.video.textTracks;
                            this.textTrackChangeHandler && this.removeTracksListener(e, "change", this.textTrackChangeHandler), h(this.renderNatively, e, !0)
                        }
                    },
                    clearMetaCues() {
                        const {
                            _tracksById: e,
                            _cachedVTTCues: t
                        } = this;
                        e && t && Object.keys(e).forEach((r => {
                            if (0 === r.indexOf("nativemetadata")) {
                                const n = e[r];
                                h(this.renderNatively, [n], !1), n.mode = "hidden", n.inuse = !0, n._id && (t[n._id] = {})
                            }
                        }))
                    },
                    clearCueData(e) {
                        const t = this._cachedVTTCues;
                        null != t && t[e] && (t[e] = {}, this._tracksById && (this._tracksById[e].data = []))
                    },
                    disableTextTrack() {
                        const e = this.getCurrentTextTrack();
                        if (e) {
                            e.mode = "disabled";
                            const t = e._id;
                            (t && f(t) || this.renderNatively && l.OS.iOS) && (e.mode = "hidden")
                        }
                    },
                    enableTextTrack() {
                        const e = this.getCurrentTextTrack();
                        e && (e.mode = "showing")
                    },
                    getCurrentTextTrack() {
                        if (this._textTracks) return this._textTracks[this._currentTextTrackIndex]
                    },
                    getSubtitlesTrack() {
                        return this._currentTextTrackIndex
                    },
                    addTextTracks(e) {
                        var t;
                        const r = [];
                        return e ? (this._textTracks || this._initTextTracks(), e.forEach((e => {
                            if (e.includedInManifest || e.kind && !m(e.kind)) return;
                            const t = this._createTrack(e);
                            this._addTrackToList(t), r.push(t), e.file && (e.data = [], (0, n.xl)(e, (e => {
                                t.sideloaded = !0, this.addVTTCuesToTrack(t, e)
                            }), (e => {
                                this.trigger(d.cM, e)
                            })))
                        })), null != this && null != (t = this._textTracks) && t.length && this.trigger(d.jt, {
                            tracks: this._textTracks
                        }), r) : r
                    },
                    setTextTracks(e) {
                        var t;
                        if (this._currentTextTrackIndex = -1, e) {
                            if (this._textTracks) {
                                const e = this._tracksById;
                                this._activeCues = {}, this._cues = {}, this._unknownCount = 0, this._textTracks = this._textTracks.filter((t => {
                                    const r = t._id;
                                    return this.renderNatively && r && f(r) ? (delete e[r], !1) : (t.name && 0 === t.name.indexOf("Unknown") && this._unknownCount++, 0 === r.indexOf("nativemetadata") && "com.apple.streaming" === t.inBandMetadataTrackDispatchType && delete e[r], !0)
                                }), this)
                            } else this._initTextTracks();
                            if (e.length) {
                                let t = 0;
                                const r = e.length,
                                    n = this._tracksById,
                                    a = this._cuesByTrackId;
                                for (; t < r; t++) {
                                    const r = e[t];
                                    let s = r._id || "";
                                    if (!s) {
                                        if (!1 === r.inuse && m(r.kind) && this.renderNatively) {
                                            r._id = `native${r.kind}${t}`;
                                            continue
                                        }
                                        if (m(r.kind) || "metadata" === r.kind) {
                                            if (s = r._id = `native${r.kind}${t}`, !r.label && "captions" === r.kind) {
                                                const e = (0, i._)(r, this._unknownCount);
                                                r.name = e.label, this._unknownCount = e.unknownCount
                                            }
                                        } else s = r._id = (0, i.M)(r, this._textTracks ? this._textTracks.length : 0);
                                        if (n[s]) continue;
                                        r.inuse = !0
                                    }
                                    if (r.inuse && !n[s])
                                        if ("metadata" === r.kind) {
                                            r.mode = "hidden";
                                            const e = this.cueChangeHandler = this.cueChangeHandler || g.bind(this);
                                            r.removeEventListener("cuechange", e), r.addEventListener("cuechange", e), n[s] = r
                                        } else if (m(r.kind)) {
                                            const e = r.mode;
                                            let t;
                                            if (r.mode = "hidden", (!r.cues || !r.cues.length) && r.embedded) continue;
                                            if (("disabled" !== e || f(s)) && (r.mode = e), a[s] && !a[s].loaded) {
                                                const n = a[s].cues;
                                                for (; t = n.shift();) T(this.renderNatively, r, t);
                                                r.mode = e, a[s].loaded = !0
                                            }
                                            this._addTrackToList(r)
                                        }
                                }
                            }
                            this.renderNatively && this.addTrackListeners(e), null != this && null != (t = this._textTracks) && t.length && this.trigger(d.jt, {
                                tracks: this._textTracks
                            })
                        }
                    },
                    addTrackListeners(e) {
                        let t = this.textTrackChangeHandler = this.textTrackChangeHandler || k.bind(this);
                        this.removeTracksListener(e, "change", t), this.addTracksListener(e, "change", t), (l.Browser.edge && l.Browser.ie || l.Browser.firefox) && (t = this.addTrackHandler = this.addTrackHandler || y.bind(this), this.removeTracksListener(e, "addtrack", t), this.addTracksListener(e, "addtrack", t))
                    },
                    setupSideloadedTracks(e) {
                        if (!this.renderNatively) return;
                        const t = (e = e || null) === this._itemTracks;
                        t || (0, n.VS)(this._itemTracks), this._itemTracks = e, e && (t || (this.disableTextTrack(), this._clearSideloadedTextTracks(), this.addTextTracks(e)))
                    },
                    setSubtitlesTrack(e) {
                        if (!this.renderNatively) return void(this.setCurrentSubtitleTrack && this.setCurrentSubtitleTrack(e - 1));
                        if (!this._textTracks) return;
                        if (0 === e && this._textTracks.forEach((e => {
                            e.mode = e.embedded ? "hidden" : "disabled"
                        })), this._currentTextTrackIndex === e - 1) return;
                        this.disableTextTrack(), this._currentTextTrackIndex = e - 1;
                        const t = this.getCurrentTextTrack();
                        t && (t.mode = "showing"), this.trigger(d.UF, {
                            currentTrack: this._currentTextTrackIndex + 1,
                            tracks: this._textTracks
                        })
                    },
                    createCue: (e, t, r) => new(window.VTTCue || window.TextTrackCue)(e, Math.max(t || 0, e + .25), r),
                    addVTTCue(e, t) {
                        this._tracksById || this._initTextTracks();
                        const r = e.track ? e.track : `native${e.type}`;
                        let n = this._tracksById[r];
                        const i = "captions" === e.type ? "Unknown CC" : "ID3 Metadata",
                            a = e.cue;
                        if (!n) {
                            const t = {
                                kind: e.type,
                                _id: r,
                                label: i,
                                default: !1
                            };
                            this.renderNatively || "metadata" === t.kind ? (n = this._createTrack(t), n.embedded = !0, this.setTextTracks(this.video.textTracks)) : n = this.addTextTracks([t])[0]
                        }
                        if (this._cacheVTTCue(n, a, t)) {
                            const e = this.renderNatively || "metadata" === n.kind;
                            return e ? T(e, n, a) : n.data.push(a), a
                        }
                        return null
                    },
                    addVTTCuesToTrack(e, t) {
                        var r, n;
                        if (!this.renderNatively) return;
                        const i = e._id,
                            a = this._tracksById;
                        let s = this._cuesByTrackId;
                        const o = a[i];
                        if (!o) return s || (s = this._cuesByTrackId = {}), void(s[i] = {
                            cues: t,
                            loaded: !1
                        });
                        if (null != (r = s) && null != (n = r[i]) && n.loaded) return;
                        let c;
                        for (s[i] = {
                            cues: t,
                            loaded: !0
                        }; c = t.shift();) T(this.renderNatively, o, c)
                    },
                    parseNativeID3Cues(e, t) {
                        const r = e[e.length - 1];
                        if (t && t.length === e.length && (r._parsed || v(t[t.length - 1], r))) return;
                        const n = [],
                            i = [];
                        let a = -1,
                            s = -1,
                            o = -1;
                        for (let t = 0; t < e.length; t++) {
                            const r = e[t];
                            if (!r._extended && Boolean(r.data || r.value)) {
                                if (r.startTime !== s || null === r.endTime) {
                                    o = s, s = r.startTime;
                                    const e = n[a];
                                    n[++a] = [], i[a] = [];
                                    const t = s - o;
                                    if (e && t > 0)
                                        for (let t = 0; t < e.length; t++) {
                                            const r = e[t];
                                            r.endTime = s, r._extended = !0
                                        }
                                }
                                n[a].push(r), r._parsed || (i[a].push(r), r.endTime - s < .25 && (r.endTime = s + .25), r._parsed = !0)
                            }
                        }
                        for (let e = 0; e < i.length; e++) i[e].length && i[e].forEach((e => {
                            const t = b(e);
                            this.trigger(d.O1, t)
                        }))
                    },
                    triggerActiveCues(e, t) {
                        const r = e.filter((e => {
                            if (null != t && t.some((t => v(e, t)))) return !1;
                            if (e.data) return !0;
                            const r = e.text ? (e => {
                                let t;
                                try {
                                    t = JSON.parse(e.text)
                                } catch (e) {
                                    return null
                                }
                                const r = {
                                    metadataType: t.metadataType,
                                    metadataTime: e.startTime,
                                    metadata: t
                                };
                                return t.programDateTime && (r.programDateTime = t.programDateTime), r
                            })(e) : null;
                            if (r) "emsg" === r.metadataType && (r.metadata = r.metadata || {}, r.metadata.messageData = e.value), this.trigger(d.rx, r);
                            else if (e.value) return !0;
                            return !1
                        }));
                        r.length && r.forEach((e => {
                            const t = b(e);
                            this.trigger(d.rx, t)
                        }))
                    },
                    ensureMetaTracksActive() {
                        const e = this.video.textTracks,
                            t = e.length;
                        for (let r = 0; r < t; r++) {
                            const t = e[r];
                            "metadata" === t.kind && "disabled" === t.mode && (t.mode = "hidden")
                        }
                    },
                    _cacheVTTCue(e, t, r) {
                        const n = e.kind,
                            i = e._id,
                            a = this._cachedVTTCues;
                        a[i] || (a[i] = {});
                        const s = a[i];
                        let o;
                        switch (n) {
                            case "captions":
                            case "subtitles": {
                                o = r || Math.floor(20 * t.startTime);
                                const e = `_${t.line||"auto"}`,
                                    n = Math.floor(20 * t.endTime),
                                    i = s[o + e] || s[o + 1 + e] || s[o - 1 + e];
                                return !(i && Math.abs(i - n) <= 1) && (s[o + e] = n, !0)
                            }
                            case "metadata": {
                                const e = t.data ? new Uint8Array(t.data).join("") : t.text;
                                return o = r || t.startTime + e, s[o] ? !1 : (s[o] = t.endTime, !0)
                            }
                            default:
                                return !1
                        }
                    },
                    _addTrackToList(e) {
                        this._textTracks.push(e), this._tracksById[e._id] = e
                    },
                    _createTrack(e) {
                        let t;
                        const r = (0, i._)(e, this._unknownCount),
                            n = r.label;
                        if (this._unknownCount = r.unknownCount, this.renderNatively || "metadata" === e.kind) {
                            const r = this.video.textTracks;
                            t = (0, u._e)(r, {
                                label: n
                            }), t || (t = this.video.addTextTrack(e.kind, n, e.language || "")), t.default = e.default, t.mode = "disabled", t.inuse = !0
                        } else t = e, t.data = t.data || [];
                        return t._id || (t._id = (0, i.M)(e, this._textTracks ? this._textTracks.length : 0)), t
                    },
                    _clearSideloadedTextTracks() {
                        if (!this._textTracks) return;
                        const e = this._textTracks.filter((e => e.embedded || "subs" === e.groupid));
                        this._initTextTracks();
                        const t = this._tracksById;
                        e.forEach((e => {
                            t[e._id] = e
                        })), this._textTracks = e
                    }
                }
        },
        9601: (e, t, r) => {
            r.d(t, {
                E: () => i,
                Z: () => a
            });
            var n = r(4446);
            const i = e => e >= 400 && e < 600 ? e : 6;

            function a(e, t, r) {
                let a = e + 1e3,
                    s = n.ul;
                return t > 0 ? (403 === t && (s = n.H4), a += i(t)) : "http:" === `${r}`.substring(0, 5) && "https:" === document.location.protocol ? a += 12 : 0 === t && (a += 11), {
                    code: a,
                    key: s
                }
            }
        },
        5099: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            const n = (e, t, r) => {
                const n = new Error(r);
                return n.name = e, n.code = t, n
            };

            function i(e) {
                return new Promise((function(t, r) {
                    if (e.paused) return r(n("NotAllowedError", 0, "play() failed."));
                    let i;
                    const a = function(e) {
                            if (i(), "playing" !== e.type) {
                                const t = `The play() request was interrupted by a "${e.type}" event.`;
                                return "error" === e.type ? r(n("NotSupportedError", 9, t)) : r(n("AbortError", 20, t))
                            }
                            t()
                        },
                        s = function() {
                            e.addEventListener("playing", a), e.addEventListener("abort", a), e.addEventListener("error", a), e.addEventListener("pause", a)
                        };
                    i = function() {
                        e.removeEventListener("play", s), e.removeEventListener("playing", a), e.removeEventListener("pause", a), e.removeEventListener("abort", a), e.removeEventListener("error", a)
                    }, e.addEventListener("play", s)
                }))
            }
        },
        686: (e, t, r) => {
            r.d(t, {
                s: () => i,
                v: () => a
            });
            const n = e => void 0 === e ? 120 : Math.max(e, 0),
                i = (e, t) => e !== 1 / 0 && Math.abs(e) >= Math.max(n(t), 0),
                a = (e, t) => {
                    let r = "VOD";
                    return e === 1 / 0 ? r = "LIVE" : e < 0 && (r = i(e, n(t)) ? "DVR" : "LIVE"), r
                }
        },
        3949: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(8348),
                i = r(974),
                a = r(9974);
            const s = {
                container: null,
                volume(e) {
                    this.video.volume = Math.min(Math.max(0, e / 100), 1)
                },
                mute(e) {
                    this.video.muted = Boolean(e), this.video.muted || this.video.removeAttribute("muted")
                },
                resize(e, t, r) {
                    const {
                        video: a
                    } = this, {
                        videoWidth: s,
                        videoHeight: o
                    } = a;
                    if (!(e && t && s && o)) return;
                    const c = {
                            objectFit: "",
                            width: "",
                            height: ""
                        },
                        l = e / t,
                        d = s / o;
                    if ("uniform" === r) {
                        let n;
                        n = l > d ? e - e / (l / d) : t - t / (d / l), n < 6 && (c.objectFit = "fill", r = "exactfit")
                    }
                    if (n.Browser.ie || n.OS.iOS && (n.OS.version.major || 0) < 9 || n.Browser.androidNative)
                        if ("uniform" !== r) {
                            c.objectFit = "contain";
                            let n = 1,
                                u = 1;
                            "none" === r ? n = u = l > d ? Math.ceil(100 * o / t) / 100 : Math.ceil(100 * s / e) / 100 : "fill" === r ? n = u = l > d ? l / d : d / l : "exactfit" === r && (l > d ? (n = l / d, u = 1) : (n = 1, u = d / l)), (0, i.vs)(a, `matrix(${n.toFixed(2)}, 0, 0, ${u.toFixed(2)}, 0, 0)`)
                        } else c.top = c.left = c.margin = "", (0, i.vs)(a, "");
                    (0, i.oB)(a, c)
                },
                getContainer() {
                    return this.container
                },
                setContainer(e) {
                    this.container = e, this.video.parentNode !== e && e.appendChild(this.video)
                },
                removeFromContainer() {
                    const {
                        container: e,
                        video: t
                    } = this;
                    this.container = null, e && e === t.parentNode && e.removeChild(t)
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
        186: (e, t, r) => {
            r.d(t, {
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
        8702: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(1643),
                i = r(1261);
            const a = {
                canplay() {
                    this.renderNatively && this.setTextTracks(this.video.textTracks), this.trigger(n.Jl)
                },
                play() {
                    this.stallTime = -1, this.video.paused || this.state === n._5 || this.state === n.r0 || this.setState(n.ik)
                },
                loadedmetadata() {
                    const e = {
                            metadataType: "media",
                            duration: this.getDuration(),
                            height: this.video.videoHeight,
                            width: this.video.videoWidth,
                            seekRange: this.getSeekRange()
                        },
                        t = this.drmUsed;
                    t && (e.drm = t), this.trigger(n.rx, e)
                },
                timeupdate() {
                    const e = this.video.currentTime,
                        t = this.getCurrentTime(),
                        r = this.getDuration();
                    if (isNaN(r)) return;
                    this.seeking || this.video.paused || this.state !== n.nQ && this.state !== n.ik || this.stallTime === e || (this.stallTime = -1, this.setState(n.r0), this.trigger(n.Gj));
                    const i = {
                            position: t,
                            duration: r,
                            currentTime: e,
                            seekRange: this.getSeekRange(),
                            metadata: {
                                currentTime: e
                            }
                        },
                        a = this.getLiveLatency();
                    if (null !== a && (i.latency = a, this.getTargetLatency)) {
                        const e = this.getTargetLatency();
                        null !== e && (i.targetLatency = e)
                    }(this.state === n.r0 || this.seeking && this.state !== n.bc) && this.trigger(n.R2, i)
                },
                click(e) {
                    this.trigger(n.ot, e)
                },
                volumechange() {
                    const e = this.video;
                    this.trigger(n.yH, {
                        volume: Math.round(100 * e.volume)
                    }), this.trigger(n.gy, {
                        mute: e.muted
                    })
                },
                seeking() {
                    if (this.state === n.ik) {
                        const e = this.video.buffered.length ? this.video.buffered.start(0) : -1;
                        if (this.video.currentTime === e) return
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
                    const e = this.getDuration();
                    if (e <= 0 || e === 1 / 0) return;
                    const t = this.video.buffered;
                    if (!t || 0 === t.length) return;
                    const r = (0, i.v)(t.end(t.length - 1) / e, 0, 1);
                    this.trigger(n.uT, {
                        bufferPercent: 100 * r,
                        position: this.getCurrentTime(),
                        duration: e,
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
        9974: (e, t, r) => {
            function n(e) {
                return e && e.length ? e.end(e.length - 1) : 0
            }
            r.d(t, {
                Z: () => n
            })
        },
        3343: (e, t, r) => {
            r.d(t, {
                q: () => s
            });
            var n = r(6042),
                i = r(1643);
            const a = (e, t) => {
                    const r = e[t];
                    return (0, n.xV)(r) && r >= 0 ? r : null
                },
                s = function(e, t, r) {
                    const s = ((e, t, r) => {
                        let i, s;
                        if (i = (0, n.xV)(r.startPTS) ? a(r, "startPTS") : a(r, "start"), null === i) return null;
                        switch (e) {
                            case "PROGRAM-DATE-TIME":
                                return s = "program-date-time", {
                                    metadataType: s,
                                    programDateTime: t,
                                    start: i,
                                    end: i + a(r, "duration")
                                };
                            case "EXT-X-DATERANGE": {
                                const a = {},
                                    o = t.split(",").map((e => {
                                        const t = e.split("="),
                                            r = t[0],
                                            n = (t[1] || "").replace(/^"|"$/g, "");
                                        return a[r] = n, {
                                            name: r,
                                            value: n
                                        }
                                    })),
                                    c = a["START-DATE"];
                                if (!c) return null;
                                const l = a["END-DATE"];
                                let d = i;
                                if ((0, n.xV)(r.programDateTime) && (d += (new Date(c).getTime() - new Date(r.programDateTime).getTime()) / 1e3), isNaN(d)) return null;
                                let u = parseFloat(a["PLANNED-DURATION"] || a.DURATION) || 0;
                                return !u && l && (u = (new Date(l).getTime() - new Date(c).getTime()) / 1e3), s = "date-range", {
                                    metadataType: "date-range",
                                    tag: e,
                                    content: t,
                                    attributes: o,
                                    start: d,
                                    end: d + u,
                                    startDate: c,
                                    endDate: l,
                                    duration: u
                                }
                            }
                            case "EXT-X-CUE-IN":
                            case "EXT-X-CUE-OUT":
                                return s = "scte-35", {
                                    metadataType: s,
                                    tag: e,
                                    content: t,
                                    start: i,
                                    end: i + (parseFloat(t) || 0)
                                };
                            case "DISCONTINUITY": {
                                const n = i + a(r, "duration");
                                let o;
                                return "cc" in r && (o = r.cc), s = "discontinuity", {
                                    metadataType: s,
                                    tag: e,
                                    discontinuitySequence: o,
                                    PTS: t,
                                    start: i,
                                    end: n
                                }
                            }
                            default:
                                return null
                        }
                    })(e, t, r);
                    if (s) {
                        if (!(0, n.xV)(s.start)) return;
                        const a = this.createCue(s.start, s.end, JSON.stringify(s)),
                            o = `${r.sn}_${e}_${t}`;
                        if (this.addVTTCue({
                            type: "metadata",
                            cue: a
                        }, o)) {
                            const e = s.metadataType;
                            delete s.metadataType, this.trigger(i.O1, {
                                metadataType: e,
                                metadata: s
                            })
                        }
                    }
                }
        },
        9181: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => G
            });
            var n = r(5140),
                i = r(1643),
                a = r(4506),
                s = r(8348),
                o = r(1628),
                c = r(8702),
                l = r(3949),
                d = r(186),
                u = r(686),
                h = r(974),
                f = r(2799),
                m = r(6528),
                g = r(328),
                T = r(3328),
                p = r(9974),
                k = r(5099),
                y = r(6042),
                v = r(5004),
                b = r(4446),
                x = r(1384);
            const w = 324e3,
                _ = window.clearTimeout,
                E = function() {},
                C = (e, t) => {
                    Object.keys(e).forEach((r => {
                        t.removeEventListener(r, e[r])
                    }))
                },
                L = function(e, t, r) {
                    const n = this;
                    n.state = i.bc, n.seeking = !1, n.currentTime = -1, n.retries = 0, n.maxRetries = 3, n.muteToggle = s.OS.iOS || s.Browser.safari;
                    const m = t.loadAndParseHlsMetadata;
                    n.loadAndParseHlsMetadata = void 0 === m || Boolean(m);
                    let L = t.minDvrWindow;
                    const S = r,
                        D = {
                            level: {}
                        };
                    let N, B = !1,
                        O = 0,
                        R = null,
                        M = null,
                        I = -1,
                        A = E,
                        P = null,
                        j = -1,
                        U = -1,
                        V = !1,
                        H = null,
                        X = !1,
                        Z = null,
                        F = null,
                        $ = 0;
                    this.video = S, this.supportsPlaybackRate = !0, this.startDateTime = 0;
                    const q = () => {
                            if (!(S.readyState < 2 && 0 === S.buffered.length)) return 0 === S.videoHeight
                        },
                        W = function() {
                            if (n.muteToggle && S.muted) {
                                const e = q();
                                if (void 0 === e) return;
                                const r = !S.paused;
                                S.muted = n.muteToggle = !1, e ? S.muted = t.mute : (S.muted = !0, r && S.paused && S.play())
                            }
                        },
                        G = null !== t.liveTimeout ? 1e3 * t.liveTimeout : 3e4,
                        Q = () => {
                            _(U), U = -1
                        },
                        K = function() {
                            if (0 === G) return;
                            const e = (0, p.Z)(S.buffered);
                            n.isLive() && e && H === e ? -1 === U && (U = window.setTimeout((function() {
                                V = !0, V && n.atEdgeOfLiveStream() && n.trigger(i.Ew, new b.rG(b.Sp, 220001))
                            }), G)) : (Q(), V = !1), H = e
                        },
                        Y = e => {
                            M = e
                        },
                        J = function() {
                            const e = q();
                            if (void 0 !== e) {
                                const t = e ? "audio" : "video";
                                n.trigger(i.oZ, {
                                    mediaType: t
                                })
                            }
                        },
                        z = function() {
                            const e = D.level;
                            if (e.width !== S.videoWidth || e.height !== S.videoHeight) {
                                if (!S.videoWidth && !q() || -1 === I) return;
                                n.ensureMetaTracksActive(), e.width = S.videoWidth, e.height = S.videoHeight, J(), D.reason = D.reason || "auto";
                                const t = "hls" === N[I].type ? "auto" : "manual";
                                e.index = I, e.label = N[I].label, n.trigger(i.ug, {
                                    reason: D.reason,
                                    mode: t,
                                    bitrate: 0,
                                    level: {
                                        width: e.width,
                                        height: e.height,
                                        index: e.index,
                                        label: e.label
                                    }
                                }), D.reason = ""
                            }
                        },
                        ee = function(e) {
                            null != S && S.audioTracks && P && e > -1 && e < S.audioTracks.length && e !== j && (S.audioTracks[j].enabled = !1, j = e, S.audioTracks[j].enabled = !0, n.trigger(i._B, {
                                currentTrack: j,
                                tracks: P
                            }))
                        },
                        te = () => {
                            let e = -1;
                            const t = S.audioTracks;
                            for (let r = 0; r < t.length; r++)
                                if (t[r].enabled) {
                                    e = r;
                                    break
                                } ee(e)
                        },
                        re = function(e) {
                            const t = n.getSeekRange();
                            return n.isLive() && (0, u.s)(t.end - t.start, L) ? Math.min(0, e - t.end) : e
                        },
                        ne = function() {
                            S && (n.disableTextTrack(), S.removeAttribute("preload"), S.removeAttribute("src"), (0, f.EU)(S), (0, h.oB)(S, {
                                objectFit: ""
                            }), I = -1, !s.Browser.msie && "load" in S && S.load())
                        },
                        ie = {
                            progress() {
                                c.Z.progress.call(n), q() && W(), K()
                            },
                            timeupdate() {
                                n.currentTime >= 0 && (n.retries = 0), n.currentTime = S.currentTime, (0, x.If)() && M !== S.currentTime && Y(S.currentTime), c.Z.timeupdate.call(n), K(), s.Browser.ie && z()
                            },
                            resize: z,
                            ended() {
                                I = -1, Q(), c.Z.ended.call(n)
                            },
                            loadedmetadata() {
                                let e = n.getDuration();
                                X && e === 1 / 0 && (e = 0);
                                const t = {
                                    metadataType: "media",
                                    duration: e,
                                    height: S.videoHeight,
                                    width: S.videoWidth,
                                    seekRange: n.getSeekRange()
                                };
                                n.fairplay && (t.drm = "fairplay"), n.trigger(i.rx, t), z()
                            },
                            durationchange() {
                                X || c.Z.progress.call(n)
                            },
                            loadeddata() {
                                var e;
                                ! function() {
                                    const e = S;
                                    if (e.getStartDate) {
                                        const t = e.getStartDate(),
                                            r = t.getTime ? t.getTime() : NaN;
                                        r === n.startDateTime || isNaN(r) || n.setStartDateTime(r)
                                    }
                                }(),
                                    function(e) {
                                        if (P = null, e) {
                                            if (e.length) {
                                                for (let t = 0; t < e.length; t++)
                                                    if (e[t].enabled) {
                                                        j = t;
                                                        break
                                                    } - 1 === j && (j = 0, e[j].enabled = !0), P = (0, y.UI)(e, (function(e) {
                                                    return {
                                                        name: e.label || e.language,
                                                        language: e.language
                                                    }
                                                }))
                                            }
                                            n.addTracksListener(e, "change", te), P && n.trigger(i.j0, {
                                                currentTrack: j,
                                                tracks: P
                                            })
                                        }
                                    }(S.audioTracks), e = n.getDuration(), O && -1 !== O && e && e !== 1 / 0 && n.seek(O)
                            },
                            canplay() {
                                B || (B = !0, X || J(), z(), c.Z.canplay.call(n))
                            },
                            seeking() {
                                const e = M,
                                    t = null !== R ? re(R) : n.getCurrentTime(),
                                    r = re(e);
                                M = R, R = null, O = 0, n.seeking = !0, n.trigger(i.NZ, {
                                    position: r,
                                    offset: t,
                                    duration: n.getDuration(),
                                    currentTime: e,
                                    seekRange: n.getSeekRange(),
                                    metadata: {
                                        currentTime: e
                                    }
                                })
                            },
                            seeked() {
                                c.Z.seeked.call(n), n.ensureMetaTracksActive()
                            },
                            waiting() {
                                n.seeking || n.video.seeking ? n.setState(i.ik) : n.state === i.r0 && (n.atEdgeOfLiveStream() && n.setPlaybackRate(1), n.stallTime = n.video.currentTime, n.setState(i.nQ))
                            },
                            error() {
                                const {
                                    video: e
                                } = n, t = e.error, r = (null == t ? void 0 : t.code) || -1;
                                if ((3 === r || 4 === r) && n.retries < n.maxRetries) return n.trigger(i.cM, new b.rG(null, w + r - 1, t)), n.retries++, S.load(), void(-1 !== n.currentTime && (B = !1, n.seek(n.currentTime), n.currentTime = -1));
                                let a = 224e3,
                                    s = b.ul;
                                1 === r ? a += r : 2 === r ? (s = b.MD, a = 221e3) : 3 === r || 4 === r ? (a += r - 1, 4 === r && e.src === location.href && (a = 224005)) : s = b.ud, ne(), n.trigger(i.Ew, new b.rG(s, a, t))
                            }
                        };
                    Object.keys(c.Z).forEach((e => {
                        if (!ie[e]) {
                            const t = c.Z[e];
                            ie[e] = e => {
                                t.call(n, e)
                            }
                        }
                    }));
                    const ae = function() {
                            if (!s.Browser.safari) return !0;
                            const e = n.getCurrentTextTrack();
                            return null == e ? void 0 : e.sideloaded
                        },
                        se = e => {
                            let r = Math.max(0, I);
                            const n = t.qualityLabel;
                            if (e)
                                for (let t = 0; t < e.length; t++)
                                    if (e[t].default && (r = t), n && e[t].label === n) return t;
                            return D.reason = "initial choice", D.level.width && D.level.height || (D.level = {}), r
                        },
                        oe = e => {
                            P = null, j = -1, D.reason || (D.reason = "initial choice", D.level = {}), B = !1;
                            const t = document.createElement("source");
                            t.src = e.file;
                            S.src !== t.src && (S.src = e.file)
                        };
                    var ce;
                    Object.assign(this, g.ZP, l.Z, d.Z, T.Z, {
                        renderNatively: (ce = t.renderCaptionsNatively, !(!s.OS.iOS && !s.Browser.safari) || ce && s.Browser.chrome),
                        _eventsOn() {
                            var e, t;
                            e = ie, t = S, Object.keys(e).forEach((r => {
                                t.removeEventListener(r, e[r]), t.addEventListener(r, e[r])
                            })), (0, x.Nm)(n, S)
                        },
                        _eventsOff() {
                            C(ie, S), (0, x.IP)(S)
                        },
                        detachMedia() {
                            d.Z.detachMedia.call(n), Q(), this.removeTracksListener(S.textTracks, "change", this.textTrackChangeHandler), this.removeTracksListener(S.textTracks, "addtrack", this.addTrackHandler), this.videoLoad && (S.load = this.videoLoad), ae() && this.disableTextTrack()
                        },
                        attachMedia() {
                            if (d.Z.attachMedia.call(n), B = !1, this.seeking = !1, S.loop = Boolean(t.loop), s.OS.iOS && !this.videoLoad) {
                                const e = this.videoLoad = S.load;
                                S.load = function() {
                                    return S.src === location.href ? (-1 === I && (I = se(N)), oe(N[I]), n.state === i.r0 && S.play(), void n.trigger(i.cM, new b.rG(null, 324005, new Error("video.load() was called after setting video.src to empty while playing video")))) : e.call(S)
                                }
                            }
                            ae() && this.enableTextTrack(), this.renderNatively && this.setTextTracks(this.video.textTracks), this.addTracksListener(S.textTracks, "change", this.textTrackChangeHandler)
                        },
                        isLive: () => S.duration === 1 / 0
                    });
                    const le = function(e) {
                        const t = n.getSeekRange();
                        if (n.isLive()) {
                            if ((!F || Math.abs(Z - t.end) > 1) && ((e => {
                                Z = e.end, F = Math.min(0, S.currentTime - Z), $ = (0, v.z)()
                            })(t), n.ensureMetaTracksActive()), (0, u.s)(t.end - t.start, L)) return F
                        }
                        return e
                    };
                    n.setStartDateTime = function(e) {
                        n.startDateTime = e;
                        const t = new Date(e).toISOString();
                        let {
                            start: r,
                            end: i
                        } = n.getSeekRange();
                        r = Math.max(0, r), i = Math.max(r, i + 10);
                        const a = {
                                metadataType: "program-date-time",
                                programDateTime: t,
                                start: r,
                                end: i
                            },
                            s = n.createCue(r, i, JSON.stringify(a));
                        n.addVTTCue({
                            type: "metadata",
                            cue: s
                        })
                    }, n.getCurrentTime = function() {
                        return le(S.currentTime)
                    };
                    const de = () => {
                            let e = 0;
                            return ["buffered", "seekable"].forEach((t => {
                                const r = S[t];
                                let n = r ? r.length : 0;
                                for (; n--;) {
                                    const t = Math.max(e, r.end(n));
                                    (0, y.xV)(t) && (e = t)
                                }
                            })), e
                        },
                        ue = () => {
                            let e = 1 / 0;
                            return ["buffered", "seekable"].forEach((t => {
                                const r = S[t];
                                let n = r ? r.length : 0;
                                for (; n--;) {
                                    const t = Math.min(e, r.start(n));
                                    (0, y.xV)(t) && (e = t)
                                }
                            })), e
                        };
                    n.getDuration = function() {
                        let e = S.duration;
                        if (X && e === 1 / 0 && 0 === S.currentTime || isNaN(e)) return 0;
                        const t = de();
                        if (n.isLive() && t) {
                            const r = t - ue();
                            (0, u.s)(r, L) && (e = -r)
                        }
                        return e
                    }, n.getSeekRange = function() {
                        const e = {
                            start: 0,
                            end: 0
                        };
                        return S.seekable.length ? (e.end = de(), e.start = ue()) : (0, y.xV)(S.duration) && (e.end = S.duration), e
                    }, n.getLiveLatency = function() {
                        let e = null;
                        const t = de();
                        return n.isLive() && t && (e = (t + ((0, v.z)() - $)) / 1e3 - S.currentTime), e
                    };
                    const he = e => {
                            let t;
                            return Array.isArray(e) && e.length > 0 && (t = e.map((function(e, t) {
                                return {
                                    label: e.label || t
                                }
                            }))), t
                        },
                        fe = function(e) {
                            n.currentTime = -1, L = e.minDvrWindow, N = e.sources, I = se(N)
                        },
                        me = function() {
                            return S.paused && S.played && S.played.length && n.isLive() && !(0, u.s)(de() - ue(), L) && (n.attachMedia(), S.load()), S.play() || (0, k.Z)(S)
                        },
                        ge = function(e) {
                            n.currentTime = -1, O = 0, Q();
                            const t = S.src,
                                r = document.createElement("source");
                            r.src = N[I].file;
                            r.src !== t ? (oe(N[I]), t && S.load()) : 0 === e && S.currentTime > 0 && (O = -1, n.seek(e)), e > 0 && S.currentTime !== e && n.seek(e);
                            const a = he(N);
                            a && n.trigger(i.UZ, {
                                levels: a,
                                currentQuality: I
                            }), N.length && "hls" !== N[0].type && J()
                        };
                    this.stop = function() {
                        Q(), ne(), this.clearTracks(), s.Browser.ie && S.pause(), this.setState(i.bc)
                    }, this.destroy = function() {
                        const {
                            addTrackHandler: e,
                            cueChangeHandler: t,
                            textTrackChangeHandler: r
                        } = n, i = S.textTracks;
                        if (n.off(), n.videoLoad && (S.load = n.videoLoad), A = E, C(ie, S), n.removeTracksListener(S.audioTracks, "change", te), n.removeTracksListener(i, "change", r), n.removeTracksListener(i, "addtrack", e), t)
                            for (let e = 0, r = i.length; e < r; e++) i[e].removeEventListener("cuechange", t)
                    }, this.init = function(e) {
                        n.retries = 0, n.maxRetries = e.adType ? 0 : 3, fe(e);
                        const t = N[I];
                        X = (0, o.V)(t), X && (n.supportsPlaybackRate = !1, ie.waiting = E), n._eventsOn(), N.length && "hls" !== N[0].type && this.sendMediaType(N), D.reason = ""
                    }, this.preload = function(e) {
                        fe(e);
                        const t = N[I],
                            r = t.preload || "metadata";
                        "none" !== r && (S.setAttribute("preload", r), oe(t))
                    }, this.load = function(e) {
                        fe(e), S.loop = Boolean(t.loop), ge(e.starttime), this.setupSideloadedTracks(e.tracks)
                    }, this.play = function() {
                        return A(), me()
                    }, this.pause = function() {
                        Q(), A = function() {
                            if (S.paused && S.currentTime && n.isLive()) {
                                const e = de(),
                                    t = e - ue(),
                                    r = !(0, u.s)(t, L),
                                    n = e - S.currentTime;
                                if (r && e && (n > 15 || n < 0)) {
                                    if (R = Math.max(e - 10, e - t), !(0, y.xV)(R)) return;
                                    Y(S.currentTime), S.currentTime = R
                                }
                            }
                        }, S.pause()
                    }, this.seek = function(e) {
                        const t = n.getSeekRange();
                        let r = e;
                        if (e < 0 && (r += t.end), B || (B = Boolean(de())), B) {
                            W(), O = 0;
                            try {
                                if (n.seeking = !0, n.isLive() && (0, u.s)(t.end - t.start, L) && (F = Math.min(0, r - Z), e < 0)) {
                                    r += Math.min(12, ((0, v.z)() - $) / 1e3)
                                }
                                R = r, Y(S.currentTime), S.currentTime = r
                            } catch (e) {
                                n.seeking = !1, O = r
                            }
                        } else O = r, s.Browser.firefox && S.paused && me()
                    }, this.setVisibility = function(e) {
                        (e = Boolean(e)) || s.OS.android ? (0, h.oB)(n.container, {
                            visibility: "visible",
                            opacity: 1
                        }) : (0, h.oB)(n.container, {
                            visibility: "",
                            opacity: 0
                        })
                    }, n.getFullscreen = function() {
                        return (0, x.If)() || Boolean(S.webkitDisplayingFullscreen)
                    }, this.setCurrentQuality = function(e) {
                        I !== e && e >= 0 && N && N.length > e && (I = e, D.reason = "api", D.level = {}, this.trigger(i.aM, {
                            currentQuality: e,
                            levels: he(N)
                        }), t.qualityLabel = N[e].label, ge(S.currentTime || 0), me())
                    }, this.setPlaybackRate = function(e) {
                        S.playbackRate = S.defaultPlaybackRate = e
                    }, this.getPlaybackRate = function() {
                        return S.playbackRate
                    }, this.getCurrentQuality = function() {
                        return I
                    }, this.getQualityLevels = function() {
                        return Array.isArray(N) ? N.map((e => (0, a.Z)(e))) : []
                    }, this.getName = function() {
                        return {
                            name: "html5"
                        }
                    }, this.setCurrentAudioTrack = ee;
                    this.getAudioTracks = () => P || [];
                    this.getCurrentAudioTrack = () => j
                };
            Object.assign(L.prototype, m.Z), L.getName = function() {
                return {
                    name: "html5"
                }
            };
            const S = L;
            var D = r(6886),
                N = r(9601),
                B = r(2957);
            const O = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
                R = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/;
            class M {
                constructor() {
                    this.relurl = null, this.tagList = [], this.cc = this.sn = this.start = 0, this.title = null, this.programDateTime = this.rawProgramDateTime = null
                }
            }
            class I {
                constructor(e) {
                    this.fragments = [], this.url = e, this.live = !0, this.startSN = this.endSN = this.startCC = this.endCC = this.targetduration = this.totalduration = 0
                }
                get startProgramDateTime() {
                    return this.fragments[0] ? this.fragments[0].programDateTime : null
                }
            }
            const A = (e, t) => {
                    e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : null != t && t.programDateTime && (e.programDateTime = t.endProgramDateTime), (0, y.xV)(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null)
                },
                P = (e, t) => {
                    const r = new I(t);
                    let n, i, a = 0,
                        s = 0,
                        o = 0,
                        c = null,
                        l = new M,
                        d = null;
                    for (O.lastIndex = 0; null !== (n = O.exec(e));) {
                        const e = n[1];
                        if (e) {
                            l.duration = parseFloat(e);
                            const t = ` ${n[2]}`.slice(1);
                            l.title = t || null, l.tagList.push(t ? ["INF", e, t] : ["INF", e])
                        } else if (n[3]) {
                            if ((0, y.xV)(l.duration)) {
                                const e = a++;
                                l.start = s, l.sn = e, l.cc = o, l.relurl = ` ${n[3]}`.slice(1), A(l, c), r.fragments.push(l), c = l, s += l.duration, l = new M
                            }
                        } else if (n[4]) l.rawProgramDateTime = ` ${n[4]}`.slice(1), l.tagList.push(["PROGRAM-DATE-TIME", l.rawProgramDateTime]), null === d && (d = r.fragments.length);
                        else {
                            for (n = n[0].match(R), i = 1; i < n.length && void 0 === n[i]; i++);
                            const e = ` ${n[i+1]}`.slice(1),
                                t = ` ${n[i+2]}`.slice(1);
                            switch (n[i]) {
                                case "#":
                                    l.tagList.push(t ? [e, t] : [e]);
                                    break;
                                case "MEDIA-SEQUENCE":
                                    a = r.startSN = parseInt(e, 10);
                                    break;
                                case "TARGETDURATION":
                                    r.targetduration = parseFloat(e);
                                    break;
                                case "ENDLIST":
                                    r.live = !1;
                                    break;
                                case "DIS":
                                    o++, l.tagList.push(["DIS"]);
                                    break;
                                case "DISCONTINUITY-SEQ":
                                    o = parseInt(e, 10);
                                    break;
                                case "MAP": {
                                    const {
                                        rawProgramDateTime: e
                                    } = l;
                                    l = new M, l.rawProgramDateTime = e;
                                    break
                                }
                            }
                        }
                    }
                    if (!s) throw new Error("Invalid playlist");
                    return c && !c.relurl && (r.fragments.pop(), s -= c.duration), r.totalduration = s, r.endSN = a - 1, r.startCC = r.fragments[0] ? r.fragments[0].cc : 0, r.endCC = o, d && ((e, t) => {
                        let r = e[t];
                        for (let n = t - 1; n >= 0; n--) {
                            const t = e[n];
                            t.programDateTime = r.programDateTime - 1e3 * t.duration, r = t
                        }
                    })(r.fragments, d), r
                },
                j = window.performance,
                U = window.URL,
                V = (e, t = 0) => {
                    e.errors++, t && e.errors >= t && (e.ignore = !0)
                };
            class H {
                constructor(e, t) {
                    this.video = e, this.endTime = 0, this.fetchTime = 0, this.parsedTime = 0, this.matches = {}, this.parent = {
                        src: "",
                        url: null,
                        topDomain: "",
                        origin: "",
                        pathname: ""
                    }, this.xhr = null, this.onLevelLoaded = t, this.onResourceBufferFull = e => {
                        this.run(this.endTime), j.clearResourceTimings()
                    }, j.addEventListener("resourcetimingbufferfull", this.onResourceBufferFull)
                }
                run(e) {
                    const {
                        fetchTime: t,
                        parent: r,
                        video: n
                    } = this, {
                        src: i
                    } = n;
                    if (!i || !i.startsWith("http") || !document.body.contains(n)) return;
                    if (r.src !== i) {
                        this.matches = {}, r.src = i;
                        const e = r.url = new U(i);
                        r.topDomain = e.hostname.replace(/.*?([^.]+\.[^.]+)$/, "$1"), r.origin = e.origin, r.pathname = e.pathname
                    }
                    const a = j.getEntriesByType("resource");
                    let s = a.length;
                    for (; s--;) {
                        const n = a[s];
                        if (n.responseEnd <= t) break;
                        if ("video" === n.initiatorType) {
                            const t = n.name;
                            if (t === i) {
                                this.fetchTime = Math.max(n.fetchStart, this.fetchTime);
                                break
                            }
                            const a = (0, B.AO)(t);
                            if ("ts" === a || "aac" === a || "vtt" === a || "key" === a || "mp4" === a || "m4s" === a || "m4v" === a || "m4a" === a) continue;
                            let s = this.matches[t];
                            if (!s) {
                                const e = "m3u8" === a,
                                    n = t.includes(r.topDomain),
                                    i = n && t.startsWith(r.origin),
                                    o = i && t.startsWith(r.origin + r.pathname);
                                s = this.matches[t] = {
                                    count: 0,
                                    ignore: !1,
                                    errors: 0,
                                    onlyVideo: !1,
                                    matches: {
                                        m3u8: e,
                                        topLevelDomain: n,
                                        origin: i,
                                        path: o
                                    }
                                }
                            }
                            s.count++, s.onlyVideo = document.body.querySelectorAll("video audio").length < 2, (s.onlyVideo || s.matches.path || s.matches.m3u8 && s.matches.topLevelDomain) && (this.xhr && (0, D.E)(this.xhr), this.xhr = (0, D.h)({
                                url: t,
                                responseType: "text",
                                oncomplete: r => {
                                    var n, i;
                                    const a = r.responseText;
                                    if (!a) return void V(s, 3);
                                    let o;
                                    try {
                                        o = P(a, t)
                                    } catch (e) {
                                        V(s, 1)
                                    }
                                    if (null != (n = o) && null != (i = n.fragments) && i.length) {
                                        (() => {
                                            const t = this.parsedTime;
                                            this.parsedTime = e, this.onLevelLoaded(o, t, e)
                                        })()
                                    }
                                },
                                onerror() {
                                    V(s, 3)
                                }
                            })), this.fetchTime = n.responseEnd
                        }
                    }
                    a.length > 50 && (0 === this.fetchTime || j.now() - this.fetchTime > 5e3) && j.clearResourceTimings(), this.endTime = e
                }
                destroy() {
                    this.video = null, this.matches = null, this.onLevelLoaded = null, j.removeEventListener("resourcetimingbufferfull", this.onResourceBufferFull), this.onResourceBufferFull = null, this.xhr && ((0, D.E)(this.xhr), this.xhr = null)
                }
            }
            var X = r(3343);
            const Z = 225e3,
                F = e => {
                    const t = new Uint16Array(e.buffer);
                    return String.fromCharCode.apply(null, t)
                },
                $ = (e, t, r) => {
                    e && e.removeEventListener(t, r, !1)
                },
                q = (e, t, r) => {
                    $(e, t, r), e.addEventListener(t, r, !1)
                },
                W = function(e, t, r) {
                    S.call(this, e, t, r);
                    const a = this,
                        s = a.init,
                        o = a.load,
                        c = a.destroy,
                        l = a.setStartDateTime,
                        d = a.getSeekRange;
                    this.processPlaylistMetadata = X.q;
                    const u = e => {
                            const t = a.fairplay.session;
                            let r = e;
                            "string" == typeof r && (r = (e => {
                                const t = (0, n.t)(e),
                                    r = t.length,
                                    i = new Uint8Array(new ArrayBuffer(r));
                                for (let e = 0; e < r; e++) i[e] = t.charCodeAt(e);
                                return i
                            })(r)), t.update(r)
                        },
                        h = e => {
                            const t = a.fairplay.extractKey(e);
                            "function" == typeof t.then ? t.then(u) : u(t)
                        },
                        f = e => {
                            const t = a.fairplay,
                                r = e.target,
                                n = {};
                            (r.getAllResponseHeaders() || "").trim().split(/[\r\n]+/).forEach((e => {
                                const t = e.split(": "),
                                    r = t.shift();
                                n[r] = t.join(": ")
                            }));
                            const i = {
                                    data: r.response,
                                    headers: n
                                },
                                s = t.licenseResponseFilter.call(e.target, i, t);
                            s && "function" == typeof s.then ? s.then((() => {
                                h(i.data)
                            })) : h(i.data)
                        },
                        m = e => {
                            a.trigger(i.Ew, new b.rG(b.H4, 226e3 + (0, N.E)(e.currentTarget.status), e))
                        },
                        g = e => {
                            Object.keys(e.headers).forEach((t => {
                                e.setRequestHeader(t, e.headers[t])
                            })), e.send(e.body)
                        },
                        T = e => {
                            const t = a.fairplay,
                                r = e.target,
                                n = e.message,
                                i = new XMLHttpRequest;
                            i.responseType = t.licenseResponseType, i.addEventListener("load", f, !1), i.addEventListener("error", m, !1);
                            let s = "";
                            s = "function" == typeof t.processSpcUrl ? t.processSpcUrl(F(t.initData)) : t.processSpcUrl, i.open("POST", s, !0), i.body = t.licenseRequestMessage(n, r), i.headers = {}, [].concat(t.licenseRequestHeaders || []).forEach((e => {
                                i.setRequestHeader(e.name, e.value)
                            }));
                            const o = t.licenseRequestFilter.call(e.target, i, t);
                            o && "function" == typeof o.then ? o.then((() => {
                                g(i)
                            })) : g(i)
                        },
                        p = e => {
                            a.trigger(i.Ew, new b.rG(b.H4, 225650, e))
                        },
                        k = (e, t, r, n) => {
                            n.code += Z, n.key = b.H4, a.trigger(i.Ew, n)
                        },
                        y = e => {
                            const t = e.target,
                                r = e.initData;
                            if (t.webkitKeys || t.webkitSetMediaKeys(new window.WebKitMediaKeys("com.apple.fps.1_0")), !t.webkitKeys) throw new Error("Could not create MediaKeys");
                            const n = a.fairplay;
                            n.initData = r, (0, D.h)(n.certificateUrl, (function(e) {
                                const i = new Uint8Array(e.response);
                                let a = n.extractContentId(F(r));
                                "string" == typeof a && (a = (e => {
                                    const t = new ArrayBuffer(2 * e.length),
                                        r = new Uint16Array(t);
                                    for (let t = 0, n = e.length; t < n; t++) r[t] = e.charCodeAt(t);
                                    return r
                                })(a));
                                const s = ((e, t, r) => {
                                        let n = 0;
                                        const i = new ArrayBuffer(e.byteLength + 4 + t.byteLength + 4 + r.byteLength),
                                            a = new DataView(i);
                                        new Uint8Array(i, n, e.byteLength).set(e), n += e.byteLength, a.setUint32(n, t.byteLength, !0), n += 4;
                                        const s = new Uint16Array(i, n, t.length);
                                        return s.set(t), n += s.byteLength, a.setUint32(n, r.byteLength, !0), n += 4, new Uint8Array(i, n, r.byteLength).set(r), new Uint8Array(i, 0, i.byteLength)
                                    })(r, a, i),
                                    o = t.webkitKeys.createSession("video/mp4", s);
                                if (!o) throw new Error("Could not create key session");
                                q(o, "webkitkeymessage", T), q(o, "webkitkeyerror", p), n.session = o
                            }), k, {
                                responseType: "arraybuffer"
                            })
                        },
                        v = e => {
                            const t = e.sources[0];
                            if (a.fairplay && Object.is(a.fairplay.source, t)) return;
                            const r = t.drm;
                            null != r && r.fairplay ? (a.fairplay = Object.assign({}, {
                                certificateUrl: "",
                                processSpcUrl: "",
                                licenseResponseType: "arraybuffer",
                                licenseRequestHeaders: [],
                                licenseRequestMessage: e => e,
                                licenseRequestFilter() {},
                                licenseResponseFilter() {},
                                extractContentId: e => e.split("skd://")[1],
                                extractKey: e => new Uint8Array(e)
                            }, r.fairplay), a.fairplay.source = t, a.fairplay.destroy = function() {
                                $(a.video, "webkitneedkey", y);
                                const e = this.session;
                                e && ($(e, "webkitkeymessage", T), $(e, "webkitkeyerror", p))
                            }, q(a.video, "webkitneedkey", y)) : a.fairplay && (a.fairplay.destroy(), a.fairplay = null)
                        };
                    this.init = function(e) {
                        v(e), s.call(this, e)
                    }, this.load = function(e) {
                        v(e), o.call(this, e)
                    }, this.destroy = function(e) {
                        this.fairplay && (this.fairplay.destroy(), this.fairplay = null), this.metaLoader && (this.metaLoader.destroy(), this.metaLoader = null), c.call(this, e)
                    }, this.setStartDateTime = function(e) {
                        const {
                            video: t,
                            loadAndParseHlsMetadata: r
                        } = this;
                        if (r && (e => {
                            if (!Boolean(U && e && e.getStartDate && j && j.getEntriesByType && j.clearResourceTimings && j.addEventListener)) return !1;
                            const t = e.getStartDate(),
                                r = t.getTime ? t.getTime() : NaN;
                            return !isNaN(r)
                        })(t)) {
                            this.startDateTime = e;
                            (this.metaLoader = new H(t, ((r, n, i) => {
                                const {
                                    fragments: a,
                                    startProgramDateTime: s
                                } = r, o = (s - e) / 1e3;
                                a.forEach((e => {
                                    const r = e.start = e.startPTS = e.start + o;
                                    if (r >= n && r < i && e.tagList && (e.tagList.forEach((([t, r]) => this.processPlaylistMetadata(t, r, e))), t.duration === 1 / 0 && t.buffered && t.buffered.start(0))) {
                                        const e = t.buffered.start(0),
                                            r = this._tracksById.nativemetadata;
                                        if (null != r && r.cues) {
                                            const t = r.cues;
                                            for (let n = 0; n < t.length && t[n].endTime < e; n++) r.removeCue(t[n])
                                        }
                                    }
                                }))
                            }))).run(0)
                        }
                        l.call(this, e)
                    }, this.getSeekRange = function() {
                        const {
                            metaLoader: e
                        } = this, t = d.call(this);
                        return e && e.endTime !== t.end && e.run(t.end), t
                    }
                };
            Object.assign(W.prototype, S.prototype), W.getName = S.getName;
            const G = W
        }
    }
]);