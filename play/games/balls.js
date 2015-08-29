
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
$.dragStage = function (x, y) {
    s = $St('v', '+')
    return $.dragFrame($(s.canvas))
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








function createStuff(){
    $El = cjs.el = function (a) {
        a = $(a)[0]
        return new cjs.DOMElement(a)
    }
    ELM = function () {
        z()
        d = $.d('r', 400, 400).A($.ip()).drag()
        el = $El(d)
        s = $St('y').t()
        s.A(el)
        // tw(el, [{x:300,y:300},2000])
        // tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
    }

}

$.fn.hideOnKeyDown = function(a){
    var that = this
    $('body').keydown(function(ev){e=ev
        $l(e.which)
        if(e.which == 40){ that.hide()  }
        if(e.which == 38){ that.show()  }
    })
}


testMove=function(){z()
    d = $.div('b',100,100).A().drag()
    f = function(num){d.toR(num)}
    setInterval(f,100)}
testMoveAndWarp=function(){z()
    d = $.div('b',100,100).A().drag()
    f = function(num){d.toR(num)}
    setInterval(f,100)}
testInputKeys=function(){
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
testInputUpOrDown  = function(){

    $.input().A()

    onTextInputKeyup(function(e){

        var dir =  (parseInt(e.which) == 38)? 'up'
            : (parseInt(e.which) == 40)? 'down'
            : 'neither'

        $l(dir)
    })

    function onTextInputKeyup(func){return $('input[type=text]').on('keyup', func)}
}
//cool!
testUpperVsLowerLetters=function(){z()

    i = $.input().A()

    i.on('keydown keypress',
        function(e){
            $l(e.type+':'+ String.fromCharCode(e.which) +'('+ e.which +')')})
}
testHideOnKeyDown=function(){z()

    c = $.canvas('r', 500).A()

    c.hideOnKeyDown()


}

responsiveBottomPanel=function(){z()


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

slowFadeAway=function self(opacity){   z()

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
drawHalf=function(c,i){c.dI(i, -i.width/2, -i.h/2)}


//parallax!!!
function CanvasLayer(bg){
    var can = $.c('y',500,500).P('a').width('100%').H(256)
    if(bg){can.background(bg)}
    return can}
function DivLayer(bg){
    var div = $.d('y',500,500).P('a').width('100%').H(256)
    if(bg){div.background(bg)}
    return div}
function transparent(img, num){
    if(!N(num)){ return 'transparent url('+img+'.png)'  }
    return 'transparent url('+ img +'.png)' + num +'% 0px'
}
PARALLAX=function(){z()

    CanvasLayer(
        transparent('me', 10)).A()
    CanvasLayer(
        transparent('guy', 300)).A()


}
//awesome!!!!!
PARALLAXBYMOUSE=function(){z()



    back=DivLayer(transparent('me') ).A()
    front=DivLayer(transparent('guy')).A()

    speed=0
    xp=0

    $('body').mousemove(function(e){

        speed= e.pageX - ( W()/2 )

        speed /= ( W()/2 )

        $l(speed)
    })

    $('body').mouseout(function(e){speed=0})


    setInterval(function(){
        xp += speed

        back.backgroundPosition( xp+'px 0px')

        front.backgroundPosition( (xp*3)+'px 0px')

    },30)}


drag = drg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){

        var offset = $(this).offset(),

            deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top

        $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
            .on( 'mouseup' , function(){  $(this).off() })

    })

    touchDrg(element)
    return qq(element)

}



$.fn.toR = $.fn.moveRight=function(num){
    num=num||20
    if(this.left()=='auto'){this.left(0)}
    this.left( parseInt(this.left()) + num)
    return this}
$.fn.toL = $.fn.moveLeft=function(num){
    num=num||20
    if(this.left()=='auto'){this.left(0)}
    this.left( parseInt(this.left()) - num)
    return this}
$.fn.toU =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  - num  )
    return this}
$.fn.toD =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  + num  )
    return this}

function alpha(){
    T = function(times,func){
        var timeout
        if(N(times)){

            return _.t(times, function(i){
                func(i+1)
            })

        }
        if(F(times)){
            timeout=N(func)?func:100
            func=times
        }
        return setTimeout(func,timeout)
    }
    $.in = function () {
        var g = G(arguments), o, n = 1,
            ret

        if (N(g[0])) {
            o = {s: g[0], fn: _.r(g)}
        }

        else {
            o = {s: 1, fn: g}
        }
        _.e(o.fn, function (fn) {
            var s = o.s * n
            ret = setTimeout(_v(fn), s * 1000)
            n++
        })
        return ret
    }

    $.T = function (a, b) {
        return setTimeout(_v(a), b)
    }


}
bad=function(){

    //xP=function(a){return Utils.props('X', X(a))}
//xM=function(a){return Utils.methods('x', X(a))}
//tf=function(){n=1;t=true;T(function(){t=false},1000);I(function(){if(t==true){co();n=n+1}else{$l(n)}},1)}


    $.inASec=function(func){return setTimeout(func, 1000)}
    cjs.waitFor=function(time){time=N(time)?time:1000
        cjs.wait = true
        setTimeout(function(){cjs.wait = false}, time)}
    Qx=function Q(a){
        if(!O(a)){return}
        if(s$(a.toString()).contains('Window')||a[0]
            && s$( a[0].toString()).contains('Window')){
            return $(window)}
        return a.name === 'q'? Q(a.q)
            :E(a)? $(E(a))
            :0

    }





//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

//Object.prototype.__C = function(){ return this.constructor.name }

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////////////////////////////////////////////////





    gT = withGetTest = function(url){
        $.get('/'+url, function(aa){a=aa})
    }


    vkl=function(a){
        return new Function("v","k","l","l[k]=" + a)
    }
    $.sec=function(f){return setTimeout(f,1000)}
    oO.V = values=function(a){if(S(a)){ a=oO(a) };return _.values(a)}

    scaleXandYBy = scl=function(v,a){
        v.x*=a;
        v.y*=a;
        return v
    }

//??? sub=function(a,b){return a.o('s',b)}


    _lX=function(a,b){

        if(F(b)){$(a).load(b);return a}
        return _.l(a,b)

    }
    _mX = function (a, b, c) {
        return F(b) ? _.m(a, b, c)
            : A(a) ? _.min(a) : function (z) {
            return z * a
        }}

    _hX=function _h(a,b,c){
        if(O(b)){return _h(b.toString(), a)}
        if(S(a)){ return s$(a).contains(b,c)}
        if(O(a)){
            if(U(b)){
                return a.height?(F(a.height)?a.height():a.height):F(a.h)?a.h():N(a.h)?a.h:false}
            if(N(b)){
                if(F(a.height)){a.height(b);return a}
                if(N(a.height)){a.height=b;return a}
                if(F(a.h)){a.h(b);return a}
                if(N(a.h)){a.h=b;return a}}
            return A(a)? _.contains(a,b): _.has(a,b)}
        if(U(a)){

            return qq($('html'))

        }
    }





    _IX=function(a,b){return U(a)?new Image()
        : U(b)? _.invert(a)
        : _a(_.intersection, arguments)

    }


    IX=function(a,b){if(N(b)){return setInterval(_v(a),b)}
        if(_h('Image', E(a))){return E(a)}}

    _wX=function(a,b){
        if(O(a)){
            var w=function(a,b){if(_.isUndefined(b)){return a.width}
                a.width=b;return a}
            if(U(b)){return F(w(a))?a.width():w(a)?w(a):F(a.w)?a.w():a.w}
            if(F(w(a))){a.width(b)}
            else if(w(a)){w(a,b)}
            else if(F(a.w)){a.w(b)}
            else {a.w=b}

            return a}}




//fCC=function(a){ return String.fromCharCode(a) }




//qx = function(a){return xx(qi(a))}


//ddd=function(){return (d=_d().c('y').Z().a())}
//ccc=function(){return (c=$b($c()).drg())}

//test functions
//fA=function(a){return function(){alert(a)}}
//fL=function(a){return function(){$l(a)}}
//a3=function(){alert(3)}
//a4=function(){alert(4)}
//al=function(a){a=a||':)';alert(a);return a}

    H=function(a){
        var oH=function(a){
            if(O(a=a||$(window))){return Q(a).outerHeight()}}
        a=a||$(window);return N(a)? W()/a:oH(Q(a))}

//logic
    df=function(a,b){
        a=ob(a)
        return G(arguments).p? D(a, oO(b||''+'D'))
            :D(a)?a :b}



//cL=function(a){console.log(a);return a}

    ll=function(a,b){
        if(S(b)){console.log(a+': '+b)}
        else {
            $l(a+' ->')
            $l(b)}
        return b}
    _iX=function(a,b){

        return U(a)? qq('i'):

            A(a)? _.i(a,b): pI(a)
    }


    //is=function(a){return function(b){return b===a}}
//_.io$=function(a,b,c){return a.indexOf(b,(c<0?c+_z(a):c))}



//_j=function(a,b){return(a||[]).join(b||' ')}
//K=function(a,b,c){return N(a)? I(b, a*1000): N(b)? I(a, b): _.keys(a)}


//graphics
    onReady =_k = function(a){return O(a) && a.complete}



    obX=function(o){ // ************
        var g=G(arguments);
        return !O(o)? {}
            :g.p? o.clone()
            :o}



    _s=function s(a,b,c){

        var g=G(arguments)

        if(D(g[1])){a[b]=c;return a}

        if(U(a)){return qq('s')}

        return src(a)
    }



    iW = function(a){if(O(a=a||$$w)){return Q(a).innerWidth()}}
    iH = function(a){if(O(a=a||$$w)){return Q(a).innerHeight()}}


    $t = function(a, b){if(b2d.test){
        var g=G(arguments),
            a=g[0],
            b=g[1],str




        if(D(b)){

            str='||'
            _.e(g, function(s){
                str+=  ' '  + s.toString() + ' |'
            })

            str += '|'
        }

        else {
            str = a.toString()
        }


        $l(str)



    }; return a}



    Wx=function(a){var g=G(arguments)
        var oW=function(a){if(_.isObject(a=a||$(window))){
            return Q(a).outerWidth()}}
        a=a||$(window);
        return N(a)?W()/a:oW(Q(a))
    }


//just returns toDataUrl() on an object, safe
    tU=function(a){
        if(
            O(a) && F(a.toDataURL) ){
            return a.toDataURL() }


//tU=function(s){return  S(s)?sJ:tU(s)? tU(s)
// :s.u? s.u():iI(s)? s.src
// : s.image?s.image.src:0} //s/c/C/i/b->s sync
    }

    tDU=function(a){return a.toDataURL()}


    _W=function(a,b){

        if(U(b)){return a.which}
        return a.which==b
    } //_.without



    RX=function(a,b){

        var g=G(arguments)

        return( S(a) && S(b) )? (
            g.N? s$(a).ensureRight(b).s

                : s$(a).chompRight(b).s    )

            : N(b)? _.range(a, b)

            : N(a)? (g.P? _.range(a):  _.range(1,(a||10)+1)   )

            : new XMLHttpRequest()

    }
    _S = function (a, b) {
        return b ? String(a).split(b) : a.toString()
    }
    _r = function r(a, b, c, d) {

        return U(a) ? rnd()
            : (F(b) && D(c)) ? _.reduce(a, b, c)
            : (F(a) && D(c)) ? _.reduceRight(a, c, b)
            : (F(a) || F(b)) ? r(c, a, b)
            : N(a) ? _.random(a, b, c)
            : S(a) ? a.replace(b || '#', c || '')
            : _.rest(a, b)
    }
    ok = function (a) {
        return a || 'ok'
    }

    _P=function(a,b,c){
        return  S(a)?JSON.parse(a,b)
            :$(a).prepend(b,c)}

    P=function(a){
        return O(a)&&!F(a)&&!A(a)&&!(E(a))}


    _p=function(a,b,c){

        if(U(a)){return qq('p')}

        return(c===0)?function(c,d){  return a(c,b,d)}
            :F(a)? _a(_.partial, arguments)

            :O(a)?(G(arguments).N?$(a).parents(f)

            :$(a).parent(f))

            :S(b)?(S(a,b)?a:b+a)

            :nN(a)?a+'px'

            :a
    }









    _b=function(a,b,c){
        return U(a)? qq($('body'))//--
            :F(a)?_.b(a,b,c)//
            :S(a)?   a.split(b||'.')[0] //before('.')
            :_.bindAll(a,b,c)//
    }



    _e=function e(p,q,w){
        var eW=function (a,b){return l$(a,_z(b))==b}

        if(U(p)){return qq('li')}
        if(U(q)){return p.empty()}
        if(F(p)){p=O(p)}
        return (S(p) && S(q))? eW(p,q)
            :S(q)? e(p,function(v,k){eval(q)}, w)
            :_.e(p,q,w)
    }

    _F = function (a) {
        if (A(a)) {
            return _.flatten(a)
        }
    }
    _f = function (a, b, c) {

        return U(a) ? qq('f') // need to deprecate this

            : F(b) ? _.find(a, b, c)

            : _.f(a, b)

    }


    _g = function (a) {
        if (_.isArray(a)) {
            a = _.f(a)
        }
        return F(a) ? a
            : O(a) ? (a.target ? a.target : Q(a)[0])
            : a
    }


    _C = function (a, b) {
        return U(a) ? _c()[0]
            : A(a) ? _.compact(a)//dep
            : a.connect(b)
    }


    _c = function (a, b) {

        if (N(a)) {
            clearInterval(a)
        }
        return U(a) ? qq('c').k('can')
            .at({w: 100, h: 100})
            : b ? (A(a) ? a : [a]).concat(b)
            : O(a) ? a.children()
            : 0
    }

    _t = function me(a, b, c) {
        return U(a) ? qq('t')
            : N(a) ? _.t(a, _v(b), c)
            : D(b) ? $(a).text(b)
            : S(a) ? me(_b(), a)
            : $(a).text()
    }

    tA = function (a) {
        return O(a) ? _.toArray(a) : [a]
    }


}

$.joystick  =function(){
    $('#left').on('mousedown mouseover touchenter', function(e){cjs.Keys.left = true ;e.preventDefault()})
    $('#left').on('mouseup mouseout touchleave', function(){cjs.Keys.left = false})
    $('#jump').on('mousedown mouseover touchenter', function(){  cjs.Keys.up = true   })
    $('#jump').on('mouseup mouseout touchleave', function(){  cjs.Keys.up = false  })
    $('#right').on('mousedown mouseover touchenter', function(){ cjs.Keys.right = true})
    $('#right').on('mouseup mouseout touchleave', function(){cjs.Keys.right = false })}
TESTWATCHKEYS=function(){z()
    $.test=true
    cjs.watchKeys()}
function utils() {
    Utils = {}
    Utils.isNested = isArrayWhoseFirstObjIsAlsoAnArray = Utils.isDataUrl = Du = function (a) {
        return s$(a).contains('data:')
    }
    Utils.asElement =  E
    Utils.apply = _a = function (a, b, c, d, e) {//_.isUndefined(a)? qq('a')
        return F(a) ? a.apply(c || a, b)
            : S(a) ? a.split(b || '/').pop()// after('/')

            : 0//:a.animate(b,c,d,e)//
    }
    Utils.URL = _u = function (a) {

        url = function (a) {
            return 'url("' + a + '")'
        }

        return url(a)
        //return _.isUndefined(a)? qq('ul'): url(a)

    }
    Utils.func = _v = function (a) {
        return S(a) ?
            function () {
                Function(a)()
            }
            : F(a) ? a : F(a.value) ? a.value() : a.value
    }

    Graphics = window['Graphics'] || {}
    Graphics.getCanvas = C
    Utils.chompRight = chompRight = function (a, b) {
        return s$(a).chompRight(b).s
    }
    Utils.ensureRight = ensureRight = function (a, b) {
        return

        s$(a).ensureRight(b).s
    }
    Range = function (a, b) {
        var g = G(arguments)

        return N(b) ? _.range(a, b)

            : g.P ? _.range(a)

            : _.range(1, (a || 10) + 1)

    }
//should be dep? 'fsa'.toUpperCase()
    Utils.toUpperCase = toUpperCase = uC = function (a) {
        return S(a) ? a.toUpperCase()
            : A(a) ? _.map(a, function (a) {
            return uC(a)
        }) : a
    }
    Utils.isUpper = isUpper = Uc = function (a) {
        if (S(a)) { //for safety?
            return s$(a).isUpper()
        }
    }
    lC = function (a) {
        return S(a) ? a.toLowerCase()
            : A(a) ? _.m(a, function (a) {
            return lC(a)
        }) : a
    }
    Lc = function (a) {
        if (S(a)) {
            return s$(a).isLower()
        }
    }
    _.props = Utils.props = $p = function p(i, t, kK, vf, f) {
//get: index thing key //set: index thing key value [function] //setOb: index thing ob [function]
        if (O(kK)) {
            _.each(kK, function (v, k) {
                p(i, t, k, v, vf)
            })
        }                   //setOb

        if (U(kK)) {
            return _p(p, i, t)
        }
        if (vf == "*") {
            return p(i, t, kK, $r(kK))
        } // set it randomly?!
        else if (U(vf)) {
            return t[oO(i, kK)]
        }   //get
        else {
            f = f || _s  //function(t,k,v){t[k]=v}  //set
            f(t, oO(i, kK), oO(kK, vf, 'R'))
        }
        return t
    }
    _.methods = Utils.methods = $m = function f(i, x, m, g) { //=met
        if (U(i)) {
            return
        }
        if (U(x)) {
            return _p(f, i)
        }
        if (U(m)) {
            return _p(f, i, x)
        }// if(U(g)){return _p(f,i,x,m)}
        if (!A(g)) {
            return _a(f, [i, x, m, _r(arguments, 3)])
        }//met('x',  c.x, 'd',  [i,0,0]     )//met('x',  c.x, 'd',   i,0,0   )
        return _a(x[oO(i, m)], g, x) || x
    }
    nN = function (w) {
        return Boolean(Number(w))
    }//M=
    Nn = _.isNan
    J = function (a, b, c) {
        if (S(a)) {
            return $.getJSON(a, b, c)
        }
        ;
        return JSON.stringify(a)
    }
    isWindow = function (a) {
        if (O(a)) {
            if (s$(a).contains('Window') ||
                s$(a[0]).contains('Window')) {
                return window
            }
        }
    }

}
function yano() {
    Yano.func = function () {
        $('body').C('*')
    }
    Yano.interval = 1000
    Yano.intervalID = null
//when you call this straight:
//it checks if a Y-func is currently running (by seeing if Y.intervalID is set)
//if it is, it clears the Y-func.. (and then unsets the Y.intervalID)
// if func not running, it does setInterval, saving the returned # as Y.intervalID
// if you pass in a neg, it will only toggle(turn) off
// if you pass in a pos, it will only toggle(turn) on
    Yano.toggleFunc = function self(func, interval) {
        var args = G(arguments),
            func = args[0],
            interval = args[1]


        if (Yano.intervalID) {
            if (args.P) {
                clearInterval(Yano.intervalID)
                Yano.intervalID = null
            }
        }
        else {
            if (args.N) {
                Yano.intervalID = setInterval(Yano.func, Yano.interval)
            }
        }
    } //rat
    Yano.setToggleFunc = function (func, interval) {
        if (func) {
            Yano.intervalFunc = func
        }
        if (interval) {
            Yano.interval = interval
        }
        Yano.setIntervalID = setInterval(Yano.intervalFunc, Yano.interval)
        return Yano.toggleFunc
    }
//random
    Yano.random = Yano.rand = $r = function (a, b) {
        a = a || 'c'; //cannot be 'color' ?? only abr??
        var values = _.values(oO(a))
        return Oo(a, b) || values[_.random(_.size(values) - 1)]
    }

}
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

function alpha() {
    oC = function (c) {
        return oO('c', c)
    }
    oK = function (a) {
        return oO('k', a)
    }
    oT = function (a) {
        return oO('t', a)
    }
    oE = function (a) {
        return oO('e', a)
    }
    oI = function (a) {
        return oO('i', a)
    }
    oS = function (a) {
        return oO('s', a)
    }
    $o = function o(a, b, c) {
        return _.isUndefined(b) ? _p(o, a) : G(arguments).N ? oO(a, b, c) : Oo(a, b, c)
    }
    oQ = function (f, m) {
        $(function () {
            Q(m || mf, f)
        })
    }
}
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
