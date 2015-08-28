cjs= createjs;
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
eD.init=function(){alert('eD.init')
    var eD=this
    eD.initialize.apply(eD, arguments)
    return eD
}
cjs.bulletHit = function (bullet, inWhat) {alert('bullletHit')
    var x = bullet.centerX(), y = bullet.centerY()
    var res = M.pointInCircle(x, y, {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
    if (res == true) {$l('hit!')}
    return res
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

K=  function(k,fn) {var g = G(arguments), o,key
    if(g.u){
        if (K._loaded) {return}
        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            K.l = cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
            K.l = 1;
            K.L = 0})
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
            if ($.test) {$l('down pressed')}
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
    if(O(k)){if(g.p){
        if(F(k.u)){z(function(){if(K.u){k.u(K.u)}})}
        if(F(k.d)){z(function(){if(K.d){k.d(K.d)}})}
        if(F(k.l)){z(function(){if(K.l){k.l(K.l)}})}
        if(F(k.r)){z(function(){if(K.r){k.r(K.r)}})}}
    else {_.e(k, function(fn,k){K(k,fn)})}
        return}
    o = s$(k).isUpper()?  {on:'keyup', k:k.toLowerCase()}:  {on:'keydown', k:k}
    if(g.p){return z(function(){if(K[k]){ fn( )  }})}
    key=Key(o.k)
    return $('body').on( o.on , function(e){    if( e.which==key ){  fn(e) }    })
    function Key(k){
        var ob={u:38,d:40,l:37,r:39,s:32,e:13};
        return ob[k]? ob[k]: k
    }

}


T= cjs.Ticker

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