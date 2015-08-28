
_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
Q=function(){var g=G(arguments),  o=g.F?{c:g.f}: {m:g.f,c:g.s}
    o.m = o.m || _MF
    Q = (new cjs.LoadQueue).c(o.c).m(o.m)
}
WQ = function(){
    var g = G(arguments), o = _.x({ob:g.f||{}},
        F(g.t)?{fn0: g.s, fn: g.t}: {fn: g.s})
    o.fn = o.fn || function(){}

    w = W(o.ob)
    if (o.fn0) {o.fn0(w)}
    Q(o.ob.I||_MF ,
        function(){o.fn(w)
        })

}
q.f= q.l= function(fn){var q=this
    q.on("fileload", fn)
    return q}
q.c= function (fn) {var q=this
    if(F(fn)){ q.on("complete", fn) }
    return q
}
q.b=  q.bm =function(i, ct, x, y){
    var bm = $Bm( this.r(i) );
    if(ct){bm.a2(ct,x,y)}; return bm
}
q.i=  q.r= function(i){i  = this.getResult(i); i.w= i.width;i.h = i.height; return i}
q.$=function(i){
    return $(this.i(i))
}
q.m = function(){var q=this, g=G(arguments), _mf, mf
    // q.m:
// protosig:
//
// 'me',..
//
// {src:'me', id:'him'},..
//
// [ {src:*, id:*}, 'me',.. ]

    if(g.u){return q}
    _mf = g.A ? g.f : g
    mf = _.m(_mf,  function(item){
        return S(item)? {src: _.src(item),id:item} : item
    })
    q.loadManifest( mf )
    return q
}