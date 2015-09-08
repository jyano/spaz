maro()
yip()
badG()

function maro() {

    w.p = function (x, y, sc, cn) {
        var w = this, g = G(arguments),
            p
        sc = N(sc, 1)
        cn = cn || 'jump'
        p = w.D(x, y).fR()
        p.cn(cn)
        p.SetBullet(true)
        p.rec({c: 'r', l: 5, C: 'r', w: 22 * sc, h: 40 * sc}).d(5)
        p.rec({

            s: 1,
            w: 8 * sc, h: 8 * sc,
            x: 0,
            y: 20 * sc,

        }).K('feet').C('X')
        p.Bm('me', 0, 0, 0.25 * sc)
        // p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )
        if (g.p) {
            p.tr()
        }
        p.r(.4)
        p.lD(.5)
        return p
    }

    b.inAir = function () {
        var b = this, onG = false
        this.cxs(function (cx) {
            if (cx.IsTouching()) {
                cx.w('feet',
                    function () {
                        if (this.of(b)) {
                            onG = true
                        }
                    })
            }
        })
        return !onG
    }


    b2d.cn.j = b2d.cn.jump = function (p) {

        /* p.vX(
         K.r?200 :
         K.l?-200 :0)
         if(K.u && p.onG){
         p.vY(-1000)
         }*/

        var m = p.mass()
        if (p.inAir()) {
            if ($.K.r) {
                p.I(m / 2, 0)
            }
            else if ($.K.l) {
                p.I(-m / 2, 0)
            }

            p.I(0, m * 3)
        }

        else {//on ground
            if ($.K.u) {//initiate a jump
                if ($.K.r) {
                    p.lV(m, -m * 4)
                }
                else if ($.K.l) {
                    p.lV(-m, -m * 4)
                }
                else {
                    p.lV(0, -m * 8)
                }
            }
            else {//not jumping, may be running
                if ($.K.r) {
                    p.lV(m * 2, 0)
                }
                else if ($.K.l) {
                    p.lV(-m * 2, 0)
                }
                else {
                    p.lV(0, 0)
                }
            }
        }

        if ($.K.d) {
            p.I(0, m * 3)
        }
    }
    w.P = function (x, y, sc) {
        var w = this,
            g = G(arguments)
        p = w.p(N(g.f, w.hW), N(g.s, w.H - 50), N(sc, 2))
        if (g.p) {
            p.tr()
        }
        return w
    }

    AUTOGAME = function () {
        W({w: 0, t: 0}).P()

        setup = function () {
            score = 0

            p.XY(350, 100)
            p.lV(0, 0)
            p.cn('j')
            p.d(.1).r(1).fr(0)
            w.s.XY(0, 0)
        }
        setup()

        T.t(function () {
            w.s.X(4, '-');
            if (p.relPos() < -100) {
                setup()
            }
        })//.pen(score++)

        w.ramps()
    }
    MARIOS = function () {
        W().P().P().P()

    }
    HIDESEEK = function () {

        W([1200, 600, 1400, 1200], {g: 300, t: 0})
        w.S(700, 1000, 'r', 800, 20)
        w.S(500, 800, 'g', 200, 20)
        w.S(900, 600, 'x', 200, 20)

        p = w.p(700, 600)
        w.fg.A(p.sp())

        w.track(p, 600, 400,
            {x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
    }

}
function yip() {
    w.bu = w.bul = function () {
        var w = this, g = G(arguments), o, bu
        o = g.O_ ?  //pass {x,y},rad  OR x,y,rad
        {x: g.f.x, y: g.f.y, r: g.s} :
            N(g.s) ? {x: g.f, y: g.s, r: g.t} :
            {r: g.f}

        bu = Bul(o.x, o.y).fr(0).d(.1).r(.5)
        bu.cl(onColl)
        return bu.lD(0).aD(0)
        function Bul(x, y, rad, c) {

            c = c || 'w'

            rad = N(rad, 8)
            var bu = w.D(x, y, c, rad).K('bul bu')

            bu.SetBullet(true)

            return bu
        }

        function onColl(f) {
            if (!g.n) {
                this.xB()
            }
            if (g.p) {
                if (O(f) && F(f.xB)) {
                    f.xB()
                }
            }
        }
    }
    b.bu = b.bul = function () {
        var b = this, g = G(arguments)
        if (g.p) {
            b.SetSensor(true)
        }
        return b
    }
    b.sht = function () {
        var b = this, g = G(arguments),
            o = {k: g.f},
        //just above b
            bu = w.bu(
                this.wP(0, -200)
            )
        bu.lV(b.vec().m(100))
        bu.d(.5).lD(0).fR()
        bu.K(o.k)
        return bu
    }
    b.shtSp = function (k) {
        var b = this
        $.space(function () {
            b.sht(k)
        })
        return b
    }
    b.cn = function (cn, o) {
        var b = this, w = b.W()
        //stop a current 'controls', if any
        if (F(b._cn)) {
            w.s.off('tick', b._cn)
        }
        if (U(cn)) {
            return
        }
        if (S(cn)) {
            cn = b2d.cn[cn]
        }
        if (F(cn)) {

            b._cn = w.s.t(
                function () {
                    cn(b, o)
                }
            )
        }
        return b
    }
    b2d.cn.thr = b2d.cn.thrust = b2d.cn.t = function (p, mult) {
        var vec
        mult = N(mult, 200)

        if ($.K.u) {
            vec = p.vec().m(mult)
            p.I(vec)
        }

        p.aV($.K.r ? 15 : $.K.l ? -15 : 0)
        //  $l('vec: '+ parseInt(vec.x) + ', '+ parseInt(vec.y))
    }
    w.y = w.ship = function () {

        var w = this, g = G(arguments), hS, side, ship, y, o
        o = g.O ? g.f :  //pass opOb
            //pass {c='y'}, x=100, y=100, sc=4
            g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
            {x: g.f, y: g.s, sc: g.t}
        o.c = o.c || 'y';
        o.sc = N(o.sc, 4);
        o.x = N(o.x, 100);
        o.y = N(o.y, 100)


        y = makeShip(o.x, o.y, o.sc * 4, o.c)
        y.push = function (frc) {
            $l('y.push')
            var y = this, g = G(arguments)

            frc = N(g.f, 1)


            ev = .5
            if (g.p) {

                _.ev(ev

                    , function () {
                        y.push(frc)
                    })
            }
            else {
                y.I(y.vec().m(frc * 40))
            }

            return y
        }

        y.going = function () {
            var y = this,
                lv = y.lV()
            return M.a(lv.x) > 0.5 || M.a(lv.y) > 0.5 || M.a(y.aV()) > 0.5
        }
        if (!g.n) {
            y.cn('thrust')
        }

        y.shtSp()

        if (g.p) {
            y.tr()
        }

        return y.K('ship yip y').aD(0).r(.8)

        function makeShip(x, y, hS, c) {
            var side = hS * 2, y
            y = w.D(x, y)
            y.pol(oO('c', c), [
                [-hS, hS], [0, -side * 2], [hS, hS]
            ])
            y.fixedRot(false)
            y.SetBullet(true)
            return y
        }


    }
    w.Y = function () {
        var w = this, g = G(arguments)
        y = $a(w, 'y', g)
        if (g.p) {
            y.track()
        }
        return w
    }
    OBST = OBSTACLES = function () {
        W(10).Y()
        _.t(20, function () {
            w.S(R(500), R(500), $r(), 20)
        })
    }
    BIG = BIGSHIP = function () {
        W([1200, 600, 2400, 600], {g: 0})
        w.y({
            c: 'b',
            sc: 20
        }, '+')

    }
    COLSHIP = function () {
        W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')


        y = w.y()
        co = w.tCo()

        co.B(
            r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
            b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
            y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
        )

        o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)


        _.t(30, function () {
            var b = w.D(400, R(300, 100), 'o', 20)
            b.lV(10, 20).lD(0)

            b.lV(10, 20)
            b.f().grp(-1)
            co.B(b)
        })


        y.grp('-1')

        w.r_.cl(function (f) {
            f.C('b');
            co.xB(f)
        })
        l = w.m_controllerList.GetBodyList()
    }
    WAR = function () {
        W({g: 0})

        var n = 0, x = 150, Y = 150

        w.cl('bul', 'bad', function (bad) {
            this.B().kill();
            bad.B().kill()
        })

        _.t(15, function () {

            w.y($r(), x += 4, Y += 2, 3, '-')
                .K('bad').rt(R(90))
                .push(20, '+')
                .shtEv(300, 'deathBall')
        })
    }
    b.vec = b.v = function () {
        var b = this, g = G(arguments), o, vec
        o = g.O ? g.f :
            g.s ? {x: g.f, y: g.s} : //this not error
            {y: g.f}

        vec = V(N(o.x, 0), N(o.y, -1))
        return b.GetWorldVector(vec)

    }//the current direction of that vector in world coordinates
    STUM = function () {
        W({g: 3})
        y = w.y(300, 400, 3, '-')

        _.ev(.1, function () {

            var v = y.vec(0, 1.5)
            v = V(
                M.tD(v.x),
                M.tD(v.y)
            )

            y.I(0, v.y / 5).rt(2, '+')

        })


        //arm
        b = w.S(300, 300, 20, 200)
        a = w.S(300, 300, [['b', 200, 50, 100, 0]])
        _.ev(.1, function () {
            a.rt(1, '+')
        })
    }

    b.tow = b.towards = function (x, y, sp) {
        $l('b.tow')
        var b = this, lV
        __sp = function (s) {
            s = N(s, 5)
            s = 11 - (  s > 10 ? 10 : s )
            s *= 20
            return s
        }
        sp = N(sp, 5)
        sp = 11 - (  sp > 10 ? 10 : sp )
        sp *= 20
        lV = V(x - b.X(), y - b.Y()).d(sp)
        return b.lV(lV)
        //if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
        //more realistic to accelerate, via forces?

        //these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
    }
    b.rTow = function (y) {
        $l('b.rTow')
        var b = this,
            a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
        if (y.Y() > b.Y()) {
            a += 180
        }
        b.rt(a)
        return b

    }
    TOW = TOWARD = function () {
        W({g: 0}).C('z').Y()

        ball = w.D(500, 300, 'r', 100)

        bY = w.y('b', 100, 200, 6, '-')


        bY.shtEv(.2)

        //y.aD(1).lD(1).r(0).fr(1).K('guy')


        T.t(function () {

            bY.tow(ball.X(), ball.Y(), 9)
            bY.rTow(y)
        })

        return
        _.t(5, function () {
            w.y('b', R(500, 50), R(500, 50))
        })

        w.b(function (cx) {
            cx.w('ship', 'bul', function (bul, cx) {
                this.kill()
            })
        })
        w.D(200, 200, 'b', 80).d(1).K('bad')
        w.D(200, 200, 'r', 150, 150).d(1).K('bad')

        w.cl('bul', 'bad', function (b) {
            if (this.B()) {
                this.B().kill()
            }
            if (b.B()) {
                b.B().kill()
            }
        })

    }
    b.shtEv = function (ms, k) {
        var b = this //= b.shootOnInt
        _.ev(N(ms / 1000, 0.4), function () {
            if (b.IsActive()) {
                b.sht(k)
            }
        })
        return b
    }

    TRAP = function () {

        W(0).C('r')
        co = w.tCo()

        y = w.y()
        rot = 45

        bg = w.y('b', 500, 300, '-')

        bg.shtEv()
        bg.stat()

        T.t(function () {
            bg.rTow(y)
        })

        _.t(3, function () {
            co.B(
                w.y('z', R(500, 50), R(300, 50), '-').lV(10, 20).lD(0)
                //  w.D(400,300, 'z',10,10)
            )
        })
    }
    STAB = function () {
        W({g: 0})
        w.S(200, 200, 'b', 50, 260)
        w.S(140, 200, 'd', 140, 50)


        co = w.tCo();
        _.t(10, function () {
            co.B(
                w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
        })

        hits = 0

        y = w.y().K('ship').lD(5)

        bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)

        bg.rotTowards = function (y) {
            var b = this, a
            a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
            if (y.Y() > b.Y()) {
                a += 180
            }
            b.rt(R(40, a - 20))
        }

        _.ev(.5, function () {
            bg.aV(0);
            bg.rotTowards(y)
        })

        bg.push(50, '+')

        T.t(function () {
            _.t(20, function () {
                bg.I()
            })
        })


        w.b(function (cx) {
            var i
            if (cx.w('ship', 'bg')) {

                i = cx.m().m_points[0].m()

                _.in(.1,
                    (
                    M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
                    M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
                    ) ?
                        function () {
                            hits++;
                            w.C('g');
                            bg.XY(300, 300);
                            y.XY(700, 400)
                        }
                        :
                        function () {
                            w.C('p');
                            bg.XY(700, 400);
                            y.XY(100)
                        })
            }
        })
        //w.show(function(){return 'hits: '+ hits})
    }
}
function badG() {

    w.fireBall = function (x, y, vX, vY) {
        var v = 8
        if (vX == 'l') {
            vX = v;
            vY = 0
        }
        if (vX == 'r') {
            vX = -v;
            vY = 0
        }
        if (vX == 'u') {
            vX = 0;
            vY = -v
        }
        if (vX == 'd') {
            vX = 0;
            vY = v
        }
        if (vX == 'ul') {
            vX = v;
            vY = -v
        }
        if (vX == 'ur') {
            vX = -v;
            vY = -v
        }
        if (vX == 'dl') {
            vX = v;
            vY = v
        }
        if (vX == 'dr') {
            vX = -v;
            vY = v
        }
        vX = N(vX) ? vX : 0
        vY = N(vY) ? vY : 0

        return this.D(x, y, 'r', 18)//.bS('sun',.2)
            .lV(vX, vY)
    }
    w.zilla = function (x, y) {
        var w = this

        var z = w.S(x, y, 80, 140)  //make sensor?

            .fR()
            .bS('guy', [.8, 1])
            .moveInCircle('-')
            .cl('bul',
            function (bul) {
                bul.B().kill()
                z.hits++
            })


        z.hits = 0


        z.fireBalls = function () {
            var x = this.X(),
                y = this.Y()
            w.fireBall(x + 50, y - 80, 'ul')
            w.fireBall(x + 50, y + 80, 'dl')
            w.fireBall(x - 50, y - 80, 'ur')
            w.fireBall(x - 50, y + 80, 'dr')
            w.fireBall(x, y - 80, 'u')
            w.fireBall(x, y + 80, 'd')
            w.fireBall(x - 50, y, 'r')
            w.fireBall(x + 50, y, 'l')
        }


        z.fireBallsAtInt = function (ms) {
            var z = this
            setInterval(function () {
                z.fireBalls()
            }, ms)
            return this
        }


        return z
    }
    w.goomba = function (x, y) {
        x = _.tN(x, 300)
        y = _.tN(y, 100)
        return w.D(x, y, 'w', 30, 30).bS('guy').K('goomba')
    }
    w.bobom = function (x, y) {
        var w = this,
            bobom = w.D(x, y, 'd', [
                [40, 'body'],
                [40, 5, 30, 0, 'bobomSens', '-']])

        w.b(function (cx) {
            cx.w('bobomSens', function () {
                this.B().kill()
            })
        })

        body = bobom.rec(20, 20).d(1).r(1)

        sen = bobom.rec({s: 1})

        sen.cl('player', function () {
            w.B().kill()
        })

        return bobom
    }
    w.gG = function (x, y) {
        var w = this,

            gG, core, shell, z


        z = 40


        gG = w.D(N(x, w.hW), N(y, w.hH)).K('gG')

        core = gG.cir({c: 'o', C: 'z', l: 10, r: 20}).K('core')

        shell = gG.rec({c: 'g', C: 'g', l: 5, w: z, h: z, s: 1, al: .5})

        core.cl('bul', function (bulF) {
            gG.lV(0).aV(0);
            z = 40;
        })

        _.ev(2, function () {
            z += 4

            if (shell) {
                shell.kill()
            }

            shell = gG.rec({c: 'g', C: 'g', l: 5, w: z, h: z, s: 1, al: .5})

            //shell=gG.rec('g',z,z,'-')//.bS( shell.img=w.s.rec('g',z,z) )
            //w.back(sh)

        })


        return gG

    }
    w.badGuy = function (x, y) {
        var that = this, w = this
        b = w.D(x, y, 'd', 60).K('badGuy').bS(
            w.s.h(x, y)
        )
        b.draw = function (frame) {
            var b = this
            b.sp().rf(['r', 'g'],
                [frame[0], frame[1]], 60).dc(60)
        }
        b.h = b.health = 100
        b.cl(function () {
            b.h--
        })
        funcId = I(function () {
            b.draw(frameByHealth(b))
            if (b.h <= 0) {
                clearInterval(funcId);
                b.kill()
            }
            function frameByHealth(b) {
                if (b.h < 0) {
                    b.h = 0
                }
                if (b.h > 100) {
                    b.h = 100
                }
                if (b.h < 50) {
                    return [1 - ((b.h / 50)), 1]
                }
                else {
                    return [0, 1 - ((b.h - 50) / 50)]
                }
            }
        }, 300)
        return b
    }
    b.moveInCircle = function (rad, speed) {
        $l('b.moveInCircle')

        var g = G(arguments), rad = N(g[0]) ? g[0] : 100,
            speed = N(g[1]) ? g[1] : 2,
            toRad = Math.toRadians, cos = Math.cos, sin = Math.sin,
            b = this,
            ang = 0,
            x = b.X(),
            y = b.Y(),
            bX,
            bY

        T.t(function () {
            ang += toRad(speed)

            bX = rad * cos(ang)
            bY = rad * sin(ang)

            if (g.p) {
                bY *= 2
            }
            if (g.n) {
                bX *= 2
            }


            b.XY(bX + x, bY + y)
        })

        return this
    }

    GOOMBA = function () {
        W()


// could i automatically have body listen to their sens?
        w.ball().r(.3)
        workingGoomba = p = w.p(900, 450).cn('jump')
        p.my('hat', function () {
            p.bS('guy')
        })
        p.my('right');
        p.my('left')
        $.space(function () {

            if (p.my.right) {
                p.I(100, -400)
            }
            if (p.my.left) {
                p.I(-100, -400)
            }

        })


    }
    GG = function () {
        W({g: 0}).Y()

        w.gG(100, 100);
        w.gG(200, 200);
        w.gG(300, 300)

    }
    GREEN = function () {
        W({w: '@', g: 0})
        y = w.y(400, 200).K('pop')
        w.gG(400, 400)
    }
    COINWARP = function () {
        W({g: 0, w: 0}).Y()
        y.warp()

        score = 0
        badScore = 0
        // p = w.ship().K('player pop').warp()
        //p= w.p(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()


        gg = w.gG(300, 300).warp()

        _.ev(8, function () {
            w.coin().sen(1)
        })
        /*
         w.beg(function(cx){var fixt
         cx.with('coin','player', function(){this.B().kill()
         score++})
         cx.with('coin','greenGuy', function(){
         this.B().kill()
         badScore++
         })
         })
         */
        // w.coll('coin','player', function(){this.B().kill(); score++})
        // w.coll('coin','gg', function(){this.B().kill();badScore++})
        /*
         // w.class('coin')
         //   .with('player', function(c){c.setDestroy();score++})
         // .with('greenGuy', function(c){c.setDestroy();badScore++})
         w.class('coin').with({
         player: function(){score++; return true},
         greenGuy: function(){badScore++; return true}
         })

         */
        _.ev(3, function () {
            w.pen(score + ' / ' + badScore)
        })

    }
    SUNZOOM = SPACEGRAVMACH = function () {
        W({g: 0, w: 0})

        w.thrustPlayer = function (x, y) {
            var w = this, p
            p = w.p(x, y, 2.5, 'thrust').lD(.8).aD(10000)
            return p
        }
        w.stars(10)
        w.s.rXY(600, 300)
        w.s.XY(600, 300)
        p = w.p().cn('thrust')
        sun = w.sun()

        _.in(.3, function () {
            //sun.sp().twL([{r:360},10000])
        })
        //preload to the rescue ??
        w.dJ({a: p, b: sun, cl: 1}).fq(10).d(10).l(10)


        green(400, 100);
        green(400, 200);
        green(200, 100);
        green(200, 200)
        function green(x, y, fq) {
            w.dJ({
                a: w.gG(x, y),
                b: sun,
                cl: 1
            })
                .fq(N(fq, 1)).d(0).l(15)
        }

        b2d.scaleFunc = function (b1, b2, max) {
            max = N(max, 2)
            M.sqr = function (a) {
                return a * a
            }
            var dst = 150 / M.sqrt(
                    M.sqr(b1.X() - b2.X()) +
                    M.sqr(b1.Y() - b2.Y())
                )
            return dst > max ? max : dst
        }

        T.t(function () {
            w.s.sXY(
                b2d.scaleFunc(sun, p, 2))
            p.centerScale(b2d.scaleFunc(sun, p, 2))

        })

    }//

    ZIL = function () {
        W({g: 0, w: 0})
        health = 100

        y = w.ship().warp().cl(function () {
            health -= 5
        })


        z = w.zilla(600, 300).fireBallsAtInt(4000)


        w.show(function () {
            return 'health: ' + health + ', hits: ' + z.hits
        })
    }


}