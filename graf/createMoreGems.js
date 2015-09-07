h.dr= function () {
    var h = this, gx = h.graphics, g = G(arguments),
    o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, 100);
    o.h = N(o.h, o.w)
    gx.dr(o.x, o.y, o.w, o.h)
    return h
}
h.rec= function () {

    var h = this, g = G(arguments), o
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
h._bf=function(){
        $l('h._bf')
        var h = this, gx = h.graphics, g = G(arguments),

            tf

        if (A(g.s)) {
            g.s = cjs.m2d.apply(cjs, g.s)}

        tf = g.s || cjs.m2d(R(500), R(300))

        if (S(g.f)) {
            $l('h._bf: str')
            gx.bf(Q.i(g.f), null, tf)}

        else if (O(g.f)) {
            $l('h._bf: obj')
            gx.bf(g.f, null, tf)
        }

        else {
            $l('h._bf: ?')
        }

        return h

    }

h.bf= function (){$l('h.bf')
        var h = this,
            gx = h.graphics, g=G(arguments),img, tf

        if (!F(Q)) {
            $l('h.bf: !F(Q)')
            ///// $l('!F(Q)') !!! only this gets logged
            return this._bf.apply(this,g)
        }

        else {
            if (g.S_) {    $l('yes F(Q)')
                $.i(g.f, function (i) {
                    gx.bf(i[0])
                    if (F(g.s)) {
                        g.s(h)
                    }
                })
            }

            //if object with an 'hs' property
            else if (g.O_ && A(g.f.hs)){
                $l('g.O_ && A(g.f.hs)')
                img=g.f.i || 'me'
                $.i(img, function (i) {
                    gx.bf(i[0])
                    if (F(g.s)) {
                        _.e(g.f.hs, g.s)
                    }
                })
            }
            else { $l('..else')

                gx.bf(g.f, null, g.s)
            }
            return h //h.ef()
        }


    }  // BITMAP FILL  !!!!!!
    //bitmap fill rec



h.bR=function (o){var h = this;


    if (F(Q)){
        h.bf(o, function (h1) {
            h.rec(h1)
        })
    }

    else {

        alert('h.bR not preloaded?')
        h.bf(o.bf)
        h.rec(o.hs)
        _.e(o.hs, function (r) {
            w.rec(r.w, r.h)
        })
    }

    return h
    //= h.bfR = h.bmR
}


GEMS = function () {W()

    h=w.i.h(100, 300, '+')


    h.bR({

        i:'chicks',

        hs: [
            {w: 150, h: 500}, {w: 150, h: 500, x: 200},
            //{w: 150, h: 500, x: 400},
            {w: 150, h: 500, x: 600}
        ]

    })


     w.D(200, 160).cir({r: 120, rf: {c1: 'r', c2: 'b'}}, {r: 100, C: 'y', l: 2, bf: 'me'})

}
POLGEMS  = function () {W()


    verts=[[[5, 100], [0, -100], [200, -150], [200, 150]],
        [[-50, 50], [-50, -100], [450, -50], [450, 50]]]

    w.i.h(400, 300, '+').bV({v: verts})

    w.D(800, 300).pol({
        v: verts,
        c: 'r', C: 'y', l: 10,
        bf: 'me'
    })




}

