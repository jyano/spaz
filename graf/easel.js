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