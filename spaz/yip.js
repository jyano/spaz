b.bu = b.bul = function () {
    var b = this, g = G(arguments)
    if (g.p) {b.SetSensor(true)}
    return b
}
b.vec= b.v=function(){var b = this, g = G(arguments), o

    o = g.O ? g.f :
        g.s ? {x: g.f, y: g.s} : //this not error
        {y: g.f}




    return g.m? b.GetWorldVector(V(0, -1).m( N(g.f, 100)))://used when shooting!

        b.GetWorldVector(V(N(o.x, 0), N(o.y, -1)))

}//the current direction of that vector in world coordinates


b2d.cn.t = b2d.cn.thrust = function (p, n) {

    var vec,
        vecDefault=5,
        vecMultConst=40,
        vecMultiplier = N(n, vecDefault) * vecMultConst
    
    if (K.u){
        vec = p.vec(-1)
        p.I(vec.m( vecMultiplier ))
    }


    angVel = K.r ? 15:K.l?-15:0
    p.aV(angVel)
}




w.y = w.ship = function (){


    var w = this, g = G(arguments), hS, side, ship, y, o
    o = g.O ? g.f :  //pass opOb
        //pass {c='y'}, x=100, y=100, sc=4
        g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
        {x: g.f, y: g.s, sc: g.t}
    o.c = o.c || 'y';o.sc = N(o.sc, 4);o.x = N(o.x, 100);o.y = N(o.y, 100)


    y=sShip(makeShip(o.x, o.y, o.sc*4, o.c)).cn('thrust')


    y.shtSp()
    if (g.p){y.tr()}
    return y.K('ship yip y').aD(0).r(.8)




function makeShip(x,y,hS,c){var  side = hS * 2, y
    y = w.D(x,y)
    y.pol(oO('c', c), [
        [-hS, hS], [0, -side*2], [hS, hS]
    ])
    y.fixedRot(false)
    y.SetBullet(true)
    return y
}

function sShip(y){

    y.push = function (frc) {
        var y = this, g = G(arguments)

        frc = N(g.f, 1)

        if (g.p) {
            _.ev(N(g.s, 100 * 1000), function () {
                y.push(frc)
            })
        }

        else {
            y.I(y.vec().m(frc * 0.1))
        }

        return y
    }
    y.going = function () {
        var y = this,
            lv = y.lV()
        return M.a(lv.x) > 0.5 || M.a(lv.y) > 0.5 || M.a(y.aV()) > 0.5
    }
    return y
}

}



w.bu = w.bul = function(){
    var w = this, g = G(arguments), o, bu
        o = g.O_?  //pass {x,y},rad  OR x,y,rad
        {x: g.f.x,  y: g.f.y, r: g.s} :
            N(g.s)? {x: g.f,  y: g.s, r: g.t}:
            {r: g.f}

    bu = Bul(o.x, o.y).fr(0).d(.1).r(.5)
    bu.cl(onColl)
    return bu.lD(0).aD(0)
    function Bul(x,y,rad,c){

        c=c||'w'

        rad = N(rad, 8)
        var bu= w.D(x, y, c, rad).K('bul bu')

        bu.SetBullet(true)

        return bu
    }
    function onColl(f){
        if (!g.n) {this.xB()}
        if (g.p){
            if(O(f) && F(f.xB)){
                f.xB()
            }
        }
    }
}





b.sht = function (vel) {var b = this, g = G(arguments), dst, bu, o,vec,pt

    o = g.S_ ? {k: g.f, v: g.s} : {v: g.f}


    pt = this.wP(0, -200)  //just above b
    vec=this.vec(N(o.v, 50000), '*')

    bu  = w.bu(pt).lV(vec)
    return buProps(bu, o.k)
    function buProps(bu,k){
    bu.d(.5).lD(0).fR()
    bu.K(k)
    return bu
}
}

b.shtSp = function (k) {
    var b = this
    $.space(function () {b.sht(k)})
    return b
}






w.Y = function () {
    var w = this, g = G(arguments)

    y = $a(w, 'y', g)

    if (g.p) {
        y.track()
    }
    return w

}


//alert
b.shtEv = b.shootOnInt = function (ms, k) {
        alert('shootOnInt shtEv')
        var b = this
        _.ev(N(ms / 1000, 0.4), function () {
            if (b.IsActive()) { b.sht(k) } })
        return b
}
b.thr = function () {
    alert('b.thr')
    this.cn('thrust')}
