f.S = f.stg = function () {return this.W().s}
b.St = b.S = b.stg = function () {return this.W().s}
b.horizCenter = function () {var b = this; b.X(b.W().hW); return b}   //-> b.X('hC')//b.g=function(){ return this.f().g }
f.C = function () {var f = this,
    b = f.B(), w = b.W(), g = G(arguments), o, h
    o = g.O ? g.f : {c: g.f, C: g.s, l: g[2]}
    o.c = (o.c == '*') ? $r() : (o.c || 'b')
    o.C = o.C || o.c
    f.removeSprites()
    h = f.iC() ?
        // if circle?
        w.s.h().cir(f.pX(), f.pY(), f.rad(), o.c, o.C, o.l) :
        // if poly
        w.s.h().pol(f.rV(), o.c, o.C, o.l)
    f.bS(h)
    b.i = h
    return f
}
b.C = function (c) {
    this.fs(function (f) {
        f.C(c)
    })
    this._col = c
    return this
}
b._gx=function(){
    this.gx = this.gx || w.g.ct();
    return this
}
b.$h = function () {
    var h = $H()
    this.bS(h)

    h.c.apply(h, G(arguments))
    return h
}
b.rec = function (c, W, H, x, y, a) {
    var b = this, w = b.W(), g = G(arguments, 'k'),
        o, fD, p, f

    if (g.OO_) {
        g.e(function (g) {
            b.rec(g)
        });
        return b
    }
    if (g.A) {
        return $a(b, 'rec', g)
    }
    if (g.O) {
        o = g.f
    }
    else {
        if (N(g.f)) {
            g.ush('z')
        }

        o = {c: g[0], w: g[1], h: g[2], x: g[3], y: g[4], a: g[5]}

    }

    df.oDef(o)
    o.k = o.k || g.k
    fD = b2d.fD(b2d.pH().box(o))
    if (o.s || g.n) {
        fD.isSensor = true;
        o.al = N(o.al, 0.8)
    }

    fD.d(o.d || .5)
    f = b.f(fD)
    f.K(o)

    if (o.c !== 0) {
        // f.g=w.g.h().rec(o)
        if (g.p) {
            f.g = w.g.h().rec(o)
        }//  f.g= w.g.h().rec(o) //this for but: (does something important)
        else {
            f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
            f.bS(f.g)
        }  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
        // f.bS(f.g)
    }
    return f

}
b.pol = function () {
    var b = this, w = b.W(), g = G(arguments), fs, n, arr, o, vs

    b2d.mini()

    //-> {c:'r', v:[[],[],[]]} //pass in {c:'r', v:[[],[],[]]} //pass in [[],[],[]] //pass in ['r',[],[],[]]
    // b.fs(function(f){b1.pol(f.rV())})//g[0].ps(function(v){b.pol(v)})// else {_.e(g[0], function(v){b.pol(v)})}

    if (g.u) {
        return b
    }

    if (iP(g.f) && U(g.s)) {
        return b.pol({v: g.f})
    }

    if (S(g.f) && iP(g.s) && U(g.t)) {

        return b.pol({c: g.f, v: g.s})
    }

    if (iF(g.f)) {
        g.f = g.f.rV()
    }
    else if (iB(g.f)) {
        g.f.fs(b);
        return b
    }
    if (g.A) {
        o = S(g.f[0]) ?
        {c: g.f[0], v: _.r(g.f)} :
        {v: g.f}
    }
    else {
        o = g.O ? g.f :
            g.S_ ?
                (g.t ?
                {c: g.f, v: g.r} :
                {c: g.f, v: g.s}) :
            {v: g}
    }

    o = df.h(o)
    if (iP(o.v)) {
        o.v = o.v.vs()
    }
    n = b.n()
    if (O(o.v[0][0])) {
        _.e(o.v, function (v) {
            b2d.sep(b, v)
        })
    }

    //pass in 2 or more objs->
    else {
        b2d.sep(b, o.v);
        o.v = [o.v]
    }

    //pass in one object
    //->  ['r', [],[],[] ]//->  [[],[],[]]
    //pass in color and loose verts//->'r',[],[],[]//->  'r', [[],[],[]]
    //just pass in loose verts//-> [],[],[]
    //same two as above but also nested in wrapper array.. so just ONE pam
    //if (o.X) {b.clear()}
    //the NEW fixts
    fs = _.f(b.fs(), b.n() - n) //each of only the NEW fixts
    _.e(fs, function (f) {
        f.d(o.d).r(o.b).fr(o.f)
        if (o.s) {
            f.m_isSensor = o.s ? true : false
            f.sen(1)
        }
        f.K(o.k)
        f.C(o.c, o.C, o.l)
        if (o.lf) {
            f.bS(w.s.h().lf(o).lt(o.v))
        }
        if (o.rf) {
            f.bS(w.s.h().rf(o).lt(o.v))
        }
    })

    o.i = o.i || o.bf
    if (o.i) {
        h = w.g.h()
        h.bV(o)
        b.bS(h)
    }

    //b.cir('y', 10);b.cir('z', 6)
    return fs.length > 1 ? fs : fs[0]
}
b.cir= function(){var b=this,g=G(arguments), o= g.f, fd,  h,  f
    //if passed array, it assumes it is arguments for ONE cir
    if(g.A){
        return b.cir.apply(b, g.f)
    }
    //if you pass at least two objects, it makes multiple cirs and passes back b
    if(O(g.s)){
        g.e(function(c){b.cir(c)})
        return b }
    // can pass obj
    // can pass: c C [r] [x] [y]
    // can pass: c [r] [x] [y]
    // can pass: [r] [x] [y] [c] [C]
    o = g.O? g.f
        :S(g.s)?{c: g.f,C: g.s, r:g[2],x:g[3],y:g[4]}
        :S(g.f)?{c: g.f,r: g.s, x:g[2],y:g[3]}
        :{r: g.f,x: g.s,y:g[2],c:g[3],C:g[4]}
    o.x = N(o.x,0)
    o.y =  N(o.y,0)
    o.r =  N(o.r,40)
    o.b =  N(o.b,.5)
    o.f =  N(o.f,.5)
    o.al=  N(o.al, 1)
    o.s = D(o.s)? o.s: 0; if(g.n){o.s=1}
    o.d =  N(o.d,.5)
    fd = new b2d.FixtureDef
    fd.d(o.d).r(o.b).fr(o.f)
    fd.shape = new b2d.CircleShape(o.r/30)
    fd.shape.SetLocalPosition(V(o.x, o.y, '-'))
    fd.isSensor = o.s? true : g.n? true: false
    f = b.f(fd)
    f.K(o.k)
    if(o.c!=0){
        f.g = w.g.h().cir(o)
        f.bS(f.g)
    }
    return f
}
f.dot=function(c){var f=this, w=f.B().W(),v

    v=f.cen()

    if(S(c)){w.dot(c,v)}
    else {w.dot(v)}

    return f
}
f.tP=  f.hit=f.testPoint=f.test=function(){
    var f=this,b=f.B(),w=b.W(),g=G(arguments),  v
    v = V(g.f, g.s)
    if(g.p){ w.dot(v) }
    return f.H().TestPoint(b.tf(), v.div())
    //is a point within the fixture // very accurate
}
b.dot= function(){var b=this,  w= b.W(),  g= G(arguments)
    g.N_? (
        g.p?
            T.t(function(){b.dot(g.f,g.s)}):
            w.d(b.wP(g.f,g.s)))
        :

        w.d(g.f||'y',  g.p? b.wC() : b )

    return b

}
b.f=function(){var b=this,g=G(arguments), o,
    ag=g[0],
    l= g.L,
    FD=b2d.iFD
    if(g.u){return b._f()}
    if(g.S_){l--}
    if(g._S){l--}
    if(g.A){g.e0(function(gg){b.ap('f', g.G(gg))})}//   [ [],[],fD,4,[] ]
    else if(g.SA){
        g.e1(function(f){//       'c',  [ [.,.],[.,.],fD ]
            if(FD(f)){b._f(f, g.f)}
            else {
                if(!S(_.f(f))){f.unshift(g.f)}
                if(FD(f[1])){b._f(f[1],f[0])}
                else { $a(b,'f',f) }}})}
    else if (FD(g.f)){return b._f(g[0])}//(fD)
    else if (g.S_ && FD(g.s)){ b._f(g[1], g[0]) }//('c', fD)
    else if(O(g.s)){
        o=g.S_?{c:g.f,v:g.r}:{v:g}//if (g.n) {o.s=1}
        b.pol(o)
        if(g.n){b.sen(1)}}//pol
    else if(l==1||l==3){
        o={c:g[0], r:g[1], x:g[2], y:g[3]}
        if(g.n){o.s=1}
        b.cir(o)}
    else {
        o={c:g[0], w:g[1],  h:g[2], x:g[3], y:g[4], a:g[5]}
        if(g.n){o.s=1}
        b.rec(o).C(o.c)
        // $a(b,'rec', g.g)
    }
    return b.d(1)
}
anim()
spr()
function spr() {

    f.bS = function () {
        var f = this, b = f.B(), w = b.W(), s = f.S(), g = G(arguments), o, j

        if (g.S_) {
            Q(function () {
                var bm = Q.b(g.f)
                f.bS(
                    $Ct().A(
                        bm.XY(f.pos().x, f.pos().y).rC())
                )
            })
            return f
        }

        o = cjs.iDO(g.f) ?

        {j: g.f, rt: g.s, x: g.t, y: g[3], o: g[4]} : g.O ? g.f : {}

        f.sprites = f.sprites || []

        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.rt = N(o.rt, 0)
        o.o = N(o.o, 1)

        o.al = N(o.al, 1)
        j = o.j.al(o.al)
        w.g.A(j)
        f.sprites.push(j)

        T.t(function () {

            j.XY(b.X() + o.x, b.Y() + o.y)
            j.rt(b.rt() + o.rt)

        })
        return f
    }
    f.bI = function () {
        var f = this, b = f.B(), w = b.W(),
            g = G(arguments), o

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
    b.fSp = function () {
        return this.f().sprites[0]
    }
    b.Sp = function () {
        var g = G(arguments),
            sp, o
        o = _xyr({sp: g.f, x: g.s, y: g.t, sX: g[3], sY: g[4], r: g[5]})

        o.sX = N(o.sX, 1)
        o.sY = N(o.sY, o.sX)
        o.sp = o.sp || Mummy

        this._gx().gx.A(sp = $Sp(o.sp || Mummy))

        sp.rC().XY(o.x, o.y).sXY(o.sX, o.sY).rt(o.r)
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

}
function anim(){



    w.ps =  tw.pos
    w.iGP= tw.ignore


    w.th= w.thrust=function(c,x,y,r){
        return this.D(N(x,600), N(y,500), c|| 'b', N(r,40)).cn('thrust')
    }
    w.PackThruster= w.pack=function(ani){

        var th = w.th(600, 500,'b',100).C("X")
            .r(1).fR()

        th.Sp( Pack, 0, 0, .8 )

        return th.p(ani||'f1')
    }
    b.p= b.play = function (a, b, c, d) {
        if(O(this.sp())){this.sp().p(a, b, c, d)}
        return this
    }
    b.s= b.stop=function (a, b, c, d) {
        if(O(this.sp())){ this.sp().s(a,b,c,d) }
        return this
    }


    //alert
    b.dr=function(dr){alert('b.dr')
        if(U(dr)){return this.direction}
        this.direction=dr; return this
    }
    i.dr=function(dr){alert('i.dr')
        if(U(dr)){return this.direction}
        this.direction=dr; return this
    }
    i.nm=function(dr){
        alret('i.nm')
        if(U(dr)){return this.name}
        this.name=dr; return this
    }
// Hit testing the screen width, otherwise our sprite would disappear //
// We've reached the right side of our screen
// We need to walk left now to go back to our initial position
//sS.addFlipped(true, false, false)// walk_h has been generated by addFlippedFrames and// contained the right facing animations
//T.f(40)
    ct.reset = function () {
        alert('ct.reset')
        this.St().removeAllChildren()
        T.removeAllListeners()
    }
//sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)
//spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right


}
W=b2d.W=function(){var g=G(arguments),o
    o = g.A_? _.x(g.s||{}, {W:g.f[0], H:g.f[1], wW:g.f[2], wH:g.f[3]}) :
        N(g.f) && U(g.s)? { g: g.f }:
            g.$N? {W:g.f,H:g.s, wW:g.t, wH:g[3]}:
                g.S? {w:g.f }: g.f || {} //W([], [{}]) //W(1000)//W(1200,600,[N],[N])//W('U')

    _w = o.w
    o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
    o.sl = U(o.sl) ? true : o.sl
    w = new b2d.World(o.g, o.sl)

    if(o.xx!==0){z()}
    w.W = N(o.W,1200); w.H = N(o.H,600);w.w = N(o.wW, w.W);     w.h = N(o.wH, w.H);
    w.Ww = w.W/w.w; w.wW = w.w/w.W; w.Hh = w.H/ w.h; w.hH = w.h/ w.H;
    w.mZ = w.hH > w.wW? w.hH : w.wW; w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
    w.hW = w.W/2; w.hH = w.H/2; w.z=1; w.SCALE=1
    //handling
    w.bH=   []; w.pH=   []; w.PH=   []; w.eH=   []  //l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
//l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
//l.e=  l.end= function (fn) {this.EndContact = fn; return this}
//l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
//w.listen = w.setContactListener = w.sCL = w.SetContactListener
    b2d.L= b2d.listener = b2d.contactListener = function () {return new b2d.Dynamics.b2ContactListener}
    w.SetContactListener(_.x(w.ln=new b2d.Dynamics.b2ContactListener,{

        BeginContact : function(cx){_.e(w.bH, function(fn){
            $.do(function(){fn(cx)})  })},

        EndContact : function(cx){_.e(w.eH, function(fn){
            $.do(function(){ fn( cx ) })   })},

        PreSolve : function(cx, i){_.e(w.pH, function(fn){
            fn(cx,i)})},

        PostSolve : function(cx, pam2){_.e(w.PH, function(fn){
            $.do(function(){fn(cx,pam2)})})}

    }))
    //grpx
    w.I = $St('z', w.W, w.H ,0, 0)
    w.s= $St('X', w.W, w.H, 0, 0)//.aC(0)
    w.canvas = w.s.canvas; w.can= $(w.canvas); w.ctx = w.can.ctx('2d')
    w.bg= w.s.ct();w.g=  w.s.ct();w.fg= w.s.ct()
    w.i =  $St('X', w.W, w.H, 0, 0)
    if(o.i){ w.s.bm(o.i) }
    w.lG($r())
    if(o.aC==1){
        //w.i.aC(0)
        // if(g.O){; return w}
        // return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
    }

    w.walls(_w)
    keys()
    mouse()
    T.t(function(){


        if(w.mj){w.mj.tg(w.mx, w.my)}
        w.step(1/60)
        if(F(o.cb)){o.cb()}
        if(!T.iP()){ w.I.u(); w.s.u(); w.i.u()}

        //  w.DrawDebugData()

        w.e(function(b){
            b.wX = b.X(); b.wY= b.Y()
            b.sX = w.wTS(b.wX, b.wY).x
            b.sY= w.wTS(b.wX, b.wY).y
            if(O(b.gx)){
                b.gx.XY(b.X(), b.Y()).rt(b.rt())
            }
        })

    })
    if(o.t!==0){

        w.t =  w._t = w._t || w.S(w.hW, w.hH, 'w', [[20,2,'-'] ]).r(.8) //trackee

        w.i.A( w.tSpr=  $Ct().XY(w.t.X(), w.t.Y()) ) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)

        T.t(function(){

            if(F(w.t.cb)){w.t.cb()} else if(F(w.tCb)){w.tCb()}

            w.s.x = -w.sXCap( (w.t.X()-w.hW+ w.hW)*w.z - w.hW  )

            w.s.y = -w.sYCap( (w.t.Y()-w.hH+ w.hH)*w.z - w.hH  )

            if(w.t == w._t){
                w.t.XY(w.tSpr.X(), w.tSpr.Y())
                w.s.rot(w.tSpr.rot())
            }
        })
    }
    w.o=o //w.stats()
    return w

}
function mouse() {
    w.mm(logMXY)
    w.md(function (o) {

        logMXY(o)

        w.q(o.x, o.y, function (f) {

            //if(!f.iD()){return true}


            if (f.of(w.o.m)) {


                w.mj = w.mJ(f.B(), o.x, o.y)
            }


        })
    })
    //world mouse functions are great//they demonstrates md, q, m, and ofClass //but it has a real purpose too!//anytime mousedown..
    // because that implies there was a mouse up //so there should be no current mouse joint.. smart!
    w.mu(function () {
        if (w.mj) {
            w.j(w.mj);
            w.mj = 0
        }
    })


    function logMXY(e) {
        var p = w.sToW(e.X, e.Y);
        w.mx = p.x;
        w.my = p.y
    }
}
function keys(){
    $.kD('l',function(){
        if ($.test) {$l('left pressed')}
        K.l = cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'
        K.l = 1;
        K.L = 0
    })
    $.kU('l',function(){if ($.test) { $l('left lifted') }
        K.l = cjs.Keys.l = cjs.Keys.left = false
        K.l = 0;
        K.L = 1
    })

    $.kD('r',function(){if ($.test) {$l('right pressed')}
        K.r = cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'
        K.r = 1;
        K.R = 0
    })
    $.kU('r',function(){if ($.test) {
        $l('right lifted')
    }
        cjs.Keys.r = cjs.Keys.right = false
        K.r = 0;
        K.R = 1
    })
    $.kD('u',function(){if ($.test) {
        $l('up pressed')
    }
        cjs.Keys.u = cjs.Keys.up = true
        K.u = 1;
        K.U = 0
    })
    $.kU('u',function(){if ($.test) {
        $l('up lifted')
    }
        cjs.Keys.u = cjs.Keys.up = false
        K.u = 0;
        K.U = 1
    })

    $.kD('d',function(){if ($.test) {
        $l('down pressed')
    }
        cjs.Keys.d = cjs.Keys.down = true
        K.d = 1;
        K.D = 0
    })

    $.kU('d',function(){if ($.test) {
        $l('down lifted')
    }
        cjs.Keys.d = cjs.Keys.down = false
        K.d = 0;
        K.D = 1
    })

    K._loaded = 1
}