

b.__f=function(f){
    var b=this, g=G(arguments)
    if(g.u){ return b.GetFixtureList() }
    f = b.CreateFixture(f)
    return f
}



b._f= function(f,c){var b=this,g=G(arguments)
    if(g.u){ return b.GetFixtureList() }
    f = b.CreateFixture(f)
    if(c){f.C(c)}
    return f
}



b.f=function(){var b=this,g=G(arguments), o; if(g.u){return b._f()}

    if(g.S_){g.L--}
    if(g._S){g.L--}

    //PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
    if(g.A){
        g.e0(function(gg){b.ap('f', g.G(gg))})}//   [ [],[],fD,4,[] ]
    else if(g.SA){
        g.e1(function(f){//       'c',  [ [.,.],[.,.],fD ]
            if(b2d.iFD(f)){b._f(f, g.f)}
            else {
                if(!S(_.f(f))){
                    f.unshift(g.f)}
                b2d.iFD(f[1])? b._f(f[1],f[0]) : $a(b, 'f', f)
            }
        })
    }



    //PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
    else if (b2d.iFD(g.f)){return b._f(g.f)}//(fD)
    else if (g.S_ && b2d.iFD(g.s)){b._f(g.s, g.f)}//('c', fD)




    //PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
    else if(O(g.s)){pol()}
    else if(g.L==1|| g.L==3){cir()}
    else {rec()}



    return b.d(1)

    function cir(){
        o={c: g.f, r: g.s, x: g.t, y:g[3]}
        if(g.n){o.s=1}
        b.cir(o)
    }
    function rec(){
        o={c: g.f, w: g.s,  h: g.t, x:g[3], y:g[4], a:g[5]}
        if(g.n){o.s=1}
        b.rec(o).C(o.c)  // $a(b,'rec', g.g)

    }
    function pol(){


        b.pol(g.S_? {c:g.f, v:g.r}: {v:g})
        if(g.n){b.sen(1)}  //if (g.n) {o.s=1}
    }
}


w.D=function(){var w=this, g=G(arguments,'k'),o,b

    if(g.u){return w.D(w.hW, w.hH)}

    o= g.O? g.f: g.O_? {p:g.f, f:g.r}:

    {p:[g.f,g.s],f:_.r(g,2)}

    b = w.cB( b2d.BD( o.p ) )

    b.K(g.k)

    $a(b, 'f', g.G( o.f ) )

    return b
} //w.sp=w.ct=function(x,y){var w=this;return w.hud.ct(x||w.hW,y||w.hH).drag()}
