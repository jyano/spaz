f.S = f.stg = function () {return this.W().s}
b.St = b.S = b.stg = function () {return this.W().s}

b.c= b.C = function (c) {
    this.fs(function (f) {
        f.C(c)
    })
    this._col = c
    return this
}
b._gx=function(a){
    this.gx = this.gx || w.g.ct();
    if(a){this.gx.A(a)}
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

    $df.oDef(o)
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
w.killD=w.xD=function(){w.e(function(b){if(b.iD()){b.kill()}})}
w.pol = function () {
    var w = this, g = G(arguments), b, o
    if (g.A) {
        return $a(w, 'pol', g.f)
    }
    b2d.mini()
    if (g.OO) {
        g.e(function (g) {
            w.pol(g)
        })
        return w
    }



    // if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}

    else if (g.N_ && N(g.s) && O(g.t)) {
        b = w.D(g.f, g.s)
        // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
        _.e(g.t, function (p) {
            b.pol({v: p})
        })
        return g.m ? M.p(b) : b
    }
    o = g.O ? g.f :
        N(g.f) ? {x: g.f, y: g.s, p: g.t}
            : {p: g.f}

    o.x = N(o.x, w.hW)
    o.y = N(o.y, w.hH)
    o.p = M.p(o.p)

    b = w.D(o.x, o.y)

    if (g.P) {
        if (iB(o.p)) {
            o.p = M.p(o.p)
        }
        b.pol(o.p)
        return g.m ? M.p(b) : b
    }

    if (o.rg) {
        o.p.ps(o.rg, function (p) {
            b.pol(o)
        })
    }

    else {
        o.p.ps(function (p) {
            b.pol(o)
        })
    }

    return b.f()
}
w.cir = w.ball = w.ba = w.circ = function (x, y, r, c) {
    var w = this, g = G(arguments), b, o

    o = g.O ? g.f :

        N(g.s) ?

        {
            x: g.f, y: g.s,
            r: g.t,
            c: g[3]
        }
            :

        {r: g.f}


    o.x = N(o.x, w.hW)
    o.y = N(o.y, w.hH)
    o.r = N(o.r, 50)
    o.c = o.c || $r()

    b = w.D(o.x, o.y, o.c, o.r)

        .d(.5).fr(0).r(.5)

        .K('ball cir')

    if (g.n) {
        b.sen(true)
    }

    return b

}
w.bump = w.baa = function () {
    var w = this, g = G(arguments), b, o

    o = O(g[0]) ? g[0] : N(g[1]) ? {

        x: g[0],
        y: g[1],
        r: g[2]

    } : {r: g[0]}

    o.x = _.tN(o.x, w.hW)
    o.y = _.tN(o.y, w.hH)
    o.r = _.tN(o.r, 40)
    o.c = o.c || $r()

    b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)

    if (g.n) {
        b.sen(true)
    }
    return b
}
w.brick = w.bii = function (x, y, W, H) {
    var w = this, g = G(arguments), b, o
    o = O(g[0]) ? g[0] : N(g[1]) ? {
        x: g[0],
        y: g[1],
        w: g[2],
        h: g[3]
    } : {w: g[0]}

    o.x = _.tN(o.x, w.hW)
    o.y = _.tN(o.y, w.hH)
    o.w = _.tN(o.w, 40)
    o.h = _.tN(o.h, o.w)
    o.c = o.c || $r()

    b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)

    if (g.n) {
        b.sen(true)
    }
    return b
}
w.polyCirc = function (x, y, r, sides) {
    var w = this,
        b = w.D(x, y)

    b.pol({v: b2d.polyCirc(r, sides)})

    return b
}
w.sH = function (h) {var w = this
    if (U(h)) {return w.H * w.s.scaleY}
    w.s.scaleY = h / w.H
    return w}
w.sTW=w.sToW = function(x,y){var w=this, //works
    x=x/w.z - w.s.x/ w.z,
    y=y/w.z - w.s.y/w.z
    //w.dot(x,y,'*') // cool
    return {x: x  ,y: y}}
w.wTS=w.wToS=  function(x,y){var w=this,
    x=(x +w.s.x/w.z)*w.z,
    y=(y+ w.s.y/w.z)*w.z
    return {x:x, y:y}}
w.$h = function () {
    return this.i.h.apply(this.i, arguments)
} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
w.C = function (c) {
    var w = this
    w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
    return w
}
w.lG=function(c,c2){var w=this,o
    o={c1:c2||'z', c2:c||'r', x1:0,y1:0,x2:0,y2:0}
    _.x(o,R()?(R()?{y2:w.h}:{x2:w.w}):
        R()?(R()?{x1:w.w,y1:w.h}:{x2:w.w,y2:w.h}):
            R()?{x1:w.w,y2:w.h}:{y1:w.h,x1:w.w})
    w.bg.h().lf(o).dr(0,0,w.w,w.h)
    w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)

    return w
}
w.warp = function () {
    var w = this
    w.eEv(function (b) {

        if (b.X() < 10) {
            b.X(w.W - 10)
        }
        if (b.X() > w.W - 10) {
            b.X(10)
        }
        if (b.Y() < 10) {
            b.Y(w.H - 10)
        }
        if (b.Y() > w.H - 10) {
            b.Y(10)
        }
    })

    return w
}
w.UI = function () {
    return $(this.i.canvas)
}
w._ = function(fn){Q(function(){fn(w)})}
w.tE=function(fn){var w=this
    T.t(function(){  w.e(fn)  })
    return this
} // TICKER !!!!!
w.bmR= w.bR= w.bfR=function(){var w=this, g=G(arguments), b, h,o
    o = S(g.t)? {x: g.f, y: g.s, i: g.t, w: g[3], h:g[4], c:g[5]} :
    {x: g.f, y: g.s,  w: g.t, h:g[3], c:g[4]}
    o.i = o.i || 'sun'
    o.c = o.c || 'y' // can be removed
    b =   w.D(o.x, o.y, o.c, o.w, o.h)
    h= w.g.h().al(.5)
    if(o.c){h.c(o.c)}
    h.bf(o.i)
    h.rec(o.w, o.h)
    b.bS(h)
    return b
}

dev()
edge()
wall()
anim()
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
        $.K.l =  1
        $.K.L= 0
        $.K.dir = 'left'
    })
    $.kU('l',function(){if ($.test) { $l('left lifted') }
         $.K.l =   false
        $.K.l = 0;
        $.K.L = 1
    })
    $.kD('r',function(){if ($.test) {$l('right pressed')}

        $.K.r = 1
        $.K.dir = 'right'
        $.K.R = 0
    })
    $.kU('r',function(){if ($.test) {
        $l('right lifted')
    }
         $.K.r = 0;
        $.K.R = 1
    })
    $.kD('u',function(){if ($.test) {
        $l('up pressed')
    }

        $.K.u = 1;
        $.K.U = 0
    })
    $.kU('u',function(){if ($.test) {
        $l('up lifted')
    }

        $.K.u = 0;
        $.K.U = 1
    })
    $.kD('d',function(){if ($.test) {
        $l('down pressed')
    }
        $.K.d = 1;
        $.K.D = 0
    })
    $.kU('d',function(){if ($.test) {
        $l('down lifted')
    }

        $.K.d = 0;
        $.K.D = 1
    })
}

function dev(){

    w.d= w.dot=function(){var w=this,g=G(arguments), o

        if(g.S_){
            o =  N(g.s)?
            {c: g.f, x: g.s, y:g[2]} :
            {c: g.f, x:V(g.s).x, y:V(g[1]).y}
        }

        else {
            o= N(g.s)?
            {x:g.f, y:g.s} :

            {x:V(g.f).x, y:V(g.f).y}
        }


        if(g.m){
            w.dot(o.c,o.x,o.y,'-')
            w.dot(o.c,o.x,o.y,'/')
            w.dot(o.c,o.x,o.y,'+')
            w.dot(o.c,o.x,o.y) }

        else if(g.p){w.fg.dot(o.c,o.x,o.y)}
        else if(g.n){w.bg.dot(o.c,o.x,o.y)}
        else if(g.d){w.g.dot(o.c,o.x,o.y)}
        else {w.i.dot(o)}
        return w
    }

    w.l = w.dl = function () {
        var w = this, g = G(arguments), o, i
        o = S(g[0]) ?
        {c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
            :
        {x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
        i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
        o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')

        return i.h()
            .c(10, o.c)
            .mt(o.x1, o.y1)
            .lt(o.x2, o.y2).K('dev line')


    }
    w.dr = function (c, x, y, W, h) {
        var w = this, g = G(arguments), o
        o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
            : {x: g[0], y: g[1], w: g[2], h: g[3]}
        _.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
            g.n ? {g: w.bg, c: o.c || 'r'} :
            {g: w.hud, c: o.c || 'b'})
        o.g.h().rec(o)
    }

    //dev
    w.dbCross = function (x, y) {
        var w = this, c = w.cen()
        x = N(x, c.x)
        y = N(y, c.y)

        w.dr('t', -10 + x, -140 + y, 20, 300, '-')
        w.dr('t', -150 + x, -10 + y, 300, 20, '-')
        w.dot('r', x, y)

        return w

    }
    w.stats = function (n) {
        var w = this
        _d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))

        w.mdq(function (fx) {
            _f = _d._fix = fx;
            _b = _f.B()
        })

        if (n == 0) {
            z(upd)
        }

        else {
            _.ev(N(n, .2), upd)
        }

        return w

        function upd() {
            var f, b;
            if (_d._fix) {
                f = _d._fix
                b = f.B()

                _d.T(
                    'ty: ' + (b.iD() ? 'dyn' : 'stat'),
                    'x: ' + b.X(),
                    'y: ' + b.Y(),
                    'fK: ' + f.K(), 'bK: ' + b.K(),
                    'sen: ' + f.sen(),
                    'd: ' + f.d(),
                    'fr: ' + f.fr(),
                    'r: ' + f.r(),
                    'bMass:' + parseInt(f.B().mass()),
                    'bNum:' + f.B().n()
                )

            }

        }
    }
    w.devGrid = function () {
        var w = this
        _.t(12, function (i) {
            w.l(i * 200, 0, i * 200, w.h)
            w.l(i * 200, 0, i * 200, w.h, '-')
            w.l(0, i * 200, w.w, i * 200)
            w.l(0, i * 200, w.w, i * 200, '-')
        })
        return w
    }
    w.flash = function () {
        var w = this, s = w.s
        s.flash.apply(s, arguments)
        return w
    }

    //write
    w.pop = function (t) {
        var w = this
        t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
        t.tw([{a: .5, sxy: .5}, 4000])
        _.in(4, function () {
            t.rm()
        })
        return this
    }
    w.pen = function (t, f, c) {
        var g = G(arguments), o
        if (this._T) {
            this._T.rm();
            this._T = null
        }

        o = {y: 100}

        o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW

        this._T = this.i.T(t, f, c)
        this._T.XY(o.x, o.y)
        return this._T
    }
    w.chalk = function () {
        var w = this, g = G(arguments)
        w.i.chalk.apply(w.i, g)
        return w
    }
    w.show = function (fn) {
        var w = this, g = G(arguments)


        _.ev(.2, function () {

            w.pen(S(fn) ? window[fn] : fn())

        })

        return w

    }
}
function wall(){


    w.isWall=function(b){
        var w=this; return b == w.right || b == w.left || b == w.roof  || b == w.floor}
    w.clr  = function () {var w = this
        w.e(function (b) {if (!w.isWall(b)){b.kill()}})
        return w
    } //=w.wXx
    w._walls=function(o){var w=this
        if (o.w == '*') {sides();verSides()}
        if (o.w == '@') {w.warp(); return w }
        if (o.w == '_') { bot() }
        if (o.w == '~') { top() }
        if (o.w == '[') { left() }
        if (o.w == ']') {right()}
        if (o.w == 'U') {sides();bot()}
        if (o.w == 'A') {sides();top()}
        if (o.w == 'C') {verSides();left()}
        if (o.w == 'L') {left();bot()}
        if (o.w == '=') {verSides()}
        if (o.w == '|') {sides()}
        if (o.w == '->') {verSides();left();right1()}
        if (o.w == '<-') {verSides();left1();right()}
        if (o.w == '<->') {verSides();left1();right1() }
        if (o.w == 'r2') {verSides();left();right2()}
        if (o.w == 'l2') {verSides();left2();right()}
        function sides() {right();left()}
        function verSides() {top();bot()}
        function left() {w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left'); w.l_.SetBullet(true)}
        function right() {w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right'); w.r_.SetBullet(true)}
        function right2() {w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')}
        function right1() {w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
            w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')}
        function left2() {w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')}
        function left1() {w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
            w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')}
        function top() {
            w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof'); w.t_.SetBullet(true)}
        function bot() {
            w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor'); w.b_.SetBullet(true)}
    }
    w.walls = function () {var w = this, g = G(arguments), o
        if (g.f === 0) {return}
        w._walls(wallOp(g))
        function wallOp(g){
            var o =  g.A? {w: g.f[0], c: g.f[1]} : {w:g.f, c: g.s}
            o.c = o.c || 'o';
            o.w = o.w || '*';
            o.l = 40
            return o}
    }
}
function anim(){



    w.ps =  tw.pos
    w.iGP= tw.ignore

    w.th= w.thrust=function(c,x,y,r){
        return this.D(N(x,600), N(y,500), c|| 'b', N(r,40)).cn('thrust')
    }
    w.pack=  w.PackThruster= function(ani){
        var th = w.th(600, 500,'b',100).C("X").r(1).fR()
        th.Sp( Pack, 0, 0, .8 )
        return th.p( ani||'f1' )
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
        if(U(dr)){
            return this.direction}
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
function edge(){
    w.edgAr = function(){
        var w=this,
            g=G(arguments),
            X=0,
            Y= 0,
            x =w.D(400, 400,'z', [ [50, 50,  '-']])//.den(10)
        _.e(g, function(e){

            e =  w.edgD(e[0], e[1], e[2], e[3])
            w.wed(e,x,V(g[0][0], g[0][1]))
        })


        return x
    }
    w.edgD = function(x1,y1,x2,y2){var w=this,
        l = w.l(x1,y1,x2,y2),
        e = w.D(0,0,b2d.edg(x1,y1,x2,y2)).d(1)
        e.bS(l) //bS2
        return e
    }
    w.edgs = function(){var w=this, g=G(arguments), X=0, Y= 0, x =w.D(X,Y, 'z', [[100,100, 400,400, '-']]), x2 =w.D(2000, 1200, 'z', [[400,400,  '-']])
        if(A(g[0])){
            //  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
            //  w.weld(x,b)
            // X=g[0][0]
            // Y=g[0][1]
        }
        _.e(g, function(e){if(A(e)){e = w.edgD.apply(w,e)}
            w.wed(e,x)})//  w.weld(x2  , x)
        w.dot(300, 300)
        return x2
    }
    w.edgsD=function(ar){var w=this

        ar = ar || [V(),V(100,100)]

        i = V( ar.shift() )
        i2 = V( ar.shift() )

        w.edg(i.x, i.y, i2.x, i2.y)

        _.e(ar, function(v){

            i = i2
            i2 = V(v)
            w.edg(i.x, i.y, i2.x, i2.y)})
    }
    w.edg= function(x1,y1,x2,y2){var w=this
        // you would always want a single stat?
        w.l(x1, y1, x2, y2,'-')

        return w.S(0, 0, b2d.edg(x1,y1,x2,y2))
    }
    w.edgs=function(ar){var w=this,e
        ar = ar || []
        i = V( ar.shift() )
        i2 = V( ar.shift() )
        e = w.edg(i.x, i.y, i2.x, i2.y)
        _.e(ar, function(v){
            i = i2
            i2 = V(v)
            e.glu(  w.edg(i.x, i.y, i2.x, i2.y) )
        })
    }
}
function rarelyUsed(){  w.dance=function(){var w=this
    w.e(function(b){if(b.iD()){b.thr()}})//w.eD
    return w
}
    w.txC = function () {
        var w = this
        _.ev(2, function () {
            w.e(function (b) {
                b.fs(function (f) {
                    f.C($r())
                })
            })
        })

    }
    w.boxes = function () {var w = this,g=G(arguments)
        _.e(g, function (g) {w.box.apply(w,g)})
        return w}
    w.brcks= w.boxesStat = function () {var w = this,g=G(arguments)
        _.e(g, function (g) {w.brick.apply(w, g)})
        return w}

    w.ten = w.addTenBalls = function (n) {
        var w = this

        _.t(n || 10, function (i) {

            w.ball(100 + (i * 80), 200)
        })

        return w
    }
    w.hun = w.addHundBalls = function (n) {
        var w = this
        _.t(n || 100, function (i) {
            w.ball(100 + (i * 8), 50, 10)
        })
        return w
    }
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

    w.W = N(o.W,1200);
    w.w = N(o.wW, w.W);
    w.Ww = w.W/w.w;
    w.wW = w.w/w.W;

    w.hW = w.W/2;
    w.H = N(o.H,600);
    w.h = N(o.wH, w.H);
    w.Hh = w.H/ w.h;
    w.hH = w.h/ w.H;
    w.hH = w.H/2;

    w.mZ = w.hH > w.wW? w.hH : w.wW;
    w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
    w.z=  w.SCALE=1

    //handling
    w.bH=   []; w.pH=   []; w.PH=   []; w.eH=   []  //l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
//l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
//l.e=  l.end= function (fn) {this.EndContact = fn; return this}
//l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
//w.listen = w.setContactListener = w.sCL = w.SetContactListener
    b2d.L= b2d.listener = b2d.contactListener = function () {return new b2d.Dynamics.b2ContactListener}
    w.SetContactListener(_.x(w.ln=new b2d.Dynamics.b2ContactListener,{

        BeginContact : function(cx){_.e(w.bH, function(fn){
            _.in(0,function(){fn(cx)})  })},

        EndContact : function(cx){_.e(w.eH, function(fn){
            _.in(0,function(){ fn( cx ) })   })},

        PreSolve : function(cx, i){_.e(w.pH, function(fn){
            fn(cx,i)})},

        PostSolve : function(cx, pam2){_.e(w.PH, function(fn){
            _.in(0,function(){fn(cx,pam2)})})}

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
            b.wX = b.X();
            b.wY= b.Y()
            b.sX = w.wTS(b.wX, b.wY).x
            b.sY= w.wTS(b.wX, b.wY).y
            if(O(b.gx)){b.gx.XY(b.X(), b.Y()).rt(b.rt())}
        })
    })

    if(o.t!==0){
        w.t =  w._t = w._t || w.S(w.hW, w.hH, 'w', [[20,2,'-'] ]).r(.8) //trackee
        w.i.A( w.tSpr=  $Ct().XY(w.t.X(), w.t.Y()) ) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
        T.t(function(){
            if(F(w.t.cb)){w.t.cb()} else if(F(w.tCb)){w.tCb()}
            w.s.x = -w.sXCap( (w.t.X()-w.hW+ w.hW)*w.z - w.hW  )
            w.s.y = -w.sYCap( (w.t.Y()-w.hH+ w.hH)*w.z - w.hH  )
            if(w.t == w._t){w.t.XY(w.tSpr.X(), w.tSpr.Y()); w.s.rt(w.tSpr.rt())}
        })
    }

    w.o=o //w.stats()

    return w

}

$W=function(){
    W()
    w.y()
    w.p()
}
