Utils = {}
Utils.isNested = isArrayWhoseFirstObjIsAlsoAnArray = Utils.isDataUrl = Du=function(a){ return s$(a).contains('data:') }
Utils.asElement = E=function E(a,b,c){
    if(S(b)){return  s$(a).endsWith(b)   }
    if(F(b)){return _.every(a,b,c) }
    if(O(a)){

        a = O(a.e)? a.e
            :O(a.c)? a.c
            :a

        a=$(a)[0]

        if ( _.isElement(a) ){return a}

    }}
Utils.apply =_a=function(a,b,c,d,e){//_.isUndefined(a)? qq('a')
    return  F(a)? a.apply(c||a, b)
        :S(a)? a.split(b||'/').pop()// after('/')

        :0//:a.animate(b,c,d,e)//
}
Utils.URL =_u=function(a){

    url = function(a){ return 'url("' +a+ '")' }

    return url(a)
    //return _.isUndefined(a)? qq('ul'): url(a)

}
Utils.func =_v=function(a){
    return S(a)?
        function(){Function(a)()}
        :F(a)?a:F(a.value)?a.value():a.value}
Utils.extension = $.extension=_x=function(a, b){
    //if(_.isString(a)){
    return  s$(a).contains('.')  ? a:  s$(a).ensureRight(b||'.png').s
    //}
}
Graphics = window['Graphics'] || {}
Graphics.getCanvas = C=function(a){

    if(_.isObject(a= E(a)||a)){
        return a.canvas? a.canvas  :

            s$(a.toString() ).contains('Canvas')

                ? Q(a)[0]:0}
}
oOo = function oOo(a, b) {
    if (_.isUndefined(b)) {
        return _I(lC(V(oO(a))))
    }
    if (oOo(a)[lC(b)]) {
        return b
    }
}
Oo = _.defaults(function o(a, b) {
    if (D(b)) {
        return o[a] && ( o[a][b] || oOo(a, b))
    }
}, ooo)
oO = _.defaults(function oO(a, b, c) {
    return _.isUndefined(a) ? _.keys(f)
        : '*' == b ? $r(a)
        : D(c) ? oO(oO(c, a), b)
        : _.isUndefined(b) ? D(function (x, y) {
        return oO(a, x, y)
    }, oO[a] || {})
        : (oO[a] && oO[a][b]) ?
        oO[a][b]
        : b
}, ooo)
oC = function (c) {
    return oO('c', c)
}
oK = function (a) {
    return oO('k', a)
}
oT = function (a) {
    return oO('t', a)
}
oE = function (a) {
    return oO('e', a)
}
oI = function (a) {
    return oO('i', a)
}
oS = function (a) {
    return oO('s', a)
}
$o = function o(a, b, c) {
    return _.isUndefined(b) ? _p(o, a) : G(arguments).N ? oO(a, b, c) : Oo(a, b, c)
}
oQ = function (f, m) {
    $(function () {
        Q(m || mf, f)
    })
}
Utils.chompRight = chompRight=function(a,b){return s$(a).chompRight(b).s }
Utils.ensureRight = ensureRight=function(a,b){return

    s$(a).ensureRight(b).s}
Range=function(a,b){var g = G(arguments)

    return N(b)? _.range(a, b)

        : g.P? _.range(a)

        :  _.range(1, (a||10) + 1 )

}
//should be dep? 'fsa'.toUpperCase()
Utils.toUpperCase = toUpperCase=uC=function(a){
    return S(a)? a.toUpperCase()
        :A(a)? _.map(a,function(a){return uC(a)}):a
}
Utils.isUpper = isUpper=Uc=function(a){
    if(S(a)){ //for safety?
        return s$(a).isUpper()
    }}
lC=function(a){return S(a)? a.toLowerCase()
    :A(a)? _.m(a,function(a){return lC(a)}):a }
Lc=function(a){if(S(a)){return s$(a).isLower()}}
_.props = Utils.props =$p=function p(i,t,kK,vf,f){
//get: index thing key //set: index thing key value [function] //setOb: index thing ob [function]
    if(O(kK)){
        _.each(kK,function(v,k){
            p(i,t,k,v,vf)})}                   //setOb

    if(U(kK)){return _p(p,i,t)}
    if(vf=="*"){return p(i,t,kK, $r(kK))} // set it randomly?!
    else if(U(vf)){return t[oO(i,kK)]}   //get
    else{f=f||_s  //function(t,k,v){t[k]=v}  //set
        f(t, oO(i,kK), oO(kK, vf, 'R'))}
    return t}
_.methods = Utils.methods = $m=function f(i,x,m,g){ //=met
    if(U(i)){return}
    if(U(x)){return _p(f,i)}
    if(U(m)){return _p(f,i,x)}// if(U(g)){return _p(f,i,x,m)}
    if(!A(g)){return _a(f,[i,x,m,_r(arguments, 3)])}//met('x',  c.x, 'd',  [i,0,0]     )//met('x',  c.x, 'd',   i,0,0   )
    return _a( x[oO(i,m)], g, x) || x}
nN=function(w){return Boolean(Number(w))}//M=
Nn = _.isNan
J=function(a,b,c){
    if(S(a)){return $.getJSON(a,b,c)};
    return JSON.stringify(a)
}
isWindow = function(a){if(O(a)){
    if( s$(a).contains('Window') ||
        s$(a[0]).contains('Window')){
        return window}
}
}
z=   function(fn) {var g = G(arguments)
    if (g.F_) { return T.t(fn)}
    $('body').empty()
}
$w=window
$$w=$(window)
R=function(n,n2){var num
    n=N(n)?n:1
    n2=N(n2)?n2:0
    return M.round((M.random()*n)+n2)
}
$.tap=function(func){this('body').on('keydown mousedown', func); return this}
_z=function z(a,b,c){return U(b)?_.size(a)
    :N(b)?_z(a)==b
    :_z(a)==_z(b)}
Yano.func = function(){$('body').C('*')}
Yano.interval = 1000
Yano.intervalID = null
//when you call this straight:
//it checks if a Y-func is currently running (by seeing if Y.intervalID is set)
//if it is, it clears the Y-func.. (and then unsets the Y.intervalID)
// if func not running, it does setInterval, saving the returned # as Y.intervalID
// if you pass in a neg, it will only toggle(turn) off
// if you pass in a pos, it will only toggle(turn) on
Yano.toggleFunc = function self(func, interval){
    var args = G(arguments),
        func = args[0],
        interval = args[1]


    if(Yano.intervalID){if(args.P){
        clearInterval(Yano.intervalID)
        Yano.intervalID=null
    }}
    else{
        if(args.N){
            Yano.intervalID = setInterval(Yano.func, Yano.interval)
        }}
} //rat
Yano.setToggleFunc = function (func, interval){
    if(func){Yano.intervalFunc = func}
    if(interval){Yano.interval =  interval}
    Yano.setIntervalID = setInterval(Yano.intervalFunc,  Yano.interval)
    return Yano.toggleFunc
}
//random
Yano.random = Yano.rand = $r = function(a,b){
    a = a||'c'; //cannot be 'color' ?? only abr??
    var values = _.values(oO(a))
    return Oo(a,b) || values[_.random(_.size(values)-1)]
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
    if(O(k)){
        if(g.p){
            if(F(k.u)){z(function(){if(K.u){k.u(K.u)}})}
            if(F(k.d)){z(function(){if(K.d){k.d(K.d)}})}
            if(F(k.l)){z(function(){if(K.l){k.l(K.l)}})}
            if(F(k.r)){z(function(){if(K.r){k.r(K.r)}})}}
        else {_.e(k, function(fn,k){K(k,fn)})}
        return}
    o = s$(k).isUpper()?  {on:'keyup', k:k.toLowerCase()}:  {on:'keydown', k:k}
    if(g.p){   return z(function(){if(K[k]){ fn( )  }})}
    key=Key(o.k)
    return $('body').on( o.on , function(e){    if( e.which==key ){  fn(e) }    })
    function Key(k){var ob={u:38,d:40,l:37,r:39,s:32,e:13}; return ob[k]? ob[k]: k}}
$.update=function(curr, update, g){var res
    if(g.p){res = curr + update}
    else if(g.n){res = curr - update}
    else if(g.m){res = curr * update}
    else if(g.d){res = curr / update}
    else res = update
    return res}
df={}
event()
function event() {
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
}
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
cjs.toColor =toColor = tCl=function(n1,n2,n3,n4){

    return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")"
        :
        $r('c', n1)
}
$PT(); cjs=C$=createjs; T= cjs.Ticker
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
//text
$T= function(a,b,c,d,e){var g = G(arguments), o, t
    return new cjs.Text(a,b,c,d,e)

    o = g.O ? g.f :

    {t: g.f, f:g.s, c:g.t, x:g[3], y:g[4]}

    o.f = N(o.f) ? o.f + 'px Arial' : o.f
    o.f = o.f || '50px Arial'
    o.c = o.c || 'y'
    o.x = N(o.x, 600)
    o.y = N(o.y, 100)
    t = new cjs.Text(o.t, o.f, o.c)
    t.XY(o.x, o.y).drag()

    if (g.n) {t.regX = t.W() / 2}
    if (g.p) {t.bl('alphabetic')}

    return t.bl('middle')

}
cjs.xL= T.s= function(){
    T.removeAllEventListeners()  } // u might say xTHIS but not thisX? i dont know what i am talking about
/* TICKER
 paused : Indicates whether the ticker is currently paused.
 d       delta :  time since the last tick
 t       time : how much  since T  started
 r      runTime  : how much time has T been running for
 */
T.p=function(){T.setPaused(false);return T}
T.P= T.s= function(){T.setPaused(true);return T}
T.$=function(){
    T.setPaused( T.getPaused() == false ? true : false )
    return T}
T.t=   cjs.t =   function(fn){var g=G(arguments)
    if(g.F_){
        if(!g.n){fn()}
        return T.on('tick', fn) // T.addEventListener? return T?
    }
    return   g.n?  T.t('+') - T.t() :
        Number( (T.getTime(g.p?false:true)/1000).toFixed(2) )
}
T.i=function(){
    //indicates the target time (in ms) between ticks
    //default is 50 (20 fps)
    //Note: actual time between ticks may be more than specified,
    //  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
    return T.interval
}
T.f=  function(numTicks){var g=G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
    if(N(numTicks)){T.setFPS(numTicks);return T}
    return g.n?
        T.getFPS():
        T.getMeasuredFPS() //returns *ACTUAL* frames
    // / ticks per second//
    // Depending on performance,
    // this may differ from the target frames per second.
}
T.e= function( runTimePropReturnedInsteadOfTime ) {
    //Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
    T.getEventTime ( runTimePropReturnedInsteadOfTime )//df: false ( If true, the runTime property will be returned instead of time  )
}
T.m=function( ticks  ){
    return T.getMeasuredTickTime (ticks )} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
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
ct.t=  ct.oT=  function(fn){var g=G(arguments)
    if(F(fn)){if(!g.n){fn()}; return this.on('tick', fn) }
    else {T.on('tick', this); return this
    }
}
ct.xT=function(fn){
    this.off( 'tick', fn )
    return this
}
tran()

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
$PT()
$St=function(){var st, g=G(arguments), cv
    //get by canvas ID
    cv = g.A? g.f[0]:
        //if you pass it a canvas OR a $canvas object
        O(g.f)? $(g.f)[0] :
            //create a new canvas
            $.c(g.f||'p',g.s||1200,g.t||600,g[3],g[4])[0]
    st = new cjs.Stage( cv )
    st.cv=   st.c=st.can= $(st.canvas)
    st.cv0=  st.cv[0]
    st.xc= st.cv0.getContext('2d')
    if(g.p){st.t()}
    return st.A()
    //.t()
}

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
St=function(){z()
    s = cjs.stg(1200,600).A()
    h = $h(0,0).a2(s)
    SL(h)
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




load()
function load(){
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
function tran() {
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
}