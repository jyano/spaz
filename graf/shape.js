$df =  {
    bsDF:  function (o) {
        o = o || {}
        o.x = N(o.x, 0);
        o.y = N(o.y, 0);
        o.rt = N(o.rt, 0);
        o.al = N(o.al, 1)
        return o
    },
    xyr:  function (o) {
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.r = N(o.r, 0)
        return o
    },
    im:  function (o) {o.i = o.i || 'me'; o.al = N(o.al, 1)},
    sc:  function (o) {
        o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
        if (!A(o.sc)) {
            o.sc = [o.sc, o.sc]
        }
        ;
        return o
    },
    b: function () {
        var g = G(arguments), o
        o = g.A ? {hs: g.f} : g.f || {}
        o.hs = o.hs || []
        o.i = o.i || 'me'
        return o
    },
    h: function (o) {
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
    },
    rec : function (o) {
        o.al = N(o.al, 1)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.a = N(o.a, 0)
        o.w = N(o.w, 50)
        o.h = N(o.h, 50)
        return o
    },
    cov : function (x, y, c, C, l, l2) {

        alert('b2d.cov')
        var g = G(arguments), x = g[0], y = g[1], c = g[2], C = g[3], l = g[4], l2 = g[5],

            o = N(c) ? {x: x, y: y, a: c, c: C, C: l, l: l2}
                : N(x) ? {x: x, y: y, c: c, C: C, l: l}
                : x,
            h = new cjs.Shape()

        df.oDef(o)

        h.XY(o.x, o.y).rot(o.a).c(o.c, o.C, o.l)

        if (o.d) {
            h.drag()
        }

        return h
    },
    oDef : function (o) {
        o = o || {}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.a = N(o.a, 0)
        o.w = N(o.w, 50)
        o.h = N(o.h, 50)
        o.r = N(o.r, 50)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        return o
    },
    grad : function (o) {

        o = o || {}
        o.c1 = oO('c', o.c1 || 'z')
        o.c2 = oO('c', o.c2 || 'w')
        o.s1 = N(o.s1)
        o.s2 = N(o.s2, 1)
        o.x1 = N(o.x1)
        o.y1 = N(o.y1)
        return o
    }
}



turtle2 = [['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]],  ['yellow',[-60, -30], [-50,-60], [-20,-45], [-15,-35] ], ['yellow', [-50,10],[-50,-10],[-40,-10],[-40,10]], ['yellow', [-10,10],[-10,-10],[0,-10],[0,10]]]

dick = [
    [50, 300, 0, -100],
    [50, 100, 150],
    [50, -100, 150]
]
guyInBed = [
    [30],
    [20, 30, 30],
    [100, 30]
]

cjs.somePolyFixt = [
    [
        [-100, 0], [0, -100],
        [100, 0], [60, 50]]]
cjs.compoundShape = [
    [50, 10],
    [60, 30, 0, 0, 40],
    [120, 30, 0, 0, 29],
    [60, 10, 0, 50, 60],
    [84, 10, 15, 80, -120]
]
cjs.compoundShape2 = [
    [50, 10],
    [20, 20],
    [20, 10, 0, 0, 10],
    [40, 10, 50, 0, 45],
    [84, 10, 15, 80, -120],
    [60, 10, 0, 50, 60 ]
]
cjs.compoundStar = [
    [10, 10],
    [20],
    [4, 80, 10, 30, 135],
    [4, 80, 0, 0, 45],
    [4, 80, 100, 0, 90],
    [4, 80, 0, 0, 180]
]


// 'h.cp()': i kinda like how it stroke-connects my cirs
//h.ef().es() //if (g.O_ && A(g.s)) {_.e(g.s, function(c){h.cir(_.x(c, g.f))}); return h }
