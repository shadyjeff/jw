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
    [168], {
        8446: (t, e, o) => {
            o.d(e, {
                FM: () => s,
                Sf: () => r,
                xq: () => c
            });
            var i = o(2957),
                n = o(974);
            const s = t => t.replace(/^(.*\/)?(.*)-?.*\.(css).*$/, "$2"),
                c = t => {
                    t || (t = {});
                    const e = t.active,
                        o = t.inactive,
                        i = t.background,
                        s = {};
                    return s.controlbar = (t => {
                        if (t || e || o || i) {
                            const n = {};
                            return t = t || {}, n.iconsActive = t.iconsActive || e, n.icons = t.icons || o, n.text = t.text || o, n.background = t.background || i, n
                        }
                    })(t.controlbar), s.timeslider = (t => {
                        if (t || e) {
                            const o = {};
                            return t = t || {}, o.progress = t.progress || e, o.rail = t.rail, o.buffer = t.buffer, !o.buffer && o.progress && (o.buffer = (0, n.HY)(o.progress, 50)), o.knob = t.knob || o.progress, o.ads = t.ads || i, o
                        }
                    })(t.timeslider), s.menus = (t => {
                        if (t || e || o || i) {
                            const n = {};
                            return t = t || {}, n.text = t.text || o, n.textActive = t.textActive || e, n.background = t.background || i, n
                        }
                    })(t.menus), s.tooltips = (t => {
                        if (t || o || i) {
                            const e = {};
                            return t = t || {}, e.text = t.text || o, e.background = t.background || i, e
                        }
                    })(t.tooltips), s
                },
                r = (t, e) => {
                    if (!e) return;
                    const o = (e, o, s, c) => {
                        if (!s) return;
                        e = (0, i.O4)(e, `#${t}${c?"":" "}`);
                        const r = {};
                        r[o] = s, (0, n.iv)(e.join(", "), r, t)
                    };
                    var s;
                    e.controlbar && (s = e.controlbar, o([".jw-controlbar .jw-icon-inline.jw-text", ".jw-title-primary", ".jw-title-secondary"], "color", s.text), s.icons && (o([".jw-button-color:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:not(.jw-icon-cast)"], "color", s.icons), o([".jw-display-icon-container .jw-button-color"], "color", s.icons), (0, n.iv)(`#${t} .jw-icon-cast google-cast-launcher.jw-off`, `{--disconnected-color: ${s.icons}}`, t)), s.iconsActive && (o([".jw-display-icon-container .jw-button-color:hover", ".jw-display-icon-container .jw-button-color:focus"], "color", s.iconsActive), o([".jw-button-color.jw-toggle:not(.jw-icon-cast)", ".jw-button-color:hover:not(.jw-icon-cast)", ".jw-button-color:focus:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:hover:not(.jw-icon-cast)"], "color", s.iconsActive), o([".jw-svg-icon-buffer"], "fill", s.icons), (0, n.iv)(`#${t} .jw-icon-cast:hover google-cast-launcher.jw-off`, `{--disconnected-color: ${s.iconsActive}}`, t), (0, n.iv)(`#${t} .jw-icon-cast:focus google-cast-launcher.jw-off`, `{--disconnected-color: ${s.iconsActive}}`, t), (0, n.iv)(`#${t} .jw-icon-cast google-cast-launcher.jw-off:focus`, `{--disconnected-color: ${s.iconsActive}}`, t), (0, n.iv)(`#${t} .jw-icon-cast google-cast-launcher`, `{--connected-color: ${s.iconsActive}}`, t), (0, n.iv)(`#${t} .jw-icon-cast google-cast-launcher:focus`, `{--connected-color: ${s.iconsActive}}`, t), (0, n.iv)(`#${t} .jw-icon-cast:hover google-cast-launcher`, `{--connected-color: ${s.iconsActive}}`, t), (0, n.iv)(`#${t} .jw-icon-cast:focus google-cast-launcher`, `{--connected-color: ${s.iconsActive}}`, t)), o([" .jw-settings-topbar", ":not(.jw-state-idle) .jw-controlbar", ".jw-flag-audio-player .jw-controlbar"], "background", s.background, !0)), e.timeslider && (t => {
                        const {
                            progress: e,
                            buffer: i,
                            rail: s,
                            knob: c,
                            ads: r
                        } = t;
                        e && "none" !== e && (o([".jw-progress"], "background-color", e), o([".jw-slider-volume .jw-buffer"], "background-color", (0, n.HY)(e, 50))), i && "none" !== i && o([".jw-slider-time .jw-buffer"], "background-color", i), r && "none" !== r && o([".jw-slider-time .jw-cue-type-ads"], "background-color", r), c && "none" !== c && o([".jw-knob"], "background-color", c), s && "none" !== s && o([".jw-rail"], "background-color", s), o([".jw-background-color.jw-slider-time", ".jw-slider-time .jw-cue"], "background-color", t.background)
                    })(e.timeslider), e.menus && (t => {
                        o([".jw-option", ".jw-toggle.jw-off", ".jw-skip .jw-skip-icon", ".jw-nextup-tooltip", ".jw-nextup-close", ".jw-settings-content-item", ".jw-related-title"], "color", t.text), o([".jw-option.jw-active-option", ".jw-option:not(.jw-active-option):hover", ".jw-option:not(.jw-active-option):focus", ".jw-settings-content-item:hover", ".jw-nextup-tooltip:hover", ".jw-nextup-tooltip:focus", ".jw-nextup-close:hover"], "color", t.textActive), o([".jw-nextup", ".jw-settings-menu"], "background", t.background)
                    })(e.menus), e.tooltips && (t => {
                        o([".jw-skip", ".jw-tooltip .jw-text", ".jw-time-tip .jw-text"], "background-color", t.background), o([".jw-time-tip", ".jw-tooltip"], "color", t.background), o([".jw-skip"], "border", "none"), o([".jw-skip .jw-text", ".jw-skip .jw-icon", ".jw-time-tip .jw-text", ".jw-tooltip .jw-text"], "color", t.text)
                    })(e.tooltips), e.menus && (e => {
                        if (e.textActive) {
                            const o = {
                                color: e.textActive,
                                borderColor: e.textActive,
                                stroke: e.textActive
                            };
                            (0, n.iv)(`#${t} .jw-color-active`, o, t), (0, n.iv)(`#${t} .jw-color-active-hover:hover`, o, t)
                        }
                        if (e.text) {
                            const o = {
                                color: e.text,
                                borderColor: e.text,
                                stroke: e.text
                            };
                            (0, n.iv)(`#${t} .jw-color-inactive`, o, t), (0, n.iv)(`#${t} .jw-color-inactive-hover:hover`, o, t)
                        }
                    })(e.menus)
                }
        },
        5545: (t, e, o) => {
            o.r(e), o.d(e, {
                default: () => d
            });
            var i = o(6042),
                n = o(8446),
                s = o(2445);
            const c = ["file", "description", "image", "mediaid", "title", "type", "playlist", "floating"].concat(["skinUrl", "pluginUrl", "advertising", "adCustParams", "adMacros"]),
                r = function(t, e) {
                    const o = {};
                    o.edition = t.get("edition");
                    const i = "free" === o.edition,
                        r = e.skinUrl;
                    !i && r && function(t, e) {
                        t.skin = {}, t.skin.url = e, t.skin.name = (0, n.FM)(e)
                    }(o, r);
                    const a = e.advertising || t.get("advertising"),
                        l = e.adCustParams,
                        d = null == a ? void 0 : a.schedule;
                    l && 0 !== Object.keys(l).length && d && (Object.keys(d).forEach((t => {
                        d[t].custParams = l
                    })), a.schedule = d);
                    const u = e.adMacros;
                    a && u && (a.ampMacros = u);
                    const w = e.pluginUrl;
                    return (w || a) && (a && (o.advertising = a), function(t, e) {
                        e && (t.plugins = {}, t.plugins[e] = {}), t.plugins = (0, s.qG)(t)
                    }(o, w)), Object.keys(e).forEach((t => {
                        -1 === c.indexOf(t) && (o[t] = e[t])
                    })), o
                },
                a = {
                    play: "play",
                    pause: "pause",
                    complete: "complete",
                    meta: "meta",
                    mute: "mute",
                    visible: "visible",
                    adImpression: "adImpression",
                    adComplete: "adComplete",
                    adPlay: "adPlay",
                    adPause: "adPause",
                    adTime: "adTime",
                    time: "time",
                    controls: "controls",
                    resize: "resize"
                },
                l = function(t) {
                    if (t.source !== window.parent) return;
                    let e = t.data;
                    return e && ("object" == typeof e || (e = JSON.parse(e), e && "object" == typeof e)) ? e : void 0
                };
            const d = class {
                constructor(t) {
                    this.api = t, this.model = null, this.onCommand = this.onCommand.bind(this), this.shouldSetupOnConfig = !1, this.playerReady = !1
                }
                setup(t) {
                    return this.subscribe(), this.sendMessage({
                        event: "setup"
                    }), t.attributes.ampController = this, new Promise((e => {
                        const o = setTimeout((() => (this.shouldSetupOnConfig = !0, e())), 50),
                            i = function(n) {
                                clearTimeout(o);
                                const s = l(n);
                                if (s && "setupConfig" === s.method && "setupConfig" === s.method) {
                                    window.removeEventListener("message", i);
                                    const o = s.optParams;
                                    if (!o || 0 === Object.keys(o).length) return e();
                                    const n = r(t, o);
                                    return this.shouldSetupOnConfig ? void this.api.setup(Object.assign({}, this.api.getConfig().setupConfig, o)) : (Object.assign(t.attributes, n), e())
                                }
                            }.bind(this);
                        window.addEventListener("message", i)
                    }))
                }
                ready(t) {
                    return this.model = t, this.addEventListeners(), this.sendMessage({
                        event: "ready",
                        detail: {
                            playlistItem: this.getPlaylistItem(),
                            muted: this.model.getMute()
                        }
                    })
                }
                createAMPItem(t) {
                    return {
                        duration: t.duration,
                        meta: this.getMetadata(),
                        title: t.title,
                        mediaid: t.mediaid
                    }
                }
                getPlaylistItem() {
                    const t = this.model.get("playlistItem");
                    return this.createAMPItem(t)
                }
                getPlayedRanges() {
                    const t = this.model.get("mediaElement"),
                        {
                            played: e
                        } = t,
                        {
                            length: o
                        } = e,
                        i = [];
                    for (let t = 0; t < o; t++) i.push([e.start(t), e.end(t)]);
                    return i
                }
                getMetadata() {
                    var t, e;
                    const o = null == (t = navigator) || null == (e = t.mediaSession) ? void 0 : e.metadata;
                    if (o) {
                        const {
                            title: t,
                            artist: e,
                            album: i,
                            artwork: n
                        } = o;
                        return {
                            title: t,
                            artist: e,
                            album: i,
                            artwork: n
                        }
                    }
                }
                subscribe() {
                    this.unsubscribe(), Object.keys(a).forEach((t => {
                        this.api.on(t, (e => {
                            const o = (0, i.l7)({}, e);
                            o.client && "vast" === o.client && ["request", "response"].forEach((t => {
                                delete o[t]
                            })), this.sendMessage({
                                event: t,
                                detail: o
                            })
                        }), this)
                    })), window.addEventListener("message", this.onCommand)
                }
                addEventListeners() {
                    this.model.on("change:fullscreen", ((t, e) => {
                        this.sendMessage({
                            event: "fullscreen",
                            detail: {
                                fullscreen: e
                            }
                        })
                    }), this), this.model.on("change:playlistItem", ((t, e) => this.sendMessage({
                        event: "playlistItem",
                        detail: this.createAMPItem(e)
                    })), this), this.api.once("ready", (() => {
                        this.playerReady = !0
                    }))
                }
                sendMessage(t, e = "*") {
                    window.parent.postMessage(t, e)
                }
                onCommand(t) {
                    const e = l(t);
                    if (!e) return;
                    const {
                        method: o,
                        optParams: i
                    } = e;
                    if ("getPlayedRanges" === o) {
                        const t = {
                            ranges: this.getPlayedRanges()
                        };
                        return this.sendMessage({
                            event: "playedRanges",
                            detail: t
                        })
                    }
                    if (this.playerReady || "setControls" !== o) return this.api[o] ? this.api[o](i) : void 0;
                    this.api.once("ready", (() => {
                        this.api[o](i)
                    }))
                }
                unsubscribe() {
                    this.api && this.api.off(null, null, this), this.model && this.model.off(null, null, this), window.removeEventListener("message", this.onCommand)
                }
            }
        }
    }
]);