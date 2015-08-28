cjs=C$=createjs; T= cjs.Ticker







$PT =  function(){


    c = HTMLCanvasElement.prototype
    x=  ctx=  xx=CanvasRenderingContext2D.prototype
    xGr = CanvasGradient.prototype

    var c=cjs
    eD=cjs.EventDispatcher.prototype
    gx=cjs.Graphics.prototype
    h =  cjs.Shape.prototype
    i=    cjs.DisplayObject.prototype
    mc=cjs.MovieClip.prototype
    q = cjs.LoadQueue.prototype
    st= s=  cjs.Stage.prototype
    sS = ss = cjs.SpriteSheet.prototype
    sSB=      cjs.SpriteSheetBuilder.prototype
    sp=s=cjs.Sprite.prototype
    tl= cjs.Timeline.prototype
    t=cjs.Text.prototype
    ct =cjs.Container.prototype
    tw = cjs.Tween.prototype


}
$PT()
df={}

cjs.toColor =toColor = tCl=function(n1,n2,n3,n4){

    return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")"
        :
        $r('c', n1)
}

$.fn.T = function () {var d = this, g = G(arguments)
    d.E()
    g.e(function (str) { d.A($.h3(str)) })
    return d
}
cjs.iDO= function(i){return O(i)&&F(i.getStage)}
eD.init=function(){
    var eD=this
    eD.initialize.apply(eD, arguments)
    return eD
}
$.fn.a2=function(el){el.A(this); return this}
$.St=function(){z()
    s = $St().t()
    s.bm('me', function(bb){
        b=bb.drag()
    })
    return s
}
$.dragStage = function (x, y) {
    s = $St('v',  '+')
    return $.dragFrame($(s.canvas))
}

cjs.bulletHit = function (bullet, inWhat) {

    var x = bullet.centerX(),
        y = bullet.centerY()

    var res = Math.pointInCircle(x, y, {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})

    if (res == true) {
        $l('hit!')
    }
    return res
}
_xyr=function(o){
    o.x=N(o.x,0)
    o.y=N(o.y,0)
    o.r=N(o.r,0)
    return o}
_im=function(o){
    o.i= o.i||'me'
    o.al = N(o.al,1)
}
_sc=function(o){
    o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
    if (!A(o.sc)) {o.sc = [o.sc, o.sc]};
    return o
}
_bm=function(a){return new cjs.Bitmap(a)}

$Bm=  function(bm){var g=G(arguments)
    bm= _bm(bm)
    if(g.p){ bm.drag() }
    return bm
}

$H= $h= function(){var g=G(arguments),
    h = new cjs.Shape(), //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
    o= g.O? g.f:
        g.N_? ( N( g[3] )? // 'c-C-l' pattern
        { x:g.f, y:g.s, C: g.t, l:g[3]} : { x:g.f, y:g.s, c: g.t, C:g[3], l:g[4]} ) :
            // 'c-C-l' pattern
            N(g.s)? { C:g.f, l:g.s } :
            { c:g.f, C:g.s, l:g.t }
    h.XY( N(o.x,0), N(o.y,0) )
    h.c( o.c || 'z', o.C || 'w', o.l ||  8 )
    if(o.C){h.C(o.C)}
    if(N(o.l)){h.l(o.l)}
    if(g.p){h.dg()}
    return  h
}
$Cir=   function () {var g = G(arguments),
    o = g.S_? {c:g.f,x:g.s,y:g.t,r:g[3]}: {x:g.f,y:g.s,r:g.t}
    return $H(o.c,o.x,o.y).dc(o.r)
}

cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
    return O(ct) && ct.addContainer
}
cjs.M = function (a) {
    var m = new cjs.Matrix2D()
    if (N(a)) {
        m.rotate(a)
    }
    return m
}
cjs.Gx = cjs.gx = function (a) {
    return new cjs.Graphics(a)
}
cjs.rulers = function () {
    $.d('b', 100, 100).al(.3).dg()
    $.d('r', 100, 300).al(.3).dg()
}
cjs.iH = function (h) {
    return O(h) && h.graphics
}
cjs.iT = function (t) {
    if (O(t)) {
        return (t.textBaseline)
    }
}
cjs.m2d = function (a, b, c, d, e, f) {
    if (U(c)) {
        return new cjs.Matrix2D(1, 0, 0, 1, N(a, 0), N(b, 0))
    }
    return new cjs.Matrix2D(
        N(a, 1),
        N(b, 0),
        N(c, 0),
        N(d, 1),
        N(e, 0),
        N(f, 0)
    )
}
cjs.dia = function self(width, height, fc, sc) {
    fc = fc || 'green'
    sc = sc || 'white'
    width = width || 100
    height = height || width
    halfwidth = width / 2
    halfheight = height / 2
    var h = new createjs.Shape()
    h.graphics.f(fc).s(sc)
        .mt(0, -halfheight)
        .lt(-halfwidth, 0).lt(0, halfheight)
        .lt(halfwidth, 0).lt(0, -halfheight)
    return h
}

$.space = function (fn){return $.kD('space',fn)}
$.scroll = function (a) {
    return $(window).scroll(a || function () {
        $('body').C('*')
    })
}
$.click = m$ = function (f) {
    return $(document).on('click', _v(f))
}
$.dblclick = m$$ = function (f) {
    return $(document).on('dblclick', _v(f))
}
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
$.fn.keyControls = function (num) {
    var args = G(arguments), that = this

    this.P('a')
    if (args.P) {
        $.kD('left', function () {
            that.toL(num)
        })
        $.kD('right', function () {
            that.toR(num)
        })
    }
    if (args.N) {
        $.kD('up', function () {
            that.toU(num)
        })
        $.kD('down', function () {
            that.toD(num)
        })
    }
}// o.keyControls(num) should deprecate use of key(o)

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
cjs.bindReverseSlide = LS = function (b, b2) {
    var g = G(arguments),
        b = g[0],

        b2 = g[1],
        d = oE('d'),
        pm = oE('pm'),
        b2 = b2 || b

    return b.on(d, function (e) {
        var bx = b2.x + e.rawX, by = b2.y + e.rawY

        b.on(pm, function (e) {

            if (g.P) {
                b2.x = bx - e.rawX
            }
            if (g.N) {
                b2.y = by - e.rawY
            }

        })
    })
}
cjs.bindRotate = RT = function (b, b2) {


    //b = what the control is
    //b2 what it should control (default = itself!)
    //if(g.p){  //b.rgc( '+' )   }

    var g = G(arguments), b = g[0], b2 = g[1] || b

    return b.on('mousedown',

        function (e) {

            var X = e.rawX, Y = e.rawY, r = b2.rotation

            b.on('pressmove', function (e) {


                b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )


            })
        })

}
cjs.bindRotate2 = RTT = function (b, b2) {


    //b = what the control is
    //b2 what it should control (default = itself!)


    var g = G(arguments), b = g[0], b2 = g[1] || b


    if (g.p) {  // b.rgc( '+' )
    }

    return b.on('mousedown',

        function (e) {

            var X = e.rawX, Y = e.rawY, r = b2.rotation

            b.on('pressmove', function (e) {


                b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )


            })
        })

}
cjs.bindScale = SC = function (b, b2) {
    var g = G(arguments), b = g[0], b2 = g[1],
        d = oE('d'), pm = oE('pm'), b2 = b2 || b,
        cp = function (n) {
            return n < .2 ? .2 : n > 2 ? 2 : n
        }

    return b.on(d,

        function (e) {
            var X = e.rawX, Y = e.rawY,
                sx = b2.scaleX,
                sy = b2.scaleY

            b.on(pm,

                function (e) {
                    if (g.n) {
                        b2.sXY(cp(sx + (
                            (e.rawX - X) / 200)),
                            cp(sy - ((e.rawX - X) / 200))
                        )

                    }

                    else if (g.p) {
                        cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                        cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
                    }

                    else {
                        b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                    }
                })
        }
    )
}
cjs.bindSkew = SK = function (b) {
    var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b

    return b.on(d,
        function (e) {
            var X = e.rawX, Y = e.rawY
            b.on(pm, function (e) {


                b2.kXY(
                    (e.rawY - Y) * .5, (e.rawX - X) * .5
                )

            })
        })
}
cjs.bindTransform = TR = function TR(b, b2, m) {

    var g = G(arguments),
        b = g[0],
        b2 = g[1],

        b2 = b2 || b, m = g[2] || 'SL'

    if (m == 'SL') {
        cjs.bindSlide(b, b2);
        m = 'SC'
    }

    else if (m == 'SC') {
        cjs.bindScale(b, b2);
        m = 'RT'
    }

    else if (m == 'RT') {
        cjs.bindRotate(b, b2);
        m = 'SL'
    }

    return b.on('pressup', function (e) {

        b.removeAllEventListeners();

        TR(b, b2, m)

    })
}
cjs.reggy = reggy = function (o, s) {

    s = s || o.parent

    s.bm('me', function (b) {

        b.W(40).H(40)

        I(function () {
            b.XY(o.x + o.regX, o.y + o.regY)
        }, 100)

    })


}
cjs.bindSlideAndRotate = KK = function (b, b2) {

    var g = G(arguments), b = g[0],
        b2 = g[1] || b
    cjs.bindSlide(b);
    cjs.bindRotate(b, b2)
    if (g.p) {

        b.rgc('+')
    }

    if (g.N) {
        //    reggy(b,b2)
    }
}
cjs.bindRotateThenSkew = RK = function (b, b2, m) {
    var g = G(arguments), b = g[0], b2 = g[1],
        d = oE('d'),
        pm = oE('pm'),
        b2 = b2 || b,
        m = g[2] || 'RT'


    //if(g.p){var s=St('y',1000)
    //    _t(b||5,function(i){s.a().bm(
    //        function(bm){bm.xy(i*50);TR(bm)})});return s}

    if (m == 'RT') {
        RT(b, b2);
        m = 'SK'
    }

    else if (m == 'SK') {
        SK(b, b2);
        m = 'RT'
    }

    return b.on(oE('pu'),
        function (e) {
            Do(b).O();
            RK(b, b2, m)
        })
}
