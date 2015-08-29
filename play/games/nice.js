CHEM = function () {

    w.rec = function (x, y, W, H, c) {
        var w = this, g = G(arguments), b, o


        o = g.O ? g.f :
            N(g.s) ? {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]} :
            {w: g.f}

        o.x = N(o.x, w.hW)
        o.y = N(o.y, w.hH)
        o.w = N(o.w, 40)
        o.h = N(o.h, o.w)
        o.c = o.c || $r()

        b = w.D(o.x, o.y, o.c, o.w, o.h).K('box').DFB(.5, .5, 0)
        if (g.n) {
            b.sen(true)
        }
        return b

    }


    W({
        w: 0//, g:50
    })


    w.rR(0, 3)
    w.rR(100, 3)
    w.rR(100, 3)
    w.rR(200, 3)
    w.rR(300, 3)
    w.rR(400, 3)


    w.Q(function (f) {
        f.B().kill()
    }, 550, 250, 650, 350)

    w.Q(function (f) {
        f.B().kill()
    }, 350, 50, 450, 150)

    w.Q(function (f) {
        f.B().kill()
    }, 850, 50, 950, 150)


    y = w.y(600, 300).K('y')

    _.ev(1, function () {

        w.cir(R(20, 400), 80, 12, 'r').K('r')
        w.rec(R(20, 900), 100, 24, 24, 'b').K('b')
    })


    w.cl('bul', function (f) {
        var b = f.B()
        this.B().kill()
        if (b != y) {
            b.kill()
        }
    })


    w.cl('r', 'b', function () {
        y.stat()
        w.e(function (b) {
            if (b != y) {
                b.kill()
            }
        })
        alert('you win!')
    })


    y.cl('r', lose)
    y.cl('b', lose)
    function lose() {
        //w.pen('you lose')
        y.stat()
        w.e(function (b) {
            if (b != y) {
                b.kill()
            }
        })
        _.in(self)
    }


}