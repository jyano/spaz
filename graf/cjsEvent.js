$PT =  function(){


    c = HTMLCanvasElement.prototype
    x=  ctx=  xx=CanvasRenderingContext2D.prototype
    xGr = CanvasGradient.prototype

    var c=cjs
    eD=cjs.EventDispatcher.prototype
    gx=cjs.Graphics.prototype
    h =  cjs.Shape.prototype
    i=    cjs.DisplayObject.prototype
    mc=cjs.MovieClip.prototype
    q = cjs.LoadQueue.prototype
    st= s=  cjs.Stage.prototype
    sS = ss = cjs.SpriteSheet.prototype
    sSB=      cjs.SpriteSheetBuilder.prototype
    sp=s=cjs.Sprite.prototype
    tl= cjs.Timeline.prototype
    t=cjs.Text.prototype
    ct =cjs.Container.prototype
    tw = cjs.Tween.prototype


}


$PT()

df={}
$t= cjs.time=function(){
    return new Date().getTime()}

$sw= cjs.sw= cjs.stopWatch=function(){var t=$t()
    return function self(){var g=G(arguments),
        d=$t()-t

        if(g.d){t=$t()}

        if(g.n){var f=cjs.cap(
                (self('/')-500)/20,
                0,
                100
            )

            return f
        }

        return d}

}




$.scroll =function(a){
    return $(window).scroll(a||function(){$('body').C('*')})}
$.click = m$ = function(f){ return $(document).on('click', _v(f) )}
$.dblclick = m$$ = function(f){ return $(document).on('dblclick', _v(f) )}

$.fn.toR = $.fn.moveRight=function(num){
    num=num||20
    if(this.left()=='auto'){this.left(0)}
    this.left( parseInt(this.left()) + num)
    return this}
$.fn.toL = $.fn.moveLeft=function(num){
    num=num||20
    if(this.left()=='auto'){this.left(0)}
    this.left( parseInt(this.left()) - num)
    return this}
$.fn.toU =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  - num  )
    return this}
$.fn.toD =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  + num  )
    return this}

KEYOB={
    up:38,u:38,
    down:40, d:40,
    left:37, l:37,
    right:39, r:39,
    space:32,s:32,
    enter:13, e:13
}

$.k=    $.key = $.keyDown = $.kD = kD = function self(key, fn){

    if(O(key)){_.e(key,function(fn,k){
           if(s$(k).isUpper()){$.kU(k.toLowerCase(),fn)}
           else {$.k(k,fn)}})
        return}

    if(KEYOB[key]){key=KEYOB[key]}


    $('body').on('keydown', function(e){

        if (e.which == key) {fn(e,cjs.Keys)}
    })

}
$.keyUp = $.kU = kU = function(key, funk){

    keyObj={
        up:38,u:38,

        down:40, d:40,
        left:37, l:37,
        right:39, r:39,
        space:32,s:32,
        enter:13, e:13}



    if(keyObj[key]){key = keyObj[key]}

    $('body').on('keyup', function(e){

        if (e.which == key) { funk(e,cjs.Keys) }
    })
}



$.fn.keyControls = function(num){
    var args=G(arguments), that=this

    this.P('a')
    if(args.P){
        $.kD('left', function(){that.toL(num)})
        $.kD('right', function(){that.toR(num)})}
    if(args.N){
        $.kD('up', function(){that.toU(num)})
        $.kD('down',   function(){that.toD(num)} )}
}// o.keyControls(num) should deprecate use of key(o)

$.fn.hideOnKeyDown = function(a){
    var that = this
    $('body').keydown(function(ev){e=ev
        $l(e.which)
        if(e.which == 40){ that.hide()  }
        if(e.which == 38){ that.show()  }
    })
}


testMove=function(){z()
    d = $.div('b',100,100).A().drag()
    f = function(num){d.toR(num)}
     setInterval(f,100)}
testMoveAndWarp=function(){z()
    d = $.div('b',100,100).A().drag()
    f = function(num){d.toR(num)}
    setInterval(f,100)}
testInputKeys=function(){
    z()

  input =  $.input().A()

    $.span('span ').C('y').A().id('spn')



    input.on('keypress', function(e){

       $('#spn').text(

               $('#spn').text() + e.which
        )
    })
        .on('keyup',function(e){
        if(e.which==13){
            $l('enter')
            $('body').C('*')
        }})
        .on('keydown', function(e){
            var key = e.which, //why these nums?
                result = (key>48  &&  key<57)||  ( key>96 && key<105) ||  (key == 8)
       $l('result: '+result)
    })


}
testInputUpOrDown  = function(){

    $.input().A()

    onTextInputKeyup(function(e){

      var dir =  (parseInt(e.which) == 38)? 'up'
               : (parseInt(e.which) == 40)? 'down'
          : 'neither'

        $l(dir)
    })

    function onTextInputKeyup(func){return $('input[type=text]').on('keyup', func)}
}
//cool!
testUpperVsLowerLetters=function(){z()

    i = $.input().A()

   i.on('keydown keypress',
        function(e){
            $l(e.type+':'+ String.fromCharCode(e.which) +'('+ e.which +')')})
}
testHideOnKeyDown=function(){z()

    c = $.canvas('r', 500).A()

    c.hideOnKeyDown()


}

responsiveBottomPanel=function(){z()


    $.div('red').P('f').X(0).css({

        bottom: 0,
        width: '50%',  height: '50%',
        'min-width' :110,
        'max-width' :318,

        opacity: 4

    }).A().A(
        $.img('me')
    )



    // call and then play with browser size


}

slowFadeAway=function self(opacity){   z()

    //makes a yellow square and black dot??


    c = $.canvas('y',500,500).A()

    c.circle(10,10,10)

    opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001

    c.opacity(opacity).fillStyle('red').fillRect()

    if(opacity < 1){
        setTimeout(function(){
            self(opacity)}, 30)
    }
}
drawHalf=function(c,i){c.dI(i, -i.width/2, -i.h/2)}


//parallax!!!
function CanvasLayer(bg){
    var can = $.canvas('y',500,500).P('a').width('100%').H(256)
    if(bg){can.background(bg)}
    return can}
function DivLayer(bg){
    var div = $.div('y',500,500).P('a').width('100%').H(256)
    if(bg){div.background(bg)}
    return div}
function transparent(img, num){
    if(!N(num)){ return 'transparent url('+img+'.png)'  }
    return 'transparent url('+ img +'.png)' + num +'% 0px'
}
PARALLAX=function(){z()

    CanvasLayer(
        transparent('me', 10)).A()
    CanvasLayer(
        transparent('guy', 300)).A()


}
//awesome!!!!!
PARALLAXBYMOUSE=function(){z()



        back=DivLayer(transparent('me') ).A()
        front=DivLayer(transparent('guy')).A()

       speed=0
          xp=0

    $('body').mousemove(function(e){

        speed= e.pageX - ( W()/2 )

        speed /= ( W()/2 )

        $l(speed)
    })

   $('body').mouseout(function(e){speed=0})


   setInterval(function(){
       xp += speed

       back.backgroundPosition( xp+'px 0px')

    front.backgroundPosition( (xp*3)+'px 0px')

   },30)}


drag = drg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){

        var offset = $(this).offset(),

            deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top

        $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
            .on( 'mouseup' , function(){  $(this).off() })

    })

    touchDrg(element)
    return qq(element)

}

cjs.Keys = function(o){

    if(O(o)){

        if(F(o.u)){
            cjs.tick(function(){if(cjs.Keys.u){ o.u(cjs.Keys.u) } })}

        if(F(o.d)){
            cjs.tick(function(){
                if(cjs.Keys.d){ o.d(cjs.Keys.d) } })}

        if(F(o.l)){
            cjs.tick(function(){
                if(cjs.Keys.l){
                    o.l(cjs.Keys.l)
                } })}

        if(F(o.r)){
            cjs.tick(function(){if(cjs.Keys.r){
                o.r(cjs.Keys.r)
            } })}

    }
}
cjs.watchKeys=function(){
    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false

    $.kD('l',function(){
        if($.test){$l('left pressed')}
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'})



    $.kU('l',function(){if($.test){$l('left lifted')}
        cjs.Keys.l = cjs.Keys.left = false
    })
    $.kD('r',function(){if($.test){$l('right pressed')}
        cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'})
    $.kU('r',function(){if($.test){$l('right lifted')}
        cjs.Keys.r = cjs.Keys.right = false
    })
    $.kD('u',function(){if($.test){$l('up pressed')}
        cjs.Keys.u = cjs.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        cjs.Keys.u = cjs.Keys.up = false
    })
    $.kD('d',function(){if($.test){$l('down pressed')}
        cjs.Keys.d = cjs.Keys.down = true
    })


    $.kU('d',function(){
        if($.test){$l('down lifted')}
        cjs.Keys.d = cjs.Keys.down = false
    })}



$.joystick  =function(){
    $('#left').on('mousedown mouseover touchenter', function(e){cjs.Keys.left = true ;e.preventDefault()})
    $('#left').on('mouseup mouseout touchleave', function(){cjs.Keys.left = false})
    $('#jump').on('mousedown mouseover touchenter', function(){  cjs.Keys.up = true   })
    $('#jump').on('mouseup mouseout touchleave', function(){  cjs.Keys.up = false  })
    $('#right').on('mousedown mouseover touchenter', function(){ cjs.Keys.right = true})
    $('#right').on('mouseup mouseout touchleave', function(){cjs.Keys.right = false })}

TESTWATCHKEYS=function(){z()
    $.test=true
    cjs.watchKeys()}




TESTKEYBOARD=function(){z()

    cjs.watchKeys()

    b2.mW({debug:true})

    w.footListener()


    //  p = w.addMe().controlMe('standard')

    b=w.ba()

    b.bindSprite('guy')

    b.controlMe('basic')

}


MES=function(){W([],{w:0})// what took me so long to make this?
    w.C('y')

    $.ev(1, function(){w.me(R(1000,100), R(-100) )})

    w.me(600,300,14).stat()
    w.l('z', 600,0,600,600)

}
JOY=function(){W()//.P()
    $.joystick  =function(){
        $('#left').on('mousedown mouseover touchenter', function(e){K.left = true ;e.preventDefault()})
        $('#left').on('mouseup mouseout touchleave', function(){K.left = false})
        $('#jump').on('mousedown mouseover touchenter', function(){  K.up = true   })
        $('#jump').on('mouseup mouseout touchleave', function(){  K.up = false  })
        $('#right').on('mousedown mouseover touchenter', function(){ K.right = true})
        $('#right').on('mouseup mouseout touchleave', function(){K.right = false })}
    w.brick(200,400, 80,20)
    w.brick(300,200,80,20)

    $.joystick()

    p= w.p(100,100,'power')
    p.r(.8)

}
