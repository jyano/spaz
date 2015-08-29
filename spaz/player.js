b2d.p()
w.left = function (n) {
        var w = this;
        n = N(n, 4)//w.horiz=
        w.e(function (b) {
            b.X(n, '-')
        })
    }
w.up = function (n) {
        var w = this;
        n = N(n, 4)//w.vert=
        w.e(function (b) {
            b.Y(n, '-')
        })
    }
w.p= function(x,y,sc,cn){var w=this,g=G(arguments),
    p
    sc = N(sc, 1)
    cn= cn || 'jump'
    p = w.D(x,y).fR()
    p.cn(cn)
    p.SetBullet(true)
    p.rec({c:'r', l:5, C:'r', w:22*sc, h:40*sc}).d(5)
    p.rec({

        s: 1,
        w: 8*sc, h:8*sc,
        x: 0,
        y: 20*sc,

    }).K('feet').C('X')
    p.Bm( 'me', 0, 0,  0.25*sc    )

    // p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )

    if(g.p){p.tr()}
    p.r(.4)
    p.lD(.5)
    return p
}
w.P=function (x, y,sc) {var w=this,
    g=G(arguments)
    p = w.p(N(g.f, w.hW), N(g.s, w.H-50), N(sc,2))
    if(g.p){p.tr()}
    return w
}
b.cn=function(cn,o){var b=this, w=b.W()
    //stop a current 'controls', if any
    if( F(b._cn) ){   w.s.off('tick', b._cn)  }
    if(U(cn)){ return }
    if(S(cn)){ cn = b2d.cn[cn] }
    if(F(cn)){b._cn= w.s.t(  function(){
            cn(b,o)})}
    return b
}
b2d.cn.j=b2d.cn.jump=function(p){

   /* p.vX(
        K.r?200 :
        K.l?-200 :0)
    if(K.u && p.onG){
        p.vY(-1000)
    }*/

    var m= p.mass()
        if(p.inAir()){
            if(K.r){p.I(m/2, 0 )}
            else if(K.l){p.I(-m/2, 0 )}
            else {

            }
            p.I(0, m*3)
        }

        else {//on ground
            if(K.u){//initiate a jump
                if(K.r){p.lV(m,-m*4)}
                else if(K.l){ p.lV(-m, -m*4) }
                else {p.lV(0,-m*8)}
            }
            else {//not jumping, may be running
                if(K.r){p.lV(m*2, 0)}
                else if(K.l){p.lV(-m*2,0)}
                else {p.lV(0,0) }
            }
        }

    if(K.d){
        p.I(0, m*3)
    }
}
b2d.cn.jet = function (p) {
    var k = cjs.Keys, vec = p.GetWorldVector(V(0, -100))

    p.fixRot()

    if (k.left) {
        p.rot(8, '-').I(0, -5)
    }

    if (k.right) {
        p.rot(8, '+').I(0, -5)
    }
    p.I(
        k.up ? vec.div(1) : k.down ? vec.div(-100) : V(0, 0)
    )

}
b2d.cn.sl= b2d.cn.slidey = function(p){var k = cjs.Keys

    if (p.onG) {if (k.u) {

            if(k.r){p.I(20,-60)}
            else if (k.l) {p.I(-20, -60)}
            else {p.I(0, -100)}
    }

    else {
        if (k.l) {p.dir(0);p.I(-20, 0)}
                if (k.r) {p.dir(1);p.I(20, 0)}


    }

    }

    else {
        if (k.l) {p.dir(0);p.I(-10, 0)}
        if (k.r) {
            p.dir(1);
            p.I(10, 0)}
    }

    /*

     p.I(p.onG&&k.u ? V(0, -70)

     : k.r ? V(30, 0)
     : k.l ? V(-30, 0)
     : V(0, 0)  )*/

    return p
}
b2d.cn.h=b2d.cn.hop = function (p) {var k = cjs.Keys
    if (p.onGround) {
        if (k.l) {p.I(-30,-120)}
        if (k.r) {p.I(30,-120)}}
    else {if(k.d){p.I(0,20)}}
}
w.me=function(x,y,Z){var w=this,p
    Z= N(Z, 4)

    p = w.D(x,y)

    p.cir({c:'X',C:'X',l:0,r:1})

    p.rec('X',Z*12, Z*22).K('head')


    p.rec('X', Z*10, Z*20,  0, Z*10, '-').K('feet')


    p.rec('X', Z*2, Z*6, 0, -Z*12, '-').K('hat')
    p.rec('X', Z*8, Z*2, Z*8, 0, '-').K('right')
    p.rec(Z*8, Z*2, -Z*8, 0, '-').K('left')

    p.d(1).r(0).fr(.1).fixRot()

    p.bS({
        i:'me',
        sc:Z/10
    })

    return p.K('p player')

}
w.p1=  w.player1=function(x,y,sc,cn){
    var w=this, g=G(arguments), p,
    o = g.S_?
    {cn:g.f} :
        N(g.t)? {x:g.f,y:g.s, sc:g.t,cn:g[3]} :
        {x:g.f,y:g.s, cn:g.t}
    o.x= N(o.x, w.hW)
    o.y= N(o.y, w.hH)
    o.sc= N(o.sc,4)
    p = w.me(o.x,o.y,o.sc)
    if(g.p){p.track()}
    p.cn(o.cn)
    p.speed=40
    p._dir='r'
    p.dir=function(d){var p=this
        if(U(d)){return p._dir}
        p._dir = d; return p}
    p.moveInDir =  function(){var p=this,g=G(arguments)
        if (g.n){  return p.move( - p.speed )}
        //n = _.tN(g[0], p.speed)// ?
        if (p.dir()){p.I(3,0)} else {p.I(-3,0)}
        return p}
    p.SetBullet(true)
    w.cl('feet',
        function(f){
            if(!f.sen()){p.onG  = 1}
        }
    )

    w.end(function(cx){
        cx.w('feet', function(f){
            if(!f.sen()){ p.onG =0 }})})
    $.testJump=1
    if($.testJump){
        T.t(function(){
                if(p.onG){$l('onG')}
                else {$l('in air')} })
        w.show(function(){return p.onG}) }
    T.t(function(){
        p.I(0,500)
    })
    return p

}
b.jumping = function (y, x) {var b=this, k = cjs.Keys
    if (k.u) {
        if (k.r) {b.lV(x, -(y - x))}
        else if (k.l) {
           b.lV(-x, -(y - x))}
        else {b.lV(0, -y)}}
    return b
}
b.moveInCircle = function(rad, speed){

        var g=G(arguments),rad=N(g[0])?g[0]:100,
            speed=N(g[1])?g[1]:2,
            toRad=Math.toRadians, cos=Math.cos,  sin=Math.sin,
            b=this,
            ang=0,
            x=b.X(),
            y=b.Y(),
            bX,
            bY

        T.t(function(){
            ang += toRad(speed)

            bX= rad * cos(ang)
            bY= rad * sin(ang)

            if(g.p){bY*=2}
            if(g.n){bX*=2}


            b.XY(bX+ x, bY+ y)
        })

        return this}
b.byI=b.byImp=function(i){var k=cjs.Keys
        if(k.right){this.I(i,0)}
        else if(k.left){this.I(-i,0)}
        return this}
b.byV=b.byVel=function(v){var k = cjs.Keys
        if (k.right) { p.lV(v,0) }
        else  if (k.left) { p.lV(-v,0) }
        return this}
b.arrowMove = function () {var b = this
        $.key({
            l: function () {
                b.dir('l').move()},
            r: function () {
                b.dir('r').move()},
            u: function () {
                if (b.dir() == 'l') {
                    b.I(5, -12)}
                else if (b.dir() == 'r') {
                    b.I(-5, -12)}}})

        return b

}
b.relPos=function(){var b=this; return b.X() + b.S().X()}
b.pWarping = function () {var p = this,b=this
    cjs.t(function () {
        if (p.Y() < 0) {p.Y(300)
        }
        if (p.Y() > 300) {p.Y(0)
        }
        if (p.X() < 0) {p.X(600)
        }
        if (p.X() > 600) {p.X(0)
        }
    })

    return b

}
b.warp =  function(p){var b=this,w=b.W()
    cjs.t(function(){
        if(b.Y()<0){b.Y(w.H)}
        if(b.Y()>w.W){b.Y(0)}
        if(b.X()<0){b.X(w.W)}
        if(b.X()>w.W){b.X(0)}})
    return b}
b.diffx = b.difx = function (x, y) {var b=this// compare with DIF  - achtung!
    return {
            x: x - b.X(),
            y: y - b.Y()}
}
b.cam = function (x, y) {var b=this,s= b.stg()
        s.XY(b.diff(x, y))
        return b}
b.follow = function (x, y) {var b = this
        cjs.t(function(){if (O(b.sprite)){b.cam(x, y)}})
        return b}
w.coin = function(x,y){var w=this,c

    x=  _.tN(x, R(600))
    y = _.tN(y, R(300))


    c= w.D(x,y, 'y', 20).K('coin').bo(0).den(0).lD(0)

    c.I(  R(15,-5),  R(15,-5)  )
    c.warp()

    return c}
w.stars=function(n){var w=this
    _.t(N(n,30),function(){w.D(R(1000,-500),R(800,-400),'w',2).den(0).rest(2)})
    return w}
w.sun=function(x,y){var w=this

    //djd.init?? joint
    x=N(x,300)
    y=N(y,150)

    return w.S(300,150, 20,'p',10).d(1).r(.5).bS('sun',.2)

}
w.tim=w.addTim=function(n){var w=this

    if(U(n)){

        return w.D(300,300,'w',15).K('tim').bS('guy', .3)
    }

    _.t(n, function(){w.addTim()})
    return w
}
w.plat=  function me(x,y,W,H){
    var w=this, g=G(arguments)
    if(A(g[0])){
        _.e(g, function(g){me.apply(w,g)})
        return w}

    x = _.tN(x,60)
    y = _.tN(y,x)
    W = _.tN(W,30)
    H = _.tN(H,W)
    return w.S(x,y,'s',W,H)
        .r(0.3)
        .fr(2)
        .K('plat')
}
w.fireBall=function(x,y,vX,vY){
    var v=8
    if(vX=='l'){vX=v;vY=0}
    if(vX=='r'){vX=-v;vY=0}
    if(vX=='u'){vX=0;vY=-v}
    if(vX=='d'){vX=0;vY=v}
    if(vX=='ul'){vX=v;vY=-v}
    if(vX=='ur'){vX=-v;vY=-v}
    if(vX=='dl'){vX=v;vY=v}
    if(vX=='dr'){vX=-v;vY=v}
    vX=N(vX)?vX:0
    vY=N(vY)?vY:0

    return this.D(x,y, 'r', 18)//.bS('sun',.2)
        .lV(vX,vY)
}
w.clod= w.clouds=function(lX, y){var w=this
    lX = N(lX,100)
    y=N(y,75)
    _.t(100,function(){
        w.S(R(400)+lX,y,$r(),R(30))})
    return w}
w.rub= w.rubber=function(x,y,len){var w=this,rub
    len=N(len,200)
    x+=len/2
    return w.S(x,y).rec({
        w:len,h:20,c:'r',s:1
    }).fr(.3).r(.7)
}
w.grass=function(x, y, len){var w=this
    len=N(len,200)
    x+=len/2
   return w.S(x,y,'g',len,20).fr(.3).r(.3)}
w.ice=function(x, y, len){var w=this
    len=N(len,200)
    x += len/2
    return w.S(  x, y, 'w', len, 20).fr(0).r(0)}
w.ramp=function me(x, y, W,H,a){var w=this, g=G(arguments)

    if(A(g[0])){
        _.e(g, function(g){
            me.apply(w,g)})
        return w}

    o = O(g[0])?g[0]: {x:g[0],y:g[1],w:g[2],h:g[3],a:g[4]}
    o.x = N(o.x, 300)
    o.y = N(o.y, 300)
    o.w = N(o.w, 100)
    o.h = N(o.h, 100)
    o.a = N(o.h, 10)
    o.c = o.c || 'y'

    return  w.S(o.x, o.y, o.c, o.w, o.h).rot(a).DFB(1,0,0)
}
w.grid = function(grid, x,y,len,spacing){var w=this, b
    var gridDrawer=function(x,y,len, spacing){
            b = w.D(x,y)
            len = N(len,30);
            spacing=N(spacing,20)
            return function(x,y){
                b.rec(len, len, x*spacing, y*spacing).C('r').d(1).fr(0.5).r(.2)
                return b}},
        drawWall=gridDrawer(x, y, len, spacing)
    _.t(grid.length, function (row) {
        _.t(grid[0].length, function (c) {
            if (grid[c][row]){drawWall(row, c)}})})
    return b.K('grid')
}
w.goal=function(x,y){
    w.S(x-20,y-15, 'y',10,40)
    w.S(x,y,'y',40,10)
    w.S(x+20,y-15,'y',10,40)

}
w.buck= w.sensorBucket=function(x,y,k){var w=this, sens

    x= N(x,320)
    y= N(y,245)
    k=k||'sensorBucket buck'

    w.S(x-150, y-15, 'r', 20, 200)
    w.S(x+150, y-15, 'r', 20, 200 )
    w.S(x-200, y-120 , 'r', 320, 20, 200,200 )

    return w.S(x,y,'d',[[280, 170 ,'-']]).K(k)


}
w.zilla=function(x,y){var w=this

    var z= w.S(x, y, 80, 140)  //make sensor?

        .fR()
        .bS('guy', [.8,1])
        .moveInCircle('-')
        .cl('bul',
        function(bul){
            bul.B().kill()
            z.hits++
        })



    z.hits=0


    z.fireBalls=function(){
        var x= this.X(),
            y= this.Y()
        w.fireBall(x+50, y-80,'ul')
        w.fireBall(x+50, y+80,'dl')
        w.fireBall(x-50, y-80,'ur')
        w.fireBall(x-50, y+80,'dr')
        w.fireBall(x, y-80,'u')
        w.fireBall(x, y+80,'d')
        w.fireBall(x-50, y,'r')
        w.fireBall(x+50, y,'l')
    }


    z.fireBallsAtInt=function(ms){var z=this
        setInterval(function(){  z.fireBalls()  }, ms)
        return this
    }


    return z}
w.goomba=function(x,y){
    x= _.tN(x,300)
    y= _.tN(y,100)
    return w.D(x,y,'w', 30,30).bS('guy').K('goomba')}
w.bobom=function(x,y){var w=this,
    bobom = w.D(x,y,'d', [
        [40, 'body'],
        [40, 5, 30,0, 'bobomSens', '-']])

    w.b(function(cx){
        cx.w( 'bobomSens', function(){
            this.B().kill()})})

    body = bobom.rec(20,20).d(1).r(1)

    sen =  bobom.rec({s:1 })

    sen.cl('player',function(){w.B().kill()})

    return bobom}
b2d.cn.power=function(p){
    var K=cjs.Keys
    if(K.u){  p.I(0,-45)}
    if(K.l){  p.I(-20, 0)}
    if(K.r){  p.I(20, 0)}

}
w.xW=function(){
    this.e('wall', function(b){b.kill()})
    return this}
b.inAir = function(){var  b=this,
    onG= false
    this.cxs(function(cx){
        if(cx.IsTouching()){
            cx.w('feet',
                function(){ if(this.of(b) ){ onG=true } })
        }
    })
    return !onG
}
b2d.cn.powX=function(p){
    var K=cjs.Keys
    if(K.u){  p.I(0,-4500)}
    if(K.l){  p.I(-2000, 0)}
    if(K.r){  p.I(2000, 0)}
    if(K.d){  p.I(0,4500)}

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
w.ramps=function(){var w=this
    w.ramp(
        [400, 350, 200, 300, 100],
        [500, 350, 300, 300, 60],
        [600, 350, 200, 300, 100],
        [700, 350, 300, 300, 60],
        [800, 350, 200, 300, 100],
        [1000, 350, 300, 300, 60],
        [1030, 350, 200, 300, 100],
        [1200, 350, 300, 300, 60])
    return w
}
w.bricks=function(){var w=this,g=G(arguments)
    _.e(g, function(g){w.S.apply(w,g)})
    return w
}
scrolling()
yip()
function scrolling(){
    w.tr= w.track=  function(t,cX,cY, bf){var w=this
        //i can leave the world-centering in fw
        // can optionally filter it with scale itself
        //  has limits now!  and more..
        // tis is the ultimate!

        if(U(t)){t = w._trackee}
        w.t=t
        cX=N(cX,w.W/2)
        cY=N(cY,w.H/2)  //option to set based on t's CURRENT X/Y?
        if(bf=='!'){

            z(function(){var sX,sY

                sX = w.z*(t.X()-cX)

                sX =  sX  *   1  / ( 1 + w.hW/w.w )

                sY = w.z*(t.Y()-cY)

                sY = sY /  (1+ w.hH/w.h)

                w.sXY(sX,sY)
            })
        }
        else if(bf=='-'){
            z(function(){
                w.s.x =  (cX-t.X())* w.z     -   w.W*(w.z/2-.5)
                w.s.y =  (cY-t.Y())*w.z     -   w.H*(w.z/2-.5)
            })
        }
//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
        else if(O(bf)){

            bf.x = N(bf.x)? bf.x : w.w/2
            bf.y = N(bf.y)? bf.y: w.h/2
            bf.w=  N(bf.w)? bf.w:  0
            bf.h=  N(bf.h)? bf.h:   0
            bf.mX = N(bf.mX)? bf.mX : 1
            bf.mY = N(bf.mY)? bf.mY: 1

            w.S(bf.x, bf.y, 'r',  [  [bf.w, bf.h, '-'] ] )
            w.S(bf.x, bf.y, 'w',  [  [bf.w+20, bf.h+20, '-'] ] )
            w.S(bf.x, bf.y, 'b', [ [bf.w, w.h,  '-'] ] )
            w.S(bf.x, bf.y, 'b', [ [w.w,  bf.h,  '-'] ] )
            w.S(bf.x, bf.y, 'z',  [ [ 10,10, '-' ]  ] )  //sensor works but ony for rect (or at least not for circ)
            w.S(bf.x, bf.y,'w',[[bf.w,bf.h,'-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')

            z(function(){var sX,sY
                // sX = (bf.x-w.hW)   + cjs.adj( (t.X()-bf.x),  bf.w/2)/w.z
                sX =  bf.x - w.hW  + cjs.adj(t.X()-bf.x, bf.w/2)*bf.mX /// bf.mX //scaling not needed?
                sY = (bf.y- w.hH)   + cjs.adj( t.Y()-bf.y,  bf.h/2)*bf.mX// /bf.mY
                w.sXY( sX,  sY)})
        }
        else {

            //each tick, literally just sets w.sXY() based on:
            // world dimensions, world zoom, and trackee position

            z(function(){var dX,dY
                //run pre-scroll hook cb's
                if(F(w.t.cb)){w.t.cb()}
                if(w.track.cb&& F(w.track.cb)){  w.track.cb()  }
                // if the designated trackee optionally has its own cb,
                // that over rules the (also optional) 'w.track.cb' cb
                dX=t.X()-cX
                dY=t.Y()-cY
                w.sX(  w.z* w.hW +  w.z*dX -   w.hW)
                w.sY(w.z* (w.hH+ dY )-w.hH)
            })
        }
        return w
    }
    w.sXY=function(x,y){
        $l('sXY')
        if(U(x)){return {}}
        this.sX(x)
        this.sY(y)
        return this
    }
    w.sXCap=function(s){return cjs.cap( s, 0, this.w * this.z - this.W) }
    w.sX=function(x){var w=this



        if(U(x)){return -this.s.x}
        this.s.x = -this.sXCap(x)

        return w
    }
    w.sYCap=function(s){return cjs.cap(s, 0, this.h*this.z-this.H )}
    w.sY=function(y){var w=this

        if(U(y)){return -w.s.y}
        w.s.y = -w.sYCap(y)
        return w

    }
    b.tr= b.track=function(x,y,z){var b=this,w= b.W()
        w.track(b,x,y,z)
        return b}
    w.Z = function(s){
        //get/set zoom.. ok cool :)
        var w=this
        if(U(s)){return w.z}
        w.z = s=='-'? w.mS : cjs.cap(s, w.mS)
        w.s.sXY(w.z)
        return w}
    b.centerScale = function(z){var b= this,w=b.W()

        w.s.sXY(z)

        w.s.X(

            w.hW -      (  (b.X()-w.hW) *z)

        )

        w.s.Y(w.hH - ((b.Y() - w.hH)) *z)

        return b

    }
    w.zoomOut=function(){var w=this //knows when to stop :)
        w.tCb= function(){  w.Z( cjs.cap( w.z*=.98, w.mS))  }
        return w}
    w.zoomIn=function(){var w=this
        w.tCb= function(){ w.Z( cjs.cap( w.z*=1.02,0,4))   }
        return w}
    w.inout=function(){var w=this, // now it works!!!!
        s=1,
        up=true

        w.t.cb = function(){
            if(up){
                if(s<2){ s+= .2; }
                else {up=false}
                w.Z(s)
            }

            else {
                if(s > .8){ s -= .2   }
                else {up=true}
                w.Z(s)
            }
        }

        return w}
    w.showOff=function(){var w=this
        zin()
        function zout(){w.zoomOut(); _.in(10, zin)}
        function zin(){w.zoomIn();  _.in(4, zout)}
        return w
    }
    w.pan=function(o){
        var  w=this,  g=G(arguments),  o=g[0],
            mZ = w.mZ ,
            MZ= mZ*3,
            z= w.mZ*3,  up=true,
            l
        if(g.m){
            l=function(){

                up = z > w.mZ*3? false :
                    z < w.mZ ? true:
                        up

                z *= up? 1.01 : .9
                w.Z(z / w.mZ)
            }
        }

        else {l=function(){

            up = z > w.mZ*3? false : z < mZ? true: up
            z += up? .03 : -.03
            w.Z(z / w.mZ)

        }}

        w.track.cb=l

        return w
    }
    w.tX=function(t){var w=this
            if(U(t)){return w.tSpr.X()}
            w.tSpr.X.apply(w.tSpr, arguments)
            return w
        }
    w.tY=function(t){var w=this
            if(U(t)){return w.tSpr.Y()}
            w.tSpr.Y.apply(w.tSpr,arguments)
            return w}
    w.tXY=function(x,y){var w=this
            if(U(x)){return {x: w.tX(), y: w.tY()}}

            y=N(y)?y:x

            return w.tX(x).tY(y)
        }
    w.tRightLeft=function(){var w=this, left
            z(function(){
                if(!left){
                    w.tX(10,'+')
                    if(w.tX() > 2000){left=1}
                }
                else {
                    w.tX(10,'-')
                    if(w.tX() < 400){left=0}
                }})
            return w}
    refMakeWorldScrollCode=function(){

        alert('refMakeWorldScrollCode')
        w.t =  w._t = w._t || w.S(w.hW, w.hH, 'w', [[20,2,'-'] ]).r(.8) //trackee
        w.i.A( w.tSpr=  $Ct().XY(w.t.X(), w.t.Y()) ) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)


        z(function(){


            if(F(w.t.cb)){w.t.cb()} else if(F(w.tCb)){w.tCb()} // actually calls the callbacks


            // i see w.sXCap and w.sYCap.. i think they limit the scroll distances
            //distances are simply calculated and assigned right to **** w.s *****
            //so it moves the actual stage... (dont worry, not the canvas)
            w.s.x = -w.sXCap( (w.t.X()-w.hW+ w.hW)*w.z - w.hW  )
            w.s.y = -w.sYCap( (w.t.Y()-w.hH+ w.hH)*w.z - w.hH  )


            if(w.t == w._t){// if the trackee is the generic one that world provided...
                //have it bind to 'tSpr'.. some dumb tim graphic.. i think i can lose this part real soon
                w.t.XY(
                    w.tSpr.X(),
                    w.tSpr.Y()
                )
                w.s.rot(  w.tSpr.rot()  )

            }

        })




    }
}
function yip(){
    b2d.cn.t = b2d.cn.thrust = function (p, o) {

        v = p.vec(-1)

        if (U(o)) {
            o = 5
        }
        if (N(o)) {
            o = {n: o}
        }
        o = O(o) ? o : {}
        o.n = N(o.n, 5)

        if (K.u) {
            p.I(v.m(o.n * 40))
        }

        if (K.d) {
            p.I(-v)
        } //.m(o.n?)
        p.aV(K.r ? 15 : K.l ? -15 : 0)

        if (K.l) {
            p.rt(2, '-')
        }
        if (K.r) {
            p.rt(2, '+')
        }

    }
    b.wP = b.wPt = function (x, y) {
        var b = this
        return b.GetWorldPoint(V(x, y).div()).mult()
    }
    b.v = b.vec = function () {
        var b = this, g = G(arguments), o

        if (g.m) {
            return b.GetWorldVector(V(0, -1).m(N(g.f, 100)))
        }

        o = g.O ? g.f :
            g.s ? {x: g.f, y: g.s} : //this not error
            {y: g.f}

        o.x = N(o.x, 0)

        o.y = N(o.y, -1)

        //the current direction of that vector in world coordinates

        return b.GetWorldVector(V(o.x, o.y))

    }
    b.polBu = b.polyBul = function () {
        var b = this, w = b.W(), v, pt, bu
        v = b.vec(-20)
        pt = b.wP(0, -50)
        bu = w.polBu(pt.x, pt.y, 4, 4, 'w').d(1).lD(0).lV(v)
        return bu.K('polBu')

    }
    b.bu = b.bul = function () {
        var b = this, g = G(arguments)
        if (g.p) {
            b.SetSensor(true)
        }
        return b
    }
    w.bu = w.bul = function () {
        var w = this, g = G(arguments), o, bu

        o = O(g[0]) ? {x: g.f.x, y: g.f.y, r: g.s} : {x: g.f, y: g.s, r: g.t}

        o.r = N(o.r, 8)

        o.x = N(o.x, 100);
        o.y = N(o.y, o.x)

        bu = w.D(o.x, o.y, 'w', o.r).K('bul bu')
        bu.lD(0).aD(0).fr(0).d(.1).r(.5)
        bu.SetBullet(true)
        bu.cl(function (f) {
            if (!g.n) {
                this.xB()
            }
            if (g.p) {
                f.xB()
            }
        })

        return bu
    }
    b.sht = function (vel) {
        var b = this, g = G(arguments), dst, bu, o

        o = g.S_ ? {k: g.f, v: g.s} : {v: g.f}
        o.v = N(o.v, 50000)
        //dst= this.v().m(100) //bu=w.bu(b.X()+dst.x,  b.Y()+dst.y)
        return w.bu(
            this.wP(0, -200)  //just above b
        )
            .d(.5).lD(0).fR()
            .lV(
            this.v(o.v, '*')
        )
            .K(o)


    }
    b.shtSp = function (k) {
        var b = this
        $.space(function () {
            b.sht(k)
        })
        return b

    }
    b.shtEv = b.shootOnInt = function (ms, k) {
        var b = this
        _.ev(N(ms / 1000, 0.4), function () {
            if (b.IsActive()) {
                b.sht(k)
            }
        })
        return b
    }


    b.thr = function () {
        this.cn('thrust')
    }
    b.dir = function (d) {
        var b = this
        if (U(d)) {
            return b._dir
        }
        b._dir = d
        return b
    }
    b.tow = b.towards = function (x, y, sp) {
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
    }
    b.rTow = function (y) {
        var b = this,

            a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
        if (y.Y() > b.Y()) {
            a += 180
        }
        b.rt(a)
        return b
    }

    w.y = w.ship = function () {
        var w = this, g = G(arguments), hS, side, ship, y, o


        o = g.O ? g.f : g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
        {x: g.f, y: g.s, sc: g.t}
        o.c = o.c || 'y';
        o.sc = N(o.sc, 4);
        o.x = N(o.x, 100);
        o.y = N(o.y, 100)

        y = w.D(o.x, o.y);
        hS = o.sc * 4;
        side = hS * 2;
        y.pol(oO('c', o.c), [[-hS, hS], [0, -side * 2], [hS, hS]])

        y.push = function (frc) {
            var y = this, g = G(arguments)

            frc = N(g.f, 1)

            if (g.p) {
                _.ev(N(g.s, 100 * 1000), function () {
                    y.push(frc)
                })
            }
            else {
                y.I(y.v().m(frc * 0.1))
            }

            return y
        }
        y.going = function () {
            var y = this,
                lv = y.lV()
            return M.a(lv.x) > 0.5 || M.a(lv.y) > 0.5 || M.a(y.aV()) > 0.5
        }

        if (!g.n) {
            y.cn('thrust').shtSp()
        }
        if (g.p) {
            y.tr()
        }
        //y.sht= _.b($.mo(.15,y.sht),y)

        y.fixedRot(false)
        y.aD(0)
        y.r(.8)
        y.SetBullet(true)

        return y.K('ship yip y')
    }
//these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
    w.Y = function () {
        var w = this, g = G(arguments)

        y = $a(w, 'y', g)

        if (g.p) {
            y.track()
        }
        return w

    }


}