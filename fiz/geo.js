
b2d.vs=function(){ var g=G(arguments)
    //all this does is to 'scale down' a series of points
    //can pass in pts naked OR in an array
    if(g.s){return _.m(g, b2d.div)}
    //passed in verts ([],[],[])
    return _.m(g.f, b2d.div) //passed an array [[],[],[]]
   //b2d.div <- function div(v){return V(v).div()}
}
M.p= function(){
    //it expects worldVerts....
//it works with worldVerts...
//it was designed with
//that in
//mind
    var g=G(arguments),
        p,b,fs,vs
    b2d.mini()
    if(iP(g[0])){return g[0]}
    p= pD()
    if(iB(g[0])){
        fs=g[0].fs()
        vs=fs[0].wV()
        _.eR(fs,function(v){
            vs=vs.uni(v)})}
    else {
        vs= b2d.iF(g[0])? g[0].wV(): g[0]}
    p.A(vs)
    return p
}
ps= gpcas.geometry.PolySimple.prototype
pD= gpcas.geometry.PolyDefault.prototype
ps.vs= function(){var p=this,vs=[]
    _.t(p.n(), function(i){
        vs.push([p.getX(i), p.getY(i)])})
    return vs
}
ps.reg=  function(b){var p=this,g=G(arguments),
    vs=p.vs(),b,o

    //you can pass in the verts,
    // or the gPoly itself!
    //what about a f?

    o = V(g[0],g[1])
    vs= _.m(vs, function(v){return V(v).sub(o.x,o.y)})

    return M.p(vs)
}
pD.dot=function(w){var pD=this
    pD.vs(function(v){
        w.dot('w',v[0],v[1])})
    return pD
}
pD.U=function(){var pD=this, g=G(arguments),
    uP

    if(b2d.isBody(g[0])){
        uP = pD.U(g[0].f())
        _.eR(g[0].fs(),function(f){
            uP=pD.U(f)})
        return uP}

    return pD.union( M.p(g[0]) )
}
pD.reg= pD.rel=function(b){var p=this,g=G(arguments),
    vs=p.vs(),b,o

    //you can pass in the verts,
    // or the gPoly itself!
    //what about a f?

    o = V(g[0],g[1])
    vs= _.m(vs, function(v){return V(v).sub(o.x,o.y)})

    return M.p(vs)
}
pD.ps=function(){var p=this,
    g=G(arguments),
    fn,
    ps=[];

    b2d.mini()

    //put all my polys in an array
    _.t(p.nP(),function(i){
        ps.push(p.g(i))
    })


    if(iB(g[0])){
        ps= _.m(ps, function(p){
            //return M.p(p).rel(g[0])
            return p.reg(g[0])
        })
        fn=g[1]
    }

    else if(N(g[0])){

        ps= _.m(ps, function(p){
            return p.reg(g[0],g[1])
        })

        fn=g[2]

    }


    else {fn=g[0]}

    if(g.p){ps= _.m(ps,M.p)}
    if(F(fn)){_.e(ps,fn);return p}

    return ps

}
pD.pol=function(b){var p=this
    p= M.p( [ [0,50],[-50,0],[0,-50],[50,0]  ])
    // w.pol(v.x, v.y, p) -> p.pol(w,v)?
    p.ps(b,function(p){b.pol(p)})
    return p
}
pD.ger=function(x,y){var p=this,v=V(x,y)
    return p.reg(-v.x, -v.y)
}
pD.D=function(){var pD=this, gg=G(arguments)
    b2d.mini()
    gg.e(function(g){
        if(iB(g)){
            if(g.n()==1){return pD.D(g.f())}
            g.fs(function(f){
                pD = pD.D(f)
            })
        }

        else {pD=pD.difference(M.p(g))}

    })
    return pD
}
pD.A=pD.addPoints=function(pts){var p=this
    if(A(pts)){
        _.e(pts,function(pt){
            p.addPoint(V(pt))
        })
    }
    return p
}
pD.vs=function(fn){var p=this,g=G(arguments), vs=[]
    _.t(p.n(),function(i){vs.push([p.getX(i), p.getY(i)])})
    if(g.n){vs= _.m(vs, function(v){return V(v).sub(g[0])})}

    if(g.p){vs= _.m(vs, function(v){
            return V(v).add(g[0])
        })
    }

    if(F(fn)){
        _.e(vs, function(v){fn(v)})
        return p
    }

    return vs
}
pD.plus=function(x,y){var p=this,
    vs=p.vs()
    vs = _.m(vs, function(v){
        v=V(v)
        return v.add(x||0, y||0)})
    return M.p(vs)
}
pD.minus=function(x,y){var p=this,
    vs=p.vs()
    vs = _.m(vs, function(v){
        v=V(v)
        return v.sub(x||0, y||0)})
    return M.p(vs)
}
pD.dot=function(){var p=this

    p.vs(function(v){
        w.dot('o', v)
    })
    return p}
b2d.tF=function(f){return  b2d.iB(f)?f.f():f}
b2d.iF=b2d.isFixt
b2d.hV= b2d.hasVerts = function (poly) {
    return poly.m_List.get(0)
}
b2d.ol= b2d.overlapping = function (b1, b2) {
    var v1 = M.p(b1),//wont work yet
        v2 = M.p(b2)
    var p = v1.union(v2)
    return !(_.isEqual(p.vs(), v1.vs()) || _.isEqual(p.vs(), v2.vs()))
}
b2d.iG= b2d.iGP=b2d.isGPoly=function(a){return O(a) && F(a.isHole)}
b2d.recV=function(x,y,w,h){var hW=w/2,hH=h/2
    return [[x-hW,y-hH],[x+hW,y-hH],[x+hW, y+hH],[x-hW,y+hH]]}
b2d.add=function(vs,p){
    return _.m(vs, function(v){
        return V(v).add(p)
    })
}
b2d.glu = function (a, b) {return a.glu(b)}
