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
    [977], {
        3328: (e, t, s) => {
            s.d(t, {
                Z: () => S
            });
            var i = s(6103),
                a = s(8377);
            const r = {
                    TIT2: "title",
                    TT2: "title",
                    WXXX: "url",
                    TPE1: "artist",
                    TP1: "artist",
                    TALB: "album",
                    TAL: "album"
                },
                n = (e, t) => {
                    const s = e.length;
                    let i, a, r, n = "",
                        d = t || 0;
                    for (; d < s;)
                        if (i = e[d++], 0 !== i && 3 !== i) switch (i >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                n += String.fromCharCode(i);
                                break;
                            case 12:
                            case 13:
                                a = e[d++], n += String.fromCharCode((31 & i) << 6 | 63 & a);
                                break;
                            case 14:
                                a = e[d++], r = e[d++], n += String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | (63 & r) << 0)
                        }
                    return n
                },
                d = e => {
                    const t = (e => {
                        let t = "0x";
                        for (let s = 0; s < e.length; s++) e[s] < 16 && (t += "0"), t += e[s].toString(16);
                        return parseInt(t, 16)
                    })(e);
                    return 127 & t | (32512 & t) >> 1 | (8323072 & t) >> 2 | (2130706432 & t) >> 3
                },
                o = e => {
                    const t = {};
                    if (!("value" in e) && "data" in e && e.data instanceof ArrayBuffer) {
                        const t = new Uint8Array(e.data);
                        let s = t.length;
                        e = {
                            value: {
                                key: "",
                                data: ""
                            }
                        };
                        let i = 10;
                        for (; i < 14 && i < t.length && 0 !== t[i];) e.value.key += String.fromCharCode(t[i]), i++;
                        let a = 19,
                            r = t[a];
                        3 !== r && 0 !== r || (r = t[++a], s--);
                        let o = 0;
                        if (1 !== r && 2 !== r)
                            for (let e = a + 1; e < s; e++)
                                if (0 === t[e]) {
                                    o = e - a;
                                    break
                                } if (o > 0) {
                            const s = n(t.subarray(a, a += o), 0);
                            if ("PRIV" === e.value.key) {
                                if ("com.apple.streaming.transportStreamTimestamp" === s) {
                                    const s = 1 & d(t.subarray(a, a += 4)),
                                        i = d(t.subarray(a, a += 4)) + (s ? 4294967296 : 0);
                                    e.value.data = i
                                } else e.value.data = n(t, a + 1);
                                e.value.info = s
                            } else e.value.info = s, e.value.data = n(t, a + 1)
                        } else {
                            const s = t[a];
                            e.value.data = 1 === s || 2 === s ? ((e, t) => {
                                const s = e.length - 1;
                                let i = "",
                                    a = t || 0;
                                for (; a < s;) 254 === e[a] && 255 === e[a + 1] || (i += String.fromCharCode((e[a] << 8) + e[a + 1])), a += 2;
                                return i
                            })(t, a + 1) : n(t, a + 1)
                        }
                    }
                    if (function(e, t) {
                        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                        return Object.prototype.hasOwnProperty.call(Object(e), t)
                    }(r, e.value.key) && (t[r[e.value.key]] = e.value.data), e.value.info) {
                        let s = t[e.value.key];
                        s !== Object(s) && (s = {}, t[e.value.key] = s), s[e.value.info] = e.value.data
                    } else t[e.value.key] = e.value.data;
                    return t
                };
            var c = s(8348),
                l = s(1643),
                h = s(6042);
            const u = (e, t, s) => {
                    null != t && t.length && (0, h.S6)(t, (function(t) {
                        const i = t._id || "";
                        if (s && (t._id = void 0), !c.Browser.ie && !c.Browser.safari || !e || !/^(native|subtitle|cc)/.test(i)) {
                            if (c.Browser.ie && "disabled" === t.mode || (t.mode = "disabled", t.mode = "hidden"), t.cues)
                                for (let e = t.cues.length; e--;) t.removeCue(t.cues[e]);
                            t.embedded || (t.mode = "disabled"), t.inuse = !1
                        }
                    }))
                },
                m = e => /^native(?:captions|subtitles)/.test(e),
                T = e => "captions" === e || "subtitles" === e,
                g = function(e) {
                    const t = e.target,
                        {
                            activeCues: s,
                            cues: i
                        } = t,
                        a = t._id,
                        r = this._cues,
                        n = this._activeCues;
                    if (null != i && i.length) {
                        const e = r[a];
                        r[a] = Array.prototype.slice.call(i), this.parseNativeID3Cues(i, e)
                    } else delete r[a];
                    if (null != s && s.length) {
                        const e = n[a],
                            t = n[a] = Array.prototype.slice.call(s);
                        this.triggerActiveCues(t, e)
                    } else delete n[a]
                },
                k = (e, t, s) => {
                    if (c.Browser.ie) {
                        let i = s;
                        (e || "metadata" === t.kind) && (i = new window.TextTrackCue(s.startTime, s.endTime, s.text), s.value && (i.value = s.value)), ((e, t) => {
                            const s = [],
                                i = e.mode;
                            e.mode = "hidden";
                            const a = e.cues;
                            if (a)
                                for (let i = a.length - 1; i >= 0 && a[i].startTime > t.startTime; i--) s.unshift(a[i]), e.removeCue(a[i]);
                            try {
                                e.addCue(t), s.forEach((t => e.addCue(t)))
                            } catch (e) {
                                console.error(e)
                            }
                            e.mode = i
                        })(t, i)
                    } else try {
                        t.addCue(s)
                    } catch (e) {
                        console.error(e)
                    }
                },
                v = function(e) {
                    const t = this._textTracks,
                        s = this._tracksById;
                    if (e.length > t.length) return !0;
                    for (let t = 0; t < e.length; t++) {
                        const i = e[t];
                        if (!i._id || !s[i._id]) return !0
                    }
                    return !1
                },
                p = function() {
                    const e = this.video.textTracks,
                        t = (0, h.hX)(e, (function(e) {
                            return (e.inuse || !e._id) && T(e.kind)
                        }));
                    if (!this._textTracks || v.call(this, t)) return void this.setTextTracks(e);
                    let s = -1;
                    for (let e = 0; e < this._textTracks.length; e++)
                        if ("showing" === this._textTracks[e].mode) {
                            s = e;
                            break
                        } s !== this._currentTextTrackIndex && this.setSubtitlesTrack(s + 1)
                },
                f = function(e) {
                    const t = e.track;
                    null != t && t._id || this.setTextTracks(this.video.textTracks)
                },
                y = (e, t) => e.startTime === t.startTime && e.endTime === t.endTime && e.text === t.text && e.data === t.data && JSON.stringify(e.value) === JSON.stringify(t.value),
                C = e => {
                    const t = o(e);
                    return {
                        metadataType: "id3",
                        metadataTime: e.startTime,
                        metadata: t
                    }
                },
                S = {
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
                    addTracksListener(e, t, s) {
                        e && (this.removeTracksListener(e, t, s), this.instreamMode || (e.addEventListener ? e.addEventListener(t, s) : e[`on${t}`] = s))
                    },
                    removeTracksListener(e, t, s) {
                        e && (e.removeEventListener && s ? e.removeEventListener(t, s) : e[`on${t}`] = null)
                    },
                    clearTracks() {
                        (0, i.VS)(this._itemTracks);
                        const {
                            _tracksById: e
                        } = this;
                        if (e && Object.keys(e).forEach((t => {
                            if (0 === t.indexOf("nativemetadata")) {
                                const s = e[t];
                                this.cueChangeHandler && s.removeEventListener("cuechange", this.cueChangeHandler), u(this.renderNatively, [s], !0)
                            }
                        })), this._itemTracks = null, this._textTracks = null, this._tracksById = null, this._cuesByTrackId = null, this._metaCuesByTextTime = null, this._unknownCount = 0, this._currentTextTrackIndex = -1, this._activeCues = {}, this._cues = {}, this.renderNatively) {
                            const e = this.video.textTracks;
                            this.textTrackChangeHandler && this.removeTracksListener(e, "change", this.textTrackChangeHandler), u(this.renderNatively, e, !0)
                        }
                    },
                    clearMetaCues() {
                        const {
                            _tracksById: e,
                            _cachedVTTCues: t
                        } = this;
                        e && t && Object.keys(e).forEach((s => {
                            if (0 === s.indexOf("nativemetadata")) {
                                const i = e[s];
                                u(this.renderNatively, [i], !1), i.mode = "hidden", i.inuse = !0, i._id && (t[i._id] = {})
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
                            (t && m(t) || this.renderNatively && c.OS.iOS) && (e.mode = "hidden")
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
                        const s = [];
                        return e ? (this._textTracks || this._initTextTracks(), e.forEach((e => {
                            if (e.includedInManifest || e.kind && !T(e.kind)) return;
                            const t = this._createTrack(e);
                            this._addTrackToList(t), s.push(t), e.file && (e.data = [], (0, i.xl)(e, (e => {
                                t.sideloaded = !0, this.addVTTCuesToTrack(t, e)
                            }), (e => {
                                this.trigger(l.cM, e)
                            })))
                        })), null != this && null != (t = this._textTracks) && t.length && this.trigger(l.jt, {
                            tracks: this._textTracks
                        }), s) : s
                    },
                    setTextTracks(e) {
                        var t;
                        if (this._currentTextTrackIndex = -1, e) {
                            if (this._textTracks) {
                                const e = this._tracksById;
                                this._activeCues = {}, this._cues = {}, this._unknownCount = 0, this._textTracks = this._textTracks.filter((t => {
                                    const s = t._id;
                                    return this.renderNatively && s && m(s) ? (delete e[s], !1) : (t.name && 0 === t.name.indexOf("Unknown") && this._unknownCount++, 0 === s.indexOf("nativemetadata") && "com.apple.streaming" === t.inBandMetadataTrackDispatchType && delete e[s], !0)
                                }), this)
                            } else this._initTextTracks();
                            if (e.length) {
                                let t = 0;
                                const s = e.length,
                                    i = this._tracksById,
                                    r = this._cuesByTrackId;
                                for (; t < s; t++) {
                                    const s = e[t];
                                    let n = s._id || "";
                                    if (!n) {
                                        if (!1 === s.inuse && T(s.kind) && this.renderNatively) {
                                            s._id = `native${s.kind}${t}`;
                                            continue
                                        }
                                        if (T(s.kind) || "metadata" === s.kind) {
                                            if (n = s._id = `native${s.kind}${t}`, !s.label && "captions" === s.kind) {
                                                const e = (0, a._)(s, this._unknownCount);
                                                s.name = e.label, this._unknownCount = e.unknownCount
                                            }
                                        } else n = s._id = (0, a.M)(s, this._textTracks ? this._textTracks.length : 0);
                                        if (i[n]) continue;
                                        s.inuse = !0
                                    }
                                    if (s.inuse && !i[n])
                                        if ("metadata" === s.kind) {
                                            s.mode = "hidden";
                                            const e = this.cueChangeHandler = this.cueChangeHandler || g.bind(this);
                                            s.removeEventListener("cuechange", e), s.addEventListener("cuechange", e), i[n] = s
                                        } else if (T(s.kind)) {
                                            const e = s.mode;
                                            let t;
                                            if (s.mode = "hidden", (!s.cues || !s.cues.length) && s.embedded) continue;
                                            if (("disabled" !== e || m(n)) && (s.mode = e), r[n] && !r[n].loaded) {
                                                const i = r[n].cues;
                                                for (; t = i.shift();) k(this.renderNatively, s, t);
                                                s.mode = e, r[n].loaded = !0
                                            }
                                            this._addTrackToList(s)
                                        }
                                }
                            }
                            this.renderNatively && this.addTrackListeners(e), null != this && null != (t = this._textTracks) && t.length && this.trigger(l.jt, {
                                tracks: this._textTracks
                            })
                        }
                    },
                    addTrackListeners(e) {
                        let t = this.textTrackChangeHandler = this.textTrackChangeHandler || p.bind(this);
                        this.removeTracksListener(e, "change", t), this.addTracksListener(e, "change", t), (c.Browser.edge && c.Browser.ie || c.Browser.firefox) && (t = this.addTrackHandler = this.addTrackHandler || f.bind(this), this.removeTracksListener(e, "addtrack", t), this.addTracksListener(e, "addtrack", t))
                    },
                    setupSideloadedTracks(e) {
                        if (!this.renderNatively) return;
                        const t = (e = e || null) === this._itemTracks;
                        t || (0, i.VS)(this._itemTracks), this._itemTracks = e, e && (t || (this.disableTextTrack(), this._clearSideloadedTextTracks(), this.addTextTracks(e)))
                    },
                    setSubtitlesTrack(e) {
                        if (!this.renderNatively) return void(this.setCurrentSubtitleTrack && this.setCurrentSubtitleTrack(e - 1));
                        if (!this._textTracks) return;
                        if (0 === e && this._textTracks.forEach((e => {
                            e.mode = e.embedded ? "hidden" : "disabled"
                        })), this._currentTextTrackIndex === e - 1) return;
                        this.disableTextTrack(), this._currentTextTrackIndex = e - 1;
                        const t = this.getCurrentTextTrack();
                        t && (t.mode = "showing"), this.trigger(l.UF, {
                            currentTrack: this._currentTextTrackIndex + 1,
                            tracks: this._textTracks
                        })
                    },
                    createCue: (e, t, s) => new(window.VTTCue || window.TextTrackCue)(e, Math.max(t || 0, e + .25), s),
                    addVTTCue(e, t) {
                        this._tracksById || this._initTextTracks();
                        const s = e.track ? e.track : `native${e.type}`;
                        let i = this._tracksById[s];
                        const a = "captions" === e.type ? "Unknown CC" : "ID3 Metadata",
                            r = e.cue;
                        if (!i) {
                            const t = {
                                kind: e.type,
                                _id: s,
                                label: a,
                                default: !1
                            };
                            this.renderNatively || "metadata" === t.kind ? (i = this._createTrack(t), i.embedded = !0, this.setTextTracks(this.video.textTracks)) : i = this.addTextTracks([t])[0]
                        }
                        if (this._cacheVTTCue(i, r, t)) {
                            const e = this.renderNatively || "metadata" === i.kind;
                            return e ? k(e, i, r) : i.data.push(r), r
                        }
                        return null
                    },
                    addVTTCuesToTrack(e, t) {
                        var s, i;
                        if (!this.renderNatively) return;
                        const a = e._id,
                            r = this._tracksById;
                        let n = this._cuesByTrackId;
                        const d = r[a];
                        if (!d) return n || (n = this._cuesByTrackId = {}), void(n[a] = {
                            cues: t,
                            loaded: !1
                        });
                        if (null != (s = n) && null != (i = s[a]) && i.loaded) return;
                        let o;
                        for (n[a] = {
                            cues: t,
                            loaded: !0
                        }; o = t.shift();) k(this.renderNatively, d, o)
                    },
                    parseNativeID3Cues(e, t) {
                        const s = e[e.length - 1];
                        if (t && t.length === e.length && (s._parsed || y(t[t.length - 1], s))) return;
                        const i = [],
                            a = [];
                        let r = -1,
                            n = -1,
                            d = -1;
                        for (let t = 0; t < e.length; t++) {
                            const s = e[t];
                            if (!s._extended && Boolean(s.data || s.value)) {
                                if (s.startTime !== n || null === s.endTime) {
                                    d = n, n = s.startTime;
                                    const e = i[r];
                                    i[++r] = [], a[r] = [];
                                    const t = n - d;
                                    if (e && t > 0)
                                        for (let t = 0; t < e.length; t++) {
                                            const s = e[t];
                                            s.endTime = n, s._extended = !0
                                        }
                                }
                                i[r].push(s), s._parsed || (a[r].push(s), s.endTime - n < .25 && (s.endTime = n + .25), s._parsed = !0)
                            }
                        }
                        for (let e = 0; e < a.length; e++) a[e].length && a[e].forEach((e => {
                            const t = C(e);
                            this.trigger(l.O1, t)
                        }))
                    },
                    triggerActiveCues(e, t) {
                        const s = e.filter((e => {
                            if (null != t && t.some((t => y(e, t)))) return !1;
                            if (e.data) return !0;
                            const s = e.text ? (e => {
                                let t;
                                try {
                                    t = JSON.parse(e.text)
                                } catch (e) {
                                    return null
                                }
                                const s = {
                                    metadataType: t.metadataType,
                                    metadataTime: e.startTime,
                                    metadata: t
                                };
                                return t.programDateTime && (s.programDateTime = t.programDateTime), s
                            })(e) : null;
                            if (s) "emsg" === s.metadataType && (s.metadata = s.metadata || {}, s.metadata.messageData = e.value), this.trigger(l.rx, s);
                            else if (e.value) return !0;
                            return !1
                        }));
                        s.length && s.forEach((e => {
                            const t = C(e);
                            this.trigger(l.rx, t)
                        }))
                    },
                    ensureMetaTracksActive() {
                        const e = this.video.textTracks,
                            t = e.length;
                        for (let s = 0; s < t; s++) {
                            const t = e[s];
                            "metadata" === t.kind && "disabled" === t.mode && (t.mode = "hidden")
                        }
                    },
                    _cacheVTTCue(e, t, s) {
                        const i = e.kind,
                            a = e._id,
                            r = this._cachedVTTCues;
                        r[a] || (r[a] = {});
                        const n = r[a];
                        let d;
                        switch (i) {
                            case "captions":
                            case "subtitles": {
                                d = s || Math.floor(20 * t.startTime);
                                const e = `_${t.line||"auto"}`,
                                    i = Math.floor(20 * t.endTime),
                                    a = n[d + e] || n[d + 1 + e] || n[d - 1 + e];
                                return !(a && Math.abs(a - i) <= 1) && (n[d + e] = i, !0)
                            }
                            case "metadata": {
                                const e = t.data ? new Uint8Array(t.data).join("") : t.text;
                                return d = s || t.startTime + e, n[d] ? !1 : (n[d] = t.endTime, !0)
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
                        const s = (0, a._)(e, this._unknownCount),
                            i = s.label;
                        if (this._unknownCount = s.unknownCount, this.renderNatively || "metadata" === e.kind) {
                            const s = this.video.textTracks;
                            t = (0, h._e)(s, {
                                label: i
                            }), t || (t = this.video.addTextTrack(e.kind, i, e.language || "")), t.default = e.default, t.mode = "disabled", t.inuse = !0
                        } else t = e, t.data = t.data || [];
                        return t._id || (t._id = (0, a.M)(e, this._textTracks ? this._textTracks.length : 0)), t
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
        5016: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => p
            });
            var i = s(1643),
                a = s(328),
                r = s(6042),
                n = s(4446);
            const d = class {
                constructor(e, t) {
                    this.chrome = t ? t.chrome : window.chrome, this.cast = t ? t.chrome.cast : this.chrome.cast, this.Media = t ? t.chrome.cast.media : this.cast.media, this.framework = t ? t.cast.framework : window.cast.framework, this.context = t ? t.cast.framework.context : this.framework.CastContext.getInstance(), this.castSession = t ? t.cast.framework.castSession : null, this.CAST_STATE_CHANGED = this.framework.CastContextEventType.CAST_STATE_CHANGED || null, this.appId = e || this.Media.DEFAULT_MEDIA_RECEIVER_APP_ID, this.updateCastState = this.updateCastState.bind(this), this.queueLoaded = this.queueLoaded.bind(this), this.mediaUpdate = this.mediaUpdate.bind(this)
                }
                init() {
                    Object.assign(this, a.ZP), this.context.removeEventListener(this.CAST_STATE_CHANGED, this.updateCastState), this.context.addEventListener(this.CAST_STATE_CHANGED, this.updateCastState), this.context.setOptions({
                        receiverApplicationId: this.appId,
                        autoJoinPolicy: this.cast.AutoJoinPolicy.ORIGIN_SCOPED
                    })
                }
                setPlaylist(e) {
                    const t = e.get("playlist");
                    let s = e.get("item"),
                        a = e.mediaModel.get("currentTime");
                    const r = e.get("repeat"),
                        d = e.get("captions"),
                        o = this.castSession ? this.castSession.getSessionObj() : null;
                    if ("complete" === e.get("state") && (s = 0, a = 0), 1 !== t.length || e.get("related")) {
                        const c = [];
                        let l = 1,
                            h = 0;
                        1 === t.length && e.get("related") && e.get("recItems") && e.get("recItems").length && t.push(...e.get("recItems"));
                        for (let e = s; e < t.length; e++) {
                            const i = t[e],
                                r = this.getMediaInfo(i, e, d);
                            let n;
                            if (r) {
                                n = new this.Media.QueueItem(r), r.metadata.index === s && (n.startTime = a, h = c.length);
                                const e = JSON.stringify(n).length + 1;
                                if (!(l + e < 32e3)) break;
                                c.push(n), l += e
                            }
                        }
                        if (c.length) {
                            const e = new this.Media.QueueLoadRequest(c);
                            e.startIndex = h, r && (e.repeatMode = this.Media.RepeatMode.ALL), o.queueLoad(e, this.queueLoaded, this.queueErrored)
                        } else this.trigger(i.cM, new n.rG(null, 35e4, {
                            info: "media not supported by Chromecast"
                        }))
                    } else {
                        const e = this.getMediaInfo(t[s], s, d),
                            i = new this.Media.LoadRequest(e);
                        i.autoplay = !0, i.currentTime = a, o.loadMedia(i, this.loaded, this.error)
                    }
                }
                queueLoaded(e) {
                    this.loaded(e)
                }
                queueErrored(e) {
                    this.error(e)
                }
                getPlayerId() {
                    const e = this.getMedia();
                    let t, s;
                    return null != e && e.media ? (t = e.media.metadata, t.playerId) : this.castSession ? (s = this.castSession.getSessionObj(), s.playerId) : null
                }
                setPlayerId(e) {
                    if (!this.castSession) return;
                    this.castSession.getSessionObj().playerId = e
                }
                loaded(e) {
                    this.trigger("mediaUpdate", {
                        field: "volume",
                        value: {
                            volume: this.castSession.getVolume(),
                            isMute: this.castSession.isMute()
                        }
                    }), this.mediaAdded(e), this.play()
                }
                addListeners() {
                    if (!this.castSession) return null;
                    const e = this.castSession.getSessionObj();
                    e.removeUpdateListener(this.updateCastState), e.addUpdateListener(this.updateCastState), e.removeMediaListener(this.mediaAdded), e.addMediaListener(this.mediaAdded), this.castSession.addEventListener(this.framework.SessionEventType.VOLUME_CHANGED, (e => {
                        this.trigger("mediaUpdate", {
                            field: "volume",
                            value: e
                        })
                    }))
                }
                reset() {
                    this.removeListeners(), this.context && this.context.removeEventListener(this.CAST_STATE_CHANGED, this.updateCastState)
                }
                removeListeners() {
                    if (!this.castSession) return;
                    const e = this.castSession.getSessionObj();
                    e.removeUpdateListener(this.updateCastState), e.media.forEach((e => {
                        e.removeUpdateListener(this.mediaUpdate)
                    })), this.castSession.removeEventListener(this.framework.SessionEventType.VOLUME_CHANGED)
                }
                getMedia() {
                    if (this.castSession) {
                        const e = this.castSession.getSessionObj().media;
                        if (null != e && e.length) return e[0]
                    }
                    return null
                }
                error(e) {
                    this.trigger(i.cM, new n.rG(null, 35e4, {
                        errorCode: e
                    })), this.disconnect()
                }
                item(e) {
                    const t = this.getMedia();
                    if (!t) return void this.trigger("setPlaylist");
                    const s = this.getMediaInfo(e),
                        i = (0, r.sE)(t.items, (function(e) {
                            return e.media.contentId === s.contentId && e.media.index === s.index
                        }));
                    i ? t.queueJumpToItem(i.itemId) : this.trigger("setPlaylist")
                }
                play() {
                    const e = this.getMedia();
                    e && e.play()
                }
                pause() {
                    const e = this.getMedia();
                    e && e.pause()
                }
                next() {
                    const e = this.getMedia();
                    e && e.queueNext()
                }
                disconnect() {
                    this.castSession && this.castSession.endSession(!0)
                }
                seek(e, t) {
                    const s = this.getMedia();
                    if (s) {
                        const i = new this.Media.SeekRequest;
                        i.currentTime = e, i.resumeState = this.Media.ResumeState.PLAYBACK_START, s.seek(i, t)
                    }
                }
                mute(e) {
                    this.castSession && this.castSession.setMute(e)
                }
                volume(e) {
                    this.castSession && !this.castSession.isMute() && this.castSession.setVolume(e / 100)
                }
                editTracksInfo(e, t) {
                    const s = this.getMedia();
                    if (s) {
                        const i = new this.Media.EditTracksInfoRequest(e, t);
                        s.editTracksInfo(i)
                    }
                }
                extractEmbeddedCaptions() {
                    const e = this.getMedia();
                    if (!e || !e.media.tracks) return;
                    const t = /\.dfxp/,
                        s = e.media.tracks.filter((e => "TEXT" === e.type && "side-loaded captions" !== e.customData && !t.test(e.trackContentId))).map(((e, t) => (e.mapId = t, e.kind = "subtitles", e.cues = [], e)));
                    s.length && this.trigger("mediaUpdate", {
                        field: "captions",
                        value: {
                            tracks: s
                        }
                    })
                }
                getMediaInfo(e, t, s) {
                    var i;
                    let a = e.sources;
                    e.allSources && (a = e.allSources.slice(0).sort((function(e, t) {
                        return !e.default && t.default ? 1 : 0
                    })));
                    const n = (0, r.sE)(a, (function(e) {
                        const t = !(0, r.dp)(e.mediaTypes) || !(0, r.r3)(e.mediaTypes, 'video/webm; codecs="vp9"'),
                            s = !(0, r.dp)(e.drm) || (0, r.Yj)(e.drm, (function(e, t) {
                                return "fairplay" !== t
                            }));
                        return t && s
                    }));
                    if (!n) return;
                    const d = this.getMimeType(n.type),
                        o = this.getAbsolutePathWithProtocol(n.file),
                        c = e.image ? this.getAbsolutePathWithProtocol(e.image) : null,
                        l = n.drm,
                        h = e.duration ? e.duration : null,
                        u = new this.Media.MediaInfo(o, d);
                    var m, T;
                    return u.streamType = !h || h < 0 || h === 1 / 0 ? "LIVE" : "BUFFERED", u.metadata = new this.Media.GenericMediaMetadata, u.metadata.title = e.title, u.metadata.subtitle = e.description, u.metadata.index = t || 0, u.metadata.playerId = this.getPlayerId(), null != e && null != (i = e.tracks) && i.length && (u.tracks = (m = e.tracks, T = this.Media, m.filter((e => e.kind && Boolean(T.TextTrackType[e.kind.toUpperCase()]))).map(((e, t) => {
                        const s = t + 1,
                            i = new T.Track(s, T.TrackType.TEXT);
                        i.trackContentId = e.file, i.trackContentType = "text/vtt", i.name = e.label || s;
                        const a = i.subtype = T.TextTrackType[e.kind.toUpperCase()];
                        return a !== T.TextTrackType.CAPTIONS && a !== T.TextTrackType.SUBTITLES && a !== T.TextTrackType.DESCRIPTION || (i.customData = "side-loaded captions", i.language = "en-US"), i
                    })))), s && (u.textTrackStyle = this.obtainTrackStyles(s)), c && (u.metadata.images = [{
                        url: c
                    }]), l && (u.customData = {
                        drm: l
                    }), u
                }
                obtainTrackStyles(e) {
                    const t = function(e) {
                            return Math.round(e / 100 * 255).toString(16)
                        },
                        s = new this.Media.TextTrackStyle,
                        i = (e, t) => e && e + t || void 0;
                    return s.foregroundColor = i(e.color, t(e.fontOpacity)), s.backgroundColor = i(e.backgroundColor, t(e.backgroundOpacity)), s.windowColor = i(e.windowColor, t(e.windowOpacity)), s.fontFamily = e.fontFamily, s.fontStyle = this.Media.TextTrackFontStyle.NORMAL, s.fontScale = e.fontSize / 14, s.edgeType = function(e, t) {
                        const s = t.TextTrackEdgeType;
                        switch (e) {
                            case "dropShadow":
                                return s.DROP_SHADOW;
                            case "raised":
                                return s.RAISED;
                            case "depressed":
                                return s.DEPRESSED;
                            case "uniform":
                                return s.OUTLINE;
                            default:
                                return s.NONE
                        }
                    }(e.edgeStyle, this.Media), s.windowType = this.Media.TextTrackWindowType.NORMAL, s
                }
                getAbsolutePathWithProtocol(e) {
                    const t = document.createElement("a");
                    return t.href = e, t.href
                }
                getMimeType(e) {
                    switch (e) {
                        case "mp4":
                        case "webm":
                            return `video/${e}`;
                        case "mpd":
                        case "dash":
                            return "application/dash+xml";
                        case "m3u8":
                        case "hls":
                            return "application/x-mpegURL";
                        case "aac":
                            return "audio/x-aac";
                        case "mp3":
                            return "audio/mpeg";
                        default:
                            return e
                    }
                }
                updateCastState() {
                    const e = this.context.getCastState() !== this.framework.CastState.NO_DEVICES_AVAILABLE;
                    let t = "";
                    this.castSession = this.context.getCurrentSession(), this.castSession && (t = this.castSession.getCastDevice().friendlyName || t), this.trigger("castState", {
                        available: e,
                        active: Boolean(this.castSession),
                        deviceName: t
                    })
                }
                mediaUpdate() {
                    const e = this.getMedia();
                    e && this.trigger("mediaUpdate", {
                        field: "media",
                        value: e
                    })
                }
                mediaAdded(e) {
                    e.removeUpdateListener(this.mediaUpdate), e.addUpdateListener(this.mediaUpdate)
                }
            };
            var o = s(2799),
                c = s(686),
                l = s(6528),
                h = s(3328);
            class u {}
            Object.assign(u.prototype, l.Z, a.ZP, h.Z, {
                getName: () => ({
                    name: "chromecast"
                }),
                getQualityLevels: (0, r.a9)(["Auto"])
            });
            const m = class extends u {
                constructor(e, t) {
                    super(), this.playerId = e, this.playerConfig = t, this.minDvrWindow = t.minDvrWindow, this.backgroundImage = null
                }
                castEventHandlers(e) {
                    const t = {
                        media: e => {
                            const s = this.getRemote("items"),
                                a = "IDLE" === e.playerState && "FINISHED" === e.idleReason,
                                r = "IDLE" === e.playerState && "ERROR" === e.idleReason,
                                d = a && !s;
                            t.playerState(d ? "complete" : e.playerState), t.currentTime(), clearInterval(this.timeInterval), "PLAYING" === e.playerState ? this.timeInterval = setInterval(t.currentTime, 100) : a ? this.setState("itemComplete") : d ? this.setState("complete") : r && (this.setState("error"), this.trigger(i.cM, new n.rG(null, 35e4, e)), s || this.castService.disconnect())
                        },
                        volume: e => {
                            this.trigger("volume", {
                                volume: Math.round(100 * e.volume)
                            }), this.trigger("mute", {
                                mute: e.isMute
                            })
                        },
                        captions: e => {
                            this.clearTracks(), this.setTextTracks(e.tracks), this.trigger("subtitlesTracks", {
                                tracks: e.tracks
                            })
                        },
                        playerState: e => {
                            const t = [i.Kb, i.bc, i.r0, i._5, i.nQ, i.ik, i.xQ, i.Vy];
                            if (!e || -1 === t.indexOf(e.toLowerCase())) return;
                            const s = e.toLowerCase();
                            if (s === i.bc || s === i.Kb) {
                                const e = this.getRemote("currentTime");
                                (0, r.hj)(e) && this.trigger(i.uT, {
                                    bufferPercent: 0,
                                    position: this.getPosition(),
                                    duration: this.getDuration(),
                                    currentTime: e,
                                    seekRange: this.getSeekRange()
                                })
                            }
                            this.setState(s)
                        },
                        currentTime: this.triggerTime.bind(this),
                        duration: this.triggerTime.bind(this),
                        isPaused: e => {
                            e ? this.setState(i._5) : this.setState(i.r0)
                        },
                        supports: () => !0
                    };
                    return t[e] ? t[e] : null
                }
                destroy() {
                    clearInterval(this.timeInterval)
                }
                setService(e) {
                    this.castService = e, this.updateScreen()
                }
                setup(e) {
                    this.setState(i.Kb), this.sendCommand("setup", e)
                }
                init(e) {
                    this.currentItem !== e && (this.currentItem = e, this.sendCommand("item", e))
                }
                load(e) {
                    this.init(e), this.play()
                }
                play() {
                    this.sendCommand("play")
                }
                pause() {
                    this.sendCommand("pause")
                }
                seek(e) {
                    const t = this.getRemote("currentTime");
                    if (this.trigger(i.NZ, {
                        position: this.getPosition(),
                        offset: e,
                        duration: this.getDuration(),
                        currentTime: t,
                        seekRange: this.getSeekRange(),
                        metadata: {
                            currentTime: t
                        }
                    }), e < 0) {
                        const {
                            end: t
                        } = this.getSeekRange();
                        e += t
                    }
                    this.sendCommand("seek", e, (() => {
                        this.trigger(i.aQ)
                    }))
                }
                next(e) {
                    this.sendCommand("next", e)
                }
                volume(e) {
                    this.sendCommand("volume", e)
                }
                mute(e) {
                    this.sendCommand("mute", e)
                }
                setSubtitlesTrack(e) {
                    const t = e > 0 ? [e + this.minimumEmbeddedTrackId()] : [];
                    this.castService.editTracksInfo(t)
                }
                minimumEmbeddedTrackId() {
                    const e = window.chrome.cast.media.TextTrackType;
                    e.CAPTION = "CAPTION", e.SUBTITLE = "SUBTITLE";
                    const t = this.castService.getMedia();
                    let s = 0;
                    if (!t) return s;
                    const i = t.media.tracks;
                    if (!i) return s;
                    for (let t = 0; t < i.length; t++) {
                        const a = i[t],
                            r = a.subtype;
                        if ("TEXT" === a.type && (r === e.CAPTIONS || r === e.SUBTITLES || r === e.DESCRIPTIONS || r === e.CAPTION || r === e.SUBTITLE || "text/vtt" === a.trackContentType)) {
                            s = t;
                            break
                        }
                    }
                    return s
                }
                sendCommand(e, ...t) {
                    this.castService && this.castService[e] && this.castService[e](...t)
                }
                getRemote(e) {
                    if (!this.castService) return;
                    const t = this.castService.getMedia();
                    return t ? "currentTime" !== e || t.liveSeekableRange ? t[e] || (t.media ? t.media[e] : null) : t.getEstimatedTime() : null
                }
                updateScreen(e, t) {
                    this.backgroundImage !== t && (this.backgroundImage = t, this.statusMessage = e, (0, o.nh)(this.container, ((e, t) => `<div class="jw-cast jw-reset jw-preview" style="${t?`background-image:url('${t}')`:""}">\n      <div class="jw-cast-container">\n        <div class="jw-cast-text jw-reset">\n          ${e||""}\n        </div>\n      </div>\n    </div>`)(e, t)))
                }
                getContainer() {
                    return this.container
                }
                setContainer(e) {
                    this.container = e
                }
                remove() {
                    this.statusMessage = null, clearInterval(this.timeInterval)
                }
                getPosition() {
                    const e = this.getRemote("currentTime") || 0,
                        t = this.getDuration();
                    if (this.getRemote("liveSeekableRange") && t < 0) {
                        const {
                            end: t,
                            start: s
                        } = this.getSeekRange(), i = t - s;
                        if ((0, c.s)(i, this.minDvrWindow)) return e - t
                    }
                    return e
                }
                getDuration() {
                    const e = this.getRemote("duration") || 0;
                    if (this.getRemote("liveSeekableRange") && e < 0) {
                        const {
                            end: e,
                            start: t
                        } = this.getSeekRange(), s = e - t;
                        return (0, c.s)(s, this.minDvrWindow) ? -s : 1 / 0
                    }
                    return e
                }
                getSeekRange() {
                    const {
                        start: e,
                        end: t
                    } = this.getRemote("liveSeekableRange") || {
                        start: 0,
                        end: Math.max(this.getRemote("duration") || 0, 0)
                    };
                    return {
                        start: e,
                        end: t
                    }
                }
                triggerTime() {
                    const e = this.getRemote("currentTime");
                    (0, r.hj)(e) && this.trigger(i.R2, {
                        position: this.getPosition(),
                        duration: this.getDuration(),
                        currentTime: e,
                        seekRange: this.getSeekRange(),
                        metadata: {
                            currentTime: e
                        }
                    })
                }
                stop() {
                    this.clearTracks()
                }
            };
            var T = s(676);
            let g;
            var k = s(4429);
            const v = {};
            const p = class {
                constructor(e, t, s) {
                    this.stopCasting = () => {
                        var e;
                        return (null == this || null == (e = this.service) || null == e.disconnect ? void 0 : e.disconnect()) || k.Z.noop
                    }, this.localController = e, this.model = t, this.service = v[this.model.get("id")] || null, this.castProvider = null, this.castToggle = k.Z.noop, this.setup = this.setup.bind(this), this.options = s || {}, this.loadingApi = g || (g = new Promise((function(e, t) {
                        window.__onGCastApiAvailable = function(s) {
                            s ? e(s) : t(), delete window.__onGCastApiAvailable
                        }, new T.ZP("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1").load().catch(t)
                    })), g)
                }
                init() {
                    return this.loadingApi.then(this.setup)
                }
                setup() {
                    const e = this.model.get("cast") || {};
                    this.model.set("castState", {
                        available: !1,
                        active: !1,
                        deviceName: ""
                    }), this.service && (this.service.off(), this.service.reset());
                    const t = this.options && (this.options.CastService || d);
                    this.service = new t(e.appid || e.customAppId), this.service.init(), this.service.on("castState", this.updateCastState, this), this.service.on("mediaUpdate", this.onMediaUpdate, this), this.service.on("mediaUpdate", this.onFirstMediaUpdate, this), this.service.on("setPlaylist", this.setPlaylist, this), this.service.on(i.cM, (e => {
                        this.localController.trigger(i.cM, e)
                    })), this.service.updateCastState(), v[this.model.get("id")] = this.service
                }
                switchProviders() {
                    const e = this.options && (this.options.CastProvider || m);
                    this.castProvider = new e(this.model.get("id"), this.model.getConfiguration()), this.localController.castVideo(this.castProvider, this.model.get("playlistItem")), this.castProvider.setService(this.service)
                }
                setPlaylist() {
                    this.model.set("state", i.Kb), this.castProvider.updateScreen("Connecting", this.model.get("playlistItem").image), this.service.setPlaylist(this.model)
                }
                onConnect() {
                    const e = this.model.get("castClicked");
                    if ((e || !this.service.getPlayerId()) && this.service.setPlayerId(this.model.get("id")), !e || !this.isActivePlayer()) return;
                    this.localController.setFullscreen(!1), this.switchProviders(), this.service.addListeners();
                    const t = this.service.getMedia();
                    t ? this.service.loaded(t) : (this.service.on("mediaUpdate", this.seekToEdgeIfDvr, this), this.setPlaylist()), this.model.on("change:playlist", this.setPlaylist, this), this.model.on("change:itemReady", this.checkForEmbeddedCaptions, this), this.model.change("captions", this.updateCaptionStyles, this)
                }
                onDisconnect() {
                    const e = this.model.get("state");
                    let t = e === i.xQ;
                    const s = e === i.bc,
                        a = e === i.Vy,
                        r = this.model.get("item"),
                        n = this.model.get("playlist");
                    let d = this.model.get("playlistItem");
                    if (this.service.removeListeners(), this.castProvider && this.castProvider.remove(), d && a && (d = n[r + 1], void 0 === d ? t = !0 : (this.model.set("item", r + 1), this.model.set("playlistItem", d))), this.model.set("castActive", !1), this.model.set("castClicked", !1), this.localController.stopCast(), this.model.off(null, null, this), d)
                        if (t) this.localController.trigger(i.V$, {});
                        else if (!s) {
                            const e = this.model.mediaModel,
                                t = this.castProvider;
                            this.localController.playVideo("interaction").catch((function(s) {
                                t && e && t.trigger("error", {
                                    message: s.message
                                })
                            }))
                        }
                }
                toggleConnection(e) {
                    e ? this.onConnect() : this.castProvider && this.onDisconnect()
                }
                checkForEmbeddedCaptions() {
                    this.service.extractEmbeddedCaptions(), this.castProvider.setSubtitlesTrack(this.model.get("captionsIndex"))
                }
                updateCaptionStyles(e, t) {
                    const s = this.service.getMedia();
                    if (!s) return;
                    const i = this.service.obtainTrackStyles(t);
                    this.service.editTracksInfo(s.activeTrackIds, i)
                }
                onMediaUpdate(e) {
                    const t = e.field,
                        s = e.value;
                    if (!this.castProvider) return;
                    "media" === t && this.updatePlaylistItem(s);
                    const i = this.castProvider.castEventHandlers(t);
                    i && i(s)
                }
                onFirstMediaUpdate(e) {
                    "media" === e.field && (this.checkForEmbeddedCaptions(), this.service.off("mediaUpdate", this.onFirstMediaUpdate, this))
                }
                seekToEdgeIfDvr(e) {
                    if ("media" !== e.field) return;
                    this.service.off("mediaUpdate", this.seekToEdgeIfDvr, this);
                    const t = e.value,
                        {
                            currentTime: s,
                            liveSeekableRange: i
                        } = t;
                    if (!s && i) {
                        const {
                            start: e,
                            end: t
                        } = i;
                        if (!this.model.mediaModel.get("currentTime") && (0, c.s)(t - e, this.model.get("minDvrWindow"))) {
                            const e = t - this.model.get("dvrSeekLimit");
                            this.service.seek(e)
                        }
                    }
                }
                updatePlaylistItem(e) {
                    const t = this.model.get("playlist");
                    if (!e.media) return;
                    const s = e.media.metadata,
                        i = t[s.index];
                    (0, r.hj)(s.index) && s.index !== this.model.get("item") && (this.model.attributes.itemReady = !1, this.model.set("item", s.index), this.model.set("itemReady", !0), e.idleReason || this.model.set("playlistItem", i), this.castProvider.updateScreen("Updating Playlist Item", i.image), "itemComplete" === this.castProvider.state && this.model.get("playlistItemCallback") && this.castProvider.sendCommand("item", i))
                }
                updateCastState(e) {
                    const t = this.model.get("castActive");
                    let s = e.active;
                    t !== s && this.toggleConnection(s), s = s && this.isActivePlayer(), this.model.set("castAvailable", e.available), this.model.set("castActive", s), this.model.set("castState", {
                        available: e.available,
                        active: s,
                        deviceName: e.deviceName
                    })
                }
                isActivePlayer() {
                    return this.service.getPlayerId() === this.model.get("id")
                }
            }
        }
    }
]);