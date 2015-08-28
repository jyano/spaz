

$PT()

$Ct= function(a){return new cjs.Container(a)}

ct.T = function () {var ct = this, g = G(arguments), o, t
    o = g.O ? g.f :

        g.N_? {x: g.f, y: g.s, t: g.t, f:g[3], c:g[4]} :
            N(g.s)?   {t: g.f, x: g.s, y: g.t, f:g[3]} :
                _.x({t: g.f, f: g.s, c: g.t},
                    N(g[3]) && N([4]) ?{x: g[3], y: g[4]}:
                    {y: g[3]})
    o.f = N(o.f) ? o.f + 'px Arial' : o.f
    o.f = o.f || '50px Arial'
    o.c = oO('c', o.c || 'y')
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.t = String(o.t)
    t = $T(o.t,o.f,o.c).XY(o.x, o.y).a2(this).drag()
    if (g.n) {t.regX = t.W() / 2}
    t.bl('middle')
    if (g.p) {t.bl('alphabetic')}
    if (!g.n) {t.rX(t.mW() / 2)}
    return t
    //o.x = N(o.x, this.St().cen().x)
    /* if(g.p){
     tO = cjs.T(g.f, 'y', '40px Arial')
     if(N(g[3])){ tO.XY(g[3], g[4]) }
     return tO
     }*/
}

ct.rec = function () {
    var ct = this, g = G(arguments), o, ct2, h
    if (g.OO_) {
        g.e(this, 'rec');
        return this
    } //it doesnt know that's this! (scope talk)
    o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
        g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f

    o.al = N(o.al, 1)
    o.rt = N(o.rt, 0)
    o.c = o.c || 'z';
    o.C = o.C || 'w'
    ct2 = ct.ct();
    h = ct2.h(o.x, o.y);
    h.rt(o.rt);
    h.c(o).al(o.al)
    if (o.lf) {
        h.lf(o)
    } else if (o.rf) {
        h.rf(o)
    }
    if (o.bm) {
        h.bR({i: 'me', hs: [o]})
    }
    else {
        h.rec(o.w, o.h)
    }
    if (g.p) {
        ct.drag()
    }
    return ct2
}
ct.h = function () {
    var ct = this,
        h = $H.apply($H, arguments)
    ct.A(h)
    return h
}
ct.pol = function () {
    var ct = this, g = G(arguments), p,

        h = ct.h()

    if (N(g.f)) {
        h.XY(
            g.shift(),
            g.shift())
    }
    p = $a(h, 'pol', g)
    if (g.p) {
        p.drag()
    }
    return p
}
ct.C = ct.backgroundColor = function (c) {
    var ct = this
    $(ct.canvas).C(c)
    return ct
}
ct.cX = function () {
    return this.St().cen().x
}
ct.cY = function () {
    return this.St().cen().y
}

ct.cir = function (c, r, x, y) {
    var g=G(arguments)
    alert('ct.cir')
    return $Cir(c, r, x, y).a2(this)
}


ct.Ct=function(){
    this.ct.apply(this, arguments)
    return this
}

ct.Bm=function(){
    this.bm.apply(this, arguments)
    return this
}
ct.W=function(w){var can= this.St().canvas
    if(U(w)){ return can.width }
    can.width = w
    return this
}
ct.H=function(w){var can= this.getStage().canvas
    if(U(w)){ return can.height }
    can.height = w
    return this
}
ct.abs=function(x, y){  var s=this
    alert('ct.abs')
    ct.can.abs(x, y)
    return s
}
ct.ch=   ct.e=   ct.ix= ct.sChI=  ct.sChI= function(fn,n){
    var ct=this,CH
    if(N(n)){ct.setChildIndex(fn,n); return ct}
    CH=[]
    _.e(ct.children, function(ch){ CH.push(ch)})
    if(U(fn)){return CH}
    _.e(CH, function(ch){
        fn(ch)
    })
    return ct
}
ct.E= ct.clr= function(){return this.e(function(i){i.rm()})}
ct.Cv=function(){return this.St().canvas }
ct.A=function(x,y){var ct=this,  g=G(arguments)
    if(U(x)){$('body').append(ct.Cv()) }
    else if( N(x) ){ $('body').append(ct.Cv()).abs(x,y)}
    else { g.e(function(ch){ ct.addChild(ch) }) }
    return ct
}
ct.cen= ct.pt= ct.M= function(){
    return V(this.W()/2, this.H()/2)
}



ct.bgI=function(i){var ct=this
    ct.bm(i, function(b){ct.ch(b,0)})
    return ct

}


ct.noAuCl= function(){
    this.autoClear=false;
    return this
}
ct.au=   function(au){
    this.autoClear=au?true:false;
    return this
}

ct.eMO=function(en){this.enableMouseOver(en?true:false); return this}

ct.mc = function (x,y) {var ct = this, g = G(arguments),mc
    mc = cjs.Mc.apply(cjs,g)
    this.A(mc).XY(N(x,100), N(y,100))
    return mc}

ct.N=function(n){
    var s=this; if(U(n)){return s.nextStage}; s.nextStage=n; return s
}
ct.u=function(){this.update();return this}


ct.chalk = function () {
    var ct = this, g = G(arguments),
        h = 0
    g.e(function (t) {
        ct.T(t, 26, 'w', 475, h += 35)
    })
    return this
}
//
ct.ct= function(x,y){var ct = this,
    g = G(arguments), ct1=$Ct()
    o= g.F_? {fn:g.f} : {x: g.f, y: g.s}
    ct.A( ct1 )
    if (o.fn) {o.fn(ct1, ct)}
    else if (N(o.x)) {ct1.XY(o.x, o.y)}
    if (g.p){cjs.bindSlide(ct1)}
    return ct1
}
ct.bm=  ct.b= function self(){var ct=this,g=G(arguments), bm,

    o=  g.F_? {fn:g.s, sc: g.s} :
        g.N_ ? {sc: g.f, fn: g.s} :
            _.x({i:g.f}, N(g.s)? {  sc: g.s, fn: g.t}:
            {  fn: g.s, sc: g.t})
    o.sc= o.sc ||1

    _im(o)


    //
    if (O(o.i)){alert('ct.bm O(o.i)');return ct.A( $Bm(o.i) )}
    //


    $.i(o.i, function(i){

        bm = $Bm(i[0]).a2(ct).sXY(o.sc)

        if(!g.n){ bm.rC() }

        if(g.p){ bm.drag() }

        if(o.fn){ o.fn(bm) }

    })

    return ct

}
ct.d= ct.dot=function(c, x, y){var ct=this, o, d, tw, g=G(arguments)

    if(b2d.isGPoly(g.f)){

        _.e(g.f.vs(), function(v){ct.dot(V(v))})

        return this
    }


    if(g.A){

        _.e(c, function(G){
            if( A(G) ){ ct.dot.apply(ct, G) }
            else { ct.dot(G) }
        })

        return this
    }


    o = g.S_? (

        b2d.iB(g.s)? {c:g.f, x:g.s.sX , y: g.s.sY }:

            O(g.s)? {c:g.f, x:g.s.x, y: g.s.y}:
            {c:g.f, x:g.s, y: g.t}

    ):
        b2d.iB(g.f)? { x:g.f.sX , y: g.f.sY }:
            g.O_? {x:g.f.x,  y: g.f.y}:
            {x:g.f, y:g.s}



    o.x= N(o.x, ct.W()/2)
    o.y= N(o.y, ct.H()/2)
    o.c = o.c||'y'
    d = this.h(o.x, o.y).cir(8,  o.c, 'z', 2).al(.7).drag()
    tw=d.twL( [{sxy:1.3},100], [{sxy:1},100]).$()
    d.$$(function(){ tw.$() })
    return d.K('dev dot')
}
ct.qB=  ct.bQ=function(name, x, y, sX,sY, rt){var b,g=G(arguments)
    b= Q.b(name)
        .XY(N(x,0), N(y,0))
        .sXY(N(sX,1), N(sY,sX||1))
        .rt(N(rt,0))
    if(!g.n){b.rC()  }; if( g.p ){ b.drag() };
    this.A(b );
    return b
}
