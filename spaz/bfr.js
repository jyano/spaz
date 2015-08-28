
w._D=function(o){
    return this.D(o.x, o.y, o.c, o.w, o.h)
}


w.bfR = function () {
    var w = this, g = G(arguments), b, h, o


    o = _.x({x: g.f, y: g.s},
        S(g.t) ? {i: g.t, w: g[3], h: g[4], c: g[5]} :
        {w: g.t, h: g[3], c: g[4]})
    o.i = o.i || 'sun'
    o.c = o.c || 'y' // can be removed

    b = w._D(o)

    h = w.g.h().al(.5)
    if (o.c) {h.c(o.c)}
    h.bf(o.i)
    h.rec(o.w, o.h)



    b.bS(h)
    return b
}



BFR = function () {
    W(1000,1000,1000,1000)._(function () {
        //h.bC
        w.i.h(50, 200, '+')
            .bf('chicks')
            .dc({r: 80}, {r: 50, x: 100}, {r: 100, x: 400})
        //h.bf
        w.i.h(800, 100, '+')
            .bf('guy')
            .dc([80], [90, 0, 68])
        //h.bV
        w.D(200, 300).pol({
            v: [[0, 100], [0, -100], [200, -150], [200, 150]], // c: 'y',C: 'w',l: 5,
            bf: 'guy'
        })
        b = w.D(600, 300, 'r', 400, 300)
        h = w.bg.h().al(.5)
        h.bf('sun')
        h.rec({w: 400, h: 300})
        b.bS(h)
        w.bfR(600, 300, 'guy', 100, 100, 'X')
        w.bfR(300, 300, 'sun', 100, 100, 'z')
        w.bfR(300, 300, 'chicks', 100, 100)
        w.D(500, 400).pol({
            v: [[-100, 0], [0, -400], [100, -50], [0, -50]],
            c: 'z', C: 'r', l: 5,
            bf: 'sun'
        })
        //w.i.h(350, 150, '+').pol({v: v1, bf: 'me'})
        w.D(550, 200).pol({
            c: 'o', C: 'z', l: 25,
            bf: 'chicks',
            v: [[-100, 0], [0, -200], [100, -50], [0, -50]]
        })
        //h.bV //w.pol
        w.D(400, 500).pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]]})
        w.bg.Bm('me').sXY(6.2).X(500).al(.2)
    })
}
