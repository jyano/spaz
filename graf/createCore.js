h = cjs.Shape.prototype
gx = cjs.Graphics.prototype
ob = i = cjs.DisplayObject.prototype
s = st = cjs.Stage.prototype
ct = cjs.Container.prototype
q = cjs.LoadQueue.prototype
t = cjs.Text.prototype

$l('createCore')
cjs.rmOb = function (ob) {

    if (cjs.iDO(ob)) {
        ob.rm()
    }
}
cjs.iDO= function(i){return O(i)&&F(i.getStage)} //cjs.isOb = function (s) {return O(s) && s.parent}

i.n = function (name) {
    if (U(name)) {return this.name}
    this.name = name; return this}
i.shad = function (color, x, y, blur) {
    cjs.shad = function (color, x, y, blur) {
        alert('cjs.shad')
        if (color == '-') {
            return new cjs.Shadow(null, 0, 0, 0)
        }
        color = S(color) ? color : 'a'
        blur = N(blur) ? blur : 10
        x = N(x) ? x : 0
        y = N(y) ? y : 0
        var shad = new cjs.Shadow(oO('c', color), x, y, blur)
        return shad
    }// = cjs.shadow

    var shadow = cjs.shad(color, x, y, blur)
    this.shadow = shadow
    return this
}
i.St = i.S = i.st = function (){return this.getStage()}
i.P = function (){return this.parent}
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
    if (N(y)) {this.Y(y)}
    return this}
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
i.rm = function () {
    var i = this
    if (O(i) && O(i.parent)) {
        i.parent.removeChild(i)
    }

    return i
} //cant delete 'remove' quite yet
i.hd = function () {
    this.visible = false;
    return this
}
i.sib = function () {return this.P().ch()}

$l('i.dims')
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
    if (g.u) {
        return {x: i.x, y: i.y}
    }
    v = V(g.f, g.s)
    x = v.x
    y = N(v.y, v.x)
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
i.rt = function () {
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
i.bd = i.bounds = function (a, b, c, d) {
    var i = this

    this.nominalBounds = new cjs.Rectangle(a, b, c, d)

    return this

}



warp()

comp()
cache()


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
i.gL = i.gTL = function (x, y) {
    var i = this
    if (O(x)) {
        y = x.y;
        x = x.x
    }
    return i.globalToLocal(x, y)
}
i.uM = function () {
    var i = this, s = i.St()
    if (s.mouseInBounds) {
        var pt = i.gTL(s.mouseX, s.mouseY)
        return i.hT(pt)
    }
}
i.toFront = function () {
    return this.ix(this.sib().length - 1)
}
i.belowStg = function () {
    return this.y > this.St().H()
}
i.in = i.within = i.inStage = function () {
    var ob = this,
        st = ob.st(),
        g = G(arguments),
        x = ob.x,
        y = ob.y,
        w = st.W() - 100,
        h = st.H() - 100,

        inn = x > 0 && x < w && y > 0 && y < h

    if (g.n) {
        if (!inn) {
            ob.rm()
        }
    }

    return inn
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
i.tickX = function (fn) {
    var i = this
    cjs.t(function () {
        i.X(fn())
    })
    return i
}
i.tickY = function (fn) {
    var i = this
    cjs.t(function () {
        i.Y(fn())
    })
    return i
}
i.dg = i.drag = function () {
    var i = this;
    SL(i);
    return i
} // ~ scroll
i.$ = function (fn) {
    return this.on('click', fn)
}
i.$$ = function (fn) {
    return this.on('dblclick', fn)
}

function cache() {
    i.cC = i.cc = function () {
        return this.cacheCanvas
    }
    i.ca = function () {
        var ob = this,
            st = ob.St(),
            g = G(arguments), o, op, i
        if (O(ob.image && !g.n && !g.p)) {
            ob.cache($(ob.image)[0])
        }
        if (ob.cacheCanvas && !g.p && (U(g[0]) || S(g[0]) || g.n)) {
            op = g[0];
            ob.updateCache(op);
            return ob
        }
        o = O(g[0]) ? {i: g[0], x: g[1], y: [2]} : N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} : N(g[1]) ? {
            w: g[0],
            h: g[1]
        } : {}
        if (O(o.i)) {
            o.i = o.i.image ? o.i.image : $(o.i)[0];
            if (!g.n) {
                if (ob.image) {
                    ob = ob.image
                }
                ob = $(ob)[0]
                ob.cache(0, 0, ob.width, ob.height)
            }
        }
        o.x = N(o.x) ? o.x : 0;
        o.y = N(o.y) ? o.y : 0
        o.w = N(o.w) ? o.w : O(o.i) ? o.i.width : N(o.h) ? o.h : st ? st.W() : 0
        o.h = N(o.h) ? o.h : O(o.i) ? o.i.height : st ? st.H() : 0
        ob.cache(o.x, o.y, o.w, o.h)
        return ob
    }
}
function warp() {
    i.warpX = function (lo, hi, cush) {
        alert('i.warpX')
        var i = this,
            wrp = M.wrp(lo, hi, cush)
        cjs.t(function () {
            i.x = wrp(i.x)
        })
        return i
    }
    i.warpY = function (lo, hi, cush) {
        alert('i.warpY')
        var i = this, wrp = M.wrp(lo, hi, cush)
        cjs.t(function () {
            i.y = wrp(i.y)
        })
        return i
    }
    i.warp = function (n) {
        var i = this, s = i.S(), n = n || 0
        i.warpX(0, s.W(), n)
        i.warpY(0, s.H(), n)
        return i
    }
}

function comp(){
    i.o=function(o){this.compositeOperation = o;return this}
    i.Ds= i.dO=function(){
        this.o('destination-out'); return this}
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
$Bm=  function(bm){var g=G(arguments)
    bm=  new cjs.Bitmap(bm)
    if(g.p){ bm.drag() }
    return bm
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
    function newCan(g){
        return  $.c(g.f || 'p', g.s || 1200, g.t || 600, g[3], g[4])[0]}
    return st
    function St(cv){
        var s= new cjs.Stage(cv)
        return s
    }
}
St = function () {z(); var g = G(arguments)
    st = s = $St(g[0] || 'p', 1200, 600)
    h = $h(0, 0).a2(s)
    if (g.p) {
        SL(h)
    }
    return s
}
st.N = st.next = function (next) {
    if (U(next)) {
        return this.nextStage
    }
    ;
    this.nextStage = next;
    return this
}
st.du = function () {
    alert('st.du')
    return this.canvas.toDataURL()
}
st.ab = st.abs = function (x, y) {
    this.can.abs(x, y);
    return this
}
st.trDr = function (){
    var st = this
    st._md = 0
    st.MD(function () {
        st._md = 1
    })
    st.MU(function () {
        st._md = 0
    })
    return this
}
st.Bm = function (i) {
    return $Bm(i).a2(this)
}
mou()
balls()
dims()
function dims(){
    st.W = function (a) {
        if (U(a)) {
            return this.canvas.width
        }
        this.canvas.width = a;
        return this}
    st.H = function (a) {
        if (U(a)) {
            return this.canvas.height
        }
        this.canvas.height = a;
        return this
    }
    st.WH = function (w, h) {
        var st = this;
        if (U(w)) {
            return V(st.W(), st.H())
        }
        if (N(w)) {
            st.W(w)
        }
        if (N(h)) {
            st.H(h)
        }
        ;
        return st
    }

    st.hW = function () {
        return this.W() / 2
    }
    st.hH = function () {
        return this.H() / 2
    }
}
function mou() {
    st.MD = function (fn) {
        return this.on('stagemousedown', fn)
    }
    st.MM = function (fn) {
        return this.on('stagemousemove', fn)
    }
    st.MU = function (fn) {
        return this.on('stagemouseup', fn)
    }

    st.mO = function () {
        var g = G(arguments), st = this
        if (U(g[0]) || g[0]) {
            st.enableMouseOver(N(g[0]) ? g[0] : true)
        }
        else {
            st.enableMouseOver(false)
        }
        return st
    }
    st.m = function (ob) {
        //uses Point
        var st = this
        if (U(ob)) {
            return cjs.P(st.mouseX, st.mouseY)
        }
        if (O(ob)) {
            if (ob.d) {
                st.MD(ob.d)
            }
            ;
            if (ob.u) {
                st.MU(ob.u)
            }
            ;
            if (ob.m) {
                st.MM(ob.m)
            }
        }
        return st
    }
    st.mx = st.mX = function () {
        return this.m().x
    }
    st.my = st.mY = function () {
        return this.m().y
    }
}
function balls(){
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
    }}



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