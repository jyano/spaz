

b2d.cn.t=b2d.cn.thrust=function(p, o){

    v = p.vec(-1)

    if(U(o)){o=5}
    if(N(o)){o={n:o}}
    o=O(o)?o:{}
    o.n=N(o.n,5)

    if(K.u){  p.I(v.m(o.n * 40))  }

    if(K.d){ p.I(-v) } //.m(o.n?)
    p.aV( K.r?  15: K.l? -15:0)

    if(K.l){ p.rt(2,'-') }
    if(K.r){ p.rt(2,'+') }

}
b.wP= b.wPt= function(x,y){var b=this
    return b.GetWorldPoint( V(x,y).div() ).mult()
}
b.v= b.vec=function(){var b=this,g=G(arguments),o

    if(g.m){
        return b.GetWorldVector( V(0,-1).m(N(g.f,100)) )
    }

    o= g.O? g.f :
        g.s? {x: g.f, y: g.s} : //this not error
        {y: g.f}

    o.x = N(o.x,0)

    o.y = N(o.y,-1)

    //the current direction of that vector in world coordinates

    return b.GetWorldVector(V(o.x, o.y))

}
b.polBu= b.polyBul=function(){var b=this,w= b.W(), v,pt,bu
    v = b.vec(-20)
    pt = b.wP(0, -50)
    bu = w.polBu(pt.x, pt.y,4,4,'w').d(1).lD(0).lV(v)
    return bu.K('polBu')

}
b.bu= b.bul=function(){var b=this, g=G(arguments)
    if(g.p){b.SetSensor(true) }
    return b}
w.bu=  w.bul=function(){var w=this,g=G(arguments), o,bu

    o=O(g[0])? {x:g.f.x, y:g.f.y, r:g.s} :{x: g.f,y: g.s,r: g.t}

    o.r = N(o.r,8)

    o.x = N(o.x,100); o.y = N(o.y,o.x)

    bu = w.D(o.x,o.y,'w',o.r).K('bul bu')
    bu.lD(0).aD(0).fr(0).d(.1).r(.5)
    bu.SetBullet(true)
    bu.cl(function(f){
        if(!g.n){ this.xB() } if(g.p){  f.xB() }
    })

    return bu
}
b.sht= function(vel){var b=this,g=G(arguments), dst,bu, o

    o = g.S_? {k:g.f,v:g.s} : {v:g.f}
    o.v =  N(o.v,  50000)
    //dst= this.v().m(100) //bu=w.bu(b.X()+dst.x,  b.Y()+dst.y)
    return w.bu(
        this.wP(0,-200)  //just above b
    )
        .d(.5).lD(0).fR()
        .lV(
        this.v(o.v, '*')
    )
        .K(o)


}
b.shtSp=  function(k){ var b=this
    $.space(function(){b.sht(k)})
    return b

}
b.shtEv=b.shootOnInt= function(ms, k){var b=this
    _.ev(N(ms/1000, 0.4), function(){
        if(b.IsActive()){b.sht(k)}})
    return b
}



b.thr=function(){this.cn('thrust')}
b.dir=function(d){var b=this
    if(U(d)){return b._dir}
    b._dir=d
    return b}
b.tow=b.towards=function(x,y,sp){var b=this,lV

    __sp=function(s){
        s= N(s,5)
        s = 11 - (  s > 10 ? 10 : s )
        s*=20
        return s
    }
    sp= N(sp,5)
    sp = 11 - (  sp > 10 ? 10 : sp )
    sp*=20
    lV=V(x-b.X(), y-b.Y()).d(sp)
    return b.lV(lV)

    //if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
    //more realistic to accelerate, via forces?
}
b.rTow=function(y){var b=this,

    a=-M.tD(   M.atan(   (y.X()-b.X())/  (y.Y()-b.Y()) ) )
    if(y.Y()>b.Y()){ a+= 180 }
    b.rt(a)
    return b
}

w.y = w.ship= function(){var w=this, g=G(arguments), hS, side, ship, y,o


    o=g.O? g.f: g.S_? { c:g.f, x:g.s, y:g.t, sc:g[3] }:
    {x: g.f, y: g.s, sc: g.t}
    o.c= o.c||'y'; o.sc= N(o.sc, 4); o.x= N(o.x, 100); o.y= N(o.y, 100)

    y=w.D(o.x,o.y);hS = o.sc* 4; side = hS * 2; y.pol( oO('c',o.c), [[-hS,hS],[0,-side*2],[hS,hS]])

    y.push=function(frc){var y=this, g=G(arguments)

        frc=N(g.f, 1)

        if(g.p){
            _.ev(N(g.s, 100*1000),   function(){y.push( frc )})}
        else { y.I(y.v().m(frc*0.1))  }

        return y}
    y.going=function(){var y=this,
        lv=y.lV()
        return M.a(lv.x)>0.5|| M.a(lv.y)>0.5|| M.a(y.aV())>0.5}

    if(!g.n){y.cn('thrust').shtSp()}
    if(g.p){y.tr()}
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
w.Y = function(){var w=this, g=G(arguments)

    y = $a(w, 'y', g)

    if(g.p){y.track()}
    return w

}


