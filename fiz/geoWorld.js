


b2d.p()
f.wV= function(){var f=this,b=f.B(),g=G(arguments),
    vs
    vs = g.n? f.vs():f.vs('+')
    return b2d.tA( _.m(vs, function(v){return V(v).add(b)}))
}
f.A=  f.area = function () {
    return M.p( this ).getArea()
}
f.dots=function(){var f=this;

    b2d.pD=b2d.polyDot = function (vs) {
        var t=0

        vs=A(vs)?vs : vs.wV

        w.dot('g', V(_.f(vs)))

        _.e(vs,
            function(v){
                $.in(t,function () {
                    w.dot(V(v))
                }, t)
                t += .1
            }
        )

        w.dot('r', V(_.l(vs)))

    }

    b2d.polyDot(f.wV())

    return f
}
f.uni=function(){var f=this,
    b=f.B(), g=G(arguments), p,n

    //can handle a fixt OR a body!
    //-> [f]

    if(g.jA){return $a(f,'uni',g.f)}

    p=M.p(f).U( g.f )

    g.eR(function(f){
        p=p.U(f)
    })

    return p.reg(b)

//n= p.getNumInnerPoly()
    //to do now!
    //if it receives a body, i should uni all thatbody's fixs against it
    //dont worry about rebuilding the body first? hmm....
}
f.dif= function(){var f=this, b=f.B(), g=G(arguments),p
    b2d.mini()
//f.dif does the math and returns the answer (vs)

    p=M.p(f)

    g.e(function(g){
        if(iB(g)){g.fs(function(f){p=p.D(f)})}
        else{p=p.D(g)}
    })

    if(!b2d.hV(p)){
        $l('!hV(p)')
        return
    }

    p=p.reg(f)

    if(g.n){p=p.reg(f.B())}

    return p
}
f.sub=function(){var f=this,b=f.B(),g=G(arguments),
    p

//f.sub uses f.dif and replaces itself on a body
// with its (potentially) 'slimmer' self

    p = f.dif(g[0], '-') //vs is f minus something


    if(p && !M.p(p).hH()){


        f.kill() //then f goes away
        if(  M.p(p).getArea() < 2000 ){return}

        b.pol(p)//the body makes a new f, from the the vs
    }

    if(g.n){g[0].kill()}
    if(g.p){g[0].dyn()} //can optionally delete the 'something'

    return f
}

    b.wV=function(){var b=this,g=G(arguments)
        return b.pD().vs()
    }
    b.rV= function(){var b=this,
        r=M.tR(b.rot()),
        vs,r,x,y
        vs= _.m(b.vs(), function(v){v=V(v)
            x=v.x*M.c(r)- v.y*M.s(r)+b.X()
            y=v.x*M.s(r)+ v.y*M.c(r)+b.Y()
            return V(x,y)})
        return vs
        //this returns [V,V,V...]
    }

    b.pos=function(){return this.tf().position.m()}
    b.ps=function(fn){var b=this,
        arr=[],
        p=b.uni()

        if(F(fn)){p.ps(b,fn); return b}
        p.ps(b, function(v){arr.push(v)})
        return arr
    }
    b.P= b.pD= function(){var b=this, p,
        fs=b.fs()
        if(!_.f(fs)){return new PolyDefault()}
        p = M.p(_.f(fs))
        _.eR(fs,function(f){p=p.U(f)})
        return p//p.reg(b)
        //this returns a gPoly
    }
    b.reg=b.rel= function(p){var b=this
        //my poly operations can only work with POSITIVE vertices
        //but box2d needs fixt vertices specified relative to a body
        //so this allows the body that the operation was based on to take responsibility
        //for converting them back
        //you can pass in the verts, or the gPoly itself!
        var vs
        b2d.mini()

        vs = iP(p)? p.vs() : p

        return _.m(vs, function(v){v=V(v)
            return V(v.x-b.X(),v.y-b.Y())
        })
        //this returns [V,V,V...]
    }


    b.exp=function(){var b=this,xy

        xy=b.pos()
        b.kill()
        return R() ?
            b2d.sep(b2d.pC(20, 7)).XY(xy) :
            w.brick(xy.x,xy.y, 60, 60).rot(45)

    }
    b.uni = function () {
        var b = this, g = G(arguments), n, fs
        fs = b.fs()

        if (g.u) {
            return g.p ? UNI(fs).reg(b) : b2d.u(fs)

        }


        //unite with fixt or first-fixt(of body)

        if (O(g[0]) && !F(g[0])) {

            return b.f().uni(b2d.tF(g[0]))
        }
    }
    b.clone = function (x, y, a) {
        var b = this


        x = N(x, b.X())
        y = N(y, b.Y())
        a = N(a, b.rot())


        b1 = w.D(x, y).type(b.type()).rot(a)

        arr = []

        b.fs(function (f) {
            var h, x, y, r
            arr.push(f)
            _.e(arr, function (f) {

                if (f.iC()) {
                    h = f.H()
                    x = h.m_p.x * 30
                    y = h.m_p.y * 30
                    r = h.m_radius * 30
                    b1.cir(r, x, y, $r())
                }

                else {
                    b1.pol({c: $r(), v: f.rV()})
                }
            })
        })

        return b1
    }
    b.polyClone = function (x, y, a) {
        var b = this, b1
        x = N(x, b.X())
        y = N(y, b.Y())
        a = N(a, b.rot())
        b1 = w.B(x, y).type(b.type()).rot(a)
        b.fs(function (f) {
            b1.pol(_.m(f.rV(), function (v) {
                return [v.x, v.y]
            }))
        })
        return b1
    }
    b.copy = function (x, y) {
        var b = this, w = b.W(), g = G(arguments)
        return w.pol(x, y, b)
    }
    b.dif = function (o) {
        var b = this, g = G(arguments),
            f = b.f(), fs = b.fs(), p

        b2d.mini()

        if (b.n() == 1) {
            return b.f().dif(o, '-')
        }

        p = DIF(b, o).reg(b)

        if (g.n) {
            if (iB(o) || iF(o)) {
                o.kill()
            }
            else {
                b.kill()
            }
        }
        return p

    }
    b.sum = function (b1) {
        var b = this

        return UNI(b, b1).vs(b, '-')
    }
    b.sub = function () {
        var b = this, gg = G(arguments),
            c = b.c()
        b2d.mini()

        gg.e(function (g) {

            if (iF(g)) {
                b.fs(function (f) {
                    f.sub(g)
                })

                if (gg.n) {
                    g.kill()
                }
            }

            else if (iB(g)) {
                g.fs(function (f) {
                    b.sub(f)
                })
                if (gg.n) {
                    g.kill()
                }
            }


        })

        b.C(b.c())

        return b

    }

  w.pDraw=function(p,x,y){var w=this,
    b=w.S(0,0)

    b.pol({
        v: M.p(p).plus(x||0,y||0).vs(),
        c:'w',C:'x',l:10})


    return p}
    w.vDot=function(d){var w=this

        w.dot('g',_.f(d))
        _.eR(d,function(v){w.dot(v)})
        w.dot('r',_.l(d))

        return d}


    w.cxBul = function (k, fn) {
        var w = this
        w.b(function (cx) {
            cx.w('bul', k, fn)
        })

    }
    w.polS = function () {
        var w = this, g = G(arguments), b, o
        if (g.jA) {
            return w.pol.apply(w, g.f)
        }

        if (O(g[0]) && O(g[1])) {

            g.e(function (g) {
                w.pol(g).stat()
            })

            return w
        }

        o = O(g.f) ? g.f :
            N(g.f) ? {x: g.f, y: g[1], p: g[2]}
                : {p: g.f}
        o.x = N(o.x, w.hW)
        o.y = N(o.y, w.hH)
        b = w.D(o.x, o.y)

        if (!g.p) {
            return b.pol(o.p)
        }

        if (o.rg) {
            o.p.ps(o.rg, function (p) {
                b.pol(o)
            })
        }
        else {
            o.p.ps(function (p) {
                b.pol(o)
            })
        }
        return b.f()
    }
    w.ps = function (x, y, p) {
        var w = this, b
        b = w.D(x, y)
        p.ps(b, function (p) {
            b1.pol(p)
        })
    }
    w.polU = function (x, y, p1, p2) {
        var w = this, p
        p = w.pol(x, y, M.p(p1).U(p2))
        return p
    }
    w.polD = function (x, y, p1, p2) {
        var w = this
        return w.pol(x, y, M.p(p1).D(p2))
    }
    w.ter = function () {
        var w = this, ter = []
        _.t(13, function (i) {
            _.t(8, function (j) {
                var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
                ter.push({
                    b: b,
                    vs: b.f().rV(),
                    p: M.p([
                        V(i * 25 + 410, j * 25 + 210),
                        V(i * 25 + 410, j * 25 + 190),
                        V(i * 25 + 430, j * 25 + 190),
                        V(i * 25 + 430, j * 25 + 210)])
                })
            })
        })
        return ter

    }
    w.md1=function(fn){
        alert('w.md1')
        var w=this
        return w.md(function(a,b,c){
            if(self.used){return}
            fn(a,b,c)
            self.used=1
        })}//
