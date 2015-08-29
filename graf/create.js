cjs= createjs;
keys()
load()
ticker()
dOb()
cntr()
shap()
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
    _MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
    Q=function(){var g=G(arguments),  o=g.F?{c:g.f}: {m:g.f,c:g.s}
        o.m = o.m || _MF
        Q = (new cjs.LoadQueue).c(o.c).m(o.m)
    }
    WQ = function(){
        var g = G(arguments), o = _.x({ob:g.f||{}},
            F(g.t)?{fn0: g.s, fn: g.t}: {fn: g.s})
        o.fn = o.fn || function(){}

        w = W(o.ob)
        if (o.fn0) {o.fn0(w)}
        Q(o.ob.I||_MF ,
            function(){o.fn(w)
            })

    }
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
    q.i=  q.r= function(i){i  = this.getResult(i); i.w= i.width;i.h = i.height; return i}
    q.$=function(i){
        return $(this.i(i))
    }
    q.m = function(){var q=this, g=G(arguments), _mf, mf
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
}
function ticker() {
    T = cjs.Ticker
    cjs.xL = T.s = function () {
        T.removeAllEventListeners()
    } // u might say xTHIS but not thisX? i dont know what i am talking about
    /* TICKER
     paused : Indicates whether the ticker is currently paused.
     d       delta :  time since the last tick
     t       time : how much  since T  started
     r      runTime  : how much time has T been running for
     */
    T.p = function () {
        T.setPaused(false);
        return T
    }
    T.P = T.s = function () {
        T.setPaused(true);
        return T
    }
    T.$ = function () {
        T.setPaused(T.getPaused() == false ? true : false)
        return T
    }
    T.t = cjs.t = function (fn) {
        var g = G(arguments)
        if (g.F_) {
            if (!g.n) {
                fn()
            }
            return T.on('tick', fn) // T.addEventListener? return T?
        }
        return g.n ? T.t('+') - T.t() :
            Number((T.getTime(g.p ? false : true) / 1000).toFixed(2))
    }
    T.i = function () {
        //indicates the target time (in ms) between ticks
        //default is 50 (20 fps)
        //Note: actual time between ticks may be more than specified,
        //  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
        return T.interval
    }
    T.f = function (numTicks) {
        var g = G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
        if (N(numTicks)) {
            T.setFPS(numTicks);
            return T
        }
        return g.n ?
            T.getFPS() :
            T.getMeasuredFPS() //returns *ACTUAL* frames
        // / ticks per second//
        // Depending on performance,
        // this may differ from the target frames per second.
    }
    T.e = function (runTimePropReturnedInsteadOfTime) {
        //Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
        T.getEventTime(runTimePropReturnedInsteadOfTime)//df: false ( If true, the runTime property will be returned instead of time  )
    }
    T.m = function (ticks) {
        return T.getMeasuredTickTime(ticks)
    } //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
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
    ct = cjs.Container.prototype
    ct.t = ct.oT = function (fn) {
        var g = G(arguments)
        if (F(fn)) {
            if (!g.n) {
                fn()
            }
            ;
            return this.on('tick', fn)
        }
        else {
            T.on('tick', this);
            return this
        }
    }
    ct.xT = function (fn) {
        this.off('tick', fn)
        return this
    }
}
function dOb() {

    cjs.iDO= function(i){return O(i)&&F(i.getStage)} //cjs.isOb = function (s) {return O(s) && s.parent}
    cjs.rmOb = function (s) {if (

        cjs.iDO(s)//    cjs.isOb(s)

    ) {s.remove()}}
    cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
        return O(ct) && ct.addContainer
    }
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
        if(O(i) && O(i.parent) ){
            i.parent.removeChild(i)
        }

        return i
    } //cant delete 'remove' quite yet

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
function cntr(){
    ct = cjs.Container.prototype // st = s = cjs.Stage.prototype


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
function shap() {
    cjs.Gx = cjs.gx = function (a) {
    return new cjs.Graphics(a)}
    cjs.iH = function (h) {
        return O(h) && h.graphics
    }
    gx = cjs.Graphics.prototype
    h = cjs.Shape.prototype

    gx.poly = function (verts, f, s, width) {
        var that = this
        //  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()
        if (N(verts[0])) {

            _.each(arguments, function (vert) {
                that.lt(vert[0], vert[1])
            });
            this.cp()
        }
        else {
            this.fs(f, s, width)
            _.each(verts, function (vert) {
                that.lt(vert[0], vert[1])
            });
            this.cp()
        }
        return this
    }
    gx.fC = gx.fs = function (c, C, l) {
        var gx = this
        gx.f(oO('c', c || 'z'))
        gx.s(oO('c', C || null))
        gx.ss(N(l) ? l : 2)
        return gx
    }
    gx.sC = function (s, w) {
        var gx = this
        w = N(w) ? w : 2
        s = O(s) ? s : oO('c', s || null)
        gx.s(s)
        gx.ss(w)
        return gx
    }
    h.bs = function (i) {
        var h = this;
        h.graphics.bs(i);
        return h

    }
    h.ef = function () {
        var h = this, gx = h.graphics

        gx.f()
        return h


    }
    h.es = function () {
        var h = this, gx = h.graphics
        gx.es()
        return h

    }
    h.cp = function () {
        this.graphics.cp();
        return this
    }


}

cjs.iT = function (t) {
    if (O(t)) {
        return (t.textBaseline)
    }
}
cjs.m2d = function (a, b, c, d, e, f) {
    if (U(c)) {return new cjs.Matrix2D(1, 0, 0, 1, N(a, 0), N(b, 0))}
    return new cjs.Matrix2D(N(a, 1), N(b, 0), N(c, 0), N(d, 1), N(e, 0), N(f, 0))}
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