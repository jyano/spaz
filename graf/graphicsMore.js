
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


ONOFFTICK=function(){W({w:0})
    //will break if u change it
    fun = w.s.t(ball)
    $.in(3, function(){
        w.s.xT(fun)
    })
    function ball(){if(R(5)<1){ w.ball()}}


}
DRAG=function(){z()
    $.dragStage()
}

TFSET= function(){W()._(function(){
    w.i.qB('me').grow().drag()

    i= w.i.qB('me').XY(200,200)

    ball = w.ball()

    $.in(3, function(){

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
    $.in(10, function(){ct.rm()})
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
    $.in(3, function(){   T.f(1)   })
    $.in(9, function(){  T.f(1000)  })
})}




touchEnable = function (s) {
    cjs.Touch.enable(s);
    return s
}//important for ipad//move this onto stage itself


old=function(){
    ct.bmR=   function(i,fn){var ct=this,bm
        alert('ct.bmR')
        $.i(i, function(i){
            bm = $Bm( i[0] ).a2(ct)
            bm.rXY(
                bm.W()/2,
                bm.H()/2
            )
            if(fn){ fn(bm) }
        })
        return ct
    }
}

//to shape -> ct.circle = function(x,y,r,c){var ct=this;ct.A(cjs.circle(x,y,r,c));return ct}

// 'P' is avaible.  potition?  (M is taken by Math, but mouse needs something)





old=function(){

    q.mf = q.manifest = function () {var q=this,g=G(arguments)
        q.loadManifest(cjs.mf.apply(null, g))
        return q}
    cjs.lQDep= cjs.lqDep=cjs.loadQueueDep=function(mf,fn){
        var q = new cjs.LoadQueue(true)
        if(A(mf)){q.loadManifest(cjs.mf.apply(null, mf))}
        if(F(fn)){q.complete(function () {fn(function (i) {return q.getResult(i)})})}
        return q}
    cjs.mfDep = cjs.manifestDep = function(a){var g=G(arguments), mf=[]
        _.e(g, function (v) {
            mf.push({
                src: cjs.src(v),
                id: v})})
        return mf
    }

    //cjs.handleFileLoad = function (e) {if (e.item.type == "image") {images[e.item.id] = e.result}}
//cjs.makeManifest = cjs.makeMan=function(a) {return cjs.manifest.apply(null, _.m(a.images, function (i) {return Graphics.fromSource(i)}))}

    QDep=function(i,fn){
        q=cjs.lQ(),
            mf=[]
        _.e(i,function(v) {mf.push({src: cjs.src(v), id: v})})
        q.mf(mf)
        q.c(function(){fn(q)})
        return q}

    tickX=function(e){j.Y(e.delta/1000*100,'-' )}
    timeStamp2 = function(s, j, pxPerSec){
        var fn=function(s,e){
            if(!N(j.ts)){j.ts=0;j.lts=e.ts}
            else{j.ts= e.ts-j.lts;j.lts=e.ts
                j.y((j.ts/1000) * pxPerSec,'-')  }}
        return s.t(fn)}
}

function balls(){

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
    RADIANTBALLS=function(){s=cjs.S('a')
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
        b = w.D(500,300,'r',60).bS( w.s.shape(500,300)  )
        num = 0
        dif = .1
        shape = b.sprite
        shape.rG(['r','y'],[0, num],
            0,0,0,0,0,60)
            .dc(0, 0, 60)
        $.ev(.1,function(){
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

        $.ev(1,function(){
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
            b=w.ball(x,y, 60).bindSprite2( w.s.shape(x,y) )

            I(function(){n2 = advanceN(n2); drawGrad()}, 100)
            function drawGrad(){
                b.sprite.rG(['r','y'],[n1, n2],  60 ).dc(0, 0, 60)}

            function advanceN(n2){

                n2 += dif
                if(n2>=1){n2=.9; dif*= -1}
                if(n2<=0){n2=0; dif*= -1}; return n2}

        }


        switchBall2=function(x, y){
            var   ball= w.ball(x,y, 60).bindSprite2( w.s.shape(x,y) )



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
        b.bindSprite2( w.s.shape(500,300)  )
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

        $.ev(.2, function(){
            w.s.pen('badGuy health: ' + badGuy.health)
        } )
    }

}





old=function(){

// s.B = function(x,y){return this.ct(x,y).drag() }
    /*
     $a1=function(ob, g, c){

     ob.apply(c||ob,  g)

     }


     $a = function(gx, met, g){

     gx[met].apply(gx, g)

     }


     $a(gx, 'dc',  N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.app=function(met,g){var gx=this

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     }
     */


    cjs.RECTx= function(c, W, H, x, y, a){var  g=G(arguments),    ct = cjs.ct(), h, o; if(O(c)){o=c} else if(S(c)){o={ c:c, w:W, h:H, x:x, y:y, a:a } }
        o = b2d.oDef(o)
        h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot( o.a )
        if(o.bm){h.bm('me', function(){h.dr2(o.x, o.y, o.w, o.h)}); return h}
        if(o.rg){h.rg(o.c,o.C)}
        if(o.lg){h.lg(o.c,o.C)}
        h.dr2(o.x, o.y, o.w, o.h)
        cjs.recx=cjs.rectx= function self(wd, ht, c, C){var h,hW,hH
            wd=_.tN(wd,100)
            ht=_.tN(ht,wd)
            hW=wd/2
            hH=ht/2
            h=$h().c(c||'g',C||'w').mt(-hW,-hH)
                .lt(-hW,hH).lt(hW,hH).lt(hW,-hH).lt(-hW,-hH)
            return h
        }
        ct.artx = function(x,y,c,C){var g=G(arguments),ct=this,h

            y= N(g[1])?g[1]:x
            c= S(g[2])?oO('c',g[2]):null
            C= S(g[2])?oO('c',g[3]):c

            h = $h(x,y,c,C).a2(ct)

            if(g.p){h.drag()}
            return h}
        return h}

//b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}
//cjs.chalk=function(t,c){if(O(t)){alert('check code'); t='x: '+t.x+', '+'y: '+ t.y}; return cjs.T(t,"26px Arial", c||"w").XY(550,150)}
    /*
     w.i.bm('me', function(bm){
     bm.XY(300).sXY(.2)
     w.i.dot(300,300)
     })*/
//third wheel, wagon hitch



}