cam()
mario()
yip()
space()
function cam() {

    scroll()

    track()
    zoom()
    function scroll() {
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
        STREET = function () {

            W([1200, 600, 1400, 1200], {g: 300, t: 0})
            w.S(700, 1000, 'r', 800, 20)
            w.S(500, 800, 'g', 200, 20)
            w.S(900, 600, 'x', 200, 20)

            p = w.p(700, 600)
            w.fg.A(p.sp())

            w.track(p, 600, 400,
                {x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
        }
        SPUFF = function () {

            W(800, 600, 800, 800).G(0)


            w.S(200, 500, 'g', 100, 100);
            w.S(500, 500, 'w', 100, 100);
            w.S(1000, 500, 'r', 100, 100);
            w.S(1500, 500, 'g', 100, 100)

            y = w.ship(100, 100).rot(200)


            w.track(y, 500, 500, {x: 1000, y: 1000, w: 400, h: 400})

            BUFFER = function () {


                W([1200, 600, 4800, 1600], {g: 0, t: 0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')

                y = w.ship(100, 100).damp(1, 10).rot(90).lD(2).aD(2)
                    .rot(120)//.lV(1)

                w.bufFoll(y, 600, 300, {
                    x: 800, y: 300, mX: .8, mY: .8, w: 200, h: 200
                })


                // w.Z(.8)
            }

        }
        SLY = function () {
            W([1200, 600, 2400, 1000], {g: 300}).P()
            w.right.kill();
            w.left.kill()
            w.track(p, 300, 400, {
                x: 1200, y: 700,
                w: 800, h: 500,
                mX: 10, mY: 10
            })
        }
        SCROLLNOLIM=function(){W([1200,600,2400,1200], {  g:0 })
            w.S(1200,300,'r',400,100)
            w.S(1200,600,'w',[[100,100,'-']])
            w.S(1200,900,'r',400,100)
            y = w.ship(100, 100).rot(120).damp(1,10)

            w.Z(.8)

            w.track(y, 600,300,'-')
            w.dragScale=function(){var w=this,
                pX=0, pY= 0,  pmX,  pmY, o = {}
                c = $(w.i.canvas)

                c.mousedown(function(e){
                    o.Scl = w.z
                    o.Y = e.clientY
                })
                c.pressmove(function(e){
                    var x=e.clientX,
                        y=e.clientY,
                        newSc = o.Scl +  (o.Y - e.clientY) * .005

                    newSc = newSc>5?5  : newSc <.8 ?.8  : newSc
                    w.Z( newSc )

                })

                return this}


            w.dragScale()
        }//fix
    }

    function track() {


        CUPBALL = function () {//should zoom in when near cup
            CUPS()
            b = w.D(w.W / 2, w.H / 2, 'w', [[10]]).r(.8).track()
            cjs.tick(function () {
                b.F(0, -20)
            })
            w.showOff()
        }

        TRACKEE = function () {

            W([1200, 600, 2400, 600], {g: 10})
            w.S(400, 2500, 'r', 200, 100)
            w.S(800, 2300, 'z', 100, 100)
            w.S(1200, 2300, 'b', 300, 100)
            w.S(1600, 2300, 'z', 100, 100)
            w.S(2000, 2300, 'r', 200, 100)
            _.times(10, function (i) {
                w.D(100 + i * 100, 100, $r(), 35).den(.1)
            })

            y = w.ship(50, 50).mid()
            y2 = w.ship(100, 300).C('x').rot(180)


            //i thought i may want t for timer/ticker.. but time has no x and y !
            //move the stage by manipulating the trackee x,y
            //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?


            w.tRightLeft()

            w.showOff()


            setTimeout(function () {
                setInterval(function changeT() {
                    if (w.t == y2) {
                        w.C('b');
                        w.t = y
                    } else {
                        w.C('z');
                        w.t = y2
                    }
                }, 5000)
            }, 5000)


        }

        CAMFOLLOW = function () {
            W(500, 500, 1600, 1000).G(0)
            a = w.ship().C('b')
            b = w.ship(400, 400).C('o').track()
            I(5, function () {
                if (w.follA) {
                    b.track();
                    w.follA = 0
                }
                else {
                    a.track();
                    w.follA = 1
                }

            })


        }

        SHORTLONG = function () {
            W([900, 300, 3600, 300], {g: 0}).Z(3)
            w.S(1200, 300, 'r', 400, 100)
            w.S(1200, 600, 'w', [[100, 100, '-']])
            w.S(1200, 900, 'r', 400, 100)
            y = w.ship(200, 200).rot(120).damp(1, 10).track()
        }
        TRACKEECB = function () {
            W([1200, 600, 2400, 1200], {g: 300})
            w.S(400, 2500, 'r', 200, 100)
            w.S(800, 2300, 'z', 100, 100)
            w.S(1200, 2300, 'b', 300, 100)
            w.S(1600, 2300, 'z', 100, 100)
            w.S(2000, 2300, 'r', 200, 100)
            _.t(10, function (i) {
                w.D(100 + i * 100, 100, $r(), 35).d(.1)
            })
            w.Z('-')
            w.t = w.p(1175, 100, 'jump') // no need to call track?
            _.in(3, function () {
                w.C('x')
                w.t.cb = function () {
                    w.Z(w.z + .001)
                }
            })

        }

    }

    function zoom() {
        SHOWOFF = function () {
            W([1200, 600, 2400, 600], {g: 10})

            y = w.ship(50, 50).track()//.P(100,1000)

            w.S(400, 2500, 'r', 200, 100)
            w.S(800, 2300, 'z', 100, 100)
            w.S(1200, 2300, 'b', 300, 100)
            w.S(1600, 2300, 'z', 100, 100)
            w.S(2000, 2300, 'r', 200, 100)
            _.times(10, function (i) {
                w.D(100 + i * 100, 100, $r(), 35).den(.1)
            })
            w.showOff()

        }

        ZOOMSCALE = function () {

            W([1000, 1000], {
                g: 0, t: 0
            })

            w.dragX = function () {
                var w = this, d
                w.hud.c.m({
                    mD: function (x) {
                        d = x - w.s.x
                    },
                    pM: function (x) {
                        w.s.x = x - d
                    }
                })
                return w
            }
            w.dragY = function () {
                var w = this, d
                w.hud.c.m({
                    mD: function (x, y) {
                        d = y - w.s.y
                    },
                    pM: function (x, y) {
                        w.s.y = y - d
                    }
                })
                return w
            }
            w.drag = function () {
                return this.dragX().dragY()
            }


            // w.s.HUD.dot(500, 500)
            y = w.ship(100, 100).rot(200)
            w.S(500, 500, 'o', 200)
            w.S(500, 500, 'r', 10)
            w.S(200, 200, 'm', 40)
            w.S(800, 200, 'b', 60)
            w.S(800, 800, 'l', 80)
            w.S(200, 800, 'g', 100)

            //w.inout()
            w.drag()


            r = $.range().A()

            r.abs(775, 500)
            r.css('transform', 'rotate(90deg)')
            r.W(500).val(0)


            cjs.tick(function () {

                w.Z(r.val() / 25 + 1)

            })

        }//fix

    }
}
function mario() {

    MARIOS = function () {
        W().P().P().P()

    }
    MINI = function () {
        W({g: 10, W: 1000, H: 800})
        //d = $.div('y',1500,40).A().abs(200,200).pad(2)
        p = w.p(300, 200, 2, 'thrust')
        data = function (str) {
            if (U(str)) {
                str = 'data'
            }
            d.E($.h4(str))
        }
    }
    JFAL = function () {
        W({g: 10})
        w.right.kill()
        w.roof.kill()

        //w.s.sX(.95)
        num = 0;
        heads = 0
        y = w.ship()//.den(.3)

        _.ev(1, function () {
            w.me(100, 100).K('head')
            num++
        })

        //w.show(function(){return num + ' - ' + heads  })
        game = true
        tickFunc = function () {
            /*
             if(num > 30){
             $.pop('score: '+heads)
             num=0
             heads=0
             w.each(function(b){
             if(b.data() == 'head'){
             b.kill()
             heads++}})}
             */
            if (game) {
                if (num > 60) {
                    game = false
                    $.pop('score: ' + heads)
                }
                else {
                    w.e(function (b) {
                        if (b.K() == 'head' && b.Y() > 600) {
                            b.kill();
                            heads++
                        }
                    })
                }
            }
        }

        cjs.t(tickFunc)
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
}
function yip() {

    OBSTACLES= function () {
        W(10).Y()

        _.t(20, function () {
            w.S(R(500), R(500), $r(), 20)
        })
    }
    BIGSHIP = function () {
        W([1200, 600, 2400, 600], {g: 0})
        w.y({
            c: 'b',
            sc: 20
        }, '+')

    }
    YIP = function () {
        W({g: 4})
        y = w.y(300, 400, 3, '-').rt(90)
        y1 = w.y(600, 400, 3, '-').rt(90)
        _.ev(.5, function () {
            y.I(0, -4)
            y1.I(4, 0)
            y.I(0, -.7).rt(4, '+')
            y1.lV(0, -3).rt(4, '+')
        })
        _.in(.5, function () {
        })
        YIPPY = function () {
            _.ev(1, YIP)
        } //ok this is crazy cool.. but something is wrong.  something is not getting reset, because force gets bigger each time
    }
    BLUE = function () {
        W({g: 0})

        y = w.y('b', 200, 300, 6).aD(1).lD(1).r(0).fr(1).K('guy')
        _.t(5, function () {
            w.y(R(600, 50), 300, 3, '-').K('bad').rt(45)
                .push('+')
                .shtEv('badBul')
        })
        w.cl('badBul', function (f) {
            this.B().kill()
            //if(f.of('bad')){
            f.B().kill()
            //}
        })
    }

    WAR = function () {
        W({g: 0})
        var n = 0, x = 50, Y = 50
        w.cl('bul', 'bad', function (bad) {
            this.B().kill();
            bad.B().kill()
        })
        _.t(10, function () {
            w.y(x += 4, Y += 2, 3, '-')
                .K('bad').rt(R(90))
                .push(20, '+')
                .shtEv(300, 'deathBall')
        })
    }
    STUM = function () {
        W({g: 3})
        y = w.y(300, 400, 3, '-')
        _.ev(.1, function () {
            var v = y.v(0, 1.5)
            v = V(M.tD(v.x), M.tD(v.y))
            y.I(0, v.y / 5).rt(2, '+')
        })
    }
    ARM = function () {
        W()
        y = w.ship(500, 200)
        b = w.S(300, 300, 20, 200)
        a = w.S(300, 300, [['b', 200, 50, 100, 0]])
        _.ev(.1, function () {
            a.rot(1, '+')
        })
    }



}
function space() {
    SPACEMAZE = function () {
        W({g: 0, w: 0})
        _.t(30, function () {
            w.D(R(1000, -500), R(800, -400), 'w', 2).d(0).r(2)
        })
        grid = w.grid([
            [1, 0, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1]


        ], 100, -100, 14, 40)// grid.aD(1)
        p = w.p(220, 70, 2.5, 'thrust').aD(10000)
            .track()//.follow(300, 150)
        score = 100
        cjs.t(function () {
            grid.aV(.2)
        })//w.s.HUD.pen(score)
        w.b(function (cx) {
            if (cx.w('player', 'grid')) {
                score--
            }
        })
    }


    TALK = function () {
        W({g: 0, w: 0})
        score = 0
        shots = 0

        p = w.me(500, 300).stat()


        _.t(100, function () {
            w.D(R(2200, -1000), R(1600, -1000), $r(), R(14, 8)).lD(2)
        })

        /*
         $.space(function(){//can double on on shots!!!
         setInterval(function(){
         p.shoot(); shots++ }, 200)
         })  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)
         */
        w.cl('ball', 'bullet', function () {
            // score++;  cx.destroy()

        })


        cjs.t(function () {
            p.XY(500, 300)
            if (cjs.Keys.left) {
                p.rot(8, '-')
            }
            if (cjs.Keys.right) {
                p.rot(8, '+')
            }
            if (cjs.Keys.up) {

                w.e(function (b) {
                    if (
                        !b.of('bul') && !b.of('player')
                    ) {
                        b.I(p.vec(0, -100).div(-50))
                    }

                })


            }

        })
    }
    CLICKSHOOT=function(){W({g: 0})

        p = w.me(800,300).aD(10000)
        w.tim(7)

        w.b(function (cx){
            cx.w('bul', 'tim', function (t) {t.B().kill()})
            cx.w('bul', p, function () {this.B().kill()})
            cx.w('tim', p, function () {p.kill()})})


        $.click(function(e){
            var x=e.pageX-p.X(),  y=e.pageY-p.Y(),
                rot= M.tD(M.atan(y/x)),
                adj= x>0?90:270
            p.rot(rot+adj).I(x/20,y/20)
            w.bul(p.wP(0,-100),10).I(x,y) //.bS({i:'sun', sc:.1})
        })


//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)

    }
    orbit()
    green()
    function orbit(){
        SCSPOOM=function(){W({g:0,w:0});w.cen('+')
            w.s.rXY(w.hW, w.hH)
            star= w.S(200, 200, 'p', 100).den(1).bo(2)
            star.bS('earth',.13)
            w.dJ(
                p= w.p(200,200,2.5, 'thrust').horizCenter().den(.4).aD(8).lD(.8),
                star
            ).freq(.15).damp(0).len(50)
            cjs.t(function(){trans(cjs.cap(300/M.dist(star,p),.3,2))})
            function trans(Z){w.s.sXY(Z)
                w.s.XY(w.hW-(p.X()-w.hW)*Z,
                    w.hH-(p.Y()-w.hH)*Z)}
        }
        SPACEYOYO = function () {
            W({g: 0, w: 0})
            w.stars()
            p = w.p('thrust', '+')
            star = w.sun(200, 200)
            w.spg(p, star).fq(3).d(4)
        }
    }
    function green(){
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
    }
}
terr()
function terr() {
    works()
    function works() {
        MEET = function () {
            W([1200, 600, 1200, 600], {g: 10})


            //  w.l(600,0,700,500)//hud


            //  w.l(1000,200, 100,900,'-') //red

            //  w.l(50,50,500,350,'/')

            //  w.l(200, 200, 500,500,'+')
            //  _.t(10, function(i){w.D(100+i*40,100).cir({r:35,lf:{c1:'*',c2:'*'}}).d(.1);w.D(100+i*40,100).cir({r:20,lf:1}).d(.1)})


            /*
             _.t(10, function(i){
             w.D(100+i*140,160).cir({r:50,

             rf:{
             c1:$r(),
             c2:$r(),
             }
             }).den(.1)})


             w.D(800, 300).cir({r:120,
             C:'y',   l:2,  bf:'me', ls:['y','x']//?
             }).den(.1)


             */
            //i thought i may want t for timer/ticker.. but time has no x and y !
            //move the stage by manipulating the trackee x,y
            //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?


            //  y = w.ship(50,50 ).C('d').mid().track()


            y2 = w.y(100, 300)//.C('x').rot(180)


            //w.tRightLeft();//w.showOff()

            _.evx(5,
                function () {
                    if (w.t == y2) {
                        w.C('w');
                        w.t = y
                    }
                    else {
                        w.C('z');
                        w.t = y2
                    }
                })


            /* w.S(800,300,'r',200,800)
             .cl('bul',function(bu){
             this.sub( bu.B().exp(),'-')})


             w.S(200,300,'r',200,800).cl('bul',function(bu){bu=bu.B()
             var v=bu.pos()
             bu.kill()
             w.pol(v.x,v.y,
             M.p([[0,50],[-50,0],[0,-50],[50,0]])
             ).stat()})
             */
            //y.track()


            t = w.S(500, 300, 'g', 200, 800)

            t.cl(//'bul',
                function (bu) {
                    var v

                    bu = bu.B()

                    v = bu.XY()// v=bu.kill()

                    p = M.p([[0, 100], [-100, 0], [0, -100], [100, 0]]).ger(v)
                    w.rad(v.x, v.y, 15, function (f) {
                        f.sub(p)
                    })//t.fs(function(f){f.sub(p)})
                    t.fs(function (f) {
                        f.C($r())
                    })


                })


            /*
             //pol
             w.D(200,300).pol({
             v:[[0,100],[0,-100],[200,-150],[200,150]],
             c:'y',C:'w',l:5,
             bm:1})
             w.D(800,300).pol({
             v:[
             [[5,100],[0,-100],[200,-150],[200,150]],
             [[-50,50],[-50,-100],[450,-50],[450,50]]
             ],
             c:'b',C:'X',
             bm:1})



             b=w.D(100,300)
             pf = b.pol({s:1, C:'y',
             v:[[-200,-100],[0,-200],[100, -100]] })
             pfs =  b.pol({s:1, C: 'o',
             v: [  [-100, 0],  [0, -200],  [100, 20],    [0, -150] ]})


             cf = b.cir({k:'cir', r:100, x:200, y:-100, d:.2, b:.8, f:100, C:'x'})
             rf = b.rec({x:100, y:100,w:10,  h:100,   C:'x'})
             */


            /*
             //turtle
             turtle =[
             ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
             ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
             ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
             ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
             ['x', 10, 55,-12],
             ['u', 30,40, 75,-12]]
             w.D(400, 280,turtle, '-')  //this changes the data object for future uses !!!
             w.D(600, 280, [
             ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
             ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
             ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
             ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
             ['x', 10, 55,-12, '-'],
             ['u', 30,40, 75,-12 ,'-']])
             */
        }
    }

    SEB = function () {
        W({g: 1})//w.show(function(){return b.num()})
        b = w.D(800, 300, 'r', 200, 800).stat().K('terr')
        y = w.y().lD(3).X(1100)
        p = w.p(200, 400).K('jason');
        //setTimeout(function () {p.sprite.sXY(.5)}, 1000)
        can = true
        w.b(function (cx) {
            var fixt, j, bull, terr, bX, bY, br
            if (fixt = cx.w('bul', 'terr')) {
                bull = fixt[0].B()
                terr = fixt[1].B()
                bX = bull.X()
                bY = bull.Y()
                bull.kill()
                if (can) {
                    can = false
                    // b.minusPolyCirc(bX, bY, 100, 7)
                    poly = M.p(_.m(b2d.pC(100, 7), function (v) {
                        return [v.x + b.X(), v.y + b.Y()]
                    }))
                    // verts = b.sub(poly)
                    br = w.pC(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(
                    b.sub(br, '-') // br.kill()
                    //  b.color('r')
                    can = true
                }
            }
            else if (fixt = cx.w('jason', 'bul')) {
                $l('bullet hit jason!!!!');
                j = fixt[0].body();
                //j.sprite.tween([{sxy:20, r:100}, 1000])
            }
        })
        f = function () {
            v = h.verts()
            v.unshift('b')
            v.unshift(200)
            v.unshift(200)
            w.B.apply(w, v)
        }
        killIfSmallx = function (f) {
            var area = f.area();
            if (area < 20) {
                $l('too small: ' + area);
                f.kill()
            }
        }

    }
    TERREASEL = function () {
        z()
        s = stage = $St(1600, 600).A()
        h = s.h()
        h.f('b').dc(200, 200, 10)
        h2 = s.h().X(700)
        h2.f('b').dc(0, 0, 10)
        tile = function (i, j) {
            return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
        }   // lower left //upper left//upper right//lower right
        draw = function () {
            terr = []
            _.t(13, function (i) {
                _.t(8, function (j) {
                    terr.push(tile(i * 50, j * 50))
                })
            })
            h.drawPolygons(terr, 'b', 'r')
        }
        draw()
        t = M.p(terr[101])
        doExplosion = function (e) {
            v = V(e.stageX, e.stageY)
            exP = circ(v, 100)
            h.drawPolygon(exP, 'z')
            c = Math.p(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
            // explosion polygon. This should be optimized in some way, checking only for terrain polygons
            // which are actually affected by the explosion.
            // Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
            // difference is calculated.
            iX = c.intersection(t)
            h2.drawPolygon(iX.verts())
            for (var i = terr.length - 1; i >= 0; i--) {
                totalArea = 0
            }
        } // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
        circ = function (v, rad, prec) {
            prec = N(prec) ? prec : 20
            arr = [];
            ang = 2 * Math.PI / prec
            _.times(prec, function (i) {
                pX = v.x + rad * Math.cos(ang * i)
                pY = v.y + rad * Math.sin(ang * i)
                arr.push(V(pX, pY))
            })
            return arr
        } // listeners: basically we destroy the terrain with a mouse click or a mouse drag
        // stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
        // stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
        stage.on('click', doExplosion)
        vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
        h.drawPolygon(vv, 'z')
        vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
        h.drawPolygon(vvv, 'z')
    }
    TERR = function () {
        W()

        explosion = function (x, y) {
            var c, b

            c = w.pC(x, y, 30, 5)

            b = b2d.sep(circ(V(0, 0), 30, 5)).XY(x, y)
            return {c: c, b: b}

        }

        sep = b2d.sep()
        terr = w.ter()
        w.dot(420, 200);
        w.dot(410, 210)
        t = terr[103]
        /*



         s = b2d.sep(t.b.f().vs()).stat()//.XY(100,100)
         exp = explosion(740, 395)
         M.p(exp.cir)

         dif = t.poly.D(exp.cir)

         t.b.f().kill()


         bb = b2d.sep(t.b, dif.vs()).stat().XY(0, 0)


         // setTimeout( function(){ t.bod.X(20) }, 2000)

         */
    }
    TER = function () {
        W().C('z')

        terr = w.ter()
        w.dot(420, 200);
        w.dot(410, 210)
        t = terr[103]

        fn = function (f) {
            f.B().kill()
        }
        o = {x1: 550, y1: 250, x2: 600, y2: 500, fn: fn}
        // w.Q(o)

        w.rad(550, 250, 35, fn)


    }
}