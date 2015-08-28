

$PT()

i.P=function(){return this.parent}

i.X=function(x,dur){var i=this,g=G(arguments)
    if(U(x)){return i.x}
    i.x = g.p? i.x+x
        :g.n? i.x-x
        :g.m? i.x*x
        :g.d? i.x/x
        :     x

    return i
    //if (N(dur)) {tw([i], [{x: x}, dur]); return i}
}
i.Y = function (y, dur) {
    var i = this, g = G(arguments)
    if (U(y)) {
        return this.y
    }
    if (g.p) {
        y = this.y + y
    }
    else if (g.n) {
        y = this.y - y
    }
    else if (g.m) {
        y = this.y * y
    }
    else if (g.d) {
        y = this.y / y
    }


    if (N(dur)) {
        tw([this], [{y: y}, duration])
    }

    else {
        this.y = y
    }
    return this
}
i.XY = function (x,y){var i=this,g=G(arguments),v
    if(U(g[0])){return {x:i.x, y:i.y}}
    v=V(g[0],g[1])
    x= v.x
    y= _.tN(v.y, v.x)
    return i.X(x).Y(y)
}
i.W = function (a) {var i=this
    if(U(a)){
        return i.getBounds().width * i.scaleX
    }

    i.sX(i.scaleX * a /i.W())

    return i
}
i.H = function (a) {
    var i = this

    if (U(a)) {
        return this.getBounds().height * this.scaleY
    }

    this.sY(this.scaleY * a / this.H())

    return this

}
i.WH = function (w, h) {
    var i = this
    return this.W(w).H(h || w)
}
i.sX=function(n){var i=this
    if(U(n)){return i.scaleX}
    i.scaleX=n
    return i
}
i.sY = function (n) {var i=this
    if(U(n)){return i.scaleY}
    i.scaleY = n
    return i
}



i.kX = function (skewX) {
    if (U(skewX)) {
        return this.skewX
    }
    this.skewX = skewX;
    return this
}
i.kY = function (skewY) {
    if (U(skewY)) {
        return this.skewY
    }
    this.skewY = skewY;
    return this
}
i.kXY = function (x, y) {

    y = N(y) ? y : x

    return this.kX(x).kY(y)
}
i.rX = function () {var i=this,g=G(arguments),rX=g[0]
    if(U(rX)){return i.regX}
    i.regX = g.p? i.regX+rX : rX
    return i
}
i.rY = function () {var i=this,g=G(arguments),rY=g[0]
    if(g.p){i.Y(i.y+(rY-i.regY) )}
    if (U(rY)){return i.regY}
    i.regY=rY
    return i
}
i.rXY = function(){var i=this,g=G(arguments),
    x= _.tN(g[0]),
    y= _.tN(g[1],x)
    return i.rX(x).rY(y)
}
i.rt = i.rot = function () {
    var i = this, g = G(arguments), a = g[0]
    if (g.p) {
        return i.rT(i.rotation + _.tN(a, 1))
    }
    if (g.n) {
        return i.rT(i.rotation - _.tN(a, 1))
    }
    if (U(a)) {
        return i.rotation
    }
    i.rotation = a
    return i
}

i.bd= i.bounds=function(a,b,c,d){var i=this

    this.nominalBounds = new cjs.Rectangle(a,b,c,d)

    return this

}
i.al= function(al){var i=this
    if(U(al)){
        return i.alpha
    }
    i.alpha=al;
    return i
}


i.a2=function(ct, x,y){

    ct.A(this)
    if(N(x)){this.X(x)}; if(N(y)){this.Y(y)}
    return this
}
i.rC=      i.rCenter=function(){var i=this,g=G(arguments), x, y,hW,hH

    x=i.W()/2
    hW=x
    y=i.H()/2

    hH=y

    return (g.p)?
        i.rX(hW,'+').rY(hH,'+'):
        i.rXY(hW,hH)
}
i.rgc=    function(){var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
    return (g[0]===0)?
        i.rXY(0,0,(g.p?'+':null))
        : i.rXY(x,y,(g.p?'+':null))}//
i.rZero=   function(a){var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
    if (g.p) {
        i.rX(0,'+').rY(0,'+')
    }//i.X(a, i.regX()-a, '+')
    else {i.rXY(0,0)}
    return i}//
i.gL= i.gTL=function(x,y){var i=this
    if(O(x)){y= x.y;x= x.x}
    return i.globalToLocal(x,y)}
i.hT= i.test=function(x,y){var i=this
    if(cjs.iDO(x)){return i.hT(i.gTL(x))}
    if(O(x)){y= x.y;x= x.x}
    return i.hitTest(x, y)}
i.uM= i.underMouse=function(){var i=this, s=i.S()
    if(s.mouseInBounds){
        var pt = i.gTL(s.mouseX,s.mouseY)
        return i.hT(pt)}}
i.tf=  function(){var i=this,g=G(arguments)

    if(U(g[0])){return [
        i.x,
        i.y,
        i.scaleX,
        i.scaleY,
        i.rotation,
        i.skewX,
        i.skewY,
        i.regX,
        i.regY
    ]
    }
    if( O(g[0]) && F(g[0].getTransform)){
        g[0]= g[0].getTransform()}
    i.setTransform.apply(  i, A(g[0]) ? g[0] : g)
    return i
}
i.$=function(fn){return this.on('click', fn)}
i.$$=function(fn){return this.on('dblclick', fn)}
i.xx= i.rm= i.remove =function(){var i=this
    i.parent.removeChild(i)
    return i} //cant delete 'remove' quite yet
i.hide=function(){this.visible=false; return this}
i.of=function(k){
    this._K = this._K || []
    return !k  || this == k ||  _.ct( this._K ,  k)
}
i.K=function() {var i=this, g=G(arguments)
    this._K = this._K || []

    if (g.u) {return this._K.join(' ') }

    if (g.O) {this._K(g.f.k); return this }


    _.eW(g.f, function (k) {


        if (!i.of(k)) { i._K.push(k)
        }


    })

    return this
}


//i.of=function(k){return this.K()==k || this.K()==''}
i.cX=  function(a){var i=this
    if(U(a)){return i.x + i.W()/2 }
    return i.X( a- i.W()/2)}
i.cY =   function(a){var i=this,
    hH=i.H()/2
    return U(a)?i.y+hH:i.Y(a-hH)}


i.sib=function(){return this.P().ch()}



i.ix=function(n){var i=this, g=G(arguments)
    if(U(g[0])){return }
    i.P().setChildIndex(i, n)
    return i
}
i.toFront = function(){ return this.ix( this.sib().length-1 ) }
i.within = i.inStage =  function(){var i=this,g=G(arguments), s=i.S(),wthnS

    wthnS = i.x > 0 && i.y > 0

    &&   i.x < (s.W()-100)  &&   i.y< ( s.H()-100 )

    if(g.n && !wthnS){ s.rm() }

    return wthnS
}

i.belowStg = function(){ return this.y > this.S().H() }

i.dg= i.drag=function(){var i=this;SL(i);return i}


// ~ scroll
i.tickX = function (fn) {
    var i = this
    cjs.t(function () {
        i.X(fn())
    })
    return i
}
i.tickY = function (fn) {
    var i = this
    cjs.t(function () {
        i.Y(fn())
    })
    return i
}

i.RT = function(){var i=this; RT(i);return i}
i.bB= i.bindBody=function(b){var i=this
    cjs.t(function(){
        b.X(i.X())
        b.Y(i.Y())
        b.rot(i.rot())})
    return i}
i.toR = i.moveRight = function (num) {
    num = num || 20
    this.X(num, '+')
    return this
}
i.toL = i.moveLeft = function (num) {
    num = num || 20
    this.X(num, '-')
    return this
}
i.toU = i.moveDown = function (num) {
    num = num || 20
    this.Y(num, '-')
    return this
}
i.toD = i.moveDown = function (num) {
    num = num || 20

    this.Y(num, '+')
    return this
}
i.keyControls = function (num) {
    var args = G(arguments), i = this
    if (args.P) {
        $.kD('left', function () {
            i.toL(num)
        })
        $.kD('right', function () {
            i.toR(num)
        })
    }
    if (args.N) {
        $.kD('up', function () {
            i.toU(num)
        })
        $.kD('down', function () {
            i.toD(num)
        })
    }
}


i.warpX = function (lo, hi, cush) {
    var i = this, wrp = M.wrp(lo, hi, cush)
    cjs.t(function () {
        i.x = wrp(i.x)
    })
    return i
}

i.warpY = function (lo, hi, cush) {
    var i = this, wrp = M.wrp(lo, hi, cush)
    cjs.t(function () {
        i.y = wrp(i.y)
    })
    return i
}


i.warp = function (n) {
    var i = this, s = i.S(), n = n || 0
    i.warpX(0, s.W(), n)
    i.warpY(0, s.H(), n)
    return i
}


i.shootBullet = function(){
    shooter = this
    s =stage = shooter.stg()

    bullet = cjs.circ(8, 'w').XY(shooter).a2(s)

    bullet.startMoving(

        (shooter.vx||1)*1.5, (shooter.vy||1) *1.5
    )

}




i.hitByBullet = i.isPointInMyRectBounds =  function(bullet){
    var args=G(arguments), bullet=args[0],

        didHit = M.pointInRectangle(
            bullet.cX(),  bullet.cY(),
            {x:this.cX(),
                y:this.cY(),
                w:this.W(),
                h:this.H()}
        )
    if(args.n){
        if(didHit){this.rm()}

    }
    return didHit

}






i.killAllIAmHitting = function(){
    var i=this,
        stage = i.St()
    _.e(stage.children, function(obj){
        if(i != obj){ obj.hitByBullet(i, '-') }
    })

}


i.makeMeAKiller =function(){
    var i = this
    cjs.tick(function(){
        i.killAllIAmHitting()
    })
    return this}
i.bounce=function(n){
    var i=this,
        stage = i.getStage() ,
        h=stage.H(),
        w=stage.W()
    n=N(n,0)
    T.t(
        function(){var x=i.x, y=i.y
            if(x > w - i.W() - n  || x <(n ) ){ i.vX('-') }
            if(y> h - i.H() -n|| y<(n )){ i.vY('-')  }
        })
    return i}

i.startMoving=function(x,y){var i=this,vx,vy
    if(x){i.vX(x)}
    if(y){i.vY(y)}
    vx = i.vx||0
    vy = i.vy||0
    T.t(function(){
        i.X(vx,'+').Y(vy,'+')
    })
    return i}


i.dot = function () {
    var i = this
    i.getStage().dot(i.X(), i.Y())
    return i
}
i.flash = function () {
    var i = this
    i.opacity(0)
    $.in(.3, function () {
        i.opacity(1)
    })
    return i
}


i.St = i.S= i.st=  function(){return this.getStage()}


comp()
function comp(){


    i.o=function(o){this.compositeOperation = o;return this}

    i.Ds= i.dO=function(){this.o('destination-out'); return this}
    i.dS= i.dI=function(){return this.o('destination-in')}
    i.sD= i.sI=function(){this.o('source-in'); return this }
    i.Sd= i.sO=function(){this.o('source-out'); return this } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
    i.ds= i.dV= function(){ this.o('destination-over'); return this }
    i.SD= i.sT= i.sA= function(){ this.o('source-atop'); return this }
    i.DS= i.dT= i.dA= function(){ this.o('destination-atop'); return this }

    i.li=function(){ this.o('lighter'); return this }
    i.co=function(){ this.o('copy'); return this }
    i.xo=function(){ this.o('xor'); return this }







}


function easPhys(){


    i.move = function () {
        return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
    }
    i.accelerate = function () {
        return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
    }
    i.jerk = function () {
        return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
    }
    i.vX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    i.vY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    i.vXY = function (x, y) {
        return this.vX(x).vY(y)
    }
    i.aX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    i.aY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    i.jX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    i.jY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    i.brake = function () {
        this.vx = this.vy = 0
    }


}
easPhys()


cjs.iDO= function(i){return O(i)&&F(i.getStage)}



_bm=function(a){return new cjs.Bitmap(a)}
$Bm=  function(bm){var g=G(arguments)
    bm= _bm(bm)
    if(g.p){ bm.drag() }
    return bm
}

cjs.M = function (a) {
    var m = new cjs.Matrix2D()
    if (N(a)) {
        m.rotate(a)
    }
    return m
}
cjs.m2d = function (a, b, c, d, e, f) {if (U(c)) {
    return new cjs.Matrix2D(1, 0, 0, 1, N(a, 0), N(b, 0))
}
    return new cjs.Matrix2D(N(a, 1), N(b, 0), N(c, 0), N(d, 1), N(e, 0), N(f, 0))}

i.sXY = function(x,y){

    var i=this,
        g=G(arguments),v

    if(U(g[0])){
        return i
        return {x:i.sX(),y:i.sY()}
    }

    v=V(g[0],g[1])
    x=_.tN(v.x)
    y=_.tN(v.y,v.x)
    i.sX(x)
    i.sY(y)
    return i
}