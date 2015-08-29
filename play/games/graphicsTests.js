BS=function(){W()._(function(){
    x= w.D(600,300,'x',200,100)
    f = x.cir({r:100, x:300, c:'r'})
    me = Q.b('me').rC()
    f.bS(me, 0, f.pX(), f.pY())
})

}


SHADOW=function(){W().P()


    p.lD(1).warp()
    badGuy=w.badGuy(400, 200).d(.1).warp()
    _.in(1, function(){
        p.sprite.shad("y", 0, 150, 300)
        badGuy.sprite.shad('o', 40, 40, 40)
    })
    $.space(function(){
        p.polyBul()
    })
    _.ev(.2,function(){
        // w.s.pen('badGuy health: ' + badGuy.health)
    })
    $(w.s.back.canvas).C('p')
    s= w.s.back
    s.bm('me' , function(bm){
        bm.drag().shad('blue', 125,  125,  50)
            .XY(100,100).sXY(.6)
    })

    s.bm('guy', function(bm){
        bm.drag().shad('r', 100,100,10)
            .XY(300,200).sXY(.6)})
    s.bm('me' , function(bm){
        bm.drag().shad("z", 25, 25, 50)
            .XY(500,100).sXY(.6)
    })
}

COL=function(){W();
    b=w.S(600,300,'w',200);
    _.in(function(){
        b.dyn().f().C('z')
    })
}
DEV=function(){ W([1200, 600, 1400, 800], {g: 50, t: 0}).stats()
    //  w.dr(100, 100, 100, 100, '-')
    //  w.dr(100, 200, 100, 100, '+')

    w.dl('r', 0, 100, 5000, 5000, '-')

    w.dl('p', 0, 200, 5000, 2000)

    w.dl('b', 0, 300, 5000, 3000, '+')

    wh = w.S(400, 350, 'w', [[300, 220, '-']])

    or = w.S(400, 200, 'o', 300, 50)

    pi = w.S(400, 500, 'x', 300, 50)

    y = w.ship(150, 200).damp(1, 10).rot(90).lD(0).rot(120).lV(1);

    w.track(y, 600, 300, '!')

    b = w.D(700, 200, 'b', 100)

    me = w.me()




}

BMF1 = function () {
    W()

    //h.bC
    w.i.h(50, 200, '+')
        .bC({hs: [{r: 80}, {r: 50, x: 100}, {r: 100, x: 400}]})


    //h.bf
    w.i.h(800, 100, '+')
        .bf('me', function (h) {
            h.dc([80], [90, 0, 68])
        })


    //h.bV
    w.D(200, 300).pol({
        v: [[0, 100], [0, -100], [200, -150], [200, 150]],
        c: 'y', C: 'w', l: 5,
        bm: 1
    })


    /*
     b =   w.D(600,300, 'r', 100,300)
     h= w.i.h().bR({hs:[{w:100,h:300}]})
     b.bS(h)
     */

    w.bmR(600, 300, 'b', 100, 300)

    w.bmR(300, 300, 100, 300)


    w.i.h(350, 150, '+')
        .pol({v: v1, bf: 'me'})
    w.D(950, -200)
        .pol({c: 'o', C: 'z', l: 25, bm: 1, v: v1})
    w.D(500, 200)
        .pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]], c: 'y', C: 'r', l: 5, bm: 1})
    //h.bV //w.pol

    w.pol(400, 500, [[-100, 0], [0, -100], [100, -50], [0, -50]])
    w.bg.bm('me', 6.2, function (bm) {
        bm.X(500)
    })

}


BFREC = function () {W()
    w.i.h(200, 300).dg().bf('me', function (h) {h.rec({w: 500, h: 200})})
    w.i.h().dg().bf('me', function (h) {h.rec({w: 500, h: 200})
            w.D(600, 300, 'b', 500, 200).bS(h)
        })
}


POLLL = function () {
    W()

    w.D(500, 400, [-100, 0], [0, -100], [100, 50], [0, -70])

    w.D(500, 430).pol('r', [[-100, 0], [0, -20], [40, 50]])

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



CENH=function(){W()

    h.rec(100,100,100,100,'y')
    h.rec(200,200,100,100,'b')

    h.c('o').polyStar(300,100,
        50,5,0.6,-90)

    h.c('w','z')
        .roundRectComplex(400,300,
        300,300, 20,20,30,40 )

    h.cir(500,200,40,'b','x',10)
}
St=function(){z()
    s = $St(1200,600).A()
    h = $h(0,0).a2(s)
    SL(h)
}


w.bmR= w.bR= w.bfR=function(){var w=this, g=G(arguments), b, h,o
    o = S(g.t)? {x: g.f, y: g.s, i: g.t, w: g[3], h:g[4], c:g[5]} :
    {x: g.f, y: g.s,  w: g.t, h:g[3], c:g[4]}
    o.i = o.i || 'sun'
    o.c = o.c || 'y' // can be removed
    b =   w.D(o.x, o.y, o.c, o.w, o.h)
    h= w.g.h().al(.5)
    if(o.c){h.c(o.c)}
    h.bf(o.i)
    h.rec(o.w, o.h)
    b.bS(h)
    return b
}

OVS=function(){St()
    h=s.h(40, 10,'b',16).drag()
    h.c({C:['o',5],lf:{c1:'g',c2:'r',x2:100,y2:400}}).de(100, 400)

    h.c({C:'b',
        lf:{c1:'g',c2:'r',x2:400, y2:100}}).de(400,100)

    h.l(30).lf({c1:'b',c2:'y', x1:100, y1:100, x2:500,  y2:400 })
        .de(100, 200, 500,300)
    h.ls('r','w',300,100,400,140).de(300,0,300,500)

    s.u()
}
GRAPHTEST=function(){



    St(); img = $.i('me',function(){s.ct().h().bfS(img).ss(32).dr(20,20,920,360); _.each([

        function(){return $h(12,10)
            .lf('b','g',130).dr(130)},

        function(){return $h(40, 10,'b',16)
            .ls('r','w',70,140).de(70,140)},

        function(){return $h(80,80)
            .C('b',8).rf('w','y',40).dc(40)} ,

        function(){return $h(12,10,18)
            .bf(img, cjs.M(1) ).rs('b','g',30,130).dr(130)},






        function(){return $h(12,12,'g','r',8)
            .rr(130,30)}, //w(h) and r


        function lt(){return $h().C('o')
            .ss(16,'round','round')
            .mt([40,10],[90,90],[90,140])},

        function star(){return $h(80,85,'y','b',3)
            .pStr(0,0,80,5,.8,-95)},



        function hex(){return $h(80,40,'p')
            .pStr(40,6).pStr(0,75,40,6).pStr(45,45,20,6)}


    ],

    function(cont,i){var W=155, H=155, P= 5, C=4 //pad, cols
        s.A(tile(cont()).XY(
            42+(W+P)*(i%C),
            42+(i/C|0)*(H+P)))})})[0]




    tile=createTile=function(x,y){var bg,til
        bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
        til = cjs.ct().A(bg)
        if(N(x)){  til.X(x) }
        if(N(y)){  til.Y(y)  }
        if(O(x)){ til.A(x) }

        return til}


}
ROUNDREC = function () {
    St()
    h.c('b', 'r', 5).dc(100, 100, 100)
    h.dr(300, 200, 100, 50)
    h.dr2(500, 200, 100, 50)
    h.rr2(500, 200, 100, 50, 50)
    h.de2(500, 200, 100, 50)

    s.dot(100, 100)
    s.dot(300, 200)
    s.dot(500, 200)
    s.dot(500, 200)
    s.dot(500, 200)

    s.u()
}

function edu() {
    MAT2D = function () {
        /*
         a Scales the drawing horizontally
         b Skew the the drawing horizontally
         c Skew the the drawing vertically
         d Scales the drawing vertically
         e Moves the the drawing horizontally
         f Moves the the drawing vertically
         */

    }
}
