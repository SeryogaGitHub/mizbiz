"use strict";

google.maps.__gjsload__('marker', function (_) {
  var nU, aaa, oU, baa, caa, pU, daa, rU, sU, tU, eaa, xU, vU, yU, gaa, zU, CU, AU, haa, EU, DU, FU, GU, iaa, HU, QU, IU, kaa, NU, OU, JU, laa, jaa, RU, KU, PU, LU, MU, UU, naa, oaa, paa, qaa, raa, saa, taa, uaa, VU, WU, TU, YU, XU, ZU, aV, $U, waa, xaa, bV, cV, yaa, eV, dV, fV, zaa, gV, hV, Aaa, jV, iV, lV, Caa, Daa, Baa, kV, Faa, Eaa, _mV, Gaa, nV;

  nU = function nU(a) {
    var b = 1;
    return function () {
      --b || a();
    };
  };

  aaa = function aaa(a, b) {
    _.Xy().wb.load(new _.zE(a), function (c) {
      b(c && c.size);
    });
  };

  oU = function oU(a) {
    this.j = a;
    this.i = !1;
  };

  baa = function baa(a, b) {
    if (!b) return null;
    var c = a.get("snappingCallback");
    c && (b = c(b));
    c = b.x;
    b = b.y;
    var d = a.get("referencePosition");
    d && (2 == a.j ? c = d.x : 1 == a.j && (b = d.y));
    return new _.O(c, b);
  };

  Animation = function Animation(a) {
    this.i = a;
    this.j = "";
  };

  caa = function caa(a, b) {
    var c = [];
    c.push("@-webkit-keyframes ", b, " {\n");

    _.B(a.i, function (d) {
      c.push(100 * d.time + "% { ");
      c.push("-webkit-transform: translate3d(" + d.translate[0] + "px,", d.translate[1] + "px,0); ");
      c.push("-webkit-animation-timing-function: ", d.vc, "; ");
      c.push("}\n");
    });

    c.push("}\n");
    return c.join("");
  };

  pU = function pU(a, b) {
    for (var c = 0; c < a.i.length - 1; c++) {
      var d = a.i[c + 1];
      if (b >= a.i[c].time && b < d.time) return c;
    }

    return a.i.length - 1;
  };

  daa = function daa(a) {
    if (a.j) return a.j;
    a.j = "_gm" + Math.round(1E4 * Math.random());
    var b = caa(a, a.j);

    if (!qU) {
      qU = _.Rc("style");
      qU.type = "text/css";
      var c = document;
      c = c.querySelectorAll && c.querySelector ? c.querySelectorAll("HEAD") : c.getElementsByTagName("HEAD");
      c[0].appendChild(qU);
    }

    qU.textContent += b;
    return a.j;
  };

  rU = function rU(a, b, c) {
    this.Db = a;
    this.o = b;
    this.i = c;
    this.j = !1;
  };

  sU = function sU(a, b, c) {
    _.rn(function () {
      a.style.WebkitAnimationDuration = c.duration ? c.duration + "ms" : null;
      a.style.WebkitAnimationIterationCount = c.wd;
      a.style.WebkitAnimationName = b;
    });
  };

  tU = function tU(a, b, c) {
    this.Db = a;
    this.T = b;
    this.i = -1;
    "infinity" != c.wd && (this.i = c.wd || 1);
    this.H = c.duration || 1E3;
    this.j = !1;
    this.o = 0;
  };

  eaa = function eaa() {
    for (var a = [], b = 0; b < uU.length; b++) {
      var c = uU[b];
      vU(c);
      c.j || a.push(c);
    }

    uU = a;
    0 == uU.length && (window.clearInterval(wU), wU = null);
  };

  xU = function xU(a) {
    return a ? a.__gm_at || _.Yk : null;
  };

  vU = function vU(a) {
    if (!a.j) {
      var b = _.pn();

      yU(a, (b - a.o) / a.H);
      b >= a.o + a.H && (a.o = _.pn(), "infinite" != a.i && (a.i--, a.i || a.cancel()));
    }
  };

  yU = function yU(a, b) {
    var c = 1,
        d = a.T;
    var e = d.i[pU(d, b)];
    var f;
    d = a.T;
    (f = d.i[pU(d, b) + 1]) && (c = (b - e.time) / (f.time - e.time));
    b = xU(a.Db);
    d = a.Db;
    f ? (c = (0, faa[e.vc || "linear"])(c), e = e.translate, f = f.translate, c = new _.O(Math.round(c * f[0] - c * e[0] + e[0]), Math.round(c * f[1] - c * e[1] + e[1]))) : c = new _.O(e.translate[0], e.translate[1]);
    c = d.__gm_at = c;
    d = c.x - b.x;
    b = c.y - b.y;
    if (0 != d || 0 != b) c = a.Db, e = new _.O(_.Vy(c.style.left) || 0, _.Vy(c.style.top) || 0), e.x += d, e.y += b, _.Qo(c, e);

    _.L.trigger(a, "tick");
  };

  gaa = function gaa(a, b, c) {
    var d, e;
    if (e = 0 != c.Bj) e = 5 == _.El.i.i || 6 == _.El.i.i || 3 == _.El.i.type && _.gn(_.El.i.version, 7);
    e ? d = new rU(a, b, c) : d = new tU(a, b, c);
    d.start();
    return d;
  };

  zU = function zU() {
    this.icon = {
      url: _.qp("api-3/images/spotlight-poi2", !0),
      scaledSize: new _.P(27, 43),
      origin: new _.O(0, 0),
      anchor: new _.O(14, 43),
      labelOrigin: new _.O(14, 15)
    };
    this.j = {
      url: _.qp("api-3/images/spotlight-poi-dotless2", !0),
      scaledSize: new _.P(27, 43),
      origin: new _.O(0, 0),
      anchor: new _.O(14, 43),
      labelOrigin: new _.O(14, 15)
    };
    this.i = {
      url: _.qp("api-3/images/drag-cross", !0),
      scaledSize: new _.P(13, 11),
      origin: new _.O(0, 0),
      anchor: new _.O(7, 6)
    };
    this.shape = {
      coords: [13.5, 0, 4, 3.75, 0, 13.5, 13.5, 43, 27, 13.5, 23, 3.75],
      type: "poly"
    };
  };

  CU = function CU(a, b) {
    var c = this;
    this.j = a;
    this.i = b;
    this.Na = new _.yi(function () {
      var d = c.get("modelIcon"),
          e = c.get("modelLabel");
      AU(c, "viewIcon", d || e && BU.j || BU.icon);
      AU(c, "viewCross", BU.i);
      e = c.get("useDefaults");
      var f = c.get("modelShape");
      f || d && !e || (f = BU.shape);
      c.get("viewShape") != f && c.set("viewShape", f);
    }, 0);
    BU || (BU = new zU());
  };

  AU = function AU(a, b, c) {
    haa(a, c, function (d) {
      a.set(b, d);
      "viewIcon" === b && d && d.size && a.i && a.i(d.size, d.anchor, d.labelOrigin);
      d = a.get("modelLabel");
      a.set("viewLabel", d ? {
        text: d.text || d,
        color: _.me(d.color, "#000000"),
        fontWeight: _.me(d.fontWeight, ""),
        fontSize: _.me(d.fontSize, "14px"),
        fontFamily: _.me(d.fontFamily, "Roboto,Arial,sans-serif")
      } : null);
    });
  };

  haa = function haa(a, b, c) {
    b ? b instanceof _.ch ? c(b) : null != b.path ? c(a.j(b)) : (_.qe(b) || (b.size = b.size || b.scaledSize), b.size ? c(b) : (b.url || (b = {
      url: b
    }), aaa(b.url, function (d) {
      b.size = d || new _.P(24, 24);
      c(b);
    }))) : c(null);
  };

  EU = function EU() {
    this.i = DU(this);
    this.set("shouldRender", this.i);
    this.j = !1;
  };

  DU = function DU(a) {
    var b = a.get("mapPixelBoundsQ"),
        c = a.get("icon"),
        d = a.get("position");
    if (!b || !c || !d) return 0 != a.get("visible");
    var e = c.anchor || _.Yk,
        f = c.size.width + Math.abs(e.x);
    c = c.size.height + Math.abs(e.y);
    return d.x > b.Ma - f && d.y > b.Ja - c && d.x < b.Qa + f && d.y < b.Pa + c ? 0 != a.get("visible") : !1;
  };

  FU = function FU(a) {
    this.j = a;
    this.i = !1;
  };

  GU = function GU(a, b, c, d, e) {
    this.$ = c;
    this.o = a;
    this.H = b;
    this.ma = d;
    this.Ba = 0;
    this.j = null;
    this.i = new _.yi(this.Rl, 0, this);
    this.W = e;
    this.T = this.ua = null;
  };

  iaa = function iaa(a, b) {
    a.ha = b;

    _.zi(a.i);
  };

  HU = function HU(a) {
    a.j && (_.vo(a.j), a.j = null);
  };

  QU = function QU(a, b, c) {
    var d = this;
    this.Na = new _.yi(function () {
      var e = d.get("panes"),
          f = d.get("scale");
      if (!e || !d.getPosition() || 0 == d.Yl() || _.oe(f) && .1 > f && !d.get("dragging")) IU(d);else {
        var g = e.markerLayer;

        if (f = d.zg()) {
          var h = null != f.url;
          d.i && d.Jc == h && (_.vo(d.i), d.i = null);
          d.Jc = !h;
          d.i = JU(d, g, d.i, f);
          g = KU(d);
          h = LU(f);
          d.mc.width = g * h.width;
          d.mc.height = g * h.height;
          d.set("size", d.mc);
          var k = d.get("anchorPoint");
          if (!k || k.i) f = MU(f), d.La.x = g * (f ? h.width / 2 - f.x : 0), d.La.y = -g * (f ? f.y : h.height), d.La.i = !0, d.set("anchorPoint", d.La);
        }

        if (!d.va) {
          var l = d.zg();

          if (l && (f = 0 != d.get("clickable"), g = d.getDraggable(), f || g)) {
            k = l.url || _.Eu;
            h = {};

            if (_.Go()) {
              var m = LU(l);
              l = MU(l);
              var q = m.width;
              m = m.height;
              var t = new _.P(q + 16, m + 16);
              l = {
                url: k,
                size: t,
                anchor: l ? new _.O(l.x + 8, l.y + 8) : new _.O(Math.round(q / 2) + 8, m + 8),
                scaledSize: t
              };
            } else if (_.zj.j || _.zj.o) if (h.shape = d.get("shape"), h.shape || null != l.Sf) q = l.scaledSize || l.size, l = {
              url: k,
              size: q,
              anchor: l.anchor,
              scaledSize: q
            };

            k = null != l.url;
            d.Lc == k && NU(d);
            d.Lc = !k;
            h = d.W = JU(d, d.getPanes().overlayMouseTarget, d.W, l, h);

            _.Fz(h, 0);

            k = h;
            if ((l = k.getAttribute("usemap") || k.firstChild && k.firstChild.getAttribute("usemap")) && l.length && (k = _.Lo(k).getElementById(l.substr(1)))) var u = k.firstChild;
            h = u || h;
            h.title = d.get("title") || "";
            g && !d.T && (u = d.T = new _.JF(h, d.lc, d.W), d.lc ? (u.bindTo("deltaClientPosition", d), u.bindTo("position", d)) : u.bindTo("position", d.Ua, "rawPosition"), u.bindTo("containerPixelBounds", d, "mapPixelBounds"), u.bindTo("anchorPoint", d), u.bindTo("size", d), u.bindTo("panningEnabled", d), u && !d.Ra && (d.Ra = [_.L.forward(u, "dragstart", d), _.L.forward(u, "drag", d), _.L.forward(u, "dragend", d), _.L.forward(u, "panbynow", d)]));
            u = d.get("cursor") || "pointer";
            g ? d.T.set("draggableCursor", u) : _.Ez(h, f ? u : "");
            jaa(d, h);
          }
        }

        e = e.overlayLayer;
        if (f = u = d.get("cross")) f = d.get("crossOnDrag"), void 0 === f && (f = d.get("raiseOnDrag")), f = 0 != f && d.getDraggable() && d.get("dragging");
        f ? d.o = JU(d, e, d.o, u) : (d.o && _.vo(d.o), d.o = null);
        d.ha = [d.i, d.o, d.W];
        kaa(d);

        for (e = 0; e < d.ha.length; ++e) {
          if (f = d.ha[e]) u = f, g = f.i, h = xU(f) || _.Yk, f = KU(d), g = OU(d, g, f, h), _.Qo(u, g), (g = _.El.j) && (u.style[g] = 1 != f ? "scale(" + f + ") " : ""), f = d.get("zIndex"), d.get("dragging") && (f = 1E6), _.oe(f) || (f = Math.min(d.getPosition().y, 999999)), _.So(u, f), d.H && d.H.setZIndex(f);
        }

        PU(d);

        for (e = 0; e < d.ha.length; ++e) {
          (u = d.ha[e]) && _.Bz(u);
        }
      }
    }, 0);
    this.sd = a;
    this.rd = c;
    this.lc = b || !1;
    this.Ua = new oU(0);
    this.Ua.bindTo("position", this);
    this.H = this.i = null;
    this.Mc = [];
    this.Jc = !1;
    this.W = null;
    this.Lc = !1;
    this.o = null;
    this.ha = [];
    this.Jb = new _.O(0, 0);
    this.mc = new _.P(0, 0);
    this.La = new _.O(0, 0);
    this.nb = !0;
    this.va = 0;
    this.j = this.Kc = this.Wc = this.Nc = null;
    this.Cb = !1;
    this.Ic = [_.L.addListener(this, "dragstart", this.$l), _.L.addListener(this, "dragend", this.Zl), _.L.addListener(this, "panbynow", function () {
      return d.Na.Ob();
    })];
    this.Db = this.ua = this.ma = this.T = this.$ = this.Ra = null;
  };

  IU = function IU(a) {
    a.H && (RU(a.Mc), a.H.release(), a.H = null);
    a.i && _.vo(a.i);
    a.i = null;
    a.o && _.vo(a.o);
    a.o = null;
    NU(a);
    a.ha = [];
  };

  kaa = function kaa(a) {
    var b = a.Vk();

    if (b) {
      if (!a.H) {
        var c = a.H = new GU(a.getPanes(), b, a.get("opacity"), a.get("visible"), a.rd);
        a.Mc = [_.L.addListener(a, "label_changed", function () {
          c.setLabel(this.get("label"));
        }), _.L.addListener(a, "opacity_changed", function () {
          c.setOpacity(this.get("opacity"));
        }), _.L.addListener(a, "panes_changed", function () {
          var f = this.get("panes");
          c.o = f;
          HU(c);

          _.zi(c.i);
        }), _.L.addListener(a, "visible_changed", function () {
          c.setVisible(this.get("visible"));
        })];
      }

      b = a.zg();
      a.getPosition();

      if (b) {
        var d = a.i,
            e = KU(a);
        d = OU(a, b, e, xU(d) || _.Yk);
        e = LU(b);
        b = b.labelOrigin || new _.O(e.width / 2, e.height / 2);
        iaa(a.H, new _.O(d.x + b.x, d.y + b.y));
        a.H.i.Ob();
      }
    }
  };

  NU = function NU(a) {
    a.va ? a.Cb = !0 : (a.W && _.vo(a.W), a.W = null, a.T && (a.T.unbindAll(), a.T.release(), a.T = null, RU(a.Ra), a.Ra = null), a.ma && a.ma.remove(), a.ua && a.ua.remove());
  };

  OU = function OU(a, b, c, d) {
    var e = a.getPosition(),
        f = LU(b),
        g = (b = MU(b)) ? b.x : f.width / 2;
    a.Jb.x = e.x + d.x - Math.round(g - (g - f.width / 2) * (1 - c));
    b = b ? b.y : f.height;
    a.Jb.y = e.y + d.y - Math.round(b - (b - f.height / 2) * (1 - c));
    return a.Jb;
  };

  JU = function JU(a, b, c, d, e) {
    if (d instanceof _.ch) a = laa(a, b, c, d);else if (null != d.url) {
      var f = e;
      e = d.origin || _.Yk;
      var g = a.get("opacity");
      a = _.me(g, 1);
      c ? (c.firstChild.__src__ != d.url && (b = c.firstChild, _.RE(b, d.url, b.o)), _.VE(c, d.size, e, d.scaledSize), c.firstChild.style.opacity = a) : (f = f || {}, f.j = 1 != _.zj.type, f.alpha = !0, f.opacity = g, c = _.UE(d.url, null, e, d.size, null, d.scaledSize, f), _.Az(c), b.appendChild(c));
      a = c;
    } else b = c || _.Ro("div", b), maa(b, d), c = b, a = a.get("opacity"), _.Fz(c, _.me(a, 1)), a = b;
    c = a;
    c.i = d;
    return c;
  };

  laa = function laa(a, b, c, d) {
    c = c || _.Ro("div", b);

    _.Mi(c);

    c.appendChild(b === a.getPanes().overlayMouseTarget ? d.element.cloneNode(!0) : d.element);
    b = d.Ya();
    c.style.width = b.width + (b.j || "px");
    c.style.height = b.height + (b.i || "px");
    c.style.pointerEvents = "none";
    c.style.userSelect = "none";

    _.L.addListenerOnce(d, "changed", function () {
      a.Bc();
    });

    return c;
  };

  jaa = function jaa(a, b) {
    a.ma && a.ua && a.Db == b || (a.Db = b, a.ma && a.ma.remove(), a.ua && a.ua.remove(), a.ma = _.gq(b, {
      Ib: function Ib(c) {
        a.va++;

        _.wp(c);

        _.L.trigger(a, "mousedown", c.Ta);
      },
      Nb: function Nb(c) {
        a.va--;
        !a.va && a.Cb && _.Yy(this, function () {
          a.Cb = !1;
          NU(a);
          a.Na.Ob();
        }, 0);

        _.yp(c);

        _.L.trigger(a, "mouseup", c.Ta);
      },
      onClick: function onClick(c) {
        var d = c.event;
        c = c.Od;

        _.zp(d);

        3 == d.button ? c || _.L.trigger(a, "rightclick", d.Ta) : c ? _.L.trigger(a, "dblclick", d.Ta) : _.L.trigger(a, "click", d.Ta);
      }
    }), a.ua = new _.Pt(b, b, {
      We: function We(c) {
        _.L.trigger(a, "mouseout", c);
      },
      Xe: function Xe(c) {
        _.L.trigger(a, "mouseover", c);
      }
    }));
  };

  RU = function RU(a) {
    if (a) for (var b = 0, c = a.length; b < c; b++) {
      _.L.removeListener(a[b]);
    }
  };

  KU = function KU(a) {
    return _.El.j ? Math.min(1, a.get("scale") || 1) : 1;
  };

  PU = function PU(a) {
    if (!a.nb) {
      a.j && (a.$ && _.L.removeListener(a.$), a.j.cancel(), a.j = null);
      var b = a.get("animation");

      if (b = SU[b]) {
        var c = b.options;
        a.i && (a.nb = !0, a.set("animating", !0), b = gaa(a.i, b.icon, c), a.j = b, a.$ = _.L.addListenerOnce(b, "done", function () {
          a.set("animating", !1);
          a.j = null;
          a.set("animation", null);
        }));
      }
    }
  };

  LU = function LU(a) {
    return a instanceof _.ch ? a.Ya() : a.size;
  };

  MU = function MU(a) {
    return a instanceof _.ch ? a.getAnchor() : a.anchor;
  };

  UU = function UU(a, b, c, d, e) {
    var f = this;
    this.Lb = b;
    this.i = a;
    this.va = e;
    this.ha = b instanceof _.Fg;
    a = TU(this);
    b = this.ha && a ? _.Rn(a, b.getProjection()) : null;
    this.j = new QU(d, !!this.ha, void 0);
    this.ma = !0;
    this.ua = this.Ba = null;
    (this.o = this.ha ? new _.nz(e.j, this.j, b, e, function () {
      if (f.j.get("dragging") && !f.i.get("place")) {
        var g = f.o.getPosition();
        g && (g = _.Sn(g, f.Lb.get("projection")), f.ma = !1, f.i.set("position", g), f.ma = !0);
      }
    }) : null) && e.yc(this.o);
    this.H = new CU(c, void 0);
    this.Sa = this.ha ? null : new _.mF();
    this.W = this.ha ? null : new EU();
    this.$ = new _.M();
    this.$.bindTo("position", this.i);
    this.$.bindTo("place", this.i);
    this.$.bindTo("draggable", this.i);
    this.$.bindTo("dragging", this.i);
    this.H.bindTo("modelIcon", this.i, "icon");
    this.H.bindTo("modelLabel", this.i, "label");
    this.H.bindTo("modelCross", this.i, "cross");
    this.H.bindTo("modelShape", this.i, "shape");
    this.H.bindTo("useDefaults", this.i, "useDefaults");
    this.j.bindTo("icon", this.H, "viewIcon");
    this.j.bindTo("label", this.H, "viewLabel");
    this.j.bindTo("cross", this.H, "viewCross");
    this.j.bindTo("shape", this.H, "viewShape");
    this.j.bindTo("title", this.i);
    this.j.bindTo("cursor", this.i);
    this.j.bindTo("dragging", this.i);
    this.j.bindTo("clickable", this.i);
    this.j.bindTo("zIndex", this.i);
    this.j.bindTo("opacity", this.i);
    this.j.bindTo("anchorPoint", this.i);
    this.j.bindTo("animation", this.i);
    this.j.bindTo("crossOnDrag", this.i);
    this.j.bindTo("raiseOnDrag", this.i);
    this.j.bindTo("animating", this.i);
    this.W || this.j.bindTo("visible", this.i);
    naa(this);
    oaa(this);
    this.T = [];
    paa(this);
    this.ha ? (qaa(this), raa(this), saa(this)) : (taa(this), this.Sa && (this.W.bindTo("visible", this.i), this.W.bindTo("cursor", this.i), this.W.bindTo("icon", this.i), this.W.bindTo("icon", this.H, "viewIcon"), this.W.bindTo("mapPixelBoundsQ", this.Lb.__gm, "pixelBoundsQ"), this.W.bindTo("position", this.Sa, "pixelPosition"), this.j.bindTo("visible", this.W, "shouldRender")), uaa(this));
  };

  naa = function naa(a) {
    var b = a.Lb.__gm;
    a.j.bindTo("mapPixelBounds", b, "pixelBounds");
    a.j.bindTo("panningEnabled", a.Lb, "draggable");
    a.j.bindTo("panes", b);
  };

  oaa = function oaa(a) {
    var b = a.Lb.__gm;

    _.L.addListener(a.$, "dragging_changed", function () {
      b.set("markerDragging", a.i.get("dragging"));
    });

    b.set("markerDragging", b.get("markerDragging") || a.i.get("dragging"));
  };

  paa = function paa(a) {
    a.T.push(_.L.forward(a.j, "panbynow", a.Lb.__gm));

    _.B(vaa, function (b) {
      a.T.push(_.L.addListener(a.j, b, function (c) {
        var d = a.ha ? TU(a) : a.i.get("internalPosition");
        c = new _.xn(d, c, a.j.get("position"));

        _.L.trigger(a.i, b, c);
      }));
    });
  };

  qaa = function qaa(a) {
    function b() {
      a.i.get("place") ? a.j.set("draggable", !1) : a.j.set("draggable", !!a.i.get("draggable"));
    }

    a.T.push(_.L.addListener(a.$, "draggable_changed", b));
    a.T.push(_.L.addListener(a.$, "place_changed", b));
    b();
  };

  raa = function raa(a) {
    a.T.push(_.L.addListener(a.Lb, "projection_changed", function () {
      return VU(a);
    }));
    a.T.push(_.L.addListener(a.$, "position_changed", function () {
      return VU(a);
    }));
    a.T.push(_.L.addListener(a.$, "place_changed", function () {
      return VU(a);
    }));
  };

  saa = function saa(a) {
    a.T.push(_.L.addListener(a.j, "dragging_changed", function () {
      if (a.j.get("dragging")) a.Ba = _.oz(a.o), a.Ba && _.pz(a.o, a.Ba);else {
        a.Ba = null;
        a.ua = null;
        var b = a.o.getPosition();

        if (b && (b = _.Sn(b, a.Lb.get("projection")), b = WU(a, b))) {
          var c = _.Rn(b, a.Lb.get("projection"));

          a.i.get("place") || (a.ma = !1, a.i.set("position", b), a.ma = !0);
          a.o.setPosition(c);
        }
      }
    }));
    a.T.push(_.L.addListener(a.j, "deltaclientposition_changed", function () {
      var b = a.j.get("deltaClientPosition");

      if (b && (a.Ba || a.ua)) {
        var c = a.ua || a.Ba;
        a.ua = {
          clientX: c.clientX + b.clientX,
          clientY: c.clientY + b.clientY
        };
        b = a.va.Tc(a.ua);
        b = _.Sn(b, a.Lb.get("projection"));
        c = a.ua;
        var d = WU(a, b);
        d && (a.i.get("place") || (a.ma = !1, a.i.set("position", d), a.ma = !0), d.equals(b) || (b = _.Rn(d, a.Lb.get("projection")), c = _.oz(a.o, b)));
        c && _.pz(a.o, c);
      }
    }));
  };

  taa = function taa(a) {
    if (a.Sa) {
      a.j.bindTo("scale", a.Sa);
      a.j.bindTo("position", a.Sa, "pixelPosition");
      var b = a.Lb.__gm;
      a.Sa.bindTo("latLngPosition", a.i, "internalPosition");
      a.Sa.bindTo("focus", a.Lb, "position");
      a.Sa.bindTo("zoom", b);
      a.Sa.bindTo("offset", b);
      a.Sa.bindTo("center", b, "projectionCenterQ");
      a.Sa.bindTo("projection", a.Lb);
    }
  };

  uaa = function uaa(a) {
    if (a.Sa) {
      var b = new FU(a.Lb instanceof _.Bg);
      b.bindTo("internalPosition", a.Sa, "latLngPosition");
      b.bindTo("place", a.i);
      b.bindTo("position", a.i);
      b.bindTo("draggable", a.i);
      a.j.bindTo("draggable", b, "actuallyDraggable");
    }
  };

  VU = function VU(a) {
    if (a.ma) {
      var b = TU(a);
      b && a.o.setPosition(_.Rn(b, a.Lb.get("projection")));
    }
  };

  WU = function WU(a, b) {
    var c = a.Lb.__gm.get("snappingCallback");

    return c && (a = c({
      latLng: b,
      overlay: a.i
    })) ? a : b;
  };

  TU = function TU(a) {
    var b = a.i.get("place");
    a = a.i.get("position");
    return b && b.location || a;
  };

  YU = function YU(a, b, c) {
    if (b instanceof _.Fg) {
      var d = b.__gm;
      Promise.all([d.i, d.T]).then(function (e) {
        e = _.Aa(e);
        var f = e.next().value.rb;
        e.next();
        XU(a, b, c, f);
      });
    } else XU(a, b, c, null);
  };

  XU = function XU(a, b, c, d) {
    function e(f) {
      var g = b instanceof _.Fg,
          h = g ? f.__gm.Dd.map : f.__gm.Dd.streetView,
          k = h && h.Lb == b,
          l = k != a.contains(f);
      h && l && (g ? (f.__gm.Dd.map.dispose(), f.__gm.Dd.map = null) : (f.__gm.Dd.streetView.dispose(), f.__gm.Dd.streetView = null));
      !a.contains(f) || !g && f.get("mapOnly") || k || (b instanceof _.Fg ? f.__gm.Dd.map = new UU(f, b, c, _.SF(b.__gm, f), d) : f.__gm.Dd.streetView = new UU(f, b, c, _.xb, null));
    }

    _.L.addListener(a, "insert", e);

    _.L.addListener(a, "remove", e);

    a.forEach(e);
  };

  ZU = function ZU(a, b, c, d) {
    this.T = a;
    this.W = b;
    this.H = c;
    this.j = d;
  };

  aV = function aV(a) {
    if (!a.i) {
      var b = a.T,
          c = b.ownerDocument.createElement("canvas");

      _.To(c);

      c.style.position = "absolute";
      c.style.top = c.style.left = "0";
      var d = c.getContext("2d"),
          e = $U(d),
          f = a.j.size;
      c.width = Math.ceil(f.wa * e);
      c.height = Math.ceil(f.Aa * e);
      c.style.width = _.Q(f.wa);
      c.style.height = _.Q(f.Aa);
      b.appendChild(c);
      a.i = c.context = d;
    }

    return a.i;
  };

  $U = function $U(a) {
    return _.uo() / (a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1);
  };

  waa = function waa(a, b, c) {
    a = a.H;
    a.width = b;
    a.height = c;
    return a;
  };

  xaa = function xaa(a) {
    var b = bV(a),
        c = aV(a),
        d = $U(c);
    a = a.j.size;
    c.clearRect(0, 0, Math.ceil(a.wa * d), Math.ceil(a.Aa * d));
    b.forEach(function (e) {
      c.globalAlpha = _.me(e.opacity, 1);
      c.drawImage(e.image, e.$, e.ha, e.W, e.T, Math.round(e.i * d), Math.round(e.j * d), e.H * d, e.o * d);
    });
  };

  bV = function bV(a) {
    var b = [];
    a.W.forEach(function (c) {
      b.push(c);
    });
    b.sort(function (c, d) {
      return c.zIndex - d.zIndex;
    });
    return b;
  };

  cV = function cV() {
    this.i = _.Xy().wb;
  };

  yaa = function yaa(a, b, c, d) {
    var e = this;
    this.T = b;
    this.i = c;
    this.Ga = {};
    this.j = {};
    this.H = 0;
    this.o = !0;
    this.W = d;
    var f = {
      animating: 1,
      animation: 1,
      attribution: 1,
      clickable: 1,
      cursor: 1,
      draggable: 1,
      flat: 1,
      icon: 1,
      label: 1,
      opacity: 1,
      optimized: 1,
      place: 1,
      position: 1,
      shape: 1,
      __gmHiddenByCollision: 1,
      title: 1,
      visible: 1,
      zIndex: 1
    };

    this.$ = function (h) {
      h in f && (delete this.changed, e.j[_.Bf(this)] = this, dV(e));
    };

    a.i = function (h) {
      eV(e, h);
    };

    a.onRemove = function (h) {
      delete h.changed;
      delete e.j[_.Bf(h)];
      e.T.remove(h);
      e.i.remove(h);

      _.Zo("Om", "-p", h);

      _.Zo("Om", "-v", h);

      _.Zo("Smp", "-p", h);

      _.L.removeListener(e.Ga[_.Bf(h)]);

      delete e.Ga[_.Bf(h)];
    };

    a = a.j;

    for (var g in a) {
      eV(this, a[g]);
    }
  };

  eV = function eV(a, b) {
    a.j[_.Bf(b)] = b;
    dV(a);
  };

  dV = function dV(a) {
    a.H || (a.H = _.rn(function () {
      a.H = 0;
      var b = a.j;
      a.j = {};
      var c = a.o,
          d;

      for (d in b) {
        fV(a, b[d]);
      }

      c && !a.o && a.i.forEach(function (e) {
        fV(a, e);
      });
    }));
  };

  fV = function fV(a, b) {
    var c = zaa(b);
    b.changed = a.$;
    if (!b.get("animating")) if (a.T.remove(b), !c || 0 == b.get("visible") || b.__gm && b.__gm.dl) a.i.remove(b);else {
      a.o && !a.W && 256 <= a.i.Ya() && (a.o = !1);
      var d = b.get("optimized"),
          e = b.get("draggable"),
          f = !!b.get("animation"),
          g = b.get("icon");
      g = !!g && null != g.path;
      var h = null != b.get("label");
      a.W || 0 == d || e || f || g || h || !d && a.o ? _.og(a.i, b) : (a.i.remove(b), _.og(a.T, b));
      !b.get("pegmanMarker") && (d = b.get("map"), _.Dj(d, "Om"), _.Yo("Om", "-p", b), d.getBounds() && d.getBounds().contains(c) && _.Yo("Om", "-v", b), a.Ga[_.Bf(b)] = a.Ga[_.Bf(b)] || _.L.addListener(b, "click", function (k) {
        _.Yo("Om", "-i", k);
      }), a = b.get("place")) && (a.placeId ? _.Dj(d, "Smpi") : _.Dj(d, "Smpq"), _.Yo("Smp", "-p", b), b.get("attribution") && _.Dj(d, "Sma"));
    }
  };

  zaa = function zaa(a) {
    var b = a.get("place");
    b = b ? b.location : a.get("position");
    a.set("internalPosition", b);
    return b;
  };

  gV = function gV(a, b, c, d) {
    this.H = c;
    this.T = new _.PF(a, d, c);
    this.i = b;
  };

  hV = function hV(a, b, c, d) {
    var e = b.ab,
        f = a.H.get();
    if (!f) return null;
    f = f.Wa.size;
    c = _.QF(a.T, e, new _.O(c, d));
    if (!c) return null;
    a = new _.O(c.$d.Ea * f.wa, c.$d.Fa * f.Aa);
    var g = [];
    c.yb.tb.forEach(function (h) {
      g.push(h);
    });
    g.sort(function (h, k) {
      return k.zIndex - h.zIndex;
    });
    c = null;

    for (e = 0; d = g[e]; ++e) {
      if (f = d.Te, 0 != f.clickable && (f = f.o, Aaa(a.x, a.y, d))) {
        c = f;
        break;
      }
    }

    c && (b.i = d);
    return c;
  };

  Aaa = function Aaa(a, b, c) {
    if (c.i > a || c.j > b || c.i + c.H < a || c.j + c.o < b) a = !1;else a: {
      var d = c.Te.shape;
      a -= c.i;
      b -= c.j;
      c = d.coords;

      switch (d.type.toLowerCase()) {
        case "rect":
          a = c[0] <= a && a <= c[2] && c[1] <= b && b <= c[3];
          break a;

        case "circle":
          d = c[2];
          a -= c[0];
          b -= c[1];
          a = a * a + b * b <= d * d;
          break a;

        default:
          d = c.length, c[0] == c[d - 2] && c[1] == c[d - 1] || c.push(c[0], c[1]), a = 0 != _.XF(a, b, c);
      }
    }
    return a;
  };

  jV = function jV(a, b, c) {
    this.j = b;
    var d = this;

    a.i = function (e) {
      iV(d, e, !0);
    };

    a.onRemove = function (e) {
      iV(d, e, !1);
    };

    this.o = null;
    this.i = !1;
    this.T = 0;
    this.W = c;
    a.Ya() ? (this.i = !0, this.H()) : _.Tf(_.jm(_.L.trigger, c, "load"));
  };

  iV = function iV(a, b, c) {
    4 > a.T++ ? c ? a.j.o(b) : a.j.$(b) : a.i = !0;
    a.o || (a.o = _.rn((0, _.y)(a.H, a)));
  };

  lV = function lV(a, b, c, d, e, f, g) {
    var h = this;
    this.T = a;
    this.W = d;
    this.o = c;
    this.j = e;
    this.H = f;
    this.i = g || _.ul;

    b.i = function (k) {
      var l = _.Qn(h.get("projection")),
          m = k.i;

      -64 > m.i || -64 > m.j || 64 < m.i + m.H || 64 < m.j + m.o ? (_.og(h.o, k), m = h.j.search(_.$k)) : (m = k.latLng, m = new _.O(m.lat(), m.lng()), k.ab = m, _.hL(h.H, {
        ab: m,
        Lf: k
      }), m = _.WF(h.j, m));

      for (var q = 0, t = m.length; q < t; ++q) {
        var u = m[q],
            v = u.yb || null;
        if (u = kV(h, v, u.xj || null, k, l)) k.tb[_.Bf(u)] = u, _.og(v.tb, u);
      }
    };

    b.onRemove = function (k) {
      Baa(h, k);
    };
  };

  Caa = function Caa(a, b) {
    a.T[_.Bf(b)] = b;

    var c = {
      Ea: b.Xa.x,
      Fa: b.Xa.y,
      Ka: b.zoom
    },
        d = _.Qn(a.get("projection")),
        e = _.dn(a.i, c);

    e = new _.O(e.Ca, e.Da);

    var f = _.my(a.i, c, 64 / a.i.size.wa);

    c = f.min;
    f = f.max;
    c = _.wg(c.Ca, c.Da, f.Ca, f.Da);

    _.jL(c, d, e, function (g, h) {
      g.xj = h;
      g.yb = b;
      b.Vc[_.Bf(g)] = g;

      _.UF(a.j, g);

      h = _.le(a.H.search(g), function (t) {
        return t.Lf;
      });
      a.o.forEach((0, _.y)(h.push, h));

      for (var k = 0, l = h.length; k < l; ++k) {
        var m = h[k],
            q = kV(a, b, g.xj, m, d);
        q && (m.tb[_.Bf(q)] = q, _.og(b.tb, q));
      }
    });

    b.Oa && b.tb && a.W(b.Oa, b.tb);
  };

  Daa = function Daa(a, b) {
    b && (delete a.T[_.Bf(b)], b.tb.forEach(function (c) {
      b.tb.remove(c);
      delete c.Te.tb[_.Bf(c)];
    }), _.ge(b.Vc, function (c, d) {
      a.j.remove(d);
    }));
  };

  Baa = function Baa(a, b) {
    a.o.contains(b) ? a.o.remove(b) : a.H.remove({
      ab: b.ab,
      Lf: b
    });

    _.ge(b.tb, function (c, d) {
      delete b.tb[c];
      d.yb.tb.remove(d);
    });
  };

  kV = function kV(a, b, c, d, e) {
    if (!e || !c || !d.latLng) return null;
    var f = e.fromLatLngToPoint(c);
    c = e.fromLatLngToPoint(d.latLng);
    e = a.i.size;
    a = _.ny(a.i, new _.cg(c.x, c.y), new _.cg(f.x, f.y), b.zoom);
    c.x = a.Ea * e.wa;
    c.y = a.Fa * e.Aa;
    a = d.zIndex;
    _.oe(a) || (a = c.y);
    a = Math.round(1E3 * a) + _.Bf(d) % 1E3;
    f = d.i;
    b = {
      image: f.image,
      $: f.T,
      ha: f.W,
      W: f.ha,
      T: f.$,
      i: f.i + c.x,
      j: f.j + c.y,
      H: f.H,
      o: f.o,
      zIndex: a,
      opacity: d.opacity,
      yb: b,
      Te: d
    };
    return b.i > e.wa || b.j > e.Aa || 0 > b.i + b.H || 0 > b.j + b.o ? null : b;
  };

  Faa = function Faa(a, b, c) {
    var d = new cV(),
        e = new zU(),
        f = _mV,
        g = this;

    a.i = function (h) {
      Eaa(g, h);
    };

    a.onRemove = function (h) {
      g.j.remove(h.__gm.Cf);
      delete h.__gm.Cf;
    };

    this.j = b;
    this.i = e;
    this.T = f;
    this.o = d;
    this.H = c;
  };

  Eaa = function Eaa(a, b) {
    var c = b.get("internalPosition"),
        d = b.get("zIndex"),
        e = b.get("opacity"),
        f = b.__gm.Cf = {
      o: b,
      latLng: c,
      zIndex: d,
      opacity: e,
      tb: {}
    };
    c = b.get("useDefaults");
    d = b.get("icon");
    var g = b.get("shape");
    g || d && !c || (g = a.i.shape);
    var h = d ? a.T(d) : a.i.icon,
        k = nU(function () {
      if (f == b.__gm.Cf && (f.i || f.j)) {
        var l = g;

        if (f.i) {
          var m = h.size;
          var q = b.get("anchorPoint");
          if (!q || q.i) q = new _.O(f.i.i + m.width / 2, f.i.j), q.i = !0, b.set("anchorPoint", q);
        } else m = f.j.size;

        l ? l.coords = l.coords || l.coord : l = {
          type: "rect",
          coords: [0, 0, m.width, m.height]
        };
        f.shape = l;
        f.clickable = b.get("clickable");
        f.title = b.get("title") || null;
        f.cursor = b.get("cursor") || "pointer";

        _.og(a.j, f);
      }
    });
    h.url ? a.o.load(h, function (l) {
      f.i = l;
      k();
    }) : (f.j = a.H(h), k());
  };

  _mV = function mV(a) {
    if (_.qe(a)) {
      var b = _mV.i;
      return b[a] = b[a] || {
        url: a
      };
    }

    return a;
  };

  Gaa = function Gaa(a, b, c) {
    var d = new _.ng(),
        e = new _.ng();
    new Faa(a, d, c);

    var f = _.Lo(b.getDiv()).createElement("canvas"),
        g = {};

    a = _.wg(-100, -300, 100, 300);
    var h = new _.TF(a, void 0);
    a = _.wg(-90, -180, 90, 180);

    var k = _.iL(a, function (u, v) {
      return u.Lf == v.Lf;
    }),
        l = null,
        m = null,
        q = new _.zg(null, void 0),
        t = b.__gm;

    t.i.then(function (u) {
      t.o.register(new gV(g, t, q, u.rb.j));
      u.Xd.kb(function (v) {
        if (v && l != v.Wa) {
          m && m.unbindAll();
          var x = l = v.Wa;
          m = new lV(g, d, e, function (w, E) {
            return new jV(E, new ZU(w, E, f, x), w);
          }, h, k, l);
          m.bindTo("projection", b);
          q.set(m.Pb());
        }
      });
    });

    _.RF(b, q, "markerLayer", -1);
  };

  nV = _.n();
  _.O.prototype.Kf = _.Zl(16, function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  });

  _.A(oU, _.M);

  oU.prototype.position_changed = function () {
    this.i || (this.i = !0, this.set("rawPosition", this.get("position")), this.i = !1);
  };

  oU.prototype.rawPosition_changed = function () {
    this.i || (this.i = !0, this.set("position", baa(this, this.get("rawPosition"))), this.i = !1);
  };

  var faa = {
    linear: _.na(),
    "ease-out": function easeOut(a) {
      return 1 - Math.pow(a - 1, 2);
    },
    "ease-in": function easeIn(a) {
      return Math.pow(a, 2);
    }
  },
      qU;

  rU.prototype.start = function () {
    this.i.wd = this.i.wd || 1;
    this.i.duration = this.i.duration || 1;

    _.L.addDomListenerOnce(this.Db, "webkitAnimationEnd", (0, _.y)(function () {
      this.j = !0;

      _.L.trigger(this, "done");
    }, this));

    sU(this.Db, daa(this.o), this.i);
  };

  rU.prototype.cancel = function () {
    sU(this.Db, null, {});

    _.L.trigger(this, "done");
  };

  rU.prototype.stop = function () {
    this.j || _.L.addDomListenerOnce(this.Db, "webkitAnimationIteration", (0, _.y)(this.cancel, this));
  };

  var wU = null,
      uU = [];

  tU.prototype.start = function () {
    uU.push(this);
    wU || (wU = window.setInterval(eaa, 10));
    this.o = _.pn();
    vU(this);
  };

  tU.prototype.cancel = function () {
    this.j || (this.j = !0, yU(this, 1), _.L.trigger(this, "done"));
  };

  tU.prototype.stop = function () {
    this.j || (this.i = 1);
  };

  var SU = {};
  SU[1] = {
    options: {
      duration: 700,
      wd: "infinite"
    },
    icon: new Animation([{
      time: 0,
      translate: [0, 0],
      vc: "ease-out"
    }, {
      time: .5,
      translate: [0, -20],
      vc: "ease-in"
    }, {
      time: 1,
      translate: [0, 0],
      vc: "ease-out"
    }])
  };
  SU[2] = {
    options: {
      duration: 500,
      wd: 1
    },
    icon: new Animation([{
      time: 0,
      translate: [0, -500],
      vc: "ease-in"
    }, {
      time: .5,
      translate: [0, 0],
      vc: "ease-out"
    }, {
      time: .75,
      translate: [0, -20],
      vc: "ease-in"
    }, {
      time: 1,
      translate: [0, 0],
      vc: "ease-out"
    }])
  };
  SU[3] = {
    options: {
      duration: 200,
      Kf: 20,
      wd: 1,
      Bj: !1
    },
    icon: new Animation([{
      time: 0,
      translate: [0, 0],
      vc: "ease-in"
    }, {
      time: 1,
      translate: [0, -20],
      vc: "ease-out"
    }])
  };
  SU[4] = {
    options: {
      duration: 500,
      Kf: 20,
      wd: 1,
      Bj: !1
    },
    icon: new Animation([{
      time: 0,
      translate: [0, -20],
      vc: "ease-in"
    }, {
      time: .5,
      translate: [0, 0],
      vc: "ease-out"
    }, {
      time: .75,
      translate: [0, -10],
      vc: "ease-in"
    }, {
      time: 1,
      translate: [0, 0],
      vc: "ease-out"
    }])
  };
  var BU;

  _.A(CU, _.M);

  CU.prototype.changed = function (a) {
    "modelIcon" != a && "modelShape" != a && "modelCross" != a && "modelLabel" != a || _.zi(this.Na);
  };

  _.A(EU, _.M);

  EU.prototype.changed = function () {
    if (!this.j) {
      var a = DU(this);
      this.i != a && (this.i = a, this.j = !0, this.set("shouldRender", this.i), this.j = !1);
    }
  };

  _.A(FU, _.M);

  FU.prototype.internalPosition_changed = function () {
    if (!this.i) {
      this.i = !0;
      var a = this.get("position"),
          b = this.get("internalPosition");
      a && b && !a.equals(b) && this.set("position", this.get("internalPosition"));
      this.i = !1;
    }
  };

  FU.prototype.place_changed = FU.prototype.position_changed = FU.prototype.draggable_changed = function () {
    if (!this.i) {
      this.i = !0;

      if (this.j) {
        var a = this.get("place");
        a ? this.set("internalPosition", a.location) : this.set("internalPosition", this.get("position"));
      }

      this.get("place") ? this.set("actuallyDraggable", !1) : this.set("actuallyDraggable", this.get("draggable"));
      this.i = !1;
    }
  };

  _.r = GU.prototype;

  _.r.setOpacity = function (a) {
    this.$ = a;

    _.zi(this.i);
  };

  _.r.setLabel = function (a) {
    this.H = a;

    _.zi(this.i);
  };

  _.r.setVisible = function (a) {
    this.ma = a;

    _.zi(this.i);
  };

  _.r.setZIndex = function (a) {
    this.Ba = a;

    _.zi(this.i);
  };

  _.r.release = function () {
    this.o = null;
    HU(this);
  };

  _.r.Rl = function () {
    if (this.o && this.H && 0 != this.ma) {
      var a = this.o.markerLayer,
          b = this.H;
      this.j ? a.appendChild(this.j) : this.j = _.Ro("div", a);
      a = this.j;
      this.ha && _.Qo(a, this.ha);
      var c = a.firstChild;
      c || (c = _.Ro("div", a), c.style.height = "100px", c.style.marginTop = "-50px", c.style.marginLeft = "-50%", c.style.display = "table", c.style.borderSpacing = "0");
      var d = c.firstChild;
      d || (d = _.Ro("div", c), d.style.display = "table-cell", d.style.verticalAlign = "middle", d.style.whiteSpace = "nowrap", d.style.textAlign = "center");
      c = d.firstChild || _.Ro("div", d);

      _.No(c, b.text);

      c.style.color = b.color;
      c.style.fontSize = b.fontSize;
      c.style.fontWeight = b.fontWeight;
      c.style.fontFamily = b.fontFamily;
      this.W && b !== this.T && (this.T = b, b = c.getBoundingClientRect(), b = new _.P(b.width, b.height), b.equals(this.ua) || (this.ua = b, this.W(b)));

      _.Fz(c, _.me(this.$, 1));

      _.So(a, this.Ba);
    } else HU(this);
  };

  var maa = (0, _.y)(function (a, b, c) {
    _.No(b, "");

    var d = _.uo(),
        e = _.Lo(b).createElement("canvas");

    e.width = c.size.width * d;
    e.height = c.size.height * d;
    e.style.width = _.Q(c.size.width);
    e.style.height = _.Q(c.size.height);

    _.Th(b, c.size);

    b.appendChild(e);

    _.Qo(e, _.Yk);

    _.To(e);

    b = e.getContext("2d");
    b.lineCap = b.lineJoin = "round";
    b.scale(d, d);
    a = a(b);
    b.beginPath();
    a.Qb(c.Sf, c.anchor.x, c.anchor.y, c.rotation || 0, c.scale);
    c.fillOpacity && (b.fillStyle = c.fillColor, b.globalAlpha = c.fillOpacity, b.fill());
    c.strokeWeight && (b.lineWidth = c.strokeWeight, b.strokeStyle = c.strokeColor, b.globalAlpha = c.strokeOpacity, b.stroke());
  }, null, function (a) {
    return new _.fG(a);
  });

  _.A(QU, _.M);

  _.r = QU.prototype;

  _.r.panes_changed = function () {
    IU(this);

    _.zi(this.Na);
  };

  _.r.Be = function (a) {
    this.set("position", a && new _.O(a.wa, a.Aa));
  };

  _.r.ye = function () {
    this.unbindAll();
    this.set("panes", null);
    this.j && this.j.stop();
    this.$ && (_.L.removeListener(this.$), this.$ = null);
    this.j = null;
    RU(this.Ic);
    this.Ic = [];
    IU(this);
    NU(this);
  };

  _.r.rh = function () {
    var a;

    if (!(a = this.Nc != (0 != this.get("clickable")) || this.Wc != this.getDraggable())) {
      a = this.Kc;
      var b = this.get("shape");
      if (null == a || null == b) a = a == b;else {
        var c;
        if (c = a.type == b.type) a: if (a = a.coords, b = b.coords, _.Oa(a) && _.Oa(b) && a.length == b.length) {
          c = a.length;

          for (var d = 0; d < c; d++) {
            if (a[d] !== b[d]) {
              c = !1;
              break a;
            }
          }

          c = !0;
        } else c = !1;
        a = c;
      }
      a = !a;
    }

    a && (this.Nc = 0 != this.get("clickable"), this.Wc = this.getDraggable(), this.Kc = this.get("shape"), NU(this), _.zi(this.Na));
  };

  _.r.shape_changed = QU.prototype.rh;
  _.r.clickable_changed = QU.prototype.rh;
  _.r.draggable_changed = QU.prototype.rh;

  _.r.Bc = function () {
    _.zi(this.Na);
  };

  _.r.cursor_changed = QU.prototype.Bc;
  _.r.scale_changed = QU.prototype.Bc;
  _.r.raiseOnDrag_changed = QU.prototype.Bc;
  _.r.crossOnDrag_changed = QU.prototype.Bc;
  _.r.zIndex_changed = QU.prototype.Bc;
  _.r.opacity_changed = QU.prototype.Bc;
  _.r.title_changed = QU.prototype.Bc;
  _.r.cross_changed = QU.prototype.Bc;
  _.r.icon_changed = QU.prototype.Bc;
  _.r.visible_changed = QU.prototype.Bc;
  _.r.dragging_changed = QU.prototype.Bc;

  _.r.position_changed = function () {
    this.lc ? this.Na.Ob() : _.zi(this.Na);
  };

  _.r.getPosition = _.ig("position");
  _.r.getPanes = _.ig("panes");
  _.r.Yl = _.ig("visible");

  _.r.getDraggable = function () {
    return !!this.get("draggable");
  };

  _.r.$l = function () {
    this.set("dragging", !0);
    this.Ua.set("snappingCallback", this.sd);
  };

  _.r.Zl = function () {
    this.Ua.set("snappingCallback", null);
    this.set("dragging", !1);
  };

  _.r.animation_changed = function () {
    this.nb = !1;
    this.get("animation") ? PU(this) : (this.set("animating", !1), this.j && this.j.stop());
  };

  _.r.zg = _.ig("icon");
  _.r.Vk = _.ig("label");
  var vaa = "click dblclick mouseup mousedown mouseover mouseout rightclick dragstart drag dragend".split(" ");

  UU.prototype.dispose = function () {
    this.j.set("animation", null);
    this.j.ye();
    this.va && this.o ? this.va.he(this.o) : this.j.ye();
    this.W && this.W.unbindAll();
    this.Sa && this.Sa.unbindAll();
    this.H.unbindAll();
    this.$.unbindAll();

    _.B(this.T, _.L.removeListener);

    this.T.length = 0;
  };

  ZU.prototype.o = ZU.prototype.$ = function (a) {
    var b = bV(this),
        c = aV(this),
        d = $U(c),
        e = Math.round(a.i * d),
        f = Math.round(a.j * d),
        g = Math.ceil(a.H * d);
    a = Math.ceil(a.o * d);
    var h = waa(this, g, a),
        k = h.getContext("2d");
    k.translate(-e, -f);
    b.forEach(function (l) {
      k.globalAlpha = _.me(l.opacity, 1);
      k.drawImage(l.image, l.$, l.ha, l.W, l.T, Math.round(l.i * d), Math.round(l.j * d), l.H * d, l.o * d);
    });
    c.clearRect(e, f, g, a);
    c.globalAlpha = 1;
    c.drawImage(h, e, f);
  };

  cV.prototype.load = function (a, b) {
    return this.i.load(new _.zE(a.url), function (c) {
      if (c) {
        var d = c.size,
            e = a.size || a.scaledSize || d;
        a.size = e;
        var f = a.anchor || new _.O(e.width / 2, e.height),
            g = {};
        g.image = c;
        c = a.scaledSize || d;
        var h = c.width / d.width,
            k = c.height / d.height;
        g.T = a.origin ? a.origin.x / h : 0;
        g.W = a.origin ? a.origin.y / k : 0;
        g.i = -f.x;
        g.j = -f.y;
        g.T * h + e.width > c.width ? (g.ha = d.width - g.T * h, g.H = c.width) : (g.ha = e.width / h, g.H = e.width);
        g.W * k + e.height > c.height ? (g.$ = d.height - g.W * k, g.o = c.height) : (g.$ = e.height / k, g.o = e.height);
        b(g);
      } else b(null);
    });
  };

  cV.prototype.cancel = function (a) {
    this.i.cancel(a);
  };

  gV.prototype.j = function (a) {
    return "dragstart" != a && "drag" != a && "dragend" != a;
  };

  gV.prototype.o = function (a, b) {
    return b ? hV(this, a, -8, 0) || hV(this, a, 0, -8) || hV(this, a, 8, 0) || hV(this, a, 0, 8) : hV(this, a, 0, 0);
  };

  gV.prototype.handleEvent = function (a, b, c) {
    var d = b.i;
    if ("mouseout" == a) this.i.set("cursor", ""), this.i.set("title", null);else if ("mouseover" == a) {
      var e = d.Te;
      this.i.set("cursor", e.cursor);
      (e = e.title) && this.i.set("title", e);
    }
    var f;
    d && "mouseout" != a ? f = d.Te.latLng : f = b.latLng;
    "dblclick" == a && _.jf(b.ub);

    _.L.trigger(c, a, new _.xn(f));
  };

  gV.prototype.zIndex = 40;

  jV.prototype.H = function () {
    this.i && xaa(this.j);
    this.i = !1;
    this.o = null;
    this.T = 0;

    _.Tf(_.jm(_.L.trigger, this.W, "load"));
  };

  _.Ea(lV, _.nj);

  lV.prototype.Pb = function () {
    return {
      Wa: this.i,
      Wb: 2,
      Zb: this.$.bind(this)
    };
  };

  lV.prototype.$ = function (a, b) {
    var c = this;
    b = void 0 === b ? {} : b;
    var d = document.createElement("div"),
        e = this.i.size;
    d.style.width = e.wa + "px";
    d.style.height = e.Aa + "px";
    d.style.overflow = "hidden";
    a = {
      Oa: d,
      zoom: a.Ka,
      Xa: new _.O(a.Ea, a.Fa),
      Vc: {},
      tb: new _.ng()
    };
    d.yb = a;
    Caa(this, a);
    var f = !1;
    return {
      Eb: function Eb() {
        return d;
      },
      sc: function sc() {
        return f;
      },
      loaded: new Promise(function (g) {
        _.L.addListenerOnce(d, "load", function () {
          f = !0;
          g();
        });
      }),
      release: function release() {
        var g = d.yb;
        d.yb = null;
        Daa(c, g);

        _.No(d, "");

        b.Mb && b.Mb();
      }
    };
  };

  _mV.i = {};

  nV.prototype.i = function (a, b, c) {
    var d = _.qG();

    if (b instanceof _.Bg) YU(a, b, d);else {
      var e = new _.ng();
      YU(e, b, d);
      var f = new _.ng();
      Gaa(f, b, d);
      new yaa(a, f, e, c);
    }

    _.L.addListener(b, "idle", function () {
      a.forEach(function (g) {
        var h = g.get("internalPosition"),
            k = b.getBounds();
        h && !g.pegmanMarker && k && k.contains(h) ? _.Yo("Om", "-v", g) : _.Zo("Om", "-v", g);
      });
    });
  };

  _.ef("marker", new nV());
});