// Link https://cheeaun.github.io/chengyu-wordle/assets/index.a189627b.js

var e = Object.defineProperty,
    t = Object.defineProperties,
    n = Object.getOwnPropertyDescriptors,
    o = Object.getOwnPropertySymbols,
    i = Object.prototype.hasOwnProperty,
    r = Object.prototype.propertyIsEnumerable,
    a = (t, n, o) => n in t ? e(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[n] = o,
    l = (e, t) => {
        for (var n in t || (t = {})) i.call(t, n) && a(e, n, t[n]);
        if (o)
            for (var n of o(t)) r.call(t, n) && a(e, n, t[n]);
        return e
    },
    s = (e, o) => t(e, n(o));
export function __vite_legacy_guard() {
    import("data:text/javascript,")
}
import {
    j as c,
    a as d,
    F as h,
    J as u,
    u as m,
    l as p,
    y as g,
    d as f,
    s as b,
    b as y,
    A as w,
    T as v,
    t as k,
    c as C,
    e as I,
    i as L,
    B as S,
    f as z,
    S as $
} from "./vendor.4fe743b3.js";
import {
    p as P
} from "./pinyin.23404d9b.js";
import {
    i as D
} from "./all-idioms.effcc4de.js";
import {
    d as T
} from "./game-idioms.4b614f9d.js";
! function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
        new MutationObserver((e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function t(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), "use-credentials" === e.crossorigin ? t.credentials = "include" : "anonymous" === e.crossorigin ? t.credentials = "omit" : t.credentials = "same-origin", t
        }(e);
        fetch(e.href, t)
    }
}();
const G = c,
    x = d,
    M = h,
    R = e => P(e, {
        segment: !0,
        group: !0
    }).flat().join(" ").trim(),
    j = e => k(e),
    O = (e, t = (() => {})) => {
        navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(e).then(t).catch((e => {})) : (I(e), t())
    },
    E = e => {
        try {
            return localStorage.getItem(e)
        } catch (t) {
            return null
        }
    },
    N = (e, t) => {
        try {
            return localStorage.setItem(e, t)
        } catch (n) {
            return null
        }
    },
    A = e => {
        try {
            return localStorage.removeItem(e)
        } catch (t) {
            return null
        }
    },
    H = (...e) => {
        window.plausible && plausible(...e)
    },
    B = D.split("\n"),
    _ = T.slice(1).map((e => ({
        id: e[0],
        idiom: e[1]
    })));
window.clearGames = () => {
    for (let e = 0; e < localStorage.length; e++) {
        const t = localStorage.key(e);
        t.startsWith("cywd-") && localStorage.removeItem(t)
    }
}, window.allGames = () => {
    const e = new Map;
    for (let t = 0; t < localStorage.length; t++) {
        const n = localStorage.key(t);
        if (n.startsWith("cywd-")) {
            const t = JSON.parse(localStorage.getItem(n));
            e.set(n.replace("cywd-", ""), t)
        }
    }
    return e
};
const W = (e, t) => {
    const n = "string" == typeof t ? t.split("") : t,
        o = "string" == typeof e ? e.split("") : e,
        i = n.length,
        r = Array.from({
            length: i
        }, (() => "???"));
    if (i !== o.length) throw new Error("idioms must have the same length");
    const a = [];
    for (let s = 0; s < i; s++) {
        n[s] === o[s] && (r[s] = "????", a.push(s))
    }
    const l = [];
    for (let s = 0; s < i; s++) {
        const e = n[s];
        if (e !== o[s]) {
            const t = o.indexOf(e); - 1 === t || a.includes(t) || l.includes(t) || (r[s] = "????", l.push(t))
        }
    }
    return r
};
window.getIdiomStates = W;
const U = e => {
        if (e.some((e => !!e.length && e.every((e => "????" === e))))) return "won";
        const t = e[e.length - 1];
        return !!t.length && t.every((e => "????" !== e)) ? "lost" : null
    },
    K = () => Array.from({
        length: 6
    }, (() => ({
        v: Array.from({
            length: 4
        }, (() => "")),
        s: !1
    }))),
    J = (e, t, n, o = 0) => {
        var i;
        let r = t || new Set;
        r.add(e);
        let a = n || new Set;
        const l = e.split("");
        l.forEach((e => a.add(e)));
        let s = 0;
        e: for (let c = 0; c < _.length; c++) {
            const e = l[(c + 1) % 4],
                t = _.find((({
                    idiom: t
                }) => !r.has(t) && t.includes(e)));
            if (t) {
                for (let e = 0; e < t.idiom.length; e++)
                    if (a.add(t.idiom[e]), a.size >= 20) break e;
                r.add(t.idiom), s = 0
            } else {
                if (s >= 5) break e;
                s += 1
            }
        }
        if (a.size < 20 || r.size < 6) {
            const e = [...r][++o];
            if (e) {
                const {
                    passedIdioms: t,
                    keys: n
                } = J(e, r, a, o);
                r = t, a = n
            }
        }
        if (a.size < 20 || r.size < 6) {
            const e = _[Math.floor(Math.random() * _.length)].idiom;
            if (e) {
                const {
                    passedIdioms: t,
                    keys: n
                } = J(e, r, a, 0);
                r = t, a = n
            }
        }
        if (a.size < 20 || r.size < 6) {
            const t = null == (i = _.find((t => t.idiom === e))) ? void 0 : i.id;
            console.error(t, {
                possibleIdioms: r.size,
                keySize: a.size,
                consecutiveFailures: s
            })
        }
        return {
            passedIdioms: r,
            keys: a
        }
    },
    F = e => x("svg", s(l({
        viewBox: "0 0 20 20",
        fill: "currentColor"
    }, e), {
        children: [G("title", {
            children: "??????"
        }), G("path", {
            "fill-rule": "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
            "clip-rule": "evenodd"
        })]
    })),
    q = e => x("svg", s(l({
        viewBox: "0 0 24 24"
    }, e), {
        children: [G("title", {
            children: "??????"
        }), G("path", {
            fill: "currentColor",
            d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        })]
    })),
    V = new Date(2022, 0, 27),
    X = () => {
        const e = (new Date).setHours(0, 0, 0, 0) - V,
            t = Math.floor(e / 864e5);
        return _[Math.max(0, t % _.length)]
    },
    Y = () => {
        const {
            t: e
        } = m();
        let t = (new Date).setHours(0, 0, 0, 0) + 864e5;
        const n = new Date(+V + 864e5);
        t < n && (t = n);
        const [o, i] = p("00"), [r, a] = p("00"), [l, s] = p("00"), [c, d] = p(!1);
        return g((() => {
            const e = setInterval((() => {
                const n = t - new Date;
                if (n <= 0) return d(!0), void clearInterval(e);
                i(Math.floor(n / 36e5).toString().padStart(2, "0")), a(Math.floor(n / 6e4 % 60).toString().padStart(2, "0")), s(Math.floor(n / 1e3 % 60).toString().padStart(2, "0"))
            }), 1e3);
            return () => clearInterval(e)
        }), []), c ? G("a", {
            href: "./",
            children: e("ui.countdownNow")
        }) : x("time", {
            class: "countdown",
            children: [o, ":", r, ":", l]
        })
    },
    Z = ({
        code: e,
        url: t
    }) => {
        const {
            t: n
        } = m();
        return e && G("input", {
            readOnly: !0,
            value: e,
            class: "idiom-code",
            onClick: o => {
                o.target.focus(), o.target.select(), O(t || e, (() => {
                    j(n("ui.copiedURL"))
                }))
            }
        })
    },
    Q = ({
        letter: e,
        state: t
    }) => G("div", {
        class: `letter ${e?"lettered":""} ${null!=t?t:""} ${t?"????":""}`,
        children: x("ruby", {
            children: [e || G("span", {
                style: {
                    opacity: 0
                },
                children: "???"
            }), G("rp", {
                children: "("
            }), G("rt", {
                children: R(e) || G(M, {
                    children: " "
                })
            }), G("rp", {
                children: ")"
            })]
        })
    }),
    ee = new u,
    te = () => {
        const {
            t: e
        } = m();
        let t = 0,
            n = 0;
        const o = _.map((e => {
            const o = JSON.parse(E(`cywd-${e.id}`));
            if (o && o.gameState) {
                const {
                    board: i,
                    gameState: r
                } = o;
                return "won" === r ? t++ : "lost" === r && n++, G("a", {
                    href: `/#${e.id}`,
                    class: `board ${r}`,
                    title: `${e.id} (${r})`,
                    children: "won" === r ? "????" : "????"
                })
            }
            return G("a", {
                href: `/#${e.id}`,
                class: "board",
                title: `${e.id}`,
                children: "???"
            })
        }));
        return g((() => {
            ee.addConfetti({
                emojis: ["????", "????"],
                emojiSize: 30,
                confettiNumber: 100
            })
        }), []), x(M, {
            children: [G("h2", {
                children: e("dashboard.heading", {
                    gamesCount: 7e3
                })
            }), G("p", {
                children: e("dashboard.subheading")
            }), x("p", {
                children: [G(v, {
                    i18nKey: "dashboard.totalGamesPlayed",
                    values: {
                        gamesCountOverTotal: `${t+n} / ${_.length}`
                    },
                    components: [G("b", {})]
                }), G("br", {}), G(v, {
                    i18nKey: "dashboard.wonLost",
                    values: {
                        wonCount: t,
                        lostCount: n
                    },
                    components: [G("b", {}), G("b", {})]
                })]
            }), G("div", {
                class: "boards",
                children: o
            })]
        })
    },
    ne = "matchMedia" in window && "not all" !== window.matchMedia("(prefers-color-scheme: dark)").media;
var oe = {
    about: {
        about1: "<0>Built</0> by <1>Chee Aun</1>. <2>Wordle</2> ?? <3>Josh Wardle</3>.",
        heading: "About"
    },
    app: {
        description: "Wordle, for Chinese idioms - ?????? (ch??ngy??). Guess the idiom in 6 tries.",
        title: "Chengyu Wordle"
    },
    common: {
        choose: "Choose",
        enter: "Enter",
        play: "Play",
        random: "Random",
        share: "Share",
        tweet: "Tweet"
    },
    dashboard: {
        heading: "Congratulations, you've made it! {{gamesCount}}+ games!",
        subheading: "Here you have access to ALL idiom games, including the ones you might have not played. Click on the box to play a specific idiom game.",
        totalGamesPlayed: "Total games played: <0>{{gamesCountOverTotal}}</0>",
        wonLost: "???? Won: <0>{{wonCount}}</0> ?? ???? Lost: <1>{{lostCount}}</1>"
    },
    debugging: {
        clearDB: "Clear database",
        confirmClearDB: "Are you sure?",
        confirmResetGame: "Are you sure?",
        heading: "Debugging",
        resetGame: "Reset current idiom game"
    },
    feedback: {
        githubDiscussions: "<0>GitHub Discussions</0> (for developers)",
        githubIssues: "<0>GitHub Issues</0> (for bugs)",
        heading: "Feedback",
        telegram: "@cheeaun on Telegram",
        telegramGroup: "Telegram Group",
        twitter: "@cheeaun on Twitter"
    },
    glossary: {
        baidu: "Baidu",
        zdic: "ZDIC"
    },
    hints: {
        abbreviatedPinyin: "??? Abbreviated pinyin: {{pinyinHint}}",
        absentLetter: "??? The letter {{letter}} ({{pinyin}}) is NOT in the idiom.",
        presentLetter: "??? The letter {{letter}} ({{pinyin}}) is in the idiom."
    },
    howToPlay: {
        heading: "How to play",
        how1: "Guess the idiom in 6 tries.",
        how2: "Each guess must be a valid 4-letter idiom. Hit the enter button to submit.",
        how3: "After each guess, the color of the tiles will change to show how close your guess was to the idiom.",
        how4: "A new idiom will be available every day.",
        spotAbsent: "Gray = not in any spot",
        spotCorrect: "Green = correct spot",
        spotPresent: "Yellow = wrong spot"
    },
    ui: {
        confirmRandom: "Are you sure you want to start a new random game?",
        copiedResults: "Copied results to clipboard",
        copiedURL: "Copied URL to clipboard",
        countdownNow: "Now!",
        gamesPlayed: "???? Games played: <0/>",
        hint: "I'm stuck",
        idiomId: "Idiom ID:",
        nextIdiom: "Next Idiom: <0/>",
        playTodayGame: "Play today's game!",
        promptIdiom: "Enter idiom ID/URL:",
        startPlay: "Let's play!"
    }
};
var ie = {
    about: {
        about1: "??? <1>??????</1> <0>??????</0>??? <2>Wordle</2> ?? <3>Josh Wardle</3>???",
        heading: "??????"
    },
    app: {
        description: "Wordle????????????????????????????????????ch??ngy??????????? 6 ???????????????????????????",
        title: "??????Wordle"
    },
    common: {
        choose: "??????",
        enter: "Enter",
        play: "???",
        random: "?????????",
        share: "??????",
        tweet: "??????"
    },
    dashboard: {
        heading: "??????????????????????????? {{gamesCount}}+?????????",
        subheading: "??????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????",
        totalGamesPlayed: "?????????????????????<0>{{gamesCountOverTotal}}</0>",
        wonLost: "???? ?????????<0>{{wonCount}}</0> ?? ???? ?????????<1>{{lostCount}}</1>"
    },
    debugging: {
        clearDB: "???????????????",
        confirmClearDB: "???????????????",
        confirmResetGame: "???????????????",
        heading: "??????",
        resetGame: "???????????????????????????"
    },
    feedback: {
        githubDiscussions: "<0>GitHub ??????</0>?????????????????????",
        githubIssues: "<0>GitHub ??????</0>??????????????????",
        heading: "??????",
        telegram: "???????????? @cheeaun",
        telegramGroup: "?????????",
        twitter: "???????????? @cheeaun"
    },
    glossary: {
        baidu: "??????",
        zdic: "??????"
    },
    hints: {
        abbreviatedPinyin: "??? ???????????????{{pinyinHint}}",
        absentLetter: "??? ????????????????????? {{letter}} ({{pinyin}})???",
        presentLetter: "??? ?????? {{letter}} ({{pinyin}}) ???????????????"
    },
    howToPlay: {
        heading: "?????????",
        how1: "??? 6 ???????????????????????????",
        how2: "????????????????????????????????? 4 ??????????????????????????????????????????",
        how3: "???????????????????????????????????????????????????????????????????????????????????????????????????",
        how4: "??????????????????????????????????????????",
        spotAbsent: "?????? = ??????????????????",
        spotCorrect: "?????? = ????????????",
        spotPresent: "?????? = ???????????????"
    },
    ui: {
        confirmRandom: "??????????????????????????????????????????",
        copiedResults: "???????????????????????????",
        copiedURL: "??? URL ??????????????????",
        countdownNow: "?????????",
        gamesPlayed: "???? ??????????????????<0/>",
        hint: "???????????????",
        idiomId: "??????ID:",
        nextIdiom: "??????????????????<0/>",
        playTodayGame: "?????????????????????",
        promptIdiom: "???????????? ID/URL???",
        startPlay: "???????????????"
    }
};
L.use(S).use(z).init({
    resources: {
        en: {
            translation: oe
        },
        zh: {
            translation: ie
        }
    },
    fallbackLng: "en",
    debug: /localhost/i.test(location.hostname),
    detection: {
        lookupLocalStorage: "locale",
        lookupCookie: "locale"
    },
    interpolation: {
        escapeValue: !1
    }
}).then((e => {
    const t = () => {
        document.documentElement.lang = L.resolvedLanguage, document.title = document.querySelector('meta[property="og:title"]').content = e("app.title"), document.querySelector('meta[name="description"]').content = document.querySelector('meta[property="og:description"]').content = e("app.description")
    };
    L.on("languageChanged", t), t()
})), $(G((function() {
    var e;
    const {
        t: t,
        i18n: n
    } = m(), [o, i] = p(!1), [r, a] = p(!1), [l, s] = p(!1), [c, d] = p(!1), [h, u] = p(E("cywd-colorScheme") || "auto");
    g((() => {
        if (!ne) return;
        const e = document.querySelector("html");
        "dark" === h ? (e.classList.add("dark-mode"), e.classList.remove("light-mode")) : "light" === h ? (e.classList.add("light-mode"), e.classList.remove("dark-mode")) : e.classList.remove("dark-mode", "light-mode")
    }), [h]);
    const [I, L] = p(E("cywd-skipFirstTime") || !1), [S, z] = p(_.find((e => e.id === location.hash.slice(1))) || X());
    g((() => {
        window.addEventListener("hashchange", (() => {
            z(_.find((e => e.id === location.hash.slice(1))) || X()), i(!1)
        }))
    }), []);
    const [$, P] = p((null == (e = JSON.parse(E(`cywd-${S.id}`))) ? void 0 : e.board) || K());
    g((() => {
        const e = E(`cywd-${S.id}`);
        P(e ? JSON.parse(e).board : K())
    }), [S.id]);
    const D = f((() => $.map(((e, t) => e.s ? W(S.idiom, e.v) : []))), [$]);
    g((() => {
        $ && $.some((e => e.v.some((e => e)))) && N(`cywd-${S.id}`, JSON.stringify({
            board: $,
            gameState: U(D)
        }))
    }), [D]);
    const [T, V] = p(null);
    g((() => {
        V(null), fetch(`https://baidu-hanyu-idiom.cheeaun.workers.dev/?wd=${S.idiom}`).then((e => e.json())).then((e => {
            e.definition && V(e.definition)
        })).catch((() => {}))
    }), [S.idiom]);
    const ee = (null == $ ? void 0 : $.findIndex((e => !1 === e.s))) || 0,
        oe = f((() => {
            const {
                keys: e
            } = J(S.idiom), t = B.filter((t => t.split("").every((t => e.has(t))))).map((e => `${e} (${R(e)})`)).sort(((e, t) => e.localeCompare(t, "zh")));
            return console.groupCollapsed && (console.groupCollapsed(`${t.length} Possible Idioms [${S.id}] (${e.size} keys):`), console.log(`${t.map(((e,t)=>`${t+1}. ${e}`)).join("\n")}\n\n????SPOILER???? Type 'ANSWER' to see the answer.`), console.groupEnd()), window.ANSWER = `${S.idiom} (${R(S.idiom)})`, [...e].sort(((e, t) => e.localeCompare(t, "zh")))
        }), [S.idiom]),
        ie = (e, t = !1) => {
            if (!$[ee]) return;
            if (ce) return;
            const n = [...$];
            let o = n[ee].v.findIndex((e => "" === e));
            t && (-1 === o ? o = 3 : o--), -1 !== o && (n[ee].v[o] = e, P(n))
        },
        re = new Set,
        ae = new Set,
        le = new Set;
    $.forEach(((e, t) => {
        e.s && e.v.forEach(((e, n) => {
            const o = D[t][n];
            "????" === o ? re.add(e) : "????" === o ? ae.add(e) : "???" === o && le.add(e)
        }))
    }));
    const se = () => {
            if (ce) return;
            console.log("handleEnter"), a(!1);
            const e = $[ee];
            if (!e) return;
            const t = e.v.join(""),
                n = B.includes(t);
            n ? (e.s = !0, P([...$])) : setTimeout((() => {
                a(!0)
            }), 10), console.log({
                currentIdiom: t,
                valid: n
            })
        },
        ce = f((() => U(D)), [D]);
    g((() => {
        s("won" === ce ? "won" : "lost" === ce && "lost")
    }), [ce]);
    const de = () => {
        if (ce) return;
        const e = [...$],
            t = e[ee];
        if (!t || t.s) return;
        let n = -1;
        for (let o = t.v.length - 1; o >= 0; o--)
            if ("" !== t.v[o]) {
                n = o;
                break
            } - 1 !== n && (t.v[n] = "", P(e))
    };
    g((() => {
        const e = e => {
            if (ce) return;
            if (e.metaKey || e.ctrlKey || !e.key) return;
            const t = e.key.toLowerCase();
            if ("enter" === t) e.preventDefault(), e.stopPropagation(), se();
            else if ("backspace" === t) e.preventDefault(), de();
            else if (/^arrow(left|right)/i.test(t)) {
                const e = [...$[ee].v].reverse().find((e => "" !== e));
                if (e) {
                    const n = R(e)[0],
                        o = oe.filter((e => R(e)[0] === n));
                    if (o.length <= 1) return;
                    const i = o.indexOf(e),
                        r = "arrowright" === t ? o[(i + 1) % o.length] : o[(i + o.length - 1) % o.length];
                    r && ie(r, !0)
                }
            } else {
                const n = oe.find((e => 0 === R(e)[0].localeCompare(t, "en", {
                    sensitivity: "base"
                })));
                n && (e.preventDefault(), ie(n))
            }
        };
        return document.addEventListener("keydown", e), () => {
            document.removeEventListener("keydown", e)
        }
    }), [oe, $, ee, ce]);
    const he = location.origin + location.pathname + "#" + S.id,
        ue = location.host + location.pathname + "#" + S.id,
        me = D.map((e => e.join(""))).join("\n").trim(),
        pe = "won" === ce ? me.split("\n").length : "X",
        ge = `${`${t("app.title")} [${S.id}] ${pe}/6\n\n${me}`}\n\n${ue}`,
        fe = f((() => {
            const e = [],
                n = S.idiom.split(""),
                o = oe.filter((e => !n.includes(e) && !le.has(e))).slice(0, -1).slice(0, 3).map((e => t("hints.absentLetter", {
                    letter: e,
                    pinyin: R(e)
                }))).sort((() => Math.random() - .5));
            e.push(...o), (null == T ? void 0 : T.zh) && n.filter((e => T.zh.includes(e))).length <= 2 && e.push(`?????? ${T.zh}`), (null == T ? void 0 : T.en) && e.push(`?????? ${T.en}`);
            const i = n.filter((e => !re.has(e) && !ae.has(e))).slice(0, -1).map((e => t("hints.presentLetter", {
                letter: e,
                pinyin: R(e)
            }))).sort((() => Math.random() - .5));
            e.push(...i);
            const r = n.map((e => R(e)[0])).join("").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return e.push(t("hints.abbreviatedPinyin", {
                pinyinHint: r
            })), e
        }), [S.idiom, T]),
        be = b(0);
    g((() => {
        be.current = 0
    }), [S.idiom]);
    const {
        toasts: ye
    } = y();
    g((() => {
        ye.filter(((e, t) => e.visible && t >= 1)).forEach((e => k.dismiss(e.id)))
    }), [ye]);
    const we = f((() => {
        if (c) try {
            return Object.keys(localStorage).filter((e => {
                const t = e.startsWith("cywd-");
                if (!t) return !1;
                const n = e.slice("cywd-".length);
                return t && _.find((e => e.id === n))
            })).length
        } catch (e) {}
    }), [c]);
    g((() => {
        if (!we || we < 10) return;
        const e = we < 100 ? 1 : 2,
            t = +we.toPrecision(e);
        H("Games Played", {
            props: {
                count: t
            }
        })
    }), [we]);
    const ve = w((() => x("b", {
        children: [we, we >= 7e3 && x(M, {
            children: [" ", "/", " ", G("a", {
                href: "#",
                onClick: e => {
                    e.preventDefault(), d(!1), i(!0)
                },
                children: _.length
            })]
        })]
    })), [we]);
    return x(M, {
        children: [G("header", {
            children: x("div", {
                class: "inner",
                children: [G("button", {
                    type: "button",
                    onClick: () => {
                        d(!0)
                    },
                    children: x("svg", {
                        width: "16",
                        height: "16",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: [G("title", {
                            children: "??????"
                        }), G("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })]
                    })
                }), G("h1", {
                    children: t("app.title")
                }), G("button", {
                    type: "button",
                    onClick: () => {
                        s(ce || "play")
                    },
                    children: ce ? t("common.play") : x("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 290 290",
                        children: [G("title", {
                            children: "..."
                        }), G("path", {
                            fill: "currentColor",
                            d: "M255 110a35 35 0 1 0 0 70 35 35 0 0 0 0-70zM35 110a35 35 0 1 0 0 70 35 35 0 0 0 0-70zM145 110a35 35 0 1 0 0 70 35 35 0 0 0 0-70z"
                        })]
                    })
                })]
            })
        }), G("div", {
            id: "board",
            class: ce,
            children: $.map(((e, t) => G("div", {
                className: `row ${ee===t&&r?"error":""} ${ee===t?"current":""}`,
                children: e.v.map(((e, n) => G(Q, {
                    letter: e,
                    state: D[t][n]
                }, n)))
            }, t)))
        }), G("div", {
            id: "keyboard",
            class: ce,
            children: x("div", {
                class: "inner",
                children: [G("div", {
                    class: "keys",
                    children: oe.map(((e, t) => G("button", {
                        class: `${re.has(e)?"????":""} ${ae.has(e)?"????":""} ${le.has(e)?"???":""}`,
                        type: "button",
                        tabIndex: -1,
                        onClick: () => {
                            ie(e)
                        },
                        children: x("ruby", {
                            children: [e, G("rp", {
                                children: "("
                            }), G("rt", {
                                children: R(e)
                            }), G("rp", {
                                children: ")"
                            })]
                        })
                    })))
                }), x("div", {
                    class: "row",
                    children: [G("button", {
                        type: "button",
                        onClick: se,
                        tabIndex: -1,
                        children: t("common.enter")
                    }), G("button", {
                        type: "button",
                        class: "stuck",
                        onClick: () => {
                            if (ce) return;
                            const e = fe[be.current];
                            be.current = (be.current + 1) % fe.length, j(e)
                        },
                        children: t("ui.hint")
                    }), G("button", {
                        type: "button",
                        onClick: de,
                        tabIndex: -1,
                        children: G("svg", {
                            height: "24",
                            viewBox: "0 0 24 24",
                            width: "24",
                            children: G("path", {
                                fill: "currentColor",
                                d: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
                            })
                        })
                    })]
                })]
            })
        }), x("div", {
            id: "modal",
            class: l ? "appear" : "",
            onClick: e => {
                e.target === e.currentTarget && s(null)
            },
            children: [G(q, {
                height: "24",
                width: "24",
                class: "close",
                onClick: () => {
                    s(null)
                }
            }), x("div", {
                class: "content",
                children: [G("h2", {
                    children: "won" === l ? "????????????" : "lost" === l ? "????????????" : "????????????"
                }), "play" === l && x("p", {
                    children: [t("ui.idiomId"), " ", G(Z, {
                        code: S.id,
                        url: he
                    })]
                }), /(won|lost)/i.test(l) && x(M, {
                    children: [x("p", {
                        children: [G("b", {
                            class: "answer",
                            children: x("ruby", {
                                children: [S.idiom, G("rp", {
                                    children: "("
                                }), G("rt", {
                                    children: R(S.idiom)
                                }), G("rp", {
                                    children: ")"
                                })]
                            })
                        }), x("div", {
                            class: "definition",
                            children: [(null == T ? void 0 : T.zh) ? T.zh.split("").map((e => R(e) === e ? e : x("ruby", {
                                children: [e, G("rp", {
                                    children: "("
                                }), G("rt", {
                                    children: R(e)
                                }), G("rp", {
                                    children: ")"
                                })]
                            }))) : "", (null == T ? void 0 : T.zh) && (null == T ? void 0 : T.en) && G("br", {}), null == T ? void 0 : T.en]
                        }), x("small", {
                            children: [x("a", {
                                href: `https://hanyu.baidu.com/s?wd=${S.idiom}&from=zici`,
                                target: "_blank",
                                children: ["???? ", t("glossary.baidu")]
                            }), "   ", x("a", {
                                href: `https://www.zdic.net/hans/${S.idiom}`,
                                target: "_blank",
                                children: ["???? ", t("glossary.zdic")]
                            })]
                        })]
                    }), G("div", {
                        class: "results",
                        children: ge
                    }), x("button", {
                        id: "share",
                        onClick: async () => {
                            try {
                                if (/edge?\//i.test(navigator.userAgent) || /windows/.test(navigator.userAgent)) throw new Error("Web Share API not working well here");
                                O(ge), await navigator.share({
                                    text: ge
                                })
                            } catch (e) {
                                O(ge, (() => {
                                    j(t("ui.copiedResults"))
                                }))
                            }
                        },
                        children: [t("common.share"), " ", G("svg", {
                            height: "16",
                            width: "16",
                            viewBox: "0 0 24 24",
                            children: G("path", {
                                fill: "currentColor",
                                d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                            })
                        })]
                    }), " ", G("a", {
                        class: "button facebook",
                        href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(he)}&hashtag=${encodeURIComponent("#chengyuwordle")}`,
                        target: "_blank",
                        onClick: () => {
                            O(ge)
                        },
                        children: x("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 96.1 96.1",
                            children: [G("title", {
                                children: "Facebook"
                            }), G("path", {
                                fill: "currentColor",
                                d: "M72 0H59.7c-14 0-23 9.3-23 23.7v10.9H24c-1 0-2 .8-2 2v15.7c0 1.1 1 2 2 2h12.6v39.9c0 1 .8 2 2 2h16.3c1 0 2-1 2-2v-40h14.6c1 0 2-.8 2-1.9V36.5a2 2 0 0 0-2-2H56.8v-9.2c0-4.4 1.1-6.7 6.9-6.7H72c1 0 2-.9 2-2V2c0-1.1-1-2-2-2z"
                            })]
                        })
                    }), " ", G("a", {
                        class: "button tweet",
                        href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(ge)}`,
                        target: "_blank",
                        children: x("svg", {
                            height: "16",
                            width: "16",
                            viewBox: "0 0 24 24",
                            children: [G("title", {
                                children: t("common.tweet")
                            }), G("path", {
                                fill: "currentColor",
                                d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                            })]
                        })
                    }), " ", G(Z, {
                        code: S.id,
                        url: he
                    })]
                }), x("div", {
                    class: "footer",
                    children: [/won|lost/i.test(ce) && X().id === S.id && G("p", {
                        children: G("big", {
                            children: G(v, {
                                i18nKey: "ui.nextIdiom",
                                components: [G(Y, {})]
                            })
                        })
                    }), x("div", {
                        children: [X().id !== S.id && x(M, {
                            children: [x("a", {
                                href: "./",
                                class: "button strong",
                                children: [G(F, {
                                    width: 20,
                                    height: 20
                                }), " ", t("ui.playTodayGame")]
                            }), G("br", {})]
                        }), x("button", {
                            type: "button",
                            onClick: () => {
                                H("Click: Random");
                                if (confirm(t("ui.confirmRandom"))) {
                                    const e = Math.round(Math.random() * (_.length - 1)),
                                        t = _[e];
                                    location.hash = `#${t.id}`, s(null), H("Game load: Random")
                                }
                            },
                            children: [G(F, {
                                width: 20,
                                height: 20
                            }), " ", t("common.random")]
                        }), " ", x("button", {
                            type: "button",
                            onClick: () => {
                                H("Click: Idiom ID");
                                let e = prompt(t("ui.promptIdiom"));
                                try {
                                    e = new URL(e).hash.slice(1)
                                } catch (n) {}
                                if (e) {
                                    const t = _.find((t => t.id === e));
                                    t ? (location.hash = `#${t.id}`, s(null), H("Game load: Idiom ID")) : j("Invalid idiom ID")
                                }
                            },
                            children: [G(F, {
                                width: 20,
                                height: 20
                            }), " ", t("common.choose")]
                        })]
                    })]
                })]
            })]
        }), x("div", {
            id: "info-modal",
            class: c || !I ? "appear" : "",
            children: [I && G(q, {
                height: "32",
                width: "32",
                class: "close",
                onClick: () => {
                    d(!1)
                }
            }), x("div", {
                class: "content",
                children: [ne && x("p", {
                    class: "color-scheme-selector",
                    children: [G("button", {
                        type: "button",
                        class: "dark" === h ? "active" : "",
                        onClick: () => {
                            N("cywd-colorScheme", "dark"), u("dark")
                        },
                        children: "????"
                    }), " ", G("button", {
                        type: "button",
                        class: "auto" === h ? "active" : "",
                        onClick: () => {
                            A("cywd-colorScheme"), u("auto")
                        },
                        children: "????"
                    }), " ", G("button", {
                        type: "button",
                        class: "light" === h ? "active" : "",
                        onClick: () => {
                            N("cywd-colorScheme", "light"), u("light")
                        },
                        children: "????"
                    })]
                }), " ", x("p", {
                    class: "locale-selector",
                    children: ["????", " ", G("a", {
                        href: "./?lng=en",
                        hreflang: "en",
                        rel: "en" === n.resolvedLanguage ? void 0 : "alternate",
                        class: "" + ("en" === n.resolvedLanguage ? "selected" : ""),
                        onClick: e => {
                            e.preventDefault(), n.changeLanguage("en")
                        },
                        children: "English"
                    }), " ", "???", " ", G("a", {
                        href: "./?lng=zh-CN",
                        hreflang: "zh-CN",
                        rel: "zh" === n.resolvedLanguage ? void 0 : "alternate",
                        class: "" + ("zh" === n.resolvedLanguage ? "selected" : ""),
                        onClick: e => {
                            e.preventDefault(), n.changeLanguage("zh-CN")
                        },
                        children: "??????"
                    })]
                }), I && we > 0 && G("div", {
                    id: "stats",
                    children: G("p", {
                        children: G(v, {
                            i18nKey: "ui.gamesPlayed",
                            components: [G(ve, {})]
                        })
                    })
                }), G("h2", {
                    children: t("howToPlay.heading")
                }), G("p", {
                    children: t("howToPlay.how1")
                }), G("p", {
                    children: t("howToPlay.how2")
                }), G("p", {
                    children: t("howToPlay.how3")
                }), G("div", {
                    class: "example-idiom",
                    children: "????????????".split("").map(((e, t) => G(Q, {
                        letter: e,
                        state: 0 === t ? "????" : ""
                    }, e)))
                }), G("p", {
                    children: t("howToPlay.spotCorrect")
                }), G("div", {
                    class: "example-idiom",
                    children: "????????????".split("").map(((e, t) => G(Q, {
                        letter: e,
                        state: 1 === t ? "????" : ""
                    }, e)))
                }), G("p", {
                    children: t("howToPlay.spotPresent")
                }), G("div", {
                    class: "example-idiom",
                    children: "????????????".split("").map(((e, t) => G(Q, {
                        letter: e,
                        state: 2 === t ? "???" : ""
                    }, e)))
                }), G("p", {
                    children: t("howToPlay.spotAbsent")
                }), G("p", {
                    children: t("howToPlay.how4")
                }), I ? x(M, {
                    children: [G("h2", {
                        children: t("about.heading")
                    }), G("p", {
                        children: G(v, {
                            i18nKey: "about.about1",
                            components: [G("a", {
                                href: "https://github.com/cheeaun/chengyu-wordle/",
                                target: "_blank"
                            }), G("a", {
                                href: "https://cheeaun.com/projects/",
                                target: "_blank"
                            }), G("a", {
                                href: "https://www.powerlanguage.co.uk/wordle/",
                                target: "_blank"
                            }), G("a", {
                                href: "https://powerlanguage.co.uk/",
                                target: "_blank"
                            })]
                        })
                    }), G("h2", {
                        children: t("feedback.heading")
                    }), x("ul", {
                        children: [G("li", {
                            children: G("a", {
                                href: "https://t.me/+ykuhfiImLd1kNjk1",
                                target: "_blank",
                                children: t("feedback.telegramGroup")
                            })
                        }), G("li", {
                            children: G(v, {
                                i18nKey: "feedback.githubDiscussions",
                                components: [G("a", {
                                    href: "https://github.com/cheeaun/chengyu-wordle/discussions",
                                    target: "_blank"
                                })]
                            })
                        }), G("li", {
                            children: G(v, {
                                i18nKey: "feedback.githubIssues",
                                components: [G("a", {
                                    href: "https://github.com/cheeaun/chengyu-wordle/issues",
                                    target: "_blank"
                                })]
                            })
                        }), G("li", {
                            children: G("a", {
                                href: "https://twitter.com/cheeaun",
                                target: "_blank",
                                children: t("feedback.twitter")
                            })
                        }), G("li", {
                            children: G("a", {
                                href: "https://t.me/cheeaun",
                                target: "_blank",
                                children: t("feedback.telegram")
                            })
                        })]
                    }), x("details", {
                        id: "debugging-container",
                        children: [x("summary", {
                            children: [t("debugging.heading"), " (", "f019863", ")"]
                        }), G("button", {
                            type: "button",
                            onClick: () => {
                                confirm(t("debugging.confirmResetGame")) && (A("cywd-" + S.id), location.reload())
                            },
                            children: t("debugging.resetGame")
                        }), " ", G("button", {
                            type: "button",
                            onClick: () => {
                                confirm(t("debugging.confirmClearDB")) && (clearGames(), location.reload())
                            },
                            children: t("debugging.clearDB")
                        })]
                    })]
                }) : G("p", {
                    children: x("button", {
                        type: "button",
                        class: "large",
                        onClick: () => {
                            d(!1), N("cywd-skipFirstTime", 1), L(!0)
                        },
                        children: [G(F, {
                            width: "20",
                            height: "20"
                        }), " ", t("ui.startPlay")]
                    })
                })]
            })]
        }), o && x("div", {
            id: "dashboard-modal",
            children: [G(q, {
                height: "24",
                width: "24",
                class: "close",
                onClick: () => {
                    i(!1)
                }
            }), G(te, {})]
        }), G(C, {
            containerStyle: {
                top: "3.5em"
            },
            toastOptions: {
                className: "toast",
                style: {
                    pointerEvents: "none"
                }
            }
        })]
    })
}), {}), document.getElementById("app"));
//# sourceMappingURL=index.a189627b.js.map