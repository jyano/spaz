
$.St = function () {alert('$.St')
    z()
    s = $St().t()
    s.bm('me', function (bb) {
        b = bb.drag()
    })
    return s
}



ct.abs = function (x, y) {
    var s = this
    alert('ct.abs')
    ct.can.abs(x, y)
    return s
}
function dispObwillNeed(){
    i.toFront = function () {
        return this.ix(this.sib().length - 1)
    }
    i.within = i.inStage = function () {
        var i = this, g = G(arguments), s = i.S(), wthnS

        wthnS = i.x > 0 && i.y > 0

        && i.x < (s.W() - 100) && i.y < ( s.H() - 100 )

        if (g.n && !wthnS) {
            s.rm()
        }

        return wthnS
    }
    i.belowStg = function () {
        return this.y > this.S().H()
    }

    i.tickX = function (fn) {
        var i = this
        cjs.t(function () {i.X(fn())})
        return i
    }
    i.tickY = function (fn) {
        var i = this
        cjs.t(function () {
            i.Y(fn())
        })
        return i
    }
    i.RT = function () {var i = this;
        RT(i);
        return i
    }

}
function disObAlpha(){

    i.shootBullet = function () {alert('i.shootbullet')
        shooter = this
        s = stage = shooter.stg()

        bullet = cjs.circ(8, 'w').XY(shooter).a2(s)

        bullet.startMoving(
            (shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5
        )

    }
    i.hitByBullet = i.isPointInMyRectBounds = function (bullet) {alert('i.hitByBullet')
        var args = G(arguments), bullet = args[0],

            didHit = M.pointInRectangle(
                bullet.cX(), bullet.cY(),
                {
                    x: this.cX(),
                    y: this.cY(),
                    w: this.W(),
                    h: this.H()
                }
            )
        if (args.n) {
            if (didHit) {
                this.rm()
            }

        }
        return didHit

    }

    i.killAllIAmHitting = function () {
        var i = this,
            stage = i.St()
        _.e(stage.children, function (obj) {
            if (i != obj) {
                obj.hitByBullet(i, '-')
            }
        })

    }
    i.makeMeAKiller = function () {
        var i = this
        cjs.tick(function () {
            i.killAllIAmHitting()
        })
        return this
    }
    i.bounce = function (n) {
        var i = this,
            stage = i.getStage(),
            h = stage.H(),
            w = stage.W()
        n = N(n, 0)
        T.t(
            function () {
                var x = i.x, y = i.y
                if (x > w - i.W() - n || x < (n )) {
                    i.vX('-')
                }
                if (y > h - i.H() - n || y < (n )) {
                    i.vY('-')
                }
            })
        return i
    }
    i.startMoving = function (x, y) {
        var i = this, vx, vy
        if (x) {
            i.vX(x)
        }
        if (y) {
            i.vY(y)
        }
        vx = i.vx || 0
        vy = i.vy || 0
        T.t(function () {
            i.X(vx, '+').Y(vy, '+')
        })
        return i
    }
    i.toR = i.moveRight = function (num) {
        num = num || 20
        this.X(num, '+')
        return this
    }
    i.toL = i.moveLeft = function (num) {
        num = num || 20
        this.X(num, '-')
        return this
    }
    i.toU = i.moveDown = function (num) {
        num = num || 20
        this.Y(num, '-')
        return this
    }
    i.toD = i.moveDown = function (num) {
        num = num || 20

        this.Y(num, '+')
        return this
    }
    i.keyControls = function (num) {
        var args = G(arguments), i = this
        if (args.P) {
            $.kD('left', function () {
                i.toL(num)
            })
            $.kD('right', function () {
                i.toR(num)
            })
        }
        if (args.N) {
            $.kD('up', function () {
                i.toU(num)
            })
            $.kD('down', function () {
                i.toD(num)
            })
        }
    }

}
function stgAlpha() {
    $.dragStage = function (x, y) {
        s = $St('v', '+')
        return $.dragFrame($(s.canvas))
    }


}

function alpha(){
    function easPhys(){
        i.move = function () {
            return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
        }
        i.accelerate = function () {
            return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
        }
        i.jerk = function () {
            return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
        }
        i.vX = function (a) {
            var g = G(arguments);
            a = g[0]

            if (g.p) {
                this.vx = this.vx + a;
                return this
            }

            else if (g.n) {
                if (N(a)) {
                    this.vx = this.vx - a
                }

                else {
                    this.vx = this.vx * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vx
            }
            this.vx = a;
            return this
        }
        i.vY = function (a) {
            var g = G(arguments);
            a = g[0]
            if (g.p) {
                this.vy = this.vy + a;
                return this
            }
            else if (g.n) {
                if (N(a)) {
                    this.vy = this.vy - a
                }
                else {
                    this.vy = this.vy * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vy
            }

            this.vy = a
            return this
        }
        i.vXY = function (x, y) {
            return this.vX(x).vY(y)
        }
        i.aX = function (a) {
            var g = G(arguments);
            a = g[0]

            if (g.p) {
                this.vx = this.vx + a;
                return this
            }

            else if (g.n) {
                if (N(a)) {
                    this.vx = this.vx - a
                }

                else {
                    this.vx = this.vx * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vx
            }
            this.vx = a;
            return this
        }
        i.aY = function (a) {
            var g = G(arguments);
            a = g[0]
            if (g.p) {
                this.vy = this.vy + a;
                return this
            }
            else if (g.n) {
                if (N(a)) {
                    this.vy = this.vy - a
                }
                else {
                    this.vy = this.vy * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vy
            }

            this.vy = a
            return this
        }
        i.jX = function (a) {
            var g = G(arguments);
            a = g[0]

            if (g.p) {
                this.vx = this.vx + a;
                return this
            }

            else if (g.n) {
                if (N(a)) {
                    this.vx = this.vx - a
                }

                else {
                    this.vx = this.vx * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vx
            }
            this.vx = a;
            return this
        }
        i.jY = function (a) {
            var g = G(arguments);
            a = g[0]
            if (g.p) {
                this.vy = this.vy + a;
                return this
            }
            else if (g.n) {
                if (N(a)) {
                    this.vy = this.vy - a
                }
                else {
                    this.vy = this.vy * -1
                }
                return this
            }
            else if (U(g[0])) {
                return this.vy
            }

            this.vy = a
            return this
        }
        i.brake = function () {
            this.vx = this.vy = 0
        }
    }

}

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