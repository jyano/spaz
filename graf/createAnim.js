$l('createAnim')

sS = ss = cjs.SpriteSheet.prototype
sSB=  cjs.SpriteSheetBuilder.prototype
sp=s=cjs.Sprite.prototype
mc=cjs.MovieClip.prototype
tw = cjs.Tween.prototype
tl= cjs.Timeline.prototype
$SS =  function(ss){
    ss.images = ss.images || ss.i
    ss.animations = ss.animations || ss.a
    ss.frames = ss.frames|| ss.f
    ss.framerate = ss.framerate|| ss.r
    ss = new cjs.SpriteSheet(ss)
    //fix source (needs a '/')
    //ss.images[ 0 ] = _.ensureSlash( ss.images[0] )
    //set next to false, on all anims
    // _.e(ss.animations, function(an){an.next = false})
    //to do: parse it! (get rid of unnecessary json strings in keys)
    return ss
}
$Sp=   function(ss,x,y){var g=G(arguments), sp
    //call a spritesheet by name
    if(S(ss)){ ss = cjs._sp[ ss ] }
    //it if it is a ss lit, it makes it into a ss
    //make a sprite
    sp = new cjs.Sprite(ss.images||ss.i? $SS(ss) : ss )
    sp.ss = sp.spriteSheet
    sp.XY( N(x,0), N(y,0) )
    return sp
}
sp.p = function(an){var sp=this
    if(U(an)){sp.play()}
    else {sp.gotoAndPlay(an)}
    return sp
}
sp.s= s.P= function(an){var sp=this
    if(U(an)){sp.stop()}
    else {sp.gotoAndStop(an)}
    return sp
}
sp.N=  function(n){ this.advance(n); return this }
sp.as=function(){

    return this.spriteSheet.getAnimations()
}
sp.a= function(){return this.currentAnimation }
sp.f= function(f){var g=G(arguments)
    if(U(f)){return g.p? this.currentFrame : this.currentAnimationFrame }
    if(g.p){ this.currentFrame = f }
    else {this.currentAnimationFrame = f}
    return this
}
sp.r = _.gS(sp,'framerate')
sp.e= function(fn){fn=fn||function(){n = N(window['n'], 0); $l('frame! '+ n++)}
    this.on('animationend', fn)
    return this
}
cjs.sSU = cjs.SpriteSheetUtils
sS.flp=sS.addFlipped=function(a, b, c){
    cjs.sSU.addFlippedFrames(this,  a||true, b||false, c||false )
    return this
}
sSB.Z = function (sc) {
    if (U(sc)) {return this.scale}
    this.scale = sc;
    return this
}
sSB.maxW = function (sc) {
    if (U(sc)) {
        return this.maxWidth
    }
    this.maxWidth = sc;
    return this
}
sSB.A = function (mc) {
    this.addMovieClip(mc)
    return this
}
sSB.complete = function (func) {
    this.on("complete", func)
    return this
}
sSB.async = function (funcNum, num) {
    if (F(funcNum)) {
        this.complete(funcNum)
        this.buildAsync(num)
    }

    else {
        this.buildAsync(funcNum)
    }


    return this
}
cjs.sSB= cjs.builder = cjs.spriteSheetBuilder =   cjs.ssB = cjs.ssb = function (mc) {

    var sSB = new cjs.SpriteSheetBuilder()
    if (mc) { sSB.A(mc) }
    return sSB
}

meSprite=function(){
    return $Sp( $SS ).XY(10).drag()}

cjs.bindSlide = SL = function () {
    var g = G(arguments),
        b = g[0],
        b2 = g[1] || b

    return b.on('mousedown',
        function (e) {
            var bx = b2.x - e.rawX,
                by = b2.y - e.rawY
            b.on('pressmove', function (e) {

                if (g.P) {
                    b2.x = bx + e.rawX
                }

                //if (g.N) {
                b2.y = by + e.rawY
                //}
            })

        })
}




i.RT = function () {var i = this;
    RT(i);
    return i
}

cjs.bindReverseSlide = LS = function (b, b2) {
    var g = G(arguments),
        b = g[0],

        b2 = g[1],
        d = oE('d'),
        pm = oE('pm'),
        b2 = b2 || b

    return b.on(d, function (e) {
        var bx = b2.x + e.rawX, by = b2.y + e.rawY

        b.on(pm, function (e) {

            if (g.P) {
                b2.x = bx - e.rawX
            }
            if (g.N) {
                b2.y = by - e.rawY
            }

        })
    })
}
cjs.bindRotate = RT = function (b, b2) {


    //b = what the control is
    //b2 what it should control (default = itself!)
    //if(g.p){  //b.rgc( '+' )   }

    var g = G(arguments), b = g[0], b2 = g[1] || b

    return b.on('mousedown',

        function (e) {

            var X = e.rawX, Y = e.rawY, r = b2.rotation

            b.on('pressmove', function (e) {


                b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )


            })
        })

}
cjs.bindRotate2 = RTT = function (b, b2) {


    //b = what the control is
    //b2 what it should control (default = itself!)


    var g = G(arguments), b = g[0], b2 = g[1] || b


    if (g.p) {  // b.rgc( '+' )
    }

    return b.on('mousedown',

        function (e) {

            var X = e.rawX, Y = e.rawY, r = b2.rotation

            b.on('pressmove', function (e) {


                b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )


            })
        })

}
cjs.bindSkew = SK = function (b) {
    var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b

    return b.on(d,
        function (e) {
            var X = e.rawX, Y = e.rawY
            b.on(pm, function (e) {


                b2.kXY(
                    (e.rawY - Y) * .5, (e.rawX - X) * .5
                )

            })
        })
}
cjs.reggy = reggy = function (o, s) {

    s = s || o.parent

    s.bm('me', function (b) {

        b.W(40).H(40)

        I(function () {
            b.XY(o.x + o.regX, o.y + o.regY)
        }, 100)

    })


}
cjs.bindSlideAndRotate = KK = function (b, b2) {

    var g = G(arguments), b = g[0],
        b2 = g[1] || b
    cjs.bindSlide(b);
    cjs.bindRotate(b, b2)
    if (g.p) {

        b.rgc('+')
    }

    if (g.N) {
        //    reggy(b,b2)
    }
}
cjs.bindRotateThenSkew = RK = function (b, b2, m) {
    var g = G(arguments), b = g[0], b2 = g[1],
        d = oE('d'),
        pm = oE('pm'),
        b2 = b2 || b,
        m = g[2] || 'RT'


    //if(g.p){var s=St('y',1000)
    //    _t(b||5,function(i){s.a().bm(
    //        function(bm){bm.xy(i*50);TR(bm)})});return s}

    if (m == 'RT') {
        RT(b, b2);
        m = 'SK'
    }

    else if (m == 'SK') {
        SK(b, b2);
        m = 'RT'
    }

    return b.on(oE('pu'),
        function (e) {
            Do(b).O();
            RK(b, b2, m)
        })
}
cjs.bindScale = SC = function (b, b2) {
    var g = G(arguments), b = g[0], b2 = g[1],
        d =oO('e','d'),
        pm = oO('e','pm'), b2 = b2 || b,

        cp = function (n) {
            return n < .2 ? .2 : n > 2 ? 2 : n
        }

    return b.on(d,

        function (e) {
            var X = e.rawX, Y = e.rawY,
                sx = b2.scaleX,
                sy = b2.scaleY

            b.on(pm,

                function (e) {
                    if (g.n) {
                        b2.sXY(cp(sx + (
                            (e.rawX - X) / 200)),
                            cp(sy - ((e.rawX - X) / 200))
                        )

                    }

                    else if (g.p) {
                        cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                        cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
                    }

                    else {
                        b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                    }
                })
        }
    )
}
cjs.bindTransform = TR = function TR(b, b2, m) {

    var g = G(arguments),
        b = g[0],
        b2 = g[1],

        b2 = b2 || b, m = g[2] || 'SL'

    if (m == 'SL') {
        cjs.bindSlide(b, b2);
        m = 'SC'
    }

    else if (m == 'SC') {
        cjs.bindScale(b, b2);
        m = 'RT'
    }

    else if (m == 'RT') {
        cjs.bindRotate(b, b2);
        m = 'SL'
    }

    return b.on('pressup', function (e) {

        b.removeAllEventListeners();

        TR(b, b2, m)

    })
}

tween()
movie()
function tween(){
    p = tw
    cjs.ww =ww=function(o){var w={}
        if(N(o.x)){w.x=o.x}
        if(N(o.y)){w.y=o.y}
        if(N(o.xy)){w.x=w.y=o.xy}
        if(N(o.sx)){w.scaleX=o.sx}
        if(N(o.sy)){w.scaleY=o.sy}
        if(N(o.sxy)){w.scaleX=w.scaleY=o.sxy}
        if(N(o.s)){w.scaleX=w.scaleY=o.s}
        if(N(o.kx)){w.skewX=o.kx}
        if(N(o.ky)){w.skewY=o.ky}
        if(N(o.kxy)){w.skewX=w.skewY=o.kxy}
        if(N(o.k)){w.skewX=w.skewY=o.k}
        if(N(o.r)){w.rotation=o.r}
        if(N(o.a)){w.alpha=o.a}
        if(N(o.rx)){w.regX=o.rx}
        if(N(o.ry)){w.regY=o.ry}
        if(N(o.rxy)){w.regX=w.regY=o.rxy}
        if(N(o.gy)){w.regY=o.ry}
        if(N(o.gxy)){w.regX=w.regY=o.rxy}
        if(N(o.g)){w.regX=w.regY=o.g}
        if(o.v==0){w.visible=false}
        if(o.v==1){w.visible=true}
        return w
    }
    $Tw=  cjs.Tw = function(a, b){ // EaselTween=tw=
        var displayObject = a
        tweenGet = function(a){//twg=
            //this returns tween-get on a display obj
            //you can optionally pass an array (ob, op1, op2..)
            return A(a) ? cjs.Tween.get(a[0],
                tweenPops.apply(this, _.r(a)))
                : cjs.Tween.get(a)}
        tweenPops=function(){//twp =
            var args=G(arguments),

                o={}

            args.e( function(arg){
                if( arg=='l' ){ o.loop = true }
                if( arg=='t' ){ o.useTicks = true }
                if( arg=='i' ){ o.ignoreGlobalPause = true }
                if( arg=='o' ){ o.override = true }
                if( arg=='p' ){ o.paused = true }
                if( N(arg) ){ o.position = arg}
                if( F(arg) ){ o.onChange = arg }
            })
            return o}
        if( U(b) ){ return tweenGet( displayObject ) }
        //first arg passed to twg, and then rest of args are 'to' pams
        var  g = G(arguments)
        displayObject = tweenGet(g[0])
        _.e(g.r, function(b){
            //can pass obj, time ,ease
            if( A(b) ){
                if( b[2] ){
                    displayObject = displayObject.to( ww(b[0]), b[1], $Ea(b[2])  )
                }
                //can pass obj, time
                else if(b[1]){
                    //can set pops to another obj??
                    if(O(b[1])){
                        displayObject = displayObject.set( ww(b[0]),  b[1]   )}
                    else{ displayObject=displayObject.to( ww(b[0]), b[1]) }
                }
                else{ displayObject = displayObject.tick(a[0]) }
            }
//can pass a function and it will run when it's its turn
            else if( F(b)  ){ displayObject = displayObject.call(b, []) }
            //make it wait, optionally pass in true! ?
            else if(   N( b )){
                if(b<0){
                    // TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
                    displayObject=displayObject.wait(b * -1, true) }
                else{displayObject= displayObject.wait(b) }
            }
            //for playing/stopping?
            else if( O(b) && b.length == 1 ){
                if( b.p ){ displayObject = displayObject.play( b.p )}
                else if( b.s ){   displayObject = displayObject.stop( b.s )}}
            else { displayObject = displayObject.to( ww(b) )  }
        })
        return Tw( displayObject )
        function Tw(tween){ var g=G(arguments),  w=tween
            //w.target
            //use when returned
            // w.play  = w.P=w.p=function(){ w.setPaused(false);return w}
            // w.stop  = w.S=w.s=function(){ w.setPaused(true);return w}
            //use in queue

            return w}
    }
    tw.t= tw.then=function(tw, a, b){
        return this.to(  cjs.ww(tw),a,b  )
    }
    //w.psv=function(){ return w.passive}
    //Read-only. Indicates the tween's current position is within a passive wait.
    tw.pos = function(a,b){

        //get or set position of tween (in time in ms)// see w.dr
        if( U(a) ){return w.position}
        if(b=='n'){b= cjs.Tween.NONE}//0
        if(b=='l'){b= cjs.Tween.LOOP}//1 default
        if(b=='r'){b= cjs.Tween.REVERSE}//2
        tw.setPosition( a, acm(b) )
        //default is loop, can use r|n
        return w}
    //total time duration
    tw.dur =tw.dr= function(a){
        //get time of tween in ms
        //duration:read only

        if(U(a)){
            return this.duration}
    }

    tw.tkXXX=function(a){
        this.tick(a);
        return this
    }
    tw.ignore = function(a){
        if(U(a)){return this.ignoreGlobalPause}
        this.ignoreGlobalPause=a?true:false;
        return this
    }
    tw.lp= tw.setLoop =function(a){
        if(U(a)){return this.loop}
        this.loop= a?true:false
        return this
    }
    _TW = tweens={}
    _TW.rpunch=function(arm){//arm=arm|| c1.g('arm')

        return $Tw(arm,
            [{r:100,sx:-1 },800],
            [{r:-20,sx:-2,sy:2},400,'eO'],
            [{r:0,sy:1,sx: -.8},200])
    }
    _TW.lpunch=function(lf){return $Tw(lf,

        [{r:10,s:1},800],

        [{r:-140,s:2.5}, 600, 'eO'],

        [{s:.8, r:0}, 1600])

    }
    _TW.shakeY=function(a){

        // EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )

        $Tw(
            [a,'l'],
            [ {y:-10}, 500 ],
            [ {y:10}, 500 ],
            [ {y:-10}, 500 ]
        )

        return a
    }
    _TW.shakeX=function(a){return $Tw(

        a,
        [
            {r:180, y:200, sxy:.5},  500
        ]

    ).then(
        [a,'l'],
        [{x:-20},50],
        [{x:20},50],
        [{x:-20},50]
    )}
    _TW.rott=function(a){
        return $Tw(
            a,

            [    {r:180, y:200, sxy:.5},   500    ]
        )
    }
    _TW.prod1=function(a){return $Tw(

        a,
        {x:-100,y:200},
        [{x:10,s:.5,y:-200},500],
        [{x:100,s:1.2,y:200,a:.5},10000,'eO'],
        {a:0})}
    _TW.prod2=function(a){

        return $Tw(
            a,
            {x:100,y:200},
            [{x:10,s:.5,y:200},500],
            [{x:-100,s:1.2,y:200,a:.5},10000,'eO'],
            {a:0}
        )
    }
    $Ea= cjs.Ea =  function(e){return cjs.Ease[oO('E', e)]} //Ea =
    tw.$=   function(){var isPaused = this._paused
        if(isPaused){this.setPaused(false)}
        else{this.setPaused(true)}
        return this
    }

    i.tw=     function () {var i = this, g = G(arguments), tw
        g.unshift(i)
        tw = $Tw.apply(null, g)
        return tw }
    i.twL= function () {
        var i = this, g = G(arguments), tw

        g.unshift([i, 'l'])

        tw = $Tw.apply(null, g)

        return tw
    }
    i.spin = function () {
        this.twL([{r: 360}, 4000]);
        return this
    }


}
function movie(){

    cjs.Tl = function (args) {
        var tl = new cjs.Timeline()
        if (args) {
            tl.A(args)
        }
        return tl
    }
    cjs.Mc = function (a, b, c, d) {
        var mc = new cjs.MovieClip(a, b, c, d)
        return mc
    }
    tl.xTw = tl.rm = function (tw) {
        this.removeTween(tw);
        return this
    }
    tl.lb = tl.labels = tl.cL = tl.currentLabel = function (a) {
        var g = G(arguments)
        if (U(a)) {
            return g.n ? this.getCurrentLabel() : this.getLabels()
        }
        if (O(a)) {
            this.setLabels(a);
            return this
        }
        if (N(a) || S(a)) {
            return resolve(a)
        }
        return this
    }
    tl.A = tl.add = function (tw) {
        var tl = this
        if (A(tw)) {
            _.e(tw, function (tw) {
                tl.A(tw)
            });
            return tl
        }
        this.addTween.apply(this, arguments)
        return this
    }
    mc.p = mc.play = function (a, b) {
        if (this.setPaused) {
            this.setPaused(false)
        } else {
            this.play()
        }
        if (D(b)) {
            if (this.gotoAndPlay) {
                this.gotoAndPlay(a)
            }
            if (this.setPosition) {
                this.setPosition(a, b)
            }
            return this
        }
    }
    mc.s = mc.stop = function (a, b) {
        if (D(b)) {
            if (this.gotoAndStop) {
                this.gotoAndStop(a)
            }
            if (this.setPosition) {
                this.setPosition(a, b)
            }
            return this
        }
    }
    mc.lb = function () {
        var g = G(arguments)
        return g.p ? this.getCurrentLabel() : this.getLabels()
    }
    mc.sP = function (a) {
        if (U(a)) {
            return this.startPosition
        }
        ;
        this.startPosition = a;
        return this
    }
    mc.__ = mc.mo = function (a) {
        if (U(a)) {
            return this.mode
        }
        this.mode = a;
        return this
    }
    mc.lp = function (a) { //loop
        if (U(a)) {
            return this.loop
        }
        this.loop = a
        return this
    }
    mc.aR = mc.auto = function (auto) {
        if (U(auto)) {
            return this.autoReset
        }
        this.autoReset = auto
        return this
    }
    mc.aE = function (en) {
        if (U(en)) {
            return this.actionsEnabled
        }
        this.actionsEnabled = en
        return this
    }
    mc.tl = function () {
        this.timeline.addTween.apply(this.timeline, arguments)
        return this
    }

}
tw = cjs.Tween.prototype
cjs.Tw=cjs.Tween
cjs.Tw.g=cjs.Tw.get
cjs.ww =ww=function(o){var w={}
    if(N(o.x)){w.x=o.x}
    if(N(o.y)){w.y=o.y}
    if(N(o.xy)){w.x=w.y=o.xy}
    if(N(o.sx)){w.scaleX=o.sx}
    if(N(o.sy)){w.scaleY=o.sy}
    if(N(o.sxy)){w.scaleX=w.scaleY=o.sxy}
    if(N(o.s)){w.scaleX=w.scaleY=o.s}
    if(N(o.kx)){w.skewX=o.kx}
    if(N(o.ky)){w.skewY=o.ky}
    if(N(o.kxy)){w.skewX=w.skewY=o.kxy}
    if(N(o.k)){w.skewX=w.skewY=o.k}
    if(N(o.r)){w.rotation=o.r}
    if(N(o.a)){w.alpha=o.a}
    if(N(o.rx)){w.regX=o.rx}
    if(N(o.ry)){w.regY=o.ry}
    if(N(o.rxy)){w.regX=w.regY=o.rxy}
    if(N(o.gy)){w.regY=o.ry}
    if(N(o.gxy)){w.regX=w.regY=o.rxy}
    if(N(o.g)){w.regX=w.regY=o.g}
    if(o.v==0){w.visible=false}
    if(o.v==1){w.visible=true}
    return w}
$Tw= function(){var g=G(arguments), i = tweenGet(g.f)//; if( U(g.s) ){alert('$Tw'); return i }//

    _.e(g.r, function(b){


        if( A(b) ){
            i = b[2]?  ease(i,b):
                !b[1]?  i.tick(g.f[0]):
                    O(b[1])?  i.set( ww(b[0]), b[1]):
                        i.to( ww(b[0]), b[1])
        }
        else if( F(b)  ){ i = i.call(b, []) }
        else if(N(b)){i=  wait(i,b)}
        else if( O(b) && b.length == 1 ){i = frame(i,b)}
        else { i = i.to( ww(b) )  }


        function ease(i,b){return  i.to( ww(b[0]), b[1], cjs.ease(b[2]) )}
        function frame(i, frame){return frame.p?  i.play( frame.p ): frame.s?  i.stop( frame.s ):i}
        function wait(i, time){ return time < 0? i.wait(time * -1, true):i.wait(time) }




    })


    return Tw( i )
    $TwWithComments= function(a,b){var g=G(arguments), i = g.f, op= g.s

        if( U(g.s) ){
            return tweenGet(g.f )
        }

        //first arg passed to twg, and then rest of args are 'to' pams

        i = tweenGet(g.f)

        _.e(g.r, function(b){
            //can pass obj, time ,ease
            if( A(b) ){

                if( b[2] ){

                    i = i.to( ww(b[0]), b[1],cjs.ease(b[2]))

                } //can pass obj, time


                else if(b[1]){

                    //can set pops to another obj??
                    if( O(b[1]) ){

                        i = i.set( ww(b[0]),  b[1]   )
                    }
                    else{
                        i = i.to( ww(b[0]), b[1]) }
                }



                else{ i = i.tick(a[0]) } }
            //can pass a function and it will run when it's its turn

            else if( F(b)  ){ i = i.call(b, []) } //make it wait, optionally pass in true! ?

            else if(   N( b )){

                if(b<0){
                    // TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
                    i=i.wait(b * -1, true) }

                else{i= i.wait(b) }
            } //for playing/stopping?

            else if( O(b) && b.length == 1 ){

                if( b.p ){ i = i.play( b.p )}

                else if( b.s ){   i = i.stop( b.s )}}
            else { i = i.to( ww(b) )  }
        })

        return Tw( i )
    }
    function tweenGet(){
        //this returns tween-get on a display obj
        // you can optionally pass an array (i, op1, op2..)
        var g=G(arguments),o= g.A? {i: g.f[0], op: g.r}: {i: g.f}
        return cjs.Tw.g(o.i, o.op? _ops(o.op): null )
        function _ops(){var g=G(arguments), o={}, ops= g.A? g.f: g
            _.e(ops, function(op){

                if( op=='l' ){ o.loop = true }
                if( op=='t' ){ o.useTicks = true }
                if( op=='i' ){ o.ignoreGlobalPause = true }
                if( op=='o' ){ o.override = true }
                if( op=='p' ){ o.paused = true }
                if( N(op) ){ o.position = op}
                if( F(op) ){ o.onChange = op }

            })
            return o
        }




    }
}
function Tw(tween){
    var g=G(arguments),
        w=tween //w.target //use when returned // w.play  = w.P=w.p=function(){ w.setPaused(false);return w} // w.stop  = w.S=w.s=function(){ w.setPaused(true);return w} //use in queue
    w.then=function(tweens, a, b){ return this.to( ww(tweens),a,b ) }
    w.pos = w.ps=function(a,b){


        //get or set position of tween (in time in ms)// see w.dr


        if( U(a) ){return w.position}

        if(b=='n'){b=cjs.Tw.NONE}//0

        if(b=='l'){b=cjs.Tw.LOOP}//1 default

        if(b=='r'){b=cjs.Tw.REVERSE}//2

        w.setPosition( a, acm(b) )



        //default is loop, can use r|n
        return w} //total time duration
    w.dur =w.dr= function(a){
        //get time of tween in ms
        //duration:read only
        if(U(a)){return w.duration}}
    w.tk=function(a){w.tick(a); return w }
    w.ignore = w.iGP=function(a){
        if(U(a)){return w.ignoreGlobalPause}
        w.ignoreGlobalPause=a;return w}
    w.setLoop = w.lp=function(a){if(U(a)){return w.loop}
        w.loop=a;  return w} //w.psv=function(){ return w.passive} //Read-only. Indicates the tween's current position is within a passive wait.
    w.Plugin =function(a,b){

        var g=G(arguments),a=g[0],b=g[1]

        if(U(a)){ return g.p? w.pluginData.data: w.pluginData}

        if(U(b)){ w.pluginData=a;return w}
        w.pluginData[a]=b
        return w }
    return w
}
proto()
function proto(){

    tw.toggle = function () {

        var isPaused = this._paused

        if (isPaused) {
            this.setPaused(false)
        }

        else {
            this.setPaused(true)
        }

        return this

    }

    i=cjs.DisplayObject.prototype
    i.tw =  function () {
        var g = G(arguments), tw
        g.unshift(this)
        return _tw = tw = cjs.Tw.apply(null, g)
    }

    i.twL = function () {
        var g = G(arguments), tw,i=this

        g.unshift([this, 'l'])

        return tw = _tw = $Tw.apply(i, g)
    }


    i.sp = i.spin = function () {
        this.twL([{r: 360}, 4000]);
        return this
    }


}
cjs.Ea=cjs.Ease
cjs.ease = function(e){return cjs.Ease[oO('E', e)]} //Ea =
tran()
spr()
movie()
function movie() {

    cjs.tl=function(args){var tl = new cjs.Timeline()
        if(A(args)){

            tl.add(args)
        }
        return tl}
    cjs.mc=function(a,b,c,d){
        var mc = new cjs.MovieClip(a,b,c,d)
        return mc}

    mcPt()
    tlPt()
    function tlPt() {
        tl = cjs.Timeline.prototype
        tl.remove = tl.rm = function (a) {
            this.removeTween(a);
            return this
        }
        tl.currentLabel = tl.cL = function () {
            return this.getCurrentLabel()
        }
        tl.labels = tl.lb = function (a) {
            var t = this;
            if (U(a)) {
                return this.getLabels()
            }
            if (O(a)) {
                this.setLabels(a);
                return this
            }
            if (N(a) || S(a)) {
                return resolve(a)
            }
            return this
        }
        tl.add = function (tw) {
            var that = this

            this.addTween.apply(this, arguments)

            return this
        }
    }

    function mcPt() {
        mc = cjs.MovieClip.prototype
        mc.play = mc.p = function (a, b) {
            if (this.setPaused) {
                this.setPaused(false)
            } else {
                this.play()
            }
            if (D(b)) {

                if (this.gotoAndPlay) {
                    this.gotoAndPlay(a)
                }

                if (this.setPosition) {
                    this.setPosition(a, b)
                }

                return this
            }
        }
        mc.stop = mc.s = function (a, b) {


            if (D(b)) {

                if (this.gotoAndStop) {
                    this.gotoAndStop(a)
                }

                if (this.setPosition) {
                    this.setPosition(a, b)
                }

                return this
            }
        }
        mc.lb = function () {
            return this.getLabels()
        }
        mc.cL = function () {
            return this.getCurrentLabel()
        }
        mc.start = mc.startPos = mc.sP = function (a) {
            if (U(a)) {
                return this.startPosition
            }
            ;
            this.startPosition = a;
            return this
        }
        mc.mo = function (a) {
            if (U(a)) {
                return this.mode
            }
            this.mode = a;
            return tthis
        }
        mc.lp = function (a) { //loop
            if (U(a)) {
                return this.loop
            }
            this.loop = a
            return this
        }
        mc.auto = mc.aR = function (auto) {
            if (U(auto)) {
                return this.autoReset
            }
            this.autoReset = auto
            return this
        }
        mc.actions = mc.aE = function (enabled) {

            if (U(enabled)) {
                return this.actionsEnabled
            }

            this.actionsEnabled = enabled

            return this
        }
        mc.tl = function () {
            this.timeline.addTween.apply(this.timeline, arguments)

            return this
        }
    }
}
function tran(){


    cjs.scaleX = cX = function (a, b) {
        if (U(b)) {
            return a.scaleX
        }
        a.scaleX = b
        return a
    }
    cjs.scaleY = cY = function (a, b) {
        if (U(b)) {
            return a.scaleY
        }
        a.scaleY = b
        return a
    }
    cjs.scaleXY = cXY = function (a, x, y) {
        y = N(y) ? y : x
        cX(a, x)
        cY(a, y)
        return a
    }
    cjs.scaleXY = sxy = function xy(o, x, y) {
        o.scaleX = x;
        o.scaleY = y || x;
        return o
    }
    cjs.skewX = kX = function (a, b) {
        if (U(b)) {
            return a.skewX
        }
        a.skewX = b
        return a
    }
    cjs.skewY = kY = function (a, b) {
        if (U(b)) {
            return a.skewY
        }
        a.skewY = b
        return a
    }
    cjs.skewXY = kXY = function (a, x, y) {
        y = N(y) ? y : x
        kX(a, x)
        kY(a, y)
        return a
    }
    cjs.rY = cjs.regY = gY = function (a, b) {
        if (U(b)) {
            return a.regY
        }
        a.regY = b
        return a
    }
    cjs.rX = cjs.regX = gX = function (a, b) {
        if (U(b)) {
            return a.regX
        }
        a.regX = b
        return a
    }
    cjs.rxy = cjs.rXY = cjs.regXY = gXY = function (a, x, y) {
        y = N(y) ? y : x
        cjs.regX(a, x)
        cjs.regY(a, y)
        return a
    }
//rX =function(a){return a.rawX}
//rY =function(a){return a.rawY}
//bj=function(a){if(O(a)){   return O(a.ob)?a.ob:a   }}//return a??
    cjs.SL = cjs.bindSlide = SL = function (b, b2) {

        var g = G(arguments),

            b = g[0], b2 = g[1] || b

        return b.on('mousedown',

            function (e) {
                var bx = b2.x - e.rawX, by = b2.y - e.rawY

                b.on('pressmove', function (e) {

                    if (!g.p) {
                        b2.x = bx + e.rawX
                    }
                    if (!g.n) {
                        b2.y = by + e.rawY
                    }
                })
            }
        )

    }









    cjs.LS = cjs.bindReverseSlide = LS = function (b, b2) {
        var g = G(arguments),
            b = g[0],

            b2 = g[1],
            d = oE('d'),
            pm = oE('pm'),
            b2 = b2 || b

        return b.on(d, function (e) {
            var bx = b2.x + e.rawX, by = b2.y + e.rawY

            b.on(pm, function (e) {

                if (g.P) {
                    b2.x = bx - e.rawX
                }
                if (g.N) {
                    b2.y = by - e.rawY
                }

            })
        })
    }
    cjs.RT = cjs.bindRotate = RT = function (b, b2) {
        //b = what the control is
        //b2 what it should control (default = itself!)
        //if(g.p){  //b.rgc( '+' )   }

        var g = G(arguments), b = g[0], b2 = g[1] || b

        return b.on('mousedown', function (e) {
            var X = e.rawX, Y = e.rawY, r = b2.rotation
            b.on('pressmove', function (e) {
                b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
            })
        })
    }
    cjs.RT2 = cjs.bindRotate2 = RTT = function (b, b2) {


        //b = what the control is
        //b2 what it should control (default = itself!)


        var g = G(arguments), b = g[0], b2 = g[1] || b


        if (g.p) {  // b.rgc( '+' )
        }

        return b.on('mousedown',

            function (e) {

                var X = e.rawX, Y = e.rawY, r = b2.rotation

                b.on('pressmove', function (e) {


                    b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )


                })
            })

    }
    cjs.SC = cjs.bindScale = SC = function (b, b2) {
        var g = G(arguments), b = g[0], b2 = g[1],
            d = oE('d'), pm = oE('pm'), b2 = b2 || b,
            cp = function (n) {
                return n < .2 ? .2 : n > 2 ? 2 : n
            }

        return b.on(d,

            function (e) {
                var X = e.rawX, Y = e.rawY,
                    sx = b2.scaleX,
                    sy = b2.scaleY

                b.on(pm,

                    function (e) {
                        if (g.n) {
                            b2.sXY(cp(sx + (
                                (e.rawX - X) / 200)),
                                cp(sy - ((e.rawX - X) / 200))
                            )

                        }

                        else if (g.p) {
                            cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                            cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
                        }

                        else {
                            b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                        }
                    })
            }
        )
    }
    cjs.SK = cjs.bindSkew = SK = function (b) {
        var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b

        return b.on(d,
            function (e) {
                var X = e.rawX, Y = e.rawY
                b.on(pm, function (e) {


                    b2.kXY(
                        (e.rawY - Y) * .5, (e.rawX - X) * .5
                    )

                })
            })
    }
    cjs.TR = cjs.bindTransform = TR = function TR(b, b2, m) {
        var g = G(arguments),
            b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
        if (m == 'SL') {
            cjs.SL(b, b2);
            m = 'SC'
        }
        else if (m == 'SC') {
            cjs.SC(b, b2);
            m = 'RT'
        }
        else if (m == 'RT') {
            cjs.RT(b, b2);
            m = 'SL'
        }
        return b.on('pressup', function (e) {
            b.removeAllEventListeners();
            TR(b, b2, m)
        })
    }


    cjs.reggy = reggy = function (o, s) {

        s = s || o.parent

        s.bm('me', function (b) {

            b.W(40).H(40)

            I(function () {
                b.XY(o.x + o.regX, o.y + o.regY)
            }, 100)

        })


    }
    cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {

        var g = G(arguments), b = g[0], b2 = g[1] || b
        cjs.SL(b);
        cjs.RT(b, b2)
        if (g.p) {

            b.rgc('+')
        }

        if (g.N) {
            //    reggy(b,b2)
        }
    }
    cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
        var g = G(arguments), b = g[0], b2 = g[1],
            d = oE('d'),
            pm = oE('pm'),
            b2 = b2 || b,
            m = g[2] || 'RT'


        //if(g.p){var s=St('y',1000)
        //    _t(b||5,function(i){s.a().bm(
        //        function(bm){bm.xy(i*50);TR(bm)})});return s}

        if (m == 'RT') {
            RT(b, b2);
            m = 'SK'
        }

        else if (m == 'SK') {
            SK(b, b2);
            m = 'RT'
        }

        return b.on(oE('pu'),
            function (e) {
                Do(b).O();
                RK(b, b2, m)
            })
    }
    testImgRegCenter = function () {
        mockStage()
        s.bm('me', function (bm) {
            b1 = bm
            bm.spin().drag()
        })

        s.bm('me', function (bm) {
            b2 = bm
            bm.sXY(0.5, 0.3).spin().drag()
        })

        s.A(c = cjs.circle(4).XY(200))

    }


    cjs.rtSh = cjs.rotateShake = function (bm) {
        $Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
    }
    cjs.scSh = cjs.scaleShake = function (bm) {
        $Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])

    }

}
function spr(){
    cjs.spriteSheet   =function(a){return new cjs.SpriteSheet(a)}

    cjs.sprite=$sprite=function(spriteSheet){
//EaselSprite= J$=

        if(spriteSheet.images){

            spriteSheet=cjs.parseZoe(spriteSheet)
            spriteSheet=new cjs.SpriteSheet(spriteSheet)
        }


        return new cjs.Sprite( spriteSheet )

    }
    cjs.sprite100 = function(a){

        var spr = cjs.sprite(a)
        spr.rXY(50)
            .opacity(.8)
        return spr}
    cjs.parseZoe=function(sprObj){


        //fix source (needs a '/')
        sprObj.images[ 0 ] = S.eL( sprObj.images[0] )

        //set next to false, on all anims
        //_.e(sprObj.animations, function(anim){anim.next = false})


        //to do: parse it! (get rid of unnecessary json strings in keys)


        return sprObj}

    cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function(mc){

        ssb = new createjs.SpriteSheetBuilder()
        if(mc){ssb.A(mc)}

        return ssb}


    protos()
    function protos(){

        sprShPt()
        builderPt()

        s = cjs.Sprite.prototype
        s.p = function (what) {
            if (U(what)) {
                this.play()
            }
            else {
                this.gotoAndPlay(what)
            }
            return this
        }
        s.s = s.P = function (what) {
            if (U(what)) {
                this.stop()
            }
            else {
                this.gotoAndStop(what)
            }
            ;
            return this
        }
        s.skip = s.adv = function (num) {
            this.advance(num);
            return this
        }
        s.cA = s.cAn = s.currAnim = function () {
            return this.currentAnimation
        }
        s.cAF = currAnimFrame = function () {
            return this.currentAnimationFrame
        }
        s.cF = s.cFr = s.currFrame = function () {
            return this.currentFrame
        }
        s.fR = s.rate = function (rate) {
            if (U(rate)) {
                return this.framerate
            }
            this.framerate = rate
            return this
        }
        s.end = function (func) {
            func = func || function () {
                n = N(window['n']) ? n : 0
                $l('frame! ' + n++)
            }
            this.on('animationend', func)
            return this
        }

        function sprShPt() {
            ss = cjs.SpriteSheet.prototype
            ss.addFlipped = function (a, b, c) {
                cjs.SpriteSheetUtils.addFlippedFrames(this, a || true, b || false, c || false)
                return this
            }
        }
        function builderPt(){
            b = cjs.SpriteSheetBuilder.prototype
            b.Z = function (sc) {

                if (U(sc)) {
                    return this.scale
                }
                this.scale = sc;
                return this
            }
            b.maxW = function (sc) {
                if (U(sc)) {
                    return this.maxWidth
                }
                this.maxWidth = sc;
                return this
            }
            b.A = function (mc) {
                this.addMovieClip(mc)
                return this
            }
            b.complete = function (func) {
                this.on("complete", func)
                return this
            }
            b.async = function (funcNum, num) {
                if (F(funcNum)) {
                    this.complete(funcNum)
                    this.buildAsync(num)
                }

                else {
                    this.buildAsync(funcNum)
                }


                return this
            }
        }
    }




}

i.grow = function(){

    $Tw(this, [{sxy:10},10000]); return this
}



i.RT = function(){RT(this);return this}
i.TR = function(){TR(this);return this}
i.dg=i.drag=i.SL = function(){
    SL(this);
    return this
}
function alpha(){
    i.flash = function () {
        var i = this
        i.al(0)
        $.in(.3, function () {
            i.al(1)
        })
        return i
    }
    i.rZero = function (a) {
        var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
        if (g.p) {
            i.rX(0, '+').rY(0, '+')
        }//i.X(a, i.regX()-a, '+')
        else {
            i.rXY(0, 0)
        }
        return i
    }//
    tw.Plugin =function(a,b){
        var g=G(arguments),a=g[0],b=g[1]
        if(U(a)){ return g.p? w.pluginData.data: w.pluginData}
        if(U(b)){ w.pluginData=a;return w}
        w.pluginData[a]=b
        return w
    }
}
