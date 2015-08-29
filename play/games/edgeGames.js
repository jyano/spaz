

ASEDG = function () {
    W().C('z')

    w.edg(100, 500, 1000, 0)
    w.edg(50, 50, 100, 500)
    w.edg(0, 0, 1000, 100)
    w.D(410, 100, 'w', 30)

    // w.p(300,200,'standard')

}

HILLS = function () {
    W().P()
    w.edg(100, 100, 500, 300)
    w.edg(100, 200, 500, 400)
    w.edg(100, 300, 500, 500)
    w.edg(1000, 100, 600, 300)
    w.edg(1000, 200, 600, 400)
    w.edg(1000, 300, 600, 500)
    w.D(410, 100, 'r', 20)


}
CONEDGE = WORLDCLICK = WELDEDGE = function () {
    W([1200, 600, 2400, 600], {g: 10}).C('r')

    w.Y(450, 400)
    w.edgs([

        [100, 300], [500, 500], [600, 400], [300, 250], [100, 300]

    ])
    x = w.edgAr([400, 400, 500, 200],
        [500, 200, 550, 600],
        [550, 600, 400, 400]).X(1200).track()
    w.D(700, 350, 'b', 20)
    w.D(700, 350, 'r', 20)
    w.D(700, 350, 'y', 20)


    w.$(function (x, y) {
        var v = w.sToW(x, y)
        w.S(v.x, v.y, 'z', [[10, 10, '-']])
    })

    // cjs.t(function(){$l(w.mx + ', ' + w.my) })
}

DRAWEDG1 = function () {
    W();
    var p1, p2, d, l
    w.p(400, 100);
    w.S(200, 200, 'r', 400, 20)
    w.$(function (v) {
        if (!p1) {
            p1 = v;
            return
        }
        if (!p2) {
            p2 = v
        } else {
            p1 = p2;
            p2 = v
        }


        w.edg(p1.x, p1.y, p2.x, p2.y).K('line')

        w.rC(function (f) {
            f.B().dot()
        }, p1, p2)
    })
}


DRAWEDG = function () {
    W([1200, 600, 2400, 600]);
    var p1, p2, d, l
    p = w.p(400, 400, '+')
    w.S(200, 200, 'r', 400, 20)
    w.$(function (v) {
        if (!p1) {
            p1 = v;
            return
        }
        if (!p2) {
            p2 = v
        } else {
            p1 = p2;
            p2 = v
        }
        w.edg(p1.x, p1.y, p2.x, p2.y).K('pf')
        w.rC(function (f) {
            f.B().dot()
        }, p1, p2)
    })
    p.IsBullet(true)
    w.pre('pf', function (f, cx) {
        if (p.shall) {
            cx.en(0)
        }
    })
    w.b(function (cx) {
        p.shall = false
        if (!cx.pt().y && p.lV().y < 0) {
            return
        }
        cx.w(p, 'pf', function () {
            c = cx
            v = cx.pt()
            if (cx.pt().y) {
                dif = (p.Y()) - cx.pt().y
                $l(dif)
                if (dif > -10) {
                    p.shall = true
                }
            }
        })
    })


    //w.end(function(cx){cx.w('pf', function(){$l('end')})})

}