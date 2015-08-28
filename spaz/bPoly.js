b2d.m=function(vs){ return _.m(vs, b2d.mult) }
b2d.tA=function(vs){return _.m(vs, function(v){return v.tA(v)})}




b.pol = function(){


    var b = this,
        w = b.W(),
        g = G(arguments);
    if (g.u) {  return b  }


    var  fs, arr, o, vs //-> {c:'r', v:[[],[],[]]} //pass in {c:'r', v:[[],[],[]]} //pass in [[],[],[]] //pass in ['r',[],[],[]] // b.fs(function(f){b1.pol(f.rV())})//g[0].ps(function(v){b.pol(v)})// else {_.e(g[0], function(v){b.pol(v)})}

    if(_passedVs(g)) {  return b.pol({v: g.f})  }
    if(_passedColAndVs(g)) {return b.pol({c: g.f, v: g.s})}
    if (b2d.iB(g.f)) {g.f.fs(b);return b}

    if (b2d.iF(g.f)) {g.f = g.f.vs()}




    o= polyShapeArgs(g)

    return b._pol(o)


}

b._pol=function(o){
    var b=this, fs  = newFixts(b, o)

    dressFs(fs,o)

    bindS(b,o)
    return fsRetVal(fs)


}

function dressFs(fs,o){

    _.e(fs, function (f){
        f.d(o.d).r(o.b).fr(o.f)
        if (o.s) {f.m_isSensor = o.s ? true : false; f.sen(1) }
        f.K(o.k)
        f.C(o.c, o.C, o.l)
        if (o.lf) {  f.bS(w.s.h().lf(o).lt(o.v)) }
        if (o.rf) {  f.bS(w.s.h().rf(o).lt(o.v))  }
    })
}

function _passedVs(g){return  b2d.iGP(g.f) && U(g.s)}
function _passedColAndVs(g){return S(g.f) && b2d.iGP(g.s) && U(g.t)}
function fsRetVal(fs){
    return fs.length > 1 ? fs : fs[0]
}
function newFixts(b,o) {var fs,n
    n = b.n()
    sep(b, o)
    fs = _.f(b.fs(), b.n() - n) //each of only the NEW fixts
    return fs
}
function bindS(b,o){
    o.i = o.i || o.bf
    if (o.i) {_bindS(b)}
    function _bindS(b){


        var h = w.g.h();
        h.bV(o);
        b.bS(h)
    }
}


f.C = function () {var f = this,
    b = f.B(), w = b.W(), g = G(arguments), o, h
    o = g.O ? g.f : {c: g.f, C: g.s, l: g[2]}
    o.c = (o.c == '*') ? $r() : (o.c || 'b')
    o.C = o.C || o.c
    f.removeSprites()
    h = f.iC() ?
        // if circle?
        w.s.h().cir(f.pX(), f.pY(), f.rad(), o.c, o.C, o.l) :
        // if poly
        w.s.h().pol(f.vs(), o.c, o.C, o.l)
    f.bS(h)
    b.i = h
    return f
}


function polyShapeArgs(g){
    var o= g.A ? (S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : {v: g.f}) :
            g.O ? g.f : !g.S_ ?  {v:g} : _.x({c: g.f}, g.t ? {v: g.r} : {  v: g.s} )
    df.h(o)
    if (b2d.iGP(o.v)) {o.v = o.v.vs()}
    return o
}






function sep(b, o){
    if (O(o.v[0][0])) {
        _.e(o.v, function (v) {b2d.sep(b, v)})
    }
    else {
        b2d.sep(b, o.v);
        o.v = [o.v]
    }

    //pass in 2 or more objs->

    //pass in one object
    //->  ['r', [],[],[] ]//->  [[],[],[]]
    //pass in color and loose verts//->'r',[],[],[]//->  'r', [[],[],[]]
    //just pass in loose verts//-> [],[],[]
    //same two as above but also nested in wrapper array.. so just ONE pam
    //if (o.X) {b.clear()}
    //the NEW fixts
}


f.vs =function(){var f=this, b=f.B(),g=G(arguments),
    vs=  b2d.m(  this.H().m_vertices   )
    if( g.p){
        b2d.rot=function(vs, b){return _.m(vs, function(v){
            return v.rot(b.rot())})}
        vs= b2d.rot(vs,b)
    }
    return b2d.tA(vs)
} //=f.rV






function old() {
    f._vs = function (f) {
        var h = this.H();
        if (h) {
            return h.m_vertices
        }
    }

    f.vs = f.rV = function () {
        var f = this, b = f.B(), g = G(arguments),

            vs = b2d.m(f._vs())
        return b2d.tA(
            g.p ? b2d.rot(vs, b) : vs
        )

    }
}



