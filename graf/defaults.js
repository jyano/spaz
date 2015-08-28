

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


