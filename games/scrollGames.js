SLOOM=function(){

    W([800,500,2400,500],
        {g:0}).Z(1.5).Y(200,200).showOff().bricks(
        [400,300,'r',200,100],[800,300,'z',100,100],
        [1200,300,'b',300,100],[1600,300,'z',100,100],
        [2000,300,'r',200,100])



    y.damp(1,10).track()
    _.in(4, "y.bS('me',.5)")

    _.t(5, function(){
        w.p(100,100)
    })

}
STREET=function(){

    W([1200, 600, 1400,1200], {g:300, t:0})
    w.S(700,1000, 'r',  800,20)
    w.S(500,800,  'g',  200,20)
    w.S(900,600,  'x',  200,20)

    p=w.p(700, 600)
    w.fg.A( p.sp())

    w.track(p, 600, 400,
        {x:700, y:1000, w:700, h:600, mX:1.5})
}
SPUFF=function(){

    W(800,600,800,800).G(0)


    w.S(200,500,'g',100,100); w.S(500, 500,'w', 100,100);
    w.S(1000, 500,'r', 100,100); w.S(1500, 500,'g', 100,100)

    y = w.ship(100, 100).rot(200)


    w.track(y, 500, 500 ,{x:1000, y:1000, w:400, h:400} )

    BUFFER=function(){


        W([1200,600,4800,1600],{g:0,t:0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')

        y=w.ship(100,100).damp(1,10).rot(90).lD(2).aD(2)
            .rot(120)//.lV(1)

        w.bufFoll (y, 600, 300, {
            x: 800, y: 300, mX:.8, mY:.8,  w: 200, h: 200  })



        // w.Z(.8)
    }

}
SLY=function(){W([1200, 600,2400, 1000],{g:300}).P()
    w.right.kill(); w.left.kill()
    w.track(p,300,400, {
        x:1200,y:700,
        w:800,h:500,
        mX:10,mY:10
    })
}
KISS=function(){
    W([  1200, 600, 2400, 600 ],{g:10})

    turtle =[
        ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
        ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
        ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
        ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
        ['x', 10, 55,-12],
        ['u', 30,40, 75,-12]
    ]
    w.D(400, 280,turtle, '-')  //this changes the data object for future uses !!!


    w.D(600, 280, [
        ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
        ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
        ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
        ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
        ['x', 10, 55,-12, '-'],
        ['u', 30,40, 75,-12 ,'-']
    ])



    _.times(10, function(i){
        w.D(100+i*100,100).cir({r:35,lf:{c1:'*',c2:'*'}}).den(.1)
        w.D(100+i*100,100).cir({r:20,lf:1}).den(.1)
    })



    _.times(10, function(i){
        w.D(100+i*140,160).cir({r:50,

            rf:{
                c1:$r(),
                c2:$r(),
            }
        }).den(.1)})


    w.D(800, 300).cir({r:120,
        C:'y',   l:2,  bf:'me', ls:['y','x']//?
    }).den(.1)




    y = w.ship(50,50).C('d').mid()
    y2 = w.ship(100, 300).C('x').rot(180)
    //i thought i may want t for timer/ticker.. but time has no x and y !
    //move the stage by manipulating the trackee x,y
    //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
    w.tRightLeft()
    w.showOff()
    I(function changeT(){if( w.t == y2){w.C('w'); w.t=y } else {w.C('z');w.t= y2}}, 5000)

    b=w.D(100,300)
    pf = b.pol({s:1, C:'y',v:[[-200,-100],[0,-200],[100, -100]] })
    pfs =  b.pol({s:1, C: 'o',  v: [  [-100, 0],  [0, -200],  [100, 20],    [0, -150] ]})
    cf = b.cir({k:'cir', r:100, x:200, y:-100, d:.2, b:.8, f:100, C:'x'})
    rf = b.rec({x:100, y:100,w:10,  h:100,   C:'x'})

    w.D(200,300).pol({

        v:[[0,100],[0,-100],[200,-150],[200,150]],
        c:'y',C:'w',l:5,

        bm:1

    })




    //FROM POL ->0, -100]] })



    w.D(800,300).pol({
        v:[
            [[5,100],[0,-100],[200,-150],[200,150]],
            [[-50,50],[-50,-100],[450,-50],[450,50]]
        ],
        c:'b',C:'X',
        bm:1
    })



}
SCSPOOM=function(){W({g:0,w:0});w.cen('+')
    w.s.rXY(w.hW, w.hH)
    star= w.S(200, 200, 'p', 100).den(1).bo(2)
    star.bS('earth',.13)
    w.dJ(
        p= w.player(200,200,2.5, 'thrust').horizCenter().den(.4).aD(8).lD(.8),
        star
    ).freq(.15).damp(0).len(50)
    cjs.t(function(){trans(cjs.cap(300/M.dist(star,p),.3,2))})
    function trans(Z){w.s.sXY(Z)
        w.s.XY(w.hW-(p.X()-w.hW)*Z,
            w.hH-(p.Y()-w.hH)*Z)}
}
CUPBALL=function(){//should zoom in when near cup
    CUPS()
    b = w.D(w.W/2, w.H/2, 'w', [[10  ]]).r(.8).track()
    cjs.tick(function(){
        b.F(0, -20)})
    w.showOff()
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
}
TRACKEE=function(){

    W([  1200, 600, 2400, 600 ],{g:10})
    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.times(10, function(i){ w.D(100+i*100, 100,$r(), 35).den(.1)})

    y = w.ship(50,50).mid()
    y2 = w.ship(100, 300).C('x').rot(180)


    //i thought i may want t for timer/ticker.. but time has no x and y !
    //move the stage by manipulating the trackee x,y
    //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?


    w.tRightLeft()

    w.showOff()


    setTimeout(function(){setInterval(function changeT(){if( w.t == y2){w.C('b'); w.t=y } else {w.C('z');w.t= y2}}, 5000)},5000)


}
CAMBALL=function(){

    //W([1200,600,2400,600],{g:[10,10]}).Y()

    W([1200,600,2400,600],{g:100}).Y()


    mick(700,100, { c1:'b', c2:'X' })
    mick(700,300, { c2:'b' })
    //  mick(100,100, { y2:10 })
    //  mick(100,200, { y2:200 })
    //  mick(100,300, { x2:100 })
    function mick(x,y,lf){var g=G(arguments)
        w.i.h(x,y,'+').c({l:20, C:0, lf: lf||1})
            .dc([50], [200,0,100], [100,100,100])
        if(g.p){w.i.h(x,y).c({ l:20, C:0, ls:lf||1})
            .dc([50],[200,0,100],[100,100,100])}}
    y.i.c('y').dc(100, 100, 30)
        .c('o').dc(100, 100, 10)
        .c('X','g',8)
        .mt([
            [100, 100], [300, 300], [400, 100],
            [500, 300], [450, 450]],
        [[500, 0], [600, 100]])
        .cir(600,300,'u','g',10)


    h= w.i.h(600,300,'+')
    h.cir(105, 100,20,'b')
        .cir(100,20,100,'g')
        .cir(105, 100,8,'z')
        .cir(200, 100,20,'b')
        .cir(200, 100,8,'z')



    w.t =  b = w.D(300,300, 'r', 80).bo(.8).den(.1)



}
ZOOMSCALE=function(){

    W([1000, 1000], {g: 0, t: 0
    })

    w.dragX = function(){var w=this,d
        w.hud.c.m({
            mD: function(x){d = x-w.s.x},
            pM: function(x){w.s.x = x-d}
        })
        return w}
    w.dragY = function(){var w=this,d
        w.hud.c.m({
            mD: function(x,y){d = y - w.s.y},
            pM: function(x,y){w.s.y = y - d}
        })
        return w}
    w.drag=function(){return this.dragX().dragY()}





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

    r.abs(775,500)
    r.css(  'transform', 'rotate(90deg)'  )
    r.W(500).val(0)


    cjs.tick(function(){

        w.Z( r.val()/25+1 )

    })

}
FOL =function(){W(500, 500, 1600, 1000).G(0)
    a = w.ship().C('b')
    b  = w.ship(400,400).C('o').track()
    I(5, function(){
        if(w.follA){b.track(); w.follA=0}
        else {a.track(); w.follA=1}

    })


}
BASICSCROLL=function(){

    //no buffer to worry about
    //it lets u gradually move past the target point.. until hits limit

    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0})


    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)


    w.S(1200,600,'w',[[400,500,'-']])

    y = w.ship(200,200).rot(120).damp(1,10)

    w.track(y, 600, 300)

    // w.dot(600,300)
    //w.hud.dot(600,300)


//    w.dot(1200,600)
    //   w.hud.dot(1200,600)




    y.XY(1400,600).rot(90).lD(0).lV(1)


}
SHORTLONG=function(){
    W([900,300,3600,300],{g:0}).Z(3)
    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)
    y = w.ship(200,200).rot(120).damp(1,10).track()
}
TRACKEECB=function(){W([1200,600, 2400, 1200],{g:300})
    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.t(10, function(i){
        w.D(100+i*100, 100,$r(), 35).d(.1)})
    w.Z('-')
    w.t = w.p(1175,100,'jump') // no need to call track?
    _.in(3,function(){
        w.C('x')
        w.t.cb= function(){
            w.Z(w.z + .001)
        }
    })

}
SHOWOFF=function(){W([1200, 600, 2400, 600], {g:10})

    y=w.ship(50,50).track()//.P(100,1000)

    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.times(10, function(i){ w.D(100+i*100, 100,$r(), 35).den(.1)})
    w.showOff()

}
WORLDPAN=function(){W([1200, 600, 2400, 600],{g:0})
    w.S(400,300,'r',200,100)
    w.S(800,300,'z',100,100)
    w.S(1200,300,'b',300,100)
    w.S(1600,300,'z',100,100)
    w.S(2000,300,'r',200,100)

    b= w.D(100,100, 'b', 30).lV(-10,-20).rest(.2)
    co = w.tCo().B( b.tr())
    _.t(10, function(i){
        co.B( w.D(100 + 30*i,100, 'r', 30).lV(10,20).r(.2) ) })

    y = w.y(100,100).rt(120).aD(100)

    w.pan('*')

}

//mario
R1=function(){
    W([1200,600,2400,1200] )//.P('+')

    //$.test=true
    w.Z(.1)

    w.roof.kill()
    w.S(100,570,'w',200,30).r(0).fr(0)
    w.S(325,570,'g',230,30).r(.3).fr(10)
    w.S(550,570,'r',200,30).r(.7).fr(.3)
    w.S(100,400,'g',230,30).r(.3).fr(10)
    w.plat([800,300,100], [260,240,60], [550,250,100], [1350,550,100], [300,200,100], [300,500,60,30], [150,400,60,30])
    w.S(1200,500,'w',100,100 )
    w.S(1240,450,'w',180,30 )
    w.S(1420,500,'y', 180,30)
    w.S(1560,450,'y',300,30)
    w.S(1600,500,'y',180,30)
    w.S(1960,450,'w',300,30)
    w.S(1900,500,'w',180,30)
    w.S(11300,200,'w',180,30)

    speed=1
    //  p.tr()

    p = w.p().cn('jump').tr()

    w.p(100, 100,.8)

    w.p(100, 100,.8)
    w.p(100, 100,.8)
    w.p(100, 100,.8)
    //p.lD(1)

///    w.show(function(){ return  'in air: '+ p.inAir() })

    //w.goomba(400).fr(0)

    setup=function(){
        score=0
        p.XY(150,100).lV(0,0)
        w.s.XY(0,0)
    }
    setup()

    T.t(function(){w.s.X(speed,'-')//.pen(score++)
        if(p.Y()> 600){setup()}})
}
MIRROR=function(){W('->')
    p= w.p(100,300).tr()
    w.Z(1.5)

    function left(){p.XY(1100,300); w.xW().walls('->')
        b.dyn().C('b');r.dyn().C('r');
        g.dyn().C('g')
        b2.dyn().C('o')
        b3.dyn().C('y')
    }

    function right(){
        p.XY(100,300); w.xW().walls('<->')
        b.stat().C('z');
        r.stat().C('z');
        g.stat().C('z')
        b2.stat().C('z')
        b3.stat().C('z')
    }


    T.t(function(){


        if(p.X()>1200){ right() } else if(p.X()<0){ left() }


    })





    b = w.D(400,400,'b', 150,150)
    r = w.D(500,400,'r', 50,300)
    g = w.D(400,500,'g', 120 )
    b2 = w.D(250,400,'o', 80,30)
    b3 = w.D(150,500,'y', 50 )



    w.$$(function(){
        w.e(function(b){b.dyn()})
        w.t_.kill()
        w.Z(.1)
    })






}
MARIOS=function(){W().P().P().P()

}
HEADACHE=function(){W().P()

    // w.clouds(100,200)
    // w.clouds(400,400)
    w.rub(100,100)
    w.grass(400,100)
    w.ice(300,300)
    w.brick(200,400, 80,20)
    w.brick(300,200,80,20)
    //$.joystick()


    w.p(600,200).r(4)
}
AUTO=function(){W({g:300, w:0 }).P(300,-300)

    w.plat=function(x,y,W,H){var w=this//=brk=brick=
        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W
        return w.S( x,y,'w',W,H).r(.3).K('plat')
    }



    w.plat(800,500,600,100)
    w.plat(300, 530,100,100)
    w.plat(1400,300,600,100)
    w.plat(1800,500,1000,100)
    w.plat(1900,200,600,100)

    w.p(300,-100)

    T.t(function(){

        w.left(4)

        if(p.Y() > 2000){p.XY(300,-300) } //comeback

        if(b2d.onG){
            if(cjs.Keys.u){ p.jumping(180,30) }
            else {p.byVel(40)}
        }

        else {p.byImp(10)}

    })

    w.D(800,100,'r',50,50).bS('guy')
}
AUTOGAME =function(){W({w:0,t:0}).P()

    setup=function(){score=0

        p.XY(350, 100)
        p.lV(0,0)
        p.cn('j')
        p.d(.1).r(1).fr(0)
        w.s.XY(0,0)
    }
    setup()

    T.t(function(){ w.s.X(4,'-'); if( p.relPos() < -100 ){setup()}})//.pen(score++)

    w.ramps()
}
GOOMBA=function () {W()


// could i automatically have body listen to their sens?
    w.ball().r(.3)
    workingGoomba =   p = w.p(900,450).cn('jump')
    p.my('hat',function(){p.bS('guy')})
    p.my('right');
    p.my('left')
    $.space(function(){

        if(p.my.right){p.I(100,-400)}
        if(p.my.left){ p.I(-100,-400)}

    })


}
DOODLE= function () {W([1200, 600, 1200, 2000], {g:-1000}).stats().P(600, 1800)
    var b1,b2
    plat([300, 300], [900, 600], [300, 900], [300, 1000],[1000, 1200],[500, 1400])
    pf = plat(900, 1700)


    // PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).

    function plat(x,y){var g=G(arguments)
        if(g.O_){g.e(function(g){plat(g[0], g[1])}); return}
        return w.S(x,y,'o', 500, 40).K('pf')}
    p.K('p').tr()//.cl($.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
    p.cl(w._t, //when player coll roof,
        function(){ w.C('z'); w.G(1000)})

    //one way wall
    w.pre('pf',  function(f, cx){
        if( p.Y() - this.B().Y() > 10){ cx.en(0) }
    })

}
MINI = function(){W({g:10,W:1000,H:800})
    //d = $.div('y',1500,40).A().abs(200,200).pad(2)
    p = w.p(300,200, 2,'thrust')
    data=function(str){
        if(U(str)){str='data'}
        d.E($.h4(str))
    }}
JFAL=function(){W({g:10})
    w.right.kill()
    w.roof.kill()

    //w.s.sX(.95)
    num=0; heads=0
    y=w.ship()//.den(.3)

    _.ev(1,function(){
        w.me(100,100).K('head')
        num++})

    //w.show(function(){return num + ' - ' + heads  })
    game=true
    tickFunc=function(){
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
        if(game){
            if(num > 60){
                game=false
                $.pop('score: '+heads) }
            else {
                w.e(function(b){
                    if(b.K() == 'head' && b.Y()>600){b.kill();heads++}})}}
    }

    cjs.t(tickFunc)
}
WARP=function(){W().P()
    w.S(500, 600, 's', 30, 200)
    w.S(600, 600, 's', 30, 200)
    w.S(550, 550, 'z', 100, 20).K('warp')
    w.D(650, 580, 'd', 300,80).K('tramp').r(5).d(10).aD(10).lD(10)
    p.warp = function(){this.XY(200, 100)}
    p.cl('warp', function () { p.warp()  })
    p.cl('tramp', function () {p.I(0, -50000)})
}
