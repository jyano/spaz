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
w.pol=function(){var w=this,g=G(arguments), b,o
    if(g.A){return $a(w,'pol',g.f)}
    b2d.mini()
    if(g.OO){g.e(function(g){w.pol(g)})
        return w}



    // if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}

    else if(g.N_ && N(g.s) && O(g.t)    ){
        b = w.D(g.f,g.s)
        // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
        _.e(g.t, function(p){
            b.pol({v:p})})
        return g.m? M.p(b): b
    }
    o= g.O? g.f:
        N(g.f)? {x:g.f, y:g.s, p:g.t}
            : {p:g.f}

    o.x=N(o.x, w.hW)
    o.y=N(o.y, w.hH)
    o.p= M.p(o.p)

    b=w.D(o.x, o.y)

    if(g.P){
        if(iB(o.p)){o.p=M.p(o.p)}
        b.pol(o.p)
        return g.m? M.p(b): b
    }

    if(o.rg){o.p.ps(o.rg, function(p){b.pol(o)})}

    else {
        o.p.ps(function(p){
            b.pol(o)})}

    return b.f()
}
w.cir=   w.ball= w.ba= w.circ=function(x, y, r, c){var w=this, g=G(arguments), b,o

    o = g.O? g.f :

        N(g.s) ?

        {
            x: g.f, y: g.s,
            r: g.t,
            c: g[3]
        }
            :

        { r: g.f }


    o.x  = N(o.x, w.hW)
    o.y  = N(o.y, w.hH)
    o.r  = N(o.r, 50)
    o.c  = o.c || $r()

    b = w.D(o.x, o.y, o.c, o.r)

        .d(.5).fr(0).r(.5)

        .K('ball cir')

    if(g.n){b.sen(true)}

    return b

}
w.bump =  w.baa = function () {var w=this, g=G(arguments), b,o

    o = O(g[0])? g[0] : N(g[1])? {

        x:g[0],
        y:g[1],
        r:g[2]

    } : {r:g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.r  = _.tN(o.r, 40)
    o.c  = o.c || $r()

    b= w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)

    if(g.n){b.sen(true)}
    return b}
w.brick = w.bii = function (x, y, W, H) {var w=this, g=G(arguments), b,o
    o = O(g[0])? g[0] : N(g[1])? {
        x:g[0],
        y:g[1],
        w:g[2],
        h:g[3]
    } : {w: g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.w  = _.tN(o.w, 40)
    o.h  = _.tN(o.h, o.w)
    o.c  = o.c || $r()

    b= w.S(o.x, o.y,  o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)

    if(g.n){b.sen(true)}
    return b
}
w.xD=function(){
    w.e(function(b){

        if(b.iD()){  b.xx()}

    })
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
w.dance=function(){var w=this
    w.e(function(b){if(b.iD()){b.thr()}})//w.eD
    return w
}
w.badGuy=function(x,y){var that=this,w=this
    b = w.D(x, y,'d',60).K('badGuy').bS(
        w.s.h(x,y)
    )
    b.draw=function(frame){var b=this
        b.sp().rf(['r','g'],
            [frame[0], frame[1]], 60).dc(60)
    }
    b.h = b.health = 100
    b.cl(function(){b.h--})
    funcId = I(function(){
        b.draw( frameByHealth(b) )
        if(b.h<=0){clearInterval(funcId);b.kill()}
        function frameByHealth(b){
            if(b.h<0){b.h=0}
            if(b.h>100){b.h=100}
            if(b.h<50){ return [ 1-((b.h/50)),1 ] }
            else {return [0, 1-((b.h-50)/50)  ]} }
    }, 300)
    return b
}
w.polyCirc=function(x, y, r, sides){var w=this,
    b=w.D(x,y)

    b.pol( {v:b2d.polyCirc(r, sides)})

    return b
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
w.sH = function (h) {
    var w = this

    if (U(h)) {
        return w.H * w.s.scaleY
    }
    w.s.scaleY = h / w.H
    return w
}
w.bfR = function () {
    var w = this, g = G(arguments), b, h, o
    o = S(g.t) ? {x: g.f, y: g.s, i: g.t, w: g[3], h: g[4], c: g[5]} :
    {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]}
    o.i = o.i || 'sun'
    o.c = o.c || 'y' // can be removed
    b = w.D(o.x, o.y, o.c, o.w, o.h)
    h = w.g.h().al(.5)
    if (o.c) {
        h.c(o.c)
    }
    h.bf(o.i)
    h.rec(o.w, o.h)
    b.bS(h)
    return b
}
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
w.lG=function(c,c2){var w=this,o
    o={c1:c2||'z', c2:c||'r', x1:0,y1:0,x2:0,y2:0}
    _.x(o,R()?(R()?{y2:w.h}:{x2:w.w}):
        R()?(R()?{x1:w.w,y1:w.h}:{x2:w.w,y2:w.h}):
            R()?{x1:w.w,y2:w.h}:{y1:w.h,x1:w.w})
    w.bg.h().lf(o).dr(0,0,w.w,w.h)
    w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)

    return w
}
w.D=function(){var w=this, g=G(arguments,'k'),o,b
    if(g.u){return w.D(w.hW, w.hH)}
    o= g.O? g.f:
        g.O_? {p:g.f, f:g.r}:
        {p:[g.f,g.s],f:_.r(g,2)}
    b = w.CreateBody( b2d.D(o.p) )
    b.K(g.k)
    $a(b, 'f', g.G( o.f ) )
    return b
}//w.sp=w.ct=function(x,y){var w=this;return w.hud.ct(x||w.hW,y||w.hH).drag()}
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
w.boxes = function () {var w = this,g=G(arguments)
    _.e(g, function (g) {w.box.apply(w,g)})
    return w}
w.brcks= w.boxesStat = function () {var w = this,g=G(arguments)
    _.e(g, function (g) {w.brick.apply(w, g)})
    return w}
w.rR = w.randRects = function (ob) {
    var w = this, g = G(arguments),
        o = g.O ? g.f : {y: g.f, z: g.s}
    o.y = N(o.y, 0)
    o.z = N(o.z, 1)
    _.t(20,
        function (i) {
            w.S(R(1100, 20), R(150, 40 + o.y), $r(),
                R(40, 15) * o.z, R(40, 15) * o.z).K('randomRect rR')
        })
    return w
}
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
w.R = function (c, W, H, x, y) {
    var w = this, g = G(arguments),
        wC = w.cen(),
        r

    if (!S(g.f)) {
        y = x;
        x = H;
        H = W;
        W = c;
        c = 'x'
    }
    if (U(W)) {
        W = 200
        H = 200
        x = wC.x - W / 2
        y = wC.y - H / 2
    }
    else if (U(H)) {

        H = W
        x = wC.x - W / 2
        y = wC.y - H / 2
    }
    else if (U(x)) {
        x = wC.x - W / 2;
        y = wC.y - H / 2
    }
    return w.S(
        x + W / 2,
        N(y, x) + H / 2,
        c,
        W, H
    )

    /*
     x=N(g[0])?g[0]:wC.x
     y=N(y)?y:N(g[0])?N(g[0]):wC.y
     W=N(W)?W:100
     H=N(H)?H:W
     */
}
w.walls = function () {
    var w = this, g = G(arguments), o

    if (g.f === 0) {
        return
    }
    o = g.$S ? {w: g.f, c: g.s} : g.A ? {w: g.f[0], c: g.f[1]} : {}
    o.c = o.c || 'o';
    o.w = o.w || '*'
    o.l = 40

    if (o.w == '*') {
        sides();
        verSides()
    }
    if (o.w == '@') {
        w.warp();
        return w
    }
    if (o.w == '_') {
        bot()
    }
    if (o.w == '~') {
        top()
    }
    if (o.w == '[') {
        left()
    }
    if (o.w == ']') {
        right()
    }
    if (o.w == 'U') {
        sides();
        bot()
    }
    if (o.w == 'A') {
        sides();
        top()
    }

    if (o.w == 'C') {
        verSides();
        left()
    }

    if (o.w == 'L') {
        left();
        bot()
    }
    if (o.w == '=') {
        verSides()
    }
    if (o.w == '|') {
        sides()
    }


    if (o.w == '->') {
        verSides();
        left();
        right1()
    }
    if (o.w == '<-') {
        verSides();
        left1();
        right()
    }
    if (o.w == '<->') {
        verSides();
        left1();
        right1()
    }


    if (o.w == 'r2') {
        verSides();
        left();
        right2()
    }
    if (o.w == 'l2') {
        verSides();
        left2();
        right()
    }


    /*

     if (A(o.w)){

     c = o.w[0]
     if (!S(c)){
     h = W;
     W = c;
     c = 'o'
     }
     o.c = o.c || 'o'
     w.floor = w.R(o.c, w.wW, 20, 0, w.wH - 20)
     w.right = w.R(o.c, 20, w.wH, w.Ww - 20, 0)
     w.roof = w.R(o.c, w.wW, 20, 0, 0)
     w.left = w.R(o.c, 20, w.wH, 0, 0)}*/

    function sides() {
        right();
        left()
    }

    function verSides() {
        top();
        bot()
    }


    function left() {

        w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left')
        w.l_.SetBullet(true)

    }


    function right() {
        w.r_ = w.right = w.S(
            w.w, w.h / 2, o.c, o.l * 2, w.h
        ).K('wall side right')
        w.r_.SetBullet(true)
    }

    function right2() {
        w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
    }

    function right1() {
        w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
        w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
    }


    function left2() {
        w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
    }

    function left1() {
        w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
        w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
    }


    function top() {

        w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof')
        w.t_.SetBullet(true)

    }


    function bot() {
        w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor')
        w.b_.SetBullet(true)
    }

}
w.vW = function (col, H, x, y) {
    var w = this, g = G(arguments),
        cW = w.can.W(),
        cH = w.can.H()
    if (!S(col)) {
        y = x;
        x = H;
        H = col;
        col = 'x'
    }
    H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
    if (U(x)) {
        x = cW / 2;
        y = cH / 2 - H / 2
    }
    else if (U(y)) {
        x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
        y = cH / 2 - H / 2
    }
    //x-=10?
    return w.R(col, 20, H, x, y).bo(.2).K('wall')
}
w.sTW=w.sToW = function(x,y){var w=this, //works
    x=x/w.z - w.s.x/ w.z,
    y=y/w.z - w.s.y/w.z
    //w.dot(x,y,'*') // cool
    return {x: x  ,y: y}}
w.wTS=w.wToS=  function(x,y){var w=this,
    x=(x +w.s.x/w.z)*w.z,
    y=(y+ w.s.y/w.z)*w.z
    return {x:x, y:y}
}
w.clr = w.wXx = function(){var w=this
    w.e(function(b){
        if(b!= w.right && b!= w.left&& b!= w.roof&& b!= w.floor)
            b.xx()
    })
    return w
}

    w.tE=function(fn){var w=this
        T.t(function(){  w.e(fn)  })
        return this
    } // TICKER !!!!!

