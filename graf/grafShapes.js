df={b: function () {
    var g = G(arguments), o
    o = g.A ? {hs: g.f} : g.f || {}
    o.hs = o.hs || []
    o.i = o.i || 'me'
    return o
},
    h:function (o) {
        o = o || {}
        if (U(o.v)) {
            o.v = [[-100, 50], [0, -50], [100, 0]]
        }
        //o.v= _.m(o.v, function(v){v=V(v);return [v.x,v.y]})
        o.c = o.c || 'p'
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.a = _.tN(o.a)
        o.r = N(o.r, 40)
        o.w = N(o.w, 50)
        o.h = N(o.h, o.w || 100)
        o.d = N(o.d, 0.5)
        o.b = N(o.b, 0.5)
        o.f = N(o.f, 0.5)
        o.s = D(o.s) ? o.s : 0
        o.o = N(o.o, 1)
        o.q = D(q) ? o.q : true
        return o
    }
}
df.rec=  function (o){
    o.al=N(o.al,1)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    o.x =  N(o.x,0)
    o.y =  N(o.y,0)
    o.a =  N(o.a,0)
    o.w=N(o.w,50)
    o.h=N(o.h,50)
    return o
}
df.cov = function(x,y,c,C,l,l2){

    alert('b2d.cov')
    var g=G(arguments),x=g[0],y=g[1],c=g[2],C=g[3],l=g[4],l2=g[5],

        o = N(c)? {x:x, y:y, a:c, c:C, C:l, l:l2}
            : N(x)? {x:x, y:y, c:c, C:C, l:l}
            : x,
        h = new cjs.Shape()

    df.oDef(o)

    h.XY(o.x,o.y).rot(o.a).c(o.c,o.C,o.l)

    if(o.d){h.drag()}

    return h
}
df.oDef=   function(o){
    o=o||{}
    o.x =  N(o.x,0)
    o.y =  N(o.y,0)
    o.a =  N(o.a,0)
    o.w =  N(o.w, 50)
    o.h =  N(o.h, 50)
    o.r =  N(o.r, 50)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    return o
}
df.grad=function(o){

    o=o||{}
    o.c1 = oO('c',o.c1||'z')
    o.c2 = oO('c',o.c2||'w')
    o.s1 = N(o.s1)
    o.s2 = N(o.s2, 1)
    o.x1 = N(o.x1)
    o.y1 = N(o.y1)
    return o
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

bsDF=function(o){o=o||{}
    o.x = N(o.x, 0);
    o.y = N(o.y, 0);
    o.rt = N(o.rt, 0);
    o.al = N(o.al, 1)
    return o
}

h._dc=function(o){
    var h=this,gx=h.graphics,g=G(arguments)
    gx.dc(N(o.x,0),N(o.y,0),N(o.r,50))
    return h
}
h.cirs=function(g){g.e(function(c){this.dc(c)}); return this}
h.dc= function(x,y,r){var h=this,gx=h.graphics,g=G(arguments),o
    h.cp()
    if(g.A){return $a(h,'dc',g.f)}
    if(g.OO_){return h.cirs(g)}
    o = g.O?g.f: g.$?{r:g.f}: {x:g.f,y:g.s,r:g.t}
    return h._dc(o)
}
$Cir=   function(){var g = G(arguments), o
    o = g.S_? {c:g.f,x:g.s,y:g.t,r:g[3]}: {x:g.f,y:g.s,r:g.t}
    return $H(o.c,o.x,o.y).dc(o.r)

}
h.cir= function () {var h = this, gx = h.graphics, g = G(arguments), o
    o = g.O ? g.f :
        N(g.t) ?  {x:g.f,y:g.s,r:g.t, c: g[3], C: g[4], l: g[5]} :
            N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
                g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]}:
                {c:g.f,C:g.s,l:g.t}

    h.c(o)
    if(o.bf){
        if(N(o.bf)){o.bm = 'me'}
        if(F(Q)){h.bf(o.bf, function(){h.dc(o)})}
        else {o.tf = o.tf || null; h.bf(o.bf, o.tf).dc(o)}
    }
    else {h.dc(o)}
    h.alpha = N(o.al, 1)
    return h
}
// 'h.cp()': i kinda like how it stroke-connects my cirs
//h.ef().es() //if (g.O_ && A(g.s)) {_.e(g.s, function(c){h.cir(_.x(c, g.f))}); return h }
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
    df.oDef(o)
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
