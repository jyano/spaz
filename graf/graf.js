obvious()
function obvious() {

    i = cjs.DisplayObject.prototype
    ct = cjs.Container.prototype // st = s = cjs.Stage.prototype
    dOb()
    cntr()
    function dOb() {
        i = cjs.DisplayObject.prototype
        i.St = i.S = i.st = function () {
            return this.getStage()
        }
        i.P = function () {
            return this.parent
        }
        i.X = function (x, dur) {
            var i = this, g = G(arguments)
            if (U(x)) {
                return i.x
            }
            i.x = g.p ? i.x + x
                : g.n ? i.x - x
                : g.m ? i.x * x
                : g.d ? i.x / x
                : x

            return i
            //if (N(dur)) {tw([i], [{x: x}, dur]); return i}
        }
        i.Y = function (y, dur) {
            var i = this, g = G(arguments)
            if (U(y)) {
                return this.y
            }
            if (g.p) {
                y = this.y + y
            }
            else if (g.n) {
                y = this.y - y
            }
            else if (g.m) {
                y = this.y * y
            }
            else if (g.d) {
                y = this.y / y
            }


            if (N(dur)) {
                tw([this], [{y: y}, duration])
            }

            else {
                this.y = y
            }
            return this
        }
        i.XY = function (x, y) {
            var i = this, g = G(arguments), v
            if (U(g[0])) {
                return {x: i.x, y: i.y}
            }
            v = V(g[0], g[1])
            x = v.x
            y = _.tN(v.y, v.x)
            return i.X(x).Y(y)
        }
        i.W = function (a) {
            var i = this
            if (U(a)) {
                return i.getBounds().width * i.scaleX
            }

            i.sX(i.scaleX * a / i.W())

            return i
        }
        i.H = function (a) {
            var i = this

            if (U(a)) {
                return this.getBounds().height * this.scaleY
            }

            this.sY(this.scaleY * a / this.H())

            return this

        }
        i.WH = function (w, h) {
            var i = this
            return this.W(w).H(h || w)
        }
        i.sX = function (n) {
            var i = this
            if (U(n)) {
                return i.scaleX
            }
            i.scaleX = n
            return i
        }
        i.sY = function (n) {
            var i = this
            if (U(n)) {
                return i.scaleY
            }
            i.scaleY = n
            return i
        }
        i.kX = function (skewX) {
            if (U(skewX)) {
                return this.skewX
            }
            this.skewX = skewX;
            return this
        }
        i.kY = function (skewY) {
            if (U(skewY)) {
                return this.skewY
            }
            this.skewY = skewY;
            return this
        }
        i.kXY = function (x, y) {

            y = N(y) ? y : x

            return this.kX(x).kY(y)
        }
        i.rX = function () {
            var i = this, g = G(arguments), rX = g[0]
            if (U(rX)) {
                return i.regX
            }
            i.regX = g.p ? i.regX + rX : rX
            return i
        }
        i.rY = function () {
            var i = this, g = G(arguments), rY = g[0]
            if (g.p) {
                i.Y(i.y + (rY - i.regY))
            }
            if (U(rY)) {
                return i.regY
            }
            i.regY = rY
            return i
        }
        i.rXY = function () {
            var i = this, g = G(arguments),
                x = _.tN(g[0]),
                y = _.tN(g[1], x)
            return i.rX(x).rY(y)
        }
        i.rt = i.rot = function () {
            var i = this, g = G(arguments), a = g[0]
            if (g.p) {
                return i.rT(i.rotation + _.tN(a, 1))
            }
            if (g.n) {
                return i.rT(i.rotation - _.tN(a, 1))
            }
            if (U(a)) {
                return i.rotation
            }
            i.rotation = a
            return i
        }
        i.al = function (al) {
            var i = this
            if (U(al)) {
                return i.alpha
            }
            i.alpha = al;
            return i
        }
        i.a2 = function (ct, x, y) {

            ct.A(this)
            if (N(x)) {
                this.X(x)
            }
            ;
            if (N(y)) {
                this.Y(y)
            }
            return this
        }
        i.of = function (k) {
            this._K = this._K || []
            return !k || this == k || _.ct(this._K, k)
        }
        i.K = function () {
            var i = this, g = G(arguments)
            this._K = this._K || []

            if (g.u) {
                return this._K.join(' ')
            }

            if (g.O) {
                this._K(g.f.k);
                return this
            }


            _.eW(g.f, function (k) {


                if (!i.of(k)) {
                    i._K.push(k)
                }


            })

            return this
        }//i.of=function(k){return this.K()==k || this.K()==''}
        i.dg = i.drag = function () {
            var i = this;
            SL(i);
            return i
        } // ~ scroll
        i.sXY = function (x, y) {

            var i = this,
                g = G(arguments), v

            if (U(g[0])) {
                return i
                return {x: i.sX(), y: i.sY()}
            }

            v = V(g[0], g[1])
            x = _.tN(v.x)
            y = _.tN(v.y, v.x)
            i.sX(x)
            i.sY(y)
            return i
        }
        i.$ = function (fn) {
            return this.on('click', fn)
        }
        i.$$ = function (fn) {
            return this.on('dblclick', fn)
        }
        i.rm = i.xx = i.remove = function () {
            var i = this
            i.parent.removeChild(i)
            return i
        } //cant delete 'remove' quite yet

    }
    function cntr(){ ct = cjs.Container.prototype
        ct.u = function () {
            this.update();
            return this
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
    }
}

cjs.iDO= function(i){return O(i)&&F(i.getStage)} //cjs.isOb = function (s) {return O(s) && s.parent}
cjs.rmOb = function (s) {if (

    cjs.iDO(s)//    cjs.isOb(s)

) {s.remove()}}
$Ct = function (a) {
    return new cjs.Container(a)
}
cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
    return O(ct) && ct.addContainer
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


dOb()
function dOb(){
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
    comp()
    function comp(){


        i.o=function(o){this.compositeOperation = o;return this}

        i.Ds= i.dO=function(){this.o('destination-out'); return this}
        i.dS= i.dI=function(){return this.o('destination-in')}
        i.sD= i.sI=function(){this.o('source-in'); return this }
        i.Sd= i.sO=function(){this.o('source-out'); return this } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
        i.ds= i.dV= function(){ this.o('destination-over'); return this }
        i.SD= i.sT= i.sA= function(){ this.o('source-atop'); return this }
        i.DS= i.dT= i.dA= function(){ this.o('destination-atop'); return this }

        i.li=function(){ this.o('lighter'); return this }
        i.co=function(){ this.o('copy'); return this }
        i.xo=function(){ this.o('xor'); return this }







    }

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

