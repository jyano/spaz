h._dc=function(o){
    var h=this,gx=h.graphics,g=G(arguments)
    gx.dc(N(o.x,0),N(o.y,0),N(o.r,50))
    return h
}
h.cirs=function(g){g.e(function(c){this.dc(c)}); return this}
h.dc= function(x,y,r){var h=this,gx=h.graphics,g=G(arguments),o
    h.cp()
    if(g.A){return $a(h,'dc',g.f)}
    if(g.OO_){return h.cirs(g)}
    o = g.O?g.f: g.$?{r:g.f}: {x:g.f,y:g.s,r:g.t}
    return h._dc(o)
}


$Cir=   function(){var g = G(arguments), o
    o = g.S_? {c:g.f,x:g.s,y:g.t,r:g[3]}:
    {x:g.f,y:g.s,r:g.t}
    return $H(o.c,o.x,o.y)
        .dc(o.r)
}

h.cir= function () {var h = this, gx = h.graphics, g = G(arguments), o
    o = g.O ? g.f :
        N(g.t) ?  {x:g.f,y:g.s,r:g.t, c: g[3], C: g[4], l: g[5]} :
            N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
                g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]}:
                {c:g.f,C:g.s,l:g.t}

    h.c(o)

    if(o.bf){
        if(N(o.bf)){o.bm = 'me'}
        if(F(Q)){h.bf(o.bf, function(){h.dc(o)})}
        else {o.tf = o.tf || null; h.bf(o.bf, o.tf).dc(o)}
    }
    else {h.dc(o)}
    h.alpha = N(o.al, 1)
    return h
}



// 'h.cp()': i kinda like how it stroke-connects my cirs


//h.ef().es() //if (g.O_ && A(g.s)) {_.e(g.s, function(c){h.cir(_.x(c, g.f))}); return h }
