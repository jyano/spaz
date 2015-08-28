
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
