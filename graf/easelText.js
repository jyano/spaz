

t.lW = _.gS('linewidth')
t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
t.lWH = function (w, h) {return this.lW(w).lH(N(h, w))}
t.tA = _.gS('textAlign')
t.bl = function (bl) {var g = G(arguments)
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
t.T = function (tS) {if (U(tS)) {return this._tS}
    this._tS = tS
    return this}
t.ol = _.gS(t, 'outline')
t.F = t.fo = function (f) {
    if (U(f)) {
        return this.font
    }
    this.font = N(f) ? f + 'px Arial' : f
    return this}
t.C = function (cS) {
    if (U(cS)) {return this.color}
    this.color = oO('c', cS)
    return this}
t.mW = function () {return this.getMeasuredWidth()}

