preload()
function preload() {
    TXWQ = function () {
        WQ({}, function () {
            w.C('p').i.A(Q.b('me'), Q.b('guy'))
        })
    } // <- WQ({C:'r'})

    WINDING = function () {

        h = cjs.Shape.prototype
        h.copy = h.same = function () {
            return $h(this)
        }

        W()._(function () {
            //$.header().A($.h1('grahics winding')).A()
            h = w.i.h().graphics.f("pink").dr(20, 20, 450, 360)
                .arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
                .arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
            bm = w.i.qB('chicks').X(470).drag()


            bm.mask = h.same().X(470)
        })
    }

    QUEUEMUG = function () {
        W()._(function (w) {
            me = w.i.qB("me").drag()
        })
    }


    MF = function () {
        W().C('r')
        Q(
            ['me', 'guy', 'chicks', 'sun'],
            function () {
                w.C('g')
                w.i.A(
                    Q.b('me'),
                    Q.b('guy')
                )
            }
        )

    }


//err
    QTX = function () {
        WQ(function () {
            i = w.i.qB('me', 0, 0, 3)
        })
    }


    // its how i can preload someone's mug as 'mug' !//  mug= s.bData( qu.gR("mug") ).drag()

}
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
NEWSTG=function(){z()
    //three ways to make a new stage
    s = cjs.s('r',100 ).A().bm('me')
    s.can.drag()
    c= $.canvas('b',100).A().drag().XY(400)
    s1=cjs.s(c)
    s1.A().bm('me')
    c2= $.canvas('b',100).A().id('someId').drag().XY(300,100)
    s2=  cjs.s(['someId'])
    s2.tick().bm('me')

}
ONOFFTICK=function(){W({w:0}) // or text?
    //will break if u change it
    fun = w.s.t(ball)
    _.in(3, function(){
        w.s.xT(fun)
    })
    function ball(){
        if(R(5)<1){ w.ball()}
    }


}
DRAG=function(){z()
    $.dragStage()
}
TFSET= function(){W()._(function(){
    w.i.qB('me').grow().drag()

    i= w.i.qB('me').XY(200,200)

    ball = w.ball()

    _.in(3, function(){

        w.C('b'); ball.bS(i)

    })

    //  me.startMoving(10, 10)

    T.t(function(){iS = i.inStage()
        $l(iS)
    })
    b= w.i.qB('me')


    b.setTransform(0,0,2,.5,0,40,4,2,3)

    //m = b.getMatrix()
    function tf(a,b,c,d,e,f,g,h,i){
        return this.x=a||0,
            this.y=b||0,
            this.scaleX=null==c?1:c,
            this.scaleY=null==d?1:d,
            this.rotation=e||0,
            this.skewX=f||0,
            this.skewY=g||0,
            this.regX =h||0,
            this.regY =i||0,
            this}

})}
TEXT = function () {W()
    w.S(300, 100, 'z', 1500, 1)
    w.d('r', 300, 100)
    w.i.T('top').XY(300, 100).bl('+')  // should become + (counterintuitive i know.. but i noticed and fixed it!)
    w.i.T('bottom').XY(500, 100).bl('-')
    w.i.T('middle').XY(700, 100)
    w.dot(300, 400)
    nice = w.i.T('nice', 135, 'x', 300, 400)
    /*
     w.i.T('linewidth 0').XY(100,300).lW(0)
     w.i.T('linewidth null').XY(100, 500).bl('bottom')
     w.i.T('linewidth 100').XY(100, 700).drag().bl('middle').lW(800)
     w.i.T('lineheight -100').XY(700,300).lH(-100)
     w.i.T('lineheight 0').XY(700,500).lH(0)
     w.i.T('lineheight 100').XY(700,700).lH(100)
     w.i.T('linealign left').XY(600, 100)
     w.i.T('linealign right').XY(600, 200).tA('right')//.bl('bottom')
     w.i.T('linealign center').XY(600, 300).tA('center')//.bl('middle')
     */
    hello = 'fasdafsafsdfadsafafdsfadsafdsafdsfsd'
    w.show('hello')
}
SPEECH=function(){W()._(function(){
    t = w.i.T( 600, 300, 'hiiiiiiiiii', 200, 'r')
    ct = w.i.ct().drag()
    ct.h(200, 150).cir(130,'w').cir(100,50,100,'w')
    ct.T(250,150, 'yoyoyoo', 60, 'd')
    _.in(10, function(){ct.rm()})
    //ct.tw( [{   sxy:.1, x:x-250, y:y-250 }, 20000])
})}
WHYQ = function () {
    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false

    $.kU('l', function () {
        if ($.test) {
            $l('left lifted')
        }
        cjs.Keys.l = cjs.Keys.left = false
    })

    $.kD('l', function () {
        if ($.test) {
            $l('left pressed')
        }
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'
    })

    $.kD('l', function () {
        if ($.test) {
            $l('left pressed')
        }
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'
    })

    $.kD('r', function () {
        if ($.test) {
            $l('right pressed')
        }
        cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'
    })

    $.kU('r', function () {
        if ($.test) {
            $l('right lifted')
        }
        cjs.Keys.r = cjs.Keys.right = false
    })


    $.kD('u', function () {
        if ($.test) {
            $l('up pressed')
        }
        cjs.Keys.u = cjs.Keys.up = true
    })
    $.kU('u', function () {
        if ($.test) {
            $l('up lifted')
        }
        cjs.Keys.u = cjs.Keys.up = false
    })
    $.kD('d', function () {
        if ($.test) {
            $l('down pressed')
        }
        cjs.Keys.d = cjs.Keys.down = true
    })

    $.kU('d', function () {
        if ($.test) {
            $l('down lifted')
        }
        cjs.Keys.d = cjs.Keys.down = false
    })
}
FANCYEDIT = function (x, y) {


    z()

    canvas = $.canvas('g', 400)
    stage = new cjs.Stage(canvas[0]).tick()
    frame = $.dragFrame(theSpan = $.span())

    theSpan.A(
        $.button('X', function () {
            frame.remove()
        }),
        $.button('pics', function () {
            $.imagesDiv(stage)
        }),

        $.button('transform'),
        $.button('text'),

        $.button('paint', function () {

            _paintColor = '#0FF'

            var size = 10, oX = 0, oY = 0, shape

            var paintStage = $.dragStage()

            // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

            paintStage.bm(
                stage.du(), //?

                function (m) {


                    m.XY(40).sXY(.4)


                    stagePainter(paintStage)


                })


        }),
        $.button('cut'),

        $.button('save'))

    theSpan.A($.br(), canvas)

    theSpan.A($.div().A(
        $.button('clear', function () {
            stage.removeAllChildren()
        }),

        $.button('flat', function () {

            stage.removeAllChildren()

            stage.bm(stage.toDataURL(), function (bm) {
                bm.drag()
            })

        }),

        $.button('clone', function () {


            var newSpan = $span()

            var newStage = dragStage(newSpan)


            newStage.bm(stage.du(), function (bm) {
                SL(bm)

            })

        }),

        $.button('recur', function () {

            stage.bm(stage.du(), function (bm) {

                bm.sxy(.4)
                SL(bm)

            })
        }),

        $.button('copy', function () {

            _copy = stage.du()


        }),

        $.button('paste', function () {
            stage.bm(_copy, function (bm) {
                bm.drag()
            })
        }),

        $.button('replace', function () {

            stage.rm()
            stage.bm(_copy, function (bm) {
                bm.drag()
            })

        })
    ))

    theSpan.dblclick(function () {
        $('button').toggle()
    })


    theSpan.A()


}
ICEN=function(){Q(['guy','me'],function(){//z()
    s= new cjs.Stage( $.can( 'p', 1200, 600 )[0] ).A(); s.c=$(s.canvas)
    //s.bm('me', function(bb){b=bb.drag() })
    s.qB('guy').XY(300,300).spin()
    s.qB('guy').XY(300,300).sXY( .5, .3).spin()
    T.t(function(){ s.u() })
    _.in(3, function(){   T.f(1)   })
    _.in(9, function(){  T.f(1000)  })
})}
 CHICKBALLS=function(){
    W(1200,1200)._(function(){
        _.t(14, function(){
            w.D(R(1100,50),R(1100,50))
                .cir({bf:'chicks',r: 120})
        })})
}
HAIRBALLS = function () {
    W(400, 400)._(function () {

        //cjs.rulers()

        _.t(8, function () {
            var b = w.D(R(100, 50), R(100, 50), 'b', 10)
            b.$h('x', 'x', 1189).c('x', 'x', 200)
                .bf('sun', [0, .6, 10, 10, -40, 200])
                .cir(10)
            // <- b.C({c:'x', al:.4} )
        })

        $.d('b', 100, 100, 100, 100).drag()

    })
}
COOLBALLS = function () {
    W(400, 400).C('w')._(function () {
        //cjs.rulers()
        _.t(8, function () {
            var b = w.D(R(100, 50), R(100, 50), 'b', 50)
            b.$h('x', 'X', 1)
                .c('x', 'X', 1)
                .bf('sun', [0, .9, 1, 1, -40, 2])
                .cir(50)
        })
    })
}
CANVASBMFILLBALLS = function () {
    W(400, 400).C('w')._(function () {
        //cjs.rulers()
        w.p(0, 0, 10).stat()
        _.t(8, function () {
            w.D(R(100, 50), R(100, 50), 'b', 30)
        })
        w.$$(function () {
            _.t(8, function () {
                var b = w.D(R(100, 50), R(100, 50), 'b', 30)
                b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
            })
        })
        w.i.T(200, 100, '$$ me')
    })
}
CANTFBALLS2 = function () {
    W([400, 400], {w: 'U'}).C('w')._(function () {
        //cjs.rulers()
        w.p(0, 0, 10).stat()
        _.t(8, function () {
            w.D(R(100, 50), R(100, 50), 'b', 30)
        })

        $.ev(3, function () {

            var b = w.D(200, 200, 'b', 80)
            b.$h('x', 'X', 1).c('x', 'X', 1).bf(
                w.s.cv0,
                cjs.m2d(
                    .6, .1, .1, .6, -40, 180
                )
            ).cir(80)

        })
    })
}
TEXTBALLS = function () {
    W([400, 400], {}).C('w')._(function () {
        b = w.D(200, 200, 'b', 80)
        b.gx = b.gx || w.g.ct()
        b.gx.qB('chicks').rC().sXY(.1).Y(30)
        nice = w.i.T(0, 140, 'nice', 100, 'o')
        b.bS(nice)
    })
}
RADIANTBALLS=function(){s=$St('a')
    b1=s.cannonBall(100,200)
    b2=s.basketBall(100,100)
    b3=s.beachBall(50,50)
    b3=s.snowBall(50,300)
}
DIRTYBALLS=function(){W({  grav:0 })

    w.dirtyBall=function(x,y,stop1,stop2){
        return  this.gradBall(x, y, 60,'z','w',  stop1, stop2 )

    }

    w.gradBall(200,100,60,'z','w'  )
    w.dirtyBall(350,100,  0,  .9 )
    w.gradBall(500,100,60,'z','w',  0,  .6 )
    w.gradBall(650,100,60,'z','w',  0,  .3 )
    w.gradBall(800,100,60,'z','w',  0,  .1 )
    w.gradBall(350,300,60,'z','w',  .3,   1 )
    w.dirtyBall(500,300,  .6,   1 )
    w.dirtyBall(650,300,    .9,   1 )
    w.dirtyBall(800,300 ,  1,   1 )

}
STATUSBALL=function(){W({  grav:0 })
    b = w.D(500,300,'r',60).bS( w.s.h(500,300)  )
    num = 0
    dif = .1
    shape = b.sprite
    shape.rG(['r','y'],[0, num],
        0,0,0,0,0,60)
        .dc(0, 0, 60)
    _.ev(.1,function(){
        num += dif
        if(num>=1){ num=.9; dif= -.1 }
        if(num<=0){ dif = .1 }
        shape.rf(['r','y'],[0, num],
            0,0,0,0,0,60)
            .dc(0, 0, 60)
    })
}
SWITCHBALL=function(){W({g:0})

    b=w.D(500,300,'r',60)

    b.bS(
        w.s.h(500,300)
    )


    b.draw=function(frame){var b=this
        b.sp().rf(
            ['r','y'], [frame[0],frame[1]],
            0,0,0,0,0,60
        ).dc(60)
    }

    frames=[
        [0,.1],
        [0,.3 ],
        [0,.6],
        [0,.9],
        [0,1],
        [.3,1],
        [.6,1],
        [.9,1],
        [1,1]    ]


    curr=0

    _.ev(1,function(){
        b.draw( frames [curr] )
        curr++
        if(curr == 9){curr=0} })

}
HEALTHBALL =function(){
    W({g:0})
    w.badGuy(500,300)
}
SWITCHBALLWORKSBUTTOOCOMPLICATED=function(){w=b2d.W({  grav:0 })

    advanceN=function(n, dif){
        n += dif
        if(n>=1){n=.9; dif*= -1}
        if(n<=0){n=0; dif*= -1}
        return {n:n, dif:dif}}


    switchBall1=function(x,y){var  dif=.1,n1=0,n2= 0,
        b=w.ball(x,y, 60).bindSprite2( w.s.h(x,y) )

        I(function(){n2 = advanceN(n2); drawGrad()}, 100)
        function drawGrad(){
            b.sprite.rG(['r','y'],[n1, n2],  60 ).dc(0, 0, 60)}

        function advanceN(n2){

            n2 += dif
            if(n2>=1){n2=.9; dif*= -1}
            if(n2<=0){n2=0; dif*= -1}; return n2}

    }


    switchBall2=function(x, y){
        var   ball= w.ball(x,y, 60).bindSprite2( w.s.h(x,y) )



        ball.drawGrad = function(n1,n2 ){return this.sprite.rG(['r','y'],
            [n1, n2],  60 ).dc(0, 0, 60)}

        ball.animGrad1=function(){

            var that=this,
                dif=.1,  n2=1,  n1=0

            I(function(){
                    var res = advanceN(n1, dif)

                    dif = res.dif

                    n1 = res.n

                    that.drawGrad(n1,n2)},

                300)}


        ball.animGrad2=function(){

            var that=this,  dif=.1

            I(function(){
                    var res = advanceN(n1, dif)
                    dif = res.dif
                    n1 = res.n
                    that.drawGrad(n1)},
                300)

        }


        ball.animGrad1()




    }




    switchBall1(100,100)


    switchBall2(300,100)



    w.s.back.linGrad('u','p')
    w.s.HUD.bm('me', function(bm){  me= bm.sXY(.3).XY(1150, 550).drag()  })




}
TRIPLESTAGE= function(){w=b2d.W({  grav:0 })
    b = w.ball(500,300,60)
    b.bindSprite2( w.s.h(500,300)  )
    num = 0
    dif = .1
    shape = b.sprite
    shape.rG(['r','y'],[0, num], 60)
        .dc(0, 0, 60)
    w.s.HUD.bm('me', function(b){   b.XY(300).drag()   })
    w.s.back.bm('guy', function(b){   b.XY(200).drag()  })
    w.s.back.linGrad('b','z')
}
RADIANT=function(){W().P()

    p.lD(1).warp()

    $.space(
        function(){
            p.polyBul()}
    )

    badGuy=w.badGuy(
        400, 200).warp().den(.1)

    _.ev(.2, function(){
        w.s.pen('badGuy health: ' + badGuy.health)
    } )
}
MOVE=function(){z()
    d = $.div('b',100,100).A().drag()
    f = function(num){d.toR(num)}
    setInterval(f,100)}
MOVEWARP=function(){z()
    d = $.div('b',100,100).A().drag()
    f = function(num){d.toR(num)}
    setInterval(f,100)}
INPUTKEYS=function(){
    z()

    input =  $.input().A()

    $.span('span ').C('y').A().id('spn')



    input.on('keypress', function(e){

        $('#spn').text(

            $('#spn').text() + e.which
        )
    })
        .on('keyup',function(e){
            if(e.which==13){
                $l('enter')
                $('body').C('*')
            }})
        .on('keydown', function(e){
            var key = e.which, //why these nums?
                result = (key>48  &&  key<57)||  ( key>96 && key<105) ||  (key == 8)
            $l('result: '+result)
        })


}
INPUTUPDOWN  = function(){

    $.input().A()

    onTextInputKeyup(function(e){

        var dir =  (parseInt(e.which) == 38)? 'up'
            : (parseInt(e.which) == 40)? 'down'
            : 'neither'

        $l(dir)
    })

    function onTextInputKeyup(func){return $('input[type=text]').on('keyup', func)}
}
UPPERVSLOWERLETTERS=function(){
    //cool!
    z()

    i = $.input().A()

    i.on('keydown keypress',
        function(e){
            $l(e.type+':'+ String.fromCharCode(e.which) +'('+ e.which +')')})
}
HIDEONKEYDOWN=function(){z()

    c = $.canvas('r', 500).A()

    c.hideOnKeyDown()


}
RESPONSIVEBOTPANEL=function(){z()


    $.div('red').P('f').X(0).css({

        bottom: 0,
        width: '50%',  height: '50%',
        'min-width' :110,
        'max-width' :318,

        opacity: 4

    }).A().A(
        $.img('me')
    )



    // call and then play with browser size


}
SLOWFADEAWAY=function self(opacity){   z()

    //makes a yellow square and black dot??


    c = $.canvas('y',500,500).A()

    c.circle(10,10,10)

    opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001

    c.opacity(opacity).fillStyle('red').fillRect()

    if(opacity < 1){
        setTimeout(function(){
            self(opacity)}, 30)
    }
}
TESTWATCHKEYS=function(){z()
    $.test=true
    cjs.watchKeys()}
TESTKEYBOARD=function(){z()

    cjs.watchKeys()

    b2.mW({debug:true})

    w.footListener()


    //  p = w.addMe().controlMe('standard')

    b=w.ba()

    b.bindSprite('guy')

    b.controlMe('basic')

}
MES=function(){W([],{w:0})// what took me so long to make this?
    w.C('y')

    _.ev(1, function(){w.me(R(1000,100), R(-100) )})

    w.me(600,300,14).stat()
    w.l('z', 600,0,600,600)

}
JOY=function(){W()//.P()
    $.joystick  =function(){
        $('#left').on('mousedown mouseover touchenter', function(e){K.left = true ;e.preventDefault()})
        $('#left').on('mouseup mouseout touchleave', function(){K.left = false})
        $('#jump').on('mousedown mouseover touchenter', function(){  K.up = true   })
        $('#jump').on('mouseup mouseout touchleave', function(){  K.up = false  })
        $('#right').on('mousedown mouseover touchenter', function(){ K.right = true})
        $('#right').on('mouseup mouseout touchleave', function(){K.right = false })}
    w.brick(200,400, 80,20)
    w.brick(300,200,80,20)

    $.joystick()

    p= w.p(100,100,'power')
    p.r(.8)

}
