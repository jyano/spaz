

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



b.f=function(){var b=this,g=G(arguments), o

    if(g.u){return b._f()}

    if(g.S_){g.L--}
    if(g._S){g.L--}

    if(g.A){
        g.e0(function(gg){b.ap('f', g.G(gg))})
    }//   [ [],[],fD,4,[] ]


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

    else if (b2d.iFD(g.f)){return b._f(g.f)}//(fD)

    else if (g.S_ && b2d.iFD(g.s)){
        b._f(g.s, g.f)
    }//('c', fD)



    else if(O(g.s)){
        b.pol(g.S_? {c:g.f, v:g.r}: {v:g})
        if(g.n){b.sen(1)}  //if (g.n) {o.s=1}
    }//pol



    //circle
    else if(g.L==1|| g.L==3){
        o={c: g.f, r: g.s, x: g.t, y:g[3]}
        if(g.n){o.s=1}
        b.cir(o)

    }


    else {
        o={c: g.f, w: g.s,  h: g.t, x:g[3], y:g[4], a:g[5]}
        if(g.n){o.s=1}
        b.rec(o).C(o.c) }  // $a(b,'rec', g.g)

    return b.d(1)

}

