setC=function(a,b,c){var g=G(arguments)
    b=$r('c',b);
    c=$r('c',c)
    if(g.N){return ss(a, {C:b,c:c})}
    return ss(a, {c:b,C:c})}
ssC=function(a,b,c){var s=ss(a)  // ob->{c,C}   OR   set C[,c]
    if(!b){return {c:s('c'), C:s('C')}}
    s({C:b});if(c){s({c:c})}
    return a}


qrgb=function(){

    if(S(a)){var s;q.s()
        if(U(b)){s=a}
        else{s="rgba("+[a,b,c,d].join(",") +")"}
        q.pop('f', s);
        q.q(0,0, q.w(), q.h());
        q.r()}}





rgb=function f(r,g,b){var v,n=256,
    z3=function(a){return _z(a)==3},
    p16=function(a){return pI(a,16)}
    if(S(r)){if(z3(a=rP(a))){a=sq(a)} v=p16(a);
        return f(mF((v/(n*n))%n), mF((v/n)%n), mF(v%n))}
    return po(r,g,b)}




hex=function f(p,y,z){
    var n=256,s16=function(a){return tS(a,16)}
    if(S(p)){while(_z(p)<6){p="0"+p};
        return "#"+p}
    return A(p)? $a(f,p):
        O(p)? f(s16(p.x*(n*n)+p.y*n+p.z)):
            N(y)? f(xyz(p,y,z)) : false} ;




hsv=function(h){//hslToHsv // determine the brightness in the range [0,100]
    var s=h.s,  l=h.l, n=200, v=(l+s*((l<50)?l*2:n-l*2)/n),  // store the HSV components
        H={'h':h.h,'s':n*(1-l/v),'v':v} // correct a division-by-zero error
    return (M(H.s))? H.s=0: H}




(function() { var trimLeft = /^[\s,#]+/,  trimRight = /\s+$/,  tinyCounter = 0,  math = Math,
        mathRound = math.round,    mathMin = math.min,  mathMax = math.max,  mathRandom = math.random;
    tinycolor =function (color, opts) {

        color = (color) ? color : '';
        opts = opts || { };

        // If input is already a tinycolor, return itself
        if (typeof color == "object" && color.hasOwnProperty("_tc_id")) {
            return color;
        }

        var rgb = inputToRGB(color);
        var r = rgb.r,
            g = rgb.g,
            b = rgb.b,
            a = rgb.a,
            roundA = mathRound(100*a) / 100,
            format = opts.format || rgb.format;

        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (r < 1) { r = mathRound(r); }
        if (g < 1) { g = mathRound(g); }
        if (b < 1) { b = mathRound(b); }

        return {
            ok: rgb.ok,
            format: format,
            _tc_id: tinyCounter++,
            alpha: a,
            getAlpha: function() {
                return a;
            },
            setAlpha: function(value) {
                a = boundAlpha(value);
                roundA = mathRound(100*a) / 100;
            },
            toHsv: function() {
                var hsv = rgbToHsv(r, g, b);
                return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: a };
            },
            toHsvString: function() {
                var hsv = rgbToHsv(r, g, b);
                var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
                return (a == 1) ?
                    "hsv(" + h + ", " + s + "%, " + v + "%)" :
                    "hsva(" + h + ", " + s + "%, " + v + "%, "+ roundA + ")";
            },
            toHsl: function() {
                var hsl = rgbToHsl(r, g, b);
                return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: a };
            },
            toHslString: function() {
                var hsl = rgbToHsl(r, g, b);
                var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
                return (a == 1) ?
                    "hsl(" + h + ", " + s + "%, " + l + "%)" :
                    "hsla(" + h + ", " + s + "%, " + l + "%, "+ roundA + ")";
            },
            toHex: function(allow3Char) {
                return rgbToHex(r, g, b, allow3Char);
            },
            toHexString: function(allow3Char) {
                return '#' + this.toHex(allow3Char);
            },
            toHex8: function() {
                return rgbaToHex(r, g, b, a);
            },
            toHex8String: function() {
                return '#' + this.toHex8();
            },
            toRgb: function() {
                return { r: mathRound(r), g: mathRound(g), b: mathRound(b), a: a };
            },
            toRgbString: function() {
                return (a == 1) ?
                    "rgb(" + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ")" :
                    "rgba(" + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ", " + roundA + ")";
            },
            toPercentageRgb: function() {
                return { r: mathRound(bound01(r, 255) * 100) + "%", g: mathRound(bound01(g, 255) * 100) + "%", b: mathRound(bound01(b, 255) * 100) + "%", a: a };
            },
            toPercentageRgbString: function() {
                return (a == 1) ?
                    "rgb(" + mathRound(bound01(r, 255) * 100) + "%, " + mathRound(bound01(g, 255) * 100) + "%, " + mathRound(bound01(b, 255) * 100) + "%)" :
                    "rgba(" + mathRound(bound01(r, 255) * 100) + "%, " + mathRound(bound01(g, 255) * 100) + "%, " + mathRound(bound01(b, 255) * 100) + "%, " + roundA + ")";
            },
            toName: function() {
                if (a === 0) {
                    return "transparent";
                }

                return hexNames[rgbToHex(r, g, b, true)] || false;
            },
            toFilter: function(secondColor) {
                var hex8String = '#' + rgbaToHex(r, g, b, a);
                var secondHex8String = hex8String;
                var gradientType = opts && opts.gradientType ? "GradientType = 1, " : "";

                if (secondColor) {
                    var s = tinycolor(secondColor);
                    secondHex8String = s.toHex8String();
                }

                return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
            },
            toString: function(format) {
                var formatSet = !!format;
                format = format || this.format;

                var formattedString = false;
                var hasAlphaAndFormatNotSet = !formatSet && a < 1 && a > 0;
                var formatWithAlpha = hasAlphaAndFormatNotSet && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

                if (format === "rgb") {
                    formattedString = this.toRgbString();
                }
                if (format === "prgb") {
                    formattedString = this.toPercentageRgbString();
                }
                if (format === "hex" || format === "hex6") {
                    formattedString = this.toHexString();
                }
                if (format === "hex3") {
                    formattedString = this.toHexString(true);
                }
                if (format === "hex8") {
                    formattedString = this.toHex8String();
                }
                if (format === "name") {
                    formattedString = this.toName();
                }
                if (format === "hsl") {
                    formattedString = this.toHslString();
                }
                if (format === "hsv") {
                    formattedString = this.toHsvString();
                }

                if (formatWithAlpha) {
                    return this.toRgbString();
                }

                return formattedString || this.toHexString();
            }
        };
    }
// If input is an object, force 1 into "1.0" to handle ratios properly// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
        if (typeof color == "object") {
            var newColor = {};
            for (var i in color) {
                if (color.hasOwnProperty(i)) {
                    if (i === "a") {
                        newColor[i] = color[i];
                    }
                    else {
                        newColor[i] = convertToPercentage(color[i]);
                    }
                }
            }
            color = newColor;
        }

        return tinycolor(color, opts);
    };
// Given a string or object, convert that input to RGB// Possible string inputs: "red"// "#f00" or "f00"// "#ff0000" or "ff0000"// "#ff000000" or "ff000000"
// "rgb 255 0 0" or "rgb (255, 0, 0)"// "rgb 1.0 0 0" or "rgb (1, 0, 0)"
// "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"// "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"// "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
// "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"// "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 inputToRGB=function(color) {

        var rgb = { r: 0, g: 0, b: 0 };
        var a = 1;
        var ok = false;
        var format = false;

        if (typeof color == "string") {
            color = stringInputToObject(color);
        }

        if (typeof color == "object") {
            if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
                rgb = rgbToRgb(color.r, color.g, color.b);
                ok = true;
                format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
            }
            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
                color.s = convertToPercentage(color.s);
                color.v = convertToPercentage(color.v);
                rgb = hsvToRgb(color.h, color.s, color.v);
                ok = true;
                format = "hsv";
            }
            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
                color.s = convertToPercentage(color.s);
                color.l = convertToPercentage(color.l);
                rgb = hslToRgb(color.h, color.s, color.l);
                ok = true;
                format = "hsl";
            }

            if (color.hasOwnProperty("a")) {
                a = color.a;
            }
        }

        a = boundAlpha(a);

        return {
            ok: ok,
            format: color.format || format,
            r: mathMin(255, mathMax(rgb.r, 0)),
            g: mathMin(255, mathMax(rgb.g, 0)),
            b: mathMin(255, mathMax(rgb.b, 0)),
            a: a
        };
    }
// Conversion Functions // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:// `rgbToRgb`// Handle bounds / percentage checking to conform to CSS color spec// *Assumes:* r, g, b in [0, 255] or [0, 1]// *Returns:* { r, g, b } in [0, 255]
    rgbToRgb=function (r, g, b){return {r: bound01(r, 255) * 255,g: bound01(g, 255) * 255,b: bound01(b, 255) * 255}}// `rgbToHsl`// Converts an RGB color value to HSL.// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]// *Returns:* { h, s, l } in [0,1]
    rgbToHsl=function(r, g, b) {r = bound01(r, 255);g = bound01(g, 255);b = bound01(b, 255);
        var max = mathMax(r, g, b), min = mathMin(r, g, b);var h, s, l = (max + min) / 2; if(max == min) {h = s = 0} // achromatic
        else {var d = max - min;s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {case r: h = (g - b) / d + (g < b ? 6 : 0); break;case g: h = (b - r) / d + 2; break; case b: h = (r - g) / d + 4; break}
            h /= 6}  return { h: h, s: s, l: l }}
// `hslToRgb`// Converts an HSL color value to RGB.// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]// *Returns:* { r, g, b } in the set [0, 255]
hslToRgb=function(h,s,l){var r,g,b;h=bound01(h,360); s=bound01(s, 100); l=bound01(l,100);
        function hue2rgb(p,q,t) { if(t < 0) t += 1; if(t > 1) t -= 1; if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;  if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;   return p}
        if(s === 0) {r = g = b = l} // achromatic
        else {var q = l < 0.5 ? l * (1 + s) : l + s - l * s;  var p = 2 * l - q;r = hue2rgb(p, q, h + 1/3);  g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1/3)}
        return { r: r * 255, g: g * 255, b: b * 255 }}
// `rgbToHsv` // Converts an RGB color value to HSV// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]// *Returns:* { h, s, v } in [0,1]
    function rgbToHsv(r, g, b) {   r = bound01(r, 255);  g = bound01(g, 255);  b = bound01(b, 255);
        var max = mathMax(r, g, b), min = mathMin(r, g, b);  var h, s, v = max;
        var d = max - min;  s = max === 0 ? 0 : d / max;
        if(max == min) {h = 0} // achromatic
        else {switch(max) { case r: h = (g - b) / d + (g < b ? 6 : 0); break;case g: h = (b - r) / d + 2; break;case b: h = (r - g) / d + 4; break}
            h /= 6 } return { h: h, s: s, v: v }}
// `hsvToRgb`// Converts an HSV color value to RGB.// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]// *Returns:* { r, g, b } in the set [0, 255]
    function hsvToRgb(h,s,v) {h = bound01(h, 360) * 6; s = bound01(s, 100); v = bound01(v, 100);
        var i = math.floor(h),  f = h - i, p = v * (1 - s),  q = v * (1 - f * s),  t = v * (1 - (1 - f) * s),  mod = i % 6,
            r = [v, q, p, p, t, v][mod],  g = [t, v, v, q, p, p][mod],  b = [p, p, t, v, v, q][mod];
        return { r: r * 255, g: g * 255, b: b * 255 }}
// `rgbToHex`// Converts an RGB color to hex// Assumes r, g, and b are contained in the set [0, 255]// Returns a 3 or 6 character hex
    function rgbToHex(r, g, b, allow3Char) {var hex = [ pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16)) ]
        // Return a 3 character hex if possible
        if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0)} return hex.join("")}// `rgbaToHex` // Converts an RGBA color plus alpha transparency to hex // Assumes r, g, b and a are contained in the set [0, 255]// Returns an 8 character hex
   rgbaToHex=function(r, g, b, a) { var hex = [pad2(convertDecimalToHex(a)), pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))]; return hex.join("")}
// `equals`// Can be called with any tinycolor input
    tinycolor.equals = function (color1, color2) {if (!color1 || !color2) { return false; }
        return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString() };
    tinycolor.random = function() {  return tinycolor.fromRatio({  r: mathRandom(),  g: mathRandom(),  b: mathRandom()  })};





// Modification Functions // Thanks to less.js for some of the basics here
    tinycolor.desaturate = function (color, amount) { amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();  hsl.s -= amount / 100; hsl.s = clamp01(hsl.s); return tinycolor(hsl) };
    tinycolor.saturate = function (color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.s += amount / 100;  hsl.s = clamp01(hsl.s);  return tinycolor(hsl)};
    tinycolor.greyscale = function(color) { return tinycolor.desaturate(color, 100)};
    tinycolor.lighten = function(color, amount) {amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();   hsl.l += amount / 100;  hsl.l = clamp01(hsl.l);  return tinycolor(hsl)  }
    tinycolor.darken = function (color, amount) {  amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl(); hsl.l -= amount / 100;  hsl.l = clamp01(hsl.l); return tinycolor(hsl)  };
    tinycolor.complement = function(color) {  var hsl = tinycolor(color).toHsl(); hsl.h = (hsl.h + 180) % 360;  return tinycolor(hsl)};
// Combination Functions
    tinycolor.triad = function(color) { var hsl = tinycolor(color).toHsl(),h = hsl.h; return [  tinycolor(color),
            tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l }) ] }
    tinycolor.tetrad = function(color) {var hsl = tinycolor(color).toHsl(),h = hsl.h;
        return [tinycolor(color), tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }), tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })]}
    tinycolor.splitcomplement = function(color) {var hsl = tinycolor(color).toHsl(),h = hsl.h;
        return [ tinycolor(color), tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l}) ]};
    tinycolor.analogous = function(color, results, slices) {results = results || 6; slices = slices || 30;
        var hsl = tinycolor(color).toHsl(),part = 360 / slices,ret = [tinycolor(color)];
        for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) { hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl))} return ret}
    tinycolor.monochromatic = function(color, results) {results = results || 6;
        var hsv = tinycolor(color).toHsv(),h = hsv.h, s = hsv.s, v = hsv.v, ret = [], modification = 1 / results;
        while (results--) {ret.push(tinycolor({ h: h, s: s, v: v}));  v = (v + modification) % 1} return ret };


// Readability Functions:  Analyze the 2 colors and returns an object with the following properties:`brightness`: difference in brightness between the two colors `color`: difference in color/hue between the two colors
    tinycolor.readability = function(color1, color2) {var a = tinycolor(color1).toRgb();
        var b = tinycolor(color2).toRgb(),  brightnessA = (a.r * 299 + a.g * 587 + a.b * 114) / 1000,
            brightnessB = (b.r * 299 + b.g * 587 + b.b * 114) / 1000,
       colorDiff = (Math.max(a.r, b.r) - Math.min(a.r, b.r) +  Math.max(a.g, b.g) - Math.min(a.g, b.g) +   Math.max(a.b, b.b) - Math.min(a.b, b.b));
        return {brightness: Math.abs(brightnessA - brightnessB), color: colorDiff }  }




//color-contrast: Ensure that foreground and background color combinations provide sufficient contrast. // *Example*  tinycolor.readable("#000", "#111") => false
    tinycolor.readable = function(color1, color2) {var readability = tinycolor.readability(color1, color2);return readability.brightness > 125 && readability.color > 500};
// Given a base color and a list of possible foreground or background colors for that base, returns the most readable color.// *Example* tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
    tinycolor.mostReadable = function(baseColor, colorList) {var bestColor = null,bestScore = 0, bestIsReadable = false;
        for (var i=0; i < colorList.length; i++) {// We normalize both around the "acceptable" breaking point, // but rank brightness constrast higher than hue.
            var readability = tinycolor.readability(baseColor, colorList[i]);
            var readable = readability.brightness > 125 && readability.color > 500;
            var score = 3 * (readability.brightness / 125) + (readability.color / 500);
            if ((readable && ! bestIsReadable) ||(readable && bestIsReadable && score > bestScore) ||
                ((! readable) && (! bestIsReadable) && score > bestScore)) {bestIsReadable = readable;
                bestScore = score; bestColor = tinycolor(colorList[i])   }  }  return bestColor  };

    var names = tinycolor.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    }// Big List of Colors
    var hexNames = tinycolor.hexNames = flip(names);// Make it easy to access colors via `hexNames[hex]`
// Utilities// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
    function flip(o) { var flipped = { }; for (var i in o) { if (o.hasOwnProperty(i)) { flipped[o[i]] = i  }  }   return flipped }
    function boundAlpha(a) {  a = parseFloat(a);   if (isNaN(a) || a < 0 || a > 1) {a = 1  } return a }// Return a valid alpha value [0,1] with all invalid values being set to 1
    function bound01(n, max) {if (isOnePointZero(n)) { n = "100%" }// Take input from [0, n] and return it as [0, 1]
        var processPercent = isPercentage(n);   n = mathMin(max, mathMax(0, parseFloat(n)));
        if (processPercent) {n = parseInt(n * max, 10) / 100}  // Automatically convert percentage into number
        if ((math.abs(n - max) < 0.000001)) {return 1}   // Handle floating point rounding errors
        return (n % max) / parseFloat(max)} // Convert into [0, 1] range if it isn't already
    function clamp01(val) {  return mathMin(1, mathMax(0, val))}//Force a number between 0 and 1
    function parseIntFromHex(val) {return parseInt(val, 16)}// Parse a base-16 hex value into a base-10 integer
// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
    function isOnePointZero(n) {return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1}
    function isPercentage(n) { return typeof n === "string" && n.indexOf('%') != -1 }// Check to see if string passed in is a percentage
    function pad2(c) {return c.length == 1 ? '0' + c : '' + c}// Force a hex value to have 2 characters
    function convertToPercentage(n) {if (n <= 1) {  n = (n * 100) + "%"  }   return n}// Replace a decimal with it's percentage value
    function convertDecimalToHex(d) {return Math.round(parseFloat(d) * 255).toString(16)}// Converts a decimal to a hex value
    function convertHexToDecimal(h) {return (parseIntFromHex(h) / 255)}// Converts a hex value to a decimal
    var matchers = (function() { var CSS_INTEGER = "[-\\+]?\\d+%?";  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")"  // Allow positive/negative integer/number. Don't capture the either/or, just the entire outcome.
        // Actual matching.  // Parentheses and commas are optional, but not required. // Whitespace can take the place of commas or opening paren
        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        return {rgb: new RegExp("rgb" + PERMISSIVE_MATCH3), rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ }})()
// `stringInputToObject`// Permissive string parsing. Take in a number of formats, and output an object// based on detected format. Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
    function stringInputToObject(color) { color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
        var named = false; if (names[color]) {color = names[color]; named = true}
        else if (color == 'transparent') {return { r: 0, g: 0, b: 0, a: 0, format: "name" }}
        // Try to match string input using regular expressions.// Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]// Just return an object and let the conversion functions handle that.// This way the result will be the same whether the tinycolor is initialized with string or object.
        var match; if ((match = matchers.rgb.exec(color))) {return { r: match[1], g: match[2], b: match[3] };}
        if ((match = matchers.rgba.exec(color))) {return { r: match[1], g: match[2], b: match[3], a: match[4] };}
        if ((match = matchers.hsl.exec(color))) {return { h: match[1], s: match[2], l: match[3] } }
        if ((match = matchers.hsla.exec(color))) {return { h: match[1], s: match[2], l: match[3], a: match[4] }}
        if ((match = matchers.hsv.exec(color))) {return { h: match[1], s: match[2], v: match[3] }}
        if ((match = matchers.hex8.exec(color))) {  return {a: convertHexToDecimal(match[1]),r: parseIntFromHex(match[2]),  g: parseIntFromHex(match[3]),b: parseIntFromHex(match[4]),format: named ? "name" : "hex8"}}
        if ((match = matchers.hex6.exec(color))) { return { r: parseIntFromHex(match[1]),  g: parseIntFromHex(match[2]),b: parseIntFromHex(match[3]), format: named ? "name" : "hex"}}
        if ((match = matchers.hex3.exec(color))) {return {  r: parseIntFromHex(match[1] + '' + match[1]), g: parseIntFromHex(match[2] + '' + match[2]),b: parseIntFromHex(match[3] + '' + match[3]), format: named ? "name" : "hex"}} return false}
if ( !U(module) && module.exports) {module.exports = tinycolor}// Node: Export function
else if (typeof define !== "undefined") {define(function () {return tinycolor})}// AMD/requirejs: Define the module
else {window.tinycolor = tinycolor}})() // Browser: Expose to window




