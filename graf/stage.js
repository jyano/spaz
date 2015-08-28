
$PT()


s.cannonBall=function(x,y){var s=this,h
    h=s.h(x,y)
    h.rf('a', 'z',18 ).dc(18).ef()
    return h}
s.basketBall=function(x,y){var s=this
    return this.h(x,y).rf('w', 'o',18 ).dc(18).ef()
}
s.beachBall=function(x,y){var s=this
    return s.h(x,y)
        .rf('b','r',18).dc(18).ef()
}
s.snowBall=function(x,y){var s=this
    return s.h(x,y).rf('a','w',18).dc(18).ef()
}

St=function(){z()
    s = cjs.stg(1200,600).A()
    h = $h(0,0).a2(s)
    SL(h)
}
$St=function(){var st, g=G(arguments), cv
    //get by canvas ID
    cv = g.A? g.f[0]:
        //if you pass it a canvas OR a $canvas object
        O(g.f)? $(g.f)[0] :
            //create a new canvas
            $.c(g.f||'p',g.s||1200,g.t||600,g[3],g[4])[0]
    st = new cjs.Stage( cv )
    st.cv=   st.c=st.can= $(st.canvas)
    st.cv0=  st.cv[0]
    st.xc= st.cv0.getContext('2d')
    if(g.p){st.t()}
    return st.A()
    //.t()
}
