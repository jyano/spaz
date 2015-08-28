

t=cjs.Text.prototype
t.lW = _.gS('linewidth')
t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
t.lWH = function (w, h) {
    return this.lW(w).lH(N(h, w))
}
t.tA = _.gS('textAlign')

t.bl = function (bl) {
    var g = G(arguments)
    if (g.p) {
        bl = 'bottom'
    }
    if (g.n) {
        bl = 'top'
    }
    if (bl === '') {
        bl = 'middle'
    }
    if (U(bl)) {
        return this.textBaseline
    }
    this.textBaseline = bl
    return this
}
t.T = function (tS) {
    if (U(tS)) {
        return this._tS
    }
    this._tS = tS
    return this
}
t.ol = _.gS(t, 'outline')
t.F = t.fo = function (f) {
    if (U(f)) {
        return this.font
    }
    this.font = N(f) ? f + 'px Arial' : f
    return this
}
t.C = function (cS) {
    if (U(cS)) {
        return this.color
    }
    this.color = oO('c', cS)
    return this
}
t.mW = function () {
    return this.getMeasuredWidth()
}
//text
$T = function (a, b, c, d, e) {
    var g = G(arguments), o, t
    return new cjs.Text(a, b, c, d, e)

    o = g.O ? g.f :

    {t: g.f, f: g.s, c: g.t, x: g[3], y: g[4]}

    o.f = N(o.f) ? o.f + 'px Arial' : o.f
    o.f = o.f || '50px Arial'
    o.c = o.c || 'y'
    o.x = N(o.x, 600)
    o.y = N(o.y, 100)
    t = new cjs.Text(o.t, o.f, o.c)
    t.XY(o.x, o.y).drag()

    if (g.n) {
        t.regX = t.W() / 2
    }
    if (g.p) {
        t.bl('alphabetic')
    }

    return t.bl('middle')

}
$.fn.T = function () {
    var d = this, g = G(arguments)
    d.E()
    g.e(function (str) {
        d.A($.h3(str))
    })
    return d
}
cjs.iT = function (t) {
    if (O(t)) {
        return (t.textBaseline)
    }
}

ct=cjs.Container.prototype
ct.T = function () {
    var ct = this, g = G(arguments), o, t
    o = g.O ? g.f :

        g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
            N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
                _.x({t: g.f, f: g.s, c: g.t},
                    N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
                    {y: g[3]})
    o.f = N(o.f) ? o.f + 'px Arial' : o.f
    o.f = o.f || '50px Arial'
    o.c = oO('c', o.c || 'y')
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.t = String(o.t)
    t = $T(o.t, o.f, o.c).XY(o.x, o.y).a2(this).drag()
    if (g.n) {
        t.regX = t.W() / 2
    }
    t.bl('middle')
    if (g.p) {
        t.bl('alphabetic')
    }
    if (!g.n) {
        t.rX(t.mW() / 2)
    }
    return t
    //o.x = N(o.x, this.St().cen().x)
    /* if(g.p){
     tO = cjs.T(g.f, 'y', '40px Arial')
     if(N(g[3])){ tO.XY(g[3], g[4]) }
     return tO
     }*/
}