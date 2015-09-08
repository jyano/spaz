M.lC=M.lineCenter
//

b2d.p()
i = cjs.DisplayObject.prototype
ct = cjs.Container.prototype
st = s = cjs.Stage.prototype
t=cjs.Text.prototype
h = cjs.Shape.prototype
ct=cjs.Container.prototype
s=cjs.Stage.prototype
h=cjs.Shape.prototype
ct=cjs.Container.prototype
h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
ct = cjs.Container.prototype

ct.bm = ct.b = function() {var ct = this, g = G(arguments), bm,
     o = g.F_ ? {fn: g.s, sc: g.s} :
         g.N_ ? {sc: g.f, fn: g.s} :
             _.x({i: g.f}, N(g.s) ? {sc: g.s, fn: g.t} :
             {fn: g.s, sc: g.t})
    o.sc = o.sc || 1
    $df.im(o)
    if(O(o.i)) {return ct.A($Bm(o.i))}//alert('ct.bm O(o.i)'); never alerted
    $.i(o.i, function (i) {
        bm = $Bm(i[0]).a2(ct).sXY(o.sc)
        if (!g.n) {
            bm.rC()
        }
        if (g.p) {
            bm.drag()
        }
        if (o.fn) {
            o.fn(bm)
        }
    })
    return ct
}
// u might say xTHIS but not thisX? i dont know what i am talking about
/* TICKER
 paused : Indicates whether the ticker is currently paused.
 d       delta :  time since the last tick
 t       time : how much  since T  started
 r      runTime  : how much time has T been running for
 */
/*
 // returns   The average time spent in a tick in milliseconds.
 //This can vary significantly from the value provided by getMeasuredFPS because it only measures the time spent
 // within the tick execution stack.
 Example 1: With a target FPS of 20, getMeasuredFPS()
 returns 20fps, which indicates an average of 50ms between the end of one tick and the end of the next.
 However, getMeasuredTickTime() returns 15ms.
 This indicates i there may be up to 35ms of "idle" time between the end of one tick and the start of the next.

 Example 2: With a target FPS of 30, getFPS() returns 10fps,
 which indicates an average of 100ms between the end of one tick and the end of the next. However,
 getMeasuredTickTime() returns 20ms.
 This would indicate i something other than the tick is using ~80ms
 (another script, DOM rendering, etc).

 */

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


    o = $df.xyr({
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
w._D=function(o){
    return this.D(o.x, o.y, o.c, o.w, o.h)
}
w.bfR = function () {var w = this, g = G(arguments), b, h, o


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
b2d.m=function(vs){ return _.m(vs, b2d.mult) }
b2d.tA=function(vs){return _.m(vs, function(v){return v.tA(v)})}
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
f.vs =function(){var f=this, b=f.B(),g=G(arguments),
    vs=  b2d.m(  this.H().m_vertices   )
    if( g.p){
        b2d.rot=function(vs, b){return _.m(vs, function(v){
            return v.rot(b.rot())})}
        vs= b2d.rot(vs,b)
    }
    return b2d.tA(vs)
} //=f.rV
w.cen = w.cent = function () {
    var w = this, g = G(arguments),
        v = V(w.s.W() / 2, w.s.H() / 2)
    if (g.p) {
        w.dot(v)
    }
    return v
}

M.lC=M.lineCenter
b.wP = b.wPt = function (x, y) {

    var b = this
    return b.GetWorldPoint(V(x, y).div()).mult()
}

bods()
function bods(){
    b.__f=function(f){
        var b=this, g=G(arguments)
        if(g.u){ return b.GetFixtureList() }
        f = b.CreateFixture(f)
        return f
    }
    b._f= function(f,c){var b=this,g=G(arguments)
        if(g.u){ return b.GetFixtureList() }
        f = b.CreateFixture(f)
        if(c){f.C(c)}
        return f
    }
    b.cir= function(){var b=this,g=G(arguments), o= g.f, fd,  h,  f

        //if passed array, it assumes it is arguments for ONE cir
        if(g.A){return b.cir.apply(b, g.f)}

        //if you pass at least two objects, it makes multiple cirs and passes back b
        if(O(g.s)){
            g.e(function(c){b.cir(c)})
            return b
        }




        // can pass obj
        // can pass: c C [r] [x] [y]
        // can pass: c [r] [x] [y]
        // can pass: [r] [x] [y] [c] [C]

        o = g.O? g.f
            :S(g.s)?{c: g.f,C: g.s, r:g[2],x:g[3],y:g[4]}
            :S(g.f)?{c: g.f,r: g.s, x:g[2],y:g[3]}
            :{r: g.f,x: g.s,y:g[2],c:g[3],C:g[4]}

        o.al=  N(o.al, 1)

        o.x = N(o.x,0)
        o.y =  N(o.y,0)
        o.r =  N(o.r,40)
        o.b = o.rs= N(o.b, .5)
        o.f =  N(o.f,.5)
        o.d =  N(o.d,.5)
        o.s = D(o.s)? o.s: 0;
        if(g.n){o.s=1}

        fd = new b2d.FixtureDef
        fd.d(o.d).r(o.b).fr(o.f)
        fd.shape = new b2d.CircleShape(o.r/30)
        fd.shape.SetLocalPosition(V(o.x, o.y, '-'))
        fd.isSensor = o.s? true : g.n? true: false

        f = b.f(fd)
        f.K(o.k)

        if(o.c!=0){
            f.bS(

                f.g = w.g.h().cir(o)
            )
        }
        return f

    }
    b.f=function(){var b=this,g=G(arguments), o; if(g.u){return b._f()}

        if(g.S_){g.L--}
        if(g._S){g.L--}

        //PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
        if(g.A){
            g.e0(function(gg){b.ap('f', g.G(gg))})}//   [ [],[],fD,4,[] ]
        else if(g.SA){
            g.e1(function(f){//       'c',  [ [.,.],[.,.],fD ]
                if(b2d.iFD(f)){b._f(f, g.f)}
                else {
                    if(!S(_.f(f))){
                        f.unshift(g.f)}
                    b2d.iFD(f[1])? b._f(f[1],f[0]) : $a(b, 'f', f)
                }
            })
        }

        //PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
        else if (b2d.iFD(g.f)){return b._f(g.f)}//(fD)
        else if (g.S_ && b2d.iFD(g.s)){b._f(g.s, g.f)}//('c', fD)

        //PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
        else if(O(g.s)){pol()}
        else if(g.L==1|| g.L==3){cir()}
        else {rec()}


        function cir(){
            o={c: g.f, r: g.s, x: g.t, y:g[3]}
            if(g.n){o.s=1}
            b.cir(o)
        }

        function rec(){
            o={c: g.f, w: g.s,  h: g.t, x:g[3], y:g[4], a:g[5]}
            if(g.n){o.s=1}
            b.rec(o).C(o.c)  // $a(b,'rec', g.g)

        }

        function pol(){
            b.pol(g.S_? {c:g.f, v:g.r}: {v:g})
            if(g.n){b.sen(1)}  //if (g.n) {o.s=1}
        }


        return b.d(1)


    }
    w.D=function(){var w=this, g=G(arguments,'k'),o,b

        if(g.u){return w.D(w.hW, w.hH)}

        o= g.O? g.f: g.O_? {p:g.f, f:g.r}:

        {p:[g.f,g.s],f:_.r(g,2)}

        b = w.cB( b2d.BD( o.p ) )

        b.K(g.k)

        $a(b, 'f', g.G( o.f ) )

        return b
    } //w.sp=w.ct=function(x,y){var w=this;return w.hud.ct(x||w.hW,y||w.hH).drag()}
    b.sep=function(verts,scale){var body=this
        if(!O(verts)){alert('o.v must be object'); return}

        if (b2d.iGP(verts)) {verts = verts.vs()}

        //needs array of verts.. or one vert (which is converted here to arr)
        _.e(O(verts[0][0])? verts: [verts], function (v) {
            b2d.sep(body,v, scale)
        })  //  'sep' each of the verts onto the body
        return this
    }
    b.pol = function(){var b = this, w = b.W(), g = G(arguments), o,
        n=b.n(), fs, h, numFixtsAdded, newFixts; if (g.u) {  return b  }


        //if passed verts:
        if( b2d.iGP(g.f) && U(g.s)) {
            return b.pol({v: g.f})  }
        //if passed color and verts:
        if(S(g.f) && b2d.iGP(g.s) && U(g.t)) {
            return b.pol({c: g.f, v: g.s})}
        if (b2d.iB(g.f)) {g.f.fs(b);return b}
        if (b2d.iF(g.f)) {g.f = g.f.vs()}


        o= g.A ? (
            // pass in ['r',[],[],[]]
            S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} :
                // pass in [[],[],[]]
            {v: g.f}
        ) :

            g.O ? g.f :
                !g.S_ ?  {v:g} : //pass in [],[]
                    _.x({c: g.f},
                        g.t ? {v: g.r} : // pass in 'r', [], []
                        {  v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
                    )
        $df.h(o)

        b.sep(o.v)

        numFixtsAdded=b.n()-n
        newFixts = _.f(b.fs(), numFixtsAdded)
        _.e(newFixts, function dressFixture(f){
            f.d(o.d).r(o.b).fr(o.f)
            if (o.s) {f.m_isSensor = o.s ? true : false; f.sen(1) }
            f.K(o.k)
            f.C(o.c, o.C, o.l)
            if (o.lf) {
                f.bS(w.s.h().lf(o).lt(o.v)) }
            if (o.rf) {
                f.bS(w.s.h().rf(o).lt(o.v))  }
        })

        o.i = o.i || o.bf
        if (o.i){ h = w.g.h(); h.bV(o); b.bS(h) }
        return newFixts.length > 1 ? newFixts : newFixts[0]
    }
}


