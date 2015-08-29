
    works()
    function works(){
        MEET=function(){W([  1200, 600, 1200, 600 ],{g:10})


            //  w.l(600,0,700,500)//hud


            //  w.l(1000,200, 100,900,'-') //red

            //  w.l(50,50,500,350,'/')

            //  w.l(200, 200, 500,500,'+')
            //  _.t(10, function(i){w.D(100+i*40,100).cir({r:35,lf:{c1:'*',c2:'*'}}).d(.1);w.D(100+i*40,100).cir({r:20,lf:1}).d(.1)})


            /*
             _.t(10, function(i){
             w.D(100+i*140,160).cir({r:50,

             rf:{
             c1:$r(),
             c2:$r(),
             }
             }).den(.1)})


             w.D(800, 300).cir({r:120,
             C:'y',   l:2,  bf:'me', ls:['y','x']//?
             }).den(.1)


             */
            //i thought i may want t for timer/ticker.. but time has no x and y !
            //move the stage by manipulating the trackee x,y
            //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?



            //  y = w.ship(50,50 ).C('d').mid().track()


            y2 = w.y(100, 300)//.C('x').rot(180)




            //w.tRightLeft();//w.showOff()

            _.evx(5,
                function(){
                    if( w.t == y2){w.C('w'); w.t=y }
                    else {w.C('z'); w.t= y2}})



            /* w.S(800,300,'r',200,800)
             .cl('bul',function(bu){
             this.sub( bu.B().exp(),'-')})


             w.S(200,300,'r',200,800).cl('bul',function(bu){bu=bu.B()
             var v=bu.pos()
             bu.kill()
             w.pol(v.x,v.y,
             M.p([[0,50],[-50,0],[0,-50],[50,0]])
             ).stat()})
             */
            //y.track()


            t=w.S(500,300,'g',200,800)

            t.cl(//'bul',
                function(bu){var v

                    bu=bu.B()

                    v=bu.XY()// v=bu.kill()

                    p=M.p([[0,100],[-100,0],[0,-100],[100,0]]  ).ger(v)
                    w.rad(v.x, v.y, 15,function(f){f.sub(p)})//t.fs(function(f){f.sub(p)})
                    t.fs(function(f){f.C($r())})


                })





            /*
             //pol
             w.D(200,300).pol({
             v:[[0,100],[0,-100],[200,-150],[200,150]],
             c:'y',C:'w',l:5,
             bm:1})
             w.D(800,300).pol({
             v:[
             [[5,100],[0,-100],[200,-150],[200,150]],
             [[-50,50],[-50,-100],[450,-50],[450,50]]
             ],
             c:'b',C:'X',
             bm:1})



             b=w.D(100,300)
             pf = b.pol({s:1, C:'y',
             v:[[-200,-100],[0,-200],[100, -100]] })
             pfs =  b.pol({s:1, C: 'o',
             v: [  [-100, 0],  [0, -200],  [100, 20],    [0, -150] ]})


             cf = b.cir({k:'cir', r:100, x:200, y:-100, d:.2, b:.8, f:100, C:'x'})
             rf = b.rec({x:100, y:100,w:10,  h:100,   C:'x'})
             */


            /*
             //turtle
             turtle =[
             ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
             ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
             ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
             ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
             ['x', 10, 55,-12],
             ['u', 30,40, 75,-12]]
             w.D(400, 280,turtle, '-')  //this changes the data object for future uses !!!
             w.D(600, 280, [
             ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
             ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
             ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
             ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
             ['x', 10, 55,-12, '-'],
             ['u', 30,40, 75,-12 ,'-']])
             */
        }
    }
    SEB = function () {
        W({g: 1})//w.show(function(){return b.num()})
        b = w.D(800, 300, 'r', 200, 800).stat().K('terr')
        y = w.y().lD(3).X(1100)
        p = w.p(200, 400).K('jason');
        //setTimeout(function () {p.sprite.sXY(.5)}, 1000)
        can = true
        w.b(function (cx) {
            var fixt, j, bull, terr, bX, bY, br
            if (fixt = cx.w('bul', 'terr')) {
                bull = fixt[0].B()
                terr = fixt[1].B()
                bX = bull.X()
                bY = bull.Y()
                bull.kill()
                if (can) {
                    can = false
                    // b.minusPolyCirc(bX, bY, 100, 7)
                    poly = M.p(_.m(b2d.pC(100, 7), function (v) {
                        return [v.x + b.X(), v.y + b.Y()]
                    }))
                    // verts = b.sub(poly)
                    br = w.pC(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(
                    b.sub(br, '-') // br.kill()
                    //  b.color('r')
                    can = true
                }
            }
            else if (fixt = cx.w('jason', 'bul')) {
                $l('bullet hit jason!!!!');
                j = fixt[0].body();
                //j.sprite.tween([{sxy:20, r:100}, 1000])
            }
        })
        f = function () {
            v = h.verts()
            v.unshift('b')
            v.unshift(200)
            v.unshift(200)
            w.B.apply(w, v)
        }
        killIfSmallx = function (f) {
            var area = f.area();
            if (area < 20) {
                $l('too small: ' + area);
                f.kill()
            }
        }

    }
    TERREASEL = function () {
        z()
        s = stage = $St(1600, 600).A()
        h = s.h()
        h.f('b').dc(200, 200, 10)
        h2 = s.h().X(700)
        h2.f('b').dc(0, 0, 10)
        tile = function (i, j) {
            return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
        }   // lower left //upper left//upper right//lower right
        draw = function () {
            terr = []
            _.t(13, function (i) {
                _.t(8, function (j) {
                    terr.push(tile(i * 50, j * 50))
                })
            })
            h.drawPolygons(terr, 'b', 'r')
        }
        draw()
        t = M.p(terr[101])
        doExplosion = function (e) {
            v = V(e.stageX, e.stageY)
            exP = circ(v, 100)
            h.drawPolygon(exP, 'z')
            c = Math.p(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
            // explosion polygon. This should be optimized in some way, checking only for terrain polygons
            // which are actually affected by the explosion.
            // Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
            // difference is calculated.
            iX = c.intersection(t)
            h2.drawPolygon(iX.verts())
            for (var i = terr.length - 1; i >= 0; i--) {
                totalArea = 0
            }
        } // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
        circ = function (v, rad, prec) {
            prec = N(prec) ? prec : 20
            arr = [];
            ang = 2 * Math.PI / prec
            _.times(prec, function (i) {
                pX = v.x + rad * Math.cos(ang * i)
                pY = v.y + rad * Math.sin(ang * i)
                arr.push(V(pX, pY))
            })
            return arr
        } // listeners: basically we destroy the terrain with a mouse click or a mouse drag
        // stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
        // stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
        stage.on('click', doExplosion)
        vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
        h.drawPolygon(vv, 'z')
        vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
        h.drawPolygon(vvv, 'z')
    }
    TERR = function () {
        W()

        explosion = function (x, y) {
            var c, b

            c = w.pC(x, y, 30, 5)

            b = b2d.sep(circ(V(0, 0), 30, 5)).XY(x, y)
            return {c: c, b: b}

        }

        sep = b2d.sep()
        terr = w.ter()
        w.dot(420, 200);
        w.dot(410, 210)
        t = terr[103]
        /*



         s = b2d.sep(t.b.f().vs()).stat()//.XY(100,100)
         exp = explosion(740, 395)
         M.p(exp.cir)

         dif = t.poly.D(exp.cir)

         t.b.f().kill()


         bb = b2d.sep(t.b, dif.vs()).stat().XY(0, 0)


         // setTimeout( function(){ t.bod.X(20) }, 2000)

         */
    }
    TER = function () {
        W().C('z')

        terr = w.ter()
        w.dot(420, 200);
        w.dot(410, 210)
        t = terr[103]

        fn = function (f) {
            f.B().kill()
        }
        o = {x1: 550, y1: 250, x2: 600, y2: 500, fn: fn}
        // w.Q(o)

        w.rad(550, 250, 35, fn)


    }
