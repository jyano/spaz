f._bS=function(){


}

f.bS=function(){var f = this, b = f.B(), w = b.W(),g = G(arguments), o, j  // s = f.S(),
    f.sprites = f.sprites || []


    if(g.S_){return passedString()}

    o = cjs.iDO(g.f) ?
    {j: g.f, rt: g.s, x: g.t, y: g[3], o: g[4]} :
        g.O ? g.f : {}


    o.x = N(o.x, 0); o.y = N(o.y, 0); o.rt = N(o.rt, 0); o.al = N(o.al, 1) //o.o = N(o.o, 1)



    j = o.j
    j.al( o.al )
    w.g.A(j)
    f.sprites.push(j)


    T.t(function(){
        j.XY(
            b.X() + o.x,
            b.Y() + o.y
        )
        j.rt(b.rt() + o.rt)
    })

    return f


    function passedString(){Q( function onRdy() {
        var bm = Q.b(g.f).XY(f.pos().x, f.pos().y).rC(),
            ct = $Ct().A(bm)
        f.bS(ct)})
        return f

    }
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
    this.gx.A(o.i.sXY(o.sc).XY(o.x, o.y).rt(o.r).al(o.al))
    return this
}

b.fSp = function () {return this.f().sprites[0] }


b.Sp = function () {
    var g = G(arguments),
        sp, o
    
    o = _xyr({sp: g.f, x: g.s, y: g.t, sX: g[3], sY: g[4], r: g[5]})
    o.sX = N(o.sX, 1); o.sY = N(o.sY, o.sX)
    o.sp = o.sp || Mummy

    sp = $Sp(o.sp)
    this._gx().gx.A(sp)
    sp.rC()
        .XY(o.x, o.y)
        .sXY(o.sX, o.sY).rt(o.r)
    return sp
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


//death to sprites
f.xSp = f.Xx = f.removeSprites = function () {
    var f = this
    this._sp = this._sp || []
    this.SP = this.SP || []
    this.sprites = this.sprites || []
    _.e(f.sprites, function (s) {
        if (O(s) && s.parent) {
            s.remove()
        }
    })

    this.sprites = []
    this_sp = []
    this.SP = []
    return f
}
f.xx = f.kill = f.remove = function () {
    if (this) {
        this.removeSprites();
        if (this.B()) {
            this.B().xF(this)
        }
    }
}
f.xB = f.xX = f.XX = function () {
    if (this && this.B()) {
        this.B().xx()
    }
}
b.xx = b.kill = b.destroy = function () {
    var b = this, v = b.pos()
    if (b.sprite) {
        b.sprite.rm()
    }
    if (b.sp()) {
        b.sp().rm()
    }
    b.fs(function (f) {
        f.removeSprites()
    })     //if(f.sprite){f.sprite.remove()}
    b.sprite = null
    b.SetActive(false)
    b.W().DestroyBody(b)
    return v
}
