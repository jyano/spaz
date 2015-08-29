oOo = function oOo(a, b) {
    if (_.isUndefined(b)) {
        return _I(lC(V(oO(a))))
    }
    if (oOo(a)[lC(b)]) {
        return b
    }
}
Oo = _.defaults(function o(a, b) {
    if (D(b)) {
        return o[a] && ( o[a][b] || oOo(a, b))
    }
}, ooo)
oO = _.defaults(function oO(a, b, c) {
    return _.isUndefined(a) ? _.keys(f)
        : '*' == b ? $r(a)
        : D(c) ? oO(oO(c, a), b)
        : _.isUndefined(b) ? D(function (x, y) {
        return oO(a, x, y)
    }, oO[a] || {})
        : (oO[a] && oO[a][b]) ?
        oO[a][b]
        : b
}, ooo)
C = function (a) {

    if (_.isObject(a = E(a) || a)) {
        return a.canvas ? a.canvas :

            s$(a.toString()).contains('Canvas')

                ? Q(a)[0] : 0
    }
}
E = function E(a, b, c) {
    if (S(b)) {
        return s$(a).endsWith(b)
    }
    if (F(b)) {
        return _.every(a, b, c)
    }
    if (O(a)) {

        a = O(a.e) ? a.e
            : O(a.c) ? a.c
            : a

        a = $(a)[0]

        if (_.isElement(a)) {
            return a
        }

    }
}
$.extension = _x = function (a, b) {
    //if(_.isString(a)){
    return s$(a).contains('.') ? a : s$(a).ensureRight(b || '.png').s
    //}
}
z = function (fn) {
    var g = G(arguments)
    if (g.F_) {
        return T.t(fn)
    }
    $('body').empty()
}
//$w=window; $$w=$(window)
R=function(n,n2){var num
    n=N(n)?n:1
    n2=N(n2)?n2:0
    return M.round((M.random()*n)+n2)
}
$.tap=function(func){this('body').on('keydown mousedown', func); return this}
_z=function z(a,b,c){return U(b)?_.size(a)
    :N(b)?_z(a)==b
    :_z(a)==_z(b)}
$.update=function(curr, update, g){var res
    if(g.p){res = curr + update}
    else if(g.n){res = curr - update}
    else if(g.m){res = curr * update}
    else if(g.d){res = curr / update}
    else res = update
    return res
}
$.fn.a2=function(el){el.A(this); return this}
$.rulers = function () {
    $.d('b', 100, 100).al(.3).dg()
    $.d('r', 100, 300).al(.3).dg()
}
$.toColor = function(n1,n2,n3,n4){return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")" : $r('c', n1)}



M.lD=M.dist = M.lineDistance= function( p1, p2 ){
    var xs = 0,ys = 0;

    p1=V(p1)
    p2=V(p2)
    xs = p2.x - p1.x;
    xs = xs * xs;

    ys = p2.y - p1.y;
    ys = ys * ys;

    return M.sqrt( xs + ys );
}

M.lC= M.lineCenter=function(x1,y1,x2,y2) {

    if (A(x1)) {

        if(N(x1[3])){return center(  x1[0],x1[2],x1[2],x1[3]    )}
        return center(x1[0],x1[1],y1[0],y1[1])}

    if(O(x1)){return center(x1.x, x1.y, y1.x,y1.y)}

    return center(x1,y1,x2,y2)

    function center(x1,y1,x2,y2){var x,y

        if(x1 > x2){upperX = x1; lowerX = x2}
        else {upperX= x2; lowerX=x1}

        if(y1 > y2){upperY = y1; lowerY = y2}
        else {upperY= y2; lowerY=y1}

        x= lowerX + (upperX-lowerX)/2
        y = lowerY + (upperY-lowerY)/2

        return V(x,y)
    }
}
M.pointInCircle=function(x,y,circle){
    var withinX, withinY
    withinX = x < circle.x + circle.radius && x > circle.x -circle.radius
    withinY = y< circle.y+circle.radius  &&y >circle.y-circle.radius
    return withinX && withinY
}//Y.pointInCircle = pntInCir =
M.pointInRect=M.pointInRectangle=function(x,y,rect){var withinX, withinY

    var halfwidth = (rect.width || rect.w)/2
    var halfheight = (rect.height || rect.h)/2

    //assumes center

    withinX = x < rect.x + halfwidth && x > rect.x -  halfwidth

    withinY = y < rect.y +  halfheight  &&y > rect.y -  halfheight

    return withinX && withinY

}
M.circlesOverlap=function(c1, c2){

    var sum, dist, rads

    sum = sqr( c1.x - c2.x  ) +   sqr( c1.y - c2.y  )

    dist = sqrt(sum)

    rads = c1.r + c2.r

    return rads < dist
}
M.warp = function(lowBound,highBound,cushion){//wrp=
    cushion=cushion||0

    return function(num){
        return num<lowBound?highBound-cushion
            :num>highBound?lowBound+cushion
            :num
    }
}