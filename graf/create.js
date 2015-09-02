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


$Bm=  function(bm){var g=G(arguments)
    bm= _bm(bm)
    if(g.p){ bm.drag() }
    return bm
    function _bm(a){return new cjs.Bitmap(a)}
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

keys()

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



