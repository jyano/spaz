cjs= createjs;

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

ct = cjs.Container.prototype


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


$sw= cjs.sw= cjs.stopWatch=function(){
    _$t=  function(){return new Date().getTime()}


    var t= _$t()
        return function self(){var g=G(arguments),
            d=$t()-t
            if(g.d){t=$t()}
            if(g.n){var f= _.cap(
                (self('/')-500)/20,
                0,
                100
            )
                return f
            }
            return d}

    }
$.joystick  =function(){
    $('#left').on('mousedown mouseover touchenter', function(e){cjs.Keys.left = true ;e.preventDefault()})
    $('#left').on('mouseup mouseout touchleave', function(){cjs.Keys.left = false})
    $('#jump').on('mousedown mouseover touchenter', function(){  cjs.Keys.up = true   })
    $('#jump').on('mouseup mouseout touchleave', function(){  cjs.Keys.up = false  })
    $('#right').on('mousedown mouseover touchenter', function(){ cjs.Keys.right = true})
    $('#right').on('mouseup mouseout touchleave', function(){cjs.Keys.right = false })}



cjs.rmOb = function (s) {if (cjs.iDO(s)) {
    s.rm()
}

}

ct.W = function (w) {
    var can = this.St().canvas
    if (U(w)) {
        return can.width
    }
    can.width = w
    return this
}
ct.H = function (w) {
    var can = this.getStage().canvas
    if (U(w)) {
        return can.height
    }
    can.height = w
    return this
}



ct.noAuCl = function () {
    this.autoClear = false;
    return this
}
ct.au = function (au) {
    this.autoClear = au ? true : false;
    return this
}
ct.clr =   ct.E = function () {
    return this.e(function (i) {i.rm()
    })
}
ct.N = function (n) {
    var s = this;
    if (U(n)) {return s.nextStage}
    s.nextStage = n;
    return s
}
ct.C = ct.backgroundColor = function (c) {
    var ct = this
    $(ct.canvas).C(c)
    return ct
}

cjs.bindSlide = SL = function () {
    var g = G(arguments),
        b = g[0],
        b2 = g[1] || b

    return b.on('mousedown',
        function (e) {
            var bx = b2.x - e.rawX,
                by = b2.y - e.rawY
            b.on('pressmove', function (e) {

                if (g.P) {
                    b2.x = bx + e.rawX
                }

                //if (g.N) {
                b2.y = by + e.rawY
                //}
            })

        })
}
$Bm=  function(bm){var g=G(arguments)
    bm= _bm(bm)
    if(g.p){ bm.drag() }
    return bm
    function _bm(a){return new cjs.Bitmap(a)}
}
$St = function(){var st, g = G(arguments), cv
    st = St(cv = g.A ? canById(g.f) : O(g.f) ? canEl(g.f) : newCan(g))
    st.cv = st.c = st.can = $(st.canvas)
    st.cv0 = st.cv[0]
    st.xc = st.cv0.getContext('2d')
    st.A(); if (g.p) {st.t()}//.t()
    function canById(a){return a[0]}
    function canEl(a){
        //can pass it a canvas OR a $canvas object
        return $(a)[0]}
    function newCan(g){return  $.c(g.f || 'p', g.s || 1200, g.t || 600, g[3], g[4])[0]}
    return st
    function St(cv){
        var s= new cjs.Stage(cv)
        return s
    }
}
$H = $h = function () {
    var g = G(arguments),
        h = new cjs.Shape(), //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
        o = g.O ? g.f :
            g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
            {x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
                // 'c-C-l' pattern
                N(g.s) ? {C: g.f, l: g.s} :
                {c: g.f, C: g.s, l: g.t}
    h.XY(N(o.x, 0), N(o.y, 0))
    h.c(o.c || 'z', o.C || 'w', o.l || 8)
    if (o.C) {
        h.C(o.C)
    }
    if (N(o.l)) {
        h.l(o.l)
    }
    if (g.p) {
        h.dg()
    }
    return h
}
ct.h = function () {
    var ct = this,
        h = $H.apply($H, arguments)
    ct.A(h)
    return h
}
ct.ct = function (x, y) {
    var ct = this,
        g = G(arguments), ct1 = $Ct()
    o = g.F_ ? {fn: g.f} : {x: g.f, y: g.s}
    ct.A(ct1)
    if (o.fn) {
        o.fn(ct1, ct)
    }
    else if (N(o.x)) {
        ct1.XY(o.x, o.y)
    }
    if (g.p) {
        cjs.bindSlide(ct1)
    }
    return ct1
}
i.dot = function () {
    var i = this
    i.getStage().dot(i.X(), i.Y())
    return i
}
i.flash = function () {
    var i = this
    i.opacity(0)
    $.in(.3, function () {
        i.opacity(1)
    })
    return i
}
i.rZero = function (a) {
    var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
    if (g.p) {
        i.rX(0, '+').rY(0, '+')
    }//i.X(a, i.regX()-a, '+')
    else {
        i.rXY(0, 0)
    }
    return i
}//
i.RT = function () {var i = this;
    RT(i);
    return i
}
ct.rec = function () {
    var ct = this, g = G(arguments), o, ct2, h
    if (g.OO_) {
        g.e(this, 'rec');
        return this
    } //it doesnt know that's this! (scope talk)
    o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
        g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f

    o.al = N(o.al, 1)
    o.rt = N(o.rt, 0)
    o.c = o.c || 'z';
    o.C = o.C || 'w'
    ct2 = ct.ct();
    h = ct2.h(o.x, o.y);
    h.rt(o.rt);
    h.c(o).al(o.al)
    if (o.lf) {
        h.lf(o)
    } else if (o.rf) {
        h.rf(o)
    }
    if (o.bm) {
        h.bR({i: 'me', hs: [o]})
    }
    else {
        h.rec(o.w, o.h)
    }
    if (g.p) {
        ct.drag()
    }
    return ct2
}
ct.pol = function () {
    var ct = this, g = G(arguments), p,

        h = ct.h()

    if (N(g.f)) {
        h.XY(
            g.shift(),
            g.shift())
    }
    p = $a(h, 'pol', g)
    if (g.p) {
        p.drag()
    }
    return p
}
ct.cir = function (c, r, x, y) {
    var g = G(arguments)
    alert('ct.cir')
    return $Cir(c, r, x, y).a2(this)
}
ct.Ct = function () {
    this.ct.apply(this, arguments)
    return this
}
ct.Bm = function () {
    this.bm.apply(this, arguments)
    return this
}
ct.bm = ct.b = function self() {
    var ct = this, g = G(arguments), bm,

        o = g.F_ ? {fn: g.s, sc: g.s} :
            g.N_ ? {sc: g.f, fn: g.s} :
                _.x({i: g.f}, N(g.s) ? {sc: g.s, fn: g.t} :
                {fn: g.s, sc: g.t})
    o.sc = o.sc || 1
    $df.im(o)
    //
    if (O(o.i)) {
        alert('ct.bm O(o.i)');
        return ct.A($Bm(o.i))
    }
    //
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
ct.d = ct.dot = function (c, x, y) {
    var ct = this, o, d, tw, g = G(arguments)

    if (b2d.isGPoly(g.f)) {

        _.e(g.f.vs(), function (v) {
            ct.dot(V(v))
        })

        return this
    }


    if (g.A) {

        _.e(c, function (G) {
            if (A(G)) {
                ct.dot.apply(ct, G)
            }
            else {
                ct.dot(G)
            }
        })

        return this
    }


    o = g.S_ ? (

        b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :

            O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
            {c: g.f, x: g.s, y: g.t}

    ) :
        b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
            g.O_ ? {x: g.f.x, y: g.f.y} :
            {x: g.f, y: g.s}


    o.x = N(o.x, ct.W() / 2)
    o.y = N(o.y, ct.H() / 2)
    o.c = o.c || 'y'
    d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
    tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
    d.$$(function () {
        tw.$()
    })
    return d.K('dev dot')
}
ct.qB = ct.bQ = function (name, x, y, sX, sY, rt) {
    var b, g = G(arguments)
    b = Q.b(name)
        .XY(N(x, 0), N(y, 0))
        .sXY(N(sX, 1), N(sY, sX || 1))
        .rt(N(rt, 0))
    if (!g.n) {
        b.rC()
    }
    ;
    if (g.p) {
        b.drag()
    }
    ;
    this.A(b);
    return b
}
// TEXT !!!
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
$.fn.T = function () {alert('$.fn.T')
    var d = this, g = G(arguments)
    d.E()
    g.e(function (str) {
        d.A($.h3(str))
    })
    return d
}

s.cannonBall=function(x,y){var s=this,h
    h=s.h(x,y)
    h.rf('a', 'z',18 ).dc(18).ef()
    return h}
s.basketBall=function(x,y){var s=this
    return this.h(x,y).rf('w', 'o',18 ).dc(18).ef()
}
s.beachBall=function(x,y){var s=this
    return s.h(x,y)
        .rf('b','r',18).dc(18).ef()
}
s.snowBall=function(x,y){var s=this
    return s.h(x,y).rf('a','w',18).dc(18).ef()
}
$.fn.hideOnKeyDown = function(a){
    var that = this
    $('body').keydown(function(ev){e=ev
        $l(e.which)
        if(e.which == 40){ that.hide()  }
        if(e.which == 38){ that.show()  }
    })
}
drag = drg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){

        var offset = $(this).offset(),

            deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top

        $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
            .on( 'mouseup' , function(){  $(this).off() })

    })

    touchDrg(element)
    return qq(element)

}
$.fn.toR = $.fn.moveRight=function(num){
    num=num||20
    if(this.left()=='auto'){this.left(0)}
    this.left( parseInt(this.left()) + num)
    return this}
$.fn.toL = $.fn.moveLeft=function(num){
    num=num||20
    if(this.left()=='auto'){this.left(0)}
    this.left( parseInt(this.left()) - num)
    return this}
$.fn.toU =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  - num  )
    return this}
$.fn.toD =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  + num  )
    return this}
drawHalf=function(c,i){c.dI(i, -i.width/2, -i.h/2)}

function createStuff(){
    $El = cjs.el = function (a) {
        a = $(a)[0]
        return new cjs.DOMElement(a)
    }
    ELM = function () {
        z()
        d = $.d('r', 400, 400).A($.ip()).drag()
        el = $El(d)
        s = $St('y').t()
        s.A(el)
        // tw(el, [{x:300,y:300},2000])
        // tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
    }

}


h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
h.col = h.fs = function () {
    var h = this, gx = h.graphics, g = G(arguments)
    gx.fs.apply(gx, g)
    return h
}
h.c = h.f = function (c, C, l) {
    var h = this, gx = h.graphics, g = G(arguments), o

    o = g.O ? g.f : g.m ? {c: '*'} : g.f == '**' ? {c: '**'} : g.f == '***' ? {c: '***'} :
        g.u ? {c: 'z', C: 'w', l: 6} :
            // 'c-C-l'
            N(g.s) ? {c: g.f, l: g.s} : g.N_ ? {l: g.f, C: g.s} : {c: g.f, C: g.s, l: g.t}

    if (A(o.c)) {
        if (N(o.c[1])) {
            o.l = o.c[1];
            o.c = o.c[0]
        }
        else if (N(o.c[0])) {
            o.l = o.c[0];
            o.C = o.c[1]
        }
        else {
            o.l = o.c[2];
            o.C = o.c[1];
            o.c = o.c[0]
        }
    }

    if (A(o.C)) {
        o.l = o.C[1];
        o.C = o.C[0]
    }

    if (o.c == 0) {
        gx.f(null);
        o.c = 'X'
    }
    if (o.C == 0) {
        gx.s(null);
        o.C = 'X'
    }
    if (o.c == 00) {
        gx.f(null);
        gx.s(null);
        o.c = 'X';
        o.C = 'X'
    }
    if (o.c == '*') {
        o.c = $r()
    }
    if (o.C == '*') {
        o.C = $r()
    }
    if (o.c == '**') {
        o.c = $r();
        o.C = $r()
    }
    if (o.c == '***') {
        o.c = $r();
        o.C = $r();
        o.l = R(20)
    }


    if (S(o.c)) {
        gx.f(oO('c', o.c))
    }
    if (S(o.C)) {
        gx.s(oO('c', o.C))
    }
    if (N(o.l)) {
        h.l(o.l)
    }
    if (o.lf) {
        o.lf = O(o.lf) ? o.lf : {}

        if (o.r) {
            o.r = N(o.r, 0)
            o.x = N(o.x, 0)
            o.y = N(o.y, 0)
            o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : N(o.lf.x1, 0) + o.x - o.r
            o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : N(o.lf.y1, 0) + o.y - o.r
            o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : N(o.lf.x2, 0) + o.x - o.r
            o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : N(o.lf.y2, 0) + o.y + o.r
        }
        /*
         $l('r: ' + o.r)
         $l('x: ' + o.x)
         $l('y: ' + o.y)
         $l('x1: '+ o.lf.x1)
         $l('y1: '+ o.lf.y1)
         $l('x2: '+ o.lf.x2)
         $l('y2: '+ o.lf.y2)

         */

        h.lf(o.lf)
    }


    if (o.rf) {
        o.rf = O(o.rf) ? o.rf : {}
        o.c = [2, 'z']
        if (o.r) {
            o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
            o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y
            o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
            o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20
            o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
        }
        h.rf(o.rf)
    }


    if (o.ls) {
        o.ls = O(o.ls) ? o.ls : {}
        if (o.r) {
            o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
            o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
            o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
            o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
        }
        h.ls(o.ls)
    }


    if (o.rs) {
        o.rs = O(o.rs) ? o.rs : {}
        if (o.r) {
            o.rs.x1 = _.tN(o.rs.x1) + o.x
            o.rs.y1 = _.tN(o.rs.y1) + o.y
            o.rs.x2 = _.tN(o.rs.x2) + o.x
            o.rs.y2 = _.tN(o.rs.y2) + o.y
            o.rs.r2 = _.tN(o.rs.r2) + o.r
        }
        h.rs(o.rs)
    }
    if (o.bs) {
        h.bs(o.bs)
    }
    if (o.bf) {
        h.bf(o.bf)
    }

    return h
}
h.C = h.s = function (C, l) {
    var h = this, gx = h.graphics
    gx.s(oO('c', C))
    if (N(l)) {
        h.l(l)
    }
    return h
}
h.l = h.ss = function (l, b, c) {
    var h = this, gx = h.graphics;
    gx.ss(l || 1, b, c)
    return h

}
h._dc=function(o){
    var h=this,gx=h.graphics,g=G(arguments)
    gx.dc(N(o.x,0),N(o.y,0),N(o.r,50))
    return h
}
h.cirs=function(g){
    var h=this
    g.e(function(c){h.dc(c)}); return this
}
h.dc= function(x,y,r){
    var h=this,gx=h.graphics,g=G(arguments),o
    h.cp()
    if(g.A){return $a(h,'dc',g.f)}
    if(g.OO_){return h.cirs(g)}
    o = g.O?g.f: g.$?{r:g.f}: {x:g.f,y:g.s,r:g.t}
    return h._dc(o)
}

h.dr = function () {var h = this, gx = h.graphics, g = G(arguments),
    o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, 100);
    o.h = N(o.h, o.w)
    gx.dr(o.x, o.y, o.w, o.h)
    return h
}
h.rec = function () {var h = this, g = G(arguments), o
    if (g.OO_) {g.e(function (g) {h.rec(g)}); return h }

    o = g.O ? g.f :
        S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
            g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
                N(g.t) ?
                {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
                {w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}


    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, 50)
    o.h = N(o.h, o.w)
    if (o.i) {
        h.bf(o.i, function () {o.i = null; h.rec(o)})
        return h
    }
    if (o.c) {h.c(o)}
    if(o.lf){
        h.lf({
            c1: o.c1 || 'z', c2: o.c2 || 'w',
            s1: 0, s2: 1,
            x: o.x - o.w / 2, y: o.y - o.h / 2,
            x2: o.x - o.w / 2, y2: o.y + o.h / 2
        })
    }
    h.dr(-o.w/2+o.x, -o.h/2+o.y, o.w, o.h)
    return h

}
h.pol = function (V, c, C, l) {
    var h = this, g = G(arguments), o

    //array must come first b/c its an obj
    o = A(g.f) ?
    {v: g.f, c: g.s, C: g.t, l: g[3]} : O(g.f) ? g.f : {}
    $df.oDef(o)
    h.ef().es()
    h.c(o)
    if (o.bf) {
        h.bf('me', function () {
            h.lt(o.v).cp()
        })
    }
    else {
        h.lt(o.v).cp()
    }
    return h
}
h.bV = function (o) {
    var h = this, g = G(arguments), o
    o = g.A ? {hs: g.f} : g.f || {}
    o.hs = o.hs || []
    o.i = o.i || 'me'
    if (F(Q)) {
        $.i(o.i, function (i) {
            h.bf(i[0])
            _.e(o.v, function (v) {
                h.lt(v)
            })//
            h.cp()
            h.ef()
        })
        return h
    }
    h.bf(o.i)
    _.e(o.v, function (v) {
        h.lt(v)
    })

    return h

}
h.bf = function () {var h = this, gx = h.graphics, g = G(arguments),

    tf

    if (!F(Q)) {
        $l('!F(Q)')

        if (A(g.s)) {
            g.s = cjs.m2d.apply(cjs, g.s)}

        tf = g.s || cjs.m2d(R(500), R(300))

        if (S(g.f)) {gx.bf(Q.i(g.f), null, tf)}
        else if (O(g.f)) {gx.bf(g.f, null, tf)}
        return h
    }

    if (g.S_){

        $l('yes F(Q)')

        $.i(g.f, function (i) {

            gx.bf(i[0])

            if (F(g.s)) { g.s(h) }
        })
    }

    else if (g.O_ && A(g.f.hs)) {
        $l('g.O_ && A(g.f.hs)')
        $.i(g.f.i || 'me', function (i) {
            gx.bf(i[0])
            if (F(g.s)) {
                _.e(g.f.hs, g.s)
            }
        })
    }

    else {$l('..else')
        gx.bf(g.f, null, g.s)
    }
    //h.ef()
    return h
}  // BITMAP FILL  !!!!!!
h.bC = function (o) {
    var h = this;
    return h.bf(o, function (h1) {
        h.dc(h1)
    })
}//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
h.bR = h.bfR = h.bmR = function (o){
    var h = this;
    if (F(Q)) {
        h.bf(o, function (h1) {
            h.rec(h1)

        })

        return h
    }
    /*

     h.bmR1= function(o){var h=this;
     o=df.b(o)
     $.i(o.i,
     function(i){_.e(o.hs,
     function(g){
     h.bf(i[0])
     h.rec(g)
     h.ef() })
     })
     return
     }
     */
    h.bf(o.bf)
    h.rec(o.hs)
    _.e(o.hs, function (r){
        w.rec(r.w, r.h)
    })
    return h
}

$Cir=   function(){var g = G(arguments), o
    o = g.S_? {c:g.f,x:g.s,y:g.t,r:g[3]}: {x:g.f,y:g.s,r:g.t}
    return $H(o.c,o.x,o.y).dc(o.r)

}

h.cir= function () {
    var h = this, gx = h.graphics, g = G(arguments), o
    o = g.O ? g.f :
        N(g.t) ?  {x:g.f,y:g.s,r:g.t, c: g[3], C: g[4], l: g[5]} :
            N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
                g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]}:
                {c:g.f,C:g.s,l:g.t}
    h.c(o)
    if(o.bf){
        if(N(o.bf)){o.bm = 'me'}

        if(F(Q)){ //async
            h.bf(o.bf, function(){
                h.dc(o)
            })
        }
        else { //sync
            o.tf = o.tf || null;
            h.bf(o.bf, o.tf).dc(o)
        }
    }

    else {h.dc(o)}
    h.alpha = N(o.al, 1)
    return h

}
h.dr2 = function (x, y, W, H) {var h = this, g = G(arguments), o

    if(g.OO_){g.e(function(g){h.dr2(g)});return h}

    o=g.O?g.f:
        U(g.t)? {w: g.f, h: g.s} :
        {x: g.f, y: g.s, w: g.t, h: g[3]}

    o.x = N(o.x,0)
    o.y = N(o.y,0)
    o.w = N(o.w, 50)
    o.h = N(o.h, o.w)
    h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
    return h

}


h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
    var h = this, gx = h.graphics,

        g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]

    o = N(g[3]) ? {
        x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]} :

        N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :

            O(g[0]) ? g[0] : {}

    o.a = _.tN(o.a)
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.p = cjs.cap(o.p, 0, .99)

    gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
    return h
}


h.qt=    function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    gx.quadraticCurveTo(x, y, r, startA, endA, aCW)
    return h
}


keys()
load()
function keys(){
    KEYOB = {
        up: 38, u: 38,
        down: 40, d: 40,
        left: 37, l: 37,
        right: 39, r: 39,
        space: 32, s: 32,
        enter: 13, e: 13
    }


    $.k = $.key = $.keyDown = $.kD = kD = function self(key, fn) {

        if (O(key)) {
            _.e(key, function (fn, k) {
                if (s$(k).isUpper()) {
                    $.kU(k.toLowerCase(), fn)
                }
                else {
                    $.k(k, fn)
                }
            })
            return
        }

        if (KEYOB[key]) {
            key = KEYOB[key]
        }


        $('body').on('keydown', function (e) {

            if (e.which == key) {
                fn(e, cjs.Keys)
            }
        })

    }
    $.keyUp = $.kU = kU = function (key, funk) {
        keyObj = {
            up: 38, u: 38,
            down: 40, d: 40,
            left: 37, l: 37,
            right: 39, r: 39,
            space: 32, s: 32,
            enter: 13, e: 13
        }
        if (keyObj[key]) {
            key = keyObj[key]
        }
        $('body').on('keyup', function (e) {

            if (e.which == key) {
                funk(e, cjs.Keys)
            }
        })
    }
    cjs.Keys = function (o) {

        if (O(o)) {

            if (F(o.u)) {
                cjs.tick(function () {
                    if (cjs.Keys.u) {
                        o.u(cjs.Keys.u)
                    }
                })
            }

            if (F(o.d)) {
                cjs.tick(function () {
                    if (cjs.Keys.d) {
                        o.d(cjs.Keys.d)
                    }
                })
            }

            if (F(o.l)) {
                cjs.tick(function () {
                    if (cjs.Keys.l) {
                        o.l(cjs.Keys.l)
                    }
                })
            }

            if (F(o.r)) {
                cjs.tick(function () {
                    if (cjs.Keys.r) {
                        o.r(cjs.Keys.r)
                    }
                })
            }

        }
    }


    cjs.watchKeys = function () {
        cjs.Keys.l = cjs.Keys.left = false
        cjs.Keys.r = cjs.Keys.right = false
        cjs.Keys.u = cjs.Keys.up = false
        cjs.Keys.d = cjs.Keys.down = false

        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
        })


        $.kU('l', function () {
            if ($.test) {
                $l('left lifted')
            }
            cjs.Keys.l = cjs.Keys.left = false
        })
        $.kD('r', function () {
            if ($.test) {
                $l('right pressed')
            }
            cjs.Keys.r = cjs.Keys.right = true
            cjs.Keys.dir = 'right'
        })
        $.kU('r', function () {
            if ($.test) {
                $l('right lifted')
            }
            cjs.Keys.r = cjs.Keys.right = false
        })
        $.kD('u', function () {
            if ($.test) {
                $l('up pressed')
            }
            cjs.Keys.u = cjs.Keys.up = true
        })
        $.kU('u', function () {
            if ($.test) {
                $l('up lifted')
            }
            cjs.Keys.u = cjs.Keys.up = false
        })
        $.kD('d', function () {
            if ($.test) {
                $l('down pressed')
            }
            cjs.Keys.d = cjs.Keys.down = true
        })


        $.kU('d', function () {
            if ($.test) {
                $l('down lifted')
            }
            cjs.Keys.d = cjs.Keys.down = false
        })
    }

    K = function (k, fn) {
        var g = G(arguments), o, key
        if (g.u) {
            if (K._loaded) {
                return
            }
            $.kD('l', function () {
                if ($.test) {
                    $l('left pressed')
                }
                K.l = cjs.Keys.l = cjs.Keys.left = true
                cjs.Keys.dir = 'left'
                K.l = 1;
                K.L = 0
            })
            $.kU('l', function () {
                if ($.test) {
                    $l('left lifted')
                }
                K.l = cjs.Keys.l = cjs.Keys.left = false
                K.l = 0;
                K.L = 1
            })
            $.kD('r', function () {
                if ($.test) {
                    $l('right pressed')
                }
                K.r = cjs.Keys.r = cjs.Keys.right = true
                cjs.Keys.dir = 'right'
                K.r = 1;
                K.R = 0
            })
            $.kU('r', function () {
                if ($.test) {
                    $l('right lifted')
                }
                cjs.Keys.r = cjs.Keys.right = false
                K.r = 0;
                K.R = 1
            })
            $.kD('u', function () {
                if ($.test) {
                    $l('up pressed')
                }
                cjs.Keys.u = cjs.Keys.up = true
                K.u = 1;
                K.U = 0
            })
            $.kU('u', function () {
                if ($.test) {
                    $l('up lifted')
                }
                cjs.Keys.u = cjs.Keys.up = false
                K.u = 0;
                K.U = 1
            })
            $.kD('d', function () {
                if ($.test) {
                    $l('down pressed')
                }
                cjs.Keys.d = cjs.Keys.down = true
                K.d = 1;
                K.D = 0
            })
            $.kU('d', function () {
                if ($.test) {
                    $l('down lifted')
                }
                cjs.Keys.d = cjs.Keys.down = false
                K.d = 0;
                K.D = 1
            })
            K._loaded = 1
            return
        }
        if (O(k)) {
            if (g.p) {
                if (F(k.u)) {
                    z(function () {
                        if (K.u) {
                            k.u(K.u)
                        }
                    })
                }
                if (F(k.d)) {
                    z(function () {
                        if (K.d) {
                            k.d(K.d)
                        }
                    })
                }
                if (F(k.l)) {
                    z(function () {
                        if (K.l) {
                            k.l(K.l)
                        }
                    })
                }
                if (F(k.r)) {
                    z(function () {
                        if (K.r) {
                            k.r(K.r)
                        }
                    })
                }
            }
            else {
                _.e(k, function (fn, k) {
                    K(k, fn)
                })
            }
            return
        }
        o = s$(k).isUpper() ? {on: 'keyup', k: k.toLowerCase()} : {on: 'keydown', k: k}
        if (g.p) {
            return z(function () {
                if (K[k]) {
                    fn()
                }
            })
        }
        key = Key(o.k)
        return $('body').on(o.on, function (e) {
            if (e.which == key) {
                fn(e)
            }
        })
        function Key(k) {
            var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
            return ob[k] ? ob[k] : k
        }

    }
    $.space = function (fn) {
        return $.kD('space', fn)
    }
}
function load(){
    q = cjs.LoadQueue.prototype
    q.f= q.l= function(fn){var q=this
        q.on("fileload", fn)
        return q}
    q.c= function (fn) {var q=this
        if(F(fn)){ q.on("complete", fn) }
        return q
    }
    q.b=  q.bm =function(i, ct, x, y){
        var bm = $Bm( this.r(i) );
        if(ct){bm.a2(ct,x,y)}; return bm
    }
    q.i=  q.r= function(i){
        i  = this.getResult(i); i.w= i.width;i.h = i.height; return i}
    q.$= function(i){return $(this.i(i))}
    q.m = q.mf= function(){var q=this, g=G(arguments), _mf, mf
        // q.m:
// protosig:
//
// 'me',..
//
// {src:'me', id:'him'},..
//
// [ {src:*, id:*}, 'me',.. ]

        if(g.u){return q}
        _mf = g.A ? g.f : g
        mf = _.m(_mf,  function(item){
            return S(item)? {src: _.src(item),id:item} : item
        })
        q.loadManifest( mf )
        return q
    }

    Q=function(){  var g=G(arguments),  o

        //starts off as a fn (obviously)
        //but ends up as an obj
        // (can use his info to test if its been ran)
        o=g.F? {c:g.f}:  {m:g.f,c:g.s}
        o.m = o.m || _MF
        Q=(new cjs.LoadQueue).c(o.c).m(o.m)
    }

    WQ = function(){var g = G(arguments), o
        o = _.x({ob:g.f||{}},
            F(g.t)?{fn0: g.s, fn: g.t}: {fn: g.s})
        o.fn = o.fn || function(){}
        w = W(o.ob)
        if (o.fn0) {o.fn0(w)}
        Q(o.ob.I||_MF , function(){o.fn(w)})
    }
}