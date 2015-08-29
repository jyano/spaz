$Ct = function (a) {
    return new cjs.Container(a)
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
St=function(){z()
    s = $St(1200,600).A()
    h = $h(0,0).a2(s)
    SL(h)
}
i = cjs.DisplayObject.prototype
ct = cjs.Container.prototype // st = s = cjs.Stage.prototype
t=cjs.Text.prototype

i.bd = i.bounds = function (a, b, c, d) {
    var i = this

    this.nominalBounds = new cjs.Rectangle(a, b, c, d)

    return this

}
i.gL = i.gTL = function (x, y) {
    var i = this
    if (O(x)) {
        y = x.y;
        x = x.x
    }
    return i.globalToLocal(x, y)
}
i.hT = i.test = function (x, y) {
    var i = this
    if (cjs.iDO(x)) {
        return i.hT(i.gTL(x))
    }
    if (O(x)) {
        y = x.y;
        x = x.x
    }
    return i.hitTest(x, y)
}
i.uM = i.underMouse = function () {
    var i = this, s = i.S()
    if (s.mouseInBounds) {
        var pt = i.gTL(s.mouseX, s.mouseY)
        return i.hT(pt)
    }
}
i.tf = function () {
    var i = this, g = G(arguments)

    if (U(g[0])) {
        return [
            i.x,
            i.y,
            i.scaleX,
            i.scaleY,
            i.rotation,
            i.skewX,
            i.skewY,
            i.regX,
            i.regY
        ]
    }
    if (O(g[0]) && F(g[0].getTransform)) {
        g[0] = g[0].getTransform()
    }
    i.setTransform.apply(i, A(g[0]) ? g[0] : g)
    return i
}
i.hide = function () {
    this.visible = false;
    return this
}
i.cX = function (a) {
    var i = this
    if (U(a)) {
        return i.x + i.W() / 2
    }
    return i.X(a - i.W() / 2)
}
i.cY = function (a) {
    var i = this,
        hH = i.H() / 2
    return U(a) ? i.y + hH : i.Y(a - hH)
}
i.sib = function () {
    return this.P().ch()
}
i.ix = function (n) {
    var i = this, g = G(arguments)
    if (U(g[0])) {
        return
    }
    i.P().setChildIndex(i, n)
    return i
}
i.bB = i.bindBody = function (b) {$l('i.bB = bindBody')
    var i = this
    cjs.t(function () {
        b.X(i.X())
        b.Y(i.Y())
        b.rot(i.rot())
    })
    return i
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
i.rC = i.rCenter = function () {
    var i = this, g = G(arguments), x, y, hW, hH

    x = i.W() / 2
    hW = x
    y = i.H() / 2

    hH = y

    return (g.p) ?
        i.rX(hW, '+').rY(hH, '+') :
        i.rXY(hW, hH)
}
i.rgc = function () {
    var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
    return (g[0] === 0) ?
        i.rXY(0, 0, (g.p ? '+' : null))
        : i.rXY(x, y, (g.p ? '+' : null))
}//
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
i.warpX = function (lo, hi, cush) {alert('i.warpX')
    var i = this, wrp = M.wrp(lo, hi, cush)
    cjs.t(function () {
        i.x = wrp(i.x)
    })
    return i
}
i.warpY = function (lo, hi, cush) {alert('i.warpY')
    var i = this, wrp = M.wrp(lo, hi, cush)
    cjs.t(function () {
        i.y = wrp(i.y)
    })
    return i
}
i.warp = function (n) {alert('i.warp')
    var i = this, s = i.S(), n = n || 0
    i.warpX(0, s.W(), n)
    i.warpY(0, s.H(), n)
    return i
}
i.toFront = function () {
    return this.ix(this.sib().length - 1)
}
i.within = i.inStage = function () {
    var i = this, g = G(arguments), s = i.S(), wthnS

    wthnS = i.x > 0 && i.y > 0

    && i.x < (s.W() - 100) && i.y < ( s.H() - 100 )

    if (g.n && !wthnS) {
        s.rm()
    }

    return wthnS
}
i.belowStg = function () {
    return this.y > this.S().H()
}

i.RT = function () {var i = this;
    RT(i);
    return i
}


//i=cjs.DisplayObject.prototype
i.tickX = function (fn) {
    var i = this
    cjs.t(function () {i.X(fn())})
    return i
}
i.tickY = function (fn) {
    var i = this
    cjs.t(function () {
        i.Y(fn())
    })
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
ct.h = function () {
    var ct = this,
        h = $H.apply($H, arguments)
    ct.A(h)
    return h
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
ct.cX = function () {
    return this.St().cen().x
}
ct.cY = function () {
    return this.St().cen().y
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
ct.ch = ct.e = ct.ix = ct.sChI = ct.sChI = function (fn, n) {
    var ct = this, CH
    if (N(n)) {
        ct.setChildIndex(fn, n);
        return ct
    }
    CH = []
    _.e(ct.children, function (ch) {
        CH.push(ch)
    })
    if (U(fn)) {
        return CH
    }
    _.e(CH, function (ch) {
        fn(ch)
    })
    return ct
}
ct.Cv = function () {
    return this.St().canvas
}
ct.A = function (x, y) {

    var ct = this, g = G(arguments)
    if (U(x)) {
        $('body').append(ct.Cv())
    }
    else if (N(x)) {alert('ct.A.. abs!')
        $('body').append(ct.Cv()).abs(x, y)
    }
    else {g.e(function (ch) {ct.addChild(ch)})
    }
    return ct
}
ct.cen = ct.pt = ct.M = function () {
    return V(this.W() / 2, this.H() / 2)
}
ct.bgI = function (i) {
    var ct = this
    ct.bm(i, function (b) {
        ct.ch(b, 0)
    })
    return ct

}
ct.eMO = function (en) {
    this.enableMouseOver(en ? true : false);
    return this
}
ct.mc = function (x, y) {
    var ct = this, g = G(arguments), mc
    mc = cjs.Mc.apply(cjs, g)
    this.A(mc).XY(N(x, 100), N(y, 100))
    return mc
}
ct.chalk = function () {
    var ct = this, g = G(arguments),
        h = 0
    g.e(function (t) {
        ct.T(t, 26, 'w', 475, h += 35)
    })
    return this
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

ct.abs = function (x, y) {
    var s = this
    alert('ct.abs')
    ct.can.abs(x, y)
    return s
}
s=cjs.Stage.prototype
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

//


$.fn.hideOnKeyDown = function(a){
    var that = this
    $('body').keydown(function(ev){e=ev
        $l(e.which)
        if(e.which == 40){ that.hide()  }
        if(e.which == 38){ that.show()  }
    })
}

$.dragStage = function (x, y) {

    s = $St('v', '+')

    return $.dragFrame($(s.canvas))
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
$.joystick  =function(){
    $('#left').on('mousedown mouseover touchenter', function(e){cjs.Keys.left = true ;e.preventDefault()})
    $('#left').on('mouseup mouseout touchleave', function(){cjs.Keys.left = false})
    $('#jump').on('mousedown mouseover touchenter', function(){  cjs.Keys.up = true   })
    $('#jump').on('mouseup mouseout touchleave', function(){  cjs.Keys.up = false  })
    $('#right').on('mousedown mouseover touchenter', function(){ cjs.Keys.right = true})
    $('#right').on('mouseup mouseout touchleave', function(){cjs.Keys.right = false })}
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
