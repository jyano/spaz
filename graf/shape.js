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
v1 = vs = [[-100, 0], [0, -100], [100, -50], [0, -50]]

turtle = [
    ['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]]

    ,  ['yellow',[10,-10],[20,-30],[50,-15], [45,-5]]

    , ['yellow',

        [-50,10],[-50,-10],[-40,-10],[-40,10]
    ]

    , ['yellow',

        [-10,10],[-10,-10],[0,-10],[0,10]
    ]
]
turtle2 = [['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]],  ['yellow',[-60, -30], [-50,-60], [-20,-45], [-15,-35] ], ['yellow', [-50,10],[-50,-10],[-40,-10],[-40,10]], ['yellow', [-10,10],[-10,-10],[0,-10],[0,10]]]

pin = [
    ['o', [-20, 20], [0, -80], [20, 20], [0, -40]],
    ['w', 8, 0, -75],
    ['w', 8, -20, 20],
    ['w', 8, 20, 20]
]

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

h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
h.lt = function (x, y) {
    var h = this, gx = h.graphics, v
    if (A(x) && O(x[0])) {
        return h.lt.apply(h, x)
    }
    if (N(x)) {
        gx.lt(x, y);
        return h
    }
    _.e(arguments, function (v) {
        v = V(v)
        h.lt(v.x, v.y)
    })
    return h
}
h.mt = function (x, y) {
    var h = this,
        gx = h.graphics, g = arguments, x = g[0], y = g[1], v
    if (A(g[0]) && O(g[0][0])) {
        _.e(g, function (v) {
            h.mt.apply(h, v)
        });
        return h
    }


    if (N(x)) {
        v = V(x, y);
        gx.mt(v.x, v.y)
    }

    else {
        v = V(_.f(g))
        h.mt(v.x, v.y)
        _.e(_.r(g), function (v) {
            v = V(v)
            h.lt(v.x, v.y)
        })
    }

    return h
}

h.col = h.fs = function () {
    var h = this, gx = h.graphics, g = G(arguments)
    gx.fs.apply(gx, g)
    return h
}
h.z = h.clr = function () {
    this.graphics.clear();
    return this

}
h.c = h.f = function (c, C, l) {
    var h = this, gx = h.graphics, g = G(arguments), o

    o = g.O ? g.f : g.m ? {c: '*'} : g.f == '**' ? {c: '**'} : g.f == '***' ? {c: '***'} :
        g.u ? {c: 'z', C: 'w', l: 6} :
            // 'c-C-l'
            N(g.s) ? {c: g.f, l: g.s} : g.N_ ? {l: g.f, C: g.s} : {c: g.f, C: g.s, l: g.t}

    if (A(o.c)) {
        if (N(o.c[1])) {
            o.l = o.c[1];
            o.c = o.c[0]
        }
        else if (N(o.c[0])) {
            o.l = o.c[0];
            o.C = o.c[1]
        }
        else {
            o.l = o.c[2];
            o.C = o.c[1];
            o.c = o.c[0]
        }
    }

    if (A(o.C)) {
        o.l = o.C[1];
        o.C = o.C[0]
    }

    if (o.c == 0) {
        gx.f(null);
        o.c = 'X'
    }
    if (o.C == 0) {
        gx.s(null);
        o.C = 'X'
    }
    if (o.c == 00) {
        gx.f(null);
        gx.s(null);
        o.c = 'X';
        o.C = 'X'
    }
    if (o.c == '*') {
        o.c = $r()
    }
    if (o.C == '*') {
        o.C = $r()
    }
    if (o.c == '**') {
        o.c = $r();
        o.C = $r()
    }
    if (o.c == '***') {
        o.c = $r();
        o.C = $r();
        o.l = R(20)
    }


    if (S(o.c)) {
        gx.f(oO('c', o.c))
    }
    if (S(o.C)) {
        gx.s(oO('c', o.C))
    }
    if (N(o.l)) {
        h.l(o.l)
    }
    if (o.lf) {
        o.lf = O(o.lf) ? o.lf : {}

        if (o.r) {
            o.r = N(o.r, 0)
            o.x = N(o.x, 0)
            o.y = N(o.y, 0)
            o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : N(o.lf.x1, 0) + o.x - o.r
            o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : N(o.lf.y1, 0) + o.y - o.r
            o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : N(o.lf.x2, 0) + o.x - o.r
            o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : N(o.lf.y2, 0) + o.y + o.r
        }
        /*
         $l('r: ' + o.r)
         $l('x: ' + o.x)
         $l('y: ' + o.y)
         $l('x1: '+ o.lf.x1)
         $l('y1: '+ o.lf.y1)
         $l('x2: '+ o.lf.x2)
         $l('y2: '+ o.lf.y2)

         */

        h.lf(o.lf)
    }


    if (o.rf) {
        o.rf = O(o.rf) ? o.rf : {}
        o.c = [2, 'z']
        if (o.r) {
            o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
            o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y
            o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
            o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20
            o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
        }
        h.rf(o.rf)
    }


    if (o.ls) {
        o.ls = O(o.ls) ? o.ls : {}
        if (o.r) {
            o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
            o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
            o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
            o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
        }
        h.ls(o.ls)
    }


    if (o.rs) {
        o.rs = O(o.rs) ? o.rs : {}
        if (o.r) {
            o.rs.x1 = _.tN(o.rs.x1) + o.x
            o.rs.y1 = _.tN(o.rs.y1) + o.y
            o.rs.x2 = _.tN(o.rs.x2) + o.x
            o.rs.y2 = _.tN(o.rs.y2) + o.y
            o.rs.r2 = _.tN(o.rs.r2) + o.r
        }
        h.rs(o.rs)
    }
    if (o.bs) {
        h.bs(o.bs)
    }
    if (o.bf) {
        h.bf(o.bf)
    }

    return h
}
h.C = h.s = function (C, l) {
    var h = this, gx = h.graphics
    gx.s(oO('c', C))
    if (N(l)) {
        h.l(l)
    }
    return h
}
h.l = h.ss = function (l, b, c) {
    var h = this, gx = h.graphics;
    gx.ss(l || 1, b, c)
    return h

}
h._dc=function(o){

    var h=this,gx=h.graphics,g=G(arguments)

    gx.dc(N(o.x,0),N(o.y,0),N(o.r,50))

    return h

}
h.cirs=function(g){
    var h=this
    g.e(function(c){h.dc(c)}); return this
}
h.dc= function(x,y,r){
    var h=this,gx=h.graphics,g=G(arguments),o
    h.cp()
    if(g.A){return $a(h,'dc',g.f)}
    if(g.OO_){return h.cirs(g)}
    o = g.O?g.f: g.$?{r:g.f}: {x:g.f,y:g.s,r:g.t}
    return h._dc(o)
}

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
    $df.oDef(o)
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
h.bV = function (o) {
    var h = this, g = G(arguments), o
    o = g.A ? {hs: g.f} : g.f || {}
    o.hs = o.hs || []
    o.i = o.i || 'me'
    if (F(Q)) {
        $.i(o.i, function (i) {
            h.bf(i[0])
            _.e(o.v, function (v) {
                h.lt(v)
            })//
            h.cp()
            h.ef()
        })
        return h
    }
    h.bf(o.i)
    _.e(o.v, function (v) {
        h.lt(v)
    })

    return h

}


h.bf = function () {var h = this, gx = h.graphics, g = G(arguments),

    tf

    if (!F(Q)) {
        $l('!F(Q)')

        if (A(g.s)) {g.s = cjs.m2d.apply(cjs, g.s)}

        tf = g.s || cjs.m2d(R(500), R(300))

        if (S(g.f)) {gx.bf(Q.i(g.f), null, tf)}
        else if (O(g.f)) {gx.bf(g.f, null, tf)}
        return h
    }

    if (g.S_){

        $l('yes F(Q)')

        $.i(g.f, function (i) {

            gx.bf(i[0])

            if (F(g.s)) { g.s(h) }
        })
    }

    else if (g.O_ && A(g.f.hs)) {
        $l('g.O_ && A(g.f.hs)')
        $.i(g.f.i || 'me', function (i) {
            gx.bf(i[0])
            if (F(g.s)) {
                _.e(g.f.hs, g.s)
            }
        })
    }

    else {$l('..else')
        gx.bf(g.f, null, g.s)
    }
    //h.ef()
    return h
}  // BITMAP FILL  !!!!!!







h.bC = function (o) {
    var h = this;
    return h.bf(o, function (h1) {
        h.dc(h1)
    })
}//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
h.bR = h.bfR = h.bmR = function (o) {
    var h = this;
    if (F(Q)) {
        h.bf(o, function (h1) {
            h.rec(h1)

        })

        return h
    }
    /*

     h.bmR1= function(o){var h=this;
     o=df.b(o)
     $.i(o.i,
     function(i){_.e(o.hs,
     function(g){
     h.bf(i[0])
     h.rec(g)
     h.ef() })
     })
     return
     }
     */
    h.bf(o.bf)
    h.rec(o.hs)
    _.e(o.hs, function (r) {
        w.rec(r.w, r.h)
    })
    return h
}
$H = $h = function () {
    var g = G(arguments),
        h = new cjs.Shape(), //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
        o = g.O ? g.f :
            g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
            {x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
                // 'c-C-l' pattern
                N(g.s) ? {C: g.f, l: g.s} :
                {c: g.f, C: g.s, l: g.t}
    h.XY(N(o.x, 0), N(o.y, 0))
    h.c(o.c || 'z', o.C || 'w', o.l || 8)
    if (o.C) {
        h.C(o.C)
    }
    if (N(o.l)) {
        h.l(o.l)
    }
    if (g.p) {
        h.dg()
    }
    return h
}
$Cir=   function(){var g = G(arguments), o
    o = g.S_? {c:g.f,x:g.s,y:g.t,r:g[3]}: {x:g.f,y:g.s,r:g.t}
    return $H(o.c,o.x,o.y).dc(o.r)

}

//gradient
h.lf = function () {
    var h = this, gx = h.graphics, g = G(arguments), o
    o = cjs.lg(g)
    gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
    return h
}
h.rg = function (o) {
    var h = this, g = G(arguments),
        gx = h.graphics,
        o


    if (A(g[0]) && A(g[1])) {

        gx.rf(
            [oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
        )
        return h
    }


    o = O(g[0]) ? g[0] :


        S(g[1]) ? _.x({c1: g[0], c2: g[1]},
            N(g[7]) ?
            {x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
                : N(g[5]) ?
            {x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
                : N(g[4]) ?
            {x2: g[2], r1: g[3], r2: g[4]}
                : N(g[3]) ?
            {r1: g[2], r2: g[3]}
                :
            {r2: g[2]})

            : S(g[0]) ?
        {c2: g[0]}
            : {}

    $df.grad(o)

    o.x2 = N(o.x2, o.x1)
    o.y2 = N(o.y2, o.y1)
    o.r1 = N(o.r1, 1);
    o.r2 = N(o.r2, 100)

    return o
}
h.ls = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }
    o = h.lg.apply(h, g)
    gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
    return h
}
h.rf = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }

    o = h.rg.apply(h, g)

    gx.rf(
        [o.c1, o.c2],
        [o.s1, o.s2],
        o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
    return h


}
h.rs = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }
    o = h.rg.apply(h, g)
    gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
    return h
}
cjs.lg = h.lg = function () {
    var g = G(arguments), o//h=this, gx=h.graphics,

    if (g.A) {
        return cjs.lg.apply(null, g.f)
    }
    o = g.O ? g.f :
        _.x({c1: g.f, c2: g.s},
            N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
                : N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
                : N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
    o.c1 = oO('c', o.c1 || 'z');
    o.c2 = oO('c', o.c2 || 'w')
    o.s1 = N(o.s1, 0);
    o.s2 = N(o.s2, 1)
    o.x1 = N(o.x1, 0);
    o.y1 = N(o.y1, 0)
    o.x2 = N(o.x2, 0)
    o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
    return o
}

h=cjs.Shape.prototype
h.arc = function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    /*
     Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
     For example, to draw a full circle with a radius of 20 centered at (100, 100):
     arc(100, 100, 20, 0, Math.PI*2)
     */

    h.arc(x, y, r, startA, endA, aCW)

    return h
}
h.arc2 = function (x, y, X, Y, r) {
    var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
    gx.arcTo(x, y, X, Y, r)
    return h
}

h.rc = h.roundRectComplex = function () {
    var h = this, gx = h.graphics
    gx.drawRoundRectComplex.apply(gx, arguments)
    return h
}
h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
    var h = this, gx = h.graphics,

        g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]

    o = N(g[3]) ? {
        x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]} :

        N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :

            O(g[0]) ? g[0] : {}

    o.a = _.tN(o.a)
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.p = cjs.cap(o.p, 0, .99)

    gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
    return h
}

h.de = h.ell = function () {
    var h = this,
        gx = h.graphics,
        g = G(arguments),
        o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
            N(g[0]) ? {w: g[0], h: g[1]} :
                O(g[0]) ? g[0] : {}
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.w = _.tN(o.w, 100)
    o.h = _.tN(o.h, o.w)
    gx.drawEllipse(o.x, o.y, o.w, o.h)
    return h
}
h.de2 = function (x, y, W, H, r) {
    var h = this
    h.de(-W / 2 + x, -H / 2 + y, W, H, r)
    return h
}
h.rr = function () {
    var h = this,
        gx = h.graphics,
        g = G(arguments),

        o = N(g[3]) ? {x: g[0], y: g[1], w: g[2], h: g[3], r: g[4]} :
            N(g[1]) ? {w: g[0], r: g[1]} :
                N(g[0]) ? {w: g[0], h: g[1], r: g[2]} :
                    O(g[0]) ? g[0] : {}


    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.w = _.tN(o.w, 100)
    o.h = _.tN(o.h, o.w)

    gx.drawRoundRect(o.x, o.y, o.w, o.h, o.r)
    return h
}
h.rr2 = function (x, y, W, H, r) {
    var h = this
    h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
    return h
}

h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    h.bezierCurveTo(x, y, r, startA, endA, aCW)
    return h
}
h.qt=    function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    gx.quadraticCurveTo(x, y, r, startA, endA, aCW)
    return h
}


h.dr2 = function (x, y, W, H) {var h = this, g = G(arguments), o

    if(g.OO_){g.e(function(g){h.dr2(g)});return h}

    o=g.O?g.f:
        U(g.t)? {w: g.f, h: g.s} :
        {x: g.f, y: g.s, w: g.t, h: g[3]}

    o.x = N(o.x,0)
    o.y = N(o.y,0)
    o.w = N(o.w, 50)
    o.h = N(o.h, o.w)
    h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
    return h

}

cjs.diamond=cjs.dia = function self(width, height, fc, sc) {
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




h.cir= function () {
    var h = this, gx = h.graphics, g = G(arguments), o
    o = g.O ? g.f :
        N(g.t) ?  {x:g.f,y:g.s,r:g.t, c: g[3], C: g[4], l: g[5]} :
            N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
                g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]}:
                {c:g.f,C:g.s,l:g.t}
    h.c(o)
    if(o.bf){
        if(N(o.bf)){o.bm = 'me'}

        if(F(Q)){ //async
            h.bf(o.bf, function(){
                h.dc(o)
            })
        }
        else { //sync
            o.tf = o.tf || null;
            h.bf(o.bf, o.tf).dc(o)
        }
    }

    else {h.dc(o)}
    h.alpha = N(o.al, 1)
    return h

}


// 'h.cp()': i kinda like how it stroke-connects my cirs
//h.ef().es() //if (g.O_ && A(g.s)) {_.e(g.s, function(c){h.cir(_.x(c, g.f))}); return h }
