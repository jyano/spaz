b2d.p()
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

