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
    $df.xyr(o)
    o.al = N(o.al, 1)
    if (!g.n && !cjs.iH(o.i) && !cjs.iCt(o.i)) {
        o.i.rC()
    }

    return this._bI(o)
}
f._bS=function(o){var f=this, b= f.B(), w=b.W(),j
    $df.bsDF(o)
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


b.bS = function () {var b = this, w = b.W(), g = G(arguments), o, i, a, sc //pass it a display object (which i guess implies its already loaded)


    o = cjs.iDO(g.f) ? {i: g.f, bm: g.f} : g.O ? g.f : {i: g.f, sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}

    if (S(o.i)) {w.g.bm(o.i, function (bm) {b.bS(_.x(o, {i: bm, bm: bm})) })} //if not loaded, async loads and passes it back as a data object //next time, then, when loaded it can bypass async

    else {
        $df.xyr(o)
        $df.sc(o)
        $df.im(o)

        //they can pass in a formed shapeer
        if (cjs.hasDim(o.bm) && !g.n) {o.bm.rC()}//regCent //can not center things that dont have dimensions! // scale, position and place the bm in the ct (which is on the stage)
        o.bm.sXY(o.sc).XY(o.x, o.y).rt(o.r).al(o.al)

        this._gx(o.bm)
    }
    return this
}



cjs.hasDim=function(bm){
 return   !cjs.iH(bm) && !cjs.iCt(bm)
}


b._Sp=function(sp,o){

    this._gx(sp)

    sp.rC()
        .XY(o.x, o.y)
        .sXY(o.sX, o.sY).rt(o.r)
    return sp
}



b.Sp = function () {var g = G(arguments), o,
    sp


    o = _xyr({
        sp: g.f,
        x: g.s,
        y: g.t,
        sX: g[3],
        sY: g[4],
        r: g[5]
    })

    o.sX = N(o.sX, 1);
    o.sY = N(o.sY, o.sX)

    o.sp = o.sp || Mummy

    sp = $Sp(o.sp)
  return b._Sp(sp,o)

}


b.sp = function () {var b = this, g = G(arguments),

    ch

    if (b.gx && b.gx.children) {
        ch = g.p ? b.gx.children : g.n ? b.gx.children[0] : _.l(b.gx.children)
        if (g.u) {return ch}
        if (g.F_) {_.e(ch, g.f);return this}
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

    function fn(bm){

        bm.rC()
            .XY(N(x, 0), N(y, 0))
            .sXY(N(sX, 1), N(sY, sX || 1))
            .rt(N(rt, 0))
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

bPoly()
bfr()

function bfr(){
    w._D=function(o){
        return this.D(o.x, o.y, o.c, o.w, o.h)
    }
    w.bfR = function () {
        var w = this, g = G(arguments), b, h, o


        o = _.x({x: g.f, y: g.s},
            S(g.t) ? {i: g.t, w: g[3], h: g[4], c: g[5]} :
            {w: g.t, h: g[3], c: g[4]})
        o.i = o.i || 'sun'
        o.c = o.c || 'y' // can be removed

        b = w._D(o)

        h = w.g.h().al(.5)
        if (o.c) {h.c(o.c)}
        h.bf(o.i)
        h.rec(o.w, o.h)



        b.bS(h)
        return b
    }
    BFR = function () {
        W(1000,1000,1000,1000)._(function () {
            //h.bC
            w.i.h(50, 200, '+')
                .bf('chicks')
                .dc({r: 80}, {r: 50, x: 100}, {r: 100, x: 400})
            //h.bf
            w.i.h(800, 100, '+')
                .bf('guy')
                .dc([80], [90, 0, 68])
            //h.bV
            w.D(200, 300).pol({
                v: [[0, 100], [0, -100], [200, -150], [200, 150]], // c: 'y',C: 'w',l: 5,
                bf: 'guy'
            })
            b = w.D(600, 300, 'r', 400, 300)
            h = w.bg.h().al(.5)
            h.bf('sun')
            h.rec({w: 400, h: 300})
            b.bS(h)
            w.bfR(600, 300, 'guy', 100, 100, 'X')
            w.bfR(300, 300, 'sun', 100, 100, 'z')
            w.bfR(300, 300, 'chicks', 100, 100)
            w.D(500, 400).pol({
                v: [[-100, 0], [0, -400], [100, -50], [0, -50]],
                c: 'z', C: 'r', l: 5,
                bf: 'sun'
            })
            //w.i.h(350, 150, '+').pol({v: v1, bf: 'me'})
            w.D(550, 200).pol({
                c: 'o', C: 'z', l: 25,
                bf: 'chicks',
                v: [[-100, 0], [0, -200], [100, -50], [0, -50]]
            })
            //h.bV //w.pol
            w.D(400, 500).pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]]})
            w.bg.Bm('me').sXY(6.2).X(500).al(.2)
        })
    }
}
function bPoly(){
    b2d.m=function(vs){ return _.m(vs, b2d.mult) }
    b2d.tA=function(vs){return _.m(vs, function(v){return v.tA(v)})}



    b._pol=function(o){
        var b=this, fs  = newFixts(b, o)

        dressFs(fs,o)

        bindS(b,o)
        return fsRetVal(fs)


    }
    b.pol = function(){


        var b = this,
            w = b.W(),
            g = G(arguments);
        if (g.u) {  return b  }


        var  fs, arr, o, vs //-> {c:'r', v:[[],[],[]]} //pass in {c:'r', v:[[],[],[]]} //pass in [[],[],[]] //pass in ['r',[],[],[]] // b.fs(function(f){b1.pol(f.rV())})//g[0].ps(function(v){b.pol(v)})// else {_.e(g[0], function(v){b.pol(v)})}

        if(_passedVs(g)) {  return b.pol({v: g.f})  }
        if(_passedColAndVs(g)) {return b.pol({c: g.f, v: g.s})}
        if (b2d.iB(g.f)) {g.f.fs(b);return b}

        if (b2d.iF(g.f)) {g.f = g.f.vs()}




        o= polyShapeArgs(g)

        return b._pol(o)


    }


    function dressFs(fs,o){

        _.e(fs, function (f){
            f.d(o.d).r(o.b).fr(o.f)
            if (o.s) {f.m_isSensor = o.s ? true : false; f.sen(1) }
            f.K(o.k)
            f.C(o.c, o.C, o.l)
            if (o.lf) {  f.bS(w.s.h().lf(o).lt(o.v)) }
            if (o.rf) {  f.bS(w.s.h().rf(o).lt(o.v))  }
        })
    }

    function _passedVs(g){return  b2d.iGP(g.f) && U(g.s)}
    function _passedColAndVs(g){return S(g.f) && b2d.iGP(g.s) && U(g.t)}
    function fsRetVal(fs){
        return fs.length > 1 ? fs : fs[0]
    }
    function newFixts(b,o) {var fs,n
        n = b.n()
        sep(b, o)
        fs = _.f(b.fs(), b.n() - n) //each of only the NEW fixts
        return fs
    }
    function bindS(b,o){
        o.i = o.i || o.bf
        if (o.i) {_bindS(b)}
        function _bindS(b){


            var h = w.g.h();
            h.bV(o);
            b.bS(h)
        }
    }


    f.C = function () {

        var f = this,
            b = f.B(), w = b.W(), g = G(arguments), o, h
        o = g.O ? g.f : {c: g.f, C: g.s, l: g[2]}
        o.c = (o.c == '*') ? $r() : (o.c || 'b')
        o.C = o.C || o.c
        f.rmSp()

        h = f.iC() ?
            // if circle?
            w.s.h().cir(f.pX(), f.pY(), f.rad(), o.c, o.C, o.l) :
            // if poly
            w.s.h().pol(f.vs(), o.c, o.C, o.l)

        f.bS(h)

        b.i = h

        return f
    }



    function polyShapeArgs(g){
        var o= g.A ? (S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : {v: g.f}) :
            g.O ? g.f : !g.S_ ?  {v:g} : _.x({c: g.f}, g.t ? {v: g.r} : {  v: g.s} )
        $df.h(o)
        if (b2d.iGP(o.v)) {o.v = o.v.vs()}
        return o
    }






    function sep(b, o){
        if (O(o.v) && O(o.v[0][0])) {
            _.e(o.v, function (v) {b2d.sep(b, v)})
        }
        else {
            b2d.sep(b, o.v);
            o.v = [o.v]
        }

        //pass in 2 or more objs->

        //pass in one object
        //->  ['r', [],[],[] ]//->  [[],[],[]]
        //pass in color and loose verts//->'r',[],[],[]//->  'r', [[],[],[]]
        //just pass in loose verts//-> [],[],[]
        //same two as above but also nested in wrapper array.. so just ONE pam
        //if (o.X) {b.clear()}
        //the NEW fixts
    }


    f.vs =function(){var f=this, b=f.B(),g=G(arguments),
        vs=  b2d.m(  this.H().m_vertices   )
        if( g.p){
            b2d.rot=function(vs, b){return _.m(vs, function(v){
                return v.rot(b.rot())})}
            vs= b2d.rot(vs,b)
        }
        return b2d.tA(vs)
    } //=f.rV






    function old() {
        f._vs = function (f) {
            var h = this.H();
            if (h) {
                return h.m_vertices
            }
        }

        f.vs = f.rV = function () {
            var f = this, b = f.B(), g = G(arguments),

                vs = b2d.m(f._vs())
            return b2d.tA(
                g.p ? b2d.rot(vs, b) : vs
            )

        }
    }




}

w.cen = w.cent = function () {
    var w = this, g = G(arguments),
        v = V(w.s.W() / 2, w.s.H() / 2)
    if (g.p) {
        w.dot(v)
    }
    return v
}