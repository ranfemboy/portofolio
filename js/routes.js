import {
  n as e,
  r as t,
  t as n
} from "./main.js";
var r = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `)
  .trim(),
  i = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  a = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()),
  o = e => {
    let t = a(e);
    return t.charAt(0).toUpperCase() + t.slice(1)
  },
  s = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
  },
  c = e => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1
  },
  l = t(e()),
  u = (0, l.forwardRef)(({
    color: e = `currentColor`,
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: i,
    className: a = ``,
    children: o,
    iconNode: u,
    ...d
  }, f) => (0, l.createElement)(`svg`, {
    ref: f,
    ...s,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: i ? Number(n) * 24 / Number(t) : n,
    className: r(`lucide`, a),
    ...!o && !c(d) && {
      "aria-hidden": `true`
    },
    ...d
  }, [...u.map(([e, t]) => (0, l.createElement)(e, t)), ...Array.isArray(o) ? o : [o]])),
  d = (e, t) => {
    let n = (0, l.forwardRef)(({
      className: n,
      ...a
    }, s) => (0, l.createElement)(u, {
      ref: s,
      iconNode: t,
      className: r(`lucide-${i(o(e))}`, `lucide-${e}`, n),
      ...a
    }));
    return n.displayName = o(e), n
  },
  f = d(`arrow-up-right`, [
    [`path`, {
      d: `M7 7h10v10`,
      key: `1tivn9`
    }],
    [`path`, {
      d: `M7 17 17 7`,
      key: `1vkiza`
    }]
  ]),
  p = d(`book-open`, [
    [`path`, {
      d: `M12 7v14`,
      key: `1akyts`
    }],
    [`path`, {
      d: `M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,
      key: `ruj8y`
    }]
  ]),
  m = d(`cloud`, [
    [`path`, {
      d: `M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,
      key: `p7xjir`
    }]
  ]),
  h = d(`code`, [
    [`path`, {
      d: `m16 18 6-6-6-6`,
      key: `eg8j8`
    }],
    [`path`, {
      d: `m8 6-6 6 6 6`,
      key: `ppft3o`
    }]
  ]),
  g = d(`disc-3`, [
    [`circle`, {
      cx: `12`,
      cy: `12`,
      r: `10`,
      key: `1mglay`
    }],
    [`path`, {
      d: `M6 12c0-1.7.7-3.2 1.8-4.2`,
      key: `oqkarx`
    }],
    [`circle`, {
      cx: `12`,
      cy: `12`,
      r: `2`,
      key: `1c9p78`
    }],
    [`path`, {
      d: `M18 12c0 1.7-.7 3.2-1.8 4.2`,
      key: `1eah9h`
    }]
  ]),
  _ = d(`film`, [
    [`rect`, {
      width: `18`,
      height: `18`,
      x: `3`,
      y: `3`,
      rx: `2`,
      key: `afitv7`
    }],
    [`path`, {
      d: `M7 3v18`,
      key: `bbkbws`
    }],
    [`path`, {
      d: `M3 7.5h4`,
      key: `zfgn84`
    }],
    [`path`, {
      d: `M3 12h18`,
      key: `1i2n21`
    }],
    [`path`, {
      d: `M3 16.5h4`,
      key: `1230mu`
    }],
    [`path`, {
      d: `M17 3v18`,
      key: `in4fa5`
    }],
    [`path`, {
      d: `M17 7.5h4`,
      key: `myr1c1`
    }],
    [`path`, {
      d: `M17 16.5h4`,
      key: `go4c1d`
    }]
  ]),
  v = d(`folder-git-2`, [
    [`path`, {
      d: `M18 19a5 5 0 0 1-5-5v8`,
      key: `sz5oeg`
    }],
    [`path`, {
      d: `M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5`,
      key: `1w6njk`
    }],
    [`circle`, {
      cx: `13`,
      cy: `12`,
      r: `2`,
      key: `1j92g6`
    }],
    [`circle`, {
      cx: `20`,
      cy: `19`,
      r: `2`,
      key: `1obnsp`
    }]
  ]),
  y = d(`gamepad-2`, [
    [`line`, {
      x1: `6`,
      x2: `10`,
      y1: `11`,
      y2: `11`,
      key: `1gktln`
    }],
    [`line`, {
      x1: `8`,
      x2: `8`,
      y1: `9`,
      y2: `13`,
      key: `qnk9ow`
    }],
    [`line`, {
      x1: `15`,
      x2: `15.01`,
      y1: `12`,
      y2: `12`,
      key: `krot7o`
    }],
    [`line`, {
      x1: `18`,
      x2: `18.01`,
      y1: `10`,
      y2: `10`,
      key: `1lcuu1`
    }],
    [`path`, {
      d: `M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z`,
      key: `mfqc10`
    }]
  ]),
  b = d(`github`, [
    [`path`, {
      d: `M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4`,
      key: `tonef`
    }],
    [`path`, {
      d: `M9 18c-4.51 2-5-2-7-2`,
      key: `9comsn`
    }]
  ]),
  ee = d(`headphones`, [
    [`path`, {
      d: `M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3`,
      key: `1xhozi`
    }]
  ]),
  x = d(`house`, [
    [`path`, {
      d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,
      key: `5wwlr5`
    }],
    [`path`, {
      d: `M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
      key: `r6nss1`
    }]
  ]),
  te = d(`instagram`, [
    [`rect`, {
      width: `20`,
      height: `20`,
      x: `2`,
      y: `2`,
      rx: `5`,
      ry: `5`,
      key: `2e1cvw`
    }],
    [`path`, {
      d: `M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`,
      key: `9exkf1`
    }],
    [`line`, {
      x1: `17.5`,
      x2: `17.51`,
      y1: `6.5`,
      y2: `6.5`,
      key: `r4j83e`
    }]
  ]),
  S = d(`mail`, [
    [`path`, {
      d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,
      key: `132q7q`
    }],
    [`rect`, {
      x: `2`,
      y: `4`,
      width: `20`,
      height: `16`,
      rx: `2`,
      key: `izxlao`
    }]
  ]),
  ne = d(`music`, [
    [`path`, {
      d: `M9 18V5l12-2v13`,
      key: `1jmyc2`
    }],
    [`circle`, {
      cx: `6`,
      cy: `18`,
      r: `3`,
      key: `fqmcym`
    }],
    [`circle`, {
      cx: `18`,
      cy: `16`,
      r: `3`,
      key: `1hluhg`
    }]
  ]),
  C = d(`palette`, [
    [`path`, {
      d: `M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,
      key: `e79jfc`
    }],
    [`circle`, {
      cx: `13.5`,
      cy: `6.5`,
      r: `.5`,
      fill: `currentColor`,
      key: `1okk4w`
    }],
    [`circle`, {
      cx: `17.5`,
      cy: `10.5`,
      r: `.5`,
      fill: `currentColor`,
      key: `f64h9f`
    }],
    [`circle`, {
      cx: `6.5`,
      cy: `12.5`,
      r: `.5`,
      fill: `currentColor`,
      key: `qy21gx`
    }],
    [`circle`, {
      cx: `8.5`,
      cy: `7.5`,
      r: `.5`,
      fill: `currentColor`,
      key: `fotxhn`
    }]
  ]),
  w = d(`play`, [
    [`path`, {
      d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
      key: `10ikf1`
    }]
  ]),
  T = d(`quote`, [
    [`path`, {
      d: `M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z`,
      key: `rib7q0`
    }],
    [`path`, {
      d: `M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z`,
      key: `1ymkrd`
    }]
  ]),
  E = d(`smartphone`, [
    [`rect`, {
      width: `14`,
      height: `20`,
      x: `5`,
      y: `2`,
      rx: `2`,
      ry: `2`,
      key: `1yt0o3`
    }],
    [`path`, {
      d: `M12 18h.01`,
      key: `mhygvu`
    }]
  ]),
  D = d(`sparkle`, [
    [`path`, {
      d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
      key: `1s2grr`
    }]
  ]),
  O = d(`sparkles`, [
    [`path`, {
      d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
      key: `1s2grr`
    }],
    [`path`, {
      d: `M20 2v4`,
      key: `1rf3ol`
    }],
    [`path`, {
      d: `M22 4h-4`,
      key: `gwowj6`
    }],
    [`circle`, {
      cx: `4`,
      cy: `20`,
      r: `2`,
      key: `6kqj1y`
    }]
  ]),
  k = d(`star`, [
    [`path`, {
      d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
      key: `r04s7s`
    }]
  ]),
  re = d(`tv`, [
    [`path`, {
      d: `m17 2-5 5-5-5`,
      key: `16satq`
    }],
    [`rect`, {
      width: `20`,
      height: `15`,
      x: `2`,
      y: `7`,
      rx: `2`,
      key: `1e6viu`
    }]
  ]),
  ie = d(`user`, [
    [`path`, {
      d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,
      key: `975kel`
    }],
    [`circle`, {
      cx: `12`,
      cy: `7`,
      r: `4`,
      key: `17ys0d`
    }]
  ]),
  A = d(`zap`, [
    [`path`, {
      d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,
      key: `1xq2db`
    }]
  ]),
  j = n(),
  M = [`black`, `white`, `red`, `purple`, `blue`, `green`, `orange`, `yellow`, `pink`, `gradient`],
  N = null;

function P() {
  if (typeof window > `u`) return null;
  let e = window.AudioContext || window.webkitAudioContext;
  return e ? (N ||= new e, N.state === `suspended` && N.resume().catch(() => {}), N) : null
}

function F(e, {
  duration: t = .09,
  type: n = `sine`,
  gain: r = .06,
  stagger: i = .045
} = {}) {
  let a = P();
  a && e.forEach((e, o) => {
    let s = a.currentTime + o * i,
      c = a.createOscillator(),
      l = a.createGain();
    c.type = n, c.frequency.setValueAtTime(e, s), l.gain.setValueAtTime(0, s), l.gain
      .linearRampToValueAtTime(r, s + .008), l.gain.exponentialRampToValueAtTime(1e-4, s + t), c
      .connect(l), l.connect(a.destination), c.start(s), c.stop(s + t + .02)
  })
}

function I() {
  F([720], {
    duration: .07,
    type: `triangle`,
    gain: .05
  })
}

function L() {
  F([520, 780], {
    duration: .1,
    type: `sine`,
    gain: .05,
    stagger: .05
  })
}

function R() {
  F([440, 660, 880], {
    duration: .16,
    type: `triangle`,
    gain: .055,
    stagger: .06
  })
}

function z(e) {
  return {
    "--rot": e
  }
}

function B(e = !0) {
  let t = (0, l.useRef)(null),
    [n, r] = (0, l.useState)(!1);
  return (0, l.useEffect)(() => {
    let n = t.current;
    if (!n) return;
    let i = new IntersectionObserver(t => {
      for (let n of t) n.isIntersecting ? (r(!0), e && i.unobserve(n.target)) : e || r(!1)
    }, {
      threshold: .15,
      rootMargin: `0px 0px -8% 0px`
    });
    return i.observe(n), () => i.disconnect()
  }, [e]), {
    ref: t,
    inView: n
  }
}

function V({
  children: e,
  delay: t = 0,
  from: n = `up`,
  className: r = ``,
  as: i = `div`
}) {
  let {
    ref: a,
    inView: o
  } = B();
  return (0, j.jsx)(i, {
    ref: a,
    className: `reveal ${n===`left`?`reveal-left`:n===`right`?`reveal-right`:``} ${o?`is-in`:``} ${r}`,
    style: {
      transitionDelay: `${t}ms`
    },
    children: e
  })
}
var H = [{
    label: `Ngoprek Bot`,
    icon: h,
    bg: `bg-cream`
  }, {
    label: `Ngopi`,
    icon: A,
    bg: `bg-baby-blue`
  }, {
    label: `Nonton Film`,
    icon: _,
    bg: `bg-pastel-yellow`
  }, {
    label: `Desain UI`,
    icon: C,
    bg: `bg-lavender`
  }, {
    label: `Coding`,
    icon: h,
    bg: `bg-cream`
  }, {
    label: `Scroll Sosmed`,
    icon: E,
    bg: `bg-baby-blue`
  }, {
    label: `Dengerin Musik`,
    icon: ee,
    bg: `bg-cream`
  }, {
    label: `Main Game`,
    icon: y,
    bg: `bg-pastel-yellow`
  }, {
    label: `Baca Buku`,
    icon: p,
    bg: `bg-lavender`
  }],
  U = [{
    name: `Justin Bieber`,
    img: `/artists/justin-bieber.jpg`
  }],
  W = [{
    title: `Spy X Family`,
    img: `/anime/horimiya.jpg`
  }],
  G = [{
    name: `JavaScript`,
    level: 98
  }, {
    name: `React`,
    level: 70
  }, {
    name: `Node.js`,
    level: 100
  }, {
    name: `Baileys (WA Bot)`,
    level: 95
  }, {
    name: `Tailwind CSS`,
    level: 80
  }, {
    name: `Html`,
    level: 90
  }],
  K = [{
    label: `Status`,
    value: `Developer`
  }, {
    label: `Focus`,
    value: `WA Bot & Web`
  }, {
    label: `Base`,
    value: `Bali - Serongga Pondok`
  }, {
    label: `Mode`,
    value: `Always Online`
  }],
  q = [`React Three Fiber`, `Vercel`, `Termux`, `UI/UX Design`],
  J = [{
    title: `StarMusify`,
    href: `https://star-cloud.web.id`,
    img: `/projects/senxyzmusic.jpg`,
    desc: `Stream musik tanpa batas, tanpa iklan. Jutaan lagu, playlist keren, dan rekomendasi musik 100% gratis selamanya.`,
    tags: [{
      name: `Music Streaming`,
      bg: `bg-baby-blue`
    }, {
      name: `Free`,
      bg: `bg-soft-pink`
    }]
  }],
  Y = [{
    platform: `GitHub`,
    handle: `DEV RAN`,
    href: `https://github.com/Alterax_V5`,
    icon: b
  }, {
    platform: `Telegram`,
    handle: `Star Studio`,
    href: `https://t.me/Star_XReal`,
    icon: A
  }, {
    platform: `Instagram`,
    handle: `altoffc`,
    href: `https://instagram.com/altoffc`,
    icon: te
  }, {
    platform: `WhatsApp`,
    handle: `DEV RAN`,
    href: `https://wa.me/6285188342767`,
    icon: E
  }];

function ae() {
  let e = Array(8).fill(null);
  return (0, j.jsx)(`div`, {
    className: `w-full bg-ink text-cream py-2.5 overflow-hidden border-b-2 border-ink relative z-40`,
    children: (0, j.jsx)(`div`, {
      className: `marquee-track font-display font-semibold text-xs sm:text-sm tracking-[0.25em]`,
      children: e.map((e, t) => (0, j.jsxs)(`span`, {
        className: `px-6 flex items-center gap-6 shrink-0`,
        children: [`DEV RAN`, (0, j.jsx)(k, {
          className: `w-3 h-3 text-soft-pink`,
          strokeWidth: 2.5
        })]
      }, t))
    })
  })
}

function oe({
  active: e,
  href: t,
  icon: n,
  label: r,
  onClick: i
}) {
  return (0, j.jsxs)(`a`, {
    href: t,
    onClick: i,
    className: `flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 text-xs sm:text-sm font-display font-semibold uppercase tracking-wide ${e?`bg-cream text-ink border-ink/10 sticker`:`bg-lavender/60 text-ink border-ink/10 hover:bg-cream hover:-translate-y-0.5`}`,
    children: [(0, j.jsx)(n, {
      className: `w-3.5 h-3.5 sm:w-4 sm:h-4`
    }), (0, j.jsx)(`span`, {
      className: `hidden sm:inline`,
      children: r
    })]
  })
}

function X({
  fig: e,
  children: t
}) {
  return (0, j.jsxs)(V, {
    className: `mb-3`,
    from: `left`,
    children: [(0, j.jsx)(`p`, {
      className: `fig-label mb-3`,
      children: e
    }), (0, j.jsx)(`h2`, {
      className: `font-display font-bold text-3xl sm:text-4xl uppercase flex items-center gap-3`,
      children: t
    })]
  })
}

function Z({
  icon: e,
  className: t,
  style: n
}) {
  return (0, j.jsx)(e, {
    className: `absolute ${t}`,
    style: n
  })
}

function se() {
  let [e, t] = (0, l.useState)(`home`);
  return (0, l.useEffect)(() => {
    let e = [`home`, `about`, `hobby`, `favorite`, `skills`, `projects`, `contact`],
      n = new IntersectionObserver(e => {
        e.forEach(e => {
          e.isIntersecting && t(e.target.id)
        })
      }, {
        rootMargin: `-40% 0px -40% 0px`,
        threshold: 0
      });
    return e.forEach(e => {
      let t = document.getElementById(e);
      t && n.observe(t)
    }), () => n.disconnect()
  }, []), e
}
var Q = {
  black: {
    label: `Hitam`,
    swatch: `#111111`
  },
  white: {
    label: `Putih`,
    swatch: `#ffffff`
  },
  red: {
    label: `Merah`,
    swatch: `#ff3d24`
  },
  purple: {
    label: `Ungu`,
    swatch: `#a347ff`
  },
  blue: {
    label: `Biru`,
    swatch: `#2f9bff`
  },
  green: {
    label: `Hijau`,
    swatch: `#22c55e`
  },
  orange: {
    label: `Orange`,
    swatch: `#ff7a1a`
  },
  yellow: {
    label: `Kuning`,
    swatch: `#facc15`
  },
  pink: {
    label: `Pink`,
    swatch: `#ff4fa3`
  },
  gradient: {
    label: `Gradien`,
    swatch: `linear-gradient(135deg, #ff4fa3, #a347ff, #2f9bff)`
  }
};

function ce({
  theme: e,
  onSelect: t
}) {
  let [n, r] = (0, l.useState)(!1), i = (0, l.useRef)(null);
  return (0, l.useEffect)(() => {
    if (!n) return;

    function e(e) {
      i.current && !i.current.contains(e.target) && r(!1)
    }
    return document.addEventListener(`mousedown`, e), () => document.removeEventListener(
      `mousedown`, e)
  }, [n]), (0, j.jsxs)(`div`, {
    className: `relative`,
    ref: i,
    children: [n && (0, j.jsx)(`div`, {
      className: `absolute bottom-full right-0 mb-3 bg-cream border border-ink/10 rounded-2xl sticker p-2 flex flex-col gap-1 min-w-[150px] max-h-[60vh] overflow-y-auto reveal is-in`,
      children: M.map(n => (0, j.jsxs)(`button`, {
        onClick: () => {
          t(n), r(!1)
        },
        className: `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors font-display font-semibold text-sm uppercase tracking-wide ${e===n?`bg-baby-blue text-ink`:`text-ink hover:bg-lavender/60`}`,
        children: [(0, j.jsx)(`span`, {
          className: `w-4 h-4 rounded-full border border-ink/20 shrink-0`,
          style: {
            background: Q[n].swatch
          }
        }), Q[n].label, e === n && (0, j.jsx)(`span`, {
          className: `ml-auto text-xs`,
          children: `●`
        })]
      }, n))
    }), (0, j.jsx)(`button`, {
      "aria-label": `Ganti tema warna`,
      "aria-expanded": n,
      onClick: () => {
        I(), r(e => !e)
      },
      className: `bg-ink text-cream rounded-full p-3.5 border border-ink/10 transition-transform hover:-translate-y-1 hover:rotate-6 sticker`,
      children: (0, j.jsx)(C, {
        className: `w-5 h-5`,
        strokeWidth: 2.5
      })
    })]
  })
}

function le() {
  let [e, t] = (0, l.useState)(!1), n = (0, l.useRef)(null);
  return (0, l.useEffect)(() => {
    n.current && (e ? n.current.play().catch(() => t(!1)) : n.current.pause())
  }, [e]), (0, j.jsxs)(`div`, {
    className: `fixed bottom-5 left-5 z-50`,
    children: [(0, j.jsx)(`audio`, {
      ref: n,
      src: `https://cp.senxc.my.id/f/22b548dfa.mp3`,
      loop: !0
    }), (0, j.jsxs)(`button`, {
      onClick: () => t(e => !e),
      "aria-label": `Toggle Background Music`,
      className: `group flex items-center gap-3 px-4 py-3 rounded-full shadow-lg sticker border transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 bg-cream text-ink border-ink/10`,
      children: [(0, j.jsx)(`div`, {
        className: `relative flex items-center justify-center`,
        children: (0, j.jsx)(g, {
          className: `w-5 h-5 ${e?`animate-[spin_3s_linear_infinite]`:``}`
        })
      }), (0, j.jsx)(`span`, {
        className: `font-display font-semibold text-xs uppercase tracking-widest hidden sm:inline-block`,
        children: e ? `BGM On` : `BGM Off`
      }), (0, j.jsx)(`div`, {
        className: `bg-white/20 rounded-full p-1`,
        children: (0, j.jsx)(w, {
          className: `w-3 h-3 fill-current ml-0.5`
        })
      })]
    })]
  })
}

function ue({
  scrollTo: e
}) {
  return (0, j.jsxs)(`section`, {
    id: `home`,
    className: `relative max-w-[1440px] mx-auto px-5 xl:px-10 pt-14 pb-24 overflow-hidden`,
    children: [(0, j.jsx)(Z, {
      icon: O,
      className: `top-2 left-2 text-soft-pink floaty-slow w-[34px] h-[34px]`,
      style: z(`-8deg`)
    }), (0, j.jsx)(Z, {
      icon: k,
      className: `top-20 right-[12%] text-baby-blue fill-baby-blue floaty w-7 h-7`,
      style: z(`10deg`)
    }), (0, j.jsx)(Z, {
      icon: m,
      className: `bottom-10 left-[8%] text-lavender fill-lavender floaty-fast w-12 h-12`,
      style: z(`0deg`)
    }), (0, j.jsx)(Z, {
      icon: k,
      className: `bottom-24 right-[6%] text-pastel-yellow fill-pastel-yellow floaty-slow w-[22px] h-[22px]`,
      style: z(`-15deg`)
    }), (0, j.jsxs)(`div`, {
      className: `grid md:grid-cols-2 gap-12 items-center pt-6`,
      children: [(0, j.jsxs)(V, {
        className: `relative flex justify-center md:justify-start`,
        from: `left`,
        children: [(0, j.jsx)(`div`, {
          className: `tape w-24 -rotate-12 -top-3 left-10 z-10`
        }), (0, j.jsxs)(`div`, {
          className: `polaroid w-[280px] sm:w-[340px] rotate-[-3deg]`,
          children: [(0, j.jsx)(`img`, {
            src: `/hero-photo.jpg`,
            alt: `DEV RAN`,
            loading: `eager`,
            fetchPriority: `high`,
            className: `w-full h-[360px] sm:h-[420px] object-cover rounded-sm`
          }), (0, j.jsx)(`div`, {
            className: `absolute bottom-5 left-0 right-0 text-center fig-label`,
            children: `DEV RAN — INDEPENDENT DEVELOPER`
          })]
        }), (0, j.jsxs)(`div`, {
          className: `absolute -bottom-6 -right-4 bg-pastel-yellow border border-ink/10 sticker px-4 py-2 rounded-xl rotate-6 font-display font-bold text-sm flex items-center gap-2 floaty-fast`,
          children: [(0, j.jsx)(k, {
            className: `w-3.5 h-3.5 spin-slow`,
            strokeWidth: 2.5
          }), `LEVEL UP`]
        })]
      }), (0, j.jsxs)(V, {
        from: `right`,
        delay: 120,
        children: [(0, j.jsx)(`p`, {
          className: `fig-label mb-3`,
          children: `FIG.01 — INTRODUCTION`
        }), (0, j.jsx)(`h1`, {
          className: `font-display font-bold leading-[0.95] text-5xl sm:text-6xl lg:text-5xl uppercase`,
          children: `DEV RAN`
        }), (0, j.jsx)(`div`, {
          className: `inline-block mt-3 px-5 py-2 rounded-2xl border transition-colors duration-500`,
          style: {
            background: `var(--c-ink)`,
            borderColor: `var(--c-ink)`
          },
          children: (0, j.jsx)(`h1`, {
            className: `font-hero font-bold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl uppercase transition-colors duration-500`,
            style: {
              color: `var(--c-soft-pink)`
            },
            children: `DEV RAN`
          })
        }), (0, j.jsx)(`div`, {
          className: `mt-6 inline-flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase bg-cream border border-ink/10 sticker rounded-full px-4 py-2`,
          children: [`DREAM`, `BUILD`, `BREAK`, `REPEAT`].map((e, t, n) => (0,
            j.jsxs)(`span`, {
            className: `flex items-center gap-2 transition-transform hover:-translate-y-0.5 hover:text-soft-pink`,
            children: [e, t < n.length - 1 && (0, j.jsx)(`span`, {
              className: `text-soft-pink`,
              children: `/`
            })]
          }, e))
        }), (0, j.jsxs)(`p`, {
          className: `mt-6 text-ink-soft text-base sm:text-lg leading-relaxed max-w-md`,
          children: [(0, j.jsx)(`strong`, {
              className: `text-ink`,
              children: `Independent Developer`
            }),
            ` — ngoprek WhatsApp bot (Baileys), web app, dan plugin-plugin absurd tengah malam. Hidup dari kopi.`
          ]
        }), (0, j.jsxs)(`div`, {
          className: `mt-8 flex flex-wrap items-center gap-4`,
          children: [(0, j.jsxs)(`button`, {
            onClick: () => e(`about`),
            className: `group inline-flex items-center gap-2 bg-ink text-cream rounded-full px-6 py-3 font-display font-semibold text-sm uppercase tracking-wide hover-pop shine sticker pulse-ring`,
            children: [`About Me`, (0, j.jsxs)(`svg`, {
              xmlns: `http://www.w3.org/2000/svg`,
              width: `16`,
              height: `16`,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              className: `transition-transform duration-300 group-hover:translate-y-1`,
              children: [(0, j.jsx)(`path`, {
                d: `M12 5v14`
              }), (0, j.jsx)(`path`, {
                d: `m19 12-7 7-7-7`
              })]
            })]
          }), (0, j.jsx)(`button`, {
            onClick: () => e(`contact`),
            className: `inline-flex items-center gap-2 bg-cream text-ink border border-ink/10 rounded-full px-6 py-3 font-display font-semibold text-sm uppercase tracking-wide hover-pop shine sticker`,
            children: `Get in Touch`
          })]
        })]
      })]
    })]
  })
}

function de() {
  return (0, j.jsxs)(`section`, {
    id: `about`,
    className: `relative max-w-[1440px] mx-auto px-5 xl:px-10 py-20`,
    children: [(0, j.jsx)(`div`, {
      className: `tape w-28 rotate-3 -top-3 left-[10%]`
    }), (0, j.jsxs)(`div`, {
      className: `relative`,
      children: [(0, j.jsx)(`p`, {
        className: `fig-label mb-3`,
        children: `FIG.02 — ABOUT ME`
      }), (0, j.jsxs)(`div`, {
        className: `grid md:grid-cols-[1fr_1.4fr] gap-6`,
        children: [(0, j.jsxs)(V, {
          from: `left`,
          className: `bg-pastel-yellow border border-ink/10 rounded-blob sticker p-6 flex flex-col justify-between rotate-[-1deg] hover-pop`,
          children: [(0, j.jsx)(D, {
            className: `w-7 h-7 floaty`,
            style: z(`0deg`)
          }), (0, j.jsxs)(`div`, {
            children: [(0, j.jsx)(`p`, {
              className: `font-display font-bold text-2xl uppercase leading-tight mt-6`,
              children: `DEV RAN`
            }), (0, j.jsx)(`p`, {
              className: `font-mono text-xs uppercase tracking-[0.2em] text-ink-soft mt-2`,
              children: `Independent Developer`
            })]
          }), (0, j.jsx)(`p`, {
            className: `font-mono text-xs uppercase tracking-[0.2em] text-ink-soft mt-6`,
            children: `Dream, Build, Break, Repeat`
          })]
        }), (0, j.jsxs)(V, {
          from: `right`,
          delay: 120,
          className: `bg-cream border border-ink/10 rounded-blob sticker p-8 halftone relative rotate-[1deg] hover-pop shine`,
          children: [(0, j.jsx)(`div`, {
            className: `absolute -top-4 -left-4 bg-soft-pink rounded-full p-2 text-ink`,
            children: (0, j.jsx)(T, {
              className: `w-5 h-5 bounce-soft`
            })
          }), (0, j.jsx)(`h2`, {
            className: `font-display font-bold text-3xl sm:text-4xl uppercase mb-4`,
            children: `About Me`
          }), (0, j.jsx)(`p`, {
            className: `text-ink-soft text-base sm:text-lg leading-relaxed`,
            children: `Halo! Saya DEV RAN, developer independen yang fokus di WhatsApp bot (Baileys), React, dan sistem digital custom. Suka bikin hal yang aneh tapi berfungsi, dan terus belajar tiap hari. Mari terhubung dan ngobrol soal project.`
          })]
        })]
      })]
    })]
  })
}

function fe() {
  return (0, j.jsxs)(`section`, {
    id: `hobby`,
    className: `relative max-w-[1440px] mx-auto px-5 xl:px-10 py-20`,
    children: [(0, j.jsx)(`div`, {
      className: `tape w-28 -rotate-6 -top-3 right-[10%]`
    }), (0, j.jsxs)(`div`, {
      children: [(0, j.jsx)(X, {
        fig: `FIG.03 — HOBBY`,
        children: `Things I Do Everyday`
      }), (0, j.jsx)(`div`, {
        className: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4`,
        children: H.map(({
          label: e,
          icon: t,
          bg: n
        }, r) => (0, j.jsx)(V, {
          delay: r * 40,
          children: (0, j.jsxs)(`div`, {
            className: `${n} border border-ink/10 rounded-2xl sticker p-5 flex flex-col items-center gap-3 text-center hover-pop shine h-full`,
            children: [(0, j.jsx)(`div`, {
              className: `bg-cream border border-ink/10 rounded-full p-3 wiggle-hover`,
              children: (0, j.jsx)(t, {
                className: `w-6 h-6 sm:w-[26px] sm:h-[26px]`,
                strokeWidth: 2
              })
            }), (0, j.jsx)(`p`, {
              className: `font-display font-semibold text-sm uppercase tracking-wide`,
              children: e
            })]
          })
        }, e))
      })]
    })]
  })
}

function pe() {
  return (0, j.jsxs)(`section`, {
    id: `favorite`,
    className: `max-w-[1440px] mx-auto px-5 xl:px-10 py-20 flex flex-col gap-16`,
    children: [(0, j.jsxs)(`div`, {
      className: `relative`,
      children: [(0, j.jsx)(`div`, {
        className: `tape w-24 rotate-6 -top-3 left-[6%]`
      }), (0, j.jsxs)(X, {
        fig: `FIG.04 — MUSIC`,
        children: [(0, j.jsx)(ne, {
          className: `w-7 h-7 text-soft-pink`,
          strokeWidth: 2.5
        }), `Favorite Artists`]
      }), (0, j.jsx)(`div`, {
        className: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4`,
        children: U.map(({
          name: e,
          img: t
        }, n) => (0, j.jsx)(V, {
          delay: n * 35,
          children: (0, j.jsxs)(`div`, {
            className: `bg-cream border border-ink/10 rounded-2xl sticker overflow-hidden hover-pop group h-full`,
            children: [(0, j.jsx)(`div`, {
              className: `aspect-square w-full bg-lavender overflow-hidden relative`,
              children: (0, j.jsx)(`img`, {
                src: t,
                alt: e,
                loading: `lazy`,
                className: `w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1`
              })
            }), (0, j.jsxs)(`div`, {
              className: `p-3 flex items-center gap-2`,
              children: [(0, j.jsx)(g, {
                className: `w-4 h-4 text-ink-soft shrink-0 group-hover:spin-slow`,
                strokeWidth: 2
              }), (0, j.jsx)(`p`, {
                className: `font-display font-semibold text-sm truncate`,
                children: e
              })]
            })]
          })
        }, e))
      })]
    }), (0, j.jsxs)(`div`, {
      className: `relative`,
      children: [(0, j.jsx)(`div`, {
        className: `tape w-28 -rotate-3 -top-3 right-[8%]`
      }), (0, j.jsxs)(X, {
        fig: `FIG.05 — ANIME`,
        children: [(0, j.jsx)(re, {
          className: `w-7 h-7 text-soft-pink`,
          strokeWidth: 2.5
        }), `Favorite Anime`]
      }), (0, j.jsx)(`div`, {
        className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`,
        children: W.map(({
          title: e,
          img: t
        }, n) => (0, j.jsx)(V, {
          delay: n * 35,
          from: n % 2 == 0 ? `left` : `right`,
          children: (0, j.jsxs)(`div`, {
            className: `bg-cream border border-ink/10 rounded-2xl sticker p-4 flex items-center gap-4 hover-pop shine group h-full`,
            children: [(0, j.jsx)(`div`, {
              className: `w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-lavender`,
              children: (0, j.jsx)(`img`, {
                src: t,
                alt: e,
                loading: `lazy`,
                className: `w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`
              })
            }), (0, j.jsxs)(`div`, {
              className: `min-w-0`,
              children: [(0, j.jsx)(`p`, {
                className: `font-mono text-xs text-ink-soft mb-1`,
                children: String(n + 1).padStart(2, `0`)
              }), (0, j.jsx)(`p`, {
                className: `font-display font-bold text-sm sm:text-base uppercase truncate`,
                children: e
              })]
            })]
          })
        }, e))
      })]
    })]
  })
}

function me({
  name: e,
  level: t,
  delay: n
}) {
  let {
    ref: r,
    inView: i
  } = B();
  return (0, j.jsxs)(`div`, {
    ref: r,
    children: [(0, j.jsxs)(`div`, {
      className: `flex items-center justify-between mb-2`,
      children: [(0, j.jsx)(`span`, {
        className: `font-display font-semibold uppercase tracking-wide`,
        children: e
      }), (0, j.jsxs)(`span`, {
        className: `font-mono text-xs text-ink-soft`,
        children: [t, `%`]
      })]
    }), (0, j.jsx)(`div`, {
      className: `h-2 bg-lavender rounded-full overflow-hidden border border-ink/10`,
      children: (0, j.jsx)(`div`, {
        className: `h-full bg-ink rounded-full bar-fill`,
        style: {
          width: i ? `${t}%` : `0%`,
          transitionDelay: `${n}ms`
        }
      })
    })]
  })
}

function he() {
  return (0, j.jsxs)(`section`, {
    id: `skills`,
    className: `relative max-w-[1440px] mx-auto px-5 xl:px-10 py-20`,
    children: [(0, j.jsx)(`div`, {
      className: `tape w-24 -rotate-6 -top-3 left-[14%]`
    }), (0, j.jsxs)(`div`, {
      className: `grid lg:grid-cols-[1.2fr_1fr] gap-10`,
      children: [(0, j.jsxs)(`div`, {
        children: [(0, j.jsxs)(X, {
          fig: `FIG.06 — SKILLS`,
          children: [(0, j.jsx)(h, {
            className: `w-7 h-7 text-soft-pink`,
            strokeWidth: 2.5
          }), `Tech Stack`]
        }), (0, j.jsx)(`div`, {
          className: `space-y-5 mt-8`,
          children: G.map(({
            name: e,
            level: t
          }, n) => (0, j.jsx)(me, {
            name: e,
            level: t,
            delay: n * 50
          }, e))
        })]
      }), (0, j.jsxs)(`div`, {
        children: [(0, j.jsx)(`p`, {
          className: `fig-label mb-3`,
          children: `STATUS`
        }), (0, j.jsxs)(`div`, {
          className: `bg-cream border border-ink/10 rounded-blob sticker p-6 halftone`,
          children: [(0, j.jsx)(`h3`, {
            className: `font-display font-bold text-2xl uppercase mb-6`,
            children: `Status`
          }), (0, j.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-4`,
            children: [K.map(({
              label: e,
              value: t
            }, n) => (0, j.jsx)(V, {
              delay: n * 40,
              children: (0, j.jsxs)(`div`, {
                className: `bg-cream border border-ink/10 rounded-xl p-4 sticker hover-pop h-full`,
                children: [(0, j.jsx)(`p`, {
                  className: `font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft mb-1`,
                  children: e
                }), (0, j.jsx)(`p`, {
                  className: `font-display font-bold text-sm uppercase`,
                  children: t
                })]
              })
            }, e)), (0, j.jsxs)(`div`, {
              className: `col-span-2 bg-cream border border-ink/10 rounded-xl p-4 sticker`,
              children: [(0, j.jsx)(`p`, {
                className: `font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft mb-2`,
                children: `Currently Exploring`
              }), (0, j.jsx)(`div`, {
                className: `flex flex-wrap gap-2`,
                children: q.map(e => (0, j.jsx)(`span`, {
                  className: `bg-baby-blue border border-ink/10 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full transition-transform hover:-translate-y-0.5 hover:rotate-2`,
                  children: e
                }, e))
              })]
            })]
          })]
        })]
      })]
    })]
  })
}

function ge() {
  return (0, j.jsxs)(`section`, {
    id: `projects`,
    className: `relative max-w-[1440px] mx-auto px-5 xl:px-10 py-20`,
    children: [(0, j.jsx)(`div`, {
      className: `tape w-28 rotate-3 -top-3 left-[14%]`
    }), (0, j.jsxs)(X, {
      fig: `FIG.07 — PROJECTS`,
      children: [(0, j.jsx)(v, {
        className: `w-7 h-7 text-soft-pink`,
        strokeWidth: 2.5
      }), `Project`]
    }), (0, j.jsx)(`div`, {
      className: `grid sm:grid-cols-2 gap-6 mt-8`,
      children: J.map(({
        title: e,
        href: t,
        img: n,
        desc: r,
        tags: i
      }, a) => (0, j.jsx)(V, {
        delay: a * 40,
        from: a % 2 == 0 ? `left` : `right`,
        children: (0, j.jsxs)(`a`, {
          href: t,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: () => I(),
          className: `block bg-cream border border-ink/10 rounded-blob sticker overflow-hidden hover-pop shine group h-full`,
          children: [(0, j.jsx)(`div`, {
            className: `aspect-[16/10] w-full overflow-hidden border-b border-ink/10`,
            children: (0, j.jsx)(`img`, {
              src: n,
              alt: e,
              loading: `lazy`,
              className: `w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`
            })
          }), (0, j.jsxs)(`div`, {
            className: `p-6`,
            children: [(0, j.jsxs)(`div`, {
              className: `flex items-start justify-between gap-3`,
              children: [(0, j.jsx)(`h3`, {
                className: `font-display font-bold text-xl uppercase`,
                children: e
              }), (0, j.jsx)(f, {
                className: `shrink-0 mt-1 w-[22px] h-[22px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`,
                strokeWidth: 2.5
              })]
            }), (0, j.jsx)(`p`, {
              className: `text-ink-soft text-sm mt-2 leading-relaxed line-clamp-3`,
              children: r
            }), (0, j.jsx)(`div`, {
              className: `flex flex-wrap gap-2 mt-4`,
              children: i.map(({
                name: e,
                bg: t
              }) => (0, j.jsx)(`span`, {
                className: `${t} border border-ink/10 font-mono text-[11px] uppercase tracking-widest px-3 py-1 rounded-full`,
                children: e
              }, e))
            })]
          })]
        })
      }, e))
    })]
  })
}

function _e() {
  return (0, j.jsxs)(`section`, {
    id: `contact`,
    className: `relative max-w-[1440px] mx-auto px-5 xl:px-10 py-20 pb-28`,
    children: [(0, j.jsx)(`div`, {
      className: `tape w-24 rotate-6 -top-3 left-[6%]`
    }), (0, j.jsxs)(X, {
      fig: `FIG.08 — CONTACT`,
      children: [(0, j.jsx)(S, {
        className: `w-7 h-7 text-soft-pink`,
        strokeWidth: 2.5
      }), `Let's Connect`]
    }), (0, j.jsx)(`p`, {
      className: `text-ink-soft text-base sm:text-lg max-w-xl mb-10`,
      children: `Hubungi saya melalui platform di bawah ini.`
    }), (0, j.jsx)(`div`, {
      className: `grid sm:grid-cols-2 lg:grid-cols-4 gap-4`,
      children: Y.map(({
        platform: e,
        handle: t,
        href: n,
        icon: r
      }, i) => (0, j.jsx)(V, {
        delay: i * 40,
        children: (0, j.jsxs)(`a`, {
          href: n,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: () => I(),
          className: `bg-cream border border-ink/10 rounded-2xl sticker p-5 flex items-center gap-4 hover-pop shine group h-full`,
          children: [(0, j.jsx)(`div`, {
            className: `bg-lavender border border-ink/10 rounded-full p-3 wiggle-hover`,
            children: (0, j.jsx)(r, {
              className: `w-5 h-5`
            })
          }), (0, j.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [(0, j.jsx)(`p`, {
              className: `font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft`,
              children: e
            }), (0, j.jsx)(`p`, {
              className: `font-display font-semibold text-sm uppercase truncate`,
              children: t
            })]
          }), (0, j.jsx)(f, {
            className: `shrink-0 w-4 h-4 opacity-40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100`,
            strokeWidth: 2.5
          })]
        })
      }, e))
    })]
  })
}

function ve() {
  return (0, j.jsx)(`footer`, {
    className: `bg-ink text-cream py-10 border-t-2 border-ink`,
    children: (0, j.jsxs)(`div`, {
      className: `max-w-[1440px] mx-auto px-5 xl:px-10 text-center`,
      children: [(0, j.jsx)(`p`, {
        className: `font-mono text-xs uppercase tracking-[0.2em] text-cream/70 mb-2`,
        children: `Dream, Build, Break, Repeat`
      }), (0, j.jsxs)(`p`, {
        className: `font-display font-semibold text-sm`,
        children: [`© `, new Date().getFullYear(),
          ` DEV RAN — Star Studio Code`
        ]
      })]
    })
  })
}

function ye({
  color: e,
  phase: t
}) {
  return t ? (0, j.jsx)(`div`, {
    className: t === `drop` ? `theme-reveal-dot` : t === `expand` ? `theme-reveal-dot expand` :
      `theme-reveal-dot expand theme-reveal-fade`,
    style: {
      background: e
    }
  }) : null
}
var $ = `senzy-xyz-theme`;

function be() {
  if (typeof window > `u`) return `gradient`;
  let e = window.localStorage.getItem($);
  return e && M.includes(e) ? e : `gradient`
}

function xe() {
  let [e, t] = (0, l.useState)(be), [n, r] = (0, l.useState)(null), [i, a] = (0, l.useState)(null),
  o = se();
  (0, l.useEffect)(() => {
    document.documentElement.setAttribute(`data-theme`, e)
  }, []);
  let s = n => {
      n === e || i || (R(), r(n), a(`drop`), window.setTimeout(() => {
        a(`expand`), window.setTimeout(() => {
          document.documentElement.setAttribute(`data-theme`, n), t(n), window
            .localStorage.setItem($, n), a(`fade`), window.setTimeout(() => {
              a(null), r(null)
            }, 500)
        }, 1100)
      }, 750))
    },
    c = e => {
      L();
      let t = document.getElementById(e);
      t && t.scrollIntoView({
        behavior: `smooth`
      })
    },
    u = [{
      id: `home`,
      label: `Home`,
      icon: x
    }, {
      id: `about`,
      label: `About`,
      icon: ie
    }, {
      id: `hobby`,
      label: `Hobby`,
      icon: y
    }, {
      id: `favorite`,
      label: `Favorite`,
      icon: k
    }, {
      id: `skills`,
      label: `Skills`,
      icon: h
    }, {
      id: `projects`,
      label: `Projects`,
      icon: v
    }, {
      id: `contact`,
      label: `Contact`,
      icon: S
    }];
  return (0, j.jsxs)(`div`, {
    className: `relative min-h-screen`,
    children: [(0, j.jsx)(ye, {
      color: n ? Q[n].swatch : ``,
      phase: i
    }), (0, j.jsx)(`div`, {
      className: `grain`
    }), (0, j.jsx)(`div`, {
      className: `pointer-events-none fixed top-0 left-0 w-80 h-80 rounded-full z-0 hidden md:block`,
      style: {
        background: `radial-gradient(circle, var(--c-glow-2, transparent), var(--c-glow-3, transparent) 50%, transparent 75%)`,
        filter: `blur(20px)`,
        mixBlendMode: `multiply`
      }
    }), (0, j.jsx)(`div`, {
      className: `fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3`,
      children: (0, j.jsx)(ce, {
        theme: e,
        onSelect: s
      })
    }), (0, j.jsx)(le, {}), (0, j.jsx)(ae, {}), (0, j.jsx)(`header`, {
      className: `sticky top-0 z-30 bg-cream/80 backdrop-blur-md border-b border-ink/10`,
      children: (0, j.jsxs)(`div`, {
        className: `max-w-[1440px] mx-auto px-5 xl:px-10 py-4 flex items-center justify-between`,
        children: [(0, j.jsx)(`a`, {
          href: `#home`,
          onClick: e => {
            e.preventDefault(), c(`home`)
          },
          className: `font-display font-bold text-lg uppercase tracking-wide`,
          children: `STAR STUDIO CODE`
        }), (0, j.jsx)(`nav`, {
          className: `flex items-center gap-2 overflow-x-auto no-scrollbar`,
          children: u.map(({
            id: e,
            label: t,
            icon: n
          }) => (0, j.jsx)(oe, {
            href: `#${e}`,
            active: o === e,
            icon: n,
            label: t,
            onClick: t => {
              t.preventDefault(), c(e)
            }
          }, e))
        })]
      })
    }), (0, j.jsxs)(`main`, {
      className: `relative z-10`,
      children: [(0, j.jsx)(ue, {
        scrollTo: c
      }), (0, j.jsx)(de, {}), (0, j.jsx)(fe, {}), (0, j.jsx)(pe, {}), (0, j.jsx)(
        he, {}), (0, j.jsx)(ge, {}), (0, j.jsx)(_e, {})]
    }), (0, j.jsx)(ve, {})]
  })
}
export {
  xe as component
};