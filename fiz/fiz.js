b2d.cir=  function(r,x,y, d){
    alert('b2d.cir')

    var g= G(arguments), o, fD, h
       o= g.O? g.f: { x: g.f, y: g.s, r: g.t, d: g[3]}

    o.x= N(o.x,0)
    o.y= N(o.y,0)
    o.r= N(o.r,60)
    o.d= N(o.d,1)
    fD=new b2d.FixtureDef
    h = new b2d.CircleShape(r/30)
    h.SetLocalPosition(V(x,y).div())
    fD.shape = h
    fD.d(d)
    if(g.n){fD.isSensor=true}
    return fD
}








b2d.fD=b2d.f= function(h){var g=G(arguments),
    fD=new b2d.FixtureDef
    if(g.n){fD.isSensor = true}
    if(h){fD.shape = h}
    return fD
}
b2d.pH= function(W,H,x,y,a){//makes a fixtDef with a polyShape
    //| 50,200[[,200,60,45
//| [20,300],.. //-> g.a(p,'arr')// -> g.a(p.arr)


    var g=G(arguments),

    p=new b2d.PolygonShape()

    if(g.O){}
    if(g.N_){
        p.box(g.f, g.s, g.t, g[3], g[4])
    }
    else if(g.OO_){$a(p, 'arr', g)}
    return p
}
b2d.pol = function(){
    return b2d.fD($a(b2d.pH, arguments)).d(1).fr(.2).r(.2)
}
b2d.rec= function(){var g = G(arguments), r, fD, o, v,p=b2d.pH()
    if(g.OO_){p.arr(g)}  //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!

    else {
        o=g.O?g.f:
        {w:g.f,h:g.s,x:g.t,y:g[3],a:g[4],d:g[5]}
        p.box(o)}

    fD=b2d.fD(p).d(N(o.d,.5))
    if (g.n){fD.isSensor = true}

    return fD

    /*
     //will set cols unless you pass in 0
     if(o.c==0){o.c=null}
     if(o.c==00){o.c=null;o.C=null}
     if(o.c=='*'){o.c=$r()}
     if(o.c=='**'){o.c=$r();o.C=$r()}
     o.c =o.c||'z'
     o.C =o.C||'w'
     o.l = _.tN(o.l,4)
     o.c1 = o.c1||'z'
     o.c2 = o.c2||'w'
     o.s1= _.tN(o.s1)
     o.s2= _.tN(o.s2,1)
     //
     o.x1 = _.tN(o.x1)
     o.y1 = _.tN(o.y1)
     o.x2 =_.tN(o.x2);
     o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
     o.r1=_.tN(o.r1)
     o.r2=_.tN(o.r2,200)
     // o.i image
     //o.k kind
     // o.p  layer position


     //o.bm//o.bM
     //o.g gradient

     //o.m mass
     //o.t type
     // o.v = o.v || [] //verts
     //o.X
     //o.z clr
     */
}
b2d.tB = b2d.toBody=function(b){
    return b2d.iB(b)? b:
        b2d.iF(b)? b.B():
            null }
w.bs=  w.bL =function(){return this.GetBodyList()}    //can be result of w.b if g.u//= w.getBodyList
w.S=function(){var w=this, g=G(arguments),
    bD, b, fs, k, o//,D=b2d.D
    if(S(_.l(g))){ k=g.pop() }
    //here, we just have two options..
    // we can pass in x and y as numbers..
    // or as an object
    // the rest (non-position-related) args form an array of fixtures
    o= g.N_? {b:V(g.f, g.s), f:_.r(g,2) }:  {
        b:V(g.f), f:_.r(g)
    }

    o.b = b2d.S(o.b)

    if(k){o.k=k}
    b = w.cB(o.b)

    function maybe() {
        //array of multiple fixtures
        if (g.A) {
            alert('see w.D')
            $l('mult')
            _.e(o.f, function (f) {
                if (g.n) {
                    b.f(f, '-')
                } else {
                    b.f(f)
                }
            })
            if (o.k) {
                b.K(o.k)
            }
            return b
        }
    }
    if(g.n){o.f.push('-')}
    b.f.apply(b,o.f)
    if(o.k){b.K(o.k)}
    return b
}
w.n= w.count = w.getBodyCount = w.bC = w.gBC=function(){
    return this.GetBodyCount() }
w.Q=function () {
    var w = this, g = G(arguments), o
    o = g.O ? g.f :
        g.S_ && N(g.s) ? {k: g.f, x: g.s, y: g.t, fn: g[3]} :
            g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
                g.F_ ? _.x({fn: g.f, n: 0}, O(g.s) ? {x1: g.s.x, y1: g.s.y} : {
                    x1: g.s,
                    y1: g.t,
                    x2: g[3],
                    y2: g[4]
                }) :
                    g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
                    {x1: g.f, x2: g.s, fn: g.t}

    o.n = 0
    w.QueryAABB(function (f) {
            var res;
            o.n++
            res = o.fn(f, f.B(), o.n)
            if (res !== false) {
                return true
            }
        },
        b2d.AB(o.x1, o.y1, o.x2, o.y2))
    return w
    //but it makes a rectangle not square ??
}//w.QUERY =
w.rad = function (x, y, r, fn) {
    return this.Q({
        x1: x - r, y1: y - r, x2: x + r, y2: y + r, fn: fn
    })
}
w.query= w.q = function () {
    var w = this, g = G(arguments), o, fx

    o = g.S_ && N(g.s) ? {k: g.f, x: g.s, y: g.t, fn: g[3]} :
        g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
            g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g[3]} :
                g.A_ ? {x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
                {x: g.f.x, y: g.f.y, fn: g.s, k: g.t}

    w.QueryAABB(
        function (f) {
            if (f && f.of(o.k) && f.tP(o.x, o.y)) {
                fx = f;
                return
            }
            return true
        },
        b2d.AB(o.x, o.y)
    )

    if (fx) {
        if (F(o.fn)) {
            _.b(o.fn, fx)(fx);
            return w
        }
        return fx
    }

}
b2d.edg= function(x1,y1, x2,y2){
    var fd = b2d.pol()
    fd.shape.SetAsEdge(V(x1,y1,'-') , V(x2, y2,'-') )
    return fd
}

killBods()
iter()
obvious()
isTy()
mouse()
step()
makeBodDef()

function killBods() {
    w.xB = w.Xx = w.Xb = function (b) {
        var w = this
        if (U(b)) {
            w.e(function (b) {
                w.xB(b)
            })
        }
        else {
            w.DestroyBody(b)
        }
        return w
    }
}
function iter(){
    w.eEv = w.eachEvery = function (fn) {
        var w = this
        z(function () {
            w.e(fn)
        })
        return w
    }
    w.inEv = function (n1, n2, fn) {
        _.in(n1, function () {
            _.ev(n2, function () {
                fn()
            })
        })
    }
    w.evIn = function (n1, n2, fn) {
        _.ev(n1, function () {
            _.in(n2, function () {
                fn()
            })
        })
    }

    w.e= w.each= function(){var w=this, g=G(arguments), o,
        bs=w.GetBodyList(), k, b,arr
        o = g.S_? {k:g.f, fn:g.s}: {fn:g.f}
        if(g.u){ alert('w.e') }
        arr=[]
        while(bs){b=bs;  bs=bs.N()
            if(b.of(o.k)){  arr.push(b) }
        }
        _.e(arr, function(b){  o.fn(b)  })
        return w
    }
}
function obvious() {

    w.cB= w.CreateBody
    w.gB = function () {
        return this.GetGroundBody()
    }
    w.G = function (x, y) {
        var w = this,
            v, currG = w.GetGravity()
        if (U(x)) {
            return currG
        }
        if (N(x)) {
            v = N(y) ? V(x, y) : V(0, x)
        }
        else if (x == 'flip') {
            v = V(-currG.x, -currG.y)
        }
        w.SetGravity(v)
        return w
    }

}
function makeBodDef(){

 b2d.BD=  b2d.dBD= b2d.dD= b2d.D= b2d.dyn=function(x,y){
        var v=V(x,y)
        return b2d.bD(v.x, v.y).dyn()
    }

    b2d.bD= function(x,y){var v=V(x,y),
        bD = new b2BodyDef()
        return bD.XY(N(v.x,100),N(v.y,100))}
    b2d.sD= b2d.S=b2d.stat=function(x,y){
        return b2d.bD(x,y).stat()
    }
    b2d.kD= function(x,y){
        return b2d.bD(x,y).T(1)
    }

}
function isTy(){

    b2d.iV = b2d.isV = function (v) {
        if (v) {
            return v.constructor.name == "b2Vec2"
        }
    }
    b2d.iH = function (h) {
        var typ
        if (O(h)) {
            typ = h.constructor.name
            return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
        }
    }
    b2d.iBD = b2d.isBDef = function (bd) {
        return O(bd) && F(bd.b2BodyDef)
    }
    b2d.iB = b2d.isB = b2d.isBody = function (b) {
        if (O(b)) {
            return b.constructor.name == 'b2Body'
        }
    }
    b2d.iFD = b2d.isFD = function (fD) {return O(fD) && fD.b2FixtureDef}

    b2d.iF = function (f) {
        if (!f) {return false}
        return f.constructor.name == "b2Fixture"
    }
}
function alpha(){

    b2d.Common.Math.b2Transform.prototype.toArr = function () {

        alert('b2d.Common.Math.b2Transform.prototype.toArr')
        var tf = this,
            pos = tf.position,
            R = tf.R,
            col1 = R.col1,
            col2 = R.col2


        return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
    }



}

function mouse() {
    w.md = function (fn) {
        var w = this
        w.i.c.mousedown(function (e) {
            var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
            w.q(w.mx, w.my, function (f) {
                if (f) {
                    o.f = f;
                    o.b = f.B()
                }
            })
            fn(o)
        })
        return w
    }
    w.mu = function (fn) {
        var w = this

        $(w.i.canvas)
            .mouseup(function (e) {
                fn({x: w.mx, y: w.my, e: e})
            })

        return w

    }
    w.mm = function (fn) {
        var w = this, g = G(arguments)
        $.mousemove(function (e) {
            var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
            fn(o)
        })
        return w
    }
    w.$ = function (fn) {
        var w = this
        w.UI().click(function (e) {
            fn({x: w.mx, y: w.my, e: e})
        })
        return w
    }
    w.$$ = function (fn) {
        var w = this
        w.UI().dblclick(function (e) {
            fn({x: w.mx, y: w.my, e: e})
        })
        return w
    }
    w.mdq = function (fn) {
        var w = this
        w.md(function (e) {
            w.q(e.x, e.y, function (f) {
                fn(f, e)
            })
        })
        return this
    }
    w.e$ = function () {
        var g = G(arguments), o
        o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
        this.e(function (b) {
            if (b.of(o.k)) {
                b.$(o.fn)
            }
        })
        return this
    }
}
function step() {
    w.dbD = w.bug = w.debugDraw = function () {
        var w = this, g = G(arguments)


        b2d.dbD = b2d.debugDraw = function (sp, sc, flags, al, line) {

            var dd = new b2d.DebugDraw()

            //can pass in either canvas or context
            if ($.isCan(sp)) {
                sp = sp.ctx()
            }

            if (sp) {
                dd.sprite(sp)
            }
            if (sc) {
                dd.scale(sc)
            }
            if (flags) {
                dd.flags(flags)
            }

            dd.alpha(N(al, 0.5))

            // dd.line( N(line)? line :1 )
            // dd.SetLineThickness(1)
            return dd
        }
        // this.scale = dd.scale()
        w.SetDebugDraw(
            b2d.debugDraw.apply(null, g)
        )

        return w

    }
    w.step = function (time, a, b) {
        var w = this
        w.Step(time, N(a, 8), N(b, 3))
        return w

    }
    w.cF = w.clear = function () {
        var w = this
        w.ClearForces()
        return w
    }
}
wowOld=function(){/*

 b.aI=function(sc){var b=this;
 b.i(b.v().m(N(sc,100))
 return b}
 //ApplyLinearImpulse(forceDirection, body->GetPosition(), true);

 */
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
    b2d.AHx=  b2d.AShapex= function(pam, p2){//dep .. use polyH
        var ag,arr,h
        ag=(p2)? arguments: pam
        arr = _.m(ag, function(v){return V(v).div()})
        h = b2d.pH()
        h.arr( arr )
        return h
    }
    pH.arr=  function(){var pH=this
        var v = b2d.verts.apply(null, arguments)

        pH.SetAsArray(v, v.length)

        return pH

    }
//make polyShape (by box or arr) for a fD
    b2d.pH=  b2d.polyH=function me(W,H,x,y,a){var g=G(arguments),
        p=new b2d.PolygonShape()
        if(g.N_){//| 50,200[[,200,60,45
            p.box(g.f,g.s,g.t,g[3],g[4])}

        else if(g.O_){//| [20,300],..

            $a(p, 'arr', g)

            //-> g.a(p,'arr')
            // -> g.a(p.arr)
        }
        return p
    }
    pH.set= function(){var pH=this, g=G(arguments)
        if(N(g[0])){
            pH.box(g[0],g[1],g[2],g[3],g[4])}
        else if(O(g[0])){
            pH.arr.apply(pH,g)}
        return pH
    }
}
//hmm.. fixt doesnt have a rel loc.. its shape does
//what if u want to change 'shape' of shape, but keep its rel loc?
