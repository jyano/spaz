f.initSp=function(){
    this._sp = this._sp || []; this.SP = this.SP || []; this.sprites = this.sprites || []
    return this
}
f.spritePush=function(j){
    this.sprites = f.sprites || []
    this.sprites.push(j)
    return this

}
f._bI=function(o){
    this.gx.A(
        o.i.sXY(o.sc).XY(o.x, o.y)
            .rt(o.r).al(o.al)
    )

    return this
}
f.bI = function () {var f = this, b = f.B(), w = b.W(), g = G(arguments), o
    this.gx = this.gx || w.g.ct()


    o = cjs.iDO(g.f) ? {i: g.f} : g.O ? g.f :
    {i: g.f || 'me', sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}
    if (S(o.i)) {
        o.i = Q.b(o.i)
    }
    o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
    if (!A(o.sc)) {
        o.sc = [o.sc, o.sc]
    }
    _xyr(o)
    o.al = N(o.al, 1)
    if (!g.n && !cjs.iH(o.i) && !cjs.iCt(o.i)) {
        o.i.rC()
    }

    return this._bI(o)
}
f._bS=function(o){var f=this, b= f.B(), w=b.W(),j
    bsDF(o)
    j = o.j
    j.al( o.al )
    w.g.A(j)
    f.spritePush(j)
    b._bS(j, o)
    return this
}
f.ctSp=function(sp){var f=this
    sp.XY(f.pos().x, f.pos().y).rC()
    f.bS( $Ct().A(sp) )
    return this
}
f.bSQ=function(j){var f=this
    Q(function(){
        f.ctSp(Q.b(j))})
    return f}
f.bS=function(){
    //higher level.. can handle obs and Q-strings
    var f = this, b = f.B(), w = b.W(),g = G(arguments)
    return g.S_ ?  f.bSQ(g.f): f._bS(
        cjs.iDO(g.f) ? {j: g.f,
                rt: g.s,
                x: g.t,
                y: g[3],
                o: g[4]}:g.f
    )

}
b.fSp = function () {return this.f().sprites[0] }
b._bS=function(j,o){var b=this
    T.t(function(){
        j.XY(b.X() + o.x,
            b.Y() + o.y).rt(b.rt() + o.rt)})
}
b.bS = function () {
    var b = this, w = b.W(), g = G(arguments), o, i, a, sc
    //pass it a display object (which i guess implies its already loaded)
    o = cjs.iDO(g.f) ? {i: g.f, bm: g.f} : g.O ? g.f :
    {i: g.f, sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}

    //if not loaded, async loads and passes it back as a data object
    //next time, then, when loaded it can bypass async
    if (S(o.i)) {
        w.g.bm(o.i, function (bm) {
            b.bS(_.x(o, {i: bm, bm: bm}))
        })
        return this
    }

    _xyr(o)
    _sc(o)
    _im(o)

    //they can pass in a formed shapeer
    if (!g.n && !cjs.iH(o.bm) && !cjs.iCt(o.bm)) {
        o.bm.rC()
    }//regCent
    //can not center things that dont have dimensions!
    // scale, position and place the bm in the ct (which is on the stage)
    o.bm.sXY(o.sc).XY(o.x, o.y).rt(o.r).al(o.al).a2(this._gx().gx)
    return this
}
b._Sp=function(sp,o){
    this._gx().gx.A(sp)
    sp.rC()
        .XY(o.x, o.y)
        .sXY(o.sX, o.sY).rt(o.r)
    return sp

}
b.Sp = function () {
    var g = G(arguments),
        sp, o

    o = _xyr({sp: g.f, x: g.s, y: g.t, sX: g[3], sY: g[4], r: g[5]})
    o.sX = N(o.sX, 1); o.sY = N(o.sY, o.sX)
    o.sp = o.sp || Mummy

    sp = $Sp(o.sp)
  return b._Sp(sp,o)

}
b.sp = function () {
    var b = this, g = G(arguments), ch
    if (b.gx && b.gx.children) {
        ch = g.p ? b.gx.children :
            g.n ? b.gx.children[0] :
                _.l(b.gx.children)
        if (g.u) {
            return ch
        }
        if (g.F_) {
            _.e(ch, g.f);
            return this
        }
    }
}
b.Bm = function (iS, x, y, sX, sY, rt) {
    var b = this, w = b.W(), g = G(arguments);
    b.gx = b.gx || w.g.ct()
    if (S(iS)) {
        this.gx.bm(iS, fn)
    }
    if (O(iS)) {
        fn(iS);
        return iS
    }
    return b
    function fn(bm) {
        bm.rC().XY(N(x, 0), N(y, 0)).sXY(N(sX, 1), N(sY, sX || 1)).rt(N(rt, 0))
    }
}
f.clrSp=function(){
    this.sprites = []
    this_sp = []
    this.SP = []
    return this
}
f.rmSp= function () {
    _.e(this.initSp().sprites, function(s){cjs.rmOb(s)})
    this.clrSp()
    return this
} //= f.xSp=f.Xx=f.rmSp
w._preKill= function(b) {
    if (b.sprite) {b.sprite.rm()}
    b.sprite = null
    if (b.sp()) {b.sp().rm()}
    b.fs(function (f) {f.rmSp()})

}
w._fPreKill=function(f){f.rmSp()}
