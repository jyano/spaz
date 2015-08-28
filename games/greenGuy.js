b2d.p()

w.gG=function(x,y){var w=this,

    gG, core, shell,z


    z=40


    gG = w.D(N(x,w.hW), N(y,w.hH)).K('gG')

    core = gG.cir({c:'o', C:'z',l:10, r:20}).K('core')

    shell = gG.rec({c:'g', C:'g', l: 5, w:z, h:z, s:1,al:.5})

    core.cl('bul', function(bulF){gG.lV(0).aV(0); z=40;})

    _.ev(2, function(){
        z += 4

        if(shell){ shell.kill() }

        shell = gG.rec({c:'g', C:'g',l:5, w:z, h:z, s:1, al:.5})

        //shell=gG.rec('g',z,z,'-')//.bS( shell.img=w.s.rec('g',z,z) )
        //w.back(sh)

    })


    return gG

}
w.badGuy=function(x,y){var that=this,w=this
    b = w.D(x, y,'d',60).K('badGuy').bS(
        w.s.h(x,y)
    )
    b.draw=function(frame){var b=this
        b.sp().rf(['r','g'],
            [frame[0], frame[1]], 60).dc(60)
    }
    b.h = b.health = 100
    b.cl(function(){b.h--})
    funcId = I(function(){
        b.draw( frameByHealth(b) )
        if(b.h<=0){clearInterval(funcId);b.kill()}
        function frameByHealth(b){
            if(b.h<0){b.h=0}
            if(b.h>100){b.h=100}
            if(b.h<50){ return [ 1-((b.h/50)),1 ] }
            else {return [0, 1-((b.h-50)/50)  ]} }
    }, 300)
    return b
}

GG=function(){W({g: 0}).Y()

    w.gG(100,100);
    w.gG(200,200);
    w.gG(300,300)

}
GREEN=function(){W({w:'@',g:0})
    y= w.y(400,200).K('pop')
    w.gG(400,400)
}
COINWARP=function(){W({g:0, w:0}).Y()
    y.warp()

    score=0
    badScore=0
    // p = w.ship().K('player pop').warp()
    //p= w.p(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()


    gg = w.gG( 300,300 ).warp()

    _.ev(8, function(){
        w.coin().sen(1)
    })
    /*
     w.beg(function(cx){var fixt
     cx.with('coin','player', function(){this.B().kill()
     score++})
     cx.with('coin','greenGuy', function(){
     this.B().kill()
     badScore++
     })
     })
     */
    // w.coll('coin','player', function(){this.B().kill(); score++})
    // w.coll('coin','gg', function(){this.B().kill();badScore++})
    /*
     // w.class('coin')
     //   .with('player', function(c){c.setDestroy();score++})
     // .with('greenGuy', function(c){c.setDestroy();badScore++})
     w.class('coin').with({
     player: function(){score++; return true},
     greenGuy: function(){badScore++; return true}
     })

     */
    _.ev(3,function(){
        w.pen( score + ' / '+ badScore)
    })

}