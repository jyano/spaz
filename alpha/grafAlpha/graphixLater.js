

function alpha(){
    h.C2= function (C, l) {
        alert('h.C2')
        var h=this,gx=h.graphics,g=G(arguments)
        o=O(g[0]) ? g[0]
            :
        {C:[0], l:g[1]}
        gx.s(o.C?  oO('c',o.C): null)
        if(N(o.l)){h.l(o.l)}
        return h
    }
    h.copy=h.same=function(){
        alert('h.copy = h.same')
        return $h(this)
    }//******** here is the problem..
// gotta let h.poly also defer to rect (and circ?)
    h.sC=function(){
        alert('h.sC')
        var h=this,
            gx= h.graphics,
            g=G(arguments)
        gx.sC.apply(gx, g)
        return h
    }}
