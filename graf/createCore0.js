$l('createCore0')
addToBoth(); function addToBoth(){_.th = _.throttle}

cjs=createjs;

h = cjs.Shape.prototype
gx = cjs.Graphics.prototype
ob = i = cjs.DisplayObject.prototype
s = st = cjs.Stage.prototype
ct = cjs.Container.prototype
q = cjs.LoadQueue.prototype
t = cjs.Text.prototype


cjs.m2d = function (a, b, c, d, e, f) {
    if (U(c)) {return new cjs.Matrix2D(1, 0, 0, 1, N(a, 0), N(b, 0))}
    return new cjs.Matrix2D(N(a, 1), N(b, 0), N(c, 0), N(d, 1), N(e, 0), N(f, 0))
}
P = cjs.P = $Pt = cjs.Pt = function (x, y) {

    if (U(x)) {
        return new C$.Point}
    if (O(x) && O(y)) {
        return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
    }
    if (O(x)) {
        return new cjs.Point(
            x.mx(),
            x.my()
        )
    }
    return new cjs.Point(x, y)
}
T = cjs.Ticker
T.t = cjs.t = cjs.tick = function (fn) {
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
T.p = function () {
    T.setPaused(false);
    return T
}
T.P = T.s = function () {
    T.setPaused(true);
    return T
}
T.s = cjs.xL =function () {T.removeAllEventListeners()}
T.$ = function () {
    T.setPaused(T.getPaused() == false ? true : false)
    return T
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


$.K = function (o) {
    alert('$.K')
    if (!O(o)) {return}
    if (F(o.u)) {
        cjs.tick(function () {
            if ($.K.u) {
                o.u($.K.u)
            }
        })
    }
    if (F(o.d)) {
        cjs.tick(function () {
            if ($.K.d) {
                o.d($.K.d)
            }
        })
    }
    if (F(o.l)) {
        cjs.tick(function () {
            if ($.K.l) {
                o.l($.K.l)
            }
        })
    }
    if (F(o.r)) {
        cjs.tick(function () {
            if ($.K.r) {
                o.r($.K.r)
            }
        })
    }
}

$.k =   $.kD =  function self(key, fn) {

    if (O(key)) {
        _.e(key, function (fn, k) {
            if (s$(k).isUpper()) {
                $.kU(k.toLowerCase(), fn)
            }
            else {
                $.kD(k, fn)
            }
        })
        return
    }

    if (KEYOB[key]) {
        key = KEYOB[key]
    }

    $('body').on('keydown', function (e) {
        if (e.which == key) {

            fn(e, $.K)
        }
    })
}

keyObj = {
    up: 38, u: 38,
    down: 40, d: 40,
    left: 37, l: 37,
    right: 39, r: 39,
    space: 32, s: 32,
    enter: 13, e: 13
}
$.kU =   function (key, funk) {

    if (keyObj[key]) {
        key = keyObj[key]
    }
    $('body').on('keyup', function (e) {

        if (e.which == key) {
            funk(e, $.K)
        }
    })
}
K = function (k, fn) {$l('K')
    var g = G(arguments), o, key
    if (g.u) {
        if (K._loaded) {
            return
        }
        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            K.l = $.K.l = $.K.left = true
            $.K.dir = 'left'
            K.l = 1;
            K.L = 0
        })
        $.kU('l', function () {
            if ($.test) {
                $l('left lifted')
            }
            K.l = $.K.l = $.K.left = false
            K.l = 0;
            K.L = 1
        })
        $.kD('r', function () {
            if ($.test) {
                $l('right pressed')
            }
            K.r = $.K.r = $.K.right = true
            $.K.dir = 'right'
            K.r = 1;
            K.R = 0
        })
        $.kU('r', function () {
            if ($.test) {
                $l('right lifted')
            }
            $.K.r = $.K.right = false
            K.r = 0;
            K.R = 1
        })
        $.kD('u', function () {
            if ($.test) {
                $l('up pressed')
            }
            $.K.u = $.K.up = true
            K.u = 1;
            K.U = 0
        })
        $.kU('u', function () {
            if ($.test) {
                $l('up lifted')
            }
            $.K.u = $.K.up = false
            K.u = 0;
            K.U = 1
        })
        $.kD('d', function () {
            if ($.test) {
                $l('down pressed')
            }
            $.K.d = $.K.down = true
            K.d = 1;
            K.D = 0
        })
        $.kU('d', function () {
            if ($.test) {
                $l('down lifted')
            }
            $.K.d = $.K.down = false
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


//cjs.Keys= $.K


