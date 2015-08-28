

h.bV = function (o) {var h = this, g = G(arguments), o
    o = g.A ? {hs: g.f} : g.f || {}
    o.hs = o.hs || []
    o.i = o.i || 'me'
    if (F(Q)) {
        $.i(o.i, function (i) {
            h.bf(i[0])
            _.e(o.v, function (v) {h.lt(v)})//
            h.cp()
            h.ef()
        })
        return h
    }
    h.bf(o.i)
    _.e(o.v, function (v) {h.lt(v)})

    return h

}

GEMS=function(){W()
    //h.bR
    w.i.h(100,300,'+').bR({hs:[
        {w:150,h:500},
        {w:150,h:500,x:200},
        {w:150,h:500,x:400},
        {w:150,h:500,x:600}]})

    w.D(200,160).cir({r:120, rf:{c1:'r',c2:'b'}},  {r:100, C:'y', l:2, bf:'me'})

    w.D(800, 300).pol({
        v: [[[5, 100], [0, -100], [200, -150], [200, 150]],
            [[-50, 50], [-50, -100], [450, -50], [450, 50]]],
        c: 'r', C: 'y', l: 10,
        bm: 1
    })
    w.i.h(400,300,'+').bV({v:v})
}

h.bf = function () {
    var h = this, gx = h.graphics, g = G(arguments), tf

    if (!F(Q)) {

        if (A(g.s)) {
            g.s = cjs.m2d.apply(cjs, g.s)
        }
        tf = g.s || cjs.m2d(R(500), R(300))

        if (S(g.f)) {
            gx.bf(Q.i(g.f), null, tf)
        }

        else if (O(g.f)) {
            gx.bf(g.f, null, tf)
        }

        return h
    }

    if (S(g.f)) {
        $.i(g.f, function (i) {
            gx.bf(i[0])
            if (F(g.s)) {
                g.s(h)
            }
        })
    }
    else if (g.O_ && A(g.f.hs)) {
        $.i(g.f.i || 'me', function (i) {
            gx.bf(i[0])
            if (F(g.s)) {
                _.e(g.f.hs, g.s)
            }
        })
    }
    else {
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
h.bR = h.bfR = h.bmR =  function (o) {
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


